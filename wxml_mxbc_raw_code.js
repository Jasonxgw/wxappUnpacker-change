
window= {"screen":{"width":720,"height":1028,"orientation":{"type":"vertical"}}};
navigator={"userAgent":"iPhone"};
document={
	getElementsByTagName: function (){
		return [{
		appendChild:function(){}
		}]
	},
	createElement: function(){
		return {
			setAttribute: function(){},
			childNodes: [],
			appendChild: function(){}
		}
	},
	createTextNode: function(){}
};

var __wxAppData = __wxAppData || {};
var __wxAppCode__ = __wxAppCode__ || {};
var global = global || {};
var __WXML_GLOBAL__ = __WXML_GLOBAL__ || {
    entrys: {},
    defines: {},
    modules: {},
    ops: [],
    wxs_nf_init: undefined,
    total_ops: 0
};
var Component = Component || function () {
};
var definePlugin = definePlugin || function () {
};
var requirePlugin = requirePlugin || function () {
};
var Behavior = Behavior || function () {
};
var __vd_version_info__ = __vd_version_info__ || {};
var __GWX_GLOBAL__ = __GWX_GLOBAL__ || {};
if (this && this.__g === undefined) Object.defineProperty(globalThis, "__g", {
    configurable: false, enumerable: false, writable: false, value: function () {
        function D(e, t) {
            if (typeof t != "undefined") e.children.push(t)
        }

        function S(e) {
            if (typeof e != "undefined") return {tag: "virtual", wxKey: e, children: []};
            return {tag: "virtual", children: []}
        }

        function v(e) {
            $gwxc++;
            if ($gwxc >= 16e3) {
                throw"Dom limit exceeded, please check if there's any mistake you've made."
            }
            return {tag: "wx-" + e, attr: {}, children: [], n: [], raw: {}, generics: {}}
        }

        function e(e, t) {
            t && e.properities.push(t)
        }

        function t(e, t, r) {
            return typeof e[r] != "undefined" ? e[r] : t[r]
        }

        function u(e) {
            console.warn("WXMLRT_" + g + ":" + e)
        }

        function r(e, t) {
            u(t + ":-1:-1:-1: Template `" + e + "` is being called recursively, will be stop.")
        }

        var s = console.warn;
        var n = console.log;

        function o() {
            function e() {
            }

            e.prototype = {
                hn: function (e, t) {
                    if (typeof e == "object") {
                        var r = 0;
                        var n = false, o = false;
                        for (var a in e) {
                            n = n | a === "__value__";
                            o = o | a === "__wxspec__";
                            r++;
                            if (r > 2) break
                        }
                        return r == 2 && n && o && (t || e.__wxspec__ !== "m" || this.hn(e.__value__) === "h") ? "h" : "n"
                    }
                    return "n"
                }, nh: function (e, t) {
                    return {__value__: e, __wxspec__: t ? t : true}
                }, rv: function (e) {
                    return this.hn(e, true) === "n" ? e : this.rv(e.__value__)
                }, hm: function (e) {
                    if (typeof e == "object") {
                        var t = 0;
                        var r = false, n = false;
                        for (var o in e) {
                            r = r | o === "__value__";
                            n = n | o === "__wxspec__";
                            t++;
                            if (t > 2) break
                        }
                        return t == 2 && r && n && (e.__wxspec__ === "m" || this.hm(e.__value__))
                    }
                    return false
                }
            };
            return new e
        }

        var A = o();

        function T(e) {
            var t = e.split("\n " + " " + " " + " ");
            for (var r = 0; r < t.length; ++r) {
                if (0 == r) continue;
                if (")" === t[r][t[r].length - 1]) t[r] = t[r].replace(/\s\(.*\)$/, ""); else t[r] = "at anonymous function"
            }
            return t.join("\n " + " " + " " + " ")
        }

        function a(M) {
            function m(e, t, r, n, o) {
                var a = false;
                var i = e[0][1];
                var p, u, l, f, v, c;
                switch (i) {
                    case"?:":
                        p = x(e[1], t, r, n, o, a);
                        l = M && A.hn(p) === "h";
                        f = A.rv(p) ? x(e[2], t, r, n, o, a) : x(e[3], t, r, n, o, a);
                        f = l && A.hn(f) === "n" ? A.nh(f, "c") : f;
                        return f;
                        break;
                    case"&&":
                        p = x(e[1], t, r, n, o, a);
                        l = M && A.hn(p) === "h";
                        f = A.rv(p) ? x(e[2], t, r, n, o, a) : A.rv(p);
                        f = l && A.hn(f) === "n" ? A.nh(f, "c") : f;
                        return f;
                        break;
                    case"||":
                        p = x(e[1], t, r, n, o, a);
                        l = M && A.hn(p) === "h";
                        f = A.rv(p) ? A.rv(p) : x(e[2], t, r, n, o, a);
                        f = l && A.hn(f) === "n" ? A.nh(f, "c") : f;
                        return f;
                        break;
                    case"+":
                    case"*":
                    case"/":
                    case"%":
                    case"|":
                    case"^":
                    case"&":
                    case"===":
                    case"==":
                    case"!=":
                    case"!==":
                    case">=":
                    case"<=":
                    case">":
                    case"<":
                    case"<<":
                    case">>":
                        p = x(e[1], t, r, n, o, a);
                        u = x(e[2], t, r, n, o, a);
                        l = M && (A.hn(p) === "h" || A.hn(u) === "h");
                        switch (i) {
                            case"+":
                                f = A.rv(p) + A.rv(u);
                                break;
                            case"*":
                                f = A.rv(p) * A.rv(u);
                                break;
                            case"/":
                                f = A.rv(p) / A.rv(u);
                                break;
                            case"%":
                                f = A.rv(p) % A.rv(u);
                                break;
                            case"|":
                                f = A.rv(p) | A.rv(u);
                                break;
                            case"^":
                                f = A.rv(p) ^ A.rv(u);
                                break;
                            case"&":
                                f = A.rv(p) & A.rv(u);
                                break;
                            case"===":
                                f = A.rv(p) === A.rv(u);
                                break;
                            case"==":
                                f = A.rv(p) == A.rv(u);
                                break;
                            case"!=":
                                f = A.rv(p) != A.rv(u);
                                break;
                            case"!==":
                                f = A.rv(p) !== A.rv(u);
                                break;
                            case">=":
                                f = A.rv(p) >= A.rv(u);
                                break;
                            case"<=":
                                f = A.rv(p) <= A.rv(u);
                                break;
                            case">":
                                f = A.rv(p) > A.rv(u);
                                break;
                            case"<":
                                f = A.rv(p) < A.rv(u);
                                break;
                            case"<<":
                                f = A.rv(p) << A.rv(u);
                                break;
                            case">>":
                                f = A.rv(p) >> A.rv(u);
                                break;
                            default:
                                break
                        }
                        return l ? A.nh(f, "c") : f;
                        break;
                    case"-":
                        p = e.length === 3 ? x(e[1], t, r, n, o, a) : 0;
                        u = e.length === 3 ? x(e[2], t, r, n, o, a) : x(e[1], t, r, n, o, a);
                        l = M && (A.hn(p) === "h" || A.hn(u) === "h");
                        f = l ? A.rv(p) - A.rv(u) : p - u;
                        return l ? A.nh(f, "c") : f;
                        break;
                    case"!":
                        p = x(e[1], t, r, n, o, a);
                        l = M && A.hn(p) == "h";
                        f = !A.rv(p);
                        return l ? A.nh(f, "c") : f;
                    case"~":
                        p = x(e[1], t, r, n, o, a);
                        l = M && A.hn(p) == "h";
                        f = ~A.rv(p);
                        return l ? A.nh(f, "c") : f;
                    default:
                        s("unrecognized op" + i)
                }
            }

            function x(e, t, r, n, o, a) {
                var i = e[0];
                var p = false;
                if (typeof a !== "undefined") o.ap = a;
                if (typeof i === "object") {
                    var u = i[0];
                    var l, f, v, c, s, y, b, d, h, _, g;
                    switch (u) {
                        case 2:
                            return m(e, t, r, n, o);
                            break;
                        case 4:
                            return x(e[1], t, r, n, o, p);
                            break;
                        case 5:
                            switch (e.length) {
                                case 2:
                                    l = x(e[1], t, r, n, o, p);
                                    return M ? [l] : [A.rv(l)];
                                    return [l];
                                    break;
                                case 1:
                                    return [];
                                    break;
                                default:
                                    l = x(e[1], t, r, n, o, p);
                                    v = x(e[2], t, r, n, o, p);
                                    l.push(M ? v : A.rv(v));
                                    return l;
                                    break
                            }
                            break;
                        case 6:
                            l = x(e[1], t, r, n, o);
                            var w = o.ap;
                            h = A.hn(l) === "h";
                            f = h ? A.rv(l) : l;
                            o.is_affected |= h;
                            if (M) {
                                if (f === null || typeof f === "undefined") {
                                    return h ? A.nh(undefined, "e") : undefined
                                }
                                v = x(e[2], t, r, n, o, p);
                                _ = A.hn(v) === "h";
                                c = _ ? A.rv(v) : v;
                                o.ap = w;
                                o.is_affected |= _;
                                if (c === null || typeof c === "undefined" || c === "__proto__" || c === "prototype" || c === "caller") {
                                    return h || _ ? A.nh(undefined, "e") : undefined
                                }
                                y = f[c];
                                if (typeof y === "function" && !w) y = undefined;
                                g = A.hn(y) === "h";
                                o.is_affected |= g;
                                return h || _ ? g ? y : A.nh(y, "e") : y
                            } else {
                                if (f === null || typeof f === "undefined") {
                                    return undefined
                                }
                                v = x(e[2], t, r, n, o, p);
                                _ = A.hn(v) === "h";
                                c = _ ? A.rv(v) : v;
                                o.ap = w;
                                o.is_affected |= _;
                                if (c === null || typeof c === "undefined" || c === "__proto__" || c === "prototype" || c === "caller") {
                                    return undefined
                                }
                                y = f[c];
                                if (typeof y === "function" && !w) y = undefined;
                                g = A.hn(y) === "h";
                                o.is_affected |= g;
                                return g ? A.rv(y) : y
                            }
                        case 7:
                            switch (e[1][0]) {
                                case 11:
                                    o.is_affected |= A.hn(n) === "h";
                                    return n;
                                case 3:
                                    b = A.rv(r);
                                    d = A.rv(t);
                                    v = e[1][1];
                                    if (n && n.f && n.f.hasOwnProperty(v)) {
                                        l = n.f;
                                        o.ap = true
                                    } else {
                                        l = b && b.hasOwnProperty(v) ? r : d && d.hasOwnProperty(v) ? t : undefined
                                    }
                                    if (M) {
                                        if (l) {
                                            h = A.hn(l) === "h";
                                            f = h ? A.rv(l) : l;
                                            y = f[v];
                                            g = A.hn(y) === "h";
                                            o.is_affected |= h || g;
                                            y = h && !g ? A.nh(y, "e") : y;
                                            return y
                                        }
                                    } else {
                                        if (l) {
                                            h = A.hn(l) === "h";
                                            f = h ? A.rv(l) : l;
                                            y = f[v];
                                            g = A.hn(y) === "h";
                                            o.is_affected |= h || g;
                                            return A.rv(y)
                                        }
                                    }
                                    return undefined
                            }
                            break;
                        case 8:
                            l = {};
                            l[e[1]] = x(e[2], t, r, n, o, p);
                            return l;
                            break;
                        case 9:
                            l = x(e[1], t, r, n, o, p);
                            v = x(e[2], t, r, n, o, p);

                        function O(e, t, r) {
                            var n, o;
                            h = A.hn(e) === "h";
                            _ = A.hn(t) === "h";
                            f = A.rv(e);
                            c = A.rv(t);
                            for (var a in c) {
                                if (r || !f.hasOwnProperty(a)) {
                                    f[a] = M ? _ ? A.nh(c[a], "e") : c[a] : A.rv(c[a])
                                }
                            }
                            return e
                        }

                            var s = l;
                            var j = true;
                            if (typeof e[1][0] === "object" && e[1][0][0] === 10) {
                                l = v;
                                v = s;
                                j = false
                            }
                            if (typeof e[1][0] === "object" && e[1][0][0] === 10) {
                                var P = {};
                                return O(O(P, l, j), v, j)
                            } else return O(l, v, j);
                            break;
                        case 10:
                            l = x(e[1], t, r, n, o, p);
                            l = M ? l : A.rv(l);
                            return l;
                            break;
                        case 12:
                            var P;
                            l = x(e[1], t, r, n, o);
                            if (!o.ap) {
                                return M && A.hn(l) === "h" ? A.nh(P, "f") : P
                            }
                            var w = o.ap;
                            v = x(e[2], t, r, n, o, p);
                            o.ap = w;
                            h = A.hn(l) === "h";
                            _ = N(v);
                            f = A.rv(l);
                            c = A.rv(v);
                            snap_bb = K(c, "nv_");
                            try {
                                P = typeof f === "function" ? K(f.apply(null, snap_bb)) : undefined
                            } catch (t) {
                                t.message = t.message.replace(/nv_/g, "");
                                t.stack = t.stack.substring(0, t.stack.indexOf("\n", t.stack.lastIndexOf("at nv_")));
                                t.stack = t.stack.replace(/\snv_/g, " ");
                                t.stack = T(t.stack);
                                if (n.debugInfo) {
                                    t.stack += "\n " + " " + " " + " at " + n.debugInfo[0] + ":" + n.debugInfo[1] + ":" + n.debugInfo[2];
                                    console.error(t)
                                }
                                P = undefined
                            }
                            return M && (_ || h) ? A.nh(P, "f") : P
                    }
                } else {
                    if (i === 3 || i === 1) return e[1]; else if (i === 11) {
                        var l = "";
                        for (var D = 1; D < e.length; D++) {
                            var S = A.rv(x(e[D], t, r, n, o, p));
                            l += typeof S === "undefined" ? "" : S
                        }
                        return l
                    }
                }
            }

            function e(e, t, r, n, o, a) {
                if (e[0] == "11182016") {
                    n.debugInfo = e[2];
                    return x(e[1], t, r, n, o, a)
                } else {
                    n.debugInfo = null;
                    return x(e, t, r, n, o, a)
                }
            }

            return e
        }

        var f = a(true);
        var c = a(false);

        function i(e, t, r, n, o, a, i, p) {
            {
                var u = {is_affected: false};
                var l = f(t, r, n, o, u);
                if (JSON.stringify(l) != JSON.stringify(a) || u.is_affected != p) {
                    console.warn("A. " + e + " get result " + JSON.stringify(l) + ", " + u.is_affected + ", but " + JSON.stringify(a) + ", " + p + " is expected")
                }
            }
            {
                var u = {is_affected: false};
                var l = c(t, r, n, o, u);
                if (JSON.stringify(l) != JSON.stringify(i) || u.is_affected != p) {
                    console.warn("B. " + e + " get result " + JSON.stringify(l) + ", " + u.is_affected + ", but " + JSON.stringify(i) + ", " + p + " is expected")
                }
            }
        }

        function y(e, t, r, n, o, a, i, p, u) {
            var l = A.hn(e) === "n";
            var f = A.rv(n);
            var v = f.hasOwnProperty(i);
            var c = f.hasOwnProperty(p);
            var s = f[i];
            var y = f[p];
            var b = Object.prototype.toString.call(A.rv(e));
            var d = b[8];
            if (d === "N" && b[10] === "l") d = "X";
            var h;
            if (l) {
                if (d === "A") {
                    var _;
                    for (var g = 0; g < e.length; g++) {
                        f[i] = e[g];
                        f[p] = l ? g : A.nh(g, "h");
                        _ = A.rv(e[g]);
                        var w = u && _ ? u === "*this" ? _ : A.rv(_[u]) : undefined;
                        h = S(w);
                        D(a, h);
                        t(r, f, h, o)
                    }
                } else if (d === "O") {
                    var g = 0;
                    var _;
                    for (var O in e) {
                        f[i] = e[O];
                        f[p] = l ? O : A.nh(O, "h");
                        _ = A.rv(e[O]);
                        var w = u && _ ? u === "*this" ? _ : A.rv(_[u]) : undefined;
                        h = S(w);
                        D(a, h);
                        t(r, f, h, o);
                        g++
                    }
                } else if (d === "S") {
                    for (var g = 0; g < e.length; g++) {
                        f[i] = e[g];
                        f[p] = l ? g : A.nh(g, "h");
                        h = S(e[g] + g);
                        D(a, h);
                        t(r, f, h, o)
                    }
                } else if (d === "N") {
                    for (var g = 0; g < e; g++) {
                        f[i] = g;
                        f[p] = l ? g : A.nh(g, "h");
                        h = S(g);
                        D(a, h);
                        t(r, f, h, o)
                    }
                } else {
                }
            } else {
                var j = A.rv(e);
                var _, P;
                if (d === "A") {
                    for (var g = 0; g < j.length; g++) {
                        P = j[g];
                        P = A.hn(P) === "n" ? A.nh(P, "h") : P;
                        _ = A.rv(P);
                        f[i] = P;
                        f[p] = l ? g : A.nh(g, "h");
                        var w = u && _ ? u === "*this" ? _ : A.rv(_[u]) : undefined;
                        h = S(w);
                        D(a, h);
                        t(r, f, h, o)
                    }
                } else if (d === "O") {
                    var g = 0;
                    for (var O in j) {
                        P = j[O];
                        P = A.hn(P) === "n" ? A.nh(P, "h") : P;
                        _ = A.rv(P);
                        f[i] = P;
                        f[p] = l ? O : A.nh(O, "h");
                        var w = u && _ ? u === "*this" ? _ : A.rv(_[u]) : undefined;
                        h = S(w);
                        D(a, h);
                        t(r, f, h, o);
                        g++
                    }
                } else if (d === "S") {
                    for (var g = 0; g < j.length; g++) {
                        P = A.nh(j[g], "h");
                        f[i] = P;
                        f[p] = l ? g : A.nh(g, "h");
                        h = S(e[g] + g);
                        D(a, h);
                        t(r, f, h, o)
                    }
                } else if (d === "N") {
                    for (var g = 0; g < j; g++) {
                        P = A.nh(g, "h");
                        f[i] = P;
                        f[p] = l ? g : A.nh(g, "h");
                        h = S(g);
                        D(a, h);
                        t(r, f, h, o)
                    }
                } else {
                }
            }
            if (v) {
                f[i] = s
            } else {
                delete f[i]
            }
            if (c) {
                f[p] = y
            } else {
                delete f[p]
            }
        }

        function N(e) {
            if (A.hn(e) == "h") return true;
            if (typeof e !== "object") return false;
            for (var t in e) {
                if (e.hasOwnProperty(t)) {
                    if (N(e[t])) return true
                }
            }
            return false
        }

        function b(e, t, r, n, o) {
            var a = false;
            var i = K(n, "", 2);
            if (o.ap && i && i.constructor === Function) {
                t = "$wxs:" + t;
                e.attr["$gdc"] = K
            }
            if (o.is_affected || N(n)) {
                e.n.push(t);
                e.raw[t] = n
            }
            e.attr[t] = i
        }

        function d(e, t, r, n, o, a) {
            a.opindex = r;
            var i = {}, p;
            var u = c(z[r], n, o, a, i);
            b(e, t, r, u, i)
        }

        function h(e, t, r, n, o, a, i) {
            i.opindex = n;
            var p = {}, u;
            var l = c(e[n], o, a, i, p);
            b(t, r, n, l, p)
        }

        function p(e, t, r, n) {
            n.opindex = e;
            var o = {};
            var a = c(z[e], t, r, n, o);
            return a && a.constructor === Function ? undefined : a
        }

        function l(e, t, r, n, o) {
            o.opindex = t;
            var a = {};
            var i = c(e[t], r, n, o, a);
            return i && i.constructor === Function ? undefined : i
        }

        function _(e, t, r, n, o) {
            var o = o || {};
            n.opindex = e;
            return f(z[e], t, r, n, o)
        }

        function w(e, t, r, n, o, a) {
            var a = a || {};
            o.opindex = t;
            return f(e[t], r, n, o, a)
        }

        function O(e, t, r, n, o, a, i, p, u) {
            var l = {};
            var f = _(e, r, n, o);
            y(f, t, r, n, o, a, i, p, u)
        }

        function j(e, t, r, n, o, a, i, p, u, l) {
            var f = {};
            var v = w(e, t, n, o, a);
            y(v, r, n, o, a, i, p, u, l)
        }

        function P(e, t, r, n, o, a) {
            var i = v(e);
            var p = 0;
            for (var u = 0; u < t.length; u += 2) {
                if (p + t[u + 1] < 0) {
                    i.attr[t[u]] = true
                } else {
                    d(i, t[u], p + t[u + 1], n, o, a);
                    if (p === 0) p = t[u + 1]
                }
            }
            for (var u = 0; u < r.length; u += 2) {
                if (p + r[u + 1] < 0) {
                    i.generics[r[u]] = ""
                } else {
                    var l = c(z[p + r[u + 1]], n, o, a);
                    if (l != "") l = "wx-" + l;
                    i.generics[r[u]] = l;
                    if (p === 0) p = r[u + 1]
                }
            }
            return i
        }

        function M(e, t, r, n, o, a, i) {
            var p = v(t);
            var u = 0;
            for (var l = 0; l < r.length; l += 2) {
                if (u + r[l + 1] < 0) {
                    p.attr[r[l]] = true
                } else {
                    h(e, p, r[l], u + r[l + 1], o, a, i);
                    if (u === 0) u = r[l + 1]
                }
            }
            for (var l = 0; l < n.length; l += 2) {
                if (u + n[l + 1] < 0) {
                    p.generics[n[l]] = ""
                } else {
                    var f = c(e[u + n[l + 1]], o, a, i);
                    if (f != "") f = "wx-" + f;
                    p.generics[n[l]] = f;
                    if (u === 0) u = n[l + 1]
                }
            }
            return p
        }

        var m = function () {
            if (typeof __WXML_GLOBAL__ === "undefined" || undefined === __WXML_GLOBAL__.wxs_nf_init) {
                x();
                C();
                k();
                U();
                I();
                L();
                E();
                R();
                F()
            }
            if (typeof __WXML_GLOBAL__ !== "undefined") __WXML_GLOBAL__.wxs_nf_init = true
        };
        var x = function () {
            Object.defineProperty(Object.prototype, "nv_constructor", {writable: true, value: "Object"});
            Object.defineProperty(Object.prototype, "nv_toString", {
                writable: true, value: function () {
                    return "[object Object]"
                }
            })
        };
        var C = function () {
            Object.defineProperty(Function.prototype, "nv_constructor", {writable: true, value: "Function"});
            Object.defineProperty(Function.prototype, "nv_length", {
                get: function () {
                    return this.length
                }, set: function () {
                }
            });
            Object.defineProperty(Function.prototype, "nv_toString", {
                writable: true, value: function () {
                    return "[function Function]"
                }
            })
        };
        var k = function () {
            Object.defineProperty(Array.prototype, "nv_toString", {
                writable: true, value: function () {
                    return this.nv_join()
                }
            });
            Object.defineProperty(Array.prototype, "nv_join", {
                writable: true, value: function (e) {
                    e = undefined == e ? "," : e;
                    var t = "";
                    for (var r = 0; r < this.length; ++r) {
                        if (0 != r) t += e;
                        if (null == this[r] || undefined == this[r]) t += ""; else if (typeof this[r] == "function") t += this[r].nv_toString(); else if (typeof this[r] == "object" && this[r].nv_constructor === "Array") t += this[r].nv_join(); else t += this[r].toString()
                    }
                    return t
                }
            });
            Object.defineProperty(Array.prototype, "nv_constructor", {writable: true, value: "Array"});
            Object.defineProperty(Array.prototype, "nv_concat", {writable: true, value: Array.prototype.concat});
            Object.defineProperty(Array.prototype, "nv_pop", {writable: true, value: Array.prototype.pop});
            Object.defineProperty(Array.prototype, "nv_push", {writable: true, value: Array.prototype.push});
            Object.defineProperty(Array.prototype, "nv_reverse", {writable: true, value: Array.prototype.reverse});
            Object.defineProperty(Array.prototype, "nv_shift", {writable: true, value: Array.prototype.shift});
            Object.defineProperty(Array.prototype, "nv_slice", {writable: true, value: Array.prototype.slice});
            Object.defineProperty(Array.prototype, "nv_sort", {writable: true, value: Array.prototype.sort});
            Object.defineProperty(Array.prototype, "nv_splice", {writable: true, value: Array.prototype.splice});
            Object.defineProperty(Array.prototype, "nv_unshift", {writable: true, value: Array.prototype.unshift});
            Object.defineProperty(Array.prototype, "nv_indexOf", {writable: true, value: Array.prototype.indexOf});
            Object.defineProperty(Array.prototype, "nv_lastIndexOf", {
                writable: true,
                value: Array.prototype.lastIndexOf
            });
            Object.defineProperty(Array.prototype, "nv_every", {writable: true, value: Array.prototype.every});
            Object.defineProperty(Array.prototype, "nv_some", {writable: true, value: Array.prototype.some});
            Object.defineProperty(Array.prototype, "nv_forEach", {writable: true, value: Array.prototype.forEach});
            Object.defineProperty(Array.prototype, "nv_map", {writable: true, value: Array.prototype.map});
            Object.defineProperty(Array.prototype, "nv_filter", {writable: true, value: Array.prototype.filter});
            Object.defineProperty(Array.prototype, "nv_reduce", {writable: true, value: Array.prototype.reduce});
            Object.defineProperty(Array.prototype, "nv_reduceRight", {
                writable: true,
                value: Array.prototype.reduceRight
            });
            Object.defineProperty(Array.prototype, "nv_length", {
                get: function () {
                    return this.length
                }, set: function (e) {
                    this.length = e
                }
            })
        };
        var U = function () {
            Object.defineProperty(String.prototype, "nv_constructor", {writable: true, value: "String"});
            Object.defineProperty(String.prototype, "nv_toString", {writable: true, value: String.prototype.toString});
            Object.defineProperty(String.prototype, "nv_valueOf", {writable: true, value: String.prototype.valueOf});
            Object.defineProperty(String.prototype, "nv_charAt", {writable: true, value: String.prototype.charAt});
            Object.defineProperty(String.prototype, "nv_charCodeAt", {
                writable: true,
                value: String.prototype.charCodeAt
            });
            Object.defineProperty(String.prototype, "nv_concat", {writable: true, value: String.prototype.concat});
            Object.defineProperty(String.prototype, "nv_indexOf", {writable: true, value: String.prototype.indexOf});
            Object.defineProperty(String.prototype, "nv_lastIndexOf", {
                writable: true,
                value: String.prototype.lastIndexOf
            });
            Object.defineProperty(String.prototype, "nv_localeCompare", {
                writable: true,
                value: String.prototype.localeCompare
            });
            Object.defineProperty(String.prototype, "nv_match", {writable: true, value: String.prototype.match});
            Object.defineProperty(String.prototype, "nv_replace", {writable: true, value: String.prototype.replace});
            Object.defineProperty(String.prototype, "nv_search", {writable: true, value: String.prototype.search});
            Object.defineProperty(String.prototype, "nv_slice", {writable: true, value: String.prototype.slice});
            Object.defineProperty(String.prototype, "nv_split", {writable: true, value: String.prototype.split});
            Object.defineProperty(String.prototype, "nv_substring", {
                writable: true,
                value: String.prototype.substring
            });
            Object.defineProperty(String.prototype, "nv_toLowerCase", {
                writable: true,
                value: String.prototype.toLowerCase
            });
            Object.defineProperty(String.prototype, "nv_toLocaleLowerCase", {
                writable: true,
                value: String.prototype.toLocaleLowerCase
            });
            Object.defineProperty(String.prototype, "nv_toUpperCase", {
                writable: true,
                value: String.prototype.toUpperCase
            });
            Object.defineProperty(String.prototype, "nv_toLocaleUpperCase", {
                writable: true,
                value: String.prototype.toLocaleUpperCase
            });
            Object.defineProperty(String.prototype, "nv_trim", {writable: true, value: String.prototype.trim});
            Object.defineProperty(String.prototype, "nv_length", {
                get: function () {
                    return this.length
                }, set: function (e) {
                    this.length = e
                }
            })
        };
        var I = function () {
            Object.defineProperty(Boolean.prototype, "nv_constructor", {writable: true, value: "Boolean"});
            Object.defineProperty(Boolean.prototype, "nv_toString", {
                writable: true,
                value: Boolean.prototype.toString
            });
            Object.defineProperty(Boolean.prototype, "nv_valueOf", {writable: true, value: Boolean.prototype.valueOf})
        };
        var L = function () {
            Object.defineProperty(Number, "nv_MAX_VALUE", {writable: false, value: Number.MAX_VALUE});
            Object.defineProperty(Number, "nv_MIN_VALUE", {writable: false, value: Number.MIN_VALUE});
            Object.defineProperty(Number, "nv_NEGATIVE_INFINITY", {writable: false, value: Number.NEGATIVE_INFINITY});
            Object.defineProperty(Number, "nv_POSITIVE_INFINITY", {writable: false, value: Number.POSITIVE_INFINITY});
            Object.defineProperty(Number.prototype, "nv_constructor", {writable: true, value: "Number"});
            Object.defineProperty(Number.prototype, "nv_toString", {writable: true, value: Number.prototype.toString});
            Object.defineProperty(Number.prototype, "nv_toLocaleString", {
                writable: true,
                value: Number.prototype.toLocaleString
            });
            Object.defineProperty(Number.prototype, "nv_valueOf", {writable: true, value: Number.prototype.valueOf});
            Object.defineProperty(Number.prototype, "nv_toFixed", {writable: true, value: Number.prototype.toFixed});
            Object.defineProperty(Number.prototype, "nv_toExponential", {
                writable: true,
                value: Number.prototype.toExponential
            });
            Object.defineProperty(Number.prototype, "nv_toPrecision", {
                writable: true,
                value: Number.prototype.toPrecision
            })
        };
        var E = function () {
            Object.defineProperty(Math, "nv_E", {writable: false, value: Math.E});
            Object.defineProperty(Math, "nv_LN10", {writable: false, value: Math.LN10});
            Object.defineProperty(Math, "nv_LN2", {writable: false, value: Math.LN2});
            Object.defineProperty(Math, "nv_LOG2E", {writable: false, value: Math.LOG2E});
            Object.defineProperty(Math, "nv_LOG10E", {writable: false, value: Math.LOG10E});
            Object.defineProperty(Math, "nv_PI", {writable: false, value: Math.PI});
            Object.defineProperty(Math, "nv_SQRT1_2", {writable: false, value: Math.SQRT1_2});
            Object.defineProperty(Math, "nv_SQRT2", {writable: false, value: Math.SQRT2});
            Object.defineProperty(Math, "nv_abs", {writable: false, value: Math.abs});
            Object.defineProperty(Math, "nv_acos", {writable: false, value: Math.acos});
            Object.defineProperty(Math, "nv_asin", {writable: false, value: Math.asin});
            Object.defineProperty(Math, "nv_atan", {writable: false, value: Math.atan});
            Object.defineProperty(Math, "nv_atan2", {writable: false, value: Math.atan2});
            Object.defineProperty(Math, "nv_ceil", {writable: false, value: Math.ceil});
            Object.defineProperty(Math, "nv_cos", {writable: false, value: Math.cos});
            Object.defineProperty(Math, "nv_exp", {writable: false, value: Math.exp});
            Object.defineProperty(Math, "nv_floor", {writable: false, value: Math.floor});
            Object.defineProperty(Math, "nv_log", {writable: false, value: Math.log});
            Object.defineProperty(Math, "nv_max", {writable: false, value: Math.max});
            Object.defineProperty(Math, "nv_min", {writable: false, value: Math.min});
            Object.defineProperty(Math, "nv_pow", {writable: false, value: Math.pow});
            Object.defineProperty(Math, "nv_random", {writable: false, value: Math.random});
            Object.defineProperty(Math, "nv_round", {writable: false, value: Math.round});
            Object.defineProperty(Math, "nv_sin", {writable: false, value: Math.sin});
            Object.defineProperty(Math, "nv_sqrt", {writable: false, value: Math.sqrt});
            Object.defineProperty(Math, "nv_tan", {writable: false, value: Math.tan})
        };
        var R = function () {
            Object.defineProperty(Date.prototype, "nv_constructor", {writable: true, value: "Date"});
            Object.defineProperty(Date, "nv_parse", {writable: true, value: Date.parse});
            Object.defineProperty(Date, "nv_UTC", {writable: true, value: Date.UTC});
            Object.defineProperty(Date, "nv_now", {writable: true, value: Date.now});
            Object.defineProperty(Date.prototype, "nv_toString", {writable: true, value: Date.prototype.toString});
            Object.defineProperty(Date.prototype, "nv_toDateString", {
                writable: true,
                value: Date.prototype.toDateString
            });
            Object.defineProperty(Date.prototype, "nv_toTimeString", {
                writable: true,
                value: Date.prototype.toTimeString
            });
            Object.defineProperty(Date.prototype, "nv_toLocaleString", {
                writable: true,
                value: Date.prototype.toLocaleString
            });
            Object.defineProperty(Date.prototype, "nv_toLocaleDateString", {
                writable: true,
                value: Date.prototype.toLocaleDateString
            });
            Object.defineProperty(Date.prototype, "nv_toLocaleTimeString", {
                writable: true,
                value: Date.prototype.toLocaleTimeString
            });
            Object.defineProperty(Date.prototype, "nv_valueOf", {writable: true, value: Date.prototype.valueOf});
            Object.defineProperty(Date.prototype, "nv_getTime", {writable: true, value: Date.prototype.getTime});
            Object.defineProperty(Date.prototype, "nv_getFullYear", {
                writable: true,
                value: Date.prototype.getFullYear
            });
            Object.defineProperty(Date.prototype, "nv_getUTCFullYear", {
                writable: true,
                value: Date.prototype.getUTCFullYear
            });
            Object.defineProperty(Date.prototype, "nv_getMonth", {writable: true, value: Date.prototype.getMonth});
            Object.defineProperty(Date.prototype, "nv_getUTCMonth", {
                writable: true,
                value: Date.prototype.getUTCMonth
            });
            Object.defineProperty(Date.prototype, "nv_getDate", {writable: true, value: Date.prototype.getDate});
            Object.defineProperty(Date.prototype, "nv_getUTCDate", {writable: true, value: Date.prototype.getUTCDate});
            Object.defineProperty(Date.prototype, "nv_getDay", {writable: true, value: Date.prototype.getDay});
            Object.defineProperty(Date.prototype, "nv_getUTCDay", {writable: true, value: Date.prototype.getUTCDay});
            Object.defineProperty(Date.prototype, "nv_getHours", {writable: true, value: Date.prototype.getHours});
            Object.defineProperty(Date.prototype, "nv_getUTCHours", {
                writable: true,
                value: Date.prototype.getUTCHours
            });
            Object.defineProperty(Date.prototype, "nv_getMinutes", {writable: true, value: Date.prototype.getMinutes});
            Object.defineProperty(Date.prototype, "nv_getUTCMinutes", {
                writable: true,
                value: Date.prototype.getUTCMinutes
            });
            Object.defineProperty(Date.prototype, "nv_getSeconds", {writable: true, value: Date.prototype.getSeconds});
            Object.defineProperty(Date.prototype, "nv_getUTCSeconds", {
                writable: true,
                value: Date.prototype.getUTCSeconds
            });
            Object.defineProperty(Date.prototype, "nv_getMilliseconds", {
                writable: true,
                value: Date.prototype.getMilliseconds
            });
            Object.defineProperty(Date.prototype, "nv_getUTCMilliseconds", {
                writable: true,
                value: Date.prototype.getUTCMilliseconds
            });
            Object.defineProperty(Date.prototype, "nv_getTimezoneOffset", {
                writable: true,
                value: Date.prototype.getTimezoneOffset
            });
            Object.defineProperty(Date.prototype, "nv_setTime", {writable: true, value: Date.prototype.setTime});
            Object.defineProperty(Date.prototype, "nv_setMilliseconds", {
                writable: true,
                value: Date.prototype.setMilliseconds
            });
            Object.defineProperty(Date.prototype, "nv_setUTCMilliseconds", {
                writable: true,
                value: Date.prototype.setUTCMilliseconds
            });
            Object.defineProperty(Date.prototype, "nv_setSeconds", {writable: true, value: Date.prototype.setSeconds});
            Object.defineProperty(Date.prototype, "nv_setUTCSeconds", {
                writable: true,
                value: Date.prototype.setUTCSeconds
            });
            Object.defineProperty(Date.prototype, "nv_setMinutes", {writable: true, value: Date.prototype.setMinutes});
            Object.defineProperty(Date.prototype, "nv_setUTCMinutes", {
                writable: true,
                value: Date.prototype.setUTCMinutes
            });
            Object.defineProperty(Date.prototype, "nv_setHours", {writable: true, value: Date.prototype.setHours});
            Object.defineProperty(Date.prototype, "nv_setUTCHours", {
                writable: true,
                value: Date.prototype.setUTCHours
            });
            Object.defineProperty(Date.prototype, "nv_setDate", {writable: true, value: Date.prototype.setDate});
            Object.defineProperty(Date.prototype, "nv_setUTCDate", {writable: true, value: Date.prototype.setUTCDate});
            Object.defineProperty(Date.prototype, "nv_setMonth", {writable: true, value: Date.prototype.setMonth});
            Object.defineProperty(Date.prototype, "nv_setUTCMonth", {
                writable: true,
                value: Date.prototype.setUTCMonth
            });
            Object.defineProperty(Date.prototype, "nv_setFullYear", {
                writable: true,
                value: Date.prototype.setFullYear
            });
            Object.defineProperty(Date.prototype, "nv_setUTCFullYear", {
                writable: true,
                value: Date.prototype.setUTCFullYear
            });
            Object.defineProperty(Date.prototype, "nv_toUTCString", {
                writable: true,
                value: Date.prototype.toUTCString
            });
            Object.defineProperty(Date.prototype, "nv_toISOString", {
                writable: true,
                value: Date.prototype.toISOString
            });
            Object.defineProperty(Date.prototype, "nv_toJSON", {writable: true, value: Date.prototype.toJSON})
        };
        var F = function () {
            Object.defineProperty(RegExp.prototype, "nv_constructor", {writable: true, value: "RegExp"});
            Object.defineProperty(RegExp.prototype, "nv_exec", {writable: true, value: RegExp.prototype.exec});
            Object.defineProperty(RegExp.prototype, "nv_test", {writable: true, value: RegExp.prototype.test});
            Object.defineProperty(RegExp.prototype, "nv_toString", {writable: true, value: RegExp.prototype.toString});
            Object.defineProperty(RegExp.prototype, "nv_source", {
                get: function () {
                    return this.source
                }, set: function () {
                }
            });
            Object.defineProperty(RegExp.prototype, "nv_global", {
                get: function () {
                    return this.global
                }, set: function () {
                }
            });
            Object.defineProperty(RegExp.prototype, "nv_ignoreCase", {
                get: function () {
                    return this.ignoreCase
                }, set: function () {
                }
            });
            Object.defineProperty(RegExp.prototype, "nv_multiline", {
                get: function () {
                    return this.multiline
                }, set: function () {
                }
            });
            Object.defineProperty(RegExp.prototype, "nv_lastIndex", {
                get: function () {
                    return this.lastIndex
                }, set: function (e) {
                    this.lastIndex = e
                }
            })
        };
        m();
        var J = function () {
            var e = Array.prototype.slice.call(arguments);
            e.unshift(Date);
            return new (Function.prototype.bind.apply(Date, e))
        };
        var B = function () {
            var e = Array.prototype.slice.call(arguments);
            e.unshift(RegExp);
            return new (Function.prototype.bind.apply(RegExp, e))
        };
        var Y = {};
        Y.nv_log = function () {
            var e = "WXSRT:";
            for (var t = 0; t < arguments.length; ++t) e += arguments[t] + " ";
            console.log(e)
        };
        var G = parseInt, X = parseFloat, H = isNaN, V = isFinite, $ = decodeURI, W = decodeURIComponent, Q = encodeURI,
            q = encodeURIComponent;

        function K(e, t, r) {
            e = A.rv(e);
            if (e === null || e === undefined) return e;
            if (typeof e === "string" || typeof e === "boolean" || typeof e === "number") return e;
            if (e.constructor === Object) {
                var n = {};
                for (var o in e) if (Object.prototype.hasOwnProperty.call(e, o)) if (undefined === t) n[o.substring(3)] = K(e[o], t, r); else n[t + o] = K(e[o], t, r);
                return n
            }
            if (e.constructor === Array) {
                var n = [];
                for (var a = 0; a < e.length; a++) n.push(K(e[a], t, r));
                return n
            }
            if (e.constructor === Date) {
                var n = new Date;
                n.setTime(e.getTime());
                return n
            }
            if (e.constructor === RegExp) {
                var i = "";
                if (e.global) i += "g";
                if (e.ignoreCase) i += "i";
                if (e.multiline) i += "m";
                return new RegExp(e.source, i)
            }
            if (r && typeof e === "function") {
                if (r == 1) return K(e(), undefined, 2);
                if (r == 2) return e
            }
            return null
        }

        var Z = {};
        Z.nv_stringify = function (e) {
            JSON.stringify(e);
            return JSON.stringify(K(e))
        };
        Z.nv_parse = function (e) {
            if (e === undefined) return undefined;
            var t = JSON.parse(e);
            return K(t, "nv_")
        };

        function ee(e, t, r, n) {
            e.extraAttr = {t_action: t, t_rawid: r};
            if (typeof n != "undefined") e.extraAttr.t_cid = n
        }

        function te() {
            if (typeof __globalThis.__webview_engine_version__ == "undefined") return 0;
            return __globalThis.__webview_engine_version__
        }

        function re(e, t, r, n, o, a) {
            var i = ne(t, r, n);
            if (i) e.push(i); else {
                e.push("");
                u(n + ":import:" + o + ":" + a + ": Path `" + t + "` not found from `" + n + "`.")
            }
        }

        function ne(e, t, r) {
            if (e[0] != "/") {
                var n = r.split("/");
                n.pop();
                var o = e.split("/");
                for (var a = 0; a < o.length; a++) {
                    if (o[a] == "..") n.pop(); else if (!o[a] || o[a] == ".") continue; else n.push(o[a])
                }
                e = n.join("/")
            }
            if (r[0] == "." && e[0] == "/") e = "." + e;
            if (t[e]) return e;
            if (t[e + ".wxml"]) return e + ".wxml"
        }

        function oe(e, t, r, n) {
            if (!t) return;
            if (n[e][t]) return n[e][t];
            for (var o = r[e].i.length - 1; o >= 0; o--) {
                if (r[e].i[o] && n[r[e].i[o]][t]) return n[r[e].i[o]][t]
            }
            for (var o = r[e].ti.length - 1; o >= 0; o--) {
                var a = ne(r[e].ti[o], r, e);
                if (a && n[a][t]) return n[a][t]
            }
            var i = ae(r, e);
            for (var o = 0; o < i.length; o++) {
                if (i[o] && n[i[o]][t]) return n[i[o]][t]
            }
            for (var p = r[e].j.length - 1; p >= 0; p--) if (r[e].j[p]) {
                for (var a = r[r[e].j[p]].ti.length - 1; a >= 0; a--) {
                    var u = ne(r[r[e].j[p]].ti[a], r, e);
                    if (u && n[u][t]) {
                        return n[u][t]
                    }
                }
            }
        }

        function ae(e, t) {
            if (!t) return [];
            if ($gaic[t]) {
                return $gaic[t]
            }
            var r = [], n = [], o = 0, a = 0, i = {}, p = {};
            n.push(t);
            p[t] = true;
            a++;
            while (o < a) {
                var u = n[o++];
                for (var l = 0; l < e[u].ic.length; l++) {
                    var f = e[u].ic[l];
                    var v = ne(f, e, u);
                    if (v && !p[v]) {
                        p[v] = true;
                        n.push(v);
                        a++
                    }
                }
                for (var l = 0; u != t && l < e[u].ti.length; l++) {
                    var c = e[u].ti[l];
                    var s = ne(c, e, u);
                    if (s && !i[s]) {
                        i[s] = true;
                        r.push(s)
                    }
                }
            }
            $gaic[t] = r;
            return r
        }

        var ie = {};

        function pe(e, t, r, n, o, a, i) {
            var p = ne(e, t, r);
            t[r].j.push(p);
            if (p) {
                if (ie[p]) {
                    u("-1:include:-1:-1: `" + e + "` is being included in a loop, will be stop.");
                    return
                }
                ie[p] = true;
                try {
                    t[p].f(n, o, a, i)
                } catch (n) {
                }
                ie[p] = false
            } else {
                u(r + ":include:-1:-1: Included path `" + e + "` not found from `" + r + "`.")
            }
        }

        function ue(e, t, r, n) {
            u(t + ":template:" + r + ":" + n + ": Template `" + e + "` not found.")
        }

        function le(e) {
            var t = false;
            delete e.properities;
            delete e.n;
            if (e.children) {
                do {
                    t = false;
                    var r = [];
                    for (var n = 0; n < e.children.length; n++) {
                        var o = e.children[n];
                        if (o.tag == "virtual") {
                            t = true;
                            for (var a = 0; o.children && a < o.children.length; a++) {
                                r.push(o.children[a])
                            }
                        } else {
                            r.push(o)
                        }
                    }
                    e.children = r
                } while (t);
                for (var n = 0; n < e.children.length; n++) {
                    le(e.children[n])
                }
            }
            return e
        }

        function fe(e) {
            if (e.tag == "wx-wx-scope") {
                e.tag = "virtual";
                e.wxCkey = "11";
                e["wxScopeData"] = e.attr["wx:scope-data"];
                delete e.n;
                delete e.raw;
                delete e.generics;
                delete e.attr
            }
            for (var t = 0; e.children && t < e.children.length; t++) {
                fe(e.children[t])
            }
            return e
        }

        return {
            a: D,
            b: S,
            c: v,
            d: e,
            e: t,
            f: u,
            g: r,
            h: s,
            i: n,
            j: o,
            k: A,
            l: T,
            m: a,
            n: f,
            o: c,
            p: i,
            q: y,
            r: N,
            s: b,
            t: d,
            u: h,
            v: p,
            w: l,
            x: _,
            y: w,
            z: O,
            A: j,
            B: P,
            C: M,
            D: J,
            E: B,
            F: Y,
            G: G,
            H: X,
            I: H,
            J: V,
            K: $,
            L: W,
            M: Q,
            N: q,
            O: K,
            P: Z,
            Q: ee,
            R: te,
            S: re,
            T: ne,
            U: oe,
            V: ae,
            W: ie,
            X: pe,
            Y: ue,
            Z: le,
            aa: fe
        }
    }()
});
Object.freeze(__g);
g = "";
__wxAppCode__['component/cell/index.json'] = {"component": true, "usingComponents": {}};
__wxAppCode__['component/coupon-item/index.json'] = {"component": true, "usingComponents": {}};
__wxAppCode__['component/custom-ad/index.json'] = {
    "component": true,
    "usingComponents": {"mx-popup": "/component/popup/index"}
};
__wxAppCode__['component/custom-login/index.json'] = {
    "component": true,
    "usingComponents": {"mx-popup": "/component/popup/index"}
};
__wxAppCode__['component/debug/index.json'] = {
    "component": true,
    "usingComponents": {"mx-popup": "/component/popup/index"}
};
__wxAppCode__['component/field/index.json'] = {"component": true, "usingComponents": {}};
__wxAppCode__['component/goods-detail/index.json'] = {"component": true, "usingComponents": {}};
__wxAppCode__['component/guide-to-app/index.json'] = {"component": true, "usingComponents": {}};
__wxAppCode__['component/picker/index.json'] = {
    "component": true,
    "usingComponents": {"mx-popup": "/component/popup/index"}
};
__wxAppCode__['component/popup/index.json'] = {"component": true, "usingComponents": {}};
__wxAppCode__['component/product-item/index.json'] = {"component": true, "usingComponents": {}};
__wxAppCode__['component/shop-item/index.json'] = {"component": true, "usingComponents": {}};
__wxAppCode__['component/swipe-cell/index.json'] = {"component": true, "usingComponents": {}};
__wxAppCode__['component/tab/index.json'] = {"component": true, "usingComponents": {}};
__wxAppCode__['component/tem-defee-info/index.json'] = {"component": true, "usingComponents": {}};
__wxAppCode__['component/tem-store-error/index.json'] = {"component": true, "usingComponents": {}};
__wxAppCode__['component/vtabs-content/index.json'] = {"component": true, "usingComponents": {}};
__wxAppCode__['component/vtabs/index.json'] = {"component": true, "usingComponents": {}};
__wxAppCode__['pages/combo/index.json'] = {
    "navigationBarTitleText": "套餐商品",
    "usingComponents": {"mx-popup": "../../component/popup/index", "goods-detail": "../../component/goods-detail/index"}
};
__wxAppCode__['pages/index/index.json'] = {
    "navigationStyle": "custom",
    "usingComponents": {
        "mx-popup": "/component/popup/index",
        "mx-ad": "/component/custom-ad/index",
        "mx-debug": "../../component/debug/index"
    }
};
__wxAppCode__['pages/menu/index.json'] = {
    "navigationStyle": "custom",
    "usingComponents": {
        "vtabs": "/component/vtabs/index",
        "vtabs-content": "/component/vtabs-content/index",
        "goods-detail": "/component/goods-detail/index",
        "mx-popup": "/component/popup/index",
        "mx-tem-store-error": "/component/tem-store-error/index",
        "mx-ad": "/component/custom-ad/index"
    }
};
__wxAppCode__['pages/mine/index.json'] = {
    "navigationStyle": "custom",
    "usingComponents": {"mx-guide-to-app": "../../component/guide-to-app/index"}
};
__wxAppCode__['pages/order/index.json'] = {
    "usingComponents": {"mx-tab": "/component/tab/index"},
    "navigationBarTitleText": ""
};
__wxAppCode__['pages/register/index.json'] = {"usingComponents": {"mx-login": "/component/custom-login/index"}};
__wxAppCode__['pages/store/index.json'] = {
    "navigationStyle": "custom",
    "usingComponents": {
        "mx-popup": "/component/popup/index",
        "mx-tem-store-error": "/component/tem-store-error/index",
        "mx-shop-item": "/component/shop-item/index",
        "mx-tab": "/component/tab/index"
    }
};
__wxAppCode__['pages/webView/index.json'] = {"usingComponents": {"mx-login": "/component/custom-login/index"}};
;var __WXML_DEP__ = __WXML_DEP__ || {};
__WXML_DEP__["./pages/menu/index.wxml"] = ["./pages/menu/index.skeleton.wxml",];
var __globalThis = (typeof __vd_version_info__ !== 'undefined' && typeof __vd_version_info__.globalThis !== 'undefined') ? __vd_version_info__.globalThis : window;
var __pageFrameStartTime__ = Date.now();
var __webviewId__;
var __wxAppCode__ = __wxAppCode__ || {};
var __mainPageFrameReady__ = __globalThis.__mainPageFrameReady__ || function () {
};
var __WXML_GLOBAL__ = __WXML_GLOBAL__ || {
    entrys: {},
    defines: {},
    modules: {},
    ops: [],
    wxs_nf_init: undefined,
    total_ops: 0
};
;/*v0.5vv_20200413_syb_scopedata*/
__globalThis.__wcc_version__ = 'v0.5vv_20200413_syb_scopedata';
__globalThis.__wcc_version_info__ = {"customComponents": true, "fixZeroRpx": true, "propValueDeepCopy": false};
var $gwxc
var $gaic = {}
var outerGlobal = typeof __globalThis === 'undefined' ? window : __globalThis;
$gwx = function (_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
    return function (path, global) {
        if (typeof global === 'undefined') {
            if (typeof __GWX_GLOBAL__ === 'undefined') global = {}; else global = __GWX_GLOBAL__;
        }
        if (typeof __WXML_GLOBAL__ === 'undefined') {
            __WXML_GLOBAL__ = {};
        }
        __WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
        var e_ = {}
        if (typeof (global.entrys) === 'undefined') global.entrys = {};
        e_ = global.entrys;
        var d_ = {}
        if (typeof (global.defines) === 'undefined') global.defines = {};
        d_ = global.defines;
        var f_ = {}
        if (typeof (global.modules) === 'undefined') global.modules = {};
        f_ = global.modules || {};
        var p_ = {}
        __WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
        __WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
        __WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
        var z = __WXML_GLOBAL__.ops_set.$gwx || [];

        function gz$gwx_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx_1) return __WXML_GLOBAL__.ops_cached.$gwx_1
            __WXML_GLOBAL__.ops_cached.$gwx_1 = [];
            (function (z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }

                Z([3, 'skeleton'])
                Z([3, 'sk-container'])
                Z([a, [3, 'padding-top:'], [[2, '+'], [[2, '*'], [[7], [3, 'statusBarHeight']], [1, 2]], [1, 88]], [3, 'rpx']])
                Z([3, 'store-info'])
                Z([3, 'flex-sb'])
                Z([3, 'fb sk-text sk-pseudo'])
                Z([3, 'width:500rpx;height:50rpx'])
                Z([3, 'sk-text'])
                Z([3, 'width:100rpx;height:70rpx'])
                Z([3, 'f12 sk-text'])
                Z([3, 'width:500rpx;height:40rpx'])
                Z([3, 'vtabs'])
                Z([3, 'vtabs-bar__wrp'])
                Z([3, 'vtabs-bar__item flex-center active sk-pseudo'])
                Z(z[7])
                Z([3, '奶茶特饮'])
                Z([3, 'vtabs-bar__item flex-center fillet-down'])
                Z(z[7])
                Z(z[15])
                Z([3, 'vtabs-bar__item vtabs-bar__item flex-center'])
                Z(z[7])
                Z(z[15])
                Z([3, 'vtabs-bar__item flex-center'])
                Z(z[7])
                Z(z[15])
                Z(z[22])
                Z(z[7])
                Z(z[15])
                Z(z[22])
                Z(z[7])
                Z(z[15])
                Z(z[22])
                Z(z[7])
                Z(z[15])
                Z(z[22])
                Z(z[7])
                Z(z[15])
                Z(z[22])
                Z(z[7])
                Z(z[15])
                Z([3, 'vtabs-bar__item'])
                Z([3, 'vtabs-content__wrp'])
                Z([3, 'component/vtabs-content/index'])
                Z([3, 'content-index--vtabs-content__item'])
                Z([3, 'vtabs-content__item'])
                Z([3, 'menu-swiper sk-image'])
                Z([3, 'width:530rpx'])
                Z([3, 'category-name f12 sk-text-272 sk-text'])
                Z([3, '新品'])
                Z([3, 'goods-item'])
                Z([3, 'goods-img sk-image'])
                Z([3, 'goods-text'])
                Z([3, 'f14 fb sk-text sk-text-title'])
                Z([3, '草莓中中中中中中中'])
                Z([3, 'goods-desc f11 sk-text'])
                Z([3, '好喝，好喝，非常好喝，无比好喝'])
                Z([3, 'number-buttons'])
                Z([3, 'top:100rpx'])
                Z([3, 'sk-image'])
                Z(z[49])
                Z(z[50])
                Z(z[51])
                Z(z[52])
                Z([3, '港式杨枝甘露（冷链）'])
                Z(z[54])
                Z([3, '这是一杯鲜美无比的果茶'])
                Z(z[56])
                Z(z[57])
                Z(z[58])
                Z(z[49])
                Z(z[50])
                Z(z[51])
                Z(z[52])
                Z([3, '巧克力脆皮冰淇淋（原味）'])
                Z(z[54])
                Z([3, '冰爽香脆，一口好滋味'])
                Z(z[56])
                Z(z[57])
                Z(z[58])
                Z(z[49])
                Z(z[50])
                Z(z[51])
                Z([3, 'f14 fb sk-text-title sk-text'])
                Z([3, '巧克力脆皮冰淇冰淇'])
                Z(z[54])
                Z(z[75])
                Z(z[56])
                Z(z[57])
                Z(z[58])
            })(__WXML_GLOBAL__.ops_cached.$gwx_1);
            return __WXML_GLOBAL__.ops_cached.$gwx_1
        }

        __WXML_GLOBAL__.ops_set.$gwx = z;
        __WXML_GLOBAL__.ops_init.$gwx = true;
        var nv_require = function () {
            var nnm = {};
            var nom = {};
            return function (n) {
                if (n[0] === 'p' && n[1] === '_' && f_[n.slice(2)]) return f_[n.slice(2)];
                return function () {
                    if (!nnm[n]) return undefined;
                    try {
                        if (!nom[n]) nom[n] = nnm[n]();
                        return nom[n];
                    } catch (e) {
                        e.message = e.message.replace(/nv_/g, '');
                        var tmp = e.stack.substring(0, e.stack.lastIndexOf(n));
                        e.stack = tmp.substring(0, tmp.lastIndexOf('\n'));
                        e.stack = e.stack.replace(/\snv_/g, ' ');
                        e.stack = $gstack(e.stack);
                        e.stack += '\n    at ' + n.substring(2);
                        console.error(e);
                    }
                }
            }
        }()
        var x = ['./pages/menu/index.skeleton.wxml'];
        d_[x[0]] = {}
        d_[x[0]]["skeleton"] = function (e, s, r, gg) {
            var z = gz$gwx_1()
            var b = x[0] + ':skeleton'
            r.wxVkey = b
            gg.f = $gdc(f_["./pages/menu/index.skeleton.wxml"], "", 1)
            if (p_[b]) {
                _wl(b, x[0]);
                return
            }
            p_[b] = true
            try {
                var oB = _mz(z, 'view', ['class', 1, 'style', 1], [], e, s, gg)
                var xC = _n('view')
                _rz(z, xC, 'class', 3, e, s, gg)
                var oD = _n('view')
                _rz(z, oD, 'class', 4, e, s, gg)
                var fE = _mz(z, 'view', ['class', 5, 'style', 1], [], e, s, gg)
                _(oD, fE)
                var cF = _mz(z, 'view', ['class', 7, 'style', 1], [], e, s, gg)
                _(oD, cF)
                _(xC, oD)
                var hG = _mz(z, 'view', ['class', 9, 'style', 1], [], e, s, gg)
                _(xC, hG)
                _(oB, xC)
                var oH = _n('view')
                _rz(z, oH, 'class', 11, e, s, gg)
                var cI = _n('view')
                _rz(z, cI, 'class', 12, e, s, gg)
                var oJ = _n('view')
                _rz(z, oJ, 'class', 13, e, s, gg)
                var lK = _n('text')
                _rz(z, lK, 'class', 14, e, s, gg)
                var aL = _oz(z, 15, e, s, gg)
                _(lK, aL)
                _(oJ, lK)
                _(cI, oJ)
                var tM = _n('view')
                _rz(z, tM, 'class', 16, e, s, gg)
                var eN = _n('text')
                _rz(z, eN, 'class', 17, e, s, gg)
                var bO = _oz(z, 18, e, s, gg)
                _(eN, bO)
                _(tM, eN)
                _(cI, tM)
                var oP = _n('view')
                _rz(z, oP, 'class', 19, e, s, gg)
                var xQ = _n('text')
                _rz(z, xQ, 'class', 20, e, s, gg)
                var oR = _oz(z, 21, e, s, gg)
                _(xQ, oR)
                _(oP, xQ)
                _(cI, oP)
                var fS = _n('view')
                _rz(z, fS, 'class', 22, e, s, gg)
                var cT = _n('text')
                _rz(z, cT, 'class', 23, e, s, gg)
                var hU = _oz(z, 24, e, s, gg)
                _(cT, hU)
                _(fS, cT)
                _(cI, fS)
                var oV = _n('view')
                _rz(z, oV, 'class', 25, e, s, gg)
                var cW = _n('text')
                _rz(z, cW, 'class', 26, e, s, gg)
                var oX = _oz(z, 27, e, s, gg)
                _(cW, oX)
                _(oV, cW)
                _(cI, oV)
                var lY = _n('view')
                _rz(z, lY, 'class', 28, e, s, gg)
                var aZ = _n('text')
                _rz(z, aZ, 'class', 29, e, s, gg)
                var t1 = _oz(z, 30, e, s, gg)
                _(aZ, t1)
                _(lY, aZ)
                _(cI, lY)
                var e2 = _n('view')
                _rz(z, e2, 'class', 31, e, s, gg)
                var b3 = _n('text')
                _rz(z, b3, 'class', 32, e, s, gg)
                var o4 = _oz(z, 33, e, s, gg)
                _(b3, o4)
                _(e2, b3)
                _(cI, e2)
                var x5 = _n('view')
                _rz(z, x5, 'class', 34, e, s, gg)
                var o6 = _n('text')
                _rz(z, o6, 'class', 35, e, s, gg)
                var f7 = _oz(z, 36, e, s, gg)
                _(o6, f7)
                _(x5, o6)
                _(cI, x5)
                var c8 = _n('view')
                _rz(z, c8, 'class', 37, e, s, gg)
                var h9 = _n('text')
                _rz(z, h9, 'class', 38, e, s, gg)
                var o0 = _oz(z, 39, e, s, gg)
                _(h9, o0)
                _(c8, h9)
                _(cI, c8)
                var cAB = _n('view')
                _rz(z, cAB, 'class', 40, e, s, gg)
                _(cI, cAB)
                _(oH, cI)
                var oBB = _n('view')
                _rz(z, oBB, 'class', 41, e, s, gg)
                var lCB = _n('view')
                _rz(z, lCB, 'is', 42, e, s, gg)
                var aDB = _n('view')
                _rz(z, aDB, 'class', 43, e, s, gg)
                var tEB = _n('view')
                _rz(z, tEB, 'class', 44, e, s, gg)
                var eFB = _mz(z, 'image', ['class', 45, 'style', 1], [], e, s, gg)
                _(tEB, eFB)
                var bGB = _n('view')
                _rz(z, bGB, 'class', 47, e, s, gg)
                var oHB = _oz(z, 48, e, s, gg)
                _(bGB, oHB)
                _(tEB, bGB)
                var xIB = _n('view')
                _rz(z, xIB, 'class', 49, e, s, gg)
                var oJB = _n('image')
                _rz(z, oJB, 'class', 50, e, s, gg)
                _(xIB, oJB)
                var fKB = _n('view')
                _rz(z, fKB, 'class', 51, e, s, gg)
                var cLB = _n('text')
                _rz(z, cLB, 'class', 52, e, s, gg)
                var hMB = _oz(z, 53, e, s, gg)
                _(cLB, hMB)
                _(fKB, cLB)
                var oNB = _n('view')
                _rz(z, oNB, 'class', 54, e, s, gg)
                var cOB = _oz(z, 55, e, s, gg)
                _(oNB, cOB)
                _(fKB, oNB)
                var oPB = _mz(z, 'view', ['class', 56, 'style', 1], [], e, s, gg)
                var lQB = _n('image')
                _rz(z, lQB, 'class', 58, e, s, gg)
                _(oPB, lQB)
                _(fKB, oPB)
                _(xIB, fKB)
                _(tEB, xIB)
                var aRB = _n('view')
                _rz(z, aRB, 'class', 59, e, s, gg)
                var tSB = _n('image')
                _rz(z, tSB, 'class', 60, e, s, gg)
                _(aRB, tSB)
                var eTB = _n('view')
                _rz(z, eTB, 'class', 61, e, s, gg)
                var bUB = _n('text')
                _rz(z, bUB, 'class', 62, e, s, gg)
                var oVB = _oz(z, 63, e, s, gg)
                _(bUB, oVB)
                _(eTB, bUB)
                var xWB = _n('view')
                _rz(z, xWB, 'class', 64, e, s, gg)
                var oXB = _oz(z, 65, e, s, gg)
                _(xWB, oXB)
                _(eTB, xWB)
                var fYB = _mz(z, 'view', ['class', 66, 'style', 1], [], e, s, gg)
                var cZB = _n('image')
                _rz(z, cZB, 'class', 68, e, s, gg)
                _(fYB, cZB)
                _(eTB, fYB)
                _(aRB, eTB)
                _(tEB, aRB)
                var h1B = _n('view')
                _rz(z, h1B, 'class', 69, e, s, gg)
                var o2B = _n('image')
                _rz(z, o2B, 'class', 70, e, s, gg)
                _(h1B, o2B)
                var c3B = _n('view')
                _rz(z, c3B, 'class', 71, e, s, gg)
                var o4B = _n('text')
                _rz(z, o4B, 'class', 72, e, s, gg)
                var l5B = _oz(z, 73, e, s, gg)
                _(o4B, l5B)
                _(c3B, o4B)
                var a6B = _n('view')
                _rz(z, a6B, 'class', 74, e, s, gg)
                var t7B = _oz(z, 75, e, s, gg)
                _(a6B, t7B)
                _(c3B, a6B)
                var e8B = _mz(z, 'view', ['class', 76, 'style', 1], [], e, s, gg)
                var b9B = _n('image')
                _rz(z, b9B, 'class', 78, e, s, gg)
                _(e8B, b9B)
                _(c3B, e8B)
                _(h1B, c3B)
                _(tEB, h1B)
                var o0B = _n('view')
                _rz(z, o0B, 'class', 79, e, s, gg)
                var xAC = _n('image')
                _rz(z, xAC, 'class', 80, e, s, gg)
                _(o0B, xAC)
                var oBC = _n('view')
                _rz(z, oBC, 'class', 81, e, s, gg)
                var fCC = _n('text')
                _rz(z, fCC, 'class', 82, e, s, gg)
                var cDC = _oz(z, 83, e, s, gg)
                _(fCC, cDC)
                _(oBC, fCC)
                var hEC = _n('view')
                _rz(z, hEC, 'class', 84, e, s, gg)
                var oFC = _oz(z, 85, e, s, gg)
                _(hEC, oFC)
                _(oBC, hEC)
                var cGC = _mz(z, 'view', ['class', 86, 'style', 1], [], e, s, gg)
                var oHC = _n('image')
                _rz(z, oHC, 'class', 88, e, s, gg)
                _(cGC, oHC)
                _(oBC, cGC)
                _(o0B, oBC)
                _(tEB, o0B)
                _(aDB, tEB)
                _(lCB, aDB)
                _(oBB, lCB)
                _(oH, oBB)
                _(oB, oH)
                _(r, oB)
            } catch (err) {
                p_[b] = false
                throw err
            }
            p_[b] = false
            return r
        }
        var m0 = function (e, s, r, gg) {
            var z = gz$gwx_1()
            return r
        }
        e_[x[0]] = e_[x[0]] || {f: m0, j: [], i: [], ti: [], ic: []}
        if (path && e_[path]) {
            outerGlobal.__wxml_comp_version__ = 0.02
            return function (env, dd, global) {
                $gwxc = 0;
                var root = {"tag": "wx-page"};
                root.children = []
                ;g = "$gwx";
                var main = e_[path].f
                if (typeof global === "undefined") global = {};
                global.f = $gdc(f_[path], "", 1);
                if (typeof (outerGlobal.__webview_engine_version__) != 'undefined' && outerGlobal.__webview_engine_version__ + 1e-6 >= 0.02 + 1e-6 && outerGlobal.__mergeData__) {
                    env = outerGlobal.__mergeData__(env, dd);
                }
                try {
                    main(env, {}, root, global);
                    _tsd(root)
                    if (typeof (outerGlobal.__webview_engine_version__) == 'undefined' || outerGlobal.__webview_engine_version__ + 1e-6 < 0.01 + 1e-6) {
                        return _ev(root);
                    }
                } catch (err) {
                    console.log(err)
                }
                ;g = "";
                return root;
            }
        }
    }
}(__g.a, __g.b, __g.c, __g.d, __g.e, __g.f, __g.g, __g.h, __g.i, __g.j, __g.k, __g.l, __g.m, __g.n, __g.o, __g.p, __g.q, __g.r, __g.s, __g.t, __g.u, __g.v, __g.w, __g.x, __g.y, __g.z, __g.A, __g.B, __g.C, __g.D, __g.E, __g.F, __g.G, __g.H, __g.I, __g.J, __g.K, __g.L, __g.M, __g.N, __g.O, __g.P, __g.Q, __g.R, __g.S, __g.T, __g.U, __g.V, __g.W, __g.X, __g.Y, __g.Z, __g.aa);
if (__vd_version_info__.delayedGwx || true) $gwx();
;
if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/menu/index.skeleton.wxml'] = [$gwx, './pages/menu/index.skeleton.wxml']; else __wxAppCode__['pages/menu/index.skeleton.wxml'] = $gwx('./pages/menu/index.skeleton.wxml');
;var noCss = typeof __vd_version_info__ !== 'undefined' && __vd_version_info__.noCss === true;
if (!noCss) {
    var BASE_DEVICE_WIDTH = 750;
    var isIOS = navigator.userAgent.match("iPhone");
    var deviceWidth = window.screen.width || 375;
    var deviceDPR = window.devicePixelRatio || 2;
    var checkDeviceWidth = window.__checkDeviceWidth__ || function () {
        var newDeviceWidth = window.screen.width || 375
        var newDeviceDPR = window.devicePixelRatio || 2
        var newDeviceHeight = window.screen.height || 375
        if (window.screen.orientation && /^landscape/.test(window.screen.orientation.type || '')) newDeviceWidth = newDeviceHeight
        if (newDeviceWidth !== deviceWidth || newDeviceDPR !== deviceDPR) {
            deviceWidth = newDeviceWidth
            deviceDPR = newDeviceDPR
        }
    }
    checkDeviceWidth()
    var eps = 1e-4;
    var transformRPX = window.__transformRpx__ || function (number, newDeviceWidth) {
        if (number === 0) return 0;
        number = number / BASE_DEVICE_WIDTH * (newDeviceWidth || deviceWidth);
        number = Math.floor(number + eps);
        if (number === 0) {
            if (deviceDPR === 1 || !isIOS) {
                return 1;
            } else {
                return 0.5;
            }
        }
        return number;
    }
    window.__rpxRecalculatingFuncs__ = window.__rpxRecalculatingFuncs__ || [];
    var __COMMON_STYLESHEETS__ = __COMMON_STYLESHEETS__ || {}
    if (!__COMMON_STYLESHEETS__.hasOwnProperty('./pages/menu/index.skeleton.wxss')) __COMMON_STYLESHEETS__['./pages/menu/index.skeleton.wxss'] = [".", [1], "sk-container{background:#fff;height:100%;left:0;overflow:hidden;position:absolute;top:0;width:100%;z-index:189}\n.", [1], "sk-text{background-clip:content-box!important;background-image:-webkit-linear-gradient(transparent 13%,#eee 0,#eee 86%,transparent 0)!important;background-image:linear-gradient(transparent 13%,#eee 0,#eee 86%,transparent 0)!important;background-size:100% 90%;color:transparent!important}\n.", [1], "sk-text-272{background-image:-webkit-linear-gradient(transparent 35%,#eee 0,#eee 65%,transparent 0)!important;background-image:linear-gradient(transparent 35%,#eee 0,#eee 65%,transparent 0)!important}\n.", [1], "sk-text.", [1], "sk-text-title{background-size:100% ", [0, 40], "}\n.", [1], "sk-image{background:#efefef!important}\n.", [1], "sk-pseudo::after,.", [1], "sk-pseudo::before{background:#efefef!important;color:transparent!important}\n.", [1], "number-buttons .", [1], "sk-image{height:", [0, 44], ";width:", [0, 44], "}\n",];
    var setCssToHead = function (file, _xcInvalid, info) {
        var Ca = {};
        var css_id;
        var info = info || {};
        var _C = __COMMON_STYLESHEETS__

        function makeup(file, opt) {
            var _n = typeof (file) === "string";
            if (_n && Ca.hasOwnProperty(file)) return "";
            if (_n) Ca[file] = 1;
            var ex = _n ? _C[file] : file;
            var res = "";
            for (var i = ex.length - 1; i >= 0; i--) {
                var content = ex[i];
                if (typeof (content) === "object") {
                    var op = content[0];
                    if (op == 0)
                        res = transformRPX(content[1], opt.deviceWidth) + "px" + res;
                    else if (op == 1)
                        res = opt.suffix + res;
                    else if (op == 2)
                        res = makeup(content[1], opt) + res;
                } else
                    res = content + res
            }
            return res;
        }

        var styleSheetManager = window.__styleSheetManager2__
        var rewritor = function (suffix, opt, style) {
            opt = opt || {};
            suffix = suffix || "";
            opt.suffix = suffix;
            if (opt.allowIllegalSelector != undefined && _xcInvalid != undefined) {
                if (opt.allowIllegalSelector)
                    console.warn("For developer:" + _xcInvalid);
                else {
                    console.error(_xcInvalid);
                }
            }
            Ca = {};
            css = makeup(file, opt);
            if (styleSheetManager) {
                var key = (info.path || Math.random()) + ':' + suffix
                if (!style) {
                    styleSheetManager.addItem(key, info.path);
                    window.__rpxRecalculatingFuncs__.push(function (size) {
                        opt.deviceWidth = size.width;
                        rewritor(suffix, opt, true);
                    });
                }
                styleSheetManager.setCss(key, css);
                return;
            }
            if (!style) {
                var head = document.head || document.getElementsByTagName('head')[0];
                style = document.createElement('style');
                style.type = 'text/css';
                style.setAttribute("wxss:path", info.path);
                head.appendChild(style);
                window.__rpxRecalculatingFuncs__.push(function (size) {
                    opt.deviceWidth = size.width;
                    rewritor(suffix, opt, style);
                });
            }
            if (style.styleSheet) {
                style.styleSheet.cssText = css;
            } else {
                if (style.childNodes.length == 0)
                    style.appendChild(document.createTextNode(css));
                else
                    style.childNodes[0].nodeValue = css;
            }
        }
        return rewritor;
    }
    setCssToHead([])();
    setCssToHead(["body{box-sizing:border-box;color:#333;font-family:-apple-system,Helvetica Neue,Helvetica,Segoe UI,Arial,Roboto,PingFang SC,miui,Hiragino Sans GB,Microsoft Yahei,sans-serif;font-size:", [0, 32], "}\n::-webkit-scrollbar{color:transparent;display:none;height:0;width:0}\nwx-button{-webkit-box-align:center;-webkit-box-pack:center;-webkit-align-items:center;align-items:center;background-color:#e60012;border:none;border-radius:", [0, 8], ";color:#fff;display:-webkit-box;display:-webkit-flex;display:flex;font-size:", [0, 32], ";font-weight:500;height:", [0, 88], ";-webkit-justify-content:center;justify-content:center;margin:0;padding:0 ", [0, 28], "}\nwx-button::after{border:none}\nwx-button.", [1], "plain{background-color:#fff;border:1px solid #e60012;color:#e60012}\nwx-button[disabled]:not([type]){background-color:#faccd0;color:#fff}\nwx-button.", [1], "small{display:inline-block;font-size:", [0, 24], ";height:", [0, 60], ";line-height:", [0, 60], "}\nwx-button.", [1], "mini{display:inline-block;font-size:", [0, 22], ";height:", [0, 50], ";line-height:", [0, 50], "}\n.", [1], "wx-swiper-dot{border-radius:", [0, 8], "!important;height:", [0, 8], "!important;margin:0 ", [0, 4], "!important;width:", [0, 8], "!important}\n.", [1], "wx-swiper-dot-active{width:", [0, 30], "!important}\n@font-face{font-family:iconfont;src:url(\x22data:font/woff;charset\x3dutf-8;base64,d09GRgABAAAAABGMAA0AAAAAGkgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABGRlRNAAARcAAAABoAAAAckndtlUdERUYAABFQAAAAHgAAAB4AKQAgT1MvMgAAAaQAAABGAAAAYDw8S5tjbWFwAAACNAAAAIwAAAG6OTo5OWdhc3AAABFIAAAACAAAAAj//wADZ2x5ZgAAAvgAAAxRAAASdBqDAdxoZWFkAAABMAAAADEAAAA2H+eKuGhoZWEAAAFkAAAAIAAAACQH0wPeaG10eAAAAewAAABHAAAAUjhqBLlsb2NhAAACwAAAADYAAAA2Q94+qG1heHAAAAGEAAAAHwAAACABLQCfbmFtZQAAD0wAAAFGAAACgl6CAQJwb3N0AAAQlAAAALIAAAEL/4MEgXjaY2BkYGAA4lTe+Mfx/DZfGbhZGEDgXuZiNxj9//j/XhY95kVALgcDE0gUADxmC/gAAAB42mNgZGBgbvjfwBDD4vf/OAMDix4DUAQF8AMAe+YEunjaY2BkYGCQYpjMwMkAAkxAzAWEDAz/wXwGABoyAc0AeNpjYGFhYZzAwMrAwNTJdIaBgaEfQjO+ZjBi5ACKMrAyM2AFAWmuKQwHnrG/OMHc8L+BgYH5DgOQZGBEUqLAwAgAe9ENVAAAeNpjYYAAxlAGBhY/BjkWBgZjIFYAYgcglgJiOyDWAmITIK4HYlUWlf/HgbQ9ozzDFgY3BgUGByB0YqhnaGIUZbAEAPcCCFkAeNpjYGBgZoBgGQZGBhDYAuQxgvksDDOAtBKDApDF9Iz9Gd8zwWfKz3SeBTxLepbxLPvZ9ueqzw2e5z0vev7gxYn//xkYgGq44WoSn6VB1egj1Ej+kfwp+V3ymeQ9yd2SqyVXSC6TjJZ4J/FUYoXEUgkL8UCoGwgARjYGuEJGJiDBhK6AYdgDAG6vOrsAAAAAAAAAAACsASYBuAI4AvwDUgOiBFQEvAUuBfQGYAaGBrwHKAeIB/QIOAiCCKgIzgjyCToAAHjalVh7bBzlEf8e+7jd8+3e3e7t3sN359vz7Tl+nJN7+vw4X0xCXg4YaOwQwJCAQ2IgBAjl0SqkSYrihKq0VUBQXqVRqVBbITU8SisEoYJSggr/VIKCSkGCFhqpTqtSVdxe51vbOEaJRM+r2fm+b77Zb2ZnfjNrxKFE80dcjl6FvKgbbUC3IZRJWXaxXEjlE1jA2RxOpyxBxYKZIIV8uWKYxjyt4UpZzBtxbChMJoeHcLHMxrpRSBllNqJ5I4mNkIKzlg2aurAliAo+k0/DoDiMa7hAXnJ+F4hEArgUjJAwvmCjsrqjcaTzfKXuoWLfRL734tZ4R+fkRXGgV45XPZ7pYJimhjKNXe2D6Uh7OBIkR4ORyLhicBupZ2Vnx4DMmX6vEqFybeMg42U1zMlDdmddIHUurG4Mp8Nw4c9ey+Tyy16JtS7f2J1tT2shl3SP5hJ/CQc/Sw9Y1kD6s2AY+GAYR1z6ut/3mkfurOCetKKqSrpn4V5ZJnteUQMIcajQvI++QafBr62oji5CCFsKFkOpUjFHMLhUDOiGmQJfBsDFOG+CS+O4kE+QUECfd2gpUKzhAVwqVsqVsgbbDTOkg/uHwF85TFBhc5niI8m+dbilcX9rJ7VbyZ54J8VdCee10ZF6JluJ9KS1VF+qsQUIXAN2pr5yKrrMpxmGZRqa0knj+U3FrRPZdX1x53671XneVYNXJzvxsyA8MjoWtHoizqFUX1tbXwrfDkrGRkeGbdsxkit6lQOBcDhwwLc8n0TM5rbmY/R9iKUOVETr0CTYXAZ7dPaizRCECdhUKdnlSg1ni7YlhMBQu2LXiAaxphAwuAhmioIo6MwdeWZ2MWvDn+seP1tpY2M/WyEoVVseyWWDQYwlzQjKBHe0m1HcN9YXSoQIifQO9/gMmdeiYSUi7Jq8rFyplC+bfHeB2bV/9w3DIyPDN+x2Pl/gyAwO9w6lcheG/T1h6tW9cNHuCyNKT6yjr69DDWFDtWq9pmOp4WiQlw0fBOu1S9S6zOhStZhjHLgICaje/A59kd6CPCiM2tFydD4aBz/lk7iUDlXKptWLRQH8lA2kArqQNheS0QAvnsHDfI6w+CBuoroxAxkFd0i+fBlW7DQJBtWBZ/rVvT7fJV/zJaIgcaEVvtQZ8xuGHz8F9FbnuMuPAn2q8WBrsSMU6ii2ku32Stte2dgTy2RiZLtLbxejb7wRFW/mMxnBF1Zw0TlpJP9mtBlwHTfZzXzb3XuSabHr2UYxW7fpA5lYo+gqOBnLgP0SijYfpB/R7agFRZCNymg92oJ2ob3o+wjxlv0FhggMGQJsADYJYHlpfgBWzAkAgrjihUoaUgNmEpArgEowl8P0K8h8JT3Izyw0XvYbmFmJx9nYxEbjx0YiYZx0yck5kJi/nWMev3eOhWtM/3PsLTznN00/3qeapursW8rTvQs7jcTo4pPYrXH8nEv43EuIolrzBXqCjiAdLUMlFoEsxXSWYhZLMRdzKmdLRg3Aay7KijZBuyYvZ3F/OcT9PLPrzp3bB4eGBrfv/NcCc55ztxoKqfhOoDS0RNplepZIu4xzNSQxXBAzBHU2f0bfo2MohfIQJeWs3YvhNCX3OItHLLAzMiaTw5AYAKW6Qiyb/kERqHCsO9o6UN029enUtv6Bgf5tU7eu3bRh6BjvURp6qVrdefjozM7+6vTM0cOrFNXDH+tfPbrmtqmrmezVU6cY09624phI+I9KR44ema5Wp+ducD4PKjZ/SH9L90BMhyCmC2gNmkBT6Bbm1QTWXdwDJDeZ35jXRF7BCVyA02YAyIlgCobJGzVsZzO2wC+k82IJKPCppanNZKAmp0GgXCm4I9EVLw9j/LlVTaWqq/pTqX4rFI8vi8d3O6cl0aP5eNmDfR6R+IL6N2SuBSstSY1rcf7pS+JIut+y+tONXXN3sqfxZFt3dxsZB+o8pBpEU3lHDVG44fvmh9NzY7rHqq6qWi4ZZY9bFl/3psc0IVGFtwRN94vU15KU3pK4cFJ+U+ZeAf3OnRaLRQvfDc8b60k6T7On4Q3JnmN6wiQ4BGQvI+7IrS13NX9D99G66+MeNDJXTyFXIVNZnjJoZMBI3XgwE9hcAUHLOou5MNHAX9ncfC11Yx3qEkFd67u61o8z0gUAP9bXt2zHlolCEeNa/6wUkf4xUC8VJi496A/+/sOe5d2dazf8YsPazu4uctX8LiBNxPaN9eH3S8WJy3ZceG/5Q0n6oPyDMVdT46cB9cU/9nx9eIJtZBomBnczezLNe+mf6PnIRL1oGK0FewD0IZqhSYBwhvNDyrEWq0jZjJVlq0V3Ju+u6hkFmqgCq47URUa6EF70mfaDmzaf2LzpYHsms8huS960fvQno+tvSra1LbLOd4mpCoLq8XLhZT12zUgmu5NJ0r7pQLtttx/YdOlLm8cPMD0Hxje/1ETr5navG31idN1NbfBjrDdkUlEO4aieSoWcB5iCbmgIuOarzQe5OH0cYahy29G3EaIr+LnTi3pIFFSOmZZOQRsEL8MN4KztGpqlabdL7CXM5AFWHuGNJUnIBNA253qKL1pJ6BoqrKeo1EiGrTLnfLE457JhlhnlSpWTEn7Jy4kEY6wYYU0MePVk420/8Re0ROMd0eflFIn3cDy98oKA5qECk/No3utCLV6eF4nAySQh6ZIW9XNU8vnaO9u9ikp5URH8HqHF51ystyuizHlURWnvSCuKInKyyPMyL0g8Tx//3MNJQksLz4kczQ6vLutxj/+KLj1JKSepol8yWvCnqlf0Cl5vSOFFXuQ4r6QFhNWNX1JOjFm6pHv8qk/1t6iWJgelgCJ4KaWYwoNUj2ZbaosKl2VrHlXkqcjWWPogHg03n6Av0UtREvC+AB3pRoi4dKlos0Y8DlACwTOAv8CYAgukTLE84BbJNHZfD9TgFGbtJ2ve3D7/zAF9+ON8+kQ6/7FiGMpQPk2MdH4I+MZfBeGEILyDD4p84xNwYs45BNPxUOgtKAdxwyDHx9L5fHrMiBuN7zGO3AjsmAC/scZadiPXOVFDPa0aXyJgAk4iL3mf/BtB052xoLeUII8AazHUMvh+qft0IuNrnIdkEoxJeJ/X6+zzePWYB2RqnphGJOdJOSo7T3pAFzqOKnSUnEQxaFQwOMASJQzW6aaEWW6BbpZgWdKDNVmPyM4p55Qc0WWsOZ/KwYSENaxJiaCM98E6zDuncEjWQPunTE6DdeeUpEVkeB8Und/8OX2eXgJdYN7NfnG+9wD/1wjzai8YYglJqBQwrxCWHmy+zDAtb9AahpwoAMIx2JuLdruIb55tTa66ZRXem798jZ1snW1dP7b+9dmAFs3X087+dD0f1QKzwVw+92u51ctFM21h0Zs0vObgyKDppWGQ75hdtec8e83l+dmO9a2z8UTi4tOBXGQWtsZioGQ2kgucDuh64xmZeLioLniNNq8ZiZjeNuTaxb4B3oVvANZX9DOUZnjsZ4DbxqDXz8CYLrYYi20Hheh13TzMsA/cjJ39u68fXrly+HpooG+8vr5yZf36G/fv3jpZrlbLk1vf33pFpVqtXLF1ixSWjkuBVs8jj0jhoESvOlvz/fm+amVy6wdbJ9meeYbkJNgYDrCNwbA0d/5680Xoz+vu+VeznvRsRz1bX0QrLGJUBuKCnmTvc9EUgu7YOcW6m6mdpxeYO3ZsGS+USoXxLW8uMAOHWbgcnpGimnRoBuIlJh0+LMOgvmSny9D6kq0u49x1iEnPzEgQ7DOHpJgmH7oHwEqGHupMu/4Pq85x8ol8qZSfgKfOM2c/4JkSLgPnGGmeoC/QGpyjeyE6vtxg4hD7hwN8CUEOQFk3kqzoJeCD944dUwNDQwNTO04vMJNNRDheaBF4Dt8lgb+u/USKBTGtLZFyGecep4EJoXBRvB/8hKXpv4OjIO/vQn+m3yL7GIZIbhE+M93pbc6jRI5KzuMy6Mdr8Sjba+JJIsnOo/A0CW9wnoFns/jBaD96mB4kNaYLLwIIaKoAotA7pZjkPOccBxUyvhq04kmZlCTJeRqvY+qdxyQJb5PmdGHofsnLFDNdKSsLvqjMZTscDJqXx/y8c9TrxTewcHGexJdAQcBXAZoB0eC8TzvPSlGd9c/V5q/oq3QN+HzFOTp984wiMP8/BrcEdEF1hRj45vS1g7Xa4LXT/1lgvqnoM4quKzN66wJD1yyRcJn/LpFwmf8BevKKAwAAAHjafZDNSsNAFIXP9E9tQcSC61kVQUh/lqW7Qt25cFHXbTpJW5JMmEwLXbp15QO49TF8AJ9BcOWDeBqvCBWakMs3595zZiYALvEJhZ+njWthhVPcCVdwgli4Sv1RuEZ+Ea6jhTfhBvUP4SZu1Ei4hbZ6ZoKqnXHVKdP2rHCBkXAF53gQrlK3wjXyk3AdV3gVblB/F25iii/hFjpqiTEcDGbwrAtozLFjXSFkboaorB4YOzPzZqHnO70KbRbZjOK/qb/WPeNibJAw2nFp4k0yc0ctR1pTpjkUHNm3NPoI0KNsXLGyme4HvaP2W9qzMuLwngW2POaAqqdR83O0p6SJxBheISFr5GVvTSWkHjDWZMb9/pViGw+8j3TkbKon3NYkidW5s2sTeg4vyz1yDNHlGx2kB+XhU455nw+73UgCgtCm+AYPanCHAAB42m1K2W6DMBBkwBhCrjZHU+XnIne9LSiOt11M+f1Ehbx1pNGcWZ5NaLL/cX4QWY4cBQxKWFSosUCDJVZYY4MtXvCKHfY44Ig3nPBe9kmUTRC6ll6Gj1R4IfujJJ6t8k1+2fbslNoqdMSx5/rxdamTaEan0ZDTZD0HTrx0qjJetPtqU0lBejat3Hg71cP3hTqlwKu/aQ6LIVLLdGVfzVo/781kvIxxtoE/U+G8vwNW5EPVAAAAAAAB//8AAgABAAAADAAAABYAAAACAAEAAwAZAAEABAAAAAIAAAAAeNpjYGBgZACCq0vUOUD0vczFbjAaAD5JBgoAAA\x3d\x3d\x22) format(\x22woff\x22)}\n.", [1], "iconfont{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-family:iconfont!important;font-style:normal}\n.", [1], "icon-xxgs:before{content:\x22\\e62c\x22}\n.", [1], "icon-home:before{content:\x22\\e66b\x22}\n.", [1], "icon-warn:before{content:\x22\\e661\x22}\n.", [1], "icon-lock:after{content:\x22\\e60b\x22}\n.", [1], "icon-doubt:after{content:\x22\\e60c\x22}\n.", [1], "icon-doc:after{content:\x22\\e60d\x22}\n.", [1], "icon-qrcode:after{content:\x22\\e60e\x22}\n.", [1], "icon-store:after{content:\x22\\e607\x22}\n.", [1], "icon-arrow_up_circle:after{content:\x22\\e6b7\x22}\n.", [1], "icon-cart:after{content:\x22\\e662\x22}\n.", [1], "icon-arrow_left:after{content:\x22\\e7e0\x22}\n.", [1], "icon-search:after{content:\x22\\e623\x22}\n.", [1], "icon-close_circle:after{content:\x22\\e725\x22}\n.", [1], "icon-unchecked:after{content:\x22\\e72f\x22}\n.", [1], "icon-checked:after{content:\x22\\e730\x22}\n.", [1], "icon-arrow_up:after{content:\x22\\e76e\x22}\n.", [1], "icon-arrow_down:after{content:\x22\\e772\x22}\n.", [1], "icon-location:after{content:\x22\\e650\x22}\n.", [1], "icon-remove:after{content:\x22\\e611\x22}\n.", [1], "icon-add:after{content:\x22\\e8c8\x22}\n.", [1], "icon-delete:after{content:\x22\\e666\x22}\n.", [1], "icon-arrow_right:after{content:\x22\\e667\x22}\n.", [1], "icon-close:after{content:\x22\\e668\x22}\n.", [1], "f40{font-size:", [0, 80], "}\n.", [1], "f39{font-size:", [0, 78], "}\n.", [1], "f38{font-size:", [0, 76], "}\n.", [1], "f37{font-size:", [0, 74], "}\n.", [1], "f36{font-size:", [0, 72], "}\n.", [1], "f35{font-size:", [0, 70], "}\n.", [1], "f34{font-size:", [0, 68], "}\n.", [1], "f33{font-size:", [0, 66], "}\n.", [1], "f32{font-size:", [0, 64], "}\n.", [1], "f31{font-size:", [0, 62], "}\n.", [1], "f30{font-size:", [0, 60], "}\n.", [1], "f29{font-size:", [0, 58], "}\n.", [1], "f28{font-size:", [0, 56], "}\n.", [1], "f27{font-size:", [0, 54], "}\n.", [1], "f26{font-size:", [0, 52], "}\n.", [1], "f25{font-size:", [0, 50], "}\n.", [1], "f24{font-size:", [0, 48], "}\n.", [1], "f23{font-size:", [0, 46], "}\n.", [1], "f22{font-size:", [0, 44], "}\n.", [1], "f21{font-size:", [0, 42], "}\n.", [1], "f20{font-size:", [0, 40], "}\n.", [1], "f19{font-size:", [0, 38], "}\n.", [1], "f18{font-size:", [0, 36], "}\n.", [1], "f17{font-size:", [0, 34], "}\n.", [1], "f16{font-size:", [0, 32], "}\n.", [1], "f15{font-size:", [0, 30], "}\n.", [1], "f14{font-size:", [0, 28], "}\n.", [1], "f13{font-size:", [0, 26], "}\n.", [1], "f12{font-size:", [0, 24], "}\n.", [1], "f11{font-size:", [0, 22], "}\n.", [1], "f10{font-size:", [0, 20], "}\n.", [1], "f9{font-size:", [0, 18], "}\n.", [1], "f8{font-size:", [0, 16], "}\n.", [1], "f7{font-size:", [0, 14], "}\n.", [1], "f6{font-size:", [0, 12], "}\n.", [1], "f5{font-size:", [0, 10], "}\n.", [1], "f4{font-size:", [0, 8], "}\n.", [1], "f3{font-size:", [0, 6], "}\n.", [1], "f2{font-size:", [0, 4], "}\n.", [1], "f1{font-size:", [0, 2], "}\n.", [1], "mt20{margin-top:", [0, 40], "}\n.", [1], "mb20{margin-bottom:", [0, 40], "}\n.", [1], "ml20{margin-left:", [0, 40], "}\n.", [1], "mr20{margin-right:", [0, 40], "}\n.", [1], "pt20{padding-top:", [0, 40], "}\n.", [1], "pb20{padding-bottom:", [0, 40], "}\n.", [1], "pl20{padding-left:", [0, 40], "}\n.", [1], "pr20{padding-right:", [0, 40], "}\n.", [1], "mt19{margin-top:", [0, 38], "}\n.", [1], "mb19{margin-bottom:", [0, 38], "}\n.", [1], "ml19{margin-left:", [0, 38], "}\n.", [1], "mr19{margin-right:", [0, 38], "}\n.", [1], "pt19{padding-top:", [0, 38], "}\n.", [1], "pb19{padding-bottom:", [0, 38], "}\n.", [1], "pl19{padding-left:", [0, 38], "}\n.", [1], "pr19{padding-right:", [0, 38], "}\n.", [1], "mt18{margin-top:", [0, 36], "}\n.", [1], "mb18{margin-bottom:", [0, 36], "}\n.", [1], "ml18{margin-left:", [0, 36], "}\n.", [1], "mr18{margin-right:", [0, 36], "}\n.", [1], "pt18{padding-top:", [0, 36], "}\n.", [1], "pb18{padding-bottom:", [0, 36], "}\n.", [1], "pl18{padding-left:", [0, 36], "}\n.", [1], "pr18{padding-right:", [0, 36], "}\n.", [1], "mt17{margin-top:", [0, 34], "}\n.", [1], "mb17{margin-bottom:", [0, 34], "}\n.", [1], "ml17{margin-left:", [0, 34], "}\n.", [1], "mr17{margin-right:", [0, 34], "}\n.", [1], "pt17{padding-top:", [0, 34], "}\n.", [1], "pb17{padding-bottom:", [0, 34], "}\n.", [1], "pl17{padding-left:", [0, 34], "}\n.", [1], "pr17{padding-right:", [0, 34], "}\n.", [1], "mt16{margin-top:", [0, 32], "}\n.", [1], "mb16{margin-bottom:", [0, 32], "}\n.", [1], "ml16{margin-left:", [0, 32], "}\n.", [1], "mr16{margin-right:", [0, 32], "}\n.", [1], "pt16{padding-top:", [0, 32], "}\n.", [1], "pb16{padding-bottom:", [0, 32], "}\n.", [1], "pl16{padding-left:", [0, 32], "}\n.", [1], "pr16{padding-right:", [0, 32], "}\n.", [1], "mt15{margin-top:", [0, 30], "}\n.", [1], "mb15{margin-bottom:", [0, 30], "}\n.", [1], "ml15{margin-left:", [0, 30], "}\n.", [1], "mr15{margin-right:", [0, 30], "}\n.", [1], "pt15{padding-top:", [0, 30], "}\n.", [1], "pb15{padding-bottom:", [0, 30], "}\n.", [1], "pl15{padding-left:", [0, 30], "}\n.", [1], "pr15{padding-right:", [0, 30], "}\n.", [1], "mt14{margin-top:", [0, 28], "}\n.", [1], "mb14{margin-bottom:", [0, 28], "}\n.", [1], "ml14{margin-left:", [0, 28], "}\n.", [1], "mr14{margin-right:", [0, 28], "}\n.", [1], "pt14{padding-top:", [0, 28], "}\n.", [1], "pb14{padding-bottom:", [0, 28], "}\n.", [1], "pl14{padding-left:", [0, 28], "}\n.", [1], "pr14{padding-right:", [0, 28], "}\n.", [1], "mt13{margin-top:", [0, 26], "}\n.", [1], "mb13{margin-bottom:", [0, 26], "}\n.", [1], "ml13{margin-left:", [0, 26], "}\n.", [1], "mr13{margin-right:", [0, 26], "}\n.", [1], "pt13{padding-top:", [0, 26], "}\n.", [1], "pb13{padding-bottom:", [0, 26], "}\n.", [1], "pl13{padding-left:", [0, 26], "}\n.", [1], "pr13{padding-right:", [0, 26], "}\n.", [1], "mt12{margin-top:", [0, 24], "}\n.", [1], "mb12{margin-bottom:", [0, 24], "}\n.", [1], "ml12{margin-left:", [0, 24], "}\n.", [1], "mr12{margin-right:", [0, 24], "}\n.", [1], "pt12{padding-top:", [0, 24], "}\n.", [1], "pb12{padding-bottom:", [0, 24], "}\n.", [1], "pl12{padding-left:", [0, 24], "}\n.", [1], "pr12{padding-right:", [0, 24], "}\n.", [1], "mt11{margin-top:", [0, 22], "}\n.", [1], "mb11{margin-bottom:", [0, 22], "}\n.", [1], "ml11{margin-left:", [0, 22], "}\n.", [1], "mr11{margin-right:", [0, 22], "}\n.", [1], "pt11{padding-top:", [0, 22], "}\n.", [1], "pb11{padding-bottom:", [0, 22], "}\n.", [1], "pl11{padding-left:", [0, 22], "}\n.", [1], "pr11{padding-right:", [0, 22], "}\n.", [1], "mt10{margin-top:", [0, 20], "}\n.", [1], "mb10{margin-bottom:", [0, 20], "}\n.", [1], "ml10{margin-left:", [0, 20], "}\n.", [1], "mr10{margin-right:", [0, 20], "}\n.", [1], "pt10{padding-top:", [0, 20], "}\n.", [1], "pb10{padding-bottom:", [0, 20], "}\n.", [1], "pl10{padding-left:", [0, 20], "}\n.", [1], "pr10{padding-right:", [0, 20], "}\n.", [1], "mt9{margin-top:", [0, 18], "}\n.", [1], "mb9{margin-bottom:", [0, 18], "}\n.", [1], "ml9{margin-left:", [0, 18], "}\n.", [1], "mr9{margin-right:", [0, 18], "}\n.", [1], "pt9{padding-top:", [0, 18], "}\n.", [1], "pb9{padding-bottom:", [0, 18], "}\n.", [1], "pl9{padding-left:", [0, 18], "}\n.", [1], "pr9{padding-right:", [0, 18], "}\n.", [1], "mt8{margin-top:", [0, 16], "}\n.", [1], "mb8{margin-bottom:", [0, 16], "}\n.", [1], "ml8{margin-left:", [0, 16], "}\n.", [1], "mr8{margin-right:", [0, 16], "}\n.", [1], "pt8{padding-top:", [0, 16], "}\n.", [1], "pb8{padding-bottom:", [0, 16], "}\n.", [1], "pl8{padding-left:", [0, 16], "}\n.", [1], "pr8{padding-right:", [0, 16], "}\n.", [1], "mt7{margin-top:", [0, 14], "}\n.", [1], "mb7{margin-bottom:", [0, 14], "}\n.", [1], "ml7{margin-left:", [0, 14], "}\n.", [1], "mr7{margin-right:", [0, 14], "}\n.", [1], "pt7{padding-top:", [0, 14], "}\n.", [1], "pb7{padding-bottom:", [0, 14], "}\n.", [1], "pl7{padding-left:", [0, 14], "}\n.", [1], "pr7{padding-right:", [0, 14], "}\n.", [1], "mt6{margin-top:", [0, 12], "}\n.", [1], "mb6{margin-bottom:", [0, 12], "}\n.", [1], "ml6{margin-left:", [0, 12], "}\n.", [1], "mr6{margin-right:", [0, 12], "}\n.", [1], "pt6{padding-top:", [0, 12], "}\n.", [1], "pb6{padding-bottom:", [0, 12], "}\n.", [1], "pl6{padding-left:", [0, 12], "}\n.", [1], "pr6{padding-right:", [0, 12], "}\n.", [1], "mt5{margin-top:", [0, 10], "}\n.", [1], "mb5{margin-bottom:", [0, 10], "}\n.", [1], "ml5{margin-left:", [0, 10], "}\n.", [1], "mr5{margin-right:", [0, 10], "}\n.", [1], "pt5{padding-top:", [0, 10], "}\n.", [1], "pb5{padding-bottom:", [0, 10], "}\n.", [1], "pl5{padding-left:", [0, 10], "}\n.", [1], "pr5{padding-right:", [0, 10], "}\n.", [1], "mt4{margin-top:", [0, 8], "}\n.", [1], "mb4{margin-bottom:", [0, 8], "}\n.", [1], "ml4{margin-left:", [0, 8], "}\n.", [1], "mr4{margin-right:", [0, 8], "}\n.", [1], "pt4{padding-top:", [0, 8], "}\n.", [1], "pb4{padding-bottom:", [0, 8], "}\n.", [1], "pl4{padding-left:", [0, 8], "}\n.", [1], "pr4{padding-right:", [0, 8], "}\n.", [1], "mt3{margin-top:", [0, 6], "}\n.", [1], "mb3{margin-bottom:", [0, 6], "}\n.", [1], "ml3{margin-left:", [0, 6], "}\n.", [1], "mr3{margin-right:", [0, 6], "}\n.", [1], "pt3{padding-top:", [0, 6], "}\n.", [1], "pb3{padding-bottom:", [0, 6], "}\n.", [1], "pl3{padding-left:", [0, 6], "}\n.", [1], "pr3{padding-right:", [0, 6], "}\n.", [1], "mt2{margin-top:", [0, 4], "}\n.", [1], "mb2{margin-bottom:", [0, 4], "}\n.", [1], "ml2{margin-left:", [0, 4], "}\n.", [1], "mr2{margin-right:", [0, 4], "}\n.", [1], "pt2{padding-top:", [0, 4], "}\n.", [1], "pb2{padding-bottom:", [0, 4], "}\n.", [1], "pl2{padding-left:", [0, 4], "}\n.", [1], "pr2{padding-right:", [0, 4], "}\n.", [1], "mt1{margin-top:", [0, 2], "}\n.", [1], "mb1{margin-bottom:", [0, 2], "}\n.", [1], "ml1{margin-left:", [0, 2], "}\n.", [1], "mr1{margin-right:", [0, 2], "}\n.", [1], "pt1{padding-top:", [0, 2], "}\n.", [1], "pb1{padding-bottom:", [0, 2], "}\n.", [1], "pl1{padding-left:", [0, 2], "}\n.", [1], "pr1{padding-right:", [0, 2], "}\n.", [1], "l24{line-height:", [0, 48], "}\n.", [1], "l23{line-height:", [0, 46], "}\n.", [1], "l22{line-height:", [0, 44], "}\n.", [1], "l21{line-height:", [0, 42], "}\n.", [1], "l20{line-height:", [0, 40], "}\n.", [1], "l19{line-height:", [0, 38], "}\n.", [1], "l18{line-height:", [0, 36], "}\n.", [1], "l17{line-height:", [0, 34], "}\n.", [1], "l16{line-height:", [0, 32], "}\n.", [1], "l15{line-height:", [0, 30], "}\n.", [1], "l14{line-height:", [0, 28], "}\n.", [1], "l13{line-height:", [0, 26], "}\n.", [1], "l12{line-height:", [0, 24], "}\n.", [1], "l11{line-height:", [0, 22], "}\n.", [1], "l10{line-height:", [0, 20], "}\n.", [1], "l9{line-height:", [0, 18], "}\n.", [1], "l8{line-height:", [0, 16], "}\n.", [1], "l7{line-height:", [0, 14], "}\n.", [1], "l6{line-height:", [0, 12], "}\n.", [1], "l5{line-height:", [0, 10], "}\n.", [1], "l4{line-height:", [0, 8], "}\n.", [1], "l3{line-height:", [0, 6], "}\n.", [1], "l2{line-height:", [0, 4], "}\n.", [1], "l1{line-height:", [0, 2], "}\n.", [1], "fb{font-weight:700}\n.", [1], "fb4{font-weight:400}\n.", [1], "fb5{font-weight:500}\n.", [1], "fb6{font-weight:600}\n.", [1], "c-theme{color:#e60012}\n.", [1], "c-theme-light{color:#fc3f41}\n.", [1], "c-blue{color:#1226aa}\n.", [1], "c-warn{color:#ff9f00}\n.", [1], "c-danger{color:#fc3f41}\n.", [1], "c-333{color:#333}\n.", [1], "c-666{color:#666}\n.", [1], "c-777{color:#777}\n.", [1], "c-999{color:#999}\n.", [1], "c-aaa{color:#aaa}\n.", [1], "c-b2{color:#b2b2b2}\n.", [1], "c-ccc{color:#ccc}\n.", [1], "c-e6{color:#e6e6e6}\n.", [1], "c-fff{color:#fff}\n.", [1], "b-theme{background:#e60012}\n.", [1], "b-ccc{background:#ccc}\n.", [1], "b-eee{background:#eee}\n.", [1], "b-fff{background:#fff}\n.", [1], "b-primary-1{background:#fff1f1}\n.", [1], "flex{display:-webkit-box;display:-webkit-flex;display:flex}\n.", [1], "flex-center{-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}\n.", [1], "flex-center,.", [1], "flex-sb{-webkit-box-align:center;-webkit-align-items:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:flex}\n.", [1], "flex-sb{-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}\n.", [1], "flex-wrap{-webkit-flex-wrap:wrap;flex-wrap:wrap}\n.", [1], "shrink{-webkit-flex-shrink:0;flex-shrink:0}\n.", [1], "align-start{-webkit-box-align:start;-webkit-align-items:flex-start;align-items:flex-start}\n.", [1], "align-center{-webkit-box-align:center;-webkit-align-items:center;align-items:center}\n.", [1], "flex-column{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}\n.", [1], "flex-end{-webkit-box-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end}\n.", [1], "mx-ellipsis{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}\n.", [1], "mx-multi-ellipsis--l2{-webkit-line-clamp:2}\n.", [1], "mx-multi-ellipsis--l3{-webkit-line-clamp:3}\n.", [1], "mx-multi-ellipsis--l2,.", [1], "mx-multi-ellipsis--l3{-webkit-box-orient:vertical;display:-webkit-box;overflow:hidden;text-overflow:ellipsis}\n.", [1], "mx-hairline--bottom,.", [1], "mx-hairline--left,.", [1], "mx-hairline--right,.", [1], "mx-hairline--top{position:relative}\n.", [1], "mx-hairline--bottom:after,.", [1], "mx-hairline--left:after,.", [1], "mx-hairline--right:after,.", [1], "mx-hairline--top:after{border:0 solid #ebedf0;bottom:-50%;box-sizing:border-box;content:\x22 \x22;left:-50%;pointer-events:none;position:absolute;right:-50%;top:-50%;-webkit-transform:scale(.5);transform:scale(.5);-webkit-transform-origin:center;transform-origin:center}\n.", [1], "mx-hairline--top:after{border-top-width:1px}\n.", [1], "mx-hairline--left:after{border-left-width:1px}\n.", [1], "mx-hairline--bottom:after{border-bottom-width:1px}\n.", [1], "safe-bottom{padding-bottom:env(safe-area-inset-bottom)}\n.", [1], "disabled-price{color:#aaa;margin-left:", [0, 8], ";text-decoration:line-through}\n.", [1], "number-icon{background:#ff9f00;border-radius:", [0, 6], " ", [0, 20], " ", [0, 20], " ", [0, 20], ";color:#fff;font-size:", [0, 20], ";height:", [0, 28], ";line-height:", [0, 28], ";padding:0 ", [0, 10], ";position:absolute}\n",], "Some selectors are not allowed in component wxss, including tag name selectors, ID selectors, and attribute selectors.(./app.wxss:1:850)", {path: "./app.wxss"})();
    ;__wxAppCode__['pages/menu/index.skeleton.wxss'] = setCssToHead([[2, "./pages/menu/index.skeleton.wxss"]], undefined, {path: "./pages/menu/index.skeleton.wxss"});
    ;
}
var __pageFrameEndTime__ = Date.now();
__mainPageFrameReady__();
$gwx_XC_0 = function (_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
    return function (path, global) {
        if (typeof global === 'undefined') {
            if (typeof __GWX_GLOBAL__ === 'undefined') global = {}; else global = __GWX_GLOBAL__;
        }
        if (typeof __WXML_GLOBAL__ === 'undefined') {
            __WXML_GLOBAL__ = {};
        }
        __WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
        var e_ = {}
        if (typeof (global.entrys) === 'undefined') global.entrys = {};
        e_ = global.entrys;
        var d_ = {}
        if (typeof (global.defines) === 'undefined') global.defines = {};
        d_ = global.defines;
        var f_ = {}
        if (typeof (global.modules) === 'undefined') global.modules = {};
        f_ = global.modules || {};
        var p_ = {}
        __WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
        __WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
        __WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
        var z = __WXML_GLOBAL__.ops_set.$gwx_XC_0 || [];

        function gz$gwx_XC_0_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx_XC_0_1) return __WXML_GLOBAL__.ops_cached.$gwx_XC_0_1
            __WXML_GLOBAL__.ops_cached.$gwx_XC_0_1 = [];
            (function (z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }

                Z([3, 'onClick'])
                Z([3, 'cell custom-class'])
                Z([a, [3, 'cell-wrap '], [[2, '?:'], [[7], [3, 'border']], [1, 'border-bottom'], [1, '']]])
                Z([3, 'cell__title'])
                Z([[7], [3, 'title']])
                Z([a, [[7], [3, 'title']]])
                Z([3, 'title'])
                Z([3, 'cell__content'])
                Z([3, 'cell__content-container'])
                Z([[2, '&&'], [[7], [3, 'placeholder']], [[2, '!'], [[7], [3, 'content']]]])
                Z([3, 'content-placeholder'])
                Z([a, [3, ' '], [[7], [3, 'placeholder']], [3, ' ']])
                Z([[7], [3, 'content']])
                Z([3, 'content-text'])
                Z([a, [[7], [3, 'content']]])
                Z([3, 'content'])
                Z([[7], [3, 'errorMessage']])
                Z([3, 'cell__content-errmsg'])
                Z([a, [[7], [3, 'errorMessage']]])
                Z([3, 'cell__value'])
                Z([[7], [3, 'value']])
                Z([a, [[7], [3, 'value']]])
                Z([3, 'value'])
                Z([a, [3, 'cell__icon '], [[2, '?:'], [[7], [3, 'isLink']], [1, 'isLink'], [1, '']]])
                Z([3, 'icon'])
            })(__WXML_GLOBAL__.ops_cached.$gwx_XC_0_1);
            return __WXML_GLOBAL__.ops_cached.$gwx_XC_0_1
        }

        __WXML_GLOBAL__.ops_set.$gwx_XC_0 = z;
        __WXML_GLOBAL__.ops_init.$gwx_XC_0 = true;
        var x = ['./component/cell/index.wxml'];
        d_[x[0]] = {}
        var m0 = function (e, s, r, gg) {
            var z = gz$gwx_XC_0_1()
            var xC = _mz(z, 'view', ['bindtap', 0, 'class', 1], [], e, s, gg)
            var oD = _n('view')
            _rz(z, oD, 'class', 2, e, s, gg)
            var fE = _n('view')
            _rz(z, fE, 'class', 3, e, s, gg)
            var cF = _v()
            _(fE, cF)
            if (_oz(z, 4, e, s, gg)) {
                cF.wxVkey = 1
                var hG = _n('text')
                var oH = _oz(z, 5, e, s, gg)
                _(hG, oH)
                _(cF, hG)
            } else {
                cF.wxVkey = 2
                var cI = _n('slot')
                _rz(z, cI, 'name', 6, e, s, gg)
                _(cF, cI)
            }
            cF.wxXCkey = 1
            _(oD, fE)
            var oJ = _n('view')
            _rz(z, oJ, 'class', 7, e, s, gg)
            var aL = _n('view')
            _rz(z, aL, 'class', 8, e, s, gg)
            var tM = _v()
            _(aL, tM)
            if (_oz(z, 9, e, s, gg)) {
                tM.wxVkey = 1
                var bO = _n('view')
                _rz(z, bO, 'class', 10, e, s, gg)
                var oP = _oz(z, 11, e, s, gg)
                _(bO, oP)
                _(tM, bO)
            }
            var eN = _v()
            _(aL, eN)
            if (_oz(z, 12, e, s, gg)) {
                eN.wxVkey = 1
                var xQ = _n('text')
                _rz(z, xQ, 'class', 13, e, s, gg)
                var oR = _oz(z, 14, e, s, gg)
                _(xQ, oR)
                _(eN, xQ)
            } else {
                eN.wxVkey = 2
                var fS = _n('slot')
                _rz(z, fS, 'name', 15, e, s, gg)
                _(eN, fS)
            }
            tM.wxXCkey = 1
            eN.wxXCkey = 1
            _(oJ, aL)
            var lK = _v()
            _(oJ, lK)
            if (_oz(z, 16, e, s, gg)) {
                lK.wxVkey = 1
                var cT = _n('view')
                _rz(z, cT, 'class', 17, e, s, gg)
                var hU = _oz(z, 18, e, s, gg)
                _(cT, hU)
                _(lK, cT)
            }
            lK.wxXCkey = 1
            _(oD, oJ)
            var oV = _n('view')
            _rz(z, oV, 'class', 19, e, s, gg)
            var cW = _v()
            _(oV, cW)
            if (_oz(z, 20, e, s, gg)) {
                cW.wxVkey = 1
                var oX = _n('text')
                var lY = _oz(z, 21, e, s, gg)
                _(oX, lY)
                _(cW, oX)
            } else {
                cW.wxVkey = 2
                var aZ = _n('slot')
                _rz(z, aZ, 'name', 22, e, s, gg)
                _(cW, aZ)
            }
            cW.wxXCkey = 1
            _(oD, oV)
            var t1 = _n('view')
            _rz(z, t1, 'class', 23, e, s, gg)
            var e2 = _n('slot')
            _rz(z, e2, 'name', 24, e, s, gg)
            _(t1, e2)
            _(oD, t1)
            _(xC, oD)
            _(r, xC)
            return r
        }
        e_[x[0]] = e_[x[0]] || {f: m0, j: [], i: [], ti: [], ic: []}
        if (path && e_[path]) {
            outerGlobal.__wxml_comp_version__ = 0.02
            return function (env, dd, global) {
                $gwxc = 0;
                var root = {"tag": "wx-page"};
                root.children = []
                ;g = "$gwx_XC_0";
                var main = e_[path].f
                if (typeof global === "undefined") global = {};
                global.f = $gdc(f_[path], "", 1);
                if (typeof (outerGlobal.__webview_engine_version__) != 'undefined' && outerGlobal.__webview_engine_version__ + 1e-6 >= 0.02 + 1e-6 && outerGlobal.__mergeData__) {
                    env = outerGlobal.__mergeData__(env, dd);
                }
                try {
                    main(env, {}, root, global);
                    _tsd(root)
                    if (typeof (outerGlobal.__webview_engine_version__) == 'undefined' || outerGlobal.__webview_engine_version__ + 1e-6 < 0.01 + 1e-6) {
                        return _ev(root);
                    }
                } catch (err) {
                    console.log(err)
                }
                ;g = "";
                return root;
            }
        }
    }
}(__g.a, __g.b, __g.c, __g.d, __g.e, __g.f, __g.g, __g.h, __g.i, __g.j, __g.k, __g.l, __g.m, __g.n, __g.o, __g.p, __g.q, __g.r, __g.s, __g.t, __g.u, __g.v, __g.w, __g.x, __g.y, __g.z, __g.A, __g.B, __g.C, __g.D, __g.E, __g.F, __g.G, __g.H, __g.I, __g.J, __g.K, __g.L, __g.M, __g.N, __g.O, __g.P, __g.Q, __g.R, __g.S, __g.T, __g.U, __g.V, __g.W, __g.X, __g.Y, __g.Z, __g.aa);
if (__vd_version_info__.delayedGwx || false) $gwx_XC_0();
if (__vd_version_info__.delayedGwx) __wxAppCode__['component/cell/index.wxml'] = [$gwx_XC_0, './component/cell/index.wxml']; else __wxAppCode__['component/cell/index.wxml'] = $gwx_XC_0('./component/cell/index.wxml');

var noCss = typeof __vd_version_info__ !== 'undefined' && __vd_version_info__.noCss === true;
if (!noCss) {
    __wxAppCode__['component/cell/index.wxss'] = setCssToHead([".", [1], "cell{background-color:#fff;color:#333;font-size:", [0, 28], ";font-weight:400;line-height:", [0, 40], ";padding:", [0, 30], " ", [0, 40], ";position:relative}\n.", [1], "cell-wrap{-webkit-box-align:center;-webkit-align-items:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:flex;overflow:hidden}\n.", [1], "cell__title{margin-right:", [0, 24], ";max-width:", [0, 140], ";min-width:", [0, 140], "}\n.", [1], "cell__content{-webkit-box-flex:1;-webkit-flex:1;flex:1;height:100%;min-width:", [0, 1], ";padding:0 ", [0, 10], "}\n.", [1], "cell__content-container{display:-webkit-box;display:-webkit-flex;display:flex}\n.", [1], "content-placeholder{color:#999;font-weight:400}\n.", [1], "content-text{display:inline-block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;width:100%}\n.", [1], "cell__content-errmsg{color:#ee0a24;font-size:12px;line-height:1;margin-top:", [0, 6], "}\n.", [1], "cell__value{color:#999;text-align:right}\n.", [1], "cell__icon{-webkit-box-pack:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-justify-content:center;justify-content:center}\n.", [1], "isLink::after{border-right:1px solid #777;border-top:1px solid #777;content:\x22\x22;display:block;height:", [0, 14], ";left:-2px;position:relative;-webkit-transform:rotate(45deg);transform:rotate(45deg);width:", [0, 14], "}\n.", [1], "border-bottom::after{border-bottom:1px solid #ebedf0;bottom:0;box-sizing:border-box;content:\x22 \x22;left:16px;pointer-events:none;position:absolute;right:16px;-webkit-transform:scaleY(.5);transform:scaleY(.5);-webkit-transform-origin:center;transform-origin:center}\n",], undefined, {path: "./component/cell/index.wxss"});
}
$gwx_XC_1 = function (_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
    return function (path, global) {
        if (typeof global === 'undefined') {
            if (typeof __GWX_GLOBAL__ === 'undefined') global = {}; else global = __GWX_GLOBAL__;
        }
        if (typeof __WXML_GLOBAL__ === 'undefined') {
            __WXML_GLOBAL__ = {};
        }
        __WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
        var e_ = {}
        if (typeof (global.entrys) === 'undefined') global.entrys = {};
        e_ = global.entrys;
        var d_ = {}
        if (typeof (global.defines) === 'undefined') global.defines = {};
        d_ = global.defines;
        var f_ = {}
        if (typeof (global.modules) === 'undefined') global.modules = {};
        f_ = global.modules || {};
        var p_ = {}
        __WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
        __WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
        __WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
        var z = __WXML_GLOBAL__.ops_set.$gwx_XC_1 || [];

        function gz$gwx_XC_1_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx_XC_1_1) return __WXML_GLOBAL__.ops_cached.$gwx_XC_1_1
            __WXML_GLOBAL__.ops_cached.$gwx_XC_1_1 = [];
            (function (z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }

                Z([3, 'couponClick'])
                Z([a, [3, 'single-coupon custom-class '], [[2, '?:'], [[7], [3, 'disabled']], [1, 'disabled c-aaa'], [1, 'c-777']]])
                Z([3, 'main'])
                Z([3, 'title'])
                Z([3, 'f14 fb5'])
                Z([a, [[6], [[7], [3, 'couponData']], [3, 'couponName']]])
                Z([[7], [3, 'couponTag']])
                Z([3, 'tag f11'])
                Z([a, [[7], [3, 'couponTag']]])
                Z([[2, '=='], [[6], [[7], [3, 'couponData']], [3, 'validType']], [1, 2]])
                Z([3, 'limit-item'])
                Z([a, [3, '自领取后 '], [[6], [[7], [3, 'couponData']], [3, 'vaildDays']], [3, ' 天内有效']])
                Z(z[10])
                Z([a, [3, '券有效期：'], [[7], [3, 'startTime']], [3, ' - '], [[7], [3, 'endTime']]])
                Z([[2, '||'], [[7], [3, 'limitDate']], [[7], [3, 'limitTime']]])
                Z(z[10])
                Z([3, 'display:flex'])
                Z([3, '限定时段：'])
                Z([3, 'max-width:350rpx'])
                Z([[7], [3, 'limitDate']])
                Z([a, [[7], [3, 'limitDate']]])
                Z([[7], [3, 'limitTime']])
                Z([a, [[7], [3, 'limitTime']]])
                Z(z[10])
                Z([a, [3, '使用渠道：'], [[2, '||'], [[7], [3, 'channelType']], [1, '通用']]])
                Z([3, 'single-coupon-amount flex-center'])
                Z([[2, '=='], [[6], [[7], [3, 'couponData']], [3, 'couponType']], [1, 1]])
                Z([3, 'amount-type c-theme fb5'])
                Z([a, [[7], [3, 'priceOriginal']]])
                Z([[2, '=='], [[6], [[7], [3, 'couponData']], [3, 'couponType']], [1, 3]])
                Z([3, 'discount-type c-theme fb5'])
                Z([a, [[2, '/'], [[6], [[7], [3, 'couponData']], [3, 'couponDiscount']], [1, 10]]])
                Z([3, 'amount-description f11'])
                Z([a, [[7], [3, 'amountDesc']]])
                Z([[2, '=='], [[6], [[7], [3, 'couponData']], [3, 'isDueSoon']], [1, 1]])
                Z([3, 'coupon-tag c-theme almost-expired'])
                Z([3, '即将到期'])
                Z([[2, '=='], [[6], [[7], [3, 'couponData']], [3, 'couponStatus']], [1, 2]])
                Z([3, 'coupon-tag-img'])
                Z([3, '/assets/used.png'])
                Z([[2, '=='], [[6], [[7], [3, 'couponData']], [3, 'couponStatus']], [1, 5]])
                Z([3, 'coupon-tag b-ccc c-fff'])
                Z([3, '已锁定'])
                Z([[2, '=='], [[6], [[7], [3, 'couponData']], [3, 'couponStatus']], [1, 6]])
                Z(z[41])
                Z([3, '已退款'])
                Z([[2, '=='], [[6], [[7], [3, 'couponData']], [3, 'couponStatus']], [1, 7]])
                Z(z[41])
                Z([3, '已作废'])
                Z([[2, '&&'], [[7], [3, 'disabled']], [[2, '!='], [[6], [[7], [3, 'couponData']], [3, 'couponStatus']], [1, 2]]])
                Z(z[41])
                Z([3, '已过期'])
                Z([3, 'coupon-bottom flex-sb'])
                Z([a, [3, 'height:'], [[7], [3, 'bottomHeight']], [3, 'rpx']])
                Z([3, 'toRule'])
                Z([3, 'iconfont icon-arrow_right f12'])
                Z([3, 'padding: 18rpx 100rpx 18rpx 0'])
                Z([3, '使用规则 '])
            })(__WXML_GLOBAL__.ops_cached.$gwx_XC_1_1);
            return __WXML_GLOBAL__.ops_cached.$gwx_XC_1_1
        }

        __WXML_GLOBAL__.ops_set.$gwx_XC_1 = z;
        __WXML_GLOBAL__.ops_init.$gwx_XC_1 = true;
        var x = ['./component/coupon-item/index.wxml'];
        d_[x[0]] = {}
        var m0 = function (e, s, r, gg) {
            var z = gz$gwx_XC_1_1()
            var o4 = _mz(z, 'view', ['bindtap', 0, 'class', 1], [], e, s, gg)
            var x5 = _n('view')
            _rz(z, x5, 'class', 2, e, s, gg)
            var o0 = _n('view')
            _rz(z, o0, 'class', 3, e, s, gg)
            var oBB = _n('text')
            _rz(z, oBB, 'class', 4, e, s, gg)
            var lCB = _oz(z, 5, e, s, gg)
            _(oBB, lCB)
            _(o0, oBB)
            var cAB = _v()
            _(o0, cAB)
            if (_oz(z, 6, e, s, gg)) {
                cAB.wxVkey = 1
                var aDB = _n('text')
                _rz(z, aDB, 'class', 7, e, s, gg)
                var tEB = _oz(z, 8, e, s, gg)
                _(aDB, tEB)
                _(cAB, aDB)
            }
            cAB.wxXCkey = 1
            _(x5, o0)
            var o6 = _v()
            _(x5, o6)
            if (_oz(z, 9, e, s, gg)) {
                o6.wxVkey = 1
                var eFB = _n('view')
                _rz(z, eFB, 'class', 10, e, s, gg)
                var bGB = _oz(z, 11, e, s, gg)
                _(eFB, bGB)
                _(o6, eFB)
            } else {
                o6.wxVkey = 2
                var oHB = _n('view')
                _rz(z, oHB, 'class', 12, e, s, gg)
                var xIB = _oz(z, 13, e, s, gg)
                _(oHB, xIB)
                _(o6, oHB)
            }
            var f7 = _v()
            _(x5, f7)
            if (_oz(z, 14, e, s, gg)) {
                f7.wxVkey = 1
                var oJB = _mz(z, 'view', ['class', 15, 'style', 1], [], e, s, gg)
                var fKB = _n('text')
                var cLB = _oz(z, 17, e, s, gg)
                _(fKB, cLB)
                _(oJB, fKB)
                var hMB = _n('view')
                _rz(z, hMB, 'style', 18, e, s, gg)
                var oNB = _v()
                _(hMB, oNB)
                if (_oz(z, 19, e, s, gg)) {
                    oNB.wxVkey = 1
                    var oPB = _n('view')
                    var lQB = _oz(z, 20, e, s, gg)
                    _(oPB, lQB)
                    _(oNB, oPB)
                }
                var cOB = _v()
                _(hMB, cOB)
                if (_oz(z, 21, e, s, gg)) {
                    cOB.wxVkey = 1
                    var aRB = _n('view')
                    var tSB = _oz(z, 22, e, s, gg)
                    _(aRB, tSB)
                    _(cOB, aRB)
                }
                oNB.wxXCkey = 1
                cOB.wxXCkey = 1
                _(oJB, hMB)
                _(f7, oJB)
            }
            var eTB = _n('view')
            _rz(z, eTB, 'class', 23, e, s, gg)
            var bUB = _oz(z, 24, e, s, gg)
            _(eTB, bUB)
            _(x5, eTB)
            var oVB = _n('view')
            _rz(z, oVB, 'class', 25, e, s, gg)
            var xWB = _v()
            _(oVB, xWB)
            if (_oz(z, 26, e, s, gg)) {
                xWB.wxVkey = 1
                var oXB = _n('text')
                _rz(z, oXB, 'class', 27, e, s, gg)
                var fYB = _oz(z, 28, e, s, gg)
                _(oXB, fYB)
                _(xWB, oXB)
            } else if (_oz(z, 29, e, s, gg)) {
                xWB.wxVkey = 2
                var cZB = _n('text')
                _rz(z, cZB, 'class', 30, e, s, gg)
                var h1B = _oz(z, 31, e, s, gg)
                _(cZB, h1B)
                _(xWB, cZB)
            }
            var o2B = _n('view')
            _rz(z, o2B, 'class', 32, e, s, gg)
            var c3B = _oz(z, 33, e, s, gg)
            _(o2B, c3B)
            _(oVB, o2B)
            xWB.wxXCkey = 1
            _(x5, oVB)
            var c8 = _v()
            _(x5, c8)
            if (_oz(z, 34, e, s, gg)) {
                c8.wxVkey = 1
                var o4B = _n('text')
                _rz(z, o4B, 'class', 35, e, s, gg)
                var l5B = _oz(z, 36, e, s, gg)
                _(o4B, l5B)
                _(c8, o4B)
            }
            var h9 = _v()
            _(x5, h9)
            if (_oz(z, 37, e, s, gg)) {
                h9.wxVkey = 1
                var a6B = _mz(z, 'image', ['class', 38, 'src', 1], [], e, s, gg)
                _(h9, a6B)
            } else if (_oz(z, 40, e, s, gg)) {
                h9.wxVkey = 2
                var t7B = _n('text')
                _rz(z, t7B, 'class', 41, e, s, gg)
                var e8B = _oz(z, 42, e, s, gg)
                _(t7B, e8B)
                _(h9, t7B)
            } else if (_oz(z, 43, e, s, gg)) {
                h9.wxVkey = 3
                var b9B = _n('text')
                _rz(z, b9B, 'class', 44, e, s, gg)
                var o0B = _oz(z, 45, e, s, gg)
                _(b9B, o0B)
                _(h9, b9B)
            } else if (_oz(z, 46, e, s, gg)) {
                h9.wxVkey = 4
                var xAC = _n('text')
                _rz(z, xAC, 'class', 47, e, s, gg)
                var oBC = _oz(z, 48, e, s, gg)
                _(xAC, oBC)
                _(h9, xAC)
            } else if (_oz(z, 49, e, s, gg)) {
                h9.wxVkey = 5
                var fCC = _n('text')
                _rz(z, fCC, 'class', 50, e, s, gg)
                var cDC = _oz(z, 51, e, s, gg)
                _(fCC, cDC)
                _(h9, fCC)
            }
            o6.wxXCkey = 1
            f7.wxXCkey = 1
            c8.wxXCkey = 1
            h9.wxXCkey = 1
            _(o4, x5)
            var hEC = _mz(z, 'view', ['class', 52, 'style', 1], [], e, s, gg)
            var oFC = _mz(z, 'text', ['catchtap', 54, 'class', 1, 'style', 2], [], e, s, gg)
            var cGC = _oz(z, 57, e, s, gg)
            _(oFC, cGC)
            _(hEC, oFC)
            var oHC = _n('slot')
            _(hEC, oHC)
            _(o4, hEC)
            _(r, o4)
            return r
        }
        e_[x[0]] = e_[x[0]] || {f: m0, j: [], i: [], ti: [], ic: []}
        if (path && e_[path]) {
            outerGlobal.__wxml_comp_version__ = 0.02
            return function (env, dd, global) {
                $gwxc = 0;
                var root = {"tag": "wx-page"};
                root.children = []
                ;g = "$gwx_XC_1";
                var main = e_[path].f
                if (typeof global === "undefined") global = {};
                global.f = $gdc(f_[path], "", 1);
                if (typeof (outerGlobal.__webview_engine_version__) != 'undefined' && outerGlobal.__webview_engine_version__ + 1e-6 >= 0.02 + 1e-6 && outerGlobal.__mergeData__) {
                    env = outerGlobal.__mergeData__(env, dd);
                }
                try {
                    main(env, {}, root, global);
                    _tsd(root)
                    if (typeof (outerGlobal.__webview_engine_version__) == 'undefined' || outerGlobal.__webview_engine_version__ + 1e-6 < 0.01 + 1e-6) {
                        return _ev(root);
                    }
                } catch (err) {
                    console.log(err)
                }
                ;g = "";
                return root;
            }
        }
    }
}(__g.a, __g.b, __g.c, __g.d, __g.e, __g.f, __g.g, __g.h, __g.i, __g.j, __g.k, __g.l, __g.m, __g.n, __g.o, __g.p, __g.q, __g.r, __g.s, __g.t, __g.u, __g.v, __g.w, __g.x, __g.y, __g.z, __g.A, __g.B, __g.C, __g.D, __g.E, __g.F, __g.G, __g.H, __g.I, __g.J, __g.K, __g.L, __g.M, __g.N, __g.O, __g.P, __g.Q, __g.R, __g.S, __g.T, __g.U, __g.V, __g.W, __g.X, __g.Y, __g.Z, __g.aa);
if (__vd_version_info__.delayedGwx || false) $gwx_XC_1();
if (__vd_version_info__.delayedGwx) __wxAppCode__['component/coupon-item/index.wxml'] = [$gwx_XC_1, './component/coupon-item/index.wxml']; else __wxAppCode__['component/coupon-item/index.wxml'] = $gwx_XC_1('./component/coupon-item/index.wxml');

var noCss = typeof __vd_version_info__ !== 'undefined' && __vd_version_info__.noCss === true;
if (!noCss) {
    __wxAppCode__['component/coupon-item/index.wxss'] = setCssToHead([".", [1], "single-coupon{background:#fff;border-radius:", [0, 16], ";padding:0 ", [0, 24], ";position:relative}\n.", [1], "main{border-bottom:", [0, 2], " dashed #e6e6e6;padding:", [0, 30], " 0 ", [0, 24], "}\n.", [1], "title{color:#333;margin-bottom:", [0, 10], ";margin-right:", [0, 150], "}\n.", [1], "tag{background:#ffae0d;border-radius:", [0, 8], ";color:#fff;margin-left:", [0, 8], ";padding:", [0, 6], " ", [0, 14], "}\n.", [1], "limit-item,.", [1], "tag{line-height:", [0, 32], "}\n.", [1], "limit-item{font-size:", [0, 22], ";margin-top:", [0, 8], "}\n.", [1], "single-coupon-amount{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;font-size:", [0, 52], ";position:absolute;right:", [0, 24], ";top:", [0, 42], ";width:", [0, 140], "}\n.", [1], "amount-type::before{content:\x22¥\x22;right:", [0, 6], "}\n.", [1], "amount-type::before,.", [1], "discount-type::after{bottom:", [0, 4], ";font-size:", [0, 24], ";position:relative}\n.", [1], "discount-type::after{content:\x22折\x22;left:", [0, 6], "}\n.", [1], "amount-description{line-height:", [0, 32], ";margin-top:", [0, 12], "}\n.", [1], "almost-expired{background:#ffe6ec}\n.", [1], "coupon-tag{border-radius:0 ", [0, 16], " 0 ", [0, 16], ";font-size:", [0, 22], ";font-weight:400;height:", [0, 36], ";line-height:", [0, 36], ";padding:0 ", [0, 10], ";position:absolute;right:0;text-align:center;top:0}\n.", [1], "coupon-tag-img{background-color:#fff;bottom:", [0, 24], ";height:", [0, 96], ";position:absolute;right:", [0, 152], ";width:", [0, 96], "}\n.", [1], "coupon-bottom{position:relative}\n.", [1], "coupon-bottom::after,.", [1], "coupon-bottom::before{background-color:#f8f8f8;border-radius:", [0, 32], ";content:\x22\x22;height:", [0, 32], ";position:absolute;top:", [0, -16], ";width:", [0, 32], "}\n.", [1], "coupon-bottom::after{left:", [0, -42], "}\n.", [1], "coupon-bottom::before{right:", [0, -42], "}\n.", [1], "disabled .", [1], "c-theme,.", [1], "disabled .", [1], "title{color:#aaa}\n.", [1], "disabled .", [1], "tag{background:#aaa}\n",], undefined, {path: "./component/coupon-item/index.wxss"});
}
$gwx_XC_2 = function (_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
    return function (path, global) {
        if (typeof global === 'undefined') {
            if (typeof __GWX_GLOBAL__ === 'undefined') global = {}; else global = __GWX_GLOBAL__;
        }
        if (typeof __WXML_GLOBAL__ === 'undefined') {
            __WXML_GLOBAL__ = {};
        }
        __WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
        var e_ = {}
        if (typeof (global.entrys) === 'undefined') global.entrys = {};
        e_ = global.entrys;
        var d_ = {}
        if (typeof (global.defines) === 'undefined') global.defines = {};
        d_ = global.defines;
        var f_ = {}
        if (typeof (global.modules) === 'undefined') global.modules = {};
        f_ = global.modules || {};
        var p_ = {}
        __WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
        __WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
        __WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
        var z = __WXML_GLOBAL__.ops_set.$gwx_XC_2 || [];

        function gz$gwx_XC_2_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx_XC_2_1) return __WXML_GLOBAL__.ops_cached.$gwx_XC_2_1
            __WXML_GLOBAL__.ops_cached.$gwx_XC_2_1 = [];
            (function (z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }

                Z([[2, '&&'], [[2, '==='], [[7], [3, 'adType']], [1, 'banner']], [[2, '>'], [[6], [[7], [3, 'adData']], [3, 'length']], [1, 0]]])
                Z([1, true])
                Z([3, 'ad-banner custom-class'])
                Z([3, '#fff'])
                Z([3, 'rgba(255,255,255,.3)'])
                Z([[2, '>'], [[6], [[7], [3, 'adData']], [3, 'length']], [1, 1]])
                Z([3, '4000'])
                Z([[7], [3, 'adData']])
                Z([3, 'index'])
                Z([3, 'advertiseTap'])
                Z([[6], [[7], [3, 'item']], [3, 'adUrl']])
                Z([3, 'ad-img'])
                Z([3, 'aspectFill'])
                Z([[6], [[7], [3, 'item']], [3, 'adImg']])
                Z([[2, '&&'], [[2, '==='], [[7], [3, 'adType']], [1, 'popup']], [[2, '>'], [[6], [[7], [3, 'adData']], [3, 'length']], [1, 0]]])
                Z([3, 'background-color: transparent;'])
                Z([3, 'closeAd'])
                Z([[7], [3, 'showPopupAd']])
                Z([3, '200'])
                Z([3, 'ad-popup'])
                Z(z[9])
                Z(z[11])
                Z([[6], [[6], [[7], [3, 'adData']], [1, 0]], [3, 'adUrl']])
                Z([3, 'widthFix'])
                Z([[6], [[6], [[7], [3, 'adData']], [1, 0]], [3, 'adImg']])
                Z(z[16])
                Z([3, 'f30 iconfont icon-close_circle c-fff mt10'])
                Z([[2, '&&'], [[2, '==='], [[7], [3, 'adType']], [1, 'magnet']], [[2, '>'], [[6], [[7], [3, 'adData']], [3, 'length']], [1, 0]]])
                Z([3, 'ad-magnet flex-sb custom-class'])
                Z(z[7])
                Z(z[8])
                Z(z[9])
                Z([3, 'ad-img shadow'])
                Z(z[10])
                Z(z[23])
                Z(z[13])
            })(__WXML_GLOBAL__.ops_cached.$gwx_XC_2_1);
            return __WXML_GLOBAL__.ops_cached.$gwx_XC_2_1
        }

        __WXML_GLOBAL__.ops_set.$gwx_XC_2 = z;
        __WXML_GLOBAL__.ops_init.$gwx_XC_2 = true;
        var x = ['./component/custom-ad/index.wxml'];
        d_[x[0]] = {}
        var m0 = function (e, s, r, gg) {
            var z = gz$gwx_XC_2_1()
            var aJC = _v()
            _(r, aJC)
            if (_oz(z, 0, e, s, gg)) {
                aJC.wxVkey = 1
                var bMC = _mz(z, 'swiper', ['circular', -1, 'autoplay', 1, 'class', 1, 'indicatorActiveColor', 2, 'indicatorColor', 3, 'indicatorDots', 4, 'interval', 5], [], e, s, gg)
                var oNC = _v()
                _(bMC, oNC)
                var xOC = function (fQC, oPC, cRC, gg) {
                    var oTC = _mz(z, 'swiper-item', ['bindtap', 9, 'data-url', 1], [], fQC, oPC, gg)
                    var cUC = _mz(z, 'image', ['class', 11, 'mode', 1, 'src', 2], [], fQC, oPC, gg)
                    _(oTC, cUC)
                    _(cRC, oTC)
                    return cRC
                }
                oNC.wxXCkey = 2
                _2z(z, 7, xOC, e, s, gg, oNC, 'item', 'index', 'index')
                _(aJC, bMC)
            }
            var tKC = _v()
            _(r, tKC)
            if (_oz(z, 14, e, s, gg)) {
                tKC.wxVkey = 1
                var oVC = _mz(z, 'mx-popup', ['customStyle', 15, 'onClose', 1, 'show', 2, 'zIndex', 3], [], e, s, gg)
                var lWC = _n('view')
                _rz(z, lWC, 'class', 19, e, s, gg)
                var aXC = _mz(z, 'image', ['bindtap', 20, 'class', 1, 'data-url', 2, 'mode', 3, 'src', 4], [], e, s, gg)
                _(lWC, aXC)
                var tYC = _mz(z, 'text', ['bindtap', 25, 'class', 1], [], e, s, gg)
                _(lWC, tYC)
                _(oVC, lWC)
                _(tKC, oVC)
            }
            var eLC = _v()
            _(r, eLC)
            if (_oz(z, 27, e, s, gg)) {
                eLC.wxVkey = 1
                var eZC = _n('view')
                _rz(z, eZC, 'class', 28, e, s, gg)
                var b1C = _v()
                _(eZC, b1C)
                var o2C = function (o4C, x3C, f5C, gg) {
                    var h7C = _mz(z, 'image', ['bindtap', 31, 'class', 1, 'data-url', 2, 'mode', 3, 'src', 4], [], o4C, x3C, gg)
                    _(f5C, h7C)
                    return f5C
                }
                b1C.wxXCkey = 2
                _2z(z, 29, o2C, e, s, gg, b1C, 'item', 'index', 'index')
                _(eLC, eZC)
            }
            aJC.wxXCkey = 1
            tKC.wxXCkey = 1
            tKC.wxXCkey = 3
            eLC.wxXCkey = 1
            return r
        }
        e_[x[0]] = e_[x[0]] || {f: m0, j: [], i: [], ti: [], ic: []}
        if (path && e_[path]) {
            outerGlobal.__wxml_comp_version__ = 0.02
            return function (env, dd, global) {
                $gwxc = 0;
                var root = {"tag": "wx-page"};
                root.children = []
                ;g = "$gwx_XC_2";
                var main = e_[path].f
                if (typeof global === "undefined") global = {};
                global.f = $gdc(f_[path], "", 1);
                if (typeof (outerGlobal.__webview_engine_version__) != 'undefined' && outerGlobal.__webview_engine_version__ + 1e-6 >= 0.02 + 1e-6 && outerGlobal.__mergeData__) {
                    env = outerGlobal.__mergeData__(env, dd);
                }
                try {
                    main(env, {}, root, global);
                    _tsd(root)
                    if (typeof (outerGlobal.__webview_engine_version__) == 'undefined' || outerGlobal.__webview_engine_version__ + 1e-6 < 0.01 + 1e-6) {
                        return _ev(root);
                    }
                } catch (err) {
                    console.log(err)
                }
                ;g = "";
                return root;
            }
        }
    }
}(__g.a, __g.b, __g.c, __g.d, __g.e, __g.f, __g.g, __g.h, __g.i, __g.j, __g.k, __g.l, __g.m, __g.n, __g.o, __g.p, __g.q, __g.r, __g.s, __g.t, __g.u, __g.v, __g.w, __g.x, __g.y, __g.z, __g.A, __g.B, __g.C, __g.D, __g.E, __g.F, __g.G, __g.H, __g.I, __g.J, __g.K, __g.L, __g.M, __g.N, __g.O, __g.P, __g.Q, __g.R, __g.S, __g.T, __g.U, __g.V, __g.W, __g.X, __g.Y, __g.Z, __g.aa);
if (__vd_version_info__.delayedGwx || false) $gwx_XC_2();
if (__vd_version_info__.delayedGwx) __wxAppCode__['component/custom-ad/index.wxml'] = [$gwx_XC_2, './component/custom-ad/index.wxml']; else __wxAppCode__['component/custom-ad/index.wxml'] = $gwx_XC_2('./component/custom-ad/index.wxml');

var noCss = typeof __vd_version_info__ !== 'undefined' && __vd_version_info__.noCss === true;
if (!noCss) {
    __wxAppCode__['component/custom-ad/index.wxss'] = setCssToHead([".", [1], "ad-banner{overflow:hidden;width:100%}\n.", [1], "ad-banner .", [1], "ad-img{border-radius:", [0, 12], ";height:100%;margin:auto;width:100%}\n.", [1], "ad-popup{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-box-align:center;-webkit-align-items:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-direction:column;flex-direction:column}\n.", [1], "ad-popup .", [1], "ad-img{width:80vw}\n.", [1], "ad-popup .", [1], "ad-close{color:#fff;height:", [0, 68], ";margin:", [0, 30], " auto 0;width:", [0, 68], "}\n.", [1], "ad-magnet{-webkit-box-pack:justify;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-justify-content:space-between;justify-content:space-between;padding:", [0, 24], " 0 ", [0, 60], "}\n.", [1], "ad-magnet .", [1], "ad-img{border-radius:", [0, 24], ";height:", [0, 160], ";margin:0;overflow:hidden;width:", [0, 218], "}\n.", [1], "shadow{box-shadow:0 ", [0, 6], " ", [0, 12], " 0 rgba(6,0,39,.05)}\n",], undefined, {path: "./component/custom-ad/index.wxss"});
}
$gwx_XC_3 = function (_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
    return function (path, global) {
        if (typeof global === 'undefined') {
            if (typeof __GWX_GLOBAL__ === 'undefined') global = {}; else global = __GWX_GLOBAL__;
        }
        if (typeof __WXML_GLOBAL__ === 'undefined') {
            __WXML_GLOBAL__ = {};
        }
        __WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
        var e_ = {}
        if (typeof (global.entrys) === 'undefined') global.entrys = {};
        e_ = global.entrys;
        var d_ = {}
        if (typeof (global.defines) === 'undefined') global.defines = {};
        d_ = global.defines;
        var f_ = {}
        if (typeof (global.modules) === 'undefined') global.modules = {};
        f_ = global.modules || {};
        var p_ = {}
        __WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
        __WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
        __WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
        var z = __WXML_GLOBAL__.ops_set.$gwx_XC_3 || [];

        function gz$gwx_XC_3_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx_XC_3_1) return __WXML_GLOBAL__.ops_cached.$gwx_XC_3_1
            __WXML_GLOBAL__.ops_cached.$gwx_XC_3_1 = [];
            (function (z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }

                Z([3, 'page'])
                Z([3, 'logo'])
                Z([3, '/assets/logo.png'])
                Z([a, [[7], [3, 'brandName']]])
                Z([3, 'wx-auth-txt'])
                Z([3, '成为会员，立享更多优惠福利'])
                Z([3, 'wx-tip-txt'])
                Z([3, '授权绑定手机号 为您提供更好的服务'])
                Z([[2, '!'], [[7], [3, 'isBindPhone']]])
                Z([3, 'getPhoneNumber'])
                Z([3, 'getSessionKey'])
                Z([3, 'auth-button'])
                Z(z[9])
                Z([3, '一键登录'])
                Z([3, 'login'])
                Z(z[11])
                Z(z[13])
                Z([[7], [3, 'showCancel']])
                Z([3, 'goBack'])
                Z([3, 'cancel'])
                Z([3, '取消'])
                Z([[7], [3, 'isShowTip']])
                Z([3, 'width:550rpx;text-align:center;font-size:28rpx;'])
                Z([3, 'mx-hairline--bottom f13'])
                Z([3, 'padding: 64rpx 40rpx;font-size: 26rpx;'])
                Z([a, [[7], [3, 'tips']]])
                Z([3, 'tipConfirm'])
                Z([3, 'c-theme'])
                Z([3, 'padding:20rpx;font-weight: 500;'])
                Z([3, '确定'])
            })(__WXML_GLOBAL__.ops_cached.$gwx_XC_3_1);
            return __WXML_GLOBAL__.ops_cached.$gwx_XC_3_1
        }

        __WXML_GLOBAL__.ops_set.$gwx_XC_3 = z;
        __WXML_GLOBAL__.ops_init.$gwx_XC_3 = true;
        var x = ['./component/custom-login/index.wxml'];
        d_[x[0]] = {}
        var m0 = function (e, s, r, gg) {
            var z = gz$gwx_XC_3_1()
            var c9C = _n('view')
            _rz(z, c9C, 'class', 0, e, s, gg)
            var aBD = _mz(z, 'image', ['class', 1, 'src', 1], [], e, s, gg)
            _(c9C, aBD)
            var tCD = _n('text')
            var eDD = _oz(z, 3, e, s, gg)
            _(tCD, eDD)
            _(c9C, tCD)
            var bED = _n('text')
            _rz(z, bED, 'class', 4, e, s, gg)
            var oFD = _oz(z, 5, e, s, gg)
            _(bED, oFD)
            _(c9C, bED)
            var xGD = _n('text')
            _rz(z, xGD, 'class', 6, e, s, gg)
            var oHD = _oz(z, 7, e, s, gg)
            _(xGD, oHD)
            _(c9C, xGD)
            var o0C = _v()
            _(c9C, o0C)
            if (_oz(z, 8, e, s, gg)) {
                o0C.wxVkey = 1
                var fID = _mz(z, 'button', ['bindgetphonenumber', 9, 'bindtap', 1, 'class', 2, 'openType', 3], [], e, s, gg)
                var cJD = _oz(z, 13, e, s, gg)
                _(fID, cJD)
                _(o0C, fID)
            } else {
                o0C.wxVkey = 2
                var hKD = _mz(z, 'button', ['bindtap', 14, 'class', 1], [], e, s, gg)
                var oLD = _oz(z, 16, e, s, gg)
                _(hKD, oLD)
                _(o0C, hKD)
            }
            var lAD = _v()
            _(c9C, lAD)
            if (_oz(z, 17, e, s, gg)) {
                lAD.wxVkey = 1
                var cMD = _mz(z, 'view', ['bindtap', 18, 'class', 1], [], e, s, gg)
                var oND = _oz(z, 20, e, s, gg)
                _(cMD, oND)
                _(lAD, cMD)
            }
            o0C.wxXCkey = 1
            lAD.wxXCkey = 1
            _(r, c9C)
            var lOD = _n('mx-popup')
            _rz(z, lOD, 'show', 21, e, s, gg)
            var aPD = _n('view')
            _rz(z, aPD, 'style', 22, e, s, gg)
            var tQD = _mz(z, 'view', ['class', 23, 'style', 1], [], e, s, gg)
            var eRD = _oz(z, 25, e, s, gg)
            _(tQD, eRD)
            _(aPD, tQD)
            var bSD = _mz(z, 'view', ['bindtap', 26, 'class', 1, 'style', 2], [], e, s, gg)
            var oTD = _oz(z, 29, e, s, gg)
            _(bSD, oTD)
            _(aPD, bSD)
            _(lOD, aPD)
            _(r, lOD)
            return r
        }
        e_[x[0]] = e_[x[0]] || {f: m0, j: [], i: [], ti: [], ic: []}
        if (path && e_[path]) {
            outerGlobal.__wxml_comp_version__ = 0.02
            return function (env, dd, global) {
                $gwxc = 0;
                var root = {"tag": "wx-page"};
                root.children = []
                ;g = "$gwx_XC_3";
                var main = e_[path].f
                if (typeof global === "undefined") global = {};
                global.f = $gdc(f_[path], "", 1);
                if (typeof (outerGlobal.__webview_engine_version__) != 'undefined' && outerGlobal.__webview_engine_version__ + 1e-6 >= 0.02 + 1e-6 && outerGlobal.__mergeData__) {
                    env = outerGlobal.__mergeData__(env, dd);
                }
                try {
                    main(env, {}, root, global);
                    _tsd(root)
                    if (typeof (outerGlobal.__webview_engine_version__) == 'undefined' || outerGlobal.__webview_engine_version__ + 1e-6 < 0.01 + 1e-6) {
                        return _ev(root);
                    }
                } catch (err) {
                    console.log(err)
                }
                ;g = "";
                return root;
            }
        }
    }
}(__g.a, __g.b, __g.c, __g.d, __g.e, __g.f, __g.g, __g.h, __g.i, __g.j, __g.k, __g.l, __g.m, __g.n, __g.o, __g.p, __g.q, __g.r, __g.s, __g.t, __g.u, __g.v, __g.w, __g.x, __g.y, __g.z, __g.A, __g.B, __g.C, __g.D, __g.E, __g.F, __g.G, __g.H, __g.I, __g.J, __g.K, __g.L, __g.M, __g.N, __g.O, __g.P, __g.Q, __g.R, __g.S, __g.T, __g.U, __g.V, __g.W, __g.X, __g.Y, __g.Z, __g.aa);
if (__vd_version_info__.delayedGwx || false) $gwx_XC_3();
if (__vd_version_info__.delayedGwx) __wxAppCode__['component/custom-login/index.wxml'] = [$gwx_XC_3, './component/custom-login/index.wxml']; else __wxAppCode__['component/custom-login/index.wxml'] = $gwx_XC_3('./component/custom-login/index.wxml');

var noCss = typeof __vd_version_info__ !== 'undefined' && __vd_version_info__.noCss === true;
if (!noCss) {
    __wxAppCode__['component/custom-login/index.wxss'] = setCssToHead([".", [1], "page{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-box-align:center;-webkit-align-items:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-direction:column;flex-direction:column;font-size:", [0, 32], ";padding-top:", [0, 172], "}\n.", [1], "logo{height:", [0, 136], ";margin-bottom:", [0, 20], ";width:", [0, 136], "}\n.", [1], "wx-auth-txt{font-weight:700;margin:", [0, 160], " 0 ", [0, 80], "}\n.", [1], "wx-tip-txt{color:#777;font-size:", [0, 22], "}\n.", [1], "auth-button{margin:", [0, 16], " 0 ", [0, 40], ";width:", [0, 590], "}\n.", [1], "cancel{color:#aaa;font-size:", [0, 28], "}\n.", [1], "mx-hairline--bottom,.", [1], "mx-hairline--left,.", [1], "mx-hairline--top{position:relative}\n.", [1], "mx-hairline--bottom:after,.", [1], "mx-hairline--left:after,.", [1], "mx-hairline--top:after{border:0 solid #ebedf0;bottom:-50%;box-sizing:border-box;content:\x22 \x22;left:-50%;pointer-events:none;position:absolute;right:-50%;top:-50%;-webkit-transform:scale(.5);transform:scale(.5);-webkit-transform-origin:center;transform-origin:center}\n.", [1], "mx-hairline--top:after{border-top-width:1px}\n.", [1], "mx-hairline--left:after{border-left-width:1px}\n.", [1], "mx-hairline--bottom:after{border-bottom-width:1px}\n",], undefined, {path: "./component/custom-login/index.wxss"});
}
$gwx_XC_4 = function (_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
    return function (path, global) {
        if (typeof global === 'undefined') {
            if (typeof __GWX_GLOBAL__ === 'undefined') global = {}; else global = __GWX_GLOBAL__;
        }
        if (typeof __WXML_GLOBAL__ === 'undefined') {
            __WXML_GLOBAL__ = {};
        }
        __WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
        var e_ = {}
        if (typeof (global.entrys) === 'undefined') global.entrys = {};
        e_ = global.entrys;
        var d_ = {}
        if (typeof (global.defines) === 'undefined') global.defines = {};
        d_ = global.defines;
        var f_ = {}
        if (typeof (global.modules) === 'undefined') global.modules = {};
        f_ = global.modules || {};
        var p_ = {}
        __WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
        __WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
        __WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
        var z = __WXML_GLOBAL__.ops_set.$gwx_XC_4 || [];

        function gz$gwx_XC_4_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx_XC_4_1) return __WXML_GLOBAL__.ops_cached.$gwx_XC_4_1
            __WXML_GLOBAL__.ops_cached.$gwx_XC_4_1 = [];
            (function (z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }

                Z([3, 'debug custom-class'])
                Z([3, 'updModel'])
                Z([3, 'debug-badge'])
                Z([3, 'widthFix'])
                Z([3, '/assets/logo.png'])
                Z(z[1])
                Z([3, 'bottom'])
                Z([[7], [3, 'showDebugModel']])
                Z([3, '200'])
                Z([3, 'debug-popup'])
                Z([3, 'table-title'])
                Z([3, '调试面板'])
                Z([3, 'table-cell flex-sb'])
                Z([3, 'cell-icon iconfont'])
                Z([3, '切换环境'])
                Z([3, 'flex-sb'])
                Z([3, 'changeEnv'])
                Z([a, [3, 'select-item '], [[2, '?:'], [[2, '==='], [[7], [3, 'env']], [1, 'dev']], [1, 'active'], [1, '']]])
                Z([3, 'dev'])
                Z([3, 'dev'])
                Z(z[16])
                Z([a, z[17][1], [[2, '?:'], [[2, '==='], [[7], [3, 'env']], [1, 'qa']], [1, 'active'], [1, '']]])
                Z([3, 'qa'])
                Z([3, 'qa'])
                Z(z[16])
                Z([a, z[17][1], [[2, '?:'], [[2, '==='], [[7], [3, 'env']], [1, 'pro']], [1, 'active'], [1, '']]])
                Z([3, 'pro'])
                Z([3, 'pro'])
                Z([3, 'align-center table-cell flex-sb'])
                Z(z[13])
                Z([3, '解绑三方账号'])
                Z([3, 'f10'])
                Z([3, '注销当前小程序账号，保留会员账号'])
                Z(z[31])
                Z([3, '切换子品牌登录前需解绑'])
                Z(z[15])
                Z([3, 'unBindPhone'])
                Z([3, 'small mt5 mb5'])
                Z([[2, '!'], [[6], [[7], [3, 'userInfo']], [3, 'mobilePhone']]])
                Z([3, '解绑'])
                Z(z[28])
                Z(z[13])
                Z([3, '清除缓存'])
                Z(z[15])
                Z([3, 'clearStorage'])
                Z(z[37])
                Z([3, '清除'])
            })(__WXML_GLOBAL__.ops_cached.$gwx_XC_4_1);
            return __WXML_GLOBAL__.ops_cached.$gwx_XC_4_1
        }

        __WXML_GLOBAL__.ops_set.$gwx_XC_4 = z;
        __WXML_GLOBAL__.ops_init.$gwx_XC_4 = true;
        var x = ['./component/debug/index.wxml'];
        d_[x[0]] = {}
        var m0 = function (e, s, r, gg) {
            var z = gz$gwx_XC_4_1()
            var oVD = _n('view')
            _rz(z, oVD, 'class', 0, e, s, gg)
            var fWD = _mz(z, 'image', ['bind:tap', 1, 'class', 1, 'mode', 2, 'src', 3], [], e, s, gg)
            _(oVD, fWD)
            _(r, oVD)
            var cXD = _mz(z, 'mx-popup', ['bind:close', 5, 'position', 1, 'show', 2, 'zIndex', 3], [], e, s, gg)
            var hYD = _n('view')
            _rz(z, hYD, 'class', 9, e, s, gg)
            var oZD = _n('view')
            _rz(z, oZD, 'class', 10, e, s, gg)
            var c1D = _oz(z, 11, e, s, gg)
            _(oZD, c1D)
            _(hYD, oZD)
            var o2D = _n('view')
            _rz(z, o2D, 'class', 12, e, s, gg)
            var l3D = _n('text')
            _rz(z, l3D, 'class', 13, e, s, gg)
            var a4D = _oz(z, 14, e, s, gg)
            _(l3D, a4D)
            _(o2D, l3D)
            var t5D = _n('view')
            _rz(z, t5D, 'class', 15, e, s, gg)
            var e6D = _mz(z, 'text', ['bind:tap', 16, 'class', 1, 'data-env', 2], [], e, s, gg)
            var b7D = _oz(z, 19, e, s, gg)
            _(e6D, b7D)
            _(t5D, e6D)
            var o8D = _mz(z, 'text', ['bind:tap', 20, 'class', 1, 'data-env', 2], [], e, s, gg)
            var x9D = _oz(z, 23, e, s, gg)
            _(o8D, x9D)
            _(t5D, o8D)
            var o0D = _mz(z, 'text', ['bind:tap', 24, 'class', 1, 'data-env', 2], [], e, s, gg)
            var fAE = _oz(z, 27, e, s, gg)
            _(o0D, fAE)
            _(t5D, o0D)
            _(o2D, t5D)
            _(hYD, o2D)
            var cBE = _n('view')
            _rz(z, cBE, 'class', 28, e, s, gg)
            var hCE = _n('view')
            _rz(z, hCE, 'class', 29, e, s, gg)
            var oDE = _n('view')
            var cEE = _oz(z, 30, e, s, gg)
            _(oDE, cEE)
            _(hCE, oDE)
            var oFE = _n('view')
            _rz(z, oFE, 'class', 31, e, s, gg)
            var lGE = _oz(z, 32, e, s, gg)
            _(oFE, lGE)
            _(hCE, oFE)
            var aHE = _n('view')
            _rz(z, aHE, 'class', 33, e, s, gg)
            var tIE = _oz(z, 34, e, s, gg)
            _(aHE, tIE)
            _(hCE, aHE)
            _(cBE, hCE)
            var eJE = _n('view')
            _rz(z, eJE, 'class', 35, e, s, gg)
            var bKE = _mz(z, 'button', ['bind:tap', 36, 'class', 1, 'disabled', 2], [], e, s, gg)
            var oLE = _oz(z, 39, e, s, gg)
            _(bKE, oLE)
            _(eJE, bKE)
            _(cBE, eJE)
            _(hYD, cBE)
            var xME = _n('view')
            _rz(z, xME, 'class', 40, e, s, gg)
            var oNE = _n('text')
            _rz(z, oNE, 'class', 41, e, s, gg)
            var fOE = _oz(z, 42, e, s, gg)
            _(oNE, fOE)
            _(xME, oNE)
            var cPE = _n('view')
            _rz(z, cPE, 'class', 43, e, s, gg)
            var hQE = _mz(z, 'button', ['bind:tap', 44, 'class', 1], [], e, s, gg)
            var oRE = _oz(z, 46, e, s, gg)
            _(hQE, oRE)
            _(cPE, hQE)
            _(xME, cPE)
            _(hYD, xME)
            _(cXD, hYD)
            _(r, cXD)
            return r
        }
        e_[x[0]] = e_[x[0]] || {f: m0, j: [], i: [], ti: [], ic: []}
        if (path && e_[path]) {
            outerGlobal.__wxml_comp_version__ = 0.02
            return function (env, dd, global) {
                $gwxc = 0;
                var root = {"tag": "wx-page"};
                root.children = []
                ;g = "$gwx_XC_4";
                var main = e_[path].f
                if (typeof global === "undefined") global = {};
                global.f = $gdc(f_[path], "", 1);
                if (typeof (outerGlobal.__webview_engine_version__) != 'undefined' && outerGlobal.__webview_engine_version__ + 1e-6 >= 0.02 + 1e-6 && outerGlobal.__mergeData__) {
                    env = outerGlobal.__mergeData__(env, dd);
                }
                try {
                    main(env, {}, root, global);
                    _tsd(root)
                    if (typeof (outerGlobal.__webview_engine_version__) == 'undefined' || outerGlobal.__webview_engine_version__ + 1e-6 < 0.01 + 1e-6) {
                        return _ev(root);
                    }
                } catch (err) {
                    console.log(err)
                }
                ;g = "";
                return root;
            }
        }
    }
}(__g.a, __g.b, __g.c, __g.d, __g.e, __g.f, __g.g, __g.h, __g.i, __g.j, __g.k, __g.l, __g.m, __g.n, __g.o, __g.p, __g.q, __g.r, __g.s, __g.t, __g.u, __g.v, __g.w, __g.x, __g.y, __g.z, __g.A, __g.B, __g.C, __g.D, __g.E, __g.F, __g.G, __g.H, __g.I, __g.J, __g.K, __g.L, __g.M, __g.N, __g.O, __g.P, __g.Q, __g.R, __g.S, __g.T, __g.U, __g.V, __g.W, __g.X, __g.Y, __g.Z, __g.aa);
if (__vd_version_info__.delayedGwx || false) $gwx_XC_4();
if (__vd_version_info__.delayedGwx) __wxAppCode__['component/debug/index.wxml'] = [$gwx_XC_4, './component/debug/index.wxml']; else __wxAppCode__['component/debug/index.wxml'] = $gwx_XC_4('./component/debug/index.wxml');

var noCss = typeof __vd_version_info__ !== 'undefined' && __vd_version_info__.noCss === true;
if (!noCss) {
    __wxAppCode__['component/debug/index.wxss'] = setCssToHead([".", [1], "debug-badge{bottom:", [0, 20], ";height:", [0, 60], ";position:fixed;right:", [0, 50], ";width:", [0, 60], ";z-index:200}\n.", [1], "debug-popup{-webkit-overflow-scrolling:touch;max-height:80vh;min-height:40vh;overflow-y:auto}\n.", [1], "table-title{margin:", [0, 20], " 0;text-align:center}\n.", [1], "table-cell{background:#fff;font-size:", [0, 28], ";padding:0 ", [0, 24], "}\n.", [1], "cell-icon{min-width:", [0, 200], "}\n.", [1], "select-item{border:1px solid #e6e6e6;border-radius:", [0, 12], ";color:#777;display:inline-block;font-size:", [0, 26], ";margin:", [0, 10], ";padding:", [0, 8], " ", [0, 24], ";text-align:center}\n.", [1], "select-item.", [1], "active{background:#fff7f8;border-color:#ffbfc6;color:#e60012}\n.", [1], "textarea{border:", [0, 1], " solid #e6e6e6;height:", [0, 150], ";padding:", [0, 10], ";width:", [0, 400], "}\n",], undefined, {path: "./component/debug/index.wxss"});
}
$gwx_XC_5 = function (_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
    return function (path, global) {
        if (typeof global === 'undefined') {
            if (typeof __GWX_GLOBAL__ === 'undefined') global = {}; else global = __GWX_GLOBAL__;
        }
        if (typeof __WXML_GLOBAL__ === 'undefined') {
            __WXML_GLOBAL__ = {};
        }
        __WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
        var e_ = {}
        if (typeof (global.entrys) === 'undefined') global.entrys = {};
        e_ = global.entrys;
        var d_ = {}
        if (typeof (global.defines) === 'undefined') global.defines = {};
        d_ = global.defines;
        var f_ = {}
        if (typeof (global.modules) === 'undefined') global.modules = {};
        f_ = global.modules || {};
        var p_ = {}
        __WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
        __WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
        __WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
        var z = __WXML_GLOBAL__.ops_set.$gwx_XC_5 || [];

        function gz$gwx_XC_5_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx_XC_5_1) return __WXML_GLOBAL__.ops_cached.$gwx_XC_5_1
            __WXML_GLOBAL__.ops_cached.$gwx_XC_5_1 = [];
            (function (z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }

                Z([[2, '=='], [[7], [3, 'type']], [1, 'textarea']])
                Z([3, 'textarea-container custom-class'])
                Z([3, 'onInput'])
                Z([3, 'textarea'])
                Z([3, '140'])
                Z([[7], [3, 'maxLength']])
                Z([[7], [3, 'value']])
                Z([[7], [3, 'placeholder']])
                Z([3, 'placeholder'])
                Z([1, false])
                Z([3, 'limitTip'])
                Z([a, [3, 'color: '], [[2, '?:'], [[2, '>='], [[6], [[7], [3, 'value']], [3, 'length']], [[7], [3, 'maxLength']]], [1, 'red'], [1, '']]])
                Z([a, [[2, '?:'], [[2, '>='], [[6], [[7], [3, 'value']], [3, 'length']], [[7], [3, 'maxLength']]], [[7], [3, 'maxLength']], [[6], [[7], [3, 'value']], [3, 'length']]]])
                Z([a, [3, '/'], [[7], [3, 'maxLength']]])
                Z([3, 'input-container custom-class'])
                Z(z[2])
                Z([3, 'input'])
                Z(z[4])
                Z(z[5])
                Z(z[6])
                Z(z[7])
                Z(z[8])
                Z([3, 'clearValue'])
                Z([3, 'clear-btn'])
                Z([[2, '||'], [[2, '!'], [[6], [[7], [3, 'value']], [3, 'length']]], [[2, '!'], [[7], [3, 'clearable']]]])
                Z([3, 'clear-icon'])
                Z([3, '/assets/close.png'])
            })(__WXML_GLOBAL__.ops_cached.$gwx_XC_5_1);
            return __WXML_GLOBAL__.ops_cached.$gwx_XC_5_1
        }

        __WXML_GLOBAL__.ops_set.$gwx_XC_5 = z;
        __WXML_GLOBAL__.ops_init.$gwx_XC_5 = true;
        var x = ['./component/field/index.wxml'];
        d_[x[0]] = {}
        var m0 = function (e, s, r, gg) {
            var z = gz$gwx_XC_5_1()
            var oTE = _v()
            _(r, oTE)
            if (_oz(z, 0, e, s, gg)) {
                oTE.wxVkey = 1
                var lUE = _n('view')
                _rz(z, lUE, 'class', 1, e, s, gg)
                var aVE = _mz(z, 'textarea', ['disableDefaultPadding', -1, 'bindinput', 2, 'class', 1, 'cursorSpacing', 2, 'maxlength', 3, 'value', 4, 'placeholder', 5, 'placeholderClass', 6, 'showConfirmBar', 7], [], e, s, gg)
                aVE.rawAttr = {"model:value": "{{value}}",};
                _(lUE, aVE)
                var tWE = _n('view')
                _rz(z, tWE, 'class', 10, e, s, gg)
                var eXE = _n('text')
                _rz(z, eXE, 'style', 11, e, s, gg)
                var bYE = _oz(z, 12, e, s, gg)
                _(eXE, bYE)
                _(tWE, eXE)
                var oZE = _oz(z, 13, e, s, gg)
                _(tWE, oZE)
                _(lUE, tWE)
                _(oTE, lUE)
            } else {
                oTE.wxVkey = 2
                var x1E = _n('view')
                _rz(z, x1E, 'class', 14, e, s, gg)
                var o2E = _mz(z, 'input', ['bindinput', 15, 'class', 1, 'cursorSpacing', 2, 'maxlength', 3, 'value', 4, 'placeholder', 5, 'placeholderClass', 6], [], e, s, gg)
                o2E.rawAttr = {"model:value": "{{value}}",};
                _(x1E, o2E)
                var f3E = _mz(z, 'view', ['bindtap', 22, 'class', 1, 'hidden', 2], [], e, s, gg)
                var c4E = _mz(z, 'image', ['class', 25, 'src', 1], [], e, s, gg)
                _(f3E, c4E)
                _(x1E, f3E)
                _(oTE, x1E)
            }
            oTE.wxXCkey = 1
            return r
        }
        e_[x[0]] = e_[x[0]] || {f: m0, j: [], i: [], ti: [], ic: []}
        if (path && e_[path]) {
            outerGlobal.__wxml_comp_version__ = 0.02
            return function (env, dd, global) {
                $gwxc = 0;
                var root = {"tag": "wx-page"};
                root.children = []
                ;g = "$gwx_XC_5";
                var main = e_[path].f
                if (typeof global === "undefined") global = {};
                global.f = $gdc(f_[path], "", 1);
                if (typeof (outerGlobal.__webview_engine_version__) != 'undefined' && outerGlobal.__webview_engine_version__ + 1e-6 >= 0.02 + 1e-6 && outerGlobal.__mergeData__) {
                    env = outerGlobal.__mergeData__(env, dd);
                }
                try {
                    main(env, {}, root, global);
                    _tsd(root)
                    if (typeof (outerGlobal.__webview_engine_version__) == 'undefined' || outerGlobal.__webview_engine_version__ + 1e-6 < 0.01 + 1e-6) {
                        return _ev(root);
                    }
                } catch (err) {
                    console.log(err)
                }
                ;g = "";
                return root;
            }
        }
    }
}(__g.a, __g.b, __g.c, __g.d, __g.e, __g.f, __g.g, __g.h, __g.i, __g.j, __g.k, __g.l, __g.m, __g.n, __g.o, __g.p, __g.q, __g.r, __g.s, __g.t, __g.u, __g.v, __g.w, __g.x, __g.y, __g.z, __g.A, __g.B, __g.C, __g.D, __g.E, __g.F, __g.G, __g.H, __g.I, __g.J, __g.K, __g.L, __g.M, __g.N, __g.O, __g.P, __g.Q, __g.R, __g.S, __g.T, __g.U, __g.V, __g.W, __g.X, __g.Y, __g.Z, __g.aa);
if (__vd_version_info__.delayedGwx || false) $gwx_XC_5();
if (__vd_version_info__.delayedGwx) __wxAppCode__['component/field/index.wxml'] = [$gwx_XC_5, './component/field/index.wxml']; else __wxAppCode__['component/field/index.wxml'] = $gwx_XC_5('./component/field/index.wxml');

var noCss = typeof __vd_version_info__ !== 'undefined' && __vd_version_info__.noCss === true;
if (!noCss) {
    __wxAppCode__['component/field/index.wxss'] = setCssToHead([".", [1], "textarea-container{border-radius:", [0, 12], ";padding:", [0, 16], " ", [0, 32], "}\n.", [1], "textarea{background-color:#f5f5f5;border-radius:", [0, 12], ";box-sizing:border-box;font-size:", [0, 26], ";height:", [0, 240], ";margin:auto;padding:", [0, 20], " ", [0, 32], ";width:100%}\n.", [1], "placeholder{color:#aaa}\n.", [1], "limitTip{font-size:", [0, 26], ";padding:0 ", [0, 32], ";position:relative;text-align:right;top:", [0, -50], "}\n.", [1], "input-container{background-color:#f1f1f2;border-radius:", [0, 12], ";position:relative}\n.", [1], "input{box-sizing:border-box;font-size:", [0, 26], ";height:", [0, 88], ";padding:", [0, 20], " ", [0, 32], "}\n.", [1], "clear-btn{-webkit-box-pack:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:flex;height:", [0, 88], ";-webkit-justify-content:center;justify-content:center;padding-right:", [0, 20], ";position:absolute;right:0;top:0;width:", [0, 60], ";z-index:50}\n.", [1], "clear-icon{height:", [0, 30], ";width:", [0, 30], "}\n",], undefined, {path: "./component/field/index.wxss"});
}
$gwx_XC_6 = function (_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
    return function (path, global) {
        if (typeof global === 'undefined') {
            if (typeof __GWX_GLOBAL__ === 'undefined') global = {}; else global = __GWX_GLOBAL__;
        }
        if (typeof __WXML_GLOBAL__ === 'undefined') {
            __WXML_GLOBAL__ = {};
        }
        __WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
        var e_ = {}
        if (typeof (global.entrys) === 'undefined') global.entrys = {};
        e_ = global.entrys;
        var d_ = {}
        if (typeof (global.defines) === 'undefined') global.defines = {};
        d_ = global.defines;
        var f_ = {}
        if (typeof (global.modules) === 'undefined') global.modules = {};
        f_ = global.modules || {};
        var p_ = {}
        __WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
        __WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
        __WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
        var z = __WXML_GLOBAL__.ops_set.$gwx_XC_6 || [];

        function gz$gwx_XC_6_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx_XC_6_1) return __WXML_GLOBAL__.ops_cached.$gwx_XC_6_1
            __WXML_GLOBAL__.ops_cached.$gwx_XC_6_1 = [];
            (function (z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }

                Z([3, 'goods-detail'])
                Z([a, [3, 'display: '], [[2, '?:'], [[7], [3, 'show']], [1, 'block'], [1, 'none']]])
                Z([3, 'img-text-row f11'])
                Z([3, 'goods-img'])
                Z([[6], [[7], [3, 'goods']], [3, 'productLogo']])
                Z([3, 'f14 fb'])
                Z([3, 'width:250rpx'])
                Z([a, [[6], [[7], [3, 'goods']], [3, 'productName']]])
                Z([3, 'c-aaa'])
                Z([3, 'margin:16rpx 0 10rpx'])
                Z([a, [[2, '||'], [[6], [[7], [3, 'goods']], [3, 'productDesc']], [1, '']]])
                Z([[2, '&&'], [[6], [[7], [3, 'goods']], [3, 'productLabels']], [[6], [[6], [[7], [3, 'goods']], [3, 'productLabels']], [1, 0]]])
                Z([3, 'activity-label c-theme-light mx-ellipsis f10'])
                Z([a, [[6], [[6], [[7], [3, 'goods']], [3, 'productLabels']], [1, 0]]])
                Z([3, 'attrs-item'])
                Z([[2, '&&'], [[6], [[6], [[7], [3, 'goods']], [3, 'cups']], [3, 'length']], [[2, '!'], [[7], [3, 'isCombo']]]])
                Z([3, 'select-item-title f12 c-777'])
                Z([3, '杯型'])
                Z([3, 'goods-cups'])
                Z([[6], [[7], [3, 'goods']], [3, 'cups']])
                Z([3, 'specId'])
                Z([3, 'selectCup'])
                Z([a, [3, 'select-item '], [[2, '?:'], [[2, '==='], [[7], [3, 'index']], [[6], [[7], [3, 'goods']], [3, 'selectCup']]], [1, 'active'], [1, '']]])
                Z([[7], [3, 'index']])
                Z([a, [[6], [[7], [3, 'item']], [3, 'specName']]])
                Z([[6], [[6], [[7], [3, 'goods']], [3, 'productSpecs']], [3, 'length']])
                Z([[6], [[7], [3, 'goods']], [3, 'productSpecs']])
                Z(z[20])
                Z(z[16])
                Z([a, z[24][1]])
                Z([[2, '>'], [[6], [[7], [3, 'item']], [3, 'maxSelect']], [1, 1]])
                Z([3, 'f11'])
                Z([a, [3, '（多选，'], [[2, '?:'], [[6], [[7], [3, 'item']], [3, 'multiSelect']], [1, '可'], [1, '不可']], [3, '重复）']])
                Z([3, 'goods-specs'])
                Z(z[30])
                Z([3, 'spec_idx'])
                Z([3, 'spec'])
                Z([[6], [[7], [3, 'item']], [3, 'specs']])
                Z(z[20])
                Z([a, [3, 'spec-item '], [[2, '?:'], [[6], [[7], [3, 'spec']], [3, 'addNum']], [1, 'active'], [1, '']]])
                Z([3, 'removeSpec'])
                Z([a, [3, 'icon-btn iconfont icon-remove '], [[2, '?:'], [[6], [[7], [3, 'spec']], [3, 'addNum']], [1, 'c-theme'], [1, 'c-e6']]])
                Z([[4], [[5], [[5], [[7], [3, 'index']]], [[7], [3, 'spec_idx']]]])
                Z([a, [[6], [[7], [3, 'spec']], [3, 'specName']], [3, ' ¥'], [[2, '/'], [[6], [[7], [3, 'spec']], [3, 'specPrice']], [1, 100]]])
                Z([3, 'addSpec'])
                Z([3, 'icon-btn iconfont icon-add c-theme'])
                Z(z[42])
                Z([3, 'number-icon'])
                Z([a, z[1][1], [[2, '?:'], [[6], [[7], [3, 'spec']], [3, 'addNum']], [1, 'block'], [1, 'none']]])
                Z([a, [[6], [[7], [3, 'spec']], [3, 'addNum']]])
                Z(z[35])
                Z(z[36])
                Z(z[37])
                Z(z[20])
                Z([3, 'selectSpec'])
                Z([a, z[22][1], [[2, '?:'], [[2, '==='], [[7], [3, 'spec_idx']], [[6], [[7], [3, 'item']], [3, 'selectSpec']]], [1, 'active'], [1, '']]])
                Z(z[42])
                Z([a, z[43][1], z[43][2], z[43][3]])
                Z([[6], [[6], [[7], [3, 'goods']], [3, 'productAttrs']], [3, 'length']])
                Z([[6], [[7], [3, 'goods']], [3, 'productAttrs']])
                Z([3, 'attributeId'])
                Z(z[16])
                Z([a, [[6], [[7], [3, 'item']], [3, 'attributeName']]])
                Z([3, 'goods-attrs'])
                Z([3, 'attr_idx'])
                Z(z[36])
                Z([[6], [[7], [3, 'item']], [3, 'productAttrs']])
                Z(z[60])
                Z([3, 'selectAttr'])
                Z([a, z[22][1], [[2, '?:'], [[2, '==='], [[7], [3, 'attr_idx']], [[6], [[7], [3, 'item']], [3, 'selectAttr']]], [1, 'active'], [1, '']]])
                Z([[4], [[5], [[5], [[7], [3, 'index']]], [[7], [3, 'attr_idx']]]])
                Z([a, [[6], [[7], [3, 'spec']], [3, 'attributeName']]])
                Z([[7], [3, 'isCombo']])
                Z([3, 'confirmSelect'])
                Z([3, 'width:280rpx;margin:32rpx auto 0;'])
                Z([3, '确定'])
                Z([3, 'add-to-cart flex-sb'])
                Z([3, 'f12 fb'])
                Z([3, 'margin-right:4rpx'])
                Z([3, '¥'])
                Z([3, 'f18'])
                Z([a, [[6], [[7], [3, 'detailPrice']], [1, 0]]])
                Z([[6], [[7], [3, 'detailPrice']], [1, 1]])
                Z([a, [3, '.'], [[6], [[7], [3, 'detailPrice']], [1, 1]]])
                Z([[2, '=='], [[6], [[7], [3, 'goods']], [3, 'productStatus']], [1, 3]])
                Z([3, 'f11 c-aaa'])
                Z([3, '已售罄'])
                Z([[2, '&&'], [[2, '=='], [[6], [[7], [3, 'cart']], [3, 'orderType']], [1, 1]], [[2, '=='], [[6], [[7], [3, 'goods']], [3, 'orderType']], [1, 2]]])
                Z(z[85])
                Z([3, '不支持自提'])
                Z([[2, '&&'], [[2, '=='], [[6], [[7], [3, 'cart']], [3, 'orderType']], [1, 2]], [[2, '=='], [[6], [[7], [3, 'goods']], [3, 'orderType']], [1, 1]]])
                Z(z[85])
                Z([3, '不支持外送'])
                Z([[6], [[7], [3, 'idsMap']], [[7], [3, 'currentIds']]])
                Z([3, 'number-buttons flex-sb'])
                Z([3, 'width:170rpx;font-size:48rpx'])
                Z([3, 'dialogRemoveGoods'])
                Z([3, 'icon-btn iconfont icon-remove c-theme'])
                Z([3, 'f14'])
                Z([a, [[6], [[7], [3, 'idsMap']], [[7], [3, 'currentIds']]]])
                Z([3, 'dialogAddGoods'])
                Z(z[45])
                Z(z[100])
                Z([3, 'width:240rpx'])
                Z([3, '加入购物车'])
                Z([3, 'share'])
                Z(z[105])
                Z([3, 'share-img'])
                Z([3, '/assets/goods_share.png'])
                Z([3, 'close'])
                Z(z[109])
                Z([3, '/assets/close.png'])
            })(__WXML_GLOBAL__.ops_cached.$gwx_XC_6_1);
            return __WXML_GLOBAL__.ops_cached.$gwx_XC_6_1
        }

        __WXML_GLOBAL__.ops_set.$gwx_XC_6 = z;
        __WXML_GLOBAL__.ops_init.$gwx_XC_6 = true;
        var x = ['./component/goods-detail/index.wxml'];
        d_[x[0]] = {}
        var m0 = function (e, s, r, gg) {
            var z = gz$gwx_XC_6_1()
            var o6E = _mz(z, 'view', ['class', 0, 'style', 1], [], e, s, gg)
            var o8E = _n('view')
            _rz(z, o8E, 'class', 2, e, s, gg)
            var a0E = _mz(z, 'image', ['class', 3, 'src', 1], [], e, s, gg)
            _(o8E, a0E)
            var tAF = _mz(z, 'view', ['class', 5, 'style', 1], [], e, s, gg)
            var eBF = _oz(z, 7, e, s, gg)
            _(tAF, eBF)
            _(o8E, tAF)
            var bCF = _mz(z, 'view', ['class', 8, 'style', 1], [], e, s, gg)
            var oDF = _oz(z, 10, e, s, gg)
            _(bCF, oDF)
            _(o8E, bCF)
            var l9E = _v()
            _(o8E, l9E)
            if (_oz(z, 11, e, s, gg)) {
                l9E.wxVkey = 1
                var xEF = _n('view')
                _rz(z, xEF, 'class', 12, e, s, gg)
                var oFF = _oz(z, 13, e, s, gg)
                _(xEF, oFF)
                _(l9E, xEF)
            }
            l9E.wxXCkey = 1
            _(o6E, o8E)
            var fGF = _n('view')
            _rz(z, fGF, 'class', 14, e, s, gg)
            var cHF = _v()
            _(fGF, cHF)
            if (_oz(z, 15, e, s, gg)) {
                cHF.wxVkey = 1
                var cKF = _n('view')
                _rz(z, cKF, 'class', 16, e, s, gg)
                var oLF = _oz(z, 17, e, s, gg)
                _(cKF, oLF)
                _(cHF, cKF)
                var lMF = _n('view')
                _rz(z, lMF, 'class', 18, e, s, gg)
                var aNF = _v()
                _(lMF, aNF)
                var tOF = function (bQF, ePF, oRF, gg) {
                    var oTF = _mz(z, 'text', ['bindtap', 21, 'class', 1, 'data-index', 2], [], bQF, ePF, gg)
                    var fUF = _oz(z, 24, bQF, ePF, gg)
                    _(oTF, fUF)
                    _(oRF, oTF)
                    return oRF
                }
                aNF.wxXCkey = 2
                _2z(z, 19, tOF, e, s, gg, aNF, 'item', 'index', 'specId')
                _(cHF, lMF)
            }
            var hIF = _v()
            _(fGF, hIF)
            if (_oz(z, 25, e, s, gg)) {
                hIF.wxVkey = 1
                var cVF = _v()
                _(hIF, cVF)
                var hWF = function (cYF, oXF, oZF, gg) {
                    var a2F = _n('view')
                    _rz(z, a2F, 'class', 28, cYF, oXF, gg)
                    var e4F = _n('text')
                    var b5F = _oz(z, 29, cYF, oXF, gg)
                    _(e4F, b5F)
                    _(a2F, e4F)
                    var t3F = _v()
                    _(a2F, t3F)
                    if (_oz(z, 30, cYF, oXF, gg)) {
                        t3F.wxVkey = 1
                        var o6F = _n('text')
                        _rz(z, o6F, 'class', 31, cYF, oXF, gg)
                        var x7F = _oz(z, 32, cYF, oXF, gg)
                        _(o6F, x7F)
                        _(t3F, o6F)
                    }
                    t3F.wxXCkey = 1
                    _(oZF, a2F)
                    var o8F = _n('view')
                    _rz(z, o8F, 'class', 33, cYF, oXF, gg)
                    var f9F = _v()
                    _(o8F, f9F)
                    if (_oz(z, 34, cYF, oXF, gg)) {
                        f9F.wxVkey = 1
                        var c0F = _v()
                        _(f9F, c0F)
                        var hAG = function (cCG, oBG, oDG, gg) {
                            var aFG = _n('view')
                            _rz(z, aFG, 'class', 39, cCG, oBG, gg)
                            var tGG = _mz(z, 'text', ['bindtap', 40, 'class', 1, 'data-indexs', 2], [], cCG, oBG, gg)
                            _(aFG, tGG)
                            var eHG = _n('text')
                            var bIG = _oz(z, 43, cCG, oBG, gg)
                            _(eHG, bIG)
                            _(aFG, eHG)
                            var oJG = _mz(z, 'text', ['bindtap', 44, 'class', 1, 'data-indexs', 2], [], cCG, oBG, gg)
                            _(aFG, oJG)
                            var xKG = _mz(z, 'text', ['class', 47, 'style', 1], [], cCG, oBG, gg)
                            var oLG = _oz(z, 49, cCG, oBG, gg)
                            _(xKG, oLG)
                            _(aFG, xKG)
                            _(oDG, aFG)
                            return oDG
                        }
                        c0F.wxXCkey = 2
                        _2z(z, 37, hAG, cYF, oXF, gg, c0F, 'spec', 'spec_idx', 'specId')
                    } else {
                        f9F.wxVkey = 2
                        var fMG = _v()
                        _(f9F, fMG)
                        var cNG = function (oPG, hOG, cQG, gg) {
                            var lSG = _mz(z, 'text', ['bindtap', 54, 'class', 1, 'data-indexs', 2], [], oPG, hOG, gg)
                            var aTG = _oz(z, 57, oPG, hOG, gg)
                            _(lSG, aTG)
                            _(cQG, lSG)
                            return cQG
                        }
                        fMG.wxXCkey = 2
                        _2z(z, 52, cNG, cYF, oXF, gg, fMG, 'spec', 'spec_idx', 'specId')
                    }
                    f9F.wxXCkey = 1
                    _(oZF, o8F)
                    return oZF
                }
                cVF.wxXCkey = 2
                _2z(z, 26, hWF, e, s, gg, cVF, 'item', 'index', 'specId')
            }
            var oJF = _v()
            _(fGF, oJF)
            if (_oz(z, 58, e, s, gg)) {
                oJF.wxVkey = 1
                var tUG = _v()
                _(oJF, tUG)
                var eVG = function (oXG, bWG, xYG, gg) {
                    var f1G = _n('view')
                    _rz(z, f1G, 'class', 61, oXG, bWG, gg)
                    var c2G = _oz(z, 62, oXG, bWG, gg)
                    _(f1G, c2G)
                    _(xYG, f1G)
                    var h3G = _n('view')
                    _rz(z, h3G, 'class', 63, oXG, bWG, gg)
                    var o4G = _v()
                    _(h3G, o4G)
                    var c5G = function (l7G, o6G, a8G, gg) {
                        var e0G = _mz(z, 'text', ['bindtap', 68, 'class', 1, 'data-indexs', 2], [], l7G, o6G, gg)
                        var bAH = _oz(z, 71, l7G, o6G, gg)
                        _(e0G, bAH)
                        _(a8G, e0G)
                        return a8G
                    }
                    o4G.wxXCkey = 2
                    _2z(z, 66, c5G, oXG, bWG, gg, o4G, 'spec', 'attr_idx', 'attributeId')
                    _(xYG, h3G)
                    return xYG
                }
                tUG.wxXCkey = 2
                _2z(z, 59, eVG, e, s, gg, tUG, 'item', 'index', 'attributeId')
            }
            cHF.wxXCkey = 1
            hIF.wxXCkey = 1
            oJF.wxXCkey = 1
            _(o6E, fGF)
            var c7E = _v()
            _(o6E, c7E)
            if (_oz(z, 72, e, s, gg)) {
                c7E.wxVkey = 1
                var oBH = _mz(z, 'button', ['bindtap', 73, 'style', 1], [], e, s, gg)
                var xCH = _oz(z, 75, e, s, gg)
                _(oBH, xCH)
                _(c7E, oBH)
            } else {
                c7E.wxVkey = 2
                var oDH = _n('view')
                _rz(z, oDH, 'class', 76, e, s, gg)
                var cFH = _n('text')
                _rz(z, cFH, 'class', 77, e, s, gg)
                var oHH = _n('text')
                _rz(z, oHH, 'style', 78, e, s, gg)
                var cIH = _oz(z, 79, e, s, gg)
                _(oHH, cIH)
                _(cFH, oHH)
                var oJH = _n('text')
                _rz(z, oJH, 'class', 80, e, s, gg)
                var lKH = _oz(z, 81, e, s, gg)
                _(oJH, lKH)
                _(cFH, oJH)
                var hGH = _v()
                _(cFH, hGH)
                if (_oz(z, 82, e, s, gg)) {
                    hGH.wxVkey = 1
                    var aLH = _n('text')
                    var tMH = _oz(z, 83, e, s, gg)
                    _(aLH, tMH)
                    _(hGH, aLH)
                }
                hGH.wxXCkey = 1
                _(oDH, cFH)
                var fEH = _v()
                _(oDH, fEH)
                if (_oz(z, 84, e, s, gg)) {
                    fEH.wxVkey = 1
                    var eNH = _n('text')
                    _rz(z, eNH, 'class', 85, e, s, gg)
                    var bOH = _oz(z, 86, e, s, gg)
                    _(eNH, bOH)
                    _(fEH, eNH)
                } else if (_oz(z, 87, e, s, gg)) {
                    fEH.wxVkey = 2
                    var oPH = _n('text')
                    _rz(z, oPH, 'class', 88, e, s, gg)
                    var xQH = _oz(z, 89, e, s, gg)
                    _(oPH, xQH)
                    _(fEH, oPH)
                } else if (_oz(z, 90, e, s, gg)) {
                    fEH.wxVkey = 3
                    var oRH = _n('text')
                    _rz(z, oRH, 'class', 91, e, s, gg)
                    var fSH = _oz(z, 92, e, s, gg)
                    _(oRH, fSH)
                    _(fEH, oRH)
                } else if (_oz(z, 93, e, s, gg)) {
                    fEH.wxVkey = 4
                    var cTH = _mz(z, 'view', ['class', 94, 'style', 1], [], e, s, gg)
                    var hUH = _mz(z, 'text', ['bindtap', 96, 'class', 1], [], e, s, gg)
                    _(cTH, hUH)
                    var oVH = _n('text')
                    _rz(z, oVH, 'class', 98, e, s, gg)
                    var cWH = _oz(z, 99, e, s, gg)
                    _(oVH, cWH)
                    _(cTH, oVH)
                    var oXH = _mz(z, 'text', ['bindtap', 100, 'class', 1], [], e, s, gg)
                    _(cTH, oXH)
                    _(fEH, cTH)
                } else {
                    fEH.wxVkey = 5
                    var lYH = _mz(z, 'button', ['bindtap', 102, 'style', 1], [], e, s, gg)
                    var aZH = _oz(z, 104, e, s, gg)
                    _(lYH, aZH)
                    _(fEH, lYH)
                }
                fEH.wxXCkey = 1
                _(c7E, oDH)
                var t1H = _mz(z, 'button', ['class', 105, 'openType', 1], [], e, s, gg)
                var e2H = _mz(z, 'image', ['class', 107, 'src', 1], [], e, s, gg)
                _(t1H, e2H)
                _(c7E, t1H)
            }
            var b3H = _mz(z, 'image', ['bindtap', 109, 'class', 1, 'src', 2], [], e, s, gg)
            _(o6E, b3H)
            c7E.wxXCkey = 1
            _(r, o6E)
            return r
        }
        e_[x[0]] = e_[x[0]] || {f: m0, j: [], i: [], ti: [], ic: []}
        if (path && e_[path]) {
            outerGlobal.__wxml_comp_version__ = 0.02
            return function (env, dd, global) {
                $gwxc = 0;
                var root = {"tag": "wx-page"};
                root.children = []
                ;g = "$gwx_XC_6";
                var main = e_[path].f
                if (typeof global === "undefined") global = {};
                global.f = $gdc(f_[path], "", 1);
                if (typeof (outerGlobal.__webview_engine_version__) != 'undefined' && outerGlobal.__webview_engine_version__ + 1e-6 >= 0.02 + 1e-6 && outerGlobal.__mergeData__) {
                    env = outerGlobal.__mergeData__(env, dd);
                }
                try {
                    main(env, {}, root, global);
                    _tsd(root)
                    if (typeof (outerGlobal.__webview_engine_version__) == 'undefined' || outerGlobal.__webview_engine_version__ + 1e-6 < 0.01 + 1e-6) {
                        return _ev(root);
                    }
                } catch (err) {
                    console.log(err)
                }
                ;g = "";
                return root;
            }
        }
    }
}(__g.a, __g.b, __g.c, __g.d, __g.e, __g.f, __g.g, __g.h, __g.i, __g.j, __g.k, __g.l, __g.m, __g.n, __g.o, __g.p, __g.q, __g.r, __g.s, __g.t, __g.u, __g.v, __g.w, __g.x, __g.y, __g.z, __g.A, __g.B, __g.C, __g.D, __g.E, __g.F, __g.G, __g.H, __g.I, __g.J, __g.K, __g.L, __g.M, __g.N, __g.O, __g.P, __g.Q, __g.R, __g.S, __g.T, __g.U, __g.V, __g.W, __g.X, __g.Y, __g.Z, __g.aa);
if (__vd_version_info__.delayedGwx || false) $gwx_XC_6();
if (__vd_version_info__.delayedGwx) __wxAppCode__['component/goods-detail/index.wxml'] = [$gwx_XC_6, './component/goods-detail/index.wxml']; else __wxAppCode__['component/goods-detail/index.wxml'] = $gwx_XC_6('./component/goods-detail/index.wxml');

var noCss = typeof __vd_version_info__ !== 'undefined' && __vd_version_info__.noCss === true;
if (!noCss) {
    __wxAppCode__['component/goods-detail/index.wxss'] = setCssToHead([".", [1], "goods-detail{padding:", [0, 32], ";position:relative}\n.", [1], "img-text-row{height:", [0, 216], ";padding-left:", [0, 232], ";position:relative;width:", [0, 348], "}\n.", [1], "goods-img{border-radius:", [0, 12], ";height:", [0, 216], ";left:0;position:absolute;top:0;width:", [0, 216], "}\n.", [1], "goods-detail .", [1], "attrs-item{-webkit-overflow-scrolling:touch;max-height:50vh;overflow-x:hidden;overflow-y:scroll;padding-bottom:", [0, 32], "}\n.", [1], "goods-detail .", [1], "add-to-cart{height:", [0, 88], ";margin-top:", [0, 32], ";position:relative}\n.", [1], "close,.", [1], "share{background-color:initial;line-height:0;padding:", [0, 20], ";position:absolute;top:0}\n.", [1], "share{padding-right:", [0, 10], ";right:", [0, 78], "}\n.", [1], "close{padding-left:", [0, 10], ";right:0}\n.", [1], "close,.", [1], "share-img{height:", [0, 48], ";width:", [0, 48], "}\n.", [1], "select-item-title{margin-top:", [0, 32], "}\n.", [1], "goods-attrs,.", [1], "goods-specs{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap}\n.", [1], "goods-detail .", [1], "select-item,.", [1], "goods-detail .", [1], "spec-item{border:1px solid #e6e6e6;border-radius:", [0, 12], ";box-sizing:border-box;color:#777;display:inline-block;font-size:", [0, 26], ";height:", [0, 64], ";line-height:", [0, 64], ";margin:", [0, 24], " ", [0, 24], " 0 0;min-width:calc(33.33% - ", [0, 24], ");padding:0 ", [0, 10], ";text-align:center}\n.", [1], "goods-detail .", [1], "spec-item{-webkit-box-pack:justify;-webkit-box-align:center;-webkit-align-items:center;align-items:center;display:-webkit-inline-box;display:-webkit-inline-flex;display:inline-flex;-webkit-justify-content:space-between;justify-content:space-between;min-width:calc(50% - ", [0, 24], ");padding:0 ", [0, 2], ";position:relative}\n.", [1], "goods-specs .", [1], "iconfont{font-size:", [0, 48], "}\n.", [1], "spec-item .", [1], "spec-btns{height:", [0, 40], ";width:", [0, 40], "}\n.", [1], "spec-item .", [1], "number-icon{right:", [0, -10], ";top:", [0, -14], "}\n.", [1], "select-item.", [1], "active,.", [1], "spec-item.", [1], "active{background:#fff7f8;border-color:#ffbfc6;color:#e60012}\n",], undefined, {path: "./component/goods-detail/index.wxss"});
}
$gwx_XC_7 = function (_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
    return function (path, global) {
        if (typeof global === 'undefined') {
            if (typeof __GWX_GLOBAL__ === 'undefined') global = {}; else global = __GWX_GLOBAL__;
        }
        if (typeof __WXML_GLOBAL__ === 'undefined') {
            __WXML_GLOBAL__ = {};
        }
        __WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
        var e_ = {}
        if (typeof (global.entrys) === 'undefined') global.entrys = {};
        e_ = global.entrys;
        var d_ = {}
        if (typeof (global.defines) === 'undefined') global.defines = {};
        d_ = global.defines;
        var f_ = {}
        if (typeof (global.modules) === 'undefined') global.modules = {};
        f_ = global.modules || {};
        var p_ = {}
        __WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
        __WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
        __WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
        var z = __WXML_GLOBAL__.ops_set.$gwx_XC_7 || [];

        function gz$gwx_XC_7_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx_XC_7_1) return __WXML_GLOBAL__.ops_cached.$gwx_XC_7_1
            __WXML_GLOBAL__.ops_cached.$gwx_XC_7_1 = [];
            (function (z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }

                Z([[2, '&&'], [[7], [3, 'guidanceContentVo']], [[6], [[7], [3, 'guidanceContentVo']], [3, 'status']]])
                Z([3, 'onClick'])
                Z([3, 'guide-to-app flex-sb custom-class'])
                Z([3, 'flex-sb'])
                Z([3, 'logo'])
                Z([3, '/assets/logo_square.png'])
                Z([3, 'f14'])
                Z([3, '蜜雪冰城APP'])
                Z([a, [3, 'f12 c-777 iconfont '], [[2, '?:'], [[6], [[7], [3, 'guidanceContentVo']], [3, 'linkAddress']], [1, 'icon-arrow_right'], [1, '']]])
                Z([a, [[6], [[7], [3, 'guidanceContentVo']], [3, 'content']], [3, ' ']])
            })(__WXML_GLOBAL__.ops_cached.$gwx_XC_7_1);
            return __WXML_GLOBAL__.ops_cached.$gwx_XC_7_1
        }

        __WXML_GLOBAL__.ops_set.$gwx_XC_7 = z;
        __WXML_GLOBAL__.ops_init.$gwx_XC_7 = true;
        var x = ['./component/guide-to-app/index.wxml'];
        d_[x[0]] = {}
        var m0 = function (e, s, r, gg) {
            var z = gz$gwx_XC_7_1()
            var x5H = _v()
            _(r, x5H)
            if (_oz(z, 0, e, s, gg)) {
                x5H.wxVkey = 1
                var o6H = _mz(z, 'view', ['bindtap', 1, 'class', 1], [], e, s, gg)
                var f7H = _n('view')
                _rz(z, f7H, 'class', 3, e, s, gg)
                var c8H = _mz(z, 'image', ['class', 4, 'src', 1], [], e, s, gg)
                _(f7H, c8H)
                var h9H = _n('text')
                _rz(z, h9H, 'class', 6, e, s, gg)
                var o0H = _oz(z, 7, e, s, gg)
                _(h9H, o0H)
                _(f7H, h9H)
                _(o6H, f7H)
                var cAI = _n('view')
                _rz(z, cAI, 'class', 8, e, s, gg)
                var oBI = _oz(z, 9, e, s, gg)
                _(cAI, oBI)
                _(o6H, cAI)
                _(x5H, o6H)
            }
            x5H.wxXCkey = 1
            return r
        }
        e_[x[0]] = e_[x[0]] || {f: m0, j: [], i: [], ti: [], ic: []}
        if (path && e_[path]) {
            outerGlobal.__wxml_comp_version__ = 0.02
            return function (env, dd, global) {
                $gwxc = 0;
                var root = {"tag": "wx-page"};
                root.children = []
                ;g = "$gwx_XC_7";
                var main = e_[path].f
                if (typeof global === "undefined") global = {};
                global.f = $gdc(f_[path], "", 1);
                if (typeof (outerGlobal.__webview_engine_version__) != 'undefined' && outerGlobal.__webview_engine_version__ + 1e-6 >= 0.02 + 1e-6 && outerGlobal.__mergeData__) {
                    env = outerGlobal.__mergeData__(env, dd);
                }
                try {
                    main(env, {}, root, global);
                    _tsd(root)
                    if (typeof (outerGlobal.__webview_engine_version__) == 'undefined' || outerGlobal.__webview_engine_version__ + 1e-6 < 0.01 + 1e-6) {
                        return _ev(root);
                    }
                } catch (err) {
                    console.log(err)
                }
                ;g = "";
                return root;
            }
        }
    }
}(__g.a, __g.b, __g.c, __g.d, __g.e, __g.f, __g.g, __g.h, __g.i, __g.j, __g.k, __g.l, __g.m, __g.n, __g.o, __g.p, __g.q, __g.r, __g.s, __g.t, __g.u, __g.v, __g.w, __g.x, __g.y, __g.z, __g.A, __g.B, __g.C, __g.D, __g.E, __g.F, __g.G, __g.H, __g.I, __g.J, __g.K, __g.L, __g.M, __g.N, __g.O, __g.P, __g.Q, __g.R, __g.S, __g.T, __g.U, __g.V, __g.W, __g.X, __g.Y, __g.Z, __g.aa);
if (__vd_version_info__.delayedGwx || false) $gwx_XC_7();
if (__vd_version_info__.delayedGwx) __wxAppCode__['component/guide-to-app/index.wxml'] = [$gwx_XC_7, './component/guide-to-app/index.wxml']; else __wxAppCode__['component/guide-to-app/index.wxml'] = $gwx_XC_7('./component/guide-to-app/index.wxml');

var noCss = typeof __vd_version_info__ !== 'undefined' && __vd_version_info__.noCss === true;
if (!noCss) {
    __wxAppCode__['component/guide-to-app/index.wxss'] = setCssToHead([".", [1], "guide-to-app{background-color:#fff;border-radius:", [0, 12], ";height:", [0, 120], ";margin-top:", [0, 24], ";padding:0 ", [0, 28], "}\n.", [1], "logo{height:", [0, 44], ";margin-right:", [0, 28], ";width:", [0, 44], "}\n",], undefined, {path: "./component/guide-to-app/index.wxss"});
}
$gwx_XC_8 = function (_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
    return function (path, global) {
        if (typeof global === 'undefined') {
            if (typeof __GWX_GLOBAL__ === 'undefined') global = {}; else global = __GWX_GLOBAL__;
        }
        if (typeof __WXML_GLOBAL__ === 'undefined') {
            __WXML_GLOBAL__ = {};
        }
        __WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
        var e_ = {}
        if (typeof (global.entrys) === 'undefined') global.entrys = {};
        e_ = global.entrys;
        var d_ = {}
        if (typeof (global.defines) === 'undefined') global.defines = {};
        d_ = global.defines;
        var f_ = {}
        if (typeof (global.modules) === 'undefined') global.modules = {};
        f_ = global.modules || {};
        var p_ = {}
        __WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
        __WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
        __WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
        var z = __WXML_GLOBAL__.ops_set.$gwx_XC_8 || [];

        function gz$gwx_XC_8_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx_XC_8_1) return __WXML_GLOBAL__.ops_cached.$gwx_XC_8_1
            __WXML_GLOBAL__.ops_cached.$gwx_XC_8_1 = [];
            (function (z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }

                Z([3, 'onClose'])
                Z([3, 'bottom'])
                Z([[7], [3, 'show']])
                Z([3, 'container custom-class safe-bottom'])
                Z([3, 'header'])
                Z(z[2])
                Z([3, 'onChange'])
                Z([3, 'height: 88rpx;'])
                Z([3, 'height: 200rpx;'])
                Z([[4], [[5], [[7], [3, 'checked']]]])
                Z([3, 'item'])
                Z([[7], [3, 'data']])
                Z([3, 'index'])
                Z([3, 'flex-center'])
                Z([[6], [[7], [3, 'item']], [3, 'image']])
                Z(z[14])
                Z([3, 'width: 40rpx; height: 40rpx;'])
                Z([[6], [[7], [3, 'item']], [3, 'icon']])
                Z([a, [3, 'iconfont '], z[17]])
                Z([[6], [[7], [3, 'item']], [3, 'text']])
                Z([a, [[6], [[7], [3, 'item']], [3, 'text']]])
                Z([3, 'onSave'])
                Z([3, 'margin: 32rpx;'])
                Z([3, '确定'])
            })(__WXML_GLOBAL__.ops_cached.$gwx_XC_8_1);
            return __WXML_GLOBAL__.ops_cached.$gwx_XC_8_1
        }

        __WXML_GLOBAL__.ops_set.$gwx_XC_8 = z;
        __WXML_GLOBAL__.ops_init.$gwx_XC_8 = true;
        var x = ['./component/picker/index.wxml'];
        d_[x[0]] = {}
        var m0 = function (e, s, r, gg) {
            var z = gz$gwx_XC_8_1()
            var aDI = _mz(z, 'mx-popup', ['round', -1, 'bind:close', 0, 'position', 1, 'show', 1], [], e, s, gg)
            var tEI = _n('view')
            _rz(z, tEI, 'class', 3, e, s, gg)
            var bGI = _n('slot')
            _rz(z, bGI, 'name', 4, e, s, gg)
            _(tEI, bGI)
            var eFI = _v()
            _(tEI, eFI)
            if (_oz(z, 5, e, s, gg)) {
                eFI.wxVkey = 1
                var oHI = _mz(z, 'picker-view', ['immediateChange', -1, 'bindchange', 6, 'indicatorStyle', 1, 'style', 2, 'value', 3], [], e, s, gg)
                var xII = _n('picker-view-column')
                var oJI = _v()
                _(xII, oJI)
                var fKI = function (hMI, cLI, oNI, gg) {
                    var oPI = _n('view')
                    _rz(z, oPI, 'class', 13, hMI, cLI, gg)
                    var lQI = _v()
                    _(oPI, lQI)
                    if (_oz(z, 14, hMI, cLI, gg)) {
                        lQI.wxVkey = 1
                        var eTI = _mz(z, 'image', ['src', 15, 'style', 1], [], hMI, cLI, gg)
                        _(lQI, eTI)
                    }
                    var aRI = _v()
                    _(oPI, aRI)
                    if (_oz(z, 17, hMI, cLI, gg)) {
                        aRI.wxVkey = 1
                        var bUI = _n('text')
                        _rz(z, bUI, 'class', 18, hMI, cLI, gg)
                        _(aRI, bUI)
                    }
                    var tSI = _v()
                    _(oPI, tSI)
                    if (_oz(z, 19, hMI, cLI, gg)) {
                        tSI.wxVkey = 1
                        var oVI = _n('text')
                        var xWI = _oz(z, 20, hMI, cLI, gg)
                        _(oVI, xWI)
                        _(tSI, oVI)
                    }
                    lQI.wxXCkey = 1
                    aRI.wxXCkey = 1
                    tSI.wxXCkey = 1
                    _(oNI, oPI)
                    return oNI
                }
                oJI.wxXCkey = 2
                _2z(z, 11, fKI, e, s, gg, oJI, 'item', 'index', 'index')
                _(oHI, xII)
                _(eFI, oHI)
            }
            var oXI = _mz(z, 'button', ['bindtap', 21, 'style', 1], [], e, s, gg)
            var fYI = _oz(z, 23, e, s, gg)
            _(oXI, fYI)
            _(tEI, oXI)
            eFI.wxXCkey = 1
            _(aDI, tEI)
            _(r, aDI)
            return r
        }
        e_[x[0]] = e_[x[0]] || {f: m0, j: [], i: [], ti: [], ic: []}
        if (path && e_[path]) {
            outerGlobal.__wxml_comp_version__ = 0.02
            return function (env, dd, global) {
                $gwxc = 0;
                var root = {"tag": "wx-page"};
                root.children = []
                ;g = "$gwx_XC_8";
                var main = e_[path].f
                if (typeof global === "undefined") global = {};
                global.f = $gdc(f_[path], "", 1);
                if (typeof (outerGlobal.__webview_engine_version__) != 'undefined' && outerGlobal.__webview_engine_version__ + 1e-6 >= 0.02 + 1e-6 && outerGlobal.__mergeData__) {
                    env = outerGlobal.__mergeData__(env, dd);
                }
                try {
                    main(env, {}, root, global);
                    _tsd(root)
                    if (typeof (outerGlobal.__webview_engine_version__) == 'undefined' || outerGlobal.__webview_engine_version__ + 1e-6 < 0.01 + 1e-6) {
                        return _ev(root);
                    }
                } catch (err) {
                    console.log(err)
                }
                ;g = "";
                return root;
            }
        }
    }
}(__g.a, __g.b, __g.c, __g.d, __g.e, __g.f, __g.g, __g.h, __g.i, __g.j, __g.k, __g.l, __g.m, __g.n, __g.o, __g.p, __g.q, __g.r, __g.s, __g.t, __g.u, __g.v, __g.w, __g.x, __g.y, __g.z, __g.A, __g.B, __g.C, __g.D, __g.E, __g.F, __g.G, __g.H, __g.I, __g.J, __g.K, __g.L, __g.M, __g.N, __g.O, __g.P, __g.Q, __g.R, __g.S, __g.T, __g.U, __g.V, __g.W, __g.X, __g.Y, __g.Z, __g.aa);
if (__vd_version_info__.delayedGwx || false) $gwx_XC_8();
if (__vd_version_info__.delayedGwx) __wxAppCode__['component/picker/index.wxml'] = [$gwx_XC_8, './component/picker/index.wxml']; else __wxAppCode__['component/picker/index.wxml'] = $gwx_XC_8('./component/picker/index.wxml');

var noCss = typeof __vd_version_info__ !== 'undefined' && __vd_version_info__.noCss === true;
if (!noCss) {
    __wxAppCode__['component/picker/index.wxss'] = setCssToHead([".", [1], "container{padding-top:", [0, 40], ";text-align:center}\n.", [1], "icon-container{line-height:", [0, 88], "}\n",], undefined, {path: "./component/picker/index.wxss"});
}
$gwx_XC_9 = function (_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
    return function (path, global) {
        if (typeof global === 'undefined') {
            if (typeof __GWX_GLOBAL__ === 'undefined') global = {}; else global = __GWX_GLOBAL__;
        }
        if (typeof __WXML_GLOBAL__ === 'undefined') {
            __WXML_GLOBAL__ = {};
        }
        __WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
        var e_ = {}
        if (typeof (global.entrys) === 'undefined') global.entrys = {};
        e_ = global.entrys;
        var d_ = {}
        if (typeof (global.defines) === 'undefined') global.defines = {};
        d_ = global.defines;
        var f_ = {}
        if (typeof (global.modules) === 'undefined') global.modules = {};
        f_ = global.modules || {};
        var p_ = {}
        __WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
        __WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
        __WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
        var z = __WXML_GLOBAL__.ops_set.$gwx_XC_9 || [];

        function gz$gwx_XC_9_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx_XC_9_1) return __WXML_GLOBAL__.ops_cached.$gwx_XC_9_1
            __WXML_GLOBAL__.ops_cached.$gwx_XC_9_1 = [];
            (function (z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }

                Z([a, [3, 'popup custom-class '], [[2, '?:'], [[7], [3, 'animation']], [1, 'animation'], [1, '']], [3, ' '], [[2, '?:'], [[7], [3, 'show']], [1, 'popup-show'], [1, '']]])
                Z([[7], [3, 'mask']])
                Z([3, 'closePopup'])
                Z([3, 'popup-mask'])
                Z([a, [3, 'z-index: '], [[7], [3, 'zIndex']], [3, ';']])
                Z([a, [3, 'popup-content popup-position_'], [[7], [3, 'position']]])
                Z([a, z[4][1], z[4][2], z[4][3], [[7], [3, 'customStyle']]])
            })(__WXML_GLOBAL__.ops_cached.$gwx_XC_9_1);
            return __WXML_GLOBAL__.ops_cached.$gwx_XC_9_1
        }

        __WXML_GLOBAL__.ops_set.$gwx_XC_9 = z;
        __WXML_GLOBAL__.ops_init.$gwx_XC_9 = true;
        var x = ['./component/popup/index.wxml'];
        d_[x[0]] = {}
        var m0 = function (e, s, r, gg) {
            var z = gz$gwx_XC_9_1()
            var h1I = _n('view')
            _rz(z, h1I, 'class', 0, e, s, gg)
            var o2I = _v()
            _(h1I, o2I)
            if (_oz(z, 1, e, s, gg)) {
                o2I.wxVkey = 1
                var c3I = _mz(z, 'view', ['bindtap', 2, 'class', 1, 'style', 2], [], e, s, gg)
                _(o2I, c3I)
            }
            var o4I = _mz(z, 'view', ['class', 5, 'style', 1], [], e, s, gg)
            var l5I = _n('slot')
            _(o4I, l5I)
            _(h1I, o4I)
            o2I.wxXCkey = 1
            _(r, h1I)
            return r
        }
        e_[x[0]] = e_[x[0]] || {f: m0, j: [], i: [], ti: [], ic: []}
        if (path && e_[path]) {
            outerGlobal.__wxml_comp_version__ = 0.02
            return function (env, dd, global) {
                $gwxc = 0;
                var root = {"tag": "wx-page"};
                root.children = []
                ;g = "$gwx_XC_9";
                var main = e_[path].f
                if (typeof global === "undefined") global = {};
                global.f = $gdc(f_[path], "", 1);
                if (typeof (outerGlobal.__webview_engine_version__) != 'undefined' && outerGlobal.__webview_engine_version__ + 1e-6 >= 0.02 + 1e-6 && outerGlobal.__mergeData__) {
                    env = outerGlobal.__mergeData__(env, dd);
                }
                try {
                    main(env, {}, root, global);
                    _tsd(root)
                    if (typeof (outerGlobal.__webview_engine_version__) == 'undefined' || outerGlobal.__webview_engine_version__ + 1e-6 < 0.01 + 1e-6) {
                        return _ev(root);
                    }
                } catch (err) {
                    console.log(err)
                }
                ;g = "";
                return root;
            }
        }
    }
}(__g.a, __g.b, __g.c, __g.d, __g.e, __g.f, __g.g, __g.h, __g.i, __g.j, __g.k, __g.l, __g.m, __g.n, __g.o, __g.p, __g.q, __g.r, __g.s, __g.t, __g.u, __g.v, __g.w, __g.x, __g.y, __g.z, __g.A, __g.B, __g.C, __g.D, __g.E, __g.F, __g.G, __g.H, __g.I, __g.J, __g.K, __g.L, __g.M, __g.N, __g.O, __g.P, __g.Q, __g.R, __g.S, __g.T, __g.U, __g.V, __g.W, __g.X, __g.Y, __g.Z, __g.aa);
if (__vd_version_info__.delayedGwx || false) $gwx_XC_9();
if (__vd_version_info__.delayedGwx) __wxAppCode__['component/popup/index.wxml'] = [$gwx_XC_9, './component/popup/index.wxml']; else __wxAppCode__['component/popup/index.wxml'] = $gwx_XC_9('./component/popup/index.wxml');

var noCss = typeof __vd_version_info__ !== 'undefined' && __vd_version_info__.noCss === true;
if (!noCss) {
    __wxAppCode__['component/popup/index.wxss'] = setCssToHead([".", [1], "popup.", [1], "animation .", [1], "popup-content,.", [1], "popup.", [1], "animation .", [1], "popup-mask{transition:all .2s linear;-webkit-transition:all .2s linear;-moz-transition:all .2s linear;-o-transition:all .2s linear}\n.", [1], "popup-mask{background:rgba(0,0,0,.7);height:100%;left:0;opacity:0;position:fixed;top:0;visibility:hidden;width:100%}\n.", [1], "popup-content{background:#fff;position:fixed}\n.", [1], "popup-position_left{bottom:0;left:0;top:0;transform:translate3d(-100%,0,0);-webkit-transform:translate3d(-100%,0,0);-moz-transform:translate3d(-100%,0,0);-o-transform:translate3d(-100%,0,0)}\n.", [1], "popup-position_right{bottom:0;right:0;top:0;transform:translate3d(100%,0,0);-webkit-transform:translate3d(100%,0,0);-moz-transform:translate3d(100%,0,0);-o-transform:translate3d(100%,0,0)}\n.", [1], "popup-position_top{left:0;top:0;transform:translate3d(0,-100%,0);-webkit-transform:translate3d(0,-100%,0);-moz-transform:translate3d(0,-100%,0);-o-transform:translate3d(0,-100%,0);width:100vw}\n.", [1], "popup-position_bottom{border-top-left-radius:", [0, 20], ";border-top-right-radius:", [0, 20], ";bottom:0;left:0;overflow:hidden;transform:translate3d(0,100%,0);-webkit-transform:translate3d(0,100%,0);-moz-transform:translate3d(0,100%,0);-o-transform:translate3d(0,100%,0);width:100vw}\n.", [1], "popup-position_center{background:#fff;border-radius:", [0, 20], ";left:50vw;min-width:", [0, 560], ";opacity:0;position:fixed;top:50vh;transform:translate3d(-50%,-50%,0)!important;-webkit-transform:translate3d(-50%,-50%,0)!important;-moz-transform:translate3d(-50%,-50%,0)!important;-o-transform:translate3d(-50%,-50%,0)!important;visibility:hidden}\n.", [1], "popup-show .", [1], "popup-position_bottom,.", [1], "popup-show .", [1], "popup-position_left,.", [1], "popup-show .", [1], "popup-position_right,.", [1], "popup-show .", [1], "popup-position_top{transform:none;-webkit-transform:none;-moz-transform:none;-o-transform:none}\n.", [1], "popup-show .", [1], "popup-mask,.", [1], "popup-show .", [1], "popup-position_center{opacity:1;visibility:visible}\n",], undefined, {path: "./component/popup/index.wxss"});
}
$gwx_XC_10 = function (_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
    return function (path, global) {
        if (typeof global === 'undefined') {
            if (typeof __GWX_GLOBAL__ === 'undefined') global = {}; else global = __GWX_GLOBAL__;
        }
        if (typeof __WXML_GLOBAL__ === 'undefined') {
            __WXML_GLOBAL__ = {};
        }
        __WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
        var e_ = {}
        if (typeof (global.entrys) === 'undefined') global.entrys = {};
        e_ = global.entrys;
        var d_ = {}
        if (typeof (global.defines) === 'undefined') global.defines = {};
        d_ = global.defines;
        var f_ = {}
        if (typeof (global.modules) === 'undefined') global.modules = {};
        f_ = global.modules || {};
        var p_ = {}
        __WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
        __WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
        __WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
        var z = __WXML_GLOBAL__.ops_set.$gwx_XC_10 || [];

        function gz$gwx_XC_10_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx_XC_10_1) return __WXML_GLOBAL__.ops_cached.$gwx_XC_10_1
            __WXML_GLOBAL__.ops_cached.$gwx_XC_10_1 = [];
            (function (z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }

                Z([3, 'flex'])
                Z([3, 'product-img'])
                Z([[6], [[7], [3, 'product']], [3, 'productLogo']])
                Z([3, 'product-content'])
                Z([3, 'flex-sb'])
                Z([3, 'f14 mx-ellipsis c-333'])
                Z([a, [[6], [[7], [3, 'product']], [3, 'productName']]])
                Z([3, 'f12 ml11 shrink'])
                Z([[2, '!='], [[6], [[7], [3, 'product']], [3, 'originPrice']], [[6], [[7], [3, 'product']], [3, 'price']]])
                Z([3, 'mr7 disabled-price'])
                Z([a, [3, '￥'], [[2, '/'], [[6], [[7], [3, 'product']], [3, 'originPrice']], [1, 100]]])
                Z([3, 'f14 fb5 c-333'])
                Z([3, 'f12'])
                Z([3, '¥ '])
                Z([a, [[2, '/'], [[6], [[7], [3, 'product']], [3, 'price']], [1, 100]]])
                Z([3, 'f11 c-777 mt4'])
                Z([a, [3, ' '], [[7], [3, 'selectNames']]])
                Z([3, 'f12 c-777 mt4'])
                Z([a, [3, 'x '], [[6], [[7], [3, 'product']], [3, 'productAmount']]])
            })(__WXML_GLOBAL__.ops_cached.$gwx_XC_10_1);
            return __WXML_GLOBAL__.ops_cached.$gwx_XC_10_1
        }

        __WXML_GLOBAL__.ops_set.$gwx_XC_10 = z;
        __WXML_GLOBAL__.ops_init.$gwx_XC_10 = true;
        var x = ['./component/product-item/index.wxml'];
        d_[x[0]] = {}
        var m0 = function (e, s, r, gg) {
            var z = gz$gwx_XC_10_1()
            var t7I = _n('view')
            _rz(z, t7I, 'class', 0, e, s, gg)
            var e8I = _mz(z, 'image', ['class', 1, 'src', 1], [], e, s, gg)
            _(t7I, e8I)
            var b9I = _n('view')
            _rz(z, b9I, 'class', 3, e, s, gg)
            var o0I = _n('view')
            _rz(z, o0I, 'class', 4, e, s, gg)
            var xAJ = _n('text')
            _rz(z, xAJ, 'class', 5, e, s, gg)
            var oBJ = _oz(z, 6, e, s, gg)
            _(xAJ, oBJ)
            _(o0I, xAJ)
            var fCJ = _n('view')
            _rz(z, fCJ, 'class', 7, e, s, gg)
            var cDJ = _v()
            _(fCJ, cDJ)
            if (_oz(z, 8, e, s, gg)) {
                cDJ.wxVkey = 1
                var hEJ = _n('text')
                _rz(z, hEJ, 'class', 9, e, s, gg)
                var oFJ = _oz(z, 10, e, s, gg)
                _(hEJ, oFJ)
                _(cDJ, hEJ)
            }
            var cGJ = _n('text')
            _rz(z, cGJ, 'class', 11, e, s, gg)
            var oHJ = _n('text')
            _rz(z, oHJ, 'class', 12, e, s, gg)
            var lIJ = _oz(z, 13, e, s, gg)
            _(oHJ, lIJ)
            _(cGJ, oHJ)
            var aJJ = _oz(z, 14, e, s, gg)
            _(cGJ, aJJ)
            _(fCJ, cGJ)
            cDJ.wxXCkey = 1
            _(o0I, fCJ)
            _(b9I, o0I)
            var tKJ = _n('text')
            _rz(z, tKJ, 'class', 15, e, s, gg)
            var eLJ = _oz(z, 16, e, s, gg)
            _(tKJ, eLJ)
            _(b9I, tKJ)
            var bMJ = _n('view')
            _rz(z, bMJ, 'class', 17, e, s, gg)
            var oNJ = _oz(z, 18, e, s, gg)
            _(bMJ, oNJ)
            _(b9I, bMJ)
            _(t7I, b9I)
            _(r, t7I)
            return r
        }
        e_[x[0]] = e_[x[0]] || {f: m0, j: [], i: [], ti: [], ic: []}
        if (path && e_[path]) {
            outerGlobal.__wxml_comp_version__ = 0.02
            return function (env, dd, global) {
                $gwxc = 0;
                var root = {"tag": "wx-page"};
                root.children = []
                ;g = "$gwx_XC_10";
                var main = e_[path].f
                if (typeof global === "undefined") global = {};
                global.f = $gdc(f_[path], "", 1);
                if (typeof (outerGlobal.__webview_engine_version__) != 'undefined' && outerGlobal.__webview_engine_version__ + 1e-6 >= 0.02 + 1e-6 && outerGlobal.__mergeData__) {
                    env = outerGlobal.__mergeData__(env, dd);
                }
                try {
                    main(env, {}, root, global);
                    _tsd(root)
                    if (typeof (outerGlobal.__webview_engine_version__) == 'undefined' || outerGlobal.__webview_engine_version__ + 1e-6 < 0.01 + 1e-6) {
                        return _ev(root);
                    }
                } catch (err) {
                    console.log(err)
                }
                ;g = "";
                return root;
            }
        }
    }
}(__g.a, __g.b, __g.c, __g.d, __g.e, __g.f, __g.g, __g.h, __g.i, __g.j, __g.k, __g.l, __g.m, __g.n, __g.o, __g.p, __g.q, __g.r, __g.s, __g.t, __g.u, __g.v, __g.w, __g.x, __g.y, __g.z, __g.A, __g.B, __g.C, __g.D, __g.E, __g.F, __g.G, __g.H, __g.I, __g.J, __g.K, __g.L, __g.M, __g.N, __g.O, __g.P, __g.Q, __g.R, __g.S, __g.T, __g.U, __g.V, __g.W, __g.X, __g.Y, __g.Z, __g.aa);
if (__vd_version_info__.delayedGwx || false) $gwx_XC_10();
if (__vd_version_info__.delayedGwx) __wxAppCode__['component/product-item/index.wxml'] = [$gwx_XC_10, './component/product-item/index.wxml']; else __wxAppCode__['component/product-item/index.wxml'] = $gwx_XC_10('./component/product-item/index.wxml');

var noCss = typeof __vd_version_info__ !== 'undefined' && __vd_version_info__.noCss === true;
if (!noCss) {
    __wxAppCode__['component/product-item/index.wxss'] = setCssToHead([".", [1], "product-img{border-radius:", [0, 12], ";-webkit-flex-shrink:0;flex-shrink:0;height:", [0, 120], ";margin-right:", [0, 20], ";width:", [0, 120], "}\n.", [1], "product-content{-webkit-box-flex:1;-webkit-flex:1;flex:1;max-width:calc(100% - ", [0, 136], ")}\n",], undefined, {path: "./component/product-item/index.wxss"});
}
$gwx_XC_11 = function (_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
    return function (path, global) {
        if (typeof global === 'undefined') {
            if (typeof __GWX_GLOBAL__ === 'undefined') global = {}; else global = __GWX_GLOBAL__;
        }
        if (typeof __WXML_GLOBAL__ === 'undefined') {
            __WXML_GLOBAL__ = {};
        }
        __WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
        var e_ = {}
        if (typeof (global.entrys) === 'undefined') global.entrys = {};
        e_ = global.entrys;
        var d_ = {}
        if (typeof (global.defines) === 'undefined') global.defines = {};
        d_ = global.defines;
        var f_ = {}
        if (typeof (global.modules) === 'undefined') global.modules = {};
        f_ = global.modules || {};
        var p_ = {}
        __WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
        __WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
        __WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
        var z = __WXML_GLOBAL__.ops_set.$gwx_XC_11 || [];

        function gz$gwx_XC_11_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx_XC_11_1) return __WXML_GLOBAL__.ops_cached.$gwx_XC_11_1
            __WXML_GLOBAL__.ops_cached.$gwx_XC_11_1 = [];
            (function (z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }

                Z([3, 'shopTap'])
                Z([3, 'shop-item'])
                Z([[7], [3, 'index']])
                Z([[6], [[7], [3, 'data']], [3, 'shopId']])
                Z([3, 'shop-item-detail'])
                Z([a, [3, 'f14 fb '], [[2, '?:'], [[2, '&&'], [[2, '=='], [[6], [[7], [3, 'data']], [3, 'operationStatus']], [1, 1]], [[2, '!'], [[6], [[7], [3, 'data']], [3, 'isOutRange']]]], [1, ''], [1, 'c-aaa']]])
                Z([a, [[6], [[7], [3, 'data']], [3, 'shopName']]])
                Z([a, [3, 'mt5 '], [[2, '?:'], [[2, '&&'], [[2, '=='], [[6], [[7], [3, 'data']], [3, 'operationStatus']], [1, 1]], [[2, '!'], [[6], [[7], [3, 'data']], [3, 'isOutRange']]]], [1, 'c-777'], [1, 'c-aaa']]])
                Z([a, [[6], [[7], [3, 'data']], [3, 'shopAddress']]])
                Z([a, [3, 'mt5 mb5 '], z[7][2]])
                Z([a, [3, '营业时间: '], [[2, '||'], [[6], [[7], [3, 'data']], [3, 'operationTime']], [1, '今日休息']]])
                Z([[2, '=='], [[6], [[7], [3, 'data']], [3, 'operationStatus']], [1, 1]])
                Z([3, 'shop-status-tag normal'])
                Z([3, '营业中'])
                Z([[6], [[7], [3, 'data']], [3, 'takeoutStatus']])
                Z([3, 'shop-status-tag pink ml5'])
                Z([3, '可外送'])
                Z([[2, '=='], [[6], [[7], [3, 'data']], [3, 'operationStatus']], [1, 2]])
                Z([3, 'shop-status-tag close'])
                Z([3, '门店休息'])
                Z([3, 'shop-status-tag busy'])
                Z([3, '繁忙置休'])
                Z([3, 'shop-item-contact flex-center f11'])
                Z([[2, '=='], [[7], [3, 'pageType']], [1, 1]])
                Z([[6], [[7], [3, 'data']], [3, 'isOutRange']])
                Z([3, 'c-aaa mb4'])
                Z([3, '超出配送范围'])
                Z([3, 'mb4'])
                Z([3, '去下单'])
                Z([3, 'c-777'])
                Z([3, '距离'])
                Z([3, 'c-blue'])
                Z([a, [[2, '||'], [[6], [[7], [3, 'data']], [3, 'distance']], [1, '未知']]])
                Z([3, 'mt14'])
                Z([3, 'clickNavigate'])
                Z([3, 'shop-item-contact_icon'])
                Z(z[2])
                Z(z[3])
                Z([3, '/assets/icon_navigate.png'])
                Z([3, 'clickContactShop'])
                Z(z[35])
                Z([3, '/assets/icon_phone.png'])
                Z([3, 'margin-left:12px;'])
            })(__WXML_GLOBAL__.ops_cached.$gwx_XC_11_1);
            return __WXML_GLOBAL__.ops_cached.$gwx_XC_11_1
        }

        __WXML_GLOBAL__.ops_set.$gwx_XC_11 = z;
        __WXML_GLOBAL__.ops_init.$gwx_XC_11 = true;
        var x = ['./component/shop-item/index.wxml'];
        d_[x[0]] = {}
        var m0 = function (e, s, r, gg) {
            var z = gz$gwx_XC_11_1()
            var oPJ = _mz(z, 'view', ['bind:tap', 0, 'class', 1, 'data-index', 1, 'data-shop-id', 2], [], e, s, gg)
            var fQJ = _n('view')
            _rz(z, fQJ, 'class', 4, e, s, gg)
            var hSJ = _n('view')
            _rz(z, hSJ, 'class', 5, e, s, gg)
            var oTJ = _oz(z, 6, e, s, gg)
            _(hSJ, oTJ)
            _(fQJ, hSJ)
            var cUJ = _n('view')
            _rz(z, cUJ, 'class', 7, e, s, gg)
            var oVJ = _oz(z, 8, e, s, gg)
            _(cUJ, oVJ)
            _(fQJ, cUJ)
            var lWJ = _n('view')
            _rz(z, lWJ, 'class', 9, e, s, gg)
            var aXJ = _oz(z, 10, e, s, gg)
            _(lWJ, aXJ)
            _(fQJ, lWJ)
            var cRJ = _v()
            _(fQJ, cRJ)
            if (_oz(z, 11, e, s, gg)) {
                cRJ.wxVkey = 1
                var eZJ = _n('text')
                _rz(z, eZJ, 'class', 12, e, s, gg)
                var b1J = _oz(z, 13, e, s, gg)
                _(eZJ, b1J)
                _(cRJ, eZJ)
                var tYJ = _v()
                _(cRJ, tYJ)
                if (_oz(z, 14, e, s, gg)) {
                    tYJ.wxVkey = 1
                    var o2J = _n('text')
                    _rz(z, o2J, 'class', 15, e, s, gg)
                    var x3J = _oz(z, 16, e, s, gg)
                    _(o2J, x3J)
                    _(tYJ, o2J)
                }
                tYJ.wxXCkey = 1
            } else if (_oz(z, 17, e, s, gg)) {
                cRJ.wxVkey = 2
                var o4J = _n('text')
                _rz(z, o4J, 'class', 18, e, s, gg)
                var f5J = _oz(z, 19, e, s, gg)
                _(o4J, f5J)
                _(cRJ, o4J)
            } else {
                cRJ.wxVkey = 3
                var c6J = _n('text')
                _rz(z, c6J, 'class', 20, e, s, gg)
                var h7J = _oz(z, 21, e, s, gg)
                _(c6J, h7J)
                _(cRJ, c6J)
            }
            cRJ.wxXCkey = 1
            _(oPJ, fQJ)
            var o8J = _n('view')
            _rz(z, o8J, 'class', 22, e, s, gg)
            var c9J = _v()
            _(o8J, c9J)
            if (_oz(z, 23, e, s, gg)) {
                c9J.wxVkey = 1
                var o0J = _v()
                _(c9J, o0J)
                if (_oz(z, 24, e, s, gg)) {
                    o0J.wxVkey = 1
                    var lAK = _n('view')
                    _rz(z, lAK, 'class', 25, e, s, gg)
                    var aBK = _oz(z, 26, e, s, gg)
                    _(lAK, aBK)
                    _(o0J, lAK)
                } else {
                    o0J.wxVkey = 2
                    var tCK = _n('view')
                    _rz(z, tCK, 'class', 27, e, s, gg)
                    var eDK = _oz(z, 28, e, s, gg)
                    _(tCK, eDK)
                    _(o0J, tCK)
                }
                o0J.wxXCkey = 1
            }
            var bEK = _n('view')
            _rz(z, bEK, 'class', 29, e, s, gg)
            var oFK = _oz(z, 30, e, s, gg)
            _(bEK, oFK)
            var xGK = _n('text')
            _rz(z, xGK, 'class', 31, e, s, gg)
            var oHK = _oz(z, 32, e, s, gg)
            _(xGK, oHK)
            _(bEK, xGK)
            _(o8J, bEK)
            var fIK = _n('view')
            _rz(z, fIK, 'class', 33, e, s, gg)
            var cJK = _mz(z, 'image', ['catch:tap', 34, 'class', 1, 'data-index', 2, 'data-shop-id', 3, 'src', 4], [], e, s, gg)
            _(fIK, cJK)
            var hKK = _mz(z, 'image', ['catch:tap', 39, 'class', 1, 'src', 2, 'style', 3], [], e, s, gg)
            _(fIK, hKK)
            _(o8J, fIK)
            c9J.wxXCkey = 1
            _(oPJ, o8J)
            _(r, oPJ)
            return r
        }
        e_[x[0]] = e_[x[0]] || {f: m0, j: [], i: [], ti: [], ic: []}
        if (path && e_[path]) {
            outerGlobal.__wxml_comp_version__ = 0.02
            return function (env, dd, global) {
                $gwxc = 0;
                var root = {"tag": "wx-page"};
                root.children = []
                ;g = "$gwx_XC_11";
                var main = e_[path].f
                if (typeof global === "undefined") global = {};
                global.f = $gdc(f_[path], "", 1);
                if (typeof (outerGlobal.__webview_engine_version__) != 'undefined' && outerGlobal.__webview_engine_version__ + 1e-6 >= 0.02 + 1e-6 && outerGlobal.__mergeData__) {
                    env = outerGlobal.__mergeData__(env, dd);
                }
                try {
                    main(env, {}, root, global);
                    _tsd(root)
                    if (typeof (outerGlobal.__webview_engine_version__) == 'undefined' || outerGlobal.__webview_engine_version__ + 1e-6 < 0.01 + 1e-6) {
                        return _ev(root);
                    }
                } catch (err) {
                    console.log(err)
                }
                ;g = "";
                return root;
            }
        }
    }
}(__g.a, __g.b, __g.c, __g.d, __g.e, __g.f, __g.g, __g.h, __g.i, __g.j, __g.k, __g.l, __g.m, __g.n, __g.o, __g.p, __g.q, __g.r, __g.s, __g.t, __g.u, __g.v, __g.w, __g.x, __g.y, __g.z, __g.A, __g.B, __g.C, __g.D, __g.E, __g.F, __g.G, __g.H, __g.I, __g.J, __g.K, __g.L, __g.M, __g.N, __g.O, __g.P, __g.Q, __g.R, __g.S, __g.T, __g.U, __g.V, __g.W, __g.X, __g.Y, __g.Z, __g.aa);
if (__vd_version_info__.delayedGwx || false) $gwx_XC_11();
if (__vd_version_info__.delayedGwx) __wxAppCode__['component/shop-item/index.wxml'] = [$gwx_XC_11, './component/shop-item/index.wxml']; else __wxAppCode__['component/shop-item/index.wxml'] = $gwx_XC_11('./component/shop-item/index.wxml');

var noCss = typeof __vd_version_info__ !== 'undefined' && __vd_version_info__.noCss === true;
if (!noCss) {
    __wxAppCode__['component/shop-item/index.wxss'] = setCssToHead([".", [1], "shop-item{background:#fff;border-radius:", [0, 12], ";display:-webkit-box;display:-webkit-flex;display:flex;margin-bottom:", [0, 16], ";padding:", [0, 24], " 0 ", [0, 24], " ", [0, 24], "}\n.", [1], "shop-item-detail{-webkit-box-flex:1;border-right:", [0, 1], " solid #eee;-webkit-flex:1;flex:1;font-size:", [0, 24], ";padding-right:", [0, 20], "}\n.", [1], "shop-status-tag{border-radius:", [0, 4], ";display:inline-block;font-size:", [0, 20], ";margin-top:", [0, 2], ";padding:", [0, 4], " ", [0, 10], "}\n.", [1], "normal{background:#e60012;color:#fff}\n.", [1], "pink{background:#fff2f4;color:#e60012}\n.", [1], "busy,.", [1], "close{background:#eee;color:#aaa}\n.", [1], "shop-item-contact{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;width:", [0, 180], "}\n.", [1], "shop-item-contact_icon{height:24px;width:24px}\n",], undefined, {path: "./component/shop-item/index.wxss"});
}
$gwx_XC_12 = function (_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
    return function (path, global) {
        if (typeof global === 'undefined') {
            if (typeof __GWX_GLOBAL__ === 'undefined') global = {}; else global = __GWX_GLOBAL__;
        }
        if (typeof __WXML_GLOBAL__ === 'undefined') {
            __WXML_GLOBAL__ = {};
        }
        __WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
        var e_ = {}
        if (typeof (global.entrys) === 'undefined') global.entrys = {};
        e_ = global.entrys;
        var d_ = {}
        if (typeof (global.defines) === 'undefined') global.defines = {};
        d_ = global.defines;
        var f_ = {}
        if (typeof (global.modules) === 'undefined') global.modules = {};
        f_ = global.modules || {};
        var p_ = {}
        __WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
        __WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
        __WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
        var z = __WXML_GLOBAL__.ops_set.$gwx_XC_12 || [];

        function gz$gwx_XC_12_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx_XC_12_1) return __WXML_GLOBAL__.ops_cached.$gwx_XC_12_1
            __WXML_GLOBAL__.ops_cached.$gwx_XC_12_1 = [];
            (function (z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }

                Z([3, 'endDrag'])
                Z(z[0])
                Z([3, 'startDrag'])
                Z([3, 'onDrag'])
                Z([3, 'onClick'])
                Z([3, 'swipe-cell custom-class'])
                Z([3, 'swipe-cell'])
                Z([3, 'swipe-cell-wrap'])
                Z([[7], [3, 'wrapperStyle']])
                Z([3, 'onClose'])
                Z([3, 'swipe-cell__right'])
                Z([3, 'right'])
            })(__WXML_GLOBAL__.ops_cached.$gwx_XC_12_1);
            return __WXML_GLOBAL__.ops_cached.$gwx_XC_12_1
        }

        __WXML_GLOBAL__.ops_set.$gwx_XC_12 = z;
        __WXML_GLOBAL__.ops_init.$gwx_XC_12 = true;
        var x = ['./component/swipe-cell/index.wxml'];
        d_[x[0]] = {}
        var m0 = function (e, s, r, gg) {
            var z = gz$gwx_XC_12_1()
            var cMK = _mz(z, 'view', ['bindtouchcancel', 0, 'bindtouchend', 1, 'bindtouchstart', 1, 'capture-bind:touchmove', 2, 'catchtap', 3, 'class', 4, 'id', 5], [], e, s, gg)
            var oNK = _mz(z, 'view', ['class', 7, 'style', 1], [], e, s, gg)
            var lOK = _n('slot')
            _(oNK, lOK)
            var aPK = _mz(z, 'view', ['catch:tap', 9, 'class', 1], [], e, s, gg)
            var tQK = _n('slot')
            _rz(z, tQK, 'name', 11, e, s, gg)
            _(aPK, tQK)
            _(oNK, aPK)
            _(cMK, oNK)
            _(r, cMK)
            return r
        }
        e_[x[0]] = e_[x[0]] || {f: m0, j: [], i: [], ti: [], ic: []}
        if (path && e_[path]) {
            outerGlobal.__wxml_comp_version__ = 0.02
            return function (env, dd, global) {
                $gwxc = 0;
                var root = {"tag": "wx-page"};
                root.children = []
                ;g = "$gwx_XC_12";
                var main = e_[path].f
                if (typeof global === "undefined") global = {};
                global.f = $gdc(f_[path], "", 1);
                if (typeof (outerGlobal.__webview_engine_version__) != 'undefined' && outerGlobal.__webview_engine_version__ + 1e-6 >= 0.02 + 1e-6 && outerGlobal.__mergeData__) {
                    env = outerGlobal.__mergeData__(env, dd);
                }
                try {
                    main(env, {}, root, global);
                    _tsd(root)
                    if (typeof (outerGlobal.__webview_engine_version__) == 'undefined' || outerGlobal.__webview_engine_version__ + 1e-6 < 0.01 + 1e-6) {
                        return _ev(root);
                    }
                } catch (err) {
                    console.log(err)
                }
                ;g = "";
                return root;
            }
        }
    }
}(__g.a, __g.b, __g.c, __g.d, __g.e, __g.f, __g.g, __g.h, __g.i, __g.j, __g.k, __g.l, __g.m, __g.n, __g.o, __g.p, __g.q, __g.r, __g.s, __g.t, __g.u, __g.v, __g.w, __g.x, __g.y, __g.z, __g.A, __g.B, __g.C, __g.D, __g.E, __g.F, __g.G, __g.H, __g.I, __g.J, __g.K, __g.L, __g.M, __g.N, __g.O, __g.P, __g.Q, __g.R, __g.S, __g.T, __g.U, __g.V, __g.W, __g.X, __g.Y, __g.Z, __g.aa);
if (__vd_version_info__.delayedGwx || false) $gwx_XC_12();
if (__vd_version_info__.delayedGwx) __wxAppCode__['component/swipe-cell/index.wxml'] = [$gwx_XC_12, './component/swipe-cell/index.wxml']; else __wxAppCode__['component/swipe-cell/index.wxml'] = $gwx_XC_12('./component/swipe-cell/index.wxml');

var noCss = typeof __vd_version_info__ !== 'undefined' && __vd_version_info__.noCss === true;
if (!noCss) {
    __wxAppCode__['component/swipe-cell/index.wxss'] = setCssToHead([".", [1], "swipe-cell{overflow:hidden;position:relative}\n.", [1], "swipe-cell-wrap{position:relative;-webkit-transition:-webkit-transform .6s cubic-bezier(.18,.89,.32,1);transition:-webkit-transform .6s cubic-bezier(.18,.89,.32,1);transition:transform .6s cubic-bezier(.18,.89,.32,1);transition:transform .6s cubic-bezier(.18,.89,.32,1),-webkit-transform .6s cubic-bezier(.18,.89,.32,1)}\n.", [1], "swipe-cell__right{height:100%;position:absolute;right:0;top:0;-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0)}\n",], undefined, {path: "./component/swipe-cell/index.wxss"});
}
$gwx_XC_13 = function (_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
    return function (path, global) {
        if (typeof global === 'undefined') {
            if (typeof __GWX_GLOBAL__ === 'undefined') global = {}; else global = __GWX_GLOBAL__;
        }
        if (typeof __WXML_GLOBAL__ === 'undefined') {
            __WXML_GLOBAL__ = {};
        }
        __WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
        var e_ = {}
        if (typeof (global.entrys) === 'undefined') global.entrys = {};
        e_ = global.entrys;
        var d_ = {}
        if (typeof (global.defines) === 'undefined') global.defines = {};
        d_ = global.defines;
        var f_ = {}
        if (typeof (global.modules) === 'undefined') global.modules = {};
        f_ = global.modules || {};
        var p_ = {}
        __WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
        __WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
        __WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
        var z = __WXML_GLOBAL__.ops_set.$gwx_XC_13 || [];

        function gz$gwx_XC_13_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx_XC_13_1) return __WXML_GLOBAL__.ops_cached.$gwx_XC_13_1
            __WXML_GLOBAL__.ops_cached.$gwx_XC_13_1 = [];
            (function (z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }

                Z([3, 'tabs f15'])
                Z([a, [3, 'position:'], [[2, '?:'], [[7], [3, 'sticky']], [1, 'sticky'], [1, 'relative']], [3, ';width:'], [[2, '||'], [[7], [3, 'width']], [1, '100%']], [3, ';height:'], [[2, '||'], [[7], [3, 'height']], [1, '88rpx']]])
                Z([[7], [3, 'tabs']])
                Z([3, '*this'])
                Z([3, 'toggleTab'])
                Z([a, [3, 'tabs-item flex-center '], [[2, '?:'], [[2, '=='], [[7], [3, 'currentTab']], [[7], [3, 'index']]], [1, 'fb5'], [1, 'c-777']]])
                Z([[7], [3, 'index']])
                Z([a, [[7], [3, 'item']]])
                Z([3, 'tabs-underline'])
                Z([a, [3, 'width:'], [[7], [3, 'lineWidth']], [3, 'px;left:calc('], [[2, '/'], [[2, '*'], [[2, '+'], [[2, '*'], [[7], [3, 'currentTab']], [1, 2]], [1, 1]], [1, 50]], [[6], [[7], [3, 'tabs']], [3, 'length']]], [3, '% - '], [[2, '/'], [[7], [3, 'lineWidth']], [1, 2]], [3, 'px)']])
            })(__WXML_GLOBAL__.ops_cached.$gwx_XC_13_1);
            return __WXML_GLOBAL__.ops_cached.$gwx_XC_13_1
        }

        __WXML_GLOBAL__.ops_set.$gwx_XC_13 = z;
        __WXML_GLOBAL__.ops_init.$gwx_XC_13 = true;
        var x = ['./component/tab/index.wxml'];
        d_[x[0]] = {}
        var m0 = function (e, s, r, gg) {
            var z = gz$gwx_XC_13_1()
            var bSK = _mz(z, 'view', ['class', 0, 'style', 1], [], e, s, gg)
            var oTK = _v()
            _(bSK, oTK)
            var xUK = function (fWK, oVK, cXK, gg) {
                var oZK = _mz(z, 'view', ['bindtap', 4, 'class', 1, 'data-index', 2], [], fWK, oVK, gg)
                var c1K = _oz(z, 7, fWK, oVK, gg)
                _(oZK, c1K)
                _(cXK, oZK)
                return cXK
            }
            oTK.wxXCkey = 2
            _2z(z, 2, xUK, e, s, gg, oTK, 'item', 'index', '*this')
            var o2K = _mz(z, 'view', ['class', 8, 'style', 1], [], e, s, gg)
            _(bSK, o2K)
            _(r, bSK)
            return r
        }
        e_[x[0]] = e_[x[0]] || {f: m0, j: [], i: [], ti: [], ic: []}
        if (path && e_[path]) {
            outerGlobal.__wxml_comp_version__ = 0.02
            return function (env, dd, global) {
                $gwxc = 0;
                var root = {"tag": "wx-page"};
                root.children = []
                ;g = "$gwx_XC_13";
                var main = e_[path].f
                if (typeof global === "undefined") global = {};
                global.f = $gdc(f_[path], "", 1);
                if (typeof (outerGlobal.__webview_engine_version__) != 'undefined' && outerGlobal.__webview_engine_version__ + 1e-6 >= 0.02 + 1e-6 && outerGlobal.__mergeData__) {
                    env = outerGlobal.__mergeData__(env, dd);
                }
                try {
                    main(env, {}, root, global);
                    _tsd(root)
                    if (typeof (outerGlobal.__webview_engine_version__) == 'undefined' || outerGlobal.__webview_engine_version__ + 1e-6 < 0.01 + 1e-6) {
                        return _ev(root);
                    }
                } catch (err) {
                    console.log(err)
                }
                ;g = "";
                return root;
            }
        }
    }
}(__g.a, __g.b, __g.c, __g.d, __g.e, __g.f, __g.g, __g.h, __g.i, __g.j, __g.k, __g.l, __g.m, __g.n, __g.o, __g.p, __g.q, __g.r, __g.s, __g.t, __g.u, __g.v, __g.w, __g.x, __g.y, __g.z, __g.A, __g.B, __g.C, __g.D, __g.E, __g.F, __g.G, __g.H, __g.I, __g.J, __g.K, __g.L, __g.M, __g.N, __g.O, __g.P, __g.Q, __g.R, __g.S, __g.T, __g.U, __g.V, __g.W, __g.X, __g.Y, __g.Z, __g.aa);
if (__vd_version_info__.delayedGwx || false) $gwx_XC_13();
if (__vd_version_info__.delayedGwx) __wxAppCode__['component/tab/index.wxml'] = [$gwx_XC_13, './component/tab/index.wxml']; else __wxAppCode__['component/tab/index.wxml'] = $gwx_XC_13('./component/tab/index.wxml');

var noCss = typeof __vd_version_info__ !== 'undefined' && __vd_version_info__.noCss === true;
if (!noCss) {
    __wxAppCode__['component/tab/index.wxss'] = setCssToHead([".", [1], "tabs{display:-webkit-box;display:-webkit-flex;display:flex;top:0}\n.", [1], "tabs-item{-webkit-box-flex:1;-webkit-flex:1;flex:1;height:100%}\n.", [1], "tabs-underline{background-color:#e60012;border-radius:", [0, 8], ";bottom:0;height:", [0, 6], ";position:absolute;-webkit-transition:left .3s;transition:left .3s}\n",], undefined, {path: "./component/tab/index.wxss"});
}
$gwx_XC_14 = function (_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
    return function (path, global) {
        if (typeof global === 'undefined') {
            if (typeof __GWX_GLOBAL__ === 'undefined') global = {}; else global = __GWX_GLOBAL__;
        }
        if (typeof __WXML_GLOBAL__ === 'undefined') {
            __WXML_GLOBAL__ = {};
        }
        __WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
        var e_ = {}
        if (typeof (global.entrys) === 'undefined') global.entrys = {};
        e_ = global.entrys;
        var d_ = {}
        if (typeof (global.defines) === 'undefined') global.defines = {};
        d_ = global.defines;
        var f_ = {}
        if (typeof (global.modules) === 'undefined') global.modules = {};
        f_ = global.modules || {};
        var p_ = {}
        __WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
        __WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
        __WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
        var z = __WXML_GLOBAL__.ops_set.$gwx_XC_14 || [];

        function gz$gwx_XC_14_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx_XC_14_1) return __WXML_GLOBAL__.ops_cached.$gwx_XC_14_1
            __WXML_GLOBAL__.ops_cached.$gwx_XC_14_1 = [];
            (function (z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }

                Z([3, 'container f14 c-333'])
                Z([3, 'f16 fb5 pl12 pr12 pb20'])
                Z([3, '配送费规则'])
                Z([3, 'pl12 pr12 f13'])
                Z([a, [3, '根据实际配送距离计算'], [[2, '||'], [[6], [[7], [3, 'data']], [3, 'firstDeliveryDistance']], [1, 0]], [3, '公里内'], [[2, '||'], [[2, '/'], [[6], [[7], [3, 'data']], [3, 'firstDeliveryFee']], [1, 100]], [1, 0]], [3, '元；超出范围每公里增加'], [[2, '||'], [[2, '/'], [[6], [[7], [3, 'data']], [3, 'extraDeliveryFee']], [1, 100]], [1, 0]], [3, '元 \n（不足一公里按一公里计费）']])
                Z([[6], [[6], [[7], [3, 'data']], [3, 'deliveryFeeInfo']], [3, 'hasNightDeFee']])
                Z([3, 'f13 pt12 pl12 pr12 pb12'])
                Z([3, '夜间配送加价'])
                Z([3, 'f13'])
                Z([3, 'nightDeFee'])
                Z([[6], [[6], [[7], [3, 'data']], [3, 'deliveryFeeInfo']], [3, 'nightDeFeeRules']])
                Z([3, 'index'])
                Z([a, [3, ' '], [[6], [[7], [3, 'nightDeFee']], [3, 'startTime']], [3, '点~'], [[6], [[7], [3, 'nightDeFee']], [3, 'endTime']], [3, '点，每单加价'], [[2, '/'], [[6], [[7], [3, 'nightDeFee']], [3, 'minDeliveryAmount']], [1, 100]], [3, '元 ']])
                Z([[6], [[7], [3, 'data']], [3, 'nightDeFee']])
                Z(z[6])
                Z([a, z[7], [[2, '/'], [[6], [[7], [3, 'data']], [3, 'nightDeFee']], [1, 100]], [3, '元']])
                Z([3, 'close'])
                Z([3, 'flex-center c-theme mt20 mx-hairline--top'])
                Z([3, 'height: 90rpx;'])
                Z([3, '确认'])
            })(__WXML_GLOBAL__.ops_cached.$gwx_XC_14_1);
            return __WXML_GLOBAL__.ops_cached.$gwx_XC_14_1
        }

        __WXML_GLOBAL__.ops_set.$gwx_XC_14 = z;
        __WXML_GLOBAL__.ops_init.$gwx_XC_14 = true;
        var x = ['./component/tem-defee-info/index.wxml'];
        d_[x[0]] = {}
        var m0 = function (e, s, r, gg) {
            var z = gz$gwx_XC_14_1()
            var a4K = _n('view')
            _rz(z, a4K, 'class', 0, e, s, gg)
            var b7K = _n('view')
            _rz(z, b7K, 'class', 1, e, s, gg)
            var o8K = _oz(z, 2, e, s, gg)
            _(b7K, o8K)
            _(a4K, b7K)
            var x9K = _n('view')
            _rz(z, x9K, 'class', 3, e, s, gg)
            var o0K = _n('text')
            var fAL = _oz(z, 4, e, s, gg)
            _(o0K, fAL)
            _(x9K, o0K)
            _(a4K, x9K)
            var t5K = _v()
            _(a4K, t5K)
            if (_oz(z, 5, e, s, gg)) {
                t5K.wxVkey = 1
                var cBL = _n('view')
                _rz(z, cBL, 'class', 6, e, s, gg)
                var hCL = _oz(z, 7, e, s, gg)
                _(cBL, hCL)
                _(t5K, cBL)
                var oDL = _n('view')
                _rz(z, oDL, 'class', 8, e, s, gg)
                var cEL = _v()
                _(oDL, cEL)
                var oFL = function (aHL, lGL, tIL, gg) {
                    var bKL = _n('view')
                    var oLL = _oz(z, 12, aHL, lGL, gg)
                    _(bKL, oLL)
                    _(tIL, bKL)
                    return tIL
                }
                cEL.wxXCkey = 2
                _2z(z, 10, oFL, e, s, gg, cEL, 'nightDeFee', 'index', 'index')
                _(t5K, oDL)
            }
            var e6K = _v()
            _(a4K, e6K)
            if (_oz(z, 13, e, s, gg)) {
                e6K.wxVkey = 1
                var xML = _n('view')
                _rz(z, xML, 'class', 14, e, s, gg)
                var oNL = _oz(z, 15, e, s, gg)
                _(xML, oNL)
                _(e6K, xML)
            }
            var fOL = _mz(z, 'view', ['bindtap', 16, 'class', 1, 'style', 2], [], e, s, gg)
            var cPL = _oz(z, 19, e, s, gg)
            _(fOL, cPL)
            _(a4K, fOL)
            t5K.wxXCkey = 1
            e6K.wxXCkey = 1
            _(r, a4K)
            return r
        }
        e_[x[0]] = e_[x[0]] || {f: m0, j: [], i: [], ti: [], ic: []}
        if (path && e_[path]) {
            outerGlobal.__wxml_comp_version__ = 0.02
            return function (env, dd, global) {
                $gwxc = 0;
                var root = {"tag": "wx-page"};
                root.children = []
                ;g = "$gwx_XC_14";
                var main = e_[path].f
                if (typeof global === "undefined") global = {};
                global.f = $gdc(f_[path], "", 1);
                if (typeof (outerGlobal.__webview_engine_version__) != 'undefined' && outerGlobal.__webview_engine_version__ + 1e-6 >= 0.02 + 1e-6 && outerGlobal.__mergeData__) {
                    env = outerGlobal.__mergeData__(env, dd);
                }
                try {
                    main(env, {}, root, global);
                    _tsd(root)
                    if (typeof (outerGlobal.__webview_engine_version__) == 'undefined' || outerGlobal.__webview_engine_version__ + 1e-6 < 0.01 + 1e-6) {
                        return _ev(root);
                    }
                } catch (err) {
                    console.log(err)
                }
                ;g = "";
                return root;
            }
        }
    }
}(__g.a, __g.b, __g.c, __g.d, __g.e, __g.f, __g.g, __g.h, __g.i, __g.j, __g.k, __g.l, __g.m, __g.n, __g.o, __g.p, __g.q, __g.r, __g.s, __g.t, __g.u, __g.v, __g.w, __g.x, __g.y, __g.z, __g.A, __g.B, __g.C, __g.D, __g.E, __g.F, __g.G, __g.H, __g.I, __g.J, __g.K, __g.L, __g.M, __g.N, __g.O, __g.P, __g.Q, __g.R, __g.S, __g.T, __g.U, __g.V, __g.W, __g.X, __g.Y, __g.Z, __g.aa);
if (__vd_version_info__.delayedGwx || false) $gwx_XC_14();
if (__vd_version_info__.delayedGwx) __wxAppCode__['component/tem-defee-info/index.wxml'] = [$gwx_XC_14, './component/tem-defee-info/index.wxml']; else __wxAppCode__['component/tem-defee-info/index.wxml'] = $gwx_XC_14('./component/tem-defee-info/index.wxml');

var noCss = typeof __vd_version_info__ !== 'undefined' && __vd_version_info__.noCss === true;
if (!noCss) {
    __wxAppCode__['component/tem-defee-info/index.wxss'] = setCssToHead([".", [1], "container{box-sizing:border-box;padding:", [0, 40], " 0 0;text-align:center;width:", [0, 560], "}\n",], undefined, {path: "./component/tem-defee-info/index.wxss"});
}
$gwx_XC_15 = function (_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
    return function (path, global) {
        if (typeof global === 'undefined') {
            if (typeof __GWX_GLOBAL__ === 'undefined') global = {}; else global = __GWX_GLOBAL__;
        }
        if (typeof __WXML_GLOBAL__ === 'undefined') {
            __WXML_GLOBAL__ = {};
        }
        __WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
        var e_ = {}
        if (typeof (global.entrys) === 'undefined') global.entrys = {};
        e_ = global.entrys;
        var d_ = {}
        if (typeof (global.defines) === 'undefined') global.defines = {};
        d_ = global.defines;
        var f_ = {}
        if (typeof (global.modules) === 'undefined') global.modules = {};
        f_ = global.modules || {};
        var p_ = {}
        __WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
        __WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
        __WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
        var z = __WXML_GLOBAL__.ops_set.$gwx_XC_15 || [];

        function gz$gwx_XC_15_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx_XC_15_1) return __WXML_GLOBAL__.ops_cached.$gwx_XC_15_1
            __WXML_GLOBAL__.ops_cached.$gwx_XC_15_1 = [];
            (function (z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }

                Z([[2, '||'], [[2, '||'], [[7], [3, 'showError']], [[7], [3, 'showOffline']]], [[7], [3, 'showClosed']]])
                Z([3, 'popup_container'])
                Z([[7], [3, 'showError']])
                Z([3, 'widthFix'])
                Z([3, '/assets/img_shop_error.png'])
                Z([3, 'width:279px;'])
                Z([3, 'popup-text'])
                Z([3, '当前门店无法下单'])
                Z([[7], [3, 'showOffline']])
                Z(z[3])
                Z([3, '/assets/img_shop_offline.png'])
                Z(z[5])
                Z(z[6])
                Z([3, '未到营业时间'])
                Z([3, 'popup_time'])
                Z([a, [3, '本店营业时间：'], [[2, '||'], [[7], [3, 'operationTime']], [1, '今日休息']]])
                Z([[7], [3, 'showClosed']])
                Z(z[3])
                Z([3, '/assets/img_shop_closed.png'])
                Z(z[5])
                Z(z[6])
                Z([3, '门店繁忙, 暂停接单'])
                Z([3, 'toOtherShop'])
                Z([3, 'close_button'])
                Z([3, '选择其他门店'])
            })(__WXML_GLOBAL__.ops_cached.$gwx_XC_15_1);
            return __WXML_GLOBAL__.ops_cached.$gwx_XC_15_1
        }

        __WXML_GLOBAL__.ops_set.$gwx_XC_15 = z;
        __WXML_GLOBAL__.ops_init.$gwx_XC_15 = true;
        var x = ['./component/tem-store-error/index.wxml'];
        d_[x[0]] = {}
        var m0 = function (e, s, r, gg) {
            var z = gz$gwx_XC_15_1()
            var oRL = _v()
            _(r, oRL)
            if (_oz(z, 0, e, s, gg)) {
                oRL.wxVkey = 1
                var cSL = _n('view')
                _rz(z, cSL, 'class', 1, e, s, gg)
                var oTL = _v()
                _(cSL, oTL)
                if (_oz(z, 2, e, s, gg)) {
                    oTL.wxVkey = 1
                    var tWL = _mz(z, 'image', ['mode', 3, 'src', 1, 'style', 2], [], e, s, gg)
                    _(oTL, tWL)
                    var eXL = _n('view')
                    _rz(z, eXL, 'class', 6, e, s, gg)
                    var bYL = _oz(z, 7, e, s, gg)
                    _(eXL, bYL)
                    _(oTL, eXL)
                }
                var lUL = _v()
                _(cSL, lUL)
                if (_oz(z, 8, e, s, gg)) {
                    lUL.wxVkey = 1
                    var oZL = _mz(z, 'image', ['mode', 9, 'src', 1, 'style', 2], [], e, s, gg)
                    _(lUL, oZL)
                    var x1L = _n('view')
                    _rz(z, x1L, 'class', 12, e, s, gg)
                    var o2L = _oz(z, 13, e, s, gg)
                    _(x1L, o2L)
                    _(lUL, x1L)
                    var f3L = _n('view')
                    _rz(z, f3L, 'class', 14, e, s, gg)
                    var c4L = _oz(z, 15, e, s, gg)
                    _(f3L, c4L)
                    _(lUL, f3L)
                }
                var aVL = _v()
                _(cSL, aVL)
                if (_oz(z, 16, e, s, gg)) {
                    aVL.wxVkey = 1
                    var h5L = _mz(z, 'image', ['mode', 17, 'src', 1, 'style', 2], [], e, s, gg)
                    _(aVL, h5L)
                    var o6L = _n('view')
                    _rz(z, o6L, 'class', 20, e, s, gg)
                    var c7L = _oz(z, 21, e, s, gg)
                    _(o6L, c7L)
                    _(aVL, o6L)
                }
                var o8L = _mz(z, 'button', ['bindtap', 22, 'class', 1], [], e, s, gg)
                var l9L = _oz(z, 24, e, s, gg)
                _(o8L, l9L)
                _(cSL, o8L)
                oTL.wxXCkey = 1
                lUL.wxXCkey = 1
                aVL.wxXCkey = 1
                _(oRL, cSL)
            }
            oRL.wxXCkey = 1
            return r
        }
        e_[x[0]] = e_[x[0]] || {f: m0, j: [], i: [], ti: [], ic: []}
        if (path && e_[path]) {
            outerGlobal.__wxml_comp_version__ = 0.02
            return function (env, dd, global) {
                $gwxc = 0;
                var root = {"tag": "wx-page"};
                root.children = []
                ;g = "$gwx_XC_15";
                var main = e_[path].f
                if (typeof global === "undefined") global = {};
                global.f = $gdc(f_[path], "", 1);
                if (typeof (outerGlobal.__webview_engine_version__) != 'undefined' && outerGlobal.__webview_engine_version__ + 1e-6 >= 0.02 + 1e-6 && outerGlobal.__mergeData__) {
                    env = outerGlobal.__mergeData__(env, dd);
                }
                try {
                    main(env, {}, root, global);
                    _tsd(root)
                    if (typeof (outerGlobal.__webview_engine_version__) == 'undefined' || outerGlobal.__webview_engine_version__ + 1e-6 < 0.01 + 1e-6) {
                        return _ev(root);
                    }
                } catch (err) {
                    console.log(err)
                }
                ;g = "";
                return root;
            }
        }
    }
}(__g.a, __g.b, __g.c, __g.d, __g.e, __g.f, __g.g, __g.h, __g.i, __g.j, __g.k, __g.l, __g.m, __g.n, __g.o, __g.p, __g.q, __g.r, __g.s, __g.t, __g.u, __g.v, __g.w, __g.x, __g.y, __g.z, __g.A, __g.B, __g.C, __g.D, __g.E, __g.F, __g.G, __g.H, __g.I, __g.J, __g.K, __g.L, __g.M, __g.N, __g.O, __g.P, __g.Q, __g.R, __g.S, __g.T, __g.U, __g.V, __g.W, __g.X, __g.Y, __g.Z, __g.aa);
if (__vd_version_info__.delayedGwx || false) $gwx_XC_15();
if (__vd_version_info__.delayedGwx) __wxAppCode__['component/tem-store-error/index.wxml'] = [$gwx_XC_15, './component/tem-store-error/index.wxml']; else __wxAppCode__['component/tem-store-error/index.wxml'] = $gwx_XC_15('./component/tem-store-error/index.wxml');

var noCss = typeof __vd_version_info__ !== 'undefined' && __vd_version_info__.noCss === true;
if (!noCss) {
    __wxAppCode__['component/tem-store-error/index.wxss'] = setCssToHead([".", [1], "popup_container{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-box-align:center;-webkit-align-items:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-direction:column;flex-direction:column;padding:", [0, 40], " 0;width:", [0, 590], "}\n.", [1], "popup-text{font-size:", [0, 32], "}\n.", [1], "popup_time{color:#333;font-size:", [0, 24], ";margin-top:", [0, 24], ";text-align:center}\n.", [1], "close_button{margin:", [0, 40], " auto ", [0, 20], ";width:", [0, 376], "}\n",], undefined, {path: "./component/tem-store-error/index.wxss"});
}
$gwx_XC_16 = function (_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
    return function (path, global) {
        if (typeof global === 'undefined') {
            if (typeof __GWX_GLOBAL__ === 'undefined') global = {}; else global = __GWX_GLOBAL__;
        }
        if (typeof __WXML_GLOBAL__ === 'undefined') {
            __WXML_GLOBAL__ = {};
        }
        __WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
        var e_ = {}
        if (typeof (global.entrys) === 'undefined') global.entrys = {};
        e_ = global.entrys;
        var d_ = {}
        if (typeof (global.defines) === 'undefined') global.defines = {};
        d_ = global.defines;
        var f_ = {}
        if (typeof (global.modules) === 'undefined') global.modules = {};
        f_ = global.modules || {};
        var p_ = {}
        __WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
        __WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
        __WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
        var z = __WXML_GLOBAL__.ops_set.$gwx_XC_16 || [];

        function gz$gwx_XC_16_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx_XC_16_1) return __WXML_GLOBAL__.ops_cached.$gwx_XC_16_1
            __WXML_GLOBAL__.ops_cached.$gwx_XC_16_1 = [];
            (function (z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }

                Z([3, 'vtabs-content__item'])
            })(__WXML_GLOBAL__.ops_cached.$gwx_XC_16_1);
            return __WXML_GLOBAL__.ops_cached.$gwx_XC_16_1
        }

        __WXML_GLOBAL__.ops_set.$gwx_XC_16 = z;
        __WXML_GLOBAL__.ops_init.$gwx_XC_16 = true;
        var x = ['./component/vtabs-content/index.wxml'];
        d_[x[0]] = {}
        var m0 = function (e, s, r, gg) {
            var z = gz$gwx_XC_16_1()
            var tAM = _n('view')
            _rz(z, tAM, 'class', 0, e, s, gg)
            var eBM = _n('slot')
            _(tAM, eBM)
            _(r, tAM)
            return r
        }
        e_[x[0]] = e_[x[0]] || {f: m0, j: [], i: [], ti: [], ic: []}
        if (path && e_[path]) {
            outerGlobal.__wxml_comp_version__ = 0.02
            return function (env, dd, global) {
                $gwxc = 0;
                var root = {"tag": "wx-page"};
                root.children = []
                ;g = "$gwx_XC_16";
                var main = e_[path].f
                if (typeof global === "undefined") global = {};
                global.f = $gdc(f_[path], "", 1);
                if (typeof (outerGlobal.__webview_engine_version__) != 'undefined' && outerGlobal.__webview_engine_version__ + 1e-6 >= 0.02 + 1e-6 && outerGlobal.__mergeData__) {
                    env = outerGlobal.__mergeData__(env, dd);
                }
                try {
                    main(env, {}, root, global);
                    _tsd(root)
                    if (typeof (outerGlobal.__webview_engine_version__) == 'undefined' || outerGlobal.__webview_engine_version__ + 1e-6 < 0.01 + 1e-6) {
                        return _ev(root);
                    }
                } catch (err) {
                    console.log(err)
                }
                ;g = "";
                return root;
            }
        }
    }
}(__g.a, __g.b, __g.c, __g.d, __g.e, __g.f, __g.g, __g.h, __g.i, __g.j, __g.k, __g.l, __g.m, __g.n, __g.o, __g.p, __g.q, __g.r, __g.s, __g.t, __g.u, __g.v, __g.w, __g.x, __g.y, __g.z, __g.A, __g.B, __g.C, __g.D, __g.E, __g.F, __g.G, __g.H, __g.I, __g.J, __g.K, __g.L, __g.M, __g.N, __g.O, __g.P, __g.Q, __g.R, __g.S, __g.T, __g.U, __g.V, __g.W, __g.X, __g.Y, __g.Z, __g.aa);
if (__vd_version_info__.delayedGwx || false) $gwx_XC_16();
if (__vd_version_info__.delayedGwx) __wxAppCode__['component/vtabs-content/index.wxml'] = [$gwx_XC_16, './component/vtabs-content/index.wxml']; else __wxAppCode__['component/vtabs-content/index.wxml'] = $gwx_XC_16('./component/vtabs-content/index.wxml');

var noCss = typeof __vd_version_info__ !== 'undefined' && __vd_version_info__.noCss === true;
if (!noCss) {
    __wxAppCode__['component/vtabs-content/index.wxss'] = setCssToHead([".", [1], "vtabs-content__item{padding:", [0, 16], " ", [0, 32], " 0 ", [0, 24], "}\n",], undefined, {path: "./component/vtabs-content/index.wxss"});
}
$gwx_XC_17 = function (_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
    return function (path, global) {
        if (typeof global === 'undefined') {
            if (typeof __GWX_GLOBAL__ === 'undefined') global = {}; else global = __GWX_GLOBAL__;
        }
        if (typeof __WXML_GLOBAL__ === 'undefined') {
            __WXML_GLOBAL__ = {};
        }
        __WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
        var e_ = {}
        if (typeof (global.entrys) === 'undefined') global.entrys = {};
        e_ = global.entrys;
        var d_ = {}
        if (typeof (global.defines) === 'undefined') global.defines = {};
        d_ = global.defines;
        var f_ = {}
        if (typeof (global.modules) === 'undefined') global.modules = {};
        f_ = global.modules || {};
        var p_ = {}
        __WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
        __WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
        __WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
        var z = __WXML_GLOBAL__.ops_set.$gwx_XC_17 || [];

        function gz$gwx_XC_17_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx_XC_17_1) return __WXML_GLOBAL__.ops_cached.$gwx_XC_17_1
            __WXML_GLOBAL__.ops_cached.$gwx_XC_17_1 = [];
            (function (z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }

                Z([3, 'vtabs mt12 safe-bottom'])
                Z([a, [3, 'height:'], [[7], [3, 'height']]])
                Z([3, 'vtabs-bar__wrp'])
                Z([3, 'vtabs-bar__scrollview'])
                Z([a, [3, 'vtabs-item__'], [[7], [3, 'currentView']]])
                Z([[7], [3, 'vtabs']])
                Z([3, 'productCategoryId'])
                Z([3, 'handleTabClick'])
                Z([a, [3, 'vtabs-bar__item flex-center c-777 '], [[2, '?:'], [[2, '==='], [[7], [3, 'index']], [[7], [3, 'activeTab']]], [1, 'active'], [[2, '?:'], [[2, '==='], [[7], [3, 'index']], [[2, '-'], [[7], [3, 'activeTab']], [1, 1]]], [1, 'fillet-up'], [[2, '?:'], [[2, '==='], [[7], [3, 'index']], [[2, '+'], [[7], [3, 'activeTab']], [1, 1]]], [1, 'fillet-down'], [1, '']]]]])
                Z([[7], [3, 'index']])
                Z([a, z[4][1], z[9]])
                Z([[6], [[7], [3, 'item']], [3, 'categoryIcon']])
                Z([3, 'category-icon'])
                Z(z[11])
                Z([a, [[6], [[7], [3, 'item']], [3, 'categoryNameSale']]])
                Z([3, 'number-icon'])
                Z([a, [3, 'visibility:'], [[2, '?:'], [[6], [[7], [3, 'item']], [3, 'addNum']], [1, 'visible'], [1, 'hidden']]])
                Z([a, [[6], [[7], [3, 'item']], [3, 'addNum']]])
                Z([3, 'height:120rpx'])
                Z([3, 'vtabs-content__wrp'])
                Z([3, 'coupon'])
                Z([3, 'handleContentScroll'])
                Z([3, 'vtabs-content__scrollview'])
                Z([[7], [3, 'contentScrollTop']])
                Z(z[18])
            })(__WXML_GLOBAL__.ops_cached.$gwx_XC_17_1);
            return __WXML_GLOBAL__.ops_cached.$gwx_XC_17_1
        }

        __WXML_GLOBAL__.ops_set.$gwx_XC_17 = z;
        __WXML_GLOBAL__.ops_init.$gwx_XC_17 = true;
        var x = ['./component/vtabs/index.wxml'];
        d_[x[0]] = {}
        var m0 = function (e, s, r, gg) {
            var z = gz$gwx_XC_17_1()
            var oDM = _mz(z, 'view', ['class', 0, 'style', 1], [], e, s, gg)
            var xEM = _n('view')
            _rz(z, xEM, 'class', 2, e, s, gg)
            var oFM = _mz(z, 'scroll-view', ['scrollY', -1, 'class', 3, 'scrollIntoView', 1], [], e, s, gg)
            var fGM = _v()
            _(oFM, fGM)
            var cHM = function (oJM, hIM, cKM, gg) {
                var lMM = _mz(z, 'view', ['bindtap', 7, 'class', 1, 'data-index', 2, 'id', 3], [], oJM, hIM, gg)
                var aNM = _v()
                _(lMM, aNM)
                if (_oz(z, 11, oJM, hIM, gg)) {
                    aNM.wxVkey = 1
                    var tOM = _mz(z, 'image', ['class', 12, 'src', 1], [], oJM, hIM, gg)
                    _(aNM, tOM)
                }
                var ePM = _n('text')
                var bQM = _oz(z, 14, oJM, hIM, gg)
                _(ePM, bQM)
                _(lMM, ePM)
                var oRM = _mz(z, 'text', ['class', 15, 'style', 1], [], oJM, hIM, gg)
                var xSM = _oz(z, 17, oJM, hIM, gg)
                _(oRM, xSM)
                _(lMM, oRM)
                aNM.wxXCkey = 1
                _(cKM, lMM)
                return cKM
            }
            fGM.wxXCkey = 2
            _2z(z, 5, cHM, e, s, gg, fGM, 'item', 'index', 'productCategoryId')
            var oTM = _n('view')
            _rz(z, oTM, 'style', 18, e, s, gg)
            _(oFM, oTM)
            _(xEM, oFM)
            _(oDM, xEM)
            var fUM = _n('view')
            _rz(z, fUM, 'class', 19, e, s, gg)
            var cVM = _n('slot')
            _rz(z, cVM, 'name', 20, e, s, gg)
            _(fUM, cVM)
            var hWM = _mz(z, 'scroll-view', ['scrollWithAnimation', -1, 'scrollY', -1, 'bindscroll', 21, 'class', 1, 'scrollTop', 2], [], e, s, gg)
            var oXM = _n('slot')
            _(hWM, oXM)
            var cYM = _n('view')
            _rz(z, cYM, 'style', 24, e, s, gg)
            _(hWM, cYM)
            _(fUM, hWM)
            _(oDM, fUM)
            _(r, oDM)
            return r
        }
        e_[x[0]] = e_[x[0]] || {f: m0, j: [], i: [], ti: [], ic: []}
        if (path && e_[path]) {
            outerGlobal.__wxml_comp_version__ = 0.02
            return function (env, dd, global) {
                $gwxc = 0;
                var root = {"tag": "wx-page"};
                root.children = []
                ;g = "$gwx_XC_17";
                var main = e_[path].f
                if (typeof global === "undefined") global = {};
                global.f = $gdc(f_[path], "", 1);
                if (typeof (outerGlobal.__webview_engine_version__) != 'undefined' && outerGlobal.__webview_engine_version__ + 1e-6 >= 0.02 + 1e-6 && outerGlobal.__mergeData__) {
                    env = outerGlobal.__mergeData__(env, dd);
                }
                try {
                    main(env, {}, root, global);
                    _tsd(root)
                    if (typeof (outerGlobal.__webview_engine_version__) == 'undefined' || outerGlobal.__webview_engine_version__ + 1e-6 < 0.01 + 1e-6) {
                        return _ev(root);
                    }
                } catch (err) {
                    console.log(err)
                }
                ;g = "";
                return root;
            }
        }
    }
}(__g.a, __g.b, __g.c, __g.d, __g.e, __g.f, __g.g, __g.h, __g.i, __g.j, __g.k, __g.l, __g.m, __g.n, __g.o, __g.p, __g.q, __g.r, __g.s, __g.t, __g.u, __g.v, __g.w, __g.x, __g.y, __g.z, __g.A, __g.B, __g.C, __g.D, __g.E, __g.F, __g.G, __g.H, __g.I, __g.J, __g.K, __g.L, __g.M, __g.N, __g.O, __g.P, __g.Q, __g.R, __g.S, __g.T, __g.U, __g.V, __g.W, __g.X, __g.Y, __g.Z, __g.aa);
if (__vd_version_info__.delayedGwx || false) $gwx_XC_17();
if (__vd_version_info__.delayedGwx) __wxAppCode__['component/vtabs/index.wxml'] = [$gwx_XC_17, './component/vtabs/index.wxml']; else __wxAppCode__['component/vtabs/index.wxml'] = $gwx_XC_17('./component/vtabs/index.wxml');

var noCss = typeof __vd_version_info__ !== 'undefined' && __vd_version_info__.noCss === true;
if (!noCss) {
    __wxAppCode__['component/vtabs/index.wxss'] = setCssToHead([".", [1], "vtabs{box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:flex;position:relative;width:100%}\n.", [1], "vtabs-bar__wrp{height:100%;width:", [0, 160], "}\n.", [1], "vtabs-bar__scrollview{border-top-right-radius:", [0, 12], ";height:100%;overflow-x:hidden}\n.", [1], "vtabs-bar__item{-webkit-box-orient:vertical;-webkit-box-direction:normal;background-color:#f8f8f8;box-sizing:border-box;-webkit-flex-direction:column;flex-direction:column;font-size:", [0, 24], ";min-height:", [0, 120], ";overflow:hidden;padding:", [0, 20], " ", [0, 12], ";position:relative;text-align:center;width:100%}\n.", [1], "category-icon{height:", [0, 56], ";margin-bottom:", [0, 16], ";width:", [0, 56], "}\n.", [1], "vtabs-content__wrp{-webkit-box-flex:1;-webkit-flex:1;flex:1;overflow:hidden}\n.", [1], "vtabs-content__scrollview,.", [1], "vtabs-content__wrp{height:100%;position:relative}\n.", [1], "vtabs-bar__item.", [1], "active{background-color:#fff;color:#333;font-weight:500}\n.", [1], "vtabs-bar__item.", [1], "active::before{background-color:#ff192b;content:\x22\x22;height:", [0, 48], ";left:0;position:absolute;top:calc(50% - ", [0, 24], ");width:", [0, 8], "}\n.", [1], "fillet-up{border-bottom-right-radius:", [0, 12], "}\n.", [1], "fillet-down{border-top-right-radius:", [0, 12], "}\n.", [1], "number-icon{font-weight:400;right:", [0, 4], ";top:", [0, 10], "}\n",], undefined, {path: "./component/vtabs/index.wxss"});
}
$gwx_XC_18 = function (_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
    return function (path, global) {
        if (typeof global === 'undefined') {
            if (typeof __GWX_GLOBAL__ === 'undefined') global = {}; else global = __GWX_GLOBAL__;
        }
        if (typeof __WXML_GLOBAL__ === 'undefined') {
            __WXML_GLOBAL__ = {};
        }
        __WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
        var e_ = {}
        if (typeof (global.entrys) === 'undefined') global.entrys = {};
        e_ = global.entrys;
        var d_ = {}
        if (typeof (global.defines) === 'undefined') global.defines = {};
        d_ = global.defines;
        var f_ = {}
        if (typeof (global.modules) === 'undefined') global.modules = {};
        f_ = global.modules || {};
        var p_ = {}
        __WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
        __WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
        __WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
        var z = __WXML_GLOBAL__.ops_set.$gwx_XC_18 || [];

        function gz$gwx_XC_18_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx_XC_18_1) return __WXML_GLOBAL__.ops_cached.$gwx_XC_18_1
            __WXML_GLOBAL__.ops_cached.$gwx_XC_18_1 = [];
            (function (z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }

                Z([3, 'share-btn'])
                Z([3, 'share'])
                Z([3, '/assets/goods_share.png'])
                Z([3, 'width:64rpx;height:64rpx'])
                Z([[6], [[7], [3, 'comboData']], [3, 'productImg']])
                Z([3, 'width:100%;height:376rpx'])
                Z([3, 'scroll-box safe-bottom'])
                Z([3, 'panel f12'])
                Z([3, 'flex-sb'])
                Z([3, 'f16 fb5'])
                Z([a, [[6], [[7], [3, 'comboData']], [3, 'productName']]])
                Z([3, 'f12'])
                Z([3, 'x 1'])
                Z([[6], [[7], [3, 'comboData']], [3, 'productDesc']])
                Z([3, 'c-777 mt8'])
                Z([a, [[6], [[7], [3, 'comboData']], [3, 'productDesc']]])
                Z([3, 'panel'])
                Z([3, 'margin-top:24rpx'])
                Z([[6], [[7], [3, 'comboData']], [3, 'combos']])
                Z([3, 'productId'])
                Z([3, 'goods-item'])
                Z([3, 'goods-img'])
                Z([[6], [[7], [3, 'item']], [3, 'productLogo']])
                Z([3, 'flex:1'])
                Z([3, 'f14 mx-ellipsis'])
                Z([3, 'max-width:510rpx'])
                Z([a, [[6], [[7], [3, 'item']], [3, 'productName']]])
                Z([3, 'attr c-777 f11'])
                Z([a, [[6], [[6], [[7], [3, 'comboComputed']], [3, 'selectNames']], [[7], [3, 'index']]]])
                Z(z[11])
                Z([a, [3, 'x '], [[2, '||'], [[6], [[7], [3, 'item']], [3, 'productNum']], [1, 1]]])
                Z([[6], [[7], [3, 'item']], [3, 'detailType']])
                Z([3, 'showDetail'])
                Z([3, 'select-btn b-theme f12'])
                Z([[7], [3, 'index']])
                Z([3, '选口味'])
                Z([3, 'height:50rpx'])
                Z([3, 'add-to-cart flex-sb mx-hairline--top safe-bottom'])
                Z([3, 'price f12'])
                Z([3, 'margin-right:8rpx'])
                Z([3, '¥'])
                Z([3, 'f18 fb5'])
                Z([a, [[6], [[6], [[7], [3, 'comboComputed']], [3, 'totalPrice']], [1, 0]]])
                Z([[6], [[6], [[7], [3, 'comboComputed']], [3, 'totalPrice']], [1, 1]])
                Z([3, 'fb5'])
                Z([a, [3, '.'], [[6], [[6], [[7], [3, 'comboComputed']], [3, 'totalPrice']], [1, 1]]])
                Z([[2, '&&'], [[6], [[7], [3, 'comboData']], [3, 'originPrice']], [[2, '!=='], [[6], [[7], [3, 'comboData']], [3, 'originPrice']], [[6], [[7], [3, 'comboData']], [3, 'productPrice']]]])
                Z([3, 'disabled-price'])
                Z([a, z[40], [[2, '/'], [[6], [[7], [3, 'comboComputed']], [3, 'originPrice']], [1, 100]]])
                Z([[2, '=='], [[6], [[7], [3, 'comboData']], [3, 'productStatus']], [1, 3]])
                Z([3, 'f11 c-aaa'])
                Z([3, '已售罄'])
                Z([3, 'updateCart'])
                Z([3, 'width:240rpx'])
                Z([3, '加入购物车'])
                Z([[7], [3, 'isShowDetail']])
                Z([3, '99'])
                Z([3, 'confirmSelect'])
                Z([[7], [3, 'currentGoods']])
                Z([1, true])
                Z(z[55])
            })(__WXML_GLOBAL__.ops_cached.$gwx_XC_18_1);
            return __WXML_GLOBAL__.ops_cached.$gwx_XC_18_1
        }

        __WXML_GLOBAL__.ops_set.$gwx_XC_18 = z;
        __WXML_GLOBAL__.ops_init.$gwx_XC_18 = true;
        var x = ['./pages/combo/index.wxml'];
        d_[x[0]] = {}
        var m0 = function (e, s, r, gg) {
            var z = gz$gwx_XC_18_1()
            var l1M = _mz(z, 'button', ['class', 0, 'openType', 1], [], e, s, gg)
            var a2M = _mz(z, 'image', ['src', 2, 'style', 1], [], e, s, gg)
            _(l1M, a2M)
            _(r, l1M)
            var t3M = _mz(z, 'image', ['src', 4, 'style', 1], [], e, s, gg)
            _(r, t3M)
            var e4M = _n('view')
            _rz(z, e4M, 'class', 6, e, s, gg)
            var b5M = _n('view')
            _rz(z, b5M, 'class', 7, e, s, gg)
            var x7M = _n('view')
            _rz(z, x7M, 'class', 8, e, s, gg)
            var o8M = _n('text')
            _rz(z, o8M, 'class', 9, e, s, gg)
            var f9M = _oz(z, 10, e, s, gg)
            _(o8M, f9M)
            _(x7M, o8M)
            var c0M = _n('text')
            _rz(z, c0M, 'class', 11, e, s, gg)
            var hAN = _oz(z, 12, e, s, gg)
            _(c0M, hAN)
            _(x7M, c0M)
            _(b5M, x7M)
            var o6M = _v()
            _(b5M, o6M)
            if (_oz(z, 13, e, s, gg)) {
                o6M.wxVkey = 1
                var oBN = _n('view')
                _rz(z, oBN, 'class', 14, e, s, gg)
                var cCN = _oz(z, 15, e, s, gg)
                _(oBN, cCN)
                _(o6M, oBN)
            }
            o6M.wxXCkey = 1
            _(e4M, b5M)
            var oDN = _mz(z, 'view', ['class', 16, 'style', 1], [], e, s, gg)
            var lEN = _v()
            _(oDN, lEN)
            var aFN = function (eHN, tGN, bIN, gg) {
                var xKN = _n('view')
                _rz(z, xKN, 'class', 20, eHN, tGN, gg)
                var fMN = _mz(z, 'image', ['class', 21, 'src', 1], [], eHN, tGN, gg)
                _(xKN, fMN)
                var cNN = _n('view')
                _rz(z, cNN, 'style', 23, eHN, tGN, gg)
                var hON = _mz(z, 'view', ['class', 24, 'style', 1], [], eHN, tGN, gg)
                var oPN = _oz(z, 26, eHN, tGN, gg)
                _(hON, oPN)
                _(cNN, hON)
                var cQN = _n('view')
                _rz(z, cQN, 'class', 27, eHN, tGN, gg)
                var oRN = _oz(z, 28, eHN, tGN, gg)
                _(cQN, oRN)
                _(cNN, cQN)
                var lSN = _n('text')
                _rz(z, lSN, 'class', 29, eHN, tGN, gg)
                var aTN = _oz(z, 30, eHN, tGN, gg)
                _(lSN, aTN)
                _(cNN, lSN)
                _(xKN, cNN)
                var oLN = _v()
                _(xKN, oLN)
                if (_oz(z, 31, eHN, tGN, gg)) {
                    oLN.wxVkey = 1
                    var tUN = _mz(z, 'view', ['bindtap', 32, 'class', 1, 'data-index', 2], [], eHN, tGN, gg)
                    var eVN = _oz(z, 35, eHN, tGN, gg)
                    _(tUN, eVN)
                    _(oLN, tUN)
                }
                oLN.wxXCkey = 1
                _(bIN, xKN)
                return bIN
            }
            lEN.wxXCkey = 2
            _2z(z, 18, aFN, e, s, gg, lEN, 'item', 'index', 'productId')
            _(e4M, oDN)
            var bWN = _n('view')
            _rz(z, bWN, 'style', 36, e, s, gg)
            _(e4M, bWN)
            _(r, e4M)
            var oXN = _n('view')
            _rz(z, oXN, 'class', 37, e, s, gg)
            var oZN = _n('view')
            _rz(z, oZN, 'class', 38, e, s, gg)
            var h3N = _n('text')
            _rz(z, h3N, 'style', 39, e, s, gg)
            var o4N = _oz(z, 40, e, s, gg)
            _(h3N, o4N)
            _(oZN, h3N)
            var c5N = _n('text')
            _rz(z, c5N, 'class', 41, e, s, gg)
            var o6N = _oz(z, 42, e, s, gg)
            _(c5N, o6N)
            _(oZN, c5N)
            var f1N = _v()
            _(oZN, f1N)
            if (_oz(z, 43, e, s, gg)) {
                f1N.wxVkey = 1
                var l7N = _n('text')
                _rz(z, l7N, 'class', 44, e, s, gg)
                var a8N = _oz(z, 45, e, s, gg)
                _(l7N, a8N)
                _(f1N, l7N)
            }
            var c2N = _v()
            _(oZN, c2N)
            if (_oz(z, 46, e, s, gg)) {
                c2N.wxVkey = 1
                var t9N = _n('text')
                _rz(z, t9N, 'class', 47, e, s, gg)
                var e0N = _oz(z, 48, e, s, gg)
                _(t9N, e0N)
                _(c2N, t9N)
            }
            f1N.wxXCkey = 1
            c2N.wxXCkey = 1
            _(oXN, oZN)
            var xYN = _v()
            _(oXN, xYN)
            if (_oz(z, 49, e, s, gg)) {
                xYN.wxVkey = 1
                var bAO = _n('text')
                _rz(z, bAO, 'class', 50, e, s, gg)
                var oBO = _oz(z, 51, e, s, gg)
                _(bAO, oBO)
                _(xYN, bAO)
            } else {
                xYN.wxVkey = 2
                var xCO = _mz(z, 'button', ['bindtap', 52, 'style', 1], [], e, s, gg)
                var oDO = _oz(z, 54, e, s, gg)
                _(xCO, oDO)
                _(xYN, xCO)
            }
            xYN.wxXCkey = 1
            _(r, oXN)
            var fEO = _mz(z, 'mx-popup', ['show', 55, 'zIndex', 1], [], e, s, gg)
            var cFO = _mz(z, 'goods-detail', ['bind:updateGoods', 57, 'goods', 1, 'isCombo', 2, 'show', 3], [], e, s, gg)
            cFO.rawAttr = {"model:show": "{{isShowDetail}}",};
            _(fEO, cFO)
            _(r, fEO)
            return r
        }
        e_[x[0]] = e_[x[0]] || {f: m0, j: [], i: [], ti: [], ic: []}
        if (path && e_[path]) {
            outerGlobal.__wxml_comp_version__ = 0.02
            return function (env, dd, global) {
                $gwxc = 0;
                var root = {"tag": "wx-page"};
                root.children = []
                ;g = "$gwx_XC_18";
                var main = e_[path].f
                if (typeof global === "undefined") global = {};
                global.f = $gdc(f_[path], "", 1);
                if (typeof (outerGlobal.__webview_engine_version__) != 'undefined' && outerGlobal.__webview_engine_version__ + 1e-6 >= 0.02 + 1e-6 && outerGlobal.__mergeData__) {
                    env = outerGlobal.__mergeData__(env, dd);
                }
                try {
                    main(env, {}, root, global);
                    _tsd(root)
                    if (typeof (outerGlobal.__webview_engine_version__) == 'undefined' || outerGlobal.__webview_engine_version__ + 1e-6 < 0.01 + 1e-6) {
                        return _ev(root);
                    }
                } catch (err) {
                    console.log(err)
                }
                ;g = "";
                return root;
            }
        }
    }
}(__g.a, __g.b, __g.c, __g.d, __g.e, __g.f, __g.g, __g.h, __g.i, __g.j, __g.k, __g.l, __g.m, __g.n, __g.o, __g.p, __g.q, __g.r, __g.s, __g.t, __g.u, __g.v, __g.w, __g.x, __g.y, __g.z, __g.A, __g.B, __g.C, __g.D, __g.E, __g.F, __g.G, __g.H, __g.I, __g.J, __g.K, __g.L, __g.M, __g.N, __g.O, __g.P, __g.Q, __g.R, __g.S, __g.T, __g.U, __g.V, __g.W, __g.X, __g.Y, __g.Z, __g.aa);
if (__vd_version_info__.delayedGwx || false) $gwx_XC_18();
if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/combo/index.wxml'] = [$gwx_XC_18, './pages/combo/index.wxml']; else __wxAppCode__['pages/combo/index.wxml'] = $gwx_XC_18('./pages/combo/index.wxml');

var noCss = typeof __vd_version_info__ !== 'undefined' && __vd_version_info__.noCss === true;
if (!noCss) {
    __wxAppCode__['pages/combo/index.wxss'] = setCssToHead(["body{background:#f8f8f8;overflow:hidden;position:relative}\n.", [1], "share-btn{background:transparent;box-shadow:none;line-height:0;padding:", [0, 20], ";position:absolute;right:0;top:0}\n.", [1], "scroll-box{box-sizing:border-box;height:calc(100vh - ", [0, 500], ");overflow-y:scroll;padding-left:", [0, 24], ";padding-right:", [0, 24], ";padding-top:", [0, 24], "}\n.", [1], "panel{background:#fff;border-radius:", [0, 24], ";padding:", [0, 24], "}\n.", [1], "goods-item{display:-webkit-box;display:-webkit-flex;display:flex;position:relative}\n.", [1], "goods-item + .", [1], "goods-item{margin-top:", [0, 24], "}\n.", [1], "goods-img{border-radius:", [0, 10], ";height:", [0, 120], ";margin-right:", [0, 16], ";width:", [0, 120], "}\n.", [1], "attr{margin:", [0, 10], " 0;min-height:", [0, 26], "}\n.", [1], "select-btn{border-radius:22px;bottom:0;color:#fff;line-height:", [0, 44], ";position:absolute;right:0;text-align:center;width:", [0, 120], "}\n.", [1], "add-to-cart{background:#fff;bottom:0;height:", [0, 120], ";left:0;padding-left:", [0, 32], ";padding-right:", [0, 32], ";position:fixed;right:0;z-index:19}\n.", [1], "icon-btn{padding:", [0, 10], "}\n.", [1], "c-e6{color:#e6e6e6}\n",], "Some selectors are not allowed in component wxss, including tag name selectors, ID selectors, and attribute selectors.(./pages/combo/index.wxss:1:1)", {path: "./pages/combo/index.wxss"});
}
$gwx_XC_19 = function (_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
    return function (path, global) {
        if (typeof global === 'undefined') {
            if (typeof __GWX_GLOBAL__ === 'undefined') global = {}; else global = __GWX_GLOBAL__;
        }
        if (typeof __WXML_GLOBAL__ === 'undefined') {
            __WXML_GLOBAL__ = {};
        }
        __WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
        var e_ = {}
        if (typeof (global.entrys) === 'undefined') global.entrys = {};
        e_ = global.entrys;
        var d_ = {}
        if (typeof (global.defines) === 'undefined') global.defines = {};
        d_ = global.defines;
        var f_ = {}
        if (typeof (global.modules) === 'undefined') global.modules = {};
        f_ = global.modules || {};
        var p_ = {}
        __WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
        __WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
        __WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
        var z = __WXML_GLOBAL__.ops_set.$gwx_XC_19 || [];

        function gz$gwx_XC_19_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx_XC_19_1) return __WXML_GLOBAL__.ops_cached.$gwx_XC_19_1
            __WXML_GLOBAL__.ops_cached.$gwx_XC_19_1 = [];
            (function (z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }

                Z([[2, '?:'], [[7], [3, 'isShowPrivacy']], [1, 'overflow: hidden;'], [1, '']])
                Z([[2, '>'], [[6], [[7], [3, 'swiperList']], [3, 'length']], [1, 0]])
                Z([[7], [3, 'swiperList']])
                Z([3, 'banner'])
                Z([3, 'index-ad'])
                Z([3, 'advertiseTap'])
                Z([3, 'custom-info shadow flex-sb mb12'])
                Z([3, '/pages/mine/index'])
                Z([3, 'avatar'])
                Z([3, '/assets/default_avatar.png'])
                Z([3, 'level-info'])
                Z([[6], [[7], [3, 'userInfo']], [3, 'customerLevel']])
                Z([3, 'fb6'])
                Z([a, [[6], [[6], [[7], [3, 'userInfo']], [3, 'customerLevelVo']], [3, 'levelName']], [3, '会员']])
                Z(z[12])
                Z([3, '尊敬的用户'])
                Z([3, 'f11 c-aaa'])
                Z([a, [[2, '||'], [[6], [[7], [3, 'levelTxt']], [[6], [[7], [3, 'userInfo']], [3, 'customerLevel']]], [1, '会员可享【闲时优惠】等多项权益']]])
                Z(z[11])
                Z(z[5])
                Z([3, '/pages/customer-center/coin/index'])
                Z([3, 'text-align:center'])
                Z([3, 'fb'])
                Z([a, [[6], [[7], [3, 'userInfo']], [3, 'customerPoint']]])
                Z(z[16])
                Z([3, '雪王币'])
                Z(z[5])
                Z([3, '/pages/coupon/mine/index'])
                Z(z[21])
                Z(z[22])
                Z([a, [[7], [3, 'couponNum']]])
                Z(z[16])
                Z([3, '优惠券'])
                Z(z[5])
                Z([3, 'f13'])
                Z([3, '/pages/register/index'])
                Z([3, 'height:64rpx;padding:0 24rpx'])
                Z([3, '授权登录'])
                Z([3, 'flex-sb f18'])
                Z(z[5])
                Z([3, 'to-order shadow'])
                Z([3, '/pages/store/index'])
                Z([3, 'to-order-img'])
                Z([3, '/assets/to_order.png'])
                Z(z[12])
                Z([3, '自取'])
                Z([3, 'f11'])
                Z([3, '下单免排队'])
                Z([3, 'toTakeout'])
                Z(z[40])
                Z(z[42])
                Z([3, '/assets/takeout.png'])
                Z(z[12])
                Z([3, '外卖'])
                Z(z[46])
                Z([3, '甜蜜送到家'])
                Z([[6], [[7], [3, 'magnetList']], [3, 'length']])
                Z([[7], [3, 'magnetList']])
                Z([3, 'magnet'])
                Z([[2, '&&'], [[6], [[7], [3, 'popupAdList']], [3, 'length']], [[2, '!'], [[7], [3, 'isShowPrivacy']]]])
                Z([[7], [3, 'popupAdList']])
                Z([[7], [3, 'popupKey']])
                Z([3, 'popup'])
                Z([[7], [3, 'isShowPrivacy']])
                Z([3, 'privacy-confirm'])
                Z([3, 'f16 fb5'])
                Z(z[21])
                Z([3, '协议与隐私政策'])
                Z(z[34])
                Z([3, 'margin-top:24rpx;'])
                Z([3, '欢迎来到蜜雪冰城！我们根据最新的法律法规、监管政策要求，更新了《用户协议》和《隐私政策》，请您认真阅读。'])
                Z([3, 'updatePrivacyStatus'])
                Z([3, 'f11 flex'])
                Z([3, 'padding:24rpx 0;'])
                Z([a, [3, 'iconfont '], [[2, '?:'], [[7], [3, 'privacyStatus']], [1, 'icon-checked c-theme'], [1, 'icon-unchecked c-aaa']], [3, ' f16 flex-center']])
                Z([3, 'width:50rpx;'])
                Z([3, '同意'])
                Z(z[5])
                Z([3, 'c-theme'])
                Z([3, 'https://mxsa.mxbc.net/policy.html'])
                Z([3, '《蜜雪冰城隐私政策》'])
                Z(z[5])
                Z(z[78])
                Z([3, 'https://mxsa.mxbc.net/agreement.html'])
                Z([3, '《用户协议》'])
                Z([3, 'closeConfirmPopup'])
                Z([3, '确定'])
                Z([[2, '!'], [[7], [3, 'isProMini']]])
            })(__WXML_GLOBAL__.ops_cached.$gwx_XC_19_1);
            return __WXML_GLOBAL__.ops_cached.$gwx_XC_19_1
        }

        __WXML_GLOBAL__.ops_set.$gwx_XC_19 = z;
        __WXML_GLOBAL__.ops_init.$gwx_XC_19 = true;
        var x = ['./pages/index/index.wxml'];
        d_[x[0]] = {}
        var m0 = function (e, s, r, gg) {
            var z = gz$gwx_XC_19_1()
            var aLO = _n('page-meta')
            _rz(z, aLO, 'pageStyle', 0, e, s, gg)
            _(r, aLO)
            var oHO = _v()
            _(r, oHO)
            if (_oz(z, 1, e, s, gg)) {
                oHO.wxVkey = 1
                var tMO = _mz(z, 'mx-ad', ['adData', 2, 'adType', 1, 'customClass', 2], [], e, s, gg)
                _(oHO, tMO)
            }
            var eNO = _mz(z, 'view', ['bindtap', 5, 'class', 1, 'data-url', 2], [], e, s, gg)
            var oPO = _mz(z, 'image', ['class', 8, 'src', 1], [], e, s, gg)
            _(eNO, oPO)
            var xQO = _n('view')
            _rz(z, xQO, 'class', 10, e, s, gg)
            var oRO = _v()
            _(xQO, oRO)
            if (_oz(z, 11, e, s, gg)) {
                oRO.wxVkey = 1
                var fSO = _n('text')
                _rz(z, fSO, 'class', 12, e, s, gg)
                var cTO = _oz(z, 13, e, s, gg)
                _(fSO, cTO)
                _(oRO, fSO)
            } else {
                oRO.wxVkey = 2
                var hUO = _n('text')
                _rz(z, hUO, 'class', 14, e, s, gg)
                var oVO = _oz(z, 15, e, s, gg)
                _(hUO, oVO)
                _(oRO, hUO)
            }
            var cWO = _n('view')
            _rz(z, cWO, 'class', 16, e, s, gg)
            var oXO = _oz(z, 17, e, s, gg)
            _(cWO, oXO)
            _(xQO, cWO)
            oRO.wxXCkey = 1
            _(eNO, xQO)
            var bOO = _v()
            _(eNO, bOO)
            if (_oz(z, 18, e, s, gg)) {
                bOO.wxVkey = 1
                var lYO = _mz(z, 'view', ['catchtap', 19, 'data-url', 1, 'style', 2], [], e, s, gg)
                var aZO = _n('text')
                _rz(z, aZO, 'class', 22, e, s, gg)
                var t1O = _oz(z, 23, e, s, gg)
                _(aZO, t1O)
                _(lYO, aZO)
                var e2O = _n('view')
                _rz(z, e2O, 'class', 24, e, s, gg)
                var b3O = _oz(z, 25, e, s, gg)
                _(e2O, b3O)
                _(lYO, e2O)
                _(bOO, lYO)
                var o4O = _mz(z, 'view', ['catchtap', 26, 'data-url', 1, 'style', 2], [], e, s, gg)
                var x5O = _n('text')
                _rz(z, x5O, 'class', 29, e, s, gg)
                var o6O = _oz(z, 30, e, s, gg)
                _(x5O, o6O)
                _(o4O, x5O)
                var f7O = _n('view')
                _rz(z, f7O, 'class', 31, e, s, gg)
                var c8O = _oz(z, 32, e, s, gg)
                _(f7O, c8O)
                _(o4O, f7O)
                _(bOO, o4O)
            } else {
                bOO.wxVkey = 2
                var h9O = _mz(z, 'button', ['catchtap', 33, 'class', 1, 'data-url', 2, 'style', 3], [], e, s, gg)
                var o0O = _oz(z, 37, e, s, gg)
                _(h9O, o0O)
                _(bOO, h9O)
            }
            bOO.wxXCkey = 1
            _(r, eNO)
            var cAP = _n('view')
            _rz(z, cAP, 'class', 38, e, s, gg)
            var oBP = _mz(z, 'view', ['bindtap', 39, 'class', 1, 'data-url', 2], [], e, s, gg)
            var lCP = _mz(z, 'image', ['class', 42, 'src', 1], [], e, s, gg)
            _(oBP, lCP)
            var aDP = _n('text')
            _rz(z, aDP, 'class', 44, e, s, gg)
            var tEP = _oz(z, 45, e, s, gg)
            _(aDP, tEP)
            _(oBP, aDP)
            var eFP = _n('view')
            _rz(z, eFP, 'class', 46, e, s, gg)
            var bGP = _oz(z, 47, e, s, gg)
            _(eFP, bGP)
            _(oBP, eFP)
            _(cAP, oBP)
            var oHP = _mz(z, 'view', ['bindtap', 48, 'class', 1], [], e, s, gg)
            var xIP = _mz(z, 'image', ['class', 50, 'src', 1], [], e, s, gg)
            _(oHP, xIP)
            var oJP = _n('text')
            _rz(z, oJP, 'class', 52, e, s, gg)
            var fKP = _oz(z, 53, e, s, gg)
            _(oJP, fKP)
            _(oHP, oJP)
            var cLP = _n('view')
            _rz(z, cLP, 'class', 54, e, s, gg)
            var hMP = _oz(z, 55, e, s, gg)
            _(cLP, hMP)
            _(oHP, cLP)
            _(cAP, oHP)
            _(r, cAP)
            var cIO = _v()
            _(r, cIO)
            if (_oz(z, 56, e, s, gg)) {
                cIO.wxVkey = 1
                var oNP = _mz(z, 'mx-ad', ['adData', 57, 'adType', 1], [], e, s, gg)
                _(cIO, oNP)
            }
            var oJO = _v()
            _(r, oJO)
            if (_oz(z, 59, e, s, gg)) {
                oJO.wxVkey = 1
                var cOP = _mz(z, 'mx-ad', ['adData', 60, 'adKey', 1, 'adType', 2], [], e, s, gg)
                _(oJO, cOP)
            }
            var oPP = _n('mx-popup')
            _rz(z, oPP, 'show', 63, e, s, gg)
            var lQP = _n('view')
            _rz(z, lQP, 'class', 64, e, s, gg)
            var aRP = _mz(z, 'view', ['class', 65, 'style', 1], [], e, s, gg)
            var tSP = _oz(z, 67, e, s, gg)
            _(aRP, tSP)
            _(lQP, aRP)
            var eTP = _mz(z, 'view', ['class', 68, 'style', 1], [], e, s, gg)
            var bUP = _oz(z, 70, e, s, gg)
            _(eTP, bUP)
            _(lQP, eTP)
            var oVP = _mz(z, 'view', ['bindtap', 71, 'class', 1, 'style', 2], [], e, s, gg)
            var xWP = _mz(z, 'text', ['class', 74, 'style', 1], [], e, s, gg)
            _(oVP, xWP)
            var oXP = _n('text')
            var fYP = _oz(z, 76, e, s, gg)
            _(oXP, fYP)
            _(oVP, oXP)
            var cZP = _mz(z, 'text', ['catchtap', 77, 'class', 1, 'data-url', 2], [], e, s, gg)
            var h1P = _oz(z, 80, e, s, gg)
            _(cZP, h1P)
            _(oVP, cZP)
            var o2P = _mz(z, 'text', ['catchtap', 81, 'class', 1, 'data-url', 2], [], e, s, gg)
            var c3P = _oz(z, 84, e, s, gg)
            _(o2P, c3P)
            _(oVP, o2P)
            _(lQP, oVP)
            var o4P = _n('button')
            _rz(z, o4P, 'bindtap', 85, e, s, gg)
            var l5P = _oz(z, 86, e, s, gg)
            _(o4P, l5P)
            _(lQP, o4P)
            _(oPP, lQP)
            _(r, oPP)
            var lKO = _v()
            _(r, lKO)
            if (_oz(z, 87, e, s, gg)) {
                lKO.wxVkey = 1
                var a6P = _n('mx-debug')
                _(lKO, a6P)
            }
            oHO.wxXCkey = 1
            oHO.wxXCkey = 3
            cIO.wxXCkey = 1
            cIO.wxXCkey = 3
            oJO.wxXCkey = 1
            oJO.wxXCkey = 3
            lKO.wxXCkey = 1
            lKO.wxXCkey = 3
            return r
        }
        e_[x[0]] = e_[x[0]] || {f: m0, j: [], i: [], ti: [], ic: []}
        if (path && e_[path]) {
            outerGlobal.__wxml_comp_version__ = 0.02
            return function (env, dd, global) {
                $gwxc = 0;
                var root = {"tag": "wx-page"};
                root.children = []
                ;g = "$gwx_XC_19";
                var main = e_[path].f
                if (typeof global === "undefined") global = {};
                global.f = $gdc(f_[path], "", 1);
                if (typeof (outerGlobal.__webview_engine_version__) != 'undefined' && outerGlobal.__webview_engine_version__ + 1e-6 >= 0.02 + 1e-6 && outerGlobal.__mergeData__) {
                    env = outerGlobal.__mergeData__(env, dd);
                }
                try {
                    main(env, {}, root, global);
                    _tsd(root)
                    if (typeof (outerGlobal.__webview_engine_version__) == 'undefined' || outerGlobal.__webview_engine_version__ + 1e-6 < 0.01 + 1e-6) {
                        return _ev(root);
                    }
                } catch (err) {
                    console.log(err)
                }
                ;g = "";
                return root;
            }
        }
    }
}(__g.a, __g.b, __g.c, __g.d, __g.e, __g.f, __g.g, __g.h, __g.i, __g.j, __g.k, __g.l, __g.m, __g.n, __g.o, __g.p, __g.q, __g.r, __g.s, __g.t, __g.u, __g.v, __g.w, __g.x, __g.y, __g.z, __g.A, __g.B, __g.C, __g.D, __g.E, __g.F, __g.G, __g.H, __g.I, __g.J, __g.K, __g.L, __g.M, __g.N, __g.O, __g.P, __g.Q, __g.R, __g.S, __g.T, __g.U, __g.V, __g.W, __g.X, __g.Y, __g.Z, __g.aa);
if (__vd_version_info__.delayedGwx || false) $gwx_XC_19();
if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/index/index.wxml'] = [$gwx_XC_19, './pages/index/index.wxml']; else __wxAppCode__['pages/index/index.wxml'] = $gwx_XC_19('./pages/index/index.wxml');

var noCss = typeof __vd_version_info__ !== 'undefined' && __vd_version_info__.noCss === true;
if (!noCss) {
    __wxAppCode__['pages/index/index.wxss'] = setCssToHead(["body{background-color:#fff;min-height:100vh;padding:", [0, 594], " ", [0, 24], " 0}\n.", [1], "index-ad{height:", [0, 634], ";left:0;position:absolute;top:0;width:100%}\n.", [1], "wx-swiper-dots.", [1], "wx-swiper-dots-horizontal{bottom:", [0, 60], ";left:", [0, 100], ";position:absolute;z-index:99}\n.", [1], "custom-info{background-color:#fff;border-radius:", [0, 24], ";line-height:", [0, 48], ";padding:", [0, 32], " ", [0, 24], ";position:relative}\n.", [1], "avatar{border-radius:", [0, 64], ";height:", [0, 64], ";overflow:hidden;width:", [0, 64], "}\n.", [1], "level-info{left:", [0, -10], ";position:relative;width:", [0, 370], "}\n.", [1], "to-order{border-radius:", [0, 24], ";box-sizing:border-box;color:#fff0e0;height:", [0, 348], ";line-height:", [0, 50], ";padding:", [0, 48], " 0 0 ", [0, 24], ";position:relative;width:", [0, 343], "}\n.", [1], "to-order-img{height:100%;left:0;position:absolute;top:0;width:100%;z-index:-1}\n.", [1], "privacy-confirm{padding:", [0, 40], ";width:", [0, 478], "}\n.", [1], "shadow{box-shadow:0 ", [0, 6], " ", [0, 12], " 0 rgba(6,0,39,.05)}\n",], "Some selectors are not allowed in component wxss, including tag name selectors, ID selectors, and attribute selectors.(./pages/index/index.wxss:1:1)", {path: "./pages/index/index.wxss"});
}
$gwx_XC_20 = function (_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
    return function (path, global) {
        if (typeof global === 'undefined') {
            if (typeof __GWX_GLOBAL__ === 'undefined') global = {}; else global = __GWX_GLOBAL__;
        }
        if (typeof __WXML_GLOBAL__ === 'undefined') {
            __WXML_GLOBAL__ = {};
        }
        __WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
        var e_ = {}
        if (typeof (global.entrys) === 'undefined') global.entrys = {};
        e_ = global.entrys;
        var d_ = {}
        if (typeof (global.defines) === 'undefined') global.defines = {};
        d_ = global.defines;
        var f_ = {}
        if (typeof (global.modules) === 'undefined') global.modules = {};
        f_ = global.modules || {};
        var p_ = {}
        __WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
        __WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
        __WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
        var z = __WXML_GLOBAL__.ops_set.$gwx_XC_20 || [];

        function gz$gwx_XC_20_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx_XC_20_1) return __WXML_GLOBAL__.ops_cached.$gwx_XC_20_1
            __WXML_GLOBAL__.ops_cached.$gwx_XC_20_1 = [];
            (function (z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }

                Z([[7], [3, 'isLoading']])
                Z([[8], 'statusBarHeight', [[7], [3, 'statusBarHeight']]])
                Z([3, 'skeleton'])
                Z([3, 'navigator'])
                Z([a, [3, 'padding-top:'], [[7], [3, 'statusBarHeight']], [3, 'px;height:'], [[7], [3, 'navBarHeight']], [3, 'px']])
                Z([3, 'goBack'])
                Z([3, 'iconfont icon-arrow_left f20 fb'])
                Z([3, 'padding:20rpx'])
                Z([3, 'toSearch'])
                Z([3, 'search-area c-aaa'])
                Z([3, 'iconfont icon-search f18'])
                Z([3, 'f13'])
                Z([3, '搜索商品'])
                Z([3, 'store-info flex-sb'])
                Z([[2, '=='], [[7], [3, 'orderType']], [1, 2]])
                Z([3, 'toAddress'])
                Z([3, 'fb5 mx-ellipsis'])
                Z([3, 'padding-right:30rpx'])
                Z([a, [3, '配送至·'], [[2, '+'], [[2, '+'], [[6], [[7], [3, 'currentAddress']], [3, 'address']], [1, '，']], [[6], [[7], [3, 'currentAddress']], [3, 'detailAddress']]]])
                Z([3, 'iconfont icon-arrow_right f13'])
                Z(z[5])
                Z([3, 'f14 c-777 mx-ellipsis'])
                Z([3, 'margin-top:12rpx;padding-left:30rpx'])
                Z([3, 'deliver-img'])
                Z([3, '/assets/deliver.png'])
                Z([a, [[6], [[7], [3, 'selectedStore']], [3, 'shopName']], [3, ' ']])
                Z([3, 'toStore'])
                Z(z[16])
                Z(z[17])
                Z([a, z[25][1]])
                Z(z[19])
                Z([3, 'f14 c-777'])
                Z([3, 'margin-top:12rpx'])
                Z([3, 'iconfont icon-location f13'])
                Z([3, 'margin-right:8rpx'])
                Z([a, [3, '距离您'], [[2, '||'], [[6], [[7], [3, 'selectedStore']], [3, 'distance']], [1, '未知']]])
                Z([3, 'f13 fb5 order-type'])
                Z([a, [[2, '?:'], [[2, '=='], [[7], [3, 'orderType']], [1, 2]], [1, '外卖'], [1, '自提']]])
                Z([3, 'activityTap'])
                Z([3, 'activity f12 c-777 flex-sb'])
                Z([[2, '||'], [[6], [[7], [3, 'activites']], [3, 'length']], [[2, '&&'], [[6], [[7], [3, 'selectedStore']], [3, 'takeoutNotice']], [[2, '=='], [[7], [3, 'orderType']], [1, 2]]]])
                Z([1, 4000])
                Z([3, 'height:100%;flex:1'])
                Z([[2, '&&'], [[2, '=='], [[7], [3, 'orderType']], [1, 2]], [[6], [[7], [3, 'selectedStore']], [3, 'takeoutNotice']]])
                Z([3, 'activity-scroll-item'])
                Z([3, 'activity-type'])
                Z([3, '公告'])
                Z([3, 'mx-ellipsis'])
                Z([3, 'max-width:600rpx;color:#FF5254;'])
                Z([a, [[6], [[7], [3, 'selectedStore']], [3, 'takeoutNotice']]])
                Z([[7], [3, 'activites']])
                Z([3, 'index'])
                Z(z[44])
                Z(z[45])
                Z([a, [[6], [[7], [3, 'item']], [3, 'tag']]])
                Z(z[47])
                Z(z[48])
                Z([a, [[6], [[7], [3, 'item']], [3, 'marketingDetailInfo']]])
                Z([3, '查看食品安全信息'])
                Z([3, 'iconfont icon-arrow_down'])
                Z([3, 'closeActivityDetail'])
                Z([3, 'activity-detail f12'])
                Z([[2, '!'], [[7], [3, 'isShowActivityDetail']]])
                Z([a, [3, 'line-height:40rpx; height:calc(100vh - 140rpx - '], [[2, '+'], [[7], [3, 'statusBarHeight']], [[7], [3, 'navBarHeight']]], [3, 'px)']])
                Z([3, 'detail-arrow-up iconfont icon-arrow_up c-777'])
                Z([3, '收起'])
                Z([[6], [[7], [3, 'activites']], [3, 'length']])
                Z([3, 'f14 fb mt12'])
                Z([3, '优惠信息'])
                Z(z[50])
                Z(z[51])
                Z([3, 'mt8'])
                Z(z[45])
                Z([a, z[54][1]])
                Z([a, z[57][1]])
                Z([[2, '=='], [[7], [3, 'orderType']], [1, 2]])
                Z(z[67])
                Z([3, '配送信息'])
                Z([[6], [[6], [[7], [3, 'selectedStore']], [3, 'deliveryFee']], [3, 'firstDeliveryDistance']])
                Z([3, 'c-777 mt8'])
                Z([a, [3, '根据实际配送距离计算'], [[6], [[6], [[7], [3, 'selectedStore']], [3, 'deliveryFee']], [3, 'firstDeliveryDistance']], [3, '公里内'], [[2, '||'], [[2, '/'], [[6], [[6], [[7], [3, 'selectedStore']], [3, 'deliveryFee']], [3, 'firstDeliveryFee']], [1, 100]], [1, 0]], [3, '元，超出范围每公里增加'], [[2, '||'], [[2, '/'], [[6], [[6], [[7], [3, 'selectedStore']], [3, 'deliveryFee']], [3, 'extraDeliveryFee']], [1, 100]], [1, 0]], [3, '元。（不足一公里按一公里计费）']])
                Z([3, 'nightDeFee'])
                Z([[6], [[7], [3, 'selectedStore']], [3, 'nightDeFeeList']])
                Z(z[51])
                Z(z[79])
                Z([a, [[6], [[7], [3, 'nightDeFee']], [3, 'startTime']], [3, '点~'], [[6], [[7], [3, 'nightDeFee']], [3, 'endTime']], [3, '点，每单加价'], [[2, '/'], [[6], [[7], [3, 'nightDeFee']], [3, 'minDeliveryAmount']], [1, 100]], [3, '元']])
                Z([[6], [[7], [3, 'selectedStore']], [3, 'takeoutNotice']])
                Z([3, 'flex align-start c-theme-light mt8'])
                Z(z[45])
                Z([3, 'min-width: 45rpx;text-align: center;margin-top: 4rpx;'])
                Z(z[46])
                Z([a, z[49][1]])
                Z([3, 'toFoodSafety'])
                Z([3, 'iconfont icon-arrow_right mt12'])
                Z([3, '查看食品安全信息 '])
                Z([[6], [[7], [3, 'mzhdData']], [3, 'activityName']])
                Z([3, 'advertiseTap'])
                Z([3, 'mzhd flex-sb'])
                Z([[6], [[7], [3, 'mzhdData']], [3, 'rulePageUrl']])
                Z([3, 'mzhd-bg'])
                Z([3, '/assets/mzhd_bg.png'])
                Z([3, '/assets/mzhd.png'])
                Z([3, 'width:36rpx;height:50rpx;'])
                Z([3, 'flex:1;margin-left:16rpx'])
                Z(z[11])
                Z(z[34])
                Z([a, [[6], [[7], [3, 'mzhdData']], [3, 'activityName']]])
                Z([3, 'iconfont icon-doubt c-aaa'])
                Z([[2, '&&'], [[2, '!'], [[6], [[7], [3, 'mzhdData']], [3, 'currentNum']]], [[6], [[7], [3, 'mzhdData']], [3, 'totalNum']]])
                Z([3, 'f10'])
                Z([3, '集杯成功，新的集杯任务已开启'])
                Z(z[109])
                Z([3, '本店再集'])
                Z([3, 'c-theme'])
                Z([a, [[6], [[7], [3, 'mzhdData']], [3, 'needNum']], [3, '杯']])
                Z([3, '得'])
                Z(z[113])
                Z([a, [[6], [[7], [3, 'mzhdData']], [3, 'awardDesc']]])
                Z([3, 'process c-theme-light f14'])
                Z([[6], [[7], [3, 'mzhdData']], [3, 'cupNum']])
                Z([3, '*this'])
                Z([a, [3, 'iconfont icon-'], [[2, '?:'], [[2, '<'], [[7], [3, 'index']], [[6], [[7], [3, 'mzhdData']], [3, 'currentNum']]], [1, 'checked'], [1, 'unchecked']]])
                Z([3, 'contentScroll'])
                Z([a, [3, 'calc(100vh - 390rpx - '], [[2, '*'], [[2, '?:'], [[6], [[7], [3, 'mzhdData']], [3, 'activityName']], [[2, '+'], [[7], [3, 'statusBarHeight']], [1, 65]], [[7], [3, 'statusBarHeight']]], [1, 2]], [3, 'rpx)']])
                Z([3, 'vtabs'])
                Z([[7], [3, 'vtabs']])
                Z([[7], [3, 'couponCount']])
                Z([[2, '||'], [[7], [3, 'isScrollToCoupon']], [[2, '!'], [[6], [[7], [3, 'swiperList']], [3, 'length']]]])
                Z([3, 'toCoupon'])
                Z([3, 'total-coupon flex-center'])
                Z([3, 'coupon'])
                Z([3, 'top:0;z-index:12'])
                Z([3, '/assets/coupon.png'])
                Z([3, 'width:56rpx;height:56rpx'])
                Z([3, 'f12'])
                Z([a, [3, '优惠券'], [[7], [3, 'couponCount']], [3, '张']])
                Z(z[128])
                Z(z[129])
                Z(z[132])
                Z(z[133])
                Z(z[134])
                Z([a, z[135][1], z[135][2], z[135][3]])
                Z(z[125])
                Z([3, 'productCategoryId'])
                Z([[7], [3, 'index']])
                Z([[2, '&&'], [[2, '!'], [[7], [3, 'index']]], [[6], [[7], [3, 'swiperList']], [3, 'length']]])
                Z([[7], [3, 'swiperList']])
                Z([3, 'banner'])
                Z([3, 'menu-swiper'])
                Z([3, 'category-name f12'])
                Z([a, [[6], [[7], [3, 'item']], [3, 'categoryNameSale']]])
                Z([3, 'goods_idx'])
                Z([3, 'goods'])
                Z([[6], [[7], [3, 'item']], [3, 'products']])
                Z([3, 'productId'])
                Z([3, 'showGoodsDetail'])
                Z([a, [3, 'goods-item f11 '], [[6], [[7], [3, 'goods']], [3, 'disableClassName']]])
                Z([[6], [[7], [3, 'goods']], [3, 'productId']])
                Z([[4], [[5], [[5], [[7], [3, 'index']]], [[7], [3, 'goods_idx']]]])
                Z([a, [3, 'goods_'], z[144], [3, '_'], [[7], [3, 'goods_idx']]])
                Z([3, 'goods-img b-eee'])
                Z([[6], [[7], [3, 'goods']], [3, 'productLogo']])
                Z([3, 'f14 fb'])
                Z([a, [[2, '||'], [[6], [[7], [3, 'goods']], [3, 'productName']], [1, '']]])
                Z([3, 'goods-desc mx-ellipsis c-aaa'])
                Z([a, [[2, '||'], [[6], [[7], [3, 'goods']], [3, 'productDesc']], [1, '']]])
                Z([[2, '&&'], [[6], [[7], [3, 'goods']], [3, 'productLabels']], [[6], [[6], [[7], [3, 'goods']], [3, 'productLabels']], [1, 0]]])
                Z([3, 'activity-label mx-ellipsis f10'])
                Z([a, [[6], [[6], [[7], [3, 'goods']], [3, 'productLabels']], [1, 0]]])
                Z([3, 'height:32rpx'])
                Z([3, 'margin-top:8rpx'])
                Z([3, 'mr2 fb5'])
                Z([3, '¥'])
                Z([3, 'f16 fb5'])
                Z([a, [[6], [[6], [[7], [3, 'goods']], [3, 'splitSprice']], [1, 0]]])
                Z([[6], [[6], [[7], [3, 'goods']], [3, 'splitSprice']], [1, 1]])
                Z([3, 'fb5'])
                Z([a, [3, '.'], [[6], [[6], [[7], [3, 'goods']], [3, 'splitSprice']], [1, 1]]])
                Z([[2, '||'], [[6], [[7], [3, 'goods']], [3, 'hasMorePrice']], [[2, '=='], [[6], [[7], [3, 'goods']], [3, 'productType']], [1, 2]]])
                Z([3, 'ml3 c-aaa'])
                Z([3, '起'])
                Z([[2, '&&'], [[6], [[7], [3, 'goods']], [3, 'originPrice']], [[2, '!=='], [[6], [[7], [3, 'goods']], [3, 'originPrice']], [[6], [[7], [3, 'goods']], [3, 'productPrice']]]])
                Z([3, 'disabled-price'])
                Z([a, z[172], [[2, '/'], [[6], [[7], [3, 'goods']], [3, 'originPrice']], [1, 100]]])
                Z([[2, '=='], [[6], [[7], [3, 'goods']], [3, 'productType']], [1, 3]])
                Z([3, 'toPackDetail'])
                Z([3, 'normal-buttons f11 flex-center'])
                Z(z[156][2])
                Z(z[157])
                Z([3, '立即购买'])
                Z([3, 'number-buttons flex-sb'])
                Z([a, [3, 'width:'], [[2, '?:'], [[6], [[7], [3, 'goods']], [3, 'addNum']], [1, '180rpx'], [1, 'auto']], [3, ';bottom:-16rpx;font-size:54rpx']])
                Z([[6], [[7], [3, 'goods']], [3, 'addNum']])
                Z([3, 'removeGoods'])
                Z([3, 'icon-btn iconfont icon-remove c-theme'])
                Z(z[158])
                Z([3, 'f14'])
                Z([a, [[6], [[7], [3, 'goods']], [3, 'addNum']]])
                Z([3, 'addGoods'])
                Z([3, 'icon-btn iconfont icon-add c-theme'])
                Z(z[158])
                Z([3, 'cart-box flex-sb mx-hairline--top safe-bottom'])
                Z([[2, '&&'], [[2, '!'], [[7], [3, 'isShowCartDetail']]], [[6], [[7], [3, 'cartData']], [3, 'discountDesc']]])
                Z([3, 'discount-bar f11'])
                Z([a, [[6], [[7], [3, 'cartData']], [3, 'discountDesc']]])
                Z([3, 'showCartDetail'])
                Z([3, 'cart-img-box'])
                Z([3, '/assets/cart.png'])
                Z([3, 'width:100rpx;height:100rpx'])
                Z([3, 'number-icon'])
                Z([[2, '!'], [[6], [[7], [3, 'cartData']], [3, 'productAmount']]])
                Z([3, 'top:0;right:0'])
                Z([a, [[6], [[7], [3, 'cartData']], [3, 'productAmount']]])
                Z([3, 'price-box f11'])
                Z([3, '合计'])
                Z([3, 'f12 fb'])
                Z([3, 'margin:0 6rpx'])
                Z(z[172])
                Z([3, 'f18'])
                Z([a, [[6], [[6], [[7], [3, 'cartData']], [3, 'splitSprice']], [1, 0]]])
                Z([[6], [[6], [[7], [3, 'cartData']], [3, 'splitSprice']], [1, 1]])
                Z([a, z[177][1], [[6], [[6], [[7], [3, 'cartData']], [3, 'splitSprice']], [1, 1]]])
                Z(z[75])
                Z([3, 'c-aaa'])
                Z([3, 'margin-top:4rpx'])
                Z([a, [3, '另需配送费¥'], [[2, '||'], [[2, '/'], [[6], [[7], [3, 'cartData']], [3, 'deliveryFee']], [1, 100]], [1, 0]]])
                Z([3, 'toOrder'])
                Z([3, 'f16'])
                Z([[2, '||'], [[2, '!'], [[6], [[7], [3, 'cartData']], [3, 'productAmount']]], [[2, '&&'], [[2, '=='], [[7], [3, 'orderType']], [1, 2]], [[2, '!'], [[6], [[7], [3, 'cartData']], [3, 'canBeDelivered']]]]])
                Z([3, 'min-width:240rpx'])
                Z([[2, '||'], [[2, '=='], [[7], [3, 'orderType']], [1, 1]], [[2, '&&'], [[2, '=='], [[7], [3, 'orderType']], [1, 2]], [[6], [[7], [3, 'cartData']], [3, 'canBeDelivered']]]])
                Z([3, '去结算'])
                Z([[2, '&&'], [[2, '=='], [[7], [3, 'orderType']], [1, 2]], [[2, '||'], [[2, '=='], [[6], [[7], [3, 'cartData']], [3, 'minDeliveryType']], [1, 1]], [[2, '=='], [[6], [[7], [3, 'cartData']], [3, 'minDeliveryType']], [1, 3]]]])
                Z([a, [3, '差¥'], [[2, '/'], [[2, '-'], [[6], [[7], [3, 'cartData']], [3, 'minDeliveryAmount']], [[6], [[7], [3, 'cartData']], [3, 'priceNoDeliveryFee']]], [1, 100]], [3, '起送']])
                Z([[2, '&&'], [[2, '=='], [[7], [3, 'orderType']], [1, 2]], [[2, '=='], [[6], [[7], [3, 'cartData']], [3, 'minDeliveryType']], [1, 2]]])
                Z([a, [3, '差'], [[2, '-'], [[6], [[7], [3, 'cartData']], [3, 'minDeliveryNum']], [[6], [[7], [3, 'cartData']], [3, 'productAmount']]], [3, '件起送']])
                Z([[2, '||'], [[2, '||'], [[7], [3, 'isShowGoodsDetail']], [[7], [3, 'isShowConfirmDialog']]], [[7], [3, 'isShowShopConfirm']]])
                Z([3, '299'])
                Z([3, 'dialogUpdateGoods'])
                Z([[7], [3, 'cartData']])
                Z([[7], [3, 'currentGoods']])
                Z([[7], [3, 'isShowGoodsDetail']])
                Z([[7], [3, 'isShowConfirmDialog']])
                Z([3, 'confirm-dialog f14'])
                Z([3, 'confirm-msg mx-hairline--bottom'])
                Z([3, '确认清空购物车吗？'])
                Z([3, 'display:flex'])
                Z([3, 'closeConfirmDialog'])
                Z([3, 'cancel c-777'])
                Z([3, '我再想想'])
                Z([3, 'confirmClear'])
                Z([3, 'confirm c-theme mx-hairline--left'])
                Z([3, '确定'])
                Z([[7], [3, 'isShowShopConfirm']])
                Z(z[243])
                Z([3, 'padding-top:40rpx'])
                Z([3, '/assets/shop_confirm.png'])
                Z([3, 'width:212rpx;height:212rpx'])
                Z([3, 'confirm-msg mx-hairline--bottom f14'])
                Z([a, z[25][1], z[35][1]])
                Z(z[113])
                Z([a, [[6], [[7], [3, 'selectedStore']], [3, 'distance']]])
                Z([3, '，确定去自提吗？'])
                Z(z[246])
                Z([3, 'closeConfirmShop'])
                Z(z[248])
                Z([3, '选择其他门店'])
                Z([3, 'confirmToOrder'])
                Z(z[251])
                Z(z[252])
                Z([[2, '||'], [[2, '||'], [[7], [3, 'showErrorPopup']], [[7], [3, 'showOfflinePopup']]], [[7], [3, 'showClosedPopup']]])
                Z(z[237])
                Z([[6], [[7], [3, 'selectedStore']], [3, 'operationTime']])
                Z([[7], [3, 'showClosedPopup']])
                Z([[7], [3, 'showErrorPopup']])
                Z([[7], [3, 'showOfflinePopup']])
                Z([3, 'closeCartDetail'])
                Z([3, 'bottom'])
                Z([[7], [3, 'isShowCartDetail']])
                Z([3, '99'])
                Z([3, 'cart-detail safe-bottom'])
                Z([[6], [[7], [3, 'cartData']], [3, 'discountDesc']])
                Z(z[203])
                Z([a, z[204][1]])
                Z([3, 'title flex-sb'])
                Z([3, 'f16 fb'])
                Z([3, '已选商品'])
                Z(z[75])
                Z([3, 'f12 fb4'])
                Z([3, '（打包费'])
                Z(z[113])
                Z([a, z[172], [[2, '||'], [[2, '/'], [[6], [[7], [3, 'cartData']], [3, 'mealFee']], [1, 100]], [1, 0]]])
                Z([3, '）'])
                Z([3, 'showConfirmDialog'])
                Z([3, 'f12 c-aaa'])
                Z([3, 'iconfont icon-delete f13'])
                Z([3, '清空'])
                Z([3, 'content-box'])
                Z([[6], [[7], [3, 'cartData']], [3, 'products']])
                Z(z[154])
                Z([3, 'cart-detail-goods'])
                Z([3, 'cart-detail-img'])
                Z([[6], [[7], [3, 'item']], [3, 'productLogo']])
                Z([3, 'cart-detail-goods-text f11'])
                Z([3, 'fb f14'])
                Z([a, [[6], [[7], [3, 'item']], [3, 'productName']]])
                Z([3, 'select-item-text c-777'])
                Z([a, [[6], [[7], [3, 'item']], [3, 'selectNames']]])
                Z(z[176])
                Z(z[172])
                Z(z[196])
                Z([3, 'margin-left:4rpx'])
                Z([a, [[2, '/'], [[6], [[7], [3, 'item']], [3, 'price']], [1, 100]]])
                Z([[2, '&&'], [[6], [[7], [3, 'item']], [3, 'originPrice']], [[2, '!=='], [[6], [[7], [3, 'item']], [3, 'originPrice']], [[6], [[7], [3, 'item']], [3, 'price']]]])
                Z(z[182])
                Z([a, z[172], [[2, '/'], [[6], [[7], [3, 'item']], [3, 'originPrice']], [1, 100]]])
                Z(z[190])
                Z([3, 'width:170rpx;bottom:-16rpx;font-size:48rpx'])
                Z([3, 'cartRemoveGoods'])
                Z(z[194])
                Z(z[144])
                Z(z[196])
                Z([a, [[6], [[7], [3, 'item']], [3, 'productAmount']]])
                Z([3, 'cartAddGoods'])
                Z(z[199])
                Z(z[144])
                Z([[6], [[7], [3, 'popupAdList']], [3, 'length']])
                Z([[7], [3, 'popupAdList']])
                Z([3, 'WechartMiniOrderPopup'])
                Z([3, 'popup'])
                Z([a, [3, 'display: '], [[2, '?:'], [[2, '||'], [[2, '||'], [[2, '||'], [[2, '||'], [[2, '||'], [[7], [3, 'isShowGoodsDetail']], [[7], [3, 'isShowConfirmDialog']]], [[7], [3, 'isShowShopConfirm']]], [[7], [3, 'showErrorPopup']]], [[7], [3, 'showOfflinePopup']]], [[7], [3, 'showClosedPopup']]], [1, 'none'], [1, 'block']]])
            })(__WXML_GLOBAL__.ops_cached.$gwx_XC_20_1);
            return __WXML_GLOBAL__.ops_cached.$gwx_XC_20_1
        }

        __WXML_GLOBAL__.ops_set.$gwx_XC_20 = z;
        __WXML_GLOBAL__.ops_init.$gwx_XC_20 = true;
        var x = ['./pages/menu/index.wxml', 'index.skeleton.wxml'];
        d_[x[0]] = {}
        var m0 = function (e, s, r, gg) {
            var z = gz$gwx_XC_20_1()
            var e8P = e_[x[0]].i
            _ai(e8P, x[1], e_, x[0], 1, 1)
            var b9P = _v()
            _(r, b9P)
            if (_oz(z, 0, e, s, gg)) {
                b9P.wxVkey = 1
                var oBQ = _v()
                _(b9P, oBQ)
                var fCQ = _oz(z, 2, e, s, gg)
                var cDQ = _gd(x[0], fCQ, e_, d_)
                if (cDQ) {
                    var hEQ = _1z(z, 1, e, s, gg) || {}
                    var cur_globalf = gg.f
                    oBQ.wxXCkey = 3
                    cDQ(hEQ, hEQ, oBQ, gg)
                    gg.f = cur_globalf
                } else _w(fCQ, x[0], 2, 14)
            }
            var oFQ = _mz(z, 'view', ['class', 3, 'style', 1], [], e, s, gg)
            var cGQ = _mz(z, 'text', ['bindtap', 5, 'class', 1, 'style', 2], [], e, s, gg)
            _(oFQ, cGQ)
            var oHQ = _mz(z, 'view', ['bindtap', 8, 'class', 1], [], e, s, gg)
            var lIQ = _n('text')
            _rz(z, lIQ, 'class', 10, e, s, gg)
            _(oHQ, lIQ)
            var aJQ = _n('text')
            _rz(z, aJQ, 'class', 11, e, s, gg)
            var tKQ = _oz(z, 12, e, s, gg)
            _(aJQ, tKQ)
            _(oHQ, aJQ)
            _(oFQ, oHQ)
            _(r, oFQ)
            var eLQ = _n('view')
            _rz(z, eLQ, 'class', 13, e, s, gg)
            var bMQ = _v()
            _(eLQ, bMQ)
            if (_oz(z, 14, e, s, gg)) {
                bMQ.wxVkey = 1
                var oNQ = _n('view')
                var xOQ = _mz(z, 'view', ['bindtap', 15, 'class', 1, 'style', 2], [], e, s, gg)
                var oPQ = _n('text')
                var fQQ = _oz(z, 18, e, s, gg)
                _(oPQ, fQQ)
                _(xOQ, oPQ)
                var cRQ = _n('text')
                _rz(z, cRQ, 'class', 19, e, s, gg)
                _(xOQ, cRQ)
                _(oNQ, xOQ)
                var hSQ = _mz(z, 'view', ['bindtap', 20, 'class', 1, 'style', 2], [], e, s, gg)
                var oTQ = _mz(z, 'image', ['class', 23, 'src', 1], [], e, s, gg)
                _(hSQ, oTQ)
                var cUQ = _oz(z, 25, e, s, gg)
                _(hSQ, cUQ)
                _(oNQ, hSQ)
                _(bMQ, oNQ)
            } else {
                bMQ.wxVkey = 2
                var oVQ = _n('view')
                var lWQ = _mz(z, 'view', ['bindtap', 26, 'class', 1, 'style', 2], [], e, s, gg)
                var aXQ = _n('text')
                var tYQ = _oz(z, 29, e, s, gg)
                _(aXQ, tYQ)
                _(lWQ, aXQ)
                var eZQ = _n('text')
                _rz(z, eZQ, 'class', 30, e, s, gg)
                _(lWQ, eZQ)
                _(oVQ, lWQ)
                var b1Q = _mz(z, 'view', ['class', 31, 'style', 1], [], e, s, gg)
                var o2Q = _mz(z, 'text', ['class', 33, 'style', 1], [], e, s, gg)
                _(b1Q, o2Q)
                var x3Q = _n('text')
                var o4Q = _oz(z, 35, e, s, gg)
                _(x3Q, o4Q)
                _(b1Q, x3Q)
                _(oVQ, b1Q)
                _(bMQ, oVQ)
            }
            var f5Q = _n('text')
            _rz(z, f5Q, 'class', 36, e, s, gg)
            var c6Q = _oz(z, 37, e, s, gg)
            _(f5Q, c6Q)
            _(eLQ, f5Q)
            bMQ.wxXCkey = 1
            _(r, eLQ)
            var h7Q = _mz(z, 'view', ['bindtap', 38, 'class', 1], [], e, s, gg)
            var o8Q = _v()
            _(h7Q, o8Q)
            if (_oz(z, 40, e, s, gg)) {
                o8Q.wxVkey = 1
                var c9Q = _mz(z, 'swiper', ['autoplay', -1, 'circular', -1, 'vertical', -1, 'interval', 41, 'style', 1], [], e, s, gg)
                var o0Q = _v()
                _(c9Q, o0Q)
                if (_oz(z, 43, e, s, gg)) {
                    o0Q.wxVkey = 1
                    var lAR = _n('swiper-item')
                    var aBR = _n('view')
                    _rz(z, aBR, 'class', 44, e, s, gg)
                    var tCR = _n('text')
                    _rz(z, tCR, 'class', 45, e, s, gg)
                    var eDR = _oz(z, 46, e, s, gg)
                    _(tCR, eDR)
                    _(aBR, tCR)
                    var bER = _mz(z, 'text', ['class', 47, 'style', 1], [], e, s, gg)
                    var oFR = _oz(z, 49, e, s, gg)
                    _(bER, oFR)
                    _(aBR, bER)
                    _(lAR, aBR)
                    _(o0Q, lAR)
                }
                var xGR = _v()
                _(c9Q, xGR)
                var oHR = function (cJR, fIR, hKR, gg) {
                    var cMR = _n('swiper-item')
                    var oNR = _n('view')
                    _rz(z, oNR, 'class', 52, cJR, fIR, gg)
                    var lOR = _n('text')
                    _rz(z, lOR, 'class', 53, cJR, fIR, gg)
                    var aPR = _oz(z, 54, cJR, fIR, gg)
                    _(lOR, aPR)
                    _(oNR, lOR)
                    var tQR = _mz(z, 'text', ['class', 55, 'style', 1], [], cJR, fIR, gg)
                    var eRR = _oz(z, 57, cJR, fIR, gg)
                    _(tQR, eRR)
                    _(oNR, tQR)
                    _(cMR, oNR)
                    _(hKR, cMR)
                    return hKR
                }
                xGR.wxXCkey = 2
                _2z(z, 50, oHR, e, s, gg, xGR, 'item', 'index', 'index')
                o0Q.wxXCkey = 1
                _(o8Q, c9Q)
            } else {
                o8Q.wxVkey = 2
                var bSR = _n('view')
                var oTR = _oz(z, 58, e, s, gg)
                _(bSR, oTR)
                _(o8Q, bSR)
            }
            var xUR = _n('view')
            _rz(z, xUR, 'class', 59, e, s, gg)
            _(h7Q, xUR)
            var oVR = _mz(z, 'view', ['catchtap', 60, 'class', 1, 'hidden', 2, 'style', 3], [], e, s, gg)
            var hYR = _n('view')
            _rz(z, hYR, 'class', 64, e, s, gg)
            var oZR = _oz(z, 65, e, s, gg)
            _(hYR, oZR)
            _(oVR, hYR)
            var fWR = _v()
            _(oVR, fWR)
            if (_oz(z, 66, e, s, gg)) {
                fWR.wxVkey = 1
                var c1R = _n('view')
                _rz(z, c1R, 'class', 67, e, s, gg)
                var o2R = _oz(z, 68, e, s, gg)
                _(c1R, o2R)
                _(fWR, c1R)
                var l3R = _v()
                _(fWR, l3R)
                var a4R = function (e6R, t5R, b7R, gg) {
                    var x9R = _n('view')
                    _rz(z, x9R, 'class', 71, e6R, t5R, gg)
                    var o0R = _n('text')
                    _rz(z, o0R, 'class', 72, e6R, t5R, gg)
                    var fAS = _oz(z, 73, e6R, t5R, gg)
                    _(o0R, fAS)
                    _(x9R, o0R)
                    var cBS = _n('text')
                    var hCS = _oz(z, 74, e6R, t5R, gg)
                    _(cBS, hCS)
                    _(x9R, cBS)
                    _(b7R, x9R)
                    return b7R
                }
                l3R.wxXCkey = 2
                _2z(z, 69, a4R, e, s, gg, l3R, 'item', 'index', 'index')
            }
            var cXR = _v()
            _(oVR, cXR)
            if (_oz(z, 75, e, s, gg)) {
                cXR.wxVkey = 1
                var oFS = _n('view')
                _rz(z, oFS, 'class', 76, e, s, gg)
                var lGS = _oz(z, 77, e, s, gg)
                _(oFS, lGS)
                _(cXR, oFS)
                var oDS = _v()
                _(cXR, oDS)
                if (_oz(z, 78, e, s, gg)) {
                    oDS.wxVkey = 1
                    var aHS = _n('view')
                    _rz(z, aHS, 'class', 79, e, s, gg)
                    var tIS = _oz(z, 80, e, s, gg)
                    _(aHS, tIS)
                    _(oDS, aHS)
                }
                var eJS = _v()
                _(cXR, eJS)
                var bKS = function (xMS, oLS, oNS, gg) {
                    var cPS = _n('view')
                    _rz(z, cPS, 'class', 84, xMS, oLS, gg)
                    var hQS = _oz(z, 85, xMS, oLS, gg)
                    _(cPS, hQS)
                    _(oNS, cPS)
                    return oNS
                }
                eJS.wxXCkey = 2
                _2z(z, 82, bKS, e, s, gg, eJS, 'nightDeFee', 'index', 'index')
                var cES = _v()
                _(cXR, cES)
                if (_oz(z, 86, e, s, gg)) {
                    cES.wxVkey = 1
                    var oRS = _n('view')
                    _rz(z, oRS, 'class', 87, e, s, gg)
                    var cSS = _mz(z, 'text', ['class', 88, 'style', 1], [], e, s, gg)
                    var oTS = _oz(z, 90, e, s, gg)
                    _(cSS, oTS)
                    _(oRS, cSS)
                    var lUS = _n('text')
                    var aVS = _oz(z, 91, e, s, gg)
                    _(lUS, aVS)
                    _(oRS, lUS)
                    _(cES, oRS)
                }
                oDS.wxXCkey = 1
                cES.wxXCkey = 1
            }
            var tWS = _mz(z, 'view', ['catchtap', 92, 'class', 1], [], e, s, gg)
            var eXS = _oz(z, 94, e, s, gg)
            _(tWS, eXS)
            _(oVR, tWS)
            fWR.wxXCkey = 1
            cXR.wxXCkey = 1
            _(h7Q, oVR)
            o8Q.wxXCkey = 1
            _(r, h7Q)
            var o0P = _v()
            _(r, o0P)
            if (_oz(z, 95, e, s, gg)) {
                o0P.wxVkey = 1
                var bYS = _mz(z, 'view', ['bindtap', 96, 'class', 1, 'data-url', 2], [], e, s, gg)
                var oZS = _mz(z, 'image', ['class', 99, 'src', 1], [], e, s, gg)
                _(bYS, oZS)
                var x1S = _mz(z, 'image', ['src', 101, 'style', 1], [], e, s, gg)
                _(bYS, x1S)
                var o2S = _n('view')
                _rz(z, o2S, 'style', 103, e, s, gg)
                var c4S = _n('view')
                _rz(z, c4S, 'class', 104, e, s, gg)
                var h5S = _n('text')
                _rz(z, h5S, 'style', 105, e, s, gg)
                var o6S = _oz(z, 106, e, s, gg)
                _(h5S, o6S)
                _(c4S, h5S)
                var c7S = _n('text')
                _rz(z, c7S, 'class', 107, e, s, gg)
                _(c4S, c7S)
                _(o2S, c4S)
                var f3S = _v()
                _(o2S, f3S)
                if (_oz(z, 108, e, s, gg)) {
                    f3S.wxVkey = 1
                    var o8S = _n('text')
                    _rz(z, o8S, 'class', 109, e, s, gg)
                    var l9S = _oz(z, 110, e, s, gg)
                    _(o8S, l9S)
                    _(f3S, o8S)
                } else {
                    f3S.wxVkey = 2
                    var a0S = _n('text')
                    _rz(z, a0S, 'class', 111, e, s, gg)
                    var tAT = _oz(z, 112, e, s, gg)
                    _(a0S, tAT)
                    var eBT = _n('text')
                    _rz(z, eBT, 'class', 113, e, s, gg)
                    var bCT = _oz(z, 114, e, s, gg)
                    _(eBT, bCT)
                    _(a0S, eBT)
                    var oDT = _oz(z, 115, e, s, gg)
                    _(a0S, oDT)
                    var xET = _n('text')
                    _rz(z, xET, 'class', 116, e, s, gg)
                    var oFT = _oz(z, 117, e, s, gg)
                    _(xET, oFT)
                    _(a0S, xET)
                    _(f3S, a0S)
                }
                f3S.wxXCkey = 1
                _(bYS, o2S)
                var fGT = _n('view')
                _rz(z, fGT, 'class', 118, e, s, gg)
                var cHT = _v()
                _(fGT, cHT)
                var hIT = function (cKT, oJT, oLT, gg) {
                    var aNT = _n('text')
                    _rz(z, aNT, 'class', 121, cKT, oJT, gg)
                    _(oLT, aNT)
                    return oLT
                }
                cHT.wxXCkey = 2
                _2z(z, 119, hIT, e, s, gg, cHT, 'item', 'index', '*this')
                _(bYS, fGT)
                _(o0P, bYS)
            }
            var tOT = _mz(z, 'vtabs', ['bindcontentScroll', 122, 'height', 1, 'id', 2, 'vtabs', 3], [], e, s, gg)
            var ePT = _v()
            _(tOT, ePT)
            if (_oz(z, 126, e, s, gg)) {
                ePT.wxVkey = 1
                var bQT = _v()
                _(ePT, bQT)
                if (_oz(z, 127, e, s, gg)) {
                    bQT.wxVkey = 1
                    var oRT = _mz(z, 'view', ['bindtap', 128, 'class', 1, 'slot', 2, 'style', 3], [], e, s, gg)
                    var xST = _mz(z, 'image', ['src', 132, 'style', 1], [], e, s, gg)
                    _(oRT, xST)
                    var oTT = _n('text')
                    _rz(z, oTT, 'class', 134, e, s, gg)
                    var fUT = _oz(z, 135, e, s, gg)
                    _(oTT, fUT)
                    _(oRT, oTT)
                    _(bQT, oRT)
                } else {
                    bQT.wxVkey = 2
                    var cVT = _mz(z, 'view', ['bindtap', 136, 'class', 1], [], e, s, gg)
                    var hWT = _mz(z, 'image', ['src', 138, 'style', 1], [], e, s, gg)
                    _(cVT, hWT)
                    var oXT = _n('text')
                    _rz(z, oXT, 'class', 140, e, s, gg)
                    var cYT = _oz(z, 141, e, s, gg)
                    _(oXT, cYT)
                    _(cVT, oXT)
                    _(bQT, cVT)
                }
                bQT.wxXCkey = 1
            }
            var oZT = _v()
            _(tOT, oZT)
            var l1T = function (t3T, a2T, e4T, gg) {
                var o6T = _n('vtabs-content')
                _rz(z, o6T, 'tabIndex', 144, t3T, a2T, gg)
                var x7T = _v()
                _(o6T, x7T)
                if (_oz(z, 145, t3T, a2T, gg)) {
                    x7T.wxVkey = 1
                    var o8T = _mz(z, 'mx-ad', ['adData', 146, 'adType', 1, 'customClass', 2], [], t3T, a2T, gg)
                    _(x7T, o8T)
                }
                var f9T = _n('view')
                _rz(z, f9T, 'class', 149, t3T, a2T, gg)
                var c0T = _oz(z, 150, t3T, a2T, gg)
                _(f9T, c0T)
                _(o6T, f9T)
                var hAU = _v()
                _(o6T, hAU)
                var oBU = function (oDU, cCU, lEU, gg) {
                    var tGU = _mz(z, 'view', ['bindtap', 155, 'class', 1, 'data-goods-id', 2, 'data-indexs', 3, 'id', 4], [], oDU, cCU, gg)
                    var oJU = _mz(z, 'image', ['lazyLoad', -1, 'class', 160, 'src', 1], [], oDU, cCU, gg)
                    _(tGU, oJU)
                    var xKU = _n('text')
                    _rz(z, xKU, 'class', 162, oDU, cCU, gg)
                    var oLU = _oz(z, 163, oDU, cCU, gg)
                    _(xKU, oLU)
                    _(tGU, xKU)
                    var fMU = _n('view')
                    _rz(z, fMU, 'class', 164, oDU, cCU, gg)
                    var cNU = _oz(z, 165, oDU, cCU, gg)
                    _(fMU, cNU)
                    _(tGU, fMU)
                    var eHU = _v()
                    _(tGU, eHU)
                    if (_oz(z, 166, oDU, cCU, gg)) {
                        eHU.wxVkey = 1
                        var hOU = _n('view')
                        _rz(z, hOU, 'class', 167, oDU, cCU, gg)
                        var oPU = _oz(z, 168, oDU, cCU, gg)
                        _(hOU, oPU)
                        _(eHU, hOU)
                    } else {
                        eHU.wxVkey = 2
                        var cQU = _n('view')
                        _rz(z, cQU, 'style', 169, oDU, cCU, gg)
                        _(eHU, cQU)
                    }
                    var oRU = _n('view')
                    _rz(z, oRU, 'style', 170, oDU, cCU, gg)
                    var eVU = _n('text')
                    _rz(z, eVU, 'class', 171, oDU, cCU, gg)
                    var bWU = _oz(z, 172, oDU, cCU, gg)
                    _(eVU, bWU)
                    _(oRU, eVU)
                    var oXU = _n('text')
                    _rz(z, oXU, 'class', 173, oDU, cCU, gg)
                    var xYU = _oz(z, 174, oDU, cCU, gg)
                    _(oXU, xYU)
                    _(oRU, oXU)
                    var lSU = _v()
                    _(oRU, lSU)
                    if (_oz(z, 175, oDU, cCU, gg)) {
                        lSU.wxVkey = 1
                        var oZU = _n('text')
                        _rz(z, oZU, 'class', 176, oDU, cCU, gg)
                        var f1U = _oz(z, 177, oDU, cCU, gg)
                        _(oZU, f1U)
                        _(lSU, oZU)
                    }
                    var aTU = _v()
                    _(oRU, aTU)
                    if (_oz(z, 178, oDU, cCU, gg)) {
                        aTU.wxVkey = 1
                        var c2U = _n('text')
                        _rz(z, c2U, 'class', 179, oDU, cCU, gg)
                        var h3U = _oz(z, 180, oDU, cCU, gg)
                        _(c2U, h3U)
                        _(aTU, c2U)
                    }
                    var tUU = _v()
                    _(oRU, tUU)
                    if (_oz(z, 181, oDU, cCU, gg)) {
                        tUU.wxVkey = 1
                        var o4U = _n('text')
                        _rz(z, o4U, 'class', 182, oDU, cCU, gg)
                        var c5U = _oz(z, 183, oDU, cCU, gg)
                        _(o4U, c5U)
                        _(tUU, o4U)
                    }
                    lSU.wxXCkey = 1
                    aTU.wxXCkey = 1
                    tUU.wxXCkey = 1
                    _(tGU, oRU)
                    var bIU = _v()
                    _(tGU, bIU)
                    if (_oz(z, 184, oDU, cCU, gg)) {
                        bIU.wxVkey = 1
                        var o6U = _mz(z, 'view', ['catchtap', 185, 'class', 1, 'data-disable-class-name', 2, 'data-goods-id', 3], [], oDU, cCU, gg)
                        var l7U = _oz(z, 189, oDU, cCU, gg)
                        _(o6U, l7U)
                        _(bIU, o6U)
                    } else {
                        bIU.wxVkey = 2
                        var a8U = _mz(z, 'view', ['class', 190, 'style', 1], [], oDU, cCU, gg)
                        var t9U = _v()
                        _(a8U, t9U)
                        if (_oz(z, 192, oDU, cCU, gg)) {
                            t9U.wxVkey = 1
                            var e0U = _mz(z, 'text', ['catchtap', 193, 'class', 1, 'data-indexs', 2], [], oDU, cCU, gg)
                            _(t9U, e0U)
                            var bAV = _n('text')
                            _rz(z, bAV, 'class', 196, oDU, cCU, gg)
                            var oBV = _oz(z, 197, oDU, cCU, gg)
                            _(bAV, oBV)
                            _(t9U, bAV)
                        }
                        var xCV = _mz(z, 'text', ['catchtap', 198, 'class', 1, 'data-indexs', 2], [], oDU, cCU, gg)
                        _(a8U, xCV)
                        t9U.wxXCkey = 1
                        _(bIU, a8U)
                    }
                    eHU.wxXCkey = 1
                    bIU.wxXCkey = 1
                    _(lEU, tGU)
                    return lEU
                }
                hAU.wxXCkey = 2
                _2z(z, 153, oBU, t3T, a2T, gg, hAU, 'goods', 'goods_idx', 'productId')
                x7T.wxXCkey = 1
                x7T.wxXCkey = 3
                _(e4T, o6T)
                return e4T
            }
            oZT.wxXCkey = 4
            _2z(z, 142, l1T, e, s, gg, oZT, 'item', 'index', 'productCategoryId')
            ePT.wxXCkey = 1
            _(r, tOT)
            var oDV = _n('view')
            _rz(z, oDV, 'class', 201, e, s, gg)
            var fEV = _v()
            _(oDV, fEV)
            if (_oz(z, 202, e, s, gg)) {
                fEV.wxVkey = 1
                var cFV = _n('view')
                _rz(z, cFV, 'class', 203, e, s, gg)
                var hGV = _oz(z, 204, e, s, gg)
                _(cFV, hGV)
                _(fEV, cFV)
            }
            var oHV = _mz(z, 'view', ['bindtap', 205, 'class', 1], [], e, s, gg)
            var cIV = _mz(z, 'image', ['src', 207, 'style', 1], [], e, s, gg)
            _(oHV, cIV)
            var oJV = _mz(z, 'text', ['class', 209, 'hidden', 1, 'style', 2], [], e, s, gg)
            var lKV = _oz(z, 212, e, s, gg)
            _(oJV, lKV)
            _(oHV, oJV)
            _(oDV, oHV)
            var aLV = _n('view')
            _rz(z, aLV, 'class', 213, e, s, gg)
            var eNV = _n('text')
            var bOV = _oz(z, 214, e, s, gg)
            _(eNV, bOV)
            _(aLV, eNV)
            var oPV = _n('text')
            _rz(z, oPV, 'class', 215, e, s, gg)
            var oRV = _n('text')
            _rz(z, oRV, 'style', 216, e, s, gg)
            var fSV = _oz(z, 217, e, s, gg)
            _(oRV, fSV)
            _(oPV, oRV)
            var cTV = _n('text')
            _rz(z, cTV, 'class', 218, e, s, gg)
            var hUV = _oz(z, 219, e, s, gg)
            _(cTV, hUV)
            _(oPV, cTV)
            var xQV = _v()
            _(oPV, xQV)
            if (_oz(z, 220, e, s, gg)) {
                xQV.wxVkey = 1
                var oVV = _n('text')
                var cWV = _oz(z, 221, e, s, gg)
                _(oVV, cWV)
                _(xQV, oVV)
            }
            xQV.wxXCkey = 1
            _(aLV, oPV)
            var tMV = _v()
            _(aLV, tMV)
            if (_oz(z, 222, e, s, gg)) {
                tMV.wxVkey = 1
                var oXV = _mz(z, 'view', ['class', 223, 'style', 1], [], e, s, gg)
                var lYV = _oz(z, 225, e, s, gg)
                _(oXV, lYV)
                _(tMV, oXV)
            }
            tMV.wxXCkey = 1
            _(oDV, aLV)
            var aZV = _mz(z, 'button', ['bindtap', 226, 'class', 1, 'disabled', 2, 'style', 3], [], e, s, gg)
            var t1V = _v()
            _(aZV, t1V)
            if (_oz(z, 230, e, s, gg)) {
                t1V.wxVkey = 1
                var e2V = _n('text')
                var b3V = _oz(z, 231, e, s, gg)
                _(e2V, b3V)
                _(t1V, e2V)
            } else if (_oz(z, 232, e, s, gg)) {
                t1V.wxVkey = 2
                var o4V = _n('text')
                var x5V = _oz(z, 233, e, s, gg)
                _(o4V, x5V)
                _(t1V, o4V)
            } else if (_oz(z, 234, e, s, gg)) {
                t1V.wxVkey = 3
                var o6V = _n('text')
                var f7V = _oz(z, 235, e, s, gg)
                _(o6V, f7V)
                _(t1V, o6V)
            }
            t1V.wxXCkey = 1
            _(oDV, aZV)
            fEV.wxXCkey = 1
            _(r, oDV)
            var c8V = _mz(z, 'mx-popup', ['show', 236, 'zIndex', 1], [], e, s, gg)
            var cAW = _mz(z, 'goods-detail', ['bind:updateGoods', 238, 'cart', 1, 'goods', 2, 'show', 3], [], e, s, gg)
            cAW.rawAttr = {"model:show": "{{isShowGoodsDetail}}",};
            _(c8V, cAW)
            var h9V = _v()
            _(c8V, h9V)
            if (_oz(z, 242, e, s, gg)) {
                h9V.wxVkey = 1
                var oBW = _n('view')
                _rz(z, oBW, 'class', 243, e, s, gg)
                var lCW = _n('view')
                _rz(z, lCW, 'class', 244, e, s, gg)
                var aDW = _oz(z, 245, e, s, gg)
                _(lCW, aDW)
                _(oBW, lCW)
                var tEW = _n('view')
                _rz(z, tEW, 'style', 246, e, s, gg)
                var eFW = _mz(z, 'view', ['bindtap', 247, 'class', 1], [], e, s, gg)
                var bGW = _oz(z, 249, e, s, gg)
                _(eFW, bGW)
                _(tEW, eFW)
                var oHW = _mz(z, 'view', ['bindtap', 250, 'class', 1], [], e, s, gg)
                var xIW = _oz(z, 252, e, s, gg)
                _(oHW, xIW)
                _(tEW, oHW)
                _(oBW, tEW)
                _(h9V, oBW)
            }
            var o0V = _v()
            _(c8V, o0V)
            if (_oz(z, 253, e, s, gg)) {
                o0V.wxVkey = 1
                var oJW = _mz(z, 'view', ['class', 254, 'style', 1], [], e, s, gg)
                var fKW = _mz(z, 'image', ['src', 256, 'style', 1], [], e, s, gg)
                _(oJW, fKW)
                var cLW = _n('view')
                _rz(z, cLW, 'class', 258, e, s, gg)
                var hMW = _n('text')
                var oNW = _oz(z, 259, e, s, gg)
                _(hMW, oNW)
                _(cLW, hMW)
                var cOW = _n('text')
                _rz(z, cOW, 'class', 260, e, s, gg)
                var oPW = _oz(z, 261, e, s, gg)
                _(cOW, oPW)
                _(cLW, cOW)
                var lQW = _n('text')
                var aRW = _oz(z, 262, e, s, gg)
                _(lQW, aRW)
                _(cLW, lQW)
                _(oJW, cLW)
                var tSW = _n('view')
                _rz(z, tSW, 'style', 263, e, s, gg)
                var eTW = _mz(z, 'view', ['bindtap', 264, 'class', 1], [], e, s, gg)
                var bUW = _oz(z, 266, e, s, gg)
                _(eTW, bUW)
                _(tSW, eTW)
                var oVW = _mz(z, 'view', ['bindtap', 267, 'class', 1], [], e, s, gg)
                var xWW = _oz(z, 269, e, s, gg)
                _(oVW, xWW)
                _(tSW, oVW)
                _(oJW, tSW)
                _(o0V, oJW)
            }
            h9V.wxXCkey = 1
            o0V.wxXCkey = 1
            _(r, c8V)
            var oXW = _mz(z, 'mx-popup', ['show', 270, 'zIndex', 1], [], e, s, gg)
            var fYW = _mz(z, 'mx-tem-store-error', ['operationTime', 272, 'showClosed', 1, 'showError', 2, 'showOffline', 3], [], e, s, gg)
            _(oXW, fYW)
            _(r, oXW)
            var cZW = _mz(z, 'mx-popup', ['bind:close', 276, 'position', 1, 'show', 2, 'zIndex', 3], [], e, s, gg)
            var h1W = _n('view')
            _rz(z, h1W, 'class', 280, e, s, gg)
            var o2W = _v()
            _(h1W, o2W)
            if (_oz(z, 281, e, s, gg)) {
                o2W.wxVkey = 1
                var c3W = _n('view')
                _rz(z, c3W, 'class', 282, e, s, gg)
                var o4W = _oz(z, 283, e, s, gg)
                _(c3W, o4W)
                _(o2W, c3W)
            }
            var l5W = _n('view')
            _rz(z, l5W, 'class', 284, e, s, gg)
            var a6W = _n('text')
            _rz(z, a6W, 'class', 285, e, s, gg)
            var e8W = _oz(z, 286, e, s, gg)
            _(a6W, e8W)
            var t7W = _v()
            _(a6W, t7W)
            if (_oz(z, 287, e, s, gg)) {
                t7W.wxVkey = 1
                var b9W = _n('text')
                _rz(z, b9W, 'class', 288, e, s, gg)
                var o0W = _oz(z, 289, e, s, gg)
                _(b9W, o0W)
                var xAX = _n('text')
                _rz(z, xAX, 'class', 290, e, s, gg)
                var oBX = _oz(z, 291, e, s, gg)
                _(xAX, oBX)
                _(b9W, xAX)
                var fCX = _oz(z, 292, e, s, gg)
                _(b9W, fCX)
                _(t7W, b9W)
            }
            t7W.wxXCkey = 1
            _(l5W, a6W)
            var cDX = _mz(z, 'view', ['bindtap', 293, 'class', 1], [], e, s, gg)
            var hEX = _n('text')
            _rz(z, hEX, 'class', 295, e, s, gg)
            _(cDX, hEX)
            var oFX = _n('text')
            var cGX = _oz(z, 296, e, s, gg)
            _(oFX, cGX)
            _(cDX, oFX)
            _(l5W, cDX)
            _(h1W, l5W)
            var oHX = _n('view')
            _rz(z, oHX, 'class', 297, e, s, gg)
            var lIX = _v()
            _(oHX, lIX)
            var aJX = function (eLX, tKX, bMX, gg) {
                var xOX = _n('view')
                _rz(z, xOX, 'class', 300, eLX, tKX, gg)
                var oPX = _mz(z, 'image', ['class', 301, 'src', 1], [], eLX, tKX, gg)
                _(xOX, oPX)
                var fQX = _n('view')
                _rz(z, fQX, 'class', 303, eLX, tKX, gg)
                var cRX = _n('text')
                _rz(z, cRX, 'class', 304, eLX, tKX, gg)
                var hSX = _oz(z, 305, eLX, tKX, gg)
                _(cRX, hSX)
                _(fQX, cRX)
                var oTX = _n('text')
                _rz(z, oTX, 'class', 306, eLX, tKX, gg)
                var cUX = _oz(z, 307, eLX, tKX, gg)
                _(oTX, cUX)
                _(fQX, oTX)
                var oVX = _n('view')
                var aXX = _n('text')
                _rz(z, aXX, 'class', 308, eLX, tKX, gg)
                var tYX = _oz(z, 309, eLX, tKX, gg)
                _(aXX, tYX)
                var eZX = _mz(z, 'text', ['class', 310, 'style', 1], [], eLX, tKX, gg)
                var b1X = _oz(z, 312, eLX, tKX, gg)
                _(eZX, b1X)
                _(aXX, eZX)
                _(oVX, aXX)
                var lWX = _v()
                _(oVX, lWX)
                if (_oz(z, 313, eLX, tKX, gg)) {
                    lWX.wxVkey = 1
                    var o2X = _n('text')
                    _rz(z, o2X, 'class', 314, eLX, tKX, gg)
                    var x3X = _oz(z, 315, eLX, tKX, gg)
                    _(o2X, x3X)
                    _(lWX, o2X)
                }
                lWX.wxXCkey = 1
                _(fQX, oVX)
                _(xOX, fQX)
                var o4X = _mz(z, 'view', ['class', 316, 'style', 1], [], eLX, tKX, gg)
                var f5X = _mz(z, 'text', ['bindtap', 318, 'class', 1, 'data-index', 2], [], eLX, tKX, gg)
                _(o4X, f5X)
                var c6X = _n('text')
                _rz(z, c6X, 'class', 321, eLX, tKX, gg)
                var h7X = _oz(z, 322, eLX, tKX, gg)
                _(c6X, h7X)
                _(o4X, c6X)
                var o8X = _mz(z, 'text', ['bindtap', 323, 'class', 1, 'data-index', 2], [], eLX, tKX, gg)
                _(o4X, o8X)
                _(xOX, o4X)
                _(bMX, xOX)
                return bMX
            }
            lIX.wxXCkey = 2
            _2z(z, 298, aJX, e, s, gg, lIX, 'item', 'index', 'productId')
            _(h1W, oHX)
            o2W.wxXCkey = 1
            _(cZW, h1W)
            _(r, cZW)
            var xAQ = _v()
            _(r, xAQ)
            if (_oz(z, 326, e, s, gg)) {
                xAQ.wxVkey = 1
                var c9X = _mz(z, 'mx-ad', ['adData', 327, 'adKey', 1, 'adType', 2, 'style', 3], [], e, s, gg)
                _(xAQ, c9X)
            }
            b9P.wxXCkey = 1
            o0P.wxXCkey = 1
            xAQ.wxXCkey = 1
            xAQ.wxXCkey = 3
            e8P.pop()
            return r
        }
        e_[x[0]] = e_[x[0]] || {f: m0, j: [], i: [], ti: [x[1]], ic: []}
        if (path && e_[path]) {
            outerGlobal.__wxml_comp_version__ = 0.02
            return function (env, dd, global) {
                $gwxc = 0;
                var root = {"tag": "wx-page"};
                root.children = []
                ;g = "$gwx_XC_20";
                var main = e_[path].f
                if (typeof global === "undefined") global = {};
                global.f = $gdc(f_[path], "", 1);
                if (typeof (outerGlobal.__webview_engine_version__) != 'undefined' && outerGlobal.__webview_engine_version__ + 1e-6 >= 0.02 + 1e-6 && outerGlobal.__mergeData__) {
                    env = outerGlobal.__mergeData__(env, dd);
                }
                try {
                    main(env, {}, root, global);
                    _tsd(root)
                    if (typeof (outerGlobal.__webview_engine_version__) == 'undefined' || outerGlobal.__webview_engine_version__ + 1e-6 < 0.01 + 1e-6) {
                        return _ev(root);
                    }
                } catch (err) {
                    console.log(err)
                }
                ;g = "";
                return root;
            }
        }
    }
}(__g.a, __g.b, __g.c, __g.d, __g.e, __g.f, __g.g, __g.h, __g.i, __g.j, __g.k, __g.l, __g.m, __g.n, __g.o, __g.p, __g.q, __g.r, __g.s, __g.t, __g.u, __g.v, __g.w, __g.x, __g.y, __g.z, __g.A, __g.B, __g.C, __g.D, __g.E, __g.F, __g.G, __g.H, __g.I, __g.J, __g.K, __g.L, __g.M, __g.N, __g.O, __g.P, __g.Q, __g.R, __g.S, __g.T, __g.U, __g.V, __g.W, __g.X, __g.Y, __g.Z, __g.aa);
if (__vd_version_info__.delayedGwx || false) $gwx_XC_20();
if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/menu/index.wxml'] = [$gwx_XC_20, './pages/menu/index.wxml']; else __wxAppCode__['pages/menu/index.wxml'] = $gwx_XC_20('./pages/menu/index.wxml');

var noCss = typeof __vd_version_info__ !== 'undefined' && __vd_version_info__.noCss === true;
if (!noCss) {
    __wxAppCode__['pages/menu/index.wxss'] = setCssToHead([[2, "./pages/menu/index.skeleton.wxss"], "body{height:100vh;overflow:hidden}\n.", [1], "navigator{position:relative}\n.", [1], "navigator,.", [1], "navigator .", [1], "search-area{-webkit-box-align:center;-webkit-align-items:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:flex}\n.", [1], "navigator .", [1], "search-area{background:#f1f1f2;border-radius:40px;box-sizing:border-box;height:35px;padding-left:", [0, 16], ";width:", [0, 440], "}\n.", [1], "navigator .", [1], "icon-search{padding:0 ", [0, 16], "}\n.", [1], "store-info{box-sizing:border-box;height:", [0, 140], ";padding:", [0, 24], "}\n.", [1], "store-info .", [1], "mx-ellipsis{max-width:", [0, 560], ";position:relative}\n.", [1], "store-info .", [1], "icon-arrow_right{position:absolute;right:", [0, -4], ";top:", [0, 10], "}\n.", [1], "deliver-img{height:", [0, 24], ";left:0;position:absolute;top:", [0, 6], ";width:", [0, 24], "}\n.", [1], "order-type{background:#e60012;border-radius:", [0, 10], ";color:#fff;line-height:", [0, 56], ";text-align:center;width:", [0, 84], "}\n.", [1], "activity{height:", [0, 56], ";padding:0 ", [0, 28], ";position:relative}\n.", [1], "activity-scroll-item{-webkit-box-align:center;-webkit-align-items:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:flex;height:100%;line-height:", [0, 56], "}\n.", [1], "activity-type{background:#ff5254;border-radius:", [0, 8], ";color:#fff;display:inline-block;font-size:", [0, 20], ";line-height:", [0, 28], ";margin-right:", [0, 10], ";padding:", [0, 2], " ", [0, 6], "}\n.", [1], "activity-detail{background:#fff;box-sizing:border-box;color:#333;left:0;padding:", [0, 40], " ", [0, 32], ";position:absolute;top:0;width:100%;z-index:200}\n.", [1], "detail-arrow-up{position:absolute;right:", [0, 28], ";top:", [0, 14], "}\n.", [1], "mzhd{margin:", [0, 20], " ", [0, 24], ";padding:", [0, 12], " ", [0, 16], ";position:relative}\n.", [1], "mzhd-bg{height:100%;left:0;position:absolute;top:0;width:100%;z-index:-1}\n.", [1], "total-coupon{background:#fff2f4;border-radius:", [0, 100], " 0 0 ", [0, 100], ";height:", [0, 80], ";position:absolute;right:", [0, -4], ";top:", [0, 300], ";width:", [0, 216], ";z-index:99}\n.", [1], "menu-swiper{border-radius:", [0, 12], ";height:", [0, 268], ";margin-bottom:", [0, 24], ";overflow:hidden}\n.", [1], "category-name{background:#fff;box-sizing:border-box;line-height:", [0, 80], ";margin-left:", [0, -20], ";padding-left:", [0, 20], ";position:sticky;position:-webkit-sticky;top:", [0, -4], ";width:calc(100% + ", [0, 32], ");z-index:10}\n.", [1], "goods-item{min-height:", [0, 160], ";padding-left:", [0, 184], ";position:relative}\n.", [1], "goods-item + .", [1], "goods-item{margin-top:", [0, 48], "}\n.", [1], "goods-img{border-radius:", [0, 16], ";height:", [0, 160], ";left:0;position:absolute;top:0;width:", [0, 160], "}\n.", [1], "goods-desc{margin:", [0, 8], " 0;max-width:", [0, 350], ";min-height:", [0, 32], "}\n.", [1], "activity-label{border:", [0, 2], " solid #ff5254;border-radius:", [0, 8], ";color:#ff5254;display:inline-block;max-width:", [0, 210], ";padding:0 ", [0, 4], "}\n.", [1], "normal-buttons,.", [1], "number-buttons{position:absolute;right:", [0, -10], "}\n.", [1], "normal-buttons{background:#e60012;border-radius:", [0, 22], ";bottom:0;color:#fff;height:", [0, 44], ";width:", [0, 120], "}\n.", [1], "sale-out .", [1], "goods-img::after{-webkit-box-align:center;-webkit-box-pack:center;-webkit-align-items:center;align-items:center;background:rgba(0,0,0,.4);color:#fff;content:\x22已售罄\x22;display:-webkit-box;display:-webkit-flex;display:flex;font-size:", [0, 24], ";height:100%;-webkit-justify-content:center;justify-content:center;left:0;position:absolute;top:0;width:100%}\n.", [1], "no-in .", [1], "normal-buttons::before,.", [1], "no-in .", [1], "number-buttons::before,.", [1], "no-out .", [1], "normal-buttons::before,.", [1], "no-out .", [1], "number-buttons::before{color:#aaa;content:\x22不支持外送\x22;font-size:", [0, 20], ";position:absolute;right:", [0, 10], ";visibility:visible;white-space:nowrap}\n.", [1], "no-in .", [1], "normal-buttons::before,.", [1], "no-in .", [1], "number-buttons::before{content:\x22不支持自提\x22}\n.", [1], "no-in .", [1], "iconfont.", [1], "icon-add,.", [1], "no-in .", [1], "normal-buttons,.", [1], "no-out .", [1], "iconfont.", [1], "icon-add,.", [1], "no-out .", [1], "normal-buttons,.", [1], "sale-out .", [1], "iconfont.", [1], "icon-add,.", [1], "sale-out .", [1], "normal-buttons{visibility:hidden}\n.", [1], "icon-btn{padding:", [0, 10], "}\n.", [1], "cart-box{background-color:#fff;bottom:0;height:", [0, 120], ";left:0;padding-left:", [0, 24], ";padding-right:", [0, 24], ";position:fixed;right:0;z-index:199}\n.", [1], "cart-box .", [1], "discount-bar{left:0;position:absolute;top:", [0, -50], ";width:100%}\n.", [1], "cart-img-box{font-size:0;left:", [0, -10], ";position:relative;top:", [0, 2], "}\n.", [1], "cart-box .", [1], "price-box{position:relative;right:", [0, -50], ";text-align:right;width:", [0, 200], "}\n.", [1], "discount-bar{background:#fff2f4;border-top-left-radius:", [0, 20], ";border-top-right-radius:", [0, 20], ";line-height:", [0, 52], ";text-align:center}\n.", [1], "cart-detail .", [1], "title{padding:", [0, 32], " ", [0, 32], " ", [0, 10], "}\n.", [1], "cart-detail .", [1], "content-box{-webkit-overflow-scrolling:touch;box-sizing:border-box;max-height:", [0, 1000], ";overflow-y:scroll;padding:0 ", [0, 24], " ", [0, 160], "}\n.", [1], "cart-detail-goods{display:-webkit-box;display:-webkit-flex;display:flex;margin-top:", [0, 32], ";position:relative}\n.", [1], "cart-detail-img{border-radius:", [0, 12], ";height:", [0, 120], ";margin-right:", [0, 16], ";width:", [0, 120], "}\n.", [1], "cart-detail-goods-text{-webkit-box-orient:vertical;-webkit-box-direction:normal;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-direction:column;flex-direction:column}\n.", [1], "select-item-text{margin:", [0, 8], " 0 ", [0, 12], ";min-height:", [0, 30], "}\n.", [1], "confirm-dialog{text-align:center;width:", [0, 560], "}\n.", [1], "confirm-msg{padding:", [0, 40], "}\n.", [1], "cancel,.", [1], "confirm{-webkit-box-flex:1;-webkit-flex:1;flex:1;line-height:", [0, 90], "}\n.", [1], "c-e6{color:#e6e6e6}\n.", [1], "c-ccc{color:#ccc}\nwx-button[disabled]:not([type]){background-color:#f7f7f7;color:rgba(0,0,0,.3)}\n",], "Some selectors are not allowed in component wxss, including tag name selectors, ID selectors, and attribute selectors.(./pages/menu/index.wxss:1:4675)", {path: "./pages/menu/index.wxss"});
}
$gwx_XC_21 = function (_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
    return function (path, global) {
        if (typeof global === 'undefined') {
            if (typeof __GWX_GLOBAL__ === 'undefined') global = {}; else global = __GWX_GLOBAL__;
        }
        if (typeof __WXML_GLOBAL__ === 'undefined') {
            __WXML_GLOBAL__ = {};
        }
        __WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
        var e_ = {}
        if (typeof (global.entrys) === 'undefined') global.entrys = {};
        e_ = global.entrys;
        var d_ = {}
        if (typeof (global.defines) === 'undefined') global.defines = {};
        d_ = global.defines;
        var f_ = {}
        if (typeof (global.modules) === 'undefined') global.modules = {};
        f_ = global.modules || {};
        var p_ = {}
        __WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
        __WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
        __WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
        var z = __WXML_GLOBAL__.ops_set.$gwx_XC_21 || [];

        function gz$gwx_XC_21_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx_XC_21_1) return __WXML_GLOBAL__.ops_cached.$gwx_XC_21_1
            __WXML_GLOBAL__.ops_cached.$gwx_XC_21_1 = [];
            (function (z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }

                Z([a, [3, 'header-bg level'], [[2, '||'], [[6], [[7], [3, 'userInfo']], [3, 'customerLevel']], [1, 0]]])
                Z([3, 'userInfo'])
                Z([[6], [[7], [3, 'userInfo']], [3, 'mobilePhone']])
                Z([3, 'toProfiles'])
                Z([3, 'avatar'])
                Z([3, '/assets/default_avatar.png'])
                Z([3, 'nickname f18 ml10 mx-multi-ellipsis--l2'])
                Z([a, [[6], [[7], [3, 'userInfo']], [3, 'mobilePhone']]])
                Z([3, 'signTask'])
                Z([a, [3, 'sign-btn flex-center '], [[2, '?:'], [[6], [[7], [3, 'userInfo']], [3, 'isSignin']], [1, 'has-sign'], [1, '']]])
                Z([3, '/assets/calendar.png'])
                Z([3, 'width:34rpx;height:34rpx'])
                Z([[2, '!'], [[6], [[7], [3, 'userInfo']], [3, 'isSignin']]])
                Z([3, 'f12'])
                Z([3, 'margin-left:8rpx'])
                Z([3, '签到'])
                Z(z[13])
                Z(z[14])
                Z([3, '已签'])
                Z([3, 'toRegister'])
                Z(z[4])
                Z([3, '/assets/logo.png'])
                Z([3, 'nickname f14 ml10'])
                Z([3, '登录获得更多会员权益'])
                Z(z[19])
                Z([3, 'auth-btn'])
                Z([3, '授权登录'])
                Z(z[2])
                Z([a, [3, 'level-card mt14 level'], z[0][2]])
                Z([3, 'f24 fb'])
                Z([a, [[6], [[6], [[7], [3, 'userInfo']], [3, 'customerLevelVo']], [3, 'levelName']], [3, '会员']])
                Z(z[13])
                Z([3, 'margin-top:44rpx'])
                Z([a, [3, '甜蜜值：'], [[6], [[7], [3, 'userInfo']], [3, 'growthValue']]])
                Z([[2, '&&'], [[6], [[7], [3, 'userInfo']], [3, 'customerLevelVo']], [[6], [[6], [[7], [3, 'userInfo']], [3, 'customerLevelVo']], [3, 'growthValueMax']]])
                Z([a, [3, '/'], [[6], [[6], [[7], [3, 'userInfo']], [3, 'customerLevelVo']], [3, 'growthValueMax']]])
                Z([3, '#FFFFFF'])
                Z([3, 'rgba(255,255,255,0.4)'])
                Z([3, '4'])
                Z([3, 'progress-bar'])
                Z([[7], [3, 'percentage']])
                Z(z[38])
                Z([3, 'f11'])
                Z([a, [[6], [[7], [3, 'levelTxt']], [[6], [[7], [3, 'userInfo']], [3, 'customerLevel']]]])
                Z([3, 'toRights'])
                Z([3, 'to-rights'])
                Z([3, 'level-img'])
                Z([a, [3, '/assets/level'], [[6], [[7], [3, 'userInfo']], [3, 'customerLevel']], [3, '.png']])
                Z([3, 'f11 ml10'])
                Z([3, '查看权益 '])
                Z([3, 'iconfont icon-arrow_right'])
                Z([3, 'page'])
                Z([3, 'flex-sb mt14'])
                Z([3, 'toCoin'])
                Z([3, 'panel flex-sb coin-panel'])
                Z([3, 'text-box'])
                Z([3, 'f16 fb5'])
                Z([a, [[2, '?:'], [[6], [[7], [3, 'userInfo']], [3, 'mobilePhone']], [[6], [[7], [3, 'userInfo']], [3, 'customerPoint']], [1, '***']]])
                Z([3, 'f11 c-777'])
                Z([3, '雪王币'])
                Z([3, 'item-icon'])
                Z([3, '/assets/coinIcon.png'])
                Z([3, 'toCoupon'])
                Z([3, 'panel flex-sb coupon-panel'])
                Z(z[55])
                Z(z[56])
                Z([a, [[2, '||'], [[2, '&&'], [[6], [[7], [3, 'userInfo']], [3, 'mobilePhone']], [[7], [3, 'couponNum']]], [1, '***']]])
                Z(z[58])
                Z([3, '优惠券'])
                Z(z[60])
                Z([3, '/assets/couponIcon.png'])
                Z([3, 'navigations mt14'])
                Z([[7], [3, 'dataSource']])
                Z([3, 'index'])
                Z([3, 'didSelectCell'])
                Z([3, 'cell flex-sb iconfont icon-arrow_right'])
                Z([[6], [[7], [3, 'item']], [3, 'url']])
                Z([a, [[6], [[7], [3, 'item']], [3, 'title']]])
                Z([[7], [3, 'version']])
                Z([3, 'version f10 c-aaa'])
                Z([a, [3, '版本号：'], [[7], [3, 'version']]])
            })(__WXML_GLOBAL__.ops_cached.$gwx_XC_21_1);
            return __WXML_GLOBAL__.ops_cached.$gwx_XC_21_1
        }

        __WXML_GLOBAL__.ops_set.$gwx_XC_21 = z;
        __WXML_GLOBAL__.ops_init.$gwx_XC_21 = true;
        var x = ['./pages/mine/index.wxml'];
        d_[x[0]] = {}
        var m0 = function (e, s, r, gg) {
            var z = gz$gwx_XC_21_1()
            var aBY = _n('view')
            _rz(z, aBY, 'class', 0, e, s, gg)
            _(r, aBY)
            var tCY = _n('view')
            _rz(z, tCY, 'class', 1, e, s, gg)
            var eDY = _v()
            _(tCY, eDY)
            if (_oz(z, 2, e, s, gg)) {
                eDY.wxVkey = 1
                var bEY = _mz(z, 'image', ['bindtap', 3, 'class', 1, 'src', 2], [], e, s, gg)
                _(eDY, bEY)
                var oFY = _n('text')
                _rz(z, oFY, 'class', 6, e, s, gg)
                var xGY = _oz(z, 7, e, s, gg)
                _(oFY, xGY)
                _(eDY, oFY)
                var oHY = _mz(z, 'view', ['bindtap', 8, 'class', 1], [], e, s, gg)
                var cJY = _mz(z, 'image', ['src', 10, 'style', 1], [], e, s, gg)
                _(oHY, cJY)
                var fIY = _v()
                _(oHY, fIY)
                if (_oz(z, 12, e, s, gg)) {
                    fIY.wxVkey = 1
                    var hKY = _mz(z, 'text', ['class', 13, 'style', 1], [], e, s, gg)
                    var oLY = _oz(z, 15, e, s, gg)
                    _(hKY, oLY)
                    _(fIY, hKY)
                } else {
                    fIY.wxVkey = 2
                    var cMY = _mz(z, 'text', ['class', 16, 'style', 1], [], e, s, gg)
                    var oNY = _oz(z, 18, e, s, gg)
                    _(cMY, oNY)
                    _(fIY, cMY)
                }
                fIY.wxXCkey = 1
                _(eDY, oHY)
            } else {
                eDY.wxVkey = 2
                var lOY = _mz(z, 'image', ['bindtap', 19, 'class', 1, 'src', 2], [], e, s, gg)
                _(eDY, lOY)
                var aPY = _n('text')
                _rz(z, aPY, 'class', 22, e, s, gg)
                var tQY = _oz(z, 23, e, s, gg)
                _(aPY, tQY)
                _(eDY, aPY)
                var eRY = _mz(z, 'button', ['bindtap', 24, 'class', 1], [], e, s, gg)
                var bSY = _oz(z, 26, e, s, gg)
                _(eRY, bSY)
                _(eDY, eRY)
            }
            eDY.wxXCkey = 1
            _(r, tCY)
            var lAY = _v()
            _(r, lAY)
            if (_oz(z, 27, e, s, gg)) {
                lAY.wxVkey = 1
                var oTY = _n('view')
                _rz(z, oTY, 'class', 28, e, s, gg)
                var xUY = _n('text')
                _rz(z, xUY, 'class', 29, e, s, gg)
                var oVY = _oz(z, 30, e, s, gg)
                _(xUY, oVY)
                _(oTY, xUY)
                var fWY = _mz(z, 'view', ['class', 31, 'style', 1], [], e, s, gg)
                var hYY = _n('text')
                var oZY = _oz(z, 33, e, s, gg)
                _(hYY, oZY)
                _(fWY, hYY)
                var cXY = _v()
                _(fWY, cXY)
                if (_oz(z, 34, e, s, gg)) {
                    cXY.wxVkey = 1
                    var c1Y = _n('text')
                    var o2Y = _oz(z, 35, e, s, gg)
                    _(c1Y, o2Y)
                    _(cXY, c1Y)
                }
                cXY.wxXCkey = 1
                _(oTY, fWY)
                var l3Y = _mz(z, 'progress', ['activeColor', 36, 'backgroundColor', 1, 'borderRadius', 2, 'class', 3, 'percent', 4, 'strokeWidth', 5], [], e, s, gg)
                _(oTY, l3Y)
                var a4Y = _n('text')
                _rz(z, a4Y, 'class', 42, e, s, gg)
                var t5Y = _oz(z, 43, e, s, gg)
                _(a4Y, t5Y)
                _(oTY, a4Y)
                var e6Y = _mz(z, 'view', ['bindtap', 44, 'class', 1], [], e, s, gg)
                var b7Y = _mz(z, 'image', ['class', 46, 'src', 1], [], e, s, gg)
                _(e6Y, b7Y)
                var o8Y = _n('view')
                _rz(z, o8Y, 'class', 48, e, s, gg)
                var x9Y = _oz(z, 49, e, s, gg)
                _(o8Y, x9Y)
                var o0Y = _n('text')
                _rz(z, o0Y, 'class', 50, e, s, gg)
                _(o8Y, o0Y)
                _(e6Y, o8Y)
                _(oTY, e6Y)
                _(lAY, oTY)
            }
            var fAZ = _n('view')
            _rz(z, fAZ, 'class', 51, e, s, gg)
            var hCZ = _n('view')
            _rz(z, hCZ, 'class', 52, e, s, gg)
            var oDZ = _mz(z, 'view', ['bindtap', 53, 'class', 1], [], e, s, gg)
            var cEZ = _n('view')
            _rz(z, cEZ, 'class', 55, e, s, gg)
            var oFZ = _n('text')
            _rz(z, oFZ, 'class', 56, e, s, gg)
            var lGZ = _oz(z, 57, e, s, gg)
            _(oFZ, lGZ)
            _(cEZ, oFZ)
            var aHZ = _n('view')
            _rz(z, aHZ, 'class', 58, e, s, gg)
            var tIZ = _oz(z, 59, e, s, gg)
            _(aHZ, tIZ)
            _(cEZ, aHZ)
            _(oDZ, cEZ)
            var eJZ = _mz(z, 'image', ['class', 60, 'src', 1], [], e, s, gg)
            _(oDZ, eJZ)
            _(hCZ, oDZ)
            var bKZ = _mz(z, 'view', ['bindtap', 62, 'class', 1], [], e, s, gg)
            var oLZ = _n('view')
            _rz(z, oLZ, 'class', 64, e, s, gg)
            var xMZ = _n('text')
            _rz(z, xMZ, 'class', 65, e, s, gg)
            var oNZ = _oz(z, 66, e, s, gg)
            _(xMZ, oNZ)
            _(oLZ, xMZ)
            var fOZ = _n('view')
            _rz(z, fOZ, 'class', 67, e, s, gg)
            var cPZ = _oz(z, 68, e, s, gg)
            _(fOZ, cPZ)
            _(oLZ, fOZ)
            _(bKZ, oLZ)
            var hQZ = _mz(z, 'image', ['class', 69, 'src', 1], [], e, s, gg)
            _(bKZ, hQZ)
            _(hCZ, bKZ)
            _(fAZ, hCZ)
            var oRZ = _n('view')
            _rz(z, oRZ, 'class', 71, e, s, gg)
            var cSZ = _v()
            _(oRZ, cSZ)
            var oTZ = function (aVZ, lUZ, tWZ, gg) {
                var bYZ = _mz(z, 'view', ['bindtap', 74, 'class', 1, 'data-url', 2], [], aVZ, lUZ, gg)
                var oZZ = _n('text')
                var x1Z = _oz(z, 77, aVZ, lUZ, gg)
                _(oZZ, x1Z)
                _(bYZ, oZZ)
                _(tWZ, bYZ)
                return tWZ
            }
            cSZ.wxXCkey = 2
            _2z(z, 72, oTZ, e, s, gg, cSZ, 'item', 'index', 'index')
            _(fAZ, oRZ)
            var o2Z = _n('mx-guide-to-app')
            _(fAZ, o2Z)
            var cBZ = _v()
            _(fAZ, cBZ)
            if (_oz(z, 78, e, s, gg)) {
                cBZ.wxVkey = 1
                var f3Z = _n('view')
                _rz(z, f3Z, 'class', 79, e, s, gg)
                var c4Z = _oz(z, 80, e, s, gg)
                _(f3Z, c4Z)
                _(cBZ, f3Z)
            }
            cBZ.wxXCkey = 1
            _(r, fAZ)
            lAY.wxXCkey = 1
            return r
        }
        e_[x[0]] = e_[x[0]] || {f: m0, j: [], i: [], ti: [], ic: []}
        if (path && e_[path]) {
            outerGlobal.__wxml_comp_version__ = 0.02
            return function (env, dd, global) {
                $gwxc = 0;
                var root = {"tag": "wx-page"};
                root.children = []
                ;g = "$gwx_XC_21";
                var main = e_[path].f
                if (typeof global === "undefined") global = {};
                global.f = $gdc(f_[path], "", 1);
                if (typeof (outerGlobal.__webview_engine_version__) != 'undefined' && outerGlobal.__webview_engine_version__ + 1e-6 >= 0.02 + 1e-6 && outerGlobal.__mergeData__) {
                    env = outerGlobal.__mergeData__(env, dd);
                }
                try {
                    main(env, {}, root, global);
                    _tsd(root)
                    if (typeof (outerGlobal.__webview_engine_version__) == 'undefined' || outerGlobal.__webview_engine_version__ + 1e-6 < 0.01 + 1e-6) {
                        return _ev(root);
                    }
                } catch (err) {
                    console.log(err)
                }
                ;g = "";
                return root;
            }
        }
    }
}(__g.a, __g.b, __g.c, __g.d, __g.e, __g.f, __g.g, __g.h, __g.i, __g.j, __g.k, __g.l, __g.m, __g.n, __g.o, __g.p, __g.q, __g.r, __g.s, __g.t, __g.u, __g.v, __g.w, __g.x, __g.y, __g.z, __g.A, __g.B, __g.C, __g.D, __g.E, __g.F, __g.G, __g.H, __g.I, __g.J, __g.K, __g.L, __g.M, __g.N, __g.O, __g.P, __g.Q, __g.R, __g.S, __g.T, __g.U, __g.V, __g.W, __g.X, __g.Y, __g.Z, __g.aa);
if (__vd_version_info__.delayedGwx || false) $gwx_XC_21();
if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/mine/index.wxml'] = [$gwx_XC_21, './pages/mine/index.wxml']; else __wxAppCode__['pages/mine/index.wxml'] = $gwx_XC_21('./pages/mine/index.wxml');

var noCss = typeof __vd_version_info__ !== 'undefined' && __vd_version_info__.noCss === true;
if (!noCss) {
    __wxAppCode__['pages/mine/index.wxss'] = setCssToHead(["body{-webkit-overflow-scrolling:touch;background:#f8f8f8;padding:", [0, 176], " ", [0, 32], " 0;position:relative}\n.", [1], "page{padding-bottom:", [0, 20], "}\n.", [1], "header-bg{background:-webkit-linear-gradient(bottom,snow,#ffe6e6 10%);background:linear-gradient(1turn,snow,#ffe6e6 10%);border-radius:50%;height:", [0, 3050], ";left:", [0, -1150], ";position:fixed;top:", [0, -2556], ";width:", [0, 3050], ";z-index:-1}\n.", [1], "header-bg.", [1], "level2{background:-webkit-linear-gradient(bottom,#fafeff,#d9f2ff 10%);background:linear-gradient(1turn,#fafeff,#d9f2ff 10%)}\n.", [1], "header-bg.", [1], "level3{background:-webkit-linear-gradient(bottom,#fffefa,#fcf1e2 10%);background:linear-gradient(1turn,#fffefa,#fcf1e2 10%)}\n.", [1], "header-bg.", [1], "level4{background:-webkit-linear-gradient(bottom,#fafaf9,#e6e6e6 10%);background:linear-gradient(1turn,#fafaf9,#e6e6e6 10%)}\n.", [1], "userInfo{-webkit-box-align:center;-webkit-align-items:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:flex;position:relative}\n.", [1], "avatar-cover{position:absolute;z-index:99}\n.", [1], "avatar,.", [1], "avatar-cover{height:", [0, 120], ";width:", [0, 120], "}\n.", [1], "avatar{border-radius:", [0, 120], ";overflow:hidden}\n.", [1], "nickname{max-width:", [0, 360], "}\n.", [1], "auth-btn{font-size:", [0, 26], ";height:", [0, 64], ";padding:0 ", [0, 24], "}\n.", [1], "auth-btn,.", [1], "sign-btn{position:absolute;right:0}\n.", [1], "sign-btn{background:-webkit-linear-gradient(top,#ffa4b1,#ff4972);background:linear-gradient(180deg,#ffa4b1,#ff4972);border-radius:", [0, 28], ";color:#fff;height:", [0, 56], ";width:", [0, 128], "}\n.", [1], "sign-btn.", [1], "has-sign{background:#aaa}\n.", [1], "level-card{background:-webkit-linear-gradient(top,#ff99c2,#ff6680);background:linear-gradient(180deg,#ff99c2,#ff6680);border-radius:", [0, 16], ";box-sizing:border-box;color:#fff;height:", [0, 300], ";padding:", [0, 44], " 0 0 ", [0, 36], ";position:relative}\n.", [1], "level-card.", [1], "level2{background:-webkit-linear-gradient(top,#80cfff,#5ea5ed);background:linear-gradient(180deg,#80cfff,#5ea5ed)}\n.", [1], "level-card.", [1], "level3{background:-webkit-linear-gradient(top,#ffd685,#f2bf44);background:linear-gradient(180deg,#ffd685,#f2bf44)}\n.", [1], "level-card.", [1], "level4{background:-webkit-linear-gradient(top,#4d4d4d,#1a1a1a);background:linear-gradient(180deg,#4d4d4d,#1a1a1a);color:#f8e2ba}\n.", [1], "progress-bar{margin:", [0, 10], " 0 ", [0, 16], ";width:", [0, 360], "}\n.", [1], "to-rights{position:absolute;right:", [0, 36], ";top:", [0, 10], "}\n.", [1], "level-img{height:", [0, 180], ";width:", [0, 156], "}\n.", [1], "panel{background-color:#fff;border-radius:", [0, 12], ";box-sizing:border-box;padding:", [0, 18], " ", [0, 24], "}\n.", [1], "coin-panel,.", [1], "coupon-panel{height:", [0, 112], ";width:", [0, 332], "}\n.", [1], "text-box{line-height:1.5}\n.", [1], "item-icon{height:", [0, 64], ";width:", [0, 64], "}\n.", [1], "navigations{border-radius:", [0, 12], ";overflow:hidden}\n.", [1], "cell{background:#fff;font-size:", [0, 28], ";height:", [0, 110], ";padding:0 ", [0, 24], ";position:relative}\n.", [1], "cell-icon{left:", [0, 32], ";position:absolute;top:", [0, 34], "}\n.", [1], "mt14{margin-top:", [0, 28], "}\n.", [1], "version{margin:", [0, 16], " 0;text-align:center}\n",], "Some selectors are not allowed in component wxss, including tag name selectors, ID selectors, and attribute selectors.(./pages/mine/index.wxss:1:1)", {path: "./pages/mine/index.wxss"});
}
$gwx_XC_22 = function (_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
    return function (path, global) {
        if (typeof global === 'undefined') {
            if (typeof __GWX_GLOBAL__ === 'undefined') global = {}; else global = __GWX_GLOBAL__;
        }
        if (typeof __WXML_GLOBAL__ === 'undefined') {
            __WXML_GLOBAL__ = {};
        }
        __WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
        var e_ = {}
        if (typeof (global.entrys) === 'undefined') global.entrys = {};
        e_ = global.entrys;
        var d_ = {}
        if (typeof (global.defines) === 'undefined') global.defines = {};
        d_ = global.defines;
        var f_ = {}
        if (typeof (global.modules) === 'undefined') global.modules = {};
        f_ = global.modules || {};
        var p_ = {}
        __WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
        __WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
        __WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
        var z = __WXML_GLOBAL__.ops_set.$gwx_XC_22 || [];

        function gz$gwx_XC_22_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx_XC_22_1) return __WXML_GLOBAL__.ops_cached.$gwx_XC_22_1
            __WXML_GLOBAL__.ops_cached.$gwx_XC_22_1 = [];
            (function (z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }

                Z([3, 'cellItem'])
                Z([3, 'flex-sb'])
                Z([3, 'toMenuPage'])
                Z([3, 'shop mx-ellipsis'])
                Z([[7], [3, 'shopId']])
                Z([[2, '=='], [[7], [3, 'orderType']], [1, 2]])
                Z([3, 'out'])
                Z([3, '外卖'])
                Z([3, 'shopName'])
                Z([a, [[7], [3, 'shopName']]])
                Z([3, 'iconfont icon-arrow_right f13 fb5'])
                Z([3, 'order-status'])
                Z([[2, '=='], [[7], [3, 'isRefund']], [1, 0]])
                Z([[2, '=='], [[7], [3, 'orderStatus']], [1, 70]])
                Z([3, '已完成'])
                Z([[2, '=='], [[7], [3, 'orderStatus']], [1, 80]])
                Z([3, '已取消'])
                Z([[2, '=='], [[7], [3, 'orderStatus']], [1, 10]])
                Z([3, 'c-theme'])
                Z([3, '待支付'])
                Z([[2, '=='], [[7], [3, 'orderType']], [1, 1]])
                Z([3, '取餐码：'])
                Z(z[18])
                Z([a, [[2, '||'], [[7], [3, 'takeNo']], [1, '']]])
                Z([3, '等待送达'])
                Z([[2, '=='], [[7], [3, 'refundStatus']], [1, 10]])
                Z([3, 'c-aaa'])
                Z([3, '退单申请中'])
                Z([[2, '=='], [[7], [3, 'refundStatus']], [1, 20]])
                Z([3, '已同意退款'])
                Z([[2, '=='], [[7], [3, 'refundStatus']], [1, 30]])
                Z([3, '已退单'])
                Z([[2, '=='], [[7], [3, 'refundStatus']], [1, 31]])
                Z([3, '退单失败'])
                Z([[2, '&&'], [[7], [3, 'mzhdData']], [[6], [[7], [3, 'mzhdData']], [3, 'cupNum']]])
                Z([3, 'f11 mt3 c-theme'])
                Z([[2, '||'], [[6], [[7], [3, 'mzhdData']], [3, 'currentNum']], [[2, '!'], [[6], [[7], [3, 'mzhdData']], [3, 'totalNum']]]])
                Z([3, 'f10 mr5'])
                Z([a, [3, '本店再集'], [[6], [[7], [3, 'mzhdData']], [3, 'needNum']], [3, '杯得'], [[6], [[7], [3, 'mzhdData']], [3, 'awardDesc']]])
                Z(z[37])
                Z([3, '集杯成功，新的集杯任务已开启'])
                Z([[6], [[7], [3, 'mzhdData']], [3, 'cupNum']])
                Z([3, '*this'])
                Z([a, [3, 'c-theme-light iconfont icon-'], [[2, '?:'], [[2, '<'], [[7], [3, 'index']], [[6], [[7], [3, 'mzhdData']], [3, 'currentNum']]], [1, 'checked'], [1, 'unchecked']]])
                Z([3, 'products'])
                Z([3, 'productItem'])
                Z([[7], [3, 'orderDetailList']])
                Z([3, 'unique'])
                Z([[2, '<'], [[7], [3, 'index']], [[7], [3, 'productLimit']]])
                Z([3, 'productImg'])
                Z([[6], [[7], [3, 'productItem']], [3, 'productLogo']])
                Z([[2, '>'], [[6], [[7], [3, 'orderDetailList']], [3, 'length']], [[7], [3, 'productLimit']]])
                Z([3, 'priceBox flex-center'])
                Z([3, '···'])
                Z([3, 'flex-sb f11 mt14'])
                Z(z[26])
                Z([a, [[7], [3, 'orderTime']]])
                Z([3, 'flex-center'])
                Z([3, 'f11 c-999'])
                Z([a, [3, '共'], [[7], [3, 'productCount']], [3, '件']])
                Z([3, 'f14 c-333 ml4'])
                Z([a, [3, '¥ '], [[2, '/'], [[7], [3, 'price']], [1, 100]]])
                Z([3, 'top-wrap'])
                Z([3, 'onChange'])
                Z([[4], [[5], [[5], [[5], [1, '全部']], [1, '历史']], [1, '退单']]])
                Z([3, 'list-container'])
                Z([a, [3, 'left:-'], [[7], [3, 'activeTab']], [3, '00%']])
                Z([3, 'list'])
                Z([[7], [3, 'orderList']])
                Z([3, 'index'])
                Z([3, 'refreshList'])
                Z([3, 'loadMore'])
                Z([3, 'scroll-list'])
                Z([1, 80])
                Z([[7], [3, 'freshTrigger']])
                Z([[7], [3, 'scrollTop']])
                Z([[6], [[6], [[7], [3, 'list']], [3, 'list']], [3, 'length']])
                Z([3, 'cells'])
                Z([[6], [[7], [3, 'list']], [3, 'list']])
                Z([3, 'orderCode'])
                Z([3, 'tapOrder'])
                Z([3, 'cell'])
                Z([[6], [[7], [3, 'item']], [3, 'orderStatus']])
                Z([[6], [[7], [3, 'item']], [3, 'orderType']])
                Z([[6], [[7], [3, 'item']], [3, 'orderCode']])
                Z([[9], [[10], [[7], [3, 'item']]], [[8], 'productLimit', [[7], [3, 'productLimit']]]])
                Z(z[0])
                Z([3, 'f12 c-aaa'])
                Z([3, 'padding: 20rpx 0 60rpx;text-align: center;'])
                Z([a, [[2, '?:'], [[2, '=='], [[6], [[7], [3, 'list']], [3, 'currPage']], [[6], [[7], [3, 'list']], [3, 'totalPage']]], [1, '已经到底了...'], [1, '加载中...']]])
                Z([3, 'empty-view flex-center'])
                Z([3, 'empty-img'])
                Z([3, 'heightFix'])
                Z([3, '/assets/empty_orders.png'])
                Z([3, 'empty-text'])
                Z([3, '您还没有订单，快去选一杯喜欢的饮品吧~'])
                Z([3, 'goDrink'])
                Z([3, 'empty-btn'])
                Z([3, '去喝一杯'])
            })(__WXML_GLOBAL__.ops_cached.$gwx_XC_22_1);
            return __WXML_GLOBAL__.ops_cached.$gwx_XC_22_1
        }

        __WXML_GLOBAL__.ops_set.$gwx_XC_22 = z;
        __WXML_GLOBAL__.ops_init.$gwx_XC_22 = true;
        var x = ['./pages/order/index.wxml'];
        d_[x[0]] = {}
        d_[x[0]]["cellItem"] = function (e, s, r, gg) {
            var z = gz$gwx_XC_22_1()
            var b = x[0] + ':cellItem'
            r.wxVkey = b
            gg.f = $gdc(f_["./pages/order/index.wxml"], "", 1)
            if (p_[b]) {
                _wl(b, x[0]);
                return
            }
            p_[b] = true
            try {
                var xC = _n('view')
                _rz(z, xC, 'class', 1, e, s, gg)
                var oD = _mz(z, 'view', ['catchtap', 2, 'class', 1, 'data-shopid', 2], [], e, s, gg)
                var fE = _v()
                _(oD, fE)
                if (_oz(z, 5, e, s, gg)) {
                    fE.wxVkey = 1
                    var cF = _n('text')
                    _rz(z, cF, 'class', 6, e, s, gg)
                    var hG = _oz(z, 7, e, s, gg)
                    _(cF, hG)
                    _(fE, cF)
                }
                var oH = _n('text')
                _rz(z, oH, 'class', 8, e, s, gg)
                var cI = _oz(z, 9, e, s, gg)
                _(oH, cI)
                _(oD, oH)
                var oJ = _n('text')
                _rz(z, oJ, 'class', 10, e, s, gg)
                _(oD, oJ)
                fE.wxXCkey = 1
                _(xC, oD)
                var lK = _n('view')
                _rz(z, lK, 'class', 11, e, s, gg)
                var aL = _v()
                _(lK, aL)
                if (_oz(z, 12, e, s, gg)) {
                    aL.wxVkey = 1
                    var tM = _v()
                    _(aL, tM)
                    if (_oz(z, 13, e, s, gg)) {
                        tM.wxVkey = 1
                        var eN = _n('text')
                        var bO = _oz(z, 14, e, s, gg)
                        _(eN, bO)
                        _(tM, eN)
                    } else if (_oz(z, 15, e, s, gg)) {
                        tM.wxVkey = 2
                        var oP = _n('text')
                        var xQ = _oz(z, 16, e, s, gg)
                        _(oP, xQ)
                        _(tM, oP)
                    } else if (_oz(z, 17, e, s, gg)) {
                        tM.wxVkey = 3
                        var oR = _n('text')
                        _rz(z, oR, 'class', 18, e, s, gg)
                        var fS = _oz(z, 19, e, s, gg)
                        _(oR, fS)
                        _(tM, oR)
                    } else if (_oz(z, 20, e, s, gg)) {
                        tM.wxVkey = 4
                        var cT = _n('text')
                        var hU = _n('text')
                        var oV = _oz(z, 21, e, s, gg)
                        _(hU, oV)
                        _(cT, hU)
                        var cW = _n('text')
                        _rz(z, cW, 'class', 22, e, s, gg)
                        var oX = _oz(z, 23, e, s, gg)
                        _(cW, oX)
                        _(cT, cW)
                        _(tM, cT)
                    } else {
                        tM.wxVkey = 5
                        var lY = _n('text')
                        var aZ = _oz(z, 24, e, s, gg)
                        _(lY, aZ)
                        _(tM, lY)
                    }
                    tM.wxXCkey = 1
                } else {
                    aL.wxVkey = 2
                    var t1 = _v()
                    _(aL, t1)
                    if (_oz(z, 25, e, s, gg)) {
                        t1.wxVkey = 1
                        var x5 = _n('text')
                        _rz(z, x5, 'class', 26, e, s, gg)
                        var o6 = _oz(z, 27, e, s, gg)
                        _(x5, o6)
                        _(t1, x5)
                    }
                    var e2 = _v()
                    _(aL, e2)
                    if (_oz(z, 28, e, s, gg)) {
                        e2.wxVkey = 1
                        var f7 = _n('text')
                        var c8 = _oz(z, 29, e, s, gg)
                        _(f7, c8)
                        _(e2, f7)
                    }
                    var b3 = _v()
                    _(aL, b3)
                    if (_oz(z, 30, e, s, gg)) {
                        b3.wxVkey = 1
                        var h9 = _n('text')
                        var o0 = _oz(z, 31, e, s, gg)
                        _(h9, o0)
                        _(b3, h9)
                    }
                    var o4 = _v()
                    _(aL, o4)
                    if (_oz(z, 32, e, s, gg)) {
                        o4.wxVkey = 1
                        var cAB = _n('text')
                        var oBB = _oz(z, 33, e, s, gg)
                        _(cAB, oBB)
                        _(o4, cAB)
                    }
                    t1.wxXCkey = 1
                    e2.wxXCkey = 1
                    b3.wxXCkey = 1
                    o4.wxXCkey = 1
                }
                aL.wxXCkey = 1
                _(xC, lK)
                _(r, xC)
                var oB = _v()
                _(r, oB)
                if (_oz(z, 34, e, s, gg)) {
                    oB.wxVkey = 1
                    var lCB = _n('view')
                    _rz(z, lCB, 'class', 35, e, s, gg)
                    var aDB = _v()
                    _(lCB, aDB)
                    if (_oz(z, 36, e, s, gg)) {
                        aDB.wxVkey = 1
                        var tEB = _n('text')
                        _rz(z, tEB, 'class', 37, e, s, gg)
                        var eFB = _oz(z, 38, e, s, gg)
                        _(tEB, eFB)
                        _(aDB, tEB)
                    } else {
                        aDB.wxVkey = 2
                        var bGB = _n('text')
                        _rz(z, bGB, 'class', 39, e, s, gg)
                        var oHB = _oz(z, 40, e, s, gg)
                        _(bGB, oHB)
                        _(aDB, bGB)
                    }
                    var xIB = _v()
                    _(lCB, xIB)
                    var oJB = function (cLB, fKB, hMB, gg) {
                        var cOB = _n('text')
                        _rz(z, cOB, 'class', 43, cLB, fKB, gg)
                        _(hMB, cOB)
                        return hMB
                    }
                    xIB.wxXCkey = 2
                    _2z(z, 41, oJB, e, s, gg, xIB, 'item', 'index', '*this')
                    aDB.wxXCkey = 1
                    _(oB, lCB)
                }
                var oPB = _n('view')
                _rz(z, oPB, 'class', 44, e, s, gg)
                var aRB = _v()
                _(oPB, aRB)
                var tSB = function (bUB, eTB, oVB, gg) {
                    var oXB = _v()
                    _(oVB, oXB)
                    if (_oz(z, 48, bUB, eTB, gg)) {
                        oXB.wxVkey = 1
                        var fYB = _mz(z, 'image', ['class', 49, 'src', 1], [], bUB, eTB, gg)
                        _(oXB, fYB)
                    }
                    oXB.wxXCkey = 1
                    return oVB
                }
                aRB.wxXCkey = 2
                _2z(z, 46, tSB, e, s, gg, aRB, 'productItem', 'index', 'unique')
                var lQB = _v()
                _(oPB, lQB)
                if (_oz(z, 51, e, s, gg)) {
                    lQB.wxVkey = 1
                    var cZB = _n('view')
                    _rz(z, cZB, 'class', 52, e, s, gg)
                    var h1B = _oz(z, 53, e, s, gg)
                    _(cZB, h1B)
                    _(lQB, cZB)
                }
                lQB.wxXCkey = 1
                _(r, oPB)
                var o2B = _n('view')
                _rz(z, o2B, 'class', 54, e, s, gg)
                var c3B = _n('text')
                _rz(z, c3B, 'class', 55, e, s, gg)
                var o4B = _oz(z, 56, e, s, gg)
                _(c3B, o4B)
                _(o2B, c3B)
                var l5B = _n('view')
                _rz(z, l5B, 'class', 57, e, s, gg)
                var a6B = _n('text')
                _rz(z, a6B, 'class', 58, e, s, gg)
                var t7B = _oz(z, 59, e, s, gg)
                _(a6B, t7B)
                _(l5B, a6B)
                var e8B = _n('text')
                _rz(z, e8B, 'class', 60, e, s, gg)
                var b9B = _oz(z, 61, e, s, gg)
                _(e8B, b9B)
                _(l5B, e8B)
                _(o2B, l5B)
                _(r, o2B)
                oB.wxXCkey = 1
            } catch (err) {
                p_[b] = false
                throw err
            }
            p_[b] = false
            return r
        }
        var m0 = function (e, s, r, gg) {
            var z = gz$gwx_XC_22_1()
            var o6Z = _n('view')
            _rz(z, o6Z, 'class', 62, e, s, gg)
            var c7Z = _mz(z, 'mx-tab', ['bindchange', 63, 'tabs', 1], [], e, s, gg)
            _(o6Z, c7Z)
            _(r, o6Z)
            var o8Z = _mz(z, 'view', ['class', 65, 'style', 1], [], e, s, gg)
            var l9Z = _v()
            _(o8Z, l9Z)
            var a0Z = function (eB1, tA1, bC1, gg) {
                var xE1 = _mz(z, 'scroll-view', ['refresherEnabled', -1, 'scrollWithAnimation', -1, 'scrollY', -1, 'bindrefresherrefresh', 70, 'bindscrolltolower', 1, 'class', 2, 'refresherThreshold', 3, 'refresherTriggered', 4, 'scrollTop', 5], [], eB1, tA1, gg)
                var oF1 = _v()
                _(xE1, oF1)
                if (_oz(z, 76, eB1, tA1, gg)) {
                    oF1.wxVkey = 1
                    var fG1 = _n('view')
                    _rz(z, fG1, 'class', 77, eB1, tA1, gg)
                    var cH1 = _v()
                    _(fG1, cH1)
                    var hI1 = function (cK1, oJ1, oL1, gg) {
                        var aN1 = _mz(z, 'view', ['bindtap', 80, 'class', 1, 'data-orderStatus', 2, 'data-orderType', 3, 'data-ordercode', 4], [], cK1, oJ1, gg)
                        var tO1 = _v()
                        _(aN1, tO1)
                        var eP1 = _oz(z, 86, cK1, oJ1, gg)
                        var bQ1 = _gd(x[0], eP1, e_, d_)
                        if (bQ1) {
                            var oR1 = _1z(z, 85, cK1, oJ1, gg) || {}
                            var cur_globalf = gg.f
                            tO1.wxXCkey = 3
                            bQ1(oR1, oR1, tO1, gg)
                            gg.f = cur_globalf
                        } else _w(eP1, x[0], 6, 617)
                        _(oL1, aN1)
                        return oL1
                    }
                    cH1.wxXCkey = 2
                    _2z(z, 78, hI1, eB1, tA1, gg, cH1, 'item', 'index', 'orderCode')
                    var xS1 = _mz(z, 'view', ['class', 87, 'style', 1], [], eB1, tA1, gg)
                    var oT1 = _oz(z, 89, eB1, tA1, gg)
                    _(xS1, oT1)
                    _(fG1, xS1)
                    _(oF1, fG1)
                } else {
                    oF1.wxVkey = 2
                    var fU1 = _n('view')
                    _rz(z, fU1, 'class', 90, eB1, tA1, gg)
                    var cV1 = _mz(z, 'image', ['class', 91, 'mode', 1, 'src', 2], [], eB1, tA1, gg)
                    _(fU1, cV1)
                    var hW1 = _n('text')
                    _rz(z, hW1, 'class', 94, eB1, tA1, gg)
                    var oX1 = _oz(z, 95, eB1, tA1, gg)
                    _(hW1, oX1)
                    _(fU1, hW1)
                    var cY1 = _mz(z, 'button', ['bindtap', 96, 'class', 1], [], eB1, tA1, gg)
                    var oZ1 = _oz(z, 98, eB1, tA1, gg)
                    _(cY1, oZ1)
                    _(fU1, cY1)
                    _(oF1, fU1)
                }
                oF1.wxXCkey = 1
                _(bC1, xE1)
                return bC1
            }
            l9Z.wxXCkey = 2
            _2z(z, 68, a0Z, e, s, gg, l9Z, 'list', 'index', 'index')
            _(r, o8Z)
            return r
        }
        e_[x[0]] = e_[x[0]] || {f: m0, j: [], i: [], ti: [], ic: []}
        if (path && e_[path]) {
            outerGlobal.__wxml_comp_version__ = 0.02
            return function (env, dd, global) {
                $gwxc = 0;
                var root = {"tag": "wx-page"};
                root.children = []
                ;g = "$gwx_XC_22";
                var main = e_[path].f
                if (typeof global === "undefined") global = {};
                global.f = $gdc(f_[path], "", 1);
                if (typeof (outerGlobal.__webview_engine_version__) != 'undefined' && outerGlobal.__webview_engine_version__ + 1e-6 >= 0.02 + 1e-6 && outerGlobal.__mergeData__) {
                    env = outerGlobal.__mergeData__(env, dd);
                }
                try {
                    main(env, {}, root, global);
                    _tsd(root)
                    if (typeof (outerGlobal.__webview_engine_version__) == 'undefined' || outerGlobal.__webview_engine_version__ + 1e-6 < 0.01 + 1e-6) {
                        return _ev(root);
                    }
                } catch (err) {
                    console.log(err)
                }
                ;g = "";
                return root;
            }
        }
    }
}(__g.a, __g.b, __g.c, __g.d, __g.e, __g.f, __g.g, __g.h, __g.i, __g.j, __g.k, __g.l, __g.m, __g.n, __g.o, __g.p, __g.q, __g.r, __g.s, __g.t, __g.u, __g.v, __g.w, __g.x, __g.y, __g.z, __g.A, __g.B, __g.C, __g.D, __g.E, __g.F, __g.G, __g.H, __g.I, __g.J, __g.K, __g.L, __g.M, __g.N, __g.O, __g.P, __g.Q, __g.R, __g.S, __g.T, __g.U, __g.V, __g.W, __g.X, __g.Y, __g.Z, __g.aa);
if (__vd_version_info__.delayedGwx || false) $gwx_XC_22();
if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/order/index.wxml'] = [$gwx_XC_22, './pages/order/index.wxml']; else __wxAppCode__['pages/order/index.wxml'] = $gwx_XC_22('./pages/order/index.wxml');

var noCss = typeof __vd_version_info__ !== 'undefined' && __vd_version_info__.noCss === true;
if (!noCss) {
    __wxAppCode__['pages/order/index.wxss'] = setCssToHead(["body{background-color:#f5f5f5;overflow:hidden}\n.", [1], "top-wrap{background-color:#fff;border-bottom:", [0, 2], " solid #f5f5f5}\n.", [1], "list-container{display:-webkit-box;display:-webkit-flex;display:flex;position:relative;-webkit-transition:left .3s;transition:left .3s;width:300%}\n.", [1], "scroll-list{height:calc(100vh - ", [0, 88], ");position:relative;width:100vw}\n.", [1], "cells{background:#f5f5f5;padding-top:", [0, 24], "}\n.", [1], "cell{-webkit-box-flex:1;background:#fff;border-radius:", [0, 12], ";-webkit-flex:1;flex:1;margin-bottom:", [0, 16], ";margin-left:", [0, 32], ";margin-right:", [0, 32], ";padding:", [0, 24], "}\n.", [1], "cell .", [1], "title{-webkit-box-pack:left;background-color:teal;-webkit-justify-content:left;justify-content:left}\n.", [1], "cell .", [1], "title,.", [1], "shop{-webkit-box-align:center;-webkit-align-items:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:flex}\n.", [1], "shop{max-width:", [0, 530], "}\n.", [1], "out{background:#e60012;border:1px solid #e60012;border-radius:", [0, 4], ";color:#fff;-webkit-flex-shrink:0;flex-shrink:0;font-size:", [0, 20], ";font-weight:600;line-height:", [0, 28], ";margin-right:", [0, 16], ";padding:", [0, 4], " ", [0, 12], "}\n.", [1], "shopName{font-size:", [0, 28], ";font-weight:500;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}\n.", [1], "titleTag{-webkit-box-pack:center;-webkit-box-align:center;-webkit-align-content:center;align-content:center;-webkit-align-items:center;align-items:center;background-color:#ff9f00;border-radius:", [0, 4], ";color:#fff;font-size:", [0, 20], ";font-weight:500;height:", [0, 42], ";-webkit-justify-content:center;justify-content:center;line-height:", [0, 42], ";margin-left:", [0, 4], ";text-align:center;vertical-align:center;width:", [0, 88], "}\n.", [1], "order-status{color:#aaa;-webkit-flex-shrink:0;flex-shrink:0;font-size:", [0, 28], ";margin-left:", [0, 50], "}\n.", [1], "icon-arrow_right{margin-left:", [0, 8], "}\n.", [1], "products{display:-webkit-box;display:-webkit-flex;display:flex;margin-top:", [0, 24], ";width:100%}\n.", [1], "productImg{border-radius:", [0, 12], ";height:", [0, 116], ";margin-right:", [0, 16], ";width:", [0, 116], "}\n.", [1], "productName{-webkit-align-content:center;align-content:center;color:#777;font-size:", [0, 24], ";font-weight:400;line-height:34px;margin-top:", [0, 8], ";max-width:", [0, 150], ";overflow:hidden;text-overflow:ellipsis}\n.", [1], "priceBox{color:#333;margin-left:", [0, 6], ";width:", [0, 116], "}\n.", [1], "psum{-webkit-box-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end;margin-top:", [0, 28], "}\n.", [1], "priceCount,.", [1], "psum{-webkit-box-align:center;-webkit-align-items:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:flex}\n.", [1], "priceCount{-webkit-box-flex:0.5;-webkit-flex:0.5;flex:0.5;width:46%}\n.", [1], "empty-view{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;height:80%}\n.", [1], "empty-text{color:#999;font-size:", [0, 24], ";font-weight:400}\n.", [1], "empty-btn{margin-top:", [0, 42], ";width:", [0, 240], "}\n",], "Some selectors are not allowed in component wxss, including tag name selectors, ID selectors, and attribute selectors.(./pages/order/index.wxss:1:1)", {path: "./pages/order/index.wxss"});
}
$gwx_XC_23 = function (_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
    return function (path, global) {
        if (typeof global === 'undefined') {
            if (typeof __GWX_GLOBAL__ === 'undefined') global = {}; else global = __GWX_GLOBAL__;
        }
        if (typeof __WXML_GLOBAL__ === 'undefined') {
            __WXML_GLOBAL__ = {};
        }
        __WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
        var e_ = {}
        if (typeof (global.entrys) === 'undefined') global.entrys = {};
        e_ = global.entrys;
        var d_ = {}
        if (typeof (global.defines) === 'undefined') global.defines = {};
        d_ = global.defines;
        var f_ = {}
        if (typeof (global.modules) === 'undefined') global.modules = {};
        f_ = global.modules || {};
        var p_ = {}
        __WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
        __WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
        __WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
        var z = __WXML_GLOBAL__.ops_set.$gwx_XC_23 || [];

        function gz$gwx_XC_23_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx_XC_23_1) return __WXML_GLOBAL__.ops_cached.$gwx_XC_23_1
            __WXML_GLOBAL__.ops_cached.$gwx_XC_23_1 = [];
            (function (z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }

                Z([[7], [3, 'options']])
            })(__WXML_GLOBAL__.ops_cached.$gwx_XC_23_1);
            return __WXML_GLOBAL__.ops_cached.$gwx_XC_23_1
        }

        __WXML_GLOBAL__.ops_set.$gwx_XC_23 = z;
        __WXML_GLOBAL__.ops_init.$gwx_XC_23 = true;
        var x = ['./pages/register/index.wxml'];
        d_[x[0]] = {}
        var m0 = function (e, s, r, gg) {
            var z = gz$gwx_XC_23_1()
            var a21 = _n('mx-login')
            _rz(z, a21, 'options', 0, e, s, gg)
            _(r, a21)
            return r
        }
        e_[x[0]] = e_[x[0]] || {f: m0, j: [], i: [], ti: [], ic: []}
        if (path && e_[path]) {
            outerGlobal.__wxml_comp_version__ = 0.02
            return function (env, dd, global) {
                $gwxc = 0;
                var root = {"tag": "wx-page"};
                root.children = []
                ;g = "$gwx_XC_23";
                var main = e_[path].f
                if (typeof global === "undefined") global = {};
                global.f = $gdc(f_[path], "", 1);
                if (typeof (outerGlobal.__webview_engine_version__) != 'undefined' && outerGlobal.__webview_engine_version__ + 1e-6 >= 0.02 + 1e-6 && outerGlobal.__mergeData__) {
                    env = outerGlobal.__mergeData__(env, dd);
                }
                try {
                    main(env, {}, root, global);
                    _tsd(root)
                    if (typeof (outerGlobal.__webview_engine_version__) == 'undefined' || outerGlobal.__webview_engine_version__ + 1e-6 < 0.01 + 1e-6) {
                        return _ev(root);
                    }
                } catch (err) {
                    console.log(err)
                }
                ;g = "";
                return root;
            }
        }
    }
}(__g.a, __g.b, __g.c, __g.d, __g.e, __g.f, __g.g, __g.h, __g.i, __g.j, __g.k, __g.l, __g.m, __g.n, __g.o, __g.p, __g.q, __g.r, __g.s, __g.t, __g.u, __g.v, __g.w, __g.x, __g.y, __g.z, __g.A, __g.B, __g.C, __g.D, __g.E, __g.F, __g.G, __g.H, __g.I, __g.J, __g.K, __g.L, __g.M, __g.N, __g.O, __g.P, __g.Q, __g.R, __g.S, __g.T, __g.U, __g.V, __g.W, __g.X, __g.Y, __g.Z, __g.aa);
if (__vd_version_info__.delayedGwx || false) $gwx_XC_23();
if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/register/index.wxml'] = [$gwx_XC_23, './pages/register/index.wxml']; else __wxAppCode__['pages/register/index.wxml'] = $gwx_XC_23('./pages/register/index.wxml');

var noCss = typeof __vd_version_info__ !== 'undefined' && __vd_version_info__.noCss === true;
if (!noCss) {
    __wxAppCode__['pages/register/index.wxss'] = setCssToHead([], undefined, {path: "./pages/register/index.wxss"});
}
$gwx_XC_24 = function (_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
    return function (path, global) {
        if (typeof global === 'undefined') {
            if (typeof __GWX_GLOBAL__ === 'undefined') global = {}; else global = __GWX_GLOBAL__;
        }
        if (typeof __WXML_GLOBAL__ === 'undefined') {
            __WXML_GLOBAL__ = {};
        }
        __WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
        var e_ = {}
        if (typeof (global.entrys) === 'undefined') global.entrys = {};
        e_ = global.entrys;
        var d_ = {}
        if (typeof (global.defines) === 'undefined') global.defines = {};
        d_ = global.defines;
        var f_ = {}
        if (typeof (global.modules) === 'undefined') global.modules = {};
        f_ = global.modules || {};
        var p_ = {}
        __WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
        __WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
        __WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
        var z = __WXML_GLOBAL__.ops_set.$gwx_XC_24 || [];

        function gz$gwx_XC_24_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx_XC_24_1) return __WXML_GLOBAL__.ops_cached.$gwx_XC_24_1
            __WXML_GLOBAL__.ops_cached.$gwx_XC_24_1 = [];
            (function (z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }

                Z([3, 'flex-center'])
                Z([a, [3, 'height:88rpx;padding-top:'], [[7], [3, 'statusBarHeight']], [3, 'px']])
                Z([3, 'f16 fb5'])
                Z([3, '门店列表'])
                Z([3, 'top_container flex-sb'])
                Z([3, 'tabChange'])
                Z([3, '40'])
                Z([[4], [[5], [[5], [1, '附近门店']], [1, '常去门店']]])
                Z([3, 'chooseLocation'])
                Z([3, 'to-search flex-center f12 c-aaa'])
                Z([[7], [3, 'currentTab']])
                Z([3, 'iconfont icon-search f14'])
                Z([3, 'margin-right:6rpx'])
                Z([3, '搜索门店'])
                Z([[2, '&&'], [[2, '!'], [[7], [3, 'userLocationPermission']]], [[2, '!'], [[6], [[7], [3, 'mapData']], [3, 'longitude']]]])
                Z([3, 'no_permission'])
                Z([3, '/assets/no_location_permission.png'])
                Z([3, 'width:220px;height:220px;align-self: center;'])
                Z([3, 'f12 c-777'])
                Z([3, '未开启定位权限,无法为您匹配附近门店'])
                Z(z[18])
                Z([3, '可手动搜索门店下单'])
                Z([3, 'f12 c-warn mt8'])
                Z([3, '（请先确认微信的位置权限是否开启）'])
                Z([3, 'openSetting'])
                Z([3, 'permission_button'])
                Z([3, '去开启定位信息'])
                Z([3, 'map_container'])
                Z([[2, '!'], [[6], [[7], [3, 'mapData']], [3, 'showMap']]])
                Z([3, 'location-tips flex-sb'])
                Z([[2, '||'], [[7], [3, 'userLocationPermission']], [[7], [3, 'currentTab']]])
                Z(z[0])
                Z([3, '/assets/icon_shop_tip.png'])
                Z([3, 'width:44rpx; height:44rpx;margin-right:12rpx;'])
                Z([3, '开启位置权限以获取更准确门店推荐'])
                Z(z[24])
                Z([3, 'openSetting flex-center'])
                Z([3, '去开启'])
                Z([3, 'map'])
                Z([[6], [[7], [3, 'mapData']], [3, 'latitude']])
                Z([[6], [[7], [3, 'mapData']], [3, 'longitude']])
                Z([[6], [[7], [3, 'mapData']], [3, 'markers']])
                Z([3, '16'])
                Z([3, 'width:100%;height:100%'])
                Z([[2, '&&'], [[2, '!'], [[7], [3, 'currentTab']]], [[7], [3, 'userLocationPermission']]])
                Z([3, 'moveToLocation'])
                Z([3, 'to-location-icon'])
                Z([3, '/assets/icon_shop_locate.png'])
                Z([3, 'packUpMap'])
                Z([3, 'flex-center f12 c-777 mx-hairline--top'])
                Z([3, 'height:70rpx'])
                Z([3, 'margin-right:16rpx'])
                Z([a, [[2, '?:'], [[6], [[7], [3, 'mapData']], [3, 'showMap']], [1, '收起地图'], [1, '展开地图']]])
                Z([a, [3, 'f11 iconfont '], [[2, '?:'], [[6], [[7], [3, 'mapData']], [3, 'showMap']], [1, 'icon-arrow_up'], [1, 'icon-arrow_down']]])
                Z([3, 'shop_container'])
                Z([a, [3, 'height:calc(100% - 260rpx - '], [[2, '*'], [[7], [3, 'statusBarHeight']], [1, 2]], [3, 'rpx - '], [[2, '?:'], [[6], [[7], [3, 'mapData']], [3, 'showMap']], [1, 520], [1, 0]], [3, 'rpx)']])
                Z([[6], [[6], [[6], [[7], [3, 'shops']], [[7], [3, 'currentTab']]], [3, 'data']], [3, 'length']])
                Z([3, 'tab_idx'])
                Z([3, 'list'])
                Z([[7], [3, 'shops']])
                Z(z[57])
                Z([[2, '!='], [[7], [3, 'tab_idx']], [[7], [3, 'currentTab']]])
                Z([3, 'height:100%;'])
                Z([[6], [[6], [[7], [3, 'list']], [3, 'data']], [3, 'length']])
                Z([[6], [[7], [3, 'list']], [3, 'data']])
                Z([3, 'shopId'])
                Z([3, 'clickContactShop'])
                Z([3, 'clickNavigate'])
                Z([3, 'shopTap'])
                Z([[7], [3, 'item']])
                Z([[7], [3, 'tab_idx']])
                Z([[6], [[7], [3, 'item']], [3, 'shopId']])
                Z(z[70])
                Z([3, 'height:100rpx;'])
                Z([[2, '!'], [[6], [[6], [[7], [3, 'shops']], [[7], [3, 'currentTab']]], [3, 'isLoading']]])
                Z([3, 'getShopList'])
                Z([3, 'shop-empty'])
                Z([3, '/assets/img_shop_empty.png'])
                Z([3, 'width:414rpx;height:410rpx'])
                Z([3, 'f10 c-777'])
                Z([3, 'margin-top:-60rpx'])
                Z([a, [[6], [[6], [[7], [3, 'shops']], [[7], [3, 'currentTab']]], [3, 'noShopTxt']]])
                Z([3, 'f12 mt10 c-777'])
                Z([3, 'text-align:center;'])
                Z([3, '加载中...'])
                Z([[7], [3, 'openAnimation']])
                Z([3, 'closeConfirmPopup'])
                Z([3, 'bottom'])
                Z([[7], [3, 'showConfirmPopup']])
                Z([3, '99'])
                Z([3, 'shop_layer'])
                Z([3, 'layer_tip_container'])
                Z([3, 'notice-img'])
                Z(z[32])
                Z([3, 'f12 c-c-theme'])
                Z([3, '我们的门店很多，千万不要选错哦～'])
                Z([3, 'flex-sb'])
                Z([3, 'align-items:start;margin-bottom:10rpx;'])
                Z([3, 'f14 fb'])
                Z([a, [[6], [[7], [3, 'selectedStore']], [3, 'shopName']]])
                Z([3, 'layer-distance f12 c-777'])
                Z([3, '距离'])
                Z([3, 'c-blue'])
                Z([a, [[2, '||'], [[6], [[7], [3, 'selectedStore']], [3, 'distance']], [1, '未知']]])
                Z(z[18])
                Z([a, [[6], [[7], [3, 'selectedStore']], [3, 'shopAddress']]])
                Z([3, 'layer-map'])
                Z([3, 'popupMap'])
                Z([[6], [[7], [3, 'selectedStore']], [3, 'latitude']])
                Z([[6], [[7], [3, 'selectedStore']], [3, 'longitude']])
                Z([[6], [[7], [3, 'selectedStore']], [3, 'markers']])
                Z([3, '17'])
                Z([3, 'confirmShop'])
                Z([3, '进入菜单'])
                Z([3, 'closePopup'])
                Z([[2, '||'], [[7], [3, 'showOfflinePopup']], [[7], [3, 'showClosedPopup']]])
                Z(z[114])
                Z([[6], [[7], [3, 'selectedStore']], [3, 'operationTime']])
                Z([[7], [3, 'showClosedPopup']])
                Z([[7], [3, 'showOfflinePopup']])
                Z(z[85])
                Z(z[86])
                Z(z[87])
                Z([[7], [3, 'showPhoneConfirm']])
                Z([3, 'line-height:104rpx'])
                Z([3, '199'])
                Z([3, 'flex-center f14 c-777 mx-hairline--bottom'])
                Z([3, '联系电话'])
                Z([[7], [3, 'contactPhone']])
                Z([3, '*this'])
                Z([3, 'selectPhone'])
                Z([3, 'flex-center mx-hairline--bottom'])
                Z(z[69])
                Z([a, [[7], [3, 'item']]])
                Z(z[86])
                Z(z[131])
                Z([3, '取消'])
            })(__WXML_GLOBAL__.ops_cached.$gwx_XC_24_1);
            return __WXML_GLOBAL__.ops_cached.$gwx_XC_24_1
        }

        __WXML_GLOBAL__.ops_set.$gwx_XC_24 = z;
        __WXML_GLOBAL__.ops_init.$gwx_XC_24 = true;
        var x = ['./pages/store/index.wxml'];
        d_[x[0]] = {}
        var m0 = function (e, s, r, gg) {
            var z = gz$gwx_XC_24_1()
            var b51 = _mz(z, 'view', ['class', 0, 'style', 1], [], e, s, gg)
            var o61 = _n('text')
            _rz(z, o61, 'class', 2, e, s, gg)
            var x71 = _oz(z, 3, e, s, gg)
            _(o61, x71)
            _(b51, o61)
            _(r, b51)
            var o81 = _n('view')
            _rz(z, o81, 'class', 4, e, s, gg)
            var f91 = _mz(z, 'mx-tab', ['bind:change', 5, 'lineWidth', 1, 'tabs', 2], [], e, s, gg)
            _(o81, f91)
            var c01 = _mz(z, 'view', ['bind:tap', 8, 'class', 1, 'hidden', 2], [], e, s, gg)
            var hA2 = _mz(z, 'text', ['class', 11, 'style', 1], [], e, s, gg)
            _(c01, hA2)
            var oB2 = _n('text')
            var cC2 = _oz(z, 13, e, s, gg)
            _(oB2, cC2)
            _(c01, oB2)
            _(o81, c01)
            _(r, o81)
            var e41 = _v()
            _(r, e41)
            if (_oz(z, 14, e, s, gg)) {
                e41.wxVkey = 1
                var oD2 = _n('view')
                _rz(z, oD2, 'class', 15, e, s, gg)
                var lE2 = _mz(z, 'image', ['src', 16, 'style', 1], [], e, s, gg)
                _(oD2, lE2)
                var aF2 = _n('view')
                _rz(z, aF2, 'class', 18, e, s, gg)
                var tG2 = _oz(z, 19, e, s, gg)
                _(aF2, tG2)
                _(oD2, aF2)
                var eH2 = _n('view')
                _rz(z, eH2, 'class', 20, e, s, gg)
                var bI2 = _oz(z, 21, e, s, gg)
                _(eH2, bI2)
                _(oD2, eH2)
                var oJ2 = _n('view')
                _rz(z, oJ2, 'class', 22, e, s, gg)
                var xK2 = _oz(z, 23, e, s, gg)
                _(oJ2, xK2)
                _(oD2, oJ2)
                var oL2 = _mz(z, 'view', ['catch:tap', 24, 'class', 1], [], e, s, gg)
                var fM2 = _oz(z, 26, e, s, gg)
                _(oL2, fM2)
                _(oD2, oL2)
                _(e41, oD2)
            }
            var cN2 = _mz(z, 'view', ['class', 27, 'hidden', 1], [], e, s, gg)
            var oP2 = _mz(z, 'view', ['class', 29, 'hidden', 1], [], e, s, gg)
            var cQ2 = _n('view')
            _rz(z, cQ2, 'class', 31, e, s, gg)
            var oR2 = _mz(z, 'image', ['src', 32, 'style', 1], [], e, s, gg)
            _(cQ2, oR2)
            var lS2 = _n('text')
            var aT2 = _oz(z, 34, e, s, gg)
            _(lS2, aT2)
            _(cQ2, lS2)
            _(oP2, cQ2)
            var tU2 = _mz(z, 'view', ['catch:tap', 35, 'class', 1], [], e, s, gg)
            var eV2 = _oz(z, 37, e, s, gg)
            _(tU2, eV2)
            _(oP2, tU2)
            _(cN2, oP2)
            var bW2 = _mz(z, 'map', ['showLocation', -1, 'id', 38, 'latitude', 1, 'longitude', 2, 'markers', 3, 'scale', 4, 'style', 5], [], e, s, gg)
            _(cN2, bW2)
            var hO2 = _v()
            _(cN2, hO2)
            if (_oz(z, 44, e, s, gg)) {
                hO2.wxVkey = 1
                var oX2 = _mz(z, 'image', ['catch:tap', 45, 'class', 1, 'src', 2], [], e, s, gg)
                _(hO2, oX2)
            }
            hO2.wxXCkey = 1
            _(r, cN2)
            var xY2 = _mz(z, 'view', ['bind:tap', 48, 'class', 1, 'style', 2], [], e, s, gg)
            var oZ2 = _n('text')
            _rz(z, oZ2, 'style', 51, e, s, gg)
            var f12 = _oz(z, 52, e, s, gg)
            _(oZ2, f12)
            _(xY2, oZ2)
            var c22 = _n('text')
            _rz(z, c22, 'class', 53, e, s, gg)
            _(xY2, c22)
            _(r, xY2)
            var h32 = _mz(z, 'view', ['class', 54, 'style', 1], [], e, s, gg)
            var o42 = _v()
            _(h32, o42)
            if (_oz(z, 56, e, s, gg)) {
                o42.wxVkey = 1
                var c52 = _v()
                _(o42, c52)
                var o62 = function (a82, l72, t92, gg) {
                    var bA3 = _mz(z, 'view', ['hidden', 61, 'style', 1], [], a82, l72, gg)
                    var oB3 = _v()
                    _(bA3, oB3)
                    if (_oz(z, 63, a82, l72, gg)) {
                        oB3.wxVkey = 1
                        var xC3 = _v()
                        _(oB3, xC3)
                        var oD3 = function (cF3, fE3, hG3, gg) {
                            var cI3 = _mz(z, 'mx-shop-item', ['bind:clickContactShop', 66, 'bind:clickNavigate', 1, 'bind:shopTap', 2, 'data', 3, 'data-index', 4, 'data-shop-id', 5, 'index', 6], [], cF3, fE3, gg)
                            _(hG3, cI3)
                            return hG3
                        }
                        xC3.wxXCkey = 4
                        _2z(z, 64, oD3, a82, l72, gg, xC3, 'item', 'index', 'shopId')
                        var oJ3 = _n('view')
                        _rz(z, oJ3, 'style', 73, a82, l72, gg)
                        _(oB3, oJ3)
                    }
                    oB3.wxXCkey = 1
                    oB3.wxXCkey = 3
                    _(t92, bA3)
                    return t92
                }
                c52.wxXCkey = 4
                _2z(z, 59, o62, e, s, gg, c52, 'list', 'tab_idx', 'tab_idx')
            } else if (_oz(z, 74, e, s, gg)) {
                o42.wxVkey = 2
                var lK3 = _mz(z, 'view', ['bind:tap', 75, 'class', 1], [], e, s, gg)
                var aL3 = _mz(z, 'image', ['src', 77, 'style', 1], [], e, s, gg)
                _(lK3, aL3)
                var tM3 = _mz(z, 'text', ['class', 79, 'style', 1], [], e, s, gg)
                var eN3 = _oz(z, 81, e, s, gg)
                _(tM3, eN3)
                _(lK3, tM3)
                _(o42, lK3)
            } else {
                o42.wxVkey = 3
                var bO3 = _mz(z, 'view', ['class', 82, 'style', 1], [], e, s, gg)
                var oP3 = _oz(z, 84, e, s, gg)
                _(bO3, oP3)
                _(o42, bO3)
            }
            o42.wxXCkey = 1
            o42.wxXCkey = 3
            _(r, h32)
            var xQ3 = _mz(z, 'mx-popup', ['animation', 85, 'bind:close', 1, 'position', 2, 'show', 3, 'zIndex', 4], [], e, s, gg)
            var oR3 = _n('view')
            _rz(z, oR3, 'class', 90, e, s, gg)
            var fS3 = _n('view')
            _rz(z, fS3, 'class', 91, e, s, gg)
            var cT3 = _mz(z, 'image', ['class', 92, 'src', 1], [], e, s, gg)
            _(fS3, cT3)
            var hU3 = _n('text')
            _rz(z, hU3, 'class', 94, e, s, gg)
            var oV3 = _oz(z, 95, e, s, gg)
            _(hU3, oV3)
            _(fS3, hU3)
            _(oR3, fS3)
            var cW3 = _mz(z, 'view', ['class', 96, 'style', 1], [], e, s, gg)
            var oX3 = _n('text')
            _rz(z, oX3, 'class', 98, e, s, gg)
            var lY3 = _oz(z, 99, e, s, gg)
            _(oX3, lY3)
            _(cW3, oX3)
            var aZ3 = _n('text')
            _rz(z, aZ3, 'class', 100, e, s, gg)
            var t13 = _oz(z, 101, e, s, gg)
            _(aZ3, t13)
            var e23 = _n('text')
            _rz(z, e23, 'class', 102, e, s, gg)
            var b33 = _oz(z, 103, e, s, gg)
            _(e23, b33)
            _(aZ3, e23)
            _(cW3, aZ3)
            _(oR3, cW3)
            var o43 = _n('view')
            _rz(z, o43, 'class', 104, e, s, gg)
            var x53 = _oz(z, 105, e, s, gg)
            _(o43, x53)
            _(oR3, o43)
            var o63 = _mz(z, 'map', ['class', 106, 'id', 1, 'latitude', 2, 'longitude', 3, 'markers', 4, 'scale', 5], [], e, s, gg)
            _(oR3, o63)
            var f73 = _n('button')
            _rz(z, f73, 'bind:tap', 112, e, s, gg)
            var c83 = _oz(z, 113, e, s, gg)
            _(f73, c83)
            _(oR3, f73)
            _(xQ3, oR3)
            _(r, xQ3)
            var h93 = _mz(z, 'mx-popup', ['bind:close', 114, 'show', 1], [], e, s, gg)
            var o03 = _mz(z, 'mx-tem-store-error', ['bind:close', 116, 'operationTime', 1, 'showClosed', 2, 'showOffline', 3], [], e, s, gg)
            _(h93, o03)
            _(r, h93)
            var cA4 = _mz(z, 'mx-popup', ['animation', 120, 'bind:close', 1, 'position', 2, 'show', 3, 'style', 4, 'zIndex', 5], [], e, s, gg)
            var oB4 = _n('view')
            _rz(z, oB4, 'class', 126, e, s, gg)
            var lC4 = _oz(z, 127, e, s, gg)
            _(oB4, lC4)
            _(cA4, oB4)
            var aD4 = _v()
            _(cA4, aD4)
            var tE4 = function (bG4, eF4, oH4, gg) {
                var oJ4 = _mz(z, 'view', ['bind:tap', 130, 'class', 1, 'data-phone-number', 2], [], bG4, eF4, gg)
                var fK4 = _oz(z, 133, bG4, eF4, gg)
                _(oJ4, fK4)
                _(oH4, oJ4)
                return oH4
            }
            aD4.wxXCkey = 2
            _2z(z, 128, tE4, e, s, gg, aD4, 'item', 'index', '*this')
            var cL4 = _mz(z, 'view', ['bind:tap', 134, 'class', 1], [], e, s, gg)
            var hM4 = _oz(z, 136, e, s, gg)
            _(cL4, hM4)
            _(cA4, cL4)
            _(r, cA4)
            e41.wxXCkey = 1
            return r
        }
        e_[x[0]] = e_[x[0]] || {f: m0, j: [], i: [], ti: [], ic: []}
        if (path && e_[path]) {
            outerGlobal.__wxml_comp_version__ = 0.02
            return function (env, dd, global) {
                $gwxc = 0;
                var root = {"tag": "wx-page"};
                root.children = []
                ;g = "$gwx_XC_24";
                var main = e_[path].f
                if (typeof global === "undefined") global = {};
                global.f = $gdc(f_[path], "", 1);
                if (typeof (outerGlobal.__webview_engine_version__) != 'undefined' && outerGlobal.__webview_engine_version__ + 1e-6 >= 0.02 + 1e-6 && outerGlobal.__mergeData__) {
                    env = outerGlobal.__mergeData__(env, dd);
                }
                try {
                    main(env, {}, root, global);
                    _tsd(root)
                    if (typeof (outerGlobal.__webview_engine_version__) == 'undefined' || outerGlobal.__webview_engine_version__ + 1e-6 < 0.01 + 1e-6) {
                        return _ev(root);
                    }
                } catch (err) {
                    console.log(err)
                }
                ;g = "";
                return root;
            }
        }
    }
}(__g.a, __g.b, __g.c, __g.d, __g.e, __g.f, __g.g, __g.h, __g.i, __g.j, __g.k, __g.l, __g.m, __g.n, __g.o, __g.p, __g.q, __g.r, __g.s, __g.t, __g.u, __g.v, __g.w, __g.x, __g.y, __g.z, __g.A, __g.B, __g.C, __g.D, __g.E, __g.F, __g.G, __g.H, __g.I, __g.J, __g.K, __g.L, __g.M, __g.N, __g.O, __g.P, __g.Q, __g.R, __g.S, __g.T, __g.U, __g.V, __g.W, __g.X, __g.Y, __g.Z, __g.aa);
if (__vd_version_info__.delayedGwx || false) $gwx_XC_24();
if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/store/index.wxml'] = [$gwx_XC_24, './pages/store/index.wxml']; else __wxAppCode__['pages/store/index.wxml'] = $gwx_XC_24('./pages/store/index.wxml');

var noCss = typeof __vd_version_info__ !== 'undefined' && __vd_version_info__.noCss === true;
if (!noCss) {
    __wxAppCode__['pages/store/index.wxss'] = setCssToHead(["body{background-color:#fff;height:100vh;overflow:hidden}\n.", [1], "top_container{padding:0 ", [0, 24], " ", [0, 12], ";position:relative}\n.", [1], "tabs{width:", [0, 300], "!important}\n.", [1], "to-search{background-color:#f5f5f5;border-radius:", [0, 200], ";height:", [0, 60], ";width:", [0, 180], "}\n.", [1], "no_permission{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-box-align:center;-webkit-align-items:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-direction:column;flex-direction:column;height:100%;margin-top:32px}\n.", [1], "permission_button{background-color:#e60012;border-radius:", [0, 12], ";color:#fff;font-size:", [0, 32], ";margin-top:", [0, 80], ";padding-bottom:", [0, 22], ";padding-top:", [0, 22], ";text-align:center;width:", [0, 336], "}\n.", [1], "map_container{height:", [0, 520], ";overflow:hidden;position:relative;width:100%}\n.", [1], "location-tips{background:#fff2f4;color:#333;font-size:", [0, 24], ";font-weight:400;height:", [0, 64], ";padding:0 ", [0, 24], "}\n.", [1], "openSetting{background:#e60012;border-radius:", [0, 8], ";color:#fff;font-size:", [0, 22], ";font-weight:500;height:", [0, 48], ";width:", [0, 96], "}\n.", [1], "to-location-icon{bottom:18px;height:28px;position:absolute;right:10px;width:28px;z-index:9}\n.", [1], "shop_container{-webkit-overflow-scrolling:touch;background-color:#f8f8f8;overflow-x:hidden;overflow-y:scroll;padding:", [0, 24], "}\n.", [1], "shop_layer{background-color:#fff;border-radius:", [0, 28], " ", [0, 28], " 0 0;padding:", [0, 112], " ", [0, 32], " ", [0, 48], "}\n.", [1], "layer-distance{-webkit-box-flex:0;-webkit-flex:0 0 ", [0, 160], ";flex:0 0 ", [0, 160], ";padding-top:", [0, 4], ";text-align:right}\n.", [1], "layer_tip_container{-webkit-box-align:center;-webkit-align-items:center;align-items:center;background-color:#fff0f4;border-radius:", [0, 28], " ", [0, 28], " 0 0;display:-webkit-box;display:-webkit-flex;display:flex;height:", [0, 88], ";left:0;padding-left:15px;position:absolute;right:0;top:0}\n.", [1], "notice-img{height:", [0, 44], ";margin-right:", [0, 14], ";width:", [0, 44], "}\n.", [1], "layer-map{border-radius:", [0, 12], ";height:", [0, 400], ";margin:", [0, 24], " 0;overflow:hidden;width:100%}\n.", [1], "layer_action_group{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-box-pack:center;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-direction:row;flex-direction:row;-webkit-justify-content:center;justify-content:center;margin-top:16px}\n.", [1], "action_cancel_button{border:", [0, 1], " solid#cccccc;border-radius:200px;color:#666;font-size:16px;padding:8px 24px}\n.", [1], "shop-empty{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-box-align:center;-webkit-align-items:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-direction:column;flex-direction:column;height:100%}\n",], "Some selectors are not allowed in component wxss, including tag name selectors, ID selectors, and attribute selectors.(./pages/store/index.wxss:1:1)", {path: "./pages/store/index.wxss"});
}
$gwx_XC_25 = function (_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
    return function (path, global) {
        if (typeof global === 'undefined') {
            if (typeof __GWX_GLOBAL__ === 'undefined') global = {}; else global = __GWX_GLOBAL__;
        }
        if (typeof __WXML_GLOBAL__ === 'undefined') {
            __WXML_GLOBAL__ = {};
        }
        __WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
        var e_ = {}
        if (typeof (global.entrys) === 'undefined') global.entrys = {};
        e_ = global.entrys;
        var d_ = {}
        if (typeof (global.defines) === 'undefined') global.defines = {};
        d_ = global.defines;
        var f_ = {}
        if (typeof (global.modules) === 'undefined') global.modules = {};
        f_ = global.modules || {};
        var p_ = {}
        __WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
        __WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
        __WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
        var z = __WXML_GLOBAL__.ops_set.$gwx_XC_25 || [];

        function gz$gwx_XC_25_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx_XC_25_1) return __WXML_GLOBAL__.ops_cached.$gwx_XC_25_1
            __WXML_GLOBAL__.ops_cached.$gwx_XC_25_1 = [];
            (function (z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }

                Z([[2, '==='], [[7], [3, 'showLogin']], [1, true]])
                Z([3, 'onRegisterBack'])
                Z([1, false])
                Z([[7], [3, 'isThirdActivity']])
                Z([[7], [3, 'options']])
                Z([[2, '==='], [[7], [3, 'showLogin']], [1, false]])
                Z([3, 'bindMessage'])
                Z([[7], [3, 'url']])
            })(__WXML_GLOBAL__.ops_cached.$gwx_XC_25_1);
            return __WXML_GLOBAL__.ops_cached.$gwx_XC_25_1
        }

        __WXML_GLOBAL__.ops_set.$gwx_XC_25 = z;
        __WXML_GLOBAL__.ops_init.$gwx_XC_25 = true;
        var x = ['./pages/webView/index.wxml'];
        d_[x[0]] = {}
        var m0 = function (e, s, r, gg) {
            var z = gz$gwx_XC_25_1()
            var cO4 = _v()
            _(r, cO4)
            if (_oz(z, 0, e, s, gg)) {
                cO4.wxVkey = 1
                var lQ4 = _mz(z, 'mx-login', ['bind:end', 1, 'isNavigateBack', 1, 'isThirdActivity', 2, 'options', 3], [], e, s, gg)
                _(cO4, lQ4)
            }
            var oP4 = _v()
            _(r, oP4)
            if (_oz(z, 5, e, s, gg)) {
                oP4.wxVkey = 1
                var aR4 = _mz(z, 'web-view', ['bindmessage', 6, 'src', 1], [], e, s, gg)
                _(oP4, aR4)
            }
            cO4.wxXCkey = 1
            cO4.wxXCkey = 3
            oP4.wxXCkey = 1
            return r
        }
        e_[x[0]] = e_[x[0]] || {f: m0, j: [], i: [], ti: [], ic: []}
        if (path && e_[path]) {
            outerGlobal.__wxml_comp_version__ = 0.02
            return function (env, dd, global) {
                $gwxc = 0;
                var root = {"tag": "wx-page"};
                root.children = []
                ;g = "$gwx_XC_25";
                var main = e_[path].f
                if (typeof global === "undefined") global = {};
                global.f = $gdc(f_[path], "", 1);
                if (typeof (outerGlobal.__webview_engine_version__) != 'undefined' && outerGlobal.__webview_engine_version__ + 1e-6 >= 0.02 + 1e-6 && outerGlobal.__mergeData__) {
                    env = outerGlobal.__mergeData__(env, dd);
                }
                try {
                    main(env, {}, root, global);
                    _tsd(root)
                    if (typeof (outerGlobal.__webview_engine_version__) == 'undefined' || outerGlobal.__webview_engine_version__ + 1e-6 < 0.01 + 1e-6) {
                        return _ev(root);
                    }
                } catch (err) {
                    console.log(err)
                }
                ;g = "";
                return root;
            }
        }
    }
}(__g.a, __g.b, __g.c, __g.d, __g.e, __g.f, __g.g, __g.h, __g.i, __g.j, __g.k, __g.l, __g.m, __g.n, __g.o, __g.p, __g.q, __g.r, __g.s, __g.t, __g.u, __g.v, __g.w, __g.x, __g.y, __g.z, __g.A, __g.B, __g.C, __g.D, __g.E, __g.F, __g.G, __g.H, __g.I, __g.J, __g.K, __g.L, __g.M, __g.N, __g.O, __g.P, __g.Q, __g.R, __g.S, __g.T, __g.U, __g.V, __g.W, __g.X, __g.Y, __g.Z, __g.aa);
if (__vd_version_info__.delayedGwx || false) $gwx_XC_25();
if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/webView/index.wxml'] = [$gwx_XC_25, './pages/webView/index.wxml']; else __wxAppCode__['pages/webView/index.wxml'] = $gwx_XC_25('./pages/webView/index.wxml');

var noCss = typeof __vd_version_info__ !== 'undefined' && __vd_version_info__.noCss === true;
if (!noCss) {
    __wxAppCode__['pages/webView/index.wxss'] = setCssToHead([], undefined, {path: "./pages/webView/index.wxss"});
}

console.log("re",__GWX_GLOBAL__.entrys)
console.log("rd",__GWX_GLOBAL__.defines)
console.log("rf", __GWX_GLOBAL__.modules)
requireInfo = {}
// x 正则匹配