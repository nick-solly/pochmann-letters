// White Top, Green Front
// CubeIDs:
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

// Color Definition runs R, L, U, D, F, B (normal Rubik's Notation)

const CUBE_BLACK = "black";
const CUBE_WHITE = "white";
const CUBE_YELLOW = "yellow";
const CUBE_GREEN = "green";
const CUBE_BLUE = "blue";
const CUBE_RED = "red";
const CUBE_ORANGE = "orange";

const CUBE_EDGE_LENGTH = 5;

const CUBE_DATA = {
  // TOP LAYER
  0: {
    position: new THREE.Vector3(-1, 1, -1),
    colors: [CUBE_BLACK, CUBE_ORANGE, CUBE_WHITE, CUBE_BLACK, CUBE_BLACK, CUBE_BLUE],
  },
  1: {
    position: new THREE.Vector3(0, 1, -1),
    colors: [CUBE_BLACK, CUBE_BLACK, CUBE_WHITE, CUBE_BLACK, CUBE_BLACK, CUBE_BLUE],
  },
  2: {
    position: new THREE.Vector3(1, 1, -1),
    colors: [CUBE_RED, CUBE_BLACK, CUBE_WHITE, CUBE_BLACK, CUBE_BLACK, CUBE_BLUE],
  },
  3: {
    position: new THREE.Vector3(-1, 1, 0),
    colors: [CUBE_BLACK, CUBE_ORANGE, CUBE_WHITE, CUBE_BLACK, CUBE_BLACK, CUBE_BLACK],
  },
  4: {
    position: new THREE.Vector3(0, 1, 0),
    colors: [CUBE_BLACK, CUBE_BLACK, CUBE_WHITE, CUBE_BLACK, CUBE_BLACK, CUBE_BLACK],
  },
  5: {
    position: new THREE.Vector3(1, 1, 0),
    colors: [CUBE_RED, CUBE_BLACK, CUBE_WHITE, CUBE_BLACK, CUBE_BLACK, CUBE_BLACK],
  },
  6: {
    position: new THREE.Vector3(-1, 1, 1),
    colors: [CUBE_BLACK, CUBE_ORANGE, CUBE_WHITE, CUBE_BLACK, CUBE_GREEN, CUBE_BLACK],
  },
  7: {
    position: new THREE.Vector3(0, 1, 1),
    colors: [CUBE_BLACK, CUBE_BLACK, CUBE_WHITE, CUBE_BLACK, CUBE_GREEN, CUBE_BLACK],
  },
  8: {
    position: new THREE.Vector3(1, 1, 1),
    colors: [CUBE_RED, CUBE_BLACK, CUBE_WHITE, CUBE_BLACK, CUBE_GREEN, CUBE_BLACK],
  },
  // MIDDLE SLICE
  9: {
    position: new THREE.Vector3(-1, 0, -1),
    colors: [CUBE_BLACK, CUBE_ORANGE, CUBE_BLACK, CUBE_BLACK, CUBE_BLACK, CUBE_BLUE],
  },
  10: {
    position: new THREE.Vector3(0, 0, -1),
    colors: [CUBE_BLACK, CUBE_BLACK, CUBE_BLACK, CUBE_BLACK, CUBE_BLACK, CUBE_BLUE],
  },
  11: {
    position: new THREE.Vector3(1, 0, -1),
    colors: [CUBE_RED, CUBE_BLACK, CUBE_BLACK, CUBE_BLACK, CUBE_BLACK, CUBE_BLUE],
  },
  12: {
    position: new THREE.Vector3(-1, 0, 0),
    colors: [CUBE_BLACK, CUBE_ORANGE, CUBE_BLACK, CUBE_BLACK, CUBE_BLACK, CUBE_BLACK],
  },
  13: {
    position: new THREE.Vector3(0, 0, 0),
    colors: [CUBE_BLACK, CUBE_BLACK, CUBE_BLACK, CUBE_BLACK, CUBE_BLACK, CUBE_BLACK],
  },
  14: {
    position: new THREE.Vector3(1, 0, 0),
    colors: [CUBE_RED, CUBE_BLACK, CUBE_BLACK, CUBE_BLACK, CUBE_BLACK, CUBE_BLACK],
  },
  15: {
    position: new THREE.Vector3(-1, 0, 1),
    colors: [CUBE_BLACK, CUBE_ORANGE, CUBE_BLACK, CUBE_BLACK, CUBE_GREEN, CUBE_BLACK],
  },
  16: {
    position: new THREE.Vector3(0, 0, 1),
    colors: [CUBE_BLACK, CUBE_BLACK, CUBE_BLACK, CUBE_BLACK, CUBE_GREEN, CUBE_BLACK],
  },
  17: {
    position: new THREE.Vector3(1, 0, 1),
    colors: [CUBE_RED, CUBE_BLACK, CUBE_BLACK, CUBE_BLACK, CUBE_GREEN, CUBE_BLACK],
  },
  // BOTTOM LAYER
  18: {
    position: new THREE.Vector3(-1, -1, -1),
    colors: [CUBE_BLACK, CUBE_ORANGE, CUBE_BLACK, CUBE_YELLOW, CUBE_BLACK, CUBE_BLUE],
  },
  19: {
    position: new THREE.Vector3(0, -1, -1),
    colors: [CUBE_BLACK, CUBE_BLACK, CUBE_BLACK, CUBE_YELLOW, CUBE_BLACK, CUBE_BLUE],
  },
  20: {
    position: new THREE.Vector3(1, -1, -1),
    colors: [CUBE_RED, CUBE_BLACK, CUBE_BLACK, CUBE_YELLOW, CUBE_BLACK, CUBE_BLUE],
  },
  21: {
    position: new THREE.Vector3(-1, -1, 0),
    colors: [CUBE_BLACK, CUBE_ORANGE, CUBE_BLACK, CUBE_YELLOW, CUBE_BLACK, CUBE_BLACK],
  },
  22: {
    position: new THREE.Vector3(0, -1, 0),
    colors: [CUBE_BLACK, CUBE_BLACK, CUBE_BLACK, CUBE_YELLOW, CUBE_BLACK, CUBE_BLACK],
  },
  23: {
    position: new THREE.Vector3(1, -1, 0),
    colors: [CUBE_RED, CUBE_BLACK, CUBE_BLACK, CUBE_YELLOW, CUBE_BLACK, CUBE_BLACK],
  },
  24: {
    position: new THREE.Vector3(-1, -1, 1),
    colors: [CUBE_BLACK, CUBE_ORANGE, CUBE_BLACK, CUBE_YELLOW, CUBE_GREEN, CUBE_BLACK],
  },
  25: {
    position: new THREE.Vector3(0, -1, 1),
    colors: [CUBE_BLACK, CUBE_BLACK, CUBE_BLACK, CUBE_YELLOW, CUBE_GREEN, CUBE_BLACK],
  },
  26: {
    position: new THREE.Vector3(1, -1, 1),
    colors: [CUBE_RED, CUBE_BLACK, CUBE_BLACK, CUBE_YELLOW, CUBE_GREEN, CUBE_BLACK],
  },
};
