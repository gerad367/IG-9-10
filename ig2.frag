#define v vec3
precision mediump float;
uniform vec2 u_resolution;
uniform float u_time;
v p(){return v(0.398,0.268,0.468)+v(0.558,0.171,0.248)*cos(6.28318*(v(1.618,1.638,-0.672)*u_time/10.+v(0.698,0.228,-0.673)));}
void main(){vec2 uv=gl_FragCoord.xy/u_resolution.xy*2.-1.;v final=v(0.,0.,0.);for(int i=0;i<2;i++){uv=fract(uv)-.5;float d=0.005/abs(sin(length(uv)*10.192+u_time)/9.360*cos(length(uv*5.072)));final+=d*p();}gl_FragColor=vec4(final,1.0);}
