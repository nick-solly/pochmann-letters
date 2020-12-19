'use strict';
// White Top, Green Front
// CubieIDs:
// Top Layer
// *----*----*----*
// |  0 |  1 |  2 |
// *----*----*----*
// |  3 |  4 |  5 |
// *----*----*----*
// |  6 |  7 |  8 |
// *----*----*----*
// Middle Slice
// *----*----*----*
// |  9 | 10 | 11 |
// *----*----*----*
// | 12 | 13 | 14 |
// *----*----*----*
// | 15 | 16 | 17 |
// *----*----*----*
// Bottom Layer
// *----*----*----*
// | 18 | 19 | 20 |
// *----*----*----*
// | 21 | 22 | 23 |
// *----*----*----*
// | 24 | 25 | 26 |
// *----*----*----*

const CUBE_BLACK = "#000000";
const CUBE_WHITE = "#FFFFFF";
const CUBE_YELLOW = "#FFFF00";
const CUBE_GREEN = "#008000";
const CUBE_BLUE = "#0000FF";
const CUBE_RED = "#FF0000";
const CUBE_ORANGE = "#FFA500";
export const CUBE_LETTER_COLOR = "#000000";

export const CUBE_EDGE_LENGTH = 5;
export const TURN_TIME = 2000;

export const TURN_CUBIE_SWAPS = {
  'normal': [6, 3, 0, 7, 4, 1, 8, 5, 2],
  'reverse': [2, 5, 8, 1, 4, 7, 0, 3, 6],
  'double': [8, 7, 6, 5, 4, 3, 2, 1, 0],
};

export const CUBE_DATA = {
  'R': {
    'letter_rotation': new THREE.Euler(0, Math.PI / 2, 0),
    'normal': new THREE.Vector3(1, 0, 0),
    'pose': new THREE.Vector3(4, 4, 6).multiplyScalar(CUBE_EDGE_LENGTH),
    'cubies': [8, 5, 2, 17, 14, 11, 26, 23, 20],
  },
  'L': {
    'letter_rotation': new THREE.Euler(0, -Math.PI / 2, 0),
    'normal': new THREE.Vector3(-1, 0, 0),
    'pose': new THREE.Vector3(-4, 4, 6).multiplyScalar(CUBE_EDGE_LENGTH),
    'cubies': [0, 3, 6, 9, 12, 15, 18, 21, 24],
  },
  'U': {
    'letter_rotation': new THREE.Euler(-Math.PI / 2, 0, 0),
    'normal': new THREE.Vector3(0, 1, 0),
    'pose': new THREE.Vector3(-4, 4, 6).multiplyScalar(CUBE_EDGE_LENGTH),
    'cubies': [0, 1, 2, 3, 4, 5, 6, 7, 8],
    // 'after_turn': [6, 3, 0, 7, 4, 1, 8, 5, 2, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26],
    // 'after_reverse_turn': [2, 5, 8, 1, 4, 7, 0, 3, 6, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26],
  },
  'D': {
    'letter_rotation': new THREE.Euler(Math.PI / 2, 0, 0),
    'normal': new THREE.Vector3(0, -1, 0),
    'pose': new THREE.Vector3(-4, -4, 6).multiplyScalar(CUBE_EDGE_LENGTH),
    'cubies': [24, 25, 26, 21, 22, 23, 18, 19, 20],
  },
  'F': {
    'letter_rotation': new THREE.Euler(0, 0, 0),
    'normal': new THREE.Vector3(0, 0, 1),
    'pose': new THREE.Vector3(-4, 4, 6).multiplyScalar(CUBE_EDGE_LENGTH),
    'cubies': [6, 7, 8, 15, 16, 17, 24, 25, 26],
  },
  'B': {
    'letter_rotation': new THREE.Euler(0, Math.PI, 0),
    'normal': new THREE.Vector3(0, 0, -1),
    'pose': new THREE.Vector3(-4, 4, -6).multiplyScalar(CUBE_EDGE_LENGTH),
    'cubies': [2, 1, 0, 11, 10, 9, 20, 19, 18],
  },
};

export const CUBE_STARTING_POSE = CUBE_DATA['U']['pose'];

