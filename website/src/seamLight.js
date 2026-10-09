// Animate the existing sky and amber pixels while keeping the geological terrain fixed.
// The complete still artwork remains underneath as the no-WebGL/reduced-motion fallback.
export function createSeamLight(canvas, image) {
  const gl = canvas?.getContext("webgl", { alpha: true, premultipliedAlpha: false, antialias: false, depth: false });
  if (!gl) return null;
  const vertexSource = `attribute vec2 position; varying vec2 uv;
    void main(){ uv = (position + 1.0) * 0.5; gl_Position = vec4(position,0.0,1.0); }`;
  const fragmentSource = `precision mediump float;
    uniform sampler2D plate; uniform vec2 viewport; uniform vec2 sourceSize; uniform vec2 anchor; uniform float time;
    varying vec2 uv;
    void main(){
      float scale = max(viewport.x / sourceSize.x, viewport.y / sourceSize.y);
      vec2 cover = viewport / (sourceSize * scale);
      vec2 p = vec2(uv.x, 1.0 - uv.y) * cover + (1.0-cover)*anchor;
      float sky = (1.0-smoothstep(0.29,0.46,p.y)) * smoothstep(0.30,0.57,p.x);
      vec2 cloudDrift = vec2(0.038*sin(time*0.38),0.005*sin(time*0.43+p.x*8.0));
      vec3 c = texture2D(plate,clamp(p + cloudDrift*sky,0.001,0.999)).rgb;
      // The previous green-channel cutoff excluded the hottest, brightest seam pixels.
      float orange = smoothstep(0.24,0.44,c.r-c.b) * smoothstep(0.67,0.94,c.r)
        * smoothstep(0.08,0.19,c.r-c.g);
      float region = smoothstep(0.48,0.57,p.y) * smoothstep(0.48,0.58,p.x);
      float along = (p.x - 0.52) * 1.3 + (p.y - 0.53) * 0.7;
      float phase = fract(along - time/4.2 - 0.25);
      float distance = min(phase,1.0-phase);
      float pulse = exp(-distance*distance/0.006);
      float ripple = 0.5+0.5*sin(along*65.0-time*3.0);
      float molten = orange * region;
      vec3 lit = c*(1.0-molten*(0.42-0.15*ripple));
      lit += vec3(1.0,0.52,0.06)*molten*(0.08+0.85*pulse+0.13*ripple);
      gl_FragColor = vec4(lit,1.0);
    }`;
  const shaders = [];
  const compile = (type, source) => {
    const shader = gl.createShader(type);
    gl.shaderSource(shader, source); gl.compileShader(shader); shaders.push(shader);
    return gl.getShaderParameter(shader, gl.COMPILE_STATUS) ? shader : null;
  };
  const vertex = compile(gl.VERTEX_SHADER, vertexSource);
  const fragment = compile(gl.FRAGMENT_SHADER, fragmentSource);
  const program = gl.createProgram();
  if (!vertex || !fragment) { shaders.forEach(s => gl.deleteShader(s)); gl.deleteProgram(program); return null; }
  gl.attachShader(program, vertex); gl.attachShader(program, fragment); gl.linkProgram(program);
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    shaders.forEach(s => gl.deleteShader(s)); gl.deleteProgram(program); return null;
  }
  gl.useProgram(program);
  const buffer = gl.createBuffer(); gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]), gl.STATIC_DRAW);
  const position = gl.getAttribLocation(program,"position");
  gl.enableVertexAttribArray(position); gl.vertexAttribPointer(position,2,gl.FLOAT,false,0,0);
  const texture = gl.createTexture(); gl.bindTexture(gl.TEXTURE_2D,texture);
  gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_S,gl.CLAMP_TO_EDGE);
  gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_T,gl.CLAMP_TO_EDGE);
  gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MIN_FILTER,gl.LINEAR);
  gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MAG_FILTER,gl.LINEAR);
  gl.texImage2D(gl.TEXTURE_2D,0,gl.RGBA,gl.RGBA,gl.UNSIGNED_BYTE,image);
  const viewport = gl.getUniformLocation(program,"viewport");
  const time = gl.getUniformLocation(program,"time");
  const anchor = gl.getUniformLocation(program,"anchor");
  gl.uniform2f(gl.getUniformLocation(program,"sourceSize"),image.naturalWidth,image.naturalHeight);
  const resize = () => {
    const width = canvas.clientWidth, height = canvas.clientHeight;
    const density = Math.min(window.devicePixelRatio || 1,1.25);
    canvas.width = Math.round(width*density); canvas.height = Math.round(height*density);
    gl.viewport(0,0,canvas.width,canvas.height); gl.uniform2f(viewport,width,height);
    const position = getComputedStyle(image).objectPosition.split(" ");
    gl.uniform2f(anchor,parseFloat(position[0])/100,parseFloat(position[1])/100);
  };
  const observer = new ResizeObserver(resize); observer.observe(canvas); resize();
  return {
    render(seconds) { if (gl.isContextLost()) return; gl.uniform1f(time,seconds); gl.drawArrays(gl.TRIANGLES,0,6); },
    destroy() { observer.disconnect(); gl.deleteTexture(texture); gl.deleteBuffer(buffer);
      gl.deleteProgram(program); shaders.forEach(s => gl.deleteShader(s)); },
  };
}
