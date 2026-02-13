import { jsx as gn } from "react/jsx-runtime";
import { useState as fr, useRef as Pe, useEffect as Fe, useCallback as An } from "react";
var De = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, ze, Li;
function kn() {
  if (Li) return ze;
  Li = 1;
  var o = "Expected a function", t = NaN, e = "[object Symbol]", i = /^\s+|\s+$/g, r = /^[-+]0x[0-9a-f]+$/i, n = /^0b[01]+$/i, a = /^0o[0-7]+$/i, s = parseInt, h = typeof De == "object" && De && De.Object === Object && De, f = typeof self == "object" && self && self.Object === Object && self, l = h || f || Function("return this")(), g = Object.prototype, k = g.toString, S = Math.max, I = Math.min, A = function() {
    return l.Date.now();
  };
  function J(d, y, m) {
    var Q, w, B, x, D, O, F = 0, P = !1, U = !1, H = !0;
    if (typeof d != "function")
      throw new TypeError(o);
    y = p(y) || 0, u(m) && (P = !!m.leading, U = "maxWait" in m, B = U ? S(p(m.maxWait) || 0, y) : B, H = "trailing" in m ? !!m.trailing : H);
    function M(L) {
      var V = Q, Pt = w;
      return Q = w = void 0, F = L, x = d.apply(Pt, V), x;
    }
    function dt(L) {
      return F = L, D = setTimeout(tt, y), P ? M(L) : x;
    }
    function yt(L) {
      var V = L - O, Pt = L - F, q = y - V;
      return U ? I(q, B - Pt) : q;
    }
    function ht(L) {
      var V = L - O, Pt = L - F;
      return O === void 0 || V >= y || V < 0 || U && Pt >= B;
    }
    function tt() {
      var L = A();
      if (ht(L))
        return lt(L);
      D = setTimeout(tt, yt(L));
    }
    function lt(L) {
      return D = void 0, H && Q ? M(L) : (Q = w = void 0, x);
    }
    function it() {
      D !== void 0 && clearTimeout(D), F = 0, Q = O = w = D = void 0;
    }
    function pt() {
      return D === void 0 ? x : lt(A());
    }
    function Vt() {
      var L = A(), V = ht(L);
      if (Q = arguments, w = this, O = L, V) {
        if (D === void 0)
          return dt(O);
        if (U)
          return D = setTimeout(tt, y), M(O);
      }
      return D === void 0 && (D = setTimeout(tt, y)), x;
    }
    return Vt.cancel = it, Vt.flush = pt, Vt;
  }
  function u(d) {
    var y = typeof d;
    return !!d && (y == "object" || y == "function");
  }
  function C(d) {
    return !!d && typeof d == "object";
  }
  function c(d) {
    return typeof d == "symbol" || C(d) && k.call(d) == e;
  }
  function p(d) {
    if (typeof d == "number")
      return d;
    if (c(d))
      return t;
    if (u(d)) {
      var y = typeof d.valueOf == "function" ? d.valueOf() : d;
      d = u(y) ? y + "" : y;
    }
    if (typeof d != "string")
      return d === 0 ? d : +d;
    d = d.replace(i, "");
    var m = n.test(d);
    return m || a.test(d) ? s(d.slice(2), m ? 2 : 8) : r.test(d) ? t : +d;
  }
  return ze = J, ze;
}
kn();
function cn() {
  const o = Pe(!1);
  return Fe(() => (o.current = !0, () => {
    o.current = !1;
  }), []), An(() => o.current, []);
}
var Wi = {
  width: void 0,
  height: void 0
};
function Sn(o) {
  const { ref: t, box: e = "content-box" } = o, [{ width: i, height: r }, n] = fr(Wi), a = cn(), s = Pe({ ...Wi }), h = Pe(void 0);
  return h.current = o.onResize, Fe(() => {
    if (!t.current || typeof window > "u" || !("ResizeObserver" in window))
      return;
    const f = new ResizeObserver(([l]) => {
      const g = e === "border-box" ? "borderBoxSize" : e === "device-pixel-content-box" ? "devicePixelContentBoxSize" : "contentBoxSize", k = Ni(l, g, "inlineSize"), S = Ni(l, g, "blockSize");
      if (s.current.width !== k || s.current.height !== S) {
        const A = { width: k, height: S };
        s.current.width = k, s.current.height = S, h.current ? h.current(A) : a() && n(A);
      }
    });
    return f.observe(t.current, { box: e }), () => {
      f.disconnect();
    };
  }, [e, t, a]), { width: i, height: r };
}
function Ni(o, t, e) {
  return o[t] ? Array.isArray(o[t]) ? o[t][0][e] : (
    // @ts-ignore Support Firefox's non-standard behavior
    o[t][e]
  ) : t === "contentBoxSize" ? o.contentRect[e === "inlineSize" ? "width" : "height"] : void 0;
}
function Ze(o, t, e) {
  return t < e ? Math.max(t, Math.min(e, o)) : Math.max(e, Math.min(t, o));
}
const Gi = Math.PI / 180;
class Vi {
  /**
   * @param {any} config
   */
  constructor(t) {
    var e = this;
    this.minX = -1 / 0, this.maxX = 1 / 0, this.minY = -1 / 0, this.maxY = 1 / 0, this.minZ = -1 / 0, this.maxZ = 1 / 0, this.set = function(i) {
      for (var r in i)
        this[r] = i[r];
    }, this.clamp = function(i) {
      return "x" in i && (i.x = Ze(i.x, e.minX, e.maxX)), "y" in i && (i.y = Ze(i.y, e.minY, e.maxY)), "z" in i && (i.z = Ze(i.z, e.minZ, e.maxZ)), i;
    }, this.set(t);
  }
}
function xt(o) {
  if (o === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return o;
}
function ur(o, t) {
  o.prototype = Object.create(t.prototype), o.prototype.constructor = o, o.__proto__ = t;
}
/*!
 * GSAP 3.14.2
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/
var kt = {
  autoSleep: 120,
  force3D: "auto",
  nullTargetWarn: 1,
  units: {
    lineHeight: ""
  }
}, se = {
  duration: 0.5,
  overwrite: !1,
  delay: 0
}, Ci, X, R, Ct = 1e8, T = 1 / Ct, ai = Math.PI * 2, dn = ai / 4, pn = 0, gr = Math.sqrt, In = Math.cos, Cn = Math.sin, j = function(t) {
  return typeof t == "string";
}, b = function(t) {
  return typeof t == "function";
}, Kt = function(t) {
  return typeof t == "number";
}, Ji = function(t) {
  return typeof t > "u";
}, Dt = function(t) {
  return typeof t == "object";
}, rt = function(t) {
  return t !== !1;
}, yi = function() {
  return typeof window < "u";
}, ve = function(t) {
  return b(t) || j(t);
}, Ar = typeof ArrayBuffer == "function" && ArrayBuffer.isView || function() {
}, $ = Array.isArray, Jn = /random\([^)]+\)/g, yn = /,\s*/g, qi = /(?:-?\.?\d|\.)+/gi, kr = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g, ee = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g, je = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi, cr = /[+-]=-?[.\d]+/, wn = /[^,'"\[\]\s]+/gi, mn = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i, N, mt, si, wi, ct = {}, He = {}, Sr, dr = function(t) {
  return (He = oe(t, ct)) && ot;
}, mi = function(t, e) {
  return console.warn("Invalid property", t, "set to", e, "Missing plugin? gsap.registerPlugin()");
}, Ie = function(t, e) {
  return !e && console.warn(t);
}, pr = function(t, e) {
  return t && (ct[t] = e) && He && (He[t] = e) || ct;
}, Ce = function() {
  return 0;
}, Qn = {
  suppressEvents: !0,
  isStart: !0,
  kill: !1
}, xe = {
  suppressEvents: !0,
  kill: !1
}, Bn = {
  suppressEvents: !0
}, Qi = {}, Tt = [], oi = {}, Ir, ft = {}, Xe = {}, Yi = 30, Oe = [], Bi = "", Di = function(t) {
  var e = t[0], i, r;
  if (Dt(e) || b(e) || (t = [t]), !(i = (e._gsap || {}).harness)) {
    for (r = Oe.length; r-- && !Oe[r].targetTest(e); )
      ;
    i = Oe[r];
  }
  for (r = t.length; r--; )
    t[r] && (t[r]._gsap || (t[r]._gsap = new Vr(t[r], i))) || t.splice(r, 1);
  return t;
}, zt = function(t) {
  return t._gsap || Di(Jt(t))[0]._gsap;
}, Cr = function(t, e, i) {
  return (i = t[e]) && b(i) ? t[e]() : Ji(i) && t.getAttribute && t.getAttribute(e) || i;
}, nt = function(t, e) {
  return (t = t.split(",")).forEach(e) || t;
}, z = function(t) {
  return Math.round(t * 1e5) / 1e5 || 0;
}, W = function(t) {
  return Math.round(t * 1e7) / 1e7 || 0;
}, re = function(t, e) {
  var i = e.charAt(0), r = parseFloat(e.substr(2));
  return t = parseFloat(t), i === "+" ? t + r : i === "-" ? t - r : i === "*" ? t * r : t / r;
}, Dn = function(t, e) {
  for (var i = e.length, r = 0; t.indexOf(e[r]) < 0 && ++r < i; )
    ;
  return r < i;
}, Ee = function() {
  var t = Tt.length, e = Tt.slice(0), i, r;
  for (oi = {}, Tt.length = 0, i = 0; i < t; i++)
    r = e[i], r && r._lazy && (r.render(r._lazy[0], r._lazy[1], !0)._lazy = 0);
}, vi = function(t) {
  return !!(t._initted || t._startAt || t.add);
}, Jr = function(t, e, i, r) {
  Tt.length && !X && Ee(), t.render(e, i, !!(X && e < 0 && vi(t))), Tt.length && !X && Ee();
}, yr = function(t) {
  var e = parseFloat(t);
  return (e || e === 0) && (t + "").match(wn).length < 2 ? e : j(t) ? t.trim() : t;
}, wr = function(t) {
  return t;
}, St = function(t, e) {
  for (var i in e)
    i in t || (t[i] = e[i]);
  return t;
}, vn = function(t) {
  return function(e, i) {
    for (var r in i)
      r in e || r === "duration" && t || r === "ease" || (e[r] = i[r]);
  };
}, oe = function(t, e) {
  for (var i in e)
    t[i] = e[i];
  return t;
}, bi = function o(t, e) {
  for (var i in e)
    i !== "__proto__" && i !== "constructor" && i !== "prototype" && (t[i] = Dt(e[i]) ? o(t[i] || (t[i] = {}), e[i]) : e[i]);
  return t;
}, Te = function(t, e) {
  var i = {}, r;
  for (r in t)
    r in e || (i[r] = t[r]);
  return i;
}, Se = function(t) {
  var e = t.parent || N, i = t.keyframes ? vn($(t.keyframes)) : St;
  if (rt(t.inherit))
    for (; e; )
      i(t, e.vars.defaults), e = e.parent || e._dp;
  return t;
}, xn = function(t, e) {
  for (var i = t.length, r = i === e.length; r && i-- && t[i] === e[i]; )
    ;
  return i < 0;
}, mr = function(t, e, i, r, n) {
  var a = t[r], s;
  if (n)
    for (s = e[n]; a && a[n] > s; )
      a = a._prev;
  return a ? (e._next = a._next, a._next = e) : (e._next = t[i], t[i] = e), e._next ? e._next._prev = e : t[r] = e, e._prev = a, e.parent = e._dp = t, e;
}, Ve = function(t, e, i, r) {
  i === void 0 && (i = "_first"), r === void 0 && (r = "_last");
  var n = e._prev, a = e._next;
  n ? n._next = a : t[i] === e && (t[i] = a), a ? a._prev = n : t[r] === e && (t[r] = n), e._next = e._prev = e.parent = null;
}, Lt = function(t, e) {
  t.parent && (!e || t.parent.autoRemoveChildren) && t.parent.remove && t.parent.remove(t), t._act = 0;
}, Zt = function(t, e) {
  if (t && (!e || e._end > t._dur || e._start < 0))
    for (var i = t; i; )
      i._dirty = 1, i = i.parent;
  return t;
}, On = function(t) {
  for (var e = t.parent; e && e.parent; )
    e._dirty = 1, e.totalDuration(), e = e.parent;
  return t;
}, hi = function(t, e, i, r) {
  return t._startAt && (X ? t._startAt.revert(xe) : t.vars.immediateRender && !t.vars.autoRevert || t._startAt.render(e, !0, r));
}, Kn = function o(t) {
  return !t || t._ts && o(t.parent);
}, Mi = function(t) {
  return t._repeat ? he(t._tTime, t = t.duration() + t._rDelay) * t : 0;
}, he = function(t, e) {
  var i = Math.floor(t = W(t / e));
  return t && i === t ? i - 1 : i;
}, Re = function(t, e) {
  return (t - e._start) * e._ts + (e._ts >= 0 ? 0 : e._dirty ? e.totalDuration() : e._tDur);
}, qe = function(t) {
  return t._end = W(t._start + (t._tDur / Math.abs(t._ts || t._rts || T) || 0));
}, Ye = function(t, e) {
  var i = t._dp;
  return i && i.smoothChildTiming && t._ts && (t._start = W(i._time - (t._ts > 0 ? e / t._ts : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts)), qe(t), i._dirty || Zt(i, t)), t;
}, Qr = function(t, e) {
  var i;
  if ((e._time || !e._dur && e._initted || e._start < t._time && (e._dur || !e.add)) && (i = Re(t.rawTime(), e), (!e._dur || Be(0, e.totalDuration(), i) - e._tTime > T) && e.render(i, !0)), Zt(t, e)._dp && t._initted && t._time >= t._dur && t._ts) {
    if (t._dur < t.duration())
      for (i = t; i._dp; )
        i.rawTime() >= 0 && i.totalTime(i._tTime), i = i._dp;
    t._zTime = -T;
  }
}, Qt = function(t, e, i, r) {
  return e.parent && Lt(e), e._start = W((Kt(i) ? i : i || t !== N ? It(t, i, e) : t._time) + e._delay), e._end = W(e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0)), mr(t, e, "_first", "_last", t._sort ? "_start" : 0), li(e) || (t._recent = e), r || Qr(t, e), t._ts < 0 && Ye(t, t._tTime), t;
}, Br = function(t, e) {
  return (ct.ScrollTrigger || mi("scrollTrigger", e)) && ct.ScrollTrigger.create(e, t);
}, Dr = function(t, e, i, r, n) {
  if (Oi(t, e, n), !t._initted)
    return 1;
  if (!i && t._pt && !X && (t._dur && t.vars.lazy !== !1 || !t._dur && t.vars.lazy) && Ir !== ut.frame)
    return Tt.push(t), t._lazy = [n, r], 1;
}, Un = function o(t) {
  var e = t.parent;
  return e && e._ts && e._initted && !e._lock && (e.rawTime() < 0 || o(e));
}, li = function(t) {
  var e = t.data;
  return e === "isFromStart" || e === "isStart";
}, Pn = function(t, e, i, r) {
  var n = t.ratio, a = e < 0 || !e && (!t._start && Un(t) && !(!t._initted && li(t)) || (t._ts < 0 || t._dp._ts < 0) && !li(t)) ? 0 : 1, s = t._rDelay, h = 0, f, l, g;
  if (s && t._repeat && (h = Be(0, t._tDur, e), l = he(h, s), t._yoyo && l & 1 && (a = 1 - a), l !== he(t._tTime, s) && (n = 1 - a, t.vars.repeatRefresh && t._initted && t.invalidate())), a !== n || X || r || t._zTime === T || !e && t._zTime) {
    if (!t._initted && Dr(t, e, r, i, h))
      return;
    for (g = t._zTime, t._zTime = e || (i ? T : 0), i || (i = e && !g), t.ratio = a, t._from && (a = 1 - a), t._time = 0, t._tTime = h, f = t._pt; f; )
      f.r(a, f.d), f = f._next;
    e < 0 && hi(t, e, i, !0), t._onUpdate && !i && gt(t, "onUpdate"), h && t._repeat && !i && t.parent && gt(t, "onRepeat"), (e >= t._tDur || e < 0) && t.ratio === a && (a && Lt(t, 1), !i && !X && (gt(t, a ? "onComplete" : "onReverseComplete", !0), t._prom && t._prom()));
  } else t._zTime || (t._zTime = e);
}, Fn = function(t, e, i) {
  var r;
  if (i > e)
    for (r = t._first; r && r._start <= i; ) {
      if (r.data === "isPause" && r._start > e)
        return r;
      r = r._next;
    }
  else
    for (r = t._last; r && r._start >= i; ) {
      if (r.data === "isPause" && r._start < e)
        return r;
      r = r._prev;
    }
}, le = function(t, e, i, r) {
  var n = t._repeat, a = W(e) || 0, s = t._tTime / t._tDur;
  return s && !r && (t._time *= a / t._dur), t._dur = a, t._tDur = n ? n < 0 ? 1e10 : W(a * (n + 1) + t._rDelay * n) : a, s > 0 && !r && Ye(t, t._tTime = t._tDur * s), t.parent && qe(t), i || Zt(t.parent, t), t;
}, zi = function(t) {
  return t instanceof et ? Zt(t) : le(t, t._dur);
}, Hn = {
  _start: 0,
  endTime: Ce,
  totalDuration: Ce
}, It = function o(t, e, i) {
  var r = t.labels, n = t._recent || Hn, a = t.duration() >= Ct ? n.endTime(!1) : t._dur, s, h, f;
  return j(e) && (isNaN(e) || e in r) ? (h = e.charAt(0), f = e.substr(-1) === "%", s = e.indexOf("="), h === "<" || h === ">" ? (s >= 0 && (e = e.replace(/=/, "")), (h === "<" ? n._start : n.endTime(n._repeat >= 0)) + (parseFloat(e.substr(1)) || 0) * (f ? (s < 0 ? n : i).totalDuration() / 100 : 1)) : s < 0 ? (e in r || (r[e] = a), r[e]) : (h = parseFloat(e.charAt(s - 1) + e.substr(s + 1)), f && i && (h = h / 100 * ($(i) ? i[0] : i).totalDuration()), s > 1 ? o(t, e.substr(0, s - 1), i) + h : a + h)) : e == null ? a : +e;
}, de = function(t, e, i) {
  var r = Kt(e[1]), n = (r ? 2 : 1) + (t < 2 ? 0 : 1), a = e[n], s, h;
  if (r && (a.duration = e[1]), a.parent = i, t) {
    for (s = a, h = i; h && !("immediateRender" in s); )
      s = h.vars.defaults || {}, h = rt(h.vars.inherit) && h.parent;
    a.immediateRender = rt(s.immediateRender), t < 2 ? a.runBackwards = 1 : a.startAt = e[n - 1];
  }
  return new Z(e[0], a, e[n + 1]);
}, Gt = function(t, e) {
  return t || t === 0 ? e(t) : e;
}, Be = function(t, e, i) {
  return i < t ? t : i > e ? e : i;
}, _ = function(t, e) {
  return !j(t) || !(e = mn.exec(t)) ? "" : e[1];
}, En = function(t, e, i) {
  return Gt(i, function(r) {
    return Be(t, e, r);
  });
}, fi = [].slice, vr = function(t, e) {
  return t && Dt(t) && "length" in t && (!e && !t.length || t.length - 1 in t && Dt(t[0])) && !t.nodeType && t !== mt;
}, Tn = function(t, e, i) {
  return i === void 0 && (i = []), t.forEach(function(r) {
    var n;
    return j(r) && !e || vr(r, 1) ? (n = i).push.apply(n, Jt(r)) : i.push(r);
  }) || i;
}, Jt = function(t, e, i) {
  return R && !e && R.selector ? R.selector(t) : j(t) && !i && (si || !fe()) ? fi.call((e || wi).querySelectorAll(t), 0) : $(t) ? Tn(t, i) : vr(t) ? fi.call(t, 0) : t ? [t] : [];
}, ui = function(t) {
  return t = Jt(t)[0] || Ie("Invalid scope") || {}, function(e) {
    var i = t.current || t.nativeElement || t;
    return Jt(e, i.querySelectorAll ? i : i === t ? Ie("Invalid scope") || wi.createElement("div") : t);
  };
}, xr = function(t) {
  return t.sort(function() {
    return 0.5 - Math.random();
  });
}, Or = function(t) {
  if (b(t))
    return t;
  var e = Dt(t) ? t : {
    each: t
  }, i = jt(e.ease), r = e.from || 0, n = parseFloat(e.base) || 0, a = {}, s = r > 0 && r < 1, h = isNaN(r) || s, f = e.axis, l = r, g = r;
  return j(r) ? l = g = {
    center: 0.5,
    edges: 0.5,
    end: 1
  }[r] || 0 : !s && h && (l = r[0], g = r[1]), function(k, S, I) {
    var A = (I || e).length, J = a[A], u, C, c, p, d, y, m, Q, w;
    if (!J) {
      if (w = e.grid === "auto" ? 0 : (e.grid || [1, Ct])[1], !w) {
        for (m = -Ct; m < (m = I[w++].getBoundingClientRect().left) && w < A; )
          ;
        w < A && w--;
      }
      for (J = a[A] = [], u = h ? Math.min(w, A) * l - 0.5 : r % w, C = w === Ct ? 0 : h ? A * g / w - 0.5 : r / w | 0, m = 0, Q = Ct, y = 0; y < A; y++)
        c = y % w - u, p = C - (y / w | 0), J[y] = d = f ? Math.abs(f === "y" ? p : c) : gr(c * c + p * p), d > m && (m = d), d < Q && (Q = d);
      r === "random" && xr(J), J.max = m - Q, J.min = Q, J.v = A = (parseFloat(e.amount) || parseFloat(e.each) * (w > A ? A - 1 : f ? f === "y" ? A / w : w : Math.max(w, A / w)) || 0) * (r === "edges" ? -1 : 1), J.b = A < 0 ? n - A : n, J.u = _(e.amount || e.each) || 0, i = i && A < 0 ? Wr(i) : i;
    }
    return A = (J[k] - J.min) / J.max || 0, W(J.b + (i ? i(A) : A) * J.v) + J.u;
  };
}, gi = function(t) {
  var e = Math.pow(10, ((t + "").split(".")[1] || "").length);
  return function(i) {
    var r = W(Math.round(parseFloat(i) / t) * t * e);
    return (r - r % 1) / e + (Kt(i) ? 0 : _(i));
  };
}, Kr = function(t, e) {
  var i = $(t), r, n;
  return !i && Dt(t) && (r = i = t.radius || Ct, t.values ? (t = Jt(t.values), (n = !Kt(t[0])) && (r *= r)) : t = gi(t.increment)), Gt(e, i ? b(t) ? function(a) {
    return n = t(a), Math.abs(n - a) <= r ? n : a;
  } : function(a) {
    for (var s = parseFloat(n ? a.x : a), h = parseFloat(n ? a.y : 0), f = Ct, l = 0, g = t.length, k, S; g--; )
      n ? (k = t[g].x - s, S = t[g].y - h, k = k * k + S * S) : k = Math.abs(t[g] - s), k < f && (f = k, l = g);
    return l = !r || f <= r ? t[l] : a, n || l === a || Kt(a) ? l : l + _(a);
  } : gi(t));
}, Ur = function(t, e, i, r) {
  return Gt($(t) ? !e : i === !0 ? !!(i = 0) : !r, function() {
    return $(t) ? t[~~(Math.random() * t.length)] : (i = i || 1e-5) && (r = i < 1 ? Math.pow(10, (i + "").length - 2) : 1) && Math.floor(Math.round((t - i / 2 + Math.random() * (e - t + i * 0.99)) / i) * i * r) / r;
  });
}, Rn = function() {
  for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
    e[i] = arguments[i];
  return function(r) {
    return e.reduce(function(n, a) {
      return a(n);
    }, r);
  };
}, Ln = function(t, e) {
  return function(i) {
    return t(parseFloat(i)) + (e || _(i));
  };
}, Wn = function(t, e, i) {
  return Fr(t, e, 0, 1, i);
}, Pr = function(t, e, i) {
  return Gt(i, function(r) {
    return t[~~e(r)];
  });
}, Nn = function o(t, e, i) {
  var r = e - t;
  return $(t) ? Pr(t, o(0, t.length), e) : Gt(i, function(n) {
    return (r + (n - t) % r) % r + t;
  });
}, Gn = function o(t, e, i) {
  var r = e - t, n = r * 2;
  return $(t) ? Pr(t, o(0, t.length - 1), e) : Gt(i, function(a) {
    return a = (n + (a - t) % n) % n || 0, t + (a > r ? n - a : a);
  });
}, Je = function(t) {
  return t.replace(Jn, function(e) {
    var i = e.indexOf("[") + 1, r = e.substring(i || 7, i ? e.indexOf("]") : e.length - 1).split(yn);
    return Ur(i ? r : +r[0], i ? 0 : +r[1], +r[2] || 1e-5);
  });
}, Fr = function(t, e, i, r, n) {
  var a = e - t, s = r - i;
  return Gt(n, function(h) {
    return i + ((h - t) / a * s || 0);
  });
}, Vn = function o(t, e, i, r) {
  var n = isNaN(t + e) ? 0 : function(S) {
    return (1 - S) * t + S * e;
  };
  if (!n) {
    var a = j(t), s = {}, h, f, l, g, k;
    if (i === !0 && (r = 1) && (i = null), a)
      t = {
        p: t
      }, e = {
        p: e
      };
    else if ($(t) && !$(e)) {
      for (l = [], g = t.length, k = g - 2, f = 1; f < g; f++)
        l.push(o(t[f - 1], t[f]));
      g--, n = function(I) {
        I *= g;
        var A = Math.min(k, ~~I);
        return l[A](I - A);
      }, i = e;
    } else r || (t = oe($(t) ? [] : {}, t));
    if (!l) {
      for (h in e)
        xi.call(s, t, h, "get", e[h]);
      n = function(I) {
        return Pi(I, s) || (a ? t.p : t);
      };
    }
  }
  return Gt(i, n);
}, Zi = function(t, e, i) {
  var r = t.labels, n = Ct, a, s, h;
  for (a in r)
    s = r[a] - e, s < 0 == !!i && s && n > (s = Math.abs(s)) && (h = a, n = s);
  return h;
}, gt = function(t, e, i) {
  var r = t.vars, n = r[e], a = R, s = t._ctx, h, f, l;
  if (n)
    return h = r[e + "Params"], f = r.callbackScope || t, i && Tt.length && Ee(), s && (R = s), l = h ? n.apply(f, h) : n.call(f), R = a, l;
}, Ae = function(t) {
  return Lt(t), t.scrollTrigger && t.scrollTrigger.kill(!!X), t.progress() < 1 && gt(t, "onInterrupt"), t;
}, ie, Hr = [], Er = function(t) {
  if (t)
    if (t = !t.name && t.default || t, yi() || t.headless) {
      var e = t.name, i = b(t), r = e && !i && t.init ? function() {
        this._props = [];
      } : t, n = {
        init: Ce,
        render: Pi,
        add: xi,
        kill: aa,
        modifier: na,
        rawVars: 0
      }, a = {
        targetTest: 0,
        get: 0,
        getSetter: Ui,
        aliases: {},
        register: 0
      };
      if (fe(), t !== r) {
        if (ft[e])
          return;
        St(r, St(Te(t, n), a)), oe(r.prototype, oe(n, Te(t, a))), ft[r.prop = e] = r, t.targetTest && (Oe.push(r), Qi[e] = 1), e = (e === "css" ? "CSS" : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin";
      }
      pr(e, r), t.register && t.register(ot, r, at);
    } else
      Hr.push(t);
}, E = 255, ke = {
  aqua: [0, E, E],
  lime: [0, E, 0],
  silver: [192, 192, 192],
  black: [0, 0, 0],
  maroon: [128, 0, 0],
  teal: [0, 128, 128],
  blue: [0, 0, E],
  navy: [0, 0, 128],
  white: [E, E, E],
  olive: [128, 128, 0],
  yellow: [E, E, 0],
  orange: [E, 165, 0],
  gray: [128, 128, 128],
  purple: [128, 0, 128],
  green: [0, 128, 0],
  red: [E, 0, 0],
  pink: [E, 192, 203],
  cyan: [0, E, E],
  transparent: [E, E, E, 0]
}, _e = function(t, e, i) {
  return t += t < 0 ? 1 : t > 1 ? -1 : 0, (t * 6 < 1 ? e + (i - e) * t * 6 : t < 0.5 ? i : t * 3 < 2 ? e + (i - e) * (2 / 3 - t) * 6 : e) * E + 0.5 | 0;
}, Tr = function(t, e, i) {
  var r = t ? Kt(t) ? [t >> 16, t >> 8 & E, t & E] : 0 : ke.black, n, a, s, h, f, l, g, k, S, I;
  if (!r) {
    if (t.substr(-1) === "," && (t = t.substr(0, t.length - 1)), ke[t])
      r = ke[t];
    else if (t.charAt(0) === "#") {
      if (t.length < 6 && (n = t.charAt(1), a = t.charAt(2), s = t.charAt(3), t = "#" + n + n + a + a + s + s + (t.length === 5 ? t.charAt(4) + t.charAt(4) : "")), t.length === 9)
        return r = parseInt(t.substr(1, 6), 16), [r >> 16, r >> 8 & E, r & E, parseInt(t.substr(7), 16) / 255];
      t = parseInt(t.substr(1), 16), r = [t >> 16, t >> 8 & E, t & E];
    } else if (t.substr(0, 3) === "hsl") {
      if (r = I = t.match(qi), !e)
        h = +r[0] % 360 / 360, f = +r[1] / 100, l = +r[2] / 100, a = l <= 0.5 ? l * (f + 1) : l + f - l * f, n = l * 2 - a, r.length > 3 && (r[3] *= 1), r[0] = _e(h + 1 / 3, n, a), r[1] = _e(h, n, a), r[2] = _e(h - 1 / 3, n, a);
      else if (~t.indexOf("="))
        return r = t.match(kr), i && r.length < 4 && (r[3] = 1), r;
    } else
      r = t.match(qi) || ke.transparent;
    r = r.map(Number);
  }
  return e && !I && (n = r[0] / E, a = r[1] / E, s = r[2] / E, g = Math.max(n, a, s), k = Math.min(n, a, s), l = (g + k) / 2, g === k ? h = f = 0 : (S = g - k, f = l > 0.5 ? S / (2 - g - k) : S / (g + k), h = g === n ? (a - s) / S + (a < s ? 6 : 0) : g === a ? (s - n) / S + 2 : (n - a) / S + 4, h *= 60), r[0] = ~~(h + 0.5), r[1] = ~~(f * 100 + 0.5), r[2] = ~~(l * 100 + 0.5)), i && r.length < 4 && (r[3] = 1), r;
}, Rr = function(t) {
  var e = [], i = [], r = -1;
  return t.split(Rt).forEach(function(n) {
    var a = n.match(ee) || [];
    e.push.apply(e, a), i.push(r += a.length + 1);
  }), e.c = i, e;
}, ji = function(t, e, i) {
  var r = "", n = (t + r).match(Rt), a = e ? "hsla(" : "rgba(", s = 0, h, f, l, g;
  if (!n)
    return t;
  if (n = n.map(function(k) {
    return (k = Tr(k, e, 1)) && a + (e ? k[0] + "," + k[1] + "%," + k[2] + "%," + k[3] : k.join(",")) + ")";
  }), i && (l = Rr(t), h = i.c, h.join(r) !== l.c.join(r)))
    for (f = t.replace(Rt, "1").split(ee), g = f.length - 1; s < g; s++)
      r += f[s] + (~h.indexOf(s) ? n.shift() || a + "0,0,0,0)" : (l.length ? l : n.length ? n : i).shift());
  if (!f)
    for (f = t.split(Rt), g = f.length - 1; s < g; s++)
      r += f[s] + n[s];
  return r + f[g];
}, Rt = (function() {
  var o = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b", t;
  for (t in ke)
    o += "|" + t + "\\b";
  return new RegExp(o + ")", "gi");
})(), qn = /hsl[a]?\(/, Lr = function(t) {
  var e = t.join(" "), i;
  if (Rt.lastIndex = 0, Rt.test(e))
    return i = qn.test(e), t[1] = ji(t[1], i), t[0] = ji(t[0], i, Rr(t[1])), !0;
}, ye, ut = (function() {
  var o = Date.now, t = 500, e = 33, i = o(), r = i, n = 1e3 / 240, a = n, s = [], h, f, l, g, k, S, I = function A(J) {
    var u = o() - r, C = J === !0, c, p, d, y;
    if ((u > t || u < 0) && (i += u - e), r += u, d = r - i, c = d - a, (c > 0 || C) && (y = ++g.frame, k = d - g.time * 1e3, g.time = d = d / 1e3, a += c + (c >= n ? 4 : n - c), p = 1), C || (h = f(A)), p)
      for (S = 0; S < s.length; S++)
        s[S](d, k, y, J);
  };
  return g = {
    time: 0,
    frame: 0,
    tick: function() {
      I(!0);
    },
    deltaRatio: function(J) {
      return k / (1e3 / (J || 60));
    },
    wake: function() {
      Sr && (!si && yi() && (mt = si = window, wi = mt.document || {}, ct.gsap = ot, (mt.gsapVersions || (mt.gsapVersions = [])).push(ot.version), dr(He || mt.GreenSockGlobals || !mt.gsap && mt || {}), Hr.forEach(Er)), l = typeof requestAnimationFrame < "u" && requestAnimationFrame, h && g.sleep(), f = l || function(J) {
        return setTimeout(J, a - g.time * 1e3 + 1 | 0);
      }, ye = 1, I(2));
    },
    sleep: function() {
      (l ? cancelAnimationFrame : clearTimeout)(h), ye = 0, f = Ce;
    },
    lagSmoothing: function(J, u) {
      t = J || 1 / 0, e = Math.min(u || 33, t);
    },
    fps: function(J) {
      n = 1e3 / (J || 240), a = g.time * 1e3 + n;
    },
    add: function(J, u, C) {
      var c = u ? function(p, d, y, m) {
        J(p, d, y, m), g.remove(c);
      } : J;
      return g.remove(J), s[C ? "unshift" : "push"](c), fe(), c;
    },
    remove: function(J, u) {
      ~(u = s.indexOf(J)) && s.splice(u, 1) && S >= u && S--;
    },
    _listeners: s
  }, g;
})(), fe = function() {
  return !ye && ut.wake();
}, K = {}, Yn = /^[\d.\-M][\d.\-,\s]/, bn = /["']/g, Mn = function(t) {
  for (var e = {}, i = t.substr(1, t.length - 3).split(":"), r = i[0], n = 1, a = i.length, s, h, f; n < a; n++)
    h = i[n], s = n !== a - 1 ? h.lastIndexOf(",") : h.length, f = h.substr(0, s), e[r] = isNaN(f) ? f.replace(bn, "").trim() : +f, r = h.substr(s + 1).trim();
  return e;
}, zn = function(t) {
  var e = t.indexOf("(") + 1, i = t.indexOf(")"), r = t.indexOf("(", e);
  return t.substring(e, ~r && r < i ? t.indexOf(")", i + 1) : i);
}, Zn = function(t) {
  var e = (t + "").split("("), i = K[e[0]];
  return i && e.length > 1 && i.config ? i.config.apply(null, ~t.indexOf("{") ? [Mn(e[1])] : zn(t).split(",").map(yr)) : K._CE && Yn.test(t) ? K._CE("", t) : i;
}, Wr = function(t) {
  return function(e) {
    return 1 - t(1 - e);
  };
}, Nr = function o(t, e) {
  for (var i = t._first, r; i; )
    i instanceof et ? o(i, e) : i.vars.yoyoEase && (!i._yoyo || !i._repeat) && i._yoyo !== e && (i.timeline ? o(i.timeline, e) : (r = i._ease, i._ease = i._yEase, i._yEase = r, i._yoyo = e)), i = i._next;
}, jt = function(t, e) {
  return t && (b(t) ? t : K[t] || Zn(t)) || e;
}, _t = function(t, e, i, r) {
  i === void 0 && (i = function(h) {
    return 1 - e(1 - h);
  }), r === void 0 && (r = function(h) {
    return h < 0.5 ? e(h * 2) / 2 : 1 - e((1 - h) * 2) / 2;
  });
  var n = {
    easeIn: e,
    easeOut: i,
    easeInOut: r
  }, a;
  return nt(t, function(s) {
    K[s] = ct[s] = n, K[a = s.toLowerCase()] = i;
    for (var h in n)
      K[a + (h === "easeIn" ? ".in" : h === "easeOut" ? ".out" : ".inOut")] = K[s + "." + h] = n[h];
  }), n;
}, Gr = function(t) {
  return function(e) {
    return e < 0.5 ? (1 - t(1 - e * 2)) / 2 : 0.5 + t((e - 0.5) * 2) / 2;
  };
}, $e = function o(t, e, i) {
  var r = e >= 1 ? e : 1, n = (i || (t ? 0.3 : 0.45)) / (e < 1 ? e : 1), a = n / ai * (Math.asin(1 / r) || 0), s = function(l) {
    return l === 1 ? 1 : r * Math.pow(2, -10 * l) * Cn((l - a) * n) + 1;
  }, h = t === "out" ? s : t === "in" ? function(f) {
    return 1 - s(1 - f);
  } : Gr(s);
  return n = ai / n, h.config = function(f, l) {
    return o(t, f, l);
  }, h;
}, ti = function o(t, e) {
  e === void 0 && (e = 1.70158);
  var i = function(a) {
    return a ? --a * a * ((e + 1) * a + e) + 1 : 0;
  }, r = t === "out" ? i : t === "in" ? function(n) {
    return 1 - i(1 - n);
  } : Gr(i);
  return r.config = function(n) {
    return o(t, n);
  }, r;
};
nt("Linear,Quad,Cubic,Quart,Quint,Strong", function(o, t) {
  var e = t < 5 ? t + 1 : t;
  _t(o + ",Power" + (e - 1), t ? function(i) {
    return Math.pow(i, e);
  } : function(i) {
    return i;
  }, function(i) {
    return 1 - Math.pow(1 - i, e);
  }, function(i) {
    return i < 0.5 ? Math.pow(i * 2, e) / 2 : 1 - Math.pow((1 - i) * 2, e) / 2;
  });
});
K.Linear.easeNone = K.none = K.Linear.easeIn;
_t("Elastic", $e("in"), $e("out"), $e());
(function(o, t) {
  var e = 1 / t, i = 2 * e, r = 2.5 * e, n = function(s) {
    return s < e ? o * s * s : s < i ? o * Math.pow(s - 1.5 / t, 2) + 0.75 : s < r ? o * (s -= 2.25 / t) * s + 0.9375 : o * Math.pow(s - 2.625 / t, 2) + 0.984375;
  };
  _t("Bounce", function(a) {
    return 1 - n(1 - a);
  }, n);
})(7.5625, 2.75);
_t("Expo", function(o) {
  return Math.pow(2, 10 * (o - 1)) * o + o * o * o * o * o * o * (1 - o);
});
_t("Circ", function(o) {
  return -(gr(1 - o * o) - 1);
});
_t("Sine", function(o) {
  return o === 1 ? 1 : -In(o * dn) + 1;
});
_t("Back", ti("in"), ti("out"), ti());
K.SteppedEase = K.steps = ct.SteppedEase = {
  config: function(t, e) {
    t === void 0 && (t = 1);
    var i = 1 / t, r = t + (e ? 0 : 1), n = e ? 1 : 0, a = 1 - T;
    return function(s) {
      return ((r * Be(0, a, s) | 0) + n) * i;
    };
  }
};
se.ease = K["quad.out"];
nt("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(o) {
  return Bi += o + "," + o + "Params,";
});
var Vr = function(t, e) {
  this.id = pn++, t._gsap = this, this.target = t, this.harness = e, this.get = e ? e.get : Cr, this.set = e ? e.getSetter : Ui;
}, we = /* @__PURE__ */ (function() {
  function o(e) {
    this.vars = e, this._delay = +e.delay || 0, (this._repeat = e.repeat === 1 / 0 ? -2 : e.repeat || 0) && (this._rDelay = e.repeatDelay || 0, this._yoyo = !!e.yoyo || !!e.yoyoEase), this._ts = 1, le(this, +e.duration, 1, 1), this.data = e.data, R && (this._ctx = R, R.data.push(this)), ye || ut.wake();
  }
  var t = o.prototype;
  return t.delay = function(i) {
    return i || i === 0 ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + i - this._delay), this._delay = i, this) : this._delay;
  }, t.duration = function(i) {
    return arguments.length ? this.totalDuration(this._repeat > 0 ? i + (i + this._rDelay) * this._repeat : i) : this.totalDuration() && this._dur;
  }, t.totalDuration = function(i) {
    return arguments.length ? (this._dirty = 0, le(this, this._repeat < 0 ? i : (i - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur;
  }, t.totalTime = function(i, r) {
    if (fe(), !arguments.length)
      return this._tTime;
    var n = this._dp;
    if (n && n.smoothChildTiming && this._ts) {
      for (Ye(this, i), !n._dp || n.parent || Qr(n, this); n && n.parent; )
        n.parent._time !== n._start + (n._ts >= 0 ? n._tTime / n._ts : (n.totalDuration() - n._tTime) / -n._ts) && n.totalTime(n._tTime, !0), n = n.parent;
      !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && i < this._tDur || this._ts < 0 && i > 0 || !this._tDur && !i) && Qt(this._dp, this, this._start - this._delay);
    }
    return (this._tTime !== i || !this._dur && !r || this._initted && Math.abs(this._zTime) === T || !this._initted && this._dur && i || !i && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = i), Jr(this, i, r)), this;
  }, t.time = function(i, r) {
    return arguments.length ? this.totalTime(Math.min(this.totalDuration(), i + Mi(this)) % (this._dur + this._rDelay) || (i ? this._dur : 0), r) : this._time;
  }, t.totalProgress = function(i, r) {
    return arguments.length ? this.totalTime(this.totalDuration() * i, r) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.rawTime() >= 0 && this._initted ? 1 : 0;
  }, t.progress = function(i, r) {
    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - i : i) + Mi(this), r) : this.duration() ? Math.min(1, this._time / this._dur) : this.rawTime() > 0 ? 1 : 0;
  }, t.iteration = function(i, r) {
    var n = this.duration() + this._rDelay;
    return arguments.length ? this.totalTime(this._time + (i - 1) * n, r) : this._repeat ? he(this._tTime, n) + 1 : 1;
  }, t.timeScale = function(i, r) {
    if (!arguments.length)
      return this._rts === -T ? 0 : this._rts;
    if (this._rts === i)
      return this;
    var n = this.parent && this._ts ? Re(this.parent._time, this) : this._tTime;
    return this._rts = +i || 0, this._ts = this._ps || i === -T ? 0 : this._rts, this.totalTime(Be(-Math.abs(this._delay), this.totalDuration(), n), r !== !1), qe(this), On(this);
  }, t.paused = function(i) {
    return arguments.length ? (this._ps !== i && (this._ps = i, i ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (fe(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== T && (this._tTime -= T)))), this) : this._ps;
  }, t.startTime = function(i) {
    if (arguments.length) {
      this._start = W(i);
      var r = this.parent || this._dp;
      return r && (r._sort || !this.parent) && Qt(r, this, this._start - this._delay), this;
    }
    return this._start;
  }, t.endTime = function(i) {
    return this._start + (rt(i) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1);
  }, t.rawTime = function(i) {
    var r = this.parent || this._dp;
    return r ? i && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? Re(r.rawTime(i), this) : this._tTime : this._tTime;
  }, t.revert = function(i) {
    i === void 0 && (i = Bn);
    var r = X;
    return X = i, vi(this) && (this.timeline && this.timeline.revert(i), this.totalTime(-0.01, i.suppressEvents)), this.data !== "nested" && i.kill !== !1 && this.kill(), X = r, this;
  }, t.globalTime = function(i) {
    for (var r = this, n = arguments.length ? i : r.rawTime(); r; )
      n = r._start + n / (Math.abs(r._ts) || 1), r = r._dp;
    return !this.parent && this._sat ? this._sat.globalTime(i) : n;
  }, t.repeat = function(i) {
    return arguments.length ? (this._repeat = i === 1 / 0 ? -2 : i, zi(this)) : this._repeat === -2 ? 1 / 0 : this._repeat;
  }, t.repeatDelay = function(i) {
    if (arguments.length) {
      var r = this._time;
      return this._rDelay = i, zi(this), r ? this.time(r) : this;
    }
    return this._rDelay;
  }, t.yoyo = function(i) {
    return arguments.length ? (this._yoyo = i, this) : this._yoyo;
  }, t.seek = function(i, r) {
    return this.totalTime(It(this, i), rt(r));
  }, t.restart = function(i, r) {
    return this.play().totalTime(i ? -this._delay : 0, rt(r)), this._dur || (this._zTime = -T), this;
  }, t.play = function(i, r) {
    return i != null && this.seek(i, r), this.reversed(!1).paused(!1);
  }, t.reverse = function(i, r) {
    return i != null && this.seek(i || this.totalDuration(), r), this.reversed(!0).paused(!1);
  }, t.pause = function(i, r) {
    return i != null && this.seek(i, r), this.paused(!0);
  }, t.resume = function() {
    return this.paused(!1);
  }, t.reversed = function(i) {
    return arguments.length ? (!!i !== this.reversed() && this.timeScale(-this._rts || (i ? -T : 0)), this) : this._rts < 0;
  }, t.invalidate = function() {
    return this._initted = this._act = 0, this._zTime = -T, this;
  }, t.isActive = function() {
    var i = this.parent || this._dp, r = this._start, n;
    return !!(!i || this._ts && this._initted && i.isActive() && (n = i.rawTime(!0)) >= r && n < this.endTime(!0) - T);
  }, t.eventCallback = function(i, r, n) {
    var a = this.vars;
    return arguments.length > 1 ? (r ? (a[i] = r, n && (a[i + "Params"] = n), i === "onUpdate" && (this._onUpdate = r)) : delete a[i], this) : a[i];
  }, t.then = function(i) {
    var r = this, n = r._prom;
    return new Promise(function(a) {
      var s = b(i) ? i : wr, h = function() {
        var l = r.then;
        r.then = null, n && n(), b(s) && (s = s(r)) && (s.then || s === r) && (r.then = l), a(s), r.then = l;
      };
      r._initted && r.totalProgress() === 1 && r._ts >= 0 || !r._tTime && r._ts < 0 ? h() : r._prom = h;
    });
  }, t.kill = function() {
    Ae(this);
  }, o;
})();
St(we.prototype, {
  _time: 0,
  _start: 0,
  _end: 0,
  _tTime: 0,
  _tDur: 0,
  _dirty: 0,
  _repeat: 0,
  _yoyo: !1,
  parent: null,
  _initted: !1,
  _rDelay: 0,
  _ts: 1,
  _dp: 0,
  ratio: 0,
  _zTime: -T,
  _prom: 0,
  _ps: !1,
  _rts: 1
});
var et = /* @__PURE__ */ (function(o) {
  ur(t, o);
  function t(i, r) {
    var n;
    return i === void 0 && (i = {}), n = o.call(this, i) || this, n.labels = {}, n.smoothChildTiming = !!i.smoothChildTiming, n.autoRemoveChildren = !!i.autoRemoveChildren, n._sort = rt(i.sortChildren), N && Qt(i.parent || N, xt(n), r), i.reversed && n.reverse(), i.paused && n.paused(!0), i.scrollTrigger && Br(xt(n), i.scrollTrigger), n;
  }
  var e = t.prototype;
  return e.to = function(r, n, a) {
    return de(0, arguments, this), this;
  }, e.from = function(r, n, a) {
    return de(1, arguments, this), this;
  }, e.fromTo = function(r, n, a, s) {
    return de(2, arguments, this), this;
  }, e.set = function(r, n, a) {
    return n.duration = 0, n.parent = this, Se(n).repeatDelay || (n.repeat = 0), n.immediateRender = !!n.immediateRender, new Z(r, n, It(this, a), 1), this;
  }, e.call = function(r, n, a) {
    return Qt(this, Z.delayedCall(0, r, n), a);
  }, e.staggerTo = function(r, n, a, s, h, f, l) {
    return a.duration = n, a.stagger = a.stagger || s, a.onComplete = f, a.onCompleteParams = l, a.parent = this, new Z(r, a, It(this, h)), this;
  }, e.staggerFrom = function(r, n, a, s, h, f, l) {
    return a.runBackwards = 1, Se(a).immediateRender = rt(a.immediateRender), this.staggerTo(r, n, a, s, h, f, l);
  }, e.staggerFromTo = function(r, n, a, s, h, f, l, g) {
    return s.startAt = a, Se(s).immediateRender = rt(s.immediateRender), this.staggerTo(r, n, s, h, f, l, g);
  }, e.render = function(r, n, a) {
    var s = this._time, h = this._dirty ? this.totalDuration() : this._tDur, f = this._dur, l = r <= 0 ? 0 : W(r), g = this._zTime < 0 != r < 0 && (this._initted || !f), k, S, I, A, J, u, C, c, p, d, y, m;
    if (this !== N && l > h && r >= 0 && (l = h), l !== this._tTime || a || g) {
      if (s !== this._time && f && (l += this._time - s, r += this._time - s), k = l, p = this._start, c = this._ts, u = !c, g && (f || (s = this._zTime), (r || !n) && (this._zTime = r)), this._repeat) {
        if (y = this._yoyo, J = f + this._rDelay, this._repeat < -1 && r < 0)
          return this.totalTime(J * 100 + r, n, a);
        if (k = W(l % J), l === h ? (A = this._repeat, k = f) : (d = W(l / J), A = ~~d, A && A === d && (k = f, A--), k > f && (k = f)), d = he(this._tTime, J), !s && this._tTime && d !== A && this._tTime - d * J - this._dur <= 0 && (d = A), y && A & 1 && (k = f - k, m = 1), A !== d && !this._lock) {
          var Q = y && d & 1, w = Q === (y && A & 1);
          if (A < d && (Q = !Q), s = Q ? 0 : l % f ? f : l, this._lock = 1, this.render(s || (m ? 0 : W(A * J)), n, !f)._lock = 0, this._tTime = l, !n && this.parent && gt(this, "onRepeat"), this.vars.repeatRefresh && !m && (this.invalidate()._lock = 1, d = A), s && s !== this._time || u !== !this._ts || this.vars.onRepeat && !this.parent && !this._act)
            return this;
          if (f = this._dur, h = this._tDur, w && (this._lock = 2, s = Q ? f : -1e-4, this.render(s, !0), this.vars.repeatRefresh && !m && this.invalidate()), this._lock = 0, !this._ts && !u)
            return this;
          Nr(this, m);
        }
      }
      if (this._hasPause && !this._forcing && this._lock < 2 && (C = Fn(this, W(s), W(k)), C && (l -= k - (k = C._start))), this._tTime = l, this._time = k, this._act = !c, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = r, s = 0), !s && l && f && !n && !d && (gt(this, "onStart"), this._tTime !== l))
        return this;
      if (k >= s && r >= 0)
        for (S = this._first; S; ) {
          if (I = S._next, (S._act || k >= S._start) && S._ts && C !== S) {
            if (S.parent !== this)
              return this.render(r, n, a);
            if (S.render(S._ts > 0 ? (k - S._start) * S._ts : (S._dirty ? S.totalDuration() : S._tDur) + (k - S._start) * S._ts, n, a), k !== this._time || !this._ts && !u) {
              C = 0, I && (l += this._zTime = -T);
              break;
            }
          }
          S = I;
        }
      else {
        S = this._last;
        for (var B = r < 0 ? r : k; S; ) {
          if (I = S._prev, (S._act || B <= S._end) && S._ts && C !== S) {
            if (S.parent !== this)
              return this.render(r, n, a);
            if (S.render(S._ts > 0 ? (B - S._start) * S._ts : (S._dirty ? S.totalDuration() : S._tDur) + (B - S._start) * S._ts, n, a || X && vi(S)), k !== this._time || !this._ts && !u) {
              C = 0, I && (l += this._zTime = B ? -T : T);
              break;
            }
          }
          S = I;
        }
      }
      if (C && !n && (this.pause(), C.render(k >= s ? 0 : -T)._zTime = k >= s ? 1 : -1, this._ts))
        return this._start = p, qe(this), this.render(r, n, a);
      this._onUpdate && !n && gt(this, "onUpdate", !0), (l === h && this._tTime >= this.totalDuration() || !l && s) && (p === this._start || Math.abs(c) !== Math.abs(this._ts)) && (this._lock || ((r || !f) && (l === h && this._ts > 0 || !l && this._ts < 0) && Lt(this, 1), !n && !(r < 0 && !s) && (l || s || !h) && (gt(this, l === h && r >= 0 ? "onComplete" : "onReverseComplete", !0), this._prom && !(l < h && this.timeScale() > 0) && this._prom())));
    }
    return this;
  }, e.add = function(r, n) {
    var a = this;
    if (Kt(n) || (n = It(this, n, r)), !(r instanceof we)) {
      if ($(r))
        return r.forEach(function(s) {
          return a.add(s, n);
        }), this;
      if (j(r))
        return this.addLabel(r, n);
      if (b(r))
        r = Z.delayedCall(0, r);
      else
        return this;
    }
    return this !== r ? Qt(this, r, n) : this;
  }, e.getChildren = function(r, n, a, s) {
    r === void 0 && (r = !0), n === void 0 && (n = !0), a === void 0 && (a = !0), s === void 0 && (s = -Ct);
    for (var h = [], f = this._first; f; )
      f._start >= s && (f instanceof Z ? n && h.push(f) : (a && h.push(f), r && h.push.apply(h, f.getChildren(!0, n, a)))), f = f._next;
    return h;
  }, e.getById = function(r) {
    for (var n = this.getChildren(1, 1, 1), a = n.length; a--; )
      if (n[a].vars.id === r)
        return n[a];
  }, e.remove = function(r) {
    return j(r) ? this.removeLabel(r) : b(r) ? this.killTweensOf(r) : (r.parent === this && Ve(this, r), r === this._recent && (this._recent = this._last), Zt(this));
  }, e.totalTime = function(r, n) {
    return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = W(ut.time - (this._ts > 0 ? r / this._ts : (this.totalDuration() - r) / -this._ts))), o.prototype.totalTime.call(this, r, n), this._forcing = 0, this) : this._tTime;
  }, e.addLabel = function(r, n) {
    return this.labels[r] = It(this, n), this;
  }, e.removeLabel = function(r) {
    return delete this.labels[r], this;
  }, e.addPause = function(r, n, a) {
    var s = Z.delayedCall(0, n || Ce, a);
    return s.data = "isPause", this._hasPause = 1, Qt(this, s, It(this, r));
  }, e.removePause = function(r) {
    var n = this._first;
    for (r = It(this, r); n; )
      n._start === r && n.data === "isPause" && Lt(n), n = n._next;
  }, e.killTweensOf = function(r, n, a) {
    for (var s = this.getTweensOf(r, a), h = s.length; h--; )
      Ft !== s[h] && s[h].kill(r, n);
    return this;
  }, e.getTweensOf = function(r, n) {
    for (var a = [], s = Jt(r), h = this._first, f = Kt(n), l; h; )
      h instanceof Z ? Dn(h._targets, s) && (f ? (!Ft || h._initted && h._ts) && h.globalTime(0) <= n && h.globalTime(h.totalDuration()) > n : !n || h.isActive()) && a.push(h) : (l = h.getTweensOf(s, n)).length && a.push.apply(a, l), h = h._next;
    return a;
  }, e.tweenTo = function(r, n) {
    n = n || {};
    var a = this, s = It(a, r), h = n, f = h.startAt, l = h.onStart, g = h.onStartParams, k = h.immediateRender, S, I = Z.to(a, St({
      ease: n.ease || "none",
      lazy: !1,
      immediateRender: !1,
      time: s,
      overwrite: "auto",
      duration: n.duration || Math.abs((s - (f && "time" in f ? f.time : a._time)) / a.timeScale()) || T,
      onStart: function() {
        if (a.pause(), !S) {
          var J = n.duration || Math.abs((s - (f && "time" in f ? f.time : a._time)) / a.timeScale());
          I._dur !== J && le(I, J, 0, 1).render(I._time, !0, !0), S = 1;
        }
        l && l.apply(I, g || []);
      }
    }, n));
    return k ? I.render(0) : I;
  }, e.tweenFromTo = function(r, n, a) {
    return this.tweenTo(n, St({
      startAt: {
        time: It(this, r)
      }
    }, a));
  }, e.recent = function() {
    return this._recent;
  }, e.nextLabel = function(r) {
    return r === void 0 && (r = this._time), Zi(this, It(this, r));
  }, e.previousLabel = function(r) {
    return r === void 0 && (r = this._time), Zi(this, It(this, r), 1);
  }, e.currentLabel = function(r) {
    return arguments.length ? this.seek(r, !0) : this.previousLabel(this._time + T);
  }, e.shiftChildren = function(r, n, a) {
    a === void 0 && (a = 0);
    var s = this._first, h = this.labels, f;
    for (r = W(r); s; )
      s._start >= a && (s._start += r, s._end += r), s = s._next;
    if (n)
      for (f in h)
        h[f] >= a && (h[f] += r);
    return Zt(this);
  }, e.invalidate = function(r) {
    var n = this._first;
    for (this._lock = 0; n; )
      n.invalidate(r), n = n._next;
    return o.prototype.invalidate.call(this, r);
  }, e.clear = function(r) {
    r === void 0 && (r = !0);
    for (var n = this._first, a; n; )
      a = n._next, this.remove(n), n = a;
    return this._dp && (this._time = this._tTime = this._pTime = 0), r && (this.labels = {}), Zt(this);
  }, e.totalDuration = function(r) {
    var n = 0, a = this, s = a._last, h = Ct, f, l, g;
    if (arguments.length)
      return a.timeScale((a._repeat < 0 ? a.duration() : a.totalDuration()) / (a.reversed() ? -r : r));
    if (a._dirty) {
      for (g = a.parent; s; )
        f = s._prev, s._dirty && s.totalDuration(), l = s._start, l > h && a._sort && s._ts && !a._lock ? (a._lock = 1, Qt(a, s, l - s._delay, 1)._lock = 0) : h = l, l < 0 && s._ts && (n -= l, (!g && !a._dp || g && g.smoothChildTiming) && (a._start += W(l / a._ts), a._time -= l, a._tTime -= l), a.shiftChildren(-l, !1, -1 / 0), h = 0), s._end > n && s._ts && (n = s._end), s = f;
      le(a, a === N && a._time > n ? a._time : n, 1, 1), a._dirty = 0;
    }
    return a._tDur;
  }, t.updateRoot = function(r) {
    if (N._ts && (Jr(N, Re(r, N)), Ir = ut.frame), ut.frame >= Yi) {
      Yi += kt.autoSleep || 120;
      var n = N._first;
      if ((!n || !n._ts) && kt.autoSleep && ut._listeners.length < 2) {
        for (; n && !n._ts; )
          n = n._next;
        n || ut.sleep();
      }
    }
  }, t;
})(we);
St(et.prototype, {
  _lock: 0,
  _hasPause: 0,
  _forcing: 0
});
var jn = function(t, e, i, r, n, a, s) {
  var h = new at(this._pt, t, e, 0, 1, Zr, null, n), f = 0, l = 0, g, k, S, I, A, J, u, C;
  for (h.b = i, h.e = r, i += "", r += "", (u = ~r.indexOf("random(")) && (r = Je(r)), a && (C = [i, r], a(C, t, e), i = C[0], r = C[1]), k = i.match(je) || []; g = je.exec(r); )
    I = g[0], A = r.substring(f, g.index), S ? S = (S + 1) % 5 : A.substr(-5) === "rgba(" && (S = 1), I !== k[l++] && (J = parseFloat(k[l - 1]) || 0, h._pt = {
      _next: h._pt,
      p: A || l === 1 ? A : ",",
      //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
      s: J,
      c: I.charAt(1) === "=" ? re(J, I) - J : parseFloat(I) - J,
      m: S && S < 4 ? Math.round : 0
    }, f = je.lastIndex);
  return h.c = f < r.length ? r.substring(f, r.length) : "", h.fp = s, (cr.test(r) || u) && (h.e = 0), this._pt = h, h;
}, xi = function(t, e, i, r, n, a, s, h, f, l) {
  b(r) && (r = r(n || 0, t, a));
  var g = t[e], k = i !== "get" ? i : b(g) ? f ? t[e.indexOf("set") || !b(t["get" + e.substr(3)]) ? e : "get" + e.substr(3)](f) : t[e]() : g, S = b(g) ? f ? ea : Mr : Ki, I;
  if (j(r) && (~r.indexOf("random(") && (r = Je(r)), r.charAt(1) === "=" && (I = re(k, r) + (_(k) || 0), (I || I === 0) && (r = I))), !l || k !== r || Ai)
    return !isNaN(k * r) && r !== "" ? (I = new at(this._pt, t, e, +k || 0, r - (k || 0), typeof g == "boolean" ? ra : zr, 0, S), f && (I.fp = f), s && I.modifier(s, this, t), this._pt = I) : (!g && !(e in t) && mi(e, r), jn.call(this, t, e, k, r, S, h || kt.stringFilter, f));
}, Xn = function(t, e, i, r, n) {
  if (b(t) && (t = pe(t, n, e, i, r)), !Dt(t) || t.style && t.nodeType || $(t) || Ar(t))
    return j(t) ? pe(t, n, e, i, r) : t;
  var a = {}, s;
  for (s in t)
    a[s] = pe(t[s], n, e, i, r);
  return a;
}, qr = function(t, e, i, r, n, a) {
  var s, h, f, l;
  if (ft[t] && (s = new ft[t]()).init(n, s.rawVars ? e[t] : Xn(e[t], r, n, a, i), i, r, a) !== !1 && (i._pt = h = new at(i._pt, n, t, 0, 1, s.render, s, 0, s.priority), i !== ie))
    for (f = i._ptLookup[i._targets.indexOf(n)], l = s._props.length; l--; )
      f[s._props[l]] = h;
  return s;
}, Ft, Ai, Oi = function o(t, e, i) {
  var r = t.vars, n = r.ease, a = r.startAt, s = r.immediateRender, h = r.lazy, f = r.onUpdate, l = r.runBackwards, g = r.yoyoEase, k = r.keyframes, S = r.autoRevert, I = t._dur, A = t._startAt, J = t._targets, u = t.parent, C = u && u.data === "nested" ? u.vars.targets : J, c = t._overwrite === "auto" && !Ci, p = t.timeline, d, y, m, Q, w, B, x, D, O, F, P, U, H;
  if (p && (!k || !n) && (n = "none"), t._ease = jt(n, se.ease), t._yEase = g ? Wr(jt(g === !0 ? n : g, se.ease)) : 0, g && t._yoyo && !t._repeat && (g = t._yEase, t._yEase = t._ease, t._ease = g), t._from = !p && !!r.runBackwards, !p || k && !r.stagger) {
    if (D = J[0] ? zt(J[0]).harness : 0, U = D && r[D.prop], d = Te(r, Qi), A && (A._zTime < 0 && A.progress(1), e < 0 && l && s && !S ? A.render(-1, !0) : A.revert(l && I ? xe : Qn), A._lazy = 0), a) {
      if (Lt(t._startAt = Z.set(J, St({
        data: "isStart",
        overwrite: !1,
        parent: u,
        immediateRender: !0,
        lazy: !A && rt(h),
        startAt: null,
        delay: 0,
        onUpdate: f && function() {
          return gt(t, "onUpdate");
        },
        stagger: 0
      }, a))), t._startAt._dp = 0, t._startAt._sat = t, e < 0 && (X || !s && !S) && t._startAt.revert(xe), s && I && e <= 0 && i <= 0) {
        e && (t._zTime = e);
        return;
      }
    } else if (l && I && !A) {
      if (e && (s = !1), m = St({
        overwrite: !1,
        data: "isFromStart",
        //we tag the tween with as "isFromStart" so that if [inside a plugin] we need to only do something at the very END of a tween, we have a way of identifying this tween as merely the one that's setting the beginning values for a "from()" tween. For example, clearProps in CSSPlugin should only get applied at the very END of a tween and without this tag, from(...{height:100, clearProps:"height", delay:1}) would wipe the height at the beginning of the tween and after 1 second, it'd kick back in.
        lazy: s && !A && rt(h),
        immediateRender: s,
        //zero-duration tweens render immediately by default, but if we're not specifically instructed to render this tween immediately, we should skip this and merely _init() to record the starting values (rendering them immediately would push them to completion which is wasteful in that case - we'd have to render(-1) immediately after)
        stagger: 0,
        parent: u
        //ensures that nested tweens that had a stagger are handled properly, like gsap.from(".class", {y: gsap.utils.wrap([-100,100]), stagger: 0.5})
      }, d), U && (m[D.prop] = U), Lt(t._startAt = Z.set(J, m)), t._startAt._dp = 0, t._startAt._sat = t, e < 0 && (X ? t._startAt.revert(xe) : t._startAt.render(-1, !0)), t._zTime = e, !s)
        o(t._startAt, T, T);
      else if (!e)
        return;
    }
    for (t._pt = t._ptCache = 0, h = I && rt(h) || h && !I, y = 0; y < J.length; y++) {
      if (w = J[y], x = w._gsap || Di(J)[y]._gsap, t._ptLookup[y] = F = {}, oi[x.id] && Tt.length && Ee(), P = C === J ? y : C.indexOf(w), D && (O = new D()).init(w, U || d, t, P, C) !== !1 && (t._pt = Q = new at(t._pt, w, O.name, 0, 1, O.render, O, 0, O.priority), O._props.forEach(function(M) {
        F[M] = Q;
      }), O.priority && (B = 1)), !D || U)
        for (m in d)
          ft[m] && (O = qr(m, d, t, P, w, C)) ? O.priority && (B = 1) : F[m] = Q = xi.call(t, w, m, "get", d[m], P, C, 0, r.stringFilter);
      t._op && t._op[y] && t.kill(w, t._op[y]), c && t._pt && (Ft = t, N.killTweensOf(w, F, t.globalTime(e)), H = !t.parent, Ft = 0), t._pt && h && (oi[x.id] = 1);
    }
    B && jr(t), t._onInit && t._onInit(t);
  }
  t._onUpdate = f, t._initted = (!t._op || t._pt) && !H, k && e <= 0 && p.render(Ct, !0, !0);
}, _n = function(t, e, i, r, n, a, s, h) {
  var f = (t._pt && t._ptCache || (t._ptCache = {}))[e], l, g, k, S;
  if (!f)
    for (f = t._ptCache[e] = [], k = t._ptLookup, S = t._targets.length; S--; ) {
      if (l = k[S][e], l && l.d && l.d._pt)
        for (l = l.d._pt; l && l.p !== e && l.fp !== e; )
          l = l._next;
      if (!l)
        return Ai = 1, t.vars[e] = "+=0", Oi(t, s), Ai = 0, h ? Ie(e + " not eligible for reset") : 1;
      f.push(l);
    }
  for (S = f.length; S--; )
    g = f[S], l = g._pt || g, l.s = (r || r === 0) && !n ? r : l.s + (r || 0) + a * l.c, l.c = i - l.s, g.e && (g.e = z(i) + _(g.e)), g.b && (g.b = l.s + _(g.b));
}, $n = function(t, e) {
  var i = t[0] ? zt(t[0]).harness : 0, r = i && i.aliases, n, a, s, h;
  if (!r)
    return e;
  n = oe({}, e);
  for (a in r)
    if (a in n)
      for (h = r[a].split(","), s = h.length; s--; )
        n[h[s]] = n[a];
  return n;
}, ta = function(t, e, i, r) {
  var n = e.ease || r || "power1.inOut", a, s;
  if ($(e))
    s = i[t] || (i[t] = []), e.forEach(function(h, f) {
      return s.push({
        t: f / (e.length - 1) * 100,
        v: h,
        e: n
      });
    });
  else
    for (a in e)
      s = i[a] || (i[a] = []), a === "ease" || s.push({
        t: parseFloat(t),
        v: e[a],
        e: n
      });
}, pe = function(t, e, i, r, n) {
  return b(t) ? t.call(e, i, r, n) : j(t) && ~t.indexOf("random(") ? Je(t) : t;
}, Yr = Bi + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert", br = {};
nt(Yr + ",id,stagger,delay,duration,paused,scrollTrigger", function(o) {
  return br[o] = 1;
});
var Z = /* @__PURE__ */ (function(o) {
  ur(t, o);
  function t(i, r, n, a) {
    var s;
    typeof r == "number" && (n.duration = r, r = n, n = null), s = o.call(this, a ? r : Se(r)) || this;
    var h = s.vars, f = h.duration, l = h.delay, g = h.immediateRender, k = h.stagger, S = h.overwrite, I = h.keyframes, A = h.defaults, J = h.scrollTrigger, u = h.yoyoEase, C = r.parent || N, c = ($(i) || Ar(i) ? Kt(i[0]) : "length" in r) ? [i] : Jt(i), p, d, y, m, Q, w, B, x;
    if (s._targets = c.length ? Di(c) : Ie("GSAP target " + i + " not found. https://gsap.com", !kt.nullTargetWarn) || [], s._ptLookup = [], s._overwrite = S, I || k || ve(f) || ve(l)) {
      if (r = s.vars, p = s.timeline = new et({
        data: "nested",
        defaults: A || {},
        targets: C && C.data === "nested" ? C.vars.targets : c
      }), p.kill(), p.parent = p._dp = xt(s), p._start = 0, k || ve(f) || ve(l)) {
        if (m = c.length, B = k && Or(k), Dt(k))
          for (Q in k)
            ~Yr.indexOf(Q) && (x || (x = {}), x[Q] = k[Q]);
        for (d = 0; d < m; d++)
          y = Te(r, br), y.stagger = 0, u && (y.yoyoEase = u), x && oe(y, x), w = c[d], y.duration = +pe(f, xt(s), d, w, c), y.delay = (+pe(l, xt(s), d, w, c) || 0) - s._delay, !k && m === 1 && y.delay && (s._delay = l = y.delay, s._start += l, y.delay = 0), p.to(w, y, B ? B(d, w, c) : 0), p._ease = K.none;
        p.duration() ? f = l = 0 : s.timeline = 0;
      } else if (I) {
        Se(St(p.vars.defaults, {
          ease: "none"
        })), p._ease = jt(I.ease || r.ease || "none");
        var D = 0, O, F, P;
        if ($(I))
          I.forEach(function(U) {
            return p.to(c, U, ">");
          }), p.duration();
        else {
          y = {};
          for (Q in I)
            Q === "ease" || Q === "easeEach" || ta(Q, I[Q], y, I.easeEach);
          for (Q in y)
            for (O = y[Q].sort(function(U, H) {
              return U.t - H.t;
            }), D = 0, d = 0; d < O.length; d++)
              F = O[d], P = {
                ease: F.e,
                duration: (F.t - (d ? O[d - 1].t : 0)) / 100 * f
              }, P[Q] = F.v, p.to(c, P, D), D += P.duration;
          p.duration() < f && p.to({}, {
            duration: f - p.duration()
          });
        }
      }
      f || s.duration(f = p.duration());
    } else
      s.timeline = 0;
    return S === !0 && !Ci && (Ft = xt(s), N.killTweensOf(c), Ft = 0), Qt(C, xt(s), n), r.reversed && s.reverse(), r.paused && s.paused(!0), (g || !f && !I && s._start === W(C._time) && rt(g) && Kn(xt(s)) && C.data !== "nested") && (s._tTime = -T, s.render(Math.max(0, -l) || 0)), J && Br(xt(s), J), s;
  }
  var e = t.prototype;
  return e.render = function(r, n, a) {
    var s = this._time, h = this._tDur, f = this._dur, l = r < 0, g = r > h - T && !l ? h : r < T ? 0 : r, k, S, I, A, J, u, C, c, p;
    if (!f)
      Pn(this, r, n, a);
    else if (g !== this._tTime || !r || a || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== l || this._lazy) {
      if (k = g, c = this.timeline, this._repeat) {
        if (A = f + this._rDelay, this._repeat < -1 && l)
          return this.totalTime(A * 100 + r, n, a);
        if (k = W(g % A), g === h ? (I = this._repeat, k = f) : (J = W(g / A), I = ~~J, I && I === J ? (k = f, I--) : k > f && (k = f)), u = this._yoyo && I & 1, u && (p = this._yEase, k = f - k), J = he(this._tTime, A), k === s && !a && this._initted && I === J)
          return this._tTime = g, this;
        I !== J && (c && this._yEase && Nr(c, u), this.vars.repeatRefresh && !u && !this._lock && k !== A && this._initted && (this._lock = a = 1, this.render(W(A * I), !0).invalidate()._lock = 0));
      }
      if (!this._initted) {
        if (Dr(this, l ? r : k, a, n, g))
          return this._tTime = 0, this;
        if (s !== this._time && !(a && this.vars.repeatRefresh && I !== J))
          return this;
        if (f !== this._dur)
          return this.render(r, n, a);
      }
      if (this._tTime = g, this._time = k, !this._act && this._ts && (this._act = 1, this._lazy = 0), this.ratio = C = (p || this._ease)(k / f), this._from && (this.ratio = C = 1 - C), !s && g && !n && !J && (gt(this, "onStart"), this._tTime !== g))
        return this;
      for (S = this._pt; S; )
        S.r(C, S.d), S = S._next;
      c && c.render(r < 0 ? r : c._dur * c._ease(k / this._dur), n, a) || this._startAt && (this._zTime = r), this._onUpdate && !n && (l && hi(this, r, n, a), gt(this, "onUpdate")), this._repeat && I !== J && this.vars.onRepeat && !n && this.parent && gt(this, "onRepeat"), (g === this._tDur || !g) && this._tTime === g && (l && !this._onUpdate && hi(this, r, !0, !0), (r || !f) && (g === this._tDur && this._ts > 0 || !g && this._ts < 0) && Lt(this, 1), !n && !(l && !s) && (g || s || u) && (gt(this, g === h ? "onComplete" : "onReverseComplete", !0), this._prom && !(g < h && this.timeScale() > 0) && this._prom()));
    }
    return this;
  }, e.targets = function() {
    return this._targets;
  }, e.invalidate = function(r) {
    return (!r || !this.vars.runBackwards) && (this._startAt = 0), this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(r), o.prototype.invalidate.call(this, r);
  }, e.resetTo = function(r, n, a, s, h) {
    ye || ut.wake(), this._ts || this.play();
    var f = Math.min(this._dur, (this._dp._time - this._start) * this._ts), l;
    return this._initted || Oi(this, f), l = this._ease(f / this._dur), _n(this, r, n, a, s, l, f, h) ? this.resetTo(r, n, a, s, 1) : (Ye(this, 0), this.parent || mr(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0), this.render(0));
  }, e.kill = function(r, n) {
    if (n === void 0 && (n = "all"), !r && (!n || n === "all"))
      return this._lazy = this._pt = 0, this.parent ? Ae(this) : this.scrollTrigger && this.scrollTrigger.kill(!!X), this;
    if (this.timeline) {
      var a = this.timeline.totalDuration();
      return this.timeline.killTweensOf(r, n, Ft && Ft.vars.overwrite !== !0)._first || Ae(this), this.parent && a !== this.timeline.totalDuration() && le(this, this._dur * this.timeline._tDur / a, 0, 1), this;
    }
    var s = this._targets, h = r ? Jt(r) : s, f = this._ptLookup, l = this._pt, g, k, S, I, A, J, u;
    if ((!n || n === "all") && xn(s, h))
      return n === "all" && (this._pt = 0), Ae(this);
    for (g = this._op = this._op || [], n !== "all" && (j(n) && (A = {}, nt(n, function(C) {
      return A[C] = 1;
    }), n = A), n = $n(s, n)), u = s.length; u--; )
      if (~h.indexOf(s[u])) {
        k = f[u], n === "all" ? (g[u] = n, I = k, S = {}) : (S = g[u] = g[u] || {}, I = n);
        for (A in I)
          J = k && k[A], J && ((!("kill" in J.d) || J.d.kill(A) === !0) && Ve(this, J, "_pt"), delete k[A]), S !== "all" && (S[A] = 1);
      }
    return this._initted && !this._pt && l && Ae(this), this;
  }, t.to = function(r, n) {
    return new t(r, n, arguments[2]);
  }, t.from = function(r, n) {
    return de(1, arguments);
  }, t.delayedCall = function(r, n, a, s) {
    return new t(n, 0, {
      immediateRender: !1,
      lazy: !1,
      overwrite: !1,
      delay: r,
      onComplete: n,
      onReverseComplete: n,
      onCompleteParams: a,
      onReverseCompleteParams: a,
      callbackScope: s
    });
  }, t.fromTo = function(r, n, a) {
    return de(2, arguments);
  }, t.set = function(r, n) {
    return n.duration = 0, n.repeatDelay || (n.repeat = 0), new t(r, n);
  }, t.killTweensOf = function(r, n, a) {
    return N.killTweensOf(r, n, a);
  }, t;
})(we);
St(Z.prototype, {
  _targets: [],
  _lazy: 0,
  _startAt: 0,
  _op: 0,
  _onInit: 0
});
nt("staggerTo,staggerFrom,staggerFromTo", function(o) {
  Z[o] = function() {
    var t = new et(), e = fi.call(arguments, 0);
    return e.splice(o === "staggerFromTo" ? 5 : 4, 0, 0), t[o].apply(t, e);
  };
});
var Ki = function(t, e, i) {
  return t[e] = i;
}, Mr = function(t, e, i) {
  return t[e](i);
}, ea = function(t, e, i, r) {
  return t[e](r.fp, i);
}, ia = function(t, e, i) {
  return t.setAttribute(e, i);
}, Ui = function(t, e) {
  return b(t[e]) ? Mr : Ji(t[e]) && t.setAttribute ? ia : Ki;
}, zr = function(t, e) {
  return e.set(e.t, e.p, Math.round((e.s + e.c * t) * 1e6) / 1e6, e);
}, ra = function(t, e) {
  return e.set(e.t, e.p, !!(e.s + e.c * t), e);
}, Zr = function(t, e) {
  var i = e._pt, r = "";
  if (!t && e.b)
    r = e.b;
  else if (t === 1 && e.e)
    r = e.e;
  else {
    for (; i; )
      r = i.p + (i.m ? i.m(i.s + i.c * t) : Math.round((i.s + i.c * t) * 1e4) / 1e4) + r, i = i._next;
    r += e.c;
  }
  e.set(e.t, e.p, r, e);
}, Pi = function(t, e) {
  for (var i = e._pt; i; )
    i.r(t, i.d), i = i._next;
}, na = function(t, e, i, r) {
  for (var n = this._pt, a; n; )
    a = n._next, n.p === r && n.modifier(t, e, i), n = a;
}, aa = function(t) {
  for (var e = this._pt, i, r; e; )
    r = e._next, e.p === t && !e.op || e.op === t ? Ve(this, e, "_pt") : e.dep || (i = 1), e = r;
  return !i;
}, sa = function(t, e, i, r) {
  r.mSet(t, e, r.m.call(r.tween, i, r.mt), r);
}, jr = function(t) {
  for (var e = t._pt, i, r, n, a; e; ) {
    for (i = e._next, r = n; r && r.pr > e.pr; )
      r = r._next;
    (e._prev = r ? r._prev : a) ? e._prev._next = e : n = e, (e._next = r) ? r._prev = e : a = e, e = i;
  }
  t._pt = n;
}, at = /* @__PURE__ */ (function() {
  function o(e, i, r, n, a, s, h, f, l) {
    this.t = i, this.s = n, this.c = a, this.p = r, this.r = s || zr, this.d = h || this, this.set = f || Ki, this.pr = l || 0, this._next = e, e && (e._prev = this);
  }
  var t = o.prototype;
  return t.modifier = function(i, r, n) {
    this.mSet = this.mSet || this.set, this.set = sa, this.m = i, this.mt = n, this.tween = r;
  }, o;
})();
nt(Bi + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function(o) {
  return Qi[o] = 1;
});
ct.TweenMax = ct.TweenLite = Z;
ct.TimelineLite = ct.TimelineMax = et;
N = new et({
  sortChildren: !1,
  defaults: se,
  autoRemoveChildren: !0,
  id: "root",
  smoothChildTiming: !0
});
kt.stringFilter = Lr;
var Xt = [], Ke = {}, oa = [], Xi = 0, ha = 0, ei = function(t) {
  return (Ke[t] || oa).map(function(e) {
    return e();
  });
}, ki = function() {
  var t = Date.now(), e = [];
  t - Xi > 2 && (ei("matchMediaInit"), Xt.forEach(function(i) {
    var r = i.queries, n = i.conditions, a, s, h, f;
    for (s in r)
      a = mt.matchMedia(r[s]).matches, a && (h = 1), a !== n[s] && (n[s] = a, f = 1);
    f && (i.revert(), h && e.push(i));
  }), ei("matchMediaRevert"), e.forEach(function(i) {
    return i.onMatch(i, function(r) {
      return i.add(null, r);
    });
  }), Xi = t, ei("matchMedia"));
}, Xr = /* @__PURE__ */ (function() {
  function o(e, i) {
    this.selector = i && ui(i), this.data = [], this._r = [], this.isReverted = !1, this.id = ha++, e && this.add(e);
  }
  var t = o.prototype;
  return t.add = function(i, r, n) {
    b(i) && (n = r, r = i, i = b);
    var a = this, s = function() {
      var f = R, l = a.selector, g;
      return f && f !== a && f.data.push(a), n && (a.selector = ui(n)), R = a, g = r.apply(a, arguments), b(g) && a._r.push(g), R = f, a.selector = l, a.isReverted = !1, g;
    };
    return a.last = s, i === b ? s(a, function(h) {
      return a.add(null, h);
    }) : i ? a[i] = s : s;
  }, t.ignore = function(i) {
    var r = R;
    R = null, i(this), R = r;
  }, t.getTweens = function() {
    var i = [];
    return this.data.forEach(function(r) {
      return r instanceof o ? i.push.apply(i, r.getTweens()) : r instanceof Z && !(r.parent && r.parent.data === "nested") && i.push(r);
    }), i;
  }, t.clear = function() {
    this._r.length = this.data.length = 0;
  }, t.kill = function(i, r) {
    var n = this;
    if (i ? (function() {
      for (var s = n.getTweens(), h = n.data.length, f; h--; )
        f = n.data[h], f.data === "isFlip" && (f.revert(), f.getChildren(!0, !0, !1).forEach(function(l) {
          return s.splice(s.indexOf(l), 1);
        }));
      for (s.map(function(l) {
        return {
          g: l._dur || l._delay || l._sat && !l._sat.vars.immediateRender ? l.globalTime(0) : -1 / 0,
          t: l
        };
      }).sort(function(l, g) {
        return g.g - l.g || -1 / 0;
      }).forEach(function(l) {
        return l.t.revert(i);
      }), h = n.data.length; h--; )
        f = n.data[h], f instanceof et ? f.data !== "nested" && (f.scrollTrigger && f.scrollTrigger.revert(), f.kill()) : !(f instanceof Z) && f.revert && f.revert(i);
      n._r.forEach(function(l) {
        return l(i, n);
      }), n.isReverted = !0;
    })() : this.data.forEach(function(s) {
      return s.kill && s.kill();
    }), this.clear(), r)
      for (var a = Xt.length; a--; )
        Xt[a].id === this.id && Xt.splice(a, 1);
  }, t.revert = function(i) {
    this.kill(i || {});
  }, o;
})(), la = /* @__PURE__ */ (function() {
  function o(e) {
    this.contexts = [], this.scope = e, R && R.data.push(this);
  }
  var t = o.prototype;
  return t.add = function(i, r, n) {
    Dt(i) || (i = {
      matches: i
    });
    var a = new Xr(0, n || this.scope), s = a.conditions = {}, h, f, l;
    R && !a.selector && (a.selector = R.selector), this.contexts.push(a), r = a.add("onMatch", r), a.queries = i;
    for (f in i)
      f === "all" ? l = 1 : (h = mt.matchMedia(i[f]), h && (Xt.indexOf(a) < 0 && Xt.push(a), (s[f] = h.matches) && (l = 1), h.addListener ? h.addListener(ki) : h.addEventListener("change", ki)));
    return l && r(a, function(g) {
      return a.add(null, g);
    }), this;
  }, t.revert = function(i) {
    this.kill(i || {});
  }, t.kill = function(i) {
    this.contexts.forEach(function(r) {
      return r.kill(i, !0);
    });
  }, o;
})(), Le = {
  registerPlugin: function() {
    for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
      e[i] = arguments[i];
    e.forEach(function(r) {
      return Er(r);
    });
  },
  timeline: function(t) {
    return new et(t);
  },
  getTweensOf: function(t, e) {
    return N.getTweensOf(t, e);
  },
  getProperty: function(t, e, i, r) {
    j(t) && (t = Jt(t)[0]);
    var n = zt(t || {}).get, a = i ? wr : yr;
    return i === "native" && (i = ""), t && (e ? a((ft[e] && ft[e].get || n)(t, e, i, r)) : function(s, h, f) {
      return a((ft[s] && ft[s].get || n)(t, s, h, f));
    });
  },
  quickSetter: function(t, e, i) {
    if (t = Jt(t), t.length > 1) {
      var r = t.map(function(l) {
        return ot.quickSetter(l, e, i);
      }), n = r.length;
      return function(l) {
        for (var g = n; g--; )
          r[g](l);
      };
    }
    t = t[0] || {};
    var a = ft[e], s = zt(t), h = s.harness && (s.harness.aliases || {})[e] || e, f = a ? function(l) {
      var g = new a();
      ie._pt = 0, g.init(t, i ? l + i : l, ie, 0, [t]), g.render(1, g), ie._pt && Pi(1, ie);
    } : s.set(t, h);
    return a ? f : function(l) {
      return f(t, h, i ? l + i : l, s, 1);
    };
  },
  quickTo: function(t, e, i) {
    var r, n = ot.to(t, St((r = {}, r[e] = "+=0.1", r.paused = !0, r.stagger = 0, r), i || {})), a = function(h, f, l) {
      return n.resetTo(e, h, f, l);
    };
    return a.tween = n, a;
  },
  isTweening: function(t) {
    return N.getTweensOf(t, !0).length > 0;
  },
  defaults: function(t) {
    return t && t.ease && (t.ease = jt(t.ease, se.ease)), bi(se, t || {});
  },
  config: function(t) {
    return bi(kt, t || {});
  },
  registerEffect: function(t) {
    var e = t.name, i = t.effect, r = t.plugins, n = t.defaults, a = t.extendTimeline;
    (r || "").split(",").forEach(function(s) {
      return s && !ft[s] && !ct[s] && Ie(e + " effect requires " + s + " plugin.");
    }), Xe[e] = function(s, h, f) {
      return i(Jt(s), St(h || {}, n), f);
    }, a && (et.prototype[e] = function(s, h, f) {
      return this.add(Xe[e](s, Dt(h) ? h : (f = h) && {}, this), f);
    });
  },
  registerEase: function(t, e) {
    K[t] = jt(e);
  },
  parseEase: function(t, e) {
    return arguments.length ? jt(t, e) : K;
  },
  getById: function(t) {
    return N.getById(t);
  },
  exportRoot: function(t, e) {
    t === void 0 && (t = {});
    var i = new et(t), r, n;
    for (i.smoothChildTiming = rt(t.smoothChildTiming), N.remove(i), i._dp = 0, i._time = i._tTime = N._time, r = N._first; r; )
      n = r._next, (e || !(!r._dur && r instanceof Z && r.vars.onComplete === r._targets[0])) && Qt(i, r, r._start - r._delay), r = n;
    return Qt(N, i, 0), i;
  },
  context: function(t, e) {
    return t ? new Xr(t, e) : R;
  },
  matchMedia: function(t) {
    return new la(t);
  },
  matchMediaRefresh: function() {
    return Xt.forEach(function(t) {
      var e = t.conditions, i, r;
      for (r in e)
        e[r] && (e[r] = !1, i = 1);
      i && t.revert();
    }) || ki();
  },
  addEventListener: function(t, e) {
    var i = Ke[t] || (Ke[t] = []);
    ~i.indexOf(e) || i.push(e);
  },
  removeEventListener: function(t, e) {
    var i = Ke[t], r = i && i.indexOf(e);
    r >= 0 && i.splice(r, 1);
  },
  utils: {
    wrap: Nn,
    wrapYoyo: Gn,
    distribute: Or,
    random: Ur,
    snap: Kr,
    normalize: Wn,
    getUnit: _,
    clamp: En,
    splitColor: Tr,
    toArray: Jt,
    selector: ui,
    mapRange: Fr,
    pipe: Rn,
    unitize: Ln,
    interpolate: Vn,
    shuffle: xr
  },
  install: dr,
  effects: Xe,
  ticker: ut,
  updateRoot: et.updateRoot,
  plugins: ft,
  globalTimeline: N,
  core: {
    PropTween: at,
    globals: pr,
    Tween: Z,
    Timeline: et,
    Animation: we,
    getCache: zt,
    _removeLinkedListItem: Ve,
    reverting: function() {
      return X;
    },
    context: function(t) {
      return t && R && (R.data.push(t), t._ctx = R), R;
    },
    suppressOverwrites: function(t) {
      return Ci = t;
    }
  }
};
nt("to,from,fromTo,delayedCall,set,killTweensOf", function(o) {
  return Le[o] = Z[o];
});
ut.add(et.updateRoot);
ie = Le.to({}, {
  duration: 0
});
var fa = function(t, e) {
  for (var i = t._pt; i && i.p !== e && i.op !== e && i.fp !== e; )
    i = i._next;
  return i;
}, ua = function(t, e) {
  var i = t._targets, r, n, a;
  for (r in e)
    for (n = i.length; n--; )
      a = t._ptLookup[n][r], a && (a = a.d) && (a._pt && (a = fa(a, r)), a && a.modifier && a.modifier(e[r], t, i[n], r));
}, ii = function(t, e) {
  return {
    name: t,
    headless: 1,
    rawVars: 1,
    //don't pre-process function-based values or "random()" strings.
    init: function(r, n, a) {
      a._onInit = function(s) {
        var h, f;
        if (j(n) && (h = {}, nt(n, function(l) {
          return h[l] = 1;
        }), n = h), e) {
          h = {};
          for (f in n)
            h[f] = e(n[f]);
          n = h;
        }
        ua(s, n);
      };
    }
  };
}, ot = Le.registerPlugin({
  name: "attr",
  init: function(t, e, i, r, n) {
    var a, s, h;
    this.tween = i;
    for (a in e)
      h = t.getAttribute(a) || "", s = this.add(t, "setAttribute", (h || 0) + "", e[a], r, n, 0, 0, a), s.op = a, s.b = h, this._props.push(a);
  },
  render: function(t, e) {
    for (var i = e._pt; i; )
      X ? i.set(i.t, i.p, i.b, i) : i.r(t, i.d), i = i._next;
  }
}, {
  name: "endArray",
  headless: 1,
  init: function(t, e) {
    for (var i = e.length; i--; )
      this.add(t, i, t[i] || 0, e[i], 0, 0, 0, 0, 0, 1);
  }
}, ii("roundProps", gi), ii("modifiers"), ii("snap", Kr)) || Le;
Z.version = et.version = ot.version = "3.14.2";
Sr = 1;
yi() && fe();
K.Power0;
var ga = K.Power1;
K.Power2;
K.Power3;
K.Power4;
K.Linear;
K.Quad;
K.Cubic;
K.Quart;
K.Quint;
K.Strong;
K.Elastic;
K.Back;
K.SteppedEase;
K.Bounce;
K.Sine;
K.Expo;
K.Circ;
/*!
 * CSSPlugin 3.14.2
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/
var _i, Ht, ne, Fi, Mt, $i, Hi, Aa = function() {
  return typeof window < "u";
}, Ut = {}, bt = 180 / Math.PI, ae = Math.PI / 180, te = Math.atan2, tr = 1e8, Ei = /([A-Z])/g, ka = /(left|right|width|margin|padding|x)/i, ca = /[\s,\(]\S/, Bt = {
  autoAlpha: "opacity,visibility",
  scale: "scaleX,scaleY",
  alpha: "opacity"
}, ci = function(t, e) {
  return e.set(e.t, e.p, Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u, e);
}, Sa = function(t, e) {
  return e.set(e.t, e.p, t === 1 ? e.e : Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u, e);
}, da = function(t, e) {
  return e.set(e.t, e.p, t ? Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u : e.b, e);
}, pa = function(t, e) {
  return e.set(e.t, e.p, t === 1 ? e.e : t ? Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u : e.b, e);
}, Ia = function(t, e) {
  var i = e.s + e.c * t;
  e.set(e.t, e.p, ~~(i + (i < 0 ? -0.5 : 0.5)) + e.u, e);
}, _r = function(t, e) {
  return e.set(e.t, e.p, t ? e.e : e.b, e);
}, $r = function(t, e) {
  return e.set(e.t, e.p, t !== 1 ? e.b : e.e, e);
}, Ca = function(t, e, i) {
  return t.style[e] = i;
}, Ja = function(t, e, i) {
  return t.style.setProperty(e, i);
}, ya = function(t, e, i) {
  return t._gsap[e] = i;
}, wa = function(t, e, i) {
  return t._gsap.scaleX = t._gsap.scaleY = i;
}, ma = function(t, e, i, r, n) {
  var a = t._gsap;
  a.scaleX = a.scaleY = i, a.renderTransform(n, a);
}, Qa = function(t, e, i, r, n) {
  var a = t._gsap;
  a[e] = i, a.renderTransform(n, a);
}, G = "transform", st = G + "Origin", Ba = function o(t, e) {
  var i = this, r = this.target, n = r.style, a = r._gsap;
  if (t in Ut && n) {
    if (this.tfm = this.tfm || {}, t !== "transform")
      t = Bt[t] || t, ~t.indexOf(",") ? t.split(",").forEach(function(s) {
        return i.tfm[s] = Ot(r, s);
      }) : this.tfm[t] = a.x ? a[t] : Ot(r, t), t === st && (this.tfm.zOrigin = a.zOrigin);
    else
      return Bt.transform.split(",").forEach(function(s) {
        return o.call(i, s, e);
      });
    if (this.props.indexOf(G) >= 0)
      return;
    a.svg && (this.svgo = r.getAttribute("data-svg-origin"), this.props.push(st, e, "")), t = G;
  }
  (n || e) && this.props.push(t, e, n[t]);
}, tn = function(t) {
  t.translate && (t.removeProperty("translate"), t.removeProperty("scale"), t.removeProperty("rotate"));
}, Da = function() {
  var t = this.props, e = this.target, i = e.style, r = e._gsap, n, a;
  for (n = 0; n < t.length; n += 3)
    t[n + 1] ? t[n + 1] === 2 ? e[t[n]](t[n + 2]) : e[t[n]] = t[n + 2] : t[n + 2] ? i[t[n]] = t[n + 2] : i.removeProperty(t[n].substr(0, 2) === "--" ? t[n] : t[n].replace(Ei, "-$1").toLowerCase());
  if (this.tfm) {
    for (a in this.tfm)
      r[a] = this.tfm[a];
    r.svg && (r.renderTransform(), e.setAttribute("data-svg-origin", this.svgo || "")), n = Hi(), (!n || !n.isStart) && !i[G] && (tn(i), r.zOrigin && i[st] && (i[st] += " " + r.zOrigin + "px", r.zOrigin = 0, r.renderTransform()), r.uncache = 1);
  }
}, en = function(t, e) {
  var i = {
    target: t,
    props: [],
    revert: Da,
    save: Ba
  };
  return t._gsap || ot.core.getCache(t), e && t.style && t.nodeType && e.split(",").forEach(function(r) {
    return i.save(r);
  }), i;
}, rn, Si = function(t, e) {
  var i = Ht.createElementNS ? Ht.createElementNS((e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), t) : Ht.createElement(t);
  return i && i.style ? i : Ht.createElement(t);
}, At = function o(t, e, i) {
  var r = getComputedStyle(t);
  return r[e] || r.getPropertyValue(e.replace(Ei, "-$1").toLowerCase()) || r.getPropertyValue(e) || !i && o(t, ue(e) || e, 1) || "";
}, er = "O,Moz,ms,Ms,Webkit".split(","), ue = function(t, e, i) {
  var r = e || Mt, n = r.style, a = 5;
  if (t in n && !i)
    return t;
  for (t = t.charAt(0).toUpperCase() + t.substr(1); a-- && !(er[a] + t in n); )
    ;
  return a < 0 ? null : (a === 3 ? "ms" : a >= 0 ? er[a] : "") + t;
}, di = function() {
  Aa() && window.document && (_i = window, Ht = _i.document, ne = Ht.documentElement, Mt = Si("div") || {
    style: {}
  }, Si("div"), G = ue(G), st = G + "Origin", Mt.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", rn = !!ue("perspective"), Hi = ot.core.reverting, Fi = 1);
}, ir = function(t) {
  var e = t.ownerSVGElement, i = Si("svg", e && e.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), r = t.cloneNode(!0), n;
  r.style.display = "block", i.appendChild(r), ne.appendChild(i);
  try {
    n = r.getBBox();
  } catch {
  }
  return i.removeChild(r), ne.removeChild(i), n;
}, rr = function(t, e) {
  for (var i = e.length; i--; )
    if (t.hasAttribute(e[i]))
      return t.getAttribute(e[i]);
}, nn = function(t) {
  var e, i;
  try {
    e = t.getBBox();
  } catch {
    e = ir(t), i = 1;
  }
  return e && (e.width || e.height) || i || (e = ir(t)), e && !e.width && !e.x && !e.y ? {
    x: +rr(t, ["x", "cx", "x1"]) || 0,
    y: +rr(t, ["y", "cy", "y1"]) || 0,
    width: 0,
    height: 0
  } : e;
}, an = function(t) {
  return !!(t.getCTM && (!t.parentNode || t.ownerSVGElement) && nn(t));
}, Wt = function(t, e) {
  if (e) {
    var i = t.style, r;
    e in Ut && e !== st && (e = G), i.removeProperty ? (r = e.substr(0, 2), (r === "ms" || e.substr(0, 6) === "webkit") && (e = "-" + e), i.removeProperty(r === "--" ? e : e.replace(Ei, "-$1").toLowerCase())) : i.removeAttribute(e);
  }
}, Et = function(t, e, i, r, n, a) {
  var s = new at(t._pt, e, i, 0, 1, a ? $r : _r);
  return t._pt = s, s.b = r, s.e = n, t._props.push(i), s;
}, nr = {
  deg: 1,
  rad: 1,
  turn: 1
}, va = {
  grid: 1,
  flex: 1
}, Nt = function o(t, e, i, r) {
  var n = parseFloat(i) || 0, a = (i + "").trim().substr((n + "").length) || "px", s = Mt.style, h = ka.test(e), f = t.tagName.toLowerCase() === "svg", l = (f ? "client" : "offset") + (h ? "Width" : "Height"), g = 100, k = r === "px", S = r === "%", I, A, J, u;
  if (r === a || !n || nr[r] || nr[a])
    return n;
  if (a !== "px" && !k && (n = o(t, e, i, "px")), u = t.getCTM && an(t), (S || a === "%") && (Ut[e] || ~e.indexOf("adius")))
    return I = u ? t.getBBox()[h ? "width" : "height"] : t[l], z(S ? n / I * g : n / 100 * I);
  if (s[h ? "width" : "height"] = g + (k ? a : r), A = r !== "rem" && ~e.indexOf("adius") || r === "em" && t.appendChild && !f ? t : t.parentNode, u && (A = (t.ownerSVGElement || {}).parentNode), (!A || A === Ht || !A.appendChild) && (A = Ht.body), J = A._gsap, J && S && J.width && h && J.time === ut.time && !J.uncache)
    return z(n / J.width * g);
  if (S && (e === "height" || e === "width")) {
    var C = t.style[e];
    t.style[e] = g + r, I = t[l], C ? t.style[e] = C : Wt(t, e);
  } else
    (S || a === "%") && !va[At(A, "display")] && (s.position = At(t, "position")), A === t && (s.position = "static"), A.appendChild(Mt), I = Mt[l], A.removeChild(Mt), s.position = "absolute";
  return h && S && (J = zt(A), J.time = ut.time, J.width = A[l]), z(k ? I * n / g : I && n ? g / I * n : 0);
}, Ot = function(t, e, i, r) {
  var n;
  return Fi || di(), e in Bt && e !== "transform" && (e = Bt[e], ~e.indexOf(",") && (e = e.split(",")[0])), Ut[e] && e !== "transform" ? (n = Qe(t, r), n = e !== "transformOrigin" ? n[e] : n.svg ? n.origin : Ne(At(t, st)) + " " + n.zOrigin + "px") : (n = t.style[e], (!n || n === "auto" || r || ~(n + "").indexOf("calc(")) && (n = We[e] && We[e](t, e, i) || At(t, e) || Cr(t, e) || (e === "opacity" ? 1 : 0))), i && !~(n + "").trim().indexOf(" ") ? Nt(t, e, n, i) + i : n;
}, xa = function(t, e, i, r) {
  if (!i || i === "none") {
    var n = ue(e, t, 1), a = n && At(t, n, 1);
    a && a !== i ? (e = n, i = a) : e === "borderColor" && (i = At(t, "borderTopColor"));
  }
  var s = new at(this._pt, t.style, e, 0, 1, Zr), h = 0, f = 0, l, g, k, S, I, A, J, u, C, c, p, d;
  if (s.b = i, s.e = r, i += "", r += "", r.substring(0, 6) === "var(--" && (r = At(t, r.substring(4, r.indexOf(")")))), r === "auto" && (A = t.style[e], t.style[e] = r, r = At(t, e) || r, A ? t.style[e] = A : Wt(t, e)), l = [i, r], Lr(l), i = l[0], r = l[1], k = i.match(ee) || [], d = r.match(ee) || [], d.length) {
    for (; g = ee.exec(r); )
      J = g[0], C = r.substring(h, g.index), I ? I = (I + 1) % 5 : (C.substr(-5) === "rgba(" || C.substr(-5) === "hsla(") && (I = 1), J !== (A = k[f++] || "") && (S = parseFloat(A) || 0, p = A.substr((S + "").length), J.charAt(1) === "=" && (J = re(S, J) + p), u = parseFloat(J), c = J.substr((u + "").length), h = ee.lastIndex - c.length, c || (c = c || kt.units[e] || p, h === r.length && (r += c, s.e += c)), p !== c && (S = Nt(t, e, A, c) || 0), s._pt = {
        _next: s._pt,
        p: C || f === 1 ? C : ",",
        //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
        s: S,
        c: u - S,
        m: I && I < 4 || e === "zIndex" ? Math.round : 0
      });
    s.c = h < r.length ? r.substring(h, r.length) : "";
  } else
    s.r = e === "display" && r === "none" ? $r : _r;
  return cr.test(r) && (s.e = 0), this._pt = s, s;
}, ar = {
  top: "0%",
  bottom: "100%",
  left: "0%",
  right: "100%",
  center: "50%"
}, Oa = function(t) {
  var e = t.split(" "), i = e[0], r = e[1] || "50%";
  return (i === "top" || i === "bottom" || r === "left" || r === "right") && (t = i, i = r, r = t), e[0] = ar[i] || i, e[1] = ar[r] || r, e.join(" ");
}, Ka = function(t, e) {
  if (e.tween && e.tween._time === e.tween._dur) {
    var i = e.t, r = i.style, n = e.u, a = i._gsap, s, h, f;
    if (n === "all" || n === !0)
      r.cssText = "", h = 1;
    else
      for (n = n.split(","), f = n.length; --f > -1; )
        s = n[f], Ut[s] && (h = 1, s = s === "transformOrigin" ? st : G), Wt(i, s);
    h && (Wt(i, G), a && (a.svg && i.removeAttribute("transform"), r.scale = r.rotate = r.translate = "none", Qe(i, 1), a.uncache = 1, tn(r)));
  }
}, We = {
  clearProps: function(t, e, i, r, n) {
    if (n.data !== "isFromStart") {
      var a = t._pt = new at(t._pt, e, i, 0, 0, Ka);
      return a.u = r, a.pr = -10, a.tween = n, t._props.push(i), 1;
    }
  }
  /* className feature (about 0.4kb gzipped).
  , className(plugin, target, property, endValue, tween) {
  	let _renderClassName = (ratio, data) => {
  			data.css.render(ratio, data.css);
  			if (!ratio || ratio === 1) {
  				let inline = data.rmv,
  					target = data.t,
  					p;
  				target.setAttribute("class", ratio ? data.e : data.b);
  				for (p in inline) {
  					_removeProperty(target, p);
  				}
  			}
  		},
  		_getAllStyles = (target) => {
  			let styles = {},
  				computed = getComputedStyle(target),
  				p;
  			for (p in computed) {
  				if (isNaN(p) && p !== "cssText" && p !== "length") {
  					styles[p] = computed[p];
  				}
  			}
  			_setDefaults(styles, _parseTransform(target, 1));
  			return styles;
  		},
  		startClassList = target.getAttribute("class"),
  		style = target.style,
  		cssText = style.cssText,
  		cache = target._gsap,
  		classPT = cache.classPT,
  		inlineToRemoveAtEnd = {},
  		data = {t:target, plugin:plugin, rmv:inlineToRemoveAtEnd, b:startClassList, e:(endValue.charAt(1) !== "=") ? endValue : startClassList.replace(new RegExp("(?:\\s|^)" + endValue.substr(2) + "(?![\\w-])"), "") + ((endValue.charAt(0) === "+") ? " " + endValue.substr(2) : "")},
  		changingVars = {},
  		startVars = _getAllStyles(target),
  		transformRelated = /(transform|perspective)/i,
  		endVars, p;
  	if (classPT) {
  		classPT.r(1, classPT.d);
  		_removeLinkedListItem(classPT.d.plugin, classPT, "_pt");
  	}
  	target.setAttribute("class", data.e);
  	endVars = _getAllStyles(target, true);
  	target.setAttribute("class", startClassList);
  	for (p in endVars) {
  		if (endVars[p] !== startVars[p] && !transformRelated.test(p)) {
  			changingVars[p] = endVars[p];
  			if (!style[p] && style[p] !== "0") {
  				inlineToRemoveAtEnd[p] = 1;
  			}
  		}
  	}
  	cache.classPT = plugin._pt = new PropTween(plugin._pt, target, "className", 0, 0, _renderClassName, data, 0, -11);
  	if (style.cssText !== cssText) { //only apply if things change. Otherwise, in cases like a background-image that's pulled dynamically, it could cause a refresh. See https://gsap.com/forums/topic/20368-possible-gsap-bug-switching-classnames-in-chrome/.
  		style.cssText = cssText; //we recorded cssText before we swapped classes and ran _getAllStyles() because in cases when a className tween is overwritten, we remove all the related tweening properties from that class change (otherwise class-specific stuff can't override properties we've directly set on the target's style object due to specificity).
  	}
  	_parseTransform(target, true); //to clear the caching of transforms
  	data.css = new gsap.plugins.css();
  	data.css.init(target, changingVars, tween);
  	plugin._props.push(...data.css._props);
  	return 1;
  }
  */
}, me = [1, 0, 0, 1, 0, 0], sn = {}, on = function(t) {
  return t === "matrix(1, 0, 0, 1, 0, 0)" || t === "none" || !t;
}, sr = function(t) {
  var e = At(t, G);
  return on(e) ? me : e.substr(7).match(kr).map(z);
}, Ti = function(t, e) {
  var i = t._gsap || zt(t), r = t.style, n = sr(t), a, s, h, f;
  return i.svg && t.getAttribute("transform") ? (h = t.transform.baseVal.consolidate().matrix, n = [h.a, h.b, h.c, h.d, h.e, h.f], n.join(",") === "1,0,0,1,0,0" ? me : n) : (n === me && !t.offsetParent && t !== ne && !i.svg && (h = r.display, r.display = "block", a = t.parentNode, (!a || !t.offsetParent && !t.getBoundingClientRect().width) && (f = 1, s = t.nextElementSibling, ne.appendChild(t)), n = sr(t), h ? r.display = h : Wt(t, "display"), f && (s ? a.insertBefore(t, s) : a ? a.appendChild(t) : ne.removeChild(t))), e && n.length > 6 ? [n[0], n[1], n[4], n[5], n[12], n[13]] : n);
}, pi = function(t, e, i, r, n, a) {
  var s = t._gsap, h = n || Ti(t, !0), f = s.xOrigin || 0, l = s.yOrigin || 0, g = s.xOffset || 0, k = s.yOffset || 0, S = h[0], I = h[1], A = h[2], J = h[3], u = h[4], C = h[5], c = e.split(" "), p = parseFloat(c[0]) || 0, d = parseFloat(c[1]) || 0, y, m, Q, w;
  i ? h !== me && (m = S * J - I * A) && (Q = p * (J / m) + d * (-A / m) + (A * C - J * u) / m, w = p * (-I / m) + d * (S / m) - (S * C - I * u) / m, p = Q, d = w) : (y = nn(t), p = y.x + (~c[0].indexOf("%") ? p / 100 * y.width : p), d = y.y + (~(c[1] || c[0]).indexOf("%") ? d / 100 * y.height : d)), r || r !== !1 && s.smooth ? (u = p - f, C = d - l, s.xOffset = g + (u * S + C * A) - u, s.yOffset = k + (u * I + C * J) - C) : s.xOffset = s.yOffset = 0, s.xOrigin = p, s.yOrigin = d, s.smooth = !!r, s.origin = e, s.originIsAbsolute = !!i, t.style[st] = "0px 0px", a && (Et(a, s, "xOrigin", f, p), Et(a, s, "yOrigin", l, d), Et(a, s, "xOffset", g, s.xOffset), Et(a, s, "yOffset", k, s.yOffset)), t.setAttribute("data-svg-origin", p + " " + d);
}, Qe = function(t, e) {
  var i = t._gsap || new Vr(t);
  if ("x" in i && !e && !i.uncache)
    return i;
  var r = t.style, n = i.scaleX < 0, a = "px", s = "deg", h = getComputedStyle(t), f = At(t, st) || "0", l, g, k, S, I, A, J, u, C, c, p, d, y, m, Q, w, B, x, D, O, F, P, U, H, M, dt, yt, ht, tt, lt, it, pt;
  return l = g = k = A = J = u = C = c = p = 0, S = I = 1, i.svg = !!(t.getCTM && an(t)), h.translate && ((h.translate !== "none" || h.scale !== "none" || h.rotate !== "none") && (r[G] = (h.translate !== "none" ? "translate3d(" + (h.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + (h.rotate !== "none" ? "rotate(" + h.rotate + ") " : "") + (h.scale !== "none" ? "scale(" + h.scale.split(" ").join(",") + ") " : "") + (h[G] !== "none" ? h[G] : "")), r.scale = r.rotate = r.translate = "none"), m = Ti(t, i.svg), i.svg && (i.uncache ? (M = t.getBBox(), f = i.xOrigin - M.x + "px " + (i.yOrigin - M.y) + "px", H = "") : H = !e && t.getAttribute("data-svg-origin"), pi(t, H || f, !!H || i.originIsAbsolute, i.smooth !== !1, m)), d = i.xOrigin || 0, y = i.yOrigin || 0, m !== me && (x = m[0], D = m[1], O = m[2], F = m[3], l = P = m[4], g = U = m[5], m.length === 6 ? (S = Math.sqrt(x * x + D * D), I = Math.sqrt(F * F + O * O), A = x || D ? te(D, x) * bt : 0, C = O || F ? te(O, F) * bt + A : 0, C && (I *= Math.abs(Math.cos(C * ae))), i.svg && (l -= d - (d * x + y * O), g -= y - (d * D + y * F))) : (pt = m[6], lt = m[7], yt = m[8], ht = m[9], tt = m[10], it = m[11], l = m[12], g = m[13], k = m[14], Q = te(pt, tt), J = Q * bt, Q && (w = Math.cos(-Q), B = Math.sin(-Q), H = P * w + yt * B, M = U * w + ht * B, dt = pt * w + tt * B, yt = P * -B + yt * w, ht = U * -B + ht * w, tt = pt * -B + tt * w, it = lt * -B + it * w, P = H, U = M, pt = dt), Q = te(-O, tt), u = Q * bt, Q && (w = Math.cos(-Q), B = Math.sin(-Q), H = x * w - yt * B, M = D * w - ht * B, dt = O * w - tt * B, it = F * B + it * w, x = H, D = M, O = dt), Q = te(D, x), A = Q * bt, Q && (w = Math.cos(Q), B = Math.sin(Q), H = x * w + D * B, M = P * w + U * B, D = D * w - x * B, U = U * w - P * B, x = H, P = M), J && Math.abs(J) + Math.abs(A) > 359.9 && (J = A = 0, u = 180 - u), S = z(Math.sqrt(x * x + D * D + O * O)), I = z(Math.sqrt(U * U + pt * pt)), Q = te(P, U), C = Math.abs(Q) > 2e-4 ? Q * bt : 0, p = it ? 1 / (it < 0 ? -it : it) : 0), i.svg && (H = t.getAttribute("transform"), i.forceCSS = t.setAttribute("transform", "") || !on(At(t, G)), H && t.setAttribute("transform", H))), Math.abs(C) > 90 && Math.abs(C) < 270 && (n ? (S *= -1, C += A <= 0 ? 180 : -180, A += A <= 0 ? 180 : -180) : (I *= -1, C += C <= 0 ? 180 : -180)), e = e || i.uncache, i.x = l - ((i.xPercent = l && (!e && i.xPercent || (Math.round(t.offsetWidth / 2) === Math.round(-l) ? -50 : 0))) ? t.offsetWidth * i.xPercent / 100 : 0) + a, i.y = g - ((i.yPercent = g && (!e && i.yPercent || (Math.round(t.offsetHeight / 2) === Math.round(-g) ? -50 : 0))) ? t.offsetHeight * i.yPercent / 100 : 0) + a, i.z = k + a, i.scaleX = z(S), i.scaleY = z(I), i.rotation = z(A) + s, i.rotationX = z(J) + s, i.rotationY = z(u) + s, i.skewX = C + s, i.skewY = c + s, i.transformPerspective = p + a, (i.zOrigin = parseFloat(f.split(" ")[2]) || !e && i.zOrigin || 0) && (r[st] = Ne(f)), i.xOffset = i.yOffset = 0, i.force3D = kt.force3D, i.renderTransform = i.svg ? Pa : rn ? hn : Ua, i.uncache = 0, i;
}, Ne = function(t) {
  return (t = t.split(" "))[0] + " " + t[1];
}, ri = function(t, e, i) {
  var r = _(e);
  return z(parseFloat(e) + parseFloat(Nt(t, "x", i + "px", r))) + r;
}, Ua = function(t, e) {
  e.z = "0px", e.rotationY = e.rotationX = "0deg", e.force3D = 0, hn(t, e);
}, qt = "0deg", ge = "0px", Yt = ") ", hn = function(t, e) {
  var i = e || this, r = i.xPercent, n = i.yPercent, a = i.x, s = i.y, h = i.z, f = i.rotation, l = i.rotationY, g = i.rotationX, k = i.skewX, S = i.skewY, I = i.scaleX, A = i.scaleY, J = i.transformPerspective, u = i.force3D, C = i.target, c = i.zOrigin, p = "", d = u === "auto" && t && t !== 1 || u === !0;
  if (c && (g !== qt || l !== qt)) {
    var y = parseFloat(l) * ae, m = Math.sin(y), Q = Math.cos(y), w;
    y = parseFloat(g) * ae, w = Math.cos(y), a = ri(C, a, m * w * -c), s = ri(C, s, -Math.sin(y) * -c), h = ri(C, h, Q * w * -c + c);
  }
  J !== ge && (p += "perspective(" + J + Yt), (r || n) && (p += "translate(" + r + "%, " + n + "%) "), (d || a !== ge || s !== ge || h !== ge) && (p += h !== ge || d ? "translate3d(" + a + ", " + s + ", " + h + ") " : "translate(" + a + ", " + s + Yt), f !== qt && (p += "rotate(" + f + Yt), l !== qt && (p += "rotateY(" + l + Yt), g !== qt && (p += "rotateX(" + g + Yt), (k !== qt || S !== qt) && (p += "skew(" + k + ", " + S + Yt), (I !== 1 || A !== 1) && (p += "scale(" + I + ", " + A + Yt), C.style[G] = p || "translate(0, 0)";
}, Pa = function(t, e) {
  var i = e || this, r = i.xPercent, n = i.yPercent, a = i.x, s = i.y, h = i.rotation, f = i.skewX, l = i.skewY, g = i.scaleX, k = i.scaleY, S = i.target, I = i.xOrigin, A = i.yOrigin, J = i.xOffset, u = i.yOffset, C = i.forceCSS, c = parseFloat(a), p = parseFloat(s), d, y, m, Q, w;
  h = parseFloat(h), f = parseFloat(f), l = parseFloat(l), l && (l = parseFloat(l), f += l, h += l), h || f ? (h *= ae, f *= ae, d = Math.cos(h) * g, y = Math.sin(h) * g, m = Math.sin(h - f) * -k, Q = Math.cos(h - f) * k, f && (l *= ae, w = Math.tan(f - l), w = Math.sqrt(1 + w * w), m *= w, Q *= w, l && (w = Math.tan(l), w = Math.sqrt(1 + w * w), d *= w, y *= w)), d = z(d), y = z(y), m = z(m), Q = z(Q)) : (d = g, Q = k, y = m = 0), (c && !~(a + "").indexOf("px") || p && !~(s + "").indexOf("px")) && (c = Nt(S, "x", a, "px"), p = Nt(S, "y", s, "px")), (I || A || J || u) && (c = z(c + I - (I * d + A * m) + J), p = z(p + A - (I * y + A * Q) + u)), (r || n) && (w = S.getBBox(), c = z(c + r / 100 * w.width), p = z(p + n / 100 * w.height)), w = "matrix(" + d + "," + y + "," + m + "," + Q + "," + c + "," + p + ")", S.setAttribute("transform", w), C && (S.style[G] = w);
}, Fa = function(t, e, i, r, n) {
  var a = 360, s = j(n), h = parseFloat(n) * (s && ~n.indexOf("rad") ? bt : 1), f = h - r, l = r + f + "deg", g, k;
  return s && (g = n.split("_")[1], g === "short" && (f %= a, f !== f % (a / 2) && (f += f < 0 ? a : -a)), g === "cw" && f < 0 ? f = (f + a * tr) % a - ~~(f / a) * a : g === "ccw" && f > 0 && (f = (f - a * tr) % a - ~~(f / a) * a)), t._pt = k = new at(t._pt, e, i, r, f, Sa), k.e = l, k.u = "deg", t._props.push(i), k;
}, or = function(t, e) {
  for (var i in e)
    t[i] = e[i];
  return t;
}, Ha = function(t, e, i) {
  var r = or({}, i._gsap), n = "perspective,force3D,transformOrigin,svgOrigin", a = i.style, s, h, f, l, g, k, S, I;
  r.svg ? (f = i.getAttribute("transform"), i.setAttribute("transform", ""), a[G] = e, s = Qe(i, 1), Wt(i, G), i.setAttribute("transform", f)) : (f = getComputedStyle(i)[G], a[G] = e, s = Qe(i, 1), a[G] = f);
  for (h in Ut)
    f = r[h], l = s[h], f !== l && n.indexOf(h) < 0 && (S = _(f), I = _(l), g = S !== I ? Nt(i, h, f, I) : parseFloat(f), k = parseFloat(l), t._pt = new at(t._pt, s, h, g, k - g, ci), t._pt.u = I || 0, t._props.push(h));
  or(s, r);
};
nt("padding,margin,Width,Radius", function(o, t) {
  var e = "Top", i = "Right", r = "Bottom", n = "Left", a = (t < 3 ? [e, i, r, n] : [e + n, e + i, r + i, r + n]).map(function(s) {
    return t < 2 ? o + s : "border" + s + o;
  });
  We[t > 1 ? "border" + o : o] = function(s, h, f, l, g) {
    var k, S;
    if (arguments.length < 4)
      return k = a.map(function(I) {
        return Ot(s, I, f);
      }), S = k.join(" "), S.split(k[0]).length === 5 ? k[0] : S;
    k = (l + "").split(" "), S = {}, a.forEach(function(I, A) {
      return S[I] = k[A] = k[A] || k[(A - 1) / 2 | 0];
    }), s.init(h, S, g);
  };
});
var ln = {
  name: "css",
  register: di,
  targetTest: function(t) {
    return t.style && t.nodeType;
  },
  init: function(t, e, i, r, n) {
    var a = this._props, s = t.style, h = i.vars.startAt, f, l, g, k, S, I, A, J, u, C, c, p, d, y, m, Q, w;
    Fi || di(), this.styles = this.styles || en(t), Q = this.styles.props, this.tween = i;
    for (A in e)
      if (A !== "autoRound" && (l = e[A], !(ft[A] && qr(A, e, i, r, t, n)))) {
        if (S = typeof l, I = We[A], S === "function" && (l = l.call(i, r, t, n), S = typeof l), S === "string" && ~l.indexOf("random(") && (l = Je(l)), I)
          I(this, t, A, l, i) && (m = 1);
        else if (A.substr(0, 2) === "--")
          f = (getComputedStyle(t).getPropertyValue(A) + "").trim(), l += "", Rt.lastIndex = 0, Rt.test(f) || (J = _(f), u = _(l), u ? J !== u && (f = Nt(t, A, f, u) + u) : J && (l += J)), this.add(s, "setProperty", f, l, r, n, 0, 0, A), a.push(A), Q.push(A, 0, s[A]);
        else if (S !== "undefined") {
          if (h && A in h ? (f = typeof h[A] == "function" ? h[A].call(i, r, t, n) : h[A], j(f) && ~f.indexOf("random(") && (f = Je(f)), _(f + "") || f === "auto" || (f += kt.units[A] || _(Ot(t, A)) || ""), (f + "").charAt(1) === "=" && (f = Ot(t, A))) : f = Ot(t, A), k = parseFloat(f), C = S === "string" && l.charAt(1) === "=" && l.substr(0, 2), C && (l = l.substr(2)), g = parseFloat(l), A in Bt && (A === "autoAlpha" && (k === 1 && Ot(t, "visibility") === "hidden" && g && (k = 0), Q.push("visibility", 0, s.visibility), Et(this, s, "visibility", k ? "inherit" : "hidden", g ? "inherit" : "hidden", !g)), A !== "scale" && A !== "transform" && (A = Bt[A], ~A.indexOf(",") && (A = A.split(",")[0]))), c = A in Ut, c) {
            if (this.styles.save(A), w = l, S === "string" && l.substring(0, 6) === "var(--") {
              if (l = At(t, l.substring(4, l.indexOf(")"))), l.substring(0, 5) === "calc(") {
                var B = t.style.perspective;
                t.style.perspective = l, l = At(t, "perspective"), B ? t.style.perspective = B : Wt(t, "perspective");
              }
              g = parseFloat(l);
            }
            if (p || (d = t._gsap, d.renderTransform && !e.parseTransform || Qe(t, e.parseTransform), y = e.smoothOrigin !== !1 && d.smooth, p = this._pt = new at(this._pt, s, G, 0, 1, d.renderTransform, d, 0, -1), p.dep = 1), A === "scale")
              this._pt = new at(this._pt, d, "scaleY", d.scaleY, (C ? re(d.scaleY, C + g) : g) - d.scaleY || 0, ci), this._pt.u = 0, a.push("scaleY", A), A += "X";
            else if (A === "transformOrigin") {
              Q.push(st, 0, s[st]), l = Oa(l), d.svg ? pi(t, l, 0, y, 0, this) : (u = parseFloat(l.split(" ")[2]) || 0, u !== d.zOrigin && Et(this, d, "zOrigin", d.zOrigin, u), Et(this, s, A, Ne(f), Ne(l)));
              continue;
            } else if (A === "svgOrigin") {
              pi(t, l, 1, y, 0, this);
              continue;
            } else if (A in sn) {
              Fa(this, d, A, k, C ? re(k, C + l) : l);
              continue;
            } else if (A === "smoothOrigin") {
              Et(this, d, "smooth", d.smooth, l);
              continue;
            } else if (A === "force3D") {
              d[A] = l;
              continue;
            } else if (A === "transform") {
              Ha(this, l, t);
              continue;
            }
          } else A in s || (A = ue(A) || A);
          if (c || (g || g === 0) && (k || k === 0) && !ca.test(l) && A in s)
            J = (f + "").substr((k + "").length), g || (g = 0), u = _(l) || (A in kt.units ? kt.units[A] : J), J !== u && (k = Nt(t, A, f, u)), this._pt = new at(this._pt, c ? d : s, A, k, (C ? re(k, C + g) : g) - k, !c && (u === "px" || A === "zIndex") && e.autoRound !== !1 ? Ia : ci), this._pt.u = u || 0, c && w !== l ? (this._pt.b = f, this._pt.e = w, this._pt.r = pa) : J !== u && u !== "%" && (this._pt.b = f, this._pt.r = da);
          else if (A in s)
            xa.call(this, t, A, f, C ? C + l : l);
          else if (A in t)
            this.add(t, A, f || t[A], C ? C + l : l, r, n);
          else if (A !== "parseTransform") {
            mi(A, l);
            continue;
          }
          c || (A in s ? Q.push(A, 0, s[A]) : typeof t[A] == "function" ? Q.push(A, 2, t[A]()) : Q.push(A, 1, f || t[A])), a.push(A);
        }
      }
    m && jr(this);
  },
  render: function(t, e) {
    if (e.tween._time || !Hi())
      for (var i = e._pt; i; )
        i.r(t, i.d), i = i._next;
    else
      e.styles.revert();
  },
  get: Ot,
  aliases: Bt,
  getSetter: function(t, e, i) {
    var r = Bt[e];
    return r && r.indexOf(",") < 0 && (e = r), e in Ut && e !== st && (t._gsap.x || Ot(t, "x")) ? i && $i === i ? e === "scale" ? wa : ya : ($i = i || {}) && (e === "scale" ? ma : Qa) : t.style && !Ji(t.style[e]) ? Ca : ~e.indexOf("-") ? Ja : Ui(t, e);
  },
  core: {
    _removeProperty: Wt,
    _getMatrix: Ti
  }
};
ot.utils.checkPrefix = ue;
ot.core.getStyleSaver = en;
(function(o, t, e, i) {
  var r = nt(o + "," + t + "," + e, function(n) {
    Ut[n] = 1;
  });
  nt(t, function(n) {
    kt.units[n] = "deg", sn[n] = 1;
  }), Bt[r[13]] = o + "," + t, nt(i, function(n) {
    var a = n.split(":");
    Bt[a[1]] = r[a[0]];
  });
})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");
nt("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(o) {
  kt.units[o] = "px";
});
ot.registerPlugin(ln);
var Ri = ot.registerPlugin(ln) || ot;
Ri.core.Tween;
function Ea(o) {
  var t = this;
  this.x = 0, this.y = 0, this.z = -200, this.offsetX = 400, this.offsetY = 400, this.focalLength = 300, this.focalPower = 0.3, this.fov = 1e3, this.fog = { start: 2e4, end: 22e3, range: 2e3 }, this.moveTo = function(i, r, n) {
    var a = r || 0.5, s = {
      ease: n || "power1.out",
      onUpdate: function() {
        t.stage.root.changed = !0, t.onChange();
      }
    };
    for (var h in i)
      switch (h) {
        case "x":
        case "y":
        case "z":
          isNaN(i[h]) ? i[h] = 0 : i[h] = Math.round(i[h]);
        case "offsetX":
        case "offsetY":
        case "focalLength":
        case "focalPower":
        case "ease":
          s[h] = i[h];
          break;
        case "time":
          a = i[h];
          break;
      }
    var f = Ri;
    f.to(t, a, s);
  }, this.moveToElement = function(i, r, n, a) {
    t.moveTo(
      {
        x: i._x + i._width * 0.5,
        y: i._y + i._height * 0.5,
        z: i._z - (isNaN(r) ? t.focalLength : r)
      },
      n,
      a
    );
  }, this.zFactor = function(i) {
    return i === 0 ? 1 : Math.pow(t.focalLength / i, t.focalPower);
  }, this.onChange = function() {
  };
  for (var e in o)
    this[e] = o[e];
}
function ce(o) {
  var t = this;
  this.className = "UIEvent", this.currentTarget = !1, typeof o == "string" && (o = { type: o, phase: "bubble" }), this._stopPropagation = !1, this.stopPropagation = function() {
    t._stopPropagation = !0;
  };
  for (var e in o)
    this[e] = o[e];
}
var Ta = 0;
function fn(o) {
  var t = this;
  this.id = "", this.___uniqueid = Ta++, this.x = 0, this.y = 0, this.z = 0, this.width = 0, this.height = 0, this.scale = 1, this.visible = !0, this.alpha = 1, this.rotation = 0, this.rotationX = 0, this.rotationY = 0, this._x = 0, this._y = 0, this._z = 0, this._width = 0, this._height = 0, this._scale = 1, this._visible = !0, this._alpha = 1, this._rotation = 0, this.__x = 0, this.__y = 0, this.__z = 0, this.__width = 0, this.__height = 0, this.viewport = !1, this.mouseEnabled = !0, this.smoothing = !1, this.onstage = !0, this.parent = !1, this.children = [], this.parentChain = [], this.__remove = !1;
  var e = {};
  this.root = t, this.rootArray = [];
  function i(c) {
    t.rootArray.push(c), a();
  }
  function r(c) {
    c.sort(function(p, d) {
      return p._z < d._z ? -1 : p._z > d._z ? 1 : 0;
    });
  }
  var n = !1;
  function a(c) {
    c === !0 ? (t.root.rootArray.sort(function(p, d) {
      return p._z < d._z ? -1 : p._z > d._z ? 1 : p.___uniqueid > d.___uniqueid ? -1 : p.___uniqueid < d.___uniqueid ? 1 : 0;
    }), n = !1) : n === !1 && (n = setTimeout(function() {
      a(!0);
    }, 1));
  }
  function s() {
    r(t.children);
  }
  function h(c, p) {
    return this.mouseEnabled === !0 && this._visible === !0 && this.onstage === !0 && c > this.__x && c < this.__x + this.__width && p > this.__y && p < this.__y + this.__height;
  }
  function f(c) {
    return c.parent = t, c.root = t.root, c.parentChain = t.parentChain.concat([t]), c.children.forEach((p) => {
      p.root = t.root;
    }), c.viewport === !1 && (c.viewport = t.viewport), t.children.push(c), s(), t.root.addRootNode && t.root.addRootNode(c), c;
  }
  function l(c) {
    var p = c.parent.children;
    if (p) {
      for (var d = p.length; d--; )
        if (p[d] == c) {
          p.splice(d, 1), c.__remove = !0, c.parent = !1;
          break;
        }
    }
  }
  function g() {
    l(t);
  }
  function k(c) {
    for (var p = 0; p < t.children.length; p++)
      if (t.children[p].id === c)
        return t.children[p];
    return !1;
  }
  function S(c, p) {
    return e[c] || (e[c] = []), e[c].push(p), t.mouseEnabled = !0, t;
  }
  function I(c, p) {
    if (e[c])
      if (p)
        for (var d = e[c].length; d--; )
          e[c][d] === p && e[c].splice(d, 1);
      else
        delete e[c];
    return t;
  }
  function A(c, p) {
    if (c.className != "UIEvent" && (c = new ce(c)), c.currentTarget === !1 && (c.currentTarget = t), c.target = t, e[c.type])
      for (var d = e[c.type].length; d--; )
        e[c.type][d].call(t, c);
    c.type === v.DOWN && t.draggable === !0 && (t.mouseData = { down: { x: t.x, y: t.y, z: t.z } }, t.root.dragTarget !== t && (t.trigger(v.DRAG_START), t.root.dragTarget = t), t.smartDrag !== !0 && c.stopPropagation()), p !== !1 && c._stopPropagation === !1 && t.parent !== !1 && t.parent.trigger(c);
  }
  function J(c) {
    return c.type in e && e[c.type] && e[c.type].length > 0;
  }
  function u(c) {
    if (c) {
      for (var p in c)
        t[p] = c[p];
      if (typeof t.root == "object" && (t.root.changed = !0), "image" in c && t.img && (t.img.src = t.image), "z" in c && t.trigger({ type: "zchange" }), "viewport" in c)
        for (var d = 0; d < t.children.length; d++)
          t.children.setProperty({ viewport: t });
    }
  }
  function C() {
    t.onstage === !0 && t.render.call(t);
  }
  this.update = function() {
  }, this.render = function() {
  }, this._render = C, this.trigger = A, this.willTrigger = J, this.on = S, this.off = I, this.setProperty = u, this.addChild = f, this.removeChild = l, this.remove = g, this.hitTest = h, this.getElementById = k, u(o), this.root === !0 && (this.root = this, this.addRootNode = i, this.sortRootNodes = a), this.viewport === !0 && (this.viewport = this);
}
var v = {
  DRAG_START: "drag_start",
  DRAG: "drag",
  DRAG_EASE: "drag_ease",
  DRAG_END: "drag_end",
  WHEEL: "wheel",
  MOVE: "move",
  OVER: "over",
  OUT: "out",
  DOWN: "down",
  UP: "up",
  ENTER: "enter",
  LEAVE: "leave",
  ENTER_STAGE: "enter_stage",
  LEAVE_STAGE: "leave_stage",
  CLICK: "click",
  REMOVED: "removed",
  CHANGED: "changed",
  UPDATED: "updated",
  PROGRESS: "progress"
};
function Ra(o) {
  var t = this;
  this.currentTarget = !1, this.isDown = !1, this.position = { target: null, x: 0, y: 0 }, this.down = { target: null, x: 0, y: 0 }, this.move = { target: null, x: 0, y: 0 }, this.up = { target: null, x: 0, y: 0 }, this.vector = { x: 0, y: 0 }, this.data = {}, this.onAfterClick = !1;
  var e = o.root, i = o.target;
  this.config = o;
  var r = !1, n = "ontouchstart" in window && !/hp-tablet/gi.test(navigator.appVersion);
  function a(g) {
    if (g.multitouch = !1, g.zoomedIn = document.width / window.innerWidth > 1, n) {
      var k = g.originalEvent ? g.originalEvent.touches : g.touches;
      k && (k && k.length > 0 ? (g.pageX = k[0].pageX, g.pageY = k[0].pageY, g.multitouch = k.length > 1) : g.changedTouches && g.changedTouches.length > 0 && (g.pageX = g.changedTouches[0].pageX, g.pageY = g.changedTouches[0].pageY, g.multitouch = g.changedTouches.length > 1));
    }
  }
  function s(g) {
    var k = {
      mousedown: v.DOWN,
      mouseup: v.UP,
      mousemove: t.isDown ? v.DRAG : v.MOVE,
      mouseleave: v.LEAVE,
      mousewheel: v.WHEEL,
      touchstart: v.DOWN,
      touchend: v.UP,
      touchmove: t.isDown ? v.DRAG : v.MOVE,
      touchcancel: v.LEAVE
    };
    return k[g] || "";
  }
  function h(g) {
    g.preventDefault(), a(g);
    var k = i.getBoundingClientRect(), S = {
      top: k.top + document.body.scrollTop,
      left: k.left + document.body.scrollLeft
    };
    t.position.x = g.pageX - S.left, t.position.y = g.pageY - S.top;
    var I = new ce({ type: s(g.type), mouse: t, pageX: t.position.x, pageY: t.position.y });
    switch (I.type) {
      case v.WHEEL:
        I.deltaFactor = g.originalEvent && g.originalEvent.deltaFactor ? g.originalEvent.deltaFactor : 1, I.deltaX = "deltaX" in g ? g.deltaX : g.originalEvent.deltaX, I.deltaY = "deltaY" in g ? g.deltaY : g.originalEvent.deltaY;
        break;
      case v.DOWN:
        t.isDown = !0, t.down.x = t.position.x, t.down.y = t.position.y, t.vector.x = 0, t.vector.y = 0, t.vector.length = 0, t.vector.maxLength = 0;
        break;
      case v.MOVE:
        break;
      case v.DRAG:
        t.vector.x = t.position.x - t.down.x, t.vector.y = t.position.y - t.down.y, t.vector.length = Math.sqrt(Math.pow(t.vector.x, 2) + Math.pow(t.vector.y, 2)), t.vector.maxLength = Math.max(t.vector.length, t.vector.maxLength);
        break;
      case v.LEAVE:
      case v.UP:
        t.isDown === !0 && (t.isDown = !1);
        break;
    }
    if (t.isDown === !1) {
      var A = new ce({ type: v.OVER, mouse: t, pageX: t.position.x, pageY: t.position.y }), J = f(A);
      if (J !== null && r !== J) {
        if (r !== !1) {
          i.classList.remove("cursor-pointer");
          var u = new ce({ type: v.OUT, mouse: t, pageX: t.position.x, pageY: t.position.y });
          r.trigger(u);
        }
        J.willTrigger(A) && (J.trigger(A), i.classList.add("cursor-pointer")), r = J;
      }
    }
    var C = f(I);
    if (C = l(C, I), C.trigger(I), C.willTrigger({ type: v.CLICK }) && i.classList.add("cursor-pointer"), I._stopPropagation === !1 && I.type === v.UP && t.vector.maxLength < 3) {
      var c = new ce({ type: v.CLICK, mouse: t, pageX: t.position.x, pageY: t.position.y });
      C.trigger(c), t.onAfterClick !== !1 && t.onAfterClick(C);
    }
  }
  function f(g) {
    for (var k = e, S = 0; S < e.rootArray.length; S++) {
      var I = e.rootArray[S];
      if (I.hitTest(g.pageX, g.pageY) && (I.viewport === !1 || I.viewport.hitTest(g.pageX, g.pageY))) {
        k = I;
        break;
      }
    }
    return k;
  }
  function l(g, k) {
    if (g.children.length > 0)
      for (var S = 0; S < g.children.length; S++) {
        var I = g.children[S];
        I.hitTest(k.pageX, k.pageY) && (g = l(I, k));
      }
    return g;
  }
  n ? (i.addEventListener("touchstart", h), i.addEventListener("touchmove", h), i.addEventListener("touchend", h), i.addEventListener("touchcancel", h)) : (i.addEventListener("mousewheel", h), i.addEventListener("mousedown", h), i.addEventListener("mousemove", h), i.addEventListener("mouseup", h), i.addEventListener("mouseleave", h));
}
function La(o) {
  var t = this;
  this.dragX = !0, this.dragY = !0, this.dragZ = !0, this.userBounds = new Vi(), this.cameraBounds = new Vi(), this.maxWidth = 1 / 0, this.maxHeight = 1 / 0, this.dragFactor = 1;
  var e = Ri, i = Object.assign(
    {
      width: 100,
      height: 100,
      wheelZoom: !0,
      mouseEnabledX: !0,
      mouseEnabledY: !0,
      mouseEnabledZ: !0,
      fillStyle: "#FFF",
      fullscreen: !0
    },
    o
  );
  o.userBounds && this.userBounds.set(o.userBounds), o.cameraBounds && this.cameraBounds.set(o.cameraBounds), o.maxWidth && (this.maxWidth = o.maxWidth), o.maxHeight && (this.maxHeight = o.maxHeight), this.camera = new Ea({ stage: this });
  var r = this.camera, n = this.cvs = document.createElement("canvas"), a = this.ctx = n.getContext("2d", { alpha: !0 }), s = {
    width: 0,
    height: 0
  }, h;
  function f(u) {
    if (u !== !0) {
      h && clearTimeout(h), h = setTimeout(function() {
        f(!0);
      }, 50);
      return;
    }
    s.width = window.innerWidth, s.height = window.innerHeight, i.fullscreen === !0 && t.setSize(s.width, s.height);
  }
  this.root = new fn({
    root: !0,
    id: "stage",
    width: i.width,
    height: i.height,
    ctx: a,
    camera: t.camera,
    parent: !1,
    changed: !0
  }), this.mouse = i.mouseEnabled !== !1 ? new Ra({ target: n, root: this.root }) : !1;
  var l = {};
  function g() {
    return t.root.rootArray.filter(function(u) {
      return u.onstage === !0 && u.visible === !0;
    });
  }
  function k(u) {
    if (l[u])
      return l[u];
    for (var C = t.root.rootArray, c = C.length, p = 0; p < c; p++)
      if (C[p].id === u)
        return l[u] = C[p], C[p];
    return !1;
  }
  function S(u) {
    if (u.trigger(v.UPDATED, !1), u.beforeUpdate && u.beforeUpdate.call(u), u.physics === !0 && (u.x += u.vector.x, u.y += u.vector.y, u.z += u.vector.z, u.vector.x *= u.friction.x, u.vector.y *= u.friction.y, u.vector.z *= u.friction.z), u.position === "fixed") {
      if (u._onstage = !1, u._visible = u.visible, u._visible) {
        if (u.__x = u.right !== !1 ? u.root.width - u.width : u.x, u.__y = u.y, u.bottom !== !1)
          u.__y = u.root.height - (u.height + u.bottom);
        else if (u.verticalAlign !== !1)
          switch (u.verticalAlign) {
            case "middle":
              u.__y = (u.root.height - u.height) * 0.5;
              break;
            case "bottom":
              u.__y = u.root.height - u.height;
              break;
          }
        u._z = u.z, u._alpha = u.alpha, u.__width = u.width * u.scale, u.__height = u.height * u.scale, u.__right = u.__x + u.__width, u.__bottom = u.__y + u.__height, u.__x < u.root.width && u.__y < u.root.height && u.__right > 0 && u.__bottom > 0 && (u._onstage = !0);
      }
    } else if (u.parent) {
      var C = u.parent;
      if (u._visible = C._visible ? u.visible : !1, u.right !== !1 ? u._x = C._x + C.width - (u.width + u.right) : u._x = C._x + u.x, u._y = C._y + u.y, u._z = C._z + u.z, u._rotation = C._rotation + u.rotation, u._scale = C._scale * u.scale, u._alpha = C._alpha * u.alpha, u.__z = u._z - r.z, u._onstage = !1, u._visible === !0 && u.__z > 0) {
        u.__lastZ !== u.__z && (u.zFactor = r.zFactor(u.__z), u.__lastZ = u.__z);
        var c = t.root;
        if (u.__x = r.offsetX + (u._x - r.x) * u.zFactor, (u.__x < c.width || u.repeatX === !0) && (u.__y = r.offsetY + (u._y - r.y) * u.zFactor, (u.__y < c.height || u.repeatY === !0) && (u._width = u._scale * u.width, u.__width = u._width * u.zFactor, (u.__x + u.__width > 0 || u.repeatX === !0) && (u._height = u._scale * u.height, u.__height = u._height * u.zFactor, (u.__y + u.__height > 0 || u.repeatY === !0) && (u._onstage = !0)))), u._onstage === !1 && u.plane === !0) {
          u.renderSkew();
          var p = u.hitRect;
          u._onstage = p.right > 0 && p.bottom > 0 && p.x < c.width && p.y < c.height;
        }
        if (u._onstage === !1 && u._rotation !== 0) {
          var p = {
            x: u.__x - u.__width * 1,
            y: u.__y - u.__height * 1,
            right: u.__x + u.__width * 2,
            bottom: u.__y + u.__height * 2
          };
          u._onstage = p.right > 0 && p.bottom > 0 && p.x < c.width && p.y < c.height;
        }
        u._onstage === !0 && r.fog.active === !0 && u.__z > r.fog.start && (u.__z < r.fog.end ? (r.fog.range = r.fog.end - r.fog.start, u._alpha *= (r.fog.end - u.__z) / r.fog.range) : u._alpha = 0);
      }
    }
    u.div !== !1 && u._onstage === !1 && (u.div.style.visibility = "hidden");
    for (var d = u.children, y = d.length; y--; )
      S(d[y]);
    u.changed = !1;
  }
  function I(u) {
    i.fillStyle = u, t.root.changed = !0;
  }
  function A() {
    var u = t.root, C = u.rootArray, c = C.length, p, d = [];
    for (a.clearRect(0, 0, n.width, n.height), a.fillStyle = i.fillStyle, a.fillRect(0, 0, n.width, n.height), S(u); c--; ) {
      if (p = C[c], p.onstage !== p._onstage && (p._onstage && p.willTrigger({ type: v.ENTER_STAGE }) ? p.trigger(v.ENTER_STAGE) : p.willTrigger({ type: v.LEAVE_STAGE }) && p.trigger(v.LEAVE_STAGE)), p.onstage = p._onstage, p.onstage) {
        if (p.willTrigger({ type: v.PROGRESS })) {
          var y = (p.__y + p.height) / (p.root.height + p.height);
          y != p.progress && (p.progress = y, p.trigger(v.PROGRESS));
        }
        p.smoothing === !1 && (p.__x = p.__x + 0.5 | 0, p.__y = p.__y + 0.5 | 0, p.__width = p.__width + 0.5 | 0, p.__height = p.__height + 0.5 | 0), p._render();
      }
      p.__remove === !0 && (d.unshift(c), p.trigger(v.REMOVED));
    }
    if (d.length > 0)
      for (c = d.length; c--; )
        C.splice(d[c], 1);
  }
  this.startRender = function() {
    e.ticker.add(A);
  }, this.stopRender = function() {
    e.ticker.remove(A), A();
  }, this.root.on("zchange", function(u) {
    this.sortRootNodes();
  }), this.root.dragTarget = !1, this.mouse && (this.root.on(v.DOWN, function(u) {
    this.mouseData = {
      down: {
        x: t.camera.x,
        y: t.camera.y
      }
    };
  }), this.root.on(v.DRAG, function(u) {
    var C = !1, c = this.dragTarget;
    if (this.dragTarget !== this && this.dragTarget !== !1) {
      var p = !1;
      if (c.smartDrag && t.dragY !== !1 && Math.abs(u.mouse.vector.x) < Math.abs(u.mouse.vector.y) ? t.camera.moveTo(t.userBounds.clamp({ y: this.mouseData.down.y - u.mouse.vector.y })) : p = !0, p) {
        var d = {
          x: c.mouseData.down.x + u.mouse.vector.x * (1 / c.zFactor),
          y: c.mouseData.down.y + u.mouse.vector.y * (1 / c.zFactor)
        };
        c.dragBounds && (c.dragBounds === "parent" && (c.dragBounds = {
          minX: Math.min(0, c.parent.width - c.width),
          maxX: Math.max(0, c.parent.width - c.width),
          minY: Math.min(0, c.parent.height - c.height),
          maxY: Math.max(0, c.parent.height - c.height)
        }), d.x = clamp(d.x, c.dragBounds.minX, c.dragBounds.maxX), d.y = clamp(d.y, c.dragBounds.minY, c.dragBounds.maxY)), e.to(c, {
          duration: 0.3,
          x: d.x,
          y: d.y,
          onUpdate: function() {
            c.trigger(v.DRAG_EASE);
          },
          onComplete: function() {
            c.trigger(v.DRAG_END);
          }
        });
      }
    } else
      C = !0;
    C === !0 && t.camera.moveTo(
      t.userBounds.clamp({
        x: this.mouseData.down.x - u.mouse.vector.x * t.dragFactor,
        y: this.mouseData.down.y - u.mouse.vector.y * t.dragFactor
      })
    );
  }), this.root.on(v.UP, function(u) {
    this.lastDragTarget = this.dragTarget, this.dragTarget && this.dragTarget.trigger(v.DRAG_END), this.dragTarget = !1;
  }), this.root.on(v.LEAVE, function(u) {
    this.lastDragTarget = this.dragTarget, this.dragTarget && this.dragTarget.trigger(v.DRAG_END), this.dragTarget = !1;
  }), this.root.on(v.WHEEL, function(u) {
    u.mouse.isDown && this.dragTarget !== this && this.dragTarget !== !1 ? this.dragTarget.setProperty({ z: this.dragTarget.z + u.deltaY * u.deltaFactor * 0.5 }) : i.wheelZoom && t.dragZ !== !1 ? t.camera.moveTo(t.userBounds.clamp({ z: t.camera.z + u.deltaY * u.deltaFactor * 1 })) : t.dragY !== !1 && t.camera.moveTo(t.userBounds.clamp({ y: t.camera.y - u.deltaY * u.deltaFactor * 2 }));
  })), this.setSize = function(u, C) {
    var c = Math.min(t.maxWidth, u), p = Math.min(t.maxHeight, C);
    n.width = c, n.height = p, t.camera.offsetX = Math.round(c * 0.5), t.camera.offsetY = Math.round(p * 0.5), t.root.width = c, t.root.height = p, c < u ? (t.cvs.style.left = "50%", t.cvs.style.marginLeft = Math.round(-c * 0.5) + "px") : (t.cvs.style.left = "", t.cvs.style.marginLeft = "");
  }, this.allImages = [], this.preloadImages = [], this.nonPreloadImages = [], this.importData = function(u) {
    J(u, t), setTimeout(function() {
      t.root.sortRootNodes();
    }, 1);
  };
  var J = function(u, C) {
    C == null && (C = t);
    var c = "";
    !u.id && u.image && (c = u.image.split("/").pop().split(".")[0]), u.image && (u.preload ? t.preloadImages.push(u.image) : t.nonPreloadImages.push(u.image), t.allImages.push(u.image)), window.assetsDirectory && u.image && u.image.indexOf(assetsDirectory) == -1 && u.image.indexOf("data:image") !== 0 && (u.image = assetsDirectory + u.image), C = C.addChild(new CanvasElement(Object.assign({ id: c, smoothing: !0 }, u, { children: [] })));
    for (var p in v) {
      var d = v[p];
      u[d] && (CanvasEventHandlers[u[d]] ? (C["__" + d] = u[d], C.on(d, CanvasEventHandlers[u[d]])) : typeof u[d] == "function" && (C["__" + d] = "INLINE", C.on(d, u[d])));
    }
    if (d = "update", u[d] && (CanvasEventHandlers[u[d]] ? (C["__" + d] = u[d], C.update = CanvasEventHandlers[u[d]]) : typeof u[d] == "function" && (C.update = u[d])), u.children)
      for (var y = 0; y < u.children.length; y++)
        J(u.children[y], C);
  };
  this.getElementById = k, this.getVisibleElements = g, this.addChild = this.root.addChild, this.on = this.root.on, this.trigger = this.root.trigger, this.setProperty = this.root.setProperty, this.render = A, this.setFillStyle = I, this.setSize(i.width, i.height), f(!0), window.addEventListener("resize", f), this.startRender();
}
function Wa() {
  var o = this.root.ctx;
  if (this.repeatX === !0)
    if (this.repeatY === !0)
      for (var t = this.root.width, e = this.root.height, i = this.__width, r = this.__height, n = this.__x % i - i, a = this.__y % r - r, s = n, h = a, f = Math.floor(i), l = Math.floor(r); h < e; ) {
        for (; s < t; )
          o.drawImage(this.bitmapData, s, h, i, r), s += f;
        s = n, h += l;
      }
    else
      for (var t = this.root.width, s = Math.floor(this.__x % this.__width - this.__width); s < t; )
        o.drawImage(this.bitmapData, s, this.__y, this.__width, this.__height), s += Math.floor(this.__width);
  else
    o.drawImage(this.bitmapData, this.__x, this.__y, this.__width, this.__height);
}
const hr = /* @__PURE__ */ (function() {
  var o = {}, t = [], e = {
    LOADING: 0,
    LOADED: 1
  };
  function i(l) {
    Array.isArray(l.images) || (l.images = [l.images]), Array.isArray(l.onCompleteParams) || (l.onCompleteParams = []), typeof l.onComplete != "function" && (l.onComplete = function() {
    }), l.images = l.images.filter(function(S) {
      return String(S).length > 0;
    });
    for (var g = 0; g < l.images.length; g++) {
      var k = String(l.images[g]);
      l.pattern && (k = l.pattern.replace("%IMAGE%", k)), l.root && (k = l.root + k), l.images[g] = k, s(k);
    }
    t.unshift(l), f();
  }
  function r() {
    var l = [];
    for (var g in o)
      l.push(g);
    return l;
  }
  function n(l) {
    return a(l) ? o[l] : !1;
  }
  function a(l) {
    return l in o;
  }
  function s(l) {
    if (a(l))
      f();
    else {
      var g = new Image();
      g.addEventListener("load", h, !1), g.setAttribute("orig_src", l), o[l] = { src: l, img: g, state: e.LOADING }, g.src = l;
    }
  }
  function h() {
    var l = this.getAttribute("orig_src");
    o[l] && (o[l].state = e.LOADED), f();
  }
  function f() {
    for (var l = t.length; l--; ) {
      for (var g = !0, k = [], S = 0; S < t[l].images.length; S++)
        if (o[t[l].images[S]].state == e.LOADING) {
          g = !1;
          break;
        } else {
          var I = o[t[l].images[S]];
          I.width = I.img.width, I.height = I.img.height, I.squareWidth = Math.min(I.width, I.height), I.squareX = (I.width - I.squareWidth) * 0.5, I.squareY = (I.height - I.squareWidth) * 0.5, k.push(I);
        }
      if (g) {
        var A = t.splice(l, 1);
        A[0].onComplete.apply(this, [k].concat(A[0].onCompleteParams || []));
      }
    }
  }
  return {
    load: i,
    getLoadedImages: r,
    getImage: n
  };
})();
function Na() {
  if (this.imageLoaded !== !0 && this.imageLoading === !1) {
    if (this.image.indexOf("data:image") === 0) {
      var o = this, t = new Image();
      t.onload = function() {
        this.complete || console.log("INCOMPLETE LOAD"), ni([{ img: this }], o);
      }, t.src = this.image;
    } else {
      var t = hr.getImage(this.image);
      t ? ni([t], this) : hr.load({
        images: this.image,
        onComplete: ni,
        onCompleteParams: [this]
      });
    }
    this.imageLoading = !0;
  }
}
function ni(o, t) {
  t.imageLoading = !1, t.imageLoaded = !0, (t.autoSize === !0 || t.width === 0 || t.height === 0) && (t.width = o[0].width, t.height = o[0].height), t.bitmapData = o[0].img;
}
let Ga = {};
function Ue(o) {
  return !isNaN(parseFloat(o));
}
function vt(o, t, e, i) {
  return typeof o == "boolean" ? Object.assign(t, e, i || {}) : Object.assign(t, e || {}, i || {});
}
function Va() {
  var o = this, t = o.html;
  if (t !== null && t !== "") {
    let r = function(n) {
      return Ue(n) && n > 0 ? n < 1 ? 1 : Math.floor(n) : 0;
    };
    o.bitmapData === !1 && (o.bitmapData = document.createElement("canvas"), o.bitmapDataContext = o.bitmapData.getContext("2d"), o.bitmapData.width = 10, o.bitmapData.height = 10);
    var e = qa.render(t + "<br>", { width: o.width }, Ga), i = {
      width: r(e.width),
      height: r(e.height)
    };
    o.bitmapData.width = i.width, o.bitmapData.height = i.height, o.width = i.width, o.height = i.height, i.width > 0 && i.height > 0 && o.bitmapDataContext.drawImage(e, 0, 0, i.width, i.height);
  }
}
var qa = /* @__PURE__ */ (function(o) {
  var t = "_-_-_-_-_-", e;
  function i(l, g, k) {
    e = 0;
    var S = document.createElement("canvas"), I = g && Ue(g.scale) ? g.scale : 1;
    S.width = (g && Ue(g.width) ? g.width : 500) * I;
    var A = s("<html>" + l + "</html>"), J = vt(!0, f, k || {});
    return S.height = h(A, J, S, I, !0), h(A, J, S, I, !1), S;
  }
  function r(l) {
    vt(!0, f, l);
  }
  var n = {
    "font-size": "fontSize",
    "font-face": "fontFace",
    "font-weight": "fontWeight",
    "font-style": "fontStyle",
    color: "color",
    "line-height": "lineHeight",
    width: "width",
    "margin-top": "marginTop",
    "margin-left": "marginLeft",
    "margin-right": "marginRight",
    "margin-bottom": "marginBottom",
    "text-align": "textAlign",
    "text-decoration": "textDecoration",
    display: "display"
  };
  function a(l) {
    var g = {};
    if (l) {
      for (var k = l.split(";"), S = 0; S < k.length; S++)
        if (k[S].indexOf(":") > -1 && (k[S] = k[S].split(":"), n[k[S][0]])) {
          switch (n[k[S][0]]) {
            case "fontSize":
            case "marginTop":
            case "marginLeft":
            case "marginRight":
            case "marginBottom":
            case "lineHeight":
              k[S][1] = parseInt(k[S][1], 10);
              break;
          }
          g[n[k[S][0]]] = k[S][1];
        }
    }
    return g;
  }
  function s(l) {
    result = l.replace(/(\S{1}<)/g, function(u) {
      return u.slice(0, 1) + " <";
    }).replace(/(>\S{1})/g, function(u) {
      return "> " + u.slice(-1);
    }).replace(/(<.*?>)/g, function(u) {
      return u.replace(" ", t);
    }).split(/\s/g);
    for (var g = 0; g < result.length; g++)
      if (result[g].match(/<br>/))
        result[g] = { type: "html_break", html: !0 };
      else if (result[g].match(/<\w+.*?>/)) {
        var k = result[g].replace(t, " "), S = k.match(/<(\w{1,}\d{0,})\b/)[1], I = k.match(/class="(.*?)"/), A = k.match(/style="(.*?)"/), J = {};
        A && (J = a(A[1])), result[g] = { type: "html_open", html: !0, text: k, tag: S, inlineStyles: J, cls: I && I[1] };
      } else if (result[g].match(/<\/\w+.*?>/)) {
        var k = result[g].replace(t, " "), S = k.match(/<\/(\w{1,}\d{0,})\b/)[1];
        result[g] = { type: "html_close", html: !0, text: k, tag: S };
      } else
        result[g] = { type: "word", text: result[g] };
    for (var g = 0; g < result.length - 2; g++)
      result[g].t == "word" && result[g + 1].html && result[g + 2].t == "word" && result[g + 2].s.length == 1 && "!.:;?".indexOf(result[g + 2].s) != -1 && (result[g].s = result[g].s + result[g + 2].s, result.splice(g + 2, 1));
    return result;
  }
  function h(l, g, k, d, I) {
    var A = function(q) {
      c.fillStyle = q.color, c.font = q.fontStyle + " " + q.fontWeight + " " + q.fontSize * d + "px " + q.fontFace, p = c.measureText(" ").width;
    }, J = function(q) {
      return g[q] || {};
    }, u = function(q, be, Me, as) {
      var $t = {};
      return vt($t, q, be, Me), $t._lineHeight = $t.lineHeight == -1 ? $t.fontSize * 1.15 : $t.lineHeight, $t;
    }, C = [vt({}, g.html)], c = k.getContext("2d", { alpha: C[0].backgroundColor == "none" || C[0].backgroundColor == "transparent" });
    C[0].backgroundColor != "none" && C[0].backgroundColor != "transparent" && (c.fillStyle = C[0].backgroundColor, c.fillRect(0, 0, k.width, k.height));
    var p = 0, d = d || 1, y = k.width, m = 0.85, Q = 0.15, w = [], B, x = !1, D = 0;
    function O() {
      B = { lineHeight: C[0]._lineHeight, width: 0, blocks: [] }, w.push(B), x = !1, Ue(B.lineHeight) && (e += B.lineHeight);
    }
    function F(q) {
      var be = B.blocks.filter((Me) => Me.type == "text");
      x = vt({ firstTextBlock: q.type == "text" && be.length == 0 }, q), B.blocks.push(x);
    }
    O();
    for (var P = 0; P < l.length; P++) {
      var U = l[P];
      switch (U.type) {
        case "word":
          D = c.measureText(U.text).width, B.width + p + D > y && O(), x.type !== "text" ? F({ type: "text", text: [U.text], width: D }) : (x.text.push(U.text), x.width += p + D), B.width += p + D;
          break;
        case "html_open":
          C.unshift(u(C[0], J(U.tag), J(U.cls), U.inlineStyles)), A(C[0]), x.type == "style" ? x.style = vt({}, C[0]) : F({ type: "style", style: vt({}, C[0]) }), B.lineHeight = C[0]._lineHeight;
          break;
        case "html_close":
          C[0].display == "block" && O(), C.shift(), A(C[0]), x.type == "style" ? x.style = vt({}, C[0]) : F({ type: "style", style: vt({}, C[0]) }), B.lineHeight = C[0]._lineHeight;
          break;
        case "html_break":
          O();
          break;
      }
    }
    var H = w[0].blocks[0].style, M = 0, dt = 0, yt = 0;
    function ht(q) {
      return newVal = parseInt(q), +newVal === newVal && !(newVal % 1) ? newVal : 0;
    }
    function tt(q) {
      e += ht(q.marginTop) + ht(q.marginBottom) + ht(q.paddingTop) + ht(q.paddingBottom);
    }
    for (var P = 0; P < w.length; P++) {
      for (var lt = w[P], it = !1, pt = 0, Vt = 0; Vt < lt.blocks.length; Vt++)
        lt.blocks[Vt].type === "text" && pt++;
      for (var L = 0; L < lt.blocks.length; L++) {
        var V = lt.blocks[L];
        if (I)
          V.type === "style" && tt(V.style);
        else
          switch (V.type) {
            case "style":
              A(V.style), H = V.style, tt(V.style), (V.style.display !== "inline" || pt < 2) && (dt += V.style.marginTop + yt), yt = V.style.marginBottom;
              break;
            case "text":
              if (it || (dt += lt.lineHeight * m, H.textAlign == "center" && (M = (y - lt.width) * 0.5, c.save()), it = !0), c.fillText(V.text.join(" "), M, dt), H.textDecoration == "underline") {
                var Pt = Math.max(1, H.fontSize * d / 12);
                c.fillRect(M, dt + Math.max(1.5, Math.ceil(Pt * 0.5)), V.width, Pt);
              }
              M += V.width;
              break;
          }
      }
      M = 0, dt += lt.lineHeight * Q;
    }
    return e;
  }
  var f = {
    html: {
      fontSize: 12,
      fontFace: "Arial",
      fontWeight: "normal",
      fontStyle: "",
      color: "#000",
      lineHeight: -1,
      width: 500,
      marginTop: 0,
      marginLeft: 0,
      marginRight: 0,
      marginBottom: 0,
      maxWidth: 500,
      textAlign: "left",
      textDecoration: "none",
      display: "inline",
      backgroundColor: "none"
    },
    defaultStyle: {
      fontSize: 12,
      fontFace: "Arial",
      fontWeight: "normal",
      fontStyle: "",
      color: "#000",
      lineHeight: -1,
      width: 500,
      marginTop: 0,
      marginLeft: 0,
      marginRight: 0,
      marginBottom: 0,
      maxWidth: 500,
      textAlign: "left",
      textDecoration: "none",
      display: "inline"
    },
    b: {
      fontWeight: "bold",
      display: "inline"
    },
    strong: {
      fontWeight: "bold",
      display: "inline"
    },
    i: {
      fontStyle: "italic",
      display: "inline"
    },
    em: {
      fontStyle: "italic",
      display: "inline",
      marginBottom: 0,
      marginTop: 0
    },
    u: {
      textDecoration: "underline",
      display: "inline"
    },
    h1: {
      display: "block",
      fontWeight: "bold"
    },
    h2: {
      display: "block",
      fontWeight: "bold"
    },
    h3: {
      display: "block",
      fontWeight: "bold"
    },
    p: {
      display: "block"
    }
  };
  return {
    render: i,
    addStyles: r
  };
})();
function Ya() {
  var o = this.root.ctx, t = !1, e = !1, i = !1;
  if (this.viewport !== !1 && (o.save(), t = !0), this.blendMode !== !1 && (o.globalCompositeOperation = this.blendMode), this._rotation !== 0) {
    e = !0;
    var r, n, a = this.parentChain.length;
    for (r = 0; r < a; r++)
      n = this.parentChain[r], n.rotation !== 0 && (n._tx = n.__x + n.__width * n.transformCenterX, n._ty = n.__y + n.__height * n.transformCenterY, o.translate(n._tx, n._ty), o.rotate(n.rotation * Gi), o.translate(-n._tx, -n._ty));
  }
  if (this.viewport !== !1) {
    var s = this.viewport, h = { x: s.__x, y: s.__y, right: s.__x + s.__width, bottom: s.__y + s.__height, width: s.__width, height: s.__height };
    o.beginPath(), o.rect(h.x, h.y, h.width, h.height), o.clip();
  }
  if (this.rotation !== 0 && (this._tx = this.__x + this.__width * this.transformCenterX, this._ty = this.__y + this.__height * this.transformCenterY, o.translate(this._tx, this._ty), o.rotate(this.rotation * Gi), o.translate(-this._tx, -this._ty)), this.clip && (o.beginPath(), o.rect(this.__x + this.clip.x, this.__y + this.clip.y, this.clip.width, this.clip.height), o.clip()), this._alpha < 1 && (i = !0, o.globalAlpha = this._alpha), this.fillStyle && (o.fillStyle = this.fillStyle, this.repeatX === !0 ? o.fillRect(0, this.__y, this.root.width, this.__height) : this.borderRadius !== !1 ? CanvasUtils.drawRoundedRect(o, this.__x, this.__y, this.__width, this.__height, this.borderRadius, this.fillStyle) : o.fillRect(this.__x, this.__y, this.__width, this.__height)), this.bitmapData !== !1 ? Wa.call(this) : this.html !== !1 ? Va.call(this) : this.image !== !1 && Na.call(this), this.div !== !1) {
    var f = {
      position: "fixed",
      visibility: this._visible ? "visible" : "hidden",
      opacity: String(this._alpha),
      top: this.__y.toFixed(3) + "px",
      left: this.__x.toFixed(3) + "px",
      width: this.__width.toFixed(3) + "px",
      height: this.__height.toFixed(3) + "px"
    }, l = this.div.style, g = [];
    for (var k in f)
      l[k] !== f[k] && (l[k] = f[k], g.push(k));
  }
  t === !0 ? o.restore() : (this.blendMode !== !1 && (o.globalCompositeOperation = "source-over"), i === !0 && (o.globalAlpha = 1), e === !0 && o.setTransform(1, 0, 0, 1, 0, 0));
}
function Ge(o) {
  var t = new fn(
    Object.assign(
      {
        x: 0,
        y: 0,
        z: 0,
        width: 0,
        height: 0,
        scale: 1,
        alpha: 1,
        visible: !0,
        rotation: 0,
        transformCenterX: 0.5,
        transformCenterY: 0.5,
        _x: 0,
        _y: 0,
        _z: 0,
        _width: 0,
        _height: 0,
        _scale: 1,
        _alpha: 1,
        _visible: !0,
        _rotation: 0,
        __x: 0,
        __y: 0,
        __z: 0,
        __width: 0,
        __height: 0,
        __scale: 1,
        __visible: !0,
        right: !1,
        bottom: !1,
        verticalAlign: !1,
        onstage: !1,
        _onstage: !1,
        repeatX: !1,
        repeatY: !1,
        mouseEnabled: !!o.draggable,
        smoothing: !1,
        physics: null,
        vector: !1,
        html: !1,
        progress: 0,
        bitmapData: !1,
        clip: !1,
        imageLoaded: !1,
        imageLoading: !1,
        div: !1,
        borderRadius: !1,
        gradientFill: !1,
        blendMode: !1,
        zFactor: 1,
        render: Ya
      },
      o
    )
  );
  if (t.vector !== !1 ? (t.alwaysRender = !0, t.physics = t.physics === null ? !0 : t.physics, t.vector = Object.assign({ x: 0, y: 0, z: 0 }, t.vector || {}), t.friction = Object.assign({ x: 1, y: 1, z: 1 }, t.friction || {})) : t.physics = !1, t.image ? (t.imageLoading = !1, t.imageLoaded = !1, t.width === 0 && (t.autoSize = !0)) : t.image = !1, t.bitmapData && (t.image = !0, t.img = t.bitmapData, t.imageLoading = !1, t.imageLoaded = !0, t.autoSize === !0 && (t.width = t.bitmapData.width, t.height = t.bitmapData.height)), t.linearGradient) {
    t.linearGradient.start = t.linearGradient.start || {}, t.linearGradient.start.x = t.linearGradient.start.x || 0, t.linearGradient.start.y = t.linearGradient.start.y || 0, t.linearGradient.end = t.linearGradient.end || {}, t.linearGradient.end.x = t.linearGradient.end.x || 0, t.linearGradient.end.y = t.height || 0, t.linearGradient.start || t.linearGradient.start, t.bitmapData = document.createElement("canvas"), t.bitmapData.width = t.width, t.bitmapData.height = t.height;
    for (var e = t.bitmapData.getContext("2d"), i = t.linearGradient, r = e.createLinearGradient(i.start.x, i.start.y, i.end.x, i.end.y), n = 0; n < i.steps.length; n++)
      r.addColorStop(i.steps[n].at, i.steps[n].color);
    e.fillStyle = r, e.fillRect(0, 0, t.width, t.height);
  } else if (t.radialGradient) {
    t.bitmapData = document.createElement("canvas"), t.bitmapData.width = t.width, t.bitmapData.height = t.height;
    for (var e = t.bitmapData.getContext("2d"), i = t.radialGradient, r = e.createRadialGradient(i.start.x, i.start.y, i.start.radius, i.end.x, i.end.y, i.end.radius), n = 0; n < i.steps.length; n++)
      r.addColorStop(i.steps[n].at, i.steps[n].color);
    e.fillStyle = r, e.fillRect(0, 0, t.width, t.height);
  }
  return t.html && (t.htmlLoaded = !1, t.bitmapData = !1), t.plane && window.CanvasPlaneInit && CanvasPlaneInit.call(t), t.setImage = function(a) {
    t.imageLoaded = !1, t.imageLoading = !1, t.image = a, t.bitmapData = !1;
  }, t.globalToLocal = function(a, s) {
    var h = Object.assign({}, a);
    if (s)
      var f = 1 / s.zFactor(t.z - s.z);
    else
      var f = 1 / t.zFactor;
    var l = t.root.width, g = t.root.height, k = -l * 0.5 * f, S = -g * 0.5 * f, I, A, J, u;
    "x" in h && (typeof h.x == "string" && h.x.indexOf("%") > -1 ? (h.x = parseFloat(h.x), I = l * (h.x / 100) * f) : (h.x = parseFloat(h.x), I = h.x * f), t.x = k + I, h.round === !0 && (t.x = Math.round(t.x))), s && (t.x += s.x), "y" in h && (typeof h.y == "string" && h.y.indexOf("%") > -1 ? (h.y = parseFloat(h.y), A = g * (h.y / 100) * f) : (h.y = parseFloat(h.y), A = h.y * f), t.y = S + A, h.round === !0 && (t.y = Math.round(t.y))), s && (t.y += s.y), "height" in h && (typeof h.height == "string" && h.height.indexOf("%") > -1 ? (h.height = parseFloat(h.height), u = g * (h.height / 100) * f) : (h.height = parseFloat(h.height), u = h.height * f), t.height = u, h.round === !0 && (t.height = Math.round(t.height))), "width" in h && (typeof h.width == "string" && h.width.indexOf("%") > -1 ? (h.width = parseFloat(h.width), J = l * (h.width / 100) * f) : (h.width = parseFloat(h.width), J = h.width * f), t.width = J, h.round === !0 && (t.width = Math.round(t.width)));
  }, t;
}
const ba = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAckAAAIBCAYAAAAibEQ1AACAAElEQVR42uy9aYxkV3agl5VRGcvbY8vM2sgm2SvZbDZ3sllkkcWlWKx933Pfs/a9yKaoIUCo5W5ZkBqyrJFGbWum3ZDH8njgwQCCNNOQ2+1Wm0PTRLlQKBQKBRiw7F/+6b/X59wX9+WJE3d5kVlkN8l4wEFkRryIePHeffe7Z+/r6229rbf1tt7W23pbb+ttn9/tvSMHf//dfXv+4KG+vruP9PfdfbTQf+c7/avufrdQuPNEceA2yuMDhduPwfNKnqyUbuG+31gF+5cKt8/v3v7j3pnsbb2tt/W23vaZb3/4/ttT99eC63WA0ga/dOuhyL9xPzw+WC7d+mqlfPMblcrNb/n+jYeD4PqjYXz9O2H8yWOJf4PK4y15oiVPht6Nl4abH76ybvhXj5UHbj+XROKlwYZ4NgrEi42a2JjE4qVaVbzcqEvZVK+JF6uJFHz+e9VYPBP64sWhhnihWRNPJsH1V+5b+8tH/OKtJ6rB9fVwLMPl8s0ff/D+8d4V7G29rbf1ti/I9u6OPX/0nb7C3Z+99/4Y/v8UQOfh/sKdB0HL2tgc+vDRin/zq4WB218vV24+UCrfWun3ndy69U/PgHwTPv8bIM/6wY2NfnRjE0DsGfh/MwBwE8BwU6kodlSrYlsYie1eIHb4odjjRWKvH4uDfiIOhzVxPKyLE1EjlTjWykiUygl4/6GBkjgOnzVVa4hRLxTzjSExESZipBKIiSAWk/D3dFyTMhVVpeBzKLNVeA/sd7zkyfdONwfFwWJJHKl4Ym9/AY4tEbujGhxncuO1YuXWK4XK7RcLpdvP9w/ceXagePvZUunW1W1v/clfXX175t09+/7g2p49f/BfXb0687vHjvzege9+59+e2PjCTy+CdvtlHYcvwBjc1F+6s3nAu/1aKbiFgn9vKpTv4PMdgs8T2eKHN173ghuvw3h9DcYqCv6Nz+Fr6jmUV0uVWyibi2UprwyU4FoN3H4ZXtsMi51NMAYfhbGIY3Tr2rW/urpt25/8N2+/O/XfffDB8Z++997YT957d6I3c/S23vYF3L4JE8YDq/rvIviejZNPni77N1+pD370IkDh2Wrt42fgOYDkJy8ODonX77tfbAQQfG9wWLywbr14NK6Kp9et/+V3Bgd/veuFF35q+o4FmPRrCMBm/aMNALv7ioXb3wxAm2tUP3rU925svu++f/j26gHxOnzm60NrxPcAYNvWbhB77lsntoLWtmfNsNg1NCi2xJF4KwJAwuuH4RgO1JviSG1QyonakJTRZFDKSNwUI0mildE4lYmkJg4Xy2IaPmcsSiTojqwuiSn47WN+lEFSwZHLOOyDoJxO6uJYsSImavDoB+Lk+g3y8xGSoxseEPvh+LYATA+uuU/sW3ef2Azvexl+w4thKJ71PfFSoymehvc9A7/txWZTPBkGYhP85qeadfFkrfrxt+Pg+neS8JPHm40PNwwU7jxz/4ZfDBf779yfhNfLcF73bHn9z9W5Pn5o328VVP/4g/dHHqglH1cLfXcfbFQ/Xg8Ln2axcOcr1fCT9X7lJsr9oX/jgTi8/rUk/uQb9epH34Lf+cjQ4K93Vgc/3l0fFvsG14n9Q+vlI/4Pz4sdSVM+7oJrTgVfV7ITFj4oO6r1NlHPb4frT2UbjGeUt2AsoGyH67Kt3hBvwJhB2To0LN6A517wffEkLNi+l1TFd72KeKZWg3shuP5w4N34Wmng9qPw277hl2/eD7+nVijcWQfXbgh+Zx2e6804va23/ZZvI88/89fPVIq3NuOqGm5g0MBuTNQHxWRQE0cKRTFZDsUiQgJggRP+JEwSCJNxmDwQBKg1HQftbSQA4IDWtqtvtdi9uiz2geb3al//3VcAuG96/o3XQcN8E1bk2wrl2/vD5JNDMDntAc3tIGh9x6o1cRRAgZ+PnzcDoJmL62ISNLpZmJxmw1gswHeOlUtiEiAyD6CcBnCgnGo2xCJok9MwUS0CiFBOw2SFcgr+PgnwORlEYhG+6yRAxyYLni/OwvtmS2VxDo7pZBCKS7AIWITjQsHXUU7B3yin4XWUM/DZp/FYCwNiASB7Hj7jDGi3+P4Z0CTnQZPEv8/BOT1VjsSZoCrORXV4HrTNgYqYBa33NEzo014s5uF5fMTzPgv7zcBrk+VYjBdh3wp8JsBgCh5xn5kQz1EixoM6aLqJOO5XxRgsBg6Wwlv7QcPaAprX3lJ0a0d/5c62vtLd58oF0FYBqgBUlKdKhdtPAqAeg0XKdwC234a//+LyxZP/9bvvTh166om/yTuG/t0f/2jvX71zde6Rgb673x3ov/N0uXBno1+69VIIGn/i39iUeDdejbwbb8F42F+o3DlUDAQ8ioMDvjzmERxrpRAWJdVMxnwYY15NTPjwG4OGmAqbcI3hfMK1xPGAgn9PodbfEnydC+6jBN8zB+MJZR7GL4r6n75mkqlVq8VpH8cSXJ8CjEUY5wt+es0W4oYYhWs7VonFAXjtaDkQR+D/0aghH4/C87tg/7G168V2GOMv960SqLE+3b/q7uOFVXe/XRy43ZuNeltv+y3avrEm+fiJdfWPnh+sfrSpFouD6zaANjYk5u97UOwfKMubfa7WFKdhBT5VBjAAuFAzOgqQOFr2YGKLpCkStSYE5JGSL2YH14sTMOFNDK4VB0DjOja4RuwDqO4EaByAVffBxqA4XG2KN/r6xXHQ/EaG14rdAImptetA06uJueE18vNQczvVgO/FiQ6/ByazMYDP2eEhsViviVnQIJUgKGeCAPaBiRPANQcwWmCCgESZ8zyrINAugmYwWVgtYYhwQ2jOlSsZ6BYJIBGEKGeDVK7C7ztVAVjDvnPwWfgZ5+Gc4XtOA6yn+4riLEABIbkIEDwJ5w1lshSIiaIPIPRbUAzleT/bXCuBOAsQPFkdlpBEmCI8UabhXM+Dlny44Emw4LnHhQqamI/C95yorRGjjXVirLleHIma4tV6LDbXIvFKNZSC1/2laiR9qc8nEWirg6C1euLpWiKeAy3/qWb1o4dB2/lmpXTrgf6+uw8BYB8B6H0NYPswAPDxRvjJUyCPAwCfjUPxvXokXoLPfKURiy2DNfHmUL0lNfFWsyrHBUIcwYjHioJ/jyLsq0NiEo5xImxIQfAjIBUkUTjI1P84PnARpcBnEgVSDlp8Dl+jz+tkEe6DM0EsToWwCItq4kzSEKfgEa/ZXAjjEq0WAMTp+hAsIuvytx0G+E/AbzsGi5mJoXViO4xjhOTIffdLLfVlGL8v1xPxVBx+8nVYtDzeqH80CFr2to3P/DVaXH78ww+O9mar3tbbPsNtS1/f3X1+cGN/oXR7FiA4hRMyPM4UPTmpn+jrgwkZQDAYi7GoIKaHfHE4WiWOxP1irgEgCQfEfA3A5vWLiVK/GFvVJ2bLq8VZmHTnKiVxGibLBYAXylwSS63vWGlATMLzk34FJhRPXADYnQbYzUcAX5hU54OSWIwqYiEsy78X/AFxMiyJc3WATCMALa8oFuF7R+HYzsWBOAcT/WKAq/gSTFKeOJUAoD3Q4qq+lPlaKnP1QMp8I5QynaQyVTXL4nBDTDcS0AA8MVlDDWBAzMFEPwuT/gS8Pp6ANt2SGQDMLB4/QGYOICN/XwTH26iJqcADbagME78v98XPvvgAQCtYLUaikpjB85tUxHgVgDoMEzgcHz7OA2DwM6fhPE158HqpCPCE8wHncTyE61FF828ZvhuODz5nFn7nQjOR75uI4TcDjObg+08OD4oZgN3R4mpxvFwUC4MNcQY0fpRTXihFLSIUKA6BpjRfH4TrXpPWge1wvo/DYucIQGEMFi07Afxv9RfEQQD+XpjsD4H2jmZk9OHOwOJmDmEVwQIAFg6oceFi4gyA5WwplSNeQYzBceNvxd+Ogn9P1wIxAtd8KvakzESpzMLvQZmD8zdfxQVTUcoMjA0U9f9sVIbvrrQJPqdE7a9em0+8NlHPq/GTjSO23ywc70xclucdzz+e9xm4VyZh7M7BAmECFhjjAVwzuHbn168TRwbgXmk2pczWYbFUqohzANvLsBBDy8VkBc4BXofBQXGkEogDsMDaDOccF5K7YJGweVVF7Aia198YCG9vKUa3/uIH//nh3gzW23rbp7QlSfLxNs+/sa8c3JwAzW0cNEM0ay7GDakpnoMbE7Um1Hhm/KKYCmEyalTESLJaTK+LxIl6UU7SpwBak0EBVvCgFcEkgZCa94oAtQoIaFEAB5zQp2GCR00PIYmAnAKIjANEzzRgMoXV89jAaglIFATceZzoAZAXQes4jRMWTJoIyNNJWUyX+sTZmgdaG0w+ADn1fQhL/H4ELIqa7HAiQ5lqyTRMbqnYIYkwQ9CcAAAjGBGKxwHEMwAeBc2J1n4KknOgBShIIhyn4RygzMJvXhxEMyhM5PC+WQDviA/nrYkBPZEEpRKEBUJzFI51FGHfBCCXYVKPQnFhzTAsRopycbEwGIhRf5UEP07SY/5qKSfhnJ0oFyQgR+HYEY4n4FzjeZ+twzVdOyxBeboCcCwDxCupKEhmpstWENIJNCfCeBivpXIYtN2jAM6RwSFxHCb4E81BcaJaB3A2ZFDSbHMo9ceihgea1hyapUFbQo0aIXkevvcifiYAcaKOJvtALg7wd+NvnoBrNgkQmobFDoqCJBWEpYKVghiFIf69CLBVwiGnIKj+pu+jn0nfx4GLC6+TzUguTHBczdZCKQhKfERI4piYhwXgCbhmp9asEWMBjCkA4nS1Ks7D+UHTPFofpkt4fSNprUGYTsLi5Ci8fgy0UITkocY6sbe6RuwMm2Jfba3YkwyLp+77+j/M7j/+w49+/vOv9ma03tbb7tH2u7u2/cnhYnDrKGiOOJkrwUkdJ3KUedT8klhOykrmW9oglUXYR/09j/sQ0T1nkwXN56vn8XsQtCjqO/G1U3Csp+G4Uc7Ab8BHfO4kam8obH/6Xfj8PExOXNA8i2ZaJfi/SaR2DICfDXwp+Lf6bPn5OX6j+gwqpv1Mn5f3ezq+l1xfncy39pnF39gSNTYW4dzSc6mOQ/0G+Ro+j+chRh+gL0W9f4GMHfob+Hmgz/PrtxiGbcJ9yqcTgBDASAn+fyqO5Wv8ffg8Cu6j3qf+Vq/Rz8b3ua4Pvxa6McjHJx1PrnsGF5pjsJCdXDv8q//pvffG/t+//Xffdt3/Qoj+/+8ff77+/4F9xd2Pk96M2Nt6G9keKq+6+2az+hFAMjWHJZEWknSCbJs0LTDLC75uJxUXJCkolShQ6iahNrg4IGmCo9pXfS6HZAbhnOejAy7s/HR7HvNCct4hJnAqSKrrcqpWlUKvj4Iw7o9wRXMxinpuPsf40YGT/j4bIPNAUsHPJRyOSrq9FjpI2hYJeSA5Xq2J0WZDHASN/s1G/MmuB+/7h3f27/qjn/3gg6M/++EHR//7P/7R3v/hj3+0/1+8e3Xu7b3b/uTAww/93da1DbF9w5DY9rUNv3hxQ/2jy4d3/NHPf/aTl2/+4u+//k//6T81ejNlb/tSbt/BVIBq7eORCCa0aFAGGSAYlUhAtrQFDknXJHwvIckhkQeSJlAuMm2l4/sV7KJYCgelCY5KFAh1E7gJzMuBJH8/hX+3QO1GXN+vNK+ztZoUCkoU9ZtQg0R/KorSRnFc6cBDtTodpKjG54pOVpogFQpJDlCT1tgBxyBIxXHeVnK+88jbIZz7QlFcjmviZCUSl9ZtkAF2aKodhedGYswHrsu/Z6qDYj6BRw/GdqkiFoueOF+qineSteJqskbMe4mYqw6JA8Xg1sjadb/8H69enfu///2/f7g3c/a2L8X2zeLA7Rf94Mbh4TViCpPhCz7cFEuaYya/ZZCkkzKHJApqizZQOr+XAFIHShsgFSQp5PIAbqWaoAKQDpQmU/hKIGn6XmXuVMBC0PDro7RrnSapg6SCoMncSc2h/Pk8kOT7Kribvkv3mW0m3hzXwXTt7gU0rwDwLqGP14f9S2mkroLk7NBaMdlYI0aTpsCF8RQAc7HWkFHp56p1cQkWydeiYTHdt1qcq9TE+foameY1PbhejK3fIPYNrRH7Hnrg52/cd98/nNm9/cf/6kc/2v/TP/7DvX8JWun/8rd/+83erNrbvjDb46BBHq9v+GhkNUwK1TUyl+tMsyHODjY7TGkckq7Jm04kLv+Qc8IxvIdPju0TWNAGSuqfRFnuSj+v75Sbck2AMU2WLkjqwMTPP5/QXZN8Wx5oTlhqAdmCJIUR/176W6ifUf0O3bFTE6luXNDx4jKNusCn0yT5/t0KH7vqmOnvU/u6zrnrupyKS3DsFXESH2sIbV9GieM9jFr7nDyOWAbfYYDQyXJRnFxdEGeKBXHBK8mAvPNDg9n3nW7UZfT0BLwX841PrIb9602ZXjRSKItZDzTRSlWMF4LbC2Hz+s/efXfiVg+Yve3zvj3fX76z328AGO+H1eI6sRgk8iZS0ZIcktTv5Jow807G3Yhp8tFPYGGHUEh2o025wJXHH8vBuVJtQmnP1IRJ32eb0PNM9suGIzO36kAjIUcsAPw30ffz9ymxgT+PT9FmPtV993LFBU26mKC+Ude5dgZeef0yFep8M5TR3JiqhVHP6C9O/cZVGa2MOb0IyQtwf1yF5y9jVHilKCF5cc2wfA9q/fgenBcwAh0FU3gwNxlzdM8PrYfvGAQYr5Uy2u+JnV/9mnim0fwQ82ZPvLz5J3/xgx8c/v2rb8/0Zt3e9rnZHh0YuP1aoXRnLGrIUP5j/avF6cGGmFubiMmm3xZEMc80Ih0MdSYv2yRxr4Bo/j43JG2BOy4TZjcaZx4AdjsJ6gBJxXT+807ueX16ps8/EycyTUgJ/o+C1YmwaAICQZk01ecoAMq/W+/H/ZWoz5HaT6z/jtMt7cg2drgP0madMI1hCmyduN6vzrGCpDof6ve7FiGu8TG9PhQnGgNirFESh4M+MTkYiLEkzblVOaaYr7nQjNK8YMypTQCOtbLMccZUK9RAMd3qNAB2MfTh+OD6DdbFFEBURYzP+6CVemUAricmVvdLOd9oih39RbE9qop9Q0PiVQDq45WKeMQPbvRm3t72udme9P0bO8OqGI+bEpLnhtfKnL0xuEnG6xUtJKkPkGsMulW/bSLtxkxlW6Gbn48yOHKzK97grhSQlaziefQqP2/3ApJ8f6pZoqwUkq5rwiNCO0yiLYBRcFFIIhDO1esZJLkmpQCJ+ypRubmnsAABA6X6W72edwx1A0mqqeq0WxMkTdfBBknbAijP+EBAjjSLYrxZFlPDvoTkZN2TeacIR5WzmeUHAyRn4b5Hwb+x6AbKuUYsC3fgfYOQnCjBYrqeSGiiyEhxeERI4n2F+6CGOlIfEnvqg7KpwMayJ16Aa/1Af+HOA2Fwfc/rS/WCe1tv+63cHml1x9jpVcShMBDjSShvHrxxpqppgr1Rg9H4bNSkSIUHyigNjooCmS76VH2u0jaoxsEDL/RgjayC0ZamyQbBZvKFcp+XaZLFCEfqe6Kv6SI1Oz+D5HQS/yo9d3QhwH2v9H+6UFCTHf2/Iz0GJj3+HXQyRHGd3/Nwbi/ARI9yDs4pCv3/DB4HTqotwf+xApN6Hh9tQt+jhP5PNcw8okBOgc6fk/BtCX+tY19yrfj5V4/qnOIjvUd011V3reh1odCS31VD0JLPaR23Ko+ofo8a03NYrQgFqzpVvayow0XYB+Uc7HMWxvQpmT4Fi7+kBdtGJAs/jNV9MVrzAM4+wDloBbTVZKH/feVAvFkui42VstQov1ou3dq3+cV/2ZuJe9tv1Xb49c0/eWCgcPuJOLy+MfBuYFeMvQCDwyBjcSAmamkFE4QkltQyrVoVJFyQ5JM5F5yoOTTVc+k++pV6fu1oZZDUga8b/6mCJA/O0AVs6LQxDkg6yaqJ17TA0AFTfQZ9P1+80H11EzU9Ftf5RRAqUOogqeB4Dq45h6L6n0KUC30fhyRO5DpzLDXf0tfaNFCmpZog2DHemeSBJH/edc+Ycn4pbDOriQOS6v8skCrBykNhVqbxgheJS0EiLsFvRTkfpaDE84ufi/tKbbQeSkiONwIJSgVJjAaXFbqiqjgEn7Md7odX4L7CbjUPw+ODiX/jP+u1COttv8nt2ULhzougMW7zohtHkqGPDxS820dXhzKUexy7QcCAR8HSamhmnQs9WSruPGiXF3zPampC0a3GdZDkN726aSkQFSApOG1BG8okRSHJNc97Acnl+lMpBLn2qc6pKe8vS5kwQJJqIVQzVOeOT7x8MuWRvuq97QuUTg2NQ8wlOKFegN+DghMsykX4bSjyuSTOIIqPCqQKrlwUYJVcqte07z0L1w6FjkUOSBQOOq4luiC4Ekjy+8F0D5juIZNGScfI+bgGGmBVXABAoZwHrRDlbEuwXi4WYM+sHSqIqpbKTD2W5RGxfOFiHcZjbcmEfC5O5UIQyxSTiwhU+EwU/PsCaKEX/ECOATyfGOBzPPDFftAut8G1eRWef6y/TzxW6bX/6m2f8fZQqXgLOy48G8efvAIa477aoBjZ8IDYU4YBP7hBnBr6ikwKngrrsj7kFAx4rEMqy81FvoQkAhLFBQeX+SrPqlgXVLP0endRhJ81JF0+Ox0kqd+NR1F2A0mTBmIyYes0Qa7Bty9Qog44ci3OKQyS+IiAvAS/TUGSQk/BzgbHi3DNlCAk8VEHVGnOzaFJcr8pNaNy6HVtviXXxQZJfg2UnKtX9dfFcn2puCCJgJRdStTCrVUZSUESAWmDJLZ4uximoEQ4XobvuALfp0B5HlvJoTUFi+KH2Kg8FIfgfbvgc7bW67KrzHfKpVtfHei/85VK4c6+TS/8dPvGp/61bl77L97/4Pjakn/r9j/+4/reLN/blrU9Xyrc2Q4D7kS5fPNac0hcrjXEhaFhcX5wSJyLquKKTA5uiEugQWKHhd9prkl7GEZLASVqZagGuSmAxjRpnGfi0j7U81RboeYzrp1yc5drktJNHG3ihGQnnHSmT52ZLN036qgFygOaeLBKe1CHHo4mM2vHpMvOMzVFSnOk5tp0oy26IIl+LDTTXY6XTHZX4LogJJVGqaCJjzatUQdJFAVX3XtoRKzJ2mF7fiWAPNsa/+pcZCZgzT2h9jkPIGo7h/g/A6UJklpgVhviZFIXC0kiBdvDoagqWqrkJKaEIABRVHqITBFJ2q0ImZbfMruq66qsBHjPX8BAK/z92JdVNjFImwmovFiE5SQ2LIgS2e5uP4B0H3zWTlicbykNiJcHVt19qdAnZSPA88WB4u2XC8XbrwyUbr8GsH3nzW1/1pvte1tX27mxI7/3UH/f3S2D1Y/G1q+THQQQkrKxL4bZ1xvianNYnK2E4r3GWnEVNMh3QLuc71ud+iXipfqaOLgvRdXMbGKK9jNNCuomUZJX+9BNwPK9mgmM+o2MZl5i7vosIGkKRtL5G6nWSDVfbj5O3xMYg3FMATrUbGc6t2rCpubU5ZhUXZBUUETBCRXlKoyLy/B7FRjxUYkCngmQOqHaJ4coTx0xgY+/7oKpbcy1CYGkLihJLgRb5xEBaYOkS5PUapQOSCqNUdbZbUlWXD5J/Zl0bJggmVkLCCTPyd8fZK3p5KIP8yux9B189hQs4o/BgnwMFvG7KhVxfN0asRPG5MF1Q2LPUF1sAbhuBU1zM0D0xVUFsQfmtN3Da8Qb1cGP/uaDH/R6ZvY29/b2G9v+7MW+wt3dA97tMxvuFxeag+LKcEN8vwkDN1wt3m2iP8CHCQkmJnju2iCsFP0BcSZK+ypeGqzJ5GLZC7LVgkqZW05LLSzpWoOkgERxTaJqUtABUt6cjhB/VwDFvYCk6b0mULb7/6KOVAPqj+SQVK8tvccdmKPTZpXQc0vPO48INYHS5h/MIwhHhCKKgiX+fQ0Wb/g3h6TyVXINk/oxqfDn6L4oy9Ukc0NwhZBUmqUWkMxPbPLrm6KTU3N6Td7LS8F3QZvICjyxD1qfLy6EqVzyfXE1CKScrPtisYbFB0ATxNZzNdi3HsicSQm+avr3yXooZaEWScGIV+xXOt9svb8WwPvSc5ECFq9Xat06Uw7EBQR5yROzFU/MlCsS1pOVsixgcBkgegnmNuxfO7K6KOYG14rdSfJxr25sbzNuD5SDm98GMG5fu+FXh9bcJ6bX3i9XZXgzICTfgcF5ttwnriYlCUgsNXU+9sRpLDFVhUHXjMV0sT/trVgLW5KuGpfy66otYT4/g4/GBMkLjVo2ARgnAoM5EH2jNIDCFIVoguW9MLe6IKWiCXUBMulrS1VUeH4oNb2aKtKY/I2mlA5ulqPnmGorSps8YwjOycBKgmGWA0sFRAVFFPq/AiHVLCkgKTwpEJV5j4JVB848KR+6BZgNlK60j7bo12VAki5qTIE7Op+0PoXHDskFmBdQ05N9V4NUFCSvYcBNIwUlAvJUPQXkuUYoCwxIOMaploiARBBio2tseI0RrwhJ7Ge6UK20QRI1UAVJ9JeeAvhdBI0XfaPn6g15zJifjSXwsNrPbKks5gCc19ZsEFNeIEaCRIx95SvirTVDv/4//7f/eW2PCL0t27DG6i4/uDFbbX4068ON1mxIuGFS7+kmDLZGyxSKvh8YSJfDageE+ETo8kmZJgYaDYgTyQUY3BcbzbSKCtlfJX/TyEFaRYUmidsqqrhMZDotgAZm5JnodN9h+l+XN4fBCSgU3sqkaVoEcJ+U6fzzY6OBJzRB3xSMQif+Nu3K4CPOxgRMVtSM2eHzkxNemEGLa3TKxEpNre/AOHkbxouEJj6H2iXCE4GKWmfr/6strRPfp/L0OsyzBJjy+5kZlmue/Ph4oE9bZGwYaM+hKVWEghefX/Q7zdlal4LG3KpzN+Q199Jj4z5/5YumPmn6fEeglmOhQMeUrsiDuq+X699VsRL8/pE5mvD8zHDjw//47tVembve1tf3iDdwe8f64V8dhglmDDu6+6osWZSaSQGQJ+uxFpKmHDRbsnamWTggqZ14HWYqXSi+ruyYDWy0vJnOnMaB0a3khWQbEHVJ5hoTJg+ccUGS/+bPEpLU10cDZLK0DQIoCkklCDjqk+Sa5FWDIDyvtPZHn5cNkjRylkPSdFxKuKbcIWw8msaBDlK4YOKaus43zMfASiDZEdjGFsgUkCZLQtsx5oCkSRN3BUXlkaywOruHZI4mLNpGQXMd2bD2V7+3f8cf/dPPe4XUv7Tbk6BB7m42PjxSbYiF+hoYMHXpFL8MwMzMfrUolSQdvGjGuBTVrIExJkjSVWceSHHNj07EfKVtgpquPqc04xItUxsoRDRQtY/uc7qOSjSAMw8k2yZNw7k1TUod+2vOOdXCP21I6tIqqOnVZAZVGqbSHpVGqECpfJQ2QF5uRcMqQMq/CSS1fkoezOOAuNIaTSZl2xjKY6HQRW5zSHJQmgLXbMdgGie6CHIObW4GbvNd51xUcm1ad35sVh+T0MBBGXmfBQil5ufzw0PiBDY037BeHF+77pf/8YMPjv5Tr+vIl2t7uFy4s6Uaf3Jw7RpxtNaUuY3YDFmGV3tL/jCsfIGQlKYJGXFWk5IHijZIum5ENVFTU6opWdt1Q+i0UW6KtYnu82wgtr3fBUmXbyp7j8bfass97NjnN6xJcuhQqOSBJIJN+SVVJCQN3rEBEuUCaGM2SHb4JIm2q4MkByWHJNeUTRqQOq+u+4O7OWzX2hXd7YKkbkFqSrXSlfCjkbZ5IcnHGL3v1LxgA6g7hWvJjy9jHhgkMWXl1Pp14hhcq5H1G8SeNcNi91e+8vOdX33oP5zZuvVP//qDD47/qw/eP/7f/uGP9v+Hn/3sez2ifMG2Jwql2/s9/8aF9Q+KWQDebBHrKCbiWtIU0319clLByDSMUEOHOUaV4aDBgA9MIkbJo8nozK+89qXOlJLnJnGZYG2ANJUF47CwfX4euNpMxabfa5o0+XHmWZzoJk0KSds5+01BUoGFa2YcSAi3K8S3yE2uJk2SQ1LlWvKgHhrwsxxN0hWQ5IqE1V3/9oC2Tu1bVyHIdAx5rR4d405d51qivbd15n8tyLuAJHd/3AtInonxsbYUGKh8yq2F02yhIC7GdfHO8DoxU4JF2Zr7xGw4KBYb68XZNQ+IhWSNODt4vzhUjsTexpoP/+37HxzvkeULsr31xBP/ZlO18fG+iieOD2DRYdCoqsPiclgTc32Y3jEoLkqfR9ABSUwnwJBqhKQpzJ/7xEym2Lx+RpPPhjvutSYhA+y6CdwxwTSPtmnTIm2+F92k0DFZ5jRx6xYxtsAJ3WLi04QkByXNl7NBCCFH/ZJtWmQrSEcF7NCgHaVRUkBySCIgeVQsP1aTL1IF75gq9VCfJDXj80Az2/WR+7PP5JB0RQfnsb7Y/IFGX7fBR96RK5sTknkWrsuBJAISJYuWb107ZYb//jDMidWmOOWFYq4C57S5VsxFQ2Lcq4npaFCMDkQSmiNxU7wVVMUbw2t/9X/0Uke+GNv3VpXujg4+IM5ixGgIg8qLJBwRjBKOlZIM28Yw7IWqL8OuEZSYX4Sa5AXQPPF9eQNHjInhjmCabhz3Ngia9jGZWk0RsVz4PnmrrVj9PKwvoun7KYRsKS+2ySrP+f+0fZI0spVP+HkgSQsKUEBKUyyDJIclD/xRcEM4XqnXO/2TLMDIlkNpgmQb2DSQxEhu2rbLFFl9rlrTApE+R6sG8cCovJDUWWCU8JgEVxeVjgVbzvJ8pmIMKw3cURaxpfQydZ5CKXgOcVxg7Vgsh3cBNEasKnY1bIrfra4VH4Bc7vfFmVIkS3HujxKxc3j4V//XL35xX48yn+dUDzSzrvvKL/f7g2IRBwBcfKyzeAlWQghILBp8ESdTvyxzlOYTT8zGKSgXWz0E1XtMKR+0RBYvi9WW0+iYpPlNwH2TNOWDTiwmE5EtMCfP6y5I2qISrQEYjqhX0wRmi1y0LV7Ua7oQel0rp88CkrwEnC7FQmdupaBDQKr0DwQoBePb+BqaYclztBgBh+TVRqOz2ADTfHVgpObavJocD5jSnWsdvFyQxNqzqv7sciDJtVqeAsJzLzuub71q7L5CA8ds9z09JzyIZ6UpIFhOE4VD8kI1kiLPE8yHlwGk1+K6uBLUZNnNKwGMsTKMuUIgroE2eSUeFCeKgTg+OCxrxj4ZBtd/8sMfHO7R5nO4fbtQuL01jK8fqQ1LcwFCr732Z9ovLmtpQ0TWWWw5uC8maIaqG8uN5S5Y7TBV2gY+N3eazJnqZsIVulqlq5wrW7SqK3XEFjnLAy/yTgY206wuoEYXNUghaWr1lO3P8s+Uj0d9Fz9/dLJCuYjPV2sdNXWzikgsxYNrNbqJm5ojbZVwpLQgSYsKqMhWqWEa8iSVuZW/h5tbOwDIYG6CpA6q+jqx9ewc8vOI0ZaX8JzjOGi1npL3Xmt/GY1Z7czFpP8jIPnz6m/Z4aR1T1DtlY5BV0Uh0+KMR7eaLBu63Ed+f+si22mhBpUOQ8euLiKe9vPMINsS3jBBVQhTFX+wgIa6ZmlebSKLrWNhhMtBIBdkWEEMGzqcgHlxF/y92QtvLL68+Se3etGwn5/tn7//3timoaFfH1izThxrrBVH+j0xT3o3Ym9CbHSrICkbnhLBChpLodIpKG01OPPU5nRpcivtkuCqqOOCJJ8oTNByBeroNFrXb+L76oIpbOeeQ1Jb9FqjIdCJhmrtuknUNMErUOaBpMkUqItu5ZBU/kRuas3yJluiM7tepQE+GkjyUnYqcIdCku6nE3dt2FrH+VMtolIILtUpVYBEcOKjrIPMtEResEB1MOF9NuW5rVW1xTa6Sm2yNBPIA0luudCNfxMkbZG3/P7S3b/nyDl3QRKfo5DE+tMUkhdljep2SL7qR+IZzxdPJbWPf3z16tz//vd///UehX6Lt3/5wfsjL8ThJ9sbdbF1YLWsjD8Nf2OfR5RJgKASbGs1nSjxs27iql4jDawwaYl58ybzBCmYTHrUZ+MKYbc974KkzSdigySvDmSKwrMduwnOmabqOMem60E1edd5N0Xxnm9pQSZtMp3c80NSB0wXJGlEK82PzIRBUplcM9MrAWQeSPJj1pW241C1F0+vdmiPVDAVSwESzzE/31yz5RGtbeeytW+bWVZjTu1mEbqce17nkzQtZPP4+E3VeWzR7TzwKTvWlmDhFBSVH67+V/BU5RklQFsl9FCBwOIEsmVXJRB7i554va8gnu9bJTYCSB8rV25+o1K6dXTL63/+J6Cw/K9/93cP9sj025QPWSnffAluEMzzOQSrT4xqxSTZ8ciTokCJgNRBErVKCkkFSlPgCNckTVGWupvU5cOj5r/lJvO7igxQc69Om7QFCulSKLoNVXf5/fhK3mTmdvZjtJirbUUadJCkWs+SLA+S2f45IclhmUGTmVo5JCkgpYbAgJe12MpaNbFOIOzYeB5nXk3SBMvTQShBSZ+n4DSZWnUdTCgks301/kZ6zV0+0TyNsfNAUge4vJB0LXatPlcHJCkoF2uREZIoCpKzUSJGvVAcqIRie8kTW7xYfM/zxKMDRfFw4IlvgXJS6+sTf/6HP9rbI9NvCyD7+u7uaA5/uC+qit3litjrl8SxwVjsCQbEeOhLGYsDMQ5QnKhGUrDVTNr2plWRojXJZxV4kjR/sptSdDpzzEoh6fJJ6qrXmAJN8kLSls7Bb9qVQpIfe4dv0uAHNnVE6SgAbynbJ6MXDT5ZdQwXDdrkbwqSHJa6yFYeuEPfx7XHjvqtPNDIAshuIGmSJRi2WkPhOCLg5N/Nzw8tqadSWuhzHT7uLiFpSgHLa261AdJVZYcHPOWZCzrcN9z9ky062hctS+ZY1VWnBclW4X/V9BpdUrMw5nFOPeYHYndxQLwFc+5meNxYKYtnvZL4dmmVeDrxxFcKfXd7dPot2V4fXPPrLXFN7Cj7Yh9cOITktmKfOFTz2yBJQTmNXSqwL1wUWiFJoyVpAI8roIeaW/OkgJjMrcu5MfKuQGlFn25XqbrJJ89Nz5/TlaPTTVK5A6UsmqStIhEP2FHHoZvYu4GkswHyCiFJo1mvajTLTINUjZsJJGX0LAENhSQ/PtNx5g3c4Rq5EvqaajScAbJa6zQHa1JmXJC0pZl045NcriZpK5rRLSRdi82OoL5lQpJ2Tcn8mC1IzmEvS3h+BD5/H4BxF9y72+A+eB5A+VRptXi2FojHg6L4emXgdrXs3+wR6je4/eSDHxx9zk9uvNrv3RmJhsShcij2FovioF8Uuwc9sWfIF1N+KGUiWJJJrDQRxmIxSMTJIJKiJmqMcMUgnumaJ6awBxy2awp9LSjzVIFZbjGB3NF3Oarg5IWkrcarbVJxBe7YIKmLOm3bxxA4RUPwTT5JmoLjEpPfSte+rF2bzAdJEzDzBu6YQMkLCHBIKkCqogI0qlVqgpYuIDpIdhvd6tIkL1r8vvJ1Q9k+qlWqv3lnE1errzyQdC3C8gTu8NZitspX3CRsM9Oa3kO/62w1bAkpmo9R0WE1laAmBRvJo2AqCAbtnI+StB1XK08XAxnx89DyNluLxWQjESP1SOwKVos9tVC8VOgTOwbr4unVfeLJ/j7xYlQWj/b1iUGYnxdHJ/9Zj1a/oe1rYfX6q4PrxK5oUOxZ5Ymx6qA4Ajf+vnJBAnJLuEoCctIDDRI0zDHPl48IyhkA44IPoITXUVSIdWpO8CUgJ5MygNRrg2ReOLq6ANhKtOUJerlXgTs8utPVPksXPWtLAek2l7Lj8y0Nj/Ga8NZIvHVSnsAj0zmi0YFmbdIOSVvZtLyQpKDk5tMrGqFBPC5IdkCHRbfaKu4sJ3CHn0ulkfPns4hXjebI/alZFRnW2QRfswWg5XIzWEpS5o1u1d03CnQ24FF3iO4+07kJOmILckBSARKLCChIIiDPwhzJIbkAY2KunoipZlWMNRNxfE1VbIH5dlviiZcrRfF6I5ag3BiWxOOr+sSaqCbeeGHTT3u0+g1sF3Zu/dOdpcqt8TIAEGQfwGxHVBGvxanshot70IskNE+EqWkA5UQIsAzgPfD8NAyCqcAX0/DcTBRKW/tsHEqZiQIp2DhYtZs5WW1voIyObJP5JPOxGPxpptZbHAo2v2WuZGySN2mt4lPVC69JyYOXaFNorX9Q05HE5EfV3uQ58jRNr58hKQbZ9eCgTvSimmcrkOggxiM+dQn3dF86gZuq2OiKC3AfHP9+Wj2HPi8LpFer8vEsjHnqU1QNl1VZOt3n8gbM/DWdRqdMuB1mXAPo6PEreNPvovurz6M9OPF3qb+1HU5MvlCNBUEKHMM5OBZ8lOUpDVHNNvjT59TYptHqtFesaVzb8pR1AWYqfoFD1rnIYdeiY4wH1ZYkUlTN17OthupTMO8ehzl0v1cR20EJ2eL7YhMoHd8r++LJgZL4JmiTB5996l//5Q/e79V8/ay352rB9YNJTShI7gdtDyH5OqxodJBcknyQVKCkkJRttNhkakqbUDeJKeDElGfJzTk232Uuc5EjP9MFSW2CPuv+rguRz2DZmhh0wNaZn3Qh8jYIul6ngSHnLYsDEyRtvRStZkgLUHWfYayNSkyJuvdSOOgiVjl4aCQr90/qgKz7WwdJ+hmm9+uAmecc2r6XLmJ079VB7CLxQ+sgSUVXAMH2P39NF7ijrDd5IJknhWolkHQtwq5EdSlX41Sy8obVNJgH50icUw/CPLrDD8SbMLcqSD5VLIvvlsvikaAi1qzqu7vv1c0/6ZHrM9rWFPvuborD6/v8SBz3UlGQfDPypOwESO4FCB6Ai4igPAKgOw4D4hjsNwIXFSX1TwIg4cLOwiMG8aicSSUISQrKDkjCjSQnWlMItwOSVlNtNc7VKcEmpjQHDiHj+w1BM9w3aHyeHYOuKojJb6nMubaC7LYanGc0eXjGIJ6qHpgmgKkJxpZ3aNKcXCt4rklxDamtC0fLr2gyO+qq6vDj0mmF9LN0cNadAxdktWX3Wu/j2iD/PNdxmJtCty+UKCR5haq2gLTWWDAVQjD9z583RYPbIKlzx9hiEnjgGbU05YEkHwt0vF2Jam2izPzS3wv3OabO4RwqtUmYT3fAddwCkNxc8sULq0tiE+z3pF8R34V91xcKt3v0+qx8kfXw+gtw4g8n9TZI7ow9sRXARiGJzx8GCB4G0B0LQwlJzJ9UkJxCDTIMOyCpKvKYINkxqTL/Gu2sboOks+ydIUgmb+CPbiXbVasdCyB5Z3gbJHVtu1wRsHkg7vTVtiDJNYgOn1StpgUlh4hNk+oGklqth0CKgs722TZImiDSludomCxNeZS2hQIHvEsD70g/YZC0aZL3ApK0FKHOwnA6SXJD0vScKSfYBcm8MQfcbMyhvFJN8nK4JFeiWuYjx/fh/Y25lZhONwrz40F4fhe8d2sYi9cqoXip5InHV62SkHwUlJWvlMs3Z44d+b0ewT7l7cG+VXd3rrv/F9vCRBxtDIKaH4pDAKT9cNF2wYXYARDcjv5JmADQ5LoH4IcrnAMhml5jqVUeh/9HozTKdSpuaZFxWtN1EbTRkwBbJQhHJQhJ1cCUglL5J+VrDJIYQk0FTRQq7+h0nihZQ0sfU7FunWZlcvAr/6DNp2krXq1KgPHglbbITgIkWqBdmV9dif2utBTn66yaC49itWmUZ1qanClHjwa/2GBmg6QLIjZTJNcydZDUpUrooK+bIHWfw0Gpg6TJ/6r7fNckbSr+zk28pmvkChxSZkrTQmulmqQLkqb7M0/gmC7Yif9O0+JG5z/nYxaFBoOlEdSRlEtx2kUEg4LQLYGgHIuSNHDSh7m44ou3yoHYUvHEq0EsHunrE4/BPLu2v+/u5KGDv98j2ae4fW947a/Q3r2r2hCHqvU2SO6GC7ezBUoFyd0tMwCFJPomFSSx6o7SICkksTvIKZkrGbeBknb6VqDkgTxtqQ2tvEsUmnOEf59q1R61lb4ymUrV87riAdxHx7uHZP4KAinTe02pDB0tldpy40gpMbJK5+2RdHmW3fYdNJpZNZC8oFm1uwKYXIE7Jp+YyQTJQeDycZq0KgoklR9ICwTw4BuTpmn7HvqZJkC6Pr+jX6XBp0oDiOhzFPBcAzbBu72VlyPgxlKy7ozD/6hLWeHPUUuKTgs0LYK7haQxiMhxflwWkMtRzKKnI3gulJA8BwrGOVmlpyrmQCZhPj4On3Ewqop9MNfuAu3ztWJJvOKF4nnfF18r9Iv7SwPi1PhoLyXkUwvWKfm33uzz7x4OG2K0MSx2FkpiL1ywfXDhEIIIQ1lMwEshibITwLcPHhGih+GCH43SSFcsLICm1jmAVWpS9Vs5kRVxKvLE2bgiziWeXCWpoJ0FVZ2HgJJrklRwX1XqDkWBUgESn1PQNCUn804ergLpxua1mlY81DzDTVJLos/5cz2vQKkzDfEKPbpqQ9wcZtKkXR1MuDlMlyfKzddt5xg7IBDfHDVxqsT1PNGDJlDotCs6WdkCa2g3D1OEqs5kyiNvTZoE/UwdICmsXJA0acUurVr3nfQ3mKrwLE32iRRMYUAxAcdkUTGZVOl7TRG0Oki6asiaIGkCou25vJC0aZIIQxQEI5VLoBWiqCAenLewLSEGP06EiQyOPAGP+8ue2FkJxEbQJJ8vlcXGwaYYf/ONP+vR7FPani36tw4n68QBrwoSiUNB0gZJFA5JNMGaIIlVdxCSCD8bJBUoFSQVKBUcVRsu9dpSW66wDZIKlEro/zT3SlX5kekXXVTEMeUf8vQLCigXJE19+nSQpGZXfB92cHClgPCAJK5J6iDZ1hTX1earVcFF+Sb5woFr4h2h93AN6WRP0yk60g0MFWFsKSA8EZ7DWIGYa1DcZ6mDIJ8A8bjVsfOgH55ioavGo0vFyKup6sBONVWukav0DpMPWH2GLT0lPWexFAVKUyF1XWL/WU1Bdh4lqyuMQJ+j49XmezTmNzvMuTYtMg8kXSkgVwB+KNfgnlZyNYmlXGk1bJZulxrMk/DdWI1nEjTJCfi+0bgm9hbLshLaHriPEZKPVcriW3H4SY9mn8L2SF/f3YPh4PWxQiRQJoOaOOoDFAF2KBiCfARU+iMVTwr6IqX4FXHA98Qh+BsDd04AhMZbZZXwgi5muY+phqeSb89XfSkqZ0ppjNz8yv+ngT46UVqpTvOkPk1bc1aab6XTFtVr0ieas99cdjN2rLxjp1/S1Q5KAZR2V8kKL0dhR59FBdn082va5HPdJMFfO6fpMqImHN3ko9UULCZGHQgoZEw+Q12UqTFnUlPeLis+jpp665xqCxXU9CXduLnTJq7oVx2kTOZnrrlespiz6XmktWL5cdjeb/JX0iIIvA8lLRKAeb6mPpi8i4lpkUnvOd5oWv2ty31U71PfwaO06XhVj6rFGL036HkzLdBsUciXk9T/iE3qURCMCEgOTfX+rAUdfP8cZhMMrJbz7u5KSSotr8Nnfx3m8kfj8Pr47u0/7pHtHm1rB70bL1WTj/eUq2IxWiNOxmvF0UJFnIAVy/4klIIQPAorz6Oe3wbJ3V5ZJroiRDEFZCTBAueJmIGVzwJMIhySZ5KgDZIqX0ppjSbomaBoEqqRcki2lUUzNInlZhv6vKsHna7oQXbDt1bdmawQkvQ53ubIBsmlAuHtq3YjzAw+J65h2t6jnehyhszroi9NE5Cz0TJrgsy7XZhqw+q6Zbgg6RJT6gUvNmAy67qCk0z5mbpi6rp9aTEBm2+4w//WWmToIKmitWUxDIMmZwwEYkIXsxySpuAxuh9f0HVUJHJA0nR+lwNJfOSQVD5KtX+WvgWCtbExPWQcFI2dpQHxaqEg3oDveBbmpW8ANB8eHvx1j273aPvuQN/dw8PDYjoZEifLiRjvGxAL1bq0ex8FQKKoIgGjoE2eqAAUPU/KoVJRHC+XxXG/LC8YmlgX4SZZhBsAHc5LEaoRizYNUmERrCZIKpmXhdPNwt/PIck1Q1Nod95Gzspv2hE0wCL0VK1GJReCVO4FJE2vcyjq/jfV9+TmLtOkpStYbqoVqpptq4bbKKbJW1eNRhedyU2IeVI0bJBUk7opqpgvQlyQdPkBbekYHJYuSBq1OkvlIa4JmXI+bRV9bLDmkOTnVeeP5CZXXTs13SKNL2J1fnVuLbJFsupSW6i1RS3y8p4L3bW6mKSS+SbhbzS/KpMrBvZcJmUP6XnFBfCkXxJzjZoYCUFxAUjuhjl5G5zX52BOfqCv1yXknmwjW1/46Qtx5eZ2AOBUPCghebm2VkxUfAm/Y9VIyqhs3xJmoMTcyEM+tnPx5P/KBzmLPkbQDPNA8nTstwESNT8XJBdakheSXKPMNDwWCaoLxLG14epofaMJSGiL0IvaQXmvIKkL6OFajw2SpkCLLKXDsrK/yKr7nNP4jVyQNFV7sfl4XAn11ibG/DM1mqTOB2yCZN5kcpO4NMm85lZTAJBLk+024IRrna5iBjpTdbt2btcYTeOJpoC4cp15gQtV5OCcxe9ptHwwqDqbZluKM6TXP9ZCUqWCqNQQVVc4cy20xixCEl1bU/VEnIDPREi+CfDEIgOP+f6Nr/qVXpeQlW4vVvruIgSnBhtiEsA4W/HEgixQ7ov5RjVroozlkabDtMQclpobCzwpptqrHblLrBwZLUNHo1VNfsYFJgjEuWipxJ1MM2nJfA5I8sASHRw5JLX98hyQvAQaeaoxteAQJm3STd1H3c3HV+Y0PWRJWzRDkvth+KSl80O2vc60bVNemfS/RvkgmTc3kqZS0Mo3uqCbPJC0LUpM5tZur58tJ9NUq1XXhUNF/+qCm/J+b56Sfy5IYtPpq1XzcSyVr4u1ub681ReHlimghlbccYHSBkl1fyrB/9VzarwuWT2qHePXBEndIkSbltQaf3zsqsL56vxmjb2zlB88/wHM0aGYAC1yPKjI5hJHy57YXwnFVvj7uWJJPBGG13uVeFawDReDW6/FhdsnYBWCvsQFHAjNQTHWX5AgwhM/XYskJJeKkodSJuNUTtdrUmNEUZDUBciYILmUypFGrPKgnOx/HSDDFNx4XFlFHwZJl0+SF0jOC8msoHIr6Kij8HnrBqc3Id5c2AGAyr2EpG6S7xaSrgonHaYxpmkb/UorgCTXorgmQ3MFuT/OubrXQJIuNOgCRKdhuvxOeVJYOHxMUbx5IGnSBG1RsK6ekjZzq5q8dee4DfgGSKKfT/n6dJCkQTW68Wdr8Kwr6s/NrRSQHJJqrKrn6BjmkDRFszpN8Kxlmg6S6hwrTTL9jFBCcjqpyFx0LNoyikGVpYo4HFbFNpjXnlk9IL4bBGJdoXCnR7tlbo+t/cov5wdrMk0DYTPhlcVMWBHnhhvixOo+WRJJlY9DCClBEC20IlepqeoMvEYFbeZZhZxWSof0V4JgUA8KT+ngkGwDHzGzqi4iWCUfRcFS7auLcqXNnzuiUDVtrHR9EDuiXVVHA941oAUdExzvFSR1Pkj63L0I3LGVCOOdFzraMpHVN4UktgxCcWlUpvxBXRFv3f9OTaleyyJ9dVqjy9yaJzjDBRxTlCj/bJNPMk/RBGPTaVZkgEdqugJ3VBk1Wk5N9/toVDVdgLj6YRoXZy3Rdeyh+cKuwB2uHdogqdwlaj+6yDNVdDK5Digk6X3Iv1/9v6SxxpmJFkE5ERalNnmyHotpdHsBJEcqkazK84YXiGc8XzzVaH7Yo90ytvvC+vVvD93364nYB1glYrxSEicbNVkZ51QjEbORJ/9eAC2SQxIhdBK1x3qtDZCnA3iv78lHHSRRdJBUgFSQpKBUUKZ+x7loyfw76VeMkKSaLYUkFV5fUqctdgPJLP9Q+fZacOBm1nsFSe5Tw3OuRP1vSwHhpi4+CZn8ixk4W5ONKhOout5nWoEDkq7AHQ5ErnHxFlW8XqrtHEqfEIEkjw7Gc6eb2On5dUGyW3Orrk4s1wr578wTWWuqH6vM1Or80TxPXhZQ932ZGbBVmNv0vSZI2gCYp42WKtLfLSTVva7GJdUQu4WkbVHjguTSYqyqheTlWiODZNryrJrJZZi3Tw1XJSRRuUFIzsDxISR3l33xFhzvRvjchz3/xgbfvzE7Pv47PfJ1se0eqNyeCEAzgwl7ASZrlEWYtDC0+CTmAIIsyokvlbM6LYGVK+P9CykcqVmVyqkwlp+P34WygI1HZfPRVOvEMGcumB80H6aCcJQ+ySQtXDBPtM85Alvqk2yrGEN629FuI6ZyclyzUpNlluDPVuUdQSWtBr84sUhTCulTyCcxmgxuqh5DE8eVUBMQL3KtqyhjEnUMNF/O1FS4G21Kl0doqh3qqpqD50/XLYMXJufpDirx3xVk46rkwy0D3HxnMmOrRZau3vApkkvIzXFcg+OQUqJe7/BpkSbRKCZN0qTl5jUh5ykNyKNfdYE9ahGzpHElzBJiD2xrW9CwnOI8gt9vE1MKEb1P5H0U64VeCxXBSl+j105dSxT1urpGONfiXI7tCcf8RDalwJKiWwr9YudgU3yn0Ce+OtAzu+beDrzywk/3lvxb0wBFPLEUlBSQGMCDEDsdtbdEstVmNDXd1YESNUf8fBQFSQU/BKFN1H7SH0kgaQvg0RYTYP3tuJOfg7Ijuo7cgHQyM63o27reJ9XcJcNcK9WOqEKibZj8fDZY6jpJmMx+3UZ30t/ANZVuIUmPz1RUwPW5tuO1+fzkax3m8+o9gWSWS2gIEFIQNE2+NqHm0W6Dh7qVPD51nYmb+odNgVWuyPA8wq0HXGhhCZPozPN83OSBJL+eahGk5goKyqzvZOs84hyF8zdqkuNBVZzwY1lze5fviTfhmJ6qFMR9vZSQLsrP+aVbR+Ekz8LJnpPAittEAssPpfC8P24+o+1o2kBZ7ewhSEGpzKpKc1VQngOZ9dMelFJagUJKOCwVJDNRJmHm21Rg7mi5RWrE2iCZtZbqCCKIOpLLdR3c+c1CfTimSd3UaknXNFg30VPNiUPS1hnDlWe4HMkLSVvAi6nvIy+lRrVobXsionW7jtXt8+uMfFTl2Uz9D89qIJkJa/vmgiQVuvjKAj0s+9FJ1jQe+PXpNjCJnnNdiTwd+HRFHXR5q6YCGlRMebAKwC5Ick2VV2SikeRt38uCplwLFhMk+aKaapMSlElakOC8jL9IUutakIhxP5KVeA7Ba9he63ur+8VTfuXmuh4o3dsDQeXma0OND4/ACcUuHQtJ0mZizaRlZqWVVDgkUUyFwHnzZF6kfMkMugRJlLkWKBUkp8NUFCTT3pShFpIqyhWFpqXQAB7ek1LVhFWw1PVbNEEyPSds9Wup/ami1ugKMk93eFcyuslUquviYKpcYzK92t5n0hBMx20yt3ZThNtWpSb12dQ7OmPwaE7cR+1nOn6dVq4rQWaDpC5CmBesoC3eaCH+rHONmth5pGvk1ialpYKZ8vj7XGPMZIHIC0kegUwXf/J/CyRtRQi61SRNMHVB0pW3bIIkP18rhWSHm0ZplrW0/usFGX9Rla6qmbAq0JWGFdD2+hWxzffFK/D4PIyzh0rFWyPbe+XqrNtrFf/m0bguRhsApqGmFmAUJh2rL3aj2OCoq53aURyg5YPkZlasdo+CVXwmGSjbYclyJFuiAMmb/PIi5ZmGqXkdIcrbRHVW4WDmIE2/Pn6ztJlYDFpbN9CwRTPamuvyAto6/ybfh6ck5CkE0G1TWt37XSXRuH+WnnudFpkn+ZtWpDHWNzUFNFmS3bWQZE3DeTStCZI6f6TOrKoTukhzdQUxFTl3BSVRIFL3APW52xY+Jl91dl0dGp0Jdi44mt5ngmXmI3Xcn/wa2YpG6FJ4+EL47UYirtVjGcSDizVcxC+CJjkLmuSkl1ZJG2vWxO6gIl6uFMWmek18O/Rv9Eho2P7qvffH9g2v/dWxpCFG6lhBx9cCjcKC5+Dxi26qQJPlRbJAHR0k53W+SHgNBdttTTGTK4ckr7ijAEkr/mSigXpWEKDWGYjE00I6K4SwFbCjLBifvHR5atwf6Arpt0ZvWloo5dEkbT5DFyTzQChPBKYt8IibYHlgkclc200eo7U2qiHq0pXsvnS/xB2QTAt/d0KSfr/OtKqDo9EXqTRMx/XJW/nIBUnd+5S5O08N2zyQpKDUFYPQ+RCXC0kjPD8lSJpcDghJFIx2lRG4GPEbpbEm6J+cgn2OxoGsv/0qgPLxgdXi0Ti4fvC5F3/WI6Jm2xrE14/09YtLg2vFOKZ1DNb0nTKSpebEHeaFVq1BzNFByXoWJp1aGw3UMRUip/5FhJ6CIJa4o8JhqSBprPhj0CA7hEHUZD42Be503FQOMymfwPJogjZfockH6iocnrciiC6C1TaJmSrlGKNDNe2rOITzQFKXNmHqGGIzF+apQtPmU7X007S1bMqE9DhV91vbRG7wRbvMeByiJliafMZdFYnPWb3H1blEV6vWVtvWVKRAV3nKJN36JDvKFjoWWt2eI9d9w+eCt2uxlGt1NMM2MtO/aqiA7qTJSlmciDwxsW6N2IF1XQGUz3teT5vk29GNz/1six/eOBk2xYIfi5GwIiGpTcuIl3wjHdFcLUBitQeUkzICtrPjBu8BSdtcUaGARFE+SAVFDksdJE2aI2qGOl9kmzC/KQcjb6vFu3rwvESXP476Hq60+imatBzV74+aEm1BNabUC5XywBvqUk0xjx/OplW4ysmZQEM1afq9PAXGpqHyIBNq2qPHz4/JVifWFCDUWZu0HZQuSHYUrKglTkhaA6wMfkmdhqkTHuhl6id5r0DZjTaqqwjE38/bw1FAYoqGLcAnj1/TZMo1LYqXUx7QBEDdApS7Da5VIynom0RIZtWBVDGGel2WGJ2GuX5XuSj2DjbFZjjujWF4/aFCsZcSQrdNoXfjeAAXtwgXt4R1WUEVj72OIuIKdmgGOt+AE92SpRsXB2Ug5WzktxUC4I2RqQbZAUhVOScI2jTIKYNwOCrhTZoVHGkDYlWvER9V0rsypZp8sbRJsa6TuiqXRVex6qYxmY+omSxb1Rt8DjznUWc2zWNydWmW1DypK3+mD1ZpNwfbKuN0q1nkaS2Vu8OHY1KypaaYNG0OXe7jNqZKGYp46yZhne/fBOlu0j20fklLbVxdOk23gTu6sUWf0y2q6LG4Fl58nPIqQrrfxAvFqwUpvXd5oQqT1cF2DvL4bE1BbeqYnKlbsS+uVEOAZDoWVKESVRgdi6bjnH2yGojJJBAH4f+d8HmvVyriuZJ/q0dGVaM1Ktx+JfJvzK9ZL65Fg+L06rI4s7YpFgerHakSCnSyQXJtyey6tHoK2iCp00S7gaSCnQ6Sk0SjNEW3UhMxNbPyeo20ygaCMtMULZpkXnMrN7/YTEm6SSpPYr+r20Ae82AecyeHpE4TpJqHCfLq82wBMnnKtpkgmddcupJzwwOGdBotTxHS9Sa0Few2tkCzdI6wLbq6lTyQNJn8u2kFpoNkN9q7q0uJKbjIdf1NgWE8BctWKMEGwG60bVeJRm3MQQuSKOmcgtaDegZJ7FOJc/Vi4gusroaQlM2ZAZLPFnuQzLYX/OKtyQ3rxES5LM5WAqmWzwGAJkrFtshQWptVpk1g6bk4zKS91VVqHjJV1OHl5ZbMq+3BNkupHO2BOSqqNXuulRKC6SHzrco8iwaQmQJttAWSDT5JXcuds9p6plFbdQ9e6cUFSb5CtplUXYn5eVaotkAgHSRd77dBkkM2b6pInvQP0yTWrbadZ7K3BZC4mkp3VOBhqSJ5+0HaAsFWCkkbWEyQ5IUb8vbL1I2Prlqb5TBnmqwlfEzn0e5cYDOdT+N7mI+Ta8W2jje6Rapss1Wl801NXEsa4m34/yr+9tATl0GZORtXZKlR9E3uCzyxvVwSLxUrt/7oBz88+KUH5De9gdubq+H1Y826OFUHKVYkJKe9irgwPNQGSLRdo8xRP18LjkrOslwuXeCPLlDHBElVZm625W9UPkkOycwHSQB50hI1SFs3KfOorvu4DpJcO6AA7uxrZ4dkh3lIE12oy9/T+c10/sJuNUkTKEyQ1BUioED/tM2tNkjysnK2psHdNMd1+dDaIOJoSt0JRQ7OpKsKQB1twu4RJPP2tDRplK4uJCZI5vGz5xlDtlQq7tvUnUfT73G5Oz4LSNoL5IetGBF1v7VD8gpokSjnq76swT3aMrliJZ5XQGF6a/Pmn3zpIflqf/HOGNy4mGiPhcwnvCIAyRcLHmhlZU/MwOQug2LCpcT92TjKaqdip4/F6lKLK26e5AE/HSkerJuHEZIscCc7FmVebWmQJ6O0ssRpCbiatas57SSgIMk7XvCqQN3UblXFBGw+SRckOSCV5J2Eul1p20L8TeZWm8nVpAHRYtmuwJjlBH3khXC3kMwTLayruKMT2j9Ula27EtWkXI3rUlz9IHWF3en5vBeQtIHJZbXoxjWgE11dWSqm1BZescr0nTwnli8ATf5ObtWxQbLjno40gXTWxtPmNBVbWoqKEUFRMRI45hCS17CuMfw+BORVeP1iNYB5vCImqqE4Cv/vC8riDc8T6yvhl7sp82OVys0DzTUfTtYbYrFelR0z5uEkLdSwcj7cyI1BMQsnWqZYgAaJoiCJ8EJQ0vxDWt6Nt7iiPsjlQtJWYUdpkAqQSvIER8jQ/ByQ5HmUNHCH94k0QVIHFpu5VQXoUEDm6RPIA2dMk7/LlKUz59AV9730qeggtNz8RJM5rFtI6kzJthV9p5ZVNQJyOZB0NWTuFpJ5AndcKUI2TXalkDRF4eaFpE3L5f5P3qBbF5DWzfFTSNLKRqpIQx5IdlNyj++TltULWqBM5zgsFYrjSkESTa0ISg7J/WFFbPF98WDS+PhLDcmNQXL9YN9qcWnNejEPJ2uitFqMD0VSZgplsVgOZf3WKTi52NV6zPPh0ZOBMghKmdCf5TG2Fwzn0DTlQdL2VlpItooIKEgqUcE56hEBeZLAEeWcputCnnY7bV1MSHFzV57kOW2/u6ijmICtEEDHjZ6zrNxyC0m7JildfVKdqZWvuBXYbce/nILXpuAIWxRkXk25G03cBcmlz243o2L7L9kNpAVHBUUll8OqlCtKDBDI61+9V5DURVHmqb27UtHVnNVB0lh/lgUBmer3mhY/Hf1FNYFstrGp66xCo4aXC0ka6Wwq/I4igyrrS31dzydpGzoVuIOQRE3yQg0gWfPEJChIx2uxOBB54k2YZx8b3vCr2f2Hf/ilBOT9cfLJK7BKOFPbIEYLRQnJs82aOBIXxbFqWZwNAQpBVczAicQarghI7Gw95lXafIFLLaqitmbGNGUkTxSrDZK0VisFJH6v+ht9kKew4HhLEJJncYWeNSWtt0FSmWHNUYVLeURKVIFz6tOkPslzpEGxEpdPMk8KiCta0OYnyd130hIlaiplh+ZSF4y4iUo3CdmOK080Lw+2oCkyK4VkHtH1qswDyQtBnGmMHJKXgyQVTQ1PWi7OVEaP1wI2mlOZhtMhmiIO9Fy6fIV5F298jGe/g+UNc1CaYK+ev9potN0HuiAdPl50WiU329K0EFsKiA7s9L7OC0lT5xNdlaA2TRLL0TVhLmo007S3FiSvVVNBQGIe5aUGzNN1X0w3EnGinohDSSDegt/0taghHowbn3wpIfncqsLd42FdzFSqso7fRBSIyTiUlXZQFoJUcFVxDE7iEVDJD4WeOAzPHYWTdwwuLPoyx+CiTMZpeaNZUOWxHRXVFGdaWqfSPE39H3mLqwyOrdJzEzJoKMi6kqAJF49vETRc2Vi11TxYDRaVgE1XVXxVpp7jxYjbBifrYsILmqvemNw3mXUJaUX6qnJiPOctS2y2TBK0+DSv9p+3oopJI3EVuHY16M0TlGFthaTpPmLySXLI5onelT0R46Tt99MOGMrnZUu6p50VaBsifn51ZkHa28/VxaGb60iLXtuKmet6fVJTNIcHhy7/LlpAW6eRdmh9DteAzSx7TzRRTd6krkavzhqgCqzTguSmakUdFYpa84fu/tVdf921vRCEzi4tpoIQvMvL5ZZcCWHMo8m1JddgfrtcHxTnAaKnakNiOqmLEdjvkO+LvV4otq32xJZSfOtrxS9Zr8ldTzzxb7Y1hj48AasEhOQMnAwTJBGQaKM+DJrmwaAiT54CJZ5MBUkUhCR225BRqpgq0tI4P01IKkhxcwQvm9fe7TwyFiHmkDzjKEJtA6QEK4n2Vfmkui4BJojYbgA+eecR3aRuExf0XJOT6z0mE57Ln+XSAvNCUlfLlE48pvPCNTGjJkOAshJImiblvIE3tAsKDVrRmcnpNdN9n02T6zjHjn6briCfbsZZHv8n90eaSttlz5NFLIprPGTjUy2CNePDds46ml53UU7QVkHpSksyOGIAT5zeA+fj1Pq2mDTFFPyN8/oRmF/3B7HY4yViSzkRDxVWfblaaN3f13f3LVhBHClHYqqSiGk/hRCaUTGhFCsvzPupKECiFnnAL4N4AEv8P5D9yEZgQI3BSUdIYsFcCUV43yzsg3KvIClNvEGap5kFA3l+R9I+D6U2NWflpgmTqcMFSRMclaD2qPr+6cpjmboDKHHBbaWgxJWk6TWduTcPAE2vm2Bn8wGaKgvpupRotRQHJHVd39sg2GWtVj4Jq/Nr8gfm8RnyibCrBsq0ZyHTnnirM51p3/R9Nk2Wjk3XGHGNH5c7gHel0YltLLraprkg2XFvqRZrrXvb5fPVLT7o+XVBUmeKblvY0AVPvARI9EeiuRW1VXRLobtqNqrJuRxbaOH8vg/m873w2uZVJfHSuqFff6kg+Wjg39hWb4hR0CQRklNe0AZJFAVJNLMqLVJBEgVP4lGA1gkYwKNwMicw4b8FSdnz8R5pkqp4uQ6Sp+D4lvyJ7U2NqYnVZk41NW7NTLcOc6tRg1TFClqQNAE6g2ZOSJpMcMaVrUPj0H1+Ww87gxmYRgbmSSY37eNqhWSaxGixAFtahjIR0nNCtTtl1tL16+OtolzJ5ByQFJI62OSFpMkMnCcIJ0/VF5smnue4dBqRGleutmU2UNI823sNSResqSZJLT38PFNYymvdaKTaeut9rgApPu5MgUimseKCZFukMNEks8AdTI8D7VFBEudynNf3exWxG7iwH17bGdbFA1+2ZszPBOH1V0slMZbUJSDbIBmlooJkjoEmebTlj0RQohapNEkJSpgoTsCFHsXejnGaUzkX3Tuf5DR8/xR8P4qq+KMgeRpepwNRBxBXBRlnOoKleHFWtLyLiLSOzzHUPXVNUjY/WJ6oRX6T6wCpVrI2bcF1PCafjMmkySddW5NpU0RrW8UWAySpr1B3fNK/FITW6OE8UcUr1SSNlZlyplQsB8J5NR/b2LT5zClYjOZBpYlG+e8Bk6UlTyF30+/ryKu0mOeVJqmiuk2BO91Akls5bMer9ZGS+Ub5Jq/Q75LBiHWZ8z4VVaUWifP7Hj+F5B747kO1IfFYsf/O2lVfElAO9ffdfaFa+3jf0JDAguYIyDZza8s3ySGpTK4ckmi7RkiOoN8wSjtxyBzKewRJBUgUFfmadSKJ0sAXGyxceXqukl+uxqq6vnKm3CVtIrCrQLHh5uXmnrxdHVyapK1tUp7j4IEwtsAFGyQ5JGywMjVM1kFSN4Gb/EV43K4UG5eGZvMh5oWkaQxL8x/Ln+WSaTjk9+oCkGx9JW3mQZuFwwVB12vdjuVuvyfXgoAtQmyLUwUdOga5T7pbc+tKIUnnJRrAQxcBmBOP8/BkSE2tvtgbRGI3zMH7orp4eaguvhFVvhyFBZ6uVj9+GX885j7GVVIkwJdVd7KC4WHqYzwOz6EgDDFgZz/sh7KvJQdar+E+Yy3T6Bypzbpin2TkScEqQJimsgCwPA0Ql5GrKsw6XjIfoMiVUmsw2GpOmpKgVwrJPN3KefsmFWGYZ4LoMPFYfIq2oJ08q3HX5KI+G4+DTsa6CdY0ebkmHVsrpLyQpL9fp+WYJit9FZPOVkkm0eXIdetTtBXkdpka6bWxLYxM15ofM9d+dGMu7zjqxn2Qp2n0vYQnP/8ckh3zDYOkGoe6e8J0X5hyKvnijp8L2z2azTmkX22bpa2aFl/B+Xk8SAN2cE7fC/M2ykEYY4fgd2wKKuJhULDmdm//8RffH1mp3Hwd1Oujw2vESBBlVXRskDwWphGtGNkqARl4sMpIhUJylPgO71l0K4HkgqxWH2bF05XPywTJS2guNLTd4UnSpkLBLnOrqamr0bzamnB5v0Y10eeNQrUF5Og0RZfZyfT5Os2A3sx0EqYTgvL15TET2yB5rdlsM1+ZcupWAkk+8dN9dJB0+bHbehaScP7lQJL/njw5nXxSV9dFTby6FBibVkkncP5bXD7zbj4/79hYDiRt5n6bu6DDR06iRVXwy1VyrHyRQn3SNsuKKQWEnkd+n9mqDWWLHI1Pld4HF2tp+U4FSZzncX7fEwZSEJJ74bnXa7HY2KiJ+0tf8FSQb3v+jY0g+wCS6Jgdi9MeYgjHrIg5/D0N8JyMqlIwHBjNqejMRTPrXs8HFdwXO8NU9kZL2iTuqwJ4ZPAOClblIeKCJDqQURQkEYxKTkWpFimh1jIf0MH6Ng6g1qBVoDRpkK4yaZkwMyr1Q5o6kusSf7P3Mihysyq/KVwQ41qcaTWfx5+zHNMtv3mpZivfDwsalCuwqKGinsd+dijG/XLmDpomjLyLDdNnmKI/beZ6WmBep4m5wNAGJlbY3tYLlAe90ElaZ/ajwDSleuQRNQ7erjeyMas+wzY2ckVqY7NgEDU+lKjnlfBxpf7H7+Smdg4uXaqO2rejGXprzuELcwpLpYHKa5dDm9aNO54CYkyxcfiLeUAj15AxqBArlaGbDIN20NSKyo+a34/A87uLA2I33KOv+BXxaKl46y8/+OD4FxaS3yqVb22GE3J4cFgchRM3jkEx1VAWAFBVbxCSCDkEpMqZQUhiugdCcp8fZJDcIVccntQuTZBUWmSmTUbtktZ/XQIllpdDoZBclE1Bo6yziIo6kwObQHKpioQekqYebNb+hYaAHJeJlWuTtFM571ihS1Lm2o4tKEE3CeZNNnb5gbqFTMcE6oAkFfp6Nvl1kdO5HEi6FhOuThKm8mwcknn9evw1k4Zs0ybpe/Kaz21adZ5zpjRWDiWdvzpP7m/2P4EgHSfdQNI0PnWaLL8H+f3J5xsOSxskVxJAZLqvXZ/P3Tvc143R9whJtB6e8EOZuYBBO7uAAyhjg02xr1IWB5t18VK5KJ6GOWzvc8/97AsLye/0Fe6+VQHYeZE4XC7JVI/xqgcw9MQc/I39xKZ9X0x7MQCvKgXzZnCFoSCJqjcCcjv2HAPZAX+jWr5f+i4j6Zechf0XEHBB2NEHUhUkV+KC5MmwIs7C92C7F+yLdg0uKsrbNRyoSduq7prmRnRB0tVyyFVP0VZcWIqlpZMUx8B33RQmfwaHRF5I6gpI550otTd3Dkjq4IiC17mbnE9TAeyVQDJvNLGtmpHpOVuRABrda0uR0UW40qL4LpP6SjVJqjlS067Rx2w4V8aF4DIg2TaeNJWSbAByLfyo1QrFBMk8n7WSwKQ8CxCaAsKLCmQQbdQkJNFNdqziSyDu9soSkHvgXB4LyrLHJJphDyd17DEpHq98gQN4nhwo394d1+EHJ+I4BuyAFqkgiYCcASAhJKcqmNaRtEFSRT1RSG6DFQc+omaJQTzLgSQ3uVKfJMoiXCQFycutiVOKBGTUYfrgA1AHSZ0f0hTEY9IOdTUV2+DIkpCN+YEWSObR6FyQNE0OuklSd5PlDbE3TnoMjjahcMzEYK7LG3zSLRTzpBDYIOPyhdn8aTqILqfijAuSOlM9h5t6zXX+0MSqfJXUvMrNmXl8hTptkkNQt5jiiy9urqfXSmdloMfAzbF8nCkN0gZJXnHJBkqXbzVvDIFRG+VRuQySSpPUQRJNrMeBCQjKURhLWIHnxYGyeHSgePu/fP/9kS8cIH/y3ntjLxa82yNxU4wDKGfh5IwGRTFdAzjWfbGY+K2WVQC5AF6DVQPKBMASHbrH4fEwnHSMeELtcStWiYcTiIKgRN9kanJNg34WEXBhtGxIqsbJF4NKVqn+7Vosvg83/zsYNYaJ9rJpaCpqkNogZIswM5nDzkdBJqrL92Vp8o0z7VYJPq9eS7uBR8aamM5VtFr15Vhx2lIo8pq3TCvSqyySj4vyA9OI4vaghjiX4KJHCVoJMmn5uUygdIFvpZDkJnxubnOdH2f0rgOSrqhR3XmgAMxz/ZTQ36NA0A0kqck1Oy6N/44G2OnOabukY8I0Xuhz6TzQvg8dj9QNQ/2I6jl87Iht0GiS8rwlNSlZiTdlfmX3oCsIzxb5nWec5tY42Tmn5lhsL4iQPO4F4qAHc3nL3IqQHId5HuNWxmGunghrYn9YFy/6kXigVLz1xTO1hvEnW5NBcagMGuFARcyBmq0gibIQexKSsiWVn2SQREBSSO6DfXbCCVSQ3AKrDNQo0Tepg6TLJ9khrebJCMiT8sKmVeoRkO/UkwyS2FlbgjK7KdIBYGu1YzMnmfPUolZn7yCDogKhgiYFJH1NQVJbQ9LgiF8uJDnc8kbv6TSLNmjmhCS9CelE280kZ4IkB+VKatEuB5J8guHBGjbRmcRM8NNpmvw9HT47RxBMHpibFgJXuzC38iCu7BjYd5iORQ/IWtviSScmSKrXOST5IsB2HDrLVAb0Vu1ThKQEptIsHYu0bovZd1tty7Tg1Y1LmgKifJKYwYDRrQhIlFGY3xeG6uLIwICYqw+L4811YhOw4FtJ/MXrDIJlhY6sfVCMlGJxouSJ+UYVJBRjyYAYrxbFXFiWKRtYd3XGg32iuhiJGxKQY7By4JB8C07qVtj/Db8k3gL1fDdofGi3ziAZAOTCqlOTVK2ust6QLUjK3pByAo7EuwAdLt8H0KAoWHLzalsCrcUxb7LnL3UxWAIlh6R6jmqYFJLpa3ozmdE3aJikXOHzOkjSiiW2AB9rdKEDAu7JLz8ktaBkkLyXgMxlbtVoPVdyaNguSFrrbWquq25BlCuhv8trRrWqq11UtFHRrSg686TuOzsXVJ2v54XkkkWJj6+qVVu1nY9rOi1dvRYvCULyHfjd75Dfnjc4J28qls3kn6eJAT/uzPJWT4ub49w8Ukk1SZkCAvPXPpjLJuuBdMXhfDxaQP9kQ2wcKIuvF0tfPE3ymbj2yfawKcYqVbHQGBKTkQ9SkoBEmY8qaW4jRqRKTbIpBQGpIHkELg5CchdM/gqSr3vFFUGyo4EygeQZnBwBku/A93GhkHybdCvgrWpM5kybP6Ztv0ZNgo8DER9RuzwX+pmWSTXLJbDqq8OYkoPzQtKlEesKILsCGHQ33TWH6LQROjG5YGia3DJYGrTIewHIXD5MBsduYWny3bpAaev6QXMWXekF+TW2Tnhdy5mvqzTKdxpNeb3aIl4t36HMniZQo6wUkkpb1KWKqee4uZkHAuo0MgVHfHynWs8geU2jTdqq+3SbluWKBjb5wjvgrszDzYY4C8eMc/OJsi8OVCppHjzMYQdg7sOYlbFSQc7H82FNWiK3JHXxaBhfnzxy6Pe/MIC8cOzQ7z9TLNw+Um2Ik0FamPt0NRCLAEY0tWIAjyoijsUFJn04MUEqWCBgBJ4/Ac8fh+dVviSGCe8AVfyNymqxxRsQb4EmuicJxCG4IMfiqqwLO1MdbGmoZbkawQhamWLSKlqA30eLD2BvSIxmRfBcSJQfcsn0ZppwTb4tua9jlcXzC22louhqWZoqWL83m9PdZhaxTY48ik8X7k6DFTqiQ1s5ZioX8UorQlh9Dn1eF0GozjedhPJcA3XN3qnX2q4f31e/+u+c9NT/VHTfjc9fhrGlXufmYK4h6Cqs0MAXU+CI7bzTaEzTOVK/wXYu5W+oJVbpJjBKXnt2bdQ5RxcGdWVIfz8sWvP6kttM5ORe5deXXiMluuucZ5zxcWHzceNvVUKPw+YPT8duLBfqSjq+lwUTcVjxhSTPa84KPWiK56seoLx+rKzpbIgav1qLpCwdcy2LDUh/Y+q6wn2w0fIFkFO1WBZsGQFl56iH7RBDcRDmIpSpRigWYV9MwcN0PCw6c9QLxeulsvhusfzF0SYPbXrhp6/CxLizWBELHvxg1BYBbGfrkRaSKDpIomAqyFLCaUW86RclJPFxF5zog7IXWZpCMhU32iApI2gZJGkZO+wNeQr2kUEyAPH0grbfdPcakq6KILqkY7VaNEWlcce8bR9XAWzdBGybHPPsS1/jNxuHpA5uea8BnzSNIMjxWa5rbfpsHSCvWXL2eISoC5KulASXH80FyW4h6IwgZteHQlJJ5u+PIiP8OjT+LiBJQUkhRt/LIZ7HJ5lnwaa+Z7mQ7PCD8nPcJSSVeVoHQltTcxMkr8BcziGZfr86H+2QvNiMM0iOguKDkDwcRHIeR4UHza06SG6peOKJcuXmoc2bf/IFCdop33wTTtTu1WVxLkqdtfNe6oecrgGokqV2VFOwikAZh5OBgikdCpQSlgAy2ZBT5kd6UoNESKJGud0vyRSRQ7AP+i9H0dwKIJXSguOShLIcHgbzyEjWVu/Gc3Ah0ooacIHrcdc3CX/d5dhWA1ZpiNy8p7RGHkzRjdnPluenM/XSSMc88HNpGyZg8s/QTf7fb9S1k1Ve36LJLGbTBnWTlm1SVp9Pn8f/00nYDUldEE2WDO6Ajk2bVIsMF2Q+C0iaoj9dkHQdp+tamRYE6vorGKlxRgWf4+fPJrmDwdiirVtIts0vBkh2RIcb7n813+g6uJjcNKpIB1qB6PVtl7AV9Njyu2JHGpC30X3V+k2XQUm6DJA8C+MUrXzjvieO+Z6EJM7f6F5DPiAgz8B3nGo1vsAo2O2eL54HTmwo9H8xytQN9/Xd3TU0LCaH1omTlUDMl4riNJyUk6CtcUhiSTodJDONEkvUwc2TFsH1xbaoIiH5WqlfvFUZEHt8XxzwU1Ce8OPckDxZTZsbX6hGmdkAIZl38l2JJqlgiD4V5VehwOSQdIXeL7cBMs/nkrlnjkk4DxRNpledaZZrk2rlbZrcXWZwHSRtZjMOOxcgFRDV+9QEi/9fCgMnJI0+HZVflgOSNnN3Hi1sJZB0WRey1x33iQ6SMiAup6bfLSSVdAPBbkBJv991fDZIKs1rSdjY4+feUHxAF5VMF8k6TVLXDq5bSGZjHxc8BJL4WxCSqE0iJOcxzQPdaS1zq1J0kA+n66C8wFg+Dd+pILkD5viNUSK+5ns3vhCQfHN48Ne7wliMe/BjvahV2BYABtrfDIIyTkvJISCVYF3XVKJ2UMKJQ0gejMMMkqhFbi6tEq97q2XOJFbgwXxKNLtOgLaZBgn5st2VguRS8E4gW1/hBUgT8qOubm7X67ablvpGdH4Q1wSh+z4u3VbR4L0ObUEteYSDiv5e3eTBgWVbdfPzqzs/rhW+zUQmAU0m7Gw1nCR6rSdO82hR8O/LcEPrPrfNJ+Uoa5bHJ2bTXFZqbu12/JkgZFxokOA3Lvyc0/OufJj0Nd37bf/fa6HHpsR139xLSMqxY0jj0KUAyfu8lTtt6ldqKhGYNRhwjY9WmooOkvjbLtVCWe4TTanoZjuG5laMcg1CCcmFaighipV5cD+MHZmopJXXXsNUkC9CvuT+55756yf6++7uhhM1XxuGC9MEUPpirlgQpxJfTKO0IElBSSGpAMkhuQ9ezzTJSkG84Q/InEmswEMhqUCpg+QM7CsbKLcgifBuWwV36Yvq1jxLoaGblEyBJUs+L/vn562XaQr7t/0u1++lWlYejU23vy3IoVtI5jm+Dsi0AKiET9ockhScPPCEm2PvBSRdPtk8i7qVQNKlvXEtq8Oc6AAPPec6WC4XkhS06prxxc9KQSkhnmMuWIm5tcMCo0nt0vX0zFK0HAXzXXV+Xa6LFJB2SGI9bKyPjZY9DM40QRL3w1x65MN++LzXo6p4Iok/+csf/Wj/5xqSTwXB9SPNQVkYYMGPxdlyRZwplcUpvyzON5MMklhKDmUmiKSMgvqNoiA5FqRVF1SJOtV3DIN1tgYlsSUoijfDUlaBB6vyHECTK7yemm3TSFYEJWqPKAvwmfO+L86EaXk3WoYqr2N+pZqmCzIcDt0Gj+hKqZl8kPo8vTj3Da6Dnk4T1E2a1KxKP1f3fJ7JP+9ixrnSJ4DMbnQyIebRgtomeAbJbBFgKGtmmoDyjLO8QS/3ApIujb0j2rMFEX7evs+Enj9+LUyLFnr+6TXi105p/SZI3hPNM0dU/EoCd2yQVFDkkFQ1VXVF63l96ItJTcrlWIl+gW1KgcnSlXDBCNfr+0lEcs3T34THgT5HDKAc9dPAHPRLHo1SKJ5NltoFojaJhV4w1W8nfO/TpZJ4oDDw+fZLPun7N/bDj8Q8x3O1QQlJlEv1REa4miA5BisIFKVBIiRRsAelgiQG7+yOU5Pr1qjckqWarhSSo2hytUDyQst/qAbdvYIk1xJNIfB5oyr5Z9n2kfs5aozSvCpdJKwrN8x0k9MACAUFBT0VJNE5IVQ7PuvdZqPtNZvvJ0/ZMF20o8lEmZqLYqu5lQudXJWm0zZhOyDZIQ5ImiJ36SKDn+s8Ub+mtBcuy02RygPJd4mmx2GnXYDkhCQFpDoGfm2z6NqcmqPRTJzjPK8kBWSlkOwAJasPfalal0IhqW29xlxGFJKyOIQBkvj7MNUJfY5YHhTn+GN+JK2AmMqH5lVMGcwajsN+p+B3jMH/u+CzX4bjf2igdPtzC8g//8Mf7X2pXLyFATQLaGYN4EeWPXGh4svejHOhJ2bgwk/L/o01MRdUM1COAPxQlE8SW2ChZGXqInTshjLCdReAdlviibdigGWwJNhK62iMwT5BBks0uyIgVcrHhWqSmRX5RGlNMteYB/Pk0uXRvGzmx+UIz93rxlxrg8xKflfe36ubELuZJF0anm3Cy6NJmL6Hmtx0E71J29XlFeYphmAaqytd5LkWJSZAmjRIE5i+r5F3cp5/0/XQQdi0uOGmV9OC6LPwY7b7NEMmzF3D272xYMCO4gK1dj9klubR6jtLGydIWMZVg7SiXrnPkrkJsoV5NT2fCEYqWOoTISkjXLFBBYPkgtRqiUm4dXyzcShTRLbC348VircvHTn2e59LSG56+qm/wUaZmIpxsj4kzsMjAvKilzYwngdgISRnWtUUKCSpudUGSQzeUZCUmmSAuZPlDJKH4BE7jiBwJ+HETieh7F2Jajzma9ogmcdUutJJ6NMWXcIz9/O5jne5vyVPbhsHaofJ0DGpfBqQpJMhBdxyJkmdpimPw3S9eJqM5Tybktm7HR8rGZ95ojV1Uaw6DRI1R6k9ElAuF5LvMC3UdA1dr9tMs58FJNuDdjoDdzp6ozo6xfDiAFlfUALJtqbtLXMrCoVk1q0oYI29FazVuGSQTKuVLUFSRrnCeZURrvA6utSOB7E0tXJIyv6TGki+AJrufasKdz+XkHw0TK7v8j0ZkIOm1kuYIwn/o2DXD2y2PF0DqaaQTEEZS1GQHEWfZAuUk3AxJuA1FDS7qsIC2CZrZ+yJ7WFZlqjbWknrucrC5/CIRXOPJdiWKxGzcFHwxCOkz8DzMhWB+JrozSBvuC7A+GlNQisRGyTz5A3mDTTQ+aJcCw46gXaYOdV3GAI2aBRpN5C0gVI3Sb0Lq1wUrg3aPj8PJKnPKk8kqul8uqq9fNqQdAGS/25+LigcuXx/GdDRmVSd18ARfINCx8CnGSHbOT7ckGwL+iImUNnRhTTB1lXPyWDIILnUeq8u5QLAFgWBhXJO5pQn2rZ/bfmVWcu+pdQQWt5TBu/AMSEksbcvKkIIScyRPArfMwuwPNNqqSWPuRrIamhYrQ3dcAfhua21pnior+/zCclH/OjGfjgxc7AiOFtttkESu37oIDkfJhKSmU/SAUnUJrHhsguSaHZVkFzEyvNx2rldrXB0kMwzidlW8bboyd8GTdJmQrVFSPJyWyZImo5DFzijg6SKLrWZVZcrNBjEBEs6HnSmOKWx6CZOlxl2SVOw59rlXXQsd3zlDQhyWQlM0cFtC06N+VIB8XdgPyrq+W40MpP2ZzJ5m6Jf+XsRkL/TaMjHew1JlxvBZW7VFRNQdXVRlDlVmVlpkI78u+qSWocoUEqxADIvJPG40CdJIYmRrSioYClISsC3IHkS5ntkwq5KRbwR18RTQXj9cwfI8/v3//C16tDHx+GHY7J+qqInsoHxGYDXdFKRpk9ZSAB+5GKQitIkFSRH/n/23vvJjuu696UMAjMnnz5pBuSVw3W4tmVfXYcnK8uSKFJizgGMIJFzIgACGGSAAIhAgFmi7Ov3bOvFv+PVK5dLpVKpWCqWSn/Kfuu7utc+q1fv3d1nZhh83/th1cycc+aEPt37s1f6LrofJpDc1OqxbWx1ebSKgBJhV4ic30/PfR+B8f5WGm5Fz+Tjbdpx9FoMW7weqqP2JemkAb6QeUcrCeX0gpWLIVb4ECrMCcISqhPKUAL9aVpZkU2dXFTZohBrAJ8lzKkXprLb6oRL6xZWaJOCAlu5Gqu2PM4ho6mFQoT6cT6slH0fKH8PmfYWctWMkUKhusdixemACtjHNgU2z2chuVQCSNgpWoxP9pNgrvJEoMDHfgfyvKcIbDANXv0dFb+v/P/Kz9MESfwMfddltlJIHqHNfd5M3YMVbTBazHAEWGvVQFJ7i6HB7lgfYZjQkVrCtp9+D5l+jpwR3NgLHEj6IA9JXbgDSMI7fKbZ4TUbhjV/N71f3I/39Sqt47B9WW3JS/RZH+mP3N98Yc1v/883bj75HwqSf7h27cff7y/wROmd7Jb32GKQ3NFK2Gy4tS4k0TMJUD7YaTEcxQDJx1pt90S3yQU8yEtCUf7AMFXfBwDTi6fnIbmkF4CKcGZVsc5KIWn/f1argmRleLdmCHM1cjOhHX6ZF1DmydXJNUkfXln/47FutwBGvaBWW31I5kv960Gyss9wpYU7ywh1luV4tQepAVcAJV2js0JSAywESQFlnecrQFuB9tOE5CyepBY4FxNISthVwq0WZsjzScEOjAHZ7/Ksx9T6DEm0Y+TgSGvofvYw+0FIorcR5kVaIpCUwh3oc6NP8tFmi9dtgST3SiL8S+s4DPKhqC3ZSK/9YCfhQcxf/I8Wcv16Mv75Y5MvulfGw3Qn0EnDm3s7TbeHPL5NSYNDrRuRK+ylgNze7HurA8mXaMfxLB1I7pnspQYRAYgJiD3YbDjkRdEuAkm7TfRl7yEwHhon3Ipwcjxwpwe4IHtsNsyzYoHjz9iTLGvGr1V8U3IhV1UBlrVMWI/RFuKU/V8dT7GsRaOqwTz3PMsCYxGSvprPwtF/T7rMf7oozuIVfxaQDLU/VIVBjxuYaVCKB7kakBRAWkjGvMlYXlRDc7UhWQnRwsYpXuilC3fEJGdoQamrWPFzH62bMIDRA5LWUxk+b2HpPUsG3MD/T8HYGwUs0yHwEEDPrYNSuJP0WCoUijuPN1ssLwpVnZc7/TTyR5/zQNJyBzvzBMmGO9Br8vNvI0g/Sjz49lzb/W17/MtbS6de/g8ByG0/uOcnX+kkvwQkNy+M+cAKJOEmA5SY/rFl2EtVdbr9HCCXA8kn6TEwzJuE9yiQvH9+zj3QmOcZZYAk8p97CY6HF+jCmYzdqcmQIXmKTjgLSdGOnKX1oRDGrIBklScY8zzqWqygJgbJshYM63XpnF4on2thF7o/Vq1a11YKSVugYQs9qhbBGDyni2x9SBa9hs7Mm4PiIruynGRVzrUq7BrNEypA5UCpALnU6y8bkiEvUkNSHht6DyHgxsLqnzQkqzxJ3SMJLVU7LxKAFFDq3CR7iwQlAeReWjMtJFHcCEBaSGrbN8hCsRlUrQkk9yUdD8n8Jj4t3MFjRZbusUYzCMn9/aaHJPKSeJ9oH3yiO3Dfa/Xdl+d6/3Ek6v6scdtvtzXnWbV994h2IsNUXggitlt7qGolV5k+IAylvJCJk9mOInT+Mh0w2HQqSCoogJDpCyxPl1k2HQSGePZzXYib00Fuz7mHmmu9J/l0s8kCumj7APAAxTPkUZ4e0s8RXQD0PmHo23lNxfWrxIurmtHtglodXukFFWdiVlVCHlIrqfKe9IJW10uIyXzVXdRmWQxji17ZQjfLIpv3HLtB41ARnWswXdaOkP3JQV9ZeHEuew/6881amTmrJ1mlyrN8D7qYLwx55GXeGW7XG1htuM0aHgvDdS12ejBkg4cqXirgq02DWRseH9to2U2SPI9+nRPdXsFrrVJsKssJ60IvL3oyHrojXPnZ5Tm4MoQdf2NY+6FOarbP8QCr2Ax8perezKynqE3AiMigmL5dG/SwIfeJ9X17kj7uYDZo+rU2fR56T8e7aegXw+230Wd6gX5/nNbrB+ebPOXjoU4qKrOdfu7F+yYYoq4FBhm77XTfKwTMl8hLfZ6+66/edttv/9ezF174jzEaq7vmNzvRuL92DQMS88BikESFKw4k4KhNQClaroAkLAdIpekqBkg+Td7qY3TwAEp4lbBnWukoFggIYHHABXRuPGJACiRPDCU3lIfkLLJs1qp2lqH+udDA4FgV5HJzHjERaQ27War5YuHUGAgEBlWQWw0ILscTsZCc5qynaiECSwtJDcpQyG8WuNf1hGOKNCuFZOz9yeeoOraxMGXd79LC0UJyiTa8MXim0JwCUgNMe6t1IRkq6Po0Ianvl0IdVI0CiLCDvY43/I370FHAXQW9JN/zmFWqor0DoBRIct6R+xanVgZK/beGJP4GJLG+a0hCfQeQBCBP9NJCoj30HrbSZ3qe/kcgiSkfD3fT2hQNSSkAFUhuH/Xo/1runttuc/fTc/7F2vnPv/rO7zbX/OauUecX21vkEtMuRwMyZwaSkKYDHPFTfgcoZaTVy902K+aIEg+MFXQymMpoLcjPPdclz7HXcE925twTyEfSgX9mfq17pdFwe+ixUKY/SxfQOYBymLCdGuKCnkJSRhzVnU4Qg1BdSNqWgDpyYrNCskoxprSpuSYg7fOWeYGfF0iWgTIGPzELTetNVkEylCvTHlfV+VLWomJD47VaUsz9ZYCsA8lQdWnoc8e+U0AwBEL5/QStD2LyWP14C0hrVZCMnvPGI64DyRMV+dy6kJSCHYRYD9Kad4jWRoCRoZiZgFODMQRJFN6gGAfSb2wRT9ICUEPS/i23wZvE+g7juhRU3LZTg8Tdkf6QK2fhRW4cpEMrHmqhjQ9zgtvuAfqcWOfLILmRHKEtE3ocrd/3EVi/9IW1v/0PAcn77hg7eJJbG3NhQJZ4khaSmPcIUAKSMC8y0E//Fki+1G6yAZLYWTzTT0EJSMKeo4OPWWSIxR9PhgxJ2PlRCkoAcklN0xarW80XW4zsAlAFnDoiArMUVujwaghkIfk0PdmiSmkkqiijIBlaHGXxXCkkVxOi4f/Lg+8Ub6jyJrAMPbYq3BrLk60EknXbZepshqqOU5VJ60QIkri9zKtkCCkAak+xCpJiEm4NeZTLheRrgbBxCJIczl0lSNrIgCjbCCS956ggmYJzGISk9Dnuy7xIRNiQigLYNPSs4X5t+jYLSRjWdhhPWqLnP9AgT7fZ5RAwPFzkOeFFYj1HceUDjXXuRw3Iirbc/b1UnnQb/d8eAmMIklsHxIlh2z3RnHN3r5tzX2n3P//9kt/sd36J5v7DC2O3jSCpwYjp0yjb1SY5yc10gGAAoniPbALMXgpKGaGFqljcDvBtbrXcJtp94Kd4nTi40Gt9vt1giOK1EFqAYPaF0cRdpIv0Ap2k5+FR4sIjSJ5MusvyQGJFHKH8WazAwV8IFZCctfqwSoOyCpJVVX2xqsGyEKuG5OchJ6kLOOznzXsl/UDOK/HV0dqLkcfWzUkuB+R1rK7nH4WwycXasHOVhVon9PdYB5IWkBqUIe9R25nhKJiX1LnJWSAZOmfy4eEkB0n7+aqiM1WQ1MOoWZPZaLceKlheUk4LAcCzC0FSg9J6imXQDIVcxQna1k1BidfYzW0dqcLOJrqGXqIN5RP9tHXvboLkXc2Gu4vW7Ht6XY4KYqQhHr+/O33fAslN7Xn3ci+VHt38xT9wX1nzORc7f/L73/mnr8yv/fgZ2kHvpA+MiiULSRwsbRqQVZCEccsI2ctJ6nECkmI8HzJ7LFfGApQESTxuz2joXltYdKcXF9zF8UIUknUKK6oW5LKwUkixxV4ksZxkrEVjJTqRVeHWKkiGyuvrWN1wXRUkq6wuIDUk5TPpnJguDAmZ9m50Tqwq3Fr1+arOw9j/ymvOGj4vyPJFwsz1bRBsuai7sbGblFnNepIajhwOnbFwp2yTLJC01bmrAcnC/NLAPFILSXiUoYKdHCjpM+5TOUkLuarQawySAtAd0GRF1LCXPYYAibDurm4v1Wrt97iOBPUjP5onQM7d7r7fmPeQRFQQ6zoev6+TSuHtw/8neO6u27c4cq/0m+7ZVtM9NNdy32i0P/r9L6z7/IZcf/+223778sKdbnOTDkCjyQfDeo4CRxlXJYbhxzD8Lvfjb4y2gr3ST20Tdg9JmhAWkXIxfAE7++nuBY95mQ7wZnLD9xFAUQ12ejJxF8iTvEgXzOv0ZcPO0xcKO5OkNt2hFneZoXBN7PaYYkhlTjPiSZb1Mc6iOBOa7F5WuBNa0PVFH8o56YV6tXKJSzVUWlYCyWPdroe+VlcJVU/WW5yTWpCs8rTrHrfQ/+JzzOrJFt9PGH461DwLJGct3Kk6vlUWK9apW91a5zsrg3/Bcw4IY8wKydDjBZaHpZhnkFqsqlXMQ9KAEOso1tdQ5eoskJSUGoQCYAAjfr5CP1F4iTwkJjnd3Zpz35lf4741f7v7e/r9LgLnD+mzbEha7CQhL7m7k4IShloXFIXunQxSB2zYJ6do4O6ab7q/mm9/9LmF5P/U6fzywTVzdHBH7tBozKAMQVKD0QJTe5lbs/mPFpIQIcCBxxfJrnu2O+GwAV0Y2L3gMXg8xnGhgmppYezOLi66i5MxQ/IyLSJXaBE5R18WTHKUGpLYaYYgqHencr++Te9arWJLTPFFzPZkVg3LXU4fYdkIJ/uY2AUfUzTRCzUW6bKFUMu6fZY5yTqQtICMV1PmrU5OMnTs6kKyDLB1vNdqT7U8zFoHkmXVrVUtIBLSXi4kY2BcDiRjsPy0IBmKBvgK+2HaFnIkM8zrFUjGqlphodYP/A5AYpajzUFW5SR1GFZaQBAtzEX7stnAG5oN9yjkQxvr3PcJjt9a9wUPybvpnPsRfY5nB+0cJPe2ex6SaC9EzQu3GI4H7rHb59y93T5DcvuGDRc+d4D8A/Ii7+33frG1hTj3wG1ZN+d2ttp8sLVhjqO2LeQmb4UHmRm+mG3ZvEeY9Nl4tx2TqTF4c5Amnfd10zLno8nIHRtO6OQY8Rck4duDnQaHbADHK5MFBuMVOnEu0QG/TAf0Ip0QZ5G7yDxJXJRnR0N3fjhmQ05DJ/g1BHGbhaPNfVRVt0ZLvEsEx2epbi0LLdpFKpZTjeli6tAkzOpbSnN4macd89JteX6d/ynbrITMht3k/+Vnms8qeo+xloRQ6DUEV8mhId9W5ZHGWiD0606LVNLXkr/5PWXe5KzN8f4xlTm/QeHz5cLNgd9D+cRQYU7sNav6JWPh1ljxTqh/Us6RlagthbR9S73CQMtOSBBeb+x0jvJof1q4Axk4SLfZMKtM7xB5OQs9OB7WdiWp84Gf4mHK7XZ9Lxit29y9kKXPIAiDnnYUUz7UmOORhnc117lvNta6bxAgYd8mSH6323J3s6fZ4IJMgHUHRwxTWMp7Org4dpsIsrsGGNqcuCfI/m7tvPuTdXOfP2GBLzXXfnw/vLjukODYcUcWFnmHEjpwGpIWimLy2BAk8btAksuKu4kvKcaJsIMO6JHldjsAAIAASURBVCY6sJu58qvJFxvCrJfHE/Yg3yCIw64NRhxyPZcB8mxWlCGQPDcYeW+xCpKhRbwOJAtTKQJDdcsmNNSFZAiE0TxQRS4yJvmlvR8NyRgEqyAZuq8MmlVh8RgoAUkdNZD70u+2XojV5idloY/dLhCo6xHFDOerPC/OW5j8zQArqS6NhRBzG6AKMMU8vRAkY8chtNmwwF2uzQLJkNXztuuLr1fp7YYgWdafaQt5BJIH+h0PSfEgQ5C0hTih9VqAKICU9TkEVGsSbpVak03ofeymIw4faTUYkj8gKAKSX59bw/YtgubfIwRbAUnIi2ImMYp4dtPvz69ZS8/Zcfcu3un+eO26z1cBz/Hnn7r8N+RJvjIecwXSrkbqpm9tNHgCSM7MF2Bdd1bpUSYHAYla/NxBXzwkkNDKgVEw6Hk82u2zksORTKtwBx38LeRBolDoFEHyIj3+ymjgrtMCco1OWDYC4HUC4SVaDM6bRYchSXZuWPRqtLchC2nZTnQ1IFk2HLkOJOtWntowKhbYWO7LhiUFnDoPWAeSIW+xzDu0t1ctdFWLoPSzCST195i+Rn1Y6WrXWFhw1rBhFQT0awok9XuqgkTsuIonPcvr19lE6MeH/s8+5pOGZNkGN3RbTBDDKmrZFrC6kAzJSOq0it/gShQke115fAGSZsSVhFf3Ze0fNkQa8wg1ILUjA1iVGWb3+i4Gghtykc8RtJ+gn/fT+7uLYAjP8esEya8yJG93fz8/536APkla35/oznOXAkZoYfDFzjY5SN0BO0mA5IEhec2jPhkBs9FyT8233P10LX9pzedM7PxPGmt+8/jv3emeQ05ttOAODyduy/w8i98ilgwTSNqdRrGsuAhJAHI35kDSFw/TkETP47H+gCd6oK8RGoWorAUgEbc+TwcRgLy2MHZvTsbuxjAF5VX6Pxg8ywtqgZPF7lxm1nuZhuHSi0t+D0ES99cRE9AtF1qIXE8ZsfCsC8myashYsYsu/CibrlAGSbmYqxZku6kIPVYf89htVZ5CGUTluwu9Jwsy3f4BIOm/LShXw2YDQgg66XHSpo9X6Bjm/2dQCra679UeO30M7fPpY7vS47NcSMbOWeuB23M+NhIsBsmQ4lZQI9pAUt6jPLcf3ZcV7yDcClCWQTIUbq0MnypPMgTSgtF70pAE7DaQU/MYOTP30dr+3WbqRX5t/naG5Dfm17rvNRvsRT7EuqzlkNxFztB28jyhM4s030vJyN3TaLqv9dufr37Jr65b+/HDt9/udiDciiHJt69xBxYX3ca5uRwgGZK9VLC2IG8UEMeF4cNbZXqejwbPkQ46pI2W+nSi0sHBT9y3q9PiiickdK8MO+7Ncd+9RZB8lyD59mjsbtLJcZVe+zJ9ga8PhywoEILk2UESDCcCDgIIG84K9YGtBJJV8nd1IBkKndrCm5jF8np6EdHhSQuZ0MKrbwttLEIQrLvAVyms2M8iOWe9IGpoShheDOfF+SzSINEGbfqxZ2fwPGNmn9/aaZ1PN3aaw73pcTpL5z1MjlkMmtZzF9lGGHSO6xjaqbwF4GdNHwf7mJVvNFbmScb+1+bkYxNslgPJmARm2jfay23o/DWXqXVJ4Q4X7TAo8zqt4kHKmCsU18DqwNF6lbVAma33EIWBWDmGTDxBPx9sd9w9tE5/p91w32qmniRA+Z25de4HjYa7n+5/hKD4WH/ebeg1WZJUILmrk/hwKyDJWrXgBHmRW+n7wCSo77TnPzr14rPnPheAfOSrX/nf7h4N/x1zI7dnydRD6xfdvsmEy31DgNzVT2aC5L4knUsm41dQrQptVYRaRQMQgMRP7Umi+gmQvDHquVuTkXtvYUKgXHBv0cJwnU7sK/Re0S8JxR27gPlq1yqIRHI+dSFZFW4NFe3MUrgTyz9VAVL+R3vNsUUkBplY5a/N64a8yWm4r9yTrBtujYFSfz79/uV/Q5DUoIzB0UNshYv82QoDCOX3Myq3LvdJtEMDUo7dufEk2GyfC7muAJLoO67yJG1OMybW8ElBskpgYBZIlkVyZgm3lulAhzap8n7QV32UNvwWktqbXC4kQ3nIGBx1uBXrPdZ+geRzBL9Hm+RFkrf3g1aDC3SQf/xWe959szWXhloJkvc2W+7BRpsh+Uy3wZDc2qLXaqWglNfByEN8ZrS/AJJb6DgAkigA+t3Py3zJv1w39+u7b1/nNrc6XGH0/NovuJ3kwWHsya7R0INx6kHmR65YSBbmkdEBTMMGafgAhgMCUIRi8xjqvJMO+I6k5fYtJORFdt3b4557ZzwgQA7p54ggOfCQhKDAWVWyrhcnLDixEvCq0vBZR+eUQXIlnmTsPdrK1BgoY1WiZd6e7h+tW91qvUkLSbtQWaDVAWPo9WOepIZkDJQajvZxAtKqUGFlrjPiJWpvUd6L3JbzMvsDLkCTQjT8LbdBVAM/YWch1Ugm98vfdYAYu91CMgTKWFi27vFZKSSrWkSi546BZEwWcFZIBocYZL/7jWt/aiFPUodbpdUDdlALB2RC5rZgxxdUZi14cpsUV5blJ0OwBCARTQQkN5IniNGGHpLNtvtOJ7VvEy++22qx2g7CpQDkw/Nt93hvnuVFX2R1NXrNZgpKvCZeg+cTz69zh+j/D5OHidd5mpyqBwZd9xeNtZ+P4p2/WLvu43vnmwzJvQSg3UT2Ld0me5Uo+Z0FkgLGfUnPm4akGCCJXZMs4v4kIS8SkIQLvntEHuedY/f2+oF7b1EAOWBA3qT3hrwkwq2pkICS0couTFn4yvq5qpqLQ2Xjs7aAhHKSsxTuhCarh7QzdZ5RvGO2SL4mFAIVb0XDsawPzd4X8j5nKdyJea1lkLRQtOHiECS1hcAVg2Ss8KXM6nqSFpJynwBRQHi6l7AJJAWeGpTaxCsMgRDepb5Pe5sxSBb7GMvbaGapKl4uJHUrkFgsV64hqTeZMZH5KkgWxAIiAw7wu1yTejOjW80kJ6kLdw7TNQlDa5yGpBUF0ODbpsRd5G9pzxMg2tttl4KHblaTgspWDUmMwrqbmPFNgiLsW62m+1677e6m57uXvM2HyWt8jGAokETbCBizrdFhUMpr4DPuJ4+U18Pe0G1szLvnxkN3b6/l/rrf+lW/3//5Zw7JL69b8zFix3uaA7enlTb278ik5LagsqmVlu7uhDZgtyiG6+eSZYCUadkIm/LAUDohYMhBHqUDcrzfdKfoAJxJOrQQdGlBT0OiKNp5lV7jAB38g/SaOGjQaf2ATq4f02L1/mTi3huPMy9y5K4mI3eZfl6g/ztPJ47fSasdLveB0f+EmrptsUfsogvOjFTiAVVTNGIDi/XsRjueSr9GQUlINYGHFFP0JuFsSYisbjhsJZWOtsUg1IZgnyP23qoW17qQsjlBDUXrYeK+C8h5I6TPEogDb2fpuzpN34/ch7/x8wIXkg2nj6FrApEOpAT4JzZ2iIAMB15S8Vy22YMhMnIhU5KCSAaeR57zIm1+xCRcbDcB9tjFwsnR6l2jxBM7NnJ8TqENJsurng283kna2MKsqPzp0SC1ivC0HF85xtbbl7yntORY4QR/zhmlITE7RF0GqWOtglXJPlYPzU6HLhwbTK9b/RnOi2WDGrBBwebkeA+zTlPxcwxjPswDj3ucqjrIEznSYcuS0vJ962j8706VzXZw60XbC7uIPKjY1gyEO43Bg9xGx20zHYuXaL1+tt9K1XX6bXcfvc7dzab7/lwaWv0ReY7wLDEi60HyCtE/+Uh7rXusO8eh08d66YSQZ+l9Q7d7cyZKowUMfJsKfaeojcFYxCdvX+f+6++s+c1nDsn/Nr/u1492yH1vDVkNYU9WwYoPAnV3gHF3wIMszC3LPMf9vQyUJZA8TQdaIJmOuErHWh0iGO+ngy2QPEEXgIbku6NREJIwC0kf7gk0yGtIlrUWcDNy4GKITWaIzQS0BT51RluJyQXl5++VQPLUsLjYfNaQLLs91nIRCtdVDeiNvYe6nmRogWevLlugxTQkz0DtKXCfBivAiAWQi8voe4PwhUBSg1IAiRy71yUGOBWY5Xn5uQPwOxc4DrHPHNukWIiEio2sJ6whaW2lkLTHv3D/eJTbFFsVoakGb3EDgMfGICmgDA04nwWSR/FcGSjlveVy47JhknMk8+5P9DsMSoEjLJ0/mQ46hiOCdVbSXOIdshg5/Q8Uy7YMp60hqFDdAr1sep5NkP3MLAZJCbHifwBJ5BUx5ePBTjrhA5AEIO+an2dIwrNEj+Oj7SYbAAkvUkNyA70PTHnalIWDtcNlIYmhFk+vm3dfabZ+9ZkC8vULxzb9XWvu1093CHjtEUMSrjze7DZuJNWQTMEoSgmoTNpL8EKbCBt9gQJJfIHY7cAOEcxgXKhDX/wS7UhOJm06ETq0a6Kd37DPbSC4/yAgSQf7AEESJ8XJceI+INcbBi8SkHxzmPZIXskMEnUMychO2vZB6n6pWA9iVc5yFtFtG7K1t1fJksniI4uehWRh8cmOgfeUVgjJlfYGllWG2vaBuvqqZV6nbXQPhVJj4dYgSFnRqe89RQ+pJCncriHm/6aF78I4bVNiZahelxfGi6Mhm3gSAkhUa8OmAv6D3GuGYBECmBcoiGwObLi4cMwDkKzaZIRuFxja8zR2/sUgeTbmFWfVtVZqUCBYKDAKjEaDxWBZd25nGSQFlOlUlXzxmGyW/KYp8yixoYJNR4j1cxEuVuvpdLhDAIZ2Ohi8S5itDWGpOjo2WwnAAB+ihLBt3TwcRaN1ay81DKKASPlj7Xn3IPKN9JMB2UoNkOQiHVq7H+/2GYaptdxTGJ/VTQ3iA8/S+32h08xGKGb50U4nrxSUQRKP2UCe6Xc6vV/sfuyxa58ZJLdvfvbc19oNt6E3jEJSwqzaLdZSR15UV4VbDybpjucwXdgCyaMYW0MHXAAZgiS+ZACSRQaw4C8MPSQByHdo8QAkuT8yMwm3+ouy4OEMo03Feh5gTPJtFkiuRNs0BEh4wRqSqZZoPxo6Oj0aFPpEVwOSKwFlGSRDi3OdHrpQeDX2+mVepM4DhmDJ90MXuN8veIsakjokqgGJsCgWPEBSgHiOQ7gDD0nxJjUkL9H/eVCq59WvGQsjWwjGWk9sr2gIkqdHg8rq36o872pBMubNns7pNU9l8AR+RS3eIiAFkscJIGIeliuEpA63yjWrq6v1ucDnw3joQcnD5P01kc/NynqBtROG9ZUdjST1Mi0kubinnwGyApIyjQkGz+/ZDjRa59z9qFxtpi0eAkn8jmHJgORjBOsnCIgakk/0Oh6SG9ptP/pwSxYiFkj6giLW7k7Y23yu2XZfn2+4P261Pztvcrzmtt9+D8OOuwO3v02eYrPrw62i+G5Jb6WO9vAupcvCAdjBAJKv0nPgC8MXd5QBOUrHNiVdDrPCBJI4IfE4hBAw7WNfc54HkR4b0UW2OCYPEoAcuLdHCbd+vDkYcqj1Ep0YlwwkY2GfM4GFVi4U2VnqMAvvILOLpkzc2+qkhsWRy+f1VQlMW0h6T8lA0oLjXE2rLCxZRrizqgVCL6KhkKHNC8YKa/T/2s8li9DZkl5FuT8GUH5+40HGvEjJFQrQBJLWc8Si+Pp4xMa3ZeFVDUgNSfu8FtYhsOvjontCQxaDpI1IlOV2y4qgLCSrzpuq76MMktZCY7rkuovN2SyAcoWQtNf56UH+XJLIgTU5X67QevcGrXtiV0cTtjcye32YRtMkBQBP8zjB7iitpUdarTSFRWv4XhY7b7PiGUxymNJCoiEJQMlM3ycJao/Sc2FW5D3NOXcXrc/fb8xxFSsg+SMC5AOtjns4aw15nG6HrusT3SaDEsB8hp7/GYItZkbCk9SQ3NbJ64PvxASTJK1yfYWe5z76zv58zWeYl/y9zrpfY6TJRvIkY5D0kkfSN2M8yX3ob0l6DErJR8ITfJWFy3sMyNcGYz6xEGtHHpILdoap4UQEUJG/3ENu/F76Ag7QFwJInrtjwb0/GTEk3yKP8xadDDcgJJBB8vX+wEPS5kbsBWW9DAtJuSgsKMvCqNpTjKnf2ItSAxJ/WyhaiGpN2lwRTACSegFabUiW5RXLQFkGSd3+MCskfeFGpP8RWr+wGDxjYgIFU6FUCyp9n4aZtlO0CMB71N6CQJKBqcKrZZAMPfeF4TAKSTk2sc/tC38qPPpZgPVJQbL03A2IGejPUxBZH/RLN6wc2VpFSIZqBupAUs4RQFIsBeWY7Qp+EiShZ31pNPbnhwh8SDgWxZCAJByY3b2Oh6TkMAWSu7IZkQLJjZ106P1jjXXuYVqX7281CpCE3UfP/2C76x6hnwJJNvI+Acqn+l3ORW6g13yergV4pgilxiCJQc6AJBcNddJq2W+Mxv+2+eH73/ps5Ojm1378CFcyDd2rBMmDzW6uP2ZHV023HiReSR4GMGrbl0gesuMNrQ8IBZzsD1XVpYIk+oiGqSepIXmYdi6nJgN3+T+tZwEB9Ea+mQHyGhftDKeQtKEov3tO4/uymNiLi0MyiPdnF4jPQyhDLiFUVl6mMlMsWe/PJABdmNJgoK/DRroIwVa1Vi0wdSFZpcNZFfYsW1i1JxnzEGMLcNnnrANBCwuBakFgIAunWo/OwtGaPO40nWO6UEfCawJBAaLY5cygSfw6h2CH6fzU4Sj1GgwsxZsNbRxs4Ysu+CnbRMagVXYOxb6f2HlRO9xadf4aacGzFd6x3mTGLLcerLBwx05Vkfct359sii6r717GAMKuJUNvV/uDomXynAJSyWVjY4YcOARaUBSJAiBUyaLlYh+BCq153KNIEIJJVwPnIbspzCBT+kB7ngt17uHQ6rz7LhkEAwDIHzZb7qFOzz1G7IAKz9P08ynyKmFP0xoODxJwxNzJFxi8qYe6mSEJBZ5OsXeTQZnpxdLjnqJj9Y25hvvz1vxnM2PyL7utXz3GCjpjbuQEJMVDlL5IgWROhaGfeo6AI3Yne7LeSIRM0eMj+oPo+7GQPDfseUjithMEw2N08eN/97ZaHG5F68PZ9WN37fe/WAnJ18fj/A4fJyBCWZPMTMm8heRxev86cf+asRgkQ8oZIY1NW6mp80B19DwtPHQBgoXkqYrG+c8CkrbvMKR0E4NfbrEt8SbrfI6ysGx6vozZBJT+9RUkca4JpOTvS5NJ4TY+37LwFxYqW8kqHmQMkh6QXPE6yIEyFn6NiiOYwiN7LGLye6Hzqezc+aQgGVJF0t/dmYBuc+ias/fNAsmVtIDYzbG8b/keY5AUUN4cL7g3yWO8MRyzobJfgxNjAzERSSApzydRi1ODsTtBniZqPI5mIgUalAAkQrEWkgiLotBGQ/IugiNk51hVJwu1ApKPEzueIhg/2xuSJaztCu8RkHy2nwLyRX7eLredSL5TIKlTeRaSqI69hz73nzbWfTajs77Zbv/yFfIi9zYJbkT/w+Q2Q1ScB2IyIPu+RFeGeQKKiG0LHNGjk7rzLd/PwydWkoYm0aB+gb4o3w9EkDyXeZNY5I8P+9wjiRAtV7aSe3+MvpRzk8S9eceie2dx4m5C4Dyb/sEnQj/JLRpYmMRySfDhwC8ous/qtACyg16k1CS8KrnIY5mFqufsCKXYFInQ4wqLgtr5hkznnuR9SwjJtkuc0kDyLQjVC1wVVMrCaaHFso6XFwuHxl4/lI+EAWw69+ib8OW9IaSb9SZaw/lxmTZhlybjXGGN7mXUOcMys6FS3+9ovUjzP9aDFA9CTKq3rYknmz/3897w2UFSqLiNtZDoflx9TmuvORRynm4GUrOhZ7s5rdrwlLUFBTViyzZ4WuIvstHz1aMm9IqNMzbQsQHldYde2zVCjocco8v0vcHeIMP3LblHTDiCXaP/CRkUx2Bv0GeAQX0MdnmY2usjWiNpbRWhCXnvWNuw1h3pQuGm6Q41mxy5Qz8mZvsCTptp3Ycn+SStwwDkDwmIdyO8SnD83vw6DrfeQ3+j7eOxVpc8R4gMdN1z7R5ru75Az/N8LzWEbbUhHwnblBlAuFUJGUg4WIZhPD/fco/Tev/lL3zh05eou7l0dNvXms1fbUkmbn97wIBEKTFExWF76UJEX6Tth4yFWaEQAUiidYN3WZnCBDyq88koB0kG5RCN/kPa5SQ5SB5szvGJC0jeWL8QhOTlbHfNISizSGhAXhgOChe1rf6TPCFOHuQjxI5nVqZPaccahUBZd0RTzBvzfXkis5cVJIR6CkOQXE51YqV3WcPz09AqC3VWvZYssLEwa+g55HHndYuF8ub0bVJAE7qPLYOd7mHMFVgYQGpIpn2O4eebBZJiAkj+PSAwoKE0rZ4MW1khTAiSoVYU8bJLi5gCkCzz8GPzLWPXTt3NXwySVmygWBsQhmSsyt1C0n4GfX3i+ACQl9T3LZBExIytApJX6flgb9BtMExMggkkocr0+mTRnVtYYDu9MOK+1SW6H+ucCKIcYZWfhKd+bKGfFpL3ZKCEXuvd7aa7twMvsuue7CbkMSYExz7BMWFAvgjI0meHwSvV9konNRnivF28Ry+Jl45VFNvcH7oHiQs/WFj4fx792lf+j09XRCDp/OLeLuY3jt3hVsJJXtiuYarhegBi4zDalaAH0hqr6mDc1SBtdIUHeTSbtM1yYaNUb3K6+80WDYLjBRTlTNJG4JOjCY/KAqQPNdvuOBmURq6OE5788dYCwg0jfzJIOEogiXCXDoP5RYleg00UeUwZv/VOyrQ361T2zRrOrPtYnUsK7fh9qMlKqtWEZNnrVxXLhMKhIQiXhXurtE3LFljxFu1nF0BenOQjCxaGtkdN5wx9H6NSwdFg00AMFdzI+W4Ba58rFmYTQ1GG5COtScFGWa7UeoAFKxF6z51HCoz2WtKKQ9brtK8dqy62OXcNsVD/bFU1bGxTVTVs2xbEFYZYlwwzD1a5Byps9ftGy4ecQ1Kcg5CqmN00CQwFllcyQF6lYwl7YzzMINkjSHb5HOFzSByJycj37XohiyRNDaHAEsLpO5IhA+2pVsvdS57mfa0UlrB7yft8kDzCx2mtfzrzGF/ECK12amneEQIEXbeRi29axto528H9m9OCUOmW2Ntvs6EuZgtB+Hutefel+U855PpHa3/nNw8RxA50JwxJKRmGsDhiwvtoZwADJOEtirKDVtZBxRRi3KIKIbF7ztXhwqDnn+6Cs/CTgeQSPQbTQABJ2KluOv7q+sKQIXlrMuEZkjFI6hzQuUSFyzKPVUNSG09Y6HWjuRN/QkcURWJQKJTYLxOiPpwp5f5mR25Vb2KQ1P8T0ia1xS2hCtRYxXBV5WkdD6LsObQnaY9xCLT2MYAkPEWEUy9lv1tI6t8tUBmqJV6khWRBCIDOM/t/Njx7uQKUsshpWOZuy20QB8U+zSSgWqOuA52HDZ2TobYXDcmQhcKzGpI65B4rIKrqnbWDDGLi8VWQLKRIFCRRlTtrv3QIkiFQTs/vQQ6SsFzOsQKSAshrdCxhVwmCAKVA0q+/2fkgfZi5TeFwwhNljo8W3EE6v3YSnJE71JCE5wjDDMmHWCCg654hj1FDcmOL4EgcASghaA5Qikze1Do5QwfFdiXQLnOI9/RabJsbTWLS2D20OP70IfmNQfLzh5odd6I5cifgSbbabDuG5AIPWu4A0RuG5lQAEcldGPKPqeRcm8XIEWLlYaLJtHH/bC/Lh9DvkI6DXaKTD3Zh0OMwwPlR6iVgjiTGZR2jg3yqnbhL5FXCc3yPVXaG7s3JkMMOCLFyqNVAcppzTIskzkLujuw8wRumdTDZMohq9ZOc4kW2aMrjQl6KXJghgBRbDJKCSeUt7CzLVBVNFDfsolMFSdvwHmpEL1vI7GJqP2MIumWQtM9ZtmDHFly78E9D6/l8s/4MXF4/HntACiQvGpUTDUjdvyj3R/vYAtC0kITFPE9e8PD+ULxDVoCklP5n5f4xSEoLQChXyLf1E7bYMRcPw+YyvadT0vpS9t0GvVad3zQ56WgBkRHJiI3EK4TbI6ILOhJTqvDkC+NmmxZU1IjuFeTycn3No+n5J5ujqwFIFsKwmV2n/4PdoGN5Q0CJ/kpyEC4Puv78mYI2DceK54khEWgpwXl1mmB5hH7fQx7lVnJWkGd8AJqsqGJtNTObd4/Ruv80eZToe3wF4ufk3GwldsDgHSLXyPnHLnKNTTbJPQocN2XG+uC9NBfK9S/9Fte3iEGUZvvt8+y9fmuU/Pvz9/3wg0+vaIdeEJqtS62xW2oPuAEVtmvcdTtH5CF2B6llCg4idwRA6lYPeJAQ6j5FFxp2IyjUgfvOVaYKkjahDEjiMShR5pmSZOf6Y26UvcVi5qmIwI3xIFPYySq4st23QHJ6AadQQ1EQjAE56E3DvBL6ingMobDcBQO90EISBEPOQ4sDErs6fV8QmEY4e1ZIxhazkB5o6LFlPXh1POuqBbMMoCHvpJiDHgU/67QideS9SQvAi0bxJARJCzcNyBAkQwU9dSBpQakhiesnFm6NQdIfA+VJhI6/j8REPMnSUG3guIck/MrCvPYcshCUPkvbD2kLYWx0QefyyyAZs2l+Mg7IWSCZA6SCvoakb/tQFax1ISnGIVd4mDyLt5eDZArhPCQv0Xu7kp1fgORRWn/30k9AEoU4KSDbQUii7xFFPtvosdszUXSRsxMB9SpIQh98RyaZx50USTudDJLZ7kbDvTZadA/Tc/3Zbbe59XOfkrDAW2+cfe4bvfYvX5isdycbBLgmfYFZO8TuScftogPsIdmb6rACkKIRyDnIrM2DC3ToYuOxPcOB373i4pxe/Al/OZfGaVKZQUGPX+oNuEXkLLnUl4br3ZvjRQLkgvsx/d/7dPCQm7yinkd21D584L0hCR30cxaT/bKLluziLptetViBhO5TK18UisUguZxXoOrSAz8pPrfdca8UklU2a4i4kPcMvFbo+MWssOibHFwIkhqo2kvMVz0Pffi1bLMUbfaOQDFW2GNvk/NNQ/LSYJBrHufzPpmaiGfoYh4BZjC0qfosNSz143SLVOi7rbOxsZAUKT/+HrKahNgGLVZdK4VxOTH0UbGArlAUVqJxG4p+zALJmKpW+fi9ohepP5OFJDZO17J8JCAp4gHXBqnpfCXsTbrtTb49LeRBcSP/RHHPKP3/VOc6dTSkGvYavSfYVVrH8Tx43PnhgjtBdmAwIeAl7sVmzz1KkHyUxctTY0C2UzUeniKSqfWghWRP1lcPr5AnjpAnuIMeD6vjSbJwDXmSgOPeftMd6En1bd89Tcfu7vUT9wfdT6lfctBc85tvk5f14sIdbmmevsj5rjtBLjJaIXaN2zx0WcKt0/BqahAhhwkkjw0SrzPK8+4QnqMDdq6X9Xj1+xngEo6VX54MGZQcG88geYo8zwu0W7gyvtPdovf0Lu1mAMh36fUASXy5VZCURQ/Prc0veIHFTOebLgXs9YoF3kIy7AGVQzJUdanNPrfeced6xCKQjEGxNiwjHkaseb0AygC89KbDQhELrLZYUYjcLr9bkXFu1J5MSvONAkl7v3iUDNaIx+j70UogiftjhTv+fK4BSe4Hzky3gUjFq4ZfAYKmhSR2PkcLvALnSSx0XxeSdtNnoaVbozRUTg2LIhyFcL85h+pCMqTxuhqQ1CpbIVAKJHGuvZG1glxX/ZB1IHkjGfnqf7GpZznJQJkVBhlIwniqEj0OazAgeZBMIPk4hMtZlzU1TAJBD+RGTBmhz7IZdSx0v4YkJnwAkC+TB7m91WCT+ZZSsCNVruxNdtIB0az808tEDnoNt7/b4GLQ/XMt1n/9Hq3nf9hvfjo6rl9ac9tvn6AvCLHkw9BZJaChmV+PYHmNvMtjrcQP/0QOUkyGCOOk0IN+2URQPDuxtALE+Wy0DczPgaPnO0sHAruot9ff6d5FbyTd/zb9HwTNcQJcJ0/zGsEUP/GF3si+dMDzKi2Eb2Rl1Frz0C90UiCR9SPp3f3lLNylvUhp4obhd+txhgBrb9NeqxQOSchUN55jEZfcjFV8sRDy1ZpZX6CvDjQLlfd4M88hVmyjBb5tEY9+7XxjfL8wT1EWx9zCmJvBWPSOc5uGQIvFRRV+zPUsGkm3UIWqfixCrNJ/dqWkSEYXyugogoaW1s+EWZjFLJpzlMIcdZ8t0rD/cymymYuFbLXp60DgHmpRKW4UZisMCkG4Tmi9TPqvyuRchFlB+lhBWFV1ep2qWGxQBYK2fUT6LNExgH5xqY617V5agefiaFSIdEEoQIxzlRJmzfooRXEHhsf4tFRmV3UIVpnAVJ4Xr3uW1qNjkxFPd9rch+IORl4lDmk5tHqk8yC7qYeIcCgkSVmQoOF2t5qpKEEmY8qjtlptlpfjkVsEwxwcMVeS2IKfsC30WlvJO91Gtr0/1Zjdym0i6VSQZxst911i19+25j75Ap4vz6/5zYb1C24n1OMhRN5PJ3YgSSo5yOPIU7YHXL0KUGq5OQDytaSf6x8KQZIrXLN8oCx2skP0U80zSOJCvjlZdG8vTtzbdD8gickft0YLfrfEwJTS6AyS0yrArD/NXuyBxcGW4EuYQxYtwPH1bLdfN+cUy1ex+HAJJG11YcxTk8Z5C8lYzsiH1wyAQ88da+6XpuflQHLq0YVNwBlrzpcFvyDnZvoaY+0d8tgyQNrbQ+H2lUKyDMxlrR9l73u1IMkerSpqChc2DUqrVUuLc6ywQOBxsVRF3UhHTPjdD75ephKTvUZirSNV2st2olCh19r0TdqUkIagzUeK6cdYrdcYJCU0K/+H1wpBEoCEQXYOkHwx8xLRz8idD1a5J5tfCTWdLc2Wz1GGIKktBkmEYfeOF1iAAFNBnlgcuj+97bZPXljgq+3GR8/QF7G3P+LCGZjIFgGUMC6m6Q1YZu7VrA9SWj1EoikkyaZ1S/G3VR6RBPxJpR6DBRYnx7VxWrTz9mjMXiRmSL61sJ5uW2RppuvqxJATQWCmF0n2WNSIotwCoAp5YHJCvqFUL3Ih12F1XkovPjYPpcNdVntTF6DYnsFQr6HIp0nVqDxHbhHqJ7lwnC100fm70EKmTT9vaJ4ivjcNSQmP5kPhkcrR7Huwx7IAAy32HZi3GFO6kceWAdJ6ckFwfoqQLINlHWDWeV4dJsZx8hGWgKiCzYnnxAiSeCg9dA5Zj1JDsgyUVZAM9YiGRBNmBWWsLzjWQqIBme+1zAsQSEuI7ZfU6RkJv+L78so7EUCWnYvcc5mFXWNiBAjpstOBehK05JEdGKIlo+k2wpPs9Nyj7a57kqD3XKfPkATUdiQdt5/bAzvczwjlNZjIyyGEuqnZzEKpqW1ptwt9klZxZ2enlSq6ZQbgHqDjwM/Z7XPY9a5B8vMPzy69/Mm2f/Tav3wClUS9IYNwqT9kSMLgUcLkdoGkno6tISn6pVa3FIZKV7+wZYukTBIHJCELB1CezRZLgeQ79BNeJAyQhH6h6BYWBH2zsKjsfH0rSDYRvtDeIZ5t1hKiF1O9GMnCU1bqbyGpd+nT/5uGPrVav4Vc1cgogaR4ezFI2pxVCJJlgAw1o4d26rrtQnuSGpJaAamQh5XcnCmiCkEyFMrWkAy1X9Rp1g+1YFggrRSSVaCrur0uLOuahaTexIaLyKp7H8s8yZBKT05LNlKgVddi56cV0yjTm60jEhIKu/IAAqMFW8w9hiEpspK2ZUUiblLIUweSofPRy9vVgCQMFdRwYE6QAZLbuw2GJAYpCySfbafhVkAS0qUHaH3dP0gb/9FDbyGJfKUG5HIgubXRcAfpOt3UmCcvM3FPkqP2PXqNL675BL3Jx/7ur/+vr61b+/GmxUV3iCB5knYKaODHlwbd0qMDeIsdD0KZrC3TtfEY3RwrfXShqsjzKtz5+kKq9sDJeNZ17XChEECJkwOPuT5ZcLcWF9zb9JPzkqMUnFdHY38i6EUNJ5Fu7eBwbtZj6Nstohd/ekKWyY1djJXna0UU9V4sYNNFfjxVB8qav0MwCsl4hWYDWtDp8KpuDxAwxxa3slBYWf9k6O/QAOJpP6NR9+j3g5XGsRycbszHpkY36FsghjzO/69DshBCNspAufaoJKRENIzmI/W5WBUujeUhZ+2xrNOKksuJRxSF6oxfC/0dmtajQ6g2L1kY4G7+TwsfsPgBmfYm7XkXsygkpcjHtIpgYATsOjk5MAi1oEgMEUA4Q+iB39qec88QHzDV4xkC3vOtdIoHwqcCSYxKhELOrm46r1KUc1CxmgKyl1mnAEwYwrIwFP+gSnZXVgS0N7MD9H5w22FiwqHRotvQbLhHyZH6LwTJ+7751Z99MpM/ks4v70pSlfYjgwlDEgbw8WzHpJODpJ2KAY3T0CinGCR9bi6TQ8KJhNd6jXYMR+mLOM7z9tKwDyB5c2HCkAQgbw2SfOgqmeYLZQHQhUHsRQ76HpBafimm4RkruNGl+qWyYQGI6tt0Ezh62jQkgx6dUT+xkLT/K7twDWL9mqHddRkkZ809xUr75bmlyEY8fIBOh0nLYCaQ1IC0BT4CzZiH/1mHW8tgVwd+q3G/zU2WtqeYqusQDPUmqKrnNRaCDUUwyop+qjzJkNhE1aZTi+GHJOxiGrAxUIr4Qb54pxeEpFbeyQ0MUIVqF4aDKPzKQKlvq4IkJivxjF6omQ3SCCAiigd43mPDPdcfMCg3oO2jnfY/ohgHkORwawCSu7LexxSUqWFOJcyCsgqS+H3Lujm3bb7hdjS7LGDw97ff7r7cnnf/eZT8/BOqbP3Cbx+mg/Mi7QyO9jAUtpNVhnXYjiWpsdc4KA4lPWXH7/T6Pg+m82/TkzYrtshyaaK8D0jC4E3iRJEYPJLMUNyBqPmNQb9QQOOhpioYL3A+r+c9SM5FZlDWWoW6oEcWbrujlvFFVXPeYovsZVMMJF6dQBImHl4oh2L7E/2EC1Nq7/MxyaAwTknDsjA9IuthvaBE4nUrgfZEQy0DsR18TEjb9yeazYj3ImsUodhiKnu7rVC20YbPsnBnFkjW9RRzLSM1PFV7TC7rTaBKE+hNi/UkY9GGqs1TCJAyYszqLoc2a3XDuroYTj9vHUiGZCfraMCGpvzYPkvbLmJzkkUN2n5OYKTqHNBiA6FzVQoe/agtUeih53iL7scg+1sMzDSkKxXlKKg8zM3+A1bV2dhqZuHTNE8IMO7PdL33lkKyk8KRPrNUuupCHoEmj82i12FQopWkk9oh+i7xeofoPb5K73djY969eOd/cl/rNN34kyrg+ZvG/EcP0iK5e/16d6jV85A800tNIAlAYgpGobfHDHIVSNpJBdOcWaZ2spC2O8i0cIRbxc5KeAEeIt2PWPmb9FrXCXriNRZyKdKAu7jAPwHI0/RlsRbiwtiHdy8tTrK5knl1FQn/5crhFSRl8ahbfWh/R2vKtYWFUkjqwoZCfmaYVyWJKsoMR4UJEVqNxU6RCEEy9B65FzUpL54QT7bMM5XKyVAbzUUFP4GdhaQUU5UtFKFwtzznZ90CEjt3pFCsrPUjFqGYBZLyGjFIxqqzpzn+JDoqS/pU60YfQpAMgXIWs88dgmSZbnIVJGP3eU8wMuB52ts5zUfCq5Q6DKsbO31feQWu0Dmhrxk7Yksb0lQxSMIRASRRJImfN4cTd2OUttOJ04Euhm10Dm/q9ri6lD2/bsdDEl6kaHvLCEULSfEgAUgxgeSWbqcSktuaTX69Xc2W291KxQgeocd8pTnn/rjX/uWqA/KflpZe/kGn/UvIDeFDnBigurWdaphmMm5nGYopIDHGihtelU7ptFQ5NS87B33WZFhYhOWkFU9SZrGhSZSnhvQ7vCPjFodsUbnKFVcD3u2UTXGQAbbB9oLsJNNarbo1wEqNxaosq/rSQot8btHNKsd0CFR7faEmb+uJ5ZrbA0owoZYUf0GZ5vdQ32dMOi3WD5pr1TDVpzFB71iuMASmy2oiwnJydjkz4XrbR1Y351M3FzRLeEwWsjKr+/qx2+UzV3nrQVBaSceA1ZmzOatdDPRXS44udD1o6UHb0hLzcvX8S6my9QIEus9S/o70EseUe6aarVZ0oJv2VqrinZzU3ii1s+MBW6gHW38vhU2ROQ9uJFDkmXDxI3cJ0LFJdV4HHK27Rc+BToJ3Jwtst0bpDMvL3J415CJOqK3tJS8SEnF7Ww0OxR6iz4CCTvxEW6BMhdrLEzxSYQHYTmiv0v8LFDfzvMrUICTwihUWyDxOmQ6C1pBt/TZLoqJ/H8/3LL23b/ca7k9an4Dg+eGHH75xL30RL5NrvYMnZw9ykISd4bDqFJLYEemQg9+xZYu+haQN/+ncwLlsxuRSNtEbwuhH6fWXsmkcrw+n2oUA5I1huWybnvoeg6Sd9CAXk27ZKIPkLKGv5UDSyoUVw1MRy/ViLh+SVRZaCOtKs4UUZ7R2acx7W01IVsHss4bkJ/H6QVhWnMex77MKjMuBX9X/5yBtprTENo1xGxWL40qqbWOqQiFd5liuUlsIkpy6ChT9sGGG7WgKy5hKmFhdSKKFjrsEMiF0QPIW62OPuNXuvYVFhuRb4wmDFELpV+jvo3Q/WgKhtrav3faAPExr6xFaYz0s6b2/OhxMp0axN0geIL1nsEbCrIAjpOgEktbkcTIdhHsn+20/YAO3baD//06/6f60/QlI1P3Vbbf99pG5effaHb/LAzZ54GZCnhzB8Rx5dDBun0DvZFYOfMr0Skkoz08nyMqH5e8CBKQZXfqMsvADD/okNxuG30+zl5c10I6mYYGQbJhteA5Nfte5r8J4IpWDWUk5/eUafXj62IhQtc0faiuDpJ1sH/LYLMDrVFKWWZlY93Jk2Wx1aaxQJrbYzwof7ZH9jwhJ6zVOm8jTzz1r32YIVCvxFO2MzRBwy2AamvWpPcfYejBVDsq3QNlwsVbpsVW7FpyhQqCywp50qLuVrMtL1BVgOcybH4YQWedCm3otlC6QvD5MTcZqYbrSWxMC5MLEfUDnyft0zsAYmGTsVU4mXoUMgi+nCZKnyGtEWkvAfiwr5jxO7wkGmVIosr1KQDvYavqcpYRjZSQWRAIQut3WBxQ7rL4D28LVs1NYbknabPBkYZCuQxvK3b2m+3KnsfqQfGC8+G+b7rjT7e4OOMZ7mg7C8UGXIXmWPDoLyaUsh6jzTj7fpbxH/HwD8ezRpDAklqXXIMeUeaMSnwegIV4rkDwzTCcSAGCsdj9MK65imppanix08sQu8Fk9xkpPpSTnVQeSthrV7nxjgtshSL4eKNaogmTMk9PVwyFAapm/stCq/btKfm21ISktRDFQftaQXA3I6rAqi1hnkMRnXykkq64fG6EIWQiS9vyIgjICwNBkFx1tmmrzhtuZQuHVECQLhUSBQqCyUV9W09Uq9OgKWYblYGqApK/WN9G0qlYnDUmYaL/K/ElA8u0FwDAF5Ht0bggk38cUJvIsb2V1FaivkKiSTCeSz7c0Sk2cKkASuUwU/QCUgCSDMkkHKksfpUAyBWLHS9TJ3EnvefZbDEl4sTAo+mCY8z10+191V1nH9avr1n780Jr5j7eu67j97T67yceGZOMOgbLtzvTb0xOmP6YPnBq+rJx+puof1JWFUoigL4xLqkxchAcwVgutJdhtYKdxtJ/qGp4ZT4fk8hdNr3lZtXTEPEcbyisLgYZAEF1cTbPucj0VC0nZWMQ8Sd1PKX2GoWkUdhGycIt5k4XqzQpIxl5TV0XGQmW62b9qI1IFkLq5uP8fkuWQjMHSbljqeo2zQtJGdOpA0oJSQzI0TFtDsmqOaZkIQlnldpXWawiSqVTntE0E5nOUvougy+kuManatyP0vOhAIIKk7XqywCbTQDxAF4bu1uLY3Ron7h16P+/Tc/2YjtmHdDx/St4lQIlQLP7+CR3H98mbfYugjWLKKwS017MUne8U4LRczw+zx1Qp2Iluj41Ta3CMCIAHOy0fPoV4AExGaomogNjWfsNtS5ruVfIiDxMkX+32uLDnoW7Tfa3d+Oi9C6uovPPNRuOjF0eLbnebiL9wJzeLLk0S99qo7SHp4+8ZJI/zjLF8345f/EzpvXhU9gKSk00k7ABJGLRfAcrpqK0iJC/1e77SK9TCEYNkrPJRLwS+wnCFkKxa7KogGQq9xiBZtgiVVWmWQXKWXFXd3GZu2kWFWMAnDcnPe7h1tSBZN9wagmTo+pglhzhLLtIqVFXmus14MxtVqoJkmWyenqepBT7qtKKUyd2dMeFWrXG9XEhaO5sJD1it47qQvDoZuJsLIw/JD+izAIYAJOwD8iAByn9YXGD7cBHe5YjzmNeGqQODQk85/jJA3rbM6HWfnSMouPXSIpz9vWnrCOu0dlsMRgnJwusEILcPWhxxBGSPkKO1h+wR4tXXCaq/11778eoICKz7wm8f6PV/sf+O33dH2gN6Mfogd653exu3uyPjNtvJJIUkF970Jzwy5Ri56TLKxUJSKhutwLjOJeBElZ2b6LnKwXqNXgfC6jJqC5C8kIVO+AvPdsWxnKQtLIkNrRVvyS6W4mXE5J5mgaStJNQVlDFISpg65lH6ZvySXM+lSPg0B8pARWes0jM4xaKiyKfKE6hsdlcgsBWdPMUgIu5cJfpcJdv1Pwok6xbulMFyFkjOCsuy/5Ocddlzxq5/DcuCqlNOOGQYSGHk9ZNj7SchQYOCRxoZw6ULd/JDIAYFwYF8L3reJDcpHmQMkjGPUiA5Tfekx/UNgmNa4dpPPUl6X5jh+xO6j22cepH/PBm5f1mgnwTKfyTP88cTtI0k3KIHWIqAejSVg3UumVbygzEnuulkFA7LovAnq44FNCFvJ8a5zAH9PqRj1E4N/3e4k7hnCKrfJw90VSpc/1N37cffvWP8b08urifXdeIOzHXcEh2wfc15d4I8SQDy8KhVCUmtuekBSTuNwhQOyTv4/8nmLtLiBzUHBmQvHc8Fey3LU54eDTwkNeT0SZ9TzsnKoKsgKR6vDUv5kFTFIlu7H04BchZIFuBoql2rFqeVQlLfF4J+yGO0ijchmbmyXIlt0fgkIfl5bwFZrddfrqcd6/3Vm9A6rR7LsVjlcwyStqpVr0t2HNtUA3UUrXDVQ6enClHj6NSSUNj2TGCm5RnTAlIGSWsakKdUpasNty4HkmlhpawbfXedYddzb9PzvUv2Hq3LMMzyldArIPmv5EX+y/pF9093pB7lu1nRD/KaUggkfeGSw5QRhvBgMasSvdeIkJ3PVIe4w2GQ+MEaqI7FBCpUxkobCWzfuO/2jnoMyBMtSJl2GZIb+h33AwLpqkDy6bk1v9nUbLgdfSRO6QV5duSAPTkImE8neeSH+J4apv2SsXxVoacusstDVdT5LPaP516ix0pOEondo9kBwwl0YZQ2sV/JFsFrg/gcRz3Fw4ZytFcbWnj1gikFQjD8LiXSIgocWmx0H1ts986A6SeFZv6QOo6M05JJIaL3itv0ZHoBa5nZx8fE2HXYORbujC2iZbJ8tlm+rG9RhwbRyCzz8WTG3fXheOWFO2YYbWE47WCQ+11PeL9K55e0IhUEokU4ejzypscSXRmkwhh2EyCC1WLyWeV8l2G7sKv9gX/9ael+3vRrpa+XmLFI5cdHh2hDYVvb/xvKadcpbLscGEsXk3UM1RWUCUmU9TBXFijZdQvCI8r0KKsYNLlKNsvFeQHzLJyqBQOkf1IeA49KS9rp9TfWUmJh7JWNsnVFb8rfyNZTbT7cmq1fsuZBDpSNvhtWPBsP3S36/P80XnT/Or7D/Wyynu1fF9a7f5ksun+k+98nPtwiu0EQu0be3nX6Ce8U8LzJAgXFmgC/LmJzzQMmht7DRKUxxG1OtttuqZPakV5qRzODZCpEDJ7vtdw95En+5dyalYVb/6i77tfPt+c/QiXR7iHEaAduf4LxV6hCGpL3OPKjrnwza/ZFAZKwKkj6KrVIOGQqnJx++Sek/YPek5iG5KVRtvvIFo6yPiErdh0qaKna+VtIsmSTAuVyPAL9/BcjpvOPdpyWBudqQDJXBZflglYTkjFPsQ4k/fegvEMNjk8bkgIluX2lkLSbKzvVoQqSHtxGe1OsDJLp7yuDZNUoruVAMqZYVdU7G4Nk3YHU2mxhUAySXh4ykp8Ur7MwSivLPYoij58WEoCkBqUFZGxIszcFSZheI6Qlz0JSFyzKuYzeSDb6PKkNGJT/fbSQg+TPFu9g+6eFMXmbCRfzCCRTUKZhXNGG5ZRWoHhuulkZeQUyXVAleU0/XCMzDOAAJF/ot90Pu233ZyudBvKDQfLzV+jJIBO0B5CkRRdx38Mc5kw9ybNJZkb5Xtz82Nw6AZLNQVoTWOE5sdtCIlvi0VIqfIJbQOhx9IXALdeQjCl9xBqb7WzHKkiKxxgD5Sw5rdB9VZAUCTh7u0jIzQLIECjt8Yl5eMuFZN1Fs/I4GljoQbI2tFpnEK2f4K68wzKrgqR/nIGknCshSGpIySJhxx7pifPXRTosAyUgab3cEKyvqdebFZKxULvcVjW38pOG5KyeZRSGFbnVWJuZwKiQs5RNrZK/032SpwPtICFhdFHeCUFSRnHVgaSdIzu9/vNWiPwE5k7KOQ31nQ/JcYE3+b8s3OH+efFO9y/r73D/esed7r8vLrqfLIw9JN8Y0QZt2OPzDteLF1A3kTlpQfHV14UceL5Gw4eis40F5FLRUvIice1H5Gn+TXsFbSB/3uv88v47Fv/vzQMkPxOGJEKtkPdBGa1A8hzmiAUgCUmkc5P4SRjTeiyD5JkskQ0oIhcJWy4ky1ReNCSrPBALSZicJNhZhRYPW25v851VkLQi5CFIindZF4wxi0HSgvKzgqTsLnOgyEKvZbnHupD04cqIWVguB5LXMzjWgaR9/3UgmYN5BSR1qLUuJMsqikPj32ZRPaqC5HI9xbrqV1Wb7DqQPD8KKGHJUADRXhYtWGOFPkijsBOCpIZp3XCrlgNlePdTswMO7JAA/10j6kGmHQWESz+g8/Afhyko/2fyJP95cT2D0kISgGQbpNeMhFs1IK+qc1QgWayiz3u+ksOV4wFIQtXnpaTj7iV2/Lf5ZeYkv/Q7635zf2/yi2fXddiLRIgViu2srwfN1KxfEWFWwOl8MioMV5WTxp6AZc3iofCFnIxyEknS+ngmTYfS3qWeFhOYQhILiNZGDYlgx+TgfDixJiRDuUkNycoq1kDhjuzEYxf4lcAUjFD150rMLjgakGV9oiudY1f3fg1Dhtpo4o1vVxetNvm+LDSsVUFSA5B3wFm4SW6vC0kNyxikQpDUgBRIalDq98DvwxwDO1DXgnqlkKzaBNYpDCrryVxNSIYeGyr4C0EyJJd4xVS96oEC1mxriHh+FpLWqjxJa6eNFWZx9vPm+0E9RJOc8pXvd++npkP2PCkkQQ/l0P14hH7JifuHySIB8g5uC3l/kraEIMQ6DfenG9+bo0W6bz2HbBG6vYFqWPII/aZPpQt07tx+jz683U+HaeC4HKVzcFO/6x4klv3X3/nC8sKtf7lm/uN7mok79Ht/wl4kIIk4LkKtFpIwQLI437AaksGKNeNNSvWj7MhkZyCQRO8LRAbOZhJSFpJlwgB1pkFULdJ2Ua0DydCCEaucLLvwRfKpbIe+nMkTuZxTZNjw5wWSZeFTLt4ZrczqQFLbakPSfuaYJxyCJGyaI8relwpfWUDqHOn0fSwPknWreOtCsmp82UrDrbHHlylyxarFQ5CctmSFpSX1PFjYucxihTsnuNG+UwCkfbz1TG1PZmF+p/EcqyCJ9QdFNK/3+gVI4ny/2eu5d/spKD+gz4nwK0CJytf3UNyj+ibR1y7RtTeHCykoJ6McKO1mbxqByXKWJvLgK40DkHyI3tt3RsN/f+iryxi+/K11rV8fWfhDt2t+wN6jlNce6qQVpTII9Ew/9e5Co5OmNpuWoz35dEvIhVwCO2EPcok/eApQ1oQdjTwgYcvRUp0FktZT0QsOIBmaxFC2WBSqaSOFCLYyL/Y5VqPloMwz+DQEt0Pvr5A7lFxdVrSSelFFSMxqqw1JW0gT83KnoIx/bpznElqWz399MB1rBFHq2Ofyi0wgly4C1Sko60HSVoDb22IRleVCsipMP2vhTgyUVRrPVQLhdk20uf9Qf7OWr7OFO6Fhzba6VYOyKiepYVlvaPVUOe314dAPNEelqR5mL8cD5xZyiwidvk2fGSo8EBqA5uvb2Rp5ZZQ+bzpUPW0jvDRacFeHizxpROxNhmTebG7fRvb8ce7R++6kinCAJETSH6HX+uvbb3fbHnjo5syQvKc//vkra3ruyPCL7jC96BF6cf7ZT7wMHPp2kIvk8Veq/aAOJDUo6wogSy/T9ERJvLE3Oxr66isBJGzWIbV2pmAlROi9xCB5YzyqPbJIYuza9M4olNupIyX3SfXlfV4gKTnINzGhAMDwYcYRQwL6kVKWrg234b6VQlI/xv7fciGpw0g2PFnImWahZQvJFJCT6GeKFZxJleJqQdJuAFcDknVgVzd6VCbYf2lQIkIQ6eO1798qYel+Z9vnnKvSzKpdc2OwDPDOZgMk5L6zAajWhWTZIOp8Ve407Iz1GYDUkLRrVQiSLFlH5xggibaRN8ZpP/tp8ozPkCOWgpKeo0/X9qCfs+uZpaHXXi5lYlMpMAYkceBit8+QhHSqhuS36O8/aixD6Pze+fZHxzuL7mgrbdQ8kg3QRLvF0azC9ORgKh2UKyZRlZRpn021yn9MoowVNQY9Nvly/MmjYuryZfIJKJDMksh1wy8xq1q0dcFOsHLRFJFogEsv3yzN7NPYf7j03i6qFtB1pdgKsDYepTymCnKhYpRp8n0YLBixj9X3611jLnQYyAvO4i1G/592qzw3LwsNya4Wv6MhWu9y5bG5x2cFCBa68noWWjb8ab9bW8WrPcnrWZj1hgq7osIQVgX/UPiVC3roGpNrSYozdIFGaIOoN4nRCIzqE9bnbUjZqir8Xnb+x/4vVBegrzG5z47astrDsdYk+X9fFZrETQ8u8LnBUSqzeWE8rXw9mxuuPCio9OgBz/4xo6EvAJIhz+eygiIt/xabd2lFCGLepgi+iyfo5TGHsl6k15Wcj9ig3iBAQlDmwnjIPfVclInhGGRoLzw7XmQQwmNEuFXgyD+h1jPo5QolJTIi5yf+9scZRUgESfRSojsDY7UAyW/T+/7dNTNK0/3s0oUNj/RGvzjWXqA3ulALkhcCJ4P02VRJUl02ouYFWSo6GBeH/QIkdXWWhSTDqAKSdbVHVwrJ5VRU6sfbHXiouKduH2BI1KBMr1QDMgTJOqFkC78YCEP3pX2C+dujBThZq4OFHDxG60nGqlO5qk49nv82gOSQD537ForWLCTLin10s78Fjj2uNg9ZFm4VSGpIV0Gy8PoGiNbzDP2Pvr9qKHRVPnrWSEOZolUMrPo2e33ZMGtsClDsdUNh1pBpT5JtNPT5yTJI2gHO9nG6v9JCMvY/ZZDUBZra67StJBqSsg7wpjDzKnGNXc/m8kK3FZAEV451UhNIAogApIZkGmZNZe1CNSHafL93Fm4VSGIe5aP0XgHJhdtm7JX8y7VrfvME2iug0dqCgHjXN2RyU2bS9fPMQglg8Sr9EOVALN9CUrdcFJQt6GC8nknb5aWj8koRdkcnB2k5MxBXE5KhCkRtZYDk/1MeXahKsCyUGwNcaKJ9FJQzyu4VF7VE9TaFmuXj8Lyc9KNN+P740kkuFoKk7Fy9RzdQPVh0DK/ThYKf+BuPw9BYmDw2BkkBpdynvcygJymvp8AosNJAtyXv9vvJFekYLzIESXn9mEdbB5ax2+S9arhbiIbAGBMjWGk4vsprrCO/Z/+26SKtxhNS5AkNKNB2xZgIh/uwoB2iXgHJ2GxKC0kblvV5y8z71LDMm5GzM/fL+5P3cZ4+DwzCLjA9z1Iic3xsse6TJ3meQHlyPHCvDXtc98K6q92+O0DH5PjkDu6fvDYZsF0dT9cSXVwmBW6h792HilHcyRNFOqkn2SdI0vv563Vr3f/+5psPzgTJryW9XzyDHGQDM8nGtSB5Rg1WZm8ymxfJzah2TI3pR4S7bSGZC3nSAQQkizPfsp2MgaTX7KwJybqT6WMXqAWkXcxt/562GCRzTfBmcQntipdTPapDqmV5U1s9qd8z3l+1BztYESRj3orfOQYAmfMEDSQsKMVwOyD59mSBDaDkMKUJt4oh1Ip5evj5VlbKHjTx5Awk9fssyxXa7yUEybz4wepC0oa3Q7fp++z1UCfkGZq2Miskqx4XgmTVNXR1VBzlZmXrQs31+jnrQhKA1IU8XiC9BiTLhjjXgWQ5KMshKa/vjT4PeufFAEiZZ4kqWJ8qGqUTWODVApKshIMJHq2G295oub09TJhapGPWZTgCkiw4wNfEsCC+YSfYyHfu53vS6yLfeSLr8wckH6Hv7+9azV/946VLT9cG5DNf/+rPvrZuzW+e7LXcKaL8oXYrB8fXZIr0YDoZ+/RokAu76qHKAkkNSmm4FUAKJGMVnICkB+Wwr4p/pk2vl5K8TJL27lZbKDokS1dqJYAMQbKgEmNCCTYnZMMLVWZzRrF2gGmf4DhXCBJq1NewDPWRhgQXQq8Ver8xSIaa+HV41cMwC4uG8oUCO/03wPfO4sSbwNAa7nt3/YL/OwRKBmgG2wKcTShY671y6FhBJrcpM+HWokKQqW4NbAjk9eV1g8A054Y9T2K54cL3W3Juh6Iss0cqym8P5dPtZjOUPqjKuVcVDvnNeQSOV5PUtCcpkMxJTdYIt4bCpD5PaVpAbCGPrZK17SRQTZNJImxGsGD62BGbtAXK/N/To8yGqai6tPRxiJY+GzjzGl0r+4Zdt7XTdhsbc+6luYbbTN7e7oVFrkfB2g8GSOqN/xaxl8kkPxBhPBVDxzE8C/3cSdpKs8Qypm0WPofizv30fhA5ncmL/OO5tR8//MU73NNJOhUaijYakscyQJ4Y9nOQ9NJLqg0kBEmdANdepIVkKNwqoJzOG0wbRAHJywN1Yq8yJENe1iyQ1Lv+MjhGFxGTD7KQlN9D9oYKV8ZCwrNCUr//upAMATKUx6oKXYcgaatLNSQZTAFAWvBpwFlICgzFLCj1c1jj+4xn6r06eZ8KktortoUvscIdfe6sFiR1P6UNrYaiJWXh1lCKoSzlYM+vOpAs29CWtaFYSJalK2JKUpUpmwpIyt++LUQpaK0UkuwlVkAyJIKee1wAkqH/kUEXAkdp0QMgWcd70MtaPHq5gRWA5BG6Pnf1mu6Vxrx7Yd3t7sV18+4V8vp20jXDg5kzMHIBZ/a3D3+beharQgY+sWXqRIAkQrovkCMIxZ2/ac1Y2fq3c61ff2/dWrflTqL7JHEn6I0dTQiWgw7bMaL9iWGPTavUiwsv4U+tAWhziQJKO50+dsL5nYN4lJIfQCK22y+FZGwKR52LIJS7Wwkkg7v+4bhylx0qUgl5kjGvLCR0ECwwGoYly6QpXds1VaVbNXcx5j3aRTUG0SpI2iIYCZuKvTUcsKHcHPYOLTooP4ehVwt/h+6D8X0KmiEYhiCZ8zYX17t3aEcM07D0uVIVGs55xVkrRkHGsEKj9rppA5F8ayi8DLMFRFp0AK9vIw5l+eFQ4Y6NoITMKiahnYe9yF6y4tFhoRBurFo7pBhUNV80NlzciwtE4Og9yf7Qe5RvDMe5oeq8ftaEZCjsesZ6hZH+yZD4gIakBqUGY+qFJhEbsi3R/y6NMrH2wVTBh6FFtx9bGLCW6qb2vHtufp17em6N20CwfImeYwtdL1xRm+U1zw3T8K+Eb8ETLdQQGnjNjh29bzh2xwiwh8mD3EOe5HPdJguczzwFBJB8mA40IHmwn4VaKyCp49xa/keqnOTDyPwydrkHSaH9I9YgjN0DQCmQ9KLodAGd7/SCkNQXap0S9NLCnFWCpF4IQjvmkGFBlMXKhrM0JGOl+BKurAPK6JSKJG/QA4XxAkZWOZw4ayEok4YLecjWQykLt+qpHFKAI0U4GoBiGoQaovo+/H1rEA7RxrxRC0iBpJgFZajq1HuY2egh60mWibXHIBkCZRUkBdICSH0O2vOmrAUklNPWkZWbk8WcUDsAKbfVgWRVcVohXB3I8cc8TJkuo49zoQI2W7tiw6IFfmLXBnm70hukwBxN0rmJCpKcm6wBSQGkLaI5G/Ag7d+5/GTI44xAcipokOQ8R1gZJGVSB54D4Do6Tot1NjbWug3kRT617nc8JLfS9SKQRJtICJJaClWqbKU+BrfDc+QoaGYYlQVIYlTWzJD8qzVf+O1T8/MfHW303NFmy+1f6LkDi30ecCwGGTiZhO3d8oJQbj9nOXWJ/qBSOePyMDHWYxMBXJEvggwSzIcrrPxd5oFq4eFUd9RU6fnFtj9VcVANq1OZr/xiPIVOj+3KMGw5tQhURNJ7h92kz8GLMP2EQeMQ9ja9zjv0OdB0+94YizUWcvKOsPhjcaML86Za9KQhXqul6GbwaMl/ADCxUVB1HxuyN/sJv198hnfGEzb5PDcji7eGnPVg7ILuF/lAhSoMx7HM3qP/eX+Y/oS9S8+Dnx/Q8/yY/h8/ywz/W2byfPZ18R3juwagAWd4te8vLnjvVgyl7jI+SGxa/t7394vJ7WK6h1M3ZYdu07eL4RzljUa2EdDP92bWvybXDDd30/ogjd7pdRQWf7fTU+w5Jo+v2y4VNbNxCBlvJlSPqaQWriV54W69wYx7tikMZSZjlRcckqLMt5BklgmmAxYwDJCAST8lJDn1dBFE2c62Oh5uPHiZHn8mM58rzMKRMpqrYMlUfhTwQ5sG+hkhJnOGXhM/YZAphUEuVCRDWTaUzgEMRkYP5cVW111q0brYSVgs4Phg4vbQpuhZ2gw90G66hwhaj9LPpxoN9xL93APvb5Q+L0B7cjzICZYzrDNn7Th9J7Aj9F4O0+NfpeN4iN4z2hfx+vsmXbdr0GRA7qXPtJFe8/5u4v60NffrGbzINR9vaLfd4bkOHxgAEk9aBUk7CqYw6dqOYAoIiedtYKzPJqNUpOoRVVKA5OUkDWnYyRQ+j5lNIYfJ84daCKYXdT8ne+QLViIanLJw6TJlbVZWSRYdCfd5r0YW7fGYDaoUsPdoNwV7lzwQgcw7CgI+p2UKKaTyqwqSVVb1P1WN+gJ3gFGbh37m0eRCpOrzFUJ9BuAemAHAwgCjMgPIBHgWivj7J3TcreF2sSqIephm36f/XrPvWTxYnAtyPmhIYgBtyOS8q7rfih2UFTGF2lm8F64KmeR+/CzIhGk1FForQueR3aTFALoakAwBMWR5vdv072tJvHo9XmmbzzFWaiMHKtXLIOnnVE5SUPLaO1bhRqkL6aegPEneE/KBAsrTxjQQBTgwDUkxeImQJIWlvfKDAiQ1KGGAJEAH705D8jx5mYDkLjrOz3R67v5Wg0H5CP0USO6m9300G2YBr3NJv98MkuARTEYnHqLXgR2k9wt7tdfh59g77ridScPtIhDvps/xEh2b+zr9+pB89K5v/Ms9Se8XGyEU0Erca/NNd2DYcYfGKRhjkIRZSNpwQ0im7lJgqK5tGZC2Adkhe5muzFsU+SYZXHoJRUALC1xWzCdU9h5sabbPfchFSbDVvXK2QVwurJtDsXxJvRRmxIo3cpWOKiQHr+HHd6znn+JBsDeRLaCymAKOAsi3FUjEdKGF1f68ugyB7ipN0mh4MGIWijbcpwtZ4BVbGTlfPRlYQHPvLwBc9iRVaJU3JuOiQUvyp4vrvX1Im5IQHC0gZzX8P15Lw1I2RjoPavOmNk9q79dmP6/kXOGxYoMG0+Fl+386R6tD0PI4W8XrQYvblRj1VB1lENS1LZueoiX96m7m6mzyYuezLp7SxWC8eY6kUST8GlLtSYGX5Rgj99ft87w06HNEzY/wy9Y3eJPnubNAcnZDP9xZhNQBzNO0XsPO0HchocrU0nW7WIgzyHmP3osEALNZvse63RwoT0YACYNXB++OJ5DQ/6FX8TwPyBi5/fQeX6bXf7TbcT9sNd29nbZ7uN1wTxAkX6Dfd9F97AkCzEk6VEODHHa013ZHui2G4SECINpIMIgDYx1hB+i2Q/T5dxHPtvebDMld9B5eaHfdjwja/6UuJP9o0vnlt+fX8Rs71qAPQ67owVGXTdxmMQtJL4MksWE1Rgbh1uIcxLBavoak7qmzkJT+JIk9T0dzZf0wXig3rynom+8lpyM72GSQz9uYMJSEYADIt8aLUyhmJnmmUH4qlreC6YUntwAqLwcLqPW+pN9OzC8Epgn9k4ZkSMkmdH8MkgI12xKhi1ikylOmcWjN1bcINjB/u4GuQNIe4xAkASuAUcNRoBbzGCWcWgVG7anC9OvqyIH1IOX80JuoHOxlU5XdrzdaFpoalAJIC9gYJG0+V3uSuE78ua1MT22ISQVaaT75XvU5sBqQLAvtWoUl/X6k2jjaqpTVDMTDqeM0xxiRv6vb46khyVWcWWRMClkAP4GeaLBeyOYqApK4XwDpVXMUJEM5Rg1Kae2AtwgYyjxfCbuK2TCrmEASlaWAJHoVAcrXiDF76LVepNsfbrc8JB/pNN1TrZZ7qddlSLInSP8noNSABIcEkgDkwU6LIQnj2cf0/PvptoP0HDsHbQ/JnfQenm91ZoPkl+bXfPzsnXe6fXQRL7VpN9DECzbc8XEShaQf0SJ6gZIsVflILvc1On8iJhBSqgiNnpIc3PVB2mR+IUmTt3gPqFw6QRftcboouYKJ3tsxOggn6KCfIHf9FB3s0+22u0hfCovtCiB7A2V9NvEmPXzEw5QCg/ECXcSLfnH24bzM4OXBbDhPN53rxUU8Vr146Z3+dEFLQWOb4QvSZqawpy4kl7MTj8mbBUEZaea3AuDac9RVvLYHUrxN+R5sqNZC0i741kJ5Qp0XrspDzpqztLlJiRz492A8tw8J1DDM4sNMPjH8bU3fL5Z77uEw97qh8K8GuLwfDW7Z5Ml5rKt++fw2FpPv07dL6429TkJh4tU23Sur3xN+XtfzCw1sfa7SFE4VwKeqkWM9orFWsBTCmbBGVqMhrRC+GFJ5h9LsL5E9key00zz0aCxMchKDc6QhyabgGDKdjrMGXryaeZP+dqi5ke2lY7ux33GP03r9I1qvf9BquHsIaIDk07Rmv0xgxCxjwA8zg+X5sO5rE7EbgBBeI3ogYRjxuIeOw36CKGzHkCA5aLmd9Nht7Y57ttV2PyRv8o/b8/VaQP6isfbjV/7wD91W+scz/QkfLCggwKogqQt3tCfpQWmHMStIhpQqbIWcQPJakuYi8dzYGeF9sMABnRww7uWkg3yEDvaxZsNDEnaBdg54LT9jsD817UXaBZcXXQIjV9xl5qXEMo9OPCSfe1MFODC7QGjtT/xtAWkhKZ6YhYwFWVHzc+AHn642JMvCVmI+dGq8O/v+7f9ZjzgGYLldAzEnJzdMG/l1+0fIO9JQEEgKTACPKk+xCpL2MdaDlfCrB6fx8MoAGDLM7NNWKFQyOe8qs56pzU3azZ/k9EVv82aF6d7UmCjDSiwW0bH3W/F6TrUM+kFIXh+oqmw1sIBH85nh6XWgGGsHC0ESBYkCSQZlFm4NQVJCr378lgEkR+OSbJpTBsocIJNpiFXCqxqQJ7J5vmIWkALJVzVMufe+53ajV7GT5iDhRd7VnC9Acgd5kwJJPH8IknCUwIFXkx6HVffRT1gIkrBd9NiZIfnldvNX9/T6v3iGYHJ0vOiOE1BeoycAcFBJZF1oDcmTvJNJouHWC0lSUJnX42b8zDF18thF+K3+mO1GklawnuMqJnLjaUd1YNzn5C6qoKDYcBAlvr00Xs7vTZTpeYL4VAkIhhLw67RDv7FAEFxcr2yB1emv00V7bWFcEDvwI36ynWShutIXqqSQs4uGLwiK7K4tKG14UociWYot0CYRqt4tm3u4WmFYC0gJn9kQWu7/VZtBsBcvktOSTYrAUForJLQr1bSyEMbyeAIDgVUBYgZ4NsdYJw9pgcph2Ow1ebae8tw0nPBeredogVgG0A+G0+rd0GeoU3Ckw7G6AteCJVT1CotFUHQbje1D1fB6dzJckb29QBuiRXqe9fT+75jwT/yN29+aDNjk91vjhE3+fnPY8xvaaSFf/jy2ykJ1oFhHWEEgOa2mTWEp4VcRWWG5t9E0PwlYIl8pE0QEkFayzg9hpu9YwqniNbLReguLQVLXqmgwiqd4jJ6brT/KLOUHHJpXab3e1m+75zoN92Bnjot27iVIPkDMearTdi92em4bh0175CH23OFuWpSD5xXFN9ixTODmWFbgc4h+7hukXipgCAMg93Vbbit5kdsASnL8NtNrPNPsuHvaffdHdSD553NrP37q937fvUwHc0+ry5Bkl5s+zHGifQiSMIGkbQG5YEKuGpAXsgotMalyzU01MAvv28mE7c1BOuEDzwORA4Hkjl66OwAkcfBRBsyzLrntY+w9WFFhQIUtSrMBx1t33Olurr+DDYAENNE6keY+++71pOc/x8XMZAK3H8cSgGTq/aUeDO+mdfgpA6UO94QgKWY9sUI+J2v4nlbb5iXCqiC5WkOIY94kh0TH43yeUYVQK5V31ONzz63Cq2WQLFRpmnCmbrfRHqWYtIbY8KqGYJlFc5oKzjo/6W+LQFJDUSBZFnq1LS32/dhwsHxe3xKjcpW6kMiGJ21xmpzrVZDUykahfP77i+X23sKo1ASCAkkYIClQtJCUv2H424df/XWcV0qSliuZZ1qmqjWL+pBAUq4N7VFy1T99NpgomEkfIWD5Oh23S7SZeR0C4lmItTBWK4PkOToXAMrTo1EQkjoPucQ5wXR9PW5A6RlBzyntGGzJOLMsZ0nvD2v39qTDkHyoO0+gbDEgHyLebCCmvEyfeye9xwO0zgKSR3r9KCRFLhUFPoAkAIk2D4RVd2SA3Eve6ZakyZDE6wKSTzfa7u5WrxqSP7twYcN3G42PXuyO3F760jGM8jARHNVLp5Bo7U8/vHxILSJg+yRD4VYtfnshSzoLJMU70+EKu4i+NVhwt5IJN95iV3RyNOKDDA9ya6/lXqYDsJkOyE7a9e0bD3g49DG62KXaaglJ42yXBJNGWRlDIyXUOMFOkmt/nA4qSyihxHqSVmVBFHeJvsRT9CWyEEJWPSuDR9PQylRSTH+GglB0zCtLBsFmb4GDeGW8e02SSmF1sVhFYZ1WD/ZUA311eqGz99vWAskdas9SAzMkpadnGNoWg1huSfpNxcQbl5+FSs4MhrFcnPf4SnKPIeAUgIriHkAug2bMM9VerA6P/niyMnufPv8H9Pl/TOcCDL/DfkLH46cLk8LtYnL7u/RdsmWemcBH/n5nPPAem4UNLFQUpFMMAl94qB+sX2TD71Mwl3uKeC94D/I+8PMt2izDcJ94kuI9xrxG7VXq/wlNdmGAZ0V7+vxOwZmXb4zNKa27WZ32wJrpN5n5vnBZezNoSqvIVK0mnR+p+wvhCKGtAu0Vfq2kYw47MRp6h0PAuZRVmNp2D+1BSjhVbIm8tZOdxIsMAKgHMoC9AigSaxBeRbHOc+0Oz3lEi8YhctYOtlMxckztAJteG6TviT1UwJGeh71I+nkoabtXBx13cNRnY28SlazNBkGyTYDspkYA3dzuuicaLfddAuXvNirEBHbde987P6A381Jv7CEp4UoAEqCcBZIhMQHtRV6U9owMlhJuzU02MIv128NFBiUgeSHbwcCF3tKady/N3+42thvuFQIb3HeAE+NWjvSn3q98mfJF26rc01nIGGXSAOExgi56i6SPCFVZgCQAisfwTLlxXi8wzaeG+/fqQjKmsam9KLm4BC5l8m26daLMQu85974ioWHJJcXmKIqFqmH19xtS18npghqBBxRTiGk4h9obYio7UuWqPcgYJMvCrVX5Sdz2XjJIQWlCrxaasarbKgh+QMe41DLgAYowgZ9AUm4LQRL3CSQFQhqOMIAIHh08NZhARkBTqN6OVM/GWleqIKmh+PYo4Z836fq9RWsB3zcJ2y3uYe5HISq3x3Kcuk85X+kdh+QsrVVT5SPpfR3nDBGva+OpiIq03PmJS+MUlNOiniQHSek3FEj6to3MAwSIADwJr+pWD8AUzsop+sxLWY+kPF48Pgm5nuoO2KQgCK9xMAuFbqZr+Dlao58l3gCWLxIMt/R7XPUag6SEccWTROqNc5IESIHkgWHqTQKSe9ppxev2UY9tB60ZWzo992Sz7b7X7Lj1aypmSX4jGfz8qXbidhHpj/RTdYKDAyLyqJtWOnWqPUmvHehHVyXew7qoq1qll1GGLGetHD7kSicc5wjthGmCJAyzyfAlwf3e3px3L86tdRvm1nDy9yXsSgiS29jN7qX9MRgS3U98YQ/cfJjfiYgiBGSLMhH3wwRbGBcB0YE+Rgf8OO1CGJKZWDB2ZbJLk3xlbpRRxKOLWmSXqQsE6sjHxcYXWeWcWYp3+H7jOcZGRYXCajCpHM71og6GBVFy72nSoqoXAzvL0YbsdP7W9vWxd2JyjTqsaXOOOvxYB4plEPXwyyCJEOiHgV5L66UWq06HpeY9vYiVQfJDOk4wC0p9v30+gSOABLPepfbS8LuFnwVmvkitaHXyjiFPEu9Nwq0xSIonKYDXuUqBZFkLDJ+T5nyuc33NAknpP532oeb7kP1mMwvR5iYoZdAUCbczva7vmxTDurbEjlGHOwNkPeQ1Eb9noVTb4sGOx2jqdQokNSCx1p7pDt3Z3sjnQsEOQA2g3EPPs51ee1u3z7admIMRWRxiRe8jOUAiCnBokDAoRVzguBq2wbqsWW5SCngkF7mPvNQDBGBEGpGP1JD8Tqvj/nO3+avyop01az9+tj92e3pDhuRhenJA8vA47ZVcauerWwWS2IFYSGpPUkPSK/Fwj890PpuGJIdcM61FK+R9md4fDBVY8HD3klu+rTHHI1VeaM0xIAWSW+hL3g53vdPlhlLegWSySAzI8dCHEeQLx5fBvTZkAkn8Do0/VPcCkpx7xWdUslAakrmhuCUAmxWS2mMsm5ZR5k2WyczpxumY7Jx4bNGwk6oYzJXO07l0lS48DcdclWsgd8n5ywySAvnYCCop+IgBMgbJgpBABSRjxTnyeMn5FWAnfZRZPtG3cmTeo811yv/b6lOAaaWQ1OFTDUkBYR1IyutZSGoPE7+LhwbD7zFP3mrn2lz89HtNSq0MmBaS2svVt7PHmxX1aEgyOK3Wr2oX4VSD7VeeAZT16gAGxoq5fw7LZvlMK8/p+yqz/nGAEWkjMYmUoVDzaLvpDpPTgTVR1kXdyH9MVbMKD3yBjoKkvi0GyTR/mHDucUd/wLYLAgO0zh/K1mUNSUQIsZ7DkePXVpBkb3iUpAWd9PxoB5GqVkByf6fDgEQ+Uodbv9lofbTpsQdulkLy6435j3Z0xvSkCYdZkY/cPaInXUyVF7jStdeLQvKMrpjK1N39KJQMloXRL5LHi070Tvw0+zcyAd6T5EUeo/uwI9jRbLktraZ7heC1md7zy922t03kWiMpixJflA/vU4nfYxzPHvnwgE08y0iwIxkwBZJofMX7lhEsIq8XmhJwVQmBe09Q5Q+ujuKT32OQDI2a0vm72GxGed4qbdWYjqu/mDNPMhp2CpTQazGGd8ZT1aD3smkY2nz7hsrr6DBwSE5NizHEBMxjELT5w1gLxU9o0flwVF4JqgtdQnnL95UHafsdRSc2qvkq1a70ecVsKLVuuDUGStxWBUkN5PcnowIsxYuUIhrvzYk3hl5KMg1uC3nc/zadK9rkf6paPHQqIBRpCJ0fNuxrtXN1JGKa+8wLMwDkrMMsrxlJl+R6g43YfKiH2JqVypy2NGV92VmfthSxibyeVNdKoaCM1UO+Hwb9a9RRwFFBQeJZ1KGQA7JEa+uJZsMdb6VtdLa1A+0YbL0uAxHMwO8SZhU4wjmBecFznkGcDsc4RmvrkaTNThkifgd6A7aD/QyQcFh6Tfdqt8FrOAyPQ+hVxAV8AamS0MPvAnK8L9irxDDYDnrNHRkk4UkyJOdrjMn66vy6X5dB8kQ3X96rISkq8b4ox2i36vleov4AOaJUhWeq3yqaqyHFHcTc4b0t0Rd/FAeLdgWA5FbAkN7vVvpSBJAbaSf0Cn3BL9MXvIUes41gCY8S/4ODBFC+lhQTztPEc9f33DAw0SM6ShWDGI7ZME9Uxl5STcO29HsqqLxySDKkxqNKSJYNM66jQmLzkrndaqCXTVvMs/RViwqS7xq1Iulr5EpVW5iUaeracK+8hniLsQVQCnOsZzgrJOv0QcYqXX8caM8QaMp7qQtJC0exn9CxKDMLSB12RVGPDsGGvE0NSDGGm/HatCfHuUEDSQ3KmEesHye3h6Qetekohy4ik9vsqDRdOGSjEDoCMS3yks82DROL58tFYhJhiUAuN0NUKUzVAWQKPd1+oiMmC4XrKs2RLuRyolJVr1MwHKlBxIY+57WF1BAR4x50WldP0dqJ+gzUYbxK4LR2mNfUNvPiEK3F+F2DEgaPDyaTQZaSLttxrKsBSAKQGpJH+i0G5X5as0OQRHhYIKnNe7xIt/XSdR+2i+C8Mwu3bu32OdwKT7IakmvXfLxvfkgfeqqBt2PSdnvuSDX5jveqISlVojqcmjOZuE3uNBu8yxAkvQ1zAufw/qDYAC9yF31xkBTa1kWVUo/c577bRAcOAzrhWW6Eh5nZZnosQq+vtmhH0UaIALuMgVvCCJdk5IeDWpklnRA+tYCLcJKz68nYXesTBMluJGn/Juxmf2q36HZpQ7CQjMEyVtgjLSnWwy6bGxnrM4w15Zf1OepSfQwdjs1VtD1v8njZ8YbsLaO1anfcvOtW3qN+ft/CYbVMTQGOwCgEKzZaSLT9mDY4sDJIajBaObuCZaD08B3nVXRC1bNS7Qr7CX0/Yh/S5xH7KX3GOibepgD1Qzp2MK58LfFS5fYqsEn+T4dgYT4nGXkODV3todr7qyDJ7T3ZxkyiGXK+8vlS4kEKIAWWuE8k/mRcmv+sfgMQBm1IXN/ODrWqUHVMWk9kI6o3gWmB2QLb+5NFNoGmvLacX76tKbtWfNvN4qJ7Z/1699b6RU51YG2S9QbSegId8SDFs0y9tHYGIuW5EbwAP9iRTBGHHZChWJvttUFa+8GPJUge6ouhCIcAOmqx7af3zDZIhcvxeGYS/S/CxFpSL1eQhLW8l8rfYe0HJNmbzCD5RLPrvtns/OrDSxc2lELym435j/bODaKQPGH6YEKQlCpRraij20A8HDEmK8mr7Oi5kRqS3CxLB/giDiBBEDFl5CIBSYjT7kDCN0ltc08sBaWEXLf20pDrEXKtBZDHkwyQg7EX7pWDCVvK1OYByiWMlFlPu63hQg6QYje85SEJQL41SPv13ua5dfUg6as8DczwWJl8AmNARhrvg4U8pkDG5gBhuFDE8uXsowKgrGJJrM9telEXvUkt2h5S49HqRzrcq4uFZKEqaJ0amTXt0WlQ/ZTA9g+L62tBMiYSALN6r/YxeA0AUV5bAC2wDuVA+bnou4CFIFkXkDDtVQKOP6WNC4y9TACAjq1AUlfM4rb3Il6gBl8oL8kwkerWCPzq2v9L3Hs423FdZ76UKIQbT473gpQ9Ts/jscd+LmskeebZVvBoLM+zJVlWTpaoyEwxgyABggRIAATABEYwAKRIiUk5R0uyLNmyRqNiqVQq/in99rf2/navXr1397mk/OZWrTrnntCnT+j965W+1QZJ/gZxQmb/x6XWtrUauLZ4SEMS1+Et6vCyPwEYJL3SygzT0B7CdEIKnAuDMniCPJ5iiDhAD4C8e+QBedcEAxNmktagZ8mTREZWItQZIQqQvGNzo7h9Y14cn8/EbnXXb9s8qzh49tnF/o2N4jq3Llzrjiteoq4D3hpzkYQm9FOhkgOYyQSQUFADQF41dOvscK0EZehvRD3Mx3s0B+CBA/Jotbh8vFZc5PYbdjH6K/u+cMdCEnlVmBRXhtFfJb96wgAA8sOhuBPh1jctrRWvXFpt9iT/ZNu2X7zuRdue+9iac3HXHG07A3mzKKNFz8klvRUZuIwPgbCE2wwP7HoHBdi+rpI64qBlpRUoAuTDrvM0e8UNE7fIjzG+qluduTjsyrxIyC3JcNHhQMKrCI1eIjDsyBv7sAP4ues+CQuvEoU5MJT64s2/30EePZPwJt/nQAnvEvA8H+/HfUnorZQK137pOcr7Qq9ND8Ok3QfuHntdd7nY31mRGZEYNXRoPBRw08OtTynJ29H+oFaUUOsnNHCohVwTw5l1X6kt4CGEuY963p9W/znGyQ0mv0MoVc7Gp/X+QusB0XuLZ9cBaAzV2pwOw0bx8e43dNx9HzBcj6OsKj1zSvSbEzSYEwymw6UCvZBrY79gqlgldRsueRsu0S5xn2ipjirG8GWT6TBnbnup53AfrPG597vP4X73OWgjHE8GA1QtaHF/bt91nlM8SaNSZAGTElnX37PNR1qPEvlH3GY9Sly/a1KGxqNsYGI4duokKYazE/2nujgqV9Blc9o2HM7fJ+Unc9W5x9SEFE5HgeH222eTWvWqtZSerZXTW0SCLyWJGUPS5jk6YiPfAUQdwndjZ6/e4oBzs1trD7p1eb+D5F63Du9x6+fVHd9zfnVnubhybWfx8dWdAk+0Z1ziPs+L3XYuctuQVN+613ZFDQyet9utydf0lt31nb6iFa2J3Z63EMaloSgz9sL3fIsfh19AUP0ydz+8U3jA8IThaL3LOVqvddD83bWWnOTLduz4+d87MJ67PhRIYkdxZsB+E9D8iv5ahAo8SYQn4X0BkPvRt9gflSOrAMhevy6k6z6URSApwr3ux05IIgcJGMIj/FBQUIBwLQpxLpaGVG+QIUKsGYIChKSEXd0HjlDseQ70KDeGGo9UuRpIlhVS68W17mxnn3P1D7jtoYEX/UmEJMO/GpI3K4UbrXSjIWmr9rYKSSp41AqE+H9tzl1pN/V7tcS/rZazY4+0EhAhR1k3TinBosADxUIynl1rr2+Sbiav5IrCYmMFxrPTLzhSjLBWnhoMXqAU3pgewBSIUu0QvE1fJ9T041OQS1WRpp7TBN/c69RAOU7bA8HuC6DUXijub4NkDLe2QDJXuVpq4za3sOgcpIWkgJJVxEZw3UIyihKY1p5UD2wbGBeBpFVmygnopyCJ4/CYeHHjaJygwnFj2oPMad4ez+RsU7BLyQimoGu3Y8Pr9ZOFUSgw8oIq0JXd69ZPgA7Au6YH6K1IHlIk6cb9CEnkGy90kL0UTtq6V3vD8yDmsqe/IqCMcHSG6laGcWmX90shBN+LWUISkqSsdgUgkUvdEiRfsWP7z981mDjwjIuPO0BiRxFb9oB0OzL0brLW7PPN+P3oQYrHGODIcVglJHvRUIKMAcgHx4MIRdqN7nVEvQbTtt2PG7038mG6NwKlhA+uL4uniJg0hHKZiGUs/ONu4QMo0W8DUQEM64S927niMm4F88TW1mPpMN7LnnV/loEPsRwhsy5fMPYJgOSPJxYRZYpn2oYaawUYDclYjLIgJDUo5f9EuLa6bx2xlPd4rOGsVOdqJOSUgCTl2lKeZAxDqQKbFBz5eVgB7prZmYm22d7kHJlrvG80EdOVnBZaFpAWHPhfe5Wp++3tKWUbDTYL4xwEc8+h5cKrJ41ZD5P/pyBcKeoJ4Vb7edemhCQGWWsQ0ROhN2I9Ruth2scsAsmKN2nglgPjosBsm+ZS2645WdDHlz0JTaUqUj3BOUEPGMLKDC1b48lp6sRGV+nqk1XrCdvCq1oOPbRYIbwrOc2xH2wvIuwOeNKfCWGWiXN+3P5c6i7Pd6/jWz86xUfX0K7h2zsQGpUxjMgrOqflGueoYc3nIGVv62IRkiHki/CvFz4o9cQhFAOIIk96BfKpDpLnOgfqnW7df41jyu+2SdL9yZln/hJx2YsGM7eDA4GkxJUdJAFImCRcpdy2HK4JWl+33lOjsXpqVuSwAkk2suISkITlICmycCFJjDcFtQWoJXzIue7wFGNMutsTEx0/t11CEh84Qq6octWQ/Cjmia36BPGVAfboAWXLSqmgvy4h30PuTOfYpPyxpiAZx+T0e60yb7bvq3YWt4Vwq4WknZhRrXLtih1VupM6jKPBWKlKNYoo2hNkuDU1Qirqnqqmaw1Jq4jDAzI1kUIvOrY8XwsC4ACNOcAWSKY8O/t/yprgmguR5voRtde4SJiWqjhJQAfP0IZS7zd2cjKpQJLWBEm8ZwFkAyStzm0tAhB1aOuArFXKhspWHWbFpfR5ZiCZUu9hQYuGm4W23ff/vyCp4ZcaD5YKi9pqXb0tPlYDMjW3NtVHnOpT1cekPlbbIMljViT6ZtPi6Hxa3OL2CbqycIqkR9Nd3zsbCSQRbkWtyDmoHXHA0pCUwkoFyd391QhHRhDhFV6iCoPYisIIoYYk6mXgcEmxj4LkOxzTXu248jttsyT/38n4B+/tDR0MZ8Xl7lLKa9e9WgFcVHiTojzT6cQwq1iQqxMvTHoh+7FNAmY1BPfLBI5BOTQ0tIZEsQH3ZYv8W5jgAaDBg0T+8VyZD+bj2PgQADh4gTCMdble5S4Rjj3HgfHdzpvEmQKkjiB59KG1Zclj4ku4KoyEub5bVttS1ACFQoDLsVEYSOve022dbi2np2XRYLUevpbRTPZH3gbJ2hSBgZFyq4kAVL3HVIil0pCfCZlZj7JN29QuGDxzJSSjgop5nM4hpYzb0KIAfH0t62arVxlubQJZE+Bi64T7fHXRjIWS/t9WoPJ+Hea00GqtWDWQtNunCRATnmQWkty3DCSRwz0RPP0mUKa8yoonmenftEVCuniIRUUn1KJcm/tpjy/12vokLqe9m2u9yVl2SkoLZBuBPs7fryMuLCpKyfalKnZTs2ktJG0LVXY4d02cojqKLQrjh99GLFgaQ0HNF2MecJf7HDDh1X10fal4384dxbuWthfvXt4hqTSMtbpoEOZODrxwAdJgqBepArKEJAp8YPifrSeEJAtLEXqFgAxgKpWujgOA5Nvd5avWl4vfWtqW1239ze1n/vLPl3Y+e87YeZGDqUASECEkfRmub67HDnNCNdTiOXKFCjv0IgnJCEGOxAo9kxqSugLWe5B4E6vSc3PB0rJ4kOe5N4+5YNDiu2Tk3Wl4mvACAbp9DhiQqtOQRFUrZOpwpvD2AMoUJPf3ytYUQhJTPwCf42xUV5C0I65SQ1vL0T7VH6H9cduwylYgKblIU8Val53rVSePqNBN6qy0pmmq9luHY7gAxYKasHBYSEalGFVsow9iPemCEzBguerRXNVqTVvVHLyxYjWhLJPqGbT9hASFhWQKjE3VpxaSOQPMUpaDZAyvhsc9mDEL5EUgqd9/W7GL/V5qsyuDR9rUbtIIT7UI6+3b6mYNyOTvY8Gh2L9qSOZCnTkFotTJqlWS0sVRTeFUVuva59nn2Jyzfr7NIdvjTBdW4f2yBxrV8ajCP+R+G4DktQM/QPmDy9uK92zfJpB8z8pOKczE3EdAUtJpIS0GQKLbohpq7VYAyXyj9SRR3QpIQvDmavdbEim7rULylaPhD//KeV0XbpxVXLo+kj6VS4PLC4X2i8MQS6FzhKRXv2FfJCtYGWYtxQOqMIRCDRrwbx76RnwKC0SZoq7vS4QXeeHaigASniSKdC6SQpuOtJ1Im4nzaA/A+5N2kpHYNdCcdbdjiCdaQN7p3vxb3Yfw5o435Ck/tu7Vd67o+tEv8CT3yxDnftlaMfRA1JC8vdtLxuorSh0LHiTxzE31cwlk23KSIvo+SoZyRY6K8nKJCRwCwkTjdG7ocGoQMAdI6/FJumXBLiQEXHLBTAwctgsVt4G2CbRp2EXZSsPlhg2X4ddqSNFCMgVPDQkLvZQ3mfMEUx5cExwfmE5rFnOTme082ABIGgp4UjnKCviNV82ThtyIsIXho+CYMwvHimWmpVhPKoovNEgKJqevvABILvI5WDjZIdY5OKZOsnPPs9vUFcdoI7JRGHtc6pPWeqQgwJEnMTyuwkmoRGsGo5pnyRD88eHErfsTcU7gBEF3+33L24v3unVa9LYdPM+VlFm/MhpL6k3WVmuQ1IAUi60moSjTbe+akW8DkX5J9/nRy7wy9NrDeXqVe+3fbgq3/tYZZzz3JvdBngOVg5W+8yB7FUjCPt4LCVEU7HR7Ub+U0zxkkGdFds57jNQzBShxG8CYgyRixqIb2PXSRhetr4piOwyFOhcP/YBlQvIGUbkZigGQN3RQ9jusQBIzyjB25U3uw/i7dd8Wgrg3Iblb2lW8J4u5kAAkqkAPQfAY3mDIv7HEORc25Q+0rZhB/5Ct9iPCtW2Q5FSBtqHJxxKVqpyj6KcppA8yffBYSMqZYcgzpRresQjZhYQeoM37aI9D5xTtHENuh5C08xb14nfCDB22gNSQpEdmi3j0JIyUIo32AlOQbOtTTLVnpO6zHmQTJPVzHlCVrBqGtAfNY+z+5CAZTxRaINkWzsyJFFhIIsSaCr9acYZ4Amc9qQwkdQ+r/e3a3+9WILnwyYLx5KyiT8r7y3mcqQrjprXJHt8El/W6c5DUAvsxFB5y/oAjcv7sLdaepfawjw3GzlEaSwQQ0AOkznGA/EB/vfigc0wAyY+54wyQRG4SHQ1tkCQg0d7BNhAOriAkrxsNBJLQ6pb6FfT6u20jhYc03KvbqltftrT07Buhbeoof3lnKA37jPVe0FuTPKBUhK75uLCoGQzKqdZeXo5tH94oEkBvkpOzD/YC2AIsOSkboVuYFsqllJDEmPHGwyBReHwiAQfJt643hB7x4SMMjGbUj4iO63rxzjXMJlsr/m5ltXjz6lrxNplb1hG3HiXHlEqC/NL+ji8eQoELeiLR8nFsopqUB2kRam22qs96TZiPx9i/5ApMNWldYaN9vJVAkY83hQAlkH1zd+w3M1WG/PGnckOVs3sz4V5DKif1dkLBSsMtNTUjjpJSTfZUpUEjfi5XyYOVvZGEqtZH9bnJYaPZ3GCTh2hhZ8OoBJx+XM6zs1Dj//YxOpdJcJ5U3mFumw8Mg2Xgad93DA+bcGtuTNii48NyHqruQ82Zvz8Mkc7M3bQekhWWzw2/XhSObHPSJ2b6WGiDZJu2rj72UrdZMYSUOIINk+p+4tZIV/gMKV4hXnpYy+SzNSevbYVjNv9+YrIpgiz7IeiyuiLFoRc6QJ7v2ADDXEmMOERqDRKiMJGmC+Oy6LyxDcR6kijylJyj+00BiBA7h1F55+KV5WKP+ywuW1mRwh04X5hf+ZfjXvEbqxlP8tfcHX+8ffvP3+E+wAtH0whJeHEAJQB5XsdXhAKSCIUiAXrtsNRpZbuHFy2vQ1IsA0l6oL7xU2mpcoQVJ1uPfMkwpm0cGvpJGxJ6DAo3h2WbE/FyL1nrilbre53HCEi+1e33W9x7eqv7cN+C3sk132t5QWhGxXP2BXHfm50HqQF5fFrmDb2iRfNBoOGYDC2awhUrAr4oJGsTBKj/aNo4yjNMLw+W1d5kIj5zhs/bI3RUrtBKsaV0SHlmqVs1UourBuQ9pkr1XjOkuAJYKtYE/dU4ikptx1e5LqZMswhIXygkrde3CCSznmZiW9oeHHnL3Z/ybAnJijfZMAZsUUjmRNRt+DttIUqQyQHa8KD+fdzTMtrM5tWbIMnnamjkPovK9heEZEqXVxSREqHUXMg26YG2tViZWoJae8yvAJLHhlMpktwd2vYAyQvcmnuhW3MByPOckwJIwouESW4y9EXiUgsKxJoZgjJUuZIbHJ0VRc/dZyA6s8vL0mL4wZ3bi795yUuKVy5vK35t55m/TELyPa/5i5Ovc098444dMpaEsj2ihtD1xTLnhRYM3A4hWRmqzFBr8ASjkLlUhvbiaBZIyomsnFug0VJB2TnmKbEdVMhCPB3mQ7m9qL8nxUDDYRzOjCopq/V5NEzguMG5+2hTwf6+X/ojVwWS73TQfEewN7rbkZtEOwjaRC4JyV0oAaHh/sgkNO1OHMSm1bLsO4ZleKE195A7W1NFMNJcvEVI1lpLOEVAVdNWqtc49y+UbVvw8ToLKuywXSuGzVYKeGn01O41oLw7EfKMijeZBcpOx4heoJGGu3vYbBayNW+0oVgmlZtryi/mQqeLQDIHqxQg9ePtNnMw5W0Puff8sPssaQ857+DBlsKeHDA9NKsnL1kN3IzlZlZasYaUoIN//DBGMvRirQGZqo6OmrlbtBQkNUy1iMY9QW6wNg5NySDmprfkBmfb27cSjk3d/3wLl+L9Ssnq7gQkdXW1r7AeuN/iUOxBSCE6SN4xmomDcyMU2zp+egfSaJD+BNwYWpXe9+AxYn7kJTL318uJokATrX/sj6eQACOPjEhibZcK156feQwHDEICVzqeIeqIwp33uM/qzzrLxX9YzhTubJxxxnN/7lzej730pcXFaKEIArDSm9hbF3cURTOodBXN0/VVeWMSZlXTPuhBWkiiShQGQKYgySZPQhImckRhsDG2fdAdvDdNvUFLlPqftymBYHiWhCTizP+wslS827nUgOQ7VjvF21bWxQBJ5CffGfpy4M4D/ICkaKBOQ9+gA2QKkvpMtumMOdfnZ8/4rPap1XG0OcccJGNLRxAqKAuJjD5mQ8GEhWRKgYa5h1oo04ZdzaIZWzB0PkmdvVM/VZssMqEQgKBsg2QKkHer7T8fSLZVom7F2iCZAuQLgSTAeGo6iwZIpiwFyZTnzIU/VSD1fCGZEnGIMnvTSaWXVGvcVmZwqmNNhOAzwvKLFN/kvMwUMDk/lJAkQJoguUhlb+r+E8P+84KkLjZcdHB4bth4tQhunMyRV1uQ6pC8czyX6SRIm8HhAsQw/xEDJODpidKbW7dxCY8RHiTmR6IHHpCELQJJLxbjIUxIApDXz+eSYvv4jp1SFPp2d98rll5S/PrSmWlI/ufu8s/+2r34P6w7UncGksy8QvRQVyUficb88wSSPQfQgQAFUNsXxmKh/1F6IGuepIcjvMgqJHuiwKA9SXxQNGwbMxthqFo9HMSCIc57x3BcO5MEKA9L8VDffcCD4qLeiqjyvHt1p4ekg+E7VzrFu5a6YijeASTftrxU/MPOHcV57oPa7R4HoPswZVVLMi7kcSEw4R8zooj/Z5ulTWjEjpuykwHspI7akGTTj1n2H3r9SzsqyR58toIzaoQmwopiA7dQD7GYTn2i3kAyHlgxvOkf+8DImwZgJVcYvEc8ltumRcAORhVvM2UpQOrtb0UMPOUdPvACDZ6dNoZBtdnH6MdxX8RLVICzXiifpyF5ejaveJQpSHI72Z5N893Zwqi27ydXGWx/bzqUXIG2hU7Gk4yC8wlQpQu6muFuw7wW0nzvFpLxOIkFLf3GaI3VFuZ9vG0rEnq2cBBFOm0516aipntCZCeeKI8mURAjGr9ftxbT7p94QMLuc17kPeOZrOU4wccsy4MObAAmooFwoK6XWZbeGaOYjIRfUZfiOHR1J4Cy06sN3OD/cZJTEDsnJCF3B1F2QPKypWWB7xuXdhb/T3e5+I21TE7yLOdJApIfcovfBQ4mSGYiqYn2C+Qjz0e4VUESlaURkGHKNSy2fJgwK01DUsKvIUQb+yzDNlEpyx7LQ0M/lZ5q+YTkCdV+wMka+wZeNu/c1e3FBwBIZ8g9QmnnXavd4j0r/eK9q4Pi7917Qbj17dBzdZA8f+dScY17z/BwfUP9oAbJamuB+UEnQiJ3NUw4qClcGG1EPRVAxkSZ0VW1gh1VtVqtsvUFOrpKMBXmyWmXpsKGkvtyoHvQ/chPTmayAOgcpa4O1IsEHovnwKynWHoYJSQ1IGuw3AIkbah1EUg2hU+bPMGk15fIL1ZCnwkY5mwrkGSY1YZaAUq+blN7yAMZcQNCKvdZjNDZvwAAgABJREFU25D584VkTujA93Ea6Kn0RircmjtpWhSO9r0l84xqO3YEmv7t+taIfqP9e0BS21bmoSan3AzLSlY5VpXHXxHYd2AkIDUk73deJCB5p3s+1jiqg90cooEQG7gxDMgAJAG1S9Z9CyCimleudQWU9CjpMWpIUklNpFP12Kyef8xVoQYGIVd0TrzLfb5/5pyr6YvOeC4Jyd8+84znXudgct50Jv2RVziCX77sIYmE6oWDnniTEBi4GqW7QwLSG2Tc9NBkDUaKgOvbIGgO6bn9w25xvQPbdT2vlxoB6T7gQxgU6gw9NRDMvavvf3z39d1BgwOl35ezMvxAbxVtwK5IFl3cXSnOWdvmvOKl4r0O8O9zH8p73dnG+1YGxQeWB8UHV0fF25yL/nb3Ab3PfdgfW12X2ZKotDoaQoEARzUB7c+c4EHBav1zpsglNyuPE9t1+wegpqWpBJYZSHKsVRl+DfJyoVCn1KpUYtCpMvrEwN2KJRRhdHgPoBOPkAd/WLDsgaahB0hqTxJVqjANSh54eKwGIz1L8V4H4zxAzcJtF/Fyf8atTfw5fVOY9bo0IDWwcpCkV6fhlQOn/t8W3uTgtihsU4U8ujr2ZDb0Wv1uct9H3haHZKoYpJaDNjUABGVKeWkRCOaAzxO77Bg041lrmFQjIsNGIQrellN2agNjo5DDaDGPmamJVLRH90MmPUnAURkheXLqLY6KCycYZTfASIxzdzGofi8cM8cjgWTfAQ3jtdbQJtiTOcBivXLgxpVhOtWVSjaV8yVjpNJ9FqIJjgIgx7kPbntJ8RYHyt93zuK7/vJV9yUh+bs7zvzl329sFO9yHhUgiXwgCIuKIajbXOwWWNhVbpHa41zlsqqVGqddmRNZzoXsVYYkW1BqSO7tIXS7LqAkJK8PvZQQ8iYkT/T8lyQLZYh3y1nZcBQheZVzly9Y21l8qLOjOKe3WnzA3fYBt833ubON9y73i/cv9QWSAOQ73BdxTm8ohUpXSesI+iFnvvBkYs+ew+I99F5UTvj5Doz4CWN+LCg1JHWpNsAWC3ZYlRq85hwky9BrObVDK+XYKQq1YoCGyfTyf4MiDG7DZ4DPolSwKXM9yM/wrJOLCj1OPk9DkgeMhaRefC0kufhYS3mOKU81p2RjLQfKXxUktaUgaf+PYGvxZFOwTYV02RKS6qN8SIkX2HCn/l7wXdnvaxFIpnpMJY+VOEmxUNHjz5ogmZoGs4inm4JkJfqRGaptQ88EiQVlU/6bfbZNLUmLQDJVlcrex0UK33R9ACvGebudr2oF+O+fjmqQPOluIyRPzuZ+u2p0md/fiUQKAcg7RKFnIv3rhCQASUjudrdjDjCMkITHyQHQV3H4xmAgIdY9Kp2HdOJ17vPAdlG4g/GKb9i5o3jl6va8kMBfrOx89t0rSzLJY/f25WLPzuXi2qWV4pLBWnHpqFNcMe5J1dEtqz2xveNBNIAS3iR7IeEys4eRbRriQg+G0dCjAtUDvIG9PR9ylce7N3pkvSPzA9Erp7+0Eyoxfr97zfsGfrDrLW5bN82nxbUOOij/vWB1PU60RqHRZTJ2Zdl9IMvFZSs7iyuXdxbXuv+vX12RWWc3uw/0FtlW6N1Tr4czOf4wcR0AkUbzeEZb1fTUxS8nEpPb6dnZPiatx5hS37eqOXqEECtW71SJfa13KaFWU2ZvQ662Og2eOpPubB3QuS3xMrDQhZOV1EEeJ0sM6+LfW229qJ1pcyELOR7dxI/XlO8K3537PcDwW8FvBgUEsAfdPjzg9gmG6w+57+HhyTjejkttfKx+Dp9H04+199HwGrDTzh5xv9dHZ1O5hJ1Wt/N6zgA2/Z084iAl5k5CYKfciYSYW2RgKU80qu0YjdcHEuF17SUgnGajDBqm8vimUPlQjQFLVA3r/zX8U60qTf2cKePxuZUc9CInT4u2DHF7GHQN0/ULOu1Rm/yijgP5bZs6A3sSnEut8L6c3KCEch1EeN0WVPE3kJJbtJEWnizq3xV+q8iJn5pO5Hi4163fdw/K14vV9uFk+5gzMAG969eKwMxqcXlnJeQhVbg1tAmij/6KQTlfEoIBlKfjIGjA9Dq3HThnAOdl3WHxAce91zlO/P5Kg5DAn6/s+PlH3Yd9rSM0mvH3rqwV+xCGdIC8fOJeYOILYo6te2uDpFet6ccYswUl+x9xBkBI3hwKVMTV7vVir9vdquSYfUhY8O4f+snnKNi5fuh7KtEnQ0DCUDYs5cL9EI8e+BFYyIuKoo7MdvMz2wAtNM7yzMm3LAxqkJQf2AuEpB1GawWErSCxlZfLQdIeKPFAMrlGWzFnIakBqfvrYvgPi2JYaO9PeJxaPzQFybaWijZQ2qrXuN8KzP599KNVKuwykNSwSxmfQ9hp07BMAbICS/eYU+4SwMPlKXMb4Nlk9vsAIE+PPSBPO297EUjmPF0rVqAhCUCenE2r6j4GkB4i04qXSU+T3masVk2IvWv4NIkppCCZkxPUaRHp821p78lBYKsFXrlQvoakhlwTJOOaEyCZsiah+IogiFm3NCQ1IHOQbIu8pOQPNSRPz6ZyzCBfec9QVdNz34OHedvQp5YOyBxizPldlxmUhONVIQqYgyRFzjUswRwNSUy7er/zShsh+Tvbz/zFf19d+dmHIdmz2hFP8nr3BBgAecXU7cwUQBwWRzvemIuM+cjhIOYjpbWj26t4k0jEwny+cqCqj3wbCQCLxx0VkWI/qqUyl9BohPKLQ5ELtneNc8UpV3TZwOu24kwDZw0yAsuBUSA+8QOTAUgpeJmU46AYjrhXJabjxHZCMniW1rNJnbHelRgmuwgkLShtz6Nu6dCQPKEODH3QpYb25nKTXBh08YeYqbrkj59eSCp3yYXzvtEoC8ncmWhbTqoM7Y2SudPyIB1VSs+jGUha2OUgSchZ74+gazJAkGY9Q8IR2/zEfLYQJHVIFoAUC4B8uD/yl0NvNsRqw7YWQrlQO6HIzzFXGRu3OS6LtZiPFptO48mMjgLEBbelTzQFyYqgQ8s8ztRkFgvJtkKiJmvzPNs8ydRxUoFkw6i3rN6ugt8io+DsODjdlpODZC4FoU/oxJOcO0jOJhKGFW+yNj5uGgqkphJ2xWQjpOuuG3YkdIqqVBirV2uFOw5+AshOp1b5imIdAFJDEum4v3ROYRaS/3Fpx8//xu3kxWfvKq5eWhX9UwAShSyXjbvRk0Qe8hbnRcLaIOlFwj0kxXsMgMQZwQ0qsYreGFS0akgiHn3bcFBTq6j07IQfB7wqbO/q1WWRGhIhXLct9NXgTIOQRL4T/Zs3jEKuNAxGtko6FArQi3AMGTZAMuVR3qWKZywkraI/vEU9iDmnlBF1Hs18Pd3qIeEUnqXaMInKoeYgmZRNM4srAYmw7H2ZsU/0MJoguWhzfj2cWy8A0ZAsF+6RWtDHcmDCcmHQNm9Qh0tT8FsUkoSsDbMCkI9tzFvDrTZnCUCK1xg8yDZIxu8yI3qe84ZKZR+edDTL61XAGPLRYuE3kgpFNkGS28+pG8UoxAKQbBKiT528NYVZF+mNreRfMxXnTSeTTZDM1Rbkws7ZzyVR4Z7qXbUnEfx8eNzZk+xaK9J8KscjIWllB8vc79w5EzOZSXnYfV77nbN2vbufkIT26lWdKgzF6D2q2wBIDuawkERhZyMkf/uMM557o3vD5zsAXb2yVhxwP2JqsF418rY7KKgfdhuE3aik5m6IxTolJOkxRs8yCJvvczt73dqaFAaJVqrbSREoB4BR5anUJJpKkZHcRVELIIxtXt5ZlbwjNAAv6/iB0JgvuXd9vdjvXuvGLnKPa8Wh/lpxi3PZjw78uB8K+BLE1AbVBwR/4BqSKavAkvnBLUKS4dXUfD4mt2V/FRC1GDThKCEx5I7MJHsKdNvCHbtI2NaCFCRlMVWQzC2oGpI8ENtyOovAsjIaqraoBjAauCEXglCPBhNBlQJbClB4fA6QNqeYA+Vpt7/aTg39bY+6fX9sNisece+jyfie9OvJa7jtwB5234lcjqpm86s8GaDHHXO26sRCSvZNKT8fZ5vEc56EhaQthspBNleda3Vn+VrZ31Umx9c4szPT/sTf9CInd1lQZkCmj0e9b7l1JjfIu00xq3aSH9a21BqX+lz4OILSQpH/2++NkOTvCr8pQLKe9hnHanWZ+gNQuu0ecc8DLNEask+0tpGrXJc2kT2hF1LaPfr9WMzj+yS7cf6xjHcMkISTdvF6XyD5Wse+31vamYbkHy4tPfv2jY3i484Nvmp5tdizsh70V50nNvaGfCQU1I90h2KLQFIbIQlAXrO8LJWz2HEfaoWnOfC9kGpqve3Z0SXXt/WH0oSKsC4gCS1ZiK5TDN3HnftScSu50aEfOHzLyIHIQf/W8bCics/tSuWj+xw0JHlQLDLhIYYrQsgzBUmxRLg1NWorp/+q840xz+J+QPfNfL4DkCQotVKJ7r2y/ZCpUUsakpUmd1PBmTrTThXuWEjmALioGk4+d1XmHnXOUUNSF85ooFkgpiwHz6b7K4/NwI+Q/IT7fJuM0K+9poKumIG0za3G/8PnRfBVvG78nqYjVcY/ykIyp+TzkPMIYLFP1nj/D89mtd9UGyRtT+hWILlI4dhWvMStzgNNDfJuOmmtnUhm5qDy/aUAWfEKM7l+wm/L4WVj9vuz4Vb+ZsSLHJYymeX7H1f6oQHJ29zv45aZByWnTHE0I4dsYCKVDFZGCi60f+xWmuCE5D7nKMEIyfc4h6oRkv/ReZJvXu+I0DdeEBqp10NuDnMd3ZvgHC60ZxwSEfFRCUX3ogyrxtBqsJv6avqHzJrsS4XS1ctLxR4Hy72oWnK3IRSLPGEVkn2xet+PLxGG5t9NAeSUNNKGfT8Q1GiQ47x9xKRwX6wmeh17fsoz22plXVkEwrNsftFyHw/OENaMFWYhJBr3P4ZLx9l5brbPK6mIEcY5aZ3LWkOvkvOqaWQO0m0eybzSpH42aPNQ+gxbV7jy5MLmQbbqSdbUV0w1Zgn1sT9LtblEt7g/PAUAkU8c1wpkCBmCU9+eMsDMWhP4Uqahp29bBJKA/Sm1r9wGX1N7qfJ/OAlIVeOm8q48oaDxzD+GrVVoOuWta+EC3d7ykAMkrKYta3ObRnWI7Sy6ECnVL2pzlovkDNvGljUVqGwVjnHUWYMQeBugbftMqvgpN/x7q4VHiypPWUja1iNGoTQkT4rnCDD2KuFmRKbitkLLF9ZpzuEFI9A/j/ZAcoYjGb2+90hSeDQCVJuG5EVrveLdzmF7tXPcfnclA8n/srz8M0DycvdjBiQBMFQSwbR6Ol7w5u5ArA2SvJ07byHpATmQ6dSYUg1IItx6NKjGoGoVYLOeFPol4UUe6Q8rkKQ2H5SAAHS8HuALIfQ7xV1nDsBDkn06hGSpHlF++XoBtmfZlSKQyajsIwuQjNVlGUimVDGYE+VMRR0GtqZDqBE8rDwMYVZCk5CsnFVm1PkXzSnYPJH2tu9yZ262dcaezW61OrC24BhAlovsOL2ITzwoAUkYw6O2DQPXkRO0hTJtkCSYEOaEtUHRwrMtvGpNQ1LymAGs3J4GJCF5Wn0mNv+qc7AadhqS2ruEN877dNFTfHxWDGHqLaUOBA+ZHmUCkvLbC5DkNlOQPLkABGxFbq4yW4qU3D5Zy8FSQzin2qTDtbmwZvbk0ERtUttoEuhPhW+bXrv1ZNacrNJ0n67Ogacgec+oX4Nk/C4DJO8elsPqoal9bDwVUKKOhc6YhiQnU9EsMC0k3+X496qV1TwkX37mmb98d6dfXN7x46oASjb3031FRdE+ES/vy4grgpCGOY4YUwU7Erw8avAdlDFYflbjno4XDmCrCFow0MJxeOyb4o+OusWtDsoc6URoVGA5mLrXKIc1IzTMNhQYtg3gHpe5hcFzctuCa3//ZOAVH4yWIuPr8YfMmHpm0a0VekS5pXElHBJFkOkdqsIbW/V6ommGo8k73Ncw+y/VSiGgct9ffI/hx60XJx3yiqEv9QOvLHzqsScTISqbs7DVcbp9RO9LqiE/BUSd8/AHZPX7KEOeCDOWcIQX+egMIBlX7BMomlF22u0vb39MPLVJzfTzH8FrwjuVfOOwtt22bejHpPaHt8fXMV5vBKT7nh5x39dp95uDMddp86ytLSrm89RhaLxu9MwDLB82AE4pCFUKh0w4XHuwsi202STaZOz+53pZGSa2uVbmVVOhwVyhUGtxUsMUl1xhVJN8oR2KrY8T3ZecguWirSo5IYfU81Owzn0u9vvWJ0n4Hyc4aFeKEbgQwr93SgsRLVVgRrELVuWDD1QkQ4fCYbeugT8wyqFqaHJCFUOz4NjePli0Uuxxv4eLndP3luXl4i9WV4vfWspMAHnZi1703Afc2d01o5l4ePAkKRNHSMIkFCvwG0U4soqVO0lQ0rs8qHpc9nb9NqHQA5AdCnqrhCSKdo6NPRzFi5ThwIkJGsOZc7Unxc3DcdR3BRwxY/JGtIRAkSZovd7JijG3Tdh9Yw9KQhIepIYkfyhRYzOcOdueOL04yCVzNzzbC95cFEEO3mEcjGq0XDn4ONUEnGrlWCQUYiGpTwT0AtE4EcL040WvwOiF2tevSWzZEnLVyG4XlAcW0Eatj4CqQ9LbOMIxAnI2SUIIkKIBRCl45QCWAqeFpAZl0/9NrxOhrDxfC0lt1pOMBUXKS0z1e9Z+7ybvmoNk+Zy0zF4TJLVpQNoiqNOJ3tRa+HhSL0bSi3JqgU+1szxfSLbJBrYN224zW0meAuCikMx5ootAMjeSzUISpiEZnQoFyXsmvvjwvjAc/KRbN2GEpKynoxBhRI5SFHl8RwRCr+KchRqYNkjuEynUNYmSXuocrnd2OsVrHfv+U3f1pzVA/oczznju9Wu9n3y0OxL9UijXAGLXuidf56CyN4zBigOVgztLOMZeyF7VIkQDJDlCCyFXhEIBRz3+SWY3isB3XwwC4yIyrrROfVuEH48FuSLorEaRgpHvfzw88tJtd4xHcRio13n1yivwJnE2qUvQdZ9jlMZyr/nAzIeXKjkrhslmfgGOC42CpPywDCRj0Y37sUj41wCSfVOEpC2JrpfgNzeDJ8vOzUlALicEL1GLYFuBbDuP8IFEeKYW3jEl5CkZtDbB8Ko26ai2mD+kKkgJwwhHBbycV2dhZD1ADb/HUGDTYJ8Yl4953H1WtHibhEinSbOvlQSlgqO2x9x384nxRC7lugrBSliXRT4oXgp2KlFsVPs//O75OhWvfNZQ2DQuezglTBpaUnJKRQ8F05XCYjbkbPbvoUy+VdcN6F7ZbIHRrwiSKfjmPK6UbKBVvGqaN5pbA5osVwS3yFzUZD9kYoJNpVjHff/43glJfk+smvaA9CYVr8NhBZIPhFQW01cQfYHzxKJHwhJcwTxgpgMJy5QnCQMkL+r0i3c4QL7KOXGHLzrvohok/2Bp9dm/eMmO4tz+pNjtSHzA/fAlJBogeZ2MwMpDkmFVepCEJMOxdH/jCC33w5U85NBOtvCQBBhvnw4jJFnAw3lo6KGEIg8heXgUQOmeCzsy9nlIC0nIksHaIElvi1V8D8/SuSh6KDbcaqvPOGsO42lEwDdAnuFWPaVDt3TY/qQKIBO6ofbgzFWN6haP1Jk0w64pke1KKCWRk2wqkW+CZCqnlMo36vtzajf0NghHLuRtHp8OZea8SN4u943bLQVJgtJCEv/T8H8jIHG7e5yYgeTj7uRGmy0O4u/4lLEUJPVttrDIeuY2h5uDJEGZCvE+mOgjjdu0eVuzf7mwsa0dYPokJ4KwaMh1qx5kLiyZmgKTgmRKveaFvH6TLrE+fnO1AbX9UaHRRSDJY5aQZK2IFFWO+hVIio1GEZLeJuJ0kAscSg9Aoge+DZLwJAFJtA5eNpwIJP9sbfWnz9xx9H/WIXnm9l+8aa1XXDGcS9ns7rUVCV3uGXgJN2zwxq4DHeK9zva5nYLdOCgLdbTsnM5LHu6XBTwUPj8Q2kHiQOEotdaLHiQhSa8SpiEJPT/Ckt7okSHaO/oSrgVUBTShh492/3BYK2ipT8foit079uGZh6YqtCUhrJEsgIQkc148KG0fFDUIUWwkNvTesFXiiaobw2olaK7FIXUGquGlwzKps8JUWb2uRrRntrVqNXNAPl9I5gov2iCZUqzxNhRLQVBAMxt52wLg6Bnyu9e3a89xEUAmgekuP+nA86n5XAzXc94p9kH2Yz4VI8Rzr8Xn8jOIhUvTUaz21fnaaOqEQZ808MShDskSluwjrXxHBpQ6dJryQG2lr4akFCZlvv/YE5qQDaycVP0fhmTlsxhNavKB2oOyxwbWsRf6+k3vYUvvz+QObf0CoWghye+MxTt3jXpiBOV9oReXHQVYj2EnJn2xOHzaOT63hcEQ6H2XcVu96ijGNk/ykt6weKe77ZU7M3MkX9nr//j125aKc3f6IctQrkFuT0Pyhk5PAIkpGQAkQrAsvLGQBBxpGpIkO4csW0geG3YrkLxjNqqAsmy892NUxJvsqcHDAZLHJz6XCe1U6fcxkNSAlPYJWyjT74hZSMqBqyCJBUqH85iX4ZlZVK4I1aloWxEbT3zIdTSoTArR1V0pSNqzx+xkBwPJlBKOhWRqVFNuADAPilq4x1T6tYVbm3KNi0Ay17AfF/zE4i6emPttwTR8muCiAaghSZjR7HMWgaR+TAqS9nEakjq3Kp5oy/7TE+bnw2pfW9TUBEntXetwtoak7jltgqStLq5ZpkUmVu9mT5JGEZLWW67kXBkxCQVoi4RYnw8kc7enAJnS2E0V/WAdy0H9VwX5rUCyaWC4hiTf46PTefyeTsqa16tAUkKuCpKIALIK9k7nBME0JGFQXgNHOJeyDZLIRxKSF6x1i7c69v15Z+2n6RFZZ5zx3Fu6w+KyzrjY7xZHKdbpdYpr3Y4DklDdOdBlRetI9FshKmDFAghMDUiEXRmWja0hodqV2qRUmAEktTdJSJa3efk4VDTd6rZ7u9uv2zqljNtR5z7jseyHBGgEjH1vseUhNNwzvMmwZwTWqBshyfAMC0Cw2Dzu7JOTMgzHRYUHH+XaYiVqEEBgfychKZNAwuvePijV7+mB1krWE5Ptk6OP6NmZwhiGaQmzlPdY7WfLF+3gNusJ2vBuW+FO09n7IjnJNCCrIdGK9zMfiwf52DSYgRhhR1BpbzDlRT7hHqvtU+42bfiNwPi/fQzBal8/B1sLa/7uLCRzzy0LfqpRkBocA/RYpRurddX7f2ySL2Z6RFR/BpX2k5RZSFKvVnuNGpQx3Dv2pnOsOY/yVCZvLbbFHOTzgWSqECcWBA7HSctBx+Yebf9h20g0a00h20XCuanXslrCAKKI7mcgidzzyQHFBLo1SN4ThAYwJYQQvWPi1vhxtxw+PfDmQ67eWTrk1u82SF4/7Ep168dXl4pL3D7/7Y7txX+fjH54197d769Xti6v/QyQPH/Husj2xKpWERDwLR8He76i9ZD7EvdNPCgJOxbmsFCHodabu30xOw0kB0lATnuTBCRu87f7wcrwPo+77QKSMAvZO8ahiT9AkjHtuFgjbxggebdRw9GQvC9M0X445lv84sDFjwtEPDMPORXqmUZVm6DkQ0gi1ApQ3j0dR91VQlJXsdpcQO0gzGhxpsrGU5C0o680JBcJw6ZGK2lAtrWAWM8wV/G3VUhywbaFOo9veFA+PhsLJG1oVIMKZsOnGhLyGPVbsEDMQbICyuAxpjzAVNjWwpJwS0FSTuasN0mIZcOkVXs+kJTjAV6c+91bSNqcYnbiieo51aDUkGRBktxuelj5u3jQ7cNDZmSZhmQODraQ7IV6YvY4jH2EzxOSEbIh2mNHpm0FkikYLloAlFNCslrCFpK4BCTx/eP7ub/vIWghCSfl7gBIfT8gCcM4Lxjn94IlR8WT7C4ESXiSgOS1bp3/6Np68TfbtxV/urSUl6R7g3M3zwsK6bu7a1Kwc63YsNjfHRcHnJd5qONnPd7cWxW70cH0gNs5JEolJ4hcpHiO3rSIAAp1Do4HvvLIvdnD7rnwCGPIdTCMUy6iwk6QbKMx9Io+yiODdd8rE/opvehAEPlW8ka6EMf+8JEspm6gnK2ox1OWyTe/smjBe5GPO5DBHnM/6E+OfQWhTGUQMfF+hB4LjqIwOd8XVXMys9qSYtKJIb5tB60+ONnmcWo+F5Mw03RDZMKinuZgLPaQO8Fh7kAu4ZmFKki/uJQnD1HdZlKdSyjh7f5IjEOqy5FJG2K26rDNdNEFXhthwliUo0Lf/F+HCVPFMTYn+HjCu7PgISCf2NgQ2H5y7iC4MZVLeqifcvvw5ByQ9NdhT7h9etL9np9w+wL7lNsvDeSUsYAnQlAV9ejCHhtO1hWyfN4nN+ZiepuV0K3xknM5UeuZ2v5NAtWGaHVhFB/TVkSVq/yl8SQklQ9meLnp9RcRbNCAtuB+0K13MB4vNJufsyev8XjVIvOjevpjEdBt1SpiIO471oIKvJ5S29I1EE0QtwMR2PIhcAzTaU4Ho3xmnFpkZPXYHcBaDXYCcH2l06SdJwynB4MOdfuxHRFtgjAUm6LodF9/KKMZr+7sLK7sLxVXu3382NqgeHNvXLxsaT0NyT/YWUISCulbgSRIDUgiJ8idIyRZoANICihHfXnsoVFPNFTbIMkpGLH1IxTzIOdIwYEXAklqURKUUbLNnSjA4P3IlzxlyGdSg+TjI39WizNYDUkYW1e0DJ1I0VGPNiFOTE3JharJtphDaNPSpBIKDnoe+LhkSIzz37TodVWer3omDpUMmIaknyc4F7NVh4uYhSS8qWo+rArJmjfZAEmbX8zl9whJwJGAhNFDJRQJSP5PQC4KyVQfZQVymf7OFCRt5az8lk2uc9FCI1oOkqkcZkoMoa0Fp83okWdD0619rHm1o5QXa2/niWRrTjHhCdpIUK6CPGUpqDY9Lvc6dv6nbi1LCiy0QTgxNUhDksPAH8WlWxMYzbPTT3KQ1BOPUKjD4fPRMEGqXzprhCQEZ2DslSQk9/RXit2j1eIjZ76kOHd9WPxdd1T8wYt3/DINyR07fw5Inh/GiACSe0d9yUemIIkpGjCU2QJ6SJRCaPxIF9NB+vK4w91hHLBcytf1BKYIjQKIGpCEJIW92f+ix0T9qiBJSKAHUkDJCR9qOjfc+HtGfuF/eMb5fmExcV8ITJeic+SLhAO4H9ORmJWh09qrlZE0RlsxNby00pdoJKFOJnofrXJNpS8yQPKU8yhhuo9NQ5Ll+BqS+Ezq3l69/8pfn1aMI67aFF9SDeLVocWD6E1qi4UlptBkkepSmxdMFdggTApIPrE5i5AEIDUUIxiNB1kxk9PMerAZ8YHU45tAn3tsyqNexGwouFJ529IjynDwIkVNObM54NRriGUVj6q5Tqt5q2UDk1q4idYWyuXl2jp0mDMXpsxZGxSbIJnyWm2hXe4kfFEPNb5uApIcBv6oOxmnRQhynQ7D7CnrqQsr71ZiK1jrse7D0RKFtmjDENHsiwIP039UZGOoNarHYUZyd7m40r3Hc4fT4rXblopX9EY/TkLy97fv+PnfrnYEkruhnN5bF0/SV7cOBJIHuxMPP8j/OEAeHqx7lZxR0FsFwbveAMgjvVEs1ElBUnKIg9JFTkGScOEMRR1uvWXYqUjXPR9IyiQDBUk9IQOQxPOlHy9AUsrtcQAqSLLKDuC4V9pOurHayvZ3So/koBwcXRtvkxE2zlWq5VT3UyIBSZ3MAMmHg+keNhtufSTqcZYenZ7+YCFZPQCnScspraTMjnby/XSD6E029UM2QTJVXRo9uQw0NCQJSJgAcT6NXiSuiyUgKbeZop/UPuUgKaH/BUCWA0wKkluFVK6oqCmXupXq3xcKyRhKzqoXJYQWWsKvlfFmCYEE3/8ZqjozRXAx55nxCBcB5CKeZE0G0IR/c5C0BUdbhWQshEpAUlsOktSf1pC8J/ZGNkOSgIQzR0hymhVzkQAk7LLV7cWlK9uKq9z7fZcD5F+vdovffdG25xaCJMOtFpKAH3ZAAOmMzf8Mmx53YDzWxfgqgG8k1bDUeD0UNPakdaPbF6OIgIVkHCyswq4VTzIU8xCOlK+LGqgBkvTS9LwzDQ3KIdlWEEIMFVN4HjxOUSaZh1BNOPgAjQfn+ELHvn8HkO5XPVy57HtDryS2exeGRg8SWrFGg3GrvU+5CrUUJEU0wFawBu8RuQP5IZthwOJFhpJtLScVrXWens5LzrJDilO3p27T+a/UItjUyM9FVhfXAFZPOgDCngiFOamqVPz/lIMkAAgYMveI/5/amEVQPu1OrJ6aVSGJ6zC5PTyORg8U2xNTIVwYYSxFR+7zfsGQTBQbpQqPcvZ8YbooMNsea/ffFj1Zr7Z+otFuTbDUrS7JoduJthN90mfnfFprG9q9VY+y1sdoUialyELQuzUnpTaaY8PLOUjqVhA9FFwPRKjIZYb8aC0nKVE5r8gmhZyTUTQRPA+KO2wBKSHp1d4obk5IHjp7XuxxDt+Htu8oPuA82z9fXive+icvfywJyf+0bfsv/mZlvQJJqO1c0+/UIOn7ETtiUUYuCM3e2h8LKAFI2EGRpktD8linV0rSBUjGOYos1Ol7lRo/EWQUeycJS4CRhg+PVapxtmJQvKGHZiETC3dCDJxKN1TIub3XkS8PAJCeq1lVaQUHAAB6/9TnIgFVPOd433u50ZMMniVCrF4ByM9I45SM+xKVp/cZgeNcGNWWri9Sxq0VP7RCPyHJsAi8Zz0+Cp/BA8NSAzN64gaSKYF1C8kHpvMKgO24qqY5jmUVZLXdw3pabT2QTZCEfSrT5lE+blqBGz1JGkBISGo4xtvndVBWcpkqlKstQrMFiq3h1pYWFfveraXC0qkWlpzAQsrj3Eq4tw2StW2a3GxuOktNociMO9OQbJobmoJkxZQE30MN0EzB0re2NMPR6uVa0wLwKUjm4NgGSRtu1ZCUyJQD5MN9P4UlBUlOXbFiL6zxoKN0u9t/bRjIDKU1RDaPDAcVSMI4BYSQPP/FZxQ3zIbF5W7f3rneK/5sabX4nW1Lv1gIkld3Vh1hO42QxOBiNO4fHQ9kx0DxY+7NA45HAhhvDMYCHumh7Hu1HJiGJExDEpWtt7r9EQseJnN8BGVKHJxTNGD0EFO6hJWevgBJkThy+4PXPO7cdRggzdzkQ9NxpcXgfrfAIfmM12Uy+dZeGQbm/tjE9P2JxvtU7jE17Fj/6LZSgp5S0tBC0g+PhrViBS4SPOi36kmmNGY1pDUgKbFm5zrmACmjoUzRia7K1P2sOW/pCbeIfMp9jjBcf2o2d97fhlzCcNuT01n8H9dxG2/XQNS5x+gpBjA+467TPu32m9efajB5bgNE4Wk29WjyBCAHensfvWe9rTZI5rZV6wc1Xl+EbKZ1puk9tb2/T5lK5GSuNkCybV4nlH5y/Zo2d5kSkNfHTdJaPMkUIKtate2QbMpl1iCZqQPIvb7OycIWgSSrXGFSFzIeB13tfpwhSUgy5Mr1k84Q0263OcCJufcAg0cJx81Cki0gHJcFQO7pdUUwB9OoLnTv6/U7dxSvWF396Yn9e9+xMCSRl0xBUsAmgOxKPwoaNwWQAZIItR4O4uYHR5wePYgSdoAkvElIyrVB0nqS4i1OS09Sw1EbIckzkdz4KD0kmZDE6wGOR9fXnbfbEWAyN/ngpNqHR0FyXXEFSDIMjD5IPdUjDkYOr/2QW5joPd5nJnJURlaZpuGYeG/JSdZyC6boh+GUsr+wfkYtcwvV1AUKRrNQqQmStqTc7mNqwLGGZG6B4HOsJ6NziYQkQbkVSBKUGpAWkvL4jVnx9OZcTGAWqlZjzjGEWAlHa0+1gFKHblOQ1F5vClC5MDLvw/8IG9Ps/W2QSkFSbyMFOr0vOTim3lMO0Kn3Z1t2amHcWPk7i5bKT9r5nBacnBtqR5FZwKVmbZ6aTlrDqbnfPn//bYU+OUiWAwrGlcHxNhxM7zG3D+h9ZP+jhqQt+NHiAng8olSIVmGNa4LkA+4YISQllRWihuyhR20KTCZHjbyQAPKUUXEn6IrTSdvv3g9ASUhCD+Ca9dXiPPf4N3bWi/97W2ZEFv5+78xtv2B16+UODgi3wpPcLaDsCyRv6k2LW/pjn0Mc98SOTHrFLVPnFU6G4lFCWByFPNihvWHwMQ3iAyA3RliJOk+3L7THG0KeEx4qJIWgqENIwqsjKGWGJPJ+sWJ06EOY2osc+pAnm/J1YpgKNqnhpQh93iOi4z4vSpm8IwCee22EcO8P+cdTsoB7fVDbt2ONZ0C2taP0FMemhWIYz+hwQEGJgj/UB83YIFy38yCtekguNKunaOAA50GeVDeZlvBi6CiOH7KT2gMsU32NnMepw06L5qdSajMwtuJ4r2oisAJYcF0gkghxag/vKbcvT7tLmvb2YE8bL9B6hE8r0OmQqt1e/H/i7dPuPYklwGkhqrerc5pPTsuwLHOhhCrBWuvTVMCV2xIVt/b1UoYTAZj1dK1nnWyDUbfnHlvZx8R24+O4v+b92+2zVUeHr5HT3WohkrVKEY+2jExevTo7nY9Pzc/MQcoWD0VvbexbuXhdV+ASVg8YoQWdKz0d5nnqMLD2mmVtmMzFsC2GXSk2omUr2ZepBQWwr1HfOUCyAkoV6aPoC8VeWPOhFdq8DaUVREDZ6whfDgWh85vddtCGKDONe13xKHF5zfpa8X7nTb6+2yn+YG3lZ42QfON6L0KS4VYLSVSsak+SkDw+HQkkD4fxV0iSYorIVc6u7mIbHpgchgxIooeFkAQgJV85GggkY6HOoKwIJSTL3kMPJz8yZVyDJOCEsxDdYpHSL/We5FRACTgDlITkLeIZ+pYOkVGbh/FCAZJ3pSTt2CMZzn6sB1kVKs/0AlIRBD9SpRJySs1IPDUeNY7kYSgjNQarzElWQ0ZaTLpSGh9ek5AjJGuFOXFOXwn+1Pvi2WpbNWTbIqWLXFKFMxqSTyuoaUjSLNgItyZIpsD7ZAK2DLESjp9xnzEst13raVpoxf8TcGqCTi3vGbxeC8cUkFPgtF7urwKSqdxsbtuxKCrx/vTj2MdKUMa87hZGnaUsW9STgOSp1FDrxIlvLaSZsBwktWl1mxwka0Ouw37FMLHxaG1ulq0c3Lau6GUVL2sfLCRhMeW1RUiyIBKAtJA8FrzJI/2usAVC56IGF/r1r+/3pHgHkIRnCUh+1G3/L1eWi99b2vnsliCJcGsOkqxuhauLnkVAEt4kIIk2j+uc63rF6lJx8crO4uNry8VlvbXiioGDriM/+i/pUVKEAAYPFZDEG429kcNhFpLiegdI6vFSGpIs3NEjp+6b1ItLAEmZTYY86MQPa0ZcG+HkW0K1Kl7jAXiS82kMO2JUiwxRDgOhLRT1iKv7x/VKspgTNLkKnSu0c/00JO2ZGc8keRDYM0trWoWEhS6VPjiTk7Sjh2yfpvaECcOHjPC4tGwomTNdgZgr7MgVd2CRtCFODS5CznpoEYDWs1MAE4iZ+2C8LQc5/Xqfnc/jtux29LZyr2/392kF9qdtEZCBWeo2Czr9udnn4PZsrjQHTbVPqcfY23LbbAJ1an/i+zFQ1dXCcjmfVIQftlqdWxdTaK6MTU04samE1NzOVDFbMk+fgWTqWNeeJteH1Gi0isRfQn2oIjAfquA53cNCUsvn4fbTs7m/DPvDNJeVsNQylz7SZworg1ar7ZMnNyguwFaQg72ucEmk6VDl6v4HLHevrBRX7lgt3utY8heOefMdL3ouC0nkJBeFJIBGMQH0KmIsFQCpIXmto/PlDpAXLm33oOysFJeL2npHWkvgUWpIArzIaVJeiJqu0v4xHJamqlnZF6lHTN2lvDc9tNg2qOqcpC/cmcS+zBQkUa2K7QGSpzdmscpTAxJmX5evVyrmmAoyoympz+YeNOLPOUjas7PcQZI6aKysWRMkT5khtpShO5nwjO17Kg/scvixbqVJ5Y5y4t8UH4fZRd0upBqSn9mYi6UgmYJVDmIaZk2AlNdTgNSvZS0HSe6vBWW04B3nWkyaAJfzIJuen9tG6iRFQzfnqTZBsgnM9nUWhSRlBOlJLto2kxNryFXD2ikl2TmbLRXctpitBtuWYxz6qPZEWkOS+6L1c/l6pyfjJPgr9Qqh31FDkvlOqZ9QVfRtkNSDECwkU9OaAEmsy+wk8KCk6My4uMP9BuiA3STtIB6SqHIFIGHXrK4W1671i7d314rXOab8emfp2VZIXuA20ARJVrcSkse7677/L4QYQW8Im18PebvV5eIS503CkwQkxZt029vj3hy8yRtHvp9Fwq1Qbx/7XhfmBSE2YCEZRcgDJLXXeJeexxis4j2iGpWFPOFDR0vCve7LRc+ieK1oZXFfCnOrN8d8aVf2C9WsKLYhJDkC627IzEnfI4S9y9FUZVHNIGkWitrzSp7dhZCoHIAIkRoFCybEWT2GfIG+Xd/n7x+WEzES4adSwD0NSYZvyyIBD0U9yf6RcRXClcUnUX2aKtzQBSoVMwtmDlrw6LRFcLnvj/Zpd4Bb+4x7T7DPugMbpv//3GyezSXa14qepN2+O5i1fdYd2LDPBPus+73BcP3TU3iPo4o9szGvQVLD5+mGkDBMw1d7qIS8DT1bs7nKRcC6CCT1/j+dyM02nRgx/Mpwri50IjTZZ7oVdaIUJK38XUonVq4HmUStL8xRblbaT/9vJQjt9rcKSRtu5X5w/moUvQ/7nus7jmINZs2JudCQk9SFhxqULCbiFCbbz56bZ2mHJ4A9rP+gw+SH2Hv5T7Qlwm4JrLF9k6K+sz4o3rgOpZ2V4jV/+sdPLAxJFu7kWkAYbkUlJ3eQkDzqPigQG5VDgOLlbluApHiT7jryk+JNBkASkngjzweSGpQ5SGpAVmYaun0F1E70Q+5zNJZeG0ISZx9w1wlJVLKi6oohUQtJbEtDsvyCq/JtGpI6vErTOYpKqEVBUgDEfsaQQCcUNSR5m1W7gOkGdTm7NnkYDclUuJWz+EplkSokWRCkw7m2GTxX2ZiqbqxXp/pFkoupbq/Q3qOFZLQAP0LPmr1P///5+Ubcvvb4+Hqf29goPr+5KZd8vdr2AxSt5SD5zKxqObECDZinG6porWdNz1vew+ZGKyQtrCyYazngTDi3CZBPZwqkcu9XQvABjMxPW7nAKESfmAe6VbMasSlRdTtdRc/rbIKk7fu1pqNGjCrpECwhaSNM8TEKkBXlqswc1lqkyaw5OUiywlVPGcJtTJNpxbH7EtOAYkW+AaVuAdS1IUzRoX//Nve6x9z7YEuIb01k2LUn4da3jbrFn6zt+Pn9tx9600KQvKLTiWICWuA81Sd5r4OHDMPEBI2+1yO9YzRzkJlIgc4eB7OrHGjhTcKrvBwFQb2uJE4xo/JgKNe9eeBzkijjpYQbQEk4MifpzxKGNWUd60nqvkR6kqn8JICG/QbgBMjuC7zV/SgBSezTgW5H4tmEJL5Uhk29mPnYW4BjFPPmKBzjYdUULmxzbqLSjWEPemUakp8AIBP2aBARfgw/YnMb/8d9uSkWPBjK+YPpwh1bam49yNPue3tkWI5YKqHI6sRpxaT3sMHs43OFNVzkASgNqQircPsXNjYbTQMRRrjhutzvXgOWgjEhKRaeXzO3iNM+5xZzWgSmgiRBScP/OYDpsG9bcZAGvTWbx01t55lM7tfez8fo3Gqt+rehutjux9MNIWHbQmOLh6LWrgrdp0Bp/6+d5Jnn5ITUrbZwCpIWgFprNumdNkCSELTjqSTEqr1LNWxbDymvzWPN6vDOxaI3GV5DJoyMxrF40Fa5sqXN9rXrEYEnM4pietIQRmr5sVplcQ/WfXZFMPyKVN6RMMqR84wPiMCA49P2TvFu95t4+XDtJ2c0/VlIItRqIUmBc8khojdl0o8ekUzQUJA86j6Im9wbus4tuIDkJaGI57L1lQjJfZ2uQPJQEEn3ecmtQVID8S71P2PW0AOMQAwuvR5NdVdvIPsNTxCFO3e5he92tzgAkhLD7qwLJG8Z+Hi3tJWo3BtbRxCyhQGSmHbBalINSe2BxRYJk5O0A2MfCj2MdvoAIckfaQ6CvE2bwHG6IUZAUqhb52o+Kf1g4QDOtIDYZuGYg2EOQ+UcH694i6FKcdJsGpC6X5FmPR2GCwGuz5+1q+LJMexZ8fIynqP1GAlNwo3/f25XFZQ5GNvXidvZnItlQZmA5GeUp5ny7pqgYnOmMRzNz8sZ3hMBmYJlyrLVvInX199VGySfdL/9p1Sfqc3RMtxs4YjbcF9OESm2hCwASSsAr6uu7XPtBJZFIZmCYG5yShMkCUDtTdoZjilIRu82SD3y9eO0lkzNQFxnGKkK+8CQKvWlWdynIQlPkx4gIakLHZsgyW3eOeiIVja1XWmMQFKERqTqeuVMYw3Jy89cLf56x7bi95fO/GUjJDFP8k3OsztvvV/shgBsd136HPf214t9g45sUAYoO4BK+HEYinWm3eLWuZ92IYByzz3hvM07eg5sQwfL2Uax333gVzpQXua8SBiuo4BnTxiKqcOtUrzjPgwkXmHsh4w27Vdt3KsYh3EyHEtj3yXnUwLCx3pdETIXC1M5bnNfHOzocCzG0V+YcIJhySjUkXaR6bg2uio1tLRNDUP/8NssF4aphGkSQ4SZ+9P5v8dlksmoVobPdoroYc7n1f5EdbA+Nptm9S3j7cNhBGRqukauaCS2UqhFMFXMYQtgmDP8vDsQv+AO1C/PN4svud8grsNw++c1CIPHpuEE0x5ek33B7UeTfcm93y+695ky3Mf7v+D2Hfb5qTc894vufcNwXYdiCVDJY6p8J08AdM41VVWrTxRS3qv9LCqe7ayaR316PJZt2tfVr12p1jXVwSmP1kJ2UUt5um2FSvzdpE42nk7kSXV+U/pwJ5tiT0xmYp8K9oQDBSz+3gnN2ahquekiRsknV13K48vCm16uBbuuJn90VNc+trUDdj2xqRHmsSWEPR9XQskSyh0ORWwBw6/FsFa67+qu2diLlCO9NfKFj3BUAD5OHYJzQCeM8qGEJ9fPKBLDOpPpOOY4tVMEiVHIpTIfuW/gnb/LHfMuGcyLV/fWio2dDZWtTZC8trsqoAQkZTYXxM1F4DxI0k06AkpASTw5KeMdF3e7s4oT7sdzxP1g9rmdRW7yUudFApK4fpXbJiEJT5KgBCRROINeSUCyAsgtQrKq6zqOgIyCAQ6SMjsSUz8CJG8XQQFI7E3EoA4ESB7pIjnsJ5PAe2yDpA23pvQT8X8OhilLzUS0Z62pvsOU8gxhmdQLVVWAgKSGmgayf900KLUnqcNS9ky9LVxmc2520atUgs5Kz++Lzr604QGZgmT06hJA2AokCbKcEYQ5s9AkFCNkHTRwm92v0tOc12CkvWbbflLzpo33mvsMcsDMwdnC0d7H+1PerYZlUyg4FxZuEmOw0ItVzJmirzZIPjXd5UE5nYs9oexJ97uzHqYG5Cfm4ywkdeQoB8gUJFNyfFbPtiqGMEzPXM3oANvagRQkK6AM74miBOJZuu0TkqL3vQAktaLXSTX82cqK0pO0kUNocacgeZVb8z/wkpXitc5p21x68QKeZKdfg+SezopAEolOr7vqqz1vdi7uIU7ikAojP9ninqGj+3he3DnbLG53Z/GYBA0JIBTsAJIwCAxc0+0U1zmvdH/f5/zoUUrxztC3gnjlnWEULheb9CsW4TjqRsP/VOEpFXpKD5JjumDsyym1ASe+eCcYPMjDna5A8ra+D/MyfJsKBViNVSap7QgqWtuA2tRQXQJST5lvar4XUIk6zbimi5lrOo/9ZKqCT88QLPezDspHzRmtHUEl25n5s/qcF2DbHnAgMvSmKzFtLpBhTADyy5u7BJYwQpLWBMkcHFIGiKXsy3NvAB+vf8VB6WtuX77qXhf2lekswpH3w3CdsPzy5kYEpd4+Q7QMJVsvMVXNq4EVP6/M+4yesgkH28dq4OYgmaoq5n3wRLVnmS2wWtBS3ugzDdWzOTjWlJlM1WyUBXQghD1hAGnDuLFKFXBUltKATQmqZyeThHy/jhrlFKuaIMn1xQ79jqPhjD5uLKwL3jkL/1jBG0/exxMxkbYMA+wBuXvC2kxIIjR6d1DokbVRQRJpHQBShikEERhKdFpIVooy4VmywAcTppzzdrPMlexLnyTkV69wt739jG3F/5gNi43lLUISajmoToUniXArIUlP0kISSVK8SQDy/slGcftkXhwbT6V6CECEB4niHUJyd2c9QhLFMQf6XfEoxZsclKIC9AQXgeTtw06EpOiloldGQRIJXHqQACSAmYIkjJDEvgCQsFt7vnKKxUCpUVU5jcTUnEaZ1J0Ip2oYpqbO2wnzGpI51RDtRVZ/7NVRTzpnI4U8iYkKDNP4g6vaHxaFoRMzGiuVhHO/+OSqK3XOLAVJm9OKi2zwEulJpgD5BZUTbPMUf1WQBPy+urlZfN3tE0EJSFqIEpIEIyEZt+v+h0V4uW1a+Nh8aBNUUu+1Ek4Or5PNm2Zaa2h6X1Kw/veAZCoMm4tS5DzQVFWwhaQcLwaOOsxaaRVhamRBSFYkIReEZA6UTcpVi0Iyq5/bAElZnyZ4vu8nPR3mUgJyGpKwFCQfDoMU9LQhQlIk7wbDyhzgVE88B1ukIHm1u7xyMCnet2O1+G9rO4vfHK3+tBGSf7Rz6dm/c4A8dxXi5v0SkoOyXQMhV1Z7HnAwumniY70yUkpCkXCj584D3CgOjqbFXgcVFAFd6rzSi932YJc5OF7d7UZPEm4vSnFvGHhFBBbwHB32o9i5CJuHgp2yvQMVrb06JEOvTIRkUOShviqnitw+8L00hCRl69DOAYtzLJH8dY+/reNnQerBoNIj2FKdWs49rIdTHk3E/G3BQFtDc9sw3bZpCW3zELXqDQ9AXYwThaAn03BAmOHEtb7HSZSLe8pUP+o+vWda7isLQXwrBCs+mVOzYU+GLy0I2sKlbTnHr2zOGu2r7rW+5l7n6w4y39i1IYbruE3um1e9y+hlKmBq2BKU1qNkrpDvf5FQMSGfDRUb8Kc+ExuC1fnKT7vfVMoz13lP2x+6SH40B2kbYrY5z1Rx0VYhyTB/TEtMZ8amyerYWDswHVZMq++kVHas4o5V7bFiHG1ax1rZys7bTPWBNgnby3EdPo8445SQ3PDPL8POc/Eo4Rg8GEAHp4SQvF3WYF8BKw5EKFzUkMRIQgtJ1n/EthCjkU1IYk2/zQERPfwHAiSvcuv6BSud4p2r/eK/dJaePbT70o9sGZIIuQKQaPzXkBRzULp5OqhA8s6R98KOup3Z57Zx1fJqcdkaeiQ9IC9x27sCbm7PK7DvkyGYPT/ry0DylkEvensyFWQBSIpRM5XhVtVgqvtnRB0Hbj+VHngmghmPo3FsRsVjpMK25/OWWm7Oe46jWnVqUmvR5BbocS3arJx7XGqSvd6GnciQgmSTRqYOkab2KU5GCGeM9ky0DudSc/NpU/mYq9BMeZmlTcTYU8hFWcNEL+4WkikvsA2c2togCRgSktri7cazhBGS8DwJyGjmfcWwq4JPtsgo4RXm3nPb50JI6tfWsOP/+rWtF9rkqW8VkilAUrEo5V225TJb+zPD75hw5Eli7niNaRPrSSbmpy4KSZiGXQqUOUCmCn2SY8UaxphpSLJ1jDlJgNJCEp8PKl/RVw3YEZKI1t0ua3CYDCRVtz6PGfvKM56kFhlg2FVrZLdB8tydq8VbdqwVL+81CJtrSL6h2y8+tjYornSXV6/7vOEeeJIjL0yOkKuA0tmNDlIHMNOrOxLDDMlbnJt8AG0fg3FxWbdXnL+2Wpzr4Hi+80gv6HeLjzsAXubgdxXmebkd39fH2BK/bW7/pmEpMIDRWcdH1dYP3QtzV4BfylItIbqnkiXDVlZNyyCJnNxsGmWT7q1olI4jJFNVaDanwNg8rPS6msf/LDL8NlcQw+fZhnw79ikVTtIC0U+7hfrJTMO1L+qZVeBoZwx+cjQOY6iCIovxFHOSb7ZCUsu3VUN202ifUwsyw5L0xFIeJR7L+60RSrn7aYRdzr4+9/YNtyBr4+1fc9+Dtq8mjGHZVO4ywjK8LwIudZsO19qwcO4987W0V1sBd3itXFWuBa6+/YV48PF7TAhAVFp5Ep6mvm0rHmWqeCzVQ9nUZ8mCOFpKcq4JinasHEGne5ErcB6PW6NVet/tyLP4v2rHqq4hJSShYBRlJ0MUqpKnnbjXmm0Wj7oTQ0ThEJUDIDUkZcZsApJ2FB9rPuy6TUgyF6kheftwWhx2zwFnUG8DDl3QGxV/u7xe/OaZZzy3ECT/ttMTSF7hLglJKO6gVxKC5BAHOBhAeYPz4gDK452h2JHuQFpEIPNzjbt+aadbXOC2AUieh6GWDo6Xujd9uYPU1Zjn5bZ1vaM6AZmCJIpmjgXv7/lAEkDUwucpVR47SorzDwFHGOeZ0X23sxpzkLTz6MozzWkFkpzhlxp4m0uWVxRp3PMrBTHhB19Wr84qnqQdKmyVSqxHCUg+kWmo9q/rjTlHDUjJgzZAUmub5kxrqLZB8rMBfBqSuhAmFXZNAWArkETItMksFC00vwrPceph+XUVetVeJczmNrnfOSClIBlPHBQoU+9dAxKvRUsB8yu7Nn3YV1Xj6u3r17beaOr/rXryKYGGCjAbcrK475mG4p1nErJ4FpI5pZ5aREXl4tmXDNsqJK0GLEEISOp2qyYNWl0jwPVDrxs8ucbaFE+2FSA5bxVmIRkVe6YeyBqQcrlxVvHYrrMaISliBC8QkpStY6QwB8mPrHSKv+8Oi9/evgAk/3it85P/sXO5uHiyWVzmAHfpzh1Slepl6fzsLTReApAAJT1JERdwND40mkg/5DVuJy8adIoPd1eLD64vFx/srBQfctc/2nUeJXKTkKlzO3ilbLsvogUQmiWE8QbQ8Hk4fIBHB9UcIqCnRcx1aLUy3FgpOFjT1U/o3Xk4TOHACKxH5jO55MRuPQdRz1uTQcXDYfYgSU1k1xaH9qqDjzP6UpPtcy0SWlJOFESmddPhTXvA6//5+pwT6AcJzysT5O0BaAf86veHgyo1R9EvUG6B22yHZJsguA0nag8JYNGQsWFLGHODX3GfEYw5RNqX3ecH0/dbCH7NfX5fde8RlxqAuP5Ntx9t9g23PzTe5r3MaQWs+L/ipSJsG6D6Zfd5a6jiur4NYd1vbO4Sw3U+htuy74u32xyqvh+3f7XB+6Ux7wqz+5U7OWlrl4nW4n225WUZrs+ZlgasaOi6teUpt86kRnshvw9gwOwcSxuRoZar1naFATJaLq4iGTctWy1y4VarCJRKzTymTqKtaYUrDiWHPe0A9oyDHY3rFdcftn/gkpAEIOEUyAn15lnFaQdfAO0OxwE4QogYIlqI1jpAkjlJPwowDFII4VYW6thwazmoolrEw1oTqS0ZOUi67R9wj0EK8Sr3/X20Py1eu7RenL39Re2Q/MPllZ/91dJKcf5gKpC8ctUr4xCSmOZ848B7koQkDDJ1GMR883BcXO9eHHS+sL8ukPyQA+Q5DpSwD60tOy91xXmXK5KjvNx5qVLA4yCJ+DDnTBKSqHTFh0dI+sHHo9qkDxblUN5Ih1nFixyWRTmpDy8OFA0Tw09TVUZBEtepNKOFyE+P8vPo2hLe2pNrgmSbSPQLhWRutFFZwGO8wwZIVjVVw0lA8B5tBePnpH2hvZox1wzP7dh8mw0jctGuLcbhcRqQKUimvEN9P2EoAHuekCQocfktt4DA+HzrhVpIWiilQIXrABTgaHOg+n3pk4AKiM2JROVzUgDUpvfDQlLvU1OoOxYrNQGzJVzbltP8zEaz2UhF1NB1a8szYdB3qtc4Cqir0KqFpOT3N2YVOBKaKU1VQlJD1eYdbc/krwqSjAg9NZ4KKGG4rqtb8Z4pIiAqPm5/Puke8/jIp5kkNbOxq3hkc1Nyi1jD0TVgIclw6ymlUKYhyZzkA8NRNidp13ps//hwIoOXb0Ak0zHtCseWD6z2i9et9orfWNn+81ZI/l/bdvzi9c71/NDasLi0gzaQjgxLhqTc7mFPIHnA7dRNIeR6o7sNdtNgJIC8we3cbkdneJEf7a4IJMWbXF1yLu1S8bHlHcUFyzuLi1aXi0tXvfIO+yVRwIMdJ4ARtgUkeZaBS8oLlYLn/YraO4XG9agq3TPDJlT5oN2PF+oNJ9024Q2KxeqycUUxQp+5+dvUWJlRfoIFIajl1URGzZ1ZfXq2UXxmvilmZbpsBWct/GMKXCwQ2eRMy01JsAok2WkLBpI5+Mf3zrAM38s4qLKEiRrMW7XllHJ5JivrxkUx5gi5IIccH0KY2mqLudsfmoacDotWPDkDwjav8Fvussm+44D4bfc4mFx3CwgMoNTbzYVr7fvU+c2vN30O8XHT6AnzM0h5sPpzqj7Ob+8b8FQTpu9P7V+bJ5q7P3rLLZBty2laCLYJK0QPNeRg6XGK2Px0FH/3dnRXWQ1bDcXWWrlCqwjaMk65NdH2UbNVI7aBJSrOkwU4GUi2aSVrIBKQWMN4mz5ZZ7gVUH94BAekH9tbOKjhlPt+kMKCE4PxVoTknaKa4ycKEZJwXiwkdeEOTHuQHKVVGXARIo+obUHNDCZPoRgVYjaXOLa9Y6VXvGL7cnHeO998sBWSv/XiM3/5V8vrxTkr/eKSta5M6gDECElMcM5BEgaIQm7uPIRX13aKF/mR3lrxYec5nru+Gj3Iyxx8r3Qe5BUyhqsTIYnqWQtJfoCAJCtdSx1XtnZUIUkPk7McOf2D8xz5YaOcWEKsoS1DDwXWcNRnbh6U5eBTnB3lJljo4hgdy9eAtJBcVH9T9wnmAPm4+2xgbbJvjd6kgaR9rzVAzsv3HKHvPltAkuOlFi280DDM6p5KH+Qseo5s1v9aAgYWknGxTQDym5ulJ6ev5yD5rQA38QDd5/B193nE2wMAcwYwasN2vrNrV9weYWk9ytJb9QD6JkKp8BJn85jj5P/NNq2Z9Yb1e6+DtApJ7Af3JQfM3ElLCoQ5TzV6ppnCIluwlTNGNGhbVVj67OZMPM4SlFU5u61AUl+XyTstgISYCKvNAUgrLJDSnrWgbIMk1iisWTT9P2DJNcN6koAkjOsr+x7h9cGzu805YIfXlkWoJQdJr9ATtK7R/tEiJnDPaFgfcBHqUVDbcrg/FM7Ai7zSsQmpP1S2vqY3+vGd+3e/rxWS/7nb+/Frl1fF/bxgdV3KY9HjeLXb4DVS3ergOEIzJqR9yrDrQVx3Jqo6zjs8373xc1d2yuWFIiCwWly5vl5ct94r9nUHUtgDw45Clu46TIjuApJhW+4S8ncwFAMRkgi7UmCAl5CtkzFVBGSQlsP1CEkOV3YfEox9Nwyj0iN8ZDgSe9R5mDDmFOwoKVaosvVBh0grE9qR1xuP6rJbpiglN7G+Nnw3UcTyzKTe3BxB6d4/LAfHlEZlesK8h16uylYn9iuC49zHMKfxc26bUkQyreqZZqdj5AoxDCRtjqwWygSwnNFzo5cXF/ppabi9AiadIwyP+Zp7T3ysgNC95rd3bYjh+rdmU7Fvu+/6Hx1gad/dSNs/zr0BkP/owPhdB0gYrmt45sK03zLeJyHNfaTp96nva9qu9mZTeVN9e+5538rse9yved0ssHNetHjSLfCshWnnW7NswVYAuC6SgmfJ/lCmF6xHaeFoi310EZ6tSs2Jc1hIpmTpctbmQeoTethng30GoJyWYh94b9LWonKq3qsMHuHIR++wLmO04qHeanFwfUl0wI8vAMmcJ0lIEo56+MWdI6/fDY8VLYUQEkA3BdKHV/TXJC341vVB8bKl1WfPWOTvDX/0R0+9eudyhCQACVDCiyQk4UmmIHnAAQ35S0ASYITXeFHXkxq5R/RFXt8bFjcMxiJTd8PQu7yAJKaB7O/1IyThqYL4FpI4E6BUHS55nc3/tBQkJdQaNAAJyFPuizy9MfMVY6NxNA1HApL5BAvJRyf5oa9UiMlBMgdCa7lmaT4/pbsqxgKcTOHPopDkQWM9Rls1ayEZ31/wIBlmtYvWVgGpIQmzkOQiHRdrBchvqwWai7Fe/HVeUEPSQkY/loAkJL+zMRdA4lLguGtT7HubactBkqCk5WBDQOoQrX1PTaY91pRZ+FlLATL1vNT/sg+Z6t82OMbq4Iy3ma1a3tia5bbD16n0rM7KflH+/mPEhnKPC0BSw6+xh1H1LdteyKb+6q1AUnuRMA3Ip8dBwm/iT86h3fq4OwZgzLUyQodaDqS57g3CMLcMOwJKqLcd30K4VeckUbjDFg9CUgNSxGMGgHBHRh0Ckqh9ISQvcN7kG3asFq9c6/50IUhe9e53X/fftu8o3rvcdaDrSgUqZHuQZ7zObRhgQ1j1UG8oZudyXdv1OczL+94gGoDCHHiPN3Uc+FAF2x3KVA09GfoGuR4Aifym+7AASQiL47FeWGAgkAQUb5tiKPJIhjPjEsK1BCOHH98dIMlcJEdb0XuUQpy5L6Eu+xeDcn4MWQ7EnpiNgoWzpZgk91DVEmp6ZFIMk2Ykt5qAmINkymzhgFa0sQNpn1EN1LkG/XqxUEjeJ9Vz9IEVpipwniMFx0NOR0/F0GfiX1zQKCf3RS1eLuHEaniQizA9sW+7ffvObB4hxNu5SFuw5PKLqfvxXAAQMAQUCcZFPEjtScr+OcP1723uEiMkrVeZg6QG1LcboNr2fPv+LPw0lPXzUrdx+xaS2utt+7ybPv9vztvDszocm7JUv2gKhnH7NnzPAq9wP3tGqSQUtWOVOIe0XARI5lq8cpXxtg4gpcuq/98qJAlHGqtYAcXPNEASJ+QSbXOA/KQ7YfzErnnx6OZMCh5hWHvvn3oVtNvQFTHquPV+LUIyV7iTagGB5whAEpLag6SMKac/HR10xDC1CmzZ5+7bPewWlzlAn+fsb1a6xR+8eMcvF4LkvXt2v++/btv+i/csdZwH2C+udFC6xu2AhuTB/jBCEoAUG3kFg+tEScd5n6NecfXY90KixePG4cRBbyKA1JBEJSssBUmoIlhIIsQq47McABaFJPtl8KFqSOJSPEq3j2VzP1XuGbYsIfnkfFyDpIRmR+ParDsLSmpTCjA26kOAczCMkFHPSVkTJLUXKTqVYd8sJDlPEHME8ZiqykgekjoHqcO4hKSuPtVTMbj4fD2ArslSwOR9EDC3uUQuwhGIAT42lGkX8dRCnPIwrQGS1nv83lm7IjzbIElAWkhy/7VHmYOkBhDymbQU9OxtqUKh3AlBCobMoWrToLT7kStMWhSUW4Wk7vNMme6nTZmuBv6qyvfGwihWG4fXo0fJsGs8+eTwZ3qKYTiBjsrok08BoBptl4OlhaQdi/VCIRlzkTOsN7ui6XCrheSnztoUSD6yUW2pAyRPSLqsJ4A80FuRgRnHG1pAtMC5FFwGFR3Rbe0PkpDUIxIJSUysOuQ+k+vdNgDJS7srxbnO3ijh1vXFwq34O2v5Rc+9wYHhXLRjrHTE4O2h8RJh1z1jX+F6aDgWkMHjQ1UqkqH7RGYO+cWul5kDIEUcYFixCNdgACZMxnD1h9EsJKUdpI8ZkP5DvTWMtRJ5OUAyGCEZhyAHlRy450j26gneMnw0FOdEIXGlPGHVJ7SVShW+/wdN95/Fj2cjVGHO07ME6Q0xp8bRTTQ7pcIOAbbeJ6vOagOLlQwcIS7bm4dxUe45nxtN5MdO+6xJysO4vVRxkodkXTSa+4bX0bkdXVjDAhMWghBy33QHGHrzIOn2ZXeQafvSvNqiIOHC+SwCqhbidLBibpC30evj876J7aDf0RmuS15x09/P/CIer8Om3gOci33fXYd9z13/XrgNRgh+30Hi+7t2xedb016o9kTj/WF733HvVW+Xt31/o9m+595X6v9/cu/xB7s80Gka+Nr4/vXjuN/YDixu3y2OYpvlZyX7G96XLVTS792+Lgzfi8778vvid4V2FN2qwt5OWEUOMFGApIuQ4u2Jdh9c8vfH36Lo8rr3if3gvuAS2/jKZBz7azkrFHl5X/UawBSa9XXlKEwfd2i7YBoj14olqZ9RWYCIYkRpVVPtayI6MC+b+p8au5PksTuJn2xUWsOe0ePHTJ+yTsvo4x3bgUUFsJCaenI2kl5SnCg8NXDv2zlLj013yQAMOEtIv8GBQkHm7d2eQBLh1gdnMxnYLN5nkPp8cFQqneExMMiHikDARlfsXgdBv+ZPxTCT+Bb33IPjnmiMA5JHQifGvtFUBHPOcV7kq/ujYnLGAkIC/Pu1tTN/8br15eIjDooHV70BehA6Z27yRoHbSKCGKlRCEoIAIgqgAHnjoGzroBGK1jQgmyB5PBgGI98eRqxYSEK5AR/YfQ4ChCTnN1pIsmrVzlHLKd7whxqnayBfB/UJA0nkJlLNzxqSYi2QrLVBGI+TB5WtptVTPng2ayEJ04B8PpC0OU9CEq/zhdl8y5Bk83qTFioXPvFMEpDUkLH5QQul7zgo67wi/+eiTUjGbSpILQLJCAt6lg2wrIRpM1CuhmrnrZAkDGGEmQalDRFbYKfyq/pEQ28T9t3NWYSkfv/la2xWrPJdJGBJAKUg+U3Vy0ko6t8H4GYh2WYpacGtQBLbwG+a/aRsScGa8IzK8fNY0u0UOrzJ/kRC1RbKMTfZBElGzx6ZeuUvAPKTAuMqJDUoc7UTjBDVHu+2AYuiIwGST0yHAslnILrgIPmkA5OG5N5Ov9jvAAVIQhebOcnnA8nb5p3iHsenewYjAeQ9g4nMJD7ink9IItx6OBaZjorL1jrFB5Y7xWvcvv3Wzp2Le5K/1tn57KuWthUfxPiqtW5x42qn2Lu+LkLnrHK9Uby/oTT8H+j6/kZtAONWIGk9yGhhJBd7JTUkvRfpp4PkIEkZOX64FpKUdbKjqaz6fepM7vEYch0GSTYPSakAU5DEGWQdktOKnFZqjNMXFukZpPakghoOMp0jfEqFgWF87hen87g/n1UVa8w3fEZtT3unPFhTkNS5SBELUL1lBGS1T2+a7ssLHgGhGBelsOjYx8ObopdlzYczZzW4aID949m7BIwWWhqSuLRw0pAkILXxNVNwIzStd6ZhycfBC/UFPuXr/ZP7n/Z8IKlvT4E393mmzEKS27YnCdq+q/LDtfBzApoCa1UcRc//G3MVgdisCjBQCSlV7KOfswgsU2ILKUh+a3Neq85lbpNFaEx18DjlcWZzgExz2DykHoCOdSqO2goC6RaSBOWpaTmI4AlZJ3BSvVE5fjUcJWoViu5SEayobzvbFIsRNkJyhp7RodgTzmEBnE+7x2FgBJwr1LCgaBMiMSfcmn63zJmcVSDJ99IEyVunXbEUJA+PEL3sFjePelLdeghOXacnsqmXrK4V73V8e4Xj3K5t236xMCQxdPIv15aKDzkgHlzvFfuX1wSS9CQRbrWQhBdZAWXwJGltkEwCMgFJavwBkN6LXAySVGTgfMcUJHX/kYVk9NAykPTi3j50IrH7jXKYr506r0vQedC8UEjaZt9SiNhDUk9v53O/NCtL43WeQYPSQrLuoTZDUivhbAWSXJgISZy9w6LSiwmTLbKQpwDHBTx6kGpB1oCM4dbMNp4PJHX4MQVIncvMQfIH7nYYw5050+CiAY7/7E4MfvTSs2T7/3TWWZXX4YkHzIZNLewJXw1JWAqS1ffvIVm/PW0akjpEHnPRuzYrALTA/PeCpA3TWyGKKGqwsSnGmoVn3HX0TWuJN22pWoBPGSEATuHRkCRcpLcwFL1I/cV4FEfaEZJPTuexuM8W3AGQhGQqgsU15ZnphlgsOAoSfICkF1cYyroELxaQRE87IIkaFhh63mXdDpCEbjYG1S8KyeOTjtjdjlmAJAAJO4YCULQtDjoCSlS3ApL717vFbufFApLvc4B8+Wrnpx9705tuXhiSg21nPPfanntyb90Rd1DsW+06SHakjxHFO/smXjhA2j7CNBALSeQwEaKF4XpbTrISYnXbRmgVyVyahiTGqkBQQM+Z1JDUVa1o/yAgOeBYAMkRM3FYsIdkLcwatVVLQV9R0DEC3vyxMnSCH454iISDCrtoRRBWbLYKOLc0N9uchp2ywSKiVPiTZ7gCbFNMZIULaiIEqkBIV/CymjWlhCP6oVxETN9eW9grLjymeGMRQFY8GHO7Du8JJNVztZfKsCqhyOv/hJCjs++7z6tiGa8O4UjYP7qFJGd8DMKWgBA9te+6zxuX2jv8gdvnJsO+YP/0bf/sfhM/dFD5l7PPKn7kIE3DbbhPPzZ1O65zG7ydnwNfq3zfGxWznngOotHMyQNPZngCY3tbdXERRRhSxt9TViZQPa6SxzQtRxaS9vlRFjEUCGFINo61WAHPXunMkGhb0GOLdLieUVaThYlaWQyG6zLvlmvf3E/v+RTColMPNIghQHbvM2rcmRbJr4gwhOOcJ+kxgqXG7MG8FN9cXu+ku8S6DecIdS4wFF7e3fcFOSfDkAnYw9orHpfTmtitcE+oRzk+6YpBzPzuvru9PxMDJI86Nhzqd4rD6JN0r3W467jW9SOyLnLO3zvc9d/v9358xlb+XtpfevZV68vFu9aWBZL71/u+0d+Baq87G9GQpGdISELuR3KTaPvodBaGpA63EpI0DUkA8lb3weBDpmlI2tYPQpLVUgAkIek9yCokreYqIakV7wWUUlFaglI/j5AUJZhdvjounnkaZZCyWvOFQVKHWsVCtSorbXnG99n4mnlI6unxVuGnCZK659NC0lazxoXKNL3bs35diJGD5LeSLRXz5CJMT8mC0ob1ckAtw5sblZAnwaEh8U/zWaWgpeLZ7ZpHSH7HLSC8pFlQ5sKZhCSB1WSAWQp0vB2mYQkDQP/1pWeLaZjax6fA+oMNXcxTPbnIfT/ZCuBEvlZ7+hqSuqI2Vi3/H4Bk5fccROUxLQUGSHJEF/uJ7dxLDUkW+HDd0SIDGpJstSAkCUgpaAn2YNCoxrrnx2xNIyQ5vDwFydSUFs785Ml5GWmaVGbSSn/51PejA2zIQSIKyRGJJ6SNYxxlQzUkY/tIBpIiWj7tCSTvcqy5q+cY0JuKIdwKUCIXCSMkb3SPQ2vjhWtrxdscKF965pm/3BIkX/Onf/zEn67tKN6ytrPY6+CFwcmAJFo0IF4Oo8KOzJaEIPnIG5TVLSQRbl0EkgLKAZKrgwokWbBzbDCswFEAOfRWtn5URczvU3nIh92PIQ40VUOCfWXqLHqQEv9XyXJ4jlZxwo+HKYV/Sw/Ue3CQqPKjmma1A0qKCcLIIT1tfhEZrRwkKRNFoNX6MkNOoTbbj+FW06DP/xl2SYkOaJMQzWRaO/Pk9qnBGds02AoQdE0r6jUbPmymw2Uajt/QmqehbcJ6Ktbo9ZXhyc3q/WqB1l6Nfq7OAf5gw9s/bwIQZxU/dPf/s3sczXpsGpq5AhoCUBs9MQtg7cHJ9Y1m+9ezzor2L+79/8i9Bxr+/1f3nf/YvZ+fuPdC+19nnV389OyXFv/7pb8ml/gfhvv+zb1vbf9y1kbxIwf+H7rf+z+7376Gs9731Pfyvfk8+51FUycs9mTo29Op/I50i4zuh/12ooXFmpUJTLWkiNJSIj0gEMxAMrasMKwbWkk4VkyLDnBsl4Yni2PiZRipp3OSMFbnn5p5s5C8x8GRdi/0qjEWcOZzfw9My7AoAClTTzZKvdpKqkgVLeH6F93jvzAd1cRIovweVco2/NCI+9z+IP94c3elONDtiGN1YOxTYw+MAhhnZV+lODLzmYKkF4PRkIRzdNsMoBw4QDrrToq7+g6Sg5lUt8KOT5yTNeoWx3rrxS0dP6jjcseND6+vFX+9tlL8er+7NU/y3Pe/bf9/Xd9ZvHV9SSB57WpHvEhAcp8DDwzqOjBCEm/04GQsl3jjhCS8yEUKd0Sn1UASbnK04EXSc7SQpCRdCpJo+wAgmyBJdQsNSa21moMklfFLyFYh+aUNc8bJsnS3MGlQtkGSUNNT5bWhohaQtFqpEZZKM9VCEgdATieVHmUbJCWkGwqVKuGZcIBxLFKsYDWaploOTsJkzjthfonaqex//JZqHfjuxqaYXlw1zGjfRV5NCkw2K6CkWU8mVmViUZ7NKs8TS0BSg9KGJBnu1LlAglKbbtGwkLTen/bg2iApIFSgpP347LOLf3vpSwV0BKMFpTXepyH5r2dvVkFpIFl6lpu1E5RGOAbLhWdjOFy8Td//qiGJy28l1IAYio19naYlJaUotCgkv7lRlwCM3mjotdSemEwhiVNxfCQn9jCHlgwLSa43rJ1oguS9AY53O08KpiHJubmLQFJAaSAJQH7evUYUSwiQpBhLVC6be48Q+3Gsg4LQncUNDlCEpFS0jmcekO79AainAyAf25i3QvL2+ShC8kRnXJzoTQSSt7l9FnMQPTbu1SD5wdWV4nVLO37++j995ektQfL973nrjS/vrfzs7xzt9043iz0BkjeKnM/QTwLp+cZ/AWJo+4AHyTYQwNEr6fQXq251z5EBywGOcJFhAKMv1OlHk1zkwEsYcURWVHwnJMM0aumNDHJ0os8a1HXY18imXiaaERoQwQDKuY29oj8T7VokQP8oyr5K/3j80OhJMmT49U2lNcliADXItpKrVFWwqVxAzZNUfU0AIyAJE71UlYO0yiIsiGkrGIrjqkIIl83DuJTPYzapTPbg/rOx207LoKg3Fz3mlipn4xtl/yL/lwrTXeUCSfBV8nMJTy0HoxSUZFva+3H7FeHk9pkemIbij5z9C+4L13/oPiux8PgmT1PDNOl9udfHc1LbigB0+wz7sXvf1v4NxTnuveH+n5y9S0zf979e6mDoXvOn7nP92dlnRfvfDsLa9H32fmwHZl87B+cfOdji5AInGTjZiCcRIZdZ+zxMVa4OX/v7wslQIt/8fYHgPGn8raXy2N8J/bf8bWpL9W1qK0P3XgiCniXhyhqF8virjvTiyWZsv4D4BwQ+NueV0XVln3YQDoATgNFSDoQPjLxGNbSqT/Q7YncOemIQ++Z0jHtFX3UQR3pRcMQDe1YNtYa1if2fNIZpMTZMZmyGKSgyLswB8mEHMORH7x77IRU3ra8WN3fWxCG61W0f6bCHh+OYEmNBJUXSH0IudTJUhUi+YwFrPNb6W8d9sRO9UbS7+l6VDXb71IsXHOl1isOdvuPatDjHAfL9Dp4v2/nirYVa+fdfh2s/eXNvtTh/21JxwLnB+zpdASUAicHLhCShKAICCpSl3NzikJSJH/1+1YsMLR8pSMKD5LBlfOky+WPgrQmSZYhV6SMGfdY4ezFol+rCFwtJ3J6C5NNhdA4hycq4ytxBzuYLU99zw2YXDbvGfZuXoPx08BA5JUODMr7WgpCMeUpWs83K4iAP5zJvoQXMCUl4hTCewXPxoEfAghkuWrp68etu27xOUQANSe895iFp84FN1Z8akhpU0XsL4UlaDFkCVgkj2DQgBXImV5jKIVZePzzPeqyLQFJg5d4XLglJAg3XAUkAUoOwCY6px+jtaljWPqdwnYAkJHOep85t2rxsxdMOkYFU5e33Mn2YFpKpvLatcNaQtGC0kGQ/qIUk+ydFZGAWzBTCaEiKWAhPyKOaVuiXVBqvj4faCoDyYbeeaajQk8QaqUHJaUmnHGAw0AHroKRPNuYRkpW1IwPJOHsz5DKZ9sG+ItR6ysEIkLxrBG8OFabrxWEHrKMO6Le57WKNboKkfT+SlwyA1JAEGLVRkQ2APIbq1gDJ691ndoF77b/d/qLiD1+8BREB/fc728547k2jbnHhWkdCrtetrUtektM7Doqs3FAmO2OSx3WdMDSZBTyD0g4Mh+0tIKHVg9WshCMSrTBWs/5/xL0H3KVVdfaNIjDt6c9z2nPq06YyAwxNxN5b1KjJa2IS3y/54hvf90vip0lMFAWsdAULFopIkyKKVAHpoFSHoQ0DDFVQUOp0cL/rWntf+173PveZGSxkfr/rd+pz2pyz//dae61rxarWkaE4S1KV/McjmsSHiHQDhyOrGXmA5OnJoFHAzcIxAiBJg1Cp9ymN0AlJuyepUaN8WX5aq3Q7fnCKQMFA2aL0a695eLb5lxNCzi3n205yjxnSJZTvmezdggLQ5voy0VhcyiBJZyG7B3lxNSu/Z1qLKTEuXkxj9irIuEweH7K9ijGlKq8Xuq5WL4w+iioxe8lGMbkIz8DILvQ3p5LPh0L68WYFVz0qRpjj+WiUj5del8LwBhOtWuGxf9FE6nN8i7pZ3ssKAeFKgRt0C8Aml3GKy7fK49wmr4Pi5dvlse9otfQ0lb1/+riEJOGdHjTY98g9UwJUI235DlnZYqEikFrgQmlKtytKTGCZpupzLkGmwtkaHFho9oJkZqJQjzNDLzep2LQQiPt8zMoQmvxNczsl1kuM+97sOAM2RJiMLlnQQwtObEEdrX2Jg+4oAQYDD66TABEgC7s8PO7Z4cAba54t+EvXqnPqst40sp5o2w+K7Bys6Y6rIJiRtXxwnjtSIIk1HNtkx8KjdaSkghECWlkIyThyq+LFYfeMkI+B3WgYmQj59g8fRX591EMSOmK4XyEKz+8v9A2rL/kH+wbdO+T63SUg/L0guedI38o/G5gTIYkWEE7p0EkdCST37+9zBw4OeLed0TwgtxWStuUjGgfIBwlxD5KQ5IdCSNqjIs6R1KMN/ueH/iDNcZvm3GyCRd7rNPqZViqFoLQpV6gXJLkn+dOgrtl8nCLQYxo7ewu3Bkk7dYNRpNrBVSo52MbqWtOgr6DUnsluf1Q7acM2E8dRXaEHk5BMRwhZL9XLzV5R7P9jS4CpXrSOK7ZHkdFm3B+U1wtdP97YpurOLalX6rNof++GAD4LSbuPp8JeH/b8AiwJtBsSFUVa9nLcUzRQvMk8P54DzwU4EVBWFpS9IAlZ4BVBkioCZArJW5L0KyFZ9P75/rAviv1RHjAQlDxIKGpTySuLTCG793lN0mJiTRyodE87rbSNPaMFjkApJC+v56uk1ZJQ3ts18rmlnsFpFXfc6+NQZ0IntIyoD3Qlq5cgJBH56d5lsmeJ9e6U4JmKKIyQVEAaSHL4/HESbWLIMyJSPNaPwhaOhaSd20oBkCkkdc1AL2gwOgckvzEy4L421KeA/Ka8nmMq2BeteUCO+l7PUwLcCUnutW4JkuQAIfmtkbJC8itjyEoOa7r1MIEz0ryfmzvoPlEqu/8xe557m1zX2e73jCTbEkm+cc7L3L9IBHkA9iLDniQ8W9WIPEDyAIHkp4cHIiQZSRKO2wrJrmrWkSGd+AGpqXks1Bnu0jfCUE3m2DXPXsoMcQlJLdSpVvJ+rLFJvmzGQuUhqYA0aUfbJsFoMoPkiG6A/7g2Jl8ogU8dR4kSRdaruVRiOvqHe5SpT2kOZDjKDDofVWVGtnRci2+Mww3SuWy9iNW1jVoelFtJ82pxQcXvOZxdyUrEIaRkiiJVFtzkKg5ZeMH9xNq4Km3dSI/0bWWjFsqIbqw1VDfXWwWLZrF6gtFEjEUwtHCygCQUY9rRRGeQRlUhitOILkmDxkirOR6FIpj09vg38lgEnn2eLe0lQtxztNfhMnVHM6/b5blwemer4Va1myqct7dTuHyrvG6IkEyhzdesUW84eLCf6y0CScAe1xWlq9P/l/T/9YZ6M8ofNPmoEt+ta031cy8zB71PtXeVLQu/0sIufi+5PVDUSkSjhpxZQ2L9R8Dy4JmRJX9P6u+MAsJwgEpXHjUiCFkeVqOfXTHzX8tVtaIDdABJZNeODg43qtBrfnSo58BWFe6DyFN7KIPXK54DBiPnjucHC8SWFkAS0WTNV7tCOOg+X97vua2OO03eL55f90WH+nUrDIWUMHQ5tSSvbxS2ehU/prDkU8a6vxqG3bMgSVOuWNtHPdQ1W6jm5kMqjsz6ZpghiWIdVLUiijxUAr0vCac+OzjmPirP+z7h1yuG+1b829//3QG/FyQndtpuzdsH5+gkkP0GBhWMAKSFJARIYi4XAFmUbv19IKmFOwGOnBfZC5LxCIJwlA8VQqnxtkAya+MYy82EjGbg46HxtwCSNu3KUmdAEu4SZ1dHIyQvEWBc2sgG81pHjvRIssjQOwez8UohKO1YLkIynWKwJUhubd6epnzCpjwgeQ72TYLOq9diWrcXJFP7segYE9JjafVi6r9qPUBR9HFjq+1uGm8qIH/RaG8hwqh3peqKIFkULd4YIrVe8hGcb5O4vd1SQBEONrICIIoirBwIBYxWvB/vG09DVGifY+VW9gsJSYKyCJYAIIHI87x8V6elsqBMIblSvk+ApH1NFpTxvHxmlIVlGnlTjKzT/5eufs5GS5VCkqBMPXXTg7EtQTI1QSiy2OPBb69+27Q/Nz0IjEVqSWEfC/poDxeNxhNIWtu4s81UD0LypOC+g+zat0ZHYleA9piH2Y4sevQ+1yM6xxGR3WljZYWuH5NVjb7THpTBHCFA8pyqr3YFJHX7JkASFap4/m8KKyBUpsJ2Dr7ZgCQAiVNk+YogeVKtHKNJQJJbaDSK+XZ5WMXpIIDkV0c9IKFDB+a6r8rjfkUe83NDJff3s+cqJHefu9Oq7X7ffx//4HsOe+vgbPfh2TtJJFlSE9qDhku+onVgyH1xYChCcv/RrLo1taXb1j3JDJJDGh4TkPofWC7FkScpIL8Zokieflsg9R0JrTGORY+cuCcpHyw+9F6QTG2ZYlN82I+jLVNR0/05oTqWkPyBPNePKiMKr580KhpFEpLRtspMZM9Vu/IIMsCRtlfRni0BJZU1Jfv9DEaS2sBfrfW02WKE2muOXgpJGBX/OIEkK+B0H5I9oaE8PpbbN4yF2Xi3ikwA7ILE1BnuC0je1GzrokhI9uoBtHt+RfuBvZSmM6MK2iMAyTs6bYUTIURYpZAkNIogCLEAxkqvZyQq/xeMTO3jpeDbEiTTYhxcToFIKKaXU0gysgQgb2vVVbe3G/FxbRTpX29oIzGg3BbZVDRbV2y1LL4D+C5ESNbqXiH92iuSpJjRSL+XRe1ERY/DKldGiKm5fbo3Sgcnm7plIZFWy4YeYbaMYOvk3GARB50dZjvSs5mDEQhTHV+lxiI+EgR8dG9SQHHMmDdcQXcAIcnWuqNDWwWca46RAOm7sqafNDKq6+UPxrxpwNmlavd6WC+pdM1jQU/Z336OHMwiQME6rN6qIryOU+X2H4zJ6xuVIGMMpuu1WFSJCl1VgCT2NAFKFvCcEAY4s7Xv2Kq83sqQO6bkizax9QZIHiGAhA4f6VdjAVioHjBYch8Wnr1T+LXzvDm3/d6QPPoz//6R1856ifvIvDnqlo6RJl8aGnNfDL53XxB9Cd57Y169vFtfCCR9Zas3oUUkuS2QZJqV+5EoMQYojwmVUKiospBErr0IknHWonHA0FQrPQuTLwX3CCwk1XqpByRtutX2UREm6WgewvESWXygaPTdA5SZ7Vwo125kM/TokZqOAEKFHavrtgZJbTNButVAMrpyIJqUz1V7IYOvZS9IckFKF6M0fdVrkcF9NdUaogZEk7pAhkWzFySvS4pm7GILpX+T2+8LqUC9nPQHEpZ3TnRykCSICEkLtVuaPUAYzmtLRruZv09I294kn6lNuRJCtxjZNGqR8NoQ+VJ4nYAfQLh6oh1lAcnLuF8aRUKEY6aWbw2pjyevt5mDZArLInjenBQ22X3buKdpIBkBWcv6WNnfem0P2e+k3dvM9cY2Gj0dg2COD8UCtKRa1sLVfr+jJ22AJCfQ0Ewj66v0KU4WxMQ5jkEstGNESYgSknC70b1JAMXYudk6D6yz35I1SXsPhwRmA4PuuKFB9z2B5amyhp8xMqYm5T8c9SO/rKcrIYl1KVbuV3wdAzxdsc+IdRg9m9j/xOsgJM8YqSggzyiP6+vcEiSZcuVkEO/vWnXH1UY8KAMkUcRpIQnzAmQo4fLzmf5R9xGJXF+7w06r/3rvPb//e0Py3/7qg59/9ay57gOz57lPSgSJ/cgvImIc63efHe1znxkecJ+RJ/zsYFmiykoXBLuhOJTTQfLhHxzaPrRHEqW5IgUkQmUBHBSPcgIYbWEOree+U/JHRTpT0oDzmFC4Q69CVE4BlFlFq2/f+GHYDI9RpFaJFnsXxr23kKZkVKZm4PBPDf2JSIngSwtIXS4/0svD9HkeRV6qLSHyGI2Su6hZlqPGujH9NsNca5lLB38wiNjSPUT2XfWakmFLz9mfdYFJ117QqKoAYv83YYxVeL7sx1fJFTNdUG2oool5PbOduyK812sq1ViI8TP5Wy3IkOe6vom2DbRcVAqccPJ9cCz3x/2vb8mC2ZbFstNQ4XxXNWdBCwT3/nTPTxZyiOlN3o/giUCp17sqPyktYAnRmK361AIXgQSiS0KIac20mCamT1u1qBXNqlFN9Qt53zfL58RIMt2XvEX+3yCmPQEtPQ1FOHxtdwqgVknkC+E8dId8P+8W+N0jYL5XQAjhvArnje42192tkSUgiefJ61b5rL3qPeU/x5Yq3ctM9zPtQYGNquNnmCsSqqqhAWTbTrRyNqbbMxACova7Zm3+iuz7bHsO+juvkd+VLRLC/iX3MLdkcGErcK+pel0rYId+FnSN/Lagq+Vg8MqqrBEVOfAVoFwo0RzEsXr4/bES9lyT5WH1vfV8PSm0UaDwBVGdmoLLY31LwPHtUS/O4T1OgAjFObyhjU6HQMhncCZs8lAsJMHAmXVf06GDDeRgBTpL3gPSvWxDQQBzvHyPT5TvKa5HdAoRhqfWKh6KAZJ+DKFxFwrP+/3xqr9fKOxBDQqEVDEKecABuOwcVJFgrjzgPjcwyx0y5otO9x+quPfPGXD7DA7fvN0f8u97XzrkL5Zvt92af5QP73PjrS5IakUrbOrkCb80WN0qJA+RSLNIMBDw/ZGDWaqV+5Dy5nF0w5w506sWkpQ3FijlCnjUB7CSzVY7OTTb/j6Q7Cp9Ds4ThKTOYMSRG9oigtMNvrzYU7is3oiQ5JGkn4HnIQldqmDpFvcStxWS0d0nMQrv2usI+5ExKt0KJIvmWGrFm/yAL6w1c5CER+XljWwPEkfpaVl/ESTzC0d+lBPPXyd/AyhaAZpdVZ3NvFj8Qkj22gMkeGKPYKO3LCRt9SchmQJy5RYqT38hi4xVCkmC0qZcc1WrBo5WrETl6yIgrQBKwrEIkvdKFAmlwLxHo0wU9TTksb1uRyo2p+Jq2OwzbKuK9nKLgNmzereZL3aC8w+U9rRm+9KNpBo232e7Jf9b2zZkIZmrpk0AuVXbxK1A8hqJkgHKy2UtvlQuXyzAhLg3iN9eDpS6JlWykVzBHJ0Wduw3pJ8rAElIfmes6mfwlrwLjmqspDpR1uKTwn6hbl2FXk0A8oxxv2XlD6B9oQ+iWESRx42NREgeh77JHpCkUkjy9DQtJqoqTAnIk0MNSgpJFO0AkF8s9btDyxKUCVsOHBx0nx4ouQ8Oldzy2XPv2O4P/feK2bPv+EdZAP9lTr8W63xBwJhBElWvGJgpgByqbSGCpIYUiodKWA8dHnRYAKVNs3I/kulWnyvPnHW+aTaZo5BHHyvlKlyLIHlqpZwMLi1pH08RJM8xTb1pM20KydgXFPoHAUkc5SFVCchdHizUmFa8Ugt3kFb1YhSZQjIOJzatIkU9lQRkl0E4DZw5ay8MM46FO4l6QZKl3bZo6QJ9PXUVS8Px93ieK3Qv0aey9Gg9cZwBJCFCkvtIOZDahvnQQsD9uy1FGYWLaUHBjIVouih3RYjyHlRpr2C4353tdq5VgiIg06KZW8x+XQpJwvGW1rhqZbu7daPovd9S0PxPQLFC9e52K6d7Wl73TXaiLCRxfk2AZApKe90qpGIRWbabEZhQdl2rZ7+l/Ry3JPs52qKjWxJI2v/bXp61sQ81grK3Ify2mD30gt+22PDl/IFrVAbKawWeP5PfB3QVIspaI2aeeODMbRi2iWURZeaUBaceHdAs1zNteSy2piTAiBEkACmRKgCpcx2RJi1732v1v0YRpKy3aBNRiIXxgqfXxnTAcpw+FIYtoOgHGTy1xguWeMfL2nlyzRcUwdYTipFkMEOwkKSbkBq2hJm/uN/JCmwvTjuhycDXlSND7qCSQFJ4BUh+cWhAoFl1nxBIvnfeoFu2/Y6r/2BI7rPTrFV/1T/s/n1ozE8BGR5QQB44Mi8HyYOHx7cJkppeBRjlgz5CREgykoTYF8kWEFuibCPJFJLR4HwrkSQ+XDu8lE71bPmIDjssSgmi16KFJMTIzZZoa/WZPNc5JZ+mxZf4ct1ba+RKwC/ViA5pW8xGrKqYZiWkaAzeq58yFuekUzKSeXm9qmgZSW4NkvSIxV4spfsksb+yNySRzupanLYRkrHZPO4TZlDbGhhzSpxm0sU0hSRhYyGJtKRNqdqIsRckixb32xLgKehC5MiUK8B4a6ehum1CIIHCoA7MxlsqW0XKVpMVyb6jjYS5t3hPpx1170THrel43T814R6YnlThvILRRpcBhncraPMRJnSXyIKSwnW4Lf1cthWSdu/UtrLYoqMV47WexU/cc073rHtBspdH7tb6a3uZtG+LkXsOqnFvtJEDJSNNANJCkiO4Lmp4UG4Nkoj6AEkWwaB3Eesk4EhAEpIKyjB1w0ISAiRP0upXv4V1anlYgDjkzpTrYOXJCPHUkTG5b1awYyGJYh4OkmBEGKta+bgJJDmtCbfh+U8seRGSjCTBCgvJgyW4+/xAnztEPsuPzRly79xxjls+Z95tf3gkOdC34r19A+7j8kb2HxjSocsHDM9VfWZYoklUtA6X3cEj1a0W5nAPkgbmNpK06dbYGynXQRGSZj/SQpK2RBi1AhWZCbASyjvulPPzIoOJwAuBZFF688Jxn/rQaLIE79QRbZc4t1zSgpbL6t6AmQ3F9HskJNPHi5vf3GesF7eHUOnEDE7UoImzHf1jC4VidetWIGkLeNgsDDhic15TP+Z1X1bLXEx+pgtSo7vgoplFkxD74qKzTLWmkylWyJcaWim3QdzPipFdUFczfIHv6K1p9FYQgUaQMR0YHh+AhOI+XgEQU4DyOjxOUWVpvlexFlOmPm2aAYJ7m4VqdVSsuLWvX19LKKyJYAyR4f1y/gGB5INy+SG5/ODkhHtoatI9PD2lwuX7w/0ZUeIUe5cqXGch2WnG1KsV4WzbSrRCNnyeFNOzdl8Tl21Eavc6eRuuWynfORtNFxdI5VtOilx/0mxH2pe5JTOKbZ1m0ivSzNyeQvFQKDzq1cJC5x4WAHJwtNYdlLMK0/PLmb2dn0tZVi9VOtl8V1vlRuKIQexDItWK6PKYYOnph9X7NZRDnRnpAVQqAeD3ZS0/TR5DBz6MlVUnY7jEmAcXHdBOGK9EUxdC0hsHeDMBDWZQ/ZqIla84rwOmx/xjIwXsrepGopcrtt+QiTysNOgOGe13h5aGdTzW/nL7P8ya697eN+gWvXSHe/5gSC596UvWvHvOPPeReX3uM/2Dbv/Bfrf/0BzVp4fmRUgeNFzZJkhChxpQMtUKYS+SBTvaG5kMVaajTqxi7QFJe7seVYSemsxxpxI8VsthkGmlJyTPNd6o6fzFtErUVp+h6ktNfuV1nCPPe6H8p15mfByvCn1Vl5p0a4wEQx8jZfcQe0ES16ejpTjxAIC8ShaHOICWI3vSvsytQBJ7jUWQBCAvkSNb+/pTSOLHnnqeEpI4hW4y/qeAJEc33SKAXVlvdhV8WHBBW4NkbIXYSgQaWzi2AEndx2u3c9FjWrgD8XZcl1a9pv2MLLrJ1N3LWOil2myr0IYC2T1SPD8rUxE1auQo5yEAEgIgH57sREj+cmZ6q5C0e5VMvWZQbCYqhqQtGlKF/cxekExv5204BTSLCn+KIElQ3rAF959C9Ui98rptTav2KuTJIthQkcvMSoBm2sKSTiuJLSNJgR6yXr0geWLJA/K4seFsYP3wqDrWADbHhjm8OtvRQPLkJCXaC5KnCXAJyWODj7Zm9upVheSppfI2Q5KAJCQBSESohCQdeIogeejYgPvC4Dx3uLyPTw8Pu/9nx9nuTQLKme1euuYPhuQCgeTrt3+Z+9dy1f3X4LD79OCAgHKe6oChPnegQhIDmMs94ZgamBOKNpqE2PKBYh1VKE32JuZj3WlWnUCdiZDk7fiwjjG2dBDNBDhcWTedxzO3nfwMxjwkad5NFxsb6eGI7afjTRVgojZxofEe7RL4omIv8HIzvicaHo/7KtcUjr1gafsobS9lbjaebd43fqlXB/9UwjLn9LMVSMJVA++N6ZwLqz41fFkN8G3mbLl4tEvjamsMHlNeobACgLyh1e1bilPfYpHZo1lo3SmPS61qdEeWaYTZ5U2aOM6k6ckUwquCVguI7m533F0iWyFqF3x7Xc+ilYL9tpxC5Gxl34NGX3yP8jkTlrZAZ3Vnwt2NfcYJnz59oA01VQ+26+7hiab75WTLa2pKRUACoPdJpAoRllaELdOyq9vjqrsTgDI9e5d8ttDqVrNQTM/aiJIgtPuc3YVB4f6hmpcHGUWRJR1/bi7y3i3QTeb7WNR2kvOhlc/8umaza1ZpryHd6ei1Isen68fz1bX5IdZhek0jDPDmbM1glcf1BcD0VeyVaDyOOoxTKgI2ia6+Nzake4x0rqHNG9xs4GoTWy3QIaDKUpyIRNO0KOdbYq0F7Fjww0ETsMeDsQAhyWCFkAT8IAtIuPD0giRfF57j+NHMSADMQG0LuHLYyKCO5TpInuO/hBF/3dfn9tlx1qr9/uffH/AHQ3K/v3jfIW/acSf3j30D7pNDIwpJwJF6IZC0UWOcGRn2JuEEDxNztZ8zkISnIKd9pKOwCEc/iXooN3RZW0PCkdBxxu+vFySjkUA5s6F7oZC8tN5SASa439nBwg1HcQAKIUmTY5oJeEBWC0Foo7OtQdKmVxE5XhNEKBOSnNT+QiF5cdNbUNm0M+4DQF4li7M1SmAPmC+vD9PrDSR1VFKAJAB5Y7vbsxTyPXUBCkxhBjhYSEJp+i5L43mlrRypNVtaqJMCD4C8S057QTIFJlUEaD6/3XfrcsoJr5eAtBW19vURkrc2WireB8+N17gtkHxkqu0emZ5WSCKaBBQtIAFNC0Vb5GMheXenrmBcg+tRAGRAaYGYFg9B3NO0IMwX/jRywLSA1LRrqOYFIBGV23R6rtipAJJpj6ZNzUZziYL9zFzvZqfjbpDP14LSgrAXIHF/1TZCMh3rBkBe27RG6qHvEgfCNR9ZejvLrNoV0WQKScxxRMQIkCkwZW0nKL8bojW/HyngHB3WU4CSved2tqUWBxlIAl7Hh6j0RGTytIWj1gVJTeX2gCT6J9lDWQRJ7JfiuY4JARWYAZ6gtuXQ4QH3FXn8A4YG3cfm9bkP9ve7N/yh7R/89y/vfvcRr95pjvtwueb+Y3DU7TfQH+DY7z47MqBjs744WnaHjFZ6whHDlHWgMudFmqIdO1wZkGQ0yf7Iryf9j70iSUAS+XQ0wR5T9uJQzmNN46n/DxjNlRbTTi467LB6M+xFxiHFoUiGG+Wpsww30nEfXwXqdZ4Wu2TTQOy0cjtfzqZui/YneR2Lcpg2JezYjByt3MwsvZ+3Wl12WJmHbMVPKJEfKgZBs0CIe5t8TRc3x0NhQFkLfS4Ns/Ji1Z0cFEBXy33x48WPGnBEwcQKWUC4yKCHDdLyfNOOkdqM8XpbhOEBMp5rZqdsVLnKeJEyvXebvNfbYu+eF6MVRiK+ZSIsvOFv0whIK0LD/p4u7nSmCffhoo/rtMkezyXvNyp53ixCKt7L1ChxvB4jW4L6rgDuO3Cb/H/dKsJ9eDteC14jinAAv/t8eDgZAACAAElEQVTlObD/GMHYabpHJ1ruV1NN9+tpRJITmnZF+lX3KOW+FC7/cmZSANpRPTw9oacPTKAqVkAqkL1bDnbWyGM/MN1xD85M6HX3dpCarQc1i9tM5L3e3czDE+ft55n7vOV6/h9DvE8KTn7GPStlW+1kkPSWW4jYa3udfPfRf0mf3WzIdL6lJDXL6PKSrWapVThIpcVqXaPSCi6n/Zqssr3GuPpkzl5+bTo/uHIhMDhN1tFTBCIny9qroAEQR7zLDtOYTKfaqlIWzvA8bzvFRJwY5IzBzloUFAIW2NCdKq/5DFk34AkLkGb2c5mp+amhqEdrSMZ8yhanKq1wrUbjdr5ujNk6YWQsM0mQ9wiOcB4xOis+Le/zo/Jcfz404HbdadaqPwokP/6+9x3yujl97kODI+7fB0bcpyRkRarVQvILIyWNJA/RF+KVS7MOBZm9yBcKSfQ/9irYISjx4XwHlksAZKUcIclIclshGad9JJC00y0sJLNeRF+RCvMAuN2c3xiPvUo/rnpXHG3yL3vZUTmq8W7XHRtJWpOAtIL10sQvko4fnOBOV5HckSaHxaqPbDVCkn2ZOrkDMyBl8bmsWTcl5v69pJC0sxnRZ4YIEpMbAElMeOgFybjYpF6c4fpYfdrmAlcvNNm2C2cRJHk/Fn/YvS1Vu9ETkmkEVATJ9D6phVt8zQkcM+X3MeM+Z4gULSQpQPJOXC+3M+pFlAuxepWQvE+eE8BD1PgrgdjjAr1fC+genWy4RybqCkmC0sKSlwHGByfbKgASp4AkwAggEpYQQGnlgZlP1UZQhhaUNLLsFXkSoOnBS690bK85mBaQ2wJJgjL2X4YDPILyhUDSWuDFv0kiyaJqWwtDez2Hgv98vJYbPn019ytRtCfPcXHdZ4KwJun+JEZiyVp7GiLCEMkxYkz3Hs9QuGVCQ78V78e/Z+EP9wixFqNC9qRqlor1Y7F8ujYWBAVYEpI2miQk9baQniUkMYcSkMS+KrKPR455AZCYJgVIHiCXMUPyLTvt4JbPmXvbHwWSf/dn7zhqt5e8zH1QosV/lWjwkwN9Zj/Sg/IL8iEcLC/OQhI6bHg0A2QBJK2ZuYUkC3UYQUaTgKTlg27vzKV7QPqjl5xMCwghedJYlibAJvYZFd/XSEgqKAMkuwp2AiQtrLRQRqLtyyu+kf4S+SFe0KwrJDGtGzZ1P65401+kZi+W95PCUmfKBUVwGqURKKtVWaBzhTxGHOcDX0i5DNH9Q8f/JHPxODwWQ43ZVqLWcpVqfH8EtTVTvygMQdZ9xzCuKi1+SC3E2NBPSNIBJyosOFTaosF2iBRmjBqKIJmrpqR9WmO8UBFW4X54DCzCiHK4kFP3tjNIFi3qVlzM2adoJ2rkFAqB0tvxOmyEvFo+S5W8RuiehtcaWejva7VjipTVqwTdA/JYD3X8/iMh+ZiAD5D8ZWdcIsy2Cvd5yESRNppEmvZ+iUAJS5zn5V/OAJy4XFfhOkac9r58bRTTujz4ANj52fZKzxZ9zvYzu6Noz7JHQVcv676iFqKcYUHIdGwrJLcm6/6jY7/kuSCaG8R9SEIyRJ0/lwNWKIUrX0P0lg2FezQmYW3BObpPWYqOPEh/nlYqRevOqFpZt6ZS4XoEGSeHlKeajQeHNIzD4nbZMeWQbhWYIepjxAq7UPRsHl/yAykY0OSiypqfYnKSgSkc1L5XzkwR8LjfHfaA/LL23Hu+HDnsdYis/f8lr+mDQ/PcG4VdU7N2WP1HgeTfvO2t33jFnL7b/nJgOAfJLJIcjJA8dNTLQtJqa5CkiUCaZqUsILnneEzo4YGKINkrkuwFyVw0uRVIpo42AOQV1XoXJDE268yxYXd2eUTd8QFJwtFCj3C0UaK1lGPBDfcULzdffB1oHAyTo99pQdk5zgOml5fLcZgxAHlJKC5Cufj58n8IXSCfM3S+/J+cJ/8358iX+Vy4+8sX+uIwlR3Pk8103HIZfXRCkb+FLCxVBpA2gqSXaewZTNKilI0u7mo2ulsOQkTXC5Kxty/cn1GKBaNVCsleC7iNLF8IJKmux2t6MX1JGD7QmfBC9JhA8qEcABuackWqFZEkUq3Q1iAJWUgy3crzj8yXKHS6raB8YKIRQcqIM1MnJ75WC0mC8h5zfRrFpyBNx3ltCyS35G/by2s3pl5NuvX3haRNvXb9vXH/sZCM6Vb+xgRUmgIugCTEvcpYsCcAvjSMuNIiQ/lNntvwA5YxPzIzWbFtcgIq+e1jFKAOcah5aOIyrj+l5HsmCUms0RzqjHFcgOSxlWBKENKiFpLo1yQkWWSpqd5KmP8rayEhme1BhlqTAEkF77CfbAKW0Av8K0Nen+0Tdsm684H+2W6vl233x4Mk/i3bYcfV7+rrd/9HXsB/DQ6qZ6tO/AAgx/yA5YPlhYHUh8ubT+GYQjKmVxNIxggy2NBxlIv2Po6O5dKsBCQheXypFPt7mGbFdbiNH3p0jU82nAHJU6tj6hSB/sZo2GsgySGjdphwCskrqzWVmhLLj+e8ZtX9eBzuEzA8H4rTOVjwcvl4Q4XCFz1fz8yN1ShZfpA45TDia5qN3GDiq5OxPSwGQBEAKu14RKqN/M1WHEobrbM4tidMLeBIHkSSKvmsoAvlS3gB+j3ly6wz4molTc9y+DHK1G/CXEcBOQUT7hSCjCItJG1kiYZwK1Zz2vRnKg+YelBji7o12Y9M9wZ7wYmA1CitZSCZpAnj5QCxND0bI0tjGm6VjqdaHXoRo7tN2MNbI+/1PommAStAB1Ei0qSPTk+6R5AyxeVC+f1IimnXX8+fVP1qZkofg49jhevsPqVNzeL0EfyNRJKPCih/tWBST38pwHx4qqXCeUajVha+hL4tCLKy7j+2qjb2bobPLJ17ye9Jlm7vPWC6qIWoy0fWpF3pD7ste5JpxGghCW9jmAdAtKVLf9+sYoWYWrVzN7lXmh6spgMEWMgXbSpDDQKHqdPrFethdM+pZqMEOQgCrXMILpCq/f6YT3cCgt/WsYYIhoZUXy75tj4MV4aDD0CqRTZozUP7SWXUKwQ12brt07MwLz9ZXh9OcZnVsiwEittqwgnoq/KajpLnQzEoArIvDw6p0CP5cYko/8fYgNujf6dVR3/+wL/9o0Hy5QODK94xZ26EJDxbdeIHAGkgCXWB0aRbGUXG9GoyZDlGkNsIya5IMoEkr2d1Vi9IApAQXCLobL8lSKaFLSkkLw2uM5jSfXZtTCF5VnlYIYn0xk+0od+3TVzZaKlwnnuEhCTFyemEY9x7TCdl1AK0QrWcndRugUmQcggsHxv7FTqg2UTK1qHHA7LsLm6gJ9PPePx5w8/xW4FRVWY6Bb00U+9UQjE3RDhEmBaQaLyP/ZABYr0BWA89es0tRmu9AMk0K/+G0Erhd3+7o7KA3BokbeFJrOI0kzZQeUql78tC8l6zh2cBiQiOkHp84XyB3XQOdhZ4iCCZan1swVQA40QU/jb9ewIS4j4lThWKIj73r+TvHujUFYgEJaAJOEK4LgVkCkoCMK2ctVZ5tro2BSWraAujdDsseitesmmLUNFe5R8CyaJIEpCk/RydddKRcVfXs0pWRou0aoQYUeb2NbcCSS3MC7/3rUGSA+nV5zq496BKlnuagORxocDyKGHE4TqBQ6K4sm/rs5DU8VZh5JWFJERI0lCdoKTjj4Xk8WGt11a/4RGF5NfkNUGYG4mMJaJIQPIweeyPzJrt/nxgtlu8w3Zrtvtj/lu206xV7xoYVEj+58CADldOI0m0fvSCI+XHYOUhiet4PSPJqABJBeRYqQuSxxodp1FlOfgNph92BsnvhhJmQJK+gxaSP5LnieNfjNMOIamtH70gKc99VdmDBb6ojCTPqo26MyvD2g4C9x1tB1EvVx9FMpLkTDmrXDFO8qNJ3Tyw7xgHGTe6K+kgvUzD5VDMwzE93JOkDV4sDAper2qdJ4D8aUtA3fKT1m8II4/g+EJHmXQYMMc+WWAyhbqy04oFOasFttBd8nlAvMw9wVyqs5W4v7SKIblqK/11ej3MuTs+1WqhBqs2PBf2+iCkMgFJRJO43LVHmUAyhWXXXmUyhgqgz6LiukJydctXh6JKFHD0gPR7fg9NNmOUBiA9sWDa/WZGYDktEBR4Ur+abGtq9Zfyt0ivPrZgRgXwMcoEDB+fmXaPTU9FSKZRKS8Tko/K/QhLD8mae3BiPL6mVHi9qgJAqoKZAUQjA5s2jmnlglTtfe1Wridzdat32p39rL08ZAnQNB0bW0lCyjW2MIUinq1BMh0Px+Kd+PsM1nM82L4iuOrw9x+r1ZtZQY86U+lWRiNLuxLcydZHNre1roMW6NijxYOyXtoJIujthq0mphnhVP2ojdGKWtwFcCLCPF2zdSVdm5FmPWK4X4KmQQGTrPeytiK6+7Y81zG5SHBE9Z2KF9Kx7EqwGUJ6x343rOkWjlo5WxrT7TfMvtRIUg7kj6qW3OGlMbVA1XTr4Jg7sH/AfWx02L1pzkvdLgM7rvqjQnL3eX0r3yaR5P8W0H2ivz8HSZVEiF8S0BWBEWILiAVkCknIuuvYPclvy9HDd+TDTatao80RFQx5UXoM8UO16dYtQRKeg70gidw9ANkLkoDJ5RLJApSawpAv8vmtmjsHo2MEkmeUh6L7zgVa0eqb8K3s8FULyXQ+nU2v2kblNN2aVtNdXa7oESsjTla7ajtIiHAtJOP+aIgkCcjLZMG+ShYitJXciDJ6VGO2J2JDPsBIf1GoaDYi4HirLJK3yYILwXbtvokp1ZrOZKLgLTo5qdKev06nyybNDgYugmQvA24AUtVqxLYJ62kKIN4ri+rWIJnCkYqFOz2qbylr6QZI3tX0QmsFQIk0q0+1jvvCmIlGDki/nT+lgPy1QPFXaO0IQqsHAAlYolAHEATs7pfHvk8OgB5sNxWAv10wX1UUTVJbguQjM3gtGbgRPUIAOK7D6+0FSaRb6fRjIWl7NVNAWkje32nnxndtDZK0FSxySUohyRmdcY8yfJe5H8kq122BZJG2FZLx99/IKl2vr1ZjNJkDZBgRlku9xkKeDJKXBUBC0ZsZFfnVcg6SWq+BoQ/yvNQPDSiRhkXkhy6DIwf73WGD8wohiboRgAxR37ESacLph5Bk6166jbYtkFR3tWEvABLRK/zBUdGKop2jhsvugL5+988Dfe6tfTus/vYn//9//qNCsrPTjqveMHuu++i8UffJ/uDfKvrUWL/7dHlQKC3QGyjoi2SaNShGksO+LPeoIFYfcRQW50ZmQ5S9WfnRAmbI9kcSmNDxJsXKCDLOkaz6kuFTqllfDmWdIk4PNnU4YsIXAWnXC0JKIjMdryQFNl6x0pQFPNWGzn7DzLdzQhpXU7m1kpoAcF/vWrl8jXyR0igyQjKZZE5Qpk4eqHbTqtLQQsFRPjr2p2nuHyJIplkJ5uisg8rV8AO9uuIjVF+Y09C9R1jF0QmHQITxdppe7Z6mkW+tIJDWyIJ4X2hg58K4ptWM4kKZRg6pGGUSbozuNJpjRWij0RNm9wXdj9RqqxUa77GQd1QPT06qHhJI43LX7WGvD2nNBwRs0P3NWpfuk4ONNfVKFC7zNvwNmvz5t7iNsgU1gApaOijtgWzj7/FYFRXOP9QZF7A1BHBNPW/vw9tx269m2hKJdgS0bdVvBHjQ4wI96LGphgrncb3eb2FH9cSiCdXjOwtc5fRRuQ4CNB+a9BGvpmBnJrxpgUA79mgC6PL/r4ppX79H+ui0/0zxeeCzwCmEz7dI/L/g/w+/R/xO8OAnDo7G9xAHTMEXF7NFfyGva8WEP7hTz9zU1Wg8c3+KGZKOl+2Z1PRrgBZTo6hKZWWq72ekKYDPBOE3qDCU1wZd0azH9izoilifUI/7lj+XdeZnst5AGDatQ8hp7xhqA2yG58YQhQKUajQgv2faacaMEWbE0squUorzY38UwPhDWQNVsh5gVuQZEph8XwKEr8ptSHF+ZWjQfXVgUNdqG8gQZr7idUizgwh+vlOGmXpNgQkf2ROQhq34ghxazUE4D8FmVBVgGiWP8dXhUTU1/1plVAcuHzk8oF0TBw+Muo8Ol9wH5LUumLvTHzeKxL+FA30r3jS3z/3r3JEIyQPlifcrDbjPVIYiJFnZypQriniOkA/vCJyqfCSJ5k7oq0GE5TfL2TgswNJ6tUJpJMl9SSo90tCoMZQKn0RfwND3EwEZnHdopXR61efZCcnzQqn0xWEI8iUFrR8WkqhSBSS1FSRA8ifyJTg3AFKj1Krf27OQhNI+R+5FRieNgkjSplwtJO1gWAtJO5k9hWScWTlejfZ5+mMc94CEbh5vRkjeYqJGQJKp0xg1dnmhhlaLAEqmNjVqM+m1IgD+oZBMVVSxSjhaQFrZ23kfLMgAJ/oQscBjYacABHuZ17GABgs7F34u/rawJr0dER+qT7kPiFO2ZagMIO9rlCMIAUbAEOctOAHGxxdOut8unnZP7jzfPbNkOurpxVPuqUWT7smFEyoAlMAkJH+zINPj81vu14slqpTzv5TzqummQpL7lNgHVRCG9C9ONf0r0eOvpya3+DnZz8KCkdfpQYk5YMH/z73y/bzHtMwwjZ5Ckm5HhJ2FpLUaTKfA8LvO4d220jW/V9k9vFkPYOt0z8kgqWtAqEW4PPQwE5RXxPoE35dMSFIooMNvNBbzBEhqEVz4LVpI4jcOG82LGrDSbOQgiYwSRwQSktyLBCB/JH9PSJ5equikj6Pk+VAsA0h+bXDIfXNkOEaDGsDI7YgUub4Dkj5LWBPIVTWyRPqVoGTVKuH43XIAZyUoafU7tjxeCMnDhVcH9Y+4j41W3HsGhtzM7D9iVSv/vWvfvU951axZ7n9LJPmJ/mF3oESFnxNofaY06PYvD7kjhgSIgyMKRFa3EpBfHivH9CrheJR8ONDXokbjKCwrmgcQkjgSgbqOIIJOCCnWE0x5sO23SSGps8lMBGmnglhIIt0aDQQSSPoKMQ9JtmrEUVeAJAYSY4yURGQZJMua0oiQDKXdV493V6xea6CW2280tlf8kUUnkGCdZX+Y3oA5DC+2oKQLT7UazZEhn+YJQ2ADJOml6qPIZgQkp1QAkqpk5iG9NGPzfgCl9iC2s7mEKaAskBDhbQ1Y9xbI7hOmYIzp1I63bXuoLQtsq91T98n7hu5H6lUWT1yHv/nlhMBhcqpr/45FL0hdIoVpi2ns9ZDfI+yGBMXLuA39jb9BajX0OUK+laMR9dhMUwV4QQAZor4nBWRPLZlyzyydcc8um+/W7rJAT6GNyxe5DbstVK3fdYFbt4vcvmxG9exSAeeSSffMzlNRuAw9tXhCBeACvI9Ot3LCdY8twO3TPkoM+6QZJP174HtMgUiHoJyFXhDvr5L/C/0/DFG+RpHNhplaEqqMJ3ybjR3ndbuaVXihzYjXF3rM0sEpeMX+AsOwm7VYjMYCNaY7+TuMrRmhsI6/P+1ZrviWKq1wN4MIWDgHAWKXNvwAdz/EPa+r6n4dweg5AhqQxKBuDuy+uY6q8rK+ntSBy9pUIpuEIkNU4xOWnLWLNhG0i/xApGO3BIAnDg9HC7gjBwfdN4aGNfXpC2+8vlvzPevICnp7Ue+OAx07IhAFJCWaRDHP9ypjuXVcJVFtXpVcKhbR6DeGfWXtN8oZJNFVcSAiSQlYXvmS7d2uY0M3/tEhedKRR/z5vjvuuOqf5gy7/+gbcp8VCH5ePhAA8oDKcISkLdghKA8PESRSrUWQ/LocSXAPEiE40qwaRZrByXE+5JgXoXisyUsfF5zqe0HSqgiS6eisIkj2Ktj5qbru2MZ/D8lLa00VBhIDlNjnVFX9Jjn+5srxzKXGQrJIKSQtLBVk9WpuEnv642S/FatauSfJH0sRJJFuJSTVECAAEg4lKSS530hAZnMZx31vo4kkmW7dEiQtDC0kiwDZC5IWlCkYU3GR7SWAMRUBqre3Gjkh8nuo4/sPdS8vnBKihCQLaeziTwAwGmUKErJwBCyfXDRfYLVQwQcBfOt2FdDtJtBbvjhq0x47R23cfYleh/sBkPi7TbsvVgGWFKFZJICUMIUQjSIqBSwBRQ9GAfqiKffEkhk5ndFoklC3kMR7KoqwLSTt58GoHZdjijv8f/A7EjMMoXKWWQtUEt8VhkRznzqFJD1ii4wMuNeNgi8Lya5q7uAwZSNJ/zv0v1tmhxSQsoZF7+PgkMODbtpTRqtKzpytIHM1HnXleCVCkhGtn1Pqh3cDktBNAkod7ZW0gFlIXlyr5MwGLCRhOkBIIrg4GZM4hvz83yO0NxLbYr7S1Feyekhy3uO3GACNjMbxXIAkAImWkCJIWtOATKWcEI1+fWi0C5LoqjhAIskPS4D31nkDK9+71+5nbven+LdvX9/KD80ddP82b1AjSUDyQIHkgSaS5F4kBEiytYOFOdiHhLJ060iMIi0k7T4kxOqldLoHQckjifTI40Qz+wyyxuaptgWStGuLVnD0RAzN+Lbwxd/fTwW5uN50FwlksL9JSCLnjy/i5eNZK0XO2T8YGMMH9ZqKl/Vs5FQNuznPI9nuJuf8WJ/MyaMR7av0x9pseC9YTev6SJZ9Xb9otKMRtAdk93zDdNoC5yIW7UXe3e6eJJHuA1oobgskt5SqtS40vVK2D6rpdzPu/bG5nuLtqSwUiy7z8dICGIKTt6fPy307gESjx5lOTk/Ob7unF064tUum3YZlAKNACwAD4AC8PZaocJ7CbbgP7gutRbQYVARCC0xCkbdtEsBuFCBT63dZ6NYu9WlbpGqRsvXpW4H44hmJYGckkp2WiFZAPz+DI0D/2wXTuQiTwvunUHxk9zIfDUVJD8sB2EPNcS1EsuJ+LaJJRpT3huKe1aYaOvZQFnxPrZmEbflhRGkdnGhvx5FlNEnn9kc0OjfbHYATHa84+opzIXWGq0AG0dx5ZvgCDU+wPp0j9z1XHge6qFl1l8nncHlLfr8C+6vbNffztqwDcl5TwogkG5nLFXqVr5fn/Zk8HgRAXzZezc2b5agtHNSjOv8H6AKApR2GN8tzY01FIeRxQwOaZsX832/IKfYiUchz0mg2+go1IsePZvMeuWV23ChceKpxqgiVGaqPhikfozmpafpoVoPy7ZGyO3pwVNO83whtKMhgfkn0HxKs/Y1wC5M/tvtT/dtTIsm/mzPgPj53IKZbDygNqjTVOtQdRaqLzthYrGQlJKmueZEhzfqtRAQk3nxqJmAhaT/AXpBUlYtBeabuR/rCHZY5s3BHWyISSOrRHqrDYDMn/6kpJLEpTkhC54dZk70gGSO9es3sV1S6NvwJOzubUVOhPIJt1XOWWXYOnoUkpxVE2yoDSVS/XR2mpG8NkplhdDOmWnW/kkOEQ08iF6XYYpH0xBXtA1oobgmQhGQvUG4NkEjNFQHSplB7QbTXZXvfIujyvhauNvokDAiTX02gcAYFNpMKHcBx3c4zUQBgKgIRECQw7XUQ4UoIWhBaMWLkfSwgoQ27LsqBEsL5Z3deINCcdk9LpEkpLNGyEgD5xMKZCExel6aU0xTtr017ixYDhYMPft7qDiSfKf5vsTfJOZh+bFe+7/Z2Y0uY9amGg7ke5hERsAGuhGMRJLWQLqRZmcVhTQAjyCtDHQAjOqwhgCTaxiBA0rqCEZIE5YX1sk4UurRRcVcIDK9oyMG1nL+u6S0fU0iiX5mQvFYel68jmgyEiBJrGiCJPm9AEkEE1kj4tSLowESQYwf7FZJHhTX6+ODTekqp6k3KTRDDFg+u3yeUa+6USl3nW1JFkGREmgVC5Vy/5HdGK+5bw75V0ELyi8KLj0vg9v7Zc92r5/bd9ieD5PztX3rP+/sG3b8KJA8QWn9WPoz9R/rdAaMSzkp4fbhpAeGkDwDySHnxKSTxQUIEZLSdKwCkTbPaIh1bImwLdWhnZM1ymV5FtGihiCZYCK4R0A8qKGmuaVkzG2vPD6YCnACiaVQDSfVQlee4FP2PoZ+Scxb9fb1NHeDKocXM9ccqUt17bOYMizU1w/4mMx3gOtMXlc696x4y6/u5YmTJEVThR8viHqZrOVoHvVNIsyK6pF3WzfWWPo8OPw4VqwQkI8ZszJO/HBv2g9IIMi3nj3tKIYWZpjS3mu7cWqS5BcBCj3S69ai8LuqX7Vbh9RCue7gz0fUerOxrxn1TEY6o9EQhC2GAqPG38+V0qqHR47OLJ936pTNu47Jpt2mXmUy7L+zSxuUA3nzV83stcc/tudht3mNR7noK11mlt6/fdUa1adf5URvleanNAkho41KBqESN65fi9oV6+swiD3aNKgWSiCqfWCRAXDChQnRpAUnxOhtxEqpd91k4HYqD8n2emZ2e/87RvcdOJaFjz93heu9s5CurmdmIqf9wUIW/Wa0ev+Mq34vb1nFl+J1w/z5mfMJBatzmCIV50WGr5gtqaC6CtcNP7fBe0gAk2i20fqKWGYufVveCjyoKa35Ur8QJRD8J7l84AEbF7LUhmmUhnhb7VORAuJyfDmQjSqxnqKHQ3smKXy9PG4ddHNZXiejGBt03hwfc1ySaPHrUF+ucjIpXBB2VWgw+uA6jkPKEMP8RAuwA01NLpahTwrgsHYU1OuqN0IMtXQbLcs5cAO0lfsiFr6JFVIti0v3l7/9R+PS2eX1u0Uu3v+dPBsmdZ8+6433zBhSS+w+M6BzJzwz3KSgJSbZ9WEjaSJIjS4ogySkfRxe0fqRTPVJHHYoR5Enp2BWOc0kiRwISR0aQB2QxJBH5ZfALfZFh7wA9hgAlIdgLkpzFWATJa2AXV6vmZP1PrYsGgJgCEkqb91llGk2YtwJJzKC8IrhxaM9WSLfCpWdFs9MFyWyiwniY4TceVI2FOnTKWWX2d7YFkkUg/EMgqS0BpsXDpnVRoQql4CP8qNiqYMT7AKARdgko071Nez/7vljog6b+38yfiXAAIKGnFnQUNmuXTEnkOK2Q3Cygen75Quf2WBzhRkAChoAi4AilEEzvT4BCBKyF5bpdphWShOKGZdOq9UunVADkcxJNbt5lkYJyk5x/bvkSBeWzi6fckwunNKJk2hVwfAxFPVSIGK3w/imAcUtiYVBaIBWdgqantBfzQYEosxeYkALdF2ZfWmejzPvWfz/StL6F5J0CFh9RtvU3csu4b5WC+LvjvqQtmNH9QLprVWsRktDljWaY2lF358kpIHlmONj3Q43DyKqqF3xUcfuZAi4Me0d6VG0wa368Hty8WBWfQhJKR+gRkhz9p72TAZKw8jylirV2xB0ngRIh+U2tQkXvOaaEjGv1Kwp9IL5eQpI2ckzLFkGS0okhIfDJoskMkNCxFW9WAF4gqAIk0W3xaWHTPwwOurfOnecWb/8nqGyNvZKzd1j95rlzb/sniSb3Gxh2Bwx4c/MvjWVzInEK2zlEjxABqUU68uKZXiUg1XKuVMpVs8Z2j9Jo3IvEKSDJKNI2mNreSJ0pNpYN4eQIFg5Xti0ejB49HEMPkBz9/KhSiwbnSI2q5AuSg2TYXNcBylW/8Q7hy4j+x0tCOwjTJ1Q6n1FnQ2IvYBxHlq0cDPN7jR6KLO3GZaRykPa01aa6/9f2bRnYsIdFnBbQsFQ9QDXdy2TkivdyVS3v4oMfEdK5/rnGw14jBwZnMxg1kkxmJFqjcIi+nGgUV4V9xzivMOzR2VQkU5A23WllC2PSvb30vuk+oE2paiFNV2tCfpGmivbOoNQrNU2ppvubaYEP9x7hnOPdczqaXmXLhaY0l81XMAFSz+02I4Ccr8L5Dbtn2rjHfLd5L4HW3ouiNu25QK/H7euXT8f74XqvRVsUIQqAApqMJjfvtkBg6KPITcsWRG2UCHKDpoKnNfplSwnaSfR00YRW2wKYiCoJT0aYhCf2L+1lnMd9cF97f0aXTNFayz0I3zMYIMD44OHJTphcMqnwTI0JcNnui6c9sRpZdtpZKld+GxhdhrFlK+V3BN1S80Irxg2oKZC16uflchxzlRbs0ZEnG3XFocmhJaNSVdcbONzoeD95HOgkWXdQ7HKK6QXXqEvWRPQvokXjh2hDk3XmonrbXdrqSFQ5qbq63pHnacrvvhFhzYwSC4fg46wFPHKdRrKwoZNI8hQ5GD6+Cje0QfcNCZjQF6lRJIY6y5pxtnwWaBc5swzf17IW+JyiEWFIq4a9ylPGKqpT5fbTSlnGDzMkTxwe0UiSkLQm54xCAVm47Rwr66qyQ/vny9pe+EW570flvn8hr23fvr4V//Te9x623Z/y3xvnzFFIfgq9kgaShwwNKiAJSUaQFCD51VI5ApICJH2q1eeQAclvjAxFSHIvkqBkmrUXJL9nnOPTKta0D9KCMnoSbgWSPwlf2EuMcYCFJPxaIUKUcLxa9x8aOptRN+XrfhYlp4Fcqj6Njdx4KQsyRopsEk4hyb5FC0n1mERUZxxCCMl0ujohyXTPtcbyzkKSLR29IJnOSUyNwlmgEy3G4sLTCsOA8/uAOE+IpPt3RZDc0l4fVLQnSEAi4tA2CqNeUY3dD0sh2as4Jz21e5f8u6cWL9CFntZyGj1K5PUsQLPM7P31gCSBRzg+//LF7nf7LInC9QQlxft7LY4qgmQaZRKQFKEIrV8yHYXI9xkBIt4HezBVO09rOwpBR/DhVNOvqI4VQFIWmrjdQhKXbZpWYRnSr6wKphk7jdmzuZgThfvVLBhLMxApJGM/ZhiEjV5KmA4AkCvgiBNM/+GOA6VmAhxdF513wm/vqpo/EEc2Ck5fqI+gh2oKSYyawqQMiMOIAclThkdVpw+PubNlbbug2tD6iCsaHRUhCdnq2svHs2Hul4TiRayLhCQiyZMlIIDnKiB59Eh/3ItET7pGkfJ6AcjTxzDceUwBibX41FrFq+L1fQH4aRLJfn9sTCHJTB+HLdtIMqZcgw0eo0m0mxwja7qFJHrvvyA8+Bd5Xe8bHHCvGhy8ebs/9b9Xzp1z2/8cGHKf6htxBwgoYUcHU/MvDQ/mpntwL1LBKIK5rU6JDpBEGIxTVrNy7hghGQt0xnylUmponkISwugVRo5xUnY5C+GL0quamgjCfz6+RGcbSOJLeZ6ZuxarXHUOYzU60jDq4hQPHR81nreEun7cF+Sglwn9kZcgkpTnxXgspGXh0MPZiywdJygJSKZWcVoESc5EZGk6beJsxalGmCZFe2Pu9QXDgWijVY37n9hnsSOGOPzYQrJ7ikU+vYrFSFOrAY5pMQtTlzhlKvPhVlNVtF9o9wZ5f5si1RRo+Pv0MezfYf8PDe2Ek5X1QP2NVphm3qiwf7OCBRyut3+L63mdfSx72280peqb9xE1/nqyru42Tyxsa39iVkyT7Qv6PUTsQ85X4fy6PeS2PQVUewnAXi5A22dxTrhu494LVbgPhPO870bcHrTB3A+PCVnAahS6PNOG3abjHmWWgp2J0mhS3ov2WCamBYgqvYPPZC5CZBUsZaHJfUzCVCPMsHfLx2FkybQ1oknfV5k/sKIZw4Om2Me6GVE0cUA0StHUAYJl4YMT3joRLUWcJaq/BXke2t3R6k4n5VQrscqUESfOXyfrFIppIMyExZYOsk7av1j2TjhIpyK1eoaqEoIBgY3oVAHPyRKdfU/geMKQAGVwRC+fXpJoEO1oAsVz6y13oYDyJ82O+2ljIg53x/YQxmlhADvSvTAaQMoXBUNM9wJy35PX8p0Sgpsh1fEC65PkMXR/NMym/MFYWe0+IZigK2DlvQDuLKSEYw/2Ljm3kpDksGVGnAx+tB1kzGcU2faHIOlb8pl8fZRubCV1dvuMPP8/yPO+eWjANbb7I5uaF7aBzJ59x4f6B91+/aPuwIFhNTbHeKyDRoZy0z0ISgUk0qzywXxVx6eM5qLJIkjqfiTAOGYiyWQ0VizUMZDELDHOiOSHz7CdoOR/EiEJMFpZSEI6CaTq9xA5CYSQZB8h9u7Yu0g7qZ+FCRxpVEhIwkEDPZKcH4kjxavkSwtQEZLUjWbvEZVyPN8Lkt5mqxnAlY36yU8xaOZAGb0dQ7Vr5juZFQlxLzK/H1nPKYVkWsWK/SD15QxH4likcs31Zo8vFsO0mgo7Ai2VL3DxSvcQtwRU+7cAJCGZgjCFZBE8LTB9BDil4v1/E1KoKXwtQHEfwBGCqw1SkgCKbeZPi2wISGrt7tMKSgu/XiIsIQDyuVdIpBm0icA0MAUkbQSqUWiAMyGJaNKCEqnhLPqdnxkR9IBkmkIlAKmiCBNw/NVUUwdH+9S0Aagp6tHzi3wvqo3eCUnNZIS9S4ISsgC119mxX4TrQ5NT7uEp+Y7PzKgekO+7auF899DihW7N/Pnunulpd5d85+6U72HqbczfKdszWHUKSGpxYDWrNgUk4QV9emlY1rVhhYtPZ1YUkBCKYbDXR0gCmKcIPE4TcJwltyEFe06l7s6H606tFfsxtRdcfv+cCnSBXEZtBvZEkerVKK9a1oZ+QPLbZURxY+57DXlOWYMASZqzAJIYHIFpIhaS3ze1IkgHQ7j/6bm2PAEpKmTL5RwksR95fIhaAUno+LBtB5aAF4DkEUPD7tPChb+Xz+mNA30r2y99ESC5l0SSHxwcdvsNjrnPD/n5kdDB8sIOlRdozcrVYQdluHI9xGHK2hcZvPtoHEC/1lwvZHDXISSLqlnT6ib06zCkZ3rVVrFi5hn+oxg5UmfVSlrefE5lPKgaZSGZebh6SCKV+vO6NxO/QSKj6+UHdH2oKNUoLoxkWilHVyt1ZqIcITbK7upmJfZHQVr8Y+bB0TA5lZ2KzupVXv4FZyKGBmlElOzfikbNCTAtKG/Sgh4/c5KRpA5Kjj6tpqrVpFTvaGVpVxp3x2HFyVDgR6anvfdpOJJnQz0hhYIVwAtQtOpVNJPqEYmgH0UfnYjm3jbSs1BLI0avdq4PEZcfm2rF63FaJNwH+o1EKU9Md9yTErE8NX9ST3n+6QWyUMsCDeF+j0803a/bddVjnYZe/u1UTe7XlKhrUkFD4MTocXdEcgujNuy5KGrjXovdOkR8AKSJCCmAT6NDEynivrw/4LjxVTu7Da8USO4r518h999nkVv/8ux+VIxCTVTpJbcvF1jvOp0TCn4gAh9iOwnOR/eexTO+n3LRtLa5sGAJ51n0g1Nctrdne7edeJ0V9zuRzkaqHPvOsa1msm3MCjq5VL2FIQCaRpZpryz/Pu6xTyHaFDDP93p4gcAT01KmptThiYOlOWR69QRM+v0EmNtD69Qtsj78Aq45wcwcrWCA5k9Lfij6ecND7lxZSzEU/UdDQ+5sWXt/PObbRc4S8CB9iT29E4b9gGPUbcRq0ZJPbyJgQLsbin3QanK+tr2Na/SI03OrdV0X+XgA1olhgDKKZBDBHSPrGyLJE2sVBSiDEkSQhCSzeNjPVDH6HStHSGYRcUWrY6G4DxmKfqKnKzgQhlng/JHlYZVmIAWSKCL9pBwkfFBexz5DfSu3ezH+7TF71h1/PTDUE5I2itR0KyPIkG7dEiShIkiy9ePYxF3Bt3xkoFRnB3kMHE2davLaEPceeSSTAyT2IuU/7Jxa5QVBUt1oEHU1WhGSN8iP5Yaw/6dAMVPv8YVf0RL4dcbdzyfqOkBZK8gAymBK8HP5kllIogGYgFTzZQNJjpuy0EQUeRcst7YCyZh6NZEpIWmnF1hI+j1PrxSSSO9Cd9bHIyRtmpV7PTSetntxiCBjJCcLiYWkjQAVggWtF7kUK5rNAygJyCIg2ogxHx16INqF117368lmBCIBaeEJQBKShKOFpRVhCeE8/m7t4o5bnwBSi2N2X6jVqbovaPYNNxpt2nuJQpIgJAQtOBVwye0pJCFCkqC0YLVp2O79zUUe3gGWOFWFNLEFI89DWRp2fiEkLSApXMb907+x9yFMAchnly1UVyIW9tjWEloBpvvZhKQFJaPGB000yqIxnjLapK9v3GaQ7zoqaekrbAdyeyegZhCs81rxt4yoE8K0nZvk/teFGbDWIeeSUDcBaUW+/HZ/XKuH1ouygvF4AaqCctjru0OD7iQB6ymyFp8u158pp2ePjugwhvMq1QjL82oNFSD5/dCWgXSnzvAt+TTnd2QdO7bireNQlIM1WNfa0lgcscX+yjMaVXd6vRKLKZFuVQVIxgBHbseepU2z0nmHkOSgZjDiK6WhCMmjh4RLwqr/lOj5A/K+9pg3644XBZLLdtph9V/0D7hPDYx6SI6M6SiSg0YGBJZDPnoEHCtehOPR8ga/Wa2oTZBqeFBFSNKjlYYBTLe+UEgWAfK0SvafY8GocKyMqc4WOP14vBKPmCwkOTJLi3cCJC8dr0VIIpJk3xFgRqcZ9SYVQN0VeqhQIn6bQPIWgeRNkwIhWcivanmvxkvDTLdrJKItiiTZ58jzFpJx4kYYFsxhvnh+9inaPsbbTLN/tkfpxSHNmPjhp34QkuMSCeeHINO2SwWvy07DALKppfSxzD4UQ8S0VtgPSvcEH4dJuCwgj8pigNNfyyJjL1O43or3sVFkCkgLQ+4BWikwTSSIUwsxXMeIz4LN6mlAERDEY4TLEM7/Vv4Gt/E66hmJMNcuEmgsFtAsm8xr1ym3efmM27zHAoGkB+RzAsPNL99ZtfHlS1Sb9pHLr1gqAFscr1sv918rf/fs7gKiPRfqbbiOt/Myr8Pfr3/VItWGV2Zav69AMWjTK+R0H4HeywV6eyOt67Vx7/mquO9p4L3BglNBmUWU3KtEYQ+qX20kaSEXW0eC2G+5dulCNSogKJGyRerWPgaEy7gf0rhaQbtoflcvJr1jrWcuppdgvJfV/e1xt6ZZVdmJLZjSwpFk3AO3xWWErt/v9IVAaxqNXFHQvbI2rJEDaOi+SbltEgeZ/rd0T/htYytlZTBjv1l+V9B18t3H2DrY0f1M4HNVo6xbOhhth9FX6J1Eoc/J5RF3SmVU2zZOLA27E8cGVCeV+t33SwOaYbNmBVgPAcdza00V0rMwMkfqFtWkyPAdrWu4b+E7puLNyQFJ72DGgc0lFfZOz6yOeUDWs31J73JWzflon05AljLvbWtPp9NAghkBOAFmHCHv48jqkLYNwp7u830D7mP9w+7dg/1u8aztV78okNx5h+3veX9fv/tk/4j73CDGYo2KhtyXwoDNQwcHfT8k0qshxfoV7DeiF1LeHBwQVEMDCklrQ+e9/IazcVijWWRpC3a2BEk78spK2zzGq8bFvpqDJP4DAUp8KTwotw2SnJKh8xkrtS1CEloJo+F2TSF5nSzk13R8jxT7La8dL3dB0trL4bKe1muFkOSk+xSSsUWjAJI+7ZpBUgt2Kv79oB1la5DU9K78kFWNehh/JT9u04OWVbP6WYLR+NsWzUgU+ZgcdROEOA9oAoIA4COyCOA8r6dwGVJYJinWNIq0+38AI1stKMKQ0R/TooQnU6MWkjY6BPAAwifwOAaSuPy4/B1ACeE2AvPZhagARWWoQHBXmANMKSBx/nmBnBOIAZDP7blQAfm8wPG5fZaqAEdC8rl9lynoeIrrAUcC0kKUf2chib8rgiS0KWjzvotyoLSA3PTyBdlepwHk+gDIdbvNGBMD7+6DfUoLSsKwCJaEHQUwAnw4j9sQcXIvl/dJ/xb7lDAyeGbnRb6KeH5W3KMVy6EKlr6wmInJOZgQB0c/0Kmr0tFo98uB9oPy+3xIflsQ7fFYnf1ABGWrUPfI2gARlhi0jTmifjamt8tbGfxYNbuE8XTy27pefi+og7hR7g8LumvlMTAU/VI5f5E837nym/yh3P+Hcjt0lugHctuZzUqQQKwpgULD92MiCoUUkFgPqw3VjySAQKXscf0CIozCkvX+6xrwDKtQ5YpxV3DLsZHkWQJO6PsSSGH/FLN7UR0bC3cCJE8N7R9qlBAiYO2TRJdCgKSaECSQ1MhRmPHl8kCE5NeET5/VyVUD7h3z5rj5278I+5H4t0hC1rdJCPshofNnRxvuiNGqH6o81O8OHR5QIEKEI6tY1XKuUs5s6Ea8eAQSHXfgljCaCTPI/FxILxTnoIoVbR7aC4TyZ3gHhjD8lNKINtTiqOl0gR5Fr0FGkIwofxjEadscsnxODwGUaAPBhraaBEi0dUXFt2+ghBo+iTfKl++mjm+7oFEyvtxwnGFRC66D4TCAiOjxSnmN0M8EkrCKigAMvY4U58JRsWlffgA4woxNzhj0K68RPVsQGpwhDEa+vYWCgU6wzmrmJnbc2PIWWtYaD/Z1N7da+je3NQSI9baOHVLD8NB8fZcc9a6SHzXK4FEO7wcD+yKHB01aVRu7EUWGAcCx95AgC5fTVCgrR2MhjDzebzEkeAoR36Q538nt+1nhOkCO0MOp3wfMIkJWp/JxqSdnplTPCMihZxdIFLNQFv4FC9za+bJYz8j107K4C7Rxist6Xbg/4AkYwgwAgt8qmusBBnXO2WWB+qA+KyBZu1wiP6Qosde49+Kc1r/ca90rBHD77uzWida/cmnUulfvrFr/mqWqjaINuPyqJSrsN67fN9trZOoV+5Wbk8Kd3HWv3FmF9CtSsTiP03WvWOSeFTiu3Wehnl+394KuoiFbTVvUo4nTdbvJ57PLRC6qRMvI0ws7qmcWTKjWSSQIwc1ng8AOhgU4RRSOz9f3XPopJ2gvwXk/ymsitpik0uhy8QJNxdrpKmjxYeEY99DZSlRkVOEdeRo54Tegv4Ow3bAmGBWsVsu7Rpd5OlulUkP11Z0JFUd2ZZLfdV1+myiqg4FBWB+wftwg68u1Te+ilXlNj+twd/Rl4/Tiqh/jh+ELsMw8sy3BxIQEA3Iwf1lZDv6HG+7a4Y67cqTtLhqZcD8std0JY+PuqyNlP/pQ4KSjscb8uEO09OlED20DqbnT5HnOlHUR1bSIQrWIZ6wcoci9yZPH5f61sa7uAxZdsmNBU65j3twce5/Hy5qt+49jGNpcckeXh1WHD/W5w0oV97/mzHJ/KVDedWD2HUcefODfviiQnNjhJWveLW/yf5Vq7lN9Jff5OZjTNahToL9cGomQpKJpgHyQiCSLIEnhA04hmTnp+KjxRHlugBIf1MlhRiQ3c6EXC5Ko+FI3nQDJK6v1LkhiZNRtEyEdmVR94rqVbR8lIj1ytcAOIiRjOrWR10rTo7gyjKBib+SqyXbs97KQvEOHxLZUACSU+Uvmo0pA0hsx5yGJKlvcn5CMY6fC9A5C0gOyGRaGrOiBBToQzttG/ccCIH9r9oiKimpsFenjE20FpQUZZKFICBKKvI4QxXmbPoWQqsXjE7pWCsupTE9J9PuURLDQkxLFQoQk9fSMl4UkAJlCklWghOR6FuWY9KmmSPfxIiQBxg2vWhYFMG547bKoTUGE5ebXyOVXL1XAAZR2X9LuVwKQz8njPy+PDz33Kq/fvWYX9/yrl0VgAo4QwKtFP/sUV9Cy0MeaGdiiH0IyTb8ClNpfuXBSlQKyCJI0KAAodRC0jgrzfZXWrCBXOWu/e6YXlvvj1lfXp02LDQZygGzWIyTpHbytkOy6PkASsy2tAEmIv28ePOMAG+sQIIksFSrotdWsUuuC5EWyfhGSZ7RKCsrzZU0CJH8+1nbXjU25a0qT7hI5PWO47o4fqbqjhkvucPhzo6MhQBKN+1jTMdEDEd6JqEzFQGYJIAhJ7GmeVap0QfKUuhcBifVaC3zYnRBa+rYESR2EIbA9bN5O7qvlEXewQPzf5fHePzrolg28SPuR6roza/vVe273Uvc3Em5/aqjqDhmtucNHSu5QCaMP7p/nvjw63GU5F8dgjWWG5gjN8YFmZgIekt/EfLGRsS5v1rjnWK5GSFrTAAASUWUKydjqYSBp4UhAppBMYcnLaSvIxWFcDfscrw/FMCu0mMWP4NGNeTPTEGL/1G2NRuxbhOIMuJBOZaRHT1QOe73d+KGqow28J1E0IIs3Upt4LkR7hCSPNG+TaNLK9j3e2syGxqbDmtGGsiIMm0WzNCFJ+y5U5UFYGNKKwF+amYrp1Aff9uDbJjTdGfYG0yrUGFVOeEA+1mlFUFL+cj5yLIoqGTXyekaSvG+u8CbsLz4VziNtqqlUec1PSNSZirCM4JT7PTXl/97vPU75aGjn6QhHnaQR7N9YZBOrUEPkRiFaA5DWvXKxjwwFfAAgYbjh9buoNr1+16iNr9vFbRbh9udeu0sEJaJKQA3R39q9BDJ7zugphesRbdroEYCkNJo0ESegGiNP05O5wVTD8rrM4cdDE5ElQEnTdRby2PmVuA5mBBC8YDH1BKcwdscBB+z6bGsJjQs4NPqp4B1rU7i2OlYrY5N9Sla/ajFOs95tYB9Fd55mVzTpI8rg9xogyfmWq6NfbDEk8bvWOoMAyVVyoArdIb+9uBaofKaI2yFYM5COxe/3ipqfUHSRgOUy7besRlBiAMOFYeiCTjsaHHMXDZfdBQLIc2W9OEvAfqp8r7/TqbuvNMvus6UB1YFj/e4LYwOy/ve7L48N6pBjHbA8NOhOGBxSlxz0N2oLSM1bfcIXG2YtgCR702MgE/YoY+1I0JmhjYTbZoQk0q3o0cQQZwtJbN+psbmcxxCOv33Z9u5Ns3d0uw2/SJWt+HfMgZ/50Gvn9N32V3P73ScHK+5LQ2V3KDZI++fIkcWgQpIpVsAQ0SMESBKaNpIkJHFKSPooMr8HWQRJ689KSJ6KvHcPSNrCHQtHArIXJGESfF6QrXKN47ACJC+v+FFUN4VpHACbhaRWsxlIQviyqzuOnEKElIXkbZ12NBKPPw4zuJiNyvdMTcQqOj7XKgEbQLktkMTjp6O1XggkUZXH9Kp1NnnEDBiO6VQDSfYfPgn/zXCd3T+0QsrTplchAhLg7IKcqSxlIY6tOoWekQjk2UUz8RRai8gE5xf6KNBK9xnltSj8gnD5mRkfVSKaZIQZbwuRpJp+L8kix827wds080tlFEfwEE6Ugu2VeThuDhB8DkB8g5eFJPRckEaRRnxc2/IBOD6zh0S9yydVOA9oaitIgCajSvfqXTTS1MpYee0ApcIyMS5IezYzh5+8A1CcWhIqYBWMS6djNSzAtzYBJCahEJJ+4shMvB9OaYXnT6e6KmRzBUFLFmpRjzVP93MuvSUiK1ljBWwCSVa+prD8fSCpB9IBkne1OxGSiCBpSpCplYMkei9R2IN2NDUvqflJRYQkhzRjQhGMAs6reTef8/tHIiTPlugPzj3HlDHRqd8dODDLfWLuy9yn5HT/kXnui6VBd5gI1aRfq4xqK4gGLuqsU9L+Rj9RyQMSzjuMJAnJmPELkLSAtJBkEaau9WFPMoUkHNpQ5/JlCdaOEFjuN6/ffVSe4wPy/ivbvUj7kfz3msHBm1Hh+m+DJfep2f0a1h44b5amXHNuOqFYh5CkDR2URpEx3VoazY3A0kHKpZBiHS1FOyK1W1J7o2r0KVTPwkreLMCaBtg0awpH6JyKh6DVeQaQUFdEGSaD0K4ODjU3hCkdaL4nVO5Reyv5kTSaqnuD7m5if09+BI2OfslR3q37gq3xWIyDYcaAI4Cn7h2oIJUfwyp5jnvkC47HYTqHBTL8IfL+3MPQfUmkXMOIK9vSASGqLZo/yWHLfD9rRPe1vCWX2nIJINdMtTTFGitXp7PS+u70ajv2v+lcxACu9MieUR9TpQDZ0wRVEKM9FsvYCtJnzH0ZCbJYhuBiZSlOUUBD4fJaWSQBP+hZAfu6hdl1gB/huE7gvX7+dE647ll5L2sX+DQh0oJIIfoU65Q3CQ/m4oQkosRChT3FjdxnDOlURIkKwjfuptrwxmWqjW/Ia1PQ+tcKYF8nUHytgOx1S1XPvV4iw9d5IcpE2pR7jU/vJZDZc1pBqbCEow8iQoEg4AhIulfJ3wYwMpok6ON+ZzArSA0NLCxho8dCH6ScNfXMXssw0usZQDMAUyG680xmcbfYR5vabxkiUJzCtUiNChZ0omesjSxZBKSFQMsWdk0nQaoW31+daRmGPGfDoYvngKawtHuTNEanOLrr7mDhmCqCUtu6MkACiFa47o7xmv7e75SDZBxc3zzh1xJsm/jZtFVVtLuT3zSGMugYLIHiD+SA/wdy3YlysP61+qg7sNzn/nNkJ1nrX+Y+PrC9269/e3fI4Gz3rZEB9Vk9a2TUnTs4KhHoiPuJBEtwAjqv5Md6wVj9x1UvFEeicIdwhCHBGaF3EuJ6bNdoCGBVWzsUY4b+TKz9rHIFH8ALFn6iVxMGAgcJX/5dYP03AwNur5e8ZM2HXv+6415USC4UKr9vXp/7j+GK+/TcQfcVCd0/PzDXHTzYl4siuQ9JSNqRWISlLdz5enizbPfAB0BIYi8SspBU378XCEmaCKSALIIkIBgjSPmSQQQlbycgtZhH/h6Dka+rVBSUK2r+y7uq4aNHQJKgJCTvEWABlIQkqtUUlO16LN4BzPDjgC8k07SAJNKpeAwFVjIzUQfLtrO0Lvcw8Bx3tie05wrwzdK4vlpV9yXD/MkUkowk8TqKIHnfdNsbRhsvVELSpllTSGofXICkbeTn9YQk9g+ZFi0CIlOiVApSwpQtFxaUPK9gNLcxYiQQAUjAkpDkbWunPShTWCogJWLhPhrTrDpWCn6nyZQOTaWiAMbIplcZNTJC3PyG3bzetFzVC5Kb37iLirBUML5hl6jfvV5gJxHo716/m5wud+6Nu+vp86/b1UNTokukY9PeS4AO8AMkn7fp1kS83VrlWUjSZ9ZWxK4LvZaoiiUkAci1YZ4lI0ubXrXGBEzTPrV4ohCQNv0aI0nOuUxdfejVG6peM1DmfYBjz+RE5kfsR3RRW4akBWIRMJleLYIkZCF5u/zGV0wFULZ9VMlpP/BnBiThqoOtI53uAd9qiS5Pl4P9b48Nuy/27+j+fe5L3Mf6XuI+IaD8VHmuO7wlgUxL1llZn86R57hQ1oRLa03NokGZjZ33ekUWDtk4dA/8kBNKjNItrxSSjEDVzzX4t55cyqaAsD+STm2Hzpmlk6ZglfpJeR/v23FH9/Lt/4SjsXpWuMqTvmdoyP1/oxX3X32D7iAJrWEmcFgSRXIvUmEZ4OgnfuSrWSmkWunZqvuRsJyrVHQDWItywuBOzhjDh0VbI27swizAVkelpgFnhf8Y9gHBn5XCZTbjcuIH9x+t6OPK2/iFuEBdeKraDgLjYvQYIjLDFxr7hgAlB7euaXZU9wqwAMrVzQktiKEZQYRko64/CvxAOPhVYStHe/fLF5SjonCql8PRK+fdMW0TN/vbaE7uuLsmJvSUPzimbXVwcrDFujG8Bw5zBkzvCNHv/S0vOo/c36kLIJtaIl9kDJ61XPi+N0SDiAoBxicUdm0tzLD7hTZtGvcQUYiDFgwU4NhWigAxAqyXADUbEUI4D+F6QI1CFPiMwBqKsJPXC62bARg7UbjM6/Q03H8tUoCLJrMCHdrJYaLG3ksyO7gAjmdftTCnta9epNHfeon+Nrx+qUSLu6g2vslr05t3zWn9m3dRrXvTMpUC09zvuTcDqLuq+FgQr3vujQLGNwkg37Kn15v3EIjuFvcwNeWLlKxAElElzQtidLhvd4oYimnY1PqOVa9JNSwN1tk64nsrpxSMaB9Bmhp7uWwh4d4ujBcQpds9X5qre01qatYXTU3nUrWQrY7FaWqLR3D2MrjnQSEg6ttD8mlZgBIRJQrcIEIyChkghSV+84041DlWxYc2EJtutZBEdkkPoFu+NQvRpLW90wNgASFAeSUGwmMfMljcIa35LXnsr8m6ierQg2ft6A6e/TJ3dP887T//kUD0skbbXTPekceQx6vK41bldVSguuqmMA4M698VOp4Lk5FKAmG02o2ozyz0A7MGw7TgvPK4CsHKj7Q1L9SMlP0+plrVbQGSYAZaQDD0+SCJJA+Ux/7gjju5d8n5XXactepFh+TSWTutetucOe4jQ2PugNGyO7B/QCF5eBhyySgyuuvYeZHyZglK6NsYkikiJL8hbxKgxBsHJL9brWop8UnV4BYPi6Jgs0RbJXq16gDSpITYh+yZBd1/NyRhRQW3jftaEypAEiIksf93fahMIyTx9ziy5N/eH6Bo5xTiPCDJI9ctQRKAXD05qaeIUC0kmYJFda2F5IqW37NMIblG7kdIPjTVco/On+iqEHw8ANLvOU7qEfs6pDMXz/fRozbZtzUlaQtqUou3p0JTvhVTqoQjgceIjyIQUUhDSELrFwm0lixUbVi8wINQXp/VBok2Nu0sUd9SWYQlytwocIc2yPNa8Tq9fcl8FaZhbFw6P7Z4xPQqTQES4/F1r1kcBThuFDAiAgTcnn/L8gxwby7WhrfkQUlAbn7LbipCUkHLVGyAJG4DJCFEp9zLBCQ1uhSxqpXOOzGyFGA+u3wqB0hWxBKSLO7Ratl9fdEPPWFTUOpng15LRJSIJJchlTqpgNy0u0Teuy/RvVz9TMNn6y97SPKgBMJ5tpIQjutC8Q+1Tsd5zWg1LFpHnl02X8XI0hquczg0v99WHMmVRpovBJL3aCSZhyThGNUqTr0CksgwpZBEpT0E164b6k2NKFFoSEierbadZfd1gRr62wHJIwf73beqEnTI679w/nx32cwCd83kjLuuNS2P0XIrBI4rKg13u8DyDokm7xxvadEiMk9I7145XtFBDj8ZL7tza0ipChwFlhD61Lnuqi8s/GNFP5Z1lKBUVWoqLd4JqVYLSQRTFpJgz8HDI26/kRH3YQHkO4RNC17s/Uj8m95ph9WvnT3rjg8NyoupjrvPDo+K+rVnxkaQSLNaIELciwQQY/Q4mkWUcE44ppylWo+rZPnnaHIbBnKy8ZTuDFoBJR8Sct2pNys/dBqXpwbmnPZxoXxZML5KTX6DI74aCstR0QXVko7Burgh18kR2UUNQBOwLOvpT8KILJgC4MsBb9ZrUAgjPwZsouPLumrSu+HcPTGpG/HYkPdjdSSCky8tIKmgbPijMgALm/WwrNLpAi3YteEIdso9KpfV1UPue5/A6n5TWcoCHla5IuWrCtVxeF4tBkD7RicrNWd0yZYTmhmwEAkVtHjMCGnuxQRA4ijaV6N2cn6aiBy1GIZH7QuQDu1EIVrT/btQMMO9ROteoynTJBJkdMi9wWdlcbLRHaI+CzLcjutxHsDbLM8HEX4WgkUCMAFOwNQK1+ttS6YjGHWeIgcaBzs5Vq5qj+I+wc3mVQKD1yxRrX/DUp8yfUseeDi/6W3Loza+dTfVhrd5bXz7ctWmd2Ta+Pbd3Pq37qLa+NZdt0kb3rxctUm0+S27q/R8SOcyxatFQK/1VbLcw8T+5TP7eD37Cong9l2Qc+2BUnMCuPhseIWAch8B1ctnnNt3qY70QupV07B7esFQwe0NOC7SuZUYMv0cZlhKZLl5mRzE4PNeOt9MR8mGRQOwTy+R78/itu5PPrmooylY7l16z1iO7pqK+54QzuM6RpY+uuyE3st2bhKJTh4JBgXcwwQsPTQntPCHhW3YlnhAbteZlaFtS7cuwuBnwpJp2LhtkkSVt2OowXg9RpWsUcgKA/PGH2gZQ60E1paf1epa0IMCxHPg4YpedFlD4aJz6sCou3BEDtbLk+7WsSl363DDrRiouV+UG+4miR5/JuuCKlhsQjAxILARHKBKH6C8WOB4XnnE/ag0JAAcU8HdTLeyMGFJIHhhSQKSsYoGL1aMJJF2/UEwO2fxDtpAwAp12wnpVgD+030D7v8MD7v3Dwy5feb1uw+8+vXf3e6/49/rZs++4x8kivznOfPcoRK+f25kwB000B8rWAlLW5gDbQ2SccAy9yQDJE/UlGrmBl8ESdVYZl7OnsizbBVrpdITkhAHIQOMVhikDCkgRQAkoAg4UrgMsKoPq4EkgHdzmPF4RyfsL4QqNc6du7XWUEgiAoU4ogrNwbgfvB0fEKjCvurhFvxMJ1SEJHq4ACtEduobCZ9IESLPe+J+ZvsFQRK9k9YGD8DGfQlJRLBMJyHN+qsFfg/Sp1azAhycIrVKSKoWZqBEFPn0tFesODXVpNwzhJhStSnSCEhcH9KeBCRFSFpwEopWWwJkLkIMUKR4PSEJAZJxwd7Dg5KFLIjGtKr01RIRvXZp3CPUaO+ty3NAhDa/fXf33Dv2yJ2HNr/Ta9M7dlcBjNSGt+2qgFz3FkDXg3KTAHVL2ggovlUeO4igJCQZaSK61Ira0FJCUP52j47qiT3lgGZv+b8T8K0TCFIWkikgITv7UiVgBCThPPTc7vPD+C04Ek2rAEjouV0WqlgAZYdDA5wA5TM7T+RaSwBKipB8cvGE6imAc+epAMjuNCwiTt+POZ2bhWmHPiP9Ckiqc0+ojiUkAUjuUfKAFtkfAjKDY9ZPSUhyf1JBSVOBls8SxYLAUClr/ZXvbIepPc22VtJfpzMlx3XiB4psMPPxBDnAx7p75qisZeWOu7k67W4vz7jbR1sKyptLAkOYDMi6hh5MOPsAkNdNyloxkVXfY+1AASAqay8RKJ5fGZVoddidUy+rzm34Gg/0ZqJHk5DkupxCkgU8aCvhwGULSRR8ApLorkDrx4f7+twHRsbc3nPm3faP73j3Uf8tkHxTpXLtXw4NuX+aO8/tJ3BEJPkVmAWE/sei6lWVhMJHj3RDMoJydEg3jTF+BR+CNo0aSEYHhgBJnfBhIJl5BVZyYTvhyA8/NTCHcERDKEZYhlFWMDTXGZKNejQUJjw5aFklYFPpzEjMlqzql4kmA4ClNRnnXLkVcl/oanlO6BqdKeed/3G0qGBqdzSSBCTpDQkrLOihsB+YQdIfrcI3dY3+8Nrhh+NhaY2V9TSkezQ1G1LEeH00VMeRIY4QcV8U7eB1ANLZ6CnvnqOTMASMqbG3RovBNQVC1KjCOKj5Ev3NeDFitH6mENKi2b7hdLysxTHTWXWp3VMsUlEUyJSqgk4WOmj94m3TulRh2gVShOuDc44WoYSew3WvXKi2b2uRTsU+4xslEkNalJHcO5e79e/YLQqXKXvdxj8TmL1rDxXO4/p1b9819ze8bu3bdum6rZfwWBQuMyIFcCGAdDMiVkSwAK+89k1v9qfrXr/EPfOqhe7pVy7Q02dfvcitQzXt65dq2hjS/dUgTSnLZ4HPBFEnlHrDMo0LowHomZ0xX7OjoOTgaaRYNarcbUGu/9K3lmSWeBDOo1rWgy+DISJG6InFLffkEjlY27njnl46EUFJWEbAxsKfqdhigsIg+gBz0gicpeDnSts6HszasVs2smSLiBbzmOKerGWkd0/lPZ2sxYy3w8qOorUdfv8o2lvR9FZ2VwgskSWDfdxJsp5BWBevrLXcimpH9YuqALKCcX4Vd2lD1r22rHudqrtChLUNxuswKcFBNmAN4xEU+yHtir3Ji2VdvqA6pk4+XuOquH0lIDyvZCDJvcnQV0njc7SWaAuIBEPHlvOQ/HppRC1S95fX/v/Kc+61/Q73LOobWrndf9e/3XfccdV7hdYfF7IDkvsPzHWHDGUefluDZK5Yx0DymyODEZRFkNRhnwGSdiQWvP78kM9uQHIP0mprkKQsIBV6Ag6cRpiG9CtONdoMla6E5OX1SjjqqrrrmzWfuhTgEJK3JqC8Sr5M0NXyn48qWUISX3xAEu4egCR8IRFB3i+PCYNlpjvZwO+nrWcOH9mPasuQ1KPVAEnfv9kohCR6wpDy5fxHQPKxMEXDtnSw6OaJqaYA0O89ApixNUIWGMAGYNqwcDJGjBaQKrPXyL1Elakk3bBgpguARUAsUowICyC5AdGhkcJxkX/tKMoBHGOaNaT5YuQYpnOwIR8pVbRfABy6D/jW3dzzEh0+J1Hg8+/00CPgLLRwHqBLAUlI8m+Krk/hl4LQyv499NyfIVLdXQVg4jVCeL0AJV7/7ySyhTa/ZVfn3raH+91bd/f7m0HYS/2d6Hnsh4YqW1baIoJGGwo+E3w2v4Mr0L6LFJBPL5cDpl281LJut6k4u1Irg4OYfoWykV3Z6C6K48UASYIPKVX0ZWpv5q4LPBhFzyyT7+IuUzHtSjE9S0gSkGgxwbBsOkfFSLLTjJDE75RtIluCZBEoOXKOv9nsoLcbkmpaEkHaiICk7un46vaV7Uk1Rr+y0dLtJNRrnFDxoEQa9Krxtru53PISQEJwBSMkoctFhCQsLwHJO8KcW0ISKdef6lpZyUESkSQgqd0EZQ9K1oYUQfL0MIT5pDBw+ZjSSByAgXTr14QZXxoccJ8YHHJ/NTDPvUqiyO3+O//NbLfdmncKJP9V3sSnBYoHDPW5g+Ryr0iSILRRZC7dGnT08ECEJAxsIySrpVjByp6Z09RAt6wNpzQMsOXErJA6yzjbp8bl5+sYrFocCWPTrZo6BRgx6xENuOgvwoZ3LZvaQXjiVK2fggsP/lZnRMoX4WqJLK+hi418UW7SkVkCyIl23FjXwchyO3qZrgnDVm+Q13eLPMadJpJ8WL7gSHOqfyQqS1s1b7YsAHpI4PPIjDdl1iiybYoCguMPf1S8HKttQysH9i9RHXd7MEXXaLKeQRI/RLR+4HU8NjmtDf80Fdfm/8m6++20AFEWDViwpXuPiBwhABEw2rR42m1eMhMV9/ZMxJcDGQtjkuIZXu4FRPu49rKVXr+kWOuDdJ9xqU+rrjO2ciwcgVm491j1TfeoCNXxUwIARFWIuHSfUICmsHuPwOXPBUTv3dM997695HRvt/E9e7oN795Dtende7rN79nLbQQ8cX+5DOFykfB41MZ3C/jetZsK53kdxdtywvW4HffF48hr4/n0uvXh/vby7/5sr5gWtvuqbE1hAVGvQiIAFecRaT6DiDTscSJVq/u3YXxXOhNzQyIUA1EsCoLYg/mMgBJ9mLT/4/Vrd530zj8h8rTzMJmyxf4mYUnrvKcWtP8vd28BZXeVtP3mGy4EYu3umnRcu+PSMWLE3QOBkAAhwR0mEAIEYhDc3XVgYASbAQbXYRicbwYPIenj0nXrqb3rf/Y56Ya8771rDUyv9azj0t3n7N+/alc9RbtrSwWUapa/y/q/qjT9KkOfMT4uZYDzF0mjucwBsX4vtb1LW730e+tFjilw9FK2HL1Cn/DBOfyUcYrvL77HaAV7g6O/F0rKpX3tIV5vb8/pSPcWZdHveV35M68fz/HpX3ntwvzbF8oKJL2KU7HQRE94QTG9U8Cvw9HmJ0VVEp2+WYIoskyqaDEsAesfhkFgndRtKzVkcXvP0YaihTsKSa8FxLOny/emgCDbiCHLcNjBZCkMzriA+XEsC1M/GtIz3viPQrJ/hw7vTDjkEFqdkUUnt2tHG3PNoOXWIkmF4s9BUiNJTbfijyE56IKEY7wLSfUA1GrWVEh6zaopkPSix8KiJLmARBGOQlKFfzZOnynUAp3CfSCJHL8Lyb/wqX6o4M3qQhK9TCILSlS2SuGOHVGFyRsflJgvwOcWTi4kMbYH0wkAyf9bm5hYYCroijxIavvIz0FSC33eLzVDlCWaLEm0ouDL9bmFNSCp5uNqLberukQgKYDsmuy1KbLQceGI86qWCmM0FYoK05YqS/U67Cm2GiHqnqFzvV7n7jFqAYgqjOjQ7jFqQQ5OFZJoNUCbAVoSUHGpRuRe5Djc+KUiWpIWDgBjYp9E1GYhGbECJCMzGgSUEAAJKRj1FMAMInp0hOsUhq1BUl4rBaRJ4HQgGbHwdqXXufDUy4Ck7JNyVClFRSmQRFFSa5BUAZISfSIKxeUxvSXaxL5tdGSPfapl1bBAIYheTLTUuG01riSq1/FdzjgvpMV9fRMRKFLl2qOpLSiu1A0I/39IYWlMCxKQTPaBLfeqX+FEpdGk20+ZsHQ0c1ddMOq+pfRBO5DE99WFpIk0DSgxQQSQBCBVCkmYirxeWs5rU5kHybvy0+nBMl4Dq0rpWX6/f+ED8BfLzFQR3X+U8/CctpB8O58PrDnaBChfLyoVAZAvFxYnQRKzLwFIKYK0kEx1OHP71lMhKVnE/Hxv6LJCcqdYoabTdobjhcwOQHIWX1f7n6hqTRqZdcjB749v346O5ND29PR02pCbQRs7tKcdGRmiVFC2FkkaMGZ7kNQoElZILiTvLEiMv5J9SCu33QPnXas5AWZeXsp8tH3h+KQ01Brpkc5TRYk0K6AIhwo04D6HXH1BoZyH8M9/VqPK/HwxPBfT8wJTYi3FO4WFXnSIocqvY8q4TbmKUYAc1RlXndcZnK/xh/t1KZ4p9cwIsBn/eYmpKJV2D4ajyPYnfl5bYlReJNEl9iZF9ig01TtWL2uriHfEWmY2/z8oMQ48CklMLHlfUjXJkaTawqFtQ/Yh7ZQLNaNWI2oFjp4qHKNdVVWilvYKIa1CdQGZVIBTh+eo9Wzf/idSgON9olpSKyYhLRAJYQ9MWgsqRYEeVSLsi8lw5H7GGECb/z13HNvCAQAAGFJxOiUBouCsAUkKzTRKBVFLUZ0CDXBSefBLuY8+HtGqiVgT0HMVnNFXFJrJj5nFj5+drOCsfknn/bP7UWBOf/LN6kt7pjPMDqtPKiQyxUT99qnUlb+FrdCFAEy0qmD/FNKKXa3kxW3SG6oGCY29jZk7pp4M60b+oV3JN6ROxnVFB9clgVGhmQROO4/ThSaiSbXJc43YxYxd0+i2YhZ7ofjf4wDJHfeVOuILbU977OxKNSMwhgRVXtoVUaWaD+hYLb0O0aQ7bUTPf2YNPbRQR809dJ6sVx1bUWyjyELZmpHtmTLzHQYkEfW9wJBEhevvMrPoxfRsej3PpE8hHcP3Fj/ubV7D/sHg+3t+Ib2LLFdOkdz31YIyeokjyL+VVTIUS6QgSPUSejILi70gA4HDn+yQCIkirdkAql0hF5AKSUis6axpDIY6Yz/y2rxkSG7JTqMzOxxMx+Zk06i2B37YMz39PxtJdjnwgI8npXWioxlwp3bqROfxG7w4PY22MzChVFACjqqWIJkApYkiAUkAMhWS6uFnAJmf5KqjkEz6Q7uALCryjHxTAfmU2DOVJO0vatEO/rkA4gt8+7N8VANI4jzUEiRhHiyALCxpEZKv8XNCGH2F/Ujj8Wqa/N/iL88bDJ038SEtLRNISrqV9VmxMQ8Q4wCG4RcWkOhPVEjqMFjtX9SjUGkD4ff6c5BElIgv3D+tC49OCcHEEvWh/dRWtiokIZmlWFfjNWjrSCNP2L+rq/QiSd37i/BCAkjGOCqD9imksVFeaorVrVp1IalTIVSpQExMjajxzMb1+mhvjgb7dBEpLCO9k0GpgFQ4yn5Yf1NNCWl6VczE0WeIaIijItmn4yireRpDasZAis8eSM1zBlFs/mCKzhskiszlKHI2A2yOuU1ut0DT++spzR3sCdd5UR5AmBL5RZx0rj6HKhWagKMC0oUkgKhKhSTUNLMP/TitZxIktS0lOKGP9Gz6xvTwIKlw1OpdVPRCXgHSBCNtfWmeNIBocr38HSXaHGvaUXAgggMShWRTXz5A61cpBT+aZnVBqY4/mMWpkFThMlpPIDgAJVnm2f8vqmUFlhaS6NFUiR9v3x4U6tOdAr26ykDoQK/uFOzdQ+ZXApSodFVIqjMPagj+bc9/WlxoinscSLpDmV1IKigVkPjuKiS9KtkKjSALvSK/1iD5OK/BL2fl0VuFfHDOkSwEAwIZ2Yc5uLzGvs/rGyD5Dq+DCslX8kvlOV7k52oJki8UFHlbVjK2i9cmuPJgT9KFJOb5ukGOC0mZGIKxiDbViv3Ia3Izk9KtMFpHRnPZwW2p8eCDPmjzn/6ZNrbxxu4Z7d5bwIvnKqb4Je070LaMTKku2ozxKXbQsrR1WMMACL+QKC/bCMa0GK6MESsMValYAiRZ2Jy9Jdd6tFojAY0mtdrJpFoTcs0BBIqOMTnKnNUo4Kk80x+k6VXdW4T/KiRjsKx1kyvsScqw5cLCZPFzPs/v8+lczGFLzG2TlKtNN5ghzUXSyPsyQw9piTf4w/VOcTn9vaSS/lFWLeXZqBJDq4jphSqiDwV2ReLgYTb/S7xp6P+ysxoR2QGeLvAEetamzptnl3K7RppuGkfM0W1RgNuThb3KTyrMlxSvj7FScL3xMST96E9k+WrKKNC5QqLEGMMojuiMT3FZwegKe5NJcopj3KIZTXtK6tO5PfU6Pa+PwR6i7iN6jf09O3sRQKqCA5B64wWunxkKDOlziFBNaSsqQzrzEeOrhqFfsJe0NsRG8KI7xqRWg5N7myjPRmfROfVJEjCygvOMQvMH7aPwgsGeIguHyHWBuQ0ivQ/O+2YPMGDj18HrBab3kVNch9eK8/M3831xGpvPYJ3Hj59XnyREha0pOJeff06yXGAGZvbliLK/KDCzP/ln9CPfdH4fh/Uh3+Q+Aj/IN6EX+cf3lNYUbWlRIcUcnMqPnZKozEUVLRQDMBm20fG95W+rVbWoEPaP7cEQtr2mw7tKn+beQTXUNLCzN+9SZl7aKmMdUh0fYqRDrNGSgtYU7ePUFhVU26LqNtBQs4/89dWiUP9q2c8M9a7ypDBV1x+MSEOmZXdtmWxNfMsHud9UlvB3qZi+wtZJecL72DVS96aP2MHNOAD2jDycfU1N00r2iA/AP+IDfuizUjPeS9aBctOj/W5FtVS3Yh18KDdX9AKvvzh4R62E1EvYwkI1K4DV5pu8tsF2E+lWtKuhzeN5jjQhBA6aZYPUBu951HTw+igBRaFplUPbnA54xl6k7EfmZdKj+Vl0b3G2GJ5jzb83N58eyuGgJ7dQnH9uKMimraVZdFlxBm0pzKLtvK7flMbRZYc8WsJr6She27sd0vY/D0n89Mrp+M7kzE60Mr0jbe7QkS7rlEaXZGUmQTIpasSeJPpZbLmuiO8nVnSZRgrI/y0kU510XEhCcJeABJApkDT7iv8zSP5Vz1tIApAuJN3HmaIf48iDXD3y+a9xtIkjt/eKKwSU72IuHEDpuW0US3XbZ/IFKk5SS5D0pg2U7Wt67u5vtCTcnlrg4/pGShQqX0jjJoJCHXioNvHrB/gIOYTorkulwC61IKc1SKZKq11/qrpUgdgSPKO9urS4lxh0im9EzgxHY2dmrM4ASFW4n1Gsj1G0d51ElApJqWBFFDIUEzXQL8hR48ge1Iz9MylSwd5jH5PyZHBFGGIAlCuNJFsCokLRVXTRULleoar3U1AKeB1Y4hSXY3xb0msvGCSKLuQIdsFAT+H5DZ5SAQpF5hoBsJBeVmgG5tSLQrPrJX0MWJqUcKICV1KqDElII0WFJO4XOKyfyKvYReqVo0pAshlRpUSW/T3FJ/bz7tM8to/sYUoF8Yhu3pBpAFJgaceAaYGVpl0VkgBjdHg3+T/KwY4FJSDpCtW3qYo2mEkm0X78+ehbI6eovjUuQLUWlFUCShS2/di53DPcUFgqHGE+kPA/rvI8YV1AaruXO3Xnq5oaPq2W3ksp8Ck1RTtyYGvhCacv9Ei/zadYv57k4AWARNbtxfwc4xLmFBS+W5qwvwMkodYg6QIyFZLP8RqJKSRSu1GYvw8kkf0DIB+Dy09JjkDyHnQt5BlAPsJRq0JyS0kmXVqU7kHyho4ckB2cRfP5Pn0PPuT9ZUOH3P6LgGR1+4M+GNHu/6HjOBTf1DGNLs3MpouyMsSiDu47O1JaPGRP0jrvAJAo2cX8L9gJ/f8FSf1nexElQxDyLOQKC1uEpLZ6KCC1MEch93yKFJCeYTA/p0DSjqJ5uqDAezxSDKpnC4wTP0D5Uj7DkmH6GsMSRTrYg4SQZn3HjsX6R4UZpfNJha2E4yPOf5clhMnppg2jSlpD3H0Ld2q6Xq9DYt37uPdNHeWV6Msyllkf8hcBX1Q1DUBbB1xswl2qKNatttXqUDf6awl+CjX3tlQAthRVumqp6EahqFGknnf9PgFHHVmFUU0QrM8gXGdUJ3K9VxGNIHqMjerr2bdJa8P4xN6jRFMMqcB8BsdCjt4WDxbFFhmFFw0SBRcPEUX4tpYUXTJEhPO4P54L0tv1ujCuX9AgCvJrQno5bB+D++pzhpcmy31N93X0ecP2fATPYSWXFbIW2J4A8lkGmEj7StUu/i4MSkSU4gbEfyu0mKDdRCtmvX1YLS46rK854LCKcGQa5WgzxoriPCsyqbekbLXdRIt/sC+MvUukZN2IUqJKb3anHWxtTR5QIOTNzLRjxOQ2p1jItebTalsdXg1PWzGBt0btqJBFS0mi5zLZwQeDoY1LT4XTewx/2CoRzkPojdb2LzURUWN1wPTb2s70TU2tXP6XLQwyM17LPUh+VG7aNFCBCnAhzfowr9UoaHypINdUsgOQDiQ1osT6hGlAMDrBvFkdFi8VsCUJSGIfEtL1EeulgWSeCOutVrk+5hTsPFqYLbqfIXl/cYFAEro/3wg2pLfkYVpUBu1goG4pyKHL+HlhRXd++2w6rLD0r9UHHPhhm1/KT3nb33w8PrMDrcrLovMOOlhA6UJyu1Oo40JSnHdyMiWP7EISKdfrYCSQk+lBUu3o9heSD/JzSxWr+rHm54okiixyJnbAXScFkgaURR4k3QgyFZLS1lGMoabGWf8FG00+Y/V0K6DEBwT3Ayhf5CMkgPLV/CJ6vbAoCZTq2fo+qtNSIIkGZRW+TN/VVEvP4pe2jzJ1s781MKbuc3zhVszt06hclgRJ7Kuggg8FOtgXBCCbe3RpNT2aqtZAp7BDROi5qKREh3o7lHqdC0uFJKCIKDDet1si/epEkC4oAchwf7i1dBelQlLdXJo56ogP603xRniaDiCCKTgrJr2P/Ux/IVo35piUqEIpZhVfbKRACi0ZKlIYpiq2dKjIBZj3nEudx1kIQy7EPHhaSOrjIsuMFJLuayaB2j6XB3nndxFZ6CPSVUnky4rNNfutZg90EMXwd7EGCGJQgP7LqfWyX6t7o7pXGscpLk/nv+e0/iZ9PRlgNQIYwxN7iUITTPWsArLZ6c90bfREOj/Tm2pSZ2TTsbAMVB9aBaZAM8Wg3auuHeS4KTmXvUpaNTXQodLWG7aJD9YASljcGQMCA0d8p1044rxeh/t4sCwvTUrHfl1dI5L9TgeS+v3+zBqKYG1B9enTvF4Cko/mMbAYfi8zuLD2tARJaVPjA3isT2pkjtY2QPIvCkoHktiPxNoIAZKIJn8KkmIb6kDyviITSWLdRzQJAZI3y36kgeTWwlyB5IVp6XT2gZ2o/jcHfdzml/RT0u6Aj0emd5DGzfOz8uic9h3ogux0AaWYnWcbg3O3aEdNz2FfZ4YvZ3iG5tC1KNz5CUhq4U4qJGWwJwuRZCokYd6L/UhAUh1xvH7GgvwkKdhS9xLdCPIvYmBuokhAEsLlF5x+ShW8EZ8pKpBWEFhAPSuFQI4ROl9G2gJHZTKSij/8MAlGAz/6JuG1iP1AbMDruB39UnzNH/pvKytpV00NfVdVJZdTh70mzbSzEztS5d5PU69JpsuOAGukd77mCBLVez7Z96vzoBXsUSXy0pK28AVFL7jeva5F9a71XFS0WVxSm16hROI22RfsVZPkvqKvG+2TKLrBKRrNaYAxwFa5zejir4qiDESQgKO1NfOqGW1lIwo6ZD4iTLztyKrwOFN9iUITP/bRsJjPZRAsGkKBZRwhLh9KgRWDKXg4X17O0FqaUAi3Lx1MvmVGoWWDROHlg1uU3q73iawYIooePlRO9X7BFUZ4Pf+ygeRb2mDE5/18nb4feU98HtfhNty/JaW+L+91lxtF+L0bDU2SB1uFNVLI2IOdZaJG7FfiVFtJtKAIxUsoYsJBBoS/J4T0re53yl7vYX08YEK6f6k2fEh5i3TqiTMqTEwM7HQTnZ+p0r1MXI9CLACSRvXZB5rNyCRYs3ZAUc3pEbmqUFiEPWsowJ8ffwNHs/zZauLPUxN/Dn/kz++ubhX0LeZWVpVLhgYHoDAlwGX0IKO9arczpPxbHKjy91aFyyJeD6BvOGr8urw8AdMys+2CA91/2KrVlxAQ8Hr8e16nkV17mkEKv1UxOSk32Swdxq4j9RSSGHrwSpGZU6kpVxFMCFgKSQ0idH1ENPm0DUoUkk8UJNzQAMhHCrJktBbWdaz5YkdqK1sx0Pk2jhpv4sDq+swc2sZr+AZeO9cxR2ZkdKSemf/h3sjUn0tOW3/c4PYHfbAwvSOd0ymTNjDN4eG6KTNdxmZtyzIwTIWkOx0Ee5Io3NFBy9dkpQsoW4LkXU51a2uQdPckH7UjYNxI8qcgiXTrz6VZ/2qVCkn9MGgfZWuQBBxR8apVr6mQfFUmcJRILyXcdt7gD8u7/PgPUc1aaTwfdWMfXwTAcX8guc+kdAeQSTBNmUeZqk8rTXn6N3DOQU8jor0+3STiQ/QWsr6aCipYheFUQYnzKq8IxoWmhaALQheSrtMKpFBVqT2Zvq4Kl8WRJQW0qExtHmDmOTYP7CGAjNb38CAJQCokcRl+ojL2Cf16LUBS2jtmNlCEYRBfNoLChw8XeUBqAZKQf7lRKoRaE6AIxY4YRvGVwz3p9eEjEgrhtS00Q7iM61cO84TLCkvcV+U+hz6vvqYqfrhRbMVQq+FJii8bZqJgG3EiuvQqemfWe20q2qKikAQgXUgibSupW7082zwWqVikXT1NSuxPKiSlyMeaFUTsbE3sXYpG95WZmWrUDiXtYQ6uk8vuVBOB48jeAk0a2UcGTwOWmG6C0WYuJAFImQXKnxkp7hrSQwq9gvx5C/BnDAVie/nzuJsPIHd1rU6CJE4ByK/KS7zrvb5kC0mcfleBgeTl0ooFQGItgHAeUSe2ZFCzgH1KVL2i3xkTfl7ILxBI/oGjSFSbPsf3hyOYwDEFkmhVe6+sNAmSL9tpRz8HSReUz9s1EWvtH4oLPMcdz0/bQhKzJ++zgRHWfQBS+uUZkC4kt/B7P5t/hzUd29MkZtH6ObMuafNL+2no1O69qZ3a0crfHEhnp2fRbzM7iesBqly3ZJlocmd2Yn6kDmG+It8IwJRUbI6tcLWQRDT5v4GkhOx5RmIcUJAnTao60gqA1HSrC0kt3FFIJqpRkwt19J+tAtx0MDGEFKwW8+AD8Xxhnvgdau7evYxTPa+GwTgywwcQ08TxQX6VPxxv8u/5XmmhHAV+Xl1J/+YvADbpTVoG7RfV8gX5Rn0hUelm5Q6E1QhUJ3e491NptOoWABmZUnLZE60uo+8wyaOnSR+ZcUUWVE4/mUZhEEym0YStl1tT6uPd50id7pB6f1x2o083WlS5UyJkZBWDTwYeS/l/D2+EFYR9R3//GpEMGEbrwKiestBiwUU7g+eLqk396HVEAQ7SlwzH0JHDKLhyKPlWDjI6nKOh5UbBFQM9eClEQysHJyl85JBkrRoqihw9TBRdPVwUWzNCpLerglaBo41Ca4bvo+BqBuXRVs51rrzbWWH7mpC+j8hRQ1sWQxhyYa0RJ9K2SAH75/YXoUpWC41QJCTFQ3ZP1L/YyLeoQeSfN8BU3M5iKKJqeIaR1xuqDkLqeesYvUM6Wiw1wpQDn1G9PMC5AuwQdXptPiN6ilEETN4BWgA3YGd/QvDnVS9bn30sWlaQxgUokYrFniU+i2rCrsOhYUrwfU2pjIv7vtKc6rBxzFL9rrxYtIujv918sPwjA24Prwu7eU34sbpKhPPfA5oVpkoWU4Q+5HUCoMPB+bMMoqd5fUX6E1tBL6IFraTYg6TaZr7nQNNkuUokilRIor1N1zeF5At2rUQVP+RC8nmbrdN+ySdt/7qYvBTnMShz6OG8HJlfKaMReV2+idfNG/j93pqRaZVNN3csoE05hbQmJ5/GZ7aj2rRf0F5k0gDm/9Pm0zk5GXR6XiGd2SlD7OnOz+hEF2WktwjJq/mfA+1keEEApuxVZpvCnathS8egBCTdEVn7HUli85cB+UhunpwCkOjHEUDyB6AlSCogFZLJLRvJkHSPihSSCkhEgSipfrGkJAFLB5AAoUIyVQpJfODwAYQZOqJJQPL13Fx6pzhffBe/QH9VdTV9VWM29OHm4ULShaBGnFoZ51bNueXlPwdJc964+MCoALZ3u9AP2bur7K+YKlFrNO1MX1A4qvYHijrFQZ8jVQpDfT4FnaZGE03eyX2MkESeOrqqf/LECAVjKiTRbwchlYYIksbagpDxpsdPnXOw/4j+R4mQsCe3fJiJIBmQLUHSAHJgInLTCM8BYkvQcaEYP2akdwo1HzvKu10FoEUAz2NGUOTYkRQ9bpQI51W4HDvWSG937yOPXWMU5deJ2tfT15f3czS/3qphcqqSy0fx7UcO92AJNR8xnDWSaMUIiS51vxRVsloFjCIg2be1kaimpaHAElukNN88Jj6nnoijS8hzAdKeUbgVwalocj/PoF2moaSYEyTSsH0ElK4Umm7hjxT/DOlqBlEzKAFIGpvsWSv2ehaWMD7A/fBcZiZnwshAP+sCy951soUBP1gIY+MgjJr70Y6NQ9sVBo+nQlJkAbmnptqD5Lfl5nuOKUL/5O88Cm/gDf10bpZAEltAz2PLqKLCS7W6kPy7vQxImiyXSbX+raDAs9H0Dvx/BpK6jmKdhaMZ1mMXko+XcHBThC2zXIEk9iQVkjcW5NIt6RkeJG/qkM8BWR4dxecbOx74YcUh/2GHnVY9XNv+5uOJHDUu7ZhGZ2Tn01kMyAsyMugSjgxRvLNNinQQMebRVfxH2Mm6nM/vyM0WAZLaQ3kdw1T3IzEiC/ZDtxfYXhn+Y97Hf2iZ9GGB+IAYmidDUsBoZ0Ma0wA7OLnAHLX8uahYhPYOFOi4adZnHTD+lT8MIvuP9aBo9x9xJKZRJAQz3zfKzFBTjJfCmBjk93EfTaf+rciYCuDoy6sK0wiTP2QQLOnwXJp2RTQJ43PsT8LoHGbFSJt8WWvKwhFJ7u1SS3s610jKBb2UaM9QuZfVN9K9nHAAqZDr1AFEbbK01PwzO6sS00YwEmtPLz7yRRUo9u8aegpQYOOFaEwBo8UKaiyt1+lsRR2q614nR9bWKkx6EOsTxQ+oEtSpGqm2YuqYgvfgGlpLFaojuY+tONTn8RrJhyQKM2R/qd7sSyFqkNQcDAHQAD/ZVFtiT0z6ANHmMG+gFKkgOmpeZlKRSGX6jxwscGw6kqOgo/h0JUdHfDnKEDQaamQBE1rDjztmuChy7AgKHZes8LpRotDxIym4doQI50O4jhVbC8CNlPsGjx1OgeOGy30CuC/fL3LCaAqvb5TzQfsceDyeM8LXB04cKQqeNEoUwilfDq3nx68bLqdQeB0ex+9zLV933DBPUX7PkWPM7wEFVw+154cLbDUSlWh0lU35Lh9MTUvqybfA9GJCqAaWyt/lSPEiXT2MAiuGmgMP7PEiTb3EVv4uHCTtKNK3yRGoPJ6jTDU6QK+ofxr/n6b0pqZJPTn6N5KCH52+cijcgHqZiSWIKHUI9fhkf1mkUn0cHcJXds+QWtHeoZ3lOqRafSP5MzWmh/RyiuzzyKltTUF7CdpM1BkI48Ca6+tM6wh/n2C2rrZ33tQRji7RMpKYv1olA8R/4APaXbzm7OXvLPqVdf4qwPkDw/F7mH7IaL1yGdqO1jKsV4giIaxtOKB/GSnYEgNCjSRdqakIqloh8aHG2qZ7kli/GGTGOKVQChOlOJHXSV0rIW9vUoKSxCAJHWiPgAYte7pHeS9fdysHCDcUMhvys+lWZBeZMzdkcaDVqZDWZ+bSjIys13IP+IUCEj8Vv2nz6Yi2B32wMiuHzswpSILkVo4EAcnLsxOgFEDy+e18+45cs0fpzZLk59D9SEASUaQ3IsuCUudHpla1ApAPot/mZyApvqq2gvV/AskXLCgVkgCfpllbgiRy+6+WJCCa+JAUtAhJzenjQ4ejNCniKULTbj69UWD0Nh9g/INvR2SHKR+IBlE2rpCUaLK2Mgl8qVDU61TqAOJNUnfcP7Qnyy3uManWGtrbG2OgunmQBOAAJpwqkFwAKgRxHz3vwksjOBd+qZBMhZt7W8JWbN/XdydB6H3dx2ufHCCpFYpaiCH7USPNrEdZMB1IIq0ngJxdb/YgFw8TQCJCwv5ghCMoSXUeNYQCRw8RYAT5NMrXxRkQRhx1HWUAGV89QsAIAXQCvHWNSYqdOIaiDDoADVK4ha30sZHj7WP5vnhM7KSxovjJ40Q4H8X1VnHcxgqfMjpJEZyezM974ihR9CRzPnoCXpejynV4rRECSyjO7zluQe3+LhKtrm30IlFErc1r+HTVSDmgwF5tcHGiPzNoK3ERQUZWDEuCZAiXl5vCIESZEnEuGCQGCdrrqbAUA4RZDN8Z/SX9Ki0mto0EbSOYZuKO/nLBmApIwDOE8WYsaStBWnVUdwNHC86mEXwg19hNQAnhMToJhcb3E1BSYy/Th8mRKFyAaHAPM1B6QBf5PqHCGiYWAKWn7jXeHFZxirITcTBLFbBErzJGxnlDyhmILiS/RFaIwQk/ZqxDAORzHJlJfQUqXRmS8HFVn2Z3nB+E69Aa4kLy5WKzPQTp9pFWs2pQ4dZbQJqJg6nKM8UmmpS0K3xdi81kEPFwzTduaXDZUUjChu76tE50R14RXdmBOZFTQcd1yqTxbQ/+oM0v/WdQu3bvzcvIoWM6ZtDpSLdyZHkRw/EyBqKAMsu0g0A4r5JUbG5irmRrkEytbr2nhdaP/YWkGpArJNVOTiGprR0qPfJRyQfDrUZF1Fdc7EFSJn+z3i0tEukYLPi1wooO0INgdP4i/+O9NIUtoUYKA7l+2Ze0aY3XCgplIsgbecYaCpZxn4r7RqVM/cCgV1SaojFZTJT3UwAsIlE1YBYTZgtMdfdRKyv1iv0KTiH8hUVlHgoPxMx7UHcppTe9YXXSqK1Sw2+9n39Al33uo/czz5M41bJ8fXxLj0mVPha347F4PVeoLoSCg7qJZG8IqS8YArCQUpOiC6TYRhlTbknLTbDuL6jInG7dZeb0I988XngXcgSzZKDstWkhC6JD7An6Vg8h/xoG5XEMyLUabTEU+br4MSbyilqYIHoMnDDCRG4cwQFOAqpTx3gKnTaGgqeOFgVOaST/qckKnMAwPpFf+1R+3tMZZGeNpujZ/LhzjQJnN4pCZ1mdMUoUtgqcNUYUPHusnIZw/szRfB9+zdP5/ZzO509rFAVP5ceewlHnyRypnsSQPGG4F2Ei6oT8643we0EezBneAnEAdDUDcNVgCh4xkIJLsffIUeWiAUZLG0x1bUoxUWoBk1v5i+cAcAOL6lkmlRuYN8Cz0TNuRCnTUKbADaiXHADpDE13cLUXaTqVszpPE44/mKXpZzj6RnWV83D/aRrdTU7xOB14DeMDmsBi8DaPgmEBR5HDGJCDGZANNcaooKGrZ7juTSLRyLJrpZipq61iE2a38oHrHhws11TKKDr0Lu/l7+9eXh8QUe4qqxIbSYzIAuheLILzTa5krv5WYg7w3ymCWUCprFWmqr7Y9kUaOGLr5/ViZ13yoJcAJQ7+FYIwSzFK1GwgO4b7Q4Dk885wCC2olMkgdnoTbEbv4Pd4C79fGAhcm5sh+5KwML2yuIxOYkDOY270OPAXuhfp/kwoLHxxNr/h9Vl5AskNGelJkNyameVpS0amnAKSO3Kcwh0LSaRbYU13U4EBpAtJ3ZN0IenuTe5PuhW9kX+0hgEuJLX1Y38gqf94/NNflzRFiQjnFZBIaxiZXiN80GD3JMU4KZAUOZAUMGpkysIeAvoo38wvZFDm0Pv8PB+J00aFB0lUmgKUAF3qeB4IA2Ax1w6nkM5/3NXZTFP/sWtn2tOtC33XpVqiS4Wk5+5TYSaOfIPCgp6dyde/LgmSibFFyQDzmrStfg5wkDTpp9zXBWiqcH8oOqRnEkxdyOr9XEiKnZyFpAqAxD4UvEEh6bubaKINFIBgnwvN8UjtSaM+L8RhREBLBwkkzX7bcIEkCloCxwyzadIREn0h8oqvHSGAbD6W73t8oyh+vAGGwhERXJShGD1trCh2+jgRIOkqeHpCoTP4fqdxJMcwizPYmhlwsXM4Qjx3HEV+m6zYeVZ8u4hBCkXOO9RT+NzxFGVFzhnHoLU6c6wocsYYAWYEwLSgjJxoAKmQRFpW4ajwR/Sqip8wRn7vZux7rkHxzxAPeIElDQJLpGHRwoKCH4Gj3dd0K2whbYHx2mBQOcwHLpKShSmC3fNsCZICyil9pP/SBaQrAC514DTgh8pZVNAK/DAibHxvyTaExa+2p0ASp7gvTnGbQpIaewooiT9zxKBsHlInszTls67bCwxJmWtpU68AJJx7AEhElYDk3ppyASRSsEjFApRNVWWsKhtRVksLCPojX5fWs1wZhIz15tXyUlm33oPTV8m+5gG6bgGQsna1AMlkUNqixoJCq3wv6yZrp70vIPmc53KW7xXwpELydn6fN/P7vT4/i4OpdLoirQNdy9w4o80BdG5BCc3omPZWVZtfcKpVf/occsj7UzPz6PBOWXRqRgf6bWY6XZiTTZtzc+lS/oUuy8wWOEIYp4WCHqRht+eaFOzV2XkSTWJPUqPImwvNfiTkAdKaCbjp1vtSjAUQpj+RNOXjpyGZ2vT/fFGiB9Lt73H/2RJFWpDhAyYfHP7A4agLJuLwOHVNxHEeUzUwzPidAtPagagS7hYAJaRp11fyi8SqDsbDsI3CYFScoqoMdlBIu77L7xt7k2jV+JK/JLu6ooS8mn7siWGynelHPsrczV+iH+rQpMwRIn9pvq4qoS8rGHLVpfQtH2l+z18m3I774jGoVPX1qqPv62okmkyFpEaV33etMPuRA7qaMvaBXaTxGn6X4nup8/4c4XZV6mUVGrhFQ5OtxLQEH/ImbLQgrTrEfVKLK3C7ViNK8QVLyvKdykWvr200RwrjjTE3JlEE0PB+mCkGQW+e7HVxVOLn6FGileUNHOEM4gWcF+OVQ7yiFSz62BNEFCXg46gLQAmfzEA5EQAZJkLqMnYyR2cMRtkHZMBBiNxENprTCK+Jo0PfGY3UdGYj+ThKbDpnDPnOHespeP5oUeACo6aNo8m/aSw1XTxOFLh0gijECm4+VBS+iEHICm9iCG/i6y88lEIb+bYLxlPofKOIVfi8saIIv2747NEShQZPH0mB00ZwJIvfdYQRgxMKWPlPVdmI95TGRBr3+BESZYeP5Wh79QipCPYfPliiSEAyaA9C0I+pkbq2vGgLi/9Io+CRg+X/oVXDGmECujigQeTvn91Hppaon67Y9+H89D5J48XQg6ly3X4AU0Sd2NfEKVLv8an9iTDabFp/is+oFwMEPBf6QP1TepNvci/ZD/1hXB3tHc+f7fH8uRvbTRRhkEbH9qA4R6DhEV2T+zbrGZL9qmX+pZmByeCEGUHPGhn4jXmt7sQdnW0JFyxfdbVUvAKSMBP4R2kZvVyCdSbPbO3wQTwGKfy9tJw+YuB8XFia1BMJSAogsV7Zg3vZCipKbDO5kDSVrjagYMhBMtTBZsdecdK0uo2l668WUv4hHzZ5Zl0XQPJ7vbEwh25ErUpWOu3M7EQ38oH8KfmZdFjbA6lf2wN++VGkTARhks/KK6blHTIEkudlpNHG7Cy6hEF4CUeMrUFSi3quyjLpVkASUSQg6UaSHiBhUdQKJDWS3F9IPm2Ld55xZkO2BknNrUNy9IRI0qZENd2qkHRnu6lZuGsY/l6RSb/iwwd3C0SUkELy5bxC8XSF8TngCBNi6C1M+y4qkSIeQPIDFNPI3mSZRH8/dK8SSLpwxCkuQ7jcEhxVgCQE4H7bucoMhvWmqZd42tWNj1hh/N2AyK6HN1xYChFYOu9P7bxcSy+1/Eq9TsEpTic6pNj2q7kAbA2MrvSxkFuqr+X6Mr7KShxYRpmyf5nYgcrGcRwpTBjgQRLmADLseIYZZaWQRCpPokcGI/YVVVqFGkLBynEmekJUCEBC0VMRJWJvb6QIgIyfkogYw2eOEUXOGmvEUVz47LGS/tQUqIijv9B54ynw2/EU3HCop/DGsaLQheHUJ1EAAIAASURBVEbBixlsmxmKWyZReOtkimybIoriPF8HxTZPpLhV5OJJRpsmUvjCCRTZaBSzim4YL0IUClAinRs+00nbnjxSfj89KNDUbIAjXKPRIqSLJVo+qVGia4m013IEftxoiq3mxx81XCAHUAKSqelsF5JQ4CijEEej+J+4/Z2ILgHKCCJL/N/mmwIfVNGq0TwqZGPw1nVcfiRr4KRj1e0H5wHGyNR+AkWcxg4z/ZoAJM0eRDRvCJEzcQXuQfgMAZTyHHAIGscwHMNQbDQKj+gikHQ//3JgOdAUs6HADAb8ob51HiR1j1JHvamRur+mIgmScNdC4R8g+UJJPr1QyrCqLKO3KioEkgCkQlIBqetUS5DUFGrrkaQt2HEACSH7hse9aOs9sOY+4xRUKiSxnqdC8rrMNNrW8RA6n7UuswMtycuhXgf8CqJImS3Zrt17fRiUK3PyPUien51JFzIM4al3aUaWAWVWDp83/ZNbs7NFSLtekWXs61xIQm4LiBbutLQnqfuRDzGs9geSf7Lm5c9g9JVjPYdeIfVVfdHxZXU3oLWJVv/x+PBA0vwvRS6lSfpc/FQrZIyNlGDz0RyaeSUFi+HKpYXywX2pOF8EH9fXEUkWo6qsiv5eWUPvMSTfQTRZXGYso/g9/L3ETBz/tKpQ9gm/7VYh0STMklW7u1RJGrape2eZb4fL2LdEWhbXYZQP5OvRRS7jFPAERLFPKZPUK0pFX3IkKi47+HLCum0QQ2ZwLw98MhB3VE/pGZNSd9ucnQqw1OtdoLkRnwDN3qaQS30evZ+elwHHKeX7qnBrGmPAGBuPEUwMQox3msKL41SOYKYYw+3gTOv2Mn8gR5ANss+FFCAWYS24ia0ZbvbWeJGWYp3jOKo6kQFyOkPrrPECNv+ZJjJEqlLTlZomDZw1jiE4XvYNvWgNqVEbwYUchS84VAAmumiiCBEg5L90nNEWfs2th5J/x0Ty7ZxMvqumkP/qwzzJ5SsmiUI7JlHgcoYon0YvPYwim6dQ+JLJIoVm7OLJIoVmlN+DvDd+j7rfCWBGThsp0j1O7GdCEv1yFOy3+5v4nXFQgH1WHCgAlrH1DNZ1o6XAR9pWjgTcOIpcPIAiixhoixlAHBkSQ4+OHCYFT2HbA+rjyN1/jOnb1B5RABPPETvC7GeqK1BsCSz2GITz66XYBxKzeccEvhnnLTjRh4koMzitt4k2Z/T1+jJjM/vLaWQ6Blv38QwRYJgAoaAras3p1ddWrofrEMO3aWIP8o3rRnvH1FHTqM7SLoJJJhAM2pHx0AHeGCgtWwcoYOMDVcyv1NF03lzUXp0NKJGGtZDEniTWIhygo//6pbJCiSJf4e/3OxVl9D7mUeaX0GcFpZ6RuULyTSsUIqIgUdOsqUoU8pjgQoMKD5IcAEjFv72/QlL8rO1AZgjDn5/KKZJA6HYOIhSSNyGSZEhekZ1GFzAbji7KoFFpB7+/YNQvxMh8f34Gtjng01kHtP0QkDw3vRNtyMoQSF7E0WMqJDWaFPHtO/j2KzOzZE8SkFTBTAC6IzfXg+RdOJ+X1yIgH+Y//P5CUgDJHw79J6m3amuQ1OpUhaRXYGMLcQDKN61HovqiupBEI++/qqrFXBhzIzFoGbPa0A+JD+7fLCjfKCoVGL5dWiFwfL+qVkAJSL5VUm7Ks/k9vMdQ/ic/5uOKfH7eYvq6rkyiSYBOh74qICGAEeD8jiNPwNKFpIISp3u61xpQ2iGxuocJQH7H0ShSrUG40gzpLcKXV1xIGnsRMXDQVA1Qug4mLvhcSKZer9dpg3YqCLUnzW3eVscUXCeAtlBUw3GV7jG2BkkAsnkCRxeH8cI4jRe5GYMoOp2jlxkcAcwxi11oYcJ2DYsu+v+8qlQ06h81WBZ36Tk8cQw1nz6B6LzJRBumUGzDRNnnwx5f/Gwj7O0BFhAAGT53grdnKNHa+YdK9Ba/cCJFreIXTTa6ZIoottkoaoEW2srg3Mavdflkil7BsLvyMApclYBj5IaZFL5+BoWum07hq6dSiG+LXTmVIldNpearplF8yzSKXTbVg6U+P16refNh3vuIWVDifXr7nBzdYh8UimMvlKV7mhoF49REyfw3OGO87LM2nzpWomk6iSPq9fz4dfz44xrlbxtZMUggGV7YX0DZzBGhQlIi96ON2UHgWI7apQjIMTiA2QIqiFeavUyka+EK1LxsiIAyvqDBq4pNhSQxzEQWmIBldFZ/71TBCAGUzbNNryYqnmU4tmOnF3GmuaCHlhYPJ1o0zDgLoadzSl9j2D6hl5gRoE1Ep5hga0C9ZGUOJsZ7DbLOUH27UqQPH7BiOk3PLma4eZ86gaevc6VAEnuSgOSngF+h6b/+WzmvN3zg2xokIS3ckVmyGLyOqJOlBTip8uDXWiSJraTixHaVpls1knzaFvFgwMQfcotbhOQNWem0nfmysSCXFqcdSIPa/kqiSPenJj3vjRM75NAZDL2zOUq8kMPls9I5PM7qSNtK82hj2iG0OSeDtufm0+UcUu9ErwtHj9dk5dE1udniuHMDQ/DmnFwPkLdxNHmHpFzzZDI1/nj3ChzzRQ8WGD1QkEMP8XM8lpsnkPT6bnSOJP9hn+T3g4GfzzDMnuEjI/FSLTb/MCma4cuvFFfQ3wrL6IWCEivHYglDRAuLvKotLYdGGhRpig8w+JQ/fF9Y2ze49H/JoIRd3DcVsI2Dr2K1nGKs1Sf84fonv+Y/GLDv8O/ydkGe7Fe+lTKMWeTMdcS+J/QJBjHbOXEYkfN9166esw3SMeiv2tvN+KsqKJu618h1uA2FAHD5wP39vSr5crkMi8V9tXl5N6Z9oHm5plScQHyAZIMxfpaBt/ylDo3tJYUJmOknjdljEzZg6DvT3jNtrk6V3gcKNvaSfUHAC6dowla5cIMdXKqiY/o6VYe95X0l3kNv83y2WhWpVKRUsecIpxz1ENWhxZIem2srIxeZqkvYtqHnEZGi9jEGj+VI5pghUrWKFogfTx1CvjNHUOi3HCFtZIhwdBe5EJGfUeD8sZ7CG4ziDJhmhg0Uv4ABuYkBeonZN/RfNoECWyZSYNsECm6fKNEhFNxyqAAxsH28yHf5oaLgDobSTobYtQy566dS+IapFLhxKgVvYSjeNlNOAzdPk+tUuE/oer7/NQzVq1lXcGS6nd/7Voif61I+3TzenPL7ilyMfUzsXdr9Sn7/KA6C3N9P9Fuj4HljKHDuaPKf0yjSyFqlEWeAI2vsVyJNLRXBaJ05gqP2Zfw/WYqpJn1NRHkEg+boRoofPYpCR/P/4RiOQteOMcVPHFWi5QZ9qdJ+g+j+yMFG1tnIs+mz1bAwKAjYCDO6eKCn2CK0lRj3H7ST6Hgw01bizgkdKEbu2n6CalqRnf6Cfk41qZfpKzphxVbeNs3uS3tnmUkmUYwQG9NDei73DOWD3MG14iXrH1Ar7UqwT4w39KTmft3FEjLeo45i3btQtFtnmWHp615mXXuqxez8i9JK+qioXPQer40Y4o4B6h8wIBMyk0H+wQfnqvf5oPyDktIkIWULSbRZVORVwyLaRJbrjfxiGcSMoQ2YcKRpWK/6tUhHbBmYot0OEaQMuud19s/ZZfTHzBK6j9fxWzhivK4gg67NT6er8zFgOZ82ZRXQsdn5NCUtm3q06/Terw6SVR1z3gIkT+7QiUGZQecy+TeX5dPGHA6RM9vTjuJcuiizk0SU27JyaUd6joki07PpSkwDSU///wRJWBkBko/nF7QKSfTlGFC2DMmX+YMESL5YWLoPJEUWki9LWXSxNPxjBiSqWDGjDZD8v3YAKnqTvuIPnkLyu6oagSTOoyRbjcQxVBnpU0SHahygdlAAJD7AmDiuwr4nioM+LSn1IAkXnu/q6gR4Csk93So9SCJSRHSpTh64zYVkgL9cAGWwdzeTfq2rEe3pXCWwhE0WHicOOwONjyX289AvJtDRaj8LyFRQqrOJC0T3+sTtBpAq8UZNgWLUiQxxXi/Hx/VPlOiPM0q8l74iAaeFZGRy/4SdnB3RhP2oZj7Cb55j0mLiBrPEFoAcYXoe0QiPHkapSF1negWRKmw+cbQAMsgQiF7A0NvEkR9SlRdx9GWlsIxsQoRoRBck1LyRQXnxBNknxH5hcCtHh9smS0o0zNFhxCq6wwhAi+zk+11pFL6CH3vVZGq+nqPCm2ZQ7OYZFL5lBkXvmE3xu+ZS7M45cj562yyK3DpTFL9lJkVvmk5xfkz0Wo4ir8Rr8HvfDvFzMaTjDGuc4n0ZUE4UUCL1i4i3+bzxIoAxyKBXeSniDeNEgCUUcqJLF5J+u18pRT3rR4oxgVS9rhgokAwt6GciSo4I6aiRAsnwagbqGobjsY3yf8EBDHpSpTcVaVc3BWudjbyWkuUKSuPm48GRgSlaZECpczd1WLXO7dR9TQDShaSOKUO/pzuxxR13Fram7wpKWPPRTI5ip/JBAOZrjjcHlYgoZSsCrk+DewokY/U9ZKoNIEm9WL27E/XpIXMsAz0r+Ltu/F8Byc9LKjxIvs9rF7Z8kgHZMiShD21VrApRJ5QacWp/5Zu8ZgKUCkmAcX8h+STfXyF5LzPgptwsAeQ1eWl0ZW66BFSXFZTR0cyL8Yd0er9r2/Yf/OogWdYx+60F7TvRsWlpdA7/wU7p1J425WXRpk4daUPbA+nSjDTaDE9Xht/WnDzawr/0tuxM/uWzZRLItQzWm3JzRTpLEqa2/xtIappVIfkEH5UAlPhnIKxHI6sajb9o3exlE1pAaEa9CCC9PUkDR6QQXikwe5AysZthhqoxAPITjhABSZ3vpk780C74KtbUyOn3jvGwNu3DF/VjtI8UJ/YcETWiJ/Ij2wgMxwykbT/jD6uXzuUPLKJSGBhjlpyvZ5WALzWShHB+V22ZAV7XCoEkAGls46oNKHt2lvvhSwYBjLi/QhJ7IdiPlLFBjSZaE4svJ4ITT8xD+3rWX7iPSuHVkuT+LUSfqdBNvazXoekbPW3a16YenXgvEEZYwW81PMF4emJck/h8Yigwms1nDvCa2IOLBwkctUdP9seOtm4460xTPVKEWpCD/UWkT/0bGAAbEQlOovilUyi25TCKXsbR2aWTRcFLOErbPIkifB6KbZ4s9wVAAU4ASEC0le+/fYrsFQavmCxpUaRHo1dPE8WvPkwUucYoyJFj6Lqp5L+O78vRIeAXu302Re5iKN49lyL3zafYAwsp+uBCCt8/n0L3zaMIrr/bgDN0h4UmgzXMzxO4ml+fYRndeZjAOLJ9kpwC2AB3YIv5XYIXTxDoa/pVwMi/PyQHA1ayj6r7mDb6xL6rC0rsVaKoB/uUaH+JnzSamvngA+0yYY4CI4fz/2UJR2eL+eCGgRk9fLAxI2ABlBAiSYWkuP04Dj8uLD2D9xQDeLcq1pXuZ3pws2pxHJkzv1MBKQdadhyZOgWlzu4EhGnBMKK5Q4hmDbSjwUy7iXzP+HMeGGEKemSaSL/OUu0Kk3QMCZcZqAxJiSbF2q6WvuSD8s+KKulDPvAHJD8sKZN1CkbnGMGXmBe7LxBxnQo9lhCyZRCAqrUV71qzATEhKCoTUKJKX1pAHEjKGvszkHwiv4QeyymkO2AckGsAuTOvE23PyaBLmBdn5BbSlAMPpl4HHPBxm1/jT2VG3huzDzrkg1Xt2tGpDLjT0jvSuWntZWzWVobh5vROcn4bg297XgFt4/AZrjuYMXktQ/H6rCy6MSdnvyB5f0FeEiQfLDR+fwpJwPHnIKkNrS8UOv9MRI2FiaGhLUESU7mx/4hID3uLH/KH5yPAiz+Q7pQOHVsj46wsJH/giA/SYapfimG5iUABSnzwRAxJCK0j+BADkJ/D2LymVkCp8yE/Q8q12IzC+aoKadQKC0rTfIwvC8CHU0BPIYlIErcnDL9xWiP39VKyVhp94jwsszSSjI3uk4CbbZZ2gdQSKNVYulWN7W3TriYNq/DT638Okmj+FllIuu8Hgt9qdFJ/47c6rd6bPoGJE0iZ6aImsxWXm0UU/qNSnHPsKKL11p2GAamQjFpAxs4aJ2AA8ABI2jqNmrcZRRmWEYYlAAmFrQSQFpLmcZOItkzhCI7hdPlU2VPEfmH02ukUu24Gxa81omuniWLXGYWvNxJA3jxdANl851yK3zufmu9bQPEHFxE9vIRiDy3yQBnj26L3zKPmu+cJSPGY+K2zKXajAWX0arNfGbt8SiJyZXAbUNrf5RIDd61+DTupZYG+TTe7BT+6lwlIuhGlW9ATYzWfPIaIo3M6Dn//4RSHn+3ygQLJpoV9BZQAHSAZWTNK5NrhKSSTrPBU8JRtwVdW5U49kcknOuXESZm68zsVlgpHnb2pESTAqKB0IelGl4hWae5gqY5tntlgZ2jWU3wKR86TBhBNHGAyKNivH9rT9lJ2FVBqawggGe5jDowRSf6LgfhpYYVA8uNicyCPderTKjM2KzEvtjIJii0J90Ew8E87tFkh6UaS7xSX01uFpVKhvz+QhMMZ1mOMzVJIPppdQLflYMhFmgfJbRjBmJlNJ3TKpOX83L9aSOJnWEbHtxblZNERHBmelpdPGzOzpM3jivQMujwtXQp3LkUPJQPrEgbXpbmZMjLrusxMkQdJjgpvYejdyjDELLE7C0xVK2yK7reQfMg2nWLyB+aPQToqC9ZG8ADEqZzn13qSnxPpVinUKXHGXjlNrzif2Hcslo1n2Xzmf6K65rxdaGY8apsHCnMwqw3R3JcMsK/KzFDUb20EuaeqxrOJ2iOXq8QhQ7wXq8vF5f9rDFMuK5TnRDr1Q/RC8nv5kD9A2LsEFDH9A1PH8RpI5eI1sO/5Od/nX3xEhtTu7rpyEyH2MmbJEM4DcDphALAEIPGlSkzE6Cwyg2HNYyAPmmhkFr/WztKILwU1Y4xlV+hQAyZtukbDdWrTtbqVqFdma1KwatSp8EQEGBjXS6JAD3R8GpbGbXMdJBMf7DBfeU8W3np7dEp/MxDZmgJg8oTsMc0fIKYAu1c00J4j4LUKKzkzEUNMwNc1SvM7KjHhgoN2BlRr7jlrJO05r5H8HEH5Nh0q+4eItAATQC66cxpFrpjK0eBh5GfI+Dgia9o2kXxbJlDTZYeS79JDvX1HPE4LbgDG0DXTKMAADN0wg4I3zaTQzbM8GEZumC4K32gUvGk6+RiOe2+bSr47plPgnlkcLc6h4EPzKPzIAgo/upAijy2iwKMLyP/IfPI9PE9ugyIPzKPQA3MpfO8cjiz5/rfNkucT6PJ7CO2cItEsFMDvwdD08e/i3zqR3ztHlRxNQki/AoyuPGgistzo9Fva9KuA8twxFDxntEgONmw0mVT1Cps97AFjr3H5ANq9qA/tWdJPTOJh3ECr+ABm9WgxbxADhzXDPM9Y9Y2FYImnZu0CzaP58qoRntyo05ugctQQ6d2EtC9TZ3D6lw4WwUsWEmMJVhR9ndZgwoxEM3uf3og0MToYaO6D9pZFgKtJ0ep+Jj6baDuSQiDpwWRNZXhOHmC+c3zQ6B9pjNd3D2Qo9q+SbBC+13u6V0vhHTJNn9j2jk8ZYJ/bIkL4P2O75xMU7ZSW0eelfLkEICwXfWIHsGuftycLTGTPNO2q1bCm0KdCCg+xdmId3V9Iwr8V4w3v48cgKEKhznUAZR72IpkXHFydwjyYy4FW/wN+83HBQb/59UKyG3omO7an1QyTExmQmDG5LYOjyLYH09b2HTxIApAX52ULJDFzEoBEuvWnIHm39fJrDZKPFOZ5c8kUkqon+Pan+PkUks+XJlx18M/UkuXEnmNJEiRRmaWb0ziCwt4gUqDQ/7Wz2gBJRHOAJAadApKIGvdW1wokv+fHaVk2IAmhMAagRNXpN5UlEi3KB7TYgPIjfs1USOI1vDlxDMov+D6AJIqEvq8tkSgRcAz16SoC7AA6ABKwxHlEmvCHdCEZHWB8VYN9u7YKSXEBweBhC0n4UiokASDA0fXD9NKwHqxaF+6DI2Y43Gjkp+cViIAjhIVCQekBkC8jjSqTOay9mAIb94fiU+upeZrpg5OZhXNtG8Ais2ApIIPio9oo7Qjx40cLIJtPHCvN72j6R2M82hp85/LCjMX/YgbjpSbKAiAjOzgKu4KjvCunCyhDO6dS4PIpAkucBrZNEsjoniOAivvHOXKjq6dLtBi9HunPWUa3zqHobXMpylGeKsbgjN48k2K34HYGG8PNf+cMCtw1k4L3zhb4AZARC0go9LtFFHxsocBS4MmKPcT3eYijyvs5orxnPkU4ogzdPMNAmCNYRLMApcCSfw/Ib38HL+16ycSfhWTogkRLi4JS064qROPx08fIgYj0ULKw1yt//+MbZY8ShTx7l/YX+ZfVi3lA85EjBJIwcEB/qvGLTZ50otNO1D9WPGRXjxIBlqIUiHqR6FHDRfDjdUGpcNTh2hELvhhaTZYl0rRqmafQVFBGrADI0IIBSSlbOXib0yBzN1FljYkmCkn5DoivbD+pDWhiUO5t0G2TzrS7a6W0bn3Ka9inRWUCSEBQIYmDepnyw7DD9s0XZVUCyk8qK5IgqXCUA3f0gFtIfmD3J1uCJKrwdf38qcKdF+xIQkDyD7yeA5L3cmCAOpQbZGRiukDyypwsGb24PiuDph58ENUf9CsxEGjtZ9nUCVfWMSjnMrBWMiDP6cARZEYeXZOWTVd1zBRgXsZ/hIsLc+mighyGZRbtYCBez3+A6zLTZfDyDRaSAORthfn7BclHC/KszMDlxxBBApDFpoDn9/x+AEmY6Yr9XEliYPIrRQl3e89yTqd48OMQPb5RnM8fiCKpMMWHB243KL7BCBpEcG6BDiCJyzAX3s1A81XVGh9Fvs7PMPXxB9FXxecZjoEaI19Nmeg7huDXaBfhD+8X/EH7vAhVsqXyfNjj1AHLu6wwdPUrfl8QRmXtqi6hvXUMyZ6dpTRco0ndaxRrK/Q6alVrnxqZnBEewJBsMMbhstfBQGzqaeD4I0P3h+6VMkFd/FBh/j2yp/QWwmZL/C1h6TXV7PPJXp+d44dZi5DuAaZKoaYS0Gq0Z88L7Ox593m8WYEaPU5x5ghaaVoVo6xEXuVqvVmMrK0c0nhYbH9YzaCE84udmCGRDEc0sZNHiQInDRVnGd/ZI031JkdQSD0K+C5PRFwACqLBCEdiEPYUAzv5tiunyKkKl2Wv0aZT0aIhESNDMXjHXPLdOZv8d82hwN1zKXgPR353zBaF7jQK3j2HQvfMpcB9fDtDzvfAHPI/ONdEigzD0BOLKfz7JSKch4KPG1BCiDBDDMrgw/Mp/CBHlPwaIYZk8JYZsj8JUAOUElGygvxepaWEYd7EES8iY6m+vXSCmBbAvadFaQpW9yhbiSzp7PEUO2OM+MIGrSEB0tmyT3mSmV6CSNG/iiO4Ixo4qqyXtGucozo60kxPUYN3KLx2FENzpJxGGLI4VYVkWopRUCqVzeQUyB0TJtGohaVEmxaYEl0qLG1k6e1dOoOzcV73OvWyQtOLKvlzCA9gjURxWbTATjfhqBKtJyFroYeqbJO5MfvsTaO7026YEfD3GHUDP9Qhm1XMUWQxfVZsWtE+Ky3zCv1kdBasLXkd/DeD7cuSKvp3caUMW4fcWbI4SEfEKbLwRJoW9RLIqEFYGyHMqoQLmevIo4BMhmSB1Hw8y2svWvLQoveINQ+ABR2MA+Cwcy1HlNuz8+gsDqCWZ6TTyI4d3umc1vGdNr/2n54Htvl0cloHOjbPzPu6tB3/suk5tL1tB4EkIkkXkttzs//HkISv34N5uUmQfMyG7JAC8gn+J7mQxBELIPmXYjPR42WxlTNz0iDPjDcFkm+WFHAEWUwfVpZL9IgjsVRIGlBWigC0HyqrBJJ7K6oFknv4ulRIBmsrKNS5kkJ1VRTsAi/VLgLKrzgqBSgBSJy6kPze7muaQiAzR1KnlH9fVSxjdQI9agWU+6Rdu1d5kJQCn97V4g+JL1eMI0SUmAdtszJAmQpJ8UQd0l2OXqW3kI9oxQiav7jYQwGUFGCAow4lxnWAlcz2S1ESOCeZKRsKSS8i5POIAj3oWenjvedy/DjRg4aj7/iMgRSfydHGrMECSPSnoUJRISlH/yuMew4A6Tt+hAAS0zK0h08hGTpluHGW2cBRDypXtzLgLp/uRYgacSkkAT8IIHQBifMAJwAqe40Mo+YbZlH8Zhsx3s5R4F3zPTiG7mWI3bdA0qEQ9hJlT/H+BaLIQwsp+vAigZ1ADwB8fDFFnlyaJBeSiCYVkABr8P45AklEpICkRKn8niSivS4ZmIGrppFvp0khIxoOXjaRIpdO9KCINhFXWpiESl+p9rV7lVGnmAeQbOZIEpAM2WIonI+fafcpYd+HUWFr7YSRo/mAZQU8Xvn/v6SeCBWr8ICFWfzakSIFoIIyVS4oIQDYhaSCUqNKNzUrYjC76Vf0YkIKyNYgqaDUqDIJjK74M6ptJ2JsgP1zPhiFC5QcTNqoElsRACW+w5giAkj+q7RIIPl5SZlAEkK/pAtJZLxag2TS0PVSE3Vi7XMdxLzWNCsXkq4Bug5n3h9IInq8NqOTgPKa7AzamplDp3fqRIs6tKeBB/7Ko0j9mTS8/u7h/Asuyy+iE9OyaHNaHm1vn0E7OhhrOpieX1KUJ6DcXJAtkSSMzTEB5Go+YrguO5tuYnAClBCKd3RPEsU7gOSDmDnGf3BIBi3bSNIA0oxc+T3/gyA570AShubPFyWGgsIrFcU4qFoFFCH4qr7Cr/sqg/wdfq0PMDaKQffvmmpJd0oFK4MLKc5vGGTf8Qfme/7gIMWKSeC7GHIGkpViNIxZb0E+H66ppGjnalYVn68QRWr5utpyCleX0t7azgJWjLf5mt/bV/w+v+EPG577h0o8b7mcYkK5jMSpMecxiFUmlmMYKwspXPQ6ApahXmZTHynW3XWltKcb39azUgDp71NFof61FKnvIl8wlJnLPMWGbrSnVxV9XVtIX1bn064e5TJFQxqbYQI+trdJiU62cLNQCjOo8AV2hesiNprDYGIZToxhuCicAdicx3hRYsrjvftNMxInHEcBBjSESQ8QKlUh7DuatKoZiKyzCmErB9ecwOG8yB41SGzksDg2nThC+vS8xZkXalisBU/jhRYepWeYHkhUoUpxzU4DOmnOv36GaaGw0spT9B4Gr5kiFaMQzms1Kvb9kDqNc/TYfMtsCiBqvJdB+CDSo0sp+LulFHhsCfkeW0RNHPU1PbyAAg8BbIgADewkhQr42UjRjR6hliCpaVeNJAMP6b7kfIkkAzebvc74TTOJ+H0BlpJ6tZDUiBIHA+LUs3WiKHzZoUkCOJOk4HRSsVoNC4lrz1mjvSkl0jt5RqPIgHOsGd+1zhTpeNNDlvH/dWn/fYZJa9pVoenN37TSuZoBO3NTZnjaPksU/iC9qzMy4cfrmRWkDsS2lbJe4c+Rw0Wpe5hu64kasYd1XxIR5YIBSQrOx555f4kmY7blxLj88AHqtAHiGQszgvAkVHX3EcOBUH13cd+CpeQnvHZ9xmsgKugx7u4zPtj/vLSQ/lVWQP8uL5Q6CFnDGJTfllXageumz9vMkS2VAkGvUNDC00vFOrCUiLK0XHym1a4TbmKQO1cXpzBtea7AWNFhRBa2x7CuX1eUQ9fyGn0NfFo7pdOOrGy6MDOfjk7PpAkdO1KXgw7874DkusMXbqhv3/YDlOqemVdEm9pn0dZD0mhnWg5t7pRGl2Zl0qb8bNHFfNSASBKAhK5BAU92trcnCZkK19wkSKKyFRFkS5Fka5AEICEY6rYESQhwhNw0KyLIjzhi+4Kjt3+hIhWFM1UVXvT4LR89KSTR3gGlQhLz3gDJQGUZhaoNGFUApkISgMRjkarF8wKQ0Ld8xKevIaBkKCoocQpAYlr5t/zFACRhAIAeR0BS0q52Pp0AsnuFQLKJIQhIBvpWSyQJUGKSh0z0qO8qo3p+7FkpaupXayZyDO6aBEns96VCMgl6FpARN+X5E/IiwhTpc2BvBkUMqQrNbDCa3V8kkzosIFG1CkBC0se20BRNSDP5SgNIWQiPHyWAxHQNQBKK2kkXsFiLnNloGv83TZQKVLpiOtE1JgpEmhRCpWlLoBQwskIMR1SOYr9P9xUBSLp1DtFtaNXgyPChxUSPLSd68giKPWUUeWoFhZ9cTuEnllHscaP4E8sp+vulFHtyGd9uFPvD8n0U5etVXtr1dwaU2KcEKDXdCkiG7+CI0raDAJLN/P4ASUSTKsASoJTq28snU2zbJFFkywRPLUESBxciW82buneJsV6QZ6BuR3VBiCwVkpihKWlV7aM8gv+3HFXCog7pUQASe8nuEGrx0l07ImlYtQtI/3HD92khwfPHAFoLytiaEaY6dtWwfSCZCkipnLWRJgwMAEqFpDutxIUk9iZ1f9KFJCLJuO3NBCSxpw5IQvCNhWMPen8BSfi7wn0LkAQgcUD/dW21CAMM4PWMoQcYdvBVeZExPCkpF1CiOh+gBFCNDCAVkthmUkiKKkxUiSACoPx7WYX4TCsk1XYzFZKyH8nrLiCJTN+jvL7Dg/uagiyBJIKmm/ILaXtmFp3HwdXSgw6m0W3bflDW5lfostNqOwgTfxwD8cjsXDqXw2W0e2zulEGXdOxEl6Wj5yVddFl2Gu3IzaSrEGLzHwb9ktdxpHljgSnagRSSd+eZNhBjam7SrdAjuQxIvp9Us9oxWfjD6yDPJ22J8R8ZqBjL8qwDSd2TFNNe2M0xHJFmfaPENPQjhYAPAkqmAUgZT1Vh+hwRNao8eDEYjUzUh3luKNoBJKG95WZfEhFlpLbKEy4DoEjJIjW7t9LAVdO0OoEcwnlUxprinzLRj1UM2MoSeU0D61KBJFKu0b7dKGwHuZqeyFoBowqRZKihC0UGJaZ5AJYqgaZO64C5+EjbijHRpEIBQ23G14jOi+xm1IsAsPCsgQmYtSK0ZLjSiNDT7PokBebUi/UXFJo30ESJtpE7tV8NwjQIH0eQfo4+fEcNJt9qvu74YTK5AubjCsOwVfDMkeQ/h+G5gc9fONaAAFC4agrDcbo060NouwjfZFowQtbFRp1sXOE+uC96EtHQj8Z+afBHC8Y988j/yEIKPM4g+8MKCj29koLPHUmBZ1eS/5kjjP68nEJ/SijwZyPf00axp48QRf98uCjyJ4brHxmUfzBCNCkR5uOLRdHfLTYFPbovaVO62PdElWv4lpmmQOhGW8hz40wRKm4RUcp+KkfT2iYS2j5RFIRDkCO4A4lLEPYuL5uYEMzXLzlUjNgDF43zXIhCqS49ZydgKabpdoJI+ISR4nYkMzs5qvQd3iCerdKuc7wZxSUGA2sNKOGpG7RQhHzrhiUpDnOItQw2uCixAEdAUkGJsV7w6RXLvJRoEr20EQtGbTHRvcvgSn5/8JBtxcwA0krX6MIG6/IzQOAIqRE7oknRTDNpBIbq6KeUIeBT+lDzsO5ihI4D269qiunLmlL6AY5bvAb4+hmDdLSL4CB5V10JfQPvZ4zAKzNZsC9rymWwemK4QZkIBilfWGhqRAlg7pN+La+kd8rKpUUOayg8X8WODgFIfr4tkkRXgbEDxfr8cDHW82y6NT+HrizOo518X8wavoIDrN+mZdKajCyanZdP3Q886MM2/00/3dI6vjWmQ8d3lnHIfEbHdNrUMY3hmEWXpqVLynVzTkYSJK/GZm1uFl2DSlcLSexHpkLyLpkztn+QdEEJSAKQmF/2XGFhq5DEXiSMfOFp+AHD7EMGGyq+AEnsQ4q7TXmFQBJpVZVCEpEgIInzAk2+v0ISKVfsRwaqDRQRUaoASB8D0KRmq8lfU0OB2loRzmvLiA5Xxew4X+dq8WjUmXKAJSJXAaWFJFKtMf5yRAd0F1BG+teJBIxWEkUOMlPSYyO6m4keQ7onyRtxBSNyC0lpvbCQTDTl1yeB0YMfAxKKzB7kncf1uJ8C1c9fdhTWuNKI0E2bqi8mBDCG5w8SiUem9p85ii0Z4vW3ydikFcaiDFEHbOWw0AKQdOY4makYtSk/AeXZjWb/8aJDqfmyyUQ7p4nHafM1U6mZQQG3muZbGXa3zDBwZAgKCG9sWbhfzDb6xzligwuOiCM4qCVIKiih0LMMQIZl5OnDRaFnjALPGsWfWZkESheSEm1q6vWJJSJAEtK0KyApFa7Y++T3CEi6FbVabQtQSlSJPdUrp1L8CgNKpF5dKTThJyuycNQJJLKP6YASTkWR800RTxIoz3YGQMPAwWkRgeORRIoc+TWt4M+TtQ5EpWrczuo0RTwjkyJI7G/qrEsdDg3zgtjxI2RsF6TpVgUlIUI9ZkSrkPT6L6200Ce1hURNDNw9SlTDSmWstcILzeu/DyRTp5Wgn9IFJcHDeHBP2Sr5pnMpfde1igIDevJ3uz/Fhw6gcEMPASUK9vb04AN53IfXDS0E/KZLlcyoxRSgL6vKJGOGSFRB+VOQRCEPIPluOaJJM8ABkMSa2hoksUajx/0eZsDNvP5vzUk3E6KyMDkqhzYwM47s0InGHXwI9Tr4kPfb/Lf9DM/Iem0B/3GOYfCdx4Daml8gLSDIM+/giHF7ZgYrja7gCPLKfKOrc7KkeAejsjBTEqeYBHIbnwKQMDi/P88YCGi7h1GeGAegIRWCmbkYmtuJ16hqVclYrOLEgGUtVVYjXpm0UW6smlCogw+BlEmXlkvf0Zel5baStSJJ39pJ4ACjSiNJtH40Mez0FOCTNCx/0ABORJfueQgwVZn5cOUURHSINGpdtcjfpcqAsnM57a0tc9K1Bpi+btViguzBEY4cfVHRWiNRJGbVBQbUSnoVR6DR4V1lWrrCUiNLHU2F6QTS6A9zALRtCCAHyBBbCH1dkBvtuVAD5FzQ4XYZQTWzv0hA6EgfAxi6CqoWDBLjcSi8CFMjkhVGWf6KYZLukr0hXkD9q4aQ7xheUDli8J84THoekdrD+KfouWNEwfNGi3uO78IxZv4i9t6wH3fzDOkhhAdq6FYG4x0zKHznTArePp38t04l/+3TRIHbjHB9qvCY4N2zKHTPbArcN1sKZtCvGOJIromjvCaGmsDxhaPJ/9Jqo7+tIt9LR5H/xaMo9MJRFPmrUfDFlSK/Vej5w0XB51aIAs/ycz29TBT+41KG7xIKPrWYQk8u8hT8PYP5iQXkf3w++R5aSMEHWffN5/c4lwK3myIepF+lf5IV4PP+W+zf4fqpkkJGKhkOPaGdk5LkVfvusNNG4DuLyHKbce/BCC8U/fg3H0q+S8aTnw9GQpsOJf+m8eLe49+QAKXsU56RmCIiOs14vWIv+cd1BlSBwwdKRIkDIUBOh1pLRMlgRKoWB0aIRDHrEwpaYTA27PBkcPTaYRKlqi9veK2tnEVhEHowV5uRaOjdRBQLuebqEVsRqwraySQqzCCFUDQmhWPLByZs6+D6ND9hbwerOxnvZb87+v1AIZqO4cJBKmEEHB/w7u5ZRl/XFtOu7nygDJ/X4f0oPqyvlx0K1vMa1J/Xn14VpjCvrspM/2FhkMG3nXlNqy33Brej3Qy92YgmjTe1AaaOAtRqV7SGoIdSR24BlHAnk7GA2MqSNrtiKZz8EwcoKLDENtrtDMlrWFt4Hb+Q1//zMzMluDo2K4umMz+q/k+bT7dtumDBfx0k+x3U9oNZ2dm0ot0hdAZDcSP2IzMyJM+skNyW0YnPp9MVuel0eU6aB0mdKakjswBJpFrv5NtgfvtzkPSmflhIoj8SSoXkX4uKkiD5Ir+eVLPyPxH9kMizY4NaGm5RJcaQ/HdJouXD1TcpgEyFpLry75E9yipJowKMAGKwptqTC0dcDtUy2LpUJ0kh6YES5uNdKjxI6v7lbgYnRumgHxKQhLOOuOtwBCmgZEAG6ztLoQ4qW0ND+H7D6vaBpE7gkOkEsI2zkJQ9xBkNXjpUAZkKxf2V7B860us1YkS0iNOQygEkpB6ckAtJOXpfaWzJsGcl+1InNJrhwLzoRs+F0TjmJI4VSTRzodlTi+2YapxuboTnqVHkdpMqjdw1y5PA8s4ZIpx3pfdRqAKQaN4HIGUvkKO46GMMrD8y3DgajL6wmqIvH0vhV48ThV5dIwq8tIrCL67i21dR7MWjKfy3o0RBVuhlXH+kKPLXlRT+yxECzPCzK0TRPy/3QBlxFLbQBCgDj3BU+TDrgYWmiOfOORJRQlHsVaKHEi0iDEscMKC4JwKDA+vQo4pcNUWEPUvZt4RBwhVOpLl9itHWBCjlYASWfRcbuzsU8sjgZxtRyj6lN29zvCh65njZpwQofSeNpOY1IyWqQ0QJoShL9hIZkLI/ibYep7VH9jdPMQYRUOzERg+UmHGJgdAKSBeSWsijUlD+FCSTbPFWDbVzLzmCPDwBSoVkxPF1lS2D+Ubed8XutbuzKgWSmJFqIflN5xL6sVctR5EcYY4cIJBEVig2tAdHlfx9H1wndQioZMcsWUwA+qFbDe3qWu3BEiPzvqtxbDRtVazaYurepELSMxloBZLGtMVA8o8coGDdRuBza3Y6r/0ZtLUwnzYyM87u0IFOOaQDLW/blsa0PYi6HXzQB23+G39K27T5dGx6B1rKAFybnUYX8R8E3q2XZ2bTVQzKKzMy+TwDMoujS77PdobkVdmmcOd6Dr11ZJYLSfxBAcn7Obp8OC9PHHaMy46BJIZ2GiWmXaPE2IUkCnee4VOMaoHUGUKcdfJz6Q246gCSxSXyDxe/w5JSgSQs4ABJRJPaD5nokTR7h7srTSWqVKEyAKEfGXiQXmdceKrltKmmM/k789FdTReKMBBdhRmIkboainblD3s3hhmfh0Ld91UQnqv8HLuragWQAsqqYtM32YcfX99NDANEDeYLgr1IDHWVKBLtH8P4uuF8eWQ3EUAZGYZBsHDZ4fs0Wl9VuN9M6itpnqhtzEdKNHWPUFOhGgHq5dak6SUVjp51gZBFQr0yU6S2X+KCYiVpVez7rDTN4JL6Qt/bWhtBnGYWXFijIaWKVF/0AobkxnGmjWHLJC+CRDSFqAr9iEYmCgzcM0MUZIXu5Qjr3lmeJEq8d7Y436g0cgw8OFcE9xupMsU+IUeQSKkiggQgo68fT+G31opCbx4nCr62hsKvrKHoK0eLQq9avb7ayF4OvrKKQi8dKVEmQOl/fgWFOLIMPZOILCW6/PMyCv1pKcN5CQX+sJgCv19uKmoZlogokX5F+4n0aFqhLQW9m9i39MtkkRmeQw/kFi9pda/0jF5l9i8VmKIdh3nAVLu7iPW6FRN1aRMx7SGI9GPnjBdhBFfsPD6IOW+iKHguR59njyNaO5ZoNR/4rBxMTcsG0J5l/aSfEkU4AkqGoMgOu0baVmQ9eDEw2sjAU6LME/n51o8w4gjTyFTHenudxwwj3+ohnkuPK9caT+EJSMIpCLMu4UGrUn9X177OfMbtQaDNoHgZFcw55e+cb1Z/yeRQYw+GJK8BPUvou7oSaurXhWhEf76+P8WG95YsUXxkd4ZmD2rG93mw9kbXUVNvhqsFpQ5rx8g8gFLH5iH9ClDqOEBtDVHTAUwKwZQRNUCXySBFZqQg1lakXGH3+aztX3+Ig5I7eH2/OQsm5hl0XlonOpfX+NMy0mkd82FG+0MIffdrViy44L8SkmfNn3/hkIN+8/Gs9gfS8TnpMmMSla0Ysnx1VrZoZ7ZxVLgin4GZlyGQxMgsQFIl00AYkuiRVEjex3/YB3OMAEtAEl6tPwVJTP9wIfl8gQElrOikh6fAFOzomCoAEkdGgCQ+CEi3ApL/KjYpV6NSkYISgBRZOKoUmhBgCRceABKngCTkq2TY8W0h2bOsFoXQKmJBKWJYYiROuEctRXp2FkV7dfHk69KN9tbWyetIAY+FJCJJwqBkz1nHCFEkhC8KoklMRhc4juIjTv7CNWOQ8ggMO0bRTl2LkMSRrER9sxs8SLYExFRo6hcc8s8eIEqFpAtIKGb9MlMNohWSOgpJI0cUUYgJ9upRFF/TaNoC1hsDbUQhWHAx5xGRIxZjADJ+4XgxGZcWj6unSWUn0o0KSTTtC+gYeP67p5PvrmkMjukCSYWnpFARJd4/VwT3G3HAedAIqVVInG8eX2wqUZ8+giNAA0h6fR3R2ydS/L0TKPbueoq+s04Ue/t4an7zeCIGJhR/6ziKvclAfcso8jpD9LXVAkmJMC0kfc8x/J5d7kWVgCUUedoIsAQoQ09x5PkE3/fRJRJRRh9YJIrcb4DpQjN819ykAh8t7pGCpusSsAQoPWP2q8weJiTm6bDucxTePtX0nm45zJi/o69yo+mnRKQfZxiKfjuBmjfw/+j8KaLo+QzVDZOI1o0nOm6M7BnCaGDXol60e0kfGZuFKLAlSKIHU6uYsTcNW7yY9Y9VUCI9K+Lo0sikbWFXiP1OBeX/BpIuKHVeqUp9YiOLh4qQPWkNkv5pHDHy9xep1F3di+jbLsUCSaRaaVQ/Cg/psQ8kY0PM9x77lIF+PejHHp0FlJgpC+2uq6VdnaslmkTa9esaU9mP2gwXkhpRyhguO0oL+jlIPshB0O2Y+GQhuYHheEFREZ3Qvh2tPPAgmtmhHTW0P/j9Nv/NP/kHtvl0dHpHOppB9NuMHNqenilgvKoAe5AcQeanszBwOY+uycyVNhCAUfcktXAHlU935uV6hTsYtvxwfkKP8R/+d0UlYiDwlA3lny4qliIdFSyQ/owWEP6HAZL4R/2lyHi2ItX6OsP0/SLMWzPG4tA/S40+LCsRfYRq1/JSabg15dGlYg2HoytNu6J9AylPpD73BSHSqBz11dSKQnw7FOH7xGq7UIw/jHE+cosxHCN11RIdYogq+hyljYOP+CDP1LhvrTjmqL1cqG+dGAZg/uN31aYVBKOuMFA5Xt+Hov35izKgp3wxxCB5UK2kU/1D+D0OYihj/FVj76T5i/7G7jIx3Ycv4Ch+HF8Oj2VN7GUa9+GBiihw4ZAk70mcV7Pn1PQR5O65eHsvuI9TjYppHJDO+9M0KoTzqdf7VnAUebiZ+yhzBLFntNZEAQGOCIKnN4qhtlRQbhxPgY1jRNh79G8aS3u2jqI9l/PlK/m26zmSvGWqpEijHBnGGXqRB4zCD3Jk+AAD8f7p5L9vGgXvmy7yyT4jR1oPmGix6aHZosDDsyj4CAPlEX7cwxxdPsoQfXwe+Z5cSE1/WiwQw57i3tcYaO9wFPj+MRT8kCPHj9aR/9P1tPez9fTjJ8d7p3s+WktNH64l30frKfjP9eT/x/EU/DtHnW8zLN84xkSVL6+iAKLJvx4hivzlCAoj/WoVcvYtIf8zyxiYKzmi5PNPLZPUL877nlxKvicYoI8vJf+ji6RHE4KBARS+l3+Pu2ZR0y3TTAXvDYnqXo0ukY51pU5EEVshq8L+JaqHZTTYtomShkVBD/43Qf4/hTeNo9CFYxOOPSkuPnv4QGc3A9THsPMjJbrMVDfDPLx5yVCiYzDUeRxFTubnO2O8FAT5zhpNTWeNoD1nDCM6jSF7qjU0wFSSM0aS/3T+7JzKoDt5KDWfNIJoPd/v+KFivI6iofD60bSXwbvnhFFeCwn6LOEKhDQs0rGu1Z3A0rs8UuZhwifYv2qY6aW01a5qbRd1zAYCVv6FDeTnA9PAbFMMF505kOKTBzL8+Pft302iSIHkgBpqHtlbhqIjE4SxW6grwMEuFPEOgBmSDMzgYGy/oFahUop/fuxeLsYEu7qUCyzN/mSl1xKi/ZLv23F/unbCfQf95W/aWZMYSm+CkUJZl3/Pa+2DBUV0Wz7MA/LpSl7bt/Ht57RvT6dwNHkcr9Ez+bre7dpSWUbHt/6rIVnR6eD3G9M60FH8hzifQbi1U7qkWAHInXnptD0vzYMkhP4YQFL3JLVP8ucg+Sj/wQFJ9EoiosR+5B85mnyao0zomXzT+uECUvYli03vDnp63uQjIOTVk1WcpJ+DJCJKGAEoKDWlqgIk/VXVAkqBJd8OhS0oo9UVAkoXksGe6rNaJ9VpaBaG+7+MyLGQNP6rdTJnDveFiTmmfQCS0jPZtUZmRcbre1FzQ29JrcoR5ODOZt9xeJ2kWr3BxpjlOLbvvsOLAcjRPSgyrocMiJXJ6piegb3CBYM9EGoLRiokWxoplDReSEcQpUaIzj6j7jW2VKCDMnsptz8qebSVFGmc3OhBEpGjNLBj0WVhIUaFpf/yseS/ihfc6ziK4UU/ejsD8u7ZFOPosPmB/5e9s46P6traf+/tj5biECFCQggEd3d3dw3u7u5Qd6FepErdFepCcVq0lFuo0eJEZubozPqtZ+2zTyYB7u37/vne5vN5PjNR2mTO+e5n77WeNSQfJCHj9f4CSvO1/iLtNAFIFOME3hpMwbeHCBStd4dQ+P3h5L43jNwPhpOzLVNtdzKorG8nkb2XHeBBBUj3xBxyGI7OzwvJ+m0RBX9bSLm/zCfj9GJ5HvplAVm/8Od+WUzuqcVk/WsB2cfnkfn9jCsgae6YKHJxVvn1hHzS55Za7heT+b9pggASjxBAaWwbS85H46RP036XXeY7IyXhR0D5Kjvil7H9OlDmUkZL2kauAkmdRFRQklTEkMTsTEAS55X4u6A9BHC0kejDfy8NRsebNKITfIJ39KCcWxiyKzqThYIdODXsPjAkZSYktt5nsDNc2FEgKYBc0V4giahBAJIWdxJXidcKAAmZLGdpGwXJ+a0VJGe3vQKS2NLVgQRYoAkgZ7S+ApJ5yoMkZIzPX+3qZ8Dq6DqGJQRIhobw4nAw/38Nbp4HyZYNZFIPIHmxRnkKNqniQxIwRE0B4Oh2qKPUjmHJrhJZzJLH3Lo6Oc1xDKOGGSBwJKdWhmTBXguSyHSVIIFySf8RkggR+AQdCHxvfq1sohRlPhlfVoZc3MuP9/DnsdU64sZC1LNUSWpdNnZP4v91J9mnQ9vNjYoXPdK7cGFaGBNLd5Rg91gaBTqlRBimiZT3J+L4lxUTR5vjYnwhdQe/xK0MObSAoGgHbSCobn2df8nQm/yL1pCEm9RRdOImsdXq9UV+KVF0cJaJ3hzJBHUOWS5BDpaxLXAsqjnWr9aScVXJfxmS2HpV4QIKlJcrVBShYAe6NiQrKlVKIzujgkrkqV5JnTfWqSIvfKwQwy3YDTar443JqSovZAjTO6xG1WRiOebKIYJOQOlNGUGQOoYoXw2SOHPUZ5Bo7xC1VwOQ/RFXejRVJzU13epSSxqYpRR9qCqeQaVpQRgWBKQdNYOv4Nda3gR3fwzRqKjzmSgwyiOKcVC16j23xvONaEIb1dYxDZMgWqsoMiSzLFCpOXAGMm1ivSrKwZgn427Vu4c+PsxMNJ5iPd2bbIZj+EUFR+0gHQYf3CPgaLMbhKw3B5L5xgBfejvVYDBCwXcGkfEef9+HQ8j6aCiDZhjZHw4lezsD5vPRqhIVW6J7p5J9aBaZx9kNnpxP4V8Zfn8sJYdlnV1GxrllFDyzhEJnl8qj8ecSsk8vIYeFr8X3WD/OUduu+6YLcAFJFPTYOyeT++1kCu/MK+zRApwhDVL7q0nSZmKgtYQfrS8nynOcX6LwR7QNgQTsIN8dxvDn/5c31e/Ffm2QzKWEjOcHiFABHHq6LwW39KXA5j6qInZL3vQS3Xfp6/G8c0uA0kDP5X1dVVHPXSqtJzoTVqIBPcmosbt6Ufi27hKcjupXtHfkMqyyxzWl7JGNKHdUY2m/oFkdGHZd/C1XSfRZmXdGGVzWjnKWt6OsFW1k0ktoleqbdZa0pfAihuW8Nt7Qbf74PIbp/PYUmNdOve+dUyLBCYs0KfS5JiT1xJHWIhwToC1EIuyiIKkzXjFJBAqORE8wX3dD+PNDWviQdJvXlR0mJGRl16skBXfUsQGFO9YVF4mZlBDCQOQRblLAWVdgSnzdU+ta/jYs7inBulUpq0ZFOZvEuaSG5M9R4ed6aLzOcD2UkkQHUhJpb0oC7SmfIvF0EmaeiGETSfRGfAJtjU+kTWx6Hub7OaZ8rI8pQzML3UBTGZKZfO9vUuj6ExmFrz9x3X/DW50bC53oc9NNNL90GYHkg6VK0GOxJa+A5FOxKrMVcNSQfE5mSarsVpxHApKqcCchHyTf9kD5IYMM2s7Qk7PIpDxA7uA/KACJyqqvy6kRLkiDkOAA9Pmk56XgR0Myesv1rzjJaEheSkv3QFlBlA+QGZUZikpORoZIAOml8FwLkrgQUGgDUCJnFbI8oR9SeiLRPIzBq5XTBZJ62xXbrQClhqTebtVnkRqSoXYKlNhuhZvESCyZ64izSAYlIIk4rMigphQZ1kIgGRza5EroFYCiGzWD76qKAqScxXhnMwCjdou2B0UNSg1IZ6LK2ZS8TVQyzkW1YkdyFqvtM3tlJ5ljiLmGclO9t5cMN3Yf6CU9fpFH+pDLN3T3hQFELw8hYodEDLxoBykwYCi47yg5b+cBE3LeYqf4tgIIBEBaHzAYt7F7/HgEuduGK30yitwvx6pKVFSlsvtzjzDk/jVPoEd/LCc6u4IiLPfCSrIurBBQagGc7p/LKAx5kARg3YOzyN0/g6w9UwWQGpIAJARYRktDUsv5erKAUst//0t2mZ+NozADM/KJAqX7AYP+PXbEbylQuryIwJBnLWurqgK2nhsgZ7oo8MHZpZxfPq3kTznxBDcZwRSUx/oKLAFKLF7gKJ17e0haj58Hi2jAu3r6wt80cndvojv4/Vv4c2u6U4Tdos2vg9DkVpQ7ugllZzaUQdo4s4zM7qAqXD1IQrrKFc/hMHNWtaPc1e19SLpL2wkkaX5biuD1xS4SkAzxQgygzAtWb5uXMTvz3wMyGpKWN8tSeigZjuGxLUQFR27JEcNw/viwlrxIbSmQdHs0kXsDdpgASAwjCLevR9SlMVHn+uIcNSQhC7UFbfUWrBqkjhoEBBIAkrjHYCoQIAknqYt3/iok97MBuRok3+N792t8r38+tixtZBO0ge/ndzAYV5UoTguKFacxhW+kAcWLUquiRY5c99/ylnTjP051LRu3J7NECVpRJlbCBFCcgypWvb36JMPxCYYiZolhVMpz3sDlF2WGZJKKpCurgwQSpLr1taiAc13l+i4DEMKe97aySbSd/yCfxaNIB5WsybK9+o0AMkEl63jTPeAeNSCjnWQ+QMok7xQJ/EUz7a+pqsEWKngm6Z9LenDUThKQ1AIoUZyDKla3cmWRk1GRHyuRi2KdGhlSoANIYqsVh+tWs5oiu3ktX3hfep+aVBVgOo2qCyhxjominUsZCpKAJUZn4UxSgZZh2LSqStJpzZCFm+xQT6QHGWMMFkIDMO0jjHFVneEsGaBda0nzMkrQw3yxGsObMCQbySQDSAc066kGOnYregtJz9yLllVA0VMVRLoR25Mu0pFGbTRtwznOVRWJ1iIv73OVGsMEBykRaBgWjAQYdimhDaqCVaowN/aVKlU4IrjG8FvDBABwjqE3BlHw9YFytoitU/u9ob6wjYqzRsh5d6hspwKMkMEO0mQHaX0ygpzPRrJ79PQ1O7PdE8jcz27v4DSyjs4h86cFFPxtMYXOLCfr4kqyL60iI2sVmdmrKcSPgUsrKHh5JZmXVpJxcQXZ/DXO+RXiNrH9GvjXHAofmi2Q1FutciYJUPL7AmOGp36uW0f01+FMNLRrQj6ZO5WMb9lZfj2WrK/GKrh/wf/9H6N1ZDiZ7w+l0LuDpRBJFTVF6ZUhshUbfGmQSLJpvcpYCMVQqJDVVbICSi9QXWfE+oHxG/K3ixjRoQQshBQQw5Nu7+w5ze5k8t87Z20Xusxgy57WgrJGN5Chzc5IBseEVkQzMdiZv2dxF1lMYUs+tLQDGexCUS0bWNOJIdlRlLMqL/EHry20iuiWEmueklS8zm2XpyhXicIePdfSP5ss0BYir2MvaECHpevAdLz+AXjRKLQ/MRyHt+JFaiuBpN2tEbkt60jGck7DSnJdRzoxJPnjkW5qtJbdpa4SX9vodw7xNR/kBXKoDV/PcJBtanrtITXU0U6D6hSoU00qXc9nqBF90i/pQbLgduvhVIZk+XL0fWqSAHJ3+QT6lt//KlV1F+AoDOYG9/aNfG9+JIldJN+315YuSbNKFqVRDMo+JUtRu+IlD1W9/r/EReq3Wtddd2p4sWK0rFQZSd1BkLmAsgAk8cvTAjBf4pXHyzJnLFGkJoAoSL6uAcm/eA1JeZ6kLH00JL9MUKAEIHfwKmeXbAUk+dM9AMZTFdPlsSAk/aKdvwDJs164uc5u1XCM3m7NrZAuAih1JatdSUlDMoxK1qtAEvmpgKLTorZcEOFWdeXRRrCx18oRaVpLtl3xPeiRxFQQQPJs+WSZDWk3qCmQhHAhSZoOnGS7mnIeGQ1JPdTY9eR0rScXGYp2MI1A+rSw7TNCRcJpQGo4akDqGXtYFUeDsqCiwRgtPXpIQ1LaOiZG9T96LR6Y3iFarCoUZYjv2q7k3txVHKTkhd7jnXc91MOf1oGKTGSoOuwWw28OFUAWhCSkAem8P8yXvP/uUB+QOHe0P1QSQLKLBCTtTzMZLqOUvhlL4b3s1L6fTvaRmeQen0/Oz+wI/1xO9oXV5GatoXD2WrJz15ITWEdmzhoBJWRdXiWgdBiicJlwlMavCyn401yiI3MpfGBmPkiaHhwhd+80X3gfjhOf11uz1l4G6r4pIjx39rDj3AuospvcMZ7hPo4iX4+n8Ff8+JkCJRYDGpLWG8PzyX6dH18bRuarQ0WSDfuKSvRBdSz6MDUwUSUbfnYIRbYM9qePoP0GVbHyN3q0D9kPqN5KLdkF8IRdAYEkAxIu0727l8i8rReFVvICaX5HCRkIZjIoh/LrOLMREUOJ5naiyCKvmEdmhTIol6Ggp5MPx+yV7UXRkFSVsh3VbgVmjfLP15CUwIIoSGqhuloC2LWz1HD0AgZwnq4j6wBHd1xLkZ4oAkBKMH8BSEqvcpcGPiRRsGO3rKkgiY93UbNf9XWM51Jn4IESkFRnkjWUi5T85prSQ5lTq4oEDVysUjkvVKBA4Y4fcF5e6WD5ZB+SO1Ix5F4FubyfoHYBYYIAyQ0J8XRHXBy7yGI0reiNAsmBsXHU5PpCP1333/Y2sUf3h1sUKnRicpk4Wlsqlh4sHcegjJERWdhafbKs0vNx6JtRDlIAmaAkYMT0j8QEgaMek5U3RxI9k/F+wPlHyeXoY6TMJyQxIJOl3QMHxziH1PFzOFA+zKsbwBDgQ8wSgnqj9QP/waFoR1kQktEtIDrg3G/38OAYvd0KUOpkHb/do2JFMtNVniumhKBoR7Zaa6miHalcbYz81JpSyo1Vnxy2oxq1bW0JHZfg8RY1iVDq3by2OEqrblWpjs2qwgBPSxRXiTzXSNM6snULuEqaDs4r2tUig0Fpeok6UrSDVB2EmPdQ8+ucnvWUetWXSQQSlzUir08RRQU4O7maI4xeGTveFtIVGteigJqJdDoJ+t8gqVzF1HhvWoMetisTO5Z5ySyrVbyZdRtCtXtI7x3SXuAeg4+xnuxFgc29JT0Hjf4R3MTfHyEy38O4KXXzx7ligBUECBgIEM4XRR/wjf79wfKoJWeO29hFfcwOi5X7KeuzYRT4fDgFvsqknB0jKbBnnBTpBI/PErjBQRpnV1Agi4EYuJVs8w5yrDvJtpUs6zYyjFsoGFxPodx1rDVkMTjtrNWyFRv4czEFfl1AdHSebLka+6ZSkAEXYsBZBxjE383IJxT4RMvwZB6cSdahWSI8h/Dz5HsEvAzMnVMlyMD5il3qZ+Mo9NEoCnyQSaH3VLRdtBCSIA6TgWlEA5TBKUJgwctDfQGcCC3QYQV5/Zf9/ZFj5mO9o0aS9RFhVBkUfoAXRPezi3ywi2zTAqQh/N1xBr26K+XOaUk5E5tS1oh6lD20jizoaDyDcnI7oqkdVOycd9aIxRZgaCxhB8nQhOSck51maHFHKf4BWCF3IS/IGJaootZpPnjUU0aiHaaqgG3ju0hJ35mkpGdTGl4YustuF9LuEtWvyB4OoKqbIemOaK0g2beJXK8AI4p1cppV8cbZNRBh8Dmkh5DLkPLO9aQYT677trUlLAQLZrhIQBLFgRiVJ4CUMX5qhB9iOTUkdeIOhtDnH5mVIvdYmJEd/PzzcioB7U3c2+PLyjjEx/i+Li6S7/kLihWlcUUKU9dSJalR6dL7/k8Fmf9P3gDJ8SVK06ripem+EmXoMXaVmCG5CQECCbECyWdjFCg1JF8qmyB6xdtqvRokUdGqIYn0HQ3JT5JS6LPE5GtC8nuvCuuvQFIX8PwnSEqOa3p63kirCvllVq4iZ5E6UUdvt2pI+sHnHiSt2spFSlpOE37xtuQXc6s6atUnCTj5hTQNallbIInwALcBf0+9apRbvaL0TP6ZWla2YLEdK1uuUZCUyDm4yQ7qHBJTPuyeGMWTNwDZZTiGezeQET0SsjykiUASxTVydlgAiHaUO8SK+D+BEucx+eX1j01sITImNBNI+v1n01UFK86B5Ma2VAES54/Wmi7SX+fe2ZPC9/SS/jupnHy0t5rGsVlFyyE7ldjx0NujyOUbvvPhSLI/yBRQApIiFN8AjuwORVGQjIbjtSCZ44HS2DGagrvGkHmAXeRRBtZJdpAMSPfcKgpfVoB0zTsp4t5DFL6XIhGlcPguhuXtIse8jWzjZgqHbqZIYD1F2HEClNafS4mOzZctV0ASgESVK4p58DHI76dkCELO4dlKOA/1FD42T6TfF3fK34tiIAQZuLunU3gnu9GvJwskjW38//ShN6LrnRH5pUEpcXfD/bYR5w1Pr+UXHKa7dYik+uDsEqBEhSwmrGDaCkAprSNeOIH9WD+R9WhfgSXxAoge6k7uw90lcB3O00A4Afot1/dUfY/TW1POyAZ0aVBNyhpYm4LDGshrNAxYzsqbGiIh6Mh1XdTOByQerwVJSAPSD1/3tv+lp3J+1PQSuMkoSOrFnw7CACQBxmtBMheFOwUgiYWt06qWHKEEW2KrtQFRj8ay1aohaXWr56l+Pkii9Qv3E+wsyVZrU75n1IODTKNzGeVFF/g+FQ1JCNmtp7z4ToBSQ/IQ3yM1JDHgHpBECtrrsbH0QqyaGfwo39fv4vv6qjJlaF6Rm2hM4RuoW+lSVKvIf9FZZMG3xYMH3tWm0PUnJpQoSasZhgDls8kp4iiRurOJf5Fb4+JFWG1Ew9GvZo0ajSWA9PRBYrynBGlSRdEOBnoiSBcxSAJIFoYq7y9XLi80IAqSAB+2DPQgUeh4mtK/226NTtyRwcfpaXlpO955pETRIbS8QOSchqTeZkVgAAIEEDVn1qgskJT2j4aYzFFDLgJxjl4/owSNd1QFNlCorSrAkXJvnFk2qy7Vrth2RUTduQpJ8ojzSlTJAqqogNNOUpeI661WDE9G9ByGF0OSsMOy+7GzHOgFMCPxxmvFCHkXuF4J+9uj3kWuP3dNeRDUK2s/PHpKC5HpldUjfDo0q6VMbsCNDNtkKLgIrOEb2DrVAyljmBCgzW5CqiXZhQSf6kk5G3tS1pYelPNCXzlndN4dThGGI20fQ/anoyi0bTjlMuxy2CEGGHh4X7ZMo2Rs9wQQbh8iCm4bnPc+Hr8YQaFvMin3W9ZOBsnusWTsn8AOcjJZP8wk49RCCv2+hEIozMldz+6RQRi5X2TRAyI7Shbhc/eQ695NjnMHhW3oNoElzi2N88uJTi6WVpDg4ZmUe3C6PKJ/0vxhrsg4NkceLf4a+8f5IufEAl/WvxaReWIhGccXUeiHhSLr2EIyjy4g+/B8Cu2fTdZeJXvXTAp9xe7ys4kU+Hgi/z4mSg6sduOQnjLieEJRkxQ3vZkpkHRfH6GGRr86TKS3ZnVLiT6r1PMtkRULwVkCnHjELE/jyb4UegJ/3+6U+0RXCj7cVc6c7Qe7kXtfT9lid+7oxa8JdpWr+Wv4tXJ5enM6n1mXzvarSrl9GA5DeAE4pgk7y+ZEE1uyu2xNNL29VMKGZ7WXamkEURgMu9ACdpgLGbiLGJaLO/mw1EO6xYGiL9cTinvEmc7LC1tHcLqcS3rh6LL4G6fOHXG8gEVieGJrH5KQuEhMsRnNn89sTWEGZGQAXzOY69pRQU4g2byK7AiFsbXas6E/wFwPQsfsSb+9q0NtH5JYhOPIBpXzOXyPQFUrWj9UhmslGQIP6RFaOuAcRuIoQ1EmgZRT91ZE0u0tnyyBLdvZ1LzD9/O3+H68he/3T8Ym0D1l4mgdA3NGkaI0i5kwomgRap6cQPH/vP6n6/6b39oXvvH4GP6lrGf4AZIPFilGm8smSoUrQgawyogGpd5mBSDfSEy6cn5kFCQxMxIHw1eDpE6fR0/kvuRkafs46G23oq/nJxbg9z/Zbv2tfFq+gp2zMhGkvEDSj6OLOo9Ediu2WaNDzPV2KyApql5ZEnaQyWrVrPJvISlFNp1U5andxRODEkk5EiGHc8sWNdX5JFpCqlYQSMJRZlWvIFVwGIMljcStqpHRuvo1IelgHiTmOfZpoORBElPTUZWqq081JAsC8i8rCo6Y2QehEtGZ1krk950heHpOawEkElFkKsSyzmSxc3Ru6y7VjnRPb4o80JvCG1TSC1yIsak3Bbf0ocBzffhGPJBdzlCiDxUg6eOxZH0y0ockFPwIMGSHsz0/KM2Phyt9okCpZX/GcPiUv5Yf7W9Gk8VwNPaMIWPveLL2T6Tw4WkUZkBGfmKn9ttSss+wA7y8htzQrRR27hVAOh4grSg4agGS4TBAyW7TgW7PD8lTSyj8r4WqZ5KBaDEQHQ+ELn9cwxDPofBPi/LJ/mmxgBKQ1IqGpPkd/7z9c8nexy5z9ywyv5lG5heTKfTpZP59TCL3kzEUZmcJwZWHP+DH9/lR651MpbdGCijDb2T6oBRYemeYKPixvAIfnFWiOhbVsLp1xNk80BdgCVCKNrNz3MRQfKKXVMeGH+6pXgP3s8u8px+/LvpQ+Ja+5K7pSe6SLnI2GBzZkIL9alJO72qUPZBdVCY7sAktFCQnq7FYmCiCamlA0lzQUSCpQSmwXKCEallIisYW5gWoO3Ju2VFAqVN6MFUE/370RBENSRmddRVIaicZDclw/6Zk9GigXGHLmt5Iu2oCP0DSiTouwfVs9Kyvcpf5fiEtXu3VdiuOcHCUkzdLNq8/UiXuVKLTuOells+X3arOJBUkJb+V76u4t8KIoHvgS76Hb4uPk2lNm28qQq+lptETMWXp7tKxtLp0GZpdvATNKxNDA//f9VS5cKET43r1eeC/GpKp/7zuVLN/XHdqJq9G1saWpUfLlacnEpJoQyyCzcvSs3GxPigByZc9F6kDzQHId/l9TLL+kD/3IeDI+ihJzYrEzEgEB+APA+e4JyGZ9iaWEzAqOJbzlJQ3MzIlNS97EHvrgKNWFCSPSxVs6lUhec7fakUDf4W8vFZ9HpleXkZdIdA8etqHGsBcMa+qtQZDsTo7ThTt1K4qZ4pGfdXmgfNIPapKLgj0OnVXF4HeDjW716FQ11oUbF/Dr1hzWtRV5ws1K9I5BuQZBuW5jHKUyxcBwIvDfvm5LfPSONDqgZ+tByf7o7C8uZHmgAYyAFZ6HUfnOUT/TCUqGu5/It3naEY3YiMQwBtdBPco0xnm8dcuZEgubivFFBJ+vb4zhe7qomYWPqC222RrFVWSHhxzGI45L/aj3NcHUOi9YdKviEpN+6vRoiADLpdhF9g2RBT6mIH46QgpvIFMD4Ba5heZZHw+QrlGlvV1psjYMZLMvWPJPDCeQgcnkHloCru4aeSenEPuLwyk0wzIs6vJurSOjMAdZDn3MBA3kEmPiix6zNMj/P7DrIfIoAdZ9zEo7xNY6m1Y17qdgrnrKHBpFdkMXuvXJWT+spiMn9kN8r9l/LpYOVYWnpu/LfGFrxXx11vyPfx1pxZT8OQiCvy0kHIZmKEf+fkPCyh0lJ0kQPn9PDIOzBE3ae5iV7ljJgW/mkbGF1P9Xkr7EzV1BBNHrA8zpa/S8Zwl5OIxylnabw4T6bPL0OvKUWpYhl5UPZiYQGI/O1AkQfPPDvS3ZXF+mfuMkrmprwSt04aeKl6QZT/AbvMhT/fza+IOdperu0nMXM6YenSxf2U62yuDsvvXIHNYfaJMdpW8AKTR7CrHtyGa0l4Se9yZHaTFyGDQBee2pdC8dv42q6p4bZe35bqofX4t9Ap9GJZy9jlLzafEa92Zogp0/PmS49V2Kx4BSAQh5EG0hWy1ov0j0reJAA9HJXoogVSrd6othXaAY6hHHZGGJD6mq1xxvct136qOQDLUsIYA8qJMB6ngQ/JcpQw6g4HzaRX87NZ/eW1xuEceS1W7ckgtO1guUe6zKJT8hA3Re3Fx9Drf31+Dk2Sz8ggbl/sYlrPYJGVeX4gmlSpNfYsUoXLF/48HB/zVtw5FixyZxAC8K7UC3XxTMXoyMVkguSk+QSD5fEzsFZB8M8mb9sF/AJkZmZwoe9yAI4R5keiJhGSosncGKYBMSmEgIpE+NUrlZOYZMlox3sXPHowG5FWc5LUgqedKApAFISmgROh5hdR8Y7AM2WpVQ5cFkCw4SUDSqFmZ7DrVyKlfXfojpbHXK9iRrdaOdaRCDYAM92pE4T6NRWjwN7rVplCHmn7FGtL/Uc4drFOZLlYuL5A8UzFJDuXhNqldQ3Lb1VXFQJ6TdLqoQ34A0mYHKQOQPVDKQGR2kXIeOVLlTfrbpVfJTv2rwvw9ANKIcozYkhJhAsNsFS4t0xkWtFETPLwWD5ngcWs3H5Io2sCMQ1RGokISMx5RoBPc2l+yVdHDiF4/VGiiUtP5WoHS+DyTQgw/45PhAke0a6Aa1f18lNfCAajyTf7LUSLn69EiuEbI2TFKZO8aQ86BCeQcnETWkcnkHJ3ODm4W0S8qKCDyxzJyzq0h+/J6MoN3ku3eK5DMg2N+SCpAXgnJSORugWQosJ6Cl1cLJJ3fl5F7erk82qeXkfX7UjL535PK2dPqY84f6rl8DRwtg9IWYC5jwC71QRk8yWA9wc+PL2TIL2BXyW7z0AJxlHCT9p655O6aQyaD0vxymvRSQvkmjnykQAlIRjtLgBKuUoMSwtmllnaVDoLVX1J9lzirdJ8fnE/RsAw821+2aOE6w0/2JXq4F0Ue6iOTXNyH+pP5cH+yHmFH+hDD9m52l7ewVvUkYncXGd+EAkPrCiQv961Gof612Kk1JhrFrnJsKynwwWtUEnL4tRmY2VrGrQXmqNhDgaLOdi0wiktLQxLS47swn/JqkMTzq0FSdmquAUkAUhK0UK3OC11UsgKIRs+6MpQZ262Q2b2eD0npn+TrHgHoWIgHeFEOQJ6rWp4uVCkvkFQh5wqS0Yk76BdH3/iPFVK9Y6lUz0kqSCL2czsD8t3YWIEk7u33FylKD/K9fjkDcl6JUrQgOYUms6Psdv31VKFM8UN/E5Lfyt/wj1Ptixam8SWL033pGfRAbAI9EpcoTvJphuNzMfFSIqwhKdusHiR17BzACNf4cUI8O8iy9FmyStLRQeV7EFbODvV7XrEc5D/CoXKpdDilPIOxvEByH0NzPz8e5D/2sbR0BqUS2kEgfQCtzyQBRy0p8uGfg60HlEOfuwYkBZTsHiENSf88snK6SBfq6O1WcZGIo2NIOnWrq8KbRmraOFZ6cm7QwWvsR99i74ZqG9RTqF89CvSpQ7nda1Fup1oKpu0bCAxN/llZ1dLpbHqyD0m4SOrAN4L29aWZGMHm2LLFClTcKX6uNwrL6K/gqM8i3WFNyR3VzG/RkIKDSWqgsVTs4aIvMDoouifMHxkU9XnMeQzObJVXrarHFPk3n9ZkLGKYLmWtaKcG8no5rEjQCWFWIXI/H+0pTgL5ocYWNeMxd2s/OYNETBzOEy2GnPntGFHoW3aRDDd8LFrul6MZogDpaIGihqT9lQKk/e0okam1ayyFULm6X7lH8+g0Cv0wjawfZ5H98zwG0QIFp7Mr2UXeTEbubRSy7qUQ3c8wfIShuJFhuYn1FD9/kvU4f/wxMiKPKIUfEFnh+2Rb1sX5JbvQgHEr5Wavo9C5FWScRx/lKlHgwsp80h+HzHMrRYAnIKrEzvF39GvOp8Cv86T/0jg1XypwjRMMwxPzZRvXPDib7O9mkXVgJtl7Z5CxazqZ30wl65txIvRUGvx7M6Imj8BdApqQ9RED9MNRUuxjvJ8pk1AgTEXR0lWx0duvWvbWISLrhcEiPcLLfm6YL2cLf37jQDKe7C8ynxpAIWy7P95fFfs82Ivc+3rLtjxagzBHFEU2OeOb0fkhdejyAHZVA+pThBeDNIJBOZrd5Pi2RBPZLSIIYLrqfcRrFQu4MLtKey5DbV5rGbUFR1lwXiWEXkxszeo2EYQNSITdFFXMptN1oltACkISuzeR4a2JBrPL7d1EEnQwqSfULEPyV1GXEGZwhhmIWDgDkDgm8R0lWri6qJ5oqWptrSrjAw2r0GV2kRiz9WelVCnYQX/kWb6Xof0D9zzoF0+nMG8XA+rTlJuEsTiUhvPIJNrJ739Wriy9kxBLr5aNkUCY5/m++yTfO+/je+iMwoVpZtl4yixTmgYWL0odixc5MnLwf/lWq37beMvqMV1KFT80k39p2HLdUDaZHioTnw+SEiRwFSeJIZ2SzcorFGyvApCfIo8VOawp5STZYa+3parhqAEJAZD43J5k9XV4/wjb/mMpaXS0XHk/MUKDEn98rJJ+woqpQnmBpEzlvgYkL1VKV6D0qls1JLX8wp2MCiJst0JWRaWCkAw3ZDg2riUJOYAkHJ/Tsb7nIhsKJG3P7YnjY4AZ/euT2UedO+DrqBNDsA1DsGld6ZNE8Pmf6Yl0uXoF2W7F56hdPYmlctp52axYZfZscMW8SD0h/WqQxDZrQfDhZqIl8/X0wNlrQBKADM3SgGwr8/xEfNORG8/CtlLBai1Xg5JNKdLpqm5y96pzKJkwwYB0n+hzBSTtd4ZJ5SpcofsNu52dY/NBEo5SyxYwainnGL3NClBaO0bmg6S1e5w6f/xuEtlHGI7HppNxfDrZJ2aTAxd5ejGFz6ykyIU15GbfRo5xF1kug4+BB0gqQCpIKlAqSGILFpA0Iw/6kMT5JSDp8HPDvoOM4K3kZq0T2VlrRWYBOQxSLfcSv39xDYXPr5bqWgH3n4sFlMbphQJL87dFkhFr/swu8qd5khErZ5xH5slEEoDS2TeTrD0zydk5Q/VSsnxYfjVe0noweQQOE6CEnO1jyd7GzwFLVMW+P5LM9zJlKopWNCSx9Wq/NMSX8+JQH5TRsCwISXvTIAElAAkFkOLzaF+BJKaORB5gt3lvH3WGfUs3omXdKTK7k+yGBIbWp6xeNSm7e3UyefFJmQykcW0Eku50FQoASEpIwMyWardjXusrICnnk4tUmo8PyihIojr7apCMrgi/Yrt1VHNVtDOwOUVwH+hQm0ItqlJu43SBJK5j6taAqFcDaddC8AcK7gBLcZXdvRavdnXkmCW3aRUGZAZdrpNO5/m+gIHNf1RM4cV0ij9LEsliunDnZzmXVC7yJ2/HDdut0ZD8lt//NDme3mZAakiiP/6ukiVpTamStKBUKZrCgBxWsgSN4c/V/29t+7jWWzL/QgYxKJcxAO8sGUuPxCTTU6UTaEs8QzKu7BWQ1GeSepv1Ywbjp/w5BJajegqA3O1to+KcUZ81aun5ZhqSaAMBKPczIA+mVhAdTk67ApI/VGBQpqfSiXS1tfDvICn9kZXS5VzyAn8fBAeZzRDMYceIx2ClNF/RkLT5+yCcRULoZbTrVfdj5iQiCu0fOnwcDf04jO+NbVB1Zhjs34ACg/lxSEMKDmog54lo4Yh0aSLz5KgVA7R+dTlngJM8XzmFcupWkp+NrRaM05HK2PY1JVUHWzL4GUb/xv4w5eg5j/ZwFRIgW0ReAs7V4BgNyWvBUX9NkAGJ0nvpLZvbzr/ZAI6iJW0LAFI5SDgC96F+5D6m0nMwokkSdBiQoef6yyir0KsDyN3OcPycneGOcRTeNYHsPePF+QX2jBYhCUeDEduscI4ajHiuzyTNr0bknT2KgxwtQnGO8f0ksg6zqzo+g6wTMyn0r5lk/DyH3N+XUOTMcgqfW0vh7FsoErybXIcdYeRhCtBDLJxFbhZpWCo3yYo8poTzycgGssMP8vc9RC7cJIp7wveSbd0t7SFW6BYyAl4/JT8awZvzyQ7cLNW0bs56BUwGJQIMrPOryD7PMDzHbvHPuZ7ms/NlOP4+lyHP/w/shiMn51KYXWX46EwJQ3D2T5XAASi0ZyIFd6u0nuDO8ZLUE+LfdWhHXpC6HtUFd2l+wo8f8yJlu3KWcJWohoWrFEi+OVRGjZmvD/MrYMOvDCP35aHkeLCMFj09kmgL/52eYTf67DDKem4wXX52EF1+ZiAFUODzRF9ysZDa0Ettx/Pz4MM96NKGrnTxIX4t3cHwXNWbjAWdKTipJWUPrEcXulShrK415BoLD29G4dHqrBBHBLrq2pnK0JrOH5/Fr+05fC140oVlV0BykSrikRYRXhAG+XsxMQRhG3JNeelUfruUdz6JxSi2YjEEAJmtUnXetZ4U3QWaVBJIYnB6pGMdoh6N2GU2VEcw3narhqRM8OGvwZFMoBnDtUElyqrLi/tafP+qUUkGLp+rUsEfkaVDBHAeifteQUiioPEYw/Ega18a31vTEunL8kn0Ubk4ei2hDG1lN4mpThvKxtE6BuTSmNI0vXQpGlq8CI3m7+1atPCxxjf9lyXs/JW3boX++dO0wjfR/XFJAsknSsb/ryGJhtU9DK6DaWoq9lH+g+KsEdKQlPlm/DU4n9RO8kD5CnSofLpIQzJ6y1VDEm4yGpLYk8cLBi+eq0HyPL9YoiGZW7miSMMRit5u1WeScJAizImsX0PaNyAdJCDhAf8GkrmD6gskQ4NVwQ2CAMKdG/uQdJvUkVT/s5XUlqtMCmhQRVwqvsbyxmEZHWtRqCtfRD3rU6hfo/8ISX3+qGGHlbbW1SBZEI76a/MBcr6aFB9eiIrBdiJA0l7RXgp17JtVmwccJD3Yj+iRgRRh94g5hjLTcMsAcp4bKDdUpOhE+MZLn40l+noC0a6JRHsmkbN3gji/4F6+Ue9D7JqG40g5kzQ+GabaOVC9ys/1disAibNHVK/i/NHeM1bkfDeZrENT/DNI56fZZJ6cTdav86RYh86tJLqwniI5txKF7qGwe79AMpcepBwG4H+CpC1bsg97gNxAYf4+CKAMu/dJxatt3CqADOasFUiaDE0IgMT7ACQEQMJtXg2S1pl5ntg5/qFA6f7KcGQ3TD+z2FXSD8iKnUHugWkU2a9kH+DFwf68xB4k9Vj8u0YEnuTUfjORnK8m+O7S/owfPx0nsISzxPBpFPbIIGoviEDN4RzuV8BGXh3ug9J9aVg+0XNjiJ7hv99z/Ld7fgQFXhxOuVuHUe4L/Pd7ejARg5Oe6C+AJHaUyIlFa1Du470owIsreoA/fzO/Zpb2IJrTmSJjeeHWty5d7lJdFOhXV11fo5qoIrWJTcmYxNfAFIbWNLQoNaXgjKYUYAVnNsvXoiRTaPR26yJV7YqWEH8W5f8Qkpj+gZ0eFOjksnvMapDGoKxIVsuqRJ3Z+fZqIpC0evB/c/fa/lYrniNWEsV/wdY1xUXm1K8okLxUuyJdqlXZH76cN3S5ojjK8xmV5VzyV773RUMSu2w/VsRxFt9XyydK0s4XqYn0QRJcZGl6gZ0kIHk/w3HpjTfQolIlaHZcLI2Nj6HeJYpRp8KF/gbkVcdoFbn+RM8ypWhabAzdUzqGHi0RR0+XSaBnYhLpyeQk2piaQJtS4+jZpFh6MzaOPowpS5/GlRO9n5RMHySXo+38h/giLYEO8NceTkXALopv0uk4QwtTPY5i1pkU5KSJAEG0fSCAF4fLiKWDkDUIYcjy8WSGI4P3X/xvnGSQouT5d4bwnwzXM+WS6Sy71vMMYhlqDNcIKFasSBcqVZIt1mz0RvK/hUcoJ13F0KkJIKpop+BwZT9UwBusjPYPu1ZVCQKwo5ykpSd0dKojvU7oecJBvNGLIdmXHeTAJkqDGsmcR7t/IzmLkJVjp5pS9YZEjks10+RsEtWuwWpVKVyHL6r6DSW1J9CmJgUYlKGudWULF1s6LipZBzSgyPAmUszgjGii8lbHqwKd4OQ2FJh0pXv0g5ynq8Z/fYaDLVXMeQzNaZVPfqwcAInmbDR/S+pJO6liNRA2vb6jjE3CeCvr3q5kPdRDlfs/xje9jT2JNvUi9+neZL6g5jwG3h4o7RxZHzPwdoxhdzNWtkXhIp3d4ymyazw7y7HkfjNGtmCx1Wp9OZJCnw2n4KdD+JFvsF/yjfrr4fy9w8jcyTfv3XwT35NJob3sfvaNJuMAf8/37JgOT6LQD1PI/JF1ajqZv80g88xsMs7PJePyfDJyl5BhMJBsBpd7Fxnh+8QZqi1VQPAJT8+SHdnKDvEFJXrc23r1Kl8jz3jaIueYqgL2XnLoTpFNt5EZxr/BoLRXU9BeQaapZIeWkxlYqv5bcpaJzOwVZGQtp2DWLJGZPduXdYnfvziT7HNzyDo7m6E5lyz+/7JPzSL7X+yWMfvyyFQyv58mQe0Y+oypJpC1J08SffftRDX1ZMdkMr6ZxL9Xdpyfs5NnWOZ+quZXWh+xu/xgNIXeH0VBAaaS/fZIv/oVzhKSsWSvDlEzPF8ZLGeXkhO7daBUxCKcAMJ5ZRD9ls8OyBdSoHssg4/3psBjvSj0eE9+PXWj0J3d1NxRZLJO5Nf2oCaUi+KYDrwIRZFb5/pEfVsSDW1NNLy5qoId77WMTG7F4sXh1LbkzOAF3WzVNgJHGVrIDnMxXxNL2qhHfm0jgB1FQNmTWlF4VFtp7ZA5qmip4p8FR5vLIIZCE5tJoRwcrfQtd1EpO0jXQuDIxWbplNW2qmynIvADo+zk6IUdJEJAIt1ZKNbBHEmMw6pXkXJqp1FWbTU/0qrH96H6GWQ0yKBg3Sr8sQwBJuZJwlFe4EX9hUqV6Vx6JfqzvAoVwLkkMq+x1YrsVgSbf87G5P3kCvRO2Qx6MTaNnohNpjvZ9MyLv4lmx9xA80sXpnklStDEIqVpRMlEqnRDseN/E/Eqb5VL3nSsd2wZGlPkJnqA3eMTpRMEktDj7ByfLBdPG1NiBZJvxcULJD+LTxEVhOT+lLIMvkQGIKBYQYAIQOptVoBSQVMFCOCPCVBqOGrBdf5YTiXbn0rJK9DBfvwZGYOVIoDUkNR9kQLIypUph0EXzMigAL+fy+AEIEW88oL0meS/gySEIIGrQdLtkDfnUUNS+p68bVEMYRXh3JAvbHegFwDQsx65XTEapxYZzarR5VoVpMr195R4+f8wq9ckasCOkVeWgCQGLeNM0+ELEZAM4yxyYEMBZEFIwkGGprQVUP4nSOoMSxmEjMiuua1FqA6EdD8ZFEae5pKOCpR+UDnfbG7pLHMFERTgPtBDts/gCOjJAUSbe4vCz/Qha6ua8yijqj5moH05mh3NeHY3E8jdN5HC+ydRZN8kdpTsKnexu9w53j+PBCRVewffjL8YLoB0dmT6kAQg7b0jBZDm/jFkfjdWIGkc4Zv/8akMD3ZVvzBYTjNIzs0l+9ICsnMWCaAsay3Zzq0Mv7sZkPerLVSpZH38CkhqaUj6Va8MSHzN1SBp0x0CSSuCf2OdgNJw2SXaq/jfXkmOsYKs4DIBpRVgaAb5Y4HVIjN3rsgJzBPZeJ41h+zL7BovsBu+OJ8iZxeQ+8dsCsNZnuKP/zib7B9mkHOY/3/3T88HSaT0aAkskQ8LfTtFQGl9rUE5QUCJOZb2NnaWH47xQakh6bwz6op4u4Kw1G0jqIY1Xx5CzsteTqwXdQfpSlhnc3+/x1KHESCJyX2kJ9n38kJrfXeiJd2IZnQWeLl92Tm2r0c5rXkhiWrQbo2kR1EWkOwu7cwmZI9tSub4Zio8A2Hl09qSNauDBBBIwMCiVgJIe2lb9bhY9V6GZrel3CltiMa0l39LxsNhPmoBSCJ7FueR6E+WXaSO6npGbCV0qTnfc9pXl3NI6t9EUrEASWyx4h6Ar7d1q0hTjNirTKH6laQvEjLrKlDKx+qgV7KScpXVKkigQDQk/0hVIefYYUNVK+6tMB57k+KlT/3dxPJ8365IL5RJpUf53n5bTCwtTWFTVOIfNPXG62j6jTfSrJgk6nrdDafKs/4m4lXenrxz3aiq1113anRCPM0tXYZuvakkbSmVyJCMp8fLMjQTY2ljUhl6LlFB8v34BNqekCJC9Nz77PI+YrDB1u9LLkvfJydIsQ4KcY4yKFGoc9BLf9DnlNiKhQDJq+kE9tvLp9PPDLbTFfmFwO7vbIWKKihAxl+VF10sryTPeRV1OaMiZVfJoBCDMhqSOsw8h78OMqMAGQ1JXd1qVq0kQgGPuMk6VdWWa1OV2YrZcG4nL3exax4ksbUKoGEIK2QPacoXUjORgJIdpcsrSadbHSkVz26cQeeql6ffUuPpdHKiJAJF6qrA82Bbld2K80wU7diDm8sQZRmk7IWXy2w7FOogZHwqqvOUCsJRhh6jMGGmkunlWGrnqAGJVBIVCtBZEkyQl2ku7aiGJC9To4owxQNnkMad3vzHh1U4OSZGuHzDc5/hGyDc41Z2Bi+xg3xtAAXe45vjJ5lSRCIh3Qcmi7AtKjowicJ7J5K7Z4I4SuvrUX47B55jW9X+hm/QO0eSu2uUOEjAEWC0DrDjARhZ5uEJZB2ZKA7SOKkBOYfcs3PJZUC6OYvJYRjZ5moG5M1kh++UcABTwgIeEfD5Fa0AYOTl/KItfiGPgumzV4WkAmQeJO3IepETXiMyrWUUMpZQKLhYBFgCmq65ksLWKvl8tAxzKcN0MbvORWRlLyTr8iJyLjBczzDwf+eP/7KAzJ8WUejEAjKOzZP8V2TFytBnT3gf4BR5rtLexc93TvUdZfArhuSXDEkMev54PJnbkQk7hoIf8iLkfSXnvdF+e4j1VqYvHXlnRIGzYDYsMmEhhBPYzyvh9eI8PUgmj2CWpbmpvwgtQ/bD/LpCQPotPYiW82KM3aA7jkE2sDHlsEu71LE65XaqKT3J2M60+9Qj4s+FBzckl68TN7M5uaO9WaeT+bU9U82dRNuSRCcuaysV2taittIzacxSi0xs7+L7ZI4qO1ME98t0GwYuCnekf3JEC5nj6nStL6EBGLou9wlWbtMMCQegnk0Yki2I+jWVKnWjW12pM8hpXYVCGK7O32c3qyrxcyamB3myG1YRIXEH0MytlyHJO5eR4VqlksylvcT3NtwTT/P99VSK6pNEfyR26LDN+nlKgvSxv5ZQjp5PqECPlS1Hd8bE0fIyJWlSoetoQUwRmhtTVAIEMouXoa7xibv+puG/eWtYuNCJ3jcWkl/Yo0lpAsln2DECko8nxNBTiaUFkkhreI/d5jb+hUdD8kN2j/ijYPXyXVJZgSTgCFCiqvWgl/4AUEbDUkNRp9YfTWO3WSGVTjEYf69YmU5XqUJnKrMqZciqCduplytW8oPLdRarABKtHpUrCSTzuceobVadtGNew0X6LSBVlFDhKm7Sg6Tuk4x0qC/VrYAkEnGk5wmpOEjE8SCJQawCx2HNZYwVDWXxx7GyxBmFi+/l1XCwUXXpg/qDX9wXeEUYquqNzWpfh8LdG1KkL6+SB/KqeFAzBcjheSOvpKLV64W8GiT9IbPe0NloBwkFZ7fMB0ldBegs7ZIPkhJUDq3pqNJ0vCkeCApAFWv4yf4yLSK8ZYC66bF7tF7im92rKk3H2jZCRjtFdk+WMzP3+6kiANJmQFr7JsiWK6pcXWzDepB0dozxpPoeAcjwbv74Pn48wB//fjy5ByeQfXgiOUcmkfvDFApHOcjw73MofGY+0YUFRNmLiRhGEXMNhZ115IZvJZfu9iFpylnkY1HnjwqSDr0SpafzQTJ6u9WMPOX1Ut7jQ1JcZBQk3chaEQAZCC6iQO5CEdwkIAlARuzV/N+2SuS4K0WWvZw/v4xhuoSc3MVkZy0m9+Iyss8uloHP5q8MzpOLBZLmD/MlGF2yYb9TsNTSDlO7Smf3dAElwtK1qwQs7S8mk/sZP34yQUBpbOO/yQdjRO77YwSK2HaFq4wWPiafi8qGRZ+l/epwgaS/7bp1sASoQ+FnB8nUEQ1KCJCURdej/Sh8X1+iO/oQrWEtYlhO60o0vhNFBregAC9Os9pXo0ttM/ixCi9W2Z315etyYH1xlcgzxgBxJOMEx7ek4DR13q4hieIzgBKQRJVraKY6rhBAZjaT7VYFWG+6DSs8pa2Kq2NIYtGLhWygGTvAupVkEALSubIbV5RFMHVvRBG0hniABNAD7apTditexLesIpB0mlfzw8yR4QyFm1QXoQYCtQoKlFUlXCCrmppPe5lNgIakDhRAatkhDLFPLeu1fcTTK/FJ9ExcKj0Sl0S3lSpDS0oWo2WJpWhuqRsFkhML3UBDbypBtf+uav0Pea4jht3WuFChEwPLxNJcdpBPMSQ3xybSxoRECT3fmFCaXuBHmR0ZH0/vJZYTvV0uhd5JSWVIJkuP5B7dG8krm++lgCfNq2RVyToIM//eA2U0MKU4J00l7fyYnka/ZDAgK1WhP/jxz4oq0Pd8WkVp64DbwlmjwA8ukZUdJcTOaeeoFWIwGl783NUBme4HCkBXg6TVoDo5TbxZkl6YgErbaSBtGpLLiAP8fo3F9UHWMLXixJBjPegY6TiAptOHYdqFV5at61BW/Uoqgad8Ml2ulCYxdWgzkZXoAP7aIXxDYNhms3vMYTgGxzen0ARvpM+kvGGxGpLaOWo4qjaOvPl62kGioCE4rzWF4CBxLuPFymGOn4wpWt6egis6yMBbyWO9uZM4SMwQNB/qpSZBPNVPJt4j1zP4bD+pYr30Wj+69JY6gwx9OlIcJMY92d9PIecgw/Ew35wPscM5OJlMBqT0NO4cI1WqyFlFADlaQlCQA5m7RoqMPewi9/LHvh9D9sGx4hrto5MYDJPJOj5Fzubck7Mo9NtMMk/PlqIX9/xCci4zVHKXkWswgJxbBJA23eXFzCFFB3B7TGSKIwT44B7fZjC+48smnEs+zZ/frBR5QWREnmZtohC70SA7SZN/ttId/DNv5++5hb/uZv6Za0SB0GLKZUjmBhYwLBeSwe/b7Bhdh0EJKNJ6X2ZknX+mGWAHHAqtIiO4SqaPhC6vJOP8agr+uYL/n5dRzi9LKXByCVk/zCbn6CyyDs8g89B0f7qI8d10Ch2YJo8KljMkLN3cPU1k7JoqwLS/mSzTRcwvJuQr6IFcdpbme+zuPVcJaGrhfaigwzRfG06hV4aK4Coxy1K3i6iWEXaYz/LzZwaJDF5sQWgXMTBd5MGeZN3Vk8ybu0jAuQQEoFUps4G0h5xtz/eHFhUFPkaHmhTuhmunAREvMAln+Xz9WJkYDM6v8+lqxqm1rJMK4F/RUYCJ83ep6p6sCnNQFJQ7qrHKcPVaPyR8fVx7opGtiQa1EghK8z/iKvk+4VbNoDBDLFinkhT4YdgyFtPIc8bRCWoMctpUoyALxXnYbrVbVc8LH2il7i1wlxBcJSpes+ulSzJXVo10ASSmCWHX7Gx6ebXdWl7N30XmNc4iP0pPpLdSy8rs32dj4+nBsom0lp/Pjy0l8yLnFi5E84vcSAvYVY4tVZI6xpSkjGJ/p+z8x7dmRYocGVCqzIGZJcrQo0VjaVNMAm1OSqaNiXH0VNlS9Dz6bOLj6A0kNyQkixCUC1BqSO5OSBBI7vcqWAFJABOQhDAW6zvPVUZvwWpIApAnGIQ/s3P8tUIl+eP/wisl9ASdTVVxcwJDrxAH26kQwBgNSgxS1tLzIqPBWBCS0YCEordbrwZJyVlto0IC/iokUbIuZetIDhndli9eft6zETnt6lOgcVW6VEW1rFxMT2V3WVlSenARytcNbSnTBnJHIzOyuQ9HvcItCEk9iV3itma386dz+MNp57dV0xE854jzRmdpJwov70KRFV0FkjLwdoUadYWwch1YjmHJmOogW2FPqPFJAKQEYDMgjecHUPabAykHg5A/GUnu1+OJ9kwhYicjgIyCJNo0CkJStXOMEVepq1at3aNEAsh9Y/JB0jmmAOmcmCaAxPkcAGn/OZeccwsocnExhbOXUiS4giLWWobQrVdAMkQbKBR59ApIAowuvSv6d5DE10dD0mKHejVImuHVIgPbreZSMkx2gRa7SHaKgGOE3SMUDUlReB0ZDkPRXksmO2EztFogKcOgL/DHzzAsf19Oub8uo+Ap/nk/zqXwD3MElJiTqcduWRi75Y3lQnEPeis1KLX0dJHIDv47fc2w/HyCVL+6H4+Tvsowu0qbHaX9wZh8gITCH4wVue+OFmepIWm9rkBpvKq2Xo2X8vdWakjaHijNpwfKI/orbYQO8GsNjtK9vQdF1vaQAHOa15loKl9HmS0o1KeOnAFmtcygyy34ftA6gwJt2YF1rClHIYE+DSh3MEOPF6nZE5qpsHOGpLu6i9LyjlKgJq0gU9v4FayB0U38HGSBJeaxjmwli1yXASxDDZrVoGC9DLlXYLwelF0jjYJNqgnwcJ8AGAFIgDK3bXXpgUa2c6RdbQq3reXDUkNSuUuV6RxqrHonUcCD4JFsXrwj/xmQPIe2kPIV6Jc0NageA5f38P363RQ2NEkx9HxMDG0qWZruLh1Dy0uXpjmli9PMEkVoYbGbaFahf9K8UsUps2gRalb4+hNPrFs57m8K/oW36jfddKzrjUVpfZGStCGmLD3FANyUxLCMK0PPxsXQy/Gx9ErZOHo9KUn0JsPw3eQU2sbA+xwB5glJIkz52Fc+lQ4wKPdG9UPuS04UAZTaVaKgB8U9OIfEmBek2SOa7iT/2z8xhH9mx/orqln5Y9hiVWeMaf7WKeRvq/LnAjI4ubKooHOMhqR2kAVdJBRduCMB53WrynRw3QKis1tl+ocXOaUhKSHkDEhstwKSVqaazIHgcamUG4NS8tYUGdWSIsP4YuvdWM4fs+pXpnNVU+lcpWTKqVleziRkWGs/1bBsjWpDAVSwTmpNgcktKTillRpTVaDPES0cZtTsPGwjSZ7lwvZSoABZnlCIY3pjrWRFvVKtrkMrO4qMtarFw8IZ5G2su7uS+UBPmSGIafXIYg09rUICAi/2l7DywGuD6MK2IZT9Wab05qFvL3xwBtFhBhjD0WU4OgfZ9X0/WfoZUeEa2j1a+hwRCODsVGOsQpjWsWeMZK/qwhycO1qHJpB5mKH6wwQ5ewz9NJVCp9ADOYvM3+ZIm0SQ4WhcWETm5WXk5KwkO8hQMW8mx71NouRMui+fgwzQ4xSIbGTAPcWg28KAfJW/jsEY/pjcyCesj/n5dvm4GXlRYKn0mnzMopf448/xz3qCv/9B/vn3i9RW7n0M0DtF2HpV1a7rlRiYcJZhyi8DUKVbfWnIGmEGps3ANNeSEWAHmcO6tIJyz6+gwJlllH16KbvJxWSenCPBCebx2fx74t/LMU9HZosQQmAfnutDM/r8Um3FMkBxXvkt/508R6nbRDQsxVl+qLZhAUyHn7sfjfOFj1nv8ILnbThKfnwzU2AJUMJR6u1XNfR5KBkvDKHQ84PJZDgiMN3dMkiKetBnG3qiFwUf70k5D3elwL0dKXAHL+rWd6bwCobl3A4CNWNIE8rqUYsut6tG2Q35PtG4orRVyAi6DnXJ6NGIAoOaUtbwJhJnhzYQvNYBSQwFdxZ3lgpXhBMgxN8c35QCYxupVg8Ux2W2lAUvDWktRyBOx4YKkLWrUKhGFXaRLF6UO7woz+EFLwYXSMJWq9pShIf/BqmGZ1eJwp0w3zu0dG5rsG0Nkd2KvxeDDgDOFlUp1Kyy5EYDi2zxKwAAgABJREFUxoEa+PkVKJvvX+crVaDTFdLpJJuHI3xPxL31c7TvJcfQMwlxtJEh+Wix0rSKHePcMiVoemxxmlamFC0rVpLWxSTR+OsL0dDYOKpW5O/Wj7/eDvLP63/qXbw0rfx/N9EDpWJ9SG6KLU3PxJYRSEIyEYTB9waD72qQxJSPvakqcg5wREQdtDcpQaQBGQ3JH9H2kaYS7VHVitaPE4lJAkm0fqD/ETmsgKDOXgUgAcxoZ4mCHTO9kghbrFp/FZIybLl6ZdHVIIkLAy4PI7Kw3YrCHclg7Jk3zurfQVI0ujnR2DasDnzRtaFw10YUalqTLtaoQGfSE+lC5UQK1kmXLEfq01Sir5wx7SgkmZXtKHdSCx+Sltf7qAEZnpEfkOIeGZCYiuAs6SiyPUm16rIOeWeOnlB2L6X3fCNCFquDcVd3difr3u4SI6YDy83NfSSLNfRCPzXNAw3nbw0TQAakinWiOEgAkvjmTEdnUuQIO5kDEyUyTjvIwE4VBgBAuh4goyEJQNrfjZOzR/cou5tjDNcfJ8nZo/Uz3+R/ZSj8NpfcPxdQ+MxCBUh2kHb2CnJzV5ETWkO2hW3W29kR3us7SKTrAJJBhluQ4AQ38vtP+5AEIMP06RWQdGirp9dFNr3MP+95/nlPsjbkg6QCpdp+RSGPFPOEb1ZiQDq0jiK0VgRAupHV+SBpyffcKgIoHfdmVXRkrCMzuE4mj4QurZYYvMCZFRQ6vTwfJCH7+BylY3NFkR8W8u9xPrlH5qiZllFnl86+6eIw4Six9Qo3aX05USAJhT/Jc5VXg2R423iKbJ8g79vvjhJI2m+PUnojM5+j9KteXxzmg1Ic5aYB3nQRBUnjyd4CysCj3cl4gKF2f3ei27pTZCW7yfkMyukd+VpqJ+1WwS51KNg0Q6m52sJEJbrZs7FA8vKwxpQ1qSnlzm0lxWiyMGQnCUhac9pLzJ09taUPSWN00/yQHNpGKs6DrWvLMUl2db4nVYOLrCyAtBhaWRmpAknETdpt6kp9gdO5gZoNKy0sNcntUFv1UXapL4thgDLUDlXt1SWtB32WsgXLkDQwcovvPSFeSGPcXm7V9CsgeTitPO1OiKePy5ShZxJL05b4GHqKnwOSK0uXEEjOjC9Js/j+vbRoCVpWtAxNK1KMerExmt23x8N/0+8vvsXcVPhYveJlvp9ctBjdVjaebuOVyFMMwC0JCbSxeDF6OTGetvIvfyt/7qXEBIHk+0kpMu36C2+o8o6ERHaSKZ7UWKxvExN87UxKVHmtDEUMBdVtIce9VB7dHwkXeZLh+JuXqIOgABTnKLeozhm1dN+j3l41MFgZw5P5a21xlkrRZ5CQzm7F7EiMxrKq89fVyIiqauUXej0dJFDTr27FeSHOJNEIbHjRcQg216OsrIFNVfEOQzKU2VwuNBmvM66ZnCdCGGOFKjoa2U71efVsStm8ejxXJ5UXA+wmK6eQ0ThDBrbS8LYUZkiaE1oLJINTWnhCPmtzsie3kGBml2EZRmLOPDW+SlerwjVGQ1FXq0rPI0uqVlerwhwIq3TXc5D2bV3JubOrtHogsFyqWTf2IRtbrM8zHF8cICk6obf45oYt1g+HU87OcRTcM1Ga2iOHZjIcZykdnE7h76ZK/BzgqLdTAUcNSIHkd+PZNbJTPMgwPDTJP3u0fphI5gl+PDmdnSPD9rdZZPwxh4wz88k8u4DM80vIuLSUcrOWU4jhaBprybFuJzt8N0NOtXnY7Brh+NT26BYWHODzvkwGnhF5k4H0IYPsS4blV6wv+Pnn/Lm3+XOv8yM7SIajRe95eoc/9oZ8P0CLrVvZvvX1iBdnt0Hkj+BiVyvC1q84zdtFedWxSg6DUulWkctu1LXZVRpryGKnbGStIOvScjIuLuPfwVJyTi8kG3F2v86n0M9zJfcVcXbIfDV+nCezKp3japSXe3SuDHU22VUGv5tCgQOT1aDo3ezSd0+Wfko/qcdzlJCk9GwbTaGPRkmrCPoq0TYCOXCSH6ptWZxd2u+OZlgqN2m8kbf9ar3KwERwOkMyxJAMvoBBz0OINg6SViIEUqCPMrSFAbmpB+U81U0UeFzlA6NHFzsd7squ5DIsA1P5dT+SrwXkJXuTOCJt6xN1bCTOD6EeaMvKHd2Esqc1pwDiFZd3VsLOCnZgMCd1Oi9qJzcle6IaQm6gL3loS6LBrfg6bUF2h0aUW78GXarG9yJZUPMCuiK7vNQ00eXKqVKQh38bmc1mJwSPNJCjGSyqMdkHCT0Oqtc9ZwlwBvgx4D232FEiwceHZJPK0hYSrFlJhrcjMOU0Mlv5/neM73/7+X6H3GyMLHwqOZ6e4Hv2w5gXzJBcUroYzS5VjGbEMCRjY2khf2xZqSQackNxanHjTX/3Rv5P32oULnZs9PWFTtyeUJbu5l/0/aVKSiDuC/Fx9EJcGQXKKEh+kJxK2/lRQxJTP3Yx4ADJPYipK5csYIwGJdzlAf6a72SWpHKTP/DXH2UBkj/yx7DdCkhiqLKGJJwknGKocqV8Z4t5Q5S9M0h+wWhIRku7ShywQwJGnD8yJCGDV2iQdpASbu5BEhM8dJ8kDuQRSiwDVr0xOHq7VTSo2TUhqUGJYgDJoBzdQSCIpmijY11pCwEgodz6FVTu65BWDFRe9U5ihzitvYyyUvLiuBiQgGOEnSTNaJsHx0XeFisc5NJOAsho5whAmthajYKktbaTADKMKlZ2kC6myd+lhuYiRgzVrICkTPRgSBovDSTzdTXRI/JRJkU+GS2ANPahvWOaguThGRQ+OI2c/exK9k6UfFaAUhfmREMyDBdZAJIAJM4e7eOTfEiaXnuHxLYxIO3zi8hhUGB7FVuRVogBad9MYedOchhE0ZBUjm+zQDI/IF8QSJr0Fn/tRwJIh75mfalA6cEQkFSgvDok84qAHvMzX1UAwcPef8ODIpfuE2fr0N0CyoJwvBYk4SYda51A0ubFgJ27mtxsfsxayb8Dds9/LBJQWr8pUCL31TnFv6OfFkruK+ZVhk8slpmXkR/mU/jYPAElCn2Mg17LyJ6p7OSnSD8lQGl9PUEcpfvFRP+c0tw+RkAJQGoBmKF3R4pQ4AMBkpacUY5UioKkifaQl4b7oLReGEq0mUH51MArIJm7sbso9KQa4O3c24Pozl5E63sTLetJzpxOFJ7QnheW7Nra1ZbtShTWuO3q8/XaQCCJgI9oSEoBD0MSOyw66ByQNCc1ETcJF6khGRnYgsLdeDHbvCZdZEeH4PEcqV9gkKVXolAa3z8qMDhr8P2mGTtFhikymwFI9HOiBkFqGBiSmDEp4ecsmfbDMjwhvQdOUwawe4U9OKN0GzIs61QRN4kq/j8qqrNIcZFsPD5DYWVcDD2ZFEePxcfTQ6VL071FSwkk5TwShTsMybmFi9OcG0pRJrvJvyH5v3xrdcM/Ts2ILUO3MFDuio2nFxiEmAjyXGyMwPFFBujLDL63eOXyEcPus0S13fp5ciJ9US4PknsZcHvYHSLw/Fv+HKaDQDvLeWeUDEc4SvRMImUHjhLbrmiKPZmiJn0AkggREEgiSo4BqSGpZRRQtHvUDhIw1XmtunpVK1iNnSivzrQQR4cByRYi6RqocHO86CVtp01dP0xABqZ2z2sB0SOtAMno7VYfkhgDxApO4ItvAq9SJ/JFhxl5Y9Xg1ty+9ehyhxoUrFGBL4IUulg3Rc4owoOaEo1pK+Xn4ent/bPIvHmPyKtkSPJKmPhCRzKOPm8UMK7oKAIQNRShIJJzMMFjbUcpzJEeSDjI272ggLvYUd7TVba3HNyUnlAu0nimjzqHfLkfBd4YKH2Qwe3DJUYOuatBhqHBjhHFOZFD0wWQYYYmzh+tb9hFfsU30K/zziAlUk5i5RiWe8dQ4OAECh5imB6ZQKGjDNzjk1Xv478mU/AUP/46k0KnZzMc51HoAruli4somLVEmvItcx2Zzu1qNmTkPomOs9jNWRG4x81ydhhiGBpwjPSqco0MxWhZUqTzMX/vN/lkE7tL+oCMMEMx8i7/zE89fUxmeLu4TPVzt4qsK/S8SPdXou9SReCpthMA1Qmz3A0CdYSmiwB50R0ibNU6znqy7XXkwi2HVlE4sJKsXF4kZLGbvLBIouyQ+YqQdIulZlcuI+vnpSL31FKyTy1SA6B/nCsVsSZSe45OF1BaB9jxH2BHyX83OEpzJy9QdrCj92AJUOrKV4QPIKUnuG2MBA8E3h5BwXfYNaIKFtux7zNA32OgeqAUN/lqHiStl0cIKCF76zCiZ1ibB0vfrbNJjVgLbewlgAQsMdDZ4NcizsadDf0kIN29szcF1nWmXF4UhhlqaNrPbVtNziTdlrWI+LqlzvWlqhztHcFJzWW3BXAML1OQRKCAM6udXFMGX6PBcU2khcQeBhfJ12nv1mS3aUznqgNQWLyniKMDsGQcX0V2klXY6TXKkFSuSFe1xSpBI71UjjMiJhEqYPeoKyO0ooV7CYSQEhv1Dh1qiyPGkHcMbncbV5Ph74FalaUV5DTf146yk9zF982P2VC8ncD3atbjCeXovrIJdEfpMrSmVAlaUqo4LWRgLihTmuaUiaG58Sk0qmQctS1W6tDwFi2e/5t4/4u3dkUKnRhXpDAtZyA+wPDbFBNPT8eUETg+6z1qSG5jGAogWQCkhiTguK98mmh3ajkBowblX4HkKYT3evMi/e1WBhy2WnPS0/K1dWg4WlUqi8JVquSTnBfgc55zDAps00UaktHC4XiIX4ghBqVZz5slGQVJR84j60sjMVanEiSAcVn9eMU5QOU5WkNbkD28uQ9JTDLXkMwd15iMcQqU7jiG25hWcu6IbNZgt3rk1q8qoDxfO5myWlSW2ZGAZGRqO4rM6OD3P+pZjz4g5/Eqen6HfIBEUQLOXZxVDL7VSnpbFYU5ZjQc2T3at3YTQGKLFYCM3NedIg/1oojEzfWl8Ba+cb0wgOyXB4mDNN8ZSsaHGIo8UoWS7xgngLQOTpcqVkBSeiLhLneOETgCkoAlAAnn6LDcPeMovH8cRQ6MF0BKtBwDUto7TqjeR+sku5tf+PF31d6BjFPz0kIyLi2mUPZSgQVaPBASALio4PENDCOEBABCW7wCm638/BXPEUbD8W2RTe9eE5LQ1SApoBSXiZ/7osi+Qqrgx6HnRCqcYEu+kVxu5PH/CEm4yTC2XNlRRqz1FDbXUARtIQxJ+zJD8OJics55oGRXaUMyw3IFOb8u9yFpnVwokMR5JSBp/TBTQIm2Efu7aervuH+K7yitb9nRfzPRh2Re5qtK6dGQFBf5/mgFyA/57/sBfw27ydDbCpDRkBQxJLXcl0YQPZ9J9PRQ1XeLc8ktamA3ABnc3NOHJM7G3Yf7Ez3Euqcfmbd2J2N5F7VD06+xDD3HuSR6DyOt6wgk7d6NyRzRVCCJYwnstLhLO/mpO+7s9rL4DGExy5B00Lo1vBXRoNZkdWUXyQvm3yry4r18Mi/ey/mRmAg1kQlDDC/0OeMeAUii11lDUmIrZZZknSsgibF4SO8SdawtgESvpQkn2aKG6qVEwABi6nghf7FyRf7vSBcX+W2KqgsBJDHl49H4JLo7No5uLVGSVpUoRktLl6BFZcoIJGczOKcUj6XBNxYXSP5Nu//lW9Ui//ype0wxGssrkHUJSfRY6TgJPH+RAfdMqVL0YmIcvcZ/DAxe/jQxhb5MShJ9lpIg2s3A3FsuD5IIPd/Ff0hMyMYAUAhbsNiKlZ5KBiqi7NAScoQBi9FYiFn6uWIF+p1XaFi1oSfoQnqqzIO8VKEc5VRIoQB/XNyhV8gDUJqVM3w4SsUZC71LkFOjikiKcVho/jVqZnj7/AzfauzgqqbRZX6eVaOiNO8i6SK3UTUprDFaoqRbHcJbXdUZBxJxDG+ViGSc8CDV/oHeRosvRvRFIhkH2zahsY1FQUCSV6rmxGZqODKGJLObzB3ZlLIGqZFaIV41nmvIi4NWGeIw7TEMwmntKTyro9/iYcxuJQOQ9ZQDffYYWtrOP3NEjBzA6KzpIlupNq+2ZXKHB0fRLZ3Juq0rWXeoAh3j7s4Uur8rmQ92l9W69XgvKaCwnmVtHUDGawPlDBJ9kLnsIHO+GEG5O0ZLIU7wALu/wwyzI9PIOTpDKlrRH4ltVhTjoL0DbR7S/7iXHca+cRIlZx8cL5WrKM4JHuOv/WGSOEgAEvmrCAdAVql5eqYA0rzAALi8RBxkIGc5BYIrpUXCjtzCju5e5R69cIA8OL4sIINThCPElmq0nIiSKZ+Da/yKf86OPBFACMe4TR6tyE5P6vPyOXpfzi7ziYEaLfRfKjGYw2+qClkUBYVfElnhTZ6eUoo85p1nPijVstFnmFKxC1dprlU9lDk4n1wihUuh8wtZS8g4t4TsMyvYWa4UUGpHaf68SLZgzX+pOZXGiZkyNSWE8WKHp1HwoAIldgYwWSTEbhKgDH09UfVQsszPx5P5GX+OQRlgN5nz0WhxkNGQtD4YK9utoTdVdSu2WvV2K2S/kpkfkq/wI9pDnhtI5rMq41UKeDb2k5ABSeN5rI9AMowwCxwBbOhJufd0oqybO6ih4HztXe5enbJa8SKzeVWKtEFSFrvJbg1lNiWi62QG5QK+nhZ1kkHMKNyxZ7aVkHNAUuoGRrehyFBeoPZpTYG29elMjQz6NS1VigmxwyXjq9LLic5XS5P7hZ7eg9FYRp/6cv0q1aGcPrUp1FtNAoHbhbD9ajEckdMMBfm/E9WwoXb8ta1qCCQRNoDIO1TT4iz0z4yKdCI9TboIPklNpjfZeLyQHC9te/fGJdHNMXG0KKYELSitILmMHeTiUqVpbvE4GoThynzPTSx2w99brf/bt/L/uO5U+6L/TyC5muG4kVcmaErdUqYUvZKYmA+Sn7C1/4I/Bkh+Wq7sNSG5s1w5H5J4REHPtSCJuWhItQckT1es6EPyPPoI0zDVIw+QeESFq24LwdkktlidjAzJYYVQsaoh6dasSk7tauTW4dVeXRTm8GP96pLPKlWsdapQAPv+davKdPAQu0gA0mxeWyrVrPb1KdKtMTndGwsgxUlGQRLpOP8OkgavTjUgrUkqUg6Nys7E9hKBZaJRuVtLorYNKKclXxBtq1J27zr8M1pSmJ0kIIlp6pCe7xjd7xgNSWytApIApLu2qwBSdLMqeNDuEYCUWZB39SD37p4SWA5Ayhbr42qaR/jpgeSyg3ReinKQ20fwTRLtG2MFgi7CAvgGax6dLoHbgCRaPqzvJpO5ZwI7knFeso63xbp/PDkMVQDSOZSXnKO3VwFI5yd2pL/OkvQcZJU6Z+ZIQIB1kZW1VIWDs4sy0D/orhdISotHAUiq6tNX+PFNzynCFW7LJ9eTAuTVIRktm3Z5+lakIPqBB+FovZdPfjgBQ1KkW0kiL3v9mewuI5tZG0V6PBcqcqVilgFphu8QSKJiF4U8YVS82uukkhdbrnCUAKVxYakq5sGcyjOryPljpcj9jV3lb0sp/PMSdV55cj7DcpZMTYGbtI9MJwNhBN9P87ddDXaT9s7JksyD1hAbVa/QF7yY+XySgDLIjhKQjFZIqlxHCiQ1IKMheYWTfHm4D0nRMwPyQRLC61JDkh7vJ9nBWNgFbu8i1wR6knN715YtV7tFNQq3rknUvrYEi2NIgDGqkYzGQkwdAInZkubsdmo+5ZTmco3iugQk7YHsLLs0pvNNqvE9KYV+KZ9Cv6WU80H5e4VkOoPzyf/P3nvHR1292/6er0e/KiUJCakkhNB7Cb333nvvvfdepImCgCAiiAICIr0XEUGKCCpI71V6DUmml8+s33qez0wA9Xvu/d17zrnnD/J6LWZSyEym7Pdee+9nPQSkpwxB3KCkHuTzNimhzQ1khcjerLg2j7Y1LaorQ5LlLGHn3gbSk9bcp5SlVnGS9hpFtcuQnIqVHOc/Q/JZHhqHHAlaDSBjqPT1lfH46/AQLAoNw8yQcEwOzoQRmTKoBJJjCMYRdJaD0oWiJYFZKl3686Fvv07Z+T/+GNS1zYz8771xs1VICMaGhuPLqKxYxgd9eXCQHtZZE2Gm7+yKjMB+Os2DUZGqH+IyY1/WcByPyoIT0bE4EZtVJZvKAklpp6V9JwnJn2OjdRlWTrpK8IA2ZI4zD++cj4vGFX5PWr/cJvju0UEGnKS0vUrOHvdKu6tAKYiees31cnhANj3FKody3P7OHuok6SA9hfMoHH0lCsJXujAgL26/XKUIRH7NRbnLSMJ/EXgqFNXCf3cNvsDpIh21E2GVWZ+8qPlilxABOdUa2I8UaRurdmXg7UiH2Ynf61JKJQcC9ORcL75Je5bTAmZ3P3mDEm59qgEtauj+h8wqn9UqiKRGhbUQWoIDJL8SI2pq8bOUdUhSjm10VVjGVkPKhKpInfjiQE7ARQYcpJR0uANgpDQcgIAU9xgApDG7AewL62uajuvLRrrc5eZs3r2mJZwbWmpvQduuVrD/0A62nzqa8Dvd0+xAccXs3ei6MtCULN+dFSci/Q27mk7yeDct7VAHebKbHs5xnO2m+49pDvIaf9f1vnpAx3NL4uUGwvtgMIzHQ+F5NgzuJKmBHKlLrHb7eK0ddKWVTXzkz2Jd7G+aLICU/b8AIANw3Ef9qPL6XpVbQbeLOkgQ/fQSJOX/7Fd5IId6ThCqv+ul23fchCp/n8u390/a/4oCtytLuvp9ulg5Tes2dpkiNM2ykrV+uC/3hxwsoVP9XGsx7VJ/icDpWPOAj9OYoaHtEuDuSR0Dd8pYOJPGqcw2XATow0lwP5gI4/5EeO+Ng4+u0nubkLw1VNuJua+Zz53bv/QqjlJAKcuuGpb+a2+NsvMe5QTm594wjvSG9zCvH+qtoBRXGSgNETcZgKQ4SQGlZ0uHVyD58p6k2y/rpjZIWd8SljXSSaQFXCtbwyWNm+XE6xfN4FtMfdZEW235FgokG8En6U8LCMlPqsMy0kzOsbQqitQ6BeApz8lwhXwEZX6Voz4dWuuisPUqY6ZRScAGYSnZrVICYpeG5HxfGj0I2/aVYK1XEs/KFcTdQtlxnePWDelMRN2ke7tNYN7NGYskTqzdFROBehI/WVqbEbhblNB2do42BGRr6TFbTCVN2b3NXgIlJ9sCSpdfjprF/iUkZT/yUa54/JHNjPuUw5I7OKau5li8KCwYs0OCMDVjOMYEh5klHxHBGiQwNjgYIzJkxKD3MqH8u29fjv7nv70G5P/tR5GMb16t/Y9/YNA76bAocwy+zhSmh3a+4QP+MiT3RUThAC8DkBT9GZKy1HqUcA1A8nB0hLnkyheZ9pPk98++5CTPxUbhcmyMNhGVfcm7dJACySSCURoni5PUAzj+Eg5xj7rcmltCAHL/pdQjUOIRgKQA0qCDNIpzdlmykAnHskVN8bqXlyIPJZB0lSusoJT9SGe1YnoK1VK9MJKrF4ClVmGFpKdZaY2/klNwgezWP0PS09WUuElX9zL6RgxAUtr5eAbSCfavCbStCzSnY2xUCsl1iygkU+hKJWFHITmqNjC6tiaPiHN0aIRcdQWkSDt1vLTMGnCQAkmVf+9RAemvgQwA0jenoQJS0nTk0ISPDtJY3dJssLu5jfYXdO+Vfo5y2KYbvCdN9ygdKBSQlOfaYJX78kCFpIVgtBzr/EpIgEDSfaq7nmIVSFrPURdMUAYA6b7ZH8btQfDdGwTj4RD4ngzToHKJmXMljzLbSzknmiURkBrIj/xJOvO1i4eHYDHzVlcpJN3Yys/3UHspAd0BlUG9DEmPgnQ3dYg6kuYUTTj+qPLiJwVkQApKfs3lh9+r+vEVBW7Xo9D9Ic3Jeny7VQFIBuovJeXHhaX+U7mBfpbzqbn+E7Iz0yAp7b80KN0qoBynJ1711Kv2q5wM76P30yBp3B8P3B0H486INEjK8yc1lp7L5iRHHKXsL2uPyhN94fmtD3wnBgK/9ofvl37A0b7wHekH46e+aaDEvp4wpFZyT1c/KM0yEJGxrdN/CEmpmfxfQdJY1BTGgsaaHaygXGTKvbAu7PNrwjqqknb+cLQrQcAVUkAKKEXucgRNnfywtKDL7FFKs4z/DEmH9FrlBFYgKYd2kug+7xfPhZt543CFY9fViEjV9ehI3OI4dT93Vlg52Uat8uYEt3VZiu/1lmbPV2fbEq+AUiDpaZqokAw4SY9/60YUcJKB5VbZ45QQdEfRXLAUkENDsQrrkxxzJTxgW2Sk9v5dmCkjZmZMj8npwxSSAsgAJMcEBWF4+gwY+G4IKqZ7HUH3n/IxZfas9onvprvY+t30mBEWhU/44K+KjcCyyExYERPB63JwJxZ7orNq26zD4XSIEVInGUGnmBlH4yJwPFu0P1AgFr9ExuFoZKzqcJS4ylgcITjlFOyJODOBR3pRXuCTL8utV+kkJd1eWmTJxricHkuhs0yOj4MlezZ1jbac2VXa9orfdyfkVP259ZUst0rJh7pJSg7raKqONFUuwjdPCTk5VlBPsYqkAFmLkMubkr5vEh9lcGbnk72Cyvlgr1ZAGyLLUqujaXFN/LC3Ka2yyZuzbXGVvX3JtOVWV5fSKnsX84Sr1DnaBlTQBsf6RvUvlzoGVNLZbErn4khqU1hl6VjcPGwgzWFHS2RcLQKxBt1jdXWQEiEnjZAltNk9oZpKHKTmXX4gS6qEogSTz6wHh+4/1jUj5mbXh312Hdg+4QCzoB7sHGwcXzaAY3ljuFY0hXN1c62FdGykk9zZFp4fOsFFQHqOdjc7eZzrp/tYsp/luN6fA+0A2K7RDV7poak49jOE44mOBGR7DQxIK/uQwzonuikoPWekzIOO5BIH2qv9YbvdFZa73WB/0Bu2xwNhezYY1uQRSKVSCMYUxwSkOiYjxTUFFs80OLwfKhyllMJLd+XzroXPswGGdwOvbyVEd/sd24/q9hwEnwO/0I39pnKk6ReVW4F3gtcPw0ql0lFaCEwLv2fBKYLqMmH2B3/3HVPGTRjGRcKWwPSdgMcgNL1n+L2zgEd03pRxTuU1Tps/h+MKXykz8fkOAN59qsAeaQCeTnGa6jZ3+A8ZCUS/0WVZw7dID/kYno/5936oh3kMYzI8nknakkt6Vzr4eInjtlrHwmIZgxS68NSnw/H80RCk3B+MlHt8zujWrfcGwsFLJ59HeR7cV/rBe3GAPsfeUwPMUPRj/QnIgSrvLwP0c9exfnxu+8J+zBT2dgO+7wrfdxJX1wWenXy97OjOCRahuZWTpE0E5WZOsjb5tZHucn07zXQVKFq/aanlIAJOz5q2GoTuXt5UD+84lzSA68v6cC+uC+fnfA0vqgffFw1V3kX14fy0HmyT6SiHVkFyt5JIbU7Y1CykbswoQ5BxsosqdHx1y2hpldFNDsPV0EM7cpAneQAntT0Iuc4VgA6V4GtUHhb+vwfZc+ABx7pHMTnxICo77kVkwy1xkwlZ8CAxB1Kl7rFVeV2e9XYrq3ueng4lYXAskP6vaMXrzUsoHKW/pKqxf1m2YQnz8E4N81SrTMKlttKo5F/hSuQYVJjjTYF8eJ43Hy4lZMPPNBe7YqKwKS4Wqzh+SjOKeSHB+Dg4EwZkiUK3TEH4IDQcU9IFYdI76TEtQwg6ZHwPdfj1PMHpXx/Y+c/6SHwv/fmmb76NiemCsZzQWhj0roLy6+hwrMwSiS3RWfBdVFwaJH+WxJ3oKIXksayR/xKSh7SmMsvfQvIirwcgKen2AknpF/lcmydnVcnpVpHAUiQuUusis+WAMz572l7ky3uSorS6SLl8CZJSBymgdPtlL5dPJTM4ncXJLFTyFQlLD2Ep2YuumoXNlJ3GZs9IKfdwtvOfZu1QKk1Of7cO7djhh6ScbHUQeNrbkYAM9G2UWkYJGPcMMU+wCkhTOyQipX0xWDuVUHBKz7sAJC10iqaqa8aqd2J1ePyA9Eys/reQFDnVPdZLg6QEltvnEZ6f1VdIOr9qqJCUZVaXzOQ5q/ds5WD1XQcY+znoHe6qkHSeoOs73RuOixwcr/SH/Vq/v0DScbaL9nmU3FU5werVfckuMOgufSd7wDjbC77zfRSQPv4O7zUJJ+8B2/0er0DSnkrnaBure48Sz+bwfgC7b4Zmo74MyAAk4d1IeG0klLYpJHVpU53cT4SMHLL5lf/3uMqZpl9VLhxXvQxJE5QmJF248hdI+nyXFJImKE/yNs++Cknvhf8Qkobx4yuQfHmv1OUHpexn/h0kvb55vK3ZaZD0+abw8v203pUu1yR13GmwTB0DG924gNL6aBisDwdrKIPt/iCFpOcW3TtdpTwXxiXC8Hx/haSk8Rh+QIoMvzy/DlBQ2o72gfXn3sB+uskfuisojd1dFZQCSMcWTpg2dYR9oynXxk6mNrSHY11bzXQVUErN5MslIdpWi5CUhCet0X0Jku7F9RWQWNIIxuIGZv3kDLrK0bW0lli65ohLE+AIJL2l+R6uIIfvCKbmZfVAnLdvNT20I4H/KQPLwuhZDpBTrS05oa1VHM9L5MWjnLnwJC47nsTmxuMsuRSUkin9IJ9kxXIsaEzotqusp9A9XcukQdLLibK3NW+rWTGCsRicjYpof0npICJjhwBSxhGv1k0W0+5AAkiRt2IhGKXohDlGOfPn0S5H0uxBtqV0mTUqAutjorGc7laCA+ZkzEAnGYyemTOhb1Q4JmcMwcR/plNAjn/rXfSMCEW9sBCEv+748Z/3sXTK9PbVMqQ73yHjuxgXlB6zIkOwOHMolkmgAK3+pqgY7IyimyT4DkRE4zChJ0uox2LDtafZifgsenBHl1uj43CY7lG0T07FchZ2gD/7M5/w41kJyaxm6yxJsr/E69fiXjRbfkz3mBT/AoziIuUy8HnaYR3O9twJ2dNKPgJw1Ki5XNnTQgOku4em6vwvICmzT5EewxZISnEvpZ3I6xYzs1qbmT0j3e3Kwd2hvCk/FEWeLuU0W1JDk7uX1WawDulu3qecLvXIMk9ardb4Wirv6No6s9X9kR5lYOvsLxnpXc482TpSCqBrw/G+KefkWnBNqQ3vZFlelYM61VUuPblaS52jgNFBQDrUTZp7kJKiIwXZckhHAOnkTFzivxxfN4RtZSM4vm2q+5Du7W3g3dMR3gOdNbDc+1sPPaij0XKnpVRDQsb7ahcOz/UBWhcpZR/iNF2/90yTxNGJJCxAyzwu9dTsVevN3ki93QeWe31hvd8PjgcDNCTA9XgYXEljzYJ5xzR43bPg9s5Nq3t0+pZqqyoJGQ8cenH5NsGGHXSIeyg5bfojL8U9HvW7xd8JmbN0XxdUPq8pWlnCzH9p+8OU/SbgpNzX4fVQ3ru8fECX+JRO7TncvmSVE08I0wcE6W08xw08I0RFz3GdX7vO+2PKgquqFFyiziOZwE0mKC28XzaC26E6zPu7729l499jw25qK7WRt/mNBiLYJLzAt4CXkhNLR+kzU3k8xhQ+XpOpCbzfE8wgdedYGLbRMFJHwng+HL4nQwE6SjwYDNBJ+u5wQvJoJGwPR8N6dwSfm6FIvToElkuDYD03CLYzA/n8EaanB3OCNFQl120nByL5eD88/60vXWVvbeRsO0Ttl1OvXWHd1QmWbR1h2SypOx0UjHKq1VgnagsQjFjTGj45sPPSQR6BpPObFnp4x/l1E3iWN4FrKV+jX3JS90V9ApMOclkTszRpaWONS5SOIa4JtbSrh2avyvJmjcL6XraVyo3UUrk0eNwpy5sty8HoXAkejXysoBNRqVuW7iHyPk8pnQtJBXPQweVCco7ceMaJuDRbuM3J/c0cMXhcJi9sUh/N972jOyfKPcrqpcjVmZPndsXhapkIZ5PCGsRua1hID/OItBmC/F/Zk6xdTGMuvdUKI7lMbs2dlWBzabqcWjCn3v7dHNm0EcRRjpPfEYwS7KKAjAzDx5lC8AEhOTUoGCPCwzAsLBMmZgjChPQZMeittzAgKAj107+HxPTvnR/Vp/vY13T7z3STnHU0euMNzf+bGRGMlQTYy5DcEUk3GZGFbtI84fqvIPmzlIrQPYr2RkTih8go7RxyhA7yNzrIU3FmT8m/g+Qjfi51SAJFXV7NlSOtXlIgKaUf3ly50gKG/w6SLzvJACSlBCStw0eJAmnLrVKALNIN8/IFTEDSRQYg6fVHS+kLXBoityLA/DWRIgGjwrFrefi68w3Xq7LK26sCPD3LK+wcfcub/R2H+Hs4Sp7qOBOUGFcPGFUHviHVzebJ3cua4v+T9ldyEk8g6ZxMdzilrgLSPbUOjCm1FJTGFFNuv4sUQKqDpHsUyf6jSAApSTqeQONkzsglJ9O5ohHsqzjYrG2u+5C+3R2AfV2Bn+gOjtIlnOyje5EaUn6ujwJSlucEkALKABwdx023KZ9rraQ/2Nx9jt+/2CetvMP+R1/Y7tGJPiQcHw+C8+FA7eCB5DEE1RTC6wM6sJnqlgSSTmMhtTgNklKo79Z+jxuoLVqG4aD7cuhp0wO8FPd4zO8WT/7vQ9J2A3DceAWShvchAfSM15NfgaQNDwm7O4TeTSQRhKJkAtNC2f2y4poqAMkUnP6XkHRg/19k599jx3evQFKyZu2aIvQZLyUnlk4aMxSUAkmR5MH6jEnaaQSEJZzj+LiOBax8fJNHAUkjgSd8vB8SlveGaryf/RHd5j3C8tYwWK4NhfUy4XlhCJznOXk5O1TlPjscnnMj+HwO089thKWFsHT5223ZD/eC4wAnU/upPV1h39kF9m3SSqsTvJspuknf+g4mJNeK2qgUjutNiMppV+kW4lnVQlc2DMLSs5yv1WUN1VUKIH1fN1MpKL9qpo2a3RNra+9Id1e+D1uVAuqVgK+y2dBcIGmrWEAP3Tk4ydV85e7lFZBWTkrFRUrPV2m99ahIHJ7mT0AKnVxqrrx4Gp8d92Pi1EXe59dt1YubiVndq+k+pkhAKWcNZNlVziNIb0tX0yJwNDYlJSBSGuJsXELrq+WwjoSfa8B5+Tx4nJgNT4vGI6lQVjzPl01L0p5x/LqdkFWbKst5jt0cg9dGZsZSan7mEMwMDkqD5NDQEPTPkA7vB4WoZD+y+9tvowENT57XLvI//6NdrcrLyoS+d772W29gVGxmzArNREhGYi2dYwCSUgqyhzOafTHhOJglEsdiIhR8xwlJKf+Q9fODMXSQdI9S9CrNQGWpYA+f7P3qJs1ggRdZrrHaHy0QJvCQwHyW1VxafRmQsj8ZAKfLn7SjkXR+xxiAoh7a8Xf2EGmqTn6CslAuLfuQsAB1kaULwVOmsBYgi8RNahcBv5OU4l5RAJIuf9mHq2UpjaALLLdKmx15c8oRcq90Ou9bFehXTcPHJYTcrHGspM2ObcMqaTyWNDiW9lTO8QTlpDqaR+kbVUtbXEngsp6GpTzy5htUBb6RBOFE/tz7ddPCAKTeUXo+St6qW92jKbv0gJxFSH5cD67ZBOTchipJ0pH6Mu+iBvAsacQZeiNdZrWtMdN07Jtb6D6ke39HdZDuX/1LrGd7qxznTdh5r/SHIQd2rhB8lwjE3/vr0pwc9vCe7qfLdb6LdCmXB8K4NMBsa3VNDub0VXlu94OPLgaPBgFPh8KeTCdi6QePg597OYiDgzkmmAHg2ix5Di8/4+D/FWG1is5uAy93EAJ7KAGJAOUQISI6QqD8Sp2gTlPnCZKL1FXC9brK7TPlNUw9pgs0dY2O8CZ1h0B7QJg95O99SjA9I4yTeD9eyON7pnIbT/lzT/x6zJ9/zJ9/zK+LHqqcvru8/Vt0fbx94wqBf97cw/SIfufv+UXl9R1XeXj/RYEDRE6f5Mj+oLWeUocZCF4XR+02VmjKkKQNiauU5WiHnvqdxvsy0a/xfBzGUWNh9RGG3rGwuMYh2TESSVazrtL1YBzsd0dznjAc1qvDYbtEeF4gFM+b8hGQOPNCvtPD4DszBIa4yt/7wHqiN6zHesH2EwF5yCwPcRGUkrwjB3i8W/ma2tQeno10jNpn8oVkuVXLQQSSCso28NBlela3ULlWNYFzZWMN13eubMrPm6k0bF96UX7WUCeGKeMqwtq/rK7CSG2kHJKRKEkBpGYvS6RkgxJAC0KxPUHXsRIvKwCNymqtcnKR7NoQXVpTWfLm1vZUD+WsRJZw/JErFk/L5daSL/SsDN8AaSzACbAEp3MCLCfRPT0rmhNmaf7cokTaMquUi4k0hKROUQWknYC0lM8Hq/SRLJkb9hJ0kEXoYOliH+fPjpt5EnAqWxZtbr+LWsdxdml0OD6JyowZ4ZkwNSREyz6mhITifcJyRuYwjA+mi0yXDp2D0qMpP0/M8N7510T7rwoX+McbN1tnzoAhEUGYzQd7aWREGiRluTUAyR+iM+MAASmQ/DU2ioCM0fIP2XuURJ4f5OdiorEtIrNqF2dBP0RH4jBhKadcBZKX4uN1SUFTd6g76iSzIik+IQ2SAsWXneTLkBT9ObhcAOnxd/YQCSCdBXJqTaTWR8pyq7hIAlL0Ao4FtOOH7ENKFqTGRFGSu6in0fxOMgBJAaQsuwgkVZydpkGyf3VgYFW+mar4axyrak9HaXhsH1U1DZKyTCSzYAEgxtbVcg+jfyUFpGZJyjIO3aR3eHVzeZZATYuU+6CWSvNWdf+xjioASPccwpBwND5ppFFekqSjxdiLG2pOpixlyWzduZ6DzuaW8OxoC+P7TjAOdoHv5x6amiOuUJZYHdIw+QKdoRy2udxPL50Xe8J2rptC0jg5IK1FFi4RdleHAtf9usXP/xgM3B1kSpb6Hg+jo+GAmzIKBuEo8qjoWlzD4PGMUUdk+GYQmPOoRXRMy+AjGLzGRhjGzr+FpDi0/xtIJhFmSbiLVALSikcKSKdA8U+QfBmUVoLU1BP+/BN1mh6f6JHKhXsKSSfdpdvH++G7oHuYkD1M70kTkLzPAkhDy0x+U3nohkVy6tYsR/lO6zADnUgk1cfjW6kpQx6/qxRIOuksBZIOTFJIOjjhEFDaCUqRUz73ToTVMxapzvFaVynhA457Y+C4RTd5bQQcV4ZzQiTdQ0bAuEjneZ46O+IvkBRJCy5t8PxrH9iP9FRIOvZ3h/v7bhpRJwd55JSrsblDGiSd61rBsbalKnBoRwBpbDCdpoDSWNNK5f6mqYIyAMeABJgCSc/ipjBmN9TIRQnckFUYtC2rKTxG7UTt4COQtFQrgNSahfTwnZRuyYqQ1DTKe9xaPDce54vFk1xx2uRY4udkReteTBSuRYXiHh2epWohoFX5VyCp6lcBnj6VFZKymuRtX1bdrNG8lAnKJqUUktY6ch/MRsyWCnlgrWCOOc5SedIg+ZS3c4/34Ur2WPyWJQJ7I0OxnePs6sgwLKaDnBUWjKmZMmJKcHCac5wclBGTMqTH6PTvYWx4OHpHhKFuhvRn87752kX+l310bF3/06LBb19uEZwOE0IjsDg8C74Ny4LNkbHYQfjtjDHXyAWSP3J2IyHmGhZAQMqe40F+fx9fXHIaa0eWKGzgEyzaFJXZrLWMjsIvWeJwOi4bLsbnwMVscVooGwg419zWhBxpJ1ql1MOEpexPmvWSAkXzkE6utLg5UeCQjra+IhilRlL2IkWSgyhLrdKrzeVvqOwuW1Brk5zSVLlyIY2XklNnsqHuoSRwXFykRk3JbLBpST3ZKgd3ZF9SmrJKz0hpiSWJHRoUwDeMxMkZhKSbgJQgZcewqtrTzj6mGuzjzHQcm19yEMc2uaa6RN84v5vsVU4hqeUjPcvCoJvEKDN2TuLlrISj7eO6sM+WAzl1VAJGkX1ufTg+aaBtrtyf0kHOJxQ/laSSBvB+0Uj3dST6y73K7Oph295Co+bc+9vDfbgTnMe6wv5bN9hO9YD1XC+knusO6wUp+pcl037a9FhCyJ3nzHKOtJZWV8wwAAedov3+AFieDEJq0hA8TxmKZ9ZhSKJzeeYehWfecXjum4BkDuIpdItwm0uCXscoeOwj4XGOgtszXiHpQaDd1WcaUm7DamqL7tVZ6K4s+JHgPASfcYRApYyAIzvJ/3OaQDrPywvUZQWlyO7Xi73Dcyo7f8blu0WQ3YPP+wwwkqgU/q4UwiuVMDLl5k+6fE66Qi+cXg+vO1QeyvA6AI+Nf5OVl6kqr/GcztHvLPm73cYt/twtfu+GStylSkH+Vzl4/x04y1s9RR3nfT5G/aSHjOxaWiLA/FqXo52yd6uP1Tytq7Srs5zByw/UYYo0vceYw/s+B3b3x7A6psBmfR+WlPeR+nQ8nj+iyyQwU+6MhvWP0bDcGgX7TdEIOK8Ph+PaMNiuyL7lAKRe7A/72QFaLmL7pbc6SeuhbrD/aMbXaacQfx2l1FBKxmvqtrZI3tIazze3UgkgX15yDbTU8qwzJdsAojSorjNlXWvKztezvM6tH9VAyhg5jFMa9h6ltSTE1TiRcCqoS5spZfOoBJioXVLlqU4HmVgYjzjG3MmWFY+yJ+Bxjpy4y3HoBscvcZGXsoTgbpGsWv4lYPXIadb+5WEfVBqW/iW0/MQdAGTHMvBxbPC1KAlfY7rWBuYhHbeEmVcvBFulfLCV9x8QLJMP3tK8pHuUJgvJeRNwL2e8AlIOQUpYy+boMHzLMfQLjrdzwkLoIIMxMTgIk0LCMJEaH5QJMwjIae+9S0CGoWNoMKqHZEC+DO++Lvv4L3eT77xxs6VEHAWF4vOwaKwOjcGmCAFkLHbRBcrSqSy3ipOUMhCBpO5F+iEpjnEntZ0/tz4iVLWB2hFONxkp7jNWIXkpW86/QFJ6SaZIK5ocCa+UfgggLdmzauqOSAIEBJQvAzLtJKs0US5gSss+KAFkAJLaULm0CUp50WoR799AUuSU+Kh6RXUGam9SQtvvOFuXVkhK3zmBpIKyq+kmZelFgsm9dJECSfvAirANqayQlBrHQPC4lbAUaUmH7C1OrgdMqANjWHXt9CGQ1NSe7qU1s9Une5njzYg5uxzMmVMfrk8amm2tZtd9BZLOeebA4VnQSCEpdWZShG0saZzW1cPDGbpTMll3tdZaSOMgZ/s/d4Xrl266vxiA5CuAfAmS0tJK5LvUB7jSz3SM2udxMDxPhsKZzAHVMhIpluFIIfgshKOVzsaCybycQk1VwTPRr3Gm+HOGuEi8r5CUBsZSUC9NkmVfTiApe3VWPdxy8C+Q9Bi/vQJJN52kGwKhayqHX4G9w5ch6cYfvM37LyDpS1VA/itIitxEkugVSKpeQNJrmM5SIKknZY0//iUk3bxvbr2v5ufihAWSDv49DjpNu5azHFFQOvj3G7o3u8IfpLDkL5AUQKokwk97Vc7S5VmXYUryYb2eGXA7Z8BlmQp78hTYn9CFPpwA5z06zLvj4L4jGgPjthmULqC0Xh6okLSc6quh6JajPWE93F0h6TggLbZ6wNjXQ+snRYHAAdvODrBsb6ewFAXgKFJg0j2KBJDe9W3g3dBK5d7Qhk6UP7+pLTz+Flza2JmvZ2NhE+1/Kt1tHMOl12pFGF2k0L+MRsI5qhZUQMohGWmgLoD01SqhLvNRgTwaPXczNgYPE6THa3bcjIrGlYjMCslr8ZnxqEQO2OVcgh+Skp/sGFwGyX2Kad2z7HFK2Ze7fSl1kRoeIDWR4h4r54W1CuFY1dy+kQm5QNJekvclMadCUmIzJaP1bo6sNA4cS+PoIqPCsDEyk0JycVQ4ZhOA4hoFku9nyoxJ1ITgUExP9x5mEZ4D33sHXekia2UOOZnt7X9cf02x/+KPBtUqrCyXLt35rnwiZmSOxZehkryTBVsjY7AhU7DuNe4Ky6RAPCIts3gpwbuH47LggD86aSdnYtti6SQJ0/XREm2XGVsiM2NnRLh2EjkaG4/fs5rJ9rLsKvuSd+MT8ER6SGbPldYKS8GoYeevKrDEKgdzXpYsrwYcpB7UKZLHXGYlHD0vOUjpFSnSmZ04SQEkZ5YBOLpkBlg3UQGpG+6NSigkrc2LKyT18A4VgKSdkJQ3ixy+kUxISfeQmkipx5J9SImPk+4caW2q/Ik4tg9rwf6Rua9ovF8bnrHVCNcqCsfkDkW1Gay4Se+wStp41islHoShZV5dWKXn4zy6xk/qa1mHdW4dpH5SR7/uXNhIl6LcixooHOXQgxyrt3xdT/chXVs4OycgLT+0hu1gezh+5mz/126wnOiK1FPdYTnbE5aLfWAhFKUm0i2lArcGq1t082viHI1rdI6P6CqT+sKd3B+uVLoK2yC43SPh9o6Cg8CzGxxojcmakqP9E42Z/N4cguITgAP6U6zCM8LvGd1QEt3iMw70yX6l+qRBsvSBXMsBfiO1g59/pw7KRVB49PTqOf+S6nk6qUvqGmVZ1UPQeGUv0H2VILjD23qg8vru8/bvwuW5A6f7Nm8nRRdLHcQH/SDdlYv/0twa4P2neJ3I4895VRZiyQ6f/gy/ze+7FJP0lAS1E16vFR6PhbeRQmCn8qsp/P/PiNfHlJyKvcev3KVu81bvEPL3Cfd7BOwDPiYP9bCQx31f5TMe6de8nvt6f8WFenFTpS7TuKwlI/K4WGXy4FtPrdGSEZdvOW//S/6Nn8PrWgTDvRg+zxd0uV8Szst551dxIvCNhqnLvq/PZ8rjmQWP4yM4rQRq6nR4LHSfKdP4HE+C49lE2J7QXT4aieT7w/DszmCk3BhBYA5FyoVBfM0MNE/E/k6HeYzOktB00FW693VVYErwgO+7rrBvaQvLxtYaJCAnX73qINv5GzLTMa5uAfuaFros695gyrWZgNzCn9naXuWgJPpODwEta6aZw1IDbJ1ihv67B8tBnjJmgX/dotoPVmsmqxYHqpWl6PjKlcCV+Jy4zHHoalwCrmXNjitZ4nAhMhoXOcm/GheJ+0Wy47kc/KlXjO//RI2eRK+K2q5O4+y6E5Idy2r5ieyFogW/37AEfLWLwSfdPSoXMFtg+YPLdRUrMQ/sRQjIwjlhFMwLb4ECSMqTE1doGGTrah/Hz83R4Vghh3V4P+aHh+PDTJkwje5xUkgmTAzKTCcZjslhUQRnkKoHTUi5t/+BolGhJ14T7L/po9g//nG97htv3BzzzyCF5LqoOGyLyoKNoSH4LjoKh7NlxfYMGfBTpLTEita9yEOcjf0o3UL4JO/gk7s1S2QaJGXJdTNnOuImJbnnSEwcfsuSTZPt5QDPnyEpgPw/gWRgmVUA6fbH0XkT88NdMp/WTQkgX4akplz8B5AMdP2QOqcAJHXJ9X8Tkg7/PqT0dJQOHQLIQKaqZ3ptWGfUTIOkbzKdJN2iuElZck3tlIiUjsVMN0nYYmIt+D6UUo4GsH1aXyWAFDk/baCSgwyuzxubkV5ftiAoG/KyiUJS2xCt4vc3NIexgw5yTzs4D0qXjs7w/Npde0A6z/SC/VxvOC/109AAgaP39hAYd4YCf/Dy5gD4CE3cHKh7ja4nhOizPgpKRzIBah9MUIwmRsYRHLJkOpmD8AdECx0LXYwXH2u3C8M7lwD49BVIPicQk+gYU/yyUg66JBvWwGqsIwC260lWJw7x+iFYPUdh852GzTgHm/cM7N4LBAeB6btmujPvdd7uH7zNuwpKl/cPBaMAx0MwiZ7xFh8ZKYpJm88Fh8et8PP4ZcMLUAauO0VeAzaXm19zqGTJVSAZ+Akfvypy+pIVkrJvaSMobbrf+YC6R9jeg8vF++S8BbfrrsJQT9R6HuglfI8pE5QCdiedp8NzhSC/zL/1kkLSjt3Udj0FK+3AbMa3vC+r1F1C9TW1jFpKKAogvyIo+blzOXyOZbrna0iaj/djBaRhzObPzeXtchLjmwfOyPizs6iPeH0m9QGvTwfsU+GzTtboO59kw0q3kWuj4L08At5zQ+H9fSA8Emn3Uy8YB3rAp/WUPRSS7h1m30mpq5RgAQGkSFJ4ApC0fdtc5SVIDQLSQyh6Jepue0dVoG8l+P+wvLme1tb3wQe1YPB9ghHV4etZge/VEnDUkQBxs2ZSuvtIwpY0Vk8umBuX4rKrrsRysh6TVQF5nuPTNYmgy50NyRwrrNWKwl7fDBIRSPp6lNf3pwajd62gkJTsZomnk2QdT61CcNI5uv3NlKX22lEmrybpyCqWQFISddxFcmm+tDRyfpIzQcNVjnCc/C7cXHn7muPlF+FhmBsaihkhIZhK5yiQnJAxjC5S3GQExr7zDqbz+63efQu1w4JOZ3vvzauv6fXf+FEjJNPJ7mERmBoeg3mh4VgTHoFdhNnOCEIwLEzrH/dHReBHAlFcpSgASVlu3RYdgU2cEYmL3BBJWEbQTXJWJP//++gsOBydFSfjY3EhzlxyvZPNhKQlIWcaJAPLq6k549NkyZXtReurfC9kl0M6ARdJ9yjylCAcS5ozOGmkHICjdPkwO30U1H0KaawskJS+kYHekRpC7O8dqfuRVBok5fCOqNPfQ1KCAwLLrLIXKUusL2eruqfVJCRrIfnDKrDMqg77rFoaH+eZWktDBuREbGqPUnjasYhGarmHVAAmEaSz6sP7CR3hZ/WQuqAuHPPrwrWgflq8nJNAdH1FB7m0GTzLmqt7FDhKLaTlm8ZI3dhYHaRrXzvYD3WA9beucPwuDY97w3uhn0bOea8MhPfGYDrHoTAISC9hKLCU8ACXX/I1H8FpSekLa2o/WKz9YbUNIISGwWuM48BLQBrvc1CXno8fqHv0GPO1h6KcVPXpwP2t1jmKHNq2ajNhtpGAWMtBezV8rm/gdaw05f7WTNbxbeFAvp2/hz/v3UpAbFNJ8b2PwAD2+MXrvp3mdYPX3bs4wFOe73idX/NQLir1ZyDpCAnIS+shIGU/beM+4CF/9iG//+wAv/aTqaSDwBN+/aloK69vobYBj3n9IfWAur8ZuLcJuLsOuLOWX6ceiVbz+jfUClMPlpl6/i1vgz/7lErawOvUk3Xm/3mynuLnSfydqfzd1u0UL1P5uZW3beN1O++L+3v+nX4Z/Jvd/Lp7gwYsSKcRG524BevoYjdw8rGJk5FNRPZmPOGlz/u5SoIKADpNOni5dBsL6MLl0NRiPpefazSeuYw7h7/vY6T4PsRz7wd0vLM5MZoJe+oHsD2bAsuDcbDeHKnOMvVkP92rdBzqrg2axQG6N7SF79vWwOr2BFxnYEsXYGtXU5s7w7dRnGVbc6l1vSyxtlaJi/T4XaRIsmFFEpAu5SDSnNnG90TK3Jp6gE1qiKVDiAR0SDcOa02+7ysW1I470tBA9wAl2IRj0JmYeCorTkXF4neOT2c5ub+ZLxuels4HZ61SsNVJTIOkt01pDVSX5Vyv1keXh6NDGXNMaMyfqVWYk27+v4p54ZP0roqSJyvbO7Kaldtc0SqWR1vkSaN3W8GCeJw3H64kxGtrwR0EpESBLqOLXBQZoYD8KCQU0zMGY0pQGCYHh+kyq+xHSreP0ZFRaJ8+CFWD0iNP+td7kf/tH4XpJOu/8QZGvJMBS2LjsY5PyNrQTHSSMdgSHIxDcVn/FpJ7s5gHd2RP8s+Q3Jw5M18IEfhOwtIj+aLMmkUheYXO9G5C9r+FpC1H/F8gGdiHDMDxFUAWNpdY1UUSkCIB5N9BUvYoAi7SWyPxFUgGun6Ii3Q2K/W3kJRZpO5JditndvnoU0G7Cwgk7UOr6IlWCSUPtLLSpVaC0jW1hoIydWY1WD/m12fTRX5UH5hRj46RbnFYNY2yE0imdi+ZBknMpjOc3wTWhfUVkpo6stAEpFdaC331QgJKPaTzdROthdTIuW0tYPzQEb5DneH+uQucJ3vCc6aPAtJ3aQCMq4PguzaYjnEIneIwBaLjGge7q3116dV2pQ/svC5xZm66yccPu+D5s54KSYeTMPWO4IA7XiHp9U3m5YcUHYr0e/R9qpB0e5eYcq9AqrGVrkoaH+80waaXmwjCb2E4V3GwJ1w40MvX4NsMt4cDv3OTQhLYxUF/I5Jl8PduhIVgSLWvxbOkFXh49wvcu74At859jJu/f4irx6bhyuH3ceHH8bi4dyzO/zAWV34Yj7t75+KPLTNwY/14nF8+EOe+7IOLy/rj7NL+uLpmDM6sHoNLGybhwroJ+G3ZUPz8aUccndUCx6bWxsHxVbBzVEXV7uEVsHtwWezqVxxbexbGxh75saF7PqzrmRtreufBN71zYmXP7Pi6ZzxW9k7AN32yqZb0y44lfXNj+YD8WDMiEVsmlMeuqVWxb0YtHJxVDz/Na4pjn7XE70va4uzyTri4uhuure+Nm1v64/b2Qbj+2yzcPTMfT659Duu95XA9+wYeCyHrImB9m7Se1KW9NDcTbpv5WG0kINfTz5qCb7HKa3wOj3chH9/P9NKLhQpHadnlMObB6psNi/ExL2cpJEV2zNYVAcM1Gx7HLN7uh3AnTdHOI64bo+C+OExPvQoktUHzhlZIXdUUtqWNzCCAJXwdr6RjXNVCZZeIum+aq5N0rWlJZ9lKE6BETjpKkd0vG92lLrdKuchSTgK/qKeQtMyrbWYTT6kF15BKZs1xyxJ8LxeDp3JhhaSlUC48zRmH2xyfTkXFKShPR8cpJM9lyYIbHFuSynBMqEXX2KCCQtIibrRJIjytS8HToawC0te1vE6SrW1LwtIsEbb6hWGrIfXVhKMs71Yvqm27vNICS0LL/ZD0JuZVSLoL50VK3ry4w3HvNMfRA2GZsC0sBN8SlF9mzoRPOdbOCgrCjKAQheRUuscpIZnTIDk6OASDgoLRmZ+Xe+etq12qV/vqNbX+mz/mT5nUuWZ05t/ahQVjPG3/qoQELOOTtiMmDtujY7EtPNp/iCdK4Sj7kSK5LiUgu6MitU5ya1Q4NnFWJEHpG+kit0ZIzFKsxtwdJ2ilG4j0S7tHKD7NkYtgzPMXSAoYVbnjYc2TLa3+UfpD2gvm1DpIKfNI24NMzKOSfUiRHNQR2cv5e0Xyhav926SpMl2kNlaumWjWU9Upphv1DoFko+KalhGApK1FiVcgKd3MnYSk1Er+HSRfOMmqdJICSL/8kLR+XA32OYTkJ3XMekZC0PigoTaUtQyqiKfdiyO5d2k4h1YiJGsqJLGgIayf10XqZ7Xh+LyBukjHksamvmqishOMjhWcYXNQcnzTDLa1TWDZwsFob2uz3dUJDlwnusFyjuC70NdsmXSZDvLKIIJycBosJatVll5tl02lXu0H6/UBsN0aAMvtgXA8HgUjeQJdzRRdgjMvPwAcM8xlOvcndIAL6AwXaSsoJ1bpHqOdg7edg7bb327K7aE7coo72kjXRj3jAP6UYLxDp3V1JXDyM2Dfh3QcYzkwDgVWDDS1fA7NDm9rLu/D+4NhG94Fj7o3w83WNXC1UUWc4vN6vEohHC2bCwcSs+L7glH4Ln8E9heNxZHSObCxRgI21cyKbQ2jsb1xBPZ0ise+wQXw3dhKODy3M+4f+BLJ5/bD9+gSXd0V2G4exd2ja3Fs/VR8P78LdtP5H3yfwJxYC/tHVcF3/UpgR7dC2NYpL7Z3zof1bbJhc4ec2No5D7Z1yYsdXfNhT9cC2N01P3Z3yIMfm+fCDw3isbNmDLZWjcCmCpmxtnQw1pYwtaFUGNYkBmNFwfRYlu9dLC3wHpYXSo8VRYOwKjEERxIz4ljJEJyoEIkLNXPgRvMieNC5Mp71q4PkIQ05KWsH90y6tEX96N5GAtsmAYf5mJ39ErjJx/YBL58upzvlZMTKz628tPDxtn7N55GO176Uz+VS3cv0eb6Ex/M5JzcL4fTMVyH5Iz5fM+FL+UjlSZoO96PJsN0dCwdBaTk/VFN77Ef6wPJ9F03hsaxuCduy5kj9sgkef15H9WRRXVXSknpIXdZIc4Q9a81DO4a4yc3t9NBOAJbSzNm5hW50VWstabItrg/rIkJyYR1zK+Kj2hp+rqHmEhcpLatqEHR0h9LmSlpQSfsrgaKpaD00cyt/PJ5zjHDXKw20qABfszKanJNcn3BtVljDy13tSurvFEg6OpZHaptSCklnI44hDYqb+5E1iiokA0lejjL5YS2Zh5A267Sdifk0YedGntz4NT4ee8VA0EGu5nj6JU3GPI6VM4IzaWDAtKDMmCZ7kKHheJ8aFxqGUSFBGBqcAc34/TqRMUcLhQSffE2s/0cfuekmBZL93noTn9MFrouOxubwKIWkhAv8GZIHY83DOxImIHuXAklZdt0sqT0E5Sa6UYHktogY7KaTPMafO0eJk3wZknJwRw/v+Ms+rLkTVLa8pgL1j38HSHGQAUjKXqTIUSrfK5BMK/3wQ1IA+TIkBZASZfV/C0kJMndKTeTEamaM3NSa8E6rpQdwjBl14Jhbk4DkrHdeXbOe8ZMmwMym8Eyqp6UjKX3KwNKvnIYRGHSjstwqkLT5BwRpdSWgtC1uCPsXjRSQLjnIsKq5hkUHBhv3Js7Id7WD52BHjZrznuoF16meCkj7xX5mqyQp/icoRbLsKpKs1sD+pPQgtN0gGG8NhvOOZIAOhfXBcLiejlFQep+P5yA5joPlZA6y0zi4ziT45sDrmm8OrHSP9sAeI9ZR5mEch28rnK6NdCGr8fziXFzZOYSOrQl+nFQFh0eVw+G+xfBjp5w40ioBx9ok4Hib7DjRIht+aRKL3WXzYHvJHNhUNCs25o/B+nycjOWJwLb8kdidPxqHSuXALxXz42LdkrjXujqedeYA2rs5MLwzocoJwCcDgC9HAJvHAXsJ+BMEyMVPCWaCI/kg/4azdGV3AM9j/i0PCPHrBAeB6TzFv/Ew8HADQU6g3yBgzn4F/MT/v4d/+46Jpg5zovArYXJq0QsdXwj8PNeE/hpC/+vhwBeDgIUE2fy+BH4vToZ6+9UXvo96wj29OxxTCJnJnZA8sT0ej2mFByObw927GmzdKuIJB+5bjQvhZI1s2FcyHOvz/hPLs72Bpbn+DV8VfAvLSr6L5ZWDsbouH5t2uXBoQEn8NrYqDvB18/OKlji7uRuu7h2IP34aifsnJuDphalIuvYhHI/mwZlEd2mTA0Bf6GRHQWksgMvLx4kTIFO87vyEgJ0J75OpCkn79ZFwXxsDXB7Nv5t/41FOavbx79vZA1jfGd7VBN03rWBf2QKW5U2R/FUjqoFCUiZ20rLt7yDp4OcCSdfWDgpJ39KmcH7ZSBOk7ISlHFqTIA05KCeH4MT1Sc2i5KU6yxaApWgePM+XA/fjs+J8bKxfMbiaIw6PinOCXaMk0JST0laVNBhdelLamhTie7+odvlQtS8Jj/SN7VAOlraldUzwtSBYm5XVxB9P1UJ6YEei8WQ/UuBsK5WX45AZh2krIg2V43E+a5xms+7KFIyNdI8CSbPkw1xiFUhODw7H9EwRr0BypIQHZHhP+0WWfOud1/uQ/y8/EsL+eblShjev9gnnE5buPW3ILOECm2PjsTU6K3ZmMdN0ZB9SQBlYdpXMVomk200gSgDBFoJwMy838vOANkVyEKNDPcnrF2OloWnOVyDpyJkrrS4yAMeAgxRAugvlVjgGggIEjgH9K0hqBF1Fsy7S/dJeZACSgQM7AkhJ6AhA0kFI2v2Q1BKQtmVNtTf3JT3dyqdBUnJYBZICOeeoynpoRyCpeat+SBoz5BBObTjn1YRrfi2459eDZ35jGAuaAfNawvNBYzjH1kLqwAoqy5AK8IytosEBEgzg+KKBgvJlJylLrA7Ju5TsSwmK/pZwXNdC4+a8u9vC82MneI91hYeAlE4cksNqJ/hEjquEI12kW5NyBmoTZWmdJL0G1V3eHAL3rSFw3h5KOA4nM0YrFJ2WufDYCQELB8gkDvwPZwN/EAyXCYBTdHjfE0Db6GDWcZBcMQxYQhf46WBgDoHwEX//0J543LUlLjWsht8rl8RPHKT25c2Kvbn5GsrLiVhCKLbGZ8C6rO9gTcJbWJP7n/g2/7tYmfff8VWeN7C9ShC+qxmGHxvH4Lf2uXGRQL3Dxyl5JicPn7UEviEM13UnsDg4/zAE2E+3vKc33Ht6wbeP9+EI788v1K/d4DvcDsavnWA92xVJlwk42254cUWO3yAFNFv+YzkeH+Dz8R/PE+Au/95rdFPn3weO8e/c2x/Y0l1zSn3fSk4p3c4GOrlNvA9reV9Wd+LjwMF9SSs+Do2BpW3ohAnthXzeF/Ly8xbAZ605EeL3F/D/fsaf/bwbQU5gLufvXjXUL/4tKwjWtd3Mv28tv7+CWtwNnlntkDqhCZKGN8Dj/jVxv3tlXG2biNP1cuFwxcz4LvFtbC34BjblewO7s72DXfH/xI74t7ErVzrsTwzH8Rq5cal1CdzsVglPxzTA8/ebwf4x/5YvegLfEnQ7OaE4yInAr3yOb0znJIHP8wNef8TH4TGvP5wK94P34bg7Abbb4+D8YxzsV0bCdnoYHMcHw/3zUNgODoCdzwO28LHZ2Ekj6UxYNlZIWlfIPnoTeNaboJTyD03oWd9K6yQdG9poCQi+5nPM171HeqEubaKgdCxpqofY5AS5NCl39ygHo205oH4pbaZuL2Ee2rmfPRuuxkWbio/A7TwxeF46Fwy+/9GCsGtD6LWX7h4cA9oSsO3NBs7OTiU1Y9k8i1Aelo4V4GgrIell4WlcUnNgA7Fz1nJ5zbKPioVhlxWssoVgKZUfTwsl4I/sETgsgSuE4pqITFgZFY5FMRGYTVc5LSyTpupIuccUOReSOVIhOZ7wHBUagiHB76FnhrdQPTT8RJa337n8mlT/jz/KvfdvN1v9+xv4KIQzUQLtWz5h66OyYFtMvEJSsgUlhUeCAg5q4k60QvJ7/96jQHJrTJY0SK7PHJGm/ZxBHSd4pbfk7ayyJ5lTISmAdObK/eIUa74XCpR5SK/IPztIOckq+jMkA3WRack6VSVguOi/hKQA0t2w5P8vSEpRsUtqHF+CpGNkJS3/kOVWcZLuKX43+UFNBaVAUkFJJ+mle8JCDpKftobxId/4E+rq4R8FpcRgja4Ez4d1FJJOGQwISu0FuaSJ7j96l5vh0O6VzRWSIhlgsJ0D7d6OdDUcUOkifWf7wnOxD11ib7gIP9X1wfBeNfUyJH3XOBjfJODuEgD3RsJ7n3pCd5AyicSYBsO5QEFpuTcFT04Pxe29nXFueV0cmVIUe/sl8GajcKBlNA40jMTBWpE4UIWTqbIR2FsiE74rGopdHCzWc7BYFR2ENdHB2BTHryVEYn++OBxNzI2jJXLhTJVCuNakLO52rIIHPWviySC6jdEcuCe3hH0aH6eP+Dd+wgFzQSc/VPi3fkkt7wLvsrawLmmBZ3yMnnAwvUuncmNJXdxcWh/3VjXFs7UtkbKpFZI218adNZXxYEcd3DnUBPdOjYDPugs+zWB14LmWgdBEytlVD+iM3bzyEM8P90fKHoJ+Wwc8Wdcaz1a1wHO6+aeL6+HpZ7XxaG41PJtbA09mV8OD6eVxf1oFPJ1eGc+mVcbTSeXxfEoFPJ5QGg/GlqI79Gt4KTwYUhz3BpbEwyFlcH9gWdzpVwq3ehfH1R6JuN6rBP4YUBb3h1bCzcnlcHtaRTycTpc8rS6eT2sI2/QWfP0QsLMIz5nUh93N67MIuVmE0gcE88SG8Izi5Kx7PVg71sDjluVxo2EiztTKh0PlYrG5cHqsyPUPLKAbXZDzDSws8Aa+Kv3vWF87CHvbJ+D3wYm4OLE8Ti+tgXNr+ZjuorPl6yvp1ACkXh4Oy60xsN8Zr5B03BoL2+URsJ4aCvtvgzhRGw7XkSHw7KeL305XuZWvy81dNNtV0nY0cWc97+PGdq9AUmolA2ECAkn3Zv6Ny5rr6W2BpMh0lATmZ4309LjkJPv60BF2qkx3WAGgS5S+samF8+Jhzuy4lT0r/sgRr9FzDwrGI5VQQwM6ydb82fYEa7sSQIeS8HUqRedY0uz40bWM2cCgKyfFPSsTmJVga10GtsbFYaldCFapjayUz2yQwHHGVyMRvuoltJG7s3wRheQDTgAvxwRhf7hZGrc2MlQhuSAiFB9yTJwsDZUzhSkYBZABSI4LzYSR/P7goHfRPf2b18u+k+71YZ3/CR/RIZlO5g3KiMaE2tDISCyJz45v02ciGOOwKzJK9R2f4O81nzVKJbU+e/n1PVEx+D4qq/ai3MmfF1BuIDzXZg7BmrBg3aOU33M0a1acz5aA29QzShykKw+VL15l4ws4sP/oLMQXYCG+AAsX0oLcgJzFc2nMkx61lsalvJ6mMnm1iDcQQSduUmAZ6Ofm1IxWsxmql3DUtliUAFK6f0gcnUbStQ40Vy2lx75lb0KXczij1PxGCSnvXwmOARW1M8HLJSCeiWZjZGMKQTe1NjC9LoyZteCdXRu+ubVhSIeOL0yXmLqwHp59UhdP6UCThhK8vUrD6M837ugaHOTMBrRYzIHh06a8pPNYypn+l63h+6olfCs4wHzTSg9AuLdwMNnTCZ7D3bWJrnSet18cAMtVU54rBOTFYSrb2UF4frIvks8PhPX2cHWMlrsD4JAw7Pt0hLcIxut0iefmAQd4uZLuaSjdTYdWsNaqjPtliuGPkoVwnZOVywWz4wKft8v5E3AyWySOxgbjUHwIvs8Zgi056AzzpseGwiFYW+Tf8F2lYJxslRP3BpSDdXxdTiKawDuFA9/kxng2jE58bG111fbhVVW2YVV0v9Y6uBLuTyqGh5OLwzGez8mEsnCNq62TC8uMmrDMrgHrJzWQOoeP/Uw+XnMJ0jk94SQoLBxEbcsIyNU9VKnfdIBtbQekbuqAJLpuxzm6Psd4rftwGeIizYpHCzHp5r9uH7Fpvwvr4fbw7GkN20b+nqV8bBf253PSH955HOBnN4Z7Tg24PqoC+3ROlqZX01jB1IlVkDKuHJLHlqVTq4yHI8orDJ8MogR+vUvjZtdiuNYpEVe7lsAFOpjTbYvgbLuSON2mOH5vWgjHGxfCmSZFcbJRPpxqnB9n5HPqXKNCuNi0KK63LIk/OIlL6lULz3vXRnK/2rAMrAf3GE7EprU3YSmaT0At6sPXDrWYEJ3fDr4PmsA2sTosnJQ9HsTf07MgzrXKhiO16EJL/xPr87+B5fFv4MuIN7A6MiO254zB0XKFcLNZVTzv2YyTuhZwjObEZQYfw0978bXJ18gGvoa20wHvGGS6+p10kXv6wrezJ4ztveHd1kvl2toL1i09YN3WExb+jHVPH9j39oNzb1++jvvAs6OrGZYuGa+rW8K6qh5SV9SBYynfSwQkvmyh7wdjHidR0xtwLlcPScNq4WlvvmbaVICzfkmNo0Se7HAlxON5XDYkxcplFJx54oAKuYFmxfie5nu9S0mzH2wnf9RdW8K2Q1WgYzVOLqrB1a0qvF2qwk0A29uVR2qr0khtlqih5s66hWHU4u1wgocKvKxYjOLvK1cMtzjBP5E1HD9EhWF9ForGYn14FqwOjsHiDNGYnTECk+kepwgco8MxIv07mBkdqTF0I4LD0Ds0Gq2CQlEmfdDrXpH/Uz7mffhh64R3/nm5Toags93efRefZyH04nJgY8ZMWs4h2s3ZkBl8HpkGSc1vJST3RMbpIR05rGO6yUisC8+koNyo/zcLjsTG4kxcVtzKGp8GSXfeBHgKmHIUTkhbWnUVplsswhdh0SJ0iXn8p8Zym9cJR3cZM/ZJj10HrpfN52+F9QKQctrtz5D00EG+DEnJaw1AUhI3ApBUQNJFyr7E30FSDgxIZwJZ7pGs1kCdpJSBmKCsxcGqThokjTm8nFfH3FOhS5Q9xpQFFGFqGVWFv5ez2kGcDRMW+JAD/ueNgSWcRYvzXNTKXL77grNu+ZpAcg2hyQFfe0N+3xnGkZ7w/c7BmwD0XBsKB92j7fogOC8OhOP8EHiv0Clep0O8OZaOcSKMJxPgfjSKdBgHI2mUnnBN+qEdbi2uhQtjSuJop3w4USsHHpQsgmv5c+Jc7nhcpMu/xEnM6Vxx+CU2FD/TGR7OnB7HokNwKlcUrvJ5eNisElwDWhL0HJQX8DaXctBcNpiubyAHOA6e8zvDS3eYMqomHhOCt3om4nH/snjUrzQe9y6JZ/3KIHlgeYWkdEgRSD6aQnc/gc8PnZkA0phkHtywza2lgHR8ygnJvBYKSe+sbvDM6QHvUg6k33akGxmo8mzqCe+W7nDu6IaU7zvAeb4LIThOrePfQdIjvtJ5H74TfFz5uAgk7SsHwfhqGJ8b/j0L6GTnt4BvPp9jwtr9EZ//j8wyH8netb9PBzKpEpInVFdQPhleHs+GlMPTgeXwoE8Z3OpGx9i5OK50KY6LHYrjfMfiuNCxDM60LYETTQqmQfJ4/dz4rV4u/Fo7F47WyI6fq8SrjlXJhl+rZcfRyvH4rXoO/F6HjrxBPlxsWQh/dC6Nh314m/2r4fFIQnRcfcKbzmtGc2A2n5t5hOgi3v8lhOhCOvPP+Pl8ag71QQt4xzdC6lBO3vg7bjWtjTPVy+L7QtmwLi4DVkb/E8uzvIlVOf8dGxPT43DDBBzlBOhEz/y4MDwRNybTTc+pjqRF9ZC8rDGer24Fy9qOcG3urpB0b+sN29aesO/oDft3hOM+TuQODIZxYBBfxwTldjrOzYTv+nYw1rSGZWXdNEh6lzTU94RA0je/OVwfNkbyxLp4NrQmnvSqrJB0NSgFo1xRIG8OuLNnQ0q8eZremTsBKJILqFpAIWlvWxTJbQrhOScnyXzMNSigTUWzj2R7vqe7EIx0kAJIV0dOittXgLVNWYWktX5h2GtLL9r8QGVp/lxIG0D7yhRFUmI+XOF75dcsoQrJDbHmOY+1YdFYmSESi9JH4eMM4WmQHB8ahHGZMuryq0ByGMfcXpmiCMmw07lfd/n4n/dR6p13LjZPnwFDMgRhdngk1kZn8R/EyYxtfMJ12TVLxAs3KYd3dLk1VgEpjZs38QWxMSqK/zcMa6JCsYHOdEdkjNZcSsPmK3GxeJRNTrKay6qewrkIRMKxWEB5Vd7EAvCVKPQCgn4gusvmVykQpZFyBXOJ9eWMVtmLDCy3Siq/q2aRtGXWP0PS2awEXM1LvgJJV5tSf4GkdABwv3RwR8IEAq2xBJKBzFY7B0XHxBpaBiI1kc6PmsA1sym8HzfgYMqZ/gK6TEnJkaayC+mqPqwBxzi+CfvxvvQvB680a/6oMVxf0O2s6ozk1Y2Q/C1n09/UgeVbQmFNDdg20EF9Vxe2g02Q+ltLJJ/uQHfYHSnne8NxYRB8lwi/CxNVxp0RcN6QZVa6pqsz+LVPgN8XAT99wdn+p3QbhNcwDpStquF5tcK4XTIBVwpyQpM/CqfzZsFp7Q8agxMJkTiSg5Om7O9hTZF02NQsDrtGJOL7z6vh1LbWeHpOehlOBR7wNq4QPj/JfhRd7uSmcE5qDCsH6mfDa+Bev7K40T0RlzoWpIPKj5vdiuBen5J0VyVxt2dxPOpbCk/ptgSU4ijl9LB7dHXYx3OwndIWKR/SQc6sDfesZpx8tFA3hwWN4F5CR7G0Ah6uS8TT7yvh6aGBSDo8HM4DI+DeT3Ewdu/rC8ePfWE92BOOS3Q/9mkKSQ8hafHvSVr9YQJun6y9umHc+AqOY+/j4fcDkETnY9vWDfZv28O5vLXuN3o4gXHNawr7nEZwftwQjlkN4PiAz800U1a+BiSaMGlUBTwfXg5JBOUjTgTu9EjELQLycueiVAlc7loKV7qVw7kOJegkC+D3RgVwumlhHGtcED83zI+f6+XFYYLycM1cOFQjJw5X42XVnNhfMRsOVM6OA4Tmvopx2F0+WrWnYhZ8XykWv1TPieO18uBUvXy40KQIrrRNxL0eFRUs1jEN4JnOydfHBOZCTmC+GgGsGM0JDZ+/pbxcws/ncdI2uzqcUytyYlOaTrgYrrbKhZ8rZcK+ohmxPvoNbAx/Exsz/xM7I0NxICErThYthhsVquJBzXp42L4RkrryPTCQE7tRnNhN5OUMPnaf8vrXhPJKQntzJ2BXd2B3Vw1Nd33XE7ZdPZGyjZ+vaA3X161gW9FU5fimiaml9eFawL9hSjk4hpaBu1txvoZLAtIJpDxdXYE8Gm2ZmiMPknPmwfM8BGbh7Bo+Li4wtWkRJDUphKTmRZDSKlEP6Xkkr7mjKSsnGiJ3h4ow2lfSiErpNStlIgJIe1WzeTs4ITfKFYazVCGkFi2AGxzTTiRIFUCoZmDLgcbVETH4Miwc80MyY3qmzJgcGoaJmTNhUngopodmwrh338Hwt9/CZLrN3hxvG4VmRrH3Xnf5+B/58X6zZrPrv/nW1WGc0czkE7VaD+BE/gWSATe5PyaLQlJOwcpp1s10lQJJ0fos4VgXk1mBuT0iWntOHpM4qJhoPMiaVSEph3MEkEbRPGl7jAFIGsU5QytJ2MlxbT8Y5bq3PF+UFegSKxRUiWNUySGdl+BoVC+mewUCSKmLdGm3j+L/EpICSO0lSUC62/oB2aFsGiSl6bJkt8qepEBSTtW5h1V7BZIimx+UgeQd+4xGCsqXIWl8Li2t6iskxWnax1aEpVcxpPQoDsvg8rBPrQvn4jZwre5KKDZJg6R9XV04NvJ7m2vD/n19OA43w/Nj1Kn2SL0oMXN9FZLS3QFnx6l8d0fqwR3r2eFIPTYc97f0xfVP2uL04Jo43iIRZ2rnx5nEWJzMHoQT2TLg94SM+C0uI47GZ8Qv2cJwOXd23C9ON96gGtCfA9vs4XSwHwG/fkboLgaeUUkLCMgZSLkynDBpi2tfVcSZyXScgyJxoUMhXOxYWHWpE11p16K4yb/zbt8yeDCgPG7TST7sX0bd5JMB5ZA8pCKeD65guskhdOp8fCV8wTWpLezTO8A6q44GvwsgfXNbmQdgPpNJRV3YV9eA8SNd5TkOxJcIwHPTgaOcHByhDg2F7yAd5eGBcP3cD97rQ2ghZ6RB0vonSEoaD5xes/j/4lzYjo6F7Qc685094ZaTm6va6wEd35K2MD5rqaB0z+H9mE1gf9QAzhmm7NPrIHViNSSPqYSUkfy7hlWgmyxPN1kKd3uUxtWusuQqgCytkLzQqRTOtCyigDzTrAiOEpY/1c+Ln+rkVkgeqZ3HVI08aaAUHayaoJDcVS4KO8pEqLaXDsf3JQIKww+leFk2FHvLhRGgodhXNRy/tciN0+0K4nL30vijXzXcHVYHj0fzNTWpDSxTOXlaJMv+nIh8yku+hjGL16c2BcbUhzGkIazdaiKpVXXcrFUGp4sXxuGcCdjDcWFHaCS2hYTjq5B/x5os6fB94Wic4P291rIoHvQqjZTRlfjeqEoYN1HXiG1mGIFN4uh2doN1Zw8kb+0Cz8o2Kseq5nTyzdIg6VzWAN7P6TCnV4R7BAHWnXBsXcqEpDjJ/LlhT5BmCrmQkisvUgkvS9GcCklHnUIKyZTmRRWQUgcpgDQ6VEiDpK1LGa2N9tBFBiApE2lLwyKw1MgHa+XcerrVxwm6p0xBWDhmPaZ7PZctGj/HhGFfVLDZTDksFF9nCsfnHFM/CQrFB7oHGa6QnBDGcTYyAhPSvYfxGTNgZLoQtH0vHeoHZzo5pnHjua+J9D/0o8ibb15vkP49dOKTODU2Bsujo7AuUkIDJND8BSR/jDEbLcu+5C4CchsBKK5zgzjJmBhsiI1QUG6QYAI6zN1R0ThI4B7n968Tkk/y5IBVwgHk8E3xvLqUKpK2MtKDTZyjQFH6P4ok/slZKb9/s9xsc+WsSkhWL6xy+SUdwTV6rnYxeOu8KPmQ4AABpLTE8vj3Is3SD36tRSkzr1XKPugg1UUKIPlmcQcA2cVM3BFISuKOdPPwDK/+V0hOqAL7xKrazUNO31lmcFCfaTZG9s1pCGO+WeLhXUAnOa+RHtSRgz8p/UojqXcJJP1/7L0HdJNXtvbPhJkkDBj3blmWbbn33o1xBQymGNN7aAmBhCS0hEAqJBBKCL333nvvvfceCBBaAHfLan6+vbcsBzKZb+5/3fVf3525KOvJK8nCluX3Pb/9nLPP3h8loPCbbDyfnY/K5TRoLGuG4kXkSubR6xcTGJbRgLKyO7CJnNpuco37PwCOU9R/dhhwehBwkBzSjh70dc66JFjM6ErRe2toe2XgabNY3IwNxOUgf1z0J6fiG4Djam/s8SbX4e+EnZGu2JvqiaMtgnHnvSwUfdMOj3floeJKT+AZ/YzfCDYPhgJ3CcBXSEfp/s5PTetdn7ZA2TupuFcQgcvkfk62CcOFzrEEx3CCYwS5pUjRzW7kMmhAu9srGvf70sD8ThQe9o0XUP42IAlFHzdAMbnHIlnrzSD3QYPoMBogv8tC+dgcEg2iP3SCcUJr4EdycVPbo2huJzzakY3HBMeip5+hsnwcNOUTUVYyDmW3hqHy2idSc7T4zLsoPt1Pmglr7tF71/0g6axVRlPCTtnLkGQnqSNpf4Ox8BhK7s7D0/OD8fhQAZ7tbImiTfT3WdUZlUv7QDuX3OX0jtBM7SAZt5qJreh9tkIlud2Kb+kcGMlrlMmyBlg6iIIACgR4bfLJe4m41ycWP/eIxfUe0bjWjT6vrjG42jESl9uE4lLrCByjz/NwK4IPucn9BMv9jQOwNzsIO9P9sDXVm44B2J7mhy0NfGq0OVWN9eQw1yV7YEWKN5YleZI8sDJJRXLHilgXrIhywOooRywLtcGqUFusDbXD+mAn0fYwD+yN9cUxCkjvpkfht2apKGlNAV+7xjB0ywPeaYmqXnR8txXwMQVOg+hcG0oaTEAb2BzFfbLwuHsyHnSOx9k0ZxwNr4ftHrWwwa4WttrUwkGFBS6Sq7vbIAJPW6RC04v+xp+Tm/yhN52v75HDpHN4Ht2f2Q2lC7qhfBF9vku6QLOwvbTQ0s2na2FuFozT01H5QyIqR8SgfABd43Ru6fMjZIwoD/HFcx8lngaq8DyWoJYZAQ23tWpH13SHZEnKkwS9dkkwdEiBtgt3/Ek2Ochu0QTISBgYvB1TAHoNF1M3NIuELivYNA7RmGRI4BJ4YdBEheBJiD+uqVXST5dzN3isXKVwxtz61phS30aSdUY4WGGYm53oc3tTG6whb7yBb+jrnxJIexBAs+1sT3vXfV1Z53/0bWhu7qT02n+5U1CvDkYSGGc5kKO0s5OKOhtc7LGN/vi7JNPVBEopKkBOcr1s+fhHSK6mqNIMyb0UQR1zcMA1es0jrrLD063RATDGBsEYHyitZcyJOQzIqhSCXmqQNEl+GZDGDFM3D4Yjd/R4uasHt78SESCNjaNMyTrVCTt/Bklxka2r22O1T/h9mpUjyi5JNZDkfZIMSZ5u/WeQlOlWBiQXOf8yU+q3MiR5Cs74Q9N/CklZy/w4zdSTkr5PyejGeDaLBtil7aFfQ4BYngfNgjyBJFZ2pqiboLRzALkjcnXHBgsoCykCvzUjHRe+DMSZga44+64NLne3xOH0OjgUUQf7Q+rhsL8NDiptcZD+flxb95CLAhvpQt3t5Ypr2TGo6F9gmn6dQ8BdPZogPBHgKVxyqb9d6Iz7x9vj/jEC0tHuuL+uNX6emI7z7wXials1bjfzxv1WIQLJ6xShn2kfiUtd43G5Y6iAUgDZPRq3e0QJJNlNMih/7ROHR+8m4OG7sXjC06wExxL6TMuGZMAwvLEAEsPbEHByUDm+CTTjOkM7oatkCGNKB+imdUDVahpYr1BgUDLYVJPUOAUGnUl4/C1wfySqbg5G5eUPUXHhQ2guDkTl/WGmYgjl9HLDq5DUVL0ESWMhHS8CxetReecbAmw3lB1sD83ODjCu7wHjqvdRtagP9HPI9czsQu+nHbSTWtP7pMBkbD40o7JR/mU6SoenmgIpCohK6G/9gtzyb+8n42E/AmXvRNx4J8YESNL1zgTM9hRsFETiTMc4nGgbhaPkLA+RqzyYG4R9OcECyW0N1NhDg/aOhv4CRrM2JnthTaI7VsW7YSU9XpLggYWxrlgap8CyeFcsi3bC8kh7rIp0EK2NcBBIrgmwx0pfG6xR22O9vzO2BSnoeq+HvZ622Odlh/3e9jgc4IQToQpcSPDC7Uz6ezeLwuN8+rt1ob9Zbwr43m+CygFN6VxuBv0nzaF/P1OKhJeRU3vRPBoP6Dq+EMR7ra2wxeFtbHKtQwGaHQ6mKHG6RSBu9IrFI7qeir5qjOLRzfB4agGez+qAkgUdULGgnUBSv4CuowWNgNnZdC2RG/02GcbBCQA5VLSNkfFBGxGIUt5nHUtjRiYXDqDXdckkwGcB3Sn46tpAnCO7RFZl5ySU0TVfSk6+tGsUKroTcHkKl4DKgOSSdOZpVnO9VnaQFVEBst3krtoD5wiKB+ja4tyN9c52WOpkhxl16mFSXUuMsrb8U0iOsbfHODIZ7/7lb1JZJ6nOa0D+W9y8ar9xO97B+nRrd2d87eCIKQRJrla/glzlJoLkHnKWB0i8SfYAAW8X/ZE32TtjnYOTJO7InkkCKLtPbua8lvtUOrthO0FyH32vk44OuK2iKC9ALXuaeOuGeVq1PNFHxPUR9eQUeU2Re7WxzOuLUlYuJ/x3l/iSzOXmzFA03zdv+TBPs5prtVa2Nq1HmrNZtR1NBQS4NQ6vQ3KLLBE3SO6VWANJ83SrueKOuSwdO0gGZOXXpiSO8jFpqByXAf34LBgm0HM/NZYC5RXTyW1M48HUlIBg/LwJdJ/m0PchWH6VDt2kHGmarN/QE883d8fDTR3w67ZOeLLvHRQdfQ/ag+8DW8hFrv4QGNcTRT1ycDk5Agf9fLDbIxDbPEKxWRWK7UHk5L1ssNvFGqec7XHV2gY3LSxw17Iu6W3o4+jzTvdFebswGAlQGEMOYSbvPyTHuqoLSpdyWj5F+QtJP5FrGNFMUu6ftw7CnWxP3Gzuj/NNfXGomQ+ONA/CcXI9J/OjcIUGlls0+JgheZMGntvdY6oBGYN7PclJ9orBIwLjY05m6R+Ppx+Sk6QBsmRYJkp5o/hXTVD+XQoqx6ZBP64Ruccmsj2mahoNvjMG4PmSgfht/3sovDMSRZXHpeVUGakY51CpP0SQXIdK7UToNGNR8eIrlD4cjpL7n6Ho7ucof/IVjNrJ5BSfwFBVKmXMK8hDlkuzLD39XyuqqC58zs2UNaVb6Ht8jxdXBqHo+LuoONgHFZyduY6Oy3tCS45HO68zKqa1RfkkCm4mtJRyhJpRmSj/KoPODTpHhqdJpZgXH5oyXR8PSJB12rt9YnCrR4wk8lwTSIaTmwzHiYJgHKXg4xB9zuwk9zXxw56cAOzM9MX2dH9sIVhuJFhuSFFjUwNfbCZXyceNaXSfvr4tOQTrY3yxKlyFNZEEz0hyk2Hu5CDdsCLcHUtDXOX+khAFFge7YWGgKxYEuGAB3w9WYXK4J6ZEeGFqmAqzwrwwlx7P8XfCHLUdVvg7YB1pi58ddpIOBtvjdCQFXPFe+CXVDw8zgsmFJqOwJV0DbQhQHZqI9PkZKG2ajKLGCbgcrabgzQ2b3OpjpWNdrFVYYU+gF86nxOJOLv2bXIJfQRoBkJuWNwNGtgQo+MAkcrGTOXGqJTTf50kFK22/NMlC5TJzZQnBKIrxx4s8P5R0iZKtVtpPMqQACCeF6XuRO+zGiTqpqGqfInshRd3iUErBnK5LOLlIUutY2TKiy+KOH+wg/aXbB1f50kUH40WwHx74qnHO3U3Kd3K5ztUKN8x343HTBuPrWWMsucnhUtXMGsOcrURfW9eXQgKD33oTQ+vZoA3dT7GwOD+gU7tRrwn0b3JjSGZYvC1V6X+0ssJMR3ssc3KUTtq7HR1rIHmQ+0u+BEl2ky9DcrWTSw0kt9nRv7W2xlFbG9ygk+oRV9iJCpRCAJKMEx9AJ7dapEnxF0iaa62a4cjTqCwB4p9A0gzFGudYff//KyR11ck6ZkhW9kwQSJoLnDMktQMbvlK7lTNbzQ5Sy3u4RjVGxdiG0I7PFECytJPIOU5rgcqZ5DRmtYNhUjsY+aIf2ZQcaSaZoSRyHcnQTMiEdgENsmu748WWHni6rQue7OqG54f6CCSLdryDksVdcLpvMA418sB67zpY8PdamPe32lhW1wHLrJRYbK3EKmV9rFDUwyGVE+6HkWOPpag6MRFIZdF9rj3ZOAQlNBg/7hKIO70D8fPgCDyj910xtyWKF7fB7YlZuPZRKK50UeNmnjtuZLriVoYr7jVW42yGAudyfXCydTBOkYs83SYSZ9vGCSQvt6ZjpzCZbn0ZknfJLbCD5GnWX3rz+mSsQPLFJ/RZDs8hN06OZEQ29F/nkgunwe2HhjCMp0Hyx6Y0MDLEaYCc8xGKVwwCbnGJvGmowlVC2mWU4gKB7TI9PiGQNFaRmzT+iKqKMaaSar99Dc0jOr4gp6yfCqPmkbS8+jNIcl9JhiS3zzLgOt07SMScDs2dEag4+wGqTn4Aw94BMGzpD+O6fsCKvqha3AP62Z0oEGorjtIwsSn0YxpJ9wopej8inc6XBgLJp/3iBZK8NvugXwJ+7hlXk+16lYIWhuSpthR0tInAsfxgHG4ebHKTTUNxIDcE+5uEY3tWILZm+GNreoBoY6oP1iZ6Yi25yU0N/bA1KRhro9QCybVR3gRMb6yO8BBAroxQ1mhFhArLwz2wLMwDS0OVWEL3l4R5CyQnkKP8wccRkwlmDEkG6AIC5ZpgF4HkJh8bbPGyxE61Bfb7WuKwjxUOe9XDQdXfcYRexzoV6CwO8ip9/1sExgcpIXiWFYPnBMufG0bjXFyA7JvdG+yBTSpnrHWzF111r4cHgQ54lu6DwjZhKOodj0L6/Iq+zkDZaAoqxzRB8deNZPahlK7PIrqeiyigLqYx5UWUL4paBMh1i+G5wNd03ozMg24QXY+9TeuPDEhjOxMgy7qkoLxHAsrfiRVIGtuHwtAiEkau0JUehIpkP3KQfpJdLwVMIgLwxI8ctYc7Tjg5YIe9LTY5Owok55CTnGhpgQkWNjWQ/NTeCkMc64vMkPzCmp6ra412NM5G1q79uk/kv9OtWUbq/AB7q7OdCZBD6lthjKsL5rgrZY1xr5sSuyytccjRGfvIabJ2OriYqu84Osm+Sq7rup2rTZCT3OSqwCZynFtsHbDZ0hJ76cTgqYlffFQoCueSTkEwpJCTaRAMTaovSulCL2tIDoci5rJGoaamyLkRNeLWVpVNX+oFyY//mRiSf9gXyapoFQVNPjdZjjJltFZPsbKDZFV2NYkdZAU3SO5J93sRMN/lNclU6WfH06PaIWmm7R8jTGuQldWA1I4iJzi6UU2iiZSlm5oL3Zwm0CxsipJleShb0UL2OnJfyKpRTWEYkg3N+5w5S5HzZwQEroKypi8Nvj0JCn1NWw9GDQDe74zHjdNwPCQIC9xdMNHFBt841MWXtm9jtOVfMdmqjmxg3ufviSsNQvEkPwWavi1g/KgAhk9awziYft7AZjD2zwI+pui+Pzk1AtRvnybi6U/ZwFFyqQ9HmLRgCsp6tceZ7CicaRKL402icJSgerp5BC62jMDlVuG42iIIl/P8cbm5GhfyvXGxnR8udA3Ape5BuNQ5DLe6RYt47e3XPgkidpEMSnaRrKcDyXEMbohicuPlXzaSDFFOgCmcGI/yqanQTMpG1XRyDot64dfFnXF7Z3eUPB0NrfGZVMxhkJVXJ9xUSS8sDR3vE/x2oti4HiXaVdBo10BXsZYc4SpUltN9PXcSeSZOsgLsJhmKWuk9aXaSz+lbFVavU0q5Ad01GJ/vgOaXKSi//Dk05z5EBQUtmt19od3Sh2BJWt5DMjK1FAwZyfVytaXKMVnQfJOFss8bSAIPrz0//zAZzz5Kod8/GfffixdI8ud0vXOEOEkG5XkaqM+1C8GZNkE40SoQh/N8CZB+2N/YD/saBWJnlho7MvzEVW4l92hek2RtSvEmSAZhU7w/NsT6itbGEDAjPbGStCrKS7QsTImF5CTnB5GLDHInB6nEohAP0eIgZywKdMLCAGcRu0x2m/MDFSJ+7fxAFeYGeJDD9HxFs/1UmOnvh2k+akxTe2KWWol5ancs8HLBEi9nrPJxwa4oH5yI8cOlOArOYoLxMDIITwN88ZtKKTrmZYEdLm9gk9NfsN/bGhdjvGSdtLgpXSOtKGBq1QJIywA4+IsmRRLcggNhDAsE4kPxoq8fij6NltmcKp7F+SETRSMIiBSU6enaRrckScop6ZiI0k5J0HQx5SIY20UB+abGyry0o001ZdjzkpAhNgTlEUH4LdAP15QKnCQocnGVdTT+LSEjMZ1MxERykdz+6rO362CUowNGONhgiGVdfGZZD1/bWJNs8EV9W3xk64hmdepdDa/z1vWpY0a3fU2ef7Obe53aN5vVqnVnwN/ewjf2dphG8ON2WjudXLHbyganlCpJxmHtdjJlupoA6SJ1XRmS6+m5jeQkGZJb7RyxjU6OA3a2Ask73kq8CPVFeWygQLIqLQS6hgGmef9MUuOgGiiawcjidUXz438GSW5/JfqDg/y/QdI8zfoyJNlBinonVlfbSa6BpKwj/l8gyWJIaidU73uckSeQrFiQi/KVLWHY0A7Y1ANY1AmYUEBgbIIygvDzHvS+B6YD37c1VZSZSo5uaAZut6KBMsAGm2xqY6XFX7GCI9V6b+Ob+m/iC5u3MNq5PqYp7bCGBqgLCbF4mJdDF38TFHXIxIuuOSjtm4vSfrl43rshnnZOwJP2EXjSJgSP21BU/GESvT+C8rFPgcfjgDtD8ORYN2BgL9zOS8eJ9DCB5IncaJxoGo4zFGGfzg3C+bxgXGkeSKAMxLVWNNgV+Agkz3U2gfJCxxDc4E3z1U6SAfmwb2LNWqQA8gOCxcep8juWkBvn7F7t6FwYxlAgMYUAPz1NtsxgNhdR6A39zo+Bu6Okj6Ku6nkNJMuqlxHNkITxAT3eQ89vQoVxnamziH4TDJXrYdRtpBft+peQLKqGJCHXBMmqW+QmDwBP56LqZ3oP14ai6uxHqDr0gSRSgVwl1vRB1ZKOUviBO7hwgMSQlHPiq0yZdSgb2gClg9NrIHnv3Tjc6RUvgQR/Vjc6Rgooz7YNFkCeah2A4y0DBJIHm/rjQBNO4gnCjkxvAqQvtrFr5CnWlwDJ2pxA7jLOjxykj4ghuZrAyJBcHe0tDpIhuSjUXUDJ0GMxLBmCC8gpzvezxzxfB5P8nERz/Fww29cZc/1d6ajADLUryV0000eJWb4eIgbkZC9P/KRyx3RPN8z0cMZsd3vMd7fDEg87zHeui00eNtjjaY9jHo64SWB9HhyAUn9fFPuqcS1SgcvRCpwIcRRI7vMil+rnjGPeTjjuaIsrClf87OiCx24KU3chtZeoKjwIaBiH0v7BKBsRb5rN+TEHlWMzUPplAznfjeQwjQzFjrwemSxiSPJYoG0dBn2zIGizgyVBUMNbRwiSkjtBkCwO8cOvBP5Lrs44TuMcb3FjSC6kcXKyrS3GWVsKJMfR80PefgtDrerhOw83DLeywBgyECMsLDCo9tvo/sabyLe0Of+aNv/Gt6DatW/mW9qhu409xqn9Mc1FgWU2djjkocLW+tbY7+ws4pNE6rk6mTJe9xAc95KLZGBySvhOV9NeSS5td8zNBefoormlVuFJkA+KOLuVK1ZkREpDU01OMEppAK7IC0Vl8+gasHEJORY/x/rjY7NqknK4mk6LWBhaxsGQHy+SPZEkLljM2W2adqbqOtwzjttiabrEiSo4BZynWsk9Chy5ZqvUbeV9kimmNj2Dfq/dypCUadZvsyVZo3J0jqlTwbhOoooJzaU3ZNmMhihdSDBYnYXydbytI1c6r2N8PjCsJSq65+DXvDTczE7GjYx07ElMw3KfIEyqZ4Xxf6mFmW//BWvt6+CA0gqnPevjaYIXnsd74EWCUvQg3hW/JLjgUYYahc0pAu4UDGPPKJT3jcH9LiE42VpNA6wXdmd7SfLHiUZROEwO/kxmBG60TMBvfbPx/IMMXOzqj5NtVTjSyge7GrlhX1MPuX+khRonW/ridL4/jjVW4WwLf1xsHYyjy185AACAAElEQVTL7HxoYL/YMUJ0oXM0LnaJwZWOwbjRNVyyWjlpxzzNynsjH8t0YxyBIsm0RWJEOoq+JIDQZ1g5lvtqNkfV5I4wTOsEw4J3ULyqN+7t7odnv36PElwj+FXgBYHtBaqLrvLcqE4vMjdRriCwlRsfo0JPwDQ8hMHwAHppyvyIvvqCAGmEtsr0zzlhxyxttcph2kNZbjQl+BCL6fsTkitOQVe0EuWPx0Lz85eouDQMlSc+hv7Ah6ja3g+G9Z2l/Frl/HxopxPsuTfouFxovieXPDILpVx/lpzzHyF5t6cJlLfM65Jtg3CxIACnW/rgZHNfHM/zwdGmfjjYxAf7cnywM8MTO9LV2N6QXGMDT2xJ8cLmZDpWa1maJ5bQc4v5fpInliaqsDRWieWkNbEqrIhUyhrlqhB6TGAU+blhta8rVqrdsFztgWUUzC5Rm7TQ16T5PiZXONubwOfpgmkqZ9F0uj+TnpulVogWq2ywkM5VhuJcAuQscl7TFEpMUnpissqbAOqFqT6e8n0WeTtK0tBWH4JhqB2ux3pK/WbEhQOJdB2HRuE3vxBc9QvFbi+1ZN5/42CBUU6WmEjB4WJ6z/u9FbhJ8EIAV8AhZzg4DsZvyWlObEKBaGMYx2ZB/20adHS+Vbwfj7JupgBZ2zFZslxljbIg0ZTJmmNqrix9KhN5v3aIlLzTxITjYYCfNJQ/xDkZ7gpsVNLnQmMcN4kYa22L0WQivrWxxQhba3zpYIfRTg4YaVUfX9Hj4fXq42P6el9nN+RY2SLsNST/vW8Lhw9/J+eNt253qFsfH/29Pn7iDiF0km+0tMIxOtH3Vyfv7CUQsrjAAGe8MiBZOyjC26lwx26FQvpTHqIT65SHu0DymkqBX/088SLCF9pkuhAyo1DVOBz63HABpIYGeTP0+FjRLFL08nN/BCNX0DGLK+kYW8WjKj8BxtYmcSarviCuJpvVvBb5R0jKOmSPxBpIarnSDomnWwWU1ZDk2q2aYQ1fgSQDklVBA2LR9+0EkoYp5BRnEQgXN4V+Za5AsnAFAWFZY+m8bhjdFE8IzBco+t9DUfpy+7qY8dfaGPN2fUyycsAihQq7Q4MloeFuVgKeZsehKDMcJQ0Doc0Mos8tFGgShoomFDk3DZY9n+hBbvT9ZOBT+hnftJTp3Ctdw7A3x4Nchgs2EFT3pQYIJE+Qiz+crMYRGnQPZdPfLdsKR/MV2N1YgT1N3HGohTc99sWhPC+caOEjkDzVTC2QvFQQgmudyP0QFLlyzKVOkQLIy93iBJC8DmnOav0jJJ9+mECwaCBl0sq+zELJ15ko56lqzgSe2ALGnzrQ50aOdkkf6DZ/AM2FL4DK2QS/W+TwiklacXp/hGSFuQ6r1NJ5Rq7wMfHtCT3zmPSIfOFT8YhGuvfPIFlZs3+yCmUESL2uGpIGQqfhAv2czdC/+JEM62jorn0Ow5khqDpMLnc3ucqt7wDrukoR9Ko5+aam2RPzoOPuFV/mCCQLB6UJJHlN8pe+sQLJX+h8u/NOHG7T58eQvNYhVEB5ppUvTrWgoIZAeawZOcnGauzNVmNXJgU7GT4CyW1pXrIthEH5Z5Bcnuxl2g4S51EDyVXRKknmWROmwroQD6wlF7nWX1ENSnes9PXECh9ym74mLQnwxGJ/FRaQS2RQzvJyFUhOrxYD8mUxJAWUHuRCVeQ+6dqfoVSZAPkSJPn7zFfZYaWnDTao6mGHf32cD3XBAydrFHq5QRfKU6jReB4QhgteAdipIjes9hZIjrR+GyPr18YEmzex0cES1zyVQFAUkEpB7RC6/kdlmiA5vpFAsuq7DBg/ayiQ5KSeSslFMEFS1ihpnNA3jRAXWdHg94IlugRT0YCi0ADc8VLhDEGa8zJ2uHEOhivmOjriJxsbjCEAMiRH2drhU0sL/OTng6F13sI4dzeprDOsTl0p2NL27bpIfavu9WlDhvd6TZp/89uM0aPbxltYXmxjaYPvPL2wkE7Q9W7u2ODgiB0ESHaJOxVuElHtcnMTx2h2mHurxYXRDxIoj9BrTri74wy97pyLI37x9sTTYF9oEsOArFggN0aiuLIWYShvGS7dwnkvIx+l2gWpZtsGO8Lqr5tldor8dZG57Fx+nKkdVn509TRrtZusTtZhMPL0ao2D7GHa8lHO65AMSQYjyQxJ7oouJen+CEka4NktVI5pLGuRT2lgLOLOD9PbALNJc0kLO5g6RiztTY/7oGxUR9xon4yNAU6Y8nYt/FCrFsa99Vf8ZFUPC4P+jrVxDtiT6YcjOeE4kBaI3XG+2B3pg/2RNHCmhOFcSjjOpgTiNEHuVKoKlxv54GHHWBoECJLz2pnEnSkWdJfybff6JeAwucBNsY7YFKPEruQQ7MuMwZ70KBykz/9wXjR2NPLF/haBuEDH8+RYLjXxxeVcP5yjwfl0Lqmln0wBHinwwYn2ATjTNRhnu4WQgwzEpY4BuEG63SWY4BghWz3MWz4evRcncHz0XrTUMn32UQLKePsMl3KjAKP028zqKepcKWKtm9yF3n9fFBJwXpwaCGPpHugJcC8Iay/MXBR3V2mSFqjSsfvTEuB0spWDv84VdEwyihiC+uq1xsqXAMkl6kQGkyrpm7HMz+uqxUXsDLiLYu0+lBYvxfNHk1B4YwRKzn+MyiMDoNnbB4ZtPVG5shMqF7RB6cxW0ExpgcqJzWS9VVzzkHRZi+Watnd6R8uaJAPyl+6xuE1O8jpB8nqHCFxuE4Kz+YFSru54iyAcax6CQ00DZbp1V5afZLryuuS2hj6yLYRBaYblzgRvbI/zxDYCImsTaX2UO1ZHKUUrYwiCBMqldH9xhALzwhWYG+aGOeFumEuPlwY4YIm/PRYFmLQwwBEL/JxNU65qF4KbkwCOneAcbxXmepk0W+mBmRQcT/J2xiS1AyZ72+EnL1v85G1Vrfqiiaq6mOZrj+n0mhnuFAx6EJwJnqtcPbHS3h37o5xxPNYdP6cG4VkGnS+p8bgeGICtLvaYbVUH31i/gc8sauGTt2phEF07P9X9i2zifxAQivJEun47cxGMRsAnzYHBTSlg5KbndByShXL63EvoM+cGBlXtEqW/JFomAc3ipIlzeXYIylOCJIA3pBA0EyJQGBGEu77eks26380F28kZr6L7c1wc8CM5xjG2Nvjexg7fkbggC6898tTql/Ut8YVFfeny0ZfcZh69LsbG+myL9NeNlP9jbiFv1L7dm5zju7X/isn0x19G2iJl6ZywnSD4zyDJHUMYkAfo+UPuXOic634qcJK+dtrRDrfoJHvo74WyuGAgI1ogacyLEkCyXgae+b6hTTyMbRPkaIbiK2CsFjtGBuTLkOS1SNEfIMmAlL2QBEeprNMzWVTRO1EgWfmuSQxJnm41Q5KnW/8ISQakflxTWYssnJKP0hltgZkEqoUEquXsijqjYkYL/Mrd6Tv7YmmCJSbZ1sLY2rUwkTTj73WwnKLhXXFRMhhub+ghG79XBNljTbAjNocpsT3UE7tCaPALoM87SIm9Ia7YF+aEA9GOOJehwr22kSjuk4Kn3zWEfkYr+tncNYPAPLeH1E991C8de9JU2EdOdH/DSOynAGVng3ByJqHY1zgMm8lRbs1W4Ry5Fdb5HG8B5cWmfjjbzFcgyetlx9uRo+wYJJBkMSQvdwrErc5B+LlryD9AUtxj/0QBZOFHyXjxSZJUKOJ1XA19duWjsyW40P/YTCCJWb3IffdHycYeKL84lHB2QiD5GyGw+L8ASTPU/gyS4hb/BSS1kulqEKDqqoHLz+tlEvY+HU/AqF+PypI50D74Drrrn8F48mPoDryHqh29YVzXHcalHaGZy4k8BMoJpio8hcPTJFHpZUjyFhBet73Tle6TM7/WLkySdy4VBAskufD5iZYMylAcyQvG4WZhAkmWKXnHF9vTXgXlHyG5McYD6yIVWEkAXBXpjuVRHlgWqcQSur+IwciADHWtgeSyQEcB5R8hOdfXUSA5myAogFQraiA5x9MEyOmubviRIMqQZEBOIpc4yctSIDlZbSmQnOZngylqW0zxtMVsFX0vZwKmhRUW27lir38ErjQKQXGXLKB3PsqbNsQVGisOOdhjj8oNu8P8sTo+ACsSA7AoRo0ZQa5Y7GYjrf1uqnzwKDgENzP88bhlqBQx54zWqg8aAIMyUTUoA5oBySjvkwh9N4Jje4Jjq0QBJO+v1jQKQ1kWOUkudUmQ1CXR4+hgGauuKFwkm3WfqzO2KlyxzMUJ0+ys8IO1JQHSGmPtHDCGxJAcS+Pft3Z2GE+fBTvLYfT1/vRcY0uLi56va7P+Z91c3nzresJbb17vRZHRaPqjr/D0xIL69bGGTuqNzjRw04mznSKq7e7kLLlknQsBkgB6lAB5jAB5lMB4jCDJOkKPjxMkz1Dkdc3JEfe93GVd0kiDtSGXN/tHoSw/QmSGIkugR2JAsvj+K0D8E5nXInWt4191km2jTeuR1dV1uKKOtMMiMHIhc13vJOj7ECT7JonMDpK7f3DdVt3ABq9AkvtJcuKOZLX+kAvjhDxpjfVkdiJKl2YCK8hNLiEnN7Unyj5rg5P5SVgR7oPx1hR9vm2BiW9aYJa1E5aq3LGWALgq1RMbyD2uD1Rii587tvqatM2PAOnvgW0hKmwJ96QBT0kDnyc2xtPr41TYGq3EvmhPnKXB4wpB7zo57aLBuaia0AGaaQWoWFwArOmC4pnNcH1QBHY3tsXeBGucTlLgfCqBj5zqmRwahBsF40hTGoRzvHCgmT8ONQ/E4Ra8DzIYp1uF4Ex+KC7mh+NKQThutI7ArTZR+Jk+z1sdonC7YzS5yFiCZJzUaTVBMkKKmT/uF0eQTBBIFn2cgheDyEmOTJfPTQA5htuL5cLACS9Tm9F7pc94M8Fk9zAUX90Cg+6+zK3qCIgGgw5VRr1IC6Mk13DiDSfyaKrhqSegGYy/w1EjiTlaWWssk3XLsmrx10yS1xL+jPy9qwwiI28JkcQefU2dV1MZu2f03EVUVG2GtmwadI+/hv7aMGhOfAItF+3e2gtVq7qiclEH2fZTNrEpir7OwvPPGuDZ4DT8xtOtNFjzdCtD8mbXGAHkrQ6RuNEuHJfbReJS2xico8/5TKsIHBNAhuMAucn9zcKxPTsI27ICsS0zQLaC8D5J1pZUX9GaVC+sSlZhdaKHSfEeAsblEe41kjVJ3kcZ6oFVwfQ4SCFH1jI6z5YGe2ARZ70GktMMdhXNDHIWTQ9yxLRAB0wNsDXJ3wpT/AiAPhYEx3qYqHbGj2p3TPZ0xWQKpKe5uWOOgmDq7inHmR6umOpmR1+rh1kEznkB9bA4zAL7m3rj6Ufk+kZ/QAFpW1ykMWFnHIEx0pHObRUe8xRoUjgQEAAER8ga5As3Xxy3d8JGW1v63o70M5xwxt0Dt/398IICTl1WHKpa0tjROYWuaZPKelJg3IULBhAk8+KkoXJVTgRKGoeimABdmRYus1wlMYEy43WLxqqzzg7Y72SPHTTOraD7synYH29nKa0Gv7O1FkCOIUCyo5zo4ITPa/8Nn735Jr60s0dfawtk13vzerDV69qs/5G3SIp82tSujcGkKQTI5fb2WO1khw0UVW2iE2YbRVVmSO52dhJIHiYYHqHI6TDBkuHIR17sPuroiFN2Nrhsb4c7Shc8J2DoaVA3Q7K8daTozyBpvs/u8Z/BsUbVTlIAyf0iW0aKygroSAO7pn2saV8kuUhjzxSKNlNFDEgDXUTcO1Lz7kvTrP1TTdV2PjIVN+fs1pchyds+2EXixxaomtwKJUvIYa6hQX9eEzwYGo09OQ4Uhb+BHxxqYVT92pjKRRZiEnEhuxmOJqVjY3AAVpEznBfpgJkh1tgS5o0dQZ4Cxh0BKuwMJAcZ5IWtNHBtDFFiQzRPoXkJINdGu2NTBDnLSA+civHF+URyeNn+sn548/04FJKzLV/UGiXzWwok9dPycW9AHM408hBInkshh5jqjxMZ5C7JmezN8seOLBWOkHs5RlBkUB5rGYSzrcNEDMnLdOQKOzfp87xNgQcD8udONNB3NokByaXXGJCsR+9xZZ14Uqy0CHv+STxKRzSUfYQMSc1YCjImNZOCAbpp5CRXN0DpumQUHhgB7Z090JT/TPAql8VBYzUgWYTLGkiaMlSrHaT+VUhW0isrZS8kqpN7/jUkGcY6YwU5zQqBJMO1mH5WITnMEnK1DEkdttMPmQMUjgF+HgnD2WEwHvoI2s3vwLiyyyuQLPk2B0Uj0lEyPFuyeh9/kCKJO1JMoEs0bnaMxM32EaKrHaJxpX0cLrSNFEgeJTgezA3BntwA7GkS8gokubCAuZgAA3Jzio8AckWiEqsSqhWnFOe4LFxRo1XhSik0sCHSG+so8GJYmrWcArY/QnJukAtmBbsIJGeFumBGMDmpQLsaSJpByTJD8ieVC35yc8UUFzfMdvMQQM5yVWKawgmL/Ml9+pCD9KyHzakq3Hu/MTRftUflF+1wr31DHKHfY02gJVb5W2C9b11sVr6FI65/x02lHXTe3qjyDYLRNxQlHoG44qnGAQrgOcmIIbmzrgWO2dniupcSjyLVeNbAD8+aBuNR+1A86xKFQgpKyjrEo6pVPLnIWIEkuBhBbjhKm4RB2zAC5fEhMj498FXhGo1VpxxssY/AyI51sZ01pttaYZxt/RpIfl8NyO+sbfG9pbWA8ou6dTHSxhY96r6F1NqvHeR/7K17p3aj/Kwszuc5uKGvFUVPDgos5v1Bbk7YrHLEVncHbFHYY5eLEw45KHHY0aNmTZKnJhiOR8hxHiOXeYQcJE+bHHdxlCSeu6H+KGEn2TyBTthoGFqGQNc8CBUERJaGa6ty2biOiaLKDgkEONPzFW1iBXiVrSlabE2QLYgR8X2WNv+ldc3qrR/m7Fb+nlLhv1syjD1STe2wWAzLPg1Q+G4qKj7MQnm/BigncFYNTANoYKv6kC6qj5Ng+LiBVMopHdkCxV+1RMl3LVE5vrVp4/u4XOCLd1D4Xj5OZ4VhuXsdTHurFhbUq4Vd3g6yN+xFyyzcy0rAqegA7PR3wzpvR6xWO2KVnzPWBLhiQ6gCGynS30QD2eYIDzoqRJvJAbD4/lZyBtvJTW4jYG6Jchdtj1VhV4I3DpIzPNAggCLxCBR/0IjeUydgZieULmmLiuUdULSwFa58F49D3dyxP5cCl0ZKnMr2wfGsAJxuHIKdzbywK88bl7N8cK2RP642CyAwhuBYR3Ka7QNxoZNpP9/1tiEiLhzAg/3dHtEi7pvI9Vnv9Yk2FQ0gSLKT5G4YxeQkJcD4zLR9hhN2yn5ojOJJTVFGgHzBxQzWtEbR9o4oO/4+tLfGoqpsNSHqFgxVQIXUXDX9pzFPh8r0qL5mOlWL/56MRpPMiUAV8jwBuqpSZCDkGgXKRSjW30Vp6W6UPZmB4tvvovxUVxh29INxSRdUzG4DPQVNlaOayPQyF6Dg3/9R/1j5XG71jpCkqoudgiUj+HKHIFxtG0pOnRUpBc9PNPEzdQIh7c32xu4MNfZk+0otV9ZuAuUOgsDWZDW2JXmLeBsIl6lbn+Ap2pBour82zhOrYzxEK6NMjnJJqCsWh7iIloa6y9aQeWEumB/uKvdXhBJcyV0upvOSp1y58s48cp0zAl0wKdgRk0OdMTWEFOCAeZ52WEDn+CxO1CE3xxmtMz08Md1LhWlebphC48VkT0vM9LfEVM+/YGW0pVQaqvi0BTRD8nCXgq1DDZwxzccN33u5YITKHsOVBB1HgjABarGXA/b6u+JikBsKo7yAKF9Uket9GO6OOyHuuOTljIMOlthLgTyPOycI0Ofc3XHb1xuFMRSMp6cAOSmoaswOMkUaNuuaxKAiJ0zEU62lDfyBuBAYeU+kH10DCgWOOnMWvwfWuaqwgIA/jouU21lhlINJo+1tZF1yPLnZiXZOGGvtgO/rO+EDKxt0sHVAuoPt6YnDh7xO1PlPvinf+tvNtLfro7+9M761sMM8O3usIje5XmErgGTtZiASJA/au/8pJHlfkRmUDMkzSjfpWfg8OcTUD45gZmwVCn2LYIJggqiSi48T0HSdkkRmUPLzAkpyMdqC3wFphqT5+N+BZGn/dBT3SZKKHvoBKTB+SHAcECuQxIgmUmO0+PM8lH6TD824Nqj4oRU0o9OhGZmCS/mxWOlrhTF/rYUZlrVwOEqFB82S8VurTDxtloZjQR445OeGnd7O2EKA3ODjjPV08a+jwWc9DUj/VUgyIPnITpLFoNxGA+AOGgwPpwfjZE4AzuX54Zf36b1PaQv9mq4o556Uu/oB2/pAO6WVDNQMyaMNVTiRTQDMi8TBAoJs6wABJOtKU39cbBUkgDzcLkAgyVmYN9qFkvMJkxqtt9+JJTDGiLhvopSg6xuDX9+LExfJm+hLPkkVUJibVfN6rua7xqgYnysNk7n7fMnCAnKRbVCyszPKT/R/CZI3/sdAUl+lEVBqyVOWVd2HRrMflc/noOzu+9Cc6Q799vdqIKn7qaVAkjvFlA1Ok44gnN3Lpfl+7huFaxRQXOocUgPJK21C/gGS3A2Etb+RD/Zk+mA3BS8Mx10Z5Pob+mIbuS4zJLcnm+q4bkgyAXJdvKpGpsxWdpSuBEg3AqWHiLeELA1zkxJ1i4LINRL4GJIMzeUEn5chOTfAGbP9XQSSDMgpBFSG5LRAR8z3shfNVCpIKkwnULIm0+Mp5CqnepL7VNtgdaKKzrssYMK7wNgeeNA3lX5PT+yOt6Hz/01MVbtitMoJw9ysMNjZAl9Z1cF4y3qY7VofW1W2uBDoaoIkBZyI8Udhgi+exvvjfoSf9D/lZZ79jo7YT+DiutEX3Jxx21uJp+EUgKdEQZsZS6CMh6FpHDQ55CCzQlCeHSpJO2VpAaiKCkAFjU0PVApc5KUjFzeB5Gond8y2d/xTSPK65DgbAqUNAdLSDt/UsRVItrWyRcTf3nhdVec//TZ7zJgC/1p/uZNvZY0BtnYYTW5wrr0tlrvYYJOzvWSWMSR3uyixx9Fd4Cjl6+j5Q65OOOxGYCTnyaDkjiC8AH6aXnNFrcSjGDpxs6NQ1TyOIrsIkbhFEgOR4ajvnCwyg5IhZwYlb3vgnm9VBfEwtub1yNiadUuemn05A1bTJrqmubK0xDL3i6xei+Tyc4b3UqU4s6FXGioo2i+nAZ4r03CR6kJyj2Ujm0oCBk+xYiQ5zCHkLgfTBd+/FQ63aoTpvgqMJzjOt/kLDkR64klBFrS9CvBb2xycSwjCTnKMO31dsYsgudWf4BegwFoagFb6O2MpDUKLfRz/JSRZDEizk9wcqRBI8pHXJxmU+xN8cIwcBjfnPd/cT4qJ67lJ8ToamPZ9AFwbDVz9Hi/W9ca5QQnY30KFywTKO7mBuJlLzjEvACcIlKfaBEl3ihvtyB22i8T9DrwXMkx0qaupiPn9zpH4tWt0DSR/6RmB+72jJKuVC5g/+8DU6aN8KNcxzUYluSpuUm34thG0Y3JROSlP6trq57URiJdt7ILiPT1RdnogKn/5GsbyBajCGQFihUyvlolqplerE3T+u3D8HZJG0auQBEFaK6o0agXKlVLY7gl0hhPQF69Axa9DUXmB3O+O96BbQpCf0waVk1ui/LtXIfnbwESB5C99OXHH1F/yRqdQXG8fLNmtV9uECSTP5YfhZF4gjtLfg3tLcjGBfQTLvTkMSj/ZK7mtgQmSZjEszYUFNhI02UWaneS6eC9xky9DkreD8JGnYNlNSmUdguKCECUWhJu0hOC5lMDI56dZy/wUWO3thhUeCixRuWGelxITAtwxnivueHnKWuRUDydxnjP8LDDV9w0sT/w7XSNKYFIHYLopmey3AU1wPDcMexKCsSkkEIvclZjt4YYfaLwY5myLT+zqS0upry0sMYEeLyI3eoCunTsR3kBsMMAdOSjQLk8MkkTAkuhQ3AkLxHlPBU672OOyuwuuKRxw2cUWt70c8Vu4ml4fBmN6DIxZUTBkRkqLPRa33NMlBaE4zBcP1R64qHCW5aLdSnesVXjIdo9JNP6xYxxrZyugFFjaWeJbAiT3ifza2g5DXd3Qk17bxsEGkW/Wvj2gVdOJrynyv+AWb2l9Pr1WLbxb31JOhpnWlljsUB/r7K2xxcnkJPe4emCvk1LSpNlBMiBfhiRPf5ymyIwhybqgcsW9cF+UZoTDmEcurVWkyAxIBiLD0dg1VcT3X4YkiwHJqgFkq98zX18GpKk11u/Nlc2Q5KzWP0JS37MBjL0bQteffv5HqQJJLlBd9Fkj6fZe/lW2FK/GZ8nAoFg8au1N8Ps7RtnXxVfWb2F/jBcetM5ARe8C/NqyIQ6GcW1Ka2zztJP9kDt8TGJIbvR3E0iupsGJkyZW85rjv4DkFor8GY4747yxI9ZLplkZjCy+vztRjR30mgM0MJ7N4eIBKhzLdcatgeS2F3QEDnPvya+AK98BB4bi2Y8FuEju73qWGrcb++N6Yz+B5Om2wTjbPlQKB1xsGYhrzQNwo2WQwJEheblbhHT5YECaIXmvZ6wAsmZPJH2G7CK5FZbm00zoRzSSovCGL3JgHNUY+h84o7UFtLMKULWwPXSru0CzpTvK9veB5twn0N3/ViBpqDoFrbGqemvk/1tIaqt0NZDU4DcBODTroH/6OYxXBwok9UvJSc5tC93UfOkIU8lVhShIYDfNTvIhfTYMyZ97xggob3UJx61OYaZtIBSQXG0ThfOtw01bQJoFCSgPkkxVd/ywJ9sfu3gbSEN/7EzzlylXhuQWAqO5TN0mAuafQfLl6VZ2kK8oVFkDyfl0DrIYksvoHF1GoGRxks+KACVWeRFslfRvCEiL/bzJVXrjp2AfzPBUYbbaG/P8VZjl64Ap3nWwNNYGV/tSIDyV4Di3N3Tf5OGX9+Ile3dXqhc2h3tjjZ8aS1WemEFw+p6C7yGO1gLJ4Zb18U19K4x3spECBXvVzrge5A49jR1chk7XIBza1DBJ6tEkRKG4YTIexUXiYWQInkWH42moH372csNNlT3u0nXHRdArkkKh5/6z2dFATgxAwOQG7uWx5Er9PXDH3RlnnOxkHOM9kcsdXTDd2pocrdUrkPzOlgBpS++PvvallSVGWljh3XoW4NKeTeq+ef3L1i1+eE2P/yW3ad980zHayfp0Uzop3qUT+GtHO8ykk2WljR022TlgO1facaeBWqnCQXdTss5hN+dqUDrgmKujOEkTJLm8lCPO0sXwc7AahXSC65rQBdSCRFCr6EiurxNBrXOcgMzQPUWk65pk2vxPENW+5CR1BaaiAZysw3sktS2iROb9lLw+yVOw2nbR0LVnJxkj31vbLc5UxLwPd/owbfPg8nPGfrEEyxgY3k+HbkAGnpELesGtnAiKhpENgS+aAQNzcb9bIxxOi8ZsJ2vZynHAsi6exkbieUETPGvdGLezEnEo2BMbVXYyrbqFIuAN3k41a5Ar6WJf7muKzJezm6TBiTd4bwwhKIa6y7aPLeEedFSItoS712hbpAd2Eox3xXpjV5yXaHe8N0XkahxIJLdBAN2VQEFLihJH0jxwupEXrrULwS+9aUBY3g/Y+iEqjnwsKtzWBzcnNcKxXmrszrPB4eZqHGvlhzPtCI6dI3C3bQTutArF3dYhuN82vAaSvJ52t1sUHneJFvGWD07YediHHr9rWodkFynVdbh4ALkphkXlF9nQfdUIenJY2gl5sk2icl5bVC3rAuPad1C2/X2UHvoYlZcHS+aoQTOdILWFYFUsxegqUCLi7Rs6w++g5K0bJv13IWlK4PlHSBpF5r2W5ZLQU0r/v0ZvYBe0RWNQdXMENLv6Q7eiByoWdoJuZjtox7eQ35fbo/GMBCcvscPmNdtfepuygW+TG7/dMUISoK5yhmu1k2RIHmsaiMMExv0y5epLbtKf3KSfuEkWT7vyNpDNyeQcE1Qy3SpTrgRH0zSrksDoXrMeyaA0TbsqZE2SxYCUpB4K6FaTGxQFeGB5oBKLA92kxuv8EJMWhrhhUYACC/xcsdhHSeeuNwV6gdjgG4Q1Xn6YFeaA6SH1MMnvr5gdVgf7W3qjeERTYEp7aXX2cGAsrnTyI/h74kCmPzZFqLHYQ40FrkFY7B6KaU6OsrWCAfmxjTWGWNvjUysHfOHoLA5ztZ8Sx4O88CLC37SfMTsKxhyCXUNyhKnca5bGh3QaCxrGiNg5PqOfcc/XCbc9bfGEAtKiCE8YCJTIoOA8KwGg65i7fBQHeeOW2lT8ZK/CBRvJiS52d8VURweMpfcyxpogaW2DCTa2Mr06lmDIgBxpRw6SvtaP1NTNHhH2lucLkmKWvybH/7Kba61ad7It6lztYVMfn1vXxzQ6QZZZWmO9tS22ODhhi0IpkDygcK2BpAmUDjjq4iBrkgxJ3i/JkDxN4LxB0eaT+ACZcjXm0QBOrs8MSXPrKl43/GeQFCfZJrEGkqYqPCZI/u4io2FoEyuA1HegY8fYVyBZ2TuhBpL6/g2AAQkCSmP/DOg/yETh4HSUD6dBndyjfkSalHu72dQXS9UWGPNWLUy1qYt9sRTFZjSALjsdVxtE43AIRcfuttjoZo2taifsoAGFnSODcqOvC9aRo5QyYP6uAkiWTGmR/hUkzfcZlDuiPbEz1vMfIHko2R/7uJJPsjsOpihwMluFM3neONnCA+cGRuPRjHy82NNPIGkgZ2nc/B7KJ7XEk09TcK1HHC50iiAnGSRi93ireRDu5AfjAbmcP0LySdcYgSRntT54Nx5P3ouTllDsIHmatXBQKkqGNqyBJAPD8E0TGMdwf83m0E3Ph24BDaArugHrexFkPkDF0cEwXP8UVc9Go0o7k6C0mYBU+D8CkoZqSPKeTIakdAvR74aueKxAUrvnAxhW9UTlYoL+nI7QT2wlv69hRLYkLRWTm+Rm05y8c69PvEDyZkfzGm8krrQ1ZRGzyzrVvNpFSuKOqeIOJ+6Y5C+QNDdj3phIbjFOWVPD9c8gyeuSLzvJlzNeGZRLQtwFkFwLeJW/UiC5iM5NMyQXhLphQbCrQJK1PMBLILncW40VSjq6e+EnPxobgutiQ7YX7g/KA+YNBJZ8LMXrb/cNwflOntiTaYVV4X/DIt+6WORpjyUqHyxRhmGukz+mOzsRgKwwyJ5AaWuDoTYOGGZpj+G29hjlYIMFCu5z6YrHBMqKhBBUNaJxo1kiOUIKstPCUUHXH4PSmBkPQwaNEWlRAsrCKDV+pd/lvtoeT4PcUB7tB6RGEFxjUMV7IskJP1UrcEXpjBMU6HOj+bU0bs0hQ/BjNSBZ46ysayA5xtISX9M4OIIMwxBykn0s6iH577Vv+tR53d3jf+3N8i+17qRY10VXAuVX5CJnWzlhuaUj1tg7YZW7AmtVCuxxNVWm2O9OgCRIHnRzwBE62Y66OuMkQfKUmztOOrrgFEWMlz0VuB/ui+JUigibUFSXn4TyTlGo6ByNyq6x0PdIgOGdZNN+xmpIlneIr55uTRRAGtomyVGXT8Br+fsWkJq9lG3JGbaLE0CytJ2ioelCIO4eC02veFT0SZCiAewitR+mQUtQ5HZYmqEEToIGPuLsVrrY+7TAk5ZNsD0pDpOd7PDdG7Ww1sEZv0bHoiQjGQ+Sg3GJoLXDixyj0hFrlQ7Y4OmMNR4OWKqwwXIvR2wK4ZJfzlhJoFxF4Fwb6I4N9NwmukA3EVg3svP8LzjJrRFKgSRrezTBMkZVA8p98SZQ7iaHsTcrELvSfbArVYmTDbxwMccXl3K9UTGgIYw/tYduaTdo9vaD7upQaB+PhP7plyi9+gPukNN8NjIPz+lzLyyIwvP8CNzgWqzvRNesoT3oEEpwjMSj7tG41z1SnBEXL3/ePx5FHyahZFADlA1piNLPyIUPp0DjiyxovuIi8CYXqR+fJ2t2lTMLULmoI6pWdYduc29o9g9FxamR0P0yHCj5HvqqqeTalhEWucNHYbUqTIB8CZLm/ZD/bUhWaUUV+H3KlROCeFuJbC2pfq6kuqWWDr/QFw6jvGgyNNe/gvbAQOjXEOyXdoVhLkHyxxbQf5MjTpJbZvHU/XOC5MN3TV1ROCOYt35cLwjCzTbk1Mm5n8sPIUgGSVPi43kBONRYjX05XuIkBZZZ/jWQ5OQdrrSzKclLQLk11Ue0JcWHHhMo48g9EijXUTC1ns6RNXS+cFEBbp31spaFmqZWt/goROt9eZrVHbNClKLZoR6YF6rCykAPWZPk9lmc4DMtxA6TAuphmS8FzOEOWJb9Bk738wVmdgU2fAHMGoiHA/Lod4nGiUaRkmy2NpBrxHK1HTvMU9jSkcDr6YE5NG7MdnfCRAcCpKMlPrazxxBbVwyzcsGndk74wskeE2wtsNGLXGG4Gs8a+qOwdbiMC5UUXJc1D5aKObp0UzP2qkZRQONoOWoaBqM4zhuPg13wPNgDJeQuueQc12YtiwzBYwrY7yjdcJyC/D3uHlhH74UBOdbRtM2DNZrgPaG+FSaRMZhIjvKHetbSWnCIgyP6EUjz6TVB7o7HX5Pif/Gtf5f8MTEUJbWv9zZGkoucWZ8AYGGPlTb2WO5KA7+7i9Ry5eSdfQqnVyDJRc4ZkrzZ95STK0442OM8gfR2oArPEoKgbxwjZaL+q5DUtk8SQHJvOAFl60RoW8WLq5SCxdV7LRmQRnKf/zdIaqs7fTAkDcOyBJS6z1KhH07O8gMCZe+G+KVRBLYo6UL9ay1MtLPC1rBg3M7IxouUBrge6I0jSkvsUdaT16xT2GOVmy1WU9S7wdsFmwJokKIBh1sFracLdA1F4QzJ1bwmSdH6uiC6KOk1a2jw+VeQ3B6lEv0RkjWOMsZTplu3kbvYkeZDsPTFgUw1jqeocCTRBdea++F+x1DcHZyMwlkFwInBwNOxRIKJRIjJNOBvQPnpUSj8qiV+7RCFx3nBeNoiVCDJa2h8NEPySdcogeT9HlGSzcrdPQo/SETJRymSqFP5WRYqRmTKFGvl142g+7aJAJJdJBcz5wxb7aw20C7uBKzuAf2WPtAd+gzas1/B+GAkUP4DObVp5NiWosj4i5Q3/38NSSmCXvU7JPW4J5AsfTEJZVcI7gc/gmFt7xpIslvm7S7sIks+SRax0/61Lznv3rE1kLzRJhi3CJBcTOBCQZiAknWqZXBNgfPDTQOlyPn+nEDszQmogaSpJJ26Go5q0WZek+StH1yzlZzkWjpHGJIMSy5Pt5zOKW6+zEeG5HI63xiUXMCCIbmBzkWG5Mxgk16G5FJf0xQsbxdhSE4NsZLqPmfzCEpz2gG76Jza9QV04zrhXJdomR7ekuCOlQF2WO5DbtDdUrTE00FqvM6nsWK+UiGaQ05ugn19fOxQHx/Z2mGwjYtA8jN7Z3zp7CCQ3Ebv7df4YJQ1JufYkRxk73SgVwNUtY8VSFamhcKYE0kOMx5okSRHfRbBNDUQpXFqlEb6CCTLIgNEz4N8cc/LFTddnSSY360g9+3siOk2lhhtWw/f29mIzJD80coGE8hRjq1r9QokW1pbnq/7uqrO65tr/TevJ1pYXOxYl3uk0UViQ9EknTRcoX8hncSbuCuIqwJ7PbjAuUJgeaA601XWJekEPOemxBmC6QUXJ9zwUuBplD8MWfGyd0nbNQb67nECSBMkE0W8+b+iM10EBDq+MDSd6LkOiQJLcZIFBLvWpulXUXVSj3maVd8pRmTsFi/fr4wu3pJu0QTHhtD3J/f4XgNZgywbmiKFAjCwMdCvBQrfaYHTDeKxiC7SiW+8iWMOnngYHoOK9CQ8i4/A4QgP7PQj16i0xzK6uJfTRb9CxWuOPKXqRiBkILphBUFxOTnIpWpy3T7kIv3dCZ4EQRp0tvorayrsbAx0xeZggmKIu2grDWI7CYq7Y7ywJ5bAR2A03+fjrmgV3fcSBymK88SBBG/sT/bD/gYB2NPQD3vT/XGABtNjad64mxuGX1uG43GnCJQNSkfV2neA+6NpyJ9CMPqRoLAaT43zcX5ma1zpF4cn3WLxlP4eP3cLl+0d1zsGCRTvdSXQdg6WzFmePnxOLrL04zRSMioGN5C9kJrPM6UDBic7sYPkbFYuZK6f1BKG6QXQzmmL8vntULasE7T0Piq290Xl8S9Qfu17VD0dJeDWYTrBaDmKq+6Ro3z+/zskeXuHQSrtvApJ89YQqe9a7SS5wEAlOVxUnYS2fBa0t7+D4ehQGDf2Q/nSLqic1U4gWTW6Caroc9AMTaXPPEkCCd4/yltl7nSPws8UuN0mOLKTvNg2VHS+dag4yWO5fjjcSI2D2V4S7Bxq5IdDOUHYlx0gswTmknR8fHlLyJYkAmWiNzYlmApPbCBArmc3SVoTxXsgFVge4iZHrsCzMszDpEgXrIjlZstOmB5A57K3K1apCY5qT4KcGlOD3AiMDnRe22BtsAVWR7yJPU3tsXtmGp6f/BA49x2wshcej8jBCYI/Z9kupUB4iTdPqfpgqbsPFrt5y57DBTQmsJOcr7TGXA9LAiS3fquPMc718YlzPXxoZ4lBFjYYZmGLz+0cMJrGmOkutnSNWeGXzFDTGDCsEfBdK2B0Lp58SMF1RrCpYXJ2EAxNIwiSMahqTm6SAZ5LQXJKIMoTAvEszBv3KBi4pnLFJZUCFzzccELljl0KFVa7UlBga4vxFqbM1bFOThjn5CTdPsaTe5xi64Rv3qqL0daO5Had0NvRBe3sHRBbt97rqjqvb6ZbMEVLBX+ri0F/rYep1i6YRSfwdFuKEJ3ssZ5OFu4zudvdFfsVbgLJg5Ll6izNSk8SQM/SSXjW1Q0XKWq77umGR+E+0KRFScTHkNTRwKzrHi8yg5IhKS2tOsa9Akldh+Tfp1wJlP8KkhV04fJ6pK6nqV+khosH9E2Bpl8a8EljaD5LQ/mwVOC9dLxok4QdFG3/+LdamFHXEvvCo/E0LgPP45LxKCoYV73J5XlakXOsS7IlUDphGcHSDEmGIQPSDEmzGJ5mSLLLZEhy+TkWA3JrqBLbw8kt0qC1PUJZA0mz9sYxEH0ElAxJdo8MSoHln0CSZYbk+WSVQPJZtxg8Ivd3dyIN3icGQKMfK5AsxBI81M4GTn2L0u9a4+eCIDziqjCdQ6RQAIPycZ94PO4VjYfvRAokWc/IHWmHkWMc2hC6TzNMeyG/yJEOGJpvGtVAUjp9TM4HCCCG+R3ERVau6kZgIRe5+31oT3yJiutjgN9GCyT1mEHva4VMt/5Pg2SRVOwhJ2k8AU3pDFTeGg3d4cHQreuLUvq9NDPbSnISZ/KaIVn6SaJMR/P+UYYkZ7ZKtR0CpBmSF7jAeatgnMzzx5HGPjiQ5Yn9mSrsz6C/a5aa7vtLAXyGJCftsBiQnMRjAqT3K4BcH+uBdTFcoclDtDrSVJqOIbks2FXEeyK5eABDclE4Xc+BNpgR6Ig1dE6u9vHEci8PLPfzwuKEAMwMdyYXWBc74pzw7MNMYNXHMNwYidLzg1HxU1PcHhSOfW3oZ6U6YmGQHeZ6OWOBhycWKbwFkItcvQSSC2lMWEDXy0IVgdLTWjSdYPmDqxUGuVj8AyS/dXLEVCdr6RzypGks0DcbGFUATOL+rPkoGpIEXVYotJkh0DYONYGxFTnN/HjTsXkiqtLDoEkKFkje8XLBJYUjzro54ZSLgwTymygYXmJHLtLSUiA5imD5vYMDxtjbS7ePHy3tBJKj/85Zt3b40Noe3azt0PjNt66rX7vI1zfzbdboMW0jar91s4uTGwY7OkubmMkOVljq6CiF0HmtbhPBkGu77lK6SKbYIaUCx5VKcpNuOEOQPOemwCU3F1z1cMGvASqUJYQA2XEyHWroSk6SAUkydE8SSTHyrvHSJFXUKV5UU2TArOrtIdwSy9QWK0aSdfj76jrH1EzncjHzqndpICcYGvo1gqF/Y+j/D3tvHR/lua39d5/uChLiPpPxTDLJxN0DwV2Ku0OhghVaCi0V2lIKbanRFnd3d4fg7u4J8bHMTK7fWvfMpLBP9znve/r+zt5/5OFzfZ5nkpCRPPf9Xdctaw0jp9OvCSq6NcXhxmn4XeqBH199CVv8fPA4SomylEgUZkfhcrwMe7QEN4VclBFbQa54sdKbABiAeUp/LFAHiiEpnrtZGioRWh5OsNRJhbNcG0aOkSDJOVpZW0NDyI3KsSNcIZwkO0gGJMOSnSSDkh0knxmSDMi9aVoBSwbk85Dcm6rCIXKU+fT94+lhOJoRhkNZjg6Vh15356nEJvWLb+hxg7cdvENOcEZr4MhY6vlnorJiFnX/K2EtpevHM3CDQLarfxgeEiAfkJu81ScadwYl4MZbSbg7Ml2UfioaloayYamwv5cH2wcEyQ8bwPpRQ0dR6s+biKQBpinNYZjaAqYZbWH+5Q1Y53SFaWF3GJb2RMXafqjcMhSmfaNQcWoijOzIiqbCbv2RIDSXILkV5XZesGOgx44lMzbO0foCJK1CfxmSzq0e/wyS/HxmZ83JMsKpCbdgtx2AsfxHAcmK/aNgXjUIZQu6wzizE8zTWjkh2RDm9x1OsnxUtlj5y8OtDElHBqNYsR+VV7eKxTvkJE+20eFoMy0ONVbjIMHxQEM1DjcJE9rfJBx7GoZie30Ntub8UTJrc7pDm+g+2OBMcM5VQDjnL2t1XIjzLMcKdpORQVgSEYhlkXRvRsvxa5wX5qcFYW1MEDlHfzHvOD9eigWcnSeSoKaoi62pEmx7Lwf31g0H7kx3FO1e1A/mCek41zcFu1tEY02aA8LzQoMIgjIs4NRxcgXmU6AsRGBaIA3EAgosF8oDqzVL7oNvpG4YG1wXI7zd8J6bJz6o6yUWx0z298V3Pq9TEFoPT9ulAW83A6Z2Fitn7dPa4OFYCoobx8BMkDQ0ixHF2qvaJwuhLak1/Z8mFDBnx6MwVodrajnyZcHYR/3UFlkgVkulmO3th5/d/TCd4Mx5lqcRMFnsIhmSk9098HGt2vgqJARD6HFfSQga+fjnh770HzWArDlePBJfq3OlId0YA199nW4cT/zoT5GgpycW0o2zgm60teQmNxMEt5GTZEjy1hBOds6QPCWR4WyIDBekwWI12W2NBMWJ4bA3SIC5ewKsvZJh4+FWdpO9nXsa+6QJSFr6ZDjUK13MUT6ftk7sr+zqFFf7EHJAkgHJYhfJc5JmUfkjF8ZB5BrfaQmMbA3DwEYo756LA9RpTPd4Gd95vYINagmuppADzeCl5KE4o/bGPmktrOdkCiFSbKIIebU0hBo4vXeVtwDkInKQDEkBSk2wkHCQESH/FJLbCLoMynW6oGo36Rpu3cJzkbxYh87sKtlBupykC5A8D8n6R0geSdfiYKZWdKYMSh6u250jxYEGwTjbToMz/SNwbnwynq3oDtz4jEiwmLr/pXReBFjp+toPMP7WG/d7xwhQ3ukXK3KyXh+eKCDJhYRNoxvAPCIblpE5sL6fC8v453PbNkPl1y3FMKuJgMGLdSwzOzpc5OKeMC3vDeP6ASKdm+XAGBjPfAzL7a+B0umosv1EQJpHoNou8q2aRKadfx9IlgsneQs2634Yyn4Qw60MScvqwdVO0gVJfNwIlg9yCJQ5MIzJFat/eeHOzT7xuCpytzrEyRtY5zvG4Awnl28VIYKaI00Zjlo6hwsdaKrDvsZON5njKLy8Pl3uAGSaEhtTlAKS6xJlL0DyDymwKlYmQMliQPIWpLnkDn9P8MFCdT0s0nhhXpxjgc6voeQsCU5nyI3h8yHAxdkUJawUkLy2pSeKRsXics9g7GiuwMo0KRZGU1sI98cspR9mUzufJZFgdiC5VGozrIVie0WQgCRrfoi/0GyFbzUkR/rUw9h6Xhjv5l0NyRl+tQUkH3MCkjcbwfZpa9i+aiUKd996N64akuVNomBsHgtLK/pa63igJak574lMFFtHeP/kVZUMx+g17KXXt4kc5fLAQPxOYPyhrreA5HcEx+/8g/AN9WcMyaleBHA/f3xa1w3jPTwwoG49dPb0ORHz0t9qAFlz/PkR7+5+pqOXJyYESUS6uhmv18JsL3JTvsFYGuAoTLpOEiyy5zMoOYNFPgHltFSOCyFyXCJwXiSI3lQGoihaA3t2LIyd42HtkYIqco92hmOvVCGHi0xxlLUicYkrrgVpINdZQVDl+UoWD8M6lOqUY8uHmcBo6Z0sFgQxZCsHUufetz4MfXPJUVLnPagZ7rVNwSqVDjNqeWDTKy/hptYXhkyV0A1yZKeSwrCRouDVwYFYGUTOMdgb82VeQvO4wcsZiuweQ7A8VCq0jAIAzk6ymkC5VivFGgIoL4rgRAKccYfF1y5tICe5meC4lYdaSduoI9tOUf8O6tT4zI93JiixJ1mDXYkqulZgN7tLAiaf96YrsS9DhSMZGoJkKMFSI3SYHh/IYjeiwX4etmuowr5GchxrrcENiv4tE9oBMwYDJ8kZFMwDqhbAZPyNULAQKPoZTxf0wgkC6p0hCQ4NT8DdtxLJEaWJTt/+fiNYx+ahcnwuzB/mwvRxA5g+ayTKiJmntYT5uzYw/tAWpplvwDy7iwOQK/vCsHYgKra+Ceu+kbDmj4Ph0kSYHn4Fe8UP5NBmE4RWEiDPwOgqlOxMWV4NSWcicwfU7H8Zkq40dwZnQnQXJKtsdiG7E8wOgHJ6uuvkePfAWDYNtpufwnxgLOxrhsG4qBcsv3URq3irPidIfkQd+ge5ApQVo7PEPlJ2krc4oUAfcpQUyF3pkoAzbXUiDeD5DnpxPkuPT7WMwPFmYSLV4OFGWqGDDcNwgEcGGmixM5fdpAabyUluS3Voa4oKW5KV2JykwMYEGUmBDfFyrKdgax0FW2spCFtH99f6WPp6HAE2VkWPeVGPSiziWRztj6WxflgRURdLwl7BshYB2DohDXcvf4yqit+BkgXAHgqqPumB8qFNcJXa2LFWkdgYr8Eyus8XKgOwSCnFHAqCuULHrBBf/C71wVxuK3JvoYUhDje5mALnxUFyoQXUT/wU4IX3Kege4+WBse4+GOfhiw99/TAp2AczgtywVO6GR03iYOtFQdmIRsB7zUlNUT4wFfZm1M4bxcFAoDQxMJvEClU1jAUaJAKcmi4pBo8jwnGOHO4e6oPWBgdhrsRfrFr/1t+PYOiLqR4+Ihfrd6Rpno6h1q98fDDevS7GBPpgKL2nN4L9EVe3Ts08ZM3xzw/VSy/d6uDhjhH1PAQkl5E7nOMdKCC52C8QKwICsDowAJsD/cS+I85gcZx+xgXJK/IQAmUgbigCUBCphCVdj9L2UTB3TRSAdEGSISfmIwmCLki6QMkFk0Xh5F6OnzH3zHAqzakUB2gJjpU8F9nX6UbJRdoHN0HVm81g6NMQ5ykiXxPyCia/9DIWS1S4Hx8BU04U0DQaaEVQyInEVrkX1gUFYi1FnmukfgKSc6UeBEdq8AopdQoh1EHIhFyQZK0maDIgHZIIF7kxwqH/CpJbeG4yJuQ/QZLhyJDcnaQWkGTtSlSK8540RTUkXYD8R0gKNQnFoWZqHGwmx9FWalzrnYCikY1R+HNX4PwUVNnni2FXAUkDuYYbBMqPm+DmwFjcGBAjAPlwBGfVSRGrWRmSLNsEHmrNg/WzxiJ9H5cR4zqbIo/pT47VrJXkIq1Le8O8qh9M6wfDuH047AdGw37iA5ivTkLlk6lEw5/pNcwhDK0iGJ11AvLfC5ImUUzrGqyWXagomQrrjU9gOTgOVWuHi9Wtlb93FQ7a/llTYGJDctk5MI7NRAln3RmaJOYkbw9Mxs1+qQKSlylAZDByQnlOTydS1NH1ubbROE0AOtUiCsfIQR4hB8mQ3E/3LENyR45jNfMmcpNcT9IBSvULoNxMAdQmukcYkmtjpAKSDMiN8fT1BLWAG4OSAbkxI0KsjF0U5U3/xw+3e2cCy8YAj/ieWIKyx9/i9qahuPh5czyk9nWlTRR21ZdgRUw9+r0KMXKySBWIJWoZ5islmKcIxgJ1MOargshVUl8R4ilguYBAw5BcIqHAUqLE8hC12Lz/c6D3C5B839MPE8jBfUyB6Tc+r2GO/99xLSMURW3jUDQgFcbhuah8t4EoqOyCZHmDSJTVjxAqzdXBmBmOyowoVGXEwZwYjSeROgFJLs6wws8XM309MM2rHqbTNTvHbwiMnIv1G4Ll1+Rmv6Q+brKnJz4L8MUw99ro5VUXDeu8dmXVF190riFBzfFPD8/aL19Lpxvl3UCKwv5eC3Pohp7lKxGaR5DkOcplBEquP8llZrggMycg5jlJhuQ1pRzXFRLckgfgCYHDkBiKwhY6UTLL1jMdVb05b2u6KG3lgiBDkeHIw6UumRiW/amx9EsRADT3Tq8WA5KHbAUgSbylpLJPNkx9clDZrxHKuufifFYo1kpexezaL+GGrBbKE2UwNcuAoV1TgnY73GuYh0PhaqzyrIt1wV5YLfHCCpkvliuDhHNcpA3BPHr9czmnZaic3GgIidyjmpyiVo6NYQpsInBuoJ/drJMLbdTT40iCZ5QEa/TBWBUtEdqklzrhKBew3EzfZ1AyHF16HpIMRxa7SAHKDHKeWQTVXLquT24xW4X8dBUuJDl0OT0MZwmax8iFnGkehXweuquvxNVGkSjolIkHb6bh8bT2wJ0fiQ7z8RSzUIz5MFt+Bc5+ivIvW6NkGLl4ckBVw7NQPCqd4JomVrSKRTsTcmD5uD5BkqDwVRNYCJLmb8mp/9SOXGQHmGZ1FvsiLcsJkOsGwbBpCAy73oL10BjYTo2H6ebHsBYTJCtnoqpqCYFqK8HoJkwEJhYvzRFDotX7Fh1Qe37j/1+TIynBP0LS9YRVzuFdo3jOCoLkeVgMG1Fa+Cks1z6AZS+9j9VvwrCQgoCZXWH+ugWsnzRG1YcNUDkuG2XvJqP4LV7slCBS+LkgeYPu06vdk3CtW4IQ1+nk4Veu3XmpXTQutNHjfOsYcpV6HG+qJzcZjv31NdhFLpJTu23N5LlICqQIkELOtIUidWGSkqQWcqU73BRHPx9PcE3QCPH15ngtjmkihZaEB+D33ABsm0Yu+BqvNP4ZqPie7oEPYZ3dDufficPhzjpsba7DqkQ1lqtUWKVUiSBwqcwHi+S+WEJwnEdB8BxyabN5vlEWgN9CHOnleMHOAnKXDMolkmCspP5gtTwUK6QKzPeWYKKvL8Z6+mC0hx/e8wrAewF+eJ/a3WTvv+NX75dxleBe1CQGpo6pqOqRA/TME1m7qppSH5AXj3IKakuzdCjNCEdZqhamJC0qEyKA1DjY42NREK7DGRl9FuQc5/l4Ybov52ElCNLjyRTYT/Xj1aw++MbNsR/yCzd3fOxeTyQ56OVVG+2l3oip98q1GgrUHP/tke1R58Jgj3qYRTfTQp/AakjO9Q3AQrrRl/j5ifqTLkgKNxkoEZC8rlLgJgGFIfmIGldJjAKPyeGUtYsR+VXtvTJegCQPufLwqnCOBEZefFOtgemONHOuOUunBCB7p1UvBOLfY+uXC3PfXBS+kYLjSRT1eryE+fVewt5IP5iog0HjWFhb5aCoeX3czWuAE9FRYgHSdmrw2ykiXkuNfCk1WIbkinAFluqoYetkWBAhxwqNDCuVBEtlsIDkpnAltkRQZ0Q/t5HnHvXUaZFr3hQlF5BkQDIoV3N0H+eA4/Y4pZDDTUqrh1xZ/JhdJQPSIcdQ694UjdCO9JB/CsmL9HNnCaSXsnU42SQCR8mJHCZXyR3vzWYxuNZYjyu9onCFnOCl+Z1x9/T7eILf8RAziRKLgCcEyv1fAl90gnlQCqxDHYAsfDdFDCFa3m8AwzgC6IRsVH6ah8ovGxMkmgtIcvq5Si4fNa87bEt6w756ECo3DoVl23CxAb/q6DjqgCfCcvsT2EunAdZf/60haaBnNaCcXts5mMrXo+jJxzBdGQfjrpGwrBiM8vk9Yfy5M4xfNaOgoaEYajXz3tS3yLEP59y2SSLHLaemu9U/Dbf6pOMm3ae36P682TNZ1OnkxTwMyPOtI3GuVQQpGieaR4iKLQfob7cvVy0gKUCZE4rt2Zo/haRDGqFNdO9soSBre3KY0DaCB0NyKwWo25J0ApAH5VpsS9fh2sSOwIXp9GbnAvc/wdOjg3HthxxcGBeJXV3pns3xwu/R9fCr0hMLKfhlSK7WUOAY4i0guZRcJCcK4H2QDEkhha/YG8laKPOrhuQKqQyrZBqCpRILfKT4iPoNFyTHePpjjL8vxgV74pugOpgbWAt30nSoaJUEW7csAmQu0C0X1pa8zSMd1kaJqMjVoyybnGSmDuVpYQKS1sRIVCVGwRKtx+NQrSi4sMbLE7+7u2Gqlxs+9/bAp+QkvwwOwrSAIDHsypBksZOc6FYXI8lB9vGpi8Yer16ZO3HM0BoC1Bz/7aF4/W+3Ovu4nfnFxx8/enngZx8POtfDD96e+IVu7N/JRc4hN7mMbsjNwZwAXYmjASE4ExSCKzI5bpKb5ATEt8PkuBetQAk1fFOLKNg7JKKqSyrQO0fIsSeSYNctFbbuDNA0gCBopw7GRpF4Zb8kGPsnwjgwF4YB5GZ6Z9HPZQAUjYM6HBNF7NyxmwY2R0n3dnja8A2cjkjHHD8f/Oz5Es4p/wZ7Xihs1LCqchJgpmi0kM7nKLreoZJiRbAflgQFYFFQIJZKJQRInmvkBAFSkSRgeZif0Fp1ENZpgrE+VPKCNvIinXCCoF4utCXScb0tSoEdMarnJKvWzli5KKjM2skrW0l7E8g1Eiz3UGe3nyB5gFe0JsiF9pNjOJyudkqJQ2kKIb4+lqXC8RwNjmernVLhVP1QnG0YjvPU6V5ooqNzOO7kZcLcrQPM1JHbJlPnc3AIUPIFSvErQWEReaeFKC39BcXbR+DOpCYoGdkARe9SBzWpKcrG0ef+YVNyk81g/LyRqBVZ/D3pp5Yo/51+59zuwOLBQlXLB4mtEqatw2DePxLWk+NguDoRJcXjYLJ+QoCcBat1PSotR+n6oUgGx8OcFqc4LZ2p6g+wVTqHYf8qJMucMsGR6LzKBKFK53OW0PeKRVo6CGDCdhJVz35Fxa1RsJ54E7b1A+n99YaVHLNI3s5BwqQ8sbLVNDYXxe+kij2lT4el4vHQNLF45/6gdNzrn4q7/VJwp28ybnWPw/WOMbj1RgzuvBErcufeaE/BS3tykm0jcLwlgawpJ4kgERw5DeHhNAp40shdJuuwLykcu5IcENxEgdHGZLrnUkOwK12KfclBQlujKOCLJ8Cmx5K71GJNpKOCzLTGL2HNxxrc2tETKPwReDaH7oHJqPx+MJ70a4ZTqTocig4TyS8W0r3/a3gIfqPreRQAOoZWJQQ/gmMIBZ+SICyWBGKJNEgkQ1+uCBHzkEJyfyxSBGCJMhArFEFYTWfWKmo/c4M9RMq38e5eeNMvGIO8/PGOl7dIfL7CrRYO6Xxwp6kaZV1jUT6MAmG6B6v658DcJhGVFODaGyWJ4snG9EiYkiNhT4kmBxkDW5IelmQ9imPCcFkTgp1BvlhMfdVPnHLOm+tC+uJ7z2B85xGEL7188BnB8zOC53SC/Ad1amG8dxD6egagsaf0hOS1uldqev+a4//4aPLyS7e+euV1fE831Uw/LwcofehMAJpJ+s3Hh6JDH6zxCcBOAuQRfynOEjCvyhW4oZDhBrmuW1qZgGRxjgrG5npY28WLnKtVPbOEXOWxuOQVV/MQi3t6pwtIClAOIKdJICzrm4nyflnkGgmufaiTp6icIcnDg5bBqSjplYd7rRtSxJyIZa/44jcCO68SNeSpYGugAZomAnkpKM+Owl2KrPMjZNhMjXp5EGcVChSQ5Mj3HyG5ItxfiIG4QSsVUGTxNYsBycOs26OVAowuQPLj/xNIuvRnkNyXqKiGJM9Fso5mqqt1LEuDE7mhONUgrBqSJ3LUON1Ai3ONdLjYVI9LzSLpHIGnLRvhcfM8FPbRoeSDRDyd2xClJwfiqX0GwWM+gWQZQYtc5VNyF+vGouAtiuQntUPFB/VFcWEGpHVic5gmN3bUivypFcpmtoFhdkdY5vUAFhJElhB4Vw1F1YbhqNzxthhqrTozHuYbk1BW+kE1JO32jbDbjgtIcg2QfwdIljohyatbbZzt3JIPW8EvKLsxAuZjg2FdN4DeY09R2cQyo41YuCQWMY3LEkPSLMOYBigdmYNC+uwYknf6O+DIkLzdJ+kFSN7uEIOb7aJwrW0kLrWNEttCGJKHmoVhf6MwHKgfhsM5kThGoDyaEUFBkV5AckdCqHCHW9O02J4Zil0UJO3JlAlAHkyT4kCqWoxmbIwLw7pojcgEdbZNGooXtwduTqI3+wvw6Fs8Jqd/9MvmONw7EbtSKEiL4FqoUixW+JEzpMBYzYWSgzFLGYTZ1E7mK6XkIh1aEiIRgBQiaHJpLXaOfwbJVXTNkFyuoKA6yB1TPT0xgZzk8AAphvoGYbR/AKbLgrE5wAfnkhUo7UKu8c36wAfNHRrUQEDS0ihGANKQFSUgWZkWjSoCpD2ZHGS8DqbECBRFa8UeZxckf/RwF5D8isDIgJzm5i+GW0WWHV8PTHKvjS8p2B9Z2xO96vlCX7Pdo+b4vz0ae7idG1GvHn6WSPCbnzdm+ngSKL3wE7lJdpQznA5zjo83lgT4YwOnqyM4nlArRLaLa/Jg3CdHWaBToYQ6fc6zaGtKkGyVhKqOFCl2TEdZ+0SUtktA2RsJqOiUJBIK8DYQTllnH8CFkzNEcoCKgTkoH5BN7jNJqGRwAooHsZvMJGfaAOUEyJN6Dab7/wem+f0N92WBQANe/JOD0u7pQFtyrXnJuJccjpM6ir6p8a4J9sEyqR9WUKPnyHgpNfgVFDHz3ONqguJqLUXA4dTIdYEvAPJ5bdJJsTkipBqQ7CRdbtKhEKHt0SF/ADJOIcC4mxfkxP+hFyBJYNxPkOTzQfrs2EUyJBmM+dmhQidyw8g1anEmL1ycHQqlx2G42CgCl5vocYUgyXrYPk6UzLrTLgbP+mWjaFw8Kua1Aa58SESYhWL7boLJcQISObyKvXi6bQROj0+AfTx9dhMygU87A590Ar5sBnxbH7afsmGemQPTLILF3A6wLhoA68rhsG7gslKjYdw/Cob80ai8OAbm2+NRVjEZFZXTUWldSZA6TLoDm93hIq3PFVb+I3mARRRFrnRuz/irkCx3yuJMKsALdVgWZ2L1cvpXRv8M5CltdsKlcQeqHnwPw9kxsOwdBtvKvqia240Y094xF/tFE5gm1odlbBZMY7IdGt1AZCd6NjwLjwal4F5fcpP9UvFwQDpu90rG9W7xuNI5RuhaJwck77TS4yEFj4/pb/gwNwJ3CYq303S4QAA8mUmgzNZif7YO2wmKO9LDsJOc5e4UJQ6kSIV4WH5rvJYcZRRWRCqwIqIODjTywfrmtbGwny/2bXoLhbd/pg92NnB3BrCJApcvOqK4VxrO8dxnAoFN64HfonxFJp4fNd74SeGL33nrhoS+F+wUtQte1coltNg9clthLaF2tlQeVL0vkgH5opMMFloc4odZgR741N8Do/y9MNzfD2/6+og9i+sCAnBDLiH46YB+acA4guOnbWD7qAXs/XJhaRoHU26kgGMFOV5LKrlIcsrsIq0JephjdSjSq3EnXIGT9Jxb/X0wn5wiQ5LLX03losqevvjKzVM85oLKE93r4H16HUPd66G/RIrMV+tcmdi172c1vX7N8X91pJGTZEh+xaD0chfiodcfPN3xvVM/ebtjlpcn5pFWEUi5BuURakRnKTp0QfKxVo7CeBnKs8JhyouCuVkcKtulwNguGcVt4oT+O0iah+bBMCgXth7xsFJEXv5mMkxvUwfeIwvlrVIIfHKs96qNGcGvYhN1LmhC0Wi7pjD3q0+/o6GY+C+mxnUhnDcZe2FzkKeA5Epq2KsJ7Nzgl8ulYt5xtVomIMlVPVyQ/EcnWa1wiZALkAxM1h+gdEByW5RUgNIFSQYkix0kywVKvt6XqBJwdAHyUIqanITqP0HyeI4WJ8lJshiUDoWJoVaG5KXG5FKa6IQYkJyR51abKNzuGIeno6Nx/7scFOzoTUD4nmBxFCVV+wUkiXBAyRJULesL42iK7CflouqD1sD4NrB/1gjWqVkwf58O4890nt0ctkVdYFs8UEDStnEkKrePgWHfSFQcGwXLhdECkkbzFBis38JqW0WoOkZ6IHKp/rtA0vWPS3dZbUX0w1tReWcaSk68i7JtA2Be2lPMvZb/0BqGbxyO+nlIVozMQPm7FHy8nYEnQ9Jwv38i7vZJFqB80D9NpKgTuVy7ODLx3OgSJ9zk/bYxeNIqBk/p7/W4gR4PyD3eSY/AxSytgOTBTA32ZGjFKlaG5B6C6N40NbnKYOxNDBKQ3JGkw46MWHKV8TjaJIxcaQhsM9o7oGhYSR/wetzeNxS3F3bCxQlZONtdh5NZgdgd5YlNkR5YGR3wnyD5GwWP84L9BSAXUQDJc5AMSoYkO8dl1MZZDEjWIoVDiwmOS1RBIu0dL3JbQ1pL7m6pPABzJd74LMATI/08MczPF29xpp1ACXaqVHgWE4mqBnFA31RgZEMxvF8xNo/6gzRU5OlRQX1HeYpD1nTHalbhIuMiBCQLI5S4GRqCfII7Q3KBt2O41QVJXtHK2z++on7qEw83AcmJEn9R4aP5yy/fiK/ZE1lz/E8O3Wsv3+gcFHS4/+u1MM3HHd95uYvyMt/Szcfi6+l+Dn0b4IGfgj0xP8QXGwk8h5USXFWr8FSpQYEqFKV6hajtxnsm0ZDL4KTB1iYNhtaJKGubSIBMQXlXahA902HqQ51v/yxYyDmy+Bp9s8Wq2EdDovF0GDWmd3KB4eRiWufhSkw4fqrzEpZI6uCRzl8s0MEQguTwRuQ6m8LavhEeZMbgUnQo9qv8sSXYSwBylTSAwMgRbwhWyUMELNeppFivDhHzj2IOUhuADWGB2MiA5OFVAqPIyRourRaXytpO729bpLxaO6Lk2BmtqNZ2guROcpK74xiG/xmKe+nr++jr+xNUQi8AknQ4VYWj6QRI6jSPZ4X+Iecw65lcrdC5BmE4T7C80FDnACUB8nLTCFxoqsFdguPNdtG40TYKhb0zYORhrcntgM1jgII5hJBtuI29uIN9BKoj1MHuQOHCfrj3WToqvqagZFqaSGCO77rC9m0PVH7XA7ZfO8C2sCPMKzrCtKEbKnYMQckeci+H3kXR6bEw3yAn9vBDVFhnody6Dkb7MULfPVSJYU/HEKsjaYDdmVTAURHEggrH1g2rQ38Vkka7Q5Wc+k7IImQUqerM9GwGOnMagULAfIE+j+XAhSkw7R4F46r+MM3vKhYplU9vAcOXTWCmYKFyggOSXMDbPCJTzKMVDk7G435JeNgnAfd7JeFez0Tc6R6PovYJKGwbhyfk6B+/EY/7/LfoEI2rTl1so8flluz6dbjSMALXcsNxlaB4NUGNS7EKbE0Lwrb0YLGAa0eaEtuTorEtMQr7EyNwKFWL7Rnu2Nme7q9vWsB69Xt6DyvoDS8E7o8GVuThwZSOeDahPQp6ZeFisgJHlF7I1wSKVdacdGBORCB+CyUgUrtYRABbSC5vMbm9n5QB+EUdhDlyf+EUF5MrXKbggPJFLSb3KOSE5FISL3Jb4wQlX/O2kIlSL7znWxvjfevi60Af7A+S4mmoFkggF0nvuaJvNEpHpaH4w1w8GV0fdgqmTVmRYhuZhfoPa6oeSIsGkqNhiQmDgdp0eQw5yVj6zHRqHCRHuj7IF/MIlN97/1HpY6qfF7729XQMs1KgPz7IHwMD/NCeAoDourVr9kTWHP/zI/Oll26NlUjFKjGG5PfeXgKQ0z3cxfkbgudUitoYkj8GeWC206EdkAXiikqJJwq1AGUhgcQUrxU3uzWXosAWKQKSxjZJqGifDGMXAmS3dBh6ZVRDkmXqlwkjp7AjePKq2ILh8SgZQf/3zQxUdIzHxSgVNrm9ioWBr2N/cig5yESgM3X+b+YBQxvA0ikHhXnJBEglTmgk2EUukiG5jiJlhuQyWYCIiNeQ412rUmCDRiZUvTjHCUlXFh2Rj1X3Bwy3RvDjkOprFl9v18v+FJIOQL4ISR5edQHyQKLaAcpEhROOGnE+Qu7hWEboi4B0QvJEjgYnMlU4la0hUIYKUDIk2UnyUOu1FlGiduS11hG480Yc7nVKEC6mqF8aKie1RNEvnfHs0AcwW1biEcHxGU6Sn9pHbmobcPM3YGE3AUjz9HSxiZ4haf+uJ7mVXgKSlfNJqzrDvLG7gGTZvndQcmw0yi98CPvdD4DCT2Cqmkvw20RgOkmAvA+u4Gh31Yy0/+shWS4y/1TQqyqg930alXfnwXh8Ekq3voWyZb1hmNsZxh/aoGQqOZwvyEV+2rAakpWjsmF4Ow0lQ1LxmPPeEiAdSvlTSD7qEIe79PnzfOSF1jqnIgUkrzaPwPUmUbiZF4mb2aSUMFxL1GBXtoxAKBGQ3E2B0o7kGGyk4HC7XiWG6fNbyFA1ozfwZDFQsVIkBSi59hXuL0pG4S+xePxNF1wbloszDen+UtfDQZk7TlKb3OhMXzdbF4BfNf5YEOhVDcilgQGYSYEiazavWJUFCLf4Z5BcxHORzvnIF+ckHeJ2NjfIDx8Ge2Ccf118KvXBTK0SZ8IiqF9IAJIigQZ0PSAOBvpMS+izffAu9QEt41GR7tgLaU+PFqpKoT4kTgdDpBplkSqURoVRcKzGWXpd2wmGK6lPmuPrhRk+ntWVPr70qicgyQt2viA4jqK+rDfBMpr6t4WTJvWs6elrjv/xEevpeaJh7boYGeiJSX4+Yr/RV96+mOrJBUp9CJBemOzpji/83TElyAvfBXtjFml9sB+OyOW4rCAHI9PiEUWhZRFqmON1sKbHiDRSaJEo0ksZ2sXD0DkR5d2SUN4rGQbnVhAW753krR7om06gJJj2T4exX30UNU/BCQLWokB3zPZ6Hc80WtgpugZBF92zgR6Zoljz41xyTomROEzA203R7OYQP6wPCRALClbKKCqWBYlGvlZFcFTJsVktdSoIW6hz2KSlaDssqLqaB5fz2aaTYUekQmh7hFw8Zm0ND8FWnURoW4QU2yMp6idY8nlnFHVuMXJyjOQc4x3O0eUeGYwHCYyHkwiIdH2AvnYwgaL9ZDWOpmjo6yocS1WLTDsnqIM8SXBkncrWCjCezqHHGSqcztLgXH0tzhMkLxIkLxMkrzaNxPXmUbjTJhY3W0aJZNu3ulHH3T4TRd0aA2+1BcY2A2Y2ReVacpX23wkpK8hXHSIdgxXHiTKHcW1NX9yY2wWXfuyIG991wdPvCBy/DEbVnGHAoiHAykGo3NQPpj0DUHF0KMrOvo2KG+/B+mAiTMWfotR2gFB0m35fgUg/Z64uquxcrFMNyTIhi3Oxjivh+V/eAuJyrc70d67f79qCYqbn4B0hsD4k0OyF7dz3sOx8D6bVg2CbT655dmeYZrRB+ddNxQpfy8d5ju0fYzJgeTdTDP+XDE5BQf8EPOmbKMqNPab79WH3RDzumoBH7WLxsG0M7r0RK1wkBykicGkZjpvNSU20uNlYh5vk+m80jsKFZnqcbByOg41Csbc+BXjJMuQnSilgiqSAKQp7kijgS/DHno6R2P9RUzy9ORf20g30RpYQIH8BDg6mYKY+rB9ROxiahYIGSbgco8XROIWYG+fsPKvovlys8hP7fTeSA1sTRO3Bz0+I5yPnUnvhxTs/adhJ+hIk/cTCHB46ZegtDfEXZx6N4a+xGI6s5UpHG1urCBRazjldyTnOIAf5o389sZAnP0yFMj25SAqcqxrTuWsMCidmwUBBSNnERng0NAPIiRL7IEXbTqJ+g5yzNVYLc5RaqCJai2fkJK9qVaIq0XKPephDAfwvvt74lpOX05n1mUctUUPyY083TPQPQM/atdHCxxuxft4nanr5muMvHcqXX77WwtPr1Nu+dHN5e+ITijJ5GTVDchrD0gnJT73r4Etyk9MJpr/4USMgd7knIECsdr0ZrMIDalAl4UqY4sLFyjQByZZJIv+iqUMiysjh8Mq20h6JqOA9k33TXoTkwGxUUodTQpH5s66puMxZRtxfwVyf2tgSoUBRaJijITXhSgF6lDbTkYMMxzVyavmqIOyV+2E7vYZNUt9qSK6SS8QcJC/UWaMMqYbkFk2IAKRQeLCA3kaNQ5uo02AYMhxdkOTH1cAkOD4PyH+EJAPyv4Ik688geTTFCcoMtQClC5YMSDHUmk0OMpccJA+1OuUApU6A8kYLPR7Q53ypvV7ocdc8PH4jF886pgLv1EfFxzF4Orc+ru7ojuLiXwhT+wlZ+eS+DhM4jgJlC4DzX8OwYRSezh6Ikp8HwvTrUAckFwwC1gyFfetAWPYNgjF/GAwXRghImu+OR9nTiSizHyRA3iOnViggZbL9m0LSch+2e9tRkT8FZZveQcWK/gKS1jldYP6h7QuQ5Ew7ptHpYm7cMDwVFcMyUCxAmYxHPcmx87xjx2gCYzTut44SYgfJkOQtILxw5yaB8m5rfTUkbzTR4XojPc41iUB+ngOQO7NCcDzJocOpehxI0mF7rD9O5mlh/ZY++zvLyD1uphd/ECiahRs7B6J4QWPYv87A7QFKXGwcjLM6KU5RkHeYARnqi2XhftgQpxYFwhmSGyhgXB0YJAC5lODCkJxDDvAHVQC+lflgrsIBSNYSmb8A5BKp3x+g5L3FqmAxF8laSUHmWjqvVzm0Wi4RAenvIb6YR+1xW0woriTFwsrgy4kDOpCbHJwF6zctge/bwTCpKe4PonszK9KxxSMuArbYCFiiNTBQezdGKgUsLQmRKInX47Y+HId44R31RQxJXn3PkHQVVf7csza+IZf8qY8HxtRzRx83N2S//tqVHz8cO7iml685/jooa9W91MD7tSuDpEEYKgnCMILkxwFSTPIIwIRa7hSl+WGyX4BIVPy5rye+9nLDr75eWE6NbrNUhgOBjuQCD7UykcvVlEqRYf1YApojQXElRdgG6rhLOkWhrAc5y97kKnsmiEw64PnIfpnAoByRVQd5OXiqiRILCmbTc5wNCEZRpA7lsRoxZ4FM+r3Z5EwzE/EwNgxnqJHvkxCwuSIHvYaN8iCskQeIISDXooINqhChLeQmeRn8DoLkDgLizlCCnTZYaKvGoW3kSLdrpdhJLnaXTo7d1GAdkv0TSYX2xyqF9sUQHKPl2BMdgn2xcgHHI8mhOJygxpFEzXMiaBLg+cw6nqoROpGurtbJDA1OZaqFg7yYS2DMIUgSMC81CBeZdnjY7kZTvdDtJircax5K7iWROudk3O4Ujwc9Y1HWXYfSbuHAcApE3smEfUp9YFt/clPfUqe7FsU4hRI8QaXFsV+iqmQ37h75ABdXtcDDVW1hIodpWjaQfnQssOlDYO8o2PNHwHJpJMpujILlwSTYzb85oWR1buvgpTNVTjkSi7vS01meW8QjIFn1B0z/emo6PpfS8z2h8yN6FU/FK7GKZy4HbOQiS8lFXp4J4+7xMK8aANuCrsCsTjDP7CBWtRq/Isc9uQlsHzeEdVw2LKPSYRuZjfKhSSgfkobSQSko6peCJz3jcZ8gea89gbGdHue7xQjx9o/H5CorWsSivHkMSuhvVNxYjzuNIyiY0eF0Yw0ukPM/3TBMjBRcaxCJY7F0H5GDOpqdiAOpXjiU7oODIwjIez+h17+NwovtIq0cbtDfbOU7wPSewEf9UDiwOY41VWJLnBv2h8qEONHFerof19O9uV5HAFYphNZQu+ZtHN+rHJqhDhDzkZwcfEVQEOaRO2S5nOSq6pWrgY6Ak6DoyGMswQaepuBRGILjNpVja8lmcpvrgn2wNyQQl8PVKNZHiL2O1oZ6VLTRoeidRJi+a4WqRd1hntNRbDkydEwCEsKA6AhUkowRWlRopEKVUSog1bEVpICC46sEym1c4NnTEz96elEA7y0W7Uyh/uhTbzdMlfjhg3qv4QNylYO9vNGSgvywl1+tyaxTc/w/nJt0+9ut9nVeu9LNrQ7eISCO4urdbr547z9ex1e+wfiEN+nysAZFalM864qVsAvoZtwQJMFxRTiuUOO4Q9HmUwJKeSJFgFl6cpOxqGoRJyBpomibIVnaPVaAsrR7nEhezoAU+V4HZKGC90XGR+OKj1RAcq1WjXvhkSiN1qMsRg1TYriY2Ofz/Ug1LlCDzpd64YjSB7vUEmwj17iBS+dQJOxq5C5IblTLXoAkA/J5SDIYd4SFCP0jIPl6F28rcep5SO6hTonFgDwQp8LBeLU4s1t0OEaVGGI9GEePYxXYT26TrxmMR5PUQnydn6L+LyHJgDxPnep5cpYMyst5OicoHWJAPmwVjhttkwQkb5GbudedPvOuYUKlPSNgHhCHikmpsK7uAlz7BFbjQvJ9x8l3PYPFbHQsMyVoongeSo8Owu0lzVGwoKPIaWpfNRpY/z5sO9+B6eAwGM/T+e44oPBLwD73BUiy/hWQtDghaax6RM/1QIDSwmW67OVi24e97DoM99ajOH8qijaPgmF5X1jnd0HV7x1h/LldNSQtnzd25LElSFaOzkDlu5kwDEsRkCwekIQCCvIe0X18r3Ms7neIFpA82yUKZzrrxTzkvZbkfproCY6RKKK/0bOGEXjSOl5A8mxTLS62iMaxbAqq4oNxOkWBc2lhOF4/Rehyy1Dgk+7AxTmAcQuBfwuKKlbg9tlxuLa4Gy6PTRerV4+SE92ZLMG62NpYF/kaDmjlApKutIkbIuXYEKGidqEU4rzFz0OS9YPcD4vJjS319ycnGSDEkGTX6Aow2S2y1hAYOYcxJ/l3LXLbQjBztadN5Db5+lSkFg/IQdrSKADOSQSaxcHeJV7kBsYsCkhW9IVxVgcYxjVEWXsKouPo/UbpBCQNulCU0nOzLHolkKZHVVY8StITcF6vxabgQMx2d8cPHp4CklN9ffC1nxcF7u6YWO91TCA3+Qm9zwHuHmeSXnrp1rgOHafU9Ow1x//TQ/v6q1cS3N3O5dSqh6av1UEvN28M85ViaB1PDKvrgTEEyrEUxX3k5Smqfn/rSw3NPwArVSrslUnEHqbLOoUoxlzOUWBuNKqaxACtYmDrEAMzdSgVnWOEyjvForIruZte5B47k5tsm4FSAuCuUBVW0e+9UkeOwpB4PI2NwtN4FSwEE2tKKMzJMQRM6qCUBAz/YByT+uEYNeCdyhBsVUiEk+ThVp4n4WEgV7TL2kkQ3UPnvdSYd2sccsFyl5bgF0bQC5e/oN3UKbD2hIe8cL1HJ8E+hiN1SgeiqIOKVuBgLLnDeHKJCQ7neIheNwNRQJEBSg7zQJQMh8htHiN4Hk/SIJ8AepRgejxZhZMEyVNpBMV0TbXOZKhxNpMgyYDMCsU5guZ5gual3DBcaaDDtYY8fBeBR02j8KSFHo9bq/CwvRz3OynwoLsGj8ixP+qejmddslHSvT7KB9PnPaExMKcbsPNt4DrnW11PWLPCaDcS1jg3zS1UFm/F7SOTcGlTJzzY0AmlmzrDuqcvqvaPhP3gBzCe/ALGq9NhL/hFuJwXYWgVCc0dsghYWqr+GBIVqgajuXpo9K/JLjaVmKtKYKi6ReDnOdJd9Pw7YLWvg9WyAtaCH1F+aRSK9w1Axbr+Ilm7fS4FAb+0hfn71iKhOycRsHzSEJUTG8D2fo6ApOmtNCGG5LN+CXhMQd6DrtF41CkOj8g5PqT72pU8gIdWGZL8t6gWOcq7FMhcrh8ugpszvEArWYGLmXrcrB+P23mJ2NsnGgentMDpEz8S0A/QO9oOA5c/u/MZOfhBqPy2M+71TMexTHKeFDAepnvwQGgwdoVzukQV1tO9tS7KsYeX58/3aCnAC5Vjp0aOrQRPXpH6u4YdpB9+oPPP5CJnBzsgyeJ9k7Oc5a844YbIX6xx5C1mbQp1aDM5SR5t2UXPvZfguV8ThEP0u/crfHAhWoXiBD3s6XFAXgLQMBbF3WNQ8F4GHs5vB9OGfsDagbBPa4cqHkFqQH1DTBjs+nAYw8JQplajhNptGbXZSnqPyKR+g0BbkJWMI+GhWB4cTC7ST0wDcTHlr/38BCS/9HbHpEA/DPPyQg+CaDN3zzM1vXnN8f/bMef99wcmvfTyrea13C698XIt9Cc3+WZdLwyp5YaR7p4YUacuxtauhS98fDDdh25YguZcikS30016VOKLcxoJ7kYq8Cw+FIYMnRhuqeJ0dW/EVkOyvFM0SslZWro4U9W1TxWbia8q/cRezI2SEDwKjMIzWQIeRIYLSCIzAlXp4bCkxMIQn4ACXTSuywg01KgPqwIFJNlJblIEC1ByPcmN1Li55iNHuhzl7iJHyYBk8fAsi+HIcoHyDzjKhHZRp8ByAbIalE5IMiAPEiD3EixdoDwU96JzZB0lh8mgPBzrACZDkgHJZxckT5Cb/GeQdABSUw3Jizla0em6IPmQnMvj5pF41EqJB+1kApIPe4Tica9EPOmZibKeeUKFfZJQ+GYC7k3KxL3fWuHp7ndgvPurAIzBZoDZ+hSouu7Y61i6HMYLY/BkSzcUb+gIy67ewIFR9K2PYD79FUovTIH54Yw/hSTPProgyfOR/5uQrLDfRBn2ESi3ody+BQbTChQVzkbJ7SkoOvu2gKRp4yDYlvWBdXYHVP7QEsZvWzpKg3GJME5H92Eu7B/kCkiyi2RIlg1ORWHfeAFJdpJPuiTgiROUd53zkPfbRuNhm2gUtHLoacsoAcmnbRIcf7f6YbiYG4FzWWECkjdy42Do0gxY/SFQsILeyXFUWvfR+9iAJ6W/ovTQUJTOaYtzQ2NxMIfu0Vi5gOTRCDpTOzsYo8NmCkxdkBSJL5yQZO1Qy8Q8/FIC2qzQAPykDcTPYUH4VePIzco5mlkzg33wK7XfeTwPSe2H90DyVqn11I7WEbRcc/YbCYo8LbGTzvvo8UFqG0ep7ZyNUeFRbiIqs8lBZpGDbEhqHA9jv2TYvmiJstU9Ubl5IExLeqDoowYoJ3dpzYqAPSoUlnANSinQLlEqBSDN4QogSQdkx8GSGYf7FBjvUYSIwgsuSHL5qyli4Y4nJnu6Yby3B96ir7UkB5lWsyey5vjfOLzpRotycz8T9eqraOLrg9bkHnv7+aKvpwcG1aoFTkLwkbcfPiVHOTUwEPOCA7BBQtGlSo6zFPXdiwylqDIClqxoajAUWbZKRlWbZFjbp6CyXTLMbZJga58FW5sMlDdKwuXISBwKCsJeby+R5f9OmAYFGiUq6feBGhKX0OFNx5U5CahIjcO9mEicp8jzmJwgJSeXJ5dguzwYW6mBs7ZRdMtJzbkx7+GFPXR9gBrgQQIl6wBFyXu1smpI7mJnSdDcGyYX2sMgdGovRe0u7Qmj9xhOgNRJcYCi9kNRChyOVoohVxcoD8QohVtk58hnFsORQZlPTpN1jMDIyidIniBHyYB83kmeSXPoLEHynBOSrAt0fZHOl3PCcLU+AZIgebNxJO40pc+kOXXarYOFnrZToZCCkYJuOUJPexEc+6SgtE8WTIMIAiMJBhPbATPJVW7rCTzkihGbCJC3AGuZI3cbl7MynUTZ3UW4l/8mHu0bhGd7h8KcPxYmAmTZ5SkwPvpOJFF3QOrP5IRY1Yv6o4SW3QHRvwhJx6Igx8Igo6WIALmfrlfAZJsHq+F7lD2aAOO1d1Bxsg/Me7vCum64SJBQOastrD+1gGF6iz+FpHVUBioIkrxwp3QIQbJ/Agp7OfSsWxKedo7Hk/YxKGpFQV1LPe601+NaRz0udYzEhQ4EwZYRuN+I3GUCBS1JWhQQPC7kxWJ351Qc+6wnru38EqjYRu+A3eMO0jzAMAu4MgXYMh6Wqe/gcusMnIuU4KTWB+fjgnE+ie5VerwrXIkzoeQsZRpsi5ZgaxQ5S53j3txPEN1HsOSFabzVieuhiuT98gCsUUjFym/O0fqrhAHpK8TXc7lOpDPpxjqVTIzGiKBT4Y8tigBsVfliBwWzvB/5iDoIp8KluBihwNN0HSqbJ8Hagtp2Mw6IY2Gkz4j3Q5oX9IR561AYyBFbv30DFYPSyEVGw5YShlJynwUUlJaRk6wIDYOB3pOYj0yPBHJiUJqux5U4HVYH0ev09scUL38K0P3xOfU9X/gGVEOSAdlfqkJqrVqXanrvmuN/7RjXpdtk3X/8x43sunUu5L32KjrWrYN+BMthBMi3atfG2Dr1MMHLC596eOAXL3esJJhulwYhXynDdYLQo0iVI4NGjh72ZpyuLrEakqbWiTC2TEFJXgxuk1PcT1HiQYLtMQItQ/I6wbGIQImIMCA2XEDS3jIJaJYFQ1o8rlP0eYp+Ll+hQH6oGruo0bsguU0R/AIkdysDHVEvRcWHKLJmuSDpcowuQO6jKJblgiJ3NgcoYucOxyGpsxMKeQGS+5xDrgxIFyRdrpHhuF8fIh67IMlL9RmSDMjTqWFOQIYKSApQpjr0PCR5yPUSiQF5JZdcZIMI3CAXyZC8S5/v/RaJ5FgkDhEkCzpG4XHnTCGGZEHvZBT3ok6/fy7K32qIkvcICFPo77G4Oe4eGYLy+3OJOFcBewWqKi1C1FuT9gPPpsJyfpyAZPmhkbBcmorK29/D8vQHUcPSZLeS+7H9yyHJOyLN1hK6OkhfXwUzvTabcQYqnnwkIFl+ojcMuzrBtGoILAv6CUhWzWwtnKTpmxYwciIBgqRlQn3HcOvIdBjJRTIky4amoXgQfYZ9k/Gsd6KAJDtJhiQD8s8geb2FDnfzImBoFI9nmeQqG8TDPKgDsPIb4P5OCkgO06s/gvKytSLZg7loGkpOj8Ptdf1x+INsbGqmx7bYEAHJc5GBuJQYIiC5L5ru4egwXNDF4KQqXCTR3xHrmB8/qKfgjEBzUK8UK7E3OOcS12hChCtk+PHK74XBgfglyEcUS2ZA/ib1F5BcJHOsCl+rDKmG5DqZr4DkNrUfdhIgD6gDcDwsBJfjQnE3WY+S3BgByKrWabC3pnbajRzlmzmwT2kNrBgI647hKF7TB8WfNaUAg4LmnEhYk7UoiVIKSFqio2GJ0MMUoXYu2iEnmRGJgkQtzkaosNCjLma4eeJLD19MJkC6IMnDrV941cMQd3e0fLUukl6pKYNVc/wLDonbq1fSAn3yM+q8hrYe9TCIHOWQem54uw4Pwbpj1Gu1Mbkup4nywrKAQOyWyHA6JAR3VCoUR4XDnBwFW/142Jskw942E7bW2TA1S0NpgxSxQvU0RYnrvCTYFqTGBUkg7oZ44amqHir0ATAma0SaKtRPJTfaUMxfPmgUjuMx/jgUJsFpZYTQfplUuMldiiCxX3IXRbm7NeT6NIHkIAPFvMlhguZhtRRHqLM4GEpADONhVYWQC5CuCNzlIvkxdzYMxOfFHZFLDEoecj0Uw1BUO6V6QYcIokfo+8finG6S5yQTyT0mhwpInknTCjEYT6WohF6AZIZGpDJjOLKDZEA+D8krrXVi0cjtFjnkKHPwuGUqitvFo7SjXMjUIwKm7lEo75Yg9qqWDkpCyVAKVkbnAl+0RdmCHJTvboeq658BZdsIMvdgIjPJ4uFRsXS04DgMFz/Hs7NDUHGTOr7Hb8Na+hGslbMIUI8JkhUEQB5sdaSiY4mUczZXaSyz2N5vEUBzrDl9MeH5X4FkmQAkA1gkKKhiuO+mF7EBKF8okn5bL08Qi45MW/ujctlo2Oa8jcq5bWH/rTUs37UW5cF4D59rTrKSU9KNTof5nQznNpBM4SYZkgU944WLfNwhBg/bRVWvcmVQGujvYW4UKVI0FtD1xdbRWN9KjW0j6uPs0ndhK1lPr+0Q6TDKKnfR6z8IULCBY5PISI4AxnWDqUU6HmdG4mGmDhdiJDiarsWBRA12x6qwh4fzKfA6xHVIE4OxJcYPe2OCcTAyCId0wcgnMJ7QK0SS/wOh1A4IbjvUgdis5Dl6CTZoFGLfMCcynxNIcAzwwc/B/viFt4VwPtcQRwIBdpzrxDx/IDbwFiuVH/ZoA3FQG4xj2gBcoHv/YRqP8FC7bkzgax4vVqyKAGJ4Bso/awbD3G7A2qHAuqEontsF5nfrw96GfpbbdLxjKuVJrAYmgqQ50gFJXrRjTwwVbf8mQX+fLACz3GpjWl1PgmMQJvsE41NylZ9RUP6Vbz2x/aNHPU809vA7NfPDD/vW9Ng1x7/k6Jwct5JrUDZ65WX08XDHIHKV7xAYx5CTfK+2Gyb+/VV8W6cuFnr7YKtfIPLJFV4nUBboNKiI18GcFS3qxfHwqrVVFioaU0eTGYdroRQV130dWwKU2BqoEpDk7D3G6CAhQ5IaVVmxQNMckauVIXkvT4tT8UE4TlHoGVUkjgRR1Kwgl0cNn+cb9xEE91L0vI8i3QP0uw5pgp2ADBaAfB6Se8KVL0DSBUhemCAWJ/ACCZ77+QcoCjA+97XnIXmUF+845x9dw60uB8k6nhAqHCQD0qWz6WEvQPJkslKcz6SrHHOR6epqSLoAyXINt15sQQ6zVThuNc8WkHzSKg0l7RNQ1knhUOdQAUmu7WkbnAPL21koH56GihFZqPy4GR78FI/bK7Lx+NDbMN5bjjL7LUemHAKOsdIJSeMl4OGPKL04HEWXe9PPDYWt7GPYbXNgsD8Uq0hdkLThfxeSRrH1o1y8TKuNn/8aXe0lV7yJvrkEePxdNSQt2weiatU4YP4IAUnrzJawzmgL05RmqJjcCJWfNqqGpHFUGirpM+KEAsa3shxukiD5pHusmIt80FYvxJC8Q0FKQfMIlNPfxJinE5AsbKLH5baxKPi8O3BpMb1Yek1VewXAbeTQS8w7cObK77i6rgduTGuMkwMScbV9IkoaJuBeiha3klS4nqwSKQwZknvp/jmQFIbDBJHdUQS9KB/sSCAQRgVivy4AB8ODcEwnwfFIOZ0JMOT4dsr8sE3pj00UQDIkN2lV2BCqxAqlXACR3eOPgb74iYLV3+nMUydLpAFYJSNQyoKwgSC1SRlA7YECTgLwEfq9JyMkuBqnQVH9BFS1okCrfRbQJkWUxSsbQBqRC+vUdsDyAcDGt2Ba2gcPf26DsjczUNkyuhqSz5JCUZwcgdLwcJRrHcOtZmpvVgoCSuPkOK/0wQaCIEPy23reApCsT7z88Anv4faqg0lur6IjBerxNVU+ao5/9RHoVfecxtvtXLa/b347Pz/09vDGsL+7Y0w9X7zlUxdver6KUQFu+JoiTa68cUqhxINACSqjw2GjiLgyJ4IiTgJec+qoc9PwKCISe4Jl2ODujWNBQbgmC0GRTAODNhyWSHKgkRoUpzvqVKJ7CtCD3GSnVIJtLB7GKXCFIHiEOgOeT+QtHLzqjodXHavuCI7UIXCOWVY+QfGYRoYjoQqxXJ6hyFs9dhAYWfso4j4YLhXaT6+fdUjn+P2HKSLnr/M1i7/OOkrROou/fyRSStchyI+Wk8tV4AQBknU8ViZ0Ml6BUwlKnE5U4SxFyOdSQp1SC11I0YjCyqcTQnA2SY6LaWpczgjFJXr/F1KVOJ+ioK+pcCVTjWvZobjZgDrQvLBq3WmuE+KVlQ9aR+Fp22g86xCHInI7JV0TUd7boYp+STAPSoOZOnvLm+mwEiyrqEPDh9nAV41hX9sPuPopbAQWE44RdgpExtMyZzFjE4pQYjmOB4/n4vG9yUAhOc/K7wlOO+l7lwlYBQJ+rtJVXJ6qhL5ajmcEsmci4Xh18WVOQm516K9C0uBMIWB01llGFf1yawGqKvNhM6+FsXwGDA+noPjCBJQeGgvj1rGwrRwB87wBsP7cC+ZvusPyeSdykY1g/4g6/AlpsL6fhIoxqSgbmYWit7JheKcByoekoKRnNMq76x3OvKMepQTIe11jRO3IsjbJeNY8Dg9aRIrFPOfHt8CjzV/SK7tGr/Euvfv79HncJXe7EbjM844Ekp+zRMWc8uYE0wbhKCTAFtaPwMMMDe4kKXE7UYFr5CavRgfjEoHxoj4IFyKCcDEyGOf1wbgQJcG5UD9cpODuArmwc9GhOK4Px4FwNXaqQ8T0A2ei2q4kmGqDxLz6jtAAbJb7Y63UG6uDfPCbPAA/BXtjjp+3KC23XBoszryIZzW1HS48vpfa0TGJLy7K/IUDtDaMgaldAmzUJkHBGVrmooyCsCcj0vBgeg4MC9uQg+xKkOwB/NYFGNsIVV3SKeBNA9ISYY6JQbk+EqUROpRHhJCLlKNKpwUiYmGJScJdfQI2K+T41qcePvR+FVPoNU7yrIOvAvzxiSenoPPHRF9HzcpwPwkCa3vU5GitOf49joiX/3Yr7/XX0cPNA+N9ZBj+Sl0Mrvcqhnu/jnd9a+NjiQfmenvigB81phAF7gV4kSNUwZKtE5C05sWJpeI3CKIMyR3+wcgPDsYtlRKlyjCUa7QwR4TBGh2G0sxQVDSNgO2NWCF0SKLGmIJnqWG4SA5xD0XKO1SOJACupemOVXcEsVAZjlInwWJAuiB50Okcef/jTp1SQFIMy5LrZDEwXdBkGLrg6YChA5qsY+Rk86NVApTHomT/CZBCFA2znofkGXLHf4DyD0ieT1aLmnvnU5QvQJLhyOJrhuT1HG01JG83DHeIy2Q5ISlWV7aLQdEb8dWQLOuVIPTPIGkdlw7b5DyYllOHdmEi7KalhJ0T1Kk/JfhUiWLFpQJGheQBL6HCtAaFj6bA+vhjIud0cnHb6XsXCZBPBKhckCz5X4RkucjT+hwkbYUEyuNiyNVq/gWVBdNRcfUTGI6Nh3n7+7CvGgnrwsGo+rUvLNN6vADJqg9TUTmOAovRKSjl5OYj8wQkywYnw9AvAcZeMeTQw1HcLhxlHaJxqyNBkYdfG+lh6ZSFR62iUNI/BzjN+x2PUJhxi975LTzGVdy2nEXJ7Xko3PUu7s1MwINxMhTzCtj6YXiUrRGgLMrT42lOOB6ma4Xu0T1yl9zkbbpH2F3eiFcKccYp1o0YOW7FhuJaPLWLuHCciNJhf5hKFB53LGYLEJDcqQkQ4gU4DMl1IT5YJ/XHzxIf/BjkhXkBvgKQXAyAiwLwdpBV1G7W0v/dT+3orFqKuxEqVGTqCXb0ObSNh7k9p6Ck99qqPir6pqNwdCaezMiDZWkHYAM56E09KRB4A3ivoQOSDZNgS4yBQa9HWWSEgGSZTgqjTlYNSUMkjzLpsTY4CN8QGD/yq4UvpL4iccBH9dww2dcXX/gG4ZPAYPT9+yuQuXmf+/GzKV1reuea49/iGNGt05cRr796JcetLhq+9jr6evthTF0/vPNaXfT4j79hSL1aIgPG7/4+2BTsLzYYn4/TUGOPRWlWMkWhelyhBnjSxx87JBLskctxTi7BY20YjBodzDJqKJpQaizhqEwKRVkOqUsMSnrFwzQ0G/a3m6K4czouEWxOkHM8Tc7wELlJ1hGNY0n68TCZUD7B8hg9FsAkHdHKyEn+sYrVtXBnnzpQ7DvjJe0svj5EkTnvR+PzEWrAvOTepXyK2E9Eq3EyRiPOLkC6IHkyTlWtU/FqAch/hOTz+v/Yews4vaqr7TstBUISiBCXcXd3d8tkZjKxibsRIy4QJIGgwaGE4lbcCVKKlBa3ACHuMj5zu1/vtfa5z2SgvO/3fl/7fO3zdE5+V85tc+s5+7+uvdde+8f0ECWBpbpMSO7NDFagFO1jsLA/J5QK1iBZEI4jhXSPxWyc2TAfLw/HiYoInB4bjcaaOLSMj0f7xCRVCtAgkJyeqGSckwzrgvS/g6R5cwUM28bBdks58Dgbtk83AiduoeN5lsTZo+BoUCXDodV3cxOe7R+jo/0hmE2Pw+F4Fw7Xl3C4DxOiHV1dqRZokuQch2TLqm5XZ7exRG+RgX+4u1VzujImKfD1qPdogttzGB4335fzTTgMj4tBmZMAAIAASURBVMB0cieMe65S62HaXlsK6zPaOpK4rRK4qQSd149H+/YJaL12PFquGEcnye9oJSGwMAaYTzBMTwKmpQJzsmGbwWCtIQTNk4PgmJ1P9x6PU3OSsHsqg6I7V/MNHWNgYVcyMbCwS/evcxdw4Ebg2WXA6kqYqtPQlBtJIBKGWYE4mxWE9kJJ9ImHiU7NkB+LzryYrn17TgzaCKiWjCg0pUXgbFo4zqSG4WyKpuMpUdgfH8FzLhh/CfbHe/6j8Y7PCDUnWBLVZAhC9Gce47tlfNJ/BF4kRGVs8pGRw/DIqOF4bMxIPKnqHo9WkHqT9707cgi+CvbBgfggnMmOgqkySSXgySLrIhvhZ56TB+uyHJivKYRt11i4X54O51tzYHtjJlruq0HrpiK0T0+DmUGyJT4c1nCe32HhsIWEwsr3ZGfQ6ogOgz0mHseiY/BeQCDuobu95tI+2Db6Uqy/pA9uunQwbhk8AlsuvhTLBw/FxIH9kDWw997J5dX39rTMPdu/l5u86MJ9Kef99lDNoEsxpc/FWHF+f6zuQw0fhst44K6/oBdu79sbD/2uF94bNRSfho7EvpggHIsJxT5Gp1/QaX424FL82dcXfw0hCHhCN/KEMQeFK0h6goKBsBBYEgLQlkVNiGIDTxe5ugzYUAf7nGIcyorAV4TZ14Tf53SEoi/C6dwi/PGVV12gJEhFOiTfD/VV0qeAyKRogaMAUZcAUpcOxi9iArskgNSlA7K7k+wCJCVw1AH5S0iKo9ThuDcjVEkgqYNyX3YoDuSGeRWiIHkoP6wLkidKYxQgT1ZGKgcjjbVAUpxkx2RNUuFIZJjN6H9+GqyLNVA6lmcrSJo2laPjmrFovDIDp67PRcsTE9D0/hI0778DJvcnaMMpOjUNbh7l1Jr53w/cvwCL+QnY7e/ATtdmdx0iDNv/ZZC0ubtB0iO3HKW+ISzf5gs9CUfT3bD9tB32v66H/fXLYHt2LvAog4I7xgI3l8Kwox4d101E27Z6tF5ZA/P6LLgvJxTnRQJLErjPhJuBh3lSgprrZ5hJoM3Rvn/DlHS0StHuP2+j7f6WVvqwWvNEOqzb8C1OWp5D857VaHpqIk6sT8fx6hCcyaeTKknAWQY/AsnG7OAuSCoRKKbCeFiKE72X+Zr58ejIiUNrJt1mRiQa0yNwJpmQTQrBkcRw7OU59kV4AJ2fH/7kN0pBUuYEfxTuj79FB+ITnocyzv4Oz5tX6TCfo5N8nGCU8UkB5MOEpaw1+TQv65B8n8/xA8F7KpOgLk6CvSYd7gkZ8EzgOTkpDc5pOXAtLuW5ySDrZn6Xj9E5vj5bQdLy2nQ03j0WzRsK0MKATWAvhcvtkZFwRUTCyoBYATLSH05J9IuOw36C89Vhw3HrpX1x9aCLsKbfebhuzAjs5G3Xsp254pLBCpITBvRF4oW9esYie7Z/zy1k8ICvR/f+DZIuuRjz+o3GjAuGYlrfgVg6ajTm9j4fW+kkb/Udjj/4++LR0AC8GBqKdwKC8cEwP3w6YDi+HjoK3zDS/T7YD0eDAtAUEIQO3wA4fQjIADpJRpJuOjgTo2vz9BTVkJt2ToLhFjbgq8txqDQKR/yG4sAoGY/xxw+E4PfUD7z8fbimr+kWvyIMPw/T9Cmv/y1EqpWMUeOWMn4p8yg/DhqpEnw+CaXrZFQrksv69S+jAn6mr9jY/Oxy7M/1FSH5tUCS+oaQ/C45xKsgTd3GJb9Pp9NOFScZpgHS6yil+1Xvdj2YF6EkoDyYF/53kDxVEYnTlVE4OzYGzTXxaBVI1iegfQIb1IkJ6Jgar2QQNz4vDZZFGijtywiBVXloXJ0P4xWVcK8vgntDNrAjE7i7EPbXtBJ2sL9FtO2HhfAxOggklzc5h67R4toPp+1ruOzfEFA/wuk5AZenA263UwHLyce7vZLrLo828d+iumHtaszzH67b6i1WoC/i7OZ1Ny2vINlBVNlwCDbnX2E2PA/r8Z0wf7cO1j8vgenVmXD8sQHuu6bCtnMiDDcyWLihCOZteXBcwe9hVQ6wrAhYXAEsIEQXsKFflI/W5fk4szgVR2dE4WBDGPatLcSpp7cAbc3KNx7nv1Yc4Tt7CThyB/DcEuDaGjpRuqyqFLQWaQswHyhIwJGSFJzJJCDTeQ6kB9MphhMkUTDnRVOxsOfGwZEXr/bW7DiYCSqpaNWREo62pDC0JoaiKY5/HxuAEwzeDkTI/Eke6/6SGTpS1VP90H+ENk9YAsKwQJWs9qZMBfEdgWdGjlB1mJ/neSuLLz/Kxz82eiie9xmJ93jfJ8OH43uep6ckG7WMAdf4NG3ZO7pC1xRCckYqOpemoWNLLqw3lsJyfy2MdJGe95fC/dEKWN+9DKaHZsC4aSwDtxQ1LcwWHghPhPQWhcIREgAQwCJzXAQOx0cS4H64e/ggrB/WF+uGXIItQwdhXb9LcE3/obiq3zAsGzoadQzIRw3odWTRzIk39LTGPdu/5TZv/Njb/S++YF/aoIGo7HUeFg3ww8Tz+2Le4CFYOoDu8sLfYcvFF+C6Pr1x14jBeGDwYDwzcDDe6j8cXw4ejR9G+2NPkC++C/TBkUB/nPH1R9sYP7h8efIEhipIghGvoyBCrR2JW6cDDy2E854ZMF0xHo08Wc8QYEfYEOxl5Cyg/N4LSh2S33glDlP0GS+Lm5TGQkApkBQJIFUWbMjoLkjKZYHkZ+G++IJR7ueMdkVyWSS36/dJpm0XIOOCfgZJ0bdJwV4FdkFSB6VAck9KsAKlwFEHZHdIHsgN9yrMC0qty1Xvbu0OyaZxcWiRMUkvJJUa4rogKVVQzAtTFShtl2XCtTIXZ1blwrCFINhMp745D+5rU9jgpaH5yUq0/3U5SUen6P5JQbILTi6pstNKGB0j+fYoud17/yWQ7FoF5H8DSScdpRufE+SvAS2/Bw5eBfztcth3z4P7OR5Xv58F150NsNw6FkY6Stv1hXBflQesyQdW0iEtqYRnbhE65+ejfWkRmi/LxYn5dOnL6Ryvqwd+ehJoeo9u1aSmo5zivxN02seP34xDz83EofUyLhwFa1UCLBVJMJTTPRbGYm9ODPZkRChINmUEojkjBC2ZoQqUxpxImHJjVGa4OTMKJrrGc3AMRUtCMJrjgwnIIO41nYoLxuFoHkMRgfgiyB8fBzAYJPgEkh/QNb7nNwxv83zZ7T8Sr/uPwUv+o/Cir4+C5Aujx+ApnotP8m+kzuszdJN/GjFcJdUdo8Mz5KXAUi+r9eSr7mX7bH72aenA7Aw41xbAvp3Hzh3j4Hl0CjzvLgK+WA98tUlVaZI5qYaNVWiqlXyEYFhC/eEKC1KQVPvoEAXJzigGjgTkS6OGqLHItUMuwtrBF2PT4AFYcf6FuKLPQGzty2Cc7Uxxv74/BA6/cF9PS9yz/Vtvt960Y/L0+pqdwRcP2JPcb8ieiqEjUX3RJZjTrz8W9emL5QMGYFX/AVg78FJs6T8Yd/QfhpeH0pkRhsd9/NDoMwzNjFrbfX1hDAxU5amkhqObrhMSacZznxMNzyw6m+0TYd/FiPTuyei8ehxapqTCFOGDtsDROBsZjBORgThKp3iIjnEf9z9G+HlB6Xeu+5WXxVF+phJ7xmjjlXSUnwsMQ7S9rGMpkssyYfobusWvCUL9drn8y+tfEZJfE5DfsMH6lg3XdwlBXfo2PrDr8jeJAUo6LDUwhuKH5GD8mBLSpb0EpWhfRjD2ZxKSWaFe0VVmE5AE5tH8SDVR/QRBebqcDS1BKaXppBRaa00s2uvi0Vkf712mLA6GBq24vGU2AbggFbaFaarL1bVcpjrwtrWpcK0rhGdDMcWgZHMJcDPB+chk4PvtwNlHVGUYJ6Q2aqdKyrE5vMk3koyDNtg9ZzR5l8xSUHR2g6R0h3qcqhSdTP3XE3z+YSfpXXLLqcDo0QoZeLQuWE1uqpGv+AXclpfgPnM7HN9vhenDZTC/Mhftz8yEdRc/5066ve1VwNZaYFMNrJuqYdk4FoZVBMG6bMIgDcZlcfhxVSG+uGU5fvzsbX4g6ex1K1lsMv/xVb7g48C7G+G+YiKcE3jsjstQcvI3aa8Mw/H8YBxMD0FzYjI60jJwlr9rI3/Xphw6wyxNnVkEU3aUAqQxPQKmlDAYk+ky6RzbeYy18VjT1ZEQoCSu8kxcGI4QOD/KosdBPN4Jvc8D6CL9h+P9MYPxLgG4mw5S1piUwgKvBAQQSmOUJFnneT86y1GX4pURA/E3gnVfZADMxXSM4xk0zCyEc04ezAuyYFqQBsviTLjpth3bcmC+qxRtT9ai7Z05sHy7joHINuATuusnl/K7rOPfZ8KTHAlXZBCcDGhdMt1DVg2KCdK6WSMisDcqCK8HjMStI/pj86B+WE1d3n8QllzYByv7DcaqYX6o7zsIlaN8Pgrqqa7Ts/132xIuGrg35bcXHKq7eBDmXjwAC3pfpErYLb2oD1Zd3B+bePvdg0biLR+CICQcZwKD0cqTtzNgNAw8UZ2RkWqcwhgcDGewdL+EAQlUZoTKILRvrEDHHROUzNvHMzLPhpuNgis+Qq0515QQgdMxITjKk1q6nPZG+ndB8uvIACUZr/wy4pyz1BN8ukNPh+JXEX5qv4cn8rfRgV1w/I4ntUgeJ5L7uwNyD9/TnsRgpS44xgUofRXP50zw7wKl7iC7A1KH5L6MUAXI7tIheYiN6ZG8CBwr1Cq6nCoLVxJQSlHtlnExCpICSNOkpL+DpGW+F5SEpHNZNmzr2PivSoTt8lxgI+G4qRjYUgr3dXRPO0vQ9Ow0Nnw3wmp9h85vL3HYrDJeXR4NkhqeOgjGs0r/f0PS7vx7SMr4pMmjSSBpQRPf01d8MCHWcg/ce6+B5S8rYHl1Htr+OAOW+yfBJeNp15QzQOB+XRWM6yrQuaYMlrU5sF6ejs6lMfx+6KBeZdDQyudyt8JhbleAtFrNahUVY+sjOPDGfOzdUYzjczLRWhoNc26Eqk/cWhSIk3ljcCDDB/tTg3A2LgGN8Yl0ksFdkBQnKd2urTwGWnhstCeHwJAWriBpSAojDEMUJHVp1/0VJKX7tZHnwfHYMOyPDMH3oTxuQ/wVJP8qlad8h+I9AlIyXgWSsg7k82PG4OXRPnhx5GiV2fqc73DeNgRv031KSThTSTYwkW56JoOHeWV0kbkwzsuAeWE6HMt4vDCocl2XB+s95TA8MwGmDxbB/dMVqpveuPsytNxQjeMN/Jx0y0aeU27pWqVz9Mgi7Tx3RPaoUFXk/LtQXzxHOF8/qDfWX9IbqwYQjmxLlve9BKsZYM/rcykmXTzk28hePeOQPdt/082vb++9SRf03lfRfyCqe/fBtKHDMWfAIB7kA3B9v4F4csAoRrcROBUeQRc5HB1+l8LkNxh2Rrv2AD80E2CtUYFoJYRkbUpHAk+oVIKwgo3TCjbed00H7pwG25YytUAzsoNgSfRFWyKj6bQodKTTTSWG4Sid3YHoIEamhBjd4B4C8rsIGaP0Vfo23IfXfQlRTXL9m7AxSnL5+yh//BgT+DPJbXsi/dRe5qOJ5LI8zzdRfgQpoUxQ/shGS/SDADOO98f64ZsYX6Vvefn7hED8kKLp+2TCMsEXe9kQ/pQSin1p3KcGK0n27t6UAF4OxBE6x0OSwMPG9DAb0hOFBGNxtNofyQ3FkRx/nCwMwdnSCDSVR6laoqb6JFgmJ8NMSFqmJ8HK70vW8hRImuclK0iqccmlmbCsjCcIkmBenw3LumJY11XDsZFu6qoJwLYpcNxRCfsL0+ERh2C8Va1SQXsJj6tdZbtK8o1ZoETwmYkjI9EnMnsLn6suUK/jVK7TY/d2uWpJN/+MMUmlbosud5+KYuran4HbRbgZXobj8N1o/vwqdOxeBjwxE44HJqL5jgacuLEOrVfXKAeJFXSAa3JhWJuNvVcW4Nsn1hCKn/P5m/jZWmFxtJD6Jq3uauMzwBs7+J3NAuqK6b7S0F4QTzDG42hJBA4VhuJollaw+1RCJE7w+DiecSlOZQ/FqaxgnM0Nw9mcUJxODaCC0JIWqiRzEtvTwtQx3spjp5PHSQdh2MJjTSSXZeK9KTmQEKUjZcB2ikHdiZhQHKRb+4GA/DGYx1/gaHzmOwwfjhqCt0YOxesjh+NlAST1/OhheNlvFF4bNRSvDuyHd4b3x554Pv/YDNgbioCl1QRkIewz02GbmQzTolR0XJ6Gzq356Ly5BIY7uX+qGm0fzIXrqw3AN1th/9N6wnMybJPopJNDGfSGAAS2yCbuMZ7ndWI43EnROBPKADA2li52GK4f1g9rh/XHkj59cXmfgVh10WAs6jsEU+gky0aPQtDAvj3zIXu2/95bdK/fHMn93QUYe+FFqOnTD1O4X0FA3jFsNHYHRONoYjraE5PQwRPXEjICjpCRcAX7UYEKkO0xwQqQ7XEhXZB0V8YCi3Lh3FEL943jFSQt83jy0UnZkv3RSACdZYPRmKCNy0gDdCQ+DAdkhXSekAJJBUrZ8zV0yP3ExkSBlPAT2ClwegH5E59HtDc2SEmHov638pguUMaIowxUkBQ46pD8QYBIfUdYCiBFe+IDFCB/lDFHr/alMvKnWziQwX36OVgKJEUCyIN0kbIXYOqQFJ0sisLx/CCcKQlHc0U0Wqti0T4uFsbxiQqQ3SGpulrnpP7MSQokrasSuiBpXV8C2/pxcG6qg2drPZ3VJJhuLkbLIzU4tXs6Tny/Ah2tT8Lu+IrgayN0zq0AYlYrOFoII2MXJK2efz0k293anE0r4SZwh303cOZBGPfsgOW91XA/NAV4ZCqM989B293T0by1WrlIbCiEbVEi2lalA2/RHXX8mX//kyrDZ6JbVjNIza1oObkL+19biz10oIenZcFamoHO/CQ0ZUfhTE6kAuSBfAY4GXE4kRLbBclj6YNwMmsITmQE4nR2iCogcCrFX0GyLSMc7ZkRCpBSmaaFx41IxvTaE0MVIFvFSRKSVh4vdh475tRwtPDYO8Pz51RcOI7Sse0P9cNPoQzwQhggBo3GJ/6jVK3j3XSNr/j4KEi+IBV2qFdHDsE7IwarIYkTfP/miYXwzKSznlsC96xcBUnXXC3hyyJl+7aXwnpHFaz3lcDx0iTYPl8GzzebYPt4DU4/Mw9Na0p4TMbAGRcAl4xDBvrAHeQLK887gaQzIYyKRHNkBD739cWDA3tjQ+9eWDmoD5ZdTPfYdxCWnncJ5pzfH7MHj0bceecdunf71lk9rWzP9t96e2znzppBv/3tIZ/zex9IHjoQlYP7Yw1h+ZKPP1rCEoAMRufpCapGY1uSL9qT/VQWqzsiEM1JQWjmia7P+7InM9JMDwcq+Xcy729xKjqXswFaSdAuZyM/NQaWqjCcSfXDCUbTR2NH4VicH44l+ONoXCD2R/uqNS51SRes6Cc6v+7aT8jpOkDYHWQDJJLL+m365V9e30cHKfPHums/o3/RAX4e0X5qH6//lOiniQ5SuttkXOpQRigVjsNsEA9nhinJbXLfwYxgHMoMwbHcCBzPi6TClU7khymdLAjHKQYKZ4vYkJZHo3NsvJJhXBxMtQkwT0iEhd+bbVoS7NOTYSMk7YSklZC0L0yDY3EGXEuzYFidB+MaWRoqG671DEY2FsOxpQLmq+phvHYCTNu1paSs9xIaj1cBHy0FTt5F2LxAaHyrStFZFfC0ZByDV51wqakjFu9izC5eUvIWFNDHEv9ZS2Wdg6RFXTfyPqMXkgblaiWdh6B0fAu0vYb2A/eg+S8bYXt7GWyPEpS3s8Hflg8nG3/bVdX49obZOPjmA+h0taHZaVMFFTpV7/IpPunHwPH7gcfmAFuL4ZrF4KQkXpvikB+BjpwAnMgdrXQ6MxGNKbwvPoquLwyNySP5+w7H5wxuvizk75sZrIoGnMoIISQDcTKN50GGjE0Skjw2WukoW8VJSrk2BlQi6YbtoKuUhB5HdjicOREwC1gJUAkWGwmh0zLtKtwXh8PG4FDoaOwLHYM9wT74LHCMqnf8Np3Z66NG4E2/EXh19ED8efgAfBk6Cieyo2Gty4Flbj7MC3PROi8FbQuS6CCT4ViRBssmHjPXF6L13iq0PFYPw0sNwPtLgE83A3/aBOyaD6wcB5QxuIjl+RsUAPj7whAyBq3RfoQ+P0N6LByJMaryzmexkXjYzxdXEI5LLu2H6f37Yt6QkVg8aBRmXzQMtX0GIf7Ci/ZNn16zs6eF7dn+x2wzCkt3BV/wmyOJvXodWUU3+WYwI914ur+cHCArGS66tM7UABjTg3giUYx8DZmRMOTEoT07Fm1ZMXClRQG8DVLJpCoCJ6cRCPPjFSSt63IBWXanIQWWklg00YEdixvdBcnDMYRh5BjsDScE6R5FP9E1SkLPD+FjlPZG+ipIHmJEfpgRuOgIGxmR3KaDUr/v1ySPO5QY0qWDdL86JHUdohs+SDdwgA3gfgJyn+wJyQNpWgLHgTSBYlgXJI9khSsdzQlXgDyRH+VVhFc/h2RzaSTa6bYN1QmaCEljTTxM9QmwTkr+30LSuSTzZ5C0r8n6GSSNV9ah46o6GK6t7IJkxwNFaHlpMjo+3wzL2T/A6f4CNpe7C5JSarxTjTfKZbeMTP7LIal3uVr56i7PWULuO97xFszHHkDb37ag5YXZwB9nAXdWA7dWwnVdGfDgZcCJdwjD79XzyfOcdTnRJpC0n0Dz+/fg+7uqsJcOfP9kH3ROCIJtXAasJXRgBZEwFYQwePFXY5A6JA0J0TAk0vGnjubvPBJfFATjq6LQn0FSXKRAspHuUNScEqwg2SYO0js+KYk8KpmHgLRmxyhIigSSnQwsm6XblZCUbleB5NEITQd57Esm+Fd0dX8N8MOffH3wJh3lWwGEpc+l+KvvMBzg3xvHZvO8KlGQNMzLQvuCNBiWMKhazvN3bQ7cVxfCsbMS1kcmwvL8DOC9RcCH/L7eXQ7j47Nx9opSNE5Mhonv0RMeCPj5AISyMdQHHQxeOzOiYM5OVJA0RUXhzdHDccvF/bDid72wauSlmNj7d5jRfzAuG+KjIFl5Xr8DwT3jkD3b/9RtennmEwv6nYe3CCR3AoGXFQcQgu7EYEbLEaqKCHKpvFg2MAmwldIhFhF8OQnwpPOxmdGwZAXDUM7IenYcDOuzYNtRBseNFTBszUPHimSCIBUtJVE4nOaDw4m+OJJEVxnnr8YmpctJJBl/h+hWD4T548fwUQqg+2N9cEiAGu+PIwkBatmuY3R9uuS66Hhy8P9Rv/w7/W/ludXzE4y6VFmxbjosjjJZLgfhCKF5lNA8RicpOp4Vwqg+FCdlHDJbrrMBzWHjWxCG5uJIlRQin7u1LArtFTEw0EUaCUljNZ3kuHhYxtOxs7GyT02CY1oynDN/HZLW5XmwraCTXJUN95o8ODfkwb45H6YripUcVxIa2wiQG6lbquHcVQvLsw1wfryMINlG0v0JUCtvnKBTIyI9HtXdqY0FemBWCzBrkmICKoGnm/4ZxQR+XrTArqQXUjd5s1xlCovTJbcc5x9+AdPZh3H2yyuBZ5bA9vAsND46C3ufWoyOH5/gY46g3WFS7tPMPUyU8Sd+xLeBhxbBsCKV7orHb90YoKgYKC6Bu4pBX8koOspRPF4D0MkApjGTjjJ/JA7nD8ePBaOxl8HNgewknEhisBcTAUMcf99kbRzyrGS8poagiWBs4XElPSuNKms1CC0JgdrYu4CSTlLmGwqELJlRBGWYkjkrTMGzMzVCTRNp4vF/isFgI8890alIHxwJ98EPhNXXQWPwF8LrQ5/ReH/EAHw4+hJ8HTUKZ4rjYJmaDYcsqbYgHR2LUtC5nFpPUG4VB5mPzjvLYXl4PKwvzYDnTbrG3QTkMwt4bEyCZ0kJXOXJcMdHqCEUyTUw+IxEe5C4yAC0pxHw+cloL8pgUBCH72IjcM2ooVg5fCgmnv8bTL6kP6aMGInKQSNQMnAYEi7qv9f/wt49Uz16tv+5233b1i0hJA+9TccmmajIjCUU49Vgfos4x3xeLksFSlPgqkyFozxdQdKcHQ93Wiw8GdIIhMBaHQ3r0gx4rpX5WHXA7bVwXF8G56Y8YE4BrLWpOJ0XogpCH0pgYxDr93eQPBwZpCC5N2I09kX54GA8H5NMSMX6KlDqQDxB1yc6SQd4Ki2s67KuX94vOp0ejjMy580ruS4rORxnoydglLqbx9kInhD40S0e8+5FR9PlMh+f9Qt5AXk6LwKncsMVIE/nhaGpKEIBUoekALKtPBod4iYJSgFkd0jaGhI1UM7Q3OQvu1sty3IVKAWSrtW5sK/LgXVjLgybC5XsdAbOreVwbeN3f1OVgmT74+PR+OpUNH1KwLS8CKf1Ow0+qsNVg5bx3wSSRo8GSoGkjIkKzGH5FO0nduHUZ5vZyG+A87G5MDy7GDj9NB/0BTz2fQqQAkqZbwmzGWfffQSH7lqKn+immhfFoXF2MGxTQ4DKKqCwiAHeGJjLxhCQPmgtGoOWHIIuO0hB8lDeMPyQPwo/5IZgX2YCjifGoS0yFO3RDKoSfNXCzNLVKpCUhB01DukFpQBSh6SMSUryjkDSTCepQ9KWEw5rjrbijiUrVs2plK7X5thAtHqlCg4QVDKt47tQP/wt0F+toPPn4f3xaeAQ1ZthqsuGZ24x3LI499IcWJbz+FidCesVObBfVwjnbRVwPMDz75npGiDf5e//3Cy03V2LM5dn4cz4WLQT1rJAgYPPbyaEjb6jYOR5Z0rie8xLgKMsC50lWQxow/EX/9G47PxemHHB77BgyEA0DBiI+sFDUHrJEGRdePG+2PP79KwR2bP9z98mXtrryDNpY9CUHwSUEJKlyXAw4jWkJvCkIfgqk+Asi4etmI17XjzM6TGwJUbCRSGN+6IoWCYnwiHjZrdWw/6HeiXTfeNgupMN1OqxwPwSdNYnq27IIymaMzzGhuF4ZDBOxRA0sYRMbAiOs1E6GOWLQ9F+yuUJJI8nsvFICmQjFcyIPqRrf4aNVWMG/46P0a/r93d/jNTRFDWnRyrJSu3NWZFo9OpURhjOZEXgbHa40mk2aqeyQtVeuxyu1g6UJI+zuZLsEe5VqMp6bC6IREthlFoholUcJNVGOLaVyGVG5pVx6CyPUTJV8furSVDFpwWStglJsE5JUKC0zkiCfRYhOZfucn5qFySxiL/JknhYV+bDvLoAxrWFSq51DF7WpQEbM4EthfBcMw72G8fDfm8DbLsmw/FQFdxP1aFlzwpYz95C8HxIq3ZM5mKoCf3WrnmKdiWLXpLOc246iDYl5B+DpN6tqpKEXOeeW+9+1WFp93inNLoa4TR+jPYzd6Dxp+tw8L1H4TzwjRpxNKAdrerfab7fT/hZ6JI/otu8qwGOZWnwzIqHvS4G7olSbaYAhvHJaJ1E5zeRAKtlcFedCVN5GowMBI38zU3ZkQoaZ9N5nGX4aUojFJPH4Gx0GBpj+NszWBOJaxQwylijSHeMkrVqZFBpTg5TsvBYszF4dGTFKFnzCcs8bZqJjUGnUnaMBtEUwpRgFcnzSGLPsdhg/BQRiC9D/PBpwGjs8RmCE7H+aKtOg21eCRwryqgiuAhI14p0uDZkwLmNgejdFTAzODK9NBXON+fA/dY8eN6Yw+NhIpzrytXx5uLrIZzBcAhBHkLo8zWao/3VHE8wOJC1YT2luThakILXo0Zix8i+qLv0d5g45FJU9b5IzbPOOO+iQ9EX9N0XNXLkxz2tZ8/2H7GNH6hBsrUoFKhIVMtlOXkCdyTH8YRmlFoUDWNeONpkjliKZO7xhI5mJBofriDpLIykE0rRKsLcNxl4eibw5HS4Hp4E5/3j2YBPBC7nfk4h2qoSCRYCiS61KS2KDQ/hkhzLyDwOLakxaEyKxPGEYJXYI5A8QjgK6M6mhynJ5V9CUCCpX/81SErdTNGpxGBNvE9uP0PAKlDmRHlFELLBPJERjGNpgUrH2XgeSwtWLvNkpg5MDZ46JHVQttM5dpTFqL1IoCiAtFQnqssdZdEKkgqQXkha67mfHK8gaZmeqFL4dUjaF6WrLldVwHtxXBckO1fnKznX8jtfz0ZtDfdbS4DrxsO6oxbG2xmg3FsPy64yWB6uxPfvTMKpHzfD3bKbpDqkUk3/3SBpkfmT3SAJ66fwWB6h1X2Yb3Afr7eogggdxGML/zXSFR9rehU/7t6Ew/eNR+sWQmJJMo8xHr9zcmCrJSwnpKOD33PzhEB0NIShoy4VbaVJdEnJcJdnwl2SpCBpkCLmmSE4kemvKd0PJ1N8FCCVeAyeZaAmkBTnqCfl6G5R5khK5qo1NUITAzGBozM7VslWEKVAKZC0FyQoOXLjFChl0XI7n0ckf2fgOXE6KQIHokPU2KQk8RyLClRQd08vBZbXAGvGwrmyWEHSsYyB0uZs4IZSeB6ohetZBgtvzFaAtL8+C5YXGtC5sxrG5floq2RQEOMPd2AQXAGBCpKtYQFqPqc1PRrISVaQtBdk4IfUSDw64kKs+E0vVPbrhXGX9ENNv4tRft5FB1J6nd8z/tiz/Yc5yfP7HPhjdDQacxPgHJ8OTM/EmTwfnjRscJLigVQ22PF0kRFhMAT7wRnkD0QEAHF0nkkBsJaz0ZgXj87bqmB5iiflsxNhemEKPH+crFYcMN/HCHdnKYybs9A2n0CsDUNnURAMWUHoIJAakxglM/puyY1Bc040zhDGkhTRIqn2hFMbodpCKElGodx+NjVYSe/6amND1UrnKwBvTD4HwxPxhFxcAE4m0oWycTtNF3AmRQOngmuqdMvycXzOk+mhSuIqVZcrX1df+kigKTqZGaQkUwHOZIeowteNuSFoLQhDmyyh5FVHMd1FaSRsFWwkxxKENQTluFgluWyv4/dcn6SNR0p36+QkuKalwTUrQy28bJmdDtvcTDgW5GiLMC/KJCyz1eRwp4xPrsxRsq/OISjzVAUe9/oCuDYXwHN1KZzXV8B5E13kbePgvKcOxscnwfrWAuCbe4HmV+m+3iaLPlTdm9ZuEDN7s2AdnnMl5Bz/hO5WffFmVdxcFZV1K3ncGoTNKpnIqtYnEXWqRBwzjG4D7A5Z3+RHVQgdnq8JTbrhHx8D3rke+MN8OK6ugmF1FuzLZIkxOq0FyWoajWlmKgzTCMkGQoTft4fQdPH7d4yNhr0iGrbyKFhKvSqM0jJes0PRmhGE5rQgNKUGojElAGfp8E4k8nfn/hSPrUY6xubkUDWmKMk6nTzOzLxdZOExqU/3cNKl6gk7brpIT77W4yKyMei0MKgy52lyFhCYGRF0oGFqb2RQ1hw3Bieih+N47AicKQpUpQvdKwvVklbSvdq5IhGmNYlwbE6B69Z8WO4vRdvzDJLemAbPewuUHHSUnt/Xqvm2Mk1L8gwcEXyfQXzfvn4EpJ/qNj5TQPBXRAH1hG5FJtqLi/H6iCAsHTgQaf37ImaEH0KGjPx8TL9Be2oKS//Q02L2bP9xW8NF/fc+HMTGIT9JrZeHBjY2tWzgJas1kSdnsrYIqzmSkXNYIFzBAfDwBENMgIIkamNUI2W5myfk01PR/sd6BUr303SSD9YoUDruYqO9vQTOy7NUgoo0WHY6UCPhp+pg5sShLT9OgbKJjq6NEb7cLoWkDYUx6CygS8uNVrfr6syOUhJAigSW7ZlRXUsViXs8mXAOjmdTQ5V+CcljKUFKx9nIKUlyTlqwkoBSul41Bav5cjKpvFHcY76m9iI2sMV0AXSPRjpJY1kUzBX8TugidUiKlLvxAtI1IVnraqWTNE/g7VMIzOmpsMxIhXFGigbKeWz852crSDoW8/JlOQqU1hXZSrbLsxUoHWtyNW2Uwt+FsF5bAuv1ZXDcUgX7XTXoeKQezc83wPzeduCojOm9S+h8ork8z78ekjY6SfGUAsh2ArKD78TsHSXVZnkeBCwfw3joBTS9fxtOPbkaZ++ejdYd/GwMDkxrc1Rmp3WxJD0lqfmmOiQ7p6b9DJLO6hg4KmO8oIxRkp4SyXg15IYrUEqPSUt6sAKlQPI0gy9dAskmHlcCSeUmed3CvTWVgGOQpQPSxeNTpn2IXHxegaS7OFrJXhyjQGkt0CSQdGZHwyVJcvnxcErxdAZqEkB25oSp48S5IIsOslQtjmxbmw3LmjQ4NjGgvYYu8q5SuB4eC+Mrk/nTzgHeXwTb7llofKgCp69OR9O0KDXlxRA2EqYgP7WyhyyD5Ujmaxclqe5/TGPANTYZHXnx+DIwEPf3ugjTzzsPsRf89pB/v0v3lKflPtXTUvZs/7FbwW/OP/JgTLTK6PPIeE1OIDxFkdq8LoLSFhUNE0+qzohQmKKlyyZYddtYM0JURC6LBZvYOBsfmQz7czNgeGayKoGFJycCj9bB/nANrH+ohf0OwvKaEthX5cI+i9E+Gy0DX8deQqdVEA8DXaRM0JaJ2h1ZkWqdPm0pIlmWKI6XY2EskPX7otVKDMY8cQDRXRO71d/kaDBtz4lSiUeNjM4lG1EkzlMkLvRMSpA25y05QO311H4lNpAq3Z+NpXS/ChR1aXDUVqeXZZM66AwEjqZyOkVG69aqOAVHR1W8kkDSUZugre1HOMpYmWdSqpJDQDn+55DUQWmfnQEHAam0kIHFIu4FkpSsC2hbzu9wBa+vJBwvz9O0Ph/2TYWwXFkA89VFcOyogJ1u0v77cWh9cBzan10Ox+d0YG2PaTVMYYDVJTiyq6QaHZD/VYk7apqJ6sLVChZIEs+5Ll8d0ja4VFGBwyQq3aPjL3y/bwFf3IPWFzbg1N2zcGrbOLRJwYoNWpcjVhEUkjS2IBVuHlfO6SlwEJD2hiy4JtMdTUyEa7z8DgxUxhGK1fytxsao38rB38payuslAssYwpLHVG6Uqs0qvRjSm6GvCynd9wJNUUuylrwjSTqm9DB1rlj5N7bsCNgZ3Dn4HHa6RJGFQZSthNcrYtXr2SriYS2PU1Oj7EWaHMUMRstkqIPvvSoRRh5Pqmu+LgVYQAe5ogjudaWwbCxE+4YcdG5moLSNt99cCdxXBzzWALw8D3jtMuC5BcAdE2Fcm4nmBgaTBHMHz5/msUnoHJ8BVBGwpfxOygnHcQwiSgjh1HBYyrLxQU4SJoQNRODQ8zFwyMV7Bg4a8HVPC9mz/cdvpRf03bdj+DAcjNYmR6MuVUGyJd4PzZF+6GTk2RYQiNaQQBijwrsgKVEy6pLhviwXru2VsD4xDc4XZBxkGjUFeHoy8MQEeCjXoxPhuZcn844qFQ1LhR4XQSENhkDSTBcprlCAp7IH2fAot5gXo8Cow1EHZEcu78uRLrJw9XcCSFUBJVNzoQJJmb4iUs/F59XVkhmudd1mhCpJar/odIZXXjjKGKW26G54lwSQrYV8broBAxtWIxtYcwUbvMp41ejaxsZ3AVKHpADSNV5zjwJHTE5TchKYAkoBpN7dKnLMyYR7fg7ci/KUdEjal2rqDkkFSgLStaYAzg0FcGwugvmKfJiuKoT9+nI4bq9RkGx7qAbNTy1B0zvr0bpnBwytu2CzNBJIjn85JE1d8ihIutGsIGm3fQZ7224YvrwPzQTk/l3zcez2aWi6oR6ma6rh2FIOrM7vgiQW8nudkw73TH630/k9Ts1WkHROYnBSn6gKmGugjFOglN/KKb9TRQLs5dpxaCvm7YX8PfNjFCwNhF5zZpRaG1LGxPUufZnrKEk8ks1qTNNAKZDUASlu0JHPPZ2iANJRFqNeyyXHA2Flr0yArSxewdFZEt8FSFSlKkhaqhLUwsmeBlkOrIKfsQTONcUwMRDq3JQHy1UFcN/Iz88gCA8wGH18qspodTzagI47qtC6JQ+tK5JViUPMkaXEeO4tq+d+LDA2XZ077VnBqpsZYzNVlvqJ5AjcN6Qvknv3OnLZjKo7r+mpntOz9WzaFtGn7w8rhg3F32Li0JEeDxTyhC1LU2nrx8MuhcE/CO0+/mgLCkBrlKStay5MklGsbMyxrRbue6fALIWon5kG6/OTYRNIipN8vB725yfBSndpeWw87PfVwnrrWNi2lMC4OBNGRvkyhmfka5kIJ5lH1pYaqhxfIwHYKmCkexN10smJ2qjWbDZUmUFK+vUWnvSyl6WM2gWgBJxIum21pY00l2DM+7lkCSRRY0awynKUvSRyyDhoK99XS16EUms+IVsQoRykROfStSoOUoGejZ5duYTYLtmrYuAYG6sgKW5Sd5Tu+mS1IK64SpFzMq9PTWPjnqFWVHHNyYJnXg6dUa6CpUDTOTcLtvkZsC/IhG0xYbkkpwuazmV83Ip8uFcXqDUnxU06tpbAtYMN4m1sGO9hQ3p/HWyPz6Abm41TH8xG88G1sHd8KvVuCMpODV5eKLq9cnWVqPtnTQHRpplYuqTdrtePdTn5aMdJXvhWrZEJw53AkeuA5+fBelctWm4ogXl7CWxXFcGzkXBclwdI0fcVdJMM1LCY39sCgnFeJr8zfi8z+P1My1Tu3DYtBZaGJFgmJqgiDpZaLcvYNi6BwIxXv5elLFZ1vYqjtBdqshFy0jshkmBMBWJ6lZ2UIIIyEB2pwTCkh6p5kDLNw5LnTdLh3zsJQXNVrHoNe22KAp+tJpmAJggrNFAKoAXUVt4m82jbCHJZlNswKx3WxfI5S+ki+dnpIjuvLEbHdXTRN1fDdQd/27sn8bedBtw1De6bea5truSxwe9lFjW1AJjNoHQhz8PZNYQhjykGkI2pI3AiYwTOlPK902GfkoXBS7LxRFgQpl94AWLPv6BnWkfP1rN139bU1980qVevI2/7S+m5KCA3VkFSytI1xo5UgOwOydZ4SaaJgmdiJiN5noR3zgIenQfT09PR9mg9Op6sheHp8fA8UqsgaX12goKk4yme0A8Tnvdxf10NnKsKYSMcBJKdWaFsbAJVSS8dkmfZ6LQQYjocdbUTmG3dYNnmva2TUbFRkjC83bICSAGmDkeRjHFKF62Z91v4OJEAVaSASDDqcJSEoXY2eK35fJ6CqHPdq14HKYDsDklpaK0SOHhlq4xWoLTXxHe5F5FcV8CsT1KyTUhQoJQMYcc0NqIz0uCgo5QuVytdkXS/qrHKWXQGkpQyPx2WhZmwLMpQkhUfZG9dlqWm4dg2FihIOq/nb7NzPBtQwvL3tbA8Og3Nz81UkGw5tA629k8AT8u/HJJqvFIq5ciApUDS/BnQ+Ee07tuEU+8vVN34nbdWKkhariuFdWuhqjzkXsMAbWX2OUguyVY9FFhIFz4/T9Uzdc3MgXNmupLqzp6SrFU5Gp8Iax0dXU2iAqUEON0h6ZAuUK+shQlKMiQgPR6yjqQsk9WZEcagMvRnkLRIZR3vqiICSRddogIkX0cAKRJY2quTYK1MJCAFlHFKpoo4NY+2UzKepzNYknVaV5UrSHrWl6r5sNZtlQqQjtvqlGy31sB801hVdallcyHaV+Xz+GAgJb0V/Dwevv8WvuczWQzs4vxhSvSHtTiUQVoSMDNTfUct1cl413cotvTqhRoqkUHzJ3/+ZHRPy9iz9Wzdtsj+5x26NizwT5/lZuBUVrJWTSctGh1jBqF1lA/ax/ihIyAAbWHB6IgNgSmPIJ3Kk3h1HXDzdGDXXDgfmobWXbVofbgGHY/XwERYOukqO1+eRDWg88UpMD0/HZY/ToX9/omwbOcJvyIPnVMSYCii+0shjBmdt6eFoJXOTuYsSndnZy4bobwQJWN+KAyFYTDy8UaZg1gsywVFK6lGrjxORebS6Jjp9gx0fqZcTXo2oYUNmFJhtJIahyIIjXSLIoGtyCDJHJSWscr3URKl3KP+OrIXKdfoHYdUbpJw7C4BooBRh6QAUzlLNtQi6/g4NW4mWa4i61RvEg/dj4nux9qQqmSalqwBc06GSuoRZymShZpFVjpzO79P+7oCusliOK6uYDBCF3kT9zur4d5Vj86np6D1g4kwHV0GjxQE90iXa7tabLl7so5DLeCs//tHC5y7vV2rmrqvIynXnbJSB98H7PuAlj8BB3YBn2xAy+u1OPNgHmz30jndVAjLjQVw3lgG57VFcF5ZBNfmItjWabKsKYDp8nyYl+fCtCwHZjps0xJvIDFfsoXpyuZmdgUe4iytU1K05CkvLHVHKUGPzAt2lMbRCcbCWZSg5CiUOY78rfMYBOVEaa6Rx6ghPVj1gshlXXKfk4GYp/jcvNjukHSMS1bdrqprtTJWJXp1jI1CW30cOmbz91zB33AjP+vWKhivyofhmgIYr6eLvplO8bZqWG8Zx+vlMBCcxvWFMK8sVK7TOSsfrro0mPn+LDH+6AgbhUNZfjhRGAhjRTgwhfBcWKhpQiYDwFQ8mxGF2ZdehJhR/fbMLK+49/s3PozoaRF7tp7tV7Y5F/720DO+I7E/PgKOZDrKOFk30l9BskPcpL8/moL80Rjmq8b5rLWM0BcUw31FNXBHg1oYVyDZ/mgdDE/WwUI3iZenwbZ7BixvzITplWmwvDhTjVvisZnA7XSUV7IRZ8TsqUlmQxOCTgJSJnnL3LVmusgW6W7tBkgzgWUuiYS1LLoLTu5xKV0Njjg66brSpYAp3WbdpCdLyBiUSAD5a5DUQSnZqzogZfxRGtGu5IsyzT3qmayu6kQ4q+OUgxRAWiui1HjkL7tc1XUvJG318QqSKnlnSrJqwLtDUty2QNI8PUU18Kqxl6zXBZla96tAYH66gqSMVVrX5MGyvgDmLcWwX0Unsr1IJXi47h+P9icnoem98eg8tATofJ+oavmXQ1JGIuE+C7R/Devep9H84TUE5HycfrESrY+XwH5fOaw3F8G0Iw/W6whFQsO1tZjHTimcG+mw1hfDurZQQVIAKbJcJvKO4S6gK5+Xob4z17xsrfuazlKSe5yTJYEqlb8Rj6G6ZHUcyvEkBTQkscXF46M7IC250V5ARsGWK4k5UV2A1KGpd7v+P0HSVa1JxrIFkp3V0eicRGguzIZ7XTk8V46F++pq2LZLtnKpAqRLpvXcUaPcZOvVhWham4vOtflqHqSRn6+9PhmNDCrPxPkoSMo85kbJtp6QDNA1YlEpz7cSYHa2cq5HkyJwZ8BgTLvkvAP3X79hUU8r2LP1bP+HLaBvryPzfYZ9+kRcKPYnxwOhYUBQMFp8fNA8ZgzauG/39UVboC86IvxVbUorIeSZngesqQKurwfuIvgenQE8P1ub1PynBXC9vwiO9xbA/O5cGN6aBePrs2AmKK2PTOZJX6cadOucNHSOjUBrrowxhqjknHa6PJFkBwocTXSN3eHoGJcIV21yF4ScbIxEbso1Lr4LVDZJuffKLhmFXum3SfKCSUExvEviQEXGwkgFQUtZdJekQdMzWSX545xi/052AlPeW3cnKZf1bFc1HWQyG2a6GufUVJXAo2e5Wr1Sjfl0NvIzM5Vkeoh1jtbwy9QA+e7EKTkWZqrxSfuqfNjW0FlsLlbl6mxXsnHcWQPrPbXqe298byLMJ1YDzi8JqFbvhH6tLJxSVxepW+kfhaTH5VaSKSB297nXEUBqSTo/AW1vwPzdrej480rYXp8H59PTYP9DnZrnh/vGw37LWFh2lMN+3VhYr62AnQ7LcQVv28jPt7kSpvWlqsCCYWUuzJdn8TsgEFdkqCo8MvZtWsLvaUk2nEty4FycB9fCXJU5LOO/zhmZcDSkwTEpDa76VDgJTDmuxFnKb6/cpFcONV4ZrQoECCB1UCrlRGrZrVkyPzIC7rxooFBL6pIxSAXG2tQuOWuSNNUlqjFS0+Q4FfSoLnP+dhYGAoZtpWi8OQfGe8rgub9aK/K+cyywgwBlECRBkWS+Yn6BcsTN2cE4mTQGTRmBatqUuSQeJxbGw7AuD6YNRfzO+H3OpCOtLMJHSTG41m8UavyHffrJu2/0uMeerWf7v9nGXfSbI7eNGoTPghmF+voBAYEwBAVpoBw1SoGyNcCHjnKUtk5kRoBaI9FAd2ORpJGbquF5aCrw4lx43p4PfLhUW7qJcnywSIHSRHhaXpwN5xPT2AA2ANfyxF9epLIQzaVRGqDyJW09RsleqmUIysRve7euTR2SujPTISmAFEnSjIBSXIG7Qkt517vRukNSJpOrCeVF5yRdtSI1NUAfY/Qm5OhwtFcn/EIC7vi/k+4ipZtVB6Qk7uhTQbpDUiROUiWaSJegAJNOUkBpm5GhZJ6V5gVlmgKlY36mkmsxG/3leQqSFul63KjVdXXQeeHWcbDcXaMg2fbRVLiaNqkpFv8OkLSbvoDx6NNo+XQ7Wt65DMaXZsL2xBQFSde94+Am3G03VylI2rZXwXx1GaxXVHTBUUApeynVJxWJTKsyYV2RqQApssrcUgkeJAt7ae7PIOmey+9sZhaDEwYck9PhnpCmqS5FG0fkceYpS1Byl8ZrztILS0d+tJKAUsGSkFTTQDLDFChdMm6fH+PNfE5Q45DOmhQFSHed9hoiORZUpvMMXl+Sq5KvnFeWwXFtOT9zJQx3l6q5xtg1Dp7bq2DfUQLHVgJvYwGcqwpgmZumEuBayyTIDEVHXriaXuKuTgfG01FvKoJxPY+B7bU4KWPZVYn4NmgMHh7YF0t7n3eo6e0X43pavp6tZ/u/3Mb0Oe/A+JEDv34wKhLmuHR0REWjMyYMZ4MJxFHD0TZ6FAw+Y9DBfYvvSLSEjUZT1Gh0ZAVrDm92BrB1rJZx9+Ji4M+rCMrlwMcr4P7LMljfW4jO3bNheG0mTC9NV0sg2e+pg21bOTqWpaNlUjQaK0PQXhQGY3GUSqRwlseqFHqZ+C1p9DqUZHK+dFfaJflF9nXabQIiLVkmRlVY8YwjJKu1Bk/LYoxWMDaVRCp1d4m6ukPRIt2m4kq9zvBnAKxJ+Ltu1F9KZbDyPcp71QsJyG0yBUbkYHCgEne83a0yJinqgqTM+aNUVyvVHZLiIMVNinRISjUey2qCYYMGSdd2NpC3VcBwzwQYXlqAtk9XAqY7VCFxBzGolaU7N1fR8gv9o5DUM4JcTl4nKC1uTXa10uVx2FrfRPv31xPe81W3vOXpicBD44F759A1TYVn5yQ4rq+Ba1uNqk/r2EIXub6cqoTj8jLYVpfAtZqfc3UxPAwOPMt5DF5GQCxJA5by+7mcQJEksRX5CpTiKO2L6DYX5ihQ2qVow0x+n9PTVUAikm5YPcFHd3wSlKljT+ZWlmtj0xJkSSECveyc7iRdmXSSWZHwZEdpUGVgpgK16mQFSuf4NO0YmJKmeg9UchHfk1rl5UoGm9v5uW6qgOV2OucH6Jh3VcF9RwUdZLlaH1NNfSFQMTdHzfmU9yCv7S6Ihac8SVXOcs6iw1w2DrhmCpwrGUTwtiNZiXgxyBeXX9IP9QGjPv7+o498elq9nq1n+3+5VQzsvff6IYPxbb8hhGA4jHERaIsMRqvfGLSMHIE2SkApJeraI30VJBuTfegqfXG0zB8n58SheWs+2ndNgP2VeQTlUng+vAxOukrLnxbA8NYc5Satr84CnqPj3DUJuKlGJZwYZyShrUaSZCIIshjVuLgq4hQoxUXKPDNprFSD5a1eo883dHhB2R2SUmFFACl/p0/R+KUz1BNufil9rmN3OCqnWpv4M+kwVHMhf0UyJ1Ico2oU+T71bla7LhmP7Ja4I1MVdEhKpqt0B4okABHp3a2qi9XrIkXSyGrdrdq4pG1jkepudV9XoCBp/v1kGF9eiI7PLwcc9ylI2lV1m38tJN2GdxUk2/+yADYGUKYn6+F5sA64b66CpPvWiQqSbjohXFujIGlfV0ZV8LOWKkg6Ly9RMHSvygPoIiFrKy6TvYBHu+/XINm929Uxi4EGv2eRZyqd5VQ6S8kSnUDg1vM3HJ+qnJ+rK+DSeiVUN77qgo3W5kjSUQokdQlA5TGqB6NSc5QyNqmmADXwNQhn0NHiMr739YVwX1WilRa8dayqmGT6fQXa7qQb3EEHvK1YgyR/Y/OsZBjqY9FZFq6eHyWJQLk219I9gZ99XhkfNx5tczNwpD4SP6aMxmsDe+OW3/Y68lRB3kP4ogeQPVvP9v9pG3nB+QcKB/b5YWdUKN6KCMLRlGC1GG17VAjOjhmB08OHq0xXW0wEHHFRQGo8kM4INiUczsRAdBaGqYxVy4YyuO9qgPONRXDvXgLXW4vg3L0QjrfmK1nfmAPjKzNgfK4BlgcnouPGMrSuykTLjDgYx0XBVRoBT5kGSBW5V8ZqgKxLVpLMRMekFNWY2aekqjqoUuZNskVFUlrPWhPT1d2pT8XQpU/F0KEqIPxV1cQqyUR0mZAu1Vu6S0/A0Z2i/RcSiHcVDvC6Xith3qX6eDUNRFZSsU7RIGnzAlJNBZEkE6nrOjdTyTwvTcvY9M6btEtiCiWrhjiWZ8O6iu5CILlZy3B13JAOz90FsDw0DZ2vrEDbZ1tIqGcAjwl2t+sXFW+6labzJtz8o5B0u51KMtXD3L3gubr3JC98AtMPd6HjgxWwvb5A1Zp17aoHHqCLvH1yN0jWEJLj4NxSDuf6EjV30LGabvnyAlhX5sG8Igs2fn4FylUMDGS/MhcuAlJNN6LLloQegaRlcZaab6opV0uEkoxh73esxny9QYnU0xWJ0zRPTYWRbt/I36uTv51aPJvAlKlAZum6l6zpPM3VOTIiYU+P0JbJ8oJSkr3MY+NgYfBkmSKJWBkwzeFzL2GAs7ZAc5HXaUk65jsrYL27CqadpTDvoFO+is5wUwk/EyE5JxtGHkudfF13OUFeTvdcSNjmpxKW0s2aB9PMfCVjaTa+8PHDiz6BWDdq5McP3nbNtJ5Wrmfr2f7BLavPeYeW97tw3+7wQPwUM0ZB0pIYjY5gfzSOGqUgaY0O1yCZEgdkUOlRBGUIOgpC0VIfjdYVuTDdVAvD8zNheXmulpBBSLreWQj3u4sUKM2vzaLbnAXPkzPguKtOFRkwLUhTkHOXRcJZHK26WpX7q4rTur4ksaI+VQFS667K8CZepGhFw9mAScaovU4DpUze755h2gVFfb6i93bVdforY4o6HH8NkKqKSzdIqmxVbxewLgGhrVu3sO0XjxFIipMUQNoazmW3ChydszO7ICkNt6g7JLVqPF4tyeyCpFm6WzcVqexW540ZDFbyYXtkhoJk66ebAedzpJfx3wOS9s9g/eletL+/HOZX5ipIOn5fB+d9kxQkz3W3joPnmmoFSdcGbe6gc02RAuWvQpKABK87VhbAThepQ1LWYRRQdoek0+sou4NSCjj8TLOzVeKUjAtLl6yVLtM+8VxxACudotRi1SGpACmre8iiy/mR2jg43aelOl5BUjKW7bOzYJ2fpQrXY2OJKlDvuoGBDV2kQFJkuKVYdb3i2lLVHSsF3I0T4tBRGw/ruGRgbBbBmKoCVaTwfMyTnpMMnOSxu7cgCF/6D8N7Awbh/osu2Yvnn0/oad16tp7tn7TFXtrryIbo4fgsdDBOxgXAmMmTMiVWLUbbGBKAxvAgtMWEwxwRAkRGAOGh3AfTWYbDVRIDTGWDtakKzY80wPD0dNhfmgv3awuB3QvgJiht786D5e05sL4zl7CcA9MTk2G5pUp1FTqm8eSviFLl8SThRs1dkykWBKQkVkgmon0KITI1U6vTKWNJ4iYpGd+TcT4dls76BCXH+HglgacOUJF+vbvkcb+Eog5K/Xl0yWv8TDoIJyQpmfk34nD167oE6AJ26yStq7V7MQEluhfdyaj5ffPSlQSQalqDt/C5LvvSTAUJ66osWNYSBJsK6CTL4LqFjvveDFVMoPXFy9H26TWE5LtqXUm729Ntsr+2GLILNnjcIrtKuPmHp4CoZZGdCpAGVeNHk1nV2mniA/bCuf95dPx5O0wvL1OVm8x/GA/DfRWw3VOpqu0YbiyH8fpSVUzAchVd4RUE35YCmDfQNW8mIDflwriJrmlTMSx0W5LJ2Uln1klgOpb9XNLlqoNSHKVULxJYWhflqOkXAi1dtgXZMCw+J/MiikCVSlPWuQTr7FxV/s4xkb/HOLp/qaIjpe0IS3tONGGpZb66CmPVmKSdUBNAGnmcmhj4GBbmqLnCDr5fz7UVcN1YCedtPAfurobhnnK03VEM5w2VAAMEbChXU1hME5JhIpgttfz9a/j6xXztNB6b4WGaEiLRmRyBw9Fj8F7EAOwaMhTbYhJfPfltT4GAnq1n+6duaxuKd03s2+vIR34X41D4KAVJFPDETE1EU2ggTgb5oikiGAZedoQEwxPoDwT7wp0QxGg6jKBIhoER/Mn7x6P1scmwvjAbzlfmw0kgOnbPU5AUqSkiby2kuZkJ3DMBuJJRs5S7k9UJyrWEB5kDKWNBbjpIz8R0lYnoaMigi8zqSrZQbpJyTUlRkmxZmX8ogHRNSPxVyX2/hKMCJG+Xep9SmUT2Xa6x9u9h+muQVK7RC0MBpA5E3e12h6QA0tHA9zud731GunKOIh2Oelk6fV6kjKc5Fmer5bOkbq5tYYamJVrVHYGkdR0bzyuK4WLD69nJ17wnHeZHpqLlhVVo/+xawul9Vebm3wKSngPAsddg+ugGWF9bCeeL82B9aAI67ilTCwkLJDtvKEPn9mKYthX/HSQl09N1dYn6rM5rxsLB48e8sRgda/LRIQXgCUbn8nwl14oCtdfHJn8NkpZ5mUoCSBm31AFpXCJg5fe9hM+xuADuxcXAQun6LAKm5cFTn8ljlMdeeaKqtOMuYJCVH6fmS6KEx/LYFDXRX9yneSqDnTlZMEmm7doS7ZjfMU5lIeOuGjjuq1WQbL29CO6bxgJXVarpHoaGRNXN6pjI83ACPwNdZFt6DNpjQmENDoKN52FHqB8O+g3BFyP7/PCa3wX7fhg37nY8/0qPg+zZerb/im3gwIFfXjHwfHzMyPRgUSraCtKA4nS1rE9jzCg0xY5Gc7QvOsID4PYPBILoKuOigQypYJIOw9x8mK7MU+sa4vFZwB8XUQvgfHw28BShSGjiTe7fmA7bq5PR8WwNTPdUw3plKdyzGLXXxME0NlplrZrpEE10Wh2z02GcxwZmfrbaq7Gj6ZqDFLkbUpWk61K6MFWW4mTCqEGbTiHdXDIepJ5vkjZZX10mUEVqvGl8nJIsjIzaNCUZD5VxUSlj5pqUroAsz20gGNXjJ8TCOClejS2KzJO0cUbb+FRG/ARkbZKasK7D1zVBgBwL12S63KkE6XS+l9kpqnqOdDl3LOD3LQWq56XBw9uccwjSOelaNqZ0C1LmBVlqDqBUmjGuykX75RloW52Gtg1pMF6ZCeM1OTBeVwnjXfVw0qkb3piFli9XE04vCwqlIB2BZVPSF1l2oVnJ4IXaPwrJDj63SBZcdtO9eryy8za7ehdOWA3tOPbTDTjwwXocfHM1fnx+Bb5/ZiW+enwJ9j67HD8+swx7nlqELx6ejb/dPwWf3jsZ3z7QgP0Pz8Lhh6Zh7511+OHmMhy4pRKHbyrHgWsL8dPVOTh8TT4OX1mEgwTq/k15an9kawFObC3EsStycWxjFk5tzkbTllxVFLxlQzbOrsnEmeWpSs3L09C4OA1NS9LRtDwTjauy0bgmF01r89C44ZzOrs7GqeUpOLU4ESfnx+HUnBgcnxmJ0w3haJkUy+MjBqa6KFh5jFga4mGaE4+2lYlo2czj7kb+njvzgbtLGSSWwX1fDZ30BJxlYHmGgQ1u5fmxqQ7t89LRMTkenmkpgAR4JeGq9J2sSHIqKgLfh8fjlZBYPJBW8NSeux6sOvjxt0N7WrCerWf7L9569+69d2GvXkcevOS8Q99lRKM5lyDKpqMsSlIrHbQl+uF02Ei0hvjC6UsnGRgMxEYBafEwlCehZXom2jdmwrSzEo5dk2Dd1YD2+yag6c4adP6+Fp6nGoDXpxOUM+B8YyrML02Akw2EKqe2hI3G1MyuaRMCNssMDZDmBTldUuNFdF46HKVYOKalq65L6cLUxywtOggnaeNBkjEqIJbpFeq5JydrpcqkDJx3L2OekOWF6BIky1EyHAV0MnG7oyYGrWMj1WNF5il8bgLPNDFeSYekaxJfR1Ly65KVxJWqVSnq434GSds0BhazkrUyc4syVFk181K6xpl8jtnJ8MxPB+g8sLQQnsX5KtnEOI9QnJeC9kVsQJdnoXNNlup6tF5N53RdIRw30E3uJCAfmKYFJJ+tgevQtQqSZpLq3wGSdid9rNtBy/ksYHqGL/oCrebL3O8GjG8Bna/x8uu8jzLycseLQMvzQCsf38r9kQeAPXfws10H/HUb8MFW/K/2zgM8iivL99plPMHZY2N7wNhgDJgslHPOOeecQAEJBSSBEEEkkREgRM45Z4wBY4xtbGPMYBMMGERUDp1z9/+de0swXr/dN/u+mZ20db7vqKq7q7urqkv3d/+3zj0HH1UCx4rpMCcAe2m5rwQ4UEaPK+h58iPl9Jhe210AbEjjSTBMi8KBpXTtrabHa7PoObou50fRtUjP1cYCC+PpdTqPy+j55Sk8qTj35QSyRfR6LQssChbm/bJI3Fp679wYYDypzTzyfPJCP6CUVONklgmJ1pfQchU9XhMErAsRfFMcsJ9+q7O0z+ergC3UqakIRVuqFeSJ9L/Aop/9h0DuMgBN5n1xe2BvXHnzDXzau9+le+EJi7DnqI3Ycokm2t/YPhzwytVF7757/vKQoZBYkFr0EhRek+t76B4zAKrhQ2B6R3DNsGFQWbNJ+SP5cKQhwZIaCA+gjBqQkgCYirx5bkpdlQ+MS6hh2UuAPJ6Krk9J5XySgvZjCWjfEon2xYGQTWbDWY4wJLNgFlJhpCKR48ydVXzgJbd41Qc2PElwS7XhtSp16XbQ0Lo6xZqH2PO5aMl2HJy/dJ7lhie+tuQT+xHHqnNYPRuS7aJGibk03uoZTHlkLUv1FWPLkxaYwukY2WNWCivGRliPEbydVCfzDgKuLNEJqjQ25cCN3EUIBukZUmWBI2yITzHWCbJsB64cujLt8ONUV/ww1RnfVzvjSrU3Lk8PwLc1kfhmdiK+mJuB79dV4vuts3HryHI0XdwDxZ0zQPt3BJVrRKI7hKHHUBjvw4jbvICxDncITg/oORAoATUBy6j92fwPvQImk4LABu5/ceAOz6rT/qcn9EaeOJ0VWO4gb6I9aufBPKfp5dO09hm95zyB+jPSmF/Rq1JayuixnDtDu5ZjvY3e3cLfrUcrPfeEPreJ3v+EvKnHH0ONa7TtVdrue1KtV8i/Jf+SvuNTWn5M25wkP0TvJegadxHBdwpu3Eb7uoW+cyttS+vYTr5DWBq3EtQ30vlaTydwA507cjWta3qWijUE+nqCOcH7pxrgzgxyAvgtAvl1evxHevzNVOAr8m8I6ucmAqeK6NAJ7t8vom3ovV/MBQ4SIMvC+b12Q7IrpMFWQIgrlE7UkXJyxfU+g3C47wdYZW5x8PPFtTFiSyWaaH9HyyVF+dX7H+DRoD/wWpLtXh9AHjQCWsfhMFqMAgaQguz3IYek0mo4r8whoR5vR8BAgou5MMcvw4Grn84cUj7FpHxmekG9KRKKA3EckN3n0yH9OA3yPaQqSXHysP8CAZT6VAIQqUiupli1B+YMvrzqA4tAdOBu6HE2NMlgaUpx4BUPkO7EQ+eZs5JUT6HJXuMQTaR1pkITCcTxLBuONXdluiOkybbUi7fhQ7NMYbJhWBa1yudBxtgJTooX9JwpnJR2pOUzSMpS3CBPdYcywx26TC8YcjxhzHQXsuck2j5LEsDmPzJImop9gOmkXpaQmlldSMqHGtBz1JhepsbzJ2qsm0lltTMQngfavqCG+CtygqL0e4LQT9SwkxsaqREnKKpvEQgfQELPKw3fE0huQGb8geD3IzoIil3qvz8kW3u2aMZBtBn3QW36iDY7S1D7FCrTBci0rZBqWrizdblBcKn+Ebq1D2j5EGrDE6iNj0iVPoKejpfB0WR8AI36DhQESDmBUULA7dZ9ig7Nx+hUHafPOwaV9ggUmr3QG/YRMPdDr90GSVcDOtqWQ969EnoCYJeyHp2KFeiULkNX51J0NS9E58NadN6bia7bM9B+oxrSm9OhJBgyl/44Fc3fleHOhVxcO5OB5kMxaDoYjYeH4vHgQCLu7onFzW3RuL0xEnfXR+L+unA8WB2KeyuDuDeuDMfdJaH4Y40XviyzQ3vIcCips9biPxz6WBdovakT5+WKTksb3Og7GLte63MFhw+PElso0UT7O9uLL/e6a/7mc3eWjRyIaxYjAQuCgYs9LzfFSk91On2INvtBMNoOg8luOJrcBqPZfQi6fAfxKFJ2H48F2rBad/p0VyFysNSNpxxTr4uEnBoR3ck0GI+T70sA1kcAS0P4NAZ5sTO6c0kZ5trDVOAMY74TD1rBBE9oWHmgEjdISlzRNcEZ0iJnyAuc+HAlS/rNAPpUbWoJmmzJYMqeZ2qUPccUqIpUJwMxU6vGFKHCPbv/o2PDoZGjYYwew1Um4h24guRQZHMfYywhI5XbmmWLR/n2uDvRDbemeuNajQ8uUyfgq5ku+KrWHVcWB+HG6gTc25KDe7tL8dO+KbixrwaXds/C9ydX4/6V4+h+/EfoFI+JIzJq7NXUwDOQPCTNdJf8DroIcgpcpwb9OoHgKvk35BcIiCeEoUrpJuLRSqBxJnTfl0D5VR50ZwtIoRSTeiGVQg07upcLionUJCtYJeM6TUgZx1wowqyl7wL3vxSSPYiEnCVNJyCzYVddTzIBnlCAjb12K4BrS6A/WQ7szAfWZVMHIQNYngTTgbHA4TzgownUWagAPp9MhzxJGI48Scd2rowe07F9Ts99Sh2KT+j5s3S8J+lzDtBnrEsBVtHnrIiBflEYNCyClEWMLgriOW0xzxeo9YFhrhd0sz2gmukG9Sx3qOd4QFvrJQyjzg0FZtH2NQEwTPOFdopQt5MVutaW0/Vc6gpdKXXUihygLbCFdqwV1NkWUGWNgXzCCHQVUaeyaDTaCi3QmmeN9gwroeOVas+rfsjGOtE16wxJrgNPJMGmP8FyADD8XV4cWe5qDpOHPbpGW+GRkxeO2btg/ICB5/yGDjl14cLp98XWSTTR/kGsOM5vdf6vzRo/eectHk1nGvkhr3SOUEdo/ax4HUc4m/O5WvJgS2gi7PiQJZKYmnMnJUiNzlhfHhXIINlZ6IiuGg901PmhdUcoZAfjoD1MDdr+RGBzDFAfSQ1UGPSTvKGgbVkEJwMkAyUK3Tkk2Tw5VipJxqIZCZSyCS4ckux+HoMkA+FTpfkUlD/3p4V62evIpO1J7ZpS7XiFe1AjhhSWMccSegbKMDq+MIJluIUwpMqy6bBgIHpPV64TJJU+MNanAaemAzfXkjwiGLWS+mvbSsudRIt9RJ4jBLPTgOwzclKB0m+JIAQ99V0ixxNSgR2krRTPINmCe6S2fiLQ/MQVoBTfQ6r9ChLJGUjaDqG7cTO6bi5H+5XZ6Pi6Ek/O5eH24Wh8t8MH3250R+OWcDTtjkP78WS0f5KJjh8qIGtZTt9xj8Sj/B8DknINcLueQ1K3ORtGdj+wPoVDsn1tFGRbEmE4kEPnleB3thQ4UcCnirRtiMS9pd54uMIfTQ1BeLIyEC0rA9DaEIimFX64v5iurTl+6Jrlh86Z3uia7omOqa7ornaFfLorryhinEPAq3GDcrozdwZJDcGSQVI1251HCXMo/sL1U7xhqvIGqn2FSf6TPADqIAnuwec9Yoo/MJ2u12kEz2pnaKa48XSBLAMQiui1YoL1ZIJwFflkgncZfV42df5C6fqy6A/DB2/h5gcv4fqA3+OHt17G18+/gkO/feVmzW9funkkJ3ey2CKJJto/oEUF+DeEvfEOtoy0gdSPetgB9I8dQw1BhgXaUoaiMWUI7iePJogQxNKC8KDCGc3V1DhN9oKUJUGv8OETvI15LkIqrmJqFKZ4Agup0VhD6nFnPAwHk6E+nAjZvhi0EyyfNATjCTVazVWOkJYR7CYS+Ca68zRerMgwc2WlG+TlLtAUkXrMJ+Dl2HM35AlwVdNzclJ6sgJ7dI+3p569PVqK7XF/vBXuFlnhTrE1bpfZ4EaJFa4XW+JGGT2utMflajtcmuuCy4u88XW9P77ZHI4rR1Nx48si3PqeoPS4FjJpPcGNQAim0EjRgWBo2A0oCYy6k0QEUnraY4DmEPkBQEXbSbcAnQTSrtVAB6m7tqXkiwim84FHc4C704AbpI5Ok/o7QtDdQYppTS6wLF2o4Tk/nlROHDAjBKYpAbwqBCsfZZpC6obOuabcgToX1JmYQue3hl6b5wfjcn9eAFv+JcFGc5oQdRvdhF12h0/ZMwUERimglz7LLPCXQvLplBI+40PD54T0TC0RAnf0LFedVAf9rTWQnayGfGsh1A1joa/PhqouGYpl4VDXR8Gwho53A4FzYyrQEA/VwjBIanwhm+YDFak7VbUPzzLEMw1VsuvMk1fUMEx0JGg5CV5O52PiU6fzQioQBC1MImgRDE1T/Ah+rMBxAHTTg0lZhqFpgTeaF/qgZZEvOhb5o3txwDPvosdt87zRscAX7Yv9ubcsEbxpWQCalwdy5amfSvs2w58XTdaQKtUydTqfrvXF1BFcQce1LBbGeSHoZJG1yaPQGjwEKs9BPINPq6MzzgwYikWD+10YP2rg6dw4n9Xs//CCmHdVNNH+Ma1+4cIoR7PfNpaa/abx877vw+jEhh4JSoUufLipLdcCD1PHwBRBEEzwwZMqd7TP8IVkqh/k1LtmkDTwnjQ1TmV+MJHyM01yg3YO9bDrg2HaFgPjISGYR3s0Gcq9aZBsiUP30iB0znDnc+MwmXrqVb7cTdP8uPOGqMqTZyVBkYtQqZ75BGooad9UeQTIPDtBkZYTpGdQL35eODVSpFpXEXTWE3y2ZgPbSLHsJBgdKAKOlwOXa4F7BME2gloXA9t6atRZkMZmIsAWAgAtsQ0m3WZ0tyzFo5szcP+PVXh0eTIeXqrG3c9ncL//xXQ8uFCF+5+U4fbxsbi2OwFXNoXgwnIXfLHMHhfrbPHdSntcW+eM2+vdcHOdC26uckQHNa7tVdTolnuhqcQdjye4oqXIDW0T2PCyGzqLnNBV4IDuQlvISxyhKLEjNW0D9UTqJFRTR6KcLemczKXzvswPsu2RaP44GwbJUULUzb87JGECjyBikFR+PB3G/ZX0O5BaXFcA9bIUdC8KQjsBvmmWJ5rp92feNt2D3Aud07w4JGX0u0sr3SFj9RXLXOgcCFmHGCR1pdRRKraDfoItd0ORLYwT7GAqJniWEDhLXbgbKlw5XBkkWbFjA0umPpvlTo2Eam00NOtjoV8XByO5bnU01CsjoGS5VZeHCsuGCO6ShnDuXdThk6yLEkC4MErwRVEw0tKwIFKA5KJonty/u8oNT4pt8KTAkt8m4LlcQ8fwIuF3zS0Oonp2BnZudBNbH9FE+yeyNStWBNm/8cL1HZbmeJIUBH0+KcHKECgqPXh6OX2sBQxsnmDCcKEiAylJzGCV5X2oRy1MDJfVeEI9TXA9C4lfTNBaHwPDjkRIDsVDdiQR+oMEr32sUHMC9CupMar1RfdMD3RQD75lmT/urw3BrU2h+H5XBK7ticL1/TH4kd7bfCwdXafH4fqdCtxvqkFr13x0dy+CUlZHjTWpNx2BTrUOUJBLySX0uIOWTQ2k4mibn5YAd2j5Aym8i6TsTlQA28cSUFlOUWr4lsTS/pKSq0sCFtByNjV8U4NhqPSDpswLCgKYvJDlDPXlrhrvCWWBBxT5roKz+6bkrGoHS0rOVU85u8/lxV3HVDKpZSOpbeM4lozbuWcppFBjrs+hDkauK3eMZ8PPdI5LqfNR4iE47YdyaiQ1whFQz0yAZl4KJPVp6D5SCsOPdKy49rP0c2zSv4GYJeNupHWj6S+HZDePRdU+S1ogJBXQo4OeY86Gehk4DY93oP10Nbp2jScg5UC2IhaKRZFcdelmh9I1EwzN9EC6VgJI6fnTNUZeyQovUyepgnkAHa8/jCW+0BXROaRzrxvvAWVZLFQT46Asj4asNAKdxcHoLguEdHIoFDVh6JhKapA6ca2zfdEyzx+tiwLQviKUABcDxaYEoT4quXFbCnQ7Uvgwr3xvKmR0XSoOZ0J6IA3K/enQ7EuHns393UIdro3ka+i9DbHUl0qCdE00dGvjYayPgXpxELQLAyGnTqFshiu0M6jDxkZS5tL1VBULWUE4fkoPxbex3vipqqSwre3ai2JrI5po/6Q2+ndmjcVmZjgy9A9ojbflQQimmiBhvlghNWJRo6FPHgVV2igoxo6Bjg15zQ3gARP6BUGQz/SCaqoHh6RuFinD+cHQs7yd2xOgPklgPDcOOJUPfFQAHKZ1aqjQQIBiQ297CVifTASu1AA3ZgP35wNPCGxPFgMPFxDo6PG9BdT+rqMmeT00xtWQSBajo7UWkqa5kD6cDcVPNdDfnQ0VKb+2s3m4uysOV1b64ptaJ3w51wHfzXHC/ZluuD/VGT9NdsRP5Xa4O9EOj8od+STyrklMwXj23A9140V/GRyZK4tJ9U7whqqgx3sgqSKYcSd1qy4SqnZwL3XjSa4ZHFlFFJaeT0mKiBcKfloOa6wAxqeQZMBk4GRuyncV1Dl9L/ceSCqqSdFMITVUEw91bTKkK9PRum88pJepA2C48h8gyfzvAknaUPdwG9o+noLOnaQg12VzSCoXR0ExMxDK6QGQT/ena0VwBkk+JDrZn0OSZa3RlngLcKRzzkCJUj/uDJLq8nhoJ8eTSkyk99H61GiopkVxSCrnRkBFMFYvJ1W3mtWxTICWQKfbkQbDrgwYNxDsNlFHaAerWpMF4+Ec6I7kQH1McMPT6/NYLm2fBu06Upz1kTDWhcOwNAxyetxRH4bHsz2hWBiMexMtISVVrCMYoyEaWEufvTSWQ1JV4Ie2LH/8EOu91jivPA/Xrv1abGVEE+2f2GbXVGd4u9jsNu/3JuY42uGLCIJjPKnBEuo1j7cHplAPP8OJT7Rn2Uea8s3RPofgsjYUzVvD8GRzCJo3hKN1GfXuqRevWBwCsEbpAAHxszKAVaz4bhrwVZUQzbg3E1hHgFxLym17BnBoPHC0CNifC+zMosYsGaaV0bySvXouU63UWM4MEnyqL0/XpijtyW1a5sKr2HMfz4ZibSDLoQaMRSXmWNH+O/K6ffoigtMEZ+7GYgIWywdKMNQWuXBn9zrZUC5zVonDkO8C5LsJXuDO770yZ/dGmetIPXJnybfJ9ew7yDVlBMeJ1Gko94aSllJShJISlv7MEfqx9Nnj7KFnlT56crVq8pygHk/HUOACGQFXPsED8onekJf7oLvCG92TfCGbEgBJDR3TTCvoZgpBKqgPhWZLNJTnC4lYewC9ULTqado4SU/ADgu26fgrBO6wIB2WRODntbdMhj8F7rA8Ajzj+d0tkJ8ohXpbBi+fpqv3hmkpQX+2PzCLrqMaH14JQ0+u6xl9YB0s+TQPSKvpmqp2Rzc97p7pDdkcP0jn+nPndRnn+UExz5s7SxgurfOFZLkPulb4QLkhFMotBMrtUdDsjIFyZzQv1yXfHgnZVnq8JYn2iVTkznQY92QJ1+ZhguLRCcCRYroOs4GtOcD6DGHofkEU7W8YXW8sKMcXHQWjCcyukE1zQ8d02t8VEaQ26T2kmLGEwDuFIJkRgVYfdzxw9MUuR9ft2hNnhomti2ii/YtYQ11tzJu9zBpDe/1b44r+fb944GCBDj9qGHKtYSiwA8YTqHKpsSslZbOQALo7k/e8TR+PheZYOjq3xUKymhqlRQIoWSDEw3meuL7UAzeXeaFxqTvuz3PC3Rk2aJxsgccVVnhSac2drTfNcMb9KlvcLBuDG6XmuFNqgUcVtuiY4swbUQZFZZkzB+PTdQZLBklWxf5pJXvNBAGGukJH2ndbqMdaQzPOhuBnC02BPX+eAfMpIFmeVFWBI686YaDn9PSciaDFo24Jjs9AWejR42xI1IXfHzXw+7eCm8q9YJxIyoLgyFxd4cNByYDHQIl8Z5gIiAywfPpLgSsHsa6AQdoN6kJBuSqKSakQIBUVvpASIKVV1OmYGoTuGRaQzbLmEZwckg3hUG+OguQMdSzku/4vSHb/DJLtfwNIshyyTyGpOFkGzfbMZ5BEHe3vPOp41VInZ04AhyUHJnV+DLOEThArUMzqLxoWhPKsOca6SO76p744mFRbELSLA2BcFiIEh21L4EkswIbyD5EfZk7AOpgC/X5Sm3tJde8mBborEXpSk7904450nlrRuDmNZzNSL4lA+1RPPCqywcNcuv5Zh6tACBLTTXamfffj1T2wPpWAmg51QwIeTXHHzUwrPAgagQsDX8eF/n1x/KU+V7HvsJXYqogm2r+oub7e5/K4Pm9ip+MY/BjnjM7cMGhK06ApSiZIxACTSAXOIhU4kxqq6T7QVDiju9AKHflW6Eozx5PYIfgprB/uRL6HB1nD0FRui0fznPF4vgtaFntAsjIAmg0RMGyIgn5NJLQrQqBcGADZbC9IproRGFwgqXTiEbDdLICl2A5agp+umODHhi5LXYU5bbSumuAI+Xh6vdQFmpI/vW5gr7Ptydl6y2RXtFa5oXOyO5STPHkIPwMbytlwJim9Itqu0Il/D0suziDMomy76NiYmya6czcSlJkbSp0FJ2gzR6U7dxN9nuACNA2sDBSrlUigZEO3qiJXXhKKl8IiWCsn2EFd4kBuz11VRsdSQYCf5CD4FALrNFdIprvw+7+GqSEwTSeFszyWDyl2nyA101FHFNPzWRgMZswZwNg9wr9W4I4EUu5PocgmtjCX8TmaWmhMAqENjUfRfWYuZHsqodqYB8mqeChXxkBOYJPVBUO6NIgvWaCMqj78WaAMC6xRbojlVU4U25Ih3ZqIzq0J6NyeiO6d9HhPGBT7I6E6mgDNRynQnE6D6mwWlOeyyXOhOlcAzdki6E+XwvjRROB4BQFzEgGzklRjBdR7cqDanQ3dJgLpSlJ986NJ/QUJHZ9sJ16xxpBCnaoMOyjGOvDKI9oZwTAtiRMKR2/NI5CS8lxVQu8tomsjC/dSY7DbzhxzRgw8nfDWS1djhr9/1v69Ny59cfygudiKiCbav6ilRyUsmOgf2hBgZtY46aVed3cPfRnnnT/At75WaIzxgjrdH7psbyjSrSFNHYWWsSPRnmcO3SRXgqWbcA+N1BMbosI0FnkaSg16FFTrwmDYQoDdnSwE8Oyl3jg1gNhEwF1Hz68iX84iBUP5PU3jbH9evFY9mRqrSgF6hh44PgUkX5YJbqzwgKFcmE7C57tV+f5pWe0P9bwQqGqDefi+fpo/DNWkZkipoZKBkrzCW1iyiFn6LP1kTz6PTlHtyZ3DlMFvoit3Pu2ATz0Q4IjJnsIcO/b93L17QOlN++nJg4BUPYWFmatI7bIIXUWRLVTF9s8gyaJZn0JSU2kPTZUjdNUE7JnuHJLGaaECJJdGQb02Dm2knDR3awCNVkid+neCpNrYI2MfnoDys0XQHZkO084SqDemwbA+Gab18TyiVL8mhjtbZ0Pyxk2J3Nl9auOOVOh3pkNFS9m2JEh2JEO+lxTbQeoInMkAzhKszuXA9EkWdGczoDidAdkZ5jlQfpLPIWk4UwacJjCeJEAeqoRpdwl02wvRRt//aGUEHsz1w2O6ppqLqAM21hbyNCuoEy1gSrMnte/Fg9ZQTed3Wggp3FBo50dCs5SAvTQW0mUZaCzyx6UIW6wf8MrVavofKX/OrBGNjb8VWw7RRPtfaENe7HU39MWXfpj29jtYOWgItg8dgt3D38PO4a/joMcfcLnCAR2nxsHwaB4gW4GOxhm4f2Ycbq8Lx725pBinsXtRBMolEdRQRUO7jxrFI+kwnsiC5gQ1ckdSIN+XBNXOBJi2JsFIjaeBQGlaGMKH3tQzfaCoEVwzhx4TOJUzfSGb7sXvXXVUuXJn6+y7mMtmeENF22nnBj57j35WgJCwmtXzqw2HaVEkdAwy9TFQrIrmLqfvlq6KgnRFKFc6ykVBPIuQbn4A9475/oLP8+HeNc8b3fN9uEtrfSCZS98924NgRlCd4QHF9J57bdVCnURDqTepWgIvKx5MriligT+uPPBHQ9DUFNPzJex+JkG1wpcgSfte4Qf1JDqWqkBI5zpDMsdJCKaaFcLLMZnWhKD9cDA6/kgA0XSTmmPQYuhiATZqaHpKImtMpr8Ykk8LOT9NbM4KMOt4AgMtd4VJGI7VdZ6A7NpiaC7WQHO+GNKPk6E4lQzVMVJyh7MgP5TBo0iZa/dncNfvzYBxfxZfanalQr0zBerdqdDty+ABNjg6jq6bQhgOj4f6cD6pyQKoPsqH9nQhjJ9OAD4rgfEMqTx6DkdyqQNGUN1MHbGGOH4toYY6RGPpWmQ5dpOt0ZligbYcG7RRR6udOksdM+m3Xp4I7Yok6OsI6AsTgDmxwIwo6viEUkcnEI3Jwdg0YgSKP3jra39SjY5D3z0vthCiiSaaWZmV1f4U6jFP/NWvUfPrX2HJa89h98jeuM5yrh4oJuVQRwpiLaBYSa3kRlrfDFyfD+zKhJrdf2IN1KIwqLdEQLotAordcVAfSuG1KLUnM6E8kMKr2GvWk8IgSPFalMvJ66KEqSSsqsPiCBgXhD5b548XhkE3Lxj6+SHCPSx6rK0N4oBUzvLjMGWuonUDA/X0QAGU8+j9ddQANpB6WZ8Cw6Zk7votKdBsTIRmbQy0tB+GFZG0H+R14dy1DTHQ0L5p6iN4bUTN8lCol4Vw1y4NgZxgqawlQM8RpsaoaryhIZgrp5F6nMKGaX14hhYGyqdLBkoGSDYcqyv14plaGCBNkwOgrwrioNTQum5KEIdk92xH6nTQeZgbLqRiWx+OjiMhePI1HYuqk9Sc/BkkGSL/lpBktynB1KTsNPR3G4QE399OgfFLgtaXedQpGgfNUVJ8R6iDdIh++8PZMB0ZywHIIp5NB7I5JLW70/gSR8bxjDw4QeA7nschqT9UAM2RAmhPFHFAMld+NA7SY1mQHkqDdFcipOuj0L0sCF1zvNFe5YRHxZZoGjcKxhgLIeNSqi30LPkFdTx4hY+6JJjqU9A6KwhNM/zRXO0PydQgyOjcP8q0wXmHV69s/oNZ45xeZo1F9H9AR/jvYqsgmmii/Qd79dVXr/R95bWrw597FUm9+2H+wMH4ysURzWlBwPx0asgqgbuzCZDLQVIQ0C8DHs9F+8kstBNoOuuj0b49DMqDpCRPpsNwIg3aowSkIwnQHoyDZk80QZRAtDESxnUEyDVxQD2BbCktl8RTQ0a9/AaC0VqCIUtztzUOegKrdgtBa3MUT66uJmAolwdAttAL2vneMJHawyw2p5MUBItGnOsD+UJSZSvCYFpPn7slCYZtSVBvT+Su2JYI+dYEKLbEQ7UxDsp1MVCuioR8ZTifZK4nhalbTgp3JYF2LcFzAysHRop0QyTfB+naMEjWhKJrZRA6lwZCvoiU7PxQaGcTuGv8IZvqySebKyqEYWmWLOHpEDK718mGirWV7jzjkLTSFdLJpECnekHOJtrTe7VTHWCY4SxEic6PhqEuHroGUt9bQqE/EAOZ7iIxqgV6Uyuf7c9KV7E4G6mRAcwEHSm9/8z/Kxj+0hUsGIgN4SqUfGgXWi0P1lH2xOuo2D1Jtib5DJo79dBenwHDpSnA2encVRfKoPyM4HZuPHCG/GOC4Ec50B9Po+sgGV3749G6L5EPH8tOEQhPlxAMSwisJdAfLoGOQGk6RsA8RL6LfDOb60oqc34qUE3XRDn9JuOogxFvDyQ58dqPqiQbNMcMgyTVErokFohFnYsCPxgL6bogELIhcXm2NWSszmc+XS/j4yHJS8el1GTMs3PdGd1v2AWrVwZdFVsA0UQT7c/aitrauCL/qAYH6k3n/+o32NO/H87avI9PPPugabITHm6hnvf5VGg7ZlKrupjaS1KWd2qpgayGfiupysNJwKksejyWg5IB8ueQ1O+IhnFrrHCPcj3LnpMALCNfypYEg7UR0K2LgHa94AyMqo0RUG4Ih3xdKL/nqa4n9bWcFEIdS3pNvoDdEyWfH8TvdxpXUkPK7oVtTQF2Etx3E7D3pMG4N52rF+amfZn0PC23p/J7Zbr1PZlZCHzMNfT5rKCuaR0BfSMBfRvt755kYD+pn71pBN4ErkY1y0jpLgyHbk4whySDHXOWQ5RNY8Ek7557nD0BQRW0Xu0DE6kZPW2vmykME2tnB/BsLphF6mc2NfRzA59BUs8yDG2PgOlwPJq7z3BIGtDGIak3akjpmSAz6f4qkOzUEXAZCHV6wTUaeoOBIExcNAhJeH4JSdPlqcCndD2cnwXNF+XkJTBeKKbnyM8Q9E5kQXWI1N9egvzhZHQfSUfXcVKFH+VDcWI8qc5CKA4WQr2/EDI6v3JSmbItyVA2JEC5kH77aXRui0m5Z7sIdUSjLHnpM1bkm9UgZZBUEAA7k9hjN3SFWcOY642m2JFQjmfR0M48aYMyxwFPos0Pnv7wjUtre7/4Q/Fzve4+XLoyRPyvF0000f6/bVxK/NzBrzx3x/IVMwT3+Q3yPnwZ5SNfwp5Ua9xaSo32pUXUqu4GZGt4DtQnWIsLTyZCsz8Bun0ExT2kCrcnwbSVtt1CYNlE4FzHlgSnjRk8K4p+VxJk+2LRfDACjcdC8OBEGDqOZ6D9cCraDzDVkUyNZhpU+9Kh3pMB9c40SDcnQUJQk9Cyc2sS2mj5ZHMCHm9ORPO2FMh2J3BX7E+E8mgqNcLppFgyIPs4E9JPsiE5P5a79LNx3Nl617lsdJzNRBcLEKFGXH4wCVI6DvneeEh3x0KxMxaavYnC9IODtP+0P+zeqq6BFObiEBjnsSkPrHhvMLQsQ9EMLyimukM2xRWdk5zQUemIjulufGiQ5Q+V1RPoScGy1GkshZp6VRQf+tXQ53WsDubeuToM3fRa59pUdK9P5/ug3ZeEjjsLCJJ/5NM/mLozEdr0BgVPds4U5V+sJPUK+hwNfb4cneiCzqiAwWQk5SrM/uiirVjy9i7ZccjuLgSuTAa+LofpwkSCYilwjpTfyQx+X1qzRRheN61NEOYlbsomdU7Xw6YMYZ4sdVKwg10f1GnaGAo0sGkjnsAU6iiUOcGYz0qS2UAebY7uwNGQeI2CzGUkEOwCjcMwwJ/UpOdoWlrzYtsm/1FoSXNAZ5YHVGnUQcmn752Qg5bkOBzydEHJoH4X/N977Yr43y2aaKL9VSzd12VzdYJ/wyhSlQG/NUPGH8yQ398MW+IH48YaUozt66kF3kKN6iZ0YAuasRr4pgIg5aDYztKExUK3MZ4gEAfF0iiuCrR1UdzZtADphgh07AhH04FwPDxJy9MEhROZ6D6eCclRUhRHMngQiOZAJjW6WdDtyYRh31juenL1/hwo9uage28WuvflQLJ/LK9tySApp0aaBQwxSMoJkKpPxkJ1IQ+qi+O5q78qhObrImi/mQD9t6R8visDvqOG/pty4CKtf1bEhwnVB5Oh2h0vQPJAKvS7k3kaPtb4K1jgzzx/GGoDhdyeLN8nu8e6JILfn2XRu7o5/sLcwCWhQvYhljZtFwNtjuBswvuuHt9Jx0efzzoPhl2pPDDFuLeIO+hc4Hg2Hn1fQ+f7Ow5J2c8gyQD214Ckjt+B1HBAdtBfE8vlCi4mOSgl9O4m3ERz+wF0355HnaVyfq5kJ3PReSAdj7cFoXVzENo3BPFhafmqcGjqo6BfEQ9DfQL0DfEw0bVjWB0D5fIgyBd4QDrbAS3VI9FUMgiSnEFoT+qPB1Hv4EHoO7gf2B9NfgPR7jscCj8LaLws0THmfQ5Jhc1gwHsMEOIAhNoQWEntz6bzNoXgmEfXV2JA/fGBb19c3MuscfJLv70p3mcUTTTR/kdsyZIlYTmxsfMG9vr3u95vvHolZ9h72JYTCs2ZVQTKE8BDgiUOUyu6EWilhvPTLFJ2fmhe4wfJ6iBST37onukJ9cwA6Kb68Tye6uoAnpTaxDKe1FHjtiqVq00W0MEiIHE0FziWRz4OpiM5MPIAEBYBSeA4nAn9gTQY9pAaJSiadpHvTIBxBym/bTGQbI2GZDtBeU88hxxLgqA/nQXDp+Ng+CIf+q/GQ3+5CIarJdBfL4PhxkTob5Zz19ysFPxqGRS0bddHKeg+TNA9nAjD4RQod8TyIWDp8kC0z3JFO6t0QmrRUOUBTPWGqY7guDJKGErmeUSToN6aABXtq/JIJmQEXvkpUrKnCO4nsyA7ngUVwU91lDoBBzJgIjCadmbAsJ3eu53OyTYC9g7qeOxj9+kKADaMqV3NEwiwAVeYtDDoVTAxpWf483D8c7BkkGShQD/P5NPMsvnwYs8saWsL/cYXYLqxGvpLk2C4kAvTqRSo9oZBuZolE6B9np9GHQba/0WJQr7cxZG0HkK/Nbu3TYp7RjCMpd4wprkDUaQag3wAL1KQDrRuSepwjC301hZQOYxGh8tgPHR+DzddeuOq2xu4FzUYD1JHoavYE7rpdN0soWtkRTnU88fjakEYPklyx0KH91Fo1/eCwzu97oj/vaKJJtr/mNUsXZRSu6IuZsGCBTFPnxtOqjLo1efuJPb7NRaGjcCV9eN4bUG0rYWxbTFwoxzSQ1G4vswetxY64Mlid7TWepJa8CbFFcoTqksneqCL5U8t90T3FG90TfOFhADaOS8YzQ0h6NoQDdWuFBgOENgOZQlwPJ4r5Nw8Qd93jKB5KIOrOs3OOOhY1OzmKCjWh6FrcyQ6N0Wgc0s4B6VsTxxkBxKhOEaK8OMMaD8bB93FAhivEGyukwq6VQkjg+O1Uqi+L4aMwKn4oQzK72idANB9KhWSI/T+I0nQH0rmkGT3SLvr/NEywwnNLFtQmS0UpQ5Qljmiu4aOa643T4ytXxkBDRtOZcneD2bCdLoAqjN5UJ/Nh/JsHhRncqH+OBfaj8ZxSGr2pfG0aiyjUUtdAC/31Do/Ad2LUrgaY1Nn9CwQhjoiDGCdPZBkVTsYJHW6vw4klQYlV6nsO5rIn/QE9HBJKfkJqmsH0PLpTLQS7DuOxkNxkM797hCo1xLs6sYSIAnyc+KgnhEq5HGd5gXpVFdIql3QXGSJtnFWaEkxR1e4BWS+ltC72MFoawPTaGsOSJjbQD1mFGQ2w6HyMwdS2FzVYGBmLMGWILyTfre146mjFYPrmc5bD7oPPFv3wW9uTe9r1jj+BbPG+Xb9z0FMNC6aaKL9LSwmKmXBgtqGuP/wnKfX+iEv/OaW15svXC+y6I/zxQloWVYB4wpSPLUEsipSEBNYhKEvUOTNM93w8k+z2KR9e0gmWRNYrNE5wQGqbHsY4pyAEEdSFA5AJC3jaNsMdk+JGsYyUh5TSYnMI0WyjJTDxnRSWOS7UmHaQeDaEcPnZqq2RUC+OZTPmUM9KwAdTYquJ3kBwYVVK8HmnuAblt7sFMHm00Lg4gTgawLm12xZBM2VidD+sRy6SwTNT3IhP0IKcH8iH241klrFTlZgOha6NWFQLQqEkuWcZRVRZvnDNNOPJzBgVVXkkz0hm8TylHpBPYcUVH28UNprJ0HkEH3vSVKIp6ixP0HLA4U8p6hpHe3bdDpvFaS2C115GSbN2ACYxgULydBZwvklBCKCvZJ0pIKope9JGyckI//Lp4Dw/OUaE9QmAYwtGkCKnnx1Tx4C+7cCyycLw5qzYqCcEwp1bThfx4xIGKYEQ1PpD12xL0ys0kwW7Xe8K7TB1lB7jIHWwwJqN3Mo3UZD7jIS7U5D0Ww3CI/tPkCTw2Ccc+uHa9EWaCvygbGGztly+p02lgq+phSyxQU4luKJJX42yBz27nnPPm9fFP9LRRNNtH9Is3/erDHwZTNk9zZrrBr0/PXNNn2+uOA28HRjmDm6U6hhTKdGPcdJgOQML2GqRh01+Av9YJztA/1UP6HxTyIoBhMgfa1h8hnFXe0/CvIQc0hizNGZRlDNs0czqTUWYds6h5ToMn8+DaNrtT+k64Ig2xTCHasTekAZzd24IoLPdWT3vxQrQyBdEwzphjBId0RDeSAJmo/SoWfBJl+O55BkgGSuIXDKT+eQKk7iapQHzmwlJbdZmBKiXR0KXV0oDIsJzAvJ59F3zwnkCQDYkHJ3uSuaxtvgbq45bueO5kWi79O+N9X6QdJA+7UjE9hLANiRBdWqOLQuCMTD6aRCc2zRljYGTUkjuXcmuUKW5M4zHymzhkNSMYqUMn0+HkMOIzSqP0FS/VfI3cpMozbyKFYWGNRpFO59QqqA5NQJaBbNRHdFCromBKC7xAuNE+xxt9AWXfnOaB/nAEWZN9rz6TiTLfEkwhztISPR7T8a3Z7DIXWi/bcfik6bwei0G4Juh6Hoch0BtZ81r2WKfFKKy6mzsp4gvLmSOkWktKmDdC/XGZ8ED8Bm21evcLX4llnjQm+r/XkWQ06J/4WiiSbaP6TVLV4Q4+1qtzPY23lrkKfdzqfP+1ubHw4aNOh0tZXV/lPBwXW3fXygySFFUJlEKjNVSBp9NAeS44l4vDsU3fsiIVnrh5ZZNpBU2aA5zwUPkixxP84cj6NGoyV0JCQE3XbPD6HwGgGDvwVMgVYwhdiS6iQAJxCAM1imlVAerMFTjU0n5TkriqBF6mYeNbzzCZq10TDNDoNxXhgMC8KhXhIGRV0Ynx+pWh8rRFoezqN9Y5PaWbUS8n3jhPuKpEaNtK1hKX0HTz4QwcsqsWAcIwvSWUIKan4IjDOoAzCRPJ/2J8sdxgR76MJJOQWMgMJ3KOQ+H0IbNgb6GBuYUpz4NhjnCVOOO7SZLlClOcIUMwaItYA+1hG6GGeYIpy4I34okDicOh6joWe1Gds2AsabnGxyOZ4lF/izw6tGI89ip/95UvOepYrf1CT9aNJArpFBS0so6fGt2wSsxUAxdSZK6PgzqGOT4UqK3472leAW4g1ER9J+0rn3Hgqj43vQOL4LkzeB0OkdyPwGoYP8oU9/NAYNwO2w93EvdQS6WHrBlfTbbKJrYv84GDZSB2dBOlTFYbie6Y69YZYoGd77UviAV656D+l3oaa8rED8zxNNNNH+KW1sWtiSXz5X+rvf3dzfp8/Fzy0GnX4U4wBpjjNkC0Og2B4H2clk6D/Ngek0welAIgGKlNUaUn/zU3jiAiPBhk38ViTaQxFlRY2xE/SBljAGWELvNwZqX3PumiAraMNtoY10hCrKEU3pVmjLtkNXngMkrFByiRt0lT4wTA2EviYY8mk+kNeQmqslJbogAK0LffFkoQ8eL/LBk8W+vEK9bAMpxk0JvDahaTUpx2Vh0PL0dYFQ03vYOpv6wUp86UhFMkCy1HisbiKKyfN8SUETSNIIJPFsCNkahlCCI1PGvh+iy58UVMgIdEeMhjTeCqoUe2gynKHPJkVNoEQqvSfRlUDpAkOYA/Sh9jDEDIYp7kPoMswhL3PH7W9nCJAkCanXC5Ds5pj8f0NS3wNFlp2HAZMtdT3P6fh9Rw2MKgkMtCXLtaO+fg23lizFo4JxkKVGQ8KOJ4WOK9GOjocUv6cFdN5O6PJwwxN7W5ic+gMeg6F3GQCN6wDI3frDFDUGxngboII6MbMJhLXkW0kxbiuicxqCjnl++LZoGI7HvY79w8ywmdTi/LfNGrOfN2tE552Xxf8u0UQT7Z/eqpcty4jKzV0Q7uuy+ZeveQzu80VIn1euznEwP3w0xHP93fRoaMpIPdSyyMQcYFchsCcbOFsExWfpaDkRjeZ9YZDsikL7SgLlskC0VTqge4IjZARAWZwVuoNIYZKyVHiOhtbTGnovG+ho2RE0ArIIUm/UKOuSSMklO8CQ6kRwcSQV5gBFqi3k6XaQZ5HnOvL6jixtHMunylLGyQmsGlYEuZxAVxUETAmkZQAtA3gCddOMwD+ljKOlflogNJN8ICt1gyTf5PbzPAAADiNJREFUBRJSh+oMDxjSCZLJpHLj6bMinIXh5EBSXn5WMPhacMDLfQmSgWOgiLSFJt4JhmQCeqol1GmWkKb6QJLiDU0i7U8SdQRSRkGfZg5tmjtPPN/OshXJt/B5/SxoR9OTou6XgTj/GSSfKkoOyJ8F+fDXtE/LYUmBK99ANnMyVKlRMAaRmo20gTzwXSgj+uJx+Mtoi30DTcFv0G8xEAr34XSMtrhW5IiLGaPwYJIXZDWkLOupE9RACnT7RGBzOf3excDCCWiZnI7jMV5Y4DIKhaMHI/7dN7+2e/OlH2bNKs9zcbHYL/5HiSaaaP+SNi41Zl5mQvii/+r13F5mjcvfeuH6xr6/vvWZc/9z9/Oc0DzVC4/neqB1fSjaT8VxSKrPpAFnxgGncgmiLGtOPrCIwDA5mJSaD4wJjqSwbGEItAUCqAH3d4TJ1x6dwSMhj7TkkNQTII1pznxoUJ/pxCFpyiUgjnWBItse3dm26OrxjmwbtGdZozXDgtatIRtnD1WBM69FaShx5+Ww9JVe0FR5wzg9gCcg11b7QjrRHe0F9niSY4knBLdW+k5pkhPUSS6kttyEIKRIWg91EkAZSkoxxJ4PF7NgFmWoNYekMsYe6jhHep85h6QyMwCaHDrWbB9yZ5gySUXTvhmzvOn4A3BvEcG6cTEnIYOkiudv1f1ZSP48xyuDIuOhxmDkrjP13JRkmXWu/4DLNdW4U5CJplAv6PztIfcaAmVwf8hC38ajsJcgSe5D0B5C6pd+g1RS0GUp0K8kKO4mIO5kRbcnAatzoJrkjzvJI/HH8MH4yP5NrHjbDAv6/Qplb/a6k/LavzXO9HbcCpz7lfjfI5poov2vsOM7VvltWbskYsfWVX7/r+1c+r1+ObFfn4tzLUYd3uPhsfHbsBC0x1GDW0AAmEFKsyqeVAeBcjU1umxOXFUUUBHMIyfl45whyyTQpVlRY21B7xuJtoihkIeNhiLcHNJIUmrRFtCSmuT3/ljOTp63kxRiAVtnsCHP9QIyCWRMccZZc/ga4h2gi7Xhrk8kEKcRbDOdYRjrCvU4Unzj3WEqIlgScHUZzvw79LTfbPuuNCd0pztDmeZKAHGDkU1fYIFJia5AgguM8bR9ghNUiYKrU1z4doZ0DwKhl1AAutATphI63tIEcnquyA36XA+oszygJ0iaxvpBVeggZC/CNRh07dBodBx6/1WSAO0vFKShB5BcPRoFRWl4GsV65Uc8mjMVLVmk6MMs0U3wvu8/Am2kJNnvo8j25BmFuud482QRvBoHm8u5nry+ENL5ufhpahK2h9tiptNglNoNQ0T/t+Df790LTm/1/TrR2WdruJ3PzmkTqieI/y2iiSaaaD127urVd1bt2PifgnOsmVnj7N/95tbml80aTwz897uXnft+8b3nANyLGIWr3gPQkkJqL8MRzSlWaEu3hSTbAZpcV17pwZRPECFoGrIcn8FKEWPJQdkVPgodoSPQFDIUDwMGoT18ODoiRqAzciRtM4bn/gQDKUGSuS7WDqpIK0hZVGbQcHSFDEMXbd8VNQrtMaMgSRcSZTNAy1JsIGe5Q+MFoGpjrNGR4sBdkugAeYIDqUMHHoRjeOpxTtDEO0IeZw9pDB1HrC2kcXb8sYLgrEq14t6R5ovOdD9SlFZQZFhClmZPnQFHApY9vy/4KHEIWiY7w6i8CBi7YDAIoPvvQFL7i+w8Pwdmy4938MeGTfhpWgW685OoMxECYw6pxMnJpBRjgTkExNocYAOp+1VCWr0n873weII7vgwbht1OvbHgg17Ie9EMaL0CNH37fMGYgWd9e7/4Q4aNzW7xv0A00UQT7c/Yna/uvFyRU1gZ4Rm09r/aZkDvty65vvvB+fB33z9f+OHIk1UD3z+7euRwHLEfgy+cLHDDl1RNGEEo3glIJ/WVS+qwkBQouw9WG0MKlBTOvBjoakIgm+yDllIXPCq0x70cKzRmWKAx1Rz3E0fhScJotCaYoy1xDKTxFjDFOEEfaQ9NmDXUoVZQR1jxwCFp1BgeaKMkZcmdYMxe04dZCSnRAmz4/UZdoDl3Q4A59P6joQ0YzR+rg8yhChlDKteC1C59V8hoSIJHQUoKTeozDHKvodylnv25N/laoMXfCp2h/SGJGIjWcAfunZGjuUJWhowCUl1x//ZCQtuXvHyV4b8ByWeBOiY8G2JlgFRqdWjp6ASO7gbWVZF6TwQ2Ehhr/YRSYksnQDd9Im6VlOJcchKORgdik48jZll8gKJRfRBq8T7s+7wF9ts59x1xIcknZPVH+49YREYG14lXvGiiiSba/7C1L18aMv7fzBpn/NasccUL/9a4rXevOyf6Pnfn88G/w3Xr3mj1GUgK0Byt+fZQVngDsyOABXHAIlaCixr7hgxgbY5Qdmkl+fIsei0NmEWvTyawFvsCeZ7CdJI0Am4afUYmreeQjyPP9oAp3QXyeGtIYy0hibSAgkWs/hySPhZQ+43krvUVnK1r/EdBGTAK8sBRHJLqKGtSvPYwJRLgE12AeGcevYtoUrMJtjxy1JhC6i2NoJ9lTftkCWWyD2QJnhzQfPpFMr2nIAiffzKBEPcZTyrAYm7+O0ry55B8qiJbO7tw9foNqDethG55CbpqA9BSYY2uvGG4EfF7HLd8HavfewOz+r2L8jdeR8HLv0Leq89hfN+XsDcvBp9vXxVwfvsmlwsbD7qJV6toookm2v+gffvtt2/8d7Y7tHOnQ4ir6+Yhb7x1ybL/gHPOHw4/Wfxhny/m2w7FSk9r7AlxxZfZUbhdnIJHpYmQVLIsMZkEylKCJIFyfT6ppVxgN8t4Q483pgBbabmWzY1MgmlFT73Lhng+H9K0NJJn8dEvj4CqLhiyuiAhPd0iLzyc74YH81zxU6Uzmqd6406ZA+5PdMb9UgfcG2+Nx6X2aMy3wOMJ1mgps8ejIivuHVOc0T3NDZ3k8tk+UC5wh3KJF7pXBKJzWRBaFodyVywOgZ4lTWcVR+ppv1bEQrthLB5tLyHCfUyYuwyYGvl8EL3WwMHHoNgNIWPO0zRzLEmAUU3Y1JKr6JWm+9B+fBjfL6zBx/lZWB/kjyXOrqgc9iHyBw1Cxvv9kfTBQEQPGgC//u/C8/1+cBjQD/aD+p/LCA+tO7ljh9PZ/fstDuzY7CReuaKJJppof0O7cuXKq/+/78G1a79m/tPcyTljXzBrHPtrs8Zpb/a6O+M1s8YNg1764ajd2xdPufS5+GVwf9xMHYkfM0fiWtogPCq2gGSmB5qmukO+IASGZTHQLomEekEw9EvCCZQJwDqWDIGVdkoHdpAy3U5KdGsiTFvptV0E1r30/J4iWiffWwxsGgfsJABvHEvvp/etodcbkqBjmXloiY2kZldEE5BJzW5gCd7p9W30WTsSCdxpQkDMvvHAAfq8rQT3lfHCfiyPgXJuAFoXx+LhtmLcPFwDveY84e8REdDIc6yq9ToOSZZarp3A+bRqiMJkFLbRqCC58g1OzJ2BBUGeqLIejupRQ5D3hzeR/4e+KBrwHlL/8AdE/v61K5F9+3xRFeTfcHH9Gq8bR/ZbfH/q1Ient258phg/2rPHRrxaRRNNNNH+Rcz6rd6X7N55+6LTu299bfn2Sz+E2Qw77vR+70uhVkNOJVm+frnY8T2UOg/AHL/RWB5mg81hjjiVFoIvUsPxdXIYfkghdZoWjQcpMWjOIIU6Nh2ysRnozkpF58QkPBkfBe00AuOicqgnEexmkFqdR6CbQ8CbNwFYQOpvLqnYKfTaHNpu7jioK+Ogn5IE/dQUcvqsKelonZSO6/nRuD0hAbfyI3AnOxCNGR64m+aGxixP3Eh1x3d5EfimhAD9+UfA4x/RiRaCoRQSdKBV9aRn5qQeJlY8WUmuInRKVLi8bQ9mRcaizMkVRaPNkfP+ABSPHIE4y+EINx8O+z69L22oqc5qvHiuv3jFiCaaaKKJJihRfPs8i8jk3nbtxTsN1Rnj3/nNrYR/M2uc9Ppzd8qfN2uc9XKvO7Uv97pb+5xZ47xeZo31L/761sY3Xrm6+c3Xrqx5/3c3V7zT6+6mwS9d3THktSt7R75x6eDI3tjxwfM4Nqo3ztj0w8dWfbH3wxdx1uFdHBnze2z/4Dmcce6Hg+avYvuHv8W2IS9g08jfY8UHL6Jh5FuY3/95LO7/G9S/9xzW9DPD+v5maHjHDHV9zDDn/ecxacBL2BDkBhOBUkaYfKh5ACWBUkM6skvTCYNRI6hHnRHfnzmHpcUVGO8VgCIXD2SPNEfqe/2R9k5fxL7+e3j2632pKMS/oVmEo2iiiSaaaH8tO358n9W06vK8p4/37BHu0bHlgR07nI7t3ekwq7pynKeDzd6aqvK8eTWTcyL8PDZu37gq4NihnQ7933ntysD33rjk3velqy5vv3A9y8tx+/ktGzys+r75dWaANzID3RFuPwL2/X4Dj/d/B99Bv0PosFcQNux15HmNQartcFSEeuLE3IkwXTkLtNwCOh8BTxrRfO4sTixbhilJqcgLilie4OO3uqqwsGTjulV+a9YsDVlcVxu3bO2SiIbNK4IO03GIv6Zoookmmmj/FFZPQF1QUliyrGrChIbpJYVf7l0RtLIieWaS47vnAwe/AJ/+v0PIh72RYDEYEcPeRamXBca7jMCC5BBMJrBOCQ9EZVgIsj08Np7buNXt8bmv3hHPqmiiiSaaaP/SdvLAZqeMiID6cVGB9Rk+rpsDhg455ffue4gb8jYSh/VFuuVg5LhZI97O/HB1ZuLMO1+JcBRNNNFEE+1/qX28alVAlqPj9sA+L1yPG/zW19GD+1z0H/j2xb3za1LEsyOaaP9Y9n8Ah4jDUAVbPkoAAAAASUVORK5CYII=", Ma = "data:image/png;base64,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";
function Y(o, t, e) {
  typeof t != "number" && (typeof t == "boolean" && (e = !0), isNaN(t) && (t = 0));
  var i = o + Math.random() * (t - o);
  return e === !0 ? Math.round(i) : i;
}
const za = Math.PI / 180;
function Za(o) {
  var t = document.createElement("canvas"), e = t.getContext("2d");
  t.width = 48, t.height = 48;
  var s = e.createRadialGradient(24, 24, 2, 24, 24, 20);
  s.addColorStop(0, "#ffffffCC"), s.addColorStop(0.5, "#ffffffCC"), s.addColorStop(1, "#ffffff00"), e.fillStyle = s, e.fillRect(2, 2, 44, 44);
  var i = document.createElement("canvas");
  i.width = 1024, i.height = 1024;
  var r = i.getContext("2d"), n = document.createElement("canvas");
  n.width = 48, n.height = 48;
  var a = n.getContext("2d"), s = a.createLinearGradient(0, 0, 0, 48);
  s.addColorStop(0, "#ffffff00"), s.addColorStop(0.5, "#ffffffCC"), s.addColorStop(1, "#ffffff00"), a.fillStyle = s, a.fillRect(21, 0, 5, 88), a.save(), a.translate(0, 48), a.rotate(-90 * za), a.fillRect(21, 0, 5, 88), a.translate(-24, -24), a.restore(), a.drawImage(t, 10, 10, 28, 28);
  var h, f, l, g;
  for (h = 0; h < 2e3; h++)
    f = Y(1, 3), Y(0.7, 1), l = Y(i.width), g = Y(i.height), r.globalAlpha = Y(), r.drawImage(t, l, g, f, f);
  for (h = 0; h < 64; h++)
    f = Y(3, 7), Y(0.7, 1), l = Y(i.width), g = Y(i.height), r.globalAlpha = Y(), r.drawImage(t, l, g, f, f);
  for (h = 0; h < 12; h++)
    f = Y(10, 16), Y(0.7, 1), l = Y(i.width), g = Y(i.height), r.globalAlpha = Y(), r.drawImage(n, l, g, f, f);
  var k = o.camera.zFactor(5e4), S = new Ge({
    id: "stars",
    bitmapData: i,
    smoothing: !0,
    x: 0,
    y: 0,
    z: 5e4,
    width: window.innerWidth * (1 / k),
    height: window.innerWidth * (1 / k),
    scale: 1,
    repeatX: !0,
    repeatY: !0
  });
  return S;
}
var Ii = {
  CLICK: "click",
  UPDATED: "updated"
};
let wt;
function ja() {
  wt = new La({
    fillStyle: "rgb(10,5,50)",
    mouseEnabled: !0,
    wheelZoom: !0,
    userBounds: {
      minY: -1e4,
      maxY: 1e4
    },
    fullscreen: !1
  });
}
function Xa() {
  wt.addChild(Za(wt)).on(Ii.UPDATED, (t) => {
    t.target.y += 0.5;
  });
}
function lr(o) {
  this.alpha = Y(0.9, 1), this.rotationShift += this.rotationSpeed, this.rotation = Math.sin(this.rotationShift) * 5;
}
function _a() {
  this.alpha = Math.random();
}
function $a(o) {
  wt.camera.moveToElement(o.target, 50, 3, ga.easeInOut), un.forEach((t) => t.selected = !1), o.target.selected = !0;
}
function ts() {
  var o, t = 10, e = 2e3, i = 0.3, r = 1e4, n = (r - e) / t, a = 1 - i;
  for (o = 0; o < t; o++) {
    var s = o / t, h = a * s * 0.2;
    wt.addChild(
      new Ge({
        position: "fixed",
        x: 0,
        y: 0,
        z: 0,
        offSetZ: e + o * n,
        id: `fog${o}`,
        draggable: !1,
        smoothing: !1,
        width: window.innerWidth,
        height: window.innerHeight,
        fillStyle: `rgba(10,5,50,${h})`,
        beforeUpdate: function() {
          this.setProperty({ z: wt.camera.z + this.offSetZ });
        }
        // onResize: function () {
        //   this.setProperty({ width: window.innerWidth, height: window.innerHeight });
        // }
      })
    );
  }
}
const un = [];
function es() {
  for (let t = 0; t < 500; t++) {
    var o = wt.addChild(
      new Ge({
        image: ba,
        x: Y(-3e3, 3e3),
        y: Y(0, -3e3),
        z: Y(-500, 15e3),
        draggable: !0,
        smoothing: !0,
        launched: !1,
        width: 100,
        height: 100,
        alpha: 0.9,
        rotation: Y(-5, 5),
        rotationShift: 0,
        rotationSpeed: Y(-0.05, 0.05),
        physics: !0,
        vector: { x: 0, y: Y(0, -0.01), z: 0 },
        beforeUpdate: lr
      })
    ).on(Ii.UPDATED, lr).on(Ii.CLICK, $a);
    un.push(o), o.addChild(
      new Ge({
        image: Ma,
        x: 10,
        y: 25,
        z: 0,
        scale: 4,
        width: 20,
        height: 20,
        transformCenterY: 1,
        beforeUpdate: _a
      })
    );
  }
}
function is(o) {
  return ja(), Xa(), ts(), es(), o.appendChild(wt.cvs), wt;
}
function rs() {
  wt.stopRender(), wt.cvs.remove();
}
const ns = (o) => {
  const t = Pe(null), { width: e, height: i } = Sn({ ref: t }), [r, n] = fr(null);
  return Fe(() => {
    r && r.setSize(e, i);
  }, [e, i]), Fe(() => {
    if (t.current) {
      const a = is(t.current);
      return a.setSize(e, i), n(a), () => {
        n(null), rs();
      };
    }
  }, []), /* @__PURE__ */ gn("div", { ref: t, style: { width: 500, height: 500 }, ...o });
}, hs = ns;
export {
  hs as LanternsReact
};
//# sourceMappingURL=index.js.map
