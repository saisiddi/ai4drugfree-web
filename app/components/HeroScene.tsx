"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function HeroScene({ reduced }: { reduced?: boolean }) {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const container = mountRef.current;
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2("#0a0a0a", 0.06);

    const camera = new THREE.PerspectiveCamera(
      60,
      container.clientWidth / container.clientHeight,
      0.1,
      200,
    );
    camera.position.set(0, 1.2, 8);
    camera.lookAt(0, 1, -10);

    const renderer = new THREE.WebGLRenderer({
      antialias: !reduced,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(reduced ? 1 : Math.min(window.devicePixelRatio || 1, 1.5));
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setClearColor("#0a0a0a", 1);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 0.9;
    container.appendChild(renderer.domElement);

    /* ── GROUND PLANE ──────────────────────────────────── */
    const groundGeo = new THREE.PlaneGeometry(80, 80);
    const groundMat = new THREE.MeshStandardMaterial({
      color: "#0d0b09",
      roughness: 0.95,
      metalness: 0.05,
    });
    const ground = new THREE.Mesh(groundGeo, groundMat);
    ground.rotation.x = -Math.PI / 2;
    ground.position.y = -1.5;
    scene.add(ground);

    /* ── CENTRAL LIGHT CORRIDOR (Vertical Spotlight) ──── */
    const corridorGeo = new THREE.PlaneGeometry(3.5, 25);
    const corridorMat = new THREE.MeshBasicMaterial({
      color: "#ff8c00",
      transparent: true,
      opacity: 0.08,
      side: THREE.DoubleSide,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const corridorPlane = new THREE.Mesh(corridorGeo, corridorMat);
    corridorPlane.position.set(0, 5, -8);
    scene.add(corridorPlane);

    /* Second narrower brighter band */
    const corridorInnerGeo = new THREE.PlaneGeometry(1.2, 25);
    const corridorInnerMat = new THREE.MeshBasicMaterial({
      color: "#ffb347",
      transparent: true,
      opacity: 0.12,
      side: THREE.DoubleSide,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const corridorInner = new THREE.Mesh(corridorInnerGeo, corridorInnerMat);
    corridorInner.position.set(0, 5, -6);
    scene.add(corridorInner);

    /* ── VOLUMETRIC LIGHT RAYS (Angular beams) ────────── */
    const rayCount = reduced ? 3 : 6;
    const rays: THREE.Mesh[] = [];
    const rayGeo = new THREE.PlaneGeometry(0.3, 18);
    for (let i = 0; i < rayCount; i++) {
      const rayMat = new THREE.MeshBasicMaterial({
        color: "#ff6a00",
        transparent: true,
        opacity: 0.04 + Math.random() * 0.03,
        side: THREE.DoubleSide,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      });
      const ray = new THREE.Mesh(rayGeo, rayMat);
      const spread = (i - rayCount / 2) * 1.4;
      ray.position.set(spread, 5, -5 - Math.random() * 6);
      ray.rotation.z = (Math.random() - 0.5) * 0.15;
      scene.add(ray);
      rays.push(ray);
    }

    /* ── CITY SKYLINE SILHOUETTES (Left and Right) ────── */
    const buildingMat = new THREE.MeshStandardMaterial({
      color: "#080605",
      roughness: 1,
      metalness: 0,
    });

    const createBuilding = (x: number, w: number, h: number, z: number) => {
      const geo = new THREE.BoxGeometry(w, h, 1.5);
      const mesh = new THREE.Mesh(geo, buildingMat);
      mesh.position.set(x, h / 2 - 1.5, z);
      scene.add(mesh);
      return mesh;
    };

    // Left skyline
    createBuilding(-8, 2.5, 7, -14);
    createBuilding(-6.5, 1.8, 10, -16);
    createBuilding(-5, 2.2, 5.5, -12);
    createBuilding(-10, 3, 8.5, -18);
    createBuilding(-12, 2, 6, -15);

    // Right skyline
    createBuilding(8, 2.5, 8, -14);
    createBuilding(6.5, 1.8, 11, -17);
    createBuilding(5, 2.2, 6.5, -13);
    createBuilding(10, 3, 7.5, -16);
    createBuilding(12, 2, 9, -19);

    /* ── SILHOUETTE FIGURE (Center – standing at crossroads) ── */
    const figureMat = new THREE.MeshStandardMaterial({
      color: "#050403",
      roughness: 1,
      metalness: 0,
    });
    // Body
    const bodyGeo = new THREE.CylinderGeometry(0.25, 0.35, 2.2, 8);
    const body = new THREE.Mesh(bodyGeo, figureMat);
    body.position.set(0, -0.15, -2);
    scene.add(body);
    // Head
    const headGeo = new THREE.SphereGeometry(0.25, 12, 12);
    const head = new THREE.Mesh(headGeo, figureMat);
    head.position.set(0, 1.25, -2);
    scene.add(head);

    /* ── SMOKE / HAZE LAYERS ──────────────────────────── */
    const smokeCount = reduced ? 4 : 8;
    const smokeGroup = new THREE.Group();
    const smokeGeo = new THREE.PlaneGeometry(12, 4);
    const smokeMeshes: THREE.Mesh[] = [];
    for (let i = 0; i < smokeCount; i++) {
      const smokeMat = new THREE.MeshBasicMaterial({
        color: "#1a1410",
        transparent: true,
        opacity: 0.06 + Math.random() * 0.06,
        side: THREE.DoubleSide,
        blending: THREE.NormalBlending,
        depthWrite: false,
      });
      const smoke = new THREE.Mesh(smokeGeo, smokeMat);
      smoke.position.set(
        (Math.random() - 0.5) * 6,
        Math.random() * 3 - 0.5,
        -3 - Math.random() * 10,
      );
      smoke.rotation.z = Math.random() * Math.PI;
      smokeGroup.add(smoke);
      smokeMeshes.push(smoke);
    }
    scene.add(smokeGroup);

    /* ── FLOATING EMBER PARTICLES ─────────────────────── */
    const particleCount = reduced ? 60 : 200;
    const particlesGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const sizes = new Float32Array(particleCount);
    const speeds = new Float32Array(particleCount);

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = Math.random() * 12 - 2;
      positions[i * 3 + 2] = -Math.random() * 20;
      sizes[i] = 0.02 + Math.random() * 0.06;
      speeds[i] = 0.2 + Math.random() * 0.6;
    }

    particlesGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: "#ffb347",
      size: reduced ? 0.04 : 0.07,
      transparent: true,
      opacity: 0.7,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const particleMesh = new THREE.Points(particlesGeo, particleMat);
    scene.add(particleMesh);

    /* ── LIGHTING ─────────────────────────────────────── */
    // Dim ambient for deep black feel
    const ambient = new THREE.AmbientLight("#1a1008", 0.6);
    scene.add(ambient);

    // Central orange spotlight (dramatic vertical beam)
    const spotCenter = new THREE.SpotLight("#ff8c00", 3.5, 40, 0.3, 0.7, 1);
    spotCenter.position.set(0, 15, -2);
    spotCenter.target.position.set(0, -1, -3);
    scene.add(spotCenter);
    scene.add(spotCenter.target);

    // Warm rim from behind
    const rimLight = new THREE.PointLight("#ff6a00", 1.2, 30);
    rimLight.position.set(0, 3, -15);
    scene.add(rimLight);

    // Subtle cool fill to push the edges deeper
    const coolFill = new THREE.PointLight("#1a2a44", 0.5, 25);
    coolFill.position.set(-6, 2, 4);
    scene.add(coolFill);

    /* ── ANIMATION LOOP ───────────────────────────────── */
    let animationFrame = 0;
    let isVisible = true;
    const clock = new THREE.Clock();

    const animate = () => {
      if (isVisible) {
        const t = clock.getElapsedTime();

        // Gentle camera sway
        camera.position.x = Math.sin(t * 0.12) * 0.35;
        camera.position.y = 1.2 + Math.sin(t * 0.08) * 0.12;
        camera.lookAt(0, 0.8, -10);

        // Pulsating corridor light
        corridorMat.opacity = 0.06 + Math.sin(t * 0.5) * 0.025;
        corridorInnerMat.opacity = 0.10 + Math.sin(t * 0.7 + 1) * 0.03;

        // Volumetric ray drift
        for (let i = 0; i < rays.length; i++) {
          (rays[i].material as THREE.Material).opacity = 0.03 + Math.sin(t * 0.3 + i) * 0.02;
          rays[i].rotation.z = Math.sin(t * 0.05 + i * 0.8) * 0.08;
        }

        // Smoke drift
        for (let i = 0; i < smokeMeshes.length; i++) {
          smokeMeshes[i].position.x += Math.sin(t * 0.1 + i * 2) * 0.002;
          (smokeMeshes[i].material as THREE.Material).opacity =
            0.04 + Math.sin(t * 0.15 + i * 1.5) * 0.03;
        }

        // Particle float upward
        const posAttr = particlesGeo.attributes.position as THREE.BufferAttribute;
        for (let i = 0; i < particleCount; i++) {
          let py = posAttr.getY(i);
          py += speeds[i] * 0.008;
          if (py > 10) {
            py = -2;
            posAttr.setX(i, (Math.random() - 0.5) * 20);
            posAttr.setZ(i, -Math.random() * 20);
          }
          posAttr.setY(i, py);
          // Slight horizontal sway
          posAttr.setX(
            i,
            posAttr.getX(i) + Math.sin(t * 0.4 + i * 0.1) * 0.002,
          );
        }
        posAttr.needsUpdate = true;

        // Spotlight intensity pulsation
        spotCenter.intensity = 3.2 + Math.sin(t * 0.6) * 0.4;

        renderer.render(scene, camera);
      }
      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    /* ── VISIBILITY OBSERVER ──────────────────────────── */
    const observer = new IntersectionObserver(
      ([entry]) => { isVisible = entry.isIntersecting; },
      { threshold: 0 },
    );
    observer.observe(container);

    /* ── RESIZE HANDLER ───────────────────────────────── */
    const handleResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };
    window.addEventListener("resize", handleResize);

    /* ── CLEANUP ──────────────────────────────────────── */
    return () => {
      observer.disconnect();
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
      scene.traverse((obj) => {
        if (obj instanceof THREE.Mesh || obj instanceof THREE.Points) {
          obj.geometry.dispose();
          if (Array.isArray(obj.material)) {
            obj.material.forEach((m) => m.dispose());
          } else {
            obj.material.dispose();
          }
        }
      });
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [reduced]);

  return (
    <div
      ref={mountRef}
      className="h-full w-full"
      style={{ willChange: "transform", transform: "translateZ(0)" }}
    />
  );
}
