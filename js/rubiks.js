import {CUBE_LETTER_COLOR, CUBE_DATA, CUBE_EDGE_LENGTH, CUBE_FACE_EULERS, CUBE_FACE_NORMALS} from "./data.js";

export function getCubeGroup() {
  let cubies = new THREE.Group();
  for (const [cubeID, cubeData] of Object.entries(CUBE_DATA)) {
    cubies.add(Cubie(cubeID, cubeData));
  }
  return cubies;
}

var vertexShader = `
    varying vec3 vPos;
    void main()	{
      vPos = position;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);
    }
  `;

var fragmentShader = `
    varying vec3 vPos;
    uniform vec3 size;
    uniform float thickness;
    uniform float smoothness;
    uniform vec3 color;

    void main() {

      float a = smoothstep(thickness, thickness + smoothness, length(abs(vPos.xy) - size.xy));
      a *= smoothstep(thickness, thickness + smoothness, length(abs(vPos.yz) - size.yz));
      a *= smoothstep(thickness, thickness + smoothness, length(abs(vPos.xz) - size.xz));

      vec3 c = mix(vec3(0), color, a);

      gl_FragColor = vec4(c, 1.0);
    }
  `;


function Cubie(cubeID, cubeData) {

  let geo_cube = new THREE.BoxBufferGeometry(CUBE_EDGE_LENGTH, CUBE_EDGE_LENGTH, CUBE_EDGE_LENGTH);

  let materials = []
  for (let i=0; i < cubeData.colors.length; i++) {
    let material = new THREE.ShaderMaterial({
      uniforms: {
        size: {
          value: new THREE.Vector3(geo_cube.parameters.width, geo_cube.parameters.height, geo_cube.parameters.depth).multiplyScalar(0.5)
        },
        thickness: {
          value: 0.01
        },
        smoothness: {
          value: 0.2
        },
        color: {type: 'vec3', value: new THREE.Color(cubeData.colors[i])},
      },
      vertexShader: vertexShader,
      fragmentShader: fragmentShader
    });
    materials.push(material);
  }

  let cube = new THREE.Mesh(geo_cube, materials);
  cube.name = cubeID;
  cube.position.copy(cubeData.position);
  return cube;
}

export function getLettersGroup(letter_font, selectedCubieType) {
  let letters = new THREE.Group();
  let name;
  let cubieType;
  for (const [cubeID, cubeData] of Object.entries(CUBE_DATA)) {
    cubieType = cubeData.type;
    for (let i = 0; i < cubeData.names.length; i++) {
      name = cubeData.names[i];
      if (name) {
        if (cubieType === selectedCubieType) {
          letters.add(Letter(letter_font, name, cubeData.position, i, cubieType));
        }
      }
    }
  }
  return letters;
}

function Letter(letter_font, name, cubePosition, cubeFace, cubieType) {
  let geo_text = new THREE.TextGeometry(name, {
    font: letter_font,
    size: CUBE_EDGE_LENGTH * 0.5,
    height: 0.2,
  });
  geo_text.center();
  let letter = new THREE.Mesh(geo_text, new THREE.MeshBasicMaterial({color: CUBE_LETTER_COLOR}));
  letter.name = `${cubieType}${name}`;
  letter.position.copy(cubePosition);
  letter.translateOnAxis(CUBE_FACE_NORMALS[cubeFace], CUBE_EDGE_LENGTH * 0.5);
  letter.setRotationFromEuler(CUBE_FACE_EULERS[cubeFace]);
  return letter;
}
