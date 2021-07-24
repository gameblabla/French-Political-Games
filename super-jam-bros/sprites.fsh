precision highp int;
precision highp float;


uniform sampler2D Texture0;

varying vec2 vTextureCoord;

void main(void)
{
gl_FragColor = texture2D(Texture0, vec2(vTextureCoord.s, vTextureCoord.t));
}
