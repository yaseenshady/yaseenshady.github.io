import{j as e,r as i}from"./motion-CB1FdTD2.js";import{C as M,a as x,u as y,B as g,V as j}from"./scene-1BBxJbNB.js";const b=`
  varying vec3 vNormal;
  uniform float uTime;
  void main() {
    vNormal = normalize(normalMatrix * normal);
    vec3 pos = position;
    float disp = sin(pos.x * 2.8 + uTime * 0.9) * cos(pos.y * 3.1 + uTime * 0.7) * 0.055
               + sin(pos.z * 2.5 + uTime * 1.1) * 0.038;
    pos += normal * disp;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  }
`,R=`
  varying vec3 vNormal;
  uniform float uTime;
  uniform vec3  uColor;
  void main() {
    float fresnel = pow(1.0 - clamp(vNormal.z, 0.0, 1.0), 2.4);
    float pulse   = 0.5 + 0.5 * sin(uTime * 1.7);
    vec3  edge    = uColor * (1.0 + pulse * 0.24);
    vec3  inner   = uColor * 0.06;
    gl_FragColor  = vec4(mix(inner, edge, fresnel), fresnel * 0.9 + 0.03);
  }
`,A=`
  varying vec3 vNormal;
  void main() {
    vNormal = normalize(normalMatrix * normal);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,T=`
  varying vec3 vNormal;
  uniform float uTime;
  uniform vec3  uColor;
  void main() {
    float pulse  = 0.5 + 0.5 * sin(uTime * 2.1);
    float center = 1.0 - clamp(vNormal.z, 0.0, 1.0);
    gl_FragColor = vec4(uColor * (0.5 + pulse * 0.22), center * (0.18 + pulse * 0.08));
  }
`;function z(o,u){const m=[],p=(1+Math.sqrt(5))/2;for(let c=0;c<o;c++){const l=Math.acos(1-2*(c+.5)/o),f=2*Math.PI*c/p;m.push(new j(u*Math.sin(l)*Math.cos(f),u*Math.sin(l)*Math.sin(f),u*Math.cos(l)))}return m}function C(){const o=i.useRef(),u=i.useRef(),m=i.useRef(),p=i.useMemo(()=>({uTime:{value:0},uColor:{value:new x("#ffd60a")}}),[]),c=i.useMemo(()=>({uTime:{value:0},uColor:{value:new x("#ffd60a")}}),[]),{nodePosArr:l,linePosArr:f}=i.useMemo(()=>{const n=z(72,2),r=new Float32Array(n.length*3),t=[];return n.forEach((a,s)=>{r[s*3]=a.x,r[s*3+1]=a.y,r[s*3+2]=a.z,n.slice(s+1).forEach(d=>{a.distanceTo(d)<1.08&&t.push(a.x,a.y,a.z,d.x,d.y,d.z)})}),{nodePosArr:r,linePosArr:new Float32Array(t)}},[]),v=i.useMemo(()=>{const n=new Float32Array(2100);for(let r=0;r<700;r++){const t=3.6+Math.random()*4.2,a=Math.random()*Math.PI*2,s=Math.acos(2*Math.random()-1);n[r*3]=t*Math.sin(s)*Math.cos(a),n[r*3+1]=t*Math.sin(s)*Math.sin(a),n[r*3+2]=t*Math.cos(s)}return n},[]),h=i.useRef();return y(({clock:n,mouse:r})=>{const t=n.elapsedTime;p.uTime.value=t,c.uTime.value=t,o.current&&(o.current.rotation.y+=(r.x*.4-o.current.rotation.y)*.04,o.current.rotation.x+=(-r.y*.2-o.current.rotation.x)*.04,o.current.rotation.y+=t*.012),h.current&&(h.current.rotation.y=-t*.025,h.current.rotation.x=t*.015)}),e.jsxs(e.Fragment,{children:[e.jsxs("points",{ref:h,children:[e.jsx("bufferGeometry",{children:e.jsx("bufferAttribute",{attach:"attributes-position",array:v,count:700,itemSize:3})}),e.jsx("pointsMaterial",{size:.018,color:"#ffd60a",transparent:!0,opacity:.28,sizeAttenuation:!0})]}),e.jsxs("group",{ref:o,children:[e.jsxs("lineSegments",{children:[e.jsx("bufferGeometry",{children:e.jsx("bufferAttribute",{attach:"attributes-position",array:f,count:f.length/3,itemSize:3})}),e.jsx("lineBasicMaterial",{color:"#ffd60a",transparent:!0,opacity:.14})]}),e.jsxs("points",{children:[e.jsx("bufferGeometry",{children:e.jsx("bufferAttribute",{attach:"attributes-position",array:l,count:l.length/3,itemSize:3})}),e.jsx("pointsMaterial",{size:.055,color:"#ffe066",transparent:!0,opacity:.82,sizeAttenuation:!0})]}),e.jsxs("mesh",{ref:u,children:[e.jsx("sphereGeometry",{args:[1.5,128,128]}),e.jsx("shaderMaterial",{uniforms:p,vertexShader:b,fragmentShader:R,transparent:!0,depthWrite:!1})]}),e.jsxs("mesh",{ref:m,children:[e.jsx("sphereGeometry",{args:[1.35,64,64]}),e.jsx("shaderMaterial",{uniforms:c,vertexShader:A,fragmentShader:T,transparent:!0,depthWrite:!1,side:g})]})]})]})}function F(){return e.jsxs(M,{camera:{position:[0,0,6.5],fov:52},gl:{antialias:!0,alpha:!0},dpr:[1,2],style:{background:"transparent"},children:[e.jsx("ambientLight",{intensity:.4,color:"#ffd060"}),e.jsx("pointLight",{position:[5,5,4],intensity:3,color:"#ffd60a"}),e.jsx("pointLight",{position:[-5,-3,-5],intensity:1.2,color:"#ff9000"}),e.jsx("pointLight",{position:[0,-5,3],intensity:1.8,color:"#ffffff"}),e.jsx(C,{})]})}export{F as default};
