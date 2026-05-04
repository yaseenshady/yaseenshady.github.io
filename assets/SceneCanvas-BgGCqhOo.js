import{r as ye,g as Vx,j as lt}from"./index-nj_Ey9WV.js";/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ja="169",Gx={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Wx={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Pv=0,zd=1,Iv=2,Xx=3,Lv=0,Ju=1,_a=2,Ai=3,Zi=0,Pn=1,Vi=2,dr=0,ys=1,kd=2,Hd=3,Vd=4,Dv=5,Fr=100,Uv=101,Nv=102,Ov=103,Fv=104,Bv=200,zv=201,kv=202,Hv=203,lu=204,cu=205,Vv=206,Gv=207,Wv=208,Xv=209,Yv=210,qv=211,Zv=212,jv=213,Jv=214,uu=0,hu=1,fu=2,As=3,du=4,pu=5,mu=6,gu=7,Ja=0,Kv=1,Qv=2,bi=0,$v=1,e_=2,t_=3,rp=4,n_=5,i_=6,r_=7,Gd="attached",s_="detached",Ku=300,pr=301,zr=302,Ca=303,Ra=304,Io=306,Pa=1e3,gi=1001,Ia=1002,dn=1003,sp=1004,Yx=1004,_o=1005,qx=1005,jt=1006,ya=1007,Zx=1007,Wi=1008,jx=1008,Ci=1009,op=1010,ap=1011,Ao=1012,Qu=1013,mr=1014,zn=1015,Rs=1016,$u=1017,eh=1018,Ts=1020,lp=35902,cp=1021,up=1022,Rn=1023,hp=1024,fp=1025,xs=1026,bs=1027,th=1028,Ka=1029,dp=1030,nh=1031,Jx=1032,ih=1033,xa=33776,Sa=33777,Ma=33778,wa=33779,vu=35840,_u=35841,yu=35842,xu=35843,Su=36196,Mu=37492,wu=37496,Eu=37808,Au=37809,Tu=37810,bu=37811,Cu=37812,Ru=37813,Pu=37814,Iu=37815,Lu=37816,Du=37817,Uu=37818,Nu=37819,Ou=37820,Fu=37821,Ea=36492,Bu=36494,zu=36495,pp=36283,ku=36284,Hu=36285,Vu=36286,o_=2200,a_=2201,l_=2202,La=2300,Gu=2301,ru=2302,ms=2400,gs=2401,Da=2402,rh=2500,mp=2501,Kx=0,Qx=1,$x=2,c_=3200,u_=3201,eS=3202,tS=3203,Hr=0,h_=1,ur="",mi="srgb",vr="srgb-linear",sh="display-p3",Qa="display-p3-linear",Ua="linear",zt="srgb",Na="rec709",Oa="p3",nS=0,fs=7680,iS=7681,rS=7682,sS=7683,oS=34055,aS=34056,lS=5386,cS=512,uS=513,hS=514,fS=515,dS=516,pS=517,mS=518,Wd=519,f_=512,d_=513,p_=514,gp=515,m_=516,g_=517,v_=518,__=519,Fa=35044,gS=35048,vS=35040,_S=35045,yS=35049,xS=35041,SS=35046,MS=35050,wS=35042,ES="100",Xd="300 es",Xi=2e3,Ba=2001;class ji{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,e);e.target=null}}}const Tn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Pg=1234567;const Ss=Math.PI/180,To=180/Math.PI;function ni(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Tn[r&255]+Tn[r>>8&255]+Tn[r>>16&255]+Tn[r>>24&255]+"-"+Tn[e&255]+Tn[e>>8&255]+"-"+Tn[e>>16&15|64]+Tn[e>>24&255]+"-"+Tn[t&63|128]+Tn[t>>8&255]+"-"+Tn[t>>16&255]+Tn[t>>24&255]+Tn[n&255]+Tn[n>>8&255]+Tn[n>>16&255]+Tn[n>>24&255]).toLowerCase()}function Zt(r,e,t){return Math.max(e,Math.min(t,r))}function vp(r,e){return(r%e+e)%e}function AS(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function TS(r,e,t){return r!==e?(t-r)/(e-r):0}function Aa(r,e,t){return(1-t)*r+t*e}function bS(r,e,t,n){return Aa(r,e,1-Math.exp(-t*n))}function CS(r,e=1){return e-Math.abs(vp(r,e*2)-e)}function RS(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function PS(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function IS(r,e){return r+Math.floor(Math.random()*(e-r+1))}function LS(r,e){return r+Math.random()*(e-r)}function DS(r){return r*(.5-Math.random())}function US(r){r!==void 0&&(Pg=r);let e=Pg+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function NS(r){return r*Ss}function OS(r){return r*To}function FS(r){return(r&r-1)===0&&r!==0}function BS(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function zS(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function kS(r,e,t,n,i){const s=Math.cos,a=Math.sin,c=s(t/2),u=a(t/2),h=s((e+n)/2),f=a((e+n)/2),p=s((e-n)/2),m=a((e-n)/2),g=s((n-e)/2),y=a((n-e)/2);switch(i){case"XYX":r.set(c*f,u*p,u*m,c*h);break;case"YZY":r.set(u*m,c*f,u*p,c*h);break;case"ZXZ":r.set(u*p,u*m,c*f,c*h);break;case"XZX":r.set(c*f,u*y,u*g,c*h);break;case"YXY":r.set(u*g,c*f,u*y,c*h);break;case"ZYZ":r.set(u*y,u*g,c*f,c*h);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Bn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function pt(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const Ms={DEG2RAD:Ss,RAD2DEG:To,generateUUID:ni,clamp:Zt,euclideanModulo:vp,mapLinear:AS,inverseLerp:TS,lerp:Aa,damp:bS,pingpong:CS,smoothstep:RS,smootherstep:PS,randInt:IS,randFloat:LS,randFloatSpread:DS,seededRandom:US,degToRad:NS,radToDeg:OS,isPowerOfTwo:FS,ceilPowerOfTwo:BS,floorPowerOfTwo:zS,setQuaternionFromProperEuler:kS,normalize:pt,denormalize:Bn};class fe{constructor(e=0,t=0){fe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Zt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*i+e.x,this.y=s*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class dt{constructor(e,t,n,i,s,a,c,u,h){dt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,c,u,h)}set(e,t,n,i,s,a,c,u,h){const f=this.elements;return f[0]=e,f[1]=i,f[2]=c,f[3]=t,f[4]=s,f[5]=u,f[6]=n,f[7]=a,f[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],c=n[3],u=n[6],h=n[1],f=n[4],p=n[7],m=n[2],g=n[5],y=n[8],M=i[0],x=i[3],_=i[6],E=i[1],w=i[4],T=i[7],O=i[2],P=i[5],I=i[8];return s[0]=a*M+c*E+u*O,s[3]=a*x+c*w+u*P,s[6]=a*_+c*T+u*I,s[1]=h*M+f*E+p*O,s[4]=h*x+f*w+p*P,s[7]=h*_+f*T+p*I,s[2]=m*M+g*E+y*O,s[5]=m*x+g*w+y*P,s[8]=m*_+g*T+y*I,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],c=e[5],u=e[6],h=e[7],f=e[8];return t*a*f-t*c*h-n*s*f+n*c*u+i*s*h-i*a*u}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],c=e[5],u=e[6],h=e[7],f=e[8],p=f*a-c*h,m=c*u-f*s,g=h*s-a*u,y=t*p+n*m+i*g;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/y;return e[0]=p*M,e[1]=(i*h-f*n)*M,e[2]=(c*n-i*a)*M,e[3]=m*M,e[4]=(f*t-i*u)*M,e[5]=(i*s-c*t)*M,e[6]=g*M,e[7]=(n*u-h*t)*M,e[8]=(a*t-n*s)*M,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,a,c){const u=Math.cos(s),h=Math.sin(s);return this.set(n*u,n*h,-n*(u*a+h*c)+a+e,-i*h,i*u,-i*(-h*a+u*c)+c+t,0,0,1),this}scale(e,t){return this.premultiply(zf.makeScale(e,t)),this}rotate(e){return this.premultiply(zf.makeRotation(-e)),this}translate(e,t){return this.premultiply(zf.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const zf=new dt;function y_(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}const HS={Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};function yo(r,e){return new HS[r](e)}function za(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function x_(){const r=za("canvas");return r.style.display="block",r}const Ig={};function su(r){r in Ig||(Ig[r]=!0,console.warn(r))}function VS(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}function GS(r){const e=r.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function WS(r){const e=r.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Lg=new dt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Dg=new dt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ta={[vr]:{transfer:Ua,primaries:Na,luminanceCoefficients:[.2126,.7152,.0722],toReference:r=>r,fromReference:r=>r},[mi]:{transfer:zt,primaries:Na,luminanceCoefficients:[.2126,.7152,.0722],toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[Qa]:{transfer:Ua,primaries:Oa,luminanceCoefficients:[.2289,.6917,.0793],toReference:r=>r.applyMatrix3(Dg),fromReference:r=>r.applyMatrix3(Lg)},[sh]:{transfer:zt,primaries:Oa,luminanceCoefficients:[.2289,.6917,.0793],toReference:r=>r.convertSRGBToLinear().applyMatrix3(Dg),fromReference:r=>r.applyMatrix3(Lg).convertLinearToSRGB()}},XS=new Set([vr,Qa]),Dt={enabled:!0,_workingColorSpace:vr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!XS.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,e,t){if(this.enabled===!1||e===t||!e||!t)return r;const n=ta[e].toReference,i=ta[t].fromReference;return i(n(r))},fromWorkingColorSpace:function(r,e){return this.convert(r,this._workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this._workingColorSpace)},getPrimaries:function(r){return ta[r].primaries},getTransfer:function(r){return r===ur?Ua:ta[r].transfer},getLuminanceCoefficients:function(r,e=this._workingColorSpace){return r.fromArray(ta[e].luminanceCoefficients)}};function Eo(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function kf(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let js;class S_{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{js===void 0&&(js=za("canvas")),js.width=e.width,js.height=e.height;const n=js.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=js}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=za("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=Eo(s[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Eo(t[n]/255)*255):t[n]=Eo(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let YS=0;class vs{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:YS++}),this.uuid=ni(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,c=i.length;a<c;a++)i[a].isDataTexture?s.push(Hf(i[a].image)):s.push(Hf(i[a]))}else s=Hf(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function Hf(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?S_.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let qS=0;class Jt extends ji{constructor(e=Jt.DEFAULT_IMAGE,t=Jt.DEFAULT_MAPPING,n=gi,i=gi,s=jt,a=Wi,c=Rn,u=Ci,h=Jt.DEFAULT_ANISOTROPY,f=ur){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:qS++}),this.uuid=ni(),this.name="",this.source=new vs(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=h,this.format=c,this.internalFormat=null,this.type=u,this.offset=new fe(0,0),this.repeat=new fe(1,1),this.center=new fe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new dt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ku)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Pa:e.x=e.x-Math.floor(e.x);break;case gi:e.x=e.x<0?0:1;break;case Ia:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Pa:e.y=e.y-Math.floor(e.y);break;case gi:e.y=e.y<0?0:1;break;case Ia:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Jt.DEFAULT_IMAGE=null;Jt.DEFAULT_MAPPING=Ku;Jt.DEFAULT_ANISOTROPY=1;class xt{constructor(e=0,t=0,n=0,i=1){xt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const u=e.elements,h=u[0],f=u[4],p=u[8],m=u[1],g=u[5],y=u[9],M=u[2],x=u[6],_=u[10];if(Math.abs(f-m)<.01&&Math.abs(p-M)<.01&&Math.abs(y-x)<.01){if(Math.abs(f+m)<.1&&Math.abs(p+M)<.1&&Math.abs(y+x)<.1&&Math.abs(h+g+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const w=(h+1)/2,T=(g+1)/2,O=(_+1)/2,P=(f+m)/4,I=(p+M)/4,N=(y+x)/4;return w>T&&w>O?w<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(w),i=P/n,s=I/n):T>O?T<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(T),n=P/i,s=N/i):O<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(O),n=I/s,i=N/s),this.set(n,i,s,t),this}let E=Math.sqrt((x-y)*(x-y)+(p-M)*(p-M)+(m-f)*(m-f));return Math.abs(E)<.001&&(E=1),this.x=(x-y)/E,this.y=(p-M)/E,this.z=(m-f)/E,this.w=Math.acos((h+g+_-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class M_ extends ji{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new xt(0,0,e,t),this.scissorTest=!1,this.viewport=new xt(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:jt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new Jt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let c=0;c<a;c++)this.textures[c]=s.clone(),this.textures[c].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new vs(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class vi extends M_{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class oh extends Jt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=dn,this.minFilter=dn,this.wrapR=gi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class ZS extends vi{constructor(e=1,t=1,n=1,i={}){super(e,t,i),this.isWebGLArrayRenderTarget=!0,this.depth=n,this.texture=new oh(null,e,t,n),this.texture.isRenderTargetTexture=!0}}class _p extends Jt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=dn,this.minFilter=dn,this.wrapR=gi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class jS extends vi{constructor(e=1,t=1,n=1,i={}){super(e,t,i),this.isWebGL3DRenderTarget=!0,this.depth=n,this.texture=new _p(null,e,t,n),this.texture.isRenderTargetTexture=!0}}class Yn{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,a,c){let u=n[i+0],h=n[i+1],f=n[i+2],p=n[i+3];const m=s[a+0],g=s[a+1],y=s[a+2],M=s[a+3];if(c===0){e[t+0]=u,e[t+1]=h,e[t+2]=f,e[t+3]=p;return}if(c===1){e[t+0]=m,e[t+1]=g,e[t+2]=y,e[t+3]=M;return}if(p!==M||u!==m||h!==g||f!==y){let x=1-c;const _=u*m+h*g+f*y+p*M,E=_>=0?1:-1,w=1-_*_;if(w>Number.EPSILON){const O=Math.sqrt(w),P=Math.atan2(O,_*E);x=Math.sin(x*P)/O,c=Math.sin(c*P)/O}const T=c*E;if(u=u*x+m*T,h=h*x+g*T,f=f*x+y*T,p=p*x+M*T,x===1-c){const O=1/Math.sqrt(u*u+h*h+f*f+p*p);u*=O,h*=O,f*=O,p*=O}}e[t]=u,e[t+1]=h,e[t+2]=f,e[t+3]=p}static multiplyQuaternionsFlat(e,t,n,i,s,a){const c=n[i],u=n[i+1],h=n[i+2],f=n[i+3],p=s[a],m=s[a+1],g=s[a+2],y=s[a+3];return e[t]=c*y+f*p+u*g-h*m,e[t+1]=u*y+f*m+h*p-c*g,e[t+2]=h*y+f*g+c*m-u*p,e[t+3]=f*y-c*p-u*m-h*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,a=e._order,c=Math.cos,u=Math.sin,h=c(n/2),f=c(i/2),p=c(s/2),m=u(n/2),g=u(i/2),y=u(s/2);switch(a){case"XYZ":this._x=m*f*p+h*g*y,this._y=h*g*p-m*f*y,this._z=h*f*y+m*g*p,this._w=h*f*p-m*g*y;break;case"YXZ":this._x=m*f*p+h*g*y,this._y=h*g*p-m*f*y,this._z=h*f*y-m*g*p,this._w=h*f*p+m*g*y;break;case"ZXY":this._x=m*f*p-h*g*y,this._y=h*g*p+m*f*y,this._z=h*f*y+m*g*p,this._w=h*f*p-m*g*y;break;case"ZYX":this._x=m*f*p-h*g*y,this._y=h*g*p+m*f*y,this._z=h*f*y-m*g*p,this._w=h*f*p+m*g*y;break;case"YZX":this._x=m*f*p+h*g*y,this._y=h*g*p+m*f*y,this._z=h*f*y-m*g*p,this._w=h*f*p-m*g*y;break;case"XZY":this._x=m*f*p-h*g*y,this._y=h*g*p-m*f*y,this._z=h*f*y+m*g*p,this._w=h*f*p+m*g*y;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],a=t[1],c=t[5],u=t[9],h=t[2],f=t[6],p=t[10],m=n+c+p;if(m>0){const g=.5/Math.sqrt(m+1);this._w=.25/g,this._x=(f-u)*g,this._y=(s-h)*g,this._z=(a-i)*g}else if(n>c&&n>p){const g=2*Math.sqrt(1+n-c-p);this._w=(f-u)/g,this._x=.25*g,this._y=(i+a)/g,this._z=(s+h)/g}else if(c>p){const g=2*Math.sqrt(1+c-n-p);this._w=(s-h)/g,this._x=(i+a)/g,this._y=.25*g,this._z=(u+f)/g}else{const g=2*Math.sqrt(1+p-n-c);this._w=(a-i)/g,this._x=(s+h)/g,this._y=(u+f)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Zt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,a=e._w,c=t._x,u=t._y,h=t._z,f=t._w;return this._x=n*f+a*c+i*h-s*u,this._y=i*f+a*u+s*c-n*h,this._z=s*f+a*h+n*u-i*c,this._w=a*f-n*c-i*u-s*h,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,a=this._w;let c=a*e._w+n*e._x+i*e._y+s*e._z;if(c<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,c=-c):this.copy(e),c>=1)return this._w=a,this._x=n,this._y=i,this._z=s,this;const u=1-c*c;if(u<=Number.EPSILON){const g=1-t;return this._w=g*a+t*this._w,this._x=g*n+t*this._x,this._y=g*i+t*this._y,this._z=g*s+t*this._z,this.normalize(),this}const h=Math.sqrt(u),f=Math.atan2(h,c),p=Math.sin((1-t)*f)/h,m=Math.sin(t*f)/h;return this._w=a*p+this._w*m,this._x=n*p+this._x*m,this._y=i*p+this._y*m,this._z=s*p+this._z*m,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(e=0,t=0,n=0){D.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ug.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ug.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,a=e.y,c=e.z,u=e.w,h=2*(a*i-c*n),f=2*(c*t-s*i),p=2*(s*n-a*t);return this.x=t+u*h+a*p-c*f,this.y=n+u*f+c*h-s*p,this.z=i+u*p+s*f-a*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,a=t.x,c=t.y,u=t.z;return this.x=i*u-s*c,this.y=s*a-n*u,this.z=n*c-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Vf.copy(this).projectOnVector(e),this.sub(Vf)}reflect(e){return this.sub(Vf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Zt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Vf=new D,Ug=new Yn;class pn{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Si.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Si.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Si.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,c=s.count;a<c;a++)e.isMesh===!0?e.getVertexPosition(a,Si):Si.fromBufferAttribute(s,a),Si.applyMatrix4(e.matrixWorld),this.expandByPoint(Si);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),lc.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),lc.copy(n.boundingBox)),lc.applyMatrix4(e.matrixWorld),this.union(lc)}const i=e.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Si),Si.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(na),cc.subVectors(this.max,na),Js.subVectors(e.a,na),Ks.subVectors(e.b,na),Qs.subVectors(e.c,na),Cr.subVectors(Ks,Js),Rr.subVectors(Qs,Ks),es.subVectors(Js,Qs);let t=[0,-Cr.z,Cr.y,0,-Rr.z,Rr.y,0,-es.z,es.y,Cr.z,0,-Cr.x,Rr.z,0,-Rr.x,es.z,0,-es.x,-Cr.y,Cr.x,0,-Rr.y,Rr.x,0,-es.y,es.x,0];return!Gf(t,Js,Ks,Qs,cc)||(t=[1,0,0,0,1,0,0,0,1],!Gf(t,Js,Ks,Qs,cc))?!1:(uc.crossVectors(Cr,Rr),t=[uc.x,uc.y,uc.z],Gf(t,Js,Ks,Qs,cc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Si).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Si).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(rr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),rr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),rr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),rr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),rr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),rr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),rr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),rr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(rr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const rr=[new D,new D,new D,new D,new D,new D,new D,new D],Si=new D,lc=new pn,Js=new D,Ks=new D,Qs=new D,Cr=new D,Rr=new D,es=new D,na=new D,cc=new D,uc=new D,ts=new D;function Gf(r,e,t,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){ts.fromArray(r,s);const c=i.x*Math.abs(ts.x)+i.y*Math.abs(ts.y)+i.z*Math.abs(ts.z),u=e.dot(ts),h=t.dot(ts),f=n.dot(ts);if(Math.max(-Math.max(u,h,f),Math.min(u,h,f))>c)return!1}return!0}const JS=new pn,ia=new D,Wf=new D;class mn{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):JS.setFromPoints(e).getCenter(n);let i=0;for(let s=0,a=e.length;s<a;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ia.subVectors(e,this.center);const t=ia.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(ia,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Wf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ia.copy(e.center).add(Wf)),this.expandByPoint(ia.copy(e.center).sub(Wf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const sr=new D,Xf=new D,hc=new D,Pr=new D,Yf=new D,fc=new D,qf=new D;class Lo{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,sr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=sr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(sr.copy(this.origin).addScaledVector(this.direction,t),sr.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Xf.copy(e).add(t).multiplyScalar(.5),hc.copy(t).sub(e).normalize(),Pr.copy(this.origin).sub(Xf);const s=e.distanceTo(t)*.5,a=-this.direction.dot(hc),c=Pr.dot(this.direction),u=-Pr.dot(hc),h=Pr.lengthSq(),f=Math.abs(1-a*a);let p,m,g,y;if(f>0)if(p=a*u-c,m=a*c-u,y=s*f,p>=0)if(m>=-y)if(m<=y){const M=1/f;p*=M,m*=M,g=p*(p+a*m+2*c)+m*(a*p+m+2*u)+h}else m=s,p=Math.max(0,-(a*m+c)),g=-p*p+m*(m+2*u)+h;else m=-s,p=Math.max(0,-(a*m+c)),g=-p*p+m*(m+2*u)+h;else m<=-y?(p=Math.max(0,-(-a*s+c)),m=p>0?-s:Math.min(Math.max(-s,-u),s),g=-p*p+m*(m+2*u)+h):m<=y?(p=0,m=Math.min(Math.max(-s,-u),s),g=m*(m+2*u)+h):(p=Math.max(0,-(a*s+c)),m=p>0?s:Math.min(Math.max(-s,-u),s),g=-p*p+m*(m+2*u)+h);else m=a>0?-s:s,p=Math.max(0,-(a*m+c)),g=-p*p+m*(m+2*u)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,p),i&&i.copy(Xf).addScaledVector(hc,m),g}intersectSphere(e,t){sr.subVectors(e.center,this.origin);const n=sr.dot(this.direction),i=sr.dot(sr)-n*n,s=e.radius*e.radius;if(i>s)return null;const a=Math.sqrt(s-i),c=n-a,u=n+a;return u<0?null:c<0?this.at(u,t):this.at(c,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,a,c,u;const h=1/this.direction.x,f=1/this.direction.y,p=1/this.direction.z,m=this.origin;return h>=0?(n=(e.min.x-m.x)*h,i=(e.max.x-m.x)*h):(n=(e.max.x-m.x)*h,i=(e.min.x-m.x)*h),f>=0?(s=(e.min.y-m.y)*f,a=(e.max.y-m.y)*f):(s=(e.max.y-m.y)*f,a=(e.min.y-m.y)*f),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),p>=0?(c=(e.min.z-m.z)*p,u=(e.max.z-m.z)*p):(c=(e.max.z-m.z)*p,u=(e.min.z-m.z)*p),n>u||c>i)||((c>n||n!==n)&&(n=c),(u<i||i!==i)&&(i=u),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,sr)!==null}intersectTriangle(e,t,n,i,s){Yf.subVectors(t,e),fc.subVectors(n,e),qf.crossVectors(Yf,fc);let a=this.direction.dot(qf),c;if(a>0){if(i)return null;c=1}else if(a<0)c=-1,a=-a;else return null;Pr.subVectors(this.origin,e);const u=c*this.direction.dot(fc.crossVectors(Pr,fc));if(u<0)return null;const h=c*this.direction.dot(Yf.cross(Pr));if(h<0||u+h>a)return null;const f=-c*Pr.dot(qf);return f<0?null:this.at(f/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class et{constructor(e,t,n,i,s,a,c,u,h,f,p,m,g,y,M,x){et.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,c,u,h,f,p,m,g,y,M,x)}set(e,t,n,i,s,a,c,u,h,f,p,m,g,y,M,x){const _=this.elements;return _[0]=e,_[4]=t,_[8]=n,_[12]=i,_[1]=s,_[5]=a,_[9]=c,_[13]=u,_[2]=h,_[6]=f,_[10]=p,_[14]=m,_[3]=g,_[7]=y,_[11]=M,_[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new et().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/$s.setFromMatrixColumn(e,0).length(),s=1/$s.setFromMatrixColumn(e,1).length(),a=1/$s.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,a=Math.cos(n),c=Math.sin(n),u=Math.cos(i),h=Math.sin(i),f=Math.cos(s),p=Math.sin(s);if(e.order==="XYZ"){const m=a*f,g=a*p,y=c*f,M=c*p;t[0]=u*f,t[4]=-u*p,t[8]=h,t[1]=g+y*h,t[5]=m-M*h,t[9]=-c*u,t[2]=M-m*h,t[6]=y+g*h,t[10]=a*u}else if(e.order==="YXZ"){const m=u*f,g=u*p,y=h*f,M=h*p;t[0]=m+M*c,t[4]=y*c-g,t[8]=a*h,t[1]=a*p,t[5]=a*f,t[9]=-c,t[2]=g*c-y,t[6]=M+m*c,t[10]=a*u}else if(e.order==="ZXY"){const m=u*f,g=u*p,y=h*f,M=h*p;t[0]=m-M*c,t[4]=-a*p,t[8]=y+g*c,t[1]=g+y*c,t[5]=a*f,t[9]=M-m*c,t[2]=-a*h,t[6]=c,t[10]=a*u}else if(e.order==="ZYX"){const m=a*f,g=a*p,y=c*f,M=c*p;t[0]=u*f,t[4]=y*h-g,t[8]=m*h+M,t[1]=u*p,t[5]=M*h+m,t[9]=g*h-y,t[2]=-h,t[6]=c*u,t[10]=a*u}else if(e.order==="YZX"){const m=a*u,g=a*h,y=c*u,M=c*h;t[0]=u*f,t[4]=M-m*p,t[8]=y*p+g,t[1]=p,t[5]=a*f,t[9]=-c*f,t[2]=-h*f,t[6]=g*p+y,t[10]=m-M*p}else if(e.order==="XZY"){const m=a*u,g=a*h,y=c*u,M=c*h;t[0]=u*f,t[4]=-p,t[8]=h*f,t[1]=m*p+M,t[5]=a*f,t[9]=g*p-y,t[2]=y*p-g,t[6]=c*f,t[10]=M*p+m}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(KS,e,QS)}lookAt(e,t,n){const i=this.elements;return $n.subVectors(e,t),$n.lengthSq()===0&&($n.z=1),$n.normalize(),Ir.crossVectors(n,$n),Ir.lengthSq()===0&&(Math.abs(n.z)===1?$n.x+=1e-4:$n.z+=1e-4,$n.normalize(),Ir.crossVectors(n,$n)),Ir.normalize(),dc.crossVectors($n,Ir),i[0]=Ir.x,i[4]=dc.x,i[8]=$n.x,i[1]=Ir.y,i[5]=dc.y,i[9]=$n.y,i[2]=Ir.z,i[6]=dc.z,i[10]=$n.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],c=n[4],u=n[8],h=n[12],f=n[1],p=n[5],m=n[9],g=n[13],y=n[2],M=n[6],x=n[10],_=n[14],E=n[3],w=n[7],T=n[11],O=n[15],P=i[0],I=i[4],N=i[8],W=i[12],b=i[1],C=i[5],X=i[9],q=i[13],K=i[2],le=i[6],Z=i[10],me=i[14],z=i[3],se=i[7],te=i[11],ce=i[15];return s[0]=a*P+c*b+u*K+h*z,s[4]=a*I+c*C+u*le+h*se,s[8]=a*N+c*X+u*Z+h*te,s[12]=a*W+c*q+u*me+h*ce,s[1]=f*P+p*b+m*K+g*z,s[5]=f*I+p*C+m*le+g*se,s[9]=f*N+p*X+m*Z+g*te,s[13]=f*W+p*q+m*me+g*ce,s[2]=y*P+M*b+x*K+_*z,s[6]=y*I+M*C+x*le+_*se,s[10]=y*N+M*X+x*Z+_*te,s[14]=y*W+M*q+x*me+_*ce,s[3]=E*P+w*b+T*K+O*z,s[7]=E*I+w*C+T*le+O*se,s[11]=E*N+w*X+T*Z+O*te,s[15]=E*W+w*q+T*me+O*ce,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],a=e[1],c=e[5],u=e[9],h=e[13],f=e[2],p=e[6],m=e[10],g=e[14],y=e[3],M=e[7],x=e[11],_=e[15];return y*(+s*u*p-i*h*p-s*c*m+n*h*m+i*c*g-n*u*g)+M*(+t*u*g-t*h*m+s*a*m-i*a*g+i*h*f-s*u*f)+x*(+t*h*p-t*c*g-s*a*p+n*a*g+s*c*f-n*h*f)+_*(-i*c*f-t*u*p+t*c*m+i*a*p-n*a*m+n*u*f)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],c=e[5],u=e[6],h=e[7],f=e[8],p=e[9],m=e[10],g=e[11],y=e[12],M=e[13],x=e[14],_=e[15],E=p*x*h-M*m*h+M*u*g-c*x*g-p*u*_+c*m*_,w=y*m*h-f*x*h-y*u*g+a*x*g+f*u*_-a*m*_,T=f*M*h-y*p*h+y*c*g-a*M*g-f*c*_+a*p*_,O=y*p*u-f*M*u-y*c*m+a*M*m+f*c*x-a*p*x,P=t*E+n*w+i*T+s*O;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/P;return e[0]=E*I,e[1]=(M*m*s-p*x*s-M*i*g+n*x*g+p*i*_-n*m*_)*I,e[2]=(c*x*s-M*u*s+M*i*h-n*x*h-c*i*_+n*u*_)*I,e[3]=(p*u*s-c*m*s-p*i*h+n*m*h+c*i*g-n*u*g)*I,e[4]=w*I,e[5]=(f*x*s-y*m*s+y*i*g-t*x*g-f*i*_+t*m*_)*I,e[6]=(y*u*s-a*x*s-y*i*h+t*x*h+a*i*_-t*u*_)*I,e[7]=(a*m*s-f*u*s+f*i*h-t*m*h-a*i*g+t*u*g)*I,e[8]=T*I,e[9]=(y*p*s-f*M*s-y*n*g+t*M*g+f*n*_-t*p*_)*I,e[10]=(a*M*s-y*c*s+y*n*h-t*M*h-a*n*_+t*c*_)*I,e[11]=(f*c*s-a*p*s-f*n*h+t*p*h+a*n*g-t*c*g)*I,e[12]=O*I,e[13]=(f*M*i-y*p*i+y*n*m-t*M*m-f*n*x+t*p*x)*I,e[14]=(y*c*i-a*M*i-y*n*u+t*M*u+a*n*x-t*c*x)*I,e[15]=(a*p*i-f*c*i+f*n*u-t*p*u-a*n*m+t*c*m)*I,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,a=e.x,c=e.y,u=e.z,h=s*a,f=s*c;return this.set(h*a+n,h*c-i*u,h*u+i*c,0,h*c+i*u,f*c+n,f*u-i*a,0,h*u-i*c,f*u+i*a,s*u*u+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,a){return this.set(1,n,s,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,a=t._y,c=t._z,u=t._w,h=s+s,f=a+a,p=c+c,m=s*h,g=s*f,y=s*p,M=a*f,x=a*p,_=c*p,E=u*h,w=u*f,T=u*p,O=n.x,P=n.y,I=n.z;return i[0]=(1-(M+_))*O,i[1]=(g+T)*O,i[2]=(y-w)*O,i[3]=0,i[4]=(g-T)*P,i[5]=(1-(m+_))*P,i[6]=(x+E)*P,i[7]=0,i[8]=(y+w)*I,i[9]=(x-E)*I,i[10]=(1-(m+M))*I,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=$s.set(i[0],i[1],i[2]).length();const a=$s.set(i[4],i[5],i[6]).length(),c=$s.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],Mi.copy(this);const h=1/s,f=1/a,p=1/c;return Mi.elements[0]*=h,Mi.elements[1]*=h,Mi.elements[2]*=h,Mi.elements[4]*=f,Mi.elements[5]*=f,Mi.elements[6]*=f,Mi.elements[8]*=p,Mi.elements[9]*=p,Mi.elements[10]*=p,t.setFromRotationMatrix(Mi),n.x=s,n.y=a,n.z=c,this}makePerspective(e,t,n,i,s,a,c=Xi){const u=this.elements,h=2*s/(t-e),f=2*s/(n-i),p=(t+e)/(t-e),m=(n+i)/(n-i);let g,y;if(c===Xi)g=-(a+s)/(a-s),y=-2*a*s/(a-s);else if(c===Ba)g=-a/(a-s),y=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+c);return u[0]=h,u[4]=0,u[8]=p,u[12]=0,u[1]=0,u[5]=f,u[9]=m,u[13]=0,u[2]=0,u[6]=0,u[10]=g,u[14]=y,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(e,t,n,i,s,a,c=Xi){const u=this.elements,h=1/(t-e),f=1/(n-i),p=1/(a-s),m=(t+e)*h,g=(n+i)*f;let y,M;if(c===Xi)y=(a+s)*p,M=-2*p;else if(c===Ba)y=s*p,M=-1*p;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+c);return u[0]=2*h,u[4]=0,u[8]=0,u[12]=-m,u[1]=0,u[5]=2*f,u[9]=0,u[13]=-g,u[2]=0,u[6]=0,u[10]=M,u[14]=-y,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const $s=new D,Mi=new et,KS=new D(0,0,0),QS=new D(1,1,1),Ir=new D,dc=new D,$n=new D,Ng=new et,Og=new Yn;class ii{constructor(e=0,t=0,n=0,i=ii.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],a=i[4],c=i[8],u=i[1],h=i[5],f=i[9],p=i[2],m=i[6],g=i[10];switch(t){case"XYZ":this._y=Math.asin(Zt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-f,g),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(m,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Zt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(c,g),this._z=Math.atan2(u,h)):(this._y=Math.atan2(-p,s),this._z=0);break;case"ZXY":this._x=Math.asin(Zt(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-p,g),this._z=Math.atan2(-a,h)):(this._y=0,this._z=Math.atan2(u,s));break;case"ZYX":this._y=Math.asin(-Zt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(m,g),this._z=Math.atan2(u,s)):(this._x=0,this._z=Math.atan2(-a,h));break;case"YZX":this._z=Math.asin(Zt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-f,h),this._y=Math.atan2(-p,s)):(this._x=0,this._y=Math.atan2(c,g));break;case"XZY":this._z=Math.asin(-Zt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(m,h),this._y=Math.atan2(c,s)):(this._x=Math.atan2(-f,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Ng.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ng,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Og.setFromEuler(this),this.setFromQuaternion(Og,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ii.DEFAULT_ORDER="XYZ";class ws{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let $S=0;const Fg=new D,eo=new Yn,or=new et,pc=new D,ra=new D,eM=new D,tM=new Yn,Bg=new D(1,0,0),zg=new D(0,1,0),kg=new D(0,0,1),Hg={type:"added"},nM={type:"removed"},to={type:"childadded",child:null},Zf={type:"childremoved",child:null};class Ct extends ji{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:$S++}),this.uuid=ni(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ct.DEFAULT_UP.clone();const e=new D,t=new ii,n=new Yn,i=new D(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new et},normalMatrix:{value:new dt}}),this.matrix=new et,this.matrixWorld=new et,this.matrixAutoUpdate=Ct.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ct.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ws,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return eo.setFromAxisAngle(e,t),this.quaternion.multiply(eo),this}rotateOnWorldAxis(e,t){return eo.setFromAxisAngle(e,t),this.quaternion.premultiply(eo),this}rotateX(e){return this.rotateOnAxis(Bg,e)}rotateY(e){return this.rotateOnAxis(zg,e)}rotateZ(e){return this.rotateOnAxis(kg,e)}translateOnAxis(e,t){return Fg.copy(e).applyQuaternion(this.quaternion),this.position.add(Fg.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Bg,e)}translateY(e){return this.translateOnAxis(zg,e)}translateZ(e){return this.translateOnAxis(kg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(or.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?pc.copy(e):pc.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),ra.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?or.lookAt(ra,pc,this.up):or.lookAt(pc,ra,this.up),this.quaternion.setFromRotationMatrix(or),i&&(or.extractRotation(i.matrixWorld),eo.setFromRotationMatrix(or),this.quaternion.premultiply(eo.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Hg),to.child=e,this.dispatchEvent(to),to.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(nM),Zf.child=e,this.dispatchEvent(Zf),Zf.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),or.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),or.multiply(e.parent.matrixWorld)),e.applyMatrix4(or),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Hg),to.child=e,this.dispatchEvent(to),to.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ra,e,eM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ra,tM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(c=>({boxInitialized:c.boxInitialized,boxMin:c.box.min.toArray(),boxMax:c.box.max.toArray(),sphereInitialized:c.sphereInitialized,sphereRadius:c.sphere.radius,sphereCenter:c.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(c,u){return c[u.uuid]===void 0&&(c[u.uuid]=u.toJSON(e)),u.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){const u=c.shapes;if(Array.isArray(u))for(let h=0,f=u.length;h<f;h++){const p=u[h];s(e.shapes,p)}else s(e.shapes,u)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const c=[];for(let u=0,h=this.material.length;u<h;u++)c.push(s(e.materials,this.material[u]));i.material=c}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let c=0;c<this.children.length;c++)i.children.push(this.children[c].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let c=0;c<this.animations.length;c++){const u=this.animations[c];i.animations.push(s(e.animations,u))}}if(t){const c=a(e.geometries),u=a(e.materials),h=a(e.textures),f=a(e.images),p=a(e.shapes),m=a(e.skeletons),g=a(e.animations),y=a(e.nodes);c.length>0&&(n.geometries=c),u.length>0&&(n.materials=u),h.length>0&&(n.textures=h),f.length>0&&(n.images=f),p.length>0&&(n.shapes=p),m.length>0&&(n.skeletons=m),g.length>0&&(n.animations=g),y.length>0&&(n.nodes=y)}return n.object=i,n;function a(c){const u=[];for(const h in c){const f=c[h];delete f.metadata,u.push(f)}return u}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Ct.DEFAULT_UP=new D(0,1,0);Ct.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ct.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const wi=new D,ar=new D,jf=new D,lr=new D,no=new D,io=new D,Vg=new D,Jf=new D,Kf=new D,Qf=new D,$f=new xt,ed=new xt,td=new xt;class Xn{constructor(e=new D,t=new D,n=new D){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),wi.subVectors(e,t),i.cross(wi);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){wi.subVectors(i,t),ar.subVectors(n,t),jf.subVectors(e,t);const a=wi.dot(wi),c=wi.dot(ar),u=wi.dot(jf),h=ar.dot(ar),f=ar.dot(jf),p=a*h-c*c;if(p===0)return s.set(0,0,0),null;const m=1/p,g=(h*u-c*f)*m,y=(a*f-c*u)*m;return s.set(1-g-y,y,g)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,lr)===null?!1:lr.x>=0&&lr.y>=0&&lr.x+lr.y<=1}static getInterpolation(e,t,n,i,s,a,c,u){return this.getBarycoord(e,t,n,i,lr)===null?(u.x=0,u.y=0,"z"in u&&(u.z=0),"w"in u&&(u.w=0),null):(u.setScalar(0),u.addScaledVector(s,lr.x),u.addScaledVector(a,lr.y),u.addScaledVector(c,lr.z),u)}static getInterpolatedAttribute(e,t,n,i,s,a){return $f.setScalar(0),ed.setScalar(0),td.setScalar(0),$f.fromBufferAttribute(e,t),ed.fromBufferAttribute(e,n),td.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector($f,s.x),a.addScaledVector(ed,s.y),a.addScaledVector(td,s.z),a}static isFrontFacing(e,t,n,i){return wi.subVectors(n,t),ar.subVectors(e,t),wi.cross(ar).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return wi.subVectors(this.c,this.b),ar.subVectors(this.a,this.b),wi.cross(ar).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Xn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Xn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return Xn.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return Xn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Xn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let a,c;no.subVectors(i,n),io.subVectors(s,n),Jf.subVectors(e,n);const u=no.dot(Jf),h=io.dot(Jf);if(u<=0&&h<=0)return t.copy(n);Kf.subVectors(e,i);const f=no.dot(Kf),p=io.dot(Kf);if(f>=0&&p<=f)return t.copy(i);const m=u*p-f*h;if(m<=0&&u>=0&&f<=0)return a=u/(u-f),t.copy(n).addScaledVector(no,a);Qf.subVectors(e,s);const g=no.dot(Qf),y=io.dot(Qf);if(y>=0&&g<=y)return t.copy(s);const M=g*h-u*y;if(M<=0&&h>=0&&y<=0)return c=h/(h-y),t.copy(n).addScaledVector(io,c);const x=f*y-g*p;if(x<=0&&p-f>=0&&g-y>=0)return Vg.subVectors(s,i),c=(p-f)/(p-f+(g-y)),t.copy(i).addScaledVector(Vg,c);const _=1/(x+M+m);return a=M*_,c=m*_,t.copy(n).addScaledVector(no,a).addScaledVector(io,c)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const w_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Lr={h:0,s:0,l:0},mc={h:0,s:0,l:0};function nd(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class Pe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=mi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Dt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Dt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Dt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Dt.workingColorSpace){if(e=vp(e,1),t=Zt(t,0,1),n=Zt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=nd(a,s,e+1/3),this.g=nd(a,s,e),this.b=nd(a,s,e-1/3)}return Dt.toWorkingColorSpace(this,i),this}setStyle(e,t=mi){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=i[1],c=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=mi){const n=w_[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Eo(e.r),this.g=Eo(e.g),this.b=Eo(e.b),this}copyLinearToSRGB(e){return this.r=kf(e.r),this.g=kf(e.g),this.b=kf(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=mi){return Dt.fromWorkingColorSpace(bn.copy(this),e),Math.round(Zt(bn.r*255,0,255))*65536+Math.round(Zt(bn.g*255,0,255))*256+Math.round(Zt(bn.b*255,0,255))}getHexString(e=mi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Dt.workingColorSpace){Dt.fromWorkingColorSpace(bn.copy(this),t);const n=bn.r,i=bn.g,s=bn.b,a=Math.max(n,i,s),c=Math.min(n,i,s);let u,h;const f=(c+a)/2;if(c===a)u=0,h=0;else{const p=a-c;switch(h=f<=.5?p/(a+c):p/(2-a-c),a){case n:u=(i-s)/p+(i<s?6:0);break;case i:u=(s-n)/p+2;break;case s:u=(n-i)/p+4;break}u/=6}return e.h=u,e.s=h,e.l=f,e}getRGB(e,t=Dt.workingColorSpace){return Dt.fromWorkingColorSpace(bn.copy(this),t),e.r=bn.r,e.g=bn.g,e.b=bn.b,e}getStyle(e=mi){Dt.fromWorkingColorSpace(bn.copy(this),e);const t=bn.r,n=bn.g,i=bn.b;return e!==mi?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Lr),this.setHSL(Lr.h+e,Lr.s+t,Lr.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Lr),e.getHSL(mc);const n=Aa(Lr.h,mc.h,t),i=Aa(Lr.s,mc.s,t),s=Aa(Lr.l,mc.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const bn=new Pe;Pe.NAMES=w_;let iM=0;class In extends ji{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:iM++}),this.uuid=ni(),this.name="",this.type="Material",this.blending=ys,this.side=Zi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=lu,this.blendDst=cu,this.blendEquation=Fr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Pe(0,0,0),this.blendAlpha=0,this.depthFunc=As,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Wd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=fs,this.stencilZFail=fs,this.stencilZPass=fs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ys&&(n.blending=this.blending),this.side!==Zi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==lu&&(n.blendSrc=this.blendSrc),this.blendDst!==cu&&(n.blendDst=this.blendDst),this.blendEquation!==Fr&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==As&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Wd&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==fs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==fs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==fs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const a=[];for(const c in s){const u=s[c];delete u.metadata,a.push(u)}return a}if(t){const s=i(e.textures),a=i(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Vr extends In{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Pe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ii,this.combine=Ja,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const hr=rM();function rM(){const r=new ArrayBuffer(4),e=new Float32Array(r),t=new Uint32Array(r),n=new Uint32Array(512),i=new Uint32Array(512);for(let u=0;u<256;++u){const h=u-127;h<-27?(n[u]=0,n[u|256]=32768,i[u]=24,i[u|256]=24):h<-14?(n[u]=1024>>-h-14,n[u|256]=1024>>-h-14|32768,i[u]=-h-1,i[u|256]=-h-1):h<=15?(n[u]=h+15<<10,n[u|256]=h+15<<10|32768,i[u]=13,i[u|256]=13):h<128?(n[u]=31744,n[u|256]=64512,i[u]=24,i[u|256]=24):(n[u]=31744,n[u|256]=64512,i[u]=13,i[u|256]=13)}const s=new Uint32Array(2048),a=new Uint32Array(64),c=new Uint32Array(64);for(let u=1;u<1024;++u){let h=u<<13,f=0;for(;!(h&8388608);)h<<=1,f-=8388608;h&=-8388609,f+=947912704,s[u]=h|f}for(let u=1024;u<2048;++u)s[u]=939524096+(u-1024<<13);for(let u=1;u<31;++u)a[u]=u<<23;a[31]=1199570944,a[32]=2147483648;for(let u=33;u<63;++u)a[u]=2147483648+(u-32<<23);a[63]=3347054592;for(let u=1;u<64;++u)u!==32&&(c[u]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:i,mantissaTable:s,exponentTable:a,offsetTable:c}}function Wn(r){Math.abs(r)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),r=Zt(r,-65504,65504),hr.floatView[0]=r;const e=hr.uint32View[0],t=e>>23&511;return hr.baseTable[t]+((e&8388607)>>hr.shiftTable[t])}function ga(r){const e=r>>10;return hr.uint32View[0]=hr.mantissaTable[hr.offsetTable[e]+(r&1023)]+hr.exponentTable[e],hr.floatView[0]}const sM={toHalfFloat:Wn,fromHalfFloat:ga},nn=new D,gc=new fe;class Ot{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Fa,this.updateRanges=[],this.gpuType=zn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)gc.fromBufferAttribute(this,t),gc.applyMatrix3(e),this.setXY(t,gc.x,gc.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)nn.fromBufferAttribute(this,t),nn.applyMatrix3(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)nn.fromBufferAttribute(this,t),nn.applyMatrix4(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)nn.fromBufferAttribute(this,t),nn.applyNormalMatrix(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)nn.fromBufferAttribute(this,t),nn.transformDirection(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Bn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=pt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Bn(t,this.array)),t}setX(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Bn(t,this.array)),t}setY(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Bn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Bn(t,this.array)),t}setW(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=pt(t,this.array),n=pt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=pt(t,this.array),n=pt(n,this.array),i=pt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=pt(t,this.array),n=pt(n,this.array),i=pt(i,this.array),s=pt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Fa&&(e.usage=this.usage),e}}class oM extends Ot{constructor(e,t,n){super(new Int8Array(e),t,n)}}class aM extends Ot{constructor(e,t,n){super(new Uint8Array(e),t,n)}}class lM extends Ot{constructor(e,t,n){super(new Uint8ClampedArray(e),t,n)}}class cM extends Ot{constructor(e,t,n){super(new Int16Array(e),t,n)}}class yp extends Ot{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class uM extends Ot{constructor(e,t,n){super(new Int32Array(e),t,n)}}class xp extends Ot{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class hM extends Ot{constructor(e,t,n){super(new Uint16Array(e),t,n),this.isFloat16BufferAttribute=!0}getX(e){let t=ga(this.array[e*this.itemSize]);return this.normalized&&(t=Bn(t,this.array)),t}setX(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize]=Wn(t),this}getY(e){let t=ga(this.array[e*this.itemSize+1]);return this.normalized&&(t=Bn(t,this.array)),t}setY(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize+1]=Wn(t),this}getZ(e){let t=ga(this.array[e*this.itemSize+2]);return this.normalized&&(t=Bn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize+2]=Wn(t),this}getW(e){let t=ga(this.array[e*this.itemSize+3]);return this.normalized&&(t=Bn(t,this.array)),t}setW(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize+3]=Wn(t),this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=pt(t,this.array),n=pt(n,this.array)),this.array[e+0]=Wn(t),this.array[e+1]=Wn(n),this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=pt(t,this.array),n=pt(n,this.array),i=pt(i,this.array)),this.array[e+0]=Wn(t),this.array[e+1]=Wn(n),this.array[e+2]=Wn(i),this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=pt(t,this.array),n=pt(n,this.array),i=pt(i,this.array),s=pt(s,this.array)),this.array[e+0]=Wn(t),this.array[e+1]=Wn(n),this.array[e+2]=Wn(i),this.array[e+3]=Wn(s),this}}class We extends Ot{constructor(e,t,n){super(new Float32Array(e),t,n)}}let fM=0;const pi=new et,id=new Ct,ro=new D,ei=new pn,sa=new pn,hn=new D;class vt extends ji{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:fM++}),this.uuid=ni(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(y_(e)?xp:yp)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new dt().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return pi.makeRotationFromQuaternion(e),this.applyMatrix4(pi),this}rotateX(e){return pi.makeRotationX(e),this.applyMatrix4(pi),this}rotateY(e){return pi.makeRotationY(e),this.applyMatrix4(pi),this}rotateZ(e){return pi.makeRotationZ(e),this.applyMatrix4(pi),this}translate(e,t,n){return pi.makeTranslation(e,t,n),this.applyMatrix4(pi),this}scale(e,t,n){return pi.makeScale(e,t,n),this.applyMatrix4(pi),this}lookAt(e){return id.lookAt(e),id.updateMatrix(),this.applyMatrix4(id.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ro).negate(),this.translate(ro.x,ro.y,ro.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new We(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new pn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];ei.setFromBufferAttribute(s),this.morphTargetsRelative?(hn.addVectors(this.boundingBox.min,ei.min),this.boundingBox.expandByPoint(hn),hn.addVectors(this.boundingBox.max,ei.max),this.boundingBox.expandByPoint(hn)):(this.boundingBox.expandByPoint(ei.min),this.boundingBox.expandByPoint(ei.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new mn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(e){const n=this.boundingSphere.center;if(ei.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const c=t[s];sa.setFromBufferAttribute(c),this.morphTargetsRelative?(hn.addVectors(ei.min,sa.min),ei.expandByPoint(hn),hn.addVectors(ei.max,sa.max),ei.expandByPoint(hn)):(ei.expandByPoint(sa.min),ei.expandByPoint(sa.max))}ei.getCenter(n);let i=0;for(let s=0,a=e.count;s<a;s++)hn.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(hn));if(t)for(let s=0,a=t.length;s<a;s++){const c=t[s],u=this.morphTargetsRelative;for(let h=0,f=c.count;h<f;h++)hn.fromBufferAttribute(c,h),u&&(ro.fromBufferAttribute(e,h),hn.add(ro)),i=Math.max(i,n.distanceToSquared(hn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ot(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),c=[],u=[];for(let N=0;N<n.count;N++)c[N]=new D,u[N]=new D;const h=new D,f=new D,p=new D,m=new fe,g=new fe,y=new fe,M=new D,x=new D;function _(N,W,b){h.fromBufferAttribute(n,N),f.fromBufferAttribute(n,W),p.fromBufferAttribute(n,b),m.fromBufferAttribute(s,N),g.fromBufferAttribute(s,W),y.fromBufferAttribute(s,b),f.sub(h),p.sub(h),g.sub(m),y.sub(m);const C=1/(g.x*y.y-y.x*g.y);isFinite(C)&&(M.copy(f).multiplyScalar(y.y).addScaledVector(p,-g.y).multiplyScalar(C),x.copy(p).multiplyScalar(g.x).addScaledVector(f,-y.x).multiplyScalar(C),c[N].add(M),c[W].add(M),c[b].add(M),u[N].add(x),u[W].add(x),u[b].add(x))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let N=0,W=E.length;N<W;++N){const b=E[N],C=b.start,X=b.count;for(let q=C,K=C+X;q<K;q+=3)_(e.getX(q+0),e.getX(q+1),e.getX(q+2))}const w=new D,T=new D,O=new D,P=new D;function I(N){O.fromBufferAttribute(i,N),P.copy(O);const W=c[N];w.copy(W),w.sub(O.multiplyScalar(O.dot(W))).normalize(),T.crossVectors(P,W);const C=T.dot(u[N])<0?-1:1;a.setXYZW(N,w.x,w.y,w.z,C)}for(let N=0,W=E.length;N<W;++N){const b=E[N],C=b.start,X=b.count;for(let q=C,K=C+X;q<K;q+=3)I(e.getX(q+0)),I(e.getX(q+1)),I(e.getX(q+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ot(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let m=0,g=n.count;m<g;m++)n.setXYZ(m,0,0,0);const i=new D,s=new D,a=new D,c=new D,u=new D,h=new D,f=new D,p=new D;if(e)for(let m=0,g=e.count;m<g;m+=3){const y=e.getX(m+0),M=e.getX(m+1),x=e.getX(m+2);i.fromBufferAttribute(t,y),s.fromBufferAttribute(t,M),a.fromBufferAttribute(t,x),f.subVectors(a,s),p.subVectors(i,s),f.cross(p),c.fromBufferAttribute(n,y),u.fromBufferAttribute(n,M),h.fromBufferAttribute(n,x),c.add(f),u.add(f),h.add(f),n.setXYZ(y,c.x,c.y,c.z),n.setXYZ(M,u.x,u.y,u.z),n.setXYZ(x,h.x,h.y,h.z)}else for(let m=0,g=t.count;m<g;m+=3)i.fromBufferAttribute(t,m+0),s.fromBufferAttribute(t,m+1),a.fromBufferAttribute(t,m+2),f.subVectors(a,s),p.subVectors(i,s),f.cross(p),n.setXYZ(m+0,f.x,f.y,f.z),n.setXYZ(m+1,f.x,f.y,f.z),n.setXYZ(m+2,f.x,f.y,f.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)hn.fromBufferAttribute(e,t),hn.normalize(),e.setXYZ(t,hn.x,hn.y,hn.z)}toNonIndexed(){function e(c,u){const h=c.array,f=c.itemSize,p=c.normalized,m=new h.constructor(u.length*f);let g=0,y=0;for(let M=0,x=u.length;M<x;M++){c.isInterleavedBufferAttribute?g=u[M]*c.data.stride+c.offset:g=u[M]*f;for(let _=0;_<f;_++)m[y++]=h[g++]}return new Ot(m,f,p)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new vt,n=this.index.array,i=this.attributes;for(const c in i){const u=i[c],h=e(u,n);t.setAttribute(c,h)}const s=this.morphAttributes;for(const c in s){const u=[],h=s[c];for(let f=0,p=h.length;f<p;f++){const m=h[f],g=e(m,n);u.push(g)}t.morphAttributes[c]=u}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const u=this.parameters;for(const h in u)u[h]!==void 0&&(e[h]=u[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const u in n){const h=n[u];e.data.attributes[u]=h.toJSON(e.data)}const i={};let s=!1;for(const u in this.morphAttributes){const h=this.morphAttributes[u],f=[];for(let p=0,m=h.length;p<m;p++){const g=h[p];f.push(g.toJSON(e.data))}f.length>0&&(i[u]=f,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const c=this.boundingSphere;return c!==null&&(e.data.boundingSphere={center:c.center.toArray(),radius:c.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const h in i){const f=i[h];this.setAttribute(h,f.clone(t))}const s=e.morphAttributes;for(const h in s){const f=[],p=s[h];for(let m=0,g=p.length;m<g;m++)f.push(p[m].clone(t));this.morphAttributes[h]=f}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let h=0,f=a.length;h<f;h++){const p=a[h];this.addGroup(p.start,p.count,p.materialIndex)}const c=e.boundingBox;c!==null&&(this.boundingBox=c.clone());const u=e.boundingSphere;return u!==null&&(this.boundingSphere=u.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Gg=new et,ns=new Lo,vc=new mn,Wg=new D,_c=new D,yc=new D,xc=new D,rd=new D,Sc=new D,Xg=new D,Mc=new D;class $t extends Ct{constructor(e=new vt,t=new Vr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const c=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const c=this.morphTargetInfluences;if(s&&c){Sc.set(0,0,0);for(let u=0,h=s.length;u<h;u++){const f=c[u],p=s[u];f!==0&&(rd.fromBufferAttribute(p,e),a?Sc.addScaledVector(rd,f):Sc.addScaledVector(rd.sub(t),f))}t.add(Sc)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),vc.copy(n.boundingSphere),vc.applyMatrix4(s),ns.copy(e.ray).recast(e.near),!(vc.containsPoint(ns.origin)===!1&&(ns.intersectSphere(vc,Wg)===null||ns.origin.distanceToSquared(Wg)>(e.far-e.near)**2))&&(Gg.copy(s).invert(),ns.copy(e.ray).applyMatrix4(Gg),!(n.boundingBox!==null&&ns.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ns)))}_computeIntersections(e,t,n){let i;const s=this.geometry,a=this.material,c=s.index,u=s.attributes.position,h=s.attributes.uv,f=s.attributes.uv1,p=s.attributes.normal,m=s.groups,g=s.drawRange;if(c!==null)if(Array.isArray(a))for(let y=0,M=m.length;y<M;y++){const x=m[y],_=a[x.materialIndex],E=Math.max(x.start,g.start),w=Math.min(c.count,Math.min(x.start+x.count,g.start+g.count));for(let T=E,O=w;T<O;T+=3){const P=c.getX(T),I=c.getX(T+1),N=c.getX(T+2);i=wc(this,_,e,n,h,f,p,P,I,N),i&&(i.faceIndex=Math.floor(T/3),i.face.materialIndex=x.materialIndex,t.push(i))}}else{const y=Math.max(0,g.start),M=Math.min(c.count,g.start+g.count);for(let x=y,_=M;x<_;x+=3){const E=c.getX(x),w=c.getX(x+1),T=c.getX(x+2);i=wc(this,a,e,n,h,f,p,E,w,T),i&&(i.faceIndex=Math.floor(x/3),t.push(i))}}else if(u!==void 0)if(Array.isArray(a))for(let y=0,M=m.length;y<M;y++){const x=m[y],_=a[x.materialIndex],E=Math.max(x.start,g.start),w=Math.min(u.count,Math.min(x.start+x.count,g.start+g.count));for(let T=E,O=w;T<O;T+=3){const P=T,I=T+1,N=T+2;i=wc(this,_,e,n,h,f,p,P,I,N),i&&(i.faceIndex=Math.floor(T/3),i.face.materialIndex=x.materialIndex,t.push(i))}}else{const y=Math.max(0,g.start),M=Math.min(u.count,g.start+g.count);for(let x=y,_=M;x<_;x+=3){const E=x,w=x+1,T=x+2;i=wc(this,a,e,n,h,f,p,E,w,T),i&&(i.faceIndex=Math.floor(x/3),t.push(i))}}}}function dM(r,e,t,n,i,s,a,c){let u;if(e.side===Pn?u=n.intersectTriangle(a,s,i,!0,c):u=n.intersectTriangle(i,s,a,e.side===Zi,c),u===null)return null;Mc.copy(c),Mc.applyMatrix4(r.matrixWorld);const h=t.ray.origin.distanceTo(Mc);return h<t.near||h>t.far?null:{distance:h,point:Mc.clone(),object:r}}function wc(r,e,t,n,i,s,a,c,u,h){r.getVertexPosition(c,_c),r.getVertexPosition(u,yc),r.getVertexPosition(h,xc);const f=dM(r,e,t,n,_c,yc,xc,Xg);if(f){const p=new D;Xn.getBarycoord(Xg,_c,yc,xc,p),i&&(f.uv=Xn.getInterpolatedAttribute(i,c,u,h,p,new fe)),s&&(f.uv1=Xn.getInterpolatedAttribute(s,c,u,h,p,new fe)),a&&(f.normal=Xn.getInterpolatedAttribute(a,c,u,h,p,new D),f.normal.dot(n.direction)>0&&f.normal.multiplyScalar(-1));const m={a:c,b:u,c:h,normal:new D,materialIndex:0};Xn.getNormal(_c,yc,xc,m.normal),f.face=m,f.barycoord=p}return f}class Ps extends vt{constructor(e=1,t=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};const c=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);const u=[],h=[],f=[],p=[];let m=0,g=0;y("z","y","x",-1,-1,n,t,e,a,s,0),y("z","y","x",1,-1,n,t,-e,a,s,1),y("x","z","y",1,1,e,n,t,i,a,2),y("x","z","y",1,-1,e,n,-t,i,a,3),y("x","y","z",1,-1,e,t,n,i,s,4),y("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(u),this.setAttribute("position",new We(h,3)),this.setAttribute("normal",new We(f,3)),this.setAttribute("uv",new We(p,2));function y(M,x,_,E,w,T,O,P,I,N,W){const b=T/I,C=O/N,X=T/2,q=O/2,K=P/2,le=I+1,Z=N+1;let me=0,z=0;const se=new D;for(let te=0;te<Z;te++){const ce=te*C-q;for(let Be=0;Be<le;Be++){const Xe=Be*b-X;se[M]=Xe*E,se[x]=ce*w,se[_]=K,h.push(se.x,se.y,se.z),se[M]=0,se[x]=0,se[_]=P>0?1:-1,f.push(se.x,se.y,se.z),p.push(Be/I),p.push(1-te/N),me+=1}}for(let te=0;te<N;te++)for(let ce=0;ce<I;ce++){const Be=m+ce+le*te,Xe=m+ce+le*(te+1),ne=m+(ce+1)+le*(te+1),pe=m+(ce+1)+le*te;u.push(Be,Xe,pe),u.push(Xe,ne,pe),z+=6}c.addGroup(g,z,W),g+=z,m+=me}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ps(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function bo(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Fn(r){const e={};for(let t=0;t<r.length;t++){const n=bo(r[t]);for(const i in n)e[i]=n[i]}return e}function pM(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function E_(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Dt.workingColorSpace}const ka={clone:bo,merge:Fn};var mM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,gM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ri extends In{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=mM,this.fragmentShader=gM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=bo(e.uniforms),this.uniformsGroups=pM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class $a extends Ct{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new et,this.projectionMatrix=new et,this.projectionMatrixInverse=new et,this.coordinateSystem=Xi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Dr=new D,Yg=new fe,qg=new fe;class fn extends $a{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=To*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ss*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return To*2*Math.atan(Math.tan(Ss*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Dr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Dr.x,Dr.y).multiplyScalar(-e/Dr.z),Dr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Dr.x,Dr.y).multiplyScalar(-e/Dr.z)}getViewSize(e,t){return this.getViewBounds(e,Yg,qg),t.subVectors(qg,Yg)}setViewOffset(e,t,n,i,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ss*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const u=a.fullWidth,h=a.fullHeight;s+=a.offsetX*i/u,t-=a.offsetY*n/h,i*=a.width/u,n*=a.height/h}const c=this.filmOffset;c!==0&&(s+=e*c/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const so=-90,oo=1;class A_ extends Ct{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new fn(so,oo,e,t);i.layers=this.layers,this.add(i);const s=new fn(so,oo,e,t);s.layers=this.layers,this.add(s);const a=new fn(so,oo,e,t);a.layers=this.layers,this.add(a);const c=new fn(so,oo,e,t);c.layers=this.layers,this.add(c);const u=new fn(so,oo,e,t);u.layers=this.layers,this.add(u);const h=new fn(so,oo,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,a,c,u]=t;for(const h of t)this.remove(h);if(e===Xi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),c.up.set(0,1,0),c.lookAt(0,0,1),u.up.set(0,1,0),u.lookAt(0,0,-1);else if(e===Ba)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),c.up.set(0,-1,0),c.lookAt(0,0,1),u.up.set(0,-1,0),u.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,c,u,h,f]=this.children,p=e.getRenderTarget(),m=e.getActiveCubeFace(),g=e.getActiveMipmapLevel(),y=e.xr.enabled;e.xr.enabled=!1;const M=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,c),e.setRenderTarget(n,3,i),e.render(t,u),e.setRenderTarget(n,4,i),e.render(t,h),n.texture.generateMipmaps=M,e.setRenderTarget(n,5,i),e.render(t,f),e.setRenderTarget(p,m,g),e.xr.enabled=y,n.texture.needsPMREMUpdate=!0}}class el extends Jt{constructor(e,t,n,i,s,a,c,u,h,f){e=e!==void 0?e:[],t=t!==void 0?t:pr,super(e,t,n,i,s,a,c,u,h,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class T_ extends vi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new el(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:jt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Ps(5,5,5),s=new ri({name:"CubemapFromEquirect",uniforms:bo(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Pn,blending:dr});s.uniforms.tEquirect.value=t;const a=new $t(i,s),c=t.minFilter;return t.minFilter===Wi&&(t.minFilter=jt),new A_(1,10,this).update(e,a),t.minFilter=c,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(s)}}const sd=new D,vM=new D,_M=new dt;class Or{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=sd.subVectors(n,t).cross(vM.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(sd),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||_M.getNormalMatrix(e),i=this.coplanarPoint(sd).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const is=new mn,Ec=new D;class tl{constructor(e=new Or,t=new Or,n=new Or,i=new Or,s=new Or,a=new Or){this.planes=[e,t,n,i,s,a]}set(e,t,n,i,s,a){const c=this.planes;return c[0].copy(e),c[1].copy(t),c[2].copy(n),c[3].copy(i),c[4].copy(s),c[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Xi){const n=this.planes,i=e.elements,s=i[0],a=i[1],c=i[2],u=i[3],h=i[4],f=i[5],p=i[6],m=i[7],g=i[8],y=i[9],M=i[10],x=i[11],_=i[12],E=i[13],w=i[14],T=i[15];if(n[0].setComponents(u-s,m-h,x-g,T-_).normalize(),n[1].setComponents(u+s,m+h,x+g,T+_).normalize(),n[2].setComponents(u+a,m+f,x+y,T+E).normalize(),n[3].setComponents(u-a,m-f,x-y,T-E).normalize(),n[4].setComponents(u-c,m-p,x-M,T-w).normalize(),t===Xi)n[5].setComponents(u+c,m+p,x+M,T+w).normalize();else if(t===Ba)n[5].setComponents(c,p,M,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),is.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),is.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(is)}intersectsSprite(e){return is.center.set(0,0,0),is.radius=.7071067811865476,is.applyMatrix4(e.matrixWorld),this.intersectsSphere(is)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Ec.x=i.normal.x>0?e.max.x:e.min.x,Ec.y=i.normal.y>0?e.max.y:e.min.y,Ec.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Ec)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function b_(){let r=null,e=!1,t=null,n=null;function i(s,a){t(s,a),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function yM(r){const e=new WeakMap;function t(c,u){const h=c.array,f=c.usage,p=h.byteLength,m=r.createBuffer();r.bindBuffer(u,m),r.bufferData(u,h,f),c.onUploadCallback();let g;if(h instanceof Float32Array)g=r.FLOAT;else if(h instanceof Uint16Array)c.isFloat16BufferAttribute?g=r.HALF_FLOAT:g=r.UNSIGNED_SHORT;else if(h instanceof Int16Array)g=r.SHORT;else if(h instanceof Uint32Array)g=r.UNSIGNED_INT;else if(h instanceof Int32Array)g=r.INT;else if(h instanceof Int8Array)g=r.BYTE;else if(h instanceof Uint8Array)g=r.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)g=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:m,type:g,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version,size:p}}function n(c,u,h){const f=u.array,p=u.updateRanges;if(r.bindBuffer(h,c),p.length===0)r.bufferSubData(h,0,f);else{p.sort((g,y)=>g.start-y.start);let m=0;for(let g=1;g<p.length;g++){const y=p[m],M=p[g];M.start<=y.start+y.count+1?y.count=Math.max(y.count,M.start+M.count-y.start):(++m,p[m]=M)}p.length=m+1;for(let g=0,y=p.length;g<y;g++){const M=p[g];r.bufferSubData(h,M.start*f.BYTES_PER_ELEMENT,f,M.start,M.count)}u.clearUpdateRanges()}u.onUploadCallback()}function i(c){return c.isInterleavedBufferAttribute&&(c=c.data),e.get(c)}function s(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=e.get(c);u&&(r.deleteBuffer(u.buffer),e.delete(c))}function a(c,u){if(c.isInterleavedBufferAttribute&&(c=c.data),c.isGLBufferAttribute){const f=e.get(c);(!f||f.version<c.version)&&e.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}const h=e.get(c);if(h===void 0)e.set(c,t(c,u));else if(h.version<c.version){if(h.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(h.buffer,c,u),h.version=c.version}}return{get:i,remove:s,update:a}}class Do extends vt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,a=t/2,c=Math.floor(n),u=Math.floor(i),h=c+1,f=u+1,p=e/c,m=t/u,g=[],y=[],M=[],x=[];for(let _=0;_<f;_++){const E=_*m-a;for(let w=0;w<h;w++){const T=w*p-s;y.push(T,-E,0),M.push(0,0,1),x.push(w/c),x.push(1-_/u)}}for(let _=0;_<u;_++)for(let E=0;E<c;E++){const w=E+h*_,T=E+h*(_+1),O=E+1+h*(_+1),P=E+1+h*_;g.push(w,T,P),g.push(T,O,P)}this.setIndex(g),this.setAttribute("position",new We(y,3)),this.setAttribute("normal",new We(M,3)),this.setAttribute("uv",new We(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Do(e.width,e.height,e.widthSegments,e.heightSegments)}}var xM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,SM=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,MM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,wM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,EM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,AM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,TM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,bM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,CM=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,RM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,PM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,IM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,LM=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,DM=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,UM=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,NM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,OM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,FM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,BM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,zM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,kM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,HM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,VM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,GM=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,WM=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,XM=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,YM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,qM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ZM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,jM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,JM="gl_FragColor = linearToOutputTexel( gl_FragColor );",KM=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,QM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,$M=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,e1=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,t1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,n1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,i1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,r1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,s1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,o1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,a1=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,l1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,c1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,u1=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,h1=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,f1=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,d1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,p1=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,m1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,g1=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,v1=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,_1=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,y1=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,x1=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,S1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,M1=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,w1=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,E1=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,A1=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,T1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,b1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,C1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,R1=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,P1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,I1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,L1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,D1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,U1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,N1=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,O1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,F1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,B1=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,z1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,k1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,H1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,V1=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,G1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,W1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,X1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Y1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,q1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Z1=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,j1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,J1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,K1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Q1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,$1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ew=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,tw=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,nw=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,iw=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,rw=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,sw=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ow=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,aw=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,lw=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,cw=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,uw=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,hw=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,fw=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,dw=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,pw=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,mw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,gw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,vw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,_w=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const yw=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,xw=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Mw=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ww=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ew=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Aw=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Tw=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,bw=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Cw=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Rw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Pw=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Iw=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Lw=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Dw=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Uw=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Nw=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ow=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Fw=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Bw=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zw=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,kw=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Hw=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Vw=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gw=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Ww=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xw=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Yw=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qw=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Zw=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,jw=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Jw=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Kw=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Qw=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,mt={alphahash_fragment:xM,alphahash_pars_fragment:SM,alphamap_fragment:MM,alphamap_pars_fragment:wM,alphatest_fragment:EM,alphatest_pars_fragment:AM,aomap_fragment:TM,aomap_pars_fragment:bM,batching_pars_vertex:CM,batching_vertex:RM,begin_vertex:PM,beginnormal_vertex:IM,bsdfs:LM,iridescence_fragment:DM,bumpmap_pars_fragment:UM,clipping_planes_fragment:NM,clipping_planes_pars_fragment:OM,clipping_planes_pars_vertex:FM,clipping_planes_vertex:BM,color_fragment:zM,color_pars_fragment:kM,color_pars_vertex:HM,color_vertex:VM,common:GM,cube_uv_reflection_fragment:WM,defaultnormal_vertex:XM,displacementmap_pars_vertex:YM,displacementmap_vertex:qM,emissivemap_fragment:ZM,emissivemap_pars_fragment:jM,colorspace_fragment:JM,colorspace_pars_fragment:KM,envmap_fragment:QM,envmap_common_pars_fragment:$M,envmap_pars_fragment:e1,envmap_pars_vertex:t1,envmap_physical_pars_fragment:f1,envmap_vertex:n1,fog_vertex:i1,fog_pars_vertex:r1,fog_fragment:s1,fog_pars_fragment:o1,gradientmap_pars_fragment:a1,lightmap_pars_fragment:l1,lights_lambert_fragment:c1,lights_lambert_pars_fragment:u1,lights_pars_begin:h1,lights_toon_fragment:d1,lights_toon_pars_fragment:p1,lights_phong_fragment:m1,lights_phong_pars_fragment:g1,lights_physical_fragment:v1,lights_physical_pars_fragment:_1,lights_fragment_begin:y1,lights_fragment_maps:x1,lights_fragment_end:S1,logdepthbuf_fragment:M1,logdepthbuf_pars_fragment:w1,logdepthbuf_pars_vertex:E1,logdepthbuf_vertex:A1,map_fragment:T1,map_pars_fragment:b1,map_particle_fragment:C1,map_particle_pars_fragment:R1,metalnessmap_fragment:P1,metalnessmap_pars_fragment:I1,morphinstance_vertex:L1,morphcolor_vertex:D1,morphnormal_vertex:U1,morphtarget_pars_vertex:N1,morphtarget_vertex:O1,normal_fragment_begin:F1,normal_fragment_maps:B1,normal_pars_fragment:z1,normal_pars_vertex:k1,normal_vertex:H1,normalmap_pars_fragment:V1,clearcoat_normal_fragment_begin:G1,clearcoat_normal_fragment_maps:W1,clearcoat_pars_fragment:X1,iridescence_pars_fragment:Y1,opaque_fragment:q1,packing:Z1,premultiplied_alpha_fragment:j1,project_vertex:J1,dithering_fragment:K1,dithering_pars_fragment:Q1,roughnessmap_fragment:$1,roughnessmap_pars_fragment:ew,shadowmap_pars_fragment:tw,shadowmap_pars_vertex:nw,shadowmap_vertex:iw,shadowmask_pars_fragment:rw,skinbase_vertex:sw,skinning_pars_vertex:ow,skinning_vertex:aw,skinnormal_vertex:lw,specularmap_fragment:cw,specularmap_pars_fragment:uw,tonemapping_fragment:hw,tonemapping_pars_fragment:fw,transmission_fragment:dw,transmission_pars_fragment:pw,uv_pars_fragment:mw,uv_pars_vertex:gw,uv_vertex:vw,worldpos_vertex:_w,background_vert:yw,background_frag:xw,backgroundCube_vert:Sw,backgroundCube_frag:Mw,cube_vert:ww,cube_frag:Ew,depth_vert:Aw,depth_frag:Tw,distanceRGBA_vert:bw,distanceRGBA_frag:Cw,equirect_vert:Rw,equirect_frag:Pw,linedashed_vert:Iw,linedashed_frag:Lw,meshbasic_vert:Dw,meshbasic_frag:Uw,meshlambert_vert:Nw,meshlambert_frag:Ow,meshmatcap_vert:Fw,meshmatcap_frag:Bw,meshnormal_vert:zw,meshnormal_frag:kw,meshphong_vert:Hw,meshphong_frag:Vw,meshphysical_vert:Gw,meshphysical_frag:Ww,meshtoon_vert:Xw,meshtoon_frag:Yw,points_vert:qw,points_frag:Zw,shadow_vert:jw,shadow_frag:Jw,sprite_vert:Kw,sprite_frag:Qw},Ae={common:{diffuse:{value:new Pe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new dt}},envmap:{envMap:{value:null},envMapRotation:{value:new dt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new dt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new dt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new dt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new dt},normalScale:{value:new fe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new dt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new dt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new dt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new dt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Pe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Pe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0},uvTransform:{value:new dt}},sprite:{diffuse:{value:new Pe(16777215)},opacity:{value:1},center:{value:new fe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}}},Ti={basic:{uniforms:Fn([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.fog]),vertexShader:mt.meshbasic_vert,fragmentShader:mt.meshbasic_frag},lambert:{uniforms:Fn([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new Pe(0)}}]),vertexShader:mt.meshlambert_vert,fragmentShader:mt.meshlambert_frag},phong:{uniforms:Fn([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new Pe(0)},specular:{value:new Pe(1118481)},shininess:{value:30}}]),vertexShader:mt.meshphong_vert,fragmentShader:mt.meshphong_frag},standard:{uniforms:Fn([Ae.common,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.roughnessmap,Ae.metalnessmap,Ae.fog,Ae.lights,{emissive:{value:new Pe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:mt.meshphysical_vert,fragmentShader:mt.meshphysical_frag},toon:{uniforms:Fn([Ae.common,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.gradientmap,Ae.fog,Ae.lights,{emissive:{value:new Pe(0)}}]),vertexShader:mt.meshtoon_vert,fragmentShader:mt.meshtoon_frag},matcap:{uniforms:Fn([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,{matcap:{value:null}}]),vertexShader:mt.meshmatcap_vert,fragmentShader:mt.meshmatcap_frag},points:{uniforms:Fn([Ae.points,Ae.fog]),vertexShader:mt.points_vert,fragmentShader:mt.points_frag},dashed:{uniforms:Fn([Ae.common,Ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:mt.linedashed_vert,fragmentShader:mt.linedashed_frag},depth:{uniforms:Fn([Ae.common,Ae.displacementmap]),vertexShader:mt.depth_vert,fragmentShader:mt.depth_frag},normal:{uniforms:Fn([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,{opacity:{value:1}}]),vertexShader:mt.meshnormal_vert,fragmentShader:mt.meshnormal_frag},sprite:{uniforms:Fn([Ae.sprite,Ae.fog]),vertexShader:mt.sprite_vert,fragmentShader:mt.sprite_frag},background:{uniforms:{uvTransform:{value:new dt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:mt.background_vert,fragmentShader:mt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new dt}},vertexShader:mt.backgroundCube_vert,fragmentShader:mt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:mt.cube_vert,fragmentShader:mt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:mt.equirect_vert,fragmentShader:mt.equirect_frag},distanceRGBA:{uniforms:Fn([Ae.common,Ae.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:mt.distanceRGBA_vert,fragmentShader:mt.distanceRGBA_frag},shadow:{uniforms:Fn([Ae.lights,Ae.fog,{color:{value:new Pe(0)},opacity:{value:1}}]),vertexShader:mt.shadow_vert,fragmentShader:mt.shadow_frag}};Ti.physical={uniforms:Fn([Ti.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new dt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new dt},clearcoatNormalScale:{value:new fe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new dt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new dt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new dt},sheen:{value:0},sheenColor:{value:new Pe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new dt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new dt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new dt},transmissionSamplerSize:{value:new fe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new dt},attenuationDistance:{value:0},attenuationColor:{value:new Pe(0)},specularColor:{value:new Pe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new dt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new dt},anisotropyVector:{value:new fe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new dt}}]),vertexShader:mt.meshphysical_vert,fragmentShader:mt.meshphysical_frag};const Ac={r:0,b:0,g:0},rs=new ii,$w=new et;function eE(r,e,t,n,i,s,a){const c=new Pe(0);let u=s===!0?0:1,h,f,p=null,m=0,g=null;function y(E){let w=E.isScene===!0?E.background:null;return w&&w.isTexture&&(w=(E.backgroundBlurriness>0?t:e).get(w)),w}function M(E){let w=!1;const T=y(E);T===null?_(c,u):T&&T.isColor&&(_(T,1),w=!0);const O=r.xr.getEnvironmentBlendMode();O==="additive"?n.buffers.color.setClear(0,0,0,1,a):O==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(r.autoClear||w)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function x(E,w){const T=y(w);T&&(T.isCubeTexture||T.mapping===Io)?(f===void 0&&(f=new $t(new Ps(1,1,1),new ri({name:"BackgroundCubeMaterial",uniforms:bo(Ti.backgroundCube.uniforms),vertexShader:Ti.backgroundCube.vertexShader,fragmentShader:Ti.backgroundCube.fragmentShader,side:Pn,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(O,P,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(f)),rs.copy(w.backgroundRotation),rs.x*=-1,rs.y*=-1,rs.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(rs.y*=-1,rs.z*=-1),f.material.uniforms.envMap.value=T,f.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,f.material.uniforms.backgroundRotation.value.setFromMatrix4($w.makeRotationFromEuler(rs)),f.material.toneMapped=Dt.getTransfer(T.colorSpace)!==zt,(p!==T||m!==T.version||g!==r.toneMapping)&&(f.material.needsUpdate=!0,p=T,m=T.version,g=r.toneMapping),f.layers.enableAll(),E.unshift(f,f.geometry,f.material,0,0,null)):T&&T.isTexture&&(h===void 0&&(h=new $t(new Do(2,2),new ri({name:"BackgroundMaterial",uniforms:bo(Ti.background.uniforms),vertexShader:Ti.background.vertexShader,fragmentShader:Ti.background.fragmentShader,side:Zi,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(h)),h.material.uniforms.t2D.value=T,h.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,h.material.toneMapped=Dt.getTransfer(T.colorSpace)!==zt,T.matrixAutoUpdate===!0&&T.updateMatrix(),h.material.uniforms.uvTransform.value.copy(T.matrix),(p!==T||m!==T.version||g!==r.toneMapping)&&(h.material.needsUpdate=!0,p=T,m=T.version,g=r.toneMapping),h.layers.enableAll(),E.unshift(h,h.geometry,h.material,0,0,null))}function _(E,w){E.getRGB(Ac,E_(r)),n.buffers.color.setClear(Ac.r,Ac.g,Ac.b,w,a)}return{getClearColor:function(){return c},setClearColor:function(E,w=1){c.set(E),u=w,_(c,u)},getClearAlpha:function(){return u},setClearAlpha:function(E){u=E,_(c,u)},render:M,addToRenderList:x}}function tE(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=m(null);let s=i,a=!1;function c(b,C,X,q,K){let le=!1;const Z=p(q,X,C);s!==Z&&(s=Z,h(s.object)),le=g(b,q,X,K),le&&y(b,q,X,K),K!==null&&e.update(K,r.ELEMENT_ARRAY_BUFFER),(le||a)&&(a=!1,T(b,C,X,q),K!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(K).buffer))}function u(){return r.createVertexArray()}function h(b){return r.bindVertexArray(b)}function f(b){return r.deleteVertexArray(b)}function p(b,C,X){const q=X.wireframe===!0;let K=n[b.id];K===void 0&&(K={},n[b.id]=K);let le=K[C.id];le===void 0&&(le={},K[C.id]=le);let Z=le[q];return Z===void 0&&(Z=m(u()),le[q]=Z),Z}function m(b){const C=[],X=[],q=[];for(let K=0;K<t;K++)C[K]=0,X[K]=0,q[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:X,attributeDivisors:q,object:b,attributes:{},index:null}}function g(b,C,X,q){const K=s.attributes,le=C.attributes;let Z=0;const me=X.getAttributes();for(const z in me)if(me[z].location>=0){const te=K[z];let ce=le[z];if(ce===void 0&&(z==="instanceMatrix"&&b.instanceMatrix&&(ce=b.instanceMatrix),z==="instanceColor"&&b.instanceColor&&(ce=b.instanceColor)),te===void 0||te.attribute!==ce||ce&&te.data!==ce.data)return!0;Z++}return s.attributesNum!==Z||s.index!==q}function y(b,C,X,q){const K={},le=C.attributes;let Z=0;const me=X.getAttributes();for(const z in me)if(me[z].location>=0){let te=le[z];te===void 0&&(z==="instanceMatrix"&&b.instanceMatrix&&(te=b.instanceMatrix),z==="instanceColor"&&b.instanceColor&&(te=b.instanceColor));const ce={};ce.attribute=te,te&&te.data&&(ce.data=te.data),K[z]=ce,Z++}s.attributes=K,s.attributesNum=Z,s.index=q}function M(){const b=s.newAttributes;for(let C=0,X=b.length;C<X;C++)b[C]=0}function x(b){_(b,0)}function _(b,C){const X=s.newAttributes,q=s.enabledAttributes,K=s.attributeDivisors;X[b]=1,q[b]===0&&(r.enableVertexAttribArray(b),q[b]=1),K[b]!==C&&(r.vertexAttribDivisor(b,C),K[b]=C)}function E(){const b=s.newAttributes,C=s.enabledAttributes;for(let X=0,q=C.length;X<q;X++)C[X]!==b[X]&&(r.disableVertexAttribArray(X),C[X]=0)}function w(b,C,X,q,K,le,Z){Z===!0?r.vertexAttribIPointer(b,C,X,K,le):r.vertexAttribPointer(b,C,X,q,K,le)}function T(b,C,X,q){M();const K=q.attributes,le=X.getAttributes(),Z=C.defaultAttributeValues;for(const me in le){const z=le[me];if(z.location>=0){let se=K[me];if(se===void 0&&(me==="instanceMatrix"&&b.instanceMatrix&&(se=b.instanceMatrix),me==="instanceColor"&&b.instanceColor&&(se=b.instanceColor)),se!==void 0){const te=se.normalized,ce=se.itemSize,Be=e.get(se);if(Be===void 0)continue;const Xe=Be.buffer,ne=Be.type,pe=Be.bytesPerElement,be=ne===r.INT||ne===r.UNSIGNED_INT||se.gpuType===Qu;if(se.isInterleavedBufferAttribute){const Se=se.data,rt=Se.stride,Qe=se.offset;if(Se.isInstancedInterleavedBuffer){for(let st=0;st<z.locationSize;st++)_(z.location+st,Se.meshPerAttribute);b.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=Se.meshPerAttribute*Se.count)}else for(let st=0;st<z.locationSize;st++)x(z.location+st);r.bindBuffer(r.ARRAY_BUFFER,Xe);for(let st=0;st<z.locationSize;st++)w(z.location+st,ce/z.locationSize,ne,te,rt*pe,(Qe+ce/z.locationSize*st)*pe,be)}else{if(se.isInstancedBufferAttribute){for(let Se=0;Se<z.locationSize;Se++)_(z.location+Se,se.meshPerAttribute);b.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let Se=0;Se<z.locationSize;Se++)x(z.location+Se);r.bindBuffer(r.ARRAY_BUFFER,Xe);for(let Se=0;Se<z.locationSize;Se++)w(z.location+Se,ce/z.locationSize,ne,te,ce*pe,ce/z.locationSize*Se*pe,be)}}else if(Z!==void 0){const te=Z[me];if(te!==void 0)switch(te.length){case 2:r.vertexAttrib2fv(z.location,te);break;case 3:r.vertexAttrib3fv(z.location,te);break;case 4:r.vertexAttrib4fv(z.location,te);break;default:r.vertexAttrib1fv(z.location,te)}}}}E()}function O(){N();for(const b in n){const C=n[b];for(const X in C){const q=C[X];for(const K in q)f(q[K].object),delete q[K];delete C[X]}delete n[b]}}function P(b){if(n[b.id]===void 0)return;const C=n[b.id];for(const X in C){const q=C[X];for(const K in q)f(q[K].object),delete q[K];delete C[X]}delete n[b.id]}function I(b){for(const C in n){const X=n[C];if(X[b.id]===void 0)continue;const q=X[b.id];for(const K in q)f(q[K].object),delete q[K];delete X[b.id]}}function N(){W(),a=!0,s!==i&&(s=i,h(s.object))}function W(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:c,reset:N,resetDefaultState:W,dispose:O,releaseStatesOfGeometry:P,releaseStatesOfProgram:I,initAttributes:M,enableAttribute:x,disableUnusedAttributes:E}}function nE(r,e,t){let n;function i(h){n=h}function s(h,f){r.drawArrays(n,h,f),t.update(f,n,1)}function a(h,f,p){p!==0&&(r.drawArraysInstanced(n,h,f,p),t.update(f,n,p))}function c(h,f,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,h,0,f,0,p);let g=0;for(let y=0;y<p;y++)g+=f[y];t.update(g,n,1)}function u(h,f,p,m){if(p===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let y=0;y<h.length;y++)a(h[y],f[y],m[y]);else{g.multiDrawArraysInstancedWEBGL(n,h,0,f,0,m,0,p);let y=0;for(let M=0;M<p;M++)y+=f[M];for(let M=0;M<m.length;M++)t.update(y,n,m[M])}}this.setMode=i,this.render=s,this.renderInstances=a,this.renderMultiDraw=c,this.renderMultiDrawInstances=u}function iE(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const I=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(I){return!(I!==Rn&&n.convert(I)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function c(I){const N=I===Rs&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(I!==Ci&&n.convert(I)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==zn&&!N)}function u(I){if(I==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=t.precision!==void 0?t.precision:"highp";const f=u(h);f!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",f,"instead."),h=f);const p=t.logarithmicDepthBuffer===!0,m=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(m===!0){const I=e.get("EXT_clip_control");I.clipControlEXT(I.LOWER_LEFT_EXT,I.ZERO_TO_ONE_EXT)}const g=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),y=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=r.getParameter(r.MAX_TEXTURE_SIZE),x=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),_=r.getParameter(r.MAX_VERTEX_ATTRIBS),E=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),w=r.getParameter(r.MAX_VARYING_VECTORS),T=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),O=y>0,P=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:u,textureFormatReadable:a,textureTypeReadable:c,precision:h,logarithmicDepthBuffer:p,reverseDepthBuffer:m,maxTextures:g,maxVertexTextures:y,maxTextureSize:M,maxCubemapSize:x,maxAttributes:_,maxVertexUniforms:E,maxVaryings:w,maxFragmentUniforms:T,vertexTextures:O,maxSamples:P}}function rE(r){const e=this;let t=null,n=0,i=!1,s=!1;const a=new Or,c=new dt,u={value:null,needsUpdate:!1};this.uniform=u,this.numPlanes=0,this.numIntersection=0,this.init=function(p,m){const g=p.length!==0||m||n!==0||i;return i=m,n=p.length,g},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(p,m){t=f(p,m,0)},this.setState=function(p,m,g){const y=p.clippingPlanes,M=p.clipIntersection,x=p.clipShadows,_=r.get(p);if(!i||y===null||y.length===0||s&&!x)s?f(null):h();else{const E=s?0:n,w=E*4;let T=_.clippingState||null;u.value=T,T=f(y,m,w,g);for(let O=0;O!==w;++O)T[O]=t[O];_.clippingState=T,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=E}};function h(){u.value!==t&&(u.value=t,u.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function f(p,m,g,y){const M=p!==null?p.length:0;let x=null;if(M!==0){if(x=u.value,y!==!0||x===null){const _=g+M*4,E=m.matrixWorldInverse;c.getNormalMatrix(E),(x===null||x.length<_)&&(x=new Float32Array(_));for(let w=0,T=g;w!==M;++w,T+=4)a.copy(p[w]).applyMatrix4(E,c),a.normal.toArray(x,T),x[T+3]=a.constant}u.value=x,u.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,x}}function sE(r){let e=new WeakMap;function t(a,c){return c===Ca?a.mapping=pr:c===Ra&&(a.mapping=zr),a}function n(a){if(a&&a.isTexture){const c=a.mapping;if(c===Ca||c===Ra)if(e.has(a)){const u=e.get(a).texture;return t(u,a.mapping)}else{const u=a.image;if(u&&u.height>0){const h=new T_(u.height);return h.fromEquirectangularTexture(r,a),e.set(a,h),a.addEventListener("dispose",i),t(h.texture,a.mapping)}else return null}}return a}function i(a){const c=a.target;c.removeEventListener("dispose",i);const u=e.get(c);u!==void 0&&(e.delete(c),u.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class nl extends $a{constructor(e=-1,t=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,a=n+e,c=i+t,u=i-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=h*this.view.offsetX,a=s+h*this.view.width,c-=f*this.view.offsetY,u=c-f*this.view.height}this.projectionMatrix.makeOrthographic(s,a,c,u,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const xo=4,Zg=[.125,.215,.35,.446,.526,.582],ps=20,od=new nl,jg=new Pe;let ad=null,ld=0,cd=0,ud=!1;const ds=(1+Math.sqrt(5))/2,ao=1/ds,Jg=[new D(-ds,ao,0),new D(ds,ao,0),new D(-ao,0,ds),new D(ao,0,ds),new D(0,ds,-ao),new D(0,ds,ao),new D(-1,1,-1),new D(1,1,-1),new D(-1,1,1),new D(1,1,1)];class Yd{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){ad=this._renderer.getRenderTarget(),ld=this._renderer.getActiveCubeFace(),cd=this._renderer.getActiveMipmapLevel(),ud=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=$g(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Qg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ad,ld,cd),this._renderer.xr.enabled=ud,e.scissorTest=!1,Tc(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===pr||e.mapping===zr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ad=this._renderer.getRenderTarget(),ld=this._renderer.getActiveCubeFace(),cd=this._renderer.getActiveMipmapLevel(),ud=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:jt,minFilter:jt,generateMipmaps:!1,type:Rs,format:Rn,colorSpace:vr,depthBuffer:!1},i=Kg(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Kg(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=oE(s)),this._blurMaterial=aE(s,e,t)}return i}_compileMaterial(e){const t=new $t(this._lodPlanes[0],e);this._renderer.compile(t,od)}_sceneToCubeUV(e,t,n,i){const c=new fn(90,1,t,n),u=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],f=this._renderer,p=f.autoClear,m=f.toneMapping;f.getClearColor(jg),f.toneMapping=bi,f.autoClear=!1;const g=new Vr({name:"PMREM.Background",side:Pn,depthWrite:!1,depthTest:!1}),y=new $t(new Ps,g);let M=!1;const x=e.background;x?x.isColor&&(g.color.copy(x),e.background=null,M=!0):(g.color.copy(jg),M=!0);for(let _=0;_<6;_++){const E=_%3;E===0?(c.up.set(0,u[_],0),c.lookAt(h[_],0,0)):E===1?(c.up.set(0,0,u[_]),c.lookAt(0,h[_],0)):(c.up.set(0,u[_],0),c.lookAt(0,0,h[_]));const w=this._cubeSize;Tc(i,E*w,_>2?w:0,w,w),f.setRenderTarget(i),M&&f.render(y,c),f.render(e,c)}y.geometry.dispose(),y.material.dispose(),f.toneMapping=m,f.autoClear=p,e.background=x}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===pr||e.mapping===zr;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=$g()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Qg());const s=i?this._cubemapMaterial:this._equirectMaterial,a=new $t(this._lodPlanes[0],s),c=s.uniforms;c.envMap.value=e;const u=this._cubeSize;Tc(t,0,0,3*u,2*u),n.setRenderTarget(t),n.render(a,od)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let s=1;s<i;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),c=Jg[(i-s-1)%Jg.length];this._blur(e,s-1,s,a,c)}t.autoClear=n}_blur(e,t,n,i,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",s),this._halfBlur(a,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,a,c){const u=this._renderer,h=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const f=3,p=new $t(this._lodPlanes[i],h),m=h.uniforms,g=this._sizeLods[n]-1,y=isFinite(s)?Math.PI/(2*g):2*Math.PI/(2*ps-1),M=s/y,x=isFinite(s)?1+Math.floor(f*M):ps;x>ps&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${ps}`);const _=[];let E=0;for(let I=0;I<ps;++I){const N=I/M,W=Math.exp(-N*N/2);_.push(W),I===0?E+=W:I<x&&(E+=2*W)}for(let I=0;I<_.length;I++)_[I]=_[I]/E;m.envMap.value=e.texture,m.samples.value=x,m.weights.value=_,m.latitudinal.value=a==="latitudinal",c&&(m.poleAxis.value=c);const{_lodMax:w}=this;m.dTheta.value=y,m.mipInt.value=w-n;const T=this._sizeLods[i],O=3*T*(i>w-xo?i-w+xo:0),P=4*(this._cubeSize-T);Tc(t,O,P,3*T,2*T),u.setRenderTarget(t),u.render(p,od)}}function oE(r){const e=[],t=[],n=[];let i=r;const s=r-xo+1+Zg.length;for(let a=0;a<s;a++){const c=Math.pow(2,i);t.push(c);let u=1/c;a>r-xo?u=Zg[a-r+xo-1]:a===0&&(u=0),n.push(u);const h=1/(c-2),f=-h,p=1+h,m=[f,f,p,f,p,p,f,f,p,p,f,p],g=6,y=6,M=3,x=2,_=1,E=new Float32Array(M*y*g),w=new Float32Array(x*y*g),T=new Float32Array(_*y*g);for(let P=0;P<g;P++){const I=P%3*2/3-1,N=P>2?0:-1,W=[I,N,0,I+2/3,N,0,I+2/3,N+1,0,I,N,0,I+2/3,N+1,0,I,N+1,0];E.set(W,M*y*P),w.set(m,x*y*P);const b=[P,P,P,P,P,P];T.set(b,_*y*P)}const O=new vt;O.setAttribute("position",new Ot(E,M)),O.setAttribute("uv",new Ot(w,x)),O.setAttribute("faceIndex",new Ot(T,_)),e.push(O),i>xo&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Kg(r,e,t){const n=new vi(r,e,t);return n.texture.mapping=Io,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Tc(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function aE(r,e,t){const n=new Float32Array(ps),i=new D(0,1,0);return new ri({name:"SphericalGaussianBlur",defines:{n:ps,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Sp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:dr,depthTest:!1,depthWrite:!1})}function Qg(){return new ri({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Sp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:dr,depthTest:!1,depthWrite:!1})}function $g(){return new ri({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Sp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:dr,depthTest:!1,depthWrite:!1})}function Sp(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function lE(r){let e=new WeakMap,t=null;function n(c){if(c&&c.isTexture){const u=c.mapping,h=u===Ca||u===Ra,f=u===pr||u===zr;if(h||f){let p=e.get(c);const m=p!==void 0?p.texture.pmremVersion:0;if(c.isRenderTargetTexture&&c.pmremVersion!==m)return t===null&&(t=new Yd(r)),p=h?t.fromEquirectangular(c,p):t.fromCubemap(c,p),p.texture.pmremVersion=c.pmremVersion,e.set(c,p),p.texture;if(p!==void 0)return p.texture;{const g=c.image;return h&&g&&g.height>0||f&&g&&i(g)?(t===null&&(t=new Yd(r)),p=h?t.fromEquirectangular(c):t.fromCubemap(c),p.texture.pmremVersion=c.pmremVersion,e.set(c,p),c.addEventListener("dispose",s),p.texture):null}}}return c}function i(c){let u=0;const h=6;for(let f=0;f<h;f++)c[f]!==void 0&&u++;return u===h}function s(c){const u=c.target;u.removeEventListener("dispose",s);const h=e.get(u);h!==void 0&&(e.delete(u),h.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function cE(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&su("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function uE(r,e,t,n){const i={},s=new WeakMap;function a(p){const m=p.target;m.index!==null&&e.remove(m.index);for(const y in m.attributes)e.remove(m.attributes[y]);for(const y in m.morphAttributes){const M=m.morphAttributes[y];for(let x=0,_=M.length;x<_;x++)e.remove(M[x])}m.removeEventListener("dispose",a),delete i[m.id];const g=s.get(m);g&&(e.remove(g),s.delete(m)),n.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,t.memory.geometries--}function c(p,m){return i[m.id]===!0||(m.addEventListener("dispose",a),i[m.id]=!0,t.memory.geometries++),m}function u(p){const m=p.attributes;for(const y in m)e.update(m[y],r.ARRAY_BUFFER);const g=p.morphAttributes;for(const y in g){const M=g[y];for(let x=0,_=M.length;x<_;x++)e.update(M[x],r.ARRAY_BUFFER)}}function h(p){const m=[],g=p.index,y=p.attributes.position;let M=0;if(g!==null){const E=g.array;M=g.version;for(let w=0,T=E.length;w<T;w+=3){const O=E[w+0],P=E[w+1],I=E[w+2];m.push(O,P,P,I,I,O)}}else if(y!==void 0){const E=y.array;M=y.version;for(let w=0,T=E.length/3-1;w<T;w+=3){const O=w+0,P=w+1,I=w+2;m.push(O,P,P,I,I,O)}}else return;const x=new(y_(m)?xp:yp)(m,1);x.version=M;const _=s.get(p);_&&e.remove(_),s.set(p,x)}function f(p){const m=s.get(p);if(m){const g=p.index;g!==null&&m.version<g.version&&h(p)}else h(p);return s.get(p)}return{get:c,update:u,getWireframeAttribute:f}}function hE(r,e,t){let n;function i(m){n=m}let s,a;function c(m){s=m.type,a=m.bytesPerElement}function u(m,g){r.drawElements(n,g,s,m*a),t.update(g,n,1)}function h(m,g,y){y!==0&&(r.drawElementsInstanced(n,g,s,m*a,y),t.update(g,n,y))}function f(m,g,y){if(y===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,g,0,s,m,0,y);let x=0;for(let _=0;_<y;_++)x+=g[_];t.update(x,n,1)}function p(m,g,y,M){if(y===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let _=0;_<m.length;_++)h(m[_]/a,g[_],M[_]);else{x.multiDrawElementsInstancedWEBGL(n,g,0,s,m,0,M,0,y);let _=0;for(let E=0;E<y;E++)_+=g[E];for(let E=0;E<M.length;E++)t.update(_,n,M[E])}}this.setMode=i,this.setIndex=c,this.render=u,this.renderInstances=h,this.renderMultiDraw=f,this.renderMultiDrawInstances=p}function fE(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,c){switch(t.calls++,a){case r.TRIANGLES:t.triangles+=c*(s/3);break;case r.LINES:t.lines+=c*(s/2);break;case r.LINE_STRIP:t.lines+=c*(s-1);break;case r.LINE_LOOP:t.lines+=c*s;break;case r.POINTS:t.points+=c*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function dE(r,e,t){const n=new WeakMap,i=new xt;function s(a,c,u){const h=a.morphTargetInfluences,f=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,p=f!==void 0?f.length:0;let m=n.get(c);if(m===void 0||m.count!==p){let W=function(){I.dispose(),n.delete(c),c.removeEventListener("dispose",W)};m!==void 0&&m.texture.dispose();const g=c.morphAttributes.position!==void 0,y=c.morphAttributes.normal!==void 0,M=c.morphAttributes.color!==void 0,x=c.morphAttributes.position||[],_=c.morphAttributes.normal||[],E=c.morphAttributes.color||[];let w=0;g===!0&&(w=1),y===!0&&(w=2),M===!0&&(w=3);let T=c.attributes.position.count*w,O=1;T>e.maxTextureSize&&(O=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const P=new Float32Array(T*O*4*p),I=new oh(P,T,O,p);I.type=zn,I.needsUpdate=!0;const N=w*4;for(let b=0;b<p;b++){const C=x[b],X=_[b],q=E[b],K=T*O*4*b;for(let le=0;le<C.count;le++){const Z=le*N;g===!0&&(i.fromBufferAttribute(C,le),P[K+Z+0]=i.x,P[K+Z+1]=i.y,P[K+Z+2]=i.z,P[K+Z+3]=0),y===!0&&(i.fromBufferAttribute(X,le),P[K+Z+4]=i.x,P[K+Z+5]=i.y,P[K+Z+6]=i.z,P[K+Z+7]=0),M===!0&&(i.fromBufferAttribute(q,le),P[K+Z+8]=i.x,P[K+Z+9]=i.y,P[K+Z+10]=i.z,P[K+Z+11]=q.itemSize===4?i.w:1)}}m={count:p,texture:I,size:new fe(T,O)},n.set(c,m),c.addEventListener("dispose",W)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)u.getUniforms().setValue(r,"morphTexture",a.morphTexture,t);else{let g=0;for(let M=0;M<h.length;M++)g+=h[M];const y=c.morphTargetsRelative?1:1-g;u.getUniforms().setValue(r,"morphTargetBaseInfluence",y),u.getUniforms().setValue(r,"morphTargetInfluences",h)}u.getUniforms().setValue(r,"morphTargetsTexture",m.texture,t),u.getUniforms().setValue(r,"morphTargetsTextureSize",m.size)}return{update:s}}function pE(r,e,t,n){let i=new WeakMap;function s(u){const h=n.render.frame,f=u.geometry,p=e.get(u,f);if(i.get(p)!==h&&(e.update(p),i.set(p,h)),u.isInstancedMesh&&(u.hasEventListener("dispose",c)===!1&&u.addEventListener("dispose",c),i.get(u)!==h&&(t.update(u.instanceMatrix,r.ARRAY_BUFFER),u.instanceColor!==null&&t.update(u.instanceColor,r.ARRAY_BUFFER),i.set(u,h))),u.isSkinnedMesh){const m=u.skeleton;i.get(m)!==h&&(m.update(),i.set(m,h))}return p}function a(){i=new WeakMap}function c(u){const h=u.target;h.removeEventListener("dispose",c),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:s,dispose:a}}class ah extends Jt{constructor(e,t,n,i,s,a,c,u,h,f=xs){if(f!==xs&&f!==bs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&f===xs&&(n=mr),n===void 0&&f===bs&&(n=Ts),super(null,i,s,a,c,u,f,n,h),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=c!==void 0?c:dn,this.minFilter=u!==void 0?u:dn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const C_=new Jt,e0=new ah(1,1),R_=new oh,P_=new _p,I_=new el,t0=[],n0=[],i0=new Float32Array(16),r0=new Float32Array(9),s0=new Float32Array(4);function Uo(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=t0[i];if(s===void 0&&(s=new Float32Array(i),t0[i]=s),e!==0){n.toArray(s,0);for(let a=1,c=0;a!==e;++a)c+=t,r[a].toArray(s,c)}return s}function on(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function an(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function lh(r,e){let t=n0[e];t===void 0&&(t=new Int32Array(e),n0[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function mE(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function gE(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(on(t,e))return;r.uniform2fv(this.addr,e),an(t,e)}}function vE(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(on(t,e))return;r.uniform3fv(this.addr,e),an(t,e)}}function _E(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(on(t,e))return;r.uniform4fv(this.addr,e),an(t,e)}}function yE(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(on(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),an(t,e)}else{if(on(t,n))return;s0.set(n),r.uniformMatrix2fv(this.addr,!1,s0),an(t,n)}}function xE(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(on(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),an(t,e)}else{if(on(t,n))return;r0.set(n),r.uniformMatrix3fv(this.addr,!1,r0),an(t,n)}}function SE(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(on(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),an(t,e)}else{if(on(t,n))return;i0.set(n),r.uniformMatrix4fv(this.addr,!1,i0),an(t,n)}}function ME(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function wE(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(on(t,e))return;r.uniform2iv(this.addr,e),an(t,e)}}function EE(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(on(t,e))return;r.uniform3iv(this.addr,e),an(t,e)}}function AE(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(on(t,e))return;r.uniform4iv(this.addr,e),an(t,e)}}function TE(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function bE(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(on(t,e))return;r.uniform2uiv(this.addr,e),an(t,e)}}function CE(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(on(t,e))return;r.uniform3uiv(this.addr,e),an(t,e)}}function RE(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(on(t,e))return;r.uniform4uiv(this.addr,e),an(t,e)}}function PE(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(e0.compareFunction=gp,s=e0):s=C_,t.setTexture2D(e||s,i)}function IE(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||P_,i)}function LE(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||I_,i)}function DE(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||R_,i)}function UE(r){switch(r){case 5126:return mE;case 35664:return gE;case 35665:return vE;case 35666:return _E;case 35674:return yE;case 35675:return xE;case 35676:return SE;case 5124:case 35670:return ME;case 35667:case 35671:return wE;case 35668:case 35672:return EE;case 35669:case 35673:return AE;case 5125:return TE;case 36294:return bE;case 36295:return CE;case 36296:return RE;case 35678:case 36198:case 36298:case 36306:case 35682:return PE;case 35679:case 36299:case 36307:return IE;case 35680:case 36300:case 36308:case 36293:return LE;case 36289:case 36303:case 36311:case 36292:return DE}}function NE(r,e){r.uniform1fv(this.addr,e)}function OE(r,e){const t=Uo(e,this.size,2);r.uniform2fv(this.addr,t)}function FE(r,e){const t=Uo(e,this.size,3);r.uniform3fv(this.addr,t)}function BE(r,e){const t=Uo(e,this.size,4);r.uniform4fv(this.addr,t)}function zE(r,e){const t=Uo(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function kE(r,e){const t=Uo(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function HE(r,e){const t=Uo(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function VE(r,e){r.uniform1iv(this.addr,e)}function GE(r,e){r.uniform2iv(this.addr,e)}function WE(r,e){r.uniform3iv(this.addr,e)}function XE(r,e){r.uniform4iv(this.addr,e)}function YE(r,e){r.uniform1uiv(this.addr,e)}function qE(r,e){r.uniform2uiv(this.addr,e)}function ZE(r,e){r.uniform3uiv(this.addr,e)}function jE(r,e){r.uniform4uiv(this.addr,e)}function JE(r,e,t){const n=this.cache,i=e.length,s=lh(t,i);on(n,s)||(r.uniform1iv(this.addr,s),an(n,s));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||C_,s[a])}function KE(r,e,t){const n=this.cache,i=e.length,s=lh(t,i);on(n,s)||(r.uniform1iv(this.addr,s),an(n,s));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||P_,s[a])}function QE(r,e,t){const n=this.cache,i=e.length,s=lh(t,i);on(n,s)||(r.uniform1iv(this.addr,s),an(n,s));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||I_,s[a])}function $E(r,e,t){const n=this.cache,i=e.length,s=lh(t,i);on(n,s)||(r.uniform1iv(this.addr,s),an(n,s));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||R_,s[a])}function eA(r){switch(r){case 5126:return NE;case 35664:return OE;case 35665:return FE;case 35666:return BE;case 35674:return zE;case 35675:return kE;case 35676:return HE;case 5124:case 35670:return VE;case 35667:case 35671:return GE;case 35668:case 35672:return WE;case 35669:case 35673:return XE;case 5125:return YE;case 36294:return qE;case 36295:return ZE;case 36296:return jE;case 35678:case 36198:case 36298:case 36306:case 35682:return JE;case 35679:case 36299:case 36307:return KE;case 35680:case 36300:case 36308:case 36293:return QE;case 36289:case 36303:case 36311:case 36292:return $E}}class tA{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=UE(t.type)}}class nA{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=eA(t.type)}}class iA{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,a=i.length;s!==a;++s){const c=i[s];c.setValue(e,t[c.id],n)}}}const hd=/(\w+)(\])?(\[|\.)?/g;function o0(r,e){r.seq.push(e),r.map[e.id]=e}function rA(r,e,t){const n=r.name,i=n.length;for(hd.lastIndex=0;;){const s=hd.exec(n),a=hd.lastIndex;let c=s[1];const u=s[2]==="]",h=s[3];if(u&&(c=c|0),h===void 0||h==="["&&a+2===i){o0(t,h===void 0?new tA(c,r,e):new nA(c,r,e));break}else{let p=t.map[c];p===void 0&&(p=new iA(c),o0(t,p)),t=p}}}class ou{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),a=e.getUniformLocation(t,s.name);rA(s,a,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,a=t.length;s!==a;++s){const c=t[s],u=n[c.id];u.needsUpdate!==!1&&c.setValue(e,u.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function a0(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const sA=37297;let oA=0;function aA(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=i;a<s;a++){const c=a+1;n.push(`${c===e?">":" "} ${c}: ${t[a]}`)}return n.join(`
`)}function lA(r){const e=Dt.getPrimaries(Dt.workingColorSpace),t=Dt.getPrimaries(r);let n;switch(e===t?n="":e===Oa&&t===Na?n="LinearDisplayP3ToLinearSRGB":e===Na&&t===Oa&&(n="LinearSRGBToLinearDisplayP3"),r){case vr:case Qa:return[n,"LinearTransferOETF"];case mi:case sh:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),[n,"LinearTransferOETF"]}}function l0(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+aA(r.getShaderSource(e),a)}else return i}function cA(r,e){const t=lA(e);return`vec4 ${r}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function uA(r,e){let t;switch(e){case $v:t="Linear";break;case e_:t="Reinhard";break;case t_:t="Cineon";break;case rp:t="ACESFilmic";break;case i_:t="AgX";break;case r_:t="Neutral";break;case n_:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const bc=new D;function hA(){Dt.getLuminanceCoefficients(bc);const r=bc.x.toFixed(4),e=bc.y.toFixed(4),t=bc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function fA(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(va).join(`
`)}function dA(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function pA(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),a=s.name;let c=1;s.type===r.FLOAT_MAT2&&(c=2),s.type===r.FLOAT_MAT3&&(c=3),s.type===r.FLOAT_MAT4&&(c=4),t[a]={type:s.type,location:r.getAttribLocation(e,a),locationSize:c}}return t}function va(r){return r!==""}function c0(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function u0(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const mA=/^[ \t]*#include +<([\w\d./]+)>/gm;function qd(r){return r.replace(mA,vA)}const gA=new Map;function vA(r,e){let t=mt[e];if(t===void 0){const n=gA.get(e);if(n!==void 0)t=mt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return qd(t)}const _A=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function h0(r){return r.replace(_A,yA)}function yA(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function f0(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function xA(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Ju?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===_a?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Ai&&(e="SHADOWMAP_TYPE_VSM"),e}function SA(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case pr:case zr:e="ENVMAP_TYPE_CUBE";break;case Io:e="ENVMAP_TYPE_CUBE_UV";break}return e}function MA(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case zr:e="ENVMAP_MODE_REFRACTION";break}return e}function wA(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Ja:e="ENVMAP_BLENDING_MULTIPLY";break;case Kv:e="ENVMAP_BLENDING_MIX";break;case Qv:e="ENVMAP_BLENDING_ADD";break}return e}function EA(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function AA(r,e,t,n){const i=r.getContext(),s=t.defines;let a=t.vertexShader,c=t.fragmentShader;const u=xA(t),h=SA(t),f=MA(t),p=wA(t),m=EA(t),g=fA(t),y=dA(s),M=i.createProgram();let x,_,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y].filter(va).join(`
`),x.length>0&&(x+=`
`),_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y].filter(va).join(`
`),_.length>0&&(_+=`
`)):(x=[f0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+u:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(va).join(`
`),_=[f0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+f:"",t.envMap?"#define "+p:"",m?"#define CUBEUV_TEXEL_WIDTH "+m.texelWidth:"",m?"#define CUBEUV_TEXEL_HEIGHT "+m.texelHeight:"",m?"#define CUBEUV_MAX_MIP "+m.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+u:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==bi?"#define TONE_MAPPING":"",t.toneMapping!==bi?mt.tonemapping_pars_fragment:"",t.toneMapping!==bi?uA("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",mt.colorspace_pars_fragment,cA("linearToOutputTexel",t.outputColorSpace),hA(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(va).join(`
`)),a=qd(a),a=c0(a,t),a=u0(a,t),c=qd(c),c=c0(c,t),c=u0(c,t),a=h0(a),c=h0(c),t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,x=[g,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,_=["#define varying in",t.glslVersion===Xd?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Xd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const w=E+x+a,T=E+_+c,O=a0(i,i.VERTEX_SHADER,w),P=a0(i,i.FRAGMENT_SHADER,T);i.attachShader(M,O),i.attachShader(M,P),t.index0AttributeName!==void 0?i.bindAttribLocation(M,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(M,0,"position"),i.linkProgram(M);function I(C){if(r.debug.checkShaderErrors){const X=i.getProgramInfoLog(M).trim(),q=i.getShaderInfoLog(O).trim(),K=i.getShaderInfoLog(P).trim();let le=!0,Z=!0;if(i.getProgramParameter(M,i.LINK_STATUS)===!1)if(le=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,M,O,P);else{const me=l0(i,O,"vertex"),z=l0(i,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(M,i.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+X+`
`+me+`
`+z)}else X!==""?console.warn("THREE.WebGLProgram: Program Info Log:",X):(q===""||K==="")&&(Z=!1);Z&&(C.diagnostics={runnable:le,programLog:X,vertexShader:{log:q,prefix:x},fragmentShader:{log:K,prefix:_}})}i.deleteShader(O),i.deleteShader(P),N=new ou(i,M),W=pA(i,M)}let N;this.getUniforms=function(){return N===void 0&&I(this),N};let W;this.getAttributes=function(){return W===void 0&&I(this),W};let b=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=i.getProgramParameter(M,sA)),b},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(M),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=oA++,this.cacheKey=e,this.usedTimes=1,this.program=M,this.vertexShader=O,this.fragmentShader=P,this}let TA=0;class bA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new CA(e),t.set(e,n)),n}}class CA{constructor(e){this.id=TA++,this.code=e,this.usedTimes=0}}function RA(r,e,t,n,i,s,a){const c=new ws,u=new bA,h=new Set,f=[],p=i.logarithmicDepthBuffer,m=i.reverseDepthBuffer,g=i.vertexTextures;let y=i.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(b){return h.add(b),b===0?"uv":`uv${b}`}function _(b,C,X,q,K){const le=q.fog,Z=K.geometry,me=b.isMeshStandardMaterial?q.environment:null,z=(b.isMeshStandardMaterial?t:e).get(b.envMap||me),se=z&&z.mapping===Io?z.image.height:null,te=M[b.type];b.precision!==null&&(y=i.getMaxPrecision(b.precision),y!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",y,"instead."));const ce=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,Be=ce!==void 0?ce.length:0;let Xe=0;Z.morphAttributes.position!==void 0&&(Xe=1),Z.morphAttributes.normal!==void 0&&(Xe=2),Z.morphAttributes.color!==void 0&&(Xe=3);let ne,pe,be,Se;if(te){const gn=Ti[te];ne=gn.vertexShader,pe=gn.fragmentShader}else ne=b.vertexShader,pe=b.fragmentShader,u.update(b),be=u.getVertexShaderID(b),Se=u.getFragmentShaderID(b);const rt=r.getRenderTarget(),Qe=K.isInstancedMesh===!0,st=K.isBatchedMesh===!0,nt=!!b.map,he=!!b.matcap,F=!!z,we=!!b.aoMap,Me=!!b.lightMap,ge=!!b.bumpMap,Ee=!!b.normalMap,je=!!b.displacementMap,De=!!b.emissiveMap,U=!!b.metalnessMap,R=!!b.roughnessMap,j=b.anisotropy>0,oe=b.clearcoat>0,ue=b.dispersion>0,ae=b.iridescence>0,Ye=b.sheen>0,Te=b.transmission>0,Oe=j&&!!b.anisotropyMap,St=oe&&!!b.clearcoatMap,ve=oe&&!!b.clearcoatNormalMap,Fe=oe&&!!b.clearcoatRoughnessMap,ot=ae&&!!b.iridescenceMap,at=ae&&!!b.iridescenceThicknessMap,ze=Ye&&!!b.sheenColorMap,Mt=Ye&&!!b.sheenRoughnessMap,ut=!!b.specularMap,Nt=!!b.specularColorMap,H=!!b.specularIntensityMap,Ue=Te&&!!b.transmissionMap,ie=Te&&!!b.thicknessMap,de=!!b.gradientMap,Ie=!!b.alphaMap,Ne=b.alphaTest>0,wt=!!b.alphaHash,Gt=!!b.extensions;let Sn=bi;b.toneMapped&&(rt===null||rt.isXRRenderTarget===!0)&&(Sn=r.toneMapping);const Et={shaderID:te,shaderType:b.type,shaderName:b.name,vertexShader:ne,fragmentShader:pe,defines:b.defines,customVertexShaderID:be,customFragmentShaderID:Se,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:y,batching:st,batchingColor:st&&K._colorsTexture!==null,instancing:Qe,instancingColor:Qe&&K.instanceColor!==null,instancingMorph:Qe&&K.morphTexture!==null,supportsVertexTextures:g,outputColorSpace:rt===null?r.outputColorSpace:rt.isXRRenderTarget===!0?rt.texture.colorSpace:vr,alphaToCoverage:!!b.alphaToCoverage,map:nt,matcap:he,envMap:F,envMapMode:F&&z.mapping,envMapCubeUVHeight:se,aoMap:we,lightMap:Me,bumpMap:ge,normalMap:Ee,displacementMap:g&&je,emissiveMap:De,normalMapObjectSpace:Ee&&b.normalMapType===h_,normalMapTangentSpace:Ee&&b.normalMapType===Hr,metalnessMap:U,roughnessMap:R,anisotropy:j,anisotropyMap:Oe,clearcoat:oe,clearcoatMap:St,clearcoatNormalMap:ve,clearcoatRoughnessMap:Fe,dispersion:ue,iridescence:ae,iridescenceMap:ot,iridescenceThicknessMap:at,sheen:Ye,sheenColorMap:ze,sheenRoughnessMap:Mt,specularMap:ut,specularColorMap:Nt,specularIntensityMap:H,transmission:Te,transmissionMap:Ue,thicknessMap:ie,gradientMap:de,opaque:b.transparent===!1&&b.blending===ys&&b.alphaToCoverage===!1,alphaMap:Ie,alphaTest:Ne,alphaHash:wt,combine:b.combine,mapUv:nt&&x(b.map.channel),aoMapUv:we&&x(b.aoMap.channel),lightMapUv:Me&&x(b.lightMap.channel),bumpMapUv:ge&&x(b.bumpMap.channel),normalMapUv:Ee&&x(b.normalMap.channel),displacementMapUv:je&&x(b.displacementMap.channel),emissiveMapUv:De&&x(b.emissiveMap.channel),metalnessMapUv:U&&x(b.metalnessMap.channel),roughnessMapUv:R&&x(b.roughnessMap.channel),anisotropyMapUv:Oe&&x(b.anisotropyMap.channel),clearcoatMapUv:St&&x(b.clearcoatMap.channel),clearcoatNormalMapUv:ve&&x(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Fe&&x(b.clearcoatRoughnessMap.channel),iridescenceMapUv:ot&&x(b.iridescenceMap.channel),iridescenceThicknessMapUv:at&&x(b.iridescenceThicknessMap.channel),sheenColorMapUv:ze&&x(b.sheenColorMap.channel),sheenRoughnessMapUv:Mt&&x(b.sheenRoughnessMap.channel),specularMapUv:ut&&x(b.specularMap.channel),specularColorMapUv:Nt&&x(b.specularColorMap.channel),specularIntensityMapUv:H&&x(b.specularIntensityMap.channel),transmissionMapUv:Ue&&x(b.transmissionMap.channel),thicknessMapUv:ie&&x(b.thicknessMap.channel),alphaMapUv:Ie&&x(b.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(Ee||j),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:K.isPoints===!0&&!!Z.attributes.uv&&(nt||Ie),fog:!!le,useFog:b.fog===!0,fogExp2:!!le&&le.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:p,reverseDepthBuffer:m,skinning:K.isSkinnedMesh===!0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:Be,morphTextureStride:Xe,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:b.dithering,shadowMapEnabled:r.shadowMap.enabled&&X.length>0,shadowMapType:r.shadowMap.type,toneMapping:Sn,decodeVideoTexture:nt&&b.map.isVideoTexture===!0&&Dt.getTransfer(b.map.colorSpace)===zt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Vi,flipSided:b.side===Pn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Gt&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Gt&&b.extensions.multiDraw===!0||st)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Et.vertexUv1s=h.has(1),Et.vertexUv2s=h.has(2),Et.vertexUv3s=h.has(3),h.clear(),Et}function E(b){const C=[];if(b.shaderID?C.push(b.shaderID):(C.push(b.customVertexShaderID),C.push(b.customFragmentShaderID)),b.defines!==void 0)for(const X in b.defines)C.push(X),C.push(b.defines[X]);return b.isRawShaderMaterial===!1&&(w(C,b),T(C,b),C.push(r.outputColorSpace)),C.push(b.customProgramCacheKey),C.join()}function w(b,C){b.push(C.precision),b.push(C.outputColorSpace),b.push(C.envMapMode),b.push(C.envMapCubeUVHeight),b.push(C.mapUv),b.push(C.alphaMapUv),b.push(C.lightMapUv),b.push(C.aoMapUv),b.push(C.bumpMapUv),b.push(C.normalMapUv),b.push(C.displacementMapUv),b.push(C.emissiveMapUv),b.push(C.metalnessMapUv),b.push(C.roughnessMapUv),b.push(C.anisotropyMapUv),b.push(C.clearcoatMapUv),b.push(C.clearcoatNormalMapUv),b.push(C.clearcoatRoughnessMapUv),b.push(C.iridescenceMapUv),b.push(C.iridescenceThicknessMapUv),b.push(C.sheenColorMapUv),b.push(C.sheenRoughnessMapUv),b.push(C.specularMapUv),b.push(C.specularColorMapUv),b.push(C.specularIntensityMapUv),b.push(C.transmissionMapUv),b.push(C.thicknessMapUv),b.push(C.combine),b.push(C.fogExp2),b.push(C.sizeAttenuation),b.push(C.morphTargetsCount),b.push(C.morphAttributeCount),b.push(C.numDirLights),b.push(C.numPointLights),b.push(C.numSpotLights),b.push(C.numSpotLightMaps),b.push(C.numHemiLights),b.push(C.numRectAreaLights),b.push(C.numDirLightShadows),b.push(C.numPointLightShadows),b.push(C.numSpotLightShadows),b.push(C.numSpotLightShadowsWithMaps),b.push(C.numLightProbes),b.push(C.shadowMapType),b.push(C.toneMapping),b.push(C.numClippingPlanes),b.push(C.numClipIntersection),b.push(C.depthPacking)}function T(b,C){c.disableAll(),C.supportsVertexTextures&&c.enable(0),C.instancing&&c.enable(1),C.instancingColor&&c.enable(2),C.instancingMorph&&c.enable(3),C.matcap&&c.enable(4),C.envMap&&c.enable(5),C.normalMapObjectSpace&&c.enable(6),C.normalMapTangentSpace&&c.enable(7),C.clearcoat&&c.enable(8),C.iridescence&&c.enable(9),C.alphaTest&&c.enable(10),C.vertexColors&&c.enable(11),C.vertexAlphas&&c.enable(12),C.vertexUv1s&&c.enable(13),C.vertexUv2s&&c.enable(14),C.vertexUv3s&&c.enable(15),C.vertexTangents&&c.enable(16),C.anisotropy&&c.enable(17),C.alphaHash&&c.enable(18),C.batching&&c.enable(19),C.dispersion&&c.enable(20),C.batchingColor&&c.enable(21),b.push(c.mask),c.disableAll(),C.fog&&c.enable(0),C.useFog&&c.enable(1),C.flatShading&&c.enable(2),C.logarithmicDepthBuffer&&c.enable(3),C.reverseDepthBuffer&&c.enable(4),C.skinning&&c.enable(5),C.morphTargets&&c.enable(6),C.morphNormals&&c.enable(7),C.morphColors&&c.enable(8),C.premultipliedAlpha&&c.enable(9),C.shadowMapEnabled&&c.enable(10),C.doubleSided&&c.enable(11),C.flipSided&&c.enable(12),C.useDepthPacking&&c.enable(13),C.dithering&&c.enable(14),C.transmission&&c.enable(15),C.sheen&&c.enable(16),C.opaque&&c.enable(17),C.pointsUvs&&c.enable(18),C.decodeVideoTexture&&c.enable(19),C.alphaToCoverage&&c.enable(20),b.push(c.mask)}function O(b){const C=M[b.type];let X;if(C){const q=Ti[C];X=ka.clone(q.uniforms)}else X=b.uniforms;return X}function P(b,C){let X;for(let q=0,K=f.length;q<K;q++){const le=f[q];if(le.cacheKey===C){X=le,++X.usedTimes;break}}return X===void 0&&(X=new AA(r,C,b,s),f.push(X)),X}function I(b){if(--b.usedTimes===0){const C=f.indexOf(b);f[C]=f[f.length-1],f.pop(),b.destroy()}}function N(b){u.remove(b)}function W(){u.dispose()}return{getParameters:_,getProgramCacheKey:E,getUniforms:O,acquireProgram:P,releaseProgram:I,releaseShaderCache:N,programs:f,dispose:W}}function PA(){let r=new WeakMap;function e(a){return r.has(a)}function t(a){let c=r.get(a);return c===void 0&&(c={},r.set(a,c)),c}function n(a){r.delete(a)}function i(a,c,u){r.get(a)[c]=u}function s(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function IA(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function d0(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function p0(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function a(p,m,g,y,M,x){let _=r[e];return _===void 0?(_={id:p.id,object:p,geometry:m,material:g,groupOrder:y,renderOrder:p.renderOrder,z:M,group:x},r[e]=_):(_.id=p.id,_.object=p,_.geometry=m,_.material=g,_.groupOrder=y,_.renderOrder=p.renderOrder,_.z=M,_.group=x),e++,_}function c(p,m,g,y,M,x){const _=a(p,m,g,y,M,x);g.transmission>0?n.push(_):g.transparent===!0?i.push(_):t.push(_)}function u(p,m,g,y,M,x){const _=a(p,m,g,y,M,x);g.transmission>0?n.unshift(_):g.transparent===!0?i.unshift(_):t.unshift(_)}function h(p,m){t.length>1&&t.sort(p||IA),n.length>1&&n.sort(m||d0),i.length>1&&i.sort(m||d0)}function f(){for(let p=e,m=r.length;p<m;p++){const g=r[p];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:c,unshift:u,finish:f,sort:h}}function LA(){let r=new WeakMap;function e(n,i){const s=r.get(n);let a;return s===void 0?(a=new p0,r.set(n,[a])):i>=s.length?(a=new p0,s.push(a)):a=s[i],a}function t(){r=new WeakMap}return{get:e,dispose:t}}function DA(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new D,color:new Pe};break;case"SpotLight":t={position:new D,direction:new D,color:new Pe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new Pe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new Pe,groundColor:new Pe};break;case"RectAreaLight":t={color:new Pe,position:new D,halfWidth:new D,halfHeight:new D};break}return r[e.id]=t,t}}}function UA(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let NA=0;function OA(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function FA(r){const e=new DA,t=UA(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)n.probe.push(new D);const i=new D,s=new et,a=new et;function c(h){let f=0,p=0,m=0;for(let W=0;W<9;W++)n.probe[W].set(0,0,0);let g=0,y=0,M=0,x=0,_=0,E=0,w=0,T=0,O=0,P=0,I=0;h.sort(OA);for(let W=0,b=h.length;W<b;W++){const C=h[W],X=C.color,q=C.intensity,K=C.distance,le=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)f+=X.r*q,p+=X.g*q,m+=X.b*q;else if(C.isLightProbe){for(let Z=0;Z<9;Z++)n.probe[Z].addScaledVector(C.sh.coefficients[Z],q);I++}else if(C.isDirectionalLight){const Z=e.get(C);if(Z.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const me=C.shadow,z=t.get(C);z.shadowIntensity=me.intensity,z.shadowBias=me.bias,z.shadowNormalBias=me.normalBias,z.shadowRadius=me.radius,z.shadowMapSize=me.mapSize,n.directionalShadow[g]=z,n.directionalShadowMap[g]=le,n.directionalShadowMatrix[g]=C.shadow.matrix,E++}n.directional[g]=Z,g++}else if(C.isSpotLight){const Z=e.get(C);Z.position.setFromMatrixPosition(C.matrixWorld),Z.color.copy(X).multiplyScalar(q),Z.distance=K,Z.coneCos=Math.cos(C.angle),Z.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),Z.decay=C.decay,n.spot[M]=Z;const me=C.shadow;if(C.map&&(n.spotLightMap[O]=C.map,O++,me.updateMatrices(C),C.castShadow&&P++),n.spotLightMatrix[M]=me.matrix,C.castShadow){const z=t.get(C);z.shadowIntensity=me.intensity,z.shadowBias=me.bias,z.shadowNormalBias=me.normalBias,z.shadowRadius=me.radius,z.shadowMapSize=me.mapSize,n.spotShadow[M]=z,n.spotShadowMap[M]=le,T++}M++}else if(C.isRectAreaLight){const Z=e.get(C);Z.color.copy(X).multiplyScalar(q),Z.halfWidth.set(C.width*.5,0,0),Z.halfHeight.set(0,C.height*.5,0),n.rectArea[x]=Z,x++}else if(C.isPointLight){const Z=e.get(C);if(Z.color.copy(C.color).multiplyScalar(C.intensity),Z.distance=C.distance,Z.decay=C.decay,C.castShadow){const me=C.shadow,z=t.get(C);z.shadowIntensity=me.intensity,z.shadowBias=me.bias,z.shadowNormalBias=me.normalBias,z.shadowRadius=me.radius,z.shadowMapSize=me.mapSize,z.shadowCameraNear=me.camera.near,z.shadowCameraFar=me.camera.far,n.pointShadow[y]=z,n.pointShadowMap[y]=le,n.pointShadowMatrix[y]=C.shadow.matrix,w++}n.point[y]=Z,y++}else if(C.isHemisphereLight){const Z=e.get(C);Z.skyColor.copy(C.color).multiplyScalar(q),Z.groundColor.copy(C.groundColor).multiplyScalar(q),n.hemi[_]=Z,_++}}x>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ae.LTC_FLOAT_1,n.rectAreaLTC2=Ae.LTC_FLOAT_2):(n.rectAreaLTC1=Ae.LTC_HALF_1,n.rectAreaLTC2=Ae.LTC_HALF_2)),n.ambient[0]=f,n.ambient[1]=p,n.ambient[2]=m;const N=n.hash;(N.directionalLength!==g||N.pointLength!==y||N.spotLength!==M||N.rectAreaLength!==x||N.hemiLength!==_||N.numDirectionalShadows!==E||N.numPointShadows!==w||N.numSpotShadows!==T||N.numSpotMaps!==O||N.numLightProbes!==I)&&(n.directional.length=g,n.spot.length=M,n.rectArea.length=x,n.point.length=y,n.hemi.length=_,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.pointShadow.length=w,n.pointShadowMap.length=w,n.spotShadow.length=T,n.spotShadowMap.length=T,n.directionalShadowMatrix.length=E,n.pointShadowMatrix.length=w,n.spotLightMatrix.length=T+O-P,n.spotLightMap.length=O,n.numSpotLightShadowsWithMaps=P,n.numLightProbes=I,N.directionalLength=g,N.pointLength=y,N.spotLength=M,N.rectAreaLength=x,N.hemiLength=_,N.numDirectionalShadows=E,N.numPointShadows=w,N.numSpotShadows=T,N.numSpotMaps=O,N.numLightProbes=I,n.version=NA++)}function u(h,f){let p=0,m=0,g=0,y=0,M=0;const x=f.matrixWorldInverse;for(let _=0,E=h.length;_<E;_++){const w=h[_];if(w.isDirectionalLight){const T=n.directional[p];T.direction.setFromMatrixPosition(w.matrixWorld),i.setFromMatrixPosition(w.target.matrixWorld),T.direction.sub(i),T.direction.transformDirection(x),p++}else if(w.isSpotLight){const T=n.spot[g];T.position.setFromMatrixPosition(w.matrixWorld),T.position.applyMatrix4(x),T.direction.setFromMatrixPosition(w.matrixWorld),i.setFromMatrixPosition(w.target.matrixWorld),T.direction.sub(i),T.direction.transformDirection(x),g++}else if(w.isRectAreaLight){const T=n.rectArea[y];T.position.setFromMatrixPosition(w.matrixWorld),T.position.applyMatrix4(x),a.identity(),s.copy(w.matrixWorld),s.premultiply(x),a.extractRotation(s),T.halfWidth.set(w.width*.5,0,0),T.halfHeight.set(0,w.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),y++}else if(w.isPointLight){const T=n.point[m];T.position.setFromMatrixPosition(w.matrixWorld),T.position.applyMatrix4(x),m++}else if(w.isHemisphereLight){const T=n.hemi[M];T.direction.setFromMatrixPosition(w.matrixWorld),T.direction.transformDirection(x),M++}}}return{setup:c,setupView:u,state:n}}function m0(r){const e=new FA(r),t=[],n=[];function i(f){h.camera=f,t.length=0,n.length=0}function s(f){t.push(f)}function a(f){n.push(f)}function c(){e.setup(t)}function u(f){e.setupView(t,f)}const h={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:h,setupLights:c,setupLightsView:u,pushLight:s,pushShadow:a}}function BA(r){let e=new WeakMap;function t(i,s=0){const a=e.get(i);let c;return a===void 0?(c=new m0(r),e.set(i,[c])):s>=a.length?(c=new m0(r),a.push(c)):c=a[s],c}function n(){e=new WeakMap}return{get:t,dispose:n}}class Mp extends In{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=c_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class wp extends In{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const zA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,kA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function HA(r,e,t){let n=new tl;const i=new fe,s=new fe,a=new xt,c=new Mp({depthPacking:u_}),u=new wp,h={},f=t.maxTextureSize,p={[Zi]:Pn,[Pn]:Zi,[Vi]:Vi},m=new ri({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new fe},radius:{value:4}},vertexShader:zA,fragmentShader:kA}),g=m.clone();g.defines.HORIZONTAL_PASS=1;const y=new vt;y.setAttribute("position",new Ot(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new $t(y,m),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ju;let _=this.type;this.render=function(P,I,N){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||P.length===0)return;const W=r.getRenderTarget(),b=r.getActiveCubeFace(),C=r.getActiveMipmapLevel(),X=r.state;X.setBlending(dr),X.buffers.color.setClear(1,1,1,1),X.buffers.depth.setTest(!0),X.setScissorTest(!1);const q=_!==Ai&&this.type===Ai,K=_===Ai&&this.type!==Ai;for(let le=0,Z=P.length;le<Z;le++){const me=P[le],z=me.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",me,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;i.copy(z.mapSize);const se=z.getFrameExtents();if(i.multiply(se),s.copy(z.mapSize),(i.x>f||i.y>f)&&(i.x>f&&(s.x=Math.floor(f/se.x),i.x=s.x*se.x,z.mapSize.x=s.x),i.y>f&&(s.y=Math.floor(f/se.y),i.y=s.y*se.y,z.mapSize.y=s.y)),z.map===null||q===!0||K===!0){const ce=this.type!==Ai?{minFilter:dn,magFilter:dn}:{};z.map!==null&&z.map.dispose(),z.map=new vi(i.x,i.y,ce),z.map.texture.name=me.name+".shadowMap",z.camera.updateProjectionMatrix()}r.setRenderTarget(z.map),r.clear();const te=z.getViewportCount();for(let ce=0;ce<te;ce++){const Be=z.getViewport(ce);a.set(s.x*Be.x,s.y*Be.y,s.x*Be.z,s.y*Be.w),X.viewport(a),z.updateMatrices(me,ce),n=z.getFrustum(),T(I,N,z.camera,me,this.type)}z.isPointLightShadow!==!0&&this.type===Ai&&E(z,N),z.needsUpdate=!1}_=this.type,x.needsUpdate=!1,r.setRenderTarget(W,b,C)};function E(P,I){const N=e.update(M);m.defines.VSM_SAMPLES!==P.blurSamples&&(m.defines.VSM_SAMPLES=P.blurSamples,g.defines.VSM_SAMPLES=P.blurSamples,m.needsUpdate=!0,g.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new vi(i.x,i.y)),m.uniforms.shadow_pass.value=P.map.texture,m.uniforms.resolution.value=P.mapSize,m.uniforms.radius.value=P.radius,r.setRenderTarget(P.mapPass),r.clear(),r.renderBufferDirect(I,null,N,m,M,null),g.uniforms.shadow_pass.value=P.mapPass.texture,g.uniforms.resolution.value=P.mapSize,g.uniforms.radius.value=P.radius,r.setRenderTarget(P.map),r.clear(),r.renderBufferDirect(I,null,N,g,M,null)}function w(P,I,N,W){let b=null;const C=N.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(C!==void 0)b=C;else if(b=N.isPointLight===!0?u:c,r.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0){const X=b.uuid,q=I.uuid;let K=h[X];K===void 0&&(K={},h[X]=K);let le=K[q];le===void 0&&(le=b.clone(),K[q]=le,I.addEventListener("dispose",O)),b=le}if(b.visible=I.visible,b.wireframe=I.wireframe,W===Ai?b.side=I.shadowSide!==null?I.shadowSide:I.side:b.side=I.shadowSide!==null?I.shadowSide:p[I.side],b.alphaMap=I.alphaMap,b.alphaTest=I.alphaTest,b.map=I.map,b.clipShadows=I.clipShadows,b.clippingPlanes=I.clippingPlanes,b.clipIntersection=I.clipIntersection,b.displacementMap=I.displacementMap,b.displacementScale=I.displacementScale,b.displacementBias=I.displacementBias,b.wireframeLinewidth=I.wireframeLinewidth,b.linewidth=I.linewidth,N.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const X=r.properties.get(b);X.light=N}return b}function T(P,I,N,W,b){if(P.visible===!1)return;if(P.layers.test(I.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&b===Ai)&&(!P.frustumCulled||n.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,P.matrixWorld);const q=e.update(P),K=P.material;if(Array.isArray(K)){const le=q.groups;for(let Z=0,me=le.length;Z<me;Z++){const z=le[Z],se=K[z.materialIndex];if(se&&se.visible){const te=w(P,se,W,b);P.onBeforeShadow(r,P,I,N,q,te,z),r.renderBufferDirect(N,null,q,te,P,z),P.onAfterShadow(r,P,I,N,q,te,z)}}}else if(K.visible){const le=w(P,K,W,b);P.onBeforeShadow(r,P,I,N,q,le,null),r.renderBufferDirect(N,null,q,le,P,null),P.onAfterShadow(r,P,I,N,q,le,null)}}const X=P.children;for(let q=0,K=X.length;q<K;q++)T(X[q],I,N,W,b)}function O(P){P.target.removeEventListener("dispose",O);for(const N in h){const W=h[N],b=P.target.uuid;b in W&&(W[b].dispose(),delete W[b])}}}const VA={[uu]:hu,[fu]:mu,[du]:gu,[As]:pu,[hu]:uu,[mu]:fu,[gu]:du,[pu]:As};function GA(r){function e(){let H=!1;const Ue=new xt;let ie=null;const de=new xt(0,0,0,0);return{setMask:function(Ie){ie!==Ie&&!H&&(r.colorMask(Ie,Ie,Ie,Ie),ie=Ie)},setLocked:function(Ie){H=Ie},setClear:function(Ie,Ne,wt,Gt,Sn){Sn===!0&&(Ie*=Gt,Ne*=Gt,wt*=Gt),Ue.set(Ie,Ne,wt,Gt),de.equals(Ue)===!1&&(r.clearColor(Ie,Ne,wt,Gt),de.copy(Ue))},reset:function(){H=!1,ie=null,de.set(-1,0,0,0)}}}function t(){let H=!1,Ue=!1,ie=null,de=null,Ie=null;return{setReversed:function(Ne){Ue=Ne},setTest:function(Ne){Ne?be(r.DEPTH_TEST):Se(r.DEPTH_TEST)},setMask:function(Ne){ie!==Ne&&!H&&(r.depthMask(Ne),ie=Ne)},setFunc:function(Ne){if(Ue&&(Ne=VA[Ne]),de!==Ne){switch(Ne){case uu:r.depthFunc(r.NEVER);break;case hu:r.depthFunc(r.ALWAYS);break;case fu:r.depthFunc(r.LESS);break;case As:r.depthFunc(r.LEQUAL);break;case du:r.depthFunc(r.EQUAL);break;case pu:r.depthFunc(r.GEQUAL);break;case mu:r.depthFunc(r.GREATER);break;case gu:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}de=Ne}},setLocked:function(Ne){H=Ne},setClear:function(Ne){Ie!==Ne&&(r.clearDepth(Ne),Ie=Ne)},reset:function(){H=!1,ie=null,de=null,Ie=null}}}function n(){let H=!1,Ue=null,ie=null,de=null,Ie=null,Ne=null,wt=null,Gt=null,Sn=null;return{setTest:function(Et){H||(Et?be(r.STENCIL_TEST):Se(r.STENCIL_TEST))},setMask:function(Et){Ue!==Et&&!H&&(r.stencilMask(Et),Ue=Et)},setFunc:function(Et,gn,si){(ie!==Et||de!==gn||Ie!==si)&&(r.stencilFunc(Et,gn,si),ie=Et,de=gn,Ie=si)},setOp:function(Et,gn,si){(Ne!==Et||wt!==gn||Gt!==si)&&(r.stencilOp(Et,gn,si),Ne=Et,wt=gn,Gt=si)},setLocked:function(Et){H=Et},setClear:function(Et){Sn!==Et&&(r.clearStencil(Et),Sn=Et)},reset:function(){H=!1,Ue=null,ie=null,de=null,Ie=null,Ne=null,wt=null,Gt=null,Sn=null}}}const i=new e,s=new t,a=new n,c=new WeakMap,u=new WeakMap;let h={},f={},p=new WeakMap,m=[],g=null,y=!1,M=null,x=null,_=null,E=null,w=null,T=null,O=null,P=new Pe(0,0,0),I=0,N=!1,W=null,b=null,C=null,X=null,q=null;const K=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let le=!1,Z=0;const me=r.getParameter(r.VERSION);me.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(me)[1]),le=Z>=1):me.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(me)[1]),le=Z>=2);let z=null,se={};const te=r.getParameter(r.SCISSOR_BOX),ce=r.getParameter(r.VIEWPORT),Be=new xt().fromArray(te),Xe=new xt().fromArray(ce);function ne(H,Ue,ie,de){const Ie=new Uint8Array(4),Ne=r.createTexture();r.bindTexture(H,Ne),r.texParameteri(H,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(H,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let wt=0;wt<ie;wt++)H===r.TEXTURE_3D||H===r.TEXTURE_2D_ARRAY?r.texImage3D(Ue,0,r.RGBA,1,1,de,0,r.RGBA,r.UNSIGNED_BYTE,Ie):r.texImage2D(Ue+wt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Ie);return Ne}const pe={};pe[r.TEXTURE_2D]=ne(r.TEXTURE_2D,r.TEXTURE_2D,1),pe[r.TEXTURE_CUBE_MAP]=ne(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),pe[r.TEXTURE_2D_ARRAY]=ne(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),pe[r.TEXTURE_3D]=ne(r.TEXTURE_3D,r.TEXTURE_3D,1,1),i.setClear(0,0,0,1),s.setClear(1),a.setClear(0),be(r.DEPTH_TEST),s.setFunc(As),Me(!1),ge(zd),be(r.CULL_FACE),F(dr);function be(H){h[H]!==!0&&(r.enable(H),h[H]=!0)}function Se(H){h[H]!==!1&&(r.disable(H),h[H]=!1)}function rt(H,Ue){return f[H]!==Ue?(r.bindFramebuffer(H,Ue),f[H]=Ue,H===r.DRAW_FRAMEBUFFER&&(f[r.FRAMEBUFFER]=Ue),H===r.FRAMEBUFFER&&(f[r.DRAW_FRAMEBUFFER]=Ue),!0):!1}function Qe(H,Ue){let ie=m,de=!1;if(H){ie=p.get(Ue),ie===void 0&&(ie=[],p.set(Ue,ie));const Ie=H.textures;if(ie.length!==Ie.length||ie[0]!==r.COLOR_ATTACHMENT0){for(let Ne=0,wt=Ie.length;Ne<wt;Ne++)ie[Ne]=r.COLOR_ATTACHMENT0+Ne;ie.length=Ie.length,de=!0}}else ie[0]!==r.BACK&&(ie[0]=r.BACK,de=!0);de&&r.drawBuffers(ie)}function st(H){return g!==H?(r.useProgram(H),g=H,!0):!1}const nt={[Fr]:r.FUNC_ADD,[Uv]:r.FUNC_SUBTRACT,[Nv]:r.FUNC_REVERSE_SUBTRACT};nt[Ov]=r.MIN,nt[Fv]=r.MAX;const he={[Bv]:r.ZERO,[zv]:r.ONE,[kv]:r.SRC_COLOR,[lu]:r.SRC_ALPHA,[Yv]:r.SRC_ALPHA_SATURATE,[Wv]:r.DST_COLOR,[Vv]:r.DST_ALPHA,[Hv]:r.ONE_MINUS_SRC_COLOR,[cu]:r.ONE_MINUS_SRC_ALPHA,[Xv]:r.ONE_MINUS_DST_COLOR,[Gv]:r.ONE_MINUS_DST_ALPHA,[qv]:r.CONSTANT_COLOR,[Zv]:r.ONE_MINUS_CONSTANT_COLOR,[jv]:r.CONSTANT_ALPHA,[Jv]:r.ONE_MINUS_CONSTANT_ALPHA};function F(H,Ue,ie,de,Ie,Ne,wt,Gt,Sn,Et){if(H===dr){y===!0&&(Se(r.BLEND),y=!1);return}if(y===!1&&(be(r.BLEND),y=!0),H!==Dv){if(H!==M||Et!==N){if((x!==Fr||w!==Fr)&&(r.blendEquation(r.FUNC_ADD),x=Fr,w=Fr),Et)switch(H){case ys:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case kd:r.blendFunc(r.ONE,r.ONE);break;case Hd:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Vd:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}else switch(H){case ys:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case kd:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case Hd:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Vd:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}_=null,E=null,T=null,O=null,P.set(0,0,0),I=0,M=H,N=Et}return}Ie=Ie||Ue,Ne=Ne||ie,wt=wt||de,(Ue!==x||Ie!==w)&&(r.blendEquationSeparate(nt[Ue],nt[Ie]),x=Ue,w=Ie),(ie!==_||de!==E||Ne!==T||wt!==O)&&(r.blendFuncSeparate(he[ie],he[de],he[Ne],he[wt]),_=ie,E=de,T=Ne,O=wt),(Gt.equals(P)===!1||Sn!==I)&&(r.blendColor(Gt.r,Gt.g,Gt.b,Sn),P.copy(Gt),I=Sn),M=H,N=!1}function we(H,Ue){H.side===Vi?Se(r.CULL_FACE):be(r.CULL_FACE);let ie=H.side===Pn;Ue&&(ie=!ie),Me(ie),H.blending===ys&&H.transparent===!1?F(dr):F(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),s.setFunc(H.depthFunc),s.setTest(H.depthTest),s.setMask(H.depthWrite),i.setMask(H.colorWrite);const de=H.stencilWrite;a.setTest(de),de&&(a.setMask(H.stencilWriteMask),a.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),a.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),je(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?be(r.SAMPLE_ALPHA_TO_COVERAGE):Se(r.SAMPLE_ALPHA_TO_COVERAGE)}function Me(H){W!==H&&(H?r.frontFace(r.CW):r.frontFace(r.CCW),W=H)}function ge(H){H!==Pv?(be(r.CULL_FACE),H!==b&&(H===zd?r.cullFace(r.BACK):H===Iv?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Se(r.CULL_FACE),b=H}function Ee(H){H!==C&&(le&&r.lineWidth(H),C=H)}function je(H,Ue,ie){H?(be(r.POLYGON_OFFSET_FILL),(X!==Ue||q!==ie)&&(r.polygonOffset(Ue,ie),X=Ue,q=ie)):Se(r.POLYGON_OFFSET_FILL)}function De(H){H?be(r.SCISSOR_TEST):Se(r.SCISSOR_TEST)}function U(H){H===void 0&&(H=r.TEXTURE0+K-1),z!==H&&(r.activeTexture(H),z=H)}function R(H,Ue,ie){ie===void 0&&(z===null?ie=r.TEXTURE0+K-1:ie=z);let de=se[ie];de===void 0&&(de={type:void 0,texture:void 0},se[ie]=de),(de.type!==H||de.texture!==Ue)&&(z!==ie&&(r.activeTexture(ie),z=ie),r.bindTexture(H,Ue||pe[H]),de.type=H,de.texture=Ue)}function j(){const H=se[z];H!==void 0&&H.type!==void 0&&(r.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function oe(){try{r.compressedTexImage2D.apply(r,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ue(){try{r.compressedTexImage3D.apply(r,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ae(){try{r.texSubImage2D.apply(r,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ye(){try{r.texSubImage3D.apply(r,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Te(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Oe(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function St(){try{r.texStorage2D.apply(r,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ve(){try{r.texStorage3D.apply(r,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Fe(){try{r.texImage2D.apply(r,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ot(){try{r.texImage3D.apply(r,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function at(H){Be.equals(H)===!1&&(r.scissor(H.x,H.y,H.z,H.w),Be.copy(H))}function ze(H){Xe.equals(H)===!1&&(r.viewport(H.x,H.y,H.z,H.w),Xe.copy(H))}function Mt(H,Ue){let ie=u.get(Ue);ie===void 0&&(ie=new WeakMap,u.set(Ue,ie));let de=ie.get(H);de===void 0&&(de=r.getUniformBlockIndex(Ue,H.name),ie.set(H,de))}function ut(H,Ue){const de=u.get(Ue).get(H);c.get(Ue)!==de&&(r.uniformBlockBinding(Ue,de,H.__bindingPointIndex),c.set(Ue,de))}function Nt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),h={},z=null,se={},f={},p=new WeakMap,m=[],g=null,y=!1,M=null,x=null,_=null,E=null,w=null,T=null,O=null,P=new Pe(0,0,0),I=0,N=!1,W=null,b=null,C=null,X=null,q=null,Be.set(0,0,r.canvas.width,r.canvas.height),Xe.set(0,0,r.canvas.width,r.canvas.height),i.reset(),s.reset(),a.reset()}return{buffers:{color:i,depth:s,stencil:a},enable:be,disable:Se,bindFramebuffer:rt,drawBuffers:Qe,useProgram:st,setBlending:F,setMaterial:we,setFlipSided:Me,setCullFace:ge,setLineWidth:Ee,setPolygonOffset:je,setScissorTest:De,activeTexture:U,bindTexture:R,unbindTexture:j,compressedTexImage2D:oe,compressedTexImage3D:ue,texImage2D:Fe,texImage3D:ot,updateUBOMapping:Mt,uniformBlockBinding:ut,texStorage2D:St,texStorage3D:ve,texSubImage2D:ae,texSubImage3D:Ye,compressedTexSubImage2D:Te,compressedTexSubImage3D:Oe,scissor:at,viewport:ze,reset:Nt}}function WA(r,e){const t=r.image&&r.image.width?r.image.width/r.image.height:1;return t>e?(r.repeat.x=1,r.repeat.y=t/e,r.offset.x=0,r.offset.y=(1-r.repeat.y)/2):(r.repeat.x=e/t,r.repeat.y=1,r.offset.x=(1-r.repeat.x)/2,r.offset.y=0),r}function XA(r,e){const t=r.image&&r.image.width?r.image.width/r.image.height:1;return t>e?(r.repeat.x=e/t,r.repeat.y=1,r.offset.x=(1-r.repeat.x)/2,r.offset.y=0):(r.repeat.x=1,r.repeat.y=t/e,r.offset.x=0,r.offset.y=(1-r.repeat.y)/2),r}function YA(r){return r.repeat.x=1,r.repeat.y=1,r.offset.x=0,r.offset.y=0,r}function Zd(r,e,t,n){const i=qA(n);switch(t){case cp:return r*e;case hp:return r*e;case fp:return r*e*2;case th:return r*e/i.components*i.byteLength;case Ka:return r*e/i.components*i.byteLength;case dp:return r*e*2/i.components*i.byteLength;case nh:return r*e*2/i.components*i.byteLength;case up:return r*e*3/i.components*i.byteLength;case Rn:return r*e*4/i.components*i.byteLength;case ih:return r*e*4/i.components*i.byteLength;case xa:case Sa:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Ma:case wa:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case _u:case xu:return Math.max(r,16)*Math.max(e,8)/4;case vu:case yu:return Math.max(r,8)*Math.max(e,8)/2;case Su:case Mu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case wu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Eu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Au:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Tu:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case bu:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case Cu:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Ru:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Pu:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Iu:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case Lu:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Du:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Uu:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Nu:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Ou:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Fu:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case Ea:case Bu:case zu:return Math.ceil(r/4)*Math.ceil(e/4)*16;case pp:case ku:return Math.ceil(r/4)*Math.ceil(e/4)*8;case Hu:case Vu:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function qA(r){switch(r){case Ci:case op:return{byteLength:1,components:1};case Ao:case ap:case Rs:return{byteLength:2,components:1};case $u:case eh:return{byteLength:2,components:4};case mr:case Qu:case zn:return{byteLength:4,components:1};case lp:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}const ZA={contain:WA,cover:XA,fill:YA,getByteLength:Zd};function jA(r,e,t,n,i,s,a){const c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,u=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new fe,f=new WeakMap;let p;const m=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(U,R){return g?new OffscreenCanvas(U,R):za("canvas")}function M(U,R,j){let oe=1;const ue=De(U);if((ue.width>j||ue.height>j)&&(oe=j/Math.max(ue.width,ue.height)),oe<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const ae=Math.floor(oe*ue.width),Ye=Math.floor(oe*ue.height);p===void 0&&(p=y(ae,Ye));const Te=R?y(ae,Ye):p;return Te.width=ae,Te.height=Ye,Te.getContext("2d").drawImage(U,0,0,ae,Ye),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ue.width+"x"+ue.height+") to ("+ae+"x"+Ye+")."),Te}else return"data"in U&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ue.width+"x"+ue.height+")."),U;return U}function x(U){return U.generateMipmaps&&U.minFilter!==dn&&U.minFilter!==jt}function _(U){r.generateMipmap(U)}function E(U,R,j,oe,ue=!1){if(U!==null){if(r[U]!==void 0)return r[U];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let ae=R;if(R===r.RED&&(j===r.FLOAT&&(ae=r.R32F),j===r.HALF_FLOAT&&(ae=r.R16F),j===r.UNSIGNED_BYTE&&(ae=r.R8)),R===r.RED_INTEGER&&(j===r.UNSIGNED_BYTE&&(ae=r.R8UI),j===r.UNSIGNED_SHORT&&(ae=r.R16UI),j===r.UNSIGNED_INT&&(ae=r.R32UI),j===r.BYTE&&(ae=r.R8I),j===r.SHORT&&(ae=r.R16I),j===r.INT&&(ae=r.R32I)),R===r.RG&&(j===r.FLOAT&&(ae=r.RG32F),j===r.HALF_FLOAT&&(ae=r.RG16F),j===r.UNSIGNED_BYTE&&(ae=r.RG8)),R===r.RG_INTEGER&&(j===r.UNSIGNED_BYTE&&(ae=r.RG8UI),j===r.UNSIGNED_SHORT&&(ae=r.RG16UI),j===r.UNSIGNED_INT&&(ae=r.RG32UI),j===r.BYTE&&(ae=r.RG8I),j===r.SHORT&&(ae=r.RG16I),j===r.INT&&(ae=r.RG32I)),R===r.RGB_INTEGER&&(j===r.UNSIGNED_BYTE&&(ae=r.RGB8UI),j===r.UNSIGNED_SHORT&&(ae=r.RGB16UI),j===r.UNSIGNED_INT&&(ae=r.RGB32UI),j===r.BYTE&&(ae=r.RGB8I),j===r.SHORT&&(ae=r.RGB16I),j===r.INT&&(ae=r.RGB32I)),R===r.RGBA_INTEGER&&(j===r.UNSIGNED_BYTE&&(ae=r.RGBA8UI),j===r.UNSIGNED_SHORT&&(ae=r.RGBA16UI),j===r.UNSIGNED_INT&&(ae=r.RGBA32UI),j===r.BYTE&&(ae=r.RGBA8I),j===r.SHORT&&(ae=r.RGBA16I),j===r.INT&&(ae=r.RGBA32I)),R===r.RGB&&j===r.UNSIGNED_INT_5_9_9_9_REV&&(ae=r.RGB9_E5),R===r.RGBA){const Ye=ue?Ua:Dt.getTransfer(oe);j===r.FLOAT&&(ae=r.RGBA32F),j===r.HALF_FLOAT&&(ae=r.RGBA16F),j===r.UNSIGNED_BYTE&&(ae=Ye===zt?r.SRGB8_ALPHA8:r.RGBA8),j===r.UNSIGNED_SHORT_4_4_4_4&&(ae=r.RGBA4),j===r.UNSIGNED_SHORT_5_5_5_1&&(ae=r.RGB5_A1)}return(ae===r.R16F||ae===r.R32F||ae===r.RG16F||ae===r.RG32F||ae===r.RGBA16F||ae===r.RGBA32F)&&e.get("EXT_color_buffer_float"),ae}function w(U,R){let j;return U?R===null||R===mr||R===Ts?j=r.DEPTH24_STENCIL8:R===zn?j=r.DEPTH32F_STENCIL8:R===Ao&&(j=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):R===null||R===mr||R===Ts?j=r.DEPTH_COMPONENT24:R===zn?j=r.DEPTH_COMPONENT32F:R===Ao&&(j=r.DEPTH_COMPONENT16),j}function T(U,R){return x(U)===!0||U.isFramebufferTexture&&U.minFilter!==dn&&U.minFilter!==jt?Math.log2(Math.max(R.width,R.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?R.mipmaps.length:1}function O(U){const R=U.target;R.removeEventListener("dispose",O),I(R),R.isVideoTexture&&f.delete(R)}function P(U){const R=U.target;R.removeEventListener("dispose",P),W(R)}function I(U){const R=n.get(U);if(R.__webglInit===void 0)return;const j=U.source,oe=m.get(j);if(oe){const ue=oe[R.__cacheKey];ue.usedTimes--,ue.usedTimes===0&&N(U),Object.keys(oe).length===0&&m.delete(j)}n.remove(U)}function N(U){const R=n.get(U);r.deleteTexture(R.__webglTexture);const j=U.source,oe=m.get(j);delete oe[R.__cacheKey],a.memory.textures--}function W(U){const R=n.get(U);if(U.depthTexture&&U.depthTexture.dispose(),U.isWebGLCubeRenderTarget)for(let oe=0;oe<6;oe++){if(Array.isArray(R.__webglFramebuffer[oe]))for(let ue=0;ue<R.__webglFramebuffer[oe].length;ue++)r.deleteFramebuffer(R.__webglFramebuffer[oe][ue]);else r.deleteFramebuffer(R.__webglFramebuffer[oe]);R.__webglDepthbuffer&&r.deleteRenderbuffer(R.__webglDepthbuffer[oe])}else{if(Array.isArray(R.__webglFramebuffer))for(let oe=0;oe<R.__webglFramebuffer.length;oe++)r.deleteFramebuffer(R.__webglFramebuffer[oe]);else r.deleteFramebuffer(R.__webglFramebuffer);if(R.__webglDepthbuffer&&r.deleteRenderbuffer(R.__webglDepthbuffer),R.__webglMultisampledFramebuffer&&r.deleteFramebuffer(R.__webglMultisampledFramebuffer),R.__webglColorRenderbuffer)for(let oe=0;oe<R.__webglColorRenderbuffer.length;oe++)R.__webglColorRenderbuffer[oe]&&r.deleteRenderbuffer(R.__webglColorRenderbuffer[oe]);R.__webglDepthRenderbuffer&&r.deleteRenderbuffer(R.__webglDepthRenderbuffer)}const j=U.textures;for(let oe=0,ue=j.length;oe<ue;oe++){const ae=n.get(j[oe]);ae.__webglTexture&&(r.deleteTexture(ae.__webglTexture),a.memory.textures--),n.remove(j[oe])}n.remove(U)}let b=0;function C(){b=0}function X(){const U=b;return U>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+i.maxTextures),b+=1,U}function q(U){const R=[];return R.push(U.wrapS),R.push(U.wrapT),R.push(U.wrapR||0),R.push(U.magFilter),R.push(U.minFilter),R.push(U.anisotropy),R.push(U.internalFormat),R.push(U.format),R.push(U.type),R.push(U.generateMipmaps),R.push(U.premultiplyAlpha),R.push(U.flipY),R.push(U.unpackAlignment),R.push(U.colorSpace),R.join()}function K(U,R){const j=n.get(U);if(U.isVideoTexture&&Ee(U),U.isRenderTargetTexture===!1&&U.version>0&&j.__version!==U.version){const oe=U.image;if(oe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(oe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Xe(j,U,R);return}}t.bindTexture(r.TEXTURE_2D,j.__webglTexture,r.TEXTURE0+R)}function le(U,R){const j=n.get(U);if(U.version>0&&j.__version!==U.version){Xe(j,U,R);return}t.bindTexture(r.TEXTURE_2D_ARRAY,j.__webglTexture,r.TEXTURE0+R)}function Z(U,R){const j=n.get(U);if(U.version>0&&j.__version!==U.version){Xe(j,U,R);return}t.bindTexture(r.TEXTURE_3D,j.__webglTexture,r.TEXTURE0+R)}function me(U,R){const j=n.get(U);if(U.version>0&&j.__version!==U.version){ne(j,U,R);return}t.bindTexture(r.TEXTURE_CUBE_MAP,j.__webglTexture,r.TEXTURE0+R)}const z={[Pa]:r.REPEAT,[gi]:r.CLAMP_TO_EDGE,[Ia]:r.MIRRORED_REPEAT},se={[dn]:r.NEAREST,[sp]:r.NEAREST_MIPMAP_NEAREST,[_o]:r.NEAREST_MIPMAP_LINEAR,[jt]:r.LINEAR,[ya]:r.LINEAR_MIPMAP_NEAREST,[Wi]:r.LINEAR_MIPMAP_LINEAR},te={[f_]:r.NEVER,[__]:r.ALWAYS,[d_]:r.LESS,[gp]:r.LEQUAL,[p_]:r.EQUAL,[v_]:r.GEQUAL,[m_]:r.GREATER,[g_]:r.NOTEQUAL};function ce(U,R){if(R.type===zn&&e.has("OES_texture_float_linear")===!1&&(R.magFilter===jt||R.magFilter===ya||R.magFilter===_o||R.magFilter===Wi||R.minFilter===jt||R.minFilter===ya||R.minFilter===_o||R.minFilter===Wi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(U,r.TEXTURE_WRAP_S,z[R.wrapS]),r.texParameteri(U,r.TEXTURE_WRAP_T,z[R.wrapT]),(U===r.TEXTURE_3D||U===r.TEXTURE_2D_ARRAY)&&r.texParameteri(U,r.TEXTURE_WRAP_R,z[R.wrapR]),r.texParameteri(U,r.TEXTURE_MAG_FILTER,se[R.magFilter]),r.texParameteri(U,r.TEXTURE_MIN_FILTER,se[R.minFilter]),R.compareFunction&&(r.texParameteri(U,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(U,r.TEXTURE_COMPARE_FUNC,te[R.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(R.magFilter===dn||R.minFilter!==_o&&R.minFilter!==Wi||R.type===zn&&e.has("OES_texture_float_linear")===!1)return;if(R.anisotropy>1||n.get(R).__currentAnisotropy){const j=e.get("EXT_texture_filter_anisotropic");r.texParameterf(U,j.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(R.anisotropy,i.getMaxAnisotropy())),n.get(R).__currentAnisotropy=R.anisotropy}}}function Be(U,R){let j=!1;U.__webglInit===void 0&&(U.__webglInit=!0,R.addEventListener("dispose",O));const oe=R.source;let ue=m.get(oe);ue===void 0&&(ue={},m.set(oe,ue));const ae=q(R);if(ae!==U.__cacheKey){ue[ae]===void 0&&(ue[ae]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,j=!0),ue[ae].usedTimes++;const Ye=ue[U.__cacheKey];Ye!==void 0&&(ue[U.__cacheKey].usedTimes--,Ye.usedTimes===0&&N(R)),U.__cacheKey=ae,U.__webglTexture=ue[ae].texture}return j}function Xe(U,R,j){let oe=r.TEXTURE_2D;(R.isDataArrayTexture||R.isCompressedArrayTexture)&&(oe=r.TEXTURE_2D_ARRAY),R.isData3DTexture&&(oe=r.TEXTURE_3D);const ue=Be(U,R),ae=R.source;t.bindTexture(oe,U.__webglTexture,r.TEXTURE0+j);const Ye=n.get(ae);if(ae.version!==Ye.__version||ue===!0){t.activeTexture(r.TEXTURE0+j);const Te=Dt.getPrimaries(Dt.workingColorSpace),Oe=R.colorSpace===ur?null:Dt.getPrimaries(R.colorSpace),St=R.colorSpace===ur||Te===Oe?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,R.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,R.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,St);let ve=M(R.image,!1,i.maxTextureSize);ve=je(R,ve);const Fe=s.convert(R.format,R.colorSpace),ot=s.convert(R.type);let at=E(R.internalFormat,Fe,ot,R.colorSpace,R.isVideoTexture);ce(oe,R);let ze;const Mt=R.mipmaps,ut=R.isVideoTexture!==!0,Nt=Ye.__version===void 0||ue===!0,H=ae.dataReady,Ue=T(R,ve);if(R.isDepthTexture)at=w(R.format===bs,R.type),Nt&&(ut?t.texStorage2D(r.TEXTURE_2D,1,at,ve.width,ve.height):t.texImage2D(r.TEXTURE_2D,0,at,ve.width,ve.height,0,Fe,ot,null));else if(R.isDataTexture)if(Mt.length>0){ut&&Nt&&t.texStorage2D(r.TEXTURE_2D,Ue,at,Mt[0].width,Mt[0].height);for(let ie=0,de=Mt.length;ie<de;ie++)ze=Mt[ie],ut?H&&t.texSubImage2D(r.TEXTURE_2D,ie,0,0,ze.width,ze.height,Fe,ot,ze.data):t.texImage2D(r.TEXTURE_2D,ie,at,ze.width,ze.height,0,Fe,ot,ze.data);R.generateMipmaps=!1}else ut?(Nt&&t.texStorage2D(r.TEXTURE_2D,Ue,at,ve.width,ve.height),H&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,ve.width,ve.height,Fe,ot,ve.data)):t.texImage2D(r.TEXTURE_2D,0,at,ve.width,ve.height,0,Fe,ot,ve.data);else if(R.isCompressedTexture)if(R.isCompressedArrayTexture){ut&&Nt&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Ue,at,Mt[0].width,Mt[0].height,ve.depth);for(let ie=0,de=Mt.length;ie<de;ie++)if(ze=Mt[ie],R.format!==Rn)if(Fe!==null)if(ut){if(H)if(R.layerUpdates.size>0){const Ie=Zd(ze.width,ze.height,R.format,R.type);for(const Ne of R.layerUpdates){const wt=ze.data.subarray(Ne*Ie/ze.data.BYTES_PER_ELEMENT,(Ne+1)*Ie/ze.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ie,0,0,Ne,ze.width,ze.height,1,Fe,wt,0,0)}R.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ie,0,0,0,ze.width,ze.height,ve.depth,Fe,ze.data,0,0)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,ie,at,ze.width,ze.height,ve.depth,0,ze.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ut?H&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,ie,0,0,0,ze.width,ze.height,ve.depth,Fe,ot,ze.data):t.texImage3D(r.TEXTURE_2D_ARRAY,ie,at,ze.width,ze.height,ve.depth,0,Fe,ot,ze.data)}else{ut&&Nt&&t.texStorage2D(r.TEXTURE_2D,Ue,at,Mt[0].width,Mt[0].height);for(let ie=0,de=Mt.length;ie<de;ie++)ze=Mt[ie],R.format!==Rn?Fe!==null?ut?H&&t.compressedTexSubImage2D(r.TEXTURE_2D,ie,0,0,ze.width,ze.height,Fe,ze.data):t.compressedTexImage2D(r.TEXTURE_2D,ie,at,ze.width,ze.height,0,ze.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ut?H&&t.texSubImage2D(r.TEXTURE_2D,ie,0,0,ze.width,ze.height,Fe,ot,ze.data):t.texImage2D(r.TEXTURE_2D,ie,at,ze.width,ze.height,0,Fe,ot,ze.data)}else if(R.isDataArrayTexture)if(ut){if(Nt&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Ue,at,ve.width,ve.height,ve.depth),H)if(R.layerUpdates.size>0){const ie=Zd(ve.width,ve.height,R.format,R.type);for(const de of R.layerUpdates){const Ie=ve.data.subarray(de*ie/ve.data.BYTES_PER_ELEMENT,(de+1)*ie/ve.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,de,ve.width,ve.height,1,Fe,ot,Ie)}R.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,ve.width,ve.height,ve.depth,Fe,ot,ve.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,at,ve.width,ve.height,ve.depth,0,Fe,ot,ve.data);else if(R.isData3DTexture)ut?(Nt&&t.texStorage3D(r.TEXTURE_3D,Ue,at,ve.width,ve.height,ve.depth),H&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,ve.width,ve.height,ve.depth,Fe,ot,ve.data)):t.texImage3D(r.TEXTURE_3D,0,at,ve.width,ve.height,ve.depth,0,Fe,ot,ve.data);else if(R.isFramebufferTexture){if(Nt)if(ut)t.texStorage2D(r.TEXTURE_2D,Ue,at,ve.width,ve.height);else{let ie=ve.width,de=ve.height;for(let Ie=0;Ie<Ue;Ie++)t.texImage2D(r.TEXTURE_2D,Ie,at,ie,de,0,Fe,ot,null),ie>>=1,de>>=1}}else if(Mt.length>0){if(ut&&Nt){const ie=De(Mt[0]);t.texStorage2D(r.TEXTURE_2D,Ue,at,ie.width,ie.height)}for(let ie=0,de=Mt.length;ie<de;ie++)ze=Mt[ie],ut?H&&t.texSubImage2D(r.TEXTURE_2D,ie,0,0,Fe,ot,ze):t.texImage2D(r.TEXTURE_2D,ie,at,Fe,ot,ze);R.generateMipmaps=!1}else if(ut){if(Nt){const ie=De(ve);t.texStorage2D(r.TEXTURE_2D,Ue,at,ie.width,ie.height)}H&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,Fe,ot,ve)}else t.texImage2D(r.TEXTURE_2D,0,at,Fe,ot,ve);x(R)&&_(oe),Ye.__version=ae.version,R.onUpdate&&R.onUpdate(R)}U.__version=R.version}function ne(U,R,j){if(R.image.length!==6)return;const oe=Be(U,R),ue=R.source;t.bindTexture(r.TEXTURE_CUBE_MAP,U.__webglTexture,r.TEXTURE0+j);const ae=n.get(ue);if(ue.version!==ae.__version||oe===!0){t.activeTexture(r.TEXTURE0+j);const Ye=Dt.getPrimaries(Dt.workingColorSpace),Te=R.colorSpace===ur?null:Dt.getPrimaries(R.colorSpace),Oe=R.colorSpace===ur||Ye===Te?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,R.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,R.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Oe);const St=R.isCompressedTexture||R.image[0].isCompressedTexture,ve=R.image[0]&&R.image[0].isDataTexture,Fe=[];for(let de=0;de<6;de++)!St&&!ve?Fe[de]=M(R.image[de],!0,i.maxCubemapSize):Fe[de]=ve?R.image[de].image:R.image[de],Fe[de]=je(R,Fe[de]);const ot=Fe[0],at=s.convert(R.format,R.colorSpace),ze=s.convert(R.type),Mt=E(R.internalFormat,at,ze,R.colorSpace),ut=R.isVideoTexture!==!0,Nt=ae.__version===void 0||oe===!0,H=ue.dataReady;let Ue=T(R,ot);ce(r.TEXTURE_CUBE_MAP,R);let ie;if(St){ut&&Nt&&t.texStorage2D(r.TEXTURE_CUBE_MAP,Ue,Mt,ot.width,ot.height);for(let de=0;de<6;de++){ie=Fe[de].mipmaps;for(let Ie=0;Ie<ie.length;Ie++){const Ne=ie[Ie];R.format!==Rn?at!==null?ut?H&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ie,0,0,Ne.width,Ne.height,at,Ne.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ie,Mt,Ne.width,Ne.height,0,Ne.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ut?H&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ie,0,0,Ne.width,Ne.height,at,ze,Ne.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ie,Mt,Ne.width,Ne.height,0,at,ze,Ne.data)}}}else{if(ie=R.mipmaps,ut&&Nt){ie.length>0&&Ue++;const de=De(Fe[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,Ue,Mt,de.width,de.height)}for(let de=0;de<6;de++)if(ve){ut?H&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,Fe[de].width,Fe[de].height,at,ze,Fe[de].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,Mt,Fe[de].width,Fe[de].height,0,at,ze,Fe[de].data);for(let Ie=0;Ie<ie.length;Ie++){const wt=ie[Ie].image[de].image;ut?H&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ie+1,0,0,wt.width,wt.height,at,ze,wt.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ie+1,Mt,wt.width,wt.height,0,at,ze,wt.data)}}else{ut?H&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,at,ze,Fe[de]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,Mt,at,ze,Fe[de]);for(let Ie=0;Ie<ie.length;Ie++){const Ne=ie[Ie];ut?H&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ie+1,0,0,at,ze,Ne.image[de]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ie+1,Mt,at,ze,Ne.image[de])}}}x(R)&&_(r.TEXTURE_CUBE_MAP),ae.__version=ue.version,R.onUpdate&&R.onUpdate(R)}U.__version=R.version}function pe(U,R,j,oe,ue,ae){const Ye=s.convert(j.format,j.colorSpace),Te=s.convert(j.type),Oe=E(j.internalFormat,Ye,Te,j.colorSpace);if(!n.get(R).__hasExternalTextures){const ve=Math.max(1,R.width>>ae),Fe=Math.max(1,R.height>>ae);ue===r.TEXTURE_3D||ue===r.TEXTURE_2D_ARRAY?t.texImage3D(ue,ae,Oe,ve,Fe,R.depth,0,Ye,Te,null):t.texImage2D(ue,ae,Oe,ve,Fe,0,Ye,Te,null)}t.bindFramebuffer(r.FRAMEBUFFER,U),ge(R)?c.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,oe,ue,n.get(j).__webglTexture,0,Me(R)):(ue===r.TEXTURE_2D||ue>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&ue<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,oe,ue,n.get(j).__webglTexture,ae),t.bindFramebuffer(r.FRAMEBUFFER,null)}function be(U,R,j){if(r.bindRenderbuffer(r.RENDERBUFFER,U),R.depthBuffer){const oe=R.depthTexture,ue=oe&&oe.isDepthTexture?oe.type:null,ae=w(R.stencilBuffer,ue),Ye=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Te=Me(R);ge(R)?c.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Te,ae,R.width,R.height):j?r.renderbufferStorageMultisample(r.RENDERBUFFER,Te,ae,R.width,R.height):r.renderbufferStorage(r.RENDERBUFFER,ae,R.width,R.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Ye,r.RENDERBUFFER,U)}else{const oe=R.textures;for(let ue=0;ue<oe.length;ue++){const ae=oe[ue],Ye=s.convert(ae.format,ae.colorSpace),Te=s.convert(ae.type),Oe=E(ae.internalFormat,Ye,Te,ae.colorSpace),St=Me(R);j&&ge(R)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,St,Oe,R.width,R.height):ge(R)?c.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,St,Oe,R.width,R.height):r.renderbufferStorage(r.RENDERBUFFER,Oe,R.width,R.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Se(U,R){if(R&&R.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,U),!(R.depthTexture&&R.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(R.depthTexture).__webglTexture||R.depthTexture.image.width!==R.width||R.depthTexture.image.height!==R.height)&&(R.depthTexture.image.width=R.width,R.depthTexture.image.height=R.height,R.depthTexture.needsUpdate=!0),K(R.depthTexture,0);const oe=n.get(R.depthTexture).__webglTexture,ue=Me(R);if(R.depthTexture.format===xs)ge(R)?c.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,oe,0,ue):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,oe,0);else if(R.depthTexture.format===bs)ge(R)?c.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,oe,0,ue):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,oe,0);else throw new Error("Unknown depthTexture format")}function rt(U){const R=n.get(U),j=U.isWebGLCubeRenderTarget===!0;if(R.__boundDepthTexture!==U.depthTexture){const oe=U.depthTexture;if(R.__depthDisposeCallback&&R.__depthDisposeCallback(),oe){const ue=()=>{delete R.__boundDepthTexture,delete R.__depthDisposeCallback,oe.removeEventListener("dispose",ue)};oe.addEventListener("dispose",ue),R.__depthDisposeCallback=ue}R.__boundDepthTexture=oe}if(U.depthTexture&&!R.__autoAllocateDepthBuffer){if(j)throw new Error("target.depthTexture not supported in Cube render targets");Se(R.__webglFramebuffer,U)}else if(j){R.__webglDepthbuffer=[];for(let oe=0;oe<6;oe++)if(t.bindFramebuffer(r.FRAMEBUFFER,R.__webglFramebuffer[oe]),R.__webglDepthbuffer[oe]===void 0)R.__webglDepthbuffer[oe]=r.createRenderbuffer(),be(R.__webglDepthbuffer[oe],U,!1);else{const ue=U.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ae=R.__webglDepthbuffer[oe];r.bindRenderbuffer(r.RENDERBUFFER,ae),r.framebufferRenderbuffer(r.FRAMEBUFFER,ue,r.RENDERBUFFER,ae)}}else if(t.bindFramebuffer(r.FRAMEBUFFER,R.__webglFramebuffer),R.__webglDepthbuffer===void 0)R.__webglDepthbuffer=r.createRenderbuffer(),be(R.__webglDepthbuffer,U,!1);else{const oe=U.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ue=R.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,ue),r.framebufferRenderbuffer(r.FRAMEBUFFER,oe,r.RENDERBUFFER,ue)}t.bindFramebuffer(r.FRAMEBUFFER,null)}function Qe(U,R,j){const oe=n.get(U);R!==void 0&&pe(oe.__webglFramebuffer,U,U.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),j!==void 0&&rt(U)}function st(U){const R=U.texture,j=n.get(U),oe=n.get(R);U.addEventListener("dispose",P);const ue=U.textures,ae=U.isWebGLCubeRenderTarget===!0,Ye=ue.length>1;if(Ye||(oe.__webglTexture===void 0&&(oe.__webglTexture=r.createTexture()),oe.__version=R.version,a.memory.textures++),ae){j.__webglFramebuffer=[];for(let Te=0;Te<6;Te++)if(R.mipmaps&&R.mipmaps.length>0){j.__webglFramebuffer[Te]=[];for(let Oe=0;Oe<R.mipmaps.length;Oe++)j.__webglFramebuffer[Te][Oe]=r.createFramebuffer()}else j.__webglFramebuffer[Te]=r.createFramebuffer()}else{if(R.mipmaps&&R.mipmaps.length>0){j.__webglFramebuffer=[];for(let Te=0;Te<R.mipmaps.length;Te++)j.__webglFramebuffer[Te]=r.createFramebuffer()}else j.__webglFramebuffer=r.createFramebuffer();if(Ye)for(let Te=0,Oe=ue.length;Te<Oe;Te++){const St=n.get(ue[Te]);St.__webglTexture===void 0&&(St.__webglTexture=r.createTexture(),a.memory.textures++)}if(U.samples>0&&ge(U)===!1){j.__webglMultisampledFramebuffer=r.createFramebuffer(),j.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,j.__webglMultisampledFramebuffer);for(let Te=0;Te<ue.length;Te++){const Oe=ue[Te];j.__webglColorRenderbuffer[Te]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,j.__webglColorRenderbuffer[Te]);const St=s.convert(Oe.format,Oe.colorSpace),ve=s.convert(Oe.type),Fe=E(Oe.internalFormat,St,ve,Oe.colorSpace,U.isXRRenderTarget===!0),ot=Me(U);r.renderbufferStorageMultisample(r.RENDERBUFFER,ot,Fe,U.width,U.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Te,r.RENDERBUFFER,j.__webglColorRenderbuffer[Te])}r.bindRenderbuffer(r.RENDERBUFFER,null),U.depthBuffer&&(j.__webglDepthRenderbuffer=r.createRenderbuffer(),be(j.__webglDepthRenderbuffer,U,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(ae){t.bindTexture(r.TEXTURE_CUBE_MAP,oe.__webglTexture),ce(r.TEXTURE_CUBE_MAP,R);for(let Te=0;Te<6;Te++)if(R.mipmaps&&R.mipmaps.length>0)for(let Oe=0;Oe<R.mipmaps.length;Oe++)pe(j.__webglFramebuffer[Te][Oe],U,R,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Oe);else pe(j.__webglFramebuffer[Te],U,R,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0);x(R)&&_(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ye){for(let Te=0,Oe=ue.length;Te<Oe;Te++){const St=ue[Te],ve=n.get(St);t.bindTexture(r.TEXTURE_2D,ve.__webglTexture),ce(r.TEXTURE_2D,St),pe(j.__webglFramebuffer,U,St,r.COLOR_ATTACHMENT0+Te,r.TEXTURE_2D,0),x(St)&&_(r.TEXTURE_2D)}t.unbindTexture()}else{let Te=r.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Te=U.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(Te,oe.__webglTexture),ce(Te,R),R.mipmaps&&R.mipmaps.length>0)for(let Oe=0;Oe<R.mipmaps.length;Oe++)pe(j.__webglFramebuffer[Oe],U,R,r.COLOR_ATTACHMENT0,Te,Oe);else pe(j.__webglFramebuffer,U,R,r.COLOR_ATTACHMENT0,Te,0);x(R)&&_(Te),t.unbindTexture()}U.depthBuffer&&rt(U)}function nt(U){const R=U.textures;for(let j=0,oe=R.length;j<oe;j++){const ue=R[j];if(x(ue)){const ae=U.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,Ye=n.get(ue).__webglTexture;t.bindTexture(ae,Ye),_(ae),t.unbindTexture()}}}const he=[],F=[];function we(U){if(U.samples>0){if(ge(U)===!1){const R=U.textures,j=U.width,oe=U.height;let ue=r.COLOR_BUFFER_BIT;const ae=U.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ye=n.get(U),Te=R.length>1;if(Te)for(let Oe=0;Oe<R.length;Oe++)t.bindFramebuffer(r.FRAMEBUFFER,Ye.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Oe,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,Ye.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Oe,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,Ye.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ye.__webglFramebuffer);for(let Oe=0;Oe<R.length;Oe++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(ue|=r.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(ue|=r.STENCIL_BUFFER_BIT)),Te){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Ye.__webglColorRenderbuffer[Oe]);const St=n.get(R[Oe]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,St,0)}r.blitFramebuffer(0,0,j,oe,0,0,j,oe,ue,r.NEAREST),u===!0&&(he.length=0,F.length=0,he.push(r.COLOR_ATTACHMENT0+Oe),U.depthBuffer&&U.resolveDepthBuffer===!1&&(he.push(ae),F.push(ae),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,F)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,he))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Te)for(let Oe=0;Oe<R.length;Oe++){t.bindFramebuffer(r.FRAMEBUFFER,Ye.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Oe,r.RENDERBUFFER,Ye.__webglColorRenderbuffer[Oe]);const St=n.get(R[Oe]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,Ye.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Oe,r.TEXTURE_2D,St,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ye.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&u){const R=U.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[R])}}}function Me(U){return Math.min(i.maxSamples,U.samples)}function ge(U){const R=n.get(U);return U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&R.__useRenderToTexture!==!1}function Ee(U){const R=a.render.frame;f.get(U)!==R&&(f.set(U,R),U.update())}function je(U,R){const j=U.colorSpace,oe=U.format,ue=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||j!==vr&&j!==ur&&(Dt.getTransfer(j)===zt?(oe!==Rn||ue!==Ci)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",j)),R}function De(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(h.width=U.naturalWidth||U.width,h.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(h.width=U.displayWidth,h.height=U.displayHeight):(h.width=U.width,h.height=U.height),h}this.allocateTextureUnit=X,this.resetTextureUnits=C,this.setTexture2D=K,this.setTexture2DArray=le,this.setTexture3D=Z,this.setTextureCube=me,this.rebindTextures=Qe,this.setupRenderTarget=st,this.updateRenderTargetMipmap=nt,this.updateMultisampleRenderTarget=we,this.setupDepthRenderbuffer=rt,this.setupFrameBufferTexture=pe,this.useMultisampledRTT=ge}function L_(r,e){function t(n,i=ur){let s;const a=Dt.getTransfer(i);if(n===Ci)return r.UNSIGNED_BYTE;if(n===$u)return r.UNSIGNED_SHORT_4_4_4_4;if(n===eh)return r.UNSIGNED_SHORT_5_5_5_1;if(n===lp)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===op)return r.BYTE;if(n===ap)return r.SHORT;if(n===Ao)return r.UNSIGNED_SHORT;if(n===Qu)return r.INT;if(n===mr)return r.UNSIGNED_INT;if(n===zn)return r.FLOAT;if(n===Rs)return r.HALF_FLOAT;if(n===cp)return r.ALPHA;if(n===up)return r.RGB;if(n===Rn)return r.RGBA;if(n===hp)return r.LUMINANCE;if(n===fp)return r.LUMINANCE_ALPHA;if(n===xs)return r.DEPTH_COMPONENT;if(n===bs)return r.DEPTH_STENCIL;if(n===th)return r.RED;if(n===Ka)return r.RED_INTEGER;if(n===dp)return r.RG;if(n===nh)return r.RG_INTEGER;if(n===ih)return r.RGBA_INTEGER;if(n===xa||n===Sa||n===Ma||n===wa)if(a===zt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===xa)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Sa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ma)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===wa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===xa)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Sa)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ma)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===wa)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===vu||n===_u||n===yu||n===xu)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===vu)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===_u)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===yu)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===xu)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Su||n===Mu||n===wu)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Su||n===Mu)return a===zt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===wu)return a===zt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Eu||n===Au||n===Tu||n===bu||n===Cu||n===Ru||n===Pu||n===Iu||n===Lu||n===Du||n===Uu||n===Nu||n===Ou||n===Fu)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Eu)return a===zt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Au)return a===zt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Tu)return a===zt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===bu)return a===zt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Cu)return a===zt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ru)return a===zt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Pu)return a===zt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Iu)return a===zt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Lu)return a===zt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Du)return a===zt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Uu)return a===zt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Nu)return a===zt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ou)return a===zt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Fu)return a===zt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ea||n===Bu||n===zu)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Ea)return a===zt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Bu)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===zu)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===pp||n===ku||n===Hu||n===Vu)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Ea)return s.COMPRESSED_RED_RGTC1_EXT;if(n===ku)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Hu)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Vu)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ts?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}class D_ extends fn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class So extends Ct{constructor(){super(),this.isGroup=!0,this.type="Group"}}const JA={type:"move"};class fd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new So,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new So,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new So,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,a=null;const c=this._targetRay,u=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){a=!0;for(const M of e.hand.values()){const x=t.getJointPose(M,n),_=this._getHandJoint(h,M);x!==null&&(_.matrix.fromArray(x.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=x.radius),_.visible=x!==null}const f=h.joints["index-finger-tip"],p=h.joints["thumb-tip"],m=f.position.distanceTo(p.position),g=.02,y=.005;h.inputState.pinching&&m>g+y?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&m<=g-y&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else u!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(u.matrix.fromArray(s.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,s.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(s.linearVelocity)):u.hasLinearVelocity=!1,s.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(s.angularVelocity)):u.hasAngularVelocity=!1));c!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(c.matrix.fromArray(i.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,i.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(i.linearVelocity)):c.hasLinearVelocity=!1,i.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(i.angularVelocity)):c.hasAngularVelocity=!1,this.dispatchEvent(JA)))}return c!==null&&(c.visible=i!==null),u!==null&&(u.visible=s!==null),h!==null&&(h.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new So;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const KA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,QA=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class $A{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new Jt,s=e.properties.get(i);s.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new ri({vertexShader:KA,fragmentShader:QA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new $t(new Do(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class eT extends ji{constructor(e,t){super();const n=this;let i=null,s=1,a=null,c="local-floor",u=1,h=null,f=null,p=null,m=null,g=null,y=null;const M=new $A,x=t.getContextAttributes();let _=null,E=null;const w=[],T=[],O=new fe;let P=null;const I=new fn;I.layers.enable(1),I.viewport=new xt;const N=new fn;N.layers.enable(2),N.viewport=new xt;const W=[I,N],b=new D_;b.layers.enable(1),b.layers.enable(2);let C=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ne){let pe=w[ne];return pe===void 0&&(pe=new fd,w[ne]=pe),pe.getTargetRaySpace()},this.getControllerGrip=function(ne){let pe=w[ne];return pe===void 0&&(pe=new fd,w[ne]=pe),pe.getGripSpace()},this.getHand=function(ne){let pe=w[ne];return pe===void 0&&(pe=new fd,w[ne]=pe),pe.getHandSpace()};function q(ne){const pe=T.indexOf(ne.inputSource);if(pe===-1)return;const be=w[pe];be!==void 0&&(be.update(ne.inputSource,ne.frame,h||a),be.dispatchEvent({type:ne.type,data:ne.inputSource}))}function K(){i.removeEventListener("select",q),i.removeEventListener("selectstart",q),i.removeEventListener("selectend",q),i.removeEventListener("squeeze",q),i.removeEventListener("squeezestart",q),i.removeEventListener("squeezeend",q),i.removeEventListener("end",K),i.removeEventListener("inputsourceschange",le);for(let ne=0;ne<w.length;ne++){const pe=T[ne];pe!==null&&(T[ne]=null,w[ne].disconnect(pe))}C=null,X=null,M.reset(),e.setRenderTarget(_),g=null,m=null,p=null,i=null,E=null,Xe.stop(),n.isPresenting=!1,e.setPixelRatio(P),e.setSize(O.width,O.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ne){s=ne,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ne){c=ne,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||a},this.setReferenceSpace=function(ne){h=ne},this.getBaseLayer=function(){return m!==null?m:g},this.getBinding=function(){return p},this.getFrame=function(){return y},this.getSession=function(){return i},this.setSession=async function(ne){if(i=ne,i!==null){if(_=e.getRenderTarget(),i.addEventListener("select",q),i.addEventListener("selectstart",q),i.addEventListener("selectend",q),i.addEventListener("squeeze",q),i.addEventListener("squeezestart",q),i.addEventListener("squeezeend",q),i.addEventListener("end",K),i.addEventListener("inputsourceschange",le),x.xrCompatible!==!0&&await t.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(O),i.renderState.layers===void 0){const pe={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:s};g=new XRWebGLLayer(i,t,pe),i.updateRenderState({baseLayer:g}),e.setPixelRatio(1),e.setSize(g.framebufferWidth,g.framebufferHeight,!1),E=new vi(g.framebufferWidth,g.framebufferHeight,{format:Rn,type:Ci,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil})}else{let pe=null,be=null,Se=null;x.depth&&(Se=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,pe=x.stencil?bs:xs,be=x.stencil?Ts:mr);const rt={colorFormat:t.RGBA8,depthFormat:Se,scaleFactor:s};p=new XRWebGLBinding(i,t),m=p.createProjectionLayer(rt),i.updateRenderState({layers:[m]}),e.setPixelRatio(1),e.setSize(m.textureWidth,m.textureHeight,!1),E=new vi(m.textureWidth,m.textureHeight,{format:Rn,type:Ci,depthTexture:new ah(m.textureWidth,m.textureHeight,be,void 0,void 0,void 0,void 0,void 0,void 0,pe),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:m.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(u),h=null,a=await i.requestReferenceSpace(c),Xe.setContext(i),Xe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function le(ne){for(let pe=0;pe<ne.removed.length;pe++){const be=ne.removed[pe],Se=T.indexOf(be);Se>=0&&(T[Se]=null,w[Se].disconnect(be))}for(let pe=0;pe<ne.added.length;pe++){const be=ne.added[pe];let Se=T.indexOf(be);if(Se===-1){for(let Qe=0;Qe<w.length;Qe++)if(Qe>=T.length){T.push(be),Se=Qe;break}else if(T[Qe]===null){T[Qe]=be,Se=Qe;break}if(Se===-1)break}const rt=w[Se];rt&&rt.connect(be)}}const Z=new D,me=new D;function z(ne,pe,be){Z.setFromMatrixPosition(pe.matrixWorld),me.setFromMatrixPosition(be.matrixWorld);const Se=Z.distanceTo(me),rt=pe.projectionMatrix.elements,Qe=be.projectionMatrix.elements,st=rt[14]/(rt[10]-1),nt=rt[14]/(rt[10]+1),he=(rt[9]+1)/rt[5],F=(rt[9]-1)/rt[5],we=(rt[8]-1)/rt[0],Me=(Qe[8]+1)/Qe[0],ge=st*we,Ee=st*Me,je=Se/(-we+Me),De=je*-we;if(pe.matrixWorld.decompose(ne.position,ne.quaternion,ne.scale),ne.translateX(De),ne.translateZ(je),ne.matrixWorld.compose(ne.position,ne.quaternion,ne.scale),ne.matrixWorldInverse.copy(ne.matrixWorld).invert(),rt[10]===-1)ne.projectionMatrix.copy(pe.projectionMatrix),ne.projectionMatrixInverse.copy(pe.projectionMatrixInverse);else{const U=st+je,R=nt+je,j=ge-De,oe=Ee+(Se-De),ue=he*nt/R*U,ae=F*nt/R*U;ne.projectionMatrix.makePerspective(j,oe,ue,ae,U,R),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert()}}function se(ne,pe){pe===null?ne.matrixWorld.copy(ne.matrix):ne.matrixWorld.multiplyMatrices(pe.matrixWorld,ne.matrix),ne.matrixWorldInverse.copy(ne.matrixWorld).invert()}this.updateCamera=function(ne){if(i===null)return;let pe=ne.near,be=ne.far;M.texture!==null&&(M.depthNear>0&&(pe=M.depthNear),M.depthFar>0&&(be=M.depthFar)),b.near=N.near=I.near=pe,b.far=N.far=I.far=be,(C!==b.near||X!==b.far)&&(i.updateRenderState({depthNear:b.near,depthFar:b.far}),C=b.near,X=b.far);const Se=ne.parent,rt=b.cameras;se(b,Se);for(let Qe=0;Qe<rt.length;Qe++)se(rt[Qe],Se);rt.length===2?z(b,I,N):b.projectionMatrix.copy(I.projectionMatrix),te(ne,b,Se)};function te(ne,pe,be){be===null?ne.matrix.copy(pe.matrixWorld):(ne.matrix.copy(be.matrixWorld),ne.matrix.invert(),ne.matrix.multiply(pe.matrixWorld)),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.updateMatrixWorld(!0),ne.projectionMatrix.copy(pe.projectionMatrix),ne.projectionMatrixInverse.copy(pe.projectionMatrixInverse),ne.isPerspectiveCamera&&(ne.fov=To*2*Math.atan(1/ne.projectionMatrix.elements[5]),ne.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(m===null&&g===null))return u},this.setFoveation=function(ne){u=ne,m!==null&&(m.fixedFoveation=ne),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=ne)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(b)};let ce=null;function Be(ne,pe){if(f=pe.getViewerPose(h||a),y=pe,f!==null){const be=f.views;g!==null&&(e.setRenderTargetFramebuffer(E,g.framebuffer),e.setRenderTarget(E));let Se=!1;be.length!==b.cameras.length&&(b.cameras.length=0,Se=!0);for(let Qe=0;Qe<be.length;Qe++){const st=be[Qe];let nt=null;if(g!==null)nt=g.getViewport(st);else{const F=p.getViewSubImage(m,st);nt=F.viewport,Qe===0&&(e.setRenderTargetTextures(E,F.colorTexture,m.ignoreDepthValues?void 0:F.depthStencilTexture),e.setRenderTarget(E))}let he=W[Qe];he===void 0&&(he=new fn,he.layers.enable(Qe),he.viewport=new xt,W[Qe]=he),he.matrix.fromArray(st.transform.matrix),he.matrix.decompose(he.position,he.quaternion,he.scale),he.projectionMatrix.fromArray(st.projectionMatrix),he.projectionMatrixInverse.copy(he.projectionMatrix).invert(),he.viewport.set(nt.x,nt.y,nt.width,nt.height),Qe===0&&(b.matrix.copy(he.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),Se===!0&&b.cameras.push(he)}const rt=i.enabledFeatures;if(rt&&rt.includes("depth-sensing")){const Qe=p.getDepthInformation(be[0]);Qe&&Qe.isValid&&Qe.texture&&M.init(e,Qe,i.renderState)}}for(let be=0;be<w.length;be++){const Se=T[be],rt=w[be];Se!==null&&rt!==void 0&&rt.update(Se,pe,h||a)}ce&&ce(ne,pe),pe.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:pe}),y=null}const Xe=new b_;Xe.setAnimationLoop(Be),this.setAnimationLoop=function(ne){ce=ne},this.dispose=function(){}}}const ss=new ii,tT=new et;function nT(r,e){function t(x,_){x.matrixAutoUpdate===!0&&x.updateMatrix(),_.value.copy(x.matrix)}function n(x,_){_.color.getRGB(x.fogColor.value,E_(r)),_.isFog?(x.fogNear.value=_.near,x.fogFar.value=_.far):_.isFogExp2&&(x.fogDensity.value=_.density)}function i(x,_,E,w,T){_.isMeshBasicMaterial||_.isMeshLambertMaterial?s(x,_):_.isMeshToonMaterial?(s(x,_),p(x,_)):_.isMeshPhongMaterial?(s(x,_),f(x,_)):_.isMeshStandardMaterial?(s(x,_),m(x,_),_.isMeshPhysicalMaterial&&g(x,_,T)):_.isMeshMatcapMaterial?(s(x,_),y(x,_)):_.isMeshDepthMaterial?s(x,_):_.isMeshDistanceMaterial?(s(x,_),M(x,_)):_.isMeshNormalMaterial?s(x,_):_.isLineBasicMaterial?(a(x,_),_.isLineDashedMaterial&&c(x,_)):_.isPointsMaterial?u(x,_,E,w):_.isSpriteMaterial?h(x,_):_.isShadowMaterial?(x.color.value.copy(_.color),x.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function s(x,_){x.opacity.value=_.opacity,_.color&&x.diffuse.value.copy(_.color),_.emissive&&x.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(x.map.value=_.map,t(_.map,x.mapTransform)),_.alphaMap&&(x.alphaMap.value=_.alphaMap,t(_.alphaMap,x.alphaMapTransform)),_.bumpMap&&(x.bumpMap.value=_.bumpMap,t(_.bumpMap,x.bumpMapTransform),x.bumpScale.value=_.bumpScale,_.side===Pn&&(x.bumpScale.value*=-1)),_.normalMap&&(x.normalMap.value=_.normalMap,t(_.normalMap,x.normalMapTransform),x.normalScale.value.copy(_.normalScale),_.side===Pn&&x.normalScale.value.negate()),_.displacementMap&&(x.displacementMap.value=_.displacementMap,t(_.displacementMap,x.displacementMapTransform),x.displacementScale.value=_.displacementScale,x.displacementBias.value=_.displacementBias),_.emissiveMap&&(x.emissiveMap.value=_.emissiveMap,t(_.emissiveMap,x.emissiveMapTransform)),_.specularMap&&(x.specularMap.value=_.specularMap,t(_.specularMap,x.specularMapTransform)),_.alphaTest>0&&(x.alphaTest.value=_.alphaTest);const E=e.get(_),w=E.envMap,T=E.envMapRotation;w&&(x.envMap.value=w,ss.copy(T),ss.x*=-1,ss.y*=-1,ss.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(ss.y*=-1,ss.z*=-1),x.envMapRotation.value.setFromMatrix4(tT.makeRotationFromEuler(ss)),x.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=_.reflectivity,x.ior.value=_.ior,x.refractionRatio.value=_.refractionRatio),_.lightMap&&(x.lightMap.value=_.lightMap,x.lightMapIntensity.value=_.lightMapIntensity,t(_.lightMap,x.lightMapTransform)),_.aoMap&&(x.aoMap.value=_.aoMap,x.aoMapIntensity.value=_.aoMapIntensity,t(_.aoMap,x.aoMapTransform))}function a(x,_){x.diffuse.value.copy(_.color),x.opacity.value=_.opacity,_.map&&(x.map.value=_.map,t(_.map,x.mapTransform))}function c(x,_){x.dashSize.value=_.dashSize,x.totalSize.value=_.dashSize+_.gapSize,x.scale.value=_.scale}function u(x,_,E,w){x.diffuse.value.copy(_.color),x.opacity.value=_.opacity,x.size.value=_.size*E,x.scale.value=w*.5,_.map&&(x.map.value=_.map,t(_.map,x.uvTransform)),_.alphaMap&&(x.alphaMap.value=_.alphaMap,t(_.alphaMap,x.alphaMapTransform)),_.alphaTest>0&&(x.alphaTest.value=_.alphaTest)}function h(x,_){x.diffuse.value.copy(_.color),x.opacity.value=_.opacity,x.rotation.value=_.rotation,_.map&&(x.map.value=_.map,t(_.map,x.mapTransform)),_.alphaMap&&(x.alphaMap.value=_.alphaMap,t(_.alphaMap,x.alphaMapTransform)),_.alphaTest>0&&(x.alphaTest.value=_.alphaTest)}function f(x,_){x.specular.value.copy(_.specular),x.shininess.value=Math.max(_.shininess,1e-4)}function p(x,_){_.gradientMap&&(x.gradientMap.value=_.gradientMap)}function m(x,_){x.metalness.value=_.metalness,_.metalnessMap&&(x.metalnessMap.value=_.metalnessMap,t(_.metalnessMap,x.metalnessMapTransform)),x.roughness.value=_.roughness,_.roughnessMap&&(x.roughnessMap.value=_.roughnessMap,t(_.roughnessMap,x.roughnessMapTransform)),_.envMap&&(x.envMapIntensity.value=_.envMapIntensity)}function g(x,_,E){x.ior.value=_.ior,_.sheen>0&&(x.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),x.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(x.sheenColorMap.value=_.sheenColorMap,t(_.sheenColorMap,x.sheenColorMapTransform)),_.sheenRoughnessMap&&(x.sheenRoughnessMap.value=_.sheenRoughnessMap,t(_.sheenRoughnessMap,x.sheenRoughnessMapTransform))),_.clearcoat>0&&(x.clearcoat.value=_.clearcoat,x.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(x.clearcoatMap.value=_.clearcoatMap,t(_.clearcoatMap,x.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,t(_.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(x.clearcoatNormalMap.value=_.clearcoatNormalMap,t(_.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Pn&&x.clearcoatNormalScale.value.negate())),_.dispersion>0&&(x.dispersion.value=_.dispersion),_.iridescence>0&&(x.iridescence.value=_.iridescence,x.iridescenceIOR.value=_.iridescenceIOR,x.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(x.iridescenceMap.value=_.iridescenceMap,t(_.iridescenceMap,x.iridescenceMapTransform)),_.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=_.iridescenceThicknessMap,t(_.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),_.transmission>0&&(x.transmission.value=_.transmission,x.transmissionSamplerMap.value=E.texture,x.transmissionSamplerSize.value.set(E.width,E.height),_.transmissionMap&&(x.transmissionMap.value=_.transmissionMap,t(_.transmissionMap,x.transmissionMapTransform)),x.thickness.value=_.thickness,_.thicknessMap&&(x.thicknessMap.value=_.thicknessMap,t(_.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=_.attenuationDistance,x.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(x.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(x.anisotropyMap.value=_.anisotropyMap,t(_.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=_.specularIntensity,x.specularColor.value.copy(_.specularColor),_.specularColorMap&&(x.specularColorMap.value=_.specularColorMap,t(_.specularColorMap,x.specularColorMapTransform)),_.specularIntensityMap&&(x.specularIntensityMap.value=_.specularIntensityMap,t(_.specularIntensityMap,x.specularIntensityMapTransform))}function y(x,_){_.matcap&&(x.matcap.value=_.matcap)}function M(x,_){const E=e.get(_).light;x.referencePosition.value.setFromMatrixPosition(E.matrixWorld),x.nearDistance.value=E.shadow.camera.near,x.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function iT(r,e,t,n){let i={},s={},a=[];const c=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function u(E,w){const T=w.program;n.uniformBlockBinding(E,T)}function h(E,w){let T=i[E.id];T===void 0&&(y(E),T=f(E),i[E.id]=T,E.addEventListener("dispose",x));const O=w.program;n.updateUBOMapping(E,O);const P=e.render.frame;s[E.id]!==P&&(m(E),s[E.id]=P)}function f(E){const w=p();E.__bindingPointIndex=w;const T=r.createBuffer(),O=E.__size,P=E.usage;return r.bindBuffer(r.UNIFORM_BUFFER,T),r.bufferData(r.UNIFORM_BUFFER,O,P),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,w,T),T}function p(){for(let E=0;E<c;E++)if(a.indexOf(E)===-1)return a.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function m(E){const w=i[E.id],T=E.uniforms,O=E.__cache;r.bindBuffer(r.UNIFORM_BUFFER,w);for(let P=0,I=T.length;P<I;P++){const N=Array.isArray(T[P])?T[P]:[T[P]];for(let W=0,b=N.length;W<b;W++){const C=N[W];if(g(C,P,W,O)===!0){const X=C.__offset,q=Array.isArray(C.value)?C.value:[C.value];let K=0;for(let le=0;le<q.length;le++){const Z=q[le],me=M(Z);typeof Z=="number"||typeof Z=="boolean"?(C.__data[0]=Z,r.bufferSubData(r.UNIFORM_BUFFER,X+K,C.__data)):Z.isMatrix3?(C.__data[0]=Z.elements[0],C.__data[1]=Z.elements[1],C.__data[2]=Z.elements[2],C.__data[3]=0,C.__data[4]=Z.elements[3],C.__data[5]=Z.elements[4],C.__data[6]=Z.elements[5],C.__data[7]=0,C.__data[8]=Z.elements[6],C.__data[9]=Z.elements[7],C.__data[10]=Z.elements[8],C.__data[11]=0):(Z.toArray(C.__data,K),K+=me.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,X,C.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function g(E,w,T,O){const P=E.value,I=w+"_"+T;if(O[I]===void 0)return typeof P=="number"||typeof P=="boolean"?O[I]=P:O[I]=P.clone(),!0;{const N=O[I];if(typeof P=="number"||typeof P=="boolean"){if(N!==P)return O[I]=P,!0}else if(N.equals(P)===!1)return N.copy(P),!0}return!1}function y(E){const w=E.uniforms;let T=0;const O=16;for(let I=0,N=w.length;I<N;I++){const W=Array.isArray(w[I])?w[I]:[w[I]];for(let b=0,C=W.length;b<C;b++){const X=W[b],q=Array.isArray(X.value)?X.value:[X.value];for(let K=0,le=q.length;K<le;K++){const Z=q[K],me=M(Z),z=T%O,se=z%me.boundary,te=z+se;T+=se,te!==0&&O-te<me.storage&&(T+=O-te),X.__data=new Float32Array(me.storage/Float32Array.BYTES_PER_ELEMENT),X.__offset=T,T+=me.storage}}}const P=T%O;return P>0&&(T+=O-P),E.__size=T,E.__cache={},this}function M(E){const w={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(w.boundary=4,w.storage=4):E.isVector2?(w.boundary=8,w.storage=8):E.isVector3||E.isColor?(w.boundary=16,w.storage=12):E.isVector4?(w.boundary=16,w.storage=16):E.isMatrix3?(w.boundary=48,w.storage=48):E.isMatrix4?(w.boundary=64,w.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),w}function x(E){const w=E.target;w.removeEventListener("dispose",x);const T=a.indexOf(w.__bindingPointIndex);a.splice(T,1),r.deleteBuffer(i[w.id]),delete i[w.id],delete s[w.id]}function _(){for(const E in i)r.deleteBuffer(i[E]);a=[],i={},s={}}return{bind:u,update:h,dispose:_}}class U_{constructor(e={}){const{canvas:t=x_(),context:n=null,depth:i=!0,stencil:s=!1,alpha:a=!1,antialias:c=!1,premultipliedAlpha:u=!0,preserveDrawingBuffer:h=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:p=!1}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=a;const g=new Uint32Array(4),y=new Int32Array(4);let M=null,x=null;const _=[],E=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=mi,this.toneMapping=bi,this.toneMappingExposure=1;const w=this;let T=!1,O=0,P=0,I=null,N=-1,W=null;const b=new xt,C=new xt;let X=null;const q=new Pe(0);let K=0,le=t.width,Z=t.height,me=1,z=null,se=null;const te=new xt(0,0,le,Z),ce=new xt(0,0,le,Z);let Be=!1;const Xe=new tl;let ne=!1,pe=!1;const be=new et,Se=new et,rt=new D,Qe=new xt,st={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let nt=!1;function he(){return I===null?me:1}let F=n;function we(L,V){return t.getContext(L,V)}try{const L={alpha:!0,depth:i,stencil:s,antialias:c,premultipliedAlpha:u,preserveDrawingBuffer:h,powerPreference:f,failIfMajorPerformanceCaveat:p};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ja}`),t.addEventListener("webglcontextlost",de,!1),t.addEventListener("webglcontextrestored",Ie,!1),t.addEventListener("webglcontextcreationerror",Ne,!1),F===null){const V="webgl2";if(F=we(V,L),F===null)throw we(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(L){throw console.error("THREE.WebGLRenderer: "+L.message),L}let Me,ge,Ee,je,De,U,R,j,oe,ue,ae,Ye,Te,Oe,St,ve,Fe,ot,at,ze,Mt,ut,Nt,H;function Ue(){Me=new cE(F),Me.init(),ut=new L_(F,Me),ge=new iE(F,Me,e,ut),Ee=new GA(F),ge.reverseDepthBuffer&&Ee.buffers.depth.setReversed(!0),je=new fE(F),De=new PA,U=new jA(F,Me,Ee,De,ge,ut,je),R=new sE(w),j=new lE(w),oe=new yM(F),Nt=new tE(F,oe),ue=new uE(F,oe,je,Nt),ae=new pE(F,ue,oe,je),at=new dE(F,ge,U),ve=new rE(De),Ye=new RA(w,R,j,Me,ge,Nt,ve),Te=new nT(w,De),Oe=new LA,St=new BA(Me),ot=new eE(w,R,j,Ee,ae,m,u),Fe=new HA(w,ae,ge),H=new iT(F,je,ge,Ee),ze=new nE(F,Me,je),Mt=new hE(F,Me,je),je.programs=Ye.programs,w.capabilities=ge,w.extensions=Me,w.properties=De,w.renderLists=Oe,w.shadowMap=Fe,w.state=Ee,w.info=je}Ue();const ie=new eT(w,F);this.xr=ie,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const L=Me.get("WEBGL_lose_context");L&&L.loseContext()},this.forceContextRestore=function(){const L=Me.get("WEBGL_lose_context");L&&L.restoreContext()},this.getPixelRatio=function(){return me},this.setPixelRatio=function(L){L!==void 0&&(me=L,this.setSize(le,Z,!1))},this.getSize=function(L){return L.set(le,Z)},this.setSize=function(L,V,Q=!0){if(ie.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}le=L,Z=V,t.width=Math.floor(L*me),t.height=Math.floor(V*me),Q===!0&&(t.style.width=L+"px",t.style.height=V+"px"),this.setViewport(0,0,L,V)},this.getDrawingBufferSize=function(L){return L.set(le*me,Z*me).floor()},this.setDrawingBufferSize=function(L,V,Q){le=L,Z=V,me=Q,t.width=Math.floor(L*Q),t.height=Math.floor(V*Q),this.setViewport(0,0,L,V)},this.getCurrentViewport=function(L){return L.copy(b)},this.getViewport=function(L){return L.copy(te)},this.setViewport=function(L,V,Q,$){L.isVector4?te.set(L.x,L.y,L.z,L.w):te.set(L,V,Q,$),Ee.viewport(b.copy(te).multiplyScalar(me).round())},this.getScissor=function(L){return L.copy(ce)},this.setScissor=function(L,V,Q,$){L.isVector4?ce.set(L.x,L.y,L.z,L.w):ce.set(L,V,Q,$),Ee.scissor(C.copy(ce).multiplyScalar(me).round())},this.getScissorTest=function(){return Be},this.setScissorTest=function(L){Ee.setScissorTest(Be=L)},this.setOpaqueSort=function(L){z=L},this.setTransparentSort=function(L){se=L},this.getClearColor=function(L){return L.copy(ot.getClearColor())},this.setClearColor=function(){ot.setClearColor.apply(ot,arguments)},this.getClearAlpha=function(){return ot.getClearAlpha()},this.setClearAlpha=function(){ot.setClearAlpha.apply(ot,arguments)},this.clear=function(L=!0,V=!0,Q=!0){let $=0;if(L){let Y=!1;if(I!==null){const xe=I.texture.format;Y=xe===ih||xe===nh||xe===Ka}if(Y){const xe=I.texture.type,Le=xe===Ci||xe===mr||xe===Ao||xe===Ts||xe===$u||xe===eh,ke=ot.getClearColor(),He=ot.getClearAlpha(),tt=ke.r,it=ke.g,qe=ke.b;Le?(g[0]=tt,g[1]=it,g[2]=qe,g[3]=He,F.clearBufferuiv(F.COLOR,0,g)):(y[0]=tt,y[1]=it,y[2]=qe,y[3]=He,F.clearBufferiv(F.COLOR,0,y))}else $|=F.COLOR_BUFFER_BIT}V&&($|=F.DEPTH_BUFFER_BIT,F.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),Q&&($|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",de,!1),t.removeEventListener("webglcontextrestored",Ie,!1),t.removeEventListener("webglcontextcreationerror",Ne,!1),Oe.dispose(),St.dispose(),De.dispose(),R.dispose(),j.dispose(),ae.dispose(),Nt.dispose(),H.dispose(),Ye.dispose(),ie.dispose(),ie.removeEventListener("sessionstart",cl),ie.removeEventListener("sessionend",ul),Ki.stop()};function de(L){L.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function Ie(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const L=je.autoReset,V=Fe.enabled,Q=Fe.autoUpdate,$=Fe.needsUpdate,Y=Fe.type;Ue(),je.autoReset=L,Fe.enabled=V,Fe.autoUpdate=Q,Fe.needsUpdate=$,Fe.type=Y}function Ne(L){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",L.statusMessage)}function wt(L){const V=L.target;V.removeEventListener("dispose",wt),Gt(V)}function Gt(L){Sn(L),De.remove(L)}function Sn(L){const V=De.get(L).programs;V!==void 0&&(V.forEach(function(Q){Ye.releaseProgram(Q)}),L.isShaderMaterial&&Ye.releaseShaderCache(L))}this.renderBufferDirect=function(L,V,Q,$,Y,xe){V===null&&(V=st);const Le=Y.isMesh&&Y.matrixWorld.determinant()<0,ke=Ph(L,V,Q,$,Y);Ee.setMaterial($,Le);let He=Q.index,tt=1;if($.wireframe===!0){if(He=ue.getWireframeAttribute(Q),He===void 0)return;tt=2}const it=Q.drawRange,qe=Q.attributes.position;let Tt=it.start*tt,Rt=(it.start+it.count)*tt;xe!==null&&(Tt=Math.max(Tt,xe.start*tt),Rt=Math.min(Rt,(xe.start+xe.count)*tt)),He!==null?(Tt=Math.max(Tt,0),Rt=Math.min(Rt,He.count)):qe!=null&&(Tt=Math.max(Tt,0),Rt=Math.min(Rt,qe.count));const Ut=Rt-Tt;if(Ut<0||Ut===1/0)return;Nt.setup(Y,$,ke,Q,He);let _t,Je=ze;if(He!==null&&(_t=oe.get(He),Je=Mt,Je.setIndex(_t)),Y.isMesh)$.wireframe===!0?(Ee.setLineWidth($.wireframeLinewidth*he()),Je.setMode(F.LINES)):Je.setMode(F.TRIANGLES);else if(Y.isLine){let Ge=$.linewidth;Ge===void 0&&(Ge=1),Ee.setLineWidth(Ge*he()),Y.isLineSegments?Je.setMode(F.LINES):Y.isLineLoop?Je.setMode(F.LINE_LOOP):Je.setMode(F.LINE_STRIP)}else Y.isPoints?Je.setMode(F.POINTS):Y.isSprite&&Je.setMode(F.TRIANGLES);if(Y.isBatchedMesh)if(Y._multiDrawInstances!==null)Je.renderMultiDrawInstances(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount,Y._multiDrawInstances);else if(Me.get("WEBGL_multi_draw"))Je.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{const Ge=Y._multiDrawStarts,At=Y._multiDrawCounts,ct=Y._multiDrawCount,rn=He?oe.get(He).bytesPerElement:1,Zn=De.get($).currentProgram.getUniforms();for(let Ft=0;Ft<ct;Ft++)Zn.setValue(F,"_gl_DrawID",Ft),Je.render(Ge[Ft]/rn,At[Ft])}else if(Y.isInstancedMesh)Je.renderInstances(Tt,Ut,Y.count);else if(Q.isInstancedBufferGeometry){const Ge=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,At=Math.min(Q.instanceCount,Ge);Je.renderInstances(Tt,Ut,At)}else Je.render(Tt,Ut)};function Et(L,V,Q){L.transparent===!0&&L.side===Vi&&L.forceSinglePass===!1?(L.side=Pn,L.needsUpdate=!0,Os(L,V,Q),L.side=Zi,L.needsUpdate=!0,Os(L,V,Q),L.side=Vi):Os(L,V,Q)}this.compile=function(L,V,Q=null){Q===null&&(Q=L),x=St.get(Q),x.init(V),E.push(x),Q.traverseVisible(function(Y){Y.isLight&&Y.layers.test(V.layers)&&(x.pushLight(Y),Y.castShadow&&x.pushShadow(Y))}),L!==Q&&L.traverseVisible(function(Y){Y.isLight&&Y.layers.test(V.layers)&&(x.pushLight(Y),Y.castShadow&&x.pushShadow(Y))}),x.setupLights();const $=new Set;return L.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;const xe=Y.material;if(xe)if(Array.isArray(xe))for(let Le=0;Le<xe.length;Le++){const ke=xe[Le];Et(ke,Q,Y),$.add(ke)}else Et(xe,Q,Y),$.add(xe)}),E.pop(),x=null,$},this.compileAsync=function(L,V,Q=null){const $=this.compile(L,V,Q);return new Promise(Y=>{function xe(){if($.forEach(function(Le){De.get(Le).currentProgram.isReady()&&$.delete(Le)}),$.size===0){Y(L);return}setTimeout(xe,10)}Me.get("KHR_parallel_shader_compile")!==null?xe():setTimeout(xe,10)})};let gn=null;function si(L){gn&&gn(L)}function cl(){Ki.stop()}function ul(){Ki.start()}const Ki=new b_;Ki.setAnimationLoop(si),typeof self<"u"&&Ki.setContext(self),this.setAnimationLoop=function(L){gn=L,ie.setAnimationLoop(L),L===null?Ki.stop():Ki.start()},ie.addEventListener("sessionstart",cl),ie.addEventListener("sessionend",ul),this.render=function(L,V){if(V!==void 0&&V.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),ie.enabled===!0&&ie.isPresenting===!0&&(ie.cameraAutoUpdate===!0&&ie.updateCamera(V),V=ie.getCamera()),L.isScene===!0&&L.onBeforeRender(w,L,V,I),x=St.get(L,E.length),x.init(V),E.push(x),Se.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),Xe.setFromProjectionMatrix(Se),pe=this.localClippingEnabled,ne=ve.init(this.clippingPlanes,pe),M=Oe.get(L,_.length),M.init(),_.push(M),ie.enabled===!0&&ie.isPresenting===!0){const xe=w.xr.getDepthSensingMesh();xe!==null&&Us(xe,V,-1/0,w.sortObjects)}Us(L,V,0,w.sortObjects),M.finish(),w.sortObjects===!0&&M.sort(z,se),nt=ie.enabled===!1||ie.isPresenting===!1||ie.hasDepthSensing()===!1,nt&&ot.addToRenderList(M,L),this.info.render.frame++,ne===!0&&ve.beginShadows();const Q=x.state.shadowsArray;Fe.render(Q,L,V),ne===!0&&ve.endShadows(),this.info.autoReset===!0&&this.info.reset();const $=M.opaque,Y=M.transmissive;if(x.setupLights(),V.isArrayCamera){const xe=V.cameras;if(Y.length>0)for(let Le=0,ke=xe.length;Le<ke;Le++){const He=xe[Le];hl($,Y,L,He)}nt&&ot.render(L);for(let Le=0,ke=xe.length;Le<ke;Le++){const He=xe[Le];Ns(M,L,He,He.viewport)}}else Y.length>0&&hl($,Y,L,V),nt&&ot.render(L),Ns(M,L,V);I!==null&&(U.updateMultisampleRenderTarget(I),U.updateRenderTargetMipmap(I)),L.isScene===!0&&L.onAfterRender(w,L,V),Nt.resetDefaultState(),N=-1,W=null,E.pop(),E.length>0?(x=E[E.length-1],ne===!0&&ve.setGlobalState(w.clippingPlanes,x.state.camera)):x=null,_.pop(),_.length>0?M=_[_.length-1]:M=null};function Us(L,V,Q,$){if(L.visible===!1)return;if(L.layers.test(V.layers)){if(L.isGroup)Q=L.renderOrder;else if(L.isLOD)L.autoUpdate===!0&&L.update(V);else if(L.isLight)x.pushLight(L),L.castShadow&&x.pushShadow(L);else if(L.isSprite){if(!L.frustumCulled||Xe.intersectsSprite(L)){$&&Qe.setFromMatrixPosition(L.matrixWorld).applyMatrix4(Se);const Le=ae.update(L),ke=L.material;ke.visible&&M.push(L,Le,ke,Q,Qe.z,null)}}else if((L.isMesh||L.isLine||L.isPoints)&&(!L.frustumCulled||Xe.intersectsObject(L))){const Le=ae.update(L),ke=L.material;if($&&(L.boundingSphere!==void 0?(L.boundingSphere===null&&L.computeBoundingSphere(),Qe.copy(L.boundingSphere.center)):(Le.boundingSphere===null&&Le.computeBoundingSphere(),Qe.copy(Le.boundingSphere.center)),Qe.applyMatrix4(L.matrixWorld).applyMatrix4(Se)),Array.isArray(ke)){const He=Le.groups;for(let tt=0,it=He.length;tt<it;tt++){const qe=He[tt],Tt=ke[qe.materialIndex];Tt&&Tt.visible&&M.push(L,Le,Tt,Q,Qe.z,qe)}}else ke.visible&&M.push(L,Le,ke,Q,Qe.z,null)}}const xe=L.children;for(let Le=0,ke=xe.length;Le<ke;Le++)Us(xe[Le],V,Q,$)}function Ns(L,V,Q,$){const Y=L.opaque,xe=L.transmissive,Le=L.transparent;x.setupLightsView(Q),ne===!0&&ve.setGlobalState(w.clippingPlanes,Q),$&&Ee.viewport(b.copy($)),Y.length>0&&Ii(Y,V,Q),xe.length>0&&Ii(xe,V,Q),Le.length>0&&Ii(Le,V,Q),Ee.buffers.depth.setTest(!0),Ee.buffers.depth.setMask(!0),Ee.buffers.color.setMask(!0),Ee.setPolygonOffset(!1)}function hl(L,V,Q,$){if((Q.isScene===!0?Q.overrideMaterial:null)!==null)return;x.state.transmissionRenderTarget[$.id]===void 0&&(x.state.transmissionRenderTarget[$.id]=new vi(1,1,{generateMipmaps:!0,type:Me.has("EXT_color_buffer_half_float")||Me.has("EXT_color_buffer_float")?Rs:Ci,minFilter:Wi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Dt.workingColorSpace}));const xe=x.state.transmissionRenderTarget[$.id],Le=$.viewport||b;xe.setSize(Le.z,Le.w);const ke=w.getRenderTarget();w.setRenderTarget(xe),w.getClearColor(q),K=w.getClearAlpha(),K<1&&w.setClearColor(16777215,.5),w.clear(),nt&&ot.render(Q);const He=w.toneMapping;w.toneMapping=bi;const tt=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),x.setupLightsView($),ne===!0&&ve.setGlobalState(w.clippingPlanes,$),Ii(L,Q,$),U.updateMultisampleRenderTarget(xe),U.updateRenderTargetMipmap(xe),Me.has("WEBGL_multisampled_render_to_texture")===!1){let it=!1;for(let qe=0,Tt=V.length;qe<Tt;qe++){const Rt=V[qe],Ut=Rt.object,_t=Rt.geometry,Je=Rt.material,Ge=Rt.group;if(Je.side===Vi&&Ut.layers.test($.layers)){const At=Je.side;Je.side=Pn,Je.needsUpdate=!0,fl(Ut,Q,$,_t,Je,Ge),Je.side=At,Je.needsUpdate=!0,it=!0}}it===!0&&(U.updateMultisampleRenderTarget(xe),U.updateRenderTargetMipmap(xe))}w.setRenderTarget(ke),w.setClearColor(q,K),tt!==void 0&&($.viewport=tt),w.toneMapping=He}function Ii(L,V,Q){const $=V.isScene===!0?V.overrideMaterial:null;for(let Y=0,xe=L.length;Y<xe;Y++){const Le=L[Y],ke=Le.object,He=Le.geometry,tt=$===null?Le.material:$,it=Le.group;ke.layers.test(Q.layers)&&fl(ke,V,Q,He,tt,it)}}function fl(L,V,Q,$,Y,xe){L.onBeforeRender(w,V,Q,$,Y,xe),L.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,L.matrixWorld),L.normalMatrix.getNormalMatrix(L.modelViewMatrix),Y.onBeforeRender(w,V,Q,$,L,xe),Y.transparent===!0&&Y.side===Vi&&Y.forceSinglePass===!1?(Y.side=Pn,Y.needsUpdate=!0,w.renderBufferDirect(Q,V,$,Y,L,xe),Y.side=Zi,Y.needsUpdate=!0,w.renderBufferDirect(Q,V,$,Y,L,xe),Y.side=Vi):w.renderBufferDirect(Q,V,$,Y,L,xe),L.onAfterRender(w,V,Q,$,Y,xe)}function Os(L,V,Q){V.isScene!==!0&&(V=st);const $=De.get(L),Y=x.state.lights,xe=x.state.shadowsArray,Le=Y.state.version,ke=Ye.getParameters(L,Y.state,xe,V,Q),He=Ye.getProgramCacheKey(ke);let tt=$.programs;$.environment=L.isMeshStandardMaterial?V.environment:null,$.fog=V.fog,$.envMap=(L.isMeshStandardMaterial?j:R).get(L.envMap||$.environment),$.envMapRotation=$.environment!==null&&L.envMap===null?V.environmentRotation:L.envMapRotation,tt===void 0&&(L.addEventListener("dispose",wt),tt=new Map,$.programs=tt);let it=tt.get(He);if(it!==void 0){if($.currentProgram===it&&$.lightsStateVersion===Le)return pl(L,ke),it}else ke.uniforms=Ye.getUniforms(L),L.onBeforeCompile(ke,w),it=Ye.acquireProgram(ke,He),tt.set(He,it),$.uniforms=ke.uniforms;const qe=$.uniforms;return(!L.isShaderMaterial&&!L.isRawShaderMaterial||L.clipping===!0)&&(qe.clippingPlanes=ve.uniform),pl(L,ke),$.needsLights=Lh(L),$.lightsStateVersion=Le,$.needsLights&&(qe.ambientLightColor.value=Y.state.ambient,qe.lightProbe.value=Y.state.probe,qe.directionalLights.value=Y.state.directional,qe.directionalLightShadows.value=Y.state.directionalShadow,qe.spotLights.value=Y.state.spot,qe.spotLightShadows.value=Y.state.spotShadow,qe.rectAreaLights.value=Y.state.rectArea,qe.ltc_1.value=Y.state.rectAreaLTC1,qe.ltc_2.value=Y.state.rectAreaLTC2,qe.pointLights.value=Y.state.point,qe.pointLightShadows.value=Y.state.pointShadow,qe.hemisphereLights.value=Y.state.hemi,qe.directionalShadowMap.value=Y.state.directionalShadowMap,qe.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,qe.spotShadowMap.value=Y.state.spotShadowMap,qe.spotLightMatrix.value=Y.state.spotLightMatrix,qe.spotLightMap.value=Y.state.spotLightMap,qe.pointShadowMap.value=Y.state.pointShadowMap,qe.pointShadowMatrix.value=Y.state.pointShadowMatrix),$.currentProgram=it,$.uniformsList=null,it}function dl(L){if(L.uniformsList===null){const V=L.currentProgram.getUniforms();L.uniformsList=ou.seqWithValue(V.seq,L.uniforms)}return L.uniformsList}function pl(L,V){const Q=De.get(L);Q.outputColorSpace=V.outputColorSpace,Q.batching=V.batching,Q.batchingColor=V.batchingColor,Q.instancing=V.instancing,Q.instancingColor=V.instancingColor,Q.instancingMorph=V.instancingMorph,Q.skinning=V.skinning,Q.morphTargets=V.morphTargets,Q.morphNormals=V.morphNormals,Q.morphColors=V.morphColors,Q.morphTargetsCount=V.morphTargetsCount,Q.numClippingPlanes=V.numClippingPlanes,Q.numIntersection=V.numClipIntersection,Q.vertexAlphas=V.vertexAlphas,Q.vertexTangents=V.vertexTangents,Q.toneMapping=V.toneMapping}function Ph(L,V,Q,$,Y){V.isScene!==!0&&(V=st),U.resetTextureUnits();const xe=V.fog,Le=$.isMeshStandardMaterial?V.environment:null,ke=I===null?w.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:vr,He=($.isMeshStandardMaterial?j:R).get($.envMap||Le),tt=$.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,it=!!Q.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),qe=!!Q.morphAttributes.position,Tt=!!Q.morphAttributes.normal,Rt=!!Q.morphAttributes.color;let Ut=bi;$.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(Ut=w.toneMapping);const _t=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,Je=_t!==void 0?_t.length:0,Ge=De.get($),At=x.state.lights;if(ne===!0&&(pe===!0||L!==W)){const Ln=L===W&&$.id===N;ve.setState($,L,Ln)}let ct=!1;$.version===Ge.__version?(Ge.needsLights&&Ge.lightsStateVersion!==At.state.version||Ge.outputColorSpace!==ke||Y.isBatchedMesh&&Ge.batching===!1||!Y.isBatchedMesh&&Ge.batching===!0||Y.isBatchedMesh&&Ge.batchingColor===!0&&Y.colorTexture===null||Y.isBatchedMesh&&Ge.batchingColor===!1&&Y.colorTexture!==null||Y.isInstancedMesh&&Ge.instancing===!1||!Y.isInstancedMesh&&Ge.instancing===!0||Y.isSkinnedMesh&&Ge.skinning===!1||!Y.isSkinnedMesh&&Ge.skinning===!0||Y.isInstancedMesh&&Ge.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&Ge.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&Ge.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&Ge.instancingMorph===!1&&Y.morphTexture!==null||Ge.envMap!==He||$.fog===!0&&Ge.fog!==xe||Ge.numClippingPlanes!==void 0&&(Ge.numClippingPlanes!==ve.numPlanes||Ge.numIntersection!==ve.numIntersection)||Ge.vertexAlphas!==tt||Ge.vertexTangents!==it||Ge.morphTargets!==qe||Ge.morphNormals!==Tt||Ge.morphColors!==Rt||Ge.toneMapping!==Ut||Ge.morphTargetsCount!==Je)&&(ct=!0):(ct=!0,Ge.__version=$.version);let rn=Ge.currentProgram;ct===!0&&(rn=Os($,V,Y));let Zn=!1,Ft=!1,_r=!1;const Ht=rn.getUniforms(),_i=Ge.uniforms;if(Ee.useProgram(rn.program)&&(Zn=!0,Ft=!0,_r=!0),$.id!==N&&(N=$.id,Ft=!0),Zn||W!==L){ge.reverseDepthBuffer?(be.copy(L.projectionMatrix),GS(be),WS(be),Ht.setValue(F,"projectionMatrix",be)):Ht.setValue(F,"projectionMatrix",L.projectionMatrix),Ht.setValue(F,"viewMatrix",L.matrixWorldInverse);const Ln=Ht.map.cameraPosition;Ln!==void 0&&Ln.setValue(F,rt.setFromMatrixPosition(L.matrixWorld)),ge.logarithmicDepthBuffer&&Ht.setValue(F,"logDepthBufFC",2/(Math.log(L.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&Ht.setValue(F,"isOrthographic",L.isOrthographicCamera===!0),W!==L&&(W=L,Ft=!0,_r=!0)}if(Y.isSkinnedMesh){Ht.setOptional(F,Y,"bindMatrix"),Ht.setOptional(F,Y,"bindMatrixInverse");const Ln=Y.skeleton;Ln&&(Ln.boneTexture===null&&Ln.computeBoneTexture(),Ht.setValue(F,"boneTexture",Ln.boneTexture,U))}Y.isBatchedMesh&&(Ht.setOptional(F,Y,"batchingTexture"),Ht.setValue(F,"batchingTexture",Y._matricesTexture,U),Ht.setOptional(F,Y,"batchingIdTexture"),Ht.setValue(F,"batchingIdTexture",Y._indirectTexture,U),Ht.setOptional(F,Y,"batchingColorTexture"),Y._colorsTexture!==null&&Ht.setValue(F,"batchingColorTexture",Y._colorsTexture,U));const yr=Q.morphAttributes;if((yr.position!==void 0||yr.normal!==void 0||yr.color!==void 0)&&at.update(Y,Q,rn),(Ft||Ge.receiveShadow!==Y.receiveShadow)&&(Ge.receiveShadow=Y.receiveShadow,Ht.setValue(F,"receiveShadow",Y.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(_i.envMap.value=He,_i.flipEnvMap.value=He.isCubeTexture&&He.isRenderTargetTexture===!1?-1:1),$.isMeshStandardMaterial&&$.envMap===null&&V.environment!==null&&(_i.envMapIntensity.value=V.environmentIntensity),Ft&&(Ht.setValue(F,"toneMappingExposure",w.toneMappingExposure),Ge.needsLights&&Ih(_i,_r),xe&&$.fog===!0&&Te.refreshFogUniforms(_i,xe),Te.refreshMaterialUniforms(_i,$,me,Z,x.state.transmissionRenderTarget[L.id]),ou.upload(F,dl(Ge),_i,U)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(ou.upload(F,dl(Ge),_i,U),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&Ht.setValue(F,"center",Y.center),Ht.setValue(F,"modelViewMatrix",Y.modelViewMatrix),Ht.setValue(F,"normalMatrix",Y.normalMatrix),Ht.setValue(F,"modelMatrix",Y.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){const Ln=$.uniformsGroups;for(let Dn=0,Dh=Ln.length;Dn<Dh;Dn++){const ml=Ln[Dn];H.update(ml,rn),H.bind(ml,rn)}}return rn}function Ih(L,V){L.ambientLightColor.needsUpdate=V,L.lightProbe.needsUpdate=V,L.directionalLights.needsUpdate=V,L.directionalLightShadows.needsUpdate=V,L.pointLights.needsUpdate=V,L.pointLightShadows.needsUpdate=V,L.spotLights.needsUpdate=V,L.spotLightShadows.needsUpdate=V,L.rectAreaLights.needsUpdate=V,L.hemisphereLights.needsUpdate=V}function Lh(L){return L.isMeshLambertMaterial||L.isMeshToonMaterial||L.isMeshPhongMaterial||L.isMeshStandardMaterial||L.isShadowMaterial||L.isShaderMaterial&&L.lights===!0}this.getActiveCubeFace=function(){return O},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(L,V,Q){De.get(L.texture).__webglTexture=V,De.get(L.depthTexture).__webglTexture=Q;const $=De.get(L);$.__hasExternalTextures=!0,$.__autoAllocateDepthBuffer=Q===void 0,$.__autoAllocateDepthBuffer||Me.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),$.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(L,V){const Q=De.get(L);Q.__webglFramebuffer=V,Q.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(L,V=0,Q=0){I=L,O=V,P=Q;let $=!0,Y=null,xe=!1,Le=!1;if(L){const He=De.get(L);if(He.__useDefaultFramebuffer!==void 0)Ee.bindFramebuffer(F.FRAMEBUFFER,null),$=!1;else if(He.__webglFramebuffer===void 0)U.setupRenderTarget(L);else if(He.__hasExternalTextures)U.rebindTextures(L,De.get(L.texture).__webglTexture,De.get(L.depthTexture).__webglTexture);else if(L.depthBuffer){const qe=L.depthTexture;if(He.__boundDepthTexture!==qe){if(qe!==null&&De.has(qe)&&(L.width!==qe.image.width||L.height!==qe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");U.setupDepthRenderbuffer(L)}}const tt=L.texture;(tt.isData3DTexture||tt.isDataArrayTexture||tt.isCompressedArrayTexture)&&(Le=!0);const it=De.get(L).__webglFramebuffer;L.isWebGLCubeRenderTarget?(Array.isArray(it[V])?Y=it[V][Q]:Y=it[V],xe=!0):L.samples>0&&U.useMultisampledRTT(L)===!1?Y=De.get(L).__webglMultisampledFramebuffer:Array.isArray(it)?Y=it[Q]:Y=it,b.copy(L.viewport),C.copy(L.scissor),X=L.scissorTest}else b.copy(te).multiplyScalar(me).floor(),C.copy(ce).multiplyScalar(me).floor(),X=Be;if(Ee.bindFramebuffer(F.FRAMEBUFFER,Y)&&$&&Ee.drawBuffers(L,Y),Ee.viewport(b),Ee.scissor(C),Ee.setScissorTest(X),xe){const He=De.get(L.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+V,He.__webglTexture,Q)}else if(Le){const He=De.get(L.texture),tt=V||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,He.__webglTexture,Q||0,tt)}N=-1},this.readRenderTargetPixels=function(L,V,Q,$,Y,xe,Le){if(!(L&&L.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ke=De.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&Le!==void 0&&(ke=ke[Le]),ke){Ee.bindFramebuffer(F.FRAMEBUFFER,ke);try{const He=L.texture,tt=He.format,it=He.type;if(!ge.textureFormatReadable(tt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ge.textureTypeReadable(it)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=L.width-$&&Q>=0&&Q<=L.height-Y&&F.readPixels(V,Q,$,Y,ut.convert(tt),ut.convert(it),xe)}finally{const He=I!==null?De.get(I).__webglFramebuffer:null;Ee.bindFramebuffer(F.FRAMEBUFFER,He)}}},this.readRenderTargetPixelsAsync=async function(L,V,Q,$,Y,xe,Le){if(!(L&&L.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ke=De.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&Le!==void 0&&(ke=ke[Le]),ke){const He=L.texture,tt=He.format,it=He.type;if(!ge.textureFormatReadable(tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ge.textureTypeReadable(it))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(V>=0&&V<=L.width-$&&Q>=0&&Q<=L.height-Y){Ee.bindFramebuffer(F.FRAMEBUFFER,ke);const qe=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,qe),F.bufferData(F.PIXEL_PACK_BUFFER,xe.byteLength,F.STREAM_READ),F.readPixels(V,Q,$,Y,ut.convert(tt),ut.convert(it),0);const Tt=I!==null?De.get(I).__webglFramebuffer:null;Ee.bindFramebuffer(F.FRAMEBUFFER,Tt);const Rt=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await VS(F,Rt,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,qe),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,xe),F.deleteBuffer(qe),F.deleteSync(Rt),xe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(L,V=null,Q=0){L.isTexture!==!0&&(su("WebGLRenderer: copyFramebufferToTexture function signature has changed."),V=arguments[0]||null,L=arguments[1]);const $=Math.pow(2,-Q),Y=Math.floor(L.image.width*$),xe=Math.floor(L.image.height*$),Le=V!==null?V.x:0,ke=V!==null?V.y:0;U.setTexture2D(L,0),F.copyTexSubImage2D(F.TEXTURE_2D,Q,0,0,Le,ke,Y,xe),Ee.unbindTexture()},this.copyTextureToTexture=function(L,V,Q=null,$=null,Y=0){L.isTexture!==!0&&(su("WebGLRenderer: copyTextureToTexture function signature has changed."),$=arguments[0]||null,L=arguments[1],V=arguments[2],Y=arguments[3]||0,Q=null);let xe,Le,ke,He,tt,it;Q!==null?(xe=Q.max.x-Q.min.x,Le=Q.max.y-Q.min.y,ke=Q.min.x,He=Q.min.y):(xe=L.image.width,Le=L.image.height,ke=0,He=0),$!==null?(tt=$.x,it=$.y):(tt=0,it=0);const qe=ut.convert(V.format),Tt=ut.convert(V.type);U.setTexture2D(V,0),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,V.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,V.unpackAlignment);const Rt=F.getParameter(F.UNPACK_ROW_LENGTH),Ut=F.getParameter(F.UNPACK_IMAGE_HEIGHT),_t=F.getParameter(F.UNPACK_SKIP_PIXELS),Je=F.getParameter(F.UNPACK_SKIP_ROWS),Ge=F.getParameter(F.UNPACK_SKIP_IMAGES),At=L.isCompressedTexture?L.mipmaps[Y]:L.image;F.pixelStorei(F.UNPACK_ROW_LENGTH,At.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,At.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,ke),F.pixelStorei(F.UNPACK_SKIP_ROWS,He),L.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,Y,tt,it,xe,Le,qe,Tt,At.data):L.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,Y,tt,it,At.width,At.height,qe,At.data):F.texSubImage2D(F.TEXTURE_2D,Y,tt,it,xe,Le,qe,Tt,At),F.pixelStorei(F.UNPACK_ROW_LENGTH,Rt),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Ut),F.pixelStorei(F.UNPACK_SKIP_PIXELS,_t),F.pixelStorei(F.UNPACK_SKIP_ROWS,Je),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Ge),Y===0&&V.generateMipmaps&&F.generateMipmap(F.TEXTURE_2D),Ee.unbindTexture()},this.copyTextureToTexture3D=function(L,V,Q=null,$=null,Y=0){L.isTexture!==!0&&(su("WebGLRenderer: copyTextureToTexture3D function signature has changed."),Q=arguments[0]||null,$=arguments[1]||null,L=arguments[2],V=arguments[3],Y=arguments[4]||0);let xe,Le,ke,He,tt,it,qe,Tt,Rt;const Ut=L.isCompressedTexture?L.mipmaps[Y]:L.image;Q!==null?(xe=Q.max.x-Q.min.x,Le=Q.max.y-Q.min.y,ke=Q.max.z-Q.min.z,He=Q.min.x,tt=Q.min.y,it=Q.min.z):(xe=Ut.width,Le=Ut.height,ke=Ut.depth,He=0,tt=0,it=0),$!==null?(qe=$.x,Tt=$.y,Rt=$.z):(qe=0,Tt=0,Rt=0);const _t=ut.convert(V.format),Je=ut.convert(V.type);let Ge;if(V.isData3DTexture)U.setTexture3D(V,0),Ge=F.TEXTURE_3D;else if(V.isDataArrayTexture||V.isCompressedArrayTexture)U.setTexture2DArray(V,0),Ge=F.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,V.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,V.unpackAlignment);const At=F.getParameter(F.UNPACK_ROW_LENGTH),ct=F.getParameter(F.UNPACK_IMAGE_HEIGHT),rn=F.getParameter(F.UNPACK_SKIP_PIXELS),Zn=F.getParameter(F.UNPACK_SKIP_ROWS),Ft=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,Ut.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Ut.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,He),F.pixelStorei(F.UNPACK_SKIP_ROWS,tt),F.pixelStorei(F.UNPACK_SKIP_IMAGES,it),L.isDataTexture||L.isData3DTexture?F.texSubImage3D(Ge,Y,qe,Tt,Rt,xe,Le,ke,_t,Je,Ut.data):V.isCompressedArrayTexture?F.compressedTexSubImage3D(Ge,Y,qe,Tt,Rt,xe,Le,ke,_t,Ut.data):F.texSubImage3D(Ge,Y,qe,Tt,Rt,xe,Le,ke,_t,Je,Ut),F.pixelStorei(F.UNPACK_ROW_LENGTH,At),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,ct),F.pixelStorei(F.UNPACK_SKIP_PIXELS,rn),F.pixelStorei(F.UNPACK_SKIP_ROWS,Zn),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Ft),Y===0&&V.generateMipmaps&&F.generateMipmap(Ge),Ee.unbindTexture()},this.initRenderTarget=function(L){De.get(L).__webglFramebuffer===void 0&&U.setupRenderTarget(L)},this.initTexture=function(L){L.isCubeTexture?U.setTextureCube(L,0):L.isData3DTexture?U.setTexture3D(L,0):L.isDataArrayTexture||L.isCompressedArrayTexture?U.setTexture2DArray(L,0):U.setTexture2D(L,0),Ee.unbindTexture()},this.resetState=function(){O=0,P=0,I=null,Ee.reset(),Nt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Xi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===sh?"display-p3":"srgb",t.unpackColorSpace=Dt.workingColorSpace===Qa?"display-p3":"srgb"}}class ch{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Pe(e),this.density=t}clone(){return new ch(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class uh{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Pe(e),this.near=t,this.far=n}clone(){return new uh(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Ep extends Ct{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ii,this.environmentIntensity=1,this.environmentRotation=new ii,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class hh{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Fa,this.updateRanges=[],this.version=0,this.uuid=ni()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ni()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ni()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const On=new D;class ti{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)On.fromBufferAttribute(this,t),On.applyMatrix4(e),this.setXYZ(t,On.x,On.y,On.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)On.fromBufferAttribute(this,t),On.applyNormalMatrix(e),this.setXYZ(t,On.x,On.y,On.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)On.fromBufferAttribute(this,t),On.transformDirection(e),this.setXYZ(t,On.x,On.y,On.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Bn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=pt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=pt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=pt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=pt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=pt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Bn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Bn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Bn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Bn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=pt(t,this.array),n=pt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=pt(t,this.array),n=pt(n,this.array),i=pt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=pt(t,this.array),n=pt(n,this.array),i=pt(i,this.array),s=pt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new Ot(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new ti(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Ap extends In{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Pe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let lo;const oa=new D,co=new D,uo=new D,ho=new fe,aa=new fe,N_=new et,Cc=new D,la=new D,Rc=new D,g0=new fe,dd=new fe,v0=new fe;class O_ extends Ct{constructor(e=new Ap){if(super(),this.isSprite=!0,this.type="Sprite",lo===void 0){lo=new vt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new hh(t,5);lo.setIndex([0,1,2,0,2,3]),lo.setAttribute("position",new ti(n,3,0,!1)),lo.setAttribute("uv",new ti(n,2,3,!1))}this.geometry=lo,this.material=e,this.center=new fe(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),co.setFromMatrixScale(this.matrixWorld),N_.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),uo.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&co.multiplyScalar(-uo.z);const n=this.material.rotation;let i,s;n!==0&&(s=Math.cos(n),i=Math.sin(n));const a=this.center;Pc(Cc.set(-.5,-.5,0),uo,a,co,i,s),Pc(la.set(.5,-.5,0),uo,a,co,i,s),Pc(Rc.set(.5,.5,0),uo,a,co,i,s),g0.set(0,0),dd.set(1,0),v0.set(1,1);let c=e.ray.intersectTriangle(Cc,la,Rc,!1,oa);if(c===null&&(Pc(la.set(-.5,.5,0),uo,a,co,i,s),dd.set(0,1),c=e.ray.intersectTriangle(Cc,Rc,la,!1,oa),c===null))return;const u=e.ray.origin.distanceTo(oa);u<e.near||u>e.far||t.push({distance:u,point:oa.clone(),uv:Xn.getInterpolation(oa,Cc,la,Rc,g0,dd,v0,new fe),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Pc(r,e,t,n,i,s){ho.subVectors(r,t).addScalar(.5).multiply(n),i!==void 0?(aa.x=s*ho.x-i*ho.y,aa.y=i*ho.x+s*ho.y):aa.copy(ho),r.copy(e),r.x+=aa.x,r.y+=aa.y,r.applyMatrix4(N_)}const Ic=new D,_0=new D;class F_ extends Ct{constructor(){super(),this._currentLevel=0,this.type="LOD",Object.defineProperties(this,{levels:{enumerable:!0,value:[]},isLOD:{value:!0}}),this.autoUpdate=!0}copy(e){super.copy(e,!1);const t=e.levels;for(let n=0,i=t.length;n<i;n++){const s=t[n];this.addLevel(s.object.clone(),s.distance,s.hysteresis)}return this.autoUpdate=e.autoUpdate,this}addLevel(e,t=0,n=0){t=Math.abs(t);const i=this.levels;let s;for(s=0;s<i.length&&!(t<i[s].distance);s++);return i.splice(s,0,{distance:t,hysteresis:n,object:e}),this.add(e),this}removeLevel(e){const t=this.levels;for(let n=0;n<t.length;n++)if(t[n].distance===e){const i=t.splice(n,1);return this.remove(i[0].object),!0}return!1}getCurrentLevel(){return this._currentLevel}getObjectForDistance(e){const t=this.levels;if(t.length>0){let n,i;for(n=1,i=t.length;n<i;n++){let s=t[n].distance;if(t[n].object.visible&&(s-=s*t[n].hysteresis),e<s)break}return t[n-1].object}return null}raycast(e,t){if(this.levels.length>0){Ic.setFromMatrixPosition(this.matrixWorld);const i=e.ray.origin.distanceTo(Ic);this.getObjectForDistance(i).raycast(e,t)}}update(e){const t=this.levels;if(t.length>1){Ic.setFromMatrixPosition(e.matrixWorld),_0.setFromMatrixPosition(this.matrixWorld);const n=Ic.distanceTo(_0)/e.zoom;t[0].object.visible=!0;let i,s;for(i=1,s=t.length;i<s;i++){let a=t[i].distance;if(t[i].object.visible&&(a-=a*t[i].hysteresis),n>=a)t[i-1].object.visible=!1,t[i].object.visible=!0;else break}for(this._currentLevel=i-1;i<s;i++)t[i].object.visible=!1}}toJSON(e){const t=super.toJSON(e);this.autoUpdate===!1&&(t.object.autoUpdate=!1),t.object.levels=[];const n=this.levels;for(let i=0,s=n.length;i<s;i++){const a=n[i];t.object.levels.push({object:a.object.uuid,distance:a.distance,hysteresis:a.hysteresis})}return t}}const y0=new D,x0=new xt,S0=new xt,rT=new D,M0=new et,Lc=new D,pd=new mn,w0=new et,md=new Lo;class B_ extends $t{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Gd,this.bindMatrix=new et,this.bindMatrixInverse=new et,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new pn),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Lc),this.boundingBox.expandByPoint(Lc)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new mn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Lc),this.boundingSphere.expandByPoint(Lc)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),pd.copy(this.boundingSphere),pd.applyMatrix4(i),e.ray.intersectsSphere(pd)!==!1&&(w0.copy(i).invert(),md.copy(e.ray).applyMatrix4(w0),!(this.boundingBox!==null&&md.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,md)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new xt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Gd?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===s_?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;x0.fromBufferAttribute(i.attributes.skinIndex,e),S0.fromBufferAttribute(i.attributes.skinWeight,e),y0.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const a=S0.getComponent(s);if(a!==0){const c=x0.getComponent(s);M0.multiplyMatrices(n.bones[c].matrixWorld,n.boneInverses[c]),t.addScaledVector(rT.copy(y0).applyMatrix4(M0),a)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Tp extends Ct{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Yi extends Jt{constructor(e=null,t=1,n=1,i,s,a,c,u,h=dn,f=dn,p,m){super(null,a,c,u,h,f,i,s,p,m),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const E0=new et,sT=new et;class fh{constructor(e=[],t=[]){this.uuid=ni(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new et)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new et;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,a=e.length;s<a;s++){const c=e[s]?e[s].matrixWorld:sT;E0.multiplyMatrices(c,t[s]),E0.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new fh(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Yi(t,e,e,Rn,zn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const s=e.bones[n];let a=t[s];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),a=new Tp),this.bones.push(a),this.boneInverses.push(new et().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){const a=t[i];e.bones.push(a.uuid);const c=n[i];e.boneInverses.push(c.toArray())}return e}}class Co extends Ot{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const fo=new et,A0=new et,Dc=[],T0=new pn,oT=new et,ca=new $t,ua=new mn;class z_ extends $t{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Co(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,oT)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new pn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,fo),T0.copy(e.boundingBox).applyMatrix4(fo),this.boundingBox.union(T0)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new mn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,fo),ua.copy(e.boundingSphere).applyMatrix4(fo),this.boundingSphere.union(ua)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,a=e*s+1;for(let c=0;c<n.length;c++)n[c]=i[a+c]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(ca.geometry=this.geometry,ca.material=this.material,ca.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ua.copy(this.boundingSphere),ua.applyMatrix4(n),e.ray.intersectsSphere(ua)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,fo),A0.multiplyMatrices(n,fo),ca.matrixWorld=A0,ca.raycast(e,Dc);for(let a=0,c=Dc.length;a<c;a++){const u=Dc[a];u.instanceId=s,u.object=this,t.push(u)}Dc.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Co(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Yi(new Float32Array(i*this.count),i,this.count,th,zn));const s=this.morphTexture.source.data.data;let a=0;for(let h=0;h<n.length;h++)a+=n[h];const c=this.geometry.morphTargetsRelative?1:1-a,u=i*e;s[u]=c,s.set(n,u+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}function aT(r,e){return r.z-e.z}function lT(r,e){return e.z-r.z}class cT{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t,n){const i=this.pool,s=this.list;this.index>=i.length&&i.push({start:-1,count:-1,z:-1,index:-1});const a=i[this.index];s.push(a),this.index++,a.start=e.start,a.count=e.count,a.z=t,a.index=n}reset(){this.list.length=0,this.index=0}}const Ur=new et,gd=new et,uT=new et,hT=new Pe(1,1,1),b0=new et,vd=new tl,Uc=new pn,os=new mn,ha=new D,C0=new D,fT=new D,_d=new cT,Cn=new $t,Nc=[];function dT(r,e,t=0){const n=e.itemSize;if(r.isInterleavedBufferAttribute||r.array.constructor!==e.array.constructor){const i=r.count;for(let s=0;s<i;s++)for(let a=0;a<n;a++)e.setComponent(s+t,a,r.getComponent(s,a))}else e.array.set(r.array,t*n);e.needsUpdate=!0}class k_ extends $t{get maxInstanceCount(){return this._maxInstanceCount}constructor(e,t,n=t*2,i){super(new vt,i),this.isBatchedMesh=!0,this.perObjectFrustumCulled=!0,this.sortObjects=!0,this.boundingBox=null,this.boundingSphere=null,this.customSort=null,this._drawInfo=[],this._availableInstanceIds=[],this._drawRanges=[],this._reservedRanges=[],this._bounds=[],this._maxInstanceCount=e,this._maxVertexCount=t,this._maxIndexCount=n,this._geometryInitialized=!1,this._geometryCount=0,this._multiDrawCounts=new Int32Array(e),this._multiDrawStarts=new Int32Array(e),this._multiDrawCount=0,this._multiDrawInstances=null,this._visibilityChanged=!0,this._matricesTexture=null,this._indirectTexture=null,this._colorsTexture=null,this._initMatricesTexture(),this._initIndirectTexture()}_initMatricesTexture(){let e=Math.sqrt(this._maxInstanceCount*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4),n=new Yi(t,e,e,Rn,zn);this._matricesTexture=n}_initIndirectTexture(){let e=Math.sqrt(this._maxInstanceCount);e=Math.ceil(e);const t=new Uint32Array(e*e),n=new Yi(t,e,e,Ka,mr);this._indirectTexture=n}_initColorsTexture(){let e=Math.sqrt(this._maxInstanceCount);e=Math.ceil(e);const t=new Float32Array(e*e*4).fill(1),n=new Yi(t,e,e,Rn,zn);n.colorSpace=Dt.workingColorSpace,this._colorsTexture=n}_initializeGeometry(e){const t=this.geometry,n=this._maxVertexCount,i=this._maxIndexCount;if(this._geometryInitialized===!1){for(const s in e.attributes){const a=e.getAttribute(s),{array:c,itemSize:u,normalized:h}=a,f=new c.constructor(n*u),p=new Ot(f,u,h);t.setAttribute(s,p)}if(e.getIndex()!==null){const s=n>65535?new Uint32Array(i):new Uint16Array(i);t.setIndex(new Ot(s,1))}this._geometryInitialized=!0}}_validateGeometry(e){const t=this.geometry;if(!!e.getIndex()!=!!t.getIndex())throw new Error('BatchedMesh: All geometries must consistently have "index".');for(const n in t.attributes){if(!e.hasAttribute(n))throw new Error(`BatchedMesh: Added geometry missing "${n}". All geometries must have consistent attributes.`);const i=e.getAttribute(n),s=t.getAttribute(n);if(i.itemSize!==s.itemSize||i.normalized!==s.normalized)throw new Error("BatchedMesh: All attributes must have a consistent itemSize and normalized value.")}}setCustomSort(e){return this.customSort=e,this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new pn);const e=this.boundingBox,t=this._drawInfo;e.makeEmpty();for(let n=0,i=t.length;n<i;n++){if(t[n].active===!1)continue;const s=t[n].geometryIndex;this.getMatrixAt(n,Ur),this.getBoundingBoxAt(s,Uc).applyMatrix4(Ur),e.union(Uc)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new mn);const e=this.boundingSphere,t=this._drawInfo;e.makeEmpty();for(let n=0,i=t.length;n<i;n++){if(t[n].active===!1)continue;const s=t[n].geometryIndex;this.getMatrixAt(n,Ur),this.getBoundingSphereAt(s,os).applyMatrix4(Ur),e.union(os)}}addInstance(e){if(this._drawInfo.length>=this.maxInstanceCount&&this._availableInstanceIds.length===0)throw new Error("BatchedMesh: Maximum item count reached.");const n={visible:!0,active:!0,geometryIndex:e};let i=null;this._availableInstanceIds.length>0?(i=this._availableInstanceIds.pop(),this._drawInfo[i]=n):(i=this._drawInfo.length,this._drawInfo.push(n));const s=this._matricesTexture,a=s.image.data;uT.toArray(a,i*16),s.needsUpdate=!0;const c=this._colorsTexture;return c&&(hT.toArray(c.image.data,i*4),c.needsUpdate=!0),i}addGeometry(e,t=-1,n=-1){if(this._initializeGeometry(e),this._validateGeometry(e),this._drawInfo.length>=this._maxInstanceCount)throw new Error("BatchedMesh: Maximum item count reached.");const i={vertexStart:-1,vertexCount:-1,indexStart:-1,indexCount:-1};let s=null;const a=this._reservedRanges,c=this._drawRanges,u=this._bounds;this._geometryCount!==0&&(s=a[a.length-1]),t===-1?i.vertexCount=e.getAttribute("position").count:i.vertexCount=t,s===null?i.vertexStart=0:i.vertexStart=s.vertexStart+s.vertexCount;const h=e.getIndex(),f=h!==null;if(f&&(n===-1?i.indexCount=h.count:i.indexCount=n,s===null?i.indexStart=0:i.indexStart=s.indexStart+s.indexCount),i.indexStart!==-1&&i.indexStart+i.indexCount>this._maxIndexCount||i.vertexStart+i.vertexCount>this._maxVertexCount)throw new Error("BatchedMesh: Reserved space request exceeds the maximum buffer size.");const p=this._geometryCount;return this._geometryCount++,a.push(i),c.push({start:f?i.indexStart:i.vertexStart,count:-1}),u.push({boxInitialized:!1,box:new pn,sphereInitialized:!1,sphere:new mn}),this.setGeometryAt(p,e),p}setGeometryAt(e,t){if(e>=this._geometryCount)throw new Error("BatchedMesh: Maximum geometry count reached.");this._validateGeometry(t);const n=this.geometry,i=n.getIndex()!==null,s=n.getIndex(),a=t.getIndex(),c=this._reservedRanges[e];if(i&&a.count>c.indexCount||t.attributes.position.count>c.vertexCount)throw new Error("BatchedMesh: Reserved space not large enough for provided geometry.");const u=c.vertexStart,h=c.vertexCount;for(const g in n.attributes){const y=t.getAttribute(g),M=n.getAttribute(g);dT(y,M,u);const x=y.itemSize;for(let _=y.count,E=h;_<E;_++){const w=u+_;for(let T=0;T<x;T++)M.setComponent(w,T,0)}M.needsUpdate=!0,M.addUpdateRange(u*x,h*x)}if(i){const g=c.indexStart;for(let y=0;y<a.count;y++)s.setX(g+y,u+a.getX(y));for(let y=a.count,M=c.indexCount;y<M;y++)s.setX(g+y,u);s.needsUpdate=!0,s.addUpdateRange(g,c.indexCount)}const f=this._bounds[e];t.boundingBox!==null?(f.box.copy(t.boundingBox),f.boxInitialized=!0):f.boxInitialized=!1,t.boundingSphere!==null?(f.sphere.copy(t.boundingSphere),f.sphereInitialized=!0):f.sphereInitialized=!1;const p=this._drawRanges[e],m=t.getAttribute("position");return p.count=i?a.count:m.count,this._visibilityChanged=!0,e}deleteInstance(e){const t=this._drawInfo;return e>=t.length||t[e].active===!1?this:(t[e].active=!1,this._availableInstanceIds.push(e),this._visibilityChanged=!0,this)}getBoundingBoxAt(e,t){if(e>=this._geometryCount)return null;const n=this._bounds[e],i=n.box,s=this.geometry;if(n.boxInitialized===!1){i.makeEmpty();const a=s.index,c=s.attributes.position,u=this._drawRanges[e];for(let h=u.start,f=u.start+u.count;h<f;h++){let p=h;a&&(p=a.getX(p)),i.expandByPoint(ha.fromBufferAttribute(c,p))}n.boxInitialized=!0}return t.copy(i),t}getBoundingSphereAt(e,t){if(e>=this._geometryCount)return null;const n=this._bounds[e],i=n.sphere,s=this.geometry;if(n.sphereInitialized===!1){i.makeEmpty(),this.getBoundingBoxAt(e,Uc),Uc.getCenter(i.center);const a=s.index,c=s.attributes.position,u=this._drawRanges[e];let h=0;for(let f=u.start,p=u.start+u.count;f<p;f++){let m=f;a&&(m=a.getX(m)),ha.fromBufferAttribute(c,m),h=Math.max(h,i.center.distanceToSquared(ha))}i.radius=Math.sqrt(h),n.sphereInitialized=!0}return t.copy(i),t}setMatrixAt(e,t){const n=this._drawInfo,i=this._matricesTexture,s=this._matricesTexture.image.data;return e>=n.length||n[e].active===!1?this:(t.toArray(s,e*16),i.needsUpdate=!0,this)}getMatrixAt(e,t){const n=this._drawInfo,i=this._matricesTexture.image.data;return e>=n.length||n[e].active===!1?null:t.fromArray(i,e*16)}setColorAt(e,t){this._colorsTexture===null&&this._initColorsTexture();const n=this._colorsTexture,i=this._colorsTexture.image.data,s=this._drawInfo;return e>=s.length||s[e].active===!1?this:(t.toArray(i,e*4),n.needsUpdate=!0,this)}getColorAt(e,t){const n=this._colorsTexture.image.data,i=this._drawInfo;return e>=i.length||i[e].active===!1?null:t.fromArray(n,e*4)}setVisibleAt(e,t){const n=this._drawInfo;return e>=n.length||n[e].active===!1||n[e].visible===t?this:(n[e].visible=t,this._visibilityChanged=!0,this)}getVisibleAt(e){const t=this._drawInfo;return e>=t.length||t[e].active===!1?!1:t[e].visible}setGeometryIdAt(e,t){const n=this._drawInfo;return e>=n.length||n[e].active===!1||t<0||t>=this._geometryCount?null:(n[e].geometryIndex=t,this)}getGeometryIdAt(e){const t=this._drawInfo;return e>=t.length||t[e].active===!1?-1:t[e].geometryIndex}getGeometryRangeAt(e,t={}){if(e<0||e>=this._geometryCount)return null;const n=this._drawRanges[e];return t.start=n.start,t.count=n.count,t}raycast(e,t){const n=this._drawInfo,i=this._drawRanges,s=this.matrixWorld,a=this.geometry;Cn.material=this.material,Cn.geometry.index=a.index,Cn.geometry.attributes=a.attributes,Cn.geometry.boundingBox===null&&(Cn.geometry.boundingBox=new pn),Cn.geometry.boundingSphere===null&&(Cn.geometry.boundingSphere=new mn);for(let c=0,u=n.length;c<u;c++){if(!n[c].visible||!n[c].active)continue;const h=n[c].geometryIndex,f=i[h];Cn.geometry.setDrawRange(f.start,f.count),this.getMatrixAt(c,Cn.matrixWorld).premultiply(s),this.getBoundingBoxAt(h,Cn.geometry.boundingBox),this.getBoundingSphereAt(h,Cn.geometry.boundingSphere),Cn.raycast(e,Nc);for(let p=0,m=Nc.length;p<m;p++){const g=Nc[p];g.object=this,g.batchId=c,t.push(g)}Nc.length=0}Cn.material=null,Cn.geometry.index=null,Cn.geometry.attributes={},Cn.geometry.setDrawRange(0,1/0)}copy(e){return super.copy(e),this.geometry=e.geometry.clone(),this.perObjectFrustumCulled=e.perObjectFrustumCulled,this.sortObjects=e.sortObjects,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this._drawRanges=e._drawRanges.map(t=>({...t})),this._reservedRanges=e._reservedRanges.map(t=>({...t})),this._drawInfo=e._drawInfo.map(t=>({...t})),this._bounds=e._bounds.map(t=>({boxInitialized:t.boxInitialized,box:t.box.clone(),sphereInitialized:t.sphereInitialized,sphere:t.sphere.clone()})),this._maxInstanceCount=e._maxInstanceCount,this._maxVertexCount=e._maxVertexCount,this._maxIndexCount=e._maxIndexCount,this._geometryInitialized=e._geometryInitialized,this._geometryCount=e._geometryCount,this._multiDrawCounts=e._multiDrawCounts.slice(),this._multiDrawStarts=e._multiDrawStarts.slice(),this._matricesTexture=e._matricesTexture.clone(),this._matricesTexture.image.data=this._matricesTexture.image.data.slice(),this._colorsTexture!==null&&(this._colorsTexture=e._colorsTexture.clone(),this._colorsTexture.image.data=this._colorsTexture.image.data.slice()),this}dispose(){return this.geometry.dispose(),this._matricesTexture.dispose(),this._matricesTexture=null,this._indirectTexture.dispose(),this._indirectTexture=null,this._colorsTexture!==null&&(this._colorsTexture.dispose(),this._colorsTexture=null),this}onBeforeRender(e,t,n,i,s){if(!this._visibilityChanged&&!this.perObjectFrustumCulled&&!this.sortObjects)return;const a=i.getIndex(),c=a===null?1:a.array.BYTES_PER_ELEMENT,u=this._drawInfo,h=this._multiDrawStarts,f=this._multiDrawCounts,p=this._drawRanges,m=this.perObjectFrustumCulled,g=this._indirectTexture,y=g.image.data;m&&(b0.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse).multiply(this.matrixWorld),vd.setFromProjectionMatrix(b0,e.coordinateSystem));let M=0;if(this.sortObjects){gd.copy(this.matrixWorld).invert(),ha.setFromMatrixPosition(n.matrixWorld).applyMatrix4(gd),C0.set(0,0,-1).transformDirection(n.matrixWorld).transformDirection(gd);for(let E=0,w=u.length;E<w;E++)if(u[E].visible&&u[E].active){const T=u[E].geometryIndex;this.getMatrixAt(E,Ur),this.getBoundingSphereAt(T,os).applyMatrix4(Ur);let O=!1;if(m&&(O=!vd.intersectsSphere(os)),!O){const P=fT.subVectors(os.center,ha).dot(C0);_d.push(p[T],P,E)}}const x=_d.list,_=this.customSort;_===null?x.sort(s.transparent?lT:aT):_.call(this,x,n);for(let E=0,w=x.length;E<w;E++){const T=x[E];h[M]=T.start*c,f[M]=T.count,y[M]=T.index,M++}_d.reset()}else for(let x=0,_=u.length;x<_;x++)if(u[x].visible&&u[x].active){const E=u[x].geometryIndex;let w=!1;if(m&&(this.getMatrixAt(x,Ur),this.getBoundingSphereAt(E,os).applyMatrix4(Ur),w=!vd.intersectsSphere(os)),!w){const T=p[E];h[M]=T.start*c,f[M]=T.count,y[M]=x,M++}}g.needsUpdate=!0,this._multiDrawCount=M,this._visibilityChanged=!1}onBeforeShadow(e,t,n,i,s,a){this.onBeforeRender(e,null,i,s,a)}}class kn extends In{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Pe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Wu=new D,Xu=new D,R0=new et,fa=new Lo,Oc=new mn,yd=new D,P0=new D;let kr=class extends Ct{constructor(e=new vt,t=new kn){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)Wu.fromBufferAttribute(t,i-1),Xu.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Wu.distanceTo(Xu);e.setAttribute("lineDistance",new We(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Oc.copy(n.boundingSphere),Oc.applyMatrix4(i),Oc.radius+=s,e.ray.intersectsSphere(Oc)===!1)return;R0.copy(i).invert(),fa.copy(e.ray).applyMatrix4(R0);const c=s/((this.scale.x+this.scale.y+this.scale.z)/3),u=c*c,h=this.isLineSegments?2:1,f=n.index,m=n.attributes.position;if(f!==null){const g=Math.max(0,a.start),y=Math.min(f.count,a.start+a.count);for(let M=g,x=y-1;M<x;M+=h){const _=f.getX(M),E=f.getX(M+1),w=Fc(this,e,fa,u,_,E);w&&t.push(w)}if(this.isLineLoop){const M=f.getX(y-1),x=f.getX(g),_=Fc(this,e,fa,u,M,x);_&&t.push(_)}}else{const g=Math.max(0,a.start),y=Math.min(m.count,a.start+a.count);for(let M=g,x=y-1;M<x;M+=h){const _=Fc(this,e,fa,u,M,M+1);_&&t.push(_)}if(this.isLineLoop){const M=Fc(this,e,fa,u,y-1,g);M&&t.push(M)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const c=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=s}}}}};function Fc(r,e,t,n,i,s){const a=r.geometry.attributes.position;if(Wu.fromBufferAttribute(a,i),Xu.fromBufferAttribute(a,s),t.distanceSqToSegment(Wu,Xu,yd,P0)>n)return;yd.applyMatrix4(r.matrixWorld);const u=e.ray.origin.distanceTo(yd);if(!(u<e.near||u>e.far))return{distance:u,point:P0.clone().applyMatrix4(r.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:r}}const I0=new D,L0=new D;class Ji extends kr{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)I0.fromBufferAttribute(t,i),L0.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+I0.distanceTo(L0);e.setAttribute("lineDistance",new We(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class H_ extends kr{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class bp extends In{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Pe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const D0=new et,jd=new Lo,Bc=new mn,zc=new D;class V_ extends Ct{constructor(e=new vt,t=new bp){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Bc.copy(n.boundingSphere),Bc.applyMatrix4(i),Bc.radius+=s,e.ray.intersectsSphere(Bc)===!1)return;D0.copy(i).invert(),jd.copy(e.ray).applyMatrix4(D0);const c=s/((this.scale.x+this.scale.y+this.scale.z)/3),u=c*c,h=n.index,p=n.attributes.position;if(h!==null){const m=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let y=m,M=g;y<M;y++){const x=h.getX(y);zc.fromBufferAttribute(p,x),U0(zc,x,u,i,e,t,this)}}else{const m=Math.max(0,a.start),g=Math.min(p.count,a.start+a.count);for(let y=m,M=g;y<M;y++)zc.fromBufferAttribute(p,y),U0(zc,y,u,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const c=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=s}}}}}function U0(r,e,t,n,i,s,a){const c=jd.distanceSqToPoint(r);if(c<t){const u=new D;jd.closestPointToPoint(r,u),u.applyMatrix4(n);const h=i.ray.origin.distanceTo(u);if(h<i.near||h>i.far)return;s.push({distance:h,distanceToRay:Math.sqrt(c),point:u,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class pT extends Jt{constructor(e,t,n,i,s,a,c,u,h){super(e,t,n,i,s,a,c,u,h),this.isVideoTexture=!0,this.minFilter=a!==void 0?a:jt,this.magFilter=s!==void 0?s:jt,this.generateMipmaps=!1;const f=this;function p(){f.needsUpdate=!0,e.requestVideoFrameCallback(p)}"requestVideoFrameCallback"in e&&e.requestVideoFrameCallback(p)}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}}class mT extends Jt{constructor(e,t){super({width:e,height:t}),this.isFramebufferTexture=!0,this.magFilter=dn,this.minFilter=dn,this.generateMipmaps=!1,this.needsUpdate=!0}}class dh extends Jt{constructor(e,t,n,i,s,a,c,u,h,f,p,m){super(null,a,c,u,h,f,i,s,p,m),this.isCompressedTexture=!0,this.image={width:t,height:n},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}}class gT extends dh{constructor(e,t,n,i,s,a){super(e,t,n,s,a),this.isCompressedArrayTexture=!0,this.image.depth=i,this.wrapR=gi,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class vT extends dh{constructor(e,t,n){super(void 0,e[0].width,e[0].height,t,n,pr),this.isCompressedCubeTexture=!0,this.isCubeTexture=!0,this.image=e}}class _T extends Jt{constructor(e,t,n,i,s,a,c,u,h){super(e,t,n,i,s,a,c,u,h),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ri{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),s+=n.distanceTo(i),t.push(s),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let i=0;const s=n.length;let a;t?a=t:a=e*n[s-1];let c=0,u=s-1,h;for(;c<=u;)if(i=Math.floor(c+(u-c)/2),h=n[i]-a,h<0)c=i+1;else if(h>0)u=i-1;else{u=i;break}if(i=u,n[i]===a)return i/(s-1);const f=n[i],m=n[i+1]-f,g=(a-f)/m;return(i+g)/(s-1)}getTangent(e,t){let i=e-1e-4,s=e+1e-4;i<0&&(i=0),s>1&&(s=1);const a=this.getPoint(i),c=this.getPoint(s),u=t||(a.isVector2?new fe:new D);return u.copy(c).sub(a).normalize(),u}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new D,i=[],s=[],a=[],c=new D,u=new et;for(let g=0;g<=e;g++){const y=g/e;i[g]=this.getTangentAt(y,new D)}s[0]=new D,a[0]=new D;let h=Number.MAX_VALUE;const f=Math.abs(i[0].x),p=Math.abs(i[0].y),m=Math.abs(i[0].z);f<=h&&(h=f,n.set(1,0,0)),p<=h&&(h=p,n.set(0,1,0)),m<=h&&n.set(0,0,1),c.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],c),a[0].crossVectors(i[0],s[0]);for(let g=1;g<=e;g++){if(s[g]=s[g-1].clone(),a[g]=a[g-1].clone(),c.crossVectors(i[g-1],i[g]),c.length()>Number.EPSILON){c.normalize();const y=Math.acos(Zt(i[g-1].dot(i[g]),-1,1));s[g].applyMatrix4(u.makeRotationAxis(c,y))}a[g].crossVectors(i[g],s[g])}if(t===!0){let g=Math.acos(Zt(s[0].dot(s[e]),-1,1));g/=e,i[0].dot(c.crossVectors(s[0],s[e]))>0&&(g=-g);for(let y=1;y<=e;y++)s[y].applyMatrix4(u.makeRotationAxis(i[y],g*y)),a[y].crossVectors(i[y],s[y])}return{tangents:i,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class ph extends Ri{constructor(e=0,t=0,n=1,i=1,s=0,a=Math.PI*2,c=!1,u=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=c,this.aRotation=u}getPoint(e,t=new fe){const n=t,i=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(a?s=0:s=i),this.aClockwise===!0&&!a&&(s===i?s=-i:s=s-i);const c=this.aStartAngle+e*s;let u=this.aX+this.xRadius*Math.cos(c),h=this.aY+this.yRadius*Math.sin(c);if(this.aRotation!==0){const f=Math.cos(this.aRotation),p=Math.sin(this.aRotation),m=u-this.aX,g=h-this.aY;u=m*f-g*p+this.aX,h=m*p+g*f+this.aY}return n.set(u,h)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class G_ extends ph{constructor(e,t,n,i,s,a){super(e,t,n,n,i,s,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Cp(){let r=0,e=0,t=0,n=0;function i(s,a,c,u){r=s,e=c,t=-3*s+3*a-2*c-u,n=2*s-2*a+c+u}return{initCatmullRom:function(s,a,c,u,h){i(a,c,h*(c-s),h*(u-a))},initNonuniformCatmullRom:function(s,a,c,u,h,f,p){let m=(a-s)/h-(c-s)/(h+f)+(c-a)/f,g=(c-a)/f-(u-a)/(f+p)+(u-c)/p;m*=f,g*=f,i(a,c,m,g)},calc:function(s){const a=s*s,c=a*s;return r+e*s+t*a+n*c}}}const kc=new D,xd=new Cp,Sd=new Cp,Md=new Cp;class W_ extends Ri{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new D){const n=t,i=this.points,s=i.length,a=(s-(this.closed?0:1))*e;let c=Math.floor(a),u=a-c;this.closed?c+=c>0?0:(Math.floor(Math.abs(c)/s)+1)*s:u===0&&c===s-1&&(c=s-2,u=1);let h,f;this.closed||c>0?h=i[(c-1)%s]:(kc.subVectors(i[0],i[1]).add(i[0]),h=kc);const p=i[c%s],m=i[(c+1)%s];if(this.closed||c+2<s?f=i[(c+2)%s]:(kc.subVectors(i[s-1],i[s-2]).add(i[s-1]),f=kc),this.curveType==="centripetal"||this.curveType==="chordal"){const g=this.curveType==="chordal"?.5:.25;let y=Math.pow(h.distanceToSquared(p),g),M=Math.pow(p.distanceToSquared(m),g),x=Math.pow(m.distanceToSquared(f),g);M<1e-4&&(M=1),y<1e-4&&(y=M),x<1e-4&&(x=M),xd.initNonuniformCatmullRom(h.x,p.x,m.x,f.x,y,M,x),Sd.initNonuniformCatmullRom(h.y,p.y,m.y,f.y,y,M,x),Md.initNonuniformCatmullRom(h.z,p.z,m.z,f.z,y,M,x)}else this.curveType==="catmullrom"&&(xd.initCatmullRom(h.x,p.x,m.x,f.x,this.tension),Sd.initCatmullRom(h.y,p.y,m.y,f.y,this.tension),Md.initCatmullRom(h.z,p.z,m.z,f.z,this.tension));return n.set(xd.calc(u),Sd.calc(u),Md.calc(u)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new D().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function N0(r,e,t,n,i){const s=(n-e)*.5,a=(i-t)*.5,c=r*r,u=r*c;return(2*t-2*n+s+a)*u+(-3*t+3*n-2*s-a)*c+s*r+t}function yT(r,e){const t=1-r;return t*t*e}function xT(r,e){return 2*(1-r)*r*e}function ST(r,e){return r*r*e}function Ta(r,e,t,n){return yT(r,e)+xT(r,t)+ST(r,n)}function MT(r,e){const t=1-r;return t*t*t*e}function wT(r,e){const t=1-r;return 3*t*t*r*e}function ET(r,e){return 3*(1-r)*r*r*e}function AT(r,e){return r*r*r*e}function ba(r,e,t,n,i){return MT(r,e)+wT(r,t)+ET(r,n)+AT(r,i)}class Rp extends Ri{constructor(e=new fe,t=new fe,n=new fe,i=new fe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new fe){const n=t,i=this.v0,s=this.v1,a=this.v2,c=this.v3;return n.set(ba(e,i.x,s.x,a.x,c.x),ba(e,i.y,s.y,a.y,c.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class X_ extends Ri{constructor(e=new D,t=new D,n=new D,i=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new D){const n=t,i=this.v0,s=this.v1,a=this.v2,c=this.v3;return n.set(ba(e,i.x,s.x,a.x,c.x),ba(e,i.y,s.y,a.y,c.y),ba(e,i.z,s.z,a.z,c.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Pp extends Ri{constructor(e=new fe,t=new fe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new fe){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new fe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Y_ extends Ri{constructor(e=new D,t=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new D){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new D){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Ip extends Ri{constructor(e=new fe,t=new fe,n=new fe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new fe){const n=t,i=this.v0,s=this.v1,a=this.v2;return n.set(Ta(e,i.x,s.x,a.x),Ta(e,i.y,s.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Lp extends Ri{constructor(e=new D,t=new D,n=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new D){const n=t,i=this.v0,s=this.v1,a=this.v2;return n.set(Ta(e,i.x,s.x,a.x),Ta(e,i.y,s.y,a.y),Ta(e,i.z,s.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Dp extends Ri{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new fe){const n=t,i=this.points,s=(i.length-1)*e,a=Math.floor(s),c=s-a,u=i[a===0?a:a-1],h=i[a],f=i[a>i.length-2?i.length-1:a+1],p=i[a>i.length-3?i.length-1:a+2];return n.set(N0(c,u.x,h.x,f.x,p.x),N0(c,u.y,h.y,f.y,p.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new fe().fromArray(i))}return this}}var Yu=Object.freeze({__proto__:null,ArcCurve:G_,CatmullRomCurve3:W_,CubicBezierCurve:Rp,CubicBezierCurve3:X_,EllipseCurve:ph,LineCurve:Pp,LineCurve3:Y_,QuadraticBezierCurve:Ip,QuadraticBezierCurve3:Lp,SplineCurve:Dp});class q_ extends Ri{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Yu[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),i=this.getCurveLengths();let s=0;for(;s<i.length;){if(i[s]>=n){const a=i[s]-n,c=this.curves[s],u=c.getLength(),h=u===0?0:1-a/u;return c.getPointAt(h,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,s=this.curves;i<s.length;i++){const a=s[i],c=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,u=a.getPoints(c);for(let h=0;h<u.length;h++){const f=u[h];n&&n.equals(f)||(t.push(f),n=f)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new Yu[i.type]().fromJSON(i))}return this}}class Ha extends q_{constructor(e){super(),this.type="Path",this.currentPoint=new fe,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new Pp(this.currentPoint.clone(),new fe(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const s=new Ip(this.currentPoint.clone(),new fe(e,t),new fe(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,s,a){const c=new Rp(this.currentPoint.clone(),new fe(e,t),new fe(n,i),new fe(s,a));return this.curves.push(c),this.currentPoint.set(s,a),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new Dp(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,s,a){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absarc(e+c,t+u,n,i,s,a),this}absarc(e,t,n,i,s,a){return this.absellipse(e,t,n,n,i,s,a),this}ellipse(e,t,n,i,s,a,c,u){const h=this.currentPoint.x,f=this.currentPoint.y;return this.absellipse(e+h,t+f,n,i,s,a,c,u),this}absellipse(e,t,n,i,s,a,c,u){const h=new ph(e,t,n,i,s,a,c,u);if(this.curves.length>0){const p=h.getPoint(0);p.equals(this.currentPoint)||this.lineTo(p.x,p.y)}this.curves.push(h);const f=h.getPoint(1);return this.currentPoint.copy(f),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class il extends vt{constructor(e=[new fe(0,-.5),new fe(.5,0),new fe(0,.5)],t=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:i},t=Math.floor(t),i=Zt(i,0,Math.PI*2);const s=[],a=[],c=[],u=[],h=[],f=1/t,p=new D,m=new fe,g=new D,y=new D,M=new D;let x=0,_=0;for(let E=0;E<=e.length-1;E++)switch(E){case 0:x=e[E+1].x-e[E].x,_=e[E+1].y-e[E].y,g.x=_*1,g.y=-x,g.z=_*0,M.copy(g),g.normalize(),u.push(g.x,g.y,g.z);break;case e.length-1:u.push(M.x,M.y,M.z);break;default:x=e[E+1].x-e[E].x,_=e[E+1].y-e[E].y,g.x=_*1,g.y=-x,g.z=_*0,y.copy(g),g.x+=M.x,g.y+=M.y,g.z+=M.z,g.normalize(),u.push(g.x,g.y,g.z),M.copy(y)}for(let E=0;E<=t;E++){const w=n+E*f*i,T=Math.sin(w),O=Math.cos(w);for(let P=0;P<=e.length-1;P++){p.x=e[P].x*T,p.y=e[P].y,p.z=e[P].x*O,a.push(p.x,p.y,p.z),m.x=E/t,m.y=P/(e.length-1),c.push(m.x,m.y);const I=u[3*P+0]*T,N=u[3*P+1],W=u[3*P+0]*O;h.push(I,N,W)}}for(let E=0;E<t;E++)for(let w=0;w<e.length-1;w++){const T=w+E*e.length,O=T,P=T+e.length,I=T+e.length+1,N=T+1;s.push(O,P,N),s.push(I,N,P)}this.setIndex(s),this.setAttribute("position",new We(a,3)),this.setAttribute("uv",new We(c,2)),this.setAttribute("normal",new We(h,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new il(e.points,e.segments,e.phiStart,e.phiLength)}}class mh extends il{constructor(e=1,t=1,n=4,i=8){const s=new Ha;s.absarc(0,-t/2,e,Math.PI*1.5,0),s.absarc(0,t/2,e,0,Math.PI*.5),super(s.getPoints(n),i),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:n,radialSegments:i}}static fromJSON(e){return new mh(e.radius,e.length,e.capSegments,e.radialSegments)}}class gh extends vt{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);const s=[],a=[],c=[],u=[],h=new D,f=new fe;a.push(0,0,0),c.push(0,0,1),u.push(.5,.5);for(let p=0,m=3;p<=t;p++,m+=3){const g=n+p/t*i;h.x=e*Math.cos(g),h.y=e*Math.sin(g),a.push(h.x,h.y,h.z),c.push(0,0,1),f.x=(a[m]/e+1)/2,f.y=(a[m+1]/e+1)/2,u.push(f.x,f.y)}for(let p=1;p<=t;p++)s.push(p,p+1,0);this.setIndex(s),this.setAttribute("position",new We(a,3)),this.setAttribute("normal",new We(c,3)),this.setAttribute("uv",new We(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gh(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class No extends vt{constructor(e=1,t=1,n=1,i=32,s=1,a=!1,c=0,u=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:a,thetaStart:c,thetaLength:u};const h=this;i=Math.floor(i),s=Math.floor(s);const f=[],p=[],m=[],g=[];let y=0;const M=[],x=n/2;let _=0;E(),a===!1&&(e>0&&w(!0),t>0&&w(!1)),this.setIndex(f),this.setAttribute("position",new We(p,3)),this.setAttribute("normal",new We(m,3)),this.setAttribute("uv",new We(g,2));function E(){const T=new D,O=new D;let P=0;const I=(t-e)/n;for(let N=0;N<=s;N++){const W=[],b=N/s,C=b*(t-e)+e;for(let X=0;X<=i;X++){const q=X/i,K=q*u+c,le=Math.sin(K),Z=Math.cos(K);O.x=C*le,O.y=-b*n+x,O.z=C*Z,p.push(O.x,O.y,O.z),T.set(le,I,Z).normalize(),m.push(T.x,T.y,T.z),g.push(q,1-b),W.push(y++)}M.push(W)}for(let N=0;N<i;N++)for(let W=0;W<s;W++){const b=M[W][N],C=M[W+1][N],X=M[W+1][N+1],q=M[W][N+1];e>0&&(f.push(b,C,q),P+=3),t>0&&(f.push(C,X,q),P+=3)}h.addGroup(_,P,0),_+=P}function w(T){const O=y,P=new fe,I=new D;let N=0;const W=T===!0?e:t,b=T===!0?1:-1;for(let X=1;X<=i;X++)p.push(0,x*b,0),m.push(0,b,0),g.push(.5,.5),y++;const C=y;for(let X=0;X<=i;X++){const K=X/i*u+c,le=Math.cos(K),Z=Math.sin(K);I.x=W*Z,I.y=x*b,I.z=W*le,p.push(I.x,I.y,I.z),m.push(0,b,0),P.x=le*.5+.5,P.y=Z*.5*b+.5,g.push(P.x,P.y),y++}for(let X=0;X<i;X++){const q=O+X,K=C+X;T===!0?f.push(K,K+1,q):f.push(K+1,K,q),N+=3}h.addGroup(_,N,T===!0?1:2),_+=N}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new No(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class vh extends No{constructor(e=1,t=1,n=32,i=1,s=!1,a=0,c=Math.PI*2){super(0,e,t,n,i,s,a,c),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:a,thetaLength:c}}static fromJSON(e){return new vh(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Gr extends vt{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const s=[],a=[];c(i),h(n),f(),this.setAttribute("position",new We(s,3)),this.setAttribute("normal",new We(s.slice(),3)),this.setAttribute("uv",new We(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function c(E){const w=new D,T=new D,O=new D;for(let P=0;P<t.length;P+=3)g(t[P+0],w),g(t[P+1],T),g(t[P+2],O),u(w,T,O,E)}function u(E,w,T,O){const P=O+1,I=[];for(let N=0;N<=P;N++){I[N]=[];const W=E.clone().lerp(T,N/P),b=w.clone().lerp(T,N/P),C=P-N;for(let X=0;X<=C;X++)X===0&&N===P?I[N][X]=W:I[N][X]=W.clone().lerp(b,X/C)}for(let N=0;N<P;N++)for(let W=0;W<2*(P-N)-1;W++){const b=Math.floor(W/2);W%2===0?(m(I[N][b+1]),m(I[N+1][b]),m(I[N][b])):(m(I[N][b+1]),m(I[N+1][b+1]),m(I[N+1][b]))}}function h(E){const w=new D;for(let T=0;T<s.length;T+=3)w.x=s[T+0],w.y=s[T+1],w.z=s[T+2],w.normalize().multiplyScalar(E),s[T+0]=w.x,s[T+1]=w.y,s[T+2]=w.z}function f(){const E=new D;for(let w=0;w<s.length;w+=3){E.x=s[w+0],E.y=s[w+1],E.z=s[w+2];const T=x(E)/2/Math.PI+.5,O=_(E)/Math.PI+.5;a.push(T,1-O)}y(),p()}function p(){for(let E=0;E<a.length;E+=6){const w=a[E+0],T=a[E+2],O=a[E+4],P=Math.max(w,T,O),I=Math.min(w,T,O);P>.9&&I<.1&&(w<.2&&(a[E+0]+=1),T<.2&&(a[E+2]+=1),O<.2&&(a[E+4]+=1))}}function m(E){s.push(E.x,E.y,E.z)}function g(E,w){const T=E*3;w.x=e[T+0],w.y=e[T+1],w.z=e[T+2]}function y(){const E=new D,w=new D,T=new D,O=new D,P=new fe,I=new fe,N=new fe;for(let W=0,b=0;W<s.length;W+=9,b+=6){E.set(s[W+0],s[W+1],s[W+2]),w.set(s[W+3],s[W+4],s[W+5]),T.set(s[W+6],s[W+7],s[W+8]),P.set(a[b+0],a[b+1]),I.set(a[b+2],a[b+3]),N.set(a[b+4],a[b+5]),O.copy(E).add(w).add(T).divideScalar(3);const C=x(O);M(P,b+0,E,C),M(I,b+2,w,C),M(N,b+4,T,C)}}function M(E,w,T,O){O<0&&E.x===1&&(a[w]=E.x-1),T.x===0&&T.z===0&&(a[w]=O/2/Math.PI+.5)}function x(E){return Math.atan2(E.z,-E.x)}function _(E){return Math.atan2(-E.y,Math.sqrt(E.x*E.x+E.z*E.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gr(e.vertices,e.indices,e.radius,e.details)}}class _h extends Gr{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=1/n,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,a,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new _h(e.radius,e.detail)}}const Hc=new D,Vc=new D,wd=new D,Gc=new Xn;class Z_ extends vt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const i=Math.pow(10,4),s=Math.cos(Ss*t),a=e.getIndex(),c=e.getAttribute("position"),u=a?a.count:c.count,h=[0,0,0],f=["a","b","c"],p=new Array(3),m={},g=[];for(let y=0;y<u;y+=3){a?(h[0]=a.getX(y),h[1]=a.getX(y+1),h[2]=a.getX(y+2)):(h[0]=y,h[1]=y+1,h[2]=y+2);const{a:M,b:x,c:_}=Gc;if(M.fromBufferAttribute(c,h[0]),x.fromBufferAttribute(c,h[1]),_.fromBufferAttribute(c,h[2]),Gc.getNormal(wd),p[0]=`${Math.round(M.x*i)},${Math.round(M.y*i)},${Math.round(M.z*i)}`,p[1]=`${Math.round(x.x*i)},${Math.round(x.y*i)},${Math.round(x.z*i)}`,p[2]=`${Math.round(_.x*i)},${Math.round(_.y*i)},${Math.round(_.z*i)}`,!(p[0]===p[1]||p[1]===p[2]||p[2]===p[0]))for(let E=0;E<3;E++){const w=(E+1)%3,T=p[E],O=p[w],P=Gc[f[E]],I=Gc[f[w]],N=`${T}_${O}`,W=`${O}_${T}`;W in m&&m[W]?(wd.dot(m[W].normal)<=s&&(g.push(P.x,P.y,P.z),g.push(I.x,I.y,I.z)),m[W]=null):N in m||(m[N]={index0:h[E],index1:h[w],normal:wd.clone()})}}for(const y in m)if(m[y]){const{index0:M,index1:x}=m[y];Hc.fromBufferAttribute(c,M),Vc.fromBufferAttribute(c,x),g.push(Hc.x,Hc.y,Hc.z),g.push(Vc.x,Vc.y,Vc.z)}this.setAttribute("position",new We(g,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class Br extends Ha{constructor(e){super(e),this.uuid=ni(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(new Ha().fromJSON(i))}return this}}const TT={triangulate:function(r,e,t=2){const n=e&&e.length,i=n?e[0]*t:r.length;let s=j_(r,0,i,t,!0);const a=[];if(!s||s.next===s.prev)return a;let c,u,h,f,p,m,g;if(n&&(s=IT(r,e,s,t)),r.length>80*t){c=h=r[0],u=f=r[1];for(let y=t;y<i;y+=t)p=r[y],m=r[y+1],p<c&&(c=p),m<u&&(u=m),p>h&&(h=p),m>f&&(f=m);g=Math.max(h-c,f-u),g=g!==0?32767/g:0}return Va(s,a,t,c,u,g,0),a}};function j_(r,e,t,n,i){let s,a;if(i===VT(r,e,t,n)>0)for(s=e;s<t;s+=n)a=O0(s,r[s],r[s+1],a);else for(s=t-n;s>=e;s-=n)a=O0(s,r[s],r[s+1],a);return a&&yh(a,a.next)&&(Wa(a),a=a.next),a}function Cs(r,e){if(!r)return r;e||(e=r);let t=r,n;do if(n=!1,!t.steiner&&(yh(t,t.next)||Xt(t.prev,t,t.next)===0)){if(Wa(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Va(r,e,t,n,i,s,a){if(!r)return;!a&&s&&OT(r,n,i,s);let c=r,u,h;for(;r.prev!==r.next;){if(u=r.prev,h=r.next,s?CT(r,n,i,s):bT(r)){e.push(u.i/t|0),e.push(r.i/t|0),e.push(h.i/t|0),Wa(r),r=h.next,c=h.next;continue}if(r=h,r===c){a?a===1?(r=RT(Cs(r),e,t),Va(r,e,t,n,i,s,2)):a===2&&PT(r,e,t,n,i,s):Va(Cs(r),e,t,n,i,s,1);break}}}function bT(r){const e=r.prev,t=r,n=r.next;if(Xt(e,t,n)>=0)return!1;const i=e.x,s=t.x,a=n.x,c=e.y,u=t.y,h=n.y,f=i<s?i<a?i:a:s<a?s:a,p=c<u?c<h?c:h:u<h?u:h,m=i>s?i>a?i:a:s>a?s:a,g=c>u?c>h?c:h:u>h?u:h;let y=n.next;for(;y!==e;){if(y.x>=f&&y.x<=m&&y.y>=p&&y.y<=g&&Mo(i,c,s,u,a,h,y.x,y.y)&&Xt(y.prev,y,y.next)>=0)return!1;y=y.next}return!0}function CT(r,e,t,n){const i=r.prev,s=r,a=r.next;if(Xt(i,s,a)>=0)return!1;const c=i.x,u=s.x,h=a.x,f=i.y,p=s.y,m=a.y,g=c<u?c<h?c:h:u<h?u:h,y=f<p?f<m?f:m:p<m?p:m,M=c>u?c>h?c:h:u>h?u:h,x=f>p?f>m?f:m:p>m?p:m,_=Jd(g,y,e,t,n),E=Jd(M,x,e,t,n);let w=r.prevZ,T=r.nextZ;for(;w&&w.z>=_&&T&&T.z<=E;){if(w.x>=g&&w.x<=M&&w.y>=y&&w.y<=x&&w!==i&&w!==a&&Mo(c,f,u,p,h,m,w.x,w.y)&&Xt(w.prev,w,w.next)>=0||(w=w.prevZ,T.x>=g&&T.x<=M&&T.y>=y&&T.y<=x&&T!==i&&T!==a&&Mo(c,f,u,p,h,m,T.x,T.y)&&Xt(T.prev,T,T.next)>=0))return!1;T=T.nextZ}for(;w&&w.z>=_;){if(w.x>=g&&w.x<=M&&w.y>=y&&w.y<=x&&w!==i&&w!==a&&Mo(c,f,u,p,h,m,w.x,w.y)&&Xt(w.prev,w,w.next)>=0)return!1;w=w.prevZ}for(;T&&T.z<=E;){if(T.x>=g&&T.x<=M&&T.y>=y&&T.y<=x&&T!==i&&T!==a&&Mo(c,f,u,p,h,m,T.x,T.y)&&Xt(T.prev,T,T.next)>=0)return!1;T=T.nextZ}return!0}function RT(r,e,t){let n=r;do{const i=n.prev,s=n.next.next;!yh(i,s)&&J_(i,n,n.next,s)&&Ga(i,s)&&Ga(s,i)&&(e.push(i.i/t|0),e.push(n.i/t|0),e.push(s.i/t|0),Wa(n),Wa(n.next),n=r=s),n=n.next}while(n!==r);return Cs(n)}function PT(r,e,t,n,i,s){let a=r;do{let c=a.next.next;for(;c!==a.prev;){if(a.i!==c.i&&zT(a,c)){let u=K_(a,c);a=Cs(a,a.next),u=Cs(u,u.next),Va(a,e,t,n,i,s,0),Va(u,e,t,n,i,s,0);return}c=c.next}a=a.next}while(a!==r)}function IT(r,e,t,n){const i=[];let s,a,c,u,h;for(s=0,a=e.length;s<a;s++)c=e[s]*n,u=s<a-1?e[s+1]*n:r.length,h=j_(r,c,u,n,!1),h===h.next&&(h.steiner=!0),i.push(BT(h));for(i.sort(LT),s=0;s<i.length;s++)t=DT(i[s],t);return t}function LT(r,e){return r.x-e.x}function DT(r,e){const t=UT(r,e);if(!t)return e;const n=K_(t,r);return Cs(n,n.next),Cs(t,t.next)}function UT(r,e){let t=e,n=-1/0,i;const s=r.x,a=r.y;do{if(a<=t.y&&a>=t.next.y&&t.next.y!==t.y){const m=t.x+(a-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(m<=s&&m>n&&(n=m,i=t.x<t.next.x?t:t.next,m===s))return i}t=t.next}while(t!==e);if(!i)return null;const c=i,u=i.x,h=i.y;let f=1/0,p;t=i;do s>=t.x&&t.x>=u&&s!==t.x&&Mo(a<h?s:n,a,u,h,a<h?n:s,a,t.x,t.y)&&(p=Math.abs(a-t.y)/(s-t.x),Ga(t,r)&&(p<f||p===f&&(t.x>i.x||t.x===i.x&&NT(i,t)))&&(i=t,f=p)),t=t.next;while(t!==c);return i}function NT(r,e){return Xt(r.prev,r,e.prev)<0&&Xt(e.next,r,r.next)<0}function OT(r,e,t,n){let i=r;do i.z===0&&(i.z=Jd(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==r);i.prevZ.nextZ=null,i.prevZ=null,FT(i)}function FT(r){let e,t,n,i,s,a,c,u,h=1;do{for(t=r,r=null,s=null,a=0;t;){for(a++,n=t,c=0,e=0;e<h&&(c++,n=n.nextZ,!!n);e++);for(u=h;c>0||u>0&&n;)c!==0&&(u===0||!n||t.z<=n.z)?(i=t,t=t.nextZ,c--):(i=n,n=n.nextZ,u--),s?s.nextZ=i:r=i,i.prevZ=s,s=i;t=n}s.nextZ=null,h*=2}while(a>1);return r}function Jd(r,e,t,n,i){return r=(r-t)*i|0,e=(e-n)*i|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,r|e<<1}function BT(r){let e=r,t=r;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==r);return t}function Mo(r,e,t,n,i,s,a,c){return(i-a)*(e-c)>=(r-a)*(s-c)&&(r-a)*(n-c)>=(t-a)*(e-c)&&(t-a)*(s-c)>=(i-a)*(n-c)}function zT(r,e){return r.next.i!==e.i&&r.prev.i!==e.i&&!kT(r,e)&&(Ga(r,e)&&Ga(e,r)&&HT(r,e)&&(Xt(r.prev,r,e.prev)||Xt(r,e.prev,e))||yh(r,e)&&Xt(r.prev,r,r.next)>0&&Xt(e.prev,e,e.next)>0)}function Xt(r,e,t){return(e.y-r.y)*(t.x-e.x)-(e.x-r.x)*(t.y-e.y)}function yh(r,e){return r.x===e.x&&r.y===e.y}function J_(r,e,t,n){const i=Xc(Xt(r,e,t)),s=Xc(Xt(r,e,n)),a=Xc(Xt(t,n,r)),c=Xc(Xt(t,n,e));return!!(i!==s&&a!==c||i===0&&Wc(r,t,e)||s===0&&Wc(r,n,e)||a===0&&Wc(t,r,n)||c===0&&Wc(t,e,n))}function Wc(r,e,t){return e.x<=Math.max(r.x,t.x)&&e.x>=Math.min(r.x,t.x)&&e.y<=Math.max(r.y,t.y)&&e.y>=Math.min(r.y,t.y)}function Xc(r){return r>0?1:r<0?-1:0}function kT(r,e){let t=r;do{if(t.i!==r.i&&t.next.i!==r.i&&t.i!==e.i&&t.next.i!==e.i&&J_(t,t.next,r,e))return!0;t=t.next}while(t!==r);return!1}function Ga(r,e){return Xt(r.prev,r,r.next)<0?Xt(r,e,r.next)>=0&&Xt(r,r.prev,e)>=0:Xt(r,e,r.prev)<0||Xt(r,r.next,e)<0}function HT(r,e){let t=r,n=!1;const i=(r.x+e.x)/2,s=(r.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&i<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==r);return n}function K_(r,e){const t=new Kd(r.i,r.x,r.y),n=new Kd(e.i,e.x,e.y),i=r.next,s=e.prev;return r.next=e,e.prev=r,t.next=i,i.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function O0(r,e,t,n){const i=new Kd(r,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Wa(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function Kd(r,e,t){this.i=r,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function VT(r,e,t,n){let i=0;for(let s=e,a=t-n;s<t;s+=n)i+=(r[a]-r[s])*(r[s+1]+r[a+1]),a=s;return i}class qi{static area(e){const t=e.length;let n=0;for(let i=t-1,s=0;s<t;i=s++)n+=e[i].x*e[s].y-e[s].x*e[i].y;return n*.5}static isClockWise(e){return qi.area(e)<0}static triangulateShape(e,t){const n=[],i=[],s=[];F0(e),B0(n,e);let a=e.length;t.forEach(F0);for(let u=0;u<t.length;u++)i.push(a),a+=t[u].length,B0(n,t[u]);const c=TT.triangulate(n,i);for(let u=0;u<c.length;u+=3)s.push(c.slice(u,u+3));return s}}function F0(r){const e=r.length;e>2&&r[e-1].equals(r[0])&&r.pop()}function B0(r,e){for(let t=0;t<e.length;t++)r.push(e[t].x),r.push(e[t].y)}class xh extends vt{constructor(e=new Br([new fe(.5,.5),new fe(-.5,.5),new fe(-.5,-.5),new fe(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,i=[],s=[];for(let c=0,u=e.length;c<u;c++){const h=e[c];a(h)}this.setAttribute("position",new We(i,3)),this.setAttribute("uv",new We(s,2)),this.computeVertexNormals();function a(c){const u=[],h=t.curveSegments!==void 0?t.curveSegments:12,f=t.steps!==void 0?t.steps:1,p=t.depth!==void 0?t.depth:1;let m=t.bevelEnabled!==void 0?t.bevelEnabled:!0,g=t.bevelThickness!==void 0?t.bevelThickness:.2,y=t.bevelSize!==void 0?t.bevelSize:g-.1,M=t.bevelOffset!==void 0?t.bevelOffset:0,x=t.bevelSegments!==void 0?t.bevelSegments:3;const _=t.extrudePath,E=t.UVGenerator!==void 0?t.UVGenerator:GT;let w,T=!1,O,P,I,N;_&&(w=_.getSpacedPoints(f),T=!0,m=!1,O=_.computeFrenetFrames(f,!1),P=new D,I=new D,N=new D),m||(x=0,g=0,y=0,M=0);const W=c.extractPoints(h);let b=W.shape;const C=W.holes;if(!qi.isClockWise(b)){b=b.reverse();for(let he=0,F=C.length;he<F;he++){const we=C[he];qi.isClockWise(we)&&(C[he]=we.reverse())}}const q=qi.triangulateShape(b,C),K=b;for(let he=0,F=C.length;he<F;he++){const we=C[he];b=b.concat(we)}function le(he,F,we){return F||console.error("THREE.ExtrudeGeometry: vec does not exist"),he.clone().addScaledVector(F,we)}const Z=b.length,me=q.length;function z(he,F,we){let Me,ge,Ee;const je=he.x-F.x,De=he.y-F.y,U=we.x-he.x,R=we.y-he.y,j=je*je+De*De,oe=je*R-De*U;if(Math.abs(oe)>Number.EPSILON){const ue=Math.sqrt(j),ae=Math.sqrt(U*U+R*R),Ye=F.x-De/ue,Te=F.y+je/ue,Oe=we.x-R/ae,St=we.y+U/ae,ve=((Oe-Ye)*R-(St-Te)*U)/(je*R-De*U);Me=Ye+je*ve-he.x,ge=Te+De*ve-he.y;const Fe=Me*Me+ge*ge;if(Fe<=2)return new fe(Me,ge);Ee=Math.sqrt(Fe/2)}else{let ue=!1;je>Number.EPSILON?U>Number.EPSILON&&(ue=!0):je<-Number.EPSILON?U<-Number.EPSILON&&(ue=!0):Math.sign(De)===Math.sign(R)&&(ue=!0),ue?(Me=-De,ge=je,Ee=Math.sqrt(j)):(Me=je,ge=De,Ee=Math.sqrt(j/2))}return new fe(Me/Ee,ge/Ee)}const se=[];for(let he=0,F=K.length,we=F-1,Me=he+1;he<F;he++,we++,Me++)we===F&&(we=0),Me===F&&(Me=0),se[he]=z(K[he],K[we],K[Me]);const te=[];let ce,Be=se.concat();for(let he=0,F=C.length;he<F;he++){const we=C[he];ce=[];for(let Me=0,ge=we.length,Ee=ge-1,je=Me+1;Me<ge;Me++,Ee++,je++)Ee===ge&&(Ee=0),je===ge&&(je=0),ce[Me]=z(we[Me],we[Ee],we[je]);te.push(ce),Be=Be.concat(ce)}for(let he=0;he<x;he++){const F=he/x,we=g*Math.cos(F*Math.PI/2),Me=y*Math.sin(F*Math.PI/2)+M;for(let ge=0,Ee=K.length;ge<Ee;ge++){const je=le(K[ge],se[ge],Me);Se(je.x,je.y,-we)}for(let ge=0,Ee=C.length;ge<Ee;ge++){const je=C[ge];ce=te[ge];for(let De=0,U=je.length;De<U;De++){const R=le(je[De],ce[De],Me);Se(R.x,R.y,-we)}}}const Xe=y+M;for(let he=0;he<Z;he++){const F=m?le(b[he],Be[he],Xe):b[he];T?(I.copy(O.normals[0]).multiplyScalar(F.x),P.copy(O.binormals[0]).multiplyScalar(F.y),N.copy(w[0]).add(I).add(P),Se(N.x,N.y,N.z)):Se(F.x,F.y,0)}for(let he=1;he<=f;he++)for(let F=0;F<Z;F++){const we=m?le(b[F],Be[F],Xe):b[F];T?(I.copy(O.normals[he]).multiplyScalar(we.x),P.copy(O.binormals[he]).multiplyScalar(we.y),N.copy(w[he]).add(I).add(P),Se(N.x,N.y,N.z)):Se(we.x,we.y,p/f*he)}for(let he=x-1;he>=0;he--){const F=he/x,we=g*Math.cos(F*Math.PI/2),Me=y*Math.sin(F*Math.PI/2)+M;for(let ge=0,Ee=K.length;ge<Ee;ge++){const je=le(K[ge],se[ge],Me);Se(je.x,je.y,p+we)}for(let ge=0,Ee=C.length;ge<Ee;ge++){const je=C[ge];ce=te[ge];for(let De=0,U=je.length;De<U;De++){const R=le(je[De],ce[De],Me);T?Se(R.x,R.y+w[f-1].y,w[f-1].x+we):Se(R.x,R.y,p+we)}}}ne(),pe();function ne(){const he=i.length/3;if(m){let F=0,we=Z*F;for(let Me=0;Me<me;Me++){const ge=q[Me];rt(ge[2]+we,ge[1]+we,ge[0]+we)}F=f+x*2,we=Z*F;for(let Me=0;Me<me;Me++){const ge=q[Me];rt(ge[0]+we,ge[1]+we,ge[2]+we)}}else{for(let F=0;F<me;F++){const we=q[F];rt(we[2],we[1],we[0])}for(let F=0;F<me;F++){const we=q[F];rt(we[0]+Z*f,we[1]+Z*f,we[2]+Z*f)}}n.addGroup(he,i.length/3-he,0)}function pe(){const he=i.length/3;let F=0;be(K,F),F+=K.length;for(let we=0,Me=C.length;we<Me;we++){const ge=C[we];be(ge,F),F+=ge.length}n.addGroup(he,i.length/3-he,1)}function be(he,F){let we=he.length;for(;--we>=0;){const Me=we;let ge=we-1;ge<0&&(ge=he.length-1);for(let Ee=0,je=f+x*2;Ee<je;Ee++){const De=Z*Ee,U=Z*(Ee+1),R=F+Me+De,j=F+ge+De,oe=F+ge+U,ue=F+Me+U;Qe(R,j,oe,ue)}}}function Se(he,F,we){u.push(he),u.push(F),u.push(we)}function rt(he,F,we){st(he),st(F),st(we);const Me=i.length/3,ge=E.generateTopUV(n,i,Me-3,Me-2,Me-1);nt(ge[0]),nt(ge[1]),nt(ge[2])}function Qe(he,F,we,Me){st(he),st(F),st(Me),st(F),st(we),st(Me);const ge=i.length/3,Ee=E.generateSideWallUV(n,i,ge-6,ge-3,ge-2,ge-1);nt(Ee[0]),nt(Ee[1]),nt(Ee[3]),nt(Ee[1]),nt(Ee[2]),nt(Ee[3])}function st(he){i.push(u[he*3+0]),i.push(u[he*3+1]),i.push(u[he*3+2])}function nt(he){s.push(he.x),s.push(he.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return WT(t,n,e)}static fromJSON(e,t){const n=[];for(let s=0,a=e.shapes.length;s<a;s++){const c=t[e.shapes[s]];n.push(c)}const i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new Yu[i.type]().fromJSON(i)),new xh(n,e.options)}}const GT={generateTopUV:function(r,e,t,n,i){const s=e[t*3],a=e[t*3+1],c=e[n*3],u=e[n*3+1],h=e[i*3],f=e[i*3+1];return[new fe(s,a),new fe(c,u),new fe(h,f)]},generateSideWallUV:function(r,e,t,n,i,s){const a=e[t*3],c=e[t*3+1],u=e[t*3+2],h=e[n*3],f=e[n*3+1],p=e[n*3+2],m=e[i*3],g=e[i*3+1],y=e[i*3+2],M=e[s*3],x=e[s*3+1],_=e[s*3+2];return Math.abs(c-f)<Math.abs(a-h)?[new fe(a,1-u),new fe(h,1-p),new fe(m,1-y),new fe(M,1-_)]:[new fe(c,1-u),new fe(f,1-p),new fe(g,1-y),new fe(x,1-_)]}};function WT(r,e,t){if(t.shapes=[],Array.isArray(r))for(let n=0,i=r.length;n<i;n++){const s=r[n];t.shapes.push(s.uuid)}else t.shapes.push(r.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Sh extends Gr{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Sh(e.radius,e.detail)}}class rl extends Gr{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new rl(e.radius,e.detail)}}class Mh extends vt{constructor(e=.5,t=1,n=32,i=1,s=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:s,thetaLength:a},n=Math.max(3,n),i=Math.max(1,i);const c=[],u=[],h=[],f=[];let p=e;const m=(t-e)/i,g=new D,y=new fe;for(let M=0;M<=i;M++){for(let x=0;x<=n;x++){const _=s+x/n*a;g.x=p*Math.cos(_),g.y=p*Math.sin(_),u.push(g.x,g.y,g.z),h.push(0,0,1),y.x=(g.x/t+1)/2,y.y=(g.y/t+1)/2,f.push(y.x,y.y)}p+=m}for(let M=0;M<i;M++){const x=M*(n+1);for(let _=0;_<n;_++){const E=_+x,w=E,T=E+n+1,O=E+n+2,P=E+1;c.push(w,T,P),c.push(T,O,P)}}this.setIndex(c),this.setAttribute("position",new We(u,3)),this.setAttribute("normal",new We(h,3)),this.setAttribute("uv",new We(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Mh(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class wh extends vt{constructor(e=new Br([new fe(0,.5),new fe(-.5,-.5),new fe(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],i=[],s=[],a=[];let c=0,u=0;if(Array.isArray(e)===!1)h(e);else for(let f=0;f<e.length;f++)h(e[f]),this.addGroup(c,u,f),c+=u,u=0;this.setIndex(n),this.setAttribute("position",new We(i,3)),this.setAttribute("normal",new We(s,3)),this.setAttribute("uv",new We(a,2));function h(f){const p=i.length/3,m=f.extractPoints(t);let g=m.shape;const y=m.holes;qi.isClockWise(g)===!1&&(g=g.reverse());for(let x=0,_=y.length;x<_;x++){const E=y[x];qi.isClockWise(E)===!0&&(y[x]=E.reverse())}const M=qi.triangulateShape(g,y);for(let x=0,_=y.length;x<_;x++){const E=y[x];g=g.concat(E)}for(let x=0,_=g.length;x<_;x++){const E=g[x];i.push(E.x,E.y,0),s.push(0,0,1),a.push(E.x,E.y)}for(let x=0,_=M.length;x<_;x++){const E=M[x],w=E[0]+p,T=E[1]+p,O=E[2]+p;n.push(w,T,O),u+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return XT(t,e)}static fromJSON(e,t){const n=[];for(let i=0,s=e.shapes.length;i<s;i++){const a=t[e.shapes[i]];n.push(a)}return new wh(n,e.curveSegments)}}function XT(r,e){if(e.shapes=[],Array.isArray(r))for(let t=0,n=r.length;t<n;t++){const i=r[t];e.shapes.push(i.uuid)}else e.shapes.push(r.uuid);return e}class sl extends vt{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,a=0,c=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:a,thetaLength:c},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const u=Math.min(a+c,Math.PI);let h=0;const f=[],p=new D,m=new D,g=[],y=[],M=[],x=[];for(let _=0;_<=n;_++){const E=[],w=_/n;let T=0;_===0&&a===0?T=.5/t:_===n&&u===Math.PI&&(T=-.5/t);for(let O=0;O<=t;O++){const P=O/t;p.x=-e*Math.cos(i+P*s)*Math.sin(a+w*c),p.y=e*Math.cos(a+w*c),p.z=e*Math.sin(i+P*s)*Math.sin(a+w*c),y.push(p.x,p.y,p.z),m.copy(p).normalize(),M.push(m.x,m.y,m.z),x.push(P+T,1-w),E.push(h++)}f.push(E)}for(let _=0;_<n;_++)for(let E=0;E<t;E++){const w=f[_][E+1],T=f[_][E],O=f[_+1][E],P=f[_+1][E+1];(_!==0||a>0)&&g.push(w,T,P),(_!==n-1||u<Math.PI)&&g.push(T,O,P)}this.setIndex(g),this.setAttribute("position",new We(y,3)),this.setAttribute("normal",new We(M,3)),this.setAttribute("uv",new We(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new sl(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Eh extends Gr{constructor(e=1,t=0){const n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],i=[2,1,0,0,3,2,1,3,0,2,3,1];super(n,i,e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Eh(e.radius,e.detail)}}class Ah extends vt{constructor(e=1,t=.4,n=12,i=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);const a=[],c=[],u=[],h=[],f=new D,p=new D,m=new D;for(let g=0;g<=n;g++)for(let y=0;y<=i;y++){const M=y/i*s,x=g/n*Math.PI*2;p.x=(e+t*Math.cos(x))*Math.cos(M),p.y=(e+t*Math.cos(x))*Math.sin(M),p.z=t*Math.sin(x),c.push(p.x,p.y,p.z),f.x=e*Math.cos(M),f.y=e*Math.sin(M),m.subVectors(p,f).normalize(),u.push(m.x,m.y,m.z),h.push(y/i),h.push(g/n)}for(let g=1;g<=n;g++)for(let y=1;y<=i;y++){const M=(i+1)*g+y-1,x=(i+1)*(g-1)+y-1,_=(i+1)*(g-1)+y,E=(i+1)*g+y;a.push(M,x,E),a.push(x,_,E)}this.setIndex(a),this.setAttribute("position",new We(c,3)),this.setAttribute("normal",new We(u,3)),this.setAttribute("uv",new We(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ah(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Th extends vt{constructor(e=1,t=.4,n=64,i=8,s=2,a=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:n,radialSegments:i,p:s,q:a},n=Math.floor(n),i=Math.floor(i);const c=[],u=[],h=[],f=[],p=new D,m=new D,g=new D,y=new D,M=new D,x=new D,_=new D;for(let w=0;w<=n;++w){const T=w/n*s*Math.PI*2;E(T,s,a,e,g),E(T+.01,s,a,e,y),x.subVectors(y,g),_.addVectors(y,g),M.crossVectors(x,_),_.crossVectors(M,x),M.normalize(),_.normalize();for(let O=0;O<=i;++O){const P=O/i*Math.PI*2,I=-t*Math.cos(P),N=t*Math.sin(P);p.x=g.x+(I*_.x+N*M.x),p.y=g.y+(I*_.y+N*M.y),p.z=g.z+(I*_.z+N*M.z),u.push(p.x,p.y,p.z),m.subVectors(p,g).normalize(),h.push(m.x,m.y,m.z),f.push(w/n),f.push(O/i)}}for(let w=1;w<=n;w++)for(let T=1;T<=i;T++){const O=(i+1)*(w-1)+(T-1),P=(i+1)*w+(T-1),I=(i+1)*w+T,N=(i+1)*(w-1)+T;c.push(O,P,N),c.push(P,I,N)}this.setIndex(c),this.setAttribute("position",new We(u,3)),this.setAttribute("normal",new We(h,3)),this.setAttribute("uv",new We(f,2));function E(w,T,O,P,I){const N=Math.cos(w),W=Math.sin(w),b=O/T*w,C=Math.cos(b);I.x=P*(2+C)*.5*N,I.y=P*(2+C)*W*.5,I.z=P*Math.sin(b)*.5}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Th(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}}class bh extends vt{constructor(e=new Lp(new D(-1,-1,0),new D(-1,1,0),new D(1,1,0)),t=64,n=1,i=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:i,closed:s};const a=e.computeFrenetFrames(t,s);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const c=new D,u=new D,h=new fe;let f=new D;const p=[],m=[],g=[],y=[];M(),this.setIndex(y),this.setAttribute("position",new We(p,3)),this.setAttribute("normal",new We(m,3)),this.setAttribute("uv",new We(g,2));function M(){for(let w=0;w<t;w++)x(w);x(s===!1?t:0),E(),_()}function x(w){f=e.getPointAt(w/t,f);const T=a.normals[w],O=a.binormals[w];for(let P=0;P<=i;P++){const I=P/i*Math.PI*2,N=Math.sin(I),W=-Math.cos(I);u.x=W*T.x+N*O.x,u.y=W*T.y+N*O.y,u.z=W*T.z+N*O.z,u.normalize(),m.push(u.x,u.y,u.z),c.x=f.x+n*u.x,c.y=f.y+n*u.y,c.z=f.z+n*u.z,p.push(c.x,c.y,c.z)}}function _(){for(let w=1;w<=t;w++)for(let T=1;T<=i;T++){const O=(i+1)*(w-1)+(T-1),P=(i+1)*w+(T-1),I=(i+1)*w+T,N=(i+1)*(w-1)+T;y.push(O,P,N),y.push(P,I,N)}}function E(){for(let w=0;w<=t;w++)for(let T=0;T<=i;T++)h.x=w/t,h.y=T/i,g.push(h.x,h.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new bh(new Yu[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class Up extends vt{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const t=[],n=new Set,i=new D,s=new D;if(e.index!==null){const a=e.attributes.position,c=e.index;let u=e.groups;u.length===0&&(u=[{start:0,count:c.count,materialIndex:0}]);for(let h=0,f=u.length;h<f;++h){const p=u[h],m=p.start,g=p.count;for(let y=m,M=m+g;y<M;y+=3)for(let x=0;x<3;x++){const _=c.getX(y+x),E=c.getX(y+(x+1)%3);i.fromBufferAttribute(a,_),s.fromBufferAttribute(a,E),z0(i,s,n)===!0&&(t.push(i.x,i.y,i.z),t.push(s.x,s.y,s.z))}}}else{const a=e.attributes.position;for(let c=0,u=a.count/3;c<u;c++)for(let h=0;h<3;h++){const f=3*c+h,p=3*c+(h+1)%3;i.fromBufferAttribute(a,f),s.fromBufferAttribute(a,p),z0(i,s,n)===!0&&(t.push(i.x,i.y,i.z),t.push(s.x,s.y,s.z))}}this.setAttribute("position",new We(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}function z0(r,e,t){const n=`${r.x},${r.y},${r.z}-${e.x},${e.y},${e.z}`,i=`${e.x},${e.y},${e.z}-${r.x},${r.y},${r.z}`;return t.has(n)===!0||t.has(i)===!0?!1:(t.add(n),t.add(i),!0)}var k0=Object.freeze({__proto__:null,BoxGeometry:Ps,CapsuleGeometry:mh,CircleGeometry:gh,ConeGeometry:vh,CylinderGeometry:No,DodecahedronGeometry:_h,EdgesGeometry:Z_,ExtrudeGeometry:xh,IcosahedronGeometry:Sh,LatheGeometry:il,OctahedronGeometry:rl,PlaneGeometry:Do,PolyhedronGeometry:Gr,RingGeometry:Mh,ShapeGeometry:wh,SphereGeometry:sl,TetrahedronGeometry:Eh,TorusGeometry:Ah,TorusKnotGeometry:Th,TubeGeometry:bh,WireframeGeometry:Up});class Q_ extends In{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new Pe(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}class $_ extends ri{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Np extends In{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Pe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Pe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Hr,this.normalScale=new fe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ii,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Op extends Np{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new fe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Zt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Pe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Pe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Pe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class ey extends In{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Pe(16777215),this.specular=new Pe(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Pe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Hr,this.normalScale=new fe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ii,this.combine=Ja,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ty extends In{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new Pe(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Pe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Hr,this.normalScale=new fe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}class ny extends In{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Hr,this.normalScale=new fe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}class iy extends In{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Pe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Pe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Hr,this.normalScale=new fe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ii,this.combine=Ja,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ry extends In{constructor(e){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new Pe(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Hr,this.normalScale=new fe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.flatShading=e.flatShading,this.fog=e.fog,this}}class sy extends kn{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}function _s(r,e,t){return!r||!t&&r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function oy(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function ay(r){function e(i,s){return r[i]-r[s]}const t=r.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Qd(r,e,t){const n=r.length,i=new r.constructor(n);for(let s=0,a=0;a!==n;++s){const c=t[s]*e;for(let u=0;u!==e;++u)i[a++]=r[c+u]}return i}function Fp(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let a=s[n];if(a!==void 0)if(Array.isArray(a))do a=s[n],a!==void 0&&(e.push(s.time),t.push.apply(t,a)),s=r[i++];while(s!==void 0);else if(a.toArray!==void 0)do a=s[n],a!==void 0&&(e.push(s.time),a.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do a=s[n],a!==void 0&&(e.push(s.time),t.push(a)),s=r[i++];while(s!==void 0)}function YT(r,e,t,n,i=30){const s=r.clone();s.name=e;const a=[];for(let u=0;u<s.tracks.length;++u){const h=s.tracks[u],f=h.getValueSize(),p=[],m=[];for(let g=0;g<h.times.length;++g){const y=h.times[g]*i;if(!(y<t||y>=n)){p.push(h.times[g]);for(let M=0;M<f;++M)m.push(h.values[g*f+M])}}p.length!==0&&(h.times=_s(p,h.times.constructor),h.values=_s(m,h.values.constructor),a.push(h))}s.tracks=a;let c=1/0;for(let u=0;u<s.tracks.length;++u)c>s.tracks[u].times[0]&&(c=s.tracks[u].times[0]);for(let u=0;u<s.tracks.length;++u)s.tracks[u].shift(-1*c);return s.resetDuration(),s}function qT(r,e=0,t=r,n=30){n<=0&&(n=30);const i=t.tracks.length,s=e/n;for(let a=0;a<i;++a){const c=t.tracks[a],u=c.ValueTypeName;if(u==="bool"||u==="string")continue;const h=r.tracks.find(function(_){return _.name===c.name&&_.ValueTypeName===u});if(h===void 0)continue;let f=0;const p=c.getValueSize();c.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(f=p/3);let m=0;const g=h.getValueSize();h.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(m=g/3);const y=c.times.length-1;let M;if(s<=c.times[0]){const _=f,E=p-f;M=c.values.slice(_,E)}else if(s>=c.times[y]){const _=y*p+f,E=_+p-f;M=c.values.slice(_,E)}else{const _=c.createInterpolant(),E=f,w=p-f;_.evaluate(s),M=_.resultBuffer.slice(E,w)}u==="quaternion"&&new Yn().fromArray(M).normalize().conjugate().toArray(M);const x=h.times.length;for(let _=0;_<x;++_){const E=_*g+m;if(u==="quaternion")Yn.multiplyQuaternionsFlat(h.values,E,M,0,h.values,E);else{const w=g-m*2;for(let T=0;T<w;++T)h.values[E+T]-=M[T]}}}return r.blendMode=mp,r}const ZT={convertArray:_s,isTypedArray:oy,getKeyframeOrder:ay,sortedArray:Qd,flattenJSON:Fp,subclip:YT,makeClipAdditive:qT};class ol{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],s=t[n-1];e:{t:{let a;n:{i:if(!(e<i)){for(let c=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===c)break;if(s=i,i=t[++n],e<i)break t}a=t.length;break n}if(!(e>=s)){const c=t[1];e<c&&(n=2,s=c);for(let u=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===u)break;if(i=s,s=t[--n-1],e>=s)break t}a=n,n=0;break n}break e}for(;n<a;){const c=n+a>>>1;e<t[c]?a=c:n=c+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let a=0;a!==i;++a)t[a]=n[s+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class ly extends ol{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ms,endingEnd:ms}}intervalChanged_(e,t,n){const i=this.parameterPositions;let s=e-2,a=e+1,c=i[s],u=i[a];if(c===void 0)switch(this.getSettings_().endingStart){case gs:s=e,c=2*t-n;break;case Da:s=i.length-2,c=t+i[s]-i[s+1];break;default:s=e,c=n}if(u===void 0)switch(this.getSettings_().endingEnd){case gs:a=e,u=2*n-t;break;case Da:a=1,u=n+i[1]-i[0];break;default:a=e-1,u=t}const h=(n-t)*.5,f=this.valueSize;this._weightPrev=h/(t-c),this._weightNext=h/(u-n),this._offsetPrev=s*f,this._offsetNext=a*f}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,c=this.valueSize,u=e*c,h=u-c,f=this._offsetPrev,p=this._offsetNext,m=this._weightPrev,g=this._weightNext,y=(n-t)/(i-t),M=y*y,x=M*y,_=-m*x+2*m*M-m*y,E=(1+m)*x+(-1.5-2*m)*M+(-.5+m)*y+1,w=(-1-g)*x+(1.5+g)*M+.5*y,T=g*x-g*M;for(let O=0;O!==c;++O)s[O]=_*a[f+O]+E*a[h+O]+w*a[u+O]+T*a[p+O];return s}}class Bp extends ol{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,c=this.valueSize,u=e*c,h=u-c,f=(n-t)/(i-t),p=1-f;for(let m=0;m!==c;++m)s[m]=a[h+m]*p+a[u+m]*f;return s}}class cy extends ol{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Pi{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=_s(t,this.TimeBufferType),this.values=_s(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:_s(e.times,Array),values:_s(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new cy(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Bp(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new ly(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case La:t=this.InterpolantFactoryMethodDiscrete;break;case Gu:t=this.InterpolantFactoryMethodLinear;break;case ru:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return La;case this.InterpolantFactoryMethodLinear:return Gu;case this.InterpolantFactoryMethodSmooth:return ru}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let s=0,a=i-1;for(;s!==i&&n[s]<e;)++s;for(;a!==-1&&n[a]>t;)--a;if(++a,s!==0||a!==i){s>=a&&(a=Math.max(a,1),s=a-1);const c=this.getValueSize();this.times=n.slice(s,a),this.values=this.values.slice(s*c,a*c)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let c=0;c!==s;c++){const u=n[c];if(typeof u=="number"&&isNaN(u)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,c,u),e=!1;break}if(a!==null&&a>u){console.error("THREE.KeyframeTrack: Out of order keys.",this,c,u,a),e=!1;break}a=u}if(i!==void 0&&oy(i))for(let c=0,u=i.length;c!==u;++c){const h=i[c];if(isNaN(h)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,c,h),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===ru,s=e.length-1;let a=1;for(let c=1;c<s;++c){let u=!1;const h=e[c],f=e[c+1];if(h!==f&&(c!==1||h!==e[0]))if(i)u=!0;else{const p=c*n,m=p-n,g=p+n;for(let y=0;y!==n;++y){const M=t[p+y];if(M!==t[m+y]||M!==t[g+y]){u=!0;break}}}if(u){if(c!==a){e[a]=e[c];const p=c*n,m=a*n;for(let g=0;g!==n;++g)t[m+g]=t[p+g]}++a}}if(s>0){e[a]=e[s];for(let c=s*n,u=a*n,h=0;h!==n;++h)t[u+h]=t[c+h];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}Pi.prototype.TimeBufferType=Float32Array;Pi.prototype.ValueBufferType=Float32Array;Pi.prototype.DefaultInterpolation=Gu;class Is extends Pi{constructor(e,t,n){super(e,t,n)}}Is.prototype.ValueTypeName="bool";Is.prototype.ValueBufferType=Array;Is.prototype.DefaultInterpolation=La;Is.prototype.InterpolantFactoryMethodLinear=void 0;Is.prototype.InterpolantFactoryMethodSmooth=void 0;class zp extends Pi{}zp.prototype.ValueTypeName="color";class Xa extends Pi{}Xa.prototype.ValueTypeName="number";class uy extends ol{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,c=this.valueSize,u=(n-t)/(i-t);let h=e*c;for(let f=h+c;h!==f;h+=4)Yn.slerpFlat(s,0,a,h-c,a,h,u);return s}}class al extends Pi{InterpolantFactoryMethodLinear(e){return new uy(this.times,this.values,this.getValueSize(),e)}}al.prototype.ValueTypeName="quaternion";al.prototype.InterpolantFactoryMethodSmooth=void 0;class Ls extends Pi{constructor(e,t,n){super(e,t,n)}}Ls.prototype.ValueTypeName="string";Ls.prototype.ValueBufferType=Array;Ls.prototype.DefaultInterpolation=La;Ls.prototype.InterpolantFactoryMethodLinear=void 0;Ls.prototype.InterpolantFactoryMethodSmooth=void 0;class Ya extends Pi{}Ya.prototype.ValueTypeName="vector";class qa{constructor(e="",t=-1,n=[],i=rh){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=ni(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,c=n.length;a!==c;++a)t.push(JT(n[a]).scale(i));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,a=n.length;s!==a;++s)t.push(Pi.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const s=t.length,a=[];for(let c=0;c<s;c++){let u=[],h=[];u.push((c+s-1)%s,c,(c+1)%s),h.push(0,1,0);const f=ay(u);u=Qd(u,1,f),h=Qd(h,1,f),!i&&u[0]===0&&(u.push(s),h.push(h[0])),a.push(new Xa(".morphTargetInfluences["+t[c].name+"]",u,h).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let c=0,u=e.length;c<u;c++){const h=e[c],f=h.name.match(s);if(f&&f.length>1){const p=f[1];let m=i[p];m||(i[p]=m=[]),m.push(h)}}const a=[];for(const c in i)a.push(this.CreateFromMorphTargetSequence(c,i[c],t,n));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(p,m,g,y,M){if(g.length!==0){const x=[],_=[];Fp(g,x,_,y),x.length!==0&&M.push(new p(m,x,_))}},i=[],s=e.name||"default",a=e.fps||30,c=e.blendMode;let u=e.length||-1;const h=e.hierarchy||[];for(let p=0;p<h.length;p++){const m=h[p].keys;if(!(!m||m.length===0))if(m[0].morphTargets){const g={};let y;for(y=0;y<m.length;y++)if(m[y].morphTargets)for(let M=0;M<m[y].morphTargets.length;M++)g[m[y].morphTargets[M]]=-1;for(const M in g){const x=[],_=[];for(let E=0;E!==m[y].morphTargets.length;++E){const w=m[y];x.push(w.time),_.push(w.morphTarget===M?1:0)}i.push(new Xa(".morphTargetInfluence["+M+"]",x,_))}u=g.length*a}else{const g=".bones["+t[p].name+"]";n(Ya,g+".position",m,"pos",i),n(al,g+".quaternion",m,"rot",i),n(Ya,g+".scale",m,"scl",i)}}return i.length===0?null:new this(s,u,i,c)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function jT(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Xa;case"vector":case"vector2":case"vector3":case"vector4":return Ya;case"color":return zp;case"quaternion":return al;case"bool":case"boolean":return Is;case"string":return Ls}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function JT(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=jT(r.type);if(r.times===void 0){const t=[],n=[];Fp(r.keys,t,n,"value"),r.times=t,r.values=n}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}const fr={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class kp{constructor(e,t,n){const i=this;let s=!1,a=0,c=0,u;const h=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(f){c++,s===!1&&i.onStart!==void 0&&i.onStart(f,a,c),s=!0},this.itemEnd=function(f){a++,i.onProgress!==void 0&&i.onProgress(f,a,c),a===c&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(f){i.onError!==void 0&&i.onError(f)},this.resolveURL=function(f){return u?u(f):f},this.setURLModifier=function(f){return u=f,this},this.addHandler=function(f,p){return h.push(f,p),this},this.removeHandler=function(f){const p=h.indexOf(f);return p!==-1&&h.splice(p,2),this},this.getHandler=function(f){for(let p=0,m=h.length;p<m;p+=2){const g=h[p],y=h[p+1];if(g.global&&(g.lastIndex=0),g.test(f))return y}return null}}}const hy=new kp;class qn{constructor(e){this.manager=e!==void 0?e:hy,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}qn.DEFAULT_MATERIAL_NAME="__DEFAULT";const cr={};class KT extends Error{constructor(e,t){super(e),this.response=t}}class gr extends qn{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=fr.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(cr[e]!==void 0){cr[e].push({onLoad:t,onProgress:n,onError:i});return}cr[e]=[],cr[e].push({onLoad:t,onProgress:n,onError:i});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),c=this.mimeType,u=this.responseType;fetch(a).then(h=>{if(h.status===200||h.status===0){if(h.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||h.body===void 0||h.body.getReader===void 0)return h;const f=cr[e],p=h.body.getReader(),m=h.headers.get("X-File-Size")||h.headers.get("Content-Length"),g=m?parseInt(m):0,y=g!==0;let M=0;const x=new ReadableStream({start(_){E();function E(){p.read().then(({done:w,value:T})=>{if(w)_.close();else{M+=T.byteLength;const O=new ProgressEvent("progress",{lengthComputable:y,loaded:M,total:g});for(let P=0,I=f.length;P<I;P++){const N=f[P];N.onProgress&&N.onProgress(O)}_.enqueue(T),E()}},w=>{_.error(w)})}}});return new Response(x)}else throw new KT(`fetch for "${h.url}" responded with ${h.status}: ${h.statusText}`,h)}).then(h=>{switch(u){case"arraybuffer":return h.arrayBuffer();case"blob":return h.blob();case"document":return h.text().then(f=>new DOMParser().parseFromString(f,c));case"json":return h.json();default:if(c===void 0)return h.text();{const p=/charset="?([^;"\s]*)"?/i.exec(c),m=p&&p[1]?p[1].toLowerCase():void 0,g=new TextDecoder(m);return h.arrayBuffer().then(y=>g.decode(y))}}}).then(h=>{fr.add(e,h);const f=cr[e];delete cr[e];for(let p=0,m=f.length;p<m;p++){const g=f[p];g.onLoad&&g.onLoad(h)}}).catch(h=>{const f=cr[e];if(f===void 0)throw this.manager.itemError(e),h;delete cr[e];for(let p=0,m=f.length;p<m;p++){const g=f[p];g.onError&&g.onError(h)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class QT extends qn{constructor(e){super(e)}load(e,t,n,i){const s=this,a=new gr(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(c){try{t(s.parse(JSON.parse(c)))}catch(u){i?i(u):console.error(u),s.manager.itemError(e)}},n,i)}parse(e){const t=[];for(let n=0;n<e.length;n++){const i=qa.parse(e[n]);t.push(i)}return t}}class $T extends qn{constructor(e){super(e)}load(e,t,n,i){const s=this,a=[],c=new dh,u=new gr(this.manager);u.setPath(this.path),u.setResponseType("arraybuffer"),u.setRequestHeader(this.requestHeader),u.setWithCredentials(s.withCredentials);let h=0;function f(p){u.load(e[p],function(m){const g=s.parse(m,!0);a[p]={width:g.width,height:g.height,format:g.format,mipmaps:g.mipmaps},h+=1,h===6&&(g.mipmapCount===1&&(c.minFilter=jt),c.image=a,c.format=g.format,c.needsUpdate=!0,t&&t(c))},n,i)}if(Array.isArray(e))for(let p=0,m=e.length;p<m;++p)f(p);else u.load(e,function(p){const m=s.parse(p,!0);if(m.isCubemap){const g=m.mipmaps.length/m.mipmapCount;for(let y=0;y<g;y++){a[y]={mipmaps:[]};for(let M=0;M<m.mipmapCount;M++)a[y].mipmaps.push(m.mipmaps[y*m.mipmapCount+M]),a[y].format=m.format,a[y].width=m.width,a[y].height=m.height}c.image=a}else c.image.width=m.width,c.image.height=m.height,c.mipmaps=m.mipmaps;m.mipmapCount===1&&(c.minFilter=jt),c.format=m.format,c.needsUpdate=!0,t&&t(c)},n,i);return c}}class Za extends qn{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=fr.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a;const c=za("img");function u(){f(),fr.add(e,this),t&&t(this),s.manager.itemEnd(e)}function h(p){f(),i&&i(p),s.manager.itemError(e),s.manager.itemEnd(e)}function f(){c.removeEventListener("load",u,!1),c.removeEventListener("error",h,!1)}return c.addEventListener("load",u,!1),c.addEventListener("error",h,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(c.crossOrigin=this.crossOrigin),s.manager.itemStart(e),c.src=e,c}}class eb extends qn{constructor(e){super(e)}load(e,t,n,i){const s=new el;s.colorSpace=mi;const a=new Za(this.manager);a.setCrossOrigin(this.crossOrigin),a.setPath(this.path);let c=0;function u(h){a.load(e[h],function(f){s.images[h]=f,c++,c===6&&(s.needsUpdate=!0,t&&t(s))},void 0,i)}for(let h=0;h<e.length;++h)u(h);return s}}class tb extends qn{constructor(e){super(e)}load(e,t,n,i){const s=this,a=new Yi,c=new gr(this.manager);return c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setPath(this.path),c.setWithCredentials(s.withCredentials),c.load(e,function(u){let h;try{h=s.parse(u)}catch(f){if(i!==void 0)i(f);else{console.error(f);return}}h.image!==void 0?a.image=h.image:h.data!==void 0&&(a.image.width=h.width,a.image.height=h.height,a.image.data=h.data),a.wrapS=h.wrapS!==void 0?h.wrapS:gi,a.wrapT=h.wrapT!==void 0?h.wrapT:gi,a.magFilter=h.magFilter!==void 0?h.magFilter:jt,a.minFilter=h.minFilter!==void 0?h.minFilter:jt,a.anisotropy=h.anisotropy!==void 0?h.anisotropy:1,h.colorSpace!==void 0&&(a.colorSpace=h.colorSpace),h.flipY!==void 0&&(a.flipY=h.flipY),h.format!==void 0&&(a.format=h.format),h.type!==void 0&&(a.type=h.type),h.mipmaps!==void 0&&(a.mipmaps=h.mipmaps,a.minFilter=Wi),h.mipmapCount===1&&(a.minFilter=jt),h.generateMipmaps!==void 0&&(a.generateMipmaps=h.generateMipmaps),a.needsUpdate=!0,t&&t(a,h)},n,i),a}}class nb extends qn{constructor(e){super(e)}load(e,t,n,i){const s=new Jt,a=new Za(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(c){s.image=c,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class Wr extends Ct{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Pe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class fy extends Wr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ct.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Pe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Ed=new et,H0=new D,V0=new D;class Hp{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new fe(512,512),this.map=null,this.mapPass=null,this.matrix=new et,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new tl,this._frameExtents=new fe(1,1),this._viewportCount=1,this._viewports=[new xt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;H0.setFromMatrixPosition(e.matrixWorld),t.position.copy(H0),V0.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(V0),t.updateMatrixWorld(),Ed.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ed),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ed)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class ib extends Hp{constructor(){super(new fn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=To*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class dy extends Wr{constructor(e,t,n=0,i=Math.PI/3,s=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ct.DEFAULT_UP),this.updateMatrix(),this.target=new Ct,this.distance=n,this.angle=i,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new ib}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const G0=new et,da=new D,Ad=new D;class rb extends Hp{constructor(){super(new fn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new fe(4,2),this._viewportCount=6,this._viewports=[new xt(2,1,1,1),new xt(0,1,1,1),new xt(3,1,1,1),new xt(1,1,1,1),new xt(3,0,1,1),new xt(1,0,1,1)],this._cubeDirections=[new D(1,0,0),new D(-1,0,0),new D(0,0,1),new D(0,0,-1),new D(0,1,0),new D(0,-1,0)],this._cubeUps=[new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,0,1),new D(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),da.setFromMatrixPosition(e.matrixWorld),n.position.copy(da),Ad.copy(n.position),Ad.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Ad),n.updateMatrixWorld(),i.makeTranslation(-da.x,-da.y,-da.z),G0.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(G0)}}class py extends Wr{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new rb}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class sb extends Hp{constructor(){super(new nl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class my extends Wr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ct.DEFAULT_UP),this.updateMatrix(),this.target=new Ct,this.shadow=new sb}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class gy extends Wr{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class vy extends Wr{constructor(e,t,n=10,i=10){super(e,t),this.isRectAreaLight=!0,this.type="RectAreaLight",this.width=n,this.height=i}get power(){return this.intensity*this.width*this.height*Math.PI}set power(e){this.intensity=e/(this.width*this.height*Math.PI)}copy(e){return super.copy(e),this.width=e.width,this.height=e.height,this}toJSON(e){const t=super.toJSON(e);return t.object.width=this.width,t.object.height=this.height,t}}class _y{constructor(){this.isSphericalHarmonics3=!0,this.coefficients=[];for(let e=0;e<9;e++)this.coefficients.push(new D)}set(e){for(let t=0;t<9;t++)this.coefficients[t].copy(e[t]);return this}zero(){for(let e=0;e<9;e++)this.coefficients[e].set(0,0,0);return this}getAt(e,t){const n=e.x,i=e.y,s=e.z,a=this.coefficients;return t.copy(a[0]).multiplyScalar(.282095),t.addScaledVector(a[1],.488603*i),t.addScaledVector(a[2],.488603*s),t.addScaledVector(a[3],.488603*n),t.addScaledVector(a[4],1.092548*(n*i)),t.addScaledVector(a[5],1.092548*(i*s)),t.addScaledVector(a[6],.315392*(3*s*s-1)),t.addScaledVector(a[7],1.092548*(n*s)),t.addScaledVector(a[8],.546274*(n*n-i*i)),t}getIrradianceAt(e,t){const n=e.x,i=e.y,s=e.z,a=this.coefficients;return t.copy(a[0]).multiplyScalar(.886227),t.addScaledVector(a[1],2*.511664*i),t.addScaledVector(a[2],2*.511664*s),t.addScaledVector(a[3],2*.511664*n),t.addScaledVector(a[4],2*.429043*n*i),t.addScaledVector(a[5],2*.429043*i*s),t.addScaledVector(a[6],.743125*s*s-.247708),t.addScaledVector(a[7],2*.429043*n*s),t.addScaledVector(a[8],.429043*(n*n-i*i)),t}add(e){for(let t=0;t<9;t++)this.coefficients[t].add(e.coefficients[t]);return this}addScaledSH(e,t){for(let n=0;n<9;n++)this.coefficients[n].addScaledVector(e.coefficients[n],t);return this}scale(e){for(let t=0;t<9;t++)this.coefficients[t].multiplyScalar(e);return this}lerp(e,t){for(let n=0;n<9;n++)this.coefficients[n].lerp(e.coefficients[n],t);return this}equals(e){for(let t=0;t<9;t++)if(!this.coefficients[t].equals(e.coefficients[t]))return!1;return!0}copy(e){return this.set(e.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(e,t=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].fromArray(e,t+i*3);return this}toArray(e=[],t=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].toArray(e,t+i*3);return e}static getBasisAt(e,t){const n=e.x,i=e.y,s=e.z;t[0]=.282095,t[1]=.488603*i,t[2]=.488603*s,t[3]=.488603*n,t[4]=1.092548*n*i,t[5]=1.092548*i*s,t[6]=.315392*(3*s*s-1),t[7]=1.092548*n*s,t[8]=.546274*(n*n-i*i)}}class yy extends Wr{constructor(e=new _y,t=1){super(void 0,t),this.isLightProbe=!0,this.sh=e}copy(e){return super.copy(e),this.sh.copy(e.sh),this}fromJSON(e){return this.intensity=e.intensity,this.sh.fromArray(e.sh),this}toJSON(e){const t=super.toJSON(e);return t.object.sh=this.sh.toArray(),t}}class Ch extends qn{constructor(e){super(e),this.textures={}}load(e,t,n,i){const s=this,a=new gr(s.manager);a.setPath(s.path),a.setRequestHeader(s.requestHeader),a.setWithCredentials(s.withCredentials),a.load(e,function(c){try{t(s.parse(JSON.parse(c)))}catch(u){i?i(u):console.error(u),s.manager.itemError(e)}},n,i)}parse(e){const t=this.textures;function n(s){return t[s]===void 0&&console.warn("THREE.MaterialLoader: Undefined texture",s),t[s]}const i=this.createMaterialFromType(e.type);if(e.uuid!==void 0&&(i.uuid=e.uuid),e.name!==void 0&&(i.name=e.name),e.color!==void 0&&i.color!==void 0&&i.color.setHex(e.color),e.roughness!==void 0&&(i.roughness=e.roughness),e.metalness!==void 0&&(i.metalness=e.metalness),e.sheen!==void 0&&(i.sheen=e.sheen),e.sheenColor!==void 0&&(i.sheenColor=new Pe().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(i.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&i.emissive!==void 0&&i.emissive.setHex(e.emissive),e.specular!==void 0&&i.specular!==void 0&&i.specular.setHex(e.specular),e.specularIntensity!==void 0&&(i.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&i.specularColor!==void 0&&i.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(i.shininess=e.shininess),e.clearcoat!==void 0&&(i.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(i.dispersion=e.dispersion),e.iridescence!==void 0&&(i.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(i.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(i.transmission=e.transmission),e.thickness!==void 0&&(i.thickness=e.thickness),e.attenuationDistance!==void 0&&(i.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&i.attenuationColor!==void 0&&i.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(i.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(i.fog=e.fog),e.flatShading!==void 0&&(i.flatShading=e.flatShading),e.blending!==void 0&&(i.blending=e.blending),e.combine!==void 0&&(i.combine=e.combine),e.side!==void 0&&(i.side=e.side),e.shadowSide!==void 0&&(i.shadowSide=e.shadowSide),e.opacity!==void 0&&(i.opacity=e.opacity),e.transparent!==void 0&&(i.transparent=e.transparent),e.alphaTest!==void 0&&(i.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(i.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(i.depthFunc=e.depthFunc),e.depthTest!==void 0&&(i.depthTest=e.depthTest),e.depthWrite!==void 0&&(i.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(i.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(i.blendSrc=e.blendSrc),e.blendDst!==void 0&&(i.blendDst=e.blendDst),e.blendEquation!==void 0&&(i.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(i.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(i.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(i.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&i.blendColor!==void 0&&i.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(i.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(i.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(i.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(i.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(i.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(i.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(i.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(i.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(i.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(i.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(i.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(i.rotation=e.rotation),e.linewidth!==void 0&&(i.linewidth=e.linewidth),e.dashSize!==void 0&&(i.dashSize=e.dashSize),e.gapSize!==void 0&&(i.gapSize=e.gapSize),e.scale!==void 0&&(i.scale=e.scale),e.polygonOffset!==void 0&&(i.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(i.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(i.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(i.dithering=e.dithering),e.alphaToCoverage!==void 0&&(i.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(i.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(i.forceSinglePass=e.forceSinglePass),e.visible!==void 0&&(i.visible=e.visible),e.toneMapped!==void 0&&(i.toneMapped=e.toneMapped),e.userData!==void 0&&(i.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?i.vertexColors=e.vertexColors>0:i.vertexColors=e.vertexColors),e.uniforms!==void 0)for(const s in e.uniforms){const a=e.uniforms[s];switch(i.uniforms[s]={},a.type){case"t":i.uniforms[s].value=n(a.value);break;case"c":i.uniforms[s].value=new Pe().setHex(a.value);break;case"v2":i.uniforms[s].value=new fe().fromArray(a.value);break;case"v3":i.uniforms[s].value=new D().fromArray(a.value);break;case"v4":i.uniforms[s].value=new xt().fromArray(a.value);break;case"m3":i.uniforms[s].value=new dt().fromArray(a.value);break;case"m4":i.uniforms[s].value=new et().fromArray(a.value);break;default:i.uniforms[s].value=a.value}}if(e.defines!==void 0&&(i.defines=e.defines),e.vertexShader!==void 0&&(i.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(i.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(i.glslVersion=e.glslVersion),e.extensions!==void 0)for(const s in e.extensions)i.extensions[s]=e.extensions[s];if(e.lights!==void 0&&(i.lights=e.lights),e.clipping!==void 0&&(i.clipping=e.clipping),e.size!==void 0&&(i.size=e.size),e.sizeAttenuation!==void 0&&(i.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(i.map=n(e.map)),e.matcap!==void 0&&(i.matcap=n(e.matcap)),e.alphaMap!==void 0&&(i.alphaMap=n(e.alphaMap)),e.bumpMap!==void 0&&(i.bumpMap=n(e.bumpMap)),e.bumpScale!==void 0&&(i.bumpScale=e.bumpScale),e.normalMap!==void 0&&(i.normalMap=n(e.normalMap)),e.normalMapType!==void 0&&(i.normalMapType=e.normalMapType),e.normalScale!==void 0){let s=e.normalScale;Array.isArray(s)===!1&&(s=[s,s]),i.normalScale=new fe().fromArray(s)}return e.displacementMap!==void 0&&(i.displacementMap=n(e.displacementMap)),e.displacementScale!==void 0&&(i.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(i.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(i.roughnessMap=n(e.roughnessMap)),e.metalnessMap!==void 0&&(i.metalnessMap=n(e.metalnessMap)),e.emissiveMap!==void 0&&(i.emissiveMap=n(e.emissiveMap)),e.emissiveIntensity!==void 0&&(i.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(i.specularMap=n(e.specularMap)),e.specularIntensityMap!==void 0&&(i.specularIntensityMap=n(e.specularIntensityMap)),e.specularColorMap!==void 0&&(i.specularColorMap=n(e.specularColorMap)),e.envMap!==void 0&&(i.envMap=n(e.envMap)),e.envMapRotation!==void 0&&i.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(i.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(i.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(i.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(i.lightMap=n(e.lightMap)),e.lightMapIntensity!==void 0&&(i.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(i.aoMap=n(e.aoMap)),e.aoMapIntensity!==void 0&&(i.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(i.gradientMap=n(e.gradientMap)),e.clearcoatMap!==void 0&&(i.clearcoatMap=n(e.clearcoatMap)),e.clearcoatRoughnessMap!==void 0&&(i.clearcoatRoughnessMap=n(e.clearcoatRoughnessMap)),e.clearcoatNormalMap!==void 0&&(i.clearcoatNormalMap=n(e.clearcoatNormalMap)),e.clearcoatNormalScale!==void 0&&(i.clearcoatNormalScale=new fe().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(i.iridescenceMap=n(e.iridescenceMap)),e.iridescenceThicknessMap!==void 0&&(i.iridescenceThicknessMap=n(e.iridescenceThicknessMap)),e.transmissionMap!==void 0&&(i.transmissionMap=n(e.transmissionMap)),e.thicknessMap!==void 0&&(i.thicknessMap=n(e.thicknessMap)),e.anisotropyMap!==void 0&&(i.anisotropyMap=n(e.anisotropyMap)),e.sheenColorMap!==void 0&&(i.sheenColorMap=n(e.sheenColorMap)),e.sheenRoughnessMap!==void 0&&(i.sheenRoughnessMap=n(e.sheenRoughnessMap)),i}setTextures(e){return this.textures=e,this}createMaterialFromType(e){return Ch.createMaterialFromType(e)}static createMaterialFromType(e){const t={ShadowMaterial:Q_,SpriteMaterial:Ap,RawShaderMaterial:$_,ShaderMaterial:ri,PointsMaterial:bp,MeshPhysicalMaterial:Op,MeshStandardMaterial:Np,MeshPhongMaterial:ey,MeshToonMaterial:ty,MeshNormalMaterial:ny,MeshLambertMaterial:iy,MeshDepthMaterial:Mp,MeshDistanceMaterial:wp,MeshBasicMaterial:Vr,MeshMatcapMaterial:ry,LineDashedMaterial:sy,LineBasicMaterial:kn,Material:In};return new t[e]}}class $d{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class Vp extends vt{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class xy extends qn{constructor(e){super(e)}load(e,t,n,i){const s=this,a=new gr(s.manager);a.setPath(s.path),a.setRequestHeader(s.requestHeader),a.setWithCredentials(s.withCredentials),a.load(e,function(c){try{t(s.parse(JSON.parse(c)))}catch(u){i?i(u):console.error(u),s.manager.itemError(e)}},n,i)}parse(e){const t={},n={};function i(g,y){if(t[y]!==void 0)return t[y];const x=g.interleavedBuffers[y],_=s(g,x.buffer),E=yo(x.type,_),w=new hh(E,x.stride);return w.uuid=x.uuid,t[y]=w,w}function s(g,y){if(n[y]!==void 0)return n[y];const x=g.arrayBuffers[y],_=new Uint32Array(x).buffer;return n[y]=_,_}const a=e.isInstancedBufferGeometry?new Vp:new vt,c=e.data.index;if(c!==void 0){const g=yo(c.type,c.array);a.setIndex(new Ot(g,1))}const u=e.data.attributes;for(const g in u){const y=u[g];let M;if(y.isInterleavedBufferAttribute){const x=i(e.data,y.data);M=new ti(x,y.itemSize,y.offset,y.normalized)}else{const x=yo(y.type,y.array),_=y.isInstancedBufferAttribute?Co:Ot;M=new _(x,y.itemSize,y.normalized)}y.name!==void 0&&(M.name=y.name),y.usage!==void 0&&M.setUsage(y.usage),a.setAttribute(g,M)}const h=e.data.morphAttributes;if(h)for(const g in h){const y=h[g],M=[];for(let x=0,_=y.length;x<_;x++){const E=y[x];let w;if(E.isInterleavedBufferAttribute){const T=i(e.data,E.data);w=new ti(T,E.itemSize,E.offset,E.normalized)}else{const T=yo(E.type,E.array);w=new Ot(T,E.itemSize,E.normalized)}E.name!==void 0&&(w.name=E.name),M.push(w)}a.morphAttributes[g]=M}e.data.morphTargetsRelative&&(a.morphTargetsRelative=!0);const p=e.data.groups||e.data.drawcalls||e.data.offsets;if(p!==void 0)for(let g=0,y=p.length;g!==y;++g){const M=p[g];a.addGroup(M.start,M.count,M.materialIndex)}const m=e.data.boundingSphere;if(m!==void 0){const g=new D;m.center!==void 0&&g.fromArray(m.center),a.boundingSphere=new mn(g,m.radius)}return e.name&&(a.name=e.name),e.userData&&(a.userData=e.userData),a}}class ob extends qn{constructor(e){super(e)}load(e,t,n,i){const s=this,a=this.path===""?$d.extractUrlBase(e):this.path;this.resourcePath=this.resourcePath||a;const c=new gr(this.manager);c.setPath(this.path),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(u){let h=null;try{h=JSON.parse(u)}catch(p){i!==void 0&&i(p),console.error("THREE:ObjectLoader: Can't parse "+e+".",p.message);return}const f=h.metadata;if(f===void 0||f.type===void 0||f.type.toLowerCase()==="geometry"){i!==void 0&&i(new Error("THREE.ObjectLoader: Can't load "+e)),console.error("THREE.ObjectLoader: Can't load "+e);return}s.parse(h,t)},n,i)}async loadAsync(e,t){const n=this,i=this.path===""?$d.extractUrlBase(e):this.path;this.resourcePath=this.resourcePath||i;const s=new gr(this.manager);s.setPath(this.path),s.setRequestHeader(this.requestHeader),s.setWithCredentials(this.withCredentials);const a=await s.loadAsync(e,t),c=JSON.parse(a),u=c.metadata;if(u===void 0||u.type===void 0||u.type.toLowerCase()==="geometry")throw new Error("THREE.ObjectLoader: Can't load "+e);return await n.parseAsync(c)}parse(e,t){const n=this.parseAnimations(e.animations),i=this.parseShapes(e.shapes),s=this.parseGeometries(e.geometries,i),a=this.parseImages(e.images,function(){t!==void 0&&t(h)}),c=this.parseTextures(e.textures,a),u=this.parseMaterials(e.materials,c),h=this.parseObject(e.object,s,u,c,n),f=this.parseSkeletons(e.skeletons,h);if(this.bindSkeletons(h,f),this.bindLightTargets(h),t!==void 0){let p=!1;for(const m in a)if(a[m].data instanceof HTMLImageElement){p=!0;break}p===!1&&t(h)}return h}async parseAsync(e){const t=this.parseAnimations(e.animations),n=this.parseShapes(e.shapes),i=this.parseGeometries(e.geometries,n),s=await this.parseImagesAsync(e.images),a=this.parseTextures(e.textures,s),c=this.parseMaterials(e.materials,a),u=this.parseObject(e.object,i,c,a,t),h=this.parseSkeletons(e.skeletons,u);return this.bindSkeletons(u,h),this.bindLightTargets(u),u}parseShapes(e){const t={};if(e!==void 0)for(let n=0,i=e.length;n<i;n++){const s=new Br().fromJSON(e[n]);t[s.uuid]=s}return t}parseSkeletons(e,t){const n={},i={};if(t.traverse(function(s){s.isBone&&(i[s.uuid]=s)}),e!==void 0)for(let s=0,a=e.length;s<a;s++){const c=new fh().fromJSON(e[s],i);n[c.uuid]=c}return n}parseGeometries(e,t){const n={};if(e!==void 0){const i=new xy;for(let s=0,a=e.length;s<a;s++){let c;const u=e[s];switch(u.type){case"BufferGeometry":case"InstancedBufferGeometry":c=i.parse(u);break;default:u.type in k0?c=k0[u.type].fromJSON(u,t):console.warn(`THREE.ObjectLoader: Unsupported geometry type "${u.type}"`)}c.uuid=u.uuid,u.name!==void 0&&(c.name=u.name),u.userData!==void 0&&(c.userData=u.userData),n[u.uuid]=c}}return n}parseMaterials(e,t){const n={},i={};if(e!==void 0){const s=new Ch;s.setTextures(t);for(let a=0,c=e.length;a<c;a++){const u=e[a];n[u.uuid]===void 0&&(n[u.uuid]=s.parse(u)),i[u.uuid]=n[u.uuid]}}return i}parseAnimations(e){const t={};if(e!==void 0)for(let n=0;n<e.length;n++){const i=e[n],s=qa.parse(i);t[s.uuid]=s}return t}parseImages(e,t){const n=this,i={};let s;function a(u){return n.manager.itemStart(u),s.load(u,function(){n.manager.itemEnd(u)},void 0,function(){n.manager.itemError(u),n.manager.itemEnd(u)})}function c(u){if(typeof u=="string"){const h=u,f=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(h)?h:n.resourcePath+h;return a(f)}else return u.data?{data:yo(u.type,u.data),width:u.width,height:u.height}:null}if(e!==void 0&&e.length>0){const u=new kp(t);s=new Za(u),s.setCrossOrigin(this.crossOrigin);for(let h=0,f=e.length;h<f;h++){const p=e[h],m=p.url;if(Array.isArray(m)){const g=[];for(let y=0,M=m.length;y<M;y++){const x=m[y],_=c(x);_!==null&&(_ instanceof HTMLImageElement?g.push(_):g.push(new Yi(_.data,_.width,_.height)))}i[p.uuid]=new vs(g)}else{const g=c(p.url);i[p.uuid]=new vs(g)}}}return i}async parseImagesAsync(e){const t=this,n={};let i;async function s(a){if(typeof a=="string"){const c=a,u=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(c)?c:t.resourcePath+c;return await i.loadAsync(u)}else return a.data?{data:yo(a.type,a.data),width:a.width,height:a.height}:null}if(e!==void 0&&e.length>0){i=new Za(this.manager),i.setCrossOrigin(this.crossOrigin);for(let a=0,c=e.length;a<c;a++){const u=e[a],h=u.url;if(Array.isArray(h)){const f=[];for(let p=0,m=h.length;p<m;p++){const g=h[p],y=await s(g);y!==null&&(y instanceof HTMLImageElement?f.push(y):f.push(new Yi(y.data,y.width,y.height)))}n[u.uuid]=new vs(f)}else{const f=await s(u.url);n[u.uuid]=new vs(f)}}}return n}parseTextures(e,t){function n(s,a){return typeof s=="number"?s:(console.warn("THREE.ObjectLoader.parseTexture: Constant should be in numeric form.",s),a[s])}const i={};if(e!==void 0)for(let s=0,a=e.length;s<a;s++){const c=e[s];c.image===void 0&&console.warn('THREE.ObjectLoader: No "image" specified for',c.uuid),t[c.image]===void 0&&console.warn("THREE.ObjectLoader: Undefined image",c.image);const u=t[c.image],h=u.data;let f;Array.isArray(h)?(f=new el,h.length===6&&(f.needsUpdate=!0)):(h&&h.data?f=new Yi:f=new Jt,h&&(f.needsUpdate=!0)),f.source=u,f.uuid=c.uuid,c.name!==void 0&&(f.name=c.name),c.mapping!==void 0&&(f.mapping=n(c.mapping,ab)),c.channel!==void 0&&(f.channel=c.channel),c.offset!==void 0&&f.offset.fromArray(c.offset),c.repeat!==void 0&&f.repeat.fromArray(c.repeat),c.center!==void 0&&f.center.fromArray(c.center),c.rotation!==void 0&&(f.rotation=c.rotation),c.wrap!==void 0&&(f.wrapS=n(c.wrap[0],W0),f.wrapT=n(c.wrap[1],W0)),c.format!==void 0&&(f.format=c.format),c.internalFormat!==void 0&&(f.internalFormat=c.internalFormat),c.type!==void 0&&(f.type=c.type),c.colorSpace!==void 0&&(f.colorSpace=c.colorSpace),c.minFilter!==void 0&&(f.minFilter=n(c.minFilter,X0)),c.magFilter!==void 0&&(f.magFilter=n(c.magFilter,X0)),c.anisotropy!==void 0&&(f.anisotropy=c.anisotropy),c.flipY!==void 0&&(f.flipY=c.flipY),c.generateMipmaps!==void 0&&(f.generateMipmaps=c.generateMipmaps),c.premultiplyAlpha!==void 0&&(f.premultiplyAlpha=c.premultiplyAlpha),c.unpackAlignment!==void 0&&(f.unpackAlignment=c.unpackAlignment),c.compareFunction!==void 0&&(f.compareFunction=c.compareFunction),c.userData!==void 0&&(f.userData=c.userData),i[c.uuid]=f}return i}parseObject(e,t,n,i,s){let a;function c(m){return t[m]===void 0&&console.warn("THREE.ObjectLoader: Undefined geometry",m),t[m]}function u(m){if(m!==void 0){if(Array.isArray(m)){const g=[];for(let y=0,M=m.length;y<M;y++){const x=m[y];n[x]===void 0&&console.warn("THREE.ObjectLoader: Undefined material",x),g.push(n[x])}return g}return n[m]===void 0&&console.warn("THREE.ObjectLoader: Undefined material",m),n[m]}}function h(m){return i[m]===void 0&&console.warn("THREE.ObjectLoader: Undefined texture",m),i[m]}let f,p;switch(e.type){case"Scene":a=new Ep,e.background!==void 0&&(Number.isInteger(e.background)?a.background=new Pe(e.background):a.background=h(e.background)),e.environment!==void 0&&(a.environment=h(e.environment)),e.fog!==void 0&&(e.fog.type==="Fog"?a.fog=new uh(e.fog.color,e.fog.near,e.fog.far):e.fog.type==="FogExp2"&&(a.fog=new ch(e.fog.color,e.fog.density)),e.fog.name!==""&&(a.fog.name=e.fog.name)),e.backgroundBlurriness!==void 0&&(a.backgroundBlurriness=e.backgroundBlurriness),e.backgroundIntensity!==void 0&&(a.backgroundIntensity=e.backgroundIntensity),e.backgroundRotation!==void 0&&a.backgroundRotation.fromArray(e.backgroundRotation),e.environmentIntensity!==void 0&&(a.environmentIntensity=e.environmentIntensity),e.environmentRotation!==void 0&&a.environmentRotation.fromArray(e.environmentRotation);break;case"PerspectiveCamera":a=new fn(e.fov,e.aspect,e.near,e.far),e.focus!==void 0&&(a.focus=e.focus),e.zoom!==void 0&&(a.zoom=e.zoom),e.filmGauge!==void 0&&(a.filmGauge=e.filmGauge),e.filmOffset!==void 0&&(a.filmOffset=e.filmOffset),e.view!==void 0&&(a.view=Object.assign({},e.view));break;case"OrthographicCamera":a=new nl(e.left,e.right,e.top,e.bottom,e.near,e.far),e.zoom!==void 0&&(a.zoom=e.zoom),e.view!==void 0&&(a.view=Object.assign({},e.view));break;case"AmbientLight":a=new gy(e.color,e.intensity);break;case"DirectionalLight":a=new my(e.color,e.intensity),a.target=e.target||"";break;case"PointLight":a=new py(e.color,e.intensity,e.distance,e.decay);break;case"RectAreaLight":a=new vy(e.color,e.intensity,e.width,e.height);break;case"SpotLight":a=new dy(e.color,e.intensity,e.distance,e.angle,e.penumbra,e.decay),a.target=e.target||"";break;case"HemisphereLight":a=new fy(e.color,e.groundColor,e.intensity);break;case"LightProbe":a=new yy().fromJSON(e);break;case"SkinnedMesh":f=c(e.geometry),p=u(e.material),a=new B_(f,p),e.bindMode!==void 0&&(a.bindMode=e.bindMode),e.bindMatrix!==void 0&&a.bindMatrix.fromArray(e.bindMatrix),e.skeleton!==void 0&&(a.skeleton=e.skeleton);break;case"Mesh":f=c(e.geometry),p=u(e.material),a=new $t(f,p);break;case"InstancedMesh":f=c(e.geometry),p=u(e.material);const m=e.count,g=e.instanceMatrix,y=e.instanceColor;a=new z_(f,p,m),a.instanceMatrix=new Co(new Float32Array(g.array),16),y!==void 0&&(a.instanceColor=new Co(new Float32Array(y.array),y.itemSize));break;case"BatchedMesh":f=c(e.geometry),p=u(e.material),a=new k_(e.maxInstanceCount,e.maxVertexCount,e.maxIndexCount,p),a.geometry=f,a.perObjectFrustumCulled=e.perObjectFrustumCulled,a.sortObjects=e.sortObjects,a._drawRanges=e.drawRanges,a._reservedRanges=e.reservedRanges,a._visibility=e.visibility,a._active=e.active,a._bounds=e.bounds.map(M=>{const x=new pn;x.min.fromArray(M.boxMin),x.max.fromArray(M.boxMax);const _=new mn;return _.radius=M.sphereRadius,_.center.fromArray(M.sphereCenter),{boxInitialized:M.boxInitialized,box:x,sphereInitialized:M.sphereInitialized,sphere:_}}),a._maxInstanceCount=e.maxInstanceCount,a._maxVertexCount=e.maxVertexCount,a._maxIndexCount=e.maxIndexCount,a._geometryInitialized=e.geometryInitialized,a._geometryCount=e.geometryCount,a._matricesTexture=h(e.matricesTexture.uuid),e.colorsTexture!==void 0&&(a._colorsTexture=h(e.colorsTexture.uuid));break;case"LOD":a=new F_;break;case"Line":a=new kr(c(e.geometry),u(e.material));break;case"LineLoop":a=new H_(c(e.geometry),u(e.material));break;case"LineSegments":a=new Ji(c(e.geometry),u(e.material));break;case"PointCloud":case"Points":a=new V_(c(e.geometry),u(e.material));break;case"Sprite":a=new O_(u(e.material));break;case"Group":a=new So;break;case"Bone":a=new Tp;break;default:a=new Ct}if(a.uuid=e.uuid,e.name!==void 0&&(a.name=e.name),e.matrix!==void 0?(a.matrix.fromArray(e.matrix),e.matrixAutoUpdate!==void 0&&(a.matrixAutoUpdate=e.matrixAutoUpdate),a.matrixAutoUpdate&&a.matrix.decompose(a.position,a.quaternion,a.scale)):(e.position!==void 0&&a.position.fromArray(e.position),e.rotation!==void 0&&a.rotation.fromArray(e.rotation),e.quaternion!==void 0&&a.quaternion.fromArray(e.quaternion),e.scale!==void 0&&a.scale.fromArray(e.scale)),e.up!==void 0&&a.up.fromArray(e.up),e.castShadow!==void 0&&(a.castShadow=e.castShadow),e.receiveShadow!==void 0&&(a.receiveShadow=e.receiveShadow),e.shadow&&(e.shadow.intensity!==void 0&&(a.shadow.intensity=e.shadow.intensity),e.shadow.bias!==void 0&&(a.shadow.bias=e.shadow.bias),e.shadow.normalBias!==void 0&&(a.shadow.normalBias=e.shadow.normalBias),e.shadow.radius!==void 0&&(a.shadow.radius=e.shadow.radius),e.shadow.mapSize!==void 0&&a.shadow.mapSize.fromArray(e.shadow.mapSize),e.shadow.camera!==void 0&&(a.shadow.camera=this.parseObject(e.shadow.camera))),e.visible!==void 0&&(a.visible=e.visible),e.frustumCulled!==void 0&&(a.frustumCulled=e.frustumCulled),e.renderOrder!==void 0&&(a.renderOrder=e.renderOrder),e.userData!==void 0&&(a.userData=e.userData),e.layers!==void 0&&(a.layers.mask=e.layers),e.children!==void 0){const m=e.children;for(let g=0;g<m.length;g++)a.add(this.parseObject(m[g],t,n,i,s))}if(e.animations!==void 0){const m=e.animations;for(let g=0;g<m.length;g++){const y=m[g];a.animations.push(s[y])}}if(e.type==="LOD"){e.autoUpdate!==void 0&&(a.autoUpdate=e.autoUpdate);const m=e.levels;for(let g=0;g<m.length;g++){const y=m[g],M=a.getObjectByProperty("uuid",y.object);M!==void 0&&a.addLevel(M,y.distance,y.hysteresis)}}return a}bindSkeletons(e,t){Object.keys(t).length!==0&&e.traverse(function(n){if(n.isSkinnedMesh===!0&&n.skeleton!==void 0){const i=t[n.skeleton];i===void 0?console.warn("THREE.ObjectLoader: No skeleton found with UUID:",n.skeleton):n.bind(i,n.bindMatrix)}})}bindLightTargets(e){e.traverse(function(t){if(t.isDirectionalLight||t.isSpotLight){const n=t.target,i=e.getObjectByProperty("uuid",n);i!==void 0?t.target=i:t.target=new Ct}})}}const ab={UVMapping:Ku,CubeReflectionMapping:pr,CubeRefractionMapping:zr,EquirectangularReflectionMapping:Ca,EquirectangularRefractionMapping:Ra,CubeUVReflectionMapping:Io},W0={RepeatWrapping:Pa,ClampToEdgeWrapping:gi,MirroredRepeatWrapping:Ia},X0={NearestFilter:dn,NearestMipmapNearestFilter:sp,NearestMipmapLinearFilter:_o,LinearFilter:jt,LinearMipmapNearestFilter:ya,LinearMipmapLinearFilter:Wi};class lb extends qn{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=fr.get(e);if(a!==void 0){if(s.manager.itemStart(e),a.then){a.then(h=>{t&&t(h),s.manager.itemEnd(e)}).catch(h=>{i&&i(h)});return}return setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a}const c={};c.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",c.headers=this.requestHeader;const u=fetch(e,c).then(function(h){return h.blob()}).then(function(h){return createImageBitmap(h,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(h){return fr.add(e,h),t&&t(h),s.manager.itemEnd(e),h}).catch(function(h){i&&i(h),fr.remove(e),s.manager.itemError(e),s.manager.itemEnd(e)});fr.add(e,u),s.manager.itemStart(e)}}let Yc;class Gp{static getContext(){return Yc===void 0&&(Yc=new(window.AudioContext||window.webkitAudioContext)),Yc}static setContext(e){Yc=e}}class cb extends qn{constructor(e){super(e)}load(e,t,n,i){const s=this,a=new gr(this.manager);a.setResponseType("arraybuffer"),a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(u){try{const h=u.slice(0);Gp.getContext().decodeAudioData(h,function(p){t(p)}).catch(c)}catch(h){c(h)}},n,i);function c(u){i?i(u):console.error(u),s.manager.itemError(e)}}}const Y0=new et,q0=new et,as=new et;class ub{constructor(){this.type="StereoCamera",this.aspect=1,this.eyeSep=.064,this.cameraL=new fn,this.cameraL.layers.enable(1),this.cameraL.matrixAutoUpdate=!1,this.cameraR=new fn,this.cameraR.layers.enable(2),this.cameraR.matrixAutoUpdate=!1,this._cache={focus:null,fov:null,aspect:null,near:null,far:null,zoom:null,eyeSep:null}}update(e){const t=this._cache;if(t.focus!==e.focus||t.fov!==e.fov||t.aspect!==e.aspect*this.aspect||t.near!==e.near||t.far!==e.far||t.zoom!==e.zoom||t.eyeSep!==this.eyeSep){t.focus=e.focus,t.fov=e.fov,t.aspect=e.aspect*this.aspect,t.near=e.near,t.far=e.far,t.zoom=e.zoom,t.eyeSep=this.eyeSep,as.copy(e.projectionMatrix);const i=t.eyeSep/2,s=i*t.near/t.focus,a=t.near*Math.tan(Ss*t.fov*.5)/t.zoom;let c,u;q0.elements[12]=-i,Y0.elements[12]=i,c=-a*t.aspect+s,u=a*t.aspect+s,as.elements[0]=2*t.near/(u-c),as.elements[8]=(u+c)/(u-c),this.cameraL.projectionMatrix.copy(as),c=-a*t.aspect-s,u=a*t.aspect-s,as.elements[0]=2*t.near/(u-c),as.elements[8]=(u+c)/(u-c),this.cameraR.projectionMatrix.copy(as)}this.cameraL.matrixWorld.copy(e.matrixWorld).multiply(q0),this.cameraR.matrixWorld.copy(e.matrixWorld).multiply(Y0)}}class Wp{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Z0(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Z0();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Z0(){return performance.now()}const ls=new D,j0=new Yn,hb=new D,cs=new D;class fb extends Ct{constructor(){super(),this.type="AudioListener",this.context=Gp.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._clock=new Wp}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(e){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=e,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}updateMatrixWorld(e){super.updateMatrixWorld(e);const t=this.context.listener,n=this.up;if(this.timeDelta=this._clock.getDelta(),this.matrixWorld.decompose(ls,j0,hb),cs.set(0,0,-1).applyQuaternion(j0),t.positionX){const i=this.context.currentTime+this.timeDelta;t.positionX.linearRampToValueAtTime(ls.x,i),t.positionY.linearRampToValueAtTime(ls.y,i),t.positionZ.linearRampToValueAtTime(ls.z,i),t.forwardX.linearRampToValueAtTime(cs.x,i),t.forwardY.linearRampToValueAtTime(cs.y,i),t.forwardZ.linearRampToValueAtTime(cs.z,i),t.upX.linearRampToValueAtTime(n.x,i),t.upY.linearRampToValueAtTime(n.y,i),t.upZ.linearRampToValueAtTime(n.z,i)}else t.setPosition(ls.x,ls.y,ls.z),t.setOrientation(cs.x,cs.y,cs.z,n.x,n.y,n.z)}}class Sy extends Ct{constructor(e){super(),this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this}setMediaElementSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this}setMediaStreamSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this}setBuffer(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this}play(e=0){if(this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+e;const t=this.context.createBufferSource();return t.buffer=this.buffer,t.loop=this.loop,t.loopStart=this.loopStart,t.loopEnd=this.loopEnd,t.onended=this.onEnded.bind(this),t.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=t,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(e=0){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this._progress=0,this.source!==null&&(this.source.stop(this.context.currentTime+e),this.source.onended=null),this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this._connected!==!1){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}}getFilters(){return this.filters}setFilters(e){return e||(e=[]),this._connected===!0?(this.disconnect(),this.filters=e.slice(),this.connect()):this.filters=e.slice(),this}setDetune(e){return this.detune=e,this.isPlaying===!0&&this.source.detune!==void 0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(e){return this.loopStart=e,this}setLoopEnd(e){return this.loopEnd=e,this}getVolume(){return this.gain.gain.value}setVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}}const us=new D,J0=new Yn,db=new D,hs=new D;class pb extends Sy{constructor(e){super(e),this.panner=this.context.createPanner(),this.panner.panningModel="HRTF",this.panner.connect(this.gain)}connect(){super.connect(),this.panner.connect(this.gain)}disconnect(){super.disconnect(),this.panner.disconnect(this.gain)}getOutput(){return this.panner}getRefDistance(){return this.panner.refDistance}setRefDistance(e){return this.panner.refDistance=e,this}getRolloffFactor(){return this.panner.rolloffFactor}setRolloffFactor(e){return this.panner.rolloffFactor=e,this}getDistanceModel(){return this.panner.distanceModel}setDistanceModel(e){return this.panner.distanceModel=e,this}getMaxDistance(){return this.panner.maxDistance}setMaxDistance(e){return this.panner.maxDistance=e,this}setDirectionalCone(e,t,n){return this.panner.coneInnerAngle=e,this.panner.coneOuterAngle=t,this.panner.coneOuterGain=n,this}updateMatrixWorld(e){if(super.updateMatrixWorld(e),this.hasPlaybackControl===!0&&this.isPlaying===!1)return;this.matrixWorld.decompose(us,J0,db),hs.set(0,0,1).applyQuaternion(J0);const t=this.panner;if(t.positionX){const n=this.context.currentTime+this.listener.timeDelta;t.positionX.linearRampToValueAtTime(us.x,n),t.positionY.linearRampToValueAtTime(us.y,n),t.positionZ.linearRampToValueAtTime(us.z,n),t.orientationX.linearRampToValueAtTime(hs.x,n),t.orientationY.linearRampToValueAtTime(hs.y,n),t.orientationZ.linearRampToValueAtTime(hs.z,n)}else t.setPosition(us.x,us.y,us.z),t.setOrientation(hs.x,hs.y,hs.z)}}class mb{constructor(e,t=2048){this.analyser=e.context.createAnalyser(),this.analyser.fftSize=t,this.data=new Uint8Array(this.analyser.frequencyBinCount),e.getOutput().connect(this.analyser)}getFrequencyData(){return this.analyser.getByteFrequencyData(this.data),this.data}getAverageFrequency(){let e=0;const t=this.getFrequencyData();for(let n=0;n<t.length;n++)e+=t[n];return e/t.length}}class My{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,s,a;switch(t){case"quaternion":i=this._slerp,s=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,s=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,s=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=s,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,i=this.valueSize,s=e*i+i;let a=this.cumulativeWeight;if(a===0){for(let c=0;c!==i;++c)n[s+c]=n[c];a=t}else{a+=t;const c=t/a;this._mixBufferRegion(n,s,0,c,i)}this.cumulativeWeight=a}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,i=e*t+t,s=this.cumulativeWeight,a=this.cumulativeWeightAdditive,c=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){const u=t*this._origIndex;this._mixBufferRegion(n,i,u,1-s,t)}a>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let u=t,h=t+t;u!==h;++u)if(n[u]!==n[u+t]){c.setValue(n,i);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let s=n,a=i;s!==a;++s)t[s]=t[i+s%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,s){if(i>=.5)for(let a=0;a!==s;++a)e[t+a]=e[n+a]}_slerp(e,t,n,i){Yn.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,s){const a=this._workIndex*s;Yn.multiplyQuaternionsFlat(e,a,e,t,e,n),Yn.slerpFlat(e,t,e,t,e,a,i)}_lerp(e,t,n,i,s){const a=1-i;for(let c=0;c!==s;++c){const u=t+c;e[u]=e[u]*a+e[n+c]*i}}_lerpAdditive(e,t,n,i,s){for(let a=0;a!==s;++a){const c=t+a;e[c]=e[c]+e[n+a]*i}}}const Xp="\\[\\]\\.:\\/",gb=new RegExp("["+Xp+"]","g"),Yp="[^"+Xp+"]",vb="[^"+Xp.replace("\\.","")+"]",_b=/((?:WC+[\/:])*)/.source.replace("WC",Yp),yb=/(WCOD+)?/.source.replace("WCOD",vb),xb=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Yp),Sb=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Yp),Mb=new RegExp("^"+_b+yb+xb+Sb+"$"),wb=["material","materials","bones","map"];class Eb{constructor(e,t,n){const i=n||bt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class bt{constructor(e,t,n){this.path=t,this.parsedPath=n||bt.parseTrackName(t),this.node=bt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new bt.Composite(e,t,n):new bt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(gb,"")}static parseTrackName(e){const t=Mb.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);wb.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let a=0;a<s.length;a++){const c=s[a];if(c.name===t||c.uuid===t)return c;const u=n(c.children);if(u)return u}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let s=t.propertyIndex;if(e||(e=bt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let h=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let f=0;f<e.length;f++)if(e[f].name===h){h=f;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(h!==void 0){if(e[h]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[h]}}const a=e[i];if(a===void 0){const h=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+h+"."+i+" but it wasn't found.",e);return}let c=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?c=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(c=this.Versioning.MatrixWorldNeedsUpdate);let u=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}u=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(u=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(u=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[u],this.setValue=this.SetterByBindingTypeAndVersioning[u][c]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}bt.Composite=Eb;bt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};bt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};bt.prototype.GetterByBindingType=[bt.prototype._getValue_direct,bt.prototype._getValue_array,bt.prototype._getValue_arrayElement,bt.prototype._getValue_toArray];bt.prototype.SetterByBindingTypeAndVersioning=[[bt.prototype._setValue_direct,bt.prototype._setValue_direct_setNeedsUpdate,bt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[bt.prototype._setValue_array,bt.prototype._setValue_array_setNeedsUpdate,bt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[bt.prototype._setValue_arrayElement,bt.prototype._setValue_arrayElement_setNeedsUpdate,bt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[bt.prototype._setValue_fromArray,bt.prototype._setValue_fromArray_setNeedsUpdate,bt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Ab{constructor(){this.isAnimationObjectGroup=!0,this.uuid=ni(),this._objects=Array.prototype.slice.call(arguments),this.nCachedObjects_=0;const e={};this._indicesByUUID=e;for(let n=0,i=arguments.length;n!==i;++n)e[arguments[n].uuid]=n;this._paths=[],this._parsedPaths=[],this._bindings=[],this._bindingsIndicesByPath={};const t=this;this.stats={objects:{get total(){return t._objects.length},get inUse(){return this.total-t.nCachedObjects_}},get bindingsPerObject(){return t._bindings.length}}}add(){const e=this._objects,t=this._indicesByUUID,n=this._paths,i=this._parsedPaths,s=this._bindings,a=s.length;let c,u=e.length,h=this.nCachedObjects_;for(let f=0,p=arguments.length;f!==p;++f){const m=arguments[f],g=m.uuid;let y=t[g];if(y===void 0){y=u++,t[g]=y,e.push(m);for(let M=0,x=a;M!==x;++M)s[M].push(new bt(m,n[M],i[M]))}else if(y<h){c=e[y];const M=--h,x=e[M];t[x.uuid]=y,e[y]=x,t[g]=M,e[M]=m;for(let _=0,E=a;_!==E;++_){const w=s[_],T=w[M];let O=w[y];w[y]=T,O===void 0&&(O=new bt(m,n[_],i[_])),w[M]=O}}else e[y]!==c&&console.error("THREE.AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.")}this.nCachedObjects_=h}remove(){const e=this._objects,t=this._indicesByUUID,n=this._bindings,i=n.length;let s=this.nCachedObjects_;for(let a=0,c=arguments.length;a!==c;++a){const u=arguments[a],h=u.uuid,f=t[h];if(f!==void 0&&f>=s){const p=s++,m=e[p];t[m.uuid]=f,e[f]=m,t[h]=p,e[p]=u;for(let g=0,y=i;g!==y;++g){const M=n[g],x=M[p],_=M[f];M[f]=x,M[p]=_}}}this.nCachedObjects_=s}uncache(){const e=this._objects,t=this._indicesByUUID,n=this._bindings,i=n.length;let s=this.nCachedObjects_,a=e.length;for(let c=0,u=arguments.length;c!==u;++c){const h=arguments[c],f=h.uuid,p=t[f];if(p!==void 0)if(delete t[f],p<s){const m=--s,g=e[m],y=--a,M=e[y];t[g.uuid]=p,e[p]=g,t[M.uuid]=m,e[m]=M,e.pop();for(let x=0,_=i;x!==_;++x){const E=n[x],w=E[m],T=E[y];E[p]=w,E[m]=T,E.pop()}}else{const m=--a,g=e[m];m>0&&(t[g.uuid]=p),e[p]=g,e.pop();for(let y=0,M=i;y!==M;++y){const x=n[y];x[p]=x[m],x.pop()}}}this.nCachedObjects_=s}subscribe_(e,t){const n=this._bindingsIndicesByPath;let i=n[e];const s=this._bindings;if(i!==void 0)return s[i];const a=this._paths,c=this._parsedPaths,u=this._objects,h=u.length,f=this.nCachedObjects_,p=new Array(h);i=s.length,n[e]=i,a.push(e),c.push(t),s.push(p);for(let m=f,g=u.length;m!==g;++m){const y=u[m];p[m]=new bt(y,e,t)}return p}unsubscribe_(e){const t=this._bindingsIndicesByPath,n=t[e];if(n!==void 0){const i=this._paths,s=this._parsedPaths,a=this._bindings,c=a.length-1,u=a[c],h=e[c];t[h]=n,a[n]=u,a.pop(),s[n]=s[c],s.pop(),i[n]=i[c],i.pop()}}}class wy{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;const s=t.tracks,a=s.length,c=new Array(a),u={endingStart:ms,endingEnd:ms};for(let h=0;h!==a;++h){const f=s[h].createInterpolant(null);c[h]=f,f.settings=u}this._interpolantSettings=u,this._interpolants=c,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=a_,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){const i=this._clip.duration,s=e._clip.duration,a=s/i,c=i/s;e.warp(1,a,t),this.warp(c,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const i=this._mixer,s=i.time,a=this.timeScale;let c=this._timeScaleInterpolant;c===null&&(c=i._lendControlInterpolant(),this._timeScaleInterpolant=c);const u=c.parameterPositions,h=c.sampleValues;return u[0]=s,u[1]=s+n,h[0]=e/a,h[1]=t/a,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}const s=this._startTime;if(s!==null){const u=(e-s)*n;u<0||n===0?t=0:(this._startTime=null,t=n*u)}t*=this._updateTimeScale(e);const a=this._updateTime(t),c=this._updateWeight(e);if(c>0){const u=this._interpolants,h=this._propertyBindings;switch(this.blendMode){case mp:for(let f=0,p=u.length;f!==p;++f)u[f].evaluate(a),h[f].accumulateAdditive(c);break;case rh:default:for(let f=0,p=u.length;f!==p;++f)u[f].evaluate(a),h[f].accumulate(i,c)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let i=this.time+e,s=this._loopCount;const a=n===l_;if(e===0)return s===-1?i:a&&(s&1)===1?t-i:i;if(n===o_){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(s===-1&&(e>=0?(s=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),i>=t||i<0){const c=Math.floor(i/t);i-=t*c,s+=Math.abs(c);const u=this.repetitions-s;if(u<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(u===1){const h=e<0;this._setEndings(h,!h,a)}else this._setEndings(!1,!1,a);this._loopCount=s,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:c})}}else this.time=i;if(a&&(s&1)===1)return t-i}return i}_setEndings(e,t,n){const i=this._interpolantSettings;n?(i.endingStart=gs,i.endingEnd=gs):(e?i.endingStart=this.zeroSlopeAtStart?gs:ms:i.endingStart=Da,t?i.endingEnd=this.zeroSlopeAtEnd?gs:ms:i.endingEnd=Da)}_scheduleFading(e,t,n){const i=this._mixer,s=i.time;let a=this._weightInterpolant;a===null&&(a=i._lendControlInterpolant(),this._weightInterpolant=a);const c=a.parameterPositions,u=a.sampleValues;return c[0]=s,u[0]=t,c[1]=s+e,u[1]=n,this}}const Tb=new Float32Array(1);class bb extends ji{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const n=e._localRoot||this._root,i=e._clip.tracks,s=i.length,a=e._propertyBindings,c=e._interpolants,u=n.uuid,h=this._bindingsByRootAndName;let f=h[u];f===void 0&&(f={},h[u]=f);for(let p=0;p!==s;++p){const m=i[p],g=m.name;let y=f[g];if(y!==void 0)++y.referenceCount,a[p]=y;else{if(y=a[p],y!==void 0){y._cacheIndex===null&&(++y.referenceCount,this._addInactiveBinding(y,u,g));continue}const M=t&&t._propertyBindings[p].binding.parsedPath;y=new My(bt.create(n,g,M),m.ValueTypeName,m.getValueSize()),++y.referenceCount,this._addInactiveBinding(y,u,g),a[p]=y}c[p].resultBuffer=y.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,i=e._clip.uuid,s=this._actionsByClip[i];this._bindAction(e,s&&s.knownActions[0]),this._addInactiveAction(e,i,n)}const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];s.useCount++===0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];--s.useCount===0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const i=this._actions,s=this._actionsByClip;let a=s[t];if(a===void 0)a={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,s[t]=a;else{const c=a.knownActions;e._byClipCacheIndex=c.length,c.push(e)}e._cacheIndex=i.length,i.push(e),a.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;const s=e._clip.uuid,a=this._actionsByClip,c=a[s],u=c.knownActions,h=u[u.length-1],f=e._byClipCacheIndex;h._byClipCacheIndex=f,u[f]=h,u.pop(),e._byClipCacheIndex=null;const p=c.actionByRoot,m=(e._localRoot||this._root).uuid;delete p[m],u.length===0&&delete a[s],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];--s.referenceCount===0&&this._removeInactiveBinding(s)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_addInactiveBinding(e,t,n){const i=this._bindingsByRootAndName,s=this._bindings;let a=i[t];a===void 0&&(a={},i[t]=a),a[n]=e,e._cacheIndex=s.length,s.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,i=n.rootNode.uuid,s=n.path,a=this._bindingsByRootAndName,c=a[i],u=t[t.length-1],h=e._cacheIndex;u._cacheIndex=h,t[h]=u,t.pop(),delete c[s],Object.keys(c).length===0&&delete a[i]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new Bp(new Float32Array(2),new Float32Array(2),1,Tb),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,s=t[i];e.__cacheIndex=i,t[i]=e,s.__cacheIndex=n,t[n]=s}clipAction(e,t,n){const i=t||this._root,s=i.uuid;let a=typeof e=="string"?qa.findByName(i,e):e;const c=a!==null?a.uuid:e,u=this._actionsByClip[c];let h=null;if(n===void 0&&(a!==null?n=a.blendMode:n=rh),u!==void 0){const p=u.actionByRoot[s];if(p!==void 0&&p.blendMode===n)return p;h=u.knownActions[0],a===null&&(a=h._clip)}if(a===null)return null;const f=new wy(this,a,t,n);return this._bindAction(f,h),this._addInactiveAction(f,c,s),f}existingAction(e,t){const n=t||this._root,i=n.uuid,s=typeof e=="string"?qa.findByName(n,e):e,a=s?s.uuid:e,c=this._actionsByClip[a];return c!==void 0&&c.actionByRoot[i]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,i=this.time+=e,s=Math.sign(e),a=this._accuIndex^=1;for(let h=0;h!==n;++h)t[h]._update(i,e,s,a);const c=this._bindings,u=this._nActiveBindings;for(let h=0;h!==u;++h)c[h].apply(a);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,i=this._actionsByClip,s=i[n];if(s!==void 0){const a=s.knownActions;for(let c=0,u=a.length;c!==u;++c){const h=a[c];this._deactivateAction(h);const f=h._cacheIndex,p=t[t.length-1];h._cacheIndex=null,h._byClipCacheIndex=null,p._cacheIndex=f,t[f]=p,t.pop(),this._removeInactiveBindingsForAction(h)}delete i[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const a in n){const c=n[a].actionByRoot,u=c[t];u!==void 0&&(this._deactivateAction(u),this._removeInactiveAction(u))}const i=this._bindingsByRootAndName,s=i[t];if(s!==void 0)for(const a in s){const c=s[a];c.restoreOriginalState(),this._removeInactiveBinding(c)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}class qp{constructor(e){this.value=e}clone(){return new qp(this.value.clone===void 0?this.value:this.value.clone())}}let Cb=0;class Rb extends ji{constructor(){super(),this.isUniformsGroup=!0,Object.defineProperty(this,"id",{value:Cb++}),this.name="",this.usage=Fa,this.uniforms=[]}add(e){return this.uniforms.push(e),this}remove(e){const t=this.uniforms.indexOf(e);return t!==-1&&this.uniforms.splice(t,1),this}setName(e){return this.name=e,this}setUsage(e){return this.usage=e,this}dispose(){return this.dispatchEvent({type:"dispose"}),this}copy(e){this.name=e.name,this.usage=e.usage;const t=e.uniforms;this.uniforms.length=0;for(let n=0,i=t.length;n<i;n++){const s=Array.isArray(t[n])?t[n]:[t[n]];for(let a=0;a<s.length;a++)this.uniforms.push(s[a].clone())}return this}clone(){return new this.constructor().copy(this)}}class qu extends hh{constructor(e,t,n=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){const t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}}class Pb{constructor(e,t,n,i,s){this.isGLBufferAttribute=!0,this.name="",this.buffer=e,this.type=t,this.itemSize=n,this.elementSize=i,this.count=s,this.version=0}set needsUpdate(e){e===!0&&this.version++}setBuffer(e){return this.buffer=e,this}setType(e,t){return this.type=e,this.elementSize=t,this}setItemSize(e){return this.itemSize=e,this}setCount(e){return this.count=e,this}}const K0=new et;class Ey{constructor(e,t,n=0,i=1/0){this.ray=new Lo(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new ws,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return K0.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(K0),this}intersectObject(e,t=!0,n=[]){return ep(e,this,n,t),n.sort(Q0),n}intersectObjects(e,t=!0,n=[]){for(let i=0,s=e.length;i<s;i++)ep(e[i],this,n,t);return n.sort(Q0),n}}function Q0(r,e){return r.distance-e.distance}function ep(r,e,t,n){let i=!0;if(r.layers.test(e.layers)&&r.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){const s=r.children;for(let a=0,c=s.length;a<c;a++)ep(s[a],e,t,!0)}}class Ib{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Zt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Lb{constructor(e=1,t=0,n=0){return this.radius=e,this.theta=t,this.y=n,this}set(e,t,n){return this.radius=e,this.theta=t,this.y=n,this}copy(e){return this.radius=e.radius,this.theta=e.theta,this.y=e.y,this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+n*n),this.theta=Math.atan2(e,n),this.y=t,this}clone(){return new this.constructor().copy(this)}}class Zp{constructor(e,t,n,i){Zp.prototype.isMatrix2=!0,this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,i){const s=this.elements;return s[0]=e,s[2]=t,s[1]=n,s[3]=i,this}}const $0=new fe;class Db{constructor(e=new fe(1/0,1/0),t=new fe(-1/0,-1/0)){this.isBox2=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=$0.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,$0).distanceTo(e)}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ev=new D,qc=new D;class Ay{constructor(e=new D,t=new D){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){ev.subVectors(e,this.start),qc.subVectors(this.end,this.start);const n=qc.dot(qc);let s=qc.dot(ev)/n;return t&&(s=Zt(s,0,1)),s}closestPointToPoint(e,t,n){const i=this.closestPointToPointParameter(e,t);return this.delta(n).multiplyScalar(i).add(this.start)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}const tv=new D;class Ub extends Ct{constructor(e,t){super(),this.light=e,this.matrixAutoUpdate=!1,this.color=t,this.type="SpotLightHelper";const n=new vt,i=[0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,-1,0,1,0,0,0,0,1,1,0,0,0,0,-1,1];for(let a=0,c=1,u=32;a<u;a++,c++){const h=a/u*Math.PI*2,f=c/u*Math.PI*2;i.push(Math.cos(h),Math.sin(h),1,Math.cos(f),Math.sin(f),1)}n.setAttribute("position",new We(i,3));const s=new kn({fog:!1,toneMapped:!1});this.cone=new Ji(n,s),this.add(this.cone),this.update()}dispose(){this.cone.geometry.dispose(),this.cone.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),this.parent?(this.parent.updateWorldMatrix(!0),this.matrix.copy(this.parent.matrixWorld).invert().multiply(this.light.matrixWorld)):this.matrix.copy(this.light.matrixWorld),this.matrixWorld.copy(this.light.matrixWorld);const e=this.light.distance?this.light.distance:1e3,t=e*Math.tan(this.light.angle);this.cone.scale.set(t,t,e),tv.setFromMatrixPosition(this.light.target.matrixWorld),this.cone.lookAt(tv),this.color!==void 0?this.cone.material.color.set(this.color):this.cone.material.color.copy(this.light.color)}}const Nr=new D,Zc=new et,Td=new et;class Nb extends Ji{constructor(e){const t=Ty(e),n=new vt,i=[],s=[],a=new Pe(0,0,1),c=new Pe(0,1,0);for(let h=0;h<t.length;h++){const f=t[h];f.parent&&f.parent.isBone&&(i.push(0,0,0),i.push(0,0,0),s.push(a.r,a.g,a.b),s.push(c.r,c.g,c.b))}n.setAttribute("position",new We(i,3)),n.setAttribute("color",new We(s,3));const u=new kn({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(n,u),this.isSkeletonHelper=!0,this.type="SkeletonHelper",this.root=e,this.bones=t,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1}updateMatrixWorld(e){const t=this.bones,n=this.geometry,i=n.getAttribute("position");Td.copy(this.root.matrixWorld).invert();for(let s=0,a=0;s<t.length;s++){const c=t[s];c.parent&&c.parent.isBone&&(Zc.multiplyMatrices(Td,c.matrixWorld),Nr.setFromMatrixPosition(Zc),i.setXYZ(a,Nr.x,Nr.y,Nr.z),Zc.multiplyMatrices(Td,c.parent.matrixWorld),Nr.setFromMatrixPosition(Zc),i.setXYZ(a+1,Nr.x,Nr.y,Nr.z),a+=2)}n.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(e)}dispose(){this.geometry.dispose(),this.material.dispose()}}function Ty(r){const e=[];r.isBone===!0&&e.push(r);for(let t=0;t<r.children.length;t++)e.push.apply(e,Ty(r.children[t]));return e}class Ob extends $t{constructor(e,t,n){const i=new sl(t,4,2),s=new Vr({wireframe:!0,fog:!1,toneMapped:!1});super(i,s),this.light=e,this.color=n,this.type="PointLightHelper",this.matrix=this.light.matrixWorld,this.matrixAutoUpdate=!1,this.update()}dispose(){this.geometry.dispose(),this.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.color!==void 0?this.material.color.set(this.color):this.material.color.copy(this.light.color)}}const Fb=new D,nv=new Pe,iv=new Pe;class Bb extends Ct{constructor(e,t,n){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="HemisphereLightHelper";const i=new rl(t);i.rotateY(Math.PI*.5),this.material=new Vr({wireframe:!0,fog:!1,toneMapped:!1}),this.color===void 0&&(this.material.vertexColors=!0);const s=i.getAttribute("position"),a=new Float32Array(s.count*3);i.setAttribute("color",new Ot(a,3)),this.add(new $t(i,this.material)),this.update()}dispose(){this.children[0].geometry.dispose(),this.children[0].material.dispose()}update(){const e=this.children[0];if(this.color!==void 0)this.material.color.set(this.color);else{const t=e.geometry.getAttribute("color");nv.copy(this.light.color),iv.copy(this.light.groundColor);for(let n=0,i=t.count;n<i;n++){const s=n<i/2?nv:iv;t.setXYZ(n,s.r,s.g,s.b)}t.needsUpdate=!0}this.light.updateWorldMatrix(!0,!1),e.lookAt(Fb.setFromMatrixPosition(this.light.matrixWorld).negate())}}class zb extends Ji{constructor(e=10,t=10,n=4473924,i=8947848){n=new Pe(n),i=new Pe(i);const s=t/2,a=e/t,c=e/2,u=[],h=[];for(let m=0,g=0,y=-c;m<=t;m++,y+=a){u.push(-c,0,y,c,0,y),u.push(y,0,-c,y,0,c);const M=m===s?n:i;M.toArray(h,g),g+=3,M.toArray(h,g),g+=3,M.toArray(h,g),g+=3,M.toArray(h,g),g+=3}const f=new vt;f.setAttribute("position",new We(u,3)),f.setAttribute("color",new We(h,3));const p=new kn({vertexColors:!0,toneMapped:!1});super(f,p),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class kb extends Ji{constructor(e=10,t=16,n=8,i=64,s=4473924,a=8947848){s=new Pe(s),a=new Pe(a);const c=[],u=[];if(t>1)for(let p=0;p<t;p++){const m=p/t*(Math.PI*2),g=Math.sin(m)*e,y=Math.cos(m)*e;c.push(0,0,0),c.push(g,0,y);const M=p&1?s:a;u.push(M.r,M.g,M.b),u.push(M.r,M.g,M.b)}for(let p=0;p<n;p++){const m=p&1?s:a,g=e-e/n*p;for(let y=0;y<i;y++){let M=y/i*(Math.PI*2),x=Math.sin(M)*g,_=Math.cos(M)*g;c.push(x,0,_),u.push(m.r,m.g,m.b),M=(y+1)/i*(Math.PI*2),x=Math.sin(M)*g,_=Math.cos(M)*g,c.push(x,0,_),u.push(m.r,m.g,m.b)}}const h=new vt;h.setAttribute("position",new We(c,3)),h.setAttribute("color",new We(u,3));const f=new kn({vertexColors:!0,toneMapped:!1});super(h,f),this.type="PolarGridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}const rv=new D,jc=new D,sv=new D;class Hb extends Ct{constructor(e,t,n){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="DirectionalLightHelper",t===void 0&&(t=1);let i=new vt;i.setAttribute("position",new We([-t,t,0,t,t,0,t,-t,0,-t,-t,0,-t,t,0],3));const s=new kn({fog:!1,toneMapped:!1});this.lightPlane=new kr(i,s),this.add(this.lightPlane),i=new vt,i.setAttribute("position",new We([0,0,0,0,0,1],3)),this.targetLine=new kr(i,s),this.add(this.targetLine),this.update()}dispose(){this.lightPlane.geometry.dispose(),this.lightPlane.material.dispose(),this.targetLine.geometry.dispose(),this.targetLine.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),rv.setFromMatrixPosition(this.light.matrixWorld),jc.setFromMatrixPosition(this.light.target.matrixWorld),sv.subVectors(jc,rv),this.lightPlane.lookAt(jc),this.color!==void 0?(this.lightPlane.material.color.set(this.color),this.targetLine.material.color.set(this.color)):(this.lightPlane.material.color.copy(this.light.color),this.targetLine.material.color.copy(this.light.color)),this.targetLine.lookAt(jc),this.targetLine.scale.z=sv.length()}}const Jc=new D,qt=new $a;class Vb extends Ji{constructor(e){const t=new vt,n=new kn({color:16777215,vertexColors:!0,toneMapped:!1}),i=[],s=[],a={};c("n1","n2"),c("n2","n4"),c("n4","n3"),c("n3","n1"),c("f1","f2"),c("f2","f4"),c("f4","f3"),c("f3","f1"),c("n1","f1"),c("n2","f2"),c("n3","f3"),c("n4","f4"),c("p","n1"),c("p","n2"),c("p","n3"),c("p","n4"),c("u1","u2"),c("u2","u3"),c("u3","u1"),c("c","t"),c("p","c"),c("cn1","cn2"),c("cn3","cn4"),c("cf1","cf2"),c("cf3","cf4");function c(y,M){u(y),u(M)}function u(y){i.push(0,0,0),s.push(0,0,0),a[y]===void 0&&(a[y]=[]),a[y].push(i.length/3-1)}t.setAttribute("position",new We(i,3)),t.setAttribute("color",new We(s,3)),super(t,n),this.type="CameraHelper",this.camera=e,this.camera.updateProjectionMatrix&&this.camera.updateProjectionMatrix(),this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.pointMap=a,this.update();const h=new Pe(16755200),f=new Pe(16711680),p=new Pe(43775),m=new Pe(16777215),g=new Pe(3355443);this.setColors(h,f,p,m,g)}setColors(e,t,n,i,s){const c=this.geometry.getAttribute("color");c.setXYZ(0,e.r,e.g,e.b),c.setXYZ(1,e.r,e.g,e.b),c.setXYZ(2,e.r,e.g,e.b),c.setXYZ(3,e.r,e.g,e.b),c.setXYZ(4,e.r,e.g,e.b),c.setXYZ(5,e.r,e.g,e.b),c.setXYZ(6,e.r,e.g,e.b),c.setXYZ(7,e.r,e.g,e.b),c.setXYZ(8,e.r,e.g,e.b),c.setXYZ(9,e.r,e.g,e.b),c.setXYZ(10,e.r,e.g,e.b),c.setXYZ(11,e.r,e.g,e.b),c.setXYZ(12,e.r,e.g,e.b),c.setXYZ(13,e.r,e.g,e.b),c.setXYZ(14,e.r,e.g,e.b),c.setXYZ(15,e.r,e.g,e.b),c.setXYZ(16,e.r,e.g,e.b),c.setXYZ(17,e.r,e.g,e.b),c.setXYZ(18,e.r,e.g,e.b),c.setXYZ(19,e.r,e.g,e.b),c.setXYZ(20,e.r,e.g,e.b),c.setXYZ(21,e.r,e.g,e.b),c.setXYZ(22,e.r,e.g,e.b),c.setXYZ(23,e.r,e.g,e.b),c.setXYZ(24,t.r,t.g,t.b),c.setXYZ(25,t.r,t.g,t.b),c.setXYZ(26,t.r,t.g,t.b),c.setXYZ(27,t.r,t.g,t.b),c.setXYZ(28,t.r,t.g,t.b),c.setXYZ(29,t.r,t.g,t.b),c.setXYZ(30,t.r,t.g,t.b),c.setXYZ(31,t.r,t.g,t.b),c.setXYZ(32,n.r,n.g,n.b),c.setXYZ(33,n.r,n.g,n.b),c.setXYZ(34,n.r,n.g,n.b),c.setXYZ(35,n.r,n.g,n.b),c.setXYZ(36,n.r,n.g,n.b),c.setXYZ(37,n.r,n.g,n.b),c.setXYZ(38,i.r,i.g,i.b),c.setXYZ(39,i.r,i.g,i.b),c.setXYZ(40,s.r,s.g,s.b),c.setXYZ(41,s.r,s.g,s.b),c.setXYZ(42,s.r,s.g,s.b),c.setXYZ(43,s.r,s.g,s.b),c.setXYZ(44,s.r,s.g,s.b),c.setXYZ(45,s.r,s.g,s.b),c.setXYZ(46,s.r,s.g,s.b),c.setXYZ(47,s.r,s.g,s.b),c.setXYZ(48,s.r,s.g,s.b),c.setXYZ(49,s.r,s.g,s.b),c.needsUpdate=!0}update(){const e=this.geometry,t=this.pointMap,n=1,i=1;qt.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse),Qt("c",t,e,qt,0,0,-1),Qt("t",t,e,qt,0,0,1),Qt("n1",t,e,qt,-n,-i,-1),Qt("n2",t,e,qt,n,-i,-1),Qt("n3",t,e,qt,-n,i,-1),Qt("n4",t,e,qt,n,i,-1),Qt("f1",t,e,qt,-n,-i,1),Qt("f2",t,e,qt,n,-i,1),Qt("f3",t,e,qt,-n,i,1),Qt("f4",t,e,qt,n,i,1),Qt("u1",t,e,qt,n*.7,i*1.1,-1),Qt("u2",t,e,qt,-n*.7,i*1.1,-1),Qt("u3",t,e,qt,0,i*2,-1),Qt("cf1",t,e,qt,-n,0,1),Qt("cf2",t,e,qt,n,0,1),Qt("cf3",t,e,qt,0,-i,1),Qt("cf4",t,e,qt,0,i,1),Qt("cn1",t,e,qt,-n,0,-1),Qt("cn2",t,e,qt,n,0,-1),Qt("cn3",t,e,qt,0,-i,-1),Qt("cn4",t,e,qt,0,i,-1),e.getAttribute("position").needsUpdate=!0}dispose(){this.geometry.dispose(),this.material.dispose()}}function Qt(r,e,t,n,i,s,a){Jc.set(i,s,a).unproject(n);const c=e[r];if(c!==void 0){const u=t.getAttribute("position");for(let h=0,f=c.length;h<f;h++)u.setXYZ(c[h],Jc.x,Jc.y,Jc.z)}}const Kc=new pn;class Gb extends Ji{constructor(e,t=16776960){const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=new Float32Array(8*3),s=new vt;s.setIndex(new Ot(n,1)),s.setAttribute("position",new Ot(i,3)),super(s,new kn({color:t,toneMapped:!1})),this.object=e,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(e){if(e!==void 0&&console.warn("THREE.BoxHelper: .update() has no longer arguments."),this.object!==void 0&&Kc.setFromObject(this.object),Kc.isEmpty())return;const t=Kc.min,n=Kc.max,i=this.geometry.attributes.position,s=i.array;s[0]=n.x,s[1]=n.y,s[2]=n.z,s[3]=t.x,s[4]=n.y,s[5]=n.z,s[6]=t.x,s[7]=t.y,s[8]=n.z,s[9]=n.x,s[10]=t.y,s[11]=n.z,s[12]=n.x,s[13]=n.y,s[14]=t.z,s[15]=t.x,s[16]=n.y,s[17]=t.z,s[18]=t.x,s[19]=t.y,s[20]=t.z,s[21]=n.x,s[22]=t.y,s[23]=t.z,i.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(e){return this.object=e,this.update(),this}copy(e,t){return super.copy(e,t),this.object=e.object,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class Wb extends Ji{constructor(e,t=16776960){const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],s=new vt;s.setIndex(new Ot(n,1)),s.setAttribute("position",new We(i,3)),super(s,new kn({color:t,toneMapped:!1})),this.box=e,this.type="Box3Helper",this.geometry.computeBoundingSphere()}updateMatrixWorld(e){const t=this.box;t.isEmpty()||(t.getCenter(this.position),t.getSize(this.scale),this.scale.multiplyScalar(.5),super.updateMatrixWorld(e))}dispose(){this.geometry.dispose(),this.material.dispose()}}class Xb extends kr{constructor(e,t=1,n=16776960){const i=n,s=[1,-1,0,-1,1,0,-1,-1,0,1,1,0,-1,1,0,-1,-1,0,1,-1,0,1,1,0],a=new vt;a.setAttribute("position",new We(s,3)),a.computeBoundingSphere(),super(a,new kn({color:i,toneMapped:!1})),this.type="PlaneHelper",this.plane=e,this.size=t;const c=[1,1,0,-1,1,0,-1,-1,0,1,1,0,-1,-1,0,1,-1,0],u=new vt;u.setAttribute("position",new We(c,3)),u.computeBoundingSphere(),this.add(new $t(u,new Vr({color:i,opacity:.2,transparent:!0,depthWrite:!1,toneMapped:!1})))}updateMatrixWorld(e){this.position.set(0,0,0),this.scale.set(.5*this.size,.5*this.size,1),this.lookAt(this.plane.normal),this.translateZ(-this.plane.constant),super.updateMatrixWorld(e)}dispose(){this.geometry.dispose(),this.material.dispose(),this.children[0].geometry.dispose(),this.children[0].material.dispose()}}const ov=new D;let Qc,bd;class Yb extends Ct{constructor(e=new D(0,0,1),t=new D(0,0,0),n=1,i=16776960,s=n*.2,a=s*.2){super(),this.type="ArrowHelper",Qc===void 0&&(Qc=new vt,Qc.setAttribute("position",new We([0,0,0,0,1,0],3)),bd=new No(0,.5,1,5,1),bd.translate(0,-.5,0)),this.position.copy(t),this.line=new kr(Qc,new kn({color:i,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new $t(bd,new Vr({color:i,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(e),this.setLength(n,s,a)}setDirection(e){if(e.y>.99999)this.quaternion.set(0,0,0,1);else if(e.y<-.99999)this.quaternion.set(1,0,0,0);else{ov.set(e.z,0,-e.x).normalize();const t=Math.acos(e.y);this.quaternion.setFromAxisAngle(ov,t)}}setLength(e,t=e*.2,n=t*.2){this.line.scale.set(1,Math.max(1e-4,e-t),1),this.line.updateMatrix(),this.cone.scale.set(n,t,n),this.cone.position.y=e,this.cone.updateMatrix()}setColor(e){this.line.material.color.set(e),this.cone.material.color.set(e)}copy(e){return super.copy(e,!1),this.line.copy(e.line),this.cone.copy(e.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}}class qb extends Ji{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],i=new vt;i.setAttribute("position",new We(t,3)),i.setAttribute("color",new We(n,3));const s=new kn({vertexColors:!0,toneMapped:!1});super(i,s),this.type="AxesHelper"}setColors(e,t,n){const i=new Pe,s=this.geometry.attributes.color.array;return i.set(e),i.toArray(s,0),i.toArray(s,3),i.set(t),i.toArray(s,6),i.toArray(s,9),i.set(n),i.toArray(s,12),i.toArray(s,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class Zb{constructor(){this.type="ShapePath",this.color=new Pe,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new Ha,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,n,i){return this.currentPath.quadraticCurveTo(e,t,n,i),this}bezierCurveTo(e,t,n,i,s,a){return this.currentPath.bezierCurveTo(e,t,n,i,s,a),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(_){const E=[];for(let w=0,T=_.length;w<T;w++){const O=_[w],P=new Br;P.curves=O.curves,E.push(P)}return E}function n(_,E){const w=E.length;let T=!1;for(let O=w-1,P=0;P<w;O=P++){let I=E[O],N=E[P],W=N.x-I.x,b=N.y-I.y;if(Math.abs(b)>Number.EPSILON){if(b<0&&(I=E[P],W=-W,N=E[O],b=-b),_.y<I.y||_.y>N.y)continue;if(_.y===I.y){if(_.x===I.x)return!0}else{const C=b*(_.x-I.x)-W*(_.y-I.y);if(C===0)return!0;if(C<0)continue;T=!T}}else{if(_.y!==I.y)continue;if(N.x<=_.x&&_.x<=I.x||I.x<=_.x&&_.x<=N.x)return!0}}return T}const i=qi.isClockWise,s=this.subPaths;if(s.length===0)return[];let a,c,u;const h=[];if(s.length===1)return c=s[0],u=new Br,u.curves=c.curves,h.push(u),h;let f=!i(s[0].getPoints());f=e?!f:f;const p=[],m=[];let g=[],y=0,M;m[y]=void 0,g[y]=[];for(let _=0,E=s.length;_<E;_++)c=s[_],M=c.getPoints(),a=i(M),a=e?!a:a,a?(!f&&m[y]&&y++,m[y]={s:new Br,p:M},m[y].s.curves=c.curves,f&&y++,g[y]=[]):g[y].push({h:c,p:M[0]});if(!m[0])return t(s);if(m.length>1){let _=!1,E=0;for(let w=0,T=m.length;w<T;w++)p[w]=[];for(let w=0,T=m.length;w<T;w++){const O=g[w];for(let P=0;P<O.length;P++){const I=O[P];let N=!0;for(let W=0;W<m.length;W++)n(I.p,m[W].p)&&(w!==W&&E++,N?(N=!1,p[W].push(I)):_=!0);N&&p[w].push(I)}}E>0&&_===!1&&(g=p)}let x;for(let _=0,E=m.length;_<E;_++){u=m[_].s,h.push(u),x=g[_];for(let w=0,T=x.length;w<T;w++)u.holes.push(x[w].h)}return h}}class jb extends ji{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}class Jb extends vi{constructor(e=1,t=1,n=1,i={}){console.warn('THREE.WebGLMultipleRenderTargets has been deprecated and will be removed in r172. Use THREE.WebGLRenderTarget and set the "count" parameter to enable MRT.'),super(e,t,{...i,count:n}),this.isWebGLMultipleRenderTargets=!0}get texture(){return this.textures}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ja}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ja);const Kb=Object.freeze(Object.defineProperty({__proto__:null,ACESFilmicToneMapping:rp,AddEquation:Fr,AddOperation:Qv,AdditiveAnimationBlendMode:mp,AdditiveBlending:kd,AgXToneMapping:i_,AlphaFormat:cp,AlwaysCompare:__,AlwaysDepth:hu,AlwaysStencilFunc:Wd,AmbientLight:gy,AnimationAction:wy,AnimationClip:qa,AnimationLoader:QT,AnimationMixer:bb,AnimationObjectGroup:Ab,AnimationUtils:ZT,ArcCurve:G_,ArrayCamera:D_,ArrowHelper:Yb,AttachedBindMode:Gd,Audio:Sy,AudioAnalyser:mb,AudioContext:Gp,AudioListener:fb,AudioLoader:cb,AxesHelper:qb,BackSide:Pn,BasicDepthPacking:c_,BasicShadowMap:Lv,BatchedMesh:k_,Bone:Tp,BooleanKeyframeTrack:Is,Box2:Db,Box3:pn,Box3Helper:Wb,BoxGeometry:Ps,BoxHelper:Gb,BufferAttribute:Ot,BufferGeometry:vt,BufferGeometryLoader:xy,ByteType:op,Cache:fr,Camera:$a,CameraHelper:Vb,CanvasTexture:_T,CapsuleGeometry:mh,CatmullRomCurve3:W_,CineonToneMapping:t_,CircleGeometry:gh,ClampToEdgeWrapping:gi,Clock:Wp,Color:Pe,ColorKeyframeTrack:zp,ColorManagement:Dt,CompressedArrayTexture:gT,CompressedCubeTexture:vT,CompressedTexture:dh,CompressedTextureLoader:$T,ConeGeometry:vh,ConstantAlphaFactor:jv,ConstantColorFactor:qv,Controls:jb,CubeCamera:A_,CubeReflectionMapping:pr,CubeRefractionMapping:zr,CubeTexture:el,CubeTextureLoader:eb,CubeUVReflectionMapping:Io,CubicBezierCurve:Rp,CubicBezierCurve3:X_,CubicInterpolant:ly,CullFaceBack:zd,CullFaceFront:Iv,CullFaceFrontBack:Xx,CullFaceNone:Pv,Curve:Ri,CurvePath:q_,CustomBlending:Dv,CustomToneMapping:n_,CylinderGeometry:No,Cylindrical:Lb,Data3DTexture:_p,DataArrayTexture:oh,DataTexture:Yi,DataTextureLoader:tb,DataUtils:sM,DecrementStencilOp:sS,DecrementWrapStencilOp:aS,DefaultLoadingManager:hy,DepthFormat:xs,DepthStencilFormat:bs,DepthTexture:ah,DetachedBindMode:s_,DirectionalLight:my,DirectionalLightHelper:Hb,DiscreteInterpolant:cy,DisplayP3ColorSpace:sh,DodecahedronGeometry:_h,DoubleSide:Vi,DstAlphaFactor:Vv,DstColorFactor:Wv,DynamicCopyUsage:MS,DynamicDrawUsage:gS,DynamicReadUsage:yS,EdgesGeometry:Z_,EllipseCurve:ph,EqualCompare:p_,EqualDepth:du,EqualStencilFunc:hS,EquirectangularReflectionMapping:Ca,EquirectangularRefractionMapping:Ra,Euler:ii,EventDispatcher:ji,ExtrudeGeometry:xh,FileLoader:gr,Float16BufferAttribute:hM,Float32BufferAttribute:We,FloatType:zn,Fog:uh,FogExp2:ch,FramebufferTexture:mT,FrontSide:Zi,Frustum:tl,GLBufferAttribute:Pb,GLSL1:ES,GLSL3:Xd,GreaterCompare:m_,GreaterDepth:mu,GreaterEqualCompare:v_,GreaterEqualDepth:pu,GreaterEqualStencilFunc:mS,GreaterStencilFunc:dS,GridHelper:zb,Group:So,HalfFloatType:Rs,HemisphereLight:fy,HemisphereLightHelper:Bb,IcosahedronGeometry:Sh,ImageBitmapLoader:lb,ImageLoader:Za,ImageUtils:S_,IncrementStencilOp:rS,IncrementWrapStencilOp:oS,InstancedBufferAttribute:Co,InstancedBufferGeometry:Vp,InstancedInterleavedBuffer:qu,InstancedMesh:z_,Int16BufferAttribute:cM,Int32BufferAttribute:uM,Int8BufferAttribute:oM,IntType:Qu,InterleavedBuffer:hh,InterleavedBufferAttribute:ti,Interpolant:ol,InterpolateDiscrete:La,InterpolateLinear:Gu,InterpolateSmooth:ru,InvertStencilOp:lS,KeepStencilOp:fs,KeyframeTrack:Pi,LOD:F_,LatheGeometry:il,Layers:ws,LessCompare:d_,LessDepth:fu,LessEqualCompare:gp,LessEqualDepth:As,LessEqualStencilFunc:fS,LessStencilFunc:uS,Light:Wr,LightProbe:yy,Line:kr,Line3:Ay,LineBasicMaterial:kn,LineCurve:Pp,LineCurve3:Y_,LineDashedMaterial:sy,LineLoop:H_,LineSegments:Ji,LinearDisplayP3ColorSpace:Qa,LinearFilter:jt,LinearInterpolant:Bp,LinearMipMapLinearFilter:jx,LinearMipMapNearestFilter:Zx,LinearMipmapLinearFilter:Wi,LinearMipmapNearestFilter:ya,LinearSRGBColorSpace:vr,LinearToneMapping:$v,LinearTransfer:Ua,Loader:qn,LoaderUtils:$d,LoadingManager:kp,LoopOnce:o_,LoopPingPong:l_,LoopRepeat:a_,LuminanceAlphaFormat:fp,LuminanceFormat:hp,MOUSE:Gx,Material:In,MaterialLoader:Ch,MathUtils:Ms,Matrix2:Zp,Matrix3:dt,Matrix4:et,MaxEquation:Fv,Mesh:$t,MeshBasicMaterial:Vr,MeshDepthMaterial:Mp,MeshDistanceMaterial:wp,MeshLambertMaterial:iy,MeshMatcapMaterial:ry,MeshNormalMaterial:ny,MeshPhongMaterial:ey,MeshPhysicalMaterial:Op,MeshStandardMaterial:Np,MeshToonMaterial:ty,MinEquation:Ov,MirroredRepeatWrapping:Ia,MixOperation:Kv,MultiplyBlending:Vd,MultiplyOperation:Ja,NearestFilter:dn,NearestMipMapLinearFilter:qx,NearestMipMapNearestFilter:Yx,NearestMipmapLinearFilter:_o,NearestMipmapNearestFilter:sp,NeutralToneMapping:r_,NeverCompare:f_,NeverDepth:uu,NeverStencilFunc:cS,NoBlending:dr,NoColorSpace:ur,NoToneMapping:bi,NormalAnimationBlendMode:rh,NormalBlending:ys,NotEqualCompare:g_,NotEqualDepth:gu,NotEqualStencilFunc:pS,NumberKeyframeTrack:Xa,Object3D:Ct,ObjectLoader:ob,ObjectSpaceNormalMap:h_,OctahedronGeometry:rl,OneFactor:zv,OneMinusConstantAlphaFactor:Jv,OneMinusConstantColorFactor:Zv,OneMinusDstAlphaFactor:Gv,OneMinusDstColorFactor:Xv,OneMinusSrcAlphaFactor:cu,OneMinusSrcColorFactor:Hv,OrthographicCamera:nl,P3Primaries:Oa,PCFShadowMap:Ju,PCFSoftShadowMap:_a,PMREMGenerator:Yd,Path:Ha,PerspectiveCamera:fn,Plane:Or,PlaneGeometry:Do,PlaneHelper:Xb,PointLight:py,PointLightHelper:Ob,Points:V_,PointsMaterial:bp,PolarGridHelper:kb,PolyhedronGeometry:Gr,PositionalAudio:pb,PropertyBinding:bt,PropertyMixer:My,QuadraticBezierCurve:Ip,QuadraticBezierCurve3:Lp,Quaternion:Yn,QuaternionKeyframeTrack:al,QuaternionLinearInterpolant:uy,RED_GREEN_RGTC2_Format:Hu,RED_RGTC1_Format:pp,REVISION:ja,RGBADepthPacking:u_,RGBAFormat:Rn,RGBAIntegerFormat:ih,RGBA_ASTC_10x10_Format:Nu,RGBA_ASTC_10x5_Format:Lu,RGBA_ASTC_10x6_Format:Du,RGBA_ASTC_10x8_Format:Uu,RGBA_ASTC_12x10_Format:Ou,RGBA_ASTC_12x12_Format:Fu,RGBA_ASTC_4x4_Format:Eu,RGBA_ASTC_5x4_Format:Au,RGBA_ASTC_5x5_Format:Tu,RGBA_ASTC_6x5_Format:bu,RGBA_ASTC_6x6_Format:Cu,RGBA_ASTC_8x5_Format:Ru,RGBA_ASTC_8x6_Format:Pu,RGBA_ASTC_8x8_Format:Iu,RGBA_BPTC_Format:Ea,RGBA_ETC2_EAC_Format:wu,RGBA_PVRTC_2BPPV1_Format:xu,RGBA_PVRTC_4BPPV1_Format:yu,RGBA_S3TC_DXT1_Format:Sa,RGBA_S3TC_DXT3_Format:Ma,RGBA_S3TC_DXT5_Format:wa,RGBDepthPacking:eS,RGBFormat:up,RGBIntegerFormat:Jx,RGB_BPTC_SIGNED_Format:Bu,RGB_BPTC_UNSIGNED_Format:zu,RGB_ETC1_Format:Su,RGB_ETC2_Format:Mu,RGB_PVRTC_2BPPV1_Format:_u,RGB_PVRTC_4BPPV1_Format:vu,RGB_S3TC_DXT1_Format:xa,RGDepthPacking:tS,RGFormat:dp,RGIntegerFormat:nh,RawShaderMaterial:$_,Ray:Lo,Raycaster:Ey,Rec709Primaries:Na,RectAreaLight:vy,RedFormat:th,RedIntegerFormat:Ka,ReinhardToneMapping:e_,RenderTarget:M_,RepeatWrapping:Pa,ReplaceStencilOp:iS,ReverseSubtractEquation:Nv,RingGeometry:Mh,SIGNED_RED_GREEN_RGTC2_Format:Vu,SIGNED_RED_RGTC1_Format:ku,SRGBColorSpace:mi,SRGBTransfer:zt,Scene:Ep,ShaderChunk:mt,ShaderLib:Ti,ShaderMaterial:ri,ShadowMaterial:Q_,Shape:Br,ShapeGeometry:wh,ShapePath:Zb,ShapeUtils:qi,ShortType:ap,Skeleton:fh,SkeletonHelper:Nb,SkinnedMesh:B_,Source:vs,Sphere:mn,SphereGeometry:sl,Spherical:Ib,SphericalHarmonics3:_y,SplineCurve:Dp,SpotLight:dy,SpotLightHelper:Ub,Sprite:O_,SpriteMaterial:Ap,SrcAlphaFactor:lu,SrcAlphaSaturateFactor:Yv,SrcColorFactor:kv,StaticCopyUsage:SS,StaticDrawUsage:Fa,StaticReadUsage:_S,StereoCamera:ub,StreamCopyUsage:wS,StreamDrawUsage:vS,StreamReadUsage:xS,StringKeyframeTrack:Ls,SubtractEquation:Uv,SubtractiveBlending:Hd,TOUCH:Wx,TangentSpaceNormalMap:Hr,TetrahedronGeometry:Eh,Texture:Jt,TextureLoader:nb,TextureUtils:ZA,TorusGeometry:Ah,TorusKnotGeometry:Th,Triangle:Xn,TriangleFanDrawMode:$x,TriangleStripDrawMode:Qx,TrianglesDrawMode:Kx,TubeGeometry:bh,UVMapping:Ku,Uint16BufferAttribute:yp,Uint32BufferAttribute:xp,Uint8BufferAttribute:aM,Uint8ClampedBufferAttribute:lM,Uniform:qp,UniformsGroup:Rb,UniformsLib:Ae,UniformsUtils:ka,UnsignedByteType:Ci,UnsignedInt248Type:Ts,UnsignedInt5999Type:lp,UnsignedIntType:mr,UnsignedShort4444Type:$u,UnsignedShort5551Type:eh,UnsignedShortType:Ao,VSMShadowMap:Ai,Vector2:fe,Vector3:D,Vector4:xt,VectorKeyframeTrack:Ya,VideoTexture:pT,WebGL3DRenderTarget:jS,WebGLArrayRenderTarget:ZS,WebGLCoordinateSystem:Xi,WebGLCubeRenderTarget:T_,WebGLMultipleRenderTargets:Jb,WebGLRenderTarget:vi,WebGLRenderer:U_,WebGLUtils:L_,WebGPUCoordinateSystem:Ba,WireframeGeometry:Up,WrapAroundEnding:Da,ZeroCurvatureEnding:ms,ZeroFactor:Bv,ZeroSlopeEnding:gs,ZeroStencilOp:nS,createCanvasElement:x_},Symbol.toStringTag,{value:"Module"}));var by={exports:{}},Ds={};/**
 * @license React
 * react-reconciler-constants.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */Ds.ConcurrentRoot=1;Ds.ContinuousEventPriority=4;Ds.DefaultEventPriority=16;Ds.DiscreteEventPriority=1;Ds.IdleEventPriority=536870912;Ds.LegacyRoot=0;by.exports=Ds;var wo=by.exports;function Qb(r){let e;const t=new Set,n=(h,f)=>{const p=typeof h=="function"?h(e):h;if(p!==e){const m=e;e=f?p:Object.assign({},e,p),t.forEach(g=>g(e,m))}},i=()=>e,s=(h,f=i,p=Object.is)=>{console.warn("[DEPRECATED] Please use `subscribeWithSelector` middleware");let m=f(e);function g(){const y=f(e);if(!p(m,y)){const M=m;h(m=y,M)}}return t.add(g),()=>t.delete(g)},u={setState:n,getState:i,subscribe:(h,f,p)=>f||p?s(h,f,p):(t.add(h),()=>t.delete(h)),destroy:()=>t.clear()};return e=r(n,i,u),u}const $b=typeof window>"u"||!window.navigator||/ServerSideRendering|^Deno\//.test(window.navigator.userAgent),av=$b?ye.useEffect:ye.useLayoutEffect;function eC(r){const e=typeof r=="function"?Qb(r):r,t=(n=e.getState,i=Object.is)=>{const[,s]=ye.useReducer(x=>x+1,0),a=e.getState(),c=ye.useRef(a),u=ye.useRef(n),h=ye.useRef(i),f=ye.useRef(!1),p=ye.useRef();p.current===void 0&&(p.current=n(a));let m,g=!1;(c.current!==a||u.current!==n||h.current!==i||f.current)&&(m=n(a),g=!i(p.current,m)),av(()=>{g&&(p.current=m),c.current=a,u.current=n,h.current=i,f.current=!1});const y=ye.useRef(a);av(()=>{const x=()=>{try{const E=e.getState(),w=u.current(E);h.current(p.current,w)||(c.current=E,p.current=w,s())}catch{f.current=!0,s()}},_=e.subscribe(x);return e.getState()!==y.current&&x(),_},[]);const M=g?m:p.current;return ye.useDebugValue(M),M};return Object.assign(t,e),t[Symbol.iterator]=function(){console.warn("[useStore, api] = create() is deprecated and will be removed in v4");const n=[t,e];return{next(){const i=n.length<=0;return{value:n.shift(),done:i}}}},t}var Cy={exports:{}},Ry={exports:{}},Py={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(r){function e(z,se){var te=z.length;z.push(se);e:for(;0<te;){var ce=te-1>>>1,Be=z[ce];if(0<i(Be,se))z[ce]=se,z[te]=Be,te=ce;else break e}}function t(z){return z.length===0?null:z[0]}function n(z){if(z.length===0)return null;var se=z[0],te=z.pop();if(te!==se){z[0]=te;e:for(var ce=0,Be=z.length,Xe=Be>>>1;ce<Xe;){var ne=2*(ce+1)-1,pe=z[ne],be=ne+1,Se=z[be];if(0>i(pe,te))be<Be&&0>i(Se,pe)?(z[ce]=Se,z[be]=te,ce=be):(z[ce]=pe,z[ne]=te,ce=ne);else if(be<Be&&0>i(Se,te))z[ce]=Se,z[be]=te,ce=be;else break e}}return se}function i(z,se){var te=z.sortIndex-se.sortIndex;return te!==0?te:z.id-se.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;r.unstable_now=function(){return s.now()}}else{var a=Date,c=a.now();r.unstable_now=function(){return a.now()-c}}var u=[],h=[],f=1,p=null,m=3,g=!1,y=!1,M=!1,x=typeof setTimeout=="function"?setTimeout:null,_=typeof clearTimeout=="function"?clearTimeout:null,E=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function w(z){for(var se=t(h);se!==null;){if(se.callback===null)n(h);else if(se.startTime<=z)n(h),se.sortIndex=se.expirationTime,e(u,se);else break;se=t(h)}}function T(z){if(M=!1,w(z),!y)if(t(u)!==null)y=!0,Z(O);else{var se=t(h);se!==null&&me(T,se.startTime-z)}}function O(z,se){y=!1,M&&(M=!1,_(N),N=-1),g=!0;var te=m;try{for(w(se),p=t(u);p!==null&&(!(p.expirationTime>se)||z&&!C());){var ce=p.callback;if(typeof ce=="function"){p.callback=null,m=p.priorityLevel;var Be=ce(p.expirationTime<=se);se=r.unstable_now(),typeof Be=="function"?p.callback=Be:p===t(u)&&n(u),w(se)}else n(u);p=t(u)}if(p!==null)var Xe=!0;else{var ne=t(h);ne!==null&&me(T,ne.startTime-se),Xe=!1}return Xe}finally{p=null,m=te,g=!1}}var P=!1,I=null,N=-1,W=5,b=-1;function C(){return!(r.unstable_now()-b<W)}function X(){if(I!==null){var z=r.unstable_now();b=z;var se=!0;try{se=I(!0,z)}finally{se?q():(P=!1,I=null)}}else P=!1}var q;if(typeof E=="function")q=function(){E(X)};else if(typeof MessageChannel<"u"){var K=new MessageChannel,le=K.port2;K.port1.onmessage=X,q=function(){le.postMessage(null)}}else q=function(){x(X,0)};function Z(z){I=z,P||(P=!0,q())}function me(z,se){N=x(function(){z(r.unstable_now())},se)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(z){z.callback=null},r.unstable_continueExecution=function(){y||g||(y=!0,Z(O))},r.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):W=0<z?Math.floor(1e3/z):5},r.unstable_getCurrentPriorityLevel=function(){return m},r.unstable_getFirstCallbackNode=function(){return t(u)},r.unstable_next=function(z){switch(m){case 1:case 2:case 3:var se=3;break;default:se=m}var te=m;m=se;try{return z()}finally{m=te}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(z,se){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var te=m;m=z;try{return se()}finally{m=te}},r.unstable_scheduleCallback=function(z,se,te){var ce=r.unstable_now();switch(typeof te=="object"&&te!==null?(te=te.delay,te=typeof te=="number"&&0<te?ce+te:ce):te=ce,z){case 1:var Be=-1;break;case 2:Be=250;break;case 5:Be=1073741823;break;case 4:Be=1e4;break;default:Be=5e3}return Be=te+Be,z={id:f++,callback:se,priorityLevel:z,startTime:te,expirationTime:Be,sortIndex:-1},te>ce?(z.sortIndex=te,e(h,z),t(u)===null&&z===t(h)&&(M?(_(N),N=-1):M=!0,me(T,te-ce))):(z.sortIndex=Be,e(u,z),y||g||(y=!0,Z(O))),z},r.unstable_shouldYield=C,r.unstable_wrapCallback=function(z){var se=m;return function(){var te=m;m=se;try{return z.apply(this,arguments)}finally{m=te}}}})(Py);Ry.exports=Py;var tp=Ry.exports;/**
 * @license React
 * react-reconciler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tC=function(e){var t={},n=ye,i=tp,s=Object.assign;function a(o){for(var l="https://reactjs.org/docs/error-decoder.html?invariant="+o,d=1;d<arguments.length;d++)l+="&args[]="+encodeURIComponent(arguments[d]);return"Minified React error #"+o+"; visit "+l+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var c=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,u=Symbol.for("react.element"),h=Symbol.for("react.portal"),f=Symbol.for("react.fragment"),p=Symbol.for("react.strict_mode"),m=Symbol.for("react.profiler"),g=Symbol.for("react.provider"),y=Symbol.for("react.context"),M=Symbol.for("react.forward_ref"),x=Symbol.for("react.suspense"),_=Symbol.for("react.suspense_list"),E=Symbol.for("react.memo"),w=Symbol.for("react.lazy"),T=Symbol.for("react.offscreen"),O=Symbol.iterator;function P(o){return o===null||typeof o!="object"?null:(o=O&&o[O]||o["@@iterator"],typeof o=="function"?o:null)}function I(o){if(o==null)return null;if(typeof o=="function")return o.displayName||o.name||null;if(typeof o=="string")return o;switch(o){case f:return"Fragment";case h:return"Portal";case m:return"Profiler";case p:return"StrictMode";case x:return"Suspense";case _:return"SuspenseList"}if(typeof o=="object")switch(o.$$typeof){case y:return(o.displayName||"Context")+".Consumer";case g:return(o._context.displayName||"Context")+".Provider";case M:var l=o.render;return o=o.displayName,o||(o=l.displayName||l.name||"",o=o!==""?"ForwardRef("+o+")":"ForwardRef"),o;case E:return l=o.displayName||null,l!==null?l:I(o.type)||"Memo";case w:l=o._payload,o=o._init;try{return I(o(l))}catch{}}return null}function N(o){var l=o.type;switch(o.tag){case 24:return"Cache";case 9:return(l.displayName||"Context")+".Consumer";case 10:return(l._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return o=l.render,o=o.displayName||o.name||"",l.displayName||(o!==""?"ForwardRef("+o+")":"ForwardRef");case 7:return"Fragment";case 5:return l;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return I(l);case 8:return l===p?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof l=="function")return l.displayName||l.name||null;if(typeof l=="string")return l}return null}function W(o){var l=o,d=o;if(o.alternate)for(;l.return;)l=l.return;else{o=l;do l=o,l.flags&4098&&(d=l.return),o=l.return;while(o)}return l.tag===3?d:null}function b(o){if(W(o)!==o)throw Error(a(188))}function C(o){var l=o.alternate;if(!l){if(l=W(o),l===null)throw Error(a(188));return l!==o?null:o}for(var d=o,v=l;;){var S=d.return;if(S===null)break;var A=S.alternate;if(A===null){if(v=S.return,v!==null){d=v;continue}break}if(S.child===A.child){for(A=S.child;A;){if(A===d)return b(S),o;if(A===v)return b(S),l;A=A.sibling}throw Error(a(188))}if(d.return!==v.return)d=S,v=A;else{for(var B=!1,k=S.child;k;){if(k===d){B=!0,d=S,v=A;break}if(k===v){B=!0,v=S,d=A;break}k=k.sibling}if(!B){for(k=A.child;k;){if(k===d){B=!0,d=A,v=S;break}if(k===v){B=!0,v=A,d=S;break}k=k.sibling}if(!B)throw Error(a(189))}}if(d.alternate!==v)throw Error(a(190))}if(d.tag!==3)throw Error(a(188));return d.stateNode.current===d?o:l}function X(o){return o=C(o),o!==null?q(o):null}function q(o){if(o.tag===5||o.tag===6)return o;for(o=o.child;o!==null;){var l=q(o);if(l!==null)return l;o=o.sibling}return null}function K(o){if(o.tag===5||o.tag===6)return o;for(o=o.child;o!==null;){if(o.tag!==4){var l=K(o);if(l!==null)return l}o=o.sibling}return null}var le=Array.isArray,Z=e.getPublicInstance,me=e.getRootHostContext,z=e.getChildHostContext,se=e.prepareForCommit,te=e.resetAfterCommit,ce=e.createInstance,Be=e.appendInitialChild,Xe=e.finalizeInitialChildren,ne=e.prepareUpdate,pe=e.shouldSetTextContent,be=e.createTextInstance,Se=e.scheduleTimeout,rt=e.cancelTimeout,Qe=e.noTimeout,st=e.isPrimaryRenderer,nt=e.supportsMutation,he=e.supportsPersistence,F=e.supportsHydration,we=e.getInstanceFromNode,Me=e.preparePortalMount,ge=e.getCurrentEventPriority,Ee=e.detachDeletedInstance,je=e.supportsMicrotasks,De=e.scheduleMicrotask,U=e.supportsTestSelectors,R=e.findFiberRoot,j=e.getBoundingRect,oe=e.getTextContent,ue=e.isHiddenSubtree,ae=e.matchAccessibilityRole,Ye=e.setFocusIfFocusable,Te=e.setupIntersectionObserver,Oe=e.appendChild,St=e.appendChildToContainer,ve=e.commitTextUpdate,Fe=e.commitMount,ot=e.commitUpdate,at=e.insertBefore,ze=e.insertInContainerBefore,Mt=e.removeChild,ut=e.removeChildFromContainer,Nt=e.resetTextContent,H=e.hideInstance,Ue=e.hideTextInstance,ie=e.unhideInstance,de=e.unhideTextInstance,Ie=e.clearContainer,Ne=e.cloneInstance,wt=e.createContainerChildSet,Gt=e.appendChildToContainerChildSet,Sn=e.finalizeContainerChildren,Et=e.replaceContainerChildren,gn=e.cloneHiddenInstance,si=e.cloneHiddenTextInstance,cl=e.canHydrateInstance,ul=e.canHydrateTextInstance,Ki=e.canHydrateSuspenseInstance,Us=e.isSuspenseInstancePending,Ns=e.isSuspenseInstanceFallback,hl=e.registerSuspenseInstanceRetry,Ii=e.getNextHydratableSibling,fl=e.getFirstHydratableChild,Os=e.getFirstHydratableChildWithinContainer,dl=e.getFirstHydratableChildWithinSuspenseInstance,pl=e.hydrateInstance,Ph=e.hydrateTextInstance,Ih=e.hydrateSuspenseInstance,Lh=e.getNextHydratableInstanceAfterSuspenseInstance,L=e.commitHydratedContainer,V=e.commitHydratedSuspenseInstance,Q=e.clearSuspenseBoundary,$=e.clearSuspenseBoundaryFromContainer,Y=e.shouldDeleteUnhydratedTailInstances,xe=e.didNotMatchHydratedContainerTextInstance,Le=e.didNotMatchHydratedTextInstance,ke;function He(o){if(ke===void 0)try{throw Error()}catch(d){var l=d.stack.trim().match(/\n( *(at )?)/);ke=l&&l[1]||""}return`
`+ke+o}var tt=!1;function it(o,l){if(!o||tt)return"";tt=!0;var d=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(l)if(l=function(){throw Error()},Object.defineProperty(l.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(l,[])}catch(_e){var v=_e}Reflect.construct(o,[],l)}else{try{l.call()}catch(_e){v=_e}o.call(l.prototype)}else{try{throw Error()}catch(_e){v=_e}o()}}catch(_e){if(_e&&v&&typeof _e.stack=="string"){for(var S=_e.stack.split(`
`),A=v.stack.split(`
`),B=S.length-1,k=A.length-1;1<=B&&0<=k&&S[B]!==A[k];)k--;for(;1<=B&&0<=k;B--,k--)if(S[B]!==A[k]){if(B!==1||k!==1)do if(B--,k--,0>k||S[B]!==A[k]){var re=`
`+S[B].replace(" at new "," at ");return o.displayName&&re.includes("<anonymous>")&&(re=re.replace("<anonymous>",o.displayName)),re}while(1<=B&&0<=k);break}}}finally{tt=!1,Error.prepareStackTrace=d}return(o=o?o.displayName||o.name:"")?He(o):""}var qe=Object.prototype.hasOwnProperty,Tt=[],Rt=-1;function Ut(o){return{current:o}}function _t(o){0>Rt||(o.current=Tt[Rt],Tt[Rt]=null,Rt--)}function Je(o,l){Rt++,Tt[Rt]=o.current,o.current=l}var Ge={},At=Ut(Ge),ct=Ut(!1),rn=Ge;function Zn(o,l){var d=o.type.contextTypes;if(!d)return Ge;var v=o.stateNode;if(v&&v.__reactInternalMemoizedUnmaskedChildContext===l)return v.__reactInternalMemoizedMaskedChildContext;var S={},A;for(A in d)S[A]=l[A];return v&&(o=o.stateNode,o.__reactInternalMemoizedUnmaskedChildContext=l,o.__reactInternalMemoizedMaskedChildContext=S),S}function Ft(o){return o=o.childContextTypes,o!=null}function _r(){_t(ct),_t(At)}function Ht(o,l,d){if(At.current!==Ge)throw Error(a(168));Je(At,l),Je(ct,d)}function _i(o,l,d){var v=o.stateNode;if(l=l.childContextTypes,typeof v.getChildContext!="function")return d;v=v.getChildContext();for(var S in v)if(!(S in l))throw Error(a(108,N(o)||"Unknown",S));return s({},d,v)}function yr(o){return o=(o=o.stateNode)&&o.__reactInternalMemoizedMergedChildContext||Ge,rn=At.current,Je(At,o),Je(ct,ct.current),!0}function Ln(o,l,d){var v=o.stateNode;if(!v)throw Error(a(169));d?(o=_i(o,l,rn),v.__reactInternalMemoizedMergedChildContext=o,_t(ct),_t(At),Je(At,o)):_t(ct),Je(ct,d)}var Dn=Math.clz32?Math.clz32:$y,Dh=Math.log,ml=Math.LN2;function $y(o){return o>>>=0,o===0?32:31-(Dh(o)/ml|0)|0}var gl=64,vl=4194304;function Oo(o){switch(o&-o){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return o&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return o&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return o}}function _l(o,l){var d=o.pendingLanes;if(d===0)return 0;var v=0,S=o.suspendedLanes,A=o.pingedLanes,B=d&268435455;if(B!==0){var k=B&~S;k!==0?v=Oo(k):(A&=B,A!==0&&(v=Oo(A)))}else B=d&~S,B!==0?v=Oo(B):A!==0&&(v=Oo(A));if(v===0)return 0;if(l!==0&&l!==v&&!(l&S)&&(S=v&-v,A=l&-l,S>=A||S===16&&(A&4194240)!==0))return l;if(v&4&&(v|=d&16),l=o.entangledLanes,l!==0)for(o=o.entanglements,l&=v;0<l;)d=31-Dn(l),S=1<<d,v|=o[d],l&=~S;return v}function ex(o,l){switch(o){case 1:case 2:case 4:return l+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return l+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function tx(o,l){for(var d=o.suspendedLanes,v=o.pingedLanes,S=o.expirationTimes,A=o.pendingLanes;0<A;){var B=31-Dn(A),k=1<<B,re=S[B];re===-1?(!(k&d)||k&v)&&(S[B]=ex(k,l)):re<=l&&(o.expiredLanes|=k),A&=~k}}function Uh(o){return o=o.pendingLanes&-1073741825,o!==0?o:o&1073741824?1073741824:0}function Nh(o){for(var l=[],d=0;31>d;d++)l.push(o);return l}function Fo(o,l,d){o.pendingLanes|=l,l!==536870912&&(o.suspendedLanes=0,o.pingedLanes=0),o=o.eventTimes,l=31-Dn(l),o[l]=d}function nx(o,l){var d=o.pendingLanes&~l;o.pendingLanes=l,o.suspendedLanes=0,o.pingedLanes=0,o.expiredLanes&=l,o.mutableReadLanes&=l,o.entangledLanes&=l,l=o.entanglements;var v=o.eventTimes;for(o=o.expirationTimes;0<d;){var S=31-Dn(d),A=1<<S;l[S]=0,v[S]=-1,o[S]=-1,d&=~A}}function Oh(o,l){var d=o.entangledLanes|=l;for(o=o.entanglements;d;){var v=31-Dn(d),S=1<<v;S&l|o[v]&l&&(o[v]|=l),d&=~S}}var Pt=0;function $p(o){return o&=-o,1<o?4<o?o&268435455?16:536870912:4:1}var Fh=i.unstable_scheduleCallback,em=i.unstable_cancelCallback,ix=i.unstable_shouldYield,rx=i.unstable_requestPaint,ln=i.unstable_now,Bh=i.unstable_ImmediatePriority,sx=i.unstable_UserBlockingPriority,zh=i.unstable_NormalPriority,ox=i.unstable_IdlePriority,yl=null,Li=null;function ax(o){if(Li&&typeof Li.onCommitFiberRoot=="function")try{Li.onCommitFiberRoot(yl,o,void 0,(o.current.flags&128)===128)}catch{}}function lx(o,l){return o===l&&(o!==0||1/o===1/l)||o!==o&&l!==l}var Di=typeof Object.is=="function"?Object.is:lx,Qi=null,xl=!1,kh=!1;function tm(o){Qi===null?Qi=[o]:Qi.push(o)}function cx(o){xl=!0,tm(o)}function Ui(){if(!kh&&Qi!==null){kh=!0;var o=0,l=Pt;try{var d=Qi;for(Pt=1;o<d.length;o++){var v=d[o];do v=v(!0);while(v!==null)}Qi=null,xl=!1}catch(S){throw Qi!==null&&(Qi=Qi.slice(o+1)),Fh(Bh,Ui),S}finally{Pt=l,kh=!1}}return null}var ux=c.ReactCurrentBatchConfig;function Sl(o,l){if(Di(o,l))return!0;if(typeof o!="object"||o===null||typeof l!="object"||l===null)return!1;var d=Object.keys(o),v=Object.keys(l);if(d.length!==v.length)return!1;for(v=0;v<d.length;v++){var S=d[v];if(!qe.call(l,S)||!Di(o[S],l[S]))return!1}return!0}function hx(o){switch(o.tag){case 5:return He(o.type);case 16:return He("Lazy");case 13:return He("Suspense");case 19:return He("SuspenseList");case 0:case 2:case 15:return o=it(o.type,!1),o;case 11:return o=it(o.type.render,!1),o;case 1:return o=it(o.type,!0),o;default:return""}}function yi(o,l){if(o&&o.defaultProps){l=s({},l),o=o.defaultProps;for(var d in o)l[d]===void 0&&(l[d]=o[d]);return l}return l}var Ml=Ut(null),wl=null,Fs=null,Hh=null;function Vh(){Hh=Fs=wl=null}function nm(o,l,d){st?(Je(Ml,l._currentValue),l._currentValue=d):(Je(Ml,l._currentValue2),l._currentValue2=d)}function Gh(o){var l=Ml.current;_t(Ml),st?o._currentValue=l:o._currentValue2=l}function Wh(o,l,d){for(;o!==null;){var v=o.alternate;if((o.childLanes&l)!==l?(o.childLanes|=l,v!==null&&(v.childLanes|=l)):v!==null&&(v.childLanes&l)!==l&&(v.childLanes|=l),o===d)break;o=o.return}}function Bs(o,l){wl=o,Hh=Fs=null,o=o.dependencies,o!==null&&o.firstContext!==null&&(o.lanes&l&&(Kn=!0),o.firstContext=null)}function oi(o){var l=st?o._currentValue:o._currentValue2;if(Hh!==o)if(o={context:o,memoizedValue:l,next:null},Fs===null){if(wl===null)throw Error(a(308));Fs=o,wl.dependencies={lanes:0,firstContext:o}}else Fs=Fs.next=o;return l}var Ni=null,xr=!1;function Xh(o){o.updateQueue={baseState:o.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function im(o,l){o=o.updateQueue,l.updateQueue===o&&(l.updateQueue={baseState:o.baseState,firstBaseUpdate:o.firstBaseUpdate,lastBaseUpdate:o.lastBaseUpdate,shared:o.shared,effects:o.effects})}function $i(o,l){return{eventTime:o,lane:l,tag:0,payload:null,callback:null,next:null}}function Sr(o,l){var d=o.updateQueue;d!==null&&(d=d.shared,en!==null&&o.mode&1&&!(yt&2)?(o=d.interleaved,o===null?(l.next=l,Ni===null?Ni=[d]:Ni.push(d)):(l.next=o.next,o.next=l),d.interleaved=l):(o=d.pending,o===null?l.next=l:(l.next=o.next,o.next=l),d.pending=l))}function El(o,l,d){if(l=l.updateQueue,l!==null&&(l=l.shared,(d&4194240)!==0)){var v=l.lanes;v&=o.pendingLanes,d|=v,l.lanes=d,Oh(o,d)}}function rm(o,l){var d=o.updateQueue,v=o.alternate;if(v!==null&&(v=v.updateQueue,d===v)){var S=null,A=null;if(d=d.firstBaseUpdate,d!==null){do{var B={eventTime:d.eventTime,lane:d.lane,tag:d.tag,payload:d.payload,callback:d.callback,next:null};A===null?S=A=B:A=A.next=B,d=d.next}while(d!==null);A===null?S=A=l:A=A.next=l}else S=A=l;d={baseState:v.baseState,firstBaseUpdate:S,lastBaseUpdate:A,shared:v.shared,effects:v.effects},o.updateQueue=d;return}o=d.lastBaseUpdate,o===null?d.firstBaseUpdate=l:o.next=l,d.lastBaseUpdate=l}function Al(o,l,d,v){var S=o.updateQueue;xr=!1;var A=S.firstBaseUpdate,B=S.lastBaseUpdate,k=S.shared.pending;if(k!==null){S.shared.pending=null;var re=k,_e=re.next;re.next=null,B===null?A=_e:B.next=_e,B=re;var Ve=o.alternate;Ve!==null&&(Ve=Ve.updateQueue,k=Ve.lastBaseUpdate,k!==B&&(k===null?Ve.firstBaseUpdate=_e:k.next=_e,Ve.lastBaseUpdate=re))}if(A!==null){var ht=S.baseState;B=0,Ve=_e=re=null,k=A;do{var $e=k.lane,Bt=k.eventTime;if((v&$e)===$e){Ve!==null&&(Ve=Ve.next={eventTime:Bt,lane:0,tag:k.tag,payload:k.payload,callback:k.callback,next:null});e:{var Ke=o,An=k;switch($e=l,Bt=d,An.tag){case 1:if(Ke=An.payload,typeof Ke=="function"){ht=Ke.call(Bt,ht,$e);break e}ht=Ke;break e;case 3:Ke.flags=Ke.flags&-65537|128;case 0:if(Ke=An.payload,$e=typeof Ke=="function"?Ke.call(Bt,ht,$e):Ke,$e==null)break e;ht=s({},ht,$e);break e;case 2:xr=!0}}k.callback!==null&&k.lane!==0&&(o.flags|=64,$e=S.effects,$e===null?S.effects=[k]:$e.push(k))}else Bt={eventTime:Bt,lane:$e,tag:k.tag,payload:k.payload,callback:k.callback,next:null},Ve===null?(_e=Ve=Bt,re=ht):Ve=Ve.next=Bt,B|=$e;if(k=k.next,k===null){if(k=S.shared.pending,k===null)break;$e=k,k=$e.next,$e.next=null,S.lastBaseUpdate=$e,S.shared.pending=null}}while(!0);if(Ve===null&&(re=ht),S.baseState=re,S.firstBaseUpdate=_e,S.lastBaseUpdate=Ve,l=S.shared.interleaved,l!==null){S=l;do B|=S.lane,S=S.next;while(S!==l)}else A===null&&(S.shared.lanes=0);qs|=B,o.lanes=B,o.memoizedState=ht}}function sm(o,l,d){if(o=l.effects,l.effects=null,o!==null)for(l=0;l<o.length;l++){var v=o[l],S=v.callback;if(S!==null){if(v.callback=null,v=d,typeof S!="function")throw Error(a(191,S));S.call(v)}}}var om=new n.Component().refs;function Yh(o,l,d,v){l=o.memoizedState,d=d(v,l),d=d==null?l:s({},l,d),o.memoizedState=d,o.lanes===0&&(o.updateQueue.baseState=d)}var Tl={isMounted:function(o){return(o=o._reactInternals)?W(o)===o:!1},enqueueSetState:function(o,l,d){o=o._reactInternals;var v=Nn(),S=Er(o),A=$i(v,S);A.payload=l,d!=null&&(A.callback=d),Sr(o,A),l=hi(o,S,v),l!==null&&El(l,o,S)},enqueueReplaceState:function(o,l,d){o=o._reactInternals;var v=Nn(),S=Er(o),A=$i(v,S);A.tag=1,A.payload=l,d!=null&&(A.callback=d),Sr(o,A),l=hi(o,S,v),l!==null&&El(l,o,S)},enqueueForceUpdate:function(o,l){o=o._reactInternals;var d=Nn(),v=Er(o),S=$i(d,v);S.tag=2,l!=null&&(S.callback=l),Sr(o,S),l=hi(o,v,d),l!==null&&El(l,o,v)}};function am(o,l,d,v,S,A,B){return o=o.stateNode,typeof o.shouldComponentUpdate=="function"?o.shouldComponentUpdate(v,A,B):l.prototype&&l.prototype.isPureReactComponent?!Sl(d,v)||!Sl(S,A):!0}function lm(o,l,d){var v=!1,S=Ge,A=l.contextType;return typeof A=="object"&&A!==null?A=oi(A):(S=Ft(l)?rn:At.current,v=l.contextTypes,A=(v=v!=null)?Zn(o,S):Ge),l=new l(d,A),o.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,l.updater=Tl,o.stateNode=l,l._reactInternals=o,v&&(o=o.stateNode,o.__reactInternalMemoizedUnmaskedChildContext=S,o.__reactInternalMemoizedMaskedChildContext=A),l}function cm(o,l,d,v){o=l.state,typeof l.componentWillReceiveProps=="function"&&l.componentWillReceiveProps(d,v),typeof l.UNSAFE_componentWillReceiveProps=="function"&&l.UNSAFE_componentWillReceiveProps(d,v),l.state!==o&&Tl.enqueueReplaceState(l,l.state,null)}function qh(o,l,d,v){var S=o.stateNode;S.props=d,S.state=o.memoizedState,S.refs=om,Xh(o);var A=l.contextType;typeof A=="object"&&A!==null?S.context=oi(A):(A=Ft(l)?rn:At.current,S.context=Zn(o,A)),S.state=o.memoizedState,A=l.getDerivedStateFromProps,typeof A=="function"&&(Yh(o,l,A,d),S.state=o.memoizedState),typeof l.getDerivedStateFromProps=="function"||typeof S.getSnapshotBeforeUpdate=="function"||typeof S.UNSAFE_componentWillMount!="function"&&typeof S.componentWillMount!="function"||(l=S.state,typeof S.componentWillMount=="function"&&S.componentWillMount(),typeof S.UNSAFE_componentWillMount=="function"&&S.UNSAFE_componentWillMount(),l!==S.state&&Tl.enqueueReplaceState(S,S.state,null),Al(o,d,S,v),S.state=o.memoizedState),typeof S.componentDidMount=="function"&&(o.flags|=4194308)}var zs=[],ks=0,bl=null,Cl=0,ai=[],li=0,Xr=null,er=1,tr="";function Yr(o,l){zs[ks++]=Cl,zs[ks++]=bl,bl=o,Cl=l}function um(o,l,d){ai[li++]=er,ai[li++]=tr,ai[li++]=Xr,Xr=o;var v=er;o=tr;var S=32-Dn(v)-1;v&=~(1<<S),d+=1;var A=32-Dn(l)+S;if(30<A){var B=S-S%5;A=(v&(1<<B)-1).toString(32),v>>=B,S-=B,er=1<<32-Dn(l)+S|d<<S|v,tr=A+o}else er=1<<A|d<<S|v,tr=o}function Zh(o){o.return!==null&&(Yr(o,1),um(o,1,0))}function jh(o){for(;o===bl;)bl=zs[--ks],zs[ks]=null,Cl=zs[--ks],zs[ks]=null;for(;o===Xr;)Xr=ai[--li],ai[li]=null,tr=ai[--li],ai[li]=null,er=ai[--li],ai[li]=null}var jn=null,Jn=null,Vt=!1,Bo=!1,xi=null;function hm(o,l){var d=fi(5,null,null,0);d.elementType="DELETED",d.stateNode=l,d.return=o,l=o.deletions,l===null?(o.deletions=[d],o.flags|=16):l.push(d)}function fm(o,l){switch(o.tag){case 5:return l=cl(l,o.type,o.pendingProps),l!==null?(o.stateNode=l,jn=o,Jn=fl(l),!0):!1;case 6:return l=ul(l,o.pendingProps),l!==null?(o.stateNode=l,jn=o,Jn=null,!0):!1;case 13:if(l=Ki(l),l!==null){var d=Xr!==null?{id:er,overflow:tr}:null;return o.memoizedState={dehydrated:l,treeContext:d,retryLane:1073741824},d=fi(18,null,null,0),d.stateNode=l,d.return=o,o.child=d,jn=o,Jn=null,!0}return!1;default:return!1}}function Jh(o){return(o.mode&1)!==0&&(o.flags&128)===0}function Kh(o){if(Vt){var l=Jn;if(l){var d=l;if(!fm(o,l)){if(Jh(o))throw Error(a(418));l=Ii(d);var v=jn;l&&fm(o,l)?hm(v,d):(o.flags=o.flags&-4097|2,Vt=!1,jn=o)}}else{if(Jh(o))throw Error(a(418));o.flags=o.flags&-4097|2,Vt=!1,jn=o}}}function dm(o){for(o=o.return;o!==null&&o.tag!==5&&o.tag!==3&&o.tag!==13;)o=o.return;jn=o}function zo(o){if(!F||o!==jn)return!1;if(!Vt)return dm(o),Vt=!0,!1;if(o.tag!==3&&(o.tag!==5||Y(o.type)&&!pe(o.type,o.memoizedProps))){var l=Jn;if(l){if(Jh(o)){for(o=Jn;o;)o=Ii(o);throw Error(a(418))}for(;l;)hm(o,l),l=Ii(l)}}if(dm(o),o.tag===13){if(!F)throw Error(a(316));if(o=o.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(a(317));Jn=Lh(o)}else Jn=jn?Ii(o.stateNode):null;return!0}function Hs(){F&&(Jn=jn=null,Bo=Vt=!1)}function Qh(o){xi===null?xi=[o]:xi.push(o)}function ko(o,l,d){if(o=d.ref,o!==null&&typeof o!="function"&&typeof o!="object"){if(d._owner){if(d=d._owner,d){if(d.tag!==1)throw Error(a(309));var v=d.stateNode}if(!v)throw Error(a(147,o));var S=v,A=""+o;return l!==null&&l.ref!==null&&typeof l.ref=="function"&&l.ref._stringRef===A?l.ref:(l=function(B){var k=S.refs;k===om&&(k=S.refs={}),B===null?delete k[A]:k[A]=B},l._stringRef=A,l)}if(typeof o!="string")throw Error(a(284));if(!d._owner)throw Error(a(290,o))}return o}function Rl(o,l){throw o=Object.prototype.toString.call(l),Error(a(31,o==="[object Object]"?"object with keys {"+Object.keys(l).join(", ")+"}":o))}function pm(o){var l=o._init;return l(o._payload)}function mm(o){function l(J,G){if(o){var ee=J.deletions;ee===null?(J.deletions=[G],J.flags|=16):ee.push(G)}}function d(J,G){if(!o)return null;for(;G!==null;)l(J,G),G=G.sibling;return null}function v(J,G){for(J=new Map;G!==null;)G.key!==null?J.set(G.key,G):J.set(G.index,G),G=G.sibling;return J}function S(J,G){return J=Tr(J,G),J.index=0,J.sibling=null,J}function A(J,G,ee){return J.index=ee,o?(ee=J.alternate,ee!==null?(ee=ee.index,ee<G?(J.flags|=2,G):ee):(J.flags|=2,G)):(J.flags|=1048576,G)}function B(J){return o&&J.alternate===null&&(J.flags|=2),J}function k(J,G,ee,Re){return G===null||G.tag!==6?(G=Of(ee,J.mode,Re),G.return=J,G):(G=S(G,ee),G.return=J,G)}function re(J,G,ee,Re){var Ze=ee.type;return Ze===f?Ve(J,G,ee.props.children,Re,ee.key):G!==null&&(G.elementType===Ze||typeof Ze=="object"&&Ze!==null&&Ze.$$typeof===w&&pm(Ze)===G.type)?(Re=S(G,ee.props),Re.ref=ko(J,G,ee),Re.return=J,Re):(Re=oc(ee.type,ee.key,ee.props,null,J.mode,Re),Re.ref=ko(J,G,ee),Re.return=J,Re)}function _e(J,G,ee,Re){return G===null||G.tag!==4||G.stateNode.containerInfo!==ee.containerInfo||G.stateNode.implementation!==ee.implementation?(G=Ff(ee,J.mode,Re),G.return=J,G):(G=S(G,ee.children||[]),G.return=J,G)}function Ve(J,G,ee,Re,Ze){return G===null||G.tag!==7?(G=$r(ee,J.mode,Re,Ze),G.return=J,G):(G=S(G,ee),G.return=J,G)}function ht(J,G,ee){if(typeof G=="string"&&G!==""||typeof G=="number")return G=Of(""+G,J.mode,ee),G.return=J,G;if(typeof G=="object"&&G!==null){switch(G.$$typeof){case u:return ee=oc(G.type,G.key,G.props,null,J.mode,ee),ee.ref=ko(J,null,G),ee.return=J,ee;case h:return G=Ff(G,J.mode,ee),G.return=J,G;case w:var Re=G._init;return ht(J,Re(G._payload),ee)}if(le(G)||P(G))return G=$r(G,J.mode,ee,null),G.return=J,G;Rl(J,G)}return null}function $e(J,G,ee,Re){var Ze=G!==null?G.key:null;if(typeof ee=="string"&&ee!==""||typeof ee=="number")return Ze!==null?null:k(J,G,""+ee,Re);if(typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case u:return ee.key===Ze?re(J,G,ee,Re):null;case h:return ee.key===Ze?_e(J,G,ee,Re):null;case w:return Ze=ee._init,$e(J,G,Ze(ee._payload),Re)}if(le(ee)||P(ee))return Ze!==null?null:Ve(J,G,ee,Re,null);Rl(J,ee)}return null}function Bt(J,G,ee,Re,Ze){if(typeof Re=="string"&&Re!==""||typeof Re=="number")return J=J.get(ee)||null,k(G,J,""+Re,Ze);if(typeof Re=="object"&&Re!==null){switch(Re.$$typeof){case u:return J=J.get(Re.key===null?ee:Re.key)||null,re(G,J,Re,Ze);case h:return J=J.get(Re.key===null?ee:Re.key)||null,_e(G,J,Re,Ze);case w:var gt=Re._init;return Bt(J,G,ee,gt(Re._payload),Ze)}if(le(Re)||P(Re))return J=J.get(ee)||null,Ve(G,J,Re,Ze,null);Rl(G,Re)}return null}function Ke(J,G,ee,Re){for(var Ze=null,gt=null,ft=G,It=G=0,un=null;ft!==null&&It<ee.length;It++){ft.index>It?(un=ft,ft=null):un=ft.sibling;var Lt=$e(J,ft,ee[It],Re);if(Lt===null){ft===null&&(ft=un);break}o&&ft&&Lt.alternate===null&&l(J,ft),G=A(Lt,G,It),gt===null?Ze=Lt:gt.sibling=Lt,gt=Lt,ft=un}if(It===ee.length)return d(J,ft),Vt&&Yr(J,It),Ze;if(ft===null){for(;It<ee.length;It++)ft=ht(J,ee[It],Re),ft!==null&&(G=A(ft,G,It),gt===null?Ze=ft:gt.sibling=ft,gt=ft);return Vt&&Yr(J,It),Ze}for(ft=v(J,ft);It<ee.length;It++)un=Bt(ft,J,It,ee[It],Re),un!==null&&(o&&un.alternate!==null&&ft.delete(un.key===null?It:un.key),G=A(un,G,It),gt===null?Ze=un:gt.sibling=un,gt=un);return o&&ft.forEach(function(br){return l(J,br)}),Vt&&Yr(J,It),Ze}function An(J,G,ee,Re){var Ze=P(ee);if(typeof Ze!="function")throw Error(a(150));if(ee=Ze.call(ee),ee==null)throw Error(a(151));for(var gt=Ze=null,ft=G,It=G=0,un=null,Lt=ee.next();ft!==null&&!Lt.done;It++,Lt=ee.next()){ft.index>It?(un=ft,ft=null):un=ft.sibling;var br=$e(J,ft,Lt.value,Re);if(br===null){ft===null&&(ft=un);break}o&&ft&&br.alternate===null&&l(J,ft),G=A(br,G,It),gt===null?Ze=br:gt.sibling=br,gt=br,ft=un}if(Lt.done)return d(J,ft),Vt&&Yr(J,It),Ze;if(ft===null){for(;!Lt.done;It++,Lt=ee.next())Lt=ht(J,Lt.value,Re),Lt!==null&&(G=A(Lt,G,It),gt===null?Ze=Lt:gt.sibling=Lt,gt=Lt);return Vt&&Yr(J,It),Ze}for(ft=v(J,ft);!Lt.done;It++,Lt=ee.next())Lt=Bt(ft,J,It,Lt.value,Re),Lt!==null&&(o&&Lt.alternate!==null&&ft.delete(Lt.key===null?It:Lt.key),G=A(Lt,G,It),gt===null?Ze=Lt:gt.sibling=Lt,gt=Lt);return o&&ft.forEach(function(Hx){return l(J,Hx)}),Vt&&Yr(J,It),Ze}function di(J,G,ee,Re){if(typeof ee=="object"&&ee!==null&&ee.type===f&&ee.key===null&&(ee=ee.props.children),typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case u:e:{for(var Ze=ee.key,gt=G;gt!==null;){if(gt.key===Ze){if(Ze=ee.type,Ze===f){if(gt.tag===7){d(J,gt.sibling),G=S(gt,ee.props.children),G.return=J,J=G;break e}}else if(gt.elementType===Ze||typeof Ze=="object"&&Ze!==null&&Ze.$$typeof===w&&pm(Ze)===gt.type){d(J,gt.sibling),G=S(gt,ee.props),G.ref=ko(J,gt,ee),G.return=J,J=G;break e}d(J,gt);break}else l(J,gt);gt=gt.sibling}ee.type===f?(G=$r(ee.props.children,J.mode,Re,ee.key),G.return=J,J=G):(Re=oc(ee.type,ee.key,ee.props,null,J.mode,Re),Re.ref=ko(J,G,ee),Re.return=J,J=Re)}return B(J);case h:e:{for(gt=ee.key;G!==null;){if(G.key===gt)if(G.tag===4&&G.stateNode.containerInfo===ee.containerInfo&&G.stateNode.implementation===ee.implementation){d(J,G.sibling),G=S(G,ee.children||[]),G.return=J,J=G;break e}else{d(J,G);break}else l(J,G);G=G.sibling}G=Ff(ee,J.mode,Re),G.return=J,J=G}return B(J);case w:return gt=ee._init,di(J,G,gt(ee._payload),Re)}if(le(ee))return Ke(J,G,ee,Re);if(P(ee))return An(J,G,ee,Re);Rl(J,ee)}return typeof ee=="string"&&ee!==""||typeof ee=="number"?(ee=""+ee,G!==null&&G.tag===6?(d(J,G.sibling),G=S(G,ee),G.return=J,J=G):(d(J,G),G=Of(ee,J.mode,Re),G.return=J,J=G),B(J)):d(J,G)}return di}var Vs=mm(!0),gm=mm(!1),Ho={},ci=Ut(Ho),Vo=Ut(Ho),Gs=Ut(Ho);function Oi(o){if(o===Ho)throw Error(a(174));return o}function $h(o,l){Je(Gs,l),Je(Vo,o),Je(ci,Ho),o=me(l),_t(ci),Je(ci,o)}function Ws(){_t(ci),_t(Vo),_t(Gs)}function vm(o){var l=Oi(Gs.current),d=Oi(ci.current);l=z(d,o.type,l),d!==l&&(Je(Vo,o),Je(ci,l))}function ef(o){Vo.current===o&&(_t(ci),_t(Vo))}var Wt=Ut(0);function Pl(o){for(var l=o;l!==null;){if(l.tag===13){var d=l.memoizedState;if(d!==null&&(d=d.dehydrated,d===null||Us(d)||Ns(d)))return l}else if(l.tag===19&&l.memoizedProps.revealOrder!==void 0){if(l.flags&128)return l}else if(l.child!==null){l.child.return=l,l=l.child;continue}if(l===o)break;for(;l.sibling===null;){if(l.return===null||l.return===o)return null;l=l.return}l.sibling.return=l.return,l=l.sibling}return null}var tf=[];function nf(){for(var o=0;o<tf.length;o++){var l=tf[o];st?l._workInProgressVersionPrimary=null:l._workInProgressVersionSecondary=null}tf.length=0}var Il=c.ReactCurrentDispatcher,ui=c.ReactCurrentBatchConfig,Xs=0,Yt=null,Mn=null,cn=null,Ll=!1,Go=!1,Wo=0,fx=0;function wn(){throw Error(a(321))}function rf(o,l){if(l===null)return!1;for(var d=0;d<l.length&&d<o.length;d++)if(!Di(o[d],l[d]))return!1;return!0}function sf(o,l,d,v,S,A){if(Xs=A,Yt=l,l.memoizedState=null,l.updateQueue=null,l.lanes=0,Il.current=o===null||o.memoizedState===null?gx:vx,o=d(v,S),Go){A=0;do{if(Go=!1,Wo=0,25<=A)throw Error(a(301));A+=1,cn=Mn=null,l.updateQueue=null,Il.current=_x,o=d(v,S)}while(Go)}if(Il.current=Fl,l=Mn!==null&&Mn.next!==null,Xs=0,cn=Mn=Yt=null,Ll=!1,l)throw Error(a(300));return o}function of(){var o=Wo!==0;return Wo=0,o}function nr(){var o={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return cn===null?Yt.memoizedState=cn=o:cn=cn.next=o,cn}function Fi(){if(Mn===null){var o=Yt.alternate;o=o!==null?o.memoizedState:null}else o=Mn.next;var l=cn===null?Yt.memoizedState:cn.next;if(l!==null)cn=l,Mn=o;else{if(o===null)throw Error(a(310));Mn=o,o={memoizedState:Mn.memoizedState,baseState:Mn.baseState,baseQueue:Mn.baseQueue,queue:Mn.queue,next:null},cn===null?Yt.memoizedState=cn=o:cn=cn.next=o}return cn}function qr(o,l){return typeof l=="function"?l(o):l}function Dl(o){var l=Fi(),d=l.queue;if(d===null)throw Error(a(311));d.lastRenderedReducer=o;var v=Mn,S=v.baseQueue,A=d.pending;if(A!==null){if(S!==null){var B=S.next;S.next=A.next,A.next=B}v.baseQueue=S=A,d.pending=null}if(S!==null){A=S.next,v=v.baseState;var k=B=null,re=null,_e=A;do{var Ve=_e.lane;if((Xs&Ve)===Ve)re!==null&&(re=re.next={lane:0,action:_e.action,hasEagerState:_e.hasEagerState,eagerState:_e.eagerState,next:null}),v=_e.hasEagerState?_e.eagerState:o(v,_e.action);else{var ht={lane:Ve,action:_e.action,hasEagerState:_e.hasEagerState,eagerState:_e.eagerState,next:null};re===null?(k=re=ht,B=v):re=re.next=ht,Yt.lanes|=Ve,qs|=Ve}_e=_e.next}while(_e!==null&&_e!==A);re===null?B=v:re.next=k,Di(v,l.memoizedState)||(Kn=!0),l.memoizedState=v,l.baseState=B,l.baseQueue=re,d.lastRenderedState=v}if(o=d.interleaved,o!==null){S=o;do A=S.lane,Yt.lanes|=A,qs|=A,S=S.next;while(S!==o)}else S===null&&(d.lanes=0);return[l.memoizedState,d.dispatch]}function Ul(o){var l=Fi(),d=l.queue;if(d===null)throw Error(a(311));d.lastRenderedReducer=o;var v=d.dispatch,S=d.pending,A=l.memoizedState;if(S!==null){d.pending=null;var B=S=S.next;do A=o(A,B.action),B=B.next;while(B!==S);Di(A,l.memoizedState)||(Kn=!0),l.memoizedState=A,l.baseQueue===null&&(l.baseState=A),d.lastRenderedState=A}return[A,v]}function _m(){}function ym(o,l){var d=Yt,v=Fi(),S=l(),A=!Di(v.memoizedState,S);if(A&&(v.memoizedState=S,Kn=!0),v=v.queue,Yo(Mm.bind(null,d,v,o),[o]),v.getSnapshot!==l||A||cn!==null&&cn.memoizedState.tag&1){if(d.flags|=2048,Xo(9,Sm.bind(null,d,v,S,l),void 0,null),en===null)throw Error(a(349));Xs&30||xm(d,l,S)}return S}function xm(o,l,d){o.flags|=16384,o={getSnapshot:l,value:d},l=Yt.updateQueue,l===null?(l={lastEffect:null,stores:null},Yt.updateQueue=l,l.stores=[o]):(d=l.stores,d===null?l.stores=[o]:d.push(o))}function Sm(o,l,d,v){l.value=d,l.getSnapshot=v,wm(l)&&hi(o,1,-1)}function Mm(o,l,d){return d(function(){wm(l)&&hi(o,1,-1)})}function wm(o){var l=o.getSnapshot;o=o.value;try{var d=l();return!Di(o,d)}catch{return!0}}function af(o){var l=nr();return typeof o=="function"&&(o=o()),l.memoizedState=l.baseState=o,o={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:qr,lastRenderedState:o},l.queue=o,o=o.dispatch=mx.bind(null,Yt,o),[l.memoizedState,o]}function Xo(o,l,d,v){return o={tag:o,create:l,destroy:d,deps:v,next:null},l=Yt.updateQueue,l===null?(l={lastEffect:null,stores:null},Yt.updateQueue=l,l.lastEffect=o.next=o):(d=l.lastEffect,d===null?l.lastEffect=o.next=o:(v=d.next,d.next=o,o.next=v,l.lastEffect=o)),o}function Em(){return Fi().memoizedState}function Nl(o,l,d,v){var S=nr();Yt.flags|=o,S.memoizedState=Xo(1|l,d,void 0,v===void 0?null:v)}function Ol(o,l,d,v){var S=Fi();v=v===void 0?null:v;var A=void 0;if(Mn!==null){var B=Mn.memoizedState;if(A=B.destroy,v!==null&&rf(v,B.deps)){S.memoizedState=Xo(l,d,A,v);return}}Yt.flags|=o,S.memoizedState=Xo(1|l,d,A,v)}function lf(o,l){return Nl(8390656,8,o,l)}function Yo(o,l){return Ol(2048,8,o,l)}function Am(o,l){return Ol(4,2,o,l)}function Tm(o,l){return Ol(4,4,o,l)}function bm(o,l){if(typeof l=="function")return o=o(),l(o),function(){l(null)};if(l!=null)return o=o(),l.current=o,function(){l.current=null}}function Cm(o,l,d){return d=d!=null?d.concat([o]):null,Ol(4,4,bm.bind(null,l,o),d)}function cf(){}function Rm(o,l){var d=Fi();l=l===void 0?null:l;var v=d.memoizedState;return v!==null&&l!==null&&rf(l,v[1])?v[0]:(d.memoizedState=[o,l],o)}function Pm(o,l){var d=Fi();l=l===void 0?null:l;var v=d.memoizedState;return v!==null&&l!==null&&rf(l,v[1])?v[0]:(o=o(),d.memoizedState=[o,l],o)}function dx(o,l){var d=Pt;Pt=d!==0&&4>d?d:4,o(!0);var v=ui.transition;ui.transition={};try{o(!1),l()}finally{Pt=d,ui.transition=v}}function Im(){return Fi().memoizedState}function px(o,l,d){var v=Er(o);d={lane:v,action:d,hasEagerState:!1,eagerState:null,next:null},Lm(o)?Dm(l,d):(Um(o,l,d),d=Nn(),o=hi(o,v,d),o!==null&&Nm(o,l,v))}function mx(o,l,d){var v=Er(o),S={lane:v,action:d,hasEagerState:!1,eagerState:null,next:null};if(Lm(o))Dm(l,S);else{Um(o,l,S);var A=o.alternate;if(o.lanes===0&&(A===null||A.lanes===0)&&(A=l.lastRenderedReducer,A!==null))try{var B=l.lastRenderedState,k=A(B,d);if(S.hasEagerState=!0,S.eagerState=k,Di(k,B))return}catch{}finally{}d=Nn(),o=hi(o,v,d),o!==null&&Nm(o,l,v)}}function Lm(o){var l=o.alternate;return o===Yt||l!==null&&l===Yt}function Dm(o,l){Go=Ll=!0;var d=o.pending;d===null?l.next=l:(l.next=d.next,d.next=l),o.pending=l}function Um(o,l,d){en!==null&&o.mode&1&&!(yt&2)?(o=l.interleaved,o===null?(d.next=d,Ni===null?Ni=[l]:Ni.push(l)):(d.next=o.next,o.next=d),l.interleaved=d):(o=l.pending,o===null?d.next=d:(d.next=o.next,o.next=d),l.pending=d)}function Nm(o,l,d){if(d&4194240){var v=l.lanes;v&=o.pendingLanes,d|=v,l.lanes=d,Oh(o,d)}}var Fl={readContext:oi,useCallback:wn,useContext:wn,useEffect:wn,useImperativeHandle:wn,useInsertionEffect:wn,useLayoutEffect:wn,useMemo:wn,useReducer:wn,useRef:wn,useState:wn,useDebugValue:wn,useDeferredValue:wn,useTransition:wn,useMutableSource:wn,useSyncExternalStore:wn,useId:wn,unstable_isNewReconciler:!1},gx={readContext:oi,useCallback:function(o,l){return nr().memoizedState=[o,l===void 0?null:l],o},useContext:oi,useEffect:lf,useImperativeHandle:function(o,l,d){return d=d!=null?d.concat([o]):null,Nl(4194308,4,bm.bind(null,l,o),d)},useLayoutEffect:function(o,l){return Nl(4194308,4,o,l)},useInsertionEffect:function(o,l){return Nl(4,2,o,l)},useMemo:function(o,l){var d=nr();return l=l===void 0?null:l,o=o(),d.memoizedState=[o,l],o},useReducer:function(o,l,d){var v=nr();return l=d!==void 0?d(l):l,v.memoizedState=v.baseState=l,o={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:o,lastRenderedState:l},v.queue=o,o=o.dispatch=px.bind(null,Yt,o),[v.memoizedState,o]},useRef:function(o){var l=nr();return o={current:o},l.memoizedState=o},useState:af,useDebugValue:cf,useDeferredValue:function(o){var l=af(o),d=l[0],v=l[1];return lf(function(){var S=ui.transition;ui.transition={};try{v(o)}finally{ui.transition=S}},[o]),d},useTransition:function(){var o=af(!1),l=o[0];return o=dx.bind(null,o[1]),nr().memoizedState=o,[l,o]},useMutableSource:function(){},useSyncExternalStore:function(o,l,d){var v=Yt,S=nr();if(Vt){if(d===void 0)throw Error(a(407));d=d()}else{if(d=l(),en===null)throw Error(a(349));Xs&30||xm(v,l,d)}S.memoizedState=d;var A={value:d,getSnapshot:l};return S.queue=A,lf(Mm.bind(null,v,A,o),[o]),v.flags|=2048,Xo(9,Sm.bind(null,v,A,d,l),void 0,null),d},useId:function(){var o=nr(),l=en.identifierPrefix;if(Vt){var d=tr,v=er;d=(v&~(1<<32-Dn(v)-1)).toString(32)+d,l=":"+l+"R"+d,d=Wo++,0<d&&(l+="H"+d.toString(32)),l+=":"}else d=fx++,l=":"+l+"r"+d.toString(32)+":";return o.memoizedState=l},unstable_isNewReconciler:!1},vx={readContext:oi,useCallback:Rm,useContext:oi,useEffect:Yo,useImperativeHandle:Cm,useInsertionEffect:Am,useLayoutEffect:Tm,useMemo:Pm,useReducer:Dl,useRef:Em,useState:function(){return Dl(qr)},useDebugValue:cf,useDeferredValue:function(o){var l=Dl(qr),d=l[0],v=l[1];return Yo(function(){var S=ui.transition;ui.transition={};try{v(o)}finally{ui.transition=S}},[o]),d},useTransition:function(){var o=Dl(qr)[0],l=Fi().memoizedState;return[o,l]},useMutableSource:_m,useSyncExternalStore:ym,useId:Im,unstable_isNewReconciler:!1},_x={readContext:oi,useCallback:Rm,useContext:oi,useEffect:Yo,useImperativeHandle:Cm,useInsertionEffect:Am,useLayoutEffect:Tm,useMemo:Pm,useReducer:Ul,useRef:Em,useState:function(){return Ul(qr)},useDebugValue:cf,useDeferredValue:function(o){var l=Ul(qr),d=l[0],v=l[1];return Yo(function(){var S=ui.transition;ui.transition={};try{v(o)}finally{ui.transition=S}},[o]),d},useTransition:function(){var o=Ul(qr)[0],l=Fi().memoizedState;return[o,l]},useMutableSource:_m,useSyncExternalStore:ym,useId:Im,unstable_isNewReconciler:!1};function uf(o,l){try{var d="",v=l;do d+=hx(v),v=v.return;while(v);var S=d}catch(A){S=`
Error generating stack: `+A.message+`
`+A.stack}return{value:o,source:l,stack:S}}function hf(o,l){try{console.error(l.value)}catch(d){setTimeout(function(){throw d})}}var yx=typeof WeakMap=="function"?WeakMap:Map;function Om(o,l,d){d=$i(-1,d),d.tag=3,d.payload={element:null};var v=l.value;return d.callback=function(){$l||($l=!0,Rf=v),hf(o,l)},d}function Fm(o,l,d){d=$i(-1,d),d.tag=3;var v=o.type.getDerivedStateFromError;if(typeof v=="function"){var S=l.value;d.payload=function(){return v(S)},d.callback=function(){hf(o,l)}}var A=o.stateNode;return A!==null&&typeof A.componentDidCatch=="function"&&(d.callback=function(){hf(o,l),typeof v!="function"&&(Mr===null?Mr=new Set([this]):Mr.add(this));var B=l.stack;this.componentDidCatch(l.value,{componentStack:B!==null?B:""})}),d}function Bm(o,l,d){var v=o.pingCache;if(v===null){v=o.pingCache=new yx;var S=new Set;v.set(l,S)}else S=v.get(l),S===void 0&&(S=new Set,v.set(l,S));S.has(d)||(S.add(d),o=Dx.bind(null,o,l,d),l.then(o,o))}function zm(o){do{var l;if((l=o.tag===13)&&(l=o.memoizedState,l=l!==null?l.dehydrated!==null:!0),l)return o;o=o.return}while(o!==null);return null}function km(o,l,d,v,S){return o.mode&1?(o.flags|=65536,o.lanes=S,o):(o===l?o.flags|=65536:(o.flags|=128,d.flags|=131072,d.flags&=-52805,d.tag===1&&(d.alternate===null?d.tag=17:(l=$i(-1,1),l.tag=2,Sr(d,l))),d.lanes|=1),o)}function Bi(o){o.flags|=4}function Hm(o,l){if(o!==null&&o.child===l.child)return!0;if(l.flags&16)return!1;for(o=l.child;o!==null;){if(o.flags&12854||o.subtreeFlags&12854)return!1;o=o.sibling}return!0}var qo,Zo,Bl,zl;if(nt)qo=function(o,l){for(var d=l.child;d!==null;){if(d.tag===5||d.tag===6)Be(o,d.stateNode);else if(d.tag!==4&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===l)break;for(;d.sibling===null;){if(d.return===null||d.return===l)return;d=d.return}d.sibling.return=d.return,d=d.sibling}},Zo=function(){},Bl=function(o,l,d,v,S){if(o=o.memoizedProps,o!==v){var A=l.stateNode,B=Oi(ci.current);d=ne(A,d,o,v,S,B),(l.updateQueue=d)&&Bi(l)}},zl=function(o,l,d,v){d!==v&&Bi(l)};else if(he){qo=function(o,l,d,v){for(var S=l.child;S!==null;){if(S.tag===5){var A=S.stateNode;d&&v&&(A=gn(A,S.type,S.memoizedProps,S)),Be(o,A)}else if(S.tag===6)A=S.stateNode,d&&v&&(A=si(A,S.memoizedProps,S)),Be(o,A);else if(S.tag!==4){if(S.tag===22&&S.memoizedState!==null)A=S.child,A!==null&&(A.return=S),qo(o,S,!0,!0);else if(S.child!==null){S.child.return=S,S=S.child;continue}}if(S===l)break;for(;S.sibling===null;){if(S.return===null||S.return===l)return;S=S.return}S.sibling.return=S.return,S=S.sibling}};var Vm=function(o,l,d,v){for(var S=l.child;S!==null;){if(S.tag===5){var A=S.stateNode;d&&v&&(A=gn(A,S.type,S.memoizedProps,S)),Gt(o,A)}else if(S.tag===6)A=S.stateNode,d&&v&&(A=si(A,S.memoizedProps,S)),Gt(o,A);else if(S.tag!==4){if(S.tag===22&&S.memoizedState!==null)A=S.child,A!==null&&(A.return=S),Vm(o,S,!0,!0);else if(S.child!==null){S.child.return=S,S=S.child;continue}}if(S===l)break;for(;S.sibling===null;){if(S.return===null||S.return===l)return;S=S.return}S.sibling.return=S.return,S=S.sibling}};Zo=function(o,l){var d=l.stateNode;if(!Hm(o,l)){o=d.containerInfo;var v=wt(o);Vm(v,l,!1,!1),d.pendingChildren=v,Bi(l),Sn(o,v)}},Bl=function(o,l,d,v,S){var A=o.stateNode,B=o.memoizedProps;if((o=Hm(o,l))&&B===v)l.stateNode=A;else{var k=l.stateNode,re=Oi(ci.current),_e=null;B!==v&&(_e=ne(k,d,B,v,S,re)),o&&_e===null?l.stateNode=A:(A=Ne(A,_e,d,B,v,l,o,k),Xe(A,d,v,S,re)&&Bi(l),l.stateNode=A,o?Bi(l):qo(A,l,!1,!1))}},zl=function(o,l,d,v){d!==v?(o=Oi(Gs.current),d=Oi(ci.current),l.stateNode=be(v,o,d,l),Bi(l)):l.stateNode=o.stateNode}}else Zo=function(){},Bl=function(){},zl=function(){};function jo(o,l){if(!Vt)switch(o.tailMode){case"hidden":l=o.tail;for(var d=null;l!==null;)l.alternate!==null&&(d=l),l=l.sibling;d===null?o.tail=null:d.sibling=null;break;case"collapsed":d=o.tail;for(var v=null;d!==null;)d.alternate!==null&&(v=d),d=d.sibling;v===null?l||o.tail===null?o.tail=null:o.tail.sibling=null:v.sibling=null}}function En(o){var l=o.alternate!==null&&o.alternate.child===o.child,d=0,v=0;if(l)for(var S=o.child;S!==null;)d|=S.lanes|S.childLanes,v|=S.subtreeFlags&14680064,v|=S.flags&14680064,S.return=o,S=S.sibling;else for(S=o.child;S!==null;)d|=S.lanes|S.childLanes,v|=S.subtreeFlags,v|=S.flags,S.return=o,S=S.sibling;return o.subtreeFlags|=v,o.childLanes=d,l}function xx(o,l,d){var v=l.pendingProps;switch(jh(l),l.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return En(l),null;case 1:return Ft(l.type)&&_r(),En(l),null;case 3:return v=l.stateNode,Ws(),_t(ct),_t(At),nf(),v.pendingContext&&(v.context=v.pendingContext,v.pendingContext=null),(o===null||o.child===null)&&(zo(l)?Bi(l):o===null||o.memoizedState.isDehydrated&&!(l.flags&256)||(l.flags|=1024,xi!==null&&(Lf(xi),xi=null))),Zo(o,l),En(l),null;case 5:ef(l),d=Oi(Gs.current);var S=l.type;if(o!==null&&l.stateNode!=null)Bl(o,l,S,v,d),o.ref!==l.ref&&(l.flags|=512,l.flags|=2097152);else{if(!v){if(l.stateNode===null)throw Error(a(166));return En(l),null}if(o=Oi(ci.current),zo(l)){if(!F)throw Error(a(175));o=pl(l.stateNode,l.type,l.memoizedProps,d,o,l,!Bo),l.updateQueue=o,o!==null&&Bi(l)}else{var A=ce(S,v,d,o,l);qo(A,l,!1,!1),l.stateNode=A,Xe(A,S,v,d,o)&&Bi(l)}l.ref!==null&&(l.flags|=512,l.flags|=2097152)}return En(l),null;case 6:if(o&&l.stateNode!=null)zl(o,l,o.memoizedProps,v);else{if(typeof v!="string"&&l.stateNode===null)throw Error(a(166));if(o=Oi(Gs.current),d=Oi(ci.current),zo(l)){if(!F)throw Error(a(176));if(o=l.stateNode,v=l.memoizedProps,(d=Ph(o,v,l,!Bo))&&(S=jn,S!==null))switch(A=(S.mode&1)!==0,S.tag){case 3:xe(S.stateNode.containerInfo,o,v,A);break;case 5:Le(S.type,S.memoizedProps,S.stateNode,o,v,A)}d&&Bi(l)}else l.stateNode=be(v,o,d,l)}return En(l),null;case 13:if(_t(Wt),v=l.memoizedState,Vt&&Jn!==null&&l.mode&1&&!(l.flags&128)){for(o=Jn;o;)o=Ii(o);return Hs(),l.flags|=98560,l}if(v!==null&&v.dehydrated!==null){if(v=zo(l),o===null){if(!v)throw Error(a(318));if(!F)throw Error(a(344));if(o=l.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(a(317));Ih(o,l)}else Hs(),!(l.flags&128)&&(l.memoizedState=null),l.flags|=4;return En(l),null}return xi!==null&&(Lf(xi),xi=null),l.flags&128?(l.lanes=d,l):(v=v!==null,d=!1,o===null?zo(l):d=o.memoizedState!==null,v&&!d&&(l.child.flags|=8192,l.mode&1&&(o===null||Wt.current&1?sn===0&&(sn=3):Uf())),l.updateQueue!==null&&(l.flags|=4),En(l),null);case 4:return Ws(),Zo(o,l),o===null&&Me(l.stateNode.containerInfo),En(l),null;case 10:return Gh(l.type._context),En(l),null;case 17:return Ft(l.type)&&_r(),En(l),null;case 19:if(_t(Wt),S=l.memoizedState,S===null)return En(l),null;if(v=(l.flags&128)!==0,A=S.rendering,A===null)if(v)jo(S,!1);else{if(sn!==0||o!==null&&o.flags&128)for(o=l.child;o!==null;){if(A=Pl(o),A!==null){for(l.flags|=128,jo(S,!1),o=A.updateQueue,o!==null&&(l.updateQueue=o,l.flags|=4),l.subtreeFlags=0,o=d,v=l.child;v!==null;)d=v,S=o,d.flags&=14680066,A=d.alternate,A===null?(d.childLanes=0,d.lanes=S,d.child=null,d.subtreeFlags=0,d.memoizedProps=null,d.memoizedState=null,d.updateQueue=null,d.dependencies=null,d.stateNode=null):(d.childLanes=A.childLanes,d.lanes=A.lanes,d.child=A.child,d.subtreeFlags=0,d.deletions=null,d.memoizedProps=A.memoizedProps,d.memoizedState=A.memoizedState,d.updateQueue=A.updateQueue,d.type=A.type,S=A.dependencies,d.dependencies=S===null?null:{lanes:S.lanes,firstContext:S.firstContext}),v=v.sibling;return Je(Wt,Wt.current&1|2),l.child}o=o.sibling}S.tail!==null&&ln()>Cf&&(l.flags|=128,v=!0,jo(S,!1),l.lanes=4194304)}else{if(!v)if(o=Pl(A),o!==null){if(l.flags|=128,v=!0,o=o.updateQueue,o!==null&&(l.updateQueue=o,l.flags|=4),jo(S,!0),S.tail===null&&S.tailMode==="hidden"&&!A.alternate&&!Vt)return En(l),null}else 2*ln()-S.renderingStartTime>Cf&&d!==1073741824&&(l.flags|=128,v=!0,jo(S,!1),l.lanes=4194304);S.isBackwards?(A.sibling=l.child,l.child=A):(o=S.last,o!==null?o.sibling=A:l.child=A,S.last=A)}return S.tail!==null?(l=S.tail,S.rendering=l,S.tail=l.sibling,S.renderingStartTime=ln(),l.sibling=null,o=Wt.current,Je(Wt,v?o&1|2:o&1),l):(En(l),null);case 22:case 23:return Df(),v=l.memoizedState!==null,o!==null&&o.memoizedState!==null!==v&&(l.flags|=8192),v&&l.mode&1?Qn&1073741824&&(En(l),nt&&l.subtreeFlags&6&&(l.flags|=8192)):En(l),null;case 24:return null;case 25:return null}throw Error(a(156,l.tag))}var Sx=c.ReactCurrentOwner,Kn=!1;function Un(o,l,d,v){l.child=o===null?gm(l,null,d,v):Vs(l,o.child,d,v)}function Gm(o,l,d,v,S){d=d.render;var A=l.ref;return Bs(l,S),v=sf(o,l,d,v,A,S),d=of(),o!==null&&!Kn?(l.updateQueue=o.updateQueue,l.flags&=-2053,o.lanes&=~S,ir(o,l,S)):(Vt&&d&&Zh(l),l.flags|=1,Un(o,l,v,S),l.child)}function Wm(o,l,d,v,S){if(o===null){var A=d.type;return typeof A=="function"&&!Nf(A)&&A.defaultProps===void 0&&d.compare===null&&d.defaultProps===void 0?(l.tag=15,l.type=A,Xm(o,l,A,v,S)):(o=oc(d.type,null,v,l,l.mode,S),o.ref=l.ref,o.return=l,l.child=o)}if(A=o.child,!(o.lanes&S)){var B=A.memoizedProps;if(d=d.compare,d=d!==null?d:Sl,d(B,v)&&o.ref===l.ref)return ir(o,l,S)}return l.flags|=1,o=Tr(A,v),o.ref=l.ref,o.return=l,l.child=o}function Xm(o,l,d,v,S){if(o!==null&&Sl(o.memoizedProps,v)&&o.ref===l.ref)if(Kn=!1,(o.lanes&S)!==0)o.flags&131072&&(Kn=!0);else return l.lanes=o.lanes,ir(o,l,S);return ff(o,l,d,v,S)}function Ym(o,l,d){var v=l.pendingProps,S=v.children,A=o!==null?o.memoizedState:null;if(v.mode==="hidden")if(!(l.mode&1))l.memoizedState={baseLanes:0,cachePool:null},Je(Ys,Qn),Qn|=d;else if(d&1073741824)l.memoizedState={baseLanes:0,cachePool:null},v=A!==null?A.baseLanes:d,Je(Ys,Qn),Qn|=v;else return o=A!==null?A.baseLanes|d:d,l.lanes=l.childLanes=1073741824,l.memoizedState={baseLanes:o,cachePool:null},l.updateQueue=null,Je(Ys,Qn),Qn|=o,null;else A!==null?(v=A.baseLanes|d,l.memoizedState=null):v=d,Je(Ys,Qn),Qn|=v;return Un(o,l,S,d),l.child}function qm(o,l){var d=l.ref;(o===null&&d!==null||o!==null&&o.ref!==d)&&(l.flags|=512,l.flags|=2097152)}function ff(o,l,d,v,S){var A=Ft(d)?rn:At.current;return A=Zn(l,A),Bs(l,S),d=sf(o,l,d,v,A,S),v=of(),o!==null&&!Kn?(l.updateQueue=o.updateQueue,l.flags&=-2053,o.lanes&=~S,ir(o,l,S)):(Vt&&v&&Zh(l),l.flags|=1,Un(o,l,d,S),l.child)}function Zm(o,l,d,v,S){if(Ft(d)){var A=!0;yr(l)}else A=!1;if(Bs(l,S),l.stateNode===null)o!==null&&(o.alternate=null,l.alternate=null,l.flags|=2),lm(l,d,v),qh(l,d,v,S),v=!0;else if(o===null){var B=l.stateNode,k=l.memoizedProps;B.props=k;var re=B.context,_e=d.contextType;typeof _e=="object"&&_e!==null?_e=oi(_e):(_e=Ft(d)?rn:At.current,_e=Zn(l,_e));var Ve=d.getDerivedStateFromProps,ht=typeof Ve=="function"||typeof B.getSnapshotBeforeUpdate=="function";ht||typeof B.UNSAFE_componentWillReceiveProps!="function"&&typeof B.componentWillReceiveProps!="function"||(k!==v||re!==_e)&&cm(l,B,v,_e),xr=!1;var $e=l.memoizedState;B.state=$e,Al(l,v,B,S),re=l.memoizedState,k!==v||$e!==re||ct.current||xr?(typeof Ve=="function"&&(Yh(l,d,Ve,v),re=l.memoizedState),(k=xr||am(l,d,k,v,$e,re,_e))?(ht||typeof B.UNSAFE_componentWillMount!="function"&&typeof B.componentWillMount!="function"||(typeof B.componentWillMount=="function"&&B.componentWillMount(),typeof B.UNSAFE_componentWillMount=="function"&&B.UNSAFE_componentWillMount()),typeof B.componentDidMount=="function"&&(l.flags|=4194308)):(typeof B.componentDidMount=="function"&&(l.flags|=4194308),l.memoizedProps=v,l.memoizedState=re),B.props=v,B.state=re,B.context=_e,v=k):(typeof B.componentDidMount=="function"&&(l.flags|=4194308),v=!1)}else{B=l.stateNode,im(o,l),k=l.memoizedProps,_e=l.type===l.elementType?k:yi(l.type,k),B.props=_e,ht=l.pendingProps,$e=B.context,re=d.contextType,typeof re=="object"&&re!==null?re=oi(re):(re=Ft(d)?rn:At.current,re=Zn(l,re));var Bt=d.getDerivedStateFromProps;(Ve=typeof Bt=="function"||typeof B.getSnapshotBeforeUpdate=="function")||typeof B.UNSAFE_componentWillReceiveProps!="function"&&typeof B.componentWillReceiveProps!="function"||(k!==ht||$e!==re)&&cm(l,B,v,re),xr=!1,$e=l.memoizedState,B.state=$e,Al(l,v,B,S);var Ke=l.memoizedState;k!==ht||$e!==Ke||ct.current||xr?(typeof Bt=="function"&&(Yh(l,d,Bt,v),Ke=l.memoizedState),(_e=xr||am(l,d,_e,v,$e,Ke,re)||!1)?(Ve||typeof B.UNSAFE_componentWillUpdate!="function"&&typeof B.componentWillUpdate!="function"||(typeof B.componentWillUpdate=="function"&&B.componentWillUpdate(v,Ke,re),typeof B.UNSAFE_componentWillUpdate=="function"&&B.UNSAFE_componentWillUpdate(v,Ke,re)),typeof B.componentDidUpdate=="function"&&(l.flags|=4),typeof B.getSnapshotBeforeUpdate=="function"&&(l.flags|=1024)):(typeof B.componentDidUpdate!="function"||k===o.memoizedProps&&$e===o.memoizedState||(l.flags|=4),typeof B.getSnapshotBeforeUpdate!="function"||k===o.memoizedProps&&$e===o.memoizedState||(l.flags|=1024),l.memoizedProps=v,l.memoizedState=Ke),B.props=v,B.state=Ke,B.context=re,v=_e):(typeof B.componentDidUpdate!="function"||k===o.memoizedProps&&$e===o.memoizedState||(l.flags|=4),typeof B.getSnapshotBeforeUpdate!="function"||k===o.memoizedProps&&$e===o.memoizedState||(l.flags|=1024),v=!1)}return df(o,l,d,v,A,S)}function df(o,l,d,v,S,A){qm(o,l);var B=(l.flags&128)!==0;if(!v&&!B)return S&&Ln(l,d,!1),ir(o,l,A);v=l.stateNode,Sx.current=l;var k=B&&typeof d.getDerivedStateFromError!="function"?null:v.render();return l.flags|=1,o!==null&&B?(l.child=Vs(l,o.child,null,A),l.child=Vs(l,null,k,A)):Un(o,l,k,A),l.memoizedState=v.state,S&&Ln(l,d,!0),l.child}function jm(o){var l=o.stateNode;l.pendingContext?Ht(o,l.pendingContext,l.pendingContext!==l.context):l.context&&Ht(o,l.context,!1),$h(o,l.containerInfo)}function Jm(o,l,d,v,S){return Hs(),Qh(S),l.flags|=256,Un(o,l,d,v),l.child}var kl={dehydrated:null,treeContext:null,retryLane:0};function Hl(o){return{baseLanes:o,cachePool:null}}function Km(o,l,d){var v=l.pendingProps,S=Wt.current,A=!1,B=(l.flags&128)!==0,k;if((k=B)||(k=o!==null&&o.memoizedState===null?!1:(S&2)!==0),k?(A=!0,l.flags&=-129):(o===null||o.memoizedState!==null)&&(S|=1),Je(Wt,S&1),o===null)return Kh(l),o=l.memoizedState,o!==null&&(o=o.dehydrated,o!==null)?(l.mode&1?Ns(o)?l.lanes=8:l.lanes=1073741824:l.lanes=1,null):(S=v.children,o=v.fallback,A?(v=l.mode,A=l.child,S={mode:"hidden",children:S},!(v&1)&&A!==null?(A.childLanes=0,A.pendingProps=S):A=ac(S,v,0,null),o=$r(o,v,d,null),A.return=l,o.return=l,A.sibling=o,l.child=A,l.child.memoizedState=Hl(d),l.memoizedState=kl,o):pf(l,S));if(S=o.memoizedState,S!==null){if(k=S.dehydrated,k!==null){if(B)return l.flags&256?(l.flags&=-257,Vl(o,l,d,Error(a(422)))):l.memoizedState!==null?(l.child=o.child,l.flags|=128,null):(A=v.fallback,S=l.mode,v=ac({mode:"visible",children:v.children},S,0,null),A=$r(A,S,d,null),A.flags|=2,v.return=l,A.return=l,v.sibling=A,l.child=v,l.mode&1&&Vs(l,o.child,null,d),l.child.memoizedState=Hl(d),l.memoizedState=kl,A);if(!(l.mode&1))l=Vl(o,l,d,null);else if(Ns(k))l=Vl(o,l,d,Error(a(419)));else if(v=(d&o.childLanes)!==0,Kn||v){if(v=en,v!==null){switch(d&-d){case 4:A=2;break;case 16:A=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:A=32;break;case 536870912:A=268435456;break;default:A=0}v=A&(v.suspendedLanes|d)?0:A,v!==0&&v!==S.retryLane&&(S.retryLane=v,hi(o,v,-1))}Uf(),l=Vl(o,l,d,Error(a(421)))}else Us(k)?(l.flags|=128,l.child=o.child,l=Ux.bind(null,o),hl(k,l),l=null):(d=S.treeContext,F&&(Jn=dl(k),jn=l,Vt=!0,xi=null,Bo=!1,d!==null&&(ai[li++]=er,ai[li++]=tr,ai[li++]=Xr,er=d.id,tr=d.overflow,Xr=l)),l=pf(l,l.pendingProps.children),l.flags|=4096);return l}return A?(v=$m(o,l,v.children,v.fallback,d),A=l.child,S=o.child.memoizedState,A.memoizedState=S===null?Hl(d):{baseLanes:S.baseLanes|d,cachePool:null},A.childLanes=o.childLanes&~d,l.memoizedState=kl,v):(d=Qm(o,l,v.children,d),l.memoizedState=null,d)}return A?(v=$m(o,l,v.children,v.fallback,d),A=l.child,S=o.child.memoizedState,A.memoizedState=S===null?Hl(d):{baseLanes:S.baseLanes|d,cachePool:null},A.childLanes=o.childLanes&~d,l.memoizedState=kl,v):(d=Qm(o,l,v.children,d),l.memoizedState=null,d)}function pf(o,l){return l=ac({mode:"visible",children:l},o.mode,0,null),l.return=o,o.child=l}function Qm(o,l,d,v){var S=o.child;return o=S.sibling,d=Tr(S,{mode:"visible",children:d}),!(l.mode&1)&&(d.lanes=v),d.return=l,d.sibling=null,o!==null&&(v=l.deletions,v===null?(l.deletions=[o],l.flags|=16):v.push(o)),l.child=d}function $m(o,l,d,v,S){var A=l.mode;o=o.child;var B=o.sibling,k={mode:"hidden",children:d};return!(A&1)&&l.child!==o?(d=l.child,d.childLanes=0,d.pendingProps=k,l.deletions=null):(d=Tr(o,k),d.subtreeFlags=o.subtreeFlags&14680064),B!==null?v=Tr(B,v):(v=$r(v,A,S,null),v.flags|=2),v.return=l,d.return=l,d.sibling=v,l.child=d,v}function Vl(o,l,d,v){return v!==null&&Qh(v),Vs(l,o.child,null,d),o=pf(l,l.pendingProps.children),o.flags|=2,l.memoizedState=null,o}function eg(o,l,d){o.lanes|=l;var v=o.alternate;v!==null&&(v.lanes|=l),Wh(o.return,l,d)}function mf(o,l,d,v,S){var A=o.memoizedState;A===null?o.memoizedState={isBackwards:l,rendering:null,renderingStartTime:0,last:v,tail:d,tailMode:S}:(A.isBackwards=l,A.rendering=null,A.renderingStartTime=0,A.last=v,A.tail=d,A.tailMode=S)}function tg(o,l,d){var v=l.pendingProps,S=v.revealOrder,A=v.tail;if(Un(o,l,v.children,d),v=Wt.current,v&2)v=v&1|2,l.flags|=128;else{if(o!==null&&o.flags&128)e:for(o=l.child;o!==null;){if(o.tag===13)o.memoizedState!==null&&eg(o,d,l);else if(o.tag===19)eg(o,d,l);else if(o.child!==null){o.child.return=o,o=o.child;continue}if(o===l)break e;for(;o.sibling===null;){if(o.return===null||o.return===l)break e;o=o.return}o.sibling.return=o.return,o=o.sibling}v&=1}if(Je(Wt,v),!(l.mode&1))l.memoizedState=null;else switch(S){case"forwards":for(d=l.child,S=null;d!==null;)o=d.alternate,o!==null&&Pl(o)===null&&(S=d),d=d.sibling;d=S,d===null?(S=l.child,l.child=null):(S=d.sibling,d.sibling=null),mf(l,!1,S,d,A);break;case"backwards":for(d=null,S=l.child,l.child=null;S!==null;){if(o=S.alternate,o!==null&&Pl(o)===null){l.child=S;break}o=S.sibling,S.sibling=d,d=S,S=o}mf(l,!0,d,null,A);break;case"together":mf(l,!1,null,null,void 0);break;default:l.memoizedState=null}return l.child}function ir(o,l,d){if(o!==null&&(l.dependencies=o.dependencies),qs|=l.lanes,!(d&l.childLanes))return null;if(o!==null&&l.child!==o.child)throw Error(a(153));if(l.child!==null){for(o=l.child,d=Tr(o,o.pendingProps),l.child=d,d.return=l;o.sibling!==null;)o=o.sibling,d=d.sibling=Tr(o,o.pendingProps),d.return=l;d.sibling=null}return l.child}function Mx(o,l,d){switch(l.tag){case 3:jm(l),Hs();break;case 5:vm(l);break;case 1:Ft(l.type)&&yr(l);break;case 4:$h(l,l.stateNode.containerInfo);break;case 10:nm(l,l.type._context,l.memoizedProps.value);break;case 13:var v=l.memoizedState;if(v!==null)return v.dehydrated!==null?(Je(Wt,Wt.current&1),l.flags|=128,null):d&l.child.childLanes?Km(o,l,d):(Je(Wt,Wt.current&1),o=ir(o,l,d),o!==null?o.sibling:null);Je(Wt,Wt.current&1);break;case 19:if(v=(d&l.childLanes)!==0,o.flags&128){if(v)return tg(o,l,d);l.flags|=128}var S=l.memoizedState;if(S!==null&&(S.rendering=null,S.tail=null,S.lastEffect=null),Je(Wt,Wt.current),v)break;return null;case 22:case 23:return l.lanes=0,Ym(o,l,d)}return ir(o,l,d)}function wx(o,l){switch(jh(l),l.tag){case 1:return Ft(l.type)&&_r(),o=l.flags,o&65536?(l.flags=o&-65537|128,l):null;case 3:return Ws(),_t(ct),_t(At),nf(),o=l.flags,o&65536&&!(o&128)?(l.flags=o&-65537|128,l):null;case 5:return ef(l),null;case 13:if(_t(Wt),o=l.memoizedState,o!==null&&o.dehydrated!==null){if(l.alternate===null)throw Error(a(340));Hs()}return o=l.flags,o&65536?(l.flags=o&-65537|128,l):null;case 19:return _t(Wt),null;case 4:return Ws(),null;case 10:return Gh(l.type._context),null;case 22:case 23:return Df(),null;case 24:return null;default:return null}}var Gl=!1,Zr=!1,Ex=typeof WeakSet=="function"?WeakSet:Set,Ce=null;function Wl(o,l){var d=o.ref;if(d!==null)if(typeof d=="function")try{d(null)}catch(v){Gn(o,l,v)}else d.current=null}function gf(o,l,d){try{d()}catch(v){Gn(o,l,v)}}var ng=!1;function Ax(o,l){for(se(o.containerInfo),Ce=l;Ce!==null;)if(o=Ce,l=o.child,(o.subtreeFlags&1028)!==0&&l!==null)l.return=o,Ce=l;else for(;Ce!==null;){o=Ce;try{var d=o.alternate;if(o.flags&1024)switch(o.tag){case 0:case 11:case 15:break;case 1:if(d!==null){var v=d.memoizedProps,S=d.memoizedState,A=o.stateNode,B=A.getSnapshotBeforeUpdate(o.elementType===o.type?v:yi(o.type,v),S);A.__reactInternalSnapshotBeforeUpdate=B}break;case 3:nt&&Ie(o.stateNode.containerInfo);break;case 5:case 6:case 4:case 17:break;default:throw Error(a(163))}}catch(k){Gn(o,o.return,k)}if(l=o.sibling,l!==null){l.return=o.return,Ce=l;break}Ce=o.return}return d=ng,ng=!1,d}function jr(o,l,d){var v=l.updateQueue;if(v=v!==null?v.lastEffect:null,v!==null){var S=v=v.next;do{if((S.tag&o)===o){var A=S.destroy;S.destroy=void 0,A!==void 0&&gf(l,d,A)}S=S.next}while(S!==v)}}function Jo(o,l){if(l=l.updateQueue,l=l!==null?l.lastEffect:null,l!==null){var d=l=l.next;do{if((d.tag&o)===o){var v=d.create;d.destroy=v()}d=d.next}while(d!==l)}}function vf(o){var l=o.ref;if(l!==null){var d=o.stateNode;switch(o.tag){case 5:o=Z(d);break;default:o=d}typeof l=="function"?l(o):l.current=o}}function ig(o,l,d){if(Li&&typeof Li.onCommitFiberUnmount=="function")try{Li.onCommitFiberUnmount(yl,l)}catch{}switch(l.tag){case 0:case 11:case 14:case 15:if(o=l.updateQueue,o!==null&&(o=o.lastEffect,o!==null)){var v=o=o.next;do{var S=v,A=S.destroy;S=S.tag,A!==void 0&&(S&2||S&4)&&gf(l,d,A),v=v.next}while(v!==o)}break;case 1:if(Wl(l,d),o=l.stateNode,typeof o.componentWillUnmount=="function")try{o.props=l.memoizedProps,o.state=l.memoizedState,o.componentWillUnmount()}catch(B){Gn(l,d,B)}break;case 5:Wl(l,d);break;case 4:nt?cg(o,l,d):he&&he&&(l=l.stateNode.containerInfo,d=wt(l),Et(l,d))}}function rg(o,l,d){for(var v=l;;)if(ig(o,v,d),v.child===null||nt&&v.tag===4){if(v===l)break;for(;v.sibling===null;){if(v.return===null||v.return===l)return;v=v.return}v.sibling.return=v.return,v=v.sibling}else v.child.return=v,v=v.child}function sg(o){var l=o.alternate;l!==null&&(o.alternate=null,sg(l)),o.child=null,o.deletions=null,o.sibling=null,o.tag===5&&(l=o.stateNode,l!==null&&Ee(l)),o.stateNode=null,o.return=null,o.dependencies=null,o.memoizedProps=null,o.memoizedState=null,o.pendingProps=null,o.stateNode=null,o.updateQueue=null}function og(o){return o.tag===5||o.tag===3||o.tag===4}function ag(o){e:for(;;){for(;o.sibling===null;){if(o.return===null||og(o.return))return null;o=o.return}for(o.sibling.return=o.return,o=o.sibling;o.tag!==5&&o.tag!==6&&o.tag!==18;){if(o.flags&2||o.child===null||o.tag===4)continue e;o.child.return=o,o=o.child}if(!(o.flags&2))return o.stateNode}}function lg(o){if(nt){e:{for(var l=o.return;l!==null;){if(og(l))break e;l=l.return}throw Error(a(160))}var d=l;switch(d.tag){case 5:l=d.stateNode,d.flags&32&&(Nt(l),d.flags&=-33),d=ag(o),yf(o,d,l);break;case 3:case 4:l=d.stateNode.containerInfo,d=ag(o),_f(o,d,l);break;default:throw Error(a(161))}}}function _f(o,l,d){var v=o.tag;if(v===5||v===6)o=o.stateNode,l?ze(d,o,l):St(d,o);else if(v!==4&&(o=o.child,o!==null))for(_f(o,l,d),o=o.sibling;o!==null;)_f(o,l,d),o=o.sibling}function yf(o,l,d){var v=o.tag;if(v===5||v===6)o=o.stateNode,l?at(d,o,l):Oe(d,o);else if(v!==4&&(o=o.child,o!==null))for(yf(o,l,d),o=o.sibling;o!==null;)yf(o,l,d),o=o.sibling}function cg(o,l,d){for(var v=l,S=!1,A,B;;){if(!S){S=v.return;e:for(;;){if(S===null)throw Error(a(160));switch(A=S.stateNode,S.tag){case 5:B=!1;break e;case 3:A=A.containerInfo,B=!0;break e;case 4:A=A.containerInfo,B=!0;break e}S=S.return}S=!0}if(v.tag===5||v.tag===6)rg(o,v,d),B?ut(A,v.stateNode):Mt(A,v.stateNode);else if(v.tag===18)B?$(A,v.stateNode):Q(A,v.stateNode);else if(v.tag===4){if(v.child!==null){A=v.stateNode.containerInfo,B=!0,v.child.return=v,v=v.child;continue}}else if(ig(o,v,d),v.child!==null){v.child.return=v,v=v.child;continue}if(v===l)break;for(;v.sibling===null;){if(v.return===null||v.return===l)return;v=v.return,v.tag===4&&(S=!1)}v.sibling.return=v.return,v=v.sibling}}function xf(o,l){if(nt){switch(l.tag){case 0:case 11:case 14:case 15:jr(3,l,l.return),Jo(3,l),jr(5,l,l.return);return;case 1:return;case 5:var d=l.stateNode;if(d!=null){var v=l.memoizedProps;o=o!==null?o.memoizedProps:v;var S=l.type,A=l.updateQueue;l.updateQueue=null,A!==null&&ot(d,A,S,o,v,l)}return;case 6:if(l.stateNode===null)throw Error(a(162));d=l.memoizedProps,ve(l.stateNode,o!==null?o.memoizedProps:d,d);return;case 3:F&&o!==null&&o.memoizedState.isDehydrated&&L(l.stateNode.containerInfo);return;case 12:return;case 13:Xl(l);return;case 19:Xl(l);return;case 17:return}throw Error(a(163))}switch(l.tag){case 0:case 11:case 14:case 15:jr(3,l,l.return),Jo(3,l),jr(5,l,l.return);return;case 12:return;case 13:Xl(l);return;case 19:Xl(l);return;case 3:F&&o!==null&&o.memoizedState.isDehydrated&&L(l.stateNode.containerInfo);break;case 22:case 23:return}e:if(he){switch(l.tag){case 1:case 5:case 6:break e;case 3:case 4:l=l.stateNode,Et(l.containerInfo,l.pendingChildren);break e}throw Error(a(163))}}function Xl(o){var l=o.updateQueue;if(l!==null){o.updateQueue=null;var d=o.stateNode;d===null&&(d=o.stateNode=new Ex),l.forEach(function(v){var S=Nx.bind(null,o,v);d.has(v)||(d.add(v),v.then(S,S))})}}function Tx(o,l){for(Ce=l;Ce!==null;){l=Ce;var d=l.deletions;if(d!==null)for(var v=0;v<d.length;v++){var S=d[v];try{var A=o;nt?cg(A,S,l):rg(A,S,l);var B=S.alternate;B!==null&&(B.return=null),S.return=null}catch(Ze){Gn(S,l,Ze)}}if(d=l.child,l.subtreeFlags&12854&&d!==null)d.return=l,Ce=d;else for(;Ce!==null;){l=Ce;try{var k=l.flags;if(k&32&&nt&&Nt(l.stateNode),k&512){var re=l.alternate;if(re!==null){var _e=re.ref;_e!==null&&(typeof _e=="function"?_e(null):_e.current=null)}}if(k&8192)switch(l.tag){case 13:if(l.memoizedState!==null){var Ve=l.alternate;(Ve===null||Ve.memoizedState===null)&&(bf=ln())}break;case 22:var ht=l.memoizedState!==null,$e=l.alternate,Bt=$e!==null&&$e.memoizedState!==null;if(d=l,nt){e:if(v=d,S=ht,A=null,nt)for(var Ke=v;;){if(Ke.tag===5){if(A===null){A=Ke;var An=Ke.stateNode;S?H(An):ie(Ke.stateNode,Ke.memoizedProps)}}else if(Ke.tag===6){if(A===null){var di=Ke.stateNode;S?Ue(di):de(di,Ke.memoizedProps)}}else if((Ke.tag!==22&&Ke.tag!==23||Ke.memoizedState===null||Ke===v)&&Ke.child!==null){Ke.child.return=Ke,Ke=Ke.child;continue}if(Ke===v)break;for(;Ke.sibling===null;){if(Ke.return===null||Ke.return===v)break e;A===Ke&&(A=null),Ke=Ke.return}A===Ke&&(A=null),Ke.sibling.return=Ke.return,Ke=Ke.sibling}}if(ht&&!Bt&&d.mode&1){Ce=d;for(var J=d.child;J!==null;){for(d=Ce=J;Ce!==null;){v=Ce;var G=v.child;switch(v.tag){case 0:case 11:case 14:case 15:jr(4,v,v.return);break;case 1:Wl(v,v.return);var ee=v.stateNode;if(typeof ee.componentWillUnmount=="function"){var Re=v.return;try{ee.props=v.memoizedProps,ee.state=v.memoizedState,ee.componentWillUnmount()}catch(Ze){Gn(v,Re,Ze)}}break;case 5:Wl(v,v.return);break;case 22:if(v.memoizedState!==null){fg(d);continue}}G!==null?(G.return=v,Ce=G):fg(d)}J=J.sibling}}}switch(k&4102){case 2:lg(l),l.flags&=-3;break;case 6:lg(l),l.flags&=-3,xf(l.alternate,l);break;case 4096:l.flags&=-4097;break;case 4100:l.flags&=-4097,xf(l.alternate,l);break;case 4:xf(l.alternate,l)}}catch(Ze){Gn(l,l.return,Ze)}if(d=l.sibling,d!==null){d.return=l.return,Ce=d;break}Ce=l.return}}}function bx(o,l,d){Ce=o,ug(o)}function ug(o,l,d){for(var v=(o.mode&1)!==0;Ce!==null;){var S=Ce,A=S.child;if(S.tag===22&&v){var B=S.memoizedState!==null||Gl;if(!B){var k=S.alternate,re=k!==null&&k.memoizedState!==null||Zr;k=Gl;var _e=Zr;if(Gl=B,(Zr=re)&&!_e)for(Ce=S;Ce!==null;)B=Ce,re=B.child,B.tag===22&&B.memoizedState!==null?dg(S):re!==null?(re.return=B,Ce=re):dg(S);for(;A!==null;)Ce=A,ug(A),A=A.sibling;Ce=S,Gl=k,Zr=_e}hg(o)}else S.subtreeFlags&8772&&A!==null?(A.return=S,Ce=A):hg(o)}}function hg(o){for(;Ce!==null;){var l=Ce;if(l.flags&8772){var d=l.alternate;try{if(l.flags&8772)switch(l.tag){case 0:case 11:case 15:Zr||Jo(5,l);break;case 1:var v=l.stateNode;if(l.flags&4&&!Zr)if(d===null)v.componentDidMount();else{var S=l.elementType===l.type?d.memoizedProps:yi(l.type,d.memoizedProps);v.componentDidUpdate(S,d.memoizedState,v.__reactInternalSnapshotBeforeUpdate)}var A=l.updateQueue;A!==null&&sm(l,A,v);break;case 3:var B=l.updateQueue;if(B!==null){if(d=null,l.child!==null)switch(l.child.tag){case 5:d=Z(l.child.stateNode);break;case 1:d=l.child.stateNode}sm(l,B,d)}break;case 5:var k=l.stateNode;d===null&&l.flags&4&&Fe(k,l.type,l.memoizedProps,l);break;case 6:break;case 4:break;case 12:break;case 13:if(F&&l.memoizedState===null){var re=l.alternate;if(re!==null){var _e=re.memoizedState;if(_e!==null){var Ve=_e.dehydrated;Ve!==null&&V(Ve)}}}break;case 19:case 17:case 21:case 22:case 23:break;default:throw Error(a(163))}Zr||l.flags&512&&vf(l)}catch(ht){Gn(l,l.return,ht)}}if(l===o){Ce=null;break}if(d=l.sibling,d!==null){d.return=l.return,Ce=d;break}Ce=l.return}}function fg(o){for(;Ce!==null;){var l=Ce;if(l===o){Ce=null;break}var d=l.sibling;if(d!==null){d.return=l.return,Ce=d;break}Ce=l.return}}function dg(o){for(;Ce!==null;){var l=Ce;try{switch(l.tag){case 0:case 11:case 15:var d=l.return;try{Jo(4,l)}catch(re){Gn(l,d,re)}break;case 1:var v=l.stateNode;if(typeof v.componentDidMount=="function"){var S=l.return;try{v.componentDidMount()}catch(re){Gn(l,S,re)}}var A=l.return;try{vf(l)}catch(re){Gn(l,A,re)}break;case 5:var B=l.return;try{vf(l)}catch(re){Gn(l,B,re)}}}catch(re){Gn(l,l.return,re)}if(l===o){Ce=null;break}var k=l.sibling;if(k!==null){k.return=l.return,Ce=k;break}Ce=l.return}}var Yl=0,ql=1,Zl=2,jl=3,Jl=4;if(typeof Symbol=="function"&&Symbol.for){var Ko=Symbol.for;Yl=Ko("selector.component"),ql=Ko("selector.has_pseudo_class"),Zl=Ko("selector.role"),jl=Ko("selector.test_id"),Jl=Ko("selector.text")}function Sf(o){var l=we(o);if(l!=null){if(typeof l.memoizedProps["data-testname"]!="string")throw Error(a(364));return l}if(o=R(o),o===null)throw Error(a(362));return o.stateNode.current}function Mf(o,l){switch(l.$$typeof){case Yl:if(o.type===l.value)return!0;break;case ql:e:{l=l.value,o=[o,0];for(var d=0;d<o.length;){var v=o[d++],S=o[d++],A=l[S];if(v.tag!==5||!ue(v)){for(;A!=null&&Mf(v,A);)S++,A=l[S];if(S===l.length){l=!0;break e}else for(v=v.child;v!==null;)o.push(v,S),v=v.sibling}}l=!1}return l;case Zl:if(o.tag===5&&ae(o.stateNode,l.value))return!0;break;case Jl:if((o.tag===5||o.tag===6)&&(o=oe(o),o!==null&&0<=o.indexOf(l.value)))return!0;break;case jl:if(o.tag===5&&(o=o.memoizedProps["data-testname"],typeof o=="string"&&o.toLowerCase()===l.value.toLowerCase()))return!0;break;default:throw Error(a(365))}return!1}function wf(o){switch(o.$$typeof){case Yl:return"<"+(I(o.value)||"Unknown")+">";case ql:return":has("+(wf(o)||"")+")";case Zl:return'[role="'+o.value+'"]';case Jl:return'"'+o.value+'"';case jl:return'[data-testname="'+o.value+'"]';default:throw Error(a(365))}}function pg(o,l){var d=[];o=[o,0];for(var v=0;v<o.length;){var S=o[v++],A=o[v++],B=l[A];if(S.tag!==5||!ue(S)){for(;B!=null&&Mf(S,B);)A++,B=l[A];if(A===l.length)d.push(S);else for(S=S.child;S!==null;)o.push(S,A),S=S.sibling}}return d}function Ef(o,l){if(!U)throw Error(a(363));o=Sf(o),o=pg(o,l),l=[],o=Array.from(o);for(var d=0;d<o.length;){var v=o[d++];if(v.tag===5)ue(v)||l.push(v.stateNode);else for(v=v.child;v!==null;)o.push(v),v=v.sibling}return l}var Cx=Math.ceil,Kl=c.ReactCurrentDispatcher,Af=c.ReactCurrentOwner,Kt=c.ReactCurrentBatchConfig,yt=0,en=null,tn=null,vn=0,Qn=0,Ys=Ut(0),sn=0,Qo=null,qs=0,Ql=0,Tf=0,$o=null,Hn=null,bf=0,Cf=1/0;function Zs(){Cf=ln()+500}var $l=!1,Rf=null,Mr=null,ec=!1,wr=null,tc=0,ea=0,Pf=null,nc=-1,ic=0;function Nn(){return yt&6?ln():nc!==-1?nc:nc=ln()}function Er(o){return o.mode&1?yt&2&&vn!==0?vn&-vn:ux.transition!==null?(ic===0&&(o=gl,gl<<=1,!(gl&4194240)&&(gl=64),ic=o),ic):(o=Pt,o!==0?o:ge()):1}function hi(o,l,d){if(50<ea)throw ea=0,Pf=null,Error(a(185));var v=rc(o,l);return v===null?null:(Fo(v,l,d),(!(yt&2)||v!==en)&&(v===en&&(!(yt&2)&&(Ql|=l),sn===4&&Ar(v,vn)),Vn(v,d),l===1&&yt===0&&!(o.mode&1)&&(Zs(),xl&&Ui())),v)}function rc(o,l){o.lanes|=l;var d=o.alternate;for(d!==null&&(d.lanes|=l),d=o,o=o.return;o!==null;)o.childLanes|=l,d=o.alternate,d!==null&&(d.childLanes|=l),d=o,o=o.return;return d.tag===3?d.stateNode:null}function Vn(o,l){var d=o.callbackNode;tx(o,l);var v=_l(o,o===en?vn:0);if(v===0)d!==null&&em(d),o.callbackNode=null,o.callbackPriority=0;else if(l=v&-v,o.callbackPriority!==l){if(d!=null&&em(d),l===1)o.tag===0?cx(gg.bind(null,o)):tm(gg.bind(null,o)),je?De(function(){yt===0&&Ui()}):Fh(Bh,Ui),d=null;else{switch($p(v)){case 1:d=Bh;break;case 4:d=sx;break;case 16:d=zh;break;case 536870912:d=ox;break;default:d=zh}d=Ag(d,mg.bind(null,o))}o.callbackPriority=l,o.callbackNode=d}}function mg(o,l){if(nc=-1,ic=0,yt&6)throw Error(a(327));var d=o.callbackNode;if(Qr()&&o.callbackNode!==d)return null;var v=_l(o,o===en?vn:0);if(v===0)return null;if(v&30||v&o.expiredLanes||l)l=sc(o,v);else{l=v;var S=yt;yt|=2;var A=yg();(en!==o||vn!==l)&&(Zs(),Jr(o,l));do try{Ix();break}catch(k){_g(o,k)}while(!0);Vh(),Kl.current=A,yt=S,tn!==null?l=0:(en=null,vn=0,l=sn)}if(l!==0){if(l===2&&(S=Uh(o),S!==0&&(v=S,l=If(o,S))),l===1)throw d=Qo,Jr(o,0),Ar(o,v),Vn(o,ln()),d;if(l===6)Ar(o,v);else{if(S=o.current.alternate,!(v&30)&&!Rx(S)&&(l=sc(o,v),l===2&&(A=Uh(o),A!==0&&(v=A,l=If(o,A))),l===1))throw d=Qo,Jr(o,0),Ar(o,v),Vn(o,ln()),d;switch(o.finishedWork=S,o.finishedLanes=v,l){case 0:case 1:throw Error(a(345));case 2:Kr(o,Hn);break;case 3:if(Ar(o,v),(v&130023424)===v&&(l=bf+500-ln(),10<l)){if(_l(o,0)!==0)break;if(S=o.suspendedLanes,(S&v)!==v){Nn(),o.pingedLanes|=o.suspendedLanes&S;break}o.timeoutHandle=Se(Kr.bind(null,o,Hn),l);break}Kr(o,Hn);break;case 4:if(Ar(o,v),(v&4194240)===v)break;for(l=o.eventTimes,S=-1;0<v;){var B=31-Dn(v);A=1<<B,B=l[B],B>S&&(S=B),v&=~A}if(v=S,v=ln()-v,v=(120>v?120:480>v?480:1080>v?1080:1920>v?1920:3e3>v?3e3:4320>v?4320:1960*Cx(v/1960))-v,10<v){o.timeoutHandle=Se(Kr.bind(null,o,Hn),v);break}Kr(o,Hn);break;case 5:Kr(o,Hn);break;default:throw Error(a(329))}}}return Vn(o,ln()),o.callbackNode===d?mg.bind(null,o):null}function If(o,l){var d=$o;return o.current.memoizedState.isDehydrated&&(Jr(o,l).flags|=256),o=sc(o,l),o!==2&&(l=Hn,Hn=d,l!==null&&Lf(l)),o}function Lf(o){Hn===null?Hn=o:Hn.push.apply(Hn,o)}function Rx(o){for(var l=o;;){if(l.flags&16384){var d=l.updateQueue;if(d!==null&&(d=d.stores,d!==null))for(var v=0;v<d.length;v++){var S=d[v],A=S.getSnapshot;S=S.value;try{if(!Di(A(),S))return!1}catch{return!1}}}if(d=l.child,l.subtreeFlags&16384&&d!==null)d.return=l,l=d;else{if(l===o)break;for(;l.sibling===null;){if(l.return===null||l.return===o)return!0;l=l.return}l.sibling.return=l.return,l=l.sibling}}return!0}function Ar(o,l){for(l&=~Tf,l&=~Ql,o.suspendedLanes|=l,o.pingedLanes&=~l,o=o.expirationTimes;0<l;){var d=31-Dn(l),v=1<<d;o[d]=-1,l&=~v}}function gg(o){if(yt&6)throw Error(a(327));Qr();var l=_l(o,0);if(!(l&1))return Vn(o,ln()),null;var d=sc(o,l);if(o.tag!==0&&d===2){var v=Uh(o);v!==0&&(l=v,d=If(o,v))}if(d===1)throw d=Qo,Jr(o,0),Ar(o,l),Vn(o,ln()),d;if(d===6)throw Error(a(345));return o.finishedWork=o.current.alternate,o.finishedLanes=l,Kr(o,Hn),Vn(o,ln()),null}function vg(o){wr!==null&&wr.tag===0&&!(yt&6)&&Qr();var l=yt;yt|=1;var d=Kt.transition,v=Pt;try{if(Kt.transition=null,Pt=1,o)return o()}finally{Pt=v,Kt.transition=d,yt=l,!(yt&6)&&Ui()}}function Df(){Qn=Ys.current,_t(Ys)}function Jr(o,l){o.finishedWork=null,o.finishedLanes=0;var d=o.timeoutHandle;if(d!==Qe&&(o.timeoutHandle=Qe,rt(d)),tn!==null)for(d=tn.return;d!==null;){var v=d;switch(jh(v),v.tag){case 1:v=v.type.childContextTypes,v!=null&&_r();break;case 3:Ws(),_t(ct),_t(At),nf();break;case 5:ef(v);break;case 4:Ws();break;case 13:_t(Wt);break;case 19:_t(Wt);break;case 10:Gh(v.type._context);break;case 22:case 23:Df()}d=d.return}if(en=o,tn=o=Tr(o.current,null),vn=Qn=l,sn=0,Qo=null,Tf=Ql=qs=0,Hn=$o=null,Ni!==null){for(l=0;l<Ni.length;l++)if(d=Ni[l],v=d.interleaved,v!==null){d.interleaved=null;var S=v.next,A=d.pending;if(A!==null){var B=A.next;A.next=S,v.next=B}d.pending=v}Ni=null}return o}function _g(o,l){do{var d=tn;try{if(Vh(),Il.current=Fl,Ll){for(var v=Yt.memoizedState;v!==null;){var S=v.queue;S!==null&&(S.pending=null),v=v.next}Ll=!1}if(Xs=0,cn=Mn=Yt=null,Go=!1,Wo=0,Af.current=null,d===null||d.return===null){sn=1,Qo=l,tn=null;break}e:{var A=o,B=d.return,k=d,re=l;if(l=vn,k.flags|=32768,re!==null&&typeof re=="object"&&typeof re.then=="function"){var _e=re,Ve=k,ht=Ve.tag;if(!(Ve.mode&1)&&(ht===0||ht===11||ht===15)){var $e=Ve.alternate;$e?(Ve.updateQueue=$e.updateQueue,Ve.memoizedState=$e.memoizedState,Ve.lanes=$e.lanes):(Ve.updateQueue=null,Ve.memoizedState=null)}var Bt=zm(B);if(Bt!==null){Bt.flags&=-257,km(Bt,B,k,A,l),Bt.mode&1&&Bm(A,_e,l),l=Bt,re=_e;var Ke=l.updateQueue;if(Ke===null){var An=new Set;An.add(re),l.updateQueue=An}else Ke.add(re);break e}else{if(!(l&1)){Bm(A,_e,l),Uf();break e}re=Error(a(426))}}else if(Vt&&k.mode&1){var di=zm(B);if(di!==null){!(di.flags&65536)&&(di.flags|=256),km(di,B,k,A,l),Qh(re);break e}}A=re,sn!==4&&(sn=2),$o===null?$o=[A]:$o.push(A),re=uf(re,k),k=B;do{switch(k.tag){case 3:k.flags|=65536,l&=-l,k.lanes|=l;var J=Om(k,re,l);rm(k,J);break e;case 1:A=re;var G=k.type,ee=k.stateNode;if(!(k.flags&128)&&(typeof G.getDerivedStateFromError=="function"||ee!==null&&typeof ee.componentDidCatch=="function"&&(Mr===null||!Mr.has(ee)))){k.flags|=65536,l&=-l,k.lanes|=l;var Re=Fm(k,A,l);rm(k,Re);break e}}k=k.return}while(k!==null)}Sg(d)}catch(Ze){l=Ze,tn===d&&d!==null&&(tn=d=d.return);continue}break}while(!0)}function yg(){var o=Kl.current;return Kl.current=Fl,o===null?Fl:o}function Uf(){(sn===0||sn===3||sn===2)&&(sn=4),en===null||!(qs&268435455)&&!(Ql&268435455)||Ar(en,vn)}function sc(o,l){var d=yt;yt|=2;var v=yg();en===o&&vn===l||Jr(o,l);do try{Px();break}catch(S){_g(o,S)}while(!0);if(Vh(),yt=d,Kl.current=v,tn!==null)throw Error(a(261));return en=null,vn=0,sn}function Px(){for(;tn!==null;)xg(tn)}function Ix(){for(;tn!==null&&!ix();)xg(tn)}function xg(o){var l=Eg(o.alternate,o,Qn);o.memoizedProps=o.pendingProps,l===null?Sg(o):tn=l,Af.current=null}function Sg(o){var l=o;do{var d=l.alternate;if(o=l.return,l.flags&32768){if(d=wx(d,l),d!==null){d.flags&=32767,tn=d;return}if(o!==null)o.flags|=32768,o.subtreeFlags=0,o.deletions=null;else{sn=6,tn=null;return}}else if(d=xx(d,l,Qn),d!==null){tn=d;return}if(l=l.sibling,l!==null){tn=l;return}tn=l=o}while(l!==null);sn===0&&(sn=5)}function Kr(o,l){var d=Pt,v=Kt.transition;try{Kt.transition=null,Pt=1,Lx(o,l,d)}finally{Kt.transition=v,Pt=d}return null}function Lx(o,l,d){do Qr();while(wr!==null);if(yt&6)throw Error(a(327));var v=o.finishedWork,S=o.finishedLanes;if(v===null)return null;if(o.finishedWork=null,o.finishedLanes=0,v===o.current)throw Error(a(177));o.callbackNode=null,o.callbackPriority=0;var A=v.lanes|v.childLanes;if(nx(o,A),o===en&&(tn=en=null,vn=0),!(v.subtreeFlags&2064)&&!(v.flags&2064)||ec||(ec=!0,Ag(zh,function(){return Qr(),null})),A=(v.flags&15990)!==0,v.subtreeFlags&15990||A){A=Kt.transition,Kt.transition=null;var B=Pt;Pt=1;var k=yt;yt|=4,Af.current=null,Ax(o,v),Tx(o,v),te(o.containerInfo),o.current=v,bx(v),rx(),yt=k,Pt=B,Kt.transition=A}else o.current=v;if(ec&&(ec=!1,wr=o,tc=S),A=o.pendingLanes,A===0&&(Mr=null),ax(v.stateNode),Vn(o,ln()),l!==null)for(d=o.onRecoverableError,v=0;v<l.length;v++)d(l[v]);if($l)throw $l=!1,o=Rf,Rf=null,o;return tc&1&&o.tag!==0&&Qr(),A=o.pendingLanes,A&1?o===Pf?ea++:(ea=0,Pf=o):ea=0,Ui(),null}function Qr(){if(wr!==null){var o=$p(tc),l=Kt.transition,d=Pt;try{if(Kt.transition=null,Pt=16>o?16:o,wr===null)var v=!1;else{if(o=wr,wr=null,tc=0,yt&6)throw Error(a(331));var S=yt;for(yt|=4,Ce=o.current;Ce!==null;){var A=Ce,B=A.child;if(Ce.flags&16){var k=A.deletions;if(k!==null){for(var re=0;re<k.length;re++){var _e=k[re];for(Ce=_e;Ce!==null;){var Ve=Ce;switch(Ve.tag){case 0:case 11:case 15:jr(8,Ve,A)}var ht=Ve.child;if(ht!==null)ht.return=Ve,Ce=ht;else for(;Ce!==null;){Ve=Ce;var $e=Ve.sibling,Bt=Ve.return;if(sg(Ve),Ve===_e){Ce=null;break}if($e!==null){$e.return=Bt,Ce=$e;break}Ce=Bt}}}var Ke=A.alternate;if(Ke!==null){var An=Ke.child;if(An!==null){Ke.child=null;do{var di=An.sibling;An.sibling=null,An=di}while(An!==null)}}Ce=A}}if(A.subtreeFlags&2064&&B!==null)B.return=A,Ce=B;else e:for(;Ce!==null;){if(A=Ce,A.flags&2048)switch(A.tag){case 0:case 11:case 15:jr(9,A,A.return)}var J=A.sibling;if(J!==null){J.return=A.return,Ce=J;break e}Ce=A.return}}var G=o.current;for(Ce=G;Ce!==null;){B=Ce;var ee=B.child;if(B.subtreeFlags&2064&&ee!==null)ee.return=B,Ce=ee;else e:for(B=G;Ce!==null;){if(k=Ce,k.flags&2048)try{switch(k.tag){case 0:case 11:case 15:Jo(9,k)}}catch(Ze){Gn(k,k.return,Ze)}if(k===B){Ce=null;break e}var Re=k.sibling;if(Re!==null){Re.return=k.return,Ce=Re;break e}Ce=k.return}}if(yt=S,Ui(),Li&&typeof Li.onPostCommitFiberRoot=="function")try{Li.onPostCommitFiberRoot(yl,o)}catch{}v=!0}return v}finally{Pt=d,Kt.transition=l}}return!1}function Mg(o,l,d){l=uf(d,l),l=Om(o,l,1),Sr(o,l),l=Nn(),o=rc(o,1),o!==null&&(Fo(o,1,l),Vn(o,l))}function Gn(o,l,d){if(o.tag===3)Mg(o,o,d);else for(;l!==null;){if(l.tag===3){Mg(l,o,d);break}else if(l.tag===1){var v=l.stateNode;if(typeof l.type.getDerivedStateFromError=="function"||typeof v.componentDidCatch=="function"&&(Mr===null||!Mr.has(v))){o=uf(d,o),o=Fm(l,o,1),Sr(l,o),o=Nn(),l=rc(l,1),l!==null&&(Fo(l,1,o),Vn(l,o));break}}l=l.return}}function Dx(o,l,d){var v=o.pingCache;v!==null&&v.delete(l),l=Nn(),o.pingedLanes|=o.suspendedLanes&d,en===o&&(vn&d)===d&&(sn===4||sn===3&&(vn&130023424)===vn&&500>ln()-bf?Jr(o,0):Tf|=d),Vn(o,l)}function wg(o,l){l===0&&(o.mode&1?(l=vl,vl<<=1,!(vl&130023424)&&(vl=4194304)):l=1);var d=Nn();o=rc(o,l),o!==null&&(Fo(o,l,d),Vn(o,d))}function Ux(o){var l=o.memoizedState,d=0;l!==null&&(d=l.retryLane),wg(o,d)}function Nx(o,l){var d=0;switch(o.tag){case 13:var v=o.stateNode,S=o.memoizedState;S!==null&&(d=S.retryLane);break;case 19:v=o.stateNode;break;default:throw Error(a(314))}v!==null&&v.delete(l),wg(o,d)}var Eg;Eg=function(o,l,d){if(o!==null)if(o.memoizedProps!==l.pendingProps||ct.current)Kn=!0;else{if(!(o.lanes&d)&&!(l.flags&128))return Kn=!1,Mx(o,l,d);Kn=!!(o.flags&131072)}else Kn=!1,Vt&&l.flags&1048576&&um(l,Cl,l.index);switch(l.lanes=0,l.tag){case 2:var v=l.type;o!==null&&(o.alternate=null,l.alternate=null,l.flags|=2),o=l.pendingProps;var S=Zn(l,At.current);Bs(l,d),S=sf(null,l,v,o,S,d);var A=of();return l.flags|=1,typeof S=="object"&&S!==null&&typeof S.render=="function"&&S.$$typeof===void 0?(l.tag=1,l.memoizedState=null,l.updateQueue=null,Ft(v)?(A=!0,yr(l)):A=!1,l.memoizedState=S.state!==null&&S.state!==void 0?S.state:null,Xh(l),S.updater=Tl,l.stateNode=S,S._reactInternals=l,qh(l,v,o,d),l=df(null,l,v,!0,A,d)):(l.tag=0,Vt&&A&&Zh(l),Un(null,l,S,d),l=l.child),l;case 16:v=l.elementType;e:{switch(o!==null&&(o.alternate=null,l.alternate=null,l.flags|=2),o=l.pendingProps,S=v._init,v=S(v._payload),l.type=v,S=l.tag=Fx(v),o=yi(v,o),S){case 0:l=ff(null,l,v,o,d);break e;case 1:l=Zm(null,l,v,o,d);break e;case 11:l=Gm(null,l,v,o,d);break e;case 14:l=Wm(null,l,v,yi(v.type,o),d);break e}throw Error(a(306,v,""))}return l;case 0:return v=l.type,S=l.pendingProps,S=l.elementType===v?S:yi(v,S),ff(o,l,v,S,d);case 1:return v=l.type,S=l.pendingProps,S=l.elementType===v?S:yi(v,S),Zm(o,l,v,S,d);case 3:e:{if(jm(l),o===null)throw Error(a(387));v=l.pendingProps,A=l.memoizedState,S=A.element,im(o,l),Al(l,v,null,d);var B=l.memoizedState;if(v=B.element,F&&A.isDehydrated)if(A={element:v,isDehydrated:!1,cache:B.cache,transitions:B.transitions},l.updateQueue.baseState=A,l.memoizedState=A,l.flags&256){S=Error(a(423)),l=Jm(o,l,v,d,S);break e}else if(v!==S){S=Error(a(424)),l=Jm(o,l,v,d,S);break e}else for(F&&(Jn=Os(l.stateNode.containerInfo),jn=l,Vt=!0,xi=null,Bo=!1),d=gm(l,null,v,d),l.child=d;d;)d.flags=d.flags&-3|4096,d=d.sibling;else{if(Hs(),v===S){l=ir(o,l,d);break e}Un(o,l,v,d)}l=l.child}return l;case 5:return vm(l),o===null&&Kh(l),v=l.type,S=l.pendingProps,A=o!==null?o.memoizedProps:null,B=S.children,pe(v,S)?B=null:A!==null&&pe(v,A)&&(l.flags|=32),qm(o,l),Un(o,l,B,d),l.child;case 6:return o===null&&Kh(l),null;case 13:return Km(o,l,d);case 4:return $h(l,l.stateNode.containerInfo),v=l.pendingProps,o===null?l.child=Vs(l,null,v,d):Un(o,l,v,d),l.child;case 11:return v=l.type,S=l.pendingProps,S=l.elementType===v?S:yi(v,S),Gm(o,l,v,S,d);case 7:return Un(o,l,l.pendingProps,d),l.child;case 8:return Un(o,l,l.pendingProps.children,d),l.child;case 12:return Un(o,l,l.pendingProps.children,d),l.child;case 10:e:{if(v=l.type._context,S=l.pendingProps,A=l.memoizedProps,B=S.value,nm(l,v,B),A!==null)if(Di(A.value,B)){if(A.children===S.children&&!ct.current){l=ir(o,l,d);break e}}else for(A=l.child,A!==null&&(A.return=l);A!==null;){var k=A.dependencies;if(k!==null){B=A.child;for(var re=k.firstContext;re!==null;){if(re.context===v){if(A.tag===1){re=$i(-1,d&-d),re.tag=2;var _e=A.updateQueue;if(_e!==null){_e=_e.shared;var Ve=_e.pending;Ve===null?re.next=re:(re.next=Ve.next,Ve.next=re),_e.pending=re}}A.lanes|=d,re=A.alternate,re!==null&&(re.lanes|=d),Wh(A.return,d,l),k.lanes|=d;break}re=re.next}}else if(A.tag===10)B=A.type===l.type?null:A.child;else if(A.tag===18){if(B=A.return,B===null)throw Error(a(341));B.lanes|=d,k=B.alternate,k!==null&&(k.lanes|=d),Wh(B,d,l),B=A.sibling}else B=A.child;if(B!==null)B.return=A;else for(B=A;B!==null;){if(B===l){B=null;break}if(A=B.sibling,A!==null){A.return=B.return,B=A;break}B=B.return}A=B}Un(o,l,S.children,d),l=l.child}return l;case 9:return S=l.type,v=l.pendingProps.children,Bs(l,d),S=oi(S),v=v(S),l.flags|=1,Un(o,l,v,d),l.child;case 14:return v=l.type,S=yi(v,l.pendingProps),S=yi(v.type,S),Wm(o,l,v,S,d);case 15:return Xm(o,l,l.type,l.pendingProps,d);case 17:return v=l.type,S=l.pendingProps,S=l.elementType===v?S:yi(v,S),o!==null&&(o.alternate=null,l.alternate=null,l.flags|=2),l.tag=1,Ft(v)?(o=!0,yr(l)):o=!1,Bs(l,d),lm(l,v,S),qh(l,v,S,d),df(null,l,v,!0,o,d);case 19:return tg(o,l,d);case 22:return Ym(o,l,d)}throw Error(a(156,l.tag))};function Ag(o,l){return Fh(o,l)}function Ox(o,l,d,v){this.tag=o,this.key=d,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=l,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=v,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function fi(o,l,d,v){return new Ox(o,l,d,v)}function Nf(o){return o=o.prototype,!(!o||!o.isReactComponent)}function Fx(o){if(typeof o=="function")return Nf(o)?1:0;if(o!=null){if(o=o.$$typeof,o===M)return 11;if(o===E)return 14}return 2}function Tr(o,l){var d=o.alternate;return d===null?(d=fi(o.tag,l,o.key,o.mode),d.elementType=o.elementType,d.type=o.type,d.stateNode=o.stateNode,d.alternate=o,o.alternate=d):(d.pendingProps=l,d.type=o.type,d.flags=0,d.subtreeFlags=0,d.deletions=null),d.flags=o.flags&14680064,d.childLanes=o.childLanes,d.lanes=o.lanes,d.child=o.child,d.memoizedProps=o.memoizedProps,d.memoizedState=o.memoizedState,d.updateQueue=o.updateQueue,l=o.dependencies,d.dependencies=l===null?null:{lanes:l.lanes,firstContext:l.firstContext},d.sibling=o.sibling,d.index=o.index,d.ref=o.ref,d}function oc(o,l,d,v,S,A){var B=2;if(v=o,typeof o=="function")Nf(o)&&(B=1);else if(typeof o=="string")B=5;else e:switch(o){case f:return $r(d.children,S,A,l);case p:B=8,S|=8;break;case m:return o=fi(12,d,l,S|2),o.elementType=m,o.lanes=A,o;case x:return o=fi(13,d,l,S),o.elementType=x,o.lanes=A,o;case _:return o=fi(19,d,l,S),o.elementType=_,o.lanes=A,o;case T:return ac(d,S,A,l);default:if(typeof o=="object"&&o!==null)switch(o.$$typeof){case g:B=10;break e;case y:B=9;break e;case M:B=11;break e;case E:B=14;break e;case w:B=16,v=null;break e}throw Error(a(130,o==null?o:typeof o,""))}return l=fi(B,d,l,S),l.elementType=o,l.type=v,l.lanes=A,l}function $r(o,l,d,v){return o=fi(7,o,v,l),o.lanes=d,o}function ac(o,l,d,v){return o=fi(22,o,v,l),o.elementType=T,o.lanes=d,o.stateNode={},o}function Of(o,l,d){return o=fi(6,o,null,l),o.lanes=d,o}function Ff(o,l,d){return l=fi(4,o.children!==null?o.children:[],o.key,l),l.lanes=d,l.stateNode={containerInfo:o.containerInfo,pendingChildren:null,implementation:o.implementation},l}function Bx(o,l,d,v,S){this.tag=l,this.containerInfo=o,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=Qe,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Nh(0),this.expirationTimes=Nh(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Nh(0),this.identifierPrefix=v,this.onRecoverableError=S,F&&(this.mutableSourceEagerHydrationData=null)}function Tg(o,l,d,v,S,A,B,k,re){return o=new Bx(o,l,d,k,re),l===1?(l=1,A===!0&&(l|=8)):l=0,A=fi(3,null,null,l),o.current=A,A.stateNode=o,A.memoizedState={element:v,isDehydrated:d,cache:null,transitions:null},Xh(A),o}function bg(o){if(!o)return Ge;o=o._reactInternals;e:{if(W(o)!==o||o.tag!==1)throw Error(a(170));var l=o;do{switch(l.tag){case 3:l=l.stateNode.context;break e;case 1:if(Ft(l.type)){l=l.stateNode.__reactInternalMemoizedMergedChildContext;break e}}l=l.return}while(l!==null);throw Error(a(171))}if(o.tag===1){var d=o.type;if(Ft(d))return _i(o,d,l)}return l}function Cg(o){var l=o._reactInternals;if(l===void 0)throw typeof o.render=="function"?Error(a(188)):(o=Object.keys(o).join(","),Error(a(268,o)));return o=X(l),o===null?null:o.stateNode}function Rg(o,l){if(o=o.memoizedState,o!==null&&o.dehydrated!==null){var d=o.retryLane;o.retryLane=d!==0&&d<l?d:l}}function Bf(o,l){Rg(o,l),(o=o.alternate)&&Rg(o,l)}function zx(o){return o=X(o),o===null?null:o.stateNode}function kx(){return null}return t.attemptContinuousHydration=function(o){if(o.tag===13){var l=Nn();hi(o,134217728,l),Bf(o,134217728)}},t.attemptHydrationAtCurrentPriority=function(o){if(o.tag===13){var l=Nn(),d=Er(o);hi(o,d,l),Bf(o,d)}},t.attemptSynchronousHydration=function(o){switch(o.tag){case 3:var l=o.stateNode;if(l.current.memoizedState.isDehydrated){var d=Oo(l.pendingLanes);d!==0&&(Oh(l,d|1),Vn(l,ln()),!(yt&6)&&(Zs(),Ui()))}break;case 13:var v=Nn();vg(function(){return hi(o,1,v)}),Bf(o,1)}},t.batchedUpdates=function(o,l){var d=yt;yt|=1;try{return o(l)}finally{yt=d,yt===0&&(Zs(),xl&&Ui())}},t.createComponentSelector=function(o){return{$$typeof:Yl,value:o}},t.createContainer=function(o,l,d,v,S,A,B){return Tg(o,l,!1,null,d,v,S,A,B)},t.createHasPseudoClassSelector=function(o){return{$$typeof:ql,value:o}},t.createHydrationContainer=function(o,l,d,v,S,A,B,k,re){return o=Tg(d,v,!0,o,S,A,B,k,re),o.context=bg(null),d=o.current,v=Nn(),S=Er(d),A=$i(v,S),A.callback=l??null,Sr(d,A),o.current.lanes=S,Fo(o,S,v),Vn(o,v),o},t.createPortal=function(o,l,d){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:h,key:v==null?null:""+v,children:o,containerInfo:l,implementation:d}},t.createRoleSelector=function(o){return{$$typeof:Zl,value:o}},t.createTestNameSelector=function(o){return{$$typeof:jl,value:o}},t.createTextSelector=function(o){return{$$typeof:Jl,value:o}},t.deferredUpdates=function(o){var l=Pt,d=Kt.transition;try{return Kt.transition=null,Pt=16,o()}finally{Pt=l,Kt.transition=d}},t.discreteUpdates=function(o,l,d,v,S){var A=Pt,B=Kt.transition;try{return Kt.transition=null,Pt=1,o(l,d,v,S)}finally{Pt=A,Kt.transition=B,yt===0&&Zs()}},t.findAllNodes=Ef,t.findBoundingRects=function(o,l){if(!U)throw Error(a(363));l=Ef(o,l),o=[];for(var d=0;d<l.length;d++)o.push(j(l[d]));for(l=o.length-1;0<l;l--){d=o[l];for(var v=d.x,S=v+d.width,A=d.y,B=A+d.height,k=l-1;0<=k;k--)if(l!==k){var re=o[k],_e=re.x,Ve=_e+re.width,ht=re.y,$e=ht+re.height;if(v>=_e&&A>=ht&&S<=Ve&&B<=$e){o.splice(l,1);break}else if(v!==_e||d.width!==re.width||$e<A||ht>B){if(!(A!==ht||d.height!==re.height||Ve<v||_e>S)){_e>v&&(re.width+=_e-v,re.x=v),Ve<S&&(re.width=S-_e),o.splice(l,1);break}}else{ht>A&&(re.height+=ht-A,re.y=A),$e<B&&(re.height=B-ht),o.splice(l,1);break}}}return o},t.findHostInstance=Cg,t.findHostInstanceWithNoPortals=function(o){return o=C(o),o=o!==null?K(o):null,o===null?null:o.stateNode},t.findHostInstanceWithWarning=function(o){return Cg(o)},t.flushControlled=function(o){var l=yt;yt|=1;var d=Kt.transition,v=Pt;try{Kt.transition=null,Pt=1,o()}finally{Pt=v,Kt.transition=d,yt=l,yt===0&&(Zs(),Ui())}},t.flushPassiveEffects=Qr,t.flushSync=vg,t.focusWithin=function(o,l){if(!U)throw Error(a(363));for(o=Sf(o),l=pg(o,l),l=Array.from(l),o=0;o<l.length;){var d=l[o++];if(!ue(d)){if(d.tag===5&&Ye(d.stateNode))return!0;for(d=d.child;d!==null;)l.push(d),d=d.sibling}}return!1},t.getCurrentUpdatePriority=function(){return Pt},t.getFindAllNodesFailureDescription=function(o,l){if(!U)throw Error(a(363));var d=0,v=[];o=[Sf(o),0];for(var S=0;S<o.length;){var A=o[S++],B=o[S++],k=l[B];if((A.tag!==5||!ue(A))&&(Mf(A,k)&&(v.push(wf(k)),B++,B>d&&(d=B)),B<l.length))for(A=A.child;A!==null;)o.push(A,B),A=A.sibling}if(d<l.length){for(o=[];d<l.length;d++)o.push(wf(l[d]));return`findAllNodes was able to match part of the selector:
  `+(v.join(" > ")+`

No matching component was found for:
  `)+o.join(" > ")}return null},t.getPublicRootInstance=function(o){if(o=o.current,!o.child)return null;switch(o.child.tag){case 5:return Z(o.child.stateNode);default:return o.child.stateNode}},t.injectIntoDevTools=function(o){if(o={bundleType:o.bundleType,version:o.version,rendererPackageName:o.rendererPackageName,rendererConfig:o.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:c.ReactCurrentDispatcher,findHostInstanceByFiber:zx,findFiberByHostInstance:o.findFiberByHostInstance||kx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.0.0-fc46dba67-20220329"},typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u")o=!1;else{var l=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(l.isDisabled||!l.supportsFiber)o=!0;else{try{yl=l.inject(o),Li=l}catch{}o=!!l.checkDCE}}return o},t.isAlreadyRendering=function(){return!1},t.observeVisibleRects=function(o,l,d,v){if(!U)throw Error(a(363));o=Ef(o,l);var S=Te(o,d,v).disconnect;return{disconnect:function(){S()}}},t.registerMutableSourceForHydration=function(o,l){var d=l._getVersion;d=d(l._source),o.mutableSourceEagerHydrationData==null?o.mutableSourceEagerHydrationData=[l,d]:o.mutableSourceEagerHydrationData.push(l,d)},t.runWithPriority=function(o,l){var d=Pt;try{return Pt=o,l()}finally{Pt=d}},t.shouldError=function(){return null},t.shouldSuspend=function(){return!1},t.updateContainer=function(o,l,d,v){var S=l.current,A=Nn(),B=Er(S);return d=bg(d),l.context===null?l.context=d:l.pendingContext=d,l=$i(A,B),l.payload={element:o},v=v===void 0?null:v,v!==null&&(l.callback=v),Sr(S,l),o=hi(S,B,A),o!==null&&El(o,S,B),B},t};Cy.exports=tC;var nC=Cy.exports;const iC=Vx(nC),jp={},Iy=r=>void Object.assign(jp,r);function rC(r,e){function t(f,{args:p=[],attach:m,...g},y){let M=`${f[0].toUpperCase()}${f.slice(1)}`,x;if(f==="primitive"){if(g.object===void 0)throw new Error("R3F: Primitives without 'object' are invalid!");const _=g.object;x=go(_,{type:f,root:y,attach:m,primitive:!0})}else{const _=jp[M];if(!_)throw new Error(`R3F: ${M} is not part of the THREE namespace! Did you forget to extend? See: https://docs.pmnd.rs/react-three-fiber/api/objects#using-3rd-party-objects-declaratively`);if(!Array.isArray(p))throw new Error("R3F: The args prop must be an array!");x=go(new _(...p),{type:f,root:y,attach:m,memoizedProps:{args:p}})}return x.__r3f.attach===void 0&&(x.isBufferGeometry?x.__r3f.attach="geometry":x.isMaterial&&(x.__r3f.attach="material")),M!=="inject"&&Pd(x,g),x}function n(f,p){let m=!1;if(p){var g,y;(g=p.__r3f)!=null&&g.attach?Rd(f,p,p.__r3f.attach):p.isObject3D&&f.isObject3D&&(f.add(p),m=!0),m||(y=f.__r3f)==null||y.objects.push(p),p.__r3f||go(p,{}),p.__r3f.parent=f,ip(p),vo(p)}}function i(f,p,m){let g=!1;if(p){var y,M;if((y=p.__r3f)!=null&&y.attach)Rd(f,p,p.__r3f.attach);else if(p.isObject3D&&f.isObject3D){p.parent=f,p.dispatchEvent({type:"added"}),f.dispatchEvent({type:"childadded",child:p});const x=f.children.filter(E=>E!==p),_=x.indexOf(m);f.children=[...x.slice(0,_),p,...x.slice(_)],g=!0}g||(M=f.__r3f)==null||M.objects.push(p),p.__r3f||go(p,{}),p.__r3f.parent=f,ip(p),vo(p)}}function s(f,p,m=!1){f&&[...f].forEach(g=>a(p,g,m))}function a(f,p,m){if(p){var g,y,M;if(p.__r3f&&(p.__r3f.parent=null),(g=f.__r3f)!=null&&g.objects&&(f.__r3f.objects=f.__r3f.objects.filter(T=>T!==p)),(y=p.__r3f)!=null&&y.attach)fv(f,p,p.__r3f.attach);else if(p.isObject3D&&f.isObject3D){var x;f.remove(p),(x=p.__r3f)!=null&&x.root&&hC(au(p),p)}const E=(M=p.__r3f)==null?void 0:M.primitive,w=!E&&(m===void 0?p.dispose!==null:m);if(!E){var _;s((_=p.__r3f)==null?void 0:_.objects,p,w),s(p.children,p,w)}if(delete p.__r3f,w&&p.dispose&&p.type!=="Scene"){const T=()=>{try{p.dispose()}catch{}};typeof IS_REACT_ACT_ENVIRONMENT>"u"?tp.unstable_scheduleCallback(tp.unstable_IdlePriority,T):T()}vo(f)}}function c(f,p,m,g){var y;const M=(y=f.__r3f)==null?void 0:y.parent;if(!M)return;const x=t(p,m,f.__r3f.root);if(f.children){for(const _ of f.children)_.__r3f&&n(x,_);f.children=f.children.filter(_=>!_.__r3f)}f.__r3f.objects.forEach(_=>n(x,_)),f.__r3f.objects=[],f.__r3f.autoRemovedBeforeAppend||a(M,f),x.parent&&(x.__r3f.autoRemovedBeforeAppend=!0),n(M,x),x.raycast&&x.__r3f.eventCount&&au(x).getState().internal.interaction.push(x),[g,g.alternate].forEach(_=>{_!==null&&(_.stateNode=x,_.ref&&(typeof _.ref=="function"?_.ref(x):_.ref.current=x))})}const u=()=>{};return{reconciler:iC({createInstance:t,removeChild:a,appendChild:n,appendInitialChild:n,insertBefore:i,supportsMutation:!0,isPrimaryRenderer:!1,supportsPersistence:!1,supportsHydration:!1,noTimeout:-1,appendChildToContainer:(f,p)=>{if(!p)return;const m=f.getState().scene;m.__r3f&&(m.__r3f.root=f,n(m,p))},removeChildFromContainer:(f,p)=>{p&&a(f.getState().scene,p)},insertInContainerBefore:(f,p,m)=>{if(!p||!m)return;const g=f.getState().scene;g.__r3f&&i(g,p,m)},getRootHostContext:()=>null,getChildHostContext:f=>f,finalizeInitialChildren(f){var p;return!!((p=f==null?void 0:f.__r3f)!=null?p:{}).handlers},prepareUpdate(f,p,m,g){var y;if(((y=f==null?void 0:f.__r3f)!=null?y:{}).primitive&&g.object&&g.object!==f)return[!0];{const{args:x=[],children:_,...E}=g,{args:w=[],children:T,...O}=m;if(!Array.isArray(x))throw new Error("R3F: the args prop must be an array!");if(x.some((I,N)=>I!==w[N]))return[!0];const P=By(f,E,O,!0);return P.changes.length?[!1,P]:null}},commitUpdate(f,[p,m],g,y,M,x){p?c(f,g,M,x):Pd(f,m)},commitMount(f,p,m,g){var y;const M=(y=f.__r3f)!=null?y:{};f.raycast&&M.handlers&&M.eventCount&&au(f).getState().internal.interaction.push(f)},getPublicInstance:f=>f,prepareForCommit:()=>null,preparePortalMount:f=>go(f.getState().scene),resetAfterCommit:()=>{},shouldSetTextContent:()=>!1,clearContainer:()=>!1,hideInstance(f){var p;const{attach:m,parent:g}=(p=f.__r3f)!=null?p:{};m&&g&&fv(g,f,m),f.isObject3D&&(f.visible=!1),vo(f)},unhideInstance(f,p){var m;const{attach:g,parent:y}=(m=f.__r3f)!=null?m:{};g&&y&&Rd(y,f,g),(f.isObject3D&&p.visible==null||p.visible)&&(f.visible=!0),vo(f)},createTextInstance:u,hideTextInstance:u,unhideTextInstance:u,getCurrentEventPriority:()=>e?e():wo.DefaultEventPriority,beforeActiveInstanceBlur:()=>{},afterActiveInstanceBlur:()=>{},detachDeletedInstance:()=>{},now:typeof performance<"u"&&kt.fun(performance.now)?performance.now:kt.fun(Date.now)?Date.now:()=>0,scheduleTimeout:kt.fun(setTimeout)?setTimeout:void 0,cancelTimeout:kt.fun(clearTimeout)?clearTimeout:void 0}),applyProps:Pd}}var lv,cv;const Cd=r=>"colorSpace"in r||"outputColorSpace"in r,Ly=()=>{var r;return(r=jp.ColorManagement)!=null?r:null},Dy=r=>r&&r.isOrthographicCamera,sC=r=>r&&r.hasOwnProperty("current"),ll=typeof window<"u"&&((lv=window.document)!=null&&lv.createElement||((cv=window.navigator)==null?void 0:cv.product)==="ReactNative")?ye.useLayoutEffect:ye.useEffect;function Uy(r){const e=ye.useRef(r);return ll(()=>void(e.current=r),[r]),e}function oC({set:r}){return ll(()=>(r(new Promise(()=>null)),()=>r(!1)),[r]),null}class Ny extends ye.Component{constructor(...e){super(...e),this.state={error:!1}}componentDidCatch(e){this.props.set(e)}render(){return this.state.error?null:this.props.children}}Ny.getDerivedStateFromError=()=>({error:!0});const Oy="__default",uv=new Map,aC=r=>r&&!!r.memoized&&!!r.changes;function Fy(r){var e;const t=typeof window<"u"?(e=window.devicePixelRatio)!=null?e:2:1;return Array.isArray(r)?Math.min(Math.max(r[0],t),r[1]):r}const pa=r=>{var e;return(e=r.__r3f)==null?void 0:e.root.getState()};function au(r){let e=r.__r3f.root;for(;e.getState().previousRoot;)e=e.getState().previousRoot;return e}const kt={obj:r=>r===Object(r)&&!kt.arr(r)&&typeof r!="function",fun:r=>typeof r=="function",str:r=>typeof r=="string",num:r=>typeof r=="number",boo:r=>typeof r=="boolean",und:r=>r===void 0,arr:r=>Array.isArray(r),equ(r,e,{arrays:t="shallow",objects:n="reference",strict:i=!0}={}){if(typeof r!=typeof e||!!r!=!!e)return!1;if(kt.str(r)||kt.num(r)||kt.boo(r))return r===e;const s=kt.obj(r);if(s&&n==="reference")return r===e;const a=kt.arr(r);if(a&&t==="reference")return r===e;if((a||s)&&r===e)return!0;let c;for(c in r)if(!(c in e))return!1;if(s&&t==="shallow"&&n==="shallow"){for(c in i?e:r)if(!kt.equ(r[c],e[c],{strict:i,objects:"reference"}))return!1}else for(c in i?e:r)if(r[c]!==e[c])return!1;if(kt.und(c)){if(a&&r.length===0&&e.length===0||s&&Object.keys(r).length===0&&Object.keys(e).length===0)return!0;if(r!==e)return!1}return!0}};function lC(r){r.dispose&&r.type!=="Scene"&&r.dispose();for(const e in r)e.dispose==null||e.dispose(),delete r[e]}function go(r,e){const t=r;return t.__r3f={type:"",root:null,previousAttach:null,memoizedProps:{},eventCount:0,handlers:{},objects:[],parent:null,...e},r}function np(r,e){let t=r;if(e.includes("-")){const n=e.split("-"),i=n.pop();return t=n.reduce((s,a)=>s[a],r),{target:t,key:i}}else return{target:t,key:e}}const hv=/-\d+$/;function Rd(r,e,t){if(kt.str(t)){if(hv.test(t)){const s=t.replace(hv,""),{target:a,key:c}=np(r,s);Array.isArray(a[c])||(a[c]=[])}const{target:n,key:i}=np(r,t);e.__r3f.previousAttach=n[i],n[i]=e}else e.__r3f.previousAttach=t(r,e)}function fv(r,e,t){var n,i;if(kt.str(t)){const{target:s,key:a}=np(r,t),c=e.__r3f.previousAttach;c===void 0?delete s[a]:s[a]=c}else(n=e.__r3f)==null||n.previousAttach==null||n.previousAttach(r,e);(i=e.__r3f)==null||delete i.previousAttach}function By(r,{children:e,key:t,ref:n,...i},{children:s,key:a,ref:c,...u}={},h=!1){const f=r.__r3f,p=Object.entries(i),m=[];if(h){const y=Object.keys(u);for(let M=0;M<y.length;M++)i.hasOwnProperty(y[M])||p.unshift([y[M],Oy+"remove"])}p.forEach(([y,M])=>{var x;if((x=r.__r3f)!=null&&x.primitive&&y==="object"||kt.equ(M,u[y]))return;if(/^on(Pointer|Click|DoubleClick|ContextMenu|Wheel)/.test(y))return m.push([y,M,!0,[]]);let _=[];y.includes("-")&&(_=y.split("-")),m.push([y,M,!1,_]);for(const E in i){const w=i[E];E.startsWith(`${y}-`)&&m.push([E,w,!1,E.split("-")])}});const g={...i};return f!=null&&f.memoizedProps&&f!=null&&f.memoizedProps.args&&(g.args=f.memoizedProps.args),f!=null&&f.memoizedProps&&f!=null&&f.memoizedProps.attach&&(g.attach=f.memoizedProps.attach),{memoized:g,changes:m}}function Pd(r,e){var t;const n=r.__r3f,i=n==null?void 0:n.root,s=i==null||i.getState==null?void 0:i.getState(),{memoized:a,changes:c}=aC(e)?e:By(r,e),u=n==null?void 0:n.eventCount;r.__r3f&&(r.__r3f.memoizedProps=a);for(let m=0;m<c.length;m++){let[g,y,M,x]=c[m];if(Cd(r)){const T="srgb",O="srgb-linear";g==="encoding"?(g="colorSpace",y=y===3001?T:O):g==="outputEncoding"&&(g="outputColorSpace",y=y===3001?T:O)}let _=r,E=_[g];if(x.length&&(E=x.reduce((w,T)=>w[T],r),!(E&&E.set))){const[w,...T]=x.reverse();_=T.reverse().reduce((O,P)=>O[P],r),g=w}if(y===Oy+"remove")if(_.constructor){let w=uv.get(_.constructor);w||(w=new _.constructor,uv.set(_.constructor,w)),y=w[g]}else y=0;if(M&&n)y?n.handlers[g]=y:delete n.handlers[g],n.eventCount=Object.keys(n.handlers).length;else if(E&&E.set&&(E.copy||E instanceof ws)){if(Array.isArray(y))E.fromArray?E.fromArray(y):E.set(...y);else if(E.copy&&y&&y.constructor&&E.constructor===y.constructor)E.copy(y);else if(y!==void 0){var h;const w=(h=E)==null?void 0:h.isColor;!w&&E.setScalar?E.setScalar(y):E instanceof ws&&y instanceof ws?E.mask=y.mask:E.set(y),!Ly()&&s&&!s.linear&&w&&E.convertSRGBToLinear()}}else{var f;if(_[g]=y,(f=_[g])!=null&&f.isTexture&&_[g].format===Rn&&_[g].type===Ci&&s){const w=_[g];Cd(w)&&Cd(s.gl)?w.colorSpace=s.gl.outputColorSpace:w.encoding=s.gl.outputEncoding}}vo(r)}if(n&&n.parent&&r.raycast&&u!==n.eventCount){const m=au(r).getState().internal,g=m.interaction.indexOf(r);g>-1&&m.interaction.splice(g,1),n.eventCount&&m.interaction.push(r)}return!(c.length===1&&c[0][0]==="onUpdate")&&c.length&&(t=r.__r3f)!=null&&t.parent&&ip(r),r}function vo(r){var e,t;const n=(e=r.__r3f)==null||(t=e.root)==null||t.getState==null?void 0:t.getState();n&&n.internal.frames===0&&n.invalidate()}function ip(r){r.onUpdate==null||r.onUpdate(r)}function cC(r,e){r.manual||(Dy(r)?(r.left=e.width/-2,r.right=e.width/2,r.top=e.height/2,r.bottom=e.height/-2):r.aspect=e.width/e.height,r.updateProjectionMatrix(),r.updateMatrixWorld())}function $c(r){return(r.eventObject||r.object).uuid+"/"+r.index+r.instanceId}function uC(){var r;const e=typeof self<"u"&&self||typeof window<"u"&&window;if(!e)return wo.DefaultEventPriority;switch((r=e.event)==null?void 0:r.type){case"click":case"contextmenu":case"dblclick":case"pointercancel":case"pointerdown":case"pointerup":return wo.DiscreteEventPriority;case"pointermove":case"pointerout":case"pointerover":case"pointerenter":case"pointerleave":case"wheel":return wo.ContinuousEventPriority;default:return wo.DefaultEventPriority}}function zy(r,e,t,n){const i=t.get(e);i&&(t.delete(e),t.size===0&&(r.delete(n),i.target.releasePointerCapture(n)))}function hC(r,e){const{internal:t}=r.getState();t.interaction=t.interaction.filter(n=>n!==e),t.initialHits=t.initialHits.filter(n=>n!==e),t.hovered.forEach((n,i)=>{(n.eventObject===e||n.object===e)&&t.hovered.delete(i)}),t.capturedMap.forEach((n,i)=>{zy(t.capturedMap,e,n,i)})}function fC(r){function e(u){const{internal:h}=r.getState(),f=u.offsetX-h.initialClick[0],p=u.offsetY-h.initialClick[1];return Math.round(Math.sqrt(f*f+p*p))}function t(u){return u.filter(h=>["Move","Over","Enter","Out","Leave"].some(f=>{var p;return(p=h.__r3f)==null?void 0:p.handlers["onPointer"+f]}))}function n(u,h){const f=r.getState(),p=new Set,m=[],g=h?h(f.internal.interaction):f.internal.interaction;for(let _=0;_<g.length;_++){const E=pa(g[_]);E&&(E.raycaster.camera=void 0)}f.previousRoot||f.events.compute==null||f.events.compute(u,f);function y(_){const E=pa(_);if(!E||!E.events.enabled||E.raycaster.camera===null)return[];if(E.raycaster.camera===void 0){var w;E.events.compute==null||E.events.compute(u,E,(w=E.previousRoot)==null?void 0:w.getState()),E.raycaster.camera===void 0&&(E.raycaster.camera=null)}return E.raycaster.camera?E.raycaster.intersectObject(_,!0):[]}let M=g.flatMap(y).sort((_,E)=>{const w=pa(_.object),T=pa(E.object);return!w||!T?_.distance-E.distance:T.events.priority-w.events.priority||_.distance-E.distance}).filter(_=>{const E=$c(_);return p.has(E)?!1:(p.add(E),!0)});f.events.filter&&(M=f.events.filter(M,f));for(const _ of M){let E=_.object;for(;E;){var x;(x=E.__r3f)!=null&&x.eventCount&&m.push({..._,eventObject:E}),E=E.parent}}if("pointerId"in u&&f.internal.capturedMap.has(u.pointerId))for(let _ of f.internal.capturedMap.get(u.pointerId).values())p.has($c(_.intersection))||m.push(_.intersection);return m}function i(u,h,f,p){const m=r.getState();if(u.length){const g={stopped:!1};for(const y of u){const M=pa(y.object)||m,{raycaster:x,pointer:_,camera:E,internal:w}=M,T=new D(_.x,_.y,0).unproject(E),O=b=>{var C,X;return(C=(X=w.capturedMap.get(b))==null?void 0:X.has(y.eventObject))!=null?C:!1},P=b=>{const C={intersection:y,target:h.target};w.capturedMap.has(b)?w.capturedMap.get(b).set(y.eventObject,C):w.capturedMap.set(b,new Map([[y.eventObject,C]])),h.target.setPointerCapture(b)},I=b=>{const C=w.capturedMap.get(b);C&&zy(w.capturedMap,y.eventObject,C,b)};let N={};for(let b in h){let C=h[b];typeof C!="function"&&(N[b]=C)}let W={...y,...N,pointer:_,intersections:u,stopped:g.stopped,delta:f,unprojectedPoint:T,ray:x.ray,camera:E,stopPropagation(){const b="pointerId"in h&&w.capturedMap.get(h.pointerId);if((!b||b.has(y.eventObject))&&(W.stopped=g.stopped=!0,w.hovered.size&&Array.from(w.hovered.values()).find(C=>C.eventObject===y.eventObject))){const C=u.slice(0,u.indexOf(y));s([...C,y])}},target:{hasPointerCapture:O,setPointerCapture:P,releasePointerCapture:I},currentTarget:{hasPointerCapture:O,setPointerCapture:P,releasePointerCapture:I},nativeEvent:h};if(p(W),g.stopped===!0)break}}return u}function s(u){const{internal:h}=r.getState();for(const f of h.hovered.values())if(!u.length||!u.find(p=>p.object===f.object&&p.index===f.index&&p.instanceId===f.instanceId)){const m=f.eventObject.__r3f,g=m==null?void 0:m.handlers;if(h.hovered.delete($c(f)),m!=null&&m.eventCount){const y={...f,intersections:u};g.onPointerOut==null||g.onPointerOut(y),g.onPointerLeave==null||g.onPointerLeave(y)}}}function a(u,h){for(let f=0;f<h.length;f++){const p=h[f].__r3f;p==null||p.handlers.onPointerMissed==null||p.handlers.onPointerMissed(u)}}function c(u){switch(u){case"onPointerLeave":case"onPointerCancel":return()=>s([]);case"onLostPointerCapture":return h=>{const{internal:f}=r.getState();"pointerId"in h&&f.capturedMap.has(h.pointerId)&&requestAnimationFrame(()=>{f.capturedMap.has(h.pointerId)&&(f.capturedMap.delete(h.pointerId),s([]))})}}return function(f){const{onPointerMissed:p,internal:m}=r.getState();m.lastEvent.current=f;const g=u==="onPointerMove",y=u==="onClick"||u==="onContextMenu"||u==="onDoubleClick",x=n(f,g?t:void 0),_=y?e(f):0;u==="onPointerDown"&&(m.initialClick=[f.offsetX,f.offsetY],m.initialHits=x.map(w=>w.eventObject)),y&&!x.length&&_<=2&&(a(f,m.interaction),p&&p(f)),g&&s(x);function E(w){const T=w.eventObject,O=T.__r3f,P=O==null?void 0:O.handlers;if(O!=null&&O.eventCount)if(g){if(P.onPointerOver||P.onPointerEnter||P.onPointerOut||P.onPointerLeave){const I=$c(w),N=m.hovered.get(I);N?N.stopped&&w.stopPropagation():(m.hovered.set(I,w),P.onPointerOver==null||P.onPointerOver(w),P.onPointerEnter==null||P.onPointerEnter(w))}P.onPointerMove==null||P.onPointerMove(w)}else{const I=P[u];I?(!y||m.initialHits.includes(T))&&(a(f,m.interaction.filter(N=>!m.initialHits.includes(N))),I(w)):y&&m.initialHits.includes(T)&&a(f,m.interaction.filter(N=>!m.initialHits.includes(N)))}}i(x,f,_,E)}}return{handlePointer:c}}const ky=r=>!!(r!=null&&r.render),Hy=ye.createContext(null),dC=(r,e)=>{const t=eC((c,u)=>{const h=new D,f=new D,p=new D;function m(_=u().camera,E=f,w=u().size){const{width:T,height:O,top:P,left:I}=w,N=T/O;E.isVector3?p.copy(E):p.set(...E);const W=_.getWorldPosition(h).distanceTo(p);if(Dy(_))return{width:T/_.zoom,height:O/_.zoom,top:P,left:I,factor:1,distance:W,aspect:N};{const b=_.fov*Math.PI/180,C=2*Math.tan(b/2)*W,X=C*(T/O);return{width:X,height:C,top:P,left:I,factor:T/X,distance:W,aspect:N}}}let g;const y=_=>c(E=>({performance:{...E.performance,current:_}})),M=new fe;return{set:c,get:u,gl:null,camera:null,raycaster:null,events:{priority:1,enabled:!0,connected:!1},xr:null,scene:null,invalidate:(_=1)=>r(u(),_),advance:(_,E)=>e(_,E,u()),legacy:!1,linear:!1,flat:!1,controls:null,clock:new Wp,pointer:M,mouse:M,frameloop:"always",onPointerMissed:void 0,performance:{current:1,min:.5,max:1,debounce:200,regress:()=>{const _=u();g&&clearTimeout(g),_.performance.current!==_.performance.min&&y(_.performance.min),g=setTimeout(()=>y(u().performance.max),_.performance.debounce)}},size:{width:0,height:0,top:0,left:0,updateStyle:!1},viewport:{initialDpr:0,dpr:0,width:0,height:0,top:0,left:0,aspect:0,distance:0,factor:0,getCurrentViewport:m},setEvents:_=>c(E=>({...E,events:{...E.events,..._}})),setSize:(_,E,w,T,O)=>{const P=u().camera,I={width:_,height:E,top:T||0,left:O||0,updateStyle:w};c(N=>({size:I,viewport:{...N.viewport,...m(P,f,I)}}))},setDpr:_=>c(E=>{const w=Fy(_);return{viewport:{...E.viewport,dpr:w,initialDpr:E.viewport.initialDpr||w}}}),setFrameloop:(_="always")=>{const E=u().clock;E.stop(),E.elapsedTime=0,_!=="never"&&(E.start(),E.elapsedTime=0),c(()=>({frameloop:_}))},previousRoot:void 0,internal:{active:!1,priority:0,frames:0,lastEvent:ye.createRef(),interaction:[],hovered:new Map,subscribers:[],initialClick:[0,0],initialHits:[],capturedMap:new Map,subscribe:(_,E,w)=>{const T=u().internal;return T.priority=T.priority+(E>0?1:0),T.subscribers.push({ref:_,priority:E,store:w}),T.subscribers=T.subscribers.sort((O,P)=>O.priority-P.priority),()=>{const O=u().internal;O!=null&&O.subscribers&&(O.priority=O.priority-(E>0?1:0),O.subscribers=O.subscribers.filter(P=>P.ref!==_))}}}}}),n=t.getState();let i=n.size,s=n.viewport.dpr,a=n.camera;return t.subscribe(()=>{const{camera:c,size:u,viewport:h,gl:f,set:p}=t.getState();if(u.width!==i.width||u.height!==i.height||h.dpr!==s){var m;i=u,s=h.dpr,cC(c,u),f.setPixelRatio(h.dpr);const g=(m=u.updateStyle)!=null?m:typeof HTMLCanvasElement<"u"&&f.domElement instanceof HTMLCanvasElement;f.setSize(u.width,u.height,g)}c!==a&&(a=c,p(g=>({viewport:{...g.viewport,...g.viewport.getCurrentViewport(c)}})))}),t.subscribe(c=>r(c)),t};let eu,pC=new Set,mC=new Set,gC=new Set;function Id(r,e){if(r.size)for(const{callback:t}of r.values())t(e)}function ma(r,e){switch(r){case"before":return Id(pC,e);case"after":return Id(mC,e);case"tail":return Id(gC,e)}}let Ld,Dd;function Ud(r,e,t){let n=e.clock.getDelta();for(e.frameloop==="never"&&typeof r=="number"&&(n=r-e.clock.elapsedTime,e.clock.oldTime=e.clock.elapsedTime,e.clock.elapsedTime=r),Ld=e.internal.subscribers,eu=0;eu<Ld.length;eu++)Dd=Ld[eu],Dd.ref.current(Dd.store.getState(),n,t);return!e.internal.priority&&e.gl.render&&e.gl.render(e.scene,e.camera),e.internal.frames=Math.max(0,e.internal.frames-1),e.frameloop==="always"?1:e.internal.frames}function vC(r){let e=!1,t=!1,n,i,s;function a(h){i=requestAnimationFrame(a),e=!0,n=0,ma("before",h),t=!0;for(const p of r.values()){var f;s=p.store.getState(),s.internal.active&&(s.frameloop==="always"||s.internal.frames>0)&&!((f=s.gl.xr)!=null&&f.isPresenting)&&(n+=Ud(h,s))}if(t=!1,ma("after",h),n===0)return ma("tail",h),e=!1,cancelAnimationFrame(i)}function c(h,f=1){var p;if(!h)return r.forEach(m=>c(m.store.getState(),f));(p=h.gl.xr)!=null&&p.isPresenting||!h.internal.active||h.frameloop==="never"||(f>1?h.internal.frames=Math.min(60,h.internal.frames+f):t?h.internal.frames=2:h.internal.frames=1,e||(e=!0,requestAnimationFrame(a)))}function u(h,f=!0,p,m){if(f&&ma("before",h),p)Ud(h,p,m);else for(const g of r.values())Ud(h,g.store.getState());f&&ma("after",h)}return{loop:a,invalidate:c,advance:u}}function Vy(){const r=ye.useContext(Hy);if(!r)throw new Error("R3F: Hooks can only be used within the Canvas component!");return r}function Zu(r=t=>t,e){return Vy()(r,e)}function Rh(r,e=0){const t=Vy(),n=t.getState().internal.subscribe,i=Uy(r);return ll(()=>n(i,e,t),[e,n,t]),null}const Ro=new Map,{invalidate:dv,advance:pv}=vC(Ro),{reconciler:ju,applyProps:po}=rC(Ro,uC),mo={objects:"shallow",strict:!1},_C=(r,e)=>{const t=typeof r=="function"?r(e):r;return ky(t)?t:new U_({powerPreference:"high-performance",canvas:e,antialias:!0,alpha:!0,...r})};function yC(r,e){const t=typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement;if(e){const{width:n,height:i,top:s,left:a,updateStyle:c=t}=e;return{width:n,height:i,top:s,left:a,updateStyle:c}}else if(typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement&&r.parentElement){const{width:n,height:i,top:s,left:a}=r.parentElement.getBoundingClientRect();return{width:n,height:i,top:s,left:a,updateStyle:t}}else if(typeof OffscreenCanvas<"u"&&r instanceof OffscreenCanvas)return{width:r.width,height:r.height,top:0,left:0,updateStyle:t};return{width:0,height:0,top:0,left:0}}function xC(r){const e=Ro.get(r),t=e==null?void 0:e.fiber,n=e==null?void 0:e.store;e&&console.warn("R3F.createRoot should only be called once!");const i=typeof reportError=="function"?reportError:console.error,s=n||dC(dv,pv),a=t||ju.createContainer(s,wo.ConcurrentRoot,null,!1,null,"",i,null);e||Ro.set(r,{fiber:a,store:s});let c,u=!1,h;return{configure(f={}){let{gl:p,size:m,scene:g,events:y,onCreated:M,shadows:x=!1,linear:_=!1,flat:E=!1,legacy:w=!1,orthographic:T=!1,frameloop:O="always",dpr:P=[1,2],performance:I,raycaster:N,camera:W,onPointerMissed:b}=f,C=s.getState(),X=C.gl;C.gl||C.set({gl:X=_C(p,r)});let q=C.raycaster;q||C.set({raycaster:q=new Ey});const{params:K,...le}=N||{};if(kt.equ(le,q,mo)||po(q,{...le}),kt.equ(K,q.params,mo)||po(q,{params:{...q.params,...K}}),!C.camera||C.camera===h&&!kt.equ(h,W,mo)){h=W;const te=W instanceof $a,ce=te?W:T?new nl(0,0,0,0,.1,1e3):new fn(75,0,.1,1e3);te||(ce.position.z=5,W&&(po(ce,W),("aspect"in W||"left"in W||"right"in W||"bottom"in W||"top"in W)&&(ce.manual=!0,ce.updateProjectionMatrix())),!C.camera&&!(W!=null&&W.rotation)&&ce.lookAt(0,0,0)),C.set({camera:ce}),q.camera=ce}if(!C.scene){let te;g!=null&&g.isScene?te=g:(te=new Ep,g&&po(te,g)),C.set({scene:go(te)})}if(!C.xr){var Z;const te=(Xe,ne)=>{const pe=s.getState();pe.frameloop!=="never"&&pv(Xe,!0,pe,ne)},ce=()=>{const Xe=s.getState();Xe.gl.xr.enabled=Xe.gl.xr.isPresenting,Xe.gl.xr.setAnimationLoop(Xe.gl.xr.isPresenting?te:null),Xe.gl.xr.isPresenting||dv(Xe)},Be={connect(){const Xe=s.getState().gl;Xe.xr.addEventListener("sessionstart",ce),Xe.xr.addEventListener("sessionend",ce)},disconnect(){const Xe=s.getState().gl;Xe.xr.removeEventListener("sessionstart",ce),Xe.xr.removeEventListener("sessionend",ce)}};typeof((Z=X.xr)==null?void 0:Z.addEventListener)=="function"&&Be.connect(),C.set({xr:Be})}if(X.shadowMap){const te=X.shadowMap.enabled,ce=X.shadowMap.type;if(X.shadowMap.enabled=!!x,kt.boo(x))X.shadowMap.type=_a;else if(kt.str(x)){var me;const Be={basic:Lv,percentage:Ju,soft:_a,variance:Ai};X.shadowMap.type=(me=Be[x])!=null?me:_a}else kt.obj(x)&&Object.assign(X.shadowMap,x);(te!==X.shadowMap.enabled||ce!==X.shadowMap.type)&&(X.shadowMap.needsUpdate=!0)}const z=Ly();z&&("enabled"in z?z.enabled=!w:"legacyMode"in z&&(z.legacyMode=w)),u||po(X,{outputEncoding:_?3e3:3001,toneMapping:E?bi:rp}),C.legacy!==w&&C.set(()=>({legacy:w})),C.linear!==_&&C.set(()=>({linear:_})),C.flat!==E&&C.set(()=>({flat:E})),p&&!kt.fun(p)&&!ky(p)&&!kt.equ(p,X,mo)&&po(X,p),y&&!C.events.handlers&&C.set({events:y(s)});const se=yC(r,m);return kt.equ(se,C.size,mo)||C.setSize(se.width,se.height,se.updateStyle,se.top,se.left),P&&C.viewport.dpr!==Fy(P)&&C.setDpr(P),C.frameloop!==O&&C.setFrameloop(O),C.onPointerMissed||C.set({onPointerMissed:b}),I&&!kt.equ(I,C.performance,mo)&&C.set(te=>({performance:{...te.performance,...I}})),c=M,u=!0,this},render(f){return u||this.configure(),ju.updateContainer(lt.jsx(SC,{store:s,children:f,onCreated:c,rootElement:r}),a,null,()=>{}),s},unmount(){Gy(r)}}}function SC({store:r,children:e,onCreated:t,rootElement:n}){return ll(()=>{const i=r.getState();i.set(s=>({internal:{...s.internal,active:!0}})),t&&t(i),r.getState().events.connected||i.events.connect==null||i.events.connect(n)},[]),lt.jsx(Hy.Provider,{value:r,children:e})}function Gy(r,e){const t=Ro.get(r),n=t==null?void 0:t.fiber;if(n){const i=t==null?void 0:t.store.getState();i&&(i.internal.active=!1),ju.updateContainer(null,n,null,()=>{i&&setTimeout(()=>{try{var s,a,c,u;i.events.disconnect==null||i.events.disconnect(),(s=i.gl)==null||(a=s.renderLists)==null||a.dispose==null||a.dispose(),(c=i.gl)==null||c.forceContextLoss==null||c.forceContextLoss(),(u=i.gl)!=null&&u.xr&&i.xr.disconnect(),lC(i),Ro.delete(r)}catch{}},500)})}}ju.injectIntoDevTools({bundleType:0,rendererPackageName:"@react-three/fiber",version:ye.version});const Nd={onClick:["click",!1],onContextMenu:["contextmenu",!1],onDoubleClick:["dblclick",!1],onWheel:["wheel",!0],onPointerDown:["pointerdown",!0],onPointerUp:["pointerup",!0],onPointerLeave:["pointerleave",!0],onPointerMove:["pointermove",!0],onPointerCancel:["pointercancel",!0],onLostPointerCapture:["lostpointercapture",!0]};function MC(r){const{handlePointer:e}=fC(r);return{priority:1,enabled:!0,compute(t,n,i){n.pointer.set(t.offsetX/n.size.width*2-1,-(t.offsetY/n.size.height)*2+1),n.raycaster.setFromCamera(n.pointer,n.camera)},connected:void 0,handlers:Object.keys(Nd).reduce((t,n)=>({...t,[n]:e(n)}),{}),update:()=>{var t;const{events:n,internal:i}=r.getState();(t=i.lastEvent)!=null&&t.current&&n.handlers&&n.handlers.onPointerMove(i.lastEvent.current)},connect:t=>{var n;const{set:i,events:s}=r.getState();s.disconnect==null||s.disconnect(),i(a=>({events:{...a.events,connected:t}})),Object.entries((n=s.handlers)!=null?n:[]).forEach(([a,c])=>{const[u,h]=Nd[a];t.addEventListener(u,c,{passive:h})})},disconnect:()=>{const{set:t,events:n}=r.getState();if(n.connected){var i;Object.entries((i=n.handlers)!=null?i:[]).forEach(([s,a])=>{if(n&&n.connected instanceof HTMLElement){const[c]=Nd[s];n.connected.removeEventListener(c,a)}}),t(s=>({events:{...s.events,connected:void 0}}))}}}}function mv(r,e){let t;return(...n)=>{window.clearTimeout(t),t=window.setTimeout(()=>r(...n),e)}}function wC({debounce:r,scroll:e,polyfill:t,offsetSize:n}={debounce:0,scroll:!1,offsetSize:!1}){const i=t||(typeof window>"u"?class{}:window.ResizeObserver);if(!i)throw new Error("This browser does not support ResizeObserver out of the box. See: https://github.com/react-spring/react-use-measure/#resize-observer-polyfills");const[s,a]=ye.useState({left:0,top:0,width:0,height:0,bottom:0,right:0,x:0,y:0}),c=ye.useRef({element:null,scrollContainers:null,resizeObserver:null,lastBounds:s,orientationHandler:null}),u=r?typeof r=="number"?r:r.scroll:null,h=r?typeof r=="number"?r:r.resize:null,f=ye.useRef(!1);ye.useEffect(()=>(f.current=!0,()=>void(f.current=!1)));const[p,m,g]=ye.useMemo(()=>{const _=()=>{if(!c.current.element)return;const{left:E,top:w,width:T,height:O,bottom:P,right:I,x:N,y:W}=c.current.element.getBoundingClientRect(),b={left:E,top:w,width:T,height:O,bottom:P,right:I,x:N,y:W};c.current.element instanceof HTMLElement&&n&&(b.height=c.current.element.offsetHeight,b.width=c.current.element.offsetWidth),Object.freeze(b),f.current&&!bC(c.current.lastBounds,b)&&a(c.current.lastBounds=b)};return[_,h?mv(_,h):_,u?mv(_,u):_]},[a,n,u,h]);function y(){c.current.scrollContainers&&(c.current.scrollContainers.forEach(_=>_.removeEventListener("scroll",g,!0)),c.current.scrollContainers=null),c.current.resizeObserver&&(c.current.resizeObserver.disconnect(),c.current.resizeObserver=null),c.current.orientationHandler&&("orientation"in screen&&"removeEventListener"in screen.orientation?screen.orientation.removeEventListener("change",c.current.orientationHandler):"onorientationchange"in window&&window.removeEventListener("orientationchange",c.current.orientationHandler))}function M(){c.current.element&&(c.current.resizeObserver=new i(g),c.current.resizeObserver.observe(c.current.element),e&&c.current.scrollContainers&&c.current.scrollContainers.forEach(_=>_.addEventListener("scroll",g,{capture:!0,passive:!0})),c.current.orientationHandler=()=>{g()},"orientation"in screen&&"addEventListener"in screen.orientation?screen.orientation.addEventListener("change",c.current.orientationHandler):"onorientationchange"in window&&window.addEventListener("orientationchange",c.current.orientationHandler))}const x=_=>{!_||_===c.current.element||(y(),c.current.element=_,c.current.scrollContainers=Wy(_),M())};return AC(g,!!e),EC(m),ye.useEffect(()=>{y(),M()},[e,g,m]),ye.useEffect(()=>y,[]),[x,s,p]}function EC(r){ye.useEffect(()=>{const e=r;return window.addEventListener("resize",e),()=>void window.removeEventListener("resize",e)},[r])}function AC(r,e){ye.useEffect(()=>{if(e){const t=r;return window.addEventListener("scroll",t,{capture:!0,passive:!0}),()=>void window.removeEventListener("scroll",t,!0)}},[r,e])}function Wy(r){const e=[];if(!r||r===document.body)return e;const{overflow:t,overflowX:n,overflowY:i}=window.getComputedStyle(r);return[t,n,i].some(s=>s==="auto"||s==="scroll")&&e.push(r),[...e,...Wy(r.parentElement)]}const TC=["x","y","top","bottom","left","right","width","height"],bC=(r,e)=>TC.every(t=>r[t]===e[t]);var CC=Object.defineProperty,RC=Object.defineProperties,PC=Object.getOwnPropertyDescriptors,gv=Object.getOwnPropertySymbols,IC=Object.prototype.hasOwnProperty,LC=Object.prototype.propertyIsEnumerable,vv=(r,e,t)=>e in r?CC(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,_v=(r,e)=>{for(var t in e||(e={}))IC.call(e,t)&&vv(r,t,e[t]);if(gv)for(var t of gv(e))LC.call(e,t)&&vv(r,t,e[t]);return r},DC=(r,e)=>RC(r,PC(e)),yv,xv;typeof window<"u"&&((yv=window.document)!=null&&yv.createElement||((xv=window.navigator)==null?void 0:xv.product)==="ReactNative")?ye.useLayoutEffect:ye.useEffect;function Xy(r,e,t){if(!r)return;if(t(r)===!0)return r;let n=r.child;for(;n;){const i=Xy(n,e,t);if(i)return i;n=n.sibling}}function Yy(r){try{return Object.defineProperties(r,{_currentRenderer:{get(){return null},set(){}},_currentRenderer2:{get(){return null},set(){}}})}catch{return r}}const Sv=console.error;console.error=function(){const r=[...arguments].join("");if(r!=null&&r.startsWith("Warning:")&&r.includes("useContext")){console.error=Sv;return}return Sv.apply(this,arguments)};const Jp=Yy(ye.createContext(null));class qy extends ye.Component{render(){return ye.createElement(Jp.Provider,{value:this._reactInternals},this.props.children)}}function UC(){const r=ye.useContext(Jp);if(r===null)throw new Error("its-fine: useFiber must be called within a <FiberProvider />!");const e=ye.useId();return ye.useMemo(()=>{for(const n of[r,r==null?void 0:r.alternate]){if(!n)continue;const i=Xy(n,!1,s=>{let a=s.memoizedState;for(;a;){if(a.memoizedState===e)return!0;a=a.next}});if(i)return i}},[r,e])}function NC(){const r=UC(),[e]=ye.useState(()=>new Map);e.clear();let t=r;for(;t;){if(t.type&&typeof t.type=="object"){const i=t.type._context===void 0&&t.type.Provider===t.type?t.type:t.type._context;i&&i!==Jp&&!e.has(i)&&e.set(i,ye.useContext(Yy(i)))}t=t.return}return e}function OC(){const r=NC();return ye.useMemo(()=>Array.from(r.keys()).reduce((e,t)=>n=>ye.createElement(e,null,ye.createElement(t.Provider,DC(_v({},n),{value:r.get(t)}))),e=>ye.createElement(qy,_v({},e))),[r])}const FC=ye.forwardRef(function({children:e,fallback:t,resize:n,style:i,gl:s,events:a=MC,eventSource:c,eventPrefix:u,shadows:h,linear:f,flat:p,legacy:m,orthographic:g,frameloop:y,dpr:M,performance:x,raycaster:_,camera:E,scene:w,onPointerMissed:T,onCreated:O,...P},I){ye.useMemo(()=>Iy(Kb),[]);const N=OC(),[W,b]=wC({scroll:!0,debounce:{scroll:50,resize:0},...n}),C=ye.useRef(null),X=ye.useRef(null);ye.useImperativeHandle(I,()=>C.current);const q=Uy(T),[K,le]=ye.useState(!1),[Z,me]=ye.useState(!1);if(K)throw K;if(Z)throw Z;const z=ye.useRef(null);ll(()=>{const te=C.current;b.width>0&&b.height>0&&te&&(z.current||(z.current=xC(te)),z.current.configure({gl:s,events:a,shadows:h,linear:f,flat:p,legacy:m,orthographic:g,frameloop:y,dpr:M,performance:x,raycaster:_,camera:E,scene:w,size:b,onPointerMissed:(...ce)=>q.current==null?void 0:q.current(...ce),onCreated:ce=>{ce.events.connect==null||ce.events.connect(c?sC(c)?c.current:c:X.current),u&&ce.setEvents({compute:(Be,Xe)=>{const ne=Be[u+"X"],pe=Be[u+"Y"];Xe.pointer.set(ne/Xe.size.width*2-1,-(pe/Xe.size.height)*2+1),Xe.raycaster.setFromCamera(Xe.pointer,Xe.camera)}}),O==null||O(ce)}}),z.current.render(lt.jsx(N,{children:lt.jsx(Ny,{set:me,children:lt.jsx(ye.Suspense,{fallback:lt.jsx(oC,{set:le}),children:e??null})})})))}),ye.useEffect(()=>{const te=C.current;if(te)return()=>Gy(te)},[]);const se=c?"none":"auto";return lt.jsx("div",{ref:X,style:{position:"relative",width:"100%",height:"100%",overflow:"hidden",pointerEvents:se,...i},...P,children:lt.jsx("div",{ref:W,style:{width:"100%",height:"100%"},children:lt.jsx("canvas",{ref:C,style:{display:"block"},children:t})})})}),BC=ye.forwardRef(function(e,t){return lt.jsx(qy,{children:lt.jsx(FC,{...e,ref:t})})});function Po(){return Po=Object.assign?Object.assign.bind():function(r){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var n in t)({}).hasOwnProperty.call(t,n)&&(r[n]=t[n])}return r},Po.apply(null,arguments)}const Zy=parseInt(ja.replace(/\D+/g,"")),jy=Zy>=125?"uv1":"uv2";function zC(r,e=Math.PI/3){const t=Math.cos(e),n=(1+1e-10)*100,i=[new D,new D,new D],s=new D,a=new D,c=new D,u=new D;function h(M){const x=~~(M.x*n),_=~~(M.y*n),E=~~(M.z*n);return`${x},${_},${E}`}const f=r.index?r.toNonIndexed():r,p=f.attributes.position,m={};for(let M=0,x=p.count/3;M<x;M++){const _=3*M,E=i[0].fromBufferAttribute(p,_+0),w=i[1].fromBufferAttribute(p,_+1),T=i[2].fromBufferAttribute(p,_+2);s.subVectors(T,w),a.subVectors(E,w);const O=new D().crossVectors(s,a).normalize();for(let P=0;P<3;P++){const I=i[P],N=h(I);N in m||(m[N]=[]),m[N].push(O)}}const g=new Float32Array(p.count*3),y=new Ot(g,3,!1);for(let M=0,x=p.count/3;M<x;M++){const _=3*M,E=i[0].fromBufferAttribute(p,_+0),w=i[1].fromBufferAttribute(p,_+1),T=i[2].fromBufferAttribute(p,_+2);s.subVectors(T,w),a.subVectors(E,w),c.crossVectors(s,a).normalize();for(let O=0;O<3;O++){const P=i[O],I=h(P),N=m[I];u.set(0,0,0);for(let W=0,b=N.length;W<b;W++){const C=N[W];c.dot(C)>t&&u.add(C)}u.normalize(),y.setXYZ(_+O,u.x,u.y,u.z)}}return f.setAttribute("normal",y),f}const Mv=new pn,tu=new D;class Kp extends Vp{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";const e=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],t=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],n=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(n),this.setAttribute("position",new We(e,3)),this.setAttribute("uv",new We(t,2))}applyMatrix4(e){const t=this.attributes.instanceStart,n=this.attributes.instanceEnd;return t!==void 0&&(t.applyMatrix4(e),n.applyMatrix4(e),t.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));const n=new qu(t,6,1);return this.setAttribute("instanceStart",new ti(n,3,0)),this.setAttribute("instanceEnd",new ti(n,3,3)),this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(e,t=3){let n;e instanceof Float32Array?n=e:Array.isArray(e)&&(n=new Float32Array(e));const i=new qu(n,t*2,1);return this.setAttribute("instanceColorStart",new ti(i,t,0)),this.setAttribute("instanceColorEnd",new ti(i,t,t)),this}fromWireframeGeometry(e){return this.setPositions(e.attributes.position.array),this}fromEdgesGeometry(e){return this.setPositions(e.attributes.position.array),this}fromMesh(e){return this.fromWireframeGeometry(new Up(e.geometry)),this}fromLineSegments(e){const t=e.geometry;return this.setPositions(t.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new pn);const e=this.attributes.instanceStart,t=this.attributes.instanceEnd;e!==void 0&&t!==void 0&&(this.boundingBox.setFromBufferAttribute(e),Mv.setFromBufferAttribute(t),this.boundingBox.union(Mv))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new mn),this.boundingBox===null&&this.computeBoundingBox();const e=this.attributes.instanceStart,t=this.attributes.instanceEnd;if(e!==void 0&&t!==void 0){const n=this.boundingSphere.center;this.boundingBox.getCenter(n);let i=0;for(let s=0,a=e.count;s<a;s++)tu.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(tu)),tu.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(tu));this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}applyMatrix(e){return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."),this.applyMatrix4(e)}}class Jy extends Kp{constructor(){super(),this.isLineGeometry=!0,this.type="LineGeometry"}setPositions(e){const t=e.length-3,n=new Float32Array(2*t);for(let i=0;i<t;i+=3)n[2*i]=e[i],n[2*i+1]=e[i+1],n[2*i+2]=e[i+2],n[2*i+3]=e[i+3],n[2*i+4]=e[i+4],n[2*i+5]=e[i+5];return super.setPositions(n),this}setColors(e,t=3){const n=e.length-t,i=new Float32Array(2*n);if(t===3)for(let s=0;s<n;s+=t)i[2*s]=e[s],i[2*s+1]=e[s+1],i[2*s+2]=e[s+2],i[2*s+3]=e[s+3],i[2*s+4]=e[s+4],i[2*s+5]=e[s+5];else for(let s=0;s<n;s+=t)i[2*s]=e[s],i[2*s+1]=e[s+1],i[2*s+2]=e[s+2],i[2*s+3]=e[s+3],i[2*s+4]=e[s+4],i[2*s+5]=e[s+5],i[2*s+6]=e[s+6],i[2*s+7]=e[s+7];return super.setColors(i,t),this}fromLine(e){const t=e.geometry;return this.setPositions(t.attributes.position.array),this}}class Qp extends ri{constructor(e){super({type:"LineMaterial",uniforms:ka.clone(ka.merge([Ae.common,Ae.fog,{worldUnits:{value:1},linewidth:{value:1},resolution:{value:new fe(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}}])),vertexShader:`
				#include <common>
				#include <fog_pars_vertex>
				#include <logdepthbuf_pars_vertex>
				#include <clipping_planes_pars_vertex>

				uniform float linewidth;
				uniform vec2 resolution;

				attribute vec3 instanceStart;
				attribute vec3 instanceEnd;

				#ifdef USE_COLOR
					#ifdef USE_LINE_COLOR_ALPHA
						varying vec4 vLineColor;
						attribute vec4 instanceColorStart;
						attribute vec4 instanceColorEnd;
					#else
						varying vec3 vLineColor;
						attribute vec3 instanceColorStart;
						attribute vec3 instanceColorEnd;
					#endif
				#endif

				#ifdef WORLD_UNITS

					varying vec4 worldPos;
					varying vec3 worldStart;
					varying vec3 worldEnd;

					#ifdef USE_DASH

						varying vec2 vUv;

					#endif

				#else

					varying vec2 vUv;

				#endif

				#ifdef USE_DASH

					uniform float dashScale;
					attribute float instanceDistanceStart;
					attribute float instanceDistanceEnd;
					varying float vLineDistance;

				#endif

				void trimSegment( const in vec4 start, inout vec4 end ) {

					// trim end segment so it terminates between the camera plane and the near plane

					// conservative estimate of the near plane
					float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
					float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column
					float nearEstimate = - 0.5 * b / a;

					float alpha = ( nearEstimate - start.z ) / ( end.z - start.z );

					end.xyz = mix( start.xyz, end.xyz, alpha );

				}

				void main() {

					#ifdef USE_COLOR

						vLineColor = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

					#endif

					#ifdef USE_DASH

						vLineDistance = ( position.y < 0.5 ) ? dashScale * instanceDistanceStart : dashScale * instanceDistanceEnd;
						vUv = uv;

					#endif

					float aspect = resolution.x / resolution.y;

					// camera space
					vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
					vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

					#ifdef WORLD_UNITS

						worldStart = start.xyz;
						worldEnd = end.xyz;

					#else

						vUv = uv;

					#endif

					// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
					// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
					// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
					// perhaps there is a more elegant solution -- WestLangley

					bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

					if ( perspective ) {

						if ( start.z < 0.0 && end.z >= 0.0 ) {

							trimSegment( start, end );

						} else if ( end.z < 0.0 && start.z >= 0.0 ) {

							trimSegment( end, start );

						}

					}

					// clip space
					vec4 clipStart = projectionMatrix * start;
					vec4 clipEnd = projectionMatrix * end;

					// ndc space
					vec3 ndcStart = clipStart.xyz / clipStart.w;
					vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

					// direction
					vec2 dir = ndcEnd.xy - ndcStart.xy;

					// account for clip-space aspect ratio
					dir.x *= aspect;
					dir = normalize( dir );

					#ifdef WORLD_UNITS

						// get the offset direction as perpendicular to the view vector
						vec3 worldDir = normalize( end.xyz - start.xyz );
						vec3 offset;
						if ( position.y < 0.5 ) {

							offset = normalize( cross( start.xyz, worldDir ) );

						} else {

							offset = normalize( cross( end.xyz, worldDir ) );

						}

						// sign flip
						if ( position.x < 0.0 ) offset *= - 1.0;

						float forwardOffset = dot( worldDir, vec3( 0.0, 0.0, 1.0 ) );

						// don't extend the line if we're rendering dashes because we
						// won't be rendering the endcaps
						#ifndef USE_DASH

							// extend the line bounds to encompass  endcaps
							start.xyz += - worldDir * linewidth * 0.5;
							end.xyz += worldDir * linewidth * 0.5;

							// shift the position of the quad so it hugs the forward edge of the line
							offset.xy -= dir * forwardOffset;
							offset.z += 0.5;

						#endif

						// endcaps
						if ( position.y > 1.0 || position.y < 0.0 ) {

							offset.xy += dir * 2.0 * forwardOffset;

						}

						// adjust for linewidth
						offset *= linewidth * 0.5;

						// set the world position
						worldPos = ( position.y < 0.5 ) ? start : end;
						worldPos.xyz += offset;

						// project the worldpos
						vec4 clip = projectionMatrix * worldPos;

						// shift the depth of the projected points so the line
						// segments overlap neatly
						vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;
						clip.z = clipPose.z * clip.w;

					#else

						vec2 offset = vec2( dir.y, - dir.x );
						// undo aspect ratio adjustment
						dir.x /= aspect;
						offset.x /= aspect;

						// sign flip
						if ( position.x < 0.0 ) offset *= - 1.0;

						// endcaps
						if ( position.y < 0.0 ) {

							offset += - dir;

						} else if ( position.y > 1.0 ) {

							offset += dir;

						}

						// adjust for linewidth
						offset *= linewidth;

						// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
						offset /= resolution.y;

						// select end
						vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

						// back to clip space
						offset *= clip.w;

						clip.xy += offset;

					#endif

					gl_Position = clip;

					vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

					#include <logdepthbuf_vertex>
					#include <clipping_planes_vertex>
					#include <fog_vertex>

				}
			`,fragmentShader:`
				uniform vec3 diffuse;
				uniform float opacity;
				uniform float linewidth;

				#ifdef USE_DASH

					uniform float dashOffset;
					uniform float dashSize;
					uniform float gapSize;

				#endif

				varying float vLineDistance;

				#ifdef WORLD_UNITS

					varying vec4 worldPos;
					varying vec3 worldStart;
					varying vec3 worldEnd;

					#ifdef USE_DASH

						varying vec2 vUv;

					#endif

				#else

					varying vec2 vUv;

				#endif

				#include <common>
				#include <fog_pars_fragment>
				#include <logdepthbuf_pars_fragment>
				#include <clipping_planes_pars_fragment>

				#ifdef USE_COLOR
					#ifdef USE_LINE_COLOR_ALPHA
						varying vec4 vLineColor;
					#else
						varying vec3 vLineColor;
					#endif
				#endif

				vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

					float mua;
					float mub;

					vec3 p13 = p1 - p3;
					vec3 p43 = p4 - p3;

					vec3 p21 = p2 - p1;

					float d1343 = dot( p13, p43 );
					float d4321 = dot( p43, p21 );
					float d1321 = dot( p13, p21 );
					float d4343 = dot( p43, p43 );
					float d2121 = dot( p21, p21 );

					float denom = d2121 * d4343 - d4321 * d4321;

					float numer = d1343 * d4321 - d1321 * d4343;

					mua = numer / denom;
					mua = clamp( mua, 0.0, 1.0 );
					mub = ( d1343 + d4321 * ( mua ) ) / d4343;
					mub = clamp( mub, 0.0, 1.0 );

					return vec2( mua, mub );

				}

				void main() {

					#include <clipping_planes_fragment>

					#ifdef USE_DASH

						if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

						if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

					#endif

					float alpha = opacity;

					#ifdef WORLD_UNITS

						// Find the closest points on the view ray and the line segment
						vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
						vec3 lineDir = worldEnd - worldStart;
						vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

						vec3 p1 = worldStart + lineDir * params.x;
						vec3 p2 = rayEnd * params.y;
						vec3 delta = p1 - p2;
						float len = length( delta );
						float norm = len / linewidth;

						#ifndef USE_DASH

							#ifdef USE_ALPHA_TO_COVERAGE

								float dnorm = fwidth( norm );
								alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

							#else

								if ( norm > 0.5 ) {

									discard;

								}

							#endif

						#endif

					#else

						#ifdef USE_ALPHA_TO_COVERAGE

							// artifacts appear on some hardware if a derivative is taken within a conditional
							float a = vUv.x;
							float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
							float len2 = a * a + b * b;
							float dlen = fwidth( len2 );

							if ( abs( vUv.y ) > 1.0 ) {

								alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

							}

						#else

							if ( abs( vUv.y ) > 1.0 ) {

								float a = vUv.x;
								float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
								float len2 = a * a + b * b;

								if ( len2 > 1.0 ) discard;

							}

						#endif

					#endif

					vec4 diffuseColor = vec4( diffuse, alpha );
					#ifdef USE_COLOR
						#ifdef USE_LINE_COLOR_ALPHA
							diffuseColor *= vLineColor;
						#else
							diffuseColor.rgb *= vLineColor;
						#endif
					#endif

					#include <logdepthbuf_fragment>

					gl_FragColor = diffuseColor;

					#include <tonemapping_fragment>
					#include <${Zy>=154?"colorspace_fragment":"encodings_fragment"}>
					#include <fog_fragment>
					#include <premultiplied_alpha_fragment>

				}
			`,clipping:!0}),this.isLineMaterial=!0,this.onBeforeCompile=function(){this.transparent?this.defines.USE_LINE_COLOR_ALPHA="1":delete this.defines.USE_LINE_COLOR_ALPHA},Object.defineProperties(this,{color:{enumerable:!0,get:function(){return this.uniforms.diffuse.value},set:function(t){this.uniforms.diffuse.value=t}},worldUnits:{enumerable:!0,get:function(){return"WORLD_UNITS"in this.defines},set:function(t){t===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}},linewidth:{enumerable:!0,get:function(){return this.uniforms.linewidth.value},set:function(t){this.uniforms.linewidth.value=t}},dashed:{enumerable:!0,get:function(){return"USE_DASH"in this.defines},set(t){!!t!="USE_DASH"in this.defines&&(this.needsUpdate=!0),t===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}},dashScale:{enumerable:!0,get:function(){return this.uniforms.dashScale.value},set:function(t){this.uniforms.dashScale.value=t}},dashSize:{enumerable:!0,get:function(){return this.uniforms.dashSize.value},set:function(t){this.uniforms.dashSize.value=t}},dashOffset:{enumerable:!0,get:function(){return this.uniforms.dashOffset.value},set:function(t){this.uniforms.dashOffset.value=t}},gapSize:{enumerable:!0,get:function(){return this.uniforms.gapSize.value},set:function(t){this.uniforms.gapSize.value=t}},opacity:{enumerable:!0,get:function(){return this.uniforms.opacity.value},set:function(t){this.uniforms.opacity.value=t}},resolution:{enumerable:!0,get:function(){return this.uniforms.resolution.value},set:function(t){this.uniforms.resolution.value.copy(t)}},alphaToCoverage:{enumerable:!0,get:function(){return"USE_ALPHA_TO_COVERAGE"in this.defines},set:function(t){!!t!="USE_ALPHA_TO_COVERAGE"in this.defines&&(this.needsUpdate=!0),t===!0?(this.defines.USE_ALPHA_TO_COVERAGE="",this.extensions.derivatives=!0):(delete this.defines.USE_ALPHA_TO_COVERAGE,this.extensions.derivatives=!1)}}}),this.setValues(e)}}const Od=new xt,wv=new D,Ev=new D,_n=new xt,yn=new xt,zi=new xt,Fd=new D,Bd=new et,xn=new Ay,Av=new D,nu=new pn,iu=new mn,ki=new xt;let Gi,Es;function Tv(r,e,t){return ki.set(0,0,-e,1).applyMatrix4(r.projectionMatrix),ki.multiplyScalar(1/ki.w),ki.x=Es/t.width,ki.y=Es/t.height,ki.applyMatrix4(r.projectionMatrixInverse),ki.multiplyScalar(1/ki.w),Math.abs(Math.max(ki.x,ki.y))}function kC(r,e){const t=r.matrixWorld,n=r.geometry,i=n.attributes.instanceStart,s=n.attributes.instanceEnd,a=Math.min(n.instanceCount,i.count);for(let c=0,u=a;c<u;c++){xn.start.fromBufferAttribute(i,c),xn.end.fromBufferAttribute(s,c),xn.applyMatrix4(t);const h=new D,f=new D;Gi.distanceSqToSegment(xn.start,xn.end,f,h),f.distanceTo(h)<Es*.5&&e.push({point:f,pointOnLine:h,distance:Gi.origin.distanceTo(f),object:r,face:null,faceIndex:c,uv:null,[jy]:null})}}function HC(r,e,t){const n=e.projectionMatrix,s=r.material.resolution,a=r.matrixWorld,c=r.geometry,u=c.attributes.instanceStart,h=c.attributes.instanceEnd,f=Math.min(c.instanceCount,u.count),p=-e.near;Gi.at(1,zi),zi.w=1,zi.applyMatrix4(e.matrixWorldInverse),zi.applyMatrix4(n),zi.multiplyScalar(1/zi.w),zi.x*=s.x/2,zi.y*=s.y/2,zi.z=0,Fd.copy(zi),Bd.multiplyMatrices(e.matrixWorldInverse,a);for(let m=0,g=f;m<g;m++){if(_n.fromBufferAttribute(u,m),yn.fromBufferAttribute(h,m),_n.w=1,yn.w=1,_n.applyMatrix4(Bd),yn.applyMatrix4(Bd),_n.z>p&&yn.z>p)continue;if(_n.z>p){const w=_n.z-yn.z,T=(_n.z-p)/w;_n.lerp(yn,T)}else if(yn.z>p){const w=yn.z-_n.z,T=(yn.z-p)/w;yn.lerp(_n,T)}_n.applyMatrix4(n),yn.applyMatrix4(n),_n.multiplyScalar(1/_n.w),yn.multiplyScalar(1/yn.w),_n.x*=s.x/2,_n.y*=s.y/2,yn.x*=s.x/2,yn.y*=s.y/2,xn.start.copy(_n),xn.start.z=0,xn.end.copy(yn),xn.end.z=0;const M=xn.closestPointToPointParameter(Fd,!0);xn.at(M,Av);const x=Ms.lerp(_n.z,yn.z,M),_=x>=-1&&x<=1,E=Fd.distanceTo(Av)<Es*.5;if(_&&E){xn.start.fromBufferAttribute(u,m),xn.end.fromBufferAttribute(h,m),xn.start.applyMatrix4(a),xn.end.applyMatrix4(a);const w=new D,T=new D;Gi.distanceSqToSegment(xn.start,xn.end,T,w),t.push({point:T,pointOnLine:w,distance:Gi.origin.distanceTo(T),object:r,face:null,faceIndex:m,uv:null,[jy]:null})}}}class Ky extends $t{constructor(e=new Kp,t=new Qp({color:Math.random()*16777215})){super(e,t),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){const e=this.geometry,t=e.attributes.instanceStart,n=e.attributes.instanceEnd,i=new Float32Array(2*t.count);for(let a=0,c=0,u=t.count;a<u;a++,c+=2)wv.fromBufferAttribute(t,a),Ev.fromBufferAttribute(n,a),i[c]=c===0?0:i[c-1],i[c+1]=i[c]+wv.distanceTo(Ev);const s=new qu(i,2,1);return e.setAttribute("instanceDistanceStart",new ti(s,1,0)),e.setAttribute("instanceDistanceEnd",new ti(s,1,1)),this}raycast(e,t){const n=this.material.worldUnits,i=e.camera;i===null&&!n&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');const s=e.params.Line2!==void 0&&e.params.Line2.threshold||0;Gi=e.ray;const a=this.matrixWorld,c=this.geometry,u=this.material;Es=u.linewidth+s,c.boundingSphere===null&&c.computeBoundingSphere(),iu.copy(c.boundingSphere).applyMatrix4(a);let h;if(n)h=Es*.5;else{const p=Math.max(i.near,iu.distanceToPoint(Gi.origin));h=Tv(i,p,u.resolution)}if(iu.radius+=h,Gi.intersectsSphere(iu)===!1)return;c.boundingBox===null&&c.computeBoundingBox(),nu.copy(c.boundingBox).applyMatrix4(a);let f;if(n)f=Es*.5;else{const p=Math.max(i.near,nu.distanceToPoint(Gi.origin));f=Tv(i,p,u.resolution)}nu.expandByScalar(f),Gi.intersectsBox(nu)!==!1&&(n?kC(this,t):HC(this,i,t))}onBeforeRender(e){const t=this.material.uniforms;t&&t.resolution&&(e.getViewport(Od),this.material.uniforms.resolution.value.set(Od.z,Od.w))}}class VC extends Ky{constructor(e=new Jy,t=new Qp({color:Math.random()*16777215})){super(e,t),this.isLine2=!0,this.type="Line2"}}const bv=ye.forwardRef(function({points:e,color:t=16777215,vertexColors:n,linewidth:i,lineWidth:s,segments:a,dashed:c,...u},h){var f,p;const m=Zu(_=>_.size),g=ye.useMemo(()=>a?new Ky:new VC,[a]),[y]=ye.useState(()=>new Qp),M=(n==null||(f=n[0])==null?void 0:f.length)===4?4:3,x=ye.useMemo(()=>{const _=a?new Kp:new Jy,E=e.map(w=>{const T=Array.isArray(w);return w instanceof D||w instanceof xt?[w.x,w.y,w.z]:w instanceof fe?[w.x,w.y,0]:T&&w.length===3?[w[0],w[1],w[2]]:T&&w.length===2?[w[0],w[1],0]:w});if(_.setPositions(E.flat()),n){t=16777215;const w=n.map(T=>T instanceof Pe?T.toArray():T);_.setColors(w.flat(),M)}return _},[e,a,n,M]);return ye.useLayoutEffect(()=>{g.computeLineDistances()},[e,g]),ye.useLayoutEffect(()=>{c?y.defines.USE_DASH="":delete y.defines.USE_DASH,y.needsUpdate=!0},[c,y]),ye.useEffect(()=>()=>{x.dispose(),y.dispose()},[x]),ye.createElement("primitive",Po({object:g,ref:h},u),ye.createElement("primitive",{object:x,attach:"geometry"}),ye.createElement("primitive",Po({object:y,attach:"material",color:t,vertexColors:!!n,resolution:[m.width,m.height],linewidth:(p=i??s)!==null&&p!==void 0?p:1,dashed:c,transparent:M===4},u)))});function Cv(r,e,t){const n=Zu(m=>m.size),i=Zu(m=>m.viewport),s=typeof r=="number"?r:n.width*i.dpr,a=n.height*i.dpr,c=(typeof r=="number"?t:r)||{},{samples:u=0,depth:h,...f}=c,p=ye.useMemo(()=>{const m=new vi(s,a,{minFilter:jt,magFilter:jt,type:Rs,...f});return h&&(m.depthTexture=new ah(s,a,zn)),m.samples=u,m},[]);return ye.useLayoutEffect(()=>{p.setSize(s,a),u&&(p.samples=u)},[u,p,s,a]),ye.useEffect(()=>()=>p.dispose(),[]),p}function GC(r,e,t,n){const i=class extends ri{constructor(a={}){const c=Object.entries(r);super({uniforms:c.reduce((u,[h,f])=>{const p=ka.clone({[h]:{value:f}});return{...u,...p}},{}),vertexShader:e,fragmentShader:t}),this.key="",c.forEach(([u])=>Object.defineProperty(this,u,{get:()=>this.uniforms[u].value,set:h=>this.uniforms[u].value=h})),Object.assign(this,a)}};return i.key=Ms.generateUUID(),i}const WC=GC({},"void main() { }","void main() { gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0); discard;  }");class XC extends Op{constructor(e=6,t=!1){super(),this.uniforms={chromaticAberration:{value:.05},transmission:{value:0},_transmission:{value:1},transmissionMap:{value:null},roughness:{value:0},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:1/0},attenuationColor:{value:new Pe("white")},anisotropicBlur:{value:.1},time:{value:0},distortion:{value:0},distortionScale:{value:.5},temporalDistortion:{value:0},buffer:{value:null}},this.onBeforeCompile=n=>{n.uniforms={...n.uniforms,...this.uniforms},this.anisotropy>0&&(n.defines.USE_ANISOTROPY=""),t?n.defines.USE_SAMPLER="":n.defines.USE_TRANSMISSION="",n.fragmentShader=`
      uniform float chromaticAberration;         
      uniform float anisotropicBlur;      
      uniform float time;
      uniform float distortion;
      uniform float distortionScale;
      uniform float temporalDistortion;
      uniform sampler2D buffer;

      vec3 random3(vec3 c) {
        float j = 4096.0*sin(dot(c,vec3(17.0, 59.4, 15.0)));
        vec3 r;
        r.z = fract(512.0*j);
        j *= .125;
        r.x = fract(512.0*j);
        j *= .125;
        r.y = fract(512.0*j);
        return r-0.5;
      }

      uint hash( uint x ) {
        x += ( x << 10u );
        x ^= ( x >>  6u );
        x += ( x <<  3u );
        x ^= ( x >> 11u );
        x += ( x << 15u );
        return x;
      }

      // Compound versions of the hashing algorithm I whipped together.
      uint hash( uvec2 v ) { return hash( v.x ^ hash(v.y)                         ); }
      uint hash( uvec3 v ) { return hash( v.x ^ hash(v.y) ^ hash(v.z)             ); }
      uint hash( uvec4 v ) { return hash( v.x ^ hash(v.y) ^ hash(v.z) ^ hash(v.w) ); }

      // Construct a float with half-open range [0:1] using low 23 bits.
      // All zeroes yields 0.0, all ones yields the next smallest representable value below 1.0.
      float floatConstruct( uint m ) {
        const uint ieeeMantissa = 0x007FFFFFu; // binary32 mantissa bitmask
        const uint ieeeOne      = 0x3F800000u; // 1.0 in IEEE binary32
        m &= ieeeMantissa;                     // Keep only mantissa bits (fractional part)
        m |= ieeeOne;                          // Add fractional part to 1.0
        float  f = uintBitsToFloat( m );       // Range [1:2]
        return f - 1.0;                        // Range [0:1]
      }

      // Pseudo-random value in half-open range [0:1].
      float randomBase( float x ) { return floatConstruct(hash(floatBitsToUint(x))); }
      float randomBase( vec2  v ) { return floatConstruct(hash(floatBitsToUint(v))); }
      float randomBase( vec3  v ) { return floatConstruct(hash(floatBitsToUint(v))); }
      float randomBase( vec4  v ) { return floatConstruct(hash(floatBitsToUint(v))); }
      float rand(float seed) {
        float result = randomBase(vec3(gl_FragCoord.xy, seed));
        return result;
      }

      const float F3 =  0.3333333;
      const float G3 =  0.1666667;

      float snoise(vec3 p) {
        vec3 s = floor(p + dot(p, vec3(F3)));
        vec3 x = p - s + dot(s, vec3(G3));
        vec3 e = step(vec3(0.0), x - x.yzx);
        vec3 i1 = e*(1.0 - e.zxy);
        vec3 i2 = 1.0 - e.zxy*(1.0 - e);
        vec3 x1 = x - i1 + G3;
        vec3 x2 = x - i2 + 2.0*G3;
        vec3 x3 = x - 1.0 + 3.0*G3;
        vec4 w, d;
        w.x = dot(x, x);
        w.y = dot(x1, x1);
        w.z = dot(x2, x2);
        w.w = dot(x3, x3);
        w = max(0.6 - w, 0.0);
        d.x = dot(random3(s), x);
        d.y = dot(random3(s + i1), x1);
        d.z = dot(random3(s + i2), x2);
        d.w = dot(random3(s + 1.0), x3);
        w *= w;
        w *= w;
        d *= w;
        return dot(d, vec4(52.0));
      }

      float snoiseFractal(vec3 m) {
        return 0.5333333* snoise(m)
              +0.2666667* snoise(2.0*m)
              +0.1333333* snoise(4.0*m)
              +0.0666667* snoise(8.0*m);
      }
`+n.fragmentShader,n.fragmentShader=n.fragmentShader.replace("#include <transmission_pars_fragment>",`
        #ifdef USE_TRANSMISSION
          // Transmission code is based on glTF-Sampler-Viewer
          // https://github.com/KhronosGroup/glTF-Sample-Viewer
          uniform float _transmission;
          uniform float thickness;
          uniform float attenuationDistance;
          uniform vec3 attenuationColor;
          #ifdef USE_TRANSMISSIONMAP
            uniform sampler2D transmissionMap;
          #endif
          #ifdef USE_THICKNESSMAP
            uniform sampler2D thicknessMap;
          #endif
          uniform vec2 transmissionSamplerSize;
          uniform sampler2D transmissionSamplerMap;
          uniform mat4 modelMatrix;
          uniform mat4 projectionMatrix;
          varying vec3 vWorldPosition;
          vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
            // Direction of refracted light.
            vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
            // Compute rotation-independant scaling of the model matrix.
            vec3 modelScale;
            modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
            modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
            modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
            // The thickness is specified in local space.
            return normalize( refractionVector ) * thickness * modelScale;
          }
          float applyIorToRoughness( const in float roughness, const in float ior ) {
            // Scale roughness with IOR so that an IOR of 1.0 results in no microfacet refraction and
            // an IOR of 1.5 results in the default amount of microfacet refraction.
            return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
          }
          vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
            float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );            
            #ifdef USE_SAMPLER
              #ifdef texture2DLodEXT
                return texture2DLodEXT(transmissionSamplerMap, fragCoord.xy, framebufferLod);
              #else
                return texture2D(transmissionSamplerMap, fragCoord.xy, framebufferLod);
              #endif
            #else
              return texture2D(buffer, fragCoord.xy);
            #endif
          }
          vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
            if ( isinf( attenuationDistance ) ) {
              // Attenuation distance is +∞, i.e. the transmitted color is not attenuated at all.
              return radiance;
            } else {
              // Compute light attenuation using Beer's law.
              vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
              vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance ); // Beer's law
              return transmittance * radiance;
            }
          }
          vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
            const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
            const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
            const in vec3 attenuationColor, const in float attenuationDistance ) {
            vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
            vec3 refractedRayExit = position + transmissionRay;
            // Project refracted vector on the framebuffer, while mapping to normalized device coordinates.
            vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
            vec2 refractionCoords = ndcPos.xy / ndcPos.w;
            refractionCoords += 1.0;
            refractionCoords /= 2.0;
            // Sample framebuffer to get pixel the refracted ray hits.
            vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
            vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
            // Get the specular component.
            vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
            return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
          }
        #endif
`),n.fragmentShader=n.fragmentShader.replace("#include <transmission_fragment>",`  
        // Improve the refraction to use the world pos
        material.transmission = _transmission;
        material.transmissionAlpha = 1.0;
        material.thickness = thickness;
        material.attenuationDistance = attenuationDistance;
        material.attenuationColor = attenuationColor;
        #ifdef USE_TRANSMISSIONMAP
          material.transmission *= texture2D( transmissionMap, vUv ).r;
        #endif
        #ifdef USE_THICKNESSMAP
          material.thickness *= texture2D( thicknessMap, vUv ).g;
        #endif
        
        vec3 pos = vWorldPosition;
        float runningSeed = 0.0;
        vec3 v = normalize( cameraPosition - pos );
        vec3 n = inverseTransformDirection( normal, viewMatrix );
        vec3 transmission = vec3(0.0);
        float transmissionR, transmissionB, transmissionG;
        float randomCoords = rand(runningSeed++);
        float thickness_smear = thickness * max(pow(roughnessFactor, 0.33), anisotropicBlur);
        vec3 distortionNormal = vec3(0.0);
        vec3 temporalOffset = vec3(time, -time, -time) * temporalDistortion;
        if (distortion > 0.0) {
          distortionNormal = distortion * vec3(snoiseFractal(vec3((pos * distortionScale + temporalOffset))), snoiseFractal(vec3(pos.zxy * distortionScale - temporalOffset)), snoiseFractal(vec3(pos.yxz * distortionScale + temporalOffset)));
        }
        for (float i = 0.0; i < ${e}.0; i ++) {
          vec3 sampleNorm = normalize(n + roughnessFactor * roughnessFactor * 2.0 * normalize(vec3(rand(runningSeed++) - 0.5, rand(runningSeed++) - 0.5, rand(runningSeed++) - 0.5)) * pow(rand(runningSeed++), 0.33) + distortionNormal);
          transmissionR = getIBLVolumeRefraction(
            sampleNorm, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
            pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness  + thickness_smear * (i + randomCoords) / float(${e}),
            material.attenuationColor, material.attenuationDistance
          ).r;
          transmissionG = getIBLVolumeRefraction(
            sampleNorm, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
            pos, modelMatrix, viewMatrix, projectionMatrix, material.ior  * (1.0 + chromaticAberration * (i + randomCoords) / float(${e})) , material.thickness + thickness_smear * (i + randomCoords) / float(${e}),
            material.attenuationColor, material.attenuationDistance
          ).g;
          transmissionB = getIBLVolumeRefraction(
            sampleNorm, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
            pos, modelMatrix, viewMatrix, projectionMatrix, material.ior * (1.0 + 2.0 * chromaticAberration * (i + randomCoords) / float(${e})), material.thickness + thickness_smear * (i + randomCoords) / float(${e}),
            material.attenuationColor, material.attenuationDistance
          ).b;
          transmission.r += transmissionR;
          transmission.g += transmissionG;
          transmission.b += transmissionB;
        }
        transmission /= ${e}.0;
        totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
`)},Object.keys(this.uniforms).forEach(n=>Object.defineProperty(this,n,{get:()=>this.uniforms[n].value,set:i=>this.uniforms[n].value=i}))}}const Rv=ye.forwardRef(({buffer:r,transmissionSampler:e=!1,backside:t=!1,side:n=Zi,transmission:i=1,thickness:s=0,backsideThickness:a=0,backsideEnvMapIntensity:c=1,samples:u=10,resolution:h,backsideResolution:f,background:p,anisotropy:m,anisotropicBlur:g,...y},M)=>{Iy({MeshTransmissionMaterial:XC});const x=ye.useRef(null),[_]=ye.useState(()=>new WC),E=Cv(f||h),w=Cv(h);let T,O,P,I;return Rh(N=>{x.current.time=N.clock.elapsedTime,x.current.buffer===w.texture&&!e&&(I=x.current.__r3f.parent,I&&(P=N.gl.toneMapping,T=N.scene.background,O=x.current.envMapIntensity,N.gl.toneMapping=bi,p&&(N.scene.background=p),I.material=_,t&&(N.gl.setRenderTarget(E),N.gl.render(N.scene,N.camera),I.material=x.current,I.material.buffer=E.texture,I.material.thickness=a,I.material.side=Pn,I.material.envMapIntensity=c),N.gl.setRenderTarget(w),N.gl.render(N.scene,N.camera),I.material=x.current,I.material.thickness=s,I.material.side=n,I.material.buffer=w.texture,I.material.envMapIntensity=O,N.scene.background=T,N.gl.setRenderTarget(null),N.gl.toneMapping=P))}),ye.useImperativeHandle(M,()=>x.current,[]),ye.createElement("meshTransmissionMaterial",Po({args:[u,e],ref:x},y,{buffer:r||w.texture,_transmission:i,anisotropicBlur:g??m,transmission:e?i:0,thickness:s,side:n}))}),Hi=1e-5;function YC(r,e,t){const n=new Br,i=t-Hi;return n.absarc(Hi,Hi,Hi,-Math.PI/2,-Math.PI,!0),n.absarc(Hi,e-i*2,Hi,Math.PI,Math.PI/2,!0),n.absarc(r-i*2,e-i*2,Hi,Math.PI/2,0,!0),n.absarc(r-i*2,Hi,Hi,0,-Math.PI/2,!0),n}const qC=ye.forwardRef(function({args:[e=1,t=1,n=1]=[],radius:i=.05,steps:s=1,smoothness:a=4,bevelSegments:c=4,creaseAngle:u=.4,children:h,...f},p){const m=ye.useMemo(()=>YC(e,t,i),[e,t,i]),g=ye.useMemo(()=>({depth:n-i*2,bevelEnabled:!0,bevelSegments:c*2,steps:s,bevelSize:i-Hi,bevelThickness:i,curveSegments:a}),[n,i,a]),y=ye.useRef(null);return ye.useLayoutEffect(()=>{y.current&&(y.current.center(),zC(y.current,u))},[m,g]),ye.createElement("mesh",Po({ref:p},f),ye.createElement("extrudeGeometry",{ref:y,args:[m,g]}),h)}),Qy=[{accent:"#7dd3fc",rim:"#ffffff",position:[0,.1,0],scale:1.08,orbit:.3},{accent:"#60a5fa",rim:"#a78bfa",position:[-1.9,.7,-.4],scale:.98,orbit:.55},{accent:"#a78bfa",rim:"#f8fafc",position:[1.7,.2,-.7],scale:.92,orbit:.72},{accent:"#86efac",rim:"#7dd3fc",position:[.4,-.35,-.8],scale:1.18,orbit:.86},{accent:"#facc15",rim:"#60a5fa",position:[-1.35,-.2,-.5],scale:.94,orbit:1.02},{accent:"#7dd3fc",rim:"#86efac",position:[1.35,.12,-.25],scale:1.06,orbit:1.18},{accent:"#f8fafc",rim:"#a78bfa",position:[0,.78,.08],scale:.9,orbit:1.34}],Ei=[new D(2.2,.25,.4),new D(-2.15,-.3,.4),new D(.4,2.05,-.2),new D(-.2,-2.1,.3),new D(1.3,-1.35,-.75),new D(-1.55,1.15,-.55),new D(1.45,1.1,.92),new D(-1.3,-1.15,.95)];function ZC({color:r}){const e=ye.useRef(),t=ye.useMemo(()=>{const n=new Float32Array(660);for(let i=0;i<220;i+=1){const s=4+Math.random()*9,a=Math.random()*Math.PI*2,c=Math.acos(2*Math.random()-1);n[i*3]=s*Math.sin(c)*Math.cos(a),n[i*3+1]=s*Math.cos(c)*.45,n[i*3+2]=s*Math.sin(c)*Math.sin(a)}return n},[]);return Rh(n=>{e.current&&(e.current.rotation.y=n.clock.elapsedTime*.03,e.current.rotation.x=Math.sin(n.clock.elapsedTime*.1)*.08)}),lt.jsxs("points",{ref:e,children:[lt.jsx("bufferGeometry",{children:lt.jsx("bufferAttribute",{attach:"attributes-position",count:t.length/3,array:t,itemSize:3})}),lt.jsx("pointsMaterial",{color:r,size:.045,transparent:!0,opacity:.55,depthWrite:!1})]})}function jC({sceneStateRef:r}){const e=ye.useRef(),t=ye.useRef([]);return Rh((n,i)=>{const s=r.current.sectionIndex||0,a=r.current.sectionProgress||0,c=Qy[s];t.current.forEach((u,h)=>{if(!u)return;const f=s>0?.18+h*.06:.08;u.material.opacity=Ms.damp(u.material.opacity,f,4.5,i),u.position.x=Ms.damp(u.position.x,(h-1.5)*1.8+Math.sin(n.clock.elapsedTime*.5+h)*.25,4,i),u.position.y=Ms.damp(u.position.y,(h%2===0?1:-1)*(.7+h*.18)+Math.cos(n.clock.elapsedTime*.7+h)*.14,4,i),u.rotation.z+=i*(.08+h*.02),u.material.color.lerp(new Pe(c.rim),.02+a*.02)}),e.current&&(e.current.rotation.y+=i*.05)}),lt.jsx("group",{ref:e,children:[0,1,2,3].map(n=>lt.jsx(qC,{ref:i=>{t.current[n]=i},args:[1.1+n*.22,.14,.9],radius:.16,smoothness:5,position:[0,0,-2-n*.22],children:lt.jsx("meshPhysicalMaterial",{color:n%2===0?"#7dd3fc":"#ffffff",transparent:!0,opacity:.12,roughness:.08,metalness:.05,transmission:.94,thickness:1.6,clearcoat:1,clearcoatRoughness:.06})},n))})}function JC({sceneStateRef:r,reducedMotion:e}){const t=ye.useRef(),n=ye.useRef(),i=ye.useRef(),s=ye.useRef([]),{camera:a}=Zu(),c=ye.useMemo(()=>[[Ei[0],Ei[2]],[Ei[1],Ei[3]],[Ei[4],Ei[6]],[Ei[5],Ei[7]]],[]);return Rh((u,h)=>{const f=r.current.sectionIndex||0;r.current.sectionProgress;const p=Qy[f],m=r.current.progress||0,g=r.current.mouse||{x:0,y:0},y=Ms.damp;if(t.current){t.current.position.x=y(t.current.position.x,p.position[0]+(e?0:g.x*.8),4,h),t.current.position.y=y(t.current.position.y,p.position[1]+(e?0:-g.y*.6),4,h),t.current.position.z=y(t.current.position.z,p.position[2],4,h);const M=y(t.current.scale.x,p.scale,4.6,h);t.current.scale.setScalar(M),t.current.rotation.y+=h*(e?.05:.18+p.orbit*.08),t.current.rotation.x=y(t.current.rotation.x,e?.08:g.y*.2+m*.12,4,h)}n.current&&(n.current.rotation.x+=h*.18,n.current.rotation.y+=h*.22),i.current&&(i.current.rotation.z+=h*.12,i.current.scale.setScalar(1+Math.sin(u.clock.elapsedTime*1.8)*.045)),s.current.forEach((M,x)=>{if(!M)return;const _=Ei[x],E=e?0:Math.sin(u.clock.elapsedTime*1.2+x)*.08;M.position.set(_.x,_.y+E,_.z),M.scale.setScalar(1+Math.sin(u.clock.elapsedTime*2+x)*.08)}),a.position.x=y(a.position.x,e?0:g.x*.7,4,h),a.position.y=y(a.position.y,e?0:-g.y*.4,4,h),a.position.z=y(a.position.z,10.5-f*.25+Math.sin(m*Math.PI)*.2,4,h),a.lookAt(0,0,0)}),lt.jsxs(lt.Fragment,{children:[lt.jsx("fog",{attach:"fog",args:["#05070a",9,24]}),lt.jsx("ambientLight",{intensity:.55}),lt.jsx("directionalLight",{position:[5,6,5],intensity:2.2,color:"#dff5ff"}),lt.jsx("pointLight",{position:[-5,1,-4],intensity:18,distance:18,color:"#60a5fa"}),lt.jsx("pointLight",{position:[4,-2,5],intensity:16,distance:16,color:"#a78bfa"}),lt.jsxs("group",{ref:t,children:[lt.jsxs("mesh",{ref:i,children:[lt.jsx("torusGeometry",{args:[2.2,.05,32,120]}),lt.jsx("meshBasicMaterial",{color:"#7dd3fc",transparent:!0,opacity:.24})]}),lt.jsxs("mesh",{ref:n,children:[lt.jsx("icosahedronGeometry",{args:[1.5,1]}),lt.jsx(Rv,{transmission:.98,thickness:1.2,roughness:.08,chromaticAberration:.03,anisotropicBlur:.1,color:"#9bd8ff",backside:!0,backsideThickness:.3})]}),lt.jsxs("mesh",{scale:1.35,children:[lt.jsx("sphereGeometry",{args:[1.25,48,48]}),lt.jsx("meshBasicMaterial",{color:"#7dd3fc",transparent:!0,opacity:.08})]}),Ei.map((u,h)=>lt.jsxs("mesh",{ref:f=>{s.current[h]=f},position:u.toArray(),children:[lt.jsx("sphereGeometry",{args:[.16,20,20]}),lt.jsx(Rv,{transmission:.96,thickness:.8,roughness:.04,color:h%2===0?"#f8fafc":"#7dd3fc"})]},`${u.x}-${u.y}-${u.z}`)),Ei.map((u,h)=>lt.jsx(bv,{points:[[0,0,0],u.toArray()],color:"#7dd3fc",transparent:!0,opacity:.22,lineWidth:1},`core-${h}`)),c.map((u,h)=>lt.jsx(bv,{points:u.map(f=>f.toArray()),color:"#ffffff",transparent:!0,opacity:.14,lineWidth:1},`pair-${h}`))]}),lt.jsx(jC,{sceneStateRef:r}),lt.jsx(ZC,{color:"#7dd3fc"})]})}function KC({sceneStateRef:r,reducedMotion:e}){return lt.jsx("div",{className:"pointer-events-none fixed inset-0 z-0",children:lt.jsxs(BC,{dpr:[1,2],camera:{position:[0,0,10.5],fov:38},gl:{antialias:!0,alpha:!0,powerPreference:"high-performance"},children:[lt.jsx("color",{attach:"background",args:["#05070a"]}),lt.jsx(JC,{sceneStateRef:r,reducedMotion:e})]})})}const tR=ye.memo(KC);export{tR as default};
