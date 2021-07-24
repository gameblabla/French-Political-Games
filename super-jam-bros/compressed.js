function f86( Pa, Pb ){ return Math.atan2(Pb[1]-Pa[1],Pb[0]-Pa[0]) ;}
function f127(x,y,z,w){ this.x=x;this.y=y;this.z=z;this.w=w;}
function f87(value){ return (value & (value - 1))==0;}
function f128(degrees){ return degrees * Math.PI / 180;}
function f129(x1,y1, x2,y2){ var a=x1 - x2;var b=y1 - y2;return Math.sqrt( a*a + b*b );}
function f102 (x,y){ if( x==0 && y==0 ) return [x,y];var angle=Math.atan2(y,x);var nx=Math.cos(angle);var ny=Math.sin(angle);return [nx, ny];}
function f103 ( vector ){ var new_vector=new f127();var rec_scalar;if ( vector.x==0.0 && vector.y==0.0 && vector.z==0.0 ){ new_vector.x=0.0;new_vector.y=0.0;new_vector.z=0.0;return new_vector;}
rec_scalar=1.0/Math.sqrt( vector.x * vector.x + vector.y * vector.y + vector.z * vector.z );new_vector.x=vector.x * rec_scalar;new_vector.y=vector.y * rec_scalar;new_vector.z=vector.z * rec_scalar;return new_vector;}
function f109(p1,p2,p3){ var v1=new f127();var v2=new f127();var normal=new f127();v1.x=p2.x - p3.x;v1.y=p2.y - p3.y;v1.z=p2.z - p3.z;v2.x=p1.x - p3.x;v2.y=p1.y - p3.y;v2.z=p1.z - p3.z;normal.x=v1.y * v2.z - v1.z * v2.y;normal.y=v1.z * v2.x - v1.x * v2.z;normal.z=v1.x * v2.y - v1.y * v2.x;return f103(normal);}
var v30;function se_start(sv_256){ v30=document.getElementById(sv_256);f64();f74 ();f71();f77 ();f61 ();f49 ();f90();f94 ();f36()
f56();f33();f67();requestAnimationFrame(f80);}
var v5=0;var v22=new Array();var v34="";var v3=0;var v8=1;var v17;function f71(){ v3=1;v5=1;try { window.AudioContext=window.AudioContext||window.webkitAudioContext;v17=new AudioContext();}
catch(e) { alert('Web Audio API is not supported in this browser');v5=0;return;}
var myTempAudio=document.createElement('audio');if (myTempAudio.canPlayType('audio/mp4')){ v34="mp4";return;}
if (myTempAudio.canPlayType('audio/mp3')){ v34="mp3";return;}
if (myTempAudio.canPlayType('audio/ogg')){ v34="ogg";return;}
alert("Sound Not Supported");v5=0;}
function f132() {}
function f72 (ID, SoundPath){ if (v5==0) return;resources_loading++;var Path=""+SoundPath+"."+v34;console.log(ID+' sound '+Path);var request=new XMLHttpRequest();request.open('GET', Path, true);request.responseType='arraybuffer';request.onload=function() { v17.decodeAudioData(request.response,
function(buffer) { v22.push=null;v22[ID]=buffer;resources_loading--;}, f132);}
request.send();}
var v9=1.0;function f45(Vol){ v9=Vol;}
function f73 (ID){ if (v5==0 || v8==0) return;var source=v17.createBufferSource();if (source==null) return;source.buffer=v22[ID];var volumeNode=v17.createGain();volumeNode.gain.value=v9*0.25;source.connect(volumeNode);volumeNode.connect(v17.destination);source.connect(v17.destination);source.start ? source.start(0) : source.noteOn(0);}
var v23=null;var v31=false;var v10=null;function f74(){ v23=new Audio();v23.addEventListener('ended', function() { this.currentTime=0;if (v31==true)this.play();}, false);if (v5==0 ) return;}
function f75(){ if (v5==0 || v23==null) return;v23.volume=0.0;v31=false;v10="";}
var v10="";function f76(name,loop){ if (v5==0 || v8==0) return;if (v10==name) return;v10=name;console.log(''+name+'.'+v34);f75();v23.src=''+name+'.'+v34;v23.volume=1.0;v23.play();v31=loop;}
var screensize={x:0, y:0};var sv_236={x:0, y:0};var scaledsize={x:0, y:0};var sv_2412={x:0, y:0};function f46 (){ if( typeof( window.innerWidth )=="number" ) { return window.innerWidth;}
if( document.documentElement && ( document.documentElement.clientWidth || document.documentElement.clientHeight ) ) { return document.documentElement.clientWidth;}
if( document.body && ( document.body.clientWidth || document.body.clientHeight ) ) { return document.body.clientWidth;}
return 100;}
function f40 (){ if( typeof( window.innerWidth )=='number' ) { myHeight=window.innerHeight;}
if( document.documentElement && ( document.documentElement.clientWidth || document.documentElement.clientHeight ) ) { return document.documentElement.clientHeight;}
if( document.body && ( document.body.clientWidth || document.body.clientHeight ) ) { return document.body.clientHeight;}
return 100;}
function f20(){ window.onresize=function() { f41();}
window.addEventListener("orientationchange", function (e) { window.setTimeout(function() { f41();}, 800);});}
function f41(){ screensize.x=f46();screensize.y=f40();v6=window.devicePixelRatio || 1;if ( v6>1.0) v6=1.0;v30.width=screensize.x * v6;v30.height=screensize.y * v6;v30.style.width="100%";v30.style.height="100%";v30.focus();scaledsize.y=800;scaledsize.x=screensize.x*scaledsize.y/screensize.y;if (scaledsize.x<v2) scaledsize.x=v2;sv_236.x=screensize.x *0.5;sv_236.y=screensize.y *0.5;sv_2412.x=scaledsize.x *0.5;sv_2412.y=scaledsize.y *0.5;}
var gl;var v24=true;var v12=false;var v4=false;var v13=false;var v15=false;var v6=1;var v2=500;function f77 (index){ try { gl=v30.getContext("webgl", { premultipliedAlpha: v4 , antialias: v12,alpha: v24, stencil: v15, preserveDrawingBuffer: v13 });} catch(e) {}
if (!gl) { alert("Impossible d'initialiser le WebGL. Il est possible que votre navigateur ne supporte pas cette fonctionnalité.");}
f41();f20();}
var v39=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];function f133(width,height){ this.buffer;this.texture;this.width=width;this.height=height;this.vertex;this.uv;this.index
}
function f47 (id){ gl.bindTexture(gl.TEXTURE_2D, v39[id].texture);}
function f59 (id){ if (id==-1) {gl.bindFramebuffer(gl.FRAMEBUFFER, null);return;}
gl.bindFramebuffer(gl.FRAMEBUFFER, v39[id].buffer);}
function f130(id){ gl.bindTexture(gl.TEXTURE_2D, v39[id].texture);f17();if (shader[v19].TextureCoor !=-1){ gl.bindBuffer(gl.ARRAY_BUFFER, v39[id].uv);gl.vertexAttribPointer(shader[v19].TextureCoor, v39[id].uv.itemSize, gl.FLOAT, false, 0, 0);}
gl.bindBuffer(gl.ARRAY_BUFFER, v39[id].vertex);gl.vertexAttribPointer(shader[v19].VertexPos, v39[id].vertex.itemSize, gl.FLOAT, false, 0, 0);gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, v39[id].index);gl.drawElements(gl.TRIANGLES, v39[id].index.numItems, gl.UNSIGNED_SHORT, 0);v33 +=2;}
function f110(id, width,height){ v39[id]=new f133(width,height);v39[id].buffer=gl.createFramebuffer();gl.bindFramebuffer(gl.FRAMEBUFFER, v39[id].buffer);v39[id].texture=gl.createTexture();gl.bindTexture(gl.TEXTURE_2D, v39[id].texture);gl.texImage2D( gl.TEXTURE_2D, 0, gl.RGBA, width,height, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);gl.framebufferTexture2D( gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, v39[id].texture, 0);gl.colorMask(true, true, true, true);gl.clearColor(0.0, 0.0, 0.0, 1.0);gl.clear(gl.COLOR_BUFFER_BIT);v39[id].vertex=gl.createBuffer();gl.bindBuffer(gl.ARRAY_BUFFER, v39[id].vertex);var vertices=[ -width*0.5, height*0.5, -0.2,
width*0.5, height*0.5, -0.2,
width*0.5, -height*0.5, -0.2,
-width*0.5, -height*0.5, -0.2 ];gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);v39[id].vertex.itemSize=3;v39[id].vertex.numItems=4;v39[id].uv=gl.createBuffer();gl.bindBuffer(gl.ARRAY_BUFFER, v39[id].uv);var textureCoords=[ 0.0, 0.0, 1.0, 0.0, 1.0, 1.0, 0.0, 1.0 ];gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(textureCoords), gl.STATIC_DRAW);v39[id].uv.itemSize=2;v39[id].uv.numItems=4;v39[id].index=gl.createBuffer();gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, v39[id].index);var ndices=[ 0, 1, 2, 0, 2, 3 ];gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(ndices), gl.STATIC_DRAW);v39[id].index.itemSize=1;v39[id].index.numItems=6;gl.bindFramebuffer(gl.FRAMEBUFFER, null);}
var v27=new Array();var v7=true;function f111(){ this.path;this.texture;this.width=0;this.height=0;this.vertex;this.uv;this.index
this.valide=false;this.Processing=false;}
function f15 (width,height){ if (width !=4 && width !=8 && width !=16 && width !=32 && width !=64 && width !=128 && width !=256 && width !=512 && width !=1024 && width !=2048 ) return gl.NEAREST;if (height !=4 && height !=8 && height !=16 && height !=32 && height !=64 && height !=128 && height !=256 && height !=512 && height !=1024 && height !=2048 ) return gl.NEAREST;return gl.LINEAR;}
function f21 (id){ var width=v27[id].texture.image.width;var height=v27[id].texture.image.height;v27[id].width=width;v27[id].height=height;gl.bindTexture(gl.TEXTURE_2D, v27[id].texture);gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, v27[id].texture.image);if (f87(width) && f87(height)) { if (v7==true){ gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);gl.generateMipmap(gl.TEXTURE_2D);}
else
{ gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);}
} else { gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);{ gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);}
}
gl.bindTexture(gl.TEXTURE_2D, null);v27[id].vertex=gl.createBuffer();gl.bindBuffer(gl.ARRAY_BUFFER, v27[id].vertex);var vertices=[ -width*0.5, height*0.5, -0.2,
width*0.5, height*0.5, -0.2,
width*0.5, -height*0.5, -0.2,
-width*0.5, -height*0.5, -0.2 ];gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);v27[id].vertex.itemSize=3;v27[id].vertex.numItems=4;v27[id].uv=gl.createBuffer();gl.bindBuffer(gl.ARRAY_BUFFER, v27[id].uv);var textureCoords=[ 0.0, 0.0, 1.0, 0.0, 1.0, 1.0, 0.0, 1.0 ];gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(textureCoords), gl.STATIC_DRAW);v27[id].uv.itemSize=2;v27[id].uv.numItems=4;v27[id].index=gl.createBuffer();gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, v27[id].index);var ndices=[ 0, 1, 2, 0, 2, 3 ];gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(ndices), gl.STATIC_DRAW);v27[id].index.itemSize=1;v27[id].index.numItems=6;v27[id].valide=true;resources_loading--;}
function f16 (path){ for (var i=1000;i<2000;i++){ if (v27[i].path==path) {console.log("Same Texture found "+path);return i;}
}
for (var i=1000;i<2000;i++){ if (v27[i].Processing==false){ v27[i].Processing=true;resources_loading++;v27[i].path=path;v27[i].texture=gl.createTexture();v27[i].texture.image=new Image();v27[i].texture.image.onload=function() { f21(i);resources_loaded ++;}
v27[i].texture.image.src=path;return i;}
}
}
function f48 (id, path){ resources_loading++;v27[id].path=path+"?"+Math.random()*999999;v27[id].texture=gl.createTexture();v27[id].texture.image=new Image();v27[id].texture.image.onload=function() { f21(id);resources_loaded ++;}
v27[id].texture.image.onerror=function() { alert("Error Image "+path);}
v27[id].texture.image.src=path;}
function f49 (){ var MaxTexture=2000;for (var i=0;i<MaxTexture;i++){ v27.push();v27[i]=new f111();}
}
function f50(id, level){ if ( v27[id].valide==false) return;if (level==0) gl.activeTexture(gl.TEXTURE0);else gl.activeTexture(gl.TEXTURE1);gl.bindTexture(gl.TEXTURE_2D, v27[id].texture);}
function f51 (id){ if ( v27[id].valide==false) return;f50(id, 0);f17();if (shader[v19].TextureCoor !=-1){ gl.bindBuffer(gl.ARRAY_BUFFER, v27[id].uv);gl.vertexAttribPointer(shader[v19].TextureCoor, v27[id].uv.itemSize, gl.FLOAT, false, 0, 0);}
gl.bindBuffer(gl.ARRAY_BUFFER, v27[id].vertex);gl.vertexAttribPointer(shader[v19].VertexPos, v27[id].vertex.itemSize, gl.FLOAT, false, 0, 0);gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, v27[id].index);gl.drawElements(gl.TRIANGLES, v27[id].index.numItems, gl.UNSIGNED_SHORT, 0);v33 +=2;}
function f122 (TextureID, X,Y,SCALE){ var IsClicked=false;var width=v27[TextureID].width*SCALE*0.5;var height=v27[TextureID].height*SCALE*0.5;if (v37.x>X-width && v37.x<X+width && v37.y>Y-height && v37.y<Y+height ){f55 (2,2,2,1);if (v37.click==1){IsClicked=true;v37.click=-1;}}
else
f55 (1,1,1,1);f112();f52(X,Y,0);f104(SCALE,SCALE,1);f51 (TextureID);f123();f55 (1,1,1,1);return IsClicked;}
var v38=mat4.create();var v35=mat4.create();var v20=mat3.create();var v25=mat4.create();var v21=mat4.create();var v18=[];function f112(){ var copy=mat4.create();mat4.copy(copy,v35);v18.push(copy);}
function f123(){ if (v18.length==0) { throw "Invalid f123!";}
v35=v18.pop();}
function f52 (x,y,z){ mat4.translate(v35,v35, [x, y, z]);}
function f104 (x,y,z){ mat4.scale(v35,v35, [x, y, z]);}
function f88 (Angle, x,y,z){ mat4.rotate(v35,v35, f128(Angle), [x, y, z]);}
function f53 (width, height){ if (width >0 && height>0){ gl.viewport(0, 0, width, height);mat4.ortho(v38, 0, width, height, 0, 0.1, 800.0)
}
else
{ gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);mat4.ortho(v38, 0, scaledsize.x, scaledsize.y, 0, 0.1, 800.0)
}
mat4.identity(v35);mat4.identity(v21);gl.disable(gl.DEPTH_TEST);gl.enable(gl.BLEND);gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);}
var v14=5;var v16=3000;function f13 (fov, width, height){ if (width >0 && height>0){ gl.viewport(0, 0, width, height);}
else
{ gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);}
mat4.perspective(v38, f128(fov), scaledsize.x / scaledsize.y, v14, v16 );mat4.identity(v35);gl.enable(gl.DEPTH_TEST);gl.disable(gl.BLEND);gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);}
var v28=[];function f136(EyeX,EyeY,EyeZ, CenterX,CenterY,CenterZ, UpX,UpY,UpZ){ v28[0]=EyeX;v28[1]=EyeY;v28[2]=EyeZ;mat4.lookAt(v21, [EyeX,EyeY,EyeZ], [CenterX,CenterY,CenterZ], [UpX,UpY,UpZ]);}
var v32=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];var A=0;var B=1;var C=2;var D=3;var v41=0;var LEFT=1;var v40=2;var TOP=3;var BACK=4;var v42=5;function f60(frustum, side){ var magnitude=Math.sqrt( frustum[side][A] * frustum[side][A] +
frustum[side][B] * frustum[side][B] +
frustum[side][C] * frustum[side][C] );frustum[side][A] /=magnitude;frustum[side][B] /=magnitude;frustum[side][C] /=magnitude;frustum[side][D] /=magnitude;}
function f78(){ mat4.multiply(v25,v21,v35);var clip=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];clip[ 0]=v25[ 0] * v38[ 0] + v25[ 1] * v38[ 4] + v25[ 2] * v38[ 8] + v25[ 3] * v38[12];clip[ 1]=v25[ 0] * v38[ 1] + v25[ 1] * v38[ 5] + v25[ 2] * v38[ 9] + v25[ 3] * v38[13];clip[ 2]=v25[ 0] * v38[ 2] + v25[ 1] * v38[ 6] + v25[ 2] * v38[10] + v25[ 3] * v38[14];clip[ 3]=v25[ 0] * v38[ 3] + v25[ 1] * v38[ 7] + v25[ 2] * v38[11] + v25[ 3] * v38[15];clip[ 4]=v25[ 4] * v38[ 0] + v25[ 5] * v38[ 4] + v25[ 6] * v38[ 8] + v25[ 7] * v38[12];clip[ 5]=v25[ 4] * v38[ 1] + v25[ 5] * v38[ 5] + v25[ 6] * v38[ 9] + v25[ 7] * v38[13];clip[ 6]=v25[ 4] * v38[ 2] + v25[ 5] * v38[ 6] + v25[ 6] * v38[10] + v25[ 7] * v38[14];clip[ 7]=v25[ 4] * v38[ 3] + v25[ 5] * v38[ 7] + v25[ 6] * v38[11] + v25[ 7] * v38[15];clip[ 8]=v25[ 8] * v38[ 0] + v25[ 9] * v38[ 4] + v25[10] * v38[ 8] + v25[11] * v38[12];clip[ 9]=v25[ 8] * v38[ 1] + v25[ 9] * v38[ 5] + v25[10] * v38[ 9] + v25[11] * v38[13];clip[10]=v25[ 8] * v38[ 2] + v25[ 9] * v38[ 6] + v25[10] * v38[10] + v25[11] * v38[14];clip[11]=v25[ 8] * v38[ 3] + v25[ 9] * v38[ 7] + v25[10] * v38[11] + v25[11] * v38[15];clip[12]=v25[12] * v38[ 0] + v25[13] * v38[ 4] + v25[14] * v38[ 8] + v25[15] * v38[12];clip[13]=v25[12] * v38[ 1] + v25[13] * v38[ 5] + v25[14] * v38[ 9] + v25[15] * v38[13];clip[14]=v25[12] * v38[ 2] + v25[13] * v38[ 6] + v25[14] * v38[10] + v25[15] * v38[14];clip[15]=v25[12] * v38[ 3] + v25[13] * v38[ 7] + v25[14] * v38[11] + v25[15] * v38[15];v32[v41][A]=clip[ 3] - clip[ 0];v32[v41][B]=clip[ 7] - clip[ 4];v32[v41][C]=clip[11] - clip[ 8];v32[v41][D]=clip[15] - clip[12];f60(v32, v41);v32[LEFT][A]=clip[ 3] + clip[ 0];v32[LEFT][B]=clip[ 7] + clip[ 4];v32[LEFT][C]=clip[11] + clip[ 8];v32[LEFT][D]=clip[15] + clip[12];f60(v32, LEFT);v32[v40][A]=clip[ 3] + clip[ 1];v32[v40][B]=clip[ 7] + clip[ 5];v32[v40][C]=clip[11] + clip[ 9];v32[v40][D]=clip[15] + clip[13];f60(v32, v40);v32[TOP][A]=clip[ 3] - clip[ 1];v32[TOP][B]=clip[ 7] - clip[ 5];v32[TOP][C]=clip[11] - clip[ 9];v32[TOP][D]=clip[15] - clip[13];f60(v32, TOP);v32[BACK][A]=clip[ 3] - clip[ 2];v32[BACK][B]=clip[ 7] - clip[ 6];v32[BACK][C]=clip[11] - clip[10];v32[BACK][D]=clip[15] - clip[14];f60(v32, BACK);v32[v42][A]=clip[ 3] + clip[ 2];v32[v42][B]=clip[ 7] + clip[ 6];v32[v42][C]=clip[11] + clip[10];v32[v42][D]=clip[15] + clip[14];f60(v32, v42);}
function f54(xa, ya, za, xb, yb, zb ){ for(var i=0;i < 6;i++ ){ if(v32[i][A] * (xa) + v32[i][B] * (yb) + v32[i][C] * (za) + v32[i][D] > 0) continue;if(v32[i][A] * (xb) + v32[i][B] * (yb) + v32[i][C] * (za) + v32[i][D] > 0) continue;if(v32[i][A] * (xa) + v32[i][B] * (ya) + v32[i][C] * (za) + v32[i][D] > 0) continue;if(v32[i][A] * (xb) + v32[i][B] * (ya) + v32[i][C] * (za) + v32[i][D] > 0) continue;if(v32[i][A] * (xa) + v32[i][B] * (yb) + v32[i][C] * (zb) + v32[i][D] > 0) continue;if(v32[i][A] * (xb) + v32[i][B] * (yb) + v32[i][C] * (zb) + v32[i][D] > 0) continue;if(v32[i][A] * (xa) + v32[i][B] * (ya) + v32[i][C] * (zb) + v32[i][D] > 0) continue;if(v32[i][A] * (xb) + v32[i][B] * (ya) + v32[i][C] * (zb) + v32[i][D] > 0) continue;return 0;}
return 1;}
function f26( x, y, z, radius ){ for(var i=0;i < 6;i++ ){ if( v32[i][A] * x + v32[i][B] * y + v32[i][C] * z + v32[i][D] <=-radius ){ return 0;}
}
return 1;}
window.requestAnimationFrame=window.requestAnimationFrame || window.mozRequestAnimationFrame ||
window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;var v36=0;var v43=0;var v33;var v29=0;function f79(){ v33=0;v19=-1;f18();f65 ();}
function f80(){ var timeNow=new Date().getTime();var elapsed=timeNow - (v36 || timeNow) ;v36=timeNow;if (elapsed>45) elapsed=45;if (elapsed<0.0001) elapsed=0.0001;v43=elapsed;v29=v29 *0.9 + (1000/v43)*0.1
if (v29>60) v29=60;if (v29<10) v29=10;f79()
if (f126()==1)
f100();requestAnimationFrame(f80);}
var shader=new Array;var v26=["color","texture","font","sprites","tiles","particles","retro"]
var v19=-1;function f124(){ this.prog;this.valide=false;this.vsh="";this.fsh="";this.VertexPos;this.TextureCoor;this.Normals;this.PrMatrix;this.MvMatrix;this.NoMatrix;this.CaMatrix;this.Texture0;this.Texture1;this.Texture2;this.Colors;this.LightDir;}
function f61(){ for(var i=0;i<1000;i++) { shader.push;shader[i]=new f124();}
for(var i=0;i<v26.length;i++) { f62 (i, v26[i]);}
}
function f14 (id){ shader[id].VertexPos=gl.getAttribLocation(shader[id].prog, "VertexPos");if (shader[id].VertexPosNoMatrix !=-1) gl.enableVertexAttribArray(shader[id].VertexPos);shader[id].TextureCoor=gl.getAttribLocation(shader[id].prog, "TextureCoor");if (shader[id].TextureCoor !=-1) gl.enableVertexAttribArray(shader[id].TextureCoor);shader[id].Normals=gl.getAttribLocation(shader[id].prog, "VertexNormal");if (shader[id].Normals !=-1){ console.log('#### Normal Enabled Shader '+id);}
console.log('f14 '+id+' '+shader[id].TextureCoor);shader[id].ProjMatrix=gl.getUniformLocation(shader[id].prog, "PrMatrix");shader[id].MvMatrix=gl.getUniformLocation(shader[id].prog, "MvMatrix");shader[id].NoMatrix=gl.getUniformLocation(shader[id].prog, "NoMatrix");shader[id].CaMatrix=gl.getUniformLocation(shader[id].prog, "CaMatrix");shader[id].Texture0=gl.getUniformLocation(shader[id].prog, "Texture0");shader[id].Texture1=gl.getUniformLocation(shader[id].prog, "Texture1");shader[id].Texture2=gl.getUniformLocation(shader[id].prog, "Texture2");shader[id].sv_26=gl.getUniformLocation(shader[id].prog, "sv_26");shader[id].sv_32=gl.getUniformLocation(shader[id].prog, "sv_32");shader[id].Colors=gl.getUniformLocation(shader[id].prog, "Colors");shader[id].LightDir=gl.getUniformLocation(shader[id].prog, "LightDir");}
function f27(id){ var vertShader=gl.createShader(gl.VERTEX_SHADER);gl.shaderSource(vertShader, shader[id].vsh);gl.compileShader(vertShader);if(!gl.getShaderParameter(vertShader, gl.COMPILE_STATUS)){ alert("Error Compile Vertex Shader ["+id+"]"+gl.getShaderInfoLog(vertShader));alert( shader[id].vsh);return;}
var fragShader=gl.createShader(gl.FRAGMENT_SHADER);gl.shaderSource(fragShader, shader[id].fsh);gl.compileShader(fragShader);if(!gl.getShaderParameter(fragShader, gl.COMPILE_STATUS)){ alert("Error Compile Fragment Shader ["+id+"]"+gl.getShaderInfoLog(fragShader));alert( shader[id].fsh);return;}
shader[id].prog=gl.createProgram();gl.attachShader (shader[id].prog, vertShader);gl.attachShader (shader[id].prog, fragShader);gl.linkProgram (shader[id].prog);if (!gl.getProgramParameter(shader[id].prog, gl.LINK_STATUS)){ alert("Could not initialise shader: " +id );return;}
gl.useProgram(shader[id].prog);f14(id);gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, null);gl.vertexAttribPointer(shader[id].VertexPos, 1, gl.FLOAT, false, 0, 0);shader[id].valide=true;resources_loading--;shader_loading--;}
function f28(id, name){ var xmlhttp;if (window.XMLHttpRequest){ xmlhttp=new XMLHttpRequest();}
else
{ xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");}
xmlhttp.onreadystatechange=function(){ if (xmlhttp.readyState==4) { shader[id].fsh="\n"+xmlhttp.responseText+"\n";f27(id);}
}
xmlhttp.overrideMimeType("text/plain");xmlhttp.open("GET",""+name+".fsh",true);xmlhttp.send();}
function f29(id, name){ var xmlhttp;if (window.XMLHttpRequest){ xmlhttp=new XMLHttpRequest();}
else
{ xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");}
xmlhttp.onreadystatechange=function(){ if (xmlhttp.readyState==4) { shader[id].vsh="\n"+xmlhttp.responseText+"\n";f28(id, name);}
}
xmlhttp.overrideMimeType("text/plain");xmlhttp.open("GET",""+name+".vsh",true);xmlhttp.send();}
function f62(id, name){ resources_loading++;shader_loading++;f29(id, name);}
function f63(id){ if (shader[id].valide==false) {console.log("Shader Not Valid:"+id);return;}
gl.useProgram(shader[id].prog);v19=id;}
function f17(){ if (shader[v19].ProjMatrix !=null) gl.uniformMatrix4fv(shader[v19].ProjMatrix, false, v38);if (shader[v19].MvMatrix !=null) gl.uniformMatrix4fv(shader[v19].MvMatrix, false, v35);if (shader[v19].CaMatrix !=null) gl.uniformMatrix4fv(shader[v19].CaMatrix, false, v21);if (shader[v19].NoMatrix !=null){ mat3.normalFromMat4(v20,v35);gl.uniformMatrix3fv(shader[v19].NoMatrix , false, v20);}
if (shader[v19].Texture0 !=null) gl.uniform1i(shader[v19].Texture0, 0);if (shader[v19].Texture1 !=null) gl.uniform1i(shader[v19].Texture1, 1);if (shader[v19].Texture2 !=null) gl.uniform1i(shader[v19].Texture2, 2);if (shader[v19].LightDir !=null) gl.uniform3f(shader[v19].LightDir, Shader_Lx,Shader_Ly,Shader_Lz);}
var v1;function f30 (X,Y,Z){ Shader_Lx=X;Shader_Ly=Y;Shader_Lz=Z;}
var v0;function f55 (R,G,B,A){ Shader_R=R;Shader_G=G;Shader_B=B;Shader_A=A;if (v19==-1 || shader[v19].valide==false) return;gl.uniform4f(shader[v19].Colors, R, G, B, A );}
var v37;function f125(){ this.x;this.y;this.old_x;this.old_y;this.real_x;this.real_y;this.button_a=0;this.button_b=0;this.click=0;}
function f18 (){ if (v37.click==1) v37.click=-1;if (v37.button_a==1 && v37.click==0) v37.click=1;if (v37.button_a==0 && v37.click==-1) v37.click=0;}
function f22 (X,Y){ v37.real_x=X;v37.real_y=Y;var TempX=X-v30.offsetLeft;var TempY=Y-v30.offsetTop;if (isNaN(TempX)==false && isNaN(TempY)==false ){ v37.old_x=v37.x;v37.x=X;v37.old_y=v37.y;v37.y=Y;v37.x *=scaledsize.x/screensize.x;v37.y *=scaledsize.y/screensize.y;v37.x=Math.floor(v37.x);if (isNaN(v37.x)==true) v37.x=0;if (v37.x<0) v37.x=0;v37.y=Math.floor(v37.y);if (isNaN(v37.y)==true) v37.y=0;if (v37.y<0) v37.y=0;if (v37.x > scaledsize.x) v37.x=scaledsize.x;if (v37.y > scaledsize.y) v37.y=scaledsize.y;return;}
}
function f31(){ v30.onmousemove=function(e) { f22(e.pageX,e.pageY);}
v30.onmousedown=function(e) { f22(e.pageX,e.pageY);if (e.buttons==1) v37.button_a=1;if (e.buttons==2) v37.button_b=1;}
v30.onmouseup=function(e) { if (e.buttons!=1) v37.button_a=0;if (e.buttons!=2) v37.button_b=0;}
v30.onmouseenter=function(e) { if (e.buttons!=1) v37.button_a=0;if (e.buttons!=2) v37.button_b=0;}
}
function f105(evt) { var touches=evt.changedTouches;for (var i=0;i<touches.length;i++) { f22(touches[i].pageX,touches[i].pageY);}
}
function f32(){ v30.addEventListener("touchstart", function(e){ e.preventDefault();f22(e.changedTouches[0].pageX,e.changedTouches[0].pageY);v37.button_a=1;if (v3==1){ f73(0);f76('blank',false);v3=0;return false;}
return false;}, false);v30.addEventListener("touchmove", function(e){ e.preventDefault();f22(e.changedTouches[0].pageX,e.changedTouches[0].pageY);v37.button_a=1;return false;}, false);v30.addEventListener("touchend", function(e){ e.preventDefault();v37.button_a=0;return false;}, false);v30.addEventListener("touchcancel", function(e){ e.preventDefault();v37.button_a=0;return false;}, false);v30.addEventListener("touchleave", function(e){ e.preventDefault();v37.button_a=0;return false;}, false);}
function f33(){ v37=new f125();if (system_IsMobile==0)
f31();else
f32();}
/*
function f68 (){ var myWidth=100;if( typeof( window.innerWidth )=='number' ) { myWidth=window.innerWidth;} else if( document.documentElement && ( document.documentElement.clientWidth || document.documentElement.clientHeight ) ) { myWidth=document.documentElement.clientWidth;} else if( document.body && ( document.body.clientWidth || document.body.clientHeight ) ) { myWidth=document.body.clientWidth;}
return myWidth;}
function f58 (){ var myHeight=100;if( typeof( window.innerWidth )=='number' ) { myHeight=window.innerHeight;} else if( document.documentElement && ( document.documentElement.clientWidth || document.documentElement.clientHeight ) ) { myHeight=document.documentElement.clientHeight;} else if( document.body && ( document.body.clientWidth || document.body.clientHeight ) ) { myHeight=document.body.clientHeight;}
return myHeight;}
function f35(){ document.body.ontouchstart=function(e) { if (e && e.preventDefault) { e.preventDefault();}
if (e && e.stopPropagation) { e.stopPropagation();}
return false;}
document.body.touchmove=function(e) { if (e && e.preventDefault) { e.preventDefault();}
if (e && e.stopPropagation) { e.stopPropagation();}
return false;}
}
function f137(el, X,Y){ Realv178=X;Realv179=Y;var CanvasX=v82.width;var CanvasY=v82.height;var TempX=X-v82.offsetLeft;var TempY=Y-v82.offsetTop;if (isNaN(TempX)==false && isNaN(TempY)==false ){ OLD_v178=v178;OLD_v179=v179;v178=X;v179=Y;v178 *=v89/v109;v179 *=v76/v83;v178=Math.floor(v178);v179=Math.floor(v179);if (isNaN(v179)==true) v179=0;if (isNaN(v178)==true) v178=0;if (v178<0) v178=0;if (v179<0) v179=0;if (v178>v89) v178=v89;if (v179>v76) v179=v76;}
}
function f46(){ if (v84==0 && v111==-1) v111=0;if (v111==1) v111=-1;if (v84==1 && v111==0) v111=1;}
var v38=new Array;function f138(){ v38=[];}
function f7(idToFind) { for (var i=0;i<v38.length;i++) { var id=v38[i].identifier;if (id==idToFind) { return i;}
}
return -1;}
function f8(evt) { evt.preventDefault();var touches=evt.changedTouches;for (var i=0;i<touches.length;i++){ v38.push(touches[i]);}
}
function f16(evt) { evt.preventDefault();var touches=evt.changedTouches;for (var i=0;i<touches.length;i++) { var idx=f7(touches[i].identifier);v38.splice(idx, 1);}
}
function f12(evt) { evt.preventDefault();var touches=evt.changedTouches;for (var i=0;i<touches.length;i++) { var idx=f7(touches[i].identifier);v38.splice(idx, 1, touches[i]);}
}
function f86(ax,ay,bx,by){ if (v84==1 && v178>=ax && v178<=bx && v179>=ay && v179<=by) return 1;for (var i=0;i<v38.length;i++){ var x=v38[i].pageX*v89/v109;var y=v38[i].pageY*v76/v83;if (
x>ax
&& x<bx
&& y>ay
&& y<by
) return 1;}
return 0;}
function f17 (){ f35();v82.addEventListener("touchstart", f8, false);v82.addEventListener("touchend", f16, false);v82.addEventListener("touchcancel", f16, false);v82.addEventListener("touchleave", f16, false);v82.addEventListener("touchmove", f12, false);v82.addEventListener('touchstart', function(e){ e.preventDefault();f137(v82, e.changedTouches[0].pageX,e.changedTouches[0].pageY);v84=1;window.scrollTo(0, 1);if (v9==1 && v23==1) {v9=0;f148(0);}
}, false)
v82.addEventListener('touchmove', function(e){ e.preventDefault();f137(v82, e.changedTouches[0].pageX,e.changedTouches[0].pageY);v84=1;window.scrollTo(0, 1);}, false)
v82.addEventListener('touchend', function(e){ if (v137.length>5)window.open(v137);e.preventDefault();v84=0;window.scrollTo(0, 1);}, false)
v82.addEventListener('touchcancel', function(e){ if (v137.length>5)window.open(v137);e.preventDefault();v84=0;window.scrollTo(0, 1);}, false)
v82.addEventListener('touchleave', function(e){ e.preventDefault();v84=0;window.scrollTo(0, 1);}, false)
if (DeviceIsMobile==0){ v82.onmousemove=function(e) { if (v137.length>5)window.open(v137);f137(v82, e.pageX,e.pageY);}
v82.onmousedown=function(e) { if (v137.length>5)window.open(v137);f137(v82, e.pageX,e.pageY);v84=1;}
v82.onmouseup=function(e){ if (v137.length>5)window.open(v137);v84=0;}
v82.onmouseout=function(e){ if (v137.length>5)window.open(v137);v84=0;}
*/
function f134(){ this.TextureID=-1;this.glyph=[];}
function f89(){ this.uvStart_X=0;this.uvStart_Y=0;this.uvEnd_X=0;this.uvEnd_Y=0;this.size_X=0;this.size_Y=0;this.xOffset=0;this.yOffset=0;this.xAdvance=0;this.VertexPositionBuffer;this.TextureCoordBuffer;this.VertexIndexBuffer;}
var sv_2711=[];function f90 (){ for (var i=0;i<10;i++){ sv_2711.push();sv_2711[i]=new f134();}
}
function f91 (id, path){ console.log("f91 "+id+" "+path);sv_2711[id].TextureID=f16 (path+".png");resources_loading++;var xmlhttp;if (window.XMLHttpRequest){ xmlhttp=new XMLHttpRequest();}
else
{ xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");}
xmlhttp.onreadystatechange=function(){ if (xmlhttp.readyState==4){ f42(id,xmlhttp.responseText);resources_loading --;resources_loaded ++;}
}
xmlhttp.overrideMimeType("text/plain");xmlhttp.open("GET",path+".fnt",true);xmlhttp.send();}
function f3(id, CharID){ sv_2711[id].glyph[CharID].VertexPositionBuffer=gl.createBuffer();gl.bindBuffer(gl.ARRAY_BUFFER, sv_2711[id].glyph[CharID].VertexPositionBuffer);vertices=
[
sv_2711[id].glyph[CharID].xOffset, sv_2711[id].glyph[CharID].yOffset+sv_2711[id].glyph[CharID].size_Y, -0.25,
sv_2711[id].glyph[CharID].xOffset+ sv_2711[id].glyph[CharID].size_X, sv_2711[id].glyph[CharID].yOffset+sv_2711[id].glyph[CharID].size_Y, -0.25,
sv_2711[id].glyph[CharID].xOffset+ sv_2711[id].glyph[CharID].size_X, sv_2711[id].glyph[CharID].yOffset, -0.25,
sv_2711[id].glyph[CharID].xOffset, sv_2711[id].glyph[CharID].yOffset, -0.25,
];gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);sv_2711[id].glyph[CharID].VertexPositionBuffer.itemSize=3;sv_2711[id].glyph[CharID].VertexPositionBuffer.numItems=4;sv_2711[id].glyph[CharID].VertexTextureCoordBuffer=gl.createBuffer();gl.bindBuffer(gl.ARRAY_BUFFER, sv_2711[id].glyph[CharID].VertexTextureCoordBuffer);var textureCoords=[
sv_2711[id].glyph[CharID].uvStart_X, sv_2711[id].glyph[CharID].uvEnd_Y,
sv_2711[id].glyph[CharID].uvEnd_X, sv_2711[id].glyph[CharID].uvEnd_Y,
sv_2711[id].glyph[CharID].uvEnd_X, sv_2711[id].glyph[CharID].uvStart_Y,
sv_2711[id].glyph[CharID].uvStart_X, sv_2711[id].glyph[CharID].uvStart_Y,
];gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(textureCoords), gl.STATIC_DRAW);sv_2711[id].glyph[CharID].VertexTextureCoordBuffer.itemSize=2;sv_2711[id].glyph[CharID].VertexTextureCoordBuffer.numItems=4;sv_2711[id].glyph[CharID].VertexIndexBuffer=gl.createBuffer();gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, sv_2711[id].glyph[CharID].VertexIndexBuffer);var sVertexIndices=[ 0, 1, 2, 0, 2, 3 ];gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(sVertexIndices), gl.STATIC_DRAW);sv_2711[id].glyph[CharID].VertexIndexBuffer.itemSize=1;sv_2711[id].glyph[CharID].VertexIndexBuffer.numItems=6;}
function f42(id,datas){ datas=datas.replace(/\t/gi, ' ')
datas=datas.replace(/ /gi, ' ')
datas=datas.replace(/ /gi, ' ')
datas=datas.replace(/ /gi, ' ')
datas=datas.replace(/ /gi, ' ')
datas=datas.replace(/ /gi, ' ')
var GlyphCreated=false;var scaleW=1;var scaleH=1;var lines=datas.split("\n");for (i=0;i<lines.length;i++){ if (lines[i].slice(0,6)=="common"){ var Parts=lines[i].split(' ');scaleW=parseInt( Parts[3].split('=')[1] );scaleH=parseInt( Parts[4].split('=')[1] );}
if (lines[i].slice(0,8)=="char id="){ var Parts=lines[i].split(' ');var CharID=parseInt ( Parts[1].split("=")[1] );sv_2711[id].glyph[CharID]=new f89() ;sv_2711[id].glyph[CharID].uvStart_X=parseFloat ( Parts[2].split("=")[1] )/scaleW;sv_2711[id].glyph[CharID].uvStart_Y=1.0-parseFloat ( Parts[3].split("=")[1] )/scaleH;sv_2711[id].glyph[CharID].uvEnd_X=(parseFloat ( Parts[2].split("=")[1])+parseFloat ( Parts[4].split("=")[1] ))/scaleW;sv_2711[id].glyph[CharID].uvEnd_Y=1.0-(parseFloat ( Parts[3].split("=")[1])+parseFloat ( Parts[5].split("=")[1] ))/scaleH;sv_2711[id].glyph[CharID].size_X=parseFloat ( Parts[4].split("=")[1] );sv_2711[id].glyph[CharID].size_Y=parseFloat ( Parts[5].split("=")[1] );sv_2711[id].glyph[CharID].xOffset=parseInt ( Parts[6].split("=")[1] );sv_2711[id].glyph[CharID].yOffset=parseInt ( Parts[7].split("=")[1] );sv_2711[id].glyph[CharID].xAdvance=(parseInt ( Parts[8].split("=")[1] ))+1;f3(id, CharID);GlyphCreated=true;}
}
if (GlyphCreated==true) return;var lines=datas.split("#");for (i=0;i<lines.length;i++){ if (lines[i].slice(0,7)=="charId="){ var CharID=parseInt ( lines[i].split("=")[1] );i++;sv_2711[id].glyph[CharID]=new f89() ;sv_2711[id].glyph[CharID].uvStart_X=parseFloat ( lines[i].split("(")[1].split(",")[0] );sv_2711[id].glyph[CharID].uvStart_Y=1.0-parseFloat ( lines[i].split("(")[1].split(",")[1] );i++;sv_2711[id].glyph[CharID].uvEnd_X=parseFloat ( lines[i].split("(")[1].split(",")[0] );sv_2711[id].glyph[CharID].uvEnd_Y=1.0-parseFloat ( lines[i].split("(")[1].split(",")[1] );i++;sv_2711[id].glyph[CharID].size_X=parseFloat ( lines[i].split("(")[1].split(",")[0] );sv_2711[id].glyph[CharID].size_Y=parseFloat ( lines[i].split("(")[1].split(",")[1] );i++;sv_2711[id].glyph[CharID].xOffset=parseInt ( lines[i].split("=")[1] );i++;sv_2711[id].glyph[CharID].yOffset=parseInt ( lines[i].split("=")[1] );i++;sv_2711[id].glyph[CharID].xAdvance=parseInt ( lines[i].split("=")[1] );f3(id, CharID);GlyphCreated=true;}
}
if (GlyphCreated==true) return;}
var left=0;var center=1;var right=2;var sefontalign=0;function f81 (align){ sefontalign=align;}
function f92(id, texte){ PrevTexture=-1;f50(sv_2711[id].TextureID,0);f112()
if (sefontalign==right) f52 (-f11 (id, texte),0.0,0.0);if (sefontalign==center) f52 (-f11 (id, texte)*0.5,0.0,0.0);for (var i=0;i<texte.length;i++){ f34 (id, texte.charCodeAt(i));}
f123();}
function f34 (id, CharID){ if (shader_loading>0) return;if (typeof sv_2711[id].glyph[CharID]=='undefined'){ return;}
gl.bindBuffer(gl.ARRAY_BUFFER, sv_2711[id].glyph[CharID].VertexPositionBuffer);gl.vertexAttribPointer(shader[v19].VertexPos, sv_2711[id].glyph[CharID].VertexPositionBuffer.itemSize, gl.FLOAT, false, 0, 0);gl.bindBuffer(gl.ARRAY_BUFFER, sv_2711[id].glyph[CharID].VertexTextureCoordBuffer);gl.vertexAttribPointer(shader[v19].TextureCoor, sv_2711[id].glyph[CharID].VertexTextureCoordBuffer.itemSize, gl.FLOAT, false, 0, 0);gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, sv_2711[id].glyph[CharID].VertexIndexBuffer);f17();gl.drawElements(gl.TRIANGLES, sv_2711[id].glyph[CharID].VertexIndexBuffer.numItems, gl.UNSIGNED_SHORT, 0);f52 (sv_2711[id].glyph[CharID].xAdvance,0.0,0.0);v33 +=2;}
function f11 (id, texte){ var TextWidth=0;for (var i=0;i<texte.length;i++){ TextWidth +=f8 (id, texte.charCodeAt(i));}
return TextWidth;}
function f8 (id, CharID){ if (typeof sv_2711[id].glyph[CharID]=='undefined') return 0;return sv_2711[id].glyph[CharID].xAdvance;}
var system_IsMobile=0;var system_IsIOS=0;function f131(){ var MobileStrings=['iphone','ipad'];var i=0;for (i=0;i<MobileStrings.length;i++){ var MOBILE_Search=navigator.userAgent.toLowerCase().search(MobileStrings[i]);if (MOBILE_Search>-1){ system_IsIOS=1;return 1;}
}
system_IsIOS=0;return 0;}
function f93(){ var MobileStrings=['android',"bean"];var i=0;for (i=0;i<MobileStrings.length;i++){ var MOBILE_Search=navigator.userAgent.toLowerCase().search(MobileStrings[i]);if (MOBILE_Search>-1) return 1;}
return 0;}
function f106(){ var MobileStrings=['kfsowi','silk','tablet','mobile','iphone','ipad','android','blackberry','nokia','opera mini','windows mobile','windows phone','iemobile'];for (var i=0;i<MobileStrings.length;i++){ var MOBILE_Search=navigator.userAgent.toLowerCase().search(MobileStrings[i]);if (MOBILE_Search>-1 ) { system_IsMobile=1;return 1;}
}
system_IsMobile=0;return 0;}
function f64(){ f106();}
function f135(Name){ this.Name=Name;this.obj=[];}
function f113(){ this.Name;this.v33=0;this.Vertexs=0;this.VertexPositionBuffer;this.NormalBuffer;this.TextureCoordBuffer;this.VertexIndexBuffer;this.TextureID=-1;this.Phys_VertexPositionBuffer;this.Phys_VertexIndexBuffer;this.MinX=100000;this.MaxX=-100000;this.MinY=100000;this.MaxY=-100000;this.MinZ=100000;this.MaxZ=-100000;this.Filter=false;this.FilterSpeed=0;this.FilterForce=0;this.FilterRotY=0;}
var Mesh=[];var Mesh_CycleA=0;var Mesh_CycleB=0;var Mesh_CycleC=0;var Mesh_RotY=0;var se_mesh_Filters=true;function f65 (){ Mesh_CycleA+=v43*0.005;if (Mesh_CycleA>6.28319) Mesh_CycleA-=6.28319;Mesh_CycleB+=v43*0.01;if (Mesh_CycleA>6.28319) Mesh_CycleA-=6.28319;Mesh_CycleC+=v43*0.03;if (Mesh_CycleA>6.28319) Mesh_CycleA-=6.28319;Mesh_RotY +=v43*0.01;if (Mesh_RotY>36000) Mesh_RotY-=360000;}
function f94 (){ for (var i=0;i<2000;i++){ Mesh.push;}
}
function f95 (id, Path){ resources_loading++;if (id<0 || id>1999) {alert ("Mesh ID out of range");return;}
Mesh[id]=new f135(Path);var xmlhttp;if (window.XMLHttpRequest){ xmlhttp=new XMLHttpRequest();}
else
{ xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");}
xmlhttp.onreadystatechange=function(){ if (xmlhttp.readyState==4){ if (Path.search(".obj") !=-1) f12 (Mesh[id], xmlhttp.responseText);}
}
xmlhttp.open("GET",Path,true);xmlhttp.send();}
function f96 (id, TextureID){ if (v19==-1) return;for (var i=0;i<Mesh[id].obj.length;i++){ var Obj=Mesh[id].obj[i];if (Obj.Filter !=false && se_mesh_Filters==true){ var Saved_Shader=v19;var Saved_Shader_R=Shader_R;var Saved_Shader_G=Shader_G;var Saved_Shader_B=Shader_B;var Saved_Shader_A=Shader_A;f112();if (Obj.Filter=='leaf'){ f63(3);f55 (Obj.FilterSpeed,Obj.FilterForce,Mesh_CycleA,1);}
else
if (Obj.Filter=='flag'){ f63(4);f55 (Obj.FilterSpeed,Obj.FilterForce,Mesh_CycleA,1);}
else
if (Obj.Filter=='roty'){ Obj.FilterRotY +=v43*Obj.FilterSpeed ;if (Obj.FilterRotY>360) Obj.FilterRotY -=360;f88(Mesh_RotY*Obj.FilterSpeed,0,1,0);}
else
if (Obj.Filter=='flame'){ f63(6);f55 (Obj.FilterSpeed,Obj.FilterForce,Mesh_CycleA,1);}
var Got_Filter=true;}
if (shader[v19].TextureCoor !=-1){ if (TextureID>0)
f50(TextureID,0);else
f50(Obj.TextureID,0);gl.bindBuffer(gl.ARRAY_BUFFER, Obj.TextureCoordBuffer);gl.vertexAttribPointer(shader[v19].TextureCoor, Obj.TextureCoordBuffer.itemSize, gl.FLOAT, false, 0, 0);}
if (shader[v19].Normals !=-1 && Obj.NormalBuffer.numItems>0){ gl.enableVertexAttribArray(shader[v19].Normals);gl.bindBuffer(gl.ARRAY_BUFFER, Obj.NormalBuffer);gl.vertexAttribPointer(shader[v19].Normals, Obj.NormalBuffer.itemSize, gl.FLOAT, false, 0, 0);}
gl.bindBuffer(gl.ARRAY_BUFFER, Obj.VertexPositionBuffer);gl.vertexAttribPointer(shader[v19].VertexPos, Obj.VertexPositionBuffer.itemSize, gl.FLOAT, false, 0, 0);gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, Obj.VertexIndexBuffer);f17();gl.drawElements(gl.TRIANGLES, Obj.VertexIndexBuffer.numItems, gl.UNSIGNED_SHORT, 0);v33 +=Obj.v33;if (shader[v19].Normals !=-1 && Obj.NormalBuffer.numItems>0){ gl.disableVertexAttribArray(shader[v19].Normals);}
if (Got_Filter==true){ f123();f55 (Saved_Shader_R,Saved_Shader_G,Saved_Shader_B,Saved_Shader_A);f63(Saved_Shader);}
}
}
function f0(Va,VTa,VNa, Vb,VTb,VNb, Vc,VTc,VNc, Vd,VTd,VNd){ this.Vec=new f127(Va,Vb,Vc, Vd);this.VN=new f127(VNa,VNb,VNc, VNd);this.VT=new f127(VTa,VTb,VTc, VTd);}
function f12 (Mesh, datas){ var TempVec=[];var TempVN=[];var TempVT=[];var TempFace=[];var TempName="";var TempTexture="";var FaceMode=false;var FaceCount=0;var OneLine=datas.split('\n');for (i=0;i<OneLine.length;i++){ if (OneLine[i][0] !="f" && FaceMode==true){ var ObjID=Mesh.obj.length;Mesh.obj.push;Mesh.obj[ObjID]=new f113();var ObjTempVec=[];var ObjTempVN=[];var ObjTempVT=[];var ObjTempFace=[];function f66 (Vec_ID, VT_ID, VN_ID){ var Vec=TempVec[Vec_ID-1];var VT=TempVT [VT_ID-1];var VN=TempVN [VN_ID-1];var VecCount=ObjTempVec.length;var UVCount=ObjTempVT.length;for (var i=0;i<VecCount/3;i++){ if ( Vec.x==ObjTempVec[i*3] && Vec.y==ObjTempVec[i*3+1] && Vec.z==ObjTempVec[i*3+2]
&& VT.x==ObjTempVT [i*2] && VT.y==ObjTempVT [i*2+1]
&& VN.x==ObjTempVN [i*3] && VN.y==ObjTempVN [i*3+1] && VN.z==ObjTempVN [i*3+2])
return i;}
ObjTempVec.push;ObjTempVec[VecCount]=Vec.x;ObjTempVec.push;ObjTempVec[VecCount+1]=Vec.y;ObjTempVec.push;ObjTempVec[VecCount+2]=Vec.z;ObjTempVN.push;ObjTempVN[VecCount]=VN.x;ObjTempVN.push;ObjTempVN[VecCount+1]=VN.y;ObjTempVN.push;ObjTempVN[VecCount+2]=VN.z;ObjTempVT.push;ObjTempVT[UVCount]=VT.x;ObjTempVT.push;ObjTempVT[UVCount+1]=VT.y;var VecCount=ObjTempVec.length;return VecCount/3-1;}
for (var j=0;j<FaceCount;j++){ var pointA=f66 (TempFace[j].Vec.x, TempFace[j].VT.x, TempFace[j].VN.x);var pointB=f66 (TempFace[j].Vec.y, TempFace[j].VT.y, TempFace[j].VN.y);var pointC=f66 (TempFace[j].Vec.z, TempFace[j].VT.z, TempFace[j].VN.z);ObjTempFace.push;ObjTempFace[ObjTempFace.length]=pointA;ObjTempFace.push;ObjTempFace[ObjTempFace.length]=pointB;ObjTempFace.push;ObjTempFace[ObjTempFace.length]=pointC;if (TempFace[j].Vec.w !=false && TempFace[j].VT.z !=false && TempFace[j].VN.z !=false){ var pointD=f66 (TempFace[j].Vec.w, TempFace[j].VT.w, TempFace[j].VN.w);ObjTempFace.push;ObjTempFace[ObjTempFace.length]=pointA;ObjTempFace.push;ObjTempFace[ObjTempFace.length]=pointD;ObjTempFace.push;ObjTempFace[ObjTempFace.length]=pointC;}
}
var VecCount=ObjTempVec.length/3;Mesh.obj[ObjID].VertexPositionBuffer=gl.createBuffer();gl.bindBuffer(gl.ARRAY_BUFFER, Mesh.obj[ObjID].VertexPositionBuffer);gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(ObjTempVec), gl.STATIC_DRAW);Mesh.obj[ObjID].VertexPositionBuffer.itemSize=3;Mesh.obj[ObjID].VertexPositionBuffer.numItems=VecCount;Mesh.obj[ObjID].TextureCoordBuffer=gl.createBuffer();gl.bindBuffer(gl.ARRAY_BUFFER, Mesh.obj[ObjID].TextureCoordBuffer);gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(ObjTempVT), gl.STATIC_DRAW);Mesh.obj[ObjID].TextureCoordBuffer.itemSize=2;Mesh.obj[ObjID].TextureCoordBuffer.numItems=VecCount;Mesh.obj[ObjID].NormalBuffer=gl.createBuffer();gl.bindBuffer(gl.ARRAY_BUFFER, Mesh.obj[ObjID].NormalBuffer);gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(ObjTempVN), gl.STATIC_DRAW);Mesh.obj[ObjID].NormalBuffer.itemSize=3;Mesh.obj[ObjID].NormalBuffer.numItems=VecCount;Mesh.obj[ObjID].VertexIndexBuffer=gl.createBuffer();gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, Mesh.obj[ObjID].VertexIndexBuffer);gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(ObjTempFace), gl.STATIC_DRAW);Mesh.obj[ObjID].VertexIndexBuffer.itemSize=1;Mesh.obj[ObjID].VertexIndexBuffer.numItems=ObjTempFace.length;Mesh.obj[ObjID].Name=TempName;Mesh.obj[ObjID].v33=ObjTempFace.length;Mesh.obj[ObjID].Vertexs=VecCount;Mesh.obj[ObjID].Phys_VertexPositionBuffer=new Float32Array( ObjTempVec);Mesh.obj[ObjID].Phys_VertexIndexBuffer=new Uint16Array( ObjTempFace);var n=TempName.search("filter=");if (n==0){ var Parts=TempName.split(":");for (p=0;p<Parts.length;p++){ var Part=Parts[p].split("=");if (Part[0]=='filter') Mesh.obj[ObjID].Filter=Part[1];if (Part[0]=='speed') Mesh.obj[ObjID].FilterSpeed=Part[1]*1.0;if (Part[0]=='force') Mesh.obj[ObjID].FilterForce=Part[1]*1.0;}
}
Mesh.obj[ObjID].TextureID=f16 (""+TempTexture+".png");FaceMode=false;TempName="";TempTexture="";TempFace=[];FaceCount=0;}
if (OneLine[i][0]=="v" && OneLine[i][1]==" "){ var Line=OneLine[i].split(' ');var VecID=TempVec.length;TempVec.push;TempVec[VecID]=new f127(-Line[1],Line[2],Line[3]);}
if (OneLine[i][0]=="v" && OneLine[i][1]=="n"){ var Line=OneLine[i].split(' ');var NormID=TempVN.length;TempVN.push;TempVN[NormID]=new f127(-Line[1],Line[2],Line[3],0);}
if (OneLine[i][0]=="v" && OneLine[i][1]=="t"){ var Line=OneLine[i].split(' ');var UVsID=TempVT.length;TempVT.push;TempVT[UVsID]=new f127(Line[1], Line[2],0,0);}
if (OneLine[i][0]=="o" && OneLine[i][1]==" "){ var Line=OneLine[i].split(' ');TempName=Line[1];}
if (OneLine[i][0]=="u" && OneLine[i][1]=="s" && OneLine[i][4]=="t" && OneLine[i][5]=="l"){ var Line=OneLine[i].split(' ');TempTexture=Line[1];}
if (OneLine[i][0]=="f" && OneLine[i][1]==" "){ var Line=OneLine[i].split(' ');var face_A=Line[1].split('/');var Va=face_A[0], VTa=face_A[1], VNa=face_A[2];var face_B=Line[2].split('/');var Vb=face_B[0], VTb=face_B[1], VNb=face_B[2];var face_C=Line[3].split('/');var Vc=face_C[0], VTc=face_C[1], VNc=face_C[2];if ( typeof Line[4] !=='undefined')
var face_D=Line[4].split('/');else
var face_D=[false, false, false];var Vd=face_D[0], VTd=face_D[1], VNd=face_D[2];TempFace.push;TempFace[FaceCount]=new f0(Va,VTa,VNa, Vb,VTb,VNb, Vc,VTc,VNc, Vd,VTd,VNd);FaceCount++;FaceMode=true;}
}
resources_loading--;resources_loaded++;}
var resources_loading=0;var shader_loading=0;var resources_line=0 ;var resources_count=0 ;var resources_id=0 ;var resources_loaded=0 ;var ProgressPourcent=0;var ProgressPourcent_Old=0;var ProgressPourcent_Smooth=0;function f35(){ if (resources_id<resources_count && resources_loading<10){ switch (resources_line[resources_id].type) { case "image":
f48 (resources_line[resources_id].id, ""+resources_line[resources_id].path);break;case "mesh":
f95 (resources_line[resources_id].id, ""+resources_line[resources_id].path);break;case "font":
f91 (resources_line[resources_id].id, ""+resources_line[resources_id].path);break;case "sound":
f72 (resources_line[resources_id].id*1, ""+resources_line[resources_id].path);break;}
resources_id++;}
if (resources_id>=resources_count && resources_loading<1) ProgressPourcent_Smooth++;setTimeout(function() { f35();}, 5);}
function f67(){ f43();f23();f24();ResourceReady=-1;var xmlhttp;if (window.XMLHttpRequest){ xmlhttp=new XMLHttpRequest();}
else
{ xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");}
xmlhttp.onreadystatechange=function(){ if (xmlhttp.readyState==4 && xmlhttp.status==200){ var str=xmlhttp.responseText;var OneLine=str.split('\n');resources_line=[];resources_count=0;for (i=0;i<OneLine.length;i++){ if (OneLine[i].length>5 && OneLine[i][0]=="{" ){ resources_line[resources_count]=JSON.parse(OneLine[i]);resources_count++;}
}
f35();}
}
var TimeStamp=new Date().getTime();xmlhttp.open("GET","list.txt?"+TimeStamp,true);xmlhttp.send();}
var OneAlert=0;function f126(){ if (ProgressPourcent_Smooth>99.9) return 1;if (shader_loading !=0 ) return 0;gl.colorMask(true, true, true, true);gl.clearColor(loader_background.r, loader_background.g, loader_background.b, 1.0);gl.clear(gl.COLOR_BUFFER_BIT);v30.style.display="block";f53 ();f112();f52 (sv_2412.x,sv_2412.y,0);f2();f123();return 0;}
var loader_progress_Size=150;var loader_progress_BarSize=30;var loader_background={r:0.3, g:0.3, b:0.3};var loader_bar_color={r:0.95, g:0.95, b:0.95};var loader_progress_color={r:0.0, g:1.0, b:0.0};var loader_progress_vertex;var sv_01;var loader_progress_bar_vertex;var loader_progress_bar_index;var loader_progress_icon_vertex;var loader_progress_icon_index;var loader_progress_icon_uv;function f43(){ var Step=0.25;var currentindice=1;var vertices=[];var indices=[];vertices.push(0);vertices.push(0);vertices.push(-0.2);for (var i=0 ;i<360+Step;i+=Step){ var x=Math.cos(f128(i+90))*(loader_progress_Size+loader_progress_BarSize*1.5);var y=Math.sin(f128(i+90))*(loader_progress_Size+loader_progress_BarSize*1.5);vertices.push(x);vertices.push(y);vertices.push(-0.2);if (i<360){ indices.push(0);indices.push(currentindice);indices.push(currentindice+1);currentindice++;}
}
loader_progress_bar_vertex=gl.createBuffer();loader_progress_bar_index=gl.createBuffer();gl.bindBuffer(gl.ARRAY_BUFFER, loader_progress_bar_vertex);gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);loader_progress_bar_vertex.itemSize=3;loader_progress_bar_vertex.numItems=vertices.length/3;gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, loader_progress_bar_index);gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(indices), gl.STATIC_DRAW);loader_progress_bar_index.itemSize=1;loader_progress_bar_index.numItems=indices.length;gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, null);}
function f23(){ var Step=5;var currentindice=1;var vertices=[];var indices=[];var uv=[];vertices.push(0);vertices.push(0);vertices.push(-0.2);uv.push(0.5);uv.push(0.5);for (var i=0 ;i<360+Step;i+=Step){ var x=Math.cos(f128(i))*(loader_progress_Size-loader_progress_BarSize);var y=Math.sin(f128(i))*(loader_progress_Size-loader_progress_BarSize);vertices.push(x);vertices.push(y);vertices.push(-0.2);var uv_x=0.5+Math.cos(f128(i))*0.495;var uv_y=0.5-Math.sin(f128(i))*0.495;uv.push(uv_x);uv.push(uv_y);if (i<360){ indices.push(0);indices.push(currentindice);indices.push(currentindice+1);currentindice++;}
}
loader_progress_icon_vertex=gl.createBuffer();loader_progress_icon_index=gl.createBuffer();loader_progress_icon_uv=gl.createBuffer();gl.bindBuffer(gl.ARRAY_BUFFER, loader_progress_icon_vertex);gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);loader_progress_icon_vertex.itemSize=3;loader_progress_icon_vertex.numItems=vertices.length/3;gl.bindBuffer(gl.ARRAY_BUFFER, loader_progress_icon_uv);gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(uv), gl.STATIC_DRAW);loader_progress_icon_uv.itemSize=2;loader_progress_icon_uv.numItems=uv.length/2;gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, loader_progress_icon_index);gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(indices), gl.STATIC_DRAW);loader_progress_icon_index.itemSize=1;loader_progress_icon_index.numItems=indices.length;gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, null);}
function f24(){ var Step=5;var currentindice=1;var vertices=[];var indices=[];vertices.push(0);vertices.push(0);vertices.push(-0.2);for (var i=0 ;i<360+Step;i+=Step){ var x=Math.cos(f128(i))*loader_progress_Size;var y=Math.sin(f128(i))*loader_progress_Size;vertices.push(x);vertices.push(y);vertices.push(-0.2);if (i<360){ indices.push(0);indices.push(currentindice);indices.push(currentindice+1);currentindice++;}
}
currentindice++;for (var i=0 ;i<360+Step;i+=Step){ var x=Math.cos(f128(i))*(loader_progress_Size+loader_progress_BarSize);var y=Math.sin(f128(i))*(loader_progress_Size+loader_progress_BarSize);vertices.push(x);vertices.push(y);vertices.push(-0.2);x=Math.cos(f128(i))*(loader_progress_Size+loader_progress_BarSize*2);y=Math.sin(f128(i))*(loader_progress_Size+loader_progress_BarSize*2);vertices.push(x);vertices.push(y);vertices.push(-0.2);if (i<360){ indices.push(currentindice);indices.push(currentindice+1);indices.push(currentindice+2);indices.push(currentindice+2);indices.push(currentindice+1);indices.push(currentindice+3);currentindice +=2;}
}
loader_progress_vertex=gl.createBuffer();sv_01=gl.createBuffer();gl.bindBuffer(gl.ARRAY_BUFFER, loader_progress_vertex);gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);loader_progress_vertex.itemSize=3;loader_progress_vertex.numItems=vertices.length/3;gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, sv_01);gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(indices), gl.STATIC_DRAW);sv_01.itemSize=1;sv_01.numItems=indices.length;gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, null);}
function f2 (id){ ProgressPourcent=(resources_loaded/resources_count)*100;if (ProgressPourcent>100) ProgressPourcent=100;if (ProgressPourcent< 0) ProgressPourcent=0;if (ProgressPourcent_Smooth<ProgressPourcent) ProgressPourcent_Smooth=ProgressPourcent_Smooth*0.5 + ProgressPourcent*0.5;if (ProgressPourcent_Smooth<ProgressPourcent+10 && ProgressPourcent_Smooth<95) ProgressPourcent_Smooth+=v43*0.0005;if (ProgressPourcent_Old !=ProgressPourcent_Smooth) {ProgressPourcent_Old=ProgressPourcent_Smooth;}
f63(0);f17();if (ProgressPourcent_Smooth>0){
f55 (loader_progress_color.r,loader_progress_color.g,loader_progress_color.b,1.0);gl.bindBuffer(gl.ARRAY_BUFFER, loader_progress_bar_vertex);gl.vertexAttribPointer(shader[v19].VertexPos, loader_progress_bar_vertex.itemSize, gl.FLOAT, false, 0, 0);gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, loader_progress_bar_index);gl.drawElements(gl.TRIANGLES, loader_progress_bar_index.numItems*(ProgressPourcent_Smooth*0.01), gl.UNSIGNED_SHORT, 0);v33 +=loader_progress_bar_vertex.itemSize;}
f55 (0,0,0,0.1);f52 (8, 8,0);f17();gl.bindBuffer(gl.ARRAY_BUFFER, loader_progress_vertex);gl.vertexAttribPointer(shader[v19].VertexPos, loader_progress_vertex.itemSize, gl.FLOAT, false, 0, 0);gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, sv_01);gl.drawElements(gl.TRIANGLES, sv_01.numItems, gl.UNSIGNED_SHORT, 0);v33 +=loader_progress_vertex.itemSize;f55 (loader_bar_color.r,loader_bar_color.g,loader_bar_color.b,1.0);f52 (-8,-8,0);f17();gl.bindBuffer(gl.ARRAY_BUFFER, loader_progress_vertex);gl.vertexAttribPointer(shader[v19].VertexPos, loader_progress_vertex.itemSize, gl.FLOAT, false, 0, 0);gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, sv_01);gl.drawElements(gl.TRIANGLES, sv_01.numItems, gl.UNSIGNED_SHORT, 0);v33 +=loader_progress_vertex.itemSize;if ( v27[0].valide==true){ f63(1);f55 (1.0, 1.0, 1.0 ,1.0);if ( v27[0].valide==true) f50(0, 0);f17();gl.bindBuffer(gl.ARRAY_BUFFER, loader_progress_icon_vertex);gl.vertexAttribPointer(shader[v19].VertexPos, loader_progress_icon_vertex.itemSize, gl.FLOAT, false, 0, 0);gl.bindBuffer(gl.ARRAY_BUFFER, loader_progress_icon_uv);gl.vertexAttribPointer(shader[v19].TextureCoor, loader_progress_icon_uv.itemSize, gl.FLOAT, false, 0, 0);gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, loader_progress_icon_index);gl.drawElements(gl.TRIANGLES, loader_progress_icon_index.numItems, gl.UNSIGNED_SHORT, 0);v33 +=loader_progress_icon_vertex.itemSize;}
}
var Particles=[];var ParticlesCount=50;var sv_26=[];var sv_32=[];function f97(){ this.Pos=[0,0,0];this.Vel=[0,0,0];this.Size=0;this.Sizes=0;this.Rot=0;this.Rots=0;this.ImageID=0;this.Gravity=0;}
var Part_GLVertex;var Part_GLUV;var Part_GLIndex;var sv_15=[]
var Particles_UV=[]
var Particles_Index=[]
function f36(){ for (var i=0;i < ParticlesCount;i++){ Particles.push(new f97());sv_26.push();sv_26.push();sv_26.push();sv_26.push();sv_32.push();sv_32.push();}
var Part_Index=0;for (var i=0;i < ParticlesCount;i++){ sv_15.push(-1);sv_15.push(-1);sv_15.push(i);sv_15.push( 1);sv_15.push(-1);sv_15.push(i);sv_15.push( 1);sv_15.push( 1);sv_15.push(i);sv_15.push(-1);sv_15.push( 1);sv_15.push(i);Particles_UV.push(0);Particles_UV.push(0);Particles_UV.push(0.125);Particles_UV.push(0);Particles_UV.push(0.125);Particles_UV.push(1);Particles_UV.push(0);Particles_UV.push(1);Particles_Index.push(Part_Index);Particles_Index.push(Part_Index+1);Particles_Index.push(Part_Index+2);Particles_Index.push(Part_Index);Particles_Index.push(Part_Index+2);Particles_Index.push(Part_Index+3);Part_Index +=4;}
Part_GLVertex=gl.createBuffer();gl.bindBuffer(gl.ARRAY_BUFFER, Part_GLVertex);gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(sv_15), gl.STATIC_DRAW);Part_GLVertex.itemSize=3;Part_GLVertex.numItems=sv_15.length/3;Part_GLUV=gl.createBuffer();gl.bindBuffer(gl.ARRAY_BUFFER, Part_GLUV);gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(Particles_UV), gl.STATIC_DRAW);Part_GLUV.itemSize=2;Part_GLUV.numItems=Particles_UV.length/2;Part_GLIndex=gl.createBuffer();gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, Part_GLIndex);gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(Particles_Index), gl.STATIC_DRAW);Part_GLIndex.itemSize=1;Part_GLIndex.numItems=Particles_Index.length;}
function f37(){ f63(5);if (shader[v19].TextureCoor==-1 || sv_32.length <1) return;f17();gl.uniform4fv(shader[v19].sv_26, sv_26);gl.uniform2fv(shader[v19].sv_32, sv_32);gl.bindBuffer(gl.ARRAY_BUFFER, Part_GLUV);gl.vertexAttribPointer(shader[v19].TextureCoor, Part_GLUV.itemSize, gl.FLOAT, false, 0, 0);gl.bindBuffer(gl.ARRAY_BUFFER, Part_GLVertex);gl.vertexAttribPointer(shader[v19].VertexPos, Part_GLVertex.itemSize, gl.FLOAT, false, 0, 0);gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, Part_GLIndex);gl.drawElements(gl.TRIANGLES, Part_GLIndex.numItems, gl.UNSIGNED_SHORT, 0);v33 +=ParticlesCount*2;}
function f25(){ for (var i=0;i < ParticlesCount;i++){ if (Particles[i].Size>0){ Particles[i].Pos[0] +=Particles[i].Vel[0]*v43;Particles[i].Pos[1] +=Particles[i].Vel[1]*v43;Particles[i].Pos[2] +=Particles[i].Vel[2]*v43;Particles[i].Size +=Particles[i].Sizes*v43;Particles[i].Vel[1] -=Particles[i].Gravity*v43;Particles[i].Rot +=Particles[i].Rots*v43;sv_26[i*4]=Particles[i].Pos[0];sv_26[i*4+1]=Particles[i].Pos[1];sv_26[i*4+2]=Particles[i].Pos[2];sv_26[i*4+3]=Particles[i].Size;sv_32[i*2]=Particles[i].Rot;sv_32[i*2+1]=Particles[i].ImageID;if (Particles[i].Pos[1]<0) {Particles[i].Pos[1]=0;Particles[i].Vel[1]=-Particles[i].Vel[1]*0.5;}
}
else
sv_26[i*4+3]=0;}
}
var Particles_Position;function f5(Pos) {Particles_Position=Pos;}
var Particles_Velocity;function f6(Vel) {Particles_Velocity=Vel;}
var Particles_Size;function f19(Size) {Particles_Size=Size;}
var Particles_SizeSpeed;function f4(Size) {Particles_SizeSpeed=Size;}
var Particles_Rotation;function f7(Rot) {Particles_Rotation=Rot;}
var Particles_RotationSpeed;function f1(Rot) {Particles_RotationSpeed=Rot;}
var Particles_Gravity;function f9(Grav) {Particles_Gravity=Grav;}
var Particles_ImageID;function f10(Imag) {Particles_ImageID=Imag/8;}
function f44(){ for (var i=0;i < ParticlesCount;i++){ if (Particles[i].Size<=0){ Particles[i].Pos=Particles_Position;Particles[i].Vel=Particles_Velocity;Particles[i].Size=Particles_Size;Particles[i].Sizes=Particles_SizeSpeed;Particles[i].Rot=Particles_Rotation;Particles[i].Rots=Particles_RotationSpeed;Particles[i].Gravity=Particles_Gravity;Particles[i].ImageID=Particles_ImageID;return;}
}
}
var GlowsFX=[];var GlowsFXCount=50;var GlowsFXXYZS=[];var GlowsFXRT=[];function f114(){ this.Pos=[0,0,0];this.Size=0;this.Rot=0;this.ImageID=0;this.Gravity=0;}
var GLOW_GLVertex;var GLOW_GLUV;var GLOW_GLIndex;var GlowsFX_Vertices=[]
var GlowsFX_UV=[]
var GlowsFX_Index=[]
var Glow_Index=0;function f56(){ for (var i=0;i < GlowsFXCount;i++){ GlowsFX.push(new f114());GlowsFXXYZS.push();GlowsFXXYZS.push();GlowsFXXYZS.push();GlowsFXXYZS.push();GlowsFXRT.push();GlowsFXRT.push();}
for (var i=0;i < GlowsFXCount;i++){ GlowsFX_Vertices.push(-1);GlowsFX_Vertices.push(-1);GlowsFX_Vertices.push(i);GlowsFX_Vertices.push( 1);GlowsFX_Vertices.push(-1);GlowsFX_Vertices.push(i);GlowsFX_Vertices.push( 1);GlowsFX_Vertices.push( 1);GlowsFX_Vertices.push(i);GlowsFX_Vertices.push(-1);GlowsFX_Vertices.push( 1);GlowsFX_Vertices.push(i);GlowsFX_UV.push(0);GlowsFX_UV.push(0);GlowsFX_UV.push(0.125);GlowsFX_UV.push(0);GlowsFX_UV.push(0.125);GlowsFX_UV.push(1);GlowsFX_UV.push(0);GlowsFX_UV.push(1);GlowsFX_Index.push(Glow_Index);GlowsFX_Index.push(Glow_Index+1);GlowsFX_Index.push(Glow_Index+2);GlowsFX_Index.push(Glow_Index);GlowsFX_Index.push(Glow_Index+2);GlowsFX_Index.push(Glow_Index+3);Glow_Index +=4;}
GLOW_GLVertex=gl.createBuffer();gl.bindBuffer(gl.ARRAY_BUFFER, GLOW_GLVertex);gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(GlowsFX_Vertices), gl.STATIC_DRAW);GLOW_GLVertex.itemSize=3;GLOW_GLVertex.numItems=GlowsFX_Vertices.length/3;GLOW_GLUV=gl.createBuffer();gl.bindBuffer(gl.ARRAY_BUFFER, GLOW_GLUV);gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(GlowsFX_UV), gl.STATIC_DRAW);GLOW_GLUV.itemSize=2;GLOW_GLUV.numItems=GlowsFX_UV.length/2;GLOW_GLIndex=gl.createBuffer();gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, GLOW_GLIndex);gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(GlowsFX_Index), gl.STATIC_DRAW);GLOW_GLIndex.itemSize=1;GLOW_GLIndex.numItems=GlowsFX_Index.length;}
function f57(){ f38();f17();gl.uniform4fv(shader[v19].sv_26, GlowsFXXYZS);gl.uniform2fv(shader[v19].sv_32, GlowsFXRT);gl.bindBuffer(gl.ARRAY_BUFFER, GLOW_GLUV);gl.vertexAttribPointer(shader[v19].TextureCoor, GLOW_GLUV.itemSize, gl.FLOAT, false, 0, 0);gl.bindBuffer(gl.ARRAY_BUFFER, GLOW_GLVertex);gl.vertexAttribPointer(shader[v19].VertexPos, GLOW_GLVertex.itemSize, gl.FLOAT, false, 0, 0);gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, GLOW_GLIndex);gl.drawElements(gl.TRIANGLES, GLOW_GLIndex.numItems, gl.UNSIGNED_SHORT, 0);/*
console.log ('GLOW_GLIndex', GLOW_GLUV);console.log ('GLOW_GLIndex', GLOW_GLVertex);console.log ('GLOW_GLIndex', GLOW_GLIndex);*/
v33 +=GlowsFXCount*2;}
function f38(){ for (var i=0;i < GlowsFXCount;i++){ if (GlowsFX[i].Size>0){ GlowsFXXYZS[i*4]=GlowsFX[i].Pos[0];GlowsFXXYZS[i*4+1]=GlowsFX[i].Pos[1];GlowsFXXYZS[i*4+2]=GlowsFX[i].Pos[2];GlowsFXXYZS[i*4+3]=GlowsFX[i].Size;GlowsFXRT[i*2]=GlowsFX[i].Rot;GlowsFXRT[i*2+1]=GlowsFX[i].ImageID;GlowsFX[i].Size=0;}
else
GlowsFXXYZS[i*4+3]=0;}
}
function f68(Img,Pos,Size,Rot){ for (var i=0;i < GlowsFXCount;i++){ if (GlowsFX[i].Size<=0){ GlowsFX[i].Pos=Pos;GlowsFX[i].Size=Size;GlowsFX[i].Rot=Rot;GlowsFX[i].ImageID=Img/8;return;}
}
}
function f137 (){ if (sv_1312==true) return;if (sv_214>0)
f76('loose',false);else
f76('game-over',true);sv_1312=true;sv_1412=-10;}
var PlayerBlocked=false;function f98(){ AnimationStep +=v43;if (AnimationStep>120) {AnimationStep-=120;AnimationLoop++;if (AnimationLoop>3) AnimationLoop=0;}
sv_1210=AnimationLoop+3;sv_59 +=sv_1412*v43 * 0.05;if ( sv_177==210) sv_1210=0;if (sv_1412<4) sv_1412 +=v43 * 0.02;if ( sv_387==0 && sv_1412 <0 ) sv_1412 +=v43 * 0.03;if (sv_1412>4) sv_1412=4;if (sv_41<100) sv_41+=v43*0.01;if (sv_41>100) sv_41=100;if (sv_1312==false ){ var Col=f118(sv_41, sv_59,43,sv_1412, true);sv_41=Col.x;sv_59=Col.y;sv_1412=Col.v;if ( sv_177==201){ if (sv_387==1 && Col.OnGround==true){ sv_1412=-9;f73 (4);}
PlayerBlocked=Col.Blocked;if (Col.OnGround==false){ if (sv_1412<0) sv_1210=1;else sv_1210=2;}
if (Col.OnGround==true && Col.Blocked==true) sv_1210=0;if (Col.Blocked==true) sv_2212=false;else sv_2212=true;if (sv_59>290) f137();}
}
else { { sv_2212=false;sv_1210=7+sv_209SlowFrame_2;if (sv_59>350) { sv_177=202;sv_214--;StageStartTimer=0;}
}
}
}
var sv_1914=[];var BossMaxLives=0;var sv_3610=0;function f107 (id,x,y){ var size_y=50;var vx=0;if (sv_169==666) vx=2;if (id==61) size_y=26;if (id==62) size_y=44;if (id==63) {size_y=44;y=351;};if (id==66) size_y=44;if (id==67) { size_y=74;BossMaxLives=1+sv_2611*2;sv_3610=BossMaxLives;f76('boss',true);};if (id==68) size_y=26;if (id==69) {size_y=44;y=351;};if (id==70) {size_y=44;};sv_1914.push({id:id*1,x:x,y:y+32,vx:vx,vy:0,size_y:size_y,frame:0,status:0});}
var sv_209Frame_2=0;var sv_209Frame_2s=0;var sv_209SlowFrame_2=0;var sv_209SlowFrame_2s=0;var sv_209Frame_4=0;var sv_209Frame_4s=0;var sv_209Frame_Swing=0;var Mswap=0;function f82(){ Mswap=1-Mswap;sv_209Frame_2s +=v43;if (sv_209Frame_2s>90) {sv_209Frame_2s-=90;sv_209Frame_2=1-sv_209Frame_2;}
sv_209SlowFrame_2s +=v43;if (sv_209SlowFrame_2s>150) {sv_209SlowFrame_2s-=150;sv_209SlowFrame_2=1-sv_209SlowFrame_2;}
sv_209Frame_4s +=v43;if (sv_209Frame_4s>95) {sv_209Frame_4s-=95;sv_209Frame_4 ++;if (sv_209Frame_4==4) sv_209Frame_4=0;}
sv_209Frame_Swing +=v43*0.5;if (sv_209Frame_Swing>628) sv_209Frame_Swing-=628;var sv_4513ToRemove=-1;f63(3);for (var i=0;i<sv_1914.length;i++){ f63(3);switch (sv_1914[i].id){ case 70:
f55 (sv_1914[i].x+32,sv_1914[i].y,(17+Mswap)/20,sv_1914[i].size_y);f50(8, 0);f17();gl.bindBuffer(gl.ARRAY_BUFFER, Sprite_UV);gl.vertexAttribPointer(shader[v19].TextureCoor, Sprite_UV.itemSize, gl.FLOAT, false, 0, 0);gl.bindBuffer(gl.ARRAY_BUFFER, Sprite_Vertex);gl.vertexAttribPointer(shader[v19].VertexPos, Sprite_Vertex.itemSize, gl.FLOAT, false, 0, 0);gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, Sprite_Index);gl.drawElements(gl.TRIANGLES, Sprite_Index.numItems, gl.UNSIGNED_SHORT, 0);v33 +=2;f55 (sv_1914[i].x,sv_1914[i].y,sv_1914[i].frame/20,sv_1914[i].size_y);f50(8, 0);f17();if (sv_2212==true) sv_1914[i].x -=v43*0.08;sv_1914[i].frame=16;sv_1914[i].x +=sv_1914[i].vx*v43 * 0.05;sv_1914[i].y +=sv_1914[i].vy*v43 * 0.05;if (sv_1914[i].vx>-0.9) sv_1914[i].vx -=0.01*v43;if (
sv_1312==false &&
sv_1914[i].status==0 &&
sv_41 > sv_1914[i].x-18 &&
sv_41 < sv_1914[i].x+18 &&
sv_59>sv_1914[i].y-sv_1914[i].size_y+16 &&
sv_59<sv_1914[i].y+40
){ f137 ();}
break;case 67:
f55 (sv_1914[i].x,sv_1914[i].y,sv_1914[i].frame/20,sv_1914[i].size_y);f50(15, 0);f17();sv_1914[i].x +=sv_1914[i].vx*v43 * 0.05;sv_1914[i].y +=sv_1914[i].vy*v43 * 0.05;sv_1914[i].vx *=0.98;sv_1914[i].vy *=0.98;break;case 69:
f55 (sv_1914[i].x,sv_1914[i].y,sv_1914[i].frame/20,sv_1914[i].size_y);f50(8, 0);f17();if (sv_2212==true) sv_1914[i].x -=v43*0.08;sv_1914[i].x +=sv_1914[i].vx*v43 * 0.05;sv_1914[i].y +=sv_1914[i].vy*v43 * 0.05;if (sv_1914[i].y>350) sv_1914[i].vy=-2;if (sv_1914[i].y<150) sv_1914[i].vy +=v43*0.02;if ( sv_1914[i].vy<0) f101 (Math.round(121+Math.random()*2),sv_1914[i].x,sv_1914[i].y-25,-3+Math.random()*6,-85,0.5);sv_1914[i].frame=9+sv_209Frame_2;if ( sv_1914[i].vy>0) sv_1914[i].frame=11;if (
sv_1312==false &&
sv_1914[i].status==0 &&
sv_41 > sv_1914[i].x-18 &&
sv_41 < sv_1914[i].x+18 &&
sv_59>sv_1914[i].y-sv_1914[i].size_y+12 &&
sv_59<sv_1914[i].y+40
){ f137 ();}
break;case 63:
f55 (sv_1914[i].x,sv_1914[i].y,sv_1914[i].frame/20,sv_1914[i].size_y);f50(8, 0);f17();if (sv_2212==true) sv_1914[i].x -=v43*0.08;sv_1914[i].x +=sv_1914[i].vx*v43 * 0.05;sv_1914[i].y +=sv_1914[i].vy*v43 * 0.05;if (sv_1914[i].y>350) sv_1914[i].vy=-3;if (sv_1914[i].y<220) sv_1914[i].vy +=v43*0.02;sv_1914[i].frame=5+sv_209Frame_2;if ( sv_1914[i].vy>0) sv_1914[i].frame=6;if (
sv_1312==false &&
sv_1914[i].status==0 &&
sv_41 > sv_1914[i].x-18 &&
sv_41 < sv_1914[i].x+18 &&
sv_59>sv_1914[i].y-sv_1914[i].size_y+8 &&
sv_59<sv_1914[i].y+40
){ f137 ();}
break;case 66:
f55 (sv_1914[i].x,sv_1914[i].y,sv_1914[i].frame/20,sv_1914[i].size_y);f50(8, 0);f17();if (sv_2212==true) sv_1914[i].x -=v43*0.08;sv_1914[i].x +=sv_1914[i].vx*v43 * 0.05;sv_1914[i].y +=sv_1914[i].vy*v43 * 0.05;sv_1914[i].vx=Math.cos(i+sv_209Frame_Swing*0.01)-0.4;sv_1914[i].vy=Math.sin(i+sv_209Frame_Swing*0.01);sv_1914[i].frame=sv_209Frame_4+12;if (
sv_1312==false &&
sv_1914[i].status==0 &&
sv_41 > sv_1914[i].x-12 &&
sv_41 < sv_1914[i].x+12 &&
sv_59>sv_1914[i].y-sv_1914[i].size_y+12 &&
sv_59<sv_1914[i].y+35
){ f137 ();}
break;case 62:
f55 (sv_1914[i].x,sv_1914[i].y,sv_1914[i].frame/20,sv_1914[i].size_y);f50(8, 0);f17();if (sv_2212==true) sv_1914[i].x -=v43*0.08;sv_1914[i].x +=sv_1914[i].vx*v43 * 0.05;sv_1914[i].y +=sv_1914[i].vy*v43 * 0.05;sv_1914[i].vy=Math.cos(sv_209Frame_Swing*0.01);var Col=f118(sv_1914[i].x, sv_1914[i].y,sv_1914[i].size_y,sv_1914[i].vy, false);sv_1914[i].x=Col.x;sv_1914[i].y=Col.y;sv_1914[i].vy=Col.v;if (sv_1914[i].vx>-0.9) sv_1914[i].vx -=0.01*v43;sv_1914[i].frame=sv_209Frame_4;if (
sv_1312==false &&
sv_1914[i].status==0 &&
sv_41 > sv_1914[i].x-18 &&
sv_41 < sv_1914[i].x+18 &&
sv_59>sv_1914[i].y-sv_1914[i].size_y+16 &&
sv_59<sv_1914[i].y+40
){ f137 ();}
break;case 68:
f55 (sv_1914[i].x,sv_1914[i].y,3/20,sv_1914[i].size_y);f50(7, 0);f17();sv_1914[i].y +=v43 * 0.1;sv_1914[i].vy=0.01;var Col=f118(sv_1914[i].x, sv_1914[i].y,sv_1914[i].size_y,sv_1914[i].vy, false);if (Col.OnGround==true) {sv_1914[i].id=61;sv_1914[i].vy=-1;f73 (3);}
break;case 61:
f55 (sv_1914[i].x,sv_1914[i].y,sv_1914[i].frame/20,sv_1914[i].size_y);f50(7, 0);f17();if (sv_2212==true) sv_1914[i].x -=v43*0.08;sv_1914[i].x +=sv_1914[i].vx*v43 * 0.05;sv_1914[i].y +=sv_1914[i].vy*v43 * 0.05;sv_1914[i].vy +=v43 * 0.005;if (sv_1914[i].vy>3) sv_1914[i].vy=3;var Col=f118(sv_1914[i].x, sv_1914[i].y,sv_1914[i].size_y,sv_1914[i].vy, false);sv_1914[i].x=Col.x;sv_1914[i].y=Col.y;sv_1914[i].vy=Col.v;if (Col.Blocked==true){ sv_1914[i].vx=1.85;sv_1914[i].frame=0;}
if (sv_1914[i].status==0){ if (Col.OnGround==true){ if (Col.Blocked !=true){ if (sv_1914[i].vx>-0.7) sv_1914[i].vx -=0.01*v43;sv_1914[i].frame=sv_209Frame_2;}
}
else
{ sv_1914[i].vx *=0.97;sv_1914[i].frame=0;}
}
else
{ sv_1914[i].frame=2;sv_1914[i].vx=0;}
if (
sv_1312==false &&
sv_1914[i].status==0 &&
sv_41 > sv_1914[i].x-18 &&
sv_41 < sv_1914[i].x+18 &&
sv_59>sv_1914[i].y-sv_1914[i].size_y+8 &&
sv_59<sv_1914[i].y+40
){ if (sv_1412>2 && sv_59<sv_1914[i].y){ sv_1914[i].status=1;sv_1412=-6;sv_59=sv_1914[i].y-sv_1914[i].size_y;f101 (47,sv_1914[i].x,sv_1914[i].y-32,0,-50,0);sv_4114+=100;f73 (2);}
else
f137 ();}
break;}
gl.bindBuffer(gl.ARRAY_BUFFER, Sprite_UV);gl.vertexAttribPointer(shader[v19].TextureCoor, Sprite_UV.itemSize, gl.FLOAT, false, 0, 0);if (sv_1914[i].id==67){ gl.bindBuffer(gl.ARRAY_BUFFER, Sprite_Vertex64);gl.vertexAttribPointer(shader[v19].VertexPos, Sprite_Vertex64.itemSize, gl.FLOAT, false, 0, 0);}
else
{ gl.bindBuffer(gl.ARRAY_BUFFER, Sprite_Vertex);gl.vertexAttribPointer(shader[v19].VertexPos, Sprite_Vertex.itemSize, gl.FLOAT, false, 0, 0);}
gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, Sprite_Index);gl.drawElements(gl.TRIANGLES, Sprite_Index.numItems, gl.UNSIGNED_SHORT, 0);v33 +=2;if (sv_1914[i].id==67) f99(i);if (sv_1914[i].x <-64 || sv_1914[i].y >400) sv_4513ToRemove=i;}
if (sv_4513ToRemove !=-1){ sv_1914[sv_4513ToRemove].id=sv_1914[sv_1914.length-1].id;sv_1914[sv_4513ToRemove].x=sv_1914[sv_1914.length-1].x;sv_1914[sv_4513ToRemove].y=sv_1914[sv_1914.length-1].y;sv_1914[sv_4513ToRemove].vx=sv_1914[sv_1914.length-1].vx;sv_1914[sv_4513ToRemove].vy=sv_1914[sv_1914.length-1].vy;sv_1914[sv_4513ToRemove].size_y=sv_1914[sv_1914.length-1].size_y;sv_1914[sv_4513ToRemove].frame=sv_1914[sv_1914.length-1].frame;sv_1914[sv_4513ToRemove].status=sv_1914[sv_1914.length-1].status;sv_1914.pop();}
}
var sv_448=0;var BossTimer=0;var BossData=0;var BossFace=4;var BossAttack=0;function f99(i){ sv_1914[i].frame=sv_209SlowFrame_2;if (sv_209Frame_2==0)
f55 (sv_1914[i].x+17,sv_1914[i].y-47,2/20,sv_1914[i].size_y);else
f55 (sv_1914[i].x+17,sv_1914[i].y-17,3/20,sv_1914[i].size_y);f50(15, 0);f17();gl.bindBuffer(gl.ARRAY_BUFFER, Sprite_UV);gl.vertexAttribPointer(shader[v19].TextureCoor, Sprite_UV.itemSize, gl.FLOAT, false, 0, 0);gl.bindBuffer(gl.ARRAY_BUFFER, Sprite_Vertex64);gl.vertexAttribPointer(shader[v19].VertexPos, Sprite_Vertex64.itemSize, gl.FLOAT, false, 0, 0);gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, Sprite_Index);gl.drawElements(gl.TRIANGLES, Sprite_Index.numItems, gl.UNSIGNED_SHORT, 0);v33 +=2;if (sv_2611==1) f55 (sv_1914[i].x-37,sv_1914[i].y-17+sv_1914[i].vy*2,BossFace/20,sv_1914[i].size_y);if (sv_2611==2) f55 (sv_1914[i].x-37,sv_1914[i].y-17+sv_1914[i].vy*2,(BossFace+4)/20,sv_1914[i].size_y);if (sv_2611==3) f55 (sv_1914[i].x-37,sv_1914[i].y-17+sv_1914[i].vy*2,(BossFace+8)/20,sv_1914[i].size_y);f50(15, 0);f17();gl.bindBuffer(gl.ARRAY_BUFFER, Sprite_UV);gl.vertexAttribPointer(shader[v19].TextureCoor, Sprite_UV.itemSize, gl.FLOAT, false, 0, 0);gl.bindBuffer(gl.ARRAY_BUFFER, Sprite_Vertex64);gl.vertexAttribPointer(shader[v19].VertexPos, Sprite_Vertex64.itemSize, gl.FLOAT, false, 0, 0);gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, Sprite_Index);gl.drawElements(gl.TRIANGLES, Sprite_Index.numItems, gl.UNSIGNED_SHORT, 0);v33 +=2;var Goal_X, Goal_Y;BossTimer +=v43*0.1;if (sv_2611==2 ) BossTimer +=v43*0.05;if (sv_2611==3 ) BossTimer +=v43*0.07;switch (sv_448) { case -2:
if (BossTimer>30){ BossTimer=0;f73 (6);}
Goal_X=190;Goal_Y=sv_1914[i].y+v43*5.5;BossFace=7;if (sv_209Frame_2==0) BossFace=5;if ( sv_1914[i].y>280)f101 (Math.round(121+Math.random()*2),sv_1914[i].x+Math.random()*50,sv_1914[i].y-75,5+Math.random()*35,-150-Math.random()*180,1);if (Goal_Y>200){ sv_169=1;}
break;case -1:
Goal_X=190;Goal_Y=160;if ( (Math.abs(sv_1914[i].x-Goal_X)+Math.abs(sv_1914[i].y-Goal_Y))>10) BossTimer=0;BossFace=7;if (BossTimer>100){ sv_448=0;if (sv_3610==0) {sv_448 -=2;f75();f73 (6);}
}
if (sv_209Frame_2==0) sv_1914[i].frame=16;break;case 0:
Goal_X=170;Goal_Y=150;if ( (Math.abs(sv_1914[i].x-Goal_X)+Math.abs(sv_1914[i].y-Goal_Y))>10) BossTimer=0;BossFace=4;if (BossTimer>50){ BossTimer=0;BossData=0;sv_448=2;if (sv_2611==3){ switch (Math.floor(Math.random()*3)){ case 0:BossAttack=0;break;case 1:BossAttack=1;break;case 2:BossAttack=2;break;}
}
if ( BossAttack==0) sv_448=1;if ( BossAttack==1) sv_448=2;if ( BossAttack==2) sv_448=4;BossAttack++;if ( BossAttack==3) BossAttack=0;}
break;case 1:
Goal_X=160;Goal_Y=120;BossFace=4;if (sv_2611==2 ) sv_1914[i].y=sv_1914[i].y*0.95+Goal_Y*0.05;if (sv_2611==3 ) sv_1914[i].y=sv_1914[i].y*0.96+Goal_Y*0.04;if ( BossTimer<99 && (Math.abs(sv_1914[i].x-Goal_X)+Math.abs(sv_1914[i].y-Goal_Y))>10) BossTimer=0;if (BossTimer>0){ BossFace=5;}
if (BossTimer>30 && BossTimer<100){ sv_1914[i].vy=-2;BossTimer=100;f107 (68,sv_1914[i].x+30,sv_1914[i].y-26);f73 (5);}
if (BossTimer>20)
sv_1914[i].frame=16;if (BossTimer>130){ BossTimer=0;BossData ++;if (BossData==2+sv_2611) sv_448=0;}
break;case 2:
Goal_X=220;Goal_Y=120;BossFace=6;if ( (Math.abs(sv_1914[i].x-Goal_X)+Math.abs(sv_1914[i].y-Goal_Y))>10) BossTimer=0;if (BossTimer>30){ sv_448=3;f73 (7);}
break;case 3:
Goal_X=0;Goal_Y=120;sv_1914[i].x -=v43*0.02;if (sv_209Frame_2==0) BossFace=4;else BossFace=6;if ( sv_1914[i].x>Goal_X+5 ) BossTimer=0;if (BossTimer>30){ sv_448=0;}
sv_1914[i].frame=16;break;case 4:
Goal_X=220;Goal_Y=280;BossFace=6;if ( (Math.abs(sv_1914[i].x-Goal_X)+Math.abs(sv_1914[i].y-Goal_Y))>10) BossTimer=0;if (BossTimer>30){ sv_448=5;f73 (7);}
break;case 5:
Goal_X=-50;Goal_Y=280;sv_1914[i].x -=v43*0.04;sv_1914[i].vx=-0.1;f101 (Math.round(121+Math.random()*2),sv_1914[i].x+Math.random()*50,sv_1914[i].y-75,5+Math.random()*35,-150-Math.random()*180,1);if (sv_209Frame_2==0) BossFace=4;else BossFace=6;if ( sv_1914[i].x>Goal_X+5 ) BossTimer=0;if (BossTimer>30){ sv_448=6;}
break;case 6:
Goal_X=0;Goal_Y=100;sv_1914[i].y -=v43*0.01;if ( sv_1914[i].y<Goal_Y ){ sv_448=0;}
break;}
if (sv_448 >-1 && sv_1914[i].x<sv_41-10 && sv_1914[i].x>sv_41-55 && sv_1914[i].y<sv_59+60 && sv_1914[i].y>sv_59-45){ if ( sv_1914[i].frame==16 && sv_1412<0){ sv_448=-1;sv_3610--;f101 (49,sv_41,sv_59-50,0,-50,0);sv_4114+=500;f73 (6);}
else
f137();}
if (sv_448 >-1 && sv_1914[i].x<sv_41+40 && sv_1914[i].x>sv_41-10 && sv_1914[i].y>sv_59-20 && sv_1914[i].y<sv_59+80 ){ f137();}
if (sv_1914[i].x<Goal_X-5) sv_1914[i].x +=v43*0.01;if (sv_1914[i].x>Goal_X+5) sv_1914[i].x -=v43*0.01;if (sv_1914[i].y<Goal_Y-5) sv_1914[i].y +=v43*0.01;if (sv_1914[i].y>Goal_Y+5) sv_1914[i].y -=v43*0.01;if (sv_2611==3){ if (sv_1914[i].x<Goal_X-5) sv_1914[i].x +=v43*0.06;if (sv_1914[i].x>Goal_X+5) sv_1914[i].x -=v43*0.01;if (sv_1914[i].y<Goal_Y-5) sv_1914[i].y +=v43*0.03;if (sv_1914[i].y>Goal_Y+5) sv_1914[i].y -=v43*0.06;}
sv_1914[i].x=sv_1914[i].x*0.99+Goal_X*0.01;sv_1914[i].y=sv_1914[i].y*0.99+Goal_Y*0.01;}
var CircleSize=60;var StarCycle=0;var FinalStar=300;var sv_169=0;function f108(){ if (StarsPosX>999) return;if (FinalStar<54){ StarCycle +=v43*0.002;f112();f52(128,120,0);f55 (1,1,1,1);f51 (9);f123();if (FinalStar<-350 && sv_2611<4){ if (STAGE==3 && sv_169==0){ sv_169=666;StarsPosX=10000;sv_177=201;sv_2212=true;FinalStar=200;CircleSize=0;StarCycle=0;return;}
STAGE++;if (STAGE==4) {STAGE=1;sv_2611++;}
if (sv_2611>3) { sv_177=230;FinalStar=-400;return;}
FinalStar=200;CircleSize=0;StarCycle=0;sv_177=202;StarsPosX=10000;sv_306=0;sv_3114=0;Scroll_Cycle=0;sv_3711=0;sv_2812=0;sv_390=0;sv_295=0;f119 (sv_2611+'-'+STAGE);return;}
}
if ( StarCycle > 6.28) StarCycle -=6.28;if (sv_177==210){ CircleSize=(CircleSize+65)*0.5;FinalStar -=v43 *0.1;}
else
{ CircleSize=(CircleSize+35)*0.5;StarCycle=0;FinalStar=200+Math.cos(sv_306*0.1)*3;}
f63(1);var StarsToSave=12 - ((sv_2611-1)*4+STAGE+sv_169);for (var i=0;i< 12;i++){ var x=StarsPosX + Math.cos(StarCycle+i*0.523598775598-1.57079632679)*CircleSize+30;var y=120 + Math.sin(StarCycle+i*0.523598775598-1.57079632679)*CircleSize;f112();f52(x,y,-1);if ( (FinalStar<54 && i==0) || i> (StarsToSave)) f51(10);else f51(11);f123();v33 +=2;}
if (FinalStar>54){ f112();f52(StarsPosX+30,FinalStar,-1);f51(10);f123();}
else
{ f81 (center);f112();f52(StarsPosX+30,96,0);f55 (1,0.8,0,1.0);if (StarsToSave>0){ f92(0, "ENCORE");f52(0,16,0);f92(0, StarsToSave+" ETOILES");f52(0,16,0);f92(0, "A SAUVER");f52(0,16,0);}
else
{ f52(0,-8,0);f92(0, "TOUTES");f52(0,16,0);f92(0,"LES ETOILES");f52(0,16,0);f92(0, "SONT");f52(0,16,0);f92(0, "SAUVEES!!");f52(0,16,0);}
f123();}
}
var Sprite_Vertex;var Sprite_Vertex64;var Sprite_UV;var Sprite_Index;function f138(){ Sprite_Vertex=gl.createBuffer();gl.bindBuffer(gl.ARRAY_BUFFER, Sprite_Vertex);var vertices=[ 0, 0, -0.2,
32, 0, -0.2,
32, -1, -0.2,
0, -1, -0.2 ];gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);Sprite_Vertex.itemSize=3;Sprite_Vertex.numItems=4;Sprite_Vertex64=gl.createBuffer();gl.bindBuffer(gl.ARRAY_BUFFER, Sprite_Vertex64);var vertices=[ 0, 0, -0.2,
64, 0, -0.2,
64, -1, -0.2,
0, -1, -0.2 ];gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);Sprite_Vertex64.itemSize=3;Sprite_Vertex64.numItems=4;Sprite_UV=gl.createBuffer();gl.bindBuffer(gl.ARRAY_BUFFER, Sprite_UV);var textureCoords=[
0.00001, 0.0,
0.04999, 0.0,
0.04999, 1.0,
0.00001, 1.0 ];gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(textureCoords), gl.STATIC_DRAW);Sprite_UV.itemSize=2;Sprite_UV.numItems=4;Sprite_Index=gl.createBuffer();gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, Sprite_Index);var ndices=[ 0, 1, 2, 0, 2, 3 ];gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(ndices), gl.STATIC_DRAW);Sprite_Index.itemSize=1;Sprite_Index.numItems=6;}
function f117(id,x,y,size_y){ f55 (x,y,id/20,size_y);gl.bindBuffer(gl.ARRAY_BUFFER, Sprite_UV);gl.vertexAttribPointer(shader[v19].TextureCoor, Sprite_UV.itemSize, gl.FLOAT, false, 0, 0);gl.bindBuffer(gl.ARRAY_BUFFER, Sprite_Vertex);gl.vertexAttribPointer(shader[v19].VertexPos, Sprite_Vertex.itemSize, gl.FLOAT, false, 0, 0);gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, Sprite_Index);gl.drawElements(gl.TRIANGLES, Sprite_Index.numItems, gl.UNSIGNED_SHORT, 0);v33 +=2;}
var sv_4114=0;var sv_434=0;var sv_214=3;var sv_1412=0;var sv_1210=0;var sv_1312=false;var AnimationLoop=0;var AnimationStep=0;var sv_2212=false;var sv_2611=1;var STAGE=1;var sv_41=128;var sv_59=120;var sv_177=0;var sv_306=0;var sv_3114=0;var sv_3212=0;var Scroll_Cycle=0;var StageStartTimer=0;var Old_sv_177=-1;var MenuBoing=0;var AboutSwitch=0;v2=450;v7=true;var sv_387=0;var SpacePushed=false;document.addEventListener("keydown", function(event){ if (event.key==" ") sv_387=1;/*
if (event.key=="+" ){ STAGE++;if (STAGE==4) {STAGE=1;sv_2611++;}
if (sv_2611>3) { sv_177=230;FinalStar=-400;return;}
FinalStar=200;CircleSize=0;StarCycle=0;sv_177=202;StarsPosX=10000;sv_306=0;sv_3114=0;Scroll_Cycle=0;sv_3711=0;sv_2812=0;sv_390=0;sv_295=0;f119 (sv_2611+'-'+STAGE);}
*/
}, false);document.addEventListener("keyup", function(event){ if (event.key==" ") sv_387=0;}, false);function f100 (){ MenuBoing *=0.9;if (Old_sv_177!=sv_177) {Old_sv_177=sv_177;MenuBoing=200;}
if (system_IsMobile==1)
sv_387=v37.click;if (scaledsize.x/1.07 < scaledsize.y){ var ScreenScale=scaledsize.x/256/1.1;MouseSCY=v37.y/ScreenScale;MouseSCX=v37.x/ScreenScale;}
else
{ var ScreenScale=800/240;var XX=((scaledsize.x*240/800)-286)*0.5;MouseSCY=v37.y/ScreenScale;MouseSCX=v37.x/ScreenScale-XX;}
gl.clearColor(0, 0, 0, 1);gl.colorMask(false, false, false, true);gl.clear(gl.COLOR_BUFFER_BIT);gl.colorMask(true, true, true, false);switch (sv_177){ case 0:
sv_177=100;sv_434=localStorage['TopScore']*1;if (isNaN(sv_434)) sv_434=0;f59 (-1);gl.clearColor(0.0, 0.0, 0.0, 1.0);gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);f110(0, 256,240);f59 (0);gl.colorMask(true, true, true, true);gl.clearColor(255.0, 255.0, 0.0, 1.0);gl.clear(gl.COLOR_BUFFER_BIT);f59 (-1);f120();f119 ('1-1');sv_177=100;f138();break;case 100:
f69();if (MouseSCX>-20 && MouseSCX<40 && MouseSCY>170 && MouseSCY<290 && v37.click==1 && MenuBoing<5){ sv_387=0;AboutSwitch=1-AboutSwitch;MenuBoing=200;v37.click=-1;}
if (sv_387==1 && MenuBoing<2){ AboutSwitch=0;f76('title',false);sv_306=0;sv_3114=0;Scroll_Cycle=0;sv_4114=0;sv_214=3;sv_3711=0;sv_2812=0;sv_295=0;sv_41=128;sv_59=120;sv_2212=false;sv_1312=false;sv_177=200;sv_2611=1;STAGE=1;}
if (sv_3711>200) sv_3711=0;break;case 200:
f119 (sv_2611+'-'+STAGE);sv_177=202;break;case 202:
f69();sv_2212=false;StageStartTimer +=v43;if (StageStartTimer>3000){ f119 (sv_2611+'-'+STAGE);if (STAGE==1 && sv_214>-1) f76('stage-1',true);if (STAGE==2 && sv_214>-1) f76('stage-2',true);if (STAGE==3 && sv_214>-1) f76('stage-3',true);sv_177=201;sv_306=0;sv_3114=0;Scroll_Cycle=0;sv_3711=0;sv_2812=0;sv_390=0;sv_295=0;sv_2212=false;sv_1312=false;sv_1412=-3;StageStartTimer=0;StarsPosX=10000;sv_169=0;sv_448=0;BossTimer=0;BossMaxLives=0;sv_3610=0;if (sv_214==-1) {sv_177=100;f75();}
}
break;case 230:
f83();break;case 201:
f69();if (sv_434<sv_4114){ sv_434=sv_4114;localStorage.setItem('TopScore', sv_434);}
break;case 210:
f69();sv_2212=false;break;}
f59 (-1);f53 ();f63(6);f55 (1,1,1,1.0);if (scaledsize.x/1.07 < scaledsize.y){ var ScreenScale=scaledsize.x/256/1.1;f52(sv_2412.x,ScreenScale*120,0);f104(ScreenScale*1.1,ScreenScale,1);MouseSCY=v37.y/ScreenScale;MouseSCX=v37.x/ScreenScale;}
else
{ var ScreenScale=800/240;f52(sv_2412.x,sv_2412.y,0);f104(ScreenScale*1.1,ScreenScale,1);var XX=((scaledsize.x*240/800)-286)*0.5;MouseSCY=v37.y/ScreenScale;MouseSCX=v37.x/ScreenScale-XX;}
f50(2, 1);f50(2, 0);f130(0);f52(0,240,0);f104(1,-1,1);f55 (1,1,1,0.2);f130(0);}
var MouseSCX=0;var MouseSCY=0;function f118(Col_x, Col_y ,Size_Y, Velocity_Y, CanBreakCollect){ var NewCol_x=Col_x;var NewCol_y=Col_y;var NewVelocity_Y=Velocity_Y;var OnGound=false;var Blocked=false;for (var x=0;x<10;x++)
for (var y=0;y<8;y++){ var X=x*32-sv_3711;var Y=y*32;var id=sv_3412[x+sv_295][y];if (y==0) var id_Top=500;else var id_Top=sv_3412[x+sv_295][y-1];if (y==7) var id_Bot=1;else var id_Bot=sv_3412[x+sv_295][y+1];if (x==0) var id_Lef=500;else var id_Lef=sv_3412[x+sv_295-1][y];var id_Rig=sv_3412[x+sv_295+1][y];if (id_Top==0) id_Top=500;if (id_Bot==0) id_Bot=500;if (id_Lef==0) id_Lef=500;if (id_Rig==0) id_Rig=500;if ( id>50 && id <61 && CanBreakCollect==true){ if (Col_x>X-25 && Col_x<X+25 && Col_y>Y-1 && Col_y<Y+32+Size_Y){ f101 (id,X,Y,0,-200,1);if (id !=60){ f101 (46,X,Y+10,0,-50,0);f73 (0);sv_4114+=15;}
else
{ f101 (50,X,Y+10,0,-50,0);f73 (0);f73 (0);f73 (2);sv_214++;}
sv_3412[x+sv_295][y]=0;}
}
if ( id<41 && id !=0){ if (Col_x>X-25 && Col_x<X+25){ if (Velocity_Y>0 && Col_y>Y-1 && Col_y<Y+16 && id_Top >40){ if (sv_614[x+sv_295][y]<-2){ NewCol_y=Y+sv_614[x+sv_295][y];NewVelocity_Y=-4+Math.random()*3;}
else { if (Velocity_Y>2) {sv_614[x+sv_295][y]=2;f73 (3);}
OnGound=true;NewCol_y=Y;NewVelocity_Y=0;}
}
if (Col_x<X-16 && id_Lef >40 && Col_y>Y && Col_y<Y+Size_Y+32 ) { Blocked=true;NewCol_x=X-25;Col_x=X-25;}
if (Col_x>X+16 && id_Rig >40 && Col_y>Y && Col_y<Y+Size_Y+32 && CanBreakCollect==false ) { Blocked=true;NewCol_x=X+25;Col_x=X+25;}
if (Velocity_Y<0 && Col_y-Size_Y>Y && Col_y<Y+32+Size_Y && Col_x > X-25 && id_Bot >40){ NewCol_y=Y+32+Size_Y;NewVelocity_Y=2;sv_614[x+sv_295][y]=-16;f73 (3);if (id==11 && CanBreakCollect==true){ f101 (41+Math.floor(Math.random()*3.8),X,Y,-50-Math.random()*30,-180-Math.random()*60,1);f101 (41+Math.floor(Math.random()*3.8),X,Y,-25,-250-Math.random()*100,1);f101 (41+Math.floor(Math.random()*3.8),X,Y,25,-250-Math.random()*100,1);f101 (41+Math.floor(Math.random()*3.8),X,Y,50+Math.random()*30,-180-Math.random()*60,1);f101 (45,X,Y+10,0,-50,0);sv_3412[x+sv_295][y]=0;sv_4114+=10;f73 (1);}
}
}
}
}
return {x:NewCol_x, y:NewCol_y, v:NewVelocity_Y, OnGround:OnGound, Blocked: Blocked}
}
var TextScroll=0;function f83(){ TextScroll +=v43*0.1;if (TextScroll>900) TextScroll-=900;sv_306 +=v43*0.1;if (sv_306>628) sv_306-=628;sv_3114 +=v43*0.01;if (sv_3114>628) sv_3114-=628;sv_3212 +=v43*0.005;if (sv_3212>628) sv_3212-=628;f59 (0);f53 (256,240);gl.clearColor(0.0, 0.0, 0.0, 1.0);gl.clear(gl.COLOR_BUFFER_BIT);f63(1);f55 (1,1,1,1.0);StarCycle +=v43*0.002;f52(0,-16,0);f112();f52(128,120,0);f55 (1,1,1,1);f51 (24);f123();f52(16,0,0);f55 (0,0,0,1);f112();f104(1,0.5,1);for (var i=0;i< 12;i++){ var x=StarsPosX + Math.cos(StarCycle+i*0.523598775598-1.57079632679)*CircleSize+30;var y=320 + Math.sin(StarCycle+i*0.523598775598-1.57079632679)*CircleSize;f112();f52(x,y,-1);f51(10);f123();v33 +=2;}
f123();f55 (1,1,1,1);for (var i=0;i< 12;i++){ var x=StarsPosX + Math.cos(StarCycle+i*0.523598775598-1.57079632679)*CircleSize+30;var y=120 + Math.sin(StarCycle+i*0.523598775598-1.57079632679)*CircleSize;f112();f52(x,y,-1);f51(10);f123();v33 +=2;}
f63(4);f50(LevelTexture, 0);f17();f55 (1,1,1,1.0);f63(3);f50(6, 0);f17();f117(sv_1210,sv_41,sv_59,55);f63(1);f82();f63(1);f55 (1,1,1,1);if (Math.cos(sv_306*0.1)>0) f55 (0,0,0,1);f81 (center);f112();f52(128-16,24,0);if (system_IsMobile==1)
f92(0, "TOUCHEZ L'ECRAN");else
f92(0, "TOUCHE ESPACE");f52(0,13,0);f92(0, "POUR CONTINUER");f123();f55 (1,0.8,0,1);f81 (left);f112();f52(256-TextScroll,100,0);f104(2,2,2);f92(0, "FELICITATIONS! L'EUROPE EST SAUVE !");f52(450,0,0);f92(0, "FELICITATIONS! L'EUROPE EST SAUVE !");f123();f59 (-1);if (sv_387==1){ sv_177=100;sv_2611=1;STAGE=1;FinalStar=200;CircleSize=0;StarCycle=0;StarsPosX=10000;sv_306=0;sv_3114=0;Scroll_Cycle=0;sv_3711=0;sv_2812=0;sv_390=0;sv_295=0;f119 (sv_2611+'-'+STAGE);}
}
function f69(){ if (sv_187 !=true) return;sv_306 +=v43*0.1;if (sv_306>628) sv_306-=628;sv_3114 +=v43*0.01;if (sv_3114>628) sv_3114-=628;sv_3212 +=v43*0.005;if (sv_3212>628) sv_3212-=628;if (sv_2212==true) Scroll_Cycle +=v43*0.01;if (STAGE==2) Scroll_Cycle=220;if (Scroll_Cycle>512) Scroll_Cycle-=512;f59 (0);f53 (256,240);gl.clearColor(0.0, 0.0, 0.0, 1.0);gl.clear(gl.COLOR_BUFFER_BIT);f63(1);f55 (1,1,1,1.0);f112();var sv_429=4;if (sv_2611==2) sv_429=19;if (sv_2611==3) sv_429=21;if (STAGE==3) sv_429=14;f112();f52(-Scroll_Cycle,120 ,0);f51 (sv_429);f52(512,0 ,0);f51 (sv_429);f123();f112();f52(0,-16 ,0);f121 ();f63(4);f50(LevelTexture, 0);f17();f70();f63(1);f123();if (PlayerBlocked==true && sv_2611==1 && STAGE==1 && sv_295<20){ f55 (1,1,1,1);if (Math.cos(sv_306*0.1)>0) f55 (0,0,0,1);f81 (center);f112();f52(128,80,0);if (system_IsMobile==1)
f92(0, "TOUCHEZ L'ECRAN");else
f92(0, "TOUCHE ESPACE");f52(0,13,0);f92(0, "POUR SAUTER");f123();}
if (sv_177==100){ f112();f63(1);f112();f52(128,120,0);f55 (1,1,1,1);f51 (9);f123();}
f55 (1,1,1,1.0);f81 (left);f112();f52(10,10,0);f92(0, "SCORE");f52(0,13,0);f92(0, sv_4114+" ");f123();f81 (right);f112();f52(243,10,0);f92(0, "VIES");f52(0,13,0);f92(0, "@x"+sv_214);f123();f81 (center);f112();f52(128,10,0);f92(0, "TOP SCORE");f52(0,13,0);f92(0, sv_434+"");if (sv_169==666){ f52(0, 179,0);if (sv_2611==1) f92(0, "MELANRUS");if (sv_2611==2) f92(0, "MARUS POPUS");if (sv_2611==3) f92(0, "TWEETUS");f52(0,22,0);f63(1);f52(-BossMaxLives*10-9,0,0);for (var i=0;i<BossMaxLives;i++){ f52(20,0,0);if (sv_3610>i)f51 (16);else f51 (17);}
}
f123();if (sv_177==100){ f112();f52(128,180,0);f55 (1.0,0,0,1.0);if (Math.cos(sv_306*0.1)>0) f55 (1,0.5,0,1.0);if (system_IsMobile==1)
f92(0, "TOUCHEZ L'ECRAN");else
f92(0, "TOUCHE ESPACE");f52(0,13,0);f92(0, "POUR JOUER");f123();f55 (1,1,1,1.0);f112();f52(128,95-MenuBoing,0);if (AboutSwitch==0)
f51 (3);else f51 (25);f123();f112();f52(20,200+MenuBoing+Math.cos(sv_3114)*3,0);f51 (26);f123();}
if (sv_177==202){ f63(1);f112();f52(128,120,0);f55 (1,1,1,1);f51 (9);f123();f63(3);f50(6, 0);f17();sv_41=128-12;sv_59=120;sv_1210=0;if (sv_214<0)sv_1210=7+sv_209SlowFrame_2;f117(sv_1210,sv_41,sv_59,55);f63(1);f63(1);if (sv_214>-1){ f112();f52(128,50,0);f55 (1,1,1,1.0);f92(0, "STAGE "+sv_2611+"-"+STAGE);f52(0,83,0);f92(0, "VIES @x"+sv_214);f123();}
else
{ f112();f52(128,130,0);f55 (1,1,1,1.0);f92(0, "GAME OVER");f123();}
}
/*
f52(10,40,0);f81 (left);f92(0, MouseSCX+" "+MouseSCY);f52(0,20 ,0);f123();*/
f59 (-1);}
var sv_187=false;function f119 (LevelID){ sv_1914=[];sv_187=false;var xmlhttp;if (window.XMLHttpRequest){ xmlhttp=new XMLHttpRequest();}
else
{ xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");}
xmlhttp.onreadystatechange=function(){ if (xmlhttp.readyState==4){ f85(xmlhttp.responseText);sv_187=true;}
}
xmlhttp.overrideMimeType("text/plain");xmlhttp.open("GET","stage-"+LevelID+".tmx?"+Math.random()*99999,true);xmlhttp.send();}
function f84(rows) { var arr=[];for (var i=0;i<rows;i++) { arr[i]=[];}
return arr;}
var sv_3412=[];var sv_3310=[];var sv_614=[];function f85(Datas){ sv_3412=[];sv_3412=f84(1000);sv_3310=[];sv_3310=f84(1000);sv_614=[];sv_614=f84(1000);var Lines=Datas.split("\n");for (var i=0;i< 8;i++){ var Parts=Lines[i+17].split(",");for (var j=0;j< 600;j++){ sv_3412 [j][i]=Parts[j];sv_614 [j][i]=0;}
}
for (var i=0;i< 8;i++){ var Parts=Lines[i+5].split(",");for (var j=0;j< 600;j++){ sv_3310 [j][i]=Parts[j];}
}
}
var Tiles_Vertex;var Tiles_UV;var Tiles_Index;var Tiles=[];function f120(){ Tiles=[];Tiles.push([0,0]);var uv_s=0;var uv_t=0;for (var y=0;y < 20;y++)
for (var x=0;x < 10;x++){ Tiles.push([uv_s, -uv_t]);uv_s +=0.1;if (uv_s>0.9) {uv_s=0;uv_t +=0.05;}
}
Tiles_Vertex=gl.createBuffer();gl.bindBuffer(gl.ARRAY_BUFFER, Tiles_Vertex);var vertices=[ 0, 0, -0.2,
32, 0, -0.2,
32, 32, -0.2,
0, 32, -0.2 ];gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);Tiles_Vertex.itemSize=3;Tiles_Vertex.numItems=4;Tiles_UV=gl.createBuffer();gl.bindBuffer(gl.ARRAY_BUFFER, Tiles_UV);var textureCoords=[
0.00001, 1.0,
0.09999, 1.0,
0.09999, 0.95,
0.00001, 0.95 ];gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(textureCoords), gl.STATIC_DRAW);Tiles_UV.itemSize=2;Tiles_UV.numItems=4;Tiles_Index=gl.createBuffer();gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, Tiles_Index);var ndices=[ 0, 1, 2, 0, 2, 3 ];gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(ndices), gl.STATIC_DRAW);Tiles_Index.itemSize=1;Tiles_Index.numItems=6;}
var sv_88=[];function f70(){ var sv_3514=-1;for (var i=0;i<sv_88.length;i++){ sv_88[i].x +=sv_88[i].vx*v43;sv_88[i].y +=sv_88[i].vy*v43;sv_88[i].vx *=0.99;sv_88[i].vy +=sv_88[i].grav*v43;if (sv_2212==true) sv_88[i].x -=v43*0.08;f58(sv_88[i].id,sv_88[i].x,sv_88[i].y);if (sv_88[i].y<-64 || sv_88[i].y>300) sv_3514=i;}
if (sv_3514 !=-1){ sv_88[sv_3514].id=sv_88[sv_88.length-1].id;sv_88[sv_3514].x=sv_88[sv_88.length-1].x;sv_88[sv_3514].y=sv_88[sv_88.length-1].y;sv_88[sv_3514].vx=sv_88[sv_88.length-1].vx;sv_88[sv_3514].vy=sv_88[sv_88.length-1].vy;sv_88[sv_3514].grav=sv_88[sv_88.length-1].grav;sv_88.pop();}
}
function f58(id,x,y){ f55 (x,y,Tiles[id][0],Tiles[id][1]);gl.bindBuffer(gl.ARRAY_BUFFER, Tiles_UV);gl.vertexAttribPointer(shader[v19].TextureCoor, Tiles_UV.itemSize, gl.FLOAT, false, 0, 0);gl.bindBuffer(gl.ARRAY_BUFFER, Tiles_Vertex);gl.vertexAttribPointer(shader[v19].VertexPos, Tiles_Vertex.itemSize, gl.FLOAT, false, 0, 0);gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, Tiles_Index);gl.drawElements(gl.TRIANGLES, Tiles_Index.numItems, gl.UNSIGNED_SHORT, 0);v33 +=2;}
function f101 (id,x,y,vx,vy,grav){ sv_88.push({id:id,x:x,y:y,vx:vx*0.001,vy:vy*0.001,grav:grav*0.001});}
function f39(id,x,y,idx,idy){ if (id*1 !=id) return;if (id==0 && id !==undefined) return;if (id==111) id=Math.floor(111+sv_209Frame_4);if (id==101) StarsPosX=x;if (id==101 && x<sv_41-16 && sv_177==201){ f101 (91,x,y-32,-80,-400,1);f101 (92,x+32,y-32,80,-400,1);f101 (93,x+32,y-42,-40,-450,1);f101 (94,x+32,y-42, 40,-450,1);f101 (93,x+32,y-52,-20,-500,1);f101 (94,x+32,y-52, 20,-520,1);sv_3412[idx][idy]=103;sv_3412[idx+1][idy]=104;sv_3412[idx][idy-1]=0;sv_3412[idx+1][idy-1]=0;sv_177=210;f76('stars',false);}
if ( id>50 && id <61) y-=Math.abs(Math.cos(sv_3212+id*11.2+y*13.33)*8)-2;if ( id>60 && id <71)
{ f107 (id,x,y);sv_3412[idx][idy]=0;return;}
f55 (x,y,Tiles[id][0],Tiles[id][1]);gl.bindBuffer(gl.ARRAY_BUFFER, Tiles_UV);gl.vertexAttribPointer(shader[v19].TextureCoor, Tiles_UV.itemSize, gl.FLOAT, false, 0, 0);gl.bindBuffer(gl.ARRAY_BUFFER, Tiles_Vertex);gl.vertexAttribPointer(shader[v19].VertexPos, Tiles_Vertex.itemSize, gl.FLOAT, false, 0, 0);gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, Tiles_Index);gl.drawElements(gl.TRIANGLES, Tiles_Index.numItems, gl.UNSIGNED_SHORT, 0);v33 +=2;}
var sv_3711=0;var sv_295=0;var sv_2812=0;var sv_390=0;var sv_3711Y=0;var StarsPosX=10000;var sv_4014=0;var LevelTexture=5;function f121 (){ if (sv_187 !=true) return;if (sv_2212==true) sv_3711 +=v43*0.08;if (sv_3711>32) {sv_3711-=32;sv_295++;}
if (sv_2212==true) sv_2812 +=v43*0.03;sv_2812 +=sv_4014;if (STAGE==2 && sv_295>11) {sv_4014 +=v43*0.005;if (sv_4014>8) sv_4014=8;} else sv_4014=0;if (sv_2812>32) {sv_2812-=32;sv_390++;}
if (STAGE==2 && sv_295<12) {sv_2812=sv_3711;sv_390=sv_295;}
if (STAGE==2 && sv_295<12) {sv_2812=sv_3711;sv_390=sv_295;}
if (STAGE==2 && sv_390==560) sv_390=254;if (STAGE==3 && sv_169==666 && sv_295>185) sv_295=150;if (sv_390>950) sv_390=950;LevelTexture=5;if (sv_2611==1 && STAGE==2) LevelTexture=12;if (sv_2611==2 && STAGE==1) LevelTexture=18;if (sv_2611==2 && STAGE==2) LevelTexture=20;if (sv_2611==3 && STAGE==1) LevelTexture=22;if (sv_2611==3 && STAGE==2) LevelTexture=23;if (STAGE==3) LevelTexture=13;f63(4);f50(LevelTexture, 0);f17();for (var x=0;x<9;x++)
for (var y=0;y<8;y++){ f39(sv_3310[x+sv_390][y],x*32-sv_2812,y*32-5,x+sv_390,y);}
f55 (1,1,1,1.0);f108();if (sv_177==201 || sv_177==210)
{ f98();f63(3);f50(6, 0);f17();f117(sv_1210,sv_41,sv_59,55);f63(1);}
f82();if ( STAGE==2 && sv_295>11 && Math.cos(sv_306*0.25)>0) f52(0,-1,0);f63(4);f50(LevelTexture, 0);f17();for (var x=0;x<9;x++)
for (var y=0;y<8;y++){ f39(sv_3412[x+sv_295][y],x*32-sv_3711,y*32+sv_614[x+sv_295][y],x+sv_295,y);sv_614[x+sv_295][y] *=0.8;}
f63(1);}
;// Compressed with KorbenDallasMultiPack
