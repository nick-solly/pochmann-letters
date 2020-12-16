const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Add Objects
populateScene(scene);

// Set Camera
camera.position.set(4 * CUBE_EDGE_LENGTH, 4 * CUBE_EDGE_LENGTH, 6 * CUBE_EDGE_LENGTH);
camera.lookAt(new THREE.Vector3(0, 0, 0));

// Add Orbit Controls
const controls = new THREE.OrbitControls( camera, renderer.domElement );
controls.update();

// Animate
function animate() {
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
}

animate();
