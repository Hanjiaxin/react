(this.webpackJsonptodolist = this.webpackJsonptodolist || []).push([[2], [function (e, t, c) {
	"use strict";
	e.exports = c(88)
}, function (e, t, c) {
	e.exports = c(94)()
}, function (e, t, c) {
	var n;
	!function () {
		"use strict";
		var c = {}.hasOwnProperty;

		function r() {
			for (var e = [], t = 0; t < arguments.length; t++) {
				var n = arguments[t];
				if (n) {
					var l = typeof n;
					if ("string" === l || "number" === l) e.push(n); else if (Array.isArray(n) && n.length) {
						var o = r.apply(null, n);
						o && e.push(o)
					} else if ("object" === l) for (var a in n) c.call(n, a) && n[a] && e.push(a)
				}
			}
			return e.join(" ")
		}

		e.exports ? (r.default = r, e.exports = r) : void 0 === (n = function () {
			return r
		}.apply(t, [])) || (e.exports = n)
	}()
}, function (e, t, c) {
	"use strict";
	var n = c(0), r = c(2), l = c.n(r), o = c(62), a = c(12), i = c.n(a), u = c(7), s = c.n(u), h = c(80), f = c.n(h),
		v = c(20), p = c.n(v), d = c(21), m = c.n(d), z = c(32), y = c.n(z), b = c(33), M = c.n(b), g = c(24),
		H = {primaryColor: "#333", secondaryColor: "#E6E6E6"}, V = function (e) {
			function t() {
				return p()(this, t), y()(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
			}

			return M()(t, e), m()(t, [{
				key: "render", value: function () {
					var e, c = this.props, n = c.type, r = c.className, l = c.onClick, o = c.style, a = c.primaryColor,
						u = c.secondaryColor,
						h = f()(c, ["type", "className", "onClick", "style", "primaryColor", "secondaryColor"]), v = void 0,
						p = H;
					if (a && (p = {
							primaryColor: a,
							secondaryColor: u || Object(g.c)(a)
						}), Object(g.d)(n)) v = n; else if ("string" === typeof n && !(v = t.get(n, p))) return null;
					return v ? (v && "function" === typeof v.icon && (v = s()({}, v, {icon: v.icon(p.primaryColor, p.secondaryColor)})), Object(g.b)(v.icon, "svg-" + v.name, s()((e = {
						className: r,
						onClick: l,
						style: o
					}, i()(e, "data-icon", v.name), i()(e, "width", "1em"), i()(e, "height", "1em"), i()(e, "fill", "currentColor"), i()(e, "aria-hidden", "true"), i()(e, "focusable", "false"), e), h))) : (Object(g.e)("type should be string or icon definiton, but got " + n), null)
				}
			}], [{
				key: "add", value: function () {
					for (var e = this, t = arguments.length, c = Array(t), n = 0; n < t; n++) c[n] = arguments[n];
					c.forEach((function (t) {
						e.definitions.set(Object(g.f)(t.name, t.theme), t)
					}))
				}
			}, {
				key: "clear", value: function () {
					this.definitions.clear()
				}
			}, {
				key: "get", value: function (e) {
					var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : H;
					if (e) {
						var c = this.definitions.get(e);
						return c && "function" === typeof c.icon && (c = s()({}, c, {icon: c.icon(t.primaryColor, t.secondaryColor)})), c
					}
				}
			}, {
				key: "setTwoToneColors", value: function (e) {
					var t = e.primaryColor, c = e.secondaryColor;
					H.primaryColor = t, H.secondaryColor = c || Object(g.c)(t)
				}
			}, {
				key: "getTwoToneColors", value: function () {
					return s()({}, H)
				}
			}]), t
		}(n.Component);
	V.displayName = "IconReact", V.definitions = new g.a;
	var w = V;

	function C() {
		return (C = Object.assign || function (e) {
			for (var t = 1; t < arguments.length; t++) {
				var c = arguments[t];
				for (var n in c) Object.prototype.hasOwnProperty.call(c, n) && (e[n] = c[n])
			}
			return e
		}).apply(this, arguments)
	}

	var L = function (e, t) {
		var c = {};
		for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (c[n] = e[n]);
		if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
			var r = 0;
			for (n = Object.getOwnPropertySymbols(e); r < n.length; r++) t.indexOf(n[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[r]) && (c[n[r]] = e[n[r]])
		}
		return c
	}, S = new Set;
	var k = c(5), O = {width: "1em", height: "1em", fill: "currentColor", "aria-hidden": !0, focusable: "false"},
		T = /-fill$/, E = /-o$/, x = /-twotone$/;
	var _ = c(44);

	function P(e) {
		return w.setTwoToneColors({primaryColor: e})
	}

	function A() {
		return (A = Object.assign || function (e) {
			for (var t = 1; t < arguments.length; t++) {
				var c = arguments[t];
				for (var n in c) Object.prototype.hasOwnProperty.call(c, n) && (e[n] = c[n])
			}
			return e
		}).apply(this, arguments)
	}

	function F(e, t, c) {
		return t in e ? Object.defineProperty(e, t, {
			value: c,
			enumerable: !0,
			configurable: !0,
			writable: !0
		}) : e[t] = c, e
	}

	var N, j = function (e, t) {
		var c = {};
		for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (c[n] = e[n]);
		if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
			var r = 0;
			for (n = Object.getOwnPropertySymbols(e); r < n.length; r++) t.indexOf(n[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[r]) && (c[n[r]] = e[n[r]])
		}
		return c
	};
	w.add.apply(w, function (e) {
		if (Array.isArray(e)) {
			for (var t = 0, c = new Array(e.length); t < e.length; t++) c[t] = e[t];
			return c
		}
	}(N = Object.keys(o).map((function (e) {
		return o[e]
	}))) || function (e) {
		if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
	}(N) || function () {
		throw new TypeError("Invalid attempt to spread non-iterable instance")
	}()), P("#1890ff");
	var R, D = "outlined";
	var I = function (e) {
		var t, c = e.className, r = e.type, o = e.component, a = e.viewBox, i = e.spin, u = e.rotate, s = e.tabIndex,
			h = e.onClick, f = e.children, v = e.theme, p = e.twoToneColor,
			d = j(e, ["className", "type", "component", "viewBox", "spin", "rotate", "tabIndex", "onClick", "children", "theme", "twoToneColor"]);
		Object(k.a)(Boolean(r || o || f), "Icon", "Should have `type` prop or `component` prop or `children`.");
		var m = l()((F(t = {}, "anticon", !0), F(t, "anticon-".concat(r), Boolean(r)), t), c),
			z = l()(F({}, "anticon-spin", !!i || "loading" === r)),
			y = u ? {msTransform: "rotate(".concat(u, "deg)"), transform: "rotate(".concat(u, "deg)")} : void 0,
			b = A(A({}, O), {className: z, style: y, viewBox: a});
		a || delete b.viewBox;
		var M = function () {
			if (o) return n.createElement(o, b, f);
			if (f) return Object(k.a)(Boolean(a) || 1 === n.Children.count(f) && n.isValidElement(f) && "use" === n.Children.only(f).type, "Icon", "Make sure that you provide correct `viewBox` prop (default `0 0 1024 1024`) to the icon."), n.createElement("svg", A({}, b, {viewBox: a}), f);
			if ("string" === typeof r) {
				var e = r;
				if (v) {
					var t = function (e) {
						var t = null;
						return T.test(e) ? t = "filled" : E.test(e) ? t = "outlined" : x.test(e) && (t = "twoTone"), t
					}(r);
					Object(k.a)(!t || v === t, "Icon", "The icon name '".concat(r, "' already specify a theme '").concat(t, "',") + " the 'theme' prop '".concat(v, "' will be ignored."))
				}
				return e = function (e, t) {
					var c = e;
					return "filled" === t ? c += "-fill" : "outlined" === t ? c += "-o" : "twoTone" === t ? c += "-twotone" : Object(k.a)(!1, "Icon", "This icon '".concat(e, "' has unknown theme '").concat(t, "'")), c
				}(function (e) {
					return e.replace(T, "").replace(E, "").replace(x, "")
				}(function (e) {
					var t = e;
					switch (e) {
						case"cross":
							t = "close";
							break;
						case"interation":
							t = "interaction";
							break;
						case"canlendar":
							t = "calendar";
							break;
						case"colum-height":
							t = "column-height"
					}
					return Object(k.a)(t === e, "Icon", "Icon '".concat(e, "' was a typo and is now deprecated, please use '").concat(t, "' instead.")), t
				}(e)), R || v || D), n.createElement(w, {className: z, type: e, primaryColor: p, style: y})
			}
		}, g = s;
		return void 0 === g && h && (g = -1), n.createElement(_.a, {componentName: "Icon"}, (function (e) {
			return n.createElement("i", A({"aria-label": r && "".concat(e.icon, ": ").concat(r)}, d, {
				tabIndex: g,
				onClick: h,
				className: m
			}), M())
		}))
	};
	I.createFromIconfontCN = function () {
		var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = e.scriptUrl,
			c = e.extraCommonProps, r = void 0 === c ? {} : c;
		if ("undefined" !== typeof document && "undefined" !== typeof window && "function" === typeof document.createElement && "string" === typeof t && t.length && !S.has(t)) {
			var l = document.createElement("script");
			l.setAttribute("src", t), l.setAttribute("data-namespace", t), S.add(t), document.body.appendChild(l)
		}
		var o = function (e) {
			var t = e.type, c = e.children, l = L(e, ["type", "children"]), o = null;
			return e.type && (o = n.createElement("use", {xlinkHref: "#".concat(t)})), c && (o = c), n.createElement(U, C({}, l, r), o)
		};
		return o.displayName = "Iconfont", o
	}, I.getTwoToneColor = function () {
		return w.getTwoToneColors().primaryColor
	}, I.setTwoToneColor = P;
	var U = t.a = I
}, function (e, t, c) {
	"use strict";
	var n = c(7), r = c.n(n);
	t.a = function (e, t) {
		for (var c = r()({}, e), n = 0; n < t.length; n++) {
			delete c[t[n]]
		}
		return c
	}
}, function (e, t, c) {
	"use strict";
	var n = c(61);
	t.a = function (e, t, c) {
		Object(n.a)(e, "[antd: ".concat(t, "] ").concat(c))
	}
}, , function (e, t, c) {
	"use strict";
	t.__esModule = !0;
	var n, r = c(96), l = (n = r) && n.__esModule ? n : {default: n};
	t.default = l.default || function (e) {
		for (var t = 1; t < arguments.length; t++) {
			var c = arguments[t];
			for (var n in c) Object.prototype.hasOwnProperty.call(c, n) && (e[n] = c[n])
		}
		return e
	}
}, function (e, t, c) {
	"use strict";
	var n = {
		transitionstart: {
			transition: "transitionstart",
			WebkitTransition: "webkitTransitionStart",
			MozTransition: "mozTransitionStart",
			OTransition: "oTransitionStart",
			msTransition: "MSTransitionStart"
		},
		animationstart: {
			animation: "animationstart",
			WebkitAnimation: "webkitAnimationStart",
			MozAnimation: "mozAnimationStart",
			OAnimation: "oAnimationStart",
			msAnimation: "MSAnimationStart"
		}
	}, r = {
		transitionend: {
			transition: "transitionend",
			WebkitTransition: "webkitTransitionEnd",
			MozTransition: "mozTransitionEnd",
			OTransition: "oTransitionEnd",
			msTransition: "MSTransitionEnd"
		},
		animationend: {
			animation: "animationend",
			WebkitAnimation: "webkitAnimationEnd",
			MozAnimation: "mozAnimationEnd",
			OAnimation: "oAnimationEnd",
			msAnimation: "MSAnimationEnd"
		}
	}, l = [], o = [];

	function a(e, t, c) {
		e.addEventListener(t, c, !1)
	}

	function i(e, t, c) {
		e.removeEventListener(t, c, !1)
	}

	"undefined" !== typeof window && "undefined" !== typeof document && function () {
		var e = document.createElement("div").style;

		function t(t, c) {
			for (var n in t) if (t.hasOwnProperty(n)) {
				var r = t[n];
				for (var l in r) if (l in e) {
					c.push(r[l]);
					break
				}
			}
		}

		"AnimationEvent" in window || (delete n.animationstart.animation, delete r.animationend.animation), "TransitionEvent" in window || (delete n.transitionstart.transition, delete r.transitionend.transition), t(n, l), t(r, o)
	}();
	var u = {
		startEvents: l, addStartEventListener: function (e, t) {
			0 !== l.length ? l.forEach((function (c) {
				a(e, c, t)
			})) : window.setTimeout(t, 0)
		}, removeStartEventListener: function (e, t) {
			0 !== l.length && l.forEach((function (c) {
				i(e, c, t)
			}))
		}, endEvents: o, addEndEventListener: function (e, t) {
			0 !== o.length ? o.forEach((function (c) {
				a(e, c, t)
			})) : window.setTimeout(t, 0)
		}, removeEndEventListener: function (e, t) {
			0 !== o.length && o.forEach((function (c) {
				i(e, c, t)
			}))
		}
	};
	t.a = u
}, function (e, t, c) {
	"use strict";

	function n() {
		var e = this.constructor.getDerivedStateFromProps(this.props, this.state);
		null !== e && void 0 !== e && this.setState(e)
	}

	function r(e) {
		this.setState(function (t) {
			var c = this.constructor.getDerivedStateFromProps(e, t);
			return null !== c && void 0 !== c ? c : null
		}.bind(this))
	}

	function l(e, t) {
		try {
			var c = this.props, n = this.state;
			this.props = e, this.state = t, this.__reactInternalSnapshotFlag = !0, this.__reactInternalSnapshot = this.getSnapshotBeforeUpdate(c, n)
		} finally {
			this.props = c, this.state = n
		}
	}

	function o(e) {
		var t = e.prototype;
		if (!t || !t.isReactComponent) throw new Error("Can only polyfill class components");
		if ("function" !== typeof e.getDerivedStateFromProps && "function" !== typeof t.getSnapshotBeforeUpdate) return e;
		var c = null, o = null, a = null;
		if ("function" === typeof t.componentWillMount ? c = "componentWillMount" : "function" === typeof t.UNSAFE_componentWillMount && (c = "UNSAFE_componentWillMount"), "function" === typeof t.componentWillReceiveProps ? o = "componentWillReceiveProps" : "function" === typeof t.UNSAFE_componentWillReceiveProps && (o = "UNSAFE_componentWillReceiveProps"), "function" === typeof t.componentWillUpdate ? a = "componentWillUpdate" : "function" === typeof t.UNSAFE_componentWillUpdate && (a = "UNSAFE_componentWillUpdate"), null !== c || null !== o || null !== a) {
			var i = e.displayName || e.name,
				u = "function" === typeof e.getDerivedStateFromProps ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
			throw Error("Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n" + i + " uses " + u + " but also contains the following legacy lifecycles:" + (null !== c ? "\n  " + c : "") + (null !== o ? "\n  " + o : "") + (null !== a ? "\n  " + a : "") + "\n\nThe above lifecycles should be removed. Learn more about this warning here:\nhttps://fb.me/react-async-component-lifecycle-hooks")
		}
		if ("function" === typeof e.getDerivedStateFromProps && (t.componentWillMount = n, t.componentWillReceiveProps = r), "function" === typeof t.getSnapshotBeforeUpdate) {
			if ("function" !== typeof t.componentDidUpdate) throw new Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");
			t.componentWillUpdate = l;
			var s = t.componentDidUpdate;
			t.componentDidUpdate = function (e, t, c) {
				var n = this.__reactInternalSnapshotFlag ? this.__reactInternalSnapshot : c;
				s.call(this, e, t, n)
			}
		}
		return e
	}

	c.d(t, "a", (function () {
		return o
	})), n.__suppressDeprecationWarning = !0, r.__suppressDeprecationWarning = !0, l.__suppressDeprecationWarning = !0
}, function (e, t, c) {
	"use strict";
	c.d(t, "a", (function () {
		return a
	}));
	var n = c(45), r = c.n(n), l = 0, o = {};

	function a(e) {
		var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1, c = l++, n = t;
		return o[c] = r()((function t() {
			(n -= 1) <= 0 ? (e(), delete o[c]) : o[c] = r()(t)
		})), c
	}

	a.cancel = function (e) {
		void 0 !== e && (r.a.cancel(o[e]), delete o[e])
	}, a.ids = o
}, function (e, t, c) {
	"use strict";
	c.d(t, "a", (function () {
		return n
	}));
	var n = function () {
		for (var e = arguments.length, t = new Array(e), c = 0; c < e; c++) t[c] = arguments[c];
		return t
	}
}, function (e, t, c) {
	"use strict";
	t.__esModule = !0;
	var n, r = c(73), l = (n = r) && n.__esModule ? n : {default: n};
	t.default = function (e, t, c) {
		return t in e ? (0, l.default)(e, t, {value: c, enumerable: !0, configurable: !0, writable: !0}) : e[t] = c, e
	}
}, function (e, t) {
	var c = e.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
	"number" == typeof __g && (__g = c)
}, function (e, t) {
	var c = e.exports = {version: "2.6.10"};
	"number" == typeof __e && (__e = c)
}, function (e, t, c) {
	e.exports = !c(36)((function () {
		return 7 != Object.defineProperty({}, "a", {
			get: function () {
				return 7
			}
		}).a
	}))
}, function (e, t, c) {
	"use strict";
	!function e() {
		if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE) {
			0;
			try {
				__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)
			} catch (t) {
				console.error(t)
			}
		}
	}(), e.exports = c(89)
}, function (e, t, c) {
	"use strict";

	function n(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}

	c.d(t, "a", (function () {
		return n
	}))
}, function (e, t, c) {
	"use strict";

	function n(e, t) {
		for (var c = 0; c < t.length; c++) {
			var n = t[c];
			n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
		}
	}

	function r(e, t, c) {
		return t && n(e.prototype, t), c && n(e, c), e
	}

	c.d(t, "a", (function () {
		return r
	}))
}, function (e, t, c) {
	"use strict";

	function n(e) {
		return (n = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
			return e.__proto__ || Object.getPrototypeOf(e)
		})(e)
	}

	c.d(t, "a", (function () {
		return n
	}))
}, function (e, t, c) {
	"use strict";
	t.__esModule = !0, t.default = function (e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}
}, function (e, t, c) {
	"use strict";
	t.__esModule = !0;
	var n, r = c(73), l = (n = r) && n.__esModule ? n : {default: n};
	t.default = function () {
		function e(e, t) {
			for (var c = 0; c < t.length; c++) {
				var n = t[c];
				n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), (0, l.default)(e, n.key, n)
			}
		}

		return function (t, c, n) {
			return c && e(t.prototype, c), n && e(t, n), t
		}
	}()
}, function (e, t, c) {
	"use strict";

	function n(e, t) {
		return (n = Object.setPrototypeOf || function (e, t) {
			return e.__proto__ = t, e
		})(e, t)
	}

	function r(e, t) {
		if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
		e.prototype = Object.create(t && t.prototype, {
			constructor: {
				value: e,
				writable: !0,
				configurable: !0
			}
		}), t && n(e, t)
	}

	c.d(t, "a", (function () {
		return r
	}))
}, function (e, t, c) {
	"use strict";

	function n(e) {
		return (n = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function (e) {
			return typeof e
		} : function (e) {
			return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
		})(e)
	}

	function r(e) {
		return (r = "function" === typeof Symbol && "symbol" === n(Symbol.iterator) ? function (e) {
			return n(e)
		} : function (e) {
			return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : n(e)
		})(e)
	}

	var l = c(43);

	function o(e, t) {
		return !t || "object" !== r(t) && "function" !== typeof t ? Object(l.a)(e) : t
	}

	c.d(t, "a", (function () {
		return o
	}))
}, function (e, t, c) {
	"use strict";
	(function (e) {
		c.d(t, "e", (function () {
			return h
		})), c.d(t, "d", (function () {
			return f
		})), c.d(t, "a", (function () {
			return p
		})), c.d(t, "b", (function () {
			return d
		})), c.d(t, "c", (function () {
			return m
		})), c.d(t, "f", (function () {
			return z
		}));
		var n = c(7), r = c.n(n), l = c(20), o = c.n(l), a = c(21), i = c.n(a), u = c(81), s = c(0);

		function h(t) {
			e && Object({
				NODE_ENV: "production",
				PUBLIC_URL: ""
			}) || console.error("[@ant-design/icons-react]: " + t + ".")
		}

		function f(e) {
			return "object" === typeof e && "string" === typeof e.name && "string" === typeof e.theme && ("object" === typeof e.icon || "function" === typeof e.icon)
		}

		function v() {
			var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
			return Object.keys(e).reduce((function (t, c) {
				var n = e[c];
				switch (c) {
					case"class":
						t.className = n, delete t.class;
						break;
					default:
						t[c] = n
				}
				return t
			}), {})
		}

		var p = function () {
			function e() {
				o()(this, e), this.collection = {}
			}

			return i()(e, [{
				key: "clear", value: function () {
					this.collection = {}
				}
			}, {
				key: "delete", value: function (e) {
					return delete this.collection[e]
				}
			}, {
				key: "get", value: function (e) {
					return this.collection[e]
				}
			}, {
				key: "has", value: function (e) {
					return Boolean(this.collection[e])
				}
			}, {
				key: "set", value: function (e, t) {
					return this.collection[e] = t, this
				}
			}, {
				key: "size", get: function () {
					return Object.keys(this.collection).length
				}
			}]), e
		}();

		function d(e, t, c) {
			return c ? s.createElement(e.tag, r()({key: t}, v(e.attrs), c), (e.children || []).map((function (c, n) {
				return d(c, t + "-" + e.tag + "-" + n)
			}))) : s.createElement(e.tag, r()({key: t}, v(e.attrs)), (e.children || []).map((function (c, n) {
				return d(c, t + "-" + e.tag + "-" + n)
			})))
		}

		function m(e) {
			return Object(u.generate)(e)[0]
		}

		function z(e, t) {
			switch (t) {
				case"fill":
					return e + "-fill";
				case"outline":
					return e + "-o";
				case"twotone":
					return e + "-twotone";
				default:
					throw new TypeError("Unknown theme type: " + t + ", name: " + e)
			}
		}
	}).call(this, c(78))
}, function (e, t, c) {
	var n = c(35), r = c(68), l = c(47), o = Object.defineProperty;
	t.f = c(15) ? Object.defineProperty : function (e, t, c) {
		if (n(e), t = l(t, !0), n(c), r) try {
			return o(e, t, c)
		} catch (a) {
		}
		if ("get" in c || "set" in c) throw TypeError("Accessors not supported!");
		return "value" in c && (e[t] = c.value), e
	}
}, function (e, t) {
	var c = {}.hasOwnProperty;
	e.exports = function (e, t) {
		return c.call(e, t)
	}
}, function (e, t, c) {
	var n = c(13), r = c(14), l = c(67), o = c(28), a = c(26), i = function e(t, c, i) {
		var u, s, h, f = t & e.F, v = t & e.G, p = t & e.S, d = t & e.P, m = t & e.B, z = t & e.W,
			y = v ? r : r[c] || (r[c] = {}), b = y.prototype, M = v ? n : p ? n[c] : (n[c] || {}).prototype;
		for (u in v && (i = c), i) (s = !f && M && void 0 !== M[u]) && a(y, u) || (h = s ? M[u] : i[u], y[u] = v && "function" != typeof M[u] ? i[u] : m && s ? l(h, n) : z && M[u] == h ? function (e) {
			var t = function (t, c, n) {
				if (this instanceof e) {
					switch (arguments.length) {
						case 0:
							return new e;
						case 1:
							return new e(t);
						case 2:
							return new e(t, c)
					}
					return new e(t, c, n)
				}
				return e.apply(this, arguments)
			};
			return t.prototype = e.prototype, t
		}(h) : d && "function" == typeof h ? l(Function.call, h) : h, d && ((y.virtual || (y.virtual = {}))[u] = h, t & e.R && b && !b[u] && o(b, u, h)))
	};
	i.F = 1, i.G = 2, i.S = 4, i.P = 8, i.B = 16, i.W = 32, i.U = 64, i.R = 128, e.exports = i
}, function (e, t, c) {
	var n = c(25), r = c(37);
	e.exports = c(15) ? function (e, t, c) {
		return n.f(e, t, r(1, c))
	} : function (e, t, c) {
		return e[t] = c, e
	}
}, function (e, t) {
	e.exports = function (e) {
		return "object" === typeof e ? null !== e : "function" === typeof e
	}
}, function (e, t, c) {
	var n = c(71), r = c(48);
	e.exports = function (e) {
		return n(r(e))
	}
}, function (e, t, c) {
	var n = c(51)("wks"), r = c(40), l = c(13).Symbol, o = "function" == typeof l;
	(e.exports = function (e) {
		return n[e] || (n[e] = o && l[e] || (o ? l : r)("Symbol." + e))
	}).store = n
}, function (e, t, c) {
	"use strict";
	t.__esModule = !0;
	var n, r = c(42), l = (n = r) && n.__esModule ? n : {default: n};
	t.default = function (e, t) {
		if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return !t || "object" !== ("undefined" === typeof t ? "undefined" : (0, l.default)(t)) && "function" !== typeof t ? e : t
	}
}, function (e, t, c) {
	"use strict";
	t.__esModule = !0;
	var n = o(c(128)), r = o(c(132)), l = o(c(42));

	function o(e) {
		return e && e.__esModule ? e : {default: e}
	}

	t.default = function (e, t) {
		if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + ("undefined" === typeof t ? "undefined" : (0, l.default)(t)));
		e.prototype = (0, r.default)(t && t.prototype, {
			constructor: {
				value: e,
				enumerable: !1,
				writable: !0,
				configurable: !0
			}
		}), t && (n.default ? (0, n.default)(e, t) : e.__proto__ = t)
	}
}, function (e, t, c) {
	"use strict";
	t.__esModule = !0;
	var n = l(c(0)), r = l(c(137));

	function l(e) {
		return e && e.__esModule ? e : {default: e}
	}

	t.default = n.default.createContext || r.default, e.exports = t.default
}, function (e, t, c) {
	var n = c(29);
	e.exports = function (e) {
		if (!n(e)) throw TypeError(e + " is not an object!");
		return e
	}
}, function (e, t) {
	e.exports = function (e) {
		try {
			return !!e()
		} catch (t) {
			return !0
		}
	}
}, function (e, t) {
	e.exports = function (e, t) {
		return {enumerable: !(1 & e), configurable: !(2 & e), writable: !(4 & e), value: t}
	}
}, function (e, t, c) {
	var n = c(70), r = c(52);
	e.exports = Object.keys || function (e) {
		return n(e, r)
	}
}, function (e, t) {
	e.exports = !0
}, function (e, t) {
	var c = 0, n = Math.random();
	e.exports = function (e) {
		return "Symbol(".concat(void 0 === e ? "" : e, ")_", (++c + n).toString(36))
	}
}, function (e, t) {
	t.f = {}.propertyIsEnumerable
}, function (e, t, c) {
	"use strict";
	t.__esModule = !0;
	var n = o(c(106)), r = o(c(118)),
		l = "function" === typeof r.default && "symbol" === typeof n.default ? function (e) {
			return typeof e
		} : function (e) {
			return e && "function" === typeof r.default && e.constructor === r.default && e !== r.default.prototype ? "symbol" : typeof e
		};

	function o(e) {
		return e && e.__esModule ? e : {default: e}
	}

	t.default = "function" === typeof r.default && "symbol" === l(n.default) ? function (e) {
		return "undefined" === typeof e ? "undefined" : l(e)
	} : function (e) {
		return e && "function" === typeof r.default && e.constructor === r.default && e !== r.default.prototype ? "symbol" : "undefined" === typeof e ? "undefined" : l(e)
	}
}, function (e, t, c) {
	"use strict";

	function n(e) {
		if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return e
	}

	c.d(t, "a", (function () {
		return n
	}))
}, function (e, t, c) {
	"use strict";
	var n = c(0), r = c(1), l = {placeholder: "Select time"};

	function o() {
		return (o = Object.assign || function (e) {
			for (var t = 1; t < arguments.length; t++) {
				var c = arguments[t];
				for (var n in c) Object.prototype.hasOwnProperty.call(c, n) && (e[n] = c[n])
			}
			return e
		}).apply(this, arguments)
	}

	var a = {
		lang: o({placeholder: "Select date", rangePlaceholder: ["Start date", "End date"]}, c(82).a),
		timePickerLocale: o({}, l)
	}, i = {
		locale: "en",
		Pagination: {
			items_per_page: "/ page",
			jump_to: "Goto",
			jump_to_confirm: "confirm",
			page: "",
			prev_page: "Previous Page",
			next_page: "Next Page",
			prev_5: "Previous 5 Pages",
			next_5: "Next 5 Pages",
			prev_3: "Previous 3 Pages",
			next_3: "Next 3 Pages"
		},
		DatePicker: a,
		TimePicker: l,
		Calendar: a,
		global: {placeholder: "Please select"},
		Table: {
			filterTitle: "Filter menu",
			filterConfirm: "OK",
			filterReset: "Reset",
			selectAll: "Select current page",
			selectInvert: "Invert current page",
			sortTitle: "Sort",
			expand: "Expand row",
			collapse: "Collapse row"
		},
		Modal: {okText: "OK", cancelText: "Cancel", justOkText: "OK"},
		Popconfirm: {okText: "OK", cancelText: "Cancel"},
		Transfer: {titles: ["", ""], searchPlaceholder: "Search here", itemUnit: "item", itemsUnit: "items"},
		Upload: {
			uploading: "Uploading...",
			removeFile: "Remove file",
			uploadError: "Upload error",
			previewFile: "Preview file",
			downloadFile: "Download file"
		},
		Empty: {description: "No Data"},
		Icon: {icon: "icon"},
		Text: {edit: "Edit", copy: "Copy", copied: "Copied", expand: "Expand"},
		PageHeader: {back: "Back"}
	};

	function u(e) {
		return (u = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function (e) {
			return typeof e
		} : function (e) {
			return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
		})(e)
	}

	function s() {
		return (s = Object.assign || function (e) {
			for (var t = 1; t < arguments.length; t++) {
				var c = arguments[t];
				for (var n in c) Object.prototype.hasOwnProperty.call(c, n) && (e[n] = c[n])
			}
			return e
		}).apply(this, arguments)
	}

	function h(e, t) {
		for (var c = 0; c < t.length; c++) {
			var n = t[c];
			n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
		}
	}

	function f(e, t) {
		return !t || "object" !== u(t) && "function" !== typeof t ? function (e) {
			if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return e
		}(e) : t
	}

	function v(e) {
		return (v = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
			return e.__proto__ || Object.getPrototypeOf(e)
		})(e)
	}

	function p(e, t) {
		return (p = Object.setPrototypeOf || function (e, t) {
			return e.__proto__ = t, e
		})(e, t)
	}

	c.d(t, "a", (function () {
		return d
	}));
	var d = function (e) {
		function t() {
			return function (e, t) {
				if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
			}(this, t), f(this, v(t).apply(this, arguments))
		}

		var c, n, r;
		return function (e, t) {
			if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
			e.prototype = Object.create(t && t.prototype, {
				constructor: {
					value: e,
					writable: !0,
					configurable: !0
				}
			}), t && p(e, t)
		}(t, e), c = t, (n = [{
			key: "getLocale", value: function () {
				var e = this.props, t = e.componentName, c = e.defaultLocale || i[t || "global"],
					n = this.context.antLocale, r = t && n ? n[t] : {};
				return s(s({}, "function" === typeof c ? c() : c), r || {})
			}
		}, {
			key: "getLocaleCode", value: function () {
				var e = this.context.antLocale, t = e && e.locale;
				return e && e.exist && !t ? i.locale : t
			}
		}, {
			key: "render", value: function () {
				return this.props.children(this.getLocale(), this.getLocaleCode(), this.context.antLocale)
			}
		}]) && h(c.prototype, n), r && h(c, r), t
	}(n.Component);
	d.defaultProps = {componentName: "global"}, d.contextTypes = {antLocale: r.object}
}, function (e, t, c) {
	(function (t) {
		for (var n = c(140), r = "undefined" === typeof window ? t : window, l = ["moz", "webkit"], o = "AnimationFrame", a = r["request" + o], i = r["cancel" + o] || r["cancelRequest" + o], u = 0; !a && u < l.length; u++) a = r[l[u] + "Request" + o], i = r[l[u] + "Cancel" + o] || r[l[u] + "CancelRequest" + o];
		if (!a || !i) {
			var s = 0, h = 0, f = [];
			a = function (e) {
				if (0 === f.length) {
					var t = n(), c = Math.max(0, 1e3 / 60 - (t - s));
					s = c + t, setTimeout((function () {
						var e = f.slice(0);
						f.length = 0;
						for (var t = 0; t < e.length; t++) if (!e[t].cancelled) try {
							e[t].callback(s)
						} catch (c) {
							setTimeout((function () {
								throw c
							}), 0)
						}
					}), Math.round(c))
				}
				return f.push({handle: ++h, callback: e, cancelled: !1}), h
			}, i = function (e) {
				for (var t = 0; t < f.length; t++) f[t].handle === e && (f[t].cancelled = !0)
			}
		}
		e.exports = function (e) {
			return a.call(r, e)
		}, e.exports.cancel = function () {
			i.apply(r, arguments)
		}, e.exports.polyfill = function (e) {
			e || (e = r), e.requestAnimationFrame = a, e.cancelAnimationFrame = i
		}
	}).call(this, c(60))
}, function (e, t, c) {
	"use strict";

	function n(e) {
		return function (e) {
			if (Array.isArray(e)) {
				for (var t = 0, c = new Array(e.length); t < e.length; t++) c[t] = e[t];
				return c
			}
		}(e) || function (e) {
			if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
		}(e) || function () {
			throw new TypeError("Invalid attempt to spread non-iterable instance")
		}()
	}

	c.d(t, "a", (function () {
		return n
	}))
}, function (e, t, c) {
	var n = c(29);
	e.exports = function (e, t) {
		if (!n(e)) return e;
		var c, r;
		if (t && "function" == typeof(c = e.toString) && !n(r = c.call(e))) return r;
		if ("function" == typeof(c = e.valueOf) && !n(r = c.call(e))) return r;
		if (!t && "function" == typeof(c = e.toString) && !n(r = c.call(e))) return r;
		throw TypeError("Can't convert object to primitive value")
	}
}, function (e, t) {
	e.exports = function (e) {
		if (void 0 == e) throw TypeError("Can't call method on  " + e);
		return e
	}
}, function (e, t) {
	var c = Math.ceil, n = Math.floor;
	e.exports = function (e) {
		return isNaN(e = +e) ? 0 : (e > 0 ? n : c)(e)
	}
}, function (e, t, c) {
	var n = c(51)("keys"), r = c(40);
	e.exports = function (e) {
		return n[e] || (n[e] = r(e))
	}
}, function (e, t, c) {
	var n = c(14), r = c(13), l = r["__core-js_shared__"] || (r["__core-js_shared__"] = {});
	(e.exports = function (e, t) {
		return l[e] || (l[e] = void 0 !== t ? t : {})
	})("versions", []).push({
		version: n.version,
		mode: c(39) ? "pure" : "global",
		copyright: "\xa9 2019 Denis Pushkarev (zloirock.ru)"
	})
}, function (e, t) {
	e.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
}, function (e, t) {
	t.f = Object.getOwnPropertySymbols
}, function (e, t, c) {
	var n = c(48);
	e.exports = function (e) {
		return Object(n(e))
	}
}, function (e, t) {
	e.exports = {}
}, function (e, t, c) {
	var n = c(35), r = c(111), l = c(52), o = c(50)("IE_PROTO"), a = function () {
	}, i = function () {
		var e, t = c(69)("iframe"), n = l.length;
		for (t.style.display = "none", c(112).appendChild(t), t.src = "javascript:", (e = t.contentWindow.document).open(), e.write("<script>document.F=Object<\/script>"), e.close(), i = e.F; n--;) delete i.prototype[l[n]];
		return i()
	};
	e.exports = Object.create || function (e, t) {
		var c;
		return null !== e ? (a.prototype = n(e), c = new a, a.prototype = null, c[o] = e) : c = i(), void 0 === t ? c : r(c, t)
	}
}, function (e, t, c) {
	var n = c(25).f, r = c(26), l = c(31)("toStringTag");
	e.exports = function (e, t, c) {
		e && !r(e = c ? e : e.prototype, l) && n(e, l, {configurable: !0, value: t})
	}
}, function (e, t, c) {
	t.f = c(31)
}, function (e, t, c) {
	var n = c(13), r = c(14), l = c(39), o = c(58), a = c(25).f;
	e.exports = function (e) {
		var t = r.Symbol || (r.Symbol = l ? {} : n.Symbol || {});
		"_" == e.charAt(0) || e in t || a(t, e, {value: o.f(e)})
	}
}, function (e, t) {
	var c;
	c = function () {
		return this
	}();
	try {
		c = c || new Function("return this")()
	} catch (n) {
		"object" === typeof window && (c = window)
	}
	e.exports = c
}, function (e, t, c) {
	"use strict";
	var n = {};

	function r(e, t) {
		0
	}

	function l(e, t, c) {
		t || n[c] || (e(!1, c), n[c] = !0)
	}

	t.a = function (e, t) {
		l(r, e, t)
	}
}, function (e, t, c) {
	"use strict";
	Object.defineProperty(t, "__esModule", {value: !0});
	var n = "0 0 1024 1024", r = "64 64 896 896", l = "fill", o = "outline", a = "twotone";

	function i(e) {
		for (var t = [], c = 1; c < arguments.length; c++) t[c - 1] = arguments[c];
		return {
			tag: "svg", attrs: {viewBox: e, focusable: !1}, children: t.map((function (e) {
				return Array.isArray(e) ? {tag: "path", attrs: {fill: e[0], d: e[1]}} : {tag: "path", attrs: {d: e}}
			}))
		}
	}

	function u(e, t, c) {
		return {name: e, theme: t, icon: c}
	}

	t.AccountBookFill = u("account-book", l, i(r, "M880 184H712v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H384v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H144c-17.7 0-32 14.3-32 32v664c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V216c0-17.7-14.3-32-32-32zM648.3 426.8l-87.7 161.1h45.7c5.5 0 10 4.5 10 10v21.3c0 5.5-4.5 10-10 10h-63.4v29.7h63.4c5.5 0 10 4.5 10 10v21.3c0 5.5-4.5 10-10 10h-63.4V752c0 5.5-4.5 10-10 10h-41.3c-5.5 0-10-4.5-10-10v-51.8h-63.1c-5.5 0-10-4.5-10-10v-21.3c0-5.5 4.5-10 10-10h63.1v-29.7h-63.1c-5.5 0-10-4.5-10-10v-21.3c0-5.5 4.5-10 10-10h45.2l-88-161.1c-2.6-4.8-.9-10.9 4-13.6 1.5-.8 3.1-1.2 4.8-1.2h46c3.8 0 7.2 2.1 8.9 5.5l72.9 144.3 73.2-144.3a10 10 0 0 1 8.9-5.5h45c5.5 0 10 4.5 10 10 .1 1.7-.3 3.3-1.1 4.8z")), t.AlertFill = u("alert", l, i(r, "M512 244c176.18 0 319 142.82 319 319v233a32 32 0 0 1-32 32H225a32 32 0 0 1-32-32V563c0-176.18 142.82-319 319-319zM484 68h56a8 8 0 0 1 8 8v96a8 8 0 0 1-8 8h-56a8 8 0 0 1-8-8V76a8 8 0 0 1 8-8zM177.25 191.66a8 8 0 0 1 11.32 0l67.88 67.88a8 8 0 0 1 0 11.31l-39.6 39.6a8 8 0 0 1-11.31 0l-67.88-67.88a8 8 0 0 1 0-11.31l39.6-39.6zm669.6 0l39.6 39.6a8 8 0 0 1 0 11.3l-67.88 67.9a8 8 0 0 1-11.32 0l-39.6-39.6a8 8 0 0 1 0-11.32l67.89-67.88a8 8 0 0 1 11.31 0zM192 892h640a32 32 0 0 1 32 32v24a8 8 0 0 1-8 8H168a8 8 0 0 1-8-8v-24a32 32 0 0 1 32-32zm148-317v253h64V575h-64z")), t.AlipaySquareFill = u("alipay-square", l, i(r, "M308.6 545.7c-19.8 2-57.1 10.7-77.4 28.6-61 53-24.5 150 99 150 71.8 0 143.5-45.7 199.8-119-80.2-38.9-148.1-66.8-221.4-59.6zM880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm29.4 663.2S703 689.4 598.7 639.5C528.8 725.2 438.6 777.3 345 777.3c-158.4 0-212.1-138.1-137.2-229 16.3-19.8 44.2-38.7 87.3-49.4 67.5-16.5 175 10.3 275.7 43.4 18.1-33.3 33.4-69.9 44.7-108.9H305.1V402h160v-56.2H271.3v-31.3h193.8v-80.1s0-13.5 13.7-13.5H557v93.6h191.7v31.3H557.1V402h156.4c-15 61.1-37.7 117.4-66.2 166.8 47.5 17.1 90.1 33.3 121.8 43.9 114.3 38.2 140.2 40.2 140.2 40.2v122.3z")), t.AliwangwangFill = u("aliwangwang", l, i(r, "M868.2 377.4c-18.9-45.1-46.3-85.6-81.2-120.6a377.26 377.26 0 0 0-120.5-81.2A375.65 375.65 0 0 0 519 145.8c-41.9 0-82.9 6.7-121.9 20C306 123.3 200.8 120 170.6 120c-2.2 0-7.4 0-9.4.2-11.9.4-22.8 6.5-29.2 16.4-6.5 9.9-7.7 22.4-3.4 33.5l64.3 161.6a378.59 378.59 0 0 0-52.8 193.2c0 51.4 10 101 29.8 147.6 18.9 45 46.2 85.6 81.2 120.5 34.7 34.8 75.4 62.1 120.5 81.2C418.3 894 467.9 904 519 904c51.3 0 100.9-10 147.7-29.8 44.9-18.9 85.5-46.3 120.4-81.2 34.7-34.8 62.1-75.4 81.2-120.6a376.5 376.5 0 0 0 29.8-147.6c-.2-51.2-10.1-100.8-29.9-147.4zm-325.2 79c0 20.4-16.6 37.1-37.1 37.1-20.4 0-37.1-16.7-37.1-37.1v-55.1c0-20.4 16.6-37.1 37.1-37.1 20.4 0 37.1 16.6 37.1 37.1v55.1zm175.2 0c0 20.4-16.6 37.1-37.1 37.1S644 476.8 644 456.4v-55.1c0-20.4 16.7-37.1 37.1-37.1 20.4 0 37.1 16.6 37.1 37.1v55.1z")), t.AlipayCircleFill = u("alipay-circle", l, i(r, "M308.6 545.7c-19.8 2-57.1 10.7-77.4 28.6-61 53-24.5 150 99 150 71.8 0 143.5-45.7 199.8-119-80.2-38.9-148.1-66.8-221.4-59.6zm460.5 67c100.1 33.4 154.7 43 166.7 44.8A445.9 445.9 0 0 0 960 512c0-247.4-200.6-448-448-448S64 264.6 64 512s200.6 448 448 448c155.9 0 293.2-79.7 373.5-200.5-75.6-29.8-213.6-85-286.8-120.1-69.9 85.7-160.1 137.8-253.7 137.8-158.4 0-212.1-138.1-137.2-229 16.3-19.8 44.2-38.7 87.3-49.4 67.5-16.5 175 10.3 275.7 43.4 18.1-33.3 33.4-69.9 44.7-108.9H305.1V402h160v-56.2H271.3v-31.3h193.8v-80.1s0-13.5 13.7-13.5H557v93.6h191.7v31.3H557.1V402h156.4c-15 61.1-37.7 117.4-66.2 166.8 47.5 17.1 90.1 33.3 121.8 43.9z")), t.AmazonCircleFill = u("amazon-circle", l, i(r, "M485 467.5c-11.6 4.9-20.9 12.2-27.8 22-6.9 9.8-10.4 21.6-10.4 35.5 0 17.8 7.5 31.5 22.4 41.2 14.1 9.1 28.9 11.4 44.4 6.8 17.9-5.2 30-17.9 36.4-38.1 3-9.3 4.5-19.7 4.5-31.3v-50.2c-12.6.4-24.4 1.6-35.5 3.7-11.1 2.1-22.4 5.6-34 10.4zM512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm35.8 262.7c-7.2-10.9-20.1-16.4-38.7-16.4-1.3 0-3 .1-5.3.3-2.2.2-6.6 1.5-12.9 3.7a79.4 79.4 0 0 0-17.9 9.1c-5.5 3.8-11.5 10-18 18.4-6.4 8.5-11.5 18.4-15.3 29.8l-94-8.4c0-12.4 2.4-24.7 7-36.9 4.7-12.2 11.8-23.9 21.4-35 9.6-11.2 21.1-21 34.5-29.4 13.4-8.5 29.6-15.2 48.4-20.3 18.9-5.1 39.1-7.6 60.9-7.6 21.3 0 40.6 2.6 57.8 7.7 17.2 5.2 31.1 11.5 41.4 19.1a117 117 0 0 1 25.9 25.7c6.9 9.6 11.7 18.5 14.4 26.7 2.7 8.2 4 15.7 4 22.8v182.5c0 6.4 1.4 13 4.3 19.8 2.9 6.8 6.3 12.8 10.2 18 3.9 5.2 7.9 9.9 12 14.3 4.1 4.3 7.6 7.7 10.6 9.9l4.1 3.4-72.5 69.4c-8.5-7.7-16.9-15.4-25.2-23.4-8.3-8-14.5-14-18.5-18.1l-6.1-6.2c-2.4-2.3-5-5.7-8-10.2-8.1 12.2-18.5 22.8-31.1 31.8-12.7 9-26.3 15.6-40.7 19.7-14.5 4.1-29.4 6.5-44.7 7.1-15.3.6-30-1.5-43.9-6.5-13.9-5-26.5-11.7-37.6-20.3-11.1-8.6-19.9-20.2-26.5-35-6.6-14.8-9.9-31.5-9.9-50.4 0-17.4 3-33.3 8.9-47.7 6-14.5 13.6-26.5 23-36.1 9.4-9.6 20.7-18.2 34-25.7s26.4-13.4 39.2-17.7c12.8-4.2 26.6-7.8 41.5-10.7 14.9-2.9 27.6-4.8 38.2-5.7 10.6-.9 21.2-1.6 31.8-2v-39.4c0-13.5-2.3-23.5-6.7-30.1zm180.5 379.6c-2.8 3.3-7.5 7.8-14.1 13.5s-16.8 12.7-30.5 21.1c-13.7 8.4-28.8 16-45 22.9-16.3 6.9-36.3 12.9-60.1 18-23.7 5.1-48.2 7.6-73.3 7.6-25.4 0-50.7-3.2-76.1-9.6-25.4-6.4-47.6-14.3-66.8-23.7-19.1-9.4-37.6-20.2-55.1-32.2-17.6-12.1-31.7-22.9-42.4-32.5-10.6-9.6-19.6-18.7-26.8-27.1-1.7-1.9-2.8-3.6-3.2-5.1-.4-1.5-.3-2.8.3-3.7.6-.9 1.5-1.6 2.6-2.2a7.42 7.42 0 0 1 7.4.8c40.9 24.2 72.9 41.3 95.9 51.4 82.9 36.4 168 45.7 255.3 27.9 40.5-8.3 82.1-22.2 124.9-41.8 3.2-1.2 6-1.5 8.3-.9 2.3.6 3.5 2.4 3.5 5.4 0 2.8-1.6 6.3-4.8 10.2zm59.9-29c-1.8 11.1-4.9 21.6-9.1 31.8-7.2 17.1-16.3 30-27.1 38.4-3.6 2.9-6.4 3.8-8.3 2.8-1.9-1-1.9-3.5 0-7.4 4.5-9.3 9.2-21.8 14.2-37.7 5-15.8 5.7-26 2.1-30.5-1.1-1.5-2.7-2.6-5-3.6-2.2-.9-5.1-1.5-8.6-1.9s-6.7-.6-9.4-.8c-2.8-.2-6.5-.2-11.2 0-4.7.2-8 .4-10.1.6a874.4 874.4 0 0 1-17.1 1.5c-1.3.2-2.7.4-4.1.5-1.5.1-2.7.2-3.5.3l-2.7.3c-1 .1-1.7.2-2.2.2h-3.2l-1-.2-.6-.5-.5-.9c-1.3-3.3 3.7-7.4 15-12.4s22.3-8.1 32.9-9.3c9.8-1.5 21.3-1.5 34.5-.3s21.3 3.7 24.3 7.4c2.3 3.5 2.5 10.7.7 21.7z")), t.AndroidFill = u("android", l, i(r, "M270.1 741.7c0 23.4 19.1 42.5 42.6 42.5h48.7v120.4c0 30.5 24.5 55.4 54.6 55.4 30.2 0 54.6-24.8 54.6-55.4V784.1h85v120.4c0 30.5 24.5 55.4 54.6 55.4 30.2 0 54.6-24.8 54.6-55.4V784.1h48.7c23.5 0 42.6-19.1 42.6-42.5V346.4h-486v395.3zm357.1-600.1l44.9-65c2.6-3.8 2-8.9-1.5-11.4-3.5-2.4-8.5-1.2-11.1 2.6l-46.6 67.6c-30.7-12.1-64.9-18.8-100.8-18.8-35.9 0-70.1 6.7-100.8 18.8l-46.6-67.5c-2.6-3.8-7.6-5.1-11.1-2.6-3.5 2.4-4.1 7.4-1.5 11.4l44.9 65c-71.4 33.2-121.4 96.1-127.8 169.6h486c-6.6-73.6-56.7-136.5-128-169.7zM409.5 244.1a26.9 26.9 0 1 1 26.9-26.9 26.97 26.97 0 0 1-26.9 26.9zm208.4 0a26.9 26.9 0 1 1 26.9-26.9 26.97 26.97 0 0 1-26.9 26.9zm223.4 100.7c-30.2 0-54.6 24.8-54.6 55.4v216.4c0 30.5 24.5 55.4 54.6 55.4 30.2 0 54.6-24.8 54.6-55.4V400.1c.1-30.6-24.3-55.3-54.6-55.3zm-658.6 0c-30.2 0-54.6 24.8-54.6 55.4v216.4c0 30.5 24.5 55.4 54.6 55.4 30.2 0 54.6-24.8 54.6-55.4V400.1c0-30.6-24.5-55.3-54.6-55.3z")), t.AmazonSquareFill = u("amazon-square", l, i(r, "M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM547.8 326.7c-7.2-10.9-20.1-16.4-38.7-16.4-1.3 0-3 .1-5.3.3-2.2.2-6.6 1.5-12.9 3.7a79.4 79.4 0 0 0-17.9 9.1c-5.5 3.8-11.5 10-18 18.4-6.4 8.5-11.5 18.4-15.3 29.8l-94-8.4c0-12.4 2.4-24.7 7-36.9s11.8-23.9 21.4-35c9.6-11.2 21.1-21 34.5-29.4 13.4-8.5 29.6-15.2 48.4-20.3 18.9-5.1 39.1-7.6 60.9-7.6 21.3 0 40.6 2.6 57.8 7.7 17.2 5.2 31.1 11.5 41.4 19.1a117 117 0 0 1 25.9 25.7c6.9 9.6 11.7 18.5 14.4 26.7 2.7 8.2 4 15.7 4 22.8v182.5c0 6.4 1.4 13 4.3 19.8 2.9 6.8 6.3 12.8 10.2 18 3.9 5.2 7.9 9.9 12 14.3 4.1 4.3 7.6 7.7 10.6 9.9l4.1 3.4-72.5 69.4c-8.5-7.7-16.9-15.4-25.2-23.4-8.3-8-14.5-14-18.5-18.1l-6.1-6.2c-2.4-2.3-5-5.7-8-10.2-8.1 12.2-18.5 22.8-31.1 31.8-12.7 9-26.3 15.6-40.7 19.7-14.5 4.1-29.4 6.5-44.7 7.1-15.3.6-30-1.5-43.9-6.5-13.9-5-26.5-11.7-37.6-20.3-11.1-8.6-19.9-20.2-26.5-35-6.6-14.8-9.9-31.5-9.9-50.4 0-17.4 3-33.3 8.9-47.7 6-14.5 13.6-26.5 23-36.1 9.4-9.6 20.7-18.2 34-25.7s26.4-13.4 39.2-17.7c12.8-4.2 26.6-7.8 41.5-10.7 14.9-2.9 27.6-4.8 38.2-5.7 10.6-.9 21.2-1.6 31.8-2v-39.4c0-13.5-2.3-23.5-6.7-30.1zm180.5 379.6c-2.8 3.3-7.5 7.8-14.1 13.5s-16.8 12.7-30.5 21.1c-13.7 8.4-28.8 16-45 22.9-16.3 6.9-36.3 12.9-60.1 18-23.7 5.1-48.2 7.6-73.3 7.6-25.4 0-50.7-3.2-76.1-9.6-25.4-6.4-47.6-14.3-66.8-23.7-19.1-9.4-37.6-20.2-55.1-32.2-17.6-12.1-31.7-22.9-42.4-32.5-10.6-9.6-19.6-18.7-26.8-27.1-1.7-1.9-2.8-3.6-3.2-5.1-.4-1.5-.3-2.8.3-3.7.6-.9 1.5-1.6 2.6-2.2a7.42 7.42 0 0 1 7.4.8c40.9 24.2 72.9 41.3 95.9 51.4 82.9 36.4 168 45.7 255.3 27.9 40.5-8.3 82.1-22.2 124.9-41.8 3.2-1.2 6-1.5 8.3-.9 2.3.6 3.5 2.4 3.5 5.4 0 2.8-1.6 6.3-4.8 10.2zm59.9-29c-1.8 11.1-4.9 21.6-9.1 31.8-7.2 17.1-16.3 30-27.1 38.4-3.6 2.9-6.4 3.8-8.3 2.8-1.9-1-1.9-3.5 0-7.4 4.5-9.3 9.2-21.8 14.2-37.7 5-15.8 5.7-26 2.1-30.5-1.1-1.5-2.7-2.6-5-3.6-2.2-.9-5.1-1.5-8.6-1.9s-6.7-.6-9.4-.8c-2.8-.2-6.5-.2-11.2 0-4.7.2-8 .4-10.1.6a874.4 874.4 0 0 1-17.1 1.5c-1.3.2-2.7.4-4.1.5-1.5.1-2.7.2-3.5.3l-2.7.3c-1 .1-1.7.2-2.2.2h-3.2l-1-.2-.6-.5-.5-.9c-1.3-3.3 3.7-7.4 15-12.4s22.3-8.1 32.9-9.3c9.8-1.5 21.3-1.5 34.5-.3s21.3 3.7 24.3 7.4c2.3 3.5 2.5 10.7.7 21.7zM485 467.5c-11.6 4.9-20.9 12.2-27.8 22-6.9 9.8-10.4 21.6-10.4 35.5 0 17.8 7.5 31.5 22.4 41.2 14.1 9.1 28.9 11.4 44.4 6.8 17.9-5.2 30-17.9 36.4-38.1 3-9.3 4.5-19.7 4.5-31.3v-50.2c-12.6.4-24.4 1.6-35.5 3.7-11.1 2.1-22.4 5.6-34 10.4z")), t.ApiFill = u("api", l, i(r, "M917.7 148.8l-42.4-42.4c-1.6-1.6-3.6-2.3-5.7-2.3s-4.1.8-5.7 2.3l-76.1 76.1a199.27 199.27 0 0 0-112.1-34.3c-51.2 0-102.4 19.5-141.5 58.6L432.3 308.7a8.03 8.03 0 0 0 0 11.3L704 591.7c1.6 1.6 3.6 2.3 5.7 2.3 2 0 4.1-.8 5.7-2.3l101.9-101.9c68.9-69 77-175.7 24.3-253.5l76.1-76.1c3.1-3.2 3.1-8.3 0-11.4zM578.9 546.7a8.03 8.03 0 0 0-11.3 0L501 613.3 410.7 523l66.7-66.7c3.1-3.1 3.1-8.2 0-11.3L441 408.6a8.03 8.03 0 0 0-11.3 0L363 475.3l-43-43a7.85 7.85 0 0 0-5.7-2.3c-2 0-4.1.8-5.7 2.3L206.8 534.2c-68.9 68.9-77 175.7-24.3 253.5l-76.1 76.1a8.03 8.03 0 0 0 0 11.3l42.4 42.4c1.6 1.6 3.6 2.3 5.7 2.3s4.1-.8 5.7-2.3l76.1-76.1c33.7 22.9 72.9 34.3 112.1 34.3 51.2 0 102.4-19.5 141.5-58.6l101.9-101.9c3.1-3.1 3.1-8.2 0-11.3l-43-43 66.7-66.7c3.1-3.1 3.1-8.2 0-11.3l-36.6-36.2z")), t.AppstoreFill = u("appstore", l, i(r, "M864 144H560c-8.8 0-16 7.2-16 16v304c0 8.8 7.2 16 16 16h304c8.8 0 16-7.2 16-16V160c0-8.8-7.2-16-16-16zm0 400H560c-8.8 0-16 7.2-16 16v304c0 8.8 7.2 16 16 16h304c8.8 0 16-7.2 16-16V560c0-8.8-7.2-16-16-16zM464 144H160c-8.8 0-16 7.2-16 16v304c0 8.8 7.2 16 16 16h304c8.8 0 16-7.2 16-16V160c0-8.8-7.2-16-16-16zm0 400H160c-8.8 0-16 7.2-16 16v304c0 8.8 7.2 16 16 16h304c8.8 0 16-7.2 16-16V560c0-8.8-7.2-16-16-16z")), t.AudioFill = u("audio", l, i(r, "M512 624c93.9 0 170-75.2 170-168V232c0-92.8-76.1-168-170-168s-170 75.2-170 168v224c0 92.8 76.1 168 170 168zm330-170c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8 0 140.3-113.7 254-254 254S258 594.3 258 454c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8 0 168.7 126.6 307.9 290 327.6V884H326.7c-13.7 0-24.7 14.3-24.7 32v36c0 4.4 2.8 8 6.2 8h407.6c3.4 0 6.2-3.6 6.2-8v-36c0-17.7-11-32-24.7-32H548V782.1c165.3-18 294-158 294-328.1z")), t.AppleFill = u("apple", l, i(r, "M747.4 535.7c-.4-68.2 30.5-119.6 92.9-157.5-34.9-50-87.7-77.5-157.3-82.8-65.9-5.2-138 38.4-164.4 38.4-27.9 0-91.7-36.6-141.9-36.6C273.1 298.8 163 379.8 163 544.6c0 48.7 8.9 99 26.7 150.8 23.8 68.2 109.6 235.3 199.1 232.6 46.8-1.1 79.9-33.2 140.8-33.2 59.1 0 89.7 33.2 141.9 33.2 90.3-1.3 167.9-153.2 190.5-221.6-121.1-57.1-114.6-167.2-114.6-170.7zm-105.1-305c50.7-60.2 46.1-115 44.6-134.7-44.8 2.6-96.6 30.5-126.1 64.8-32.5 36.8-51.6 82.3-47.5 133.6 48.4 3.7 92.6-21.2 129-63.7z")), t.BackwardFill = u("backward", l, i(n, "M485.6 249.9L198.2 498c-8.3 7.1-8.3 20.8 0 27.9l287.4 248.2c10.7 9.2 26.4.9 26.4-14V263.8c0-14.8-15.7-23.2-26.4-13.9zm320 0L518.2 498a18.6 18.6 0 0 0-6.2 14c0 5.2 2.1 10.4 6.2 14l287.4 248.2c10.7 9.2 26.4.9 26.4-14V263.8c0-14.8-15.7-23.2-26.4-13.9z")), t.BankFill = u("bank", l, i(r, "M894 462c30.9 0 43.8-39.7 18.7-58L530.8 126.2a31.81 31.81 0 0 0-37.6 0L111.3 404c-25.1 18.2-12.2 58 18.8 58H192v374h-72c-4.4 0-8 3.6-8 8v52c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-52c0-4.4-3.6-8-8-8h-72V462h62zM381 836H264V462h117v374zm189 0H453V462h117v374zm190 0H642V462h118v374z")), t.BehanceCircleFill = u("behance-circle", l, i(r, "M420.3 470.3c8.7-6.3 12.9-16.7 12.9-31 .3-6.8-1.1-13.5-4.1-19.6-2.7-4.9-6.7-9-11.6-11.9a44.8 44.8 0 0 0-16.6-6c-6.4-1.2-12.9-1.8-19.3-1.7h-70.3v79.7h76.1c13.1.1 24.2-3.1 32.9-9.5zm11.8 72c-9.8-7.5-22.9-11.2-39.2-11.2h-81.8v94h80.2c7.5 0 14.4-.7 21.1-2.1a50.5 50.5 0 0 0 17.8-7.2c5.1-3.3 9.2-7.8 12.3-13.6 3-5.8 4.5-13.2 4.5-22.1 0-17.7-5-30.2-14.9-37.8zM512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm86.5 286.9h138.4v33.7H598.5v-33.7zM512 628.8a89.52 89.52 0 0 1-27 31c-11.8 8.2-24.9 14.2-38.8 17.7a167.4 167.4 0 0 1-44.6 5.7H236V342.1h161c16.3 0 31.1 1.5 44.6 4.3 13.4 2.8 24.8 7.6 34.4 14.1 9.5 6.5 17 15.2 22.3 26 5.2 10.7 7.9 24.1 7.9 40 0 17.2-3.9 31.4-11.7 42.9-7.9 11.5-19.3 20.8-34.8 28.1 21.1 6 36.6 16.7 46.8 31.7 10.4 15.2 15.5 33.4 15.5 54.8 0 17.4-3.3 32.3-10 44.8zM790.8 576H612.4c0 19.4 6.7 38 16.8 48 10.2 9.9 24.8 14.9 43.9 14.9 13.8 0 25.5-3.5 35.5-10.4 9.9-6.9 15.9-14.2 18.1-21.8h59.8c-9.6 29.7-24.2 50.9-44 63.7-19.6 12.8-43.6 19.2-71.5 19.2-19.5 0-37-3.2-52.7-9.3-15.1-5.9-28.7-14.9-39.9-26.5a121.2 121.2 0 0 1-25.1-41.2c-6.1-16.9-9.1-34.7-8.9-52.6 0-18.5 3.1-35.7 9.1-51.7 11.5-31.1 35.4-56 65.9-68.9 16.3-6.8 33.8-10.2 51.5-10 21 0 39.2 4 55 12.2a111.6 111.6 0 0 1 38.6 32.8c10.1 13.7 17.2 29.3 21.7 46.9 4.3 17.3 5.8 35.5 4.6 54.7zm-122-95.6c-10.8 0-19.9 1.9-26.9 5.6-7 3.7-12.8 8.3-17.2 13.6a48.4 48.4 0 0 0-9.1 17.4c-1.6 5.3-2.7 10.7-3.1 16.2H723c-1.6-17.3-7.6-30.1-15.6-39.1-8.4-8.9-21.9-13.7-38.6-13.7z")), t.BellFill = u("bell", l, i(r, "M816 768h-24V428c0-141.1-104.3-257.8-240-277.2V112c0-22.1-17.9-40-40-40s-40 17.9-40 40v38.8C336.3 170.2 232 286.9 232 428v340h-24c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h216c0 61.8 50.2 112 112 112s112-50.2 112-112h216c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM512 888c-26.5 0-48-21.5-48-48h96c0 26.5-21.5 48-48 48z")), t.BehanceSquareFill = u("behance-square", l, i(r, "M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM598.5 350.9h138.4v33.7H598.5v-33.7zM512 628.8a89.52 89.52 0 0 1-27 31c-11.8 8.2-24.9 14.2-38.8 17.7a167.4 167.4 0 0 1-44.6 5.7H236V342.1h161c16.3 0 31.1 1.5 44.6 4.3 13.4 2.8 24.8 7.6 34.4 14.1 9.5 6.5 17 15.2 22.3 26 5.2 10.7 7.9 24.1 7.9 40 0 17.2-3.9 31.4-11.7 42.9-7.9 11.5-19.3 20.8-34.8 28.1 21.1 6 36.6 16.7 46.8 31.7 10.4 15.2 15.5 33.4 15.5 54.8 0 17.4-3.3 32.3-10 44.8zM790.8 576H612.4c0 19.4 6.7 38 16.8 48 10.2 9.9 24.8 14.9 43.9 14.9 13.8 0 25.5-3.5 35.5-10.4 9.9-6.9 15.9-14.2 18.1-21.8h59.8c-9.6 29.7-24.2 50.9-44 63.7-19.6 12.8-43.6 19.2-71.5 19.2-19.5 0-37-3.2-52.7-9.3-15.1-5.9-28.7-14.9-39.9-26.5a121.2 121.2 0 0 1-25.1-41.2c-6.1-16.9-9.1-34.7-8.9-52.6 0-18.5 3.1-35.7 9.1-51.7 11.5-31.1 35.4-56 65.9-68.9 16.3-6.8 33.8-10.2 51.5-10 21 0 39.2 4 55 12.2a111.6 111.6 0 0 1 38.6 32.8c10.1 13.7 17.2 29.3 21.7 46.9 4.3 17.3 5.8 35.5 4.6 54.7zm-122-95.6c-10.8 0-19.9 1.9-26.9 5.6-7 3.7-12.8 8.3-17.2 13.6a48.4 48.4 0 0 0-9.1 17.4c-1.6 5.3-2.7 10.7-3.1 16.2H723c-1.6-17.3-7.6-30.1-15.6-39.1-8.4-8.9-21.9-13.7-38.6-13.7zm-248.5-10.1c8.7-6.3 12.9-16.7 12.9-31 .3-6.8-1.1-13.5-4.1-19.6-2.7-4.9-6.7-9-11.6-11.9a44.8 44.8 0 0 0-16.6-6c-6.4-1.2-12.9-1.8-19.3-1.7h-70.3v79.7h76.1c13.1.1 24.2-3.1 32.9-9.5zm11.8 72c-9.8-7.5-22.9-11.2-39.2-11.2h-81.8v94h80.2c7.5 0 14.4-.7 21.1-2.1s12.7-3.8 17.8-7.2c5.1-3.3 9.2-7.8 12.3-13.6 3-5.8 4.5-13.2 4.5-22.1 0-17.7-5-30.2-14.9-37.8z")), t.BookFill = u("book", l, i(r, "M832 64H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32zM668 345.9L621.5 312 572 347.4V124h96v221.9z")), t.BoxPlotFill = u("box-plot", l, i(r, "M952 224h-52c-4.4 0-8 3.6-8 8v248h-92V304c0-4.4-3.6-8-8-8H448v432h344c4.4 0 8-3.6 8-8V548h92v244c0 4.4 3.6 8 8 8h52c4.4 0 8-3.6 8-8V232c0-4.4-3.6-8-8-8zm-728 80v176h-92V232c0-4.4-3.6-8-8-8H72c-4.4 0-8 3.6-8 8v560c0 4.4 3.6 8 8 8h52c4.4 0 8-3.6 8-8V548h92v172c0 4.4 3.6 8 8 8h152V296H232c-4.4 0-8 3.6-8 8z")), t.BugFill = u("bug", l, i(r, "M304 280h416c4.4 0 8-3.6 8-8 0-40-8.8-76.7-25.9-108.1a184.31 184.31 0 0 0-74-74C596.7 72.8 560 64 520 64h-16c-40 0-76.7 8.8-108.1 25.9a184.31 184.31 0 0 0-74 74C304.8 195.3 296 232 296 272c0 4.4 3.6 8 8 8z", "M940 512H792V412c76.8 0 139-62.2 139-139 0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8a63 63 0 0 1-63 63H232a63 63 0 0 1-63-63c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8 0 76.8 62.2 139 139 139v100H84c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h148v96c0 6.5.2 13 .7 19.3C164.1 728.6 116 796.7 116 876c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8 0-44.2 23.9-82.9 59.6-103.7a273 273 0 0 0 22.7 49c24.3 41.5 59 76.2 100.5 100.5 28.9 16.9 61 28.8 95.3 34.5 4.4 0 8-3.6 8-8V484c0-4.4 3.6-8 8-8h60c4.4 0 8 3.6 8 8v464.2c0 4.4 3.6 8 8 8 34.3-5.7 66.4-17.6 95.3-34.5a281.38 281.38 0 0 0 123.2-149.5A120.4 120.4 0 0 1 836 876c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8 0-79.3-48.1-147.4-116.7-176.7.4-6.4.7-12.8.7-19.3v-96h148c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8z")), t.CalculatorFill = u("calculator", l, i(r, "M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM440.2 765h-50.8c-2.2 0-4.5-1.1-5.9-2.9L348 718.6l-35.5 43.5a7.38 7.38 0 0 1-5.9 2.9h-50.8c-6.6 0-10.2-7.9-5.8-13.1l62.7-76.8-61.2-74.9c-4.3-5.2-.7-13.1 5.9-13.1h50.9c2.2 0 4.5 1.1 5.9 2.9l34 41.6 34-41.6c1.5-1.9 3.6-2.9 5.9-2.9h50.8c6.6 0 10.2 7.9 5.9 13.1L383.5 675l62.7 76.8c4.2 5.3.6 13.2-6 13.2zm7.8-382c0 2.2-1.4 4-3.2 4H376v68.7c0 1.9-1.8 3.3-4 3.3h-48c-2.2 0-4-1.4-4-3.2V387h-68.8c-1.8 0-3.2-1.8-3.2-4v-48c0-2.2 1.4-4 3.2-4H320v-68.8c0-1.8 1.8-3.2 4-3.2h48c2.2 0 4 1.4 4 3.2V331h68.7c1.9 0 3.3 1.8 3.3 4v48zm328 369c0 2.2-1.4 4-3.2 4H579.2c-1.8 0-3.2-1.8-3.2-4v-48c0-2.2 1.4-4 3.2-4h193.5c1.9 0 3.3 1.8 3.3 4v48zm0-104c0 2.2-1.4 4-3.2 4H579.2c-1.8 0-3.2-1.8-3.2-4v-48c0-2.2 1.4-4 3.2-4h193.5c1.9 0 3.3 1.8 3.3 4v48zm0-265c0 2.2-1.4 4-3.2 4H579.2c-1.8 0-3.2-1.8-3.2-4v-48c0-2.2 1.4-4 3.2-4h193.5c1.9 0 3.3 1.8 3.3 4v48z")), t.BulbFill = u("bulb", l, i(r, "M348 676.1C250 619.4 184 513.4 184 392c0-181.1 146.9-328 328-328s328 146.9 328 328c0 121.4-66 227.4-164 284.1V792c0 17.7-14.3 32-32 32H380c-17.7 0-32-14.3-32-32V676.1zM392 888h240c4.4 0 8 3.6 8 8v32c0 17.7-14.3 32-32 32H416c-17.7 0-32-14.3-32-32v-32c0-4.4 3.6-8 8-8z")), t.BuildFill = u("build", l, i(r, "M916 210H376c-17.7 0-32 14.3-32 32v236H108c-17.7 0-32 14.3-32 32v272c0 17.7 14.3 32 32 32h540c17.7 0 32-14.3 32-32V546h236c17.7 0 32-14.3 32-32V242c0-17.7-14.3-32-32-32zM612 746H412V546h200v200zm268-268H680V278h200v200z")), t.CalendarFill = u("calendar", l, i(r, "M112 880c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V460H112v420zm768-696H712v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H384v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H144c-17.7 0-32 14.3-32 32v176h800V216c0-17.7-14.3-32-32-32z")), t.CameraFill = u("camera", l, i(r, "M864 260H728l-32.4-90.8a32.07 32.07 0 0 0-30.2-21.2H358.6c-13.5 0-25.6 8.5-30.1 21.2L296 260H160c-44.2 0-80 35.8-80 80v456c0 44.2 35.8 80 80 80h704c44.2 0 80-35.8 80-80V340c0-44.2-35.8-80-80-80zM512 716c-88.4 0-160-71.6-160-160s71.6-160 160-160 160 71.6 160 160-71.6 160-160 160zm-96-160a96 96 0 1 0 192 0 96 96 0 1 0-192 0z")), t.CarFill = u("car", l, i(r, "M959 413.4L935.3 372a8 8 0 0 0-10.9-2.9l-50.7 29.6-78.3-216.2a63.9 63.9 0 0 0-60.9-44.4H301.2c-34.7 0-65.5 22.4-76.2 55.5l-74.6 205.2-50.8-29.6a8 8 0 0 0-10.9 2.9L65 413.4c-2.2 3.8-.9 8.6 2.9 10.8l60.4 35.2-14.5 40c-1.2 3.2-1.8 6.6-1.8 10v348.2c0 15.7 11.8 28.4 26.3 28.4h67.6c12.3 0 23-9.3 25.6-22.3l7.7-37.7h545.6l7.7 37.7c2.7 13 13.3 22.3 25.6 22.3h67.6c14.5 0 26.3-12.7 26.3-28.4V509.4c0-3.4-.6-6.8-1.8-10l-14.5-40 60.3-35.2a8 8 0 0 0 3-10.8zM264 621c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40zm388 75c0 4.4-3.6 8-8 8H380c-4.4 0-8-3.6-8-8v-84c0-4.4 3.6-8 8-8h40c4.4 0 8 3.6 8 8v36h168v-36c0-4.4 3.6-8 8-8h40c4.4 0 8 3.6 8 8v84zm108-75c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40zM220 418l72.7-199.9.5-1.3.4-1.3c1.1-3.3 4.1-5.5 7.6-5.5h427.6l75.4 208H220z")), t.CaretDownFill = u("caret-down", l, i(n, "M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z")), t.CaretLeftFill = u("caret-left", l, i(n, "M689 165.1L308.2 493.5c-10.9 9.4-10.9 27.5 0 37L689 858.9c14.2 12.2 35 1.2 35-18.5V183.6c0-19.7-20.8-30.7-35-18.5z")), t.CaretRightFill = u("caret-right", l, i(n, "M715.8 493.5L335 165.1c-14.2-12.2-35-1.2-35 18.5v656.8c0 19.7 20.8 30.7 35 18.5l380.8-328.4c10.9-9.4 10.9-27.6 0-37z")), t.CarryOutFill = u("carry-out", l, i(r, "M880 184H712v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H384v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H144c-17.7 0-32 14.3-32 32v664c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V216c0-17.7-14.3-32-32-32zM694.5 432.7L481.9 725.4a16.1 16.1 0 0 1-26 0l-126.4-174c-3.8-5.3 0-12.7 6.5-12.7h55.2c5.1 0 10 2.5 13 6.6l64.7 89 150.9-207.8c3-4.1 7.8-6.6 13-6.6H688c6.5.1 10.3 7.5 6.5 12.8z")), t.CaretUpFill = u("caret-up", l, i(n, "M858.9 689L530.5 308.2c-9.4-10.9-27.5-10.9-37 0L165.1 689c-12.2 14.2-1.2 35 18.5 35h656.8c19.7 0 30.7-20.8 18.5-35z")), t.CheckCircleFill = u("check-circle", l, i(r, "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 0 1-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z")), t.CheckSquareFill = u("check-square", l, i(r, "M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM695.5 365.7l-210.6 292a31.8 31.8 0 0 1-51.7 0L308.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H689c6.5 0 10.3 7.4 6.5 12.7z")), t.ChromeFill = u("chrome", l, i(r, "M371.8 512c0 77.5 62.7 140.2 140.2 140.2S652.2 589.5 652.2 512 589.5 371.8 512 371.8 371.8 434.4 371.8 512zM900 362.4l-234.3 12.1c63.6 74.3 64.6 181.5 11.1 263.7l-188 289.2c78 4.2 158.4-12.9 231.2-55.2 180-104 253-322.1 180-509.8zM320.3 591.9L163.8 284.1A415.35 415.35 0 0 0 96 512c0 208 152.3 380.3 351.4 410.8l106.9-209.4c-96.6 18.2-189.9-34.8-234-121.5zm218.5-285.5l344.4 18.1C848 254.7 792.6 194 719.8 151.7 653.9 113.6 581.5 95.5 510.5 96c-122.5.5-242.2 55.2-322.1 154.5l128.2 196.9c32-91.9 124.8-146.7 222.2-141z")), t.CiCircleFill = u("ci-circle", l, i(r, "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm-63.6 656c-103 0-162.4-68.6-162.4-182.6v-49C286 373.5 345.4 304 448.3 304c88.3 0 152.3 56.9 152.3 138.1 0 2.4-2 4.4-4.4 4.4h-52.6c-4.2 0-7.6-3.2-8-7.4-4-46.1-37.6-77.6-87-77.6-61.1 0-95.6 45.4-95.6 126.9v49.3c0 80.3 34.5 125.1 95.6 125.1 49.3 0 82.8-29.5 87-72.4.4-4.1 3.8-7.3 8-7.3h52.7c2.4 0 4.4 2 4.4 4.4 0 77.4-64.3 132.5-152.3 132.5zM738 704.1c0 4.4-3.6 8-8 8h-50.4c-4.4 0-8-3.6-8-8V319.9c0-4.4 3.6-8 8-8H730c4.4 0 8 3.6 8 8v384.2z")), t.ClockCircleFill = u("clock-circle", l, i(r, "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm176.5 585.7l-28.6 39a7.99 7.99 0 0 1-11.2 1.7L483.3 569.8a7.92 7.92 0 0 1-3.3-6.5V288c0-4.4 3.6-8 8-8h48.1c4.4 0 8 3.6 8 8v247.5l142.6 103.1c3.6 2.5 4.4 7.5 1.8 11.1z")), t.CloseCircleFill = u("close-circle", l, i(r, "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm165.4 618.2l-66-.3L512 563.4l-99.3 118.4-66.1.3c-4.4 0-8-3.5-8-8 0-1.9.7-3.7 1.9-5.2l130.1-155L340.5 359a8.32 8.32 0 0 1-1.9-5.2c0-4.4 3.6-8 8-8l66.1.3L512 464.6l99.3-118.4 66-.3c4.4 0 8 3.5 8 8 0 1.9-.7 3.7-1.9 5.2L553.5 514l130 155c1.2 1.5 1.9 3.3 1.9 5.2 0 4.4-3.6 8-8 8z")), t.CloudFill = u("cloud", l, i(r, "M811.4 418.7C765.6 297.9 648.9 212 512.2 212S258.8 297.8 213 418.6C127.3 441.1 64 519.1 64 612c0 110.5 89.5 200 199.9 200h496.2C870.5 812 960 722.5 960 612c0-92.7-63.1-170.7-148.6-193.3z")), t.CloseSquareFill = u("close-square", l, i(r, "M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM676.1 657.9c4.4 5.2.7 13.1-6.1 13.1h-58.9c-4.7 0-9.2-2.1-12.3-5.7L512 561.8l-86.8 103.5c-3 3.6-7.5 5.7-12.3 5.7H354c-6.8 0-10.5-7.9-6.1-13.1L470.2 512 347.9 366.1A7.95 7.95 0 0 1 354 353h58.9c4.7 0 9.2 2.1 12.3 5.7L512 462.2l86.8-103.5c3-3.6 7.5-5.7 12.3-5.7H670c6.8 0 10.5 7.9 6.1 13.1L553.8 512l122.3 145.9z")), t.CodeSandboxSquareFill = u("code-sandbox-square", l, i(r, "M307.9 536.7l87.6 49.9V681l96.7 55.9V524.8L307.9 418.4zM880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM755.7 653.2L512 794 268.3 653.2V371.8l110-63.6-.4-.2h.2L512 231l134 77h-.2l-.3.2 110.1 63.6v281.4zm-223.9 83.7l97.3-56.2v-94.1l87-49.5V418.5L531.8 525zm-20-352L418 331l-91.1 52.6 185.2 107 185.2-106.9-91.4-52.8z")), t.CodeSandboxCircleFill = u("code-sandbox-circle", l, i(r, "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm243.7 589.2L512 794 268.3 653.2V371.8l110-63.6-.4-.2h.2L512 231l134 77h-.2l-.3.2 110.1 63.6v281.4zM307.9 536.7l87.6 49.9V681l96.7 55.9V524.8L307.9 418.4zm203.9-151.8L418 331l-91.1 52.6 185.2 107 185.2-106.9-91.4-52.8zm20 352l97.3-56.2v-94.1l87-49.5V418.5L531.8 525z")), t.CodeFill = u("code", l, i(r, "M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM513.1 518.1l-192 161c-5.2 4.4-13.1.7-13.1-6.1v-62.7c0-2.3 1.1-4.6 2.9-6.1L420.7 512l-109.8-92.2a7.63 7.63 0 0 1-2.9-6.1V351c0-6.8 7.9-10.5 13.1-6.1l192 160.9c3.9 3.2 3.9 9.1 0 12.3zM716 673c0 4.4-3.4 8-7.5 8h-185c-4.1 0-7.5-3.6-7.5-8v-48c0-4.4 3.4-8 7.5-8h185c4.1 0 7.5 3.6 7.5 8v48z")), t.CompassFill = u("compass", l, i(r, "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zM327.3 702.4c-2 .9-4.4 0-5.3-2.1-.4-1-.4-2.2 0-3.2l98.7-225.5 132.1 132.1-225.5 98.7zm375.1-375.1l-98.7 225.5-132.1-132.1L697.1 322c2-.9 4.4 0 5.3 2.1.4 1 .4 2.1 0 3.2z")), t.CodepenCircleFill = u("codepen-circle", l, i(r, "M488.1 414.7V303.4L300.9 428l83.6 55.8zm254.1 137.7v-79.8l-59.8 39.9zM512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm278 533c0 1.1-.1 2.1-.2 3.1 0 .4-.1.7-.2 1a14.16 14.16 0 0 1-.8 3.2c-.2.6-.4 1.2-.6 1.7-.2.4-.4.8-.5 1.2-.3.5-.5 1.1-.8 1.6-.2.4-.4.7-.7 1.1-.3.5-.7 1-1 1.5-.3.4-.5.7-.8 1-.4.4-.8.9-1.2 1.3-.3.3-.6.6-1 .9-.4.4-.9.8-1.4 1.1-.4.3-.7.6-1.1.8-.1.1-.3.2-.4.3L525.2 786c-4 2.7-8.6 4-13.2 4-4.7 0-9.3-1.4-13.3-4L244.6 616.9c-.1-.1-.3-.2-.4-.3l-1.1-.8c-.5-.4-.9-.7-1.3-1.1-.3-.3-.6-.6-1-.9-.4-.4-.8-.8-1.2-1.3a7 7 0 0 1-.8-1c-.4-.5-.7-1-1-1.5-.2-.4-.5-.7-.7-1.1-.3-.5-.6-1.1-.8-1.6-.2-.4-.4-.8-.5-1.2-.2-.6-.4-1.2-.6-1.7-.1-.4-.3-.8-.4-1.2-.2-.7-.3-1.3-.4-2-.1-.3-.1-.7-.2-1-.1-1-.2-2.1-.2-3.1V427.9c0-1 .1-2.1.2-3.1.1-.3.1-.7.2-1a14.16 14.16 0 0 1 .8-3.2c.2-.6.4-1.2.6-1.7.2-.4.4-.8.5-1.2.2-.5.5-1.1.8-1.6.2-.4.4-.7.7-1.1.6-.9 1.2-1.7 1.8-2.5.4-.4.8-.9 1.2-1.3.3-.3.6-.6 1-.9.4-.4.9-.8 1.3-1.1.4-.3.7-.6 1.1-.8.1-.1.3-.2.4-.3L498.7 239c8-5.3 18.5-5.3 26.5 0l254.1 169.1c.1.1.3.2.4.3l1.1.8 1.4 1.1c.3.3.6.6 1 .9.4.4.8.8 1.2 1.3.7.8 1.3 1.6 1.8 2.5.2.4.5.7.7 1.1.3.5.6 1 .8 1.6.2.4.4.8.5 1.2.2.6.4 1.2.6 1.7.1.4.3.8.4 1.2.2.7.3 1.3.4 2 .1.3.1.7.2 1 .1 1 .2 2.1.2 3.1V597zm-254.1 13.3v111.3L723.1 597l-83.6-55.8zM281.8 472.6v79.8l59.8-39.9zM512 456.1l-84.5 56.4 84.5 56.4 84.5-56.4zM723.1 428L535.9 303.4v111.3l103.6 69.1zM384.5 541.2L300.9 597l187.2 124.6V610.3l-103.6-69.1z")), t.CodepenSquareFill = u("codepen-square", l, i(r, "M723.1 428L535.9 303.4v111.3l103.6 69.1zM512 456.1l-84.5 56.4 84.5 56.4 84.5-56.4zm23.9 154.2v111.3L723.1 597l-83.6-55.8zm-151.4-69.1L300.9 597l187.2 124.6V610.3l-103.6-69.1zM880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-90 485c0 1.1-.1 2.1-.2 3.1 0 .4-.1.7-.2 1a14.16 14.16 0 0 1-.8 3.2c-.2.6-.4 1.2-.6 1.7-.2.4-.4.8-.5 1.2-.3.5-.5 1.1-.8 1.6-.2.4-.4.7-.7 1.1-.3.5-.7 1-1 1.5-.3.4-.5.7-.8 1-.4.4-.8.9-1.2 1.3-.3.3-.6.6-1 .9-.4.4-.9.8-1.4 1.1-.4.3-.7.6-1.1.8-.1.1-.3.2-.4.3L525.2 786c-4 2.7-8.6 4-13.2 4-4.7 0-9.3-1.4-13.3-4L244.6 616.9c-.1-.1-.3-.2-.4-.3l-1.1-.8c-.5-.4-.9-.7-1.3-1.1-.3-.3-.6-.6-1-.9-.4-.4-.8-.8-1.2-1.3a7 7 0 0 1-.8-1c-.4-.5-.7-1-1-1.5-.2-.4-.5-.7-.7-1.1-.3-.5-.6-1.1-.8-1.6-.2-.4-.4-.8-.5-1.2-.2-.6-.4-1.2-.6-1.7-.1-.4-.3-.8-.4-1.2-.2-.7-.3-1.3-.4-2-.1-.3-.1-.7-.2-1-.1-1-.2-2.1-.2-3.1V427.9c0-1 .1-2.1.2-3.1.1-.3.1-.7.2-1a14.16 14.16 0 0 1 .8-3.2c.2-.6.4-1.2.6-1.7.2-.4.4-.8.5-1.2.2-.5.5-1.1.8-1.6.2-.4.4-.7.7-1.1.6-.9 1.2-1.7 1.8-2.5.4-.4.8-.9 1.2-1.3.3-.3.6-.6 1-.9.4-.4.9-.8 1.3-1.1.4-.3.7-.6 1.1-.8.1-.1.3-.2.4-.3L498.7 239c8-5.3 18.5-5.3 26.5 0l254.1 169.1c.1.1.3.2.4.3l1.1.8 1.4 1.1c.3.3.6.6 1 .9.4.4.8.8 1.2 1.3.7.8 1.3 1.6 1.8 2.5.2.4.5.7.7 1.1.3.5.6 1 .8 1.6.2.4.4.8.5 1.2.2.6.4 1.2.6 1.7.1.4.3.8.4 1.2.2.7.3 1.3.4 2 .1.3.1.7.2 1 .1 1 .2 2.1.2 3.1V597zm-47.8-44.6v-79.8l-59.8 39.9zm-460.4-79.8v79.8l59.8-39.9zm206.3-57.9V303.4L300.9 428l83.6 55.8z")), t.ContactsFill = u("contacts", l, i(r, "M928 224H768v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56H548v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56H328v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56H96c-17.7 0-32 14.3-32 32v576c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V256c0-17.7-14.3-32-32-32zM661 736h-43.9c-4.2 0-7.6-3.3-7.9-7.5-3.8-50.6-46-90.5-97.2-90.5s-93.4 40-97.2 90.5c-.3 4.2-3.7 7.5-7.9 7.5H363a8 8 0 0 1-8-8.4c2.8-53.3 32-99.7 74.6-126.1a111.8 111.8 0 0 1-29.1-75.5c0-61.9 49.9-112 111.4-112 61.5 0 111.4 50.1 111.4 112 0 29.1-11 55.5-29.1 75.5 42.7 26.5 71.8 72.8 74.6 126.1.4 4.6-3.2 8.4-7.8 8.4zM512 474c-28.5 0-51.7 23.3-51.7 52s23.2 52 51.7 52c28.5 0 51.7-23.3 51.7-52s-23.2-52-51.7-52z")), t.ControlFill = u("control", l, i(r, "M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM404 683v77c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8v-77c-41.7-13.6-72-52.8-72-99s30.3-85.5 72-99V264c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v221c41.7 13.6 72 52.8 72 99s-30.3 85.5-72 99zm279.6-143.9c.2 0 .3-.1.4-.1v221c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V539c.2 0 .3.1.4.1-42-13.4-72.4-52.7-72.4-99.1 0-46.4 30.4-85.7 72.4-99.1-.2 0-.3.1-.4.1v-77c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v77c-.2 0-.3-.1-.4-.1 42 13.4 72.4 52.7 72.4 99.1 0 46.4-30.4 85.7-72.4 99.1zM616 440a36 36 0 1 0 72 0 36 36 0 1 0-72 0zM403.4 566.5l-1.5-2.4c0-.1-.1-.1-.1-.2l-.9-1.2c-.1-.1-.2-.2-.2-.3-1-1.3-2-2.5-3.2-3.6l-.2-.2c-.4-.4-.8-.8-1.2-1.1-.8-.8-1.7-1.5-2.6-2.1h-.1l-1.2-.9c-.1-.1-.3-.2-.4-.3-1.2-.8-2.5-1.6-3.9-2.2-.2-.1-.5-.2-.7-.4-.4-.2-.7-.3-1.1-.5-.3-.1-.7-.3-1-.4-.5-.2-1-.4-1.5-.5-.4-.1-.9-.3-1.3-.4l-.9-.3-1.4-.3c-.2-.1-.5-.1-.7-.2-.7-.1-1.4-.3-2.1-.4-.2 0-.4 0-.6-.1-.6-.1-1.1-.1-1.7-.2-.2 0-.4 0-.7-.1-.8 0-1.5-.1-2.3-.1s-1.5 0-2.3.1c-.2 0-.4 0-.7.1-.6 0-1.2.1-1.7.2-.2 0-.4 0-.6.1-.7.1-1.4.2-2.1.4-.2.1-.5.1-.7.2l-1.4.3-.9.3c-.4.1-.9.3-1.3.4-.5.2-1 .4-1.5.5-.3.1-.7.3-1 .4-.4.2-.7.3-1.1.5-.2.1-.5.2-.7.4-1.3.7-2.6 1.4-3.9 2.2-.1.1-.3.2-.4.3l-1.2.9h-.1c-.9.7-1.8 1.4-2.6 2.1-.4.4-.8.7-1.2 1.1l-.2.2a54.8 54.8 0 0 0-3.2 3.6c-.1.1-.2.2-.2.3l-.9 1.2c0 .1-.1.1-.1.2l-1.5 2.4c-.1.2-.2.3-.3.5-2.7 5.1-4.3 10.9-4.3 17s1.6 12 4.3 17c.1.2.2.3.3.5l1.5 2.4c0 .1.1.1.1.2l.9 1.2c.1.1.2.2.2.3 1 1.3 2 2.5 3.2 3.6l.2.2c.4.4.8.8 1.2 1.1.8.8 1.7 1.5 2.6 2.1h.1l1.2.9c.1.1.3.2.4.3 1.2.8 2.5 1.6 3.9 2.2.2.1.5.2.7.4.4.2.7.3 1.1.5.3.1.7.3 1 .4.5.2 1 .4 1.5.5.4.1.9.3 1.3.4l.9.3 1.4.3c.2.1.5.1.7.2.7.1 1.4.3 2.1.4.2 0 .4 0 .6.1.6.1 1.1.1 1.7.2.2 0 .4 0 .7.1.8 0 1.5.1 2.3.1s1.5 0 2.3-.1c.2 0 .4 0 .7-.1.6 0 1.2-.1 1.7-.2.2 0 .4 0 .6-.1.7-.1 1.4-.2 2.1-.4.2-.1.5-.1.7-.2l1.4-.3.9-.3c.4-.1.9-.3 1.3-.4.5-.2 1-.4 1.5-.5.3-.1.7-.3 1-.4.4-.2.7-.3 1.1-.5.2-.1.5-.2.7-.4 1.3-.7 2.6-1.4 3.9-2.2.1-.1.3-.2.4-.3l1.2-.9h.1c.9-.7 1.8-1.4 2.6-2.1.4-.4.8-.7 1.2-1.1l.2-.2c1.1-1.1 2.2-2.4 3.2-3.6.1-.1.2-.2.2-.3l.9-1.2c0-.1.1-.1.1-.2l1.5-2.4c.1-.2.2-.3.3-.5 2.7-5.1 4.3-10.9 4.3-17s-1.6-12-4.3-17c-.1-.2-.2-.4-.3-.5z")), t.ContainerFill = u("container", l, i(r, "M832 64H192c-17.7 0-32 14.3-32 32v529c0-.6.4-1 1-1h219.3l5.2 24.7C397.6 708.5 450.8 752 512 752s114.4-43.5 126.4-103.3l5.2-24.7H863c.6 0 1 .4 1 1V96c0-17.7-14.3-32-32-32zM712 493c0 4.4-3.6 8-8 8H320c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8h384c4.4 0 8 3.6 8 8v48zm0-160c0 4.4-3.6 8-8 8H320c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8h384c4.4 0 8 3.6 8 8v48zm151 354H694.1c-11.6 32.8-32 62.3-59.1 84.7-34.5 28.6-78.2 44.3-123 44.3s-88.5-15.8-123-44.3a194.02 194.02 0 0 1-59.1-84.7H161c-.6 0-1-.4-1-1v242c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V686c0 .6-.4 1-1 1z")), t.CopyFill = u("copy", l, i(r, "M832 64H296c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496v688c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V96c0-17.7-14.3-32-32-32zM704 192H192c-17.7 0-32 14.3-32 32v530.7c0 8.5 3.4 16.6 9.4 22.6l173.3 173.3c2.2 2.2 4.7 4 7.4 5.5v1.9h4.2c3.5 1.3 7.2 2 11 2H704c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32zM382 896h-.2L232 746.2v-.2h150v150z")), t.CopyrightCircleFill = u("copyright-circle", l, i(r, "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm5.4 670c-110 0-173.4-73.2-173.4-194.9v-52.3C344 364.2 407.4 290 517.3 290c94.3 0 162.7 60.7 162.7 147.4 0 2.6-2.1 4.7-4.7 4.7h-56.7c-4.2 0-7.6-3.2-8-7.4-4-49.5-40-83.4-93-83.4-65.3 0-102.1 48.5-102.1 135.5v52.6c0 85.7 36.9 133.6 102.1 133.6 52.8 0 88.7-31.7 93-77.8.4-4.1 3.8-7.3 8-7.3h56.8c2.6 0 4.7 2.1 4.7 4.7 0 82.6-68.7 141.4-162.7 141.4z")), t.CreditCardFill = u("credit-card", l, i(r, "M928 160H96c-17.7 0-32 14.3-32 32v160h896V192c0-17.7-14.3-32-32-32zM64 832c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V440H64v392zm579-184c0-4.4 3.6-8 8-8h165c4.4 0 8 3.6 8 8v72c0 4.4-3.6 8-8 8H651c-4.4 0-8-3.6-8-8v-72z")), t.CrownFill = u("crown", l, i(r, "M899.6 276.5L705 396.4 518.4 147.5a8.06 8.06 0 0 0-12.9 0L319 396.4 124.3 276.5c-5.7-3.5-13.1 1.2-12.2 7.9L188.5 865c1.1 7.9 7.9 14 16 14h615.1c8 0 14.9-6 15.9-14l76.4-580.6c.8-6.7-6.5-11.4-12.3-7.9zM512 734.2c-62.1 0-112.6-50.5-112.6-112.6S449.9 509 512 509s112.6 50.5 112.6 112.6S574.1 734.2 512 734.2zm0-160.9c-26.6 0-48.2 21.6-48.2 48.3 0 26.6 21.6 48.3 48.2 48.3s48.2-21.6 48.2-48.3c0-26.6-21.6-48.3-48.2-48.3z")), t.CustomerServiceFill = u("customer-service", l, i(r, "M512 128c-212.1 0-384 171.9-384 384v360c0 13.3 10.7 24 24 24h184c35.3 0 64-28.7 64-64V624c0-35.3-28.7-64-64-64H200v-48c0-172.3 139.7-312 312-312s312 139.7 312 312v48H688c-35.3 0-64 28.7-64 64v208c0 35.3 28.7 64 64 64h184c13.3 0 24-10.7 24-24V512c0-212.1-171.9-384-384-384z")), t.DashboardFill = u("dashboard", l, i(r, "M924.8 385.6a446.7 446.7 0 0 0-96-142.4 446.7 446.7 0 0 0-142.4-96C631.1 123.8 572.5 112 512 112s-119.1 11.8-174.4 35.2a446.7 446.7 0 0 0-142.4 96 446.7 446.7 0 0 0-96 142.4C75.8 440.9 64 499.5 64 560c0 132.7 58.3 257.7 159.9 343.1l1.7 1.4c5.8 4.8 13.1 7.5 20.6 7.5h531.7c7.5 0 14.8-2.7 20.6-7.5l1.7-1.4C901.7 817.7 960 692.7 960 560c0-60.5-11.9-119.1-35.2-174.4zM482 232c0-4.4 3.6-8 8-8h44c4.4 0 8 3.6 8 8v80c0 4.4-3.6 8-8 8h-44c-4.4 0-8-3.6-8-8v-80zM270 582c0 4.4-3.6 8-8 8h-80c-4.4 0-8-3.6-8-8v-44c0-4.4 3.6-8 8-8h80c4.4 0 8 3.6 8 8v44zm90.7-204.5l-31.1 31.1a8.03 8.03 0 0 1-11.3 0L261.7 352a8.03 8.03 0 0 1 0-11.3l31.1-31.1c3.1-3.1 8.2-3.1 11.3 0l56.6 56.6c3.1 3.1 3.1 8.2 0 11.3zm291.1 83.6l-84.5 84.5c5 18.7.2 39.4-14.5 54.1a55.95 55.95 0 0 1-79.2 0 55.95 55.95 0 0 1 0-79.2 55.87 55.87 0 0 1 54.1-14.5l84.5-84.5c3.1-3.1 8.2-3.1 11.3 0l28.3 28.3c3.1 3.1 3.1 8.1 0 11.3zm43-52.4l-31.1-31.1a8.03 8.03 0 0 1 0-11.3l56.6-56.6c3.1-3.1 8.2-3.1 11.3 0l31.1 31.1c3.1 3.1 3.1 8.2 0 11.3l-56.6 56.6a8.03 8.03 0 0 1-11.3 0zM846 582c0 4.4-3.6 8-8 8h-80c-4.4 0-8-3.6-8-8v-44c0-4.4 3.6-8 8-8h80c4.4 0 8 3.6 8 8v44z")), t.DeleteFill = u("delete", l, i(r, "M864 256H736v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zm-200 0H360v-72h304v72z")), t.DiffFill = u("diff", l, i(r, "M854.2 306.6L611.3 72.9c-6-5.7-13.9-8.9-22.2-8.9H296c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h277l219 210.6V824c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V329.6c0-8.7-3.5-17-9.8-23zM553.4 201.4c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v704c0 17.7 14.3 32 32 32h512c17.7 0 32-14.3 32-32V397.3c0-8.5-3.4-16.6-9.4-22.6L553.4 201.4zM568 753c0 3.8-3.4 7-7.5 7h-225c-4.1 0-7.5-3.2-7.5-7v-42c0-3.8 3.4-7 7.5-7h225c4.1 0 7.5 3.2 7.5 7v42zm0-220c0 3.8-3.4 7-7.5 7H476v84.9c0 3.9-3.1 7.1-7 7.1h-42c-3.8 0-7-3.2-7-7.1V540h-84.5c-4.1 0-7.5-3.2-7.5-7v-42c0-3.9 3.4-7 7.5-7H420v-84.9c0-3.9 3.2-7.1 7-7.1h42c3.9 0 7 3.2 7 7.1V484h84.5c4.1 0 7.5 3.1 7.5 7v42z")), t.DingtalkCircleFill = u("dingtalk-circle", l, i(r, "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm227 385.3c-1 4.2-3.5 10.4-7 17.8h.1l-.4.7c-20.3 43.1-73.1 127.7-73.1 127.7s-.1-.2-.3-.5l-15.5 26.8h74.5L575.1 810l32.3-128h-58.6l20.4-84.7c-16.5 3.9-35.9 9.4-59 16.8 0 0-31.2 18.2-89.9-35 0 0-39.6-34.7-16.6-43.4 9.8-3.7 47.4-8.4 77-12.3 40-5.4 64.6-8.2 64.6-8.2S422 517 392.7 512.5c-29.3-4.6-66.4-53.1-74.3-95.8 0 0-12.2-23.4 26.3-12.3 38.5 11.1 197.9 43.2 197.9 43.2s-207.4-63.3-221.2-78.7c-13.8-15.4-40.6-84.2-37.1-126.5 0 0 1.5-10.5 12.4-7.7 0 0 153.3 69.7 258.1 107.9 104.8 37.9 195.9 57.3 184.2 106.7z")), t.DatabaseFill = u("database", l, i(r, "M832 64H192c-17.7 0-32 14.3-32 32v224h704V96c0-17.7-14.3-32-32-32zM288 232c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40zM160 928c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V704H160v224zm128-136c22.1 0 40 17.9 40 40s-17.9 40-40 40-40-17.9-40-40 17.9-40 40-40zM160 640h704V384H160v256zm128-168c22.1 0 40 17.9 40 40s-17.9 40-40 40-40-17.9-40-40 17.9-40 40-40z")), t.DingtalkSquareFill = u("dingtalk-square", l, i(r, "M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM739 449.3c-1 4.2-3.5 10.4-7 17.8h.1l-.4.7c-20.3 43.1-73.1 127.7-73.1 127.7s-.1-.2-.3-.5l-15.5 26.8h74.5L575.1 810l32.3-128h-58.6l20.4-84.7c-16.5 3.9-35.9 9.4-59 16.8 0 0-31.2 18.2-89.9-35 0 0-39.6-34.7-16.6-43.4 9.8-3.7 47.4-8.4 77-12.3 40-5.4 64.6-8.2 64.6-8.2S422 517 392.7 512.5c-29.3-4.6-66.4-53.1-74.3-95.8 0 0-12.2-23.4 26.3-12.3 38.5 11.1 197.9 43.2 197.9 43.2s-207.4-63.3-221.2-78.7c-13.8-15.4-40.6-84.2-37.1-126.5 0 0 1.5-10.5 12.4-7.7 0 0 153.3 69.7 258.1 107.9 104.8 37.9 195.9 57.3 184.2 106.7z")), t.DislikeFill = u("dislike", l, i(r, "M885.9 490.3c3.6-12 5.4-24.4 5.4-37 0-28.3-9.3-55.5-26.1-77.7 3.6-12 5.4-24.4 5.4-37 0-28.3-9.3-55.5-26.1-77.7 3.6-12 5.4-24.4 5.4-37 0-51.6-30.7-98.1-78.3-118.4a66.1 66.1 0 0 0-26.5-5.4H273v428h.3l85.8 310.8C372.9 889 418.9 924 470.9 924c29.7 0 57.4-11.8 77.9-33.4 20.5-21.5 31-49.7 29.5-79.4l-6-122.9h239.9c12.1 0 23.9-3.2 34.3-9.3 40.4-23.5 65.5-66.1 65.5-111 0-28.3-9.3-55.5-26.1-77.7zM112 132v364c0 17.7 14.3 32 32 32h65V100h-65c-17.7 0-32 14.3-32 32z")), t.DollarCircleFill = u("dollar-circle", l, i(r, "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm22.3 665.2l.2 31.7c0 4.4-3.6 8.1-8 8.1h-28.4c-4.4 0-8-3.6-8-8v-31.4C401.3 723 359.5 672.4 355 617.4c-.4-4.7 3.3-8.7 8-8.7h46.2c3.9 0 7.3 2.8 7.9 6.6 5.1 31.7 29.8 55.4 74.1 61.3V533.9l-24.7-6.3c-52.3-12.5-102.1-45.1-102.1-112.7 0-72.9 55.4-112.1 126.2-119v-33c0-4.4 3.6-8 8-8h28.1c4.4 0 8 3.6 8 8v32.7c68.5 6.9 119.9 46.9 125.9 109.2.5 4.7-3.2 8.8-8 8.8h-44.9c-4 0-7.4-3-7.9-6.9-4-29.2-27.4-53-65.5-58.2v134.3l25.4 5.9c64.8 16 108.9 47 108.9 116.4 0 75.3-56 117.3-134.3 124.1zM426.6 410.3c0 25.4 15.7 45.1 49.5 57.3 4.7 1.9 9.4 3.4 15 5v-124c-36.9 4.7-64.5 25.4-64.5 61.7zm116.5 135.2c-2.8-.6-5.6-1.3-8.8-2.2V677c42.6-3.8 72-27.2 72-66.4 0-30.7-15.9-50.7-63.2-65.1z")), t.DownCircleFill = u("down-circle", l, i(r, "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm184.5 353.7l-178 246a7.95 7.95 0 0 1-12.9 0l-178-246c-3.8-5.3 0-12.7 6.5-12.7H381c10.2 0 19.9 4.9 25.9 13.2L512 563.6l105.2-145.4c6-8.3 15.6-13.2 25.9-13.2H690c6.5 0 10.3 7.4 6.5 12.7z")), t.DownSquareFill = u("down-square", l, i(r, "M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM696.5 412.7l-178 246a7.95 7.95 0 0 1-12.9 0l-178-246c-3.8-5.3 0-12.7 6.5-12.7H381c10.2 0 19.9 4.9 25.9 13.2L512 558.6l105.2-145.4c6-8.3 15.6-13.2 25.9-13.2H690c6.5 0 10.3 7.4 6.5 12.7z")), t.DribbbleCircleFill = u("dribbble-circle", l, i(r, "M675.1 328.3a245.2 245.2 0 0 0-220.8-55.1c6.8 9.1 51.5 69.9 91.8 144 87.5-32.8 124.5-82.6 129-88.9zM554 552.8c-138.7 48.3-188.6 144.6-193 153.6 41.7 32.5 94.1 51.9 151 51.9 34.1 0 66.6-6.9 96.1-19.5-3.7-21.6-17.9-96.8-52.5-186.6l-1.6.6zm47.7-11.9c32.2 88.4 45.3 160.4 47.8 175.4 55.2-37.3 94.5-96.4 105.4-164.9-8.4-2.6-76.1-22.8-153.2-10.5zM512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 736c-158.8 0-288-129.2-288-288s129.2-288 288-288 288 129.2 288 288-129.2 288-288 288zm53.1-346.2c5.7 11.7 11.2 23.6 16.3 35.6 1.8 4.2 3.6 8.4 5.3 12.7 81.8-10.3 163.2 6.2 171.3 7.9-.5-58.1-21.3-111.4-55.5-153.3-5.3 7.1-46.5 60-137.4 97.1zM498.6 432c-40.8-72.5-84.7-133.4-91.2-142.3-68.8 32.5-120.3 95.9-136.2 172.2 11 .2 112.4.7 227.4-29.9zm30.6 82.5c3.2-1 6.4-2 9.7-2.9-6.2-14-12.9-28-19.9-41.7-122.8 36.8-242.1 35.2-252.8 35-.1 2.5-.1 5-.1 7.5 0 63.2 23.9 120.9 63.2 164.5 5.5-9.6 73-121.4 199.9-162.4z")), t.DribbbleSquareFill = u("dribbble-square", l, i(r, "M498.6 432c-40.8-72.5-84.7-133.4-91.2-142.3-68.8 32.5-120.3 95.9-136.2 172.2 11 .2 112.4.7 227.4-29.9zm66.5 21.8c5.7 11.7 11.2 23.6 16.3 35.6 1.8 4.2 3.6 8.4 5.3 12.7 81.8-10.3 163.2 6.2 171.3 7.9-.5-58.1-21.3-111.4-55.5-153.3-5.3 7.1-46.5 60-137.4 97.1zM880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM512 800c-158.8 0-288-129.2-288-288s129.2-288 288-288 288 129.2 288 288-129.2 288-288 288zm89.7-259.1c32.2 88.4 45.3 160.4 47.8 175.4 55.2-37.3 94.5-96.4 105.4-164.9-8.4-2.6-76.1-22.8-153.2-10.5zm-72.5-26.4c3.2-1 6.4-2 9.7-2.9-6.2-14-12.9-28-19.9-41.7-122.8 36.8-242.1 35.2-252.8 35-.1 2.5-.1 5-.1 7.5 0 63.2 23.9 120.9 63.2 164.5 5.5-9.6 73-121.4 199.9-162.4zm145.9-186.2a245.2 245.2 0 0 0-220.8-55.1c6.8 9.1 51.5 69.9 91.8 144 87.5-32.8 124.5-82.6 129-88.9zM554 552.8c-138.7 48.3-188.6 144.6-193 153.6 41.7 32.5 94.1 51.9 151 51.9 34.1 0 66.6-6.9 96.1-19.5-3.7-21.6-17.9-96.8-52.5-186.6l-1.6.6z")), t.DropboxCircleFill = u("dropbox-circle", l, i(r, "M663.8 455.5zm-151.5-93.8l-151.8 93.8 151.8 93.9 151.5-93.9zM512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm151.2 595.5L512.6 750l-151-90.5v-33.1l45.4 29.4 105.6-87.7 105.6 87.7 45.1-29.4v33.1zm-45.6-22.4l-105.3-87.7L407 637.1l-151-99.2 104.5-82.4L256 371.2 407 274l105.3 87.7L617.6 274 768 372.1l-104.2 83.5L768 539l-150.4 98.1z")), t.DropboxSquareFill = u("dropbox-square", l, i(r, "M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM663.2 659.5L512.6 750l-151-90.5v-33.1l45.4 29.4 105.6-87.7 105.6 87.7 45.1-29.4v33.1zm-45.6-22.4l-105.3-87.7L407 637.1l-151-99.2 104.5-82.4L256 371.2 407 274l105.3 87.7L617.6 274 768 372.1l-104.2 83.5L768 539l-150.4 98.1zM512.3 361.7l-151.8 93.8 151.8 93.9 151.5-93.9zm151.5 93.8z")), t.EnvironmentFill = u("environment", l, i(r, "M512 327c-29.9 0-58 11.6-79.2 32.8A111.6 111.6 0 0 0 400 439c0 29.9 11.7 58 32.8 79.2A111.6 111.6 0 0 0 512 551c29.9 0 58-11.7 79.2-32.8C612.4 497 624 468.9 624 439c0-29.9-11.6-58-32.8-79.2S541.9 327 512 327zm342.6-37.9a362.49 362.49 0 0 0-79.9-115.7 370.83 370.83 0 0 0-118.2-77.8C610.7 76.6 562.1 67 512 67c-50.1 0-98.7 9.6-144.5 28.5-44.3 18.3-84 44.5-118.2 77.8A363.6 363.6 0 0 0 169.4 289c-19.5 45-29.4 92.8-29.4 142 0 70.6 16.9 140.9 50.1 208.7 26.7 54.5 64 107.6 111 158.1 80.3 86.2 164.5 138.9 188.4 153a43.9 43.9 0 0 0 22.4 6.1c7.8 0 15.5-2 22.4-6.1 23.9-14.1 108.1-66.8 188.4-153 47-50.4 84.3-103.6 111-158.1C867.1 572 884 501.8 884 431.1c0-49.2-9.9-97-29.4-142zM512 615c-97.2 0-176-78.8-176-176s78.8-176 176-176 176 78.8 176 176-78.8 176-176 176z")), t.EditFill = u("edit", l, i(r, "M880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32zm-622.3-84c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 0 0 0-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 0 0 9.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9z")), t.ExclamationCircleFill = u("exclamation-circle", l, i(r, "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm-32 232c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V296zm32 440a48.01 48.01 0 0 1 0-96 48.01 48.01 0 0 1 0 96z")), t.EuroCircleFill = u("euro-circle", l, i(r, "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm63.5 375.8c4.4 0 8 3.6 8 8V475c0 4.4-3.6 8-8 8h-136c-.3 4.4-.3 9.1-.3 13.8v36h136.2c4.4 0 8 3.6 8 8V568c0 4.4-3.6 8-8 8H444.9c15.3 62 61.3 98.6 129.8 98.6 19.9 0 37.1-1.2 51.8-4.1 4.9-1 9.5 2.8 9.5 7.8v42.8c0 3.8-2.7 7-6.4 7.8-15.9 3.4-34.3 5.1-55.3 5.1-109.8 0-183-58.8-200.2-158H344c-4.4 0-8-3.6-8-8v-27.2c0-4.4 3.6-8 8-8h26.1v-36.9c0-4.4 0-8.8.3-12.8H344c-4.4 0-8-3.6-8-8v-27.2c0-4.4 3.6-8 8-8h31.7c19.7-94.2 92-149.9 198.6-149.9 20.9 0 39.4 1.9 55.3 5.4 3.7.8 6.3 4 6.3 7.8V346h.1c0 5.1-4.6 8.8-9.6 7.8-14.7-2.9-31.8-4.4-51.7-4.4-65.4 0-110.4 33.5-127.6 90.4h128.4z")), t.ExperimentFill = u("experiment", l, i(r, "M218.9 636.3l42.6 26.6c.1.1.3.2.4.3l12.7 8 .3.3a186.9 186.9 0 0 0 94.1 25.1c44.9 0 87.2-15.7 121-43.8a256.27 256.27 0 0 1 164.9-59.9c52.3 0 102.2 15.7 144.6 44.5l7.9 5-111.6-289V179.8h63.5c4.4 0 8-3.6 8-8V120c0-4.4-3.6-8-8-8H264.7c-4.4 0-8 3.6-8 8v51.9c0 4.4 3.6 8 8 8h63.5v173.6L218.9 636.3zm333-203.1c22 0 39.9 17.9 39.9 39.9S573.9 513 551.9 513 512 495.1 512 473.1s17.9-39.9 39.9-39.9zM878 825.1l-29.9-77.4-85.7-53.5-.1.1c-.7-.5-1.5-1-2.2-1.5l-8.1-5-.3-.3c-29-17.5-62.3-26.8-97-26.8-44.9 0-87.2 15.7-121 43.8a256.27 256.27 0 0 1-164.9 59.9c-53 0-103.5-16.1-146.2-45.6l-28.9-18.1L146 825.1c-2.8 7.4-4.3 15.2-4.3 23 0 35.2 28.6 63.8 63.8 63.8h612.9c7.9 0 15.7-1.5 23-4.3a63.6 63.6 0 0 0 36.6-82.5z")), t.EyeInvisibleFill = u("eye-invisible", l, i(r, "M508 624a112 112 0 0 0 112-112c0-3.28-.15-6.53-.43-9.74L498.26 623.57c3.21.28 6.45.43 9.74.43zm370.72-458.44L836 122.88a8 8 0 0 0-11.31 0L715.37 232.23Q624.91 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 0 0 0 51.5q56.7 119.43 136.55 191.45L112.56 835a8 8 0 0 0 0 11.31L155.25 889a8 8 0 0 0 11.31 0l712.16-712.12a8 8 0 0 0 0-11.32zM332 512a176 176 0 0 1 258.88-155.28l-48.62 48.62a112.08 112.08 0 0 0-140.92 140.92l-48.62 48.62A175.09 175.09 0 0 1 332 512z", "M942.2 486.2Q889.4 375 816.51 304.85L672.37 449A176.08 176.08 0 0 1 445 676.37L322.74 798.63Q407.82 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 0 0 0-51.5z")), t.EyeFill = u("eye", l, i(r, "M396 512a112 112 0 1 0 224 0 112 112 0 1 0-224 0zm546.2-25.8C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 0 0 0 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM508 688c-97.2 0-176-78.8-176-176s78.8-176 176-176 176 78.8 176 176-78.8 176-176 176z")), t.FacebookFill = u("facebook", l, i(r, "M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-92.4 233.5h-63.9c-50.1 0-59.8 23.8-59.8 58.8v77.1h119.6l-15.6 120.7h-104V912H539.2V602.2H434.9V481.4h104.3v-89c0-103.3 63.1-159.6 155.3-159.6 44.2 0 82.1 3.3 93.2 4.8v107.9z")), t.FastBackwardFill = u("fast-backward", l, i(n, "M517.6 273.5L230.2 499.3a16.14 16.14 0 0 0 0 25.4l287.4 225.8c10.7 8.4 26.4.8 26.4-12.7V286.2c0-13.5-15.7-21.1-26.4-12.7zm320 0L550.2 499.3a16.14 16.14 0 0 0 0 25.4l287.4 225.8c10.7 8.4 26.4.8 26.4-12.7V286.2c0-13.5-15.7-21.1-26.4-12.7zm-620-25.5h-51.2c-3.5 0-6.4 2.7-6.4 6v516c0 3.3 2.9 6 6.4 6h51.2c3.5 0 6.4-2.7 6.4-6V254c0-3.3-2.9-6-6.4-6z")), t.FastForwardFill = u("fast-forward", l, i(n, "M793.8 499.3L506.4 273.5c-10.7-8.4-26.4-.8-26.4 12.7v451.6c0 13.5 15.7 21.1 26.4 12.7l287.4-225.8a16.14 16.14 0 0 0 0-25.4zm-320 0L186.4 273.5c-10.7-8.4-26.4-.8-26.4 12.7v451.5c0 13.5 15.7 21.1 26.4 12.7l287.4-225.8c4.1-3.2 6.2-8 6.2-12.7 0-4.6-2.1-9.4-6.2-12.6zM857.6 248h-51.2c-3.5 0-6.4 2.7-6.4 6v516c0 3.3 2.9 6 6.4 6h51.2c3.5 0 6.4-2.7 6.4-6V254c0-3.3-2.9-6-6.4-6z")), t.FileAddFill = u("file-add", l, i(r, "M480 580H372a8 8 0 0 0-8 8v48a8 8 0 0 0 8 8h108v108a8 8 0 0 0 8 8h48a8 8 0 0 0 8-8V644h108a8 8 0 0 0 8-8v-48a8 8 0 0 0-8-8H544V472a8 8 0 0 0-8-8h-48a8 8 0 0 0-8 8v108zm374.6-291.3c6 6 9.4 14.1 9.4 22.6V928c0 17.7-14.3 32-32 32H192c-17.7 0-32-14.3-32-32V96c0-17.7 14.3-32 32-32h424.7c8.5 0 16.7 3.4 22.7 9.4l215.2 215.3zM790.2 326L602 137.8V326h188.2z")), t.FileExcelFill = u("file-excel", l, i(r, "M854.6 288.7c6 6 9.4 14.1 9.4 22.6V928c0 17.7-14.3 32-32 32H192c-17.7 0-32-14.3-32-32V96c0-17.7 14.3-32 32-32h424.7c8.5 0 16.7 3.4 22.7 9.4l215.2 215.3zM790.2 326L602 137.8V326h188.2zM575.34 477.84l-61.22 102.3L452.3 477.8a12 12 0 0 0-10.27-5.79h-38.44a12 12 0 0 0-6.4 1.85 12 12 0 0 0-3.75 16.56l82.34 130.42-83.45 132.78a12 12 0 0 0-1.84 6.39 12 12 0 0 0 12 12h34.46a12 12 0 0 0 10.21-5.7l62.7-101.47 62.3 101.45a12 12 0 0 0 10.23 5.72h37.48a12 12 0 0 0 6.48-1.9 12 12 0 0 0 3.62-16.58l-83.83-130.55 85.3-132.47a12 12 0 0 0 1.9-6.5 12 12 0 0 0-12-12h-35.7a12 12 0 0 0-10.29 5.84z")), t.FileExclamationFill = u("file-exclamation", l, i(r, "M854.6 288.7c6 6 9.4 14.1 9.4 22.6V928c0 17.7-14.3 32-32 32H192c-17.7 0-32-14.3-32-32V96c0-17.7 14.3-32 32-32h424.7c8.5 0 16.7 3.4 22.7 9.4l215.2 215.3zM790.2 326L602 137.8V326h188.2zM512 784a40 40 0 1 0 0-80 40 40 0 0 0 0 80zm32-152V448a8 8 0 0 0-8-8h-48a8 8 0 0 0-8 8v184a8 8 0 0 0 8 8h48a8 8 0 0 0 8-8z")), t.FileImageFill = u("file-image", l, i(r, "M854.6 288.7L639.4 73.4c-6-6-14.2-9.4-22.7-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.6-9.4-22.6zM400 402c22.1 0 40 17.9 40 40s-17.9 40-40 40-40-17.9-40-40 17.9-40 40-40zm296 294H328c-6.7 0-10.4-7.7-6.3-12.9l99.8-127.2a8 8 0 0 1 12.6 0l41.1 52.4 77.8-99.2a8 8 0 0 1 12.6 0l136.5 174c4.3 5.2.5 12.9-6.1 12.9zm-94-370V137.8L790.2 326H602z")), t.FileMarkdownFill = u("file-markdown", l, i(r, "M854.6 288.7c6 6 9.4 14.1 9.4 22.6V928c0 17.7-14.3 32-32 32H192c-17.7 0-32-14.3-32-32V96c0-17.7 14.3-32 32-32h424.7c8.5 0 16.7 3.4 22.7 9.4l215.2 215.3zM790.2 326L602 137.8V326h188.2zM426.13 600.93l59.11 132.97a16 16 0 0 0 14.62 9.5h24.06a16 16 0 0 0 14.63-9.51l59.1-133.35V758a16 16 0 0 0 16.01 16H641a16 16 0 0 0 16-16V486a16 16 0 0 0-16-16h-34.75a16 16 0 0 0-14.67 9.62L512.1 662.2l-79.48-182.59a16 16 0 0 0-14.67-9.61H383a16 16 0 0 0-16 16v272a16 16 0 0 0 16 16h27.13a16 16 0 0 0 16-16V600.93z")), t.FilePdfFill = u("file-pdf", l, i(r, "M854.6 288.7c6 6 9.4 14.1 9.4 22.6V928c0 17.7-14.3 32-32 32H192c-17.7 0-32-14.3-32-32V96c0-17.7 14.3-32 32-32h424.7c8.5 0 16.7 3.4 22.7 9.4l215.2 215.3zM790.2 326L602 137.8V326h188.2zM633.22 637.26c-15.18-.5-31.32.67-49.65 2.96-24.3-14.99-40.66-35.58-52.28-65.83l1.07-4.38 1.24-5.18c4.3-18.13 6.61-31.36 7.3-44.7.52-10.07-.04-19.36-1.83-27.97-3.3-18.59-16.45-29.46-33.02-30.13-15.45-.63-29.65 8-33.28 21.37-5.91 21.62-2.45 50.07 10.08 98.59-15.96 38.05-37.05 82.66-51.2 107.54-18.89 9.74-33.6 18.6-45.96 28.42-16.3 12.97-26.48 26.3-29.28 40.3-1.36 6.49.69 14.97 5.36 21.92 5.3 7.88 13.28 13 22.85 13.74 24.15 1.87 53.83-23.03 86.6-79.26 3.29-1.1 6.77-2.26 11.02-3.7l11.9-4.02c7.53-2.54 12.99-4.36 18.39-6.11 23.4-7.62 41.1-12.43 57.2-15.17 27.98 14.98 60.32 24.8 82.1 24.8 17.98 0 30.13-9.32 34.52-23.99 3.85-12.88.8-27.82-7.48-36.08-8.56-8.41-24.3-12.43-45.65-13.12zM385.23 765.68v-.36l.13-.34a54.86 54.86 0 0 1 5.6-10.76c4.28-6.58 10.17-13.5 17.47-20.87 3.92-3.95 8-7.8 12.79-12.12 1.07-.96 7.91-7.05 9.19-8.25l11.17-10.4-8.12 12.93c-12.32 19.64-23.46 33.78-33 43-3.51 3.4-6.6 5.9-9.1 7.51a16.43 16.43 0 0 1-2.61 1.42c-.41.17-.77.27-1.13.3a2.2 2.2 0 0 1-1.12-.15 2.07 2.07 0 0 1-1.27-1.91zM511.17 547.4l-2.26 4-1.4-4.38c-3.1-9.83-5.38-24.64-6.01-38-.72-15.2.49-24.32 5.29-24.32 6.74 0 9.83 10.8 10.07 27.05.22 14.28-2.03 29.14-5.7 35.65zm-5.81 58.46l1.53-4.05 2.09 3.8c11.69 21.24 26.86 38.96 43.54 51.31l3.6 2.66-4.39.9c-16.33 3.38-31.54 8.46-52.34 16.85 2.17-.88-21.62 8.86-27.64 11.17l-5.25 2.01 2.8-4.88c12.35-21.5 23.76-47.32 36.05-79.77zm157.62 76.26c-7.86 3.1-24.78.33-54.57-12.39l-7.56-3.22 8.2-.6c23.3-1.73 39.8-.45 49.42 3.07 4.1 1.5 6.83 3.39 8.04 5.55a4.64 4.64 0 0 1-1.36 6.31 6.7 6.7 0 0 1-2.17 1.28z")), t.FilePptFill = u("file-ppt", l, i(r, "M854.6 288.7c6 6 9.4 14.1 9.4 22.6V928c0 17.7-14.3 32-32 32H192c-17.7 0-32-14.3-32-32V96c0-17.7 14.3-32 32-32h424.7c8.5 0 16.7 3.4 22.7 9.4l215.2 215.3zM790.2 326L602 137.8V326h188.2zM468.53 760v-91.54h59.27c60.57 0 100.2-39.65 100.2-98.12 0-58.22-39.58-98.34-99.98-98.34H424a12 12 0 0 0-12 12v276a12 12 0 0 0 12 12h32.53a12 12 0 0 0 12-12zm0-139.33h34.9c47.82 0 67.19-12.93 67.19-50.33 0-32.05-18.12-50.12-49.87-50.12h-52.22v100.45z")), t.FileTextFill = u("file-text", l, i(r, "M854.6 288.7c6 6 9.4 14.1 9.4 22.6V928c0 17.7-14.3 32-32 32H192c-17.7 0-32-14.3-32-32V96c0-17.7 14.3-32 32-32h424.7c8.5 0 16.7 3.4 22.7 9.4l215.2 215.3zM790.2 326L602 137.8V326h188.2zM320 482a8 8 0 0 0-8 8v48a8 8 0 0 0 8 8h384a8 8 0 0 0 8-8v-48a8 8 0 0 0-8-8H320zm0 136a8 8 0 0 0-8 8v48a8 8 0 0 0 8 8h184a8 8 0 0 0 8-8v-48a8 8 0 0 0-8-8H320z")), t.FileWordFill = u("file-word", l, i(r, "M854.6 288.7c6 6 9.4 14.1 9.4 22.6V928c0 17.7-14.3 32-32 32H192c-17.7 0-32-14.3-32-32V96c0-17.7 14.3-32 32-32h424.7c8.5 0 16.7 3.4 22.7 9.4l215.2 215.3zM790.2 326L602 137.8V326h188.2zM512 566.1l52.81 197a12 12 0 0 0 11.6 8.9h31.77a12 12 0 0 0 11.6-8.88l74.37-276a12 12 0 0 0 .4-3.12 12 12 0 0 0-12-12h-35.57a12 12 0 0 0-11.7 9.31l-45.78 199.1-49.76-199.32A12 12 0 0 0 528.1 472h-32.2a12 12 0 0 0-11.64 9.1L434.6 680.01 388.5 481.3a12 12 0 0 0-11.68-9.29h-35.39a12 12 0 0 0-3.11.41 12 12 0 0 0-8.47 14.7l74.17 276A12 12 0 0 0 415.6 772h31.99a12 12 0 0 0 11.59-8.9l52.81-197z")), t.FileUnknownFill = u("file-unknown", l, i(r, "M854.6 288.7c6 6 9.4 14.1 9.4 22.6V928c0 17.7-14.3 32-32 32H192c-17.7 0-32-14.3-32-32V96c0-17.7 14.3-32 32-32h424.7c8.5 0 16.7 3.4 22.7 9.4l215.2 215.3zM790.2 326L602 137.8V326h188.2zM402 549c0 5.4 4.4 9.5 9.8 9.5h32.4c5.4 0 9.8-4.2 9.8-9.4 0-28.2 25.8-51.6 58-51.6s58 23.4 58 51.5c0 25.3-21 47.2-49.3 50.9-19.3 2.8-34.5 20.3-34.7 40.1v32c0 5.5 4.5 10 10 10h32c5.5 0 10-4.5 10-10v-12.2c0-6 4-11.5 9.7-13.3 44.6-14.4 75-54 74.3-98.9-.8-55.5-49.2-100.8-108.5-101.6-61.4-.7-111.5 45.6-111.5 103zm110 227a32 32 0 1 0 0-64 32 32 0 0 0 0 64z")), t.FileZipFill = u("file-zip", l, i(r, "M854.6 288.7c6 6 9.4 14.1 9.4 22.6V928c0 17.7-14.3 32-32 32H192c-17.7 0-32-14.3-32-32V96c0-17.7 14.3-32 32-32h424.7c8.5 0 16.7 3.4 22.7 9.4l215.2 215.3zM790.2 326L602 137.8V326h188.2zM296 136v64h64v-64h-64zm64 64v64h64v-64h-64zm-64 64v64h64v-64h-64zm64 64v64h64v-64h-64zm-64 64v64h64v-64h-64zm64 64v64h64v-64h-64zm-64 64v64h64v-64h-64zm0 64v160h128V584H296zm48 48h32v64h-32v-64z")), t.FileFill = u("file", l, i(r, "M854.6 288.7c6 6 9.4 14.1 9.4 22.6V928c0 17.7-14.3 32-32 32H192c-17.7 0-32-14.3-32-32V96c0-17.7 14.3-32 32-32h424.7c8.5 0 16.7 3.4 22.7 9.4l215.2 215.3zM790.2 326L602 137.8V326h188.2z")), t.FilterFill = u("filter", l, i(r, "M349 838c0 17.7 14.2 32 31.8 32h262.4c17.6 0 31.8-14.3 31.8-32V642H349v196zm531.1-684H143.9c-24.5 0-39.8 26.7-27.5 48l221.3 376h348.8l221.3-376c12.1-21.3-3.2-48-27.7-48z")), t.FireFill = u("fire", l, i(r, "M834.1 469.2A347.49 347.49 0 0 0 751.2 354l-29.1-26.7a8.09 8.09 0 0 0-13 3.3l-13 37.3c-8.1 23.4-23 47.3-44.1 70.8-1.4 1.5-3 1.9-4.1 2-1.1.1-2.8-.1-4.3-1.5-1.4-1.2-2.1-3-2-4.8 3.7-60.2-14.3-128.1-53.7-202C555.3 171 510 123.1 453.4 89.7l-41.3-24.3c-5.4-3.2-12.3 1-12 7.3l2.2 48c1.5 32.8-2.3 61.8-11.3 85.9-11 29.5-26.8 56.9-47 81.5a295.64 295.64 0 0 1-47.5 46.1 352.6 352.6 0 0 0-100.3 121.5A347.75 347.75 0 0 0 160 610c0 47.2 9.3 92.9 27.7 136a349.4 349.4 0 0 0 75.5 110.9c32.4 32 70 57.2 111.9 74.7C418.5 949.8 464.5 959 512 959s93.5-9.2 136.9-27.3A348.6 348.6 0 0 0 760.8 857c32.4-32 57.8-69.4 75.5-110.9a344.2 344.2 0 0 0 27.7-136c0-48.8-10-96.2-29.9-140.9z")), t.FlagFill = u("flag", l, i(r, "M880 305H624V192c0-17.7-14.3-32-32-32H184v-40c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v784c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V640h248v113c0 17.7 14.3 32 32 32h416c17.7 0 32-14.3 32-32V337c0-17.7-14.3-32-32-32z")), t.FolderAddFill = u("folder-add", l, i(r, "M880 298.4H521L403.7 186.2a8.15 8.15 0 0 0-5.5-2.2H144c-17.7 0-32 14.3-32 32v592c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V330.4c0-17.7-14.3-32-32-32zM632 577c0 3.8-3.4 7-7.5 7H540v84.9c0 3.9-3.2 7.1-7 7.1h-42c-3.8 0-7-3.2-7-7.1V584h-84.5c-4.1 0-7.5-3.2-7.5-7v-42c0-3.8 3.4-7 7.5-7H484v-84.9c0-3.9 3.2-7.1 7-7.1h42c3.8 0 7 3.2 7 7.1V528h84.5c4.1 0 7.5 3.2 7.5 7v42z")), t.FolderFill = u("folder", l, i(r, "M880 298.4H521L403.7 186.2a8.15 8.15 0 0 0-5.5-2.2H144c-17.7 0-32 14.3-32 32v592c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V330.4c0-17.7-14.3-32-32-32z")), t.FolderOpenFill = u("folder-open", l, i(r, "M928 444H820V330.4c0-17.7-14.3-32-32-32H473L355.7 186.2a8.15 8.15 0 0 0-5.5-2.2H96c-17.7 0-32 14.3-32 32v592c0 17.7 14.3 32 32 32h698c13 0 24.8-7.9 29.7-20l134-332c1.5-3.8 2.3-7.9 2.3-12 0-17.7-14.3-32-32-32zm-180 0H238c-13 0-24.8 7.9-29.7 20L136 643.2V256h188.5l119.6 114.4H748V444z")), t.ForwardFill = u("forward", l, i(n, "M825.8 498L538.4 249.9c-10.7-9.2-26.4-.9-26.4 14v496.3c0 14.9 15.7 23.2 26.4 14L825.8 526c8.3-7.2 8.3-20.8 0-28zm-320 0L218.4 249.9c-10.7-9.2-26.4-.9-26.4 14v496.3c0 14.9 15.7 23.2 26.4 14L505.8 526c4.1-3.6 6.2-8.8 6.2-14 0-5.2-2.1-10.4-6.2-14z")), t.FrownFill = u("frown", l, i(r, "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zM288 421a48.01 48.01 0 0 1 96 0 48.01 48.01 0 0 1-96 0zm376 272h-48.1c-4.2 0-7.8-3.2-8.1-7.4C604 636.1 562.5 597 512 597s-92.1 39.1-95.8 88.6c-.3 4.2-3.9 7.4-8.1 7.4H360a8 8 0 0 1-8-8.4c4.4-84.3 74.5-151.6 160-151.6s155.6 67.3 160 151.6a8 8 0 0 1-8 8.4zm24-224a48.01 48.01 0 0 1 0-96 48.01 48.01 0 0 1 0 96z")), t.FundFill = u("fund", l, i(r, "M926 164H94c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V196c0-17.7-14.3-32-32-32zm-92.3 194.4l-297 297.2a8.03 8.03 0 0 1-11.3 0L410.9 541.1 238.4 713.7a8.03 8.03 0 0 1-11.3 0l-36.8-36.8a8.03 8.03 0 0 1 0-11.3l214.9-215c3.1-3.1 8.2-3.1 11.3 0L531 565l254.5-254.6c3.1-3.1 8.2-3.1 11.3 0l36.8 36.8c3.2 3 3.2 8.1.1 11.2z")), t.FunnelPlotFill = u("funnel-plot", l, i(r, "M336.7 586h350.6l84.9-148H251.8zm543.4-432H143.9c-24.5 0-39.8 26.7-27.5 48L215 374h594l98.7-172c12.2-21.3-3.1-48-27.6-48zM349 838c0 17.7 14.2 32 31.8 32h262.4c17.6 0 31.8-14.3 31.8-32V650H349v188z")), t.GiftFill = u("gift", l, i(r, "M160 894c0 17.7 14.3 32 32 32h286V550H160v344zm386 32h286c17.7 0 32-14.3 32-32V550H546v376zm334-616H732.4c13.6-21.4 21.6-46.8 21.6-74 0-76.1-61.9-138-138-138-41.4 0-78.7 18.4-104 47.4-25.3-29-62.6-47.4-104-47.4-76.1 0-138 61.9-138 138 0 27.2 7.9 52.6 21.6 74H144c-17.7 0-32 14.3-32 32v140h366V310h68v172h366V342c0-17.7-14.3-32-32-32zm-402-4h-70c-38.6 0-70-31.4-70-70s31.4-70 70-70 70 31.4 70 70v70zm138 0h-70v-70c0-38.6 31.4-70 70-70s70 31.4 70 70-31.4 70-70 70z")), t.GithubFill = u("github", l, i(r, "M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z")),t.GitlabFill = u("gitlab", l, i(r, "M910.5 553.2l-109-370.8c-6.8-20.4-23.1-34.1-44.9-34.1s-39.5 12.3-46.3 32.7l-72.2 215.4H386.2L314 181.1c-6.8-20.4-24.5-32.7-46.3-32.7s-39.5 13.6-44.9 34.1L113.9 553.2c-4.1 13.6 1.4 28.6 12.3 36.8l385.4 289 386.7-289c10.8-8.1 16.3-23.1 12.2-36.8z")),t.GoldenFill = u("golden", l, i(r, "M905.9 806.7l-40.2-248c-.6-3.9-4-6.7-7.9-6.7H596.2c-3.9 0-7.3 2.8-7.9 6.7l-40.2 248c-.1.4-.1.9-.1 1.3 0 4.4 3.6 8 8 8h342c.4 0 .9 0 1.3-.1 4.3-.7 7.3-4.8 6.6-9.2zm-470.2-248c-.6-3.9-4-6.7-7.9-6.7H166.2c-3.9 0-7.3 2.8-7.9 6.7l-40.2 248c-.1.4-.1.9-.1 1.3 0 4.4 3.6 8 8 8h342c.4 0 .9 0 1.3-.1 4.4-.7 7.3-4.8 6.6-9.2l-40.2-248zM342 472h342c.4 0 .9 0 1.3-.1 4.4-.7 7.3-4.8 6.6-9.2l-40.2-248c-.6-3.9-4-6.7-7.9-6.7H382.2c-3.9 0-7.3 2.8-7.9 6.7l-40.2 248c-.1.4-.1.9-.1 1.3 0 4.4 3.6 8 8 8z")),t.GoogleCircleFill = u("google-circle", l, i(r, "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm167 633.6C638.4 735 583 757 516.9 757c-95.7 0-178.5-54.9-218.8-134.9C281.5 589 272 551.6 272 512s9.5-77 26.1-110.1c40.3-80.1 123.1-135 218.8-135 66 0 121.4 24.3 163.9 63.8L610.6 401c-25.4-24.3-57.7-36.6-93.6-36.6-63.8 0-117.8 43.1-137.1 101-4.9 14.7-7.7 30.4-7.7 46.6s2.8 31.9 7.7 46.6c19.3 57.9 73.3 101 137 101 33 0 61-8.7 82.9-23.4 26-17.4 43.2-43.3 48.9-74H516.9v-94.8h230.7c2.9 16.1 4.4 32.8 4.4 50.1 0 74.7-26.7 137.4-73 180.1z")),t.GooglePlusCircleFill = u("google-plus-circle", l, i(r, "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm36.5 558.8c-43.9 61.8-132.1 79.8-200.9 53.3-69-26.3-118-99.2-112.1-173.5 1.5-90.9 85.2-170.6 176.1-167.5 43.6-2 84.6 16.9 118 43.6-14.3 16.2-29 31.8-44.8 46.3-40.1-27.7-97.2-35.6-137.3-3.6-57.4 39.7-60 133.4-4.8 176.1 53.7 48.7 155.2 24.5 170.1-50.1-33.6-.5-67.4 0-101-1.1-.1-20.1-.2-40.1-.1-60.2 56.2-.2 112.5-.3 168.8.2 3.3 47.3-3 97.5-32 136.5zM791 536.5c-16.8.2-33.6.3-50.4.4-.2 16.8-.3 33.6-.3 50.4H690c-.2-16.8-.2-33.5-.3-50.3-16.8-.2-33.6-.3-50.4-.5v-50.1c16.8-.2 33.6-.3 50.4-.3.1-16.8.3-33.6.4-50.4h50.2l.3 50.4c16.8.2 33.6.2 50.4.3v50.1z")),t.GooglePlusSquareFill = u("google-plus-square", l, i(r, "M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM548.5 622.8c-43.9 61.8-132.1 79.8-200.9 53.3-69-26.3-118-99.2-112.1-173.5 1.5-90.9 85.2-170.6 176.1-167.5 43.6-2 84.6 16.9 118 43.6-14.3 16.2-29 31.8-44.8 46.3-40.1-27.7-97.2-35.6-137.3-3.6-57.4 39.7-60 133.4-4.8 176.1 53.7 48.7 155.2 24.5 170.1-50.1-33.6-.5-67.4 0-101-1.1-.1-20.1-.2-40.1-.1-60.2 56.2-.2 112.5-.3 168.8.2 3.3 47.3-3 97.5-32 136.5zM791 536.5c-16.8.2-33.6.3-50.4.4-.2 16.8-.3 33.6-.3 50.4H690c-.2-16.8-.2-33.5-.3-50.3-16.8-.2-33.6-.3-50.4-.5v-50.1c16.8-.2 33.6-.3 50.4-.3.1-16.8.3-33.6.4-50.4h50.2l.3 50.4c16.8.2 33.6.2 50.4.3v50.1z")),t.GoogleSquareFill = u("google-square", l, i(r, "M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM679 697.6C638.4 735 583 757 516.9 757c-95.7 0-178.5-54.9-218.8-134.9A245.02 245.02 0 0 1 272 512c0-39.6 9.5-77 26.1-110.1 40.3-80.1 123.1-135 218.8-135 66 0 121.4 24.3 163.9 63.8L610.6 401c-25.4-24.3-57.7-36.6-93.6-36.6-63.8 0-117.8 43.1-137.1 101-4.9 14.7-7.7 30.4-7.7 46.6s2.8 31.9 7.7 46.6c19.3 57.9 73.3 101 137 101 33 0 61-8.7 82.9-23.4 26-17.4 43.2-43.3 48.9-74H516.9v-94.8h230.7c2.9 16.1 4.4 32.8 4.4 50.1 0 74.7-26.7 137.4-73 180.1z")),t.HddFill = u("hdd", l, i(r, "M832 64H192c-17.7 0-32 14.3-32 32v224h704V96c0-17.7-14.3-32-32-32zM456 216c0 4.4-3.6 8-8 8H264c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8h184c4.4 0 8 3.6 8 8v48zM160 928c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V704H160v224zm576-136c22.1 0 40 17.9 40 40s-17.9 40-40 40-40-17.9-40-40 17.9-40 40-40zM160 640h704V384H160v256zm96-152c0-4.4 3.6-8 8-8h184c4.4 0 8 3.6 8 8v48c0 4.4-3.6 8-8 8H264c-4.4 0-8-3.6-8-8v-48z")),t.HeartFill = u("heart", l, i(r, "M923 283.6a260.04 260.04 0 0 0-56.9-82.8 264.4 264.4 0 0 0-84-55.5A265.34 265.34 0 0 0 679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 0 0-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9z")),t.HighlightFill = u("highlight", l, i(r, "M957.6 507.4L603.2 158.2a7.9 7.9 0 0 0-11.2 0L353.3 393.4a8.03 8.03 0 0 0-.1 11.3l.1.1 40 39.4-117.2 115.3a8.03 8.03 0 0 0-.1 11.3l.1.1 39.5 38.9-189.1 187H72.1c-4.4 0-8.1 3.6-8.1 8V860c0 4.4 3.6 8 8 8h344.9c2.1 0 4.1-.8 5.6-2.3l76.1-75.6 40.4 39.8a7.9 7.9 0 0 0 11.2 0l117.1-115.6 40.1 39.5a7.9 7.9 0 0 0 11.2 0l238.7-235.2c3.4-3 3.4-8 .3-11.2z")),t.HomeFill = u("home", l, i(r, "M946.5 505L534.6 93.4a31.93 31.93 0 0 0-45.2 0L77.5 505c-12 12-18.8 28.3-18.8 45.3 0 35.3 28.7 64 64 64h43.4V908c0 17.7 14.3 32 32 32H448V716h112v224h265.9c17.7 0 32-14.3 32-32V614.3h43.4c17 0 33.3-6.7 45.3-18.8 24.9-25 24.9-65.5-.1-90.5z")),t.HourglassFill = u("hourglass", l, i(r, "M742 318V184h86c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H196c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h86v134c0 81.5 42.4 153.2 106.4 194-64 40.8-106.4 112.5-106.4 194v134h-86c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h632c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8h-86V706c0-81.5-42.4-153.2-106.4-194 64-40.8 106.4-112.5 106.4-194z")),t.Html5Fill = u("html5", l, i(r, "M145.2 96l66 746.6L512 928l299.6-85.4L878.9 96H145.2zm595 177.1l-4.8 47.2-1.7 19.5H382.3l8.2 94.2h335.1l-3.3 24.3-21.2 242.2-1.7 16.2-187 51.6v.3h-1.2l-.3.1v-.1h-.1l-188.6-52L310.8 572h91.1l6.5 73.2 102.4 27.7h.4l102-27.6 11.4-118.6H510.9v-.1H306l-22.8-253.5-1.7-24.3h460.3l-1.6 24.3z")),t.IdcardFill = u("idcard", l, i(r, "M373 411c-28.5 0-51.7 23.3-51.7 52s23.2 52 51.7 52 51.7-23.3 51.7-52-23.2-52-51.7-52zm555-251H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zM608 420c0-4.4 1-8 2.3-8h123.4c1.3 0 2.3 3.6 2.3 8v48c0 4.4-1 8-2.3 8H610.3c-1.3 0-2.3-3.6-2.3-8v-48zm-86 253h-43.9c-4.2 0-7.6-3.3-7.9-7.5-3.8-50.5-46-90.5-97.2-90.5s-93.4 40-97.2 90.5c-.3 4.2-3.7 7.5-7.9 7.5H224a8 8 0 0 1-8-8.4c2.8-53.3 32-99.7 74.6-126.1a111.8 111.8 0 0 1-29.1-75.5c0-61.9 49.9-112 111.4-112s111.4 50.1 111.4 112c0 29.1-11 55.5-29.1 75.5 42.7 26.5 71.8 72.8 74.6 126.1.4 4.6-3.2 8.4-7.8 8.4zm278.9-53H615.1c-3.9 0-7.1-3.6-7.1-8v-48c0-4.4 3.2-8 7.1-8h185.7c3.9 0 7.1 3.6 7.1 8v48h.1c0 4.4-3.2 8-7.1 8z")),t.IeCircleFill = u("ie-circle", l, i(r, "M693.6 284.4c-24 0-51.1 11.7-72.6 22 46.3 18 86 57.3 112.3 99.6 7.1-18.9 14.6-47.9 14.6-67.9 0-32-22.8-53.7-54.3-53.7zM512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm253.9 492.9H437.1c0 100.4 144.3 136 196.8 47.4h120.8c-32.6 91.7-119.7 146-216.8 146-35.1 0-70.3-.1-101.7-15.6-87.4 44.5-180.3 56.6-180.3-42 0-45.8 23.2-107.1 44-145C335 484 381.3 422.8 435.6 374.5c-43.7 18.9-91.1 66.3-122 101.2 25.9-112.8 129.5-193.6 237.1-186.5 130-59.8 209.7-34.1 209.7 38.6 0 27.4-10.6 63.3-21.4 87.9 25.2 45.5 33.3 97.6 26.9 141.2zM540.5 399.1c-53.7 0-102 39.7-104 94.9h208c-2-55.1-50.6-94.9-104-94.9zM320.6 602.9c-73 152.4 11.5 172.2 100.3 123.3-46.6-27.5-82.6-72.2-100.3-123.3z")),t.IeSquareFill = u("ie-square", l, i(r, "M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM765.9 556.9H437.1c0 100.4 144.3 136 196.8 47.4h120.8c-32.6 91.7-119.7 146-216.8 146-35.1 0-70.3-.1-101.7-15.6-87.4 44.5-180.3 56.6-180.3-42 0-45.8 23.2-107.1 44-145C335 484 381.3 422.8 435.6 374.5c-43.7 18.9-91.1 66.3-122 101.2 25.9-112.8 129.5-193.6 237.1-186.5 130-59.8 209.7-34.1 209.7 38.6 0 27.4-10.6 63.3-21.4 87.9 25.2 45.5 33.3 97.6 26.9 141.2zm-72.3-272.5c-24 0-51.1 11.7-72.6 22 46.3 18 86 57.3 112.3 99.6 7.1-18.9 14.6-47.9 14.6-67.9 0-32-22.8-53.7-54.3-53.7zM540.5 399.1c-53.7 0-102 39.7-104 94.9h208c-2-55.1-50.6-94.9-104-94.9zM320.6 602.9c-73 152.4 11.5 172.2 100.3 123.3-46.6-27.5-82.6-72.2-100.3-123.3z")),t.InfoCircleFill = u("info-circle", l, i(r, "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm32 664c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272zm-32-344a48.01 48.01 0 0 1 0-96 48.01 48.01 0 0 1 0 96z")),t.InstagramFill = u("instagram", l, i(r, "M512 378.7c-73.4 0-133.3 59.9-133.3 133.3S438.6 645.3 512 645.3 645.3 585.4 645.3 512 585.4 378.7 512 378.7zM911.8 512c0-55.2.5-109.9-2.6-165-3.1-64-17.7-120.8-64.5-167.6-46.9-46.9-103.6-61.4-167.6-64.5-55.2-3.1-109.9-2.6-165-2.6-55.2 0-109.9-.5-165 2.6-64 3.1-120.8 17.7-167.6 64.5C132.6 226.3 118.1 283 115 347c-3.1 55.2-2.6 109.9-2.6 165s-.5 109.9 2.6 165c3.1 64 17.7 120.8 64.5 167.6 46.9 46.9 103.6 61.4 167.6 64.5 55.2 3.1 109.9 2.6 165 2.6 55.2 0 109.9.5 165-2.6 64-3.1 120.8-17.7 167.6-64.5 46.9-46.9 61.4-103.6 64.5-167.6 3.2-55.1 2.6-109.8 2.6-165zM512 717.1c-113.5 0-205.1-91.6-205.1-205.1S398.5 306.9 512 306.9 717.1 398.5 717.1 512 625.5 717.1 512 717.1zm213.5-370.7c-26.5 0-47.9-21.4-47.9-47.9s21.4-47.9 47.9-47.9 47.9 21.4 47.9 47.9a47.84 47.84 0 0 1-47.9 47.9z")),t.InsuranceFill = u("insurance", l, i(r, "M519.9 358.8h97.9v41.6h-97.9zm347-188.9L527.1 54.1C523 52.7 517.5 52 512 52s-11 .7-15.1 2.1L157.1 169.9c-8.3 2.8-15.1 12.4-15.1 21.2v482.4c0 8.8 5.7 20.4 12.6 25.9L499.3 968c3.5 2.7 8 4.1 12.6 4.1s9.2-1.4 12.6-4.1l344.7-268.6c6.9-5.4 12.6-17 12.6-25.9V191.1c.2-8.8-6.6-18.3-14.9-21.2zM411.3 656h-.2c0 4.4-3.6 8-8 8h-37.3c-4.4 0-8-3.6-8-8V471.4c-7.7 9.2-15.4 17.9-23.1 26a6.04 6.04 0 0 1-10.2-2.4l-13.2-43.5c-.6-2-.2-4.1 1.2-5.6 37-43.4 64.7-95.1 82.2-153.6 1.1-3.5 5-5.3 8.4-3.7l38.6 18.3c2.7 1.3 4.1 4.4 3.2 7.2a429.2 429.2 0 0 1-33.6 79V656zm296.5-49.2l-26.3 35.3a5.92 5.92 0 0 1-8.9.7c-30.6-29.3-56.8-65.2-78.1-106.9V656c0 4.4-3.6 8-8 8h-36.2c-4.4 0-8-3.6-8-8V536c-22 44.7-49 80.8-80.6 107.6a5.9 5.9 0 0 1-8.9-1.4L430 605.7a6 6 0 0 1 1.6-8.1c28.6-20.3 51.9-45.2 71-76h-55.1c-4.4 0-8-3.6-8-8V478c0-4.4 3.6-8 8-8h94.9v-18.6h-65.9c-4.4 0-8-3.6-8-8V316c0-4.4 3.6-8 8-8h184.7c4.4 0 8 3.6 8 8v127.2c0 4.4-3.6 8-8 8h-66.7v18.6h98.8c4.4 0 8 3.6 8 8v35.6c0 4.4-3.6 8-8 8h-59c18.1 29.1 41.8 54.3 72.3 76.9 2.6 2.1 3.2 5.9 1.2 8.5z")),t.InteractionFill = u("interaction", l, i(r, "M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM726 585.7c0 55.3-44.7 100.1-99.7 100.1H420.6v53.4c0 5.7-6.5 8.8-10.9 5.3l-109.1-85.7c-3.5-2.7-3.5-8 0-10.7l109.1-85.7c4.4-3.5 10.9-.3 10.9 5.3v53.4h205.7c19.6 0 35.5-16 35.5-35.6v-78.9c0-3.7 3-6.8 6.8-6.8h50.7c3.7 0 6.8 3 6.8 6.8v79.1zm-2.6-209.9l-109.1 85.7c-4.4 3.5-10.9.3-10.9-5.3v-53.4H397.7c-19.6 0-35.5 16-35.5 35.6v78.9c0 3.7-3 6.8-6.8 6.8h-50.7c-3.7 0-6.8-3-6.8-6.8v-78.9c0-55.3 44.7-100.1 99.7-100.1h205.7v-53.4c0-5.7 6.5-8.8 10.9-5.3l109.1 85.7c3.6 2.5 3.6 7.8.1 10.5z")),t.InterationFill = u("interation", l, i(r, "M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM726 585.7c0 55.3-44.7 100.1-99.7 100.1H420.6v53.4c0 5.7-6.5 8.8-10.9 5.3l-109.1-85.7c-3.5-2.7-3.5-8 0-10.7l109.1-85.7c4.4-3.5 10.9-.3 10.9 5.3v53.4h205.7c19.6 0 35.5-16 35.5-35.6v-78.9c0-3.7 3-6.8 6.8-6.8h50.7c3.7 0 6.8 3 6.8 6.8v79.1zm-2.6-209.9l-109.1 85.7c-4.4 3.5-10.9.3-10.9-5.3v-53.4H397.7c-19.6 0-35.5 16-35.5 35.6v78.9c0 3.7-3 6.8-6.8 6.8h-50.7c-3.7 0-6.8-3-6.8-6.8v-78.9c0-55.3 44.7-100.1 99.7-100.1h205.7v-53.4c0-5.7 6.5-8.8 10.9-5.3l109.1 85.7c3.6 2.5 3.6 7.8.1 10.5z")),t.LayoutFill = u("layout", l, i(r, "M384 912h496c17.7 0 32-14.3 32-32V340H384v572zm496-800H384v164h528V144c0-17.7-14.3-32-32-32zm-768 32v736c0 17.7 14.3 32 32 32h176V112H144c-17.7 0-32 14.3-32 32z")),t.LeftCircleFill = u("left-circle", l, i(r, "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm104 316.9c0 10.2-4.9 19.9-13.2 25.9L457.4 512l145.4 105.2c8.3 6 13.2 15.6 13.2 25.9V690c0 6.5-7.4 10.3-12.7 6.5l-246-178a7.95 7.95 0 0 1 0-12.9l246-178a8 8 0 0 1 12.7 6.5v46.8z")),t.LeftSquareFill = u("left-square", l, i(r, "M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM624 380.9c0 10.2-4.9 19.9-13.2 25.9L465.4 512l145.4 105.2c8.3 6 13.2 15.6 13.2 25.9V690c0 6.5-7.4 10.3-12.7 6.5l-246-178a7.95 7.95 0 0 1 0-12.9l246-178c5.3-3.8 12.7 0 12.7 6.5v46.8z")),t.LikeFill = u("like", l, i(r, "M885.9 533.7c16.8-22.2 26.1-49.4 26.1-77.7 0-44.9-25.1-87.4-65.5-111.1a67.67 67.67 0 0 0-34.3-9.3H572.4l6-122.9c1.4-29.7-9.1-57.9-29.5-79.4A106.62 106.62 0 0 0 471 99.9c-52 0-98 35-111.8 85.1l-85.9 311h-.3v428h472.3c9.2 0 18.2-1.8 26.5-5.4 47.6-20.3 78.3-66.8 78.3-118.4 0-12.6-1.8-25-5.4-37 16.8-22.2 26.1-49.4 26.1-77.7 0-12.6-1.8-25-5.4-37 16.8-22.2 26.1-49.4 26.1-77.7-.2-12.6-2-25.1-5.6-37.1zM112 528v364c0 17.7 14.3 32 32 32h65V496h-65c-17.7 0-32 14.3-32 32z")),t.LockFill = u("lock", l, i(r, "M832 464h-68V240c0-70.7-57.3-128-128-128H388c-70.7 0-128 57.3-128 128v224h-68c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V496c0-17.7-14.3-32-32-32zM540 701v53c0 4.4-3.6 8-8 8h-40c-4.4 0-8-3.6-8-8v-53a48.01 48.01 0 1 1 56 0zm152-237H332V240c0-30.9 25.1-56 56-56h248c30.9 0 56 25.1 56 56v224z")),t.LinkedinFill = u("linkedin", l, i(r, "M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM349.3 793.7H230.6V411.9h118.7v381.8zm-59.3-434a68.8 68.8 0 1 1 68.8-68.8c-.1 38-30.9 68.8-68.8 68.8zm503.7 434H675.1V608c0-44.3-.8-101.2-61.7-101.2-61.7 0-71.2 48.2-71.2 98v188.9H423.7V411.9h113.8v52.2h1.6c15.8-30 54.5-61.7 112.3-61.7 120.2 0 142.3 79.1 142.3 181.9v209.4z")),t.MailFill = u("mail", l, i(r, "M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-80.8 108.9L531.7 514.4c-7.8 6.1-18.7 6.1-26.5 0L189.6 268.9A7.2 7.2 0 0 1 194 256h648.8a7.2 7.2 0 0 1 4.4 12.9z")),t.MedicineBoxFill = u("medicine-box", l, i(r, "M839.2 278.1a32 32 0 0 0-30.4-22.1H736V144c0-17.7-14.3-32-32-32H320c-17.7 0-32 14.3-32 32v112h-72.8a31.9 31.9 0 0 0-30.4 22.1L112 502v378c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V502l-72.8-223.9zM660 628c0 4.4-3.6 8-8 8H544v108c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V636H372c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8h108V464c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v108h108c4.4 0 8 3.6 8 8v48zm4-372H360v-72h304v72z")),t.MediumCircleFill = u("medium-circle", l, i(r, "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm256 253.7l-40.8 39.1c-3.6 2.7-5.3 7.1-4.6 11.4v287.7c-.7 4.4 1 8.8 4.6 11.4l40 39.1v8.7H566.4v-8.3l41.3-40.1c4.1-4.1 4.1-5.3 4.1-11.4V422.5l-115 291.6h-15.5L347.5 422.5V618c-1.2 8.2 1.7 16.5 7.5 22.4l53.8 65.1v8.7H256v-8.7l53.8-65.1a26.1 26.1 0 0 0 7-22.4V392c.7-6.3-1.7-12.4-6.5-16.7l-47.8-57.6V309H411l114.6 251.5 100.9-251.3H768v8.5z")),t.MediumSquareFill = u("medium-square", l, i(r, "M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM768 317.7l-40.8 39.1c-3.6 2.7-5.3 7.1-4.6 11.4v287.7c-.7 4.4 1 8.8 4.6 11.4l40 39.1v8.7H566.4v-8.3l41.3-40.1c4.1-4.1 4.1-5.3 4.1-11.4V422.5l-115 291.6h-15.5L347.5 422.5V618c-1.2 8.2 1.7 16.5 7.5 22.4l53.8 65.1v8.7H256v-8.7l53.8-65.1a26.1 26.1 0 0 0 7-22.4V392c.7-6.3-1.7-12.4-6.5-16.7l-47.8-57.6V309H411l114.6 251.5 100.9-251.3H768v8.5z")),t.MehFill = u("meh", l, i(r, "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zM288 421a48.01 48.01 0 0 1 96 0 48.01 48.01 0 0 1-96 0zm384 200c0 4.4-3.6 8-8 8H360c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8h304c4.4 0 8 3.6 8 8v48zm16-152a48.01 48.01 0 0 1 0-96 48.01 48.01 0 0 1 0 96z")),t.MessageFill = u("message", l, i(r, "M924.3 338.4a447.57 447.57 0 0 0-96.1-143.3 443.09 443.09 0 0 0-143-96.3A443.91 443.91 0 0 0 512 64h-2c-60.5.3-119 12.3-174.1 35.9a444.08 444.08 0 0 0-141.7 96.5 445 445 0 0 0-95 142.8A449.89 449.89 0 0 0 65 514.1c.3 69.4 16.9 138.3 47.9 199.9v152c0 25.4 20.6 46 45.9 46h151.8a447.72 447.72 0 0 0 199.5 48h2.1c59.8 0 117.7-11.6 172.3-34.3A443.2 443.2 0 0 0 827 830.5c41.2-40.9 73.6-88.7 96.3-142 23.5-55.2 35.5-113.9 35.8-174.5.2-60.9-11.6-120-34.8-175.6zM312.4 560c-26.4 0-47.9-21.5-47.9-48s21.5-48 47.9-48 47.9 21.5 47.9 48-21.4 48-47.9 48zm199.6 0c-26.4 0-47.9-21.5-47.9-48s21.5-48 47.9-48 47.9 21.5 47.9 48-21.5 48-47.9 48zm199.6 0c-26.4 0-47.9-21.5-47.9-48s21.5-48 47.9-48 47.9 21.5 47.9 48-21.5 48-47.9 48z")),t.MinusCircleFill = u("minus-circle", l, i(r, "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm192 472c0 4.4-3.6 8-8 8H328c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8h368c4.4 0 8 3.6 8 8v48z")),t.MinusSquareFill = u("minus-square", l, i(r, "M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM704 536c0 4.4-3.6 8-8 8H328c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8h368c4.4 0 8 3.6 8 8v48z")),t.MobileFill = u("mobile", l, i(r, "M744 62H280c-35.3 0-64 28.7-64 64v768c0 35.3 28.7 64 64 64h464c35.3 0 64-28.7 64-64V126c0-35.3-28.7-64-64-64zM512 824c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40z")),t.MoneyCollectFill = u("money-collect", l, i(r, "M911.5 699.7a8 8 0 0 0-10.3-4.8L840 717.2V179c0-37.6-30.4-68-68-68H252c-37.6 0-68 30.4-68 68v538.2l-61.3-22.3c-.9-.3-1.8-.5-2.7-.5-4.4 0-8 3.6-8 8V762c0 3.3 2.1 6.3 5.3 7.5L501 909.1c7.1 2.6 14.8 2.6 21.9 0l383.8-139.5c3.2-1.2 5.3-4.2 5.3-7.5v-59.6c0-1-.2-1.9-.5-2.8zm-243.8-377L564 514.3h57.6c4.4 0 8 3.6 8 8v27.1c0 4.4-3.6 8-8 8h-76.3v39h76.3c4.4 0 8 3.6 8 8v27.1c0 4.4-3.6 8-8 8h-76.3V703c0 4.4-3.6 8-8 8h-49.9c-4.4 0-8-3.6-8-8v-63.4h-76c-4.4 0-8-3.6-8-8v-27.1c0-4.4 3.6-8 8-8h76v-39h-76c-4.4 0-8-3.6-8-8v-27.1c0-4.4 3.6-8 8-8h57L356.5 322.8c-2.1-3.8-.7-8.7 3.2-10.8 1.2-.7 2.5-1 3.8-1h55.7a8 8 0 0 1 7.1 4.4L511 484.2h3.3L599 315.4c1.3-2.7 4.1-4.4 7.1-4.4h54.5c4.4 0 8 3.6 8.1 7.9 0 1.3-.4 2.6-1 3.8z")),t.PauseCircleFill = u("pause-circle", l, i(r, "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm-80 600c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V360c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v304zm224 0c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V360c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v304z")),t.PayCircleFill = u("pay-circle", l, i(r, "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm166.6 246.8L567.5 515.6h62c4.4 0 8 3.6 8 8v29.9c0 4.4-3.6 8-8 8h-82V603h82c4.4 0 8 3.6 8 8v29.9c0 4.4-3.6 8-8 8h-82V717c0 4.4-3.6 8-8 8h-54.3c-4.4 0-8-3.6-8-8v-68.1h-81.7c-4.4 0-8-3.6-8-8V611c0-4.4 3.6-8 8-8h81.7v-41.5h-81.7c-4.4 0-8-3.6-8-8v-29.9c0-4.4 3.6-8 8-8h61.4L345.4 310.8a8.07 8.07 0 0 1 7-11.9h60.7c3 0 5.8 1.7 7.1 4.4l90.6 180h3.4l90.6-180a8 8 0 0 1 7.1-4.4h59.5c4.4 0 8 3.6 8 8 .2 1.4-.2 2.7-.8 3.9z")),t.NotificationFill = u("notification", l, i(r, "M880 112c-3.8 0-7.7.7-11.6 2.3L292 345.9H128c-8.8 0-16 7.4-16 16.6v299c0 9.2 7.2 16.6 16 16.6h101.6c-3.7 11.6-5.6 23.9-5.6 36.4 0 65.9 53.8 119.5 120 119.5 55.4 0 102.1-37.6 115.9-88.4l408.6 164.2c3.9 1.5 7.8 2.3 11.6 2.3 16.9 0 32-14.2 32-33.2V145.2C912 126.2 897 112 880 112zM344 762.3c-26.5 0-48-21.4-48-47.8 0-11.2 3.9-21.9 11-30.4l84.9 34.1c-2 24.6-22.7 44.1-47.9 44.1z")),t.PhoneFill = u("phone", l, i(r, "M885.6 230.2L779.1 123.8a80.83 80.83 0 0 0-57.3-23.8c-21.7 0-42.1 8.5-57.4 23.8L549.8 238.4a80.83 80.83 0 0 0-23.8 57.3c0 21.7 8.5 42.1 23.8 57.4l83.8 83.8A393.82 393.82 0 0 1 553.1 553 395.34 395.34 0 0 1 437 633.8L353.2 550a80.83 80.83 0 0 0-57.3-23.8c-21.7 0-42.1 8.5-57.4 23.8L123.8 664.5a80.89 80.89 0 0 0-23.8 57.4c0 21.7 8.5 42.1 23.8 57.4l106.3 106.3c24.4 24.5 58.1 38.4 92.7 38.4 7.3 0 14.3-.6 21.2-1.8 134.8-22.2 268.5-93.9 376.4-201.7C828.2 612.8 899.8 479.2 922.3 344c6.8-41.3-6.9-83.8-36.7-113.8z")),t.PictureFill = u("picture", l, i(r, "M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zM338 304c35.3 0 64 28.7 64 64s-28.7 64-64 64-64-28.7-64-64 28.7-64 64-64zm513.9 437.1a8.11 8.11 0 0 1-5.2 1.9H177.2c-4.4 0-8-3.6-8-8 0-1.9.7-3.7 1.9-5.2l170.3-202c2.8-3.4 7.9-3.8 11.3-1 .3.3.7.6 1 1l99.4 118 158.1-187.5c2.8-3.4 7.9-3.8 11.3-1 .3.3.7.6 1 1l229.6 271.6c2.6 3.3 2.2 8.4-1.2 11.2z")),t.PieChartFill = u("pie-chart", l, i(r, "M863.1 518.5H505.5V160.9c0-4.4-3.6-8-8-8h-26a398.57 398.57 0 0 0-282.5 117 397.47 397.47 0 0 0-85.6 127C82.6 446.2 72 498.5 72 552.5S82.6 658.7 103.4 708c20.1 47.5 48.9 90.3 85.6 127 36.7 36.7 79.4 65.5 127 85.6a396.64 396.64 0 0 0 155.6 31.5 398.57 398.57 0 0 0 282.5-117c36.7-36.7 65.5-79.4 85.6-127a396.64 396.64 0 0 0 31.5-155.6v-26c-.1-4.4-3.7-8-8.1-8zM951 463l-2.6-28.2c-8.5-92-49.3-178.8-115.1-244.3A398.5 398.5 0 0 0 588.4 75.6L560.1 73c-4.7-.4-8.7 3.2-8.7 7.9v383.7c0 4.4 3.6 8 8 8l383.6-1c4.7-.1 8.4-4 8-8.6z")),t.PlayCircleFill = u("play-circle", l, i(r, "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm144.1 454.9L437.7 677.8a8.02 8.02 0 0 1-12.7-6.5V353.7a8 8 0 0 1 12.7-6.5L656.1 506a7.9 7.9 0 0 1 0 12.9z")),t.PlaySquareFill = u("play-square", l, i(r, "M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM641.7 520.8L442.3 677.6c-7.4 5.8-18.3.6-18.3-8.8V355.3c0-9.4 10.9-14.7 18.3-8.8l199.4 156.7a11.2 11.2 0 0 1 0 17.6z")),t.PlusCircleFill = u("plus-circle", l, i(r, "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm192 472c0 4.4-3.6 8-8 8H544v152c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V544H328c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8h152V328c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v152h152c4.4 0 8 3.6 8 8v48z")),t.PlusSquareFill = u("plus-square", l, i(r, "M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM704 536c0 4.4-3.6 8-8 8H544v152c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V544H328c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8h152V328c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v152h152c4.4 0 8 3.6 8 8v48z")),t.PoundCircleFill = u("pound-circle", l, i(r, "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm146 658c0 4.4-3.6 8-8 8H376.2c-4.4 0-8-3.6-8-8v-38.5c0-3.7 2.5-6.9 6.1-7.8 44-10.9 72.8-49 72.8-94.2 0-14.7-2.5-29.4-5.9-44.2H374c-4.4 0-8-3.6-8-8v-30c0-4.4 3.6-8 8-8h53.7c-7.8-25.1-14.6-50.7-14.6-77.1 0-75.8 58.6-120.3 151.5-120.3 26.5 0 51.4 5.5 70.3 12.7 3.1 1.2 5.2 4.2 5.2 7.5v39.5a8 8 0 0 1-10.6 7.6c-17.9-6.4-39-10.5-60.4-10.5-53.3 0-87.3 26.6-87.3 70.2 0 24.7 6.2 47.9 13.4 70.5h112c4.4 0 8 3.6 8 8v30c0 4.4-3.6 8-8 8h-98.6c3.1 13.2 5.3 26.9 5.3 41 0 40.7-16.5 73.9-43.9 91.1v4.7h180c4.4 0 8 3.6 8 8V722z")),t.PrinterFill = u("printer", l, i(r, "M732 120c0-4.4-3.6-8-8-8H300c-4.4 0-8 3.6-8 8v148h440V120zm120 212H172c-44.2 0-80 35.8-80 80v328c0 17.7 14.3 32 32 32h168v132c0 4.4 3.6 8 8 8h424c4.4 0 8-3.6 8-8V772h168c17.7 0 32-14.3 32-32V412c0-44.2-35.8-80-80-80zM664 844H360V568h304v276zm164-360c0 4.4-3.6 8-8 8h-40c-4.4 0-8-3.6-8-8v-40c0-4.4 3.6-8 8-8h40c4.4 0 8 3.6 8 8v40z")),t.ProfileFill = u("profile", l, i(r, "M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM380 696c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40zm0-144c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40zm0-144c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40zm304 272c0 4.4-3.6 8-8 8H492c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8h184c4.4 0 8 3.6 8 8v48zm0-144c0 4.4-3.6 8-8 8H492c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8h184c4.4 0 8 3.6 8 8v48zm0-144c0 4.4-3.6 8-8 8H492c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8h184c4.4 0 8 3.6 8 8v48z")),t.ProjectFill = u("project", l, i(r, "M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM368 744c0 4.4-3.6 8-8 8h-80c-4.4 0-8-3.6-8-8V280c0-4.4 3.6-8 8-8h80c4.4 0 8 3.6 8 8v464zm192-280c0 4.4-3.6 8-8 8h-80c-4.4 0-8-3.6-8-8V280c0-4.4 3.6-8 8-8h80c4.4 0 8 3.6 8 8v184zm192 72c0 4.4-3.6 8-8 8h-80c-4.4 0-8-3.6-8-8V280c0-4.4 3.6-8 8-8h80c4.4 0 8 3.6 8 8v256z")),t.PushpinFill = u("pushpin", l, i(r, "M878.3 392.1L631.9 145.7c-6.5-6.5-15-9.7-23.5-9.7s-17 3.2-23.5 9.7L423.8 306.9c-12.2-1.4-24.5-2-36.8-2-73.2 0-146.4 24.1-206.5 72.3-15.4 12.3-16.6 35.4-2.7 49.4l181.7 181.7-215.4 215.2a15.8 15.8 0 0 0-4.6 9.8l-3.4 37.2c-.9 9.4 6.6 17.4 15.9 17.4.5 0 1 0 1.5-.1l37.2-3.4c3.7-.3 7.2-2 9.8-4.6l215.4-215.4 181.7 181.7c6.5 6.5 15 9.7 23.5 9.7 9.7 0 19.3-4.2 25.9-12.4 56.3-70.3 79.7-158.3 70.2-243.4l161.1-161.1c12.9-12.8 12.9-33.8 0-46.8z")),t.PropertySafetyFill = u("property-safety", l, i(r, "M866.9 169.9L527.1 54.1C523 52.7 517.5 52 512 52s-11 .7-15.1 2.1L157.1 169.9c-8.3 2.8-15.1 12.4-15.1 21.2v482.4c0 8.8 5.7 20.4 12.6 25.9L499.3 968c3.5 2.7 8 4.1 12.6 4.1s9.2-1.4 12.6-4.1l344.7-268.6c6.9-5.4 12.6-17 12.6-25.9V191.1c.2-8.8-6.6-18.3-14.9-21.2zM648.3 332.8l-87.7 161.1h45.7c5.5 0 10 4.5 10 10v21.3c0 5.5-4.5 10-10 10h-63.4v29.7h63.4c5.5 0 10 4.5 10 10v21.3c0 5.5-4.5 10-10 10h-63.4V658c0 5.5-4.5 10-10 10h-41.3c-5.5 0-10-4.5-10-10v-51.8h-63.1c-5.5 0-10-4.5-10-10v-21.3c0-5.5 4.5-10 10-10h63.1v-29.7h-63.1c-5.5 0-10-4.5-10-10v-21.3c0-5.5 4.5-10 10-10h45.2l-88-161.1c-2.6-4.8-.9-10.9 4-13.6 1.5-.8 3.1-1.2 4.8-1.2h46c3.8 0 7.2 2.1 8.9 5.5l72.9 144.3 73.2-144.3a10 10 0 0 1 8.9-5.5h45c5.5 0 10 4.5 10 10 .1 1.7-.3 3.3-1.1 4.8z")),t.QqCircleFill = u("qq-circle", l, i(r, "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm210.5 612.4c-11.5 1.4-44.9-52.7-44.9-52.7 0 31.3-16.2 72.2-51.1 101.8 16.9 5.2 54.9 19.2 45.9 34.4-7.3 12.3-125.6 7.9-159.8 4-34.2 3.8-152.5 8.3-159.8-4-9.1-15.2 28.9-29.2 45.8-34.4-35-29.5-51.1-70.4-51.1-101.8 0 0-33.4 54.1-44.9 52.7-5.4-.7-12.4-29.6 9.4-99.7 10.3-33 22-60.5 40.2-105.8-3.1-116.9 45.3-215 160.4-215 113.9 0 163.3 96.1 160.4 215 18.1 45.2 29.9 72.8 40.2 105.8 21.7 70.1 14.6 99.1 9.3 99.7z")),t.QqSquareFill = u("qq-square", l, i(r, "M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM722.5 676.4c-11.5 1.4-44.9-52.7-44.9-52.7 0 31.3-16.2 72.2-51.1 101.8 16.9 5.2 54.9 19.2 45.9 34.4-7.3 12.3-125.6 7.9-159.8 4-34.2 3.8-152.5 8.3-159.8-4-9.1-15.2 28.9-29.2 45.8-34.4-35-29.5-51.1-70.4-51.1-101.8 0 0-33.4 54.1-44.9 52.7-5.4-.7-12.4-29.6 9.4-99.7 10.3-33 22-60.5 40.2-105.8-3.1-116.9 45.3-215 160.4-215 113.9 0 163.3 96.1 160.4 215 18.1 45.2 29.9 72.8 40.2 105.8 21.7 70.1 14.6 99.1 9.3 99.7z")),t.QuestionCircleFill = u("question-circle", l, i(r, "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 708c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40zm62.9-219.5a48.3 48.3 0 0 0-30.9 44.8V620c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8v-21.5c0-23.1 6.7-45.9 19.9-64.9 12.9-18.6 30.9-32.8 52.1-40.9 34-13.1 56-41.6 56-72.7 0-44.1-43.1-80-96-80s-96 35.9-96 80v7.6c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V420c0-39.3 17.2-76 48.4-103.3C430.4 290.4 470 276 512 276s81.6 14.5 111.6 40.7C654.8 344 672 380.7 672 420c0 57.8-38.1 109.8-97.1 132.5z")),t.ReadFill = u("read", l, i(r, "M928 161H699.2c-49.1 0-97.1 14.1-138.4 40.7L512 233l-48.8-31.3A255.2 255.2 0 0 0 324.8 161H96c-17.7 0-32 14.3-32 32v568c0 17.7 14.3 32 32 32h228.8c49.1 0 97.1 14.1 138.4 40.7l44.4 28.6c1.3.8 2.8 1.3 4.3 1.3s3-.4 4.3-1.3l44.4-28.6C602 807.1 650.1 793 699.2 793H928c17.7 0 32-14.3 32-32V193c0-17.7-14.3-32-32-32zM404 553.5c0 4.1-3.2 7.5-7.1 7.5H211.1c-3.9 0-7.1-3.4-7.1-7.5v-45c0-4.1 3.2-7.5 7.1-7.5h185.7c3.9 0 7.1 3.4 7.1 7.5v45zm0-140c0 4.1-3.2 7.5-7.1 7.5H211.1c-3.9 0-7.1-3.4-7.1-7.5v-45c0-4.1 3.2-7.5 7.1-7.5h185.7c3.9 0 7.1 3.4 7.1 7.5v45zm416 140c0 4.1-3.2 7.5-7.1 7.5H627.1c-3.9 0-7.1-3.4-7.1-7.5v-45c0-4.1 3.2-7.5 7.1-7.5h185.7c3.9 0 7.1 3.4 7.1 7.5v45zm0-140c0 4.1-3.2 7.5-7.1 7.5H627.1c-3.9 0-7.1-3.4-7.1-7.5v-45c0-4.1 3.2-7.5 7.1-7.5h185.7c3.9 0 7.1 3.4 7.1 7.5v45z")),t.ReconciliationFill = u("reconciliation", l, i(r, "M676 623c-18.8 0-34 15.2-34 34s15.2 34 34 34 34-15.2 34-34-15.2-34-34-34zm204-455H668c0-30.9-25.1-56-56-56h-80c-30.9 0-56 25.1-56 56H264c-17.7 0-32 14.3-32 32v200h-88c-17.7 0-32 14.3-32 32v448c0 17.7 14.3 32 32 32h336c17.7 0 32-14.3 32-32v-16h368c17.7 0 32-14.3 32-32V200c0-17.7-14.3-32-32-32zM448 848H176V616h272v232zm0-296H176v-88h272v88zm20-272v-48h72v-56h64v56h72v48H468zm180 168v56c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8v-56c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8zm28 301c-50.8 0-92-41.2-92-92s41.2-92 92-92 92 41.2 92 92-41.2 92-92 92zm92-245c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8v-96c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v96zm-92 61c-50.8 0-92 41.2-92 92s41.2 92 92 92 92-41.2 92-92-41.2-92-92-92zm0 126c-18.8 0-34-15.2-34-34s15.2-34 34-34 34 15.2 34 34-15.2 34-34 34z")),t.RedEnvelopeFill = u("red-envelope", l, i(r, "M832 64H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32zM647 470.4l-87.2 161h45.9c4.6 0 8.4 3.8 8.4 8.4v25.1c0 4.6-3.8 8.4-8.4 8.4h-63.3v28.6h63.3c4.6 0 8.4 3.8 8.4 8.4v25c.2 4.6-3.6 8.5-8.2 8.5h-63.3v49.9c0 4.6-3.8 8.4-8.4 8.4h-43.7c-4.6 0-8.4-3.8-8.4-8.4v-49.9h-63c-4.6 0-8.4-3.8-8.4-8.4v-25.1c0-4.6 3.8-8.4 8.4-8.4h63v-28.6h-63c-4.6 0-8.4-3.8-8.4-8.4v-25.1c0-4.6 3.8-8.4 8.4-8.4h45.4l-87.5-161c-2.2-4.1-.7-9.1 3.4-11.4 1.3-.6 2.6-1 3.9-1h48.8c3.2 0 6.1 1.8 7.5 4.6l71.9 141.8 71.9-141.9a8.5 8.5 0 0 1 7.5-4.6h47.8c4.6 0 8.4 3.8 8.4 8.4-.1 1.5-.5 2.9-1.1 4.1zM512.6 323L289 148h446L512.6 323z")),t.RedditCircleFill = u("reddit-circle", l, i(r, "M584 548a36 36 0 1 0 72 0 36 36 0 1 0-72 0zm144-108a35.9 35.9 0 0 0-32.5 20.6c18.8 14.3 34.4 30.7 45.9 48.8A35.98 35.98 0 0 0 728 440zM512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm245 477.9c4.6 13.5 7 27.6 7 42.1 0 99.4-112.8 180-252 180s-252-80.6-252-180c0-14.5 2.4-28.6 7-42.1A72.01 72.01 0 0 1 296 404c27.1 0 50.6 14.9 62.9 37 36.2-19.8 80.2-32.8 128.1-36.1l58.4-131.1c4.3-9.8 15.2-14.8 25.5-11.8l91.6 26.5a54.03 54.03 0 0 1 101.6 25.6c0 29.8-24.2 54-54 54-23.5 0-43.5-15.1-50.9-36.1L577 308.3l-43 96.5c49.1 3 94.2 16.1 131.2 36.3 12.3-22.1 35.8-37 62.9-37 39.8 0 72 32.2 72 72-.1 29.3-17.8 54.6-43.1 65.8zm-171.3 83c-14.9 11.7-44.3 24.3-73.7 24.3s-58.9-12.6-73.7-24.3c-9.3-7.3-22.7-5.7-30 3.6-7.3 9.3-5.7 22.7 3.6 30 25.7 20.4 65 33.5 100.1 33.5 35.1 0 74.4-13.1 100.2-33.5 9.3-7.3 10.9-20.8 3.6-30a21.46 21.46 0 0 0-30.1-3.6zM296 440a35.98 35.98 0 0 0-13.4 69.4c11.5-18.1 27.1-34.5 45.9-48.8A35.9 35.9 0 0 0 296 440zm72 108a36 36 0 1 0 72 0 36 36 0 1 0-72 0z")),t.RedditSquareFill = u("reddit-square", l, i(r, "M296 440a35.98 35.98 0 0 0-13.4 69.4c11.5-18.1 27.1-34.5 45.9-48.8A35.9 35.9 0 0 0 296 440zm289.7 184.9c-14.9 11.7-44.3 24.3-73.7 24.3s-58.9-12.6-73.7-24.3c-9.3-7.3-22.7-5.7-30 3.6-7.3 9.3-5.7 22.7 3.6 30 25.7 20.4 65 33.5 100.1 33.5 35.1 0 74.4-13.1 100.2-33.5 9.3-7.3 10.9-20.8 3.6-30a21.46 21.46 0 0 0-30.1-3.6zM880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM757 541.9c4.6 13.5 7 27.6 7 42.1 0 99.4-112.8 180-252 180s-252-80.6-252-180c0-14.5 2.4-28.6 7-42.1A72.01 72.01 0 0 1 296 404c27.1 0 50.6 14.9 62.9 37 36.2-19.8 80.2-32.8 128.1-36.1l58.4-131.1c4.3-9.8 15.2-14.8 25.5-11.8l91.6 26.5a54.03 54.03 0 0 1 101.6 25.6c0 29.8-24.2 54-54 54-23.5 0-43.5-15.1-50.9-36.1L577 308.3l-43 96.5c49.1 3 94.2 16.1 131.2 36.3 12.3-22.1 35.8-37 62.9-37 39.8 0 72 32.2 72 72-.1 29.3-17.8 54.6-43.1 65.8zM584 548a36 36 0 1 0 72 0 36 36 0 1 0-72 0zm144-108a35.9 35.9 0 0 0-32.5 20.6c18.8 14.3 34.4 30.7 45.9 48.8A35.98 35.98 0 0 0 728 440zM368 548a36 36 0 1 0 72 0 36 36 0 1 0-72 0z")),t.RestFill = u("rest", l, i(r, "M832 256h-28.1l-35.7-120.9c-4-13.7-16.5-23.1-30.7-23.1h-451c-14.3 0-26.8 9.4-30.7 23.1L220.1 256H192c-17.7 0-32 14.3-32 32v28c0 4.4 3.6 8 8 8h45.8l47.7 558.7a32 32 0 0 0 31.9 29.3h429.2a32 32 0 0 0 31.9-29.3L802.2 324H856c4.4 0 8-3.6 8-8v-28c0-17.7-14.3-32-32-32zM508 704c-79.5 0-144-64.5-144-144s64.5-144 144-144 144 64.5 144 144-64.5 144-144 144zM291 256l22.4-76h397.2l22.4 76H291zm137 304a80 80 0 1 0 160 0 80 80 0 1 0-160 0z")),t.RightCircleFill = u("right-circle", l, i(r, "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm154.7 454.5l-246 178c-5.3 3.8-12.7 0-12.7-6.5v-46.9c0-10.2 4.9-19.9 13.2-25.9L566.6 512 421.2 406.8c-8.3-6-13.2-15.6-13.2-25.9V334c0-6.5 7.4-10.3 12.7-6.5l246 178c4.4 3.2 4.4 9.8 0 13z")),t.RocketFill = u("rocket", l, i(r, "M864 736c0-111.6-65.4-208-160-252.9V317.3c0-15.1-5.3-29.7-15.1-41.2L536.5 95.4C530.1 87.8 521 84 512 84s-18.1 3.8-24.5 11.4L335.1 276.1a63.97 63.97 0 0 0-15.1 41.2v165.8C225.4 528 160 624.4 160 736h156.5c-2.3 7.2-3.5 15-3.5 23.8 0 22.1 7.6 43.7 21.4 60.8a97.2 97.2 0 0 0 43.1 30.6c23.1 54 75.6 88.8 134.5 88.8 29.1 0 57.3-8.6 81.4-24.8 23.6-15.8 41.9-37.9 53-64a97 97 0 0 0 43.1-30.5 97.52 97.52 0 0 0 21.4-60.8c0-8.4-1.1-16.4-3.1-23.8L864 736zM512 352a48.01 48.01 0 0 1 0 96 48.01 48.01 0 0 1 0-96zm116.1 432.2c-5.2 3-11.2 4.2-17.1 3.4l-19.5-2.4-2.8 19.4c-5.4 37.9-38.4 66.5-76.7 66.5s-71.3-28.6-76.7-66.5l-2.8-19.5-19.5 2.5a27.7 27.7 0 0 1-17.1-3.5c-8.7-5-14.1-14.3-14.1-24.4 0-10.6 5.9-19.4 14.6-23.8h231.3c8.8 4.5 14.6 13.3 14.6 23.8-.1 10.2-5.5 19.6-14.2 24.5z")),t.RightSquareFill = u("right-square", l, i(r, "M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM658.7 518.5l-246 178c-5.3 3.8-12.7 0-12.7-6.5v-46.9c0-10.2 4.9-19.9 13.2-25.9L558.6 512 413.2 406.8c-8.3-6-13.2-15.6-13.2-25.9V334c0-6.5 7.4-10.3 12.7-6.5l246 178c4.4 3.2 4.4 9.8 0 13z")),t.SafetyCertificateFill = u("safety-certificate", l, i(r, "M866.9 169.9L527.1 54.1C523 52.7 517.5 52 512 52s-11 .7-15.1 2.1L157.1 169.9c-8.3 2.8-15.1 12.4-15.1 21.2v482.4c0 8.8 5.7 20.4 12.6 25.9L499.3 968c3.5 2.7 8 4.1 12.6 4.1s9.2-1.4 12.6-4.1l344.7-268.6c6.9-5.4 12.6-17 12.6-25.9V191.1c.2-8.8-6.6-18.3-14.9-21.2zM694.5 340.7L481.9 633.4a16.1 16.1 0 0 1-26 0l-126.4-174c-3.8-5.3 0-12.7 6.5-12.7h55.2c5.1 0 10 2.5 13 6.6l64.7 89 150.9-207.8c3-4.1 7.8-6.6 13-6.6H688c6.5.1 10.3 7.5 6.5 12.8z")),t.SaveFill = u("save", l, i(r, "M893.3 293.3L730.7 130.7c-12-12-28.3-18.7-45.3-18.7H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V338.5c0-17-6.7-33.2-18.7-45.2zM384 176h256v112H384V176zm128 554c-79.5 0-144-64.5-144-144s64.5-144 144-144 144 64.5 144 144-64.5 144-144 144zm0-224c-44.2 0-80 35.8-80 80s35.8 80 80 80 80-35.8 80-80-35.8-80-80-80z")),t.ScheduleFill = u("schedule", l, i(r, "M928 224H768v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56H548v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56H328v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56H96c-17.7 0-32 14.3-32 32v576c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V256c0-17.7-14.3-32-32-32zM424 688c0 4.4-3.6 8-8 8H232c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8h184c4.4 0 8 3.6 8 8v48zm0-136c0 4.4-3.6 8-8 8H232c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8h184c4.4 0 8 3.6 8 8v48zm374.5-91.3l-165 228.7a15.9 15.9 0 0 1-25.8 0L493.5 531.2c-3.8-5.3 0-12.7 6.5-12.7h54.9c5.1 0 9.9 2.5 12.9 6.6l52.8 73.1 103.7-143.7c3-4.2 7.8-6.6 12.9-6.6H792c6.5.1 10.3 7.5 6.5 12.8z")),t.SecurityScanFill = u("security-scan", l, i(r, "M866.9 169.9L527.1 54.1C523 52.7 517.5 52 512 52s-11 .7-15.1 2.1L157.1 169.9c-8.3 2.8-15.1 12.4-15.1 21.2v482.4c0 8.8 5.7 20.4 12.6 25.9L499.3 968c3.5 2.7 8 4.1 12.6 4.1s9.2-1.4 12.6-4.1l344.7-268.6c6.9-5.4 12.6-17 12.6-25.9V191.1c.2-8.8-6.6-18.3-14.9-21.2zM626.8 554c-48.5 48.5-123 55.2-178.6 20.1l-77.5 77.5a8.03 8.03 0 0 1-11.3 0l-34-34a8.03 8.03 0 0 1 0-11.3l77.5-77.5c-35.1-55.7-28.4-130.1 20.1-178.6 56.3-56.3 147.5-56.3 203.8 0 56.3 56.3 56.3 147.5 0 203.8zm-158.54-45.27a80.1 80.1 0 1 0 113.27-113.28 80.1 80.1 0 1 0-113.27 113.28z")),t.SettingFill = u("setting", l, i(r, "M512.5 390.6c-29.9 0-57.9 11.6-79.1 32.8-21.1 21.2-32.8 49.2-32.8 79.1 0 29.9 11.7 57.9 32.8 79.1 21.2 21.1 49.2 32.8 79.1 32.8 29.9 0 57.9-11.7 79.1-32.8 21.1-21.2 32.8-49.2 32.8-79.1 0-29.9-11.7-57.9-32.8-79.1a110.96 110.96 0 0 0-79.1-32.8zm412.3 235.5l-65.4-55.9c3.1-19 4.7-38.4 4.7-57.7s-1.6-38.8-4.7-57.7l65.4-55.9a32.03 32.03 0 0 0 9.3-35.2l-.9-2.6a442.5 442.5 0 0 0-79.6-137.7l-1.8-2.1a32.12 32.12 0 0 0-35.1-9.5l-81.2 28.9c-30-24.6-63.4-44-99.6-57.5l-15.7-84.9a32.05 32.05 0 0 0-25.8-25.7l-2.7-.5c-52-9.4-106.8-9.4-158.8 0l-2.7.5a32.05 32.05 0 0 0-25.8 25.7l-15.8 85.3a353.44 353.44 0 0 0-98.9 57.3l-81.8-29.1a32 32 0 0 0-35.1 9.5l-1.8 2.1a445.93 445.93 0 0 0-79.6 137.7l-.9 2.6c-4.5 12.5-.8 26.5 9.3 35.2l66.2 56.5c-3.1 18.8-4.6 38-4.6 57 0 19.2 1.5 38.4 4.6 57l-66 56.5a32.03 32.03 0 0 0-9.3 35.2l.9 2.6c18.1 50.3 44.8 96.8 79.6 137.7l1.8 2.1a32.12 32.12 0 0 0 35.1 9.5l81.8-29.1c29.8 24.5 63 43.9 98.9 57.3l15.8 85.3a32.05 32.05 0 0 0 25.8 25.7l2.7.5a448.27 448.27 0 0 0 158.8 0l2.7-.5a32.05 32.05 0 0 0 25.8-25.7l15.7-84.9c36.2-13.6 69.6-32.9 99.6-57.5l81.2 28.9a32 32 0 0 0 35.1-9.5l1.8-2.1c34.8-41.1 61.5-87.4 79.6-137.7l.9-2.6c4.3-12.4.6-26.3-9.5-35zm-412.3 52.2c-97.1 0-175.8-78.7-175.8-175.8s78.7-175.8 175.8-175.8 175.8 78.7 175.8 175.8-78.7 175.8-175.8 175.8z")),t.ShopFill = u("shop", l, i(r, "M882 272.1V144c0-17.7-14.3-32-32-32H174c-17.7 0-32 14.3-32 32v128.1c-16.7 1-30 14.9-30 31.9v131.7a177 177 0 0 0 14.4 70.4c4.3 10.2 9.6 19.8 15.6 28.9v345c0 17.6 14.3 32 32 32h274V736h128v176h274c17.7 0 32-14.3 32-32V535a175 175 0 0 0 15.6-28.9c9.5-22.3 14.4-46 14.4-70.4V304c0-17-13.3-30.9-30-31.9zm-72 568H640V704c0-17.7-14.3-32-32-32H416c-17.7 0-32 14.3-32 32v136.1H214V597.9c2.9 1.4 5.9 2.8 9 4 22.3 9.4 46 14.1 70.4 14.1s48-4.7 70.4-14.1c13.8-5.8 26.8-13.2 38.7-22.1.2-.1.4-.1.6 0a180.4 180.4 0 0 0 38.7 22.1c22.3 9.4 46 14.1 70.4 14.1 24.4 0 48-4.7 70.4-14.1 13.8-5.8 26.8-13.2 38.7-22.1.2-.1.4-.1.6 0a180.4 180.4 0 0 0 38.7 22.1c22.3 9.4 46 14.1 70.4 14.1 24.4 0 48-4.7 70.4-14.1 3-1.3 6-2.6 9-4v242.2zm0-568.1H214v-88h596v88z")),t.ShoppingFill = u("shopping", l, i(r, "M832 312H696v-16c0-101.6-82.4-184-184-184s-184 82.4-184 184v16H192c-17.7 0-32 14.3-32 32v536c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V344c0-17.7-14.3-32-32-32zm-208 0H400v-16c0-61.9 50.1-112 112-112s112 50.1 112 112v16z")),t.SketchCircleFill = u("sketch-circle", l, i(r, "M582.3 625.6l147.9-166.3h-63.4zm90-202.3h62.5l-92.1-115.1zm-274.7 36L512 684.5l114.4-225.2zM512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm286.7 380.2L515.8 762.3c-1 1.1-2.4 1.7-3.8 1.7s-2.8-.6-3.8-1.7L225.3 444.2a5.14 5.14 0 0 1-.2-6.6L365.6 262c1-1.2 2.4-1.9 4-1.9h284.6c1.6 0 3 .7 4 1.9l140.5 175.6a4.9 4.9 0 0 1 0 6.6zm-190.5-20.9L512 326.1l-96.2 97.2zM420.3 301.1l-23.1 89.8 88.8-89.8zm183.4 0H538l88.8 89.8zm-222.4 7.1l-92.1 115.1h62.5zm-87.5 151.1l147.9 166.3-84.5-166.3z")),t.SketchSquareFill = u("sketch-square", l, i(r, "M608.2 423.3L512 326.1l-96.2 97.2zm-25.9 202.3l147.9-166.3h-63.4zm90-202.3h62.5l-92.1-115.1zM880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-81.3 332.2L515.8 762.3c-1 1.1-2.4 1.7-3.8 1.7s-2.8-.6-3.8-1.7L225.3 444.2a5.14 5.14 0 0 1-.2-6.6L365.6 262c1-1.2 2.4-1.9 4-1.9h284.6c1.6 0 3 .7 4 1.9l140.5 175.6a4.9 4.9 0 0 1 0 6.6zm-401.1 15.1L512 684.5l114.4-225.2zm-16.3-151.1l-92.1 115.1h62.5zm-87.5 151.1l147.9 166.3-84.5-166.3zm126.5-158.2l-23.1 89.8 88.8-89.8zm183.4 0H538l88.8 89.8z")),t.SkinFill = u("skin", l, i(r, "M870 126H663.8c-17.4 0-32.9 11.9-37 29.3C614.3 208.1 567 246 512 246s-102.3-37.9-114.8-90.7a37.93 37.93 0 0 0-37-29.3H154a44 44 0 0 0-44 44v252a44 44 0 0 0 44 44h75v388a44 44 0 0 0 44 44h478a44 44 0 0 0 44-44V466h75a44 44 0 0 0 44-44V170a44 44 0 0 0-44-44z")),t.SlackCircleFill = u("slack-circle", l, i(r, "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zM361.5 580.2c0 27.8-22.5 50.4-50.3 50.4a50.35 50.35 0 0 1-50.3-50.4c0-27.8 22.5-50.4 50.3-50.4h50.3v50.4zm134 134.4c0 27.8-22.5 50.4-50.3 50.4-27.8 0-50.3-22.6-50.3-50.4V580.2c0-27.8 22.5-50.4 50.3-50.4a50.35 50.35 0 0 1 50.3 50.4v134.4zm-50.2-218.4h-134c-27.8 0-50.3-22.6-50.3-50.4 0-27.8 22.5-50.4 50.3-50.4h134c27.8 0 50.3 22.6 50.3 50.4-.1 27.9-22.6 50.4-50.3 50.4zm0-134.4c-13.3 0-26.1-5.3-35.6-14.8S395 324.8 395 311.4c0-27.8 22.5-50.4 50.3-50.4 27.8 0 50.3 22.6 50.3 50.4v50.4h-50.3zm83.7-50.4c0-27.8 22.5-50.4 50.3-50.4 27.8 0 50.3 22.6 50.3 50.4v134.4c0 27.8-22.5 50.4-50.3 50.4-27.8 0-50.3-22.6-50.3-50.4V311.4zM579.3 765c-27.8 0-50.3-22.6-50.3-50.4v-50.4h50.3c27.8 0 50.3 22.6 50.3 50.4 0 27.8-22.5 50.4-50.3 50.4zm134-134.4h-134c-13.3 0-26.1-5.3-35.6-14.8S529 593.6 529 580.2c0-27.8 22.5-50.4 50.3-50.4h134c27.8 0 50.3 22.6 50.3 50.4 0 27.8-22.5 50.4-50.3 50.4zm0-134.4H663v-50.4c0-27.8 22.5-50.4 50.3-50.4s50.3 22.6 50.3 50.4c0 27.8-22.5 50.4-50.3 50.4z")),t.SlackSquareFill = u("slack-square", l, i(r, "M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM529 311.4c0-27.8 22.5-50.4 50.3-50.4 27.8 0 50.3 22.6 50.3 50.4v134.4c0 27.8-22.5 50.4-50.3 50.4-27.8 0-50.3-22.6-50.3-50.4V311.4zM361.5 580.2c0 27.8-22.5 50.4-50.3 50.4a50.35 50.35 0 0 1-50.3-50.4c0-27.8 22.5-50.4 50.3-50.4h50.3v50.4zm134 134.4c0 27.8-22.5 50.4-50.3 50.4-27.8 0-50.3-22.6-50.3-50.4V580.2c0-27.8 22.5-50.4 50.3-50.4a50.35 50.35 0 0 1 50.3 50.4v134.4zm-50.2-218.4h-134c-27.8 0-50.3-22.6-50.3-50.4 0-27.8 22.5-50.4 50.3-50.4h134c27.8 0 50.3 22.6 50.3 50.4-.1 27.9-22.6 50.4-50.3 50.4zm0-134.4c-13.3 0-26.1-5.3-35.6-14.8S395 324.8 395 311.4c0-27.8 22.5-50.4 50.3-50.4 27.8 0 50.3 22.6 50.3 50.4v50.4h-50.3zm134 403.2c-27.8 0-50.3-22.6-50.3-50.4v-50.4h50.3c27.8 0 50.3 22.6 50.3 50.4 0 27.8-22.5 50.4-50.3 50.4zm134-134.4h-134a50.35 50.35 0 0 1-50.3-50.4c0-27.8 22.5-50.4 50.3-50.4h134c27.8 0 50.3 22.6 50.3 50.4 0 27.8-22.5 50.4-50.3 50.4zm0-134.4H663v-50.4c0-27.8 22.5-50.4 50.3-50.4s50.3 22.6 50.3 50.4c0 27.8-22.5 50.4-50.3 50.4z")),t.SkypeFill = u("skype", l, i(r, "M883.7 578.6c4.1-22.5 6.3-45.5 6.3-68.5 0-51-10-100.5-29.7-147-19-45-46.3-85.4-81-120.1a375.79 375.79 0 0 0-120.1-80.9c-46.6-19.7-96-29.7-147-29.7-24 0-48.1 2.3-71.5 6.8A225.1 225.1 0 0 0 335.6 113c-59.7 0-115.9 23.3-158.1 65.5A222.25 222.25 0 0 0 112 336.6c0 38 9.8 75.4 28.1 108.4-3.7 21.4-5.7 43.3-5.7 65.1 0 51 10 100.5 29.7 147 19 45 46.2 85.4 80.9 120.1 34.7 34.7 75.1 61.9 120.1 80.9 46.6 19.7 96 29.7 147 29.7 22.2 0 44.4-2 66.2-5.9 33.5 18.9 71.3 29 110 29 59.7 0 115.9-23.2 158.1-65.5 42.3-42.2 65.5-98.4 65.5-158.1.1-38-9.7-75.5-28.2-108.7zm-370 162.9c-134.2 0-194.2-66-194.2-115.4 0-25.4 18.7-43.1 44.5-43.1 57.4 0 42.6 82.5 149.7 82.5 54.9 0 85.2-29.8 85.2-60.3 0-18.3-9-38.7-45.2-47.6l-119.4-29.8c-96.1-24.1-113.6-76.1-113.6-124.9 0-101.4 95.5-139.5 185.2-139.5 82.6 0 180 45.7 180 106.5 0 26.1-22.6 41.2-48.4 41.2-49 0-40-67.8-138.7-67.8-49 0-76.1 22.2-76.1 53.9s38.7 41.8 72.3 49.5l88.4 19.6c96.8 21.6 121.3 78.1 121.3 131.3 0 82.3-63.3 143.9-191 143.9z")),t.SlidersFill = u("sliders", l, i(r, "M904 296h-66v-96c0-4.4-3.6-8-8-8h-52c-4.4 0-8 3.6-8 8v96h-66c-4.4 0-8 3.6-8 8v416c0 4.4 3.6 8 8 8h66v96c0 4.4 3.6 8 8 8h52c4.4 0 8-3.6 8-8v-96h66c4.4 0 8-3.6 8-8V304c0-4.4-3.6-8-8-8zm-584-72h-66v-56c0-4.4-3.6-8-8-8h-52c-4.4 0-8 3.6-8 8v56h-66c-4.4 0-8 3.6-8 8v560c0 4.4 3.6 8 8 8h66v56c0 4.4 3.6 8 8 8h52c4.4 0 8-3.6 8-8v-56h66c4.4 0 8-3.6 8-8V232c0-4.4-3.6-8-8-8zm292 180h-66V232c0-4.4-3.6-8-8-8h-52c-4.4 0-8 3.6-8 8v172h-66c-4.4 0-8 3.6-8 8v200c0 4.4 3.6 8 8 8h66v172c0 4.4 3.6 8 8 8h52c4.4 0 8-3.6 8-8V620h66c4.4 0 8-3.6 8-8V412c0-4.4-3.6-8-8-8z")),t.SmileFill = u("smile", l, i(r, "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zM288 421a48.01 48.01 0 0 1 96 0 48.01 48.01 0 0 1-96 0zm224 272c-85.5 0-155.6-67.3-160-151.6a8 8 0 0 1 8-8.4h48.1c4.2 0 7.8 3.2 8.1 7.4C420 589.9 461.5 629 512 629s92.1-39.1 95.8-88.6c.3-4.2 3.9-7.4 8.1-7.4H664a8 8 0 0 1 8 8.4C667.6 625.7 597.5 693 512 693zm176-224a48.01 48.01 0 0 1 0-96 48.01 48.01 0 0 1 0 96z")),t.SnippetsFill = u("snippets", l, i(r, "M832 112H724V72c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v40H500V72c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v40H320c-17.7 0-32 14.3-32 32v120h-96c-17.7 0-32 14.3-32 32v632c0 17.7 14.3 32 32 32h512c17.7 0 32-14.3 32-32v-96h96c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM664 486H514V336h.2L664 485.8v.2zm128 274h-56V456L544 264H360v-80h68v32c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-32h152v32c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-32h68v576z")),t.SoundFill = u("sound", l, i(r, "M892.1 737.8l-110.3-63.7a15.9 15.9 0 0 0-21.7 5.9l-19.9 34.5c-4.4 7.6-1.8 17.4 5.8 21.8L856.3 800a15.9 15.9 0 0 0 21.7-5.9l19.9-34.5c4.4-7.6 1.7-17.4-5.8-21.8zM760 344a15.9 15.9 0 0 0 21.7 5.9L892 286.2c7.6-4.4 10.2-14.2 5.8-21.8L878 230a15.9 15.9 0 0 0-21.7-5.9L746 287.8a15.99 15.99 0 0 0-5.8 21.8L760 344zm174 132H806c-8.8 0-16 7.2-16 16v40c0 8.8 7.2 16 16 16h128c8.8 0 16-7.2 16-16v-40c0-8.8-7.2-16-16-16zM625.9 115c-5.9 0-11.9 1.6-17.4 5.3L254 352H90c-8.8 0-16 7.2-16 16v288c0 8.8 7.2 16 16 16h164l354.5 231.7c5.5 3.6 11.6 5.3 17.4 5.3 16.7 0 32.1-13.3 32.1-32.1V147.1c0-18.8-15.4-32.1-32.1-32.1z")),t.StarFill = u("star", l, i(r, "M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z")),t.StepBackwardFill = u("step-backward", l, i(n, "M347.6 528.95l383.2 301.02c14.25 11.2 35.2 1.1 35.2-16.95V210.97c0-18.05-20.95-28.14-35.2-16.94L347.6 495.05a21.53 21.53 0 0 0 0 33.9M330 864h-64a8 8 0 0 1-8-8V168a8 8 0 0 1 8-8h64a8 8 0 0 1 8 8v688a8 8 0 0 1-8 8")),t.StepForwardFill = u("step-forward", l, i(n, "M676.4 528.95L293.2 829.97c-14.25 11.2-35.2 1.1-35.2-16.95V210.97c0-18.05 20.95-28.14 35.2-16.94l383.2 301.02a21.53 21.53 0 0 1 0 33.9M694 864h64a8 8 0 0 0 8-8V168a8 8 0 0 0-8-8h-64a8 8 0 0 0-8 8v688a8 8 0 0 0 8 8")),t.StopFill = u("stop", l, i(r, "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm234.8 736.5L223.5 277.2c16-19.7 34-37.7 53.7-53.7l523.3 523.3c-16 19.6-34 37.7-53.7 53.7z")),t.SwitcherFill = u("switcher", l, i(r, "M752 240H144c-17.7 0-32 14.3-32 32v608c0 17.7 14.3 32 32 32h608c17.7 0 32-14.3 32-32V272c0-17.7-14.3-32-32-32zM596 606c0 4.4-3.6 8-8 8H308c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8h280c4.4 0 8 3.6 8 8v48zm284-494H264c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h576v576c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V144c0-17.7-14.3-32-32-32z")),t.TabletFill = u("tablet", l, i(r, "M800 64H224c-35.3 0-64 28.7-64 64v768c0 35.3 28.7 64 64 64h576c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64zM512 824c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40z")),t.TagFill = u("tag", l, i(r, "M938 458.8l-29.6-312.6c-1.5-16.2-14.4-29-30.6-30.6L565.2 86h-.4c-3.2 0-5.7 1-7.6 2.9L88.9 557.2a9.96 9.96 0 0 0 0 14.1l363.8 363.8c1.9 1.9 4.4 2.9 7.1 2.9s5.2-1 7.1-2.9l468.3-468.3c2-2.1 3-5 2.8-8zM699 387c-35.3 0-64-28.7-64-64s28.7-64 64-64 64 28.7 64 64-28.7 64-64 64z")),t.TagsFill = u("tags", l, i(r, "M483.2 790.3L861.4 412c1.7-1.7 2.5-4 2.3-6.3l-25.5-301.4c-.7-7.8-6.8-13.9-14.6-14.6L522.2 64.3c-2.3-.2-4.7.6-6.3 2.3L137.7 444.8a8.03 8.03 0 0 0 0 11.3l334.2 334.2c3.1 3.2 8.2 3.2 11.3 0zm122.7-533.4c18.7-18.7 49.1-18.7 67.9 0 18.7 18.7 18.7 49.1 0 67.9-18.7 18.7-49.1 18.7-67.9 0-18.7-18.7-18.7-49.1 0-67.9zm283.8 282.9l-39.6-39.5a8.03 8.03 0 0 0-11.3 0l-362 361.3-237.6-237a8.03 8.03 0 0 0-11.3 0l-39.6 39.5a8.03 8.03 0 0 0 0 11.3l243.2 242.8 39.6 39.5c3.1 3.1 8.2 3.1 11.3 0l407.3-406.6c3.1-3.1 3.1-8.2 0-11.3z")),t.TaobaoCircleFill = u("taobao-circle", l, i(r, "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zM315.7 291.5c27.3 0 49.5 22.1 49.5 49.4s-22.1 49.4-49.5 49.4a49.4 49.4 0 1 1 0-98.8zM366.9 578c-13.6 42.3-10.2 26.7-64.4 144.5l-78.5-49s87.7-79.8 105.6-116.2c19.2-38.4-21.1-58.9-21.1-58.9l-60.2-37.5 32.7-50.2c45.4 33.7 48.7 36.6 79.2 67.2 23.8 23.9 20.7 56.8 6.7 100.1zm427.2 55c-15.3 143.8-202.4 90.3-202.4 90.3l10.2-41.1 43.3 9.3c80 5 72.3-64.9 72.3-64.9V423c.6-77.3-72.6-85.4-204.2-38.3l30.6 8.3c-2.5 9-12.5 23.2-25.2 38.6h176v35.6h-99.1v44.5h98.7v35.7h-98.7V622c14.9-4.8 28.6-11.5 40.5-20.5l-8.7-32.5 46.5-14.4 38.8 94.9-57.3 23.9-10.2-37.8c-25.6 19.5-78.8 48-171.8 45.4-99.2 2.6-73.7-112-73.7-112l2.5-1.3H472c-.5 14.7-6.6 38.7 1.7 51.8 6.8 10.8 24.2 12.6 35.3 13.1 1.3.1 2.6.1 3.9.1v-85.3h-101v-35.7h101v-44.5H487c-22.7 24.1-43.5 44.1-43.5 44.1l-30.6-26.7c21.7-22.9 43.3-59.1 56.8-83.2-10.9 4.4-22 9.2-33.6 14.2-11.2 14.3-24.2 29-38.7 43.5.5.8-50-28.4-50-28.4 52.2-44.4 81.4-139.9 81.4-139.9l72.5 20.4s-5.9 14-18.4 35.6c290.3-82.3 307.4 50.5 307.4 50.5s19.1 91.8 3.8 235.7z")),t.TaobaoSquareFill = u("taobao-square", l, i(r, "M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM315.7 291.5c27.3 0 49.5 22.1 49.5 49.4s-22.1 49.4-49.5 49.4a49.4 49.4 0 1 1 0-98.8zM366.9 578c-13.6 42.3-10.2 26.7-64.4 144.5l-78.5-49s87.7-79.8 105.6-116.2c19.2-38.4-21.1-58.9-21.1-58.9l-60.2-37.5 32.7-50.2c45.4 33.7 48.7 36.6 79.2 67.2 23.8 23.9 20.7 56.8 6.7 100.1zm427.2 55c-15.3 143.8-202.4 90.3-202.4 90.3l10.2-41.1 43.3 9.3c80 5 72.3-64.9 72.3-64.9V423c.6-77.3-72.6-85.4-204.2-38.3l30.6 8.3c-2.5 9-12.5 23.2-25.2 38.6h176v35.6h-99.1v44.5h98.7v35.7h-98.7V622c14.9-4.8 28.6-11.5 40.5-20.5l-8.7-32.5 46.5-14.4 38.8 94.9-57.3 23.9-10.2-37.8c-25.6 19.5-78.8 48-171.8 45.4-99.2 2.6-73.7-112-73.7-112l2.5-1.3H472c-.5 14.7-6.6 38.7 1.7 51.8 6.8 10.8 24.2 12.6 35.3 13.1 1.3.1 2.6.1 3.9.1v-85.3h-101v-35.7h101v-44.5H487c-22.7 24.1-43.5 44.1-43.5 44.1l-30.6-26.7c21.7-22.9 43.3-59.1 56.8-83.2-10.9 4.4-22 9.2-33.6 14.2-11.2 14.3-24.2 29-38.7 43.5.5.8-50-28.4-50-28.4 52.2-44.4 81.4-139.9 81.4-139.9l72.5 20.4s-5.9 14-18.4 35.6c290.3-82.3 307.4 50.5 307.4 50.5s19.1 91.8 3.8 235.7z")),t.ToolFill = u("tool", l, i(r, "M865.3 244.7c-.3-.3-61.1 59.8-182.1 180.6l-84.9-84.9 180.9-180.9c-95.2-57.3-217.5-42.6-296.8 36.7A244.42 244.42 0 0 0 419 432l1.8 6.7-283.5 283.4c-6.2 6.2-6.2 16.4 0 22.6l141.4 141.4c6.2 6.2 16.4 6.2 22.6 0l283.3-283.3 6.7 1.8c83.7 22.3 173.6-.9 236-63.3 79.4-79.3 94.1-201.6 38-296.6z")),t.ThunderboltFill = u("thunderbolt", l, i(r, "M848 359.3H627.7L825.8 109c4.1-5.3.4-13-6.3-13H436c-2.8 0-5.5 1.5-6.9 4L170 547.5c-3.1 5.3.7 12 6.9 12h174.4l-89.4 357.6c-1.9 7.8 7.5 13.3 13.3 7.7L853.5 373c5.2-4.9 1.7-13.7-5.5-13.7z")),t.TrademarkCircleFill = u("trademark-circle", l, i(r, "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm164.7 660.2c-1.1.5-2.3.8-3.5.8h-62c-3.1 0-5.9-1.8-7.2-4.6l-74.6-159.2h-88.7V717c0 4.4-3.6 8-8 8H378c-4.4 0-8-3.6-8-8V307c0-4.4 3.6-8 8-8h155.6c98.8 0 144.2 59.9 144.2 131.1 0 70.2-43.6 106.4-78.4 119.2l80.8 164.2c2.1 3.9.4 8.7-3.5 10.7zM523.9 357h-83.4v148H522c53 0 82.8-25.6 82.8-72.4 0-50.3-32.9-75.6-80.9-75.6z")),t.TwitterCircleFill = u("twitter-circle", l, i(r, "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm215.3 337.7c.3 4.7.3 9.6.3 14.4 0 146.8-111.8 315.9-316.1 315.9-63 0-121.4-18.3-170.6-49.8 9 1 17.6 1.4 26.8 1.4 52 0 99.8-17.6 137.9-47.4-48.8-1-89.8-33-103.8-77 17.1 2.5 32.5 2.5 50.1-2a111 111 0 0 1-88.9-109v-1.4c14.7 8.3 32 13.4 50.1 14.1a111.13 111.13 0 0 1-49.5-92.4c0-20.7 5.4-39.6 15.1-56a315.28 315.28 0 0 0 229 116.1C492 353.1 548.4 292 616.2 292c32 0 60.8 13.4 81.1 35 25.1-4.7 49.1-14.1 70.5-26.7-8.3 25.7-25.7 47.4-48.8 61.1 22.4-2.4 44-8.6 64-17.3-15.1 22.2-34 41.9-55.7 57.6z")),t.TrophyFill = u("trophy", l, i(r, "M868 160h-92v-40c0-4.4-3.6-8-8-8H256c-4.4 0-8 3.6-8 8v40h-92a44 44 0 0 0-44 44v148c0 81.7 60 149.6 138.2 162C265.6 630.2 359 721.8 476 734.5v105.2H280c-17.7 0-32 14.3-32 32V904c0 4.4 3.6 8 8 8h512c4.4 0 8-3.6 8-8v-32.3c0-17.7-14.3-32-32-32H548V734.5C665 721.8 758.4 630.2 773.8 514 852 501.6 912 433.7 912 352V204a44 44 0 0 0-44-44zM248 439.6c-37.1-11.9-64-46.7-64-87.6V232h64v207.6zM840 352c0 41-26.9 75.8-64 87.6V232h64v120z")),t.TwitterSquareFill = u("twitter-square", l, i(r, "M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM727.3 401.7c.3 4.7.3 9.6.3 14.4 0 146.8-111.8 315.9-316.1 315.9-63 0-121.4-18.3-170.6-49.8 9 1 17.6 1.4 26.8 1.4 52 0 99.8-17.6 137.9-47.4-48.8-1-89.8-33-103.8-77 17.1 2.5 32.5 2.5 50.1-2a111 111 0 0 1-88.9-109v-1.4c14.7 8.3 32 13.4 50.1 14.1a111.13 111.13 0 0 1-49.5-92.4c0-20.7 5.4-39.6 15.1-56a315.28 315.28 0 0 0 229 116.1C492 353.1 548.4 292 616.2 292c32 0 60.8 13.4 81.1 35 25.1-4.7 49.1-14.1 70.5-26.7-8.3 25.7-25.7 47.4-48.8 61.1 22.4-2.4 44-8.6 64-17.3-15.1 22.2-34 41.9-55.7 57.6z")),t.UnlockFill = u("unlock", l, i(r, "M832 464H332V240c0-30.9 25.1-56 56-56h248c30.9 0 56 25.1 56 56v68c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-68c0-70.7-57.3-128-128-128H388c-70.7 0-128 57.3-128 128v224h-68c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V496c0-17.7-14.3-32-32-32zM540 701v53c0 4.4-3.6 8-8 8h-40c-4.4 0-8-3.6-8-8v-53a48.01 48.01 0 1 1 56 0z")),t.UpCircleFill = u("up-circle", l, i(r, "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm178 555h-46.9c-10.2 0-19.9-4.9-25.9-13.2L512 460.4 406.8 605.8c-6 8.3-15.6 13.2-25.9 13.2H334c-6.5 0-10.3-7.4-6.5-12.7l178-246c3.2-4.4 9.7-4.4 12.9 0l178 246c3.9 5.3.1 12.7-6.4 12.7z")),t.UpSquareFill = u("up-square", l, i(r, "M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM690 624h-46.9c-10.2 0-19.9-4.9-25.9-13.2L512 465.4 406.8 610.8c-6 8.3-15.6 13.2-25.9 13.2H334c-6.5 0-10.3-7.4-6.5-12.7l178-246c3.2-4.4 9.7-4.4 12.9 0l178 246c3.9 5.3.1 12.7-6.4 12.7z")),t.UsbFill = u("usb", l, i(r, "M408 312h48c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8zm352 120V144c0-17.7-14.3-32-32-32H296c-17.7 0-32 14.3-32 32v288c-66.2 0-120 52.1-120 116v356c0 4.4 3.6 8 8 8h720c4.4 0 8-3.6 8-8V548c0-63.9-53.8-116-120-116zm-72 0H336V184h352v248zM568 312h48c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8z")),t.WalletFill = u("wallet", l, i(r, "M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-32 464H528V448h320v128zm-268-64a40 40 0 1 0 80 0 40 40 0 1 0-80 0z")),t.VideoCameraFill = u("video-camera", l, i(r, "M912 302.3L784 376V224c0-35.3-28.7-64-64-64H128c-35.3 0-64 28.7-64 64v576c0 35.3 28.7 64 64 64h592c35.3 0 64-28.7 64-64V648l128 73.7c21.3 12.3 48-3.1 48-27.6V330c0-24.6-26.7-40-48-27.7zM328 352c0 4.4-3.6 8-8 8H208c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8h112c4.4 0 8 3.6 8 8v48zm560 273l-104-59.8V458.9L888 399v226z")),t.WarningFill = u("warning", l, i(r, "M955.7 856l-416-720c-6.2-10.7-16.9-16-27.7-16s-21.6 5.3-27.7 16l-416 720C56 877.4 71.4 904 96 904h832c24.6 0 40-26.6 27.7-48zM480 416c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v184c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V416zm32 352a48.01 48.01 0 0 1 0-96 48.01 48.01 0 0 1 0 96z")),t.WeiboCircleFill = u("weibo-circle", l, i(r, "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm-44.4 672C353.1 736 236 680.4 236 588.9c0-47.8 30.2-103.1 82.3-155.3 69.5-69.6 150.6-101.4 181.1-70.8 13.5 13.5 14.8 36.8 6.1 64.6-4.5 14 13.1 6.3 13.1 6.3 56.2-23.6 105.2-25 123.1.7 9.6 13.7 8.6 32.8-.2 55.1-4.1 10.2 1.3 11.8 9 14.1 31.7 9.8 66.9 33.6 66.9 75.5.2 69.5-99.7 156.9-249.8 156.9zm207.3-290.8a34.9 34.9 0 0 0-7.2-34.1 34.68 34.68 0 0 0-33.1-10.7 18.24 18.24 0 0 1-7.6-35.7c24.1-5.1 50.1 2.3 67.7 21.9 17.7 19.6 22.4 46.3 14.9 69.8a18.13 18.13 0 0 1-22.9 11.7 18.18 18.18 0 0 1-11.8-22.9zm106 34.3s0 .1 0 0a21.1 21.1 0 0 1-26.6 13.7 21.19 21.19 0 0 1-13.6-26.7c11-34.2 4-73.2-21.7-101.8a104.04 104.04 0 0 0-98.9-32.1 21.14 21.14 0 0 1-25.1-16.3 21.07 21.07 0 0 1 16.2-25.1c49.4-10.5 102.8 4.8 139.1 45.1 36.3 40.2 46.1 95.1 30.6 143.2zm-334.5 6.1c-91.4 9-160.7 65.1-154.7 125.2 5.9 60.1 84.8 101.5 176.2 92.5 91.4-9.1 160.7-65.1 154.7-125.3-5.9-60.1-84.8-101.5-176.2-92.4zm80.2 141.7c-18.7 42.3-72.3 64.8-117.8 50.1-43.9-14.2-62.5-57.7-43.3-96.8 18.9-38.4 68-60.1 111.5-48.8 45 11.7 68 54.2 49.6 95.5zm-93-32.2c-14.2-5.9-32.4.2-41.2 13.9-8.8 13.8-4.7 30.2 9.3 36.6 14.3 6.5 33.2.3 42-13.8 8.8-14.3 4.2-30.6-10.1-36.7zm34.9-14.5c-5.4-2.2-12.2.5-15.4 5.8-3.1 5.4-1.4 11.5 4.1 13.8 5.5 2.3 12.6-.3 15.8-5.8 3-5.6 1-11.8-4.5-13.8z")),t.WechatFill = u("wechat", l, i(r, "M690.1 377.4c5.9 0 11.8.2 17.6.5-24.4-128.7-158.3-227.1-319.9-227.1C209 150.8 64 271.4 64 420.2c0 81.1 43.6 154.2 111.9 203.6a21.5 21.5 0 0 1 9.1 17.6c0 2.4-.5 4.6-1.1 6.9-5.5 20.3-14.2 52.8-14.6 54.3-.7 2.6-1.7 5.2-1.7 7.9 0 5.9 4.8 10.8 10.8 10.8 2.3 0 4.2-.9 6.2-2l70.9-40.9c5.3-3.1 11-5 17.2-5 3.2 0 6.4.5 9.5 1.4 33.1 9.5 68.8 14.8 105.7 14.8 6 0 11.9-.1 17.8-.4-7.1-21-10.9-43.1-10.9-66 0-135.8 132.2-245.8 295.3-245.8zm-194.3-86.5c23.8 0 43.2 19.3 43.2 43.1s-19.3 43.1-43.2 43.1c-23.8 0-43.2-19.3-43.2-43.1s19.4-43.1 43.2-43.1zm-215.9 86.2c-23.8 0-43.2-19.3-43.2-43.1s19.3-43.1 43.2-43.1 43.2 19.3 43.2 43.1-19.4 43.1-43.2 43.1zm586.8 415.6c56.9-41.2 93.2-102 93.2-169.7 0-124-120.8-224.5-269.9-224.5-149 0-269.9 100.5-269.9 224.5S540.9 847.5 690 847.5c30.8 0 60.6-4.4 88.1-12.3 2.6-.8 5.2-1.2 7.9-1.2 5.2 0 9.9 1.6 14.3 4.1l59.1 34c1.7 1 3.3 1.7 5.2 1.7a9 9 0 0 0 6.4-2.6 9 9 0 0 0 2.6-6.4c0-2.2-.9-4.4-1.4-6.6-.3-1.2-7.6-28.3-12.2-45.3-.5-1.9-.9-3.8-.9-5.7.1-5.9 3.1-11.2 7.6-14.5zM600.2 587.2c-19.9 0-36-16.1-36-35.9 0-19.8 16.1-35.9 36-35.9s36 16.1 36 35.9c0 19.8-16.2 35.9-36 35.9zm179.9 0c-19.9 0-36-16.1-36-35.9 0-19.8 16.1-35.9 36-35.9s36 16.1 36 35.9a36.08 36.08 0 0 1-36 35.9z")),t.WindowsFill = u("windows", l, i(r, "M523.8 191.4v288.9h382V128.1zm0 642.2l382 62.2v-352h-382zM120.1 480.2H443V201.9l-322.9 53.5zm0 290.4L443 823.2V543.8H120.1z")),t.YahooFill = u("yahoo", l, i(r, "M937.3 231H824.7c-15.5 0-27.7 12.6-27.1 28.1l13.1 366h84.4l65.4-366.4c2.7-15.2-7.8-27.7-23.2-27.7zm-77.4 450.4h-14.1c-27.1 0-49.2 22.2-49.2 49.3v14.1c0 27.1 22.2 49.3 49.2 49.3h14.1c27.1 0 49.2-22.2 49.2-49.3v-14.1c0-27.1-22.2-49.3-49.2-49.3zM402.6 231C216.2 231 65 357 65 512.5S216.2 794 402.6 794s337.6-126 337.6-281.5S589.1 231 402.6 231zm225.2 225.2h-65.3L458.9 559.8v65.3h84.4v56.3H318.2v-56.3h84.4v-65.3L242.9 399.9h-37v-56.3h168.5v56.3h-37l93.4 93.5 28.1-28.1V400h168.8v56.2z")),t.WeiboSquareFill = u("weibo-square", l, i(r, "M433.6 595.1c-14.2-5.9-32.4.2-41.2 13.9-8.8 13.8-4.7 30.2 9.3 36.6 14.3 6.5 33.2.3 42-13.8 8.8-14.3 4.2-30.6-10.1-36.7zM880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM467.6 736C353.1 736 236 680.4 236 588.9c0-47.8 30.2-103.1 82.3-155.3 69.5-69.6 150.6-101.4 181.1-70.8 13.5 13.5 14.8 36.8 6.1 64.6-4.5 14 13.1 6.3 13.1 6.3 56.2-23.6 105.2-25 123.1.7 9.6 13.7 8.6 32.8-.2 55.1-4.1 10.2 1.3 11.8 9 14.1 31.7 9.8 66.9 33.6 66.9 75.5.2 69.5-99.7 156.9-249.8 156.9zm207.3-290.8a34.9 34.9 0 0 0-7.2-34.1 34.68 34.68 0 0 0-33.1-10.7 18.24 18.24 0 0 1-7.6-35.7c24.1-5.1 50.1 2.3 67.7 21.9 17.7 19.6 22.4 46.3 14.9 69.8a18.13 18.13 0 0 1-22.9 11.7 18.18 18.18 0 0 1-11.8-22.9zm106 34.3s0 .1 0 0a21.1 21.1 0 0 1-26.6 13.7 21.19 21.19 0 0 1-13.6-26.7c11-34.2 4-73.2-21.7-101.8a104.04 104.04 0 0 0-98.9-32.1 21.14 21.14 0 0 1-25.1-16.3 21.07 21.07 0 0 1 16.2-25.1c49.4-10.5 102.8 4.8 139.1 45.1 36.3 40.2 46.1 95.1 30.6 143.2zm-334.5 6.1c-91.4 9-160.7 65.1-154.7 125.2 5.9 60.1 84.8 101.5 176.2 92.5 91.4-9.1 160.7-65.1 154.7-125.3-5.9-60.1-84.8-101.5-176.2-92.4zm80.2 141.7c-18.7 42.3-72.3 64.8-117.8 50.1-43.9-14.2-62.5-57.7-43.3-96.8 18.9-38.4 68-60.1 111.5-48.8 45 11.7 68 54.2 49.6 95.5zm-58.1-46.7c-5.4-2.2-12.2.5-15.4 5.8-3.1 5.4-1.4 11.5 4.1 13.8 5.5 2.3 12.6-.3 15.8-5.8 3-5.6 1-11.8-4.5-13.8z")),t.YuqueFill = u("yuque", l, i(r, "M854.6 370.6c-9.9-39.4 9.9-102.2 73.4-124.4l-67.9-3.6s-25.7-90-143.6-98c-117.9-8.1-195-3-195-3s87.4 55.6 52.4 154.7c-25.6 52.5-65.8 95.6-108.8 144.7-1.3 1.3-2.5 2.6-3.5 3.7C319.4 605 96 860 96 860c245.9 64.4 410.7-6.3 508.2-91.1 20.5-.2 35.9-.3 46.3-.3 135.8 0 250.6-117.6 245.9-248.4-3.2-89.9-31.9-110.2-41.8-149.6z")),t.YoutubeFill = u("youtube", l, i(r, "M941.3 296.1a112.3 112.3 0 0 0-79.2-79.3C792.2 198 512 198 512 198s-280.2 0-350.1 18.7A112.12 112.12 0 0 0 82.7 296C64 366 64 512 64 512s0 146 18.7 215.9c10.3 38.6 40.7 69 79.2 79.3C231.8 826 512 826 512 826s280.2 0 350.1-18.8c38.6-10.3 68.9-40.7 79.2-79.3C960 658 960 512 960 512s0-146-18.7-215.9zM423 646V378l232 133-232 135z")),t.ZhihuSquareFill = u("zhihu-square", l, i(r, "M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM432.3 592.8l71 80.7c9.2 33-3.3 63.1-3.3 63.1l-95.7-111.9v-.1c-8.9 29-20.1 57.3-33.3 84.7-22.6 45.7-55.2 54.7-89.5 57.7-34.4 3-23.3-5.3-23.3-5.3 68-55.5 78-87.8 96.8-123.1 11.9-22.3 20.4-64.3 25.3-96.8H264.1s4.8-31.2 19.2-41.7h101.6c.6-15.3-1.3-102.8-2-131.4h-49.4c-9.2 45-41 56.7-48.1 60.1-7 3.4-23.6 7.1-21.1 0 2.6-7.1 27-46.2 43.2-110.7 16.3-64.6 63.9-62 63.9-62-12.8 22.5-22.4 73.6-22.4 73.6h159.7c10.1 0 10.6 39 10.6 39h-90.8c-.7 22.7-2.8 83.8-5 131.4H519s12.2 15.4 12.2 41.7h-110l-.1 1.5c-1.5 20.4-6.3 43.9-12.9 67.6l24.1-18.1zm335.5 116h-87.6l-69.5 46.6-16.4-46.6h-40.1V321.5h213.6v387.3zM408.2 611s0-.1 0 0zm216 94.3l56.8-38.1h45.6-.1V364.7H596.7v302.5h14.1z")),t.ZhihuCircleFill = u("zhihu-circle", l, i(r, "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm-90.7 477.8l-.1 1.5c-1.5 20.4-6.3 43.9-12.9 67.6l24-18.1 71 80.7c9.2 33-3.3 63.1-3.3 63.1l-95.7-111.9v-.1c-8.9 29-20.1 57.3-33.3 84.7-22.6 45.7-55.2 54.7-89.5 57.7-34.4 3-23.3-5.3-23.3-5.3 68-55.5 78-87.8 96.8-123.1 11.9-22.3 20.4-64.3 25.3-96.8H264.1s4.8-31.2 19.2-41.7h101.6c.6-15.3-1.3-102.8-2-131.4h-49.4c-9.2 45-41 56.7-48.1 60.1-7 3.4-23.6 7.1-21.1 0 2.6-7.1 27-46.2 43.2-110.7 16.3-64.6 63.9-62 63.9-62-12.8 22.5-22.4 73.6-22.4 73.6h159.7c10.1 0 10.6 39 10.6 39h-90.8c-.7 22.7-2.8 83.8-5 131.4H519s12.2 15.4 12.2 41.7H421.3zm346.5 167h-87.6l-69.5 46.6-16.4-46.6h-40.1V321.5h213.6v387.3zM408.2 611s0-.1 0 0zm216 94.3l56.8-38.1h45.6-.1V364.7H596.7v302.5h14.1z")),t.AccountBookOutline = u("account-book", o, i(r, "M880 184H712v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H384v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H144c-17.7 0-32 14.3-32 32v664c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V216c0-17.7-14.3-32-32-32zm-40 656H184V256h128v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h256v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h128v584zM639.5 414h-45c-3 0-5.8 1.7-7.1 4.4L514 563.8h-2.8l-73.4-145.4a8 8 0 0 0-7.1-4.4h-46c-1.3 0-2.7.3-3.8 1-3.9 2.1-5.3 7-3.2 10.9l89.3 164h-48.6c-4.4 0-8 3.6-8 8v21.3c0 4.4 3.6 8 8 8h65.1v33.7h-65.1c-4.4 0-8 3.6-8 8v21.3c0 4.4 3.6 8 8 8h65.1V752c0 4.4 3.6 8 8 8h41.3c4.4 0 8-3.6 8-8v-53.8h65.4c4.4 0 8-3.6 8-8v-21.3c0-4.4-3.6-8-8-8h-65.4v-33.7h65.4c4.4 0 8-3.6 8-8v-21.3c0-4.4-3.6-8-8-8h-49.1l89.3-164.1c.6-1.2 1-2.5 1-3.8.1-4.4-3.4-8-7.9-8z")),t.AlertOutline = u("alert", o, i(r, "M193 796c0 17.7 14.3 32 32 32h574c17.7 0 32-14.3 32-32V563c0-176.2-142.8-319-319-319S193 386.8 193 563v233zm72-233c0-136.4 110.6-247 247-247s247 110.6 247 247v193H404V585c0-5.5-4.5-10-10-10h-44c-5.5 0-10 4.5-10 10v171h-75V563zm-48.1-252.5l39.6-39.6c3.1-3.1 3.1-8.2 0-11.3l-67.9-67.9a8.03 8.03 0 0 0-11.3 0l-39.6 39.6a8.03 8.03 0 0 0 0 11.3l67.9 67.9c3.1 3.1 8.1 3.1 11.3 0zm669.6-79.2l-39.6-39.6a8.03 8.03 0 0 0-11.3 0l-67.9 67.9a8.03 8.03 0 0 0 0 11.3l39.6 39.6c3.1 3.1 8.2 3.1 11.3 0l67.9-67.9c3.1-3.2 3.1-8.2 0-11.3zM832 892H192c-17.7 0-32 14.3-32 32v24c0 4.4 3.6 8 8 8h688c4.4 0 8-3.6 8-8v-24c0-17.7-14.3-32-32-32zM484 180h56c4.4 0 8-3.6 8-8V76c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v96c0 4.4 3.6 8 8 8z")),t.AlipayCircleOutline = u("alipay-circle", o, i(r, "M308.6 545.7c-19.8 2-57.1 10.7-77.4 28.6-61 53-24.5 150 99 150 71.8 0 143.5-45.7 199.8-119-80.2-38.9-148.1-66.8-221.4-59.6zm460.5 67c100.1 33.4 154.7 43 166.7 44.8A445.9 445.9 0 0 0 960 512c0-247.4-200.6-448-448-448S64 264.6 64 512s200.6 448 448 448c155.9 0 293.2-79.7 373.5-200.5-75.6-29.8-213.6-85-286.8-120.1-69.9 85.7-160.1 137.8-253.7 137.8-158.4 0-212.1-138.1-137.2-229 16.3-19.8 44.2-38.7 87.3-49.4 67.5-16.5 175 10.3 275.7 43.4 18.1-33.3 33.4-69.9 44.7-108.9H305.1V402h160v-56.2H271.3v-31.3h193.8v-80.1s0-13.5 13.7-13.5H557v93.6h191.7v31.3H557.1V402h156.4c-15 61.1-37.7 117.4-66.2 166.8 47.5 17.1 90.1 33.3 121.8 43.9z")),t.AliwangwangOutline = u("aliwangwang", o, i(r, "M868.2 377.4c-18.9-45.1-46.3-85.6-81.2-120.6a377.26 377.26 0 0 0-120.5-81.2A375.65 375.65 0 0 0 519 145.8c-41.9 0-82.9 6.7-121.9 20C306 123.3 200.8 120 170.6 120c-2.2 0-7.4 0-9.4.2-11.9.4-22.8 6.5-29.2 16.4-6.5 9.9-7.7 22.4-3.4 33.5l64.3 161.6a378.59 378.59 0 0 0-52.8 193.2c0 51.4 10 101 29.8 147.6 18.9 45 46.2 85.6 81.2 120.5 34.7 34.8 75.4 62.1 120.5 81.2C418.3 894 467.9 904 519 904c51.3 0 100.9-10.1 147.7-29.8 44.9-18.9 85.5-46.3 120.4-81.2 34.7-34.8 62.1-75.4 81.2-120.6a376.5 376.5 0 0 0 29.8-147.6c-.2-51.2-10.1-100.8-29.9-147.4zm-66.4 266.5a307.08 307.08 0 0 1-65.9 98c-28.4 28.5-61.3 50.7-97.7 65.9h-.1c-38 16-78.3 24.2-119.9 24.2a306.51 306.51 0 0 1-217.5-90.2c-28.4-28.5-50.6-61.4-65.8-97.8v-.1c-16-37.8-24.1-78.2-24.1-119.9 0-55.4 14.8-109.7 42.8-157l13.2-22.1-9.5-23.9L206 192c14.9.6 35.9 2.1 59.7 5.6 43.8 6.5 82.5 17.5 114.9 32.6l19 8.9 19.9-6.8c31.5-10.8 64.8-16.2 98.9-16.2a306.51 306.51 0 0 1 217.5 90.2c28.4 28.5 50.6 61.4 65.8 97.8l.1.1.1.1c16 37.6 24.1 78 24.2 119.8-.1 41.7-8.3 82-24.3 119.8zM681.1 364.2c-20.4 0-37.1 16.7-37.1 37.1v55.1c0 20.4 16.6 37.1 37.1 37.1s37.1-16.7 37.1-37.1v-55.1c0-20.5-16.7-37.1-37.1-37.1zm-175.2 0c-20.5 0-37.1 16.7-37.1 37.1v55.1c0 20.4 16.7 37.1 37.1 37.1 20.5 0 37.1-16.7 37.1-37.1v-55.1c0-20.5-16.7-37.1-37.1-37.1z")),t.AndroidOutline = u("android", o, i(r, "M448.3 225.2c-18.6 0-32 13.4-32 31.9s13.5 31.9 32 31.9c18.6 0 32-13.4 32-31.9.1-18.4-13.4-31.9-32-31.9zm393.9 96.4c-13.8-13.8-32.7-21.5-53.2-21.5-3.9 0-7.4.4-10.7 1v-1h-3.6c-5.5-30.6-18.6-60.5-38.1-87.4-18.7-25.7-43-47.9-70.8-64.9l25.1-35.8v-3.3c0-.8.4-2.3.7-3.8.6-2.4 1.4-5.5 1.4-8.9 0-18.5-13.5-31.9-32-31.9-9.8 0-19.5 5.7-25.9 15.4l-29.3 42.1c-30-9.8-62.4-15-93.8-15-31.3 0-63.7 5.2-93.8 15L389 79.4c-6.6-9.6-16.1-15.4-26-15.4-18.6 0-32 13.4-32 31.9 0 6.2 2.5 12.8 6.7 17.4l22.6 32.3c-28.7 17-53.5 39.4-72.2 65.1-19.4 26.9-32 56.8-36.7 87.4h-5.5v1c-3.2-.6-6.7-1-10.7-1-20.3 0-39.2 7.5-53.1 21.3-13.8 13.8-21.5 32.6-21.5 53v235c0 20.3 7.5 39.1 21.4 52.9 13.8 13.8 32.8 21.5 53.2 21.5 3.9 0 7.4-.4 10.7-1v93.5c0 29.2 23.9 53.1 53.2 53.1H331v58.3c0 20.3 7.5 39.1 21.4 52.9 13.8 13.8 32.8 21.5 53.2 21.5 20.3 0 39.2-7.5 53.1-21.3 13.8-13.8 21.5-32.6 21.5-53v-58.2H544v58.1c0 20.3 7.5 39.1 21.4 52.9 13.8 13.8 32.8 21.5 53.2 21.5 20.4 0 39.2-7.5 53.1-21.6 13.8-13.8 21.5-32.6 21.5-53v-58.2h31.9c29.3 0 53.2-23.8 53.2-53.1v-91.4c3.2.6 6.7 1 10.7 1 20.3 0 39.2-7.5 53.1-21.3 13.8-13.8 21.5-32.6 21.5-53v-235c-.1-20.3-7.6-39-21.4-52.9zM246 609.6c0 6.8-3.9 10.6-10.7 10.6-6.8 0-10.7-3.8-10.7-10.6V374.5c0-6.8 3.9-10.6 10.7-10.6 6.8 0 10.7 3.8 10.7 10.6v235.1zm131.1-396.8c37.5-27.3 85.3-42.3 135-42.3s97.5 15.1 135 42.5c32.4 23.7 54.2 54.2 62.7 87.5H314.4c8.5-33.4 30.5-64 62.7-87.7zm39.3 674.7c-.6 5.6-4.4 8.7-10.5 8.7-6.8 0-10.7-3.8-10.7-10.6v-58.2h21.2v60.1zm202.3 8.7c-6.8 0-10.7-3.8-10.7-10.6v-58.2h21.2v60.1c-.6 5.6-4.3 8.7-10.5 8.7zm95.8-132.6H309.9V364h404.6v399.6zm85.2-154c0 6.8-3.9 10.6-10.7 10.6-6.8 0-10.7-3.8-10.7-10.6V374.5c0-6.8 3.9-10.6 10.7-10.6 6.8 0 10.7 3.8 10.7 10.6v235.1zM576.1 225.2c-18.6 0-32 13.4-32 31.9s13.5 31.9 32 31.9c18.6 0 32.1-13.4 32.1-32-.1-18.6-13.4-31.8-32.1-31.8z")),t.ApiOutline = u("api", o, i(r, "M917.7 148.8l-42.4-42.4c-1.6-1.6-3.6-2.3-5.7-2.3s-4.1.8-5.7 2.3l-76.1 76.1a199.27 199.27 0 0 0-112.1-34.3c-51.2 0-102.4 19.5-141.5 58.6L432.3 308.7a8.03 8.03 0 0 0 0 11.3L704 591.7c1.6 1.6 3.6 2.3 5.7 2.3 2 0 4.1-.8 5.7-2.3l101.9-101.9c68.9-69 77-175.7 24.3-253.5l76.1-76.1c3.1-3.2 3.1-8.3 0-11.4zM769.1 441.7l-59.4 59.4-186.8-186.8 59.4-59.4c24.9-24.9 58.1-38.7 93.4-38.7 35.3 0 68.4 13.7 93.4 38.7 24.9 24.9 38.7 58.1 38.7 93.4 0 35.3-13.8 68.4-38.7 93.4zm-190.2 105a8.03 8.03 0 0 0-11.3 0L501 613.3 410.7 523l66.7-66.7c3.1-3.1 3.1-8.2 0-11.3L441 408.6a8.03 8.03 0 0 0-11.3 0L363 475.3l-43-43a7.85 7.85 0 0 0-5.7-2.3c-2 0-4.1.8-5.7 2.3L206.8 534.2c-68.9 69-77 175.7-24.3 253.5l-76.1 76.1a8.03 8.03 0 0 0 0 11.3l42.4 42.4c1.6 1.6 3.6 2.3 5.7 2.3s4.1-.8 5.7-2.3l76.1-76.1c33.7 22.9 72.9 34.3 112.1 34.3 51.2 0 102.4-19.5 141.5-58.6l101.9-101.9c3.1-3.1 3.1-8.2 0-11.3l-43-43 66.7-66.7c3.1-3.1 3.1-8.2 0-11.3l-36.6-36.2zM441.7 769.1a131.32 131.32 0 0 1-93.4 38.7c-35.3 0-68.4-13.7-93.4-38.7a131.32 131.32 0 0 1-38.7-93.4c0-35.3 13.7-68.4 38.7-93.4l59.4-59.4 186.8 186.8-59.4 59.4z")),t.AppstoreOutline = u("appstore", o, i(r, "M464 144H160c-8.8 0-16 7.2-16 16v304c0 8.8 7.2 16 16 16h304c8.8 0 16-7.2 16-16V160c0-8.8-7.2-16-16-16zm-52 268H212V212h200v200zm452-268H560c-8.8 0-16 7.2-16 16v304c0 8.8 7.2 16 16 16h304c8.8 0 16-7.2 16-16V160c0-8.8-7.2-16-16-16zm-52 268H612V212h200v200zM464 544H160c-8.8 0-16 7.2-16 16v304c0 8.8 7.2 16 16 16h304c8.8 0 16-7.2 16-16V560c0-8.8-7.2-16-16-16zm-52 268H212V612h200v200zm452-268H560c-8.8 0-16 7.2-16 16v304c0 8.8 7.2 16 16 16h304c8.8 0 16-7.2 16-16V560c0-8.8-7.2-16-16-16zm-52 268H612V612h200v200z")),t.AudioOutline = u("audio", o, i(r, "M842 454c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8 0 140.3-113.7 254-254 254S258 594.3 258 454c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8 0 168.7 126.6 307.9 290 327.6V884H326.7c-13.7 0-24.7 14.3-24.7 32v36c0 4.4 2.8 8 6.2 8h407.6c3.4 0 6.2-3.6 6.2-8v-36c0-17.7-11-32-24.7-32H548V782.1c165.3-18 294-158 294-328.1zM512 624c93.9 0 170-75.2 170-168V232c0-92.8-76.1-168-170-168s-170 75.2-170 168v224c0 92.8 76.1 168 170 168zm-94-392c0-50.6 41.9-92 94-92s94 41.4 94 92v224c0 50.6-41.9 92-94 92s-94-41.4-94-92V232z")),t.AppleOutline = u("apple", o, i(r, "M747.4 535.7c-.4-68.2 30.5-119.6 92.9-157.5-34.9-50-87.7-77.5-157.3-82.8-65.9-5.2-138 38.4-164.4 38.4-27.9 0-91.7-36.6-141.9-36.6C273.1 298.8 163 379.8 163 544.6c0 48.7 8.9 99 26.7 150.8 23.8 68.2 109.6 235.3 199.1 232.6 46.8-1.1 79.9-33.2 140.8-33.2 59.1 0 89.7 33.2 141.9 33.2 90.3-1.3 167.9-153.2 190.5-221.6-121.1-57.1-114.6-167.2-114.6-170.7zm-10.6 267c-14.3 19.9-28.7 35.6-41.9 45.7-10.5 8-18.6 11.4-24 11.6-9-.1-17.7-2.3-34.7-8.8-1.2-.5-2.5-1-4.2-1.6l-4.4-1.7c-17.4-6.7-27.8-10.3-41.1-13.8-18.6-4.8-37.1-7.4-56.9-7.4-20.2 0-39.2 2.5-58.1 7.2-13.9 3.5-25.6 7.4-42.7 13.8-.7.3-8.1 3.1-10.2 3.9-3.5 1.3-6.2 2.3-8.7 3.2-10.4 3.6-17 5.1-22.9 5.2-.7 0-1.3-.1-1.8-.2-1.1-.2-2.5-.6-4.1-1.3-4.5-1.8-9.9-5.1-16-9.8-14-10.9-29.4-28-45.1-49.9-27.5-38.6-53.5-89.8-66-125.7-15.4-44.8-23-87.7-23-128.6 0-60.2 17.8-106 48.4-137.1 26.3-26.6 61.7-41.5 97.8-42.3 5.9.1 14.5 1.5 25.4 4.5 8.6 2.3 18 5.4 30.7 9.9 3.8 1.4 16.9 6.1 18.5 6.7 7.7 2.8 13.5 4.8 19.2 6.6 18.2 5.8 32.3 9 47.6 9 15.5 0 28.8-3.3 47.7-9.8 7.1-2.4 32.9-12 37.5-13.6 25.6-9.1 44.5-14 60.8-15.2 4.8-.4 9.1-.4 13.2-.1 22.7 1.8 42.1 6.3 58.6 13.8-37.6 43.4-57 96.5-56.9 158.4-.3 14.7.9 31.7 5.1 51.8 6.4 30.5 18.6 60.7 37.9 89 14.7 21.5 32.9 40.9 54.7 57.8-11.5 23.7-25.6 48.2-40.4 68.8zm-94.5-572c50.7-60.2 46.1-115 44.6-134.7-44.8 2.6-96.6 30.5-126.1 64.8-32.5 36.8-51.6 82.3-47.5 133.6 48.4 3.7 92.6-21.2 129-63.7z")),t.BackwardOutline = u("backward", o, i(n, "M485.6 249.9L198.2 498c-8.3 7.1-8.3 20.8 0 27.9l287.4 248.2c10.7 9.2 26.4.9 26.4-14V263.8c0-14.8-15.7-23.2-26.4-13.9zm320 0L518.2 498a18.6 18.6 0 0 0-6.2 14c0 5.2 2.1 10.4 6.2 14l287.4 248.2c10.7 9.2 26.4.9 26.4-14V263.8c0-14.8-15.7-23.2-26.4-13.9z")),t.BankOutline = u("bank", o, i(r, "M894 462c30.9 0 43.8-39.7 18.7-58L530.8 126.2a31.81 31.81 0 0 0-37.6 0L111.3 404c-25.1 18.2-12.2 58 18.8 58H192v374h-72c-4.4 0-8 3.6-8 8v52c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-52c0-4.4-3.6-8-8-8h-72V462h62zM512 196.7l271.1 197.2H240.9L512 196.7zM264 462h117v374H264V462zm189 0h117v374H453V462zm307 374H642V462h118v374z")),t.BellOutline = u("bell", o, i(r, "M816 768h-24V428c0-141.1-104.3-257.7-240-277.1V112c0-22.1-17.9-40-40-40s-40 17.9-40 40v38.9c-135.7 19.4-240 136-240 277.1v340h-24c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h216c0 61.8 50.2 112 112 112s112-50.2 112-112h216c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM512 888c-26.5 0-48-21.5-48-48h96c0 26.5-21.5 48-48 48zM304 768V428c0-55.6 21.6-107.8 60.9-147.1S456.4 220 512 220c55.6 0 107.8 21.6 147.1 60.9S720 372.4 720 428v340H304z")),t.BehanceSquareOutline = u("behance-square", o, i(r, "M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM598.5 350.9h138.4v33.7H598.5v-33.7zM512 628.8a89.52 89.52 0 0 1-27 31c-11.8 8.2-24.9 14.2-38.8 17.7a167.4 167.4 0 0 1-44.6 5.7H236V342.1h161c16.3 0 31.1 1.5 44.6 4.3 13.4 2.8 24.8 7.6 34.4 14.1 9.5 6.5 17 15.2 22.3 26 5.2 10.7 7.9 24.1 7.9 40 0 17.2-3.9 31.4-11.7 42.9-7.9 11.5-19.3 20.8-34.8 28.1 21.1 6 36.6 16.7 46.8 31.7 10.4 15.2 15.5 33.4 15.5 54.8 0 17.4-3.3 32.3-10 44.8zM790.8 576H612.4c0 19.4 6.7 38 16.8 48 10.2 9.9 24.8 14.9 43.9 14.9 13.8 0 25.5-3.5 35.5-10.4 9.9-6.9 15.9-14.2 18.1-21.8h59.8c-9.6 29.7-24.2 50.9-44 63.7-19.6 12.8-43.6 19.2-71.5 19.2-19.5 0-37-3.2-52.7-9.3-15.1-5.9-28.7-14.9-39.9-26.5a121.2 121.2 0 0 1-25.1-41.2c-6.1-16.9-9.1-34.7-8.9-52.6 0-18.5 3.1-35.7 9.1-51.7 11.5-31.1 35.4-56 65.9-68.9 16.3-6.8 33.8-10.2 51.5-10 21 0 39.2 4 55 12.2a111.6 111.6 0 0 1 38.6 32.8c10.1 13.7 17.2 29.3 21.7 46.9 4.3 17.3 5.8 35.5 4.6 54.7zm-122-95.6c-10.8 0-19.9 1.9-26.9 5.6-7 3.7-12.8 8.3-17.2 13.6a48.4 48.4 0 0 0-9.1 17.4c-1.6 5.3-2.7 10.7-3.1 16.2H723c-1.6-17.3-7.6-30.1-15.6-39.1-8.4-8.9-21.9-13.7-38.6-13.7zm-248.5-10.1c8.7-6.3 12.9-16.7 12.9-31 .3-6.8-1.1-13.5-4.1-19.6-2.7-4.9-6.7-9-11.6-11.9a44.8 44.8 0 0 0-16.6-6c-6.4-1.2-12.9-1.8-19.3-1.7h-70.3v79.7h76.1c13.1.1 24.2-3.1 32.9-9.5zm11.8 72c-9.8-7.5-22.9-11.2-39.2-11.2h-81.8v94h80.2c7.5 0 14.4-.7 21.1-2.1s12.7-3.8 17.8-7.2c5.1-3.3 9.2-7.8 12.3-13.6 3-5.8 4.5-13.2 4.5-22.1 0-17.7-5-30.2-14.9-37.8z")),t.BookOutline = u("book", o, i(r, "M832 64H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32zm-260 72h96v209.9L621.5 312 572 347.4V136zm220 752H232V136h280v296.9c0 3.3 1 6.6 3 9.3a15.9 15.9 0 0 0 22.3 3.7l83.8-59.9 81.4 59.4c2.7 2 6 3.1 9.4 3.1 8.8 0 16-7.2 16-16V136h64v752z")),t.BoxPlotOutline = u("box-plot", o, i(r, "M952 224h-52c-4.4 0-8 3.6-8 8v248h-92V304c0-4.4-3.6-8-8-8H232c-4.4 0-8 3.6-8 8v176h-92V232c0-4.4-3.6-8-8-8H72c-4.4 0-8 3.6-8 8v560c0 4.4 3.6 8 8 8h52c4.4 0 8-3.6 8-8V548h92v172c0 4.4 3.6 8 8 8h560c4.4 0 8-3.6 8-8V548h92v244c0 4.4 3.6 8 8 8h52c4.4 0 8-3.6 8-8V232c0-4.4-3.6-8-8-8zM296 368h88v288h-88V368zm432 288H448V368h280v288z")),t.BulbOutline = u("bulb", o, i(r, "M632 888H392c-4.4 0-8 3.6-8 8v32c0 17.7 14.3 32 32 32h192c17.7 0 32-14.3 32-32v-32c0-4.4-3.6-8-8-8zM512 64c-181.1 0-328 146.9-328 328 0 121.4 66 227.4 164 284.1V792c0 17.7 14.3 32 32 32h264c17.7 0 32-14.3 32-32V676.1c98-56.7 164-162.7 164-284.1 0-181.1-146.9-328-328-328zm127.9 549.8L604 634.6V752H420V634.6l-35.9-20.8C305.4 568.3 256 484.5 256 392c0-141.4 114.6-256 256-256s256 114.6 256 256c0 92.5-49.4 176.3-128.1 221.8z")),t.BugOutline = u("bug", o, i(r, "M304 280h56c4.4 0 8-3.6 8-8 0-28.3 5.9-53.2 17.1-73.5 10.6-19.4 26-34.8 45.4-45.4C450.9 142 475.7 136 504 136h16c28.3 0 53.2 5.9 73.5 17.1 19.4 10.6 34.8 26 45.4 45.4C650 218.9 656 243.7 656 272c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8 0-40-8.8-76.7-25.9-108.1a184.31 184.31 0 0 0-74-74C596.7 72.8 560 64 520 64h-16c-40 0-76.7 8.8-108.1 25.9a184.31 184.31 0 0 0-74 74C304.8 195.3 296 232 296 272c0 4.4 3.6 8 8 8z", "M940 512H792V412c76.8 0 139-62.2 139-139 0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8a63 63 0 0 1-63 63H232a63 63 0 0 1-63-63c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8 0 76.8 62.2 139 139 139v100H84c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h148v96c0 6.5.2 13 .7 19.3C164.1 728.6 116 796.7 116 876c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8 0-44.2 23.9-82.9 59.6-103.7a273 273 0 0 0 22.7 49c24.3 41.5 59 76.2 100.5 100.5S460.5 960 512 960s99.8-13.9 141.3-38.2a281.38 281.38 0 0 0 123.2-149.5A120 120 0 0 1 836 876c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8 0-79.3-48.1-147.4-116.7-176.7.4-6.4.7-12.8.7-19.3v-96h148c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM716 680c0 36.8-9.7 72-27.8 102.9-17.7 30.3-43 55.6-73.3 73.3C584 874.3 548.8 884 512 884s-72-9.7-102.9-27.8c-30.3-17.7-55.6-43-73.3-73.3A202.75 202.75 0 0 1 308 680V412h408v268z")),t.CalculatorOutline = u("calculator", o, i(r, "M251.2 387H320v68.8c0 1.8 1.8 3.2 4 3.2h48c2.2 0 4-1.4 4-3.3V387h68.8c1.8 0 3.2-1.8 3.2-4v-48c0-2.2-1.4-4-3.3-4H376v-68.8c0-1.8-1.8-3.2-4-3.2h-48c-2.2 0-4 1.4-4 3.2V331h-68.8c-1.8 0-3.2 1.8-3.2 4v48c0 2.2 1.4 4 3.2 4zm328 0h193.6c1.8 0 3.2-1.8 3.2-4v-48c0-2.2-1.4-4-3.3-4H579.2c-1.8 0-3.2 1.8-3.2 4v48c0 2.2 1.4 4 3.2 4zm0 265h193.6c1.8 0 3.2-1.8 3.2-4v-48c0-2.2-1.4-4-3.3-4H579.2c-1.8 0-3.2 1.8-3.2 4v48c0 2.2 1.4 4 3.2 4zm0 104h193.6c1.8 0 3.2-1.8 3.2-4v-48c0-2.2-1.4-4-3.3-4H579.2c-1.8 0-3.2 1.8-3.2 4v48c0 2.2 1.4 4 3.2 4zm-195.7-81l61.2-74.9c4.3-5.2.7-13.1-5.9-13.1H388c-2.3 0-4.5 1-5.9 2.9l-34 41.6-34-41.6a7.85 7.85 0 0 0-5.9-2.9h-50.9c-6.6 0-10.2 7.9-5.9 13.1l61.2 74.9-62.7 76.8c-4.4 5.2-.8 13.1 5.8 13.1h50.8c2.3 0 4.5-1 5.9-2.9l35.5-43.5 35.5 43.5c1.5 1.8 3.7 2.9 5.9 2.9h50.8c6.6 0 10.2-7.9 5.9-13.1L383.5 675zM880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-36 732H180V180h664v664z")),t.BuildOutline = u("build", o, i(r, "M916 210H376c-17.7 0-32 14.3-32 32v236H108c-17.7 0-32 14.3-32 32v272c0 17.7 14.3 32 32 32h540c17.7 0 32-14.3 32-32V546h236c17.7 0 32-14.3 32-32V242c0-17.7-14.3-32-32-32zm-504 68h200v200H412V278zm-68 468H144V546h200v200zm268 0H412V546h200v200zm268-268H680V278h200v200z")),t.CalendarOutline = u("calendar", o, i(r, "M880 184H712v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H384v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H144c-17.7 0-32 14.3-32 32v664c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V216c0-17.7-14.3-32-32-32zm-40 656H184V460h656v380zM184 392V256h128v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h256v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h128v136H184z")),t.CameraOutline = u("camera", o, i(r, "M864 248H728l-32.4-90.8a32.07 32.07 0 0 0-30.2-21.2H358.6c-13.5 0-25.6 8.5-30.1 21.2L296 248H160c-44.2 0-80 35.8-80 80v456c0 44.2 35.8 80 80 80h704c44.2 0 80-35.8 80-80V328c0-44.2-35.8-80-80-80zm8 536c0 4.4-3.6 8-8 8H160c-4.4 0-8-3.6-8-8V328c0-4.4 3.6-8 8-8h186.7l17.1-47.8 22.9-64.2h250.5l22.9 64.2 17.1 47.8H864c4.4 0 8 3.6 8 8v456zM512 384c-88.4 0-160 71.6-160 160s71.6 160 160 160 160-71.6 160-160-71.6-160-160-160zm0 256c-53 0-96-43-96-96s43-96 96-96 96 43 96 96-43 96-96 96z")),t.CarOutline = u("car", o, i(r, "M380 704h264c4.4 0 8-3.6 8-8v-84c0-4.4-3.6-8-8-8h-40c-4.4 0-8 3.6-8 8v36H428v-36c0-4.4-3.6-8-8-8h-40c-4.4 0-8 3.6-8 8v84c0 4.4 3.6 8 8 8zm340-123a40 40 0 1 0 80 0 40 40 0 1 0-80 0zm239-167.6L935.3 372a8 8 0 0 0-10.9-2.9l-50.7 29.6-78.3-216.2a63.9 63.9 0 0 0-60.9-44.4H301.2c-34.7 0-65.5 22.4-76.2 55.5l-74.6 205.2-50.8-29.6a8 8 0 0 0-10.9 2.9L65 413.4c-2.2 3.8-.9 8.6 2.9 10.8l60.4 35.2-14.5 40c-1.2 3.2-1.8 6.6-1.8 10v348.2c0 15.7 11.8 28.4 26.3 28.4h67.6c12.3 0 23-9.3 25.6-22.3l7.7-37.7h545.6l7.7 37.7c2.7 13 13.3 22.3 25.6 22.3h67.6c14.5 0 26.3-12.7 26.3-28.4V509.4c0-3.4-.6-6.8-1.8-10l-14.5-40 60.3-35.2a8 8 0 0 0 3-10.8zM840 517v237H184V517l15.6-43h624.8l15.6 43zM292.7 218.1l.5-1.3.4-1.3c1.1-3.3 4.1-5.5 7.6-5.5h427.6l75.4 208H220l72.7-199.9zM224 581a40 40 0 1 0 80 0 40 40 0 1 0-80 0z")),t.CaretDownOutline = u("caret-down", o, i(n, "M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z")),t.CaretLeftOutline = u("caret-left", o, i(n, "M689 165.1L308.2 493.5c-10.9 9.4-10.9 27.5 0 37L689 858.9c14.2 12.2 35 1.2 35-18.5V183.6c0-19.7-20.8-30.7-35-18.5z")),t.CaretRightOutline = u("caret-right", o, i(n, "M715.8 493.5L335 165.1c-14.2-12.2-35-1.2-35 18.5v656.8c0 19.7 20.8 30.7 35 18.5l380.8-328.4c10.9-9.4 10.9-27.6 0-37z")),t.CarryOutOutline = u("carry-out", o, i(r, "M880 184H712v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H384v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H144c-17.7 0-32 14.3-32 32v664c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V216c0-17.7-14.3-32-32-32zm-40 656H184V256h128v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h256v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h128v584zM688 420h-55.2c-5.1 0-10 2.5-13 6.6L468.9 634.4l-64.7-89c-3-4.1-7.8-6.6-13-6.6H336c-6.5 0-10.3 7.4-6.5 12.7l126.4 174a16.1 16.1 0 0 0 26 0l212.6-292.7c3.8-5.4 0-12.8-6.5-12.8z")),t.CheckCircleOutline = u("check-circle", o, i(r, "M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0 0 51.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z", "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z")),t.CaretUpOutline = u("caret-up", o, i(n, "M858.9 689L530.5 308.2c-9.4-10.9-27.5-10.9-37 0L165.1 689c-12.2 14.2-1.2 35 18.5 35h656.8c19.7 0 30.7-20.8 18.5-35z")),t.CheckSquareOutline = u("check-square", o, i(r, "M433.1 657.7a31.8 31.8 0 0 0 51.7 0l210.6-292c3.8-5.3 0-12.7-6.5-12.7H642c-10.2 0-19.9 4.9-25.9 13.3L459 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H315c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8z", "M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z")),t.ChromeOutline = u("chrome", o, i(r, "M928 512.3v-.3c0-229.8-186.2-416-416-416S96 282.2 96 512v.4c0 229.8 186.2 416 416 416s416-186.2 416-416v-.3.2zm-6.7-74.6l.6 3.3-.6-3.3zM676.7 638.2c53.5-82.2 52.5-189.4-11.1-263.7l162.4-8.4c20.5 44.4 32 93.8 32 145.9 0 185.2-144.6 336.6-327.1 347.4l143.8-221.2zM512 652.3c-77.5 0-140.2-62.7-140.2-140.2 0-77.7 62.7-140.2 140.2-140.2S652.2 434.5 652.2 512 589.5 652.3 512 652.3zm369.2-331.7l-3-5.7 3 5.7zM512 164c121.3 0 228.2 62.1 290.4 156.2l-263.6-13.9c-97.5-5.7-190.2 49.2-222.3 141.1L227.8 311c63.1-88.9 166.9-147 284.2-147zM102.5 585.8c26 145 127.1 264 261.6 315.1C229.6 850 128.5 731 102.5 585.8zM164 512c0-55.9 13.2-108.7 36.6-155.5l119.7 235.4c44.1 86.7 137.4 139.7 234 121.6l-74 145.1C302.9 842.5 164 693.5 164 512zm324.7 415.4c4 .2 8 .4 12 .5-4-.2-8-.3-12-.5z")),t.ClockCircleOutline = u("clock-circle", o, i(r, "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z", "M686.7 638.6L544.1 535.5V288c0-4.4-3.6-8-8-8H488c-4.4 0-8 3.6-8 8v275.4c0 2.6 1.2 5 3.3 6.5l165.4 120.6c3.6 2.6 8.6 1.8 11.2-1.7l28.6-39c2.6-3.7 1.8-8.7-1.8-11.2z")),t.CloseCircleOutline = u("close-circle", o, i(r, "M685.4 354.8c0-4.4-3.6-8-8-8l-66 .3L512 465.6l-99.3-118.4-66.1-.3c-4.4 0-8 3.5-8 8 0 1.9.7 3.7 1.9 5.2l130.1 155L340.5 670a8.32 8.32 0 0 0-1.9 5.2c0 4.4 3.6 8 8 8l66.1-.3L512 564.4l99.3 118.4 66 .3c4.4 0 8-3.5 8-8 0-1.9-.7-3.7-1.9-5.2L553.5 515l130.1-155c1.2-1.4 1.8-3.3 1.8-5.2z", "M512 65C264.6 65 64 265.6 64 513s200.6 448 448 448 448-200.6 448-448S759.4 65 512 65zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z")),t.CloudOutline = u("cloud", o, i(r, "M811.4 418.7C765.6 297.9 648.9 212 512.2 212S258.8 297.8 213 418.6C127.3 441.1 64 519.1 64 612c0 110.5 89.5 200 199.9 200h496.2C870.5 812 960 722.5 960 612c0-92.7-63.1-170.7-148.6-193.3zm36.3 281a123.07 123.07 0 0 1-87.6 36.3H263.9c-33.1 0-64.2-12.9-87.6-36.3A123.3 123.3 0 0 1 140 612c0-28 9.1-54.3 26.2-76.3a125.7 125.7 0 0 1 66.1-43.7l37.9-9.9 13.9-36.6c8.6-22.8 20.6-44.1 35.7-63.4a245.6 245.6 0 0 1 52.4-49.9c41.1-28.9 89.5-44.2 140-44.2s98.9 15.3 140 44.2c19.9 14 37.5 30.8 52.4 49.9 15.1 19.3 27.1 40.7 35.7 63.4l13.8 36.5 37.8 10c54.3 14.5 92.1 63.8 92.1 120 0 33.1-12.9 64.3-36.3 87.7z")),t.CloseSquareOutline = u("close-square", o, i(r, "M354 671h58.9c4.7 0 9.2-2.1 12.3-5.7L512 561.8l86.8 103.5c3 3.6 7.5 5.7 12.3 5.7H670c6.8 0 10.5-7.9 6.1-13.1L553.8 512l122.4-145.9c4.4-5.2.7-13.1-6.1-13.1h-58.9c-4.7 0-9.2 2.1-12.3 5.7L512 462.2l-86.8-103.5c-3-3.6-7.5-5.7-12.3-5.7H354c-6.8 0-10.5 7.9-6.1 13.1L470.2 512 347.9 657.9A7.95 7.95 0 0 0 354 671z", "M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z")),t.CodeOutline = u("code", o, i(r, "M516 673c0 4.4 3.4 8 7.5 8h185c4.1 0 7.5-3.6 7.5-8v-48c0-4.4-3.4-8-7.5-8h-185c-4.1 0-7.5 3.6-7.5 8v48zm-194.9 6.1l192-161c3.8-3.2 3.8-9.1 0-12.3l-192-160.9A7.95 7.95 0 0 0 308 351v62.7c0 2.4 1 4.6 2.9 6.1L420.7 512l-109.8 92.2a8.1 8.1 0 0 0-2.9 6.1V673c0 6.8 7.9 10.5 13.1 6.1zM880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z")),t.CodepenCircleOutline = u("codepen-circle", o, i(r, "M488.1 414.7V303.4L300.9 428l83.6 55.8zm254.1 137.7v-79.8l-59.8 39.9zM512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm278 533c0 1.1-.1 2.1-.2 3.1 0 .4-.1.7-.2 1a14.16 14.16 0 0 1-.8 3.2c-.2.6-.4 1.2-.6 1.7-.2.4-.4.8-.5 1.2-.3.5-.5 1.1-.8 1.6-.2.4-.4.7-.7 1.1-.3.5-.7 1-1 1.5-.3.4-.5.7-.8 1-.4.4-.8.9-1.2 1.3-.3.3-.6.6-1 .9-.4.4-.9.8-1.4 1.1-.4.3-.7.6-1.1.8-.1.1-.3.2-.4.3L525.2 786c-4 2.7-8.6 4-13.2 4-4.7 0-9.3-1.4-13.3-4L244.6 616.9c-.1-.1-.3-.2-.4-.3l-1.1-.8c-.5-.4-.9-.7-1.3-1.1-.3-.3-.6-.6-1-.9-.4-.4-.8-.8-1.2-1.3a7 7 0 0 1-.8-1c-.4-.5-.7-1-1-1.5-.2-.4-.5-.7-.7-1.1-.3-.5-.6-1.1-.8-1.6-.2-.4-.4-.8-.5-1.2-.2-.6-.4-1.2-.6-1.7-.1-.4-.3-.8-.4-1.2-.2-.7-.3-1.3-.4-2-.1-.3-.1-.7-.2-1-.1-1-.2-2.1-.2-3.1V427.9c0-1 .1-2.1.2-3.1.1-.3.1-.7.2-1a14.16 14.16 0 0 1 .8-3.2c.2-.6.4-1.2.6-1.7.2-.4.4-.8.5-1.2.2-.5.5-1.1.8-1.6.2-.4.4-.7.7-1.1.6-.9 1.2-1.7 1.8-2.5.4-.4.8-.9 1.2-1.3.3-.3.6-.6 1-.9.4-.4.9-.8 1.3-1.1.4-.3.7-.6 1.1-.8.1-.1.3-.2.4-.3L498.7 239c8-5.3 18.5-5.3 26.5 0l254.1 169.1c.1.1.3.2.4.3l1.1.8 1.4 1.1c.3.3.6.6 1 .9.4.4.8.8 1.2 1.3.7.8 1.3 1.6 1.8 2.5.2.4.5.7.7 1.1.3.5.6 1 .8 1.6.2.4.4.8.5 1.2.2.6.4 1.2.6 1.7.1.4.3.8.4 1.2.2.7.3 1.3.4 2 .1.3.1.7.2 1 .1 1 .2 2.1.2 3.1V597zm-254.1 13.3v111.3L723.1 597l-83.6-55.8zM281.8 472.6v79.8l59.8-39.9zM512 456.1l-84.5 56.4 84.5 56.4 84.5-56.4zM723.1 428L535.9 303.4v111.3l103.6 69.1zM384.5 541.2L300.9 597l187.2 124.6V610.3l-103.6-69.1z")),t.CompassOutline = u("compass", o, i(r, "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372zm198.4-588.1a32 32 0 0 0-24.5.5L414.9 415 296.4 686c-3.6 8.2-3.6 17.5 0 25.7 3.4 7.8 9.7 13.9 17.7 17 3.8 1.5 7.7 2.2 11.7 2.2 4.4 0 8.7-.9 12.8-2.7l271-118.6 118.5-271a32.06 32.06 0 0 0-17.7-42.7zM576.8 534.4l26.2 26.2-42.4 42.4-26.2-26.2L380 644.4 447.5 490 422 464.4l42.4-42.4 25.5 25.5L644.4 380l-67.6 154.4zM464.4 422L422 464.4l25.5 25.6 86.9 86.8 26.2 26.2 42.4-42.4-26.2-26.2-86.8-86.9z")),t.ContactsOutline = u("contacts", o, i(r, "M594.3 601.5a111.8 111.8 0 0 0 29.1-75.5c0-61.9-49.9-112-111.4-112s-111.4 50.1-111.4 112c0 29.1 11 55.5 29.1 75.5a158.09 158.09 0 0 0-74.6 126.1 8 8 0 0 0 8 8.4H407c4.2 0 7.6-3.3 7.9-7.5 3.8-50.6 46-90.5 97.2-90.5s93.4 40 97.2 90.5c.3 4.2 3.7 7.5 7.9 7.5H661a8 8 0 0 0 8-8.4c-2.8-53.3-32-99.7-74.7-126.1zM512 578c-28.5 0-51.7-23.3-51.7-52s23.2-52 51.7-52 51.7 23.3 51.7 52-23.2 52-51.7 52zm416-354H768v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56H548v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56H328v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56H96c-17.7 0-32 14.3-32 32v576c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V256c0-17.7-14.3-32-32-32zm-40 568H136V296h120v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56h148v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56h148v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56h120v496z")),t.ContainerOutline = u("container", o, i(r, "M832 64H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32zm-40 824H232V687h97.9c11.6 32.8 32 62.3 59.1 84.7 34.5 28.5 78.2 44.3 123 44.3s88.5-15.7 123-44.3c27.1-22.4 47.5-51.9 59.1-84.7H792v-63H643.6l-5.2 24.7C626.4 708.5 573.2 752 512 752s-114.4-43.5-126.5-103.3l-5.2-24.7H232V136h560v752zM320 341h384c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H320c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8zm0 160h384c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H320c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8z")),t.ControlOutline = u("control", o, i(r, "M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656zM340 683v77c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-77c-10.1 3.3-20.8 5-32 5s-21.9-1.8-32-5zm64-198V264c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v221c10.1-3.3 20.8-5 32-5s21.9 1.8 32 5zm-64 198c10.1 3.3 20.8 5 32 5s21.9-1.8 32-5c41.8-13.5 72-52.7 72-99s-30.2-85.5-72-99c-10.1-3.3-20.8-5-32-5s-21.9 1.8-32 5c-41.8 13.5-72 52.7-72 99s30.2 85.5 72 99zm.1-115.7c.3-.6.7-1.2 1-1.8v-.1l1.2-1.8c.1-.2.2-.3.3-.5.3-.5.7-.9 1-1.4.1-.1.2-.3.3-.4.5-.6.9-1.1 1.4-1.6l.3-.3 1.2-1.2.4-.4c.5-.5 1-.9 1.6-1.4.6-.5 1.1-.9 1.7-1.3.2-.1.3-.2.5-.3.5-.3.9-.7 1.4-1 .1-.1.3-.2.4-.3.6-.4 1.2-.7 1.9-1.1.1-.1.3-.1.4-.2.5-.3 1-.5 1.6-.8l.6-.3c.7-.3 1.3-.6 2-.8.7-.3 1.4-.5 2.1-.7.2-.1.4-.1.6-.2.6-.2 1.1-.3 1.7-.4.2 0 .3-.1.5-.1.7-.2 1.5-.3 2.2-.4.2 0 .3 0 .5-.1.6-.1 1.2-.1 1.8-.2h.6c.8 0 1.5-.1 2.3-.1s1.5 0 2.3.1h.6c.6 0 1.2.1 1.8.2.2 0 .3 0 .5.1.7.1 1.5.2 2.2.4.2 0 .3.1.5.1.6.1 1.2.3 1.7.4.2.1.4.1.6.2.7.2 1.4.4 2.1.7.7.2 1.3.5 2 .8l.6.3c.5.2 1.1.5 1.6.8.1.1.3.1.4.2.6.3 1.3.7 1.9 1.1.1.1.3.2.4.3.5.3 1 .6 1.4 1 .2.1.3.2.5.3.6.4 1.2.9 1.7 1.3s1.1.9 1.6 1.4l.4.4 1.2 1.2.3.3c.5.5 1 1.1 1.4 1.6.1.1.2.3.3.4.4.4.7.9 1 1.4.1.2.2.3.3.5l1.2 1.8s0 .1.1.1a36.18 36.18 0 0 1 5.1 18.5c0 6-1.5 11.7-4.1 16.7-.3.6-.7 1.2-1 1.8 0 0 0 .1-.1.1l-1.2 1.8c-.1.2-.2.3-.3.5-.3.5-.7.9-1 1.4-.1.1-.2.3-.3.4-.5.6-.9 1.1-1.4 1.6l-.3.3-1.2 1.2-.4.4c-.5.5-1 .9-1.6 1.4-.6.5-1.1.9-1.7 1.3-.2.1-.3.2-.5.3-.5.3-.9.7-1.4 1-.1.1-.3.2-.4.3-.6.4-1.2.7-1.9 1.1-.1.1-.3.1-.4.2-.5.3-1 .5-1.6.8l-.6.3c-.7.3-1.3.6-2 .8-.7.3-1.4.5-2.1.7-.2.1-.4.1-.6.2-.6.2-1.1.3-1.7.4-.2 0-.3.1-.5.1-.7.2-1.5.3-2.2.4-.2 0-.3 0-.5.1-.6.1-1.2.1-1.8.2h-.6c-.8 0-1.5.1-2.3.1s-1.5 0-2.3-.1h-.6c-.6 0-1.2-.1-1.8-.2-.2 0-.3 0-.5-.1-.7-.1-1.5-.2-2.2-.4-.2 0-.3-.1-.5-.1-.6-.1-1.2-.3-1.7-.4-.2-.1-.4-.1-.6-.2-.7-.2-1.4-.4-2.1-.7-.7-.2-1.3-.5-2-.8l-.6-.3c-.5-.2-1.1-.5-1.6-.8-.1-.1-.3-.1-.4-.2-.6-.3-1.3-.7-1.9-1.1-.1-.1-.3-.2-.4-.3-.5-.3-1-.6-1.4-1-.2-.1-.3-.2-.5-.3-.6-.4-1.2-.9-1.7-1.3s-1.1-.9-1.6-1.4l-.4-.4-1.2-1.2-.3-.3c-.5-.5-1-1.1-1.4-1.6-.1-.1-.2-.3-.3-.4-.4-.4-.7-.9-1-1.4-.1-.2-.2-.3-.3-.5l-1.2-1.8v-.1c-.4-.6-.7-1.2-1-1.8-2.6-5-4.1-10.7-4.1-16.7s1.5-11.7 4.1-16.7zM620 539v221c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V539c-10.1 3.3-20.8 5-32 5s-21.9-1.8-32-5zm64-198v-77c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v77c10.1-3.3 20.8-5 32-5s21.9 1.8 32 5zm-64 198c10.1 3.3 20.8 5 32 5s21.9-1.8 32-5c41.8-13.5 72-52.7 72-99s-30.2-85.5-72-99c-10.1-3.3-20.8-5-32-5s-21.9 1.8-32 5c-41.8 13.5-72 52.7-72 99s30.2 85.5 72 99zm.1-115.7c.3-.6.7-1.2 1-1.8v-.1l1.2-1.8c.1-.2.2-.3.3-.5.3-.5.7-.9 1-1.4.1-.1.2-.3.3-.4.5-.6.9-1.1 1.4-1.6l.3-.3 1.2-1.2.4-.4c.5-.5 1-.9 1.6-1.4.6-.5 1.1-.9 1.7-1.3.2-.1.3-.2.5-.3.5-.3.9-.7 1.4-1 .1-.1.3-.2.4-.3.6-.4 1.2-.7 1.9-1.1.1-.1.3-.1.4-.2.5-.3 1-.5 1.6-.8l.6-.3c.7-.3 1.3-.6 2-.8.7-.3 1.4-.5 2.1-.7.2-.1.4-.1.6-.2.6-.2 1.1-.3 1.7-.4.2 0 .3-.1.5-.1.7-.2 1.5-.3 2.2-.4.2 0 .3 0 .5-.1.6-.1 1.2-.1 1.8-.2h.6c.8 0 1.5-.1 2.3-.1s1.5 0 2.3.1h.6c.6 0 1.2.1 1.8.2.2 0 .3 0 .5.1.7.1 1.5.2 2.2.4.2 0 .3.1.5.1.6.1 1.2.3 1.7.4.2.1.4.1.6.2.7.2 1.4.4 2.1.7.7.2 1.3.5 2 .8l.6.3c.5.2 1.1.5 1.6.8.1.1.3.1.4.2.6.3 1.3.7 1.9 1.1.1.1.3.2.4.3.5.3 1 .6 1.4 1 .2.1.3.2.5.3.6.4 1.2.9 1.7 1.3s1.1.9 1.6 1.4l.4.4 1.2 1.2.3.3c.5.5 1 1.1 1.4 1.6.1.1.2.3.3.4.4.4.7.9 1 1.4.1.2.2.3.3.5l1.2 1.8v.1a36.18 36.18 0 0 1 5.1 18.5c0 6-1.5 11.7-4.1 16.7-.3.6-.7 1.2-1 1.8v.1l-1.2 1.8c-.1.2-.2.3-.3.5-.3.5-.7.9-1 1.4-.1.1-.2.3-.3.4-.5.6-.9 1.1-1.4 1.6l-.3.3-1.2 1.2-.4.4c-.5.5-1 .9-1.6 1.4-.6.5-1.1.9-1.7 1.3-.2.1-.3.2-.5.3-.5.3-.9.7-1.4 1-.1.1-.3.2-.4.3-.6.4-1.2.7-1.9 1.1-.1.1-.3.1-.4.2-.5.3-1 .5-1.6.8l-.6.3c-.7.3-1.3.6-2 .8-.7.3-1.4.5-2.1.7-.2.1-.4.1-.6.2-.6.2-1.1.3-1.7.4-.2 0-.3.1-.5.1-.7.2-1.5.3-2.2.4-.2 0-.3 0-.5.1-.6.1-1.2.1-1.8.2h-.6c-.8 0-1.5.1-2.3.1s-1.5 0-2.3-.1h-.6c-.6 0-1.2-.1-1.8-.2-.2 0-.3 0-.5-.1-.7-.1-1.5-.2-2.2-.4-.2 0-.3-.1-.5-.1-.6-.1-1.2-.3-1.7-.4-.2-.1-.4-.1-.6-.2-.7-.2-1.4-.4-2.1-.7-.7-.2-1.3-.5-2-.8l-.6-.3c-.5-.2-1.1-.5-1.6-.8-.1-.1-.3-.1-.4-.2-.6-.3-1.3-.7-1.9-1.1-.1-.1-.3-.2-.4-.3-.5-.3-1-.6-1.4-1-.2-.1-.3-.2-.5-.3-.6-.4-1.2-.9-1.7-1.3s-1.1-.9-1.6-1.4l-.4-.4-1.2-1.2-.3-.3c-.5-.5-1-1.1-1.4-1.6-.1-.1-.2-.3-.3-.4-.4-.4-.7-.9-1-1.4-.1-.2-.2-.3-.3-.5l-1.2-1.8v-.1c-.4-.6-.7-1.2-1-1.8-2.6-5-4.1-10.7-4.1-16.7s1.5-11.7 4.1-16.7z")),t.CopyOutline = u("copy", o, i(r, "M832 64H296c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496v688c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V96c0-17.7-14.3-32-32-32zM704 192H192c-17.7 0-32 14.3-32 32v530.7c0 8.5 3.4 16.6 9.4 22.6l173.3 173.3c2.2 2.2 4.7 4 7.4 5.5v1.9h4.2c3.5 1.3 7.2 2 11 2H704c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32zM350 856.2L263.9 770H350v86.2zM664 888H414V746c0-22.1-17.9-40-40-40H232V264h432v624z")),t.CreditCardOutline = u("credit-card", o, i(r, "M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-792 72h752v120H136V232zm752 560H136V440h752v352zm-237-64h165c4.4 0 8-3.6 8-8v-72c0-4.4-3.6-8-8-8H651c-4.4 0-8 3.6-8 8v72c0 4.4 3.6 8 8 8z")),t.CrownOutline = u("crown", o, i(r, "M899.6 276.5L705 396.4 518.4 147.5a8.06 8.06 0 0 0-12.9 0L319 396.4 124.3 276.5c-5.7-3.5-13.1 1.2-12.2 7.9L188.5 865c1.1 7.9 7.9 14 16 14h615.1c8 0 14.9-6 15.9-14l76.4-580.6c.8-6.7-6.5-11.4-12.3-7.9zm-126 534.1H250.3l-53.8-409.4 139.8 86.1L512 252.9l175.7 234.4 139.8-86.1-53.9 409.4zM512 509c-62.1 0-112.6 50.5-112.6 112.6S449.9 734.2 512 734.2s112.6-50.5 112.6-112.6S574.1 509 512 509zm0 160.9c-26.6 0-48.2-21.6-48.2-48.3 0-26.6 21.6-48.3 48.2-48.3s48.2 21.6 48.2 48.3c0 26.6-21.6 48.3-48.2 48.3z")),t.CustomerServiceOutline = u("customer-service", o, i(r, "M512 128c-212.1 0-384 171.9-384 384v360c0 13.3 10.7 24 24 24h184c35.3 0 64-28.7 64-64V624c0-35.3-28.7-64-64-64H200v-48c0-172.3 139.7-312 312-312s312 139.7 312 312v48H688c-35.3 0-64 28.7-64 64v208c0 35.3 28.7 64 64 64h184c13.3 0 24-10.7 24-24V512c0-212.1-171.9-384-384-384zM328 632v192H200V632h128zm496 192H696V632h128v192z")),t.DashboardOutline = u("dashboard", o, i(r, "M924.8 385.6a446.7 446.7 0 0 0-96-142.4 446.7 446.7 0 0 0-142.4-96C631.1 123.8 572.5 112 512 112s-119.1 11.8-174.4 35.2a446.7 446.7 0 0 0-142.4 96 446.7 446.7 0 0 0-96 142.4C75.8 440.9 64 499.5 64 560c0 132.7 58.3 257.7 159.9 343.1l1.7 1.4c5.8 4.8 13.1 7.5 20.6 7.5h531.7c7.5 0 14.8-2.7 20.6-7.5l1.7-1.4C901.7 817.7 960 692.7 960 560c0-60.5-11.9-119.1-35.2-174.4zM761.4 836H262.6A371.12 371.12 0 0 1 140 560c0-99.4 38.7-192.8 109-263 70.3-70.3 163.7-109 263-109 99.4 0 192.8 38.7 263 109 70.3 70.3 109 163.7 109 263 0 105.6-44.5 205.5-122.6 276zM623.5 421.5a8.03 8.03 0 0 0-11.3 0L527.7 506c-18.7-5-39.4-.2-54.1 14.5a55.95 55.95 0 0 0 0 79.2 55.95 55.95 0 0 0 79.2 0 55.87 55.87 0 0 0 14.5-54.1l84.5-84.5c3.1-3.1 3.1-8.2 0-11.3l-28.3-28.3zM490 320h44c4.4 0 8-3.6 8-8v-80c0-4.4-3.6-8-8-8h-44c-4.4 0-8 3.6-8 8v80c0 4.4 3.6 8 8 8zm260 218v44c0 4.4 3.6 8 8 8h80c4.4 0 8-3.6 8-8v-44c0-4.4-3.6-8-8-8h-80c-4.4 0-8 3.6-8 8zm12.7-197.2l-31.1-31.1a8.03 8.03 0 0 0-11.3 0l-56.6 56.6a8.03 8.03 0 0 0 0 11.3l31.1 31.1c3.1 3.1 8.2 3.1 11.3 0l56.6-56.6c3.1-3.1 3.1-8.2 0-11.3zm-458.6-31.1a8.03 8.03 0 0 0-11.3 0l-31.1 31.1a8.03 8.03 0 0 0 0 11.3l56.6 56.6c3.1 3.1 8.2 3.1 11.3 0l31.1-31.1c3.1-3.1 3.1-8.2 0-11.3l-56.6-56.6zM262 530h-80c-4.4 0-8 3.6-8 8v44c0 4.4 3.6 8 8 8h80c4.4 0 8-3.6 8-8v-44c0-4.4-3.6-8-8-8z")),t.DeleteOutline = u("delete", o, i(r, "M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z")),t.DiffOutline = u("diff", o, i(r, "M476 399.1c0-3.9-3.1-7.1-7-7.1h-42c-3.8 0-7 3.2-7 7.1V484h-84.5c-4.1 0-7.5 3.1-7.5 7v42c0 3.8 3.4 7 7.5 7H420v84.9c0 3.9 3.2 7.1 7 7.1h42c3.9 0 7-3.2 7-7.1V540h84.5c4.1 0 7.5-3.2 7.5-7v-42c0-3.9-3.4-7-7.5-7H476v-84.9zM560.5 704h-225c-4.1 0-7.5 3.2-7.5 7v42c0 3.8 3.4 7 7.5 7h225c4.1 0 7.5-3.2 7.5-7v-42c0-3.8-3.4-7-7.5-7zm-7.1-502.6c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v704c0 17.7 14.3 32 32 32h512c17.7 0 32-14.3 32-32V397.3c0-8.5-3.4-16.6-9.4-22.6L553.4 201.4zM664 888H232V264h282.2L664 413.8V888zm190.2-581.4L611.3 72.9c-6-5.7-13.9-8.9-22.2-8.9H296c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h277l219 210.6V824c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V329.6c0-8.7-3.5-17-9.8-23z")),t.DatabaseOutline = u("database", o, i(r, "M832 64H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32zm-600 72h560v208H232V136zm560 480H232V408h560v208zm0 272H232V680h560v208zM304 240a40 40 0 1 0 80 0 40 40 0 1 0-80 0zm0 272a40 40 0 1 0 80 0 40 40 0 1 0-80 0zm0 272a40 40 0 1 0 80 0 40 40 0 1 0-80 0z")),t.DislikeOutline = u("dislike", o, i(r, "M885.9 490.3c3.6-12 5.4-24.4 5.4-37 0-28.3-9.3-55.5-26.1-77.7 3.6-12 5.4-24.4 5.4-37 0-28.3-9.3-55.5-26.1-77.7 3.6-12 5.4-24.4 5.4-37 0-51.6-30.7-98.1-78.3-118.4a66.1 66.1 0 0 0-26.5-5.4H144c-17.7 0-32 14.3-32 32v364c0 17.7 14.3 32 32 32h129.3l85.8 310.8C372.9 889 418.9 924 470.9 924c29.7 0 57.4-11.8 77.9-33.4 20.5-21.5 31-49.7 29.5-79.4l-6-122.9h239.9c12.1 0 23.9-3.2 34.3-9.3 40.4-23.5 65.5-66.1 65.5-111 0-28.3-9.3-55.5-26.1-77.7zM184 456V172h81v284h-81zm627.2 160.4H496.8l9.6 198.4c.6 11.9-4.7 23.1-14.6 30.5-6.1 4.5-13.6 6.8-21.1 6.7a44.28 44.28 0 0 1-42.2-32.3L329 459.2V172h415.4a56.85 56.85 0 0 1 33.6 51.8c0 9.7-2.3 18.9-6.9 27.3l-13.9 25.4 21.9 19a56.76 56.76 0 0 1 19.6 43c0 9.7-2.3 18.9-6.9 27.3l-13.9 25.4 21.9 19a56.76 56.76 0 0 1 19.6 43c0 9.7-2.3 18.9-6.9 27.3l-14 25.5 21.9 19a56.76 56.76 0 0 1 19.6 43c0 19.1-11 37.5-28.8 48.4z")),t.DownCircleOutline = u("down-circle", o, i(r, "M690 405h-46.9c-10.2 0-19.9 4.9-25.9 13.2L512 563.6 406.8 418.2c-6-8.3-15.6-13.2-25.9-13.2H334c-6.5 0-10.3 7.4-6.5 12.7l178 246c3.2 4.4 9.7 4.4 12.9 0l178-246c3.9-5.3.1-12.7-6.4-12.7z", "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z")),t.DownSquareOutline = u("down-square", o, i(r, "M505.5 658.7c3.2 4.4 9.7 4.4 12.9 0l178-246c3.8-5.3 0-12.7-6.5-12.7H643c-10.2 0-19.9 4.9-25.9 13.2L512 558.6 406.8 413.2c-6-8.3-15.6-13.2-25.9-13.2H334c-6.5 0-10.3 7.4-6.5 12.7l178 246z", "M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z")),t.DribbbleSquareOutline = u("dribbble-square", o, i(r, "M498.6 432c-40.8-72.5-84.7-133.4-91.2-142.3-68.8 32.5-120.3 95.9-136.2 172.2 11 .2 112.4.7 227.4-29.9zm66.5 21.8c5.7 11.7 11.2 23.6 16.3 35.6 1.8 4.2 3.6 8.4 5.3 12.7 81.8-10.3 163.2 6.2 171.3 7.9-.5-58.1-21.3-111.4-55.5-153.3-5.3 7.1-46.5 60-137.4 97.1zM880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM512 800c-158.8 0-288-129.2-288-288s129.2-288 288-288 288 129.2 288 288-129.2 288-288 288zm89.7-259.1c32.2 88.4 45.3 160.4 47.8 175.4 55.2-37.3 94.5-96.4 105.4-164.9-8.4-2.6-76.1-22.8-153.2-10.5zm-72.5-26.4c3.2-1 6.4-2 9.7-2.9-6.2-14-12.9-28-19.9-41.7-122.8 36.8-242.1 35.2-252.8 35-.1 2.5-.1 5-.1 7.5 0 63.2 23.9 120.9 63.2 164.5 5.5-9.6 73-121.4 199.9-162.4zm145.9-186.2a245.2 245.2 0 0 0-220.8-55.1c6.8 9.1 51.5 69.9 91.8 144 87.5-32.8 124.5-82.6 129-88.9zM554 552.8c-138.7 48.3-188.6 144.6-193 153.6 41.7 32.5 94.1 51.9 151 51.9 34.1 0 66.6-6.9 96.1-19.5-3.7-21.6-17.9-96.8-52.5-186.6l-1.6.6z")),t.EnvironmentOutline = u("environment", o, i(r, "M854.6 289.1a362.49 362.49 0 0 0-79.9-115.7 370.83 370.83 0 0 0-118.2-77.8C610.7 76.6 562.1 67 512 67c-50.1 0-98.7 9.6-144.5 28.5-44.3 18.3-84 44.5-118.2 77.8A363.6 363.6 0 0 0 169.4 289c-19.5 45-29.4 92.8-29.4 142 0 70.6 16.9 140.9 50.1 208.7 26.7 54.5 64 107.6 111 158.1 80.3 86.2 164.5 138.9 188.4 153a43.9 43.9 0 0 0 22.4 6.1c7.8 0 15.5-2 22.4-6.1 23.9-14.1 108.1-66.8 188.4-153 47-50.4 84.3-103.6 111-158.1C867.1 572 884 501.8 884 431.1c0-49.2-9.9-97-29.4-142zM512 880.2c-65.9-41.9-300-207.8-300-449.1 0-77.9 31.1-151.1 87.6-206.3C356.3 169.5 431.7 139 512 139s155.7 30.5 212.4 85.9C780.9 280 812 353.2 812 431.1c0 241.3-234.1 407.2-300 449.1zm0-617.2c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm79.2 255.2A111.6 111.6 0 0 1 512 551c-29.9 0-58-11.7-79.2-32.8A111.6 111.6 0 0 1 400 439c0-29.9 11.7-58 32.8-79.2C454 338.6 482.1 327 512 327c29.9 0 58 11.6 79.2 32.8C612.4 381 624 409.1 624 439c0 29.9-11.6 58-32.8 79.2z")),t.EditOutline = u("edit", o, i(r, "M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 0 0 0-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 0 0 9.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z")),t.ExclamationCircleOutline = u("exclamation-circle", o, i(r, "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z", "M464 688a48 48 0 1 0 96 0 48 48 0 1 0-96 0zm24-112h48c4.4 0 8-3.6 8-8V296c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8z")),t.ExperimentOutline = u("experiment", o, i(r, "M512 472a40 40 0 1 0 80 0 40 40 0 1 0-80 0zm367 352.9L696.3 352V178H768v-68H256v68h71.7v174L145 824.9c-2.8 7.4-4.3 15.2-4.3 23.1 0 35.3 28.7 64 64 64h614.6c7.9 0 15.7-1.5 23.1-4.3 33-12.7 49.4-49.8 36.6-82.8zM395.7 364.7V180h232.6v184.7L719.2 600c-20.7-5.3-42.1-8-63.9-8-61.2 0-119.2 21.5-165.3 60a188.78 188.78 0 0 1-121.3 43.9c-32.7 0-64.1-8.3-91.8-23.7l118.8-307.5zM210.5 844l41.7-107.8c35.7 18.1 75.4 27.8 116.6 27.8 61.2 0 119.2-21.5 165.3-60 33.9-28.2 76.3-43.9 121.3-43.9 35 0 68.4 9.5 97.6 27.1L813.5 844h-603z")),t.EyeInvisibleOutline = u("eye-invisible", o, i(r, "M942.2 486.2Q889.47 375.11 816.7 305l-50.88 50.88C807.31 395.53 843.45 447.4 874.7 512 791.5 684.2 673.4 766 512 766q-72.67 0-133.87-22.38L323 798.75Q408 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 0 0 0-51.5zm-63.57-320.64L836 122.88a8 8 0 0 0-11.32 0L715.31 232.2Q624.86 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 0 0 0 51.5q56.69 119.4 136.5 191.41L112.48 835a8 8 0 0 0 0 11.31L155.17 889a8 8 0 0 0 11.31 0l712.15-712.12a8 8 0 0 0 0-11.32zM149.3 512C232.6 339.8 350.7 258 512 258c54.54 0 104.13 9.36 149.12 28.39l-70.3 70.3a176 176 0 0 0-238.13 238.13l-83.42 83.42C223.1 637.49 183.3 582.28 149.3 512zm246.7 0a112.11 112.11 0 0 1 146.2-106.69L401.31 546.2A112 112 0 0 1 396 512z", "M508 624c-3.46 0-6.87-.16-10.25-.47l-52.82 52.82a176.09 176.09 0 0 0 227.42-227.42l-52.82 52.82c.31 3.38.47 6.79.47 10.25a111.94 111.94 0 0 1-112 112z")),t.EyeOutline = u("eye", o, i(r, "M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 0 0 0 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z")),t.FacebookOutline = u("facebook", o, i(r, "M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-32 736H663.9V602.2h104l15.6-120.7H663.9v-77.1c0-35 9.7-58.8 59.8-58.8h63.9v-108c-11.1-1.5-49-4.8-93.2-4.8-92.2 0-155.3 56.3-155.3 159.6v89H434.9v120.7h104.3V848H176V176h672v672z")),t.FastBackwardOutline = u("fast-backward", o, i(n, "M517.6 273.5L230.2 499.3a16.14 16.14 0 0 0 0 25.4l287.4 225.8c10.7 8.4 26.4.8 26.4-12.7V286.2c0-13.5-15.7-21.1-26.4-12.7zm320 0L550.2 499.3a16.14 16.14 0 0 0 0 25.4l287.4 225.8c10.7 8.4 26.4.8 26.4-12.7V286.2c0-13.5-15.7-21.1-26.4-12.7zm-620-25.5h-51.2c-3.5 0-6.4 2.7-6.4 6v516c0 3.3 2.9 6 6.4 6h51.2c3.5 0 6.4-2.7 6.4-6V254c0-3.3-2.9-6-6.4-6z")),t.FastForwardOutline = u("fast-forward", o, i(n, "M793.8 499.3L506.4 273.5c-10.7-8.4-26.4-.8-26.4 12.7v451.6c0 13.5 15.7 21.1 26.4 12.7l287.4-225.8a16.14 16.14 0 0 0 0-25.4zm-320 0L186.4 273.5c-10.7-8.4-26.4-.8-26.4 12.7v451.5c0 13.5 15.7 21.1 26.4 12.7l287.4-225.8c4.1-3.2 6.2-8 6.2-12.7 0-4.6-2.1-9.4-6.2-12.6zM857.6 248h-51.2c-3.5 0-6.4 2.7-6.4 6v516c0 3.3 2.9 6 6.4 6h51.2c3.5 0 6.4-2.7 6.4-6V254c0-3.3-2.9-6-6.4-6z")),t.FileAddOutline = u("file-add", o, i(r, "M854.6 288.6L639.4 73.4c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.7-9.4-22.7zM790.2 326H602V137.8L790.2 326zm1.8 562H232V136h302v216a42 42 0 0 0 42 42h216v494zM544 472c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v108H372c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h108v108c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V644h108c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H544V472z")),t.FileExcelOutline = u("file-excel", o, i(r, "M854.6 288.6L639.4 73.4c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.7-9.4-22.7zM790.2 326H602V137.8L790.2 326zm1.8 562H232V136h302v216a42 42 0 0 0 42 42h216v494zM514.1 580.1l-61.8-102.4c-2.2-3.6-6.1-5.8-10.3-5.8h-38.4c-2.3 0-4.5.6-6.4 1.9-5.6 3.5-7.3 10.9-3.7 16.6l82.3 130.4-83.4 132.8a12.04 12.04 0 0 0 10.2 18.4h34.5c4.2 0 8-2.2 10.2-5.7L510 664.8l62.3 101.4c2.2 3.6 6.1 5.7 10.2 5.7H620c2.3 0 4.5-.7 6.5-1.9 5.6-3.6 7.2-11 3.6-16.6l-84-130.4 85.3-132.5a12.04 12.04 0 0 0-10.1-18.5h-35.7c-4.2 0-8.1 2.2-10.3 5.8l-61.2 102.3z")),t.FileExclamationOutline = u("file-exclamation", o, i(r, "M854.6 288.6L639.4 73.4c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.7-9.4-22.7zM790.2 326H602V137.8L790.2 326zm1.8 562H232V136h302v216a42 42 0 0 0 42 42h216v494zM472 744a40 40 0 1 0 80 0 40 40 0 1 0-80 0zm16-104h48c4.4 0 8-3.6 8-8V448c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v184c0 4.4 3.6 8 8 8z")),t.FileImageOutline = u("file-image", o, i(r, "M553.1 509.1l-77.8 99.2-41.1-52.4a8 8 0 0 0-12.6 0l-99.8 127.2a7.98 7.98 0 0 0 6.3 12.9H696c6.7 0 10.4-7.7 6.3-12.9l-136.5-174a8.1 8.1 0 0 0-12.7 0zM360 442a40 40 0 1 0 80 0 40 40 0 1 0-80 0zm494.6-153.4L639.4 73.4c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.7-9.4-22.7zM790.2 326H602V137.8L790.2 326zm1.8 562H232V136h302v216a42 42 0 0 0 42 42h216v494z")),t.FileMarkdownOutline = u("file-markdown", o, i(r, "M854.6 288.6L639.4 73.4c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.7-9.4-22.7zM790.2 326H602V137.8L790.2 326zm1.8 562H232V136h302v216a42 42 0 0 0 42 42h216v494zM429 481.2c-1.9-4.4-6.2-7.2-11-7.2h-35c-6.6 0-12 5.4-12 12v272c0 6.6 5.4 12 12 12h27.1c6.6 0 12-5.4 12-12V582.1l66.8 150.2a12 12 0 0 0 11 7.1H524c4.7 0 9-2.8 11-7.1l66.8-150.6V758c0 6.6 5.4 12 12 12H641c6.6 0 12-5.4 12-12V486c0-6.6-5.4-12-12-12h-34.7c-4.8 0-9.1 2.8-11 7.2l-83.1 191-83.2-191z")),t.FilePptOutline = u("file-ppt", o, i(r, "M424 476c-4.4 0-8 3.6-8 8v276c0 4.4 3.6 8 8 8h32.5c4.4 0 8-3.6 8-8v-95.5h63.3c59.4 0 96.2-38.9 96.2-94.1 0-54.5-36.3-94.3-96-94.3H424zm150.6 94.3c0 43.4-26.5 54.3-71.2 54.3h-38.9V516.2h56.2c33.8 0 53.9 19.7 53.9 54.1zm280-281.7L639.4 73.4c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.7-9.4-22.7zM790.2 326H602V137.8L790.2 326zm1.8 562H232V136h302v216a42 42 0 0 0 42 42h216v494z")),t.FileTextOutline = u("file-text", o, i(r, "M854.6 288.6L639.4 73.4c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.7-9.4-22.7zM790.2 326H602V137.8L790.2 326zm1.8 562H232V136h302v216a42 42 0 0 0 42 42h216v494zM504 618H320c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zM312 490v48c0 4.4 3.6 8 8 8h384c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H320c-4.4 0-8 3.6-8 8z")),t.FilePdfOutline = u("file-pdf", o, i(r, "M531.3 574.4l.3-1.4c5.8-23.9 13.1-53.7 7.4-80.7-3.8-21.3-19.5-29.6-32.9-30.2-15.8-.7-29.9 8.3-33.4 21.4-6.6 24-.7 56.8 10.1 98.6-13.6 32.4-35.3 79.5-51.2 107.5-29.6 15.3-69.3 38.9-75.2 68.7-1.2 5.5.2 12.5 3.5 18.8 3.7 7 9.6 12.4 16.5 15 3 1.1 6.6 2 10.8 2 17.6 0 46.1-14.2 84.1-79.4 5.8-1.9 11.8-3.9 17.6-5.9 27.2-9.2 55.4-18.8 80.9-23.1 28.2 15.1 60.3 24.8 82.1 24.8 21.6 0 30.1-12.8 33.3-20.5 5.6-13.5 2.9-30.5-6.2-39.6-13.2-13-45.3-16.4-95.3-10.2-24.6-15-40.7-35.4-52.4-65.8zM421.6 726.3c-13.9 20.2-24.4 30.3-30.1 34.7 6.7-12.3 19.8-25.3 30.1-34.7zm87.6-235.5c5.2 8.9 4.5 35.8.5 49.4-4.9-19.9-5.6-48.1-2.7-51.4.8.1 1.5.7 2.2 2zm-1.6 120.5c10.7 18.5 24.2 34.4 39.1 46.2-21.6 4.9-41.3 13-58.9 20.2-4.2 1.7-8.3 3.4-12.3 5 13.3-24.1 24.4-51.4 32.1-71.4zm155.6 65.5c.1.2.2.5-.4.9h-.2l-.2.3c-.8.5-9 5.3-44.3-8.6 40.6-1.9 45 7.3 45.1 7.4zm191.4-388.2L639.4 73.4c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.7-9.4-22.7zM790.2 326H602V137.8L790.2 326zm1.8 562H232V136h302v216a42 42 0 0 0 42 42h216v494z")),t.FileZipOutline = u("file-zip", o, i(r, "M296 392h64v64h-64zm0 190v160h128V582h-64v-62h-64v62zm80 48v64h-32v-64h32zm-16-302h64v64h-64zm-64-64h64v64h-64zm64 192h64v64h-64zm0-256h64v64h-64zm494.6 88.6L639.4 73.4c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.7-9.4-22.7zM790.2 326H602V137.8L790.2 326zm1.8 562H232V136h64v64h64v-64h174v216a42 42 0 0 0 42 42h216v494z")),t.FileOutline = u("file", o, i(r, "M854.6 288.6L639.4 73.4c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.7-9.4-22.7zM790.2 326H602V137.8L790.2 326zm1.8 562H232V136h302v216a42 42 0 0 0 42 42h216v494z")),t.FilterOutline = u("filter", o, i(r, "M880.1 154H143.9c-24.5 0-39.8 26.7-27.5 48L349 597.4V838c0 17.7 14.2 32 31.8 32h262.4c17.6 0 31.8-14.3 31.8-32V597.4L907.7 202c12.2-21.3-3.1-48-27.6-48zM603.4 798H420.6V642h182.9v156zm9.6-236.6l-9.5 16.6h-183l-9.5-16.6L212.7 226h598.6L613 561.4z")),t.FileWordOutline = u("file-word", o, i(r, "M854.6 288.6L639.4 73.4c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.7-9.4-22.7zM790.2 326H602V137.8L790.2 326zm1.8 562H232V136h302v216a42 42 0 0 0 42 42h216v494zM528.1 472h-32.2c-5.5 0-10.3 3.7-11.6 9.1L434.6 680l-46.1-198.7c-1.3-5.4-6.1-9.3-11.7-9.3h-35.4a12.02 12.02 0 0 0-11.6 15.1l74.2 276c1.4 5.2 6.2 8.9 11.6 8.9h32c5.4 0 10.2-3.6 11.6-8.9l52.8-197 52.8 197c1.4 5.2 6.2 8.9 11.6 8.9h31.8c5.4 0 10.2-3.6 11.6-8.9l74.4-276a12.04 12.04 0 0 0-11.6-15.1H647c-5.6 0-10.4 3.9-11.7 9.3l-45.8 199.1-49.8-199.3c-1.3-5.4-6.1-9.1-11.6-9.1z")),t.FireOutline = u("fire", o, i(r, "M834.1 469.2A347.49 347.49 0 0 0 751.2 354l-29.1-26.7a8.09 8.09 0 0 0-13 3.3l-13 37.3c-8.1 23.4-23 47.3-44.1 70.8-1.4 1.5-3 1.9-4.1 2-1.1.1-2.8-.1-4.3-1.5-1.4-1.2-2.1-3-2-4.8 3.7-60.2-14.3-128.1-53.7-202C555.3 171 510 123.1 453.4 89.7l-41.3-24.3c-5.4-3.2-12.3 1-12 7.3l2.2 48c1.5 32.8-2.3 61.8-11.3 85.9-11 29.5-26.8 56.9-47 81.5a295.64 295.64 0 0 1-47.5 46.1 352.6 352.6 0 0 0-100.3 121.5A347.75 347.75 0 0 0 160 610c0 47.2 9.3 92.9 27.7 136a349.4 349.4 0 0 0 75.5 110.9c32.4 32 70 57.2 111.9 74.7C418.5 949.8 464.5 959 512 959s93.5-9.2 136.9-27.3A348.6 348.6 0 0 0 760.8 857c32.4-32 57.8-69.4 75.5-110.9a344.2 344.2 0 0 0 27.7-136c0-48.8-10-96.2-29.9-140.9zM713 808.5c-53.7 53.2-125 82.4-201 82.4s-147.3-29.2-201-82.4c-53.5-53.1-83-123.5-83-198.4 0-43.5 9.8-85.2 29.1-124 18.8-37.9 46.8-71.8 80.8-97.9a349.6 349.6 0 0 0 58.6-56.8c25-30.5 44.6-64.5 58.2-101a240 240 0 0 0 12.1-46.5c24.1 22.2 44.3 49 61.2 80.4 33.4 62.6 48.8 118.3 45.8 165.7a74.01 74.01 0 0 0 24.4 59.8 73.36 73.36 0 0 0 53.4 18.8c19.7-1 37.8-9.7 51-24.4 13.3-14.9 24.8-30.1 34.4-45.6 14 17.9 25.7 37.4 35 58.4 15.9 35.8 24 73.9 24 113.1 0 74.9-29.5 145.4-83 198.4z")),t.FileUnknownOutline = u("file-unknown", o, i(r, "M854.6 288.7L639.4 73.4c-6-6-14.2-9.4-22.7-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.6-9.4-22.6zM790.2 326H602V137.8L790.2 326zm1.8 562H232V136h302v216a42 42 0 0 0 42 42h216v494zM402 549c0 5.4 4.4 9.5 9.8 9.5h32.4c5.4 0 9.8-4.2 9.8-9.4 0-28.2 25.8-51.6 58-51.6s58 23.4 58 51.5c0 25.3-21 47.2-49.3 50.9-19.3 2.8-34.5 20.3-34.7 40.1v32c0 5.5 4.5 10 10 10h32c5.5 0 10-4.5 10-10v-12.2c0-6 4-11.5 9.7-13.3 44.6-14.4 75-54 74.3-98.9-.8-55.5-49.2-100.8-108.5-101.6-61.4-.7-111.5 45.6-111.5 103zm78 195a32 32 0 1 0 64 0 32 32 0 1 0-64 0z")),t.FlagOutline = u("flag", o, i(r, "M880 305H624V192c0-17.7-14.3-32-32-32H184v-40c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v784c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V640h248v113c0 17.7 14.3 32 32 32h416c17.7 0 32-14.3 32-32V337c0-17.7-14.3-32-32-32zM184 568V232h368v336H184zm656 145H504v-73h112c4.4 0 8-3.6 8-8V377h216v336z")),t.FolderAddOutline = u("folder-add", o, i(r, "M484 443.1V528h-84.5c-4.1 0-7.5 3.1-7.5 7v42c0 3.8 3.4 7 7.5 7H484v84.9c0 3.9 3.2 7.1 7 7.1h42c3.9 0 7-3.2 7-7.1V584h84.5c4.1 0 7.5-3.2 7.5-7v-42c0-3.9-3.4-7-7.5-7H540v-84.9c0-3.9-3.1-7.1-7-7.1h-42c-3.8 0-7 3.2-7 7.1zm396-144.7H521L403.7 186.2a8.15 8.15 0 0 0-5.5-2.2H144c-17.7 0-32 14.3-32 32v592c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V330.4c0-17.7-14.3-32-32-32zM840 768H184V256h188.5l119.6 114.4H840V768z")),t.FolderOutline = u("folder", o, i(r, "M880 298.4H521L403.7 186.2a8.15 8.15 0 0 0-5.5-2.2H144c-17.7 0-32 14.3-32 32v592c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V330.4c0-17.7-14.3-32-32-32zM840 768H184V256h188.5l119.6 114.4H840V768z")),t.FolderOpenOutline = u("folder-open", o, i(r, "M928 444H820V330.4c0-17.7-14.3-32-32-32H473L355.7 186.2a8.15 8.15 0 0 0-5.5-2.2H96c-17.7 0-32 14.3-32 32v592c0 17.7 14.3 32 32 32h698c13 0 24.8-7.9 29.7-20l134-332c1.5-3.8 2.3-7.9 2.3-12 0-17.7-14.3-32-32-32zM136 256h188.5l119.6 114.4H748V444H238c-13 0-24.8 7.9-29.7 20L136 643.2V256zm635.3 512H159l103.3-256h612.4L771.3 768z")),t.ForwardOutline = u("forward", o, i(n, "M825.8 498L538.4 249.9c-10.7-9.2-26.4-.9-26.4 14v496.3c0 14.9 15.7 23.2 26.4 14L825.8 526c8.3-7.2 8.3-20.8 0-28zm-320 0L218.4 249.9c-10.7-9.2-26.4-.9-26.4 14v496.3c0 14.9 15.7 23.2 26.4 14L505.8 526c4.1-3.6 6.2-8.8 6.2-14 0-5.2-2.1-10.4-6.2-14z")),t.FrownOutline = u("frown", o, i(r, "M288 421a48 48 0 1 0 96 0 48 48 0 1 0-96 0zm352 0a48 48 0 1 0 96 0 48 48 0 1 0-96 0zM512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm263 711c-34.2 34.2-74 61-118.3 79.8C611 874.2 562.3 884 512 884c-50.3 0-99-9.8-144.8-29.2A370.4 370.4 0 0 1 248.9 775c-34.2-34.2-61-74-79.8-118.3C149.8 611 140 562.3 140 512s9.8-99 29.2-144.8A370.4 370.4 0 0 1 249 248.9c34.2-34.2 74-61 118.3-79.8C413 149.8 461.7 140 512 140c50.3 0 99 9.8 144.8 29.2A370.4 370.4 0 0 1 775.1 249c34.2 34.2 61 74 79.8 118.3C874.2 413 884 461.7 884 512s-9.8 99-29.2 144.8A368.89 368.89 0 0 1 775 775zM512 533c-85.5 0-155.6 67.3-160 151.6a8 8 0 0 0 8 8.4h48.1c4.2 0 7.8-3.2 8.1-7.4C420 636.1 461.5 597 512 597s92.1 39.1 95.8 88.6c.3 4.2 3.9 7.4 8.1 7.4H664a8 8 0 0 0 8-8.4C667.6 600.3 597.5 533 512 533z")),t.FundOutline = u("fund", o, i(r, "M926 164H94c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V196c0-17.7-14.3-32-32-32zm-40 632H134V236h752v560zm-658.9-82.3c3.1 3.1 8.2 3.1 11.3 0l172.5-172.5 114.4 114.5c3.1 3.1 8.2 3.1 11.3 0l297-297.2c3.1-3.1 3.1-8.2 0-11.3l-36.8-36.8a8.03 8.03 0 0 0-11.3 0L531 565 416.6 450.5a8.03 8.03 0 0 0-11.3 0l-214.9 215a8.03 8.03 0 0 0 0 11.3l36.7 36.9z")),t.FunnelPlotOutline = u("funnel-plot", o, i(r, "M880.1 154H143.9c-24.5 0-39.8 26.7-27.5 48L349 607.4V838c0 17.7 14.2 32 31.8 32h262.4c17.6 0 31.8-14.3 31.8-32V607.4L907.7 202c12.2-21.3-3.1-48-27.6-48zM603.4 798H420.6V650h182.9v148zm9.6-226.6l-8.4 14.6H419.3l-8.4-14.6L334.4 438h355.2L613 571.4zM726.3 374H297.7l-85-148h598.6l-85 148z")),t.GiftOutline = u("gift", o, i(r, "M880 310H732.4c13.6-21.4 21.6-46.8 21.6-74 0-76.1-61.9-138-138-138-41.4 0-78.7 18.4-104 47.4-25.3-29-62.6-47.4-104-47.4-76.1 0-138 61.9-138 138 0 27.2 7.9 52.6 21.6 74H144c-17.7 0-32 14.3-32 32v200c0 4.4 3.6 8 8 8h40v344c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V550h40c4.4 0 8-3.6 8-8V342c0-17.7-14.3-32-32-32zm-334-74c0-38.6 31.4-70 70-70s70 31.4 70 70-31.4 70-70 70h-70v-70zm-138-70c38.6 0 70 31.4 70 70v70h-70c-38.6 0-70-31.4-70-70s31.4-70 70-70zM180 482V378h298v104H180zm48 68h250v308H228V550zm568 308H546V550h250v308zm48-376H546V378h298v104z")),t.GithubOutline = u("github", o, i(r, "M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z")),t.GitlabOutline = u("gitlab", o, i(r, "M913.9 552.2L805 181.4v-.1c-7.6-22.9-25.7-36.5-48.3-36.5-23.4 0-42.5 13.5-49.7 35.2l-71.4 213H388.8l-71.4-213c-7.2-21.7-26.3-35.2-49.7-35.2-23.1 0-42.5 14.8-48.4 36.6L110.5 552.2c-4.4 14.7 1.2 31.4 13.5 40.7l368.5 276.4c2.6 3.6 6.2 6.3 10.4 7.8l8.6 6.4 8.5-6.4c4.9-1.7 9-4.7 11.9-8.9l368.4-275.4c12.4-9.2 18-25.9 13.6-40.6zM751.7 193.4c1-1.8 2.9-1.9 3.5-1.9 1.1 0 2.5.3 3.4 3L818 394.3H684.5l67.2-200.9zm-487.4 1c.9-2.6 2.3-2.9 3.4-2.9 2.7 0 2.9.1 3.4 1.7l67.3 201.2H206.5l57.8-200zM158.8 558.7l28.2-97.3 202.4 270.2-230.6-172.9zm73.9-116.4h122.1l90.8 284.3-212.9-284.3zM512.9 776L405.7 442.3H620L512.9 776zm157.9-333.7h119.5L580 723.1l90.8-280.8zm-40.7 293.9l207.3-276.7 29.5 99.2-236.8 177.5z")),t.HeartOutline = u("heart", o, i(r, "M923 283.6a260.04 260.04 0 0 0-56.9-82.8 264.4 264.4 0 0 0-84-55.5A265.34 265.34 0 0 0 679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 0 0-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9zM512 814.8S156 586.7 156 385.5C156 283.6 240.3 201 344.3 201c73.1 0 136.5 40.8 167.7 100.4C543.2 241.8 606.6 201 679.7 201c104 0 188.3 82.6 188.3 184.5 0 201.2-356 429.3-356 429.3z")),t.HddOutline = u("hdd", o, i(r, "M832 64H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32zm-600 72h560v208H232V136zm560 480H232V408h560v208zm0 272H232V680h560v208zM496 208H312c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zM312 544h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H312c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8zm328 244a40 40 0 1 0 80 0 40 40 0 1 0-80 0z")),t.HighlightOutline = u("highlight", o, i(r, "M957.6 507.4L603.2 158.2a7.9 7.9 0 0 0-11.2 0L353.3 393.4a8.03 8.03 0 0 0-.1 11.3l.1.1 40 39.4-117.2 115.3a8.03 8.03 0 0 0-.1 11.3l.1.1 39.5 38.9-189.1 187H72.1c-4.4 0-8.1 3.6-8.1 8V860c0 4.4 3.6 8 8 8h344.9c2.1 0 4.1-.8 5.6-2.3l76.1-75.6 40.4 39.8a7.9 7.9 0 0 0 11.2 0l117.1-115.6 40.1 39.5a7.9 7.9 0 0 0 11.2 0l238.7-235.2c3.4-3 3.4-8 .3-11.2zM389.8 796.2H229.6l134.4-133 80.1 78.9-54.3 54.1zm154.8-62.1L373.2 565.2l68.6-67.6 171.4 168.9-68.6 67.6zM713.1 658L450.3 399.1 597.6 254l262.8 259-147.3 145z")),t.HomeOutline = u("home", o, i(r, "M946.5 505L560.1 118.8l-25.9-25.9a31.5 31.5 0 0 0-44.4 0L77.5 505a63.9 63.9 0 0 0-18.8 46c.4 35.2 29.7 63.3 64.9 63.3h42.5V940h691.8V614.3h43.4c17.1 0 33.2-6.7 45.3-18.8a63.6 63.6 0 0 0 18.7-45.3c0-17-6.7-33.1-18.8-45.2zM568 868H456V664h112v204zm217.9-325.7V868H632V640c0-22.1-17.9-40-40-40H432c-22.1 0-40 17.9-40 40v228H238.1V542.3h-96l370-369.7 23.1 23.1L882 542.3h-96.1z")),t.HourglassOutline = u("hourglass", o, i(r, "M742 318V184h86c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H196c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h86v134c0 81.5 42.4 153.2 106.4 194-64 40.8-106.4 112.5-106.4 194v134h-86c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h632c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8h-86V706c0-81.5-42.4-153.2-106.4-194 64-40.8 106.4-112.5 106.4-194zm-72 388v134H354V706c0-42.2 16.4-81.9 46.3-111.7C430.1 564.4 469.8 548 512 548s81.9 16.4 111.7 46.3C653.6 624.1 670 663.8 670 706zm0-388c0 42.2-16.4 81.9-46.3 111.7C593.9 459.6 554.2 476 512 476s-81.9-16.4-111.7-46.3A156.63 156.63 0 0 1 354 318V184h316v134z")),t.Html5Outline = u("html5", o, i(r, "M145 96l66 746.6L511.8 928l299.6-85.4L878.7 96H145zm610.9 700.6l-244.1 69.6-245.2-69.6-56.7-641.2h603.8l-57.8 641.2zM281 249l1.7 24.3 22.7 253.5h206.5v-.1h112.9l-11.4 118.5L511 672.9v.2h-.8l-102.4-27.7-6.5-73.2h-91l11.3 144.7 188.6 52h1.7v-.4l187.7-51.7 1.7-16.3 21.2-242.2 3.2-24.3H511v.2H389.9l-8.2-94.2h352.1l1.7-19.5 4.8-47.2L742 249H511z")),t.IdcardOutline = u("idcard", o, i(r, "M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 632H136V232h752v560zM610.3 476h123.4c1.3 0 2.3-3.6 2.3-8v-48c0-4.4-1-8-2.3-8H610.3c-1.3 0-2.3 3.6-2.3 8v48c0 4.4 1 8 2.3 8zm4.8 144h185.7c3.9 0 7.1-3.6 7.1-8v-48c0-4.4-3.2-8-7.1-8H615.1c-3.9 0-7.1 3.6-7.1 8v48c0 4.4 3.2 8 7.1 8zM224 673h43.9c4.2 0 7.6-3.3 7.9-7.5 3.8-50.5 46-90.5 97.2-90.5s93.4 40 97.2 90.5c.3 4.2 3.7 7.5 7.9 7.5H522a8 8 0 0 0 8-8.4c-2.8-53.3-32-99.7-74.6-126.1a111.8 111.8 0 0 0 29.1-75.5c0-61.9-49.9-112-111.4-112s-111.4 50.1-111.4 112c0 29.1 11 55.5 29.1 75.5a158.09 158.09 0 0 0-74.6 126.1c-.4 4.6 3.2 8.4 7.8 8.4zm149-262c28.5 0 51.7 23.3 51.7 52s-23.2 52-51.7 52-51.7-23.3-51.7-52 23.2-52 51.7-52z")),t.InfoCircleOutline = u("info-circle", o, i(r, "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z", "M464 336a48 48 0 1 0 96 0 48 48 0 1 0-96 0zm72 112h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V456c0-4.4-3.6-8-8-8z")),t.InstagramOutline = u("instagram", o, i(r, "M512 306.9c-113.5 0-205.1 91.6-205.1 205.1S398.5 717.1 512 717.1 717.1 625.5 717.1 512 625.5 306.9 512 306.9zm0 338.4c-73.4 0-133.3-59.9-133.3-133.3S438.6 378.7 512 378.7 645.3 438.6 645.3 512 585.4 645.3 512 645.3zm213.5-394.6c-26.5 0-47.9 21.4-47.9 47.9s21.4 47.9 47.9 47.9 47.9-21.3 47.9-47.9a47.84 47.84 0 0 0-47.9-47.9zM911.8 512c0-55.2.5-109.9-2.6-165-3.1-64-17.7-120.8-64.5-167.6-46.9-46.9-103.6-61.4-167.6-64.5-55.2-3.1-109.9-2.6-165-2.6-55.2 0-109.9-.5-165 2.6-64 3.1-120.8 17.7-167.6 64.5C132.6 226.3 118.1 283 115 347c-3.1 55.2-2.6 109.9-2.6 165s-.5 109.9 2.6 165c3.1 64 17.7 120.8 64.5 167.6 46.9 46.9 103.6 61.4 167.6 64.5 55.2 3.1 109.9 2.6 165 2.6 55.2 0 109.9.5 165-2.6 64-3.1 120.8-17.7 167.6-64.5 46.9-46.9 61.4-103.6 64.5-167.6 3.2-55.1 2.6-109.8 2.6-165zm-88 235.8c-7.3 18.2-16.1 31.8-30.2 45.8-14.1 14.1-27.6 22.9-45.8 30.2C695.2 844.7 570.3 840 512 840c-58.3 0-183.3 4.7-235.9-16.1-18.2-7.3-31.8-16.1-45.8-30.2-14.1-14.1-22.9-27.6-30.2-45.8C179.3 695.2 184 570.3 184 512c0-58.3-4.7-183.3 16.1-235.9 7.3-18.2 16.1-31.8 30.2-45.8s27.6-22.9 45.8-30.2C328.7 179.3 453.7 184 512 184s183.3-4.7 235.9 16.1c18.2 7.3 31.8 16.1 45.8 30.2 14.1 14.1 22.9 27.6 30.2 45.8C844.7 328.7 840 453.7 840 512c0 58.3 4.7 183.2-16.2 235.8z")),t.InsuranceOutline = u("insurance", o, i(r, "M441.6 306.8L403 288.6a6.1 6.1 0 0 0-8.4 3.7c-17.5 58.5-45.2 110.1-82.2 153.6a6.05 6.05 0 0 0-1.2 5.6l13.2 43.5c1.3 4.4 7 5.7 10.2 2.4 7.7-8.1 15.4-16.9 23.1-26V656c0 4.4 3.6 8 8 8H403c4.4 0 8-3.6 8-8V393.1a429.2 429.2 0 0 0 33.6-79c1-2.9-.3-6-3-7.3zm26.8 9.2v127.2c0 4.4 3.6 8 8 8h65.9v18.6h-94.9c-4.4 0-8 3.6-8 8v35.6c0 4.4 3.6 8 8 8h55.1c-19.1 30.8-42.4 55.7-71 76a6 6 0 0 0-1.6 8.1l22.8 36.5c1.9 3.1 6.2 3.8 8.9 1.4 31.6-26.8 58.7-62.9 80.6-107.6v120c0 4.4 3.6 8 8 8h36.2c4.4 0 8-3.6 8-8V536c21.3 41.7 47.5 77.5 78.1 106.9 2.6 2.5 6.8 2.1 8.9-.7l26.3-35.3c2-2.7 1.4-6.5-1.2-8.4-30.5-22.6-54.2-47.8-72.3-76.9h59c4.4 0 8-3.6 8-8V478c0-4.4-3.6-8-8-8h-98.8v-18.6h66.7c4.4 0 8-3.6 8-8V316c0-4.4-3.6-8-8-8H476.4c-4.4 0-8 3.6-8 8zm51.5 42.8h97.9v41.6h-97.9v-41.6zm347-188.9L527.1 54.1C523 52.7 517.5 52 512 52s-11 .7-15.1 2.1L157.1 169.9c-8.3 2.8-15.1 12.4-15.1 21.2v482.4c0 8.8 5.7 20.4 12.6 25.9L499.3 968c3.5 2.7 8 4.1 12.6 4.1s9.2-1.4 12.6-4.1l344.7-268.6c6.9-5.4 12.6-17 12.6-25.9V191.1c.2-8.8-6.6-18.3-14.9-21.2zM810 654.3L512 886.5 214 654.3V226.7l298-101.6 298 101.6v427.6z")),t.InteractionOutline = u("interaction", o, i(r, "M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656zM304.8 524h50.7c3.7 0 6.8-3 6.8-6.8v-78.9c0-19.7 15.9-35.6 35.5-35.6h205.7v53.4c0 5.7 6.5 8.8 10.9 5.3l109.1-85.7c3.5-2.7 3.5-8 0-10.7l-109.1-85.7c-4.4-3.5-10.9-.3-10.9 5.3V338H397.7c-55.1 0-99.7 44.8-99.7 100.1V517c0 4 3 7 6.8 7zm-4.2 134.9l109.1 85.7c4.4 3.5 10.9.3 10.9-5.3v-53.4h205.7c55.1 0 99.7-44.8 99.7-100.1v-78.9c0-3.7-3-6.8-6.8-6.8h-50.7c-3.7 0-6.8 3-6.8 6.8v78.9c0 19.7-15.9 35.6-35.5 35.6H420.6V568c0-5.7-6.5-8.8-10.9-5.3l-109.1 85.7c-3.5 2.5-3.5 7.8 0 10.5z")),t.InterationOutline = u("interation", o, i(r, "M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656zM304.8 524h50.7c3.7 0 6.8-3 6.8-6.8v-78.9c0-19.7 15.9-35.6 35.5-35.6h205.7v53.4c0 5.7 6.5 8.8 10.9 5.3l109.1-85.7c3.5-2.7 3.5-8 0-10.7l-109.1-85.7c-4.4-3.5-10.9-.3-10.9 5.3V338H397.7c-55.1 0-99.7 44.8-99.7 100.1V517c0 4 3 7 6.8 7zm-4.2 134.9l109.1 85.7c4.4 3.5 10.9.3 10.9-5.3v-53.4h205.7c55.1 0 99.7-44.8 99.7-100.1v-78.9c0-3.7-3-6.8-6.8-6.8h-50.7c-3.7 0-6.8 3-6.8 6.8v78.9c0 19.7-15.9 35.6-35.5 35.6H420.6V568c0-5.7-6.5-8.8-10.9-5.3l-109.1 85.7c-3.5 2.5-3.5 7.8 0 10.5z")),t.LayoutOutline = u("layout", o, i(r, "M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-696 72h136v656H184V184zm656 656H384V384h456v456zM384 320V184h456v136H384z")),t.LeftCircleOutline = u("left-circle", o, i(r, "M603.3 327.5l-246 178a7.95 7.95 0 0 0 0 12.9l246 178c5.3 3.8 12.7 0 12.7-6.5V643c0-10.2-4.9-19.9-13.2-25.9L457.4 512l145.4-105.2c8.3-6 13.2-15.6 13.2-25.9V334c0-6.5-7.4-10.3-12.7-6.5z", "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z")),t.LeftSquareOutline = u("left-square", o, i(r, "M365.3 518.5l246 178c5.3 3.8 12.7 0 12.7-6.5v-46.9c0-10.2-4.9-19.9-13.2-25.9L465.4 512l145.4-105.2c8.3-6 13.2-15.6 13.2-25.9V334c0-6.5-7.4-10.3-12.7-6.5l-246 178a8.05 8.05 0 0 0 0 13z", "M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z")),t.LikeOutline = u("like", o, i(r, "M885.9 533.7c16.8-22.2 26.1-49.4 26.1-77.7 0-44.9-25.1-87.4-65.5-111.1a67.67 67.67 0 0 0-34.3-9.3H572.4l6-122.9c1.4-29.7-9.1-57.9-29.5-79.4A106.62 106.62 0 0 0 471 99.9c-52 0-98 35-111.8 85.1l-85.9 311H144c-17.7 0-32 14.3-32 32v364c0 17.7 14.3 32 32 32h601.3c9.2 0 18.2-1.8 26.5-5.4 47.6-20.3 78.3-66.8 78.3-118.4 0-12.6-1.8-25-5.4-37 16.8-22.2 26.1-49.4 26.1-77.7 0-12.6-1.8-25-5.4-37 16.8-22.2 26.1-49.4 26.1-77.7-.2-12.6-2-25.1-5.6-37.1zM184 852V568h81v284h-81zm636.4-353l-21.9 19 13.9 25.4a56.2 56.2 0 0 1 6.9 27.3c0 16.5-7.2 32.2-19.6 43l-21.9 19 13.9 25.4a56.2 56.2 0 0 1 6.9 27.3c0 16.5-7.2 32.2-19.6 43l-21.9 19 13.9 25.4a56.2 56.2 0 0 1 6.9 27.3c0 22.4-13.2 42.6-33.6 51.8H329V564.8l99.5-360.5a44.1 44.1 0 0 1 42.2-32.3c7.6 0 15.1 2.2 21.1 6.7 9.9 7.4 15.2 18.6 14.6 30.5l-9.6 198.4h314.4C829 418.5 840 436.9 840 456c0 16.5-7.2 32.1-19.6 43z")),t.LinkedinOutline = u("linkedin", o, i(r, "M847.7 112H176.3c-35.5 0-64.3 28.8-64.3 64.3v671.4c0 35.5 28.8 64.3 64.3 64.3h671.4c35.5 0 64.3-28.8 64.3-64.3V176.3c0-35.5-28.8-64.3-64.3-64.3zm0 736c-447.8-.1-671.7-.2-671.7-.3.1-447.8.2-671.7.3-671.7 447.8.1 671.7.2 671.7.3-.1 447.8-.2 671.7-.3 671.7zM230.6 411.9h118.7v381.8H230.6zm59.4-52.2c37.9 0 68.8-30.8 68.8-68.8a68.8 68.8 0 1 0-137.6 0c-.1 38 30.7 68.8 68.8 68.8zm252.3 245.1c0-49.8 9.5-98 71.2-98 60.8 0 61.7 56.9 61.7 101.2v185.7h118.6V584.3c0-102.8-22.2-181.9-142.3-181.9-57.7 0-96.4 31.7-112.3 61.7h-1.6v-52.2H423.7v381.8h118.6V604.8z")),t.LockOutline = u("lock", o, i(r, "M832 464h-68V240c0-70.7-57.3-128-128-128H388c-70.7 0-128 57.3-128 128v224h-68c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V496c0-17.7-14.3-32-32-32zM332 240c0-30.9 25.1-56 56-56h248c30.9 0 56 25.1 56 56v224H332V240zm460 600H232V536h560v304zM484 701v53c0 4.4 3.6 8 8 8h40c4.4 0 8-3.6 8-8v-53a48.01 48.01 0 1 0-56 0z")),t.MedicineBoxOutline = u("medicine-box", o, i(r, "M839.2 278.1a32 32 0 0 0-30.4-22.1H736V144c0-17.7-14.3-32-32-32H320c-17.7 0-32 14.3-32 32v112h-72.8a31.9 31.9 0 0 0-30.4 22.1L112 502v378c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V502l-72.8-223.9zM360 184h304v72H360v-72zm480 656H184V513.4L244.3 328h535.4L840 513.4V840zM652 572H544V464c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v108H372c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h108v108c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V636h108c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z")),t.MehOutline = u("meh", o, i(r, "M288 421a48 48 0 1 0 96 0 48 48 0 1 0-96 0zm352 0a48 48 0 1 0 96 0 48 48 0 1 0-96 0zM512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm263 711c-34.2 34.2-74 61-118.3 79.8C611 874.2 562.3 884 512 884c-50.3 0-99-9.8-144.8-29.2A370.4 370.4 0 0 1 248.9 775c-34.2-34.2-61-74-79.8-118.3C149.8 611 140 562.3 140 512s9.8-99 29.2-144.8A370.4 370.4 0 0 1 249 248.9c34.2-34.2 74-61 118.3-79.8C413 149.8 461.7 140 512 140c50.3 0 99 9.8 144.8 29.2A370.4 370.4 0 0 1 775.1 249c34.2 34.2 61 74 79.8 118.3C874.2 413 884 461.7 884 512s-9.8 99-29.2 144.8A368.89 368.89 0 0 1 775 775zM664 565H360c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h304c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z")),t.MailOutline = u("mail", o, i(r, "M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 110.8V792H136V270.8l-27.6-21.5 39.3-50.5 42.8 33.3h643.1l42.8-33.3 39.3 50.5-27.7 21.5zM833.6 232L512 482 190.4 232l-42.8-33.3-39.3 50.5 27.6 21.5 341.6 265.6a55.99 55.99 0 0 0 68.7 0L888 270.8l27.6-21.5-39.3-50.5-42.7 33.2z")),t.MessageOutline = u("message", o, i(r, "M464 512a48 48 0 1 0 96 0 48 48 0 1 0-96 0zm200 0a48 48 0 1 0 96 0 48 48 0 1 0-96 0zm-400 0a48 48 0 1 0 96 0 48 48 0 1 0-96 0zm661.2-173.6c-22.6-53.7-55-101.9-96.3-143.3a444.35 444.35 0 0 0-143.3-96.3C630.6 75.7 572.2 64 512 64h-2c-60.6.3-119.3 12.3-174.5 35.9a445.35 445.35 0 0 0-142 96.5c-40.9 41.3-73 89.3-95.2 142.8-23 55.4-34.6 114.3-34.3 174.9A449.4 449.4 0 0 0 112 714v152a46 46 0 0 0 46 46h152.1A449.4 449.4 0 0 0 510 960h2.1c59.9 0 118-11.6 172.7-34.3a444.48 444.48 0 0 0 142.8-95.2c41.3-40.9 73.8-88.7 96.5-142 23.6-55.2 35.6-113.9 35.9-174.5.3-60.9-11.5-120-34.8-175.6zm-151.1 438C704 845.8 611 884 512 884h-1.7c-60.3-.3-120.2-15.3-173.1-43.5l-8.4-4.5H188V695.2l-4.5-8.4C155.3 633.9 140.3 574 140 513.7c-.4-99.7 37.7-193.3 107.6-263.8 69.8-70.5 163.1-109.5 262.8-109.9h1.7c50 0 98.5 9.7 144.2 28.9 44.6 18.7 84.6 45.6 119 80 34.3 34.3 61.3 74.4 80 119 19.4 46.2 29.1 95.2 28.9 145.8-.6 99.6-39.7 192.9-110.1 262.7z")),t.MinusCircleOutline = u("minus-circle", o, i(r, "M696 480H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h368c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z", "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z")),t.MinusSquareOutline = u("minus-square", o, i(r, "M328 544h368c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8z", "M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z")),t.MobileOutline = u("mobile", o, i(r, "M744 62H280c-35.3 0-64 28.7-64 64v768c0 35.3 28.7 64 64 64h464c35.3 0 64-28.7 64-64V126c0-35.3-28.7-64-64-64zm-8 824H288V134h448v752zM472 784a40 40 0 1 0 80 0 40 40 0 1 0-80 0z")),t.MoneyCollectOutline = u("money-collect", o, i(r, "M911.5 700.7a8 8 0 0 0-10.3-4.8L840 718.2V180c0-37.6-30.4-68-68-68H252c-37.6 0-68 30.4-68 68v538.2l-61.3-22.3c-.9-.3-1.8-.5-2.7-.5-4.4 0-8 3.6-8 8V763c0 3.3 2.1 6.3 5.3 7.5L501 910.1c7.1 2.6 14.8 2.6 21.9 0l383.8-139.5c3.2-1.2 5.3-4.2 5.3-7.5v-59.6c0-1-.2-1.9-.5-2.8zM512 837.5l-256-93.1V184h512v560.4l-256 93.1zM660.6 312h-54.5c-3 0-5.8 1.7-7.1 4.4l-84.7 168.8H511l-84.7-168.8a8 8 0 0 0-7.1-4.4h-55.7c-1.3 0-2.6.3-3.8 1-3.9 2.1-5.3 7-3.2 10.8l103.9 191.6h-57c-4.4 0-8 3.6-8 8v27.1c0 4.4 3.6 8 8 8h76v39h-76c-4.4 0-8 3.6-8 8v27.1c0 4.4 3.6 8 8 8h76V704c0 4.4 3.6 8 8 8h49.9c4.4 0 8-3.6 8-8v-63.5h76.3c4.4 0 8-3.6 8-8v-27.1c0-4.4-3.6-8-8-8h-76.3v-39h76.3c4.4 0 8-3.6 8-8v-27.1c0-4.4-3.6-8-8-8H564l103.7-191.6c.6-1.2 1-2.5 1-3.8-.1-4.3-3.7-7.9-8.1-7.9z")),t.PauseCircleOutline = u("pause-circle", o, i(r, "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372zm-88-532h-48c-4.4 0-8 3.6-8 8v304c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V360c0-4.4-3.6-8-8-8zm224 0h-48c-4.4 0-8 3.6-8 8v304c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V360c0-4.4-3.6-8-8-8z")),t.PayCircleOutline = u("pay-circle", o, i(r, "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372zm159.6-585h-59.5c-3 0-5.8 1.7-7.1 4.4l-90.6 180H511l-90.6-180a8 8 0 0 0-7.1-4.4h-60.7c-1.3 0-2.6.3-3.8 1-3.9 2.1-5.3 7-3.2 10.9L457 515.7h-61.4c-4.4 0-8 3.6-8 8v29.9c0 4.4 3.6 8 8 8h81.7V603h-81.7c-4.4 0-8 3.6-8 8v29.9c0 4.4 3.6 8 8 8h81.7V717c0 4.4 3.6 8 8 8h54.3c4.4 0 8-3.6 8-8v-68.1h82c4.4 0 8-3.6 8-8V611c0-4.4-3.6-8-8-8h-82v-41.5h82c4.4 0 8-3.6 8-8v-29.9c0-4.4-3.6-8-8-8h-62l111.1-204.8c.6-1.2 1-2.5 1-3.8-.1-4.4-3.7-8-8.1-8z")),t.NotificationOutline = u("notification", o, i(r, "M880 112c-3.8 0-7.7.7-11.6 2.3L292 345.9H128c-8.8 0-16 7.4-16 16.6v299c0 9.2 7.2 16.6 16 16.6h101.7c-3.7 11.6-5.7 23.9-5.7 36.4 0 65.9 53.8 119.5 120 119.5 55.4 0 102.1-37.6 115.9-88.4l408.6 164.2c3.9 1.5 7.8 2.3 11.6 2.3 16.9 0 32-14.2 32-33.2V145.2C912 126.2 897 112 880 112zM344 762.3c-26.5 0-48-21.4-48-47.8 0-11.2 3.9-21.9 11-30.4l84.9 34.1c-2 24.6-22.7 44.1-47.9 44.1zm496 58.4L318.8 611.3l-12.9-5.2H184V417.9h121.9l12.9-5.2L840 203.3v617.4z")),t.PhoneOutline = u("phone", o, i(r, "M877.1 238.7L770.6 132.3c-13-13-30.4-20.3-48.8-20.3s-35.8 7.2-48.8 20.3L558.3 246.8c-13 13-20.3 30.5-20.3 48.9 0 18.5 7.2 35.8 20.3 48.9l89.6 89.7a405.46 405.46 0 0 1-86.4 127.3c-36.7 36.9-79.6 66-127.2 86.6l-89.6-89.7c-13-13-30.4-20.3-48.8-20.3a68.2 68.2 0 0 0-48.8 20.3L132.3 673c-13 13-20.3 30.5-20.3 48.9 0 18.5 7.2 35.8 20.3 48.9l106.4 106.4c22.2 22.2 52.8 34.9 84.2 34.9 6.5 0 12.8-.5 19.2-1.6 132.4-21.8 263.8-92.3 369.9-198.3C818 606 888.4 474.6 910.4 342.1c6.3-37.6-6.3-76.3-33.3-103.4zm-37.6 91.5c-19.5 117.9-82.9 235.5-178.4 331s-213 158.9-330.9 178.4c-14.8 2.5-30-2.5-40.8-13.2L184.9 721.9 295.7 611l119.8 120 .9.9 21.6-8a481.29 481.29 0 0 0 285.7-285.8l8-21.6-120.8-120.7 110.8-110.9 104.5 104.5c10.8 10.8 15.8 26 13.3 40.8z")),t.PictureOutline = u("picture", o, i(r, "M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 632H136v-39.9l138.5-164.3 150.1 178L658.1 489 888 761.6V792zm0-129.8L664.2 396.8c-3.2-3.8-9-3.8-12.2 0L424.6 666.4l-144-170.7c-3.2-3.8-9-3.8-12.2 0L136 652.7V232h752v430.2zM304 456a88 88 0 1 0 0-176 88 88 0 0 0 0 176zm0-116c15.5 0 28 12.5 28 28s-12.5 28-28 28-28-12.5-28-28 12.5-28 28-28z")),t.PieChartOutline = u("pie-chart", o, i(r, "M864 518H506V160c0-4.4-3.6-8-8-8h-26a398.46 398.46 0 0 0-282.8 117.1 398.19 398.19 0 0 0-85.7 127.1A397.61 397.61 0 0 0 72 552a398.46 398.46 0 0 0 117.1 282.8c36.7 36.7 79.5 65.6 127.1 85.7A397.61 397.61 0 0 0 472 952a398.46 398.46 0 0 0 282.8-117.1c36.7-36.7 65.6-79.5 85.7-127.1A397.61 397.61 0 0 0 872 552v-26c0-4.4-3.6-8-8-8zM705.7 787.8A331.59 331.59 0 0 1 470.4 884c-88.1-.4-170.9-34.9-233.2-97.2C174.5 724.1 140 640.7 140 552c0-88.7 34.5-172.1 97.2-234.8 54.6-54.6 124.9-87.9 200.8-95.5V586h364.3c-7.7 76.3-41.3 147-96.6 201.8zM952 462.4l-2.6-28.2c-8.5-92.1-49.4-179-115.2-244.6A399.4 399.4 0 0 0 589 74.6L560.7 72c-4.7-.4-8.7 3.2-8.7 7.9V464c0 4.4 3.6 8 8 8l384-1c4.7 0 8.4-4 8-8.6zm-332.2-58.2V147.6a332.24 332.24 0 0 1 166.4 89.8c45.7 45.6 77 103.6 90 166.1l-256.4.7z")),t.PlaySquareOutline = u("play-square", o, i(r, "M442.3 677.6l199.4-156.7a11.3 11.3 0 0 0 0-17.7L442.3 346.4c-7.4-5.8-18.3-.6-18.3 8.8v313.5c0 9.4 10.9 14.7 18.3 8.9z", "M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z")),t.PlayCircleOutline = u("play-circle", o, i(r, "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z", "M719.4 499.1l-296.1-215A15.9 15.9 0 0 0 398 297v430c0 13.1 14.8 20.5 25.3 12.9l296.1-215a15.9 15.9 0 0 0 0-25.8zm-257.6 134V390.9L628.5 512 461.8 633.1z")),t.PlusCircleOutline = u("plus-circle", o, i(r, "M696 480H544V328c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v152H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h152v152c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V544h152c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z", "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z")),t.PrinterOutline = u("printer", o, i(r, "M820 436h-40c-4.4 0-8 3.6-8 8v40c0 4.4 3.6 8 8 8h40c4.4 0 8-3.6 8-8v-40c0-4.4-3.6-8-8-8zm32-104H732V120c0-4.4-3.6-8-8-8H300c-4.4 0-8 3.6-8 8v212H172c-44.2 0-80 35.8-80 80v328c0 17.7 14.3 32 32 32h168v132c0 4.4 3.6 8 8 8h424c4.4 0 8-3.6 8-8V772h168c17.7 0 32-14.3 32-32V412c0-44.2-35.8-80-80-80zM360 180h304v152H360V180zm304 664H360V568h304v276zm200-140H732V500H292v204H160V412c0-6.6 5.4-12 12-12h680c6.6 0 12 5.4 12 12v292z")),t.PlusSquareOutline = u("plus-square", o, i(r, "M328 544h152v152c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V544h152c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H544V328c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v152H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8z", "M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z")),t.ProfileOutline = u("profile", o, i(r, "M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656zM492 400h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H492c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8zm0 144h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H492c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8zm0 144h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H492c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8zM340 368a40 40 0 1 0 80 0 40 40 0 1 0-80 0zm0 144a40 40 0 1 0 80 0 40 40 0 1 0-80 0zm0 144a40 40 0 1 0 80 0 40 40 0 1 0-80 0z")),t.ProjectOutline = u("project", o, i(r, "M280 752h80c4.4 0 8-3.6 8-8V280c0-4.4-3.6-8-8-8h-80c-4.4 0-8 3.6-8 8v464c0 4.4 3.6 8 8 8zm192-280h80c4.4 0 8-3.6 8-8V280c0-4.4-3.6-8-8-8h-80c-4.4 0-8 3.6-8 8v184c0 4.4 3.6 8 8 8zm192 72h80c4.4 0 8-3.6 8-8V280c0-4.4-3.6-8-8-8h-80c-4.4 0-8 3.6-8 8v256c0 4.4 3.6 8 8 8zm216-432H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z")),t.PushpinOutline = u("pushpin", o, i(r, "M878.3 392.1L631.9 145.7c-6.5-6.5-15-9.7-23.5-9.7s-17 3.2-23.5 9.7L423.8 306.9c-12.2-1.4-24.5-2-36.8-2-73.2 0-146.4 24.1-206.5 72.3a33.23 33.23 0 0 0-2.7 49.4l181.7 181.7-215.4 215.2a15.8 15.8 0 0 0-4.6 9.8l-3.4 37.2c-.9 9.4 6.6 17.4 15.9 17.4.5 0 1 0 1.5-.1l37.2-3.4c3.7-.3 7.2-2 9.8-4.6l215.4-215.4 181.7 181.7c6.5 6.5 15 9.7 23.5 9.7 9.7 0 19.3-4.2 25.9-12.4 56.3-70.3 79.7-158.3 70.2-243.4l161.1-161.1c12.9-12.8 12.9-33.8 0-46.8zM666.2 549.3l-24.5 24.5 3.8 34.4a259.92 259.92 0 0 1-30.4 153.9L262 408.8c12.9-7.1 26.3-13.1 40.3-17.9 27.2-9.4 55.7-14.1 84.7-14.1 9.6 0 19.3.5 28.9 1.6l34.4 3.8 24.5-24.5L608.5 224 800 415.5 666.2 549.3z")),t.PropertySafetyOutline = u("property-safety", o, i(r, "M866.9 169.9L527.1 54.1C523 52.7 517.5 52 512 52s-11 .7-15.1 2.1L157.1 169.9c-8.3 2.8-15.1 12.4-15.1 21.2v482.4c0 8.8 5.7 20.4 12.6 25.9L499.3 968c3.5 2.7 8 4.1 12.6 4.1s9.2-1.4 12.6-4.1l344.7-268.6c6.9-5.4 12.6-17 12.6-25.9V191.1c.2-8.8-6.6-18.3-14.9-21.2zM810 654.3L512 886.5 214 654.3V226.7l298-101.6 298 101.6v427.6zM430.5 318h-46c-1.7 0-3.3.4-4.8 1.2a10.1 10.1 0 0 0-4 13.6l88 161.1h-45.2c-5.5 0-10 4.5-10 10v21.3c0 5.5 4.5 10 10 10h63.1v29.7h-63.1c-5.5 0-10 4.5-10 10v21.3c0 5.5 4.5 10 10 10h63.1V658c0 5.5 4.5 10 10 10h41.3c5.5 0 10-4.5 10-10v-51.8h63.4c5.5 0 10-4.5 10-10v-21.3c0-5.5-4.5-10-10-10h-63.4v-29.7h63.4c5.5 0 10-4.5 10-10v-21.3c0-5.5-4.5-10-10-10h-45.7l87.7-161.1a10.05 10.05 0 0 0-8.8-14.8h-45c-3.8 0-7.2 2.1-8.9 5.5l-73.2 144.3-72.9-144.3c-1.7-3.4-5.2-5.5-9-5.5z")),t.QuestionCircleOutline = u("question-circle", o, i(r, "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z", "M623.6 316.7C593.6 290.4 554 276 512 276s-81.6 14.5-111.6 40.7C369.2 344 352 380.7 352 420v7.6c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V420c0-44.1 43.1-80 96-80s96 35.9 96 80c0 31.1-22 59.6-56.1 72.7-21.2 8.1-39.2 22.3-52.1 40.9-13.1 19-19.9 41.8-19.9 64.9V620c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-22.7a48.3 48.3 0 0 1 30.9-44.8c59-22.7 97.1-74.7 97.1-132.5.1-39.3-17.1-76-48.3-103.3zM472 732a40 40 0 1 0 80 0 40 40 0 1 0-80 0z")),t.ReadOutline = u("read", o, i(r, "M928 161H699.2c-49.1 0-97.1 14.1-138.4 40.7L512 233l-48.8-31.3A255.2 255.2 0 0 0 324.8 161H96c-17.7 0-32 14.3-32 32v568c0 17.7 14.3 32 32 32h228.8c49.1 0 97.1 14.1 138.4 40.7l44.4 28.6c1.3.8 2.8 1.3 4.3 1.3s3-.4 4.3-1.3l44.4-28.6C602 807.1 650.1 793 699.2 793H928c17.7 0 32-14.3 32-32V193c0-17.7-14.3-32-32-32zM324.8 721H136V233h188.8c35.4 0 69.8 10.1 99.5 29.2l48.8 31.3 6.9 4.5v462c-47.6-25.6-100.8-39-155.2-39zm563.2 0H699.2c-54.4 0-107.6 13.4-155.2 39V298l6.9-4.5 48.8-31.3c29.7-19.1 64.1-29.2 99.5-29.2H888v488zM396.9 361H211.1c-3.9 0-7.1 3.4-7.1 7.5v45c0 4.1 3.2 7.5 7.1 7.5h185.7c3.9 0 7.1-3.4 7.1-7.5v-45c.1-4.1-3.1-7.5-7-7.5zm223.1 7.5v45c0 4.1 3.2 7.5 7.1 7.5h185.7c3.9 0 7.1-3.4 7.1-7.5v-45c0-4.1-3.2-7.5-7.1-7.5H627.1c-3.9 0-7.1 3.4-7.1 7.5zM396.9 501H211.1c-3.9 0-7.1 3.4-7.1 7.5v45c0 4.1 3.2 7.5 7.1 7.5h185.7c3.9 0 7.1-3.4 7.1-7.5v-45c.1-4.1-3.1-7.5-7-7.5zm416 0H627.1c-3.9 0-7.1 3.4-7.1 7.5v45c0 4.1 3.2 7.5 7.1 7.5h185.7c3.9 0 7.1-3.4 7.1-7.5v-45c.1-4.1-3.1-7.5-7-7.5z")),t.ReconciliationOutline = u("reconciliation", o, i(r, "M676 565c-50.8 0-92 41.2-92 92s41.2 92 92 92 92-41.2 92-92-41.2-92-92-92zm0 126c-18.8 0-34-15.2-34-34s15.2-34 34-34 34 15.2 34 34-15.2 34-34 34zm204-523H668c0-30.9-25.1-56-56-56h-80c-30.9 0-56 25.1-56 56H264c-17.7 0-32 14.3-32 32v200h-88c-17.7 0-32 14.3-32 32v448c0 17.7 14.3 32 32 32h336c17.7 0 32-14.3 32-32v-16h368c17.7 0 32-14.3 32-32V200c0-17.7-14.3-32-32-32zm-412 64h72v-56h64v56h72v48H468v-48zm-20 616H176V616h272v232zm0-296H176v-88h272v88zm392 240H512V432c0-17.7-14.3-32-32-32H304V240h100v104h336V240h100v552zM704 408v96c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-96c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8zM592 512h48c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8z")),t.RedEnvelopeOutline = u("red-envelope", o, i(r, "M440.6 462.6a8.38 8.38 0 0 0-7.5-4.6h-48.8c-1.3 0-2.6.4-3.9 1a8.4 8.4 0 0 0-3.4 11.4l87.4 161.1H419c-4.6 0-8.4 3.8-8.4 8.4V665c0 4.6 3.8 8.4 8.4 8.4h63V702h-63c-4.6 0-8.4 3.8-8.4 8.4v25.1c0 4.6 3.8 8.4 8.4 8.4h63v49.9c0 4.6 3.8 8.4 8.4 8.4h43.7c4.6 0 8.4-3.8 8.4-8.4v-49.9h63.3c4.7 0 8.4-3.8 8.2-8.5v-25c0-4.6-3.8-8.4-8.4-8.4h-63.3v-28.6h63.3c4.6 0 8.4-3.8 8.4-8.4v-25.1c0-4.6-3.8-8.4-8.4-8.4h-45.9l87.2-161a8.45 8.45 0 0 0-7.4-12.4h-47.8c-3.1 0-6 1.8-7.5 4.6l-71.9 141.9-71.7-142zM832 64H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32zm-40 824H232V193.1l260.3 204.1c11.6 9.1 27.9 9.1 39.5 0L792 193.1V888zm0-751.3h-31.7L512 331.3 263.7 136.7H232v-.7h560v.7z")),t.RestOutline = u("rest", o, i(r, "M508 704c79.5 0 144-64.5 144-144s-64.5-144-144-144-144 64.5-144 144 64.5 144 144 144zm0-224c44.2 0 80 35.8 80 80s-35.8 80-80 80-80-35.8-80-80 35.8-80 80-80z", "M832 256h-28.1l-35.7-120.9c-4-13.7-16.5-23.1-30.7-23.1h-451c-14.3 0-26.8 9.4-30.7 23.1L220.1 256H192c-17.7 0-32 14.3-32 32v28c0 4.4 3.6 8 8 8h45.8l47.7 558.7a32 32 0 0 0 31.9 29.3h429.2a32 32 0 0 0 31.9-29.3L802.2 324H856c4.4 0 8-3.6 8-8v-28c0-17.7-14.3-32-32-32zm-518.6-76h397.2l22.4 76H291l22.4-76zm376.2 664H326.4L282 324h451.9l-44.3 520z")),t.RightCircleOutline = u("right-circle", o, i(r, "M666.7 505.5l-246-178A8 8 0 0 0 408 334v46.9c0 10.2 4.9 19.9 13.2 25.9L566.6 512 421.2 617.2c-8.3 6-13.2 15.6-13.2 25.9V690c0 6.5 7.4 10.3 12.7 6.5l246-178c4.4-3.2 4.4-9.8 0-13z", "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z")),t.RocketOutline = u("rocket", o, i(r, "M864 736c0-111.6-65.4-208-160-252.9V317.3c0-15.1-5.3-29.7-15.1-41.2L536.5 95.4C530.1 87.8 521 84 512 84s-18.1 3.8-24.5 11.4L335.1 276.1a63.97 63.97 0 0 0-15.1 41.2v165.8C225.4 528 160 624.4 160 736h156.5c-2.3 7.2-3.5 15-3.5 23.8 0 22.1 7.6 43.7 21.4 60.8a97.2 97.2 0 0 0 43.1 30.6c23.1 54 75.6 88.8 134.5 88.8 29.1 0 57.3-8.6 81.4-24.8 23.6-15.8 41.9-37.9 53-64a97 97 0 0 0 43.1-30.5 97.52 97.52 0 0 0 21.4-60.8c0-8.4-1.1-16.4-3.1-23.8H864zM762.3 621.4c9.4 14.6 17 30.3 22.5 46.6H700V558.7a211.6 211.6 0 0 1 62.3 62.7zM388 483.1V318.8l124-147 124 147V668H388V483.1zM239.2 668c5.5-16.3 13.1-32 22.5-46.6 16.3-25.2 37.5-46.5 62.3-62.7V668h-84.8zm388.9 116.2c-5.2 3-11.2 4.2-17.1 3.4l-19.5-2.4-2.8 19.4c-5.4 37.9-38.4 66.5-76.7 66.5-38.3 0-71.3-28.6-76.7-66.5l-2.8-19.5-19.5 2.5a27.7 27.7 0 0 1-17.1-3.5c-8.7-5-14.1-14.3-14.1-24.4 0-10.6 5.9-19.4 14.6-23.8h231.3c8.8 4.5 14.6 13.3 14.6 23.8-.1 10.2-5.5 19.6-14.2 24.5zM464 400a48 48 0 1 0 96 0 48 48 0 1 0-96 0z")),t.RightSquareOutline = u("right-square", o, i(r, "M412.7 696.5l246-178c4.4-3.2 4.4-9.7 0-12.9l-246-178c-5.3-3.8-12.7 0-12.7 6.5V381c0 10.2 4.9 19.9 13.2 25.9L558.6 512 413.2 617.2c-8.3 6-13.2 15.6-13.2 25.9V690c0 6.5 7.4 10.3 12.7 6.5z", "M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z")),t.SafetyCertificateOutline = u("safety-certificate", o, i(r, "M866.9 169.9L527.1 54.1C523 52.7 517.5 52 512 52s-11 .7-15.1 2.1L157.1 169.9c-8.3 2.8-15.1 12.4-15.1 21.2v482.4c0 8.8 5.7 20.4 12.6 25.9L499.3 968c3.5 2.7 8 4.1 12.6 4.1s9.2-1.4 12.6-4.1l344.7-268.6c6.9-5.4 12.6-17 12.6-25.9V191.1c.2-8.8-6.6-18.3-14.9-21.2zM810 654.3L512 886.5 214 654.3V226.7l298-101.6 298 101.6v427.6zm-405.8-201c-3-4.1-7.8-6.6-13-6.6H336c-6.5 0-10.3 7.4-6.5 12.7l126.4 174a16.1 16.1 0 0 0 26 0l212.6-292.7c3.8-5.3 0-12.7-6.5-12.7h-55.2c-5.1 0-10 2.5-13 6.6L468.9 542.4l-64.7-89.1z")),t.ScheduleOutline = u("schedule", o, i(r, "M928 224H768v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56H548v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56H328v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56H96c-17.7 0-32 14.3-32 32v576c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V256c0-17.7-14.3-32-32-32zm-40 568H136V296h120v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56h148v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56h148v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56h120v496zM416 496H232c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zm0 136H232c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zm308.2-177.4L620.6 598.3l-52.8-73.1c-3-4.2-7.8-6.6-12.9-6.6H500c-6.5 0-10.3 7.4-6.5 12.7l114.1 158.2a15.9 15.9 0 0 0 25.8 0l165-228.7c3.8-5.3 0-12.7-6.5-12.7H737c-5-.1-9.8 2.4-12.8 6.5z")),t.SaveOutline = u("save", o, i(r, "M893.3 293.3L730.7 130.7c-7.5-7.5-16.7-13-26.7-16V112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V338.5c0-17-6.7-33.2-18.7-45.2zM384 184h256v104H384V184zm456 656H184V184h136v136c0 17.7 14.3 32 32 32h320c17.7 0 32-14.3 32-32V205.8l136 136V840zM512 442c-79.5 0-144 64.5-144 144s64.5 144 144 144 144-64.5 144-144-64.5-144-144-144zm0 224c-44.2 0-80-35.8-80-80s35.8-80 80-80 80 35.8 80 80-35.8 80-80 80z")),t.SecurityScanOutline = u("security-scan", o, i(r, "M866.9 169.9L527.1 54.1C523 52.7 517.5 52 512 52s-11 .7-15.1 2.1L157.1 169.9c-8.3 2.8-15.1 12.4-15.1 21.2v482.4c0 8.8 5.7 20.4 12.6 25.9L499.3 968c3.5 2.7 8 4.1 12.6 4.1s9.2-1.4 12.6-4.1l344.7-268.6c6.9-5.4 12.6-17 12.6-25.9V191.1c.2-8.8-6.6-18.3-14.9-21.2zM810 654.3L512 886.5 214 654.3V226.7l298-101.6 298 101.6v427.6zM402.9 528.8l-77.5 77.5a8.03 8.03 0 0 0 0 11.3l34 34c3.1 3.1 8.2 3.1 11.3 0l77.5-77.5c55.7 35.1 130.1 28.4 178.6-20.1 56.3-56.3 56.3-147.5 0-203.8-56.3-56.3-147.5-56.3-203.8 0-48.5 48.5-55.2 123-20.1 178.6zm65.4-133.3c31.3-31.3 82-31.3 113.2 0 31.3 31.3 31.3 82 0 113.2-31.3 31.3-82 31.3-113.2 0s-31.3-81.9 0-113.2z")),t.SettingOutline = u("setting", o, i(r, "M924.8 625.7l-65.5-56c3.1-19 4.7-38.4 4.7-57.8s-1.6-38.8-4.7-57.8l65.5-56a32.03 32.03 0 0 0 9.3-35.2l-.9-2.6a443.74 443.74 0 0 0-79.7-137.9l-1.8-2.1a32.12 32.12 0 0 0-35.1-9.5l-81.3 28.9c-30-24.6-63.5-44-99.7-57.6l-15.7-85a32.05 32.05 0 0 0-25.8-25.7l-2.7-.5c-52.1-9.4-106.9-9.4-159 0l-2.7.5a32.05 32.05 0 0 0-25.8 25.7l-15.8 85.4a351.86 351.86 0 0 0-99 57.4l-81.9-29.1a32 32 0 0 0-35.1 9.5l-1.8 2.1a446.02 446.02 0 0 0-79.7 137.9l-.9 2.6c-4.5 12.5-.8 26.5 9.3 35.2l66.3 56.6c-3.1 18.8-4.6 38-4.6 57.1 0 19.2 1.5 38.4 4.6 57.1L99 625.5a32.03 32.03 0 0 0-9.3 35.2l.9 2.6c18.1 50.4 44.9 96.9 79.7 137.9l1.8 2.1a32.12 32.12 0 0 0 35.1 9.5l81.9-29.1c29.8 24.5 63.1 43.9 99 57.4l15.8 85.4a32.05 32.05 0 0 0 25.8 25.7l2.7.5a449.4 449.4 0 0 0 159 0l2.7-.5a32.05 32.05 0 0 0 25.8-25.7l15.7-85a350 350 0 0 0 99.7-57.6l81.3 28.9a32 32 0 0 0 35.1-9.5l1.8-2.1c34.8-41.1 61.6-87.5 79.7-137.9l.9-2.6c4.5-12.3.8-26.3-9.3-35zM788.3 465.9c2.5 15.1 3.8 30.6 3.8 46.1s-1.3 31-3.8 46.1l-6.6 40.1 74.7 63.9a370.03 370.03 0 0 1-42.6 73.6L721 702.8l-31.4 25.8c-23.9 19.6-50.5 35-79.3 45.8l-38.1 14.3-17.9 97a377.5 377.5 0 0 1-85 0l-17.9-97.2-37.8-14.5c-28.5-10.8-55-26.2-78.7-45.7l-31.4-25.9-93.4 33.2c-17-22.9-31.2-47.6-42.6-73.6l75.5-64.5-6.5-40c-2.4-14.9-3.7-30.3-3.7-45.5 0-15.3 1.2-30.6 3.7-45.5l6.5-40-75.5-64.5c11.3-26.1 25.6-50.7 42.6-73.6l93.4 33.2 31.4-25.9c23.7-19.5 50.2-34.9 78.7-45.7l37.9-14.3 17.9-97.2c28.1-3.2 56.8-3.2 85 0l17.9 97 38.1 14.3c28.7 10.8 55.4 26.2 79.3 45.8l31.4 25.8 92.8-32.9c17 22.9 31.2 47.6 42.6 73.6L781.8 426l6.5 39.9zM512 326c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm79.2 255.2A111.6 111.6 0 0 1 512 614c-29.9 0-58-11.7-79.2-32.8A111.6 111.6 0 0 1 400 502c0-29.9 11.7-58 32.8-79.2C454 401.6 482.1 390 512 390c29.9 0 58 11.6 79.2 32.8A111.6 111.6 0 0 1 624 502c0 29.9-11.7 58-32.8 79.2z")),t.ShoppingOutline = u("shopping", o, i(r, "M832 312H696v-16c0-101.6-82.4-184-184-184s-184 82.4-184 184v16H192c-17.7 0-32 14.3-32 32v536c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V344c0-17.7-14.3-32-32-32zm-432-16c0-61.9 50.1-112 112-112s112 50.1 112 112v16H400v-16zm392 544H232V384h96v88c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-88h224v88c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-88h96v456z")),t.SkinOutline = u("skin", o, i(r, "M870 126H663.8c-17.4 0-32.9 11.9-37 29.3C614.3 208.1 567 246 512 246s-102.3-37.9-114.8-90.7a37.93 37.93 0 0 0-37-29.3H154a44 44 0 0 0-44 44v252a44 44 0 0 0 44 44h75v388a44 44 0 0 0 44 44h478a44 44 0 0 0 44-44V466h75a44 44 0 0 0 44-44V170a44 44 0 0 0-44-44zm-28 268H723v432H301V394H182V198h153.3c28.2 71.2 97.5 120 176.7 120s148.5-48.8 176.7-120H842v196z")),t.SkypeOutline = u("skype", o, i(r, "M883.7 578.6c4.1-22.5 6.3-45.5 6.3-68.5 0-51-10-100.5-29.7-147-19-45-46.3-85.4-81-120.1a375.79 375.79 0 0 0-120.1-80.9c-46.6-19.7-96-29.7-147-29.7-24 0-48.1 2.3-71.5 6.8A225.1 225.1 0 0 0 335.6 113c-59.7 0-115.9 23.3-158.1 65.5A222.25 222.25 0 0 0 112 336.6c0 38 9.8 75.4 28.1 108.4-3.7 21.4-5.7 43.3-5.7 65.1 0 51 10 100.5 29.7 147 19 45 46.2 85.4 80.9 120.1 34.7 34.7 75.1 61.9 120.1 80.9 46.6 19.7 96 29.7 147 29.7 22.2 0 44.4-2 66.2-5.9 33.5 18.9 71.3 29 110 29 59.7 0 115.9-23.2 158.1-65.5 42.3-42.2 65.5-98.4 65.5-158.1.1-38-9.7-75.5-28.2-108.7zm-88.1 216C766.9 823.4 729 839 688.4 839c-26.1 0-51.8-6.8-74.6-19.7l-22.5-12.7-25.5 4.5c-17.8 3.2-35.8 4.8-53.6 4.8-41.4 0-81.3-8.1-119.1-24.1-36.3-15.3-69-37.3-97.2-65.5a304.29 304.29 0 0 1-65.5-97.1c-16-37.7-24-77.6-24-119 0-17.4 1.6-35.2 4.6-52.8l4.4-25.1L203 410a151.02 151.02 0 0 1-19.1-73.4c0-40.6 15.7-78.5 44.4-107.2C257.1 200.7 295 185 335.6 185a153 153 0 0 1 71.4 17.9l22.4 11.8 24.8-4.8c18.9-3.6 38.4-5.5 58-5.5 41.4 0 81.3 8.1 119 24 36.5 15.4 69.1 37.4 97.2 65.5 28.2 28.1 50.2 60.8 65.6 97.2 16 37.7 24 77.6 24 119 0 18.4-1.7 37-5.1 55.5l-4.7 25.5 12.6 22.6c12.6 22.5 19.2 48 19.2 73.7 0 40.7-15.7 78.5-44.4 107.2zM583.4 466.2L495 446.6c-33.6-7.7-72.3-17.8-72.3-49.5s27.1-53.9 76.1-53.9c98.7 0 89.7 67.8 138.7 67.8 25.8 0 48.4-15.2 48.4-41.2 0-60.8-97.4-106.5-180-106.5-89.7 0-185.2 38.1-185.2 139.5 0 48.8 17.4 100.8 113.6 124.9l119.4 29.8c36.1 8.9 45.2 29.2 45.2 47.6 0 30.5-30.3 60.3-85.2 60.3-107.2 0-92.3-82.5-149.7-82.5-25.8 0-44.5 17.8-44.5 43.1 0 49.4 60 115.4 194.2 115.4 127.7 0 191-61.5 191-144 0-53.1-24.5-109.6-121.3-131.2z")),t.SlackSquareOutline = u("slack-square", o, i(r, "M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM529 311.4c0-27.8 22.5-50.4 50.3-50.4 27.8 0 50.3 22.6 50.3 50.4v134.4c0 27.8-22.5 50.4-50.3 50.4-27.8 0-50.3-22.6-50.3-50.4V311.4zM361.5 580.2c0 27.8-22.5 50.4-50.3 50.4a50.35 50.35 0 0 1-50.3-50.4c0-27.8 22.5-50.4 50.3-50.4h50.3v50.4zm134 134.4c0 27.8-22.5 50.4-50.3 50.4-27.8 0-50.3-22.6-50.3-50.4V580.2c0-27.8 22.5-50.4 50.3-50.4a50.35 50.35 0 0 1 50.3 50.4v134.4zm-50.2-218.4h-134c-27.8 0-50.3-22.6-50.3-50.4 0-27.8 22.5-50.4 50.3-50.4h134c27.8 0 50.3 22.6 50.3 50.4-.1 27.9-22.6 50.4-50.3 50.4zm0-134.4c-13.3 0-26.1-5.3-35.6-14.8S395 324.8 395 311.4c0-27.8 22.5-50.4 50.3-50.4 27.8 0 50.3 22.6 50.3 50.4v50.4h-50.3zm134 403.2c-27.8 0-50.3-22.6-50.3-50.4v-50.4h50.3c27.8 0 50.3 22.6 50.3 50.4 0 27.8-22.5 50.4-50.3 50.4zm134-134.4h-134a50.35 50.35 0 0 1-50.3-50.4c0-27.8 22.5-50.4 50.3-50.4h134c27.8 0 50.3 22.6 50.3 50.4 0 27.8-22.5 50.4-50.3 50.4zm0-134.4H663v-50.4c0-27.8 22.5-50.4 50.3-50.4s50.3 22.6 50.3 50.4c0 27.8-22.5 50.4-50.3 50.4z")),t.SlidersOutline = u("sliders", o, i(r, "M320 224h-66v-56c0-4.4-3.6-8-8-8h-52c-4.4 0-8 3.6-8 8v56h-66c-4.4 0-8 3.6-8 8v560c0 4.4 3.6 8 8 8h66v56c0 4.4 3.6 8 8 8h52c4.4 0 8-3.6 8-8v-56h66c4.4 0 8-3.6 8-8V232c0-4.4-3.6-8-8-8zm-60 508h-80V292h80v440zm644-436h-66v-96c0-4.4-3.6-8-8-8h-52c-4.4 0-8 3.6-8 8v96h-66c-4.4 0-8 3.6-8 8v416c0 4.4 3.6 8 8 8h66v96c0 4.4 3.6 8 8 8h52c4.4 0 8-3.6 8-8v-96h66c4.4 0 8-3.6 8-8V304c0-4.4-3.6-8-8-8zm-60 364h-80V364h80v296zM612 404h-66V232c0-4.4-3.6-8-8-8h-52c-4.4 0-8 3.6-8 8v172h-66c-4.4 0-8 3.6-8 8v200c0 4.4 3.6 8 8 8h66v172c0 4.4 3.6 8 8 8h52c4.4 0 8-3.6 8-8V620h66c4.4 0 8-3.6 8-8V412c0-4.4-3.6-8-8-8zm-60 145a3 3 0 0 1-3 3h-74a3 3 0 0 1-3-3v-74a3 3 0 0 1 3-3h74a3 3 0 0 1 3 3v74z")),t.SmileOutline = u("smile", o, i(r, "M288 421a48 48 0 1 0 96 0 48 48 0 1 0-96 0zm352 0a48 48 0 1 0 96 0 48 48 0 1 0-96 0zM512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm263 711c-34.2 34.2-74 61-118.3 79.8C611 874.2 562.3 884 512 884c-50.3 0-99-9.8-144.8-29.2A370.4 370.4 0 0 1 248.9 775c-34.2-34.2-61-74-79.8-118.3C149.8 611 140 562.3 140 512s9.8-99 29.2-144.8A370.4 370.4 0 0 1 249 248.9c34.2-34.2 74-61 118.3-79.8C413 149.8 461.7 140 512 140c50.3 0 99 9.8 144.8 29.2A370.4 370.4 0 0 1 775.1 249c34.2 34.2 61 74 79.8 118.3C874.2 413 884 461.7 884 512s-9.8 99-29.2 144.8A368.89 368.89 0 0 1 775 775zM664 533h-48.1c-4.2 0-7.8 3.2-8.1 7.4C604 589.9 562.5 629 512 629s-92.1-39.1-95.8-88.6c-.3-4.2-3.9-7.4-8.1-7.4H360a8 8 0 0 0-8 8.4c4.4 84.3 74.5 151.6 160 151.6s155.6-67.3 160-151.6a8 8 0 0 0-8-8.4z")),t.SnippetsOutline = u("snippets", o, i(r, "M832 112H724V72c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v40H500V72c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v40H320c-17.7 0-32 14.3-32 32v120h-96c-17.7 0-32 14.3-32 32v632c0 17.7 14.3 32 32 32h512c17.7 0 32-14.3 32-32v-96h96c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM664 888H232V336h218v174c0 22.1 17.9 40 40 40h174v338zm0-402H514V336h.2L664 485.8v.2zm128 274h-56V456L544 264H360v-80h68v32c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-32h152v32c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-32h68v576z")),t.SoundOutline = u("sound", o, i(r, "M625.9 115c-5.9 0-11.9 1.6-17.4 5.3L254 352H90c-8.8 0-16 7.2-16 16v288c0 8.8 7.2 16 16 16h164l354.5 231.7c5.5 3.6 11.6 5.3 17.4 5.3 16.7 0 32.1-13.3 32.1-32.1V147.1c0-18.8-15.4-32.1-32.1-32.1zM586 803L293.4 611.7l-18-11.7H146V424h129.4l17.9-11.7L586 221v582zm348-327H806c-8.8 0-16 7.2-16 16v40c0 8.8 7.2 16 16 16h128c8.8 0 16-7.2 16-16v-40c0-8.8-7.2-16-16-16zm-41.9 261.8l-110.3-63.7a15.9 15.9 0 0 0-21.7 5.9l-19.9 34.5c-4.4 7.6-1.8 17.4 5.8 21.8L856.3 800a15.9 15.9 0 0 0 21.7-5.9l19.9-34.5c4.4-7.6 1.7-17.4-5.8-21.8zM760 344a15.9 15.9 0 0 0 21.7 5.9L892 286.2c7.6-4.4 10.2-14.2 5.8-21.8L878 230a15.9 15.9 0 0 0-21.7-5.9L746 287.8a15.99 15.99 0 0 0-5.8 21.8L760 344z")),t.StarOutline = u("star", o, i(r, "M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3zM664.8 561.6l36.1 210.3L512 672.7 323.1 772l36.1-210.3-152.8-149L417.6 382 512 190.7 606.4 382l211.2 30.7-152.8 148.9z")),t.StepBackwardOutline = u("step-backward", o, i(n, "M347.6 528.95l383.2 301.02c14.25 11.2 35.2 1.1 35.2-16.95V210.97c0-18.05-20.95-28.14-35.2-16.94L347.6 495.05a21.53 21.53 0 0 0 0 33.9M330 864h-64a8 8 0 0 1-8-8V168a8 8 0 0 1 8-8h64a8 8 0 0 1 8 8v688a8 8 0 0 1-8 8")),t.StepForwardOutline = u("step-forward", o, i(n, "M676.4 528.95L293.2 829.97c-14.25 11.2-35.2 1.1-35.2-16.95V210.97c0-18.05 20.95-28.14 35.2-16.94l383.2 301.02a21.53 21.53 0 0 1 0 33.9M694 864h64a8 8 0 0 0 8-8V168a8 8 0 0 0-8-8h-64a8 8 0 0 0-8 8v688a8 8 0 0 0 8 8")),t.StopOutline = u("stop", o, i(r, "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372 0-89 31.3-170.8 83.5-234.8l523.3 523.3C682.8 852.7 601 884 512 884zm288.5-137.2L277.2 223.5C341.2 171.3 423 140 512 140c205.4 0 372 166.6 372 372 0 89-31.3 170.8-83.5 234.8z")),t.SwitcherOutline = u("switcher", o, i(r, "M752 240H144c-17.7 0-32 14.3-32 32v608c0 17.7 14.3 32 32 32h608c17.7 0 32-14.3 32-32V272c0-17.7-14.3-32-32-32zm-40 600H184V312h528v528zm168-728H264c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h576v576c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V144c0-17.7-14.3-32-32-32zM300 550h296v64H300z")),t.TagOutline = u("tag", o, i(r, "M938 458.8l-29.6-312.6c-1.5-16.2-14.4-29-30.6-30.6L565.2 86h-.4c-3.2 0-5.7 1-7.6 2.9L88.9 557.2a9.96 9.96 0 0 0 0 14.1l363.8 363.8c1.9 1.9 4.4 2.9 7.1 2.9s5.2-1 7.1-2.9l468.3-468.3c2-2.1 3-5 2.8-8zM459.7 834.7L189.3 564.3 589 164.6 836 188l23.4 247-399.7 399.7zM680 256c-48.5 0-88 39.5-88 88s39.5 88 88 88 88-39.5 88-88-39.5-88-88-88zm0 120c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z")),t.TabletOutline = u("tablet", o, i(r, "M800 64H224c-35.3 0-64 28.7-64 64v768c0 35.3 28.7 64 64 64h576c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64zm-8 824H232V136h560v752zM472 784a40 40 0 1 0 80 0 40 40 0 1 0-80 0z")),t.ShopOutline = u("shop", o, i(r, "M882 272.1V144c0-17.7-14.3-32-32-32H174c-17.7 0-32 14.3-32 32v128.1c-16.7 1-30 14.9-30 31.9v131.7a177 177 0 0 0 14.4 70.4c4.3 10.2 9.6 19.8 15.6 28.9v345c0 17.6 14.3 32 32 32h676c17.7 0 32-14.3 32-32V535a175 175 0 0 0 15.6-28.9c9.5-22.3 14.4-46 14.4-70.4V304c0-17-13.3-30.9-30-31.9zM214 184h596v88H214v-88zm362 656.1H448V736h128v104.1zm234 0H640V704c0-17.7-14.3-32-32-32H416c-17.7 0-32 14.3-32 32v136.1H214V597.9c2.9 1.4 5.9 2.8 9 4 22.3 9.4 46 14.1 70.4 14.1s48-4.7 70.4-14.1c13.8-5.8 26.8-13.2 38.7-22.1.2-.1.4-.1.6 0a180.4 180.4 0 0 0 38.7 22.1c22.3 9.4 46 14.1 70.4 14.1 24.4 0 48-4.7 70.4-14.1 13.8-5.8 26.8-13.2 38.7-22.1.2-.1.4-.1.6 0a180.4 180.4 0 0 0 38.7 22.1c22.3 9.4 46 14.1 70.4 14.1 24.4 0 48-4.7 70.4-14.1 3-1.3 6-2.6 9-4v242.2zm30-404.4c0 59.8-49 108.3-109.3 108.3-40.8 0-76.4-22.1-95.2-54.9-2.9-5-8.1-8.1-13.9-8.1h-.6c-5.7 0-11 3.1-13.9 8.1A109.24 109.24 0 0 1 512 544c-40.7 0-76.2-22-95-54.7-3-5.1-8.4-8.3-14.3-8.3s-11.4 3.2-14.3 8.3a109.63 109.63 0 0 1-95.1 54.7C233 544 184 495.5 184 435.7v-91.2c0-.3.2-.5.5-.5h655c.3 0 .5.2.5.5v91.2z")),t.TagsOutline = u("tags", o, i(r, "M483.2 790.3L861.4 412c1.7-1.7 2.5-4 2.3-6.3l-25.5-301.4c-.7-7.8-6.8-13.9-14.6-14.6L522.2 64.3c-2.3-.2-4.7.6-6.3 2.3L137.7 444.8a8.03 8.03 0 0 0 0 11.3l334.2 334.2c3.1 3.2 8.2 3.2 11.3 0zm62.6-651.7l224.6 19 19 224.6L477.5 694 233.9 450.5l311.9-311.9zm60.16 186.23a48 48 0 1 0 67.88-67.89 48 48 0 1 0-67.88 67.89zM889.7 539.8l-39.6-39.5a8.03 8.03 0 0 0-11.3 0l-362 361.3-237.6-237a8.03 8.03 0 0 0-11.3 0l-39.6 39.5a8.03 8.03 0 0 0 0 11.3l243.2 242.8 39.6 39.5c3.1 3.1 8.2 3.1 11.3 0l407.3-406.6c3.1-3.1 3.1-8.2 0-11.3z")),t.TaobaoCircleOutline = u("taobao-circle", o, i(r, "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zM315.7 291.5c27.3 0 49.5 22.1 49.5 49.4s-22.1 49.4-49.5 49.4a49.4 49.4 0 1 1 0-98.8zM366.9 578c-13.6 42.3-10.2 26.7-64.4 144.5l-78.5-49s87.7-79.8 105.6-116.2c19.2-38.4-21.1-58.9-21.1-58.9l-60.2-37.5 32.7-50.2c45.4 33.7 48.7 36.6 79.2 67.2 23.8 23.9 20.7 56.8 6.7 100.1zm427.2 55c-15.3 143.8-202.4 90.3-202.4 90.3l10.2-41.1 43.3 9.3c80 5 72.3-64.9 72.3-64.9V423c.6-77.3-72.6-85.4-204.2-38.3l30.6 8.3c-2.5 9-12.5 23.2-25.2 38.6h176v35.6h-99.1v44.5h98.7v35.7h-98.7V622c14.9-4.8 28.6-11.5 40.5-20.5l-8.7-32.5 46.5-14.4 38.8 94.9-57.3 23.9-10.2-37.8c-25.6 19.5-78.8 48-171.8 45.4-99.2 2.6-73.7-112-73.7-112l2.5-1.3H472c-.5 14.7-6.6 38.7 1.7 51.8 6.8 10.8 24.2 12.6 35.3 13.1 1.3.1 2.6.1 3.9.1v-85.3h-101v-35.7h101v-44.5H487c-22.7 24.1-43.5 44.1-43.5 44.1l-30.6-26.7c21.7-22.9 43.3-59.1 56.8-83.2-10.9 4.4-22 9.2-33.6 14.2-11.2 14.3-24.2 29-38.7 43.5.5.8-50-28.4-50-28.4 52.2-44.4 81.4-139.9 81.4-139.9l72.5 20.4s-5.9 14-18.4 35.6c290.3-82.3 307.4 50.5 307.4 50.5s19.1 91.8 3.8 235.7z")),t.ToolOutline = u("tool", o, i(r, "M876.6 239.5c-.5-.9-1.2-1.8-2-2.5-5-5-13.1-5-18.1 0L684.2 409.3l-67.9-67.9L788.7 169c.8-.8 1.4-1.6 2-2.5 3.6-6.1 1.6-13.9-4.5-17.5-98.2-58-226.8-44.7-311.3 39.7-67 67-89.2 162-66.5 247.4l-293 293c-3 3-2.8 7.9.3 11l169.7 169.7c3.1 3.1 8.1 3.3 11 .3l292.9-292.9c85.5 22.8 180.5.7 247.6-66.4 84.4-84.5 97.7-213.1 39.7-311.3zM786 499.8c-58.1 58.1-145.3 69.3-214.6 33.6l-8.8 8.8-.1-.1-274 274.1-79.2-79.2 230.1-230.1s0 .1.1.1l52.8-52.8c-35.7-69.3-24.5-156.5 33.6-214.6a184.2 184.2 0 0 1 144-53.5L537 318.9a32.05 32.05 0 0 0 0 45.3l124.5 124.5a32.05 32.05 0 0 0 45.3 0l132.8-132.8c3.7 51.8-14.4 104.8-53.6 143.9z")),t.ThunderboltOutline = u("thunderbolt", o, i(r, "M848 359.3H627.7L825.8 109c4.1-5.3.4-13-6.3-13H436c-2.8 0-5.5 1.5-6.9 4L170 547.5c-3.1 5.3.7 12 6.9 12h174.4l-89.4 357.6c-1.9 7.8 7.5 13.3 13.3 7.7L853.5 373c5.2-4.9 1.7-13.7-5.5-13.7zM378.2 732.5l60.3-241H281.1l189.6-327.4h224.6L487 427.4h211L378.2 732.5z")),t.TrophyOutline = u("trophy", o, i(r, "M868 160h-92v-40c0-4.4-3.6-8-8-8H256c-4.4 0-8 3.6-8 8v40h-92a44 44 0 0 0-44 44v148c0 81.7 60 149.6 138.2 162C265.7 630.2 359 721.7 476 734.5v105.2H280c-17.7 0-32 14.3-32 32V904c0 4.4 3.6 8 8 8h512c4.4 0 8-3.6 8-8v-32.3c0-17.7-14.3-32-32-32H548V734.5C665 721.7 758.3 630.2 773.8 514 852 501.6 912 433.7 912 352V204a44 44 0 0 0-44-44zM184 352V232h64v207.6a91.99 91.99 0 0 1-64-87.6zm520 128c0 49.1-19.1 95.4-53.9 130.1-34.8 34.8-81 53.9-130.1 53.9h-16c-49.1 0-95.4-19.1-130.1-53.9-34.8-34.8-53.9-81-53.9-130.1V184h384v296zm136-128c0 41-26.9 75.8-64 87.6V232h64v120z")),t.UnlockOutline = u("unlock", o, i(r, "M832 464H332V240c0-30.9 25.1-56 56-56h248c30.9 0 56 25.1 56 56v68c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-68c0-70.7-57.3-128-128-128H388c-70.7 0-128 57.3-128 128v224h-68c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V496c0-17.7-14.3-32-32-32zm-40 376H232V536h560v304zM484 701v53c0 4.4 3.6 8 8 8h40c4.4 0 8-3.6 8-8v-53a48.01 48.01 0 1 0-56 0z")),t.UpCircleOutline = u("up-circle", o, i(r, "M518.5 360.3a7.95 7.95 0 0 0-12.9 0l-178 246c-3.8 5.3 0 12.7 6.5 12.7H381c10.2 0 19.9-4.9 25.9-13.2L512 460.4l105.2 145.4c6 8.3 15.6 13.2 25.9 13.2H690c6.5 0 10.3-7.4 6.5-12.7l-178-246z", "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z")),t.UpSquareOutline = u("up-square", o, i(r, "M334 624h46.9c10.2 0 19.9-4.9 25.9-13.2L512 465.4l105.2 145.4c6 8.3 15.6 13.2 25.9 13.2H690c6.5 0 10.3-7.4 6.5-12.7l-178-246a7.95 7.95 0 0 0-12.9 0l-178 246A7.96 7.96 0 0 0 334 624z", "M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z")),t.UsbOutline = u("usb", o, i(r, "M760 432V144c0-17.7-14.3-32-32-32H296c-17.7 0-32 14.3-32 32v288c-66.2 0-120 52.1-120 116v356c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V548c0-24.3 21.6-44 48.1-44h495.8c26.5 0 48.1 19.7 48.1 44v356c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V548c0-63.9-53.8-116-120-116zm-424 0V184h352v248H336zm120-184h-48c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zm160 0h-48c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z")),t.VideoCameraOutline = u("video-camera", o, i(r, "M912 302.3L784 376V224c0-35.3-28.7-64-64-64H128c-35.3 0-64 28.7-64 64v576c0 35.3 28.7 64 64 64h592c35.3 0 64-28.7 64-64V648l128 73.7c21.3 12.3 48-3.1 48-27.6V330c0-24.6-26.7-40-48-27.7zM712 792H136V232h576v560zm176-167l-104-59.8V458.9L888 399v226zM208 360h112c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H208c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8z")),t.WalletOutline = u("wallet", o, i(r, "M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 464H528V448h312v128zm0 264H184V184h656v200H496c-17.7 0-32 14.3-32 32v192c0 17.7 14.3 32 32 32h344v200zM580 512a40 40 0 1 0 80 0 40 40 0 1 0-80 0z")),t.WarningOutline = u("warning", o, i(r, "M464 720a48 48 0 1 0 96 0 48 48 0 1 0-96 0zm16-304v184c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V416c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8zm475.7 440l-416-720c-6.2-10.7-16.9-16-27.7-16s-21.6 5.3-27.7 16l-416 720C56 877.4 71.4 904 96 904h832c24.6 0 40-26.6 27.7-48zm-783.5-27.9L512 239.9l339.8 588.2H172.2z")),t.WechatOutline = u("wechat", o, i(r, "M690.1 377.4c5.9 0 11.8.2 17.6.5-24.4-128.7-158.3-227.1-319.9-227.1C209 150.8 64 271.4 64 420.2c0 81.1 43.6 154.2 111.9 203.6a21.5 21.5 0 0 1 9.1 17.6c0 2.4-.5 4.6-1.1 6.9-5.5 20.3-14.2 52.8-14.6 54.3-.7 2.6-1.7 5.2-1.7 7.9 0 5.9 4.8 10.8 10.8 10.8 2.3 0 4.2-.9 6.2-2l70.9-40.9c5.3-3.1 11-5 17.2-5 3.2 0 6.4.5 9.5 1.4 33.1 9.5 68.8 14.8 105.7 14.8 6 0 11.9-.1 17.8-.4-7.1-21-10.9-43.1-10.9-66 0-135.8 132.2-245.8 295.3-245.8zm-194.3-86.5c23.8 0 43.2 19.3 43.2 43.1s-19.3 43.1-43.2 43.1c-23.8 0-43.2-19.3-43.2-43.1s19.4-43.1 43.2-43.1zm-215.9 86.2c-23.8 0-43.2-19.3-43.2-43.1s19.3-43.1 43.2-43.1 43.2 19.3 43.2 43.1-19.4 43.1-43.2 43.1zm586.8 415.6c56.9-41.2 93.2-102 93.2-169.7 0-124-120.8-224.5-269.9-224.5-149 0-269.9 100.5-269.9 224.5S540.9 847.5 690 847.5c30.8 0 60.6-4.4 88.1-12.3 2.6-.8 5.2-1.2 7.9-1.2 5.2 0 9.9 1.6 14.3 4.1l59.1 34c1.7 1 3.3 1.7 5.2 1.7a9 9 0 0 0 6.4-2.6 9 9 0 0 0 2.6-6.4c0-2.2-.9-4.4-1.4-6.6-.3-1.2-7.6-28.3-12.2-45.3-.5-1.9-.9-3.8-.9-5.7.1-5.9 3.1-11.2 7.6-14.5zM600.2 587.2c-19.9 0-36-16.1-36-35.9 0-19.8 16.1-35.9 36-35.9s36 16.1 36 35.9c0 19.8-16.2 35.9-36 35.9zm179.9 0c-19.9 0-36-16.1-36-35.9 0-19.8 16.1-35.9 36-35.9s36 16.1 36 35.9a36.08 36.08 0 0 1-36 35.9z")),t.WeiboCircleOutline = u("weibo-circle", o, i(r, "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm-44.4 672C353.1 736 236 680.4 236 588.9c0-47.8 30.2-103.1 82.3-155.3 69.5-69.6 150.6-101.4 181.1-70.8 13.5 13.5 14.8 36.8 6.1 64.6-4.5 14 13.1 6.3 13.1 6.3 56.2-23.6 105.2-25 123.1.7 9.6 13.7 8.6 32.8-.2 55.1-4.1 10.2 1.3 11.8 9 14.1 31.7 9.8 66.9 33.6 66.9 75.5.2 69.5-99.7 156.9-249.8 156.9zm207.3-290.8a34.9 34.9 0 0 0-7.2-34.1 34.68 34.68 0 0 0-33.1-10.7 18.24 18.24 0 0 1-7.6-35.7c24.1-5.1 50.1 2.3 67.7 21.9 17.7 19.6 22.4 46.3 14.9 69.8a18.13 18.13 0 0 1-22.9 11.7 18.18 18.18 0 0 1-11.8-22.9zm106 34.3s0 .1 0 0a21.1 21.1 0 0 1-26.6 13.7 21.19 21.19 0 0 1-13.6-26.7c11-34.2 4-73.2-21.7-101.8a104.04 104.04 0 0 0-98.9-32.1 21.14 21.14 0 0 1-25.1-16.3 21.07 21.07 0 0 1 16.2-25.1c49.4-10.5 102.8 4.8 139.1 45.1 36.3 40.2 46.1 95.1 30.6 143.2zm-334.5 6.1c-91.4 9-160.7 65.1-154.7 125.2 5.9 60.1 84.8 101.5 176.2 92.5 91.4-9.1 160.7-65.1 154.7-125.3-5.9-60.1-84.8-101.5-176.2-92.4zm80.2 141.7c-18.7 42.3-72.3 64.8-117.8 50.1-43.9-14.2-62.5-57.7-43.3-96.8 18.9-38.4 68-60.1 111.5-48.8 45 11.7 68 54.2 49.6 95.5zm-93-32.2c-14.2-5.9-32.4.2-41.2 13.9-8.8 13.8-4.7 30.2 9.3 36.6 14.3 6.5 33.2.3 42-13.8 8.8-14.3 4.2-30.6-10.1-36.7zm34.9-14.5c-5.4-2.2-12.2.5-15.4 5.8-3.1 5.4-1.4 11.5 4.1 13.8 5.5 2.3 12.6-.3 15.8-5.8 3-5.6 1-11.8-4.5-13.8z")),t.WindowsOutline = u("windows", o, i(r, "M120.1 770.6L443 823.2V543.8H120.1v226.8zm63.4-163.5h196.2v141.6l-196.2-31.9V607.1zm340.3 226.5l382 62.2v-352h-382v289.8zm63.4-226.5h255.3v214.4l-255.3-41.6V607.1zm-63.4-415.7v288.8h382V128.1l-382 63.3zm318.7 225.5H587.3V245l255.3-42.3v214.2zm-722.4 63.3H443V201.9l-322.9 53.5v224.8zM183.5 309l196.2-32.5v140.4H183.5V309z")),t.YahooOutline = u("yahoo", o, i(r, "M859.9 681.4h-14.1c-27.1 0-49.2 22.2-49.2 49.3v14.1c0 27.1 22.2 49.3 49.2 49.3h14.1c27.1 0 49.2-22.2 49.2-49.3v-14.1c0-27.1-22.2-49.3-49.2-49.3zM402.6 231C216.2 231 65 357 65 512.5S216.2 794 402.6 794s337.6-126 337.6-281.5S589.1 231 402.6 231zm0 507C245.1 738 121 634.6 121 512.5c0-62.3 32.3-119.7 84.9-161v48.4h37l159.8 159.9v65.3h-84.4v56.3h225.1v-56.3H459v-65.3l103.5-103.6h65.3v-56.3H459v65.3l-28.1 28.1-93.4-93.5h37v-56.3H216.4c49.4-35 114.3-56.6 186.2-56.6 157.6 0 281.6 103.4 281.6 225.5S560.2 738 402.6 738zm534.7-507H824.7c-15.5 0-27.7 12.6-27.1 28.1l13.1 366h84.4l65.4-366.4c2.7-15.2-7.8-27.7-23.2-27.7z")),t.WeiboSquareOutline = u("weibo-square", o, i(r, "M433.6 595.1c-14.2-5.9-32.4.2-41.2 13.9-8.8 13.8-4.7 30.2 9.3 36.6 14.3 6.5 33.2.3 42-13.8 8.8-14.3 4.2-30.6-10.1-36.7zM880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM467.6 736C353.1 736 236 680.4 236 588.9c0-47.8 30.2-103.1 82.3-155.3 69.5-69.6 150.6-101.4 181.1-70.8 13.5 13.5 14.8 36.8 6.1 64.6-4.5 14 13.1 6.3 13.1 6.3 56.2-23.6 105.2-25 123.1.7 9.6 13.7 8.6 32.8-.2 55.1-4.1 10.2 1.3 11.8 9 14.1 31.7 9.8 66.9 33.6 66.9 75.5.2 69.5-99.7 156.9-249.8 156.9zm207.3-290.8a34.9 34.9 0 0 0-7.2-34.1 34.68 34.68 0 0 0-33.1-10.7 18.24 18.24 0 0 1-7.6-35.7c24.1-5.1 50.1 2.3 67.7 21.9 17.7 19.6 22.4 46.3 14.9 69.8a18.13 18.13 0 0 1-22.9 11.7 18.18 18.18 0 0 1-11.8-22.9zm106 34.3s0 .1 0 0a21.1 21.1 0 0 1-26.6 13.7 21.19 21.19 0 0 1-13.6-26.7c11-34.2 4-73.2-21.7-101.8a104.04 104.04 0 0 0-98.9-32.1 21.14 21.14 0 0 1-25.1-16.3 21.07 21.07 0 0 1 16.2-25.1c49.4-10.5 102.8 4.8 139.1 45.1 36.3 40.2 46.1 95.1 30.6 143.2zm-334.5 6.1c-91.4 9-160.7 65.1-154.7 125.2 5.9 60.1 84.8 101.5 176.2 92.5 91.4-9.1 160.7-65.1 154.7-125.3-5.9-60.1-84.8-101.5-176.2-92.4zm80.2 141.7c-18.7 42.3-72.3 64.8-117.8 50.1-43.9-14.2-62.5-57.7-43.3-96.8 18.9-38.4 68-60.1 111.5-48.8 45 11.7 68 54.2 49.6 95.5zm-58.1-46.7c-5.4-2.2-12.2.5-15.4 5.8-3.1 5.4-1.4 11.5 4.1 13.8 5.5 2.3 12.6-.3 15.8-5.8 3-5.6 1-11.8-4.5-13.8z")),t.YuqueOutline = u("yuque", o, i(r, "M854.6 370.6c-9.9-39.4 9.9-102.2 73.4-124.4l-67.9-3.6s-25.7-90-143.6-98c-117.8-8.1-194.9-3-195-3 .1 0 87.4 55.6 52.4 154.7-25.6 52.5-65.8 95.6-108.8 144.7-1.3 1.3-2.5 2.6-3.5 3.7C319.4 605 96 860 96 860c245.9 64.4 410.7-6.3 508.2-91.1 20.5-.2 35.9-.3 46.3-.3 135.8 0 250.6-117.6 245.9-248.4-3.2-89.9-31.9-110.2-41.8-149.6zm-204.1 334c-10.6 0-26.2.1-46.8.3l-23.6.2-17.8 15.5c-47.1 41-104.4 71.5-171.4 87.6-52.5 12.6-110 16.2-172.7 9.6 18-20.5 36.5-41.6 55.4-63.1 92-104.6 173.8-197.5 236.9-268.5l1.4-1.4 1.3-1.5c4.1-4.6 20.6-23.3 24.7-28.1 9.7-11.1 17.3-19.9 24.5-28.6 30.7-36.7 52.2-67.8 69-102.2l1.6-3.3 1.2-3.4c13.7-38.8 15.4-76.9 6.2-112.8 22.5.7 46.5 1.9 71.7 3.6 33.3 2.3 55.5 12.9 71.1 29.2 5.8 6 10.2 12.5 13.4 18.7 1 2 1.7 3.6 2.3 5l5 17.7c-15.7 34.5-19.9 73.3-11.4 107.2 3 11.8 6.9 22.4 12.3 34.4 2.1 4.7 9.5 20.1 11 23.3 10.3 22.7 15.4 43 16.7 78.7 3.3 94.6-82.7 181.9-182 181.9z")),t.YoutubeOutline = u("youtube", o, i(r, "M960 509.2c0-2.2 0-4.7-.1-7.6-.1-8.1-.3-17.2-.5-26.9-.8-27.9-2.2-55.7-4.4-81.9-3-36.1-7.4-66.2-13.4-88.8a139.52 139.52 0 0 0-98.3-98.5c-28.3-7.6-83.7-12.3-161.7-15.2-37.1-1.4-76.8-2.3-116.5-2.8-13.9-.2-26.8-.3-38.4-.4h-29.4c-11.6.1-24.5.2-38.4.4-39.7.5-79.4 1.4-116.5 2.8-78 3-133.5 7.7-161.7 15.2A139.35 139.35 0 0 0 82.4 304C76.3 326.6 72 356.7 69 392.8c-2.2 26.2-3.6 54-4.4 81.9-.3 9.7-.4 18.8-.5 26.9 0 2.9-.1 5.4-.1 7.6v5.6c0 2.2 0 4.7.1 7.6.1 8.1.3 17.2.5 26.9.8 27.9 2.2 55.7 4.4 81.9 3 36.1 7.4 66.2 13.4 88.8 12.8 47.9 50.4 85.7 98.3 98.5 28.2 7.6 83.7 12.3 161.7 15.2 37.1 1.4 76.8 2.3 116.5 2.8 13.9.2 26.8.3 38.4.4h29.4c11.6-.1 24.5-.2 38.4-.4 39.7-.5 79.4-1.4 116.5-2.8 78-3 133.5-7.7 161.7-15.2 47.9-12.8 85.5-50.5 98.3-98.5 6.1-22.6 10.4-52.7 13.4-88.8 2.2-26.2 3.6-54 4.4-81.9.3-9.7.4-18.8.5-26.9 0-2.9.1-5.4.1-7.6v-5.6zm-72 5.2c0 2.1 0 4.4-.1 7.1-.1 7.8-.3 16.4-.5 25.7-.7 26.6-2.1 53.2-4.2 77.9-2.7 32.2-6.5 58.6-11.2 76.3-6.2 23.1-24.4 41.4-47.4 47.5-21 5.6-73.9 10.1-145.8 12.8-36.4 1.4-75.6 2.3-114.7 2.8-13.7.2-26.4.3-37.8.3h-28.6l-37.8-.3c-39.1-.5-78.2-1.4-114.7-2.8-71.9-2.8-124.9-7.2-145.8-12.8-23-6.2-41.2-24.4-47.4-47.5-4.7-17.7-8.5-44.1-11.2-76.3-2.1-24.7-3.4-51.3-4.2-77.9-.3-9.3-.4-18-.5-25.7 0-2.7-.1-5.1-.1-7.1v-4.8c0-2.1 0-4.4.1-7.1.1-7.8.3-16.4.5-25.7.7-26.6 2.1-53.2 4.2-77.9 2.7-32.2 6.5-58.6 11.2-76.3 6.2-23.1 24.4-41.4 47.4-47.5 21-5.6 73.9-10.1 145.8-12.8 36.4-1.4 75.6-2.3 114.7-2.8 13.7-.2 26.4-.3 37.8-.3h28.6l37.8.3c39.1.5 78.2 1.4 114.7 2.8 71.9 2.8 124.9 7.2 145.8 12.8 23 6.2 41.2 24.4 47.4 47.5 4.7 17.7 8.5 44.1 11.2 76.3 2.1 24.7 3.4 51.3 4.2 77.9.3 9.3.4 18 .5 25.7 0 2.7.1 5.1.1 7.1v4.8zM423 646l232-135-232-133z")),t.AlibabaOutline = u("alibaba", o, i(r, "M602.9 669.8c-37.2 2.6-33.6-17.3-11.5-46.2 50.4-67.2 143.7-158.5 147.9-225.2 5.8-86.6-81.3-113.4-171-113.4-62.4 1.6-127 18.9-171 34.6-151.6 53.5-246.6 137.5-306.9 232-62.4 93.4-43 183.2 91.8 185.8 101.8-4.2 170.5-32.5 239.7-68.2.5 0-192.5 55.1-263.9 14.7-7.9-4.2-15.7-10-17.8-26.2 0-33.1 54.6-67.7 86.6-78.7v-56.7c64.5 22.6 140.6 16.3 205.7-32 2.1 5.8 4.2 13.1 3.7 21h11c2.6-22.6-12.6-44.6-37.8-46.2 7.3 5.8 12.6 10.5 15.2 14.7l-1 1-.5.5c-83.9 58.8-165.3 31.5-173.1 29.9l46.7-45.7-13.1-33.1c92.9-32.5 169.5-56.2 296.9-78.7l-28.5-23 14.7-8.9c75.5 21 126.4 36.7 123.8 76.6-1 6.8-3.7 14.7-7.9 23.1C660.1 466.1 594 538 567.2 569c-17.3 20.5-34.6 39.4-46.7 58.3-13.6 19.4-20.5 37.3-21 53.5 2.6 131.8 391.4-61.9 468-112.9-111.7 47.8-232.9 93.5-364.6 101.9zm85-302.9c2.8 5.2 4.1 11.6 4.1 19.1-.1-6.8-1.4-13.3-4.1-19.1z")),t.AlignCenterOutline = u("align-center", o, i(r, "M264 230h496c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H264c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm496 424c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H264c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496zm144 140H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0-424H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8z")),t.AlignLeftOutline = u("align-left", o, i(r, "M120 230h496c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm0 424h496c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm784 140H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0-424H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8z")),t.AlignRightOutline = u("align-right", o, i(r, "M904 158H408c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 424H408c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 212H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0-424H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8z")),t.AlipayOutline = u("alipay", o, i(r, "M789 610.3c-38.7-12.9-90.7-32.7-148.5-53.6 34.8-60.3 62.5-129 80.7-203.6H530.5v-68.6h233.6v-38.3H530.5V132h-95.4c-16.7 0-16.7 16.5-16.7 16.5v97.8H182.2v38.3h236.3v68.6H223.4v38.3h378.4a667.18 667.18 0 0 1-54.5 132.9c-122.8-40.4-253.8-73.2-336.1-53-52.6 13-86.5 36.1-106.5 60.3-91.4 111-25.9 279.6 167.2 279.6C386 811.2 496 747.6 581.2 643 708.3 704 960 808.7 960 808.7V659.4s-31.6-2.5-171-49.1zM253.9 746.6c-150.5 0-195-118.3-120.6-183.1 24.8-21.9 70.2-32.6 94.4-35 89.4-8.8 172.2 25.2 269.9 72.8-68.8 89.5-156.3 145.3-243.7 145.3z")),t.AliyunOutline = u("aliyun", o, i(r, "M959.2 383.9c-.3-82.1-66.9-148.6-149.1-148.6H575.9l21.6 85.2 201 43.7a42.58 42.58 0 0 1 32.9 39.7c.1.5.1 216.1 0 216.6a42.58 42.58 0 0 1-32.9 39.7l-201 43.7-21.6 85.3h234.2c82.1 0 148.8-66.5 149.1-148.6V383.9zM225.5 660.4a42.58 42.58 0 0 1-32.9-39.7c-.1-.6-.1-216.1 0-216.6.8-19.4 14.6-35.5 32.9-39.7l201-43.7 21.6-85.2H213.8c-82.1 0-148.8 66.4-149.1 148.6V641c.3 82.1 67 148.6 149.1 148.6H448l-21.6-85.3-200.9-43.9zm200.9-158.8h171v21.3h-171z")),t.AmazonOutline = u("amazon", o, i(r, "M825 768.9c-3.3-.9-7.3-.4-11.9 1.3-61.6 28.2-121.5 48.3-179.7 60.2C507.7 856 385.2 842.6 266 790.3c-33.1-14.6-79.1-39.2-138-74a9.36 9.36 0 0 0-5.3-2c-2-.1-3.7.1-5.3.9-1.6.8-2.8 1.8-3.7 3.1-.9 1.3-1.1 3.1-.4 5.4.6 2.2 2.1 4.7 4.6 7.4 10.4 12.2 23.3 25.2 38.6 39s35.6 29.4 60.9 46.8c25.3 17.4 51.8 32.9 79.3 46.4 27.6 13.5 59.6 24.9 96.1 34.1s73 13.8 109.4 13.8c36.2 0 71.4-3.7 105.5-10.9 34.2-7.3 63-15.9 86.5-25.9 23.4-9.9 45-21 64.8-33 19.8-12 34.4-22.2 43.9-30.3 9.5-8.2 16.3-14.6 20.2-19.4 4.6-5.7 6.9-10.6 6.9-14.9.1-4.5-1.7-7.1-5-7.9zM527.4 348.1c-15.2 1.3-33.5 4.1-55 8.3-21.5 4.1-41.4 9.3-59.8 15.4s-37.2 14.6-56.3 25.4c-19.2 10.8-35.5 23.2-49 37s-24.5 31.1-33.1 52c-8.6 20.8-12.9 43.7-12.9 68.7 0 27.1 4.7 51.2 14.3 72.5 9.5 21.3 22.2 38 38.2 50.4 15.9 12.4 34 22.1 54 29.2 20 7.1 41.2 10.3 63.2 9.4 22-.9 43.5-4.3 64.4-10.3 20.8-5.9 40.4-15.4 58.6-28.3 18.2-12.9 33.1-28.2 44.8-45.7 4.3 6.6 8.1 11.5 11.5 14.7l8.7 8.9c5.8 5.9 14.7 14.6 26.7 26.1 11.9 11.5 24.1 22.7 36.3 33.7l104.4-99.9-6-4.9c-4.3-3.3-9.4-8-15.2-14.3-5.8-6.2-11.6-13.1-17.2-20.5-5.7-7.4-10.6-16.1-14.7-25.9-4.1-9.8-6.2-19.3-6.2-28.5V258.7c0-10.1-1.9-21-5.7-32.8-3.9-11.7-10.7-24.5-20.7-38.3-10-13.8-22.4-26.2-37.2-37-14.9-10.8-34.7-20-59.6-27.4-24.8-7.4-52.6-11.1-83.2-11.1-31.3 0-60.4 3.7-87.6 10.9-27.1 7.3-50.3 17-69.7 29.2-19.3 12.2-35.9 26.3-49.7 42.4-13.8 16.1-24.1 32.9-30.8 50.4-6.7 17.5-10.1 35.2-10.1 53.1L408 310c5.5-16.4 12.9-30.6 22-42.8 9.2-12.2 17.9-21 25.8-26.5 8-5.5 16.6-9.9 25.7-13.2 9.2-3.3 15.4-5 18.6-5.4 3.2-.3 5.7-.4 7.6-.4 26.7 0 45.2 7.9 55.6 23.6 6.5 9.5 9.7 23.9 9.7 43.3v56.6c-15.2.6-30.4 1.6-45.6 2.9zM573.1 500c0 16.6-2.2 31.7-6.5 45-9.2 29.1-26.7 47.4-52.4 54.8-22.4 6.6-43.7 3.3-63.9-9.8-21.5-14-32.2-33.8-32.2-59.3 0-19.9 5-36.9 15-51.1 10-14.1 23.3-24.7 40-31.7s33-12 49-14.9c15.9-3 33-4.8 51-5.4V500zm335.2 218.9c-4.3-5.4-15.9-8.9-34.9-10.7-19-1.8-35.5-1.7-49.7.4-15.3 1.8-31.1 6.2-47.3 13.4-16.3 7.1-23.4 13.1-21.6 17.8l.7 1.3.9.7 1.4.2h4.6c.8 0 1.8-.1 3.2-.2 1.4-.1 2.7-.3 3.9-.4 1.2-.1 2.9-.3 5.1-.4 2.1-.1 4.1-.4 6-.7.3 0 3.7-.3 10.3-.9 6.6-.6 11.4-1 14.3-1.3 2.9-.3 7.8-.6 14.5-.9 6.7-.3 12.1-.3 16.1 0 4 .3 8.5.7 13.6 1.1 5.1.4 9.2 1.3 12.4 2.7 3.2 1.3 5.6 3 7.1 5.1 5.2 6.6 4.2 21.2-3 43.9s-14 40.8-20.4 54.2c-2.8 5.7-2.8 9.2 0 10.7s6.7.1 11.9-4c15.6-12.2 28.6-30.6 39.1-55.3 6.1-14.6 10.5-29.8 13.1-45.7 2.4-15.9 2-26.2-1.3-31z")),t.AntCloudOutline = u("ant-cloud", o, i(r, "M378.9 738c-3.1 0-6.1-.5-8.8-1.5l4.4 30.7h26.3l-15.5-29.9c-2.1.5-4.2.7-6.4.7zm421-291.2c-12.6 0-24.8 1.5-36.5 4.2-21.4-38.4-62.3-64.3-109.3-64.3-6.9 0-13.6.6-20.2 1.6-35.4-77.4-113.4-131.1-203.9-131.1-112.3 0-205.3 82.6-221.6 190.4C127.3 455.5 64 523.8 64 607c0 88.4 71.6 160.1 160 160.2h50l13.2-27.6c-26.2-8.3-43.3-29-39.1-48.8 4.6-21.6 32.8-33.9 63.1-27.5 22.9 4.9 40.4 19.1 45.5 35.1a26.1 26.1 0 0 1 22.1-12.4h.2c-.8-3.2-1.2-6.5-1.2-9.9 0-20.1 14.8-36.7 34.1-39.6v-25.4c0-4.4 3.6-8 8-8s8 3.6 8 8v26.3c4.6 1.2 8.8 3.2 12.6 5.8l19.5-21.4c3-3.3 8-3.5 11.3-.5 3.3 3 3.5 8 .5 11.3l-20 22-.2.2a40 40 0 0 1-46.9 59.2c-.4 5.6-2.6 10.7-6 14.8l20 38.4H804v-.1c86.5-2.2 156-73 156-160.1 0-88.5-71.7-160.2-160.1-160.2zM338.2 737.2l-4.3 30h24.4l-5.9-41.5c-3.5 4.6-8.3 8.5-14.2 11.5zM797.5 305a48 48 0 1 0 96 0 48 48 0 1 0-96 0zm-65.7 61.3a24 24 0 1 0 48 0 24 24 0 1 0-48 0zM303.4 742.9l-11.6 24.3h26l3.5-24.7c-5.7.8-11.7 1-17.9.4z")),t.ApartmentOutline = u("apartment", o, i(r, "M908 640H804V488c0-4.4-3.6-8-8-8H548v-96h108c8.8 0 16-7.2 16-16V80c0-8.8-7.2-16-16-16H368c-8.8 0-16 7.2-16 16v288c0 8.8 7.2 16 16 16h108v96H228c-4.4 0-8 3.6-8 8v152H116c-8.8 0-16 7.2-16 16v288c0 8.8 7.2 16 16 16h288c8.8 0 16-7.2 16-16V656c0-8.8-7.2-16-16-16H292v-88h440v88H620c-8.8 0-16 7.2-16 16v288c0 8.8 7.2 16 16 16h288c8.8 0 16-7.2 16-16V656c0-8.8-7.2-16-16-16zm-564 76v168H176V716h168zm84-408V140h168v168H428zm420 576H680V716h168v168z")),t.AntDesignOutline = u("ant-design", o, i(r, "M716.3 313.8c19-18.9 19-49.7 0-68.6l-69.9-69.9.1.1c-18.5-18.5-50.3-50.3-95.3-95.2-21.2-20.7-55.5-20.5-76.5.5L80.9 474.2a53.84 53.84 0 0 0 0 76.4L474.6 944a54.14 54.14 0 0 0 76.5 0l165.1-165c19-18.9 19-49.7 0-68.6a48.7 48.7 0 0 0-68.7 0l-125 125.2c-5.2 5.2-13.3 5.2-18.5 0L189.5 521.4c-5.2-5.2-5.2-13.3 0-18.5l314.4-314.2c.4-.4.9-.7 1.3-1.1 5.2-4.1 12.4-3.7 17.2 1.1l125.2 125.1c19 19 49.8 19 68.7 0zM408.6 514.4a106.3 106.2 0 1 0 212.6 0 106.3 106.2 0 1 0-212.6 0zm536.2-38.6L821.9 353.5c-19-18.9-49.8-18.9-68.7.1a48.4 48.4 0 0 0 0 68.6l83 82.9c5.2 5.2 5.2 13.3 0 18.5l-81.8 81.7a48.4 48.4 0 0 0 0 68.6 48.7 48.7 0 0 0 68.7 0l121.8-121.7a53.93 53.93 0 0 0-.1-76.4z")),t.AreaChartOutline = u("area-chart", o, i(r, "M888 792H200V168c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v688c0 4.4 3.6 8 8 8h752c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm-616-64h536c4.4 0 8-3.6 8-8V284c0-7.2-8.7-10.7-13.7-5.7L592 488.6l-125.4-124a8.03 8.03 0 0 0-11.3 0l-189 189.6a7.87 7.87 0 0 0-2.3 5.6V720c0 4.4 3.6 8 8 8z")),t.ArrowLeftOutline = u("arrow-left", o, i(r, "M872 474H286.9l350.2-304c5.6-4.9 2.2-14-5.2-14h-88.5c-3.9 0-7.6 1.4-10.5 3.9L155 487.8a31.96 31.96 0 0 0 0 48.3L535.1 866c1.5 1.3 3.3 2 5.2 2h91.5c7.4 0 10.8-9.2 5.2-14L286.9 550H872c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z")),t.ArrowDownOutline = u("arrow-down", o, i(r, "M862 465.3h-81c-4.6 0-9 2-12.1 5.5L550 723.1V160c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v563.1L255.1 470.8c-3-3.5-7.4-5.5-12.1-5.5h-81c-6.8 0-10.5 8.1-6 13.2L487.9 861a31.96 31.96 0 0 0 48.3 0L868 478.5c4.5-5.2.8-13.2-6-13.2z")),t.ArrowUpOutline = u("arrow-up", o, i(r, "M868 545.5L536.1 163a31.96 31.96 0 0 0-48.3 0L156 545.5a7.97 7.97 0 0 0 6 13.2h81c4.6 0 9-2 12.1-5.5L474 300.9V864c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V300.9l218.9 252.3c3 3.5 7.4 5.5 12.1 5.5h81c6.8 0 10.5-8 6-13.2z")),t.ArrowsAltOutline = u("arrows-alt", o, i(r, "M855 160.1l-189.2 23.5c-6.6.8-9.3 8.8-4.7 13.5l54.7 54.7-153.5 153.5a8.03 8.03 0 0 0 0 11.3l45.1 45.1c3.1 3.1 8.2 3.1 11.3 0l153.6-153.6 54.7 54.7a7.94 7.94 0 0 0 13.5-4.7L863.9 169a7.9 7.9 0 0 0-8.9-8.9zM416.6 562.3a8.03 8.03 0 0 0-11.3 0L251.8 715.9l-54.7-54.7a7.94 7.94 0 0 0-13.5 4.7L160.1 855c-.6 5.2 3.7 9.5 8.9 8.9l189.2-23.5c6.6-.8 9.3-8.8 4.7-13.5l-54.7-54.7 153.6-153.6c3.1-3.1 3.1-8.2 0-11.3l-45.2-45z")),t.ArrowRightOutline = u("arrow-right", o, i(r, "M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 0 0 0-48.4z")),t.AuditOutline = u("audit", o, i(r, "M296 250c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h384c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H296zm184 144H296c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zm-48 458H208V148h560v320c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V108c0-17.7-14.3-32-32-32H168c-17.7 0-32 14.3-32 32v784c0 17.7 14.3 32 32 32h264c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm440-88H728v-36.6c46.3-13.8 80-56.6 80-107.4 0-61.9-50.1-112-112-112s-112 50.1-112 112c0 50.7 33.7 93.6 80 107.4V764H520c-8.8 0-16 7.2-16 16v152c0 8.8 7.2 16 16 16h352c8.8 0 16-7.2 16-16V780c0-8.8-7.2-16-16-16zM646 620c0-27.6 22.4-50 50-50s50 22.4 50 50-22.4 50-50 50-50-22.4-50-50zm180 266H566v-60h260v60z")),t.BarChartOutline = u("bar-chart", o, i(r, "M888 792H200V168c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v688c0 4.4 3.6 8 8 8h752c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm-600-80h56c4.4 0 8-3.6 8-8V560c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v144c0 4.4 3.6 8 8 8zm152 0h56c4.4 0 8-3.6 8-8V384c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v320c0 4.4 3.6 8 8 8zm152 0h56c4.4 0 8-3.6 8-8V462c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v242c0 4.4 3.6 8 8 8zm152 0h56c4.4 0 8-3.6 8-8V304c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v400c0 4.4 3.6 8 8 8z")),t.BarcodeOutline = u("barcode", o, i(r, "M120 160H72c-4.4 0-8 3.6-8 8v688c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V168c0-4.4-3.6-8-8-8zm833 0h-48c-4.4 0-8 3.6-8 8v688c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V168c0-4.4-3.6-8-8-8zM200 736h112c4.4 0 8-3.6 8-8V168c0-4.4-3.6-8-8-8H200c-4.4 0-8 3.6-8 8v560c0 4.4 3.6 8 8 8zm321 0h48c4.4 0 8-3.6 8-8V168c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v560c0 4.4 3.6 8 8 8zm126 0h178c4.4 0 8-3.6 8-8V168c0-4.4-3.6-8-8-8H647c-4.4 0-8 3.6-8 8v560c0 4.4 3.6 8 8 8zm-255 0h48c4.4 0 8-3.6 8-8V168c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v560c0 4.4 3.6 8 8 8zm-79 64H201c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h112c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zm257 0h-48c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zm256 0H648c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h178c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zm-385 0h-48c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z")),t.BarsOutline = u("bars", o, i(n, "M912 192H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM104 228a56 56 0 1 0 112 0 56 56 0 1 0-112 0zm0 284a56 56 0 1 0 112 0 56 56 0 1 0-112 0zm0 284a56 56 0 1 0 112 0 56 56 0 1 0-112 0z")),t.BgColorsOutline = u("bg-colors", o, i(r, "M766.4 744.3c43.7 0 79.4-36.2 79.4-80.5 0-53.5-79.4-140.8-79.4-140.8S687 610.3 687 663.8c0 44.3 35.7 80.5 79.4 80.5zm-377.1-44.1c7.1 7.1 18.6 7.1 25.6 0l256.1-256c7.1-7.1 7.1-18.6 0-25.6l-256-256c-.6-.6-1.3-1.2-2-1.7l-78.2-78.2a9.11 9.11 0 0 0-12.8 0l-48 48a9.11 9.11 0 0 0 0 12.8l67.2 67.2-207.8 207.9c-7.1 7.1-7.1 18.6 0 25.6l255.9 256zm12.9-448.6l178.9 178.9H223.4l178.8-178.9zM904 816H120c-4.4 0-8 3.6-8 8v80c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-80c0-4.4-3.6-8-8-8z")),t.BehanceOutline = u("behance", o, i(r, "M634 294.3h199.5v48.4H634zM434.1 485.8c44.1-21.1 67.2-53.2 67.2-102.8 0-98.1-73-121.9-157.3-121.9H112v492.4h238.5c89.4 0 173.3-43 173.3-143 0-61.8-29.2-107.5-89.7-124.7zM220.2 345.1h101.5c39.1 0 74.2 10.9 74.2 56.3 0 41.8-27.3 58.6-66 58.6H220.2V345.1zm115.5 324.8H220.1V534.3H338c47.6 0 77.7 19.9 77.7 70.3 0 49.6-35.9 65.3-80 65.3zm575.8-89.5c0-105.5-61.7-193.4-173.3-193.4-108.5 0-182.3 81.7-182.3 188.8 0 111 69.9 187.2 182.3 187.2 85.1 0 140.2-38.3 166.7-120h-86.3c-9.4 30.5-47.6 46.5-77.3 46.5-57.4 0-87.4-33.6-87.4-90.7h256.9c.3-5.9.7-12.1.7-18.4zM653.9 537c3.1-46.9 34.4-76.2 81.2-76.2 49.2 0 73.8 28.9 78.1 76.2H653.9z")),t.BlockOutline = u("block", o, i(r, "M856 376H648V168c0-8.8-7.2-16-16-16H168c-8.8 0-16 7.2-16 16v464c0 8.8 7.2 16 16 16h208v208c0 8.8 7.2 16 16 16h464c8.8 0 16-7.2 16-16V392c0-8.8-7.2-16-16-16zm-480 16v188H220V220h360v156H392c-8.8 0-16 7.2-16 16zm204 52v136H444V444h136zm224 360H444V648h188c8.8 0 16-7.2 16-16V444h156v360z")),t.BoldOutline = u("bold", o, i(r, "M697.8 481.4c33.6-35 54.2-82.3 54.2-134.3v-10.2C752 229.3 663.9 142 555.3 142H259.4c-15.1 0-27.4 12.3-27.4 27.4v679.1c0 16.3 13.2 29.5 29.5 29.5h318.7c117 0 211.8-94.2 211.8-210.5v-11c0-73-37.4-137.3-94.2-175.1zM328 238h224.7c57.1 0 103.3 44.4 103.3 99.3v9.5c0 54.8-46.3 99.3-103.3 99.3H328V238zm366.6 429.4c0 62.9-51.7 113.9-115.5 113.9H328V542.7h251.1c63.8 0 115.5 51 115.5 113.9v10.8z")),t.BorderBottomOutline = u("border-bottom", o, i(r, "M872 808H152c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h720c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm-720-94h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm0-498h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm0 332h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm0-166h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm166 166h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm0-332h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm332 0h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm0 332h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm222-72h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm-388 72h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm388-404h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm-388 72h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm388 426h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm-388 72h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm388-404h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm-388 72h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8z")),t.BorderLeftOutline = u("border-left", o, i(r, "M208 144h-56c-4.4 0-8 3.6-8 8v720c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V152c0-4.4-3.6-8-8-8zm166 0h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm498 0h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm-332 0h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm166 0h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM540 310h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm332 0h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 332h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm-332 0h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 166h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0-332h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm332 332h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0-332h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM374 808h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0-332h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm332 332h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0-332h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8z")),t.BorderOuterOutline = u("border-outer", o, i(r, "M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656zM484 366h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zM302 548h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm364 0h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm-182 0h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm0 182h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8z")),t.BorderInnerOutline = u("border-inner", o, i(r, "M872 476H548V144h-72v332H152c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h324v332h72V548h324c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0-166h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 498h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0-664h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 498h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM650 216h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm56 592h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm-332 0h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm-56-592h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm-166 0h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm56 592h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm-56-426h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm56 260h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8z")),t.BorderRightOutline = u("border-right", o, i(r, "M872 144h-56c-4.4 0-8 3.6-8 8v720c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V152c0-4.4-3.6-8-8-8zm-166 0h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm-498 0h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm332 0h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm-166 0h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm166 166h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm-332 0h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 332h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm332 0h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 166h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0-332h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM208 808h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0-332h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm498 332h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0-332h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM374 808h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0-332h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8z")),t.BorderHorizontalOutline = u("border-horizontal", o, i(r, "M540 144h-56c-4.4 0-8 3.6-8 8v720c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V152c0-4.4-3.6-8-8-8zm-166 0h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm498 0h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm-664 0h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm498 0h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM208 310h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm664 0h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 332h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm-664 0h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 166h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0-332h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm664 332h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0-332h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM374 808h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0-332h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm332 332h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0-332h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8z")),t.BorderTopOutline = u("border-top", o, i(r, "M872 144H152c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h720c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM208 310h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 498h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0-332h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 166h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm166-166h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 332h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm332 0h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0-332h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm166 0h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm-332 0h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm332 332h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm-332 0h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm332-498h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm-332 0h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm332 332h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm-332 0h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8z")),t.BorderVerticleOutline = u("border-verticle", o, i(r, "M872 476H152c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h720c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0-166h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 498h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0-664h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 498h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM650 216h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm56 592h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm-332 0h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm-56-592h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm-166 0h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm332 0h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zM208 808h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm332 0h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM152 382h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm332 0h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zM208 642h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm332 0h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8z")),t.BorderOutline = u("border", o, i(r, "M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z")),t.BranchesOutline = u("branches", o, i(r, "M740 161c-61.8 0-112 50.2-112 112 0 50.1 33.1 92.6 78.5 106.9v95.9L320 602.4V318.1c44.2-15 76-56.9 76-106.1 0-61.8-50.2-112-112-112s-112 50.2-112 112c0 49.2 31.8 91 76 106.1V706c-44.2 15-76 56.9-76 106.1 0 61.8 50.2 112 112 112s112-50.2 112-112c0-49.2-31.8-91-76-106.1v-27.8l423.5-138.7a50.52 50.52 0 0 0 34.9-48.2V378.2c42.9-15.8 73.6-57 73.6-105.2 0-61.8-50.2-112-112-112zm-504 51a48.01 48.01 0 0 1 96 0 48.01 48.01 0 0 1-96 0zm96 600a48.01 48.01 0 0 1-96 0 48.01 48.01 0 0 1 96 0zm408-491a48.01 48.01 0 0 1 0-96 48.01 48.01 0 0 1 0 96z")),t.CheckOutline = u("check", o, i(r, "M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 0 0-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z")),t.CiOutline = u("ci", o, i(r, "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372zm218-572.1h-50.4c-4.4 0-8 3.6-8 8v384.2c0 4.4 3.6 8 8 8H730c4.4 0 8-3.6 8-8V319.9c0-4.4-3.6-8-8-8zm-281.4 49.6c49.5 0 83.1 31.5 87 77.6.4 4.2 3.8 7.4 8 7.4h52.6c2.4 0 4.4-2 4.4-4.4 0-81.2-64-138.1-152.3-138.1C345.4 304 286 373.5 286 488.4v49c0 114 59.4 182.6 162.3 182.6 88 0 152.3-55.1 152.3-132.5 0-2.4-2-4.4-4.4-4.4h-52.7c-4.2 0-7.6 3.2-8 7.3-4.2 43-37.7 72.4-87 72.4-61.1 0-95.6-44.9-95.6-125.2v-49.3c.1-81.4 34.6-126.8 95.7-126.8z")),t.CloseOutline = u("close", o, i(r, "M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z")),t.CloudDownloadOutline = u("cloud-download", o, i(r, "M624 706.3h-74.1V464c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v242.3H400c-6.7 0-10.4 7.7-6.3 12.9l112 141.7a8 8 0 0 0 12.6 0l112-141.7c4.1-5.2.4-12.9-6.3-12.9z", "M811.4 366.7C765.6 245.9 648.9 160 512.2 160S258.8 245.8 213 366.6C127.3 389.1 64 467.2 64 560c0 110.5 89.5 200 199.9 200H304c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8h-40.1c-33.7 0-65.4-13.4-89-37.7-23.5-24.2-36-56.8-34.9-90.6.9-26.4 9.9-51.2 26.2-72.1 16.7-21.3 40.1-36.8 66.1-43.7l37.9-9.9 13.9-36.6c8.6-22.8 20.6-44.1 35.7-63.4a245.6 245.6 0 0 1 52.4-49.9c41.1-28.9 89.5-44.2 140-44.2s98.9 15.3 140 44.2c19.9 14 37.5 30.8 52.4 49.9 15.1 19.3 27.1 40.7 35.7 63.4l13.8 36.5 37.8 10C846.1 454.5 884 503.8 884 560c0 33.1-12.9 64.3-36.3 87.7a123.07 123.07 0 0 1-87.6 36.3H720c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h40.1C870.5 760 960 670.5 960 560c0-92.7-63.1-170.7-148.6-193.3z")),t.CloudServerOutline = u("cloud-server", o, i(r, "M704 446H320c-4.4 0-8 3.6-8 8v402c0 4.4 3.6 8 8 8h384c4.4 0 8-3.6 8-8V454c0-4.4-3.6-8-8-8zm-328 64h272v117H376V510zm272 290H376V683h272v117z", "M424 748a32 32 0 1 0 64 0 32 32 0 1 0-64 0zm0-178a32 32 0 1 0 64 0 32 32 0 1 0-64 0z", "M811.4 368.9C765.6 248 648.9 162 512.2 162S258.8 247.9 213 368.8C126.9 391.5 63.5 470.2 64 563.6 64.6 668 145.6 752.9 247.6 762c4.7.4 8.7-3.3 8.7-8v-60.4c0-4-3-7.4-7-7.9-27-3.4-52.5-15.2-72.1-34.5-24-23.5-37.2-55.1-37.2-88.6 0-28 9.1-54.4 26.2-76.4 16.7-21.4 40.2-36.9 66.1-43.7l37.9-10 13.9-36.7c8.6-22.8 20.6-44.2 35.7-63.5 14.9-19.2 32.6-36 52.4-50 41.1-28.9 89.5-44.2 140-44.2s98.9 15.3 140 44.3c19.9 14 37.5 30.8 52.4 50 15.1 19.3 27.1 40.7 35.7 63.5l13.8 36.6 37.8 10c54.2 14.4 92.1 63.7 92.1 120 0 33.6-13.2 65.1-37.2 88.6-19.5 19.2-44.9 31.1-71.9 34.5-4 .5-6.9 3.9-6.9 7.9V754c0 4.7 4.1 8.4 8.8 8 101.7-9.2 182.5-94 183.2-198.2.6-93.4-62.7-172.1-148.6-194.9z")),t.CloudSyncOutline = u("cloud-sync", o, i(r, "M811.4 368.9C765.6 248 648.9 162 512.2 162S258.8 247.9 213 368.8C126.9 391.5 63.5 470.2 64 563.6 64.6 668 145.6 752.9 247.6 762c4.7.4 8.7-3.3 8.7-8v-60.4c0-4-3-7.4-7-7.9-27-3.4-52.5-15.2-72.1-34.5-24-23.5-37.2-55.1-37.2-88.6 0-28 9.1-54.4 26.2-76.4 16.7-21.4 40.2-36.9 66.1-43.7l37.9-10 13.9-36.7c8.6-22.8 20.6-44.2 35.7-63.5 14.9-19.2 32.6-36 52.4-50 41.1-28.9 89.5-44.2 140-44.2s98.9 15.3 140 44.3c19.9 14 37.5 30.8 52.4 50 15.1 19.3 27.1 40.7 35.7 63.5l13.8 36.6 37.8 10c54.2 14.4 92.1 63.7 92.1 120 0 33.6-13.2 65.1-37.2 88.6-19.5 19.2-44.9 31.1-71.9 34.5-4 .5-6.9 3.9-6.9 7.9V754c0 4.7 4.1 8.4 8.8 8 101.7-9.2 182.5-94 183.2-198.2.6-93.4-62.7-172.1-148.6-194.9z", "M376.9 656.4c1.8-33.5 15.7-64.7 39.5-88.6 25.4-25.5 60-39.8 96-39.8 36.2 0 70.3 14.1 96 39.8 1.4 1.4 2.7 2.8 4.1 4.3l-25 19.6a8 8 0 0 0 3 14.1l98.2 24c5 1.2 9.9-2.6 9.9-7.7l.5-101.3c0-6.7-7.6-10.5-12.9-6.3L663 532.7c-36.6-42-90.4-68.6-150.5-68.6-107.4 0-195 85.1-199.4 191.7-.2 4.5 3.4 8.3 8 8.3H369c4.2-.1 7.7-3.4 7.9-7.7zM703 664h-47.9c-4.2 0-7.7 3.3-8 7.6-1.8 33.5-15.7 64.7-39.5 88.6-25.4 25.5-60 39.8-96 39.8-36.2 0-70.3-14.1-96-39.8-1.4-1.4-2.7-2.8-4.1-4.3l25-19.6a8 8 0 0 0-3-14.1l-98.2-24c-5-1.2-9.9 2.6-9.9 7.7l-.4 101.4c0 6.7 7.6 10.5 12.9 6.3l23.2-18.2c36.6 42 90.4 68.6 150.5 68.6 107.4 0 195-85.1 199.4-191.7.2-4.5-3.4-8.3-8-8.3z")),t.CloudUploadOutline = u("cloud-upload", o, i(r, "M518.3 459a8 8 0 0 0-12.6 0l-112 141.7a7.98 7.98 0 0 0 6.3 12.9h73.9V856c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V613.7H624c6.7 0 10.4-7.7 6.3-12.9L518.3 459z", "M811.4 366.7C765.6 245.9 648.9 160 512.2 160S258.8 245.8 213 366.6C127.3 389.1 64 467.2 64 560c0 110.5 89.5 200 199.9 200H304c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8h-40.1c-33.7 0-65.4-13.4-89-37.7-23.5-24.2-36-56.8-34.9-90.6.9-26.4 9.9-51.2 26.2-72.1 16.7-21.3 40.1-36.8 66.1-43.7l37.9-9.9 13.9-36.6c8.6-22.8 20.6-44.1 35.7-63.4a245.6 245.6 0 0 1 52.4-49.9c41.1-28.9 89.5-44.2 140-44.2s98.9 15.3 140 44.2c19.9 14 37.5 30.8 52.4 49.9 15.1 19.3 27.1 40.7 35.7 63.4l13.8 36.5 37.8 10C846.1 454.5 884 503.8 884 560c0 33.1-12.9 64.3-36.3 87.7a123.07 123.07 0 0 1-87.6 36.3H720c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h40.1C870.5 760 960 670.5 960 560c0-92.7-63.1-170.7-148.6-193.3z")),t.ClusterOutline = u("cluster", o, i(r, "M888 680h-54V540H546v-92h238c8.8 0 16-7.2 16-16V168c0-8.8-7.2-16-16-16H240c-8.8 0-16 7.2-16 16v264c0 8.8 7.2 16 16 16h238v92H190v140h-54c-4.4 0-8 3.6-8 8v176c0 4.4 3.6 8 8 8h176c4.4 0 8-3.6 8-8V688c0-4.4-3.6-8-8-8h-54v-72h220v72h-54c-4.4 0-8 3.6-8 8v176c0 4.4 3.6 8 8 8h176c4.4 0 8-3.6 8-8V688c0-4.4-3.6-8-8-8h-54v-72h220v72h-54c-4.4 0-8 3.6-8 8v176c0 4.4 3.6 8 8 8h176c4.4 0 8-3.6 8-8V688c0-4.4-3.6-8-8-8zM256 805.3c0 1.5-1.2 2.7-2.7 2.7h-58.7c-1.5 0-2.7-1.2-2.7-2.7v-58.7c0-1.5 1.2-2.7 2.7-2.7h58.7c1.5 0 2.7 1.2 2.7 2.7v58.7zm288 0c0 1.5-1.2 2.7-2.7 2.7h-58.7c-1.5 0-2.7-1.2-2.7-2.7v-58.7c0-1.5 1.2-2.7 2.7-2.7h58.7c1.5 0 2.7 1.2 2.7 2.7v58.7zM288 384V216h448v168H288zm544 421.3c0 1.5-1.2 2.7-2.7 2.7h-58.7c-1.5 0-2.7-1.2-2.7-2.7v-58.7c0-1.5 1.2-2.7 2.7-2.7h58.7c1.5 0 2.7 1.2 2.7 2.7v58.7zM360 300a40 40 0 1 0 80 0 40 40 0 1 0-80 0z")),t.CodepenOutline = u("codepen", o, i(r, "M911.7 385.3l-.3-1.5c-.2-1-.3-1.9-.6-2.9-.2-.6-.4-1.1-.5-1.7-.3-.8-.5-1.7-.9-2.5-.2-.6-.5-1.1-.8-1.7-.4-.8-.8-1.5-1.2-2.3-.3-.5-.6-1.1-1-1.6-.8-1.2-1.7-2.4-2.6-3.6-.5-.6-1.1-1.3-1.7-1.9-.4-.5-.9-.9-1.4-1.3-.6-.6-1.3-1.1-1.9-1.6-.5-.4-1-.8-1.6-1.2-.2-.1-.4-.3-.6-.4L531.1 117.8a34.3 34.3 0 0 0-38.1 0L127.3 361.3c-.2.1-.4.3-.6.4-.5.4-1 .8-1.6 1.2-.7.5-1.3 1.1-1.9 1.6-.5.4-.9.9-1.4 1.3-.6.6-1.2 1.2-1.7 1.9-1 1.1-1.8 2.3-2.6 3.6-.3.5-.7 1-1 1.6-.4.7-.8 1.5-1.2 2.3-.3.5-.5 1.1-.8 1.7-.3.8-.6 1.7-.9 2.5-.2.6-.4 1.1-.5 1.7-.2.9-.4 1.9-.6 2.9l-.3 1.5c-.2 1.5-.3 3-.3 4.5v243.5c0 1.5.1 3 .3 4.5l.3 1.5.6 2.9c.2.6.3 1.1.5 1.7.3.9.6 1.7.9 2.5.2.6.5 1.1.8 1.7.4.8.7 1.5 1.2 2.3.3.5.6 1.1 1 1.6.5.7.9 1.4 1.5 2.1l1.2 1.5c.5.6 1.1 1.3 1.7 1.9.4.5.9.9 1.4 1.3.6.6 1.3 1.1 1.9 1.6.5.4 1 .8 1.6 1.2.2.1.4.3.6.4L493 905.7c5.6 3.8 12.3 5.8 19.1 5.8 6.6 0 13.3-1.9 19.1-5.8l365.6-243.5c.2-.1.4-.3.6-.4.5-.4 1-.8 1.6-1.2.7-.5 1.3-1.1 1.9-1.6.5-.4.9-.9 1.4-1.3.6-.6 1.2-1.2 1.7-1.9l1.2-1.5 1.5-2.1c.3-.5.7-1 1-1.6.4-.8.8-1.5 1.2-2.3.3-.5.5-1.1.8-1.7.3-.8.6-1.7.9-2.5.2-.5.4-1.1.5-1.7.3-.9.4-1.9.6-2.9l.3-1.5c.2-1.5.3-3 .3-4.5V389.8c-.3-1.5-.4-3-.6-4.5zM546.4 210.5l269.4 179.4-120.3 80.4-149-99.6V210.5zm-68.8 0v160.2l-149 99.6-120.3-80.4 269.3-179.4zM180.7 454.1l86 57.5-86 57.5v-115zm296.9 358.5L208.3 633.2l120.3-80.4 149 99.6v160.2zM512 592.8l-121.6-81.2L512 430.3l121.6 81.2L512 592.8zm34.4 219.8V652.4l149-99.6 120.3 80.4-269.3 179.4zM843.3 569l-86-57.5 86-57.5v115z")),t.CodeSandboxOutline = u("code-sandbox", o, i(r, "M709.6 210l.4-.2h.2L512 96 313.9 209.8h-.2l.7.3L151.5 304v416L512 928l360.5-208V304l-162.9-94zM482.7 843.6L339.6 761V621.4L210 547.8V372.9l272.7 157.3v313.4zM238.2 321.5l134.7-77.8 138.9 79.7 139.1-79.9 135.2 78-273.9 158-274-158zM814 548.3l-128.8 73.1v139.1l-143.9 83V530.4L814 373.1v175.2z")),t.ColumHeightOutline = u("colum-height", o, i(r, "M840 836H184c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h656c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8zm0-724H184c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h656c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8zM610.8 378c6 0 9.4-7 5.7-11.7L515.7 238.7a7.14 7.14 0 0 0-11.3 0L403.6 366.3a7.23 7.23 0 0 0 5.7 11.7H476v268h-62.8c-6 0-9.4 7-5.7 11.7l100.8 127.5c2.9 3.7 8.5 3.7 11.3 0l100.8-127.5c3.7-4.7.4-11.7-5.7-11.7H548V378h62.8z")),t.ColumnWidthOutline = u("column-width", o, i(r, "M180 176h-60c-4.4 0-8 3.6-8 8v656c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V184c0-4.4-3.6-8-8-8zm724 0h-60c-4.4 0-8 3.6-8 8v656c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V184c0-4.4-3.6-8-8-8zM785.3 504.3L657.7 403.6a7.23 7.23 0 0 0-11.7 5.7V476H378v-62.8c0-6-7-9.4-11.7-5.7L238.7 508.3a7.14 7.14 0 0 0 0 11.3l127.5 100.8c4.7 3.7 11.7.4 11.7-5.7V548h268v62.8c0 6 7 9.4 11.7 5.7l127.5-100.8c3.8-2.9 3.8-8.5.2-11.4z")),t.ColumnHeightOutline = u("column-height", o, i(r, "M840 836H184c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h656c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8zm0-724H184c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h656c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8zM610.8 378c6 0 9.4-7 5.7-11.7L515.7 238.7a7.14 7.14 0 0 0-11.3 0L403.6 366.3a7.23 7.23 0 0 0 5.7 11.7H476v268h-62.8c-6 0-9.4 7-5.7 11.7l100.8 127.5c2.9 3.7 8.5 3.7 11.3 0l100.8-127.5c3.7-4.7.4-11.7-5.7-11.7H548V378h62.8z")),t.CoffeeOutline = u("coffee", o, i(n, "M275 281c19.9 0 36-16.1 36-36V36c0-19.9-16.1-36-36-36s-36 16.1-36 36v209c0 19.9 16.1 36 36 36zm613 144H768c0-39.8-32.2-72-72-72H200c-39.8 0-72 32.2-72 72v248c0 3.4.2 6.7.7 9.9-.5 7-.7 14-.7 21.1 0 176.7 143.3 320 320 320 160.1 0 292.7-117.5 316.3-271H888c39.8 0 72-32.2 72-72V497c0-39.8-32.2-72-72-72zM696 681h-1.1c.7 7.6 1.1 15.2 1.1 23 0 137-111 248-248 248S200 841 200 704c0-7.8.4-15.4 1.1-23H200V425h496v256zm192-8H776V497h112v176zM613 281c19.9 0 36-16.1 36-36V36c0-19.9-16.1-36-36-36s-36 16.1-36 36v209c0 19.9 16.1 36 36 36zm-170 0c19.9 0 36-16.1 36-36V36c0-19.9-16.1-36-36-36s-36 16.1-36 36v209c0 19.9 16.1 36 36 36z")),t.CopyrightOutline = u("copyright", o, i(r, "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372zm5.6-532.7c53 0 89 33.8 93 83.4.3 4.2 3.8 7.4 8 7.4h56.7c2.6 0 4.7-2.1 4.7-4.7 0-86.7-68.4-147.4-162.7-147.4C407.4 290 344 364.2 344 486.8v52.3C344 660.8 407.4 734 517.3 734c94 0 162.7-58.8 162.7-141.4 0-2.6-2.1-4.7-4.7-4.7h-56.8c-4.2 0-7.6 3.2-8 7.3-4.2 46.1-40.1 77.8-93 77.8-65.3 0-102.1-47.9-102.1-133.6v-52.6c.1-87 37-135.5 102.2-135.5z")),t.DashOutline = u("dash", o, i(r, "M112 476h160v72H112zm320 0h160v72H432zm320 0h160v72H752z")),t.DeploymentUnitOutline = u("deployment-unit", o, i(r, "M888.3 693.2c-42.5-24.6-94.3-18-129.2 12.8l-53-30.7V523.6c0-15.7-8.4-30.3-22-38.1l-136-78.3v-67.1c44.2-15 76-56.8 76-106.1 0-61.9-50.1-112-112-112s-112 50.1-112 112c0 49.3 31.8 91.1 76 106.1v67.1l-136 78.3c-13.6 7.8-22 22.4-22 38.1v151.6l-53 30.7c-34.9-30.8-86.8-37.4-129.2-12.8-53.5 31-71.7 99.4-41 152.9 30.8 53.5 98.9 71.9 152.2 41 42.5-24.6 62.7-73 53.6-118.8l48.7-28.3 140.6 81c6.8 3.9 14.4 5.9 22 5.9s15.2-2 22-5.9L674.5 740l48.7 28.3c-9.1 45.7 11.2 94.2 53.6 118.8 53.3 30.9 121.5 12.6 152.2-41 30.8-53.6 12.6-122-40.7-152.9zm-673 138.4a47.6 47.6 0 0 1-65.2-17.6c-13.2-22.9-5.4-52.3 17.5-65.5a47.6 47.6 0 0 1 65.2 17.6c13.2 22.9 5.4 52.3-17.5 65.5zM522 463.8zM464 234a48.01 48.01 0 0 1 96 0 48.01 48.01 0 0 1-96 0zm170 446.2l-122 70.3-122-70.3V539.8l122-70.3 122 70.3v140.4zm239.9 133.9c-13.2 22.9-42.4 30.8-65.2 17.6-22.8-13.2-30.7-42.6-17.5-65.5s42.4-30.8 65.2-17.6c22.9 13.2 30.7 42.5 17.5 65.5z")),t.DesktopOutline = u("desktop", o, i(r, "M928 140H96c-17.7 0-32 14.3-32 32v496c0 17.7 14.3 32 32 32h380v112H304c-8.8 0-16 7.2-16 16v48c0 4.4 3.6 8 8 8h432c4.4 0 8-3.6 8-8v-48c0-8.8-7.2-16-16-16H548V700h380c17.7 0 32-14.3 32-32V172c0-17.7-14.3-32-32-32zm-40 488H136V212h752v416z")),t.DingdingOutline = u("dingding", o, i(r, "M573.7 252.5C422.5 197.4 201.3 96.7 201.3 96.7c-15.7-4.1-17.9 11.1-17.9 11.1-5 61.1 33.6 160.5 53.6 182.8 19.9 22.3 319.1 113.7 319.1 113.7S326 357.9 270.5 341.9c-55.6-16-37.9 17.8-37.9 17.8 11.4 61.7 64.9 131.8 107.2 138.4 42.2 6.6 220.1 4 220.1 4s-35.5 4.1-93.2 11.9c-42.7 5.8-97 12.5-111.1 17.8-33.1 12.5 24 62.6 24 62.6 84.7 76.8 129.7 50.5 129.7 50.5 33.3-10.7 61.4-18.5 85.2-24.2L565 743.1h84.6L603 928l205.3-271.9H700.8l22.3-38.7c.3.5.4.8.4.8S799.8 496.1 829 433.8l.6-1h-.1c5-10.8 8.6-19.7 10-25.8 17-71.3-114.5-99.4-265.8-154.5z")),t.DisconnectOutline = u("disconnect", o, i(r, "M832.6 191.4c-84.6-84.6-221.5-84.6-306 0l-96.9 96.9 51 51 96.9-96.9c53.8-53.8 144.6-59.5 204 0 59.5 59.5 53.8 150.2 0 204l-96.9 96.9 51.1 51.1 96.9-96.9c84.4-84.6 84.4-221.5-.1-306.1zM446.5 781.6c-53.8 53.8-144.6 59.5-204 0-59.5-59.5-53.8-150.2 0-204l96.9-96.9-51.1-51.1-96.9 96.9c-84.6 84.6-84.6 221.5 0 306s221.5 84.6 306 0l96.9-96.9-51-51-96.8 97zM260.3 209.4a8.03 8.03 0 0 0-11.3 0L209.4 249a8.03 8.03 0 0 0 0 11.3l554.4 554.4c3.1 3.1 8.2 3.1 11.3 0l39.6-39.6c3.1-3.1 3.1-8.2 0-11.3L260.3 209.4z")),t.DollarOutline = u("dollar", o, i(r, "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372zm47.7-395.2l-25.4-5.9V348.6c38 5.2 61.5 29 65.5 58.2.5 4 3.9 6.9 7.9 6.9h44.9c4.7 0 8.4-4.1 8-8.8-6.1-62.3-57.4-102.3-125.9-109.2V263c0-4.4-3.6-8-8-8h-28.1c-4.4 0-8 3.6-8 8v33c-70.8 6.9-126.2 46-126.2 119 0 67.6 49.8 100.2 102.1 112.7l24.7 6.3v142.7c-44.2-5.9-69-29.5-74.1-61.3-.6-3.8-4-6.6-7.9-6.6H363c-4.7 0-8.4 4-8 8.7 4.5 55 46.2 105.6 135.2 112.1V761c0 4.4 3.6 8 8 8h28.4c4.4 0 8-3.6 8-8.1l-.2-31.7c78.3-6.9 134.3-48.8 134.3-124-.1-69.4-44.2-100.4-109-116.4zm-68.6-16.2c-5.6-1.6-10.3-3.1-15-5-33.8-12.2-49.5-31.9-49.5-57.3 0-36.3 27.5-57 64.5-61.7v124zM534.3 677V543.3c3.1.9 5.9 1.6 8.8 2.2 47.3 14.4 63.2 34.4 63.2 65.1 0 39.1-29.4 62.6-72 66.4z")),t.DoubleRightOutline = u("double-right", o, i(r, "M533.2 492.3L277.9 166.1c-3-3.9-7.7-6.1-12.6-6.1H188c-6.7 0-10.4 7.7-6.3 12.9L447.1 512 181.7 851.1A7.98 7.98 0 0 0 188 864h77.3c4.9 0 9.6-2.3 12.6-6.1l255.3-326.1c9.1-11.7 9.1-27.9 0-39.5zm304 0L581.9 166.1c-3-3.9-7.7-6.1-12.6-6.1H492c-6.7 0-10.4 7.7-6.3 12.9L751.1 512 485.7 851.1A7.98 7.98 0 0 0 492 864h77.3c4.9 0 9.6-2.3 12.6-6.1l255.3-326.1c9.1-11.7 9.1-27.9 0-39.5z")),t.DotChartOutline = u("dot-chart", o, i(r, "M888 792H200V168c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v688c0 4.4 3.6 8 8 8h752c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM288 604a64 64 0 1 0 128 0 64 64 0 1 0-128 0zm118-224a48 48 0 1 0 96 0 48 48 0 1 0-96 0zm158 228a96 96 0 1 0 192 0 96 96 0 1 0-192 0zm148-314a56 56 0 1 0 112 0 56 56 0 1 0-112 0z")),t.DoubleLeftOutline = u("double-left", o, i(r, "M272.9 512l265.4-339.1c4.1-5.2.4-12.9-6.3-12.9h-77.3c-4.9 0-9.6 2.3-12.6 6.1L186.8 492.3a31.99 31.99 0 0 0 0 39.5l255.3 326.1c3 3.9 7.7 6.1 12.6 6.1H532c6.7 0 10.4-7.7 6.3-12.9L272.9 512zm304 0l265.4-339.1c4.1-5.2.4-12.9-6.3-12.9h-77.3c-4.9 0-9.6 2.3-12.6 6.1L490.8 492.3a31.99 31.99 0 0 0 0 39.5l255.3 326.1c3 3.9 7.7 6.1 12.6 6.1H836c6.7 0 10.4-7.7 6.3-12.9L576.9 512z")),t.DownloadOutline = u("download", o, i(r, "M505.7 661a8 8 0 0 0 12.6 0l112-141.7c4.1-5.2.4-12.9-6.3-12.9h-74.1V168c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v338.3H400c-6.7 0-10.4 7.7-6.3 12.9l112 141.8zM878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8z")),t.DribbbleOutline = u("dribbble", o, i(r, "M512 96C282.6 96 96 282.6 96 512s186.6 416 416 416 416-186.6 416-416S741.4 96 512 96zm275.1 191.8c49.5 60.5 79.5 137.5 80.2 221.4-11.7-2.5-129.2-26.3-247.4-11.4-2.5-6.1-5-12.2-7.6-18.3-7.4-17.3-15.3-34.6-23.6-51.5C720 374.3 779.6 298 787.1 287.8zM512 157.2c90.3 0 172.8 33.9 235.5 89.5-6.4 9.1-59.9 81-186.2 128.4-58.2-107-122.7-194.8-132.6-208 27.3-6.6 55.2-9.9 83.3-9.9zM360.9 191c9.4 12.8 72.9 100.9 131.7 205.5C326.4 440.6 180 440 164.1 439.8c23.1-110.3 97.4-201.9 196.8-248.8zM156.7 512.5c0-3.6.1-7.3.2-10.9 15.5.3 187.7 2.5 365.2-50.6 10.2 19.9 19.9 40.1 28.8 60.3-4.7 1.3-9.4 2.7-14 4.2C353.6 574.9 256.1 736.4 248 750.1c-56.7-63-91.3-146.3-91.3-237.6zM512 867.8c-82.2 0-157.9-28-218.1-75 6.4-13.1 78.3-152 278.7-221.9l2.3-.8c49.9 129.6 70.5 238.3 75.8 269.5A350.46 350.46 0 0 1 512 867.8zm198.5-60.7c-3.6-21.6-22.5-125.6-69-253.3C752.9 536 850.7 565.2 862.8 569c-15.8 98.8-72.5 184.2-152.3 238.1z")),t.DropboxOutline = u("dropbox", o, i(r, "M64 556.9l264.2 173.5L512.5 577 246.8 412.7zm896-290.3zm0 0L696.8 95 512.5 248.5l265.2 164.2L512.5 577l184.3 153.4L960 558.8 777.7 412.7zM513 609.8L328.2 763.3l-79.4-51.5v57.8L513 928l263.7-158.4v-57.8l-78.9 51.5zM328.2 95L64 265.1l182.8 147.6 265.7-164.2zM64 556.9z")),t.EllipsisOutline = u("ellipsis", o, i(r, "M176 511a56 56 0 1 0 112 0 56 56 0 1 0-112 0zm280 0a56 56 0 1 0 112 0 56 56 0 1 0-112 0zm280 0a56 56 0 1 0 112 0 56 56 0 1 0-112 0z")),t.EnterOutline = u("enter", o, i(r, "M864 170h-60c-4.4 0-8 3.6-8 8v518H310v-73c0-6.7-7.8-10.5-13-6.3l-141.9 112a8 8 0 0 0 0 12.6l141.9 112c5.3 4.2 13 .4 13-6.3v-75h498c35.3 0 64-28.7 64-64V178c0-4.4-3.6-8-8-8z")),t.EuroOutline = u("euro", o, i(r, "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372zm117.7-588.6c-15.9-3.5-34.4-5.4-55.3-5.4-106.7 0-178.9 55.7-198.6 149.9H344c-4.4 0-8 3.6-8 8v27.2c0 4.4 3.6 8 8 8h26.4c-.3 4.1-.3 8.4-.3 12.8v36.9H344c-4.4 0-8 3.6-8 8V568c0 4.4 3.6 8 8 8h30.2c17.2 99.2 90.4 158 200.2 158 20.9 0 39.4-1.7 55.3-5.1 3.7-.8 6.4-4 6.4-7.8v-42.8c0-5-4.6-8.8-9.5-7.8-14.7 2.8-31.9 4.1-51.8 4.1-68.5 0-114.5-36.6-129.8-98.6h130.6c4.4 0 8-3.6 8-8v-27.2c0-4.4-3.6-8-8-8H439.2v-36c0-4.7 0-9.4.3-13.8h135.9c4.4 0 8-3.6 8-8v-27.2c0-4.4-3.6-8-8-8H447.1c17.2-56.9 62.3-90.4 127.6-90.4 19.9 0 37.1 1.5 51.7 4.4a8 8 0 0 0 9.6-7.8v-42.8c0-3.8-2.6-7-6.3-7.8z")),t.ExceptionOutline = u("exception", o, i(r, "M688 312v-48c0-4.4-3.6-8-8-8H296c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h384c4.4 0 8-3.6 8-8zm-392 88c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H296zm376 116c-119.3 0-216 96.7-216 216s96.7 216 216 216 216-96.7 216-216-96.7-216-216-216zm107.5 323.5C750.8 868.2 712.6 884 672 884s-78.8-15.8-107.5-44.5C535.8 810.8 520 772.6 520 732s15.8-78.8 44.5-107.5C593.2 595.8 631.4 580 672 580s78.8 15.8 107.5 44.5C808.2 653.2 824 691.4 824 732s-15.8 78.8-44.5 107.5zM640 812a32 32 0 1 0 64 0 32 32 0 1 0-64 0zm12-64h40c4.4 0 8-3.6 8-8V628c0-4.4-3.6-8-8-8h-40c-4.4 0-8 3.6-8 8v112c0 4.4 3.6 8 8 8zM440 852H208V148h560v344c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V108c0-17.7-14.3-32-32-32H168c-17.7 0-32 14.3-32 32v784c0 17.7 14.3 32 32 32h272c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8z")),t.ExclamationOutline = u("exclamation", o, i(r, "M448 804a64 64 0 1 0 128 0 64 64 0 1 0-128 0zm32-168h64c4.4 0 8-3.6 8-8V164c0-4.4-3.6-8-8-8h-64c-4.4 0-8 3.6-8 8v464c0 4.4 3.6 8 8 8z")),t.ExportOutline = u("export", o, i(r, "M888.3 757.4h-53.8c-4.2 0-7.7 3.5-7.7 7.7v61.8H197.1V197.1h629.8v61.8c0 4.2 3.5 7.7 7.7 7.7h53.8c4.2 0 7.7-3.4 7.7-7.7V158.7c0-17-13.7-30.7-30.7-30.7H158.7c-17 0-30.7 13.7-30.7 30.7v706.6c0 17 13.7 30.7 30.7 30.7h706.6c17 0 30.7-13.7 30.7-30.7V765.1c0-4.3-3.5-7.7-7.7-7.7zm18.6-251.7L765 393.7c-5.3-4.2-13-.4-13 6.3v76H438c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h314v76c0 6.7 7.8 10.5 13 6.3l141.9-112a8 8 0 0 0 0-12.6z")),t.FallOutline = u("fall", o, i(r, "M925.9 804l-24-199.2c-.8-6.6-8.9-9.4-13.6-4.7L829 659.5 557.7 388.3c-6.3-6.2-16.4-6.2-22.6 0L433.3 490 156.6 213.3a8.03 8.03 0 0 0-11.3 0l-45 45.2a8.03 8.03 0 0 0 0 11.3L422 591.7c6.2 6.3 16.4 6.3 22.6 0L546.4 490l226.1 226-59.3 59.3a8.01 8.01 0 0 0 4.7 13.6l199.2 24c5.1.7 9.5-3.7 8.8-8.9z")),t.FileDoneOutline = u("file-done", o, i(r, "M688 312v-48c0-4.4-3.6-8-8-8H296c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h384c4.4 0 8-3.6 8-8zm-392 88c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H296zm376 116c-119.3 0-216 96.7-216 216s96.7 216 216 216 216-96.7 216-216-96.7-216-216-216zm107.5 323.5C750.8 868.2 712.6 884 672 884s-78.8-15.8-107.5-44.5C535.8 810.8 520 772.6 520 732s15.8-78.8 44.5-107.5C593.2 595.8 631.4 580 672 580s78.8 15.8 107.5 44.5C808.2 653.2 824 691.4 824 732s-15.8 78.8-44.5 107.5zM761 656h-44.3c-2.6 0-5 1.2-6.5 3.3l-63.5 87.8-23.1-31.9a7.92 7.92 0 0 0-6.5-3.3H573c-6.5 0-10.3 7.4-6.5 12.7l73.8 102.1c3.2 4.4 9.7 4.4 12.9 0l114.2-158c3.9-5.3.1-12.7-6.4-12.7zM440 852H208V148h560v344c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V108c0-17.7-14.3-32-32-32H168c-17.7 0-32 14.3-32 32v784c0 17.7 14.3 32 32 32h272c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8z")),t.FileSyncOutline = u("file-sync", o, i(r, "M296 256c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h384c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H296zm192 200v-48c0-4.4-3.6-8-8-8H296c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h184c4.4 0 8-3.6 8-8zm-48 396H208V148h560v344c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V108c0-17.7-14.3-32-32-32H168c-17.7 0-32 14.3-32 32v784c0 17.7 14.3 32 32 32h272c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm104.1-115.6c1.8-34.5 16.2-66.8 40.8-91.4 26.2-26.2 62-41 99.1-41 37.4 0 72.6 14.6 99.1 41 3.2 3.2 6.3 6.6 9.2 10.1L769.2 673a8 8 0 0 0 3 14.1l93.3 22.5c5 1.2 9.8-2.6 9.9-7.7l.6-95.4a8 8 0 0 0-12.9-6.4l-20.3 15.8C805.4 569.6 748.1 540 684 540c-109.9 0-199.6 86.9-204 195.7-.2 4.5 3.5 8.3 8 8.3h48.1c4.3 0 7.8-3.3 8-7.6zM880 744h-48.1c-4.3 0-7.8 3.3-8 7.6-1.8 34.5-16.2 66.8-40.8 91.4-26.2 26.2-62 41-99.1 41-37.4 0-72.6-14.6-99.1-41-3.2-3.2-6.3-6.6-9.2-10.1l23.1-17.9a8 8 0 0 0-3-14.1l-93.3-22.5c-5-1.2-9.8 2.6-9.9 7.7l-.6 95.4a8 8 0 0 0 12.9 6.4l20.3-15.8C562.6 918.4 619.9 948 684 948c109.9 0 199.6-86.9 204-195.7.2-4.5-3.5-8.3-8-8.3z")),t.FileProtectOutline = u("file-protect", o, i(r, "M644.7 669.2a7.92 7.92 0 0 0-6.5-3.3H594c-6.5 0-10.3 7.4-6.5 12.7l73.8 102.1c3.2 4.4 9.7 4.4 12.9 0l114.2-158c3.8-5.3 0-12.7-6.5-12.7h-44.3c-2.6 0-5 1.2-6.5 3.3l-63.5 87.8-22.9-31.9zM688 306v-48c0-4.4-3.6-8-8-8H296c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h384c4.4 0 8-3.6 8-8zm-392 88c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H296zm184 458H208V148h560v296c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V108c0-17.7-14.3-32-32-32H168c-17.7 0-32 14.3-32 32v784c0 17.7 14.3 32 32 32h312c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm402.6-320.8l-192-66.7c-.9-.3-1.7-.4-2.6-.4s-1.8.1-2.6.4l-192 66.7a7.96 7.96 0 0 0-5.4 7.5v251.1c0 2.5 1.1 4.8 3.1 6.3l192 150.2c1.4 1.1 3.2 1.7 4.9 1.7s3.5-.6 4.9-1.7l192-150.2c1.9-1.5 3.1-3.8 3.1-6.3V538.7c0-3.4-2.2-6.4-5.4-7.5zM826 763.7L688 871.6 550 763.7V577l138-48 138 48v186.7z")),t.FileSearchOutline = u("file-search", o, i(r, "M688 312v-48c0-4.4-3.6-8-8-8H296c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h384c4.4 0 8-3.6 8-8zm-392 88c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H296zm144 452H208V148h560v344c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V108c0-17.7-14.3-32-32-32H168c-17.7 0-32 14.3-32 32v784c0 17.7 14.3 32 32 32h272c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm445.7 51.5l-93.3-93.3C814.7 780.7 828 743.9 828 704c0-97.2-78.8-176-176-176s-176 78.8-176 176 78.8 176 176 176c35.8 0 69-10.7 96.8-29l94.7 94.7c1.6 1.6 3.6 2.3 5.6 2.3s4.1-.8 5.6-2.3l31-31a7.9 7.9 0 0 0 0-11.2zM652 816c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z")),t.FileJpgOutline = u("file-jpg", o, i(n, "M874.6 301.8L596.8 21.3c-4.5-4.5-9.4-8.3-14.7-11.5-1.4-.8-2.8-1.6-4.3-2.3-.9-.5-1.9-.9-2.8-1.3-9-4-18.9-6.2-29-6.2H201c-39.8 0-73 32.2-73 72v880c0 39.8 33.2 72 73 72h623c39.8 0 71-32.2 71-72V352.5c0-19-7-37.2-20.4-50.7zM583 110.4L783.8 312H583V110.4zM823 952H200V72h311v240c0 39.8 33.2 72 73 72h239v568zM350 696.5c0 24.2-7.5 31.4-21.9 31.4-9 0-18.4-5.8-24.8-18.5L272.9 732c13.4 22.9 32.3 34.2 61.3 34.2 41.6 0 60.8-29.9 60.8-66.2V577h-45v119.5zM501.3 577H437v186h44v-62h21.6c39.1 0 73.1-19.6 73.1-63.6 0-45.8-33.5-60.4-74.4-60.4zm-.8 89H481v-53h18.2c21.5 0 33.4 6.2 33.4 24.9 0 18.1-10.5 28.1-32.1 28.1zm182.5-9v36h30v30.1c-4 2.9-11 4.7-17.7 4.7-34.3 0-50.7-21.4-50.7-58.2 0-36.1 19.7-57.4 47.1-57.4 15.3 0 25 6.2 34 14.4l23.7-28.3c-12.7-12.8-32.1-24.2-59.2-24.2-49.6 0-91.1 35.3-91.1 97 0 62.7 40 95.1 91.5 95.1 25.9 0 49.2-10.2 61.5-22.6V657H683z")),t.FontColorsOutline = u("font-colors", o, i(r, "M904 816H120c-4.4 0-8 3.6-8 8v80c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-80c0-4.4-3.6-8-8-8zm-650.3-80h85c4.2 0 8-2.7 9.3-6.8l53.7-166h219.2l53.2 166c1.3 4 5 6.8 9.3 6.8h89.1c1.1 0 2.2-.2 3.2-.5a9.7 9.7 0 0 0 6-12.4L573.6 118.6a9.9 9.9 0 0 0-9.2-6.6H462.1c-4.2 0-7.9 2.6-9.2 6.6L244.5 723.1c-.4 1-.5 2.1-.5 3.2-.1 5.3 4.3 9.7 9.7 9.7zm255.9-516.1h4.1l83.8 263.8H424.9l84.7-263.8z")),t.FontSizeOutline = u("font-size", o, i(r, "M920 416H616c-4.4 0-8 3.6-8 8v112c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-56h60v320h-46c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h164c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8h-46V480h60v56c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V424c0-4.4-3.6-8-8-8zM656 296V168c0-4.4-3.6-8-8-8H104c-4.4 0-8 3.6-8 8v128c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-64h168v560h-92c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h264c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8h-92V232h168v64c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8z")),t.ForkOutline = u("fork", o, i(r, "M752 100c-61.8 0-112 50.2-112 112 0 47.7 29.9 88.5 72 104.6v27.6L512 601.4 312 344.2v-27.6c42.1-16.1 72-56.9 72-104.6 0-61.8-50.2-112-112-112s-112 50.2-112 112c0 50.6 33.8 93.5 80 107.3v34.4c0 9.7 3.3 19.3 9.3 27L476 672.3v33.6c-44.2 15-76 56.9-76 106.1 0 61.8 50.2 112 112 112s112-50.2 112-112c0-49.2-31.8-91-76-106.1v-33.6l226.7-291.6c6-7.7 9.3-17.3 9.3-27v-34.4c46.2-13.8 80-56.7 80-107.3 0-61.8-50.2-112-112-112zM224 212a48.01 48.01 0 0 1 96 0 48.01 48.01 0 0 1-96 0zm336 600a48.01 48.01 0 0 1-96 0 48.01 48.01 0 0 1 96 0zm192-552a48.01 48.01 0 0 1 0-96 48.01 48.01 0 0 1 0 96z")),t.FormOutline = u("form", o, i(r, "M904 512h-56c-4.4 0-8 3.6-8 8v320H184V184h320c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V520c0-4.4-3.6-8-8-8z", "M355.9 534.9L354 653.8c-.1 8.9 7.1 16.2 16 16.2h.4l118-2.9c2-.1 4-.9 5.4-2.3l415.9-415c3.1-3.1 3.1-8.2 0-11.3L785.4 114.3c-1.6-1.6-3.6-2.3-5.7-2.3s-4.1.8-5.7 2.3l-415.8 415a8.3 8.3 0 0 0-2.3 5.6zm63.5 23.6L779.7 199l45.2 45.1-360.5 359.7-45.7 1.1.7-46.4z")),t.FullscreenExitOutline = u("fullscreen-exit", o, i(r, "M391 240.9c-.8-6.6-8.9-9.4-13.6-4.7l-43.7 43.7L200 146.3a8.03 8.03 0 0 0-11.3 0l-42.4 42.3a8.03 8.03 0 0 0 0 11.3L280 333.6l-43.9 43.9a8.01 8.01 0 0 0 4.7 13.6L401 410c5.1.6 9.5-3.7 8.9-8.9L391 240.9zm10.1 373.2L240.8 633c-6.6.8-9.4 8.9-4.7 13.6l43.9 43.9L146.3 824a8.03 8.03 0 0 0 0 11.3l42.4 42.3c3.1 3.1 8.2 3.1 11.3 0L333.7 744l43.7 43.7A8.01 8.01 0 0 0 391 783l18.9-160.1c.6-5.1-3.7-9.4-8.8-8.8zm221.8-204.2L783.2 391c6.6-.8 9.4-8.9 4.7-13.6L744 333.6 877.7 200c3.1-3.1 3.1-8.2 0-11.3l-42.4-42.3a8.03 8.03 0 0 0-11.3 0L690.3 279.9l-43.7-43.7a8.01 8.01 0 0 0-13.6 4.7L614.1 401c-.6 5.2 3.7 9.5 8.8 8.9zM744 690.4l43.9-43.9a8.01 8.01 0 0 0-4.7-13.6L623 614c-5.1-.6-9.5 3.7-8.9 8.9L633 783.1c.8 6.6 8.9 9.4 13.6 4.7l43.7-43.7L824 877.7c3.1 3.1 8.2 3.1 11.3 0l42.4-42.3c3.1-3.1 3.1-8.2 0-11.3L744 690.4z")),t.FullscreenOutline = u("fullscreen", o, i(r, "M290 236.4l43.9-43.9a8.01 8.01 0 0 0-4.7-13.6L169 160c-5.1-.6-9.5 3.7-8.9 8.9L179 329.1c.8 6.6 8.9 9.4 13.6 4.7l43.7-43.7L370 423.7c3.1 3.1 8.2 3.1 11.3 0l42.4-42.3c3.1-3.1 3.1-8.2 0-11.3L290 236.4zm352.7 187.3c3.1 3.1 8.2 3.1 11.3 0l133.7-133.6 43.7 43.7a8.01 8.01 0 0 0 13.6-4.7L863.9 169c.6-5.1-3.7-9.5-8.9-8.9L694.8 179c-6.6.8-9.4 8.9-4.7 13.6l43.9 43.9L600.3 370a8.03 8.03 0 0 0 0 11.3l42.4 42.4zM845 694.9c-.8-6.6-8.9-9.4-13.6-4.7l-43.7 43.7L654 600.3a8.03 8.03 0 0 0-11.3 0l-42.4 42.3a8.03 8.03 0 0 0 0 11.3L734 787.6l-43.9 43.9a8.01 8.01 0 0 0 4.7 13.6L855 864c5.1.6 9.5-3.7 8.9-8.9L845 694.9zm-463.7-94.6a8.03 8.03 0 0 0-11.3 0L236.3 733.9l-43.7-43.7a8.01 8.01 0 0 0-13.6 4.7L160.1 855c-.6 5.1 3.7 9.5 8.9 8.9L329.2 845c6.6-.8 9.4-8.9 4.7-13.6L290 787.6 423.7 654c3.1-3.1 3.1-8.2 0-11.3l-42.4-42.4z")),t.GatewayOutline = u("gateway", o, i(r, "M928 392c8.8 0 16-7.2 16-16V192c0-8.8-7.2-16-16-16H744c-8.8 0-16 7.2-16 16v56H296v-56c0-8.8-7.2-16-16-16H96c-8.8 0-16 7.2-16 16v184c0 8.8 7.2 16 16 16h56v240H96c-8.8 0-16 7.2-16 16v184c0 8.8 7.2 16 16 16h184c8.8 0 16-7.2 16-16v-56h432v56c0 8.8 7.2 16 16 16h184c8.8 0 16-7.2 16-16V648c0-8.8-7.2-16-16-16h-56V392h56zM792 240h88v88h-88v-88zm-648 88v-88h88v88h-88zm88 456h-88v-88h88v88zm648-88v88h-88v-88h88zm-80-64h-56c-8.8 0-16 7.2-16 16v56H296v-56c0-8.8-7.2-16-16-16h-56V392h56c8.8 0 16-7.2 16-16v-56h432v56c0 8.8 7.2 16 16 16h56v240z")),t.DownOutline = u("down", o, i(r, "M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z")),t.DragOutline = u("drag", o, i(r, "M909.3 506.3L781.7 405.6a7.23 7.23 0 0 0-11.7 5.7V476H548V254h64.8c6 0 9.4-7 5.7-11.7L517.7 114.7a7.14 7.14 0 0 0-11.3 0L405.6 242.3a7.23 7.23 0 0 0 5.7 11.7H476v222H254v-64.8c0-6-7-9.4-11.7-5.7L114.7 506.3a7.14 7.14 0 0 0 0 11.3l127.5 100.8c4.7 3.7 11.7.4 11.7-5.7V548h222v222h-64.8c-6 0-9.4 7-5.7 11.7l100.8 127.5c2.9 3.7 8.5 3.7 11.3 0l100.8-127.5c3.7-4.7.4-11.7-5.7-11.7H548V548h222v64.8c0 6 7 9.4 11.7 5.7l127.5-100.8a7.3 7.3 0 0 0 .1-11.4z")),t.GlobalOutline = u("global", o, i(r, "M854.4 800.9c.2-.3.5-.6.7-.9C920.6 722.1 960 621.7 960 512s-39.4-210.1-104.8-288c-.2-.3-.5-.5-.7-.8-1.1-1.3-2.1-2.5-3.2-3.7-.4-.5-.8-.9-1.2-1.4l-4.1-4.7-.1-.1c-1.5-1.7-3.1-3.4-4.6-5.1l-.1-.1c-3.2-3.4-6.4-6.8-9.7-10.1l-.1-.1-4.8-4.8-.3-.3c-1.5-1.5-3-2.9-4.5-4.3-.5-.5-1-1-1.6-1.5-1-1-2-1.9-3-2.8-.3-.3-.7-.6-1-1C736.4 109.2 629.5 64 512 64s-224.4 45.2-304.3 119.2c-.3.3-.7.6-1 1-1 .9-2 1.9-3 2.9-.5.5-1 1-1.6 1.5-1.5 1.4-3 2.9-4.5 4.3l-.3.3-4.8 4.8-.1.1c-3.3 3.3-6.5 6.7-9.7 10.1l-.1.1c-1.6 1.7-3.1 3.4-4.6 5.1l-.1.1c-1.4 1.5-2.8 3.1-4.1 4.7-.4.5-.8.9-1.2 1.4-1.1 1.2-2.1 2.5-3.2 3.7-.2.3-.5.5-.7.8C103.4 301.9 64 402.3 64 512s39.4 210.1 104.8 288c.2.3.5.6.7.9l3.1 3.7c.4.5.8.9 1.2 1.4l4.1 4.7c0 .1.1.1.1.2 1.5 1.7 3 3.4 4.6 5l.1.1c3.2 3.4 6.4 6.8 9.6 10.1l.1.1c1.6 1.6 3.1 3.2 4.7 4.7l.3.3c3.3 3.3 6.7 6.5 10.1 9.6 80.1 74 187 119.2 304.5 119.2s224.4-45.2 304.3-119.2a300 300 0 0 0 10-9.6l.3-.3c1.6-1.6 3.2-3.1 4.7-4.7l.1-.1c3.3-3.3 6.5-6.7 9.6-10.1l.1-.1c1.5-1.7 3.1-3.3 4.6-5 0-.1.1-.1.1-.2 1.4-1.5 2.8-3.1 4.1-4.7.4-.5.8-.9 1.2-1.4a99 99 0 0 0 3.3-3.7zm4.1-142.6c-13.8 32.6-32 62.8-54.2 90.2a444.07 444.07 0 0 0-81.5-55.9c11.6-46.9 18.8-98.4 20.7-152.6H887c-3 40.9-12.6 80.6-28.5 118.3zM887 484H743.5c-1.9-54.2-9.1-105.7-20.7-152.6 29.3-15.6 56.6-34.4 81.5-55.9A373.86 373.86 0 0 1 887 484zM658.3 165.5c39.7 16.8 75.8 40 107.6 69.2a394.72 394.72 0 0 1-59.4 41.8c-15.7-45-35.8-84.1-59.2-115.4 3.7 1.4 7.4 2.9 11 4.4zm-90.6 700.6c-9.2 7.2-18.4 12.7-27.7 16.4V697a389.1 389.1 0 0 1 115.7 26.2c-8.3 24.6-17.9 47.3-29 67.8-17.4 32.4-37.8 58.3-59 75.1zm59-633.1c11 20.6 20.7 43.3 29 67.8A389.1 389.1 0 0 1 540 327V141.6c9.2 3.7 18.5 9.1 27.7 16.4 21.2 16.7 41.6 42.6 59 75zM540 640.9V540h147.5c-1.6 44.2-7.1 87.1-16.3 127.8l-.3 1.2A445.02 445.02 0 0 0 540 640.9zm0-156.9V383.1c45.8-2.8 89.8-12.5 130.9-28.1l.3 1.2c9.2 40.7 14.7 83.5 16.3 127.8H540zm-56 56v100.9c-45.8 2.8-89.8 12.5-130.9 28.1l-.3-1.2c-9.2-40.7-14.7-83.5-16.3-127.8H484zm-147.5-56c1.6-44.2 7.1-87.1 16.3-127.8l.3-1.2c41.1 15.6 85 25.3 130.9 28.1V484H336.5zM484 697v185.4c-9.2-3.7-18.5-9.1-27.7-16.4-21.2-16.7-41.7-42.7-59.1-75.1-11-20.6-20.7-43.3-29-67.8 37.2-14.6 75.9-23.3 115.8-26.1zm0-370a389.1 389.1 0 0 1-115.7-26.2c8.3-24.6 17.9-47.3 29-67.8 17.4-32.4 37.8-58.4 59.1-75.1 9.2-7.2 18.4-12.7 27.7-16.4V327zM365.7 165.5c3.7-1.5 7.3-3 11-4.4-23.4 31.3-43.5 70.4-59.2 115.4-21-12-40.9-26-59.4-41.8 31.8-29.2 67.9-52.4 107.6-69.2zM165.5 365.7c13.8-32.6 32-62.8 54.2-90.2 24.9 21.5 52.2 40.3 81.5 55.9-11.6 46.9-18.8 98.4-20.7 152.6H137c3-40.9 12.6-80.6 28.5-118.3zM137 540h143.5c1.9 54.2 9.1 105.7 20.7 152.6a444.07 444.07 0 0 0-81.5 55.9A373.86 373.86 0 0 1 137 540zm228.7 318.5c-39.7-16.8-75.8-40-107.6-69.2 18.5-15.8 38.4-29.7 59.4-41.8 15.7 45 35.8 84.1 59.2 115.4-3.7-1.4-7.4-2.9-11-4.4zm292.6 0c-3.7 1.5-7.3 3-11 4.4 23.4-31.3 43.5-70.4 59.2-115.4 21 12 40.9 26 59.4 41.8a373.81 373.81 0 0 1-107.6 69.2z")),t.GooglePlusOutline = u("google-plus", o, i(r, "M879.5 470.4c-.3-27-.4-54.2-.5-81.3h-80.8c-.3 27-.5 54.1-.7 81.3-27.2.1-54.2.3-81.2.6v80.9c27 .3 54.2.5 81.2.8.3 27 .3 54.1.5 81.1h80.9c.1-27 .3-54.1.5-81.3 27.2-.3 54.2-.4 81.2-.7v-80.9c-26.9-.2-54.1-.2-81.1-.5zm-530 .4c-.1 32.3 0 64.7.1 97 54.2 1.8 108.5 1 162.7 1.8-23.9 120.3-187.4 159.3-273.9 80.7-89-68.9-84.8-220 7.7-284 64.7-51.6 156.6-38.9 221.3 5.8 25.4-23.5 49.2-48.7 72.1-74.7-53.8-42.9-119.8-73.5-190-70.3-146.6-4.9-281.3 123.5-283.7 270.2-9.4 119.9 69.4 237.4 180.6 279.8 110.8 42.7 252.9 13.6 323.7-86 46.7-62.9 56.8-143.9 51.3-220-90.7-.7-181.3-.6-271.9-.3z")),t.GoogleOutline = u("google", o, i(r, "M881 442.4H519.7v148.5h206.4c-8.9 48-35.9 88.6-76.6 115.8-34.4 23-78.3 36.6-129.9 36.6-99.9 0-184.4-67.5-214.6-158.2-7.6-23-12-47.6-12-72.9s4.4-49.9 12-72.9c30.3-90.6 114.8-158.1 214.7-158.1 56.3 0 106.8 19.4 146.6 57.4l110-110.1c-66.5-62-153.2-100-256.6-100-149.9 0-279.6 86-342.7 211.4-26 51.8-40.8 110.4-40.8 172.4S151 632.8 177 684.6C240.1 810 369.8 896 519.7 896c103.6 0 190.4-34.4 253.8-93 72.5-66.8 114.4-165.2 114.4-282.1 0-27.2-2.4-53.3-6.9-78.5z")),t.HeatMapOutline = u("heat-map", o, i(r, "M955.7 856l-416-720c-6.2-10.7-16.9-16-27.7-16s-21.6 5.3-27.7 16l-416 720C56 877.4 71.4 904 96 904h832c24.6 0 40-26.6 27.7-48zm-790.4-23.9L512 231.9 858.7 832H165.3zm319-474.1l-228 394c-12.3 21.3 3.1 48 27.7 48h455.8c24.7 0 40.1-26.7 27.7-48L539.7 358c-6.2-10.7-17-16-27.7-16-10.8 0-21.6 5.3-27.7 16zm214 386H325.7L512 422l186.3 322zm-214-194.1l-57 98.4C415 669.5 430.4 696 455 696h114c24.6 0 39.9-26.5 27.7-47.7l-57-98.4c-6.1-10.6-16.9-15.9-27.7-15.9s-21.5 5.3-27.7 15.9zm57.1 98.4h-58.7l29.4-50.7 29.3 50.7z")),t.GoldOutline = u("gold", o, i(r, "M342 472h342c.4 0 .9 0 1.3-.1 4.4-.7 7.3-4.8 6.6-9.2l-40.2-248c-.6-3.9-4-6.7-7.9-6.7H382.2c-3.9 0-7.3 2.8-7.9 6.7l-40.2 248c-.1.4-.1.9-.1 1.3 0 4.4 3.6 8 8 8zm91.2-196h159.5l20.7 128h-201l20.8-128zm2.5 282.7c-.6-3.9-4-6.7-7.9-6.7H166.2c-3.9 0-7.3 2.8-7.9 6.7l-40.2 248c-.1.4-.1.9-.1 1.3 0 4.4 3.6 8 8 8h342c.4 0 .9 0 1.3-.1 4.4-.7 7.3-4.8 6.6-9.2l-40.2-248zM196.5 748l20.7-128h159.5l20.7 128H196.5zm709.4 58.7l-40.2-248c-.6-3.9-4-6.7-7.9-6.7H596.2c-3.9 0-7.3 2.8-7.9 6.7l-40.2 248c-.1.4-.1.9-.1 1.3 0 4.4 3.6 8 8 8h342c.4 0 .9 0 1.3-.1 4.3-.7 7.3-4.8 6.6-9.2zM626.5 748l20.7-128h159.5l20.7 128H626.5z")),t.HistoryOutline = u("history", o, i(r, "M536.1 273H488c-4.4 0-8 3.6-8 8v275.3c0 2.6 1.2 5 3.3 6.5l165.3 120.7c3.6 2.6 8.6 1.9 11.2-1.7l28.6-39c2.7-3.7 1.9-8.7-1.7-11.2L544.1 528.5V281c0-4.4-3.6-8-8-8zm219.8 75.2l156.8 38.3c5 1.2 9.9-2.6 9.9-7.7l.8-161.5c0-6.7-7.7-10.5-12.9-6.3L752.9 334.1a8 8 0 0 0 3 14.1zm167.7 301.1l-56.7-19.5a8 8 0 0 0-10.1 4.8c-1.9 5.1-3.9 10.1-6 15.1-17.8 42.1-43.3 80-75.9 112.5a353 353 0 0 1-112.5 75.9 352.18 352.18 0 0 1-137.7 27.8c-47.8 0-94.1-9.3-137.7-27.8a353 353 0 0 1-112.5-75.9c-32.5-32.5-58-70.4-75.9-112.5A353.44 353.44 0 0 1 171 512c0-47.8 9.3-94.2 27.8-137.8 17.8-42.1 43.3-80 75.9-112.5a353 353 0 0 1 112.5-75.9C430.6 167.3 477 158 524.8 158s94.1 9.3 137.7 27.8A353 353 0 0 1 775 261.7c10.2 10.3 19.8 21 28.6 32.3l59.8-46.8C784.7 146.6 662.2 81.9 524.6 82 285 82.1 92.6 276.7 95 516.4 97.4 751.9 288.9 942 524.8 942c185.5 0 343.5-117.6 403.7-282.3 1.5-4.2-.7-8.9-4.9-10.4z")),t.IeOutline = u("ie", o, i(r, "M852.6 367.6c16.3-36.9 32.1-90.7 32.1-131.8 0-109.1-119.5-147.6-314.5-57.9-161.4-10.8-316.8 110.5-355.6 279.7 46.3-52.3 117.4-123.4 183-151.7C316.1 378.3 246.7 470 194 565.6c-31.1 56.9-66 148.8-66 217.5 0 147.9 139.3 129.8 270.4 63 47.1 23.1 99.8 23.4 152.5 23.4 145.7 0 276.4-81.4 325.2-219H694.9c-78.8 132.9-295.2 79.5-295.2-71.2h493.2c9.6-65.4-2.5-143.6-40.3-211.7zM224.8 648.3c26.6 76.7 80.6 143.8 150.4 185-133.1 73.4-259.9 43.6-150.4-185zm174-163.3c3-82.7 75.4-142.3 156-142.3 80.1 0 153 59.6 156 142.3h-312zm276.8-281.4c32.1-15.4 72.8-33 108.8-33 47.1 0 81.4 32.6 81.4 80.6 0 30-11.1 73.5-21.9 101.8-39.3-63.5-98.9-122.4-168.3-149.4z")),t.InboxOutline = u("inbox", o, i(n, "M885.2 446.3l-.2-.8-112.2-285.1c-5-16.1-19.9-27.2-36.8-27.2H281.2c-17 0-32.1 11.3-36.9 27.6L139.4 443l-.3.7-.2.8c-1.3 4.9-1.7 9.9-1 14.8-.1 1.6-.2 3.2-.2 4.8V830a60.9 60.9 0 0 0 60.8 60.8h627.2c33.5 0 60.8-27.3 60.9-60.8V464.1c0-1.3 0-2.6-.1-3.7.4-4.9 0-9.6-1.3-14.1zm-295.8-43l-.3 15.7c-.8 44.9-31.8 75.1-77.1 75.1-22.1 0-41.1-7.1-54.8-20.6S436 441.2 435.6 419l-.3-15.7H229.5L309 210h399.2l81.7 193.3H589.4zm-375 76.8h157.3c24.3 57.1 76 90.8 140.4 90.8 33.7 0 65-9.4 90.3-27.2 22.2-15.6 39.5-37.4 50.7-63.6h156.5V814H214.4V480.1z")),t.ImportOutline = u("import", o, i(r, "M888.3 757.4h-53.8c-4.2 0-7.7 3.5-7.7 7.7v61.8H197.1V197.1h629.8v61.8c0 4.2 3.5 7.7 7.7 7.7h53.8c4.2 0 7.7-3.4 7.7-7.7V158.7c0-17-13.7-30.7-30.7-30.7H158.7c-17 0-30.7 13.7-30.7 30.7v706.6c0 17 13.7 30.7 30.7 30.7h706.6c17 0 30.7-13.7 30.7-30.7V765.1c0-4.3-3.5-7.7-7.7-7.7zM902 476H588v-76c0-6.7-7.8-10.5-13-6.3l-141.9 112a8 8 0 0 0 0 12.6l141.9 112c5.3 4.2 13 .4 13-6.3v-76h314c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8z")),t.InfoOutline = u("info", o, i(r, "M448 224a64 64 0 1 0 128 0 64 64 0 1 0-128 0zm96 168h-64c-4.4 0-8 3.6-8 8v464c0 4.4 3.6 8 8 8h64c4.4 0 8-3.6 8-8V400c0-4.4-3.6-8-8-8z")),t.ItalicOutline = u("italic", o, i(r, "M798 160H366c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h181.2l-156 544H229c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h432c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8H474.4l156-544H798c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z")),t.IssuesCloseOutline = u("issues-close", o, i(r, "M464 688a48 48 0 1 0 96 0 48 48 0 1 0-96 0zm72-112c4.4 0 8-3.6 8-8V296c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8h48zm400-188h-59.3c-2.6 0-5 1.2-6.5 3.3L763.7 538.1l-49.9-68.8a7.92 7.92 0 0 0-6.5-3.3H648c-6.5 0-10.3 7.4-6.5 12.7l109.2 150.7a16.1 16.1 0 0 0 26 0l165.8-228.7c3.8-5.3 0-12.7-6.5-12.7zm-44 306h-64.2c-5.5 0-10.6 2.9-13.6 7.5a352.2 352.2 0 0 1-49.8 62.2A355.92 355.92 0 0 1 651.1 840a355 355 0 0 1-138.7 27.9c-48.1 0-94.8-9.4-138.7-27.9a355.92 355.92 0 0 1-113.3-76.3A353.06 353.06 0 0 1 184 650.5c-18.6-43.8-28-90.5-28-138.5s9.4-94.7 28-138.5c17.9-42.4 43.6-80.5 76.4-113.2 32.8-32.7 70.9-58.4 113.3-76.3a355 355 0 0 1 138.7-27.9c48.1 0 94.8 9.4 138.7 27.9 42.4 17.9 80.5 43.6 113.3 76.3 19 19 35.6 39.8 49.8 62.2 2.9 4.7 8.1 7.5 13.6 7.5H892c6 0 9.8-6.3 7.2-11.6C828.8 178.5 684.7 82 517.7 80 278.9 77.2 80.5 272.5 80 511.2 79.5 750.1 273.3 944 512.4 944c169.2 0 315.6-97 386.7-238.4A8 8 0 0 0 892 694z")),t.KeyOutline = u("key", o, i(r, "M608 112c-167.9 0-304 136.1-304 304 0 70.3 23.9 135 63.9 186.5l-41.1 41.1-62.3-62.3a8.15 8.15 0 0 0-11.4 0l-39.8 39.8a8.15 8.15 0 0 0 0 11.4l62.3 62.3-44.9 44.9-62.3-62.3a8.15 8.15 0 0 0-11.4 0l-39.8 39.8a8.15 8.15 0 0 0 0 11.4l62.3 62.3-65.3 65.3a8.03 8.03 0 0 0 0 11.3l42.3 42.3c3.1 3.1 8.2 3.1 11.3 0l253.6-253.6A304.06 304.06 0 0 0 608 720c167.9 0 304-136.1 304-304S775.9 112 608 112zm161.2 465.2C726.2 620.3 668.9 644 608 644c-60.9 0-118.2-23.7-161.2-66.8-43.1-43-66.8-100.3-66.8-161.2 0-60.9 23.7-118.2 66.8-161.2 43-43.1 100.3-66.8 161.2-66.8 60.9 0 118.2 23.7 161.2 66.8 43.1 43 66.8 100.3 66.8 161.2 0 60.9-23.7 118.2-66.8 161.2z")),t.LaptopOutline = u("laptop", o, i(r, "M956.9 845.1L896.4 632V168c0-17.7-14.3-32-32-32h-704c-17.7 0-32 14.3-32 32v464L67.9 845.1C60.4 866 75.8 888 98 888h828.8c22.2 0 37.6-22 30.1-42.9zM200.4 208h624v395h-624V208zm228.3 608l8.1-37h150.3l8.1 37H428.7zm224 0l-19.1-86.7c-.8-3.7-4.1-6.3-7.8-6.3H398.2c-3.8 0-7 2.6-7.8 6.3L371.3 816H151l42.3-149h638.2l42.3 149H652.7z")),t.LeftOutline = u("left", o, i(r, "M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 0 0 0 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z")),t.LinkOutline = u("link", o, i(r, "M574 665.4a8.03 8.03 0 0 0-11.3 0L446.5 781.6c-53.8 53.8-144.6 59.5-204 0-59.5-59.5-53.8-150.2 0-204l116.2-116.2c3.1-3.1 3.1-8.2 0-11.3l-39.8-39.8a8.03 8.03 0 0 0-11.3 0L191.4 526.5c-84.6 84.6-84.6 221.5 0 306s221.5 84.6 306 0l116.2-116.2c3.1-3.1 3.1-8.2 0-11.3L574 665.4zm258.6-474c-84.6-84.6-221.5-84.6-306 0L410.3 307.6a8.03 8.03 0 0 0 0 11.3l39.7 39.7c3.1 3.1 8.2 3.1 11.3 0l116.2-116.2c53.8-53.8 144.6-59.5 204 0 59.5 59.5 53.8 150.2 0 204L665.3 562.6a8.03 8.03 0 0 0 0 11.3l39.8 39.8c3.1 3.1 8.2 3.1 11.3 0l116.2-116.2c84.5-84.6 84.5-221.5 0-306.1zM610.1 372.3a8.03 8.03 0 0 0-11.3 0L372.3 598.7a8.03 8.03 0 0 0 0 11.3l39.6 39.6c3.1 3.1 8.2 3.1 11.3 0l226.4-226.4c3.1-3.1 3.1-8.2 0-11.3l-39.5-39.6z")),t.LineChartOutline = u("line-chart", o, i(r, "M888 792H200V168c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v688c0 4.4 3.6 8 8 8h752c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM305.8 637.7c3.1 3.1 8.1 3.1 11.3 0l138.3-137.6L583 628.5c3.1 3.1 8.2 3.1 11.3 0l275.4-275.3c3.1-3.1 3.1-8.2 0-11.3l-39.6-39.6a8.03 8.03 0 0 0-11.3 0l-230 229.9L461.4 404a8.03 8.03 0 0 0-11.3 0L266.3 586.7a8.03 8.03 0 0 0 0 11.3l39.5 39.7z")),t.LineHeightOutline = u("line-height", o, i(r, "M648 160H104c-4.4 0-8 3.6-8 8v128c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-64h168v560h-92c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h264c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8h-92V232h168v64c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V168c0-4.4-3.6-8-8-8zm272.8 546H856V318h64.8c6 0 9.4-7 5.7-11.7L825.7 178.7a7.14 7.14 0 0 0-11.3 0L713.6 306.3a7.23 7.23 0 0 0 5.7 11.7H784v388h-64.8c-6 0-9.4 7-5.7 11.7l100.8 127.5c2.9 3.7 8.5 3.7 11.3 0l100.8-127.5a7.2 7.2 0 0 0-5.6-11.7z")),t.LineOutline = u("line", o, i(r, "M904 476H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8z")),t.Loading3QuartersOutline = u("loading-3-quarters", o, i(n, "M512 1024c-69.1 0-136.2-13.5-199.3-40.2C251.7 958 197 921 150 874c-47-47-84-101.7-109.8-162.7C13.5 648.2 0 581.1 0 512c0-19.9 16.1-36 36-36s36 16.1 36 36c0 59.4 11.6 117 34.6 171.3 22.2 52.4 53.9 99.5 94.3 139.9 40.4 40.4 87.5 72.2 139.9 94.3C395 940.4 452.6 952 512 952c59.4 0 117-11.6 171.3-34.6 52.4-22.2 99.5-53.9 139.9-94.3 40.4-40.4 72.2-87.5 94.3-139.9C940.4 629 952 571.4 952 512c0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 0 0-94.3-139.9 437.71 437.71 0 0 0-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.2C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3s-13.5 136.2-40.2 199.3C958 772.3 921 827 874 874c-47 47-101.8 83.9-162.7 109.7-63.1 26.8-130.2 40.3-199.3 40.3z")),t.LoadingOutline = u("loading", o, i(n, "M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 0 0-94.3-139.9 437.71 437.71 0 0 0-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z")),t.LoginOutline = u("login", o, i(r, "M521.7 82c-152.5-.4-286.7 78.5-363.4 197.7-3.4 5.3.4 12.3 6.7 12.3h70.3c4.8 0 9.3-2.1 12.3-5.8 7-8.5 14.5-16.7 22.4-24.5 32.6-32.5 70.5-58.1 112.7-75.9 43.6-18.4 90-27.8 137.9-27.8 47.9 0 94.3 9.3 137.9 27.8 42.2 17.8 80.1 43.4 112.7 75.9 32.6 32.5 58.1 70.4 76 112.5C865.7 417.8 875 464.1 875 512c0 47.9-9.4 94.2-27.8 137.8-17.8 42.1-43.4 80-76 112.5s-70.5 58.1-112.7 75.9A352.8 352.8 0 0 1 520.6 866c-47.9 0-94.3-9.4-137.9-27.8A353.84 353.84 0 0 1 270 762.3c-7.9-7.9-15.3-16.1-22.4-24.5-3-3.7-7.6-5.8-12.3-5.8H165c-6.3 0-10.2 7-6.7 12.3C234.9 863.2 368.5 942 520.6 942c236.2 0 428-190.1 430.4-425.6C953.4 277.1 761.3 82.6 521.7 82zM395.02 624v-76h-314c-4.4 0-8-3.6-8-8v-56c0-4.4 3.6-8 8-8h314v-76c0-6.7 7.8-10.5 13-6.3l141.9 112a8 8 0 0 1 0 12.6l-141.9 112c-5.2 4.1-13 .4-13-6.3z")),t.LogoutOutline = u("logout", o, i(r, "M868 732h-70.3c-4.8 0-9.3 2.1-12.3 5.8-7 8.5-14.5 16.7-22.4 24.5a353.84 353.84 0 0 1-112.7 75.9A352.8 352.8 0 0 1 512.4 866c-47.9 0-94.3-9.4-137.9-27.8a353.84 353.84 0 0 1-112.7-75.9 353.28 353.28 0 0 1-76-112.5C167.3 606.2 158 559.9 158 512s9.4-94.2 27.8-137.8c17.8-42.1 43.4-80 76-112.5s70.5-58.1 112.7-75.9c43.6-18.4 90-27.8 137.9-27.8 47.9 0 94.3 9.3 137.9 27.8 42.2 17.8 80.1 43.4 112.7 75.9 7.9 7.9 15.3 16.1 22.4 24.5 3 3.7 7.6 5.8 12.3 5.8H868c6.3 0 10.2-7 6.7-12.3C798 160.5 663.8 81.6 511.3 82 271.7 82.6 79.6 277.1 82 516.4 84.4 751.9 276.2 942 512.4 942c152.1 0 285.7-78.8 362.3-197.7 3.4-5.3-.4-12.3-6.7-12.3zm88.9-226.3L815 393.7c-5.3-4.2-13-.4-13 6.3v76H488c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h314v76c0 6.7 7.8 10.5 13 6.3l141.9-112a8 8 0 0 0 0-12.6z")),t.ManOutline = u("man", o, i(r, "M874 120H622c-3.3 0-6 2.7-6 6v56c0 3.3 2.7 6 6 6h160.4L583.1 387.3c-50-38.5-111-59.3-175.1-59.3-76.9 0-149.3 30-203.6 84.4S120 539.1 120 616s30 149.3 84.4 203.6C258.7 874 331.1 904 408 904s149.3-30 203.6-84.4C666 765.3 696 692.9 696 616c0-64.1-20.8-124.9-59.2-174.9L836 241.9V402c0 3.3 2.7 6 6 6h56c3.3 0 6-2.7 6-6V150c0-16.5-13.5-30-30-30zM408 828c-116.9 0-212-95.1-212-212s95.1-212 212-212 212 95.1 212 212-95.1 212-212 212z")),t.MediumOutline = u("medium", o, i(r, "M834.7 279.8l61.3-58.9V208H683.7L532.4 586.4 360.3 208H137.7v12.9l71.6 86.6c7 6.4 10.6 15.8 9.7 25.2V673c2.2 12.3-1.7 24.8-10.3 33.7L128 805v12.7h228.6v-12.9l-80.6-98a39.99 39.99 0 0 1-11.1-33.7V378.7l200.7 439.2h23.3l172.6-439.2v349.9c0 9.2 0 11.1-6 17.2l-62.1 60.3V819h301.2v-12.9l-59.9-58.9c-5.2-4-7.9-10.7-6.8-17.2V297a18.1 18.1 0 0 1 6.8-17.2z")),t.MediumWorkmarkOutline = u("medium-workmark", o, i(n, "M517.2 590.55c0 3.55 0 4.36 2.4 6.55l13.43 13.25v.57h-59.57v-25.47a41.44 41.44 0 0 1-39.5 27.65c-30.61 0-52.84-24.25-52.84-68.87 0-41.8 23.99-69.69 57.65-69.69a35.15 35.15 0 0 1 34.61 21.67v-56.19a6.99 6.99 0 0 0-2.71-6.79l-12.8-12.45v-.56l59.33-7.04v177.37zm-43.74-8.09v-83.83a22.2 22.2 0 0 0-17.74-8.4c-14.48 0-28.47 13.25-28.47 52.62 0 36.86 12.07 49.88 27.1 49.88a23.91 23.91 0 0 0 19.11-10.27zm83.23 28.46V497.74a7.65 7.65 0 0 0-2.4-6.79l-13.19-13.74v-.57h59.56v114.8c0 3.55 0 4.36 2.4 6.54l13.12 12.45v.57l-59.49-.08zm-2.16-175.67c0-13.4 10.74-24.25 23.99-24.25 13.25 0 23.98 10.86 23.98 24.25 0 13.4-10.73 24.25-23.98 24.25s-23.99-10.85-23.99-24.25zm206.83 155.06c0 3.55 0 4.6 2.4 6.79l13.43 13.25v.57h-59.88V581.9a43.4 43.4 0 0 1-41.01 31.2c-26.55 0-40.78-19.56-40.78-56.59 0-17.86 0-37.43.56-59.41a6.91 6.91 0 0 0-2.4-6.55L620.5 477.2v-.57h59.09v73.81c0 24.25 3.51 40.42 18.54 40.42a23.96 23.96 0 0 0 19.35-12.2v-80.85a7.65 7.65 0 0 0-2.4-6.79l-13.27-13.82v-.57h59.56V590.3zm202.76 20.6c0-4.36.8-59.97.8-72.75 0-24.25-3.76-40.98-20.63-40.98a26.7 26.7 0 0 0-21.19 11.64 99.68 99.68 0 0 1 2.4 23.04c0 16.81-.56 38.23-.8 59.66a6.91 6.91 0 0 0 2.4 6.55l13.43 12.45v.56h-60.12c0-4.04.8-59.98.8-72.76 0-24.65-3.76-40.98-20.39-40.98-8.2.3-15.68 4.8-19.83 11.96v82.46c0 3.56 0 4.37 2.4 6.55l13.11 12.45v.56h-59.48V498.15a7.65 7.65 0 0 0-2.4-6.8l-13.19-14.14v-.57H841v28.78c5.53-19 23.13-31.76 42.7-30.96 19.82 0 33.26 11.16 38.93 32.34a46.41 46.41 0 0 1 44.77-32.34c26.55 0 41.58 19.8 41.58 57.23 0 17.87-.56 38.24-.8 59.66a6.5 6.5 0 0 0 2.72 6.55l13.11 12.45v.57h-59.88zM215.87 593.3l17.66 17.05v.57h-89.62v-.57l17.99-17.05a6.91 6.91 0 0 0 2.4-6.55V477.69c0-4.6 0-10.83.8-16.16L104.66 613.1h-.72l-62.6-139.45c-1.37-3.47-1.77-3.72-2.65-6.06v91.43a32.08 32.08 0 0 0 2.96 17.87l25.19 33.46v.57H0v-.57l25.18-33.55a32.16 32.16 0 0 0 2.96-17.78V457.97A19.71 19.71 0 0 0 24 444.15L6.16 420.78v-.56h63.96l53.56 118.1 47.17-118.1h62.6v.56l-17.58 19.8a6.99 6.99 0 0 0-2.72 6.8v139.37a6.5 6.5 0 0 0 2.72 6.55zm70.11-54.65v.56c0 34.6 17.67 48.5 38.38 48.5a43.5 43.5 0 0 0 40.77-24.97h.56c-7.2 34.2-28.14 50.36-59.48 50.36-33.82 0-65.72-20.61-65.72-68.39 0-50.2 31.98-70.25 67.32-70.25 28.46 0 58.76 13.58 58.76 57.24v6.95h-80.59zm0-6.95h39.42v-7.04c0-35.57-7.28-45.03-18.23-45.03-13.27 0-21.35 14.15-21.35 52.07h.16z")),t.MenuUnfoldOutline = u("menu-unfold", o, i(r, "M408 442h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm-8 204c0 4.4 3.6 8 8 8h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56zm504-486H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 632H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM142.4 642.1L298.7 519a8.84 8.84 0 0 0 0-13.9L142.4 381.9c-5.8-4.6-14.4-.5-14.4 6.9v246.3a8.9 8.9 0 0 0 14.4 7z")),t.MenuFoldOutline = u("menu-fold", o, i(r, "M408 442h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm-8 204c0 4.4 3.6 8 8 8h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56zm504-486H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 632H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM115.4 518.9L271.7 642c5.8 4.6 14.4.5 14.4-6.9V388.9c0-7.4-8.5-11.5-14.4-6.9L115.4 505.1a8.74 8.74 0 0 0 0 13.8z")),t.MenuOutline = u("menu", o, i(r, "M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z")),t.MinusOutline = u("minus", o, i(r, "M872 474H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h720c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z")),t.MonitorOutline = u("monitor", o, i(r, "M692.8 412.7l.2-.2-34.6-44.3a7.97 7.97 0 0 0-11.2-1.4l-50.4 39.3-70.5-90.1a7.97 7.97 0 0 0-11.2-1.4l-37.9 29.7a7.97 7.97 0 0 0-1.4 11.2l70.5 90.2-.2.1 34.6 44.3c2.7 3.5 7.7 4.1 11.2 1.4l50.4-39.3 64.1 82c2.7 3.5 7.7 4.1 11.2 1.4l37.9-29.6c3.5-2.7 4.1-7.7 1.4-11.2l-64.1-82.1zM608 112c-167.9 0-304 136.1-304 304 0 70.3 23.9 135 63.9 186.5L114.3 856.1a8.03 8.03 0 0 0 0 11.3l42.3 42.3c3.1 3.1 8.2 3.1 11.3 0l253.6-253.6C473 696.1 537.7 720 608 720c167.9 0 304-136.1 304-304S775.9 112 608 112zm161.2 465.2C726.2 620.3 668.9 644 608 644s-118.2-23.7-161.2-66.8C403.7 534.2 380 476.9 380 416s23.7-118.2 66.8-161.2c43-43.1 100.3-66.8 161.2-66.8s118.2 23.7 161.2 66.8c43.1 43 66.8 100.3 66.8 161.2s-23.7 118.2-66.8 161.2z")),t.MoreOutline = u("more", o, i(r, "M456 231a56 56 0 1 0 112 0 56 56 0 1 0-112 0zm0 280a56 56 0 1 0 112 0 56 56 0 1 0-112 0zm0 280a56 56 0 1 0 112 0 56 56 0 1 0-112 0z")),t.OrderedListOutline = u("ordered-list", o, i(r, "M920 760H336c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0-568H336c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H336c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM216 712H100c-2.2 0-4 1.8-4 4v34c0 2.2 1.8 4 4 4h72.4v20.5h-35.7c-2.2 0-4 1.8-4 4v34c0 2.2 1.8 4 4 4h35.7V838H100c-2.2 0-4 1.8-4 4v34c0 2.2 1.8 4 4 4h116c2.2 0 4-1.8 4-4V716c0-2.2-1.8-4-4-4zM100 188h38v120c0 2.2 1.8 4 4 4h40c2.2 0 4-1.8 4-4V152c0-4.4-3.6-8-8-8h-78c-2.2 0-4 1.8-4 4v36c0 2.2 1.8 4 4 4zm116 240H100c-2.2 0-4 1.8-4 4v36c0 2.2 1.8 4 4 4h68.4l-70.3 77.7a8.3 8.3 0 0 0-2.1 5.4V592c0 2.2 1.8 4 4 4h116c2.2 0 4-1.8 4-4v-36c0-2.2-1.8-4-4-4h-68.4l70.3-77.7a8.3 8.3 0 0 0 2.1-5.4V432c0-2.2-1.8-4-4-4z")),t.NumberOutline = u("number", o, i(r, "M872 394c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8H708V152c0-4.4-3.6-8-8-8h-64c-4.4 0-8 3.6-8 8v166H400V152c0-4.4-3.6-8-8-8h-64c-4.4 0-8 3.6-8 8v166H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h168v236H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h168v166c0 4.4 3.6 8 8 8h64c4.4 0 8-3.6 8-8V706h228v166c0 4.4 3.6 8 8 8h64c4.4 0 8-3.6 8-8V706h164c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8H708V394h164zM628 630H400V394h228v236z")),t.PauseOutline = u("pause", o, i(r, "M304 176h80v672h-80zm408 0h-64c-4.4 0-8 3.6-8 8v656c0 4.4 3.6 8 8 8h64c4.4 0 8-3.6 8-8V184c0-4.4-3.6-8-8-8z")),t.PercentageOutline = u("percentage", o, i(r, "M855.7 210.8l-42.4-42.4a8.03 8.03 0 0 0-11.3 0L168.3 801.9a8.03 8.03 0 0 0 0 11.3l42.4 42.4c3.1 3.1 8.2 3.1 11.3 0L855.6 222c3.2-3 3.2-8.1.1-11.2zM304 448c79.4 0 144-64.6 144-144s-64.6-144-144-144-144 64.6-144 144 64.6 144 144 144zm0-216c39.7 0 72 32.3 72 72s-32.3 72-72 72-72-32.3-72-72 32.3-72 72-72zm416 344c-79.4 0-144 64.6-144 144s64.6 144 144 144 144-64.6 144-144-64.6-144-144-144zm0 216c-39.7 0-72-32.3-72-72s32.3-72 72-72 72 32.3 72 72-32.3 72-72 72z")),t.PaperClipOutline = u("paper-clip", o, i(r, "M779.3 196.6c-94.2-94.2-247.6-94.2-341.7 0l-261 260.8c-1.7 1.7-2.6 4-2.6 6.4s.9 4.7 2.6 6.4l36.9 36.9a9 9 0 0 0 12.7 0l261-260.8c32.4-32.4 75.5-50.2 121.3-50.2s88.9 17.8 121.2 50.2c32.4 32.4 50.2 75.5 50.2 121.2 0 45.8-17.8 88.8-50.2 121.2l-266 265.9-43.1 43.1c-40.3 40.3-105.8 40.3-146.1 0-19.5-19.5-30.2-45.4-30.2-73s10.7-53.5 30.2-73l263.9-263.8c6.7-6.6 15.5-10.3 24.9-10.3h.1c9.4 0 18.1 3.7 24.7 10.3 6.7 6.7 10.3 15.5 10.3 24.9 0 9.3-3.7 18.1-10.3 24.7L372.4 653c-1.7 1.7-2.6 4-2.6 6.4s.9 4.7 2.6 6.4l36.9 36.9a9 9 0 0 0 12.7 0l215.6-215.6c19.9-19.9 30.8-46.3 30.8-74.4s-11-54.6-30.8-74.4c-41.1-41.1-107.9-41-149 0L463 364 224.8 602.1A172.22 172.22 0 0 0 174 724.8c0 46.3 18.1 89.8 50.8 122.5 33.9 33.8 78.3 50.7 122.7 50.7 44.4 0 88.8-16.9 122.6-50.7l309.2-309C824.8 492.7 850 432 850 367.5c.1-64.6-25.1-125.3-70.7-170.9z")),t.PicCenterOutline = u("pic-center", o, i(r, "M952 792H72c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h880c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0-632H72c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h880c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM848 660c8.8 0 16-7.2 16-16V380c0-8.8-7.2-16-16-16H176c-8.8 0-16 7.2-16 16v264c0 8.8 7.2 16 16 16h672zM232 436h560v152H232V436z")),t.PicLeftOutline = u("pic-left", o, i(r, "M952 792H72c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h880c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0-632H72c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h880c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM608 660c8.8 0 16-7.2 16-16V380c0-8.8-7.2-16-16-16H96c-8.8 0-16 7.2-16 16v264c0 8.8 7.2 16 16 16h512zM152 436h400v152H152V436zm552 210c0 4.4 3.6 8 8 8h224c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H712c-4.4 0-8 3.6-8 8v56zm8-204h224c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H712c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8z")),t.PlusOutline = u("plus", o, i(r, "M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z", "M176 474h672q8 0 8 8v60q0 8-8 8H176q-8 0-8-8v-60q0-8 8-8z")),t.PicRightOutline = u("pic-right", o, i(r, "M952 792H72c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h880c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0-632H72c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h880c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm-24 500c8.8 0 16-7.2 16-16V380c0-8.8-7.2-16-16-16H416c-8.8 0-16 7.2-16 16v264c0 8.8 7.2 16 16 16h512zM472 436h400v152H472V436zM80 646c0 4.4 3.6 8 8 8h224c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H88c-4.4 0-8 3.6-8 8v56zm8-204h224c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H88c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8z")),t.PoundOutline = u("pound", o, i(r, "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372zm138-209.8H469.8v-4.7c27.4-17.2 43.9-50.4 43.9-91.1 0-14.1-2.2-27.9-5.3-41H607c4.4 0 8-3.6 8-8v-30c0-4.4-3.6-8-8-8H495c-7.2-22.6-13.4-45.7-13.4-70.5 0-43.5 34-70.2 87.3-70.2 21.5 0 42.5 4.1 60.4 10.5 5.2 1.9 10.6-2 10.6-7.6v-39.5c0-3.3-2.1-6.3-5.2-7.5-18.8-7.2-43.8-12.7-70.3-12.7-92.9 0-151.5 44.5-151.5 120.3 0 26.3 6.9 52 14.6 77.1H374c-4.4 0-8 3.6-8 8v30c0 4.4 3.6 8 8 8h67.1c3.4 14.7 5.9 29.4 5.9 44.2 0 45.2-28.8 83.3-72.8 94.2-3.6.9-6.1 4.1-6.1 7.8V722c0 4.4 3.6 8 8 8H650c4.4 0 8-3.6 8-8v-39.8c0-4.4-3.6-8-8-8z")),t.PoweroffOutline = u("poweroff", o, i(r, "M705.6 124.9a8 8 0 0 0-11.6 7.2v64.2c0 5.5 2.9 10.6 7.5 13.6a352.2 352.2 0 0 1 62.2 49.8c32.7 32.8 58.4 70.9 76.3 113.3a355 355 0 0 1 27.9 138.7c0 48.1-9.4 94.8-27.9 138.7a355.92 355.92 0 0 1-76.3 113.3 353.06 353.06 0 0 1-113.2 76.4c-43.8 18.6-90.5 28-138.5 28s-94.7-9.4-138.5-28a353.06 353.06 0 0 1-113.2-76.4A355.92 355.92 0 0 1 184 650.4a355 355 0 0 1-27.9-138.7c0-48.1 9.4-94.8 27.9-138.7 17.9-42.4 43.6-80.5 76.3-113.3 19-19 39.8-35.6 62.2-49.8 4.7-2.9 7.5-8.1 7.5-13.6V132c0-6-6.3-9.8-11.6-7.2C178.5 195.2 82 339.3 80 506.3 77.2 745.1 272.5 943.5 511.2 944c239 .5 432.8-193.3 432.8-432.4 0-169.2-97-315.7-238.4-386.7zM480 560h64c4.4 0 8-3.6 8-8V88c0-4.4-3.6-8-8-8h-64c-4.4 0-8 3.6-8 8v464c0 4.4 3.6 8 8 8z")),t.PullRequestOutline = u("pull-request", o, i(r, "M788 705.9V192c0-8.8-7.2-16-16-16H602v-68.8c0-6-7-9.4-11.7-5.7L462.7 202.3a7.14 7.14 0 0 0 0 11.3l127.5 100.8c4.7 3.7 11.7.4 11.7-5.7V240h114v465.9c-44.2 15-76 56.9-76 106.1 0 61.8 50.2 112 112 112s112-50.2 112-112c.1-49.2-31.7-91-75.9-106.1zM752 860a48.01 48.01 0 0 1 0-96 48.01 48.01 0 0 1 0 96zM384 212c0-61.8-50.2-112-112-112s-112 50.2-112 112c0 49.2 31.8 91 76 106.1V706c-44.2 15-76 56.9-76 106.1 0 61.8 50.2 112 112 112s112-50.2 112-112c0-49.2-31.8-91-76-106.1V318.1c44.2-15.1 76-56.9 76-106.1zm-160 0a48.01 48.01 0 0 1 96 0 48.01 48.01 0 0 1-96 0zm96 600a48.01 48.01 0 0 1-96 0 48.01 48.01 0 0 1 96 0z")),t.QqOutline = u("qq", o, i(r, "M824.8 613.2c-16-51.4-34.4-94.6-62.7-165.3C766.5 262.2 689.3 112 511.5 112 331.7 112 256.2 265.2 261 447.9c-28.4 70.8-46.7 113.7-62.7 165.3-34 109.5-23 154.8-14.6 155.8 18 2.2 70.1-82.4 70.1-82.4 0 49 25.2 112.9 79.8 159-26.4 8.1-85.7 29.9-71.6 53.8 11.4 19.3 196.2 12.3 249.5 6.3 53.3 6 238.1 13 249.5-6.3 14.1-23.8-45.3-45.7-71.6-53.8 54.6-46.2 79.8-110.1 79.8-159 0 0 52.1 84.6 70.1 82.4 8.5-1.1 19.5-46.4-14.5-155.8z")),t.QuestionOutline = u("question", o, i(r, "M764 280.9c-14-30.6-33.9-58.1-59.3-81.6C653.1 151.4 584.6 125 512 125s-141.1 26.4-192.7 74.2c-25.4 23.6-45.3 51-59.3 81.7-14.6 32-22 65.9-22 100.9v27c0 6.2 5 11.2 11.2 11.2h54c6.2 0 11.2-5 11.2-11.2v-27c0-99.5 88.6-180.4 197.6-180.4s197.6 80.9 197.6 180.4c0 40.8-14.5 79.2-42 111.2-27.2 31.7-65.6 54.4-108.1 64-24.3 5.5-46.2 19.2-61.7 38.8a110.85 110.85 0 0 0-23.9 68.6v31.4c0 6.2 5 11.2 11.2 11.2h54c6.2 0 11.2-5 11.2-11.2v-31.4c0-15.7 10.9-29.5 26-32.9 58.4-13.2 111.4-44.7 149.3-88.7 19.1-22.3 34-47.1 44.3-74 10.7-27.9 16.1-57.2 16.1-87 0-35-7.4-69-22-100.9zM512 787c-30.9 0-56 25.1-56 56s25.1 56 56 56 56-25.1 56-56-25.1-56-56-56z")),t.RadarChartOutline = u("radar-chart", o, i(r, "M926.8 397.1l-396-288a31.81 31.81 0 0 0-37.6 0l-396 288a31.99 31.99 0 0 0-11.6 35.8l151.3 466a32 32 0 0 0 30.4 22.1h489.5c13.9 0 26.1-8.9 30.4-22.1l151.3-466c4.2-13.2-.5-27.6-11.7-35.8zM838.6 417l-98.5 32-200-144.7V199.9L838.6 417zM466 567.2l-89.1 122.3-55.2-169.2L466 567.2zm-116.3-96.8L484 373.3v140.8l-134.3-43.7zM512 599.2l93.9 128.9H418.1L512 599.2zm28.1-225.9l134.2 97.1L540.1 514V373.3zM558 567.2l144.3-46.9-55.2 169.2L558 567.2zm-74-367.3v104.4L283.9 449l-98.5-32L484 199.9zM169.3 470.8l86.5 28.1 80.4 246.4-53.8 73.9-113.1-348.4zM327.1 853l50.3-69h269.3l50.3 69H327.1zm414.5-33.8l-53.8-73.9 80.4-246.4 86.5-28.1-113.1 348.4z")),t.QrcodeOutline = u("qrcode", o, i(r, "M468 128H160c-17.7 0-32 14.3-32 32v308c0 4.4 3.6 8 8 8h332c4.4 0 8-3.6 8-8V136c0-4.4-3.6-8-8-8zm-56 284H192V192h220v220zm-138-74h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm194 210H136c-4.4 0-8 3.6-8 8v308c0 17.7 14.3 32 32 32h308c4.4 0 8-3.6 8-8V556c0-4.4-3.6-8-8-8zm-56 284H192V612h220v220zm-138-74h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm590-630H556c-4.4 0-8 3.6-8 8v332c0 4.4 3.6 8 8 8h332c4.4 0 8-3.6 8-8V160c0-17.7-14.3-32-32-32zm-32 284H612V192h220v220zm-138-74h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm194 210h-48c-4.4 0-8 3.6-8 8v134h-78V556c0-4.4-3.6-8-8-8H556c-4.4 0-8 3.6-8 8v332c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V644h78v102c0 4.4 3.6 8 8 8h190c4.4 0 8-3.6 8-8V556c0-4.4-3.6-8-8-8zM746 832h-48c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zm142 0h-48c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z")),t.RadiusBottomleftOutline = u("radius-bottomleft", o, i(r, "M712 824h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm2-696h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM136 374h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm0-174h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm752 624h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0-174h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0-174h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0-174h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0-174h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm-348 0h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm-230 72h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm230 624H358c-87.3 0-158-70.7-158-158V484c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v182c0 127 103 230 230 230h182c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8z")),t.RadiusBottomrightOutline = u("radius-bottomright", o, i(r, "M368 824h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm-58-624h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm578 102h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0-174h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM192 824h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0-174h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0-174h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0-174h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0-174h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm292 72h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm174 0h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm230 276h-56c-4.4 0-8 3.6-8 8v182c0 87.3-70.7 158-158 158H484c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h182c127 0 230-103 230-230V484c0-4.4-3.6-8-8-8z")),t.RadiusUpleftOutline = u("radius-upleft", o, i(r, "M656 200h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm58 624h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM192 650h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 174h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm696-696h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 174h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 174h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 174h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 174h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm-348 0h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm-174 0h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm174-696H358c-127 0-230 103-230 230v182c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V358c0-87.3 70.7-158 158-158h182c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8z")),t.RadiusUprightOutline = u("radius-upright", o, i(r, "M368 128h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm-2 696h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm522-174h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 174h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM192 128h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 174h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 174h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 174h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 174h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm348 0h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm174 0h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm-48-696H484c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h182c87.3 0 158 70.7 158 158v182c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V358c0-127-103-230-230-230z")),t.RadiusSettingOutline = u("radius-setting", o, i(r, "M396 140h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm-44 684h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm524-204h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM192 344h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 160h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 160h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 160h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm320 0h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm160 0h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm140-284c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V370c0-127-103-230-230-230H484c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h170c87.3 0 158 70.7 158 158v170zM236 96H92c-4.4 0-8 3.6-8 8v144c0 4.4 3.6 8 8 8h144c4.4 0 8-3.6 8-8V104c0-4.4-3.6-8-8-8zm-48 101.6c0 1.3-1.1 2.4-2.4 2.4h-43.2c-1.3 0-2.4-1.1-2.4-2.4v-43.2c0-1.3 1.1-2.4 2.4-2.4h43.2c1.3 0 2.4 1.1 2.4 2.4v43.2zM920 780H776c-4.4 0-8 3.6-8 8v144c0 4.4 3.6 8 8 8h144c4.4 0 8-3.6 8-8V788c0-4.4-3.6-8-8-8zm-48 101.6c0 1.3-1.1 2.4-2.4 2.4h-43.2c-1.3 0-2.4-1.1-2.4-2.4v-43.2c0-1.3 1.1-2.4 2.4-2.4h43.2c1.3 0 2.4 1.1 2.4 2.4v43.2z")),t.RedditOutline = u("reddit", o, i(r, "M288 568a56 56 0 1 0 112 0 56 56 0 1 0-112 0zm338.7 119.7c-23.1 18.2-68.9 37.8-114.7 37.8s-91.6-19.6-114.7-37.8c-14.4-11.3-35.3-8.9-46.7 5.5s-8.9 35.3 5.5 46.7C396.3 771.6 457.5 792 512 792s115.7-20.4 155.9-52.1a33.25 33.25 0 1 0-41.2-52.2zM960 456c0-61.9-50.1-112-112-112-42.1 0-78.7 23.2-97.9 57.6-57.6-31.5-127.7-51.8-204.1-56.5L612.9 195l127.9 36.9c11.5 32.6 42.6 56.1 79.2 56.1 46.4 0 84-37.6 84-84s-37.6-84-84-84c-32 0-59.8 17.9-74 44.2L603.5 123a33.2 33.2 0 0 0-39.6 18.4l-90.8 203.9c-74.5 5.2-142.9 25.4-199.2 56.2A111.94 111.94 0 0 0 176 344c-61.9 0-112 50.1-112 112 0 45.8 27.5 85.1 66.8 102.5-7.1 21-10.8 43-10.8 65.5 0 154.6 175.5 280 392 280s392-125.4 392-280c0-22.6-3.8-44.5-10.8-65.5C932.5 541.1 960 501.8 960 456zM820 172.5a31.5 31.5 0 1 1 0 63 31.5 31.5 0 0 1 0-63zM120 456c0-30.9 25.1-56 56-56a56 56 0 0 1 50.6 32.1c-29.3 22.2-53.5 47.8-71.5 75.9a56.23 56.23 0 0 1-35.1-52zm392 381.5c-179.8 0-325.5-95.6-325.5-213.5S332.2 410.5 512 410.5 837.5 506.1 837.5 624 691.8 837.5 512 837.5zM868.8 508c-17.9-28.1-42.2-53.7-71.5-75.9 9-18.9 28.3-32.1 50.6-32.1 30.9 0 56 25.1 56 56 .1 23.5-14.5 43.7-35.1 52zM624 568a56 56 0 1 0 112 0 56 56 0 1 0-112 0z")),t.RedoOutline = u("redo", o, i(r, "M758.2 839.1C851.8 765.9 912 651.9 912 523.9 912 303 733.5 124.3 512.6 124 291.4 123.7 112 302.8 112 523.9c0 125.2 57.5 236.9 147.6 310.2 3.5 2.8 8.6 2.2 11.4-1.3l39.4-50.5c2.7-3.4 2.1-8.3-1.2-11.1-8.1-6.6-15.9-13.7-23.4-21.2a318.64 318.64 0 0 1-68.6-101.7C200.4 609 192 567.1 192 523.9s8.4-85.1 25.1-124.5c16.1-38.1 39.2-72.3 68.6-101.7 29.4-29.4 63.6-52.5 101.7-68.6C426.9 212.4 468.8 204 512 204s85.1 8.4 124.5 25.1c38.1 16.1 72.3 39.2 101.7 68.6 29.4 29.4 52.5 63.6 68.6 101.7 16.7 39.4 25.1 81.3 25.1 124.5s-8.4 85.1-25.1 124.5a318.64 318.64 0 0 1-68.6 101.7c-9.3 9.3-19.1 18-29.3 26L668.2 724a8 8 0 0 0-14.1 3l-39.6 162.2c-1.2 5 2.6 9.9 7.7 9.9l167 .8c6.7 0 10.5-7.7 6.3-12.9l-37.3-47.9z")),t.ReloadOutline = u("reload", o, i(r, "M909.1 209.3l-56.4 44.1C775.8 155.1 656.2 92 521.9 92 290 92 102.3 279.5 102 511.5 101.7 743.7 289.8 932 521.9 932c181.3 0 335.8-115 394.6-276.1 1.5-4.2-.7-8.9-4.9-10.3l-56.7-19.5a8 8 0 0 0-10.1 4.8c-1.8 5-3.8 10-5.9 14.9-17.3 41-42.1 77.8-73.7 109.4A344.77 344.77 0 0 1 655.9 829c-42.3 17.9-87.4 27-133.8 27-46.5 0-91.5-9.1-133.8-27A341.5 341.5 0 0 1 279 755.2a342.16 342.16 0 0 1-73.7-109.4c-17.9-42.4-27-87.4-27-133.9s9.1-91.5 27-133.9c17.3-41 42.1-77.8 73.7-109.4 31.6-31.6 68.4-56.4 109.3-73.8 42.3-17.9 87.4-27 133.8-27 46.5 0 91.5 9.1 133.8 27a341.5 341.5 0 0 1 109.3 73.8c9.9 9.9 19.2 20.4 27.8 31.4l-60.2 47a8 8 0 0 0 3 14.1l175.6 43c5 1.2 9.9-2.6 9.9-7.7l.8-180.9c-.1-6.6-7.8-10.3-13-6.2z")),t.RetweetOutline = u("retweet", o, i(n, "M136 552h63.6c4.4 0 8-3.6 8-8V288.7h528.6v72.6c0 1.9.6 3.7 1.8 5.2a8.3 8.3 0 0 0 11.7 1.4L893 255.4c4.3-5 3.6-10.3 0-13.2L749.7 129.8a8.22 8.22 0 0 0-5.2-1.8c-4.6 0-8.4 3.8-8.4 8.4V209H199.7c-39.5 0-71.7 32.2-71.7 71.8V544c0 4.4 3.6 8 8 8zm752-80h-63.6c-4.4 0-8 3.6-8 8v255.3H287.8v-72.6c0-1.9-.6-3.7-1.8-5.2a8.3 8.3 0 0 0-11.7-1.4L131 768.6c-4.3 5-3.6 10.3 0 13.2l143.3 112.4c1.5 1.2 3.3 1.8 5.2 1.8 4.6 0 8.4-3.8 8.4-8.4V815h536.6c39.5 0 71.7-32.2 71.7-71.8V480c-.2-4.4-3.8-8-8.2-8z")),t.RightOutline = u("right", o, i(r, "M765.7 486.8L314.9 134.7A7.97 7.97 0 0 0 302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 0 0 0-50.4z")),t.RiseOutline = u("rise", o, i(r, "M917 211.1l-199.2 24c-6.6.8-9.4 8.9-4.7 13.6l59.3 59.3-226 226-101.8-101.7c-6.3-6.3-16.4-6.2-22.6 0L100.3 754.1a8.03 8.03 0 0 0 0 11.3l45 45.2c3.1 3.1 8.2 3.1 11.3 0L433.3 534 535 635.7c6.3 6.2 16.4 6.2 22.6 0L829 364.5l59.3 59.3a8.01 8.01 0 0 0 13.6-4.7l24-199.2c.7-5.1-3.7-9.5-8.9-8.8z")),t.RollbackOutline = u("rollback", o, i(r, "M793 242H366v-74c0-6.7-7.7-10.4-12.9-6.3l-142 112a8 8 0 0 0 0 12.6l142 112c5.2 4.1 12.9.4 12.9-6.3v-74h415v470H175c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h618c35.3 0 64-28.7 64-64V306c0-35.3-28.7-64-64-64z")),t.SafetyOutline = u("safety", o, i(n, "M512 64L128 192v384c0 212.1 171.9 384 384 384s384-171.9 384-384V192L512 64zm312 512c0 172.3-139.7 312-312 312S200 748.3 200 576V246l312-110 312 110v330z", "M378.4 475.1a35.91 35.91 0 0 0-50.9 0 35.91 35.91 0 0 0 0 50.9l129.4 129.4 2.1 2.1a33.98 33.98 0 0 0 48.1 0L730.6 434a33.98 33.98 0 0 0 0-48.1l-2.8-2.8a33.98 33.98 0 0 0-48.1 0L483 579.7 378.4 475.1z")),t.RobotOutline = u("robot", o, i(r, "M300 328a60 60 0 1 0 120 0 60 60 0 1 0-120 0zM852 64H172c-17.7 0-32 14.3-32 32v660c0 17.7 14.3 32 32 32h680c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32zm-32 660H204V128h616v596zM604 328a60 60 0 1 0 120 0 60 60 0 1 0-120 0zm250.2 556H169.8c-16.5 0-29.8 14.3-29.8 32v36c0 4.4 3.3 8 7.4 8h729.1c4.1 0 7.4-3.6 7.4-8v-36c.1-17.7-13.2-32-29.7-32zM664 508H360c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h304c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z")),t.SearchOutline = u("search", o, i(r, "M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0 0 11.6 0l43.6-43.5a8.2 8.2 0 0 0 0-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z")),t.ScanOutline = u("scan", o, i(r, "M136 384h56c4.4 0 8-3.6 8-8V200h176c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H196c-37.6 0-68 30.4-68 68v180c0 4.4 3.6 8 8 8zm512-184h176v176c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V196c0-37.6-30.4-68-68-68H648c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zM376 824H200V648c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v180c0 37.6 30.4 68 68 68h180c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm512-184h-56c-4.4 0-8 3.6-8 8v176H648c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h180c37.6 0 68-30.4 68-68V648c0-4.4-3.6-8-8-8zm16-164H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8z")),t.ScissorOutline = u("scissor", o, i(r, "M567.1 512l318.5-319.3c5-5 1.5-13.7-5.6-13.7h-90.5c-2.1 0-4.2.8-5.6 2.3l-273.3 274-90.2-90.5c12.5-22.1 19.7-47.6 19.7-74.8 0-83.9-68.1-152-152-152s-152 68.1-152 152 68.1 152 152 152c27.7 0 53.6-7.4 75.9-20.3l90 90.3-90.1 90.3A151.04 151.04 0 0 0 288 582c-83.9 0-152 68.1-152 152s68.1 152 152 152 152-68.1 152-152c0-27.2-7.2-52.7-19.7-74.8l90.2-90.5 273.3 274c1.5 1.5 3.5 2.3 5.6 2.3H880c7.1 0 10.7-8.6 5.6-13.7L567.1 512zM288 370c-44.1 0-80-35.9-80-80s35.9-80 80-80 80 35.9 80 80-35.9 80-80 80zm0 444c-44.1 0-80-35.9-80-80s35.9-80 80-80 80 35.9 80 80-35.9 80-80 80z")),t.SelectOutline = u("select", o, i(r, "M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h360c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H184V184h656v320c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V144c0-17.7-14.3-32-32-32zM653.3 599.4l52.2-52.2a8.01 8.01 0 0 0-4.7-13.6l-179.4-21c-5.1-.6-9.5 3.7-8.9 8.9l21 179.4c.8 6.6 8.9 9.4 13.6 4.7l52.4-52.4 256.2 256.2c3.1 3.1 8.2 3.1 11.3 0l42.4-42.4c3.1-3.1 3.1-8.2 0-11.3L653.3 599.4z")),t.ShakeOutline = u("shake", o, i(r, "M324 666a48 48 0 1 0 96 0 48 48 0 1 0-96 0zm616.7-309.6L667.6 83.2C655.2 70.9 638.7 64 621.1 64s-34.1 6.8-46.5 19.2L83.3 574.5a65.85 65.85 0 0 0 0 93.1l273.2 273.2c12.3 12.3 28.9 19.2 46.5 19.2s34.1-6.8 46.5-19.2l491.3-491.3c25.6-25.7 25.6-67.5-.1-93.1zM403 880.1L143.9 621l477.2-477.2 259 259.2L403 880.1zM152.8 373.7a7.9 7.9 0 0 0 11.2 0L373.7 164a7.9 7.9 0 0 0 0-11.2l-38.4-38.4a7.9 7.9 0 0 0-11.2 0L114.3 323.9a7.9 7.9 0 0 0 0 11.2l38.5 38.6zm718.6 276.6a7.9 7.9 0 0 0-11.2 0L650.3 860.1a7.9 7.9 0 0 0 0 11.2l38.4 38.4a7.9 7.9 0 0 0 11.2 0L909.7 700a7.9 7.9 0 0 0 0-11.2l-38.3-38.5z")),t.ShareAltOutline = u("share-alt", o, i(r, "M752 664c-28.5 0-54.8 10-75.4 26.7L469.4 540.8a160.68 160.68 0 0 0 0-57.6l207.2-149.9C697.2 350 723.5 360 752 360c66.2 0 120-53.8 120-120s-53.8-120-120-120-120 53.8-120 120c0 11.6 1.6 22.7 4.7 33.3L439.9 415.8C410.7 377.1 364.3 352 312 352c-88.4 0-160 71.6-160 160s71.6 160 160 160c52.3 0 98.7-25.1 127.9-63.8l196.8 142.5c-3.1 10.6-4.7 21.8-4.7 33.3 0 66.2 53.8 120 120 120s120-53.8 120-120-53.8-120-120-120zm0-476c28.7 0 52 23.3 52 52s-23.3 52-52 52-52-23.3-52-52 23.3-52 52-52zM312 600c-48.5 0-88-39.5-88-88s39.5-88 88-88 88 39.5 88 88-39.5 88-88 88zm440 236c-28.7 0-52-23.3-52-52s23.3-52 52-52 52 23.3 52 52-23.3 52-52 52z")),t.ShoppingCartOutline = u("shopping-cart", o, i(n, "M922.9 701.9H327.4l29.9-60.9 496.8-.9c16.8 0 31.2-12 34.2-28.6l68.8-385.1c1.8-10.1-.9-20.5-7.5-28.4a34.99 34.99 0 0 0-26.6-12.5l-632-2.1-5.4-25.4c-3.4-16.2-18-28-34.6-28H96.5a35.3 35.3 0 1 0 0 70.6h125.9L246 312.8l58.1 281.3-74.8 122.1a34.96 34.96 0 0 0-3 36.8c6 11.9 18.1 19.4 31.5 19.4h62.8a102.43 102.43 0 0 0-20.6 61.7c0 56.6 46 102.6 102.6 102.6s102.6-46 102.6-102.6c0-22.3-7.4-44-20.6-61.7h161.1a102.43 102.43 0 0 0-20.6 61.7c0 56.6 46 102.6 102.6 102.6s102.6-46 102.6-102.6c0-22.3-7.4-44-20.6-61.7H923c19.4 0 35.3-15.8 35.3-35.3a35.42 35.42 0 0 0-35.4-35.2zM305.7 253l575.8 1.9-56.4 315.8-452.3.8L305.7 253zm96.9 612.7c-17.4 0-31.6-14.2-31.6-31.6 0-17.4 14.2-31.6 31.6-31.6s31.6 14.2 31.6 31.6a31.6 31.6 0 0 1-31.6 31.6zm325.1 0c-17.4 0-31.6-14.2-31.6-31.6 0-17.4 14.2-31.6 31.6-31.6s31.6 14.2 31.6 31.6a31.6 31.6 0 0 1-31.6 31.6z")),t.ShrinkOutline = u("shrink", o, i(r, "M881.7 187.4l-45.1-45.1a8.03 8.03 0 0 0-11.3 0L667.8 299.9l-54.7-54.7a7.94 7.94 0 0 0-13.5 4.7L576.1 439c-.6 5.2 3.7 9.5 8.9 8.9l189.2-23.5c6.6-.8 9.3-8.8 4.7-13.5l-54.7-54.7 157.6-157.6c3-3 3-8.1-.1-11.2zM439 576.1l-189.2 23.5c-6.6.8-9.3 8.9-4.7 13.5l54.7 54.7-157.5 157.5a8.03 8.03 0 0 0 0 11.3l45.1 45.1c3.1 3.1 8.2 3.1 11.3 0l157.6-157.6 54.7 54.7a7.94 7.94 0 0 0 13.5-4.7L447.9 585a7.9 7.9 0 0 0-8.9-8.9z")),t.SlackOutline = u("slack", o, i(r, "M409.4 128c-42.4 0-76.7 34.4-76.7 76.8 0 20.3 8.1 39.9 22.4 54.3a76.74 76.74 0 0 0 54.3 22.5h76.7v-76.8c0-42.3-34.3-76.7-76.7-76.8zm0 204.8H204.7c-42.4 0-76.7 34.4-76.7 76.8s34.4 76.8 76.7 76.8h204.6c42.4 0 76.7-34.4 76.7-76.8.1-42.4-34.3-76.8-76.6-76.8zM614 486.4c42.4 0 76.8-34.4 76.7-76.8V204.8c0-42.4-34.3-76.8-76.7-76.8-42.4 0-76.7 34.4-76.7 76.8v204.8c0 42.5 34.3 76.8 76.7 76.8zm281.4-76.8c0-42.4-34.4-76.8-76.7-76.8S742 367.2 742 409.6v76.8h76.7c42.3 0 76.7-34.4 76.7-76.8zm-76.8 128H614c-42.4 0-76.7 34.4-76.7 76.8 0 20.3 8.1 39.9 22.4 54.3a76.74 76.74 0 0 0 54.3 22.5h204.6c42.4 0 76.7-34.4 76.7-76.8.1-42.4-34.3-76.7-76.7-76.8zM614 742.4h-76.7v76.8c0 42.4 34.4 76.8 76.7 76.8 42.4 0 76.8-34.4 76.7-76.8.1-42.4-34.3-76.7-76.7-76.8zM409.4 537.6c-42.4 0-76.7 34.4-76.7 76.8v204.8c0 42.4 34.4 76.8 76.7 76.8 42.4 0 76.8-34.4 76.7-76.8V614.4c0-20.3-8.1-39.9-22.4-54.3a76.92 76.92 0 0 0-54.3-22.5zM128 614.4c0 20.3 8.1 39.9 22.4 54.3a76.74 76.74 0 0 0 54.3 22.5c42.4 0 76.8-34.4 76.7-76.8v-76.8h-76.7c-42.3 0-76.7 34.4-76.7 76.8z")),t.SmallDashOutline = u("small-dash", o, i(r, "M112 476h72v72h-72zm182 0h72v72h-72zm364 0h72v72h-72zm182 0h72v72h-72zm-364 0h72v72h-72z")),t.SolutionOutline = u("solution", o, i(r, "M688 264c0-4.4-3.6-8-8-8H296c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h384c4.4 0 8-3.6 8-8v-48zm-8 136H296c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h384c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zM480 544H296c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zm-48 308H208V148h560v344c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V108c0-17.7-14.3-32-32-32H168c-17.7 0-32 14.3-32 32v784c0 17.7 14.3 32 32 32h264c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm356.8-74.4c29-26.3 47.2-64.3 47.2-106.6 0-79.5-64.5-144-144-144s-144 64.5-144 144c0 42.3 18.2 80.3 47.2 106.6-57 32.5-96.2 92.7-99.2 162.1-.2 4.5 3.5 8.3 8 8.3h48.1c4.2 0 7.7-3.3 8-7.6C564 871.2 621.7 816 692 816s128 55.2 131.9 124.4c.2 4.2 3.7 7.6 8 7.6H880c4.6 0 8.2-3.8 8-8.3-2.9-69.5-42.2-129.6-99.2-162.1zM692 591c44.2 0 80 35.8 80 80s-35.8 80-80 80-80-35.8-80-80 35.8-80 80-80z")),t.SketchOutline = u("sketch", o, i(r, "M925.6 405.1l-203-253.7a6.5 6.5 0 0 0-5-2.4H306.4c-1.9 0-3.8.9-5 2.4l-203 253.7a6.5 6.5 0 0 0 .2 8.3l408.6 459.5c1.2 1.4 3 2.1 4.8 2.1 1.8 0 3.5-.8 4.8-2.1l408.6-459.5a6.5 6.5 0 0 0 .2-8.3zM645.2 206.4l34.4 133.9-132.5-133.9h98.1zm8.2 178.5H370.6L512 242l141.4 142.9zM378.8 206.4h98.1L344.3 340.3l34.5-133.9zm-53.4 7l-44.1 171.5h-93.1l137.2-171.5zM194.6 434.9H289l125.8 247.7-220.2-247.7zM512 763.4L345.1 434.9h333.7L512 763.4zm97.1-80.8L735 434.9h94.4L609.1 682.6zm133.6-297.7l-44.1-171.5 137.2 171.5h-93.1z")),t.SortDescendingOutline = u("sort-descending", o, i(r, "M839.6 433.8L749 150.5a9.24 9.24 0 0 0-8.9-6.5h-77.4c-4.1 0-7.6 2.6-8.9 6.5l-91.3 283.3c-.3.9-.5 1.9-.5 2.9 0 5.1 4.2 9.3 9.3 9.3h56.4c4.2 0 7.8-2.8 9-6.8l17.5-61.6h89l17.3 61.5c1.1 4 4.8 6.8 9 6.8h61.2c1 0 1.9-.1 2.8-.4 2.4-.8 4.3-2.4 5.5-4.6 1.1-2.2 1.3-4.7.6-7.1zM663.3 325.5l32.8-116.9h6.3l32.1 116.9h-71.2zm143.5 492.9H677.2v-.4l132.6-188.9c1.1-1.6 1.7-3.4 1.7-5.4v-36.4c0-5.1-4.2-9.3-9.3-9.3h-204c-5.1 0-9.3 4.2-9.3 9.3v43c0 5.1 4.2 9.3 9.3 9.3h122.6v.4L587.7 828.9a9.35 9.35 0 0 0-1.7 5.4v36.4c0 5.1 4.2 9.3 9.3 9.3h211.4c5.1 0 9.3-4.2 9.3-9.3v-43a9.2 9.2 0 0 0-9.2-9.3zM310.3 167.1a8 8 0 0 0-12.6 0L185.7 309c-4.2 5.3-.4 13 6.3 13h76v530c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V322h76c6.7 0 10.5-7.8 6.3-13l-112-141.9z")),t.SortAscendingOutline = u("sort-ascending", o, i(r, "M839.6 433.8L749 150.5a9.24 9.24 0 0 0-8.9-6.5h-77.4c-4.1 0-7.6 2.6-8.9 6.5l-91.3 283.3c-.3.9-.5 1.9-.5 2.9 0 5.1 4.2 9.3 9.3 9.3h56.4c4.2 0 7.8-2.8 9-6.8l17.5-61.6h89l17.3 61.5c1.1 4 4.8 6.8 9 6.8h61.2c1 0 1.9-.1 2.8-.4 2.4-.8 4.3-2.4 5.5-4.6 1.1-2.2 1.3-4.7.6-7.1zM663.3 325.5l32.8-116.9h6.3l32.1 116.9h-71.2zm143.5 492.9H677.2v-.4l132.6-188.9c1.1-1.6 1.7-3.4 1.7-5.4v-36.4c0-5.1-4.2-9.3-9.3-9.3h-204c-5.1 0-9.3 4.2-9.3 9.3v43c0 5.1 4.2 9.3 9.3 9.3h122.6v.4L587.7 828.9a9.35 9.35 0 0 0-1.7 5.4v36.4c0 5.1 4.2 9.3 9.3 9.3h211.4c5.1 0 9.3-4.2 9.3-9.3v-43a9.2 9.2 0 0 0-9.2-9.3zM416 702h-76V172c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v530h-76c-6.7 0-10.5 7.8-6.3 13l112 141.9a8 8 0 0 0 12.6 0l112-141.9c4.1-5.2.4-13-6.3-13z")),t.StockOutline = u("stock", o, i(r, "M904 747H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM165.7 621.8l39.7 39.5c3.1 3.1 8.2 3.1 11.3 0l234.7-233.9 97.6 97.3a32.11 32.11 0 0 0 45.2 0l264.2-263.2c3.1-3.1 3.1-8.2 0-11.3l-39.7-39.6a8.03 8.03 0 0 0-11.3 0l-235.7 235-97.7-97.3a32.11 32.11 0 0 0-45.2 0L165.7 610.5a7.94 7.94 0 0 0 0 11.3z")),t.SwapLeftOutline = u("swap-left", o, i(n, "M872 572H266.8l144.3-183c4.1-5.2.4-13-6.3-13H340c-9.8 0-19.1 4.5-25.1 12.2l-164 208c-16.5 21-1.6 51.8 25.1 51.8h696c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z")),t.SwapRightOutline = u("swap-right", o, i(n, "M873.1 596.2l-164-208A32 32 0 0 0 684 376h-64.8c-6.7 0-10.4 7.7-6.3 13l144.3 183H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h695.9c26.8 0 41.7-30.8 25.2-51.8z")),t.StrikethroughOutline = u("strikethrough", o, i(r, "M952 474H569.9c-10-2-20.5-4-31.6-6-15.9-2.9-22.2-4.1-30.8-5.8-51.3-10-82.2-20-106.8-34.2-35.1-20.5-52.2-48.3-52.2-85.1 0-37 15.2-67.7 44-89 28.4-21 68.8-32.1 116.8-32.1 54.8 0 97.1 14.4 125.8 42.8 14.6 14.4 25.3 32.1 31.8 52.6 1.3 4.1 2.8 10 4.3 17.8.9 4.8 5.2 8.2 9.9 8.2h72.8c5.6 0 10.1-4.6 10.1-10.1v-1c-.7-6.8-1.3-12.1-2-16-7.3-43.5-28-81.7-59.7-110.3-44.4-40.5-109.7-61.8-188.7-61.8-72.3 0-137.4 18.1-183.3 50.9-25.6 18.4-45.4 41.2-58.6 67.7-13.5 27.1-20.3 58.4-20.3 92.9 0 29.5 5.7 54.5 17.3 76.5 8.3 15.7 19.6 29.5 34.1 42H72c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h433.2c2.1.4 3.9.8 5.9 1.2 30.9 6.2 49.5 10.4 66.6 15.2 23 6.5 40.6 13.3 55.2 21.5 35.8 20.2 53.3 49.2 53.3 89 0 35.3-15.5 66.8-43.6 88.8-30.5 23.9-75.6 36.4-130.5 36.4-43.7 0-80.7-8.5-110.2-25-29.1-16.3-49.1-39.8-59.7-69.5-.8-2.2-1.7-5.2-2.7-9-1.2-4.4-5.3-7.5-9.7-7.5h-79.7c-5.6 0-10.1 4.6-10.1 10.1v1c.2 2.3.4 4.2.6 5.7 6.5 48.8 30.3 88.8 70.7 118.8 47.1 34.8 113.4 53.2 191.8 53.2 84.2 0 154.8-19.8 204.2-57.3 25-18.9 44.2-42.2 57.1-69 13-27.1 19.7-57.9 19.7-91.5 0-31.8-5.8-58.4-17.8-81.4-5.8-11.2-13.1-21.5-21.8-30.8H952c4.4 0 8-3.6 8-8v-60a8 8 0 0 0-8-7.9z")),t.SwapOutline = u("swap", o, i(r, "M847.9 592H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h605.2L612.9 851c-4.1 5.2-.4 13 6.3 13h72.5c4.9 0 9.5-2.2 12.6-6.1l168.8-214.1c16.5-21 1.6-51.8-25.2-51.8zM872 356H266.8l144.3-183c4.1-5.2.4-13-6.3-13h-72.5c-4.9 0-9.5 2.2-12.6 6.1L150.9 380.2c-16.5 21-1.6 51.8 25.1 51.8h696c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z")),t.SyncOutline = u("sync", o, i(r, "M168 504.2c1-43.7 10-86.1 26.9-126 17.3-41 42.1-77.7 73.7-109.4S337 212.3 378 195c42.4-17.9 87.4-27 133.9-27s91.5 9.1 133.8 27A341.5 341.5 0 0 1 755 268.8c9.9 9.9 19.2 20.4 27.8 31.4l-60.2 47a8 8 0 0 0 3 14.1l175.7 43c5 1.2 9.9-2.6 9.9-7.7l.8-180.9c0-6.7-7.7-10.5-12.9-6.3l-56.4 44.1C765.8 155.1 646.2 92 511.8 92 282.7 92 96.3 275.6 92 503.8a8 8 0 0 0 8 8.2h60c4.4 0 7.9-3.5 8-7.8zm756 7.8h-60c-4.4 0-7.9 3.5-8 7.8-1 43.7-10 86.1-26.9 126-17.3 41-42.1 77.8-73.7 109.4A342.45 342.45 0 0 1 512.1 856a342.24 342.24 0 0 1-243.2-100.8c-9.9-9.9-19.2-20.4-27.8-31.4l60.2-47a8 8 0 0 0-3-14.1l-175.7-43c-5-1.2-9.9 2.6-9.9 7.7l-.7 181c0 6.7 7.7 10.5 12.9 6.3l56.4-44.1C258.2 868.9 377.8 932 512.2 932c229.2 0 415.5-183.7 419.8-411.8a8 8 0 0 0-8-8.2z")),t.TableOutline = u("table", o, i(r, "M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 208H676V232h212v136zm0 224H676V432h212v160zM412 432h200v160H412V432zm200-64H412V232h200v136zm-476 64h212v160H136V432zm0-200h212v136H136V232zm0 424h212v136H136V656zm276 0h200v136H412V656zm476 136H676V656h212v136z")),t.TeamOutline = u("team", o, i(r, "M824.2 699.9a301.55 301.55 0 0 0-86.4-60.4C783.1 602.8 812 546.8 812 484c0-110.8-92.4-201.7-203.2-200-109.1 1.7-197 90.6-197 200 0 62.8 29 118.8 74.2 155.5a300.95 300.95 0 0 0-86.4 60.4C345 754.6 314 826.8 312 903.8a8 8 0 0 0 8 8.2h56c4.3 0 7.9-3.4 8-7.7 1.9-58 25.4-112.3 66.7-153.5A226.62 226.62 0 0 1 612 684c60.9 0 118.2 23.7 161.3 66.8C814.5 792 838 846.3 840 904.3c.1 4.3 3.7 7.7 8 7.7h56a8 8 0 0 0 8-8.2c-2-77-33-149.2-87.8-203.9zM612 612c-34.2 0-66.4-13.3-90.5-37.5a126.86 126.86 0 0 1-37.5-91.8c.3-32.8 13.4-64.5 36.3-88 24-24.6 56.1-38.3 90.4-38.7 33.9-.3 66.8 12.9 91 36.6 24.8 24.3 38.4 56.8 38.4 91.4 0 34.2-13.3 66.3-37.5 90.5A127.3 127.3 0 0 1 612 612zM361.5 510.4c-.9-8.7-1.4-17.5-1.4-26.4 0-15.9 1.5-31.4 4.3-46.5.7-3.6-1.2-7.3-4.5-8.8-13.6-6.1-26.1-14.5-36.9-25.1a127.54 127.54 0 0 1-38.7-95.4c.9-32.1 13.8-62.6 36.3-85.6 24.7-25.3 57.9-39.1 93.2-38.7 31.9.3 62.7 12.6 86 34.4 7.9 7.4 14.7 15.6 20.4 24.4 2 3.1 5.9 4.4 9.3 3.2 17.6-6.1 36.2-10.4 55.3-12.4 5.6-.6 8.8-6.6 6.3-11.6-32.5-64.3-98.9-108.7-175.7-109.9-110.9-1.7-203.3 89.2-203.3 199.9 0 62.8 28.9 118.8 74.2 155.5-31.8 14.7-61.1 35-86.5 60.4-54.8 54.7-85.8 126.9-87.8 204a8 8 0 0 0 8 8.2h56.1c4.3 0 7.9-3.4 8-7.7 1.9-58 25.4-112.3 66.7-153.5 29.4-29.4 65.4-49.8 104.7-59.7 3.9-1 6.5-4.7 6-8.7z")),t.TaobaoOutline = u("taobao", o, i(r, "M168.5 273.7a68.7 68.7 0 1 0 137.4 0 68.7 68.7 0 1 0-137.4 0zm730 79.2s-23.7-184.4-426.9-70.1c17.3-30 25.6-49.5 25.6-49.5L396.4 205s-40.6 132.6-113 194.4c0 0 70.1 40.6 69.4 39.4 20.1-20.1 38.2-40.6 53.7-60.4 16.1-7 31.5-13.6 46.7-19.8-18.6 33.5-48.7 83.8-78.8 115.6l42.4 37s28.8-27.7 60.4-61.2h36v61.8H372.9v49.5h140.3v118.5c-1.7 0-3.6 0-5.4-.2-15.4-.7-39.5-3.3-49-18.2-11.5-18.1-3-51.5-2.4-71.9h-97l-3.4 1.8s-35.5 159.1 102.3 155.5c129.1 3.6 203-36 238.6-63.1l14.2 52.6 79.6-33.2-53.9-131.9-64.6 20.1 12.1 45.2c-16.6 12.4-35.6 21.7-56.2 28.4V561.3h137.1v-49.5H628.1V450h137.6v-49.5H521.3c17.6-21.4 31.5-41.1 35-53.6l-42.5-11.6c182.8-65.5 284.5-54.2 283.6 53.2v282.8s10.8 97.1-100.4 90.1l-60.2-12.9-14.2 57.1S882.5 880 903.7 680.2c21.3-200-5.2-327.3-5.2-327.3zm-707.4 18.3l-45.4 69.7 83.6 52.1s56 28.5 29.4 81.9C233.8 625.5 112 736.3 112 736.3l109 68.1c75.4-163.7 70.5-142 89.5-200.7 19.5-60.1 23.7-105.9-9.4-139.1-42.4-42.6-47-46.6-110-93.4z")),t.ToTopOutline = u("to-top", o, i(r, "M885 780H165c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h720c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8zM400 325.7h73.9V664c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V325.7H624c6.7 0 10.4-7.7 6.3-12.9L518.3 171a8 8 0 0 0-12.6 0l-112 141.7c-4.1 5.3-.4 13 6.3 13z")),t.TrademarkOutline = u("trademark", o, i(r, "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372zm87.5-334.7c34.8-12.8 78.4-49 78.4-119.2 0-71.2-45.5-131.1-144.2-131.1H378c-4.4 0-8 3.6-8 8v410c0 4.4 3.6 8 8 8h54.5c4.4 0 8-3.6 8-8V561.2h88.7l74.6 159.2c1.3 2.8 4.1 4.6 7.2 4.6h62a7.9 7.9 0 0 0 7.1-11.5l-80.6-164.2zM522 505h-81.5V357h83.4c48 0 80.9 25.3 80.9 75.5 0 46.9-29.8 72.5-82.8 72.5z")),t.TransactionOutline = u("transaction", o, i(r, "M668.6 320c0-4.4-3.6-8-8-8h-54.5c-3 0-5.8 1.7-7.1 4.4l-84.7 168.8H511l-84.7-168.8a8 8 0 0 0-7.1-4.4h-55.7c-1.3 0-2.6.3-3.8 1-3.9 2.1-5.3 7-3.2 10.8l103.9 191.6h-57c-4.4 0-8 3.6-8 8v27.1c0 4.4 3.6 8 8 8h76v39h-76c-4.4 0-8 3.6-8 8v27.1c0 4.4 3.6 8 8 8h76V704c0 4.4 3.6 8 8 8h49.9c4.4 0 8-3.6 8-8v-63.5h76.3c4.4 0 8-3.6 8-8v-27.1c0-4.4-3.6-8-8-8h-76.3v-39h76.3c4.4 0 8-3.6 8-8v-27.1c0-4.4-3.6-8-8-8H564l103.7-191.6c.5-1.1.9-2.4.9-3.7zM157.9 504.2a352.7 352.7 0 0 1 103.5-242.4c32.5-32.5 70.3-58.1 112.4-75.9 43.6-18.4 89.9-27.8 137.6-27.8 47.8 0 94.1 9.3 137.6 27.8 42.1 17.8 79.9 43.4 112.4 75.9 10 10 19.3 20.5 27.9 31.4l-50 39.1a8 8 0 0 0 3 14.1l156.8 38.3c5 1.2 9.9-2.6 9.9-7.7l.8-161.5c0-6.7-7.7-10.5-12.9-6.3l-47.8 37.4C770.7 146.3 648.6 82 511.5 82 277 82 86.3 270.1 82 503.8a8 8 0 0 0 8 8.2h60c4.3 0 7.8-3.5 7.9-7.8zM934 512h-60c-4.3 0-7.9 3.5-8 7.8a352.7 352.7 0 0 1-103.5 242.4 352.57 352.57 0 0 1-112.4 75.9c-43.6 18.4-89.9 27.8-137.6 27.8s-94.1-9.3-137.6-27.8a352.57 352.57 0 0 1-112.4-75.9c-10-10-19.3-20.5-27.9-31.4l49.9-39.1a8 8 0 0 0-3-14.1l-156.8-38.3c-5-1.2-9.9 2.6-9.9 7.7l-.8 161.7c0 6.7 7.7 10.5 12.9 6.3l47.8-37.4C253.3 877.7 375.4 942 512.5 942 747 942 937.7 753.9 942 520.2a8 8 0 0 0-8-8.2z")),t.TwitterOutline = u("twitter", o, i(r, "M928 254.3c-30.6 13.2-63.9 22.7-98.2 26.4a170.1 170.1 0 0 0 75-94 336.64 336.64 0 0 1-108.2 41.2A170.1 170.1 0 0 0 672 174c-94.5 0-170.5 76.6-170.5 170.6 0 13.2 1.6 26.4 4.2 39.1-141.5-7.4-267.7-75-351.6-178.5a169.32 169.32 0 0 0-23.2 86.1c0 59.2 30.1 111.4 76 142.1a172 172 0 0 1-77.1-21.7v2.1c0 82.9 58.6 151.6 136.7 167.4a180.6 180.6 0 0 1-44.9 5.8c-11.1 0-21.6-1.1-32.2-2.6C211 652 273.9 701.1 348.8 702.7c-58.6 45.9-132 72.9-211.7 72.9-14.3 0-27.5-.5-41.2-2.1C171.5 822 261.2 850 357.8 850 671.4 850 843 590.2 843 364.7c0-7.4 0-14.8-.5-22.2 33.2-24.3 62.3-54.4 85.5-88.2z")),t.UnderlineOutline = u("underline", o, i(r, "M824 804H200c-4.4 0-8 3.4-8 7.6v60.8c0 4.2 3.6 7.6 8 7.6h624c4.4 0 8-3.4 8-7.6v-60.8c0-4.2-3.6-7.6-8-7.6zm-312-76c69.4 0 134.6-27.1 183.8-76.2C745 602.7 772 537.4 772 468V156c0-6.6-5.4-12-12-12h-60c-6.6 0-12 5.4-12 12v312c0 97-79 176-176 176s-176-79-176-176V156c0-6.6-5.4-12-12-12h-60c-6.6 0-12 5.4-12 12v312c0 69.4 27.1 134.6 76.2 183.8C377.3 701 442.6 728 512 728z")),t.UndoOutline = u("undo", o, i(r, "M511.4 124C290.5 124.3 112 303 112 523.9c0 128 60.2 242 153.8 315.2l-37.5 48c-4.1 5.3-.3 13 6.3 12.9l167-.8c5.2 0 9-4.9 7.7-9.9L369.8 727a8 8 0 0 0-14.1-3L315 776.1c-10.2-8-20-16.7-29.3-26a318.64 318.64 0 0 1-68.6-101.7C200.4 609 192 567.1 192 523.9s8.4-85.1 25.1-124.5c16.1-38.1 39.2-72.3 68.6-101.7 29.4-29.4 63.6-52.5 101.7-68.6C426.9 212.4 468.8 204 512 204s85.1 8.4 124.5 25.1c38.1 16.1 72.3 39.2 101.7 68.6 29.4 29.4 52.5 63.6 68.6 101.7 16.7 39.4 25.1 81.3 25.1 124.5s-8.4 85.1-25.1 124.5a318.64 318.64 0 0 1-68.6 101.7c-7.5 7.5-15.3 14.5-23.4 21.2a7.93 7.93 0 0 0-1.2 11.1l39.4 50.5c2.8 3.5 7.9 4.1 11.4 1.3C854.5 760.8 912 649.1 912 523.9c0-221.1-179.4-400.2-400.6-399.9z")),t.UnorderedListOutline = u("unordered-list", o, i(r, "M912 192H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM104 228a56 56 0 1 0 112 0 56 56 0 1 0-112 0zm0 284a56 56 0 1 0 112 0 56 56 0 1 0-112 0zm0 284a56 56 0 1 0 112 0 56 56 0 1 0-112 0z")),t.UpOutline = u("up", o, i(r, "M890.5 755.3L537.9 269.2c-12.8-17.6-39-17.6-51.7 0L133.5 755.3A8 8 0 0 0 140 768h75c5.1 0 9.9-2.5 12.9-6.6L512 369.8l284.1 391.6c3 4.1 7.8 6.6 12.9 6.6h75c6.5 0 10.3-7.4 6.5-12.7z")),t.UploadOutline = u("upload", o, i(r, "M400 317.7h73.9V656c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V317.7H624c6.7 0 10.4-7.7 6.3-12.9L518.3 163a8 8 0 0 0-12.6 0l-112 141.7c-4.1 5.3-.4 13 6.3 13zM878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8z")),t.UserAddOutline = u("user-add", o, i(r, "M678.3 642.4c24.2-13 51.9-20.4 81.4-20.4h.1c3 0 4.4-3.6 2.2-5.6a371.67 371.67 0 0 0-103.7-65.8c-.4-.2-.8-.3-1.2-.5C719.2 505 759.6 431.7 759.6 349c0-137-110.8-248-247.5-248S264.7 212 264.7 349c0 82.7 40.4 156 102.6 201.1-.4.2-.8.3-1.2.5-44.7 18.9-84.8 46-119.3 80.6a373.42 373.42 0 0 0-80.4 119.5A373.6 373.6 0 0 0 137 888.8a8 8 0 0 0 8 8.2h59.9c4.3 0 7.9-3.5 8-7.8 2-77.2 32.9-149.5 87.6-204.3C357 628.2 432.2 597 512.2 597c56.7 0 111.1 15.7 158 45.1a8.1 8.1 0 0 0 8.1.3zM512.2 521c-45.8 0-88.9-17.9-121.4-50.4A171.2 171.2 0 0 1 340.5 349c0-45.9 17.9-89.1 50.3-121.6S466.3 177 512.2 177s88.9 17.9 121.4 50.4A171.2 171.2 0 0 1 683.9 349c0 45.9-17.9 89.1-50.3 121.6C601.1 503.1 558 521 512.2 521zM880 759h-84v-84c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v84h-84c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h84v84c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-84h84c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8z")),t.UsergroupAddOutline = u("usergroup-add", o, i(r, "M892 772h-80v-80c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v80h-80c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h80v80c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-80h80c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zM373.5 498.4c-.9-8.7-1.4-17.5-1.4-26.4 0-15.9 1.5-31.4 4.3-46.5.7-3.6-1.2-7.3-4.5-8.8-13.6-6.1-26.1-14.5-36.9-25.1a127.54 127.54 0 0 1-38.7-95.4c.9-32.1 13.8-62.6 36.3-85.6 24.7-25.3 57.9-39.1 93.2-38.7 31.9.3 62.7 12.6 86 34.4 7.9 7.4 14.7 15.6 20.4 24.4 2 3.1 5.9 4.4 9.3 3.2 17.6-6.1 36.2-10.4 55.3-12.4 5.6-.6 8.8-6.6 6.3-11.6-32.5-64.3-98.9-108.7-175.7-109.9-110.8-1.7-203.2 89.2-203.2 200 0 62.8 28.9 118.8 74.2 155.5-31.8 14.7-61.1 35-86.5 60.4-54.8 54.7-85.8 126.9-87.8 204a8 8 0 0 0 8 8.2h56.1c4.3 0 7.9-3.4 8-7.7 1.9-58 25.4-112.3 66.7-153.5 29.4-29.4 65.4-49.8 104.7-59.7 3.8-1.1 6.4-4.8 5.9-8.8zM824 472c0-109.4-87.9-198.3-196.9-200C516.3 270.3 424 361.2 424 472c0 62.8 29 118.8 74.2 155.5a300.95 300.95 0 0 0-86.4 60.4C357 742.6 326 814.8 324 891.8a8 8 0 0 0 8 8.2h56c4.3 0 7.9-3.4 8-7.7 1.9-58 25.4-112.3 66.7-153.5C505.8 695.7 563 672 624 672c110.4 0 200-89.5 200-200zm-109.5 90.5C690.3 586.7 658.2 600 624 600s-66.3-13.3-90.5-37.5a127.26 127.26 0 0 1-37.5-91.8c.3-32.8 13.4-64.5 36.3-88 24-24.6 56.1-38.3 90.4-38.7 33.9-.3 66.8 12.9 91 36.6 24.8 24.3 38.4 56.8 38.4 91.4-.1 34.2-13.4 66.3-37.6 90.5z")),t.UserOutline = u("user", o, i(r, "M858.5 763.6a374 374 0 0 0-80.6-119.5 375.63 375.63 0 0 0-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1-.4.2-.8.3-1.2.5-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 0 0-80.6 119.5A371.7 371.7 0 0 0 136 901.8a8 8 0 0 0 8 8.2h60c4.4 0 7.9-3.5 8-7.8 2-77.2 33-149.5 87.8-204.3 56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 0 0 8-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z")),t.UserDeleteOutline = u("user-delete", o, i(r, "M678.3 655.4c24.2-13 51.9-20.4 81.4-20.4h.1c3 0 4.4-3.6 2.2-5.6a371.67 371.67 0 0 0-103.7-65.8c-.4-.2-.8-.3-1.2-.5C719.2 518 759.6 444.7 759.6 362c0-137-110.8-248-247.5-248S264.7 225 264.7 362c0 82.7 40.4 156 102.6 201.1-.4.2-.8.3-1.2.5-44.7 18.9-84.8 46-119.3 80.6a373.42 373.42 0 0 0-80.4 119.5A373.6 373.6 0 0 0 137 901.8a8 8 0 0 0 8 8.2h59.9c4.3 0 7.9-3.5 8-7.8 2-77.2 32.9-149.5 87.6-204.3C357 641.2 432.2 610 512.2 610c56.7 0 111.1 15.7 158 45.1a8.1 8.1 0 0 0 8.1.3zM512.2 534c-45.8 0-88.9-17.9-121.4-50.4A171.2 171.2 0 0 1 340.5 362c0-45.9 17.9-89.1 50.3-121.6S466.3 190 512.2 190s88.9 17.9 121.4 50.4A171.2 171.2 0 0 1 683.9 362c0 45.9-17.9 89.1-50.3 121.6C601.1 516.1 558 534 512.2 534zM880 772H640c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h240c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8z")),t.UsergroupDeleteOutline = u("usergroup-delete", o, i(r, "M888 784H664c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h224c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zM373.5 510.4c-.9-8.7-1.4-17.5-1.4-26.4 0-15.9 1.5-31.4 4.3-46.5.7-3.6-1.2-7.3-4.5-8.8-13.6-6.1-26.1-14.5-36.9-25.1a127.54 127.54 0 0 1-38.7-95.4c.9-32.1 13.8-62.6 36.3-85.6 24.7-25.3 57.9-39.1 93.2-38.7 31.9.3 62.7 12.6 86 34.4 7.9 7.4 14.7 15.6 20.4 24.4 2 3.1 5.9 4.4 9.3 3.2 17.6-6.1 36.2-10.4 55.3-12.4 5.6-.6 8.8-6.6 6.3-11.6-32.5-64.3-98.9-108.7-175.7-109.9-110.9-1.7-203.3 89.2-203.3 199.9 0 62.8 28.9 118.8 74.2 155.5-31.8 14.7-61.1 35-86.5 60.4-54.8 54.7-85.8 126.9-87.8 204a8 8 0 0 0 8 8.2h56.1c4.3 0 7.9-3.4 8-7.7 1.9-58 25.4-112.3 66.7-153.5 29.4-29.4 65.4-49.8 104.7-59.7 3.9-1 6.5-4.7 6-8.7zM824 484c0-109.4-87.9-198.3-196.9-200C516.3 282.3 424 373.2 424 484c0 62.8 29 118.8 74.2 155.5a300.95 300.95 0 0 0-86.4 60.4C357 754.6 326 826.8 324 903.8a8 8 0 0 0 8 8.2h56c4.3 0 7.9-3.4 8-7.7 1.9-58 25.4-112.3 66.7-153.5C505.8 707.7 563 684 624 684c110.4 0 200-89.5 200-200zm-109.5 90.5C690.3 598.7 658.2 612 624 612s-66.3-13.3-90.5-37.5a127.26 127.26 0 0 1-37.5-91.8c.3-32.8 13.4-64.5 36.3-88 24-24.6 56.1-38.3 90.4-38.7 33.9-.3 66.8 12.9 91 36.6 24.8 24.3 38.4 56.8 38.4 91.4-.1 34.2-13.4 66.3-37.6 90.5z")),t.VerticalAlignBottomOutline = u("vertical-align-bottom", o, i(r, "M859.9 780H164.1c-4.5 0-8.1 3.6-8.1 8v60c0 4.4 3.6 8 8.1 8h695.8c4.5 0 8.1-3.6 8.1-8v-60c0-4.4-3.6-8-8.1-8zM505.7 669a8 8 0 0 0 12.6 0l112-141.7c4.1-5.2.4-12.9-6.3-12.9h-74.1V176c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v338.3H400c-6.7 0-10.4 7.7-6.3 12.9l112 141.8z")),t.VerticalAlignMiddleOutline = u("vertical-align-middle", o, i(r, "M859.9 474H164.1c-4.5 0-8.1 3.6-8.1 8v60c0 4.4 3.6 8 8.1 8h695.8c4.5 0 8.1-3.6 8.1-8v-60c0-4.4-3.6-8-8.1-8zm-353.6-74.7c2.9 3.7 8.5 3.7 11.3 0l100.8-127.5c3.7-4.7.4-11.7-5.7-11.7H550V104c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v156h-62.8c-6 0-9.4 7-5.7 11.7l100.8 127.6zm11.4 225.4a7.14 7.14 0 0 0-11.3 0L405.6 752.3a7.23 7.23 0 0 0 5.7 11.7H474v156c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V764h62.8c6 0 9.4-7 5.7-11.7L517.7 624.7z")),t.VerticalAlignTopOutline = u("vertical-align-top", o, i(r, "M859.9 168H164.1c-4.5 0-8.1 3.6-8.1 8v60c0 4.4 3.6 8 8.1 8h695.8c4.5 0 8.1-3.6 8.1-8v-60c0-4.4-3.6-8-8.1-8zM518.3 355a8 8 0 0 0-12.6 0l-112 141.7a7.98 7.98 0 0 0 6.3 12.9h73.9V848c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V509.7H624c6.7 0 10.4-7.7 6.3-12.9L518.3 355z")),t.VerticalRightOutline = u("vertical-right", o, i(r, "M326 164h-64c-4.4 0-8 3.6-8 8v688c0 4.4 3.6 8 8 8h64c4.4 0 8-3.6 8-8V172c0-4.4-3.6-8-8-8zm444 72.4V164c0-6.8-7.9-10.5-13.1-6.1L335 512l421.9 354.1c5.2 4.4 13.1.7 13.1-6.1v-72.4c0-9.4-4.2-18.4-11.4-24.5L459.4 512l299.2-251.1c7.2-6.1 11.4-15.1 11.4-24.5z")),t.VerticalLeftOutline = u("vertical-left", o, i(r, "M762 164h-64c-4.4 0-8 3.6-8 8v688c0 4.4 3.6 8 8 8h64c4.4 0 8-3.6 8-8V172c0-4.4-3.6-8-8-8zm-508 0v72.4c0 9.5 4.2 18.4 11.4 24.5L564.6 512 265.4 763.1c-7.2 6.1-11.4 15-11.4 24.5V860c0 6.8 7.9 10.5 13.1 6.1L689 512 267.1 157.9A7.95 7.95 0 0 0 254 164z")),t.WifiOutline = u("wifi", o, i(r, "M723 620.5C666.8 571.6 593.4 542 513 542s-153.8 29.6-210.1 78.6a8.1 8.1 0 0 0-.8 11.2l36 42.9c2.9 3.4 8 3.8 11.4.9C393.1 637.2 450.3 614 513 614s119.9 23.2 163.5 61.5c3.4 2.9 8.5 2.5 11.4-.9l36-42.9c2.8-3.3 2.4-8.3-.9-11.2zm117.4-140.1C751.7 406.5 637.6 362 513 362s-238.7 44.5-327.5 118.4a8.05 8.05 0 0 0-1 11.3l36 42.9c2.8 3.4 7.9 3.8 11.2 1C308 472.2 406.1 434 513 434s205 38.2 281.2 101.6c3.4 2.8 8.4 2.4 11.2-1l36-42.9c2.8-3.4 2.4-8.5-1-11.3zm116.7-139C835.7 241.8 680.3 182 511 182c-168.2 0-322.6 59-443.7 157.4a8 8 0 0 0-1.1 11.4l36 42.9c2.8 3.3 7.8 3.8 11.1 1.1C222 306.7 360.3 254 511 254c151.8 0 291 53.5 400 142.7 3.4 2.8 8.4 2.3 11.2-1.1l36-42.9c2.9-3.4 2.4-8.5-1.1-11.3zM448 778a64 64 0 1 0 128 0 64 64 0 1 0-128 0z")),t.ZhihuOutline = u("zhihu", o, i(r, "M564.7 230.1V803h60l25.2 71.4L756.3 803h131.5V230.1H564.7zm247.7 497h-59.9l-75.1 50.4-17.8-50.4h-18V308.3h170.7v418.8zM526.1 486.9H393.3c2.1-44.9 4.3-104.3 6.6-172.9h130.9l-.1-8.1c0-.6-.2-14.7-2.3-29.1-2.1-15-6.6-34.9-21-34.9H287.8c4.4-20.6 15.7-69.7 29.4-93.8l6.4-11.2-12.9-.7c-.8 0-19.6-.9-41.4 10.6-35.7 19-51.7 56.4-58.7 84.4-18.4 73.1-44.6 123.9-55.7 145.6-3.3 6.4-5.3 10.2-6.2 12.8-1.8 4.9-.8 9.8 2.8 13 10.5 9.5 38.2-2.9 38.5-3 .6-.3 1.3-.6 2.2-1 13.9-6.3 55.1-25 69.8-84.5h56.7c.7 32.2 3.1 138.4 2.9 172.9h-141l-2.1 1.5c-23.1 16.9-30.5 63.2-30.8 65.2l-1.4 9.2h167c-12.3 78.3-26.5 113.4-34 127.4-3.7 7-7.3 14-10.7 20.8-21.3 42.2-43.4 85.8-126.3 153.6-3.6 2.8-7 8-4.8 13.7 2.4 6.3 9.3 9.1 24.6 9.1 5.4 0 11.8-.3 19.4-1 49.9-4.4 100.8-18 135.1-87.6 17-35.1 31.7-71.7 43.9-108.9L497 850l5-12c.8-1.9 19-46.3 5.1-95.9l-.5-1.8-108.1-123-22 16.6c6.4-26.1 10.6-49.9 12.5-71.1h158.7v-8c0-40.1-18.5-63.9-19.2-64.9l-2.4-3z")),t.WeiboOutline = u("weibo", o, i(r, "M457.3 543c-68.1-17.7-145 16.2-174.6 76.2-30.1 61.2-1 129.1 67.8 151.3 71.2 23 155.2-12.2 184.4-78.3 28.7-64.6-7.2-131-77.6-149.2zm-52 156.2c-13.8 22.1-43.5 31.7-65.8 21.6-22-10-28.5-35.7-14.6-57.2 13.7-21.4 42.3-31 64.4-21.7 22.4 9.5 29.6 35 16 57.3zm45.5-58.5c-5 8.6-16.1 12.7-24.7 9.1-8.5-3.5-11.2-13.1-6.4-21.5 5-8.4 15.6-12.4 24.1-9.1 8.7 3.2 11.8 12.9 7 21.5zm334.5-197.2c15 4.8 31-3.4 35.9-18.3 11.8-36.6 4.4-78.4-23.2-109a111.39 111.39 0 0 0-106-34.3 28.45 28.45 0 0 0-21.9 33.8 28.39 28.39 0 0 0 33.8 21.8c18.4-3.9 38.3 1.8 51.9 16.7a54.2 54.2 0 0 1 11.3 53.3 28.45 28.45 0 0 0 18.2 36zm99.8-206c-56.7-62.9-140.4-86.9-217.7-70.5a32.98 32.98 0 0 0-25.4 39.3 33.12 33.12 0 0 0 39.3 25.5c55-11.7 114.4 5.4 154.8 50.1 40.3 44.7 51.2 105.7 34 159.1-5.6 17.4 3.9 36 21.3 41.7 17.4 5.6 36-3.9 41.6-21.2v-.1c24.1-75.4 8.9-161.1-47.9-223.9zM729 499c-12.2-3.6-20.5-6.1-14.1-22.1 13.8-34.7 15.2-64.7.3-86-28-40.1-104.8-37.9-192.8-1.1 0 0-27.6 12.1-20.6-9.8 13.5-43.5 11.5-79.9-9.6-101-47.7-47.8-174.6 1.8-283.5 110.6C127.3 471.1 80 557.5 80 632.2 80 775.1 263.2 862 442.5 862c235 0 391.3-136.5 391.3-245 0-65.5-55.2-102.6-104.8-118zM443 810.8c-143 14.1-266.5-50.5-275.8-144.5-9.3-93.9 99.2-181.5 242.2-195.6 143-14.2 266.5 50.5 275.8 144.4C694.4 709 586 796.6 443 810.8z")),t.WomanOutline = u("woman", o, i(r, "M712.8 548.8c53.6-53.6 83.2-125 83.2-200.8 0-75.9-29.5-147.2-83.2-200.8C659.2 93.6 587.8 64 512 64s-147.2 29.5-200.8 83.2C257.6 200.9 228 272.1 228 348c0 63.8 20.9 124.4 59.4 173.9 7.3 9.4 15.2 18.3 23.7 26.9 8.5 8.5 17.5 16.4 26.8 23.7 39.6 30.8 86.3 50.4 136.1 57V736H360c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h114v140c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V812h114c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8H550V629.5c61.5-8.2 118.2-36.1 162.8-80.7zM512 556c-55.6 0-107.7-21.6-147.1-60.9C325.6 455.8 304 403.6 304 348s21.6-107.7 60.9-147.1C404.2 161.5 456.4 140 512 140s107.7 21.6 147.1 60.9C698.4 240.2 720 292.4 720 348s-21.6 107.7-60.9 147.1C619.7 534.4 567.6 556 512 556z")),t.ZoomInOutline = u("zoom-in", o, i(r, "M637 443H519V309c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v134H325c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h118v134c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V519h118c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8zm284 424L775 721c122.1-148.9 113.6-369.5-26-509-148-148.1-388.4-148.1-537 0-148.1 148.6-148.1 389 0 537 139.5 139.6 360.1 148.1 509 26l146 146c3.2 2.8 8.3 2.8 11 0l43-43c2.8-2.7 2.8-7.8 0-11zM696 696c-118.8 118.7-311.2 118.7-430 0-118.7-118.8-118.7-311.2 0-430 118.8-118.7 311.2-118.7 430 0 118.7 118.8 118.7 311.2 0 430z")),t.AccountBookTwoTone = u("account-book", a, (function (e, t) {
		return i(r, [t, "M712 304c0 4.4-3.6 8-8 8h-56c-4.4 0-8-3.6-8-8v-48H384v48c0 4.4-3.6 8-8 8h-56c-4.4 0-8-3.6-8-8v-48H184v584h656V256H712v48zm-65.6 121.8l-89.3 164.1h49.1c4.4 0 8 3.6 8 8v21.3c0 4.4-3.6 8-8 8h-65.4v33.7h65.4c4.4 0 8 3.6 8 8v21.3c0 4.4-3.6 8-8 8h-65.4V752c0 4.4-3.6 8-8 8h-41.3c-4.4 0-8-3.6-8-8v-53.8h-65.1c-4.4 0-8-3.6-8-8v-21.3c0-4.4 3.6-8 8-8h65.1v-33.7h-65.1c-4.4 0-8-3.6-8-8v-21.3c0-4.4 3.6-8 8-8H467l-89.3-164c-2.1-3.9-.7-8.8 3.2-10.9 1.1-.7 2.5-1 3.8-1h46a8 8 0 0 1 7.1 4.4l73.4 145.4h2.8l73.4-145.4c1.3-2.7 4.1-4.4 7.1-4.4h45c4.5 0 8 3.6 7.9 8 0 1.3-.4 2.6-1 3.8z"], [e, "M639.5 414h-45c-3 0-5.8 1.7-7.1 4.4L514 563.8h-2.8l-73.4-145.4a8 8 0 0 0-7.1-4.4h-46c-1.3 0-2.7.3-3.8 1-3.9 2.1-5.3 7-3.2 10.9l89.3 164h-48.6c-4.4 0-8 3.6-8 8v21.3c0 4.4 3.6 8 8 8h65.1v33.7h-65.1c-4.4 0-8 3.6-8 8v21.3c0 4.4 3.6 8 8 8h65.1V752c0 4.4 3.6 8 8 8h41.3c4.4 0 8-3.6 8-8v-53.8h65.4c4.4 0 8-3.6 8-8v-21.3c0-4.4-3.6-8-8-8h-65.4v-33.7h65.4c4.4 0 8-3.6 8-8v-21.3c0-4.4-3.6-8-8-8h-49.1l89.3-164.1c.6-1.2 1-2.5 1-3.8.1-4.4-3.4-8-7.9-8z"], [e, "M880 184H712v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H384v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H144c-17.7 0-32 14.3-32 32v664c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V216c0-17.7-14.3-32-32-32zm-40 656H184V256h128v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h256v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h128v584z"])
	})),t.ZoomOutOutline = u("zoom-out", o, i(r, "M637 443H325c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h312c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8zm284 424L775 721c122.1-148.9 113.6-369.5-26-509-148-148.1-388.4-148.1-537 0-148.1 148.6-148.1 389 0 537 139.5 139.6 360.1 148.1 509 26l146 146c3.2 2.8 8.3 2.8 11 0l43-43c2.8-2.7 2.8-7.8 0-11zM696 696c-118.8 118.7-311.2 118.7-430 0-118.7-118.8-118.7-311.2 0-430 118.8-118.7 311.2-118.7 430 0 118.7 118.8 118.7 311.2 0 430z")),t.AlertTwoTone = u("alert", a, (function (e, t) {
		return i(r, [t, "M340 585c0-5.5 4.5-10 10-10h44c5.5 0 10 4.5 10 10v171h355V563c0-136.4-110.6-247-247-247S265 426.6 265 563v193h75V585z"], [e, "M216.9 310.5l39.6-39.6c3.1-3.1 3.1-8.2 0-11.3l-67.9-67.9a8.03 8.03 0 0 0-11.3 0l-39.6 39.6a8.03 8.03 0 0 0 0 11.3l67.9 67.9c3.1 3.1 8.1 3.1 11.3 0zm669.6-79.2l-39.6-39.6a8.03 8.03 0 0 0-11.3 0l-67.9 67.9a8.03 8.03 0 0 0 0 11.3l39.6 39.6c3.1 3.1 8.2 3.1 11.3 0l67.9-67.9c3.1-3.2 3.1-8.2 0-11.3zM484 180h56c4.4 0 8-3.6 8-8V76c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v96c0 4.4 3.6 8 8 8zm348 712H192c-17.7 0-32 14.3-32 32v24c0 4.4 3.6 8 8 8h688c4.4 0 8-3.6 8-8v-24c0-17.7-14.3-32-32-32zm-639-96c0 17.7 14.3 32 32 32h574c17.7 0 32-14.3 32-32V563c0-176.2-142.8-319-319-319S193 386.8 193 563v233zm72-233c0-136.4 110.6-247 247-247s247 110.6 247 247v193H404V585c0-5.5-4.5-10-10-10h-44c-5.5 0-10 4.5-10 10v171h-75V563z"])
	})),t.ApiTwoTone = u("api", a, (function (e, t) {
		return i(r, [t, "M148.2 674.6zm106.7-92.3c-25 25-38.7 58.1-38.7 93.4s13.8 68.5 38.7 93.4c25 25 58.1 38.7 93.4 38.7 35.3 0 68.5-13.8 93.4-38.7l59.4-59.4-186.8-186.8-59.4 59.4zm420.8-366.1c-35.3 0-68.5 13.8-93.4 38.7l-59.4 59.4 186.8 186.8 59.4-59.4c24.9-25 38.7-58.1 38.7-93.4s-13.8-68.5-38.7-93.4c-25-25-58.1-38.7-93.4-38.7z"], [e, "M578.9 546.7a8.03 8.03 0 0 0-11.3 0L501 613.3 410.7 523l66.7-66.7c3.1-3.1 3.1-8.2 0-11.3L441 408.6a8.03 8.03 0 0 0-11.3 0L363 475.3l-43-43a7.85 7.85 0 0 0-5.7-2.3c-2 0-4.1.8-5.7 2.3L206.8 534.2a199.45 199.45 0 0 0-58.6 140.4c-.2 39.5 11.2 79.1 34.3 113.1l-76.1 76.1a8.03 8.03 0 0 0 0 11.3l42.4 42.4c1.6 1.6 3.6 2.3 5.7 2.3s4.1-.8 5.7-2.3l76.1-76.1c33.7 22.9 72.9 34.3 112.1 34.3 51.2 0 102.4-19.5 141.5-58.6l101.9-101.9c3.1-3.1 3.1-8.2 0-11.3l-43-43 66.7-66.7c3.1-3.1 3.1-8.2 0-11.3l-36.6-36.2zM441.7 769.1a131.32 131.32 0 0 1-93.4 38.7c-35.3 0-68.4-13.7-93.4-38.7-24.9-24.9-38.7-58.1-38.7-93.4s13.7-68.4 38.7-93.4l59.4-59.4 186.8 186.8-59.4 59.4zm476-620.3l-42.4-42.4c-1.6-1.6-3.6-2.3-5.7-2.3s-4.1.8-5.7 2.3l-76.1 76.1a199.27 199.27 0 0 0-112.1-34.3c-51.2 0-102.4 19.5-141.5 58.6L432.3 308.7a8.03 8.03 0 0 0 0 11.3L704 591.7c1.6 1.6 3.6 2.3 5.7 2.3 2 0 4.1-.8 5.7-2.3l101.9-101.9c68.9-69 77-175.7 24.3-253.5l76.1-76.1c3.1-3.2 3.1-8.3 0-11.4zM769.1 441.7l-59.4 59.4-186.8-186.8 59.4-59.4c24.9-24.9 58.1-38.7 93.4-38.7s68.4 13.7 93.4 38.7c24.9 24.9 38.7 58.1 38.7 93.4s-13.8 68.4-38.7 93.4z"])
	})),t.AppstoreTwoTone = u("appstore", a, (function (e, t) {
		return i(r, [e, "M864 144H560c-8.8 0-16 7.2-16 16v304c0 8.8 7.2 16 16 16h304c8.8 0 16-7.2 16-16V160c0-8.8-7.2-16-16-16zm-52 268H612V212h200v200zM464 544H160c-8.8 0-16 7.2-16 16v304c0 8.8 7.2 16 16 16h304c8.8 0 16-7.2 16-16V560c0-8.8-7.2-16-16-16zm-52 268H212V612h200v200zm52-668H160c-8.8 0-16 7.2-16 16v304c0 8.8 7.2 16 16 16h304c8.8 0 16-7.2 16-16V160c0-8.8-7.2-16-16-16zm-52 268H212V212h200v200zm452 132H560c-8.8 0-16 7.2-16 16v304c0 8.8 7.2 16 16 16h304c8.8 0 16-7.2 16-16V560c0-8.8-7.2-16-16-16zm-52 268H612V612h200v200z"], [t, "M212 212h200v200H212zm400 0h200v200H612zM212 612h200v200H212zm400 0h200v200H612z"])
	})),t.BankTwoTone = u("bank", a, (function (e, t) {
		return i(r, [t, "M240.9 393.9h542.2L512 196.7z"], [e, "M894 462c30.9 0 43.8-39.7 18.7-58L530.8 126.2a31.81 31.81 0 0 0-37.6 0L111.3 404c-25.1 18.2-12.2 58 18.8 58H192v374h-72c-4.4 0-8 3.6-8 8v52c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-52c0-4.4-3.6-8-8-8h-72V462h62zM381 836H264V462h117v374zm189 0H453V462h117v374zm190 0H642V462h118v374zM240.9 393.9L512 196.7l271.1 197.2H240.9z"])
	})),t.AudioTwoTone = u("audio", a, (function (e, t) {
		return i(r, [t, "M512 552c54.3 0 98-43.2 98-96V232c0-52.8-43.7-96-98-96s-98 43.2-98 96v224c0 52.8 43.7 96 98 96z"], [e, "M842 454c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8 0 140.3-113.7 254-254 254S258 594.3 258 454c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8 0 168.7 126.6 307.9 290 327.6V884H326.7c-13.7 0-24.7 14.3-24.7 32v36c0 4.4 2.8 8 6.2 8h407.6c3.4 0 6.2-3.6 6.2-8v-36c0-17.7-11-32-24.7-32H548V782.1c165.3-18 294-158 294-328.1z"], [e, "M512 624c93.9 0 170-75.2 170-168V232c0-92.8-76.1-168-170-168s-170 75.2-170 168v224c0 92.8 76.1 168 170 168zm-98-392c0-52.8 43.7-96 98-96s98 43.2 98 96v224c0 52.8-43.7 96-98 96s-98-43.2-98-96V232z"])
	})),t.BellTwoTone = u("bell", a, (function (e, t) {
		return i(r, [t, "M512 220c-55.6 0-107.8 21.6-147.1 60.9S304 372.4 304 428v340h416V428c0-55.6-21.6-107.8-60.9-147.1S567.6 220 512 220zm280 208c0-141.1-104.3-257.8-240-277.2v.1c135.7 19.4 240 136 240 277.1zM472 150.9v-.1C336.3 170.2 232 286.9 232 428c0-141.1 104.3-257.7 240-277.1z"], [e, "M816 768h-24V428c0-141.1-104.3-257.7-240-277.1V112c0-22.1-17.9-40-40-40s-40 17.9-40 40v38.9c-135.7 19.4-240 136-240 277.1v340h-24c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h216c0 61.8 50.2 112 112 112s112-50.2 112-112h216c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM512 888c-26.5 0-48-21.5-48-48h96c0 26.5-21.5 48-48 48zm208-120H304V428c0-55.6 21.6-107.8 60.9-147.1S456.4 220 512 220c55.6 0 107.8 21.6 147.1 60.9S720 372.4 720 428v340z"])
	})),t.BookTwoTone = u("book", a, (function (e, t) {
		return i(r, [e, "M832 64H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32zm-260 72h96v209.9L621.5 312 572 347.4V136zM232 888V136h280v296.9c0 3.3 1 6.6 3 9.3a15.9 15.9 0 0 0 22.3 3.7l83.8-59.9 81.4 59.4c2.7 2 6 3.1 9.4 3.1 8.8 0 16-7.2 16-16V136h64v752H232z"], [t, "M668 345.9V136h-96v211.4l49.5-35.4z"], [t, "M727.9 136v296.5c0 8.8-7.2 16-16 16-3.4 0-6.7-1.1-9.4-3.1L621.1 386l-83.8 59.9a15.9 15.9 0 0 1-22.3-3.7c-2-2.7-3-6-3-9.3V136H232v752h559.9V136h-64z"])
	})),t.BoxPlotTwoTone = u("box-plot", a, (function (e, t) {
		return i(r, [t, "M296 368h88v288h-88zm152 0h280v288H448z"], [e, "M952 224h-52c-4.4 0-8 3.6-8 8v248h-92V304c0-4.4-3.6-8-8-8H232c-4.4 0-8 3.6-8 8v176h-92V232c0-4.4-3.6-8-8-8H72c-4.4 0-8 3.6-8 8v560c0 4.4 3.6 8 8 8h52c4.4 0 8-3.6 8-8V548h92v172c0 4.4 3.6 8 8 8h560c4.4 0 8-3.6 8-8V548h92v244c0 4.4 3.6 8 8 8h52c4.4 0 8-3.6 8-8V232c0-4.4-3.6-8-8-8zM384 656h-88V368h88v288zm344 0H448V368h280v288z"])
	})),t.BugTwoTone = u("bug", a, (function (e, t) {
		return i(r, [e, "M308 412v268c0 36.78 9.68 71.96 27.8 102.9a205.39 205.39 0 0 0 73.3 73.3A202.68 202.68 0 0 0 512 884c36.78 0 71.96-9.68 102.9-27.8a205.39 205.39 0 0 0 73.3-73.3A202.68 202.68 0 0 0 716 680V412H308zm484 172v96c0 6.5-.22 12.95-.66 19.35C859.94 728.64 908 796.7 908 876a8 8 0 0 1-8 8h-56a8 8 0 0 1-8-8c0-44.24-23.94-82.89-59.57-103.7a278.63 278.63 0 0 1-22.66 49.02 281.39 281.39 0 0 1-100.45 100.45C611.84 946.07 563.55 960 512 960s-99.84-13.93-141.32-38.23a281.39 281.39 0 0 1-100.45-100.45 278.63 278.63 0 0 1-22.66-49.02A119.95 119.95 0 0 0 188 876a8 8 0 0 1-8 8h-56a8 8 0 0 1-8-8c0-79.3 48.07-147.36 116.66-176.65A284.12 284.12 0 0 1 232 680v-96H84a8 8 0 0 1-8-8v-56a8 8 0 0 1 8-8h148V412c-76.77 0-139-62.23-139-139a8 8 0 0 1 8-8h60a8 8 0 0 1 8 8 63 63 0 0 0 63 63h560a63 63 0 0 0 63-63 8 8 0 0 1 8-8h60a8 8 0 0 1 8 8c0 76.77-62.23 139-139 139v100h148a8 8 0 0 1 8 8v56a8 8 0 0 1-8 8H792zM368 272a8 8 0 0 1-8 8h-56a8 8 0 0 1-8-8c0-40.04 8.78-76.75 25.9-108.07a184.57 184.57 0 0 1 74.03-74.03C427.25 72.78 463.96 64 504 64h16c40.04 0 76.75 8.78 108.07 25.9a184.57 184.57 0 0 1 74.03 74.03C719.22 195.25 728 231.96 728 272a8 8 0 0 1-8 8h-56a8 8 0 0 1-8-8c0-28.33-5.94-53.15-17.08-73.53a112.56 112.56 0 0 0-45.39-45.4C573.15 141.95 548.33 136 520 136h-16c-28.33 0-53.15 5.94-73.53 17.08a112.56 112.56 0 0 0-45.4 45.39C373.95 218.85 368 243.67 368 272z"], [t, "M308 412v268c0 36.78 9.68 71.96 27.8 102.9a205.39 205.39 0 0 0 73.3 73.3A202.68 202.68 0 0 0 512 884c36.78 0 71.96-9.68 102.9-27.8a205.39 205.39 0 0 0 73.3-73.3A202.68 202.68 0 0 0 716 680V412H308z"])
	})),t.BulbTwoTone = u("bulb", a, (function (e, t) {
		return i(r, [t, "M512 136c-141.4 0-256 114.6-256 256 0 92.5 49.4 176.3 128.1 221.8l35.9 20.8V752h184V634.6l35.9-20.8C718.6 568.3 768 484.5 768 392c0-141.4-114.6-256-256-256z"], [e, "M632 888H392c-4.4 0-8 3.6-8 8v32c0 17.7 14.3 32 32 32h192c17.7 0 32-14.3 32-32v-32c0-4.4-3.6-8-8-8zM512 64c-181.1 0-328 146.9-328 328 0 121.4 66 227.4 164 284.1V792c0 17.7 14.3 32 32 32h264c17.7 0 32-14.3 32-32V676.1c98-56.7 164-162.7 164-284.1 0-181.1-146.9-328-328-328zm127.9 549.8L604 634.6V752H420V634.6l-35.9-20.8C305.4 568.3 256 484.5 256 392c0-141.4 114.6-256 256-256s256 114.6 256 256c0 92.5-49.4 176.3-128.1 221.8z"])
	})),t.CalculatorTwoTone = u("calculator", a, (function (e, t) {
		return i(r, [e, "M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z"], [t, "M184 840h656V184H184v656zm256.2-75h-50.8c-2.2 0-4.5-1.1-5.9-2.9L348 718.6l-35.5 43.5a7.38 7.38 0 0 1-5.9 2.9h-50.8c-6.6 0-10.2-7.9-5.8-13.1l62.7-76.8-61.2-74.9c-4.3-5.2-.7-13.1 5.9-13.1h50.9c2.2 0 4.5 1.1 5.9 2.9l34 41.6 34-41.6c1.5-1.9 3.6-2.9 5.9-2.9h50.8c6.6 0 10.2 7.9 5.9 13.1L383.5 675l62.7 76.8c4.2 5.3.6 13.2-6 13.2zM576 335c0-2.2 1.4-4 3.2-4h193.5c1.9 0 3.3 1.8 3.3 4v48c0 2.2-1.4 4-3.2 4H579.2c-1.8 0-3.2-1.8-3.2-4v-48zm0 265c0-2.2 1.4-4 3.2-4h193.5c1.9 0 3.3 1.8 3.3 4v48c0 2.2-1.4 4-3.2 4H579.2c-1.8 0-3.2-1.8-3.2-4v-48zm0 104c0-2.2 1.4-4 3.2-4h193.5c1.9 0 3.3 1.8 3.3 4v48c0 2.2-1.4 4-3.2 4H579.2c-1.8 0-3.2-1.8-3.2-4v-48zM248 335c0-2.2 1.4-4 3.2-4H320v-68.8c0-1.8 1.8-3.2 4-3.2h48c2.2 0 4 1.4 4 3.2V331h68.7c1.9 0 3.3 1.8 3.3 4v48c0 2.2-1.4 4-3.2 4H376v68.7c0 1.9-1.8 3.3-4 3.3h-48c-2.2 0-4-1.4-4-3.2V387h-68.8c-1.8 0-3.2-1.8-3.2-4v-48z"], [e, "M383.5 675l61.3-74.8c4.3-5.2.7-13.1-5.9-13.1h-50.8c-2.3 0-4.4 1-5.9 2.9l-34 41.6-34-41.6a7.69 7.69 0 0 0-5.9-2.9h-50.9c-6.6 0-10.2 7.9-5.9 13.1l61.2 74.9-62.7 76.8c-4.4 5.2-.8 13.1 5.8 13.1h50.8c2.3 0 4.4-1 5.9-2.9l35.5-43.5 35.5 43.5c1.4 1.8 3.7 2.9 5.9 2.9h50.8c6.6 0 10.2-7.9 6-13.2L383.5 675zM251.2 387H320v68.8c0 1.8 1.8 3.2 4 3.2h48c2.2 0 4-1.4 4-3.3V387h68.8c1.8 0 3.2-1.8 3.2-4v-48c0-2.2-1.4-4-3.3-4H376v-68.8c0-1.8-1.8-3.2-4-3.2h-48c-2.2 0-4 1.4-4 3.2V331h-68.8c-1.8 0-3.2 1.8-3.2 4v48c0 2.2 1.4 4 3.2 4zm328 369h193.6c1.8 0 3.2-1.8 3.2-4v-48c0-2.2-1.4-4-3.3-4H579.2c-1.8 0-3.2 1.8-3.2 4v48c0 2.2 1.4 4 3.2 4zm0-104h193.6c1.8 0 3.2-1.8 3.2-4v-48c0-2.2-1.4-4-3.3-4H579.2c-1.8 0-3.2 1.8-3.2 4v48c0 2.2 1.4 4 3.2 4zm0-265h193.6c1.8 0 3.2-1.8 3.2-4v-48c0-2.2-1.4-4-3.3-4H579.2c-1.8 0-3.2 1.8-3.2 4v48c0 2.2 1.4 4 3.2 4z"])
	})),t.BuildTwoTone = u("build", a, (function (e, t) {
		return i(r, [t, "M144 546h200v200H144zm268-268h200v200H412z"], [e, "M916 210H376c-17.7 0-32 14.3-32 32v236H108c-17.7 0-32 14.3-32 32v272c0 17.7 14.3 32 32 32h540c17.7 0 32-14.3 32-32V546h236c17.7 0 32-14.3 32-32V242c0-17.7-14.3-32-32-32zM344 746H144V546h200v200zm268 0H412V546h200v200zm0-268H412V278h200v200zm268 0H680V278h200v200z"])
	})),t.CalendarTwoTone = u("calendar", a, (function (e, t) {
		return i(r, [t, "M712 304c0 4.4-3.6 8-8 8h-56c-4.4 0-8-3.6-8-8v-48H384v48c0 4.4-3.6 8-8 8h-56c-4.4 0-8-3.6-8-8v-48H184v136h656V256H712v48z"], [e, "M880 184H712v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H384v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H144c-17.7 0-32 14.3-32 32v664c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V216c0-17.7-14.3-32-32-32zm-40 656H184V460h656v380zm0-448H184V256h128v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h256v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h128v136z"])
	})),t.CameraTwoTone = u("camera", a, (function (e, t) {
		return i(r, [t, "M864 320H677.2l-17.1-47.8-22.9-64.2H386.7l-22.9 64.2-17.1 47.8H160c-4.4 0-8 3.6-8 8v456c0 4.4 3.6 8 8 8h704c4.4 0 8-3.6 8-8V328c0-4.4-3.6-8-8-8zM512 704c-88.4 0-160-71.6-160-160s71.6-160 160-160 160 71.6 160 160-71.6 160-160 160z"], [e, "M512 384c-88.4 0-160 71.6-160 160s71.6 160 160 160 160-71.6 160-160-71.6-160-160-160zm0 256c-53 0-96-43-96-96s43-96 96-96 96 43 96 96-43 96-96 96z"], [e, "M864 248H728l-32.4-90.8a32.07 32.07 0 0 0-30.2-21.2H358.6c-13.5 0-25.6 8.5-30.1 21.2L296 248H160c-44.2 0-80 35.8-80 80v456c0 44.2 35.8 80 80 80h704c44.2 0 80-35.8 80-80V328c0-44.2-35.8-80-80-80zm8 536c0 4.4-3.6 8-8 8H160c-4.4 0-8-3.6-8-8V328c0-4.4 3.6-8 8-8h186.7l17.1-47.8 22.9-64.2h250.5l22.9 64.2 17.1 47.8H864c4.4 0 8 3.6 8 8v456z"])
	})),t.CarTwoTone = u("car", a, (function (e, t) {
		return i(r, [t, "M199.6 474L184 517v237h656V517l-15.6-43H199.6zM264 621c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40zm388 75c0 4.4-3.6 8-8 8H380c-4.4 0-8-3.6-8-8v-84c0-4.4 3.6-8 8-8h40c4.4 0 8 3.6 8 8v36h168v-36c0-4.4 3.6-8 8-8h40c4.4 0 8 3.6 8 8v84zm108-75c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40z"], [e, "M720 581a40 40 0 1 0 80 0 40 40 0 1 0-80 0z"], [e, "M959 413.4L935.3 372a8 8 0 0 0-10.9-2.9l-50.7 29.6-78.3-216.2a63.9 63.9 0 0 0-60.9-44.4H301.2c-34.7 0-65.5 22.4-76.2 55.5l-74.6 205.2-50.8-29.6a8 8 0 0 0-10.9 2.9L65 413.4c-2.2 3.8-.9 8.6 2.9 10.8l60.4 35.2-14.5 40c-1.2 3.2-1.8 6.6-1.8 10v348.2c0 15.7 11.8 28.4 26.3 28.4h67.6c12.3 0 23-9.3 25.6-22.3l7.7-37.7h545.6l7.7 37.7c2.7 13 13.3 22.3 25.6 22.3h67.6c14.5 0 26.3-12.7 26.3-28.4V509.4c0-3.4-.6-6.8-1.8-10l-14.5-40 60.3-35.2a8 8 0 0 0 3-10.8zM292.7 218.1l.5-1.3.4-1.3c1.1-3.3 4.1-5.5 7.6-5.5h427.6l75.4 208H220l72.7-199.9zM840 754H184V517l15.6-43h624.8l15.6 43v237z"], [e, "M224 581a40 40 0 1 0 80 0 40 40 0 1 0-80 0zm420 23h-40c-4.4 0-8 3.6-8 8v36H428v-36c0-4.4-3.6-8-8-8h-40c-4.4 0-8 3.6-8 8v84c0 4.4 3.6 8 8 8h264c4.4 0 8-3.6 8-8v-84c0-4.4-3.6-8-8-8z"])
	})),t.CarryOutTwoTone = u("carry-out", a, (function (e, t) {
		return i(r, [e, "M880 184H712v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H384v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H144c-17.7 0-32 14.3-32 32v664c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V216c0-17.7-14.3-32-32-32zm-40 656H184V256h128v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h256v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h128v584z"], [t, "M712 304c0 4.4-3.6 8-8 8h-56c-4.4 0-8-3.6-8-8v-48H384v48c0 4.4-3.6 8-8 8h-56c-4.4 0-8-3.6-8-8v-48H184v584h656V256H712v48zm-17.5 128.8L481.9 725.5a16.1 16.1 0 0 1-26 0l-126.4-174c-3.8-5.3 0-12.7 6.5-12.7h55.2c5.2 0 10 2.5 13 6.6l64.7 89 150.9-207.8c3-4.1 7.9-6.6 13-6.6H688c6.5 0 10.3 7.4 6.5 12.8z"], [e, "M688 420h-55.2c-5.1 0-10 2.5-13 6.6L468.9 634.4l-64.7-89c-3-4.1-7.8-6.6-13-6.6H336c-6.5 0-10.3 7.4-6.5 12.7l126.4 174a16.1 16.1 0 0 0 26 0l212.6-292.7c3.8-5.4 0-12.8-6.5-12.8z"])
	})),t.CheckCircleTwoTone = u("check-circle", a, (function (e, t) {
		return i(r, [e, "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"], [t, "M512 140c-205.4 0-372 166.6-372 372s166.6 372 372 372 372-166.6 372-372-166.6-372-372-372zm193.4 225.7l-210.6 292a31.8 31.8 0 0 1-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.3 0 19.9 5 25.9 13.3l71.2 98.8 157.2-218c6-8.4 15.7-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.4 12.7z"], [e, "M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0 0 51.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z"])
	})),t.CheckSquareTwoTone = u("check-square", a, (function (e, t) {
		return i(r, [e, "M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z"], [t, "M184 840h656V184H184v656zm130-367.8h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H688c6.5 0 10.3 7.4 6.5 12.7l-210.6 292a31.8 31.8 0 0 1-51.7 0L307.5 484.9c-3.8-5.3 0-12.7 6.5-12.7z"], [e, "M432.2 657.7a31.8 31.8 0 0 0 51.7 0l210.6-292c3.8-5.3 0-12.7-6.5-12.7h-46.9c-10.3 0-19.9 5-25.9 13.3L458 584.3l-71.2-98.8c-6-8.4-15.7-13.3-25.9-13.3H314c-6.5 0-10.3 7.4-6.5 12.7l124.7 172.8z"])
	})),t.ClockCircleTwoTone = u("clock-circle", a, (function (e, t) {
		return i(r, [e, "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"], [t, "M512 140c-205.4 0-372 166.6-372 372s166.6 372 372 372 372-166.6 372-372-166.6-372-372-372zm176.5 509.7l-28.6 39a7.99 7.99 0 0 1-11.2 1.7L483.3 569.8a7.92 7.92 0 0 1-3.3-6.5V288c0-4.4 3.6-8 8-8h48.1c4.4 0 8 3.6 8 8v247.5l142.6 103.1c3.6 2.5 4.4 7.5 1.8 11.1z"], [e, "M686.7 638.6L544.1 535.5V288c0-4.4-3.6-8-8-8H488c-4.4 0-8 3.6-8 8v275.3c0 2.6 1.2 5 3.3 6.5l165.4 120.6c3.6 2.6 8.6 1.9 11.2-1.7l28.6-39c2.6-3.6 1.8-8.6-1.8-11.1z"])
	})),t.CloseCircleTwoTone = u("close-circle", a, (function (e, t) {
		return i(r, [e, "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"], [t, "M512 140c-205.4 0-372 166.6-372 372s166.6 372 372 372 372-166.6 372-372-166.6-372-372-372zm171.8 527.1c1.2 1.5 1.9 3.3 1.9 5.2 0 4.5-3.6 8-8 8l-66-.3-99.3-118.4-99.3 118.5-66.1.3c-4.4 0-8-3.6-8-8 0-1.9.7-3.7 1.9-5.2L471 512.3l-130.1-155a8.32 8.32 0 0 1-1.9-5.2c0-4.5 3.6-8 8-8l66.1.3 99.3 118.4 99.4-118.5 66-.3c4.4 0 8 3.6 8 8 0 1.9-.6 3.8-1.8 5.2l-130.1 155 129.9 154.9z"], [e, "M685.8 352c0-4.4-3.6-8-8-8l-66 .3-99.4 118.5-99.3-118.4-66.1-.3c-4.4 0-8 3.5-8 8 0 1.9.7 3.7 1.9 5.2l130.1 155-130.1 154.9a8.32 8.32 0 0 0-1.9 5.2c0 4.4 3.6 8 8 8l66.1-.3 99.3-118.5L611.7 680l66 .3c4.4 0 8-3.5 8-8 0-1.9-.7-3.7-1.9-5.2L553.9 512.2l130.1-155c1.2-1.4 1.8-3.3 1.8-5.2z"])
	})),t.CloudTwoTone = u("cloud", a, (function (e, t) {
		return i(r, [t, "M791.9 492l-37.8-10-13.8-36.5c-8.6-22.7-20.6-44.1-35.7-63.4a245.73 245.73 0 0 0-52.4-49.9c-41.1-28.9-89.5-44.2-140-44.2s-98.9 15.3-140 44.2a245.6 245.6 0 0 0-52.4 49.9 240.47 240.47 0 0 0-35.7 63.4l-13.9 36.6-37.9 9.9a125.7 125.7 0 0 0-66.1 43.7A123.1 123.1 0 0 0 140 612c0 33.1 12.9 64.3 36.3 87.7 23.4 23.4 54.5 36.3 87.6 36.3h496.2c33.1 0 64.2-12.9 87.6-36.3A123.3 123.3 0 0 0 884 612c0-56.2-37.8-105.5-92.1-120z"], [e, "M811.4 418.7C765.6 297.9 648.9 212 512.2 212S258.8 297.8 213 418.6C127.3 441.1 64 519.1 64 612c0 110.5 89.5 200 199.9 200h496.2C870.5 812 960 722.5 960 612c0-92.7-63.1-170.7-148.6-193.3zm36.3 281a123.07 123.07 0 0 1-87.6 36.3H263.9c-33.1 0-64.2-12.9-87.6-36.3A123.3 123.3 0 0 1 140 612c0-28 9.1-54.3 26.2-76.3a125.7 125.7 0 0 1 66.1-43.7l37.9-9.9 13.9-36.6c8.6-22.8 20.6-44.1 35.7-63.4a245.6 245.6 0 0 1 52.4-49.9c41.1-28.9 89.5-44.2 140-44.2s98.9 15.3 140 44.2c19.9 14 37.5 30.8 52.4 49.9 15.1 19.3 27.1 40.7 35.7 63.4l13.8 36.5 37.8 10c54.3 14.5 92.1 63.8 92.1 120 0 33.1-12.9 64.3-36.3 87.7z"])
	})),t.CloseSquareTwoTone = u("close-square", a, (function (e, t) {
		return i(r, [e, "M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z"], [t, "M184 840h656V184H184v656zm163.9-473.9A7.95 7.95 0 0 1 354 353h58.9c4.7 0 9.2 2.1 12.3 5.7L512 462.2l86.8-103.5c3-3.6 7.5-5.7 12.3-5.7H670c6.8 0 10.5 7.9 6.1 13.1L553.8 512l122.3 145.9c4.4 5.2.7 13.1-6.1 13.1h-58.9c-4.7 0-9.2-2.1-12.3-5.7L512 561.8l-86.8 103.5c-3 3.6-7.5 5.7-12.3 5.7H354c-6.8 0-10.5-7.9-6.1-13.1L470.2 512 347.9 366.1z"], [e, "M354 671h58.9c4.8 0 9.3-2.1 12.3-5.7L512 561.8l86.8 103.5c3.1 3.6 7.6 5.7 12.3 5.7H670c6.8 0 10.5-7.9 6.1-13.1L553.8 512l122.3-145.9c4.4-5.2.7-13.1-6.1-13.1h-58.9c-4.8 0-9.3 2.1-12.3 5.7L512 462.2l-86.8-103.5c-3.1-3.6-7.6-5.7-12.3-5.7H354c-6.8 0-10.5 7.9-6.1 13.1L470.2 512 347.9 657.9A7.95 7.95 0 0 0 354 671z"])
	})),t.CodeTwoTone = u("code", a, (function (e, t) {
		return i(r, [e, "M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z"], [t, "M184 840h656V184H184v656zm339.5-223h185c4.1 0 7.5 3.6 7.5 8v48c0 4.4-3.4 8-7.5 8h-185c-4.1 0-7.5-3.6-7.5-8v-48c0-4.4 3.4-8 7.5-8zM308 610.3c0-2.3 1.1-4.6 2.9-6.1L420.7 512l-109.8-92.2a7.63 7.63 0 0 1-2.9-6.1V351c0-6.8 7.9-10.5 13.1-6.1l192 160.9c3.9 3.2 3.9 9.1 0 12.3l-192 161c-5.2 4.4-13.1.7-13.1-6.1v-62.7z"], [e, "M321.1 679.1l192-161c3.9-3.2 3.9-9.1 0-12.3l-192-160.9A7.95 7.95 0 0 0 308 351v62.7c0 2.4 1 4.6 2.9 6.1L420.7 512l-109.8 92.2a8.1 8.1 0 0 0-2.9 6.1V673c0 6.8 7.9 10.5 13.1 6.1zM516 673c0 4.4 3.4 8 7.5 8h185c4.1 0 7.5-3.6 7.5-8v-48c0-4.4-3.4-8-7.5-8h-185c-4.1 0-7.5 3.6-7.5 8v48z"])
	})),t.CompassTwoTone = u("compass", a, (function (e, t) {
		return i(r, [t, "M512 140c-205.4 0-372 166.6-372 372s166.6 372 372 372 372-166.6 372-372-166.6-372-372-372zM327.6 701.7c-2 .9-4.4 0-5.3-2.1-.4-1-.4-2.2 0-3.2L421 470.9 553.1 603l-225.5 98.7zm375.1-375.1L604 552.1 471.9 420l225.5-98.7c2-.9 4.4 0 5.3 2.1.4 1 .4 2.1 0 3.2z"], [e, "M322.3 696.4c-.4 1-.4 2.2 0 3.2.9 2.1 3.3 3 5.3 2.1L553.1 603 421 470.9l-98.7 225.5zm375.1-375.1L471.9 420 604 552.1l98.7-225.5c.4-1.1.4-2.2 0-3.2-.9-2.1-3.3-3-5.3-2.1z"], [e, "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"])
	})),t.ContactsTwoTone = u("contacts", a, (function (e, t) {
		return i(r, [t, "M460.3 526a51.7 52 0 1 0 103.4 0 51.7 52 0 1 0-103.4 0z"], [t, "M768 352c0 4.4-3.6 8-8 8h-56c-4.4 0-8-3.6-8-8v-56H548v56c0 4.4-3.6 8-8 8h-56c-4.4 0-8-3.6-8-8v-56H328v56c0 4.4-3.6 8-8 8h-56c-4.4 0-8-3.6-8-8v-56H136v496h752V296H768v56zM661 736h-43.8c-4.2 0-7.6-3.3-7.9-7.5-3.8-50.5-46-90.5-97.2-90.5s-93.4 39.9-97.2 90.5c-.3 4.2-3.7 7.5-7.9 7.5h-43.9a8 8 0 0 1-8-8.4c2.8-53.3 31.9-99.6 74.6-126.1-18.1-20-29.1-46.4-29.1-75.5 0-61.9 49.9-112 111.4-112s111.4 50.1 111.4 112c0 29.1-11 55.6-29.1 75.5 42.7 26.4 71.9 72.8 74.7 126.1a8 8 0 0 1-8 8.4z"], [e, "M594.3 601.5a111.8 111.8 0 0 0 29.1-75.5c0-61.9-49.9-112-111.4-112s-111.4 50.1-111.4 112c0 29.1 11 55.5 29.1 75.5a158.09 158.09 0 0 0-74.6 126.1 8 8 0 0 0 8 8.4H407c4.2 0 7.6-3.3 7.9-7.5 3.8-50.6 46-90.5 97.2-90.5s93.4 40 97.2 90.5c.3 4.2 3.7 7.5 7.9 7.5H661a8 8 0 0 0 8-8.4c-2.8-53.3-32-99.7-74.7-126.1zM512 578c-28.5 0-51.7-23.3-51.7-52s23.2-52 51.7-52 51.7 23.3 51.7 52-23.2 52-51.7 52z"], [e, "M928 224H768v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56H548v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56H328v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56H96c-17.7 0-32 14.3-32 32v576c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V256c0-17.7-14.3-32-32-32zm-40 568H136V296h120v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56h148v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56h148v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56h120v496z"])
	})),t.ContainerTwoTone = u("container", a, (function (e, t) {
		return i(r, [t, "M635 771.7c-34.5 28.6-78.2 44.3-123 44.3s-88.5-15.8-123-44.3a194.02 194.02 0 0 1-59.1-84.7H232v201h560V687h-97.9c-11.6 32.8-32 62.3-59.1 84.7z"], [e, "M320 501h384c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H320c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8z"], [e, "M832 64H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32zm-40 824H232V687h97.9c11.6 32.8 32 62.3 59.1 84.7 34.5 28.5 78.2 44.3 123 44.3s88.5-15.7 123-44.3c27.1-22.4 47.5-51.9 59.1-84.7H792v201zm0-264H643.6l-5.2 24.7C626.4 708.5 573.2 752 512 752s-114.4-43.5-126.5-103.3l-5.2-24.7H232V136h560v488z"], [e, "M320 341h384c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H320c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8z"])
	})),t.ControlTwoTone = u("control", a, (function (e, t) {
		return i(r, [e, "M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z"], [t, "M616 440a36 36 0 1 0 72 0 36 36 0 1 0-72 0zM340.4 601.5l1.5 2.4c0 .1.1.1.1.2l.9 1.2c.1.1.2.2.2.3 1 1.3 2 2.5 3.2 3.6l.2.2c.4.4.8.8 1.2 1.1.8.8 1.7 1.5 2.6 2.1h.1l1.2.9c.1.1.3.2.4.3 1.2.8 2.5 1.6 3.9 2.2.2.1.5.2.7.4.4.2.7.3 1.1.5.3.1.7.3 1 .4.5.2 1 .4 1.5.5.4.1.9.3 1.3.4l.9.3 1.4.3c.2.1.5.1.7.2.7.1 1.4.3 2.1.4.2 0 .4 0 .6.1.6.1 1.1.1 1.7.2.2 0 .4 0 .7.1.8 0 1.5.1 2.3.1s1.5 0 2.3-.1c.2 0 .4 0 .7-.1.6 0 1.2-.1 1.7-.2.2 0 .4 0 .6-.1.7-.1 1.4-.2 2.1-.4.2-.1.5-.1.7-.2l1.4-.3.9-.3c.4-.1.9-.3 1.3-.4.5-.2 1-.4 1.5-.5.3-.1.7-.3 1-.4.4-.2.7-.3 1.1-.5.2-.1.5-.2.7-.4 1.3-.7 2.6-1.4 3.9-2.2.1-.1.3-.2.4-.3l1.2-.9h.1c.9-.7 1.8-1.4 2.6-2.1.4-.4.8-.7 1.2-1.1l.2-.2c1.1-1.1 2.2-2.4 3.2-3.6.1-.1.2-.2.2-.3l.9-1.2c0-.1.1-.1.1-.2l1.5-2.4c.1-.2.2-.3.3-.5 2.7-5.1 4.3-10.9 4.3-17s-1.6-12-4.3-17c-.1-.2-.2-.4-.3-.5l-1.5-2.4c0-.1-.1-.1-.1-.2l-.9-1.2c-.1-.1-.2-.2-.2-.3-1-1.3-2-2.5-3.2-3.6l-.2-.2c-.4-.4-.8-.8-1.2-1.1-.8-.8-1.7-1.5-2.6-2.1h-.1l-1.2-.9c-.1-.1-.3-.2-.4-.3-1.2-.8-2.5-1.6-3.9-2.2-.2-.1-.5-.2-.7-.4-.4-.2-.7-.3-1.1-.5-.3-.1-.7-.3-1-.4-.5-.2-1-.4-1.5-.5-.4-.1-.9-.3-1.3-.4l-.9-.3-1.4-.3c-.2-.1-.5-.1-.7-.2-.7-.1-1.4-.3-2.1-.4-.2 0-.4 0-.6-.1-.6-.1-1.1-.1-1.7-.2-.2 0-.4 0-.7-.1-.8 0-1.5-.1-2.3-.1s-1.5 0-2.3.1c-.2 0-.4 0-.7.1-.6 0-1.2.1-1.7.2-.2 0-.4 0-.6.1-.7.1-1.4.2-2.1.4-.2.1-.5.1-.7.2l-1.4.3-.9.3c-.4.1-.9.3-1.3.4-.5.2-1 .4-1.5.5-.3.1-.7.3-1 .4-.4.2-.7.3-1.1.5-.2.1-.5.2-.7.4-1.3.7-2.6 1.4-3.9 2.2-.1.1-.3.2-.4.3l-1.2.9h-.1c-.9.7-1.8 1.4-2.6 2.1-.4.4-.8.7-1.2 1.1l-.2.2a54.8 54.8 0 0 0-3.2 3.6c-.1.1-.2.2-.2.3l-.9 1.2c0 .1-.1.1-.1.2l-1.5 2.4c-.1.2-.2.3-.3.5-2.7 5.1-4.3 10.9-4.3 17s1.6 12 4.3 17c.1.2.2.3.3.5z"], [t, "M184 840h656V184H184v656zm436.4-499.1c-.2 0-.3.1-.4.1v-77c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v77c-.2 0-.3-.1-.4-.1 42 13.4 72.4 52.7 72.4 99.1 0 46.4-30.4 85.7-72.4 99.1.2 0 .3-.1.4-.1v221c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V539c.2 0 .3.1.4.1-42-13.4-72.4-52.7-72.4-99.1 0-46.4 30.4-85.7 72.4-99.1zM340 485V264c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v221c41.7 13.6 72 52.8 72 99s-30.3 85.5-72 99v77c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8v-77c-41.7-13.6-72-52.8-72-99s30.3-85.5 72-99z"], [e, "M340 683v77c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-77c41.7-13.5 72-52.8 72-99s-30.3-85.4-72-99V264c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v221c-41.7 13.5-72 52.8-72 99s30.3 85.4 72 99zm.1-116c.1-.2.2-.3.3-.5l1.5-2.4c0-.1.1-.1.1-.2l.9-1.2c0-.1.1-.2.2-.3 1-1.2 2.1-2.5 3.2-3.6l.2-.2c.4-.4.8-.7 1.2-1.1.8-.7 1.7-1.4 2.6-2.1h.1l1.2-.9c.1-.1.3-.2.4-.3 1.3-.8 2.6-1.5 3.9-2.2.2-.2.5-.3.7-.4.4-.2.7-.3 1.1-.5.3-.1.7-.3 1-.4.5-.1 1-.3 1.5-.5.4-.1.9-.3 1.3-.4l.9-.3 1.4-.3c.2-.1.5-.1.7-.2.7-.2 1.4-.3 2.1-.4.2-.1.4-.1.6-.1.5-.1 1.1-.2 1.7-.2.3-.1.5-.1.7-.1.8-.1 1.5-.1 2.3-.1s1.5.1 2.3.1c.3.1.5.1.7.1.6.1 1.1.1 1.7.2.2.1.4.1.6.1.7.1 1.4.3 2.1.4.2.1.5.1.7.2l1.4.3.9.3c.4.1.9.3 1.3.4.5.1 1 .3 1.5.5.3.1.7.3 1 .4.4.2.7.3 1.1.5.2.2.5.3.7.4 1.4.6 2.7 1.4 3.9 2.2.1.1.3.2.4.3l1.2.9h.1c.9.6 1.8 1.3 2.6 2.1.4.3.8.7 1.2 1.1l.2.2c1.2 1.1 2.2 2.3 3.2 3.6 0 .1.1.2.2.3l.9 1.2c0 .1.1.1.1.2l1.5 2.4A36.03 36.03 0 0 1 408 584c0 6.1-1.6 11.9-4.3 17-.1.2-.2.3-.3.5l-1.5 2.4c0 .1-.1.1-.1.2l-.9 1.2c0 .1-.1.2-.2.3-1 1.2-2.1 2.5-3.2 3.6l-.2.2c-.4.4-.8.7-1.2 1.1-.8.7-1.7 1.4-2.6 2.1h-.1l-1.2.9c-.1.1-.3.2-.4.3-1.3.8-2.6 1.5-3.9 2.2-.2.2-.5.3-.7.4-.4.2-.7.3-1.1.5-.3.1-.7.3-1 .4-.5.1-1 .3-1.5.5-.4.1-.9.3-1.3.4l-.9.3-1.4.3c-.2.1-.5.1-.7.2-.7.2-1.4.3-2.1.4-.2.1-.4.1-.6.1-.5.1-1.1.2-1.7.2-.3.1-.5.1-.7.1-.8.1-1.5.1-2.3.1s-1.5-.1-2.3-.1c-.3-.1-.5-.1-.7-.1-.6-.1-1.1-.1-1.7-.2-.2-.1-.4-.1-.6-.1-.7-.1-1.4-.3-2.1-.4-.2-.1-.5-.1-.7-.2l-1.4-.3-.9-.3c-.4-.1-.9-.3-1.3-.4-.5-.1-1-.3-1.5-.5-.3-.1-.7-.3-1-.4-.4-.2-.7-.3-1.1-.5-.2-.2-.5-.3-.7-.4-1.4-.6-2.7-1.4-3.9-2.2-.1-.1-.3-.2-.4-.3l-1.2-.9h-.1c-.9-.6-1.8-1.3-2.6-2.1-.4-.3-.8-.7-1.2-1.1l-.2-.2c-1.2-1.1-2.2-2.3-3.2-3.6 0-.1-.1-.2-.2-.3l-.9-1.2c0-.1-.1-.1-.1-.2l-1.5-2.4c-.1-.2-.2-.3-.3-.5-2.7-5-4.3-10.9-4.3-17s1.6-11.9 4.3-17zm280.3-27.9c-.1 0-.2-.1-.4-.1v221c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V539c-.1 0-.2.1-.4.1 42-13.4 72.4-52.7 72.4-99.1 0-46.4-30.4-85.7-72.4-99.1.1 0 .2.1.4.1v-77c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v77c.1 0 .2-.1.4-.1-42 13.4-72.4 52.7-72.4 99.1 0 46.4 30.4 85.7 72.4 99.1zM652 404c19.9 0 36 16.1 36 36s-16.1 36-36 36-36-16.1-36-36 16.1-36 36-36z"])
	})),t.CopyTwoTone = u("copy", a, (function (e, t) {
		return i(r, [t, "M232 706h142c22.1 0 40 17.9 40 40v142h250V264H232v442z"], [e, "M832 64H296c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496v688c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V96c0-17.7-14.3-32-32-32z"], [e, "M704 192H192c-17.7 0-32 14.3-32 32v530.7c0 8.5 3.4 16.6 9.4 22.6l173.3 173.3c2.2 2.2 4.7 4 7.4 5.5v1.9h4.2c3.5 1.3 7.2 2 11 2H704c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32zM350 856.2L263.9 770H350v86.2zM664 888H414V746c0-22.1-17.9-40-40-40H232V264h432v624z"])
	})),t.CreditCardTwoTone = u("credit-card", a, (function (e, t) {
		return i(r, [t, "M136 792h752V440H136v352zm507-144c0-4.4 3.6-8 8-8h165c4.4 0 8 3.6 8 8v72c0 4.4-3.6 8-8 8H651c-4.4 0-8-3.6-8-8v-72zM136 232h752v120H136z"], [e, "M651 728h165c4.4 0 8-3.6 8-8v-72c0-4.4-3.6-8-8-8H651c-4.4 0-8 3.6-8 8v72c0 4.4 3.6 8 8 8z"], [e, "M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 632H136V440h752v352zm0-440H136V232h752v120z"])
	})),t.CrownTwoTone = u("crown", a, (function (e, t) {
		return i(r, [t, "M911.9 283.9v.5L835.5 865c-1 8-7.9 14-15.9 14H204.5c-8.1 0-14.9-6.1-16-14l-76.4-580.6v-.6 1.6L188.5 866c1.1 7.9 7.9 14 16 14h615.1c8 0 14.9-6 15.9-14l76.4-580.6c.1-.5.1-1 0-1.5z"], [t, "M773.6 810.6l53.9-409.4-139.8 86.1L512 252.9 336.3 487.3l-139.8-86.1 53.8 409.4h523.3zm-374.2-189c0-62.1 50.5-112.6 112.6-112.6s112.6 50.5 112.6 112.6v1c0 62.1-50.5 112.6-112.6 112.6s-112.6-50.5-112.6-112.6v-1z"], [e, "M512 734.2c61.9 0 112.3-50.2 112.6-112.1v-.5c0-62.1-50.5-112.6-112.6-112.6s-112.6 50.5-112.6 112.6v.5c.3 61.9 50.7 112.1 112.6 112.1zm0-160.9c26.6 0 48.2 21.6 48.2 48.3 0 26.6-21.6 48.3-48.2 48.3s-48.2-21.6-48.2-48.3c0-26.6 21.6-48.3 48.2-48.3z"], [e, "M188.5 865c1.1 7.9 7.9 14 16 14h615.1c8 0 14.9-6 15.9-14l76.4-580.6v-.5c.3-6.4-6.7-10.8-12.3-7.4L705 396.4 518.4 147.5a8.06 8.06 0 0 0-12.9 0L319 396.4 124.3 276.5c-5.5-3.4-12.6.9-12.2 7.3v.6L188.5 865zm147.8-377.7L512 252.9l175.7 234.4 139.8-86.1-53.9 409.4H250.3l-53.8-409.4 139.8 86.1z"])
	})),t.CustomerServiceTwoTone = u("customer-service", a, (function (e, t) {
		return i(r, [t, "M696 632h128v192H696zm-496 0h128v192H200z"], [e, "M512 128c-212.1 0-384 171.9-384 384v360c0 13.3 10.7 24 24 24h184c35.3 0 64-28.7 64-64V624c0-35.3-28.7-64-64-64H200v-48c0-172.3 139.7-312 312-312s312 139.7 312 312v48H688c-35.3 0-64 28.7-64 64v208c0 35.3 28.7 64 64 64h184c13.3 0 24-10.7 24-24V512c0-212.1-171.9-384-384-384zM328 632v192H200V632h128zm496 192H696V632h128v192z"])
	})),t.DashboardTwoTone = u("dashboard", a, (function (e, t) {
		return i(r, [t, "M512 188c-99.3 0-192.7 38.7-263 109-70.3 70.2-109 163.6-109 263 0 105.6 44.5 205.5 122.6 276h498.8A371.12 371.12 0 0 0 884 560c0-99.3-38.7-192.7-109-263-70.2-70.3-163.6-109-263-109zm-30 44c0-4.4 3.6-8 8-8h44c4.4 0 8 3.6 8 8v80c0 4.4-3.6 8-8 8h-44c-4.4 0-8-3.6-8-8v-80zM270 582c0 4.4-3.6 8-8 8h-80c-4.4 0-8-3.6-8-8v-44c0-4.4 3.6-8 8-8h80c4.4 0 8 3.6 8 8v44zm90.7-204.4l-31.1 31.1a8.03 8.03 0 0 1-11.3 0l-56.6-56.6a8.03 8.03 0 0 1 0-11.3l31.1-31.1c3.1-3.1 8.2-3.1 11.3 0l56.6 56.6c3.1 3.1 3.1 8.2 0 11.3zm291.1 83.5l-84.5 84.5c5 18.7.2 39.4-14.5 54.1a55.95 55.95 0 0 1-79.2 0 55.95 55.95 0 0 1 0-79.2 55.87 55.87 0 0 1 54.1-14.5l84.5-84.5c3.1-3.1 8.2-3.1 11.3 0l28.3 28.3c3.1 3.1 3.1 8.2 0 11.3zm43-52.4l-31.1-31.1a8.03 8.03 0 0 1 0-11.3l56.6-56.6c3.1-3.1 8.2-3.1 11.3 0l31.1 31.1c3.1 3.1 3.1 8.2 0 11.3l-56.6 56.6a8.03 8.03 0 0 1-11.3 0zM846 538v44c0 4.4-3.6 8-8 8h-80c-4.4 0-8-3.6-8-8v-44c0-4.4 3.6-8 8-8h80c4.4 0 8 3.6 8 8z"], [e, "M623.5 421.5a8.03 8.03 0 0 0-11.3 0L527.7 506c-18.7-5-39.4-.2-54.1 14.5a55.95 55.95 0 0 0 0 79.2 55.95 55.95 0 0 0 79.2 0 55.87 55.87 0 0 0 14.5-54.1l84.5-84.5c3.1-3.1 3.1-8.2 0-11.3l-28.3-28.3zM490 320h44c4.4 0 8-3.6 8-8v-80c0-4.4-3.6-8-8-8h-44c-4.4 0-8 3.6-8 8v80c0 4.4 3.6 8 8 8z"], [e, "M924.8 385.6a446.7 446.7 0 0 0-96-142.4 446.7 446.7 0 0 0-142.4-96C631.1 123.8 572.5 112 512 112s-119.1 11.8-174.4 35.2a446.7 446.7 0 0 0-142.4 96 446.7 446.7 0 0 0-96 142.4C75.8 440.9 64 499.5 64 560c0 132.7 58.3 257.7 159.9 343.1l1.7 1.4c5.8 4.8 13.1 7.5 20.6 7.5h531.7c7.5 0 14.8-2.7 20.6-7.5l1.7-1.4C901.7 817.7 960 692.7 960 560c0-60.5-11.9-119.1-35.2-174.4zM761.4 836H262.6A371.12 371.12 0 0 1 140 560c0-99.4 38.7-192.8 109-263 70.3-70.3 163.7-109 263-109 99.4 0 192.8 38.7 263 109 70.3 70.3 109 163.7 109 263 0 105.6-44.5 205.5-122.6 276z"], [e, "M762.7 340.8l-31.1-31.1a8.03 8.03 0 0 0-11.3 0l-56.6 56.6a8.03 8.03 0 0 0 0 11.3l31.1 31.1c3.1 3.1 8.2 3.1 11.3 0l56.6-56.6c3.1-3.1 3.1-8.2 0-11.3zM750 538v44c0 4.4 3.6 8 8 8h80c4.4 0 8-3.6 8-8v-44c0-4.4-3.6-8-8-8h-80c-4.4 0-8 3.6-8 8zM304.1 309.7a8.03 8.03 0 0 0-11.3 0l-31.1 31.1a8.03 8.03 0 0 0 0 11.3l56.6 56.6c3.1 3.1 8.2 3.1 11.3 0l31.1-31.1c3.1-3.1 3.1-8.2 0-11.3l-56.6-56.6zM262 530h-80c-4.4 0-8 3.6-8 8v44c0 4.4 3.6 8 8 8h80c4.4 0 8-3.6 8-8v-44c0-4.4-3.6-8-8-8z"])
	})),t.DeleteTwoTone = u("delete", a, (function (e, t) {
		return i(r, [t, "M292.7 840h438.6l24.2-512h-487z"], [e, "M864 256H736v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zm-504-72h304v72H360v-72zm371.3 656H292.7l-24.2-512h487l-24.2 512z"])
	})),t.DiffTwoTone = u("diff", a, (function (e, t) {
		return i(r, [t, "M232 264v624h432V413.8L514.2 264H232zm336 489c0 3.8-3.4 7-7.5 7h-225c-4.1 0-7.5-3.2-7.5-7v-42c0-3.8 3.4-7 7.5-7h225c4.1 0 7.5 3.2 7.5 7v42zm0-262v42c0 3.8-3.4 7-7.5 7H476v84.9c0 3.9-3.1 7.1-7 7.1h-42c-3.8 0-7-3.2-7-7.1V540h-84.5c-4.1 0-7.5-3.2-7.5-7v-42c0-3.9 3.4-7 7.5-7H420v-84.9c0-3.9 3.2-7.1 7-7.1h42c3.9 0 7 3.2 7 7.1V484h84.5c4.1 0 7.5 3.1 7.5 7z"], [e, "M854.2 306.6L611.3 72.9c-6-5.7-13.9-8.9-22.2-8.9H296c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h277l219 210.6V824c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V329.6c0-8.7-3.5-17-9.8-23z"], [e, "M553.4 201.4c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v704c0 17.7 14.3 32 32 32h512c17.7 0 32-14.3 32-32V397.3c0-8.5-3.4-16.6-9.4-22.6L553.4 201.4zM664 888H232V264h282.2L664 413.8V888z"], [e, "M476 399.1c0-3.9-3.1-7.1-7-7.1h-42c-3.8 0-7 3.2-7 7.1V484h-84.5c-4.1 0-7.5 3.1-7.5 7v42c0 3.8 3.4 7 7.5 7H420v84.9c0 3.9 3.2 7.1 7 7.1h42c3.9 0 7-3.2 7-7.1V540h84.5c4.1 0 7.5-3.2 7.5-7v-42c0-3.9-3.4-7-7.5-7H476v-84.9zM560.5 704h-225c-4.1 0-7.5 3.2-7.5 7v42c0 3.8 3.4 7 7.5 7h225c4.1 0 7.5-3.2 7.5-7v-42c0-3.8-3.4-7-7.5-7z"])
	})),t.DatabaseTwoTone = u("database", a, (function (e, t) {
		return i(r, [t, "M232 616h560V408H232v208zm112-144c22.1 0 40 17.9 40 40s-17.9 40-40 40-40-17.9-40-40 17.9-40 40-40zM232 888h560V680H232v208zm112-144c22.1 0 40 17.9 40 40s-17.9 40-40 40-40-17.9-40-40 17.9-40 40-40zM232 344h560V136H232v208zm112-144c22.1 0 40 17.9 40 40s-17.9 40-40 40-40-17.9-40-40 17.9-40 40-40z"], [e, "M304 512a40 40 0 1 0 80 0 40 40 0 1 0-80 0zm0 272a40 40 0 1 0 80 0 40 40 0 1 0-80 0zm0-544a40 40 0 1 0 80 0 40 40 0 1 0-80 0z"], [e, "M832 64H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32zm-40 824H232V680h560v208zm0-272H232V408h560v208zm0-272H232V136h560v208z"])
	})),t.DislikeTwoTone = u("dislike", a, (function (e, t) {
		return i(r, [t, "M273 100.1v428h.3l-.3-428zM820.4 525l-21.9-19 14-25.5a56.2 56.2 0 0 0 6.9-27.3c0-16.5-7.1-32.2-19.6-43l-21.9-19 13.9-25.4a56.2 56.2 0 0 0 6.9-27.3c0-16.5-7.1-32.2-19.6-43l-21.9-19 13.9-25.4a56.2 56.2 0 0 0 6.9-27.3c0-22.4-13.2-42.6-33.6-51.8H345v345.2c18.6 67.2 46.4 168 83.5 302.5a44.28 44.28 0 0 0 42.2 32.3c7.5.1 15-2.2 21.1-6.7 9.9-7.4 15.2-18.6 14.6-30.5l-9.6-198.4h314.4C829 605.5 840 587.1 840 568c0-16.5-7.1-32.2-19.6-43z"], [e, "M112 132v364c0 17.7 14.3 32 32 32h65V100h-65c-17.7 0-32 14.3-32 32zm773.9 358.3c3.6-12 5.4-24.4 5.4-37 0-28.3-9.3-55.5-26.1-77.7 3.6-12 5.4-24.4 5.4-37 0-28.3-9.3-55.5-26.1-77.7 3.6-12 5.4-24.4 5.4-37 0-51.6-30.7-98.1-78.3-118.4a66.1 66.1 0 0 0-26.5-5.4H273l.3 428 85.8 310.8C372.9 889 418.9 924 470.9 924c29.7 0 57.4-11.8 77.9-33.4 20.5-21.5 31-49.7 29.5-79.4l-6-122.9h239.9c12.1 0 23.9-3.2 34.3-9.3 40.4-23.5 65.5-66.1 65.5-111 0-28.3-9.3-55.5-26.1-77.7zm-74.7 126.1H496.8l9.6 198.4c.6 11.9-4.7 23.1-14.6 30.5-6.1 4.5-13.6 6.8-21.1 6.7a44.28 44.28 0 0 1-42.2-32.3c-37.1-134.4-64.9-235.2-83.5-302.5V172h399.4a56.85 56.85 0 0 1 33.6 51.8c0 9.7-2.3 18.9-6.9 27.3l-13.9 25.4 21.9 19a56.76 56.76 0 0 1 19.6 43c0 9.7-2.3 18.9-6.9 27.3l-13.9 25.4 21.9 19a56.76 56.76 0 0 1 19.6 43c0 9.7-2.3 18.9-6.9 27.3l-14 25.5 21.9 19a56.76 56.76 0 0 1 19.6 43c0 19.1-11 37.5-28.8 48.4z"])
	})),t.DownCircleTwoTone = u("down-circle", a, (function (e, t) {
		return i(r, [t, "M512 140c-205.4 0-372 166.6-372 372s166.6 372 372 372 372-166.6 372-372-166.6-372-372-372zm184.4 277.7l-178 246a7.95 7.95 0 0 1-12.9 0l-178-246c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.3 0 19.9 4.9 25.9 13.2L512 563.6l105.2-145.4c6-8.3 15.7-13.2 25.9-13.2H690c6.5 0 10.3 7.4 6.4 12.7z"], [e, "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"], [e, "M690 405h-46.9c-10.2 0-19.9 4.9-25.9 13.2L512 563.6 406.8 418.2c-6-8.3-15.6-13.2-25.9-13.2H334c-6.5 0-10.3 7.4-6.5 12.7l178 246c3.2 4.4 9.7 4.4 12.9 0l178-246c3.9-5.3.1-12.7-6.4-12.7z"])
	})),t.DownSquareTwoTone = u("down-square", a, (function (e, t) {
		return i(r, [e, "M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z"], [t, "M184 840h656V184H184v656zm150-440h46.9c10.3 0 19.9 4.9 25.9 13.2L512 558.6l105.2-145.4c6-8.3 15.7-13.2 25.9-13.2H690c6.5 0 10.3 7.4 6.4 12.7l-178 246a7.95 7.95 0 0 1-12.9 0l-178-246c-3.8-5.3 0-12.7 6.5-12.7z"], [e, "M505.5 658.7c3.2 4.4 9.7 4.4 12.9 0l178-246c3.9-5.3.1-12.7-6.4-12.7h-46.9c-10.2 0-19.9 4.9-25.9 13.2L512 558.6 406.8 413.2c-6-8.3-15.6-13.2-25.9-13.2H334c-6.5 0-10.3 7.4-6.5 12.7l178 246z"])
	})),t.EnvironmentTwoTone = u("environment", a, (function (e, t) {
		return i(r, [t, "M724.4 224.9C667.7 169.5 592.3 139 512 139s-155.7 30.5-212.4 85.8C243.1 280 212 353.2 212 431.1c0 241.3 234.1 407.2 300 449.1 65.9-41.9 300-207.8 300-449.1 0-77.9-31.1-151.1-87.6-206.2zM512 615c-97.2 0-176-78.8-176-176s78.8-176 176-176 176 78.8 176 176-78.8 176-176 176z"], [e, "M512 263c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm79.2 255.2A111.6 111.6 0 0 1 512 551c-29.9 0-58-11.7-79.2-32.8A111.6 111.6 0 0 1 400 439c0-29.9 11.7-58 32.8-79.2C454 338.6 482.1 327 512 327c29.9 0 58 11.6 79.2 32.8S624 409.1 624 439c0 29.9-11.6 58-32.8 79.2z"], [e, "M854.6 289.1a362.49 362.49 0 0 0-79.9-115.7 370.83 370.83 0 0 0-118.2-77.8C610.7 76.6 562.1 67 512 67c-50.1 0-98.7 9.6-144.5 28.5-44.3 18.3-84 44.5-118.2 77.8A363.6 363.6 0 0 0 169.4 289c-19.5 45-29.4 92.8-29.4 142 0 70.6 16.9 140.9 50.1 208.7 26.7 54.5 64 107.6 111 158.1 80.3 86.2 164.5 138.9 188.4 153a43.9 43.9 0 0 0 22.4 6.1c7.8 0 15.5-2 22.4-6.1 23.9-14.1 108.1-66.8 188.4-153 47-50.4 84.3-103.6 111-158.1C867.1 572 884 501.8 884 431.1c0-49.2-9.9-97-29.4-142zM512 880.2c-65.9-41.9-300-207.8-300-449.1 0-77.9 31.1-151.1 87.6-206.3C356.3 169.5 431.7 139 512 139s155.7 30.5 212.4 85.9C780.9 280 812 353.2 812 431.1c0 241.3-234.1 407.2-300 449.1z"])
	})),t.EditTwoTone = u("edit", a, (function (e, t) {
		return i(r, [t, "M761.1 288.3L687.8 215 325.1 577.6l-15.6 89 88.9-15.7z"], [e, "M880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32zm-622.3-84c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 0 0 0-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 0 0 9.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89z"])
	})),t.ExclamationCircleTwoTone = u("exclamation-circle", a, (function (e, t) {
		return i(r, [e, "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"], [t, "M512 140c-205.4 0-372 166.6-372 372s166.6 372 372 372 372-166.6 372-372-166.6-372-372-372zm-32 156c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V296zm32 440a48.01 48.01 0 0 1 0-96 48.01 48.01 0 0 1 0 96z"], [e, "M488 576h48c4.4 0 8-3.6 8-8V296c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8zm-24 112a48 48 0 1 0 96 0 48 48 0 1 0-96 0z"])
	})),t.ExperimentTwoTone = u("experiment", a, (function (e, t) {
		return i(r, [t, "M551.9 513c19.6 0 35.9-14.2 39.3-32.8A40.02 40.02 0 0 1 552 512a40 40 0 0 1-40-39.4v.5c0 22 17.9 39.9 39.9 39.9zM752 687.8l-.3-.3c-29-17.5-62.3-26.8-97-26.8-44.9 0-87.2 15.7-121 43.8a256.27 256.27 0 0 1-164.9 59.9c-41.2 0-81-9.8-116.7-28L210.5 844h603l-59.9-155.2-1.6-1z"], [e, "M879 824.9L696.3 352V178H768v-68H256v68h71.7v174L145 824.9c-2.8 7.4-4.3 15.2-4.3 23.1 0 35.3 28.7 64 64 64h614.6c7.9 0 15.7-1.5 23.1-4.3 33-12.7 49.4-49.8 36.6-82.8zM395.7 364.7V180h232.6v184.7L719.2 600c-20.7-5.3-42.1-8-63.9-8-61.2 0-119.2 21.5-165.3 60a188.78 188.78 0 0 1-121.3 43.9c-32.7 0-64.1-8.3-91.8-23.7l118.8-307.5zM210.5 844l41.6-107.6.1-.2c35.7 18.1 75.4 27.8 116.6 27.8 61.2 0 119.2-21.5 165.3-60 33.9-28.2 76.3-43.9 121.3-43.9 35 0 68.4 9.5 97.6 27.1l.6 1.6L813.5 844h-603z"], [e, "M552 512c19.3 0 35.4-13.6 39.2-31.8.6-2.7.8-5.4.8-8.2 0-22.1-17.9-40-40-40s-40 17.9-40 40v.6a40 40 0 0 0 40 39.4z"])
	})),t.EyeInvisibleTwoTone = u("eye-invisible", a, (function (e, t) {
		return i(r, [t, "M254.89 758.85l125.57-125.57a176 176 0 0 1 248.82-248.82L757 256.72Q651.69 186.07 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 0 0 0 51.5q69.27 145.91 173.09 221.05zM942.2 486.2Q889.46 375.11 816.7 305L672.48 449.27a176.09 176.09 0 0 1-227.22 227.21L323 798.75Q408 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 0 0 0-51.5z"], [e, "M942.2 486.2Q889.47 375.11 816.7 305l-50.88 50.88C807.31 395.53 843.45 447.4 874.7 512 791.5 684.2 673.4 766 512 766q-72.67 0-133.87-22.38L323 798.75Q408 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 0 0 0-51.5zM878.63 165.56L836 122.88a8 8 0 0 0-11.32 0L715.31 232.2Q624.86 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 0 0 0 51.5q56.69 119.4 136.5 191.41L112.48 835a8 8 0 0 0 0 11.31L155.17 889a8 8 0 0 0 11.31 0l712.15-712.12a8 8 0 0 0 0-11.32zM149.3 512C232.6 339.8 350.7 258 512 258c54.54 0 104.13 9.36 149.12 28.39l-70.3 70.3a176 176 0 0 0-238.13 238.13l-83.42 83.42C223.1 637.49 183.3 582.28 149.3 512zm246.7 0a112.11 112.11 0 0 1 146.2-106.69L401.31 546.2A112 112 0 0 1 396 512z"], [e, "M508 624c-3.46 0-6.87-.16-10.25-.47l-52.82 52.82a176.09 176.09 0 0 0 227.42-227.42l-52.82 52.82c.31 3.38.47 6.79.47 10.25a111.94 111.94 0 0 1-112 112z"])
	})),t.EyeTwoTone = u("eye", a, (function (e, t) {
		return i(r, [t, "M81.8 537.8a60.3 60.3 0 0 1 0-51.5C176.6 286.5 319.8 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 0 0 0 51.5C176.6 737.5 319.9 838 512 838c-192.1 0-335.4-100.5-430.2-300.2z"], [t, "M512 258c-161.3 0-279.4 81.8-362.7 254C232.6 684.2 350.7 766 512 766c161.4 0 279.5-81.8 362.7-254C791.4 339.8 673.3 258 512 258zm-4 430c-97.2 0-176-78.8-176-176s78.8-176 176-176 176 78.8 176 176-78.8 176-176 176z"], [e, "M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 0 0 0 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258s279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766z"], [e, "M508 336c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z"])
	})),t.FileAddTwoTone = u("file-add", a, (function (e, t) {
		return i(r, [t, "M534 352V136H232v752h560V394H576a42 42 0 0 1-42-42zm126 236v48c0 4.4-3.6 8-8 8H544v108c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V644H372c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8h108V472c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v108h108c4.4 0 8 3.6 8 8z"], [e, "M854.6 288.6L639.4 73.4c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.7-9.4-22.7zM602 137.8L790.2 326H602V137.8zM792 888H232V136h302v216a42 42 0 0 0 42 42h216v494z"], [e, "M544 472c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v108H372c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h108v108c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V644h108c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H544V472z"])
	})),t.FileExclamationTwoTone = u("file-exclamation", a, (function (e, t) {
		return i(r, [t, "M534 352V136H232v752h560V394H576a42 42 0 0 1-42-42zm-54 96c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v184c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V448zm32 336c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40z"], [e, "M854.6 288.6L639.4 73.4c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.7-9.4-22.7zM602 137.8L790.2 326H602V137.8zM792 888H232V136h302v216a42 42 0 0 0 42 42h216v494z"], [e, "M488 640h48c4.4 0 8-3.6 8-8V448c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v184c0 4.4 3.6 8 8 8zm-16 104a40 40 0 1 0 80 0 40 40 0 1 0-80 0z"])
	})),t.FileImageTwoTone = u("file-image", a, (function (e, t) {
		return i(r, [t, "M534 352V136H232v752h560V394H576a42 42 0 0 1-42-42zm-134 50c22.1 0 40 17.9 40 40s-17.9 40-40 40-40-17.9-40-40 17.9-40 40-40zm296 294H328.1c-6.7 0-10.4-7.7-6.3-12.9l99.8-127.2a8 8 0 0 1 12.6 0l41.1 52.4 77.8-99.2a8.1 8.1 0 0 1 12.7 0l136.5 174c4.1 5.2.4 12.9-6.3 12.9z"], [e, "M854.6 288.6L639.4 73.4c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.7-9.4-22.7zM602 137.8L790.2 326H602V137.8zM792 888H232V136h302v216a42 42 0 0 0 42 42h216v494z"], [e, "M553.1 509.1l-77.8 99.2-41.1-52.4a8 8 0 0 0-12.6 0l-99.8 127.2a7.98 7.98 0 0 0 6.3 12.9H696c6.7 0 10.4-7.7 6.3-12.9l-136.5-174a8.1 8.1 0 0 0-12.7 0zM360 442a40 40 0 1 0 80 0 40 40 0 1 0-80 0z"])
	})),t.FileExcelTwoTone = u("file-excel", a, (function (e, t) {
		return i(r, [t, "M534 352V136H232v752h560V394H576a42 42 0 0 1-42-42zm51.6 120h35.7a12.04 12.04 0 0 1 10.1 18.5L546.1 623l84 130.4c3.6 5.6 2 13-3.6 16.6-2 1.2-4.2 1.9-6.5 1.9h-37.5c-4.1 0-8-2.1-10.2-5.7L510 664.8l-62.7 101.5c-2.2 3.5-6 5.7-10.2 5.7h-34.5a12.04 12.04 0 0 1-10.2-18.4l83.4-132.8-82.3-130.4c-3.6-5.7-1.9-13.1 3.7-16.6 1.9-1.3 4.1-1.9 6.4-1.9H442c4.2 0 8.1 2.2 10.3 5.8l61.8 102.4 61.2-102.3c2.2-3.6 6.1-5.8 10.3-5.8z"], [e, "M854.6 288.6L639.4 73.4c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.7-9.4-22.7zM602 137.8L790.2 326H602V137.8zM792 888H232V136h302v216a42 42 0 0 0 42 42h216v494z"], [e, "M514.1 580.1l-61.8-102.4c-2.2-3.6-6.1-5.8-10.3-5.8h-38.4c-2.3 0-4.5.6-6.4 1.9-5.6 3.5-7.3 10.9-3.7 16.6l82.3 130.4-83.4 132.8a12.04 12.04 0 0 0 10.2 18.4h34.5c4.2 0 8-2.2 10.2-5.7L510 664.8l62.3 101.4c2.2 3.6 6.1 5.7 10.2 5.7H620c2.3 0 4.5-.7 6.5-1.9 5.6-3.6 7.2-11 3.6-16.6l-84-130.4 85.3-132.5a12.04 12.04 0 0 0-10.1-18.5h-35.7c-4.2 0-8.1 2.2-10.3 5.8l-61.2 102.3z"])
	})),t.FileMarkdownTwoTone = u("file-markdown", a, (function (e, t) {
		return i(r, [t, "M534 352V136H232v752h560V394H576a42 42 0 0 1-42-42zm72.3 122H641c6.6 0 12 5.4 12 12v272c0 6.6-5.4 12-12 12h-27.2c-6.6 0-12-5.4-12-12V581.7L535 732.3c-2 4.3-6.3 7.1-11 7.1h-24.1a12 12 0 0 1-11-7.1l-66.8-150.2V758c0 6.6-5.4 12-12 12H383c-6.6 0-12-5.4-12-12V486c0-6.6 5.4-12 12-12h35c4.8 0 9.1 2.8 11 7.2l83.2 191 83.1-191c1.9-4.4 6.2-7.2 11-7.2z"], [e, "M854.6 288.6L639.4 73.4c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.7-9.4-22.7zM602 137.8L790.2 326H602V137.8zM792 888H232V136h302v216a42 42 0 0 0 42 42h216v494z"], [e, "M429 481.2c-1.9-4.4-6.2-7.2-11-7.2h-35c-6.6 0-12 5.4-12 12v272c0 6.6 5.4 12 12 12h27.1c6.6 0 12-5.4 12-12V582.1l66.8 150.2a12 12 0 0 0 11 7.1H524c4.7 0 9-2.8 11-7.1l66.8-150.6V758c0 6.6 5.4 12 12 12H641c6.6 0 12-5.4 12-12V486c0-6.6-5.4-12-12-12h-34.7c-4.8 0-9.1 2.8-11 7.2l-83.1 191-83.2-191z"])
	})),t.FilePdfTwoTone = u("file-pdf", a, (function (e, t) {
		return i(r, [t, "M509.2 490.8c-.7-1.3-1.4-1.9-2.2-2-2.9 3.3-2.2 31.5 2.7 51.4 4-13.6 4.7-40.5-.5-49.4zm-1.6 120.5c-7.7 20-18.8 47.3-32.1 71.4 4-1.6 8.1-3.3 12.3-5 17.6-7.2 37.3-15.3 58.9-20.2-14.9-11.8-28.4-27.7-39.1-46.2z"], [t, "M534 352V136H232v752h560V394H576a42 42 0 0 1-42-42zm55 287.6c16.1-1.9 30.6-2.8 44.3-2.3 12.8.4 23.6 2 32 5.1.2.1.3.1.5.2.4.2.8.3 1.2.5.5.2 1.1.4 1.6.7.1.1.3.1.4.2 4.1 1.8 7.5 4 10.1 6.6 9.1 9.1 11.8 26.1 6.2 39.6-3.2 7.7-11.7 20.5-33.3 20.5-21.8 0-53.9-9.7-82.1-24.8-25.5 4.3-53.7 13.9-80.9 23.1-5.8 2-11.8 4-17.6 5.9-38 65.2-66.5 79.4-84.1 79.4-4.2 0-7.8-.9-10.8-2-6.9-2.6-12.8-8-16.5-15-.9-1.7-1.6-3.4-2.2-5.2-1.6-4.8-2.1-9.6-1.3-13.6l.6-2.7c.1-.2.1-.4.2-.6.2-.7.4-1.4.7-2.1 0-.1.1-.2.1-.3 4.1-11.9 13.6-23.4 27.7-34.6 12.3-9.8 27.1-18.7 45.9-28.4 15.9-28 37.6-75.1 51.2-107.4-10.8-41.8-16.7-74.6-10.1-98.6.9-3.3 2.5-6.4 4.6-9.1.2-.2.3-.4.5-.6.1-.1.1-.2.2-.2 6.3-7.5 16.9-11.9 28.1-11.5 16.6.7 29.7 11.5 33 30.1 1.7 8 2.2 16.5 1.9 25.7v.7c0 .5 0 1-.1 1.5-.7 13.3-3 26.6-7.3 44.7-.4 1.6-.8 3.2-1.2 5.2l-1 4.1-.1.3c.1.2.1.3.2.5l1.8 4.5c.1.3.3.7.4 1 .7 1.6 1.4 3.3 2.1 4.8v.1c8.7 18.8 19.7 33.4 33.9 45.1 4.3 3.5 8.9 6.7 13.9 9.8 1.8-.5 3.5-.7 5.3-.9z"], [t, "M391.5 761c5.7-4.4 16.2-14.5 30.1-34.7-10.3 9.4-23.4 22.4-30.1 34.7zm270.9-83l.2-.3h.2c.6-.4.5-.7.4-.9-.1-.1-4.5-9.3-45.1-7.4 35.3 13.9 43.5 9.1 44.3 8.6z"], [e, "M854.6 288.6L639.4 73.4c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.7-9.4-22.7zM602 137.8L790.2 326H602V137.8zM792 888H232V136h302v216a42 42 0 0 0 42 42h216v494z"], [e, "M535.9 585.3c-.8-1.7-1.5-3.3-2.2-4.9-.1-.3-.3-.7-.4-1l-1.8-4.5c-.1-.2-.1-.3-.2-.5l.1-.3.2-1.1c4-16.3 8.6-35.3 9.4-54.4v-.7c.3-8.6-.2-17.2-2-25.6-3.8-21.3-19.5-29.6-32.9-30.2-11.3-.5-21.8 4-28.1 11.4-.1.1-.1.2-.2.2-.2.2-.4.4-.5.6-2.1 2.7-3.7 5.8-4.6 9.1-6.6 24-.7 56.8 10.1 98.6-13.6 32.4-35.3 79.4-51.2 107.4v.1c-27.7 14.3-64.1 35.8-73.6 62.9 0 .1-.1.2-.1.3-.2.7-.5 1.4-.7 2.1-.1.2-.1.4-.2.6-.2.9-.5 1.8-.6 2.7-.9 4-.4 8.8 1.3 13.6.6 1.8 1.3 3.5 2.2 5.2 3.7 7 9.6 12.4 16.5 15 3 1.1 6.6 2 10.8 2 17.6 0 46.1-14.2 84.1-79.4 5.8-1.9 11.8-3.9 17.6-5.9 27.2-9.2 55.4-18.8 80.9-23.1 28.2 15.1 60.3 24.8 82.1 24.8 21.6 0 30.1-12.8 33.3-20.5 5.6-13.5 2.9-30.5-6.2-39.6-2.6-2.6-6-4.8-10.1-6.6-.1-.1-.3-.1-.4-.2-.5-.2-1.1-.4-1.6-.7-.4-.2-.8-.3-1.2-.5-.2-.1-.3-.1-.5-.2-16.2-5.8-41.7-6.7-76.3-2.8l-5.3.6c-5-3-9.6-6.3-13.9-9.8-14.2-11.3-25.1-25.8-33.8-44.7zM391.5 761c6.7-12.3 19.8-25.3 30.1-34.7-13.9 20.2-24.4 30.3-30.1 34.7zM507 488.8c.8.1 1.5.7 2.2 2 5.2 8.9 4.5 35.8.5 49.4-4.9-19.9-5.6-48.1-2.7-51.4zm-19.2 188.9c-4.2 1.7-8.3 3.4-12.3 5 13.3-24.1 24.4-51.4 32.1-71.4 10.7 18.5 24.2 34.4 39.1 46.2-21.6 4.9-41.3 13-58.9 20.2zm175.4-.9c.1.2.2.5-.4.9h-.2l-.2.3c-.8.5-9 5.3-44.3-8.6 40.6-1.9 45 7.3 45.1 7.4z"])
	})),t.FilePptTwoTone = u("file-ppt", a, (function (e, t) {
		return i(r, [t, "M464.5 516.2v108.4h38.9c44.7 0 71.2-10.9 71.2-54.3 0-34.4-20.1-54.1-53.9-54.1h-56.2z"], [t, "M534 352V136H232v752h560V394H576a42 42 0 0 1-42-42zm90 218.4c0 55.2-36.8 94.1-96.2 94.1h-63.3V760c0 4.4-3.6 8-8 8H424c-4.4 0-8-3.6-8-8V484c0-4.4 3.6-8 8-8v.1h104c59.7 0 96 39.8 96 94.3z"], [e, "M854.6 288.6L639.4 73.4c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.7-9.4-22.7zM602 137.8L790.2 326H602V137.8zM792 888H232V136h302v216a42 42 0 0 0 42 42h216v494z"], [e, "M424 476.1c-4.4-.1-8 3.5-8 7.9v276c0 4.4 3.6 8 8 8h32.5c4.4 0 8-3.6 8-8v-95.5h63.3c59.4 0 96.2-38.9 96.2-94.1 0-54.5-36.3-94.3-96-94.3H424zm150.6 94.2c0 43.4-26.5 54.3-71.2 54.3h-38.9V516.2h56.2c33.8 0 53.9 19.7 53.9 54.1z"])
	})),t.FileTextTwoTone = u("file-text", a, (function (e, t) {
		return i(r, [t, "M534 352V136H232v752h560V394H576a42 42 0 0 1-42-42zm-22 322c0 4.4-3.6 8-8 8H320c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8h184c4.4 0 8 3.6 8 8v48zm200-184v48c0 4.4-3.6 8-8 8H320c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8h384c4.4 0 8 3.6 8 8z"], [e, "M854.6 288.6L639.4 73.4c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.7-9.4-22.7zM602 137.8L790.2 326H602V137.8zM792 888H232V136h302v216a42 42 0 0 0 42 42h216v494z"], [e, "M312 490v48c0 4.4 3.6 8 8 8h384c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H320c-4.4 0-8 3.6-8 8zm192 128H320c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z"])
	})),t.FileUnknownTwoTone = u("file-unknown", a, (function (e, t) {
		return i(r, [t, "M534 352V136H232v752h560V394H576a42 42 0 0 1-42-42zm-22 424c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm110-228.4c.7 44.9-29.7 84.5-74.3 98.9-5.7 1.8-9.7 7.3-9.7 13.3V672c0 5.5-4.5 10-10 10h-32c-5.5 0-10-4.5-10-10v-32c.2-19.8 15.4-37.3 34.7-40.1C549 596.2 570 574.3 570 549c0-28.1-25.8-51.5-58-51.5s-58 23.4-58 51.6c0 5.2-4.4 9.4-9.8 9.4h-32.4c-5.4 0-9.8-4.1-9.8-9.5 0-57.4 50.1-103.7 111.5-103 59.3.8 107.7 46.1 108.5 101.6z"], [e, "M854.6 288.7L639.4 73.4c-6-6-14.2-9.4-22.7-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.6-9.4-22.6zM602 137.8L790.2 326H602V137.8zM792 888H232V136h302v216a42 42 0 0 0 42 42h216v494z"], [e, "M480 744a32 32 0 1 0 64 0 32 32 0 1 0-64 0zm-78-195c0 5.4 4.4 9.5 9.8 9.5h32.4c5.4 0 9.8-4.2 9.8-9.4 0-28.2 25.8-51.6 58-51.6s58 23.4 58 51.5c0 25.3-21 47.2-49.3 50.9-19.3 2.8-34.5 20.3-34.7 40.1v32c0 5.5 4.5 10 10 10h32c5.5 0 10-4.5 10-10v-12.2c0-6 4-11.5 9.7-13.3 44.6-14.4 75-54 74.3-98.9-.8-55.5-49.2-100.8-108.5-101.6-61.4-.7-111.5 45.6-111.5 103z"])
	})),t.FileZipTwoTone = u("file-zip", a, (function (e, t) {
		return i(r, [t, "M344 630h32v2h-32z"], [t, "M534 352V136H360v64h64v64h-64v64h64v64h-64v64h64v64h-64v62h64v160H296V520h64v-64h-64v-64h64v-64h-64v-64h64v-64h-64v-64h-64v752h560V394H576a42 42 0 0 1-42-42z"], [e, "M854.6 288.6L639.4 73.4c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.7-9.4-22.7zM602 137.8L790.2 326H602V137.8zM792 888H232V136h64v64h64v-64h174v216a42 42 0 0 0 42 42h216v494z"], [e, "M296 392h64v64h-64zm0-128h64v64h-64zm0 318v160h128V582h-64v-62h-64v62zm48 50v-2h32v64h-32v-62zm16-432h64v64h-64zm0 256h64v64h-64zm0-128h64v64h-64z"])
	})),t.FileWordTwoTone = u("file-word", a, (function (e, t) {
		return i(r, [t, "M534 352V136H232v752h560V394H576a42 42 0 0 1-42-42zm101.3 129.3c1.3-5.4 6.1-9.3 11.7-9.3h35.6a12.04 12.04 0 0 1 11.6 15.1l-74.4 276c-1.4 5.3-6.2 8.9-11.6 8.9h-31.8c-5.4 0-10.2-3.7-11.6-8.9l-52.8-197-52.8 197c-1.4 5.3-6.2 8.9-11.6 8.9h-32c-5.4 0-10.2-3.7-11.6-8.9l-74.2-276a12.02 12.02 0 0 1 11.6-15.1h35.4c5.6 0 10.4 3.9 11.7 9.3L434.6 680l49.7-198.9c1.3-5.4 6.1-9.1 11.6-9.1h32.2c5.5 0 10.3 3.7 11.6 9.1l49.8 199.3 45.8-199.1z"], [e, "M854.6 288.6L639.4 73.4c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.7-9.4-22.7zM602 137.8L790.2 326H602V137.8zM792 888H232V136h302v216a42 42 0 0 0 42 42h216v494z"], [e, "M528.1 472h-32.2c-5.5 0-10.3 3.7-11.6 9.1L434.6 680l-46.1-198.7c-1.3-5.4-6.1-9.3-11.7-9.3h-35.4a12.02 12.02 0 0 0-11.6 15.1l74.2 276c1.4 5.2 6.2 8.9 11.6 8.9h32c5.4 0 10.2-3.6 11.6-8.9l52.8-197 52.8 197c1.4 5.2 6.2 8.9 11.6 8.9h31.8c5.4 0 10.2-3.6 11.6-8.9l74.4-276a12.04 12.04 0 0 0-11.6-15.1H647c-5.6 0-10.4 3.9-11.7 9.3l-45.8 199.1-49.8-199.3c-1.3-5.4-6.1-9.1-11.6-9.1z"])
	})),t.FileTwoTone = u("file", a, (function (e, t) {
		return i(r, [t, "M534 352V136H232v752h560V394H576a42 42 0 0 1-42-42z"], [e, "M854.6 288.6L639.4 73.4c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.7-9.4-22.7zM602 137.8L790.2 326H602V137.8zM792 888H232V136h302v216a42 42 0 0 0 42 42h216v494z"])
	})),t.FilterTwoTone = u("filter", a, (function (e, t) {
		return i(r, [t, "M420.6 798h182.9V642H420.6zM411 561.4l9.5 16.6h183l9.5-16.6L811.3 226H212.7z"], [e, "M880.1 154H143.9c-24.5 0-39.8 26.7-27.5 48L349 597.4V838c0 17.7 14.2 32 31.8 32h262.4c17.6 0 31.8-14.3 31.8-32V597.4L907.7 202c12.2-21.3-3.1-48-27.6-48zM603.5 798H420.6V642h182.9v156zm9.5-236.6l-9.5 16.6h-183l-9.5-16.6L212.7 226h598.6L613 561.4z"])
	})),t.FireTwoTone = u("fire", a, (function (e, t) {
		return i(r, [t, "M737 438.6c-9.6 15.5-21.1 30.7-34.4 45.6a73.1 73.1 0 0 1-51 24.4 73.36 73.36 0 0 1-53.4-18.8 74.01 74.01 0 0 1-24.4-59.8c3-47.4-12.4-103.1-45.8-165.7-16.9-31.4-37.1-58.2-61.2-80.4a240 240 0 0 1-12.1 46.5 354.26 354.26 0 0 1-58.2 101 349.6 349.6 0 0 1-58.6 56.8c-34 26.1-62 60-80.8 97.9a275.96 275.96 0 0 0-29.1 124c0 74.9 29.5 145.3 83 198.4 53.7 53.2 125 82.4 201 82.4s147.3-29.2 201-82.4c53.5-53 83-123.5 83-198.4 0-39.2-8.1-77.3-24-113.1-9.3-21-21-40.5-35-58.4z"], [e, "M834.1 469.2A347.49 347.49 0 0 0 751.2 354l-29.1-26.7a8.09 8.09 0 0 0-13 3.3l-13 37.3c-8.1 23.4-23 47.3-44.1 70.8-1.4 1.5-3 1.9-4.1 2-1.1.1-2.8-.1-4.3-1.5-1.4-1.2-2.1-3-2-4.8 3.7-60.2-14.3-128.1-53.7-202C555.3 171 510 123.1 453.4 89.7l-41.3-24.3c-5.4-3.2-12.3 1-12 7.3l2.2 48c1.5 32.8-2.3 61.8-11.3 85.9-11 29.5-26.8 56.9-47 81.5a295.64 295.64 0 0 1-47.5 46.1 352.6 352.6 0 0 0-100.3 121.5A347.75 347.75 0 0 0 160 610c0 47.2 9.3 92.9 27.7 136a349.4 349.4 0 0 0 75.5 110.9c32.4 32 70 57.2 111.9 74.7C418.5 949.8 464.5 959 512 959s93.5-9.2 136.9-27.3A348.6 348.6 0 0 0 760.8 857c32.4-32 57.8-69.4 75.5-110.9a344.2 344.2 0 0 0 27.7-136c0-48.8-10-96.2-29.9-140.9zM713 808.5c-53.7 53.2-125 82.4-201 82.4s-147.3-29.2-201-82.4c-53.5-53.1-83-123.5-83-198.4 0-43.5 9.8-85.2 29.1-124 18.8-37.9 46.8-71.8 80.8-97.9a349.6 349.6 0 0 0 58.6-56.8c25-30.5 44.6-64.5 58.2-101a240 240 0 0 0 12.1-46.5c24.1 22.2 44.3 49 61.2 80.4 33.4 62.6 48.8 118.3 45.8 165.7a74.01 74.01 0 0 0 24.4 59.8 73.36 73.36 0 0 0 53.4 18.8c19.7-1 37.8-9.7 51-24.4 13.3-14.9 24.8-30.1 34.4-45.6 14 17.9 25.7 37.4 35 58.4 15.9 35.8 24 73.9 24 113.1 0 74.9-29.5 145.4-83 198.4z"])
	})),t.FolderAddTwoTone = u("folder-add", a, (function (e, t) {
		return i(r, [t, "M372.5 256H184v512h656V370.4H492.1L372.5 256zM540 443.1V528h84.5c4.1 0 7.5 3.1 7.5 7v42c0 3.8-3.4 7-7.5 7H540v84.9c0 3.9-3.1 7.1-7 7.1h-42c-3.8 0-7-3.2-7-7.1V584h-84.5c-4.1 0-7.5-3.2-7.5-7v-42c0-3.9 3.4-7 7.5-7H484v-84.9c0-3.9 3.2-7.1 7-7.1h42c3.9 0 7 3.2 7 7.1z"], [e, "M880 298.4H521L403.7 186.2a8.15 8.15 0 0 0-5.5-2.2H144c-17.7 0-32 14.3-32 32v592c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V330.4c0-17.7-14.3-32-32-32zM840 768H184V256h188.5l119.6 114.4H840V768z"], [e, "M484 443.1V528h-84.5c-4.1 0-7.5 3.1-7.5 7v42c0 3.8 3.4 7 7.5 7H484v84.9c0 3.9 3.2 7.1 7 7.1h42c3.9 0 7-3.2 7-7.1V584h84.5c4.1 0 7.5-3.2 7.5-7v-42c0-3.9-3.4-7-7.5-7H540v-84.9c0-3.9-3.1-7.1-7-7.1h-42c-3.8 0-7 3.2-7 7.1z"])
	})),t.FlagTwoTone = u("flag", a, (function (e, t) {
		return i(r, [t, "M184 232h368v336H184z"], [t, "M624 632c0 4.4-3.6 8-8 8H504v73h336V377H624v255z"], [e, "M880 305H624V192c0-17.7-14.3-32-32-32H184v-40c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v784c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V640h248v113c0 17.7 14.3 32 32 32h416c17.7 0 32-14.3 32-32V337c0-17.7-14.3-32-32-32zM184 568V232h368v336H184zm656 145H504v-73h112c4.4 0 8-3.6 8-8V377h216v336z"])
	})),t.FolderTwoTone = u("folder", a, (function (e, t) {
		return i(r, [e, "M880 298.4H521L403.7 186.2a8.15 8.15 0 0 0-5.5-2.2H144c-17.7 0-32 14.3-32 32v592c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V330.4c0-17.7-14.3-32-32-32zM840 768H184V256h188.5l119.6 114.4H840V768z"], [t, "M372.5 256H184v512h656V370.4H492.1z"])
	})),t.FolderOpenTwoTone = u("folder-open", a, (function (e, t) {
		return i(r, [t, "M159 768h612.3l103.4-256H262.3z"], [e, "M928 444H820V330.4c0-17.7-14.3-32-32-32H473L355.7 186.2a8.15 8.15 0 0 0-5.5-2.2H96c-17.7 0-32 14.3-32 32v592c0 17.7 14.3 32 32 32h698c13 0 24.8-7.9 29.7-20l134-332c1.5-3.8 2.3-7.9 2.3-12 0-17.7-14.3-32-32-32zM136 256h188.5l119.6 114.4H748V444H238c-13 0-24.8 7.9-29.7 20L136 643.2V256zm635.3 512H159l103.3-256h612.4L771.3 768z"])
	})),t.FrownTwoTone = u("frown", a, (function (e, t) {
		return i(r, [e, "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"], [t, "M512 140c-205.4 0-372 166.6-372 372s166.6 372 372 372 372-166.6 372-372-166.6-372-372-372zM288 421a48.01 48.01 0 0 1 96 0 48.01 48.01 0 0 1-96 0zm376 272h-48.1c-4.2 0-7.8-3.2-8.1-7.4C604 636.1 562.5 597 512 597s-92.1 39.1-95.8 88.6c-.3 4.2-3.9 7.4-8.1 7.4H360a8 8 0 0 1-8-8.4c4.4-84.3 74.5-151.6 160-151.6s155.6 67.3 160 151.6a8 8 0 0 1-8 8.4zm24-224a48.01 48.01 0 0 1 0-96 48.01 48.01 0 0 1 0 96z"], [e, "M288 421a48 48 0 1 0 96 0 48 48 0 1 0-96 0zm224 112c-85.5 0-155.6 67.3-160 151.6a8 8 0 0 0 8 8.4h48.1c4.2 0 7.8-3.2 8.1-7.4 3.7-49.5 45.3-88.6 95.8-88.6s92 39.1 95.8 88.6c.3 4.2 3.9 7.4 8.1 7.4H664a8 8 0 0 0 8-8.4C667.6 600.3 597.5 533 512 533zm128-112a48 48 0 1 0 96 0 48 48 0 1 0-96 0z"])
	})),t.FundTwoTone = u("fund", a, (function (e, t) {
		return i(r, [e, "M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 632H136V232h752v560z"], [t, "M136 792h752V232H136v560zm56.4-130.5l214.9-215c3.1-3.1 8.2-3.1 11.3 0L533 561l254.5-254.6c3.1-3.1 8.2-3.1 11.3 0l36.8 36.8c3.1 3.1 3.1 8.2 0 11.3l-297 297.2a8.03 8.03 0 0 1-11.3 0L412.9 537.2 240.4 709.7a8.03 8.03 0 0 1-11.3 0l-36.7-36.9a8.03 8.03 0 0 1 0-11.3z"], [e, "M229.1 709.7c3.1 3.1 8.2 3.1 11.3 0l172.5-172.5 114.4 114.5c3.1 3.1 8.2 3.1 11.3 0l297-297.2c3.1-3.1 3.1-8.2 0-11.3l-36.8-36.8a8.03 8.03 0 0 0-11.3 0L533 561 418.6 446.5a8.03 8.03 0 0 0-11.3 0l-214.9 215a8.03 8.03 0 0 0 0 11.3l36.7 36.9z"])
	})),t.FunnelPlotTwoTone = u("funnel-plot", a, (function (e, t) {
		return i(r, [t, "M420.6 798h182.9V650H420.6zM297.7 374h428.6l85-148H212.7zm113.2 197.4l8.4 14.6h185.3l8.4-14.6L689.6 438H334.4z"], [e, "M880.1 154H143.9c-24.5 0-39.8 26.7-27.5 48L349 607.4V838c0 17.7 14.2 32 31.8 32h262.4c17.6 0 31.8-14.3 31.8-32V607.4L907.7 202c12.2-21.3-3.1-48-27.6-48zM603.5 798H420.6V650h182.9v148zm9.5-226.6l-8.4 14.6H419.3l-8.4-14.6L334.4 438h355.2L613 571.4zM726.3 374H297.7l-85-148h598.6l-85 148z"])
	})),t.GiftTwoTone = u("gift", a, (function (e, t) {
		return i(r, [t, "M546 378h298v104H546zM228 550h250v308H228zm-48-172h298v104H180zm366 172h250v308H546z"], [e, "M880 310H732.4c13.6-21.4 21.6-46.8 21.6-74 0-76.1-61.9-138-138-138-41.4 0-78.7 18.4-104 47.4-25.3-29-62.6-47.4-104-47.4-76.1 0-138 61.9-138 138 0 27.2 7.9 52.6 21.6 74H144c-17.7 0-32 14.3-32 32v200c0 4.4 3.6 8 8 8h40v344c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V550h40c4.4 0 8-3.6 8-8V342c0-17.7-14.3-32-32-32zM478 858H228V550h250v308zm0-376H180V378h298v104zm0-176h-70c-38.6 0-70-31.4-70-70s31.4-70 70-70 70 31.4 70 70v70zm68-70c0-38.6 31.4-70 70-70s70 31.4 70 70-31.4 70-70 70h-70v-70zm250 622H546V550h250v308zm48-376H546V378h298v104z"])
	})),t.HddTwoTone = u("hdd", a, (function (e, t) {
		return i(r, [t, "M232 888h560V680H232v208zm448-140c22.1 0 40 17.9 40 40s-17.9 40-40 40-40-17.9-40-40 17.9-40 40-40zM232 616h560V408H232v208zm72-128c0-4.4 3.6-8 8-8h184c4.4 0 8 3.6 8 8v48c0 4.4-3.6 8-8 8H312c-4.4 0-8-3.6-8-8v-48zm-72-144h560V136H232v208zm72-128c0-4.4 3.6-8 8-8h184c4.4 0 8 3.6 8 8v48c0 4.4-3.6 8-8 8H312c-4.4 0-8-3.6-8-8v-48z"], [e, "M832 64H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32zm-40 824H232V680h560v208zm0-272H232V408h560v208zm0-272H232V136h560v208z"], [e, "M312 544h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H312c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8zm0-272h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H312c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8zm328 516a40 40 0 1 0 80 0 40 40 0 1 0-80 0z"])
	})),t.HeartTwoTone = u("heart", a, (function (e, t) {
		return i(r, [e, "M923 283.6a260.04 260.04 0 0 0-56.9-82.8 264.4 264.4 0 0 0-84-55.5A265.34 265.34 0 0 0 679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 0 0-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9zM512 814.8S156 586.7 156 385.5C156 283.6 240.3 201 344.3 201c73.1 0 136.5 40.8 167.7 100.4C543.2 241.8 606.6 201 679.7 201c104 0 188.3 82.6 188.3 184.5 0 201.2-356 429.3-356 429.3z"], [t, "M679.7 201c-73.1 0-136.5 40.8-167.7 100.4C480.8 241.8 417.4 201 344.3 201c-104 0-188.3 82.6-188.3 184.5 0 201.2 356 429.3 356 429.3s356-228.1 356-429.3C868 283.6 783.7 201 679.7 201z"])
	})),t.HighlightTwoTone = u("highlight", a, (function (e, t) {
		return i(r, [t, "M229.6 796.3h160.2l54.3-54.1-80.1-78.9zm220.7-397.1l262.8 258.9 147.3-145-262.8-259zm-77.1 166.1l171.4 168.9 68.6-67.6-171.4-168.9z"], [e, "M957.6 507.5L603.2 158.3a7.9 7.9 0 0 0-11.2 0L353.3 393.5a8.03 8.03 0 0 0-.1 11.3l.1.1 40 39.4-117.2 115.3a8.03 8.03 0 0 0-.1 11.3l.1.1 39.5 38.9-189.1 187H72.1c-4.4 0-8.1 3.6-8.1 8v55.2c0 4.4 3.6 8 8 8h344.9c2.1 0 4.1-.8 5.6-2.3l76.1-75.6L539 830a7.9 7.9 0 0 0 11.2 0l117.1-115.6 40.1 39.5a7.9 7.9 0 0 0 11.2 0l238.7-235.2c3.4-3 3.4-8 .3-11.2zM389.8 796.3H229.6l134.4-133 80.1 78.9-54.3 54.1zm154.8-62.1L373.2 565.3l68.6-67.6 171.4 168.9-68.6 67.6zm168.5-76.1L450.3 399.2l147.3-145.1 262.8 259-147.3 145z"])
	})),t.HomeTwoTone = u("home", a, (function (e, t) {
		return i(r, [t, "M512.1 172.6l-370 369.7h96V868H392V640c0-22.1 17.9-40 40-40h160c22.1 0 40 17.9 40 40v228h153.9V542.3H882L535.2 195.7l-23.1-23.1zm434.5 422.9c-6 6-13.1 10.8-20.8 13.9 7.7-3.2 14.8-7.9 20.8-13.9zm-887-34.7c5 30.3 31.4 53.5 63.1 53.5h.9c-31.9 0-58.9-23-64-53.5zm-.9-10.5v-1.9 1.9zm.1-2.6c.1-3.1.5-6.1 1-9.1-.6 2.9-.9 6-1 9.1z"], [e, "M951 510c0-.1-.1-.1-.1-.2l-1.8-2.1c-.1-.1-.2-.3-.4-.4-.7-.8-1.5-1.6-2.2-2.4L560.1 118.8l-25.9-25.9a31.5 31.5 0 0 0-44.4 0L77.5 505a63.6 63.6 0 0 0-16 26.6l-.6 2.1-.3 1.1-.3 1.2c-.2.7-.3 1.4-.4 2.1 0 .1 0 .3-.1.4-.6 3-.9 6-1 9.1v3.3c0 .5 0 1 .1 1.5 0 .5 0 .9.1 1.4 0 .5.1 1 .1 1.5 0 .6.1 1.2.2 1.8 0 .3.1.6.1.9l.3 2.5v.1c5.1 30.5 32.2 53.5 64 53.5h42.5V940h691.7V614.3h43.4c8.6 0 16.9-1.7 24.5-4.9s14.7-7.9 20.8-13.9a63.6 63.6 0 0 0 18.7-45.3c0-14.7-5-28.8-14.3-40.2zM568 868H456V664h112v204zm217.9-325.7V868H632V640c0-22.1-17.9-40-40-40H432c-22.1 0-40 17.9-40 40v228H238.1V542.3h-96l370-369.7 23.1 23.1L882 542.3h-96.1z"])
	})),t.HourglassTwoTone = u("hourglass", a, (function (e, t) {
		return i(r, [t, "M512 548c-42.2 0-81.9 16.4-111.7 46.3A156.63 156.63 0 0 0 354 706v134h316V706c0-42.2-16.4-81.9-46.3-111.7A156.63 156.63 0 0 0 512 548zM354 318c0 42.2 16.4 81.9 46.3 111.7C430.1 459.6 469.8 476 512 476s81.9-16.4 111.7-46.3C653.6 399.9 670 360.2 670 318V184H354v134z"], [e, "M742 318V184h86c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H196c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h86v134c0 81.5 42.4 153.2 106.4 194-64 40.8-106.4 112.5-106.4 194v134h-86c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h632c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8h-86V706c0-81.5-42.4-153.2-106.4-194 64-40.8 106.4-112.5 106.4-194zm-72 388v134H354V706c0-42.2 16.4-81.9 46.3-111.7C430.1 564.4 469.8 548 512 548s81.9 16.4 111.7 46.3C653.6 624.1 670 663.8 670 706zm0-388c0 42.2-16.4 81.9-46.3 111.7C593.9 459.6 554.2 476 512 476s-81.9-16.4-111.7-46.3A156.63 156.63 0 0 1 354 318V184h316v134z"])
	})),t.Html5TwoTone = u("html5", a, (function (e, t) {
		return i(r, [e, "M145 96l66 746.6L511.8 928l299.6-85.4L878.7 96H145zm610.9 700.6l-244.1 69.6-245.2-69.6-56.7-641.2h603.8l-57.8 641.2z"], [t, "M209.9 155.4l56.7 641.2 245.2 69.6 244.1-69.6 57.8-641.2H209.9zm530.4 117.9l-4.8 47.2-1.7 19.5H381.7l8.2 94.2H511v-.2h214.7l-3.2 24.3-21.2 242.2-1.7 16.3-187.7 51.7v.4h-1.7l-188.6-52-11.3-144.7h91l6.5 73.2 102.4 27.7h.8v-.2l102.4-27.7 11.4-118.5H511.9v.1H305.4l-22.7-253.5L281 249h461l-1.7 24.3z"], [e, "M281 249l1.7 24.3 22.7 253.5h206.5v-.1h112.9l-11.4 118.5L511 672.9v.2h-.8l-102.4-27.7-6.5-73.2h-91l11.3 144.7 188.6 52h1.7v-.4l187.7-51.7 1.7-16.3 21.2-242.2 3.2-24.3H511v.2H389.9l-8.2-94.2h352.1l1.7-19.5 4.8-47.2L742 249H511z"])
	})),t.IdcardTwoTone = u("idcard", a, (function (e, t) {
		return i(r, [e, "M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 632H136V232h752v560z"], [t, "M136 792h752V232H136v560zm472-372c0-4.4 1-8 2.3-8h123.4c1.3 0 2.3 3.6 2.3 8v48c0 4.4-1 8-2.3 8H610.3c-1.3 0-2.3-3.6-2.3-8v-48zm0 144c0-4.4 3.2-8 7.1-8h185.7c3.9 0 7.1 3.6 7.1 8v48c0 4.4-3.2 8-7.1 8H615.1c-3.9 0-7.1-3.6-7.1-8v-48zM216.2 664.6c2.8-53.3 31.9-99.6 74.6-126.1-18.1-20-29.1-46.4-29.1-75.5 0-61.9 49.9-112 111.4-112s111.4 50.1 111.4 112c0 29.1-11 55.6-29.1 75.5 42.6 26.4 71.8 72.8 74.6 126.1a8 8 0 0 1-8 8.4h-43.9c-4.2 0-7.6-3.3-7.9-7.5-3.8-50.5-46-90.5-97.2-90.5s-93.4 40-97.2 90.5c-.3 4.2-3.7 7.5-7.9 7.5H224c-4.6 0-8.2-3.8-7.8-8.4z"], [t, "M321.3 463a51.7 52 0 1 0 103.4 0 51.7 52 0 1 0-103.4 0z"], [e, "M610.3 476h123.4c1.3 0 2.3-3.6 2.3-8v-48c0-4.4-1-8-2.3-8H610.3c-1.3 0-2.3 3.6-2.3 8v48c0 4.4 1 8 2.3 8zm4.8 144h185.7c3.9 0 7.1-3.6 7.1-8v-48c0-4.4-3.2-8-7.1-8H615.1c-3.9 0-7.1 3.6-7.1 8v48c0 4.4 3.2 8 7.1 8zM224 673h43.9c4.2 0 7.6-3.3 7.9-7.5 3.8-50.5 46-90.5 97.2-90.5s93.4 40 97.2 90.5c.3 4.2 3.7 7.5 7.9 7.5H522a8 8 0 0 0 8-8.4c-2.8-53.3-32-99.7-74.6-126.1a111.8 111.8 0 0 0 29.1-75.5c0-61.9-49.9-112-111.4-112s-111.4 50.1-111.4 112c0 29.1 11 55.5 29.1 75.5a158.09 158.09 0 0 0-74.6 126.1c-.4 4.6 3.2 8.4 7.8 8.4zm149-262c28.5 0 51.7 23.3 51.7 52s-23.2 52-51.7 52-51.7-23.3-51.7-52 23.2-52 51.7-52z"])
	})),t.InfoCircleTwoTone = u("info-circle", a, (function (e, t) {
		return i(r, [e, "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"], [t, "M512 140c-205.4 0-372 166.6-372 372s166.6 372 372 372 372-166.6 372-372-166.6-372-372-372zm32 588c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272zm-32-344a48.01 48.01 0 0 1 0-96 48.01 48.01 0 0 1 0 96z"], [e, "M464 336a48 48 0 1 0 96 0 48 48 0 1 0-96 0zm72 112h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V456c0-4.4-3.6-8-8-8z"])
	})),t.InsuranceTwoTone = u("insurance", a, (function (e, t) {
		return i(r, [e, "M866.9 169.9L527.1 54.1C523 52.7 517.5 52 512 52s-11 .7-15.1 2.1L157.1 169.9c-8.3 2.8-15.1 12.4-15.1 21.2v482.4c0 8.8 5.7 20.4 12.6 25.9L499.3 968c3.5 2.7 8 4.1 12.6 4.1s9.2-1.4 12.6-4.1l344.7-268.6c6.9-5.4 12.6-17 12.6-25.9V191.1c.2-8.8-6.6-18.3-14.9-21.2zM810 654.3L512 886.5 214 654.3V226.7l298-101.6 298 101.6v427.6z"], [t, "M521.9 358.8h97.9v41.6h-97.9z"], [t, "M214 226.7v427.6l298 232.2 298-232.2V226.7L512 125.1 214 226.7zM413.3 656h-.2c0 4.4-3.6 8-8 8h-37.3c-4.4 0-8-3.6-8-8V471.4c-7.7 9.2-15.4 17.9-23.1 26a6.04 6.04 0 0 1-10.2-2.4l-13.2-43.5c-.6-2-.2-4.1 1.2-5.6 37-43.4 64.7-95.1 82.2-153.6 1.1-3.5 5-5.3 8.4-3.7l38.6 18.3c2.7 1.3 4.1 4.4 3.2 7.2a429.2 429.2 0 0 1-33.6 79V656zm257.9-340v127.2c0 4.4-3.6 8-8 8h-66.7v18.6h98.8c4.4 0 8 3.6 8 8v35.6c0 4.4-3.6 8-8 8h-59c18.1 29.1 41.8 54.3 72.3 76.9 2.6 2.1 3.2 5.9 1.2 8.5l-26.3 35.3a5.92 5.92 0 0 1-8.9.7c-30.6-29.3-56.8-65.2-78.1-106.9V656c0 4.4-3.6 8-8 8h-36.2c-4.4 0-8-3.6-8-8V536c-22 44.7-49 80.8-80.6 107.6a6.38 6.38 0 0 1-4.8 1.4c-1.7-.3-3.2-1.3-4.1-2.8L432 605.7a6 6 0 0 1 1.6-8.1c28.6-20.3 51.9-45.2 71-76h-55.1c-4.4 0-8-3.6-8-8V478c0-4.4 3.6-8 8-8h94.9v-18.6h-65.9c-4.4 0-8-3.6-8-8V316c0-4.4 3.6-8 8-8h184.7c4.4 0 8 3.6 8 8z"], [e, "M443.7 306.9l-38.6-18.3c-3.4-1.6-7.3.2-8.4 3.7-17.5 58.5-45.2 110.2-82.2 153.6a5.7 5.7 0 0 0-1.2 5.6l13.2 43.5c1.4 4.5 7 5.8 10.2 2.4 7.7-8.1 15.4-16.8 23.1-26V656c0 4.4 3.6 8 8 8h37.3c4.4 0 8-3.6 8-8h.2V393.1a429.2 429.2 0 0 0 33.6-79c.9-2.8-.5-5.9-3.2-7.2zm26.8 9.1v127.4c0 4.4 3.6 8 8 8h65.9V470h-94.9c-4.4 0-8 3.6-8 8v35.6c0 4.4 3.6 8 8 8h55.1c-19.1 30.8-42.4 55.7-71 76a6 6 0 0 0-1.6 8.1l22.8 36.5c.9 1.5 2.4 2.5 4.1 2.8 1.7.3 3.5-.2 4.8-1.4 31.6-26.8 58.6-62.9 80.6-107.6v120c0 4.4 3.6 8 8 8h36.2c4.4 0 8-3.6 8-8V535.9c21.3 41.7 47.5 77.6 78.1 106.9 2.6 2.5 6.7 2.2 8.9-.7l26.3-35.3c2-2.6 1.4-6.4-1.2-8.5-30.5-22.6-54.2-47.8-72.3-76.9h59c4.4 0 8-3.6 8-8v-35.6c0-4.4-3.6-8-8-8h-98.8v-18.6h66.7c4.4 0 8-3.6 8-8V316c0-4.4-3.6-8-8-8H478.5c-4.4 0-8 3.6-8 8zm51.4 42.8h97.9v41.6h-97.9v-41.6z"])
	})),t.InteractionTwoTone = u("interaction", a, (function (e, t) {
		return i(r, [e, "M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z"], [t, "M184 840h656V184H184v656zm114-401.9c0-55.3 44.6-100.1 99.7-100.1h205.8v-53.4c0-5.6 6.5-8.8 10.9-5.3L723.5 365c3.5 2.7 3.5 8 0 10.7l-109.1 85.7c-4.4 3.5-10.9.4-10.9-5.3v-53.4H397.8c-19.6 0-35.5 15.9-35.5 35.6v78.9c0 3.8-3.1 6.8-6.8 6.8h-50.7c-3.8 0-6.8-3-6.8-7v-78.9zm2.6 210.3l109.1-85.7c4.4-3.5 10.9-.4 10.9 5.3v53.4h205.6c19.6 0 35.5-15.9 35.5-35.6v-78.9c0-3.8 3.1-6.8 6.8-6.8h50.7c3.8 0 6.8 3.1 6.8 6.8v78.9c0 55.3-44.6 100.1-99.7 100.1H420.6v53.4c0 5.6-6.5 8.8-10.9 5.3l-109.1-85.7c-3.5-2.7-3.5-8 0-10.5z"], [e, "M304.8 524h50.7c3.7 0 6.8-3 6.8-6.8v-78.9c0-19.7 15.9-35.6 35.5-35.6h205.7v53.4c0 5.7 6.5 8.8 10.9 5.3l109.1-85.7c3.5-2.7 3.5-8 0-10.7l-109.1-85.7c-4.4-3.5-10.9-.3-10.9 5.3V338H397.7c-55.1 0-99.7 44.8-99.7 100.1V517c0 4 3 7 6.8 7zm-4.2 134.9l109.1 85.7c4.4 3.5 10.9.3 10.9-5.3v-53.4h205.7c55.1 0 99.7-44.8 99.7-100.1v-78.9c0-3.7-3-6.8-6.8-6.8h-50.7c-3.7 0-6.8 3-6.8 6.8v78.9c0 19.7-15.9 35.6-35.5 35.6H420.6V568c0-5.7-6.5-8.8-10.9-5.3l-109.1 85.7c-3.5 2.5-3.5 7.8 0 10.5z"])
	})),t.InterationTwoTone = u("interation", a, (function (e, t) {
		return i(r, [e, "M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z"], [t, "M184 840h656V184H184v656zm114-401.9c0-55.3 44.6-100.1 99.7-100.1h205.8v-53.4c0-5.6 6.5-8.8 10.9-5.3L723.5 365c3.5 2.7 3.5 8 0 10.7l-109.1 85.7c-4.4 3.5-10.9.4-10.9-5.3v-53.4H397.8c-19.6 0-35.5 15.9-35.5 35.6v78.9c0 3.8-3.1 6.8-6.8 6.8h-50.7c-3.8 0-6.8-3-6.8-7v-78.9zm2.6 210.3l109.1-85.7c4.4-3.5 10.9-.4 10.9 5.3v53.4h205.6c19.6 0 35.5-15.9 35.5-35.6v-78.9c0-3.8 3.1-6.8 6.8-6.8h50.7c3.8 0 6.8 3.1 6.8 6.8v78.9c0 55.3-44.6 100.1-99.7 100.1H420.6v53.4c0 5.6-6.5 8.8-10.9 5.3l-109.1-85.7c-3.5-2.7-3.5-8 0-10.5z"], [e, "M304.8 524h50.7c3.7 0 6.8-3 6.8-6.8v-78.9c0-19.7 15.9-35.6 35.5-35.6h205.7v53.4c0 5.7 6.5 8.8 10.9 5.3l109.1-85.7c3.5-2.7 3.5-8 0-10.7l-109.1-85.7c-4.4-3.5-10.9-.3-10.9 5.3V338H397.7c-55.1 0-99.7 44.8-99.7 100.1V517c0 4 3 7 6.8 7zm-4.2 134.9l109.1 85.7c4.4 3.5 10.9.3 10.9-5.3v-53.4h205.7c55.1 0 99.7-44.8 99.7-100.1v-78.9c0-3.7-3-6.8-6.8-6.8h-50.7c-3.7 0-6.8 3-6.8 6.8v78.9c0 19.7-15.9 35.6-35.5 35.6H420.6V568c0-5.7-6.5-8.8-10.9-5.3l-109.1 85.7c-3.5 2.5-3.5 7.8 0 10.5z"])
	})),t.LayoutTwoTone = u("layout", a, (function (e, t) {
		return i(r, [t, "M384 185h456v136H384zm-200 0h136v656H184zm696-73H144c-17.7 0-32 14.3-32 32v1c0-17.7 14.3-32 32-32h736c17.7 0 32 14.3 32 32v-1c0-17.7-14.3-32-32-32zM384 385h456v456H384z"], [e, "M880 113H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V145c0-17.7-14.3-32-32-32zM320 841H184V185h136v656zm520 0H384V385h456v456zm0-520H384V185h456v136z"])
	})),t.LeftCircleTwoTone = u("left-circle", a, (function (e, t) {
		return i(r, [t, "M512 140c-205.4 0-372 166.6-372 372s166.6 372 372 372 372-166.6 372-372-166.6-372-372-372zm104 240.9c0 10.3-4.9 19.9-13.2 25.9L457.4 512l145.4 105.1c8.3 6 13.2 15.7 13.2 25.9v46.9c0 6.5-7.4 10.3-12.7 6.5l-246-178a7.95 7.95 0 0 1 0-12.9l246-178c5.3-3.8 12.7 0 12.7 6.5v46.9z"], [e, "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"], [e, "M603.3 327.5l-246 178a7.95 7.95 0 0 0 0 12.9l246 178c5.3 3.8 12.7 0 12.7-6.5V643c0-10.2-4.9-19.9-13.2-25.9L457.4 512l145.4-105.2c8.3-6 13.2-15.6 13.2-25.9V334c0-6.5-7.4-10.3-12.7-6.5z"])
	})),t.LeftSquareTwoTone = u("left-square", a, (function (e, t) {
		return i(r, [e, "M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z"], [t, "M184 840h656V184H184v656zm181.3-334.5l246-178c5.3-3.8 12.7 0 12.7 6.5v46.9c0 10.3-4.9 19.9-13.2 25.9L465.4 512l145.4 105.2c8.3 6 13.2 15.7 13.2 25.9V690c0 6.5-7.4 10.3-12.7 6.4l-246-178a7.95 7.95 0 0 1 0-12.9z"], [e, "M365.3 518.4l246 178c5.3 3.9 12.7.1 12.7-6.4v-46.9c0-10.2-4.9-19.9-13.2-25.9L465.4 512l145.4-105.2c8.3-6 13.2-15.6 13.2-25.9V334c0-6.5-7.4-10.3-12.7-6.5l-246 178a7.95 7.95 0 0 0 0 12.9z"])
	})),t.LikeTwoTone = u("like", a, (function (e, t) {
		return i(r, [t, "M273 495.9v428l.3-428zm538.2-88.3H496.8l9.6-198.4c.6-11.9-4.7-23.1-14.6-30.5-6.1-4.5-13.6-6.8-21.1-6.7-19.6.1-36.9 13.4-42.2 32.3-37.1 134.4-64.9 235.2-83.5 302.5V852h399.4a56.85 56.85 0 0 0 33.6-51.8c0-9.7-2.3-18.9-6.9-27.3l-13.9-25.4 21.9-19a56.76 56.76 0 0 0 19.6-43c0-9.7-2.3-18.9-6.9-27.3l-13.9-25.4 21.9-19a56.76 56.76 0 0 0 19.6-43c0-9.7-2.3-18.9-6.9-27.3l-14-25.5 21.9-19a56.76 56.76 0 0 0 19.6-43c0-19.1-11-37.5-28.8-48.4z"], [e, "M112 528v364c0 17.7 14.3 32 32 32h65V496h-65c-17.7 0-32 14.3-32 32zm773.9 5.7c16.8-22.2 26.1-49.4 26.1-77.7 0-44.9-25.1-87.5-65.5-111a67.67 67.67 0 0 0-34.3-9.3H572.3l6-122.9c1.5-29.7-9-57.9-29.5-79.4a106.4 106.4 0 0 0-77.9-33.4c-52 0-98 35-111.8 85.1l-85.8 310.8-.3 428h472.1c9.3 0 18.2-1.8 26.5-5.4 47.6-20.3 78.3-66.8 78.3-118.4 0-12.6-1.8-25-5.4-37 16.8-22.2 26.1-49.4 26.1-77.7 0-12.6-1.8-25-5.4-37 16.8-22.2 26.1-49.4 26.1-77.7 0-12.6-1.8-25-5.4-37zM820.4 499l-21.9 19 14 25.5a56.2 56.2 0 0 1 6.9 27.3c0 16.5-7.1 32.2-19.6 43l-21.9 19 13.9 25.4a56.2 56.2 0 0 1 6.9 27.3c0 16.5-7.1 32.2-19.6 43l-21.9 19 13.9 25.4a56.2 56.2 0 0 1 6.9 27.3c0 22.4-13.2 42.6-33.6 51.8H345V506.8c18.6-67.2 46.4-168 83.5-302.5a44.28 44.28 0 0 1 42.2-32.3c7.5-.1 15 2.2 21.1 6.7 9.9 7.4 15.2 18.6 14.6 30.5l-9.6 198.4h314.4C829 418.5 840 436.9 840 456c0 16.5-7.1 32.2-19.6 43z"])
	})),t.LockTwoTone = u("lock", a, (function (e, t) {
		return i(r, [e, "M832 464h-68V240c0-70.7-57.3-128-128-128H388c-70.7 0-128 57.3-128 128v224h-68c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V496c0-17.7-14.3-32-32-32zM332 240c0-30.9 25.1-56 56-56h248c30.9 0 56 25.1 56 56v224H332V240zm460 600H232V536h560v304z"], [t, "M232 840h560V536H232v304zm280-226a48.01 48.01 0 0 1 28 87v53c0 4.4-3.6 8-8 8h-40c-4.4 0-8-3.6-8-8v-53a48.01 48.01 0 0 1 28-87z"], [e, "M484 701v53c0 4.4 3.6 8 8 8h40c4.4 0 8-3.6 8-8v-53a48.01 48.01 0 1 0-56 0z"])
	})),t.MailTwoTone = u("mail", a, (function (e, t) {
		return i(r, [t, "M477.5 536.3L135.9 270.7l-27.5-21.4 27.6 21.5V792h752V270.8L546.2 536.3a55.99 55.99 0 0 1-68.7 0z"], [t, "M876.3 198.8l39.3 50.5-27.6 21.5 27.7-21.5-39.3-50.5z"], [e, "M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-94.5 72.1L512 482 190.5 232.1h643zm54.5 38.7V792H136V270.8l-27.6-21.5 27.5 21.4 341.6 265.6a55.99 55.99 0 0 0 68.7 0L888 270.8l27.6-21.5-39.3-50.5h.1l39.3 50.5-27.7 21.5z"])
	})),t.MedicineBoxTwoTone = u("medicine-box", a, (function (e, t) {
		return i(r, [t, "M244.3 328L184 513.4V840h656V513.4L779.7 328H244.3zM660 628c0 4.4-3.6 8-8 8H544v108c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V636H372c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8h108V464c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v108h108c4.4 0 8 3.6 8 8v48z"], [e, "M652 572H544V464c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v108H372c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h108v108c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V636h108c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z"], [e, "M839.2 278.1a32 32 0 0 0-30.4-22.1H736V144c0-17.7-14.3-32-32-32H320c-17.7 0-32 14.3-32 32v112h-72.8a31.9 31.9 0 0 0-30.4 22.1L112 502v378c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V502l-72.8-223.9zM360 184h304v72H360v-72zm480 656H184V513.4L244.3 328h535.4L840 513.4V840z"])
	})),t.MehTwoTone = u("meh", a, (function (e, t) {
		return i(r, [e, "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"], [t, "M512 140c-205.4 0-372 166.6-372 372s166.6 372 372 372 372-166.6 372-372-166.6-372-372-372zM288 421a48.01 48.01 0 0 1 96 0 48.01 48.01 0 0 1-96 0zm384 200c0 4.4-3.6 8-8 8H360c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8h304c4.4 0 8 3.6 8 8v48zm16-152a48.01 48.01 0 0 1 0-96 48.01 48.01 0 0 1 0 96z"], [e, "M288 421a48 48 0 1 0 96 0 48 48 0 1 0-96 0zm376 144H360c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h304c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zm-24-144a48 48 0 1 0 96 0 48 48 0 1 0-96 0z"])
	})),t.MessageTwoTone = u("message", a, (function (e, t) {
		return i(r, [t, "M775.3 248.9a369.62 369.62 0 0 0-119-80A370.2 370.2 0 0 0 512.1 140h-1.7c-99.7.4-193 39.4-262.8 109.9-69.9 70.5-108 164.1-107.6 263.8.3 60.3 15.3 120.2 43.5 173.1l4.5 8.4V836h140.8l8.4 4.5c52.9 28.2 112.8 43.2 173.1 43.5h1.7c99 0 192-38.2 262.1-107.6 70.4-69.8 109.5-163.1 110.1-262.7.2-50.6-9.5-99.6-28.9-145.8a370.15 370.15 0 0 0-80-119zM312 560a48.01 48.01 0 0 1 0-96 48.01 48.01 0 0 1 0 96zm200 0a48.01 48.01 0 0 1 0-96 48.01 48.01 0 0 1 0 96zm200 0a48.01 48.01 0 0 1 0-96 48.01 48.01 0 0 1 0 96z"], [e, "M664 512a48 48 0 1 0 96 0 48 48 0 1 0-96 0zm-400 0a48 48 0 1 0 96 0 48 48 0 1 0-96 0z"], [e, "M925.2 338.4c-22.6-53.7-55-101.9-96.3-143.3a444.35 444.35 0 0 0-143.3-96.3C630.6 75.7 572.2 64 512 64h-2c-60.6.3-119.3 12.3-174.5 35.9a445.35 445.35 0 0 0-142 96.5c-40.9 41.3-73 89.3-95.2 142.8-23 55.4-34.6 114.3-34.3 174.9A449.4 449.4 0 0 0 112 714v152a46 46 0 0 0 46 46h152.1A449.4 449.4 0 0 0 510 960h2.1c59.9 0 118-11.6 172.7-34.3a444.48 444.48 0 0 0 142.8-95.2c41.3-40.9 73.8-88.7 96.5-142 23.6-55.2 35.6-113.9 35.9-174.5.3-60.9-11.5-120-34.8-175.6zm-151.1 438C704 845.8 611 884 512 884h-1.7c-60.3-.3-120.2-15.3-173.1-43.5l-8.4-4.5H188V695.2l-4.5-8.4C155.3 633.9 140.3 574 140 513.7c-.4-99.7 37.7-193.3 107.6-263.8 69.8-70.5 163.1-109.5 262.8-109.9h1.7c50 0 98.5 9.7 144.2 28.9 44.6 18.7 84.6 45.6 119 80 34.3 34.3 61.3 74.4 80 119 19.4 46.2 29.1 95.2 28.9 145.8-.6 99.6-39.7 192.9-110.1 262.7z"], [e, "M464 512a48 48 0 1 0 96 0 48 48 0 1 0-96 0z"])
	})),t.MinusCircleTwoTone = u("minus-circle", a, (function (e, t) {
		return i(r, [e, "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"], [t, "M512 140c-205.4 0-372 166.6-372 372s166.6 372 372 372 372-166.6 372-372-166.6-372-372-372zm192 396c0 4.4-3.6 8-8 8H328c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8h368c4.4 0 8 3.6 8 8v48z"], [e, "M696 480H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h368c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z"])
	})),t.MinusSquareTwoTone = u("minus-square", a, (function (e, t) {
		return i(r, [e, "M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z"], [t, "M184 840h656V184H184v656zm136-352c0-4.4 3.6-8 8-8h368c4.4 0 8 3.6 8 8v48c0 4.4-3.6 8-8 8H328c-4.4 0-8-3.6-8-8v-48z"], [e, "M328 544h368c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8z"])
	})),t.MobileTwoTone = u("mobile", a, (function (e, t) {
		return i(r, [e, "M744 64H280c-35.3 0-64 28.7-64 64v768c0 35.3 28.7 64 64 64h464c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64zm-8 824H288V136h448v752z"], [t, "M288 888h448V136H288v752zm224-142c22.1 0 40 17.9 40 40s-17.9 40-40 40-40-17.9-40-40 17.9-40 40-40z"], [e, "M472 786a40 40 0 1 0 80 0 40 40 0 1 0-80 0z"])
	})),t.PauseCircleTwoTone = u("pause-circle", a, (function (e, t) {
		return i(r, [e, "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"], [t, "M512 140c-205.4 0-372 166.6-372 372s166.6 372 372 372 372-166.6 372-372-166.6-372-372-372zm-80 524c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V360c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v304zm224 0c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V360c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v304z"], [e, "M424 352h-48c-4.4 0-8 3.6-8 8v304c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V360c0-4.4-3.6-8-8-8zm224 0h-48c-4.4 0-8 3.6-8 8v304c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V360c0-4.4-3.6-8-8-8z"])
	})),t.MoneyCollectTwoTone = u("money-collect", a, (function (e, t) {
		return i(r, [t, "M256 744.4l256 93.1 256-93.1V184H256v560.4zM359.7 313c1.2-.7 2.5-1 3.8-1h55.7a8 8 0 0 1 7.1 4.4L511 485.2h3.3L599 316.4c1.3-2.7 4.1-4.4 7.1-4.4h54.5c4.4 0 8 3.6 8.1 7.9 0 1.3-.4 2.6-1 3.8L564 515.3h57.6c4.4 0 8 3.6 8 8v27.1c0 4.4-3.6 8-8 8h-76.3v39h76.3c4.4 0 8 3.6 8 8v27.1c0 4.4-3.6 8-8 8h-76.3V704c0 4.4-3.6 8-8 8h-49.9c-4.4 0-8-3.6-8-8v-63.4h-76c-4.4 0-8-3.6-8-8v-27.1c0-4.4 3.6-8 8-8h76v-39h-76c-4.4 0-8-3.6-8-8v-27.1c0-4.4 3.6-8 8-8h57L356.5 323.8c-2.1-3.8-.7-8.7 3.2-10.8z"], [e, "M911.5 700.7a8 8 0 0 0-10.3-4.8L840 718.2V180c0-37.6-30.4-68-68-68H252c-37.6 0-68 30.4-68 68v538.2l-61.3-22.3c-.9-.3-1.8-.5-2.7-.5-4.4 0-8 3.6-8 8V763c0 3.3 2.1 6.3 5.3 7.5L501 910.1c7.1 2.6 14.8 2.6 21.9 0l383.8-139.5c3.2-1.2 5.3-4.2 5.3-7.5v-59.6c0-1-.2-1.9-.5-2.8zM768 744.4l-256 93.1-256-93.1V184h512v560.4z"], [e, "M460.4 515.4h-57c-4.4 0-8 3.6-8 8v27.1c0 4.4 3.6 8 8 8h76v39h-76c-4.4 0-8 3.6-8 8v27.1c0 4.4 3.6 8 8 8h76V704c0 4.4 3.6 8 8 8h49.9c4.4 0 8-3.6 8-8v-63.5h76.3c4.4 0 8-3.6 8-8v-27.1c0-4.4-3.6-8-8-8h-76.3v-39h76.3c4.4 0 8-3.6 8-8v-27.1c0-4.4-3.6-8-8-8H564l103.7-191.6c.6-1.2 1-2.5 1-3.8-.1-4.3-3.7-7.9-8.1-7.9h-54.5c-3 0-5.8 1.7-7.1 4.4l-84.7 168.8H511l-84.7-168.8a8 8 0 0 0-7.1-4.4h-55.7c-1.3 0-2.6.3-3.8 1-3.9 2.1-5.3 7-3.2 10.8l103.9 191.6z"])
	})),t.NotificationTwoTone = u("notification", a, (function (e, t) {
		return i(r, [t, "M229.6 678.1c-3.7 11.6-5.6 23.9-5.6 36.4 0-12.5 2-24.8 5.7-36.4h-.1zm76.3-260.2H184v188.2h121.9l12.9 5.2L840 820.7V203.3L318.8 412.7z"], [e, "M880 112c-3.8 0-7.7.7-11.6 2.3L292 345.9H128c-8.8 0-16 7.4-16 16.6v299c0 9.2 7.2 16.6 16 16.6h101.7c-3.7 11.6-5.7 23.9-5.7 36.4 0 65.9 53.8 119.5 120 119.5 55.4 0 102.1-37.6 115.9-88.4l408.6 164.2c3.9 1.5 7.8 2.3 11.6 2.3 16.9 0 32-14.2 32-33.2V145.2C912 126.2 897 112 880 112zM344 762.3c-26.5 0-48-21.4-48-47.8 0-11.2 3.9-21.9 11-30.4l84.9 34.1c-2 24.6-22.7 44.1-47.9 44.1zm496 58.4L318.8 611.3l-12.9-5.2H184V417.9h121.9l12.9-5.2L840 203.3v617.4z"])
	})),t.PhoneTwoTone = u("phone", a, (function (e, t) {
		return i(r, [t, "M721.7 184.9L610.9 295.8l120.8 120.7-8 21.6A481.29 481.29 0 0 1 438 723.9l-21.6 8-.9-.9-119.8-120-110.8 110.9 104.5 104.5c10.8 10.7 26 15.7 40.8 13.2 117.9-19.5 235.4-82.9 330.9-178.4s158.9-213.1 178.4-331c2.5-14.8-2.5-30-13.3-40.8L721.7 184.9z"], [e, "M877.1 238.7L770.6 132.3c-13-13-30.4-20.3-48.8-20.3s-35.8 7.2-48.8 20.3L558.3 246.8c-13 13-20.3 30.5-20.3 48.9 0 18.5 7.2 35.8 20.3 48.9l89.6 89.7a405.46 405.46 0 0 1-86.4 127.3c-36.7 36.9-79.6 66-127.2 86.6l-89.6-89.7c-13-13-30.4-20.3-48.8-20.3a68.2 68.2 0 0 0-48.8 20.3L132.3 673c-13 13-20.3 30.5-20.3 48.9 0 18.5 7.2 35.8 20.3 48.9l106.4 106.4c22.2 22.2 52.8 34.9 84.2 34.9 6.5 0 12.8-.5 19.2-1.6 132.4-21.8 263.8-92.3 369.9-198.3C818 606 888.4 474.6 910.4 342.1c6.3-37.6-6.3-76.3-33.3-103.4zm-37.6 91.5c-19.5 117.9-82.9 235.5-178.4 331s-213 158.9-330.9 178.4c-14.8 2.5-30-2.5-40.8-13.2L184.9 721.9 295.7 611l119.8 120 .9.9 21.6-8a481.29 481.29 0 0 0 285.7-285.8l8-21.6-120.8-120.7 110.8-110.9 104.5 104.5c10.8 10.8 15.8 26 13.3 40.8z"])
	})),t.PictureTwoTone = u("picture", a, (function (e, t) {
		return i(r, [e, "M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 632H136v-39.9l138.5-164.3 150.1 178L658.1 489 888 761.6V792zm0-129.8L664.2 396.8c-3.2-3.8-9-3.8-12.2 0L424.6 666.4l-144-170.7c-3.2-3.8-9-3.8-12.2 0L136 652.7V232h752v430.2z"], [t, "M424.6 765.8l-150.1-178L136 752.1V792h752v-30.4L658.1 489z"], [t, "M136 652.7l132.4-157c3.2-3.8 9-3.8 12.2 0l144 170.7L652 396.8c3.2-3.8 9-3.8 12.2 0L888 662.2V232H136v420.7zM304 280a88 88 0 1 1 0 176 88 88 0 0 1 0-176z"], [t, "M276 368a28 28 0 1 0 56 0 28 28 0 1 0-56 0z"], [e, "M304 456a88 88 0 1 0 0-176 88 88 0 0 0 0 176zm0-116c15.5 0 28 12.5 28 28s-12.5 28-28 28-28-12.5-28-28 12.5-28 28-28z"])
	})),t.PlayCircleTwoTone = u("play-circle", a, (function (e, t) {
		return i(r, [e, "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"], [t, "M512 140c-205.4 0-372 166.6-372 372s166.6 372 372 372 372-166.6 372-372-166.6-372-372-372zm164.1 378.2L457.7 677.1a8.02 8.02 0 0 1-12.7-6.5V353a8 8 0 0 1 12.7-6.5l218.4 158.8a7.9 7.9 0 0 1 0 12.9z"], [e, "M676.1 505.3L457.7 346.5A8 8 0 0 0 445 353v317.6a8.02 8.02 0 0 0 12.7 6.5l218.4-158.9a7.9 7.9 0 0 0 0-12.9z"])
	})),t.PlaySquareTwoTone = u("play-square", a, (function (e, t) {
		return i(r, [e, "M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z"], [t, "M184 840h656V184H184v656zm240-484.7c0-9.4 10.9-14.7 18.3-8.8l199.4 156.7a11.2 11.2 0 0 1 0 17.6L442.3 677.6c-7.4 5.8-18.3.6-18.3-8.8V355.3z"], [e, "M442.3 677.6l199.4-156.8a11.2 11.2 0 0 0 0-17.6L442.3 346.5c-7.4-5.9-18.3-.6-18.3 8.8v313.5c0 9.4 10.9 14.6 18.3 8.8z"])
	})),t.PieChartTwoTone = u("pie-chart", a, (function (e, t) {
		return i(r, [t, "M316.2 920.5c-47.6-20.1-90.4-49-127.1-85.7a398.19 398.19 0 0 1-85.7-127.1A397.12 397.12 0 0 1 72 552.2v.2a398.57 398.57 0 0 0 117 282.5c36.7 36.7 79.4 65.5 127 85.6A396.64 396.64 0 0 0 471.6 952c27 0 53.6-2.7 79.7-7.9-25.9 5.2-52.4 7.8-79.3 7.8-54 .1-106.4-10.5-155.8-31.4zM560 472c-4.4 0-8-3.6-8-8V79.9c0-1.3.3-2.5.9-3.6-.9 1.3-1.5 2.9-1.5 4.6v383.7c0 4.4 3.6 8 8 8l383.6-1c1.6 0 3.1-.5 4.4-1.3-1 .5-2.2.7-3.4.7l-384 1z"], [t, "M619.8 147.6v256.6l256.4-.7c-13-62.5-44.3-120.5-90-166.1a332.24 332.24 0 0 0-166.4-89.8z"], [t, "M438 221.7c-75.9 7.6-146.2 40.9-200.8 95.5C174.5 379.9 140 463.3 140 552s34.5 172.1 97.2 234.8c62.3 62.3 145.1 96.8 233.2 97.2 88.2.4 172.7-34.1 235.3-96.2C761 733 794.6 662.3 802.3 586H438V221.7z"], [e, "M864 518H506V160c0-4.4-3.6-8-8-8h-26a398.46 398.46 0 0 0-282.8 117.1 398.19 398.19 0 0 0-85.7 127.1A397.61 397.61 0 0 0 72 552v.2c0 53.9 10.6 106.2 31.4 155.5 20.1 47.6 49 90.4 85.7 127.1 36.7 36.7 79.5 65.6 127.1 85.7A397.61 397.61 0 0 0 472 952c26.9 0 53.4-2.6 79.3-7.8 26.1-5.3 51.7-13.1 76.4-23.6 47.6-20.1 90.4-49 127.1-85.7 36.7-36.7 65.6-79.5 85.7-127.1A397.61 397.61 0 0 0 872 552v-26c0-4.4-3.6-8-8-8zM705.7 787.8A331.59 331.59 0 0 1 470.4 884c-88.1-.4-170.9-34.9-233.2-97.2C174.5 724.1 140 640.7 140 552s34.5-172.1 97.2-234.8c54.6-54.6 124.9-87.9 200.8-95.5V586h364.3c-7.7 76.3-41.3 147-96.6 201.8z"], [e, "M952 462.4l-2.6-28.2c-8.5-92.1-49.4-179-115.2-244.6A399.4 399.4 0 0 0 589 74.6L560.7 72c-3.4-.3-6.4 1.5-7.8 4.3a8.7 8.7 0 0 0-.9 3.6V464c0 4.4 3.6 8 8 8l384-1c1.2 0 2.3-.3 3.4-.7a8.1 8.1 0 0 0 4.6-7.9zm-332.2-58.2V147.6a332.24 332.24 0 0 1 166.4 89.8c45.7 45.6 77 103.6 90 166.1l-256.4.7z"])
	})),t.PlusCircleTwoTone = u("plus-circle", a, (function (e, t) {
		return i(r, [e, "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"], [t, "M512 140c-205.4 0-372 166.6-372 372s166.6 372 372 372 372-166.6 372-372-166.6-372-372-372zm192 396c0 4.4-3.6 8-8 8H544v152c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V544H328c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8h152V328c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v152h152c4.4 0 8 3.6 8 8v48z"], [e, "M696 480H544V328c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v152H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h152v152c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V544h152c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z"])
	})),t.PlusSquareTwoTone = u("plus-square", a, (function (e, t) {
		return i(r, [e, "M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z"], [t, "M184 840h656V184H184v656zm136-352c0-4.4 3.6-8 8-8h152V328c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v152h152c4.4 0 8 3.6 8 8v48c0 4.4-3.6 8-8 8H544v152c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V544H328c-4.4 0-8-3.6-8-8v-48z"], [e, "M328 544h152v152c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V544h152c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H544V328c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v152H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8z"])
	})),t.PoundCircleTwoTone = u("pound-circle", a, (function (e, t) {
		return i(r, [e, "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"], [t, "M512 140c-205.4 0-372 166.6-372 372s166.6 372 372 372 372-166.6 372-372-166.6-372-372-372zm146 582.1c0 4.4-3.6 8-8 8H376.2c-4.4 0-8-3.6-8-8v-38.5c0-3.7 2.5-6.9 6.1-7.8 44-10.9 72.8-49 72.8-94.2 0-14.7-2.5-29.4-5.9-44.2H374c-4.4 0-8-3.6-8-8v-30c0-4.4 3.6-8 8-8h53.7c-7.8-25.1-14.6-50.7-14.6-77.1 0-75.8 58.6-120.3 151.5-120.3 26.5 0 51.4 5.5 70.3 12.7 3.1 1.2 5.2 4.2 5.2 7.5v39.5a8 8 0 0 1-10.6 7.6c-17.9-6.4-39-10.5-60.4-10.5-53.3 0-87.3 26.6-87.3 70.2 0 24.7 6.2 47.9 13.4 70.5h112c4.4 0 8 3.6 8 8v30c0 4.4-3.6 8-8 8h-98.6c3.1 13.2 5.3 26.9 5.3 41 0 40.7-16.5 73.9-43.9 91.1v4.7h180c4.4 0 8 3.6 8 8v39.8z"], [e, "M650 674.3H470v-4.7c27.4-17.2 43.9-50.4 43.9-91.1 0-14.1-2.2-27.8-5.3-41h98.6c4.4 0 8-3.6 8-8v-30c0-4.4-3.6-8-8-8h-112c-7.2-22.6-13.4-45.8-13.4-70.5 0-43.6 34-70.2 87.3-70.2 21.4 0 42.5 4.1 60.4 10.5a8 8 0 0 0 10.6-7.6v-39.5c0-3.3-2.1-6.3-5.2-7.5-18.9-7.2-43.8-12.7-70.3-12.7-92.9 0-151.5 44.5-151.5 120.3 0 26.4 6.8 52 14.6 77.1H374c-4.4 0-8 3.6-8 8v30c0 4.4 3.6 8 8 8h67.2c3.4 14.8 5.9 29.5 5.9 44.2 0 45.2-28.8 83.3-72.8 94.2-3.6.9-6.1 4.1-6.1 7.8v38.5c0 4.4 3.6 8 8 8H650c4.4 0 8-3.6 8-8v-39.8c0-4.4-3.6-8-8-8z"])
	})),t.PrinterTwoTone = u("printer", a, (function (e, t) {
		return i(r, [t, "M360 180h304v152H360zm492 220H172c-6.6 0-12 5.4-12 12v292h132V500h440v204h132V412c0-6.6-5.4-12-12-12zm-24 84c0 4.4-3.6 8-8 8h-40c-4.4 0-8-3.6-8-8v-40c0-4.4 3.6-8 8-8h40c4.4 0 8 3.6 8 8v40z"], [e, "M852 332H732V120c0-4.4-3.6-8-8-8H300c-4.4 0-8 3.6-8 8v212H172c-44.2 0-80 35.8-80 80v328c0 17.7 14.3 32 32 32h168v132c0 4.4 3.6 8 8 8h424c4.4 0 8-3.6 8-8V772h168c17.7 0 32-14.3 32-32V412c0-44.2-35.8-80-80-80zM360 180h304v152H360V180zm304 664H360V568h304v276zm200-140H732V500H292v204H160V412c0-6.6 5.4-12 12-12h680c6.6 0 12 5.4 12 12v292z"], [e, "M820 436h-40c-4.4 0-8 3.6-8 8v40c0 4.4 3.6 8 8 8h40c4.4 0 8-3.6 8-8v-40c0-4.4-3.6-8-8-8z"])
	})),t.ProfileTwoTone = u("profile", a, (function (e, t) {
		return i(r, [e, "M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z"], [t, "M184 840h656V184H184v656zm300-496c0-4.4 3.6-8 8-8h184c4.4 0 8 3.6 8 8v48c0 4.4-3.6 8-8 8H492c-4.4 0-8-3.6-8-8v-48zm0 144c0-4.4 3.6-8 8-8h184c4.4 0 8 3.6 8 8v48c0 4.4-3.6 8-8 8H492c-4.4 0-8-3.6-8-8v-48zm0 144c0-4.4 3.6-8 8-8h184c4.4 0 8 3.6 8 8v48c0 4.4-3.6 8-8 8H492c-4.4 0-8-3.6-8-8v-48zM380 328c22.1 0 40 17.9 40 40s-17.9 40-40 40-40-17.9-40-40 17.9-40 40-40zm0 144c22.1 0 40 17.9 40 40s-17.9 40-40 40-40-17.9-40-40 17.9-40 40-40zm0 144c22.1 0 40 17.9 40 40s-17.9 40-40 40-40-17.9-40-40 17.9-40 40-40z"], [e, "M340 656a40 40 0 1 0 80 0 40 40 0 1 0-80 0zm0-144a40 40 0 1 0 80 0 40 40 0 1 0-80 0zm0-144a40 40 0 1 0 80 0 40 40 0 1 0-80 0zm152 320h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H492c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8zm0-144h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H492c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8zm0-144h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H492c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8z"])
	})),t.ProjectTwoTone = u("project", a, (function (e, t) {
		return i(r, [e, "M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z"], [t, "M184 840h656V184H184v656zm472-560c0-4.4 3.6-8 8-8h80c4.4 0 8 3.6 8 8v256c0 4.4-3.6 8-8 8h-80c-4.4 0-8-3.6-8-8V280zm-192 0c0-4.4 3.6-8 8-8h80c4.4 0 8 3.6 8 8v184c0 4.4-3.6 8-8 8h-80c-4.4 0-8-3.6-8-8V280zm-192 0c0-4.4 3.6-8 8-8h80c4.4 0 8 3.6 8 8v464c0 4.4-3.6 8-8 8h-80c-4.4 0-8-3.6-8-8V280z"], [e, "M280 752h80c4.4 0 8-3.6 8-8V280c0-4.4-3.6-8-8-8h-80c-4.4 0-8 3.6-8 8v464c0 4.4 3.6 8 8 8zm192-280h80c4.4 0 8-3.6 8-8V280c0-4.4-3.6-8-8-8h-80c-4.4 0-8 3.6-8 8v184c0 4.4 3.6 8 8 8zm192 72h80c4.4 0 8-3.6 8-8V280c0-4.4-3.6-8-8-8h-80c-4.4 0-8 3.6-8 8v256c0 4.4 3.6 8 8 8z"])
	})),t.PushpinTwoTone = u("pushpin", a, (function (e, t) {
		return i(r, [t, "M474.8 357.7l-24.5 24.5-34.4-3.8c-9.6-1.1-19.3-1.6-28.9-1.6-29 0-57.5 4.7-84.7 14.1-14 4.8-27.4 10.8-40.3 17.9l353.1 353.3a259.92 259.92 0 0 0 30.4-153.9l-3.8-34.4 24.5-24.5L800 415.5 608.5 224 474.8 357.7z"], [e, "M878.3 392.1L631.9 145.7c-6.5-6.5-15-9.7-23.5-9.7s-17 3.2-23.5 9.7L423.8 306.9c-12.2-1.4-24.5-2-36.8-2-73.2 0-146.4 24.1-206.5 72.3a33.23 33.23 0 0 0-2.7 49.4l181.7 181.7-215.4 215.2a15.8 15.8 0 0 0-4.6 9.8l-3.4 37.2c-.9 9.4 6.6 17.4 15.9 17.4.5 0 1 0 1.5-.1l37.2-3.4c3.7-.3 7.2-2 9.8-4.6l215.4-215.4 181.7 181.7c6.5 6.5 15 9.7 23.5 9.7 9.7 0 19.3-4.2 25.9-12.4 56.3-70.3 79.7-158.3 70.2-243.4l161.1-161.1c12.9-12.8 12.9-33.8 0-46.8zM666.2 549.3l-24.5 24.5 3.8 34.4a259.92 259.92 0 0 1-30.4 153.9L262 408.8c12.9-7.1 26.3-13.1 40.3-17.9 27.2-9.4 55.7-14.1 84.7-14.1 9.6 0 19.3.5 28.9 1.6l34.4 3.8 24.5-24.5L608.5 224 800 415.5 666.2 549.3z"])
	})),t.PropertySafetyTwoTone = u("property-safety", a, (function (e, t) {
		return i(r, [e, "M866.9 169.9L527.1 54.1C523 52.7 517.5 52 512 52s-11 .7-15.1 2.1L157.1 169.9c-8.3 2.8-15.1 12.4-15.1 21.2v482.4c0 8.8 5.7 20.4 12.6 25.9L499.3 968c3.5 2.7 8 4.1 12.6 4.1s9.2-1.4 12.6-4.1l344.7-268.6c6.9-5.4 12.6-17 12.6-25.9V191.1c.2-8.8-6.6-18.3-14.9-21.2zM810 654.3L512 886.5 214 654.3V226.7l298-101.6 298 101.6v427.6z"], [t, "M214 226.7v427.6l298 232.2 298-232.2V226.7L512 125.1 214 226.7zM593.9 318h45c5.5 0 10 4.5 10 10 .1 1.7-.3 3.3-1.1 4.8l-87.7 161.1h45.7c5.5 0 10 4.5 10 10v21.3c0 5.5-4.5 10-10 10h-63.4v29.7h63.4c5.5 0 10 4.5 10 10v21.3c0 5.5-4.5 10-10 10h-63.4V658c0 5.5-4.5 10-10 10h-41.3c-5.5 0-10-4.5-10-10v-51.8H418c-5.5 0-10-4.5-10-10v-21.3c0-5.5 4.5-10 10-10h63.1v-29.7H418c-5.5 0-10-4.5-10-10v-21.3c0-5.5 4.5-10 10-10h45.2l-88-161.1c-2.6-4.8-.9-10.9 4-13.6 1.5-.8 3.1-1.2 4.8-1.2h46c3.8 0 7.2 2.1 8.9 5.5l72.9 144.3L585 323.5a10 10 0 0 1 8.9-5.5z"], [e, "M438.9 323.5a9.88 9.88 0 0 0-8.9-5.5h-46c-1.7 0-3.3.4-4.8 1.2-4.9 2.7-6.6 8.8-4 13.6l88 161.1H418c-5.5 0-10 4.5-10 10v21.3c0 5.5 4.5 10 10 10h63.1v29.7H418c-5.5 0-10 4.5-10 10v21.3c0 5.5 4.5 10 10 10h63.1V658c0 5.5 4.5 10 10 10h41.3c5.5 0 10-4.5 10-10v-51.8h63.4c5.5 0 10-4.5 10-10v-21.3c0-5.5-4.5-10-10-10h-63.4v-29.7h63.4c5.5 0 10-4.5 10-10v-21.3c0-5.5-4.5-10-10-10h-45.7l87.7-161.1c.8-1.5 1.2-3.1 1.1-4.8 0-5.5-4.5-10-10-10h-45a10 10 0 0 0-8.9 5.5l-73.2 144.3-72.9-144.3z"])
	})),t.QuestionCircleTwoTone = u("question-circle", a, (function (e, t) {
		return i(r, [e, "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"], [t, "M512 140c-205.4 0-372 166.6-372 372s166.6 372 372 372 372-166.6 372-372-166.6-372-372-372zm0 632c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40zm62.9-219.5a48.3 48.3 0 0 0-30.9 44.8V620c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8v-21.5c0-23.1 6.7-45.9 19.9-64.9 12.9-18.6 30.9-32.8 52.1-40.9 34-13.1 56-41.6 56-72.7 0-44.1-43.1-80-96-80s-96 35.9-96 80v7.6c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V420c0-39.3 17.2-76 48.4-103.3C430.4 290.4 470 276 512 276s81.6 14.5 111.6 40.7C654.8 344 672 380.7 672 420c0 57.8-38.1 109.8-97.1 132.5z"], [e, "M472 732a40 40 0 1 0 80 0 40 40 0 1 0-80 0zm151.6-415.3C593.6 290.5 554 276 512 276s-81.6 14.4-111.6 40.7C369.2 344 352 380.7 352 420v7.6c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V420c0-44.1 43.1-80 96-80s96 35.9 96 80c0 31.1-22 59.6-56 72.7-21.2 8.1-39.2 22.3-52.1 40.9-13.2 19-19.9 41.8-19.9 64.9V620c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-22.7a48.3 48.3 0 0 1 30.9-44.8c59-22.7 97.1-74.7 97.1-132.5 0-39.3-17.2-76-48.4-103.3z"])
	})),t.ReconciliationTwoTone = u("reconciliation", a, (function (e, t) {
		return i(r, [t, "M740 344H404V240H304v160h176c17.7 0 32 14.3 32 32v360h328V240H740v104zM584 448c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v56c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8v-56zm92 301c-50.8 0-92-41.2-92-92s41.2-92 92-92 92 41.2 92 92-41.2 92-92 92zm92-341v96c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8v-96c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8z"], [t, "M642 657a34 34 0 1 0 68 0 34 34 0 1 0-68 0z"], [e, "M592 512h48c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm112-104v96c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-96c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8z"], [e, "M880 168H668c0-30.9-25.1-56-56-56h-80c-30.9 0-56 25.1-56 56H264c-17.7 0-32 14.3-32 32v200h-88c-17.7 0-32 14.3-32 32v448c0 17.7 14.3 32 32 32h336c17.7 0 32-14.3 32-32v-16h368c17.7 0 32-14.3 32-32V200c0-17.7-14.3-32-32-32zm-412 64h72v-56h64v56h72v48H468v-48zm-20 616H176V616h272v232zm0-296H176v-88h272v88zm392 240H512V432c0-17.7-14.3-32-32-32H304V240h100v104h336V240h100v552z"], [e, "M676 565c-50.8 0-92 41.2-92 92s41.2 92 92 92 92-41.2 92-92-41.2-92-92-92zm0 126c-18.8 0-34-15.2-34-34s15.2-34 34-34 34 15.2 34 34-15.2 34-34 34z"])
	})),t.RedEnvelopeTwoTone = u("red-envelope", a, (function (e, t) {
		return i(r, [e, "M832 64H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32zm-40 824H232V193.1l260.3 204.1c11.6 9.1 27.9 9.1 39.5 0L792 193.1V888zm0-751.3h-31.7L512 331.3 263.7 136.7H232v-.7h560v.7z"], [t, "M492.3 397.2L232 193.1V888h560V193.1L531.8 397.2a31.99 31.99 0 0 1-39.5 0zm99.4 60.9h47.8a8.45 8.45 0 0 1 7.4 12.4l-87.2 161h45.9c4.6 0 8.4 3.8 8.4 8.4V665c0 4.6-3.8 8.4-8.4 8.4h-63.3V702h63.3c4.6 0 8.4 3.8 8.4 8.4v25c.2 4.7-3.5 8.5-8.2 8.5h-63.3v49.9c0 4.6-3.8 8.4-8.4 8.4h-43.7c-4.6 0-8.4-3.8-8.4-8.4v-49.9h-63c-4.6 0-8.4-3.8-8.4-8.4v-25.1c0-4.6 3.8-8.4 8.4-8.4h63v-28.6h-63c-4.6 0-8.4-3.8-8.4-8.4v-25.1c0-4.6 3.8-8.4 8.4-8.4h45.4L377 470.4a8.4 8.4 0 0 1 3.4-11.4c1.3-.6 2.6-1 3.9-1h48.8c3.2 0 6.1 1.8 7.5 4.6l71.7 142 71.9-141.9a8.6 8.6 0 0 1 7.5-4.6z"], [t, "M232 136.7h31.7L512 331.3l248.3-194.6H792v-.7H232z"], [e, "M440.6 462.6a8.38 8.38 0 0 0-7.5-4.6h-48.8c-1.3 0-2.6.4-3.9 1a8.4 8.4 0 0 0-3.4 11.4l87.4 161.1H419c-4.6 0-8.4 3.8-8.4 8.4V665c0 4.6 3.8 8.4 8.4 8.4h63V702h-63c-4.6 0-8.4 3.8-8.4 8.4v25.1c0 4.6 3.8 8.4 8.4 8.4h63v49.9c0 4.6 3.8 8.4 8.4 8.4h43.7c4.6 0 8.4-3.8 8.4-8.4v-49.9h63.3c4.7 0 8.4-3.8 8.2-8.5v-25c0-4.6-3.8-8.4-8.4-8.4h-63.3v-28.6h63.3c4.6 0 8.4-3.8 8.4-8.4v-25.1c0-4.6-3.8-8.4-8.4-8.4h-45.9l87.2-161a8.45 8.45 0 0 0-7.4-12.4h-47.8c-3.1 0-6 1.8-7.5 4.6l-71.9 141.9-71.7-142z"])
	})),t.RestTwoTone = u("rest", a, (function (e, t) {
		return i(r, [t, "M326.4 844h363.2l44.3-520H282l44.4 520zM508 416c79.5 0 144 64.5 144 144s-64.5 144-144 144-144-64.5-144-144 64.5-144 144-144z"], [e, "M508 704c79.5 0 144-64.5 144-144s-64.5-144-144-144-144 64.5-144 144 64.5 144 144 144zm0-224c44.2 0 80 35.8 80 80s-35.8 80-80 80-80-35.8-80-80 35.8-80 80-80z"], [e, "M832 256h-28.1l-35.7-120.9c-4-13.7-16.5-23.1-30.7-23.1h-451c-14.3 0-26.8 9.4-30.7 23.1L220.1 256H192c-17.7 0-32 14.3-32 32v28c0 4.4 3.6 8 8 8h45.8l47.7 558.7a32 32 0 0 0 31.9 29.3h429.2a32 32 0 0 0 31.9-29.3L802.2 324H856c4.4 0 8-3.6 8-8v-28c0-17.7-14.3-32-32-32zm-518.6-76h397.2l22.4 76H291l22.4-76zm376.2 664H326.4L282 324h451.9l-44.3 520z"])
	})),t.RightCircleTwoTone = u("right-circle", a, (function (e, t) {
		return i(r, [t, "M512 140c-205.4 0-372 166.6-372 372s166.6 372 372 372 372-166.6 372-372-166.6-372-372-372zm154.7 378.4l-246 178c-5.3 3.8-12.7 0-12.7-6.5V643c0-10.2 4.9-19.9 13.2-25.9L566.6 512 421.2 406.8c-8.3-6-13.2-15.6-13.2-25.9V334c0-6.5 7.4-10.3 12.7-6.5l246 178c4.4 3.2 4.4 9.7 0 12.9z"], [e, "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"], [e, "M666.7 505.5l-246-178c-5.3-3.8-12.7 0-12.7 6.5v46.9c0 10.3 4.9 19.9 13.2 25.9L566.6 512 421.2 617.1c-8.3 6-13.2 15.7-13.2 25.9v46.9c0 6.5 7.4 10.3 12.7 6.5l246-178c4.4-3.2 4.4-9.7 0-12.9z"])
	})),t.RocketTwoTone = u("rocket", a, (function (e, t) {
		return i(r, [t, "M261.7 621.4c-9.4 14.6-17 30.3-22.5 46.6H324V558.7c-24.8 16.2-46 37.5-62.3 62.7zM700 558.7V668h84.8c-5.5-16.3-13.1-32-22.5-46.6a211.6 211.6 0 0 0-62.3-62.7zm-64-239.9l-124-147-124 147V668h248V318.8zM512 448a48.01 48.01 0 0 1 0-96 48.01 48.01 0 0 1 0 96z"], [e, "M864 736c0-111.6-65.4-208-160-252.9V317.3c0-15.1-5.3-29.7-15.1-41.2L536.5 95.4C530.1 87.8 521 84 512 84s-18.1 3.8-24.5 11.4L335.1 276.1a63.97 63.97 0 0 0-15.1 41.2v165.8C225.4 528 160 624.4 160 736h156.5c-2.3 7.2-3.5 15-3.5 23.8 0 22.1 7.6 43.7 21.4 60.8a97.2 97.2 0 0 0 43.1 30.6c23.1 54 75.6 88.8 134.5 88.8 29.1 0 57.3-8.6 81.4-24.8 23.6-15.8 41.9-37.9 53-64a97 97 0 0 0 43.1-30.5 97.52 97.52 0 0 0 21.4-60.8c0-8.4-1.1-16.4-3.1-23.8L864 736zm-540-68h-84.8c5.5-16.3 13.1-32 22.5-46.6 16.3-25.2 37.5-46.5 62.3-62.7V668zm64-184.9V318.8l124-147 124 147V668H388V483.1zm240.1 301.1c-5.2 3-11.2 4.2-17.1 3.4l-19.5-2.4-2.8 19.4c-5.4 37.9-38.4 66.5-76.7 66.5s-71.3-28.6-76.7-66.5l-2.8-19.5-19.5 2.5a27.7 27.7 0 0 1-17.1-3.5c-8.7-5-14.1-14.3-14.1-24.4 0-10.6 5.9-19.4 14.6-23.8h231.3c8.8 4.5 14.6 13.3 14.6 23.8-.1 10.2-5.5 19.6-14.2 24.5zM700 668V558.7a211.6 211.6 0 0 1 62.3 62.7c9.4 14.6 17 30.3 22.5 46.6H700z"], [e, "M464 400a48 48 0 1 0 96 0 48 48 0 1 0-96 0z"])
	})),t.RightSquareTwoTone = u("right-square", a, (function (e, t) {
		return i(r, [e, "M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z"], [t, "M184 840h656V184H184v656zm216-196.9c0-10.2 4.9-19.9 13.2-25.9L558.6 512 413.2 406.8c-8.3-6-13.2-15.6-13.2-25.9V334c0-6.5 7.4-10.3 12.7-6.5l246 178c4.4 3.2 4.4 9.7 0 12.9l-246 178c-5.3 3.9-12.7.1-12.7-6.4v-46.9z"], [e, "M412.7 696.4l246-178c4.4-3.2 4.4-9.7 0-12.9l-246-178c-5.3-3.8-12.7 0-12.7 6.5v46.9c0 10.3 4.9 19.9 13.2 25.9L558.6 512 413.2 617.2c-8.3 6-13.2 15.7-13.2 25.9V690c0 6.5 7.4 10.3 12.7 6.4z"])
	})),t.SafetyCertificateTwoTone = u("safety-certificate", a, (function (e, t) {
		return i(r, [e, "M866.9 169.9L527.1 54.1C523 52.7 517.5 52 512 52s-11 .7-15.1 2.1L157.1 169.9c-8.3 2.8-15.1 12.4-15.1 21.2v482.4c0 8.8 5.7 20.4 12.6 25.9L499.3 968c3.5 2.7 8 4.1 12.6 4.1s9.2-1.4 12.6-4.1l344.7-268.6c6.9-5.4 12.6-17 12.6-25.9V191.1c.2-8.8-6.6-18.3-14.9-21.2zM810 654.3L512 886.5 214 654.3V226.7l298-101.6 298 101.6v427.6z"], [t, "M214 226.7v427.6l298 232.2 298-232.2V226.7L512 125.1 214 226.7zM632.8 328H688c6.5 0 10.3 7.4 6.5 12.7L481.9 633.4a16.1 16.1 0 0 1-26 0l-126.4-174c-3.8-5.3 0-12.7 6.5-12.7h55.2c5.2 0 10 2.5 13 6.6l64.7 89.1 150.9-207.8c3-4.1 7.9-6.6 13-6.6z"], [e, "M404.2 453.3c-3-4.1-7.8-6.6-13-6.6H336c-6.5 0-10.3 7.4-6.5 12.7l126.4 174a16.1 16.1 0 0 0 26 0l212.6-292.7c3.8-5.3 0-12.7-6.5-12.7h-55.2c-5.1 0-10 2.5-13 6.6L468.9 542.4l-64.7-89.1z"])
	})),t.SaveTwoTone = u("save", a, (function (e, t) {
		return i(r, [t, "M704 320c0 17.7-14.3 32-32 32H352c-17.7 0-32-14.3-32-32V184H184v656h656V341.8l-136-136V320zM512 730c-79.5 0-144-64.5-144-144s64.5-144 144-144 144 64.5 144 144-64.5 144-144 144z"], [e, "M512 442c-79.5 0-144 64.5-144 144s64.5 144 144 144 144-64.5 144-144-64.5-144-144-144zm0 224c-44.2 0-80-35.8-80-80s35.8-80 80-80 80 35.8 80 80-35.8 80-80 80z"], [e, "M893.3 293.3L730.7 130.7c-.7-.7-1.4-1.3-2.1-2-.1-.1-.3-.2-.4-.3-.7-.7-1.5-1.3-2.2-1.9a64 64 0 0 0-22-11.7V112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V338.5c0-17-6.7-33.2-18.7-45.2zM384 184h256v104H384V184zm456 656H184V184h136v136c0 17.7 14.3 32 32 32h320c17.7 0 32-14.3 32-32V205.8l136 136V840z"])
	})),t.ScheduleTwoTone = u("schedule", a, (function (e, t) {
		return i(r, [t, "M768 352c0 4.4-3.6 8-8 8h-56c-4.4 0-8-3.6-8-8v-56H548v56c0 4.4-3.6 8-8 8h-56c-4.4 0-8-3.6-8-8v-56H328v56c0 4.4-3.6 8-8 8h-56c-4.4 0-8-3.6-8-8v-56H136v496h752V296H768v56zM424 688c0 4.4-3.6 8-8 8H232c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8h184c4.4 0 8 3.6 8 8v48zm0-136c0 4.4-3.6 8-8 8H232c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8h184c4.4 0 8 3.6 8 8v48zm374.4-91.2l-165 228.7a15.9 15.9 0 0 1-25.8 0L493.5 531.3c-3.8-5.3 0-12.7 6.5-12.7h54.9c5.1 0 9.9 2.4 12.9 6.6l52.8 73.1 103.6-143.7c3-4.1 7.8-6.6 12.8-6.5h54.9c6.5 0 10.3 7.4 6.5 12.7z"], [e, "M724.2 454.6L620.6 598.3l-52.8-73.1c-3-4.2-7.8-6.6-12.9-6.6H500c-6.5 0-10.3 7.4-6.5 12.7l114.1 158.2a15.9 15.9 0 0 0 25.8 0l165-228.7c3.8-5.3 0-12.7-6.5-12.7H737c-5-.1-9.8 2.4-12.8 6.5zM416 496H232c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z"], [e, "M928 224H768v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56H548v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56H328v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56H96c-17.7 0-32 14.3-32 32v576c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V256c0-17.7-14.3-32-32-32zm-40 568H136V296h120v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56h148v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56h148v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56h120v496z"], [e, "M416 632H232c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z"])
	})),t.SecurityScanTwoTone = u("security-scan", a, (function (e, t) {
		return i(r, [e, "M866.9 169.9L527.1 54.1C523 52.7 517.5 52 512 52s-11 .7-15.1 2.1L157.1 169.9c-8.3 2.8-15.1 12.4-15.1 21.2v482.4c0 8.8 5.7 20.4 12.6 25.9L499.3 968c3.5 2.7 8 4.1 12.6 4.1s9.2-1.4 12.6-4.1l344.7-268.6c6.9-5.4 12.6-17 12.6-25.9V191.1c.2-8.8-6.6-18.3-14.9-21.2zM810 654.3L512 886.5 214 654.3V226.7l298-101.6 298 101.6v427.6z"], [t, "M460.7 451.1a80.1 80.1 0 1 0 160.2 0 80.1 80.1 0 1 0-160.2 0z"], [t, "M214 226.7v427.6l298 232.2 298-232.2V226.7L512 125.1 214 226.7zm428.7 122.5c56.3 56.3 56.3 147.5 0 203.8-48.5 48.5-123 55.2-178.6 20.1l-77.5 77.5a8.03 8.03 0 0 1-11.3 0l-34-34a8.03 8.03 0 0 1 0-11.3l77.5-77.5c-35.1-55.7-28.4-130.1 20.1-178.6 56.3-56.3 147.5-56.3 203.8 0z"], [e, "M418.8 527.8l-77.5 77.5a8.03 8.03 0 0 0 0 11.3l34 34c3.1 3.1 8.2 3.1 11.3 0l77.5-77.5c55.6 35.1 130.1 28.4 178.6-20.1 56.3-56.3 56.3-147.5 0-203.8-56.3-56.3-147.5-56.3-203.8 0-48.5 48.5-55.2 122.9-20.1 178.6zm65.4-133.3a80.1 80.1 0 0 1 113.3 0 80.1 80.1 0 0 1 0 113.3c-31.3 31.3-82 31.3-113.3 0s-31.3-82 0-113.3z"])
	})),t.SettingTwoTone = u("setting", a, (function (e, t) {
		return i(r, [t, "M859.3 569.7l.2.1c3.1-18.9 4.6-38.2 4.6-57.3 0-17.1-1.3-34.3-3.7-51.1 2.4 16.7 3.6 33.6 3.6 50.5 0 19.4-1.6 38.8-4.7 57.8zM99 398.1c-.5-.4-.9-.8-1.4-1.3.7.7 1.4 1.4 2.2 2.1l65.5 55.9v-.1L99 398.1zm536.6-216h.1l-15.5-83.8c-.2-1-.4-1.9-.7-2.8.1.5.3 1.1.4 1.6l15.7 85zm54 546.5l31.4-25.8 92.8 32.9c17-22.9 31.3-47.5 42.6-73.6l-74.7-63.9 6.6-40.1c2.5-15.1 3.8-30.6 3.8-46.1s-1.3-31-3.8-46.1l-6.5-39.9 74.7-63.9c-11.4-26-25.6-50.7-42.6-73.6l-92.8 32.9-31.4-25.8c-23.9-19.6-50.6-35-79.3-45.8l-38.1-14.3-17.9-97a377.5 377.5 0 0 0-85 0l-17.9 97.2-37.9 14.3c-28.5 10.8-55 26.2-78.7 45.7l-31.4 25.9-93.4-33.2c-17 22.9-31.3 47.5-42.6 73.6l75.5 64.5-6.5 40c-2.5 14.9-3.7 30.2-3.7 45.5 0 15.2 1.3 30.6 3.7 45.5l6.5 40-75.5 64.5c11.4 26 25.6 50.7 42.6 73.6l93.4-33.2 31.4 25.9c23.7 19.5 50.2 34.9 78.7 45.7l37.8 14.5 17.9 97.2c28.2 3.2 56.9 3.2 85 0l17.9-97 38.1-14.3c28.8-10.8 55.4-26.2 79.3-45.8zm-177.1-50.3c-30.5 0-59.2-7.8-84.3-21.5C373.3 627 336 568.9 336 502c0-97.2 78.8-176 176-176 66.9 0 125 37.3 154.8 92.2 13.7 25 21.5 53.7 21.5 84.3 0 97.1-78.7 175.8-175.8 175.8zM207.2 812.8c-5.5 1.9-11.2 2.3-16.6 1.2 5.7 1.2 11.7 1 17.5-1l81.4-29c-.1-.1-.3-.2-.4-.3l-81.9 29.1zm717.6-414.7l-65.5 56c0 .2.1.5.1.7l65.4-55.9c7.1-6.1 11.1-14.9 11.2-24-.3 8.8-4.3 17.3-11.2 23.2z"], [t, "M935.8 646.6c.5 4.7 0 9.5-1.7 14.1l-.9 2.6a446.02 446.02 0 0 1-79.7 137.9l-1.8 2.1a32 32 0 0 1-35.1 9.5l-81.3-28.9a350 350 0 0 1-99.7 57.6l-15.7 85a32.05 32.05 0 0 1-25.8 25.7l-2.7.5a445.2 445.2 0 0 1-79.2 7.1h.3c26.7 0 53.4-2.4 79.4-7.1l2.7-.5a32.05 32.05 0 0 0 25.8-25.7l15.7-84.9c36.2-13.6 69.6-32.9 99.6-57.5l81.2 28.9a32 32 0 0 0 35.1-9.5l1.8-2.1c34.8-41.1 61.5-87.4 79.6-137.7l.9-2.6c1.6-4.7 2.1-9.7 1.5-14.5z"], [e, "M688 502c0-30.3-7.7-58.9-21.2-83.8C637 363.3 578.9 326 512 326c-97.2 0-176 78.8-176 176 0 66.9 37.3 125 92.2 154.8 24.9 13.5 53.4 21.2 83.8 21.2 97.2 0 176-78.8 176-176zm-288 0c0-29.9 11.7-58 32.8-79.2C454 401.6 482.1 390 512 390c29.9 0 58 11.6 79.2 32.8A111.6 111.6 0 0 1 624 502c0 29.9-11.7 58-32.8 79.2A111.6 111.6 0 0 1 512 614c-29.9 0-58-11.7-79.2-32.8A111.6 111.6 0 0 1 400 502z"], [e, "M594.1 952.2a32.05 32.05 0 0 0 25.8-25.7l15.7-85a350 350 0 0 0 99.7-57.6l81.3 28.9a32 32 0 0 0 35.1-9.5l1.8-2.1c34.8-41.1 61.6-87.5 79.7-137.9l.9-2.6c1.7-4.6 2.2-9.4 1.7-14.1-.9-7.9-4.7-15.4-11-20.9l-65.3-55.9-.2-.1c3.1-19 4.7-38.4 4.7-57.8 0-16.9-1.2-33.9-3.6-50.5-.3-2.2-.7-4.4-1-6.6 0-.2-.1-.5-.1-.7l65.5-56c6.9-5.9 10.9-14.4 11.2-23.2.1-4-.5-8.1-1.9-12l-.9-2.6a443.74 443.74 0 0 0-79.7-137.9l-1.8-2.1a32.12 32.12 0 0 0-35.1-9.5l-81.3 28.9c-30-24.6-63.4-44-99.6-57.6h-.1l-15.7-85c-.1-.5-.2-1.1-.4-1.6a32.08 32.08 0 0 0-25.4-24.1l-2.7-.5c-52.1-9.4-106.9-9.4-159 0l-2.7.5a32.05 32.05 0 0 0-25.8 25.7l-15.8 85.4a351.86 351.86 0 0 0-99 57.4l-81.9-29.1a32 32 0 0 0-35.1 9.5l-1.8 2.1a446.02 446.02 0 0 0-79.7 137.9l-.9 2.6a32.09 32.09 0 0 0 7.9 33.9c.5.4.9.9 1.4 1.3l66.3 56.6v.1c-3.1 18.8-4.6 37.9-4.6 57 0 19.2 1.5 38.4 4.6 57.1L99 625.5a32.03 32.03 0 0 0-9.3 35.2l.9 2.6c18.1 50.4 44.9 96.9 79.7 137.9l1.8 2.1c4.9 5.7 11.4 9.4 18.5 10.7 5.4 1 11.1.7 16.6-1.2l81.9-29.1c.1.1.3.2.4.3 29.7 24.3 62.8 43.6 98.6 57.1l15.8 85.4a32.05 32.05 0 0 0 25.8 25.7l2.7.5c26.1 4.7 52.8 7.1 79.5 7.1h.3c26.6 0 53.3-2.4 79.2-7.1l2.7-.5zm-39.8-66.5a377.5 377.5 0 0 1-85 0l-17.9-97.2-37.8-14.5c-28.5-10.8-55-26.2-78.7-45.7l-31.4-25.9-93.4 33.2c-17-22.9-31.2-47.6-42.6-73.6l75.5-64.5-6.5-40c-2.4-14.9-3.7-30.3-3.7-45.5 0-15.3 1.2-30.6 3.7-45.5l6.5-40-75.5-64.5c11.3-26.1 25.6-50.7 42.6-73.6l93.4 33.2 31.4-25.9c23.7-19.5 50.2-34.9 78.7-45.7l37.9-14.3 17.9-97.2c28.1-3.2 56.8-3.2 85 0l17.9 97 38.1 14.3c28.7 10.8 55.4 26.2 79.3 45.8l31.4 25.8 92.8-32.9c17 22.9 31.2 47.6 42.6 73.6L781.8 426l6.5 39.9c2.5 15.1 3.8 30.6 3.8 46.1s-1.3 31-3.8 46.1l-6.6 40.1 74.7 63.9a370.03 370.03 0 0 1-42.6 73.6L721 702.8l-31.4 25.8c-23.9 19.6-50.5 35-79.3 45.8l-38.1 14.3-17.9 97z"])
	})),t.ShopTwoTone = u("shop", a, (function (e, t) {
		return i(r, [t, "M839.5 344h-655c-.3 0-.5.2-.5.5v91.2c0 59.8 49 108.3 109.3 108.3 40.7 0 76.2-22 95.1-54.7 2.9-5.1 8.4-8.3 14.3-8.3s11.3 3.2 14.3 8.3c18.8 32.7 54.3 54.7 95 54.7 40.8 0 76.4-22.1 95.1-54.9 2.9-5 8.2-8.1 13.9-8.1h.6c5.8 0 11 3.1 13.9 8.1 18.8 32.8 54.4 54.9 95.2 54.9C791 544 840 495.5 840 435.7v-91.2c0-.3-.2-.5-.5-.5z"], [e, "M882 272.1V144c0-17.7-14.3-32-32-32H174c-17.7 0-32 14.3-32 32v128.1c-16.7 1-30 14.9-30 31.9v131.7a177 177 0 0 0 14.4 70.4c4.3 10.2 9.6 19.8 15.6 28.9v345c0 17.6 14.3 32 32 32h676c17.7 0 32-14.3 32-32V535a175 175 0 0 0 15.6-28.9c9.5-22.3 14.4-46 14.4-70.4V304c0-17-13.3-30.9-30-31.9zM214 184h596v88H214v-88zm362 656.1H448V736h128v104.1zm234.4 0H640V704c0-17.7-14.3-32-32-32H416c-17.7 0-32 14.3-32 32v136.1H214V597.9c2.9 1.4 5.9 2.8 9 4 22.3 9.4 46 14.1 70.4 14.1 24.4 0 48-4.7 70.4-14.1 13.8-5.8 26.8-13.2 38.7-22.1.2-.1.4-.1.6 0a180.4 180.4 0 0 0 38.7 22.1c22.3 9.4 46 14.1 70.4 14.1s48-4.7 70.4-14.1c13.8-5.8 26.8-13.2 38.7-22.1.2-.1.4-.1.6 0a180.4 180.4 0 0 0 38.7 22.1c22.3 9.4 46 14.1 70.4 14.1s48-4.7 70.4-14.1c3-1.3 6-2.6 9-4v242.2zM840 435.7c0 59.8-49 108.3-109.3 108.3-40.8 0-76.4-22.1-95.2-54.9-2.9-5-8.1-8.1-13.9-8.1h-.6c-5.7 0-11 3.1-13.9 8.1A109.24 109.24 0 0 1 512 544c-40.7 0-76.2-22-95-54.7-3-5.1-8.4-8.3-14.3-8.3s-11.4 3.2-14.3 8.3a109.63 109.63 0 0 1-95.1 54.7C233 544 184 495.5 184 435.7v-91.2c0-.3.2-.5.5-.5h655c.3 0 .5.2.5.5v91.2z"])
	})),t.ShoppingTwoTone = u("shopping", a, (function (e, t) {
		return i(r, [t, "M696 472c0 4.4-3.6 8-8 8h-56c-4.4 0-8-3.6-8-8v-88H400v88c0 4.4-3.6 8-8 8h-56c-4.4 0-8-3.6-8-8v-88h-96v456h560V384h-96v88z"], [e, "M832 312H696v-16c0-101.6-82.4-184-184-184s-184 82.4-184 184v16H192c-17.7 0-32 14.3-32 32v536c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V344c0-17.7-14.3-32-32-32zm-432-16c0-61.9 50.1-112 112-112s112 50.1 112 112v16H400v-16zm392 544H232V384h96v88c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-88h224v88c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-88h96v456z"])
	})),t.SkinTwoTone = u("skin", a, (function (e, t) {
		return i(r, [t, "M512 318c-79.2 0-148.5-48.8-176.7-120H182v196h119v432h422V394h119V198H688.7c-28.2 71.2-97.5 120-176.7 120z"], [e, "M870 126H663.8c-17.4 0-32.9 11.9-37 29.3C614.3 208.1 567 246 512 246s-102.3-37.9-114.8-90.7a37.93 37.93 0 0 0-37-29.3H154a44 44 0 0 0-44 44v252a44 44 0 0 0 44 44h75v388a44 44 0 0 0 44 44h478a44 44 0 0 0 44-44V466h75a44 44 0 0 0 44-44V170a44 44 0 0 0-44-44zm-28 268H723v432H301V394H182V198h153.3c28.2 71.2 97.5 120 176.7 120s148.5-48.8 176.7-120H842v196z"])
	})),t.SlidersTwoTone = u("sliders", a, (function (e, t) {
		return i(r, [t, "M180 292h80v440h-80zm369 180h-74a3 3 0 0 0-3 3v74a3 3 0 0 0 3 3h74a3 3 0 0 0 3-3v-74a3 3 0 0 0-3-3zm215-108h80v296h-80z"], [e, "M904 296h-66v-96c0-4.4-3.6-8-8-8h-52c-4.4 0-8 3.6-8 8v96h-66c-4.4 0-8 3.6-8 8v416c0 4.4 3.6 8 8 8h66v96c0 4.4 3.6 8 8 8h52c4.4 0 8-3.6 8-8v-96h66c4.4 0 8-3.6 8-8V304c0-4.4-3.6-8-8-8zm-60 364h-80V364h80v296zM612 404h-66V232c0-4.4-3.6-8-8-8h-52c-4.4 0-8 3.6-8 8v172h-66c-4.4 0-8 3.6-8 8v200c0 4.4 3.6 8 8 8h66v172c0 4.4 3.6 8 8 8h52c4.4 0 8-3.6 8-8V620h66c4.4 0 8-3.6 8-8V412c0-4.4-3.6-8-8-8zm-60 145a3 3 0 0 1-3 3h-74a3 3 0 0 1-3-3v-74a3 3 0 0 1 3-3h74a3 3 0 0 1 3 3v74zM320 224h-66v-56c0-4.4-3.6-8-8-8h-52c-4.4 0-8 3.6-8 8v56h-66c-4.4 0-8 3.6-8 8v560c0 4.4 3.6 8 8 8h66v56c0 4.4 3.6 8 8 8h52c4.4 0 8-3.6 8-8v-56h66c4.4 0 8-3.6 8-8V232c0-4.4-3.6-8-8-8zm-60 508h-80V292h80v440z"])
	})),t.SmileTwoTone = u("smile", a, (function (e, t) {
		return i(r, [e, "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"], [t, "M512 140c-205.4 0-372 166.6-372 372s166.6 372 372 372 372-166.6 372-372-166.6-372-372-372zM288 421a48.01 48.01 0 0 1 96 0 48.01 48.01 0 0 1-96 0zm224 272c-85.5 0-155.6-67.3-160-151.6a8 8 0 0 1 8-8.4h48.1c4.2 0 7.8 3.2 8.1 7.4C420 589.9 461.5 629 512 629s92.1-39.1 95.8-88.6c.3-4.2 3.9-7.4 8.1-7.4H664a8 8 0 0 1 8 8.4C667.6 625.7 597.5 693 512 693zm176-224a48.01 48.01 0 0 1 0-96 48.01 48.01 0 0 1 0 96z"], [e, "M288 421a48 48 0 1 0 96 0 48 48 0 1 0-96 0zm376 112h-48.1c-4.2 0-7.8 3.2-8.1 7.4-3.7 49.5-45.3 88.6-95.8 88.6s-92-39.1-95.8-88.6c-.3-4.2-3.9-7.4-8.1-7.4H360a8 8 0 0 0-8 8.4c4.4 84.3 74.5 151.6 160 151.6s155.6-67.3 160-151.6a8 8 0 0 0-8-8.4zm-24-112a48 48 0 1 0 96 0 48 48 0 1 0-96 0z"])
	})),t.SnippetsTwoTone = u("snippets", a, (function (e, t) {
		return i(r, [t, "M450 510V336H232v552h432V550H490c-22.1 0-40-17.9-40-40z"], [e, "M832 112H724V72c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v40H500V72c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v40H320c-17.7 0-32 14.3-32 32v120h-96c-17.7 0-32 14.3-32 32v632c0 17.7 14.3 32 32 32h512c17.7 0 32-14.3 32-32v-96h96c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM664 888H232V336h218v174c0 22.1 17.9 40 40 40h174v338zm0-402H514V336h.2L664 485.8v.2zm128 274h-56V456L544 264H360v-80h68v32c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-32h152v32c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-32h68v576z"])
	})),t.SoundTwoTone = u("sound", a, (function (e, t) {
		return i(r, [t, "M275.4 424H146v176h129.4l18 11.7L586 803V221L293.3 412.3z"], [e, "M892.1 737.8l-110.3-63.7a15.9 15.9 0 0 0-21.7 5.9l-19.9 34.5c-4.4 7.6-1.8 17.4 5.8 21.8L856.3 800a15.9 15.9 0 0 0 21.7-5.9l19.9-34.5c4.4-7.6 1.7-17.4-5.8-21.8zM934 476H806c-8.8 0-16 7.2-16 16v40c0 8.8 7.2 16 16 16h128c8.8 0 16-7.2 16-16v-40c0-8.8-7.2-16-16-16zM760 344a15.9 15.9 0 0 0 21.7 5.9L892 286.2c7.6-4.4 10.2-14.2 5.8-21.8L878 230a15.9 15.9 0 0 0-21.7-5.9L746 287.8a15.99 15.99 0 0 0-5.8 21.8L760 344zM625.9 115c-5.9 0-11.9 1.6-17.4 5.3L254 352H90c-8.8 0-16 7.2-16 16v288c0 8.8 7.2 16 16 16h164l354.5 231.7c5.5 3.6 11.6 5.3 17.4 5.3 16.7 0 32.1-13.3 32.1-32.1V147.1c0-18.8-15.4-32.1-32.1-32.1zM586 803L293.4 611.7l-18-11.7H146V424h129.4l17.9-11.7L586 221v582z"])
	})),t.StarTwoTone = u("star", a, (function (e, t) {
		return i(r, [t, "M512.5 190.4l-94.4 191.3-211.2 30.7 152.8 149-36.1 210.3 188.9-99.3 188.9 99.2-36.1-210.3 152.8-148.9-211.2-30.7z"], [e, "M908.6 352.8l-253.9-36.9L541.2 85.8c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L370.3 315.9l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1L239 839.4a31.95 31.95 0 0 0 46.4 33.7l227.1-119.4 227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3zM665.3 561.3l36.1 210.3-188.9-99.2-188.9 99.3 36.1-210.3-152.8-149 211.2-30.7 94.4-191.3 94.4 191.3 211.2 30.7-152.8 148.9z"])
	})),t.StopTwoTone = u("stop", a, (function (e, t) {
		return i(r, [e, "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm288.5 682.8L277.7 224C258 240 240 258 224 277.7l522.8 522.8C682.8 852.7 601 884 512 884c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372c0 89-31.3 170.8-83.5 234.8z"], [t, "M512 140c-205.4 0-372 166.6-372 372s166.6 372 372 372c89 0 170.8-31.3 234.8-83.5L224 277.7c16-19.7 34-37.7 53.7-53.7l522.8 522.8C852.7 682.8 884 601 884 512c0-205.4-166.6-372-372-372z"])
	})),t.SwitcherTwoTone = u("switcher", a, (function (e, t) {
		return i(r, [t, "M184 840h528V312H184v528zm116-290h296v64H300v-64z"], [e, "M880 112H264c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h576v576c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V144c0-17.7-14.3-32-32-32z"], [e, "M752 240H144c-17.7 0-32 14.3-32 32v608c0 17.7 14.3 32 32 32h608c17.7 0 32-14.3 32-32V272c0-17.7-14.3-32-32-32zm-40 600H184V312h528v528z"], [e, "M300 550h296v64H300z"])
	})),t.TabletTwoTone = u("tablet", a, (function (e, t) {
		return i(r, [e, "M800 64H224c-35.3 0-64 28.7-64 64v768c0 35.3 28.7 64 64 64h576c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64zm-8 824H232V136h560v752z"], [t, "M232 888h560V136H232v752zm280-144c22.1 0 40 17.9 40 40s-17.9 40-40 40-40-17.9-40-40 17.9-40 40-40z"], [e, "M472 784a40 40 0 1 0 80 0 40 40 0 1 0-80 0z"])
	})),t.TagTwoTone = u("tag", a, (function (e, t) {
		return i(r, [t, "M589 164.6L189.3 564.3l270.4 270.4L859.4 435 836 188l-247-23.4zM680 432c-48.5 0-88-39.5-88-88s39.5-88 88-88 88 39.5 88 88-39.5 88-88 88z"], [e, "M680 256c-48.5 0-88 39.5-88 88s39.5 88 88 88 88-39.5 88-88-39.5-88-88-88zm0 120c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z"], [e, "M938 458.8l-29.6-312.6c-1.5-16.2-14.4-29-30.6-30.6L565.2 86h-.4c-3.2 0-5.7 1-7.6 2.9L88.9 557.2a9.96 9.96 0 0 0 0 14.1l363.8 363.8a9.9 9.9 0 0 0 7.1 2.9c2.7 0 5.2-1 7.1-2.9l468.3-468.3c2-2.1 3-5 2.8-8zM459.7 834.7L189.3 564.3 589 164.6 836 188l23.4 247-399.7 399.7z"])
	})),t.TagsTwoTone = u("tags", a, (function (e, t) {
		return i(r, [t, "M477.5 694l311.9-311.8-19-224.6-224.6-19-311.9 311.9L477.5 694zm116-415.5a47.81 47.81 0 0 1 33.9-33.9c16.6-4.4 34.2.3 46.4 12.4a47.93 47.93 0 0 1 12.4 46.4 47.81 47.81 0 0 1-33.9 33.9c-16.6 4.4-34.2-.3-46.4-12.4a48.3 48.3 0 0 1-12.4-46.4z"], [t, "M476.6 792.6c-1.7-.2-3.4-1-4.7-2.3L137.7 456.1a8.03 8.03 0 0 1 0-11.3L515.9 66.6c1.2-1.3 2.9-2.1 4.7-2.3h-.4c-2.3-.2-4.7.6-6.3 2.3L135.7 444.8a8.03 8.03 0 0 0 0 11.3l334.2 334.2c1.8 1.9 4.3 2.6 6.7 2.3z"], [e, "M889.7 539.8l-39.6-39.5a8.03 8.03 0 0 0-11.3 0l-362 361.3-237.6-237a8.03 8.03 0 0 0-11.3 0l-39.6 39.5a8.03 8.03 0 0 0 0 11.3l243.2 242.8 39.6 39.5c3.1 3.1 8.2 3.1 11.3 0l407.3-406.6c3.1-3.1 3.1-8.2 0-11.3zM652.3 337.3a47.81 47.81 0 0 0 33.9-33.9c4.4-16.6-.3-34.2-12.4-46.4a47.93 47.93 0 0 0-46.4-12.4 47.81 47.81 0 0 0-33.9 33.9c-4.4 16.6.3 34.2 12.4 46.4a48.3 48.3 0 0 0 46.4 12.4z"], [e, "M137.7 444.8a8.03 8.03 0 0 0 0 11.3l334.2 334.2c1.3 1.3 2.9 2.1 4.7 2.3 2.4.3 4.8-.5 6.6-2.3L861.4 412c1.7-1.7 2.5-4 2.3-6.3l-25.5-301.4c-.7-7.8-6.8-13.9-14.6-14.6L522.2 64.3h-1.6c-1.8.2-3.4 1-4.7 2.3L137.7 444.8zm408.1-306.2l224.6 19 19 224.6L477.5 694 233.9 450.5l311.9-311.9z"])
	})),t.ToolTwoTone = u("tool", a, (function (e, t) {
		return i(r, [t, "M706.8 488.7a32.05 32.05 0 0 1-45.3 0L537 364.2a32.05 32.05 0 0 1 0-45.3l132.9-132.8a184.2 184.2 0 0 0-144 53.5c-58.1 58.1-69.3 145.3-33.6 214.6L439.5 507c-.1 0-.1-.1-.1-.1L209.3 737l79.2 79.2 274-274.1.1.1 8.8-8.8c69.3 35.7 156.5 24.5 214.6-33.6 39.2-39.1 57.3-92.1 53.6-143.9L706.8 488.7z"], [e, "M876.6 239.5c-.5-.9-1.2-1.8-2-2.5-5-5-13.1-5-18.1 0L684.2 409.3l-67.9-67.9L788.7 169c.8-.8 1.4-1.6 2-2.5 3.6-6.1 1.6-13.9-4.5-17.5-98.2-58-226.8-44.7-311.3 39.7-67 67-89.2 162-66.5 247.4l-293 293c-3 3-2.8 7.9.3 11l169.7 169.7c3.1 3.1 8.1 3.3 11 .3l292.9-292.9c85.5 22.8 180.5.7 247.6-66.4 84.4-84.5 97.7-213.1 39.7-311.3zM786 499.8c-58.1 58.1-145.3 69.3-214.6 33.6l-8.8 8.8-.1-.1-274 274.1-79.2-79.2 230.1-230.1s0 .1.1.1l52.8-52.8c-35.7-69.3-24.5-156.5 33.6-214.6a184.2 184.2 0 0 1 144-53.5L537 318.9a32.05 32.05 0 0 0 0 45.3l124.5 124.5a32.05 32.05 0 0 0 45.3 0l132.8-132.8c3.7 51.8-14.4 104.8-53.6 143.9z"])
	})),t.TrademarkCircleTwoTone = u("trademark-circle", a, (function (e, t) {
		return i(r, [e, "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"], [t, "M512 140c-205.4 0-372 166.6-372 372s166.6 372 372 372 372-166.6 372-372-166.6-372-372-372zm170.7 584.2c-1.1.5-2.3.8-3.5.8h-62c-3.1 0-5.9-1.8-7.2-4.6l-74.6-159.2h-88.7V717c0 4.4-3.6 8-8 8H384c-4.4 0-8-3.6-8-8V307c0-4.4 3.6-8 8-8h155.6c98.8 0 144.2 59.9 144.2 131.1 0 70.2-43.6 106.4-78.4 119.2l80.8 164.2c2.1 3.9.4 8.7-3.5 10.7z"], [t, "M529.9 357h-83.4v148H528c53 0 82.8-25.6 82.8-72.4 0-50.3-32.9-75.6-80.9-75.6z"], [e, "M605.4 549.3c34.8-12.8 78.4-49 78.4-119.2 0-71.2-45.4-131.1-144.2-131.1H384c-4.4 0-8 3.6-8 8v410c0 4.4 3.6 8 8 8h54.7c4.4 0 8-3.6 8-8V561.2h88.7L610 720.4c1.3 2.8 4.1 4.6 7.2 4.6h62c1.2 0 2.4-.3 3.5-.8 3.9-2 5.6-6.8 3.5-10.7l-80.8-164.2zM528 505h-81.5V357h83.4c48 0 80.9 25.3 80.9 75.6 0 46.8-29.8 72.4-82.8 72.4z"])
	})),t.UnlockTwoTone = u("unlock", a, (function (e, t) {
		return i(r, [t, "M232 840h560V536H232v304zm280-226a48.01 48.01 0 0 1 28 87v53c0 4.4-3.6 8-8 8h-40c-4.4 0-8-3.6-8-8v-53a48.01 48.01 0 0 1 28-87z"], [e, "M484 701v53c0 4.4 3.6 8 8 8h40c4.4 0 8-3.6 8-8v-53a48.01 48.01 0 1 0-56 0z"], [e, "M832 464H332V240c0-30.9 25.1-56 56-56h248c30.9 0 56 25.1 56 56v68c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-68c0-70.7-57.3-128-128-128H388c-70.7 0-128 57.3-128 128v224h-68c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V496c0-17.7-14.3-32-32-32zm-40 376H232V536h560v304z"])
	})),t.TrophyTwoTone = u("trophy", a, (function (e, t) {
		return i(r, [t, "M320 480c0 49.1 19.1 95.3 53.9 130.1 34.7 34.8 81 53.9 130.1 53.9h16c49.1 0 95.3-19.1 130.1-53.9 34.8-34.7 53.9-81 53.9-130.1V184H320v296zM184 352c0 41 26.9 75.8 64 87.6-37.1-11.9-64-46.7-64-87.6zm364 382.5C665 721.8 758.4 630.2 773.8 514 758.3 630.2 665 721.7 548 734.5zM250.2 514C265.6 630.2 359 721.8 476 734.5 359 721.7 265.7 630.2 250.2 514z"], [e, "M868 160h-92v-40c0-4.4-3.6-8-8-8H256c-4.4 0-8 3.6-8 8v40h-92a44 44 0 0 0-44 44v148c0 81.7 60 149.6 138.2 162C265.7 630.2 359 721.7 476 734.5v105.2H280c-17.7 0-32 14.3-32 32V904c0 4.4 3.6 8 8 8h512c4.4 0 8-3.6 8-8v-32.3c0-17.7-14.3-32-32-32H548V734.5C665 721.7 758.3 630.2 773.8 514 852 501.6 912 433.7 912 352V204a44 44 0 0 0-44-44zM248 439.6a91.99 91.99 0 0 1-64-87.6V232h64v207.6zM704 480c0 49.1-19.1 95.4-53.9 130.1-34.8 34.8-81 53.9-130.1 53.9h-16c-49.1 0-95.4-19.1-130.1-53.9-34.8-34.8-53.9-81-53.9-130.1V184h384v296zm136-128c0 41-26.9 75.8-64 87.6V232h64v120z"])
	})),t.UpCircleTwoTone = u("up-circle", a, (function (e, t) {
		return i(r, [t, "M512 140c-205.4 0-372 166.6-372 372s166.6 372 372 372 372-166.6 372-372-166.6-372-372-372zm178 479h-46.9c-10.2 0-19.9-4.9-25.9-13.2L512 460.4 406.8 605.8c-6 8.3-15.6 13.2-25.9 13.2H334c-6.5 0-10.3-7.4-6.5-12.7l178-246c3.2-4.4 9.7-4.4 12.9 0l178 246c3.9 5.3.1 12.7-6.4 12.7z"], [e, "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"], [e, "M518.4 360.3a7.95 7.95 0 0 0-12.9 0l-178 246c-3.8 5.3 0 12.7 6.5 12.7h46.9c10.3 0 19.9-4.9 25.9-13.2L512 460.4l105.2 145.4c6 8.3 15.7 13.2 25.9 13.2H690c6.5 0 10.3-7.4 6.4-12.7l-178-246z"])
	})),t.ThunderboltTwoTone = u("thunderbolt", a, (function (e, t) {
		return i(r, [t, "M695.4 164.1H470.8L281.2 491.5h157.4l-60.3 241 319.8-305.1h-211z"], [e, "M848.1 359.3H627.8L825.9 109c4.1-5.3.4-13-6.3-13H436.1c-2.8 0-5.5 1.5-6.9 4L170.1 547.5c-3.1 5.3.7 12 6.9 12h174.4L262 917.1c-1.9 7.8 7.5 13.3 13.3 7.7L853.6 373c5.2-4.9 1.7-13.7-5.5-13.7zM378.3 732.5l60.3-241H281.2l189.6-327.4h224.6L487.1 427.4h211L378.3 732.5z"])
	})),t.UpSquareTwoTone = u("up-square", a, (function (e, t) {
		return i(r, [e, "M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z"], [t, "M184 840h656V184H184v656zm143.5-228.7l178-246c3.2-4.4 9.7-4.4 12.9 0l178 246c3.9 5.3.1 12.7-6.4 12.7h-46.9c-10.2 0-19.9-4.9-25.9-13.2L512 465.4 406.8 610.8c-6 8.3-15.6 13.2-25.9 13.2H334c-6.5 0-10.3-7.4-6.5-12.7z"], [e, "M334 624h46.9c10.3 0 19.9-4.9 25.9-13.2L512 465.4l105.2 145.4c6 8.3 15.7 13.2 25.9 13.2H690c6.5 0 10.3-7.4 6.4-12.7l-178-246a7.95 7.95 0 0 0-12.9 0l-178 246c-3.8 5.3 0 12.7 6.5 12.7z"])
	})),t.UsbTwoTone = u("usb", a, (function (e, t) {
		return i(r, [t, "M759.9 504H264.1c-26.5 0-48.1 19.7-48.1 44v292h592V548c0-24.3-21.6-44-48.1-44z"], [e, "M456 248h-48c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zm160 0h-48c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z"], [e, "M760 432V144c0-17.7-14.3-32-32-32H296c-17.7 0-32 14.3-32 32v288c-66.2 0-120 52.1-120 116v356c0 4.4 3.6 8 8 8h720c4.4 0 8-3.6 8-8V548c0-63.9-53.8-116-120-116zM336 184h352v248H336V184zm472 656H216V548c0-24.3 21.6-44 48.1-44h495.8c26.5 0 48.1 19.7 48.1 44v292z"])
	})),t.VideoCameraTwoTone = u("video-camera", a, (function (e, t) {
		return i(r, [t, "M136 792h576V232H136v560zm64-488c0-4.4 3.6-8 8-8h112c4.4 0 8 3.6 8 8v48c0 4.4-3.6 8-8 8H208c-4.4 0-8-3.6-8-8v-48z"], [e, "M912 302.3L784 376V224c0-35.3-28.7-64-64-64H128c-35.3 0-64 28.7-64 64v576c0 35.3 28.7 64 64 64h592c35.3 0 64-28.7 64-64V648l128 73.7c21.3 12.3 48-3.1 48-27.6V330c0-24.6-26.7-40-48-27.7zM712 792H136V232h576v560zm176-167l-104-59.8V458.9L888 399v226z"], [e, "M208 360h112c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H208c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8z"])
	})),t.WalletTwoTone = u("wallet", a, (function (e, t) {
		return i(r, [e, "M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 464H528V448h312v128zm0-192H496c-17.7 0-32 14.3-32 32v192c0 17.7 14.3 32 32 32h344v200H184V184h656v200z"], [t, "M528 576h312V448H528v128zm92-104c22.1 0 40 17.9 40 40s-17.9 40-40 40-40-17.9-40-40 17.9-40 40-40z"], [e, "M580 512a40 40 0 1 0 80 0 40 40 0 1 0-80 0z"], [t, "M184 840h656V640H496c-17.7 0-32-14.3-32-32V416c0-17.7 14.3-32 32-32h344V184H184v656z"])
	})),t.WarningTwoTone = u("warning", a, (function (e, t) {
		return i(r, [e, "M955.7 856l-416-720c-6.2-10.7-16.9-16-27.7-16s-21.6 5.3-27.7 16l-416 720C56 877.4 71.4 904 96 904h832c24.6 0 40-26.6 27.7-48zm-783.5-27.9L512 239.9l339.8 588.2H172.2z"], [t, "M172.2 828.1h679.6L512 239.9 172.2 828.1zM560 720a48.01 48.01 0 0 1-96 0 48.01 48.01 0 0 1 96 0zm-16-304v184c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V416c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8z"], [e, "M464 720a48 48 0 1 0 96 0 48 48 0 1 0-96 0zm16-304v184c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V416c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8z"])
	})),t.CiTwoTone = u("ci", a, (function (e, t) {
		return i(r, [e, "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"], [t, "M512 140c-205.4 0-372 166.6-372 372s166.6 372 372 372 372-166.6 372-372-166.6-372-372-372zm-63.5 522.8c49.3 0 82.8-29.4 87-72.4.4-4.1 3.8-7.3 8-7.3h52.7c2.4 0 4.4 2 4.4 4.4 0 77.4-64.3 132.5-152.3 132.5C345.4 720 286 651.4 286 537.4v-49C286 373.5 345.4 304 448.3 304c88.3 0 152.3 56.9 152.3 138.1 0 2.4-2 4.4-4.4 4.4h-52.6c-4.2 0-7.6-3.2-8-7.4-3.9-46.1-37.5-77.6-87-77.6-61.1 0-95.6 45.4-95.7 126.8v49.3c0 80.3 34.5 125.2 95.6 125.2zM738 704.1c0 4.4-3.6 8-8 8h-50.4c-4.4 0-8-3.6-8-8V319.9c0-4.4 3.6-8 8-8H730c4.4 0 8 3.6 8 8v384.2z"], [e, "M730 311.9h-50.4c-4.4 0-8 3.6-8 8v384.2c0 4.4 3.6 8 8 8H730c4.4 0 8-3.6 8-8V319.9c0-4.4-3.6-8-8-8zm-281.4 49.6c49.5 0 83.1 31.5 87 77.6.4 4.2 3.8 7.4 8 7.4h52.6c2.4 0 4.4-2 4.4-4.4 0-81.2-64-138.1-152.3-138.1C345.4 304 286 373.5 286 488.4v49c0 114 59.4 182.6 162.3 182.6 88 0 152.3-55.1 152.3-132.5 0-2.4-2-4.4-4.4-4.4h-52.7c-4.2 0-7.6 3.2-8 7.3-4.2 43-37.7 72.4-87 72.4-61.1 0-95.6-44.9-95.6-125.2v-49.3c.1-81.4 34.6-126.8 95.7-126.8z"])
	})),t.CopyrightTwoTone = u("copyright", a, (function (e, t) {
		return i(r, [e, "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"], [t, "M512 140c-205.4 0-372 166.6-372 372s166.6 372 372 372 372-166.6 372-372-166.6-372-372-372zm5.5 533c52.9 0 88.8-31.7 93-77.8.4-4.1 3.8-7.3 8-7.3h56.8c2.6 0 4.7 2.1 4.7 4.7 0 82.6-68.7 141.4-162.7 141.4C407.4 734 344 660.8 344 539.1v-52.3C344 364.2 407.4 290 517.3 290c94.3 0 162.7 60.7 162.7 147.4 0 2.6-2.1 4.7-4.7 4.7h-56.7c-4.2 0-7.7-3.2-8-7.4-4-49.6-40-83.4-93-83.4-65.2 0-102.1 48.5-102.2 135.5v52.6c0 85.7 36.8 133.6 102.1 133.6z"], [e, "M517.6 351.3c53 0 89 33.8 93 83.4.3 4.2 3.8 7.4 8 7.4h56.7c2.6 0 4.7-2.1 4.7-4.7 0-86.7-68.4-147.4-162.7-147.4C407.4 290 344 364.2 344 486.8v52.3C344 660.8 407.4 734 517.3 734c94 0 162.7-58.8 162.7-141.4 0-2.6-2.1-4.7-4.7-4.7h-56.8c-4.2 0-7.6 3.2-8 7.3-4.2 46.1-40.1 77.8-93 77.8-65.3 0-102.1-47.9-102.1-133.6v-52.6c.1-87 37-135.5 102.2-135.5z"])
	})),t.DollarTwoTone = u("dollar", a, (function (e, t) {
		return i(r, [e, "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"], [t, "M426.6 410.3c0 25.4 15.7 45.1 49.5 57.3 4.7 1.9 9.4 3.4 15 5v-124c-37 4.7-64.5 25.4-64.5 61.7zm116.5 135.2c-2.9-.6-5.7-1.3-8.8-2.2V677c42.6-3.8 72-27.3 72-66.4 0-30.7-15.9-50.7-63.2-65.1z"], [t, "M512 140c-205.4 0-372 166.6-372 372s166.6 372 372 372 372-166.6 372-372-166.6-372-372-372zm22.4 589.2l.2 31.7c0 4.5-3.6 8.1-8 8.1h-28.4c-4.4 0-8-3.6-8-8v-31.4c-89-6.5-130.7-57.1-135.2-112.1-.4-4.7 3.3-8.7 8-8.7h46.2c3.9 0 7.3 2.8 7.9 6.6 5.1 31.8 29.9 55.4 74.1 61.3V534l-24.7-6.3c-52.3-12.5-102.1-45.1-102.1-112.7 0-73 55.4-112.1 126.2-119v-33c0-4.4 3.6-8 8-8h28.1c4.4 0 8 3.6 8 8v32.7c68.5 6.9 119.8 46.9 125.9 109.2a8.1 8.1 0 0 1-8 8.8h-44.9c-4 0-7.4-2.9-7.9-6.9-4-29.2-27.5-53-65.5-58.2v134.3l25.4 5.9c64.8 16 108.9 47 109 116.4 0 75.2-56 117.1-134.3 124z"], [e, "M559.7 488.8l-25.4-5.9V348.6c38 5.2 61.5 29 65.5 58.2.5 4 3.9 6.9 7.9 6.9h44.9c4.7 0 8.4-4.1 8-8.8-6.1-62.3-57.4-102.3-125.9-109.2V263c0-4.4-3.6-8-8-8h-28.1c-4.4 0-8 3.6-8 8v33c-70.8 6.9-126.2 46-126.2 119 0 67.6 49.8 100.2 102.1 112.7l24.7 6.3v142.7c-44.2-5.9-69-29.5-74.1-61.3-.6-3.8-4-6.6-7.9-6.6H363c-4.7 0-8.4 4-8 8.7 4.5 55 46.2 105.6 135.2 112.1V761c0 4.4 3.6 8 8 8h28.4c4.4 0 8-3.6 8-8.1l-.2-31.7c78.3-6.9 134.3-48.8 134.3-124-.1-69.4-44.2-100.4-109-116.4zm-68.6-16.2c-5.6-1.6-10.3-3.1-15-5-33.8-12.2-49.5-31.9-49.5-57.3 0-36.3 27.5-57 64.5-61.7v124zM534.3 677V543.3c3.1.9 5.9 1.6 8.8 2.2 47.3 14.4 63.2 34.4 63.2 65.1 0 39.1-29.4 62.6-72 66.4z"])
	})),t.EuroTwoTone = u("euro", a, (function (e, t) {
		return i(r, [e, "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"], [t, "M512 140c-205.4 0-372 166.6-372 372s166.6 372 372 372 372-166.6 372-372-166.6-372-372-372zm117.1 581.1c0 3.8-2.7 7-6.4 7.8-15.9 3.4-34.4 5.1-55.3 5.1-109.8 0-183-58.8-200.2-158H337c-4.4 0-8-3.6-8-8v-27.2c0-4.4 3.6-8 8-8h26.1v-36.9c0-4.4 0-8.7.3-12.8H337c-4.4 0-8-3.6-8-8v-27.2c0-4.4 3.6-8 8-8h31.8C388.5 345.7 460.7 290 567.4 290c20.9 0 39.4 1.9 55.3 5.4 3.7.8 6.3 4 6.3 7.8V346a8 8 0 0 1-9.6 7.8c-14.6-2.9-31.8-4.4-51.7-4.4-65.3 0-110.4 33.5-127.6 90.4h128.3c4.4 0 8 3.6 8 8V475c0 4.4-3.6 8-8 8H432.5c-.3 4.4-.3 9.1-.3 13.8v36h136.4c4.4 0 8 3.6 8 8V568c0 4.4-3.6 8-8 8H438c15.3 62 61.3 98.6 129.8 98.6 19.9 0 37.1-1.3 51.8-4.1 4.9-1 9.5 2.8 9.5 7.8v42.8z"], [e, "M619.6 670.5c-14.7 2.8-31.9 4.1-51.8 4.1-68.5 0-114.5-36.6-129.8-98.6h130.6c4.4 0 8-3.6 8-8v-27.2c0-4.4-3.6-8-8-8H432.2v-36c0-4.7 0-9.4.3-13.8h135.9c4.4 0 8-3.6 8-8v-27.2c0-4.4-3.6-8-8-8H440.1c17.2-56.9 62.3-90.4 127.6-90.4 19.9 0 37.1 1.5 51.7 4.4a8 8 0 0 0 9.6-7.8v-42.8c0-3.8-2.6-7-6.3-7.8-15.9-3.5-34.4-5.4-55.3-5.4-106.7 0-178.9 55.7-198.6 149.9H337c-4.4 0-8 3.6-8 8v27.2c0 4.4 3.6 8 8 8h26.4c-.3 4.1-.3 8.4-.3 12.8v36.9H337c-4.4 0-8 3.6-8 8V568c0 4.4 3.6 8 8 8h30.2c17.2 99.2 90.4 158 200.2 158 20.9 0 39.4-1.7 55.3-5.1 3.7-.8 6.4-4 6.4-7.8v-42.8c0-5-4.6-8.8-9.5-7.8z"])
	})),t.GoldTwoTone = u("gold", a, (function (e, t) {
		return i(r, [e, "M435.7 558.7c-.6-3.9-4-6.7-7.9-6.7H166.2c-3.9 0-7.3 2.8-7.9 6.7l-40.2 248c-.1.4-.1.9-.1 1.3 0 4.4 3.6 8 8 8h342c.4 0 .9 0 1.3-.1 4.4-.7 7.3-4.8 6.6-9.2l-40.2-248zM196.5 748l20.7-128h159.5l20.7 128H196.5zm709.4 58.7l-40.2-248c-.6-3.9-4-6.7-7.9-6.7H596.2c-3.9 0-7.3 2.8-7.9 6.7l-40.2 248c-.1.4-.1.9-.1 1.3 0 4.4 3.6 8 8 8h342c.4 0 .9 0 1.3-.1 4.3-.7 7.3-4.8 6.6-9.2zM626.5 748l20.7-128h159.5l20.7 128H626.5zM342 472h342c.4 0 .9 0 1.3-.1 4.4-.7 7.3-4.8 6.6-9.2l-40.2-248c-.6-3.9-4-6.7-7.9-6.7H382.2c-3.9 0-7.3 2.8-7.9 6.7l-40.2 248c-.1.4-.1.9-.1 1.3 0 4.4 3.6 8 8 8zm91.2-196h159.5l20.7 128h-201l20.8-128z"], [t, "M592.7 276H433.2l-20.8 128h201zM217.2 620l-20.7 128h200.9l-20.7-128zm430 0l-20.7 128h200.9l-20.7-128z"])
	})),t.CanlendarTwoTone = u("canlendar", a, (function (e, t) {
		return i(r, [t, "M712 304c0 4.4-3.6 8-8 8h-56c-4.4 0-8-3.6-8-8v-48H384v48c0 4.4-3.6 8-8 8h-56c-4.4 0-8-3.6-8-8v-48H184v136h656V256H712v48z"], [e, "M880 184H712v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H384v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H144c-17.7 0-32 14.3-32 32v664c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V216c0-17.7-14.3-32-32-32zm-40 656H184V460h656v380zm0-448H184V256h128v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h256v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h128v136z"])
	}))
}, function (e, t, c) {
	"use strict";
	c.d(t, "b", (function () {
		return i
	}));
	var n = c(42), r = c.n(n), l = c(8), o = c(84), a = c.n(o), i = 0 !== l.a.endEvents.length,
		u = ["Webkit", "Moz", "O", "ms"], s = ["-webkit-", "-moz-", "-o-", "ms-", ""];

	function h(e, t) {
		for (var c = window.getComputedStyle(e, null), n = "", r = 0; r < s.length && !(n = c.getPropertyValue(s[r] + t)); r++) ;
		return n
	}

	function f(e) {
		if (i) {
			var t = parseFloat(h(e, "transition-delay")) || 0, c = parseFloat(h(e, "transition-duration")) || 0,
				n = parseFloat(h(e, "animation-delay")) || 0, r = parseFloat(h(e, "animation-duration")) || 0,
				l = Math.max(c + t, r + n);
			e.rcEndAnimTimeout = setTimeout((function () {
				e.rcEndAnimTimeout = null, e.rcEndListener && e.rcEndListener()
			}), 1e3 * l + 200)
		}
	}

	function v(e) {
		e.rcEndAnimTimeout && (clearTimeout(e.rcEndAnimTimeout), e.rcEndAnimTimeout = null)
	}

	var p = function (e, t, c) {
		var n = "object" === ("undefined" === typeof t ? "undefined" : r()(t)), o = n ? t.name : t,
			i = n ? t.active : t + "-active", u = c, s = void 0, h = void 0, p = a()(e);
		return c && "[object Object]" === Object.prototype.toString.call(c) && (u = c.end, s = c.start, h = c.active), e.rcEndListener && e.rcEndListener(), e.rcEndListener = function (t) {
			t && t.target !== e || (e.rcAnimTimeout && (clearTimeout(e.rcAnimTimeout), e.rcAnimTimeout = null), v(e), p.remove(o), p.remove(i), l.a.removeEndEventListener(e, e.rcEndListener), e.rcEndListener = null, u && u())
		}, l.a.addEndEventListener(e, e.rcEndListener), s && s(), p.add(o), e.rcAnimTimeout = setTimeout((function () {
			e.rcAnimTimeout = null, p.add(i), h && setTimeout(h, 0), f(e)
		}), 30), {
			stop: function () {
				e.rcEndListener && e.rcEndListener()
			}
		}
	};
	p.style = function (e, t, c) {
		e.rcEndListener && e.rcEndListener(), e.rcEndListener = function (t) {
			t && t.target !== e || (e.rcAnimTimeout && (clearTimeout(e.rcAnimTimeout), e.rcAnimTimeout = null), v(e), l.a.removeEndEventListener(e, e.rcEndListener), e.rcEndListener = null, c && c())
		}, l.a.addEndEventListener(e, e.rcEndListener), e.rcAnimTimeout = setTimeout((function () {
			for (var c in t) t.hasOwnProperty(c) && (e.style[c] = t[c]);
			e.rcAnimTimeout = null, f(e)
		}), 0)
	}, p.setTransition = function (e, t, c) {
		var n = t, r = c;
		void 0 === c && (r = n, n = ""), n = n || "", u.forEach((function (t) {
			e.style[t + "Transition" + n] = r
		}))
	}, p.isCssAnimationSupported = i, t.a = p
}, function (e, t, c) {
	"use strict";
	var n, r = c(0), l = c(1), o = c(2), a = c.n(o), i = c(9), u = c(4), s = c(3), h = c(147), f = c(16), v = c(8),
		p = c(10);

	function d(e) {
		return (d = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function (e) {
			return typeof e
		} : function (e) {
			return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
		})(e)
	}

	function m(e, t) {
		for (var c = 0; c < t.length; c++) {
			var n = t[c];
			n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
		}
	}

	function z(e) {
		return (z = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
			return e.__proto__ || Object.getPrototypeOf(e)
		})(e)
	}

	function y(e) {
		if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return e
	}

	function b(e, t) {
		return (b = Object.setPrototypeOf || function (e, t) {
			return e.__proto__ = t, e
		})(e, t)
	}

	function M(e) {
		return !e || null === e.offsetParent
	}

	var g = function (e) {
		function t() {
			var e;
			return function (e, t) {
				if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
			}(this, t), (e = function (e, t) {
				return !t || "object" !== d(t) && "function" !== typeof t ? y(e) : t
			}(this, z(t).apply(this, arguments))).animationStart = !1, e.destroy = !1, e.onClick = function (t, c) {
				if (!(!t || M(t) || t.className.indexOf("-leave") >= 0)) {
					var r = e.props.insertExtraNode;
					e.extraNode = document.createElement("div");
					var l = y(e).extraNode;
					l.className = "ant-click-animating-node";
					var o = e.getAttributeName();
					t.setAttribute(o, "true"), n = n || document.createElement("style"), c && "#ffffff" !== c && "rgb(255, 255, 255)" !== c && function (e) {
						var t = (e || "").match(/rgba?\((\d*), (\d*), (\d*)(, [\.\d]*)?\)/);
						return !(t && t[1] && t[2] && t[3]) || !(t[1] === t[2] && t[2] === t[3])
					}(c) && !/rgba\(\d*, \d*, \d*, 0\)/.test(c) && "transparent" !== c && (e.csp && e.csp.nonce && (n.nonce = e.csp.nonce), l.style.borderColor = c, n.innerHTML = "\n      [ant-click-animating-without-extra-node='true']::after, .ant-click-animating-node {\n        --antd-wave-shadow-color: ".concat(c, ";\n      }"), document.body.contains(n) || document.body.appendChild(n)), r && t.appendChild(l), v.a.addStartEventListener(t, e.onTransitionStart), v.a.addEndEventListener(t, e.onTransitionEnd)
				}
			}, e.onTransitionStart = function (t) {
				if (!e.destroy) {
					var c = Object(f.findDOMNode)(y(e));
					t && t.target === c && (e.animationStart || e.resetEffect(c))
				}
			}, e.onTransitionEnd = function (t) {
				t && "fadeEffect" === t.animationName && e.resetEffect(t.target)
			}, e.bindAnimationEvent = function (t) {
				if (t && t.getAttribute && !t.getAttribute("disabled") && !(t.className.indexOf("disabled") >= 0)) {
					var c = function (c) {
						if ("INPUT" !== c.target.tagName && !M(c.target)) {
							e.resetEffect(t);
							var n = getComputedStyle(t).getPropertyValue("border-top-color") || getComputedStyle(t).getPropertyValue("border-color") || getComputedStyle(t).getPropertyValue("background-color");
							e.clickWaveTimeoutId = window.setTimeout((function () {
								return e.onClick(t, n)
							}), 0), p.a.cancel(e.animationStartId), e.animationStart = !0, e.animationStartId = Object(p.a)((function () {
								e.animationStart = !1
							}), 10)
						}
					};
					return t.addEventListener("click", c, !0), {
						cancel: function () {
							t.removeEventListener("click", c, !0)
						}
					}
				}
			}, e.renderWave = function (t) {
				var c = t.csp, n = e.props.children;
				return e.csp = c, n
			}, e
		}

		var c, l, o;
		return function (e, t) {
			if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
			e.prototype = Object.create(t && t.prototype, {
				constructor: {
					value: e,
					writable: !0,
					configurable: !0
				}
			}), t && b(e, t)
		}(t, e), c = t, (l = [{
			key: "componentDidMount", value: function () {
				var e = Object(f.findDOMNode)(this);
				e && 1 === e.nodeType && (this.instance = this.bindAnimationEvent(e))
			}
		}, {
			key: "componentWillUnmount", value: function () {
				this.instance && this.instance.cancel(), this.clickWaveTimeoutId && clearTimeout(this.clickWaveTimeoutId), this.destroy = !0
			}
		}, {
			key: "getAttributeName", value: function () {
				return this.props.insertExtraNode ? "ant-click-animating" : "ant-click-animating-without-extra-node"
			}
		}, {
			key: "resetEffect", value: function (e) {
				if (e && e !== this.extraNode && e instanceof Element) {
					var t = this.props.insertExtraNode, c = this.getAttributeName();
					e.setAttribute(c, "false"), n && (n.innerHTML = ""), t && this.extraNode && e.contains(this.extraNode) && e.removeChild(this.extraNode), v.a.removeStartEventListener(e, this.onTransitionStart), v.a.removeEndEventListener(e, this.onTransitionEnd)
				}
			}
		}, {
			key: "render", value: function () {
				return r.createElement(h.a, null, this.renderWave)
			}
		}]) && m(c.prototype, l), o && m(c, o), t
	}(r.Component), H = c(11);

	function V() {
		return (V = Object.assign || function (e) {
			for (var t = 1; t < arguments.length; t++) {
				var c = arguments[t];
				for (var n in c) Object.prototype.hasOwnProperty.call(c, n) && (e[n] = c[n])
			}
			return e
		}).apply(this, arguments)
	}

	function w(e, t, c) {
		return t in e ? Object.defineProperty(e, t, {
			value: c,
			enumerable: !0,
			configurable: !0,
			writable: !0
		}) : e[t] = c, e
	}

	function C(e, t) {
		for (var c = 0; c < t.length; c++) {
			var n = t[c];
			n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
		}
	}

	function L(e, t) {
		return !t || "object" !== O(t) && "function" !== typeof t ? function (e) {
			if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return e
		}(e) : t
	}

	function S(e) {
		return (S = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
			return e.__proto__ || Object.getPrototypeOf(e)
		})(e)
	}

	function k(e, t) {
		return (k = Object.setPrototypeOf || function (e, t) {
			return e.__proto__ = t, e
		})(e, t)
	}

	function O(e) {
		return (O = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function (e) {
			return typeof e
		} : function (e) {
			return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
		})(e)
	}

	var T = function (e, t) {
		var c = {};
		for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (c[n] = e[n]);
		if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
			var r = 0;
			for (n = Object.getOwnPropertySymbols(e); r < n.length; r++) t.indexOf(n[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[r]) && (c[n[r]] = e[n[r]])
		}
		return c
	}, E = /^[\u4e00-\u9fa5]{2}$/, x = E.test.bind(E);

	function _(e, t) {
		var c = !1, n = [];
		return r.Children.forEach(e, (function (e) {
			var t = O(e), r = "string" === t || "number" === t;
			if (c && r) {
				var l = n.length - 1, o = n[l];
				n[l] = "".concat(o).concat(e)
			} else n.push(e);
			c = r
		})), r.Children.map(n, (function (e) {
			return function (e, t) {
				if (null != e) {
					var c = t ? " " : "";
					return "string" !== typeof e && "number" !== typeof e && "string" === typeof e.type && x(e.props.children) ? r.cloneElement(e, {}, e.props.children.split("").join(c)) : "string" === typeof e ? (x(e) && (e = e.split("").join(c)), r.createElement("span", null, e)) : e
				}
			}(e, t)
		}))
	}

	Object(H.a)("default", "primary", "ghost", "dashed", "danger", "link");
	var P = Object(H.a)("circle", "circle-outline", "round"), A = Object(H.a)("large", "default", "small"),
		F = Object(H.a)("submit", "button", "reset"), N = function (e) {
			function t(e) {
				var c;
				return function (e, t) {
					if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
				}(this, t), (c = L(this, S(t).call(this, e))).saveButtonRef = function (e) {
					c.buttonNode = e
				}, c.handleClick = function (e) {
					var t = c.state.loading, n = c.props.onClick;
					t || n && n(e)
				}, c.renderButton = function (e) {
					var t, n = e.getPrefixCls, l = e.autoInsertSpaceInButton, o = c.props, i = o.prefixCls, h = o.type,
						f = o.shape, v = o.size, p = o.className, d = o.children, m = o.icon, z = o.ghost, y = o.block,
						b = T(o, ["prefixCls", "type", "shape", "size", "className", "children", "icon", "ghost", "block"]),
						M = c.state, H = M.loading, C = M.hasTwoCNChar, L = n("btn", i), S = !1 !== l, k = "";
					switch (v) {
						case"large":
							k = "lg";
							break;
						case"small":
							k = "sm"
					}
					var O = H ? "loading" : m,
						E = a()(L, p, (w(t = {}, "".concat(L, "-").concat(h), h), w(t, "".concat(L, "-").concat(f), f), w(t, "".concat(L, "-").concat(k), k), w(t, "".concat(L, "-icon-only"), !d && 0 !== d && O), w(t, "".concat(L, "-loading"), !!H), w(t, "".concat(L, "-background-ghost"), z), w(t, "".concat(L, "-two-chinese-chars"), C && S), w(t, "".concat(L, "-block"), y), t)),
						x = O ? r.createElement(s.a, {type: O}) : null,
						P = d || 0 === d ? _(d, c.isNeedInserted() && S) : null,
						A = Object(u.a)(b, ["htmlType", "loading"]);
					if (void 0 !== A.href) return r.createElement("a", V({}, A, {
						className: E,
						onClick: c.handleClick,
						ref: c.saveButtonRef
					}), x, P);
					var F = b, N = F.htmlType, j = T(F, ["htmlType"]),
						R = r.createElement("button", V({}, Object(u.a)(j, ["loading"]), {
							type: N,
							className: E,
							onClick: c.handleClick,
							ref: c.saveButtonRef
						}), x, P);
					return "link" === h ? R : r.createElement(g, null, R)
				}, c.state = {loading: e.loading, hasTwoCNChar: !1}, c
			}

			var c, n, l;
			return function (e, t) {
				if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
				e.prototype = Object.create(t && t.prototype, {
					constructor: {
						value: e,
						writable: !0,
						configurable: !0
					}
				}), t && k(e, t)
			}(t, e), c = t, (n = [{
				key: "componentDidMount", value: function () {
					this.fixTwoCNChar()
				}
			}, {
				key: "componentDidUpdate", value: function (e) {
					var t = this;
					this.fixTwoCNChar(), e.loading && "boolean" !== typeof e.loading && clearTimeout(this.delayTimeout);
					var c = this.props.loading;
					c && "boolean" !== typeof c && c.delay ? this.delayTimeout = window.setTimeout((function () {
						t.setState({loading: c})
					}), c.delay) : e.loading !== c && this.setState({loading: c})
				}
			}, {
				key: "componentWillUnmount", value: function () {
					this.delayTimeout && clearTimeout(this.delayTimeout)
				}
			}, {
				key: "fixTwoCNChar", value: function () {
					if (this.buttonNode) {
						var e = this.buttonNode.textContent || this.buttonNode.innerText;
						this.isNeedInserted() && x(e) ? this.state.hasTwoCNChar || this.setState({hasTwoCNChar: !0}) : this.state.hasTwoCNChar && this.setState({hasTwoCNChar: !1})
					}
				}
			}, {
				key: "isNeedInserted", value: function () {
					var e = this.props, t = e.icon, c = e.children, n = e.type;
					return 1 === r.Children.count(c) && !t && "link" !== n
				}
			}, {
				key: "render", value: function () {
					return r.createElement(h.a, null, this.renderButton)
				}
			}]) && C(c.prototype, n), l && C(c, l), t
		}(r.Component);
	N.__ANT_BUTTON = !0, N.defaultProps = {
		loading: !1,
		ghost: !1,
		block: !1,
		htmlType: "button"
	}, N.propTypes = {
		type: l.string,
		shape: l.oneOf(P),
		size: l.oneOf(A),
		htmlType: l.oneOf(F),
		onClick: l.func,
		loading: l.oneOfType([l.bool, l.object]),
		className: l.string,
		icon: l.string,
		block: l.bool,
		title: l.string
	}, Object(i.a)(N);
	var j = N;

	function R() {
		return (R = Object.assign || function (e) {
			for (var t = 1; t < arguments.length; t++) {
				var c = arguments[t];
				for (var n in c) Object.prototype.hasOwnProperty.call(c, n) && (e[n] = c[n])
			}
			return e
		}).apply(this, arguments)
	}

	var D = function (e, t) {
		var c = {};
		for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (c[n] = e[n]);
		if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
			var r = 0;
			for (n = Object.getOwnPropertySymbols(e); r < n.length; r++) t.indexOf(n[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[r]) && (c[n[r]] = e[n[r]])
		}
		return c
	}, I = function (e) {
		return r.createElement(h.a, null, (function (t) {
			var c = t.getPrefixCls, n = e.prefixCls, l = e.size, o = e.className,
				i = D(e, ["prefixCls", "size", "className"]), u = c("btn-group", n), s = "";
			switch (l) {
				case"large":
					s = "lg";
					break;
				case"small":
					s = "sm"
			}
			var h, f, v,
				p = a()(u, (h = {}, f = "".concat(u, "-").concat(s), v = s, f in h ? Object.defineProperty(h, f, {
					value: v,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : h[f] = v, h), o);
			return r.createElement("div", R({}, i, {className: p}))
		}))
	};
	j.Group = I;
	t.a = j
}, , function (e, t, c) {
	"use strict";
	var n = Object.getOwnPropertySymbols, r = Object.prototype.hasOwnProperty,
		l = Object.prototype.propertyIsEnumerable;

	function o(e) {
		if (null === e || void 0 === e) throw new TypeError("Object.assign cannot be called with null or undefined");
		return Object(e)
	}

	e.exports = function () {
		try {
			if (!Object.assign) return !1;
			var e = new String("abc");
			if (e[5] = "de", "5" === Object.getOwnPropertyNames(e)[0]) return !1;
			for (var t = {}, c = 0; c < 10; c++) t["_" + String.fromCharCode(c)] = c;
			if ("0123456789" !== Object.getOwnPropertyNames(t).map((function (e) {
					return t[e]
				})).join("")) return !1;
			var n = {};
			return "abcdefghijklmnopqrst".split("").forEach((function (e) {
				n[e] = e
			})), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, n)).join("")
		} catch (r) {
			return !1
		}
	}() ? Object.assign : function (e, t) {
		for (var c, a, i = o(e), u = 1; u < arguments.length; u++) {
			for (var s in c = Object(arguments[u])) r.call(c, s) && (i[s] = c[s]);
			if (n) {
				a = n(c);
				for (var h = 0; h < a.length; h++) l.call(c, a[h]) && (i[a[h]] = c[a[h]])
			}
		}
		return i
	}
}, function (e, t, c) {
	var n = c(99);
	e.exports = function (e, t, c) {
		if (n(e), void 0 === t) return e;
		switch (c) {
			case 1:
				return function (c) {
					return e.call(t, c)
				};
			case 2:
				return function (c, n) {
					return e.call(t, c, n)
				};
			case 3:
				return function (c, n, r) {
					return e.call(t, c, n, r)
				}
		}
		return function () {
			return e.apply(t, arguments)
		}
	}
}, function (e, t, c) {
	e.exports = !c(15) && !c(36)((function () {
		return 7 != Object.defineProperty(c(69)("div"), "a", {
			get: function () {
				return 7
			}
		}).a
	}))
}, function (e, t, c) {
	var n = c(29), r = c(13).document, l = n(r) && n(r.createElement);
	e.exports = function (e) {
		return l ? r.createElement(e) : {}
	}
}, function (e, t, c) {
	var n = c(26), r = c(30), l = c(101)(!1), o = c(50)("IE_PROTO");
	e.exports = function (e, t) {
		var c, a = r(e), i = 0, u = [];
		for (c in a) c != o && n(a, c) && u.push(c);
		for (; t.length > i;) n(a, c = t[i++]) && (~l(u, c) || u.push(c));
		return u
	}
}, function (e, t, c) {
	var n = c(72);
	e.exports = Object("z").propertyIsEnumerable(0) ? Object : function (e) {
		return "String" == n(e) ? e.split("") : Object(e)
	}
}, function (e, t) {
	var c = {}.toString;
	e.exports = function (e) {
		return c.call(e).slice(8, -1)
	}
}, function (e, t, c) {
	e.exports = {default: c(104), __esModule: !0}
}, function (e, t, c) {
	"use strict";
	var n = c(39), r = c(27), l = c(75), o = c(28), a = c(55), i = c(110), u = c(57), s = c(113), h = c(31)("iterator"),
		f = !([].keys && "next" in [].keys()), v = function () {
			return this
		};
	e.exports = function (e, t, c, p, d, m, z) {
		i(c, t, p);
		var y, b, M, g = function (e) {
				if (!f && e in C) return C[e];
				switch (e) {
					case"keys":
					case"values":
						return function () {
							return new c(this, e)
						}
				}
				return function () {
					return new c(this, e)
				}
			}, H = t + " Iterator", V = "values" == d, w = !1, C = e.prototype, L = C[h] || C["@@iterator"] || d && C[d],
			S = L || g(d), k = d ? V ? g("entries") : S : void 0, O = "Array" == t && C.entries || L;
		if (O && (M = s(O.call(new e))) !== Object.prototype && M.next && (u(M, H, !0), n || "function" == typeof M[h] || o(M, h, v)), V && L && "values" !== L.name && (w = !0, S = function () {
				return L.call(this)
			}), n && !z || !f && !w && C[h] || o(C, h, S), a[t] = S, a[H] = v, d) if (y = {
				values: V ? S : g("values"),
				keys: m ? S : g("keys"),
				entries: k
			}, z) for (b in y) b in C || l(C, b, y[b]); else r(r.P + r.F * (f || w), t, y);
		return y
	}
}, function (e, t, c) {
	e.exports = c(28)
}, function (e, t, c) {
	var n = c(70), r = c(52).concat("length", "prototype");
	t.f = Object.getOwnPropertyNames || function (e) {
		return n(e, r)
	}
}, function (e, t, c) {
	var n = c(41), r = c(37), l = c(30), o = c(47), a = c(26), i = c(68), u = Object.getOwnPropertyDescriptor;
	t.f = c(15) ? u : function (e, t) {
		if (e = l(e), t = o(t, !0), i) try {
			return u(e, t)
		} catch (c) {
		}
		if (a(e, t)) return r(!n.f.call(e, t), e[t])
	}
}, function (e, t) {
	var c, n, r = e.exports = {};

	function l() {
		throw new Error("setTimeout has not been defined")
	}

	function o() {
		throw new Error("clearTimeout has not been defined")
	}

	function a(e) {
		if (c === setTimeout) return setTimeout(e, 0);
		if ((c === l || !c) && setTimeout) return c = setTimeout, setTimeout(e, 0);
		try {
			return c(e, 0)
		} catch (t) {
			try {
				return c.call(null, e, 0)
			} catch (t) {
				return c.call(this, e, 0)
			}
		}
	}

	!function () {
		try {
			c = "function" === typeof setTimeout ? setTimeout : l
		} catch (e) {
			c = l
		}
		try {
			n = "function" === typeof clearTimeout ? clearTimeout : o
		} catch (e) {
			n = o
		}
	}();
	var i, u = [], s = !1, h = -1;

	function f() {
		s && i && (s = !1, i.length ? u = i.concat(u) : h = -1, u.length && v())
	}

	function v() {
		if (!s) {
			var e = a(f);
			s = !0;
			for (var t = u.length; t;) {
				for (i = u, u = []; ++h < t;) i && i[h].run();
				h = -1, t = u.length
			}
			i = null, s = !1, function (e) {
				if (n === clearTimeout) return clearTimeout(e);
				if ((n === o || !n) && clearTimeout) return n = clearTimeout, clearTimeout(e);
				try {
					n(e)
				} catch (t) {
					try {
						return n.call(null, e)
					} catch (t) {
						return n.call(this, e)
					}
				}
			}(e)
		}
	}

	function p(e, t) {
		this.fun = e, this.array = t
	}

	function d() {
	}

	r.nextTick = function (e) {
		var t = new Array(arguments.length - 1);
		if (arguments.length > 1) for (var c = 1; c < arguments.length; c++) t[c - 1] = arguments[c];
		u.push(new p(e, t)), 1 !== u.length || s || a(v)
	}, p.prototype.run = function () {
		this.fun.apply(null, this.array)
	}, r.title = "browser", r.browser = !0, r.env = {}, r.argv = [], r.version = "", r.versions = {}, r.on = d, r.addListener = d, r.once = d, r.off = d, r.removeListener = d, r.removeAllListeners = d, r.emit = d, r.prependListener = d, r.prependOnceListener = d, r.listeners = function (e) {
		return []
	}, r.binding = function (e) {
		throw new Error("process.binding is not supported")
	}, r.cwd = function () {
		return "/"
	}, r.chdir = function (e) {
		throw new Error("process.chdir is not supported")
	}, r.umask = function () {
		return 0
	}
}, function (e, t) {
	e.exports = function (e, t) {
		if (e.indexOf) return e.indexOf(t);
		for (var c = 0; c < e.length; ++c) if (e[c] === t) return c;
		return -1
	}
}, function (e, t, c) {
	"use strict";
	t.__esModule = !0, t.default = function (e, t) {
		var c = {};
		for (var n in e) t.indexOf(n) >= 0 || Object.prototype.hasOwnProperty.call(e, n) && (c[n] = e[n]);
		return c
	}
}, function (e, t, c) {
	"use strict";
	var n = this && this.__importDefault || function (e) {
		return e && e.__esModule ? e : {default: e}
	};
	Object.defineProperty(t, "__esModule", {value: !0});
	var r = n(c(135));
	t.generate = r.default;
	var l = {
		red: "#F5222D",
		volcano: "#FA541C",
		orange: "#FA8C16",
		gold: "#FAAD14",
		yellow: "#FADB14",
		lime: "#A0D911",
		green: "#52C41A",
		cyan: "#13C2C2",
		blue: "#1890FF",
		geekblue: "#2F54EB",
		purple: "#722ED1",
		magenta: "#EB2F96",
		grey: "#666666"
	};
	t.presetPrimaryColors = l;
	var o = {};
	t.presetPalettes = o, Object.keys(l).forEach((function (e) {
		o[e] = r.default(l[e]), o[e].primary = o[e][5]
	}));
	var a = o.red;
	t.red = a;
	var i = o.volcano;
	t.volcano = i;
	var u = o.gold;
	t.gold = u;
	var s = o.orange;
	t.orange = s;
	var h = o.yellow;
	t.yellow = h;
	var f = o.lime;
	t.lime = f;
	var v = o.green;
	t.green = v;
	var p = o.cyan;
	t.cyan = p;
	var d = o.blue;
	t.blue = d;
	var m = o.geekblue;
	t.geekblue = m;
	var z = o.purple;
	t.purple = z;
	var y = o.magenta;
	t.magenta = y;
	var b = o.grey;
	t.grey = b
}, function (e, t, c) {
	"use strict";
	t.a = {
		today: "Today",
		now: "Now",
		backToToday: "Back to today",
		ok: "Ok",
		clear: "Clear",
		month: "Month",
		year: "Year",
		timeSelect: "select time",
		dateSelect: "select date",
		weekSelect: "Choose a week",
		monthSelect: "Choose a month",
		yearSelect: "Choose a year",
		decadeSelect: "Choose a decade",
		yearFormat: "YYYY",
		dateFormat: "M/D/YYYY",
		dayFormat: "D",
		dateTimeFormat: "M/D/YYYY HH:mm:ss",
		monthBeforeYear: !0,
		previousMonth: "Previous month (PageUp)",
		nextMonth: "Next month (PageDown)",
		previousYear: "Last year (Control + left)",
		nextYear: "Next year (Control + right)",
		previousDecade: "Last decade",
		nextDecade: "Next decade",
		previousCentury: "Last century",
		nextCentury: "Next century"
	}
}, function (e, t, c) {
	"use strict";

	function n(e) {
		return (n = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function (e) {
			return typeof e
		} : function (e) {
			return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
		})(e)
	}

	function r(e, t) {
		for (var c = 0; c < t.length; c++) {
			var n = t[c];
			n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
		}
	}

	function l(e, t) {
		return !t || "object" !== n(t) && "function" !== typeof t ? function (e) {
			if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return e
		}(e) : t
	}

	function o(e) {
		return (o = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
			return e.__proto__ || Object.getPrototypeOf(e)
		})(e)
	}

	function a(e, t) {
		return (a = Object.setPrototypeOf || function (e, t) {
			return e.__proto__ = t, e
		})(e, t)
	}

	var i = this && this.__importStar || function (e) {
		if (e && e.__esModule) return e;
		var t = {};
		if (null != e) for (var c in e) Object.hasOwnProperty.call(e, c) && (t[c] = e[c]);
		return t.default = e, t
	}, u = this && this.__importDefault || function (e) {
		return e && e.__esModule ? e : {default: e}
	};
	Object.defineProperty(t, "__esModule", {value: !0});
	var s = i(c(0)), h = u(c(141)), f = u(c(142)), v = u(c(143)), p = u(c(144)), d = function (e) {
		function t() {
			var e;
			return function (e, t) {
				if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
			}(this, t), (e = l(this, o(t).apply(this, arguments))).resizeObserver = null, e.childNode = null, e.currentElement = null, e.state = {
				width: 0,
				height: 0
			}, e.onResize = function (t) {
				var c = e.props.onResize, n = t[0].target.getBoundingClientRect(), r = n.width, l = n.height,
					o = Math.floor(r), a = Math.floor(l);
				if (e.state.width !== o || e.state.height !== a) {
					var i = {width: o, height: a};
					e.setState(i), c && c(i)
				}
			}, e
		}

		var c, i, u;
		return function (e, t) {
			if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
			e.prototype = Object.create(t && t.prototype, {
				constructor: {
					value: e,
					writable: !0,
					configurable: !0
				}
			}), t && a(e, t)
		}(t, e), c = t, (i = [{
			key: "componentDidMount", value: function () {
				this.onComponentUpdated()
			}
		}, {
			key: "componentDidUpdate", value: function () {
				this.onComponentUpdated()
			}
		}, {
			key: "componentWillUnmount", value: function () {
				this.destroyObserver()
			}
		}, {
			key: "onComponentUpdated", value: function () {
				if (this.props.disabled) this.destroyObserver(); else {
					var e = h.default(this.childNode || this);
					e !== this.currentElement && (this.destroyObserver(), this.currentElement = e), !this.resizeObserver && e && (this.resizeObserver = new p.default(this.onResize), this.resizeObserver.observe(e))
				}
			}
		}, {
			key: "destroyObserver", value: function () {
				this.resizeObserver && (this.resizeObserver.disconnect(), this.resizeObserver = null)
			}
		}, {
			key: "render", value: function () {
				var e = this, t = this.props.children, c = f.default(t);
				if (c.length > 1) v.default(!1, "Find more than one child node with `children` in ResizeObserver. Will only observe first one."); else if (0 === c.length) return v.default(!1, "`children` of ResizeObserver is empty. Nothing is in observe."), null;
				var r = c[0];
				if (s.isValidElement(r)) {
					var l = r.ref;
					c[0] = s.cloneElement(r, {
						ref: function (t) {
							if (e.childNode = t, l) {
								var c = n(l);
								"function" === c ? l(t) : "object" === c && (l.current = t)
							}
						}
					})
				}
				return 1 === c.length ? c[0] : c.map((function (e, t) {
					return !s.isValidElement(e) || "key" in e && null !== e.key ? e : s.cloneElement(e, {key: "".concat("rc-observer-key", "-").concat(t)})
				}))
			}
		}]) && r(c.prototype, i), u && r(c, u), t
	}(s.Component);
	d.displayName = "ResizeObserver", t.default = d
}, function (e, t, c) {
	try {
		var n = c(79)
	} catch (a) {
		n = c(79)
	}
	var r = /\s+/, l = Object.prototype.toString;

	function o(e) {
		if (!e || !e.nodeType) throw new Error("A DOM element reference is required");
		this.el = e, this.list = e.classList
	}

	e.exports = function (e) {
		return new o(e)
	}, o.prototype.add = function (e) {
		if (this.list) return this.list.add(e), this;
		var t = this.array();
		return ~n(t, e) || t.push(e), this.el.className = t.join(" "), this
	}, o.prototype.remove = function (e) {
		if ("[object RegExp]" == l.call(e)) return this.removeMatching(e);
		if (this.list) return this.list.remove(e), this;
		var t = this.array(), c = n(t, e);
		return ~c && t.splice(c, 1), this.el.className = t.join(" "), this
	}, o.prototype.removeMatching = function (e) {
		for (var t = this.array(), c = 0; c < t.length; c++) e.test(t[c]) && this.remove(t[c]);
		return this
	}, o.prototype.toggle = function (e, t) {
		return this.list ? ("undefined" !== typeof t ? t !== this.list.toggle(e, t) && this.list.toggle(e) : this.list.toggle(e), this) : ("undefined" !== typeof t ? t ? this.add(e) : this.remove(e) : this.has(e) ? this.remove(e) : this.add(e), this)
	}, o.prototype.array = function () {
		var e = (this.el.getAttribute("class") || "").replace(/^\s+|\s+$/g, "").split(r);
		return "" === e[0] && e.shift(), e
	}, o.prototype.has = o.prototype.contains = function (e) {
		return this.list ? this.list.contains(e) : !!~n(this.array(), e)
	}
}, function (e, t, c) {
	"use strict";
	var n = c(7), r = c.n(n), l = c(12), o = c.n(l), a = c(20), i = c.n(a), u = c(21), s = c.n(u), h = c(32),
		f = c.n(h), v = c(33), p = c.n(v), d = c(0), m = c.n(d), z = c(1), y = c.n(z);

	function b(e) {
		var t = [];
		return m.a.Children.forEach(e, (function (e) {
			t.push(e)
		})), t
	}

	function M(e, t) {
		var c = null;
		return e && e.forEach((function (e) {
			c || e && e.key === t && (c = e)
		})), c
	}

	function g(e, t, c) {
		var n = null;
		return e && e.forEach((function (e) {
			if (e && e.key === t && e.props[c]) {
				if (n) throw new Error("two child with same key for <rc-animate> children");
				n = e
			}
		})), n
	}

	var H = c(16), V = c.n(H), w = c(63), C = {
		isAppearSupported: function (e) {
			return e.transitionName && e.transitionAppear || e.animation.appear
		}, isEnterSupported: function (e) {
			return e.transitionName && e.transitionEnter || e.animation.enter
		}, isLeaveSupported: function (e) {
			return e.transitionName && e.transitionLeave || e.animation.leave
		}, allowAppearCallback: function (e) {
			return e.transitionAppear || e.animation.appear
		}, allowEnterCallback: function (e) {
			return e.transitionEnter || e.animation.enter
		}, allowLeaveCallback: function (e) {
			return e.transitionLeave || e.animation.leave
		}
	}, L = {enter: "transitionEnter", appear: "transitionAppear", leave: "transitionLeave"}, S = function (e) {
		function t() {
			return i()(this, t), f()(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
		}

		return p()(t, e), s()(t, [{
			key: "componentWillUnmount", value: function () {
				this.stop()
			}
		}, {
			key: "componentWillEnter", value: function (e) {
				C.isEnterSupported(this.props) ? this.transition("enter", e) : e()
			}
		}, {
			key: "componentWillAppear", value: function (e) {
				C.isAppearSupported(this.props) ? this.transition("appear", e) : e()
			}
		}, {
			key: "componentWillLeave", value: function (e) {
				C.isLeaveSupported(this.props) ? this.transition("leave", e) : e()
			}
		}, {
			key: "transition", value: function (e, t) {
				var c = this, n = V.a.findDOMNode(this), r = this.props, l = r.transitionName,
					o = "object" === typeof l;
				this.stop();
				var a = function () {
					c.stopper = null, t()
				};
				if ((w.b || !r.animation[e]) && l && r[L[e]]) {
					var i = o ? l[e] : l + "-" + e, u = i + "-active";
					o && l[e + "Active"] && (u = l[e + "Active"]), this.stopper = Object(w.a)(n, {
						name: i,
						active: u
					}, a)
				} else this.stopper = r.animation[e](n, a)
			}
		}, {
			key: "stop", value: function () {
				var e = this.stopper;
				e && (this.stopper = null, e.stop())
			}
		}, {
			key: "render", value: function () {
				return this.props.children
			}
		}]), t
	}(m.a.Component);
	S.propTypes = {children: y.a.any, animation: y.a.any, transitionName: y.a.any};
	var k = S, O = "rc_animate_" + Date.now();

	function T(e) {
		var t = e.children;
		return m.a.isValidElement(t) && !t.key ? m.a.cloneElement(t, {key: O}) : t
	}

	function E() {
	}

	var x = function (e) {
		function t(e) {
			i()(this, t);
			var c = f()(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
			return _.call(c), c.currentlyAnimatingKeys = {}, c.keysToEnter = [], c.keysToLeave = [], c.state = {children: b(T(e))}, c.childrenRefs = {}, c
		}

		return p()(t, e), s()(t, [{
			key: "componentDidMount", value: function () {
				var e = this, t = this.props.showProp, c = this.state.children;
				t && (c = c.filter((function (e) {
					return !!e.props[t]
				}))), c.forEach((function (t) {
					t && e.performAppear(t.key)
				}))
			}
		}, {
			key: "componentWillReceiveProps", value: function (e) {
				var t = this;
				this.nextProps = e;
				var c = b(T(e)), n = this.props;
				n.exclusive && Object.keys(this.currentlyAnimatingKeys).forEach((function (e) {
					t.stop(e)
				}));
				var r = n.showProp, l = this.currentlyAnimatingKeys, a = n.exclusive ? b(T(n)) : this.state.children,
					i = [];
				r ? (a.forEach((function (e) {
					var t = e && M(c, e.key), n = void 0;
					(n = t && t.props[r] || !e.props[r] ? t : m.a.cloneElement(t || e, o()({}, r, !0))) && i.push(n)
				})), c.forEach((function (e) {
					e && M(a, e.key) || i.push(e)
				}))) : i = function (e, t) {
					var c = [], n = {}, r = [];
					return e.forEach((function (e) {
						e && M(t, e.key) ? r.length && (n[e.key] = r, r = []) : r.push(e)
					})), t.forEach((function (e) {
						e && Object.prototype.hasOwnProperty.call(n, e.key) && (c = c.concat(n[e.key])), c.push(e)
					})), c = c.concat(r)
				}(a, c), this.setState({children: i}), c.forEach((function (e) {
					var c = e && e.key;
					if (!e || !l[c]) {
						var n = e && M(a, c);
						if (r) {
							var o = e.props[r];
							if (n) !g(a, c, r) && o && t.keysToEnter.push(c); else o && t.keysToEnter.push(c)
						} else n || t.keysToEnter.push(c)
					}
				})), a.forEach((function (e) {
					var n = e && e.key;
					if (!e || !l[n]) {
						var o = e && M(c, n);
						if (r) {
							var a = e.props[r];
							if (o) !g(c, n, r) && a && t.keysToLeave.push(n); else a && t.keysToLeave.push(n)
						} else o || t.keysToLeave.push(n)
					}
				}))
			}
		}, {
			key: "componentDidUpdate", value: function () {
				var e = this.keysToEnter;
				this.keysToEnter = [], e.forEach(this.performEnter);
				var t = this.keysToLeave;
				this.keysToLeave = [], t.forEach(this.performLeave)
			}
		}, {
			key: "isValidChildByKey", value: function (e, t) {
				var c = this.props.showProp;
				return c ? g(e, t, c) : M(e, t)
			}
		}, {
			key: "stop", value: function (e) {
				delete this.currentlyAnimatingKeys[e];
				var t = this.childrenRefs[e];
				t && t.stop()
			}
		}, {
			key: "render", value: function () {
				var e = this, t = this.props;
				this.nextProps = t;
				var c = this.state.children, n = null;
				c && (n = c.map((function (c) {
					if (null === c || void 0 === c) return c;
					if (!c.key) throw new Error("must set key for <rc-animate> children");
					return m.a.createElement(k, {
						key: c.key,
						ref: function (t) {
							e.childrenRefs[c.key] = t
						},
						animation: t.animation,
						transitionName: t.transitionName,
						transitionEnter: t.transitionEnter,
						transitionAppear: t.transitionAppear,
						transitionLeave: t.transitionLeave
					}, c)
				})));
				var l = t.component;
				if (l) {
					var o = t;
					return "string" === typeof l && (o = r()({
						className: t.className,
						style: t.style
					}, t.componentProps)), m.a.createElement(l, o, n)
				}
				return n[0] || null
			}
		}]), t
	}(m.a.Component);
	x.isAnimate = !0, x.propTypes = {
		className: y.a.string,
		style: y.a.object,
		component: y.a.any,
		componentProps: y.a.object,
		animation: y.a.object,
		transitionName: y.a.oneOfType([y.a.string, y.a.object]),
		transitionEnter: y.a.bool,
		transitionAppear: y.a.bool,
		exclusive: y.a.bool,
		transitionLeave: y.a.bool,
		onEnd: y.a.func,
		onEnter: y.a.func,
		onLeave: y.a.func,
		onAppear: y.a.func,
		showProp: y.a.string,
		children: y.a.node
	}, x.defaultProps = {
		animation: {},
		component: "span",
		componentProps: {},
		transitionEnter: !0,
		transitionLeave: !0,
		transitionAppear: !1,
		onEnd: E,
		onEnter: E,
		onLeave: E,
		onAppear: E
	};
	var _ = function () {
		var e = this;
		this.performEnter = function (t) {
			e.childrenRefs[t] && (e.currentlyAnimatingKeys[t] = !0, e.childrenRefs[t].componentWillEnter(e.handleDoneAdding.bind(e, t, "enter")))
		}, this.performAppear = function (t) {
			e.childrenRefs[t] && (e.currentlyAnimatingKeys[t] = !0, e.childrenRefs[t].componentWillAppear(e.handleDoneAdding.bind(e, t, "appear")))
		}, this.handleDoneAdding = function (t, c) {
			var n = e.props;
			if (delete e.currentlyAnimatingKeys[t], !n.exclusive || n === e.nextProps) {
				var r = b(T(n));
				e.isValidChildByKey(r, t) ? "appear" === c ? C.allowAppearCallback(n) && (n.onAppear(t), n.onEnd(t, !0)) : C.allowEnterCallback(n) && (n.onEnter(t), n.onEnd(t, !0)) : e.performLeave(t)
			}
		}, this.performLeave = function (t) {
			e.childrenRefs[t] && (e.currentlyAnimatingKeys[t] = !0, e.childrenRefs[t].componentWillLeave(e.handleDoneLeaving.bind(e, t)))
		}, this.handleDoneLeaving = function (t) {
			var c = e.props;
			if (delete e.currentlyAnimatingKeys[t], !c.exclusive || c === e.nextProps) {
				var n = b(T(c));
				if (e.isValidChildByKey(n, t)) e.performEnter(t); else {
					var r = function () {
						C.allowLeaveCallback(c) && (c.onLeave(t), c.onEnd(t, !1))
					};
					!function (e, t, c) {
						var n = e.length === t.length;
						return n && e.forEach((function (e, r) {
							var l = t[r];
							e && l && (e && !l || !e && l ? n = !1 : e.key !== l.key ? n = !1 : c && e.props[c] !== l.props[c] && (n = !1))
						})), n
					}(e.state.children, n, c.showProp) ? e.setState({children: n}, r) : r()
				}
			}
		}
	};
	t.a = x
}, , , function (e, t, c) {
	"use strict";
	var n = c(66), r = "function" === typeof Symbol && Symbol.for, l = r ? Symbol.for("react.element") : 60103,
		o = r ? Symbol.for("react.portal") : 60106, a = r ? Symbol.for("react.fragment") : 60107,
		i = r ? Symbol.for("react.strict_mode") : 60108, u = r ? Symbol.for("react.profiler") : 60114,
		s = r ? Symbol.for("react.provider") : 60109, h = r ? Symbol.for("react.context") : 60110,
		f = r ? Symbol.for("react.forward_ref") : 60112, v = r ? Symbol.for("react.suspense") : 60113,
		p = r ? Symbol.for("react.suspense_list") : 60120, d = r ? Symbol.for("react.memo") : 60115,
		m = r ? Symbol.for("react.lazy") : 60116;
	r && Symbol.for("react.fundamental"), r && Symbol.for("react.responder"), r && Symbol.for("react.scope");
	var z = "function" === typeof Symbol && Symbol.iterator;

	function y(e) {
		for (var t = e.message, c = "https://reactjs.org/docs/error-decoder.html?invariant=" + t, n = 1; n < arguments.length; n++) c += "&args[]=" + encodeURIComponent(arguments[n]);
		return e.message = "Minified React error #" + t + "; visit " + c + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ", e
	}

	var b = {
		isMounted: function () {
			return !1
		}, enqueueForceUpdate: function () {
		}, enqueueReplaceState: function () {
		}, enqueueSetState: function () {
		}
	}, M = {};

	function g(e, t, c) {
		this.props = e, this.context = t, this.refs = M, this.updater = c || b
	}

	function H() {
	}

	function V(e, t, c) {
		this.props = e, this.context = t, this.refs = M, this.updater = c || b
	}

	g.prototype.isReactComponent = {}, g.prototype.setState = function (e, t) {
		if ("object" !== typeof e && "function" !== typeof e && null != e) throw y(Error(85));
		this.updater.enqueueSetState(this, e, t, "setState")
	}, g.prototype.forceUpdate = function (e) {
		this.updater.enqueueForceUpdate(this, e, "forceUpdate")
	}, H.prototype = g.prototype;
	var w = V.prototype = new H;
	w.constructor = V, n(w, g.prototype), w.isPureReactComponent = !0;
	var C = {current: null}, L = {suspense: null}, S = {current: null}, k = Object.prototype.hasOwnProperty,
		O = {key: !0, ref: !0, __self: !0, __source: !0};

	function T(e, t, c) {
		var n, r = {}, o = null, a = null;
		if (null != t) for (n in void 0 !== t.ref && (a = t.ref), void 0 !== t.key && (o = "" + t.key), t) k.call(t, n) && !O.hasOwnProperty(n) && (r[n] = t[n]);
		var i = arguments.length - 2;
		if (1 === i) r.children = c; else if (1 < i) {
			for (var u = Array(i), s = 0; s < i; s++) u[s] = arguments[s + 2];
			r.children = u
		}
		if (e && e.defaultProps) for (n in i = e.defaultProps) void 0 === r[n] && (r[n] = i[n]);
		return {$$typeof: l, type: e, key: o, ref: a, props: r, _owner: S.current}
	}

	function E(e) {
		return "object" === typeof e && null !== e && e.$$typeof === l
	}

	var x = /\/+/g, _ = [];

	function P(e, t, c, n) {
		if (_.length) {
			var r = _.pop();
			return r.result = e, r.keyPrefix = t, r.func = c, r.context = n, r.count = 0, r
		}
		return {result: e, keyPrefix: t, func: c, context: n, count: 0}
	}

	function A(e) {
		e.result = null, e.keyPrefix = null, e.func = null, e.context = null, e.count = 0, 10 > _.length && _.push(e)
	}

	function F(e, t, c) {
		return null == e ? 0 : function e(t, c, n, r) {
			var a = typeof t;
			"undefined" !== a && "boolean" !== a || (t = null);
			var i = !1;
			if (null === t) i = !0; else switch (a) {
				case"string":
				case"number":
					i = !0;
					break;
				case"object":
					switch (t.$$typeof) {
						case l:
						case o:
							i = !0
					}
			}
			if (i) return n(r, t, "" === c ? "." + N(t, 0) : c), 1;
			if (i = 0, c = "" === c ? "." : c + ":", Array.isArray(t)) for (var u = 0; u < t.length; u++) {
				var s = c + N(a = t[u], u);
				i += e(a, s, n, r)
			} else if (null === t || "object" !== typeof t ? s = null : s = "function" === typeof(s = z && t[z] || t["@@iterator"]) ? s : null, "function" === typeof s) for (t = s.call(t), u = 0; !(a = t.next()).done;) i += e(a = a.value, s = c + N(a, u++), n, r); else if ("object" === a) throw n = "" + t, y(Error(31), "[object Object]" === n ? "object with keys {" + Object.keys(t).join(", ") + "}" : n, "");
			return i
		}(e, "", t, c)
	}

	function N(e, t) {
		return "object" === typeof e && null !== e && null != e.key ? function (e) {
			var t = {"=": "=0", ":": "=2"};
			return "$" + ("" + e).replace(/[=:]/g, (function (e) {
				return t[e]
			}))
		}(e.key) : t.toString(36)
	}

	function j(e, t) {
		e.func.call(e.context, t, e.count++)
	}

	function R(e, t, c) {
		var n = e.result, r = e.keyPrefix;
		e = e.func.call(e.context, t, e.count++), Array.isArray(e) ? D(e, n, c, (function (e) {
			return e
		})) : null != e && (E(e) && (e = function (e, t) {
			return {$$typeof: l, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner}
		}(e, r + (!e.key || t && t.key === e.key ? "" : ("" + e.key).replace(x, "$&/") + "/") + c)), n.push(e))
	}

	function D(e, t, c, n, r) {
		var l = "";
		null != c && (l = ("" + c).replace(x, "$&/") + "/"), F(e, R, t = P(t, l, n, r)), A(t)
	}

	function I() {
		var e = C.current;
		if (null === e) throw y(Error(321));
		return e
	}

	var U = {
		Children: {
			map: function (e, t, c) {
				if (null == e) return e;
				var n = [];
				return D(e, n, null, t, c), n
			}, forEach: function (e, t, c) {
				if (null == e) return e;
				F(e, j, t = P(null, null, t, c)), A(t)
			}, count: function (e) {
				return F(e, (function () {
					return null
				}), null)
			}, toArray: function (e) {
				var t = [];
				return D(e, t, null, (function (e) {
					return e
				})), t
			}, only: function (e) {
				if (!E(e)) throw y(Error(143));
				return e
			}
		},
		createRef: function () {
			return {current: null}
		},
		Component: g,
		PureComponent: V,
		createContext: function (e, t) {
			return void 0 === t && (t = null), (e = {
				$$typeof: h,
				_calculateChangedBits: t,
				_currentValue: e,
				_currentValue2: e,
				_threadCount: 0,
				Provider: null,
				Consumer: null
			}).Provider = {$$typeof: s, _context: e}, e.Consumer = e
		},
		forwardRef: function (e) {
			return {$$typeof: f, render: e}
		},
		lazy: function (e) {
			return {$$typeof: m, _ctor: e, _status: -1, _result: null}
		},
		memo: function (e, t) {
			return {$$typeof: d, type: e, compare: void 0 === t ? null : t}
		},
		useCallback: function (e, t) {
			return I().useCallback(e, t)
		},
		useContext: function (e, t) {
			return I().useContext(e, t)
		},
		useEffect: function (e, t) {
			return I().useEffect(e, t)
		},
		useImperativeHandle: function (e, t, c) {
			return I().useImperativeHandle(e, t, c)
		},
		useDebugValue: function () {
		},
		useLayoutEffect: function (e, t) {
			return I().useLayoutEffect(e, t)
		},
		useMemo: function (e, t) {
			return I().useMemo(e, t)
		},
		useReducer: function (e, t, c) {
			return I().useReducer(e, t, c)
		},
		useRef: function (e) {
			return I().useRef(e)
		},
		useState: function (e) {
			return I().useState(e)
		},
		Fragment: a,
		Profiler: u,
		StrictMode: i,
		Suspense: v,
		unstable_SuspenseList: p,
		createElement: T,
		cloneElement: function (e, t, c) {
			if (null === e || void 0 === e) throw y(Error(267), e);
			var r = n({}, e.props), o = e.key, a = e.ref, i = e._owner;
			if (null != t) {
				if (void 0 !== t.ref && (a = t.ref, i = S.current), void 0 !== t.key && (o = "" + t.key), e.type && e.type.defaultProps) var u = e.type.defaultProps;
				for (s in t) k.call(t, s) && !O.hasOwnProperty(s) && (r[s] = void 0 === t[s] && void 0 !== u ? u[s] : t[s])
			}
			var s = arguments.length - 2;
			if (1 === s) r.children = c; else if (1 < s) {
				u = Array(s);
				for (var h = 0; h < s; h++) u[h] = arguments[h + 2];
				r.children = u
			}
			return {$$typeof: l, type: e.type, key: o, ref: a, props: r, _owner: i}
		},
		createFactory: function (e) {
			var t = T.bind(null, e);
			return t.type = e, t
		},
		isValidElement: E,
		version: "16.10.2",
		unstable_withSuspenseConfig: function (e, t) {
			var c = L.suspense;
			L.suspense = void 0 === t ? null : t;
			try {
				e()
			} finally {
				L.suspense = c
			}
		},
		__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: {
			ReactCurrentDispatcher: C,
			ReactCurrentBatchConfig: L,
			ReactCurrentOwner: S,
			IsSomeRendererActing: {current: !1},
			assign: n
		}
	}, q = {default: U}, B = q && U || q;
	e.exports = B.default || B
}, function (e, t, c) {
	"use strict";
	var n = c(0), r = c(66), l = c(90);

	function o(e) {
		for (var t = e.message, c = "https://reactjs.org/docs/error-decoder.html?invariant=" + t, n = 1; n < arguments.length; n++) c += "&args[]=" + encodeURIComponent(arguments[n]);
		return e.message = "Minified React error #" + t + "; visit " + c + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ", e
	}

	if (!n) throw o(Error(227));
	var a = null, i = {};

	function u() {
		if (a) for (var e in i) {
			var t = i[e], c = a.indexOf(e);
			if (!(-1 < c)) throw o(Error(96), e);
			if (!h[c]) {
				if (!t.extractEvents) throw o(Error(97), e);
				for (var n in h[c] = t, c = t.eventTypes) {
					var r = void 0, l = c[n], u = t, v = n;
					if (f.hasOwnProperty(v)) throw o(Error(99), v);
					f[v] = l;
					var p = l.phasedRegistrationNames;
					if (p) {
						for (r in p) p.hasOwnProperty(r) && s(p[r], u, v);
						r = !0
					} else l.registrationName ? (s(l.registrationName, u, v), r = !0) : r = !1;
					if (!r) throw o(Error(98), n, e)
				}
			}
		}
	}

	function s(e, t, c) {
		if (v[e]) throw o(Error(100), e);
		v[e] = t, p[e] = t.eventTypes[c].dependencies
	}

	var h = [], f = {}, v = {}, p = {};

	function d(e, t, c, n, r, l, o, a, i) {
		var u = Array.prototype.slice.call(arguments, 3);
		try {
			t.apply(c, u)
		} catch (s) {
			this.onError(s)
		}
	}

	var m = !1, z = null, y = !1, b = null, M = {
		onError: function (e) {
			m = !0, z = e
		}
	};

	function g(e, t, c, n, r, l, o, a, i) {
		m = !1, z = null, d.apply(M, arguments)
	}

	var H = null, V = null, w = null;

	function C(e, t, c) {
		var n = e.type || "unknown-event";
		e.currentTarget = w(c), function (e, t, c, n, r, l, a, i, u) {
			if (g.apply(this, arguments), m) {
				if (!m) throw o(Error(198));
				var s = z;
				m = !1, z = null, y || (y = !0, b = s)
			}
		}(n, t, void 0, e), e.currentTarget = null
	}

	function L(e, t) {
		if (null == t) throw o(Error(30));
		return null == e ? t : Array.isArray(e) ? Array.isArray(t) ? (e.push.apply(e, t), e) : (e.push(t), e) : Array.isArray(t) ? [e].concat(t) : [e, t]
	}

	function S(e, t, c) {
		Array.isArray(e) ? e.forEach(t, c) : e && t.call(c, e)
	}

	var k = null;

	function O(e) {
		if (e) {
			var t = e._dispatchListeners, c = e._dispatchInstances;
			if (Array.isArray(t)) for (var n = 0; n < t.length && !e.isPropagationStopped(); n++) C(e, t[n], c[n]); else t && C(e, t, c);
			e._dispatchListeners = null, e._dispatchInstances = null, e.isPersistent() || e.constructor.release(e)
		}
	}

	function T(e) {
		if (null !== e && (k = L(k, e)), e = k, k = null, e) {
			if (S(e, O), k) throw o(Error(95));
			if (y) throw e = b, y = !1, b = null, e
		}
	}

	var E = {
		injectEventPluginOrder: function (e) {
			if (a) throw o(Error(101));
			a = Array.prototype.slice.call(e), u()
		}, injectEventPluginsByName: function (e) {
			var t, c = !1;
			for (t in e) if (e.hasOwnProperty(t)) {
				var n = e[t];
				if (!i.hasOwnProperty(t) || i[t] !== n) {
					if (i[t]) throw o(Error(102), t);
					i[t] = n, c = !0
				}
			}
			c && u()
		}
	};

	function x(e, t) {
		var c = e.stateNode;
		if (!c) return null;
		var n = H(c);
		if (!n) return null;
		c = n[t];
		e:switch (t) {
			case"onClick":
			case"onClickCapture":
			case"onDoubleClick":
			case"onDoubleClickCapture":
			case"onMouseDown":
			case"onMouseDownCapture":
			case"onMouseMove":
			case"onMouseMoveCapture":
			case"onMouseUp":
			case"onMouseUpCapture":
				(n = !n.disabled) || (n = !("button" === (e = e.type) || "input" === e || "select" === e || "textarea" === e)), e = !n;
				break e;
			default:
				e = !1
		}
		if (e) return null;
		if (c && "function" !== typeof c) throw o(Error(231), t, typeof c);
		return c
	}

	var _ = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
	_.hasOwnProperty("ReactCurrentDispatcher") || (_.ReactCurrentDispatcher = {current: null}), _.hasOwnProperty("ReactCurrentBatchConfig") || (_.ReactCurrentBatchConfig = {suspense: null});
	var P = /^(.*)[\\\/]/, A = "function" === typeof Symbol && Symbol.for, F = A ? Symbol.for("react.element") : 60103,
		N = A ? Symbol.for("react.portal") : 60106, j = A ? Symbol.for("react.fragment") : 60107,
		R = A ? Symbol.for("react.strict_mode") : 60108, D = A ? Symbol.for("react.profiler") : 60114,
		I = A ? Symbol.for("react.provider") : 60109, U = A ? Symbol.for("react.context") : 60110,
		q = A ? Symbol.for("react.concurrent_mode") : 60111, B = A ? Symbol.for("react.forward_ref") : 60112,
		W = A ? Symbol.for("react.suspense") : 60113, Q = A ? Symbol.for("react.suspense_list") : 60120,
		K = A ? Symbol.for("react.memo") : 60115, $ = A ? Symbol.for("react.lazy") : 60116;
	A && Symbol.for("react.fundamental"), A && Symbol.for("react.responder"), A && Symbol.for("react.scope");
	var G = "function" === typeof Symbol && Symbol.iterator;

	function Y(e) {
		return null === e || "object" !== typeof e ? null : "function" === typeof(e = G && e[G] || e["@@iterator"]) ? e : null
	}

	function Z(e) {
		if (null == e) return null;
		if ("function" === typeof e) return e.displayName || e.name || null;
		if ("string" === typeof e) return e;
		switch (e) {
			case j:
				return "Fragment";
			case N:
				return "Portal";
			case D:
				return "Profiler";
			case R:
				return "StrictMode";
			case W:
				return "Suspense";
			case Q:
				return "SuspenseList"
		}
		if ("object" === typeof e) switch (e.$$typeof) {
			case U:
				return "Context.Consumer";
			case I:
				return "Context.Provider";
			case B:
				var t = e.render;
				return t = t.displayName || t.name || "", e.displayName || ("" !== t ? "ForwardRef(" + t + ")" : "ForwardRef");
			case K:
				return Z(e.type);
			case $:
				if (e = 1 === e._status ? e._result : null) return Z(e)
		}
		return null
	}

	function X(e) {
		var t = "";
		do {
			e:switch (e.tag) {
				case 3:
				case 4:
				case 6:
				case 7:
				case 10:
				case 9:
					var c = "";
					break e;
				default:
					var n = e._debugOwner, r = e._debugSource, l = Z(e.type);
					c = null, n && (c = Z(n.type)), n = l, l = "", r ? l = " (at " + r.fileName.replace(P, "") + ":" + r.lineNumber + ")" : c && (l = " (created by " + c + ")"), c = "\n    in " + (n || "Unknown") + l
			}
			t += c, e = e.return
		} while (e);
		return t
	}

	var J = !("undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement),
		ee = null, te = null, ce = null;

	function ne(e) {
		if (e = V(e)) {
			if ("function" !== typeof ee) throw o(Error(280));
			var t = H(e.stateNode);
			ee(e.stateNode, e.type, t)
		}
	}

	function re(e) {
		te ? ce ? ce.push(e) : ce = [e] : te = e
	}

	function le() {
		if (te) {
			var e = te, t = ce;
			if (ce = te = null, ne(e), t) for (e = 0; e < t.length; e++) ne(t[e])
		}
	}

	function oe(e, t) {
		return e(t)
	}

	function ae(e, t, c, n) {
		return e(t, c, n)
	}

	function ie() {
	}

	var ue = oe, se = !1, he = !1;

	function fe() {
		null === te && null === ce || (ie(), le())
	}

	new Map, new Map, new Map;
	var ve = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
		pe = Object.prototype.hasOwnProperty, de = {}, me = {};

	function ze(e, t, c, n, r, l) {
		this.acceptsBooleans = 2 === t || 3 === t || 4 === t, this.attributeName = n, this.attributeNamespace = r, this.mustUseProperty = c, this.propertyName = e, this.type = t, this.sanitizeURL = l
	}

	var ye = {};
	"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach((function (e) {
		ye[e] = new ze(e, 0, !1, e, null, !1)
	})), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach((function (e) {
		var t = e[0];
		ye[t] = new ze(t, 1, !1, e[1], null, !1)
	})), ["contentEditable", "draggable", "spellCheck", "value"].forEach((function (e) {
		ye[e] = new ze(e, 2, !1, e.toLowerCase(), null, !1)
	})), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach((function (e) {
		ye[e] = new ze(e, 2, !1, e, null, !1)
	})), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach((function (e) {
		ye[e] = new ze(e, 3, !1, e.toLowerCase(), null, !1)
	})), ["checked", "multiple", "muted", "selected"].forEach((function (e) {
		ye[e] = new ze(e, 3, !0, e, null, !1)
	})), ["capture", "download"].forEach((function (e) {
		ye[e] = new ze(e, 4, !1, e, null, !1)
	})), ["cols", "rows", "size", "span"].forEach((function (e) {
		ye[e] = new ze(e, 6, !1, e, null, !1)
	})), ["rowSpan", "start"].forEach((function (e) {
		ye[e] = new ze(e, 5, !1, e.toLowerCase(), null, !1)
	}));
	var be = /[\-:]([a-z])/g;

	function Me(e) {
		return e[1].toUpperCase()
	}

	function ge(e) {
		switch (typeof e) {
			case"boolean":
			case"number":
			case"object":
			case"string":
			case"undefined":
				return e;
			default:
				return ""
		}
	}

	function He(e, t, c, n) {
		var r = ye.hasOwnProperty(t) ? ye[t] : null;
		(null !== r ? 0 === r.type : !n && (2 < t.length && ("o" === t[0] || "O" === t[0]) && ("n" === t[1] || "N" === t[1]))) || (function (e, t, c, n) {
			if (null === t || "undefined" === typeof t || function (e, t, c, n) {
					if (null !== c && 0 === c.type) return !1;
					switch (typeof t) {
						case"function":
						case"symbol":
							return !0;
						case"boolean":
							return !n && (null !== c ? !c.acceptsBooleans : "data-" !== (e = e.toLowerCase().slice(0, 5)) && "aria-" !== e);
						default:
							return !1
					}
				}(e, t, c, n)) return !0;
			if (n) return !1;
			if (null !== c) switch (c.type) {
				case 3:
					return !t;
				case 4:
					return !1 === t;
				case 5:
					return isNaN(t);
				case 6:
					return isNaN(t) || 1 > t
			}
			return !1
		}(t, c, r, n) && (c = null), n || null === r ? function (e) {
			return !!pe.call(me, e) || !pe.call(de, e) && (ve.test(e) ? me[e] = !0 : (de[e] = !0, !1))
		}(t) && (null === c ? e.removeAttribute(t) : e.setAttribute(t, "" + c)) : r.mustUseProperty ? e[r.propertyName] = null === c ? 3 !== r.type && "" : c : (t = r.attributeName, n = r.attributeNamespace, null === c ? e.removeAttribute(t) : (c = 3 === (r = r.type) || 4 === r && !0 === c ? "" : "" + c, n ? e.setAttributeNS(n, t, c) : e.setAttribute(t, c))))
	}

	function Ve(e) {
		var t = e.type;
		return (e = e.nodeName) && "input" === e.toLowerCase() && ("checkbox" === t || "radio" === t)
	}

	function we(e) {
		e._valueTracker || (e._valueTracker = function (e) {
			var t = Ve(e) ? "checked" : "value", c = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
				n = "" + e[t];
			if (!e.hasOwnProperty(t) && "undefined" !== typeof c && "function" === typeof c.get && "function" === typeof c.set) {
				var r = c.get, l = c.set;
				return Object.defineProperty(e, t, {
					configurable: !0, get: function () {
						return r.call(this)
					}, set: function (e) {
						n = "" + e, l.call(this, e)
					}
				}), Object.defineProperty(e, t, {enumerable: c.enumerable}), {
					getValue: function () {
						return n
					}, setValue: function (e) {
						n = "" + e
					}, stopTracking: function () {
						e._valueTracker = null, delete e[t]
					}
				}
			}
		}(e))
	}

	function Ce(e) {
		if (!e) return !1;
		var t = e._valueTracker;
		if (!t) return !0;
		var c = t.getValue(), n = "";
		return e && (n = Ve(e) ? e.checked ? "true" : "false" : e.value), (e = n) !== c && (t.setValue(e), !0)
	}

	function Le(e, t) {
		var c = t.checked;
		return r({}, t, {
			defaultChecked: void 0,
			defaultValue: void 0,
			value: void 0,
			checked: null != c ? c : e._wrapperState.initialChecked
		})
	}

	function Se(e, t) {
		var c = null == t.defaultValue ? "" : t.defaultValue, n = null != t.checked ? t.checked : t.defaultChecked;
		c = ge(null != t.value ? t.value : c), e._wrapperState = {
			initialChecked: n,
			initialValue: c,
			controlled: "checkbox" === t.type || "radio" === t.type ? null != t.checked : null != t.value
		}
	}

	function ke(e, t) {
		null != (t = t.checked) && He(e, "checked", t, !1)
	}

	function Oe(e, t) {
		ke(e, t);
		var c = ge(t.value), n = t.type;
		if (null != c) "number" === n ? (0 === c && "" === e.value || e.value != c) && (e.value = "" + c) : e.value !== "" + c && (e.value = "" + c); else if ("submit" === n || "reset" === n) return void e.removeAttribute("value");
		t.hasOwnProperty("value") ? Ee(e, t.type, c) : t.hasOwnProperty("defaultValue") && Ee(e, t.type, ge(t.defaultValue)), null == t.checked && null != t.defaultChecked && (e.defaultChecked = !!t.defaultChecked)
	}

	function Te(e, t, c) {
		if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
			var n = t.type;
			if (!("submit" !== n && "reset" !== n || void 0 !== t.value && null !== t.value)) return;
			t = "" + e._wrapperState.initialValue, c || t === e.value || (e.value = t), e.defaultValue = t
		}
		"" !== (c = e.name) && (e.name = ""), e.defaultChecked = !e.defaultChecked, e.defaultChecked = !!e._wrapperState.initialChecked, "" !== c && (e.name = c)
	}

	function Ee(e, t, c) {
		"number" === t && e.ownerDocument.activeElement === e || (null == c ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + c && (e.defaultValue = "" + c))
	}

	function xe(e, t) {
		return e = r({children: void 0}, t), (t = function (e) {
			var t = "";
			return n.Children.forEach(e, (function (e) {
				null != e && (t += e)
			})), t
		}(t.children)) && (e.children = t), e
	}

	function _e(e, t, c, n) {
		if (e = e.options, t) {
			t = {};
			for (var r = 0; r < c.length; r++) t["$" + c[r]] = !0;
			for (c = 0; c < e.length; c++) r = t.hasOwnProperty("$" + e[c].value), e[c].selected !== r && (e[c].selected = r), r && n && (e[c].defaultSelected = !0)
		} else {
			for (c = "" + ge(c), t = null, r = 0; r < e.length; r++) {
				if (e[r].value === c) return e[r].selected = !0, void(n && (e[r].defaultSelected = !0));
				null !== t || e[r].disabled || (t = e[r])
			}
			null !== t && (t.selected = !0)
		}
	}

	function Pe(e, t) {
		if (null != t.dangerouslySetInnerHTML) throw o(Error(91));
		return r({}, t, {value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue})
	}

	function Ae(e, t) {
		var c = t.value;
		if (null == c) {
			if (c = t.defaultValue, null != (t = t.children)) {
				if (null != c) throw o(Error(92));
				if (Array.isArray(t)) {
					if (!(1 >= t.length)) throw o(Error(93));
					t = t[0]
				}
				c = t
			}
			null == c && (c = "")
		}
		e._wrapperState = {initialValue: ge(c)}
	}

	function Fe(e, t) {
		var c = ge(t.value), n = ge(t.defaultValue);
		null != c && ((c = "" + c) !== e.value && (e.value = c), null == t.defaultValue && e.defaultValue !== c && (e.defaultValue = c)), null != n && (e.defaultValue = "" + n)
	}

	function Ne(e) {
		var t = e.textContent;
		t === e._wrapperState.initialValue && "" !== t && null !== t && (e.value = t)
	}

	"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach((function (e) {
		var t = e.replace(be, Me);
		ye[t] = new ze(t, 1, !1, e, null, !1)
	})), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach((function (e) {
		var t = e.replace(be, Me);
		ye[t] = new ze(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1)
	})), ["xml:base", "xml:lang", "xml:space"].forEach((function (e) {
		var t = e.replace(be, Me);
		ye[t] = new ze(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1)
	})), ["tabIndex", "crossOrigin"].forEach((function (e) {
		ye[e] = new ze(e, 1, !1, e.toLowerCase(), null, !1)
	})), ye.xlinkHref = new ze("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0), ["src", "href", "action", "formAction"].forEach((function (e) {
		ye[e] = new ze(e, 1, !1, e.toLowerCase(), null, !0)
	}));
	var je = {
		html: "http://www.w3.org/1999/xhtml",
		mathml: "http://www.w3.org/1998/Math/MathML",
		svg: "http://www.w3.org/2000/svg"
	};

	function Re(e) {
		switch (e) {
			case"svg":
				return "http://www.w3.org/2000/svg";
			case"math":
				return "http://www.w3.org/1998/Math/MathML";
			default:
				return "http://www.w3.org/1999/xhtml"
		}
	}

	function De(e, t) {
		return null == e || "http://www.w3.org/1999/xhtml" === e ? Re(t) : "http://www.w3.org/2000/svg" === e && "foreignObject" === t ? "http://www.w3.org/1999/xhtml" : e
	}

	var Ie, Ue = function (e) {
		return "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction ? function (t, c, n, r) {
			MSApp.execUnsafeLocalFunction((function () {
				return e(t, c)
			}))
		} : e
	}((function (e, t) {
		if (e.namespaceURI !== je.svg || "innerHTML" in e) e.innerHTML = t; else {
			for ((Ie = Ie || document.createElement("div")).innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Ie.firstChild; e.firstChild;) e.removeChild(e.firstChild);
			for (; t.firstChild;) e.appendChild(t.firstChild)
		}
	}));

	function qe(e, t) {
		if (t) {
			var c = e.firstChild;
			if (c && c === e.lastChild && 3 === c.nodeType) return void(c.nodeValue = t)
		}
		e.textContent = t
	}

	function Be(e, t) {
		var c = {};
		return c[e.toLowerCase()] = t.toLowerCase(), c["Webkit" + e] = "webkit" + t, c["Moz" + e] = "moz" + t, c
	}

	var We = {
		animationend: Be("Animation", "AnimationEnd"),
		animationiteration: Be("Animation", "AnimationIteration"),
		animationstart: Be("Animation", "AnimationStart"),
		transitionend: Be("Transition", "TransitionEnd")
	}, Qe = {}, Ke = {};

	function $e(e) {
		if (Qe[e]) return Qe[e];
		if (!We[e]) return e;
		var t, c = We[e];
		for (t in c) if (c.hasOwnProperty(t) && t in Ke) return Qe[e] = c[t];
		return e
	}

	J && (Ke = document.createElement("div").style, "AnimationEvent" in window || (delete We.animationend.animation, delete We.animationiteration.animation, delete We.animationstart.animation), "TransitionEvent" in window || delete We.transitionend.transition);
	var Ge = $e("animationend"), Ye = $e("animationiteration"), Ze = $e("animationstart"), Xe = $e("transitionend"),
		Je = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
		et = !1, tt = [], ct = null, nt = null, rt = null, lt = new Map, ot = new Map,
		at = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput close cancel copy cut paste click change contextmenu reset submit".split(" "),
		it = "focus blur dragenter dragleave mouseover mouseout pointerover pointerout gotpointercapture lostpointercapture".split(" ");

	function ut(e, t, c, n) {
		return {blockedOn: e, topLevelType: t, eventSystemFlags: 32 | c, nativeEvent: n}
	}

	function st(e, t) {
		switch (e) {
			case"focus":
			case"blur":
				ct = null;
				break;
			case"dragenter":
			case"dragleave":
				nt = null;
				break;
			case"mouseover":
			case"mouseout":
				rt = null;
				break;
			case"pointerover":
			case"pointerout":
				lt.delete(t.pointerId);
				break;
			case"gotpointercapture":
			case"lostpointercapture":
				ot.delete(t.pointerId)
		}
	}

	function ht(e, t, c, n, r) {
		return null === e || e.nativeEvent !== r ? ut(t, c, n, r) : (e.eventSystemFlags |= n, e)
	}

	function ft(e) {
		if (null !== e.blockedOn) return !1;
		var t = Cc(e.topLevelType, e.eventSystemFlags, e.nativeEvent);
		return null === t || (e.blockedOn = t, !1)
	}

	function vt(e, t, c) {
		ft(e) && c.delete(t)
	}

	function pt() {
		for (et = !1; 0 < tt.length;) {
			var e = tt[0];
			if (null !== e.blockedOn) break;
			var t = Cc(e.topLevelType, e.eventSystemFlags, e.nativeEvent);
			null !== t ? e.blockedOn = t : tt.shift()
		}
		null !== ct && ft(ct) && (ct = null), null !== nt && ft(nt) && (nt = null), null !== rt && ft(rt) && (rt = null), lt.forEach(vt), ot.forEach(vt)
	}

	function dt(e, t) {
		e.blockedOn === t && (e.blockedOn = null, et || (et = !0, l.unstable_scheduleCallback(l.unstable_NormalPriority, pt)))
	}

	function mt(e) {
		function t(t) {
			return dt(t, e)
		}

		if (0 < tt.length) {
			dt(tt[0], e);
			for (var c = 1; c < tt.length; c++) {
				var n = tt[c];
				n.blockedOn === e && (n.blockedOn = null)
			}
		}
		null !== ct && dt(ct, e), null !== nt && dt(nt, e), null !== rt && dt(rt, e), lt.forEach(t), ot.forEach(t)
	}

	var zt = 0, yt = 2, bt = 1024;

	function Mt(e) {
		var t = e, c = e;
		if (e.alternate) for (; t.return;) t = t.return; else {
			e = t;
			do {
				((t = e).effectTag & (yt | bt)) !== zt && (c = t.return), e = t.return
			} while (e)
		}
		return 3 === t.tag ? c : null
	}

	function gt(e) {
		if (Mt(e) !== e) throw o(Error(188))
	}

	function Ht(e) {
		if (!(e = function (e) {
				var t = e.alternate;
				if (!t) {
					if (null === (t = Mt(e))) throw o(Error(188));
					return t !== e ? null : e
				}
				for (var c = e, n = t; ;) {
					var r = c.return;
					if (null === r) break;
					var l = r.alternate;
					if (null === l) {
						if (null !== (n = r.return)) {
							c = n;
							continue
						}
						break
					}
					if (r.child === l.child) {
						for (l = r.child; l;) {
							if (l === c) return gt(r), e;
							if (l === n) return gt(r), t;
							l = l.sibling
						}
						throw o(Error(188))
					}
					if (c.return !== n.return) c = r, n = l; else {
						for (var a = !1, i = r.child; i;) {
							if (i === c) {
								a = !0, c = r, n = l;
								break
							}
							if (i === n) {
								a = !0, n = r, c = l;
								break
							}
							i = i.sibling
						}
						if (!a) {
							for (i = l.child; i;) {
								if (i === c) {
									a = !0, c = l, n = r;
									break
								}
								if (i === n) {
									a = !0, n = l, c = r;
									break
								}
								i = i.sibling
							}
							if (!a) throw o(Error(189))
						}
					}
					if (c.alternate !== n) throw o(Error(190))
				}
				if (3 !== c.tag) throw o(Error(188));
				return c.stateNode.current === c ? e : t
			}(e))) return null;
		for (var t = e; ;) {
			if (5 === t.tag || 6 === t.tag) return t;
			if (t.child) t.child.return = t, t = t.child; else {
				if (t === e) break;
				for (; !t.sibling;) {
					if (!t.return || t.return === e) return null;
					t = t.return
				}
				t.sibling.return = t.return, t = t.sibling
			}
		}
		return null
	}

	function Vt(e) {
		return (e = e.target || e.srcElement || window).correspondingUseElement && (e = e.correspondingUseElement), 3 === e.nodeType ? e.parentNode : e
	}

	function wt(e) {
		do {
			e = e.return
		} while (e && 5 !== e.tag);
		return e || null
	}

	function Ct(e, t, c) {
		(t = x(e, c.dispatchConfig.phasedRegistrationNames[t])) && (c._dispatchListeners = L(c._dispatchListeners, t), c._dispatchInstances = L(c._dispatchInstances, e))
	}

	function Lt(e) {
		if (e && e.dispatchConfig.phasedRegistrationNames) {
			for (var t = e._targetInst, c = []; t;) c.push(t), t = wt(t);
			for (t = c.length; 0 < t--;) Ct(c[t], "captured", e);
			for (t = 0; t < c.length; t++) Ct(c[t], "bubbled", e)
		}
	}

	function St(e, t, c) {
		e && c && c.dispatchConfig.registrationName && (t = x(e, c.dispatchConfig.registrationName)) && (c._dispatchListeners = L(c._dispatchListeners, t), c._dispatchInstances = L(c._dispatchInstances, e))
	}

	function kt(e) {
		e && e.dispatchConfig.registrationName && St(e._targetInst, null, e)
	}

	function Ot(e) {
		S(e, Lt)
	}

	function Tt() {
		return !0
	}

	function Et() {
		return !1
	}

	function xt(e, t, c, n) {
		for (var r in this.dispatchConfig = e, this._targetInst = t, this.nativeEvent = c, e = this.constructor.Interface) e.hasOwnProperty(r) && ((t = e[r]) ? this[r] = t(c) : "target" === r ? this.target = n : this[r] = c[r]);
		return this.isDefaultPrevented = (null != c.defaultPrevented ? c.defaultPrevented : !1 === c.returnValue) ? Tt : Et, this.isPropagationStopped = Et, this
	}

	function _t(e, t, c, n) {
		if (this.eventPool.length) {
			var r = this.eventPool.pop();
			return this.call(r, e, t, c, n), r
		}
		return new this(e, t, c, n)
	}

	function Pt(e) {
		if (!(e instanceof this)) throw o(Error(279));
		e.destructor(), 10 > this.eventPool.length && this.eventPool.push(e)
	}

	function At(e) {
		e.eventPool = [], e.getPooled = _t, e.release = Pt
	}

	r(xt.prototype, {
		preventDefault: function () {
			this.defaultPrevented = !0;
			var e = this.nativeEvent;
			e && (e.preventDefault ? e.preventDefault() : "unknown" !== typeof e.returnValue && (e.returnValue = !1), this.isDefaultPrevented = Tt)
		}, stopPropagation: function () {
			var e = this.nativeEvent;
			e && (e.stopPropagation ? e.stopPropagation() : "unknown" !== typeof e.cancelBubble && (e.cancelBubble = !0), this.isPropagationStopped = Tt)
		}, persist: function () {
			this.isPersistent = Tt
		}, isPersistent: Et, destructor: function () {
			var e, t = this.constructor.Interface;
			for (e in t) this[e] = null;
			this.nativeEvent = this._targetInst = this.dispatchConfig = null, this.isPropagationStopped = this.isDefaultPrevented = Et, this._dispatchInstances = this._dispatchListeners = null
		}
	}), xt.Interface = {
		type: null, target: null, currentTarget: function () {
			return null
		}, eventPhase: null, bubbles: null, cancelable: null, timeStamp: function (e) {
			return e.timeStamp || Date.now()
		}, defaultPrevented: null, isTrusted: null
	}, xt.extend = function (e) {
		function t() {
		}

		function c() {
			return n.apply(this, arguments)
		}

		var n = this;
		t.prototype = n.prototype;
		var l = new t;
		return r(l, c.prototype), c.prototype = l, c.prototype.constructor = c, c.Interface = r({}, n.Interface, e), c.extend = n.extend, At(c), c
	}, At(xt);
	var Ft = xt.extend({animationName: null, elapsedTime: null, pseudoElement: null}), Nt = xt.extend({
		clipboardData: function (e) {
			return "clipboardData" in e ? e.clipboardData : window.clipboardData
		}
	}), jt = xt.extend({view: null, detail: null}), Rt = jt.extend({relatedTarget: null});

	function Dt(e) {
		var t = e.keyCode;
		return "charCode" in e ? 0 === (e = e.charCode) && 13 === t && (e = 13) : e = t, 10 === e && (e = 13), 32 <= e || 13 === e ? e : 0
	}

	var It = {
		Esc: "Escape",
		Spacebar: " ",
		Left: "ArrowLeft",
		Up: "ArrowUp",
		Right: "ArrowRight",
		Down: "ArrowDown",
		Del: "Delete",
		Win: "OS",
		Menu: "ContextMenu",
		Apps: "ContextMenu",
		Scroll: "ScrollLock",
		MozPrintableKey: "Unidentified"
	}, Ut = {
		8: "Backspace",
		9: "Tab",
		12: "Clear",
		13: "Enter",
		16: "Shift",
		17: "Control",
		18: "Alt",
		19: "Pause",
		20: "CapsLock",
		27: "Escape",
		32: " ",
		33: "PageUp",
		34: "PageDown",
		35: "End",
		36: "Home",
		37: "ArrowLeft",
		38: "ArrowUp",
		39: "ArrowRight",
		40: "ArrowDown",
		45: "Insert",
		46: "Delete",
		112: "F1",
		113: "F2",
		114: "F3",
		115: "F4",
		116: "F5",
		117: "F6",
		118: "F7",
		119: "F8",
		120: "F9",
		121: "F10",
		122: "F11",
		123: "F12",
		144: "NumLock",
		145: "ScrollLock",
		224: "Meta"
	}, qt = {Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey"};

	function Bt(e) {
		var t = this.nativeEvent;
		return t.getModifierState ? t.getModifierState(e) : !!(e = qt[e]) && !!t[e]
	}

	function Wt() {
		return Bt
	}

	for (var Qt = jt.extend({
		key: function (e) {
			if (e.key) {
				var t = It[e.key] || e.key;
				if ("Unidentified" !== t) return t
			}
			return "keypress" === e.type ? 13 === (e = Dt(e)) ? "Enter" : String.fromCharCode(e) : "keydown" === e.type || "keyup" === e.type ? Ut[e.keyCode] || "Unidentified" : ""
		},
		location: null,
		ctrlKey: null,
		shiftKey: null,
		altKey: null,
		metaKey: null,
		repeat: null,
		locale: null,
		getModifierState: Wt,
		charCode: function (e) {
			return "keypress" === e.type ? Dt(e) : 0
		},
		keyCode: function (e) {
			return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0
		},
		which: function (e) {
			return "keypress" === e.type ? Dt(e) : "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0
		}
	}), Kt = 0, $t = 0, Gt = !1, Yt = !1, Zt = jt.extend({
		screenX: null,
		screenY: null,
		clientX: null,
		clientY: null,
		pageX: null,
		pageY: null,
		ctrlKey: null,
		shiftKey: null,
		altKey: null,
		metaKey: null,
		getModifierState: Wt,
		button: null,
		buttons: null,
		relatedTarget: function (e) {
			return e.relatedTarget || (e.fromElement === e.srcElement ? e.toElement : e.fromElement)
		},
		movementX: function (e) {
			if ("movementX" in e) return e.movementX;
			var t = Kt;
			return Kt = e.screenX, Gt ? "mousemove" === e.type ? e.screenX - t : 0 : (Gt = !0, 0)
		},
		movementY: function (e) {
			if ("movementY" in e) return e.movementY;
			var t = $t;
			return $t = e.screenY, Yt ? "mousemove" === e.type ? e.screenY - t : 0 : (Yt = !0, 0)
		}
	}), Xt = Zt.extend({
		pointerId: null,
		width: null,
		height: null,
		pressure: null,
		tangentialPressure: null,
		tiltX: null,
		tiltY: null,
		twist: null,
		pointerType: null,
		isPrimary: null
	}), Jt = Zt.extend({dataTransfer: null}), ec = jt.extend({
		touches: null,
		targetTouches: null,
		changedTouches: null,
		altKey: null,
		metaKey: null,
		ctrlKey: null,
		shiftKey: null,
		getModifierState: Wt
	}), tc = xt.extend({
		propertyName: null,
		elapsedTime: null,
		pseudoElement: null
	}), cc = Zt.extend({
		deltaX: function (e) {
			return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0
		}, deltaY: function (e) {
			return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0
		}, deltaZ: null, deltaMode: null
	}), nc = [["blur", "blur", 0], ["cancel", "cancel", 0], ["click", "click", 0], ["close", "close", 0], ["contextmenu", "contextMenu", 0], ["copy", "copy", 0], ["cut", "cut", 0], ["auxclick", "auxClick", 0], ["dblclick", "doubleClick", 0], ["dragend", "dragEnd", 0], ["dragstart", "dragStart", 0], ["drop", "drop", 0], ["focus", "focus", 0], ["input", "input", 0], ["invalid", "invalid", 0], ["keydown", "keyDown", 0], ["keypress", "keyPress", 0], ["keyup", "keyUp", 0], ["mousedown", "mouseDown", 0], ["mouseup", "mouseUp", 0], ["paste", "paste", 0], ["pause", "pause", 0], ["play", "play", 0], ["pointercancel", "pointerCancel", 0], ["pointerdown", "pointerDown", 0], ["pointerup", "pointerUp", 0], ["ratechange", "rateChange", 0], ["reset", "reset", 0], ["seeked", "seeked", 0], ["submit", "submit", 0], ["touchcancel", "touchCancel", 0], ["touchend", "touchEnd", 0], ["touchstart", "touchStart", 0], ["volumechange", "volumeChange", 0], ["drag", "drag", 1], ["dragenter", "dragEnter", 1], ["dragexit", "dragExit", 1], ["dragleave", "dragLeave", 1], ["dragover", "dragOver", 1], ["mousemove", "mouseMove", 1], ["mouseout", "mouseOut", 1], ["mouseover", "mouseOver", 1], ["pointermove", "pointerMove", 1], ["pointerout", "pointerOut", 1], ["pointerover", "pointerOver", 1], ["scroll", "scroll", 1], ["toggle", "toggle", 1], ["touchmove", "touchMove", 1], ["wheel", "wheel", 1], ["abort", "abort", 2], [Ge, "animationEnd", 2], [Ye, "animationIteration", 2], [Ze, "animationStart", 2], ["canplay", "canPlay", 2], ["canplaythrough", "canPlayThrough", 2], ["durationchange", "durationChange", 2], ["emptied", "emptied", 2], ["encrypted", "encrypted", 2], ["ended", "ended", 2], ["error", "error", 2], ["gotpointercapture", "gotPointerCapture", 2], ["load", "load", 2], ["loadeddata", "loadedData", 2], ["loadedmetadata", "loadedMetadata", 2], ["loadstart", "loadStart", 2], ["lostpointercapture", "lostPointerCapture", 2], ["playing", "playing", 2], ["progress", "progress", 2], ["seeking", "seeking", 2], ["stalled", "stalled", 2], ["suspend", "suspend", 2], ["timeupdate", "timeUpdate", 2], [Xe, "transitionEnd", 2], ["waiting", "waiting", 2]], rc = {}, lc = {}, oc = 0; oc < nc.length; oc++) {
		var ac = nc[oc], ic = ac[0], uc = ac[1], sc = ac[2], hc = "on" + (uc[0].toUpperCase() + uc.slice(1)), fc = {
			phasedRegistrationNames: {bubbled: hc, captured: hc + "Capture"},
			dependencies: [ic],
			eventPriority: sc
		};
		rc[uc] = fc, lc[ic] = fc
	}
	var vc = {
		eventTypes: rc, getEventPriority: function (e) {
			return void 0 !== (e = lc[e]) ? e.eventPriority : 2
		}, extractEvents: function (e, t, c, n) {
			var r = lc[e];
			if (!r) return null;
			switch (e) {
				case"keypress":
					if (0 === Dt(c)) return null;
				case"keydown":
				case"keyup":
					e = Qt;
					break;
				case"blur":
				case"focus":
					e = Rt;
					break;
				case"click":
					if (2 === c.button) return null;
				case"auxclick":
				case"dblclick":
				case"mousedown":
				case"mousemove":
				case"mouseup":
				case"mouseout":
				case"mouseover":
				case"contextmenu":
					e = Zt;
					break;
				case"drag":
				case"dragend":
				case"dragenter":
				case"dragexit":
				case"dragleave":
				case"dragover":
				case"dragstart":
				case"drop":
					e = Jt;
					break;
				case"touchcancel":
				case"touchend":
				case"touchmove":
				case"touchstart":
					e = ec;
					break;
				case Ge:
				case Ye:
				case Ze:
					e = Ft;
					break;
				case Xe:
					e = tc;
					break;
				case"scroll":
					e = jt;
					break;
				case"wheel":
					e = cc;
					break;
				case"copy":
				case"cut":
				case"paste":
					e = Nt;
					break;
				case"gotpointercapture":
				case"lostpointercapture":
				case"pointercancel":
				case"pointerdown":
				case"pointermove":
				case"pointerout":
				case"pointerover":
				case"pointerup":
					e = Xt;
					break;
				default:
					e = xt
			}
			return Ot(t = e.getPooled(r, t, c, n)), t
		}
	}, pc = vc.getEventPriority, dc = 10, mc = [];

	function zc(e) {
		var t = e.targetInst, c = t;
		do {
			if (!c) {
				e.ancestors.push(c);
				break
			}
			var n = c;
			if (3 === n.tag) n = n.stateNode.containerInfo; else {
				for (; n.return;) n = n.return;
				n = 3 !== n.tag ? null : n.stateNode.containerInfo
			}
			if (!n) break;
			5 !== (t = c.tag) && 6 !== t || e.ancestors.push(c), c = on(n)
		} while (c);
		for (c = 0; c < e.ancestors.length; c++) {
			t = e.ancestors[c];
			var r = Vt(e.nativeEvent);
			n = e.topLevelType;
			for (var l = e.nativeEvent, o = e.eventSystemFlags, a = null, i = 0; i < h.length; i++) {
				var u = h[i];
				u && (u = u.extractEvents(n, t, l, r, o)) && (a = L(a, u))
			}
			T(a)
		}
	}

	var yc = !0;

	function bc(e, t) {
		Mc(t, e, !1)
	}

	function Mc(e, t, c) {
		switch (pc(t)) {
			case 0:
				var n = gc.bind(null, t, 1);
				break;
			case 1:
				n = Hc.bind(null, t, 1);
				break;
			default:
				n = wc.bind(null, t, 1)
		}
		c ? e.addEventListener(t, n, !0) : e.addEventListener(t, n, !1)
	}

	function gc(e, t, c) {
		se || ie();
		var n = wc, r = se;
		se = !0;
		try {
			ae(n, e, t, c)
		} finally {
			(se = r) || fe()
		}
	}

	function Hc(e, t, c) {
		wc(e, t, c)
	}

	function Vc(e, t, c, n) {
		if (mc.length) {
			var r = mc.pop();
			r.topLevelType = e, r.eventSystemFlags = t, r.nativeEvent = c, r.targetInst = n, e = r
		} else e = {topLevelType: e, eventSystemFlags: t, nativeEvent: c, targetInst: n, ancestors: []};
		try {
			if (t = zc, c = e, he) t(c, void 0); else {
				he = !0;
				try {
					ue(t, c, void 0)
				} finally {
					he = !1, fe()
				}
			}
		} finally {
			e.topLevelType = null, e.nativeEvent = null, e.targetInst = null, e.ancestors.length = 0, mc.length < dc && mc.push(e)
		}
	}

	function wc(e, t, c) {
		if (yc) if (0 < tt.length && -1 < at.indexOf(e)) e = ut(null, e, t, c), tt.push(e); else {
			var n = Cc(e, t, c);
			null === n ? st(e, c) : -1 < at.indexOf(e) ? (e = ut(n, e, t, c), tt.push(e)) : function (e, t, c, n) {
				switch (t) {
					case"focus":
						return ct = ht(ct, e, t, c, n), !0;
					case"dragenter":
						return nt = ht(nt, e, t, c, n), !0;
					case"mouseover":
						return rt = ht(rt, e, t, c, n), !0;
					case"pointerover":
						var r = n.pointerId;
						return lt.set(r, ht(lt.get(r) || null, e, t, c, n)), !0;
					case"gotpointercapture":
						return r = n.pointerId, ot.set(r, ht(ot.get(r) || null, e, t, c, n)), !0
				}
				return !1
			}(n, e, t, c) || (st(e, c), Vc(e, t, c, null))
		}
	}

	function Cc(e, t, c) {
		var n = Vt(c), r = on(n);
		if (null !== r) if (null === (n = Mt(r))) r = null; else {
			var l = n.tag;
			if (13 === l) {
				if (null !== (n = 13 !== n.tag || (null === (r = n.memoizedState) && (null !== (n = n.alternate) && (r = n.memoizedState)), null === r) ? null : r.dehydrated)) return n;
				r = null
			} else if (3 === l) {
				if (n.stateNode.hydrate) return 3 === n.tag ? n.stateNode.containerInfo : null;
				r = null
			} else n !== r && (r = null)
		}
		return Vc(e, t, c, r), null
	}

	function Lc(e) {
		if (!J) return !1;
		var t = (e = "on" + e) in document;
		return t || ((t = document.createElement("div")).setAttribute(e, "return;"), t = "function" === typeof t[e]), t
	}

	var Sc = new ("function" === typeof WeakMap ? WeakMap : Map);

	function kc(e) {
		var t = Sc.get(e);
		return void 0 === t && (t = new Set, Sc.set(e, t)), t
	}

	function Oc(e, t, c) {
		if (!c.has(e)) {
			switch (e) {
				case"scroll":
					Mc(t, "scroll", !0);
					break;
				case"focus":
				case"blur":
					Mc(t, "focus", !0), Mc(t, "blur", !0), c.add("blur"), c.add("focus");
					break;
				case"cancel":
				case"close":
					Lc(e) && Mc(t, e, !0);
					break;
				case"invalid":
				case"submit":
				case"reset":
					break;
				default:
					-1 === Je.indexOf(e) && bc(e, t)
			}
			c.add(e)
		}
	}

	var Tc = {
		animationIterationCount: !0,
		borderImageOutset: !0,
		borderImageSlice: !0,
		borderImageWidth: !0,
		boxFlex: !0,
		boxFlexGroup: !0,
		boxOrdinalGroup: !0,
		columnCount: !0,
		columns: !0,
		flex: !0,
		flexGrow: !0,
		flexPositive: !0,
		flexShrink: !0,
		flexNegative: !0,
		flexOrder: !0,
		gridArea: !0,
		gridRow: !0,
		gridRowEnd: !0,
		gridRowSpan: !0,
		gridRowStart: !0,
		gridColumn: !0,
		gridColumnEnd: !0,
		gridColumnSpan: !0,
		gridColumnStart: !0,
		fontWeight: !0,
		lineClamp: !0,
		lineHeight: !0,
		opacity: !0,
		order: !0,
		orphans: !0,
		tabSize: !0,
		widows: !0,
		zIndex: !0,
		zoom: !0,
		fillOpacity: !0,
		floodOpacity: !0,
		stopOpacity: !0,
		strokeDasharray: !0,
		strokeDashoffset: !0,
		strokeMiterlimit: !0,
		strokeOpacity: !0,
		strokeWidth: !0
	}, Ec = ["Webkit", "ms", "Moz", "O"];

	function xc(e, t, c) {
		return null == t || "boolean" === typeof t || "" === t ? "" : c || "number" !== typeof t || 0 === t || Tc.hasOwnProperty(e) && Tc[e] ? ("" + t).trim() : t + "px"
	}

	function _c(e, t) {
		for (var c in e = e.style, t) if (t.hasOwnProperty(c)) {
			var n = 0 === c.indexOf("--"), r = xc(c, t[c], n);
			"float" === c && (c = "cssFloat"), n ? e.setProperty(c, r) : e[c] = r
		}
	}

	Object.keys(Tc).forEach((function (e) {
		Ec.forEach((function (t) {
			t = t + e.charAt(0).toUpperCase() + e.substring(1), Tc[t] = Tc[e]
		}))
	}));
	var Pc = r({menuitem: !0}, {
		area: !0,
		base: !0,
		br: !0,
		col: !0,
		embed: !0,
		hr: !0,
		img: !0,
		input: !0,
		keygen: !0,
		link: !0,
		meta: !0,
		param: !0,
		source: !0,
		track: !0,
		wbr: !0
	});

	function Ac(e, t) {
		if (t) {
			if (Pc[e] && (null != t.children || null != t.dangerouslySetInnerHTML)) throw o(Error(137), e, "");
			if (null != t.dangerouslySetInnerHTML) {
				if (null != t.children) throw o(Error(60));
				if (!("object" === typeof t.dangerouslySetInnerHTML && "__html" in t.dangerouslySetInnerHTML)) throw o(Error(61))
			}
			if (null != t.style && "object" !== typeof t.style) throw o(Error(62), "")
		}
	}

	function Fc(e, t) {
		if (-1 === e.indexOf("-")) return "string" === typeof t.is;
		switch (e) {
			case"annotation-xml":
			case"color-profile":
			case"font-face":
			case"font-face-src":
			case"font-face-uri":
			case"font-face-format":
			case"font-face-name":
			case"missing-glyph":
				return !1;
			default:
				return !0
		}
	}

	function Nc(e, t) {
		var c = kc(e = 9 === e.nodeType || 11 === e.nodeType ? e : e.ownerDocument);
		t = p[t];
		for (var n = 0; n < t.length; n++) Oc(t[n], e, c)
	}

	function jc() {
	}

	function Rc(e) {
		if ("undefined" === typeof(e = e || ("undefined" !== typeof document ? document : void 0))) return null;
		try {
			return e.activeElement || e.body
		} catch (t) {
			return e.body
		}
	}

	function Dc(e) {
		for (; e && e.firstChild;) e = e.firstChild;
		return e
	}

	function Ic(e, t) {
		var c, n = Dc(e);
		for (e = 0; n;) {
			if (3 === n.nodeType) {
				if (c = e + n.textContent.length, e <= t && c >= t) return {node: n, offset: t - e};
				e = c
			}
			e:{
				for (; n;) {
					if (n.nextSibling) {
						n = n.nextSibling;
						break e
					}
					n = n.parentNode
				}
				n = void 0
			}
			n = Dc(n)
		}
	}

	function Uc() {
		for (var e = window, t = Rc(); t instanceof e.HTMLIFrameElement;) {
			try {
				var c = "string" === typeof t.contentWindow.location.href
			} catch (n) {
				c = !1
			}
			if (!c) break;
			t = Rc((e = t.contentWindow).document)
		}
		return t
	}

	function qc(e) {
		var t = e && e.nodeName && e.nodeName.toLowerCase();
		return t && ("input" === t && ("text" === e.type || "search" === e.type || "tel" === e.type || "url" === e.type || "password" === e.type) || "textarea" === t || "true" === e.contentEditable)
	}

	var Bc = "$", Wc = "/$", Qc = "$?", Kc = "$!", $c = null, Gc = null;

	function Yc(e, t) {
		switch (e) {
			case"button":
			case"input":
			case"select":
			case"textarea":
				return !!t.autoFocus
		}
		return !1
	}

	function Zc(e, t) {
		return "textarea" === e || "option" === e || "noscript" === e || "string" === typeof t.children || "number" === typeof t.children || "object" === typeof t.dangerouslySetInnerHTML && null !== t.dangerouslySetInnerHTML && null != t.dangerouslySetInnerHTML.__html
	}

	var Xc = "function" === typeof setTimeout ? setTimeout : void 0,
		Jc = "function" === typeof clearTimeout ? clearTimeout : void 0;

	function en(e) {
		for (; null != e; e = e.nextSibling) {
			var t = e.nodeType;
			if (1 === t || 3 === t) break
		}
		return e
	}

	function tn(e) {
		e = e.previousSibling;
		for (var t = 0; e;) {
			if (8 === e.nodeType) {
				var c = e.data;
				if (c === Bc || c === Kc || c === Qc) {
					if (0 === t) return e;
					t--
				} else c === Wc && t++
			}
			e = e.previousSibling
		}
		return null
	}

	var cn = Math.random().toString(36).slice(2), nn = "__reactInternalInstance$" + cn,
		rn = "__reactEventHandlers$" + cn, ln = "__reactContainere$" + cn;

	function on(e) {
		var t = e[nn];
		if (t) return t;
		for (var c = e.parentNode; c;) {
			if (t = c[ln] || c[nn]) {
				if (c = t.alternate, null !== t.child || null !== c && null !== c.child) for (e = tn(e); null !== e;) {
					if (c = e[nn]) return c;
					e = tn(e)
				}
				return t
			}
			c = (e = c).parentNode
		}
		return null
	}

	function an(e) {
		return !(e = e[nn] || e[ln]) || 5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag ? null : e
	}

	function un(e) {
		if (5 === e.tag || 6 === e.tag) return e.stateNode;
		throw o(Error(33))
	}

	function sn(e) {
		return e[rn] || null
	}

	var hn = null, fn = null, vn = null;

	function pn() {
		if (vn) return vn;
		var e, t, c = fn, n = c.length, r = "value" in hn ? hn.value : hn.textContent, l = r.length;
		for (e = 0; e < n && c[e] === r[e]; e++) ;
		var o = n - e;
		for (t = 1; t <= o && c[n - t] === r[l - t]; t++) ;
		return vn = r.slice(e, 1 < t ? 1 - t : void 0)
	}

	var dn = xt.extend({data: null}), mn = xt.extend({data: null}), zn = [9, 13, 27, 32],
		yn = J && "CompositionEvent" in window, bn = null;
	J && "documentMode" in document && (bn = document.documentMode);
	var Mn = J && "TextEvent" in window && !bn, gn = J && (!yn || bn && 8 < bn && 11 >= bn),
		Hn = String.fromCharCode(32), Vn = {
			beforeInput: {
				phasedRegistrationNames: {bubbled: "onBeforeInput", captured: "onBeforeInputCapture"},
				dependencies: ["compositionend", "keypress", "textInput", "paste"]
			},
			compositionEnd: {
				phasedRegistrationNames: {bubbled: "onCompositionEnd", captured: "onCompositionEndCapture"},
				dependencies: "blur compositionend keydown keypress keyup mousedown".split(" ")
			},
			compositionStart: {
				phasedRegistrationNames: {
					bubbled: "onCompositionStart",
					captured: "onCompositionStartCapture"
				}, dependencies: "blur compositionstart keydown keypress keyup mousedown".split(" ")
			},
			compositionUpdate: {
				phasedRegistrationNames: {
					bubbled: "onCompositionUpdate",
					captured: "onCompositionUpdateCapture"
				}, dependencies: "blur compositionupdate keydown keypress keyup mousedown".split(" ")
			}
		}, wn = !1;

	function Cn(e, t) {
		switch (e) {
			case"keyup":
				return -1 !== zn.indexOf(t.keyCode);
			case"keydown":
				return 229 !== t.keyCode;
			case"keypress":
			case"mousedown":
			case"blur":
				return !0;
			default:
				return !1
		}
	}

	function Ln(e) {
		return "object" === typeof(e = e.detail) && "data" in e ? e.data : null
	}

	var Sn = !1;
	var kn = {
		eventTypes: Vn, extractEvents: function (e, t, c, n) {
			var r;
			if (yn) e:{
				switch (e) {
					case"compositionstart":
						var l = Vn.compositionStart;
						break e;
					case"compositionend":
						l = Vn.compositionEnd;
						break e;
					case"compositionupdate":
						l = Vn.compositionUpdate;
						break e
				}
				l = void 0
			} else Sn ? Cn(e, c) && (l = Vn.compositionEnd) : "keydown" === e && 229 === c.keyCode && (l = Vn.compositionStart);
			return l ? (gn && "ko" !== c.locale && (Sn || l !== Vn.compositionStart ? l === Vn.compositionEnd && Sn && (r = pn()) : (fn = "value" in (hn = n) ? hn.value : hn.textContent, Sn = !0)), l = dn.getPooled(l, t, c, n), r ? l.data = r : null !== (r = Ln(c)) && (l.data = r), Ot(l), r = l) : r = null, (e = Mn ? function (e, t) {
				switch (e) {
					case"compositionend":
						return Ln(t);
					case"keypress":
						return 32 !== t.which ? null : (wn = !0, Hn);
					case"textInput":
						return (e = t.data) === Hn && wn ? null : e;
					default:
						return null
				}
			}(e, c) : function (e, t) {
				if (Sn) return "compositionend" === e || !yn && Cn(e, t) ? (e = pn(), vn = fn = hn = null, Sn = !1, e) : null;
				switch (e) {
					case"paste":
						return null;
					case"keypress":
						if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
							if (t.char && 1 < t.char.length) return t.char;
							if (t.which) return String.fromCharCode(t.which)
						}
						return null;
					case"compositionend":
						return gn && "ko" !== t.locale ? null : t.data;
					default:
						return null
				}
			}(e, c)) ? ((t = mn.getPooled(Vn.beforeInput, t, c, n)).data = e, Ot(t)) : t = null, null === r ? t : null === t ? r : [r, t]
		}
	}, On = {
		color: !0,
		date: !0,
		datetime: !0,
		"datetime-local": !0,
		email: !0,
		month: !0,
		number: !0,
		password: !0,
		range: !0,
		search: !0,
		tel: !0,
		text: !0,
		time: !0,
		url: !0,
		week: !0
	};

	function Tn(e) {
		var t = e && e.nodeName && e.nodeName.toLowerCase();
		return "input" === t ? !!On[e.type] : "textarea" === t
	}

	var En = {
		change: {
			phasedRegistrationNames: {bubbled: "onChange", captured: "onChangeCapture"},
			dependencies: "blur change click focus input keydown keyup selectionchange".split(" ")
		}
	};

	function xn(e, t, c) {
		return (e = xt.getPooled(En.change, e, t, c)).type = "change", re(c), Ot(e), e
	}

	var _n = null, Pn = null;

	function An(e) {
		T(e)
	}

	function Fn(e) {
		if (Ce(un(e))) return e
	}

	function Nn(e, t) {
		if ("change" === e) return t
	}

	var jn = !1;

	function Rn() {
		_n && (_n.detachEvent("onpropertychange", Dn), Pn = _n = null)
	}

	function Dn(e) {
		if ("value" === e.propertyName && Fn(Pn)) if (e = xn(Pn, e, Vt(e)), se) T(e); else {
			se = !0;
			try {
				oe(An, e)
			} finally {
				se = !1, fe()
			}
		}
	}

	function In(e, t, c) {
		"focus" === e ? (Rn(), Pn = c, (_n = t).attachEvent("onpropertychange", Dn)) : "blur" === e && Rn()
	}

	function Un(e) {
		if ("selectionchange" === e || "keyup" === e || "keydown" === e) return Fn(Pn)
	}

	function qn(e, t) {
		if ("click" === e) return Fn(t)
	}

	function Bn(e, t) {
		if ("input" === e || "change" === e) return Fn(t)
	}

	J && (jn = Lc("input") && (!document.documentMode || 9 < document.documentMode));
	var Wn = {
		eventTypes: En, _isInputEventSupported: jn, extractEvents: function (e, t, c, n) {
			var r = t ? un(t) : window, l = r.nodeName && r.nodeName.toLowerCase();
			if ("select" === l || "input" === l && "file" === r.type) var o = Nn; else if (Tn(r)) if (jn) o = Bn; else {
				o = Un;
				var a = In
			} else (l = r.nodeName) && "input" === l.toLowerCase() && ("checkbox" === r.type || "radio" === r.type) && (o = qn);
			if (o && (o = o(e, t))) return xn(o, c, n);
			a && a(e, r, t), "blur" === e && (e = r._wrapperState) && e.controlled && "number" === r.type && Ee(r, "number", r.value)
		}
	}, Qn = {
		mouseEnter: {registrationName: "onMouseEnter", dependencies: ["mouseout", "mouseover"]},
		mouseLeave: {registrationName: "onMouseLeave", dependencies: ["mouseout", "mouseover"]},
		pointerEnter: {registrationName: "onPointerEnter", dependencies: ["pointerout", "pointerover"]},
		pointerLeave: {registrationName: "onPointerLeave", dependencies: ["pointerout", "pointerover"]}
	}, Kn = {
		eventTypes: Qn, extractEvents: function (e, t, c, n, r) {
			var l = "mouseover" === e || "pointerover" === e, o = "mouseout" === e || "pointerout" === e;
			if (l && 0 === (32 & r) && (c.relatedTarget || c.fromElement) || !o && !l) return null;
			if (r = n.window === n ? n : (r = n.ownerDocument) ? r.defaultView || r.parentWindow : window, o ? (o = t, null !== (t = (t = c.relatedTarget || c.toElement) ? on(t) : null) && (t !== (l = Mt(t)) || 5 !== t.tag && 6 !== t.tag) && (t = null)) : o = null, o === t) return null;
			if ("mouseout" === e || "mouseover" === e) var a = Zt, i = Qn.mouseLeave, u = Qn.mouseEnter,
				s = "mouse"; else "pointerout" !== e && "pointerover" !== e || (a = Xt, i = Qn.pointerLeave, u = Qn.pointerEnter, s = "pointer");
			if (e = null == o ? r : un(o), r = null == t ? r : un(t), (i = a.getPooled(i, o, c, n)).type = s + "leave", i.target = e, i.relatedTarget = r, (c = a.getPooled(u, t, c, n)).type = s + "enter", c.target = r, c.relatedTarget = e, s = t, (n = o) && s) e:{
				for (u = s, e = 0, o = a = n; o; o = wt(o)) e++;
				for (o = 0, t = u; t; t = wt(t)) o++;
				for (; 0 < e - o;) a = wt(a), e--;
				for (; 0 < o - e;) u = wt(u), o--;
				for (; e--;) {
					if (a === u || a === u.alternate) break e;
					a = wt(a), u = wt(u)
				}
				a = null
			} else a = null;
			for (u = a, a = []; n && n !== u && (null === (e = n.alternate) || e !== u);) a.push(n), n = wt(n);
			for (n = []; s && s !== u && (null === (e = s.alternate) || e !== u);) n.push(s), s = wt(s);
			for (s = 0; s < a.length; s++) St(a[s], "bubbled", i);
			for (s = n.length; 0 < s--;) St(n[s], "captured", c);
			return [i, c]
		}
	};
	var $n = "function" === typeof Object.is ? Object.is : function (e, t) {
		return e === t && (0 !== e || 1 / e === 1 / t) || e !== e && t !== t
	}, Gn = Object.prototype.hasOwnProperty;

	function Yn(e, t) {
		if ($n(e, t)) return !0;
		if ("object" !== typeof e || null === e || "object" !== typeof t || null === t) return !1;
		var c = Object.keys(e), n = Object.keys(t);
		if (c.length !== n.length) return !1;
		for (n = 0; n < c.length; n++) if (!Gn.call(t, c[n]) || !$n(e[c[n]], t[c[n]])) return !1;
		return !0
	}

	var Zn = J && "documentMode" in document && 11 >= document.documentMode, Xn = {
		select: {
			phasedRegistrationNames: {bubbled: "onSelect", captured: "onSelectCapture"},
			dependencies: "blur contextmenu dragend focus keydown keyup mousedown mouseup selectionchange".split(" ")
		}
	}, Jn = null, er = null, tr = null, cr = !1;

	function nr(e, t) {
		var c = t.window === t ? t.document : 9 === t.nodeType ? t : t.ownerDocument;
		return cr || null == Jn || Jn !== Rc(c) ? null : ("selectionStart" in (c = Jn) && qc(c) ? c = {
			start: c.selectionStart,
			end: c.selectionEnd
		} : c = {
			anchorNode: (c = (c.ownerDocument && c.ownerDocument.defaultView || window).getSelection()).anchorNode,
			anchorOffset: c.anchorOffset,
			focusNode: c.focusNode,
			focusOffset: c.focusOffset
		}, tr && Yn(tr, c) ? null : (tr = c, (e = xt.getPooled(Xn.select, er, e, t)).type = "select", e.target = Jn, Ot(e), e))
	}

	var rr = {
		eventTypes: Xn, extractEvents: function (e, t, c, n) {
			var r, l = n.window === n ? n.document : 9 === n.nodeType ? n : n.ownerDocument;
			if (!(r = !l)) {
				e:{
					l = kc(l), r = p.onSelect;
					for (var o = 0; o < r.length; o++) if (!l.has(r[o])) {
						l = !1;
						break e
					}
					l = !0
				}
				r = !l
			}
			if (r) return null;
			switch (l = t ? un(t) : window, e) {
				case"focus":
					(Tn(l) || "true" === l.contentEditable) && (Jn = l, er = t, tr = null);
					break;
				case"blur":
					tr = er = Jn = null;
					break;
				case"mousedown":
					cr = !0;
					break;
				case"contextmenu":
				case"mouseup":
				case"dragend":
					return cr = !1, nr(c, n);
				case"selectionchange":
					if (Zn) break;
				case"keydown":
				case"keyup":
					return nr(c, n)
			}
			return null
		}
	};
	E.injectEventPluginOrder("ResponderEventPlugin SimpleEventPlugin EnterLeaveEventPlugin ChangeEventPlugin SelectEventPlugin BeforeInputEventPlugin".split(" ")), H = sn, V = an, w = un, E.injectEventPluginsByName({
		SimpleEventPlugin: vc,
		EnterLeaveEventPlugin: Kn,
		ChangeEventPlugin: Wn,
		SelectEventPlugin: rr,
		BeforeInputEventPlugin: kn
	}), new Set;
	var lr = [], or = -1;

	function ar(e) {
		0 > or || (e.current = lr[or], lr[or] = null, or--)
	}

	function ir(e, t) {
		lr[++or] = e.current, e.current = t
	}

	var ur = {}, sr = {current: ur}, hr = {current: !1}, fr = ur;

	function vr(e, t) {
		var c = e.type.contextTypes;
		if (!c) return ur;
		var n = e.stateNode;
		if (n && n.__reactInternalMemoizedUnmaskedChildContext === t) return n.__reactInternalMemoizedMaskedChildContext;
		var r, l = {};
		for (r in c) l[r] = t[r];
		return n && ((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = l), l
	}

	function pr(e) {
		return null !== (e = e.childContextTypes) && void 0 !== e
	}

	function dr(e) {
		ar(hr), ar(sr)
	}

	function mr(e) {
		ar(hr), ar(sr)
	}

	function zr(e, t, c) {
		if (sr.current !== ur) throw o(Error(168));
		ir(sr, t), ir(hr, c)
	}

	function yr(e, t, c) {
		var n = e.stateNode;
		if (e = t.childContextTypes, "function" !== typeof n.getChildContext) return c;
		for (var l in n = n.getChildContext()) if (!(l in e)) throw o(Error(108), Z(t) || "Unknown", l);
		return r({}, c, {}, n)
	}

	function br(e) {
		var t = e.stateNode;
		return t = t && t.__reactInternalMemoizedMergedChildContext || ur, fr = sr.current, ir(sr, t), ir(hr, hr.current), !0
	}

	function Mr(e, t, c) {
		var n = e.stateNode;
		if (!n) throw o(Error(169));
		c ? (t = yr(e, t, fr), n.__reactInternalMemoizedMergedChildContext = t, ar(hr), ar(sr), ir(sr, t)) : ar(hr), ir(hr, c)
	}

	var gr = l.unstable_runWithPriority, Hr = l.unstable_scheduleCallback, Vr = l.unstable_cancelCallback,
		wr = l.unstable_shouldYield, Cr = l.unstable_requestPaint, Lr = l.unstable_now,
		Sr = l.unstable_getCurrentPriorityLevel, kr = l.unstable_ImmediatePriority,
		Or = l.unstable_UserBlockingPriority, Tr = l.unstable_NormalPriority, Er = l.unstable_LowPriority,
		xr = l.unstable_IdlePriority, _r = {}, Pr = void 0 !== Cr ? Cr : function () {
		}, Ar = null, Fr = null, Nr = !1, jr = Lr(), Rr = 1e4 > jr ? Lr : function () {
			return Lr() - jr
		};

	function Dr() {
		switch (Sr()) {
			case kr:
				return 99;
			case Or:
				return 98;
			case Tr:
				return 97;
			case Er:
				return 96;
			case xr:
				return 95;
			default:
				throw o(Error(332))
		}
	}

	function Ir(e) {
		switch (e) {
			case 99:
				return kr;
			case 98:
				return Or;
			case 97:
				return Tr;
			case 96:
				return Er;
			case 95:
				return xr;
			default:
				throw o(Error(332))
		}
	}

	function Ur(e, t) {
		return e = Ir(e), gr(e, t)
	}

	function qr(e, t, c) {
		return e = Ir(e), Hr(e, t, c)
	}

	function Br(e) {
		return null === Ar ? (Ar = [e], Fr = Hr(kr, Qr)) : Ar.push(e), _r
	}

	function Wr() {
		if (null !== Fr) {
			var e = Fr;
			Fr = null, Vr(e)
		}
		Qr()
	}

	function Qr() {
		if (!Nr && null !== Ar) {
			Nr = !0;
			var e = 0;
			try {
				var t = Ar;
				Ur(99, (function () {
					for (; e < t.length; e++) {
						var c = t[e];
						do {
							c = c(!0)
						} while (null !== c)
					}
				})), Ar = null
			} catch (c) {
				throw null !== Ar && (Ar = Ar.slice(e + 1)), Hr(kr, Wr), c
			} finally {
				Nr = !1
			}
		}
	}

	function Kr(e, t) {
		if (e && e.defaultProps) for (var c in t = r({}, t), e = e.defaultProps) void 0 === t[c] && (t[c] = e[c]);
		return t
	}

	var $r = {current: null}, Gr = null, Yr = null, Zr = null;

	function Xr() {
		Zr = Yr = Gr = null
	}

	function Jr(e, t) {
		var c = e.type._context;
		ir($r, c._currentValue), c._currentValue = t
	}

	function el(e) {
		var t = $r.current;
		ar($r), e.type._context._currentValue = t
	}

	function tl(e, t) {
		for (; null !== e;) {
			var c = e.alternate;
			if (e.childExpirationTime < t) e.childExpirationTime = t, null !== c && c.childExpirationTime < t && (c.childExpirationTime = t); else {
				if (!(null !== c && c.childExpirationTime < t)) break;
				c.childExpirationTime = t
			}
			e = e.return
		}
	}

	function cl(e, t) {
		Gr = e, Zr = Yr = null, null !== (e = e.dependencies) && null !== e.firstContext && (e.expirationTime >= t && (To = !0), e.firstContext = null)
	}

	function nl(e, t) {
		if (Zr !== e && !1 !== t && 0 !== t) if ("number" === typeof t && 1073741823 !== t || (Zr = e, t = 1073741823), t = {
				context: e,
				observedBits: t,
				next: null
			}, null === Yr) {
			if (null === Gr) throw o(Error(308));
			Yr = t, Gr.dependencies = {expirationTime: 0, firstContext: t, responders: null}
		} else Yr = Yr.next = t;
		return e._currentValue
	}

	var rl = !1;

	function ll(e) {
		return {
			baseState: e,
			firstUpdate: null,
			lastUpdate: null,
			firstCapturedUpdate: null,
			lastCapturedUpdate: null,
			firstEffect: null,
			lastEffect: null,
			firstCapturedEffect: null,
			lastCapturedEffect: null
		}
	}

	function ol(e) {
		return {
			baseState: e.baseState,
			firstUpdate: e.firstUpdate,
			lastUpdate: e.lastUpdate,
			firstCapturedUpdate: null,
			lastCapturedUpdate: null,
			firstEffect: null,
			lastEffect: null,
			firstCapturedEffect: null,
			lastCapturedEffect: null
		}
	}

	function al(e, t) {
		return {
			expirationTime: e,
			suspenseConfig: t,
			tag: 0,
			payload: null,
			callback: null,
			next: null,
			nextEffect: null
		}
	}

	function il(e, t) {
		null === e.lastUpdate ? e.firstUpdate = e.lastUpdate = t : (e.lastUpdate.next = t, e.lastUpdate = t)
	}

	function ul(e, t) {
		var c = e.alternate;
		if (null === c) {
			var n = e.updateQueue, r = null;
			null === n && (n = e.updateQueue = ll(e.memoizedState))
		} else n = e.updateQueue, r = c.updateQueue, null === n ? null === r ? (n = e.updateQueue = ll(e.memoizedState), r = c.updateQueue = ll(c.memoizedState)) : n = e.updateQueue = ol(r) : null === r && (r = c.updateQueue = ol(n));
		null === r || n === r ? il(n, t) : null === n.lastUpdate || null === r.lastUpdate ? (il(n, t), il(r, t)) : (il(n, t), r.lastUpdate = t)
	}

	function sl(e, t) {
		var c = e.updateQueue;
		null === (c = null === c ? e.updateQueue = ll(e.memoizedState) : hl(e, c)).lastCapturedUpdate ? c.firstCapturedUpdate = c.lastCapturedUpdate = t : (c.lastCapturedUpdate.next = t, c.lastCapturedUpdate = t)
	}

	function hl(e, t) {
		var c = e.alternate;
		return null !== c && t === c.updateQueue && (t = e.updateQueue = ol(t)), t
	}

	function fl(e, t, c, n, l, o) {
		switch (c.tag) {
			case 1:
				return "function" === typeof(e = c.payload) ? e.call(o, n, l) : e;
			case 3:
				e.effectTag = -4097 & e.effectTag | 64;
			case 0:
				if (null === (l = "function" === typeof(e = c.payload) ? e.call(o, n, l) : e) || void 0 === l) break;
				return r({}, n, l);
			case 2:
				rl = !0
		}
		return n
	}

	function vl(e, t, c, n, r) {
		rl = !1;
		for (var l = (t = hl(e, t)).baseState, o = null, a = 0, i = t.firstUpdate, u = l; null !== i;) {
			var s = i.expirationTime;
			s < r ? (null === o && (o = i, l = u), a < s && (a = s)) : (mi(s, i.suspenseConfig), u = fl(e, 0, i, u, c, n), null !== i.callback && (e.effectTag |= 32, i.nextEffect = null, null === t.lastEffect ? t.firstEffect = t.lastEffect = i : (t.lastEffect.nextEffect = i, t.lastEffect = i))), i = i.next
		}
		for (s = null, i = t.firstCapturedUpdate; null !== i;) {
			var h = i.expirationTime;
			h < r ? (null === s && (s = i, null === o && (l = u)), a < h && (a = h)) : (u = fl(e, 0, i, u, c, n), null !== i.callback && (e.effectTag |= 32, i.nextEffect = null, null === t.lastCapturedEffect ? t.firstCapturedEffect = t.lastCapturedEffect = i : (t.lastCapturedEffect.nextEffect = i, t.lastCapturedEffect = i))), i = i.next
		}
		null === o && (t.lastUpdate = null), null === s ? t.lastCapturedUpdate = null : e.effectTag |= 32, null === o && null === s && (l = u), t.baseState = l, t.firstUpdate = o, t.firstCapturedUpdate = s, zi(a), e.expirationTime = a, e.memoizedState = u
	}

	function pl(e, t, c) {
		null !== t.firstCapturedUpdate && (null !== t.lastUpdate && (t.lastUpdate.next = t.firstCapturedUpdate, t.lastUpdate = t.lastCapturedUpdate), t.firstCapturedUpdate = t.lastCapturedUpdate = null), dl(t.firstEffect, c), t.firstEffect = t.lastEffect = null, dl(t.firstCapturedEffect, c), t.firstCapturedEffect = t.lastCapturedEffect = null
	}

	function dl(e, t) {
		for (; null !== e;) {
			var c = e.callback;
			if (null !== c) {
				e.callback = null;
				var n = t;
				if ("function" !== typeof c) throw o(Error(191), c);
				c.call(n)
			}
			e = e.nextEffect
		}
	}

	var ml = _.ReactCurrentBatchConfig, zl = (new n.Component).refs;

	function yl(e, t, c, n) {
		c = null === (c = c(n, t = e.memoizedState)) || void 0 === c ? t : r({}, t, c), e.memoizedState = c, null !== (n = e.updateQueue) && 0 === e.expirationTime && (n.baseState = c)
	}

	var bl = {
		isMounted: function (e) {
			return !!(e = e._reactInternalFiber) && Mt(e) === e
		}, enqueueSetState: function (e, t, c) {
			e = e._reactInternalFiber;
			var n = Xa(), r = ml.suspense;
			(r = al(n = Ja(n, e, r), r)).payload = t, void 0 !== c && null !== c && (r.callback = c), ul(e, r), ci(e, n)
		}, enqueueReplaceState: function (e, t, c) {
			e = e._reactInternalFiber;
			var n = Xa(), r = ml.suspense;
			(r = al(n = Ja(n, e, r), r)).tag = 1, r.payload = t, void 0 !== c && null !== c && (r.callback = c), ul(e, r), ci(e, n)
		}, enqueueForceUpdate: function (e, t) {
			e = e._reactInternalFiber;
			var c = Xa(), n = ml.suspense;
			(n = al(c = Ja(c, e, n), n)).tag = 2, void 0 !== t && null !== t && (n.callback = t), ul(e, n), ci(e, c)
		}
	};

	function Ml(e, t, c, n, r, l, o) {
		return "function" === typeof(e = e.stateNode).shouldComponentUpdate ? e.shouldComponentUpdate(n, l, o) : !t.prototype || !t.prototype.isPureReactComponent || (!Yn(c, n) || !Yn(r, l))
	}

	function gl(e, t, c) {
		var n = !1, r = ur, l = t.contextType;
		return "object" === typeof l && null !== l ? l = nl(l) : (r = pr(t) ? fr : sr.current, l = (n = null !== (n = t.contextTypes) && void 0 !== n) ? vr(e, r) : ur), t = new t(c, l), e.memoizedState = null !== t.state && void 0 !== t.state ? t.state : null, t.updater = bl, e.stateNode = t, t._reactInternalFiber = e, n && ((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = r, e.__reactInternalMemoizedMaskedChildContext = l), t
	}

	function Hl(e, t, c, n) {
		e = t.state, "function" === typeof t.componentWillReceiveProps && t.componentWillReceiveProps(c, n), "function" === typeof t.UNSAFE_componentWillReceiveProps && t.UNSAFE_componentWillReceiveProps(c, n), t.state !== e && bl.enqueueReplaceState(t, t.state, null)
	}

	function Vl(e, t, c, n) {
		var r = e.stateNode;
		r.props = c, r.state = e.memoizedState, r.refs = zl;
		var l = t.contextType;
		"object" === typeof l && null !== l ? r.context = nl(l) : (l = pr(t) ? fr : sr.current, r.context = vr(e, l)), null !== (l = e.updateQueue) && (vl(e, l, c, r, n), r.state = e.memoizedState), "function" === typeof(l = t.getDerivedStateFromProps) && (yl(e, t, l, c), r.state = e.memoizedState), "function" === typeof t.getDerivedStateFromProps || "function" === typeof r.getSnapshotBeforeUpdate || "function" !== typeof r.UNSAFE_componentWillMount && "function" !== typeof r.componentWillMount || (t = r.state, "function" === typeof r.componentWillMount && r.componentWillMount(), "function" === typeof r.UNSAFE_componentWillMount && r.UNSAFE_componentWillMount(), t !== r.state && bl.enqueueReplaceState(r, r.state, null), null !== (l = e.updateQueue) && (vl(e, l, c, r, n), r.state = e.memoizedState)), "function" === typeof r.componentDidMount && (e.effectTag |= 4)
	}

	var wl = Array.isArray;

	function Cl(e, t, c) {
		if (null !== (e = c.ref) && "function" !== typeof e && "object" !== typeof e) {
			if (c._owner) {
				if (c = c._owner) {
					if (1 !== c.tag) throw o(Error(309));
					var n = c.stateNode
				}
				if (!n) throw o(Error(147), e);
				var r = "" + e;
				return null !== t && null !== t.ref && "function" === typeof t.ref && t.ref._stringRef === r ? t.ref : ((t = function (e) {
					var t = n.refs;
					t === zl && (t = n.refs = {}), null === e ? delete t[r] : t[r] = e
				})._stringRef = r, t)
			}
			if ("string" !== typeof e) throw o(Error(284));
			if (!c._owner) throw o(Error(290), e)
		}
		return e
	}

	function Ll(e, t) {
		if ("textarea" !== e.type) throw o(Error(31), "[object Object]" === Object.prototype.toString.call(t) ? "object with keys {" + Object.keys(t).join(", ") + "}" : t, "")
	}

	function Sl(e) {
		function t(t, c) {
			if (e) {
				var n = t.lastEffect;
				null !== n ? (n.nextEffect = c, t.lastEffect = c) : t.firstEffect = t.lastEffect = c, c.nextEffect = null, c.effectTag = 8
			}
		}

		function c(c, n) {
			if (!e) return null;
			for (; null !== n;) t(c, n), n = n.sibling;
			return null
		}

		function n(e, t) {
			for (e = new Map; null !== t;) null !== t.key ? e.set(t.key, t) : e.set(t.index, t), t = t.sibling;
			return e
		}

		function r(e, t, c) {
			return (e = Ni(e, t)).index = 0, e.sibling = null, e
		}

		function l(t, c, n) {
			return t.index = n, e ? null !== (n = t.alternate) ? (n = n.index) < c ? (t.effectTag = yt, c) : n : (t.effectTag = yt, c) : c
		}

		function a(t) {
			return e && null === t.alternate && (t.effectTag = yt), t
		}

		function i(e, t, c, n) {
			return null === t || 6 !== t.tag ? ((t = Di(c, e.mode, n)).return = e, t) : ((t = r(t, c)).return = e, t)
		}

		function u(e, t, c, n) {
			return null !== t && t.elementType === c.type ? ((n = r(t, c.props)).ref = Cl(e, t, c), n.return = e, n) : ((n = ji(c.type, c.key, c.props, null, e.mode, n)).ref = Cl(e, t, c), n.return = e, n)
		}

		function s(e, t, c, n) {
			return null === t || 4 !== t.tag || t.stateNode.containerInfo !== c.containerInfo || t.stateNode.implementation !== c.implementation ? ((t = Ii(c, e.mode, n)).return = e, t) : ((t = r(t, c.children || [])).return = e, t)
		}

		function h(e, t, c, n, l) {
			return null === t || 7 !== t.tag ? ((t = Ri(c, e.mode, n, l)).return = e, t) : ((t = r(t, c)).return = e, t)
		}

		function f(e, t, c) {
			if ("string" === typeof t || "number" === typeof t) return (t = Di("" + t, e.mode, c)).return = e, t;
			if ("object" === typeof t && null !== t) {
				switch (t.$$typeof) {
					case F:
						return (c = ji(t.type, t.key, t.props, null, e.mode, c)).ref = Cl(e, null, t), c.return = e, c;
					case N:
						return (t = Ii(t, e.mode, c)).return = e, t
				}
				if (wl(t) || Y(t)) return (t = Ri(t, e.mode, c, null)).return = e, t;
				Ll(e, t)
			}
			return null
		}

		function v(e, t, c, n) {
			var r = null !== t ? t.key : null;
			if ("string" === typeof c || "number" === typeof c) return null !== r ? null : i(e, t, "" + c, n);
			if ("object" === typeof c && null !== c) {
				switch (c.$$typeof) {
					case F:
						return c.key === r ? c.type === j ? h(e, t, c.props.children, n, r) : u(e, t, c, n) : null;
					case N:
						return c.key === r ? s(e, t, c, n) : null
				}
				if (wl(c) || Y(c)) return null !== r ? null : h(e, t, c, n, null);
				Ll(e, c)
			}
			return null
		}

		function p(e, t, c, n, r) {
			if ("string" === typeof n || "number" === typeof n) return i(t, e = e.get(c) || null, "" + n, r);
			if ("object" === typeof n && null !== n) {
				switch (n.$$typeof) {
					case F:
						return e = e.get(null === n.key ? c : n.key) || null, n.type === j ? h(t, e, n.props.children, r, n.key) : u(t, e, n, r);
					case N:
						return s(t, e = e.get(null === n.key ? c : n.key) || null, n, r)
				}
				if (wl(n) || Y(n)) return h(t, e = e.get(c) || null, n, r, null);
				Ll(t, n)
			}
			return null
		}

		function d(r, o, a, i) {
			for (var u = null, s = null, h = o, d = o = 0, m = null; null !== h && d < a.length; d++) {
				h.index > d ? (m = h, h = null) : m = h.sibling;
				var z = v(r, h, a[d], i);
				if (null === z) {
					null === h && (h = m);
					break
				}
				e && h && null === z.alternate && t(r, h), o = l(z, o, d), null === s ? u = z : s.sibling = z, s = z, h = m
			}
			if (d === a.length) return c(r, h), u;
			if (null === h) {
				for (; d < a.length; d++) null !== (h = f(r, a[d], i)) && (o = l(h, o, d), null === s ? u = h : s.sibling = h, s = h);
				return u
			}
			for (h = n(r, h); d < a.length; d++) null !== (m = p(h, r, d, a[d], i)) && (e && null !== m.alternate && h.delete(null === m.key ? d : m.key), o = l(m, o, d), null === s ? u = m : s.sibling = m, s = m);
			return e && h.forEach((function (e) {
				return t(r, e)
			})), u
		}

		function m(r, a, i, u) {
			var s = Y(i);
			if ("function" !== typeof s) throw o(Error(150));
			if (null == (i = s.call(i))) throw o(Error(151));
			for (var h = s = null, d = a, m = a = 0, z = null, y = i.next(); null !== d && !y.done; m++, y = i.next()) {
				d.index > m ? (z = d, d = null) : z = d.sibling;
				var b = v(r, d, y.value, u);
				if (null === b) {
					null === d && (d = z);
					break
				}
				e && d && null === b.alternate && t(r, d), a = l(b, a, m), null === h ? s = b : h.sibling = b, h = b, d = z
			}
			if (y.done) return c(r, d), s;
			if (null === d) {
				for (; !y.done; m++, y = i.next()) null !== (y = f(r, y.value, u)) && (a = l(y, a, m), null === h ? s = y : h.sibling = y, h = y);
				return s
			}
			for (d = n(r, d); !y.done; m++, y = i.next()) null !== (y = p(d, r, m, y.value, u)) && (e && null !== y.alternate && d.delete(null === y.key ? m : y.key), a = l(y, a, m), null === h ? s = y : h.sibling = y, h = y);
			return e && d.forEach((function (e) {
				return t(r, e)
			})), s
		}

		return function (e, n, l, i) {
			var u = "object" === typeof l && null !== l && l.type === j && null === l.key;
			u && (l = l.props.children);
			var s = "object" === typeof l && null !== l;
			if (s) switch (l.$$typeof) {
				case F:
					e:{
						for (s = l.key, u = n; null !== u;) {
							if (u.key === s) {
								if (7 === u.tag ? l.type === j : u.elementType === l.type) {
									c(e, u.sibling), (n = r(u, l.type === j ? l.props.children : l.props)).ref = Cl(e, u, l), n.return = e, e = n;
									break e
								}
								c(e, u);
								break
							}
							t(e, u), u = u.sibling
						}
						l.type === j ? ((n = Ri(l.props.children, e.mode, i, l.key)).return = e, e = n) : ((i = ji(l.type, l.key, l.props, null, e.mode, i)).ref = Cl(e, n, l), i.return = e, e = i)
					}
					return a(e);
				case N:
					e:{
						for (u = l.key; null !== n;) {
							if (n.key === u) {
								if (4 === n.tag && n.stateNode.containerInfo === l.containerInfo && n.stateNode.implementation === l.implementation) {
									c(e, n.sibling), (n = r(n, l.children || [])).return = e, e = n;
									break e
								}
								c(e, n);
								break
							}
							t(e, n), n = n.sibling
						}
						(n = Ii(l, e.mode, i)).return = e, e = n
					}
					return a(e)
			}
			if ("string" === typeof l || "number" === typeof l) return l = "" + l, null !== n && 6 === n.tag ? (c(e, n.sibling), (n = r(n, l)).return = e, e = n) : (c(e, n), (n = Di(l, e.mode, i)).return = e, e = n), a(e);
			if (wl(l)) return d(e, n, l, i);
			if (Y(l)) return m(e, n, l, i);
			if (s && Ll(e, l), "undefined" === typeof l && !u) switch (e.tag) {
				case 1:
				case 0:
					throw e = e.type, o(Error(152), e.displayName || e.name || "Component")
			}
			return c(e, n)
		}
	}

	var kl = Sl(!0), Ol = Sl(!1), Tl = {}, El = {current: Tl}, xl = {current: Tl}, _l = {current: Tl};

	function Pl(e) {
		if (e === Tl) throw o(Error(174));
		return e
	}

	function Al(e, t) {
		ir(_l, t), ir(xl, e), ir(El, Tl);
		var c = t.nodeType;
		switch (c) {
			case 9:
			case 11:
				t = (t = t.documentElement) ? t.namespaceURI : De(null, "");
				break;
			default:
				t = De(t = (c = 8 === c ? t.parentNode : t).namespaceURI || null, c = c.tagName)
		}
		ar(El), ir(El, t)
	}

	function Fl(e) {
		ar(El), ar(xl), ar(_l)
	}

	function Nl(e) {
		Pl(_l.current);
		var t = Pl(El.current), c = De(t, e.type);
		t !== c && (ir(xl, e), ir(El, c))
	}

	function jl(e) {
		xl.current === e && (ar(El), ar(xl))
	}

	var Rl = {current: 0};

	function Dl(e) {
		for (var t = e; null !== t;) {
			if (13 === t.tag) {
				var c = t.memoizedState;
				if (null !== c && (null === (c = c.dehydrated) || c.data === Qc || c.data === Kc)) return t
			} else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
				if ((64 & t.effectTag) !== zt) return t
			} else if (null !== t.child) {
				t.child.return = t, t = t.child;
				continue
			}
			if (t === e) break;
			for (; null === t.sibling;) {
				if (null === t.return || t.return === e) return null;
				t = t.return
			}
			t.sibling.return = t.return, t = t.sibling
		}
		return null
	}

	function Il(e, t) {
		return {responder: e, props: t}
	}

	var Ul = _.ReactCurrentDispatcher, ql = 0, Bl = null, Wl = null, Ql = null, Kl = null, $l = null, Gl = null, Yl = 0,
		Zl = null, Xl = 0, Jl = !1, eo = null, to = 0;

	function co() {
		throw o(Error(321))
	}

	function no(e, t) {
		if (null === t) return !1;
		for (var c = 0; c < t.length && c < e.length; c++) if (!$n(e[c], t[c])) return !1;
		return !0
	}

	function ro(e, t, c, n, r, l) {
		if (ql = l, Bl = t, Ql = null !== e ? e.memoizedState : null, Ul.current = null === Ql ? yo : bo, t = c(n, r), Jl) {
			do {
				Jl = !1, to += 1, Ql = null !== e ? e.memoizedState : null, Gl = Kl, Zl = $l = Wl = null, Ul.current = bo, t = c(n, r)
			} while (Jl);
			eo = null, to = 0
		}
		if (Ul.current = zo, (e = Bl).memoizedState = Kl, e.expirationTime = Yl, e.updateQueue = Zl, e.effectTag |= Xl, e = null !== Wl && null !== Wl.next, ql = 0, Gl = $l = Kl = Ql = Wl = Bl = null, Yl = 0, Zl = null, Xl = 0, e) throw o(Error(300));
		return t
	}

	function lo() {
		Ul.current = zo, ql = 0, Gl = $l = Kl = Ql = Wl = Bl = null, Yl = 0, Zl = null, Xl = 0, Jl = !1, eo = null, to = 0
	}

	function oo() {
		var e = {memoizedState: null, baseState: null, queue: null, baseUpdate: null, next: null};
		return null === $l ? Kl = $l = e : $l = $l.next = e, $l
	}

	function ao() {
		if (null !== Gl) Gl = ($l = Gl).next, Ql = null !== (Wl = Ql) ? Wl.next : null; else {
			if (null === Ql) throw o(Error(310));
			var e = {
				memoizedState: (Wl = Ql).memoizedState,
				baseState: Wl.baseState,
				queue: Wl.queue,
				baseUpdate: Wl.baseUpdate,
				next: null
			};
			$l = null === $l ? Kl = e : $l.next = e, Ql = Wl.next
		}
		return $l
	}

	function io(e, t) {
		return "function" === typeof t ? t(e) : t
	}

	function uo(e) {
		var t = ao(), c = t.queue;
		if (null === c) throw o(Error(311));
		if (c.lastRenderedReducer = e, 0 < to) {
			var n = c.dispatch;
			if (null !== eo) {
				var r = eo.get(c);
				if (void 0 !== r) {
					eo.delete(c);
					var l = t.memoizedState;
					do {
						l = e(l, r.action), r = r.next
					} while (null !== r);
					return $n(l, t.memoizedState) || (To = !0), t.memoizedState = l, t.baseUpdate === c.last && (t.baseState = l), c.lastRenderedState = l, [l, n]
				}
			}
			return [t.memoizedState, n]
		}
		n = c.last;
		var a = t.baseUpdate;
		if (l = t.baseState, null !== a ? (null !== n && (n.next = null), n = a.next) : n = null !== n ? n.next : null, null !== n) {
			var i = r = null, u = n, s = !1;
			do {
				var h = u.expirationTime;
				h < ql ? (s || (s = !0, i = a, r = l), h > Yl && zi(Yl = h)) : (mi(h, u.suspenseConfig), l = u.eagerReducer === e ? u.eagerState : e(l, u.action)), a = u, u = u.next
			} while (null !== u && u !== n);
			s || (i = a, r = l), $n(l, t.memoizedState) || (To = !0), t.memoizedState = l, t.baseUpdate = i, t.baseState = r, c.lastRenderedState = l
		}
		return [t.memoizedState, c.dispatch]
	}

	function so(e, t, c, n) {
		return e = {
			tag: e,
			create: t,
			destroy: c,
			deps: n,
			next: null
		}, null === Zl ? (Zl = {lastEffect: null}).lastEffect = e.next = e : null === (t = Zl.lastEffect) ? Zl.lastEffect = e.next = e : (c = t.next, t.next = e, e.next = c, Zl.lastEffect = e), e
	}

	function ho(e, t, c, n) {
		var r = oo();
		Xl |= e, r.memoizedState = so(t, c, void 0, void 0 === n ? null : n)
	}

	function fo(e, t, c, n) {
		var r = ao();
		n = void 0 === n ? null : n;
		var l = void 0;
		if (null !== Wl) {
			var o = Wl.memoizedState;
			if (l = o.destroy, null !== n && no(n, o.deps)) return void so(0, c, l, n)
		}
		Xl |= e, r.memoizedState = so(t, c, l, n)
	}

	function vo(e, t) {
		return "function" === typeof t ? (e = e(), t(e), function () {
			t(null)
		}) : null !== t && void 0 !== t ? (e = e(), t.current = e, function () {
			t.current = null
		}) : void 0
	}

	function po() {
	}

	function mo(e, t, c) {
		if (!(25 > to)) throw o(Error(301));
		var n = e.alternate;
		if (e === Bl || null !== n && n === Bl) if (Jl = !0, e = {
				expirationTime: ql,
				suspenseConfig: null,
				action: c,
				eagerReducer: null,
				eagerState: null,
				next: null
			}, null === eo && (eo = new Map), void 0 === (c = eo.get(t))) eo.set(t, e); else {
			for (t = c; null !== t.next;) t = t.next;
			t.next = e
		} else {
			var r = Xa(), l = ml.suspense;
			l = {
				expirationTime: r = Ja(r, e, l),
				suspenseConfig: l,
				action: c,
				eagerReducer: null,
				eagerState: null,
				next: null
			};
			var a = t.last;
			if (null === a) l.next = l; else {
				var i = a.next;
				null !== i && (l.next = i), a.next = l
			}
			if (t.last = l, 0 === e.expirationTime && (null === n || 0 === n.expirationTime) && null !== (n = t.lastRenderedReducer)) try {
				var u = t.lastRenderedState, s = n(u, c);
				if (l.eagerReducer = n, l.eagerState = s, $n(s, u)) return
			} catch (h) {
			}
			ci(e, r)
		}
	}

	var zo = {
		readContext: nl,
		useCallback: co,
		useContext: co,
		useEffect: co,
		useImperativeHandle: co,
		useLayoutEffect: co,
		useMemo: co,
		useReducer: co,
		useRef: co,
		useState: co,
		useDebugValue: co,
		useResponder: co
	}, yo = {
		readContext: nl, useCallback: function (e, t) {
			return oo().memoizedState = [e, void 0 === t ? null : t], e
		}, useContext: nl, useEffect: function (e, t) {
			return ho(516, 192, e, t)
		}, useImperativeHandle: function (e, t, c) {
			return c = null !== c && void 0 !== c ? c.concat([e]) : null, ho(4, 36, vo.bind(null, t, e), c)
		}, useLayoutEffect: function (e, t) {
			return ho(4, 36, e, t)
		}, useMemo: function (e, t) {
			var c = oo();
			return t = void 0 === t ? null : t, e = e(), c.memoizedState = [e, t], e
		}, useReducer: function (e, t, c) {
			var n = oo();
			return t = void 0 !== c ? c(t) : t, n.memoizedState = n.baseState = t, e = (e = n.queue = {
				last: null,
				dispatch: null,
				lastRenderedReducer: e,
				lastRenderedState: t
			}).dispatch = mo.bind(null, Bl, e), [n.memoizedState, e]
		}, useRef: function (e) {
			return e = {current: e}, oo().memoizedState = e
		}, useState: function (e) {
			var t = oo();
			return "function" === typeof e && (e = e()), t.memoizedState = t.baseState = e, e = (e = t.queue = {
				last: null,
				dispatch: null,
				lastRenderedReducer: io,
				lastRenderedState: e
			}).dispatch = mo.bind(null, Bl, e), [t.memoizedState, e]
		}, useDebugValue: po, useResponder: Il
	}, bo = {
		readContext: nl, useCallback: function (e, t) {
			var c = ao();
			t = void 0 === t ? null : t;
			var n = c.memoizedState;
			return null !== n && null !== t && no(t, n[1]) ? n[0] : (c.memoizedState = [e, t], e)
		}, useContext: nl, useEffect: function (e, t) {
			return fo(516, 192, e, t)
		}, useImperativeHandle: function (e, t, c) {
			return c = null !== c && void 0 !== c ? c.concat([e]) : null, fo(4, 36, vo.bind(null, t, e), c)
		}, useLayoutEffect: function (e, t) {
			return fo(4, 36, e, t)
		}, useMemo: function (e, t) {
			var c = ao();
			t = void 0 === t ? null : t;
			var n = c.memoizedState;
			return null !== n && null !== t && no(t, n[1]) ? n[0] : (e = e(), c.memoizedState = [e, t], e)
		}, useReducer: uo, useRef: function () {
			return ao().memoizedState
		}, useState: function (e) {
			return uo(io)
		}, useDebugValue: po, useResponder: Il
	}, Mo = null, go = null, Ho = !1;

	function Vo(e, t) {
		var c = Ai(5, null, null, 0);
		c.elementType = "DELETED", c.type = "DELETED", c.stateNode = t, c.return = e, c.effectTag = 8, null !== e.lastEffect ? (e.lastEffect.nextEffect = c, e.lastEffect = c) : e.firstEffect = e.lastEffect = c
	}

	function wo(e, t) {
		switch (e.tag) {
			case 5:
				var c = e.type;
				return null !== (t = 1 !== t.nodeType || c.toLowerCase() !== t.nodeName.toLowerCase() ? null : t) && (e.stateNode = t, !0);
			case 6:
				return null !== (t = "" === e.pendingProps || 3 !== t.nodeType ? null : t) && (e.stateNode = t, !0);
			case 13:
			default:
				return !1
		}
	}

	function Co(e) {
		if (Ho) {
			var t = go;
			if (t) {
				var c = t;
				if (!wo(e, t)) {
					if (!(t = en(c.nextSibling)) || !wo(e, t)) return e.effectTag = e.effectTag & ~bt | yt, Ho = !1, void(Mo = e);
					Vo(Mo, c)
				}
				Mo = e, go = en(t.firstChild)
			} else e.effectTag = e.effectTag & ~bt | yt, Ho = !1, Mo = e
		}
	}

	function Lo(e) {
		for (e = e.return; null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;) e = e.return;
		Mo = e
	}

	function So(e) {
		if (e !== Mo) return !1;
		if (!Ho) return Lo(e), Ho = !0, !1;
		var t = e.type;
		if (5 !== e.tag || "head" !== t && "body" !== t && !Zc(t, e.memoizedProps)) for (t = go; t;) Vo(e, t), t = en(t.nextSibling);
		if (Lo(e), 13 === e.tag) if (null === (e = null !== (e = e.memoizedState) ? e.dehydrated : null)) e = go; else e:{
			for (e = e.nextSibling, t = 0; e;) {
				if (8 === e.nodeType) {
					var c = e.data;
					if (c === Wc) {
						if (0 === t) {
							e = en(e.nextSibling);
							break e
						}
						t--
					} else c !== Bc && c !== Kc && c !== Qc || t++
				}
				e = e.nextSibling
			}
			e = null
		} else e = Mo ? en(e.stateNode.nextSibling) : null;
		return go = e, !0
	}

	function ko() {
		go = Mo = null, Ho = !1
	}

	var Oo = _.ReactCurrentOwner, To = !1;

	function Eo(e, t, c, n) {
		t.child = null === e ? Ol(t, null, c, n) : kl(t, e.child, c, n)
	}

	function xo(e, t, c, n, r) {
		c = c.render;
		var l = t.ref;
		return cl(t, r), n = ro(e, t, c, n, l, r), null === e || To ? (t.effectTag |= 1, Eo(e, t, n, r), t.child) : (t.updateQueue = e.updateQueue, t.effectTag &= -517, e.expirationTime <= r && (e.expirationTime = 0), $o(e, t, r))
	}

	function _o(e, t, c, n, r, l) {
		if (null === e) {
			var o = c.type;
			return "function" !== typeof o || Fi(o) || void 0 !== o.defaultProps || null !== c.compare || void 0 !== c.defaultProps ? ((e = ji(c.type, null, n, null, t.mode, l)).ref = t.ref, e.return = t, t.child = e) : (t.tag = 15, t.type = o, Po(e, t, o, n, r, l))
		}
		return o = e.child, r < l && (r = o.memoizedProps, (c = null !== (c = c.compare) ? c : Yn)(r, n) && e.ref === t.ref) ? $o(e, t, l) : (t.effectTag |= 1, (e = Ni(o, n)).ref = t.ref, e.return = t, t.child = e)
	}

	function Po(e, t, c, n, r, l) {
		return null !== e && Yn(e.memoizedProps, n) && e.ref === t.ref && (To = !1, r < l) ? $o(e, t, l) : Fo(e, t, c, n, l)
	}

	function Ao(e, t) {
		var c = t.ref;
		(null === e && null !== c || null !== e && e.ref !== c) && (t.effectTag |= 128)
	}

	function Fo(e, t, c, n, r) {
		var l = pr(c) ? fr : sr.current;
		return l = vr(t, l), cl(t, r), c = ro(e, t, c, n, l, r), null === e || To ? (t.effectTag |= 1, Eo(e, t, c, r), t.child) : (t.updateQueue = e.updateQueue, t.effectTag &= -517, e.expirationTime <= r && (e.expirationTime = 0), $o(e, t, r))
	}

	function No(e, t, c, n, r) {
		if (pr(c)) {
			var l = !0;
			br(t)
		} else l = !1;
		if (cl(t, r), null === t.stateNode) null !== e && (e.alternate = null, t.alternate = null, t.effectTag |= yt), gl(t, c, n), Vl(t, c, n, r), n = !0; else if (null === e) {
			var o = t.stateNode, a = t.memoizedProps;
			o.props = a;
			var i = o.context, u = c.contextType;
			"object" === typeof u && null !== u ? u = nl(u) : u = vr(t, u = pr(c) ? fr : sr.current);
			var s = c.getDerivedStateFromProps,
				h = "function" === typeof s || "function" === typeof o.getSnapshotBeforeUpdate;
			h || "function" !== typeof o.UNSAFE_componentWillReceiveProps && "function" !== typeof o.componentWillReceiveProps || (a !== n || i !== u) && Hl(t, o, n, u), rl = !1;
			var f = t.memoizedState;
			i = o.state = f;
			var v = t.updateQueue;
			null !== v && (vl(t, v, n, o, r), i = t.memoizedState), a !== n || f !== i || hr.current || rl ? ("function" === typeof s && (yl(t, c, s, n), i = t.memoizedState), (a = rl || Ml(t, c, a, n, f, i, u)) ? (h || "function" !== typeof o.UNSAFE_componentWillMount && "function" !== typeof o.componentWillMount || ("function" === typeof o.componentWillMount && o.componentWillMount(), "function" === typeof o.UNSAFE_componentWillMount && o.UNSAFE_componentWillMount()), "function" === typeof o.componentDidMount && (t.effectTag |= 4)) : ("function" === typeof o.componentDidMount && (t.effectTag |= 4), t.memoizedProps = n, t.memoizedState = i), o.props = n, o.state = i, o.context = u, n = a) : ("function" === typeof o.componentDidMount && (t.effectTag |= 4), n = !1)
		} else o = t.stateNode, a = t.memoizedProps, o.props = t.type === t.elementType ? a : Kr(t.type, a), i = o.context, "object" === typeof(u = c.contextType) && null !== u ? u = nl(u) : u = vr(t, u = pr(c) ? fr : sr.current), (h = "function" === typeof(s = c.getDerivedStateFromProps) || "function" === typeof o.getSnapshotBeforeUpdate) || "function" !== typeof o.UNSAFE_componentWillReceiveProps && "function" !== typeof o.componentWillReceiveProps || (a !== n || i !== u) && Hl(t, o, n, u), rl = !1, i = t.memoizedState, f = o.state = i, null !== (v = t.updateQueue) && (vl(t, v, n, o, r), f = t.memoizedState), a !== n || i !== f || hr.current || rl ? ("function" === typeof s && (yl(t, c, s, n), f = t.memoizedState), (s = rl || Ml(t, c, a, n, i, f, u)) ? (h || "function" !== typeof o.UNSAFE_componentWillUpdate && "function" !== typeof o.componentWillUpdate || ("function" === typeof o.componentWillUpdate && o.componentWillUpdate(n, f, u), "function" === typeof o.UNSAFE_componentWillUpdate && o.UNSAFE_componentWillUpdate(n, f, u)), "function" === typeof o.componentDidUpdate && (t.effectTag |= 4), "function" === typeof o.getSnapshotBeforeUpdate && (t.effectTag |= 256)) : ("function" !== typeof o.componentDidUpdate || a === e.memoizedProps && i === e.memoizedState || (t.effectTag |= 4), "function" !== typeof o.getSnapshotBeforeUpdate || a === e.memoizedProps && i === e.memoizedState || (t.effectTag |= 256), t.memoizedProps = n, t.memoizedState = f), o.props = n, o.state = f, o.context = u, n = s) : ("function" !== typeof o.componentDidUpdate || a === e.memoizedProps && i === e.memoizedState || (t.effectTag |= 4), "function" !== typeof o.getSnapshotBeforeUpdate || a === e.memoizedProps && i === e.memoizedState || (t.effectTag |= 256), n = !1);
		return jo(e, t, c, n, l, r)
	}

	function jo(e, t, c, n, r, l) {
		Ao(e, t);
		var o = (64 & t.effectTag) !== zt;
		if (!n && !o) return r && Mr(t, c, !1), $o(e, t, l);
		n = t.stateNode, Oo.current = t;
		var a = o && "function" !== typeof c.getDerivedStateFromError ? null : n.render();
		return t.effectTag |= 1, null !== e && o ? (t.child = kl(t, e.child, null, l), t.child = kl(t, null, a, l)) : Eo(e, t, a, l), t.memoizedState = n.state, r && Mr(t, c, !0), t.child
	}

	function Ro(e) {
		var t = e.stateNode;
		t.pendingContext ? zr(0, t.pendingContext, t.pendingContext !== t.context) : t.context && zr(0, t.context, !1), Al(e, t.containerInfo)
	}

	var Do, Io, Uo, qo, Bo = {dehydrated: null, retryTime: 1};

	function Wo(e, t, c) {
		var n, r = t.mode, l = t.pendingProps, o = Rl.current, a = !1;
		if ((n = (64 & t.effectTag) !== zt) || (n = 0 !== (2 & o) && (null === e || null !== e.memoizedState)), n ? (a = !0, t.effectTag &= -65) : null !== e && null === e.memoizedState || void 0 === l.fallback || !0 === l.unstable_avoidThisFallback || (o |= 1), ir(Rl, 1 & o), null === e) {
			if (a) {
				if (a = l.fallback, (l = Ri(null, r, 0, null)).return = t, 0 === (2 & t.mode)) for (e = null !== t.memoizedState ? t.child.child : t.child, l.child = e; null !== e;) e.return = l, e = e.sibling;
				return (c = Ri(a, r, c, null)).return = t, l.sibling = c, t.memoizedState = Bo, t.child = l, c
			}
			return r = l.children, t.memoizedState = null, t.child = Ol(t, null, r, c)
		}
		if (null !== e.memoizedState) {
			if (r = (e = e.child).sibling, a) {
				if (l = l.fallback, (c = Ni(e, e.pendingProps)).return = t, 0 === (2 & t.mode) && (a = null !== t.memoizedState ? t.child.child : t.child) !== e.child) for (c.child = a; null !== a;) a.return = c, a = a.sibling;
				return (r = Ni(r, l, r.expirationTime)).return = t, c.sibling = r, c.childExpirationTime = 0, t.memoizedState = Bo, t.child = c, r
			}
			return c = kl(t, e.child, l.children, c), t.memoizedState = null, t.child = c
		}
		if (e = e.child, a) {
			if (a = l.fallback, (l = Ri(null, r, 0, null)).return = t, l.child = e, null !== e && (e.return = l), 0 === (2 & t.mode)) for (e = null !== t.memoizedState ? t.child.child : t.child, l.child = e; null !== e;) e.return = l, e = e.sibling;
			return (c = Ri(a, r, c, null)).return = t, l.sibling = c, c.effectTag |= yt, l.childExpirationTime = 0, t.memoizedState = Bo, t.child = l, c
		}
		return t.memoizedState = null, t.child = kl(t, e, l.children, c)
	}

	function Qo(e, t, c, n, r) {
		var l = e.memoizedState;
		null === l ? e.memoizedState = {
			isBackwards: t,
			rendering: null,
			last: n,
			tail: c,
			tailExpiration: 0,
			tailMode: r
		} : (l.isBackwards = t, l.rendering = null, l.last = n, l.tail = c, l.tailExpiration = 0, l.tailMode = r)
	}

	function Ko(e, t, c) {
		var n = t.pendingProps, r = n.revealOrder, l = n.tail;
		if (Eo(e, t, n.children, c), 0 !== (2 & (n = Rl.current))) n = 1 & n | 2, t.effectTag |= 64; else {
			if (null !== e && (64 & e.effectTag) !== zt) e:for (e = t.child; null !== e;) {
				if (13 === e.tag) {
					if (null !== e.memoizedState) {
						e.expirationTime < c && (e.expirationTime = c);
						var o = e.alternate;
						null !== o && o.expirationTime < c && (o.expirationTime = c), tl(e.return, c)
					}
				} else if (null !== e.child) {
					e.child.return = e, e = e.child;
					continue
				}
				if (e === t) break e;
				for (; null === e.sibling;) {
					if (null === e.return || e.return === t) break e;
					e = e.return
				}
				e.sibling.return = e.return, e = e.sibling
			}
			n &= 1
		}
		if (ir(Rl, n), 0 === (2 & t.mode)) t.memoizedState = null; else switch (r) {
			case"forwards":
				for (c = t.child, r = null; null !== c;) null !== (n = c.alternate) && null === Dl(n) && (r = c), c = c.sibling;
				null === (c = r) ? (r = t.child, t.child = null) : (r = c.sibling, c.sibling = null), Qo(t, !1, r, c, l);
				break;
			case"backwards":
				for (c = null, r = t.child, t.child = null; null !== r;) {
					if (null !== (n = r.alternate) && null === Dl(n)) {
						t.child = r;
						break
					}
					n = r.sibling, r.sibling = c, c = r, r = n
				}
				Qo(t, !0, c, null, l);
				break;
			case"together":
				Qo(t, !1, null, null, void 0);
				break;
			default:
				t.memoizedState = null
		}
		return t.child
	}

	function $o(e, t, c) {
		null !== e && (t.dependencies = e.dependencies);
		var n = t.expirationTime;
		if (0 !== n && zi(n), t.childExpirationTime < c) return null;
		if (null !== e && t.child !== e.child) throw o(Error(153));
		if (null !== t.child) {
			for (c = Ni(e = t.child, e.pendingProps, e.expirationTime), t.child = c, c.return = t; null !== e.sibling;) e = e.sibling, (c = c.sibling = Ni(e, e.pendingProps, e.expirationTime)).return = t;
			c.sibling = null
		}
		return t.child
	}

	function Go(e) {
		e.effectTag |= 4
	}

	function Yo(e, t) {
		switch (e.tailMode) {
			case"hidden":
				t = e.tail;
				for (var c = null; null !== t;) null !== t.alternate && (c = t), t = t.sibling;
				null === c ? e.tail = null : c.sibling = null;
				break;
			case"collapsed":
				c = e.tail;
				for (var n = null; null !== c;) null !== c.alternate && (n = c), c = c.sibling;
				null === n ? t || null === e.tail ? e.tail = null : e.tail.sibling = null : n.sibling = null
		}
	}

	function Zo(e) {
		switch (e.tag) {
			case 1:
				pr(e.type) && dr();
				var t = e.effectTag;
				return 4096 & t ? (e.effectTag = -4097 & t | 64, e) : null;
			case 3:
				if (Fl(), mr(), (64 & (t = e.effectTag)) !== zt) throw o(Error(285));
				return e.effectTag = -4097 & t | 64, e;
			case 5:
				return jl(e), null;
			case 13:
				return ar(Rl), 4096 & (t = e.effectTag) ? (e.effectTag = -4097 & t | 64, e) : null;
			case 19:
				return ar(Rl), null;
			case 4:
				return Fl(), null;
			case 10:
				return el(e), null;
			default:
				return null
		}
	}

	function Xo(e, t) {
		return {value: e, source: t, stack: X(t)}
	}

	Do = function (e, t) {
		for (var c = t.child; null !== c;) {
			if (5 === c.tag || 6 === c.tag) e.appendChild(c.stateNode); else if (4 !== c.tag && null !== c.child) {
				c.child.return = c, c = c.child;
				continue
			}
			if (c === t) break;
			for (; null === c.sibling;) {
				if (null === c.return || c.return === t) return;
				c = c.return
			}
			c.sibling.return = c.return, c = c.sibling
		}
	}, Io = function () {
	}, Uo = function (e, t, c, n, l) {
		var o = e.memoizedProps;
		if (o !== n) {
			var a, i, u = t.stateNode;
			switch (Pl(El.current), e = null, c) {
				case"input":
					o = Le(u, o), n = Le(u, n), e = [];
					break;
				case"option":
					o = xe(u, o), n = xe(u, n), e = [];
					break;
				case"select":
					o = r({}, o, {value: void 0}), n = r({}, n, {value: void 0}), e = [];
					break;
				case"textarea":
					o = Pe(u, o), n = Pe(u, n), e = [];
					break;
				default:
					"function" !== typeof o.onClick && "function" === typeof n.onClick && (u.onclick = jc)
			}
			for (a in Ac(c, n), c = null, o) if (!n.hasOwnProperty(a) && o.hasOwnProperty(a) && null != o[a]) if ("style" === a) for (i in u = o[a]) u.hasOwnProperty(i) && (c || (c = {}), c[i] = ""); else "dangerouslySetInnerHTML" !== a && "children" !== a && "suppressContentEditableWarning" !== a && "suppressHydrationWarning" !== a && "autoFocus" !== a && (v.hasOwnProperty(a) ? e || (e = []) : (e = e || []).push(a, null));
			for (a in n) {
				var s = n[a];
				if (u = null != o ? o[a] : void 0, n.hasOwnProperty(a) && s !== u && (null != s || null != u)) if ("style" === a) if (u) {
					for (i in u) !u.hasOwnProperty(i) || s && s.hasOwnProperty(i) || (c || (c = {}), c[i] = "");
					for (i in s) s.hasOwnProperty(i) && u[i] !== s[i] && (c || (c = {}), c[i] = s[i])
				} else c || (e || (e = []), e.push(a, c)), c = s; else "dangerouslySetInnerHTML" === a ? (s = s ? s.__html : void 0, u = u ? u.__html : void 0, null != s && u !== s && (e = e || []).push(a, "" + s)) : "children" === a ? u === s || "string" !== typeof s && "number" !== typeof s || (e = e || []).push(a, "" + s) : "suppressContentEditableWarning" !== a && "suppressHydrationWarning" !== a && (v.hasOwnProperty(a) ? (null != s && Nc(l, a), e || u === s || (e = [])) : (e = e || []).push(a, s))
			}
			c && (e = e || []).push("style", c), l = e, (t.updateQueue = l) && Go(t)
		}
	}, qo = function (e, t, c, n) {
		c !== n && Go(t)
	};
	var Jo = "function" === typeof WeakSet ? WeakSet : Set;

	function ea(e, t) {
		var c = t.source, n = t.stack;
		null === n && null !== c && (n = X(c)), null !== c && Z(c.type), t = t.value, null !== e && 1 === e.tag && Z(e.type);
		try {
			console.error(t)
		} catch (r) {
			setTimeout((function () {
				throw r
			}))
		}
	}

	function ta(e) {
		var t = e.ref;
		if (null !== t) if ("function" === typeof t) try {
			t(null)
		} catch (c) {
			Oi(e, c)
		} else t.current = null
	}

	function ca(e, t) {
		switch (t.tag) {
			case 0:
			case 11:
			case 15:
				na(2, 0, t);
				break;
			case 1:
				if (256 & t.effectTag && null !== e) {
					var c = e.memoizedProps, n = e.memoizedState;
					t = (e = t.stateNode).getSnapshotBeforeUpdate(t.elementType === t.type ? c : Kr(t.type, c), n), e.__reactInternalSnapshotBeforeUpdate = t
				}
				break;
			case 3:
			case 5:
			case 6:
			case 4:
			case 17:
				break;
			default:
				throw o(Error(163))
		}
	}

	function na(e, t, c) {
		if (null !== (c = null !== (c = c.updateQueue) ? c.lastEffect : null)) {
			var n = c = c.next;
			do {
				if (0 !== (n.tag & e)) {
					var r = n.destroy;
					n.destroy = void 0, void 0 !== r && r()
				}
				0 !== (n.tag & t) && (r = n.create, n.destroy = r()), n = n.next
			} while (n !== c)
		}
	}

	function ra(e, t, c) {
		switch ("function" === typeof _i && _i(t), t.tag) {
			case 0:
			case 11:
			case 14:
			case 15:
				if (null !== (e = t.updateQueue) && null !== (e = e.lastEffect)) {
					var n = e.next;
					Ur(97 < c ? 97 : c, (function () {
						var e = n;
						do {
							var c = e.destroy;
							if (void 0 !== c) {
								var r = t;
								try {
									c()
								} catch (l) {
									Oi(r, l)
								}
							}
							e = e.next
						} while (e !== n)
					}))
				}
				break;
			case 1:
				ta(t), "function" === typeof(c = t.stateNode).componentWillUnmount && function (e, t) {
					try {
						t.props = e.memoizedProps, t.state = e.memoizedState, t.componentWillUnmount()
					} catch (c) {
						Oi(e, c)
					}
				}(t, c);
				break;
			case 5:
				ta(t);
				break;
			case 4:
				ia(e, t, c)
		}
	}

	function la(e) {
		var t = e.alternate;
		e.return = null, e.child = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.alternate = null, e.firstEffect = null, e.lastEffect = null, e.pendingProps = null, e.memoizedProps = null, null !== t && la(t)
	}

	function oa(e) {
		return 5 === e.tag || 3 === e.tag || 4 === e.tag
	}

	function aa(e) {
		e:{
			for (var t = e.return; null !== t;) {
				if (oa(t)) {
					var c = t;
					break e
				}
				t = t.return
			}
			throw o(Error(160))
		}
		switch (t = c.stateNode, c.tag) {
			case 5:
				var n = !1;
				break;
			case 3:
			case 4:
				t = t.containerInfo, n = !0;
				break;
			default:
				throw o(Error(161))
		}
		16 & c.effectTag && (qe(t, ""), c.effectTag &= -17);
		e:t:for (c = e; ;) {
			for (; null === c.sibling;) {
				if (null === c.return || oa(c.return)) {
					c = null;
					break e
				}
				c = c.return
			}
			for (c.sibling.return = c.return, c = c.sibling; 5 !== c.tag && 6 !== c.tag && 18 !== c.tag;) {
				if (c.effectTag & yt) continue t;
				if (null === c.child || 4 === c.tag) continue t;
				c.child.return = c, c = c.child
			}
			if (!(c.effectTag & yt)) {
				c = c.stateNode;
				break e
			}
		}
		for (var r = e; ;) {
			var l = 5 === r.tag || 6 === r.tag;
			if (l) {
				var a = l ? r.stateNode : r.stateNode.instance;
				if (c) if (n) {
					var i = a;
					a = c, 8 === (l = t).nodeType ? l.parentNode.insertBefore(i, a) : l.insertBefore(i, a)
				} else t.insertBefore(a, c); else n ? (8 === (i = t).nodeType ? (l = i.parentNode).insertBefore(a, i) : (l = i).appendChild(a), null !== (i = i._reactRootContainer) && void 0 !== i || null !== l.onclick || (l.onclick = jc)) : t.appendChild(a)
			} else if (4 !== r.tag && null !== r.child) {
				r.child.return = r, r = r.child;
				continue
			}
			if (r === e) break;
			for (; null === r.sibling;) {
				if (null === r.return || r.return === e) return;
				r = r.return
			}
			r.sibling.return = r.return, r = r.sibling
		}
	}

	function ia(e, t, c) {
		for (var n, r, l = t, a = !1; ;) {
			if (!a) {
				a = l.return;
				e:for (; ;) {
					if (null === a) throw o(Error(160));
					switch (n = a.stateNode, a.tag) {
						case 5:
							r = !1;
							break e;
						case 3:
						case 4:
							n = n.containerInfo, r = !0;
							break e
					}
					a = a.return
				}
				a = !0
			}
			if (5 === l.tag || 6 === l.tag) {
				e:for (var i = e, u = l, s = c, h = u; ;) if (ra(i, h, s), null !== h.child && 4 !== h.tag) h.child.return = h, h = h.child; else {
					if (h === u) break;
					for (; null === h.sibling;) {
						if (null === h.return || h.return === u) break e;
						h = h.return
					}
					h.sibling.return = h.return, h = h.sibling
				}
				r ? (i = n, u = l.stateNode, 8 === i.nodeType ? i.parentNode.removeChild(u) : i.removeChild(u)) : n.removeChild(l.stateNode)
			} else if (4 === l.tag) {
				if (null !== l.child) {
					n = l.stateNode.containerInfo, r = !0, l.child.return = l, l = l.child;
					continue
				}
			} else if (ra(e, l, c), null !== l.child) {
				l.child.return = l, l = l.child;
				continue
			}
			if (l === t) break;
			for (; null === l.sibling;) {
				if (null === l.return || l.return === t) return;
				4 === (l = l.return).tag && (a = !1)
			}
			l.sibling.return = l.return, l = l.sibling
		}
	}

	function ua(e, t) {
		switch (t.tag) {
			case 0:
			case 11:
			case 14:
			case 15:
				na(4, 8, t);
				break;
			case 1:
				break;
			case 5:
				var c = t.stateNode;
				if (null != c) {
					var n = t.memoizedProps, r = null !== e ? e.memoizedProps : n;
					e = t.type;
					var l = t.updateQueue;
					if (t.updateQueue = null, null !== l) {
						for (c[rn] = n, "input" === e && "radio" === n.type && null != n.name && ke(c, n), Fc(e, r), t = Fc(e, n), r = 0; r < l.length; r += 2) {
							var a = l[r], i = l[r + 1];
							"style" === a ? _c(c, i) : "dangerouslySetInnerHTML" === a ? Ue(c, i) : "children" === a ? qe(c, i) : He(c, a, i, t)
						}
						switch (e) {
							case"input":
								Oe(c, n);
								break;
							case"textarea":
								Fe(c, n);
								break;
							case"select":
								t = c._wrapperState.wasMultiple, c._wrapperState.wasMultiple = !!n.multiple, null != (e = n.value) ? _e(c, !!n.multiple, e, !1) : t !== !!n.multiple && (null != n.defaultValue ? _e(c, !!n.multiple, n.defaultValue, !0) : _e(c, !!n.multiple, n.multiple ? [] : "", !1))
						}
					}
				}
				break;
			case 6:
				if (null === t.stateNode) throw o(Error(162));
				t.stateNode.nodeValue = t.memoizedProps;
				break;
			case 3:
				(t = t.stateNode).hydrate && (t.hydrate = !1, mt(t.containerInfo));
				break;
			case 12:
				break;
			case 13:
				if (c = t, null === t.memoizedState ? n = !1 : (n = !0, c = t.child, Ra = Rr()), null !== c) e:for (e = c; ;) {
					if (5 === e.tag) l = e.stateNode, n ? "function" === typeof(l = l.style).setProperty ? l.setProperty("display", "none", "important") : l.display = "none" : (l = e.stateNode, r = void 0 !== (r = e.memoizedProps.style) && null !== r && r.hasOwnProperty("display") ? r.display : null, l.style.display = xc("display", r)); else if (6 === e.tag) e.stateNode.nodeValue = n ? "" : e.memoizedProps; else {
						if (13 === e.tag && null !== e.memoizedState && null === e.memoizedState.dehydrated) {
							(l = e.child.sibling).return = e, e = l;
							continue
						}
						if (null !== e.child) {
							e.child.return = e, e = e.child;
							continue
						}
					}
					if (e === c) break e;
					for (; null === e.sibling;) {
						if (null === e.return || e.return === c) break e;
						e = e.return
					}
					e.sibling.return = e.return, e = e.sibling
				}
				sa(t);
				break;
			case 19:
				sa(t);
				break;
			case 17:
			case 20:
			case 21:
				break;
			default:
				throw o(Error(163))
		}
	}

	function sa(e) {
		var t = e.updateQueue;
		if (null !== t) {
			e.updateQueue = null;
			var c = e.stateNode;
			null === c && (c = e.stateNode = new Jo), t.forEach((function (t) {
				var n = Ei.bind(null, e, t);
				c.has(t) || (c.add(t), t.then(n, n))
			}))
		}
	}

	var ha = "function" === typeof WeakMap ? WeakMap : Map;

	function fa(e, t, c) {
		(c = al(c, null)).tag = 3, c.payload = {element: null};
		var n = t.value;
		return c.callback = function () {
			Ua || (Ua = !0, qa = n), ea(e, t)
		}, c
	}

	function va(e, t, c) {
		(c = al(c, null)).tag = 3;
		var n = e.type.getDerivedStateFromError;
		if ("function" === typeof n) {
			var r = t.value;
			c.payload = function () {
				return ea(e, t), n(r)
			}
		}
		var l = e.stateNode;
		return null !== l && "function" === typeof l.componentDidCatch && (c.callback = function () {
			"function" !== typeof n && (null === Ba ? Ba = new Set([this]) : Ba.add(this), ea(e, t));
			var c = t.stack;
			this.componentDidCatch(t.value, {componentStack: null !== c ? c : ""})
		}), c
	}

	var pa = Math.ceil, da = _.ReactCurrentDispatcher, ma = _.ReactCurrentOwner, za = 0, ya = 8, ba = 16, Ma = 32,
		ga = 0, Ha = 1, Va = 2, wa = 3, Ca = 4, La = 5, Sa = 6, ka = za, Oa = null, Ta = null, Ea = 0, xa = ga,
		_a = null, Pa = 1073741823, Aa = 1073741823, Fa = null, Na = 0, ja = !1, Ra = 0, Da = 500, Ia = null, Ua = !1,
		qa = null, Ba = null, Wa = !1, Qa = null, Ka = 90, $a = null, Ga = 0, Ya = null, Za = 0;

	function Xa() {
		return (ka & (ba | Ma)) !== za ? 1073741821 - (Rr() / 10 | 0) : 0 !== Za ? Za : Za = 1073741821 - (Rr() / 10 | 0)
	}

	function Ja(e, t, c) {
		if (0 === (2 & (t = t.mode))) return 1073741823;
		var n = Dr();
		if (0 === (4 & t)) return 99 === n ? 1073741823 : 1073741822;
		if ((ka & ba) !== za) return Ea;
		if (null !== c) e = 1073741821 - 25 * (1 + ((1073741821 - e + (0 | c.timeoutMs || 5e3) / 10) / 25 | 0)); else switch (n) {
			case 99:
				e = 1073741823;
				break;
			case 98:
				e = 1073741821 - 10 * (1 + ((1073741821 - e + 15) / 10 | 0));
				break;
			case 97:
			case 96:
				e = 1073741821 - 25 * (1 + ((1073741821 - e + 500) / 25 | 0));
				break;
			case 95:
				e = 2;
				break;
			default:
				throw o(Error(326))
		}
		return null !== Oa && e === Ea && --e, e
	}

	var ei, ti = 0;

	function ci(e, t) {
		if (50 < Ga) throw Ga = 0, Ya = null, o(Error(185));
		if (null !== (e = ni(e, t))) {
			var c = Dr();
			1073741823 === t ? (ka & ya) !== za && (ka & (ba | Ma)) === za ? ai(e) : (li(e), ka === za && Wr()) : li(e), (4 & ka) === za || 98 !== c && 99 !== c || (null === $a ? $a = new Map([[e, t]]) : (void 0 === (c = $a.get(e)) || c > t) && $a.set(e, t))
		}
	}

	function ni(e, t) {
		e.expirationTime < t && (e.expirationTime = t);
		var c = e.alternate;
		null !== c && c.expirationTime < t && (c.expirationTime = t);
		var n = e.return, r = null;
		if (null === n && 3 === e.tag) r = e.stateNode; else for (; null !== n;) {
			if (c = n.alternate, n.childExpirationTime < t && (n.childExpirationTime = t), null !== c && c.childExpirationTime < t && (c.childExpirationTime = t), null === n.return && 3 === n.tag) {
				r = n.stateNode;
				break
			}
			n = n.return
		}
		return null !== r && (Oa === r && (zi(t), xa === Ca && Bi(r, Ea)), Wi(r, t)), r
	}

	function ri(e) {
		var t = e.lastExpiredTime;
		return 0 !== t ? t : qi(e, t = e.firstPendingTime) ? (t = e.lastPingedTime) > (e = e.nextKnownPendingLevel) ? t : e : t
	}

	function li(e) {
		if (0 !== e.lastExpiredTime) e.callbackExpirationTime = 1073741823, e.callbackPriority = 99, e.callbackNode = Br(ai.bind(null, e)); else {
			var t = ri(e), c = e.callbackNode;
			if (0 === t) null !== c && (e.callbackNode = null, e.callbackExpirationTime = 0, e.callbackPriority = 90); else {
				var n = Xa();
				if (1073741823 === t ? n = 99 : 1 === t || 2 === t ? n = 95 : n = 0 >= (n = 10 * (1073741821 - t) - 10 * (1073741821 - n)) ? 99 : 250 >= n ? 98 : 5250 >= n ? 97 : 95, null !== c) {
					var r = e.callbackPriority;
					if (e.callbackExpirationTime === t && r >= n) return;
					c !== _r && Vr(c)
				}
				e.callbackExpirationTime = t, e.callbackPriority = n, t = 1073741823 === t ? Br(ai.bind(null, e)) : qr(n, oi.bind(null, e), {timeout: 10 * (1073741821 - t) - Rr()}), e.callbackNode = t
			}
		}
	}

	function oi(e, t) {
		if (Za = 0, t) return Qi(e, t = Xa()), li(e), null;
		var c = ri(e);
		if (0 !== c) {
			if (t = e.callbackNode, (ka & (ba | Ma)) !== za) throw o(Error(327));
			if (Li(), e === Oa && c === Ea || vi(e, c), null !== Ta) {
				var n = ka;
				ka |= ba;
				for (var r = di(); ;) try {
					bi();
					break
				} catch (i) {
					pi(e, i)
				}
				if (Xr(), ka = n, da.current = r, xa === Ha) throw t = _a, vi(e, c), Bi(e, c), li(e), t;
				if (null === Ta) switch (r = e.finishedWork = e.current.alternate, e.finishedExpirationTime = c, ui(e, c), n = xa, Oa = null, n) {
					case ga:
					case Ha:
						throw o(Error(345));
					case Va:
						if (2 !== c) {
							Qi(e, 2);
							break
						}
						Vi(e);
						break;
					case wa:
						if (Bi(e, c), c === (n = e.lastSuspendedTime) && (e.nextKnownPendingLevel = Hi(r)), 1073741823 === Pa && 10 < (r = Ra + Da - Rr())) {
							if (ja) {
								var l = e.lastPingedTime;
								if (0 === l || l >= c) {
									e.lastPingedTime = c, vi(e, c);
									break
								}
							}
							if (0 !== (l = ri(e)) && l !== c) break;
							if (0 !== n && n !== c) {
								e.lastPingedTime = n;
								break
							}
							e.timeoutHandle = Xc(Vi.bind(null, e), r);
							break
						}
						Vi(e);
						break;
					case Ca:
						if (Bi(e, c), c === (n = e.lastSuspendedTime) && (e.nextKnownPendingLevel = Hi(r)), ja && (0 === (r = e.lastPingedTime) || r >= c)) {
							e.lastPingedTime = c, vi(e, c);
							break
						}
						if (0 !== (r = ri(e)) && r !== c) break;
						if (0 !== n && n !== c) {
							e.lastPingedTime = n;
							break
						}
						if (1073741823 !== Aa ? n = 10 * (1073741821 - Aa) - Rr() : 1073741823 === Pa ? n = 0 : (n = 10 * (1073741821 - Pa) - 5e3, 0 > (n = (r = Rr()) - n) && (n = 0), (c = 10 * (1073741821 - c) - r) < (n = (120 > n ? 120 : 480 > n ? 480 : 1080 > n ? 1080 : 1920 > n ? 1920 : 3e3 > n ? 3e3 : 4320 > n ? 4320 : 1960 * pa(n / 1960)) - n) && (n = c)), 10 < n) {
							e.timeoutHandle = Xc(Vi.bind(null, e), n);
							break
						}
						Vi(e);
						break;
					case La:
						if (1073741823 !== Pa && null !== Fa) {
							l = Pa;
							var a = Fa;
							if (0 >= (n = 0 | a.busyMinDurationMs) ? n = 0 : (r = 0 | a.busyDelayMs, n = (l = Rr() - (10 * (1073741821 - l) - (0 | a.timeoutMs || 5e3))) <= r ? 0 : r + n - l), 10 < n) {
								Bi(e, c), e.timeoutHandle = Xc(Vi.bind(null, e), n);
								break
							}
						}
						Vi(e);
						break;
					case Sa:
						Bi(e, c);
						break;
					default:
						throw o(Error(329))
				}
				if (li(e), e.callbackNode === t) return oi.bind(null, e)
			}
		}
		return null
	}

	function ai(e) {
		var t = e.lastExpiredTime;
		if (t = 0 !== t ? t : 1073741823, e.finishedExpirationTime === t) Vi(e); else {
			if ((ka & (ba | Ma)) !== za) throw o(Error(327));
			if (Li(), e === Oa && t === Ea || vi(e, t), null !== Ta) {
				var c = ka;
				ka |= ba;
				for (var n = di(); ;) try {
					yi();
					break
				} catch (r) {
					pi(e, r)
				}
				if (Xr(), ka = c, da.current = n, xa === Ha) throw c = _a, vi(e, t), Bi(e, t), li(e), c;
				if (null !== Ta) throw o(Error(261));
				e.finishedWork = e.current.alternate, e.finishedExpirationTime = t, ui(e, t), xa === Sa ? Bi(e, t) : (Oa = null, Vi(e)), li(e)
			}
		}
		return null
	}

	function ii() {
		(ka & (1 | ba | Ma)) === za && (function () {
			if (null !== $a) {
				var e = $a;
				$a = null, e.forEach((function (e, t) {
					Qi(t, e), li(t)
				})), Wr()
			}
		}(), Li())
	}

	function ui(e, t) {
		var c = e.firstBatch;
		null !== c && c._defer && c._expirationTime >= t && (qr(97, (function () {
			return c._onComplete(), null
		})), xa = Sa)
	}

	function si(e, t) {
		var c = ka;
		ka |= 1;
		try {
			return e(t)
		} finally {
			(ka = c) === za && Wr()
		}
	}

	function hi(e, t, c, n) {
		var r = ka;
		ka |= 4;
		try {
			return Ur(98, e.bind(null, t, c, n))
		} finally {
			(ka = r) === za && Wr()
		}
	}

	function fi(e, t) {
		var c = ka;
		ka &= -2, ka |= ya;
		try {
			return e(t)
		} finally {
			(ka = c) === za && Wr()
		}
	}

	function vi(e, t) {
		e.finishedWork = null, e.finishedExpirationTime = 0;
		var c = e.timeoutHandle;
		if (-1 !== c && (e.timeoutHandle = -1, Jc(c)), null !== Ta) for (c = Ta.return; null !== c;) {
			var n = c;
			switch (n.tag) {
				case 1:
					var r = n.type.childContextTypes;
					null !== r && void 0 !== r && dr();
					break;
				case 3:
					Fl(), mr();
					break;
				case 5:
					jl(n);
					break;
				case 4:
					Fl();
					break;
				case 13:
				case 19:
					ar(Rl);
					break;
				case 10:
					el(n)
			}
			c = c.return
		}
		Oa = e, Ta = Ni(e.current, null), Ea = t, xa = ga, _a = null, Aa = Pa = 1073741823, Fa = null, Na = 0, ja = !1
	}

	function pi(e, t) {
		for (; ;) {
			try {
				if (Xr(), lo(), null === Ta || null === Ta.return) return xa = Ha, _a = t, null;
				e:{
					var c = e, n = Ta.return, r = Ta, l = t;
					if (t = Ea, r.effectTag |= 2048, r.firstEffect = r.lastEffect = null, null !== l && "object" === typeof l && "function" === typeof l.then) {
						var o = l, a = 0 !== (1 & Rl.current), i = n;
						do {
							var u;
							if (u = 13 === i.tag) {
								var s = i.memoizedState;
								if (null !== s) u = null !== s.dehydrated; else {
									var h = i.memoizedProps;
									u = void 0 !== h.fallback && (!0 !== h.unstable_avoidThisFallback || !a)
								}
							}
							if (u) {
								var f = i.updateQueue;
								if (null === f) {
									var v = new Set;
									v.add(o), i.updateQueue = v
								} else f.add(o);
								if (0 === (2 & i.mode)) {
									if (i.effectTag |= 64, r.effectTag &= -2981, 1 === r.tag) if (null === r.alternate) r.tag = 17; else {
										var p = al(1073741823, null);
										p.tag = 2, ul(r, p)
									}
									r.expirationTime = 1073741823;
									break e
								}
								l = void 0, r = t;
								var d = c.pingCache;
								if (null === d ? (d = c.pingCache = new ha, l = new Set, d.set(o, l)) : void 0 === (l = d.get(o)) && (l = new Set, d.set(o, l)), !l.has(r)) {
									l.add(r);
									var m = Ti.bind(null, c, o, r);
									o.then(m, m)
								}
								i.effectTag |= 4096, i.expirationTime = t;
								break e
							}
							i = i.return
						} while (null !== i);
						l = Error((Z(r.type) || "A React component") + " suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display." + X(r))
					}
					xa !== La && (xa = Va), l = Xo(l, r), i = n;
					do {
						switch (i.tag) {
							case 3:
								o = l, i.effectTag |= 4096, i.expirationTime = t, sl(i, fa(i, o, t));
								break e;
							case 1:
								o = l;
								var z = i.type, y = i.stateNode;
								if ((64 & i.effectTag) === zt && ("function" === typeof z.getDerivedStateFromError || null !== y && "function" === typeof y.componentDidCatch && (null === Ba || !Ba.has(y)))) {
									i.effectTag |= 4096, i.expirationTime = t, sl(i, va(i, o, t));
									break e
								}
						}
						i = i.return
					} while (null !== i)
				}
				Ta = gi(Ta)
			} catch (b) {
				t = b;
				continue
			}
			break
		}
	}

	function di() {
		var e = da.current;
		return da.current = zo, null === e ? zo : e
	}

	function mi(e, t) {
		e < Pa && 2 < e && (Pa = e), null !== t && e < Aa && 2 < e && (Aa = e, Fa = t)
	}

	function zi(e) {
		e > Na && (Na = e)
	}

	function yi() {
		for (; null !== Ta;) Ta = Mi(Ta)
	}

	function bi() {
		for (; null !== Ta && !wr();) Ta = Mi(Ta)
	}

	function Mi(e) {
		var t = ei(e.alternate, e, Ea);
		return e.memoizedProps = e.pendingProps, null === t && (t = gi(e)), ma.current = null, t
	}

	function gi(e) {
		Ta = e;
		do {
			var t = Ta.alternate;
			if (e = Ta.return, (2048 & Ta.effectTag) === zt) {
				e:{
					var c = t, n = Ea, l = (t = Ta).pendingProps;
					switch (t.tag) {
						case 2:
						case 16:
							break;
						case 15:
						case 0:
							break;
						case 1:
							pr(t.type) && dr();
							break;
						case 3:
							Fl(), mr(), (n = t.stateNode).pendingContext && (n.context = n.pendingContext, n.pendingContext = null), (null === c || null === c.child) && So(t) && Go(t), Io(t);
							break;
						case 5:
							jl(t), n = Pl(_l.current);
							var a = t.type;
							if (null !== c && null != t.stateNode) Uo(c, t, a, l, n), c.ref !== t.ref && (t.effectTag |= 128); else if (l) {
								var i = Pl(El.current);
								if (So(t)) {
									a = void 0, c = (l = t).stateNode;
									var u = l.type, s = l.memoizedProps;
									switch (c[nn] = l, c[rn] = s, u) {
										case"iframe":
										case"object":
										case"embed":
											bc("load", c);
											break;
										case"video":
										case"audio":
											for (var h = 0; h < Je.length; h++) bc(Je[h], c);
											break;
										case"source":
											bc("error", c);
											break;
										case"img":
										case"image":
										case"link":
											bc("error", c), bc("load", c);
											break;
										case"form":
											bc("reset", c), bc("submit", c);
											break;
										case"details":
											bc("toggle", c);
											break;
										case"input":
											Se(c, s), bc("invalid", c), Nc(n, "onChange");
											break;
										case"select":
											c._wrapperState = {wasMultiple: !!s.multiple}, bc("invalid", c), Nc(n, "onChange");
											break;
										case"textarea":
											Ae(c, s), bc("invalid", c), Nc(n, "onChange")
									}
									for (a in Ac(u, s), h = null, s) s.hasOwnProperty(a) && (i = s[a], "children" === a ? "string" === typeof i ? c.textContent !== i && (h = ["children", i]) : "number" === typeof i && c.textContent !== "" + i && (h = ["children", "" + i]) : v.hasOwnProperty(a) && null != i && Nc(n, a));
									switch (u) {
										case"input":
											we(c), Te(c, s, !0);
											break;
										case"textarea":
											we(c), Ne(c);
											break;
										case"select":
										case"option":
											break;
										default:
											"function" === typeof s.onClick && (c.onclick = jc)
									}
									n = h, l.updateQueue = n, null !== n && Go(t)
								} else {
									s = a, c = l, u = t, h = 9 === n.nodeType ? n : n.ownerDocument, i === je.html && (i = Re(s)), i === je.html ? "script" === s ? ((s = h.createElement("div")).innerHTML = "<script><\/script>", h = s.removeChild(s.firstChild)) : "string" === typeof c.is ? h = h.createElement(s, {is: c.is}) : (h = h.createElement(s), "select" === s && (s = h, c.multiple ? s.multiple = !0 : c.size && (s.size = c.size))) : h = h.createElementNS(i, s), (s = h)[nn] = u, s[rn] = c, Do(c = s, t, !1, !1), t.stateNode = c, i = n;
									var f = Fc(a, l);
									switch (a) {
										case"iframe":
										case"object":
										case"embed":
											bc("load", c), n = l;
											break;
										case"video":
										case"audio":
											for (n = 0; n < Je.length; n++) bc(Je[n], c);
											n = l;
											break;
										case"source":
											bc("error", c), n = l;
											break;
										case"img":
										case"image":
										case"link":
											bc("error", c), bc("load", c), n = l;
											break;
										case"form":
											bc("reset", c), bc("submit", c), n = l;
											break;
										case"details":
											bc("toggle", c), n = l;
											break;
										case"input":
											Se(c, l), n = Le(c, l), bc("invalid", c), Nc(i, "onChange");
											break;
										case"option":
											n = xe(c, l);
											break;
										case"select":
											c._wrapperState = {wasMultiple: !!l.multiple}, n = r({}, l, {value: void 0}), bc("invalid", c), Nc(i, "onChange");
											break;
										case"textarea":
											Ae(c, l), n = Pe(c, l), bc("invalid", c), Nc(i, "onChange");
											break;
										default:
											n = l
									}
									Ac(a, n), u = void 0, s = a, h = c;
									var p = n;
									for (u in p) if (p.hasOwnProperty(u)) {
										var d = p[u];
										"style" === u ? _c(h, d) : "dangerouslySetInnerHTML" === u ? null != (d = d ? d.__html : void 0) && Ue(h, d) : "children" === u ? "string" === typeof d ? ("textarea" !== s || "" !== d) && qe(h, d) : "number" === typeof d && qe(h, "" + d) : "suppressContentEditableWarning" !== u && "suppressHydrationWarning" !== u && "autoFocus" !== u && (v.hasOwnProperty(u) ? null != d && Nc(i, u) : null != d && He(h, u, d, f))
									}
									switch (a) {
										case"input":
											we(c), Te(c, l, !1);
											break;
										case"textarea":
											we(c), Ne(c);
											break;
										case"option":
											null != l.value && c.setAttribute("value", "" + ge(l.value));
											break;
										case"select":
											n = c, c = l, n.multiple = !!c.multiple, null != (u = c.value) ? _e(n, !!c.multiple, u, !1) : null != c.defaultValue && _e(n, !!c.multiple, c.defaultValue, !0);
											break;
										default:
											"function" === typeof n.onClick && (c.onclick = jc)
									}
									Yc(a, l) && Go(t)
								}
								null !== t.ref && (t.effectTag |= 128)
							} else if (null === t.stateNode) throw o(Error(166));
							break;
						case 6:
							if (c && null != t.stateNode) qo(c, t, c.memoizedProps, l); else {
								if ("string" !== typeof l && null === t.stateNode) throw o(Error(166));
								a = Pl(_l.current), Pl(El.current), So(t) ? (n = t.stateNode, l = t.memoizedProps, n[nn] = t, n.nodeValue !== l && Go(t)) : (n = t, (l = (9 === a.nodeType ? a : a.ownerDocument).createTextNode(l))[nn] = t, n.stateNode = l)
							}
							break;
						case 11:
							break;
						case 13:
							if (ar(Rl), l = t.memoizedState, (64 & t.effectTag) !== zt) {
								t.expirationTime = n;
								break e
							}
							n = null !== l, l = !1, null === c ? So(t) : (l = null !== (a = c.memoizedState), n || null === a || null !== (a = c.child.sibling) && (null !== (u = t.firstEffect) ? (t.firstEffect = a, a.nextEffect = u) : (t.firstEffect = t.lastEffect = a, a.nextEffect = null), a.effectTag = 8)), n && !l && 0 !== (2 & t.mode) && (null === c && !0 !== t.memoizedProps.unstable_avoidThisFallback || 0 !== (1 & Rl.current) ? xa === ga && (xa = wa) : (xa !== ga && xa !== wa || (xa = Ca), 0 !== Na && null !== Oa && (Bi(Oa, Ea), Wi(Oa, Na)))), (n || l) && (t.effectTag |= 4);
							break;
						case 7:
						case 8:
						case 12:
							break;
						case 4:
							Fl(), Io(t);
							break;
						case 10:
							el(t);
							break;
						case 9:
						case 14:
							break;
						case 17:
							pr(t.type) && dr();
							break;
						case 19:
							if (ar(Rl), null === (l = t.memoizedState)) break;
							if (a = (64 & t.effectTag) !== zt, null === (u = l.rendering)) {
								if (a) Yo(l, !1); else if (xa !== ga || null !== c && (64 & c.effectTag) !== zt) for (c = t.child; null !== c;) {
									if (null !== (u = Dl(c))) {
										for (t.effectTag |= 64, Yo(l, !1), null !== (l = u.updateQueue) && (t.updateQueue = l, t.effectTag |= 4), t.firstEffect = t.lastEffect = null, l = t.child; null !== l;) c = n, (a = l).effectTag &= yt, a.nextEffect = null, a.firstEffect = null, a.lastEffect = null, null === (u = a.alternate) ? (a.childExpirationTime = 0, a.expirationTime = c, a.child = null, a.memoizedProps = null, a.memoizedState = null, a.updateQueue = null, a.dependencies = null) : (a.childExpirationTime = u.childExpirationTime, a.expirationTime = u.expirationTime, a.child = u.child, a.memoizedProps = u.memoizedProps, a.memoizedState = u.memoizedState, a.updateQueue = u.updateQueue, c = u.dependencies, a.dependencies = null === c ? null : {
											expirationTime: c.expirationTime,
											firstContext: c.firstContext,
											responders: c.responders
										}), l = l.sibling;
										ir(Rl, 1 & Rl.current | 2), t = t.child;
										break e
									}
									c = c.sibling
								}
							} else {
								if (!a) if (null !== (c = Dl(u))) {
									if (t.effectTag |= 64, a = !0, Yo(l, !0), null === l.tail && "hidden" === l.tailMode) {
										null !== (n = c.updateQueue) && (t.updateQueue = n, t.effectTag |= 4), null !== (t = t.lastEffect = l.lastEffect) && (t.nextEffect = null);
										break
									}
								} else Rr() > l.tailExpiration && 1 < n && (t.effectTag |= 64, a = !0, Yo(l, !1), t.expirationTime = t.childExpirationTime = n - 1);
								l.isBackwards ? (u.sibling = t.child, t.child = u) : (null !== (n = l.last) ? n.sibling = u : t.child = u, l.last = u)
							}
							if (null !== l.tail) {
								0 === l.tailExpiration && (l.tailExpiration = Rr() + 500), n = l.tail, l.rendering = n, l.tail = n.sibling, l.lastEffect = t.lastEffect, n.sibling = null, l = Rl.current, ir(Rl, l = a ? 1 & l | 2 : 1 & l), t = n;
								break e
							}
							break;
						case 20:
						case 21:
							break;
						default:
							throw o(Error(156), t.tag)
					}
					t = null
				}
				if (n = Ta, 1 === Ea || 1 !== n.childExpirationTime) {
					for (l = 0, a = n.child; null !== a;) (c = a.expirationTime) > l && (l = c), (u = a.childExpirationTime) > l && (l = u), a = a.sibling;
					n.childExpirationTime = l
				}
				if (null !== t) return t;
				null !== e && (2048 & e.effectTag) === zt && (null === e.firstEffect && (e.firstEffect = Ta.firstEffect), null !== Ta.lastEffect && (null !== e.lastEffect && (e.lastEffect.nextEffect = Ta.firstEffect), e.lastEffect = Ta.lastEffect), 1 < Ta.effectTag && (null !== e.lastEffect ? e.lastEffect.nextEffect = Ta : e.firstEffect = Ta, e.lastEffect = Ta))
			} else {
				if (null !== (t = Zo(Ta))) return t.effectTag &= 2047, t;
				null !== e && (e.firstEffect = e.lastEffect = null, e.effectTag |= 2048)
			}
			if (null !== (t = Ta.sibling)) return t;
			Ta = e
		} while (null !== Ta);
		return xa === ga && (xa = La), null
	}

	function Hi(e) {
		var t = e.expirationTime;
		return t > (e = e.childExpirationTime) ? t : e
	}

	function Vi(e) {
		var t = Dr();
		return Ur(99, wi.bind(null, e, t)), null
	}

	function wi(e, t) {
		if (Li(), (ka & (ba | Ma)) !== za) throw o(Error(327));
		var c = e.finishedWork, n = e.finishedExpirationTime;
		if (null === c) return null;
		if (e.finishedWork = null, e.finishedExpirationTime = 0, c === e.current) throw o(Error(177));
		e.callbackNode = null, e.callbackExpirationTime = 0, e.callbackPriority = 90, e.nextKnownPendingLevel = 0;
		var r = Hi(c);
		if (e.firstPendingTime = r, n <= e.lastSuspendedTime ? e.firstSuspendedTime = e.lastSuspendedTime = e.nextKnownPendingLevel = 0 : n <= e.firstSuspendedTime && (e.firstSuspendedTime = n - 1), n <= e.lastPingedTime && (e.lastPingedTime = 0), n <= e.lastExpiredTime && (e.lastExpiredTime = 0), e === Oa && (Ta = Oa = null, Ea = 0), 1 < c.effectTag ? null !== c.lastEffect ? (c.lastEffect.nextEffect = c, r = c.firstEffect) : r = c : r = c.firstEffect, null !== r) {
			var l = ka;
			ka |= Ma, ma.current = null, $c = yc;
			var a = Uc();
			if (qc(a)) {
				if ("selectionStart" in a) var i = {start: a.selectionStart, end: a.selectionEnd}; else e:{
					var u = (i = (i = a.ownerDocument) && i.defaultView || window).getSelection && i.getSelection();
					if (u && 0 !== u.rangeCount) {
						i = u.anchorNode;
						var s = u.anchorOffset, h = u.focusNode;
						u = u.focusOffset;
						try {
							i.nodeType, h.nodeType
						} catch (F) {
							i = null;
							break e
						}
						var f = 0, v = -1, p = -1, d = 0, m = 0, z = a, y = null;
						t:for (; ;) {
							for (var b; z !== i || 0 !== s && 3 !== z.nodeType || (v = f + s), z !== h || 0 !== u && 3 !== z.nodeType || (p = f + u), 3 === z.nodeType && (f += z.nodeValue.length), null !== (b = z.firstChild);) y = z, z = b;
							for (; ;) {
								if (z === a) break t;
								if (y === i && ++d === s && (v = f), y === h && ++m === u && (p = f), null !== (b = z.nextSibling)) break;
								y = (z = y).parentNode
							}
							z = b
						}
						i = -1 === v || -1 === p ? null : {start: v, end: p}
					} else i = null
				}
				i = i || {start: 0, end: 0}
			} else i = null;
			Gc = {focusedElem: a, selectionRange: i}, yc = !1, Ia = r;
			do {
				try {
					Ci()
				} catch (F) {
					if (null === Ia) throw o(Error(330));
					Oi(Ia, F), Ia = Ia.nextEffect
				}
			} while (null !== Ia);
			Ia = r;
			do {
				try {
					for (a = e, i = t; null !== Ia;) {
						var M = Ia.effectTag;
						if (16 & M && qe(Ia.stateNode, ""), 128 & M) {
							var g = Ia.alternate;
							if (null !== g) {
								var H = g.ref;
								null !== H && ("function" === typeof H ? H(null) : H.current = null)
							}
						}
						switch (M & (12 | yt | bt)) {
							case yt:
								aa(Ia), Ia.effectTag &= ~yt;
								break;
							case 6:
								aa(Ia), Ia.effectTag &= ~yt, ua(Ia.alternate, Ia);
								break;
							case bt:
								Ia.effectTag &= ~bt;
								break;
							case 1028:
								Ia.effectTag &= ~bt, ua(Ia.alternate, Ia);
								break;
							case 4:
								ua(Ia.alternate, Ia);
								break;
							case 8:
								ia(a, s = Ia, i), la(s)
						}
						Ia = Ia.nextEffect
					}
				} catch (F) {
					if (null === Ia) throw o(Error(330));
					Oi(Ia, F), Ia = Ia.nextEffect
				}
			} while (null !== Ia);
			if (H = Gc, g = Uc(), M = H.focusedElem, i = H.selectionRange, g !== M && M && M.ownerDocument && function e(t, c) {
					return !(!t || !c) && (t === c || (!t || 3 !== t.nodeType) && (c && 3 === c.nodeType ? e(t, c.parentNode) : "contains" in t ? t.contains(c) : !!t.compareDocumentPosition && !!(16 & t.compareDocumentPosition(c))))
				}(M.ownerDocument.documentElement, M)) {
				null !== i && qc(M) && (g = i.start, void 0 === (H = i.end) && (H = g), "selectionStart" in M ? (M.selectionStart = g, M.selectionEnd = Math.min(H, M.value.length)) : (H = (g = M.ownerDocument || document) && g.defaultView || window).getSelection && (H = H.getSelection(), s = M.textContent.length, a = Math.min(i.start, s), i = void 0 === i.end ? a : Math.min(i.end, s), !H.extend && a > i && (s = i, i = a, a = s), s = Ic(M, a), h = Ic(M, i), s && h && (1 !== H.rangeCount || H.anchorNode !== s.node || H.anchorOffset !== s.offset || H.focusNode !== h.node || H.focusOffset !== h.offset) && ((g = g.createRange()).setStart(s.node, s.offset), H.removeAllRanges(), a > i ? (H.addRange(g), H.extend(h.node, h.offset)) : (g.setEnd(h.node, h.offset), H.addRange(g))))), g = [];
				for (H = M; H = H.parentNode;) 1 === H.nodeType && g.push({
					element: H,
					left: H.scrollLeft,
					top: H.scrollTop
				});
				for ("function" === typeof M.focus && M.focus(), M = 0; M < g.length; M++) (H = g[M]).element.scrollLeft = H.left, H.element.scrollTop = H.top
			}
			Gc = null, yc = !!$c, $c = null, e.current = c, Ia = r;
			do {
				try {
					for (M = n; null !== Ia;) {
						var V = Ia.effectTag;
						if (36 & V) {
							var w = Ia.alternate;
							switch (H = M, (g = Ia).tag) {
								case 0:
								case 11:
								case 15:
									na(16, 32, g);
									break;
								case 1:
									var C = g.stateNode;
									if (4 & g.effectTag) if (null === w) C.componentDidMount(); else {
										var L = g.elementType === g.type ? w.memoizedProps : Kr(g.type, w.memoizedProps);
										C.componentDidUpdate(L, w.memoizedState, C.__reactInternalSnapshotBeforeUpdate)
									}
									var S = g.updateQueue;
									null !== S && pl(0, S, C);
									break;
								case 3:
									var k = g.updateQueue;
									if (null !== k) {
										if (a = null, null !== g.child) switch (g.child.tag) {
											case 5:
												a = g.child.stateNode;
												break;
											case 1:
												a = g.child.stateNode
										}
										pl(0, k, a)
									}
									break;
								case 5:
									var O = g.stateNode;
									null === w && 4 & g.effectTag && (H = O, Yc(g.type, g.memoizedProps) && H.focus());
									break;
								case 6:
								case 4:
								case 12:
									break;
								case 13:
									if (null === g.memoizedState) {
										var T = g.alternate;
										if (null !== T) {
											var E = T.memoizedState;
											if (null !== E) {
												var x = E.dehydrated;
												null !== x && mt(x)
											}
										}
									}
									break;
								case 19:
								case 17:
								case 20:
								case 21:
									break;
								default:
									throw o(Error(163))
							}
						}
						if (128 & V) {
							var _ = (g = Ia).ref;
							if (null !== _) {
								var P = g.stateNode;
								switch (g.tag) {
									case 5:
										var A = P;
										break;
									default:
										A = P
								}
								"function" === typeof _ ? _(A) : _.current = A
							}
						}
						Ia = Ia.nextEffect
					}
				} catch (F) {
					if (null === Ia) throw o(Error(330));
					Oi(Ia, F), Ia = Ia.nextEffect
				}
			} while (null !== Ia);
			Ia = null, Pr(), ka = l
		} else e.current = c;
		if (Wa) Wa = !1, Qa = e, Ka = t; else for (Ia = r; null !== Ia;) t = Ia.nextEffect, Ia.nextEffect = null, Ia = t;
		if (0 === (t = e.firstPendingTime) && (Ba = null), 1073741823 === t ? e === Ya ? Ga++ : (Ga = 0, Ya = e) : Ga = 0, "function" === typeof xi && xi(c.stateNode, n), li(e), Ua) throw Ua = !1, e = qa, qa = null, e;
		return (ka & ya) !== za ? null : (Wr(), null)
	}

	function Ci() {
		for (; null !== Ia;) {
			var e = Ia.effectTag;
			(256 & e) !== zt && ca(Ia.alternate, Ia), (512 & e) === zt || Wa || (Wa = !0, qr(97, (function () {
				return Li(), null
			}))), Ia = Ia.nextEffect
		}
	}

	function Li() {
		if (90 !== Ka) {
			var e = 97 < Ka ? 97 : Ka;
			return Ka = 90, Ur(e, Si)
		}
	}

	function Si() {
		if (null === Qa) return !1;
		var e = Qa;
		if (Qa = null, (ka & (ba | Ma)) !== za) throw o(Error(331));
		var t = ka;
		for (ka |= Ma, e = e.current.firstEffect; null !== e;) {
			try {
				var c = e;
				if ((512 & c.effectTag) !== zt) switch (c.tag) {
					case 0:
					case 11:
					case 15:
						na(128, 0, c), na(0, 64, c)
				}
			} catch (n) {
				if (null === e) throw o(Error(330));
				Oi(e, n)
			}
			c = e.nextEffect, e.nextEffect = null, e = c
		}
		return ka = t, Wr(), !0
	}

	function ki(e, t, c) {
		ul(e, t = fa(e, t = Xo(c, t), 1073741823)), null !== (e = ni(e, 1073741823)) && li(e)
	}

	function Oi(e, t) {
		if (3 === e.tag) ki(e, e, t); else for (var c = e.return; null !== c;) {
			if (3 === c.tag) {
				ki(c, e, t);
				break
			}
			if (1 === c.tag) {
				var n = c.stateNode;
				if ("function" === typeof c.type.getDerivedStateFromError || "function" === typeof n.componentDidCatch && (null === Ba || !Ba.has(n))) {
					ul(c, e = va(c, e = Xo(t, e), 1073741823)), null !== (c = ni(c, 1073741823)) && li(c);
					break
				}
			}
			c = c.return
		}
	}

	function Ti(e, t, c) {
		var n = e.pingCache;
		null !== n && n.delete(t), Oa === e && Ea === c ? xa === Ca || xa === wa && 1073741823 === Pa && Rr() - Ra < Da ? vi(e, Ea) : ja = !0 : qi(e, c) && (0 !== (t = e.lastPingedTime) && t < c || (e.lastPingedTime = c, e.finishedExpirationTime === c && (e.finishedExpirationTime = 0, e.finishedWork = null), li(e)))
	}

	function Ei(e, t) {
		var c = e.stateNode;
		null !== c && c.delete(t), 1 === (t = 1) && (t = Ja(t = Xa(), e, null)), null !== (e = ni(e, t)) && li(e)
	}

	ei = function (e, t, c) {
		var n = t.expirationTime;
		if (null !== e) {
			var r = t.pendingProps;
			if (e.memoizedProps !== r || hr.current) To = !0; else {
				if (n < c) {
					switch (To = !1, t.tag) {
						case 3:
							Ro(t), ko();
							break;
						case 5:
							if (Nl(t), 4 & t.mode && 1 !== c && r.hidden) return t.expirationTime = t.childExpirationTime = 1, null;
							break;
						case 1:
							pr(t.type) && br(t);
							break;
						case 4:
							Al(t, t.stateNode.containerInfo);
							break;
						case 10:
							Jr(t, t.memoizedProps.value);
							break;
						case 13:
							if (null !== t.memoizedState) return 0 !== (n = t.child.childExpirationTime) && n >= c ? Wo(e, t, c) : (ir(Rl, 1 & Rl.current), null !== (t = $o(e, t, c)) ? t.sibling : null);
							ir(Rl, 1 & Rl.current);
							break;
						case 19:
							if (n = t.childExpirationTime >= c, (64 & e.effectTag) !== zt) {
								if (n) return Ko(e, t, c);
								t.effectTag |= 64
							}
							if (null !== (r = t.memoizedState) && (r.rendering = null, r.tail = null), ir(Rl, Rl.current), !n) return null
					}
					return $o(e, t, c)
				}
				To = !1
			}
		} else To = !1;
		switch (t.expirationTime = 0, t.tag) {
			case 2:
				if (n = t.type, null !== e && (e.alternate = null, t.alternate = null, t.effectTag |= yt), e = t.pendingProps, r = vr(t, sr.current), cl(t, c), r = ro(null, t, n, e, r, c), t.effectTag |= 1, "object" === typeof r && null !== r && "function" === typeof r.render && void 0 === r.$$typeof) {
					if (t.tag = 1, lo(), pr(n)) {
						var l = !0;
						br(t)
					} else l = !1;
					t.memoizedState = null !== r.state && void 0 !== r.state ? r.state : null;
					var a = n.getDerivedStateFromProps;
					"function" === typeof a && yl(t, n, a, e), r.updater = bl, t.stateNode = r, r._reactInternalFiber = t, Vl(t, n, e, c), t = jo(null, t, n, !0, l, c)
				} else t.tag = 0, Eo(null, t, r, c), t = t.child;
				return t;
			case 16:
				if (r = t.elementType, null !== e && (e.alternate = null, t.alternate = null, t.effectTag |= yt), e = t.pendingProps, function (e) {
						if (-1 === e._status) {
							e._status = 0;
							var t = e._ctor;
							t = t(), e._result = t, t.then((function (t) {
								0 === e._status && (t = t.default, e._status = 1, e._result = t)
							}), (function (t) {
								0 === e._status && (e._status = 2, e._result = t)
							}))
						}
					}(r), 1 !== r._status) throw r._result;
				switch (r = r._result, t.type = r, l = t.tag = function (e) {
					if ("function" === typeof e) return Fi(e) ? 1 : 0;
					if (void 0 !== e && null !== e) {
						if ((e = e.$$typeof) === B) return 11;
						if (e === K) return 14
					}
					return 2
				}(r), e = Kr(r, e), l) {
					case 0:
						t = Fo(null, t, r, e, c);
						break;
					case 1:
						t = No(null, t, r, e, c);
						break;
					case 11:
						t = xo(null, t, r, e, c);
						break;
					case 14:
						t = _o(null, t, r, Kr(r.type, e), n, c);
						break;
					default:
						throw o(Error(306), r, "")
				}
				return t;
			case 0:
				return n = t.type, r = t.pendingProps, Fo(e, t, n, r = t.elementType === n ? r : Kr(n, r), c);
			case 1:
				return n = t.type, r = t.pendingProps, No(e, t, n, r = t.elementType === n ? r : Kr(n, r), c);
			case 3:
				if (Ro(t), null === (n = t.updateQueue)) throw o(Error(282));
				if (r = null !== (r = t.memoizedState) ? r.element : null, vl(t, n, t.pendingProps, null, c), (n = t.memoizedState.element) === r) ko(), t = $o(e, t, c); else {
					if ((r = t.stateNode.hydrate) && (go = en(t.stateNode.containerInfo.firstChild), Mo = t, r = Ho = !0), r) for (c = Ol(t, null, n, c), t.child = c; c;) c.effectTag = c.effectTag & ~yt | bt, c = c.sibling; else Eo(e, t, n, c), ko();
					t = t.child
				}
				return t;
			case 5:
				return Nl(t), null === e && Co(t), n = t.type, r = t.pendingProps, l = null !== e ? e.memoizedProps : null, a = r.children, Zc(n, r) ? a = null : null !== l && Zc(n, l) && (t.effectTag |= 16), Ao(e, t), 4 & t.mode && 1 !== c && r.hidden ? (t.expirationTime = t.childExpirationTime = 1, t = null) : (Eo(e, t, a, c), t = t.child), t;
			case 6:
				return null === e && Co(t), null;
			case 13:
				return Wo(e, t, c);
			case 4:
				return Al(t, t.stateNode.containerInfo), n = t.pendingProps, null === e ? t.child = kl(t, null, n, c) : Eo(e, t, n, c), t.child;
			case 11:
				return n = t.type, r = t.pendingProps, xo(e, t, n, r = t.elementType === n ? r : Kr(n, r), c);
			case 7:
				return Eo(e, t, t.pendingProps, c), t.child;
			case 8:
			case 12:
				return Eo(e, t, t.pendingProps.children, c), t.child;
			case 10:
				e:{
					if (n = t.type._context, r = t.pendingProps, a = t.memoizedProps, Jr(t, l = r.value), null !== a) {
						var i = a.value;
						if (0 === (l = $n(i, l) ? 0 : 0 | ("function" === typeof n._calculateChangedBits ? n._calculateChangedBits(i, l) : 1073741823))) {
							if (a.children === r.children && !hr.current) {
								t = $o(e, t, c);
								break e
							}
						} else for (null !== (i = t.child) && (i.return = t); null !== i;) {
							var u = i.dependencies;
							if (null !== u) {
								a = i.child;
								for (var s = u.firstContext; null !== s;) {
									if (s.context === n && 0 !== (s.observedBits & l)) {
										1 === i.tag && ((s = al(c, null)).tag = 2, ul(i, s)), i.expirationTime < c && (i.expirationTime = c), null !== (s = i.alternate) && s.expirationTime < c && (s.expirationTime = c), tl(i.return, c), u.expirationTime < c && (u.expirationTime = c);
										break
									}
									s = s.next
								}
							} else a = 10 === i.tag && i.type === t.type ? null : i.child;
							if (null !== a) a.return = i; else for (a = i; null !== a;) {
								if (a === t) {
									a = null;
									break
								}
								if (null !== (i = a.sibling)) {
									i.return = a.return, a = i;
									break
								}
								a = a.return
							}
							i = a
						}
					}
					Eo(e, t, r.children, c), t = t.child
				}
				return t;
			case 9:
				return r = t.type, n = (l = t.pendingProps).children, cl(t, c), n = n(r = nl(r, l.unstable_observedBits)), t.effectTag |= 1, Eo(e, t, n, c), t.child;
			case 14:
				return l = Kr(r = t.type, t.pendingProps), _o(e, t, r, l = Kr(r.type, l), n, c);
			case 15:
				return Po(e, t, t.type, t.pendingProps, n, c);
			case 17:
				return n = t.type, r = t.pendingProps, r = t.elementType === n ? r : Kr(n, r), null !== e && (e.alternate = null, t.alternate = null, t.effectTag |= yt), t.tag = 1, pr(n) ? (e = !0, br(t)) : e = !1, cl(t, c), gl(t, n, r), Vl(t, n, r, c), jo(null, t, n, !0, e, c);
			case 19:
				return Ko(e, t, c)
		}
		throw o(Error(156), t.tag)
	};
	var xi = null, _i = null;

	function Pi(e, t, c, n) {
		this.tag = e, this.key = c, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = n, this.effectTag = zt, this.lastEffect = this.firstEffect = this.nextEffect = null, this.childExpirationTime = this.expirationTime = 0, this.alternate = null
	}

	function Ai(e, t, c, n) {
		return new Pi(e, t, c, n)
	}

	function Fi(e) {
		return !(!(e = e.prototype) || !e.isReactComponent)
	}

	function Ni(e, t) {
		var c = e.alternate;
		return null === c ? ((c = Ai(e.tag, t, e.key, e.mode)).elementType = e.elementType, c.type = e.type, c.stateNode = e.stateNode, c.alternate = e, e.alternate = c) : (c.pendingProps = t, c.effectTag = zt, c.nextEffect = null, c.firstEffect = null, c.lastEffect = null), c.childExpirationTime = e.childExpirationTime, c.expirationTime = e.expirationTime, c.child = e.child, c.memoizedProps = e.memoizedProps, c.memoizedState = e.memoizedState, c.updateQueue = e.updateQueue, t = e.dependencies, c.dependencies = null === t ? null : {
			expirationTime: t.expirationTime,
			firstContext: t.firstContext,
			responders: t.responders
		}, c.sibling = e.sibling, c.index = e.index, c.ref = e.ref, c
	}

	function ji(e, t, c, n, r, l) {
		var a = 2;
		if (n = e, "function" === typeof e) Fi(e) && (a = 1); else if ("string" === typeof e) a = 5; else e:switch (e) {
			case j:
				return Ri(c.children, r, l, t);
			case q:
				a = 8, r |= 7;
				break;
			case R:
				a = 8, r |= 1;
				break;
			case D:
				return (e = Ai(12, c, t, 8 | r)).elementType = D, e.type = D, e.expirationTime = l, e;
			case W:
				return (e = Ai(13, c, t, r)).type = W, e.elementType = W, e.expirationTime = l, e;
			case Q:
				return (e = Ai(19, c, t, r)).elementType = Q, e.expirationTime = l, e;
			default:
				if ("object" === typeof e && null !== e) switch (e.$$typeof) {
					case I:
						a = 10;
						break e;
					case U:
						a = 9;
						break e;
					case B:
						a = 11;
						break e;
					case K:
						a = 14;
						break e;
					case $:
						a = 16, n = null;
						break e
				}
				throw o(Error(130), null == e ? e : typeof e, "")
		}
		return (t = Ai(a, c, t, r)).elementType = e, t.type = n, t.expirationTime = l, t
	}

	function Ri(e, t, c, n) {
		return (e = Ai(7, e, n, t)).expirationTime = c, e
	}

	function Di(e, t, c) {
		return (e = Ai(6, e, null, t)).expirationTime = c, e
	}

	function Ii(e, t, c) {
		return (t = Ai(4, null !== e.children ? e.children : [], e.key, t)).expirationTime = c, t.stateNode = {
			containerInfo: e.containerInfo,
			pendingChildren: null,
			implementation: e.implementation
		}, t
	}

	function Ui(e, t, c) {
		this.tag = t, this.current = null, this.containerInfo = e, this.pingCache = this.pendingChildren = null, this.finishedExpirationTime = 0, this.finishedWork = null, this.timeoutHandle = -1, this.pendingContext = this.context = null, this.hydrate = c, this.callbackNode = this.firstBatch = null, this.callbackPriority = 90, this.lastExpiredTime = this.lastPingedTime = this.nextKnownPendingLevel = this.lastSuspendedTime = this.firstSuspendedTime = this.firstPendingTime = 0
	}

	function qi(e, t) {
		var c = e.firstSuspendedTime;
		return e = e.lastSuspendedTime, 0 !== c && c >= t && e <= t
	}

	function Bi(e, t) {
		var c = e.firstSuspendedTime, n = e.lastSuspendedTime;
		c < t && (e.firstSuspendedTime = t), (n > t || 0 === c) && (e.lastSuspendedTime = t), t <= e.lastPingedTime && (e.lastPingedTime = 0), t <= e.lastExpiredTime && (e.lastExpiredTime = 0)
	}

	function Wi(e, t) {
		t > e.firstPendingTime && (e.firstPendingTime = t);
		var c = e.firstSuspendedTime;
		0 !== c && (t >= c ? e.firstSuspendedTime = e.lastSuspendedTime = e.nextKnownPendingLevel = 0 : t >= e.lastSuspendedTime && (e.lastSuspendedTime = t + 1), t > e.nextKnownPendingLevel && (e.nextKnownPendingLevel = t))
	}

	function Qi(e, t) {
		var c = e.lastExpiredTime;
		(0 === c || c > t) && (e.lastExpiredTime = t)
	}

	function Ki(e, t, c, n, r, l) {
		var a = t.current;
		e:if (c) {
			t:{
				if (Mt(c = c._reactInternalFiber) !== c || 1 !== c.tag) throw o(Error(170));
				var i = c;
				do {
					switch (i.tag) {
						case 3:
							i = i.stateNode.context;
							break t;
						case 1:
							if (pr(i.type)) {
								i = i.stateNode.__reactInternalMemoizedMergedChildContext;
								break t
							}
					}
					i = i.return
				} while (null !== i);
				throw o(Error(171))
			}
			if (1 === c.tag) {
				var u = c.type;
				if (pr(u)) {
					c = yr(c, u, i);
					break e
				}
			}
			c = i
		} else c = ur;
		return null === t.context ? t.context = c : t.pendingContext = c, t = l, (r = al(n, r)).payload = {element: e}, null !== (t = void 0 === t ? null : t) && (r.callback = t), ul(a, r), ci(a, n), n
	}

	function $i(e, t, c, n) {
		var r = t.current, l = Xa(), o = ml.suspense;
		return Ki(e, t, c, r = Ja(l, r, o), o, n)
	}

	function Gi(e) {
		if (!(e = e.current).child) return null;
		switch (e.child.tag) {
			case 5:
			default:
				return e.child.stateNode
		}
	}

	function Yi(e) {
		var t = 1073741821 - 25 * (1 + ((1073741821 - Xa() + 500) / 25 | 0));
		t <= ti && --t, this._expirationTime = ti = t, this._root = e, this._callbacks = this._next = null, this._hasChildren = this._didComplete = !1, this._children = null, this._defer = !0
	}

	function Zi() {
		this._callbacks = null, this._didCommit = !1, this._onCommit = this._onCommit.bind(this)
	}

	function Xi(e, t, c) {
		var n = new Ui(e, t, c = null != c && !0 === c.hydrate), r = Ai(3, null, null, 2 === t ? 7 : 1 === t ? 3 : 0);
		return n.current = r, r.stateNode = n, e[ln] = n.current, c && 0 !== t && function (e) {
			var t = kc(e);
			at.forEach((function (c) {
				Oc(c, e, t)
			})), it.forEach((function (c) {
				Oc(c, e, t)
			}))
		}(9 === e.nodeType ? e : e.ownerDocument), n
	}

	function Ji(e, t, c) {
		this._internalRoot = Xi(e, t, c)
	}

	function eu(e, t) {
		this._internalRoot = Xi(e, 2, t)
	}

	function tu(e) {
		return !(!e || 1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType && (8 !== e.nodeType || " react-mount-point-unstable " !== e.nodeValue))
	}

	function cu(e, t, c, n, r) {
		var l = c._reactRootContainer;
		if (l) {
			var o = l._internalRoot;
			if ("function" === typeof r) {
				var a = r;
				r = function () {
					var e = Gi(o);
					a.call(e)
				}
			}
			$i(t, o, e, r)
		} else {
			if (l = c._reactRootContainer = function (e, t) {
					if (t || (t = !(!(t = e ? 9 === e.nodeType ? e.documentElement : e.firstChild : null) || 1 !== t.nodeType || !t.hasAttribute("data-reactroot"))), !t) for (var c; c = e.lastChild;) e.removeChild(c);
					return new Ji(e, 0, t ? {hydrate: !0} : void 0)
				}(c, n), o = l._internalRoot, "function" === typeof r) {
				var i = r;
				r = function () {
					var e = Gi(o);
					i.call(e)
				}
			}
			fi((function () {
				$i(t, o, e, r)
			}))
		}
		return Gi(o)
	}

	function nu(e, t) {
		var c = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
		if (!tu(t)) throw o(Error(200));
		return function (e, t, c) {
			var n = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
			return {$$typeof: N, key: null == n ? null : "" + n, children: e, containerInfo: t, implementation: c}
		}(e, t, null, c)
	}

	ee = function (e, t, c) {
		switch (t) {
			case"input":
				if (Oe(e, c), t = c.name, "radio" === c.type && null != t) {
					for (c = e; c.parentNode;) c = c.parentNode;
					for (c = c.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < c.length; t++) {
						var n = c[t];
						if (n !== e && n.form === e.form) {
							var r = sn(n);
							if (!r) throw o(Error(90));
							Ce(n), Oe(n, r)
						}
					}
				}
				break;
			case"textarea":
				Fe(e, c);
				break;
			case"select":
				null != (t = c.value) && _e(e, !!c.multiple, t, !1)
		}
	}, Yi.prototype.render = function (e) {
		if (!this._defer) throw o(Error(250));
		this._hasChildren = !0, this._children = e;
		var t = this._root._internalRoot, c = this._expirationTime, n = new Zi;
		return Ki(e, t, null, c, null, n._onCommit), n
	}, Yi.prototype.then = function (e) {
		if (this._didComplete) e(); else {
			var t = this._callbacks;
			null === t && (t = this._callbacks = []), t.push(e)
		}
	}, Yi.prototype.commit = function () {
		var e = this._root._internalRoot, t = e.firstBatch;
		if (!this._defer || null === t) throw o(Error(251));
		if (this._hasChildren) {
			var c = this._expirationTime;
			if (t !== this) {
				this._hasChildren && (c = this._expirationTime = t._expirationTime, this.render(this._children));
				for (var n = null, r = t; r !== this;) n = r, r = r._next;
				if (null === n) throw o(Error(251));
				n._next = r._next, this._next = t, e.firstBatch = this
			}
			if (this._defer = !1, t = c, (ka & (ba | Ma)) !== za) throw o(Error(253));
			Qi(e, t), li(e), Wr(), t = this._next, this._next = null, null !== (t = e.firstBatch = t) && t._hasChildren && t.render(t._children)
		} else this._next = null, this._defer = !1
	}, Yi.prototype._onComplete = function () {
		if (!this._didComplete) {
			this._didComplete = !0;
			var e = this._callbacks;
			if (null !== e) for (var t = 0; t < e.length; t++) (0, e[t])()
		}
	}, Zi.prototype.then = function (e) {
		if (this._didCommit) e(); else {
			var t = this._callbacks;
			null === t && (t = this._callbacks = []), t.push(e)
		}
	}, Zi.prototype._onCommit = function () {
		if (!this._didCommit) {
			this._didCommit = !0;
			var e = this._callbacks;
			if (null !== e) for (var t = 0; t < e.length; t++) {
				var c = e[t];
				if ("function" !== typeof c) throw o(Error(191), c);
				c()
			}
		}
	}, eu.prototype.render = Ji.prototype.render = function (e, t) {
		var c = this._internalRoot, n = new Zi;
		return null !== (t = void 0 === t ? null : t) && n.then(t), $i(e, c, null, n._onCommit), n
	}, eu.prototype.unmount = Ji.prototype.unmount = function (e) {
		var t = this._internalRoot, c = new Zi;
		return null !== (e = void 0 === e ? null : e) && c.then(e), $i(null, t, null, c._onCommit), c
	}, eu.prototype.createBatch = function () {
		var e = new Yi(this), t = e._expirationTime, c = this._internalRoot, n = c.firstBatch;
		if (null === n) c.firstBatch = e, e._next = null; else {
			for (c = null; null !== n && n._expirationTime >= t;) c = n, n = n._next;
			e._next = n, null !== c && (c._next = e)
		}
		return e
	}, oe = si, ae = hi, ie = ii, ue = function (e, t) {
		var c = ka;
		ka |= 2;
		try {
			return e(t)
		} finally {
			(ka = c) === za && Wr()
		}
	};
	var ru = {
		createPortal: nu,
		findDOMNode: function (e) {
			if (null == e) e = null; else if (1 !== e.nodeType) {
				var t = e._reactInternalFiber;
				if (void 0 === t) {
					if ("function" === typeof e.render) throw o(Error(188));
					throw o(Error(268), Object.keys(e))
				}
				e = null === (e = Ht(t)) ? null : e.stateNode
			}
			return e
		},
		hydrate: function (e, t, c) {
			if (!tu(t)) throw o(Error(200));
			return cu(null, e, t, !0, c)
		},
		render: function (e, t, c) {
			if (!tu(t)) throw o(Error(200));
			return cu(null, e, t, !1, c)
		},
		unstable_renderSubtreeIntoContainer: function (e, t, c, n) {
			if (!tu(c)) throw o(Error(200));
			if (null == e || void 0 === e._reactInternalFiber) throw o(Error(38));
			return cu(e, t, c, !1, n)
		},
		unmountComponentAtNode: function (e) {
			if (!tu(e)) throw o(Error(40));
			return !!e._reactRootContainer && (fi((function () {
				cu(null, null, e, !1, (function () {
					e._reactRootContainer = null
				}))
			})), !0)
		},
		unstable_createPortal: function () {
			return nu.apply(void 0, arguments)
		},
		unstable_batchedUpdates: si,
		unstable_interactiveUpdates: function (e, t, c, n) {
			return ii(), hi(e, t, c, n)
		},
		unstable_discreteUpdates: hi,
		unstable_flushDiscreteUpdates: ii,
		flushSync: function (e, t) {
			if ((ka & (ba | Ma)) !== za) throw o(Error(187));
			var c = ka;
			ka |= 1;
			try {
				return Ur(99, e.bind(null, t))
			} finally {
				ka = c, Wr()
			}
		},
		unstable_createRoot: function (e, t) {
			if (!tu(e)) throw o(Error(299), "unstable_createRoot");
			return new eu(e, t)
		},
		unstable_createSyncRoot: function (e, t) {
			if (!tu(e)) throw o(Error(299), "unstable_createRoot");
			return new Ji(e, 1, t)
		},
		unstable_flushControlled: function (e) {
			var t = ka;
			ka |= 1;
			try {
				Ur(99, e)
			} finally {
				(ka = t) === za && Wr()
			}
		},
		__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: {
			Events: [an, un, sn, E.injectEventPluginsByName, f, Ot, function (e) {
				S(e, kt)
			}, re, le, wc, T, Li, {current: !1}]
		}
	};
	!function (e) {
		var t = e.findFiberByHostInstance;
		(function (e) {
			if ("undefined" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) return !1;
			var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
			if (t.isDisabled || !t.supportsFiber) return !0;
			try {
				var c = t.inject(e);
				xi = function (e) {
					try {
						t.onCommitFiberRoot(c, e, void 0, 64 === (64 & e.current.effectTag))
					} catch (n) {
					}
				}, _i = function (e) {
					try {
						t.onCommitFiberUnmount(c, e)
					} catch (n) {
					}
				}
			} catch (n) {
			}
		})(r({}, e, {
			overrideHookState: null,
			overrideProps: null,
			setSuspenseHandler: null,
			scheduleUpdate: null,
			currentDispatcherRef: _.ReactCurrentDispatcher,
			findHostInstanceByFiber: function (e) {
				return null === (e = Ht(e)) ? null : e.stateNode
			},
			findFiberByHostInstance: function (e) {
				return t ? t(e) : null
			},
			findHostInstancesForRefresh: null,
			scheduleRefresh: null,
			scheduleRoot: null,
			setRefreshHandler: null,
			getCurrentFiber: null
		}))
	}({findFiberByHostInstance: on, bundleType: 0, version: "16.10.2", rendererPackageName: "react-dom"});
	var lu = {default: ru}, ou = lu && ru || lu;
	e.exports = ou.default || ou
}, function (e, t, c) {
	"use strict";
	e.exports = c(91)
}, function (e, t, c) {
	"use strict";
	var n, r, l, o, a;
	if (Object.defineProperty(t, "__esModule", {value: !0}), "undefined" === typeof window || "function" !== typeof MessageChannel) {
		var i = null, u = null, s = function e() {
			if (null !== i) try {
				var c = t.unstable_now();
				i(!0, c), i = null
			} catch (n) {
				throw setTimeout(e, 0), n
			}
		}, h = Date.now();
		t.unstable_now = function () {
			return Date.now() - h
		}, n = function (e) {
			null !== i ? setTimeout(n, 0, e) : (i = e, setTimeout(s, 0))
		}, r = function (e, t) {
			u = setTimeout(e, t)
		}, l = function () {
			clearTimeout(u)
		}, o = function () {
			return !1
		}, a = t.unstable_forceFrameRate = function () {
		}
	} else {
		var f = window.performance, v = window.Date, p = window.setTimeout, d = window.clearTimeout,
			m = window.requestAnimationFrame, z = window.cancelAnimationFrame;
		if ("undefined" !== typeof console && ("function" !== typeof m && console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"), "function" !== typeof z && console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills")), "object" === typeof f && "function" === typeof f.now) t.unstable_now = function () {
			return f.now()
		}; else {
			var y = v.now();
			t.unstable_now = function () {
				return v.now() - y
			}
		}
		var b = !1, M = null, g = -1, H = 5, V = 0;
		o = function () {
			return t.unstable_now() >= V
		}, a = function () {
		}, t.unstable_forceFrameRate = function (e) {
			0 > e || 125 < e ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing framerates higher than 125 fps is not unsupported") : H = 0 < e ? Math.floor(1e3 / e) : 33.33
		};
		var w = new MessageChannel, C = w.port2;
		w.port1.onmessage = function () {
			if (null !== M) {
				var e = t.unstable_now();
				V = e + H;
				try {
					M(!0, e) ? C.postMessage(null) : (b = !1, M = null)
				} catch (c) {
					throw C.postMessage(null), c
				}
			} else b = !1
		}, n = function (e) {
			M = e, b || (b = !0, C.postMessage(null))
		}, r = function (e, c) {
			g = p((function () {
				e(t.unstable_now())
			}), c)
		}, l = function () {
			d(g), g = -1
		}
	}

	function L(e, t) {
		var c = e.length;
		e.push(t);
		e:for (; ;) {
			var n = Math.floor((c - 1) / 2), r = e[n];
			if (!(void 0 !== r && 0 < O(r, t))) break e;
			e[n] = t, e[c] = r, c = n
		}
	}

	function S(e) {
		return void 0 === (e = e[0]) ? null : e
	}

	function k(e) {
		var t = e[0];
		if (void 0 !== t) {
			var c = e.pop();
			if (c !== t) {
				e[0] = c;
				e:for (var n = 0, r = e.length; n < r;) {
					var l = 2 * (n + 1) - 1, o = e[l], a = l + 1, i = e[a];
					if (void 0 !== o && 0 > O(o, c)) void 0 !== i && 0 > O(i, o) ? (e[n] = i, e[a] = c, n = a) : (e[n] = o, e[l] = c, n = l); else {
						if (!(void 0 !== i && 0 > O(i, c))) break e;
						e[n] = i, e[a] = c, n = a
					}
				}
			}
			return t
		}
		return null
	}

	function O(e, t) {
		var c = e.sortIndex - t.sortIndex;
		return 0 !== c ? c : e.id - t.id
	}

	var T = [], E = [], x = 1, _ = null, P = 3, A = !1, F = !1, N = !1;

	function j(e) {
		for (var t = S(E); null !== t;) {
			if (null === t.callback) k(E); else {
				if (!(t.startTime <= e)) break;
				k(E), t.sortIndex = t.expirationTime, L(T, t)
			}
			t = S(E)
		}
	}

	function R(e) {
		if (N = !1, j(e), !F) if (null !== S(T)) F = !0, n(D); else {
			var t = S(E);
			null !== t && r(R, t.startTime - e)
		}
	}

	function D(e, c) {
		F = !1, N && (N = !1, l()), A = !0;
		var n = P;
		try {
			for (j(c), _ = S(T); null !== _ && (!(_.expirationTime > c) || e && !o());) {
				var a = _.callback;
				if (null !== a) {
					_.callback = null, P = _.priorityLevel;
					var i = a(_.expirationTime <= c);
					c = t.unstable_now(), "function" === typeof i ? _.callback = i : _ === S(T) && k(T), j(c)
				} else k(T);
				_ = S(T)
			}
			if (null !== _) var u = !0; else {
				var s = S(E);
				null !== s && r(R, s.startTime - c), u = !1
			}
			return u
		} finally {
			_ = null, P = n, A = !1
		}
	}

	function I(e) {
		switch (e) {
			case 1:
				return -1;
			case 2:
				return 250;
			case 5:
				return 1073741823;
			case 4:
				return 1e4;
			default:
				return 5e3
		}
	}

	var U = a;
	t.unstable_ImmediatePriority = 1, t.unstable_UserBlockingPriority = 2, t.unstable_NormalPriority = 3, t.unstable_IdlePriority = 5, t.unstable_LowPriority = 4, t.unstable_runWithPriority = function (e, t) {
		switch (e) {
			case 1:
			case 2:
			case 3:
			case 4:
			case 5:
				break;
			default:
				e = 3
		}
		var c = P;
		P = e;
		try {
			return t()
		} finally {
			P = c
		}
	}, t.unstable_next = function (e) {
		switch (P) {
			case 1:
			case 2:
			case 3:
				var t = 3;
				break;
			default:
				t = P
		}
		var c = P;
		P = t;
		try {
			return e()
		} finally {
			P = c
		}
	}, t.unstable_scheduleCallback = function (e, c, o) {
		var a = t.unstable_now();
		if ("object" === typeof o && null !== o) {
			var i = o.delay;
			i = "number" === typeof i && 0 < i ? a + i : a, o = "number" === typeof o.timeout ? o.timeout : I(e)
		} else o = I(e), i = a;
		return e = {
			id: x++,
			callback: c,
			priorityLevel: e,
			startTime: i,
			expirationTime: o = i + o,
			sortIndex: -1
		}, i > a ? (e.sortIndex = i, L(E, e), null === S(T) && e === S(E) && (N ? l() : N = !0, r(R, i - a))) : (e.sortIndex = o, L(T, e), F || A || (F = !0, n(D))), e
	}, t.unstable_cancelCallback = function (e) {
		e.callback = null
	}, t.unstable_wrapCallback = function (e) {
		var t = P;
		return function () {
			var c = P;
			P = t;
			try {
				return e.apply(this, arguments)
			} finally {
				P = c
			}
		}
	}, t.unstable_getCurrentPriorityLevel = function () {
		return P
	}, t.unstable_shouldYield = function () {
		var e = t.unstable_now();
		j(e);
		var c = S(T);
		return c !== _ && null !== _ && null !== c && null !== c.callback && c.startTime <= e && c.expirationTime < _.expirationTime || o()
	}, t.unstable_requestPaint = U, t.unstable_continueExecution = function () {
		F || A || (F = !0, n(D))
	}, t.unstable_pauseExecution = function () {
	}, t.unstable_getFirstCallbackNode = function () {
		return S(T)
	}, t.unstable_Profiling = null
}, , , function (e, t, c) {
	"use strict";
	var n = c(95);

	function r() {
	}

	function l() {
	}

	l.resetWarningCache = r, e.exports = function () {
		function e(e, t, c, r, l, o) {
			if (o !== n) {
				var a = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
				throw a.name = "Invariant Violation", a
			}
		}

		function t() {
			return e
		}

		e.isRequired = e;
		var c = {
			array: e,
			bool: e,
			func: e,
			number: e,
			object: e,
			string: e,
			symbol: e,
			any: e,
			arrayOf: t,
			element: e,
			elementType: e,
			instanceOf: t,
			node: e,
			objectOf: t,
			oneOf: t,
			oneOfType: t,
			shape: t,
			exact: t,
			checkPropTypes: l,
			resetWarningCache: r
		};
		return c.PropTypes = c, c
	}
}, function (e, t, c) {
	"use strict";
	e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
}, function (e, t, c) {
	e.exports = {default: c(97), __esModule: !0}
}, function (e, t, c) {
	c(98), e.exports = c(14).Object.assign
}, function (e, t, c) {
	var n = c(27);
	n(n.S + n.F, "Object", {assign: c(100)})
}, function (e, t) {
	e.exports = function (e) {
		if ("function" != typeof e) throw TypeError(e + " is not a function!");
		return e
	}
}, function (e, t, c) {
	"use strict";
	var n = c(15), r = c(38), l = c(53), o = c(41), a = c(54), i = c(71), u = Object.assign;
	e.exports = !u || c(36)((function () {
		var e = {}, t = {}, c = Symbol(), n = "abcdefghijklmnopqrst";
		return e[c] = 7, n.split("").forEach((function (e) {
			t[e] = e
		})), 7 != u({}, e)[c] || Object.keys(u({}, t)).join("") != n
	})) ? function (e, t) {
		for (var c = a(e), u = arguments.length, s = 1, h = l.f, f = o.f; u > s;) for (var v, p = i(arguments[s++]), d = h ? r(p).concat(h(p)) : r(p), m = d.length, z = 0; m > z;) v = d[z++], n && !f.call(p, v) || (c[v] = p[v]);
		return c
	} : u
}, function (e, t, c) {
	var n = c(30), r = c(102), l = c(103);
	e.exports = function (e) {
		return function (t, c, o) {
			var a, i = n(t), u = r(i.length), s = l(o, u);
			if (e && c != c) {
				for (; u > s;) if ((a = i[s++]) != a) return !0
			} else for (; u > s; s++) if ((e || s in i) && i[s] === c) return e || s || 0;
			return !e && -1
		}
	}
}, function (e, t, c) {
	var n = c(49), r = Math.min;
	e.exports = function (e) {
		return e > 0 ? r(n(e), 9007199254740991) : 0
	}
}, function (e, t, c) {
	var n = c(49), r = Math.max, l = Math.min;
	e.exports = function (e, t) {
		return (e = n(e)) < 0 ? r(e + t, 0) : l(e, t)
	}
}, function (e, t, c) {
	c(105);
	var n = c(14).Object;
	e.exports = function (e, t, c) {
		return n.defineProperty(e, t, c)
	}
}, function (e, t, c) {
	var n = c(27);
	n(n.S + n.F * !c(15), "Object", {defineProperty: c(25).f})
}, function (e, t, c) {
	e.exports = {default: c(107), __esModule: !0}
}, function (e, t, c) {
	c(108), c(114), e.exports = c(58).f("iterator")
}, function (e, t, c) {
	"use strict";
	var n = c(109)(!0);
	c(74)(String, "String", (function (e) {
		this._t = String(e), this._i = 0
	}), (function () {
		var e, t = this._t, c = this._i;
		return c >= t.length ? {value: void 0, done: !0} : (e = n(t, c), this._i += e.length, {value: e, done: !1})
	}))
}, function (e, t, c) {
	var n = c(49), r = c(48);
	e.exports = function (e) {
		return function (t, c) {
			var l, o, a = String(r(t)), i = n(c), u = a.length;
			return i < 0 || i >= u ? e ? "" : void 0 : (l = a.charCodeAt(i)) < 55296 || l > 56319 || i + 1 === u || (o = a.charCodeAt(i + 1)) < 56320 || o > 57343 ? e ? a.charAt(i) : l : e ? a.slice(i, i + 2) : o - 56320 + (l - 55296 << 10) + 65536
		}
	}
}, function (e, t, c) {
	"use strict";
	var n = c(56), r = c(37), l = c(57), o = {};
	c(28)(o, c(31)("iterator"), (function () {
		return this
	})), e.exports = function (e, t, c) {
		e.prototype = n(o, {next: r(1, c)}), l(e, t + " Iterator")
	}
}, function (e, t, c) {
	var n = c(25), r = c(35), l = c(38);
	e.exports = c(15) ? Object.defineProperties : function (e, t) {
		r(e);
		for (var c, o = l(t), a = o.length, i = 0; a > i;) n.f(e, c = o[i++], t[c]);
		return e
	}
}, function (e, t, c) {
	var n = c(13).document;
	e.exports = n && n.documentElement
}, function (e, t, c) {
	var n = c(26), r = c(54), l = c(50)("IE_PROTO"), o = Object.prototype;
	e.exports = Object.getPrototypeOf || function (e) {
		return e = r(e), n(e, l) ? e[l] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? o : null
	}
}, function (e, t, c) {
	c(115);
	for (var n = c(13), r = c(28), l = c(55), o = c(31)("toStringTag"), a = "CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","), i = 0; i < a.length; i++) {
		var u = a[i], s = n[u], h = s && s.prototype;
		h && !h[o] && r(h, o, u), l[u] = l.Array
	}
}, function (e, t, c) {
	"use strict";
	var n = c(116), r = c(117), l = c(55), o = c(30);
	e.exports = c(74)(Array, "Array", (function (e, t) {
		this._t = o(e), this._i = 0, this._k = t
	}), (function () {
		var e = this._t, t = this._k, c = this._i++;
		return !e || c >= e.length ? (this._t = void 0, r(1)) : r(0, "keys" == t ? c : "values" == t ? e[c] : [c, e[c]])
	}), "values"), l.Arguments = l.Array, n("keys"), n("values"), n("entries")
}, function (e, t) {
	e.exports = function () {
	}
}, function (e, t) {
	e.exports = function (e, t) {
		return {value: t, done: !!e}
	}
}, function (e, t, c) {
	e.exports = {default: c(119), __esModule: !0}
}, function (e, t, c) {
	c(120), c(125), c(126), c(127), e.exports = c(14).Symbol
}, function (e, t, c) {
	"use strict";
	var n = c(13), r = c(26), l = c(15), o = c(27), a = c(75), i = c(121).KEY, u = c(36), s = c(51), h = c(57),
		f = c(40), v = c(31), p = c(58), d = c(59), m = c(122), z = c(123), y = c(35), b = c(29), M = c(54), g = c(30),
		H = c(47), V = c(37), w = c(56), C = c(124), L = c(77), S = c(53), k = c(25), O = c(38), T = L.f, E = k.f,
		x = C.f, _ = n.Symbol, P = n.JSON, A = P && P.stringify, F = v("_hidden"), N = v("toPrimitive"),
		j = {}.propertyIsEnumerable, R = s("symbol-registry"), D = s("symbols"), I = s("op-symbols"),
		U = Object.prototype, q = "function" == typeof _ && !!S.f, B = n.QObject,
		W = !B || !B.prototype || !B.prototype.findChild, Q = l && u((function () {
			return 7 != w(E({}, "a", {
				get: function () {
					return E(this, "a", {value: 7}).a
				}
			})).a
		})) ? function (e, t, c) {
			var n = T(U, t);
			n && delete U[t], E(e, t, c), n && e !== U && E(U, t, n)
		} : E, K = function (e) {
			var t = D[e] = w(_.prototype);
			return t._k = e, t
		}, $ = q && "symbol" == typeof _.iterator ? function (e) {
			return "symbol" == typeof e
		} : function (e) {
			return e instanceof _
		}, G = function (e, t, c) {
			return e === U && G(I, t, c), y(e), t = H(t, !0), y(c), r(D, t) ? (c.enumerable ? (r(e, F) && e[F][t] && (e[F][t] = !1), c = w(c, {enumerable: V(0, !1)})) : (r(e, F) || E(e, F, V(1, {})), e[F][t] = !0), Q(e, t, c)) : E(e, t, c)
		}, Y = function (e, t) {
			y(e);
			for (var c, n = m(t = g(t)), r = 0, l = n.length; l > r;) G(e, c = n[r++], t[c]);
			return e
		}, Z = function (e) {
			var t = j.call(this, e = H(e, !0));
			return !(this === U && r(D, e) && !r(I, e)) && (!(t || !r(this, e) || !r(D, e) || r(this, F) && this[F][e]) || t)
		}, X = function (e, t) {
			if (e = g(e), t = H(t, !0), e !== U || !r(D, t) || r(I, t)) {
				var c = T(e, t);
				return !c || !r(D, t) || r(e, F) && e[F][t] || (c.enumerable = !0), c
			}
		}, J = function (e) {
			for (var t, c = x(g(e)), n = [], l = 0; c.length > l;) r(D, t = c[l++]) || t == F || t == i || n.push(t);
			return n
		}, ee = function (e) {
			for (var t, c = e === U, n = x(c ? I : g(e)), l = [], o = 0; n.length > o;) !r(D, t = n[o++]) || c && !r(U, t) || l.push(D[t]);
			return l
		};
	q || (a((_ = function () {
		if (this instanceof _) throw TypeError("Symbol is not a constructor!");
		var e = f(arguments.length > 0 ? arguments[0] : void 0), t = function t(c) {
			this === U && t.call(I, c), r(this, F) && r(this[F], e) && (this[F][e] = !1), Q(this, e, V(1, c))
		};
		return l && W && Q(U, e, {configurable: !0, set: t}), K(e)
	}).prototype, "toString", (function () {
		return this._k
	})), L.f = X, k.f = G, c(76).f = C.f = J, c(41).f = Z, S.f = ee, l && !c(39) && a(U, "propertyIsEnumerable", Z, !0), p.f = function (e) {
		return K(v(e))
	}), o(o.G + o.W + o.F * !q, {Symbol: _});
	for (var te = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), ce = 0; te.length > ce;) v(te[ce++]);
	for (var ne = O(v.store), re = 0; ne.length > re;) d(ne[re++]);
	o(o.S + o.F * !q, "Symbol", {
		for: function (e) {
			return r(R, e += "") ? R[e] : R[e] = _(e)
		}, keyFor: function (e) {
			if (!$(e)) throw TypeError(e + " is not a symbol!");
			for (var t in R) if (R[t] === e) return t
		}, useSetter: function () {
			W = !0
		}, useSimple: function () {
			W = !1
		}
	}), o(o.S + o.F * !q, "Object", {
		create: function (e, t) {
			return void 0 === t ? w(e) : Y(w(e), t)
		},
		defineProperty: G,
		defineProperties: Y,
		getOwnPropertyDescriptor: X,
		getOwnPropertyNames: J,
		getOwnPropertySymbols: ee
	});
	var le = u((function () {
		S.f(1)
	}));
	o(o.S + o.F * le, "Object", {
		getOwnPropertySymbols: function (e) {
			return S.f(M(e))
		}
	}), P && o(o.S + o.F * (!q || u((function () {
		var e = _();
		return "[null]" != A([e]) || "{}" != A({a: e}) || "{}" != A(Object(e))
	}))), "JSON", {
		stringify: function (e) {
			for (var t, c, n = [e], r = 1; arguments.length > r;) n.push(arguments[r++]);
			if (c = t = n[1], (b(t) || void 0 !== e) && !$(e)) return z(t) || (t = function (e, t) {
				if ("function" == typeof c && (t = c.call(this, e, t)), !$(t)) return t
			}), n[1] = t, A.apply(P, n)
		}
	}), _.prototype[N] || c(28)(_.prototype, N, _.prototype.valueOf), h(_, "Symbol"), h(Math, "Math", !0), h(n.JSON, "JSON", !0)
}, function (e, t, c) {
	var n = c(40)("meta"), r = c(29), l = c(26), o = c(25).f, a = 0, i = Object.isExtensible || function () {
		return !0
	}, u = !c(36)((function () {
		return i(Object.preventExtensions({}))
	})), s = function (e) {
		o(e, n, {value: {i: "O" + ++a, w: {}}})
	}, h = e.exports = {
		KEY: n, NEED: !1, fastKey: function (e, t) {
			if (!r(e)) return "symbol" == typeof e ? e : ("string" == typeof e ? "S" : "P") + e;
			if (!l(e, n)) {
				if (!i(e)) return "F";
				if (!t) return "E";
				s(e)
			}
			return e[n].i
		}, getWeak: function (e, t) {
			if (!l(e, n)) {
				if (!i(e)) return !0;
				if (!t) return !1;
				s(e)
			}
			return e[n].w
		}, onFreeze: function (e) {
			return u && h.NEED && i(e) && !l(e, n) && s(e), e
		}
	}
}, function (e, t, c) {
	var n = c(38), r = c(53), l = c(41);
	e.exports = function (e) {
		var t = n(e), c = r.f;
		if (c) for (var o, a = c(e), i = l.f, u = 0; a.length > u;) i.call(e, o = a[u++]) && t.push(o);
		return t
	}
}, function (e, t, c) {
	var n = c(72);
	e.exports = Array.isArray || function (e) {
		return "Array" == n(e)
	}
}, function (e, t, c) {
	var n = c(30), r = c(76).f, l = {}.toString,
		o = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
	e.exports.f = function (e) {
		return o && "[object Window]" == l.call(e) ? function (e) {
			try {
				return r(e)
			} catch (t) {
				return o.slice()
			}
		}(e) : r(n(e))
	}
}, function (e, t) {
}, function (e, t, c) {
	c(59)("asyncIterator")
}, function (e, t, c) {
	c(59)("observable")
}, function (e, t, c) {
	e.exports = {default: c(129), __esModule: !0}
}, function (e, t, c) {
	c(130), e.exports = c(14).Object.setPrototypeOf
}, function (e, t, c) {
	var n = c(27);
	n(n.S, "Object", {setPrototypeOf: c(131).set})
}, function (e, t, c) {
	var n = c(29), r = c(35), l = function (e, t) {
		if (r(e), !n(t) && null !== t) throw TypeError(t + ": can't set as prototype!")
	};
	e.exports = {
		set: Object.setPrototypeOf || ("__proto__" in {} ? function (e, t, n) {
			try {
				(n = c(67)(Function.call, c(77).f(Object.prototype, "__proto__").set, 2))(e, []), t = !(e instanceof Array)
			} catch (r) {
				t = !0
			}
			return function (e, c) {
				return l(e, c), t ? e.__proto__ = c : n(e, c), e
			}
		}({}, !1) : void 0), check: l
	}
}, function (e, t, c) {
	e.exports = {default: c(133), __esModule: !0}
}, function (e, t, c) {
	c(134);
	var n = c(14).Object;
	e.exports = function (e, t) {
		return n.create(e, t)
	}
}, function (e, t, c) {
	var n = c(27);
	n(n.S, "Object", {create: c(56)})
}, function (e, t, c) {
	"use strict";
	var n = this && this.__importDefault || function (e) {
		return e && e.__esModule ? e : {default: e}
	};
	Object.defineProperty(t, "__esModule", {value: !0});
	var r = n(c(136)), l = 2, o = 16, a = 5, i = 5, u = 15, s = 5, h = 4;

	function f(e, t, c) {
		var n;
		return (n = Math.round(e.h) >= 60 && Math.round(e.h) <= 240 ? c ? Math.round(e.h) - l * t : Math.round(e.h) + l * t : c ? Math.round(e.h) + l * t : Math.round(e.h) - l * t) < 0 ? n += 360 : n >= 360 && (n -= 360), n
	}

	function v(e, t, c) {
		return 0 === e.h && 0 === e.s ? e.s : ((n = c ? Math.round(100 * e.s) - o * t : t === h ? Math.round(100 * e.s) + o : Math.round(100 * e.s) + a * t) > 100 && (n = 100), c && t === s && n > 10 && (n = 10), n < 6 && (n = 6), n);
		var n
	}

	function p(e, t, c) {
		return c ? Math.round(100 * e.v) + i * t : Math.round(100 * e.v) - u * t
	}

	t.default = function (e) {
		for (var t = [], c = r.default(e), n = s; n > 0; n -= 1) {
			var l = c.toHsv(), o = r.default({h: f(l, n, !0), s: v(l, n, !0), v: p(l, n, !0)}).toHexString();
			t.push(o)
		}
		for (t.push(c.toHexString()), n = 1; n <= h; n += 1) {
			l = c.toHsv(), o = r.default({h: f(l, n), s: v(l, n), v: p(l, n)}).toHexString();
			t.push(o)
		}
		return t
	}
}, function (e, t, c) {
	var n;
	!function (r) {
		var l = /^\s+/, o = /\s+$/, a = 0, i = r.round, u = r.min, s = r.max, h = r.random;

		function f(e, t) {
			if (t = t || {}, (e = e || "") instanceof f) return e;
			if (!(this instanceof f)) return new f(e, t);
			var c = function (e) {
				var t = {r: 0, g: 0, b: 0}, c = 1, n = null, a = null, i = null, h = !1, f = !1;
				"string" == typeof e && (e = function (e) {
					e = e.replace(l, "").replace(o, "").toLowerCase();
					var t, c = !1;
					if (T[e]) e = T[e], c = !0; else if ("transparent" == e) return {
						r: 0,
						g: 0,
						b: 0,
						a: 0,
						format: "name"
					};
					if (t = D.rgb.exec(e)) return {r: t[1], g: t[2], b: t[3]};
					if (t = D.rgba.exec(e)) return {r: t[1], g: t[2], b: t[3], a: t[4]};
					if (t = D.hsl.exec(e)) return {h: t[1], s: t[2], l: t[3]};
					if (t = D.hsla.exec(e)) return {h: t[1], s: t[2], l: t[3], a: t[4]};
					if (t = D.hsv.exec(e)) return {h: t[1], s: t[2], v: t[3]};
					if (t = D.hsva.exec(e)) return {h: t[1], s: t[2], v: t[3], a: t[4]};
					if (t = D.hex8.exec(e)) return {
						r: A(t[1]),
						g: A(t[2]),
						b: A(t[3]),
						a: R(t[4]),
						format: c ? "name" : "hex8"
					};
					if (t = D.hex6.exec(e)) return {r: A(t[1]), g: A(t[2]), b: A(t[3]), format: c ? "name" : "hex"};
					if (t = D.hex4.exec(e)) return {
						r: A(t[1] + "" + t[1]),
						g: A(t[2] + "" + t[2]),
						b: A(t[3] + "" + t[3]),
						a: R(t[4] + "" + t[4]),
						format: c ? "name" : "hex8"
					};
					if (t = D.hex3.exec(e)) return {
						r: A(t[1] + "" + t[1]),
						g: A(t[2] + "" + t[2]),
						b: A(t[3] + "" + t[3]),
						format: c ? "name" : "hex"
					};
					return !1
				}(e));
				"object" == typeof e && (I(e.r) && I(e.g) && I(e.b) ? (v = e.r, p = e.g, d = e.b, t = {
					r: 255 * _(v, 255),
					g: 255 * _(p, 255),
					b: 255 * _(d, 255)
				}, h = !0, f = "%" === String(e.r).substr(-1) ? "prgb" : "rgb") : I(e.h) && I(e.s) && I(e.v) ? (n = N(e.s), a = N(e.v), t = function (e, t, c) {
					e = 6 * _(e, 360), t = _(t, 100), c = _(c, 100);
					var n = r.floor(e), l = e - n, o = c * (1 - t), a = c * (1 - l * t), i = c * (1 - (1 - l) * t),
						u = n % 6;
					return {
						r: 255 * [c, a, o, o, i, c][u],
						g: 255 * [i, c, c, a, o, o][u],
						b: 255 * [o, o, i, c, c, a][u]
					}
				}(e.h, n, a), h = !0, f = "hsv") : I(e.h) && I(e.s) && I(e.l) && (n = N(e.s), i = N(e.l), t = function (e, t, c) {
					var n, r, l;

					function o(e, t, c) {
						return c < 0 && (c += 1), c > 1 && (c -= 1), c < 1 / 6 ? e + 6 * (t - e) * c : c < .5 ? t : c < 2 / 3 ? e + (t - e) * (2 / 3 - c) * 6 : e
					}

					if (e = _(e, 360), t = _(t, 100), c = _(c, 100), 0 === t) n = r = l = c; else {
						var a = c < .5 ? c * (1 + t) : c + t - c * t, i = 2 * c - a;
						n = o(i, a, e + 1 / 3), r = o(i, a, e), l = o(i, a, e - 1 / 3)
					}
					return {r: 255 * n, g: 255 * r, b: 255 * l}
				}(e.h, n, i), h = !0, f = "hsl"), e.hasOwnProperty("a") && (c = e.a));
				var v, p, d;
				return c = x(c), {
					ok: h,
					format: e.format || f,
					r: u(255, s(t.r, 0)),
					g: u(255, s(t.g, 0)),
					b: u(255, s(t.b, 0)),
					a: c
				}
			}(e);
			this._originalInput = e, this._r = c.r, this._g = c.g, this._b = c.b, this._a = c.a, this._roundA = i(100 * this._a) / 100, this._format = t.format || c.format, this._gradientType = t.gradientType, this._r < 1 && (this._r = i(this._r)), this._g < 1 && (this._g = i(this._g)), this._b < 1 && (this._b = i(this._b)), this._ok = c.ok, this._tc_id = a++
		}

		function v(e, t, c) {
			e = _(e, 255), t = _(t, 255), c = _(c, 255);
			var n, r, l = s(e, t, c), o = u(e, t, c), a = (l + o) / 2;
			if (l == o) n = r = 0; else {
				var i = l - o;
				switch (r = a > .5 ? i / (2 - l - o) : i / (l + o), l) {
					case e:
						n = (t - c) / i + (t < c ? 6 : 0);
						break;
					case t:
						n = (c - e) / i + 2;
						break;
					case c:
						n = (e - t) / i + 4
				}
				n /= 6
			}
			return {h: n, s: r, l: a}
		}

		function p(e, t, c) {
			e = _(e, 255), t = _(t, 255), c = _(c, 255);
			var n, r, l = s(e, t, c), o = u(e, t, c), a = l, i = l - o;
			if (r = 0 === l ? 0 : i / l, l == o) n = 0; else {
				switch (l) {
					case e:
						n = (t - c) / i + (t < c ? 6 : 0);
						break;
					case t:
						n = (c - e) / i + 2;
						break;
					case c:
						n = (e - t) / i + 4
				}
				n /= 6
			}
			return {h: n, s: r, v: a}
		}

		function d(e, t, c, n) {
			var r = [F(i(e).toString(16)), F(i(t).toString(16)), F(i(c).toString(16))];
			return n && r[0].charAt(0) == r[0].charAt(1) && r[1].charAt(0) == r[1].charAt(1) && r[2].charAt(0) == r[2].charAt(1) ? r[0].charAt(0) + r[1].charAt(0) + r[2].charAt(0) : r.join("")
		}

		function m(e, t, c, n) {
			return [F(j(n)), F(i(e).toString(16)), F(i(t).toString(16)), F(i(c).toString(16))].join("")
		}

		function z(e, t) {
			t = 0 === t ? 0 : t || 10;
			var c = f(e).toHsl();
			return c.s -= t / 100, c.s = P(c.s), f(c)
		}

		function y(e, t) {
			t = 0 === t ? 0 : t || 10;
			var c = f(e).toHsl();
			return c.s += t / 100, c.s = P(c.s), f(c)
		}

		function b(e) {
			return f(e).desaturate(100)
		}

		function M(e, t) {
			t = 0 === t ? 0 : t || 10;
			var c = f(e).toHsl();
			return c.l += t / 100, c.l = P(c.l), f(c)
		}

		function g(e, t) {
			t = 0 === t ? 0 : t || 10;
			var c = f(e).toRgb();
			return c.r = s(0, u(255, c.r - i(-t / 100 * 255))), c.g = s(0, u(255, c.g - i(-t / 100 * 255))), c.b = s(0, u(255, c.b - i(-t / 100 * 255))), f(c)
		}

		function H(e, t) {
			t = 0 === t ? 0 : t || 10;
			var c = f(e).toHsl();
			return c.l -= t / 100, c.l = P(c.l), f(c)
		}

		function V(e, t) {
			var c = f(e).toHsl(), n = (c.h + t) % 360;
			return c.h = n < 0 ? 360 + n : n, f(c)
		}

		function w(e) {
			var t = f(e).toHsl();
			return t.h = (t.h + 180) % 360, f(t)
		}

		function C(e) {
			var t = f(e).toHsl(), c = t.h;
			return [f(e), f({h: (c + 120) % 360, s: t.s, l: t.l}), f({h: (c + 240) % 360, s: t.s, l: t.l})]
		}

		function L(e) {
			var t = f(e).toHsl(), c = t.h;
			return [f(e), f({h: (c + 90) % 360, s: t.s, l: t.l}), f({
				h: (c + 180) % 360,
				s: t.s,
				l: t.l
			}), f({h: (c + 270) % 360, s: t.s, l: t.l})]
		}

		function S(e) {
			var t = f(e).toHsl(), c = t.h;
			return [f(e), f({h: (c + 72) % 360, s: t.s, l: t.l}), f({h: (c + 216) % 360, s: t.s, l: t.l})]
		}

		function k(e, t, c) {
			t = t || 6, c = c || 30;
			var n = f(e).toHsl(), r = 360 / c, l = [f(e)];
			for (n.h = (n.h - (r * t >> 1) + 720) % 360; --t;) n.h = (n.h + r) % 360, l.push(f(n));
			return l
		}

		function O(e, t) {
			t = t || 6;
			for (var c = f(e).toHsv(), n = c.h, r = c.s, l = c.v, o = [], a = 1 / t; t--;) o.push(f({
				h: n,
				s: r,
				v: l
			})), l = (l + a) % 1;
			return o
		}

		f.prototype = {
			isDark: function () {
				return this.getBrightness() < 128
			}, isLight: function () {
				return !this.isDark()
			}, isValid: function () {
				return this._ok
			}, getOriginalInput: function () {
				return this._originalInput
			}, getFormat: function () {
				return this._format
			}, getAlpha: function () {
				return this._a
			}, getBrightness: function () {
				var e = this.toRgb();
				return (299 * e.r + 587 * e.g + 114 * e.b) / 1e3
			}, getLuminance: function () {
				var e, t, c, n = this.toRgb();
				return e = n.r / 255, t = n.g / 255, c = n.b / 255, .2126 * (e <= .03928 ? e / 12.92 : r.pow((e + .055) / 1.055, 2.4)) + .7152 * (t <= .03928 ? t / 12.92 : r.pow((t + .055) / 1.055, 2.4)) + .0722 * (c <= .03928 ? c / 12.92 : r.pow((c + .055) / 1.055, 2.4))
			}, setAlpha: function (e) {
				return this._a = x(e), this._roundA = i(100 * this._a) / 100, this
			}, toHsv: function () {
				var e = p(this._r, this._g, this._b);
				return {h: 360 * e.h, s: e.s, v: e.v, a: this._a}
			}, toHsvString: function () {
				var e = p(this._r, this._g, this._b), t = i(360 * e.h), c = i(100 * e.s), n = i(100 * e.v);
				return 1 == this._a ? "hsv(" + t + ", " + c + "%, " + n + "%)" : "hsva(" + t + ", " + c + "%, " + n + "%, " + this._roundA + ")"
			}, toHsl: function () {
				var e = v(this._r, this._g, this._b);
				return {h: 360 * e.h, s: e.s, l: e.l, a: this._a}
			}, toHslString: function () {
				var e = v(this._r, this._g, this._b), t = i(360 * e.h), c = i(100 * e.s), n = i(100 * e.l);
				return 1 == this._a ? "hsl(" + t + ", " + c + "%, " + n + "%)" : "hsla(" + t + ", " + c + "%, " + n + "%, " + this._roundA + ")"
			}, toHex: function (e) {
				return d(this._r, this._g, this._b, e)
			}, toHexString: function (e) {
				return "#" + this.toHex(e)
			}, toHex8: function (e) {
				return function (e, t, c, n, r) {
					var l = [F(i(e).toString(16)), F(i(t).toString(16)), F(i(c).toString(16)), F(j(n))];
					if (r && l[0].charAt(0) == l[0].charAt(1) && l[1].charAt(0) == l[1].charAt(1) && l[2].charAt(0) == l[2].charAt(1) && l[3].charAt(0) == l[3].charAt(1)) return l[0].charAt(0) + l[1].charAt(0) + l[2].charAt(0) + l[3].charAt(0);
					return l.join("")
				}(this._r, this._g, this._b, this._a, e)
			}, toHex8String: function (e) {
				return "#" + this.toHex8(e)
			}, toRgb: function () {
				return {r: i(this._r), g: i(this._g), b: i(this._b), a: this._a}
			}, toRgbString: function () {
				return 1 == this._a ? "rgb(" + i(this._r) + ", " + i(this._g) + ", " + i(this._b) + ")" : "rgba(" + i(this._r) + ", " + i(this._g) + ", " + i(this._b) + ", " + this._roundA + ")"
			}, toPercentageRgb: function () {
				return {
					r: i(100 * _(this._r, 255)) + "%",
					g: i(100 * _(this._g, 255)) + "%",
					b: i(100 * _(this._b, 255)) + "%",
					a: this._a
				}
			}, toPercentageRgbString: function () {
				return 1 == this._a ? "rgb(" + i(100 * _(this._r, 255)) + "%, " + i(100 * _(this._g, 255)) + "%, " + i(100 * _(this._b, 255)) + "%)" : "rgba(" + i(100 * _(this._r, 255)) + "%, " + i(100 * _(this._g, 255)) + "%, " + i(100 * _(this._b, 255)) + "%, " + this._roundA + ")"
			}, toName: function () {
				return 0 === this._a ? "transparent" : !(this._a < 1) && (E[d(this._r, this._g, this._b, !0)] || !1)
			}, toFilter: function (e) {
				var t = "#" + m(this._r, this._g, this._b, this._a), c = t,
					n = this._gradientType ? "GradientType = 1, " : "";
				if (e) {
					var r = f(e);
					c = "#" + m(r._r, r._g, r._b, r._a)
				}
				return "progid:DXImageTransform.Microsoft.gradient(" + n + "startColorstr=" + t + ",endColorstr=" + c + ")"
			}, toString: function (e) {
				var t = !!e;
				e = e || this._format;
				var c = !1, n = this._a < 1 && this._a >= 0;
				return t || !n || "hex" !== e && "hex6" !== e && "hex3" !== e && "hex4" !== e && "hex8" !== e && "name" !== e ? ("rgb" === e && (c = this.toRgbString()), "prgb" === e && (c = this.toPercentageRgbString()), "hex" !== e && "hex6" !== e || (c = this.toHexString()), "hex3" === e && (c = this.toHexString(!0)), "hex4" === e && (c = this.toHex8String(!0)), "hex8" === e && (c = this.toHex8String()), "name" === e && (c = this.toName()), "hsl" === e && (c = this.toHslString()), "hsv" === e && (c = this.toHsvString()), c || this.toHexString()) : "name" === e && 0 === this._a ? this.toName() : this.toRgbString()
			}, clone: function () {
				return f(this.toString())
			}, _applyModification: function (e, t) {
				var c = e.apply(null, [this].concat([].slice.call(t)));
				return this._r = c._r, this._g = c._g, this._b = c._b, this.setAlpha(c._a), this
			}, lighten: function () {
				return this._applyModification(M, arguments)
			}, brighten: function () {
				return this._applyModification(g, arguments)
			}, darken: function () {
				return this._applyModification(H, arguments)
			}, desaturate: function () {
				return this._applyModification(z, arguments)
			}, saturate: function () {
				return this._applyModification(y, arguments)
			}, greyscale: function () {
				return this._applyModification(b, arguments)
			}, spin: function () {
				return this._applyModification(V, arguments)
			}, _applyCombination: function (e, t) {
				return e.apply(null, [this].concat([].slice.call(t)))
			}, analogous: function () {
				return this._applyCombination(k, arguments)
			}, complement: function () {
				return this._applyCombination(w, arguments)
			}, monochromatic: function () {
				return this._applyCombination(O, arguments)
			}, splitcomplement: function () {
				return this._applyCombination(S, arguments)
			}, triad: function () {
				return this._applyCombination(C, arguments)
			}, tetrad: function () {
				return this._applyCombination(L, arguments)
			}
		}, f.fromRatio = function (e, t) {
			if ("object" == typeof e) {
				var c = {};
				for (var n in e) e.hasOwnProperty(n) && (c[n] = "a" === n ? e[n] : N(e[n]));
				e = c
			}
			return f(e, t)
		}, f.equals = function (e, t) {
			return !(!e || !t) && f(e).toRgbString() == f(t).toRgbString()
		}, f.random = function () {
			return f.fromRatio({r: h(), g: h(), b: h()})
		}, f.mix = function (e, t, c) {
			c = 0 === c ? 0 : c || 50;
			var n = f(e).toRgb(), r = f(t).toRgb(), l = c / 100;
			return f({
				r: (r.r - n.r) * l + n.r,
				g: (r.g - n.g) * l + n.g,
				b: (r.b - n.b) * l + n.b,
				a: (r.a - n.a) * l + n.a
			})
		}, f.readability = function (e, t) {
			var c = f(e), n = f(t);
			return (r.max(c.getLuminance(), n.getLuminance()) + .05) / (r.min(c.getLuminance(), n.getLuminance()) + .05)
		}, f.isReadable = function (e, t, c) {
			var n, r, l = f.readability(e, t);
			switch (r = !1, (n = function (e) {
				var t, c;
				t = ((e = e || {
					level: "AA",
					size: "small"
				}).level || "AA").toUpperCase(), c = (e.size || "small").toLowerCase(), "AA" !== t && "AAA" !== t && (t = "AA");
				"small" !== c && "large" !== c && (c = "small");
				return {level: t, size: c}
			}(c)).level + n.size) {
				case"AAsmall":
				case"AAAlarge":
					r = l >= 4.5;
					break;
				case"AAlarge":
					r = l >= 3;
					break;
				case"AAAsmall":
					r = l >= 7
			}
			return r
		}, f.mostReadable = function (e, t, c) {
			var n, r, l, o, a = null, i = 0;
			r = (c = c || {}).includeFallbackColors, l = c.level, o = c.size;
			for (var u = 0; u < t.length; u++) (n = f.readability(e, t[u])) > i && (i = n, a = f(t[u]));
			return f.isReadable(e, a, {
				level: l,
				size: o
			}) || !r ? a : (c.includeFallbackColors = !1, f.mostReadable(e, ["#fff", "#000"], c))
		};
		var T = f.names = {
			aliceblue: "f0f8ff",
			antiquewhite: "faebd7",
			aqua: "0ff",
			aquamarine: "7fffd4",
			azure: "f0ffff",
			beige: "f5f5dc",
			bisque: "ffe4c4",
			black: "000",
			blanchedalmond: "ffebcd",
			blue: "00f",
			blueviolet: "8a2be2",
			brown: "a52a2a",
			burlywood: "deb887",
			burntsienna: "ea7e5d",
			cadetblue: "5f9ea0",
			chartreuse: "7fff00",
			chocolate: "d2691e",
			coral: "ff7f50",
			cornflowerblue: "6495ed",
			cornsilk: "fff8dc",
			crimson: "dc143c",
			cyan: "0ff",
			darkblue: "00008b",
			darkcyan: "008b8b",
			darkgoldenrod: "b8860b",
			darkgray: "a9a9a9",
			darkgreen: "006400",
			darkgrey: "a9a9a9",
			darkkhaki: "bdb76b",
			darkmagenta: "8b008b",
			darkolivegreen: "556b2f",
			darkorange: "ff8c00",
			darkorchid: "9932cc",
			darkred: "8b0000",
			darksalmon: "e9967a",
			darkseagreen: "8fbc8f",
			darkslateblue: "483d8b",
			darkslategray: "2f4f4f",
			darkslategrey: "2f4f4f",
			darkturquoise: "00ced1",
			darkviolet: "9400d3",
			deeppink: "ff1493",
			deepskyblue: "00bfff",
			dimgray: "696969",
			dimgrey: "696969",
			dodgerblue: "1e90ff",
			firebrick: "b22222",
			floralwhite: "fffaf0",
			forestgreen: "228b22",
			fuchsia: "f0f",
			gainsboro: "dcdcdc",
			ghostwhite: "f8f8ff",
			gold: "ffd700",
			goldenrod: "daa520",
			gray: "808080",
			green: "008000",
			greenyellow: "adff2f",
			grey: "808080",
			honeydew: "f0fff0",
			hotpink: "ff69b4",
			indianred: "cd5c5c",
			indigo: "4b0082",
			ivory: "fffff0",
			khaki: "f0e68c",
			lavender: "e6e6fa",
			lavenderblush: "fff0f5",
			lawngreen: "7cfc00",
			lemonchiffon: "fffacd",
			lightblue: "add8e6",
			lightcoral: "f08080",
			lightcyan: "e0ffff",
			lightgoldenrodyellow: "fafad2",
			lightgray: "d3d3d3",
			lightgreen: "90ee90",
			lightgrey: "d3d3d3",
			lightpink: "ffb6c1",
			lightsalmon: "ffa07a",
			lightseagreen: "20b2aa",
			lightskyblue: "87cefa",
			lightslategray: "789",
			lightslategrey: "789",
			lightsteelblue: "b0c4de",
			lightyellow: "ffffe0",
			lime: "0f0",
			limegreen: "32cd32",
			linen: "faf0e6",
			magenta: "f0f",
			maroon: "800000",
			mediumaquamarine: "66cdaa",
			mediumblue: "0000cd",
			mediumorchid: "ba55d3",
			mediumpurple: "9370db",
			mediumseagreen: "3cb371",
			mediumslateblue: "7b68ee",
			mediumspringgreen: "00fa9a",
			mediumturquoise: "48d1cc",
			mediumvioletred: "c71585",
			midnightblue: "191970",
			mintcream: "f5fffa",
			mistyrose: "ffe4e1",
			moccasin: "ffe4b5",
			navajowhite: "ffdead",
			navy: "000080",
			oldlace: "fdf5e6",
			olive: "808000",
			olivedrab: "6b8e23",
			orange: "ffa500",
			orangered: "ff4500",
			orchid: "da70d6",
			palegoldenrod: "eee8aa",
			palegreen: "98fb98",
			paleturquoise: "afeeee",
			palevioletred: "db7093",
			papayawhip: "ffefd5",
			peachpuff: "ffdab9",
			peru: "cd853f",
			pink: "ffc0cb",
			plum: "dda0dd",
			powderblue: "b0e0e6",
			purple: "800080",
			rebeccapurple: "663399",
			red: "f00",
			rosybrown: "bc8f8f",
			royalblue: "4169e1",
			saddlebrown: "8b4513",
			salmon: "fa8072",
			sandybrown: "f4a460",
			seagreen: "2e8b57",
			seashell: "fff5ee",
			sienna: "a0522d",
			silver: "c0c0c0",
			skyblue: "87ceeb",
			slateblue: "6a5acd",
			slategray: "708090",
			slategrey: "708090",
			snow: "fffafa",
			springgreen: "00ff7f",
			steelblue: "4682b4",
			tan: "d2b48c",
			teal: "008080",
			thistle: "d8bfd8",
			tomato: "ff6347",
			turquoise: "40e0d0",
			violet: "ee82ee",
			wheat: "f5deb3",
			white: "fff",
			whitesmoke: "f5f5f5",
			yellow: "ff0",
			yellowgreen: "9acd32"
		}, E = f.hexNames = function (e) {
			var t = {};
			for (var c in e) e.hasOwnProperty(c) && (t[e[c]] = c);
			return t
		}(T);

		function x(e) {
			return e = parseFloat(e), (isNaN(e) || e < 0 || e > 1) && (e = 1), e
		}

		function _(e, t) {
			(function (e) {
				return "string" == typeof e && -1 != e.indexOf(".") && 1 === parseFloat(e)
			})(e) && (e = "100%");
			var c = function (e) {
				return "string" === typeof e && -1 != e.indexOf("%")
			}(e);
			return e = u(t, s(0, parseFloat(e))), c && (e = parseInt(e * t, 10) / 100), r.abs(e - t) < 1e-6 ? 1 : e % t / parseFloat(t)
		}

		function P(e) {
			return u(1, s(0, e))
		}

		function A(e) {
			return parseInt(e, 16)
		}

		function F(e) {
			return 1 == e.length ? "0" + e : "" + e
		}

		function N(e) {
			return e <= 1 && (e = 100 * e + "%"), e
		}

		function j(e) {
			return r.round(255 * parseFloat(e)).toString(16)
		}

		function R(e) {
			return A(e) / 255
		}

		var D = function () {
			var e = "(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)",
				t = "[\\s|\\(]+(" + e + ")[,|\\s]+(" + e + ")[,|\\s]+(" + e + ")\\s*\\)?",
				c = "[\\s|\\(]+(" + e + ")[,|\\s]+(" + e + ")[,|\\s]+(" + e + ")[,|\\s]+(" + e + ")\\s*\\)?";
			return {
				CSS_UNIT: new RegExp(e),
				rgb: new RegExp("rgb" + t),
				rgba: new RegExp("rgba" + c),
				hsl: new RegExp("hsl" + t),
				hsla: new RegExp("hsla" + c),
				hsv: new RegExp("hsv" + t),
				hsva: new RegExp("hsva" + c),
				hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
				hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
				hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
				hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
			}
		}();

		function I(e) {
			return !!D.CSS_UNIT.exec(e)
		}

		e.exports ? e.exports = f : void 0 === (n = function () {
			return f
		}.call(t, c, t, e)) || (e.exports = n)
	}(Math)
}, function (e, t, c) {
	"use strict";
	t.__esModule = !0;
	var n = c(0), r = (o(n), o(c(1))), l = o(c(138));
	o(c(139));

	function o(e) {
		return e && e.__esModule ? e : {default: e}
	}

	function a(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}

	function i(e, t) {
		if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return !t || "object" !== typeof t && "function" !== typeof t ? e : t
	}

	function u(e, t) {
		if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
		e.prototype = Object.create(t && t.prototype, {
			constructor: {
				value: e,
				enumerable: !1,
				writable: !0,
				configurable: !0
			}
		}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
	}

	var s = 1073741823;
	t.default = function (e, t) {
		var c, o, h = "__create-react-context-" + (0, l.default)() + "__", f = function (e) {
			function c() {
				var t, n;
				a(this, c);
				for (var r = arguments.length, l = Array(r), o = 0; o < r; o++) l[o] = arguments[o];
				return t = n = i(this, e.call.apply(e, [this].concat(l))), n.emitter = function (e) {
					var t = [];
					return {
						on: function (e) {
							t.push(e)
						}, off: function (e) {
							t = t.filter((function (t) {
								return t !== e
							}))
						}, get: function () {
							return e
						}, set: function (c, n) {
							e = c, t.forEach((function (t) {
								return t(e, n)
							}))
						}
					}
				}(n.props.value), i(n, t)
			}

			return u(c, e), c.prototype.getChildContext = function () {
				var e;
				return (e = {})[h] = this.emitter, e
			}, c.prototype.componentWillReceiveProps = function (e) {
				if (this.props.value !== e.value) {
					var c = this.props.value, n = e.value, r = void 0;
					((l = c) === (o = n) ? 0 !== l || 1 / l === 1 / o : l !== l && o !== o) ? r = 0 : (r = "function" === typeof t ? t(c, n) : s, 0 !== (r |= 0) && this.emitter.set(e.value, r))
				}
				var l, o
			}, c.prototype.render = function () {
				return this.props.children
			}, c
		}(n.Component);
		f.childContextTypes = ((c = {})[h] = r.default.object.isRequired, c);
		var v = function (t) {
			function c() {
				var e, n;
				a(this, c);
				for (var r = arguments.length, l = Array(r), o = 0; o < r; o++) l[o] = arguments[o];
				return e = n = i(this, t.call.apply(t, [this].concat(l))), n.state = {value: n.getValue()}, n.onUpdate = function (e, t) {
					0 !== ((0 | n.observedBits) & t) && n.setState({value: n.getValue()})
				}, i(n, e)
			}

			return u(c, t), c.prototype.componentWillReceiveProps = function (e) {
				var t = e.observedBits;
				this.observedBits = void 0 === t || null === t ? s : t
			}, c.prototype.componentDidMount = function () {
				this.context[h] && this.context[h].on(this.onUpdate);
				var e = this.props.observedBits;
				this.observedBits = void 0 === e || null === e ? s : e
			}, c.prototype.componentWillUnmount = function () {
				this.context[h] && this.context[h].off(this.onUpdate)
			}, c.prototype.getValue = function () {
				return this.context[h] ? this.context[h].get() : e
			}, c.prototype.render = function () {
				return (e = this.props.children, Array.isArray(e) ? e[0] : e)(this.state.value);
				var e
			}, c
		}(n.Component);
		return v.contextTypes = ((o = {})[h] = r.default.object, o), {Provider: f, Consumer: v}
	}, e.exports = t.default
}, function (e, t, c) {
	"use strict";
	(function (t) {
		var c = "__global_unique_id__";
		e.exports = function () {
			return t[c] = (t[c] || 0) + 1
		}
	}).call(this, c(60))
}, function (e, t, c) {
	"use strict";
	var n = function () {
	};
	e.exports = n
}, function (e, t, c) {
	(function (t) {
		(function () {
			var c, n, r, l, o, a;
			"undefined" !== typeof performance && null !== performance && performance.now ? e.exports = function () {
				return performance.now()
			} : "undefined" !== typeof t && null !== t && t.hrtime ? (e.exports = function () {
				return (c() - o) / 1e6
			}, n = t.hrtime, l = (c = function () {
				var e;
				return 1e9 * (e = n())[0] + e[1]
			})(), a = 1e9 * t.uptime(), o = l - a) : Date.now ? (e.exports = function () {
				return Date.now() - r
			}, r = Date.now()) : (e.exports = function () {
				return (new Date).getTime() - r
			}, r = (new Date).getTime())
		}).call(this)
	}).call(this, c(78))
}, function (e, t, c) {
	"use strict";
	Object.defineProperty(t, "__esModule", {value: !0}), t.default = function (e) {
		if (e instanceof HTMLElement) return e;
		return r.default.findDOMNode(e)
	};
	var n, r = (n = c(16)) && n.__esModule ? n : {default: n}
}, function (e, t, c) {
	"use strict";
	Object.defineProperty(t, "__esModule", {value: !0}), t.default = function (e) {
		var t = [];
		return r.default.Children.forEach(e, (function (e) {
			t.push(e)
		})), t
	};
	var n, r = (n = c(0)) && n.__esModule ? n : {default: n}
}, function (e, t, c) {
	"use strict";
	Object.defineProperty(t, "__esModule", {value: !0}), t.warning = r, t.note = l, t.resetWarned = function () {
		n = {}
	}, t.call = o, t.warningOnce = a, t.noteOnce = function (e, t) {
		o(l, e, t)
	}, t.default = void 0;
	var n = {};

	function r(e, t) {
		0
	}

	function l(e, t) {
		0
	}

	function o(e, t, c) {
		t || n[c] || (e(!1, c), n[c] = !0)
	}

	function a(e, t) {
		o(r, e, t)
	}

	var i = a;
	t.default = i
}, function (e, t, c) {
	"use strict";
	c.r(t), function (e) {
		var c = function () {
				if ("undefined" !== typeof Map) return Map;

				function e(e, t) {
					var c = -1;
					return e.some((function (e, n) {
						return e[0] === t && (c = n, !0)
					})), c
				}

				return function () {
					function t() {
						this.__entries__ = []
					}

					return Object.defineProperty(t.prototype, "size", {
						get: function () {
							return this.__entries__.length
						}, enumerable: !0, configurable: !0
					}), t.prototype.get = function (t) {
						var c = e(this.__entries__, t), n = this.__entries__[c];
						return n && n[1]
					}, t.prototype.set = function (t, c) {
						var n = e(this.__entries__, t);
						~n ? this.__entries__[n][1] = c : this.__entries__.push([t, c])
					}, t.prototype.delete = function (t) {
						var c = this.__entries__, n = e(c, t);
						~n && c.splice(n, 1)
					}, t.prototype.has = function (t) {
						return !!~e(this.__entries__, t)
					}, t.prototype.clear = function () {
						this.__entries__.splice(0)
					}, t.prototype.forEach = function (e, t) {
						void 0 === t && (t = null);
						for (var c = 0, n = this.__entries__; c < n.length; c++) {
							var r = n[c];
							e.call(t, r[1], r[0])
						}
					}, t
				}()
			}(), n = "undefined" !== typeof window && "undefined" !== typeof document && window.document === document,
			r = "undefined" !== typeof e && e.Math === Math ? e : "undefined" !== typeof self && self.Math === Math ? self : "undefined" !== typeof window && window.Math === Math ? window : Function("return this")(),
			l = "function" === typeof requestAnimationFrame ? requestAnimationFrame.bind(r) : function (e) {
				return setTimeout((function () {
					return e(Date.now())
				}), 1e3 / 60)
			}, o = 2;
		var a = 20, i = ["top", "right", "bottom", "left", "width", "height", "size", "weight"],
			u = "undefined" !== typeof MutationObserver, s = function () {
				function e() {
					this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = function (e, t) {
						var c = !1, n = !1, r = 0;

						function a() {
							c && (c = !1, e()), n && u()
						}

						function i() {
							l(a)
						}

						function u() {
							var e = Date.now();
							if (c) {
								if (e - r < o) return;
								n = !0
							} else c = !0, n = !1, setTimeout(i, t);
							r = e
						}

						return u
					}(this.refresh.bind(this), a)
				}

				return e.prototype.addObserver = function (e) {
					~this.observers_.indexOf(e) || this.observers_.push(e), this.connected_ || this.connect_()
				}, e.prototype.removeObserver = function (e) {
					var t = this.observers_, c = t.indexOf(e);
					~c && t.splice(c, 1), !t.length && this.connected_ && this.disconnect_()
				}, e.prototype.refresh = function () {
					this.updateObservers_() && this.refresh()
				}, e.prototype.updateObservers_ = function () {
					var e = this.observers_.filter((function (e) {
						return e.gatherActive(), e.hasActive()
					}));
					return e.forEach((function (e) {
						return e.broadcastActive()
					})), e.length > 0
				}, e.prototype.connect_ = function () {
					n && !this.connected_ && (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), u ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
						attributes: !0,
						childList: !0,
						characterData: !0,
						subtree: !0
					})) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0)
				}, e.prototype.disconnect_ = function () {
					n && this.connected_ && (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1)
				}, e.prototype.onTransitionEnd_ = function (e) {
					var t = e.propertyName, c = void 0 === t ? "" : t;
					i.some((function (e) {
						return !!~c.indexOf(e)
					})) && this.refresh()
				}, e.getInstance = function () {
					return this.instance_ || (this.instance_ = new e), this.instance_
				}, e.instance_ = null, e
			}(), h = function (e, t) {
				for (var c = 0, n = Object.keys(t); c < n.length; c++) {
					var r = n[c];
					Object.defineProperty(e, r, {value: t[r], enumerable: !1, writable: !1, configurable: !0})
				}
				return e
			}, f = function (e) {
				return e && e.ownerDocument && e.ownerDocument.defaultView || r
			}, v = b(0, 0, 0, 0);

		function p(e) {
			return parseFloat(e) || 0
		}

		function d(e) {
			for (var t = [], c = 1; c < arguments.length; c++) t[c - 1] = arguments[c];
			return t.reduce((function (t, c) {
				return t + p(e["border-" + c + "-width"])
			}), 0)
		}

		function m(e) {
			var t = e.clientWidth, c = e.clientHeight;
			if (!t && !c) return v;
			var n = f(e).getComputedStyle(e), r = function (e) {
				for (var t = {}, c = 0, n = ["top", "right", "bottom", "left"]; c < n.length; c++) {
					var r = n[c], l = e["padding-" + r];
					t[r] = p(l)
				}
				return t
			}(n), l = r.left + r.right, o = r.top + r.bottom, a = p(n.width), i = p(n.height);
			if ("border-box" === n.boxSizing && (Math.round(a + l) !== t && (a -= d(n, "left", "right") + l), Math.round(i + o) !== c && (i -= d(n, "top", "bottom") + o)), !function (e) {
					return e === f(e).document.documentElement
				}(e)) {
				var u = Math.round(a + l) - t, s = Math.round(i + o) - c;
				1 !== Math.abs(u) && (a -= u), 1 !== Math.abs(s) && (i -= s)
			}
			return b(r.left, r.top, a, i)
		}

		var z = "undefined" !== typeof SVGGraphicsElement ? function (e) {
			return e instanceof f(e).SVGGraphicsElement
		} : function (e) {
			return e instanceof f(e).SVGElement && "function" === typeof e.getBBox
		};

		function y(e) {
			return n ? z(e) ? function (e) {
				var t = e.getBBox();
				return b(0, 0, t.width, t.height)
			}(e) : m(e) : v
		}

		function b(e, t, c, n) {
			return {x: e, y: t, width: c, height: n}
		}

		var M = function () {
			function e(e) {
				this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = b(0, 0, 0, 0), this.target = e
			}

			return e.prototype.isActive = function () {
				var e = y(this.target);
				return this.contentRect_ = e, e.width !== this.broadcastWidth || e.height !== this.broadcastHeight
			}, e.prototype.broadcastRect = function () {
				var e = this.contentRect_;
				return this.broadcastWidth = e.width, this.broadcastHeight = e.height, e
			}, e
		}(), g = function (e, t) {
			var c = function (e) {
				var t = e.x, c = e.y, n = e.width, r = e.height,
					l = "undefined" !== typeof DOMRectReadOnly ? DOMRectReadOnly : Object,
					o = Object.create(l.prototype);
				return h(o, {x: t, y: c, width: n, height: r, top: c, right: t + n, bottom: r + c, left: t}), o
			}(t);
			h(this, {target: e, contentRect: c})
		}, H = function () {
			function e(e, t, n) {
				if (this.activeObservations_ = [], this.observations_ = new c, "function" !== typeof e) throw new TypeError("The callback provided as parameter 1 is not a function.");
				this.callback_ = e, this.controller_ = t, this.callbackCtx_ = n
			}

			return e.prototype.observe = function (e) {
				if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
				if ("undefined" !== typeof Element && Element instanceof Object) {
					if (!(e instanceof f(e).Element)) throw new TypeError('parameter 1 is not of type "Element".');
					var t = this.observations_;
					t.has(e) || (t.set(e, new M(e)), this.controller_.addObserver(this), this.controller_.refresh())
				}
			}, e.prototype.unobserve = function (e) {
				if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
				if ("undefined" !== typeof Element && Element instanceof Object) {
					if (!(e instanceof f(e).Element)) throw new TypeError('parameter 1 is not of type "Element".');
					var t = this.observations_;
					t.has(e) && (t.delete(e), t.size || this.controller_.removeObserver(this))
				}
			}, e.prototype.disconnect = function () {
				this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this)
			}, e.prototype.gatherActive = function () {
				var e = this;
				this.clearActive(), this.observations_.forEach((function (t) {
					t.isActive() && e.activeObservations_.push(t)
				}))
			}, e.prototype.broadcastActive = function () {
				if (this.hasActive()) {
					var e = this.callbackCtx_, t = this.activeObservations_.map((function (e) {
						return new g(e.target, e.broadcastRect())
					}));
					this.callback_.call(e, t, e), this.clearActive()
				}
			}, e.prototype.clearActive = function () {
				this.activeObservations_.splice(0)
			}, e.prototype.hasActive = function () {
				return this.activeObservations_.length > 0
			}, e
		}(), V = "undefined" !== typeof WeakMap ? new WeakMap : new c, w = function e(t) {
			if (!(this instanceof e)) throw new TypeError("Cannot call a class as a function.");
			if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
			var c = s.getInstance(), n = new H(t, c, this);
			V.set(this, n)
		};
		["observe", "unobserve", "disconnect"].forEach((function (e) {
			w.prototype[e] = function () {
				var t;
				return (t = V.get(this))[e].apply(t, arguments)
			}
		}));
		var C = "undefined" !== typeof r.ResizeObserver ? r.ResizeObserver : w;
		t.default = C
	}.call(this, c(60))
}, , function (e, t, c) {
	"use strict";
	var n = c(0), r = c(1), l = c(2), o = c.n(l), a = c(4), i = c(9), u = c(147), s = c(3), h = c(11), f = c(5);

	function v(e) {
		return (v = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function (e) {
			return typeof e
		} : function (e) {
			return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
		})(e)
	}

	function p() {
		return (p = Object.assign || function (e) {
			for (var t = 1; t < arguments.length; t++) {
				var c = arguments[t];
				for (var n in c) Object.prototype.hasOwnProperty.call(c, n) && (e[n] = c[n])
			}
			return e
		}).apply(this, arguments)
	}

	function d(e, t, c) {
		return t in e ? Object.defineProperty(e, t, {
			value: c,
			enumerable: !0,
			configurable: !0,
			writable: !0
		}) : e[t] = c, e
	}

	function m(e, t) {
		for (var c = 0; c < t.length; c++) {
			var n = t[c];
			n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
		}
	}

	function z(e, t) {
		return !t || "object" !== v(t) && "function" !== typeof t ? function (e) {
			if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return e
		}(e) : t
	}

	function y(e) {
		return (y = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
			return e.__proto__ || Object.getPrototypeOf(e)
		})(e)
	}

	function b(e, t) {
		return (b = Object.setPrototypeOf || function (e, t) {
			return e.__proto__ = t, e
		})(e, t)
	}

	function M(e) {
		return "undefined" === typeof e || null === e ? "" : e
	}

	function g(e) {
		return !!("prefix" in e || e.suffix || e.allowClear)
	}

	var H = Object(h.a)("small", "default", "large"), V = function (e) {
		function t(e) {
			var c;
			!function (e, t) {
				if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
			}(this, t), (c = z(this, y(t).call(this, e))).saveInput = function (e) {
				c.input = e
			}, c.handleKeyDown = function (e) {
				var t = c.props, n = t.onPressEnter, r = t.onKeyDown;
				13 === e.keyCode && n && n(e), r && r(e)
			}, c.handleReset = function (e) {
				c.setValue("", e, (function () {
					c.focus()
				}))
			}, c.handleChange = function (e) {
				c.setValue(e.target.value, e)
			}, c.renderComponent = function (e) {
				var t = (0, e.getPrefixCls)("input", c.props.prefixCls);
				return c.renderLabeledInput(t, c.renderInput(t))
			};
			var n = "undefined" === typeof e.value ? e.defaultValue : e.value;
			return c.state = {value: n}, c
		}

		var c, r, l;
		return function (e, t) {
			if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
			e.prototype = Object.create(t && t.prototype, {
				constructor: {
					value: e,
					writable: !0,
					configurable: !0
				}
			}), t && b(e, t)
		}(t, e), c = t, l = [{
			key: "getDerivedStateFromProps", value: function (e) {
				return "value" in e ? {value: e.value} : null
			}
		}], (r = [{
			key: "componentDidUpdate", value: function () {
			}
		}, {
			key: "getSnapshotBeforeUpdate", value: function (e) {
				return g(e) !== g(this.props) && Object(f.a)(this.input !== document.activeElement, "Input", "When Input is focused, dynamic add or remove prefix / suffix will make it lose focus caused by dom structure change. Read more: https://ant.design/components/input/#FAQ"), null
			}
		}, {
			key: "getInputClassName", value: function (e) {
				var t, c = this.props, n = c.size, r = c.disabled;
				return o()(e, (d(t = {}, "".concat(e, "-sm"), "small" === n), d(t, "".concat(e, "-lg"), "large" === n), d(t, "".concat(e, "-disabled"), r), t))
			}
		}, {
			key: "setValue", value: function (e, t, c) {
				"value" in this.props || this.setState({value: e}, c);
				var n = this.props.onChange;
				if (n) {
					var r = t;
					if ("click" === t.type) {
						(r = Object.create(t)).target = this.input, r.currentTarget = this.input;
						var l = this.input.value;
						return this.input.value = "", n(r), void(this.input.value = l)
					}
					n(r)
				}
			}
		}, {
			key: "focus", value: function () {
				this.input.focus()
			}
		}, {
			key: "blur", value: function () {
				this.input.blur()
			}
		}, {
			key: "select", value: function () {
				this.input.select()
			}
		}, {
			key: "renderClearIcon", value: function (e) {
				var t = this.props, c = t.allowClear, r = t.disabled, l = this.state.value;
				return !c || r || void 0 === l || null === l || "" === l ? null : n.createElement(s.a, {
					type: "close-circle",
					theme: "filled",
					onClick: this.handleReset,
					className: "".concat(e, "-clear-icon"),
					role: "button"
				})
			}
		}, {
			key: "renderSuffix", value: function (e) {
				var t = this.props, c = t.suffix, r = t.allowClear;
				return c || r ? n.createElement("span", {className: "".concat(e, "-suffix")}, this.renderClearIcon(e), c) : null
			}
		}, {
			key: "renderLabeledInput", value: function (e, t) {
				var c, r = this.props, l = r.addonBefore, a = r.addonAfter, i = r.style, u = r.size, s = r.className;
				if (!l && !a) return t;
				var h = "".concat(e, "-group"), f = "".concat(h, "-addon"),
					v = l ? n.createElement("span", {className: f}, l) : null,
					p = a ? n.createElement("span", {className: f}, a) : null,
					m = o()("".concat(e, "-wrapper"), d({}, h, l || a)),
					z = o()(s, "".concat(e, "-group-wrapper"), (d(c = {}, "".concat(e, "-group-wrapper-sm"), "small" === u), d(c, "".concat(e, "-group-wrapper-lg"), "large" === u), c));
				return n.createElement("span", {
					className: z,
					style: i
				}, n.createElement("span", {className: m}, v, n.cloneElement(t, {style: null}), p))
			}
		}, {
			key: "renderLabeledIcon", value: function (e, t) {
				var c, r = this.props, l = this.renderSuffix(e);
				if (!g(r)) return t;
				var a = r.prefix ? n.createElement("span", {className: "".concat(e, "-prefix")}, r.prefix) : null,
					i = o()(r.className, "".concat(e, "-affix-wrapper"), (d(c = {}, "".concat(e, "-affix-wrapper-sm"), "small" === r.size), d(c, "".concat(e, "-affix-wrapper-lg"), "large" === r.size), d(c, "".concat(e, "-affix-wrapper-with-clear-btn"), r.suffix && r.allowClear && this.state.value), c));
				return n.createElement("span", {className: i, style: r.style}, a, n.cloneElement(t, {
					style: null,
					className: this.getInputClassName(e)
				}), l)
			}
		}, {
			key: "renderInput", value: function (e) {
				var t = this.props, c = t.className, r = t.addonBefore, l = t.addonAfter, i = this.state.value,
					u = Object(a.a)(this.props, ["prefixCls", "onPressEnter", "addonBefore", "addonAfter", "prefix", "suffix", "allowClear", "defaultValue", "size"]);
				return this.renderLabeledIcon(e, n.createElement("input", p({}, u, {
					value: M(i),
					onChange: this.handleChange,
					className: o()(this.getInputClassName(e), d({}, c, c && !r && !l)),
					onKeyDown: this.handleKeyDown,
					ref: this.saveInput
				})))
			}
		}, {
			key: "render", value: function () {
				return n.createElement(u.a, null, this.renderComponent)
			}
		}]) && m(c.prototype, r), l && m(c, l), t
	}(n.Component);
	V.defaultProps = {type: "text"}, V.propTypes = {
		type: r.string,
		id: r.string,
		size: r.oneOf(H),
		maxLength: r.number,
		disabled: r.bool,
		value: r.any,
		defaultValue: r.any,
		className: r.string,
		addonBefore: r.node,
		addonAfter: r.node,
		prefixCls: r.string,
		onPressEnter: r.func,
		onKeyDown: r.func,
		onKeyUp: r.func,
		onFocus: r.func,
		onBlur: r.func,
		prefix: r.node,
		suffix: r.node,
		allowClear: r.bool
	}, Object(i.a)(V);
	var w = V;

	function C(e, t, c) {
		return t in e ? Object.defineProperty(e, t, {
			value: c,
			enumerable: !0,
			configurable: !0,
			writable: !0
		}) : e[t] = c, e
	}

	var L = function (e) {
		return n.createElement(u.a, null, (function (t) {
			var c, r = t.getPrefixCls, l = e.prefixCls, a = e.className, i = void 0 === a ? "" : a,
				u = r("input-group", l),
				s = o()(u, (C(c = {}, "".concat(u, "-lg"), "large" === e.size), C(c, "".concat(u, "-sm"), "small" === e.size), C(c, "".concat(u, "-compact"), e.compact), c), i);
			return n.createElement("span", {
				className: s,
				style: e.style,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				onFocus: e.onFocus,
				onBlur: e.onBlur
			}, e.children)
		}))
	}, S = c(64);

	function k(e) {
		return (k = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function (e) {
			return typeof e
		} : function (e) {
			return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
		})(e)
	}

	function O(e, t, c) {
		return t in e ? Object.defineProperty(e, t, {
			value: c,
			enumerable: !0,
			configurable: !0,
			writable: !0
		}) : e[t] = c, e
	}

	function T() {
		return (T = Object.assign || function (e) {
			for (var t = 1; t < arguments.length; t++) {
				var c = arguments[t];
				for (var n in c) Object.prototype.hasOwnProperty.call(c, n) && (e[n] = c[n])
			}
			return e
		}).apply(this, arguments)
	}

	function E(e, t) {
		for (var c = 0; c < t.length; c++) {
			var n = t[c];
			n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
		}
	}

	function x(e, t) {
		return !t || "object" !== k(t) && "function" !== typeof t ? function (e) {
			if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return e
		}(e) : t
	}

	function _(e) {
		return (_ = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
			return e.__proto__ || Object.getPrototypeOf(e)
		})(e)
	}

	function P(e, t) {
		return (P = Object.setPrototypeOf || function (e, t) {
			return e.__proto__ = t, e
		})(e, t)
	}

	var A = function (e, t) {
		var c = {};
		for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (c[n] = e[n]);
		if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
			var r = 0;
			for (n = Object.getOwnPropertySymbols(e); r < n.length; r++) t.indexOf(n[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[r]) && (c[n[r]] = e[n[r]])
		}
		return c
	}, F = function (e) {
		function t() {
			var e;
			return function (e, t) {
				if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
			}(this, t), (e = x(this, _(t).apply(this, arguments))).saveInput = function (t) {
				e.input = t
			}, e.onChange = function (t) {
				var c = e.props, n = c.onChange, r = c.onSearch;
				t && t.target && "click" === t.type && r && r(t.target.value, t), n && n(t)
			}, e.onSearch = function (t) {
				var c = e.props, n = c.onSearch, r = c.loading, l = c.disabled;
				r || l || (n && n(e.input.input.value, t), e.input.focus())
			}, e.renderLoading = function (t) {
				var c = e.props, r = c.enterButton, l = c.size;
				return r ? n.createElement(S.a, {
					className: "".concat(t, "-button"),
					type: "primary",
					size: l,
					key: "enterButton"
				}, n.createElement(s.a, {type: "loading"})) : n.createElement(s.a, {
					className: "".concat(t, "-icon"),
					type: "loading"
				})
			}, e.renderSuffix = function (t) {
				var c = e.props, r = c.suffix, l = c.enterButton;
				if (c.loading && !l) return [r, e.renderLoading(t)];
				if (l) return r;
				var o = n.createElement(s.a, {
					className: "".concat(t, "-icon"),
					type: "search",
					key: "searchIcon",
					onClick: e.onSearch
				});
				if (r) {
					var a = r;
					return n.isValidElement(a) && !a.key && (a = n.cloneElement(a, {key: "originSuffix"})), [a, o]
				}
				return o
			}, e.renderAddonAfter = function (t) {
				var c, r = e.props, l = r.enterButton, o = r.size, a = r.disabled, i = r.addonAfter, u = r.loading,
					h = "".concat(t, "-button");
				if (u && l) return [e.renderLoading(t), i];
				if (!l) return i;
				var f = l, v = f.type && !0 === f.type.__ANT_BUTTON;
				return c = v || "button" === f.type ? n.cloneElement(f, T({
					onClick: e.onSearch,
					key: "enterButton"
				}, v ? {className: h, size: o} : {})) : n.createElement(S.a, {
					className: h,
					type: "primary",
					size: o,
					disabled: a,
					key: "enterButton",
					onClick: e.onSearch
				}, !0 === l ? n.createElement(s.a, {type: "search"}) : l), i ? [c, i] : c
			}, e.renderSearch = function (t) {
				var c = t.getPrefixCls, r = e.props, l = r.prefixCls, a = r.inputPrefixCls, i = r.size,
					u = r.enterButton, s = r.className,
					h = A(r, ["prefixCls", "inputPrefixCls", "size", "enterButton", "className"]);
				delete h.onSearch;
				var f, v, p = c("input-search", l), d = c("input", a);
				u ? f = o()(p, s, (O(v = {}, "".concat(p, "-enter-button"), !!u), O(v, "".concat(p, "-").concat(i), !!i), v)) : f = o()(p, s);
				return n.createElement(w, T({onPressEnter: e.onSearch}, h, {
					size: i,
					prefixCls: d,
					addonAfter: e.renderAddonAfter(p),
					suffix: e.renderSuffix(p),
					onChange: e.onChange,
					ref: e.saveInput,
					className: f
				}))
			}, e
		}

		var c, r, l;
		return function (e, t) {
			if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
			e.prototype = Object.create(t && t.prototype, {
				constructor: {
					value: e,
					writable: !0,
					configurable: !0
				}
			}), t && P(e, t)
		}(t, e), c = t, (r = [{
			key: "focus", value: function () {
				this.input.focus()
			}
		}, {
			key: "blur", value: function () {
				this.input.blur()
			}
		}, {
			key: "render", value: function () {
				return n.createElement(u.a, null, this.renderSearch)
			}
		}]) && E(c.prototype, r), l && E(c, l), t
	}(n.Component);
	F.defaultProps = {enterButton: !1};
	var N, j = c(83), R = c.n(j),
		D = "\n  min-height:0 !important;\n  max-height:none !important;\n  height:0 !important;\n  visibility:hidden !important;\n  overflow:hidden !important;\n  position:absolute !important;\n  z-index:-1000 !important;\n  top:0 !important;\n  right:0 !important\n",
		I = ["letter-spacing", "line-height", "padding-top", "padding-bottom", "font-family", "font-weight", "font-size", "font-variant", "text-rendering", "text-transform", "width", "text-indent", "padding-left", "padding-right", "border-width", "box-sizing"],
		U = {};

	function q(e) {
		var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
			c = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
			n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
		N || (N = document.createElement("textarea"), document.body.appendChild(N)), e.getAttribute("wrap") ? N.setAttribute("wrap", e.getAttribute("wrap")) : N.removeAttribute("wrap");
		var r = function (e) {
			var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
				c = e.getAttribute("id") || e.getAttribute("data-reactid") || e.getAttribute("name");
			if (t && U[c]) return U[c];
			var n = window.getComputedStyle(e),
				r = n.getPropertyValue("box-sizing") || n.getPropertyValue("-moz-box-sizing") || n.getPropertyValue("-webkit-box-sizing"),
				l = parseFloat(n.getPropertyValue("padding-bottom")) + parseFloat(n.getPropertyValue("padding-top")),
				o = parseFloat(n.getPropertyValue("border-bottom-width")) + parseFloat(n.getPropertyValue("border-top-width")),
				a = {
					sizingStyle: I.map((function (e) {
						return "".concat(e, ":").concat(n.getPropertyValue(e))
					})).join(";"), paddingSize: l, borderSize: o, boxSizing: r
				};
			return t && c && (U[c] = a), a
		}(e, t), l = r.paddingSize, o = r.borderSize, a = r.boxSizing, i = r.sizingStyle;
		N.setAttribute("style", "".concat(i, ";").concat(D)), N.value = e.value || e.placeholder || "";
		var u, s = Number.MIN_SAFE_INTEGER, h = Number.MAX_SAFE_INTEGER, f = N.scrollHeight;
		if ("border-box" === a ? f += o : "content-box" === a && (f -= l), null !== c || null !== n) {
			N.value = " ";
			var v = N.scrollHeight - l;
			null !== c && (s = v * c, "border-box" === a && (s = s + l + o), f = Math.max(s, f)), null !== n && (h = v * n, "border-box" === a && (h = h + l + o), u = f > h ? "" : "hidden", f = Math.min(h, f))
		}
		return {height: f, minHeight: s, maxHeight: h, overflowY: u}
	}

	var B = c(10);

	function W(e) {
		return (W = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function (e) {
			return typeof e
		} : function (e) {
			return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
		})(e)
	}

	function Q() {
		return (Q = Object.assign || function (e) {
			for (var t = 1; t < arguments.length; t++) {
				var c = arguments[t];
				for (var n in c) Object.prototype.hasOwnProperty.call(c, n) && (e[n] = c[n])
			}
			return e
		}).apply(this, arguments)
	}

	function K(e, t) {
		for (var c = 0; c < t.length; c++) {
			var n = t[c];
			n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
		}
	}

	function $(e, t) {
		return !t || "object" !== W(t) && "function" !== typeof t ? function (e) {
			if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return e
		}(e) : t
	}

	function G(e) {
		return (G = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
			return e.__proto__ || Object.getPrototypeOf(e)
		})(e)
	}

	function Y(e, t) {
		return (Y = Object.setPrototypeOf || function (e, t) {
			return e.__proto__ = t, e
		})(e, t)
	}

	var Z = function (e, t) {
		var c = {};
		for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (c[n] = e[n]);
		if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
			var r = 0;
			for (n = Object.getOwnPropertySymbols(e); r < n.length; r++) t.indexOf(n[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[r]) && (c[n[r]] = e[n[r]])
		}
		return c
	}, X = function (e) {
		function t() {
			var e;
			return function (e, t) {
				if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
			}(this, t), (e = $(this, G(t).apply(this, arguments))).state = {
				textareaStyles: {},
				resizing: !1
			}, e.saveTextAreaRef = function (t) {
				e.textAreaRef = t
			}, e.handleTextareaChange = function (t) {
				"value" in e.props || e.resizeTextarea();
				var c = e.props.onChange;
				c && c(t)
			}, e.handleKeyDown = function (t) {
				var c = e.props, n = c.onPressEnter, r = c.onKeyDown;
				13 === t.keyCode && n && n(t), r && r(t)
			}, e.resizeOnNextFrame = function () {
				B.a.cancel(e.nextFrameActionId), e.nextFrameActionId = Object(B.a)(e.resizeTextarea)
			}, e.resizeTextarea = function () {
				var t = e.props.autoSize || e.props.autosize;
				if (t && e.textAreaRef) {
					var c = t.minRows, n = t.maxRows, r = q(e.textAreaRef, !1, c, n);
					e.setState({textareaStyles: r, resizing: !0}, (function () {
						B.a.cancel(e.resizeFrameId), e.resizeFrameId = Object(B.a)((function () {
							e.setState({resizing: !1})
						}))
					}))
				}
			}, e.renderTextArea = function (t) {
				var c, r, l, i = t.getPrefixCls, u = e.state, s = u.textareaStyles, h = u.resizing, v = e.props,
					p = v.prefixCls, d = v.className, m = v.disabled, z = v.autoSize, y = v.autosize,
					b = Z(e.props, []), M = Object(a.a)(b, ["prefixCls", "onPressEnter", "autoSize", "autosize"]),
					g = i("input", p),
					H = o()(g, d, (c = {}, r = "".concat(g, "-disabled"), l = m, r in c ? Object.defineProperty(c, r, {
						value: l,
						enumerable: !0,
						configurable: !0,
						writable: !0
					}) : c[r] = l, c));
				Object(f.a)(void 0 === y, "Input.TextArea", "autosize is deprecated, please use autoSize instead.");
				var V = Q(Q(Q({}, b.style), s), h ? {overflow: "hidden"} : null);
				return "value" in M && (M.value = M.value || ""), n.createElement(R.a, {
					onResize: e.resizeOnNextFrame,
					disabled: !(z || y)
				}, n.createElement("textarea", Q({}, M, {
					className: H,
					style: V,
					onKeyDown: e.handleKeyDown,
					onChange: e.handleTextareaChange,
					ref: e.saveTextAreaRef
				})))
			}, e
		}

		var c, r, l;
		return function (e, t) {
			if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
			e.prototype = Object.create(t && t.prototype, {
				constructor: {
					value: e,
					writable: !0,
					configurable: !0
				}
			}), t && Y(e, t)
		}(t, e), c = t, (r = [{
			key: "componentDidMount", value: function () {
				this.resizeTextarea()
			}
		}, {
			key: "componentDidUpdate", value: function (e) {
				e.value !== this.props.value && this.resizeTextarea()
			}
		}, {
			key: "componentWillUnmount", value: function () {
				B.a.cancel(this.nextFrameActionId), B.a.cancel(this.resizeFrameId)
			}
		}, {
			key: "focus", value: function () {
				this.textAreaRef.focus()
			}
		}, {
			key: "blur", value: function () {
				this.textAreaRef.blur()
			}
		}, {
			key: "render", value: function () {
				return n.createElement(u.a, null, this.renderTextArea)
			}
		}]) && K(c.prototype, r), l && K(c, l), t
	}(n.Component);
	Object(i.a)(X);
	var J = X;

	function ee(e) {
		return (ee = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function (e) {
			return typeof e
		} : function (e) {
			return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
		})(e)
	}

	function te() {
		return (te = Object.assign || function (e) {
			for (var t = 1; t < arguments.length; t++) {
				var c = arguments[t];
				for (var n in c) Object.prototype.hasOwnProperty.call(c, n) && (e[n] = c[n])
			}
			return e
		}).apply(this, arguments)
	}

	function ce(e, t, c) {
		return t in e ? Object.defineProperty(e, t, {
			value: c,
			enumerable: !0,
			configurable: !0,
			writable: !0
		}) : e[t] = c, e
	}

	function ne(e, t) {
		for (var c = 0; c < t.length; c++) {
			var n = t[c];
			n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
		}
	}

	function re(e, t) {
		return !t || "object" !== ee(t) && "function" !== typeof t ? function (e) {
			if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return e
		}(e) : t
	}

	function le(e) {
		return (le = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
			return e.__proto__ || Object.getPrototypeOf(e)
		})(e)
	}

	function oe(e, t) {
		return (oe = Object.setPrototypeOf || function (e, t) {
			return e.__proto__ = t, e
		})(e, t)
	}

	var ae = function (e, t) {
		var c = {};
		for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (c[n] = e[n]);
		if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
			var r = 0;
			for (n = Object.getOwnPropertySymbols(e); r < n.length; r++) t.indexOf(n[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[r]) && (c[n[r]] = e[n[r]])
		}
		return c
	}, ie = {click: "onClick", hover: "onMouseOver"}, ue = function (e) {
		function t() {
			var e;
			return function (e, t) {
				if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
			}(this, t), (e = re(this, le(t).apply(this, arguments))).state = {visible: !1}, e.onChange = function () {
				e.props.disabled || e.setState((function (e) {
					return {visible: !e.visible}
				}))
			}, e.saveInput = function (t) {
				t && t.input && (e.input = t.input)
			}, e
		}

		var c, r, l;
		return function (e, t) {
			if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
			e.prototype = Object.create(t && t.prototype, {
				constructor: {
					value: e,
					writable: !0,
					configurable: !0
				}
			}), t && oe(e, t)
		}(t, e), c = t, (r = [{
			key: "getIcon", value: function () {
				var e, t = this.props, c = t.prefixCls, r = t.action,
					l = (ce(e = {}, ie[r] || "", this.onChange), ce(e, "className", "".concat(c, "-icon")), ce(e, "type", this.state.visible ? "eye" : "eye-invisible"), ce(e, "key", "passwordIcon"), ce(e, "onMouseDown", (function (e) {
						e.preventDefault()
					})), e);
				return n.createElement(s.a, l)
			}
		}, {
			key: "focus", value: function () {
				this.input.focus()
			}
		}, {
			key: "blur", value: function () {
				this.input.blur()
			}
		}, {
			key: "select", value: function () {
				this.input.select()
			}
		}, {
			key: "render", value: function () {
				var e = this.props, t = e.className, c = e.prefixCls, r = e.inputPrefixCls, l = e.size,
					i = e.visibilityToggle,
					u = ae(e, ["className", "prefixCls", "inputPrefixCls", "size", "visibilityToggle"]),
					s = i && this.getIcon(), h = o()(c, t, ce({}, "".concat(c, "-").concat(l), !!l));
				return n.createElement(w, te({}, Object(a.a)(u, ["suffix"]), {
					type: this.state.visible ? "text" : "password",
					size: l,
					className: h,
					prefixCls: r,
					suffix: s,
					ref: this.saveInput
				}))
			}
		}]) && ne(c.prototype, r), l && ne(c, l), t
	}(n.Component);
	ue.defaultProps = {
		inputPrefixCls: "ant-input",
		prefixCls: "ant-input-password",
		action: "click",
		visibilityToggle: !0
	}, w.Group = L, w.Search = F, w.TextArea = J, w.Password = ue;
	t.a = w
}, function (e, t, c) {
	"use strict";
	var n = c(34), r = c.n(n), l = c(0), o = c(2), a = c.n(o), i = c(44), u = function () {
		return l.createElement("svg", {
			width: "184",
			height: "152",
			viewBox: "0 0 184 152",
			xmlns: "http://www.w3.org/2000/svg"
		}, l.createElement("g", {
			fill: "none",
			fillRule: "evenodd"
		}, l.createElement("g", {transform: "translate(24 31.67)"}, l.createElement("ellipse", {
			fillOpacity: ".8",
			fill: "#F5F5F7",
			cx: "67.797",
			cy: "106.89",
			rx: "67.797",
			ry: "12.668"
		}), l.createElement("path", {
			d: "M122.034 69.674L98.109 40.229c-1.148-1.386-2.826-2.225-4.593-2.225h-51.44c-1.766 0-3.444.839-4.592 2.225L13.56 69.674v15.383h108.475V69.674z",
			fill: "#AEB8C2"
		}), l.createElement("path", {
			d: "M101.537 86.214L80.63 61.102c-1.001-1.207-2.507-1.867-4.048-1.867H31.724c-1.54 0-3.047.66-4.048 1.867L6.769 86.214v13.792h94.768V86.214z",
			fill: "url(#linearGradient-1)",
			transform: "translate(13.56)"
		}), l.createElement("path", {
			d: "M33.83 0h67.933a4 4 0 0 1 4 4v93.344a4 4 0 0 1-4 4H33.83a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z",
			fill: "#F5F5F7"
		}), l.createElement("path", {
			d: "M42.678 9.953h50.237a2 2 0 0 1 2 2V36.91a2 2 0 0 1-2 2H42.678a2 2 0 0 1-2-2V11.953a2 2 0 0 1 2-2zM42.94 49.767h49.713a2.262 2.262 0 1 1 0 4.524H42.94a2.262 2.262 0 0 1 0-4.524zM42.94 61.53h49.713a2.262 2.262 0 1 1 0 4.525H42.94a2.262 2.262 0 0 1 0-4.525zM121.813 105.032c-.775 3.071-3.497 5.36-6.735 5.36H20.515c-3.238 0-5.96-2.29-6.734-5.36a7.309 7.309 0 0 1-.222-1.79V69.675h26.318c2.907 0 5.25 2.448 5.25 5.42v.04c0 2.971 2.37 5.37 5.277 5.37h34.785c2.907 0 5.277-2.421 5.277-5.393V75.1c0-2.972 2.343-5.426 5.25-5.426h26.318v33.569c0 .617-.077 1.216-.221 1.789z",
			fill: "#DCE0E6"
		})), l.createElement("path", {
			d: "M149.121 33.292l-6.83 2.65a1 1 0 0 1-1.317-1.23l1.937-6.207c-2.589-2.944-4.109-6.534-4.109-10.408C138.802 8.102 148.92 0 161.402 0 173.881 0 184 8.102 184 18.097c0 9.995-10.118 18.097-22.599 18.097-4.528 0-8.744-1.066-12.28-2.902z",
			fill: "#DCE0E6"
		}), l.createElement("g", {
			transform: "translate(149.65 15.383)",
			fill: "#FFF"
		}, l.createElement("ellipse", {
			cx: "20.654",
			cy: "3.167",
			rx: "2.849",
			ry: "2.815"
		}), l.createElement("path", {d: "M5.698 5.63H0L2.898.704zM9.259.704h4.985V5.63H9.259z"}))))
	}, s = function () {
		return l.createElement("svg", {
			width: "64",
			height: "41",
			viewBox: "0 0 64 41",
			xmlns: "http://www.w3.org/2000/svg"
		}, l.createElement("g", {
			transform: "translate(0 1)",
			fill: "none",
			fillRule: "evenodd"
		}, l.createElement("ellipse", {
			fill: "#F5F5F5",
			cx: "32",
			cy: "33",
			rx: "32",
			ry: "7"
		}), l.createElement("g", {
			fillRule: "nonzero",
			stroke: "#D9D9D9"
		}, l.createElement("path", {d: "M55 12.76L44.854 1.258C44.367.474 43.656 0 42.907 0H21.093c-.749 0-1.46.474-1.947 1.257L9 12.761V22h46v-9.24z"}), l.createElement("path", {
			d: "M41.613 15.931c0-1.605.994-2.93 2.227-2.931H55v18.137C55 33.26 53.68 35 52.05 35h-40.1C10.32 35 9 33.259 9 31.137V13h11.16c1.233 0 2.227 1.323 2.227 2.928v.022c0 1.605 1.005 2.901 2.237 2.901h14.752c1.232 0 2.237-1.308 2.237-2.913v-.007z",
			fill: "#FAFAFA"
		}))))
	};

	function h() {
		return (h = Object.assign || function (e) {
			for (var t = 1; t < arguments.length; t++) {
				var c = arguments[t];
				for (var n in c) Object.prototype.hasOwnProperty.call(c, n) && (e[n] = c[n])
			}
			return e
		}).apply(this, arguments)
	}

	var f = function (e, t) {
		var c = {};
		for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (c[n] = e[n]);
		if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
			var r = 0;
			for (n = Object.getOwnPropertySymbols(e); r < n.length; r++) t.indexOf(n[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[r]) && (c[n[r]] = e[n[r]])
		}
		return c
	}, v = l.createElement(u, null), p = l.createElement(s, null), d = function (e) {
		return l.createElement(y, null, (function (t) {
			var c = t.getPrefixCls, n = e.className, r = e.prefixCls, o = e.image, u = void 0 === o ? v : o,
				s = e.description, d = e.children, m = e.imageStyle,
				z = f(e, ["className", "prefixCls", "image", "description", "children", "imageStyle"]);
			return l.createElement(i.a, {componentName: "Empty"}, (function (e) {
				var t, o, i, f = c("empty", r), v = "undefined" !== typeof s ? s : e.description,
					y = "string" === typeof v ? v : "empty", b = null;
				return b = "string" === typeof u ? l.createElement("img", {
					alt: y,
					src: u
				}) : u, l.createElement("div", h({
					className: a()(f, (t = {}, o = "".concat(f, "-normal"), i = u === p, o in t ? Object.defineProperty(t, o, {
						value: i,
						enumerable: !0,
						configurable: !0,
						writable: !0
					}) : t[o] = i, t), n)
				}, z), l.createElement("div", {
					className: "".concat(f, "-image"),
					style: m
				}, b), v && l.createElement("p", {className: "".concat(f, "-description")}, v), d && l.createElement("div", {className: "".concat(f, "-footer")}, d))
			}))
		}))
	};
	d.PRESENTED_IMAGE_DEFAULT = v, d.PRESENTED_IMAGE_SIMPLE = p;
	var m = d, z = function (e) {
		return l.createElement(y, null, (function (t) {
			var c = (0, t.getPrefixCls)("empty");
			switch (e) {
				case"Table":
				case"List":
					return l.createElement(m, {image: m.PRESENTED_IMAGE_SIMPLE});
				case"Select":
				case"TreeSelect":
				case"Cascader":
				case"Transfer":
				case"Mentions":
					return l.createElement(m, {image: m.PRESENTED_IMAGE_SIMPLE, className: "".concat(c, "-small")});
				default:
					return l.createElement(m, null)
			}
		}))
	};
	c.d(t, "a", (function () {
		return y
	}));
	var y = r()({
		getPrefixCls: function (e, t) {
			return t || "ant-".concat(e)
		}, renderEmpty: z
	}).Consumer
}, function (e, t, c) {
	"use strict";
	var n = c(0), r = c(2), l = c.n(r), o = c(34), a = c.n(o), i = c(147);

	function u(e) {
		return (u = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function (e) {
			return typeof e
		} : function (e) {
			return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
		})(e)
	}

	function s(e) {
		return function (e) {
			if (Array.isArray(e)) {
				for (var t = 0, c = new Array(e.length); t < e.length; t++) c[t] = e[t];
				return c
			}
		}(e) || function (e) {
			if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
		}(e) || function () {
			throw new TypeError("Invalid attempt to spread non-iterable instance")
		}()
	}

	function h() {
		return (h = Object.assign || function (e) {
			for (var t = 1; t < arguments.length; t++) {
				var c = arguments[t];
				for (var n in c) Object.prototype.hasOwnProperty.call(c, n) && (e[n] = c[n])
			}
			return e
		}).apply(this, arguments)
	}

	function f(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}

	function v(e, t) {
		for (var c = 0; c < t.length; c++) {
			var n = t[c];
			n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
		}
	}

	function p(e, t, c) {
		return t && v(e.prototype, t), c && v(e, c), e
	}

	function d(e, t) {
		return !t || "object" !== u(t) && "function" !== typeof t ? function (e) {
			if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return e
		}(e) : t
	}

	function m(e) {
		return (m = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
			return e.__proto__ || Object.getPrototypeOf(e)
		})(e)
	}

	function z(e, t) {
		if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
		e.prototype = Object.create(t && t.prototype, {
			constructor: {
				value: e,
				writable: !0,
				configurable: !0
			}
		}), t && y(e, t)
	}

	function y(e, t) {
		return (y = Object.setPrototypeOf || function (e, t) {
			return e.__proto__ = t, e
		})(e, t)
	}

	var b = function (e, t) {
		var c = {};
		for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (c[n] = e[n]);
		if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
			var r = 0;
			for (n = Object.getOwnPropertySymbols(e); r < n.length; r++) t.indexOf(n[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[r]) && (c[n[r]] = e[n[r]])
		}
		return c
	}, M = a()({
		siderHook: {
			addSider: function () {
				return null
			}, removeSider: function () {
				return null
			}
		}
	});

	function g(e) {
		var t = e.suffixCls, c = e.tagName;
		return function (e) {
			return function (r) {
				function l() {
					var r;
					return f(this, l), (r = d(this, m(l).apply(this, arguments))).renderComponent = function (l) {
						var o = l.getPrefixCls, a = r.props.prefixCls, i = o(t, a);
						return n.createElement(e, h({prefixCls: i, tagName: c}, r.props))
					}, r
				}

				return z(l, r), p(l, [{
					key: "render", value: function () {
						return n.createElement(i.a, null, this.renderComponent)
					}
				}]), l
			}(n.Component)
		}
	}

	var H = function (e) {
			var t = e.prefixCls, c = e.className, r = e.children, o = e.tagName,
				a = b(e, ["prefixCls", "className", "children", "tagName"]), i = l()(c, t);
			return n.createElement(o, h({className: i}, a), r)
		}, V = function (e) {
			function t() {
				var e;
				return f(this, t), (e = d(this, m(t).apply(this, arguments))).state = {siders: []}, e
			}

			return z(t, e), p(t, [{
				key: "getSiderHook", value: function () {
					var e = this;
					return {
						addSider: function (t) {
							e.setState((function (e) {
								return {siders: [].concat(s(e.siders), [t])}
							}))
						}, removeSider: function (t) {
							e.setState((function (e) {
								return {
									siders: e.siders.filter((function (e) {
										return e !== t
									}))
								}
							}))
						}
					}
				}
			}, {
				key: "render", value: function () {
					var e, t, c, r = this.props, o = r.prefixCls, a = r.className, i = r.children, u = r.hasSider,
						s = r.tagName, f = b(r, ["prefixCls", "className", "children", "hasSider", "tagName"]),
						v = l()(a, o, (e = {}, t = "".concat(o, "-has-sider"), c = "boolean" === typeof u ? u : this.state.siders.length > 0, t in e ? Object.defineProperty(e, t, {
							value: c,
							enumerable: !0,
							configurable: !0,
							writable: !0
						}) : e[t] = c, e));
					return n.createElement(M.Provider, {value: {siderHook: this.getSiderHook()}}, n.createElement(s, h({className: v}, f), i))
				}
			}]), t
		}(n.Component), w = g({suffixCls: "layout", tagName: "section"})(V),
		C = g({suffixCls: "layout-header", tagName: "header"})(H),
		L = g({suffixCls: "layout-footer", tagName: "footer"})(H),
		S = g({suffixCls: "layout-content", tagName: "main"})(H);
	w.Header = C, w.Footer = L, w.Content = S;
	var k = w, O = c(9), T = c(4), E = c(3), x = function (e) {
		return !isNaN(parseFloat(e)) && isFinite(e)
	};

	function _(e) {
		return (_ = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function (e) {
			return typeof e
		} : function (e) {
			return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
		})(e)
	}

	function P(e, t, c) {
		return t in e ? Object.defineProperty(e, t, {
			value: c,
			enumerable: !0,
			configurable: !0,
			writable: !0
		}) : e[t] = c, e
	}

	function A() {
		return (A = Object.assign || function (e) {
			for (var t = 1; t < arguments.length; t++) {
				var c = arguments[t];
				for (var n in c) Object.prototype.hasOwnProperty.call(c, n) && (e[n] = c[n])
			}
			return e
		}).apply(this, arguments)
	}

	function F(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}

	function N(e, t) {
		for (var c = 0; c < t.length; c++) {
			var n = t[c];
			n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
		}
	}

	function j(e, t, c) {
		return t && N(e.prototype, t), c && N(e, c), e
	}

	function R(e, t) {
		return !t || "object" !== _(t) && "function" !== typeof t ? function (e) {
			if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return e
		}(e) : t
	}

	function D(e) {
		return (D = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
			return e.__proto__ || Object.getPrototypeOf(e)
		})(e)
	}

	function I(e, t) {
		if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
		e.prototype = Object.create(t && t.prototype, {
			constructor: {
				value: e,
				writable: !0,
				configurable: !0
			}
		}), t && U(e, t)
	}

	function U(e, t) {
		return (U = Object.setPrototypeOf || function (e, t) {
			return e.__proto__ = t, e
		})(e, t)
	}

	var q = function (e, t) {
		var c = {};
		for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (c[n] = e[n]);
		if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
			var r = 0;
			for (n = Object.getOwnPropertySymbols(e); r < n.length; r++) t.indexOf(n[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[r]) && (c[n[r]] = e[n[r]])
		}
		return c
	};
	if ("undefined" !== typeof window) {
		window.matchMedia || (window.matchMedia = function (e) {
			return {
				media: e, matches: !1, addListener: function () {
				}, removeListener: function () {
				}
			}
		})
	}
	var B = {xs: "479.98px", sm: "575.98px", md: "767.98px", lg: "991.98px", xl: "1199.98px", xxl: "1599.98px"},
		W = a()({}), Q = function () {
			var e = 0;
			return function () {
				var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
				return e += 1, "".concat(t).concat(e)
			}
		}(), K = function (e) {
			function t(e) {
				var c, r, o;
				return F(this, t), (c = R(this, D(t).call(this, e))).responsiveHandler = function (e) {
					c.setState({below: e.matches});
					var t = c.props.onBreakpoint;
					t && t(e.matches), c.state.collapsed !== e.matches && c.setCollapsed(e.matches, "responsive")
				}, c.setCollapsed = function (e, t) {
					"collapsed" in c.props || c.setState({collapsed: e});
					var n = c.props.onCollapse;
					n && n(e, t)
				}, c.toggle = function () {
					var e = !c.state.collapsed;
					c.setCollapsed(e, "clickTrigger")
				}, c.belowShowChange = function () {
					c.setState((function (e) {
						return {belowShow: !e.belowShow}
					}))
				}, c.renderSider = function (e) {
					var t, r = e.getPrefixCls, o = c.props, a = o.prefixCls, i = o.className, u = o.theme,
						s = o.collapsible, h = o.reverseArrow, f = o.trigger, v = o.style, p = o.width,
						d = o.collapsedWidth, m = o.zeroWidthTriggerStyle,
						z = q(o, ["prefixCls", "className", "theme", "collapsible", "reverseArrow", "trigger", "style", "width", "collapsedWidth", "zeroWidthTriggerStyle"]),
						y = r("layout-sider", a),
						b = Object(T.a)(z, ["collapsed", "defaultCollapsed", "onCollapse", "breakpoint", "onBreakpoint", "siderHook", "zeroWidthTriggerStyle"]),
						M = c.state.collapsed ? d : p, g = x(M) ? "".concat(M, "px") : String(M),
						H = 0 === parseFloat(String(d || 0)) ? n.createElement("span", {
							onClick: c.toggle,
							className: "".concat(y, "-zero-width-trigger ").concat(y, "-zero-width-trigger-").concat(h ? "right" : "left"),
							style: m
						}, n.createElement(E.a, {type: "bars"})) : null, V = {
							expanded: h ? n.createElement(E.a, {type: "right"}) : n.createElement(E.a, {type: "left"}),
							collapsed: h ? n.createElement(E.a, {type: "left"}) : n.createElement(E.a, {type: "right"})
						}[c.state.collapsed ? "collapsed" : "expanded"], w = null !== f ? H || n.createElement("div", {
							className: "".concat(y, "-trigger"),
							onClick: c.toggle,
							style: {width: g}
						}, f || V) : null, C = A(A({}, v), {flex: "0 0 ".concat(g), maxWidth: g, minWidth: g, width: g}),
						L = l()(i, y, "".concat(y, "-").concat(u), (P(t = {}, "".concat(y, "-collapsed"), !!c.state.collapsed), P(t, "".concat(y, "-has-trigger"), s && null !== f && !H), P(t, "".concat(y, "-below"), !!c.state.below), P(t, "".concat(y, "-zero-width"), 0 === parseFloat(g)), t));
					return n.createElement("aside", A({className: L}, b, {style: C}), n.createElement("div", {className: "".concat(y, "-children")}, c.props.children), s || c.state.below && H ? w : null)
				}, c.uniqueId = Q("ant-sider-"), "undefined" !== typeof window && (r = window.matchMedia), r && e.breakpoint && e.breakpoint in B && (c.mql = r("(max-width: ".concat(B[e.breakpoint], ")"))), o = "collapsed" in e ? e.collapsed : e.defaultCollapsed, c.state = {
					collapsed: o,
					below: !1
				}, c
			}

			return I(t, e), j(t, [{
				key: "componentDidMount", value: function () {
					this.mql && (this.mql.addListener(this.responsiveHandler), this.responsiveHandler(this.mql)), this.props.siderHook && this.props.siderHook.addSider(this.uniqueId)
				}
			}, {
				key: "componentWillUnmount", value: function () {
					this.mql && this.mql.removeListener(this.responsiveHandler), this.props.siderHook && this.props.siderHook.removeSider(this.uniqueId)
				}
			}, {
				key: "render", value: function () {
					var e = this.state.collapsed, t = this.props.collapsedWidth;
					return n.createElement(W.Provider, {
						value: {
							siderCollapsed: e,
							collapsedWidth: t
						}
					}, n.createElement(i.a, null, this.renderSider))
				}
			}], [{
				key: "getDerivedStateFromProps", value: function (e) {
					return "collapsed" in e ? {collapsed: e.collapsed} : null
				}
			}]), t
		}(n.Component);
	K.defaultProps = {
		collapsible: !1,
		defaultCollapsed: !1,
		reverseArrow: !1,
		width: 200,
		collapsedWidth: 80,
		style: {},
		theme: "dark"
	}, Object(O.a)(K);
	var $ = function (e) {
		function t() {
			return F(this, t), R(this, D(t).apply(this, arguments))
		}

		return I(t, e), j(t, [{
			key: "render", value: function () {
				var e = this;
				return n.createElement(M.Consumer, null, (function (t) {
					return n.createElement(K, A({}, t, e.props))
				}))
			}
		}]), t
	}(n.Component);
	k.Sider = $;
	t.a = k
}, function (e, t, c) {
	"use strict";
	var n = c(0), r = c(1), l = c(85), o = c(4), a = c(2), i = c.n(a), u = c(9), s = c(147);

	function h(e) {
		return (h = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function (e) {
			return typeof e
		} : function (e) {
			return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
		})(e)
	}

	function f() {
		return (f = Object.assign || function (e) {
			for (var t = 1; t < arguments.length; t++) {
				var c = arguments[t];
				for (var n in c) Object.prototype.hasOwnProperty.call(c, n) && (e[n] = c[n])
			}
			return e
		}).apply(this, arguments)
	}

	function v(e, t) {
		for (var c = 0; c < t.length; c++) {
			var n = t[c];
			n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
		}
	}

	function p(e, t) {
		return !t || "object" !== h(t) && "function" !== typeof t ? function (e) {
			if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return e
		}(e) : t
	}

	function d(e) {
		return (d = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
			return e.__proto__ || Object.getPrototypeOf(e)
		})(e)
	}

	function m(e, t) {
		return (m = Object.setPrototypeOf || function (e, t) {
			return e.__proto__ = t, e
		})(e, t)
	}

	function z(e) {
		return e ? e.toString().split("").reverse().map((function (e) {
			var t = Number(e);
			return isNaN(t) ? e : t
		})) : []
	}

	var y = function (e) {
		function t(e) {
			var c;
			return function (e, t) {
				if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
			}(this, t), (c = p(this, d(t).call(this, e))).onAnimated = function () {
				var e = c.props.onAnimated;
				e && e()
			}, c.renderScrollNumber = function (e) {
				var t = e.getPrefixCls, r = c.props, l = r.prefixCls, a = r.className, u = r.style, s = r.title,
					h = r.component, v = void 0 === h ? "sup" : h, p = r.displayComponent,
					d = Object(o.a)(c.props, ["count", "onAnimated", "component", "prefixCls", "displayComponent"]),
					m = t("scroll-number", l), z = f(f({}, d), {className: i()(m, a), title: s});
				return u && u.borderColor && (z.style = f(f({}, u), {boxShadow: "0 0 0 1px ".concat(u.borderColor, " inset")})), p ? n.cloneElement(p, {className: i()("".concat(m, "-custom-component"), p.props && p.props.className)}) : n.createElement(v, z, c.renderNumberElement(m))
			}, c.state = {animateStarted: !0, count: e.count}, c
		}

		var c, r, l;
		return function (e, t) {
			if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
			e.prototype = Object.create(t && t.prototype, {
				constructor: {
					value: e,
					writable: !0,
					configurable: !0
				}
			}), t && m(e, t)
		}(t, e), c = t, l = [{
			key: "getDerivedStateFromProps", value: function (e, t) {
				return "count" in e ? t.count === e.count ? null : {animateStarted: !0} : null
			}
		}], (r = [{
			key: "componentDidUpdate", value: function (e, t) {
				this.lastCount = t.count, this.state.animateStarted && this.setState((function (e, t) {
					return {animateStarted: !1, count: t.count}
				}), this.onAnimated)
			}
		}, {
			key: "getPositionByNum", value: function (e, t) {
				var c = this.state.count, n = Math.abs(Number(c)), r = Math.abs(Number(this.lastCount)),
					l = Math.abs(z(this.state.count)[t]), o = Math.abs(z(this.lastCount)[t]);
				return this.state.animateStarted ? 10 + e : n > r ? l >= o ? 10 + e : 20 + e : l <= o ? 10 + e : e
			}
		}, {
			key: "renderCurrentNumber", value: function (e, t, c) {
				if ("number" === typeof t) {
					var r = this.getPositionByNum(t, c),
						l = this.state.animateStarted || void 0 === z(this.lastCount)[c];
					return n.createElement("span", {
						className: "".concat(e, "-only"),
						style: {
							transition: l ? "none" : void 0,
							msTransform: "translateY(".concat(100 * -r, "%)"),
							WebkitTransform: "translateY(".concat(100 * -r, "%)"),
							transform: "translateY(".concat(100 * -r, "%)")
						},
						key: c
					}, function (e) {
						for (var t = [], c = 0; c < 30; c++) {
							var r = e === c ? "current" : "";
							t.push(n.createElement("p", {key: c.toString(), className: r}, c % 10))
						}
						return t
					}(r))
				}
				return n.createElement("span", {key: "symbol", className: "".concat(e, "-symbol")}, t)
			}
		}, {
			key: "renderNumberElement", value: function (e) {
				var t = this, c = this.state.count;
				return c && Number(c) % 1 === 0 ? z(c).map((function (c, n) {
					return t.renderCurrentNumber(e, c, n)
				})).reverse() : c
			}
		}, {
			key: "render", value: function () {
				return n.createElement(s.a, null, this.renderScrollNumber)
			}
		}]) && v(c.prototype, r), l && v(c, l), t
	}(n.Component);
	y.defaultProps = {
		count: null, onAnimated: function () {
		}
	}, Object(u.a)(y);
	var b = y, M = c(11),
		g = Object(M.a)("pink", "red", "yellow", "orange", "cyan", "green", "blue", "purple", "geekblue", "magenta", "volcano", "gold", "lime");

	function H(e) {
		return (H = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function (e) {
			return typeof e
		} : function (e) {
			return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
		})(e)
	}

	function V() {
		return (V = Object.assign || function (e) {
			for (var t = 1; t < arguments.length; t++) {
				var c = arguments[t];
				for (var n in c) Object.prototype.hasOwnProperty.call(c, n) && (e[n] = c[n])
			}
			return e
		}).apply(this, arguments)
	}

	function w(e, t, c) {
		return t in e ? Object.defineProperty(e, t, {
			value: c,
			enumerable: !0,
			configurable: !0,
			writable: !0
		}) : e[t] = c, e
	}

	function C(e, t) {
		for (var c = 0; c < t.length; c++) {
			var n = t[c];
			n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
		}
	}

	function L(e, t) {
		return !t || "object" !== H(t) && "function" !== typeof t ? function (e) {
			if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return e
		}(e) : t
	}

	function S(e) {
		return (S = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
			return e.__proto__ || Object.getPrototypeOf(e)
		})(e)
	}

	function k(e, t) {
		return (k = Object.setPrototypeOf || function (e, t) {
			return e.__proto__ = t, e
		})(e, t)
	}

	c.d(t, "a", (function () {
		return E
	}));
	var O = function (e, t) {
		var c = {};
		for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (c[n] = e[n]);
		if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
			var r = 0;
			for (n = Object.getOwnPropertySymbols(e); r < n.length; r++) t.indexOf(n[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[r]) && (c[n[r]] = e[n[r]])
		}
		return c
	};

	function T(e) {
		return -1 !== g.indexOf(e)
	}

	var E = function (e) {
		function t() {
			var e;
			return function (e, t) {
				if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
			}(this, t), (e = L(this, S(t).apply(this, arguments))).renderBadge = function (t) {
				var c, r = t.getPrefixCls, a = e.props, u = a.prefixCls, s = a.scrollNumberPrefixCls, h = a.children,
					f = a.status, v = a.text, p = a.color,
					d = O(a, ["prefixCls", "scrollNumberPrefixCls", "children", "status", "text", "color"]),
					m = ["count", "showZero", "overflowCount", "className", "style", "dot", "offset", "title"],
					z = r("badge", u), y = r("scroll-number", s), b = e.renderBadgeNumber(z, y),
					M = e.renderStatusText(z),
					g = i()((w(c = {}, "".concat(z, "-status-dot"), e.hasStatus()), w(c, "".concat(z, "-status-").concat(f), !!f), w(c, "".concat(z, "-status-").concat(p), T(p)), c)),
					H = {};
				if (p && !T(p) && (H.background = p), !h && e.hasStatus()) {
					var C = e.getStyleWithOffset(), L = C && C.color;
					return n.createElement("span", V({}, Object(o.a)(d, m), {
						className: e.getBadgeClassName(z),
						style: C
					}), n.createElement("span", {className: g, style: H}), n.createElement("span", {
						style: {color: L},
						className: "".concat(z, "-status-text")
					}, v))
				}
				return n.createElement("span", V({}, Object(o.a)(d, m), {className: e.getBadgeClassName(z)}), h, n.createElement(l.a, {
					component: "",
					showProp: "data-show",
					transitionName: h ? "".concat(z, "-zoom") : "",
					transitionAppear: !0
				}, b), M)
			}, e
		}

		var c, r, a;
		return function (e, t) {
			if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
			e.prototype = Object.create(t && t.prototype, {
				constructor: {
					value: e,
					writable: !0,
					configurable: !0
				}
			}), t && k(e, t)
		}(t, e), c = t, (r = [{
			key: "getNumberedDispayCount", value: function () {
				var e = this.props, t = e.count, c = e.overflowCount;
				return t > c ? "".concat(c, "+") : t
			}
		}, {
			key: "getDispayCount", value: function () {
				return this.isDot() ? "" : this.getNumberedDispayCount()
			}
		}, {
			key: "getScrollNumberTitle", value: function () {
				var e = this.props, t = e.title, c = e.count;
				return t || ("string" === typeof c || "number" === typeof c ? c : void 0)
			}
		}, {
			key: "getStyleWithOffset", value: function () {
				var e = this.props, t = e.offset, c = e.style;
				return t ? V({right: -parseInt(t[0], 10), marginTop: t[1]}, c) : c
			}
		}, {
			key: "getBadgeClassName", value: function (e) {
				var t, c = this.props, n = c.className, r = c.children;
				return i()(n, e, (w(t = {}, "".concat(e, "-status"), this.hasStatus()), w(t, "".concat(e, "-not-a-wrapper"), !r), t))
			}
		}, {
			key: "hasStatus", value: function () {
				var e = this.props, t = e.status, c = e.color;
				return !!t || !!c
			}
		}, {
			key: "isZero", value: function () {
				var e = this.getNumberedDispayCount();
				return "0" === e || 0 === e
			}
		}, {
			key: "isDot", value: function () {
				var e = this.props.dot, t = this.isZero();
				return e && !t || this.hasStatus()
			}
		}, {
			key: "isHidden", value: function () {
				var e = this.props.showZero, t = this.getDispayCount(), c = this.isZero(), n = this.isDot();
				return (null === t || void 0 === t || "" === t || c && !e) && !n
			}
		}, {
			key: "renderStatusText", value: function (e) {
				var t = this.props.text;
				return this.isHidden() || !t ? null : n.createElement("span", {className: "".concat(e, "-status-text")}, t)
			}
		}, {
			key: "renderDispayComponent", value: function () {
				var e = this.props.count;
				if (e && "object" === H(e)) return n.cloneElement(e, {style: V(V({}, this.getStyleWithOffset()), e.props && e.props.style)})
			}
		}, {
			key: "renderBadgeNumber", value: function (e, t) {
				var c, r = this.props, l = r.status, o = r.count, a = this.getDispayCount(), u = this.isDot(),
					s = this.isHidden(),
					h = i()((w(c = {}, "".concat(e, "-dot"), u), w(c, "".concat(e, "-count"), !u), w(c, "".concat(e, "-multiple-words"), !u && o && o.toString && o.toString().length > 1), w(c, "".concat(e, "-status-").concat(l), this.hasStatus()), c));
				return s ? null : n.createElement(b, {
					prefixCls: t,
					"data-show": !s,
					className: h,
					count: a,
					displayComponent: this.renderDispayComponent(),
					title: this.getScrollNumberTitle(),
					style: this.getStyleWithOffset(),
					key: "scrollNumber"
				})
			}
		}, {
			key: "render", value: function () {
				return n.createElement(s.a, null, this.renderBadge)
			}
		}]) && C(c.prototype, r), a && C(c, a), t
	}(n.Component);
	E.defaultProps = {count: null, showZero: !1, dot: !1, overflowCount: 99}, E.propTypes = {
		count: r.node,
		showZero: r.bool,
		dot: r.bool,
		overflowCount: r.number
	}
}]]);
//# sourceMappingURL=2.0db8b1e3.chunk.js.map