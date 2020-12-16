import {CUBE_EDGE_LENGTH} from "./data.js";
import {getCubeGroup, getLettersGroup, getRandomLetterGroup} from "./rubiks.js";

let controls, renderer, scene, letter_font, camera;
let lettersGroups;
let nameToGuess = "";
let letters_toggle = document.getElementsByClassName("letters-toggle");

let manager = new THREE.LoadingManager();
manager.onLoad = function() {
  init();
  animate();
}

const loader = new THREE.FontLoader(manager);
loader.load('fonts/LEMON MILK_Regular.json', function (font) {
  letter_font = font;
});

function init() {
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  // Add Objects
  let cubeGroup = getCubeGroup();
  scene.add(cubeGroup);

  // Get Label Groups but don't add to scene
  lettersGroups = {
    "corner": getLettersGroup(letter_font, "corner"),
    "edge": getLettersGroup(letter_font, "edge"),
    "random": new THREE.Group(),
  }

  // Set Camera
  camera.position.set(4 * CUBE_EDGE_LENGTH, 4 * CUBE_EDGE_LENGTH, 6 * CUBE_EDGE_LENGTH);
  camera.lookAt(new THREE.Vector3(0, 0, 0));

  // Add Orbit Controls
  controls = new THREE.OrbitControls(camera, renderer.domElement);
  controls.update();
}

function animate() {
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
}

function randomLetter() {
  // Turn off letter switches
  for (let i = 0; i < letters_toggle.length; i++) {
    letters_toggle[i].checked = false;
  }
  // Remove all existing letters
  for (const [groupName, group] of Object.entries(lettersGroups)) {
    scene.remove(group);
  }
  let group;
  [group, nameToGuess] = getRandomLetterGroup(letter_font);
  lettersGroups["random"] = group
  scene.add(lettersGroups["random"]);
}

function clearRandomLetter() {
  scene.remove(lettersGroups["random"]);
  nameToGuess = "";
}

// Event Handler for Toggle Switches
for (let i = 0; i < letters_toggle.length; i++) {
  letters_toggle[i].addEventListener("change", function () {
    let letterGroup = lettersGroups[this.dataset.lettergroup];
    if (this.checked) {
      scene.add(letterGroup);
    } else {
      scene.remove(letterGroup);
    }
    clearRandomLetter();
  });
}

// Event Handler for Quiz
document.getElementById("quiz").addEventListener("click", function () {
  randomLetter();
});
