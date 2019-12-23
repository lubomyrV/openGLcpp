#version 330 core

out vec4 FragColor;

in vec3 ourColor;
in vec3 ourPosition;
in vec2 TexCoord;

uniform sampler2D ourTexture;
uniform sampler2D texture1;
uniform sampler2D texture2;
uniform float mixValue;

void main()
{
    //FragColor = vec4(ourColor, 1.0f);
    //FragColor = texture(ourTexture, TexCoord);
    //FragColor = texture(ourTexture, TexCoord) * vec4(ourColor, 1.0);
    FragColor = mix(texture(texture1, TexCoord), texture(texture2, TexCoord), mixValue);
    //reverse direction
    //FragColor = mix(texture(texture1, TexCoord), texture(texture2, vec2(1.0 - TexCoord.x, TexCoord.y)), 0.2);
}
