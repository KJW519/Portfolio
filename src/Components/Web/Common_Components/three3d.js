import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import styled from 'styled-components';

// CanvasWrapper styled-components 추가
const CanvasWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #282c34;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ThreeScene = () => {
  const canvasRef = useRef(null); // useRef를 사용하여 렌더링된 캔버스를 저장

  useEffect(() => {
    // 1. 씬, 카메라, 렌더러 설정
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75, // 시야각 (FOV, Field of View)
      window.innerWidth / window.innerHeight, // 화면 비율
      0.1, // 가까운 렌더링 거리
      1000 // 먼 렌더링 거리
    );

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight); // 화면 크기 맞추기

    // 2. 렌더링된 캔버스를 CanvasWrapper div 안에 추가
    if (canvasRef.current && !canvasRef.current.contains(renderer.domElement)) {
      canvasRef.current.appendChild(renderer.domElement); // #threeCanvas에 캔버스 추가 (한 번만 추가)
    }

    // 3. 큐브 생성 (기본적인 3D 오브젝트)
    const geometry = new THREE.BoxGeometry(); // 큐브 형태
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 }); // 색상 설정
    const cube = new THREE.Mesh(geometry, material); // 큐브 메쉬 생성
    scene.add(cube); // 씬에 큐브 추가

    // 4. 카메라 위치 설정
    camera.position.z = 5; // 카메라를 Z축으로 5만큼 뒤로 설정

    // 5. 애니메이션 루프 (큐브가 계속 회전하도록)
    const animate = () => {
      requestAnimationFrame(animate); // 애니메이션을 반복 호출

      // 큐브 회전
      cube.rotation.x += 0.01; // X축으로 회전
      cube.rotation.y += 0.01; // Y축으로 회전

      // 씬 렌더링
      renderer.render(scene, camera);
    };

    animate(); // 애니메이션 시작

    return () => {
      // 컴포넌트가 언마운트되면 리소스를 정리해줍니다
      renderer.dispose();
    };
  }, []); // useEffect는 처음 한번만 실행되도록 빈 배열을 두번째 인자로 전달

  return <CanvasWrapper ref={canvasRef} />; // 캔버스가 들어갈 div에 ref 연결
};

export default ThreeScene;
