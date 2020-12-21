'use strict';

import {CUBE_DATA, CUBE_STARTING_POSE, CUBIE_DATA} from "./data.js";
import {Cubie, getLettersGroup, getRandomLetterGroup} from "./rubiks.js";
import {TurnQueue} from "./queue.js";

// Variables
let controls, renderer, scene, letter_font, camera, lettersGroups, queue;
let cubies = {};
let nameToGuess = "";
let score = [0, 0];

// DOM Elements
let lettersToggle = document.querySelectorAll('.letters-toggle');
let turnButtons = document.querySelectorAll('#turn-btns button');
let result = document.getElementById("result");
let stats = document.getElementById("stats");

// Loading Assets and Start
let manager = new THREE.LoadingManager();
manager.onLoad = function() {
  Cube.asyncInit('js/cubejs/worker.js', function() {
      document.getElementById("btn-scramble").removeAttribute("disabled");
  })
  init();
  animate();
}
const loader = new THREE.FontLoader(manager);
loader.load('fonts/LEMON MILK_Regular.json', function (font) {
  letter_font = font;
});

// Initialise
function init() {
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  // Create Cube
  initialiseCube();

  // Get Label Groups but don't add to scene
  lettersGroups = {
    "corner": getLettersGroup(letter_font, "corner"),
    "edge": getLettersGroup(letter_font, "edge"),
    "random": new THREE.Group(),
  }

  // Set Camera
  camera.position.copy(CUBE_STARTING_POSE);
  camera.lookAt(new THREE.Vector3(0, 0, 0));

  // Add Orbit Controls
  controls = new THREE.OrbitControls(camera, renderer.domElement);
  controls.update();

  // Axis Helper
  // const axesHelper = new THREE.AxesHelper(20);
  // scene.add(axesHelper);

  // Create Tween Queue
  window.cubies = cubies;
  queue = new TurnQueue();

  window.scene = scene;
  window.queue = queue;
}

function animate() {
  requestAnimationFrame(animate);
  controls.update();
  TWEEN.update();
  renderer.render(scene, camera);
}

function resetCube() {
  hideScramble();
  let originalCubieData, originalCubieID;
  let newCubies = {};
  for (const [cubieID, cubie] of Object.entries(cubies)) {
    originalCubieID = cubie.name;
    scene.attach(cubie);
    originalCubieData = CUBIE_DATA[originalCubieID];
    // console.log(cubieID, cubie.position, originalCubieData.position)
    cubie.position.copy(originalCubieData.position);
    // console.log(cubieID, cubie.rotation);
    cubie.rotation.set(0, 0, 0);
    newCubies[originalCubieID] = cubie;
  }
  window.cubies = newCubies;
}

function initialiseCube() {
  let cubie;
  for (const [cubieID, cubieData] of Object.entries(CUBIE_DATA)) {
    cubie = Cubie(cubieID, cubieData);
    cubies[cubieID] = cubie;
    scene.add(cubie);
  }
}

function randomLetter() {
  // Turn off letter switches
  lettersToggle.forEach(item => {
    item.checked = false;
  });
  // Remove all existing letters
  for (const [groupName, group] of Object.entries(lettersGroups)) {
    scene.remove(group);
  }
  let group, cubeFace;
  [group, nameToGuess, cubeFace] = getRandomLetterGroup(letter_font);
  lettersGroups["random"] = group
  scene.add(lettersGroups["random"]);

  // Camera Move
  new TWEEN.Tween(camera.position).to(CUBE_DATA[cubeFace]['pose'], 500).start();
}

function clearRandomLetter() {
  scene.remove(lettersGroups["random"]);
  nameToGuess = "";
  result.className = "hidden";
}

// Event Handler for Toggle Switches
lettersToggle.forEach(item => {
  item.addEventListener("change", function () {
    let letterGroup = lettersGroups[this.dataset.lettergroup];
    if (this.checked) {
      scene.add(letterGroup);
    } else {
      scene.remove(letterGroup);
    }
  });
});

// Event Handler for Quiz
document.getElementById("quiz").addEventListener("click", function () {
  if (nameToGuess) {
    this.innerText = "Start Quiz";
    clearRandomLetter();
    // Hide Stats
    stats.innerText = "";
    stats.className = "hidden";
  } else {
    this.innerText = "Stop Quiz";
    randomLetter();
    // Show Stats
    score = [0, 0];
    updateScore();
    stats.className = "";
  }
});

// Keypress
document.addEventListener("keydown", function(event) {
  if (nameToGuess && event.code.substring(0, 3) === 'Key' && event.code.length === 4) {
    result.innerText = event.code.substring(3);
    if (event.code === `Key${nameToGuess}`) {
      result.className = 'correct';
      score[0] += 1;
      randomLetter();
    } else {
      result.className = 'incorrect';
      score[1] += 1;
    }
    updateScore();
  }
});

function updateScore() {
  let correct = score[0];
  let incorrect = score[1];
  let total = correct + incorrect;
  let percentage;
  if (total > 0) {
    percentage = Math.round((correct / total) * 100);
  } else {
    percentage = 0;
  }
  stats.innerText = `${correct} of ${total} correct (${percentage}%)`
}

// Turn Buttons
turnButtons.forEach(item => {
  item.addEventListener("click", function () {
    queue.add(this.innerText);
  });
});

document.getElementById("btn-scramble").addEventListener("click", function () {
  Cube.asyncScramble(function(algorithm) {
      resetCube();
      document.getElementById("scramble").innerText = algorithm;
      document.getElementById("scramble-wrapper").className = '';
      queue.algorithm(algorithm);
  });
});

function hideScramble () {
  document.getElementById("scramble-wrapper").className = 'hidden';
}

document.getElementById("btn-reset").addEventListener("click", function () {
  resetCube();
});
