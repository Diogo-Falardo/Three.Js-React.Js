import * as THREE from 'three';
import {OrbitControls} from "three/addons/controls/OrbitControls.js";

const canvas = document.getElementById('canvas');

// 1. Scene
const scene = new THREE.Scene();
scene.background = new THREE.Color('#242424');

// 2.Camera
let fov = 75;
const aspect = window.innerWidth / window.innerHeight;
let near = 0.1;
let far = 10;
const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
// 2.1 Camera Position
camera.position.z = 5;

// 3. Object
const geometry = new THREE.DodecahedronGeometry();
const material = new THREE.MeshLambertMaterial({color: '#468585', emissive:'#1ddb1a'});

const object = new THREE.Mesh(geometry,material);

// Add Another Object a cube
// Assests of the cube
let cube_width = 2;
let cube_height = 0.1;
let cube_depth = 2;

const cube = new THREE.BoxGeometry(cube_width,cube_height,cube_depth);
const cubeMaterial = new THREE.MeshStandardMaterial({color: '#FFF', emissive:'#242424'})
const box = new THREE.Mesh(cube, cubeMaterial);
box.position.y = -1.5;

// 3.1 add objects to the scene;
scene.add(object);
scene.add(box);

// 4. Lights
const light = new THREE.SpotLight(0x006769, 100);
light.position.set(1,1,1);

// 4.1 add the lights
scene.add(light);

// 5. Renderer
const renderer = new THREE.WebGLRenderer({canvas});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);

// 6. OrbitControls

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.05;
controls.enableZoom = true;
controls.enablePan = true;

// 7. Animations
function animate(){
  requestAnimationFrame(animate);

  object.rotation.x += 0.01;
  object.rotation.y += 0.01;

  box.rotation.y += 0.005; 

  controls.update();
  renderer.render(scene, camera);
}

// 8. Handle (window) Resize

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight)
})


animate();
