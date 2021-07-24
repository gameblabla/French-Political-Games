attribute vec3 VertexPos;
attribute vec2 TextureCoor;

uniform mat4 PrMatrix;
uniform mat4 MvMatrix;
uniform mat4 NoMatrix;
uniform mat4 CaMatrix;

varying vec2 vTextureCoord;
uniform vec4 Colors;
void main(void)
{
vec4 Vpos = vec4(VertexPos, 1.0);
Vpos.x += Colors.x;
Vpos.y += Colors.y;

	gl_Position = PrMatrix * CaMatrix * MvMatrix * Vpos;
	vTextureCoord = TextureCoor+Colors.zw;
}
