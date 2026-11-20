#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;

vec3 palette( float t ) {
    vec3 a = vec3(0.398, 0.268, 0.468);
    vec3 b = vec3(0.558, 0.171, 0.248);
    vec3 c = vec3(1.618, 1.638, -0.672);
    vec3 d = vec3(0.698, 0.228, -0.673);
    return a + b*cos(6.28318*(c*t+d));
}

void main() {
    vec2 uv = gl_FragCoord.xy/u_resolution.xy*2.-1.;
    vec3 final = vec3(0.,0.,0.);

    for(int i = 0; i < 2; i++) {
    	uv = fract(uv)-.5;
    	float d = 0.005/abs(sin(length(uv)*10.192+u_time)/9.360*cos(length(uv*5.072)));
    	final += d * palette(u_time/10.);
    }

    gl_FragColor = vec4(final,1.0);
}
