import * as THREE from 'three';

// Scene
const scene = new THREE.Scene();

// Camera
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.z = 5;

// Renderer
const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById("loader").appendChild(renderer.domElement);

// Load logo texture
const texture = new THREE.TextureLoader().load('images/conquer_image.png');
const geometry = new THREE.PlaneGeometry(3, 3);
const material = new THREE.MeshBasicMaterial({ map: texture, transparent: true });
const logo = new THREE.Mesh(geometry, material);
scene.add(logo);

// Animation loop
function animate() {
  requestAnimationFrame(animate);
  logo.rotation.x += 0.02;
  logo.rotation.y += 0.03;
  logo.rotation.z += 0.01;
  renderer.render(scene, camera);
}
animate();

// Resize
window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

// Fake site load
window.addEventListener("load", () => {
  setTimeout(() => {
    document.getElementById("loader").classList.add("hidden");
  }, 3000);
});
