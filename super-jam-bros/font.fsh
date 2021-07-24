precision mediump float;

uniform vec4 Colors;
uniform sampler2D Texture0;

varying vec2 vTextureCoord;

void main(void) 
{

float Alpha = texture2D(Texture0, vTextureCoord.st).a;
if ( Alpha <0.3 ) discard;
gl_FragColor = vec4(Colors.rgb, Alpha*2.0);    
}
