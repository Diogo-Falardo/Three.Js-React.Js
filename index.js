import * as THREE from "three";

const w = window.innerWidth;
const h = window.innerHeight;


const renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setSize(w, h);
document.body.appendChild(renderer.domElement);

const scene = new THREE.Scene();

// Settings For the Object
// Diferent objects have diferent assets

const radius = 4;  
const detail = 1;

// BoxGeometry -> Cube
const geometry = new THREE.DodecahedronGeometry(radius, detail);
const material = new THREE.MeshLambertMaterial({color: '#468585', emissive: '#242424'});

const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// Light 
// Color of the light
// Intensity of the light
const light = new THREE.DirectionalLight('#dd2512', 100);
light.position.set(1, 1, 1);
scene.add(light);

const fov = 100; // Distance
const aspect = w / h; // Aspect Ratio
const near = 1; // If object is near that position it removes it from the camera
const far = 10; // If object is far from that position it removes it from the camera

const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
// Camera position 
// lower the number closer to the object 
// if too low might impact and we cant see the object
camera.position.z = 10;

// Render loop
function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.001; // Example animation
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
}

animate();