export const TURN_ANGLES = {
  'normal': - Math.PI / 2,
  'reverse': Math.PI / 2,
  'double': Math.PI,
}

// Colour definition runs R, L, U, D, F, B (normal Rubik's Notation)

export const CUBIE_DATA = {
  // TOP LAYER
  0: {
    type: 'corner',
    position: new THREE.Vector3(-1, 1, -1).multiplyScalar(CUBE_EDGE_LENGTH),
    colors: [CUBE_BLACK, CUBE_ORANGE, CUBE_WHITE, CUBE_BLACK, CUBE_BLACK, CUBE_BLUE],
    names: {'R': '', 'L': 'E', 'U': 'A', 'D': '', 'F': '', 'B': 'R'},
  },
  1: {
    type: 'edge',
    position: new THREE.Vector3(0, 1, -1).multiplyScalar(CUBE_EDGE_LENGTH),
    colors: [CUBE_BLACK, CUBE_BLACK, CUBE_WHITE, CUBE_BLACK, CUBE_BLACK, CUBE_BLUE],
    names: {'R': '', 'L': '', 'U': 'A', 'D': '', 'F': '', 'B': 'Q'},
  },
  2: {
    type: 'corner',
    position: new THREE.Vector3(1, 1, -1).multiplyScalar(CUBE_EDGE_LENGTH),
    colors: [CUBE_RED, CUBE_BLACK, CUBE_WHITE, CUBE_BLACK, CUBE_BLACK, CUBE_BLUE],
    names: {'R': 'N', 'L': '', 'U': 'B', 'D': '', 'F': '', 'B': 'Q'},
  },
  3: {
    type: 'edge',
    position: new THREE.Vector3(-1, 1, 0).multiplyScalar(CUBE_EDGE_LENGTH),
    colors: [CUBE_BLACK, CUBE_ORANGE, CUBE_WHITE, CUBE_BLACK, CUBE_BLACK, CUBE_BLACK],
    names: {'R': '', 'L': 'E', 'U': 'D', 'D': '', 'F': '', 'B': ''},
  },
  4: {
    type: 'center',
    position: new THREE.Vector3(0, 1, 0).multiplyScalar(CUBE_EDGE_LENGTH),
    colors: [CUBE_BLACK, CUBE_BLACK, CUBE_WHITE, CUBE_BLACK, CUBE_BLACK, CUBE_BLACK],
    names: {'R': '', 'L': '', 'U': '', 'D': '', 'F': '', 'B': ''},
  },
  5: {
    type: 'edge',
    position: new THREE.Vector3(1, 1, 0).multiplyScalar(CUBE_EDGE_LENGTH),
    colors: [CUBE_RED, CUBE_BLACK, CUBE_WHITE, CUBE_BLACK, CUBE_BLACK, CUBE_BLACK],
    names: {'R': 'M', 'L': '', 'U': 'B', 'D': '', 'F': '', 'B': ''},
  },
  6: {
    type: 'corner',
    position: new THREE.Vector3(-1, 1, 1).multiplyScalar(CUBE_EDGE_LENGTH),
    colors: [CUBE_BLACK, CUBE_ORANGE, CUBE_WHITE, CUBE_BLACK, CUBE_GREEN, CUBE_BLACK],
    names: {'R': '', 'L': 'F', 'U': 'D', 'D': '', 'F': 'I', 'B': ''},
  },
  7: {
    type: 'edge',
    position: new THREE.Vector3(0, 1, 1).multiplyScalar(CUBE_EDGE_LENGTH),
    colors: [CUBE_BLACK, CUBE_BLACK, CUBE_WHITE, CUBE_BLACK, CUBE_GREEN, CUBE_BLACK],
    names: {'R': '', 'L': '', 'U': 'C', 'D': '', 'F': 'I', 'B': ''},
  },
  8: {
    type: 'corner',
    position: new THREE.Vector3(1, 1, 1).multiplyScalar(CUBE_EDGE_LENGTH),
    colors: [CUBE_RED, CUBE_BLACK, CUBE_WHITE, CUBE_BLACK, CUBE_GREEN, CUBE_BLACK],
    names: {'R': 'M', 'L': '', 'U': 'C', 'D': '', 'F': 'J', 'B': ''},
  },
  // MIDDLE SLICE
  9: {
    type: 'edge',
    position: new THREE.Vector3(-1, 0, -1).multiplyScalar(CUBE_EDGE_LENGTH),
    colors: [CUBE_BLACK, CUBE_ORANGE, CUBE_BLACK, CUBE_BLACK, CUBE_BLACK, CUBE_BLUE],
    names: {'R': '', 'L': 'H', 'U': '', 'D': '', 'F': '', 'B': 'R'},
  },
  10: {
    type: 'center',
    position: new THREE.Vector3(0, 0, -1).multiplyScalar(CUBE_EDGE_LENGTH),
    colors: [CUBE_BLACK, CUBE_BLACK, CUBE_BLACK, CUBE_BLACK, CUBE_BLACK, CUBE_BLUE],
    names: {'R': '', 'L': '', 'U': '', 'D': '', 'F': '', 'B': ''},
  },
  11: {
    type: 'edge',
    position: new THREE.Vector3(1, 0, -1).multiplyScalar(CUBE_EDGE_LENGTH),
    colors: [CUBE_RED, CUBE_BLACK, CUBE_BLACK, CUBE_BLACK, CUBE_BLACK, CUBE_BLUE],
    names: {'R': 'N', 'L': '', 'U': '', 'D': '', 'F': '', 'B': 'T'},
  },
  12: {
    type: 'center',
    position: new THREE.Vector3(-1, 0, 0).multiplyScalar(CUBE_EDGE_LENGTH),
    colors: [CUBE_BLACK, CUBE_ORANGE, CUBE_BLACK, CUBE_BLACK, CUBE_BLACK, CUBE_BLACK],
    names: {'R': '', 'L': '', 'U': '', 'D': '', 'F': '', 'B': ''},
  },
  13: {
    type: 'core',
    position: new THREE.Vector3(0, 0, 0).multiplyScalar(CUBE_EDGE_LENGTH),
    colors: [CUBE_BLACK, CUBE_BLACK, CUBE_BLACK, CUBE_BLACK, CUBE_BLACK, CUBE_BLACK],
    names: {'R': '', 'L': '', 'U': '', 'D': '', 'F': '', 'B': ''},
  },
  14: {
    type: 'center',
    position: new THREE.Vector3(1, 0, 0).multiplyScalar(CUBE_EDGE_LENGTH),
    colors: [CUBE_RED, CUBE_BLACK, CUBE_BLACK, CUBE_BLACK, CUBE_BLACK, CUBE_BLACK],
    names: {'R': '', 'L': '', 'U': '', 'D': '', 'F': '', 'B': ''},
  },
  15: {
    type: 'edge',
    position: new THREE.Vector3(-1, 0, 1).multiplyScalar(CUBE_EDGE_LENGTH),
    colors: [CUBE_BLACK, CUBE_ORANGE, CUBE_BLACK, CUBE_BLACK, CUBE_GREEN, CUBE_BLACK],
    names: {'R': '', 'L': 'F', 'U': '', 'D': '', 'F': 'L', 'B': ''},
  },
  16: {
    type: 'center',
    position: new THREE.Vector3(0, 0, 1).multiplyScalar(CUBE_EDGE_LENGTH),
    colors: [CUBE_BLACK, CUBE_BLACK, CUBE_BLACK, CUBE_BLACK, CUBE_GREEN, CUBE_BLACK],
    names: {'R': '', 'L': '', 'U': '', 'D': '', 'F': '', 'B': ''},
  },
  17: {
    type: 'edge',
    position: new THREE.Vector3(1, 0, 1).multiplyScalar(CUBE_EDGE_LENGTH),
    colors: [CUBE_RED, CUBE_BLACK, CUBE_BLACK, CUBE_BLACK, CUBE_GREEN, CUBE_BLACK],
    names: {'R': 'P', 'L': '', 'U': '', 'D': '', 'F': 'J', 'B': ''},
  },
  // BOTTOM LAYER
  18: {
    type: 'corner',
    position: new THREE.Vector3(-1, -1, -1).multiplyScalar(CUBE_EDGE_LENGTH),
    colors: [CUBE_BLACK, CUBE_ORANGE, CUBE_BLACK, CUBE_YELLOW, CUBE_BLACK, CUBE_BLUE],
    names: {'R': '', 'L': 'H', 'U': '', 'D': 'X', 'F': '', 'B': 'S'},
  },
  19: {
    type: 'edge',
    position: new THREE.Vector3(0, -1, -1).multiplyScalar(CUBE_EDGE_LENGTH),
    colors: [CUBE_BLACK, CUBE_BLACK, CUBE_BLACK, CUBE_YELLOW, CUBE_BLACK, CUBE_BLUE],
    names: {'R': '', 'L': '', 'U': '', 'D': 'W', 'F': '', 'B': 'S'},
  },
  20: {
    type: 'corner',
    position: new THREE.Vector3(1, -1, -1).multiplyScalar(CUBE_EDGE_LENGTH),
    colors: [CUBE_RED, CUBE_BLACK, CUBE_BLACK, CUBE_YELLOW, CUBE_BLACK, CUBE_BLUE],
    names: {'R': 'O', 'L': '', 'U': '', 'D': 'W', 'F': '', 'B': 'T'},
  },
  21: {
    type: 'edge',
    position: new THREE.Vector3(-1, -1, 0).multiplyScalar(CUBE_EDGE_LENGTH),
    colors: [CUBE_BLACK, CUBE_ORANGE, CUBE_BLACK, CUBE_YELLOW, CUBE_BLACK, CUBE_BLACK],
    names: {'R': '', 'L': 'G', 'U': '', 'D': 'X', 'F': '', 'B': ''},
  },
  22: {
    type: 'center',
    position: new THREE.Vector3(0, -1, 0).multiplyScalar(CUBE_EDGE_LENGTH),
    colors: [CUBE_BLACK, CUBE_BLACK, CUBE_BLACK, CUBE_YELLOW, CUBE_BLACK, CUBE_BLACK],
    names: {'R': '', 'L': '', 'U': '', 'D': '', 'F': '', 'B': ''},
  },
  23: {
    type: 'edge',
    position: new THREE.Vector3(1, -1, 0).multiplyScalar(CUBE_EDGE_LENGTH),
    colors: [CUBE_RED, CUBE_BLACK, CUBE_BLACK, CUBE_YELLOW, CUBE_BLACK, CUBE_BLACK],
    names: {'R': 'O', 'L': '', 'U': '', 'D': 'V', 'F': '', 'B': ''},
  },
  24: {
    type: 'corner',
    position: new THREE.Vector3(-1, -1, 1).multiplyScalar(CUBE_EDGE_LENGTH),
    colors: [CUBE_BLACK, CUBE_ORANGE, CUBE_BLACK, CUBE_YELLOW, CUBE_GREEN, CUBE_BLACK],
    names: {'R': '', 'L': 'G', 'U': '', 'D': 'U', 'F': 'L', 'B': ''},
  },
  25: {
    type: 'edge',
    position: new THREE.Vector3(0, -1, 1).multiplyScalar(CUBE_EDGE_LENGTH),
    colors: [CUBE_BLACK, CUBE_BLACK, CUBE_BLACK, CUBE_YELLOW, CUBE_GREEN, CUBE_BLACK],
    names: {'R': '', 'L': '', 'U': '', 'D': 'U', 'F': 'K', 'B': ''},
  },
  26: {
    type: 'corner',
    position: new THREE.Vector3(1, -1, 1).multiplyScalar(CUBE_EDGE_LENGTH),
    colors: [CUBE_RED, CUBE_BLACK, CUBE_BLACK, CUBE_YELLOW, CUBE_GREEN, CUBE_BLACK],
    names: {'R': 'P', 'L': '', 'U': '', 'D': 'V', 'F': 'K', 'B': ''},
  },
};

export let guessList = [];
for (const [cubieID, cubieData] of Object.entries(CUBIE_DATA)) {
  for (const [cubeFace, name] of Object.entries(cubieData.names)) {
    if (name) {
      guessList.push(
        {
          name: name,
          cubieID: cubieID,
          cubeFace: cubeFace,
          cubePosition: cubieData.position,
          type: cubieData.type,
        }
      )
    }
  }
}
