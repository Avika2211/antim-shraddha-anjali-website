
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Plane } from '@react-three/drei';
import * as THREE from 'three';

const FluidMaterial = () => {
  const materialRef = useRef<THREE.ShaderMaterial>();
  const uniforms = useRef({
    u_time: { value: 0 },
    u_colorA: { value: new THREE.Color("#FFDEE2") },
    u_colorB: { value: new THREE.Color("#FFB6C1") }
  });

  useFrame((state) => {
    if (materialRef.current) {
      materialRef.current.uniforms.u_time.value = state.clock.getElapsedTime() * 0.5;
    }
  });

  return (
    <Plane args={[20, 20]}>
      <shaderMaterial
        ref={materialRef}
        uniforms={uniforms.current}
        vertexShader={`
          varying vec2 vUv;
          void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `}
        fragmentShader={`
          uniform float u_time;
          uniform vec3 u_colorA;
          uniform vec3 u_colorB;
          varying vec2 vUv;
          
          void main() {
            vec2 p = vUv * 2.0 - 1.0;
            float noise = sin(p.x * 10.0 + u_time) * sin(p.y * 10.0 + u_time) * 0.5;
            vec3 color = mix(u_colorA, u_colorB, noise + 0.5);
            gl_FragColor = vec4(color, 0.5);
          }
        `}
        transparent
      />
    </Plane>
  );
};

const FluidBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas>
        <FluidMaterial />
      </Canvas>
    </div>
  );
};

export default FluidBackground;
