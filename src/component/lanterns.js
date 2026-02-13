import { CanvasElement, CanvasStage } from 'html-canvas-engine';
import LanternImage from '../assets/images/ClipartKey_1107656.png';
import FlameImage from '../assets/images/fire-transparent-24402.png';
import { generateStars } from './Stars';
import { rand } from './utils';
import { Power1 } from 'gsap';
// import { Person } from './js/test';

export var UIEventTypes = {
  DRAG_START: 'drag_start',
  DRAG: 'drag',
  DRAG_EASE: 'drag_ease',
  DRAG_END: 'drag_end',
  WHEEL: 'wheel',
  MOVE: 'move',
  OVER: 'over',
  OUT: 'out',
  DOWN: 'down',
  UP: 'up',
  ENTER: 'enter',
  LEAVE: 'leave',
  ENTER_STAGE: 'enter_stage',
  LEAVE_STAGE: 'leave_stage',
  CLICK: 'click',
  REMOVED: 'removed',
  CHANGED: 'changed',
  UPDATED: 'updated',
  PROGRESS: 'progress'
};

let stage;

function initStage() {
  stage = new CanvasStage({
    fillStyle: 'rgb(10,5,50)',
    mouseEnabled: true,
    wheelZoom: true,
    userBounds: {
      minY: -10000,
      maxY: 10000
    },
    fullscreen: false
  });
}

function initStars() {
  const stars = stage.addChild(generateStars(stage));
  stars.on(UIEventTypes.UPDATED, (e) => {
    e.target.y += 0.5;
  });
}

function updateLantern(e) {
  this.alpha = rand(0.9, 1);
  this.rotationShift += this.rotationSpeed;
  this.rotation = Math.sin(this.rotationShift) * 5;
}

function updateFlame() {
  this.alpha = Math.random();
}

function clickLantern(e) {
  stage.camera.moveToElement(e.target, 50, 3, Power1.easeInOut);
  lanterns.forEach((lantern) => (lantern.selected = false));
  e.target.selected = true;
}

function initFog() {
  var i, w;
  var fogSteps = 10;
  var fogStart = 2000;
  var fogEndAlpha = 0.3;
  var fogEnd = 10000;
  var fogStep = (fogEnd - fogStart) / fogSteps;
  var fogRange = 1 - fogEndAlpha;

  for (i = 0; i < fogSteps; i++) {
    var p = i / fogSteps;
    var alpha = fogRange * p * 0.2;

    stage.addChild(
      new CanvasElement({
        position: 'fixed',
        x: 0,
        y: 0,
        z: 0,
        offSetZ: fogStart + i * fogStep,
        id: `fog${i}`,
        draggable: false,
        smoothing: false,
        width: window.innerWidth,
        height: window.innerHeight,
        fillStyle: `rgba(10,5,50,${alpha})`,
        beforeUpdate: function () {
          this.setProperty({ z: stage.camera.z + this.offSetZ });
        },
        // onResize: function () {
        //   this.setProperty({ width: window.innerWidth, height: window.innerHeight });
        // }
      })
    );
  }
}

const lanterns = [];

function initLanterns() {
  for (let i = 0; i < 500; i++) {
    var lantern = stage
      .addChild(
        new CanvasElement({
          image: LanternImage,
          x: rand(-3000, 3000),
          y: rand(0, -3000),
          z: rand(-500, 15000),
          draggable: true,
          smoothing: true,
          launched: false,
          width: 100,
          height: 100,
          alpha: 0.9,
          rotation: rand(-5, 5),
          rotationShift: 0,
          rotationSpeed: rand(-0.05, 0.05),
          physics: true,
          vector: { x: 0, y: rand(0, -0.01), z: 0 },
          beforeUpdate: updateLantern
        })
      )
      .on(UIEventTypes.UPDATED, updateLantern)
      .on(UIEventTypes.CLICK, clickLantern);
    lanterns.push(lantern);

    lantern.addChild(
      new CanvasElement({
        image: FlameImage,
        x: 10,
        y: 25,
        z: 0,
        scale: 4,
        width: 20,
        height: 20,
        transformCenterY: 1,
        beforeUpdate: updateFlame
      })
    );
  }
}

function nextLantern() {
  var found;
  for (var i = 0; i < lanterns.length; i++) {
    if (lanterns[i].selected) {
      lanterns[i].selected = false;
      if (i < lanterns.length - 1) {
        lanterns[i + 1].selected = true;
        lanterns[i + 1].trigger(UIEventTypes.CLICK);
      } else {
      }
      found = true;
      break;
    }
  }
  if (!found) {
    lanterns[0].selected = true;
    lanterns[0].trigger(UIEventTypes.CLICK);
  }
}

function prevLantern() {
  var found;
  for (var i = 0; i < lanterns.length; i++) {
    if (lanterns[i].selected) {
      lanterns[i].selected = false;
      if (i > 0) {
        lanterns[i - 1].selected = true;
        lanterns[i - 1].trigger(UIEventTypes.CLICK);
      } else {
      }
      found = true;
      break;
    }
  }
  if (!found) {
    lanterns[lanterns.length - 1].selected = true;
    lanterns[lanterns.length - 1].trigger(UIEventTypes.CLICK);
  }
}

function init(container) {
  initStage();
  initStars();
  initFog();
  initLanterns();
  container.appendChild(stage.cvs);
  return stage;
}

function destroy() {
  stage.stopRender();
  stage.cvs.remove();
}

export { init, destroy, stage };
// init(document.body);
