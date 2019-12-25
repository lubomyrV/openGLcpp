#version 330 core

layout (location = 0) in vec3 aPos;
layout (location = 1) in vec3 aColor;
layout (location = 2) in vec2 aTexCoord;

out vec3 ourColor;
out vec2 TexCoord;

uniform float yOffset;

//uniform mat4 transform;
uniform mat4 model;
uniform mat4 view;
uniform mat4 projection;

void main()
{
	//gl_Position = transform * vec4(aPos.x, aPos.y + yOffset, aPos.z, 1.0);

	// note that we read the multiplication from right to left
    gl_Position = projection * view * model * vec4(aPos, 1.0);
	ourColor = aColor;
    TexCoord = aTexCoord;
}
