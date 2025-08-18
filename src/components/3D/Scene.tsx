import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text, Box, Line } from '@react-three/drei';
import * as THREE from 'three';

// Floating code blocks and tech elements
function FloatingCodeBlocks() {
  const groupRef = useRef<THREE.Group>(null);
  const codeBlock1Ref = useRef<THREE.Mesh>(null);
  const codeBlock2Ref = useRef<THREE.Mesh>(null);
  const codeBlock3Ref = useRef<THREE.Mesh>(null);

  const codeSymbols = ['{ }', '< >', '[ ]', '( )', '//', '/*', '*/', '=>', '&&', '||'];

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    
    if (groupRef.current) {
      groupRef.current.rotation.y = time * 0.05;
    }

    if (codeBlock1Ref.current) {
      codeBlock1Ref.current.position.y = Math.sin(time * 0.6) * 0.8;
      codeBlock1Ref.current.rotation.y = time * 0.3;
    }

    if (codeBlock2Ref.current) {
      codeBlock2Ref.current.position.y = Math.cos(time * 0.4) * 0.6;
      codeBlock2Ref.current.rotation.z = time * 0.2;
    }

    if (codeBlock3Ref.current) {
      codeBlock3Ref.current.position.y = Math.sin(time * 0.8 + 1) * 0.4;
      codeBlock3Ref.current.rotation.x = time * 0.25;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Floating code block 1 */}
      <Box ref={codeBlock1Ref} position={[-4, 2, -3]} args={[1.5, 0.8, 0.1]}>
        <meshStandardMaterial
          color="#1a1a2e"
          metalness={0.1}
          roughness={0.8}
          emissive="#4F9AFF"
          emissiveIntensity={0.1}
          transparent
          opacity={0.8}
        />
      </Box>

      {/* Floating code block 2 */}
      <Box ref={codeBlock2Ref} position={[4, -1, -4]} args={[1.2, 1.2, 0.08]}>
        <meshStandardMaterial
          color="#0d1421"
          metalness={0.2}
          roughness={0.7}
          emissive="#9C4FFF"
          emissiveIntensity={0.15}
          transparent
          opacity={0.7}
        />
      </Box>

      {/* Floating code block 3 */}
      <Box ref={codeBlock3Ref} position={[0, -2.5, -5]} args={[1.8, 0.6, 0.05]}>
        <meshStandardMaterial
          color="#16213e"
          metalness={0.3}
          roughness={0.6}
          emissive="#4FFF9C"
          emissiveIntensity={0.12}
          transparent
          opacity={0.6}
        />
      </Box>

      {/* Additional smaller elements for depth */}
      <Box position={[6, 3, -7]} args={[0.8, 0.4, 0.05]}>
        <meshStandardMaterial
          color="#0f1419"
          metalness={0.4}
          roughness={0.5}
          emissive="#4F9AFF"
          emissiveIntensity={0.08}
          transparent
          opacity={0.5}
        />
      </Box>

      <Box position={[-5, -3.5, -6]} args={[1.0, 0.5, 0.03]}>
        <meshStandardMaterial
          color="#1a1a2e"
          metalness={0.5}
          roughness={0.4}
          emissive="#9C4FFF"
          emissiveIntensity={0.06}
          transparent
          opacity={0.4}
        />
      </Box>
    </group>
  );
}

// Network connection lines
function NetworkConnections() {
  const linesRef = useRef<THREE.Group>(null);
  
  const points = useMemo(() => [
    new THREE.Vector3(-2, 1, -2),
    new THREE.Vector3(0, 0, -3),
    new THREE.Vector3(2, -1, -2),
    new THREE.Vector3(3, 1, -4),
    new THREE.Vector3(-1, -2, -3),
    new THREE.Vector3(-3, 0, -4)
  ], []);

  useFrame((state) => {
    if (linesRef.current) {
      linesRef.current.rotation.y = state.clock.getElapsedTime() * 0.02;
    }
  });

  return (
    <group ref={linesRef}>
      {points.map((point, i) => {
        if (i < points.length - 1) {
          return (
            <Line
              key={i}
              points={[point, points[i + 1]]}
              color="#4F9AFF"
              lineWidth={2}
              transparent
              opacity={0.3}
            />
          );
        }
        return null;
      })}
    </group>
  );
}

// Binary rain and digital particles
function DigitalParticles() {
  const pointsRef = useRef<THREE.Points>(null);
  const binaryRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    
    if (pointsRef.current) {
      pointsRef.current.rotation.y = time * 0.03;
      pointsRef.current.rotation.x = time * 0.01;
    }

    if (binaryRef.current) {
      binaryRef.current.children.forEach((child, i) => {
        child.position.y -= 0.02;
        if (child.position.y < -8) {
          child.position.y = 8;
        }
      });
    }
  });

  // Create matrix-style particle field
  const particleCount = 300;
  const positions = new Float32Array(particleCount * 3);

  for (let i = 0; i < particleCount; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 25;     // x
    positions[i * 3 + 1] = (Math.random() - 0.5) * 25; // y
    positions[i * 3 + 2] = (Math.random() - 0.5) * 15; // z
  }

  return (
    <>
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={particleCount}
            array={positions}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          color="#00ff41"
          size={0.015}
          transparent
          opacity={0.4}
        />
      </points>

      {/* Binary rain streams */}
      <group ref={binaryRef}>
        {Array.from({ length: 15 }, (_, i) => (
          <mesh
            key={i}
            position={[
              (i - 7) * 1.5,
              Math.random() * 16 - 8,
              -8 + Math.random() * 4
            ]}
          >
            <boxGeometry args={[0.05, 0.2, 0.05]} />
            <meshBasicMaterial
              color="#00ff41"
              transparent
              opacity={0.6}
            />
          </mesh>
        ))}
      </group>
    </>
  );
}

export default function Scene3D() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas
        camera={{
          position: [0, 0, 6],
          fov: 75,
        }}
        style={{ background: 'transparent' }}
      >
        {/* Ambient lighting for visibility */}
        <ambientLight intensity={0.4} />
        
        {/* Key lighting for tech aesthetic */}
        <directionalLight
          position={[8, 8, 4]}
          intensity={1.2}
          color="#4F9AFF"
        />
        
        {/* Accent lighting */}
        <directionalLight
          position={[-8, -8, -4]}
          intensity={0.4}
          color="#00ff41"
        />

        {/* Point lights for glow effects */}
        <pointLight position={[3, 0, 2]} intensity={0.8} color="#4F9AFF" />
        <pointLight position={[-3, 0, 2]} intensity={0.6} color="#9C4FFF" />

        <FloatingCodeBlocks />
        <NetworkConnections />
        <DigitalParticles />
      </Canvas>
    </div>
  );
}