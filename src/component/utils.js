export function rand(n1, n2, rnd) {
  if (typeof n2 !== 'number') {
    if (typeof n2 === 'boolean') {
      rnd = true;
    }
    if (isNaN(n2)) n2 = 0;
  }
  var n = n1 + Math.random() * (n2 - n1);
  return rnd === true ? Math.round(n) : n;
}

export function clamp(value, max, min) {
  return Math.max(min, Math.min(max, value));
}

export function rad(degrees) {
  return degrees * (Math.PI / 180);
}

export function deg(radians) {
  return radians * (180 / Math.PI);
}

export function getPercent(n1, n2, n) {
  return Math.max(0, Math.min(1, (n - n1) / (n2 - n1)));
}
