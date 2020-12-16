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

// Face definition runs R, L, U, D, F, B (normal Rubik's Notation)

const CUBE_BLACK = "#000000";
const CUBE_WHITE = "#FFFFFF";
const CUBE_YELLOW = "#FFFF00";
const CUBE_GREEN = "#008000";
const CUBE_BLUE = "#0000FF";
const CUBE_RED = "#FF0000";
const CUBE_ORANGE = "#FFA500";
export const CUBE_LETTER_COLOR = "#000000";

export const CUBE_EDGE_LENGTH = 5;

export const CUBE_FACE_EULERS = [
  new THREE.Euler(0, Math.PI / 2, 0),
  new THREE.Euler(0, -Math.PI / 2, 0),
  new THREE.Euler(-Math.PI / 2, 0, 0),
  new THREE.Euler(Math.PI / 2, 0, 0),
  new THREE.Euler(0, 0, 0),
  new THREE.Euler(0, Math.PI, 0),
]

export const CUBE_FACE_NORMALS = [
  new THREE.Vector3(1, 0, 0),
  new THREE.Vector3(-1, 0, 0),
  new THREE.Vector3(0, 1, 0),
  new THREE.Vector3(0, -1, 0),
  new THREE.Vector3(0, 0, 1),
  new THREE.Vector3(0, 0, -1),
]

