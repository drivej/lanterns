// stars

import { CanvasElement } from 'html-canvas-engine';
import { rand } from './utils';

const rad = Math.PI / 180;

function generateStars(stage) {
  var star_cvs = document.createElement('canvas');
  var star_ctx = star_cvs.getContext('2d');
  star_cvs.width = 48;
  star_cvs.height = 48;

  var gradient = star_ctx.createRadialGradient(24, 24, 2, 24, 24, 20);
  gradient.addColorStop(0, '#ffffffCC');
  gradient.addColorStop(0.5, '#ffffffCC');
  gradient.addColorStop(1, '#ffffff00');
  star_ctx.fillStyle = gradient;
  star_ctx.fillRect(2, 2, 44, 44);

  // stars
  var stars_cvs = document.createElement('canvas');
  stars_cvs.width = 1024;
  stars_cvs.height = 1024;
  var stars_ctx = stars_cvs.getContext('2d');

  // megastar
  var bigstar_cvs = document.createElement('canvas');
  bigstar_cvs.width = 48;
  bigstar_cvs.height = 48;
  var bigstar_ctx = bigstar_cvs.getContext('2d');

  var gradient = bigstar_ctx.createLinearGradient(0, 0, 0, 48);
  gradient.addColorStop(0, '#ffffff00');
  gradient.addColorStop(0.5, '#ffffffCC');
  gradient.addColorStop(1, '#ffffff00');
  bigstar_ctx.fillStyle = gradient;
  bigstar_ctx.fillRect(21, 0, 5, 88);

  bigstar_ctx.save();
  bigstar_ctx.translate(0, 48);
  bigstar_ctx.rotate(-90 * rad);
  bigstar_ctx.fillRect(21, 0, 5, 88);
  bigstar_ctx.translate(-24, -24);
  bigstar_ctx.restore();
  bigstar_ctx.drawImage(star_cvs, 10, 10, 28, 28);

  var i, ii, w, h, a, x, y, z, p, zF, cloud, startY, xRange, yRange, sprite;

  // many tiny stars
  for (i = 0; i < 2000; i++) {
    w = rand(1, 3);
    a = rand(0.7, 1);
    x = rand(stars_cvs.width); // rand(1, 1024 - w);
    y = rand(stars_cvs.height); //Math.pow(Math.pow(1024, 0.7) * Math.random(), 1 / 0.7);
    stars_ctx.globalAlpha = rand(); //(1 - getPercent(700, 1024, y)) * a;
    stars_ctx.drawImage(star_cvs, x, y, w, w);
  }

  // a few bigger stars
  for (i = 0; i < 64; i++) {
    w = rand(3, 7);
    a = rand(0.7, 1);
    x = rand(stars_cvs.width); //1, 1024 - w);
    y = rand(stars_cvs.height); //1, 768 - w);
    stars_ctx.globalAlpha = rand(); //(1 - getPercent(700, 1024, y)) * a;
    stars_ctx.drawImage(star_cvs, x, y, w, w);
  }

  // a few giant stars
  for (i = 0; i < 12; i++) {
    w = rand(10, 16);
    a = rand(0.7, 1);
    x = rand(stars_cvs.width); //1, 1024 - w);
    y = rand(stars_cvs.height); //1, 768 - w);
    stars_ctx.globalAlpha = rand(); // (1 - getPercent(700, 1024, y)) * a;
    stars_ctx.drawImage(bigstar_cvs, x, y, w, w);
  }

  // h = window.innerHeight * 1.5;
  // var zf = world.stage.camera.zFactor(50000);

  // world.stage.addChild(
  //   new CanvasElement({
  //     id: 'stars',
  //     bitmapData: stars_cvs,
  //     x: 0,
  //     y: 0,
  //     z: 50000,
  //     width: window.innerWidth * (1 / zf),
  //     height: window.innerWidth * (1 / zf),
  //     scale: 1,
  //     repeatX: true,
  //     repeatY: true,
  //   })
  // );

  var zf = stage.camera.zFactor(50000);

  var stars = new CanvasElement({
    id: 'stars',
    bitmapData: stars_cvs,
    smoothing: true,
    x: 0,
    y: 0,
    z: 50000,
    width: window.innerWidth * (1 / zf),
    height: window.innerWidth * (1 / zf),
    scale: 1,
    repeatX: true,
    repeatY: true,
  });

  return stars;
}

export { generateStars };
