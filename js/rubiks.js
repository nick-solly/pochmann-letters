
function populateScene(scene) {
  for (const [cubeID, cubeData] of Object.entries(CUBE_DATA)) {
    addCubie(scene, cubeData);
  }
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

function addCubie(scene, cubeData) {

  let geo_cube = new THREE.BoxBufferGeometry(CUBE_EDGE_LENGTH, CUBE_EDGE_LENGTH, CUBE_EDGE_LENGTH);


  let materials = []
  for (let i=0; i < cubeData.colors.length; i++) {
    // let material = new THREE.MeshBasicMaterial({color: cubeData.colors[i]});

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
  scene.add(cube);
  cube.position.copy(cubeData.position.multiplyScalar(CUBE_EDGE_LENGTH));

  // EDGES
  // const geo_edges = new THREE.EdgesGeometry(geo_cube);
  // let edges = new THREE.LineSegments(geo_edges, new THREE.LineBasicMaterial({color:0x000000, linewidth: 2}))
  // scene.add(edges);
  // edges.position.copy(cubeData.position);

}

