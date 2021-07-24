precision highp int;
precision highp float;

uniform vec4 Colors;
uniform sampler2D Texture0;
uniform sampler2D Texture1;

varying vec2 vTextureCoord;

void main(void)
{

vec2 uvCurve = vTextureCoord.st;
uvCurve.s -= sin(vTextureCoord.t*3.14)*0.055*(vTextureCoord.s-0.5);
uvCurve.t -= sin(vTextureCoord.s*3.14)*0.055*(vTextureCoord.t-0.5);
vec3 ColorA = texture2D(Texture0, vec2(uvCurve.s, uvCurve.t)).rgb;
ColorA.gb += texture2D(Texture0, vec2(uvCurve.s-0.001, uvCurve.t)).gb;
ColorA.r  += texture2D(Texture0, vec2(uvCurve.s, uvCurve.t+0.001)).r;


ColorA.rgb *= texture2D(Texture1, vec2(uvCurve.s, uvCurve.t)).rgb;
gl_FragColor = vec4(ColorA*0.9,1.0)*Colors;


}
