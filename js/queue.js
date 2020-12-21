'use strict';

import {CUBE_DATA, TURN_ANGLES, TURN_CUBIE_SWAPS, TURN_TIME} from "./data.js";


class TweenTurn {
  constructor(action) {
    this.action = action;
  }

  onComplete() {
    if (this.turnQueue.length) {
      let removedT = this.turnQueue.shift();
      console.log(`Completed Turn ${removedT.action}`);
    }
    if (this.turnQueue.length) {
      console.log(`Starting Turn ${this.turnQueue[0].action}`);
      this.turnQueue[0].start();
    }
  };

  getCubies(cubeFace) {
    let cubieGroup = new THREE.Group();
    window.scene.add(cubieGroup);
    let cubieIDs = CUBE_DATA[cubeFace]['cubies'];
    for (let i = 0; i < cubieIDs.length; i++) {
      // Need to attach rather than add so we don't lose rotation/position data
      cubieGroup.attach(window.cubies[cubieIDs[i]]);
    }
    return cubieGroup;
  }

  updateCubies(cubeFace, turnType) {
    let newCubies = {}
    let swaps = TURN_CUBIE_SWAPS[turnType];
    let faceCubies = CUBE_DATA[cubeFace]['cubies']
    let pos;
    for (const [cubieID, cubie] of Object.entries(window.cubies)) {
      pos = faceCubies.indexOf(parseInt(cubieID));
      if (pos === -1) {
        // Not on Face - no change
        newCubies[cubieID] = cubie;
      } else {
        // On Face - will be moved
        newCubies[cubieID] = cubies[faceCubies[swaps[pos]]];
      }
    }
    window.cubies = newCubies;
  }

  start() {
    let cubeFace = this.action;
    let turn_type = 'normal';
    if (this.action.length === 2) {
      if (this.action.substring(1) === "'") {
        turn_type = 'reverse';
      } else if (this.action.substring(1) === '2') {
        turn_type = 'double';
      }
      cubeFace = this.action.substring(0, 1);
    }
    let angle = TURN_ANGLES[turn_type];
    let normal = CUBE_DATA[cubeFace]['normal'];
    let rotation = new THREE.Vector3().copy(normal).multiplyScalar(angle);
    let tween = new TWEEN.Tween(this.getCubies(cubeFace).rotation).to(rotation, TURN_TIME).onComplete(this.onComplete);
    this.updateCubies(cubeFace, turn_type);
    tween.start();
  }
}


export class TurnQueue {
  constructor() {
    this.turnQueue = [];
  }
  add(action) {
    let tween = new TweenTurn(action);
    tween.onComplete = tween.onComplete.bind({turnQueue: this.turnQueue});
    let startQueue = (this.turnQueue.length ? false : true);
    this.turnQueue.push(tween);
    if (startQueue) {
      console.log(`Empty Queue: Starting Turn ${this.turnQueue[0].action}`);
      this.turnQueue[0].start();
    }
  }
  algorithm(alg) {
    const turns = alg.split(' ');
    for (let i = 0; i < turns.length; i++) {
      this.add(turns[i]);
    }
  }
}