export const CUBE_DATA = {
  // TOP LAYER
  0: {
    type: "corner",
    position: new THREE.Vector3(-1, 1, -1).multiplyScalar(CUBE_EDGE_LENGTH),
    colors: [CUBE_BLACK, CUBE_ORANGE, CUBE_WHITE, CUBE_BLACK, CUBE_BLACK, CUBE_BLUE],
    names: ["", "E", "A", "", "", "R"],
  },
  1: {
    type: "edge",
    position: new THREE.Vector3(0, 1, -1).multiplyScalar(CUBE_EDGE_LENGTH),
    colors: [CUBE_BLACK, CUBE_BLACK, CUBE_WHITE, CUBE_BLACK, CUBE_BLACK, CUBE_BLUE],
    names: ["", "", "A", "", "", "Q"],
  },
  2: {
    type: "corner",
    position: new THREE.Vector3(1, 1, -1).multiplyScalar(CUBE_EDGE_LENGTH),
    colors: [CUBE_RED, CUBE_BLACK, CUBE_WHITE, CUBE_BLACK, CUBE_BLACK, CUBE_BLUE],
    names: ["N", "", "B", "", "", "Q"],
  },
  3: {
    type: "edge",
    position: new THREE.Vector3(-1, 1, 0).multiplyScalar(CUBE_EDGE_LENGTH),
    colors: [CUBE_BLACK, CUBE_ORANGE, CUBE_WHITE, CUBE_BLACK, CUBE_BLACK, CUBE_BLACK],
    names: ["", "E", "D", "", "", ""],
  },
  4: {
    type: "center",
    position: new THREE.Vector3(0, 1, 0).multiplyScalar(CUBE_EDGE_LENGTH),
    colors: [CUBE_BLACK, CUBE_BLACK, CUBE_WHITE, CUBE_BLACK, CUBE_BLACK, CUBE_BLACK],
    names: ["", "", "", "", "", ""],
  },
  5: {
    type: "edge",
    position: new THREE.Vector3(1, 1, 0).multiplyScalar(CUBE_EDGE_LENGTH),
    colors: [CUBE_RED, CUBE_BLACK, CUBE_WHITE, CUBE_BLACK, CUBE_BLACK, CUBE_BLACK],
    names: ["M", "", "B", "", "", ""],
  },
  6: {
    type: "corner",
    position: new THREE.Vector3(-1, 1, 1).multiplyScalar(CUBE_EDGE_LENGTH),
    colors: [CUBE_BLACK, CUBE_ORANGE, CUBE_WHITE, CUBE_BLACK, CUBE_GREEN, CUBE_BLACK],
    names: ["", "F", "D", "", "I", ""],
  },
  7: {
    type: "edge",
    position: new THREE.Vector3(0, 1, 1).multiplyScalar(CUBE_EDGE_LENGTH),
    colors: [CUBE_BLACK, CUBE_BLACK, CUBE_WHITE, CUBE_BLACK, CUBE_GREEN, CUBE_BLACK],
    names: ["", "", "C", "", "I", ""],
  },
  8: {
    type: "corner",
    position: new THREE.Vector3(1, 1, 1).multiplyScalar(CUBE_EDGE_LENGTH),
    colors: [CUBE_RED, CUBE_BLACK, CUBE_WHITE, CUBE_BLACK, CUBE_GREEN, CUBE_BLACK],
    names: ["M", "", "C", "", "J", ""],
  },
  // MIDDLE SLICE
  9: {
    type: "edge",
    position: new THREE.Vector3(-1, 0, -1).multiplyScalar(CUBE_EDGE_LENGTH),
    colors: [CUBE_BLACK, CUBE_ORANGE, CUBE_BLACK, CUBE_BLACK, CUBE_BLACK, CUBE_BLUE],
    names: ["", "H", "", "", "", "R"],
  },
  10: {
    type: "center",
    position: new THREE.Vector3(0, 0, -1).multiplyScalar(CUBE_EDGE_LENGTH),
    colors: [CUBE_BLACK, CUBE_BLACK, CUBE_BLACK, CUBE_BLACK, CUBE_BLACK, CUBE_BLUE],
    names: ["", "", "", "", "", ""],
  },
  11: {
    type: "edge",
    position: new THREE.Vector3(1, 0, -1).multiplyScalar(CUBE_EDGE_LENGTH),
    colors: [CUBE_RED, CUBE_BLACK, CUBE_BLACK, CUBE_BLACK, CUBE_BLACK, CUBE_BLUE],
    names: ["N", "", "", "", "", "T"],
  },
  12: {
    type: "center",
    position: new THREE.Vector3(-1, 0, 0).multiplyScalar(CUBE_EDGE_LENGTH),
    colors: [CUBE_BLACK, CUBE_ORANGE, CUBE_BLACK, CUBE_BLACK, CUBE_BLACK, CUBE_BLACK],
    names: ["", "", "", "", "", ""],
  },
  13: {
    type: "core",
    position: new THREE.Vector3(0, 0, 0).multiplyScalar(CUBE_EDGE_LENGTH),
    colors: [CUBE_BLACK, CUBE_BLACK, CUBE_BLACK, CUBE_BLACK, CUBE_BLACK, CUBE_BLACK],
    names: ["", "", "", "", "", ""],
  },
  14: {
    type: "center",
    position: new THREE.Vector3(1, 0, 0).multiplyScalar(CUBE_EDGE_LENGTH),
    colors: [CUBE_RED, CUBE_BLACK, CUBE_BLACK, CUBE_BLACK, CUBE_BLACK, CUBE_BLACK],
    names: ["", "", "", "", "", ""],
  },
  15: {
    type: "edge",
    position: new THREE.Vector3(-1, 0, 1).multiplyScalar(CUBE_EDGE_LENGTH),
    colors: [CUBE_BLACK, CUBE_ORANGE, CUBE_BLACK, CUBE_BLACK, CUBE_GREEN, CUBE_BLACK],
    names: ["", "F", "", "", "L", ""],
  },
  16: {
    type: "center",
    position: new THREE.Vector3(0, 0, 1).multiplyScalar(CUBE_EDGE_LENGTH),
    colors: [CUBE_BLACK, CUBE_BLACK, CUBE_BLACK, CUBE_BLACK, CUBE_GREEN, CUBE_BLACK],
    names: ["", "", "", "", "", ""],
  },
  17: {
    type: "edge",
    position: new THREE.Vector3(1, 0, 1).multiplyScalar(CUBE_EDGE_LENGTH),
    colors: [CUBE_RED, CUBE_BLACK, CUBE_BLACK, CUBE_BLACK, CUBE_GREEN, CUBE_BLACK],
    names: ["P", "", "", "", "J", ""],
  },
  // BOTTOM LAYER
  18: {
    type: "corner",
    position: new THREE.Vector3(-1, -1, -1).multiplyScalar(CUBE_EDGE_LENGTH),
    colors: [CUBE_BLACK, CUBE_ORANGE, CUBE_BLACK, CUBE_YELLOW, CUBE_BLACK, CUBE_BLUE],
    names: ["", "H", "", "X", "", "S"],
  },
  19: {
    type: "edge",
    position: new THREE.Vector3(0, -1, -1).multiplyScalar(CUBE_EDGE_LENGTH),
    colors: [CUBE_BLACK, CUBE_BLACK, CUBE_BLACK, CUBE_YELLOW, CUBE_BLACK, CUBE_BLUE],
    names: ["", "", "", "W", "", "S"],
  },
  20: {
    type: "corner",
    position: new THREE.Vector3(1, -1, -1).multiplyScalar(CUBE_EDGE_LENGTH),
    colors: [CUBE_RED, CUBE_BLACK, CUBE_BLACK, CUBE_YELLOW, CUBE_BLACK, CUBE_BLUE],
    names: ["O", "", "", "W", "", "T"],
  },
  21: {
    type: "edge",
    position: new THREE.Vector3(-1, -1, 0).multiplyScalar(CUBE_EDGE_LENGTH),
    colors: [CUBE_BLACK, CUBE_ORANGE, CUBE_BLACK, CUBE_YELLOW, CUBE_BLACK, CUBE_BLACK],
    names: ["", "G", "", "X", "", ""],
  },
  22: {
    type: "center",
    position: new THREE.Vector3(0, -1, 0).multiplyScalar(CUBE_EDGE_LENGTH),
    colors: [CUBE_BLACK, CUBE_BLACK, CUBE_BLACK, CUBE_YELLOW, CUBE_BLACK, CUBE_BLACK],
    names: ["", "", "", "", "", ""],
  },
  23: {
    type: "edge",
    position: new THREE.Vector3(1, -1, 0).multiplyScalar(CUBE_EDGE_LENGTH),
    colors: [CUBE_RED, CUBE_BLACK, CUBE_BLACK, CUBE_YELLOW, CUBE_BLACK, CUBE_BLACK],
    names: ["O", "", "", "V", "", ""],
  },
  24: {
    type: "corner",
    position: new THREE.Vector3(-1, -1, 1).multiplyScalar(CUBE_EDGE_LENGTH),
    colors: [CUBE_BLACK, CUBE_ORANGE, CUBE_BLACK, CUBE_YELLOW, CUBE_GREEN, CUBE_BLACK],
    names: ["", "G", "", "U", "L", ""],
  },
  25: {
    type: "edge",
    position: new THREE.Vector3(0, -1, 1).multiplyScalar(CUBE_EDGE_LENGTH),
    colors: [CUBE_BLACK, CUBE_BLACK, CUBE_BLACK, CUBE_YELLOW, CUBE_GREEN, CUBE_BLACK],
    names: ["", "", "", "U", "K", ""],
  },
  26: {
    type: "corner",
    position: new THREE.Vector3(1, -1, 1).multiplyScalar(CUBE_EDGE_LENGTH),
    colors: [CUBE_RED, CUBE_BLACK, CUBE_BLACK, CUBE_YELLOW, CUBE_GREEN, CUBE_BLACK],
    names: ["P", "", "", "V", "K", ""],
  },
};
