var Mn = Object.defineProperty;
var Ln = (R, $, W) => $ in R ? Mn(R, $, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: W
}) : R[$] = W;
var We = (R, $, W) => (Ln(R, typeof $ != "symbol" ? $ + "" : $, W),
    W);
var n$1, l$4, u$4, t$3, i$3, o$3, r$2, f$3, e$3, c$3 = {}, s$3 = [], a$3 = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, h$2 = Array.isArray;
function v$2(R, $) {
    for (var W in $)
        R[W] = $[W];
    return R
}
function p$4(R) {
    var $ = R.parentNode;
    $ && $.removeChild(R)
}
function y$1(R, $, W) {
    var U, V, K, Y = {};
    for (K in $)
        K == "key" ? U = $[K] : K == "ref" ? V = $[K] : Y[K] = $[K];
    if (arguments.length > 2 && (Y.children = arguments.length > 3 ? n$1.call(arguments, 2) : W),
        typeof R == "function" && R.defaultProps != null)
        for (K in R.defaultProps)
            Y[K] === void 0 && (Y[K] = R.defaultProps[K]);
    return d$3(R, Y, U, V, null)
}
function d$3(R, $, W, U, V) {
    var K = {
        type: R,
        props: $,
        key: W,
        ref: U,
        __k: null,
        __: null,
        __b: 0,
        __e: null,
        __d: void 0,
        __c: null,
        constructor: void 0,
        __v: V ?? ++u$4,
        __i: -1,
        __u: 0
    };
    return V == null && l$4.vnode != null && l$4.vnode(K),
        K
}
function g$2(R) {
    return R.children
}
function b$2(R, $) {
    this.props = R,
        this.context = $
}
function m$1(R, $) {
    if ($ == null)
        return R.__ ? m$1(R.__, R.__i + 1) : null;
    for (var W; $ < R.__k.length; $++)
        if ((W = R.__k[$]) != null && W.__e != null)
            return W.__e;
    return typeof R.type == "function" ? m$1(R) : null
}
function k$1(R) {
    var $, W;
    if ((R = R.__) != null && R.__c != null) {
        for (R.__e = R.__c.base = null,
            $ = 0; $ < R.__k.length; $++)
            if ((W = R.__k[$]) != null && W.__e != null) {
                R.__e = R.__c.base = W.__e;
                break
            }
        return k$1(R)
    }
}
function w$2(R) {
    (!R.__d && (R.__d = !0) && i$3.push(R) && !x$1.__r++ || o$3 !== l$4.debounceRendering) && ((o$3 = l$4.debounceRendering) || r$2)(x$1)
}
function x$1() {
    var R, $, W, U, V, K, Y, Z, J;
    for (i$3.sort(f$3); R = i$3.shift();)
        R.__d && ($ = i$3.length,
            U = void 0,
            K = (V = (W = R).__v).__e,
            Z = [],
            J = [],
            (Y = W.__P) && ((U = v$2({}, V)).__v = V.__v + 1,
                l$4.vnode && l$4.vnode(U),
                L$1(Y, U, V, W.__n, Y.ownerSVGElement !== void 0, 32 & V.__u ? [K] : null, Z, K ?? m$1(V), !!(32 & V.__u), J),
                U.__.__k[U.__i] = U,
                M(Z, U, J),
                U.__e != K && k$1(U)),
            i$3.length > $ && i$3.sort(f$3));
    x$1.__r = 0
}
function C(R, $, W, U, V, K, Y, Z, J, X, re) {
    var oe, ie, se, le, ue, pe = U && U.__k || s$3, Ee = $.length;
    for (W.__d = J,
        P$1(W, $, pe),
        J = W.__d,
        oe = 0; oe < Ee; oe++)
        (se = W.__k[oe]) != null && typeof se != "boolean" && typeof se != "function" && (ie = se.__i === -1 ? c$3 : pe[se.__i] || c$3,
            se.__i = oe,
            L$1(R, se, ie, V, K, Y, Z, J, X, re),
            le = se.__e,
            se.ref && ie.ref != se.ref && (ie.ref && z$1(ie.ref, null, se),
                re.push(se.ref, se.__c || le, se)),
            ue == null && le != null && (ue = le),
            65536 & se.__u || ie.__k === se.__k ? J = S(se, J, R) : typeof se.type == "function" && se.__d !== void 0 ? J = se.__d : le && (J = le.nextSibling),
            se.__d = void 0,
            se.__u &= -196609);
    W.__d = J,
        W.__e = ue
}
function P$1(R, $, W) {
    var U, V, K, Y, Z, J = $.length, X = W.length, re = X, oe = 0;
    for (R.__k = [],
        U = 0; U < J; U++)
        (V = R.__k[U] = (V = $[U]) == null || typeof V == "boolean" || typeof V == "function" ? null : typeof V == "string" || typeof V == "number" || typeof V == "bigint" || V.constructor == String ? d$3(null, V, null, null, V) : h$2(V) ? d$3(g$2, {
            children: V
        }, null, null, null) : V.constructor === void 0 && V.__b > 0 ? d$3(V.type, V.props, V.key, V.ref ? V.ref : null, V.__v) : V) != null ? (V.__ = R,
            V.__b = R.__b + 1,
            Z = H(V, W, Y = U + oe, re),
            V.__i = Z,
            K = null,
            Z !== -1 && (re--,
                (K = W[Z]) && (K.__u |= 131072)),
            K == null || K.__v === null ? (Z == -1 && oe--,
                typeof V.type != "function" && (V.__u |= 65536)) : Z !== Y && (Z === Y + 1 ? oe++ : Z > Y ? re > J - Y ? oe += Z - Y : oe-- : oe = Z < Y && Z == Y - 1 ? Z - Y : 0,
                    Z !== U + oe && (V.__u |= 65536))) : (K = W[U]) && K.key == null && K.__e && (K.__e == R.__d && (R.__d = m$1(K)),
                        N(K, K, !1),
                        W[U] = null,
                        re--);
    if (re)
        for (U = 0; U < X; U++)
            (K = W[U]) != null && !(131072 & K.__u) && (K.__e == R.__d && (R.__d = m$1(K)),
                N(K, K))
}
function S(R, $, W) {
    var U, V;
    if (typeof R.type == "function") {
        for (U = R.__k,
            V = 0; U && V < U.length; V++)
            U[V] && (U[V].__ = R,
                $ = S(U[V], $, W));
        return $
    }
    return R.__e != $ && (W.insertBefore(R.__e, $ || null),
        $ = R.__e),
        $ && $.nextSibling
}
function H(R, $, W, U) {
    var V = R.key
        , K = R.type
        , Y = W - 1
        , Z = W + 1
        , J = $[W];
    if (J === null || J && V == J.key && K === J.type)
        return W;
    if (U > (J != null && !(131072 & J.__u) ? 1 : 0))
        for (; Y >= 0 || Z < $.length;) {
            if (Y >= 0) {
                if ((J = $[Y]) && !(131072 & J.__u) && V == J.key && K === J.type)
                    return Y;
                Y--
            }
            if (Z < $.length) {
                if ((J = $[Z]) && !(131072 & J.__u) && V == J.key && K === J.type)
                    return Z;
                Z++
            }
        }
    return -1
}
function I(R, $, W) {
    $[0] === "-" ? R.setProperty($, W ?? "") : R[$] = W == null ? "" : typeof W != "number" || a$3.test($) ? W : W + "px"
}
function T$1(R, $, W, U, V) {
    var K;
    e: if ($ === "style")
        if (typeof W == "string")
            R.style.cssText = W;
        else {
            if (typeof U == "string" && (R.style.cssText = U = ""),
                U)
                for ($ in U)
                    W && $ in W || I(R.style, $, "");
            if (W)
                for ($ in W)
                    U && W[$] === U[$] || I(R.style, $, W[$])
        }
    else if ($[0] === "o" && $[1] === "n")
        K = $ !== ($ = $.replace(/(PointerCapture)$|Capture$/, "$1")),
            $ = $.toLowerCase() in R ? $.toLowerCase().slice(2) : $.slice(2),
            R.l || (R.l = {}),
            R.l[$ + K] = W,
            W ? U ? W.u = U.u : (W.u = Date.now(),
                R.addEventListener($, K ? D : A, K)) : R.removeEventListener($, K ? D : A, K);
    else {
        if (V)
            $ = $.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
        else if ($ !== "width" && $ !== "height" && $ !== "href" && $ !== "list" && $ !== "form" && $ !== "tabIndex" && $ !== "download" && $ !== "rowSpan" && $ !== "colSpan" && $ !== "role" && $ in R)
            try {
                R[$] = W ?? "";
                break e
            } catch { }
        typeof W == "function" || (W == null || W === !1 && $[4] !== "-" ? R.removeAttribute($) : R.setAttribute($, W))
    }
}
function A(R) {
    var $ = this.l[R.type + !1];
    if (R.t) {
        if (R.t <= $.u)
            return
    } else
        R.t = Date.now();
    return $(l$4.event ? l$4.event(R) : R)
}
function D(R) {
    return this.l[R.type + !0](l$4.event ? l$4.event(R) : R)
}
function L$1(R, $, W, U, V, K, Y, Z, J, X) {
    var re, oe, ie, se, le, ue, pe, Ee, Ce, ke, Ue, be, Be, xe, ye, de = $.type;
    if ($.constructor !== void 0)
        return null;
    128 & W.__u && (J = !!(32 & W.__u),
        K = [Z = $.__e = W.__e]),
        (re = l$4.__b) && re($);
    e: if (typeof de == "function")
        try {
            if (Ee = $.props,
                Ce = (re = de.contextType) && U[re.__c],
                ke = re ? Ce ? Ce.props.value : re.__ : U,
                W.__c ? pe = (oe = $.__c = W.__c).__ = oe.__E : ("prototype" in de && de.prototype.render ? $.__c = oe = new de(Ee, ke) : ($.__c = oe = new b$2(Ee, ke),
                    oe.constructor = de,
                    oe.render = O$1),
                    Ce && Ce.sub(oe),
                    oe.props = Ee,
                    oe.state || (oe.state = {}),
                    oe.context = ke,
                    oe.__n = U,
                    ie = oe.__d = !0,
                    oe.__h = [],
                    oe._sb = []),
                oe.__s == null && (oe.__s = oe.state),
                de.getDerivedStateFromProps != null && (oe.__s == oe.state && (oe.__s = v$2({}, oe.__s)),
                    v$2(oe.__s, de.getDerivedStateFromProps(Ee, oe.__s))),
                se = oe.props,
                le = oe.state,
                oe.__v = $,
                ie)
                de.getDerivedStateFromProps == null && oe.componentWillMount != null && oe.componentWillMount(),
                    oe.componentDidMount != null && oe.__h.push(oe.componentDidMount);
            else {
                if (de.getDerivedStateFromProps == null && Ee !== se && oe.componentWillReceiveProps != null && oe.componentWillReceiveProps(Ee, ke),
                    !oe.__e && (oe.shouldComponentUpdate != null && oe.shouldComponentUpdate(Ee, oe.__s, ke) === !1 || $.__v === W.__v)) {
                    for ($.__v !== W.__v && (oe.props = Ee,
                        oe.state = oe.__s,
                        oe.__d = !1),
                        $.__e = W.__e,
                        $.__k = W.__k,
                        $.__k.forEach(function (Se) {
                            Se && (Se.__ = $)
                        }),
                        Ue = 0; Ue < oe._sb.length; Ue++)
                        oe.__h.push(oe._sb[Ue]);
                    oe._sb = [],
                        oe.__h.length && Y.push(oe);
                    break e
                }
                oe.componentWillUpdate != null && oe.componentWillUpdate(Ee, oe.__s, ke),
                    oe.componentDidUpdate != null && oe.__h.push(function () {
                        oe.componentDidUpdate(se, le, ue)
                    })
            }
            if (oe.context = ke,
                oe.props = Ee,
                oe.__P = R,
                oe.__e = !1,
                be = l$4.__r,
                Be = 0,
                "prototype" in de && de.prototype.render) {
                for (oe.state = oe.__s,
                    oe.__d = !1,
                    be && be($),
                    re = oe.render(oe.props, oe.state, oe.context),
                    xe = 0; xe < oe._sb.length; xe++)
                    oe.__h.push(oe._sb[xe]);
                oe._sb = []
            } else
                do
                    oe.__d = !1,
                        be && be($),
                        re = oe.render(oe.props, oe.state, oe.context),
                        oe.state = oe.__s;
                while (oe.__d && ++Be < 25);
            oe.state = oe.__s,
                oe.getChildContext != null && (U = v$2(v$2({}, U), oe.getChildContext())),
                ie || oe.getSnapshotBeforeUpdate == null || (ue = oe.getSnapshotBeforeUpdate(se, le)),
                C(R, h$2(ye = re != null && re.type === g$2 && re.key == null ? re.props.children : re) ? ye : [ye], $, W, U, V, K, Y, Z, J, X),
                oe.base = $.__e,
                $.__u &= -161,
                oe.__h.length && Y.push(oe),
                pe && (oe.__E = oe.__ = null)
        } catch (Se) {
            $.__v = null,
                J || K != null ? ($.__e = Z,
                    $.__u |= J ? 160 : 32,
                    K[K.indexOf(Z)] = null) : ($.__e = W.__e,
                        $.__k = W.__k),
                l$4.__e(Se, $, W)
        }
    else
        K == null && $.__v === W.__v ? ($.__k = W.__k,
            $.__e = W.__e) : $.__e = j$1(W.__e, $, W, U, V, K, Y, J, X);
    (re = l$4.diffed) && re($)
}
function M(R, $, W) {
    $.__d = void 0;
    for (var U = 0; U < W.length; U++)
        z$1(W[U], W[++U], W[++U]);
    l$4.__c && l$4.__c($, R),
        R.some(function (V) {
            try {
                R = V.__h,
                    V.__h = [],
                    R.some(function (K) {
                        K.call(V)
                    })
            } catch (K) {
                l$4.__e(K, V.__v)
            }
        })
}
function j$1(R, $, W, U, V, K, Y, Z, J) {
    var X, re, oe, ie, se, le, ue, pe = W.props, Ee = $.props, Ce = $.type;
    if (Ce === "svg" && (V = !0),
        K != null) {
        for (X = 0; X < K.length; X++)
            if ((se = K[X]) && "setAttribute" in se == !!Ce && (Ce ? se.localName === Ce : se.nodeType === 3)) {
                R = se,
                    K[X] = null;
                break
            }
    }
    if (R == null) {
        if (Ce === null)
            return document.createTextNode(Ee);
        R = V ? document.createElementNS("http://www.w3.org/2000/svg", Ce) : document.createElement(Ce, Ee.is && Ee),
            K = null,
            Z = !1
    }
    if (Ce === null)
        pe === Ee || Z && R.data === Ee || (R.data = Ee);
    else {
        if (K = K && n$1.call(R.childNodes),
            pe = W.props || c$3,
            !Z && K != null)
            for (pe = {},
                X = 0; X < R.attributes.length; X++)
                pe[(se = R.attributes[X]).name] = se.value;
        for (X in pe)
            se = pe[X],
                X == "children" || (X == "dangerouslySetInnerHTML" ? oe = se : X === "key" || X in Ee || T$1(R, X, null, se, V));
        for (X in Ee)
            se = Ee[X],
                X == "children" ? ie = se : X == "dangerouslySetInnerHTML" ? re = se : X == "value" ? le = se : X == "checked" ? ue = se : X === "key" || Z && typeof se != "function" || pe[X] === se || T$1(R, X, se, pe[X], V);
        if (re)
            Z || oe && (re.__html === oe.__html || re.__html === R.innerHTML) || (R.innerHTML = re.__html),
                $.__k = [];
        else if (oe && (R.innerHTML = ""),
            C(R, h$2(ie) ? ie : [ie], $, W, U, V && Ce !== "foreignObject", K, Y, K ? K[0] : W.__k && m$1(W, 0), Z, J),
            K != null)
            for (X = K.length; X--;)
                K[X] != null && p$4(K[X]);
        Z || (X = "value",
            le !== void 0 && (le !== R[X] || Ce === "progress" && !le || Ce === "option" && le !== pe[X]) && T$1(R, X, le, pe[X], !1),
            X = "checked",
            ue !== void 0 && ue !== R[X] && T$1(R, X, ue, pe[X], !1))
    }
    return R
}
function z$1(R, $, W) {
    try {
        typeof R == "function" ? R($) : R.current = $
    } catch (U) {
        l$4.__e(U, W)
    }
}
function N(R, $, W) {
    var U, V;
    if (l$4.unmount && l$4.unmount(R),
        (U = R.ref) && (U.current && U.current !== R.__e || z$1(U, null, $)),
        (U = R.__c) != null) {
        if (U.componentWillUnmount)
            try {
                U.componentWillUnmount()
            } catch (K) {
                l$4.__e(K, $)
            }
        U.base = U.__P = null,
            R.__c = void 0
    }
    if (U = R.__k)
        for (V = 0; V < U.length; V++)
            U[V] && N(U[V], $, W || typeof R.type != "function");
    W || R.__e == null || p$4(R.__e),
        R.__ = R.__e = R.__d = void 0
}
function O$1(R, $, W) {
    return this.constructor(R, W)
}
function q$1(R, $, W) {
    var U, V, K, Y;
    l$4.__ && l$4.__(R, $),
        V = (U = typeof W == "function") ? null : W && W.__k || $.__k,
        K = [],
        Y = [],
        L$1($, R = (!U && W || $).__k = y$1(g$2, null, [R]), V || c$3, c$3, $.ownerSVGElement !== void 0, !U && W ? [W] : V ? null : $.firstChild ? n$1.call($.childNodes) : null, K, !U && W ? W : V ? V.__e : $.firstChild, U, Y),
        M(K, R, Y)
}
function F$1(R, $) {
    var W = {
        __c: $ = "__cC" + e$3++,
        __: R,
        Consumer: function (U, V) {
            return U.children(V)
        },
        Provider: function (U) {
            var V, K;
            return this.getChildContext || (V = [],
                (K = {})[$] = this,
                this.getChildContext = function () {
                    return K
                }
                ,
                this.shouldComponentUpdate = function (Y) {
                    this.props.value !== Y.value && V.some(function (Z) {
                        Z.__e = !0,
                            w$2(Z)
                    })
                }
                ,
                this.sub = function (Y) {
                    V.push(Y);
                    var Z = Y.componentWillUnmount;
                    Y.componentWillUnmount = function () {
                        V.splice(V.indexOf(Y), 1),
                            Z && Z.call(Y)
                    }
                }
            ),
                U.children
        }
    };
    return W.Provider.__ = W.Consumer.contextType = W
}
n$1 = s$3.slice,
    l$4 = {
        __e: function (R, $, W, U) {
            for (var V, K, Y; $ = $.__;)
                if ((V = $.__c) && !V.__)
                    try {
                        if ((K = V.constructor) && K.getDerivedStateFromError != null && (V.setState(K.getDerivedStateFromError(R)),
                            Y = V.__d),
                            V.componentDidCatch != null && (V.componentDidCatch(R, U || {}),
                                Y = V.__d),
                            Y)
                            return V.__E = V
                    } catch (Z) {
                        R = Z
                    }
            throw R
        }
    },
    u$4 = 0,
    t$3 = function (R) {
        return R != null && R.constructor == null
    }
    ,
    b$2.prototype.setState = function (R, $) {
        var W;
        W = this.__s != null && this.__s !== this.state ? this.__s : this.__s = v$2({}, this.state),
            typeof R == "function" && (R = R(v$2({}, W), this.props)),
            R && v$2(W, R),
            R != null && this.__v && ($ && this._sb.push($),
                w$2(this))
    }
    ,
    b$2.prototype.forceUpdate = function (R) {
        this.__v && (this.__e = !0,
            R && this.__h.push(R),
            w$2(this))
    }
    ,
    b$2.prototype.render = g$2,
    i$3 = [],
    r$2 = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout,
    f$3 = function (R, $) {
        return R.__v.__b - $.__v.__b
    }
    ,
    x$1.__r = 0,
    e$3 = 0;
var ELogLevel = (R => (R.DEBUG = "debug",
    R.INFO = "info",
    R.WARN = "warn",
    R.ERROR = "error",
    R.FATAL = "fatal",
    R))(ELogLevel || {});
class LogUtil {
    static obfuscate($) {
        return $.length <= 2 ? "*".repeat(16) : $.substring(0, 1) + "*".repeat(14) + $.substring($.length - 1)
    }
    static getMessage($) {
        if (typeof $ == "string")
            return $;
        if (typeof $ == "object" && $ !== null) {
            const W = $.message;
            if (typeof W == "string")
                return W
        }
        return String($)
    }
    static getOneLineStack($) {
        return !($ instanceof Error) || !$.stack ? "nostack" : $.stack.replace(/\n+/g, "\\r")
    }
}
class SimpleFormatter {
    print($) {
        const W = $.data ?? "";
        switch ($.level) {
            case ELogLevel.DEBUG:
                console.debug(`[${$.tag}]`, $.msg, W);
                break;
            case ELogLevel.INFO:
                console.info(`[${$.tag}]`, $.msg, W);
                break;
            case ELogLevel.WARN:
                console.warn(`[${$.tag}]`, $.msg, W);
                break;
            case ELogLevel.ERROR:
            case ELogLevel.FATAL:
                console.error(`[${$.tag}]`, $.msg, W);
                break
        }
    }
}
const an = class an {
    constructor($) {
        this.tag = $
    }
    debug($, W) {
        an.formatter.print({
            level: ELogLevel.DEBUG,
            tag: this.tag,
            msg: $,
            data: W
        })
    }
    info($, W) {
        an.formatter.print({
            level: ELogLevel.INFO,
            tag: this.tag,
            msg: $,
            data: W
        })
    }
    warn($, W) {
        an.formatter.print({
            level: ELogLevel.WARN,
            tag: this.tag,
            msg: $,
            data: W
        })
    }
    error($, W) {
        W.err = LogUtil.getMessage(W.err),
            an.formatter.print({
                level: ELogLevel.ERROR,
                tag: this.tag,
                msg: $,
                data: W
            })
    }
    fatal($, W) {
        W.err = LogUtil.getMessage(W.err),
            an.formatter.print({
                level: ELogLevel.FATAL,
                tag: this.tag,
                msg: $,
                data: W
            })
    }
    unhandledError($, W) {
        console.error(W.err),
            an.formatter.print({
                level: ELogLevel.ERROR,
                tag: this.tag,
                msg: $,
                data: {
                    ...W,
                    err: LogUtil.getMessage(W.err),
                    stack: W.err instanceof Error ? W.err.stack : "nostack",
                    unhandled: !0
                }
            })
    }
}
    ;
We(an, "formatter", new SimpleFormatter),
    We(an, "disabled", !1),
    We(an, "onelineStackTrace", !1);
let Log = an;
const MS_IN_SECOND = 1e3
    , MS_IN_MINUTE = 60 * MS_IN_SECOND
    , MS_IN_HOUR = 60 * MS_IN_MINUTE
    , MS_IN_DAY = 24 * MS_IN_HOUR
    , MAX_DATE = new Date(864e13);
class Time {
    constructor() {
        We(this, "_frozenValue")
    }
    now() {
        return this._frozenValue ?? Date.now()
    }
    fromIsoDate($) {
        return new Date($).getTime()
    }
    cast($) {
        return $ % 1 === 0 ? $ : Math.floor($)
    }
    freeze($) {
        return this._frozenValue = $ ?? this.now(),
            this._frozenValue
    }
    unfreeze() {
        this._frozenValue = void 0
    }
    dropMillis($) {
        return Math.floor($ / MS_IN_SECOND) * MS_IN_SECOND
    }
    addMillis($, W) {
        return $ + W
    }
    addSeconds($, W) {
        return Math.round($ + W * MS_IN_SECOND)
    }
    addMinutes($, W) {
        return Math.round($ + W * MS_IN_MINUTE)
    }
    addHours($, W) {
        return Math.round($ + W * MS_IN_HOUR)
    }
    addDays($, W) {
        return Math.round($ + W * MS_IN_DAY)
    }
    toSeconds($) {
        return $ / MS_IN_SECOND
    }
    toMinutes($) {
        return $ / MS_IN_MINUTE
    }
    toHours($) {
        return $ / MS_IN_HOUR
    }
    toDays($) {
        return $ / MS_IN_DAY
    }
    secondsNow() {
        return Math.floor(this.now() / MS_IN_SECOND)
    }
    dateNow() {
        return new Date(this.now())
    }
    fromDate($) {
        return $.getTime()
    }
    makeMeter() {
        return new TimeMeter
    }
    secondsToMillis($) {
        return Math.floor($ * MS_IN_SECOND)
    }
    minutesToMillis($) {
        return Math.floor($ * MS_IN_MINUTE)
    }
    hoursToMillis($) {
        return Math.floor($ * MS_IN_HOUR)
    }
    daysToMillis($) {
        return Math.floor($ * MS_IN_DAY)
    }
    floorToDay($) {
        return $ - $ % MS_IN_DAY
    }
    get maxTime() {
        return MAX_DATE.getTime()
    }
    get isFrozen() {
        return this._frozenValue !== void 0
    }
}
class TimeMeter {
    constructor() {
        We(this, "startTime", time.now())
    }
    get elapsed() {
        return time.now() - this.startTime
    }
    toString() {
        return `${this.elapsed / 1e3}s`
    }
}
const time = new Time;
function checked(R, $) {
    if (R == null)
        throw new Error($ ?? "value_not_initialized");
    return R
}
function check(R, $) {
    if (!R)
        throw new Error($)
}
function sleep(R) {
    return new Promise($ => setTimeout($, R))
}
const _n = class _n extends Error {
    constructor(W, U = 0, V = null) {
        super(W);
        We(this, "status");
        We(this, "data");
        this.name = "ApiError",
            this.status = U,
            this.data = V,
            Object.setPrototypeOf(this, _n.prototype)
    }
}
    ;
We(_n, "network_error", "network_error"),
    We(_n, "parse_error", "parse_error");
let ApiError = _n;
class ApiCall {
    constructor($, W) {
        We(this, "_context");
        We(this, "_path");
        this._context = $,
            this._path = W
    }
    get path() {
        return this._path
    }
    makeUrl() {
        const $ = `${this._context.baseUrl}${this.path}`;
        try {
            return new URL($)
        } catch {
            throw new Error(`Invalid URL: "${$}"`)
        }
    }
    makeHeaders($, W) {
        $ === void 0 && ($ = this._context.authToken);
        const U = {};
        return U["Content-Type"] = "application/json",
            $ && (U.Authorization = `Bearer ${$}`),
            this._context.headers.forEach((V, K) => U[K] = V),
        {
            ...U,
            ...W
        }
    }
    async get($, W, U) {
        const V = this.makeUrl();
        if (this._context.log.debug("GET", {
            url: V.toString(),
            params: $
        }),
            $)
            for (const Z of Object.keys($))
                V.searchParams.set(Z, String($[Z]));
        let K;
        try {
            K = await fetch(V, {
                method: "GET",
                headers: this.makeHeaders(W, U)
            })
        } catch (Z) {
            const J = new ApiError(LogUtil.getMessage(Z), 503);
            throw this._context.callErrorHandler(J),
            J
        }
        const Y = await this.fetchResponse(K);
        if (Y instanceof ApiError)
            throw this._context.callErrorHandler(Y),
            Y;
        return Y
    }
    async post($, W, U) {
        const V = this.makeUrl();
        this._context.log.debug("POST", {
            url: V.toString(),
            params: $
        });
        const K = this.makeHeaders(W, U)
            , Y = JSON.stringify($ ?? {});
        let Z;
        try {
            Z = await fetch(V, {
                method: "POST",
                headers: K,
                body: Y
            })
        } catch (X) {
            const re = new ApiError(LogUtil.getMessage(X), 503);
            throw this._context.callErrorHandler(re),
            re
        }
        const J = await this.fetchResponse(Z);
        if (J instanceof ApiError)
            throw this._context.callErrorHandler(J),
            J;
        return J
    }
    async fetchResponse($) {
        let W;
        try {
            W = await $.text()
        } catch {
            return new ApiError(ApiError.network_error, 503)
        }
        let U;
        try {
            U = JSON.parse(W)
        } catch {
            return this._context._printUnparsedResponse && this._context.log.warn(W),
                new ApiError(ApiError.parse_error, $.status)
        }
        if (!$.ok) {
            const V = U.message
                , K = typeof V == "string" ? V : String(V);
            return new ApiError(K, $.status, U)
        }
        return U
    }
}
class ApiContext {
    constructor($) {
        We(this, "log");
        We(this, "headers", new Map);
        We(this, "_baseUrl", "");
        We(this, "_authToken", "");
        We(this, "_errorHandler");
        We(this, "_printUnparsedResponse");
        this.log = new Log($.tag)
    }
    callErrorHandler($) {
        if (this._errorHandler)
            try {
                this._errorHandler($)
            } catch (W) {
                console.error(W)
            }
    }
    get baseUrl() {
        const $ = this._baseUrl;
        return typeof $ == "string" ? $ : $()
    }
    get authToken() {
        const $ = this._authToken;
        return $ ? typeof $ == "string" ? $ : $() : ""
    }
}
class TapokAPI {
    constructor($) {
        We(this, "_context", new ApiContext({
            tag: "tap_api"
        }));
        We(this, "root_getRoot", this.makeCall("/"));
        We(this, "root_getHealth", this.makeCall("/api/health"));
        We(this, "root_getStat", this.makeCall("/api/stat"));
        We(this, "account_login", this.makeCall("/api/account/login"));
        We(this, "account_tokenLogin", this.makeCall("/api/account/wallet_login"));
        We(this, "missions_joinMission", this.makeCall("/api/missions/join_mission"));
        We(this, "missions_finishMission", this.makeCall("/api/missions/finish_mission"));
        We(this, "missions_finishMissionItem", this.makeCall("/api/missions/finish_mission_item"));
        We(this, "wallet_getLoginToken", this.makeCall("/api/wallet/get_token"));
        We(this, "wallet_setSolanaWallet", this.makeCall("/api/wallet/set_solana_wallet"));
        We(this, "player_submitTaps", this.makeCall("/api/player/submit_taps"));
        We(this, "player_getPlayer", this.makeCall("/api/player/get_player"));
        We(this, "player_claimReward", this.makeCall("/api/player/claim_reward"));
        We(this, "player_upgrade", this.makeCall("/api/player/upgrade"));
        We(this, "player_applyBoost", this.makeCall("/api/player/apply_boost"));
        We(this, "player_getRefs", this.makeCall("/api/player/get_refs"));
        We(this, "player_sendInvite", this.makeCall("/api/player/send_invite"));
        We(this, "market_buyBoost", this.makeCall("/api/market/buy_boost"));
        We(this, "invoices_getInvoice", this.makeCall("/api/invoice/get_invoice"));
        We(this, "invoices_getInvoices", this.makeCall("/api/invoice/get_invoices"));
        We(this, "invoices_setPaid", this.makeCall("/api/invoice/set_paid"));
        this._context._baseUrl = $.baseUrl,
            this._context._authToken = $.authToken ?? "",
            this._context._errorHandler = $.errorHandler,
            this._context._printUnparsedResponse = $.printUnparsedResponse,
            this.setHeaders($.headers ?? {})
    }
    setHeaders($) {
        for (const [W, U] of Object.entries($))
            this._context.headers.set(W, U)
    }
    get baseUrl() {
        return this._context.baseUrl
    }
    get headers() {
        return this._context.headers
    }
    makeCall($) {
        return new ApiCall(this._context, $)
    }
}
var t$2, r$1, u$3, i$2, o$2 = 0, f$2 = [], c$2 = [], e$2 = l$4.__b, a$2 = l$4.__r, v$1 = l$4.diffed, l$3 = l$4.__c, m = l$4.unmount;
function d$2(R, $) {
    l$4.__h && l$4.__h(r$1, R, o$2 || $),
        o$2 = 0;
    var W = r$1.__H || (r$1.__H = {
        __: [],
        __h: []
    });
    return R >= W.__.length && W.__.push({
        __V: c$2
    }),
        W.__[R]
}
function h$1(R) {
    return o$2 = 1,
        s$2(B, R)
}
function s$2(R, $, W) {
    var U = d$2(t$2++, 2);
    if (U.t = R,
        !U.__c && (U.__ = [W ? W($) : B(void 0, $), function (Z) {
            var J = U.__N ? U.__N[0] : U.__[0]
                , X = U.t(J, Z);
            J !== X && (U.__N = [X, U.__[1]],
                U.__c.setState({}))
        }
        ],
            U.__c = r$1,
            !r$1.u)) {
        var V = function (Z, J, X) {
            if (!U.__c.__H)
                return !0;
            var re = U.__c.__H.__.filter(function (ie) {
                return ie.__c
            });
            if (re.every(function (ie) {
                return !ie.__N
            }))
                return !K || K.call(this, Z, J, X);
            var oe = !1;
            return re.forEach(function (ie) {
                if (ie.__N) {
                    var se = ie.__[0];
                    ie.__ = ie.__N,
                        ie.__N = void 0,
                        se !== ie.__[0] && (oe = !0)
                }
            }),
                !(!oe && U.__c.props === Z) && (!K || K.call(this, Z, J, X))
        };
        r$1.u = !0;
        var K = r$1.shouldComponentUpdate
            , Y = r$1.componentWillUpdate;
        r$1.componentWillUpdate = function (Z, J, X) {
            if (this.__e) {
                var re = K;
                K = void 0,
                    V(Z, J, X),
                    K = re
            }
            Y && Y.call(this, Z, J, X)
        }
            ,
            r$1.shouldComponentUpdate = V
    }
    return U.__N || U.__
}
function p$3(R, $) {
    var W = d$2(t$2++, 3);
    !l$4.__s && z(W.__H, $) && (W.__ = R,
        W.i = $,
        r$1.__H.__h.push(W))
}
function _$2(R) {
    return o$2 = 5,
        F(function () {
            return {
                current: R
            }
        }, [])
}
function F(R, $) {
    var W = d$2(t$2++, 7);
    return z(W.__H, $) ? (W.__V = R(),
        W.i = $,
        W.__h = R,
        W.__V) : W.__
}
function T(R, $) {
    return o$2 = 8,
        F(function () {
            return R
        }, $)
}
function q(R) {
    var $ = r$1.context[R.__c]
        , W = d$2(t$2++, 9);
    return W.c = R,
        $ ? (W.__ == null && (W.__ = !0,
            $.sub(r$1)),
            $.props.value) : R.__
}
function b$1() {
    for (var R; R = f$2.shift();)
        if (R.__P && R.__H)
            try {
                R.__H.__h.forEach(k),
                    R.__H.__h.forEach(w$1),
                    R.__H.__h = []
            } catch ($) {
                R.__H.__h = [],
                    l$4.__e($, R.__v)
            }
}
l$4.__b = function (R) {
    r$1 = null,
        e$2 && e$2(R)
}
    ,
    l$4.__r = function (R) {
        a$2 && a$2(R),
            t$2 = 0;
        var $ = (r$1 = R.__c).__H;
        $ && (u$3 === r$1 ? ($.__h = [],
            r$1.__h = [],
            $.__.forEach(function (W) {
                W.__N && (W.__ = W.__N),
                    W.__V = c$2,
                    W.__N = W.i = void 0
            })) : ($.__h.forEach(k),
                $.__h.forEach(w$1),
                $.__h = [],
                t$2 = 0)),
            u$3 = r$1
    }
    ,
    l$4.diffed = function (R) {
        v$1 && v$1(R);
        var $ = R.__c;
        $ && $.__H && ($.__H.__h.length && (f$2.push($) !== 1 && i$2 === l$4.requestAnimationFrame || ((i$2 = l$4.requestAnimationFrame) || j)(b$1)),
            $.__H.__.forEach(function (W) {
                W.i && (W.__H = W.i),
                    W.__V !== c$2 && (W.__ = W.__V),
                    W.i = void 0,
                    W.__V = c$2
            })),
            u$3 = r$1 = null
    }
    ,
    l$4.__c = function (R, $) {
        $.some(function (W) {
            try {
                W.__h.forEach(k),
                    W.__h = W.__h.filter(function (U) {
                        return !U.__ || w$1(U)
                    })
            } catch (U) {
                $.some(function (V) {
                    V.__h && (V.__h = [])
                }),
                    $ = [],
                    l$4.__e(U, W.__v)
            }
        }),
            l$3 && l$3(R, $)
    }
    ,
    l$4.unmount = function (R) {
        m && m(R);
        var $, W = R.__c;
        W && W.__H && (W.__H.__.forEach(function (U) {
            try {
                k(U)
            } catch (V) {
                $ = V
            }
        }),
            W.__H = void 0,
            $ && l$4.__e($, W.__v))
    }
    ;
var g$1 = typeof requestAnimationFrame == "function";
function j(R) {
    var $, W = function () {
        clearTimeout(U),
            g$1 && cancelAnimationFrame($),
            setTimeout(R)
    }, U = setTimeout(W, 100);
    g$1 && ($ = requestAnimationFrame(W))
}
function k(R) {
    var $ = r$1
        , W = R.__c;
    typeof W == "function" && (R.__c = void 0,
        W()),
        r$1 = $
}
function w$1(R) {
    var $ = r$1;
    R.__c = R.__(),
        r$1 = $
}
function z(R, $) {
    return !R || R.length !== $.length || $.some(function (W, U) {
        return W !== R[U]
    })
}
function B(R, $) {
    return typeof $ == "function" ? $(R) : $
}
function i$1() {
    throw new Error("Cycle detected")
}
var t$1 = Symbol.for("preact-signals");
function r() {
    if (v > 1)
        v--;
    else {
        for (var R, $ = !1; f$1 !== void 0;) {
            var W = f$1;
            for (f$1 = void 0,
                e$1++; W !== void 0;) {
                var U = W.o;
                if (W.o = void 0,
                    W.f &= -3,
                    !(8 & W.f) && l$2(W))
                    try {
                        W.c()
                    } catch (V) {
                        $ || (R = V,
                            $ = !0)
                    }
                W = U
            }
        }
        if (e$1 = 0,
            v--,
            $)
            throw R
    }
}
var o$1 = void 0
    , f$1 = void 0
    , v = 0
    , e$1 = 0
    , u$2 = 0;
function c$1(R) {
    if (o$1 !== void 0) {
        var $ = R.n;
        if ($ === void 0 || $.t !== o$1)
            return $ = {
                i: 0,
                S: R,
                p: o$1.s,
                n: void 0,
                t: o$1,
                e: void 0,
                x: void 0,
                r: $
            },
                o$1.s !== void 0 && (o$1.s.n = $),
                o$1.s = $,
                R.n = $,
                32 & o$1.f && R.S($),
                $;
        if ($.i === -1)
            return $.i = 0,
                $.n !== void 0 && ($.n.p = $.p,
                    $.p !== void 0 && ($.p.n = $.n),
                    $.p = o$1.s,
                    $.n = void 0,
                    o$1.s.n = $,
                    o$1.s = $),
                $
    }
}
function d$1(R) {
    this.v = R,
        this.i = 0,
        this.n = void 0,
        this.t = void 0
}
d$1.prototype.brand = t$1;
d$1.prototype.h = function () {
    return !0
}
    ;
d$1.prototype.S = function (R) {
    this.t !== R && R.e === void 0 && (R.x = this.t,
        this.t !== void 0 && (this.t.e = R),
        this.t = R)
}
    ;
d$1.prototype.U = function (R) {
    if (this.t !== void 0) {
        var $ = R.e
            , W = R.x;
        $ !== void 0 && ($.x = W,
            R.e = void 0),
            W !== void 0 && (W.e = $,
                R.x = void 0),
            R === this.t && (this.t = W)
    }
}
    ;
d$1.prototype.subscribe = function (R) {
    var $ = this;
    return O(function () {
        var W = $.value
            , U = 32 & this.f;
        this.f &= -33;
        try {
            R(W)
        } finally {
            this.f |= U
        }
    })
}
    ;
d$1.prototype.valueOf = function () {
    return this.value
}
    ;
d$1.prototype.toString = function () {
    return this.value + ""
}
    ;
d$1.prototype.toJSON = function () {
    return this.value
}
    ;
d$1.prototype.peek = function () {
    return this.v
}
    ;
Object.defineProperty(d$1.prototype, "value", {
    get: function () {
        var R = c$1(this);
        return R !== void 0 && (R.i = this.i),
            this.v
    },
    set: function (R) {
        if (o$1 instanceof _$1 && function () {
            throw new Error("Computed cannot have side-effects")
        }(),
            R !== this.v) {
            e$1 > 100 && i$1(),
                this.v = R,
                this.i++,
                u$2++,
                v++;
            try {
                for (var $ = this.t; $ !== void 0; $ = $.x)
                    $.t.N()
            } finally {
                r()
            }
        }
    }
});
function a$1(R) {
    return new d$1(R)
}
function l$2(R) {
    for (var $ = R.s; $ !== void 0; $ = $.n)
        if ($.S.i !== $.i || !$.S.h() || $.S.i !== $.i)
            return !0;
    return !1
}
function y(R) {
    for (var $ = R.s; $ !== void 0; $ = $.n) {
        var W = $.S.n;
        if (W !== void 0 && ($.r = W),
            $.S.n = $,
            $.i = -1,
            $.n === void 0) {
            R.s = $;
            break
        }
    }
}
function w(R) {
    for (var $ = R.s, W = void 0; $ !== void 0;) {
        var U = $.p;
        $.i === -1 ? ($.S.U($),
            U !== void 0 && (U.n = $.n),
            $.n !== void 0 && ($.n.p = U)) : W = $,
            $.S.n = $.r,
            $.r !== void 0 && ($.r = void 0),
            $ = U
    }
    R.s = W
}
function _$1(R) {
    d$1.call(this, void 0),
        this.x = R,
        this.s = void 0,
        this.g = u$2 - 1,
        this.f = 4
}
(_$1.prototype = new d$1).h = function () {
    if (this.f &= -3,
        1 & this.f)
        return !1;
    if ((36 & this.f) == 32 || (this.f &= -5,
        this.g === u$2))
        return !0;
    if (this.g = u$2,
        this.f |= 1,
        this.i > 0 && !l$2(this))
        return this.f &= -2,
            !0;
    var R = o$1;
    try {
        y(this),
            o$1 = this;
        var $ = this.x();
        (16 & this.f || this.v !== $ || this.i === 0) && (this.v = $,
            this.f &= -17,
            this.i++)
    } catch (W) {
        this.v = W,
            this.f |= 16,
            this.i++
    }
    return o$1 = R,
        w(this),
        this.f &= -2,
        !0
}
    ;
_$1.prototype.S = function (R) {
    if (this.t === void 0) {
        this.f |= 36;
        for (var $ = this.s; $ !== void 0; $ = $.n)
            $.S.S($)
    }
    d$1.prototype.S.call(this, R)
}
    ;
_$1.prototype.U = function (R) {
    if (this.t !== void 0 && (d$1.prototype.U.call(this, R),
        this.t === void 0)) {
        this.f &= -33;
        for (var $ = this.s; $ !== void 0; $ = $.n)
            $.S.U($)
    }
}
    ;
_$1.prototype.N = function () {
    if (!(2 & this.f)) {
        this.f |= 6;
        for (var R = this.t; R !== void 0; R = R.x)
            R.t.N()
    }
}
    ;
_$1.prototype.peek = function () {
    if (this.h() || i$1(),
        16 & this.f)
        throw this.v;
    return this.v
}
    ;
Object.defineProperty(_$1.prototype, "value", {
    get: function () {
        1 & this.f && i$1();
        var R = c$1(this);
        if (this.h(),
            R !== void 0 && (R.i = this.i),
            16 & this.f)
            throw this.v;
        return this.v
    }
});
function p$2(R) {
    return new _$1(R)
}
function g(R) {
    var $ = R.u;
    if (R.u = void 0,
        typeof $ == "function") {
        v++;
        var W = o$1;
        o$1 = void 0;
        try {
            $()
        } catch (U) {
            throw R.f &= -2,
            R.f |= 8,
            b(R),
            U
        } finally {
            o$1 = W,
                r()
        }
    }
}
function b(R) {
    for (var $ = R.s; $ !== void 0; $ = $.n)
        $.S.U($);
    R.x = void 0,
        R.s = void 0,
        g(R)
}
function x(R) {
    if (o$1 !== this)
        throw new Error("Out-of-order effect");
    w(this),
        o$1 = R,
        this.f &= -2,
        8 & this.f && b(this),
        r()
}
function E(R) {
    this.x = R,
        this.u = void 0,
        this.s = void 0,
        this.o = void 0,
        this.f = 32
}
E.prototype.c = function () {
    var R = this.S();
    try {
        if (8 & this.f || this.x === void 0)
            return;
        var $ = this.x();
        typeof $ == "function" && (this.u = $)
    } finally {
        R()
    }
}
    ;
E.prototype.S = function () {
    1 & this.f && i$1(),
        this.f |= 1,
        this.f &= -9,
        g(this),
        y(this),
        v++;
    var R = o$1;
    return o$1 = this,
        x.bind(this, R)
}
    ;
E.prototype.N = function () {
    2 & this.f || (this.f |= 2,
        this.o = f$1,
        f$1 = this)
}
    ;
E.prototype.d = function () {
    this.f |= 8,
        1 & this.f || b(this)
}
    ;
function O(R) {
    var $ = new E(R);
    try {
        $.c()
    } catch (W) {
        throw $.d(),
        W
    }
    return $.d.bind($)
}
var s$1;
function l$1(R, $) {
    l$4[R] = $.bind(null, l$4[R] || function () { }
    )
}
function d(R) {
    s$1 && s$1(),
        s$1 = R && R.S()
}
function p$1(R) {
    var $ = this
        , W = R.data
        , U = useSignal(W);
    U.value = W;
    var V = F(function () {
        for (var K = $.__v; K = K.__;)
            if (K.__c) {
                K.__c.__$f |= 4;
                break
            }
        return $.__$u.c = function () {
            var Y;
            !t$3(V.peek()) && ((Y = $.base) == null ? void 0 : Y.nodeType) === 3 ? $.base.data = V.peek() : ($.__$f |= 1,
                $.setState({}))
        }
            ,
            p$2(function () {
                var Y = U.value.value;
                return Y === 0 ? 0 : Y === !0 ? "" : Y || ""
            })
    }, []);
    return V.value
}
p$1.displayName = "_st";
Object.defineProperties(d$1.prototype, {
    constructor: {
        configurable: !0,
        value: void 0
    },
    type: {
        configurable: !0,
        value: p$1
    },
    props: {
        configurable: !0,
        get: function () {
            return {
                data: this
            }
        }
    },
    __b: {
        configurable: !0,
        value: 1
    }
});
l$1("__b", function (R, $) {
    if (typeof $.type == "string") {
        var W, U = $.props;
        for (var V in U)
            if (V !== "children") {
                var K = U[V];
                K instanceof d$1 && (W || ($.__np = W = {}),
                    W[V] = K,
                    U[V] = K.peek())
            }
    }
    R($)
});
l$1("__r", function (R, $) {
    d();
    var W, U = $.__c;
    U && (U.__$f &= -2,
        (W = U.__$u) === void 0 && (U.__$u = W = function (V) {
            var K;
            return O(function () {
                K = this
            }),
                K.c = function () {
                    U.__$f |= 1,
                        U.setState({})
                }
                ,
                K
        }())),
        d(W),
        R($)
});
l$1("__e", function (R, $, W, U) {
    d(),
        R($, W, U)
});
l$1("diffed", function (R, $) {
    d();
    var W;
    if (typeof $.type == "string" && (W = $.__e)) {
        var U = $.__np
            , V = $.props;
        if (U) {
            var K = W.U;
            if (K)
                for (var Y in K) {
                    var Z = K[Y];
                    Z !== void 0 && !(Y in U) && (Z.d(),
                        K[Y] = void 0)
                }
            else
                W.U = K = {};
            for (var J in U) {
                var X = K[J]
                    , re = U[J];
                X === void 0 ? (X = _(W, J, re, V),
                    K[J] = X) : X.o(re, V)
            }
        }
    }
    R($)
});
function _(R, $, W, U) {
    var V = $ in R && R.ownerSVGElement === void 0
        , K = a$1(W);
    return {
        o: function (Y, Z) {
            K.value = Y,
                U = Z
        },
        d: O(function () {
            var Y = K.value.value;
            U[$] !== Y && (U[$] = Y,
                V ? R[$] = Y : Y ? R.setAttribute($, Y) : R.removeAttribute($))
        })
    }
}
l$1("unmount", function (R, $) {
    if (typeof $.type == "string") {
        var W = $.__e;
        if (W) {
            var U = W.U;
            if (U) {
                W.U = void 0;
                for (var V in U) {
                    var K = U[V];
                    K && K.d()
                }
            }
        }
    } else {
        var Y = $.__c;
        if (Y) {
            var Z = Y.__$u;
            Z && (Y.__$u = void 0,
                Z.d())
        }
    }
    R($)
});
l$1("__h", function (R, $, W, U) {
    (U < 3 || U === 9) && ($.__$f |= 2),
        R($, W, U)
});
b$2.prototype.shouldComponentUpdate = function (R, $) {
    var W = this.__$u;
    if (!(W && W.s !== void 0 || 4 & this.__$f) || 3 & this.__$f)
        return !0;
    for (var U in $)
        return !0;
    for (var V in R)
        if (V !== "__source" && R[V] !== this.props[V])
            return !0;
    for (var K in this.props)
        if (!(K in R))
            return !0;
    return !1
}
    ;
function useSignal(R) {
    return F(function () {
        return a$1(R)
    }, [])
}
var commonjsGlobal = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function getDefaultExportFromCjs(R) {
    return R && R.__esModule && Object.prototype.hasOwnProperty.call(R, "default") ? R.default : R
}
function getAugmentedNamespace(R) {
    if (R.__esModule)
        return R;
    var $ = R.default;
    if (typeof $ == "function") {
        var W = function U() {
            return this instanceof U ? Reflect.construct($, arguments, this.constructor) : $.apply(this, arguments)
        };
        W.prototype = $.prototype
    } else
        W = {};
    return Object.defineProperty(W, "__esModule", {
        value: !0
    }),
        Object.keys(R).forEach(function (U) {
            var V = Object.getOwnPropertyDescriptor(R, U);
            Object.defineProperty(W, U, V.get ? V : {
                enumerable: !0,
                get: function () {
                    return R[U]
                }
            })
        }),
        W
}
var naclUtil = {
    exports: {}
};
(function (R) {
    (function ($, W) {
        R.exports ? R.exports = W() : ($.nacl || ($.nacl = {}),
            $.nacl.util = W())
    }
    )(commonjsGlobal, function () {
        var $ = {};
        function W(U) {
            if (!/^(?:[A-Za-z0-9+\/]{2}[A-Za-z0-9+\/]{2})*(?:[A-Za-z0-9+\/]{2}==|[A-Za-z0-9+\/]{3}=)?$/.test(U))
                throw new TypeError("invalid encoding")
        }
        return $.decodeUTF8 = function (U) {
            if (typeof U != "string")
                throw new TypeError("expected string");
            var V, K = unescape(encodeURIComponent(U)), Y = new Uint8Array(K.length);
            for (V = 0; V < K.length; V++)
                Y[V] = K.charCodeAt(V);
            return Y
        }
            ,
            $.encodeUTF8 = function (U) {
                var V, K = [];
                for (V = 0; V < U.length; V++)
                    K.push(String.fromCharCode(U[V]));
                return decodeURIComponent(escape(K.join("")))
            }
            ,
            typeof atob > "u" ? typeof Buffer.from < "u" ? ($.encodeBase64 = function (U) {
                return Buffer.from(U).toString("base64")
            }
                ,
                $.decodeBase64 = function (U) {
                    return W(U),
                        new Uint8Array(Array.prototype.slice.call(Buffer.from(U, "base64"), 0))
                }
            ) : ($.encodeBase64 = function (U) {
                return new Buffer(U).toString("base64")
            }
                ,
                $.decodeBase64 = function (U) {
                    return W(U),
                        new Uint8Array(Array.prototype.slice.call(new Buffer(U, "base64"), 0))
                }
            ) : ($.encodeBase64 = function (U) {
                var V, K = [], Y = U.length;
                for (V = 0; V < Y; V++)
                    K.push(String.fromCharCode(U[V]));
                return btoa(K.join(""))
            }
                ,
                $.decodeBase64 = function (U) {
                    W(U);
                    var V, K = atob(U), Y = new Uint8Array(K.length);
                    for (V = 0; V < K.length; V++)
                        Y[V] = K.charCodeAt(V);
                    return Y
                }
            ),
            $
    })
}
)(naclUtil);
var naclUtilExports = naclUtil.exports;
const nacl = getDefaultExportFromCjs(naclUtilExports);
function commonjsRequire(R) {
    throw new Error('Could not dynamically require "' + R + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')
}
var naclFast = {
    exports: {}
};
const __viteBrowserExternal = {}
    , __viteBrowserExternal$1 = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: __viteBrowserExternal
    }, Symbol.toStringTag, {
        value: "Module"
    }))
    , require$$0 = getAugmentedNamespace(__viteBrowserExternal$1);
(function (R) {
    (function ($) {
        var W = function (Q) {
            var te, ee = new Float64Array(16);
            if (Q)
                for (te = 0; te < Q.length; te++)
                    ee[te] = Q[te];
            return ee
        }
            , U = function () {
                throw new Error("no PRNG")
            }
            , V = new Uint8Array(16)
            , K = new Uint8Array(32);
        K[0] = 9;
        var Y = W()
            , Z = W([1])
            , J = W([56129, 1])
            , X = W([30883, 4953, 19914, 30187, 55467, 16705, 2637, 112, 59544, 30585, 16505, 36039, 65139, 11119, 27886, 20995])
            , re = W([61785, 9906, 39828, 60374, 45398, 33411, 5274, 224, 53552, 61171, 33010, 6542, 64743, 22239, 55772, 9222])
            , oe = W([54554, 36645, 11616, 51542, 42930, 38181, 51040, 26924, 56412, 64982, 57905, 49316, 21502, 52590, 14035, 8553])
            , ie = W([26200, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214])
            , se = W([41136, 18958, 6951, 50414, 58488, 44335, 6150, 12099, 55207, 15867, 153, 11085, 57099, 20417, 9344, 11139]);
        function le(Q, te, ee, G) {
            Q[te] = ee >> 24 & 255,
                Q[te + 1] = ee >> 16 & 255,
                Q[te + 2] = ee >> 8 & 255,
                Q[te + 3] = ee & 255,
                Q[te + 4] = G >> 24 & 255,
                Q[te + 5] = G >> 16 & 255,
                Q[te + 6] = G >> 8 & 255,
                Q[te + 7] = G & 255
        }
        function ue(Q, te, ee, G, ne) {
            var fe, ge = 0;
            for (fe = 0; fe < ne; fe++)
                ge |= Q[te + fe] ^ ee[G + fe];
            return (1 & ge - 1 >>> 8) - 1
        }
        function pe(Q, te, ee, G) {
            return ue(Q, te, ee, G, 16)
        }
        function Ee(Q, te, ee, G) {
            return ue(Q, te, ee, G, 32)
        }
        function Ce(Q, te, ee, G) {
            for (var ne = G[0] & 255 | (G[1] & 255) << 8 | (G[2] & 255) << 16 | (G[3] & 255) << 24, fe = ee[0] & 255 | (ee[1] & 255) << 8 | (ee[2] & 255) << 16 | (ee[3] & 255) << 24, ge = ee[4] & 255 | (ee[5] & 255) << 8 | (ee[6] & 255) << 16 | (ee[7] & 255) << 24, Me = ee[8] & 255 | (ee[9] & 255) << 8 | (ee[10] & 255) << 16 | (ee[11] & 255) << 24, Fe = ee[12] & 255 | (ee[13] & 255) << 8 | (ee[14] & 255) << 16 | (ee[15] & 255) << 24, Qe = G[4] & 255 | (G[5] & 255) << 8 | (G[6] & 255) << 16 | (G[7] & 255) << 24, Ke = te[0] & 255 | (te[1] & 255) << 8 | (te[2] & 255) << 16 | (te[3] & 255) << 24, $t = te[4] & 255 | (te[5] & 255) << 8 | (te[6] & 255) << 16 | (te[7] & 255) << 24, Ge = te[8] & 255 | (te[9] & 255) << 8 | (te[10] & 255) << 16 | (te[11] & 255) << 24, it = te[12] & 255 | (te[13] & 255) << 8 | (te[14] & 255) << 16 | (te[15] & 255) << 24, lt = G[8] & 255 | (G[9] & 255) << 8 | (G[10] & 255) << 16 | (G[11] & 255) << 24, pt = ee[16] & 255 | (ee[17] & 255) << 8 | (ee[18] & 255) << 16 | (ee[19] & 255) << 24, ht = ee[20] & 255 | (ee[21] & 255) << 8 | (ee[22] & 255) << 16 | (ee[23] & 255) << 24, ct = ee[24] & 255 | (ee[25] & 255) << 8 | (ee[26] & 255) << 16 | (ee[27] & 255) << 24, ut = ee[28] & 255 | (ee[29] & 255) << 8 | (ee[30] & 255) << 16 | (ee[31] & 255) << 24, dt = G[12] & 255 | (G[13] & 255) << 8 | (G[14] & 255) << 16 | (G[15] & 255) << 24, ze = ne, Je = fe, qe = ge, Ye = Me, Ze = Fe, Ve = Qe, me = Ke, ve = $t, Pe = Ge, Ae = it, Le = lt, De = pt, nt = ht, mt = ct, yt = ut, vt = dt, ae, wt = 0; wt < 20; wt += 2)
                ae = ze + nt | 0,
                    Ze ^= ae << 7 | ae >>> 25,
                    ae = Ze + ze | 0,
                    Pe ^= ae << 9 | ae >>> 23,
                    ae = Pe + Ze | 0,
                    nt ^= ae << 13 | ae >>> 19,
                    ae = nt + Pe | 0,
                    ze ^= ae << 18 | ae >>> 14,
                    ae = Ve + Je | 0,
                    Ae ^= ae << 7 | ae >>> 25,
                    ae = Ae + Ve | 0,
                    mt ^= ae << 9 | ae >>> 23,
                    ae = mt + Ae | 0,
                    Je ^= ae << 13 | ae >>> 19,
                    ae = Je + mt | 0,
                    Ve ^= ae << 18 | ae >>> 14,
                    ae = Le + me | 0,
                    yt ^= ae << 7 | ae >>> 25,
                    ae = yt + Le | 0,
                    qe ^= ae << 9 | ae >>> 23,
                    ae = qe + yt | 0,
                    me ^= ae << 13 | ae >>> 19,
                    ae = me + qe | 0,
                    Le ^= ae << 18 | ae >>> 14,
                    ae = vt + De | 0,
                    Ye ^= ae << 7 | ae >>> 25,
                    ae = Ye + vt | 0,
                    ve ^= ae << 9 | ae >>> 23,
                    ae = ve + Ye | 0,
                    De ^= ae << 13 | ae >>> 19,
                    ae = De + ve | 0,
                    vt ^= ae << 18 | ae >>> 14,
                    ae = ze + Ye | 0,
                    Je ^= ae << 7 | ae >>> 25,
                    ae = Je + ze | 0,
                    qe ^= ae << 9 | ae >>> 23,
                    ae = qe + Je | 0,
                    Ye ^= ae << 13 | ae >>> 19,
                    ae = Ye + qe | 0,
                    ze ^= ae << 18 | ae >>> 14,
                    ae = Ve + Ze | 0,
                    me ^= ae << 7 | ae >>> 25,
                    ae = me + Ve | 0,
                    ve ^= ae << 9 | ae >>> 23,
                    ae = ve + me | 0,
                    Ze ^= ae << 13 | ae >>> 19,
                    ae = Ze + ve | 0,
                    Ve ^= ae << 18 | ae >>> 14,
                    ae = Le + Ae | 0,
                    De ^= ae << 7 | ae >>> 25,
                    ae = De + Le | 0,
                    Pe ^= ae << 9 | ae >>> 23,
                    ae = Pe + De | 0,
                    Ae ^= ae << 13 | ae >>> 19,
                    ae = Ae + Pe | 0,
                    Le ^= ae << 18 | ae >>> 14,
                    ae = vt + yt | 0,
                    nt ^= ae << 7 | ae >>> 25,
                    ae = nt + vt | 0,
                    mt ^= ae << 9 | ae >>> 23,
                    ae = mt + nt | 0,
                    yt ^= ae << 13 | ae >>> 19,
                    ae = yt + mt | 0,
                    vt ^= ae << 18 | ae >>> 14;
            ze = ze + ne | 0,
                Je = Je + fe | 0,
                qe = qe + ge | 0,
                Ye = Ye + Me | 0,
                Ze = Ze + Fe | 0,
                Ve = Ve + Qe | 0,
                me = me + Ke | 0,
                ve = ve + $t | 0,
                Pe = Pe + Ge | 0,
                Ae = Ae + it | 0,
                Le = Le + lt | 0,
                De = De + pt | 0,
                nt = nt + ht | 0,
                mt = mt + ct | 0,
                yt = yt + ut | 0,
                vt = vt + dt | 0,
                Q[0] = ze >>> 0 & 255,
                Q[1] = ze >>> 8 & 255,
                Q[2] = ze >>> 16 & 255,
                Q[3] = ze >>> 24 & 255,
                Q[4] = Je >>> 0 & 255,
                Q[5] = Je >>> 8 & 255,
                Q[6] = Je >>> 16 & 255,
                Q[7] = Je >>> 24 & 255,
                Q[8] = qe >>> 0 & 255,
                Q[9] = qe >>> 8 & 255,
                Q[10] = qe >>> 16 & 255,
                Q[11] = qe >>> 24 & 255,
                Q[12] = Ye >>> 0 & 255,
                Q[13] = Ye >>> 8 & 255,
                Q[14] = Ye >>> 16 & 255,
                Q[15] = Ye >>> 24 & 255,
                Q[16] = Ze >>> 0 & 255,
                Q[17] = Ze >>> 8 & 255,
                Q[18] = Ze >>> 16 & 255,
                Q[19] = Ze >>> 24 & 255,
                Q[20] = Ve >>> 0 & 255,
                Q[21] = Ve >>> 8 & 255,
                Q[22] = Ve >>> 16 & 255,
                Q[23] = Ve >>> 24 & 255,
                Q[24] = me >>> 0 & 255,
                Q[25] = me >>> 8 & 255,
                Q[26] = me >>> 16 & 255,
                Q[27] = me >>> 24 & 255,
                Q[28] = ve >>> 0 & 255,
                Q[29] = ve >>> 8 & 255,
                Q[30] = ve >>> 16 & 255,
                Q[31] = ve >>> 24 & 255,
                Q[32] = Pe >>> 0 & 255,
                Q[33] = Pe >>> 8 & 255,
                Q[34] = Pe >>> 16 & 255,
                Q[35] = Pe >>> 24 & 255,
                Q[36] = Ae >>> 0 & 255,
                Q[37] = Ae >>> 8 & 255,
                Q[38] = Ae >>> 16 & 255,
                Q[39] = Ae >>> 24 & 255,
                Q[40] = Le >>> 0 & 255,
                Q[41] = Le >>> 8 & 255,
                Q[42] = Le >>> 16 & 255,
                Q[43] = Le >>> 24 & 255,
                Q[44] = De >>> 0 & 255,
                Q[45] = De >>> 8 & 255,
                Q[46] = De >>> 16 & 255,
                Q[47] = De >>> 24 & 255,
                Q[48] = nt >>> 0 & 255,
                Q[49] = nt >>> 8 & 255,
                Q[50] = nt >>> 16 & 255,
                Q[51] = nt >>> 24 & 255,
                Q[52] = mt >>> 0 & 255,
                Q[53] = mt >>> 8 & 255,
                Q[54] = mt >>> 16 & 255,
                Q[55] = mt >>> 24 & 255,
                Q[56] = yt >>> 0 & 255,
                Q[57] = yt >>> 8 & 255,
                Q[58] = yt >>> 16 & 255,
                Q[59] = yt >>> 24 & 255,
                Q[60] = vt >>> 0 & 255,
                Q[61] = vt >>> 8 & 255,
                Q[62] = vt >>> 16 & 255,
                Q[63] = vt >>> 24 & 255
        }
        function ke(Q, te, ee, G) {
            for (var ne = G[0] & 255 | (G[1] & 255) << 8 | (G[2] & 255) << 16 | (G[3] & 255) << 24, fe = ee[0] & 255 | (ee[1] & 255) << 8 | (ee[2] & 255) << 16 | (ee[3] & 255) << 24, ge = ee[4] & 255 | (ee[5] & 255) << 8 | (ee[6] & 255) << 16 | (ee[7] & 255) << 24, Me = ee[8] & 255 | (ee[9] & 255) << 8 | (ee[10] & 255) << 16 | (ee[11] & 255) << 24, Fe = ee[12] & 255 | (ee[13] & 255) << 8 | (ee[14] & 255) << 16 | (ee[15] & 255) << 24, Qe = G[4] & 255 | (G[5] & 255) << 8 | (G[6] & 255) << 16 | (G[7] & 255) << 24, Ke = te[0] & 255 | (te[1] & 255) << 8 | (te[2] & 255) << 16 | (te[3] & 255) << 24, $t = te[4] & 255 | (te[5] & 255) << 8 | (te[6] & 255) << 16 | (te[7] & 255) << 24, Ge = te[8] & 255 | (te[9] & 255) << 8 | (te[10] & 255) << 16 | (te[11] & 255) << 24, it = te[12] & 255 | (te[13] & 255) << 8 | (te[14] & 255) << 16 | (te[15] & 255) << 24, lt = G[8] & 255 | (G[9] & 255) << 8 | (G[10] & 255) << 16 | (G[11] & 255) << 24, pt = ee[16] & 255 | (ee[17] & 255) << 8 | (ee[18] & 255) << 16 | (ee[19] & 255) << 24, ht = ee[20] & 255 | (ee[21] & 255) << 8 | (ee[22] & 255) << 16 | (ee[23] & 255) << 24, ct = ee[24] & 255 | (ee[25] & 255) << 8 | (ee[26] & 255) << 16 | (ee[27] & 255) << 24, ut = ee[28] & 255 | (ee[29] & 255) << 8 | (ee[30] & 255) << 16 | (ee[31] & 255) << 24, dt = G[12] & 255 | (G[13] & 255) << 8 | (G[14] & 255) << 16 | (G[15] & 255) << 24, ze = ne, Je = fe, qe = ge, Ye = Me, Ze = Fe, Ve = Qe, me = Ke, ve = $t, Pe = Ge, Ae = it, Le = lt, De = pt, nt = ht, mt = ct, yt = ut, vt = dt, ae, wt = 0; wt < 20; wt += 2)
                ae = ze + nt | 0,
                    Ze ^= ae << 7 | ae >>> 25,
                    ae = Ze + ze | 0,
                    Pe ^= ae << 9 | ae >>> 23,
                    ae = Pe + Ze | 0,
                    nt ^= ae << 13 | ae >>> 19,
                    ae = nt + Pe | 0,
                    ze ^= ae << 18 | ae >>> 14,
                    ae = Ve + Je | 0,
                    Ae ^= ae << 7 | ae >>> 25,
                    ae = Ae + Ve | 0,
                    mt ^= ae << 9 | ae >>> 23,
                    ae = mt + Ae | 0,
                    Je ^= ae << 13 | ae >>> 19,
                    ae = Je + mt | 0,
                    Ve ^= ae << 18 | ae >>> 14,
                    ae = Le + me | 0,
                    yt ^= ae << 7 | ae >>> 25,
                    ae = yt + Le | 0,
                    qe ^= ae << 9 | ae >>> 23,
                    ae = qe + yt | 0,
                    me ^= ae << 13 | ae >>> 19,
                    ae = me + qe | 0,
                    Le ^= ae << 18 | ae >>> 14,
                    ae = vt + De | 0,
                    Ye ^= ae << 7 | ae >>> 25,
                    ae = Ye + vt | 0,
                    ve ^= ae << 9 | ae >>> 23,
                    ae = ve + Ye | 0,
                    De ^= ae << 13 | ae >>> 19,
                    ae = De + ve | 0,
                    vt ^= ae << 18 | ae >>> 14,
                    ae = ze + Ye | 0,
                    Je ^= ae << 7 | ae >>> 25,
                    ae = Je + ze | 0,
                    qe ^= ae << 9 | ae >>> 23,
                    ae = qe + Je | 0,
                    Ye ^= ae << 13 | ae >>> 19,
                    ae = Ye + qe | 0,
                    ze ^= ae << 18 | ae >>> 14,
                    ae = Ve + Ze | 0,
                    me ^= ae << 7 | ae >>> 25,
                    ae = me + Ve | 0,
                    ve ^= ae << 9 | ae >>> 23,
                    ae = ve + me | 0,
                    Ze ^= ae << 13 | ae >>> 19,
                    ae = Ze + ve | 0,
                    Ve ^= ae << 18 | ae >>> 14,
                    ae = Le + Ae | 0,
                    De ^= ae << 7 | ae >>> 25,
                    ae = De + Le | 0,
                    Pe ^= ae << 9 | ae >>> 23,
                    ae = Pe + De | 0,
                    Ae ^= ae << 13 | ae >>> 19,
                    ae = Ae + Pe | 0,
                    Le ^= ae << 18 | ae >>> 14,
                    ae = vt + yt | 0,
                    nt ^= ae << 7 | ae >>> 25,
                    ae = nt + vt | 0,
                    mt ^= ae << 9 | ae >>> 23,
                    ae = mt + nt | 0,
                    yt ^= ae << 13 | ae >>> 19,
                    ae = yt + mt | 0,
                    vt ^= ae << 18 | ae >>> 14;
            Q[0] = ze >>> 0 & 255,
                Q[1] = ze >>> 8 & 255,
                Q[2] = ze >>> 16 & 255,
                Q[3] = ze >>> 24 & 255,
                Q[4] = Ve >>> 0 & 255,
                Q[5] = Ve >>> 8 & 255,
                Q[6] = Ve >>> 16 & 255,
                Q[7] = Ve >>> 24 & 255,
                Q[8] = Le >>> 0 & 255,
                Q[9] = Le >>> 8 & 255,
                Q[10] = Le >>> 16 & 255,
                Q[11] = Le >>> 24 & 255,
                Q[12] = vt >>> 0 & 255,
                Q[13] = vt >>> 8 & 255,
                Q[14] = vt >>> 16 & 255,
                Q[15] = vt >>> 24 & 255,
                Q[16] = me >>> 0 & 255,
                Q[17] = me >>> 8 & 255,
                Q[18] = me >>> 16 & 255,
                Q[19] = me >>> 24 & 255,
                Q[20] = ve >>> 0 & 255,
                Q[21] = ve >>> 8 & 255,
                Q[22] = ve >>> 16 & 255,
                Q[23] = ve >>> 24 & 255,
                Q[24] = Pe >>> 0 & 255,
                Q[25] = Pe >>> 8 & 255,
                Q[26] = Pe >>> 16 & 255,
                Q[27] = Pe >>> 24 & 255,
                Q[28] = Ae >>> 0 & 255,
                Q[29] = Ae >>> 8 & 255,
                Q[30] = Ae >>> 16 & 255,
                Q[31] = Ae >>> 24 & 255
        }
        function Ue(Q, te, ee, G) {
            Ce(Q, te, ee, G)
        }
        function be(Q, te, ee, G) {
            ke(Q, te, ee, G)
        }
        var Be = new Uint8Array([101, 120, 112, 97, 110, 100, 32, 51, 50, 45, 98, 121, 116, 101, 32, 107]);
        function xe(Q, te, ee, G, ne, fe, ge) {
            var Me = new Uint8Array(16), Fe = new Uint8Array(64), Qe, Ke;
            for (Ke = 0; Ke < 16; Ke++)
                Me[Ke] = 0;
            for (Ke = 0; Ke < 8; Ke++)
                Me[Ke] = fe[Ke];
            for (; ne >= 64;) {
                for (Ue(Fe, Me, ge, Be),
                    Ke = 0; Ke < 64; Ke++)
                    Q[te + Ke] = ee[G + Ke] ^ Fe[Ke];
                for (Qe = 1,
                    Ke = 8; Ke < 16; Ke++)
                    Qe = Qe + (Me[Ke] & 255) | 0,
                        Me[Ke] = Qe & 255,
                        Qe >>>= 8;
                ne -= 64,
                    te += 64,
                    G += 64
            }
            if (ne > 0)
                for (Ue(Fe, Me, ge, Be),
                    Ke = 0; Ke < ne; Ke++)
                    Q[te + Ke] = ee[G + Ke] ^ Fe[Ke];
            return 0
        }
        function ye(Q, te, ee, G, ne) {
            var fe = new Uint8Array(16), ge = new Uint8Array(64), Me, Fe;
            for (Fe = 0; Fe < 16; Fe++)
                fe[Fe] = 0;
            for (Fe = 0; Fe < 8; Fe++)
                fe[Fe] = G[Fe];
            for (; ee >= 64;) {
                for (Ue(ge, fe, ne, Be),
                    Fe = 0; Fe < 64; Fe++)
                    Q[te + Fe] = ge[Fe];
                for (Me = 1,
                    Fe = 8; Fe < 16; Fe++)
                    Me = Me + (fe[Fe] & 255) | 0,
                        fe[Fe] = Me & 255,
                        Me >>>= 8;
                ee -= 64,
                    te += 64
            }
            if (ee > 0)
                for (Ue(ge, fe, ne, Be),
                    Fe = 0; Fe < ee; Fe++)
                    Q[te + Fe] = ge[Fe];
            return 0
        }
        function de(Q, te, ee, G, ne) {
            var fe = new Uint8Array(32);
            be(fe, G, ne, Be);
            for (var ge = new Uint8Array(8), Me = 0; Me < 8; Me++)
                ge[Me] = G[Me + 16];
            return ye(Q, te, ee, ge, fe)
        }
        function Se(Q, te, ee, G, ne, fe, ge) {
            var Me = new Uint8Array(32);
            be(Me, fe, ge, Be);
            for (var Fe = new Uint8Array(8), Qe = 0; Qe < 8; Qe++)
                Fe[Qe] = fe[Qe + 16];
            return xe(Q, te, ee, G, ne, Fe, Me)
        }
        var he = function (Q) {
            this.buffer = new Uint8Array(16),
                this.r = new Uint16Array(10),
                this.h = new Uint16Array(10),
                this.pad = new Uint16Array(8),
                this.leftover = 0,
                this.fin = 0;
            var te, ee, G, ne, fe, ge, Me, Fe;
            te = Q[0] & 255 | (Q[1] & 255) << 8,
                this.r[0] = te & 8191,
                ee = Q[2] & 255 | (Q[3] & 255) << 8,
                this.r[1] = (te >>> 13 | ee << 3) & 8191,
                G = Q[4] & 255 | (Q[5] & 255) << 8,
                this.r[2] = (ee >>> 10 | G << 6) & 7939,
                ne = Q[6] & 255 | (Q[7] & 255) << 8,
                this.r[3] = (G >>> 7 | ne << 9) & 8191,
                fe = Q[8] & 255 | (Q[9] & 255) << 8,
                this.r[4] = (ne >>> 4 | fe << 12) & 255,
                this.r[5] = fe >>> 1 & 8190,
                ge = Q[10] & 255 | (Q[11] & 255) << 8,
                this.r[6] = (fe >>> 14 | ge << 2) & 8191,
                Me = Q[12] & 255 | (Q[13] & 255) << 8,
                this.r[7] = (ge >>> 11 | Me << 5) & 8065,
                Fe = Q[14] & 255 | (Q[15] & 255) << 8,
                this.r[8] = (Me >>> 8 | Fe << 8) & 8191,
                this.r[9] = Fe >>> 5 & 127,
                this.pad[0] = Q[16] & 255 | (Q[17] & 255) << 8,
                this.pad[1] = Q[18] & 255 | (Q[19] & 255) << 8,
                this.pad[2] = Q[20] & 255 | (Q[21] & 255) << 8,
                this.pad[3] = Q[22] & 255 | (Q[23] & 255) << 8,
                this.pad[4] = Q[24] & 255 | (Q[25] & 255) << 8,
                this.pad[5] = Q[26] & 255 | (Q[27] & 255) << 8,
                this.pad[6] = Q[28] & 255 | (Q[29] & 255) << 8,
                this.pad[7] = Q[30] & 255 | (Q[31] & 255) << 8
        };
        he.prototype.blocks = function (Q, te, ee) {
            for (var G = this.fin ? 0 : 2048, ne, fe, ge, Me, Fe, Qe, Ke, $t, Ge, it, lt, pt, ht, ct, ut, dt, ze, Je, qe, Ye = this.h[0], Ze = this.h[1], Ve = this.h[2], me = this.h[3], ve = this.h[4], Pe = this.h[5], Ae = this.h[6], Le = this.h[7], De = this.h[8], nt = this.h[9], mt = this.r[0], yt = this.r[1], vt = this.r[2], ae = this.r[3], wt = this.r[4], Tt = this.r[5], kt = this.r[6], _t = this.r[7], St = this.r[8], Et = this.r[9]; ee >= 16;)
                ne = Q[te + 0] & 255 | (Q[te + 1] & 255) << 8,
                    Ye += ne & 8191,
                    fe = Q[te + 2] & 255 | (Q[te + 3] & 255) << 8,
                    Ze += (ne >>> 13 | fe << 3) & 8191,
                    ge = Q[te + 4] & 255 | (Q[te + 5] & 255) << 8,
                    Ve += (fe >>> 10 | ge << 6) & 8191,
                    Me = Q[te + 6] & 255 | (Q[te + 7] & 255) << 8,
                    me += (ge >>> 7 | Me << 9) & 8191,
                    Fe = Q[te + 8] & 255 | (Q[te + 9] & 255) << 8,
                    ve += (Me >>> 4 | Fe << 12) & 8191,
                    Pe += Fe >>> 1 & 8191,
                    Qe = Q[te + 10] & 255 | (Q[te + 11] & 255) << 8,
                    Ae += (Fe >>> 14 | Qe << 2) & 8191,
                    Ke = Q[te + 12] & 255 | (Q[te + 13] & 255) << 8,
                    Le += (Qe >>> 11 | Ke << 5) & 8191,
                    $t = Q[te + 14] & 255 | (Q[te + 15] & 255) << 8,
                    De += (Ke >>> 8 | $t << 8) & 8191,
                    nt += $t >>> 5 | G,
                    Ge = 0,
                    it = Ge,
                    it += Ye * mt,
                    it += Ze * (5 * Et),
                    it += Ve * (5 * St),
                    it += me * (5 * _t),
                    it += ve * (5 * kt),
                    Ge = it >>> 13,
                    it &= 8191,
                    it += Pe * (5 * Tt),
                    it += Ae * (5 * wt),
                    it += Le * (5 * ae),
                    it += De * (5 * vt),
                    it += nt * (5 * yt),
                    Ge += it >>> 13,
                    it &= 8191,
                    lt = Ge,
                    lt += Ye * yt,
                    lt += Ze * mt,
                    lt += Ve * (5 * Et),
                    lt += me * (5 * St),
                    lt += ve * (5 * _t),
                    Ge = lt >>> 13,
                    lt &= 8191,
                    lt += Pe * (5 * kt),
                    lt += Ae * (5 * Tt),
                    lt += Le * (5 * wt),
                    lt += De * (5 * ae),
                    lt += nt * (5 * vt),
                    Ge += lt >>> 13,
                    lt &= 8191,
                    pt = Ge,
                    pt += Ye * vt,
                    pt += Ze * yt,
                    pt += Ve * mt,
                    pt += me * (5 * Et),
                    pt += ve * (5 * St),
                    Ge = pt >>> 13,
                    pt &= 8191,
                    pt += Pe * (5 * _t),
                    pt += Ae * (5 * kt),
                    pt += Le * (5 * Tt),
                    pt += De * (5 * wt),
                    pt += nt * (5 * ae),
                    Ge += pt >>> 13,
                    pt &= 8191,
                    ht = Ge,
                    ht += Ye * ae,
                    ht += Ze * vt,
                    ht += Ve * yt,
                    ht += me * mt,
                    ht += ve * (5 * Et),
                    Ge = ht >>> 13,
                    ht &= 8191,
                    ht += Pe * (5 * St),
                    ht += Ae * (5 * _t),
                    ht += Le * (5 * kt),
                    ht += De * (5 * Tt),
                    ht += nt * (5 * wt),
                    Ge += ht >>> 13,
                    ht &= 8191,
                    ct = Ge,
                    ct += Ye * wt,
                    ct += Ze * ae,
                    ct += Ve * vt,
                    ct += me * yt,
                    ct += ve * mt,
                    Ge = ct >>> 13,
                    ct &= 8191,
                    ct += Pe * (5 * Et),
                    ct += Ae * (5 * St),
                    ct += Le * (5 * _t),
                    ct += De * (5 * kt),
                    ct += nt * (5 * Tt),
                    Ge += ct >>> 13,
                    ct &= 8191,
                    ut = Ge,
                    ut += Ye * Tt,
                    ut += Ze * wt,
                    ut += Ve * ae,
                    ut += me * vt,
                    ut += ve * yt,
                    Ge = ut >>> 13,
                    ut &= 8191,
                    ut += Pe * mt,
                    ut += Ae * (5 * Et),
                    ut += Le * (5 * St),
                    ut += De * (5 * _t),
                    ut += nt * (5 * kt),
                    Ge += ut >>> 13,
                    ut &= 8191,
                    dt = Ge,
                    dt += Ye * kt,
                    dt += Ze * Tt,
                    dt += Ve * wt,
                    dt += me * ae,
                    dt += ve * vt,
                    Ge = dt >>> 13,
                    dt &= 8191,
                    dt += Pe * yt,
                    dt += Ae * mt,
                    dt += Le * (5 * Et),
                    dt += De * (5 * St),
                    dt += nt * (5 * _t),
                    Ge += dt >>> 13,
                    dt &= 8191,
                    ze = Ge,
                    ze += Ye * _t,
                    ze += Ze * kt,
                    ze += Ve * Tt,
                    ze += me * wt,
                    ze += ve * ae,
                    Ge = ze >>> 13,
                    ze &= 8191,
                    ze += Pe * vt,
                    ze += Ae * yt,
                    ze += Le * mt,
                    ze += De * (5 * Et),
                    ze += nt * (5 * St),
                    Ge += ze >>> 13,
                    ze &= 8191,
                    Je = Ge,
                    Je += Ye * St,
                    Je += Ze * _t,
                    Je += Ve * kt,
                    Je += me * Tt,
                    Je += ve * wt,
                    Ge = Je >>> 13,
                    Je &= 8191,
                    Je += Pe * ae,
                    Je += Ae * vt,
                    Je += Le * yt,
                    Je += De * mt,
                    Je += nt * (5 * Et),
                    Ge += Je >>> 13,
                    Je &= 8191,
                    qe = Ge,
                    qe += Ye * Et,
                    qe += Ze * St,
                    qe += Ve * _t,
                    qe += me * kt,
                    qe += ve * Tt,
                    Ge = qe >>> 13,
                    qe &= 8191,
                    qe += Pe * wt,
                    qe += Ae * ae,
                    qe += Le * vt,
                    qe += De * yt,
                    qe += nt * mt,
                    Ge += qe >>> 13,
                    qe &= 8191,
                    Ge = (Ge << 2) + Ge | 0,
                    Ge = Ge + it | 0,
                    it = Ge & 8191,
                    Ge = Ge >>> 13,
                    lt += Ge,
                    Ye = it,
                    Ze = lt,
                    Ve = pt,
                    me = ht,
                    ve = ct,
                    Pe = ut,
                    Ae = dt,
                    Le = ze,
                    De = Je,
                    nt = qe,
                    te += 16,
                    ee -= 16;
            this.h[0] = Ye,
                this.h[1] = Ze,
                this.h[2] = Ve,
                this.h[3] = me,
                this.h[4] = ve,
                this.h[5] = Pe,
                this.h[6] = Ae,
                this.h[7] = Le,
                this.h[8] = De,
                this.h[9] = nt
        }
            ,
            he.prototype.finish = function (Q, te) {
                var ee = new Uint16Array(10), G, ne, fe, ge;
                if (this.leftover) {
                    for (ge = this.leftover,
                        this.buffer[ge++] = 1; ge < 16; ge++)
                        this.buffer[ge] = 0;
                    this.fin = 1,
                        this.blocks(this.buffer, 0, 16)
                }
                for (G = this.h[1] >>> 13,
                    this.h[1] &= 8191,
                    ge = 2; ge < 10; ge++)
                    this.h[ge] += G,
                        G = this.h[ge] >>> 13,
                        this.h[ge] &= 8191;
                for (this.h[0] += G * 5,
                    G = this.h[0] >>> 13,
                    this.h[0] &= 8191,
                    this.h[1] += G,
                    G = this.h[1] >>> 13,
                    this.h[1] &= 8191,
                    this.h[2] += G,
                    ee[0] = this.h[0] + 5,
                    G = ee[0] >>> 13,
                    ee[0] &= 8191,
                    ge = 1; ge < 10; ge++)
                    ee[ge] = this.h[ge] + G,
                        G = ee[ge] >>> 13,
                        ee[ge] &= 8191;
                for (ee[9] -= 8192,
                    ne = (G ^ 1) - 1,
                    ge = 0; ge < 10; ge++)
                    ee[ge] &= ne;
                for (ne = ~ne,
                    ge = 0; ge < 10; ge++)
                    this.h[ge] = this.h[ge] & ne | ee[ge];
                for (this.h[0] = (this.h[0] | this.h[1] << 13) & 65535,
                    this.h[1] = (this.h[1] >>> 3 | this.h[2] << 10) & 65535,
                    this.h[2] = (this.h[2] >>> 6 | this.h[3] << 7) & 65535,
                    this.h[3] = (this.h[3] >>> 9 | this.h[4] << 4) & 65535,
                    this.h[4] = (this.h[4] >>> 12 | this.h[5] << 1 | this.h[6] << 14) & 65535,
                    this.h[5] = (this.h[6] >>> 2 | this.h[7] << 11) & 65535,
                    this.h[6] = (this.h[7] >>> 5 | this.h[8] << 8) & 65535,
                    this.h[7] = (this.h[8] >>> 8 | this.h[9] << 5) & 65535,
                    fe = this.h[0] + this.pad[0],
                    this.h[0] = fe & 65535,
                    ge = 1; ge < 8; ge++)
                    fe = (this.h[ge] + this.pad[ge] | 0) + (fe >>> 16) | 0,
                        this.h[ge] = fe & 65535;
                Q[te + 0] = this.h[0] >>> 0 & 255,
                    Q[te + 1] = this.h[0] >>> 8 & 255,
                    Q[te + 2] = this.h[1] >>> 0 & 255,
                    Q[te + 3] = this.h[1] >>> 8 & 255,
                    Q[te + 4] = this.h[2] >>> 0 & 255,
                    Q[te + 5] = this.h[2] >>> 8 & 255,
                    Q[te + 6] = this.h[3] >>> 0 & 255,
                    Q[te + 7] = this.h[3] >>> 8 & 255,
                    Q[te + 8] = this.h[4] >>> 0 & 255,
                    Q[te + 9] = this.h[4] >>> 8 & 255,
                    Q[te + 10] = this.h[5] >>> 0 & 255,
                    Q[te + 11] = this.h[5] >>> 8 & 255,
                    Q[te + 12] = this.h[6] >>> 0 & 255,
                    Q[te + 13] = this.h[6] >>> 8 & 255,
                    Q[te + 14] = this.h[7] >>> 0 & 255,
                    Q[te + 15] = this.h[7] >>> 8 & 255
            }
            ,
            he.prototype.update = function (Q, te, ee) {
                var G, ne;
                if (this.leftover) {
                    for (ne = 16 - this.leftover,
                        ne > ee && (ne = ee),
                        G = 0; G < ne; G++)
                        this.buffer[this.leftover + G] = Q[te + G];
                    if (ee -= ne,
                        te += ne,
                        this.leftover += ne,
                        this.leftover < 16)
                        return;
                    this.blocks(this.buffer, 0, 16),
                        this.leftover = 0
                }
                if (ee >= 16 && (ne = ee - ee % 16,
                    this.blocks(Q, te, ne),
                    te += ne,
                    ee -= ne),
                    ee) {
                    for (G = 0; G < ee; G++)
                        this.buffer[this.leftover + G] = Q[te + G];
                    this.leftover += ee
                }
            }
            ;
        function ce(Q, te, ee, G, ne, fe) {
            var ge = new he(fe);
            return ge.update(ee, G, ne),
                ge.finish(Q, te),
                0
        }
        function Oe(Q, te, ee, G, ne, fe) {
            var ge = new Uint8Array(16);
            return ce(ge, 0, ee, G, ne, fe),
                pe(Q, te, ge, 0)
        }
        function Ne(Q, te, ee, G, ne) {
            var fe;
            if (ee < 32)
                return -1;
            for (Se(Q, 0, te, 0, ee, G, ne),
                ce(Q, 16, Q, 32, ee - 32, Q),
                fe = 0; fe < 16; fe++)
                Q[fe] = 0;
            return 0
        }
        function He(Q, te, ee, G, ne) {
            var fe, ge = new Uint8Array(32);
            if (ee < 32 || (de(ge, 0, 32, G, ne),
                Oe(te, 16, te, 32, ee - 32, ge) !== 0))
                return -1;
            for (Se(Q, 0, te, 0, ee, G, ne),
                fe = 0; fe < 32; fe++)
                Q[fe] = 0;
            return 0
        }
        function tt(Q, te) {
            var ee;
            for (ee = 0; ee < 16; ee++)
                Q[ee] = te[ee] | 0
        }
        function at(Q) {
            var te, ee, G = 1;
            for (te = 0; te < 16; te++)
                ee = Q[te] + G + 65535,
                    G = Math.floor(ee / 65536),
                    Q[te] = ee - G * 65536;
            Q[0] += G - 1 + 37 * (G - 1)
        }
        function Ct(Q, te, ee) {
            for (var G, ne = ~(ee - 1), fe = 0; fe < 16; fe++)
                G = ne & (Q[fe] ^ te[fe]),
                    Q[fe] ^= G,
                    te[fe] ^= G
        }
        function At(Q, te) {
            var ee, G, ne, fe = W(), ge = W();
            for (ee = 0; ee < 16; ee++)
                ge[ee] = te[ee];
            for (at(ge),
                at(ge),
                at(ge),
                G = 0; G < 2; G++) {
                for (fe[0] = ge[0] - 65517,
                    ee = 1; ee < 15; ee++)
                    fe[ee] = ge[ee] - 65535 - (fe[ee - 1] >> 16 & 1),
                        fe[ee - 1] &= 65535;
                fe[15] = ge[15] - 32767 - (fe[14] >> 16 & 1),
                    ne = fe[15] >> 16 & 1,
                    fe[14] &= 65535,
                    Ct(ge, fe, 1 - ne)
            }
            for (ee = 0; ee < 16; ee++)
                Q[2 * ee] = ge[ee] & 255,
                    Q[2 * ee + 1] = ge[ee] >> 8
        }
        function Pt(Q, te) {
            var ee = new Uint8Array(32)
                , G = new Uint8Array(32);
            return At(ee, Q),
                At(G, te),
                Ee(ee, 0, G, 0)
        }
        function Gt(Q) {
            var te = new Uint8Array(32);
            return At(te, Q),
                te[0] & 1
        }
        function Vt(Q, te) {
            var ee;
            for (ee = 0; ee < 16; ee++)
                Q[ee] = te[2 * ee] + (te[2 * ee + 1] << 8);
            Q[15] &= 32767
        }
        function Bt(Q, te, ee) {
            for (var G = 0; G < 16; G++)
                Q[G] = te[G] + ee[G]
        }
        function Ht(Q, te, ee) {
            for (var G = 0; G < 16; G++)
                Q[G] = te[G] - ee[G]
        }
        function gt(Q, te, ee) {
            var G, ne, fe = 0, ge = 0, Me = 0, Fe = 0, Qe = 0, Ke = 0, $t = 0, Ge = 0, it = 0, lt = 0, pt = 0, ht = 0, ct = 0, ut = 0, dt = 0, ze = 0, Je = 0, qe = 0, Ye = 0, Ze = 0, Ve = 0, me = 0, ve = 0, Pe = 0, Ae = 0, Le = 0, De = 0, nt = 0, mt = 0, yt = 0, vt = 0, ae = ee[0], wt = ee[1], Tt = ee[2], kt = ee[3], _t = ee[4], St = ee[5], Et = ee[6], Ft = ee[7], It = ee[8], Ut = ee[9], Ot = ee[10], Dt = ee[11], Kt = ee[12], zt = ee[13], Yt = ee[14], Zt = ee[15];
            G = te[0],
                fe += G * ae,
                ge += G * wt,
                Me += G * Tt,
                Fe += G * kt,
                Qe += G * _t,
                Ke += G * St,
                $t += G * Et,
                Ge += G * Ft,
                it += G * It,
                lt += G * Ut,
                pt += G * Ot,
                ht += G * Dt,
                ct += G * Kt,
                ut += G * zt,
                dt += G * Yt,
                ze += G * Zt,
                G = te[1],
                ge += G * ae,
                Me += G * wt,
                Fe += G * Tt,
                Qe += G * kt,
                Ke += G * _t,
                $t += G * St,
                Ge += G * Et,
                it += G * Ft,
                lt += G * It,
                pt += G * Ut,
                ht += G * Ot,
                ct += G * Dt,
                ut += G * Kt,
                dt += G * zt,
                ze += G * Yt,
                Je += G * Zt,
                G = te[2],
                Me += G * ae,
                Fe += G * wt,
                Qe += G * Tt,
                Ke += G * kt,
                $t += G * _t,
                Ge += G * St,
                it += G * Et,
                lt += G * Ft,
                pt += G * It,
                ht += G * Ut,
                ct += G * Ot,
                ut += G * Dt,
                dt += G * Kt,
                ze += G * zt,
                Je += G * Yt,
                qe += G * Zt,
                G = te[3],
                Fe += G * ae,
                Qe += G * wt,
                Ke += G * Tt,
                $t += G * kt,
                Ge += G * _t,
                it += G * St,
                lt += G * Et,
                pt += G * Ft,
                ht += G * It,
                ct += G * Ut,
                ut += G * Ot,
                dt += G * Dt,
                ze += G * Kt,
                Je += G * zt,
                qe += G * Yt,
                Ye += G * Zt,
                G = te[4],
                Qe += G * ae,
                Ke += G * wt,
                $t += G * Tt,
                Ge += G * kt,
                it += G * _t,
                lt += G * St,
                pt += G * Et,
                ht += G * Ft,
                ct += G * It,
                ut += G * Ut,
                dt += G * Ot,
                ze += G * Dt,
                Je += G * Kt,
                qe += G * zt,
                Ye += G * Yt,
                Ze += G * Zt,
                G = te[5],
                Ke += G * ae,
                $t += G * wt,
                Ge += G * Tt,
                it += G * kt,
                lt += G * _t,
                pt += G * St,
                ht += G * Et,
                ct += G * Ft,
                ut += G * It,
                dt += G * Ut,
                ze += G * Ot,
                Je += G * Dt,
                qe += G * Kt,
                Ye += G * zt,
                Ze += G * Yt,
                Ve += G * Zt,
                G = te[6],
                $t += G * ae,
                Ge += G * wt,
                it += G * Tt,
                lt += G * kt,
                pt += G * _t,
                ht += G * St,
                ct += G * Et,
                ut += G * Ft,
                dt += G * It,
                ze += G * Ut,
                Je += G * Ot,
                qe += G * Dt,
                Ye += G * Kt,
                Ze += G * zt,
                Ve += G * Yt,
                me += G * Zt,
                G = te[7],
                Ge += G * ae,
                it += G * wt,
                lt += G * Tt,
                pt += G * kt,
                ht += G * _t,
                ct += G * St,
                ut += G * Et,
                dt += G * Ft,
                ze += G * It,
                Je += G * Ut,
                qe += G * Ot,
                Ye += G * Dt,
                Ze += G * Kt,
                Ve += G * zt,
                me += G * Yt,
                ve += G * Zt,
                G = te[8],
                it += G * ae,
                lt += G * wt,
                pt += G * Tt,
                ht += G * kt,
                ct += G * _t,
                ut += G * St,
                dt += G * Et,
                ze += G * Ft,
                Je += G * It,
                qe += G * Ut,
                Ye += G * Ot,
                Ze += G * Dt,
                Ve += G * Kt,
                me += G * zt,
                ve += G * Yt,
                Pe += G * Zt,
                G = te[9],
                lt += G * ae,
                pt += G * wt,
                ht += G * Tt,
                ct += G * kt,
                ut += G * _t,
                dt += G * St,
                ze += G * Et,
                Je += G * Ft,
                qe += G * It,
                Ye += G * Ut,
                Ze += G * Ot,
                Ve += G * Dt,
                me += G * Kt,
                ve += G * zt,
                Pe += G * Yt,
                Ae += G * Zt,
                G = te[10],
                pt += G * ae,
                ht += G * wt,
                ct += G * Tt,
                ut += G * kt,
                dt += G * _t,
                ze += G * St,
                Je += G * Et,
                qe += G * Ft,
                Ye += G * It,
                Ze += G * Ut,
                Ve += G * Ot,
                me += G * Dt,
                ve += G * Kt,
                Pe += G * zt,
                Ae += G * Yt,
                Le += G * Zt,
                G = te[11],
                ht += G * ae,
                ct += G * wt,
                ut += G * Tt,
                dt += G * kt,
                ze += G * _t,
                Je += G * St,
                qe += G * Et,
                Ye += G * Ft,
                Ze += G * It,
                Ve += G * Ut,
                me += G * Ot,
                ve += G * Dt,
                Pe += G * Kt,
                Ae += G * zt,
                Le += G * Yt,
                De += G * Zt,
                G = te[12],
                ct += G * ae,
                ut += G * wt,
                dt += G * Tt,
                ze += G * kt,
                Je += G * _t,
                qe += G * St,
                Ye += G * Et,
                Ze += G * Ft,
                Ve += G * It,
                me += G * Ut,
                ve += G * Ot,
                Pe += G * Dt,
                Ae += G * Kt,
                Le += G * zt,
                De += G * Yt,
                nt += G * Zt,
                G = te[13],
                ut += G * ae,
                dt += G * wt,
                ze += G * Tt,
                Je += G * kt,
                qe += G * _t,
                Ye += G * St,
                Ze += G * Et,
                Ve += G * Ft,
                me += G * It,
                ve += G * Ut,
                Pe += G * Ot,
                Ae += G * Dt,
                Le += G * Kt,
                De += G * zt,
                nt += G * Yt,
                mt += G * Zt,
                G = te[14],
                dt += G * ae,
                ze += G * wt,
                Je += G * Tt,
                qe += G * kt,
                Ye += G * _t,
                Ze += G * St,
                Ve += G * Et,
                me += G * Ft,
                ve += G * It,
                Pe += G * Ut,
                Ae += G * Ot,
                Le += G * Dt,
                De += G * Kt,
                nt += G * zt,
                mt += G * Yt,
                yt += G * Zt,
                G = te[15],
                ze += G * ae,
                Je += G * wt,
                qe += G * Tt,
                Ye += G * kt,
                Ze += G * _t,
                Ve += G * St,
                me += G * Et,
                ve += G * Ft,
                Pe += G * It,
                Ae += G * Ut,
                Le += G * Ot,
                De += G * Dt,
                nt += G * Kt,
                mt += G * zt,
                yt += G * Yt,
                vt += G * Zt,
                fe += 38 * Je,
                ge += 38 * qe,
                Me += 38 * Ye,
                Fe += 38 * Ze,
                Qe += 38 * Ve,
                Ke += 38 * me,
                $t += 38 * ve,
                Ge += 38 * Pe,
                it += 38 * Ae,
                lt += 38 * Le,
                pt += 38 * De,
                ht += 38 * nt,
                ct += 38 * mt,
                ut += 38 * yt,
                dt += 38 * vt,
                ne = 1,
                G = fe + ne + 65535,
                ne = Math.floor(G / 65536),
                fe = G - ne * 65536,
                G = ge + ne + 65535,
                ne = Math.floor(G / 65536),
                ge = G - ne * 65536,
                G = Me + ne + 65535,
                ne = Math.floor(G / 65536),
                Me = G - ne * 65536,
                G = Fe + ne + 65535,
                ne = Math.floor(G / 65536),
                Fe = G - ne * 65536,
                G = Qe + ne + 65535,
                ne = Math.floor(G / 65536),
                Qe = G - ne * 65536,
                G = Ke + ne + 65535,
                ne = Math.floor(G / 65536),
                Ke = G - ne * 65536,
                G = $t + ne + 65535,
                ne = Math.floor(G / 65536),
                $t = G - ne * 65536,
                G = Ge + ne + 65535,
                ne = Math.floor(G / 65536),
                Ge = G - ne * 65536,
                G = it + ne + 65535,
                ne = Math.floor(G / 65536),
                it = G - ne * 65536,
                G = lt + ne + 65535,
                ne = Math.floor(G / 65536),
                lt = G - ne * 65536,
                G = pt + ne + 65535,
                ne = Math.floor(G / 65536),
                pt = G - ne * 65536,
                G = ht + ne + 65535,
                ne = Math.floor(G / 65536),
                ht = G - ne * 65536,
                G = ct + ne + 65535,
                ne = Math.floor(G / 65536),
                ct = G - ne * 65536,
                G = ut + ne + 65535,
                ne = Math.floor(G / 65536),
                ut = G - ne * 65536,
                G = dt + ne + 65535,
                ne = Math.floor(G / 65536),
                dt = G - ne * 65536,
                G = ze + ne + 65535,
                ne = Math.floor(G / 65536),
                ze = G - ne * 65536,
                fe += ne - 1 + 37 * (ne - 1),
                ne = 1,
                G = fe + ne + 65535,
                ne = Math.floor(G / 65536),
                fe = G - ne * 65536,
                G = ge + ne + 65535,
                ne = Math.floor(G / 65536),
                ge = G - ne * 65536,
                G = Me + ne + 65535,
                ne = Math.floor(G / 65536),
                Me = G - ne * 65536,
                G = Fe + ne + 65535,
                ne = Math.floor(G / 65536),
                Fe = G - ne * 65536,
                G = Qe + ne + 65535,
                ne = Math.floor(G / 65536),
                Qe = G - ne * 65536,
                G = Ke + ne + 65535,
                ne = Math.floor(G / 65536),
                Ke = G - ne * 65536,
                G = $t + ne + 65535,
                ne = Math.floor(G / 65536),
                $t = G - ne * 65536,
                G = Ge + ne + 65535,
                ne = Math.floor(G / 65536),
                Ge = G - ne * 65536,
                G = it + ne + 65535,
                ne = Math.floor(G / 65536),
                it = G - ne * 65536,
                G = lt + ne + 65535,
                ne = Math.floor(G / 65536),
                lt = G - ne * 65536,
                G = pt + ne + 65535,
                ne = Math.floor(G / 65536),
                pt = G - ne * 65536,
                G = ht + ne + 65535,
                ne = Math.floor(G / 65536),
                ht = G - ne * 65536,
                G = ct + ne + 65535,
                ne = Math.floor(G / 65536),
                ct = G - ne * 65536,
                G = ut + ne + 65535,
                ne = Math.floor(G / 65536),
                ut = G - ne * 65536,
                G = dt + ne + 65535,
                ne = Math.floor(G / 65536),
                dt = G - ne * 65536,
                G = ze + ne + 65535,
                ne = Math.floor(G / 65536),
                ze = G - ne * 65536,
                fe += ne - 1 + 37 * (ne - 1),
                Q[0] = fe,
                Q[1] = ge,
                Q[2] = Me,
                Q[3] = Fe,
                Q[4] = Qe,
                Q[5] = Ke,
                Q[6] = $t,
                Q[7] = Ge,
                Q[8] = it,
                Q[9] = lt,
                Q[10] = pt,
                Q[11] = ht,
                Q[12] = ct,
                Q[13] = ut,
                Q[14] = dt,
                Q[15] = ze
        }
        function Nt(Q, te) {
            gt(Q, te, te)
        }
        function un(Q, te) {
            var ee = W(), G;
            for (G = 0; G < 16; G++)
                ee[G] = te[G];
            for (G = 253; G >= 0; G--)
                Nt(ee, ee),
                    G !== 2 && G !== 4 && gt(ee, ee, te);
            for (G = 0; G < 16; G++)
                Q[G] = ee[G]
        }
        function $e(Q, te) {
            var ee = W(), G;
            for (G = 0; G < 16; G++)
                ee[G] = te[G];
            for (G = 250; G >= 0; G--)
                Nt(ee, ee),
                    G !== 1 && gt(ee, ee, te);
            for (G = 0; G < 16; G++)
                Q[G] = ee[G]
        }
        function Te(Q, te, ee) {
            var G = new Uint8Array(32), ne = new Float64Array(80), fe, ge, Me = W(), Fe = W(), Qe = W(), Ke = W(), $t = W(), Ge = W();
            for (ge = 0; ge < 31; ge++)
                G[ge] = te[ge];
            for (G[31] = te[31] & 127 | 64,
                G[0] &= 248,
                Vt(ne, ee),
                ge = 0; ge < 16; ge++)
                Fe[ge] = ne[ge],
                    Ke[ge] = Me[ge] = Qe[ge] = 0;
            for (Me[0] = Ke[0] = 1,
                ge = 254; ge >= 0; --ge)
                fe = G[ge >>> 3] >>> (ge & 7) & 1,
                    Ct(Me, Fe, fe),
                    Ct(Qe, Ke, fe),
                    Bt($t, Me, Qe),
                    Ht(Me, Me, Qe),
                    Bt(Qe, Fe, Ke),
                    Ht(Fe, Fe, Ke),
                    Nt(Ke, $t),
                    Nt(Ge, Me),
                    gt(Me, Qe, Me),
                    gt(Qe, Fe, $t),
                    Bt($t, Me, Qe),
                    Ht(Me, Me, Qe),
                    Nt(Fe, Me),
                    Ht(Qe, Ke, Ge),
                    gt(Me, Qe, J),
                    Bt(Me, Me, Ke),
                    gt(Qe, Qe, Me),
                    gt(Me, Ke, Ge),
                    gt(Ke, Fe, ne),
                    Nt(Fe, $t),
                    Ct(Me, Fe, fe),
                    Ct(Qe, Ke, fe);
            for (ge = 0; ge < 16; ge++)
                ne[ge + 16] = Me[ge],
                    ne[ge + 32] = Qe[ge],
                    ne[ge + 48] = Fe[ge],
                    ne[ge + 64] = Ke[ge];
            var it = ne.subarray(32)
                , lt = ne.subarray(16);
            return un(it, it),
                gt(lt, lt, it),
                At(Q, lt),
                0
        }
        function we(Q, te) {
            return Te(Q, te, K)
        }
        function Ie(Q, te) {
            return U(te, 32),
                we(Q, te)
        }
        function Re(Q, te, ee) {
            var G = new Uint8Array(32);
            return Te(G, ee, te),
                be(Q, V, G, Be)
        }
        var je = Ne
            , Xe = He;
        function et(Q, te, ee, G, ne, fe) {
            var ge = new Uint8Array(32);
            return Re(ge, ne, fe),
                je(Q, te, ee, G, ge)
        }
        function Mt(Q, te, ee, G, ne, fe) {
            var ge = new Uint8Array(32);
            return Re(ge, ne, fe),
                Xe(Q, te, ee, G, ge)
        }
        var Rt = [1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399, 3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265, 2453635748, 2937671579, 2870763221, 3664609560, 3624381080, 2734883394, 310598401, 1164996542, 607225278, 1323610764, 1426881987, 3590304994, 1925078388, 4068182383, 2162078206, 991336113, 2614888103, 633803317, 3248222580, 3479774868, 3835390401, 2666613458, 4022224774, 944711139, 264347078, 2341262773, 604807628, 2007800933, 770255983, 1495990901, 1249150122, 1856431235, 1555081692, 3175218132, 1996064986, 2198950837, 2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879, 3210313671, 3203337956, 3336571891, 1034457026, 3584528711, 2466948901, 113926993, 3758326383, 338241895, 168717936, 666307205, 1188179964, 773529912, 1546045734, 1294757372, 1522805485, 1396182291, 2643833823, 1695183700, 2343527390, 1986661051, 1014477480, 2177026350, 1206759142, 2456956037, 344077627, 2730485921, 1290863460, 2820302411, 3158454273, 3259730800, 3505952657, 3345764771, 106217008, 3516065817, 3606008344, 3600352804, 1432725776, 4094571909, 1467031594, 275423344, 851169720, 430227734, 3100823752, 506948616, 1363258195, 659060556, 3750685593, 883997877, 3785050280, 958139571, 3318307427, 1322822218, 3812723403, 1537002063, 2003034995, 1747873779, 3602036899, 1955562222, 1575990012, 2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044, 2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573, 3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711, 3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554, 174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315, 685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100, 1126000580, 2618297676, 1288033470, 3409855158, 1501505948, 4234509866, 1607167915, 987167468, 1816402316, 1246189591];
        function rt(Q, te, ee, G) {
            for (var ne = new Int32Array(16), fe = new Int32Array(16), ge, Me, Fe, Qe, Ke, $t, Ge, it, lt, pt, ht, ct, ut, dt, ze, Je, qe, Ye, Ze, Ve, me, ve, Pe, Ae, Le, De, nt = Q[0], mt = Q[1], yt = Q[2], vt = Q[3], ae = Q[4], wt = Q[5], Tt = Q[6], kt = Q[7], _t = te[0], St = te[1], Et = te[2], Ft = te[3], It = te[4], Ut = te[5], Ot = te[6], Dt = te[7], Kt = 0; G >= 128;) {
                for (Ze = 0; Ze < 16; Ze++)
                    Ve = 8 * Ze + Kt,
                        ne[Ze] = ee[Ve + 0] << 24 | ee[Ve + 1] << 16 | ee[Ve + 2] << 8 | ee[Ve + 3],
                        fe[Ze] = ee[Ve + 4] << 24 | ee[Ve + 5] << 16 | ee[Ve + 6] << 8 | ee[Ve + 7];
                for (Ze = 0; Ze < 80; Ze++)
                    if (ge = nt,
                        Me = mt,
                        Fe = yt,
                        Qe = vt,
                        Ke = ae,
                        $t = wt,
                        Ge = Tt,
                        it = kt,
                        lt = _t,
                        pt = St,
                        ht = Et,
                        ct = Ft,
                        ut = It,
                        dt = Ut,
                        ze = Ot,
                        Je = Dt,
                        me = kt,
                        ve = Dt,
                        Pe = ve & 65535,
                        Ae = ve >>> 16,
                        Le = me & 65535,
                        De = me >>> 16,
                        me = (ae >>> 14 | It << 18) ^ (ae >>> 18 | It << 14) ^ (It >>> 9 | ae << 23),
                        ve = (It >>> 14 | ae << 18) ^ (It >>> 18 | ae << 14) ^ (ae >>> 9 | It << 23),
                        Pe += ve & 65535,
                        Ae += ve >>> 16,
                        Le += me & 65535,
                        De += me >>> 16,
                        me = ae & wt ^ ~ae & Tt,
                        ve = It & Ut ^ ~It & Ot,
                        Pe += ve & 65535,
                        Ae += ve >>> 16,
                        Le += me & 65535,
                        De += me >>> 16,
                        me = Rt[Ze * 2],
                        ve = Rt[Ze * 2 + 1],
                        Pe += ve & 65535,
                        Ae += ve >>> 16,
                        Le += me & 65535,
                        De += me >>> 16,
                        me = ne[Ze % 16],
                        ve = fe[Ze % 16],
                        Pe += ve & 65535,
                        Ae += ve >>> 16,
                        Le += me & 65535,
                        De += me >>> 16,
                        Ae += Pe >>> 16,
                        Le += Ae >>> 16,
                        De += Le >>> 16,
                        qe = Le & 65535 | De << 16,
                        Ye = Pe & 65535 | Ae << 16,
                        me = qe,
                        ve = Ye,
                        Pe = ve & 65535,
                        Ae = ve >>> 16,
                        Le = me & 65535,
                        De = me >>> 16,
                        me = (nt >>> 28 | _t << 4) ^ (_t >>> 2 | nt << 30) ^ (_t >>> 7 | nt << 25),
                        ve = (_t >>> 28 | nt << 4) ^ (nt >>> 2 | _t << 30) ^ (nt >>> 7 | _t << 25),
                        Pe += ve & 65535,
                        Ae += ve >>> 16,
                        Le += me & 65535,
                        De += me >>> 16,
                        me = nt & mt ^ nt & yt ^ mt & yt,
                        ve = _t & St ^ _t & Et ^ St & Et,
                        Pe += ve & 65535,
                        Ae += ve >>> 16,
                        Le += me & 65535,
                        De += me >>> 16,
                        Ae += Pe >>> 16,
                        Le += Ae >>> 16,
                        De += Le >>> 16,
                        it = Le & 65535 | De << 16,
                        Je = Pe & 65535 | Ae << 16,
                        me = Qe,
                        ve = ct,
                        Pe = ve & 65535,
                        Ae = ve >>> 16,
                        Le = me & 65535,
                        De = me >>> 16,
                        me = qe,
                        ve = Ye,
                        Pe += ve & 65535,
                        Ae += ve >>> 16,
                        Le += me & 65535,
                        De += me >>> 16,
                        Ae += Pe >>> 16,
                        Le += Ae >>> 16,
                        De += Le >>> 16,
                        Qe = Le & 65535 | De << 16,
                        ct = Pe & 65535 | Ae << 16,
                        mt = ge,
                        yt = Me,
                        vt = Fe,
                        ae = Qe,
                        wt = Ke,
                        Tt = $t,
                        kt = Ge,
                        nt = it,
                        St = lt,
                        Et = pt,
                        Ft = ht,
                        It = ct,
                        Ut = ut,
                        Ot = dt,
                        Dt = ze,
                        _t = Je,
                        Ze % 16 === 15)
                        for (Ve = 0; Ve < 16; Ve++)
                            me = ne[Ve],
                                ve = fe[Ve],
                                Pe = ve & 65535,
                                Ae = ve >>> 16,
                                Le = me & 65535,
                                De = me >>> 16,
                                me = ne[(Ve + 9) % 16],
                                ve = fe[(Ve + 9) % 16],
                                Pe += ve & 65535,
                                Ae += ve >>> 16,
                                Le += me & 65535,
                                De += me >>> 16,
                                qe = ne[(Ve + 1) % 16],
                                Ye = fe[(Ve + 1) % 16],
                                me = (qe >>> 1 | Ye << 31) ^ (qe >>> 8 | Ye << 24) ^ qe >>> 7,
                                ve = (Ye >>> 1 | qe << 31) ^ (Ye >>> 8 | qe << 24) ^ (Ye >>> 7 | qe << 25),
                                Pe += ve & 65535,
                                Ae += ve >>> 16,
                                Le += me & 65535,
                                De += me >>> 16,
                                qe = ne[(Ve + 14) % 16],
                                Ye = fe[(Ve + 14) % 16],
                                me = (qe >>> 19 | Ye << 13) ^ (Ye >>> 29 | qe << 3) ^ qe >>> 6,
                                ve = (Ye >>> 19 | qe << 13) ^ (qe >>> 29 | Ye << 3) ^ (Ye >>> 6 | qe << 26),
                                Pe += ve & 65535,
                                Ae += ve >>> 16,
                                Le += me & 65535,
                                De += me >>> 16,
                                Ae += Pe >>> 16,
                                Le += Ae >>> 16,
                                De += Le >>> 16,
                                ne[Ve] = Le & 65535 | De << 16,
                                fe[Ve] = Pe & 65535 | Ae << 16;
                me = nt,
                    ve = _t,
                    Pe = ve & 65535,
                    Ae = ve >>> 16,
                    Le = me & 65535,
                    De = me >>> 16,
                    me = Q[0],
                    ve = te[0],
                    Pe += ve & 65535,
                    Ae += ve >>> 16,
                    Le += me & 65535,
                    De += me >>> 16,
                    Ae += Pe >>> 16,
                    Le += Ae >>> 16,
                    De += Le >>> 16,
                    Q[0] = nt = Le & 65535 | De << 16,
                    te[0] = _t = Pe & 65535 | Ae << 16,
                    me = mt,
                    ve = St,
                    Pe = ve & 65535,
                    Ae = ve >>> 16,
                    Le = me & 65535,
                    De = me >>> 16,
                    me = Q[1],
                    ve = te[1],
                    Pe += ve & 65535,
                    Ae += ve >>> 16,
                    Le += me & 65535,
                    De += me >>> 16,
                    Ae += Pe >>> 16,
                    Le += Ae >>> 16,
                    De += Le >>> 16,
                    Q[1] = mt = Le & 65535 | De << 16,
                    te[1] = St = Pe & 65535 | Ae << 16,
                    me = yt,
                    ve = Et,
                    Pe = ve & 65535,
                    Ae = ve >>> 16,
                    Le = me & 65535,
                    De = me >>> 16,
                    me = Q[2],
                    ve = te[2],
                    Pe += ve & 65535,
                    Ae += ve >>> 16,
                    Le += me & 65535,
                    De += me >>> 16,
                    Ae += Pe >>> 16,
                    Le += Ae >>> 16,
                    De += Le >>> 16,
                    Q[2] = yt = Le & 65535 | De << 16,
                    te[2] = Et = Pe & 65535 | Ae << 16,
                    me = vt,
                    ve = Ft,
                    Pe = ve & 65535,
                    Ae = ve >>> 16,
                    Le = me & 65535,
                    De = me >>> 16,
                    me = Q[3],
                    ve = te[3],
                    Pe += ve & 65535,
                    Ae += ve >>> 16,
                    Le += me & 65535,
                    De += me >>> 16,
                    Ae += Pe >>> 16,
                    Le += Ae >>> 16,
                    De += Le >>> 16,
                    Q[3] = vt = Le & 65535 | De << 16,
                    te[3] = Ft = Pe & 65535 | Ae << 16,
                    me = ae,
                    ve = It,
                    Pe = ve & 65535,
                    Ae = ve >>> 16,
                    Le = me & 65535,
                    De = me >>> 16,
                    me = Q[4],
                    ve = te[4],
                    Pe += ve & 65535,
                    Ae += ve >>> 16,
                    Le += me & 65535,
                    De += me >>> 16,
                    Ae += Pe >>> 16,
                    Le += Ae >>> 16,
                    De += Le >>> 16,
                    Q[4] = ae = Le & 65535 | De << 16,
                    te[4] = It = Pe & 65535 | Ae << 16,
                    me = wt,
                    ve = Ut,
                    Pe = ve & 65535,
                    Ae = ve >>> 16,
                    Le = me & 65535,
                    De = me >>> 16,
                    me = Q[5],
                    ve = te[5],
                    Pe += ve & 65535,
                    Ae += ve >>> 16,
                    Le += me & 65535,
                    De += me >>> 16,
                    Ae += Pe >>> 16,
                    Le += Ae >>> 16,
                    De += Le >>> 16,
                    Q[5] = wt = Le & 65535 | De << 16,
                    te[5] = Ut = Pe & 65535 | Ae << 16,
                    me = Tt,
                    ve = Ot,
                    Pe = ve & 65535,
                    Ae = ve >>> 16,
                    Le = me & 65535,
                    De = me >>> 16,
                    me = Q[6],
                    ve = te[6],
                    Pe += ve & 65535,
                    Ae += ve >>> 16,
                    Le += me & 65535,
                    De += me >>> 16,
                    Ae += Pe >>> 16,
                    Le += Ae >>> 16,
                    De += Le >>> 16,
                    Q[6] = Tt = Le & 65535 | De << 16,
                    te[6] = Ot = Pe & 65535 | Ae << 16,
                    me = kt,
                    ve = Dt,
                    Pe = ve & 65535,
                    Ae = ve >>> 16,
                    Le = me & 65535,
                    De = me >>> 16,
                    me = Q[7],
                    ve = te[7],
                    Pe += ve & 65535,
                    Ae += ve >>> 16,
                    Le += me & 65535,
                    De += me >>> 16,
                    Ae += Pe >>> 16,
                    Le += Ae >>> 16,
                    De += Le >>> 16,
                    Q[7] = kt = Le & 65535 | De << 16,
                    te[7] = Dt = Pe & 65535 | Ae << 16,
                    Kt += 128,
                    G -= 128
            }
            return G
        }
        function Wt(Q, te, ee) {
            var G = new Int32Array(8), ne = new Int32Array(8), fe = new Uint8Array(256), ge, Me = ee;
            for (G[0] = 1779033703,
                G[1] = 3144134277,
                G[2] = 1013904242,
                G[3] = 2773480762,
                G[4] = 1359893119,
                G[5] = 2600822924,
                G[6] = 528734635,
                G[7] = 1541459225,
                ne[0] = 4089235720,
                ne[1] = 2227873595,
                ne[2] = 4271175723,
                ne[3] = 1595750129,
                ne[4] = 2917565137,
                ne[5] = 725511199,
                ne[6] = 4215389547,
                ne[7] = 327033209,
                rt(G, ne, te, ee),
                ee %= 128,
                ge = 0; ge < ee; ge++)
                fe[ge] = te[Me - ee + ge];
            for (fe[ee] = 128,
                ee = 256 - 128 * (ee < 112 ? 1 : 0),
                fe[ee - 9] = 0,
                le(fe, ee - 8, Me / 536870912 | 0, Me << 3),
                rt(G, ne, fe, ee),
                ge = 0; ge < 8; ge++)
                le(Q, 8 * ge, G[ge], ne[ge]);
            return 0
        }
        function jt(Q, te) {
            var ee = W()
                , G = W()
                , ne = W()
                , fe = W()
                , ge = W()
                , Me = W()
                , Fe = W()
                , Qe = W()
                , Ke = W();
            Ht(ee, Q[1], Q[0]),
                Ht(Ke, te[1], te[0]),
                gt(ee, ee, Ke),
                Bt(G, Q[0], Q[1]),
                Bt(Ke, te[0], te[1]),
                gt(G, G, Ke),
                gt(ne, Q[3], te[3]),
                gt(ne, ne, re),
                gt(fe, Q[2], te[2]),
                Bt(fe, fe, fe),
                Ht(ge, G, ee),
                Ht(Me, fe, ne),
                Bt(Fe, fe, ne),
                Bt(Qe, G, ee),
                gt(Q[0], ge, Me),
                gt(Q[1], Qe, Fe),
                gt(Q[2], Fe, Me),
                gt(Q[3], ge, Qe)
        }
        function fn(Q, te, ee) {
            var G;
            for (G = 0; G < 4; G++)
                Ct(Q[G], te[G], ee)
        }
        function qt(Q, te) {
            var ee = W()
                , G = W()
                , ne = W();
            un(ne, te[2]),
                gt(ee, te[0], ne),
                gt(G, te[1], ne),
                At(Q, G),
                Q[31] ^= Gt(ee) << 7
        }
        function Jt(Q, te, ee) {
            var G, ne;
            for (tt(Q[0], Y),
                tt(Q[1], Z),
                tt(Q[2], Z),
                tt(Q[3], Y),
                ne = 255; ne >= 0; --ne)
                G = ee[ne / 8 | 0] >> (ne & 7) & 1,
                    fn(Q, te, G),
                    jt(te, Q),
                    jt(Q, Q),
                    fn(Q, te, G)
        }
        function Xt(Q, te) {
            var ee = [W(), W(), W(), W()];
            tt(ee[0], oe),
                tt(ee[1], ie),
                tt(ee[2], Z),
                gt(ee[3], oe, ie),
                Jt(Q, ee, te)
        }
        function ft(Q, te, ee) {
            var G = new Uint8Array(64), ne = [W(), W(), W(), W()], fe;
            for (ee || U(te, 32),
                Wt(G, te, 32),
                G[0] &= 248,
                G[31] &= 127,
                G[31] |= 64,
                Xt(ne, G),
                qt(Q, ne),
                fe = 0; fe < 32; fe++)
                te[fe + 32] = Q[fe];
            return 0
        }
        var bt = new Float64Array([237, 211, 245, 92, 26, 99, 18, 88, 214, 156, 247, 162, 222, 249, 222, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16]);
        function st(Q, te) {
            var ee, G, ne, fe;
            for (G = 63; G >= 32; --G) {
                for (ee = 0,
                    ne = G - 32,
                    fe = G - 12; ne < fe; ++ne)
                    te[ne] += ee - 16 * te[G] * bt[ne - (G - 32)],
                        ee = Math.floor((te[ne] + 128) / 256),
                        te[ne] -= ee * 256;
                te[ne] += ee,
                    te[G] = 0
            }
            for (ee = 0,
                ne = 0; ne < 32; ne++)
                te[ne] += ee - (te[31] >> 4) * bt[ne],
                    ee = te[ne] >> 8,
                    te[ne] &= 255;
            for (ne = 0; ne < 32; ne++)
                te[ne] -= ee * bt[ne];
            for (G = 0; G < 32; G++)
                te[G + 1] += te[G] >> 8,
                    Q[G] = te[G] & 255
        }
        function Lt(Q) {
            var te = new Float64Array(64), ee;
            for (ee = 0; ee < 64; ee++)
                te[ee] = Q[ee];
            for (ee = 0; ee < 64; ee++)
                Q[ee] = 0;
            st(Q, te)
        }
        function nn(Q, te, ee, G) {
            var ne = new Uint8Array(64), fe = new Uint8Array(64), ge = new Uint8Array(64), Me, Fe, Qe = new Float64Array(64), Ke = [W(), W(), W(), W()];
            Wt(ne, G, 32),
                ne[0] &= 248,
                ne[31] &= 127,
                ne[31] |= 64;
            var $t = ee + 64;
            for (Me = 0; Me < ee; Me++)
                Q[64 + Me] = te[Me];
            for (Me = 0; Me < 32; Me++)
                Q[32 + Me] = ne[32 + Me];
            for (Wt(ge, Q.subarray(32), ee + 32),
                Lt(ge),
                Xt(Ke, ge),
                qt(Q, Ke),
                Me = 32; Me < 64; Me++)
                Q[Me] = G[Me];
            for (Wt(fe, Q, ee + 64),
                Lt(fe),
                Me = 0; Me < 64; Me++)
                Qe[Me] = 0;
            for (Me = 0; Me < 32; Me++)
                Qe[Me] = ge[Me];
            for (Me = 0; Me < 32; Me++)
                for (Fe = 0; Fe < 32; Fe++)
                    Qe[Me + Fe] += fe[Me] * ne[Fe];
            return st(Q.subarray(32), Qe),
                $t
        }
        function rn(Q, te) {
            var ee = W()
                , G = W()
                , ne = W()
                , fe = W()
                , ge = W()
                , Me = W()
                , Fe = W();
            return tt(Q[2], Z),
                Vt(Q[1], te),
                Nt(ne, Q[1]),
                gt(fe, ne, X),
                Ht(ne, ne, Q[2]),
                Bt(fe, Q[2], fe),
                Nt(ge, fe),
                Nt(Me, ge),
                gt(Fe, Me, ge),
                gt(ee, Fe, ne),
                gt(ee, ee, fe),
                $e(ee, ee),
                gt(ee, ee, ne),
                gt(ee, ee, fe),
                gt(ee, ee, fe),
                gt(Q[0], ee, fe),
                Nt(G, Q[0]),
                gt(G, G, fe),
                Pt(G, ne) && gt(Q[0], Q[0], se),
                Nt(G, Q[0]),
                gt(G, G, fe),
                Pt(G, ne) ? -1 : (Gt(Q[0]) === te[31] >> 7 && Ht(Q[0], Y, Q[0]),
                    gt(Q[3], Q[0], Q[1]),
                    0)
        }
        function xt(Q, te, ee, G) {
            var ne, fe = new Uint8Array(32), ge = new Uint8Array(64), Me = [W(), W(), W(), W()], Fe = [W(), W(), W(), W()];
            if (ee < 64 || rn(Fe, G))
                return -1;
            for (ne = 0; ne < ee; ne++)
                Q[ne] = te[ne];
            for (ne = 0; ne < 32; ne++)
                Q[ne + 32] = G[ne];
            if (Wt(ge, Q, ee),
                Lt(ge),
                Jt(Me, Fe, ge),
                Xt(Fe, te.subarray(32)),
                jt(Me, Fe),
                qt(fe, Me),
                ee -= 64,
                Ee(te, 0, fe, 0)) {
                for (ne = 0; ne < ee; ne++)
                    Q[ne] = 0;
                return -1
            }
            for (ne = 0; ne < ee; ne++)
                Q[ne] = te[ne + 64];
            return ee
        }
        var ot = 32
            , Qt = 24
            , sn = 32
            , ln = 16
            , pn = 32
            , wn = 32
            , mn = 32
            , vn = 32
            , Cn = 32
            , Sn = Qt
            , Tn = sn
            , kn = ln
            , dn = 64
            , hn = 32
            , gn = 64
            , bn = 32
            , xn = 64;
        $.lowlevel = {
            crypto_core_hsalsa20: be,
            crypto_stream_xor: Se,
            crypto_stream: de,
            crypto_stream_salsa20_xor: xe,
            crypto_stream_salsa20: ye,
            crypto_onetimeauth: ce,
            crypto_onetimeauth_verify: Oe,
            crypto_verify_16: pe,
            crypto_verify_32: Ee,
            crypto_secretbox: Ne,
            crypto_secretbox_open: He,
            crypto_scalarmult: Te,
            crypto_scalarmult_base: we,
            crypto_box_beforenm: Re,
            crypto_box_afternm: je,
            crypto_box: et,
            crypto_box_open: Mt,
            crypto_box_keypair: Ie,
            crypto_hash: Wt,
            crypto_sign: nn,
            crypto_sign_keypair: ft,
            crypto_sign_open: xt,
            crypto_secretbox_KEYBYTES: ot,
            crypto_secretbox_NONCEBYTES: Qt,
            crypto_secretbox_ZEROBYTES: sn,
            crypto_secretbox_BOXZEROBYTES: ln,
            crypto_scalarmult_BYTES: pn,
            crypto_scalarmult_SCALARBYTES: wn,
            crypto_box_PUBLICKEYBYTES: mn,
            crypto_box_SECRETKEYBYTES: vn,
            crypto_box_BEFORENMBYTES: Cn,
            crypto_box_NONCEBYTES: Sn,
            crypto_box_ZEROBYTES: Tn,
            crypto_box_BOXZEROBYTES: kn,
            crypto_sign_BYTES: dn,
            crypto_sign_PUBLICKEYBYTES: hn,
            crypto_sign_SECRETKEYBYTES: gn,
            crypto_sign_SEEDBYTES: bn,
            crypto_hash_BYTES: xn,
            gf: W,
            D: X,
            L: bt,
            pack25519: At,
            unpack25519: Vt,
            M: gt,
            A: Bt,
            S: Nt,
            Z: Ht,
            pow2523: $e,
            add: jt,
            set25519: tt,
            modL: st,
            scalarmult: Jt,
            scalarbase: Xt
        };
        function En(Q, te) {
            if (Q.length !== ot)
                throw new Error("bad key size");
            if (te.length !== Qt)
                throw new Error("bad nonce size")
        }
        function An(Q, te) {
            if (Q.length !== mn)
                throw new Error("bad public key size");
            if (te.length !== vn)
                throw new Error("bad secret key size")
        }
        function tn() {
            for (var Q = 0; Q < arguments.length; Q++)
                if (!(arguments[Q] instanceof Uint8Array))
                    throw new TypeError("unexpected type, use Uint8Array")
        }
        function $n(Q) {
            for (var te = 0; te < Q.length; te++)
                Q[te] = 0
        }
        $.randomBytes = function (Q) {
            var te = new Uint8Array(Q);
            return U(te, Q),
                te
        }
            ,
            $.secretbox = function (Q, te, ee) {
                tn(Q, te, ee),
                    En(ee, te);
                for (var G = new Uint8Array(sn + Q.length), ne = new Uint8Array(G.length), fe = 0; fe < Q.length; fe++)
                    G[fe + sn] = Q[fe];
                return Ne(ne, G, G.length, te, ee),
                    ne.subarray(ln)
            }
            ,
            $.secretbox.open = function (Q, te, ee) {
                tn(Q, te, ee),
                    En(ee, te);
                for (var G = new Uint8Array(ln + Q.length), ne = new Uint8Array(G.length), fe = 0; fe < Q.length; fe++)
                    G[fe + ln] = Q[fe];
                return G.length < 32 || He(ne, G, G.length, te, ee) !== 0 ? null : ne.subarray(sn)
            }
            ,
            $.secretbox.keyLength = ot,
            $.secretbox.nonceLength = Qt,
            $.secretbox.overheadLength = ln,
            $.scalarMult = function (Q, te) {
                if (tn(Q, te),
                    Q.length !== wn)
                    throw new Error("bad n size");
                if (te.length !== pn)
                    throw new Error("bad p size");
                var ee = new Uint8Array(pn);
                return Te(ee, Q, te),
                    ee
            }
            ,
            $.scalarMult.base = function (Q) {
                if (tn(Q),
                    Q.length !== wn)
                    throw new Error("bad n size");
                var te = new Uint8Array(pn);
                return we(te, Q),
                    te
            }
            ,
            $.scalarMult.scalarLength = wn,
            $.scalarMult.groupElementLength = pn,
            $.box = function (Q, te, ee, G) {
                var ne = $.box.before(ee, G);
                return $.secretbox(Q, te, ne)
            }
            ,
            $.box.before = function (Q, te) {
                tn(Q, te),
                    An(Q, te);
                var ee = new Uint8Array(Cn);
                return Re(ee, Q, te),
                    ee
            }
            ,
            $.box.after = $.secretbox,
            $.box.open = function (Q, te, ee, G) {
                var ne = $.box.before(ee, G);
                return $.secretbox.open(Q, te, ne)
            }
            ,
            $.box.open.after = $.secretbox.open,
            $.box.keyPair = function () {
                var Q = new Uint8Array(mn)
                    , te = new Uint8Array(vn);
                return Ie(Q, te),
                {
                    publicKey: Q,
                    secretKey: te
                }
            }
            ,
            $.box.keyPair.fromSecretKey = function (Q) {
                if (tn(Q),
                    Q.length !== vn)
                    throw new Error("bad secret key size");
                var te = new Uint8Array(mn);
                return we(te, Q),
                {
                    publicKey: te,
                    secretKey: new Uint8Array(Q)
                }
            }
            ,
            $.box.publicKeyLength = mn,
            $.box.secretKeyLength = vn,
            $.box.sharedKeyLength = Cn,
            $.box.nonceLength = Sn,
            $.box.overheadLength = $.secretbox.overheadLength,
            $.sign = function (Q, te) {
                if (tn(Q, te),
                    te.length !== gn)
                    throw new Error("bad secret key size");
                var ee = new Uint8Array(dn + Q.length);
                return nn(ee, Q, Q.length, te),
                    ee
            }
            ,
            $.sign.open = function (Q, te) {
                if (tn(Q, te),
                    te.length !== hn)
                    throw new Error("bad public key size");
                var ee = new Uint8Array(Q.length)
                    , G = xt(ee, Q, Q.length, te);
                if (G < 0)
                    return null;
                for (var ne = new Uint8Array(G), fe = 0; fe < ne.length; fe++)
                    ne[fe] = ee[fe];
                return ne
            }
            ,
            $.sign.detached = function (Q, te) {
                for (var ee = $.sign(Q, te), G = new Uint8Array(dn), ne = 0; ne < G.length; ne++)
                    G[ne] = ee[ne];
                return G
            }
            ,
            $.sign.detached.verify = function (Q, te, ee) {
                if (tn(Q, te, ee),
                    te.length !== dn)
                    throw new Error("bad signature size");
                if (ee.length !== hn)
                    throw new Error("bad public key size");
                var G = new Uint8Array(dn + Q.length), ne = new Uint8Array(dn + Q.length), fe;
                for (fe = 0; fe < dn; fe++)
                    G[fe] = te[fe];
                for (fe = 0; fe < Q.length; fe++)
                    G[fe + dn] = Q[fe];
                return xt(ne, G, G.length, ee) >= 0
            }
            ,
            $.sign.keyPair = function () {
                var Q = new Uint8Array(hn)
                    , te = new Uint8Array(gn);
                return ft(Q, te),
                {
                    publicKey: Q,
                    secretKey: te
                }
            }
            ,
            $.sign.keyPair.fromSecretKey = function (Q) {
                if (tn(Q),
                    Q.length !== gn)
                    throw new Error("bad secret key size");
                for (var te = new Uint8Array(hn), ee = 0; ee < te.length; ee++)
                    te[ee] = Q[32 + ee];
                return {
                    publicKey: te,
                    secretKey: new Uint8Array(Q)
                }
            }
            ,
            $.sign.keyPair.fromSeed = function (Q) {
                if (tn(Q),
                    Q.length !== bn)
                    throw new Error("bad seed size");
                for (var te = new Uint8Array(hn), ee = new Uint8Array(gn), G = 0; G < 32; G++)
                    ee[G] = Q[G];
                return ft(te, ee, !0),
                {
                    publicKey: te,
                    secretKey: ee
                }
            }
            ,
            $.sign.publicKeyLength = hn,
            $.sign.secretKeyLength = gn,
            $.sign.seedLength = bn,
            $.sign.signatureLength = dn,
            $.hash = function (Q) {
                tn(Q);
                var te = new Uint8Array(xn);
                return Wt(te, Q, Q.length),
                    te
            }
            ,
            $.hash.hashLength = xn,
            $.verify = function (Q, te) {
                return tn(Q, te),
                    Q.length === 0 || te.length === 0 || Q.length !== te.length ? !1 : ue(Q, 0, te, 0, Q.length) === 0
            }
            ,
            $.setPRNG = function (Q) {
                U = Q
            }
            ,
            function () {
                var Q = typeof self < "u" ? self.crypto || self.msCrypto : null;
                if (Q && Q.getRandomValues) {
                    var te = 65536;
                    $.setPRNG(function (ee, G) {
                        var ne, fe = new Uint8Array(G);
                        for (ne = 0; ne < G; ne += te)
                            Q.getRandomValues(fe.subarray(ne, ne + Math.min(G - ne, te)));
                        for (ne = 0; ne < G; ne++)
                            ee[ne] = fe[ne];
                        $n(fe)
                    })
                } else
                    typeof commonjsRequire < "u" && (Q = require$$0,
                        Q && Q.randomBytes && $.setPRNG(function (ee, G) {
                            var ne, fe = Q.randomBytes(G);
                            for (ne = 0; ne < G; ne++)
                                ee[ne] = fe[ne];
                            $n(fe)
                        }))
            }()
    }
    )(R.exports ? R.exports : self.nacl = self.nacl || {})
}
)(naclFast);
var naclFastExports = naclFast.exports;
const nacl$1 = getDefaultExportFromCjs(naclFastExports);
var CONNECT_EVENT_ERROR_CODES;
(function (R) {
    R[R.UNKNOWN_ERROR = 0] = "UNKNOWN_ERROR",
        R[R.BAD_REQUEST_ERROR = 1] = "BAD_REQUEST_ERROR",
        R[R.MANIFEST_NOT_FOUND_ERROR = 2] = "MANIFEST_NOT_FOUND_ERROR",
        R[R.MANIFEST_CONTENT_ERROR = 3] = "MANIFEST_CONTENT_ERROR",
        R[R.UNKNOWN_APP_ERROR = 100] = "UNKNOWN_APP_ERROR",
        R[R.USER_REJECTS_ERROR = 300] = "USER_REJECTS_ERROR",
        R[R.METHOD_NOT_SUPPORTED = 400] = "METHOD_NOT_SUPPORTED"
}
)(CONNECT_EVENT_ERROR_CODES || (CONNECT_EVENT_ERROR_CODES = {}));
var CONNECT_ITEM_ERROR_CODES;
(function (R) {
    R[R.UNKNOWN_ERROR = 0] = "UNKNOWN_ERROR",
        R[R.METHOD_NOT_SUPPORTED = 400] = "METHOD_NOT_SUPPORTED"
}
)(CONNECT_ITEM_ERROR_CODES || (CONNECT_ITEM_ERROR_CODES = {}));
var SEND_TRANSACTION_ERROR_CODES;
(function (R) {
    R[R.UNKNOWN_ERROR = 0] = "UNKNOWN_ERROR",
        R[R.BAD_REQUEST_ERROR = 1] = "BAD_REQUEST_ERROR",
        R[R.UNKNOWN_APP_ERROR = 100] = "UNKNOWN_APP_ERROR",
        R[R.USER_REJECTS_ERROR = 300] = "USER_REJECTS_ERROR",
        R[R.METHOD_NOT_SUPPORTED = 400] = "METHOD_NOT_SUPPORTED"
}
)(SEND_TRANSACTION_ERROR_CODES || (SEND_TRANSACTION_ERROR_CODES = {}));
var SIGN_DATA_ERROR_CODES;
(function (R) {
    R[R.UNKNOWN_ERROR = 0] = "UNKNOWN_ERROR",
        R[R.BAD_REQUEST_ERROR = 1] = "BAD_REQUEST_ERROR",
        R[R.UNKNOWN_APP_ERROR = 100] = "UNKNOWN_APP_ERROR",
        R[R.USER_REJECTS_ERROR = 300] = "USER_REJECTS_ERROR",
        R[R.METHOD_NOT_SUPPORTED = 400] = "METHOD_NOT_SUPPORTED"
}
)(SIGN_DATA_ERROR_CODES || (SIGN_DATA_ERROR_CODES = {}));
var DISCONNECT_ERROR_CODES;
(function (R) {
    R[R.UNKNOWN_ERROR = 0] = "UNKNOWN_ERROR",
        R[R.BAD_REQUEST_ERROR = 1] = "BAD_REQUEST_ERROR",
        R[R.UNKNOWN_APP_ERROR = 100] = "UNKNOWN_APP_ERROR",
        R[R.METHOD_NOT_SUPPORTED = 400] = "METHOD_NOT_SUPPORTED"
}
)(DISCONNECT_ERROR_CODES || (DISCONNECT_ERROR_CODES = {}));
var CHAIN;
(function (R) {
    R.MAINNET = "-239",
        R.TESTNET = "-3"
}
)(CHAIN || (CHAIN = {}));
function encodeUint8Array(R, $) {
    const W = nacl.encodeBase64(R);
    return $ ? encodeURIComponent(W) : W
}
function decodeToUint8Array(R, $) {
    return $ && (R = decodeURIComponent(R)),
        nacl.decodeBase64(R)
}
function encode(R, $ = !1) {
    let W;
    return R instanceof Uint8Array ? W = R : (typeof R != "string" && (R = JSON.stringify(R)),
        W = nacl.decodeUTF8(R)),
        encodeUint8Array(W, $)
}
function decode(R, $ = !1) {
    const W = decodeToUint8Array(R, $);
    return {
        toString() {
            return nacl.encodeUTF8(W)
        },
        toObject() {
            try {
                return JSON.parse(nacl.encodeUTF8(W))
            } catch {
                return null
            }
        },
        toUint8Array() {
            return W
        }
    }
}
const Base64 = {
    encode,
    decode
};
function concatUint8Arrays(R, $) {
    const W = new Uint8Array(R.length + $.length);
    return W.set(R),
        W.set($, R.length),
        W
}
function splitToUint8Arrays(R, $) {
    if ($ >= R.length)
        throw new Error("Index is out of buffer");
    const W = R.slice(0, $)
        , U = R.slice($);
    return [W, U]
}
function toHexString(R) {
    let $ = "";
    return R.forEach(W => {
        $ += ("0" + (W & 255).toString(16)).slice(-2)
    }
    ),
        $
}
function hexToByteArray(R) {
    if (R.length % 2 !== 0)
        throw new Error(`Cannot convert ${R} to bytesArray`);
    const $ = new Uint8Array(R.length / 2);
    for (let W = 0; W < R.length; W += 2)
        $[W / 2] = parseInt(R.slice(W, W + 2), 16);
    return $
}
class SessionCrypto {
    constructor($) {
        this.nonceLength = 24,
            this.keyPair = $ ? this.createKeypairFromString($) : this.createKeypair(),
            this.sessionId = toHexString(this.keyPair.publicKey)
    }
    createKeypair() {
        return nacl$1.box.keyPair()
    }
    createKeypairFromString($) {
        return {
            publicKey: hexToByteArray($.publicKey),
            secretKey: hexToByteArray($.secretKey)
        }
    }
    createNonce() {
        return nacl$1.randomBytes(this.nonceLength)
    }
    encrypt($, W) {
        const U = new TextEncoder().encode($)
            , V = this.createNonce()
            , K = nacl$1.box(U, V, W, this.keyPair.secretKey);
        return concatUint8Arrays(V, K)
    }
    decrypt($, W) {
        const [U, V] = splitToUint8Arrays($, this.nonceLength)
            , K = nacl$1.box.open(V, U, W, this.keyPair.secretKey);
        if (!K)
            throw new Error(`Decryption error: 
 message: ${$.toString()} 
 sender pubkey: ${W.toString()} 
 keypair pubkey: ${this.keyPair.publicKey.toString()} 
 keypair secretkey: ${this.keyPair.secretKey.toString()}`);
        return new TextDecoder().decode(K)
    }
    stringifyKeypair() {
        return {
            publicKey: toHexString(this.keyPair.publicKey),
            secretKey: toHexString(this.keyPair.secretKey)
        }
    }
}
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function __rest(R, $) {
    var W = {};
    for (var U in R)
        Object.prototype.hasOwnProperty.call(R, U) && $.indexOf(U) < 0 && (W[U] = R[U]);
    if (R != null && typeof Object.getOwnPropertySymbols == "function")
        for (var V = 0, U = Object.getOwnPropertySymbols(R); V < U.length; V++)
            $.indexOf(U[V]) < 0 && Object.prototype.propertyIsEnumerable.call(R, U[V]) && (W[U[V]] = R[U[V]]);
    return W
}
function __awaiter(R, $, W, U) {
    function V(K) {
        return K instanceof W ? K : new W(function (Y) {
            Y(K)
        }
        )
    }
    return new (W || (W = Promise))(function (K, Y) {
        function Z(re) {
            try {
                X(U.next(re))
            } catch (oe) {
                Y(oe)
            }
        }
        function J(re) {
            try {
                X(U.throw(re))
            } catch (oe) {
                Y(oe)
            }
        }
        function X(re) {
            re.done ? K(re.value) : V(re.value).then(Z, J)
        }
        X((U = U.apply(R, $ || [])).next())
    }
    )
}
class TonConnectError extends Error {
    constructor($, W) {
        super($, W),
            this.message = `${TonConnectError.prefix} ${this.constructor.name}${this.info ? ": " + this.info : ""}${$ ? `
` + $ : ""}`,
            Object.setPrototypeOf(this, TonConnectError.prototype)
    }
    get info() {
        return ""
    }
}
TonConnectError.prefix = "[TON_CONNECT_SDK_ERROR]";
class DappMetadataError extends TonConnectError {
    get info() {
        return "Passed DappMetadata is in incorrect format."
    }
    constructor(...$) {
        super(...$),
            Object.setPrototypeOf(this, DappMetadataError.prototype)
    }
}
class ManifestContentErrorError extends TonConnectError {
    get info() {
        return "Passed `tonconnect-manifest.json` contains errors. Check format of your manifest. See more https://github.com/ton-connect/docs/blob/main/requests-responses.md#app-manifest"
    }
    constructor(...$) {
        super(...$),
            Object.setPrototypeOf(this, ManifestContentErrorError.prototype)
    }
}
class ManifestNotFoundError extends TonConnectError {
    get info() {
        return "Manifest not found. Make sure you added `tonconnect-manifest.json` to the root of your app or passed correct manifestUrl. See more https://github.com/ton-connect/docs/blob/main/requests-responses.md#app-manifest"
    }
    constructor(...$) {
        super(...$),
            Object.setPrototypeOf(this, ManifestNotFoundError.prototype)
    }
}
class WalletAlreadyConnectedError extends TonConnectError {
    get info() {
        return "Wallet connection called but wallet already connected. To avoid the error, disconnect the wallet before doing a new connection."
    }
    constructor(...$) {
        super(...$),
            Object.setPrototypeOf(this, WalletAlreadyConnectedError.prototype)
    }
}
class WalletNotConnectedError extends TonConnectError {
    get info() {
        return "Send transaction or other protocol methods called while wallet is not connected."
    }
    constructor(...$) {
        super(...$),
            Object.setPrototypeOf(this, WalletNotConnectedError.prototype)
    }
}
function isWalletConnectionSourceJS(R) {
    return "jsBridgeKey" in R
}
class UserRejectsError extends TonConnectError {
    get info() {
        return "User rejects the action in the wallet."
    }
    constructor(...$) {
        super(...$),
            Object.setPrototypeOf(this, UserRejectsError.prototype)
    }
}
class BadRequestError extends TonConnectError {
    get info() {
        return "Request to the wallet contains errors."
    }
    constructor(...$) {
        super(...$),
            Object.setPrototypeOf(this, BadRequestError.prototype)
    }
}
class UnknownAppError extends TonConnectError {
    get info() {
        return "App tries to send rpc request to the injected wallet while not connected."
    }
    constructor(...$) {
        super(...$),
            Object.setPrototypeOf(this, UnknownAppError.prototype)
    }
}
class WalletNotInjectedError extends TonConnectError {
    get info() {
        return "There is an attempt to connect to the injected wallet while it is not exists in the webpage."
    }
    constructor(...$) {
        super(...$),
            Object.setPrototypeOf(this, WalletNotInjectedError.prototype)
    }
}
class FetchWalletsError extends TonConnectError {
    get info() {
        return "An error occurred while fetching the wallets list."
    }
    constructor(...$) {
        super(...$),
            Object.setPrototypeOf(this, FetchWalletsError.prototype)
    }
}
class WrongAddressError extends TonConnectError {
    get info() {
        return "Passed address is in incorrect format."
    }
    constructor(...$) {
        super(...$),
            Object.setPrototypeOf(this, WrongAddressError.prototype)
    }
}
class ParseHexError extends TonConnectError {
    get info() {
        return "Passed hex is in incorrect format."
    }
    constructor(...$) {
        super(...$),
            Object.setPrototypeOf(this, ParseHexError.prototype)
    }
}
class UnknownError extends TonConnectError {
    constructor(...$) {
        super(...$),
            Object.setPrototypeOf(this, UnknownError.prototype)
    }
}
const connectEventErrorsCodes = {
    [CONNECT_EVENT_ERROR_CODES.UNKNOWN_ERROR]: UnknownError,
    [CONNECT_EVENT_ERROR_CODES.USER_REJECTS_ERROR]: UserRejectsError,
    [CONNECT_EVENT_ERROR_CODES.BAD_REQUEST_ERROR]: BadRequestError,
    [CONNECT_EVENT_ERROR_CODES.UNKNOWN_APP_ERROR]: UnknownAppError,
    [CONNECT_EVENT_ERROR_CODES.MANIFEST_NOT_FOUND_ERROR]: ManifestNotFoundError,
    [CONNECT_EVENT_ERROR_CODES.MANIFEST_CONTENT_ERROR]: ManifestContentErrorError
};
class ConnectErrorsParser {
    parseError($) {
        let W = UnknownError;
        return $.code in connectEventErrorsCodes && (W = connectEventErrorsCodes[$.code] || UnknownError),
            new W($.message)
    }
}
const connectErrorsParser = new ConnectErrorsParser;
class RpcParser {
    isError($) {
        return "error" in $
    }
}
const sendTransactionErrors = {
    [SEND_TRANSACTION_ERROR_CODES.UNKNOWN_ERROR]: UnknownError,
    [SEND_TRANSACTION_ERROR_CODES.USER_REJECTS_ERROR]: UserRejectsError,
    [SEND_TRANSACTION_ERROR_CODES.BAD_REQUEST_ERROR]: BadRequestError,
    [SEND_TRANSACTION_ERROR_CODES.UNKNOWN_APP_ERROR]: UnknownAppError
};
class SendTransactionParser extends RpcParser {
    convertToRpcRequest($) {
        return {
            method: "sendTransaction",
            params: [JSON.stringify($)]
        }
    }
    parseAndThrowError($) {
        let W = UnknownError;
        throw $.error.code in sendTransactionErrors && (W = sendTransactionErrors[$.error.code] || UnknownError),
        new W($.error.message)
    }
    convertFromRpcResponse($) {
        return {
            boc: $.result
        }
    }
}
const sendTransactionParser = new SendTransactionParser;
class HttpBridgeGatewayStorage {
    constructor($, W) {
        this.storage = $,
            this.storeKey = "ton-connect-storage_http-bridge-gateway::" + W
    }
    storeLastEventId($) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.storage.setItem(this.storeKey, $)
        })
    }
    removeLastEventId() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.storage.removeItem(this.storeKey)
        })
    }
    getLastEventId() {
        return __awaiter(this, void 0, void 0, function* () {
            const $ = yield this.storage.getItem(this.storeKey);
            return $ || null
        })
    }
}
function removeUrlLastSlash(R) {
    return R.slice(-1) === "/" ? R.slice(0, -1) : R
}
function addPathToUrl(R, $) {
    return removeUrlLastSlash(R) + "/" + $
}
function isTelegramUrl(R) {
    if (!R)
        return !1;
    const $ = new URL(R);
    return $.protocol === "tg:" || $.hostname === "t.me"
}
function encodeTelegramUrlParameters(R) {
    return R.replaceAll(".", "%2E").replaceAll("-", "%2D").replaceAll("_", "%5F").replaceAll("&", "-").replaceAll("=", "__").replaceAll("%", "--")
}
function delay(R, $) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((W, U) => {
            var V, K;
            if (!((V = $ == null ? void 0 : $.signal) === null || V === void 0) && V.aborted) {
                U(new TonConnectError("Delay aborted"));
                return
            }
            const Y = setTimeout(() => W(), R);
            (K = $ == null ? void 0 : $.signal) === null || K === void 0 || K.addEventListener("abort", () => {
                clearTimeout(Y),
                    U(new TonConnectError("Delay aborted"))
            }
            )
        }
        )
    })
}
function createAbortController(R) {
    const $ = new AbortController;
    return R != null && R.aborted ? $.abort() : R == null || R.addEventListener("abort", () => $.abort(), {
        once: !0
    }),
        $
}
function callForSuccess(R, $) {
    var W, U;
    return __awaiter(this, void 0, void 0, function* () {
        const V = (W = $ == null ? void 0 : $.attempts) !== null && W !== void 0 ? W : 10
            , K = (U = $ == null ? void 0 : $.delayMs) !== null && U !== void 0 ? U : 200
            , Y = createAbortController($ == null ? void 0 : $.signal);
        if (typeof R != "function")
            throw new TonConnectError(`Expected a function, got ${typeof R}`);
        let Z = 0, J;
        for (; Z < V;) {
            if (Y.signal.aborted)
                throw new TonConnectError(`Aborted after attempts ${Z}`);
            try {
                return yield R({
                    signal: Y.signal
                })
            } catch (X) {
                J = X,
                    Z++,
                    Z < V && (yield delay(K))
            }
        }
        throw J
    })
}
function logDebug$1(...R) {
    try {
        console.debug("[TON_CONNECT_SDK]", ...R)
    } catch { }
}
function logError$1(...R) {
    try {
        console.error("[TON_CONNECT_SDK]", ...R)
    } catch { }
}
function logWarning$1(...R) {
    try {
        console.warn("[TON_CONNECT_SDK]", ...R)
    } catch { }
}
function createResource$1(R, $) {
    let W = null
        , U = null
        , V = null
        , K = null
        , Y = null;
    const Z = (oe, ...ie) => __awaiter(this, void 0, void 0, function* () {
        if (K = oe ?? null,
            Y == null || Y.abort(),
            Y = createAbortController(oe),
            Y.signal.aborted)
            throw new TonConnectError("Resource creation was aborted");
        U = ie ?? null;
        const se = R(Y.signal, ...ie);
        V = se;
        const le = yield se;
        if (V !== se && le !== W)
            throw yield $(le),
            new TonConnectError("Resource creation was aborted by a new resource creation");
        return W = le,
            W
    });
    return {
        create: Z,
        current: () => W ?? null,
        dispose: () => __awaiter(this, void 0, void 0, function* () {
            try {
                const oe = W;
                W = null;
                const ie = V;
                V = null;
                try {
                    Y == null || Y.abort()
                } catch { }
                yield Promise.allSettled([oe ? $(oe) : Promise.resolve(), ie ? $(yield ie) : Promise.resolve()])
            } catch { }
        }),
        recreate: oe => __awaiter(this, void 0, void 0, function* () {
            const ie = W
                , se = V
                , le = U
                , ue = K;
            if (yield delay(oe),
                ie === W && se === V && le === U && ue === K)
                return yield Z(K, ...le ?? []);
            throw new TonConnectError("Resource recreation was aborted by a new resource creation")
        })
    }
}
function timeout(R, $) {
    const W = $ == null ? void 0 : $.timeout
        , U = $ == null ? void 0 : $.signal
        , V = createAbortController(U);
    return new Promise((K, Y) => {
        if (V.signal.aborted) {
            Y(new TonConnectError("Operation aborted"));
            return
        }
        let Z;
        typeof W < "u" && (Z = setTimeout(() => {
            V.abort(),
                Y(new TonConnectError(`Timeout after ${W}ms`))
        }
            , W)),
            V.signal.addEventListener("abort", () => {
                clearTimeout(Z),
                    Y(new TonConnectError("Operation aborted"))
            }
                , {
                    once: !0
                });
        const J = {
            timeout: W,
            abort: V.signal
        };
        R(K, Y, J).finally(() => clearTimeout(Z))
    }
    )
}
class BridgeGateway {
    constructor($, W, U, V, K) {
        this.bridgeUrl = W,
            this.sessionId = U,
            this.listener = V,
            this.errorsListener = K,
            this.ssePath = "events",
            this.postPath = "message",
            this.heartbeatMessage = "heartbeat",
            this.defaultTtl = 300,
            this.defaultReconnectDelay = 5e3,
            this.eventSource = createResource$1((Y, Z) => __awaiter(this, void 0, void 0, function* () {
                const J = {
                    bridgeUrl: this.bridgeUrl,
                    ssePath: this.ssePath,
                    sessionId: this.sessionId,
                    bridgeGatewayStorage: this.bridgeGatewayStorage,
                    errorHandler: this.errorsHandler.bind(this),
                    messageHandler: this.messagesHandler.bind(this),
                    signal: Y,
                    openingDeadlineMS: Z
                };
                return yield createEventSource(J)
            }), Y => __awaiter(this, void 0, void 0, function* () {
                Y.close()
            })),
            this.bridgeGatewayStorage = new HttpBridgeGatewayStorage($, W)
    }
    get isReady() {
        const $ = this.eventSource.current();
        return ($ == null ? void 0 : $.readyState) === EventSource.OPEN
    }
    get isClosed() {
        const $ = this.eventSource.current();
        return ($ == null ? void 0 : $.readyState) !== EventSource.OPEN
    }
    get isConnecting() {
        const $ = this.eventSource.current();
        return ($ == null ? void 0 : $.readyState) === EventSource.CONNECTING
    }
    registerSession($) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.eventSource.create($ == null ? void 0 : $.signal, $ == null ? void 0 : $.openingDeadlineMS)
        })
    }
    send($, W, U, V) {
        var K;
        return __awaiter(this, void 0, void 0, function* () {
            const Y = {};
            typeof V == "number" ? Y.ttl = V : (Y.ttl = V == null ? void 0 : V.ttl,
                Y.signal = V == null ? void 0 : V.signal,
                Y.attempts = V == null ? void 0 : V.attempts);
            const Z = new URL(addPathToUrl(this.bridgeUrl, this.postPath));
            Z.searchParams.append("client_id", this.sessionId),
                Z.searchParams.append("to", W),
                Z.searchParams.append("ttl", ((Y == null ? void 0 : Y.ttl) || this.defaultTtl).toString()),
                Z.searchParams.append("topic", U);
            const J = Base64.encode($);
            yield callForSuccess(X => __awaiter(this, void 0, void 0, function* () {
                const re = yield this.post(Z, J, X.signal);
                if (!re.ok)
                    throw new TonConnectError(`Bridge send failed, status ${re.status}`)
            }), {
                attempts: (K = Y == null ? void 0 : Y.attempts) !== null && K !== void 0 ? K : Number.MAX_SAFE_INTEGER,
                delayMs: 5e3,
                signal: Y == null ? void 0 : Y.signal
            })
        })
    }
    pause() {
        this.eventSource.dispose().catch($ => logError$1(`Bridge pause failed, ${$}`))
    }
    unPause() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.eventSource.recreate(0)
        })
    }
    close() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.eventSource.dispose().catch($ => logError$1(`Bridge close failed, ${$}`))
        })
    }
    setListener($) {
        this.listener = $
    }
    setErrorsListener($) {
        this.errorsListener = $
    }
    post($, W, U) {
        return __awaiter(this, void 0, void 0, function* () {
            const V = yield fetch($, {
                method: "post",
                body: W,
                signal: U
            });
            if (!V.ok)
                throw new TonConnectError(`Bridge send failed, status ${V.status}`);
            return V
        })
    }
    errorsHandler($, W) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.isConnecting) {
                logError$1("Bridge error", JSON.stringify(W));
                return
            }
            if (this.isReady) {
                try {
                    this.errorsListener(W)
                } catch { }
                return
            }
            if (this.isClosed)
                return $.close(),
                    logDebug$1(`Bridge reconnecting, ${this.defaultReconnectDelay}ms delay`),
                    yield this.eventSource.recreate(this.defaultReconnectDelay);
            throw new TonConnectError("Bridge error, unknown state")
        })
    }
    messagesHandler($) {
        return __awaiter(this, void 0, void 0, function* () {
            if ($.data === this.heartbeatMessage || (yield this.bridgeGatewayStorage.storeLastEventId($.lastEventId),
                this.isClosed))
                return;
            let W;
            try {
                W = JSON.parse($.data)
            } catch (U) {
                throw new TonConnectError(`Bridge message parse failed, message ${U.data}`)
            }
            this.listener(W)
        })
    }
}
function createEventSource(R) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield timeout(($, W, U) => __awaiter(this, void 0, void 0, function* () {
            var V;
            const Y = createAbortController(U.signal).signal;
            if (Y.aborted) {
                W(new TonConnectError("Bridge connection aborted"));
                return
            }
            const Z = new URL(addPathToUrl(R.bridgeUrl, R.ssePath));
            Z.searchParams.append("client_id", R.sessionId);
            const J = yield R.bridgeGatewayStorage.getLastEventId();
            if (J && Z.searchParams.append("last_event_id", J),
                Y.aborted) {
                W(new TonConnectError("Bridge connection aborted"));
                return
            }
            const X = new EventSource(Z.toString());
            X.onerror = re => __awaiter(this, void 0, void 0, function* () {
                if (Y.aborted) {
                    X.close(),
                        W(new TonConnectError("Bridge connection aborted"));
                    return
                }
                try {
                    const oe = yield R.errorHandler(X, re);
                    oe !== X && X.close(),
                        oe && oe !== X && $(oe)
                } catch (oe) {
                    X.close(),
                        W(oe)
                }
            }),
                X.onopen = () => {
                    if (Y.aborted) {
                        X.close(),
                            W(new TonConnectError("Bridge connection aborted"));
                        return
                    }
                    $(X)
                }
                ,
                X.onmessage = re => {
                    if (Y.aborted) {
                        X.close(),
                            W(new TonConnectError("Bridge connection aborted"));
                        return
                    }
                    R.messageHandler(re)
                }
                ,
                (V = R.signal) === null || V === void 0 || V.addEventListener("abort", () => {
                    X.close(),
                        W(new TonConnectError("Bridge connection aborted"))
                }
                )
        }), {
            timeout: R.openingDeadlineMS,
            signal: R.signal
        })
    })
}
function isPendingConnectionHttp(R) {
    return !("connectEvent" in R)
}
class BridgeConnectionStorage {
    constructor($) {
        this.storage = $,
            this.storeKey = "ton-connect-storage_bridge-connection"
    }
    storeConnection($) {
        return __awaiter(this, void 0, void 0, function* () {
            if ($.type === "injected")
                return this.storage.setItem(this.storeKey, JSON.stringify($));
            if (!isPendingConnectionHttp($)) {
                const U = {
                    sessionKeyPair: $.session.sessionCrypto.stringifyKeypair(),
                    walletPublicKey: $.session.walletPublicKey,
                    bridgeUrl: $.session.bridgeUrl
                }
                    , V = {
                        type: "http",
                        connectEvent: $.connectEvent,
                        session: U,
                        lastWalletEventId: $.lastWalletEventId,
                        nextRpcRequestId: $.nextRpcRequestId
                    };
                return this.storage.setItem(this.storeKey, JSON.stringify(V))
            }
            const W = {
                type: "http",
                connectionSource: $.connectionSource,
                sessionCrypto: $.sessionCrypto.stringifyKeypair()
            };
            return this.storage.setItem(this.storeKey, JSON.stringify(W))
        })
    }
    removeConnection() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.storage.removeItem(this.storeKey)
        })
    }
    getConnection() {
        return __awaiter(this, void 0, void 0, function* () {
            const $ = yield this.storage.getItem(this.storeKey);
            if (!$)
                return null;
            const W = JSON.parse($);
            if (W.type === "injected")
                return W;
            if ("connectEvent" in W) {
                const U = new SessionCrypto(W.session.sessionKeyPair);
                return {
                    type: "http",
                    connectEvent: W.connectEvent,
                    lastWalletEventId: W.lastWalletEventId,
                    nextRpcRequestId: W.nextRpcRequestId,
                    session: {
                        sessionCrypto: U,
                        bridgeUrl: W.session.bridgeUrl,
                        walletPublicKey: W.session.walletPublicKey
                    }
                }
            }
            return {
                type: "http",
                sessionCrypto: new SessionCrypto(W.sessionCrypto),
                connectionSource: W.connectionSource
            }
        })
    }
    getHttpConnection() {
        return __awaiter(this, void 0, void 0, function* () {
            const $ = yield this.getConnection();
            if (!$)
                throw new TonConnectError("Trying to read HTTP connection source while nothing is stored");
            if ($.type === "injected")
                throw new TonConnectError("Trying to read HTTP connection source while injected connection is stored");
            return $
        })
    }
    getHttpPendingConnection() {
        return __awaiter(this, void 0, void 0, function* () {
            const $ = yield this.getConnection();
            if (!$)
                throw new TonConnectError("Trying to read HTTP connection source while nothing is stored");
            if ($.type === "injected")
                throw new TonConnectError("Trying to read HTTP connection source while injected connection is stored");
            if (!isPendingConnectionHttp($))
                throw new TonConnectError("Trying to read HTTP-pending connection while http connection is stored");
            return $
        })
    }
    getInjectedConnection() {
        return __awaiter(this, void 0, void 0, function* () {
            const $ = yield this.getConnection();
            if (!$)
                throw new TonConnectError("Trying to read Injected bridge connection source while nothing is stored");
            if (($ == null ? void 0 : $.type) === "http")
                throw new TonConnectError("Trying to read Injected bridge connection source while HTTP connection is stored");
            return $
        })
    }
    storedConnectionType() {
        return __awaiter(this, void 0, void 0, function* () {
            const $ = yield this.storage.getItem(this.storeKey);
            return $ ? JSON.parse($).type : null
        })
    }
    storeLastWalletEventId($) {
        return __awaiter(this, void 0, void 0, function* () {
            const W = yield this.getConnection();
            if (W && W.type === "http" && !isPendingConnectionHttp(W))
                return W.lastWalletEventId = $,
                    this.storeConnection(W)
        })
    }
    getLastWalletEventId() {
        return __awaiter(this, void 0, void 0, function* () {
            const $ = yield this.getConnection();
            if ($ && "lastWalletEventId" in $)
                return $.lastWalletEventId
        })
    }
    increaseNextRpcRequestId() {
        return __awaiter(this, void 0, void 0, function* () {
            const $ = yield this.getConnection();
            if ($ && "nextRpcRequestId" in $) {
                const W = $.nextRpcRequestId || 0;
                return $.nextRpcRequestId = W + 1,
                    this.storeConnection($)
            }
        })
    }
    getNextRpcRequestId() {
        return __awaiter(this, void 0, void 0, function* () {
            const $ = yield this.getConnection();
            return $ && "nextRpcRequestId" in $ && $.nextRpcRequestId || 0
        })
    }
}
const PROTOCOL_VERSION = 2;
class BridgeProvider {
    constructor($, W) {
        this.storage = $,
            this.walletConnectionSource = W,
            this.type = "http",
            this.standardUniversalLink = "tc://",
            this.pendingRequests = new Map,
            this.session = null,
            this.gateway = null,
            this.pendingGateways = [],
            this.listeners = [],
            this.defaultOpeningDeadlineMS = 5e3,
            this.connectionStorage = new BridgeConnectionStorage($)
    }
    static fromStorage($) {
        return __awaiter(this, void 0, void 0, function* () {
            const U = yield new BridgeConnectionStorage($).getHttpConnection();
            return isPendingConnectionHttp(U) ? new BridgeProvider($, U.connectionSource) : new BridgeProvider($, {
                bridgeUrl: U.session.bridgeUrl
            })
        })
    }
    connect($, W) {
        var U;
        const V = createAbortController(W == null ? void 0 : W.signal);
        (U = this.abortController) === null || U === void 0 || U.abort(),
            this.abortController = V,
            this.closeGateways();
        const K = new SessionCrypto;
        this.session = {
            sessionCrypto: K,
            bridgeUrl: "bridgeUrl" in this.walletConnectionSource ? this.walletConnectionSource.bridgeUrl : ""
        },
            this.connectionStorage.storeConnection({
                type: "http",
                connectionSource: this.walletConnectionSource,
                sessionCrypto: K
            }).then(() => __awaiter(this, void 0, void 0, function* () {
                V.signal.aborted || (yield callForSuccess(Z => this.openGateways(K, {
                    openingDeadlineMS: W == null ? void 0 : W.openingDeadlineMS,
                    signal: Z == null ? void 0 : Z.signal
                }), {
                    attempts: Number.MAX_SAFE_INTEGER,
                    delayMs: 5e3,
                    signal: V.signal
                }))
            }));
        const Y = "universalLink" in this.walletConnectionSource && this.walletConnectionSource.universalLink ? this.walletConnectionSource.universalLink : this.standardUniversalLink;
        return this.generateUniversalLink(Y, $)
    }
    restoreConnection($) {
        var W, U;
        return __awaiter(this, void 0, void 0, function* () {
            const V = createAbortController($ == null ? void 0 : $.signal);
            if ((W = this.abortController) === null || W === void 0 || W.abort(),
                this.abortController = V,
                V.signal.aborted)
                return;
            this.closeGateways();
            const K = yield this.connectionStorage.getHttpConnection();
            if (!K || V.signal.aborted)
                return;
            const Y = (U = $ == null ? void 0 : $.openingDeadlineMS) !== null && U !== void 0 ? U : this.defaultOpeningDeadlineMS;
            if (isPendingConnectionHttp(K))
                return this.session = {
                    sessionCrypto: K.sessionCrypto,
                    bridgeUrl: "bridgeUrl" in this.walletConnectionSource ? this.walletConnectionSource.bridgeUrl : ""
                },
                    yield this.openGateways(K.sessionCrypto, {
                        openingDeadlineMS: Y,
                        signal: V == null ? void 0 : V.signal
                    });
            if (Array.isArray(this.walletConnectionSource))
                throw new TonConnectError("Internal error. Connection source is array while WalletConnectionSourceHTTP was expected.");
            if (this.session = K.session,
                this.gateway && (logDebug$1("Gateway is already opened, closing previous gateway"),
                    yield this.gateway.close()),
                this.gateway = new BridgeGateway(this.storage, this.walletConnectionSource.bridgeUrl, K.session.sessionCrypto.sessionId, this.gatewayListener.bind(this), this.gatewayErrorsListener.bind(this)),
                !V.signal.aborted) {
                this.listeners.forEach(Z => Z(K.connectEvent));
                try {
                    yield callForSuccess(Z => this.gateway.registerSession({
                        openingDeadlineMS: Y,
                        signal: Z.signal
                    }), {
                        attempts: Number.MAX_SAFE_INTEGER,
                        delayMs: 5e3,
                        signal: V.signal
                    })
                } catch {
                    yield this.disconnect({
                        signal: V.signal
                    });
                    return
                }
            }
        })
    }
    sendRequest($, W) {
        const U = {};
        return typeof W == "function" ? U.onRequestSent = W : (U.onRequestSent = W == null ? void 0 : W.onRequestSent,
            U.signal = W == null ? void 0 : W.signal,
            U.attempts = W == null ? void 0 : W.attempts),
            new Promise((V, K) => __awaiter(this, void 0, void 0, function* () {
                var Y;
                if (!this.gateway || !this.session || !("walletPublicKey" in this.session))
                    throw new TonConnectError("Trying to send bridge request without session");
                const Z = (yield this.connectionStorage.getNextRpcRequestId()).toString();
                yield this.connectionStorage.increaseNextRpcRequestId(),
                    logDebug$1("Send http-bridge request:", Object.assign(Object.assign({}, $), {
                        id: Z
                    }));
                const J = this.session.sessionCrypto.encrypt(JSON.stringify(Object.assign(Object.assign({}, $), {
                    id: Z
                })), hexToByteArray(this.session.walletPublicKey));
                try {
                    yield this.gateway.send(J, this.session.walletPublicKey, $.method, {
                        attempts: U == null ? void 0 : U.attempts,
                        signal: U == null ? void 0 : U.signal
                    }),
                        (Y = U == null ? void 0 : U.onRequestSent) === null || Y === void 0 || Y.call(U),
                        this.pendingRequests.set(Z.toString(), V)
                } catch (X) {
                    K(X)
                }
            }))
    }
    closeConnection() {
        this.closeGateways(),
            this.listeners = [],
            this.session = null,
            this.gateway = null
    }
    disconnect($) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise(W => __awaiter(this, void 0, void 0, function* () {
                let U = !1
                    , V = null;
                const K = () => {
                    U || (U = !0,
                        this.removeBridgeAndSession().then(W))
                }
                    ;
                try {
                    this.closeGateways();
                    const Y = createAbortController($ == null ? void 0 : $.signal);
                    V = setTimeout(() => {
                        Y.abort()
                    }
                        , this.defaultOpeningDeadlineMS),
                        yield this.sendRequest({
                            method: "disconnect",
                            params: []
                        }, {
                            onRequestSent: K,
                            signal: Y.signal,
                            attempts: 1
                        })
                } catch (Y) {
                    logDebug$1("Disconnect error:", Y),
                        U || this.removeBridgeAndSession().then(W)
                } finally {
                    V && clearTimeout(V),
                        K()
                }
            }))
        })
    }
    listen($) {
        return this.listeners.push($),
            () => this.listeners = this.listeners.filter(W => W !== $)
    }
    pause() {
        var $;
        ($ = this.gateway) === null || $ === void 0 || $.pause(),
            this.pendingGateways.forEach(W => W.pause())
    }
    unPause() {
        return __awaiter(this, void 0, void 0, function* () {
            const $ = this.pendingGateways.map(W => W.unPause());
            this.gateway && $.push(this.gateway.unPause()),
                yield Promise.all($)
        })
    }
    pendingGatewaysListener($, W, U) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.pendingGateways.includes($)) {
                yield $.close();
                return
            }
            return this.closeGateways({
                except: $
            }),
                this.gateway && (logDebug$1("Gateway is already opened, closing previous gateway"),
                    yield this.gateway.close()),
                this.session.bridgeUrl = W,
                this.gateway = $,
                this.gateway.setErrorsListener(this.gatewayErrorsListener.bind(this)),
                this.gateway.setListener(this.gatewayListener.bind(this)),
                this.gatewayListener(U)
        })
    }
    gatewayListener($) {
        return __awaiter(this, void 0, void 0, function* () {
            const W = JSON.parse(this.session.sessionCrypto.decrypt(Base64.decode($.message).toUint8Array(), hexToByteArray($.from)));
            if (logDebug$1("Wallet message received:", W),
                !("event" in W)) {
                const V = W.id.toString()
                    , K = this.pendingRequests.get(V);
                if (!K) {
                    logDebug$1(`Response id ${V} doesn't match any request's id`);
                    return
                }
                K(W),
                    this.pendingRequests.delete(V);
                return
            }
            if (W.id !== void 0) {
                const V = yield this.connectionStorage.getLastWalletEventId();
                if (V !== void 0 && W.id <= V) {
                    logError$1(`Received event id (=${W.id}) must be greater than stored last wallet event id (=${V}) `);
                    return
                }
                W.event !== "connect" && (yield this.connectionStorage.storeLastWalletEventId(W.id))
            }
            const U = this.listeners;
            W.event === "connect" && (yield this.updateSession(W, $.from)),
                W.event === "disconnect" && (logDebug$1("Removing bridge and session: received disconnect event"),
                    yield this.removeBridgeAndSession()),
                U.forEach(V => V(W))
        })
    }
    gatewayErrorsListener($) {
        return __awaiter(this, void 0, void 0, function* () {
            throw new TonConnectError(`Bridge error ${JSON.stringify($)}`)
        })
    }
    updateSession($, W) {
        return __awaiter(this, void 0, void 0, function* () {
            this.session = Object.assign(Object.assign({}, this.session), {
                walletPublicKey: W
            });
            const U = $.payload.items.find(K => K.name === "ton_addr")
                , V = Object.assign(Object.assign({}, $), {
                    payload: Object.assign(Object.assign({}, $.payload), {
                        items: [U]
                    })
                });
            yield this.connectionStorage.storeConnection({
                type: "http",
                session: this.session,
                lastWalletEventId: $.id,
                connectEvent: V,
                nextRpcRequestId: 0
            })
        })
    }
    removeBridgeAndSession() {
        return __awaiter(this, void 0, void 0, function* () {
            this.closeConnection(),
                yield this.connectionStorage.removeConnection()
        })
    }
    generateUniversalLink($, W) {
        return isTelegramUrl($) ? this.generateTGUniversalLink($, W) : this.generateRegularUniversalLink($, W)
    }
    generateRegularUniversalLink($, W) {
        const U = new URL($);
        return U.searchParams.append("v", PROTOCOL_VERSION.toString()),
            U.searchParams.append("id", this.session.sessionCrypto.sessionId),
            U.searchParams.append("r", JSON.stringify(W)),
            U.toString()
    }
    generateTGUniversalLink($, W) {
        const V = this.generateRegularUniversalLink("about:blank", W).split("?")[1]
            , K = "tonconnect-" + encodeTelegramUrlParameters(V)
            , Y = this.convertToDirectLink($)
            , Z = new URL(Y);
        return Z.searchParams.append("startapp", K),
            Z.toString()
    }
    convertToDirectLink($) {
        const W = new URL($);
        return W.searchParams.has("attach") && (W.searchParams.delete("attach"),
            W.pathname += "/start"),
            W.toString()
    }
    openGateways($, W) {
        return __awaiter(this, void 0, void 0, function* () {
            if (Array.isArray(this.walletConnectionSource)) {
                this.pendingGateways.map(U => U.close().catch()),
                    this.pendingGateways = this.walletConnectionSource.map(U => {
                        const V = new BridgeGateway(this.storage, U.bridgeUrl, $.sessionId, () => { }
                            , () => { }
                        );
                        return V.setListener(K => this.pendingGatewaysListener(V, U.bridgeUrl, K)),
                            V
                    }
                    ),
                    yield Promise.allSettled(this.pendingGateways.map(U => callForSuccess(V => this.pendingGateways.some(K => K === U) ? U.registerSession({
                        openingDeadlineMS: W == null ? void 0 : W.openingDeadlineMS,
                        signal: V.signal
                    }) : U.close(), {
                        attempts: Number.MAX_SAFE_INTEGER,
                        delayMs: 5e3,
                        signal: W == null ? void 0 : W.signal
                    })));
                return
            } else
                return this.gateway && (logDebug$1("Gateway is already opened, closing previous gateway"),
                    yield this.gateway.close()),
                    this.gateway = new BridgeGateway(this.storage, this.walletConnectionSource.bridgeUrl, $.sessionId, this.gatewayListener.bind(this), this.gatewayErrorsListener.bind(this)),
                    yield this.gateway.registerSession({
                        openingDeadlineMS: W == null ? void 0 : W.openingDeadlineMS,
                        signal: W == null ? void 0 : W.signal
                    })
        })
    }
    closeGateways($) {
        var W;
        (W = this.gateway) === null || W === void 0 || W.close(),
            this.pendingGateways.filter(U => U !== ($ == null ? void 0 : $.except)).forEach(U => U.close()),
            this.pendingGateways = []
    }
}
function hasProperty(R, $) {
    return hasProperties(R, [$])
}
function hasProperties(R, $) {
    return !R || typeof R != "object" ? !1 : $.every(W => W in R)
}
function isJSBridgeWithMetadata(R) {
    try {
        return !hasProperty(R, "tonconnect") || !hasProperty(R.tonconnect, "walletInfo") ? !1 : hasProperties(R.tonconnect.walletInfo, ["name", "app_name", "image", "about_url", "platforms"])
    } catch {
        return !1
    }
}
let InMemoryStorage$1 = class yn {
    constructor() {
        this.storage = {}
    }
    static getInstance() {
        return yn.instance || (yn.instance = new yn),
            yn.instance
    }
    get length() {
        return Object.keys(this.storage).length
    }
    clear() {
        this.storage = {}
    }
    getItem($) {
        var W;
        return (W = this.storage[$]) !== null && W !== void 0 ? W : null
    }
    key($) {
        var W;
        const U = Object.keys(this.storage);
        return $ < 0 || $ >= U.length ? null : (W = U[$]) !== null && W !== void 0 ? W : null
    }
    removeItem($) {
        delete this.storage[$]
    }
    setItem($, W) {
        this.storage[$] = W
    }
}
    ;
function getWindow$2() {
    if (!(typeof window > "u"))
        return window
}
function tryGetWindowKeys() {
    const R = getWindow$2();
    if (!R)
        return [];
    try {
        return Object.keys(R)
    } catch {
        return []
    }
}
function getDocument() {
    if (!(typeof document > "u"))
        return document
}
function getWebPageManifest() {
    var R;
    const $ = (R = getWindow$2()) === null || R === void 0 ? void 0 : R.location.origin;
    return $ ? $ + "/tonconnect-manifest.json" : ""
}
function tryGetLocalStorage$1() {
    if (isLocalStorageAvailable$1())
        return localStorage;
    if (isNodeJs$1())
        throw new TonConnectError("`localStorage` is unavailable, but it is required for TonConnect. For more details, see https://github.com/ton-connect/sdk/tree/main/packages/sdk#init-connector");
    return InMemoryStorage$1.getInstance()
}
function isLocalStorageAvailable$1() {
    try {
        return typeof localStorage < "u"
    } catch {
        return !1
    }
}
function isNodeJs$1() {
    return typeof process < "u" && process.versions != null && process.versions.node != null
}
class InjectedProvider {
    constructor($, W) {
        this.injectedWalletKey = W,
            this.type = "injected",
            this.unsubscribeCallback = null,
            this.listenSubscriptions = !1,
            this.listeners = [];
        const U = InjectedProvider.window;
        if (!InjectedProvider.isWindowContainsWallet(U, W))
            throw new WalletNotInjectedError;
        this.connectionStorage = new BridgeConnectionStorage($),
            this.injectedWallet = U[W].tonconnect
    }
    static fromStorage($) {
        return __awaiter(this, void 0, void 0, function* () {
            const U = yield new BridgeConnectionStorage($).getInjectedConnection();
            return new InjectedProvider($, U.jsBridgeKey)
        })
    }
    static isWalletInjected($) {
        return InjectedProvider.isWindowContainsWallet(this.window, $)
    }
    static isInsideWalletBrowser($) {
        return InjectedProvider.isWindowContainsWallet(this.window, $) ? this.window[$].tonconnect.isWalletBrowser : !1
    }
    static getCurrentlyInjectedWallets() {
        return this.window ? tryGetWindowKeys().filter(([U, V]) => isJSBridgeWithMetadata(V)).map(([U, V]) => ({
            name: V.tonconnect.walletInfo.name,
            appName: V.tonconnect.walletInfo.app_name,
            aboutUrl: V.tonconnect.walletInfo.about_url,
            imageUrl: V.tonconnect.walletInfo.image,
            tondns: V.tonconnect.walletInfo.tondns,
            jsBridgeKey: U,
            injected: !0,
            embedded: V.tonconnect.isWalletBrowser,
            platforms: V.tonconnect.walletInfo.platforms
        })) : []
    }
    static isWindowContainsWallet($, W) {
        return !!$ && W in $ && typeof $[W] == "object" && "tonconnect" in $[W]
    }
    connect($) {
        this._connect(PROTOCOL_VERSION, $)
    }
    restoreConnection() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                logDebug$1("Injected Provider restoring connection...");
                const $ = yield this.injectedWallet.restoreConnection();
                logDebug$1("Injected Provider restoring connection response", $),
                    $.event === "connect" ? (this.makeSubscriptions(),
                        this.listeners.forEach(W => W($))) : yield this.connectionStorage.removeConnection()
            } catch ($) {
                yield this.connectionStorage.removeConnection(),
                    console.error($)
            }
        })
    }
    closeConnection() {
        this.listenSubscriptions && this.injectedWallet.disconnect(),
            this.closeAllListeners()
    }
    disconnect() {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise($ => {
                const W = () => {
                    this.closeAllListeners(),
                        this.connectionStorage.removeConnection().then($)
                }
                    ;
                try {
                    this.injectedWallet.disconnect(),
                        W()
                } catch (U) {
                    logDebug$1(U),
                        this.sendRequest({
                            method: "disconnect",
                            params: []
                        }, W)
                }
            }
            )
        })
    }
    closeAllListeners() {
        var $;
        this.listenSubscriptions = !1,
            this.listeners = [],
            ($ = this.unsubscribeCallback) === null || $ === void 0 || $.call(this)
    }
    listen($) {
        return this.listeners.push($),
            () => this.listeners = this.listeners.filter(W => W !== $)
    }
    sendRequest($, W) {
        var U;
        return __awaiter(this, void 0, void 0, function* () {
            const V = {};
            typeof W == "function" ? V.onRequestSent = W : (V.onRequestSent = W == null ? void 0 : W.onRequestSent,
                V.signal = W == null ? void 0 : W.signal);
            const K = (yield this.connectionStorage.getNextRpcRequestId()).toString();
            yield this.connectionStorage.increaseNextRpcRequestId(),
                logDebug$1("Send injected-bridge request:", Object.assign(Object.assign({}, $), {
                    id: K
                }));
            const Y = this.injectedWallet.send(Object.assign(Object.assign({}, $), {
                id: K
            }));
            return Y.then(Z => logDebug$1("Wallet message received:", Z)),
                (U = V == null ? void 0 : V.onRequestSent) === null || U === void 0 || U.call(V),
                Y
        })
    }
    _connect($, W) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                logDebug$1(`Injected Provider connect request: protocolVersion: ${$}, message:`, W);
                const U = yield this.injectedWallet.connect($, W);
                logDebug$1("Injected Provider connect response:", U),
                    U.event === "connect" && (yield this.updateSession(),
                        this.makeSubscriptions()),
                    this.listeners.forEach(V => V(U))
            } catch (U) {
                logDebug$1("Injected Provider connect error:", U);
                const V = {
                    event: "connect_error",
                    payload: {
                        code: 0,
                        message: U == null ? void 0 : U.toString()
                    }
                };
                this.listeners.forEach(K => K(V))
            }
        })
    }
    makeSubscriptions() {
        this.listenSubscriptions = !0,
            this.unsubscribeCallback = this.injectedWallet.listen($ => {
                logDebug$1("Wallet message received:", $),
                    this.listenSubscriptions && this.listeners.forEach(W => W($)),
                    $.event === "disconnect" && this.disconnect()
            }
            )
    }
    updateSession() {
        return this.connectionStorage.storeConnection({
            type: "injected",
            jsBridgeKey: this.injectedWalletKey,
            nextRpcRequestId: 0
        })
    }
}
InjectedProvider.window = getWindow$2();
class DefaultStorage {
    constructor() {
        this.localStorage = tryGetLocalStorage$1()
    }
    getItem($) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.localStorage.getItem($)
        })
    }
    removeItem($) {
        return __awaiter(this, void 0, void 0, function* () {
            this.localStorage.removeItem($)
        })
    }
    setItem($, W) {
        return __awaiter(this, void 0, void 0, function* () {
            this.localStorage.setItem($, W)
        })
    }
}
function isWalletInfoCurrentlyInjected(R) {
    return isWalletInfoInjectable(R) && R.injected
}
function isWalletInfoCurrentlyEmbedded(R) {
    return isWalletInfoCurrentlyInjected(R) && R.embedded
}
function isWalletInfoInjectable(R) {
    return "jsBridgeKey" in R
}
function isWalletInfoRemote(R) {
    return "bridgeUrl" in R
}
const FALLBACK_WALLETS_LIST = [{
    app_name: "telegram-wallet",
    name: "Wallet",
    image: "https://wallet.tg/images/logo-288.png",
    about_url: "https://wallet.tg/",
    universal_url: "https://t.me/wallet?attach=wallet",
    bridge: [{
        type: "sse",
        url: "https://bridge.tonapi.io/bridge"
    }],
    platforms: ["ios", "android", "macos", "windows", "linux"]
}, {
    app_name: "tonkeeper",
    name: "Tonkeeper",
    image: "https://tonkeeper.com/assets/tonconnect-icon.png",
    tondns: "tonkeeper.ton",
    about_url: "https://tonkeeper.com",
    universal_url: "https://app.tonkeeper.com/ton-connect",
    deepLink: "tonkeeper-tc://",
    bridge: [{
        type: "sse",
        url: "https://bridge.tonapi.io/bridge"
    }, {
        type: "js",
        key: "tonkeeper"
    }],
    platforms: ["ios", "android", "chrome", "firefox", "macos"]
}, {
    app_name: "mytonwallet",
    name: "MyTonWallet",
    image: "https://mytonwallet.io/icon-256.png",
    about_url: "https://mytonwallet.io",
    universal_url: "https://connect.mytonwallet.org",
    bridge: [{
        type: "js",
        key: "mytonwallet"
    }, {
        type: "sse",
        url: "https://tonconnectbridge.mytonwallet.org/bridge/"
    }],
    platforms: ["chrome", "windows", "macos", "linux", "ios", "android", "firefox"]
}, {
    app_name: "openmask",
    name: "OpenMask",
    image: "https://raw.githubusercontent.com/OpenProduct/openmask-extension/main/public/openmask-logo-288.png",
    about_url: "https://www.openmask.app/",
    bridge: [{
        type: "js",
        key: "openmask"
    }],
    platforms: ["chrome"]
}, {
    app_name: "tonhub",
    name: "Tonhub",
    image: "https://tonhub.com/tonconnect_logo.png",
    about_url: "https://tonhub.com",
    universal_url: "https://tonhub.com/ton-connect",
    bridge: [{
        type: "js",
        key: "tonhub"
    }, {
        type: "sse",
        url: "https://connect.tonhubapi.com/tonconnect"
    }],
    platforms: ["ios", "android"]
}, {
    app_name: "dewallet",
    name: "DeWallet",
    image: "https://app.delabwallet.com/logo_black.png",
    about_url: "https://delabwallet.com",
    bridge: [{
        type: "js",
        key: "dewallet"
    }],
    platforms: ["chrome"]
}, {
    app_name: "xtonwallet",
    name: "XTONWallet",
    image: "https://xtonwallet.com/assets/img/icon-256-back.png",
    about_url: "https://xtonwallet.com",
    bridge: [{
        type: "js",
        key: "xtonwallet"
    }],
    platforms: ["chrome", "firefox"]
}, {
    app_name: "tonwallet",
    name: "TON Wallet",
    image: "https://wallet.ton.org/assets/ui/qr-logo.png",
    about_url: "https://chrome.google.com/webstore/detail/ton-wallet/nphplpgoakhhjchkkhmiggakijnkhfnd",
    bridge: [{
        type: "js",
        key: "tonwallet"
    }],
    platforms: ["chrome"]
}];
class WalletsListManager {
    constructor($) {
        this.walletsListCache = null,
            this.walletsListCacheCreationTimestamp = null,
            this.walletsListSource = "https://raw.githubusercontent.com/ton-blockchain/wallets-list/main/wallets-v2.json",
            $ != null && $.walletsListSource && (this.walletsListSource = $.walletsListSource),
            $ != null && $.cacheTTLMs && (this.cacheTTLMs = $.cacheTTLMs)
    }
    getWallets() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.cacheTTLMs && this.walletsListCacheCreationTimestamp && Date.now() > this.walletsListCacheCreationTimestamp + this.cacheTTLMs && (this.walletsListCache = null),
                this.walletsListCache || (this.walletsListCache = this.fetchWalletsList(),
                    this.walletsListCache.then(() => {
                        this.walletsListCacheCreationTimestamp = Date.now()
                    }
                    ).catch(() => {
                        this.walletsListCache = null,
                            this.walletsListCacheCreationTimestamp = null
                    }
                    )),
                this.walletsListCache
        })
    }
    getEmbeddedWallet() {
        return __awaiter(this, void 0, void 0, function* () {
            const W = (yield this.getWallets()).filter(isWalletInfoCurrentlyEmbedded);
            return W.length !== 1 ? null : W[0]
        })
    }
    fetchWalletsList() {
        return __awaiter(this, void 0, void 0, function* () {
            let $ = [];
            try {
                if ($ = yield (yield fetch(this.walletsListSource)).json(),
                    !Array.isArray($))
                    throw new FetchWalletsError("Wrong wallets list format, wallets list must be an array.");
                const V = $.filter(K => !this.isCorrectWalletConfigDTO(K));
                V.length && (logError$1(`Wallet(s) ${V.map(K => K.name).join(", ")} config format is wrong. They were removed from the wallets list.`),
                    $ = $.filter(K => this.isCorrectWalletConfigDTO(K)))
            } catch (U) {
                logError$1(U),
                    $ = FALLBACK_WALLETS_LIST
            }
            let W = [];
            try {
                W = InjectedProvider.getCurrentlyInjectedWallets()
            } catch (U) {
                logError$1(U)
            }
            return this.mergeWalletsLists(this.walletConfigDTOListToWalletConfigList($), W)
        })
    }
    walletConfigDTOListToWalletConfigList($) {
        return $.map(W => {
            const V = {
                name: W.name,
                appName: W.app_name,
                imageUrl: W.image,
                aboutUrl: W.about_url,
                tondns: W.tondns,
                platforms: W.platforms
            };
            return W.bridge.forEach(K => {
                if (K.type === "sse" && (V.bridgeUrl = K.url,
                    V.universalLink = W.universal_url,
                    V.deepLink = W.deepLink),
                    K.type === "js") {
                    const Y = K.key;
                    V.jsBridgeKey = Y,
                        V.injected = InjectedProvider.isWalletInjected(Y),
                        V.embedded = InjectedProvider.isInsideWalletBrowser(Y)
                }
            }
            ),
                V
        }
        )
    }
    mergeWalletsLists($, W) {
        return [...new Set($.concat(W).map(V => V.name)).values()].map(V => {
            const K = $.find(Z => Z.name === V)
                , Y = W.find(Z => Z.name === V);
            return Object.assign(Object.assign({}, K && Object.assign({}, K)), Y && Object.assign({}, Y))
        }
        )
    }
    isCorrectWalletConfigDTO($) {
        if (!$ || typeof $ != "object")
            return !1;
        const W = "name" in $
            , U = "app_name" in $
            , V = "image" in $
            , K = "about_url" in $
            , Y = "platforms" in $;
        if (!W || !V || !K || !Y || !U || !$.platforms || !Array.isArray($.platforms) || !$.platforms.length || !("bridge" in $) || !Array.isArray($.bridge) || !$.bridge.length)
            return !1;
        const Z = $.bridge;
        if (Z.some(re => !re || typeof re != "object" || !("type" in re)))
            return !1;
        const J = Z.find(re => re.type === "sse");
        if (J && (!("url" in J) || !J.url || !$.universal_url))
            return !1;
        const X = Z.find(re => re.type === "js");
        return !(X && (!("key" in X) || !X.key))
    }
}
class WalletNotSupportFeatureError extends TonConnectError {
    get info() {
        return "Wallet doesn't support requested feature method."
    }
    constructor(...$) {
        super(...$),
            Object.setPrototypeOf(this, WalletNotSupportFeatureError.prototype)
    }
}
function checkSendTransactionSupport(R, $) {
    const W = R.includes("SendTransaction")
        , U = R.find(V => V && typeof V == "object" && V.name === "SendTransaction");
    if (!W && !U)
        throw new WalletNotSupportFeatureError("Wallet doesn't support SendTransaction feature.");
    if (U && U.maxMessages !== void 0) {
        if (U.maxMessages < $.requiredMessagesNumber)
            throw new WalletNotSupportFeatureError(`Wallet is not able to handle such SendTransaction request. Max support messages number is ${U.maxMessages}, but ${$.requiredMessagesNumber} is required.`);
        return
    }
    logWarning$1("Connected wallet didn't provide information about max allowed messages in the SendTransaction request. Request may be rejected by the wallet.")
}
function createRequestVersionEvent() {
    return {
        type: "request-version"
    }
}
function createResponseVersionEvent(R) {
    return {
        type: "response-version",
        version: R
    }
}
function createVersionInfo(R) {
    return {
        ton_connect_sdk_lib: R.ton_connect_sdk_lib,
        ton_connect_ui_lib: R.ton_connect_ui_lib
    }
}
function createConnectionInfo(R, $) {
    var W, U, V, K, Y, Z, J, X;
    const oe = ((W = $ == null ? void 0 : $.connectItems) === null || W === void 0 ? void 0 : W.tonProof) && "proof" in $.connectItems.tonProof ? "ton_proof" : "ton_addr";
    return {
        wallet_address: (V = (U = $ == null ? void 0 : $.account) === null || U === void 0 ? void 0 : U.address) !== null && V !== void 0 ? V : null,
        wallet_type: (K = $ == null ? void 0 : $.device.appName) !== null && K !== void 0 ? K : null,
        wallet_version: (Y = $ == null ? void 0 : $.device.appVersion) !== null && Y !== void 0 ? Y : null,
        auth_type: oe,
        custom_data: Object.assign({
            chain_id: (J = (Z = $ == null ? void 0 : $.account) === null || Z === void 0 ? void 0 : Z.chain) !== null && J !== void 0 ? J : null,
            provider: (X = $ == null ? void 0 : $.provider) !== null && X !== void 0 ? X : null
        }, createVersionInfo(R))
    }
}
function createConnectionStartedEvent(R) {
    return {
        type: "connection-started",
        custom_data: createVersionInfo(R)
    }
}
function createConnectionCompletedEvent(R, $) {
    return Object.assign({
        type: "connection-completed",
        is_success: !0
    }, createConnectionInfo(R, $))
}
function createConnectionErrorEvent(R, $, W) {
    return {
        type: "connection-error",
        is_success: !1,
        error_message: $,
        error_code: W ?? null,
        custom_data: createVersionInfo(R)
    }
}
function createConnectionRestoringStartedEvent(R) {
    return {
        type: "connection-restoring-started",
        custom_data: createVersionInfo(R)
    }
}
function createConnectionRestoringCompletedEvent(R, $) {
    return Object.assign({
        type: "connection-restoring-completed",
        is_success: !0
    }, createConnectionInfo(R, $))
}
function createConnectionRestoringErrorEvent(R, $) {
    return {
        type: "connection-restoring-error",
        is_success: !1,
        error_message: $,
        custom_data: createVersionInfo(R)
    }
}
function createTransactionInfo(R, $) {
    var W, U, V, K;
    return {
        valid_until: (W = String($.validUntil)) !== null && W !== void 0 ? W : null,
        from: (K = (U = $.from) !== null && U !== void 0 ? U : (V = R == null ? void 0 : R.account) === null || V === void 0 ? void 0 : V.address) !== null && K !== void 0 ? K : null,
        messages: $.messages.map(Y => {
            var Z, J;
            return {
                address: (Z = Y.address) !== null && Z !== void 0 ? Z : null,
                amount: (J = Y.amount) !== null && J !== void 0 ? J : null
            }
        }
        )
    }
}
function createTransactionSentForSignatureEvent(R, $, W) {
    return Object.assign(Object.assign({
        type: "transaction-sent-for-signature"
    }, createConnectionInfo(R, $)), createTransactionInfo($, W))
}
function createTransactionSignedEvent(R, $, W, U) {
    return Object.assign(Object.assign({
        type: "transaction-signed",
        is_success: !0,
        signed_transaction: U.boc
    }, createConnectionInfo(R, $)), createTransactionInfo($, W))
}
function createTransactionSigningFailedEvent(R, $, W, U, V) {
    return Object.assign(Object.assign({
        type: "transaction-signing-failed",
        is_success: !1,
        error_message: U,
        error_code: V ?? null
    }, createConnectionInfo(R, $)), createTransactionInfo($, W))
}
function createDisconnectionEvent(R, $, W) {
    return Object.assign({
        type: "disconnection",
        scope: W
    }, createConnectionInfo(R, $))
}
class BrowserEventDispatcher {
    constructor() {
        this.window = getWindow$2()
    }
    dispatchEvent($, W) {
        var U;
        return __awaiter(this, void 0, void 0, function* () {
            const V = new CustomEvent($, {
                detail: W
            });
            (U = this.window) === null || U === void 0 || U.dispatchEvent(V)
        })
    }
    addEventListener($, W, U) {
        var V;
        return __awaiter(this, void 0, void 0, function* () {
            return (V = this.window) === null || V === void 0 || V.addEventListener($, W, U),
                () => {
                    var K;
                    return (K = this.window) === null || K === void 0 ? void 0 : K.removeEventListener($, W)
                }
        })
    }
}
class TonConnectTracker {
    constructor($) {
        var W;
        this.eventPrefix = "ton-connect-",
            this.tonConnectUiVersion = null,
            this.eventDispatcher = (W = $ == null ? void 0 : $.eventDispatcher) !== null && W !== void 0 ? W : new BrowserEventDispatcher,
            this.tonConnectSdkVersion = $.tonConnectSdkVersion,
            this.init().catch()
    }
    get version() {
        return createVersionInfo({
            ton_connect_sdk_lib: this.tonConnectSdkVersion,
            ton_connect_ui_lib: this.tonConnectUiVersion
        })
    }
    init() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.setRequestVersionHandler(),
                    this.tonConnectUiVersion = yield this.requestTonConnectUiVersion()
            } catch { }
        })
    }
    setRequestVersionHandler() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.eventDispatcher.addEventListener("ton-connect-request-version", () => __awaiter(this, void 0, void 0, function* () {
                yield this.eventDispatcher.dispatchEvent("ton-connect-response-version", createResponseVersionEvent(this.tonConnectSdkVersion))
            }))
        })
    }
    requestTonConnectUiVersion() {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise(($, W) => __awaiter(this, void 0, void 0, function* () {
                try {
                    yield this.eventDispatcher.addEventListener("ton-connect-ui-response-version", U => {
                        $(U.detail.version)
                    }
                        , {
                            once: !0
                        }),
                        yield this.eventDispatcher.dispatchEvent("ton-connect-ui-request-version", createRequestVersionEvent())
                } catch (U) {
                    W(U)
                }
            }))
        })
    }
    dispatchUserActionEvent($) {
        try {
            this.eventDispatcher.dispatchEvent(`${this.eventPrefix}${$.type}`, $).catch()
        } catch { }
    }
    trackConnectionStarted(...$) {
        try {
            const W = createConnectionStartedEvent(this.version, ...$);
            this.dispatchUserActionEvent(W)
        } catch { }
    }
    trackConnectionCompleted(...$) {
        try {
            const W = createConnectionCompletedEvent(this.version, ...$);
            this.dispatchUserActionEvent(W)
        } catch { }
    }
    trackConnectionError(...$) {
        try {
            const W = createConnectionErrorEvent(this.version, ...$);
            this.dispatchUserActionEvent(W)
        } catch { }
    }
    trackConnectionRestoringStarted(...$) {
        try {
            const W = createConnectionRestoringStartedEvent(this.version, ...$);
            this.dispatchUserActionEvent(W)
        } catch { }
    }
    trackConnectionRestoringCompleted(...$) {
        try {
            const W = createConnectionRestoringCompletedEvent(this.version, ...$);
            this.dispatchUserActionEvent(W)
        } catch { }
    }
    trackConnectionRestoringError(...$) {
        try {
            const W = createConnectionRestoringErrorEvent(this.version, ...$);
            this.dispatchUserActionEvent(W)
        } catch { }
    }
    trackDisconnection(...$) {
        try {
            const W = createDisconnectionEvent(this.version, ...$);
            this.dispatchUserActionEvent(W)
        } catch { }
    }
    trackTransactionSentForSignature(...$) {
        try {
            const W = createTransactionSentForSignatureEvent(this.version, ...$);
            this.dispatchUserActionEvent(W)
        } catch { }
    }
    trackTransactionSigned(...$) {
        try {
            const W = createTransactionSignedEvent(this.version, ...$);
            this.dispatchUserActionEvent(W)
        } catch { }
    }
    trackTransactionSigningFailed(...$) {
        try {
            const W = createTransactionSigningFailedEvent(this.version, ...$);
            this.dispatchUserActionEvent(W)
        } catch { }
    }
}
const tonConnectSdkVersion = "3.0.3";
class TonConnect {
    constructor($) {
        if (this.walletsList = new WalletsListManager,
            this._wallet = null,
            this.provider = null,
            this.statusChangeSubscriptions = [],
            this.statusChangeErrorSubscriptions = [],
            this.dappSettings = {
                manifestUrl: ($ == null ? void 0 : $.manifestUrl) || getWebPageManifest(),
                storage: ($ == null ? void 0 : $.storage) || new DefaultStorage
            },
            this.walletsList = new WalletsListManager({
                walletsListSource: $ == null ? void 0 : $.walletsListSource,
                cacheTTLMs: $ == null ? void 0 : $.walletsListCacheTTLMs
            }),
            this.tracker = new TonConnectTracker({
                eventDispatcher: $ == null ? void 0 : $.eventDispatcher,
                tonConnectSdkVersion
            }),
            !this.dappSettings.manifestUrl)
            throw new DappMetadataError("Dapp tonconnect-manifest.json must be specified if window.location.origin is undefined. See more https://github.com/ton-connect/docs/blob/main/requests-responses.md#app-manifest");
        this.bridgeConnectionStorage = new BridgeConnectionStorage(this.dappSettings.storage),
            $ != null && $.disableAutoPauseConnection || this.addWindowFocusAndBlurSubscriptions()
    }
    static getWallets() {
        return this.walletsList.getWallets()
    }
    get connected() {
        return this._wallet !== null
    }
    get account() {
        var $;
        return (($ = this._wallet) === null || $ === void 0 ? void 0 : $.account) || null
    }
    get wallet() {
        return this._wallet
    }
    set wallet($) {
        this._wallet = $,
            this.statusChangeSubscriptions.forEach(W => W(this._wallet))
    }
    getWallets() {
        return this.walletsList.getWallets()
    }
    onStatusChange($, W) {
        return this.statusChangeSubscriptions.push($),
            W && this.statusChangeErrorSubscriptions.push(W),
            () => {
                this.statusChangeSubscriptions = this.statusChangeSubscriptions.filter(U => U !== $),
                    W && (this.statusChangeErrorSubscriptions = this.statusChangeErrorSubscriptions.filter(U => U !== W))
            }
    }
    connect($, W) {
        var U, V;
        const K = {};
        if (typeof W == "object" && "tonProof" in W && (K.request = W),
            typeof W == "object" && ("openingDeadlineMS" in W || "signal" in W || "request" in W) && (K.request = W == null ? void 0 : W.request,
                K.openingDeadlineMS = W == null ? void 0 : W.openingDeadlineMS,
                K.signal = W == null ? void 0 : W.signal),
            this.connected)
            throw new WalletAlreadyConnectedError;
        const Y = createAbortController(K == null ? void 0 : K.signal);
        if ((U = this.abortController) === null || U === void 0 || U.abort(),
            this.abortController = Y,
            Y.signal.aborted)
            throw new TonConnectError("Connection was aborted");
        return (V = this.provider) === null || V === void 0 || V.closeConnection(),
            this.provider = this.createProvider($),
            Y.signal.addEventListener("abort", () => {
                var Z;
                (Z = this.provider) === null || Z === void 0 || Z.closeConnection(),
                    this.provider = null
            }
            ),
            this.tracker.trackConnectionStarted(),
            this.provider.connect(this.createConnectRequest(K == null ? void 0 : K.request), {
                openingDeadlineMS: K == null ? void 0 : K.openingDeadlineMS,
                signal: Y.signal
            })
    }
    restoreConnection($) {
        var W, U;
        return __awaiter(this, void 0, void 0, function* () {
            this.tracker.trackConnectionRestoringStarted();
            const V = createAbortController($ == null ? void 0 : $.signal);
            if ((W = this.abortController) === null || W === void 0 || W.abort(),
                this.abortController = V,
                V.signal.aborted) {
                this.tracker.trackConnectionRestoringError("Connection restoring was aborted");
                return
            }
            const [K, Y] = yield Promise.all([this.bridgeConnectionStorage.storedConnectionType(), this.walletsList.getEmbeddedWallet()]);
            if (V.signal.aborted) {
                this.tracker.trackConnectionRestoringError("Connection restoring was aborted");
                return
            }
            let Z = null;
            try {
                switch (K) {
                    case "http":
                        Z = yield BridgeProvider.fromStorage(this.dappSettings.storage);
                        break;
                    case "injected":
                        Z = yield InjectedProvider.fromStorage(this.dappSettings.storage);
                        break;
                    default:
                        if (Y)
                            Z = this.createProvider(Y);
                        else
                            return
                }
            } catch {
                this.tracker.trackConnectionRestoringError("Provider is not restored"),
                    yield this.bridgeConnectionStorage.removeConnection(),
                    Z == null || Z.closeConnection(),
                    Z = null;
                return
            }
            if (V.signal.aborted) {
                Z == null || Z.closeConnection(),
                    this.tracker.trackConnectionRestoringError("Connection restoring was aborted");
                return
            }
            if (!Z) {
                logError$1("Provider is not restored"),
                    this.tracker.trackConnectionRestoringError("Provider is not restored");
                return
            }
            (U = this.provider) === null || U === void 0 || U.closeConnection(),
                this.provider = Z,
                Z.listen(this.walletEventsListener.bind(this));
            const J = () => {
                this.tracker.trackConnectionRestoringError("Connection restoring was aborted"),
                    Z == null || Z.closeConnection(),
                    Z = null
            }
                ;
            return V.signal.addEventListener("abort", J),
                yield callForSuccess(X => __awaiter(this, void 0, void 0, function* () {
                    yield Z == null ? void 0 : Z.restoreConnection({
                        openingDeadlineMS: $ == null ? void 0 : $.openingDeadlineMS,
                        signal: X.signal
                    }),
                        V.signal.removeEventListener("abort", J),
                        this.connected ? this.tracker.trackConnectionRestoringCompleted(this.wallet) : this.tracker.trackConnectionRestoringError("Connection restoring failed")
                }), {
                    attempts: Number.MAX_SAFE_INTEGER,
                    delayMs: 5e3,
                    signal: $ == null ? void 0 : $.signal
                })
        })
    }
    sendTransaction($, W) {
        return __awaiter(this, void 0, void 0, function* () {
            const U = {};
            typeof W == "function" ? U.onRequestSent = W : (U.onRequestSent = W == null ? void 0 : W.onRequestSent,
                U.signal = W == null ? void 0 : W.signal);
            const V = createAbortController(U == null ? void 0 : U.signal);
            if (V.signal.aborted)
                throw new TonConnectError("Transaction sending was aborted");
            this.checkConnection(),
                checkSendTransactionSupport(this.wallet.device.features, {
                    requiredMessagesNumber: $.messages.length
                }),
                this.tracker.trackTransactionSentForSignature(this.wallet, $);
            const { validUntil: K } = $
                , Y = __rest($, ["validUntil"])
                , Z = $.from || this.account.address
                , J = $.network || this.account.chain
                , X = yield this.provider.sendRequest(sendTransactionParser.convertToRpcRequest(Object.assign(Object.assign({}, Y), {
                    valid_until: K,
                    from: Z,
                    network: J
                })), {
                    onRequestSent: U.onRequestSent,
                    signal: V.signal
                });
            if (sendTransactionParser.isError(X))
                return this.tracker.trackTransactionSigningFailed(this.wallet, $, X.error.message, X.error.code),
                    sendTransactionParser.parseAndThrowError(X);
            const re = sendTransactionParser.convertFromRpcResponse(X);
            return this.tracker.trackTransactionSigned(this.wallet, $, re),
                re
        })
    }
    disconnect($) {
        var W;
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.connected)
                throw new WalletNotConnectedError;
            const U = createAbortController($ == null ? void 0 : $.signal)
                , V = this.abortController;
            if (this.abortController = U,
                U.signal.aborted)
                throw new TonConnectError("Disconnect was aborted");
            this.onWalletDisconnected("dapp"),
                yield (W = this.provider) === null || W === void 0 ? void 0 : W.disconnect({
                    signal: U.signal
                }),
                V == null || V.abort()
        })
    }
    pauseConnection() {
        var $;
        (($ = this.provider) === null || $ === void 0 ? void 0 : $.type) === "http" && this.provider.pause()
    }
    unPauseConnection() {
        var $;
        return (($ = this.provider) === null || $ === void 0 ? void 0 : $.type) !== "http" ? Promise.resolve() : this.provider.unPause()
    }
    addWindowFocusAndBlurSubscriptions() {
        const $ = getDocument();
        if ($)
            try {
                $.addEventListener("visibilitychange", () => {
                    $.hidden ? this.pauseConnection() : this.unPauseConnection().catch()
                }
                )
            } catch (W) {
                logError$1("Cannot subscribe to the document.visibilitychange: ", W)
            }
    }
    createProvider($) {
        let W;
        return !Array.isArray($) && isWalletConnectionSourceJS($) ? W = new InjectedProvider(this.dappSettings.storage, $.jsBridgeKey) : W = new BridgeProvider(this.dappSettings.storage, $),
            W.listen(this.walletEventsListener.bind(this)),
            W
    }
    walletEventsListener($) {
        switch ($.event) {
            case "connect":
                this.onWalletConnected($.payload);
                break;
            case "connect_error":
                this.onWalletConnectError($.payload);
                break;
            case "disconnect":
                this.onWalletDisconnected("wallet")
        }
    }
    onWalletConnected($) {
        const W = $.items.find(K => K.name === "ton_addr")
            , U = $.items.find(K => K.name === "ton_proof");
        if (!W)
            throw new TonConnectError("ton_addr connection item was not found");
        const V = {
            device: $.device,
            provider: this.provider.type,
            account: {
                address: W.address,
                chain: W.network,
                walletStateInit: W.walletStateInit,
                publicKey: W.publicKey
            }
        };
        U && (V.connectItems = {
            tonProof: U
        }),
            this.wallet = V,
            this.tracker.trackConnectionCompleted(V)
    }
    onWalletConnectError($) {
        const W = connectErrorsParser.parseError($);
        if (this.statusChangeErrorSubscriptions.forEach(U => U(W)),
            logDebug$1(W),
            this.tracker.trackConnectionError($.message, $.code),
            W instanceof ManifestNotFoundError || W instanceof ManifestContentErrorError)
            throw logError$1(W),
            W
    }
    onWalletDisconnected($) {
        this.tracker.trackDisconnection(this.wallet, $),
            this.wallet = null
    }
    checkConnection() {
        if (!this.connected)
            throw new WalletNotConnectedError
    }
    createConnectRequest($) {
        const W = [{
            name: "ton_addr"
        }];
        return $ != null && $.tonProof && W.push({
            name: "ton_proof",
            payload: $.tonProof
        }),
        {
            manifestUrl: this.dappSettings.manifestUrl,
            items: W
        }
    }
}
TonConnect.walletsList = new WalletsListManager;
TonConnect.isWalletInjected = R => InjectedProvider.isWalletInjected(R);
TonConnect.isInsideWalletBrowser = R => InjectedProvider.isInsideWalletBrowser(R);
const noBounceableTag = 81
    , testOnlyTag = 128;
function toUserFriendlyAddress(R, $ = !1) {
    const { wc: W, hex: U } = parseHexAddress(R);
    let V = noBounceableTag;
    $ && (V |= testOnlyTag);
    const K = new Int8Array(34);
    K[0] = V,
        K[1] = W,
        K.set(U, 2);
    const Y = new Uint8Array(36);
    return Y.set(K),
        Y.set(crc16(K), 34),
        Base64.encode(Y).replace(/\+/g, "-").replace(/\//g, "_")
}
function parseHexAddress(R) {
    if (!R.includes(":"))
        throw new WrongAddressError(`Wrong address ${R}. Address must include ":".`);
    const $ = R.split(":");
    if ($.length !== 2)
        throw new WrongAddressError(`Wrong address ${R}. Address must include ":" only once.`);
    const W = parseInt($[0]);
    if (W !== 0 && W !== -1)
        throw new WrongAddressError(`Wrong address ${R}. WC must be eq 0 or -1, but ${W} received.`);
    const U = $[1];
    if ((U == null ? void 0 : U.length) !== 64)
        throw new WrongAddressError(`Wrong address ${R}. Hex part must be 64bytes length, but ${U == null ? void 0 : U.length} received.`);
    return {
        wc: W,
        hex: hexToBytes(U)
    }
}
function crc16(R) {
    let W = 0;
    const U = new Uint8Array(R.length + 2);
    U.set(R);
    for (let V of U) {
        let K = 128;
        for (; K > 0;)
            W <<= 1,
                V & K && (W += 1),
                K >>= 1,
                W > 65535 && (W &= 65535,
                    W ^= 4129)
    }
    return new Uint8Array([Math.floor(W / 256), W % 256])
}
const toByteMap = {};
for (let R = 0; R <= 255; R++) {
    let $ = R.toString(16);
    $.length < 2 && ($ = "0" + $),
        toByteMap[$] = R
}
function hexToBytes(R) {
    R = R.toLowerCase();
    const $ = R.length;
    if ($ % 2 !== 0)
        throw new ParseHexError("Hex string must have length a multiple of 2: " + R);
    const W = $ / 2
        , U = new Uint8Array(W);
    for (let V = 0; V < W; V++) {
        const K = V * 2
            , Y = R.substring(K, K + 2);
        if (!toByteMap.hasOwnProperty(Y))
            throw new ParseHexError("Invalid hex character: " + Y);
        U[V] = toByteMap[Y]
    }
    return U
}
var uaParser = {
    exports: {}
};
(function (R, $) {
    (function (W, U) {
        var V = "1.0.38"
            , K = ""
            , Y = "?"
            , Z = "function"
            , J = "undefined"
            , X = "object"
            , re = "string"
            , oe = "major"
            , ie = "model"
            , se = "name"
            , le = "type"
            , ue = "vendor"
            , pe = "version"
            , Ee = "architecture"
            , Ce = "console"
            , ke = "mobile"
            , Ue = "tablet"
            , be = "smarttv"
            , Be = "wearable"
            , xe = "embedded"
            , ye = 500
            , de = "Amazon"
            , Se = "Apple"
            , he = "ASUS"
            , ce = "BlackBerry"
            , Oe = "Browser"
            , Ne = "Chrome"
            , He = "Edge"
            , tt = "Firefox"
            , at = "Google"
            , Ct = "Huawei"
            , At = "LG"
            , Pt = "Microsoft"
            , Gt = "Motorola"
            , Vt = "Opera"
            , Bt = "Samsung"
            , Ht = "Sharp"
            , gt = "Sony"
            , Nt = "Xiaomi"
            , un = "Zebra"
            , $e = "Facebook"
            , Te = "Chromium OS"
            , we = "Mac OS"
            , Ie = function (ft, bt) {
                var st = {};
                for (var Lt in ft)
                    bt[Lt] && bt[Lt].length % 2 === 0 ? st[Lt] = bt[Lt].concat(ft[Lt]) : st[Lt] = ft[Lt];
                return st
            }
            , Re = function (ft) {
                for (var bt = {}, st = 0; st < ft.length; st++)
                    bt[ft[st].toUpperCase()] = ft[st];
                return bt
            }
            , je = function (ft, bt) {
                return typeof ft === re ? Xe(bt).indexOf(Xe(ft)) !== -1 : !1
            }
            , Xe = function (ft) {
                return ft.toLowerCase()
            }
            , et = function (ft) {
                return typeof ft === re ? ft.replace(/[^\d\.]/g, K).split(".")[0] : U
            }
            , Mt = function (ft, bt) {
                if (typeof ft === re)
                    return ft = ft.replace(/^\s\s*/, K),
                        typeof bt === J ? ft : ft.substring(0, ye)
            }
            , Rt = function (ft, bt) {
                for (var st = 0, Lt, nn, rn, xt, ot, Qt; st < bt.length && !ot;) {
                    var sn = bt[st]
                        , ln = bt[st + 1];
                    for (Lt = nn = 0; Lt < sn.length && !ot && sn[Lt];)
                        if (ot = sn[Lt++].exec(ft),
                            ot)
                            for (rn = 0; rn < ln.length; rn++)
                                Qt = ot[++nn],
                                    xt = ln[rn],
                                    typeof xt === X && xt.length > 0 ? xt.length === 2 ? typeof xt[1] == Z ? this[xt[0]] = xt[1].call(this, Qt) : this[xt[0]] = xt[1] : xt.length === 3 ? typeof xt[1] === Z && !(xt[1].exec && xt[1].test) ? this[xt[0]] = Qt ? xt[1].call(this, Qt, xt[2]) : U : this[xt[0]] = Qt ? Qt.replace(xt[1], xt[2]) : U : xt.length === 4 && (this[xt[0]] = Qt ? xt[3].call(this, Qt.replace(xt[1], xt[2])) : U) : this[xt] = Qt || U;
                    st += 2
                }
            }
            , rt = function (ft, bt) {
                for (var st in bt)
                    if (typeof bt[st] === X && bt[st].length > 0) {
                        for (var Lt = 0; Lt < bt[st].length; Lt++)
                            if (je(bt[st][Lt], ft))
                                return st === Y ? U : st
                    } else if (je(bt[st], ft))
                        return st === Y ? U : st;
                return ft
            }
            , Wt = {
                "1.0": "/8",
                "1.2": "/1",
                "1.3": "/3",
                "2.0": "/412",
                "2.0.2": "/416",
                "2.0.3": "/417",
                "2.0.4": "/419",
                "?": "/"
            }
            , jt = {
                ME: "4.90",
                "NT 3.11": "NT3.51",
                "NT 4.0": "NT4.0",
                2e3: "NT 5.0",
                XP: ["NT 5.1", "NT 5.2"],
                Vista: "NT 6.0",
                7: "NT 6.1",
                8: "NT 6.2",
                "8.1": "NT 6.3",
                10: ["NT 6.4", "NT 10.0"],
                RT: "ARM"
            }
            , fn = {
                browser: [[/\b(?:crmo|crios)\/([\w\.]+)/i], [pe, [se, "Chrome"]], [/edg(?:e|ios|a)?\/([\w\.]+)/i], [pe, [se, "Edge"]], [/(opera mini)\/([-\w\.]+)/i, /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i, /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i], [se, pe], [/opios[\/ ]+([\w\.]+)/i], [pe, [se, Vt + " Mini"]], [/\bop(?:rg)?x\/([\w\.]+)/i], [pe, [se, Vt + " GX"]], [/\bopr\/([\w\.]+)/i], [pe, [se, Vt]], [/\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i], [pe, [se, "Baidu"]], [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i, /(avant|iemobile|slim)\s?(?:browser)?[\/ ]?([\w\.]*)/i, /(?:ms|\()(ie) ([\w\.]+)/i, /(flock|rockmelt|midori|epiphany|silk|skyfire|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|qq|duckduckgo)\/([-\w\.]+)/i, /(heytap|ovi)browser\/([\d\.]+)/i, /(weibo)__([\d\.]+)/i], [se, pe], [/\bddg\/([\w\.]+)/i], [pe, [se, "DuckDuckGo"]], [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i], [pe, [se, "UC" + Oe]], [/microm.+\bqbcore\/([\w\.]+)/i, /\bqbcore\/([\w\.]+).+microm/i, /micromessenger\/([\w\.]+)/i], [pe, [se, "WeChat"]], [/konqueror\/([\w\.]+)/i], [pe, [se, "Konqueror"]], [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i], [pe, [se, "IE"]], [/ya(?:search)?browser\/([\w\.]+)/i], [pe, [se, "Yandex"]], [/slbrowser\/([\w\.]+)/i], [pe, [se, "Smart Lenovo " + Oe]], [/(avast|avg)\/([\w\.]+)/i], [[se, /(.+)/, "$1 Secure " + Oe], pe], [/\bfocus\/([\w\.]+)/i], [pe, [se, tt + " Focus"]], [/\bopt\/([\w\.]+)/i], [pe, [se, Vt + " Touch"]], [/coc_coc\w+\/([\w\.]+)/i], [pe, [se, "Coc Coc"]], [/dolfin\/([\w\.]+)/i], [pe, [se, "Dolphin"]], [/coast\/([\w\.]+)/i], [pe, [se, Vt + " Coast"]], [/miuibrowser\/([\w\.]+)/i], [pe, [se, "MIUI " + Oe]], [/fxios\/([-\w\.]+)/i], [pe, [se, tt]], [/\bqihu|(qi?ho?o?|360)browser/i], [[se, "360 " + Oe]], [/(oculus|sailfish|huawei|vivo)browser\/([\w\.]+)/i], [[se, /(.+)/, "$1 " + Oe], pe], [/samsungbrowser\/([\w\.]+)/i], [pe, [se, Bt + " Internet"]], [/(comodo_dragon)\/([\w\.]+)/i], [[se, /_/g, " "], pe], [/metasr[\/ ]?([\d\.]+)/i], [pe, [se, "Sogou Explorer"]], [/(sogou)mo\w+\/([\d\.]+)/i], [[se, "Sogou Mobile"], pe], [/(electron)\/([\w\.]+) safari/i, /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i, /m?(qqbrowser|2345Explorer)[\/ ]?([\w\.]+)/i], [se, pe], [/(lbbrowser)/i, /\[(linkedin)app\]/i], [se], [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i], [[se, $e], pe], [/(Klarna)\/([\w\.]+)/i, /(kakao(?:talk|story))[\/ ]([\w\.]+)/i, /(naver)\(.*?(\d+\.[\w\.]+).*\)/i, /safari (line)\/([\w\.]+)/i, /\b(line)\/([\w\.]+)\/iab/i, /(alipay)client\/([\w\.]+)/i, /(twitter)(?:and| f.+e\/([\w\.]+))/i, /(chromium|instagram|snapchat)[\/ ]([-\w\.]+)/i], [se, pe], [/\bgsa\/([\w\.]+) .*safari\//i], [pe, [se, "GSA"]], [/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i], [pe, [se, "TikTok"]], [/headlesschrome(?:\/([\w\.]+)| )/i], [pe, [se, Ne + " Headless"]], [/ wv\).+(chrome)\/([\w\.]+)/i], [[se, Ne + " WebView"], pe], [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i], [pe, [se, "Android " + Oe]], [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i], [se, pe], [/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i], [pe, [se, "Mobile Safari"]], [/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i], [pe, se], [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i], [se, [pe, rt, Wt]], [/(webkit|khtml)\/([\w\.]+)/i], [se, pe], [/(navigator|netscape\d?)\/([-\w\.]+)/i], [[se, "Netscape"], pe], [/mobile vr; rv:([\w\.]+)\).+firefox/i], [pe, [se, tt + " Reality"]], [/ekiohf.+(flow)\/([\w\.]+)/i, /(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i, /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i, /(firefox)\/([\w\.]+)/i, /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i, /(links) \(([\w\.]+)/i, /panasonic;(viera)/i], [se, pe], [/(cobalt)\/([\w\.]+)/i], [se, [pe, /master.|lts./, ""]]],
                cpu: [[/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i], [[Ee, "amd64"]], [/(ia32(?=;))/i], [[Ee, Xe]], [/((?:i[346]|x)86)[;\)]/i], [[Ee, "ia32"]], [/\b(aarch64|arm(v?8e?l?|_?64))\b/i], [[Ee, "arm64"]], [/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i], [[Ee, "armhf"]], [/windows (ce|mobile); ppc;/i], [[Ee, "arm"]], [/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i], [[Ee, /ower/, K, Xe]], [/(sun4\w)[;\)]/i], [[Ee, "sparc"]], [/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i], [[Ee, Xe]]],
                device: [[/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i], [ie, [ue, Bt], [le, Ue]], [/\b((?:s[cgp]h|gt|sm)-\w+|sc[g-]?[\d]+a?|galaxy nexus)/i, /samsung[- ]([-\w]+)/i, /sec-(sgh\w+)/i], [ie, [ue, Bt], [le, ke]], [/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i], [ie, [ue, Se], [le, ke]], [/\((ipad);[-\w\),; ]+apple/i, /applecoremedia\/[\w\.]+ \((ipad)/i, /\b(ipad)\d\d?,\d\d?[;\]].+ios/i], [ie, [ue, Se], [le, Ue]], [/(macintosh);/i], [ie, [ue, Se]], [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i], [ie, [ue, Ht], [le, ke]], [/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i], [ie, [ue, Ct], [le, Ue]], [/(?:huawei|honor)([-\w ]+)[;\)]/i, /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i], [ie, [ue, Ct], [le, ke]], [/\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i, /\b; (\w+) build\/hm\1/i, /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i, /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i, /oid[^\)]+; (m?[12][0-389][01]\w{3,6}[c-y])( bui|; wv|\))/i, /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i], [[ie, /_/g, " "], [ue, Nt], [le, ke]], [/oid[^\)]+; (2\d{4}(283|rpbf)[cgl])( bui|\))/i, /\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i], [[ie, /_/g, " "], [ue, Nt], [le, Ue]], [/; (\w+) bui.+ oppo/i, /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i], [ie, [ue, "OPPO"], [le, ke]], [/\b(opd2\d{3}a?) bui/i], [ie, [ue, "OPPO"], [le, Ue]], [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i], [ie, [ue, "Vivo"], [le, ke]], [/\b(rmx[1-3]\d{3})(?: bui|;|\))/i], [ie, [ue, "Realme"], [le, ke]], [/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i, /\bmot(?:orola)?[- ](\w*)/i, /((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i], [ie, [ue, Gt], [le, ke]], [/\b(mz60\d|xoom[2 ]{0,2}) build\//i], [ie, [ue, Gt], [le, Ue]], [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i], [ie, [ue, At], [le, Ue]], [/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i, /\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i, /\blg-?([\d\w]+) bui/i], [ie, [ue, At], [le, ke]], [/(ideatab[-\w ]+)/i, /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i], [ie, [ue, "Lenovo"], [le, Ue]], [/(?:maemo|nokia).*(n900|lumia \d+)/i, /nokia[-_ ]?([-\w\.]*)/i], [[ie, /_/g, " "], [ue, "Nokia"], [le, ke]], [/(pixel c)\b/i], [ie, [ue, at], [le, Ue]], [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i], [ie, [ue, at], [le, ke]], [/droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i], [ie, [ue, gt], [le, ke]], [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i], [[ie, "Xperia Tablet"], [ue, gt], [le, Ue]], [/ (kb2005|in20[12]5|be20[12][59])\b/i, /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i], [ie, [ue, "OnePlus"], [le, ke]], [/(alexa)webm/i, /(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\))/i, /(kf[a-z]+)( bui|\)).+silk\//i], [ie, [ue, de], [le, Ue]], [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i], [[ie, /(.+)/g, "Fire Phone $1"], [ue, de], [le, ke]], [/(playbook);[-\w\),; ]+(rim)/i], [ie, ue, [le, Ue]], [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i], [ie, [ue, ce], [le, ke]], [/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i], [ie, [ue, he], [le, Ue]], [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i], [ie, [ue, he], [le, ke]], [/(nexus 9)/i], [ie, [ue, "HTC"], [le, Ue]], [/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i, /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i, /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i], [ue, [ie, /_/g, " "], [le, ke]], [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i], [ie, [ue, "Acer"], [le, Ue]], [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i], [ie, [ue, "Meizu"], [le, ke]], [/; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i], [ie, [ue, "Ulefone"], [le, ke]], [/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron|infinix|tecno)[-_ ]?([-\w]*)/i, /(hp) ([\w ]+\w)/i, /(asus)-?(\w+)/i, /(microsoft); (lumia[\w ]+)/i, /(lenovo)[-_ ]?([-\w]+)/i, /(jolla)/i, /(oppo) ?([\w ]+) bui/i], [ue, ie, [le, ke]], [/(kobo)\s(ereader|touch)/i, /(archos) (gamepad2?)/i, /(hp).+(touchpad(?!.+tablet)|tablet)/i, /(kindle)\/([\w\.]+)/i, /(nook)[\w ]+build\/(\w+)/i, /(dell) (strea[kpr\d ]*[\dko])/i, /(le[- ]+pan)[- ]+(\w{1,9}) bui/i, /(trinity)[- ]*(t\d{3}) bui/i, /(gigaset)[- ]+(q\w{1,9}) bui/i, /(vodafone) ([\w ]+)(?:\)| bui)/i], [ue, ie, [le, Ue]], [/(surface duo)/i], [ie, [ue, Pt], [le, Ue]], [/droid [\d\.]+; (fp\du?)(?: b|\))/i], [ie, [ue, "Fairphone"], [le, ke]], [/(u304aa)/i], [ie, [ue, "AT&T"], [le, ke]], [/\bsie-(\w*)/i], [ie, [ue, "Siemens"], [le, ke]], [/\b(rct\w+) b/i], [ie, [ue, "RCA"], [le, Ue]], [/\b(venue[\d ]{2,7}) b/i], [ie, [ue, "Dell"], [le, Ue]], [/\b(q(?:mv|ta)\w+) b/i], [ie, [ue, "Verizon"], [le, Ue]], [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i], [ie, [ue, "Barnes & Noble"], [le, Ue]], [/\b(tm\d{3}\w+) b/i], [ie, [ue, "NuVision"], [le, Ue]], [/\b(k88) b/i], [ie, [ue, "ZTE"], [le, Ue]], [/\b(nx\d{3}j) b/i], [ie, [ue, "ZTE"], [le, ke]], [/\b(gen\d{3}) b.+49h/i], [ie, [ue, "Swiss"], [le, ke]], [/\b(zur\d{3}) b/i], [ie, [ue, "Swiss"], [le, Ue]], [/\b((zeki)?tb.*\b) b/i], [ie, [ue, "Zeki"], [le, Ue]], [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i], [[ue, "Dragon Touch"], ie, [le, Ue]], [/\b(ns-?\w{0,9}) b/i], [ie, [ue, "Insignia"], [le, Ue]], [/\b((nxa|next)-?\w{0,9}) b/i], [ie, [ue, "NextBook"], [le, Ue]], [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i], [[ue, "Voice"], ie, [le, ke]], [/\b(lvtel\-)?(v1[12]) b/i], [[ue, "LvTel"], ie, [le, ke]], [/\b(ph-1) /i], [ie, [ue, "Essential"], [le, ke]], [/\b(v(100md|700na|7011|917g).*\b) b/i], [ie, [ue, "Envizen"], [le, Ue]], [/\b(trio[-\w\. ]+) b/i], [ie, [ue, "MachSpeed"], [le, Ue]], [/\btu_(1491) b/i], [ie, [ue, "Rotor"], [le, Ue]], [/(shield[\w ]+) b/i], [ie, [ue, "Nvidia"], [le, Ue]], [/(sprint) (\w+)/i], [ue, ie, [le, ke]], [/(kin\.[onetw]{3})/i], [[ie, /\./g, " "], [ue, Pt], [le, ke]], [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i], [ie, [ue, un], [le, Ue]], [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i], [ie, [ue, un], [le, ke]], [/smart-tv.+(samsung)/i], [ue, [le, be]], [/hbbtv.+maple;(\d+)/i], [[ie, /^/, "SmartTV"], [ue, Bt], [le, be]], [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i], [[ue, At], [le, be]], [/(apple) ?tv/i], [ue, [ie, Se + " TV"], [le, be]], [/crkey/i], [[ie, Ne + "cast"], [ue, at], [le, be]], [/droid.+aft(\w+)( bui|\))/i], [ie, [ue, de], [le, be]], [/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i], [ie, [ue, Ht], [le, be]], [/(bravia[\w ]+)( bui|\))/i], [ie, [ue, gt], [le, be]], [/(mitv-\w{5}) bui/i], [ie, [ue, Nt], [le, be]], [/Hbbtv.*(technisat) (.*);/i], [ue, ie, [le, be]], [/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i, /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i], [[ue, Mt], [ie, Mt], [le, be]], [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i], [[le, be]], [/(ouya)/i, /(nintendo) ([wids3utch]+)/i], [ue, ie, [le, Ce]], [/droid.+; (shield) bui/i], [ie, [ue, "Nvidia"], [le, Ce]], [/(playstation [345portablevi]+)/i], [ie, [ue, gt], [le, Ce]], [/\b(xbox(?: one)?(?!; xbox))[\); ]/i], [ie, [ue, Pt], [le, Ce]], [/((pebble))app/i], [ue, ie, [le, Be]], [/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i], [ie, [ue, Se], [le, Be]], [/droid.+; (glass) \d/i], [ie, [ue, at], [le, Be]], [/droid.+; (wt63?0{2,3})\)/i], [ie, [ue, un], [le, Be]], [/(quest( \d| pro)?)/i], [ie, [ue, $e], [le, Be]], [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i], [ue, [le, xe]], [/(aeobc)\b/i], [ie, [ue, de], [le, xe]], [/droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+? mobile safari/i], [ie, [le, ke]], [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i], [ie, [le, Ue]], [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i], [[le, Ue]], [/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i], [[le, ke]], [/(android[-\w\. ]{0,9});.+buil/i], [ie, [ue, "Generic"]]],
                engine: [[/windows.+ edge\/([\w\.]+)/i], [pe, [se, He + "HTML"]], [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i], [pe, [se, "Blink"]], [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i, /ekioh(flow)\/([\w\.]+)/i, /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i, /(icab)[\/ ]([23]\.[\d\.]+)/i, /\b(libweb)/i], [se, pe], [/rv\:([\w\.]{1,9})\b.+(gecko)/i], [pe, se]],
                os: [[/microsoft (windows) (vista|xp)/i], [se, pe], [/(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i], [se, [pe, rt, jt]], [/windows nt 6\.2; (arm)/i, /windows[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i, /(?:win(?=3|9|n)|win 9x )([nt\d\.]+)/i], [[pe, rt, jt], [se, "Windows"]], [/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i, /(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i, /cfnetwork\/.+darwin/i], [[pe, /_/g, "."], [se, "iOS"]], [/(mac os x) ?([\w\. ]*)/i, /(macintosh|mac_powerpc\b)(?!.+haiku)/i], [[se, we], [pe, /_/g, "."]], [/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i], [pe, se], [/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i, /(blackberry)\w*\/([\w\.]*)/i, /(tizen|kaios)[\/ ]([\w\.]+)/i, /\((series40);/i], [se, pe], [/\(bb(10);/i], [pe, [se, ce]], [/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i], [pe, [se, "Symbian"]], [/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i], [pe, [se, tt + " OS"]], [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i], [pe, [se, "webOS"]], [/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i], [pe, [se, "watchOS"]], [/crkey\/([\d\.]+)/i], [pe, [se, Ne + "cast"]], [/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i], [[se, Te], pe], [/panasonic;(viera)/i, /(netrange)mmh/i, /(nettv)\/(\d+\.[\w\.]+)/i, /(nintendo|playstation) ([wids345portablevuch]+)/i, /(xbox); +xbox ([^\);]+)/i, /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i, /(mint)[\/\(\) ]?(\w*)/i, /(mageia|vectorlinux)[; ]/i, /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i, /(hurd|linux) ?([\w\.]*)/i, /(gnu) ?([\w\.]*)/i, /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i, /(haiku) (\w+)/i], [se, pe], [/(sunos) ?([\w\.\d]*)/i], [[se, "Solaris"], pe], [/((?:open)?solaris)[-\/ ]?([\w\.]*)/i, /(aix) ((\d)(?=\.|\)| )[\w\.])*/i, /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i, /(unix) ?([\w\.]*)/i], [se, pe]]
            }
            , qt = function (ft, bt) {
                if (typeof ft === X && (bt = ft,
                    ft = U),
                    !(this instanceof qt))
                    return new qt(ft, bt).getResult();
                var st = typeof W !== J && W.navigator ? W.navigator : U
                    , Lt = ft || (st && st.userAgent ? st.userAgent : K)
                    , nn = st && st.userAgentData ? st.userAgentData : U
                    , rn = bt ? Ie(fn, bt) : fn
                    , xt = st && st.userAgent == Lt;
                return this.getBrowser = function () {
                    var ot = {};
                    return ot[se] = U,
                        ot[pe] = U,
                        Rt.call(ot, Lt, rn.browser),
                        ot[oe] = et(ot[pe]),
                        xt && st && st.brave && typeof st.brave.isBrave == Z && (ot[se] = "Brave"),
                        ot
                }
                    ,
                    this.getCPU = function () {
                        var ot = {};
                        return ot[Ee] = U,
                            Rt.call(ot, Lt, rn.cpu),
                            ot
                    }
                    ,
                    this.getDevice = function () {
                        var ot = {};
                        return ot[ue] = U,
                            ot[ie] = U,
                            ot[le] = U,
                            Rt.call(ot, Lt, rn.device),
                            xt && !ot[le] && nn && nn.mobile && (ot[le] = ke),
                            xt && ot[ie] == "Macintosh" && st && typeof st.standalone !== J && st.maxTouchPoints && st.maxTouchPoints > 2 && (ot[ie] = "iPad",
                                ot[le] = Ue),
                            ot
                    }
                    ,
                    this.getEngine = function () {
                        var ot = {};
                        return ot[se] = U,
                            ot[pe] = U,
                            Rt.call(ot, Lt, rn.engine),
                            ot
                    }
                    ,
                    this.getOS = function () {
                        var ot = {};
                        return ot[se] = U,
                            ot[pe] = U,
                            Rt.call(ot, Lt, rn.os),
                            xt && !ot[se] && nn && nn.platform && nn.platform != "Unknown" && (ot[se] = nn.platform.replace(/chrome os/i, Te).replace(/macos/i, we)),
                            ot
                    }
                    ,
                    this.getResult = function () {
                        return {
                            ua: this.getUA(),
                            browser: this.getBrowser(),
                            engine: this.getEngine(),
                            os: this.getOS(),
                            device: this.getDevice(),
                            cpu: this.getCPU()
                        }
                    }
                    ,
                    this.getUA = function () {
                        return Lt
                    }
                    ,
                    this.setUA = function (ot) {
                        return Lt = typeof ot === re && ot.length > ye ? Mt(ot, ye) : ot,
                            this
                    }
                    ,
                    this.setUA(Lt),
                    this
            };
        qt.VERSION = V,
            qt.BROWSER = Re([se, pe, oe]),
            qt.CPU = Re([Ee]),
            qt.DEVICE = Re([ie, ue, le, Ce, ke, be, Ue, Be, xe]),
            qt.ENGINE = qt.OS = Re([se, pe]),
            R.exports && ($ = R.exports = qt),
            $.UAParser = qt;
        var Jt = typeof W !== J && (W.jQuery || W.Zepto);
        if (Jt && !Jt.ua) {
            var Xt = new qt;
            Jt.ua = Xt.getResult(),
                Jt.ua.get = function () {
                    return Xt.getUA()
                }
                ,
                Jt.ua.set = function (ft) {
                    Xt.setUA(ft);
                    var bt = Xt.getResult();
                    for (var st in bt)
                        Jt.ua[st] = bt[st]
                }
        }
    }
    )(typeof window == "object" ? window : commonjsGlobal)
}
)(uaParser, uaParser.exports);
var uaParserExports = uaParser.exports;
const UAParser = getDefaultExportFromCjs(uaParserExports);
var isMergeableObject = function ($) {
    return isNonNullObject($) && !isSpecial($)
};
function isNonNullObject(R) {
    return !!R && typeof R == "object"
}
function isSpecial(R) {
    var $ = Object.prototype.toString.call(R);
    return $ === "[object RegExp]" || $ === "[object Date]" || isReactElement(R)
}
var canUseSymbol = typeof Symbol == "function" && Symbol.for
    , REACT_ELEMENT_TYPE = canUseSymbol ? Symbol.for("react.element") : 60103;
function isReactElement(R) {
    return R.$$typeof === REACT_ELEMENT_TYPE
}
function emptyTarget(R) {
    return Array.isArray(R) ? [] : {}
}
function cloneUnlessOtherwiseSpecified(R, $) {
    return $.clone !== !1 && $.isMergeableObject(R) ? deepmerge(emptyTarget(R), R, $) : R
}
function defaultArrayMerge(R, $, W) {
    return R.concat($).map(function (U) {
        return cloneUnlessOtherwiseSpecified(U, W)
    })
}
function getMergeFunction(R, $) {
    if (!$.customMerge)
        return deepmerge;
    var W = $.customMerge(R);
    return typeof W == "function" ? W : deepmerge
}
function getEnumerableOwnPropertySymbols(R) {
    return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(R).filter(function ($) {
        return Object.propertyIsEnumerable.call(R, $)
    }) : []
}
function getKeys(R) {
    return Object.keys(R).concat(getEnumerableOwnPropertySymbols(R))
}
function propertyIsOnObject(R, $) {
    try {
        return $ in R
    } catch {
        return !1
    }
}
function propertyIsUnsafe(R, $) {
    return propertyIsOnObject(R, $) && !(Object.hasOwnProperty.call(R, $) && Object.propertyIsEnumerable.call(R, $))
}
function mergeObject(R, $, W) {
    var U = {};
    return W.isMergeableObject(R) && getKeys(R).forEach(function (V) {
        U[V] = cloneUnlessOtherwiseSpecified(R[V], W)
    }),
        getKeys($).forEach(function (V) {
            propertyIsUnsafe(R, V) || (propertyIsOnObject(R, V) && W.isMergeableObject($[V]) ? U[V] = getMergeFunction(V, W)(R[V], $[V], W) : U[V] = cloneUnlessOtherwiseSpecified($[V], W))
        }),
        U
}
function deepmerge(R, $, W) {
    W = W || {},
        W.arrayMerge = W.arrayMerge || defaultArrayMerge,
        W.isMergeableObject = W.isMergeableObject || isMergeableObject,
        W.cloneUnlessOtherwiseSpecified = cloneUnlessOtherwiseSpecified;
    var U = Array.isArray($)
        , V = Array.isArray(R)
        , K = U === V;
    return K ? U ? W.arrayMerge(R, $, W) : mergeObject(R, $, W) : cloneUnlessOtherwiseSpecified($, W)
}
deepmerge.all = function ($, W) {
    if (!Array.isArray($))
        throw new Error("first argument should be an array");
    return $.reduce(function (U, V) {
        return deepmerge(U, V, W)
    }, {})
}
    ;
var deepmerge_1 = deepmerge
    , cjs = deepmerge_1;
const deepmerge$1 = getDefaultExportFromCjs(cjs);
var classnames = {
    exports: {}
};
/*!
    Copyright (c) 2018 Jed Watson.
    Licensed under the MIT License (MIT), see
    http://jedwatson.github.io/classnames
*/
(function (R) {
    (function () {
        var $ = {}.hasOwnProperty;
        function W() {
            for (var K = "", Y = 0; Y < arguments.length; Y++) {
                var Z = arguments[Y];
                Z && (K = V(K, U(Z)))
            }
            return K
        }
        function U(K) {
            if (typeof K == "string" || typeof K == "number")
                return K;
            if (typeof K != "object")
                return "";
            if (Array.isArray(K))
                return W.apply(null, K);
            if (K.toString !== Object.prototype.toString && !K.toString.toString().includes("[native code]"))
                return K.toString();
            var Y = "";
            for (var Z in K)
                $.call(K, Z) && K[Z] && (Y = V(Y, Z));
            return Y
        }
        function V(K, Y) {
            return Y ? K ? K + " " + Y : K + Y : K
        }
        R.exports ? (W.default = W,
            R.exports = W) : window.classNames = W
    }
    )()
}
)(classnames);
var classnamesExports = classnames.exports;
const cn = getDefaultExportFromCjs(classnamesExports);
var __defProp = Object.defineProperty, __defProps = Object.defineProperties, __getOwnPropDescs = Object.getOwnPropertyDescriptors, __getOwnPropSymbols = Object.getOwnPropertySymbols, __hasOwnProp = Object.prototype.hasOwnProperty, __propIsEnum = Object.prototype.propertyIsEnumerable, __defNormalProp = (R, $, W) => $ in R ? __defProp(R, $, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: W
}) : R[$] = W, __spreadValues = (R, $) => {
    for (var W in $ || ($ = {}))
        __hasOwnProp.call($, W) && __defNormalProp(R, W, $[W]);
    if (__getOwnPropSymbols)
        for (var W of __getOwnPropSymbols($))
            __propIsEnum.call($, W) && __defNormalProp(R, W, $[W]);
    return R
}
    , __spreadProps = (R, $) => __defProps(R, __getOwnPropDescs($)), __publicField = (R, $, W) => (__defNormalProp(R, typeof $ != "symbol" ? $ + "" : $, W),
        W), __async = (R, $, W) => new Promise((U, V) => {
            var K = J => {
                try {
                    Z(W.next(J))
                } catch (X) {
                    V(X)
                }
            }
                , Y = J => {
                    try {
                        Z(W.throw(J))
                    } catch (X) {
                        V(X)
                    }
                }
                , Z = J => J.done ? U(J.value) : Promise.resolve(J.value).then(K, Y);
            Z((W = W.apply(R, $)).next())
        }
        ), _a, _b, _c, _d, _e, _f, _g, _h;
const sharedConfig = {};
function setHydrateContext(R) {
    sharedConfig.context = R
}
const equalFn = (R, $) => R === $
    , $PROXY = Symbol("solid-proxy")
    , $TRACK = Symbol("solid-track")
    , signalOptions = {
        equals: equalFn
    };
let runEffects = runQueue;
const STALE = 1
    , PENDING = 2
    , UNOWNED = {
        owned: null,
        cleanups: null,
        context: null,
        owner: null
    }
    , NO_INIT = {};
var Owner = null;
let Transition$1 = null
    , Listener = null
    , Updates = null
    , Effects = null
    , ExecCount = 0;
function createRoot(R, $) {
    const W = Listener
        , U = Owner
        , V = R.length === 0
        , K = V ? UNOWNED : {
            owned: null,
            cleanups: null,
            context: null,
            owner: $ === void 0 ? U : $
        }
        , Y = V ? R : () => R(() => untrack(() => cleanNode(K)));
    Owner = K,
        Listener = null;
    try {
        return runUpdates(Y, !0)
    } finally {
        Listener = W,
            Owner = U
    }
}
function createSignal(R, $) {
    $ = $ ? Object.assign({}, signalOptions, $) : signalOptions;
    const W = {
        value: R,
        observers: null,
        observerSlots: null,
        comparator: $.equals || void 0
    }
        , U = V => (typeof V == "function" && (V = V(W.value)),
            writeSignal(W, V));
    return [readSignal.bind(W), U]
}
function createComputed(R, $, W) {
    const U = createComputation(R, $, !0, STALE);
    updateComputation(U)
}
function createRenderEffect(R, $, W) {
    const U = createComputation(R, $, !1, STALE);
    updateComputation(U)
}
function createEffect(R, $, W) {
    runEffects = runUserEffects;
    const U = createComputation(R, $, !1, STALE);
    U.user = !0,
        Effects ? Effects.push(U) : updateComputation(U)
}
function createMemo(R, $, W) {
    W = W ? Object.assign({}, signalOptions, W) : signalOptions;
    const U = createComputation(R, $, !0, 0);
    return U.observers = null,
        U.observerSlots = null,
        U.comparator = W.equals || void 0,
        updateComputation(U),
        readSignal.bind(U)
}
function createResource(R, $, W) {
    let U, V, K;
    arguments.length === 2 && typeof $ == "object" || arguments.length === 1 ? (U = !0,
        V = R,
        K = $ || {}) : (U = R,
            V = $,
            K = W || {});
    let Y = null
        , Z = NO_INIT
        , J = null
        , X = !1
        , re = "initialValue" in K
        , oe = typeof U == "function" && createMemo(U);
    const ie = new Set
        , [se, le] = (K.storage || createSignal)(K.initialValue)
        , [ue, pe] = createSignal(void 0)
        , [Ee, Ce] = createSignal(void 0, {
            equals: !1
        })
        , [ke, Ue] = createSignal(re ? "ready" : "unresolved");
    if (sharedConfig.context) {
        J = `${sharedConfig.context.id}${sharedConfig.context.count++}`;
        let de;
        K.ssrLoadFrom === "initial" ? Z = K.initialValue : sharedConfig.load && (de = sharedConfig.load(J)) && (Z = de[0])
    }
    function be(de, Se, he, ce) {
        return Y === de && (Y = null,
            re = !0,
            (de === Z || Se === Z) && K.onHydrated && queueMicrotask(() => K.onHydrated(ce, {
                value: Se
            })),
            Z = NO_INIT,
            Be(Se, he)),
            Se
    }
    function Be(de, Se) {
        runUpdates(() => {
            Se === void 0 && le(() => de),
                Ue(Se !== void 0 ? "errored" : "ready"),
                pe(Se);
            for (const he of ie.keys())
                he.decrement();
            ie.clear()
        }
            , !1)
    }
    function xe() {
        const de = SuspenseContext
            , Se = se()
            , he = ue();
        if (he !== void 0 && !Y)
            throw he;
        return Listener && !Listener.user && de && createComputed(() => {
            Ee(),
                Y && (de.resolved || ie.has(de) || (de.increment(),
                    ie.add(de)))
        }
        ),
            Se
    }
    function ye(de = !0) {
        if (de !== !1 && X)
            return;
        X = !1;
        const Se = oe ? oe() : U;
        if (Se == null || Se === !1) {
            be(Y, untrack(se));
            return
        }
        const he = Z !== NO_INIT ? Z : untrack(() => V(Se, {
            value: se(),
            refetching: de
        }));
        return typeof he != "object" || !(he && "then" in he) ? (be(Y, he, void 0, Se),
            he) : (Y = he,
                X = !0,
                queueMicrotask(() => X = !1),
                runUpdates(() => {
                    Ue(re ? "refreshing" : "pending"),
                        Ce()
                }
                    , !1),
                he.then(ce => be(he, ce, void 0, Se), ce => be(he, void 0, castError(ce), Se)))
    }
    return Object.defineProperties(xe, {
        state: {
            get: () => ke()
        },
        error: {
            get: () => ue()
        },
        loading: {
            get() {
                const de = ke();
                return de === "pending" || de === "refreshing"
            }
        },
        latest: {
            get() {
                if (!re)
                    return xe();
                const de = ue();
                if (de && !Y)
                    throw de;
                return se()
            }
        }
    }),
        oe ? createComputed(() => ye(!1)) : ye(!1),
        [xe, {
            refetch: ye,
            mutate: le
        }]
}
function batch(R) {
    return runUpdates(R, !1)
}
function untrack(R) {
    if (Listener === null)
        return R();
    const $ = Listener;
    Listener = null;
    try {
        return R()
    } finally {
        Listener = $
    }
}
function on(R, $, W) {
    const U = Array.isArray(R);
    let V, K = W && W.defer;
    return Y => {
        let Z;
        if (U) {
            Z = Array(R.length);
            for (let X = 0; X < R.length; X++)
                Z[X] = R[X]()
        } else
            Z = R();
        if (K) {
            K = !1;
            return
        }
        const J = untrack(() => $(Z, V, Y));
        return V = Z,
            J
    }
}
function onMount(R) {
    createEffect(() => untrack(R))
}
function onCleanup(R) {
    return Owner === null || (Owner.cleanups === null ? Owner.cleanups = [R] : Owner.cleanups.push(R)),
        R
}
function getListener() {
    return Listener
}
function getOwner() {
    return Owner
}
function createContext(R, $) {
    const W = Symbol("context");
    return {
        id: W,
        Provider: createProvider(W),
        defaultValue: R
    }
}
function useContext(R) {
    let $;
    return ($ = lookup(Owner, R.id)) !== void 0 ? $ : R.defaultValue
}
function children(R) {
    const $ = createMemo(R)
        , W = createMemo(() => resolveChildren($()));
    return W.toArray = () => {
        const U = W();
        return Array.isArray(U) ? U : U != null ? [U] : []
    }
        ,
        W
}
let SuspenseContext;
function readSignal() {
    const R = Transition$1;
    if (this.sources && (this.state || R))
        if (this.state === STALE || R)
            updateComputation(this);
        else {
            const $ = Updates;
            Updates = null,
                runUpdates(() => lookUpstream(this), !1),
                Updates = $
        }
    if (Listener) {
        const $ = this.observers ? this.observers.length : 0;
        Listener.sources ? (Listener.sources.push(this),
            Listener.sourceSlots.push($)) : (Listener.sources = [this],
                Listener.sourceSlots = [$]),
            this.observers ? (this.observers.push(Listener),
                this.observerSlots.push(Listener.sources.length - 1)) : (this.observers = [Listener],
                    this.observerSlots = [Listener.sources.length - 1])
    }
    return this.value
}
function writeSignal(R, $, W) {
    let U = R.value;
    return (!R.comparator || !R.comparator(U, $)) && (R.value = $,
        R.observers && R.observers.length && runUpdates(() => {
            for (let V = 0; V < R.observers.length; V += 1) {
                const K = R.observers[V]
                    , Y = Transition$1 && Transition$1.running;
                Y && Transition$1.disposed.has(K),
                    (Y && !K.tState || !Y && !K.state) && (K.pure ? Updates.push(K) : Effects.push(K),
                        K.observers && markDownstream(K)),
                    Y || (K.state = STALE)
            }
            if (Updates.length > 1e6)
                throw Updates = [],
                new Error
        }
            , !1)),
        $
}
function updateComputation(R) {
    if (!R.fn)
        return;
    cleanNode(R);
    const $ = Owner
        , W = Listener
        , U = ExecCount;
    Listener = Owner = R,
        runComputation(R, R.value, U),
        Listener = W,
        Owner = $
}
function runComputation(R, $, W) {
    let U;
    try {
        U = R.fn($)
    } catch (V) {
        R.pure && (R.state = STALE,
            R.owned && R.owned.forEach(cleanNode),
            R.owned = null),
            handleError(V)
    }
    (!R.updatedAt || R.updatedAt <= W) && (R.updatedAt != null && "observers" in R ? writeSignal(R, U) : R.value = U,
        R.updatedAt = W)
}
function createComputation(R, $, W, U = STALE, V) {
    const K = {
        fn: R,
        state: U,
        updatedAt: null,
        owned: null,
        sources: null,
        sourceSlots: null,
        cleanups: null,
        value: $,
        owner: Owner,
        context: null,
        pure: W
    };
    return Owner === null || Owner !== UNOWNED && (Owner.owned ? Owner.owned.push(K) : Owner.owned = [K]),
        K
}
function runTop(R) {
    const $ = Transition$1;
    if (R.state === 0 || $)
        return;
    if (R.state === PENDING || $)
        return lookUpstream(R);
    if (R.suspense && untrack(R.suspense.inFallback))
        return R.suspense.effects.push(R);
    const W = [R];
    for (; (R = R.owner) && (!R.updatedAt || R.updatedAt < ExecCount);)
        (R.state || $) && W.push(R);
    for (let U = W.length - 1; U >= 0; U--)
        if (R = W[U],
            R.state === STALE || $)
            updateComputation(R);
        else if (R.state === PENDING || $) {
            const V = Updates;
            Updates = null,
                runUpdates(() => lookUpstream(R, W[0]), !1),
                Updates = V
        }
}
function runUpdates(R, $) {
    if (Updates)
        return R();
    let W = !1;
    $ || (Updates = []),
        Effects ? W = !0 : Effects = [],
        ExecCount++;
    try {
        const U = R();
        return completeUpdates(W),
            U
    } catch (U) {
        W || (Effects = null),
            Updates = null,
            handleError(U)
    }
}
function completeUpdates(R) {
    if (Updates && (runQueue(Updates),
        Updates = null),
        R)
        return;
    const $ = Effects;
    Effects = null,
        $.length && runUpdates(() => runEffects($), !1)
}
function runQueue(R) {
    for (let $ = 0; $ < R.length; $++)
        runTop(R[$])
}
function runUserEffects(R) {
    let $, W = 0;
    for ($ = 0; $ < R.length; $++) {
        const U = R[$];
        U.user ? R[W++] = U : runTop(U)
    }
    for (sharedConfig.context && setHydrateContext(),
        $ = 0; $ < W; $++)
        runTop(R[$])
}
function lookUpstream(R, $) {
    const W = Transition$1;
    R.state = 0;
    for (let U = 0; U < R.sources.length; U += 1) {
        const V = R.sources[U];
        V.sources && (V.state === STALE || W ? V !== $ && runTop(V) : (V.state === PENDING || W) && lookUpstream(V, $))
    }
}
function markDownstream(R) {
    const $ = Transition$1;
    for (let W = 0; W < R.observers.length; W += 1) {
        const U = R.observers[W];
        (!U.state || $) && (U.state = PENDING,
            U.pure ? Updates.push(U) : Effects.push(U),
            U.observers && markDownstream(U))
    }
}
function cleanNode(R) {
    let $;
    if (R.sources)
        for (; R.sources.length;) {
            const W = R.sources.pop()
                , U = R.sourceSlots.pop()
                , V = W.observers;
            if (V && V.length) {
                const K = V.pop()
                    , Y = W.observerSlots.pop();
                U < V.length && (K.sourceSlots[Y] = U,
                    V[U] = K,
                    W.observerSlots[U] = Y)
            }
        }
    if (R.owned) {
        for ($ = 0; $ < R.owned.length; $++)
            cleanNode(R.owned[$]);
        R.owned = null
    }
    if (R.cleanups) {
        for ($ = 0; $ < R.cleanups.length; $++)
            R.cleanups[$]();
        R.cleanups = null
    }
    R.state = 0,
        R.context = null
}
function castError(R) {
    return R instanceof Error || typeof R == "string" ? R : new Error("Unknown error")
}
function handleError(R) {
    throw R = castError(R),
    R
}
function lookup(R, $) {
    return R ? R.context && R.context[$] !== void 0 ? R.context[$] : lookup(R.owner, $) : void 0
}
function resolveChildren(R) {
    if (typeof R == "function" && !R.length)
        return resolveChildren(R());
    if (Array.isArray(R)) {
        const $ = [];
        for (let W = 0; W < R.length; W++) {
            const U = resolveChildren(R[W]);
            Array.isArray(U) ? $.push.apply($, U) : $.push(U)
        }
        return $
    }
    return R
}
function createProvider(R, $) {
    return function (U) {
        let V;
        return createRenderEffect(() => V = untrack(() => (Owner.context = {
            [R]: U.value
        },
            children(() => U.children))), void 0),
            V
    }
}
const FALLBACK = Symbol("fallback");
function dispose(R) {
    for (let $ = 0; $ < R.length; $++)
        R[$]()
}
function mapArray(R, $, W = {}) {
    let U = []
        , V = []
        , K = []
        , Y = 0
        , Z = $.length > 1 ? [] : null;
    return onCleanup(() => dispose(K)),
        () => {
            let J = R() || [], X, re;
            return J[$TRACK],
                untrack(() => {
                    let ie = J.length, se, le, ue, pe, Ee, Ce, ke, Ue, be;
                    if (ie === 0)
                        Y !== 0 && (dispose(K),
                            K = [],
                            U = [],
                            V = [],
                            Y = 0,
                            Z && (Z = [])),
                            W.fallback && (U = [FALLBACK],
                                V[0] = createRoot(Be => (K[0] = Be,
                                    W.fallback())),
                                Y = 1);
                    else if (Y === 0) {
                        for (V = new Array(ie),
                            re = 0; re < ie; re++)
                            U[re] = J[re],
                                V[re] = createRoot(oe);
                        Y = ie
                    } else {
                        for (ue = new Array(ie),
                            pe = new Array(ie),
                            Z && (Ee = new Array(ie)),
                            Ce = 0,
                            ke = Math.min(Y, ie); Ce < ke && U[Ce] === J[Ce]; Ce++)
                            ;
                        for (ke = Y - 1,
                            Ue = ie - 1; ke >= Ce && Ue >= Ce && U[ke] === J[Ue]; ke--,
                            Ue--)
                            ue[Ue] = V[ke],
                                pe[Ue] = K[ke],
                                Z && (Ee[Ue] = Z[ke]);
                        for (se = new Map,
                            le = new Array(Ue + 1),
                            re = Ue; re >= Ce; re--)
                            be = J[re],
                                X = se.get(be),
                                le[re] = X === void 0 ? -1 : X,
                                se.set(be, re);
                        for (X = Ce; X <= ke; X++)
                            be = U[X],
                                re = se.get(be),
                                re !== void 0 && re !== -1 ? (ue[re] = V[X],
                                    pe[re] = K[X],
                                    Z && (Ee[re] = Z[X]),
                                    re = le[re],
                                    se.set(be, re)) : K[X]();
                        for (re = Ce; re < ie; re++)
                            re in ue ? (V[re] = ue[re],
                                K[re] = pe[re],
                                Z && (Z[re] = Ee[re],
                                    Z[re](re))) : V[re] = createRoot(oe);
                        V = V.slice(0, Y = ie),
                            U = J.slice(0)
                    }
                    return V
                }
                );
            function oe(ie) {
                if (K[re] = ie,
                    Z) {
                    const [se, le] = createSignal(re);
                    return Z[re] = le,
                        $(J[re], se)
                }
                return $(J[re])
            }
        }
}
function createComponent(R, $) {
    return untrack(() => R($ || {}))
}
function trueFn() {
    return !0
}
const propTraps = {
    get(R, $, W) {
        return $ === $PROXY ? W : R.get($)
    },
    has(R, $) {
        return $ === $PROXY ? !0 : R.has($)
    },
    set: trueFn,
    deleteProperty: trueFn,
    getOwnPropertyDescriptor(R, $) {
        return {
            configurable: !0,
            enumerable: !0,
            get() {
                return R.get($)
            },
            set: trueFn,
            deleteProperty: trueFn
        }
    },
    ownKeys(R) {
        return R.keys()
    }
};
function resolveSource(R) {
    return (R = typeof R == "function" ? R() : R) ? R : {}
}
function mergeProps(...R) {
    let $ = !1;
    for (let U = 0; U < R.length; U++) {
        const V = R[U];
        $ = $ || !!V && $PROXY in V,
            R[U] = typeof V == "function" ? ($ = !0,
                createMemo(V)) : V
    }
    if ($)
        return new Proxy({
            get(U) {
                for (let V = R.length - 1; V >= 0; V--) {
                    const K = resolveSource(R[V])[U];
                    if (K !== void 0)
                        return K
                }
            },
            has(U) {
                for (let V = R.length - 1; V >= 0; V--)
                    if (U in resolveSource(R[V]))
                        return !0;
                return !1
            },
            keys() {
                const U = [];
                for (let V = 0; V < R.length; V++)
                    U.push(...Object.keys(resolveSource(R[V])));
                return [...new Set(U)]
            }
        }, propTraps);
    const W = {};
    for (let U = R.length - 1; U >= 0; U--)
        if (R[U]) {
            const V = Object.getOwnPropertyDescriptors(R[U]);
            for (const K in V)
                K in W || Object.defineProperty(W, K, {
                    enumerable: !0,
                    get() {
                        for (let Y = R.length - 1; Y >= 0; Y--) {
                            const Z = (R[Y] || {})[K];
                            if (Z !== void 0)
                                return Z
                        }
                    }
                })
        }
    return W
}
function splitProps(R, ...$) {
    const W = new Set($.flat());
    if ($PROXY in R) {
        const V = $.map(K => new Proxy({
            get(Y) {
                return K.includes(Y) ? R[Y] : void 0
            },
            has(Y) {
                return K.includes(Y) && Y in R
            },
            keys() {
                return K.filter(Y => Y in R)
            }
        }, propTraps));
        return V.push(new Proxy({
            get(K) {
                return W.has(K) ? void 0 : R[K]
            },
            has(K) {
                return W.has(K) ? !1 : K in R
            },
            keys() {
                return Object.keys(R).filter(K => !W.has(K))
            }
        }, propTraps)),
            V
    }
    const U = Object.getOwnPropertyDescriptors(R);
    return $.push(Object.keys(U).filter(V => !W.has(V))),
        $.map(V => {
            const K = {};
            for (let Y = 0; Y < V.length; Y++) {
                const Z = V[Y];
                Z in R && Object.defineProperty(K, Z, U[Z] ? U[Z] : {
                    get() {
                        return R[Z]
                    },
                    set() {
                        return !0
                    },
                    enumerable: !0
                })
            }
            return K
        }
        )
}
function For(R) {
    const $ = "fallback" in R && {
        fallback: () => R.fallback
    };
    return createMemo(mapArray(() => R.each, R.children, $ || void 0))
}
function Show(R) {
    let $ = !1;
    const W = R.keyed
        , U = createMemo(() => R.when, void 0, {
            equals: (V, K) => $ ? V === K : !V == !K
        });
    return createMemo(() => {
        const V = U();
        if (V) {
            const K = R.children
                , Y = typeof K == "function" && K.length > 0;
            return $ = W || Y,
                Y ? untrack(() => K(V)) : K
        }
        return R.fallback
    }
        , void 0, void 0)
}
function Switch(R) {
    let $ = !1
        , W = !1;
    const U = (Y, Z) => Y[0] === Z[0] && ($ ? Y[1] === Z[1] : !Y[1] == !Z[1]) && Y[2] === Z[2]
        , V = children(() => R.children)
        , K = createMemo(() => {
            let Y = V();
            Array.isArray(Y) || (Y = [Y]);
            for (let Z = 0; Z < Y.length; Z++) {
                const J = Y[Z].when;
                if (J)
                    return W = !!Y[Z].keyed,
                        [Z, J, Y[Z]]
            }
            return [-1]
        }
            , void 0, {
            equals: U
        });
    return createMemo(() => {
        const [Y, Z, J] = K();
        if (Y < 0)
            return R.fallback;
        const X = J.children
            , re = typeof X == "function" && X.length > 0;
        return $ = W || re,
            re ? untrack(() => X(Z)) : X
    }
        , void 0, void 0)
}
function Match(R) {
    return R
}
const booleans = ["allowfullscreen", "async", "autofocus", "autoplay", "checked", "controls", "default", "disabled", "formnovalidate", "hidden", "indeterminate", "ismap", "loop", "multiple", "muted", "nomodule", "novalidate", "open", "playsinline", "readonly", "required", "reversed", "seamless", "selected"]
    , Properties = new Set(["className", "value", "readOnly", "formNoValidate", "isMap", "noModule", "playsInline", ...booleans])
    , ChildProperties = new Set(["innerHTML", "textContent", "innerText", "children"])
    , Aliases = Object.assign(Object.create(null), {
        className: "class",
        htmlFor: "for"
    })
    , PropAliases = Object.assign(Object.create(null), {
        class: "className",
        formnovalidate: "formNoValidate",
        ismap: "isMap",
        nomodule: "noModule",
        playsinline: "playsInline",
        readonly: "readOnly"
    })
    , DelegatedEvents = new Set(["beforeinput", "click", "dblclick", "contextmenu", "focusin", "focusout", "input", "keydown", "keyup", "mousedown", "mousemove", "mouseout", "mouseover", "mouseup", "pointerdown", "pointermove", "pointerout", "pointerover", "pointerup", "touchend", "touchmove", "touchstart"])
    , SVGElements = new Set(["altGlyph", "altGlyphDef", "altGlyphItem", "animate", "animateColor", "animateMotion", "animateTransform", "circle", "clipPath", "color-profile", "cursor", "defs", "desc", "ellipse", "feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "filter", "font", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignObject", "g", "glyph", "glyphRef", "hkern", "image", "line", "linearGradient", "marker", "mask", "metadata", "missing-glyph", "mpath", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "set", "stop", "svg", "switch", "symbol", "text", "textPath", "tref", "tspan", "use", "view", "vkern"])
    , SVGNamespace = {
        xlink: "http://www.w3.org/1999/xlink",
        xml: "http://www.w3.org/XML/1998/namespace"
    };
function reconcileArrays(R, $, W) {
    let U = W.length
        , V = $.length
        , K = U
        , Y = 0
        , Z = 0
        , J = $[V - 1].nextSibling
        , X = null;
    for (; Y < V || Z < K;) {
        if ($[Y] === W[Z]) {
            Y++,
                Z++;
            continue
        }
        for (; $[V - 1] === W[K - 1];)
            V--,
                K--;
        if (V === Y) {
            const re = K < U ? Z ? W[Z - 1].nextSibling : W[K - Z] : J;
            for (; Z < K;)
                R.insertBefore(W[Z++], re)
        } else if (K === Z)
            for (; Y < V;)
                (!X || !X.has($[Y])) && $[Y].remove(),
                    Y++;
        else if ($[Y] === W[K - 1] && W[Z] === $[V - 1]) {
            const re = $[--V].nextSibling;
            R.insertBefore(W[Z++], $[Y++].nextSibling),
                R.insertBefore(W[--K], re),
                $[V] = W[K]
        } else {
            if (!X) {
                X = new Map;
                let oe = Z;
                for (; oe < K;)
                    X.set(W[oe], oe++)
            }
            const re = X.get($[Y]);
            if (re != null)
                if (Z < re && re < K) {
                    let oe = Y, ie = 1, se;
                    for (; ++oe < V && oe < K && !((se = X.get($[oe])) == null || se !== re + ie);)
                        ie++;
                    if (ie > re - Z) {
                        const le = $[Y];
                        for (; Z < re;)
                            R.insertBefore(W[Z++], le)
                    } else
                        R.replaceChild(W[Z++], $[Y++])
                } else
                    Y++;
            else
                $[Y++].remove()
        }
    }
}
const $$EVENTS = "_$DX_DELEGATE";
function render(R, $, W, U = {}) {
    let V;
    return createRoot(K => {
        V = K,
            $ === document ? R() : insert($, R(), $.firstChild ? null : void 0, W)
    }
        , U.owner),
        () => {
            V(),
                $.textContent = ""
        }
}
function template$1(R, $, W) {
    if (typeof window > "u")
        return null;
    const U = document.createElement("template");
    U.innerHTML = R;
    let V = U.content.firstChild;
    return W && (V = V.firstChild),
        V
}
function delegateEvents(R, $ = window.document) {
    const W = $[$$EVENTS] || ($[$$EVENTS] = new Set);
    for (let U = 0, V = R.length; U < V; U++) {
        const K = R[U];
        W.has(K) || (W.add(K),
            $.addEventListener(K, eventHandler))
    }
}
function setAttribute(R, $, W) {
    W == null ? R.removeAttribute($) : R.setAttribute($, W)
}
function setAttributeNS(R, $, W, U) {
    U == null ? R.removeAttributeNS($, W) : R.setAttributeNS($, W, U)
}
function className(R, $) {
    $ == null ? R.removeAttribute("class") : R.className = $
}
function addEventListener(R, $, W, U) {
    if (U)
        Array.isArray(W) ? (R[`$$${$}`] = W[0],
            R[`$$${$}Data`] = W[1]) : R[`$$${$}`] = W;
    else if (Array.isArray(W)) {
        const V = W[0];
        R.addEventListener($, W[0] = K => V.call(R, W[1], K))
    } else
        R.addEventListener($, W)
}
function classList(R, $, W = {}) {
    const U = Object.keys($ || {})
        , V = Object.keys(W);
    let K, Y;
    for (K = 0,
        Y = V.length; K < Y; K++) {
        const Z = V[K];
        !Z || Z === "undefined" || $[Z] || (toggleClassKey(R, Z, !1),
            delete W[Z])
    }
    for (K = 0,
        Y = U.length; K < Y; K++) {
        const Z = U[K]
            , J = !!$[Z];
        !Z || Z === "undefined" || W[Z] === J || !J || (toggleClassKey(R, Z, !0),
            W[Z] = J)
    }
    return W
}
function style(R, $, W) {
    if (!$)
        return W ? setAttribute(R, "style") : $;
    const U = R.style;
    if (typeof $ == "string")
        return U.cssText = $;
    typeof W == "string" && (U.cssText = W = void 0),
        W || (W = {}),
        $ || ($ = {});
    let V, K;
    for (K in W)
        $[K] == null && U.removeProperty(K),
            delete W[K];
    for (K in $)
        V = $[K],
            V !== W[K] && (U.setProperty(K, V),
                W[K] = V);
    return W
}
function spread(R, $ = {}, W, U) {
    const V = {};
    return U || createRenderEffect(() => V.children = insertExpression(R, $.children, V.children)),
        createRenderEffect(() => $.ref && $.ref(R)),
        createRenderEffect(() => assign(R, $, W, !0, V, !0)),
        V
}
function use(R, $, W) {
    return untrack(() => R($, W))
}
function insert(R, $, W, U) {
    if (W !== void 0 && !U && (U = []),
        typeof $ != "function")
        return insertExpression(R, $, U, W);
    createRenderEffect(V => insertExpression(R, $(), V, W), U)
}
function assign(R, $, W, U, V = {}, K = !1) {
    $ || ($ = {});
    for (const Y in V)
        if (!(Y in $)) {
            if (Y === "children")
                continue;
            V[Y] = assignProp(R, Y, null, V[Y], W, K)
        }
    for (const Y in $) {
        if (Y === "children") {
            U || insertExpression(R, $.children);
            continue
        }
        const Z = $[Y];
        V[Y] = assignProp(R, Y, Z, V[Y], W, K)
    }
}
function getNextElement(R) {
    let $, W;
    return !sharedConfig.context || !($ = sharedConfig.registry.get(W = getHydrationKey())) ? R.cloneNode(!0) : (sharedConfig.completed && sharedConfig.completed.add($),
        sharedConfig.registry.delete(W),
        $)
}
function toPropertyName(R) {
    return R.toLowerCase().replace(/-([a-z])/g, ($, W) => W.toUpperCase())
}
function toggleClassKey(R, $, W) {
    const U = $.trim().split(/\s+/);
    for (let V = 0, K = U.length; V < K; V++)
        R.classList.toggle(U[V], W)
}
function assignProp(R, $, W, U, V, K) {
    let Y, Z, J;
    if ($ === "style")
        return style(R, W, U);
    if ($ === "classList")
        return classList(R, W, U);
    if (W === U)
        return U;
    if ($ === "ref")
        K || W(R);
    else if ($.slice(0, 3) === "on:") {
        const X = $.slice(3);
        U && R.removeEventListener(X, U),
            W && R.addEventListener(X, W)
    } else if ($.slice(0, 10) === "oncapture:") {
        const X = $.slice(10);
        U && R.removeEventListener(X, U, !0),
            W && R.addEventListener(X, W, !0)
    } else if ($.slice(0, 2) === "on") {
        const X = $.slice(2).toLowerCase()
            , re = DelegatedEvents.has(X);
        if (!re && U) {
            const oe = Array.isArray(U) ? U[0] : U;
            R.removeEventListener(X, oe)
        }
        (re || W) && (addEventListener(R, X, W, re),
            re && delegateEvents([X]))
    } else if ((J = ChildProperties.has($)) || !V && (PropAliases[$] || (Z = Properties.has($))) || (Y = R.nodeName.includes("-")))
        $ === "class" || $ === "className" ? className(R, W) : Y && !Z && !J ? R[toPropertyName($)] = W : R[PropAliases[$] || $] = W;
    else {
        const X = V && $.indexOf(":") > -1 && SVGNamespace[$.split(":")[0]];
        X ? setAttributeNS(R, X, $, W) : setAttribute(R, Aliases[$] || $, W)
    }
    return W
}
function eventHandler(R) {
    const $ = `$$${R.type}`;
    let W = R.composedPath && R.composedPath()[0] || R.target;
    for (R.target !== W && Object.defineProperty(R, "target", {
        configurable: !0,
        value: W
    }),
        Object.defineProperty(R, "currentTarget", {
            configurable: !0,
            get() {
                return W || document
            }
        }),
        sharedConfig.registry && !sharedConfig.done && (sharedConfig.done = !0,
            document.querySelectorAll("[id^=pl-]").forEach(U => {
                for (; U && U.nodeType !== 8 && U.nodeValue !== "pl-" + R;) {
                    let V = U.nextSibling;
                    U.remove(),
                        U = V
                }
                U && U.remove()
            }
            )); W;) {
        const U = W[$];
        if (U && !W.disabled) {
            const V = W[`${$}Data`];
            if (V !== void 0 ? U.call(W, V, R) : U.call(W, R),
                R.cancelBubble)
                return
        }
        W = W._$host || W.parentNode || W.host
    }
}
function insertExpression(R, $, W, U, V) {
    for (sharedConfig.context && !W && (W = [...R.childNodes]); typeof W == "function";)
        W = W();
    if ($ === W)
        return W;
    const K = typeof $
        , Y = U !== void 0;
    if (R = Y && W[0] && W[0].parentNode || R,
        K === "string" || K === "number") {
        if (sharedConfig.context)
            return W;
        if (K === "number" && ($ = $.toString()),
            Y) {
            let Z = W[0];
            Z && Z.nodeType === 3 ? Z.data = $ : Z = document.createTextNode($),
                W = cleanChildren(R, W, U, Z)
        } else
            W !== "" && typeof W == "string" ? W = R.firstChild.data = $ : W = R.textContent = $
    } else if ($ == null || K === "boolean") {
        if (sharedConfig.context)
            return W;
        W = cleanChildren(R, W, U)
    } else {
        if (K === "function")
            return createRenderEffect(() => {
                let Z = $();
                for (; typeof Z == "function";)
                    Z = Z();
                W = insertExpression(R, Z, W, U)
            }
            ),
                () => W;
        if (Array.isArray($)) {
            const Z = []
                , J = W && Array.isArray(W);
            if (normalizeIncomingArray(Z, $, W, V))
                return createRenderEffect(() => W = insertExpression(R, Z, W, U, !0)),
                    () => W;
            if (sharedConfig.context) {
                if (!Z.length)
                    return W;
                for (let X = 0; X < Z.length; X++)
                    if (Z[X].parentNode)
                        return W = Z
            }
            if (Z.length === 0) {
                if (W = cleanChildren(R, W, U),
                    Y)
                    return W
            } else
                J ? W.length === 0 ? appendNodes(R, Z, U) : reconcileArrays(R, W, Z) : (W && cleanChildren(R),
                    appendNodes(R, Z));
            W = Z
        } else if ($ instanceof Node) {
            if (sharedConfig.context && $.parentNode)
                return W = Y ? [$] : $;
            if (Array.isArray(W)) {
                if (Y)
                    return W = cleanChildren(R, W, U, $);
                cleanChildren(R, W, null, $)
            } else
                W == null || W === "" || !R.firstChild ? R.appendChild($) : R.replaceChild($, R.firstChild);
            W = $
        }
    }
    return W
}
function normalizeIncomingArray(R, $, W, U) {
    let V = !1;
    for (let K = 0, Y = $.length; K < Y; K++) {
        let Z = $[K]
            , J = W && W[K];
        if (Z instanceof Node)
            R.push(Z);
        else if (!(Z == null || Z === !0 || Z === !1))
            if (Array.isArray(Z))
                V = normalizeIncomingArray(R, Z, J) || V;
            else if (typeof Z == "function")
                if (U) {
                    for (; typeof Z == "function";)
                        Z = Z();
                    V = normalizeIncomingArray(R, Array.isArray(Z) ? Z : [Z], Array.isArray(J) ? J : [J]) || V
                } else
                    R.push(Z),
                        V = !0;
            else {
                const X = String(Z);
                J && J.nodeType === 3 && J.data === X ? R.push(J) : R.push(document.createTextNode(X))
            }
    }
    return V
}
function appendNodes(R, $, W = null) {
    for (let U = 0, V = $.length; U < V; U++)
        R.insertBefore($[U], W)
}
function cleanChildren(R, $, W, U) {
    if (W === void 0)
        return R.textContent = "";
    const V = U || document.createTextNode("");
    if ($.length) {
        let K = !1;
        for (let Y = $.length - 1; Y >= 0; Y--) {
            const Z = $[Y];
            if (V !== Z) {
                const J = Z.parentNode === R;
                !K && !Y ? J ? R.replaceChild(V, Z) : R.insertBefore(V, W) : J && Z.remove()
            } else
                K = !0
        }
    } else
        R.insertBefore(V, W);
    return [V]
}
function getHydrationKey() {
    const R = sharedConfig.context;
    return `${R.id}${R.count++}`
}
const SVG_NAMESPACE = "http://www.w3.org/2000/svg";
function createElement(R, $ = !1) {
    return $ ? document.createElementNS(SVG_NAMESPACE, R) : document.createElement(R)
}
function Portal(R) {
    const { useShadow: $ } = R
        , W = document.createTextNode("")
        , U = R.mount || document.body;
    function V() {
        if (sharedConfig.context) {
            const [K, Y] = createSignal(!1);
            return queueMicrotask(() => Y(!0)),
                () => K() && R.children
        } else
            return () => R.children
    }
    if (U instanceof HTMLHeadElement) {
        const [K, Y] = createSignal(!1)
            , Z = () => Y(!0);
        createRoot(J => insert(U, () => K() ? J() : V()(), null)),
            onCleanup(() => {
                sharedConfig.context ? queueMicrotask(Z) : Z()
            }
            )
    } else {
        const K = createElement(R.isSVG ? "g" : "div", R.isSVG)
            , Y = $ && K.attachShadow ? K.attachShadow({
                mode: "open"
            }) : K;
        Object.defineProperty(K, "_$host", {
            get() {
                return W.parentNode
            },
            configurable: !0
        }),
            insert(Y, V()),
            U.appendChild(K),
            R.ref && R.ref(K),
            onCleanup(() => U.removeChild(K))
    }
    return W
}
function Dynamic(R) {
    const [$, W] = splitProps(R, ["component"])
        , U = createMemo(() => $.component);
    return createMemo(() => {
        const V = U();
        switch (typeof V) {
            case "function":
                return untrack(() => V(W));
            case "string":
                const K = SVGElements.has(V)
                    , Y = sharedConfig.context ? getNextElement() : createElement(V, K);
                return spread(Y, W, K),
                    Y
        }
    }
    )
}
var THEME = (R => (R.DARK = "DARK",
    R.LIGHT = "LIGHT",
    R))(THEME || {});
let e = {
    data: ""
}
    , t = R => typeof window == "object" ? ((R ? R.querySelector("#_goober") : window._goober) || Object.assign((R || document.head).appendChild(document.createElement("style")), {
        innerHTML: " ",
        id: "_goober"
    })).firstChild : R || e
    , l = /(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g
    , a = /\/\*[^]*?\*\/|  +/g
    , n = /\n+/g
    , o = (R, $) => {
        let W = ""
            , U = ""
            , V = "";
        for (let K in R) {
            let Y = R[K];
            K[0] == "@" ? K[1] == "i" ? W = K + " " + Y + ";" : U += K[1] == "f" ? o(Y, K) : K + "{" + o(Y, K[1] == "k" ? "" : $) + "}" : typeof Y == "object" ? U += o(Y, $ ? $.replace(/([^,])+/g, Z => K.replace(/(^:.*)|([^,])+/g, J => /&/.test(J) ? J.replace(/&/g, Z) : Z ? Z + " " + J : J)) : K) : Y != null && (K = /^--/.test(K) ? K : K.replace(/[A-Z]/g, "-$&").toLowerCase(),
                V += o.p ? o.p(K, Y) : K + ":" + Y + ";")
        }
        return W + ($ && V ? $ + "{" + V + "}" : V) + U
    }
    , c = {}
    , s = R => {
        if (typeof R == "object") {
            let $ = "";
            for (let W in R)
                $ += W + s(R[W]);
            return $
        }
        return R
    }
    , i = (R, $, W, U, V) => {
        let K = s(R)
            , Y = c[K] || (c[K] = (J => {
                let X = 0
                    , re = 11;
                for (; X < J.length;)
                    re = 101 * re + J.charCodeAt(X++) >>> 0;
                return "go" + re
            }
            )(K));
        if (!c[Y]) {
            let J = K !== R ? R : (X => {
                let re, oe, ie = [{}];
                for (; re = l.exec(X.replace(a, ""));)
                    re[4] ? ie.shift() : re[3] ? (oe = re[3].replace(n, " ").trim(),
                        ie.unshift(ie[0][oe] = ie[0][oe] || {})) : ie[0][re[1]] = re[2].replace(n, " ").trim();
                return ie[0]
            }
            )(R);
            c[Y] = o(V ? {
                ["@keyframes " + Y]: J
            } : J, W ? "" : "." + Y)
        }
        let Z = W && c.g ? c.g : null;
        return W && (c.g = c[Y]),
            ((J, X, re, oe) => {
                oe ? X.data = X.data.replace(oe, J) : X.data.indexOf(J) === -1 && (X.data = re ? J + X.data : X.data + J)
            }
            )(c[Y], $, U, Z),
            Y
    }
    , p = (R, $, W) => R.reduce((U, V, K) => {
        let Y = $[K];
        if (Y && Y.call) {
            let Z = Y(W)
                , J = Z && Z.props && Z.props.className || /^go/.test(Z) && Z;
            Y = J ? "." + J : Z && typeof Z == "object" ? Z.props ? "" : o(Z, "") : Z === !1 ? "" : Z
        }
        return U + V + (Y ?? "")
    }
        , "");
function u$1(R) {
    let $ = this || {}
        , W = R.call ? R($.p) : R;
    return i(W.unshift ? W.raw ? p(W, [].slice.call(arguments, 1), $.p) : W.reduce((U, V) => Object.assign(U, V && V.call ? V($.p) : V), {}) : W, t($.target), $.g, $.o, $.k)
}
u$1.bind({
    g: 1
});
let h = u$1.bind({
    k: 1
});
const ThemeContext = createContext();
function ThemeProvider(R) {
    return createComponent(ThemeContext.Provider, {
        value: R.theme,
        get children() {
            return R.children
        }
    })
}
function useTheme() {
    return useContext(ThemeContext)
}
function makeStyled(R) {
    let $ = this || {};
    return (...W) => {
        const U = V => {
            const K = useContext(ThemeContext)
                , Y = mergeProps(V, {
                    theme: K
                })
                , Z = mergeProps(Y, {
                    get class() {
                        const se = Y.class
                            , le = "class" in Y && /^go[0-9]+/.test(se);
                        let ue = u$1.apply({
                            target: $.target,
                            o: le,
                            p: Y,
                            g: $.g
                        }, W);
                        return [se, ue].filter(Boolean).join(" ")
                    }
                })
                , [J, X] = splitProps(Z, ["as", "theme"])
                , re = X
                , oe = J.as || R;
            let ie;
            return typeof oe == "function" ? ie = oe(re) : $.g == 1 ? (ie = document.createElement(oe),
                spread(ie, re)) : ie = Dynamic(mergeProps({
                    component: oe
                }, re)),
                ie
        }
            ;
        return U.class = V => untrack(() => u$1.apply({
            target: $.target,
            p: V,
            g: $.g
        }, W)),
            U
    }
}
const styled = new Proxy(makeStyled, {
    get(R, $) {
        return R($)
    }
});
function createGlobalStyles() {
    const R = makeStyled.call({
        g: 1
    }, "div").apply(null, arguments);
    return function (W) {
        return R(W),
            null
    }
}
const globalStylesTag = "tc-root"
    , disableScrollClass = "tc-disable-scroll"
    , usingMouseClass = "tc-using-mouse"
    , GlobalStyles = () => {
        document.body.addEventListener("mousedown", () => document.body.classList.add(usingMouseClass)),
            document.body.addEventListener("keydown", $ => {
                $.key === "Tab" && document.body.classList.remove(usingMouseClass)
            }
            );
        const R = createGlobalStyles`
    ${globalStylesTag} * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        
        font-family: -apple-system, BlinkMacSystemFont, 'Roboto', 'Helvetica Neue', Arial, Tahoma, Verdana, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;        
        -webkit-tap-highlight-color: transparent;
    }
    
    ${globalStylesTag} img {
      -webkit-user-select: none;
      -webkit-touch-callout: none;
    }   
 
    ${globalStylesTag} *:focus {
        outline: #08f auto 2px;
    }
    
    ${globalStylesTag} li {
        list-style: none;
    }
    
    ${globalStylesTag} button {
        outline: none;
    }
    
    body.${disableScrollClass} {
        position: fixed; 
        overflow-y: scroll;
        right: 0;
        left: 0;
    }
    
    body.${usingMouseClass} ${globalStylesTag} *:focus {
        outline: none;
    }
`;
        return createComponent(R, {})
    }
    ;
function hexToRgb(R) {
    R[0] === "#" && (R = R.slice(1));
    const $ = parseInt(R, 16)
        , W = $ >> 16 & 255
        , U = $ >> 8 & 255
        , V = $ & 255;
    return [W, U, V].join(",")
}
function rgba(R, $) {
    return R[0] === "#" && (R = hexToRgb(R)),
        `rgba(${R}, ${$})`
}
function toPx(R) {
    return R.toString() + "px"
}
const _InMemoryStorage = class {
    constructor() {
        __publicField(this, "storage", {})
    }
    static getInstance() {
        return _InMemoryStorage.instance || (_InMemoryStorage.instance = new _InMemoryStorage),
            _InMemoryStorage.instance
    }
    get length() {
        return Object.keys(this.storage).length
    }
    clear() {
        this.storage = {}
    }
    getItem(R) {
        var $;
        return ($ = this.storage[R]) != null ? $ : null
    }
    key(R) {
        var $;
        const W = Object.keys(this.storage);
        return R < 0 || R >= W.length ? null : ($ = W[R]) != null ? $ : null
    }
    removeItem(R) {
        delete this.storage[R]
    }
    setItem(R, $) {
        this.storage[R] = $
    }
}
    ;
let InMemoryStorage = _InMemoryStorage;
__publicField(InMemoryStorage, "instance");
class TonConnectUIError extends TonConnectError {
    constructor(...$) {
        super(...$),
            Object.setPrototypeOf(this, TonConnectUIError.prototype)
    }
}
function logDebug(...R) {
    try {
        console.debug("[TON_CONNECT_UI]", ...R)
    } catch { }
}
function logError(...R) {
    try {
        console.error("[TON_CONNECT_UI]", ...R)
    } catch { }
}
function logWarning(...R) {
    try {
        console.warn("[TON_CONNECT_UI]", ...R)
    } catch { }
}
function openLink(R, $ = "_self") {
    logDebug("openLink", R, $),
        window.open(R, $, "noopener noreferrer")
}
function openLinkBlank(R) {
    openLink(R, "_blank")
}
function openDeeplinkWithFallback(R, $) {
    const W = () => {
        isBrowser("safari") || isOS("android") && isBrowser("firefox") || $()
    }
        , U = setTimeout(() => W(), 200);
    window.addEventListener("blur", () => clearTimeout(U), {
        once: !0
    }),
        openLink(R, "_self")
}
function getSystemTheme() {
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches ? THEME.LIGHT : THEME.DARK
}
function subscribeToThemeChange(R) {
    const $ = W => R(W.matches ? THEME.DARK : THEME.LIGHT);
    return window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", $),
        () => window.matchMedia("(prefers-color-scheme: dark)").removeEventListener("change", $)
}
function disableScroll() {
    document.documentElement.scrollHeight !== document.documentElement.clientHeight && (document.body.style.top = toPx(-document.documentElement.scrollTop),
        document.body.classList.add(disableScrollClass))
}
function enableScroll() {
    document.body.classList.remove(disableScrollClass),
        document.documentElement.scrollTo({
            top: -parseFloat(getComputedStyle(document.body).top)
        }),
        document.body.style.top = "auto"
}
function fixMobileSafariActiveTransition() {
    document.body.hasAttribute("ontouchstart") || document.body.setAttribute("ontouchstart", "")
}
function defineStylesRoot() {
    customElements.define(globalStylesTag, class extends HTMLElement {
    }
    )
}
function createMacrotask(R) {
    return __async(this, null, function* () {
        yield new Promise($ => requestAnimationFrame($)),
            R()
    })
}
function createMacrotaskAsync(R) {
    return __async(this, null, function* () {
        return yield new Promise($ => requestAnimationFrame($)),
            R()
    })
}
function preloadImages(R) {
    document.readyState !== "complete" ? window.addEventListener("load", () => createMacrotask(() => preloadImages(R)), {
        once: !0
    }) : R.forEach($ => {
        const W = new window.Image;
        W.src = $
    }
    )
}
function getWindow$1() {
    if (typeof window < "u")
        return window
}
function tryGetLocalStorage() {
    if (isLocalStorageAvailable())
        return localStorage;
    if (isNodeJs())
        throw new TonConnectUIError("`localStorage` is unavailable, but it is required for TonConnect. For more details, see https://github.com/ton-connect/sdk/tree/main/packages/sdk#init-connector");
    return InMemoryStorage.getInstance()
}
function isLocalStorageAvailable() {
    try {
        return typeof localStorage < "u"
    } catch {
        return !1
    }
}
function isNodeJs() {
    return typeof process < "u" && process.versions != null && process.versions.node != null
}
function getUserAgent() {
    var R, $, W;
    const U = new UAParser().getResult()
        , V = (R = U.os.name) == null ? void 0 : R.toLowerCase()
        , K = ($ = U.device.model) == null ? void 0 : $.toLowerCase();
    let Y;
    switch (!0) {
        case K === "ipad":
            Y = "ipad";
            break;
        case V === "ios":
            Y = "ios";
            break;
        case V === "android":
            Y = "android";
            break;
        case V === "mac os":
            Y = "macos";
            break;
        case V === "linux":
            Y = "linux";
            break;
        case (V == null ? void 0 : V.includes("windows")):
            Y = "windows";
            break
    }
    const Z = (W = U.browser.name) == null ? void 0 : W.toLowerCase();
    let J;
    switch (!0) {
        case Z === "chrome":
            J = "chrome";
            break;
        case Z === "firefox":
            J = "firefox";
            break;
        case (Z == null ? void 0 : Z.includes("safari")):
            J = "safari";
            break;
        case (Z == null ? void 0 : Z.includes("opera")):
            J = "opera";
            break
    }
    return {
        os: Y,
        browser: J
    }
}
function isOS(...R) {
    return R.includes(getUserAgent().os)
}
function isBrowser(...R) {
    return R.includes(getUserAgent().browser)
}
function toDeeplink(R, $) {
    const W = new URL(R);
    return $ + W.search
}
class WalletInfoStorage {
    constructor() {
        __publicField(this, "localStorage"),
            __publicField(this, "storageKey", "ton-connect-ui_wallet-info"),
            this.localStorage = tryGetLocalStorage()
    }
    setWalletInfo($) {
        this.localStorage.setItem(this.storageKey, JSON.stringify($))
    }
    getWalletInfo() {
        const $ = this.localStorage.getItem(this.storageKey);
        return $ ? JSON.parse($) : null
    }
    removeWalletInfo() {
        this.localStorage.removeItem(this.storageKey)
    }
}
class PreferredWalletStorage {
    constructor() {
        __publicField(this, "localStorage"),
            __publicField(this, "storageKey", "ton-connect-ui_preferred-wallet"),
            this.localStorage = tryGetLocalStorage()
    }
    setPreferredWalletAppName($) {
        this.localStorage.setItem(this.storageKey, $)
    }
    getPreferredWalletAppName() {
        return this.localStorage.getItem(this.storageKey) || void 0
    }
}
class LastSelectedWalletInfoStorage {
    constructor() {
        __publicField(this, "localStorage"),
            __publicField(this, "storageKey", "ton-connect-ui_last-selected-wallet-info"),
            this.localStorage = tryGetLocalStorage()
    }
    setLastSelectedWalletInfo($) {
        this.localStorage.setItem(this.storageKey, JSON.stringify($))
    }
    getLastSelectedWalletInfo() {
        const $ = this.localStorage.getItem(this.storageKey);
        return $ ? JSON.parse($) : null
    }
    removeLastSelectedWalletInfo() {
        this.localStorage.removeItem(this.storageKey)
    }
}
const [walletsModalState, setWalletsModalState] = createSignal({
    status: "closed",
    closeReason: null
})
    , getWalletsModalIsOpened = createMemo(() => walletsModalState().status === "opened")
    , [singleWalletModalState, setSingleWalletModalState] = createSignal({
        status: "closed",
        closeReason: null
    })
    , getSingleWalletModalIsOpened = createMemo(() => singleWalletModalState().status === "opened")
    , getSingleWalletModalWalletInfo = createMemo(() => {
        const R = singleWalletModalState();
        return R.status === "opened" ? R.walletInfo : null
    }
    );
let lastSelectedWalletInfoStorage = typeof window < "u" ? new LastSelectedWalletInfoStorage : void 0;
const [lastSelectedWalletInfo, _setLastSelectedWalletInfo] = createSignal((lastSelectedWalletInfoStorage == null ? void 0 : lastSelectedWalletInfoStorage.getLastSelectedWalletInfo()) || null)
    , setLastSelectedWalletInfo = R => {
        lastSelectedWalletInfoStorage || (lastSelectedWalletInfoStorage = new LastSelectedWalletInfoStorage),
            R ? lastSelectedWalletInfoStorage.setLastSelectedWalletInfo(R) : lastSelectedWalletInfoStorage.removeLastSelectedWalletInfo(),
            _setLastSelectedWalletInfo(R)
    }
    , [action, setAction] = createSignal(null)
    , common$1 = {
        close: "Close",
        openWallet: "Open wallet",
        copyLink: "Copy Link",
        linkCopied: "Link Copied",
        copied: "Copied",
        yourWallet: "Your Wallet",
        retry: "Retry",
        get: "GET",
        mobile: "Mobile",
        browserExtension: "Browser Extension",
        desktop: "Desktop"
    }
    , button$1 = {
        connectWallet: "Connect Wallet",
        dropdown: {
            copy: "Copy address",
            copied: "Address copied!",
            disconnect: "Disconnect"
        }
    }
    , notifications$1 = {
        confirm: {
            header: "Open {{ name }} to confirm the transaction."
        },
        transactionSent: {
            header: "Transaction sent",
            text: "Your transaction will be processed in a few seconds."
        },
        transactionCanceled: {
            header: "Transaction canceled",
            text: "There will be no changes to your account."
        }
    }
    , walletItem$1 = {
        walletOn: "Wallet On",
        recent: "Recent",
        installed: "Installed",
        popular: "Popular"
    }
    , walletModal$1 = {
        loading: "Loading wallets",
        wallets: "Wallets",
        mobileUniversalModal: {
            connectYourWallet: "Connect your wallet",
            openWalletOnTelegramOrSelect: "Open Wallet in Telegram or select your wallet to connect",
            openWalletOnTelegram: "Open Wallet in Telegram",
            openLink: "Open Link",
            scan: "Scan with your mobile wallet"
        },
        desktopUniversalModal: {
            connectYourWallet: "Connect your wallet",
            scan: "Scan with your mobile wallet",
            availableWallets: "Available wallets"
        },
        mobileConnectionModal: {
            showQR: "Show QR Code",
            scanQR: "Scan the QR code below with your phone’s or {{ name }}’s camera",
            continueIn: "Continue in {{ name }}…",
            connectionDeclined: "Connection declined"
        },
        desktopConnectionModal: {
            scanQR: "Scan the QR code below with your phone’s or {{ name }}’s camera",
            continueInExtension: "Continue in {{ name }} browser extension…",
            dontHaveExtension: "Seems you don't have installed {{ name }} browser extension",
            getWallet: "Get {{ name }}",
            continueOnDesktop: "Continue in {{ name }} on desktop…",
            openWalletOnTelegram: "Open Wallet in Telegram on desktop",
            connectionDeclined: "Connection declined"
        },
        infoModal: {
            whatIsAWallet: "What is a wallet",
            secureDigitalAssets: "Secure digital assets storage",
            walletProtects: "A wallet protects and manages your digital assets including TON, tokens and collectables.",
            controlIdentity: "Control your Web3 identity",
            manageIdentity: "Manage your digital identity and access decentralized applications with ease. Maintain control over your data and engage securely in the blockchain ecosystem.",
            effortlessCryptoTransactions: "Effortless crypto transactions",
            easilySend: "Easily send, receive, monitor your cryptocurrencies. Streamline your operations with decentralized applications.",
            getAWallet: "Get a Wallet"
        }
    }
    , actionModal$1 = {
        confirmTransaction: {
            header: "Confirm the transaction in {{ name }}",
            text: "It will only take a moment."
        },
        transactionSent: "$notifications.transactionSent",
        transactionCanceled: "$notifications.transactionCanceled"
    }
    , en = {
        common: common$1,
        button: button$1,
        notifications: notifications$1,
        walletItem: walletItem$1,
        walletModal: walletModal$1,
        actionModal: actionModal$1
    }
    , common = {
        close: "Закрыть",
        openWallet: "Открыть кошелёк",
        copyLink: "Копировать ссылку",
        linkCopied: "Ссылка скопирована",
        copied: "Ссылка скопирована",
        yourWallet: "Ваш кошелёк",
        retry: "Повторить",
        get: "Скачать",
        mobile: "Мобильный",
        browserExtension: "Расширение",
        desktop: "Десктоп"
    }
    , button$2 = {
        connectWallet: "Подключить кошелёк",
        dropdown: {
            copy: "Скопировать адрес",
            copied: "Адрес скопирован!",
            disconnect: "Отключить кошелёк"
        }
    }
    , notifications = {
        confirm: {
            header: "Откройте {{ name }}, чтобы подтвердить транзакцию."
        },
        transactionSent: {
            header: "Транзакция отправлена",
            text: "Ваша транзакция будет обработана через несколько секунд."
        },
        transactionCanceled: {
            header: "Транзакция отменена",
            text: "Состояние вашего счёта не изменится."
        }
    }
    , walletItem = {
        walletOn: "Wallet в",
        recent: "Недавний",
        installed: "Установлен",
        popular: "Популярен"
    }
    , walletModal = {
        loading: "Кошельки загружаются",
        wallets: "Кошельки",
        mobileUniversalModal: {
            connectYourWallet: "Подключите кошелёк",
            openWalletOnTelegramOrSelect: "Подключите Wallet в Telegram или выберете кошелёк для подключения",
            openWalletOnTelegram: "Открыть Wallet в Telegram",
            openLink: "Открыть ссылку",
            scan: "Отсканируйте камерой вашего телефона"
        },
        desktopUniversalModal: {
            connectYourWallet: "Подключите кошелёк",
            scan: "Отсканируйте QR-код камерой вашего телефона",
            availableWallets: "Доступные кошельки"
        },
        mobileConnectionModal: {
            showQR: "Показать QR-код",
            scanQR: "Отсканируйте QR-код ниже камерой в приложении {{ name }}, или камерой телефона",
            continueIn: "Продолжите в {{ name }}…",
            connectionDeclined: "Подключение отклонено"
        },
        desktopConnectionModal: {
            scanQR: "Отсканируйте QR-код ниже камерой в приложении {{ name }}, или камерой телефона",
            continueInExtension: "Откройте браузерное расширение {{ name }}",
            dontHaveExtension: "Похоже, у вас не установлено браузерное расширение {{ name }}",
            getWallet: "Скачать {{ name }}",
            continueOnDesktop: "Откройте {{ name }} на компьютере…",
            openWalletOnTelegram: "Открыть Wallet в Telegram",
            connectionDeclined: "Подключение отклонено"
        },
        infoModal: {
            whatIsAWallet: "Что такое кошелёк?",
            secureDigitalAssets: "Надежное хранилище цифровых активов",
            walletProtects: "Кошелёк защищает ваши цифровые активы, включая TON, токены и предметы коллекционирования, и управляет ими.",
            controlIdentity: "Контроль своей личности Web3",
            manageIdentity: "Управляйте своей цифровой идентификацией и с легкостью получайте доступ к децентрализованным приложениям. Сохраняйте контроль над своими данными и безопасно участвуйте в экосистеме блокчейна.",
            effortlessCryptoTransactions: "Простые криптотранзакции",
            easilySend: "Легко отправляйте, получайте и отслеживайте свои криптовалюты. Оптимизируйте свои операции с помощью децентрализованных приложений.",
            getAWallet: "Скачать кошелёк"
        }
    }
    , actionModal = {
        confirmTransaction: {
            header: "Подтвердите действие в {{ name }}",
            text: "Это займет пару секунд."
        },
        transactionSent: "$notifications.transactionSent",
        transactionCanceled: "$notifications.transactionCanceled"
    }
    , ru = {
        common,
        button: button$2,
        notifications,
        walletItem,
        walletModal,
        actionModal
    }
    , i18nDictionary = {
        en: parseDictionary(en),
        ru: parseDictionary(ru)
    };
function parseDictionary(R) {
    const $ = "$"
        , W = U => {
            Object.entries(U).forEach(([V, K]) => {
                if (typeof K == "object" && K)
                    return W(K);
                if (typeof K == "string") {
                    if (K[0] === $) {
                        const Y = K.slice(1).split(".");
                        let Z = R;
                        Y.forEach(J => {
                            if (J in Z)
                                Z = Z[J];
                            else
                                throw new Error(`Cannot parse translations: there is no property ${J} in translation`)
                        }
                        ),
                            U[V] = Z
                    }
                    K.slice(0, 2) === `\\${$}` && (U[V] = K.slice(1))
                }
            }
            )
        }
        ;
    return W(R),
        R
}
const ConnectorContext = createContext()
    , $RAW = Symbol("store-raw")
    , $NODE = Symbol("store-node")
    , $NAME = Symbol("store-name");
function wrap$1(R, $) {
    let W = R[$PROXY];
    if (!W && (Object.defineProperty(R, $PROXY, {
        value: W = new Proxy(R, proxyTraps$1)
    }),
        !Array.isArray(R))) {
        const U = Object.keys(R)
            , V = Object.getOwnPropertyDescriptors(R);
        for (let K = 0, Y = U.length; K < Y; K++) {
            const Z = U[K];
            V[Z].get && Object.defineProperty(R, Z, {
                enumerable: V[Z].enumerable,
                get: V[Z].get.bind(W)
            })
        }
    }
    return W
}
function isWrappable(R) {
    let $;
    return R != null && typeof R == "object" && (R[$PROXY] || !($ = Object.getPrototypeOf(R)) || $ === Object.prototype || Array.isArray(R))
}
function unwrap(R, $ = new Set) {
    let W, U, V, K;
    if (W = R != null && R[$RAW])
        return W;
    if (!isWrappable(R) || $.has(R))
        return R;
    if (Array.isArray(R)) {
        Object.isFrozen(R) ? R = R.slice(0) : $.add(R);
        for (let Y = 0, Z = R.length; Y < Z; Y++)
            V = R[Y],
                (U = unwrap(V, $)) !== V && (R[Y] = U)
    } else {
        Object.isFrozen(R) ? R = Object.assign({}, R) : $.add(R);
        const Y = Object.keys(R)
            , Z = Object.getOwnPropertyDescriptors(R);
        for (let J = 0, X = Y.length; J < X; J++)
            K = Y[J],
                !Z[K].get && (V = R[K],
                    (U = unwrap(V, $)) !== V && (R[K] = U))
    }
    return R
}
function getDataNodes(R) {
    let $ = R[$NODE];
    return $ || Object.defineProperty(R, $NODE, {
        value: $ = {}
    }),
        $
}
function getDataNode(R, $, W) {
    return R[$] || (R[$] = createDataNode(W))
}
function proxyDescriptor$1(R, $) {
    const W = Reflect.getOwnPropertyDescriptor(R, $);
    return !W || W.get || !W.configurable || $ === $PROXY || $ === $NODE || $ === $NAME || (delete W.value,
        delete W.writable,
        W.get = () => R[$PROXY][$]),
        W
}
function trackSelf(R) {
    if (getListener()) {
        const $ = getDataNodes(R);
        ($._ || ($._ = createDataNode()))()
    }
}
function ownKeys(R) {
    return trackSelf(R),
        Reflect.ownKeys(R)
}
function createDataNode(R) {
    const [$, W] = createSignal(R, {
        equals: !1,
        internal: !0
    });
    return $.$ = W,
        $
}
const proxyTraps$1 = {
    get(R, $, W) {
        if ($ === $RAW)
            return R;
        if ($ === $PROXY)
            return W;
        if ($ === $TRACK)
            return trackSelf(R),
                W;
        const U = getDataNodes(R)
            , V = U.hasOwnProperty($);
        let K = V ? U[$]() : R[$];
        if ($ === $NODE || $ === "__proto__")
            return K;
        if (!V) {
            const Y = Object.getOwnPropertyDescriptor(R, $);
            getListener() && (typeof K != "function" || R.hasOwnProperty($)) && !(Y && Y.get) && (K = getDataNode(U, $, K)())
        }
        return isWrappable(K) ? wrap$1(K) : K
    },
    has(R, $) {
        return $ === $RAW || $ === $PROXY || $ === $TRACK || $ === $NODE || $ === "__proto__" ? !0 : (this.get(R, $, R),
            $ in R)
    },
    set() {
        return !0
    },
    deleteProperty() {
        return !0
    },
    ownKeys,
    getOwnPropertyDescriptor: proxyDescriptor$1
};
function setProperty(R, $, W, U = !1) {
    if (!U && R[$] === W)
        return;
    const V = R[$]
        , K = R.length;
    W === void 0 ? delete R[$] : R[$] = W;
    let Y = getDataNodes(R), Z;
    (Z = getDataNode(Y, $, V)) && Z.$(() => W),
        Array.isArray(R) && R.length !== K && (Z = getDataNode(Y, "length", K)) && Z.$(R.length),
        (Z = Y._) && Z.$()
}
function mergeStoreNode(R, $) {
    const W = Object.keys($);
    for (let U = 0; U < W.length; U += 1) {
        const V = W[U];
        setProperty(R, V, $[V])
    }
}
function updateArray(R, $) {
    if (typeof $ == "function" && ($ = $(R)),
        $ = unwrap($),
        Array.isArray($)) {
        if (R === $)
            return;
        let W = 0
            , U = $.length;
        for (; W < U; W++) {
            const V = $[W];
            R[W] !== V && setProperty(R, W, V)
        }
        setProperty(R, "length", U)
    } else
        mergeStoreNode(R, $)
}
function updatePath(R, $, W = []) {
    let U, V = R;
    if ($.length > 1) {
        U = $.shift();
        const Y = typeof U
            , Z = Array.isArray(R);
        if (Array.isArray(U)) {
            for (let J = 0; J < U.length; J++)
                updatePath(R, [U[J]].concat($), W);
            return
        } else if (Z && Y === "function") {
            for (let J = 0; J < R.length; J++)
                U(R[J], J) && updatePath(R, [J].concat($), W);
            return
        } else if (Z && Y === "object") {
            const { from: J = 0, to: X = R.length - 1, by: re = 1 } = U;
            for (let oe = J; oe <= X; oe += re)
                updatePath(R, [oe].concat($), W);
            return
        } else if ($.length > 1) {
            updatePath(R[U], $, [U].concat(W));
            return
        }
        V = R[U],
            W = [U].concat(W)
    }
    let K = $[0];
    typeof K == "function" && (K = K(V, W),
        K === V) || U === void 0 && K == null || (K = unwrap(K),
            U === void 0 || isWrappable(V) && isWrappable(K) && !Array.isArray(K) ? mergeStoreNode(V, K) : setProperty(R, U, K))
}
function createStore(...[R, $]) {
    const W = unwrap(R || {})
        , U = Array.isArray(W)
        , V = wrap$1(W);
    function K(...Y) {
        batch(() => {
            U && Y.length === 1 ? updateArray(W, Y[0]) : updatePath(W, Y)
        }
        )
    }
    return [V, K]
}
const defaultLightColorsSet = {
    constant: {
        black: "#000000",
        white: "#FFFFFF"
    },
    connectButton: {
        background: "#0098EA",
        foreground: "#FFFFFF"
    },
    accent: "#0098EA",
    telegramButton: "#0098EA",
    icon: {
        primary: "#0F0F0F",
        secondary: "#7A8999",
        tertiary: "#C1CAD2",
        success: "#29CC6A",
        error: "#F5A73B"
    },
    background: {
        primary: "#FFFFFF",
        secondary: "#F1F3F5",
        segment: "#FFFFFF",
        tint: "#F1F3F5",
        qr: "#F1F3F5"
    },
    text: {
        primary: "#0F0F0F",
        secondary: "#6A7785"
    }
}
    , defaultDarkColorsSet = {
        constant: {
            black: "#000000",
            white: "#FFFFFF"
        },
        connectButton: {
            background: "#0098EA",
            foreground: "#FFFFFF"
        },
        accent: "#E5E5EA",
        telegramButton: "#31A6F5",
        icon: {
            primary: "#E5E5EA",
            secondary: "#909099",
            tertiary: "#434347",
            success: "#29CC6A",
            error: "#F5A73B"
        },
        background: {
            primary: "#121214",
            secondary: "#18181A",
            segment: "#262629",
            tint: "#222224",
            qr: "#FFFFFF"
        },
        text: {
            primary: "#E5E5EA",
            secondary: "#7D7D85"
        }
    };
/*!
 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */
function isObject(R) {
    return Object.prototype.toString.call(R) === "[object Object]"
}
function isPlainObject(R) {
    var $, W;
    return isObject(R) === !1 ? !1 : ($ = R.constructor,
        $ === void 0 ? !0 : (W = $.prototype,
            !(isObject(W) === !1 || W.hasOwnProperty("isPrototypeOf") === !1)))
}
function mergeOptions(R, $) {
    return R ? deepmerge$1($, R, {
        arrayMerge: (U, V, K) => V,
        isMergeableObject: isPlainObject
    }) : $
}
const [themeState, setThemeState] = createStore({
    theme: THEME.LIGHT,
    colors: defaultLightColorsSet,
    borderRadius: "m"
})
    , themeColorsMappingDefault = {
        [THEME.LIGHT]: defaultLightColorsSet,
        [THEME.DARK]: defaultDarkColorsSet
    }
    , themeCustomColors = {
        [THEME.LIGHT]: void 0,
        [THEME.DARK]: void 0
    };
function setTheme(R, $) {
    $ && (themeCustomColors[THEME.DARK] = mergeOptions($[THEME.DARK], themeCustomColors[THEME.DARK]),
        themeCustomColors[THEME.LIGHT] = mergeOptions($[THEME.LIGHT], themeCustomColors[THEME.LIGHT])),
        setThemeState({
            theme: R,
            colors: mergeOptions(themeCustomColors[R], themeColorsMappingDefault[R])
        })
}
function setBorderRadius(R) {
    setThemeState({
        borderRadius: R
    })
}
function setColors(R) {
    themeCustomColors[THEME.DARK] = mergeOptions(R[THEME.DARK], themeCustomColors[THEME.DARK]),
        themeCustomColors[THEME.LIGHT] = mergeOptions(R[THEME.LIGHT], themeCustomColors[THEME.LIGHT]),
        setThemeState($ => ({
            colors: mergeOptions(themeCustomColors[$.theme], themeColorsMappingDefault[$.theme])
        }))
}
const ImagePlaceholder = styled.div`
    background-color: ${R => R.theme.colors.background.secondary};
`
    , Image = R => {
        let $;
        const [W, U] = createSignal(null);
        return createEffect(() => {
            const V = new window.Image;
            return V.src = R.src,
                V.alt = R.alt || "",
                V.setAttribute("draggable", "false"),
                R.class && V.classList.add(R.class),
                V.complete ? U(V) : (V.addEventListener("load", () => U(V)),
                    () => V.removeEventListener("load", () => U(V)))
        }
        ),
            [createComponent(Show, {
                get when() {
                    return W()
                },
                get children() {
                    return W()
                }
            }), createComponent(Show, {
                get when() {
                    return !W()
                },
                get children() {
                    return createComponent(ImagePlaceholder, {
                        get class() {
                            return R.class
                        },
                        ref(V) {
                            const K = $;
                            typeof K == "function" ? K(V) : $ = V
                        }
                    })
                }
            })]
    }
    ;
let initParams = {};
try {
    let R = location.hash.toString();
    initParams = urlParseHashParams(R)
} catch { }
let tmaPlatform = "unknown";
if (tmaPlatform === "unknown") {
    const R = getWindow$1();
    tmaPlatform = (_d = (_c = (_b = R == null ? void 0 : R.Telegram) == null ? void 0 : R.Telegram) == null ? void 0 : _c.platform) != null ? _d : "unknown"
}

function isTmaPlatform(...R) {
    return R.includes(tmaPlatform)
}
function isInTMA() {
    var R;
    return true
}
function sendExpand() {
    postEvent("web_app_expand", {})
}
function sendOpenTelegramLink(R, $) {
    const W = new URL(R);
    if (W.protocol !== "http:" && W.protocol !== "https:") {
        if ($)
            return $();
        throw new TonConnectUIError(`Url protocol is not supported: ${W}`)
    }
    if (W.hostname !== "t.me") {
        if ($)
            return $();
        throw new TonConnectUIError(`Url host is not supported: ${W}`)
    }
    const U = W.pathname + W.search;
    isIframe() || versionAtLeast("6.1") ? postEvent("web_app_open_tg_link", {
        path_full: U
    }) : openLinkBlank("https://t.me" + U)
}
function isIframe() {
    try {
        const R = getWindow$1();
        return R ? R.parent != null && R !== R.parent : !1
    } catch {
        return !1
    }
}
function postEvent(R, $) {
    try {
        const W = getWindow$1();
        if (!W)
            throw new TonConnectUIError("Can't post event to parent window: window is not defined");
        if (W.TelegramWebviewProxy !== void 0)
            logDebug("postEvent", R, $),
                W.TelegramWebviewProxy.postEvent(R, JSON.stringify($));
        else if (W.external && "notify" in W.external)
            logDebug("postEvent", R, $),
                W.external.notify(JSON.stringify({
                    eventType: R,
                    eventData: $
                }));
        else if (isIframe()) {
            const U = "*"
                , V = JSON.stringify({
                    eventType: R,
                    eventData: $
                });
            logDebug("postEvent", R, $),
                W.parent.postMessage(V, U)
        } else
            throw new TonConnectUIError("Can't post event to TMA")
    } catch (W) {
        logError(`Can't post event to parent window: ${W}`)
    }
}
function urlParseHashParams(R) {
    R = R.replace(/^#/, "");
    let $ = {};
    if (!R.length)
        return $;
    if (R.indexOf("=") < 0 && R.indexOf("?") < 0)
        return $._path = urlSafeDecode(R),
            $;
    let W = R.indexOf("?");
    if (W >= 0) {
        let V = R.substr(0, W);
        $._path = urlSafeDecode(V),
            R = R.substr(W + 1)
    }
    let U = urlParseQueryString(R);
    for (let V in U)
        $[V] = U[V];
    return $
}
function urlSafeDecode(R) {
    try {
        return R = R.replace(/\+/g, "%20"),
            decodeURIComponent(R)
    } catch {
        return R
    }
}
function urlParseQueryString(R) {
    let $ = {};
    if (!R.length)
        return $;
    let W = R.split("&"), U, V, K, Y;
    for (U = 0; U < W.length; U++)
        V = W[U].split("="),
            K = urlSafeDecode(V[0]),
            Y = V[1] == null ? null : urlSafeDecode(V[1]),
            $[K] = Y;
    return $
}
function versionCompare(R, $) {
    typeof R != "string" && (R = ""),
        typeof $ != "string" && ($ = "");
    let W = R.replace(/^\s+|\s+$/g, "").split("."), U = $.replace(/^\s+|\s+$/g, "").split("."), V, K, Y, Z;
    for (V = Math.max(W.length, U.length),
        K = 0; K < V; K++)
        if (Y = parseInt(W[K]) || 0,
            Z = parseInt(U[K]) || 0,
            Y !== Z)
            return Y > Z ? 1 : -1;
    return 0
}

const maxWidth = {
    mobile: 440,
    tablet: 1020
};
function isDevice(R) {
    const $ = getWindow$1();


    const W = $.innerWidth;
    switch (R) {

        case "tablet":
            return W > maxWidth.mobile;
        default:
        case "mobile":
            return W <= maxWidth.mobile || isOS("ios", "android", "ipad")
    }
}
function media(R) {
    switch (R) {
        case "mobile":
            return `@media (max-width: ${maxWidth.mobile}px)`;
        case "tablet":
            return `@media (max-width: ${maxWidth.tablet}px) (min-width: ${maxWidth.mobile}px)`;
        default:
        case "desktop":
            return `@media (min-width: ${maxWidth.tablet}px)`
    }
}
const mediaTouch = "@media (hover: none)"
    , mediaNotTouch = "@media not all and (hover: none)"
    , borders$5 = {
        m: "100vh",
        s: "8px",
        none: "0"
    }
    , scaleValues = {
        s: .02,
        m: .04
    }
    , ButtonStyled$1 = styled.button`
    display: ${R => R.leftIcon || R.rightIcon ? "flex" : "inline-block"};
    gap: ${R => R.leftIcon || R.rightIcon ? "6px" : "unset"};
    align-items: ${R => R.leftIcon || R.rightIcon ? "center" : "unset"};
    justify-content: ${R => R.leftIcon || R.rightIcon ? "space-between" : "unset"};
    background-color: ${R => R.appearance === "flat" ? "transparent" : R.appearance === "secondary" ? R.theme.colors.background.tint : rgba(R.theme.colors.accent, .12)};
    color: ${R => R.appearance === "secondary" ? R.theme.colors.text.primary : R.theme.colors.accent};

    padding: ${R => R.appearance === "flat" ? "0" : "9px 16px"};
    padding-left: ${R => R.leftIcon && R.appearance !== "flat" ? "12px" : "16px"};
    padding-right: ${R => R.rightIcon && R.appearance !== "flat" ? "12px" : "16px"};
    border: none;
    border-radius: ${R => borders$5[R.theme.borderRadius]};
    cursor: ${R => R.disabled ? "not-allowed" : "pointer"};

    font-size: 14px;
    font-weight: 590;
    line-height: 18px;

    transition: transform 0.125s ease-in-out;

    ${mediaNotTouch} {
        &:hover {
            transform: ${R => R.disabled ? "unset" : `scale(${1 + scaleValues[R.scale]})`};
        }
    }

    &:active {
        transform: ${R => R.disabled ? "unset" : `scale(${1 - scaleValues[R.scale]})`};
    }

    ${mediaTouch} {
        &:active {
            transform: ${R => R.disabled ? "unset" : `scale(${1 - scaleValues[R.scale] * 2})`};
        }
    }
`;
function useDataAttributes(R) {
    const $ = untrack(() => Object.keys(R).filter(U => U.startsWith("data-")))
        , [W] = splitProps(R, $);
    return W
}
const Button = R => {
    const $ = useDataAttributes(R);
    return createComponent(ButtonStyled$1, mergeProps({
        get appearance() {
            return R.appearance || "primary"
        },
        get class() {
            return R.class
        },
        onClick: W => {
            var U;
            return (U = R.onClick) == null ? void 0 : U.call(R, W)
        }
        ,
        onMouseEnter: W => {
            var U;
            return (U = R.onMouseEnter) == null ? void 0 : U.call(R, W)
        }
        ,
        onMouseLeave: W => {
            var U;
            return (U = R.onMouseLeave) == null ? void 0 : U.call(R, W)
        }
        ,
        ref(W) {
            const U = R.ref;
            typeof U == "function" ? U(W) : R.ref = W
        },
        get disabled() {
            return R.disabled
        },
        get scale() {
            return R.scale || "m"
        },
        get leftIcon() {
            return !!R.leftIcon
        },
        get rightIcon() {
            return !!R.rightIcon
        },
        "data-tc-button": "true"
    }, $, {
        get children() {
            return [createMemo(() => R.leftIcon), createMemo(() => R.children), createMemo(() => R.rightIcon)]
        }
    }))
}
    ;
function nextFrame(R) {
    requestAnimationFrame(() => {
        requestAnimationFrame(R)
    }
    )
}
const Transition = R => {
    let $, W = !0;
    const [U, V] = createSignal()
        , [K, Y] = createSignal()
        , Z = children(() => R.children)
        , { onBeforeEnter: J, onEnter: X, onAfterEnter: re, onBeforeExit: oe, onExit: ie, onAfterExit: se } = R
        , le = createMemo(() => {
            const Ee = R.name || "s";
            return {
                enterActiveClass: R.enterActiveClass || Ee + "-enter-active",
                enterClass: R.enterClass || Ee + "-enter",
                enterToClass: R.enterToClass || Ee + "-enter-to",
                exitActiveClass: R.exitActiveClass || Ee + "-exit-active",
                exitClass: R.exitClass || Ee + "-exit",
                exitToClass: R.exitToClass || Ee + "-exit-to"
            }
        }
        );
    function ue(Ee, Ce) {
        if (!W || R.appear) {
            let ke = function (xe) {
                Ee && (!xe || xe.target === Ee) && (Ee.removeEventListener("transitionend", ke),
                    Ee.removeEventListener("animationend", ke),
                    Ee.classList.remove(...be),
                    Ee.classList.remove(...Be),
                    batch(() => {
                        U() !== Ee && V(Ee),
                            K() === Ee && Y(void 0)
                    }
                    ),
                    re && re(Ee),
                    R.mode === "inout" && pe(Ee, Ce))
            };
            const Ue = le().enterClass.split(" ")
                , be = le().enterActiveClass.split(" ")
                , Be = le().enterToClass.split(" ");
            J && J(Ee),
                Ee.classList.add(...Ue),
                Ee.classList.add(...be),
                nextFrame(() => {
                    Ee.classList.remove(...Ue),
                        Ee.classList.add(...Be),
                        X && X(Ee, () => ke()),
                        (!X || X.length < 2) && (Ee.addEventListener("transitionend", ke),
                            Ee.addEventListener("animationend", ke))
                }
                )
        }
        Ce && !R.mode ? Y(Ee) : V(Ee)
    }
    function pe(Ee, Ce) {
        const ke = le().exitClass.split(" ")
            , Ue = le().exitActiveClass.split(" ")
            , be = le().exitToClass.split(" ");
        if (!Ce.parentNode)
            return Be();
        oe && oe(Ce),
            Ce.classList.add(...ke),
            Ce.classList.add(...Ue),
            nextFrame(() => {
                Ce.classList.remove(...ke),
                    Ce.classList.add(...be)
            }
            ),
            ie && ie(Ce, () => Be()),
            (!ie || ie.length < 2) && (Ce.addEventListener("transitionend", Be),
                Ce.addEventListener("animationend", Be));
        function Be(xe) {
            (!xe || xe.target === Ce) && (Ce.removeEventListener("transitionend", Be),
                Ce.removeEventListener("animationend", Be),
                Ce.classList.remove(...Ue),
                Ce.classList.remove(...be),
                U() === Ce && V(void 0),
                se && se(Ce),
                R.mode === "outin" && ue(Ee, Ce))
        }
    }
    return createComputed(Ee => {
        for ($ = Z(); typeof $ == "function";)
            $ = $();
        return untrack(() => ($ && $ !== Ee && (R.mode !== "outin" ? ue($, Ee) : W && V($)),
            Ee && Ee !== $ && R.mode !== "inout" && pe($, Ee),
            W = !1,
            $))
    }
    ),
        [U, K]
}
    ;
function getRect(R) {
    const { top: $, bottom: W, left: U, right: V, width: K, height: Y } = R.getBoundingClientRect()
        , Z = R.parentNode.getBoundingClientRect();
    return {
        top: $ - Z.top,
        bottom: W,
        left: U - Z.left,
        right: V,
        width: K,
        height: Y
    }
}
const TransitionGroup = R => {
    const $ = children(() => R.children)
        , W = createMemo(() => {
            const se = R.name || "s";
            return {
                enterActiveClass: R.enterActiveClass || se + "-enter-active",
                enterClass: R.enterClass || se + "-enter",
                enterToClass: R.enterToClass || se + "-enter-to",
                exitActiveClass: R.exitActiveClass || se + "-exit-active",
                exitClass: R.exitClass || se + "-exit",
                exitToClass: R.exitToClass || se + "-exit-to",
                moveClass: R.moveClass || se + "-move"
            }
        }
        )
        , { onBeforeEnter: U, onEnter: V, onAfterEnter: K, onBeforeExit: Y, onExit: Z, onAfterExit: J } = R
        , [X, re] = createSignal();
    let oe = []
        , ie = !0;
    return createComputed(() => {
        const se = $()
            , le = [...se]
            , ue = new Set(se)
            , pe = new Set(oe)
            , Ee = W().enterClass.split(" ")
            , Ce = W().enterActiveClass.split(" ")
            , ke = W().enterToClass.split(" ")
            , Ue = W().exitClass.split(" ")
            , be = W().exitActiveClass.split(" ")
            , Be = W().exitToClass.split(" ");
        for (let xe = 0; xe < se.length; xe++) {
            const ye = se[xe];
            if (!ie && !pe.has(ye)) {
                let de = function (Se) {
                    ye && (!Se || Se.target === ye) && (ye.removeEventListener("transitionend", de),
                        ye.removeEventListener("animationend", de),
                        ye.classList.remove(...Ce),
                        ye.classList.remove(...ke),
                        K && K(ye))
                };
                U && U(ye),
                    ye.classList.add(...Ee),
                    ye.classList.add(...Ce),
                    nextFrame(() => {
                        ye.classList.remove(...Ee),
                            ye.classList.add(...ke),
                            V && V(ye, () => de()),
                            (!V || V.length < 2) && (ye.addEventListener("transitionend", de),
                                ye.addEventListener("animationend", de))
                    }
                    )
            }
        }
        for (let xe = 0; xe < oe.length; xe++) {
            const ye = oe[xe];
            if (!ue.has(ye) && ye.parentNode) {
                let de = function (Se) {
                    (!Se || Se.target === ye) && (ye.removeEventListener("transitionend", de),
                        ye.removeEventListener("animationend", de),
                        ye.classList.remove(...be),
                        ye.classList.remove(...Be),
                        J && J(ye),
                        oe = oe.filter(he => he !== ye),
                        re(oe))
                };
                le.splice(xe, 0, ye),
                    Y && Y(ye),
                    ye.classList.add(...Ue),
                    ye.classList.add(...be),
                    nextFrame(() => {
                        ye.classList.remove(...Ue),
                            ye.classList.add(...Be)
                    }
                    ),
                    Z && Z(ye, () => de()),
                    (!Z || Z.length < 2) && (ye.addEventListener("transitionend", de),
                        ye.addEventListener("animationend", de))
            }
        }
        oe = le,
            re(le)
    }
    ),
        createEffect(se => {
            const le = X();
            return le.forEach(ue => {
                let pe;
                (pe = se.get(ue)) ? pe.new && (pe.new = !1,
                    pe.newPos = getRect(ue)) : se.set(ue, pe = {
                        pos: getRect(ue),
                        new: !ie
                    }),
                    pe.new && ue.addEventListener("transitionend", () => {
                        pe.new = !1,
                            ue.parentNode && (pe.newPos = getRect(ue))
                    }
                        , {
                            once: !0
                        }),
                    pe.newPos && (pe.pos = pe.newPos),
                    pe.newPos = getRect(ue)
            }
            ),
                ie ? (ie = !1,
                    se) : (le.forEach(ue => {
                        const pe = se.get(ue)
                            , Ee = pe.pos
                            , Ce = pe.newPos
                            , ke = Ee.left - Ce.left
                            , Ue = Ee.top - Ce.top;
                        if (ke || Ue) {
                            pe.moved = !0;
                            const be = ue.style;
                            be.transform = `translate(${ke}px,${Ue}px)`,
                                be.transitionDuration = "0s"
                        }
                    }
                    ),
                        document.body.offsetHeight,
                        le.forEach(ue => {
                            const pe = se.get(ue);
                            if (pe.moved) {
                                let Ee = function (Ue) {
                                    Ue && Ue.target !== ue || !ue.parentNode || (!Ue || /transform$/.test(Ue.propertyName)) && (ue.removeEventListener("transitionend", Ee),
                                        ue.classList.remove(...ke))
                                };
                                pe.moved = !1;
                                const Ce = ue.style
                                    , ke = W().moveClass.split(" ");
                                ue.classList.add(...ke),
                                    Ce.transform = Ce.transitionDuration = "",
                                    ue.addEventListener("transitionend", Ee)
                            }
                        }
                        ),
                        se)
        }
            , new Map),
        X
}
    ;
function clickOutside$1(R, $) {
    const W = U => {
        var V;
        return !R.contains(U.target) && ((V = $()) == null ? void 0 : V())
    }
        ;
    document.body.addEventListener("click", W),
        onCleanup(() => document.body.removeEventListener("click", W))
}
function escPressed(R, $) {
    const W = U => {
        var V, K;
        U.key === "Escape" && ((V = document.activeElement) == null || V.blur(),
            (K = $()) == null || K())
    }
        ;
    document.body.addEventListener("keydown", W),
        onCleanup(() => document.body.removeEventListener("keydown", W))
}
function androidBackHandler$1(R, $) {
    const { isEnabled: W, onClose: U } = $();
    if (!W || !(getUserAgent().os === "android"))
        return;
    window.history.pushState(ROUTE_STATE, "");
    const K = Y => {
        Y.preventDefault(),
            U()
    }
        ;
    window.addEventListener("popstate", K, {
        once: !0
    }),
        onCleanup(() => {
            window.removeEventListener("popstate", K),
                createMacrotask(() => {
                    var Y;
                    ((Y = window.history.state) == null ? void 0 : Y[ROUTE_STATE_KEY]) === !0 && window.history.back()
                }
                )
        }
        )
}
const ROUTE_STATE_KEY = "androidBackHandler"
    , ROUTE_STATE = {
        [ROUTE_STATE_KEY]: !0
    }
    , _tmpl$$v = template$1('<svg><path fill-rule="evenodd" clip-rule="evenodd" d="M10.2122 14.3407C10.5384 14.0854 10.5959 13.614 10.3406 13.2878L6.20237 8.00003L10.3406 2.71227C10.5959 2.38607 10.5384 1.91469 10.2122 1.6594C9.88604 1.40412 9.41465 1.46161 9.15937 1.7878L4.65937 7.5378C4.44688 7.80932 4.44688 8.19074 4.65937 8.46226L9.15937 14.2123C9.41465 14.5385 9.88604 14.5959 10.2122 14.3407Z"></path></svg>', 4, !0)
    , rotationDegrees = {
        left: 0,
        top: 90,
        right: 180,
        bottom: 270
    }
    , ArrowIcon = R => {
        const $ = useTheme()
            , W = () => R.fill || $.colors.icon.secondary
            , U = () => R.direction || "left"
            , V = styled("svg")`
        transform: rotate(${K => rotationDegrees[K.svgDirection]}deg);
        transition: transform 0.1s ease-in-out;
    `;
        return createComponent(V, {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            viewBox: "0 0 16 16",
            fill: "none",
            get svgDirection() {
                return U()
            },
            get children() {
                const K = _tmpl$$v.cloneNode(!0);
                return createRenderEffect(() => setAttribute(K, "fill", W())),
                    K
            }
        })
    }
    , _tmpl$$u = template$1('<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.71966 2.71968C3.01255 2.42678 3.48743 2.42677 3.78032 2.71966L8.00002 6.93925L12.2197 2.71967C12.5126 2.42677 12.9874 2.42678 13.2803 2.71967C13.5732 3.01257 13.5732 3.48744 13.2803 3.78033L9.06068 7.99991L13.2803 12.2197C13.5732 12.5126 13.5732 12.9874 13.2803 13.2803C12.9874 13.5732 12.5126 13.5732 12.2197 13.2803L8.00002 9.06057L3.78033 13.2803C3.48744 13.5732 3.01257 13.5732 2.71967 13.2803C2.42678 12.9874 2.42677 12.5126 2.71967 12.2197L6.93936 7.99991L2.71968 3.78034C2.42678 3.48745 2.42677 3.01257 2.71966 2.71968Z"></path></svg>')
    , CloseIcon = R => {
        const $ = useTheme()
            , W = () => R.fill || $.colors.icon.secondary;
        return (() => {
            const U = _tmpl$$u.cloneNode(!0)
                , V = U.firstChild;
            return createRenderEffect(() => setAttribute(V, "fill", W())),
                U
        }
        )()
    }
    , IconButtonStyled = styled.button`
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background-color: ${R => R.theme.colors.background.tint};
    border: none;
    cursor: pointer;

    transition: transform 0.125s ease-in-out;

    ${mediaNotTouch} {
        &:hover {
            transform: scale(1.04);
        }
    }

    &:active {
        transform: scale(0.96);
    }

    ${mediaTouch} {
        &:active {
            transform: scale(0.92);
        }
    }
`
    , IconButton = R => {
        const $ = useDataAttributes(R)
            , W = () => R.icon || "close";
        return createComponent(IconButtonStyled, mergeProps({
            get class() {
                return R.class
            },
            onClick: () => R.onClick(),
            "data-tc-icon-button": "true"
        }, $, {
            get children() {
                return [createComponent(Show, {
                    get when() {
                        return !!R.children
                    },
                    get children() {
                        return R.children
                    }
                }), createComponent(Show, {
                    get when() {
                        return !R.children
                    },
                    get children() {
                        return createComponent(Switch, {
                            get children() {
                                return [createComponent(Match, {
                                    get when() {
                                        return W() === "close"
                                    },
                                    get children() {
                                        return createComponent(CloseIcon, {
                                            get fill() {
                                                return R.fill
                                            }
                                        })
                                    }
                                }), createComponent(Match, {
                                    get when() {
                                        return W() === "arrow"
                                    },
                                    get children() {
                                        return createComponent(ArrowIcon, {
                                            get fill() {
                                                return R.fill
                                            }
                                        })
                                    }
                                }), createComponent(Match, {
                                    get when() {
                                        return W() === "question"
                                    },
                                    get children() {
                                        return createComponent(QuestionIcon, {
                                            get fill() {
                                                return R.fill
                                            }
                                        })
                                    }
                                }), createComponent(Match, {
                                    get when() {
                                        return typeof W() != "string"
                                    },
                                    get children() {
                                        return W()
                                    }
                                })]
                            }
                        })
                    }
                })]
            }
        }))
    }
    , borders$4 = {
        m: "24px",
        s: "16px",
        none: "0"
    }
    , ModalBackgroundStyled = styled.div`
    display: flex;
    position: fixed;
    z-index: 1000;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    padding: 20px 0;
    overflow-y: auto;

    ${media("mobile")} {
        padding-bottom: 0;
    }
`
    , ModalWrapperClass = u$1`
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08), 0 16px 64px rgba(0, 0, 0, 0.16);
    width: fit-content;
    margin: auto;

    ${media("mobile")} {
        width: 100%;
        height: fit-content;
        margin: auto 0 0 0;
    }
`
    , ModalBodyStyled = styled.div`
    position: relative;
    min-height: 100px;
    width: 416px;
    padding: 44px 56px 24px;

    box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.04);

    background-color: ${R => R.theme.colors.background.primary};
    border-radius: ${R => borders$4[R.theme.borderRadius]};

    ${media("mobile")} {
        width: 100%;
    }
`
    , CloseButtonStyled = styled(IconButton)`
    position: absolute;
    right: 16px;
    top: 16px;
`
    , ModalFooterStyled = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 16px 16px 18px;
    border-radius: 0 0 ${R => borders$4[R.theme.borderRadius]}
        ${R => borders$4[R.theme.borderRadius]};
`
    , QuestionButtonStyled = styled(IconButton)`
    background-color: ${R => rgba(R.theme.colors.icon.secondary, .12)};
`;
class AnimationTimelineNoop {
    constructor() {
        __publicField(this, "currentTime", 0)
    }
}
const _AnimationNoop = class {
    constructor() {
        __publicField(this, "currentTime", 0),
            __publicField(this, "playbackRate", 1),
            __publicField(this, "startTime", null),
            __publicField(this, "timeline", new AnimationTimelineNoop),
            __publicField(this, "finished", Promise.resolve(this)),
            __publicField(this, "effect", null),
            __publicField(this, "id", ""),
            __publicField(this, "pending", !1),
            __publicField(this, "playState", "finished"),
            __publicField(this, "replaceState", "active"),
            __publicField(this, "ready", Promise.resolve(this)),
            __publicField(this, "oncancel", null),
            __publicField(this, "onfinish", null),
            __publicField(this, "onremove", null)
    }
    static create() {
        return _AnimationNoop._instance || (logWarning("Animation is not supported in this environment: please consider using the `web-animations-js` polyfill to provide a fallback implementation of the Web Animations API."),
            _AnimationNoop._instance = new _AnimationNoop),
            _AnimationNoop._instance
    }
    cancel() { }
    finish() { }
    pause() { }
    play() { }
    reverse() { }
    addEventListener(R, $, W) { }
    dispatchEvent(R) {
        return !1
    }
    removeEventListener(R, $, W) { }
    updatePlaybackRate(R) { }
    commitStyles() { }
    persist() { }
}
    ;
let AnimationNoop = _AnimationNoop;
__publicField(AnimationNoop, "_instance", null);
function animate(R, $, W) {
    return "animate" in R ? R.animate($, W) : AnimationNoop.create()
}
const _tmpl$$t = template$1("<div></div>")
    , clickOutside = clickOutside$1
    , keyPressed = escPressed
    , androidBackHandler = androidBackHandler$1
    , Modal = R => {
        const $ = useTheme()
            , W = useDataAttributes(R);
        return createEffect(() => {
            R.opened ? disableScroll() : enableScroll()
        }
        ),
            createComponent(Transition, {
                onBeforeEnter: U => {
                    const V = isDevice("mobile") ? 200 : 100;
                    animate(U, [{
                        opacity: 0
                    }, {
                        opacity: 1
                    }], {
                        duration: V
                    }),
                        isDevice("mobile") && animate(U.firstElementChild, [{
                            transform: "translateY(390px)"
                        }, {
                            transform: "translateY(0)"
                        }], {
                            duration: V
                        })
                }
                ,
                onExit: (U, V) => {
                    const K = isDevice("mobile") ? 200 : 100
                        , Y = animate(U, [{
                            opacity: 1
                        }, {
                            opacity: 0
                        }], {
                            duration: K
                        });
                    if (isDevice("mobile")) {
                        const Z = animate(U.firstElementChild, [{
                            transform: "translateY(0)"
                        }, {
                            transform: "translateY(390px)"
                        }], {
                            duration: K
                        });
                        Promise.all([Y.finished, Z.finished]).then(V)
                    } else
                        Y.finished.then(V)
                }
                ,
                get children() {
                    return createComponent(Show, {
                        get when() {
                            return R.opened
                        },
                        get children() {
                            return createComponent(ModalBackgroundStyled, mergeProps({
                                "data-tc-modal": "true"
                            }, W, {
                                get children() {
                                    const U = _tmpl$$t.cloneNode(!0);
                                    return use(androidBackHandler, U, () => ({
                                        isEnabled: R.enableAndroidBackHandler,
                                        onClose: () => R.onClose()
                                    })),
                                        use(keyPressed, U, () => () => R.onClose()),
                                        use(clickOutside, U, () => () => R.onClose()),
                                        insert(U, createComponent(ModalBodyStyled, {
                                            get class() {
                                                return R.class
                                            },
                                            get children() {
                                                return [createComponent(CloseButtonStyled, {
                                                    icon: "close",
                                                    onClick: () => R.onClose()
                                                }), createMemo(() => R.children)]
                                            }
                                        }), null),
                                        insert(U, createComponent(Show, {
                                            get when() {
                                                return R.onClickQuestion
                                            },
                                            get children() {
                                                return createComponent(ModalFooterStyled, {
                                                    get children() {
                                                        return [createComponent(TonConnectBrand, {}), createComponent(QuestionButtonStyled, {
                                                            get onClick() {
                                                                return R.onClickQuestion
                                                            },
                                                            icon: "question"
                                                        })]
                                                    }
                                                })
                                            }
                                        }), null),
                                        createRenderEffect(() => className(U, cn(ModalWrapperClass, u$1`
                                border-radius: ${borders$4[$.borderRadius]};
                                background-color: ${$.colors.background.tint};

                                ${media("mobile")} {
                                    border-radius: ${borders$4[$.borderRadius]}
                                        ${borders$4[$.borderRadius]} 0 0;
                                }
                            `))),
                                        U
                                }
                            }))
                        }
                    })
                }
            })
    }
    , wrapperBorderRadius = {
        m: "22px",
        s: "12px",
        none: "0"
    }
    , sliderBorderRadius = {
        m: "18px",
        s: "8px",
        none: "0"
    }
    , TabBarStyled = styled.div`
    display: grid;
    grid-template: 1fr / 1fr 1fr;
    width: fit-content;
    justify-items: center;
    gap: 4px;

    position: relative;
    padding: 4px;
    border-radius: ${R => wrapperBorderRadius[R.theme.borderRadius]};

    background-color: ${R => R.theme.colors.background.secondary};
`
    , SliderStyled = styled.div`
    position: absolute;
    top: 4px;
    left: 4px;

    height: calc(100% - 8px);
    width: calc(50% - 4px);

    border-radius: ${R => sliderBorderRadius[R.theme.borderRadius]};
    background-color: ${R => R.theme.colors.background.segment};

    transform: ${R => R.right ? "translateX(100%)" : "translateX(0)"};

    transition: transform 0.13s ease-in-out;
`
    , InputStyled = styled.input`
    display: none;
`
    , LabelStyled = styled.label`
    padding: 9px 12px;
    z-index: 1;

    cursor: ${R => R.isActive ? "default" : "pointer"};

    transition: transform 0.13s ease-in-out;

    &:hover {
        transform: ${R => R.isActive ? "none" : "scale(1.025)"};
    }

    > * {
        ${R => R.isActive ? "" : `color: ${R.theme.colors.text.secondary};`}
    }
`
    , TabBar = R => {
        const $ = "tabBar" + Math.floor(Math.random() * 1e4);
        return createComponent(TabBarStyled, {
            get class() {
                return R.class
            },
            "data-tc-tab-bar": "true",
            get children() {
                return [createComponent(SliderStyled, {
                    get right() {
                        return R.selectedTabIndex === 1
                    }
                }), createComponent(LabelStyled, {
                    get isActive() {
                        return R.selectedTabIndex === 0
                    },
                    get children() {
                        return [createComponent(InputStyled, {
                            type: "radio",
                            name: $,
                            get checked() {
                                return R.selectedTabIndex === 0
                            },
                            onInput: () => {
                                var W;
                                return (W = R.onSelectedTabIndexChange) == null ? void 0 : W.call(R, 0)
                            }
                        }), createMemo(() => R.tab1)]
                    }
                }), createComponent(LabelStyled, {
                    get isActive() {
                        return R.selectedTabIndex === 1
                    },
                    get children() {
                        return [createComponent(InputStyled, {
                            type: "radio",
                            get checked() {
                                return R.selectedTabIndex === 1
                            },
                            name: $,
                            onInput: () => {
                                var W;
                                return (W = R.onSelectedTabIndexChange) == null ? void 0 : W.call(R, 1)
                            }
                        }), createMemo(() => R.tab2)]
                    }
                })]
            }
        })
    }
    , backgroundBorders = {
        m: "16px",
        s: "12px",
        none: "0"
    }
    , imageBorders = {
        m: "12px",
        s: "8px",
        none: "0"
    }
    , qrNormalSize = 256
    , imgSizeDefault = 60
    , picSizeDefault = 48
    , qrPaddingTop = 24
    , CopyIconButton = styled.div`
    width: 52px;
    height: 52px;
    background: transparent;
    position: absolute;
    right: 0;
    bottom: 0;

    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.125s ease-in-out;
`
    , QrCodeBackground = styled.button`
    display: flex;
    align-items: center;
    position: relative;
    background-color: ${R => R.theme.colors.background.qr};
    border-radius: ${R => backgroundBorders[R.theme.borderRadius]};
    padding: ${toPx(qrPaddingTop)} 0;
    height: ${toPx(qrNormalSize + qrPaddingTop * 2)};
    width: 100%;

    overflow: hidden;
    cursor: pointer;
    border: none;

    ${mediaNotTouch} {
        &:hover {
            ${CopyIconButton.class} {
                transform: scale(1.04);
            }
        }
    }

    &:active {
        ${CopyIconButton.class} {
            transform: scale(0.96);
        }
    }

    ${mediaTouch} {
        &:active {
            ${CopyIconButton.class} {
                transform: scale(0.92);
            }
        }
    }
`
    , QrCodeWrapper$2 = styled.div`
    position: relative;

    width: fit-content;
    margin: 0 auto;

    > div:first-child {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    rect {
        fill: transparent;
    }

    path {
        fill: ${R => R.theme.colors.constant.black};
    }
`
    , ImageBackground = styled.div`
    position: absolute;
    width: ${toPx(imgSizeDefault)};
    height: ${toPx(imgSizeDefault)};
    background: ${R => R.theme.colors.background.qr};

    display: flex;
    align-items: center;
    justify-content: center;
`
    , ImageStyled$3 = styled(Image)`
    width: ${R => toPx(R.size)};
    height: ${R => toPx(R.size)};
    border-radius: ${R => imageBorders[R.theme.borderRadius]};
    background-color: ${R => R.theme.colors.background.qr};
`
    , CopiedBoxStyled = styled.div`
    position: absolute;
    bottom: 14px;
    left: 50%;
    transform: translate(-50%, 0);

    display: flex;
    gap: 6px;
    align-items: center;
    border-radius: 18px;
    min-width: 126px;
    padding: 9px 16px 9px 10px;

    filter: drop-shadow(0px 2px 8px rgba(0, 0, 0, 0.08));
    background-color: ${R => R.theme.colors.background.segment};
`;
var qrcode$1 = {
    exports: {}
};
(function (R, $) {
    var W = function () {
        var U = function (be, Be) {
            var xe = 236
                , ye = 17
                , de = be
                , Se = K[Be]
                , he = null
                , ce = 0
                , Oe = null
                , Ne = []
                , He = {}
                , tt = function ($e, Te) {
                    ce = de * 4 + 17,
                        he = function (we) {
                            for (var Ie = new Array(we), Re = 0; Re < we; Re += 1) {
                                Ie[Re] = new Array(we);
                                for (var je = 0; je < we; je += 1)
                                    Ie[Re][je] = null
                            }
                            return Ie
                        }(ce),
                        at(0, 0),
                        at(ce - 7, 0),
                        at(0, ce - 7),
                        Pt(),
                        At(),
                        Vt($e, Te),
                        de >= 7 && Gt($e),
                        Oe == null && (Oe = gt(de, Se, Ne)),
                        Bt(Oe, Te)
                }
                , at = function ($e, Te) {
                    for (var we = -1; we <= 7; we += 1)
                        if (!($e + we <= -1 || ce <= $e + we))
                            for (var Ie = -1; Ie <= 7; Ie += 1)
                                Te + Ie <= -1 || ce <= Te + Ie || (0 <= we && we <= 6 && (Ie == 0 || Ie == 6) || 0 <= Ie && Ie <= 6 && (we == 0 || we == 6) || 2 <= we && we <= 4 && 2 <= Ie && Ie <= 4 ? he[$e + we][Te + Ie] = !0 : he[$e + we][Te + Ie] = !1)
                }
                , Ct = function () {
                    for (var $e = 0, Te = 0, we = 0; we < 8; we += 1) {
                        tt(!0, we);
                        var Ie = Z.getLostPoint(He);
                        (we == 0 || $e > Ie) && ($e = Ie,
                            Te = we)
                    }
                    return Te
                }
                , At = function () {
                    for (var $e = 8; $e < ce - 8; $e += 1)
                        he[$e][6] == null && (he[$e][6] = $e % 2 == 0);
                    for (var Te = 8; Te < ce - 8; Te += 1)
                        he[6][Te] == null && (he[6][Te] = Te % 2 == 0)
                }
                , Pt = function () {
                    for (var $e = Z.getPatternPosition(de), Te = 0; Te < $e.length; Te += 1)
                        for (var we = 0; we < $e.length; we += 1) {
                            var Ie = $e[Te]
                                , Re = $e[we];
                            if (he[Ie][Re] == null)
                                for (var je = -2; je <= 2; je += 1)
                                    for (var Xe = -2; Xe <= 2; Xe += 1)
                                        je == -2 || je == 2 || Xe == -2 || Xe == 2 || je == 0 && Xe == 0 ? he[Ie + je][Re + Xe] = !0 : he[Ie + je][Re + Xe] = !1
                        }
                }
                , Gt = function ($e) {
                    for (var Te = Z.getBCHTypeNumber(de), we = 0; we < 18; we += 1) {
                        var Ie = !$e && (Te >> we & 1) == 1;
                        he[Math.floor(we / 3)][we % 3 + ce - 8 - 3] = Ie
                    }
                    for (var we = 0; we < 18; we += 1) {
                        var Ie = !$e && (Te >> we & 1) == 1;
                        he[we % 3 + ce - 8 - 3][Math.floor(we / 3)] = Ie
                    }
                }
                , Vt = function ($e, Te) {
                    for (var we = Se << 3 | Te, Ie = Z.getBCHTypeInfo(we), Re = 0; Re < 15; Re += 1) {
                        var je = !$e && (Ie >> Re & 1) == 1;
                        Re < 6 ? he[Re][8] = je : Re < 8 ? he[Re + 1][8] = je : he[ce - 15 + Re][8] = je
                    }
                    for (var Re = 0; Re < 15; Re += 1) {
                        var je = !$e && (Ie >> Re & 1) == 1;
                        Re < 8 ? he[8][ce - Re - 1] = je : Re < 9 ? he[8][15 - Re - 1 + 1] = je : he[8][15 - Re - 1] = je
                    }
                    he[ce - 8][8] = !$e
                }
                , Bt = function ($e, Te) {
                    for (var we = -1, Ie = ce - 1, Re = 7, je = 0, Xe = Z.getMaskFunction(Te), et = ce - 1; et > 0; et -= 2)
                        for (et == 6 && (et -= 1); ;) {
                            for (var Mt = 0; Mt < 2; Mt += 1)
                                if (he[Ie][et - Mt] == null) {
                                    var Rt = !1;
                                    je < $e.length && (Rt = ($e[je] >>> Re & 1) == 1);
                                    var rt = Xe(Ie, et - Mt);
                                    rt && (Rt = !Rt),
                                        he[Ie][et - Mt] = Rt,
                                        Re -= 1,
                                        Re == -1 && (je += 1,
                                            Re = 7)
                                }
                            if (Ie += we,
                                Ie < 0 || ce <= Ie) {
                                Ie -= we,
                                    we = -we;
                                break
                            }
                        }
                }
                , Ht = function ($e, Te) {
                    for (var we = 0, Ie = 0, Re = 0, je = new Array(Te.length), Xe = new Array(Te.length), et = 0; et < Te.length; et += 1) {
                        var Mt = Te[et].dataCount
                            , Rt = Te[et].totalCount - Mt;
                        Ie = Math.max(Ie, Mt),
                            Re = Math.max(Re, Rt),
                            je[et] = new Array(Mt);
                        for (var rt = 0; rt < je[et].length; rt += 1)
                            je[et][rt] = 255 & $e.getBuffer()[rt + we];
                        we += Mt;
                        var Wt = Z.getErrorCorrectPolynomial(Rt)
                            , jt = X(je[et], Wt.getLength() - 1)
                            , fn = jt.mod(Wt);
                        Xe[et] = new Array(Wt.getLength() - 1);
                        for (var rt = 0; rt < Xe[et].length; rt += 1) {
                            var qt = rt + fn.getLength() - Xe[et].length;
                            Xe[et][rt] = qt >= 0 ? fn.getAt(qt) : 0
                        }
                    }
                    for (var Jt = 0, rt = 0; rt < Te.length; rt += 1)
                        Jt += Te[rt].totalCount;
                    for (var Xt = new Array(Jt), ft = 0, rt = 0; rt < Ie; rt += 1)
                        for (var et = 0; et < Te.length; et += 1)
                            rt < je[et].length && (Xt[ft] = je[et][rt],
                                ft += 1);
                    for (var rt = 0; rt < Re; rt += 1)
                        for (var et = 0; et < Te.length; et += 1)
                            rt < Xe[et].length && (Xt[ft] = Xe[et][rt],
                                ft += 1);
                    return Xt
                }
                , gt = function ($e, Te, we) {
                    for (var Ie = re.getRSBlocks($e, Te), Re = oe(), je = 0; je < we.length; je += 1) {
                        var Xe = we[je];
                        Re.put(Xe.getMode(), 4),
                            Re.put(Xe.getLength(), Z.getLengthInBits(Xe.getMode(), $e)),
                            Xe.write(Re)
                    }
                    for (var et = 0, je = 0; je < Ie.length; je += 1)
                        et += Ie[je].dataCount;
                    if (Re.getLengthInBits() > et * 8)
                        throw "code length overflow. (" + Re.getLengthInBits() + ">" + et * 8 + ")";
                    for (Re.getLengthInBits() + 4 <= et * 8 && Re.put(0, 4); Re.getLengthInBits() % 8 != 0;)
                        Re.putBit(!1);
                    for (; !(Re.getLengthInBits() >= et * 8 || (Re.put(xe, 8),
                        Re.getLengthInBits() >= et * 8));)
                        Re.put(ye, 8);
                    return Ht(Re, Ie)
                };
            He.addData = function ($e, Te) {
                Te = Te || "Byte";
                var we = null;
                switch (Te) {
                    case "Numeric":
                        we = ie($e);
                        break;
                    case "Alphanumeric":
                        we = se($e);
                        break;
                    case "Byte":
                        we = le($e);
                        break;
                    case "Kanji":
                        we = ue($e);
                        break;
                    default:
                        throw "mode:" + Te
                }
                Ne.push(we),
                    Oe = null
            }
                ,
                He.isDark = function ($e, Te) {
                    if ($e < 0 || ce <= $e || Te < 0 || ce <= Te)
                        throw $e + "," + Te;
                    return he[$e][Te]
                }
                ,
                He.getModuleCount = function () {
                    return ce
                }
                ,
                He.make = function () {
                    if (de < 1) {
                        for (var $e = 1; $e < 40; $e++) {
                            for (var Te = re.getRSBlocks($e, Se), we = oe(), Ie = 0; Ie < Ne.length; Ie++) {
                                var Re = Ne[Ie];
                                we.put(Re.getMode(), 4),
                                    we.put(Re.getLength(), Z.getLengthInBits(Re.getMode(), $e)),
                                    Re.write(we)
                            }
                            for (var je = 0, Ie = 0; Ie < Te.length; Ie++)
                                je += Te[Ie].dataCount;
                            if (we.getLengthInBits() <= je * 8)
                                break
                        }
                        de = $e
                    }
                    tt(!1, Ct())
                }
                ,
                He.createTableTag = function ($e, Te) {
                    $e = $e || 2,
                        Te = typeof Te > "u" ? $e * 4 : Te;
                    var we = "";
                    we += '<table style="',
                        we += " border-width: 0px; border-style: none;",
                        we += " border-collapse: collapse;",
                        we += " padding: 0px; margin: " + Te + "px;",
                        we += '">',
                        we += "<tbody>";
                    for (var Ie = 0; Ie < He.getModuleCount(); Ie += 1) {
                        we += "<tr>";
                        for (var Re = 0; Re < He.getModuleCount(); Re += 1)
                            we += '<td style="',
                                we += " border-width: 0px; border-style: none;",
                                we += " border-collapse: collapse;",
                                we += " padding: 0px; margin: 0px;",
                                we += " width: " + $e + "px;",
                                we += " height: " + $e + "px;",
                                we += " background-color: ",
                                we += He.isDark(Ie, Re) ? "#000000" : "#ffffff",
                                we += ";",
                                we += '"/>';
                        we += "</tr>"
                    }
                    return we += "</tbody>",
                        we += "</table>",
                        we
                }
                ,
                He.createSvgTag = function ($e, Te, we, Ie) {
                    var Re = {};
                    typeof arguments[0] == "object" && (Re = arguments[0],
                        $e = Re.cellSize,
                        Te = Re.margin,
                        we = Re.alt,
                        Ie = Re.title),
                        $e = $e || 2,
                        Te = typeof Te > "u" ? $e * 4 : Te,
                        we = typeof we == "string" ? {
                            text: we
                        } : we || {},
                        we.text = we.text || null,
                        we.id = we.text ? we.id || "qrcode-description" : null,
                        Ie = typeof Ie == "string" ? {
                            text: Ie
                        } : Ie || {},
                        Ie.text = Ie.text || null,
                        Ie.id = Ie.text ? Ie.id || "qrcode-title" : null;
                    var je = He.getModuleCount() * $e + Te * 2, Xe, et, Mt, Rt, rt = "", Wt;
                    for (Wt = "l" + $e + ",0 0," + $e + " -" + $e + ",0 0,-" + $e + "z ",
                        rt += '<svg version="1.1" xmlns="http://www.w3.org/2000/svg"',
                        rt += Re.scalable ? "" : ' width="' + je + 'px" height="' + je + 'px"',
                        rt += ' viewBox="0 0 ' + je + " " + je + '" ',
                        rt += ' preserveAspectRatio="xMinYMin meet"',
                        rt += Ie.text || we.text ? ' role="img" aria-labelledby="' + Nt([Ie.id, we.id].join(" ").trim()) + '"' : "",
                        rt += ">",
                        rt += Ie.text ? '<title id="' + Nt(Ie.id) + '">' + Nt(Ie.text) + "</title>" : "",
                        rt += we.text ? '<description id="' + Nt(we.id) + '">' + Nt(we.text) + "</description>" : "",
                        rt += '<rect width="100%" height="100%" fill="white" cx="0" cy="0"/>',
                        rt += '<path d="',
                        Mt = 0; Mt < He.getModuleCount(); Mt += 1)
                        for (Rt = Mt * $e + Te,
                            Xe = 0; Xe < He.getModuleCount(); Xe += 1)
                            He.isDark(Mt, Xe) && (et = Xe * $e + Te,
                                rt += "M" + et + "," + Rt + Wt);
                    return rt += '" stroke="transparent" fill="black"/>',
                        rt += "</svg>",
                        rt
                }
                ,
                He.createDataURL = function ($e, Te) {
                    $e = $e || 2,
                        Te = typeof Te > "u" ? $e * 4 : Te;
                    var we = He.getModuleCount() * $e + Te * 2
                        , Ie = Te
                        , Re = we - Te;
                    return Ue(we, we, function (je, Xe) {
                        if (Ie <= je && je < Re && Ie <= Xe && Xe < Re) {
                            var et = Math.floor((je - Ie) / $e)
                                , Mt = Math.floor((Xe - Ie) / $e);
                            return He.isDark(Mt, et) ? 0 : 1
                        } else
                            return 1
                    })
                }
                ,
                He.createImgTag = function ($e, Te, we) {
                    $e = $e || 2,
                        Te = typeof Te > "u" ? $e * 4 : Te;
                    var Ie = He.getModuleCount() * $e + Te * 2
                        , Re = "";
                    return Re += "<img",
                        Re += ' src="',
                        Re += He.createDataURL($e, Te),
                        Re += '"',
                        Re += ' width="',
                        Re += Ie,
                        Re += '"',
                        Re += ' height="',
                        Re += Ie,
                        Re += '"',
                        we && (Re += ' alt="',
                            Re += Nt(we),
                            Re += '"'),
                        Re += "/>",
                        Re
                }
                ;
            var Nt = function ($e) {
                for (var Te = "", we = 0; we < $e.length; we += 1) {
                    var Ie = $e.charAt(we);
                    switch (Ie) {
                        case "<":
                            Te += "&lt;";
                            break;
                        case ">":
                            Te += "&gt;";
                            break;
                        case "&":
                            Te += "&amp;";
                            break;
                        case '"':
                            Te += "&quot;";
                            break;
                        default:
                            Te += Ie;
                            break
                    }
                }
                return Te
            }
                , un = function ($e) {
                    var Te = 1;
                    $e = typeof $e > "u" ? Te * 2 : $e;
                    var we = He.getModuleCount() * Te + $e * 2, Ie = $e, Re = we - $e, je, Xe, et, Mt, Rt, rt = {
                        "██": "█",
                        "█ ": "▀",
                        " █": "▄",
                        "  ": " "
                    }, Wt = {
                        "██": "▀",
                        "█ ": "▀",
                        " █": " ",
                        "  ": " "
                    }, jt = "";
                    for (je = 0; je < we; je += 2) {
                        for (et = Math.floor((je - Ie) / Te),
                            Mt = Math.floor((je + 1 - Ie) / Te),
                            Xe = 0; Xe < we; Xe += 1)
                            Rt = "█",
                                Ie <= Xe && Xe < Re && Ie <= je && je < Re && He.isDark(et, Math.floor((Xe - Ie) / Te)) && (Rt = " "),
                                Ie <= Xe && Xe < Re && Ie <= je + 1 && je + 1 < Re && He.isDark(Mt, Math.floor((Xe - Ie) / Te)) ? Rt += " " : Rt += "█",
                                jt += $e < 1 && je + 1 >= Re ? Wt[Rt] : rt[Rt];
                        jt += `
`
                    }
                    return we % 2 && $e > 0 ? jt.substring(0, jt.length - we - 1) + Array(we + 1).join("▀") : jt.substring(0, jt.length - 1)
                };
            return He.createASCII = function ($e, Te) {
                if ($e = $e || 1,
                    $e < 2)
                    return un(Te);
                $e -= 1,
                    Te = typeof Te > "u" ? $e * 2 : Te;
                var we = He.getModuleCount() * $e + Te * 2, Ie = Te, Re = we - Te, je, Xe, et, Mt, Rt = Array($e + 1).join("██"), rt = Array($e + 1).join("  "), Wt = "", jt = "";
                for (je = 0; je < we; je += 1) {
                    for (et = Math.floor((je - Ie) / $e),
                        jt = "",
                        Xe = 0; Xe < we; Xe += 1)
                        Mt = 1,
                            Ie <= Xe && Xe < Re && Ie <= je && je < Re && He.isDark(et, Math.floor((Xe - Ie) / $e)) && (Mt = 0),
                            jt += Mt ? Rt : rt;
                    for (et = 0; et < $e; et += 1)
                        Wt += jt + `
`
                }
                return Wt.substring(0, Wt.length - 1)
            }
                ,
                He.renderTo2dContext = function ($e, Te) {
                    Te = Te || 2;
                    for (var we = He.getModuleCount(), Ie = 0; Ie < we; Ie++)
                        for (var Re = 0; Re < we; Re++)
                            $e.fillStyle = He.isDark(Ie, Re) ? "black" : "white",
                                $e.fillRect(Ie * Te, Re * Te, Te, Te)
                }
                ,
                He
        };
        U.stringToBytesFuncs = {
            default: function (be) {
                for (var Be = [], xe = 0; xe < be.length; xe += 1) {
                    var ye = be.charCodeAt(xe);
                    Be.push(ye & 255)
                }
                return Be
            }
        },
            U.stringToBytes = U.stringToBytesFuncs.default,
            U.createStringToBytes = function (be, Be) {
                var xe = function () {
                    for (var de = Ce(be), Se = function () {
                        var At = de.read();
                        if (At == -1)
                            throw "eof";
                        return At
                    }, he = 0, ce = {}; ;) {
                        var Oe = de.read();
                        if (Oe == -1)
                            break;
                        var Ne = Se()
                            , He = Se()
                            , tt = Se()
                            , at = String.fromCharCode(Oe << 8 | Ne)
                            , Ct = He << 8 | tt;
                        ce[at] = Ct,
                            he += 1
                    }
                    if (he != Be)
                        throw he + " != " + Be;
                    return ce
                }()
                    , ye = 63;
                return function (de) {
                    for (var Se = [], he = 0; he < de.length; he += 1) {
                        var ce = de.charCodeAt(he);
                        if (ce < 128)
                            Se.push(ce);
                        else {
                            var Oe = xe[de.charAt(he)];
                            typeof Oe == "number" ? (Oe & 255) == Oe ? Se.push(Oe) : (Se.push(Oe >>> 8),
                                Se.push(Oe & 255)) : Se.push(ye)
                        }
                    }
                    return Se
                }
            }
            ;
        var V = {
            MODE_NUMBER: 1,
            MODE_ALPHA_NUM: 2,
            MODE_8BIT_BYTE: 4,
            MODE_KANJI: 8
        }
            , K = {
                L: 1,
                M: 0,
                Q: 3,
                H: 2
            }
            , Y = {
                PATTERN000: 0,
                PATTERN001: 1,
                PATTERN010: 2,
                PATTERN011: 3,
                PATTERN100: 4,
                PATTERN101: 5,
                PATTERN110: 6,
                PATTERN111: 7
            }
            , Z = function () {
                var be = [[], [6, 18], [6, 22], [6, 26], [6, 30], [6, 34], [6, 22, 38], [6, 24, 42], [6, 26, 46], [6, 28, 50], [6, 30, 54], [6, 32, 58], [6, 34, 62], [6, 26, 46, 66], [6, 26, 48, 70], [6, 26, 50, 74], [6, 30, 54, 78], [6, 30, 56, 82], [6, 30, 58, 86], [6, 34, 62, 90], [6, 28, 50, 72, 94], [6, 26, 50, 74, 98], [6, 30, 54, 78, 102], [6, 28, 54, 80, 106], [6, 32, 58, 84, 110], [6, 30, 58, 86, 114], [6, 34, 62, 90, 118], [6, 26, 50, 74, 98, 122], [6, 30, 54, 78, 102, 126], [6, 26, 52, 78, 104, 130], [6, 30, 56, 82, 108, 134], [6, 34, 60, 86, 112, 138], [6, 30, 58, 86, 114, 142], [6, 34, 62, 90, 118, 146], [6, 30, 54, 78, 102, 126, 150], [6, 24, 50, 76, 102, 128, 154], [6, 28, 54, 80, 106, 132, 158], [6, 32, 58, 84, 110, 136, 162], [6, 26, 54, 82, 110, 138, 166], [6, 30, 58, 86, 114, 142, 170]]
                    , Be = 1335
                    , xe = 7973
                    , ye = 21522
                    , de = {}
                    , Se = function (he) {
                        for (var ce = 0; he != 0;)
                            ce += 1,
                                he >>>= 1;
                        return ce
                    };
                return de.getBCHTypeInfo = function (he) {
                    for (var ce = he << 10; Se(ce) - Se(Be) >= 0;)
                        ce ^= Be << Se(ce) - Se(Be);
                    return (he << 10 | ce) ^ ye
                }
                    ,
                    de.getBCHTypeNumber = function (he) {
                        for (var ce = he << 12; Se(ce) - Se(xe) >= 0;)
                            ce ^= xe << Se(ce) - Se(xe);
                        return he << 12 | ce
                    }
                    ,
                    de.getPatternPosition = function (he) {
                        return be[he - 1]
                    }
                    ,
                    de.getMaskFunction = function (he) {
                        switch (he) {
                            case Y.PATTERN000:
                                return function (ce, Oe) {
                                    return (ce + Oe) % 2 == 0
                                }
                                    ;
                            case Y.PATTERN001:
                                return function (ce, Oe) {
                                    return ce % 2 == 0
                                }
                                    ;
                            case Y.PATTERN010:
                                return function (ce, Oe) {
                                    return Oe % 3 == 0
                                }
                                    ;
                            case Y.PATTERN011:
                                return function (ce, Oe) {
                                    return (ce + Oe) % 3 == 0
                                }
                                    ;
                            case Y.PATTERN100:
                                return function (ce, Oe) {
                                    return (Math.floor(ce / 2) + Math.floor(Oe / 3)) % 2 == 0
                                }
                                    ;
                            case Y.PATTERN101:
                                return function (ce, Oe) {
                                    return ce * Oe % 2 + ce * Oe % 3 == 0
                                }
                                    ;
                            case Y.PATTERN110:
                                return function (ce, Oe) {
                                    return (ce * Oe % 2 + ce * Oe % 3) % 2 == 0
                                }
                                    ;
                            case Y.PATTERN111:
                                return function (ce, Oe) {
                                    return (ce * Oe % 3 + (ce + Oe) % 2) % 2 == 0
                                }
                                    ;
                            default:
                                throw "bad maskPattern:" + he
                        }
                    }
                    ,
                    de.getErrorCorrectPolynomial = function (he) {
                        for (var ce = X([1], 0), Oe = 0; Oe < he; Oe += 1)
                            ce = ce.multiply(X([1, J.gexp(Oe)], 0));
                        return ce
                    }
                    ,
                    de.getLengthInBits = function (he, ce) {
                        if (1 <= ce && ce < 10)
                            switch (he) {
                                case V.MODE_NUMBER:
                                    return 10;
                                case V.MODE_ALPHA_NUM:
                                    return 9;
                                case V.MODE_8BIT_BYTE:
                                    return 8;
                                case V.MODE_KANJI:
                                    return 8;
                                default:
                                    throw "mode:" + he
                            }
                        else if (ce < 27)
                            switch (he) {
                                case V.MODE_NUMBER:
                                    return 12;
                                case V.MODE_ALPHA_NUM:
                                    return 11;
                                case V.MODE_8BIT_BYTE:
                                    return 16;
                                case V.MODE_KANJI:
                                    return 10;
                                default:
                                    throw "mode:" + he
                            }
                        else if (ce < 41)
                            switch (he) {
                                case V.MODE_NUMBER:
                                    return 14;
                                case V.MODE_ALPHA_NUM:
                                    return 13;
                                case V.MODE_8BIT_BYTE:
                                    return 16;
                                case V.MODE_KANJI:
                                    return 12;
                                default:
                                    throw "mode:" + he
                            }
                        else
                            throw "type:" + ce
                    }
                    ,
                    de.getLostPoint = function (he) {
                        for (var ce = he.getModuleCount(), Oe = 0, Ne = 0; Ne < ce; Ne += 1)
                            for (var He = 0; He < ce; He += 1) {
                                for (var tt = 0, at = he.isDark(Ne, He), Ct = -1; Ct <= 1; Ct += 1)
                                    if (!(Ne + Ct < 0 || ce <= Ne + Ct))
                                        for (var At = -1; At <= 1; At += 1)
                                            He + At < 0 || ce <= He + At || Ct == 0 && At == 0 || at == he.isDark(Ne + Ct, He + At) && (tt += 1);
                                tt > 5 && (Oe += 3 + tt - 5)
                            }
                        for (var Ne = 0; Ne < ce - 1; Ne += 1)
                            for (var He = 0; He < ce - 1; He += 1) {
                                var Pt = 0;
                                he.isDark(Ne, He) && (Pt += 1),
                                    he.isDark(Ne + 1, He) && (Pt += 1),
                                    he.isDark(Ne, He + 1) && (Pt += 1),
                                    he.isDark(Ne + 1, He + 1) && (Pt += 1),
                                    (Pt == 0 || Pt == 4) && (Oe += 3)
                            }
                        for (var Ne = 0; Ne < ce; Ne += 1)
                            for (var He = 0; He < ce - 6; He += 1)
                                he.isDark(Ne, He) && !he.isDark(Ne, He + 1) && he.isDark(Ne, He + 2) && he.isDark(Ne, He + 3) && he.isDark(Ne, He + 4) && !he.isDark(Ne, He + 5) && he.isDark(Ne, He + 6) && (Oe += 40);
                        for (var He = 0; He < ce; He += 1)
                            for (var Ne = 0; Ne < ce - 6; Ne += 1)
                                he.isDark(Ne, He) && !he.isDark(Ne + 1, He) && he.isDark(Ne + 2, He) && he.isDark(Ne + 3, He) && he.isDark(Ne + 4, He) && !he.isDark(Ne + 5, He) && he.isDark(Ne + 6, He) && (Oe += 40);
                        for (var Gt = 0, He = 0; He < ce; He += 1)
                            for (var Ne = 0; Ne < ce; Ne += 1)
                                he.isDark(Ne, He) && (Gt += 1);
                        var Vt = Math.abs(100 * Gt / ce / ce - 50) / 5;
                        return Oe += Vt * 10,
                            Oe
                    }
                    ,
                    de
            }()
            , J = function () {
                for (var be = new Array(256), Be = new Array(256), xe = 0; xe < 8; xe += 1)
                    be[xe] = 1 << xe;
                for (var xe = 8; xe < 256; xe += 1)
                    be[xe] = be[xe - 4] ^ be[xe - 5] ^ be[xe - 6] ^ be[xe - 8];
                for (var xe = 0; xe < 255; xe += 1)
                    Be[be[xe]] = xe;
                var ye = {};
                return ye.glog = function (de) {
                    if (de < 1)
                        throw "glog(" + de + ")";
                    return Be[de]
                }
                    ,
                    ye.gexp = function (de) {
                        for (; de < 0;)
                            de += 255;
                        for (; de >= 256;)
                            de -= 255;
                        return be[de]
                    }
                    ,
                    ye
            }();
        function X(be, Be) {
            if (typeof be.length > "u")
                throw be.length + "/" + Be;
            var xe = function () {
                for (var de = 0; de < be.length && be[de] == 0;)
                    de += 1;
                for (var Se = new Array(be.length - de + Be), he = 0; he < be.length - de; he += 1)
                    Se[he] = be[he + de];
                return Se
            }()
                , ye = {};
            return ye.getAt = function (de) {
                return xe[de]
            }
                ,
                ye.getLength = function () {
                    return xe.length
                }
                ,
                ye.multiply = function (de) {
                    for (var Se = new Array(ye.getLength() + de.getLength() - 1), he = 0; he < ye.getLength(); he += 1)
                        for (var ce = 0; ce < de.getLength(); ce += 1)
                            Se[he + ce] ^= J.gexp(J.glog(ye.getAt(he)) + J.glog(de.getAt(ce)));
                    return X(Se, 0)
                }
                ,
                ye.mod = function (de) {
                    if (ye.getLength() - de.getLength() < 0)
                        return ye;
                    for (var Se = J.glog(ye.getAt(0)) - J.glog(de.getAt(0)), he = new Array(ye.getLength()), ce = 0; ce < ye.getLength(); ce += 1)
                        he[ce] = ye.getAt(ce);
                    for (var ce = 0; ce < de.getLength(); ce += 1)
                        he[ce] ^= J.gexp(J.glog(de.getAt(ce)) + Se);
                    return X(he, 0).mod(de)
                }
                ,
                ye
        }
        var re = function () {
            var be = [[1, 26, 19], [1, 26, 16], [1, 26, 13], [1, 26, 9], [1, 44, 34], [1, 44, 28], [1, 44, 22], [1, 44, 16], [1, 70, 55], [1, 70, 44], [2, 35, 17], [2, 35, 13], [1, 100, 80], [2, 50, 32], [2, 50, 24], [4, 25, 9], [1, 134, 108], [2, 67, 43], [2, 33, 15, 2, 34, 16], [2, 33, 11, 2, 34, 12], [2, 86, 68], [4, 43, 27], [4, 43, 19], [4, 43, 15], [2, 98, 78], [4, 49, 31], [2, 32, 14, 4, 33, 15], [4, 39, 13, 1, 40, 14], [2, 121, 97], [2, 60, 38, 2, 61, 39], [4, 40, 18, 2, 41, 19], [4, 40, 14, 2, 41, 15], [2, 146, 116], [3, 58, 36, 2, 59, 37], [4, 36, 16, 4, 37, 17], [4, 36, 12, 4, 37, 13], [2, 86, 68, 2, 87, 69], [4, 69, 43, 1, 70, 44], [6, 43, 19, 2, 44, 20], [6, 43, 15, 2, 44, 16], [4, 101, 81], [1, 80, 50, 4, 81, 51], [4, 50, 22, 4, 51, 23], [3, 36, 12, 8, 37, 13], [2, 116, 92, 2, 117, 93], [6, 58, 36, 2, 59, 37], [4, 46, 20, 6, 47, 21], [7, 42, 14, 4, 43, 15], [4, 133, 107], [8, 59, 37, 1, 60, 38], [8, 44, 20, 4, 45, 21], [12, 33, 11, 4, 34, 12], [3, 145, 115, 1, 146, 116], [4, 64, 40, 5, 65, 41], [11, 36, 16, 5, 37, 17], [11, 36, 12, 5, 37, 13], [5, 109, 87, 1, 110, 88], [5, 65, 41, 5, 66, 42], [5, 54, 24, 7, 55, 25], [11, 36, 12, 7, 37, 13], [5, 122, 98, 1, 123, 99], [7, 73, 45, 3, 74, 46], [15, 43, 19, 2, 44, 20], [3, 45, 15, 13, 46, 16], [1, 135, 107, 5, 136, 108], [10, 74, 46, 1, 75, 47], [1, 50, 22, 15, 51, 23], [2, 42, 14, 17, 43, 15], [5, 150, 120, 1, 151, 121], [9, 69, 43, 4, 70, 44], [17, 50, 22, 1, 51, 23], [2, 42, 14, 19, 43, 15], [3, 141, 113, 4, 142, 114], [3, 70, 44, 11, 71, 45], [17, 47, 21, 4, 48, 22], [9, 39, 13, 16, 40, 14], [3, 135, 107, 5, 136, 108], [3, 67, 41, 13, 68, 42], [15, 54, 24, 5, 55, 25], [15, 43, 15, 10, 44, 16], [4, 144, 116, 4, 145, 117], [17, 68, 42], [17, 50, 22, 6, 51, 23], [19, 46, 16, 6, 47, 17], [2, 139, 111, 7, 140, 112], [17, 74, 46], [7, 54, 24, 16, 55, 25], [34, 37, 13], [4, 151, 121, 5, 152, 122], [4, 75, 47, 14, 76, 48], [11, 54, 24, 14, 55, 25], [16, 45, 15, 14, 46, 16], [6, 147, 117, 4, 148, 118], [6, 73, 45, 14, 74, 46], [11, 54, 24, 16, 55, 25], [30, 46, 16, 2, 47, 17], [8, 132, 106, 4, 133, 107], [8, 75, 47, 13, 76, 48], [7, 54, 24, 22, 55, 25], [22, 45, 15, 13, 46, 16], [10, 142, 114, 2, 143, 115], [19, 74, 46, 4, 75, 47], [28, 50, 22, 6, 51, 23], [33, 46, 16, 4, 47, 17], [8, 152, 122, 4, 153, 123], [22, 73, 45, 3, 74, 46], [8, 53, 23, 26, 54, 24], [12, 45, 15, 28, 46, 16], [3, 147, 117, 10, 148, 118], [3, 73, 45, 23, 74, 46], [4, 54, 24, 31, 55, 25], [11, 45, 15, 31, 46, 16], [7, 146, 116, 7, 147, 117], [21, 73, 45, 7, 74, 46], [1, 53, 23, 37, 54, 24], [19, 45, 15, 26, 46, 16], [5, 145, 115, 10, 146, 116], [19, 75, 47, 10, 76, 48], [15, 54, 24, 25, 55, 25], [23, 45, 15, 25, 46, 16], [13, 145, 115, 3, 146, 116], [2, 74, 46, 29, 75, 47], [42, 54, 24, 1, 55, 25], [23, 45, 15, 28, 46, 16], [17, 145, 115], [10, 74, 46, 23, 75, 47], [10, 54, 24, 35, 55, 25], [19, 45, 15, 35, 46, 16], [17, 145, 115, 1, 146, 116], [14, 74, 46, 21, 75, 47], [29, 54, 24, 19, 55, 25], [11, 45, 15, 46, 46, 16], [13, 145, 115, 6, 146, 116], [14, 74, 46, 23, 75, 47], [44, 54, 24, 7, 55, 25], [59, 46, 16, 1, 47, 17], [12, 151, 121, 7, 152, 122], [12, 75, 47, 26, 76, 48], [39, 54, 24, 14, 55, 25], [22, 45, 15, 41, 46, 16], [6, 151, 121, 14, 152, 122], [6, 75, 47, 34, 76, 48], [46, 54, 24, 10, 55, 25], [2, 45, 15, 64, 46, 16], [17, 152, 122, 4, 153, 123], [29, 74, 46, 14, 75, 47], [49, 54, 24, 10, 55, 25], [24, 45, 15, 46, 46, 16], [4, 152, 122, 18, 153, 123], [13, 74, 46, 32, 75, 47], [48, 54, 24, 14, 55, 25], [42, 45, 15, 32, 46, 16], [20, 147, 117, 4, 148, 118], [40, 75, 47, 7, 76, 48], [43, 54, 24, 22, 55, 25], [10, 45, 15, 67, 46, 16], [19, 148, 118, 6, 149, 119], [18, 75, 47, 31, 76, 48], [34, 54, 24, 34, 55, 25], [20, 45, 15, 61, 46, 16]]
                , Be = function (de, Se) {
                    var he = {};
                    return he.totalCount = de,
                        he.dataCount = Se,
                        he
                }
                , xe = {}
                , ye = function (de, Se) {
                    switch (Se) {
                        case K.L:
                            return be[(de - 1) * 4 + 0];
                        case K.M:
                            return be[(de - 1) * 4 + 1];
                        case K.Q:
                            return be[(de - 1) * 4 + 2];
                        case K.H:
                            return be[(de - 1) * 4 + 3];
                        default:
                            return
                    }
                };
            return xe.getRSBlocks = function (de, Se) {
                var he = ye(de, Se);
                if (typeof he > "u")
                    throw "bad rs block @ typeNumber:" + de + "/errorCorrectionLevel:" + Se;
                for (var ce = he.length / 3, Oe = [], Ne = 0; Ne < ce; Ne += 1)
                    for (var He = he[Ne * 3 + 0], tt = he[Ne * 3 + 1], at = he[Ne * 3 + 2], Ct = 0; Ct < He; Ct += 1)
                        Oe.push(Be(tt, at));
                return Oe
            }
                ,
                xe
        }()
            , oe = function () {
                var be = []
                    , Be = 0
                    , xe = {};
                return xe.getBuffer = function () {
                    return be
                }
                    ,
                    xe.getAt = function (ye) {
                        var de = Math.floor(ye / 8);
                        return (be[de] >>> 7 - ye % 8 & 1) == 1
                    }
                    ,
                    xe.put = function (ye, de) {
                        for (var Se = 0; Se < de; Se += 1)
                            xe.putBit((ye >>> de - Se - 1 & 1) == 1)
                    }
                    ,
                    xe.getLengthInBits = function () {
                        return Be
                    }
                    ,
                    xe.putBit = function (ye) {
                        var de = Math.floor(Be / 8);
                        be.length <= de && be.push(0),
                            ye && (be[de] |= 128 >>> Be % 8),
                            Be += 1
                    }
                    ,
                    xe
            }
            , ie = function (be) {
                var Be = V.MODE_NUMBER
                    , xe = be
                    , ye = {};
                ye.getMode = function () {
                    return Be
                }
                    ,
                    ye.getLength = function (he) {
                        return xe.length
                    }
                    ,
                    ye.write = function (he) {
                        for (var ce = xe, Oe = 0; Oe + 2 < ce.length;)
                            he.put(de(ce.substring(Oe, Oe + 3)), 10),
                                Oe += 3;
                        Oe < ce.length && (ce.length - Oe == 1 ? he.put(de(ce.substring(Oe, Oe + 1)), 4) : ce.length - Oe == 2 && he.put(de(ce.substring(Oe, Oe + 2)), 7))
                    }
                    ;
                var de = function (he) {
                    for (var ce = 0, Oe = 0; Oe < he.length; Oe += 1)
                        ce = ce * 10 + Se(he.charAt(Oe));
                    return ce
                }
                    , Se = function (he) {
                        if ("0" <= he && he <= "9")
                            return he.charCodeAt(0) - 48;
                        throw "illegal char :" + he
                    };
                return ye
            }
            , se = function (be) {
                var Be = V.MODE_ALPHA_NUM
                    , xe = be
                    , ye = {};
                ye.getMode = function () {
                    return Be
                }
                    ,
                    ye.getLength = function (Se) {
                        return xe.length
                    }
                    ,
                    ye.write = function (Se) {
                        for (var he = xe, ce = 0; ce + 1 < he.length;)
                            Se.put(de(he.charAt(ce)) * 45 + de(he.charAt(ce + 1)), 11),
                                ce += 2;
                        ce < he.length && Se.put(de(he.charAt(ce)), 6)
                    }
                    ;
                var de = function (Se) {
                    if ("0" <= Se && Se <= "9")
                        return Se.charCodeAt(0) - 48;
                    if ("A" <= Se && Se <= "Z")
                        return Se.charCodeAt(0) - 65 + 10;
                    switch (Se) {
                        case " ":
                            return 36;
                        case "$":
                            return 37;
                        case "%":
                            return 38;
                        case "*":
                            return 39;
                        case "+":
                            return 40;
                        case "-":
                            return 41;
                        case ".":
                            return 42;
                        case "/":
                            return 43;
                        case ":":
                            return 44;
                        default:
                            throw "illegal char :" + Se
                    }
                };
                return ye
            }
            , le = function (be) {
                var Be = V.MODE_8BIT_BYTE
                    , xe = U.stringToBytes(be)
                    , ye = {};
                return ye.getMode = function () {
                    return Be
                }
                    ,
                    ye.getLength = function (de) {
                        return xe.length
                    }
                    ,
                    ye.write = function (de) {
                        for (var Se = 0; Se < xe.length; Se += 1)
                            de.put(xe[Se], 8)
                    }
                    ,
                    ye
            }
            , ue = function (be) {
                var Be = V.MODE_KANJI
                    , xe = U.stringToBytesFuncs.SJIS;
                if (!xe)
                    throw "sjis not supported.";
                (function (Se, he) {
                    var ce = xe(Se);
                    if (ce.length != 2 || (ce[0] << 8 | ce[1]) != he)
                        throw "sjis not supported."
                }
                )("友", 38726);
                var ye = xe(be)
                    , de = {};
                return de.getMode = function () {
                    return Be
                }
                    ,
                    de.getLength = function (Se) {
                        return ~~(ye.length / 2)
                    }
                    ,
                    de.write = function (Se) {
                        for (var he = ye, ce = 0; ce + 1 < he.length;) {
                            var Oe = (255 & he[ce]) << 8 | 255 & he[ce + 1];
                            if (33088 <= Oe && Oe <= 40956)
                                Oe -= 33088;
                            else if (57408 <= Oe && Oe <= 60351)
                                Oe -= 49472;
                            else
                                throw "illegal char at " + (ce + 1) + "/" + Oe;
                            Oe = (Oe >>> 8 & 255) * 192 + (Oe & 255),
                                Se.put(Oe, 13),
                                ce += 2
                        }
                        if (ce < he.length)
                            throw "illegal char at " + (ce + 1)
                    }
                    ,
                    de
            }
            , pe = function () {
                var be = []
                    , Be = {};
                return Be.writeByte = function (xe) {
                    be.push(xe & 255)
                }
                    ,
                    Be.writeShort = function (xe) {
                        Be.writeByte(xe),
                            Be.writeByte(xe >>> 8)
                    }
                    ,
                    Be.writeBytes = function (xe, ye, de) {
                        ye = ye || 0,
                            de = de || xe.length;
                        for (var Se = 0; Se < de; Se += 1)
                            Be.writeByte(xe[Se + ye])
                    }
                    ,
                    Be.writeString = function (xe) {
                        for (var ye = 0; ye < xe.length; ye += 1)
                            Be.writeByte(xe.charCodeAt(ye))
                    }
                    ,
                    Be.toByteArray = function () {
                        return be
                    }
                    ,
                    Be.toString = function () {
                        var xe = "";
                        xe += "[";
                        for (var ye = 0; ye < be.length; ye += 1)
                            ye > 0 && (xe += ","),
                                xe += be[ye];
                        return xe += "]",
                            xe
                    }
                    ,
                    Be
            }
            , Ee = function () {
                var be = 0
                    , Be = 0
                    , xe = 0
                    , ye = ""
                    , de = {}
                    , Se = function (ce) {
                        ye += String.fromCharCode(he(ce & 63))
                    }
                    , he = function (ce) {
                        if (!(ce < 0)) {
                            if (ce < 26)
                                return 65 + ce;
                            if (ce < 52)
                                return 97 + (ce - 26);
                            if (ce < 62)
                                return 48 + (ce - 52);
                            if (ce == 62)
                                return 43;
                            if (ce == 63)
                                return 47
                        }
                        throw "n:" + ce
                    };
                return de.writeByte = function (ce) {
                    for (be = be << 8 | ce & 255,
                        Be += 8,
                        xe += 1; Be >= 6;)
                        Se(be >>> Be - 6),
                            Be -= 6
                }
                    ,
                    de.flush = function () {
                        if (Be > 0 && (Se(be << 6 - Be),
                            be = 0,
                            Be = 0),
                            xe % 3 != 0)
                            for (var ce = 3 - xe % 3, Oe = 0; Oe < ce; Oe += 1)
                                ye += "="
                    }
                    ,
                    de.toString = function () {
                        return ye
                    }
                    ,
                    de
            }
            , Ce = function (be) {
                var Be = be
                    , xe = 0
                    , ye = 0
                    , de = 0
                    , Se = {};
                Se.read = function () {
                    for (; de < 8;) {
                        if (xe >= Be.length) {
                            if (de == 0)
                                return -1;
                            throw "unexpected end of file./" + de
                        }
                        var ce = Be.charAt(xe);
                        if (xe += 1,
                            ce == "=")
                            return de = 0,
                                -1;
                        if (ce.match(/^\s$/))
                            continue;
                        ye = ye << 6 | he(ce.charCodeAt(0)),
                            de += 6
                    }
                    var Oe = ye >>> de - 8 & 255;
                    return de -= 8,
                        Oe
                }
                    ;
                var he = function (ce) {
                    if (65 <= ce && ce <= 90)
                        return ce - 65;
                    if (97 <= ce && ce <= 122)
                        return ce - 97 + 26;
                    if (48 <= ce && ce <= 57)
                        return ce - 48 + 52;
                    if (ce == 43)
                        return 62;
                    if (ce == 47)
                        return 63;
                    throw "c:" + ce
                };
                return Se
            }
            , ke = function (be, Be) {
                var xe = be
                    , ye = Be
                    , de = new Array(be * Be)
                    , Se = {};
                Se.setPixel = function (Ne, He, tt) {
                    de[He * xe + Ne] = tt
                }
                    ,
                    Se.write = function (Ne) {
                        Ne.writeString("GIF87a"),
                            Ne.writeShort(xe),
                            Ne.writeShort(ye),
                            Ne.writeByte(128),
                            Ne.writeByte(0),
                            Ne.writeByte(0),
                            Ne.writeByte(0),
                            Ne.writeByte(0),
                            Ne.writeByte(0),
                            Ne.writeByte(255),
                            Ne.writeByte(255),
                            Ne.writeByte(255),
                            Ne.writeString(","),
                            Ne.writeShort(0),
                            Ne.writeShort(0),
                            Ne.writeShort(xe),
                            Ne.writeShort(ye),
                            Ne.writeByte(0);
                        var He = 2
                            , tt = ce(He);
                        Ne.writeByte(He);
                        for (var at = 0; tt.length - at > 255;)
                            Ne.writeByte(255),
                                Ne.writeBytes(tt, at, 255),
                                at += 255;
                        Ne.writeByte(tt.length - at),
                            Ne.writeBytes(tt, at, tt.length - at),
                            Ne.writeByte(0),
                            Ne.writeString(";")
                    }
                    ;
                var he = function (Ne) {
                    var He = Ne
                        , tt = 0
                        , at = 0
                        , Ct = {};
                    return Ct.write = function (At, Pt) {
                        if (At >>> Pt)
                            throw "length over";
                        for (; tt + Pt >= 8;)
                            He.writeByte(255 & (At << tt | at)),
                                Pt -= 8 - tt,
                                At >>>= 8 - tt,
                                at = 0,
                                tt = 0;
                        at = At << tt | at,
                            tt = tt + Pt
                    }
                        ,
                        Ct.flush = function () {
                            tt > 0 && He.writeByte(at)
                        }
                        ,
                        Ct
                }
                    , ce = function (Ne) {
                        for (var He = 1 << Ne, tt = (1 << Ne) + 1, at = Ne + 1, Ct = Oe(), At = 0; At < He; At += 1)
                            Ct.add(String.fromCharCode(At));
                        Ct.add(String.fromCharCode(He)),
                            Ct.add(String.fromCharCode(tt));
                        var Pt = pe()
                            , Gt = he(Pt);
                        Gt.write(He, at);
                        var Vt = 0
                            , Bt = String.fromCharCode(de[Vt]);
                        for (Vt += 1; Vt < de.length;) {
                            var Ht = String.fromCharCode(de[Vt]);
                            Vt += 1,
                                Ct.contains(Bt + Ht) ? Bt = Bt + Ht : (Gt.write(Ct.indexOf(Bt), at),
                                    Ct.size() < 4095 && (Ct.size() == 1 << at && (at += 1),
                                        Ct.add(Bt + Ht)),
                                    Bt = Ht)
                        }
                        return Gt.write(Ct.indexOf(Bt), at),
                            Gt.write(tt, at),
                            Gt.flush(),
                            Pt.toByteArray()
                    }
                    , Oe = function () {
                        var Ne = {}
                            , He = 0
                            , tt = {};
                        return tt.add = function (at) {
                            if (tt.contains(at))
                                throw "dup key:" + at;
                            Ne[at] = He,
                                He += 1
                        }
                            ,
                            tt.size = function () {
                                return He
                            }
                            ,
                            tt.indexOf = function (at) {
                                return Ne[at]
                            }
                            ,
                            tt.contains = function (at) {
                                return typeof Ne[at] < "u"
                            }
                            ,
                            tt
                    };
                return Se
            }
            , Ue = function (be, Be, xe) {
                for (var ye = ke(be, Be), de = 0; de < Be; de += 1)
                    for (var Se = 0; Se < be; Se += 1)
                        ye.setPixel(Se, de, xe(Se, de));
                var he = pe();
                ye.write(he);
                for (var ce = Ee(), Oe = he.toByteArray(), Ne = 0; Ne < Oe.length; Ne += 1)
                    ce.writeByte(Oe[Ne]);
                return ce.flush(),
                    "data:image/gif;base64," + ce
            };
        return U
    }();
    (function () {
        W.stringToBytesFuncs["UTF-8"] = function (U) {
            function V(K) {
                for (var Y = [], Z = 0; Z < K.length; Z++) {
                    var J = K.charCodeAt(Z);
                    J < 128 ? Y.push(J) : J < 2048 ? Y.push(192 | J >> 6, 128 | J & 63) : J < 55296 || J >= 57344 ? Y.push(224 | J >> 12, 128 | J >> 6 & 63, 128 | J & 63) : (Z++,
                        J = 65536 + ((J & 1023) << 10 | K.charCodeAt(Z) & 1023),
                        Y.push(240 | J >> 18, 128 | J >> 12 & 63, 128 | J >> 6 & 63, 128 | J & 63))
                }
                return Y
            }
            return V(U)
        }
    }
    )(),
        function (U) {
            R.exports = U()
        }(function () {
            return W
        })
}
)(qrcode$1);
const qrcode = qrcode$1.exports;
function copyToClipboard(R) {
    return __async(this, null, function* () {
        try {
            if (!(navigator != null && navigator.clipboard))
                throw new TonConnectUIError("Clipboard API not available");
            return yield navigator.clipboard.writeText(R)
        } catch { }
        fallbackCopyTextToClipboard(R)
    })
}
function fallbackCopyTextToClipboard(R) {
    const $ = document.createElement("textarea");
    $.value = R,
        $.style.top = "0",
        $.style.left = "0",
        $.style.position = "fixed",
        document.body.appendChild($),
        $.focus(),
        $.select();
    try {
        document.execCommand("copy")
    } finally {
        document.body.removeChild($)
    }
}
const _tmpl$$s = template$1("<div></div>")
    , QRCode = R => {
        let $, W, U;
        const [V, K] = createSignal(!1)
            , [Y, Z] = createSignal(picSizeDefault);
        createEffect(() => {
            const ie = qrcode(0, "L");
            ie.addData(R.sourceUrl),
                ie.make(),
                $.innerHTML = ie.createSvgTag(4, 0);
            const se = $.firstElementChild.clientWidth
                , le = Math.round(qrNormalSize / se * 1e5) / 1e5;
            if (U) {
                const ue = Math.ceil(imgSizeDefault / (le * 4)) * 4
                    , pe = toPx(Math.ceil((se - ue) / (2 * 4)) * 4);
                U.style.top = pe,
                    U.style.left = pe,
                    U.style.height = toPx(ue),
                    U.style.width = toPx(ue),
                    Z(Math.round(picSizeDefault / le))
            }
            W.style.transform = `scale(${le})`
        }
        );
        let J = null;
        return createComponent(QrCodeBackground, {
            get class() {
                return R.class
            },
            onClick: () => {
                K(!0),
                    copyToClipboard(R.sourceUrl),
                    J != null && clearTimeout(J),
                    J = setTimeout(() => K(!1), 1500)
            }
            ,
            get children() {
                return [createComponent(QrCodeWrapper$2, {
                    ref(re) {
                        const oe = W;
                        typeof oe == "function" ? oe(re) : W = re
                    },
                    get children() {
                        return [(() => {
                            const re = _tmpl$$s.cloneNode(!0)
                                , oe = $;
                            return typeof oe == "function" ? use(oe, re) : $ = re,
                                re
                        }
                        )(), createComponent(Show, {
                            get when() {
                                return R.imageUrl
                            },
                            get children() {
                                return createComponent(ImageBackground, {
                                    ref(re) {
                                        const oe = U;
                                        typeof oe == "function" ? oe(re) : U = re
                                    },
                                    get children() {
                                        return createComponent(ImageStyled$3, {
                                            get src() {
                                                return R.imageUrl
                                            },
                                            alt: "",
                                            get size() {
                                                return Y()
                                            }
                                        })
                                    }
                                })
                            }
                        })]
                    }
                }), createComponent(Transition, {
                    onBeforeEnter: re => {
                        animate(re, [{
                            opacity: 0,
                            transform: "translate(-50%, 44px)"
                        }, {
                            opacity: 1,
                            transform: "translate(-50%, 0)"
                        }], {
                            duration: 150,
                            easing: "ease-out"
                        })
                    }
                    ,
                    onExit: (re, oe) => {
                        animate(re, [{
                            opacity: 1,
                            transform: "translate(-50%, 0)"
                        }, {
                            opacity: 0,
                            transform: "translate(-50%, 44px)"
                        }], {
                            duration: 150,
                            easing: "ease-out"
                        }).finished.then(() => {
                            oe()
                        }
                        )
                    }
                    ,
                    get children() {
                        return createComponent(Show, {
                            get when() {
                                return V() && !R.disableCopy
                            },
                            get children() {
                                return createComponent(CopiedBoxStyled, {
                                    get children() {
                                        return [createComponent(SuccessIcon, {
                                            size: "xs"
                                        }), createComponent(Text, {
                                            translationKey: "common.linkCopied",
                                            children: "Link Copied"
                                        })]
                                    }
                                })
                            }
                        })
                    }
                }), createComponent(Show, {
                    get when() {
                        return !R.disableCopy
                    },
                    get children() {
                        return createComponent(CopyIconButton, {
                            get children() {
                                return createComponent(CopyLightIcon, {})
                            }
                        })
                    }
                })]
            }
        })
    }
    ;
var deepReadObject = (R, $, W) => {
    const U = $.trim().split(".").reduce((V, K) => V ? V[K] : void 0, R);
    return U !== void 0 ? U : W
}
    , template = (R, $, W = /{{(.*?)}}/g) => R.replace(W, (U, V) => deepReadObject($, V, ""))
    , createI18nContext = (R = {}, $ = navigator.language in R ? navigator.language : Object.keys(R)[0]) => {
        const [W, U] = createSignal($)
            , [V, K] = createStore(R);
        return [(J, X, re) => {
            const oe = deepReadObject(V[W()], J, re || "");
            return typeof oe == "function" ? oe(X) : typeof oe == "string" ? template(oe, X || {}) : oe
        }
            , {
            add(J, X) {
                K(J, re => Object.assign(re || {}, X))
            },
            locale: J => J ? U(J) : W(),
            dict: J => deepReadObject(V, J)
        }]
    }
    , I18nContext = createContext({})
    , useI18n = () => useContext(I18nContext);
const TextStyled$3 = styled.div`
    font-style: normal;
    font-weight: ${R => R.fontWeight};
    font-size: ${R => R.fontSize};
    line-height: ${R => R.lineHeight};

    color: ${R => R.color};
`
    , Text = R => {
        const $ = useTheme()
            , [W] = useI18n();
        let U;
        const V = () => R.color || $.colors.text.primary
            , K = mergeProps({
                fontSize: "14px",
                fontWeight: "510",
                lineHeight: "130%"
            }, R);
        return createEffect(() => {
            U && K.cursor !== "unset" && getComputedStyle(U).cursor !== "pointer" && (U.style.cursor = "default")
        }
        ),
            createComponent(TextStyled$3, {
                get fontSize() {
                    return K.fontSize
                },
                get fontWeight() {
                    return K.fontWeight
                },
                get lineHeight() {
                    return K.lineHeight
                },
                get color() {
                    return V()
                },
                get class() {
                    return K.class
                },
                ref(Y) {
                    const Z = U;
                    typeof Z == "function" ? Z(Y) : U = Y
                },
                "data-tc-text": "true",
                get children() {
                    var Y;
                    return createMemo(() => !!K.translationKey)() ? W(K.translationKey, K.translationValues, (Y = K.children) == null ? void 0 : Y.toString()) : K.children
                }
            })
    }
    , ImageContainer = styled.div`
    position: relative;

    &::after {
        content: '';
        display: block;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        border: 0.5px solid rgba(0, 0, 0, 0.08);

        border-radius: inherit;
    }
`
    , ImageStyled$2 = styled(Image)`
    width: 100%;
    height: 100%;
    border-radius: inherit;
`
    , WalletImage = R => createComponent(ImageContainer, {
        get class() {
            return R.class
        },
        get children() {
            return createComponent(ImageStyled$2, {
                get src() {
                    return R.src
                }
            })
        }
    })
    , borders$3 = {
        m: "16px",
        s: "12px",
        none: "0"
    }
    , badgeBorders = {
        m: "6px",
        s: "6px",
        none: "0"
    }
    , WalletItemStyled = styled.button`
    position: relative;
    cursor: pointer;
    border: none;
    background-color: unset;
    padding: 8px 4px;
    width: 92px;
    display: flex;
    flex-direction: column;
    align-items: center;

    transition: transform 0.125s ease-in-out;

    ${mediaNotTouch} {
        &:hover {
            transform: scale(1.04);
        }
    }

    &:active {
        transform: scale(0.96);
    }

    ${media("mobile")} {
        padding: 8px 4px;
        width: 82px;
    }

    ${mediaTouch} {
        &:active {
            transform: scale(0.92);
        }
    }
`
    , ImageStyled$1 = styled(WalletImage)`
    width: 60px;
    height: 60px;
    border-radius: ${R => borders$3[R.theme.borderRadius]};

    margin-bottom: 8px;
`
    , BadgeStyled = styled(Image)`
    position: absolute;
    right: 10px;
    top: 50px;
    width: 24px;
    height: 24px;
    border-radius: ${R => badgeBorders[R.theme.borderRadius]};
    box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.08);
`
    , StyledText = styled(Text)`
    max-width: 90px;
    font-weight: 590;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;

    ${media("mobile")} {
        max-width: 80px;
    }
`
    , StyledSecondLine = styled(Text)`
    font-weight: 510;
    max-width: 90px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    color: ${R => R.colorPrimary ? R.theme.colors.text.primary : R.theme.colors.text.secondary};

    ${media("mobile")} {
        max-width: 80px;
    }
`
    , WalletItem = R => createComponent(WalletItemStyled, {
        get class() {
            return R.class
        },
        onClick: () => R.onClick(),
        "data-tc-wallet-item": "true",
        get children() {
            return [createMemo(() => createMemo(() => typeof R.icon == "string")() ? createComponent(ImageStyled$1, {
                get src() {
                    return R.icon
                }
            }) : R.icon), createMemo(() => createMemo(() => !!R.badgeUrl)() && createComponent(BadgeStyled, {
                get src() {
                    return R.badgeUrl
                }
            })), createComponent(StyledText, {
                get children() {
                    return R.name
                }
            }), createMemo(() => createMemo(() => !!R.secondLine)() && createComponent(StyledSecondLine, {
                get colorPrimary() {
                    var $;
                    return ($ = R.secondLineColorPrimary) != null ? $ : !0
                },
                get children() {
                    return R.secondLine
                }
            }))]
        }
    })
    , H1Styled$9 = styled.h1`
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 28px;

    text-align: center;

    color: ${R => R.theme.colors.text.primary};

    margin-top: 0;
    margin-bottom: 0;

    cursor: default;
`
    , H1 = R => {
        const [$] = useI18n();
        return createComponent(H1Styled$9, {
            get class() {
                return R.class
            },
            "data-tc-h1": "true",
            get children() {
                var W;
                return createMemo(() => !!R.translationKey)() ? $(R.translationKey, R.translationValues, (W = R.children) == null ? void 0 : W.toString()) : R.children
            }
        })
    }
    , H2Styled$5 = styled.h2`
    font-style: normal;
    font-weight: 510;
    font-size: 16px;
    line-height: 22px;

    text-align: center;

    color: ${R => R.theme.colors.text.secondary};

    margin-top: 0;
    margin-bottom: 32px;

    cursor: default;
`
    , H2 = R => {
        const [$] = useI18n();
        return createComponent(H2Styled$5, {
            get class() {
                return R.class
            },
            "data-tc-h2": "true",
            get children() {
                var W;
                return createMemo(() => !!R.translationKey)() ? $(R.translationKey, R.translationValues, (W = R.children) == null ? void 0 : W.toString()) : R.children
            }
        })
    }
    , H3Styled$1 = styled.h3`
    font-style: normal;
    font-weight: 590;
    font-size: 16px;
    line-height: 20px;

    color: ${R => R.theme.colors.text.primary};

    margin-top: 0;
    margin-bottom: 0;

    cursor: default;
`
    , H3 = R => {
        const [$] = useI18n();
        return createComponent(H3Styled$1, {
            "data-tc-h3": "true",
            get class() {
                return R.class
            },
            get children() {
                var W;
                return createMemo(() => !!R.translationKey)() ? $(R.translationKey, R.translationValues, (W = R.children) == null ? void 0 : W.toString()) : R.children
            }
        })
    }
    , _tmpl$$r = template$1('<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.75 7.5C9.33579 7.5 9 7.16421 9 6.75C9 6.33579 9.33579 6 9.75 6H21.25C21.6642 6 22 6.33579 22 6.75V18.25C22 18.6642 21.6642 19 21.25 19C20.8358 19 20.5 18.6642 20.5 18.25V8.56066L6.28033 22.7803C5.98744 23.0732 5.51256 23.0732 5.21967 22.7803C4.92678 22.4874 4.92678 22.0126 5.21967 21.7197L19.4393 7.5H9.75Z"></path></svg>')
    , LongArrowIcon = R => {
        const $ = useTheme()
            , W = () => R.fill || $.colors.icon.secondary;
        return (() => {
            const U = _tmpl$$r.cloneNode(!0)
                , V = U.firstChild;
            return createRenderEffect(K => {
                const Y = W()
                    , Z = W();
                return Y !== K._v$ && setAttribute(U, "fill", K._v$ = Y),
                    Z !== K._v$2 && setAttribute(V, "fill", K._v$2 = Z),
                    K
            }
                , {
                    _v$: void 0,
                    _v$2: void 0
                }),
                U
        }
        )()
    }
    , _tmpl$$q = template$1('<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M14.1839 17.7069C13.6405 18.6507 13.3688 19.1226 13.0591 19.348C12.4278 19.8074 11.5723 19.8074 10.941 19.348C10.6312 19.1226 10.3595 18.6507 9.81613 17.7069L5.52066 10.2464C4.76864 8.94024 4.39263 8.28717 4.33762 7.75894C4.2255 6.68236 4.81894 5.65591 5.80788 5.21589C6.29309 5 7.04667 5 8.55383 5H15.4462C16.9534 5 17.7069 5 18.1922 5.21589C19.1811 5.65591 19.7745 6.68236 19.6624 7.75894C19.6074 8.28717 19.2314 8.94024 18.4794 10.2464L14.1839 17.7069ZM11.1 16.3412L6.56139 8.48002C6.31995 8.06185 6.19924 7.85276 6.18146 7.68365C6.14523 7.33896 6.33507 7.01015 6.65169 6.86919C6.80703 6.80002 7.04847 6.80002 7.53133 6.80002H7.53134L11.1 6.80002V16.3412ZM12.9 16.3412L17.4387 8.48002C17.6801 8.06185 17.8008 7.85276 17.8186 7.68365C17.8548 7.33896 17.665 7.01015 17.3484 6.86919C17.193 6.80002 16.9516 6.80002 16.4687 6.80002L12.9 6.80002V16.3412Z"></path></svg>')
    , TonIcon = R => {
        const $ = useTheme()
            , W = () => R.fill || $.colors.icon.primary;
        return (() => {
            const U = _tmpl$$q.cloneNode(!0)
                , V = U.firstChild;
            return createRenderEffect(() => setAttribute(V, "fill", W())),
                U
        }
        )()
    }
    , _tmpl$$p = template$1('<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><g clip-path="url(#clip0_3783_2045)"><circle cx="8" cy="8.00098" r="8"></circle><path d="M4.75 8.50098L7 10.751L11.75 6.00098" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></g><defs><clipPath id="clip0_3783_2045"><rect width="16" height="16" fill="white" transform="translate(0 0.000976562)"></rect></clipPath></defs></svg>')
    , _tmpl$2$3 = template$1('<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="11"></circle><path d="M17.1364 9.6364C17.4879 9.28493 17.4879 8.71508 17.1364 8.36361C16.7849 8.01214 16.2151 8.01214 15.8636 8.36361L10 14.2272L8.1364 12.3636C7.78493 12.0121 7.21508 12.0121 6.86361 12.3636C6.51214 12.7151 6.51214 13.2849 6.86361 13.6364L9.36361 16.1364C9.71508 16.4879 10.2849 16.4879 10.6364 16.1364L17.1364 9.6364Z"></path></svg>')
    , _tmpl$3$2 = template$1('<svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="36" cy="36" r="33"></circle><path d="M50.9142 28.4142C51.6953 27.6332 51.6953 26.3668 50.9142 25.5858C50.1332 24.8047 48.8668 24.8047 48.0858 25.5858L30 43.6716L23.9142 37.5858C23.1332 36.8047 21.8668 36.8047 21.0858 37.5858C20.3047 38.3668 20.3047 39.6332 21.0858 40.4142L28.5858 47.9142C29.3668 48.6953 30.6332 48.6953 31.4142 47.9142L50.9142 28.4142Z"></path></svg>')
    , SuccessIcon = R => {
        const $ = useTheme()
            , W = () => R.size || "s"
            , U = () => R.fill || $.colors.icon.success;
        return createMemo((() => {
            const V = createMemo(() => W() === "xs");
            return () => V() ? (() => {
                const K = _tmpl$$p.cloneNode(!0)
                    , Y = K.firstChild
                    , Z = Y.firstChild
                    , J = Z.nextSibling;
                return createRenderEffect(X => {
                    const re = R.class
                        , oe = U()
                        , ie = $.colors.constant.white;
                    return re !== X._v$ && setAttribute(K, "class", X._v$ = re),
                        oe !== X._v$2 && setAttribute(Z, "fill", X._v$2 = oe),
                        ie !== X._v$3 && setAttribute(J, "stroke", X._v$3 = ie),
                        X
                }
                    , {
                        _v$: void 0,
                        _v$2: void 0,
                        _v$3: void 0
                    }),
                    K
            }
            )() : (() => {
                const K = createMemo(() => W() === "s");
                return () => K() ? (() => {
                    const Y = _tmpl$2$3.cloneNode(!0)
                        , Z = Y.firstChild
                        , J = Z.nextSibling;
                    return createRenderEffect(X => {
                        const re = R.class
                            , oe = U()
                            , ie = $.colors.constant.white;
                        return re !== X._v$4 && setAttribute(Y, "class", X._v$4 = re),
                            oe !== X._v$5 && setAttribute(Z, "fill", X._v$5 = oe),
                            ie !== X._v$6 && setAttribute(J, "fill", X._v$6 = ie),
                            X
                    }
                        , {
                            _v$4: void 0,
                            _v$5: void 0,
                            _v$6: void 0
                        }),
                        Y
                }
                )() : (() => {
                    const Y = _tmpl$3$2.cloneNode(!0)
                        , Z = Y.firstChild
                        , J = Z.nextSibling;
                    return createRenderEffect(X => {
                        const re = R.class
                            , oe = U()
                            , ie = $.colors.constant.white;
                        return re !== X._v$7 && setAttribute(Y, "class", X._v$7 = re),
                            oe !== X._v$8 && setAttribute(Z, "fill", X._v$8 = oe),
                            ie !== X._v$9 && setAttribute(J, "fill", X._v$9 = ie),
                            X
                    }
                        , {
                            _v$7: void 0,
                            _v$8: void 0,
                            _v$9: void 0
                        }),
                        Y
                }
                )()
            }
            )()
        }
        )())
    }
    , _tmpl$$o = template$1('<svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="36" cy="36" r="33"></circle><path d="M24.0858 26.9142C23.3047 26.1332 23.3047 24.8668 24.0858 24.0858C24.8668 23.3047 26.1332 23.3047 26.9142 24.0858L36 33.1716L45.0858 24.0858C45.8668 23.3047 47.1332 23.3047 47.9142 24.0858C48.6953 24.8668 48.6953 26.1332 47.9142 26.9142L38.8284 36L47.9142 45.0858C48.6953 45.8668 48.6953 47.1332 47.9142 47.9142C47.1332 48.6953 45.8668 48.6953 45.0858 47.9142L36 38.8284L26.9142 47.9142C26.1332 48.6953 24.8668 48.6953 24.0858 47.9142C23.3047 47.1332 23.3047 45.8668 24.0858 45.0858L33.1716 36L24.0858 26.9142Z"></path></svg>')
    , _tmpl$2$2 = template$1('<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none"><circle cx="24" cy="24.001" r="22"></circle><path d="M24 24.001L31.5 16.501M24 24.001L16.5 16.501M24 24.001L16.5 31.501M24 24.001L31.5 31.501" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path></svg>')
    , _tmpl$3$1 = template$1('<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="11"></circle><path d="M7.86361 9.1364C7.51214 8.78493 7.51214 8.21508 7.86361 7.86361C8.21508 7.51214 8.78493 7.51214 9.1364 7.86361L12 10.7272L14.8636 7.86361C15.2151 7.51214 15.7849 7.51214 16.1364 7.86361C16.4879 8.21508 16.4879 8.78493 16.1364 9.1364L13.2728 12L16.1364 14.8636C16.4879 15.2151 16.4879 15.7849 16.1364 16.1364C15.7849 16.4879 15.2151 16.4879 14.8636 16.1364L12 13.2728L9.1364 16.1364C8.78493 16.4879 8.21508 16.4879 7.86361 16.1364C7.51214 15.7849 7.51214 15.2151 7.86361 14.8636L10.7272 12L7.86361 9.1364Z"></path></svg>')
    , ErrorIcon = R => {
        const $ = useTheme()
            , W = () => R.size || "m"
            , U = () => R.fill || $.colors.icon.error;
        return createMemo((() => {
            const V = createMemo(() => W() === "m");
            return () => V() ? (() => {
                const K = _tmpl$$o.cloneNode(!0)
                    , Y = K.firstChild
                    , Z = Y.nextSibling;
                return createRenderEffect(J => {
                    const X = R.class
                        , re = U()
                        , oe = $.colors.constant.white;
                    return X !== J._v$ && setAttribute(K, "class", J._v$ = X),
                        re !== J._v$2 && setAttribute(Y, "fill", J._v$2 = re),
                        oe !== J._v$3 && setAttribute(Z, "fill", J._v$3 = oe),
                        J
                }
                    , {
                        _v$: void 0,
                        _v$2: void 0,
                        _v$3: void 0
                    }),
                    K
            }
            )() : (() => {
                const K = createMemo(() => W() === "s");
                return () => K() ? (() => {
                    const Y = _tmpl$2$2.cloneNode(!0)
                        , Z = Y.firstChild
                        , J = Z.nextSibling;
                    return createRenderEffect(X => {
                        const re = R.class
                            , oe = U()
                            , ie = $.colors.constant.white;
                        return re !== X._v$4 && setAttribute(Y, "class", X._v$4 = re),
                            oe !== X._v$5 && setAttribute(Z, "fill", X._v$5 = oe),
                            ie !== X._v$6 && setAttribute(J, "stroke", X._v$6 = ie),
                            X
                    }
                        , {
                            _v$4: void 0,
                            _v$5: void 0,
                            _v$6: void 0
                        }),
                        Y
                }
                )() : (() => {
                    const Y = _tmpl$3$1.cloneNode(!0)
                        , Z = Y.firstChild
                        , J = Z.nextSibling;
                    return createRenderEffect(X => {
                        const re = R.class
                            , oe = U()
                            , ie = $.colors.constant.white;
                        return re !== X._v$7 && setAttribute(Y, "class", X._v$7 = re),
                            oe !== X._v$8 && setAttribute(Z, "fill", X._v$8 = oe),
                            ie !== X._v$9 && setAttribute(J, "fill", X._v$9 = ie),
                            X
                    }
                        , {
                            _v$7: void 0,
                            _v$8: void 0,
                            _v$9: void 0
                        }),
                        Y
                }
                )()
            }
            )()
        }
        )())
    }
    , _tmpl$$n = template$1('<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.55 5.85123C18.9459 7.81184 20.1094 12.1541 18.1488 15.55C16.1882 18.9459 11.8459 20.1094 8.44998 18.1488C8.01952 17.9003 7.46909 18.0478 7.22056 18.4782C6.97203 18.9087 7.11952 19.4591 7.54998 19.7076C11.8068 22.1653 17.2499 20.7068 19.7076 16.45C22.1653 12.1932 20.7068 6.75005 16.45 4.29239C12.1932 1.83472 6.75003 3.29321 4.29236 7.55001C4.04383 7.98047 4.19132 8.53091 4.62178 8.77943C5.05224 9.02796 5.60268 8.88048 5.8512 8.45001C7.81181 5.05413 12.1541 3.89062 15.55 5.85123Z"></path></svg>')
    , _tmpl$2$1 = template$1('<svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M22 2.99951C11.5066 2.99951 3 11.5061 3 21.9995C3 32.4929 11.5066 40.9995 22 40.9995C22.8284 40.9995 23.5 41.6711 23.5 42.4995C23.5 43.3279 22.8284 43.9995 22 43.9995C9.84974 43.9995 0 34.1498 0 21.9995C0 9.84925 9.84974 -0.000488281 22 -0.000488281C34.1503 -0.000488281 44 9.84925 44 21.9995C44 22.8279 43.3284 23.4995 42.5 23.4995C41.6716 23.4995 41 22.8279 41 21.9995C41 11.5061 32.4934 2.99951 22 2.99951Z"></path></svg>')
    , _tmpl$3 = template$1('<svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M24 56.7846C35.479 63.412 50.1572 59.479 56.7846 47.9999C63.412 36.5209 59.479 21.8427 48 15.2153C36.521 8.58791 21.8428 12.5209 15.2154 23.9999" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path></svg>')
    , LoaderIcon = R => {
        const $ = useTheme()
            , W = () => R.size || "xs"
            , U = () => R.fill || $.colors.icon.tertiary
            , V = h`
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
    `
            , K = u$1`
        animation: ${V} 1s linear infinite;
    `;
        return createMemo((() => {
            const Y = createMemo(() => W() === "xs");
            return () => Y() ? (() => {
                const Z = _tmpl$$n.cloneNode(!0)
                    , J = Z.firstChild;
                return createRenderEffect(X => {
                    const re = cn(K, R.class)
                        , oe = U();
                    return re !== X._v$ && setAttribute(Z, "class", X._v$ = re),
                        oe !== X._v$2 && setAttribute(J, "fill", X._v$2 = oe),
                        X
                }
                    , {
                        _v$: void 0,
                        _v$2: void 0
                    }),
                    Z
            }
            )() : (() => {
                const Z = createMemo(() => W() === "s");
                return () => Z() ? (() => {
                    const J = _tmpl$2$1.cloneNode(!0)
                        , X = J.firstChild;
                    return createRenderEffect(re => {
                        const oe = cn(K, R.class)
                            , ie = U();
                        return oe !== re._v$3 && setAttribute(J, "class", re._v$3 = oe),
                            ie !== re._v$4 && setAttribute(X, "fill", re._v$4 = ie),
                            re
                    }
                        , {
                            _v$3: void 0,
                            _v$4: void 0
                        }),
                        J
                }
                )() : (() => {
                    const J = _tmpl$3.cloneNode(!0)
                        , X = J.firstChild;
                    return createRenderEffect(re => {
                        const oe = cn(K, R.class)
                            , ie = U();
                        return oe !== re._v$5 && setAttribute(J, "class", re._v$5 = oe),
                            ie !== re._v$6 && setAttribute(X, "stroke", re._v$6 = ie),
                            re
                    }
                        , {
                            _v$5: void 0,
                            _v$6: void 0
                        }),
                        J
                }
                )()
            }
            )()
        }
        )())
    }
    , _tmpl$$m = template$1('<svg width="158" height="28" viewBox="0 0 158 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M28 14.001C28 21.733 21.732 28.001 14 28.001C6.26801 28.001 0 21.733 0 14.001C0 6.26899 6.26801 0.000976562 14 0.000976562C21.732 0.000976562 28 6.26899 28 14.001ZM9.21931 8.00098H18.7801H18.7813C20.538 8.00098 21.6522 9.89966 20.7691 11.4302L14.8672 21.6576C14.4822 22.3254 13.5172 22.3254 13.1322 21.6576L7.23158 11.4302C6.34721 9.89726 7.4614 8.00098 9.21931 8.00098ZM13.1262 18.5882V9.74806H9.21811C8.78976 9.74806 8.53708 10.2029 8.74163 10.5578L11.8423 16.1035L13.1262 18.5882ZM16.1559 16.1047L19.2554 10.5566C19.4599 10.2017 19.2073 9.74685 18.7789 9.74685H14.8709V18.5906L16.1559 16.1047Z" fill="#0098EA"></path><path d="M18.7802 8.00098H9.21936C7.46145 8.00098 6.34727 9.89726 7.23164 11.4302L13.1322 21.6576C13.5173 22.3254 14.4823 22.3254 14.8673 21.6576L20.7691 11.4302C21.6523 9.89966 20.5381 8.00098 18.7814 8.00098H18.7802ZM13.1274 18.5906L11.8424 16.1035L8.74168 10.5578C8.53714 10.2029 8.78981 9.74806 9.21816 9.74806H13.1262V18.5918L13.1274 18.5906ZM19.2555 10.5566L16.156 16.1047L14.8709 18.5906V9.74685H18.779C19.2073 9.74685 19.46 10.2017 19.2555 10.5566Z" fill="white"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M51.7483 22.1967C55.7182 22.1967 58.9609 18.954 58.9609 14.9841C58.9609 11.0142 55.7182 7.77148 51.7483 7.77148C47.7588 7.77148 44.5357 11.0142 44.5357 14.9841C44.5357 18.954 47.7588 22.1967 51.7483 22.1967ZM51.7483 19.1702C49.4686 19.1702 47.6802 17.2442 47.6802 14.9841C47.6802 12.724 49.4686 10.798 51.7483 10.798C54.0084 10.798 55.7968 12.724 55.7968 14.9841C55.7968 17.2442 54.0084 19.1702 51.7483 19.1702ZM37.0698 21.9609H40.2142V10.9946H44.2843V8.00732H33V10.9946H37.0698V21.9609ZM69.9379 8.00732H73.0823V21.9609H70.3899L63.59 13.3333V21.9609H60.4652V8.00732H63.1576L69.9379 16.6153V8.00732ZM79.2259 14.9887C79.2259 10.9202 82.351 7.77539 86.4982 7.77539C89.8592 7.77539 92.5519 9.95709 93.2202 12.6891H90.7437C90.154 11.0971 88.4637 9.9964 86.4982 9.9964C83.5893 9.9964 81.5452 12.1781 81.5452 14.9887C81.5452 17.7994 83.5893 19.9811 86.4982 19.9811C88.4637 19.9811 90.154 18.8804 90.7437 17.2884H93.2202C92.5519 20.0204 89.8592 22.2021 86.4982 22.2021C82.351 22.2021 79.2259 19.0573 79.2259 14.9887ZM104.584 17.0525C104.584 19.9025 102.343 22.1628 99.4342 22.1628C96.5253 22.1628 94.2846 19.9025 94.2846 17.0525C94.2846 14.2025 96.5253 11.9422 99.4342 11.9422C102.343 11.9422 104.584 14.2025 104.584 17.0525ZM96.4663 17.0525C96.4663 18.8018 97.6849 20.158 99.4342 20.158C101.164 20.158 102.382 18.8018 102.382 17.0525C102.382 15.3032 101.164 13.947 99.4342 13.947C97.6849 13.947 96.4663 15.3032 96.4663 17.0525ZM108.626 12.1388H106.463V21.9662H108.626V17.1311C108.626 15.0281 109.726 13.9077 111.161 13.9077C112.419 13.9077 113.205 14.8512 113.205 16.4039V21.9662H115.367V16.0501C115.367 13.5539 113.893 11.9422 111.613 11.9422C110.335 11.9422 109.215 12.4926 108.626 13.4753V12.1388ZM117.839 12.1388H120.001V13.4753C120.59 12.4926 121.711 11.9422 122.988 11.9422C125.268 11.9422 126.742 13.5539 126.742 16.0501V21.9662H124.58V16.4039C124.58 14.8512 123.794 13.9077 122.536 13.9077C121.101 13.9077 120.001 15.0281 120.001 17.1311V21.9662H117.839V12.1388ZM133.558 22.1628C136.054 22.1628 137.823 20.728 138.373 18.8804H136.113C135.661 19.8238 134.717 20.2563 133.636 20.2563C131.887 20.2563 130.747 19.077 130.668 17.5832H138.491C138.688 14.2419 136.585 11.9422 133.577 11.9422C130.551 11.9422 128.526 14.1436 128.526 17.0525C128.526 20.0007 130.629 22.1628 133.558 22.1628ZM130.747 16.0501C131.042 14.5367 132.162 13.7505 133.518 13.7505C134.717 13.7505 135.838 14.4581 136.172 16.0501H130.747ZM149.851 18.3694C149.32 20.5511 147.453 22.1628 144.859 22.1628C141.871 22.1628 139.709 19.8828 139.709 17.0525C139.709 14.2222 141.871 11.9422 144.859 11.9422C147.453 11.9422 149.32 13.5539 149.851 15.7356H147.571C147.178 14.6743 146.215 13.9077 144.859 13.9077C143.109 13.9077 141.91 15.2246 141.91 17.0525C141.91 18.8804 143.109 20.1973 144.859 20.1973C146.215 20.1973 147.178 19.4307 147.571 18.3694H149.851ZM155.75 22.0645C156.418 22.0645 156.929 21.9859 157.362 21.8483V19.9221C157.047 20.0401 156.615 20.1187 156.202 20.1187C155.082 20.1187 154.551 19.6666 154.551 18.448V14.065H157.362V12.1388H154.551V9.40675H152.389V12.1388H150.345V14.065H152.389V18.8018C152.389 21.0228 153.863 22.0645 155.75 22.0645Z"></path></svg>')
    , TonConnectBrand = () => {
        const R = useTheme()
            , $ = () => R.theme === THEME.DARK ? R.colors.constant.white : R.colors.constant.black;
        return (() => {
            const W = _tmpl$$m.cloneNode(!0)
                , U = W.firstChild
                , V = U.nextSibling
                , K = V.nextSibling;
            return createRenderEffect(() => setAttribute(K, "fill", $())),
                W
        }
        )()
    }
    , _tmpl$$l = template$1('<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M5.56608 4.42584C5.82527 3.32158 6.8176 2.5 8.00001 2.5C9.38072 2.5 10.5 3.61929 10.5 5C10.5 5.63026 10.3391 6.0386 10.1264 6.34455C9.90018 6.66993 9.58561 6.92478 9.18864 7.20877C9.12579 7.25372 9.05873 7.30025 8.9887 7.34883C8.27392 7.84472 7.25001 8.55507 7.25001 10V10.25C7.25001 10.6642 7.5858 11 8.00001 11C8.41422 11 8.75001 10.6642 8.75001 10.25V10C8.75001 9.36502 9.10777 9.1096 9.94554 8.51149L10.0614 8.42873C10.4769 8.13147 10.9748 7.75194 11.358 7.20076C11.7547 6.63015 12 5.91973 12 5C12 2.79086 10.2091 1 8.00001 1C6.10564 1 4.5205 2.31615 4.10577 4.08308C4.01112 4.48634 4.26129 4.88997 4.66454 4.98462C5.0678 5.07927 5.47143 4.8291 5.56608 4.42584ZM8.00001 15C8.60752 15 9.10001 14.5075 9.10001 13.9C9.10001 13.2925 8.60752 12.8 8.00001 12.8C7.39249 12.8 6.90001 13.2925 6.90001 13.9C6.90001 14.5075 7.39249 15 8.00001 15Z"></path></svg>')
    , QuestionIcon = R => {
        const $ = useTheme()
            , W = () => R.fill || $.colors.icon.secondary;
        return (() => {
            const U = _tmpl$$l.cloneNode(!0)
                , V = U.firstChild;
            return createRenderEffect(() => setAttribute(V, "fill", W())),
                U
        }
        )()
    }
    , _tmpl$$k = template$1('<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.98156 8.75C9.84854 11.4328 9.01206 13.5 8 13.5C6.98794 13.5 6.15146 11.4328 6.01844 8.75H9.98156ZM11.4832 8.75C11.4217 10.1155 11.1929 11.3869 10.8239 12.4017C10.7734 12.5405 10.7188 12.6789 10.6595 12.8154C12.1454 11.993 13.2103 10.5029 13.4493 8.75H11.4832ZM13.4493 7.25H11.4832C11.4217 5.88453 11.1929 4.61314 10.8239 3.5983C10.7734 3.4595 10.7188 3.32111 10.6595 3.18459C12.1454 4.00697 13.2103 5.49709 13.4493 7.25ZM9.98156 7.25H6.01844C6.15144 4.56764 6.98769 2.50062 7.99955 2.5H8C9.01206 2.5 9.84854 4.56724 9.98156 7.25ZM4.51678 7.25C4.57826 5.88453 4.80706 4.61314 5.1761 3.5983C5.22657 3.4595 5.28124 3.32111 5.3405 3.18459C3.85463 4.00697 2.78972 5.49709 2.55071 7.25H4.51678ZM2.55071 8.75C2.78972 10.5029 3.85463 11.993 5.3405 12.8154C5.28124 12.6789 5.22657 12.5405 5.1761 12.4017C4.80706 11.3869 4.57826 10.1155 4.51678 8.75H2.55071ZM15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1C11.866 1 15 4.13401 15 8Z"></path></svg>')
    , BrowserIcon = R => {
        const $ = useTheme()
            , W = () => R.fill || $.colors.icon.primary;
        return (() => {
            const U = _tmpl$$k.cloneNode(!0)
                , V = U.firstChild;
            return createRenderEffect(() => setAttribute(V, "fill", W())),
                U
        }
        )()
    }
    , _tmpl$$j = template$1('<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.5 4.8C2.5 3.11984 2.5 2.27976 2.82698 1.63803C3.1146 1.07354 3.57354 0.614601 4.13803 0.32698C4.77976 0 5.61984 0 7.3 0H8.7C10.3802 0 11.2202 0 11.862 0.32698C12.4265 0.614601 12.8854 1.07354 13.173 1.63803C13.5 2.27976 13.5 3.11984 13.5 4.8V11.2C13.5 12.8802 13.5 13.7202 13.173 14.362C12.8854 14.9265 12.4265 15.3854 11.862 15.673C11.2202 16 10.3802 16 8.7 16H7.3C5.61984 16 4.77976 16 4.13803 15.673C3.57354 15.3854 3.1146 14.9265 2.82698 14.362C2.5 13.7202 2.5 12.8802 2.5 11.2V4.8ZM4 3.9C4 3.05992 4 2.63988 4.16349 2.31901C4.3073 2.03677 4.53677 1.8073 4.81901 1.66349C5.13988 1.5 5.55992 1.5 6.4 1.5H9.6C10.4401 1.5 10.8601 1.5 11.181 1.66349C11.4632 1.8073 11.6927 2.03677 11.8365 2.31901C12 2.63988 12 3.05992 12 3.9V12.1C12 12.9401 12 13.3601 11.8365 13.681C11.6927 13.9632 11.4632 14.1927 11.181 14.3365C10.8601 14.5 10.4401 14.5 9.6 14.5H6.4C5.55992 14.5 5.13988 14.5 4.81901 14.3365C4.53677 14.1927 4.3073 13.9632 4.16349 13.681C4 13.3601 4 12.9401 4 12.1V3.9ZM7 2.5C6.58579 2.5 6.25 2.83579 6.25 3.25C6.25 3.66421 6.58579 4 7 4H9C9.41421 4 9.75 3.66421 9.75 3.25C9.75 2.83579 9.41421 2.5 9 2.5H7Z"></path></svg>')
    , MobileIcon = R => {
        const $ = useTheme()
            , W = () => R.fill || $.colors.icon.primary;
        return (() => {
            const U = _tmpl$$j.cloneNode(!0)
                , V = U.firstChild;
            return createRenderEffect(() => setAttribute(V, "fill", W())),
                U
        }
        )()
    }
    , _tmpl$$i = template$1('<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.5 6.8C1.5 5.11984 1.5 4.27976 1.82698 3.63803C2.1146 3.07354 2.57354 2.6146 3.13803 2.32698C3.77976 2 4.61984 2 6.3 2H9.7C11.3802 2 12.2202 2 12.862 2.32698C13.4265 2.6146 13.8854 3.07354 14.173 3.63803C14.5 4.27976 14.5 5.11984 14.5 6.8V11.5H15.25C15.6642 11.5 16 11.8358 16 12.25C16 12.6642 15.6642 13 15.25 13H0.75C0.335786 13 0 12.6642 0 12.25C0 11.8358 0.335786 11.5 0.75 11.5H1.5V6.8ZM3 11.5H13V5.9C13 5.05992 13 4.63988 12.8365 4.31901C12.6927 4.03677 12.4632 3.8073 12.181 3.66349C11.8601 3.5 11.4401 3.5 10.6 3.5H5.4C4.55992 3.5 4.13988 3.5 3.81901 3.66349C3.53677 3.8073 3.3073 4.03677 3.16349 4.31901C3 4.63988 3 5.05992 3 5.9V11.5Z"></path></svg>')
    , DesktopIcon = R => {
        const $ = useTheme()
            , W = () => R.fill || $.colors.icon.primary;
        return (() => {
            const U = _tmpl$$i.cloneNode(!0)
                , V = U.firstChild;
            return createRenderEffect(() => setAttribute(V, "fill", W())),
                U
        }
        )()
    }
    , _tmpl$$h = template$1('<svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none"><g clip-path="url(#clip0_3676_1603)"><path fill-rule="evenodd" clip-rule="evenodd" d="M15.5 1.25049C15.5 0.836275 15.1642 0.500488 14.75 0.500488C14.3358 0.500488 14 0.836275 14 1.25049V3.67012C12.7187 2.04487 10.7318 1.00049 8.5 1.00049C4.63401 1.00049 1.5 4.1345 1.5 8.00049C1.5 11.8665 4.63401 15.0005 8.5 15.0005C11.6844 15.0005 14.3703 12.8748 15.2199 9.96661C15.3361 9.56902 15.1079 9.15254 14.7103 9.03638C14.3127 8.92023 13.8962 9.14838 13.7801 9.54597C13.1123 11.8319 11 13.5005 8.5 13.5005C5.46243 13.5005 3 11.0381 3 8.00049C3 4.96292 5.46243 2.50049 8.5 2.50049C10.321 2.50049 11.9363 3.3855 12.9377 4.75049H10.5C10.0858 4.75049 9.75 5.08627 9.75 5.50049C9.75 5.9147 10.0858 6.25049 10.5 6.25049H14.75C15.1642 6.25049 15.5 5.9147 15.5 5.50049V1.25049Z"></path></g><defs><clipPath id="clip0_3676_1603"><rect width="16" height="16" fill="white" transform="translate(0.5 0.000488281)"></rect></clipPath></defs></svg>')
    , RetryIcon = R => {
        const $ = useTheme()
            , W = () => R.fill || $.colors.accent;
        return (() => {
            const U = _tmpl$$h.cloneNode(!0)
                , V = U.firstChild
                , K = V.firstChild;
            return createRenderEffect(() => setAttribute(K, "fill", W())),
                U
        }
        )()
    }
    , _tmpl$$g = template$1('<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M13 4.06119V6.75053C13 7.16474 13.3358 7.50053 13.75 7.50053C14.1642 7.50053 14.5 7.16474 14.5 6.75053V2.75053L14.5 2.72807C14.5001 2.63191 14.5003 2.49627 14.4842 2.37627C14.4638 2.22503 14.4063 1.99261 14.2071 1.79342C14.0079 1.59423 13.7755 1.5367 13.6243 1.51637C13.5043 1.50023 13.3686 1.50039 13.2725 1.50051L13.25 1.50053H9.25C8.83579 1.50053 8.5 1.83631 8.5 2.25053C8.5 2.66474 8.83579 3.00053 9.25 3.00053H11.9393L7.21967 7.7202C6.92678 8.01309 6.92678 8.48796 7.21967 8.78086C7.51256 9.07375 7.98744 9.07375 8.28033 8.78086L13 4.06119ZM5.85 1.50053H5.81903H5.81899C5.21528 1.50052 4.71702 1.50051 4.31113 1.53367C3.88956 1.56812 3.50203 1.64204 3.13803 1.82751C2.57354 2.11513 2.1146 2.57407 1.82698 3.13856C1.64151 3.50256 1.56759 3.89009 1.53315 4.31166C1.49998 4.71755 1.49999 5.21581 1.5 5.81953V5.81955V5.85053V10.1505V10.1815V10.1815C1.49999 10.7852 1.49998 11.2835 1.53315 11.6894C1.56759 12.111 1.64151 12.4985 1.82698 12.8625C2.1146 13.427 2.57354 13.8859 3.13803 14.1735C3.50203 14.359 3.88956 14.4329 4.31113 14.4674C4.71702 14.5005 5.21527 14.5005 5.81897 14.5005H5.81901H5.85H10.15H10.181H10.181C10.7847 14.5005 11.283 14.5005 11.6889 14.4674C12.1104 14.4329 12.498 14.359 12.862 14.1735C13.4265 13.8859 13.8854 13.427 14.173 12.8625C14.3585 12.4985 14.4324 12.111 14.4669 11.6894C14.5 11.2835 14.5 10.7853 14.5 10.1816V10.1815V10.1505V9.75053C14.5 9.33631 14.1642 9.00053 13.75 9.00053C13.3358 9.00053 13 9.33631 13 9.75053V10.1505C13 10.793 12.9994 11.2297 12.9718 11.5672C12.945 11.8961 12.8963 12.0642 12.8365 12.1815C12.6927 12.4638 12.4632 12.6932 12.181 12.837C12.0637 12.8968 11.8955 12.9455 11.5667 12.9724C11.2292 12.9999 10.7924 13.0005 10.15 13.0005H5.85C5.20757 13.0005 4.77085 12.9999 4.43328 12.9724C4.10447 12.9455 3.93632 12.8968 3.81902 12.837C3.53677 12.6932 3.3073 12.4638 3.16349 12.1815C3.10372 12.0642 3.05503 11.8961 3.02816 11.5672C3.00058 11.2297 3 10.793 3 10.1505V5.85053C3 5.20809 3.00058 4.77137 3.02816 4.43381C3.05503 4.10499 3.10372 3.93684 3.16349 3.81954C3.3073 3.5373 3.53677 3.30783 3.81902 3.16402C3.93632 3.10425 4.10447 3.05556 4.43328 3.02869C4.77085 3.00111 5.20757 3.00053 5.85 3.00053H6.25C6.66422 3.00053 7 2.66474 7 2.25053C7 1.83631 6.66422 1.50053 6.25 1.50053H5.85Z"></path></svg>')
    , LinkIcon = R => {
        const $ = useTheme()
            , W = () => R.fill || $.colors.accent;
        return (() => {
            const U = _tmpl$$g.cloneNode(!0)
                , V = U.firstChild;
            return createRenderEffect(() => setAttribute(V, "fill", W())),
                U
        }
        )()
    }
    , _tmpl$$f = template$1('<svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none"><g clip-path="url(#clip0_3676_1274)"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.82698 2.63901C1.5 3.28074 1.5 4.12082 1.5 5.80098V8.80098V9.00098V10.201C1.5 11.8811 1.5 12.7212 1.82698 13.3629C2.1146 13.9274 2.57354 14.3864 3.13803 14.674C3.77976 15.001 4.61984 15.001 6.3 15.001H11.7C13.3802 15.001 14.2202 15.001 14.862 14.674C15.4265 14.3864 15.8854 13.9274 16.173 13.3629C16.5 12.7212 16.5 11.8811 16.5 10.201V8.80098C16.5 7.12082 16.5 6.28074 16.173 5.63901C15.8854 5.07452 15.4265 4.61558 14.862 4.32796C14.743 4.26733 14.6172 4.21795 14.4805 4.17772C14.4501 3.49449 14.3722 3.02994 14.173 2.63901C13.8854 2.07452 13.4265 1.61558 12.862 1.32796C12.2202 1.00098 11.3802 1.00098 9.7 1.00098H6.3C4.61984 1.00098 3.77976 1.00098 3.13803 1.32796C2.57354 1.61558 2.1146 2.07452 1.82698 2.63901ZM12.9861 4.00942C12.9684 3.7108 12.9281 3.49982 12.8365 3.31999C12.6927 3.03775 12.4632 2.80828 12.181 2.66447C11.8601 2.50098 11.4401 2.50098 10.6 2.50098H5.4C4.55992 2.50098 4.13988 2.50098 3.81901 2.66447C3.53677 2.80828 3.3073 3.03775 3.16349 3.31999C3.03615 3.56991 3.00799 3.88 3.00177 4.40188C3.04646 4.37612 3.09189 4.35146 3.13803 4.32796C3.77976 4.00098 4.61984 4.00098 6.3 4.00098H11.7C12.1966 4.00098 12.6197 4.00098 12.9861 4.00942ZM3 7.90098V8.10098C3 8.47468 3 8.76527 3.01439 9.00098H3V11.101C3 11.9411 3 12.3611 3.16349 12.682C3.3073 12.9642 3.53677 13.1937 3.81901 13.3375C4.13988 13.501 4.55992 13.501 5.4 13.501H12.6C13.4401 13.501 13.8601 13.501 14.181 13.3375C14.4632 13.1937 14.6927 12.9642 14.8365 12.682C15 12.3611 15 11.9411 15 11.101V7.90098C15 7.0609 15 6.64086 14.8365 6.31999C14.6927 6.03775 14.4632 5.80828 14.181 5.66447C13.8601 5.50098 13.4401 5.50098 12.6 5.50098H5.4C4.55992 5.50098 4.13988 5.50098 3.81901 5.66447C3.53677 5.80828 3.3073 6.03775 3.16349 6.31999C3 6.64086 3 7.0609 3 7.90098ZM10.5 9.75098C10.5 9.33676 10.8358 9.00098 11.25 9.00098H12.75C13.1642 9.00098 13.5 9.33676 13.5 9.75098C13.5 10.1652 13.1642 10.501 12.75 10.501H11.25C10.8358 10.501 10.5 10.1652 10.5 9.75098Z"></path></g><defs><clipPath id="clip0_3676_1274"><rect width="16" height="16" fill="white" transform="translate(0.5 0.000976562)"></rect></clipPath></defs></svg>')
    , WalletIcon = R => {
        const $ = useTheme()
            , W = () => R.fill || $.colors.accent;
        return (() => {
            const U = _tmpl$$f.cloneNode(!0)
                , V = U.firstChild
                , K = V.firstChild;
            return createRenderEffect(() => setAttribute(K, "fill", W())),
                U
        }
        )()
    }
    , _tmpl$$e = template$1('<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M39.6319 16.8719C38.3212 16.2041 36.7002 16.0478 34 16.0112V11C34 5.47715 29.5228 1 24 1C18.4772 1 14 5.47715 14 11V16.0112C11.2998 16.0478 9.6788 16.2041 8.36808 16.8719C6.86278 17.6389 5.63893 18.8628 4.87195 20.3681C4 22.0794 4 24.3196 4 28.8V32.2C4 36.6804 4 38.9206 4.87195 40.6319C5.63893 42.1372 6.86278 43.3611 8.36808 44.1281C10.0794 45 12.3196 45 16.8 45H31.2C35.6804 45 37.9206 45 39.6319 44.1281C41.1372 43.3611 42.3611 42.1372 43.1281 40.6319C44 38.9206 44 36.6804 44 32.2V28.8C44 24.3196 44 22.0794 43.1281 20.3681C42.3611 18.8628 41.1372 17.6389 39.6319 16.8719ZM31 11V16H17V11C17 7.13401 20.134 4 24 4C27.866 4 31 7.13401 31 11ZM7.54497 21.73C7 22.7996 7 24.1997 7 27V34C7 36.8003 7 38.2004 7.54497 39.27C8.02433 40.2108 8.78924 40.9757 9.73005 41.455C10.7996 42 12.1997 42 15 42H33C35.8003 42 37.2004 42 38.27 41.455C39.2108 40.9757 39.9757 40.2108 40.455 39.27C41 38.2004 41 36.8003 41 34V27C41 24.1997 41 22.7996 40.455 21.73C39.9757 20.7892 39.2108 20.0243 38.27 19.545C37.2004 19 35.8003 19 33 19H15C12.1997 19 10.7996 19 9.73005 19.545C8.78924 20.0243 8.02433 20.7892 7.54497 21.73ZM24 24C23.1716 24 22.5 24.6716 22.5 25.5V29.5C22.5 30.3284 23.1716 31 24 31C24.8284 31 25.5 30.3284 25.5 29.5V25.5C25.5 24.6716 24.8284 24 24 24Z"></path></svg>')
    , SecurityIcon = R => {
        const $ = useTheme()
            , W = () => R.fill || $.colors.icon.secondary;
        return (() => {
            const U = _tmpl$$e.cloneNode(!0)
                , V = U.firstChild;
            return createRenderEffect(K => {
                const Y = R.class
                    , Z = W();
                return Y !== K._v$ && setAttribute(U, "class", K._v$ = Y),
                    Z !== K._v$2 && setAttribute(V, "fill", K._v$2 = Z),
                    K
            }
                , {
                    _v$: void 0,
                    _v$2: void 0
                }),
                U
        }
        )()
    }
    , _tmpl$$d = template$1('<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M37.485 37.3849C40.894 33.9506 43 29.2212 43 24C43 13.5066 34.4934 5 24 5C13.5066 5 5 13.5066 5 24C5 29.2213 7.1061 33.9507 10.5151 37.385C13.3583 32.9438 18.3354 30 24.0001 30C29.6647 30 34.6418 32.9437 37.485 37.3849ZM35.1809 39.3635C32.9143 35.5532 28.7554 33 24.0001 33C19.2448 33 15.0858 35.5533 12.8193 39.3636C15.9564 41.6506 19.8206 43 24 43C28.1795 43 32.0437 41.6505 35.1809 39.3635ZM24 46C36.1503 46 46 36.1503 46 24C46 11.8497 36.1503 2 24 2C11.8497 2 2 11.8497 2 24C2 36.1503 11.8497 46 24 46ZM24 24C26.7614 24 29 21.7614 29 19C29 16.2386 26.7614 14 24 14C21.2386 14 19 16.2386 19 19C19 21.7614 21.2386 24 24 24ZM24 27C28.4183 27 32 23.4183 32 19C32 14.5817 28.4183 11 24 11C19.5817 11 16 14.5817 16 19C16 23.4183 19.5817 27 24 27Z"></path></svg>')
    , PersonalityIcon = R => {
        const $ = useTheme()
            , W = () => R.fill || $.colors.icon.secondary;
        return (() => {
            const U = _tmpl$$d.cloneNode(!0)
                , V = U.firstChild;
            return createRenderEffect(K => {
                const Y = R.class
                    , Z = W();
                return Y !== K._v$ && setAttribute(U, "class", K._v$ = Y),
                    Z !== K._v$2 && setAttribute(V, "fill", K._v$2 = Z),
                    K
            }
                , {
                    _v$: void 0,
                    _v$2: void 0
                }),
                U
        }
        )()
    }
    , _tmpl$$c = template$1('<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M34.5607 4.43934C33.9749 3.85355 33.0251 3.85355 32.4393 4.43934C31.8536 5.02513 31.8536 5.97487 32.4393 6.56066L37.8787 12H10.5C9.67157 12 9 12.6716 9 13.5C9 14.3284 9.67157 15 10.5 15H37.8787L32.4393 20.4393C31.8536 21.0251 31.8536 21.9749 32.4393 22.5607C33.0251 23.1464 33.9749 23.1464 34.5607 22.5607L42.5607 14.5607C43.1464 13.9749 43.1464 13.0251 42.5607 12.4393L34.5607 4.43934ZM13.4393 25.4393C14.0251 24.8536 14.9749 24.8536 15.5607 25.4393C16.1464 26.0251 16.1464 26.9749 15.5607 27.5607L10.1213 33H37.5C38.3284 33 39 33.6716 39 34.5C39 35.3284 38.3284 36 37.5 36H10.1213L15.5607 41.4393C16.1464 42.0251 16.1464 42.9749 15.5607 43.5607C14.9749 44.1464 14.0251 44.1464 13.4393 43.5607L5.43934 35.5607C4.85355 34.9749 4.85355 34.0251 5.43934 33.4393L13.4393 25.4393Z"></path></svg>')
    , SwapIcon = R => {
        const $ = useTheme()
            , W = () => R.fill || $.colors.icon.secondary;
        return (() => {
            const U = _tmpl$$c.cloneNode(!0)
                , V = U.firstChild;
            return createRenderEffect(K => {
                const Y = R.class
                    , Z = W();
                return Y !== K._v$ && setAttribute(U, "class", K._v$ = Y),
                    Z !== K._v$2 && setAttribute(V, "fill", K._v$2 = Z),
                    K
            }
                , {
                    _v$: void 0,
                    _v$2: void 0
                }),
                U
        }
        )()
    }
    , _tmpl$$b = template$1('<svg xmlns="http://www.w3.org/2000/svg" width="28" height="29" viewBox="0 0 28 29" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.75 12.002C1.75 9.20169 1.75 7.80156 2.29497 6.732C2.77433 5.79119 3.53924 5.02629 4.48005 4.54692C5.54961 4.00195 6.94974 4.00195 9.75 4.00195H17.25C20.0503 4.00195 21.4504 4.00195 22.52 4.54692C23.4608 5.02629 24.2257 5.79119 24.705 6.732C24.8256 6.96861 24.9195 7.2214 24.9926 7.50195H21.5C19.6377 7.50195 18.7065 7.50195 17.9609 7.77334C16.711 8.22828 15.7263 9.21291 15.2714 10.4629C15 11.2085 15 12.1396 15 14.002C15 15.8643 15 16.7954 15.2714 17.541C15.7263 18.791 16.711 19.7756 17.9609 20.2306C18.7065 20.502 19.6377 20.502 21.5 20.502H24.9926C24.9195 20.7825 24.8256 21.0353 24.705 21.2719C24.2257 22.2127 23.4608 22.9776 22.52 23.457C21.4504 24.002 20.0503 24.002 17.25 24.002H9.75C6.94974 24.002 5.54961 24.002 4.48005 23.457C3.53924 22.9776 2.77433 22.2127 2.29497 21.2719C1.75 20.2023 1.75 18.8022 1.75 16.002V12.002ZM16.4999 13.802C16.4999 12.1218 16.4999 11.2817 16.8269 10.64C17.1145 10.0755 17.5735 9.61656 18.138 9.32894C18.7797 9.00196 19.6198 9.00196 21.2999 9.00196H23.1999C24.8801 9.00196 25.7202 9.00196 26.3619 9.32894C26.9264 9.61656 27.3853 10.0755 27.673 10.64C27.9999 11.2817 27.9999 12.1218 27.9999 13.802V14.202C27.9999 15.8821 27.9999 16.7222 27.673 17.3639C27.3853 17.9284 26.9264 18.3874 26.3619 18.675C25.7202 19.002 24.8801 19.002 23.1999 19.002H21.2999C19.6198 19.002 18.7797 19.002 18.138 18.675C17.5735 18.3874 17.1145 17.9284 16.8269 17.3639C16.4999 16.7222 16.4999 15.8821 16.4999 14.202V13.802ZM22.4999 14.002C22.4999 14.9685 21.7164 15.752 20.7499 15.752C19.7834 15.752 18.9999 14.9685 18.9999 14.002C18.9999 13.0355 19.7834 12.252 20.7499 12.252C21.7164 12.252 22.4999 13.0355 22.4999 14.002Z"></path></svg>')
    , AtWalletIcon = R => {
        const $ = useTheme()
            , W = () => R.fill || $.colors.constant.white;
        return (() => {
            const U = _tmpl$$b.cloneNode(!0)
                , V = U.firstChild;
            return createRenderEffect(K => {
                const Y = R.class
                    , Z = W();
                return Y !== K._v$ && setAttribute(U, "class", K._v$ = Y),
                    Z !== K._v$2 && setAttribute(V, "fill", K._v$2 = Z),
                    K
            }
                , {
                    _v$: void 0,
                    _v$2: void 0
                }),
                U
        }
        )()
    }
    , _tmpl$$a = template$1('<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M24.7803 7.21967C25.0732 7.51256 25.0732 7.98744 24.7803 8.28033L11.5303 21.5303C11.2374 21.8232 10.7626 21.8232 10.4697 21.5303L4.21967 15.2803C3.92678 14.9874 3.92678 14.5126 4.21967 14.2197C4.51256 13.9268 4.98744 13.9268 5.28033 14.2197L11 19.9393L23.7197 7.21967C24.0126 6.92678 24.4874 6.92678 24.7803 7.21967Z"></path></svg>')
    , DoneIcon = R => {
        const $ = useTheme()
            , W = () => R.fill || $.colors.icon.secondary;
        return (() => {
            const U = _tmpl$$a.cloneNode(!0)
                , V = U.firstChild;
            return createRenderEffect(K => {
                const Y = R.class
                    , Z = W();
                return Y !== K._v$ && setAttribute(U, "class", K._v$ = Y),
                    Z !== K._v$2 && setAttribute(V, "fill", K._v$2 = Z),
                    K
            }
                , {
                    _v$: void 0,
                    _v$2: void 0
                }),
                U
        }
        )()
    }
    , _tmpl$$9 = template$1('<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.0001 10.0001C10.0016 8.02333 10.0267 6.98719 10.436 6.18404C10.8195 5.43139 11.4314 4.81947 12.184 4.43597C13.0397 4 14.1598 4 16.4 4H17.6C19.8402 4 20.9603 4 21.816 4.43597C22.5686 4.81947 23.1805 5.43139 23.564 6.18404C24 7.03969 24 8.15979 24 10.4V11.6C24 13.8402 24 14.9603 23.564 15.816C23.1805 16.5686 22.5686 17.1805 21.816 17.564C21.0128 17.9733 19.9767 17.9984 17.9999 17.9999C17.9984 19.9767 17.9733 21.0128 17.564 21.816C17.1805 22.5686 16.5686 23.1805 15.816 23.564C14.9603 24 13.8402 24 11.6 24H10.4C8.15979 24 7.03969 24 6.18404 23.564C5.43139 23.1805 4.81947 22.5686 4.43597 21.816C4 20.9603 4 19.8402 4 17.6V16.4C4 14.1598 4 13.0397 4.43597 12.184C4.81947 11.4314 5.43139 10.8195 6.18404 10.436C6.98719 10.0267 8.02333 10.0016 10.0001 10.0001ZM10 11.5H9.5C8.09987 11.5 7.3998 11.5 6.86502 11.7725C6.39462 12.0122 6.01217 12.3946 5.77248 12.865C5.5 13.3998 5.5 14.0999 5.5 15.5V18.5C5.5 19.9001 5.5 20.6002 5.77248 21.135C6.01217 21.6054 6.39462 21.9878 6.86502 22.2275C7.3998 22.5 8.09987 22.5 9.5 22.5H12.5C13.9001 22.5 14.6002 22.5 15.135 22.2275C15.6054 21.9878 15.9878 21.6054 16.2275 21.135C16.5 20.6002 16.5 19.9001 16.5 18.5V18H16.4C14.1598 18 13.0397 18 12.184 17.564C11.4314 17.1805 10.8195 16.5686 10.436 15.816C10 14.9603 10 13.8402 10 11.6V11.5ZM11.5 9.5C11.5 8.09987 11.5 7.3998 11.7725 6.86502C12.0122 6.39462 12.3946 6.01217 12.865 5.77248C13.3998 5.5 14.0999 5.5 15.5 5.5H18.5C19.9001 5.5 20.6002 5.5 21.135 5.77248C21.6054 6.01217 21.9878 6.39462 22.2275 6.86502C22.5 7.3998 22.5 8.09987 22.5 9.5V12.5C22.5 13.9001 22.5 14.6002 22.2275 15.135C21.9878 15.6054 21.6054 15.9878 21.135 16.2275C20.6002 16.5 19.9001 16.5 18.5 16.5H15.5C14.0999 16.5 13.3998 16.5 12.865 16.2275C12.3946 15.9878 12.0122 15.6054 11.7725 15.135C11.5 14.6002 11.5 13.9001 11.5 12.5V9.5Z"></path></svg>')
    , CopyLightIcon = R => {
        const $ = useTheme()
            , W = () => R.fill || $.colors.icon.secondary;
        return (() => {
            const U = _tmpl$$9.cloneNode(!0)
                , V = U.firstChild;
            return createRenderEffect(K => {
                const Y = W()
                    , Z = W();
                return Y !== K._v$ && setAttribute(U, "fill", K._v$ = Y),
                    Z !== K._v$2 && setAttribute(V, "fill", K._v$2 = Z),
                    K
            }
                , {
                    _v$: void 0,
                    _v$2: void 0
                }),
                U
        }
        )()
    }
    , _tmpl$$8 = template$1('<svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M1 4.12695C1 3.07754 1 2.55284 1.19202 2.14684C1.38986 1.72856 1.7266 1.39181 2.14489 1.19397C2.55088 1.00195 3.07559 1.00195 4.125 1.00195C5.17441 1.00195 5.69912 1.00195 6.10511 1.19397C6.5234 1.39181 6.86014 1.72856 7.05798 2.14684C7.25 2.55284 7.25 3.07754 7.25 4.12695C7.25 5.17636 7.25 5.70107 7.05798 6.10706C6.86014 6.52535 6.5234 6.8621 6.10511 7.05993C5.69912 7.25195 5.17441 7.25195 4.125 7.25195C3.07559 7.25195 2.55088 7.25195 2.14489 7.05993C1.7266 6.8621 1.38986 6.52535 1.19202 6.10706C1 5.70107 1 5.17636 1 4.12695ZM2.5 3.30195C2.5 3.02193 2.5 2.88191 2.5545 2.77496C2.60243 2.68088 2.67892 2.60439 2.773 2.55645C2.87996 2.50195 3.01997 2.50195 3.3 2.50195H4.95C5.23003 2.50195 5.37004 2.50195 5.477 2.55645C5.57108 2.60439 5.64757 2.68088 5.6955 2.77496C5.75 2.88191 5.75 3.02193 5.75 3.30195V4.95195C5.75 5.23198 5.75 5.37199 5.6955 5.47895C5.64757 5.57303 5.57108 5.64952 5.477 5.69746C5.37004 5.75195 5.23003 5.75195 4.95 5.75195H3.3C3.01997 5.75195 2.87996 5.75195 2.773 5.69746C2.67892 5.64952 2.60243 5.57303 2.5545 5.47895C2.5 5.37199 2.5 5.23198 2.5 4.95195V3.30195ZM1 11.877C1 10.8275 1 10.3028 1.19202 9.89684C1.38986 9.47856 1.7266 9.14181 2.14489 8.94397C2.55088 8.75195 3.07559 8.75195 4.125 8.75195C5.17441 8.75195 5.69912 8.75195 6.10511 8.94397C6.5234 9.14181 6.86014 9.47856 7.05798 9.89684C7.25 10.3028 7.25 10.8275 7.25 11.877C7.25 12.9264 7.25 13.4511 7.05798 13.8571C6.86014 14.2753 6.5234 14.6121 6.10511 14.8099C5.69912 15.002 5.17441 15.002 4.125 15.002C3.07559 15.002 2.55088 15.002 2.14489 14.8099C1.7266 14.6121 1.38986 14.2753 1.19202 13.8571C1 13.4511 1 12.9264 1 11.877ZM2.5 11.052C2.5 10.7719 2.5 10.6319 2.5545 10.525C2.60243 10.4309 2.67892 10.3544 2.773 10.3064C2.87996 10.252 3.01997 10.252 3.3 10.252H4.95C5.23003 10.252 5.37004 10.252 5.477 10.3064C5.57108 10.3544 5.64757 10.4309 5.6955 10.525C5.75 10.6319 5.75 10.7719 5.75 11.052V12.702C5.75 12.982 5.75 13.122 5.6955 13.2289C5.64757 13.323 5.57108 13.3995 5.477 13.4475C5.37004 13.502 5.23003 13.502 4.95 13.502H3.3C3.01997 13.502 2.87996 13.502 2.773 13.4475C2.67892 13.3995 2.60243 13.323 2.5545 13.2289C2.5 13.122 2.5 12.982 2.5 12.702V11.052ZM8.94202 2.14684C8.75 2.55284 8.75 3.07754 8.75 4.12695C8.75 5.17636 8.75 5.70107 8.94202 6.10706C9.13986 6.52535 9.4766 6.8621 9.89489 7.05993C10.3009 7.25195 10.8256 7.25195 11.875 7.25195C12.9244 7.25195 13.4491 7.25195 13.8551 7.05993C14.2734 6.8621 14.6101 6.52535 14.808 6.10706C15 5.70107 15 5.17636 15 4.12695C15 3.07754 15 2.55284 14.808 2.14684C14.6101 1.72856 14.2734 1.39181 13.8551 1.19397C13.4491 1.00195 12.9244 1.00195 11.875 1.00195C10.8256 1.00195 10.3009 1.00195 9.89489 1.19397C9.4766 1.39181 9.13986 1.72856 8.94202 2.14684ZM10.3045 2.77496C10.25 2.88191 10.25 3.02193 10.25 3.30195V4.95195C10.25 5.23198 10.25 5.37199 10.3045 5.47895C10.3524 5.57303 10.4289 5.64952 10.523 5.69746C10.63 5.75195 10.77 5.75195 11.05 5.75195H12.7C12.98 5.75195 13.12 5.75195 13.227 5.69746C13.3211 5.64952 13.3976 5.57303 13.4455 5.47895C13.5 5.37199 13.5 5.23198 13.5 4.95195V3.30195C13.5 3.02193 13.5 2.88191 13.4455 2.77496C13.3976 2.68088 13.3211 2.60439 13.227 2.55645C13.12 2.50195 12.98 2.50195 12.7 2.50195H11.05C10.77 2.50195 10.63 2.50195 10.523 2.55645C10.4289 2.60439 10.3524 2.68088 10.3045 2.77496ZM8.80727 9.13518C8.75 9.26242 8.75 9.4256 8.75 9.75195C8.75 10.0783 8.75 10.2415 8.80727 10.3687C8.87245 10.5136 8.9884 10.6295 9.13323 10.6947C9.26047 10.752 9.42365 10.752 9.75 10.752C10.0764 10.752 10.2395 10.752 10.3668 10.6947C10.5116 10.6295 10.6276 10.5136 10.6927 10.3687C10.75 10.2415 10.75 10.0783 10.75 9.75195C10.75 9.4256 10.75 9.26242 10.6927 9.13518C10.6276 8.99035 10.5116 8.8744 10.3668 8.80922C10.2395 8.75195 10.0764 8.75195 9.75 8.75195C9.42365 8.75195 9.26047 8.75195 9.13323 8.80922C8.9884 8.8744 8.87245 8.99035 8.80727 9.13518ZM10.87 11.8771C10.87 11.546 10.87 11.3805 10.9289 11.2517C10.9938 11.1098 11.1077 10.9959 11.2497 10.931C11.3784 10.8721 11.5439 10.8721 11.875 10.8721C12.2061 10.8721 12.3716 10.8721 12.5003 10.931C12.6423 10.9959 12.7562 11.1098 12.8211 11.2517C12.88 11.3805 12.88 11.546 12.88 11.8771C12.88 12.2081 12.88 12.3737 12.8211 12.5024C12.7562 12.6444 12.6423 12.7583 12.5003 12.8232C12.3716 12.8821 12.2061 12.8821 11.875 12.8821C11.5439 12.8821 11.3784 12.8821 11.2497 12.8232C11.1077 12.7583 10.9938 12.6444 10.9289 12.5024C10.87 12.3737 10.87 12.2081 10.87 11.8771ZM8.80727 13.3852C8.75 13.5124 8.75 13.6756 8.75 14.002C8.75 14.3283 8.75 14.4915 8.80727 14.6187C8.87245 14.7636 8.9884 14.8795 9.13323 14.9447C9.26047 15.002 9.42365 15.002 9.75 15.002C10.0764 15.002 10.2395 15.002 10.3668 14.9447C10.5116 14.8795 10.6276 14.7636 10.6927 14.6187C10.75 14.4915 10.75 14.3283 10.75 14.002C10.75 13.6756 10.75 13.5124 10.6927 13.3852C10.6276 13.2404 10.5116 13.1244 10.3668 13.0592C10.2395 13.002 10.0764 13.002 9.75 13.002C9.42365 13.002 9.26047 13.002 9.13323 13.0592C8.9884 13.1244 8.87245 13.2404 8.80727 13.3852ZM13 9.75195C13 9.4256 13 9.26242 13.0573 9.13518C13.1224 8.99035 13.2384 8.8744 13.3832 8.80922C13.5105 8.75195 13.6736 8.75195 14 8.75195C14.3264 8.75195 14.4895 8.75195 14.6168 8.80922C14.7616 8.8744 14.8776 8.99035 14.9427 9.13518C15 9.26242 15 9.4256 15 9.75195C15 10.0783 15 10.2415 14.9427 10.3687C14.8776 10.5136 14.7616 10.6295 14.6168 10.6947C14.4895 10.752 14.3264 10.752 14 10.752C13.6736 10.752 13.5105 10.752 13.3832 10.6947C13.2384 10.6295 13.1224 10.5136 13.0573 10.3687C13 10.2415 13 10.0783 13 9.75195ZM13.0573 13.3852C13 13.5124 13 13.6756 13 14.002C13 14.3283 13 14.4915 13.0573 14.6187C13.1224 14.7636 13.2384 14.8795 13.3832 14.9447C13.5105 15.002 13.6736 15.002 14 15.002C14.3264 15.002 14.4895 15.002 14.6168 14.9447C14.7616 14.8795 14.8776 14.7636 14.9427 14.6187C15 14.4915 15 14.3283 15 14.002C15 13.6756 15 13.5124 14.9427 13.3852C14.8776 13.2404 14.7616 13.1244 14.6168 13.0592C14.4895 13.002 14.3264 13.002 14 13.002C13.6736 13.002 13.5105 13.002 13.3832 13.0592C13.2384 13.1244 13.1224 13.2404 13.0573 13.3852Z"></path></svg>')
    , QRIcon = R => {
        const $ = useTheme()
            , W = () => R.fill || $.colors.icon.secondary;
        return (() => {
            const U = _tmpl$$8.cloneNode(!0)
                , V = U.firstChild;
            return createRenderEffect(() => setAttribute(V, "fill", W())),
                U
        }
        )()
    }
    , containerBorders = {
        m: "16px",
        s: "12px",
        none: "0"
    }
    , walletBorders = {
        m: "6px",
        s: "6px",
        none: "0"
    }
    , FourWalletsCard = styled.div`
    width: 60px;
    height: 60px;
    padding: 8px;
    margin-bottom: 8px;
    border-radius: ${R => containerBorders[R.theme.borderRadius]};
    background-color: ${R => R.theme.colors.background.tint};
    display: grid;
    grid-template: 1fr 1fr / 1fr 1fr;
    gap: 4px;
`
    , FourWalletsImage = styled(WalletImage)`
    width: 20px;
    height: 20px;
    border-radius: ${R => walletBorders[R.theme.borderRadius]};
`
    , FourWalletsItem = R => createComponent(WalletItem, {
        get name() {
            return R.labelLine1
        },
        get secondLine() {
            return R.labelLine2
        },
        get icon() {
            return createComponent(FourWalletsCard, {
                get children() {
                    return createComponent(For, {
                        each: [0, 1, 2, 3],
                        children: $ => createComponent(FourWalletsImage, {
                            get src() {
                                return R.images[$]
                            }
                        })
                    })
                }
            })
        },
        onClick: () => R.onClick()
    })
    , AT_WALLET_APP_NAME = "telegram-wallet"
    , IMG = {
        TON: "https://raw.githubusercontent.com/ton-connect/sdk/main/assets/ton-icon-48.png",
        TG: "https://raw.githubusercontent.com/ton-connect/sdk/main/assets/tg.png"
    }
    , WalletLabeledItem = R => {
        const [$] = useI18n()
            , W = () => {
                if (R.wallet.appName !== AT_WALLET_APP_NAME) {
                    if ("isPreferred" in R.wallet && R.wallet.isPreferred)
                        return $("walletItem.recent", {}, "Recent");
                    if (isWalletInfoCurrentlyInjected(R.wallet))
                        return $("walletItem.installed", {}, "Installed");
                    if (R.wallet.name === "Tonkeeper")
                        return $("walletItem.popular", {}, "Popular")
                }
            }
            ;
        return createMemo((() => {
            const U = createMemo(() => R.wallet.appName === AT_WALLET_APP_NAME);
            return () => U() ? createComponent(WalletItem, {
                get icon() {
                    return R.wallet.imageUrl
                },
                get name() {
                    return $("walletItem.walletOn", {}, "Wallet On")
                },
                secondLine: "Telegram",
                get badgeUrl() {
                    return IMG.TG
                },
                onClick: () => R.onClick()
            }) : createComponent(WalletItem, {
                get icon() {
                    return R.wallet.imageUrl
                },
                get name() {
                    return R.wallet.name
                },
                get secondLine() {
                    return W()
                },
                secondLineColorPrimary: !1,
                onClick: () => R.onClick()
            })
        }
        )())
    }
    , ScrollContainerStyled = styled.div`
    width: 100%;
    overflow-y: auto;
    max-height: ${R => R.maxHeight};

    scrollbar-width: none;
    &&::-webkit-scrollbar {
        display: none;
    }

    &&::-webkit-scrollbar-track {
        background: transparent;
    }

    &&::-webkit-scrollbar-thumb {
        display: none;
    }
`
    , ScrollDivider = styled.div`
    height: 1px;
    margin: 0 -24px;
    width: calc(100% + 48px);
    opacity: 0.08;
    background: ${R => R.isShown ? R.theme.colors.icon.secondary : "transparent"};
    transition: background 0.15s ease-in-out;

    ${media("mobile")} {
        width: 100%;
        margin: 0;
    }
`
    , [windowHeight, setWindowHeight] = createSignal(((_h = getWindow$1()) == null ? void 0 : _h.innerHeight) || 0);
getWindow$1() && window.addEventListener("resize", () => setWindowHeight(window.innerHeight));
const [isMobile, setIsMobile] = createSignal(isDevice("mobile"))
    , updateIsMobile = () => setIsMobile(isDevice("mobile"));
getWindow$1() && (window.addEventListener("resize", () => updateIsMobile()),
    window.addEventListener("load", () => updateIsMobile(), {
        once: !0
    }));
const ScrollContainer = R => {
    const [$, W] = createSignal(!1)
        , U = Y => {
            W(Y.target.scrollTop > 0)
        }
        , V = () => 150
        , K = () => R.maxHeight !== void 0 ? `${R.maxHeight}px` : `${windowHeight() - V()}px`;
    return [createComponent(ScrollDivider, {
        get isShown() {
            return $()
        }
    }), createComponent(ScrollContainerStyled, {
        get maxHeight() {
            return K()
        },
        onScroll: U,
        get class() {
            return R.class
        },
        get children() {
            return R.children
        }
    })]
}
    , AStyled = styled.a`
    display: block;
    text-decoration: unset;
`
    , Link = R => createComponent(AStyled, mergeProps({
        get href() {
            return R.href
        },
        get target() {
            return R.blank ? "_blank" : "_self"
        },
        get class() {
            return R.class
        }
    }, () => R.blank ? {
        rel: "noreferrer noopener"
    } : {}, {
        get children() {
            return R.children
        }
    }))
    , TonConnectUiContext = createContext()
    , _tmpl$$7 = template$1('<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.76228 2.09998H10.2378C11.0458 2.09997 11.7067 2.09996 12.2438 2.14384C12.7997 2.18926 13.3017 2.28614 13.7706 2.52505C14.5045 2.89896 15.1011 3.49558 15.475 4.22941C15.7139 4.6983 15.8108 5.20038 15.8562 5.75629C15.9001 6.29337 15.9001 6.95422 15.9001 7.76227V8.1H16.2377C17.0457 8.09999 17.7066 8.09998 18.2437 8.14386C18.7996 8.18928 19.3017 8.28616 19.7705 8.52507C20.5044 8.89898 21.101 9.4956 21.4749 10.2294C21.7138 10.6983 21.8107 11.2004 21.8561 11.7563C21.9 12.2934 21.9 12.9542 21.9 13.7623V16.2377C21.9 17.0458 21.9 17.7066 21.8561 18.2437C21.8107 18.7996 21.7138 19.3017 21.4749 19.7706C21.101 20.5044 20.5044 21.101 19.7705 21.4749C19.3017 21.7138 18.7996 21.8107 18.2437 21.8561C17.7066 21.9 17.0458 21.9 16.2378 21.9H13.7623C12.9543 21.9 12.2934 21.9 11.7563 21.8561C11.2004 21.8107 10.6983 21.7138 10.2294 21.4749C9.49561 21.101 8.89898 20.5044 8.52508 19.7706C8.28616 19.3017 8.18928 18.7996 8.14386 18.2437C8.09998 17.7066 8.09999 17.0458 8.1 16.2377V15.9H7.76227C6.95426 15.9 6.29335 15.9 5.75629 15.8561C5.20038 15.8107 4.6983 15.7138 4.22941 15.4749C3.49558 15.101 2.89896 14.5044 2.52505 13.7705C2.28614 13.3017 2.18926 12.7996 2.14384 12.2437C2.09996 11.7066 2.09997 11.0458 2.09998 10.2377V7.76228C2.09997 6.95424 2.09996 6.29336 2.14384 5.75629C2.18926 5.20038 2.28614 4.6983 2.52505 4.22941C2.89896 3.49558 3.49558 2.89896 4.22941 2.52505C4.6983 2.28614 5.20038 2.18926 5.75629 2.14384C6.29336 2.09996 6.95425 2.09997 7.76228 2.09998ZM8.1 14.1V13.7623C8.09999 12.9542 8.09998 12.2934 8.14386 11.7563C8.18928 11.2004 8.28616 10.6983 8.52508 10.2294C8.89898 9.4956 9.49561 8.89898 10.2294 8.52507C10.6983 8.28616 11.2004 8.18928 11.7563 8.14386C12.2934 8.09998 12.9542 8.09999 13.7623 8.1H14.1001V7.79998C14.1001 6.94505 14.0994 6.35798 14.0622 5.90287C14.0259 5.45827 13.9593 5.21944 13.8712 5.0466C13.6699 4.65146 13.3486 4.3302 12.9535 4.12886C12.7806 4.04079 12.5418 3.97419 12.0972 3.93786C11.6421 3.90068 11.055 3.89998 10.2001 3.89998H7.79998C6.94505 3.89998 6.35798 3.90068 5.90287 3.93786C5.45827 3.97419 5.21944 4.04079 5.0466 4.12886C4.65146 4.3302 4.3302 4.65146 4.12886 5.0466C4.04079 5.21944 3.97419 5.45827 3.93786 5.90287C3.90068 6.35798 3.89998 6.94505 3.89998 7.79998V10.2C3.89998 11.0549 3.90068 11.642 3.93786 12.0971C3.97419 12.5417 4.04079 12.7805 4.12886 12.9534C4.3302 13.3485 4.65146 13.6698 5.0466 13.8711C5.21944 13.9592 5.45827 14.0258 5.90287 14.0621C6.35798 14.0993 6.94505 14.1 7.79998 14.1H8.1ZM11.0466 10.1289C11.2195 10.0408 11.4583 9.97421 11.9029 9.93788C12.358 9.9007 12.9451 9.9 13.8 9.9H16.2C17.0549 9.9 17.642 9.9007 18.0971 9.93788C18.5417 9.97421 18.7805 10.0408 18.9534 10.1289C19.3485 10.3302 19.6698 10.6515 19.8711 11.0466C19.9592 11.2195 20.0258 11.4583 20.0621 11.9029C20.0993 12.358 20.1 12.9451 20.1 13.8V16.2C20.1 17.0549 20.0993 17.642 20.0621 18.0971C20.0258 18.5417 19.9592 18.7805 19.8711 18.9534C19.6698 19.3485 19.3485 19.6698 18.9534 19.8711C18.7805 19.9592 18.5417 20.0258 18.0971 20.0621C17.642 20.0993 17.0549 20.1 16.2 20.1H13.8C12.9451 20.1 12.358 20.0993 11.9029 20.0621C11.4583 20.0258 11.2195 19.9592 11.0466 19.8711C10.6515 19.6698 10.3302 19.3485 10.1289 18.9534C10.0408 18.7805 9.97421 18.5417 9.93788 18.0971C9.9007 17.642 9.9 17.0549 9.9 16.2V13.8C9.9 12.9451 9.9007 12.358 9.93788 11.9029C9.97421 11.4583 10.0408 11.2195 10.1289 11.0466C10.3302 10.6515 10.6515 10.3302 11.0466 10.1289Z"></path></svg>')
    , CopyIcon = R => {
        const $ = useTheme()
            , W = () => R.fill || $.colors.icon.primary;
        return (() => {
            const U = _tmpl$$7.cloneNode(!0)
                , V = U.firstChild;
            return createRenderEffect(K => {
                const Y = R.class
                    , Z = W();
                return Y !== K._v$ && setAttribute(U, "class", K._v$ = Y),
                    Z !== K._v$2 && setAttribute(V, "fill", K._v$2 = Z),
                    K
            }
                , {
                    _v$: void 0,
                    _v$2: void 0
                }),
                U
        }
        )()
    }
    , _tmpl$$6 = template$1('<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.7624 3.10001C7.95435 3.1 7.29349 3.09999 6.75642 3.14387C6.2005 3.18929 5.69842 3.28617 5.22954 3.52508C4.4957 3.89899 3.89908 4.49561 3.52517 5.22944C3.28626 5.69833 3.18938 6.20041 3.14396 6.75632C3.10008 7.2934 3.10009 7.95424 3.1001 8.76229V15.2377C3.10009 16.0458 3.10008 16.7066 3.14396 17.2437C3.18938 17.7996 3.28626 18.3017 3.52517 18.7706C3.89908 19.5044 4.4957 20.101 5.22954 20.4749C5.69842 20.7138 6.2005 20.8107 6.75642 20.8561C7.29349 20.9 7.95434 20.9 8.76239 20.9H12.0001C12.4972 20.9 12.9001 20.4971 12.9001 20C12.9001 19.503 12.4972 19.1 12.0001 19.1H8.8001C7.94517 19.1 7.3581 19.0993 6.90299 19.0621C6.45839 19.0258 6.21956 18.9592 6.04672 18.8711C5.65158 18.6698 5.33032 18.3485 5.12898 17.9534C5.04092 17.7805 4.97431 17.5417 4.93798 17.0971C4.9008 16.642 4.9001 16.0549 4.9001 15.2V8.80001C4.9001 7.94508 4.9008 7.35801 4.93798 6.9029C4.97431 6.4583 5.04092 6.21947 5.12898 6.04663C5.33032 5.65149 5.65158 5.33023 6.04672 5.12889C6.21956 5.04082 6.45839 4.97422 6.90299 4.93789C7.3581 4.90071 7.94517 4.90001 8.8001 4.90001H12.0001C12.4972 4.90001 12.9001 4.49706 12.9001 4.00001C12.9001 3.50295 12.4972 3.10001 12.0001 3.10001H8.7624Z"></path><path d="M17.6364 7.3636C17.2849 7.01212 16.7151 7.01212 16.3636 7.3636C16.0121 7.71507 16.0121 8.28492 16.3636 8.63639L18.8272 11.1H9.00001C8.50295 11.1 8.10001 11.5029 8.10001 12C8.10001 12.497 8.50295 12.9 9.00001 12.9H18.8272L16.3636 15.3636C16.0121 15.7151 16.0121 16.2849 16.3636 16.6364C16.7151 16.9879 17.2849 16.9879 17.6364 16.6364L21.6364 12.6364C21.9879 12.2849 21.9879 11.7151 21.6364 11.3636L17.6364 7.3636Z"></path></svg>')
    , DisconnectIcon = R => {
        const $ = useTheme()
            , W = () => R.fill || $.colors.icon.primary;
        return (() => {
            const U = _tmpl$$6.cloneNode(!0)
                , V = U.firstChild
                , K = V.nextSibling;
            return createRenderEffect(Y => {
                const Z = W()
                    , J = W();
                return Z !== Y._v$ && setAttribute(V, "fill", Y._v$ = Z),
                    J !== Y._v$2 && setAttribute(K, "fill", Y._v$2 = J),
                    Y
            }
                , {
                    _v$: void 0,
                    _v$2: void 0
                }),
                U
        }
        )()
    }
    , hoverBorders$1 = {
        m: "8px",
        s: "4px",
        none: "0"
    }
    , dropdownBorders = {
        m: "16px",
        s: "8px",
        none: "0"
    }
    , AccountButtonDropdownStyled = styled.div`
    width: 256px;
    box-shadow: 0 4px 24px rgba(0, 0, 0, 0.16);
    border-radius: ${R => dropdownBorders[R.theme.borderRadius]};

    background-color: ${R => R.theme.colors.background.primary}
           
    color: ${R => R.theme.colors.text.primary}
`
    , UlStyled$1 = styled.ul`
    background-color: ${R => R.theme.colors.background.primary};
    padding: 8px;
`
    , MenuButtonStyled = styled.button`
    display: flex;
    align-items: center;
    gap: 8px;
    height: 40px;
    padding-left: 8px;
    width: 100%;

    background-color: ${R => R.theme.colors.background.primary};
    border: none;
    border-radius: ${R => hoverBorders$1[R.theme.borderRadius]};
    cursor: pointer;

    transition: background-color, transform 0.1s ease-in-out;

    &:hover {
        background-color: ${R => R.theme.colors.background.secondary};
    }

    &:active {
        transform: scale(0.96);
    }
`
    , _tmpl$$5 = template$1("<li></li>")
    , MenuItemText = R => createComponent(Text, {
        get translationKey() {
            return R.translationKey
        },
        fontSize: "15px",
        fontWeight: "590",
        get children() {
            return R.children
        }
    })
    , AccountButtonDropdown = R => {
        const $ = useContext(TonConnectUiContext)
            , [W, U] = createSignal(!1)
            , V = () => __async(void 0, null, function* () {
                const Y = toUserFriendlyAddress($.account.address, $.account.chain === CHAIN.TESTNET);
                yield copyToClipboard(Y),
                    U(!0),
                    setTimeout(() => U(!1), 1e3)
            })
            , K = () => {
                $.disconnect(),
                    R.onClose()
            }
            ;
        return createComponent(AccountButtonDropdownStyled, {
            ref(Y) {
                const Z = R.ref;
                typeof Z == "function" ? Z(Y) : R.ref = Y
            },
            get class() {
                return R.class
            },
            "data-tc-dropdown": "true",
            get children() {
                return createComponent(UlStyled$1, {
                    get children() {
                        return [(() => {
                            const Y = _tmpl$$5.cloneNode(!0);
                            return insert(Y, createComponent(MenuButtonStyled, {
                                onClick: () => V(),
                                get children() {
                                    return [createComponent(CopyIcon, {}), createComponent(Show, {
                                        get when() {
                                            return !W()
                                        },
                                        get children() {
                                            return createComponent(MenuItemText, {
                                                translationKey: "button.dropdown.copy",
                                                children: "Copy address"
                                            })
                                        }
                                    }), createComponent(Show, {
                                        get when() {
                                            return W()
                                        },
                                        get children() {
                                            return createComponent(MenuItemText, {
                                                translationKey: "button.dropdown.copied",
                                                children: "Address copied!"
                                            })
                                        }
                                    })]
                                }
                            })),
                                Y
                        }
                        )(), (() => {
                            const Y = _tmpl$$5.cloneNode(!0);
                            return insert(Y, createComponent(MenuButtonStyled, {
                                onClick: () => K(),
                                get children() {
                                    return [createComponent(DisconnectIcon, {}), createComponent(MenuItemText, {
                                        translationKey: "button.dropdown.disconnect",
                                        children: "Disconnect"
                                    })]
                                }
                            })),
                                Y
                        }
                        )()]
                    }
                })
            }
        })
    }
    , borders$2 = {
        m: "16px",
        s: "8px",
        none: "0"
    }
    , NotificationStyled = styled.div`
    width: 256px;
    padding: 12px 16px;
    display: flex;
    gap: 9px;

    background-color: ${R => R.theme.colors.background.primary};
    box-shadow: 0 4px 24px rgba(0, 0, 0, 0.16);
    border-radius: ${R => borders$2[R.theme.borderRadius]};
`
    , NotificationContentStyled = styled.div`
    width: 192px;

    > h3 {
        font-size: 15px;
    }
`
    , TextStyled$2 = styled(Text)`
    margin-top: 4px;
    color: ${R => R.theme.colors.text.secondary};
`
    , Notification = R => {
        const $ = useDataAttributes(R);
        return createComponent(NotificationStyled, mergeProps({
            get class() {
                return R.class
            },
            "data-tc-notification": "true"
        }, $, {
            get children() {
                return [createComponent(NotificationContentStyled, {
                    get children() {
                        return [createComponent(H3, {
                            get translationKey() {
                                return R.header.translationKey
                            },
                            get translationValues() {
                                return R.header.translationValues
                            },
                            get children() {
                                return R.children
                            }
                        }), createComponent(Show, {
                            get when() {
                                return R.text
                            },
                            get children() {
                                return createComponent(TextStyled$2, {
                                    get translationKey() {
                                        return R.text.translationKey
                                    },
                                    get translationValues() {
                                        return R.text.translationValues
                                    }
                                })
                            }
                        })]
                    }
                }), createMemo(() => R.icon)]
            }
        }))
    }
    , LoaderIconStyled$2 = styled(LoaderIcon)`
    align-self: center;
`
    , ConfirmOperationNotification = R => {
        const $ = useContext(TonConnectUiContext)
            , [W] = useI18n()
            , U = () => $.wallet && "name" in $.wallet ? $.wallet.name : W("common.yourWallet", {}, "Your wallet");
        return createComponent(Notification, {
            get header() {
                return {
                    translationKey: "notifications.confirm.header",
                    translationValues: {
                        name: U()
                    }
                }
            },
            get class() {
                return R.class
            },
            get icon() {
                return createComponent(LoaderIconStyled$2, {})
            },
            "data-tc-notification-confirm": "true",
            children: "Confirm operation in your wallet"
        })
    }
    , ErrorIconStyled$2 = styled(ErrorIcon)`
    margin-top: 2px;
`
    , ErrorTransactionNotification = R => createComponent(Notification, {
        header: {
            translationKey: "notifications.transactionCanceled.header"
        },
        text: {
            translationKey: "notifications.transactionCanceled.text"
        },
        get icon() {
            return createComponent(ErrorIconStyled$2, {
                size: "xs"
            })
        },
        get class() {
            return R.class
        },
        "data-tc-notification-tx-cancelled": "true",
        children: "Transaction cancelled"
    })
    , SuccessIconStyled = styled(SuccessIcon)`
    margin-top: 2px;
`
    , SuccessTransactionNotification = R => createComponent(Notification, {
        header: {
            translationKey: "notifications.transactionSent.header"
        },
        text: {
            translationKey: "notifications.transactionSent.text"
        },
        get icon() {
            return createComponent(SuccessIconStyled, {})
        },
        get class() {
            return R.class
        },
        "data-tc-notification-tx-sent": "true",
        children: "Transaction sent"
    })
    , NotificationClass = u$1`
    transform: translateY(-8px);
    margin-bottom: 12px;
`
    , defaultConfig = {
        timeout: 4500
    }
    , [latestAction, setLatestAction] = createSignal(null);
function useOpenedNotifications(R) {
    const { timeout: $ } = __spreadValues(__spreadValues({}, defaultConfig), R)
        , [W, U] = createSignal([])
        , [V, K] = createSignal([]);
    return createEffect(on(action, Y => {
        var Z;
        if (!Y || !Y.showNotification || latestAction() === Y || ((Z = latestAction()) == null ? void 0 : Z.name) === "confirm-transaction" && Y.name === "confirm-transaction")
            return;
        setLatestAction(Y),
            U(re => re.filter(oe => oe.action !== "confirm-transaction"));
        const J = {
            action: Y.name
        };
        U(re => [...re, J]);
        const X = setTimeout(() => {
            U(re => re.filter(oe => oe !== J)),
                K(re => re.filter(oe => oe !== X))
        }
            , $);
        K(re => [...re, X])
    }
    )),
        onCleanup(() => {
            V().forEach(Y => clearTimeout(Y))
        }
        ),
        W
}
const _tmpl$$4 = template$1('<div data-tc-list-notifications="true"></div>')
    , Notifications = R => {
        const $ = useOpenedNotifications();
        return (() => {
            const W = _tmpl$$4.cloneNode(!0);
            return insert(W, createComponent(TransitionGroup, {
                onBeforeEnter: U => {
                    animate(U, [{
                        opacity: 0,
                        transform: "translateY(0)"
                    }, {
                        opacity: 1,
                        transform: "translateY(-8px)"
                    }], {
                        duration: 200
                    })
                }
                ,
                onExit: (U, V) => {
                    animate(U, [{
                        opacity: 1,
                        transform: "translateY(-8px)"
                    }, {
                        opacity: 0,
                        transform: "translateY(-30px)"
                    }], {
                        duration: 200
                    }).finished.then(V)
                }
                ,
                get children() {
                    return createComponent(For, {
                        get each() {
                            return $()
                        },
                        children: U => createComponent(Switch, {
                            get children() {
                                return [createComponent(Match, {
                                    get when() {
                                        return U.action === "transaction-sent"
                                    },
                                    get children() {
                                        return createComponent(SuccessTransactionNotification, {
                                            class: NotificationClass
                                        })
                                    }
                                }), createComponent(Match, {
                                    get when() {
                                        return U.action === "transaction-canceled"
                                    },
                                    get children() {
                                        return createComponent(ErrorTransactionNotification, {
                                            class: NotificationClass
                                        })
                                    }
                                }), createComponent(Match, {
                                    get when() {
                                        return U.action === "confirm-transaction"
                                    },
                                    get children() {
                                        return createComponent(ConfirmOperationNotification, {
                                            class: NotificationClass
                                        })
                                    }
                                })]
                            }
                        })
                    })
                }
            })),
                createRenderEffect(() => className(W, R.class)),
                W
        }
        )()
    }
    , AccountButtonStyled = styled(Button)`
    background-color: ${R => R.theme.colors.connectButton.background};
    color: ${R => R.theme.colors.connectButton.foreground};
    box-shadow: ${R => `0 4px 24px ${rgba(R.theme.colors.constant.black, .16)}`};
    padding: 8px 16px 8px 12px;

    display: flex;
    align-items: center;
    gap: 4px;
    height: 40px;
`
    , DropdownButtonStyled = styled(AccountButtonStyled)`
    padding: 12px 16px;
    min-width: 148px;
    justify-content: center;
    background-color: ${R => R.theme.colors.background.primary};
`
    , LoaderButtonStyled$1 = styled(Button)`
    min-width: 148px;
    height: 40px;

    background-color: ${R => R.theme.colors.background.primary};
    color: ${R => R.theme.colors.connectButton.foreground};
    box-shadow: ${R => `0 4px 24px ${rgba(R.theme.colors.constant.black, .16)}`};

    display: flex;
    align-items: center;
    justify-content: center;
`
    , LoaderIconStyled$1 = styled(LoaderIcon)`
    height: 18px;
    width: 18px;
`
    , DropdownContainerStyled = styled.div`
    width: fit-content;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`
    , DropdownStyled = styled(AccountButtonDropdown)`
    box-sizing: border-box;
    overflow: hidden;
    margin-top: 12px;
`
    , NotificationsStyled = styled(Notifications)`
    > div:first-child {
        margin-top: 20px;
    }
`;
function getSide(R) {
    return R.split("-")[0]
}
function getAlignment(R) {
    return R.split("-")[1]
}
function getMainAxisFromPlacement(R) {
    return ["top", "bottom"].includes(getSide(R)) ? "x" : "y"
}
function getLengthFromAxis(R) {
    return R === "y" ? "height" : "width"
}
function computeCoordsFromPlacement(R, $, W) {
    let { reference: U, floating: V } = R;
    const K = U.x + U.width / 2 - V.width / 2
        , Y = U.y + U.height / 2 - V.height / 2
        , Z = getMainAxisFromPlacement($)
        , J = getLengthFromAxis(Z)
        , X = U[J] / 2 - V[J] / 2
        , re = getSide($)
        , oe = Z === "x";
    let ie;
    switch (re) {
        case "top":
            ie = {
                x: K,
                y: U.y - V.height
            };
            break;
        case "bottom":
            ie = {
                x: K,
                y: U.y + U.height
            };
            break;
        case "right":
            ie = {
                x: U.x + U.width,
                y: Y
            };
            break;
        case "left":
            ie = {
                x: U.x - V.width,
                y: Y
            };
            break;
        default:
            ie = {
                x: U.x,
                y: U.y
            }
    }
    switch (getAlignment($)) {
        case "start":
            ie[Z] -= X * (W && oe ? -1 : 1);
            break;
        case "end":
            ie[Z] += X * (W && oe ? -1 : 1);
            break
    }
    return ie
}
const computePosition$1 = (R, $, W) => __async(void 0, null, function* () {
    const { placement: U = "bottom", strategy: V = "absolute", middleware: K = [], platform: Y } = W
        , Z = K.filter(Boolean)
        , J = yield Y.isRTL == null ? void 0 : Y.isRTL($);
    let X = yield Y.getElementRects({
        reference: R,
        floating: $,
        strategy: V
    })
        , { x: re, y: oe } = computeCoordsFromPlacement(X, U, J)
        , ie = U
        , se = {}
        , le = 0;
    for (let ue = 0; ue < Z.length; ue++) {
        const { name: pe, fn: Ee } = Z[ue]
            , { x: Ce, y: ke, data: Ue, reset: be } = yield Ee({
                x: re,
                y: oe,
                initialPlacement: U,
                placement: ie,
                strategy: V,
                middlewareData: se,
                rects: X,
                platform: Y,
                elements: {
                    reference: R,
                    floating: $
                }
            });
        if (re = Ce ?? re,
            oe = ke ?? oe,
            se = __spreadProps(__spreadValues({}, se), {
                [pe]: __spreadValues(__spreadValues({}, se[pe]), Ue)
            }),
            be && le <= 50) {
            le++,
                typeof be == "object" && (be.placement && (ie = be.placement),
                    be.rects && (X = be.rects === !0 ? yield Y.getElementRects({
                        reference: R,
                        floating: $,
                        strategy: V
                    }) : be.rects),
                    { x: re, y: oe } = computeCoordsFromPlacement(X, ie, J)),
                ue = -1;
            continue
        }
    }
    return {
        x: re,
        y: oe,
        placement: ie,
        strategy: V,
        middlewareData: se
    }
});
function rectToClientRect(R) {
    return __spreadProps(__spreadValues({}, R), {
        top: R.y,
        left: R.x,
        right: R.x + R.width,
        bottom: R.y + R.height
    })
}
function getWindow(R) {
    var $;
    return (($ = R.ownerDocument) == null ? void 0 : $.defaultView) || window
}
function getComputedStyle$1(R) {
    return getWindow(R).getComputedStyle(R)
}
function getNodeName(R) {
    return isNode(R) ? (R.nodeName || "").toLowerCase() : ""
}
let uaString;
function getUAString() {
    if (uaString)
        return uaString;
    const R = navigator.userAgentData;
    return R && Array.isArray(R.brands) ? (uaString = R.brands.map($ => $.brand + "/" + $.version).join(" "),
        uaString) : navigator.userAgent
}
function isHTMLElement(R) {
    return R instanceof getWindow(R).HTMLElement
}
function isElement(R) {
    return R instanceof getWindow(R).Element
}
function isNode(R) {
    return R instanceof getWindow(R).Node
}
function isShadowRoot(R) {
    if (typeof ShadowRoot > "u")
        return !1;
    const $ = getWindow(R).ShadowRoot;
    return R instanceof $ || R instanceof ShadowRoot
}
function isOverflowElement(R) {
    const { overflow: $, overflowX: W, overflowY: U, display: V } = getComputedStyle$1(R);
    return /auto|scroll|overlay|hidden/.test($ + U + W) && !["inline", "contents"].includes(V)
}
function isTableElement(R) {
    return ["table", "td", "th"].includes(getNodeName(R))
}
function isContainingBlock(R) {
    const $ = /firefox/i.test(getUAString())
        , W = getComputedStyle$1(R)
        , U = W.backdropFilter || W.WebkitBackdropFilter;
    return W.transform !== "none" || W.perspective !== "none" || (U ? U !== "none" : !1) || $ && W.willChange === "filter" || $ && (W.filter ? W.filter !== "none" : !1) || ["transform", "perspective"].some(V => W.willChange.includes(V)) || ["paint", "layout", "strict", "content"].some(V => {
        const K = W.contain;
        return K != null ? K.includes(V) : !1
    }
    )
}
function isLayoutViewport() {
    return !/^((?!chrome|android).)*safari/i.test(getUAString())
}
function isLastTraversableNode(R) {
    return ["html", "body", "#document"].includes(getNodeName(R))
}
const min = Math.min
    , max = Math.max
    , round = Math.round
    , FALLBACK_SCALE = {
        x: 1,
        y: 1
    };
function getScale(R) {
    const $ = !isElement(R) && R.contextElement ? R.contextElement : isElement(R) ? R : null;
    if (!$)
        return FALLBACK_SCALE;
    const W = $.getBoundingClientRect()
        , U = getComputedStyle$1($);
    if (U.boxSizing !== "border-box")
        return isHTMLElement($) ? {
            x: $.offsetWidth > 0 && round(W.width) / $.offsetWidth || 1,
            y: $.offsetHeight > 0 && round(W.height) / $.offsetHeight || 1
        } : FALLBACK_SCALE;
    let V = W.width / parseFloat(U.width)
        , K = W.height / parseFloat(U.height);
    return (!V || !Number.isFinite(V)) && (V = 1),
        (!K || !Number.isFinite(K)) && (K = 1),
    {
        x: V,
        y: K
    }
}
function getBoundingClientRect(R, $, W, U) {
    var V, K, Y, Z;
    $ === void 0 && ($ = !1),
        W === void 0 && (W = !1);
    const J = R.getBoundingClientRect();
    let X = FALLBACK_SCALE;
    $ && (U ? isElement(U) && (X = getScale(U)) : X = getScale(R));
    const re = isElement(R) ? getWindow(R) : window
        , oe = !isLayoutViewport() && W
        , ie = (J.left + (oe && (V = (K = re.visualViewport) == null ? void 0 : K.offsetLeft) != null ? V : 0)) / X.x
        , se = (J.top + (oe && (Y = (Z = re.visualViewport) == null ? void 0 : Z.offsetTop) != null ? Y : 0)) / X.y
        , le = J.width / X.x
        , ue = J.height / X.y;
    return {
        width: le,
        height: ue,
        top: se,
        right: ie + le,
        bottom: se + ue,
        left: ie,
        x: ie,
        y: se
    }
}
function getDocumentElement(R) {
    return ((isNode(R) ? R.ownerDocument : R.document) || window.document).documentElement
}
function getNodeScroll(R) {
    return isElement(R) ? {
        scrollLeft: R.scrollLeft,
        scrollTop: R.scrollTop
    } : {
        scrollLeft: R.pageXOffset,
        scrollTop: R.pageYOffset
    }
}
function getWindowScrollBarX(R) {
    return getBoundingClientRect(getDocumentElement(R)).left + getNodeScroll(R).scrollLeft
}
function getRectRelativeToOffsetParent(R, $, W) {
    const U = isHTMLElement($)
        , V = getDocumentElement($)
        , K = getBoundingClientRect(R, !0, W === "fixed", $);
    let Y = {
        scrollLeft: 0,
        scrollTop: 0
    };
    const Z = {
        x: 0,
        y: 0
    };
    if (U || !U && W !== "fixed")
        if ((getNodeName($) !== "body" || isOverflowElement(V)) && (Y = getNodeScroll($)),
            isHTMLElement($)) {
            const J = getBoundingClientRect($, !0);
            Z.x = J.x + $.clientLeft,
                Z.y = J.y + $.clientTop
        } else
            V && (Z.x = getWindowScrollBarX(V));
    return {
        x: K.left + Y.scrollLeft - Z.x,
        y: K.top + Y.scrollTop - Z.y,
        width: K.width,
        height: K.height
    }
}
function getParentNode(R) {
    if (getNodeName(R) === "html")
        return R;
    const $ = R.assignedSlot || R.parentNode || (isShadowRoot(R) ? R.host : null) || getDocumentElement(R);
    return isShadowRoot($) ? $.host : $
}
function getTrueOffsetParent(R) {
    return !isHTMLElement(R) || getComputedStyle$1(R).position === "fixed" ? null : R.offsetParent
}
function getContainingBlock(R) {
    let $ = getParentNode(R);
    for (; isHTMLElement($) && !isLastTraversableNode($);) {
        if (isContainingBlock($))
            return $;
        $ = getParentNode($)
    }
    return null
}
function getOffsetParent(R) {
    const $ = getWindow(R);
    let W = getTrueOffsetParent(R);
    for (; W && isTableElement(W) && getComputedStyle$1(W).position === "static";)
        W = getTrueOffsetParent(W);
    return W && (getNodeName(W) === "html" || getNodeName(W) === "body" && getComputedStyle$1(W).position === "static" && !isContainingBlock(W)) ? $ : W || getContainingBlock(R) || $
}
function getDimensions(R) {
    if (isHTMLElement(R))
        return {
            width: R.offsetWidth,
            height: R.offsetHeight
        };
    const $ = getBoundingClientRect(R);
    return {
        width: $.width,
        height: $.height
    }
}
function convertOffsetParentRelativeRectToViewportRelativeRect(R) {
    let { rect: $, offsetParent: W, strategy: U } = R;
    const V = isHTMLElement(W)
        , K = getDocumentElement(W);
    if (W === K)
        return $;
    let Y = {
        scrollLeft: 0,
        scrollTop: 0
    }
        , Z = {
            x: 1,
            y: 1
        };
    const J = {
        x: 0,
        y: 0
    };
    if ((V || !V && U !== "fixed") && ((getNodeName(W) !== "body" || isOverflowElement(K)) && (Y = getNodeScroll(W)),
        isHTMLElement(W))) {
        const X = getBoundingClientRect(W);
        Z = getScale(W),
            J.x = X.x + W.clientLeft,
            J.y = X.y + W.clientTop
    }
    return {
        width: $.width * Z.x,
        height: $.height * Z.y,
        x: $.x * Z.x - Y.scrollLeft * Z.x + J.x,
        y: $.y * Z.y - Y.scrollTop * Z.y + J.y
    }
}
function getViewportRect(R, $) {
    const W = getWindow(R)
        , U = getDocumentElement(R)
        , V = W.visualViewport;
    let K = U.clientWidth
        , Y = U.clientHeight
        , Z = 0
        , J = 0;
    if (V) {
        K = V.width,
            Y = V.height;
        const X = isLayoutViewport();
        (X || !X && $ === "fixed") && (Z = V.offsetLeft,
            J = V.offsetTop)
    }
    return {
        width: K,
        height: Y,
        x: Z,
        y: J
    }
}
function getDocumentRect(R) {
    var $;
    const W = getDocumentElement(R)
        , U = getNodeScroll(R)
        , V = ($ = R.ownerDocument) == null ? void 0 : $.body
        , K = max(W.scrollWidth, W.clientWidth, V ? V.scrollWidth : 0, V ? V.clientWidth : 0)
        , Y = max(W.scrollHeight, W.clientHeight, V ? V.scrollHeight : 0, V ? V.clientHeight : 0);
    let Z = -U.scrollLeft + getWindowScrollBarX(R);
    const J = -U.scrollTop;
    return getComputedStyle$1(V || W).direction === "rtl" && (Z += max(W.clientWidth, V ? V.clientWidth : 0) - K),
    {
        width: K,
        height: Y,
        x: Z,
        y: J
    }
}
function getNearestOverflowAncestor(R) {
    const $ = getParentNode(R);
    return isLastTraversableNode($) ? R.ownerDocument.body : isHTMLElement($) && isOverflowElement($) ? $ : getNearestOverflowAncestor($)
}
function getOverflowAncestors(R, $) {
    var W;
    $ === void 0 && ($ = []);
    const U = getNearestOverflowAncestor(R)
        , V = U === ((W = R.ownerDocument) == null ? void 0 : W.body)
        , K = getWindow(U);
    return V ? $.concat(K, K.visualViewport || [], isOverflowElement(U) ? U : []) : $.concat(U, getOverflowAncestors(U))
}
function getInnerBoundingClientRect(R, $) {
    const W = getBoundingClientRect(R, !0, $ === "fixed")
        , U = W.top + R.clientTop
        , V = W.left + R.clientLeft
        , K = isHTMLElement(R) ? getScale(R) : {
            x: 1,
            y: 1
        }
        , Y = R.clientWidth * K.x
        , Z = R.clientHeight * K.y
        , J = V * K.x
        , X = U * K.y;
    return {
        top: X,
        left: J,
        right: J + Y,
        bottom: X + Z,
        x: J,
        y: X,
        width: Y,
        height: Z
    }
}
function getClientRectFromClippingAncestor(R, $, W) {
    return $ === "viewport" ? rectToClientRect(getViewportRect(R, W)) : isElement($) ? getInnerBoundingClientRect($, W) : rectToClientRect(getDocumentRect(getDocumentElement(R)))
}
function getClippingElementAncestors(R, $) {
    const W = $.get(R);
    if (W)
        return W;
    let U = getOverflowAncestors(R).filter(Z => isElement(Z) && getNodeName(Z) !== "body")
        , V = null;
    const K = getComputedStyle$1(R).position === "fixed";
    let Y = K ? getParentNode(R) : R;
    for (; isElement(Y) && !isLastTraversableNode(Y);) {
        const Z = getComputedStyle$1(Y)
            , J = isContainingBlock(Y);
        (K ? !J && !V : !J && Z.position === "static" && !!V && ["absolute", "fixed"].includes(V.position)) ? U = U.filter(re => re !== Y) : V = Z,
            Y = getParentNode(Y)
    }
    return $.set(R, U),
        U
}
function getClippingRect(R) {
    let { element: $, boundary: W, rootBoundary: U, strategy: V } = R;
    const Y = [...W === "clippingAncestors" ? getClippingElementAncestors($, this._c) : [].concat(W), U]
        , Z = Y[0]
        , J = Y.reduce((X, re) => {
            const oe = getClientRectFromClippingAncestor($, re, V);
            return X.top = max(oe.top, X.top),
                X.right = min(oe.right, X.right),
                X.bottom = min(oe.bottom, X.bottom),
                X.left = max(oe.left, X.left),
                X
        }
            , getClientRectFromClippingAncestor($, Z, V));
    return {
        width: J.right - J.left,
        height: J.bottom - J.top,
        x: J.left,
        y: J.top
    }
}
const platform = {
    getClippingRect,
    convertOffsetParentRelativeRectToViewportRelativeRect,
    isElement,
    getDimensions,
    getOffsetParent,
    getDocumentElement,
    getScale,
    getElementRects(R) {
        return __async(this, null, function* () {
            let { reference: $, floating: W, strategy: U } = R;
            const V = this.getOffsetParent || getOffsetParent
                , K = this.getDimensions;
            return {
                reference: getRectRelativeToOffsetParent($, yield V(W), U),
                floating: __spreadValues({
                    x: 0,
                    y: 0
                }, yield K(W))
            }
        })
    },
    getClientRects: R => Array.from(R.getClientRects()),
    isRTL: R => getComputedStyle$1(R).direction === "rtl"
};
function autoUpdate(R, $, W, U) {
    U === void 0 && (U = {});
    const { ancestorScroll: V = !0, ancestorResize: K = !0, elementResize: Y = !0, animationFrame: Z = !1 } = U
        , J = V && !Z
        , X = J || K ? [...isElement(R) ? getOverflowAncestors(R) : R.contextElement ? getOverflowAncestors(R.contextElement) : [], ...getOverflowAncestors($)] : [];
    X.forEach(le => {
        J && le.addEventListener("scroll", W, {
            passive: !0
        }),
            K && le.addEventListener("resize", W)
    }
    );
    let re = null;
    if (Y) {
        let le = !0;
        re = new ResizeObserver(() => {
            le || W(),
                le = !1
        }
        ),
            isElement(R) && !Z && re.observe(R),
            !isElement(R) && R.contextElement && !Z && re.observe(R.contextElement),
            re.observe($)
    }
    let oe, ie = Z ? getBoundingClientRect(R) : null;
    Z && se();
    function se() {
        const le = getBoundingClientRect(R);
        ie && (le.x !== ie.x || le.y !== ie.y || le.width !== ie.width || le.height !== ie.height) && W(),
            ie = le,
            oe = requestAnimationFrame(se)
    }
    return W(),
        () => {
            var le;
            X.forEach(ue => {
                J && ue.removeEventListener("scroll", W),
                    K && ue.removeEventListener("resize", W)
            }
            ),
                (le = re) == null || le.disconnect(),
                re = null,
                Z && cancelAnimationFrame(oe)
        }
}
const computePosition = (R, $, W) => {
    const U = new Map
        , V = __spreadValues({
            platform
        }, W)
        , K = __spreadProps(__spreadValues({}, V.platform), {
            _c: U
        });
    return computePosition$1(R, $, __spreadProps(__spreadValues({}, V), {
        platform: K
    }))
}
    ;
function P(R, $, W) {
    let U = () => {
        var oe;
        return (oe = W == null ? void 0 : W.placement) != null ? oe : "bottom"
    }
        , V = () => {
            var oe;
            return (oe = W == null ? void 0 : W.strategy) != null ? oe : "absolute"
        }
        , [K, Y] = createSignal({
            x: null,
            y: null,
            placement: U(),
            strategy: V(),
            middlewareData: {}
        })
        , [Z, J] = createSignal();
    createEffect(() => {
        let oe = Z();
        if (oe)
            throw oe.value
    }
    );
    let X = createMemo(() => (R(),
        $(),
        {}));
    function re() {
        let oe = R()
            , ie = $();
        if (oe && ie) {
            let se = X();
            computePosition(oe, ie, {
                middleware: W == null ? void 0 : W.middleware,
                placement: U(),
                strategy: V()
            }).then(le => {
                se === X() && Y(le)
            }
                , le => {
                    J(le)
                }
            )
        }
    }
    return createEffect(() => {
        let oe = R()
            , ie = $();
        if (W == null || W.middleware,
            U(),
            V(),
            oe && ie)
            if (W != null && W.whileElementsMounted) {
                let se = W.whileElementsMounted(oe, ie, re);
                se && onCleanup(se)
            } else
                re()
    }
    ),
    {
        get x() {
            return K().x
        },
        get y() {
            return K().y
        },
        get placement() {
            return K().placement
        },
        get strategy() {
            return K().strategy
        },
        get middlewareData() {
            return K().middlewareData
        },
        update: re
    }
}
const _tmpl$$3 = template$1('<tc-root data-tc-dropdown-container="true"></tc-root>')
    , AccountButton = () => {
        const R = useTheme()
            , $ = useContext(ConnectorContext)
            , W = useContext(TonConnectUiContext)
            , [U, V] = createSignal(!1)
            , [K, Y] = createSignal($.account)
            , [Z, J] = createSignal(!$.account);
        let X;
        const [re, oe] = createSignal()
            , [ie, se] = createSignal()
            , le = P(ie, re, {
                whileElementsMounted: autoUpdate,
                placement: "bottom-end"
            })
            , ue = () => {
                const Ce = K();
                if (Ce) {
                    const ke = toUserFriendlyAddress(Ce.address, Ce.chain === CHAIN.TESTNET);
                    return ke.slice(0, 4) + "…" + ke.slice(-4)
                }
                return ""
            }
            ;
        W.connectionRestored.then(() => J(!1));
        const pe = $.onStatusChange(Ce => {
            if (!Ce) {
                V(!1),
                    Y(null),
                    J(!1);
                return
            }
            Y(Ce.account),
                J(!1)
        }
        )
            , Ee = Ce => {
                if (!K() || !U())
                    return;
                const ke = ie().contains(Ce.target)
                    , Ue = X.contains(Ce.target);
                !ke && !Ue && V(!1)
            }
            ;
        return onMount(() => {
            document.body.addEventListener("click", Ee)
        }
        ),
            onCleanup(() => {
                document.body.removeEventListener("click", Ee),
                    pe()
            }
            ),
            createComponent(Dynamic, {
                component: globalStylesTag,
                get children() {
                    return [createComponent(Show, {
                        get when() {
                            return Z()
                        },
                        get children() {
                            return createComponent(LoaderButtonStyled$1, {
                                disabled: !0,
                                "data-tc-connect-button-loading": "true",
                                get children() {
                                    return createComponent(LoaderIconStyled$1, {})
                                }
                            })
                        }
                    }), createComponent(Show, {
                        get when() {
                            return !Z()
                        },
                        get children() {
                            return [createComponent(Show, {
                                get when() {
                                    return !K()
                                },
                                get children() {
                                    return createComponent(AccountButtonStyled, {
                                        onClick: () => W.openModal(),
                                        "data-tc-connect-button": "true",
                                        scale: "s",
                                        get children() {
                                            return [createComponent(TonIcon, {
                                                get fill() {
                                                    return R.colors.connectButton.foreground
                                                }
                                            }), createComponent(Text, {
                                                translationKey: "button.connectWallet",
                                                fontSize: "15px",
                                                lineHeight: "18px",
                                                fontWeight: "590",
                                                get color() {
                                                    return R.colors.connectButton.foreground
                                                },
                                                children: "Connect wallet"
                                            })]
                                        }
                                    })
                                }
                            }), createComponent(Show, {
                                get when() {
                                    return K()
                                },
                                get children() {
                                    return createComponent(DropdownContainerStyled, {
                                        get children() {
                                            return [createComponent(DropdownButtonStyled, {
                                                onClick: () => V(Ce => !Ce),
                                                ref: se,
                                                "data-tc-dropdown-button": "true",
                                                scale: "s",
                                                get children() {
                                                    return [createComponent(Text, {
                                                        fontSize: "15px",
                                                        fontWeight: "590",
                                                        lineHeight: "18px",
                                                        get children() {
                                                            return ue()
                                                        }
                                                    }), createComponent(ArrowIcon, {
                                                        direction: "bottom"
                                                    })]
                                                }
                                            }), createComponent(Portal, {
                                                get children() {
                                                    const Ce = untrack(() => document.importNode(_tmpl$$3, !0));
                                                    return use(oe, Ce),
                                                        Ce.style.setProperty("z-index", "999"),
                                                        Ce._$owner = getOwner(),
                                                        insert(Ce, createComponent(Transition, {
                                                            onBeforeEnter: ke => {
                                                                animate(ke, [{
                                                                    opacity: 0,
                                                                    transform: "translateY(-8px)"
                                                                }, {
                                                                    opacity: 1,
                                                                    transform: "translateY(0)"
                                                                }], {
                                                                    duration: 150
                                                                })
                                                            }
                                                            ,
                                                            onExit: (ke, Ue) => {
                                                                animate(ke, [{
                                                                    opacity: 1,
                                                                    transform: "translateY(0)"
                                                                }, {
                                                                    opacity: 0,
                                                                    transform: "translateY(-8px)"
                                                                }], {
                                                                    duration: 150
                                                                }).finished.then(Ue)
                                                            }
                                                            ,
                                                            get children() {
                                                                return createComponent(Show, {
                                                                    get when() {
                                                                        return U()
                                                                    },
                                                                    get children() {
                                                                        return createComponent(DropdownStyled, {
                                                                            get hidden() {
                                                                                return !U()
                                                                            },
                                                                            onClose: () => V(!1),
                                                                            ref(ke) {
                                                                                const Ue = X;
                                                                                typeof Ue == "function" ? Ue(ke) : X = ke
                                                                            }
                                                                        })
                                                                    }
                                                                })
                                                            }
                                                        }), null),
                                                        insert(Ce, createComponent(NotificationsStyled, {}), null),
                                                        createRenderEffect(ke => {
                                                            var Ue, be;
                                                            const Be = le.strategy
                                                                , xe = `${(Ue = le.y) != null ? Ue : 0}px`
                                                                , ye = `${(be = le.x) != null ? be : 0}px`;
                                                            return Be !== ke._v$ && Ce.style.setProperty("position", ke._v$ = Be),
                                                                xe !== ke._v$2 && Ce.style.setProperty("top", ke._v$2 = xe),
                                                                ye !== ke._v$3 && Ce.style.setProperty("left", ke._v$3 = ye),
                                                                ke
                                                        }
                                                            , {
                                                                _v$: void 0,
                                                                _v$2: void 0,
                                                                _v$3: void 0
                                                            }),
                                                        Ce
                                                }
                                            })]
                                        }
                                    })
                                }
                            })]
                        }
                    })]
                }
            })
    }
    , StyledModal = styled(Modal)`
    padding-left: 24px;
    padding-right: 24px;
    padding-top: 18px;
    padding-bottom: 0;

    ${media("mobile")} {
        padding-left: 0;
        padding-right: 0;

        min-height: 364px;
    }
`
    , H1Styled$8 = styled(H1)`
    margin-top: 12px;

    ${media("mobile")} {
        padding: 0 10px;
    }
`
    , LoaderContainerStyled = styled.div`
    margin: 30px 0;
    width: 100%;
    display: flex;
    justify-content: center;

    ${media("mobile")} {
        height: 160px;
        align-items: center;
    }
`;
styled(Text)`
    min-width: 84px;
    text-align: center;
    font-weight: 590;
`;
styled(TabBar)`
    margin: 0 auto 22px;
`;
const [appState, setAppState] = createStore({
    buttonRootId: null,
    language: "en",
    returnStrategy: "back",
    twaReturnUrl: void 0,
    walletsListConfiguration: {},
    enableAndroidBackHandler: !0
});
function uniq(R) {
    return [...new Set(R)]
}
function mergeConcat(R, $, W) {
    return $.map(U => {
        const V = W.find(K => K[R] === U[R]);
        return W = W.filter(K => K[R] !== U[R]),
            V === void 0 ? U : V
    }
    ).concat(W)
}
function uiWalletToWalletInfo(R) {
    return "jsBridgeKey" in R ? __spreadProps(__spreadValues({}, R), {
        injected: TonConnect.isWalletInjected(R.jsBridgeKey),
        embedded: TonConnect.isInsideWalletBrowser(R.jsBridgeKey)
    }) : R
}
function applyWalletsListConfiguration(R, $) {
    var W;
    return $ && (W = $.includeWallets) != null && W.length && (R = mergeConcat("name", R, $.includeWallets.map(uiWalletToWalletInfo))),
        R
}
function supportsDesktop(R) {
    return R.platforms.some($ => ["macos", "linux", "windows"].includes($))
}
function supportsMobile(R) {
    return R.platforms.some($ => ["ios", "android"].includes($))
}
function supportsExtension(R) {
    return R.platforms.some($ => ["chrome", "firefox", "safari"].includes($))
}
function eqWalletName(R, $) {
    return $ ? R.name.toLowerCase() === $.toLowerCase() || R.appName.toLowerCase() === $.toLowerCase() : !1
}
const DesktopSelectWalletModalStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
    , H1Styled$7 = styled(H1)`
    margin-bottom: 18px;
`;
styled.div`
    height: 1px;
    margin: 0 -24px;
    width: calc(100% + 48px);
    opacity: 0.12;
    background: ${R => R.isShown ? R.theme.colors.icon.secondary : "transparent"};
    transition: background 0.15s ease-in-out;

    ${media("mobile")} {
        width: 100%;
    }
`;
const WalletsUl = styled.ul`
    display: grid;
    grid-template-columns: repeat(auto-fit, 92px);
    grid-template-rows: auto;
    align-content: flex-start;
    justify-content: center;
    row-gap: 8px;
    width: 100%;
    padding: 0 0 16px;
    align-self: flex-start;
    max-width: 400px;
    margin: 0 auto;

    > li {
        display: block;
        height: fit-content;
    }

    ${media("mobile")} {
        grid-template-columns: repeat(auto-fit, 82px);
    }
`;
styled(Button)`
    display: block;
    margin: 0 auto 1px;
    font-size: 15px;
`;
const StyledIconButton$3 = styled(IconButton)`
    position: absolute;
    top: 16px;
    left: 16px;
`
    , WalletLabeledItemStyled = styled(WalletLabeledItem)`
    height: 100%;
`
    , _tmpl$$2 = template$1("<li></li>")
    , AllWalletsListModal = R => {
        const $ = () => void 0
            , W = () => R.walletsList.filter(supportsMobile)
        return createComponent(DesktopSelectWalletModalStyled, {
            "data-tc-wallets-modal-list": "true",
            get children() {
                return [createComponent(StyledIconButton$3, {
                    icon: "arrow",
                    onClick: () => R.onBack()
                }), createComponent(H1Styled$7, {
                    translationKey: "walletModal.wallets",
                    children: "Wallets"
                }), createComponent(ScrollContainer, {
                    get maxHeight() {
                        return $()
                    },
                    get children() {
                        return createComponent(WalletsUl, {
                            get children() {
                                return createComponent(For, {
                                    get each() {
                                        return W()
                                    },
                                    children: U => (() => {
                                        const V = _tmpl$$2.cloneNode(!0);
                                        return insert(V, createComponent(WalletLabeledItemStyled, {
                                            wallet: U,
                                            onClick: () => R.onSelect(U)
                                        })),
                                            V
                                    }
                                    )()
                                })
                            }
                        })
                    }
                })]
            }
        })
    }
    , tgButtonBorders = {
        m: "16px",
        s: "12px",
        none: "0"
    }
    , tgIconBorders = {
        m: "6px",
        s: "6px",
        none: "0"
    }
    , DesktopConnectionModalStyled = styled.div`
    display: flex;
    flex-direction: column;
`
    , BodyStyled$1 = styled.div`
    flex: 1;
    margin-top: ${R => R.qr ? "0" : "18px"};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 232px;
`
    , QRCodeStyled$1 = styled(QRCode)`
    margin-bottom: 24px;
`
    , H1Styled$6 = styled(H1)`
    max-width: 288px;
    margin: 0 auto 2px;
`
    , H2Styled$4 = styled(H2)`
    max-width: 288px;
    text-align: center;
    margin: 0 auto 20px;
`
    , StyledIconButton$2 = styled(IconButton)`
    position: absolute;
    top: 16px;
    left: 16px;
`
    , ButtonsContainerStyled$1 = styled.div`
    display: flex;
    justify-content: center;
    gap: 8px;
    padding-bottom: 16px;
`
    , BottomButtonsContainerStyled = styled(ButtonsContainerStyled$1)`
    padding-bottom: 0;
`
    , FooterButton$1 = styled(Button)`
    margin-bottom: 24px;
`
    , LoaderStyled$1 = styled(LoaderIcon)`
    margin-bottom: 18px;
    margin-top: 2px;
`
    , ErrorIconStyled$1 = styled(ErrorIcon)`
    margin-bottom: 16px;
`
    , BodyTextStyled$1 = styled(H2)`
    color: ${R => R.theme.colors.text.secondary};
    text-align: center;
    margin-bottom: 20px;
`
    , TgButtonStyled = styled(Button)`
    margin-top: -8px;
    margin-bottom: 24px;
    width: 100%;
    padding: 12px 12px 12px 20px;
    border-radius: ${R => tgButtonBorders[R.theme.borderRadius]};
    font-size: 16px;
    line-height: 20px;
`
    , TgImageStyled = styled(Image)`
    width: 32px;
    height: 32px;
    border-radius: ${R => tgIconBorders[R.theme.borderRadius]};
`
    , Translation = R => {
        const [$] = useI18n();
        return createMemo(() => {
            var W;
            return $(R.translationKey, R.translationValues, (W = R.children) == null ? void 0 : W.toString())
        }
        )
    }
    ;
function addReturnStrategy(R, $) {
    let W;
    typeof $ == "string" ? W = $ : W = isInTMA() ? $.twaReturnUrl || $.returnStrategy : "none";
    const U = addQueryParameter(R, "ret", W);
    if (!isTelegramUrl(R))
        return U;
    const V = U.slice(U.lastIndexOf("&") + 1);
    return U.slice(0, U.lastIndexOf("&")) + "-" + encodeTelegramUrlParameters(V)
}
function redirectToTelegram(R, $) {
    $ = __spreadValues({}, $);
    const W = convertToTGDirectLink(R)
        , U = new URL(W);
    if (U.searchParams.has("startapp") || U.searchParams.append("startapp", "tonconnect"),
        isInTMA())
        ($.returnStrategy = "back",
            $.twaReturnUrl = void 0,
            sendOpenTelegramLink(addReturnStrategy(U.toString(), $)))
    else if (isOS("ios")) {
        $.returnStrategy === "back" && (isBrowser("safari") ? $.returnStrategy = "back" : isBrowser("chrome") ? $.returnStrategy = "googlechrome://" : isBrowser("firefox") ? $.returnStrategy = "firefox://" : isBrowser("opera") ? $.returnStrategy = "opera-http://" : $.returnStrategy = location.href);
        const V = isBrowser("chrome")
            , K = isBrowser("firefox");
        if ((V || K) && !$.forceRedirect) {
            const Z = addReturnStrategy(U.toString(), $.returnStrategy)
                , J = convertToTGDeepLink(Z);
            openDeeplinkWithFallback(J, () => openLinkBlank(Z))
        } else {
            const Z = addReturnStrategy(U.toString(), $.returnStrategy);
            openLinkBlank(Z)
        }
    } else if (isOS("android")) {
        $.returnStrategy = "none";
        const V = isBrowser("chrome")
            , K = isBrowser("firefox");
        if ((V || K) && !$.forceRedirect) {
            const Z = addReturnStrategy(U.toString(), $.returnStrategy)
                , J = convertToTGDeepLink(Z);
            openDeeplinkWithFallback(J, () => openLinkBlank(Z))
        } else {
            const Z = addReturnStrategy(U.toString(), $.returnStrategy);
            openLinkBlank(Z)
        }
    } else if (isOS("ipad")) {
        $.returnStrategy === "back" && (isBrowser("safari") ? $.returnStrategy = "back" : isBrowser("chrome") ? $.returnStrategy = "googlechrome://" : isBrowser("firefox") ? $.returnStrategy = "firefox://" : isBrowser("opera") ? $.returnStrategy = "opera-http://" : $.returnStrategy = location.href);
        const V = isBrowser("chrome")
            , K = isBrowser("firefox");
        if ((V || K) && !$.forceRedirect) {
            const Z = addReturnStrategy(U.toString(), $.returnStrategy)
                , J = convertToTGDeepLink(Z);
            openDeeplinkWithFallback(J, () => openLinkBlank(Z))
        } else {
            const Z = addReturnStrategy(U.toString(), $.returnStrategy);
            openLinkBlank(Z)
        }
    } else if (isOS("macos", "windows", "linux"))
        $.returnStrategy = "none";
    const V = isBrowser("chrome")
        , K = isBrowser("firefox");
    if ((V || K) && !$.forceRedirect) {
        const Z = addReturnStrategy(U.toString(), $.returnStrategy)
            , J = convertToTGDeepLink(Z);
        openDeeplinkWithFallback(J, () => openLinkBlank(Z))
    } else {
        const Z = addReturnStrategy(U.toString(), $.returnStrategy);
        openLinkBlank(Z)
    }
}
function redirectToWallet(R, $, W, U) {
    if (W = __spreadValues({}, W),
        isInTMA())
        if (isTmaPlatform("ios", "android")) {
            W.returnStrategy === "back" && (W.returnStrategy = "tg://resolve"),
                U("universal-link");
            const V = addReturnStrategy(R, W.returnStrategy);
            sendOpenTelegramLink(V, () => {
                U("universal-link"),
                    openLinkBlank(V)
            }
            )
        } else if (isTmaPlatform("macos", "tdesktop")) {
            W.returnStrategy === "back" && (W.returnStrategy = "tg://resolve"),
                U("universal-link");
            const V = addReturnStrategy(R, W.returnStrategy);
            sendOpenTelegramLink(V, () => {
                U("universal-link"),
                    openLinkBlank(V)
            }
            )
        } else if (isTmaPlatform("weba")) {
            W.returnStrategy === "back" && (W.returnStrategy = "tg://resolve"),
                U("universal-link");
            const V = addReturnStrategy(R, W.returnStrategy);
            sendOpenTelegramLink(V, () => {
                U("universal-link"),
                    openLinkBlank(V)
            }
            )
        } else if (isTmaPlatform("web")) {
            W.returnStrategy === "back" && (W.returnStrategy = "tg://resolve"),
                U("universal-link");
            const V = addReturnStrategy(R, W.returnStrategy);
            sendOpenTelegramLink(V, () => {
                U("universal-link"),
                    openLinkBlank(V)
            }
            )
        } else {
            W.returnStrategy === "back" && (W.returnStrategy = "tg://resolve"),
                U("universal-link");
            const V = addReturnStrategy(R, W.returnStrategy);
            sendOpenTelegramLink(V, () => {
                U("universal-link"),
                    openLinkBlank(V)
            }
            )
        }
    else if (isOS("ios"))
        (U("universal-link"),
            openLinkBlank(addReturnStrategy(R, W.returnStrategy)))
    else if (isOS("android"))
        (U("universal-link"),
            openLinkBlank(addReturnStrategy(R, W.returnStrategy)))
    else if (isOS("ipad"))
        (U("universal-link"),
            openLinkBlank(addReturnStrategy(R, W.returnStrategy)))
    else if (isOS("macos", "windows", "linux")) {
        (U("universal-link"),
            openLinkBlank(addReturnStrategy(R, W.returnStrategy)))
    } else
        (U("universal-link"),
            openLinkBlank(addReturnStrategy(R, W.returnStrategy)))
}
function addQueryParameter(R, $, W) {
    const U = new URL(R);
    return U.searchParams.append($, W),
        U.toString()
}
function convertToTGDirectLink(R) {
    const $ = new URL(R);
    return $.searchParams.has("attach") && ($.searchParams.delete("attach"),
        $.pathname += "/start"),
        $.toString()
}
function convertToTGDeepLink(R) {
    const $ = new URL(R)
        , [, W, U] = $.pathname.split("/")
        , V = $.searchParams.get("startapp");
    return `tg://resolve?domain=${W}&appname=${U}&startapp=${V}`
}
const DesktopConnectionModal = R => {
    const [$, W] = createSignal("mobile")
        , [U, V] = createSignal(!1)
        , [K, Y] = createSignal()
        , [Z, J] = createSignal(!0)
        , X = useContext(ConnectorContext)
        , re = X.onStatusChange(() => { }
            , () => {
                R.wallet.appName !== AT_WALLET_APP_NAME && V(!0)
            }
        );
    onCleanup(re);
    const oe = () => {
        try {
            const pe = X.connect({
                universalLink: R.wallet.universalLink,
                bridgeUrl: R.wallet.bridgeUrl
            }, R.additionalRequest);
            Y(pe)
        } catch { }
    }
        ;
    createEffect(() => {
        untrack($) !== "extension" && (supportsMobile(R.wallet) || supportsDesktop(R.wallet)) && oe()
    }
    );
    const ie = () => {
        V(!1),
            $() === "extension" && oe(),
            W("mobile"),
            setLastSelectedWalletInfo(__spreadProps(__spreadValues({}, R.wallet), {
                openMethod: "qrcode"
            }))
    }
        , se = () => {
            V(!1),
                $() === "extension" && oe(),
                W("desktop");
            const pe = !Z();
            J(!1),
                redirectToWallet(K(), R.wallet.deepLink, {
                    returnStrategy: appState.returnStrategy,
                    forceRedirect: pe
                }, Ee => {
                    setLastSelectedWalletInfo(__spreadProps(__spreadValues({}, R.wallet), {
                        openMethod: Ee
                    }))
                }
                )
        }
        , le = () => {
            const pe = !Z();
            J(!1),
                setLastSelectedWalletInfo(__spreadProps(__spreadValues({}, R.wallet), {
                    openMethod: "universal-link"
                })),
                redirectToTelegram(K(), {
                    returnStrategy: appState.returnStrategy,
                    twaReturnUrl: appState.twaReturnUrl,
                    forceRedirect: pe
                })
        }
        , ue = () => {
            V(!1),
                W("extension"),
                isWalletInfoCurrentlyInjected(R.wallet) && (setLastSelectedWalletInfo(R.wallet),
                    X.connect({
                        jsBridgeKey: R.wallet.jsBridgeKey
                    }, R.additionalRequest))
        }
        ;
    return supportsMobile(R.wallet) ? ie() : supportsExtension(R.wallet) ? ue() : se(),
        createComponent(DesktopConnectionModalStyled, {
            "data-tc-wallets-modal-connection-desktop": "true",
            get children() {
                return [createComponent(Show, {
                    get when() {
                        return !R.backDisabled
                    },
                    get children() {
                        return createComponent(StyledIconButton$2, {
                            icon: "arrow",
                            onClick: () => R.onBackClick()
                        })
                    }
                }), createComponent(H1Styled$6, {
                    get children() {
                        return R.wallet.name
                    }
                }), createComponent(Show, {
                    get when() {
                        return $() === "mobile"
                    },
                    get children() {
                        return createComponent(H2Styled$4, {
                            translationKey: "walletModal.desktopConnectionModal.scanQR",
                            get translationValues() {
                                return {
                                    name: R.wallet.name
                                }
                            },
                            get children() {
                                return ["Scan the QR code below with your phone’s or ", createMemo(() => R.wallet.name), "’s camera"]
                            }
                        })
                    }
                }), createComponent(BodyStyled$1, {
                    get qr() {
                        return $() === "mobile"
                    },
                    get children() {
                        return createComponent(Switch, {
                            get children() {
                                return [createComponent(Match, {
                                    get when() {
                                        return $() === "mobile"
                                    },
                                    get children() {
                                        return createComponent(QRCodeStyled$1, {
                                            disableCopy: !1,
                                            get sourceUrl() {
                                                return addReturnStrategy(K(), "none")
                                            },
                                            get imageUrl() {
                                                return R.wallet.imageUrl
                                            }
                                        })
                                    }
                                }), createComponent(Match, {
                                    get when() {
                                        return U()
                                    },
                                    get children() {
                                        return [createComponent(ErrorIconStyled$1, {
                                            size: "s"
                                        }), createComponent(BodyTextStyled$1, {
                                            translationKey: "walletModal.desktopConnectionModal.connectionDeclined",
                                            children: "Connection declined"
                                        }), createComponent(ButtonsContainerStyled$1, {
                                            get children() {
                                                return createComponent(Button, {
                                                    get leftIcon() {
                                                        return createComponent(RetryIcon, {})
                                                    },
                                                    get onClick() {
                                                        return $() === "extension" ? ue : se
                                                    },
                                                    get children() {
                                                        return createComponent(Translation, {
                                                            translationKey: "common.retry",
                                                            children: "Retry"
                                                        })
                                                    }
                                                })
                                            }
                                        })]
                                    }
                                }), createComponent(Match, {
                                    get when() {
                                        return $() === "extension"
                                    },
                                    get children() {
                                        return [createComponent(Show, {
                                            get when() {
                                                return isWalletInfoCurrentlyInjected(R.wallet)
                                            },
                                            get children() {
                                                return [createComponent(LoaderStyled$1, {
                                                    size: "s"
                                                }), createComponent(BodyTextStyled$1, {
                                                    translationKey: "walletModal.desktopConnectionModal.continueInExtension",
                                                    get translationValues() {
                                                        return {
                                                            name: R.wallet.name
                                                        }
                                                    },
                                                    get children() {
                                                        return ["Continue in ", createMemo(() => R.wallet.name), " browser extension…"]
                                                    }
                                                }), createComponent(ButtonsContainerStyled$1, {
                                                    get children() {
                                                        return createComponent(Button, {
                                                            get leftIcon() {
                                                                return createComponent(RetryIcon, {})
                                                            },
                                                            onClick: ue,
                                                            get children() {
                                                                return createComponent(Translation, {
                                                                    translationKey: "common.retry",
                                                                    children: "Retry"
                                                                })
                                                            }
                                                        })
                                                    }
                                                })]
                                            }
                                        }), createComponent(Show, {
                                            get when() {
                                                return !isWalletInfoCurrentlyInjected(R.wallet)
                                            },
                                            get children() {
                                                return [createComponent(BodyTextStyled$1, {
                                                    translationKey: "walletModal.desktopConnectionModal.dontHaveExtension",
                                                    get translationValues() {
                                                        return {
                                                            name: R.wallet.name
                                                        }
                                                    },
                                                    get children() {
                                                        return ["Seems you don't have installed ", createMemo(() => R.wallet.name), " browser extension"]
                                                    }
                                                }), createComponent(ButtonsContainerStyled$1, {
                                                    get children() {
                                                        return createComponent(Link, {
                                                            get href() {
                                                                return R.wallet.aboutUrl
                                                            },
                                                            blank: !0,
                                                            get children() {
                                                                return createComponent(Button, {
                                                                    get rightIcon() {
                                                                        return createComponent(LinkIcon, {})
                                                                    },
                                                                    onClick: ue,
                                                                    get children() {
                                                                        return createComponent(Translation, {
                                                                            translationKey: "walletModal.desktopConnectionModal.getWallet",
                                                                            get translationValues() {
                                                                                return {
                                                                                    name: R.wallet.name
                                                                                }
                                                                            },
                                                                            get children() {
                                                                                return ["Get ", createMemo(() => R.wallet.name)]
                                                                            }
                                                                        })
                                                                    }
                                                                })
                                                            }
                                                        })
                                                    }
                                                })]
                                            }
                                        })]
                                    }
                                }), createComponent(Match, {
                                    get when() {
                                        return $() === "desktop"
                                    },
                                    get children() {
                                        return [createComponent(LoaderIcon, {
                                            size: "m"
                                        }), createComponent(BodyTextStyled$1, {
                                            translationKey: "walletModal.desktopConnectionModal.continueOnDesktop",
                                            get translationValues() {
                                                return {
                                                    name: R.wallet.name
                                                }
                                            },
                                            get children() {
                                                return ["Continue in ", createMemo(() => R.wallet.name), " on desktop…"]
                                            }
                                        }), createComponent(ButtonsContainerStyled$1, {
                                            get children() {
                                                return [createComponent(Button, {
                                                    get leftIcon() {
                                                        return createComponent(RetryIcon, {})
                                                    },
                                                    onClick: se,
                                                    get children() {
                                                        return createComponent(Translation, {
                                                            translationKey: "common.retry",
                                                            children: "Retry"
                                                        })
                                                    }
                                                }), createComponent(Link, {
                                                    get href() {
                                                        return R.wallet.aboutUrl
                                                    },
                                                    blank: !0,
                                                    get children() {
                                                        return createComponent(Button, {
                                                            get rightIcon() {
                                                                return createComponent(LinkIcon, {})
                                                            },
                                                            get children() {
                                                                return createComponent(Translation, {
                                                                    translationKey: "walletModal.desktopConnectionModal.getWallet",
                                                                    get translationValues() {
                                                                        return {
                                                                            name: R.wallet.name
                                                                        }
                                                                    },
                                                                    get children() {
                                                                        return ["Get ", createMemo(() => R.wallet.name)]
                                                                    }
                                                                })
                                                            }
                                                        })
                                                    }
                                                })]
                                            }
                                        })]
                                    }
                                })]
                            }
                        })
                    }
                }), createComponent(Show, {
                    get when() {
                        return R.wallet.appName === AT_WALLET_APP_NAME
                    },
                    get children() {
                        return createComponent(TgButtonStyled, {
                            get rightIcon() {
                                return createComponent(TgImageStyled, {
                                    get src() {
                                        return IMG.TG
                                    }
                                })
                            },
                            scale: "s",
                            onClick: le,
                            get children() {
                                return createComponent(Translation, {
                                    translationKey: "walletModal.desktopConnectionModal.openWalletOnTelegram",
                                    children: "Open Wallet in Telegram on desktop"
                                })
                            }
                        })
                    }
                }), createComponent(Show, {
                    get when() {
                        return R.wallet.appName !== AT_WALLET_APP_NAME
                    },
                    get children() {
                        return createComponent(BottomButtonsContainerStyled, {
                            get children() {
                                return [createComponent(Show, {
                                    get when() {
                                        return createMemo(() => $() !== "mobile")() && supportsMobile(R.wallet)
                                    },
                                    get children() {
                                        return createComponent(FooterButton$1, {
                                            appearance: "secondary",
                                            get leftIcon() {
                                                return createComponent(MobileIcon, {})
                                            },
                                            onClick: ie,
                                            get children() {
                                                return createComponent(Translation, {
                                                    translationKey: "common.mobile",
                                                    children: "Mobile"
                                                })
                                            }
                                        })
                                    }
                                }), createComponent(Show, {
                                    get when() {
                                        return createMemo(() => $() !== "extension")() && supportsExtension(R.wallet)
                                    },
                                    get children() {
                                        return createComponent(FooterButton$1, {
                                            appearance: "secondary",
                                            get leftIcon() {
                                                return createComponent(BrowserIcon, {})
                                            },
                                            onClick: ue,
                                            get children() {
                                                return createComponent(Translation, {
                                                    translationKey: "common.browserExtension",
                                                    children: "Browser Extension"
                                                })
                                            }
                                        })
                                    }
                                }), createComponent(Show, {
                                    get when() {
                                        return createMemo(() => $() !== "desktop")() && supportsDesktop(R.wallet)
                                    },
                                    get children() {
                                        return createComponent(FooterButton$1, {
                                            appearance: "secondary",
                                            get leftIcon() {
                                                return createComponent(DesktopIcon, {})
                                            },
                                            onClick: se,
                                            get children() {
                                                return createComponent(Translation, {
                                                    translationKey: "common.desktop",
                                                    children: "Desktop"
                                                })
                                            }
                                        })
                                    }
                                })]
                            }
                        })
                    }
                })]
            }
        })
}
    , InfoModalStyled = styled.div``
    , StyledIconButton$1 = styled(IconButton)`
    position: absolute;
    top: 16px;
    left: 16px;
`
    , H1Styled$5 = styled(H1)`
    margin-bottom: 18px;
`
    , InfoBlock = styled.div`
    padding: 16px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
`
    , InfoBlockIconClass = u$1`
    margin-bottom: 12px;
`
    , H3Styled = styled(H3)`
    text-align: center;
    margin-bottom: 4px;
`
    , TextStyled$1 = styled(Text)`
    text-align: center;
    max-width: 352px;
    color: ${R => R.theme.colors.text.secondary};
`
    , ButtonsBlock = styled.div`
    padding: 16px 24px 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
`
    , LINKS = {
        GET_A_WALLET: "https://ton.org/wallets?filters[wallet_features][slug][$in]=dapp-auth&pagination[limit]=-1"
    }
    , InfoModal = R => createComponent(InfoModalStyled, {
        "data-tc-wallets-modal-info": "true",
        get children() {
            return [createComponent(StyledIconButton$1, {
                icon: "arrow",
                onClick: () => R.onBackClick()
            }), createComponent(H1Styled$5, {
                translationKey: "walletModal.infoModal.whatIsAWallet",
                children: "What is a wallet"
            }), createComponent(ScrollContainer, {
                get children() {
                    return [createComponent(InfoBlock, {
                        get children() {
                            return [createComponent(SecurityIcon, {
                                class: InfoBlockIconClass
                            }), createComponent(H3Styled, {
                                translationKey: "walletModal.infoModal.secureDigitalAssets",
                                children: "Secure digital assets storage"
                            }), createComponent(TextStyled$1, {
                                translationKey: "walletModal.infoModal.walletProtects",
                                children: "A wallet protects and manages your digital assets including TON, tokens and collectables."
                            })]
                        }
                    }), createComponent(InfoBlock, {
                        get children() {
                            return [createComponent(PersonalityIcon, {
                                class: InfoBlockIconClass
                            }), createComponent(H3Styled, {
                                translationKey: "walletModal.infoModal.controlIdentity",
                                children: "Control your Web3 identity"
                            }), createComponent(TextStyled$1, {
                                translationKey: "walletModal.infoModal.manageIdentity",
                                children: "Manage your digital identity and access decentralized applications with ease. Maintain control over your data and engage securely in the blockchain ecosystem."
                            })]
                        }
                    }), createComponent(InfoBlock, {
                        get children() {
                            return [createComponent(SwapIcon, {
                                class: InfoBlockIconClass
                            }), createComponent(H3Styled, {
                                translationKey: "walletModal.infoModal.effortlessCryptoTransactions",
                                children: "Effortless crypto transactions"
                            }), createComponent(TextStyled$1, {
                                translationKey: "walletModal.infoModal.easilySend",
                                children: "Easily send, receive, monitor your cryptocurrencies. Streamline your operations with decentralized applications."
                            })]
                        }
                    }), createComponent(ButtonsBlock, {
                        get children() {
                            return createComponent(Link, {
                                get href() {
                                    return LINKS.GET_A_WALLET
                                },
                                blank: !0,
                                get children() {
                                    return createComponent(Button, {
                                        get rightIcon() {
                                            return createComponent(WalletIcon, {})
                                        },
                                        get children() {
                                            return createComponent(Translation, {
                                                translationKey: "walletModal.infoModal.getAWallet",
                                                children: "Get a Wallet"
                                            })
                                        }
                                    })
                                }
                            })
                        }
                    })]
                }
            })]
        }
    })
    , MobileConnectionModalStyled = styled.div``
    , BodyStyled = styled.div`
    flex: 1;
    margin-top: 18px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 232px;
`
    , H1Styled$4 = styled(H1)`
    max-width: 262px;
    margin: 0 auto 8px;
`
    , StyledIconButton = styled(IconButton)`
    position: absolute;
    top: 16px;
    left: 16px;
`
    , FooterStyled = styled.div`
    padding: 16px;
    display: flex;
    align-items: center;
    gap: 12px;
    border-top: 0.5px solid ${R => rgba(R.theme.colors.icon.secondary, .2)};
`
    , ImageStyled = styled(Image)`
    width: 36px;
    height: 36px;
    border-radius: 10px;
`
    , FooterButton = styled(Link)`
    margin-left: auto;
`
    , LoaderStyled = styled(LoaderIcon)`
    margin-bottom: 18px;
    margin-top: 2px;
`
    , ErrorIconStyled = styled(ErrorIcon)`
    margin-bottom: 16px;
`
    , BodyTextStyled = styled(H2)`
    color: ${R => R.theme.colors.text.secondary};
    text-align: center;
    margin-bottom: 20px;
`
    , ButtonsContainerStyled = styled.div`
    display: flex;
    justify-content: center;
    gap: 8px;
    padding-bottom: 16px;
`
    , H1Styled$3 = styled(H1)`
    margin-bottom: 2px;
    padding: 0 64px;
`
    , H2Styled$3 = styled(H2)`
    margin-bottom: 20px;
    padding: 0 64px;
    min-height: 44px;
`
    , QrCodeWrapper$1 = styled.div`
    padding: 0 24px 24px;
`
    , MobileConnectionQR = R => [createComponent(H1Styled$3, {
        get children() {
            return R.walletInfo.name
        }
    }), createComponent(H2Styled$3, {
        translationKey: "walletModal.mobileConnectionModal.scanQR",
        get translationValues() {
            return {
                name: R.walletInfo.name
            }
        },
        get children() {
            return ["Scan the QR code below with your phone’s or ", createMemo(() => R.walletInfo.name), "’s camera"]
        }
    }), createComponent(QrCodeWrapper$1, {
        get children() {
            return createComponent(QRCode, {
                get imageUrl() {
                    return R.walletInfo.imageUrl
                },
                get sourceUrl() {
                    return addReturnStrategy(R.universalLink, "none")
                },
                disableCopy: !0
            })
        }
    })]
    , MobileConnectionModal = R => {
        const $ = useTheme()
            , [W, U] = createSignal(!0)
            , [V, K] = createSignal(!1)
            , [Y, Z] = createSignal(!1)
            , J = useContext(ConnectorContext)
            , X = J.onStatusChange(() => { }
                , () => {
                    Z(!0)
                }
            )
            , re = createMemo(() => J.connect({
                universalLink: R.wallet.universalLink,
                bridgeUrl: R.wallet.bridgeUrl
            }, R.additionalRequest))
            , oe = () => {
                setLastSelectedWalletInfo(__spreadProps(__spreadValues({}, R.wallet), {
                    openMethod: "universal-link"
                })),
                    redirectToTelegram(re(), {
                        returnStrategy: appState.returnStrategy,
                        twaReturnUrl: appState.twaReturnUrl,
                        forceRedirect: !0
                    })
            }
            , ie = () => {
                const pe = re();
                if (isTelegramUrl(pe))
                    return oe();
                Z(!1);
                const Ee = !W();
                U(!1),
                    redirectToWallet(re(), R.wallet.deepLink, {
                        returnStrategy: appState.returnStrategy,
                        forceRedirect: Ee
                    }, Ce => {
                        setLastSelectedWalletInfo(__spreadProps(__spreadValues({}, R.wallet), {
                            openMethod: Ce
                        }))
                    }
                    )
            }
            , se = () => {
                Z(!1),
                    K(!0),
                    setLastSelectedWalletInfo(__spreadProps(__spreadValues({}, R.wallet), {
                        openMethod: "qrcode"
                    }))
            }
            , le = () => {
                K(!1),
                    setLastSelectedWalletInfo(__spreadProps(__spreadValues({}, R.wallet), {
                        openMethod: "universal-link"
                    }))
            }
            , ue = () => {
                V() ? le() : R.onBackClick()
            }
            ;
        return onCleanup(X),
            ie(),
            createComponent(MobileConnectionModalStyled, {
                "data-tc-wallets-modal-connection-mobile": "true",
                get children() {
                    return [createComponent(Show, {
                        get when() {
                            return !R.backDisabled || V()
                        },
                        get children() {
                            return createComponent(StyledIconButton, {
                                icon: "arrow",
                                onClick: ue
                            })
                        }
                    }), createComponent(Show, {
                        get when() {
                            return V()
                        },
                        get children() {
                            return createComponent(MobileConnectionQR, {
                                get universalLink() {
                                    return re()
                                },
                                get walletInfo() {
                                    return R.wallet
                                }
                            })
                        }
                    }), createComponent(Show, {
                        get when() {
                            return !V()
                        },
                        get children() {
                            return [createComponent(H1Styled$4, {
                                get children() {
                                    return R.wallet.name
                                }
                            }), createComponent(BodyStyled, {
                                get children() {
                                    return [createComponent(Show, {
                                        get when() {
                                            return Y()
                                        },
                                        get children() {
                                            return [createComponent(ErrorIconStyled, {
                                                size: "s"
                                            }), createComponent(BodyTextStyled, {
                                                translationKey: "walletModal.mobileConnectionModal.connectionDeclined",
                                                children: "Connection declined"
                                            }), createComponent(ButtonsContainerStyled, {
                                                get children() {
                                                    return [createComponent(Button, {
                                                        get leftIcon() {
                                                            return createComponent(RetryIcon, {})
                                                        },
                                                        onClick: ie,
                                                        get children() {
                                                            return createComponent(Translation, {
                                                                translationKey: "common.retry",
                                                                children: "Retry"
                                                            })
                                                        }
                                                    }), createComponent(Button, {
                                                        get leftIcon() {
                                                            return createComponent(QRIcon, {
                                                                get fill() {
                                                                    return $.colors.accent
                                                                }
                                                            })
                                                        },
                                                        onClick: se,
                                                        get children() {
                                                            return createComponent(Translation, {
                                                                translationKey: "walletModal.mobileConnectionModal.showQR",
                                                                children: "Show QR Code"
                                                            })
                                                        }
                                                    })]
                                                }
                                            })]
                                        }
                                    }), createComponent(Show, {
                                        get when() {
                                            return !Y()
                                        },
                                        get children() {
                                            return [createComponent(LoaderStyled, {
                                                size: "s"
                                            }), createComponent(BodyTextStyled, {
                                                translationKey: "walletModal.mobileConnectionModal.continueIn",
                                                get translationValues() {
                                                    return {
                                                        name: R.wallet.name
                                                    }
                                                },
                                                get children() {
                                                    return ["Continue in ", createMemo(() => R.wallet.name), "…"]
                                                }
                                            }), createComponent(ButtonsContainerStyled, {
                                                get children() {
                                                    return [createComponent(Button, {
                                                        get leftIcon() {
                                                            return createComponent(RetryIcon, {})
                                                        },
                                                        onClick: ie,
                                                        get children() {
                                                            return createComponent(Translation, {
                                                                translationKey: "common.retry",
                                                                children: "Retry"
                                                            })
                                                        }
                                                    }), createComponent(Button, {
                                                        get leftIcon() {
                                                            return createComponent(QRIcon, {
                                                                get fill() {
                                                                    return $.colors.accent
                                                                }
                                                            })
                                                        },
                                                        onClick: se,
                                                        get children() {
                                                            return createComponent(Translation, {
                                                                translationKey: "walletModal.mobileConnectionModal.showQR",
                                                                children: "Show QR Code"
                                                            })
                                                        }
                                                    })]
                                                }
                                            })]
                                        }
                                    })]
                                }
                            }), createComponent(FooterStyled, {
                                get children() {
                                    return [createComponent(ImageStyled, {
                                        get src() {
                                            return R.wallet.imageUrl
                                        }
                                    }), createComponent(H3, {
                                        get children() {
                                            return R.wallet.name
                                        }
                                    }), createComponent(FooterButton, {
                                        get href() {
                                            return R.wallet.aboutUrl
                                        },
                                        blank: !0,
                                        get children() {
                                            return createComponent(Button, {
                                                get children() {
                                                    return createComponent(Translation, {
                                                        translationKey: "common.get",
                                                        children: "GET"
                                                    })
                                                }
                                            })
                                        }
                                    })]
                                }
                            })]
                        }
                    })]
                }
            })
    }
    , borders$1 = {
        m: "16px",
        s: "12px",
        none: "0"
    }
    , tgBorders = {
        m: "6px",
        s: "6px",
        none: "0"
    }
    , UlStyled = styled.ul`
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    width: fit-content;
    max-width: 100%;
    min-width: 100%;
    height: fit-content;
    overflow-x: auto;
    overflow-y: hidden;
    padding: 0 13px 24px;

    &&::-webkit-scrollbar {
        display: none;
    }

    -ms-overflow-style: none;
    scrollbar-width: none;

    > li {
        height: fit-content;
    }
`
    , OtherOptionButton = styled.li`
    width: 82px;
    min-width: 82px;
    height: 124px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 8px 4px;

    text-align: center;
    cursor: pointer;

    transition: transform 0.1s ease-in-out;

    ${mediaNotTouch} {
        &:hover {
            transform: scale(1.04);
        }
    }

    &:active {
        transform: scale(0.96);
    }

    ${mediaTouch} {
        &:active {
            transform: scale(0.92);
        }
    }
`
    , Divider = styled.div`
    width: 1px;
    margin: 0 10px;
    height: 24px;
    position: relative;
    top: 26px;

    background-color: ${R => R.theme.colors.icon.secondary};
    opacity: 0.2;
`
    , IconContainer = styled.div`
    width: 60px;
    height: 60px;
    border-radius: ${R => borders$1[R.theme.borderRadius]};
    display: flex;
    align-items: center;
    justify-content: center;

    background-color: ${R => R.theme.colors.background.tint};
    margin-bottom: 8px;
`
    , H1Styled$2 = styled(H1)`
    margin-top: 38px;
    margin-bottom: 4px;
    padding: 0 24px;
`
    , H2Styled$2 = styled(H2)`
    margin-bottom: 24px;
    padding: 0 24px;
    min-height: 44px;
`;
styled(Button)`
    display: block;
    margin: 0 auto;
`;
const TelegramButtonStyled = styled(Button)`
    margin: 0 24px 24px;
    width: calc(100% - 48px);
    border-radius: ${R => borders$1[R.theme.borderRadius]};
    padding: 14px 16px 14px 14px;
    background-color: ${R => R.theme.colors.telegramButton};

    color: ${R => R.theme.colors.constant.white};
    font-weight: 590;
    font-size: 16px;
    line-height: 20px;
`
    , TGImageStyled = styled(Image)`
    border-radius: ${R => tgBorders[R.theme.borderRadius]};
    width: 24px;
    height: 24px;
`
    , StyledLeftActionButton = styled(IconButton)`
    position: absolute;
    top: 16px;
    left: 16px;
`
    , H1Styled$1 = styled(H1)`
    margin-bottom: 2px;
    padding: 0 64px;
`
    , H2Styled$1 = styled(H2)`
    margin-bottom: 20px;
    padding: 0 64px;
`
    , QrCodeWrapper = styled.div`
    padding: 0 24px 24px;
`
    , MobileUniversalQR = R => [createComponent(H1Styled$1, {
        translationKey: "walletModal.mobileUniversalModal.connectYourWallet",
        children: "Connect your wallet"
    }), createComponent(H2Styled$1, {
        translationKey: "walletModal.mobileUniversalModal.scan",
        children: "Scan with your mobile wallet"
    }), createComponent(QrCodeWrapper, {
        get children() {
            return createComponent(QRCode, {
                get imageUrl() {
                    return IMG.TON
                },
                get sourceUrl() {
                    return addReturnStrategy(R.universalLink, "none")
                },
                disableCopy: !0
            })
        }
    })];
function getUniqueBridges(R) {
    const $ = new Set(R.filter(isWalletInfoRemote).map(W => W.bridgeUrl));
    return Array.from($).map(W => ({
        bridgeUrl: W
    }))
}
function bridgesIsEqual(R, $) {
    const W = new Set(R == null ? void 0 : R.map(V => V.bridgeUrl))
        , U = new Set($ == null ? void 0 : $.map(V => V.bridgeUrl));
    return W.size === U.size && [...W].every(V => U.has(V))
}
const _tmpl$$1 = template$1("<li></li>")
    , _tmpl$2 = template$1('<div data-tc-wallets-modal-universal-mobile="true"></div>')
    , MobileUniversalModal = R => {
        const [$, W] = createSignal(!1)
            , [U, V] = createSignal(!0)
            , K = appState.connector
            , Y = () => R.walletsList.filter(Ee => supportsMobile(Ee) && Ee.appName !== AT_WALLET_APP_NAME)
            , Z = () => Y().length > 7
            , J = createMemo(() => getUniqueBridges(R.walletsList), null, {
                equals: bridgesIsEqual
            })
            , X = createMemo(() => K.connect(J(), R.additionalRequest));
        setLastSelectedWalletInfo({
            openMethod: "universal-link"
        });
        const [re, oe] = createSignal(void 0)
            , ie = () => __async(void 0, null, function* () {
                re() !== void 0 && clearTimeout(re()),
                    yield copyToClipboard(X());
                const Ee = setTimeout(() => oe(void 0), 1500);
                oe(Ee)
            })
            , se = () => {
                const Ee = !U();
                V(!1),
                    redirectToWallet(X(), void 0, {
                        returnStrategy: appState.returnStrategy,
                        forceRedirect: Ee
                    }, Ce => {
                        setLastSelectedWalletInfo({
                            openMethod: Ce
                        })
                    }
                    )
            }
            , le = () => {
                const Ee = R.walletsList.find(Ue => Ue.appName === AT_WALLET_APP_NAME);
                if (!Ee || !isWalletInfoRemote(Ee))
                    throw new TonConnectUIError("@wallet bot not found in the wallets list");
                const Ce = K.connect({
                    bridgeUrl: Ee.bridgeUrl,
                    universalLink: Ee.universalLink
                }, R.additionalRequest)
                    , ke = !U();
                V(!1),
                    redirectToTelegram(Ce, {
                        returnStrategy: appState.returnStrategy,
                        twaReturnUrl: appState.twaReturnUrl,
                        forceRedirect: ke
                    })
            }
            , ue = () => {
                W(!0),
                    setLastSelectedWalletInfo({
                        openMethod: "qrcode"
                    })
            }
            , pe = () => {
                W(!1),
                    setLastSelectedWalletInfo({
                        openMethod: "universal-link"
                    })
            }
            ;
        return (() => {
            const Ee = _tmpl$2.cloneNode(!0);
            return insert(Ee, createComponent(Show, {
                get when() {
                    return $()
                },
                get children() {
                    return [createComponent(StyledLeftActionButton, {
                        icon: "arrow",
                        onClick: pe
                    }), createComponent(MobileUniversalQR, {
                        get universalLink() {
                            return X()
                        }
                    })]
                }
            }), null),
                insert(Ee, createComponent(Show, {
                    get when() {
                        return !$()
                    },
                    get children() {
                        return [createComponent(StyledLeftActionButton, {
                            get icon() {
                                return createComponent(QRIcon, {})
                            },
                            onClick: ue
                        }), createComponent(H1Styled$2, {
                            translationKey: "walletModal.mobileUniversalModal.connectYourWallet",
                            children: "Connect your wallet"
                        }), createComponent(H2Styled$2, {
                            translationKey: "walletModal.mobileUniversalModal.openWalletOnTelegramOrSelect",
                            children: "Open Wallet in Telegram or select your wallet to connect"
                        }), createComponent(TelegramButtonStyled, {
                            get leftIcon() {
                                return createComponent(AtWalletIcon, {})
                            },
                            get rightIcon() {
                                return createComponent(TGImageStyled, {
                                    get src() {
                                        return IMG.TG
                                    }
                                })
                            },
                            onClick: le,
                            scale: "s",
                            get children() {
                                return createComponent(Translation, {
                                    translationKey: "walletModal.mobileUniversalModal.openWalletOnTelegram",
                                    children: "Open Wallet in Telegram"
                                })
                            }
                        }), createComponent(UlStyled, {
                            get children() {
                                return [createComponent(For, {
                                    get each() {
                                        return createMemo(() => !!Z())() ? Y().slice(0, 4) : Y()
                                    },
                                    children: Ce => (() => {
                                        const ke = _tmpl$$1.cloneNode(!0);
                                        return insert(ke, createComponent(WalletItem, {
                                            get icon() {
                                                return Ce.imageUrl
                                            },
                                            get name() {
                                                return Ce.name
                                            },
                                            onClick: () => R.onSelect(Ce)
                                        })),
                                            ke
                                    }
                                    )()
                                }), createComponent(Show, {
                                    get when() {
                                        return Z()
                                    },
                                    get children() {
                                        const Ce = _tmpl$$1.cloneNode(!0);
                                        return insert(Ce, createComponent(FourWalletsItem, {
                                            labelLine1: "View all",
                                            labelLine2: "wallets",
                                            get images() {
                                                return Y().slice(3, 7).map(ke => ke.imageUrl)
                                            },
                                            onClick: () => R.onSelectAllWallets()
                                        })),
                                            Ce
                                    }
                                }), createComponent(Divider, {
                                    children: " "
                                }), createComponent(OtherOptionButton, {
                                    onClick: se,
                                    get children() {
                                        return [createComponent(IconContainer, {
                                            get children() {
                                                return createComponent(LongArrowIcon, {})
                                            }
                                        }), createComponent(Text, {
                                            fontWeight: 590,
                                            translationKey: "walletModal.mobileUniversalModal.openLink",
                                            children: "Open Link"
                                        })]
                                    }
                                }), createComponent(OtherOptionButton, {
                                    onClick: ie,
                                    get children() {
                                        return [createComponent(IconContainer, {
                                            get children() {
                                                return createMemo(() => re() !== void 0)() ? createComponent(DoneIcon, {}) : createComponent(CopyLightIcon, {})
                                            }
                                        }), createComponent(Text, {
                                            fontWeight: 590,
                                            get translationKey() {
                                                return re() !== void 0 ? "common.copied" : "common.copyLink"
                                            },
                                            get children() {
                                                return re() !== void 0 ? "Copied" : "Copy Link"
                                            }
                                        })]
                                    }
                                })]
                            }
                        })]
                    }
                }), null),
                Ee
        }
        )()
    }
    , borders = {
        m: "16px",
        s: "8px",
        none: "0"
    }
    , hoverBorders = {
        m: "8px",
        s: "4px",
        none: "0"
    }
    , DesktopUniversalModalStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 16px;
`
    , H2Styled = styled(H2)`
    max-width: 320px;
    margin-top: 2px;
    margin-bottom: 20px;
`
    , H2AvailableWalletsStyled = styled(H2)`
    margin-bottom: 16px;
`
    , QRCodeStyled = styled(QRCode)`
    margin-bottom: 24px;
`
    , WalletsContainerStyled = styled.ul`
    display: flex;
`;
styled.div`
    display: flex;
    gap: 16px;
    width: 100%;
`;
styled(Button)`
    position: relative;
    font-size: 16px;
    line-height: 20px;
    width: 100%;
    padding: 0 16px;
    height: 56px;
    border-radius: ${R => borders[R.theme.borderRadius]};

    &:hover {
        ${R => R.disableEventsAnimation ? "transform: unset;" : ""}
    }

    &:active {
        ${R => R.disableEventsAnimation ? "transform: unset;" : ""}
    }
`;
styled.ul`
    position: absolute;
    bottom: 100%;
    left: 0;
    margin: 0;
    padding: 8px;
    width: 188px;
    transform: translateY(-16px);

    background-color: ${R => R.theme.colors.background.primary};
    border-radius: ${R => borders[R.theme.borderRadius]};
    box-shadow: 0 4px 24px rgba(0, 0, 0, 0.16);
`;
styled.li`
    padding: 8px;

    display: flex;
    align-items: center;
    gap: 8px;

    cursor: pointer;
    border-radius: ${R => hoverBorders[R.theme.borderRadius]};

    transition: background-color, transform 0.1s ease-in-out;

    &:hover {
        background-color: ${R => R.theme.colors.background.secondary};
    }

    &:active {
        transform: scale(0.96);
    }
`;
styled(Image)`
    width: 24px;
    height: 24px;

    border-radius: 6px;
`;
styled.div`
    margin-top: 23px;
    margin-bottom: 1px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;
styled(Text)`
    color: ${R => R.theme.colors.text.secondary};
    font-size: 16px;
`;
const _tmpl$ = template$1("<li></li>")
    , DesktopUniversalModal = R => {
        const [$, W] = createSignal(!1)
            , U = appState.connector
            , V = createMemo(() => getUniqueBridges(R.walletsList), null, {
                equals: bridgesIsEqual
            });
        setLastSelectedWalletInfo({
            openMethod: "qrcode"
        });
        const K = createMemo(() => U.connect(V(), R.additionalRequest));
        return createComponent(DesktopUniversalModalStyled, {
            onClick: () => W(!1),
            "data-tc-wallets-modal-universal-desktop": "true",
            get children() {
                return [createComponent(H1, {
                    translationKey: "walletModal.desktopUniversalModal.connectYourWallet",
                    children: "Connect your wallet"
                }), createComponent(H2Styled, {
                    translationKey: "walletModal.desktopUniversalModal.scan",
                    children: "Scan with your mobile wallet"
                }), createComponent(QRCodeStyled, {
                    get sourceUrl() {
                        return addReturnStrategy(K(), "none")
                    },
                    get disableCopy() {
                        return $()
                    },
                    get imageUrl() {
                        return IMG.TON
                    }
                }), createComponent(H2AvailableWalletsStyled, {
                    translationKey: "walletModal.desktopUniversalModal.availableWallets",
                    children: "Available wallets"
                }), createComponent(WalletsContainerStyled, {
                    get children() {
                        return [createComponent(For, {
                            get each() {
                                return R.walletsList.slice(0, 3)
                            },
                            children: Y => (() => {
                                const Z = _tmpl$.cloneNode(!0);
                                return insert(Z, createComponent(WalletLabeledItem, {
                                    wallet: Y,
                                    onClick: () => R.onSelect(Y)
                                })),
                                    Z
                            }
                            )()
                        }), createComponent(FourWalletsItem, {
                            labelLine1: "View all",
                            labelLine2: "wallets",
                            get images() {
                                return R.walletsList.slice(3, 7).map(Y => Y.imageUrl)
                            },
                            onClick: () => R.onSelectAllWallets()
                        })]
                    }
                })]
            }
        })
    }
    , WalletsModal = () => {
        const { locale: R } = useI18n()[1];
        createEffect(() => R(appState.language)),
            createEffect(() => {
                getWalletsModalIsOpened() ? updateIsMobile() : (K(null),
                    Z("universal"),
                    X(!1))
            }
            );
        const $ = useContext(ConnectorContext)
            , W = useContext(TonConnectUiContext)
            , [U] = createResource(() => W.getWallets())
            , [V, K] = createSignal(null)
            , [Y, Z] = createSignal("universal")
            , [J, X] = createSignal(!1)
            , re = createMemo(() => {
                if (U.state !== "ready")
                    return null;
                let Ce = applyWalletsListConfiguration(U(), appState.walletsListConfiguration);
                const ke = Ce.filter(isWalletInfoCurrentlyInjected)
                    , Ue = Ce.filter(de => !isWalletInfoCurrentlyInjected(de));
                Ce = (ke || []).concat(Ue);
                const be = appState.preferredWalletAppName
                    , Be = Ce.find(de => eqWalletName(de, be))
                    , xe = Ce.filter(de => eqWalletName(de, be)).length >= 2;
                be && Be && !xe && (Ce = [__spreadProps(__spreadValues({}, Be), {
                    isPreferred: !0
                })].concat(Ce.filter(de => !eqWalletName(de, be))));
                const ye = Ce.find(de => eqWalletName(de, AT_WALLET_APP_NAME));
                return ye && (Ce = [ye].concat(Ce.filter(de => !eqWalletName(de, AT_WALLET_APP_NAME)))),
                    Ce
            }
            )
            , oe = () => {
                var Ce;
                return ((Ce = appState.connectRequestParameters) == null ? void 0 : Ce.state) === "loading"
            }
            , ie = createMemo(() => {
                var Ce;
                if (!oe())
                    return (Ce = appState.connectRequestParameters) == null ? void 0 : Ce.value
            }
            )
            , se = Ce => {
                W.closeModal(Ce)
            }
            , le = $.onStatusChange(Ce => {
                Ce && se("wallet-selected")
            }
            )
            , ue = () => {
                Z("all-wallets")
            }
            , pe = () => {
                Z("universal")
            }
            , Ee = () => {
                K(null)
            }
            ;
        return onCleanup(() => {
            K(null),
                X(!1)
        }
        ),
            onCleanup(le),
            createComponent(StyledModal, {
                get opened() {
                    return getWalletsModalIsOpened()
                },
                get enableAndroidBackHandler() {
                    return appState.enableAndroidBackHandler
                },
                onClose: () => se("action-cancelled"),
                onClickQuestion: () => X(Ce => !Ce),
                "data-tc-wallets-modal-container": "true",
                get children() {
                    return [createComponent(Show, {
                        get when() {
                            return J()
                        },
                        get children() {
                            return createComponent(InfoModal, {
                                onBackClick: () => X(!1)
                            })
                        }
                    }), createComponent(Show, {
                        get when() {
                            return !J()
                        },
                        get children() {
                            return [createComponent(Show, {
                                get when() {
                                    return oe() || !re()
                                },
                                get children() {
                                    return [createComponent(H1Styled$8, {
                                        translationKey: "walletModal.loading",
                                        children: "Wallets list is loading"
                                    }), createComponent(LoaderContainerStyled, {
                                        get children() {
                                            return createComponent(LoaderIcon, {
                                                size: "m"
                                            })
                                        }
                                    })]
                                }
                            }), createComponent(Show, {
                                get when() {
                                    return createMemo(() => !oe())() && re()
                                },
                                get children() {
                                    return createComponent(Switch, {
                                        get children() {
                                            return [createComponent(Match, {
                                                get when() {
                                                    return V()
                                                },
                                                get children() {
                                                    return createComponent(Dynamic, {
                                                        get component() {
                                                            return MobileConnectionModal
                                                        },
                                                        get wallet() {
                                                            return V()
                                                        },
                                                        get additionalRequest() {
                                                            return ie()
                                                        },
                                                        onBackClick: Ee
                                                    })
                                                }
                                            }), createComponent(Match, {
                                                get when() {
                                                    return Y() === "universal"
                                                },
                                                get children() {
                                                    return createComponent(Dynamic, {
                                                        get component() {
                                                            return MobileUniversalModal
                                                        },
                                                        onSelect: K,
                                                        get walletsList() {
                                                            return re()
                                                        },
                                                        get additionalRequest() {
                                                            return ie()
                                                        },
                                                        onSelectAllWallets: ue
                                                    })
                                                }
                                            }), createComponent(Match, {
                                                get when() {
                                                    return Y() === "all-wallets"
                                                },
                                                get children() {
                                                    return createComponent(AllWalletsListModal, {
                                                        get walletsList() {
                                                            return re()
                                                        },
                                                        onBack: pe,
                                                        onSelect: K
                                                    })
                                                }
                                            })]
                                        }
                                    })
                                }
                            })]
                        }
                    })]
                }
            })
    }
    , ActionModalStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 8px;
`
    , H1Styled = styled(H1)`
    margin-top: 16px;
`
    , TextStyled = styled(Text)`
    font-weight: 510;
    font-size: 16px;
    line-height: 20px;
    text-align: center;
    max-width: 250px;

    color: ${R => R.theme.colors.text.secondary};
`
    , LoaderButtonStyled = styled(Button)`
    min-width: 112px;
    margin-top: 32px;
`
    , LoaderIconStyled = styled(LoaderIcon)`
    height: 16px;
    width: 16px;
`
    , ButtonStyled = styled(Button)`
    margin-top: 32px;
`
    , ActionModal = R => {
        const $ = useDataAttributes(R)
            , W = useContext(TonConnectUiContext)
            , [U, V] = createSignal(!0)
            , [K, Y] = createSignal(!1);
        createEffect(() => {
            const re = action();
            Y(!!re && "sent" in re && re.sent)
        }
        );
        let Z;
        W != null && W.wallet && "universalLink" in W.wallet && (W.wallet.openMethod === "universal-link" || isTelegramUrl(W.wallet.universalLink) && isInTMA()) && (Z = W.wallet.universalLink);
        let J;
        W != null && W.wallet && "deepLink" in W.wallet && (W.wallet.openMethod === "custom-deeplink" || isTelegramUrl(W.wallet.deepLink) && isInTMA()) && (J = W.wallet.deepLink);
        const X = () => {
            const re = action()
                , oe = "returnStrategy" in re ? re.returnStrategy : appState.returnStrategy
                , ie = !U();
            V(!1),
                isTelegramUrl(Z) ? redirectToTelegram(Z, {
                    returnStrategy: oe,
                    twaReturnUrl: "twaReturnUrl" in re ? re.twaReturnUrl : appState.twaReturnUrl,
                    forceRedirect: ie
                }) : redirectToWallet(Z, J, {
                    returnStrategy: oe,
                    forceRedirect: ie
                }, () => { }
                )
        }
            ;
        return createComponent(ActionModalStyled, mergeProps($, {
            get children() {
                return [createMemo(() => R.icon), createComponent(H1Styled, {
                    get translationKey() {
                        return R.headerTranslationKey
                    },
                    get translationValues() {
                        return R.headerTranslationValues
                    }
                }), createComponent(TextStyled, {
                    get translationKey() {
                        return R.textTranslationKey
                    },
                    get translationValues() {
                        return R.textTranslationValues
                    }
                }), createComponent(Show, {
                    get when() {
                        return !K() && (R.showButton === "open-wallet" && Z || R.showButton !== "open-wallet")
                    },
                    get children() {
                        return createComponent(LoaderButtonStyled, {
                            disabled: !0,
                            "data-tc-connect-button-loading": "true",
                            get children() {
                                return createComponent(LoaderIconStyled, {})
                            }
                        })
                    }
                }), createComponent(Show, {
                    get when() {
                        return K()
                    },
                    get children() {
                        return [createComponent(Show, {
                            get when() {
                                return R.showButton !== "open-wallet"
                            },
                            get children() {
                                return createComponent(ButtonStyled, {
                                    onClick: () => R.onClose(),
                                    get children() {
                                        return createComponent(Translation, {
                                            translationKey: "common.close",
                                            children: "Close"
                                        })
                                    }
                                })
                            }
                        }), createComponent(Show, {
                            get when() {
                                return R.showButton === "open-wallet" && Z
                            },
                            get children() {
                                return createComponent(ButtonStyled, {
                                    onClick: X,
                                    get children() {
                                        return createComponent(Translation, {
                                            translationKey: "common.openWallet",
                                            children: "Open wallet"
                                        })
                                    }
                                })
                            }
                        })]
                    }
                })]
            }
        }))
    }
    , ConfirmTransactionModal = R => {
        const $ = useContext(TonConnectUiContext)
            , [W] = useI18n()
            , U = () => $.wallet && "name" in $.wallet ? $.wallet.name : W("common.yourWallet", {}, "Your wallet");
        return createComponent(ActionModal, {
            headerTranslationKey: "actionModal.confirmTransaction.header",
            get headerTranslationValues() {
                return {
                    name: U()
                }
            },
            textTranslationKey: "actionModal.confirmTransaction.text",
            get icon() {
                return createComponent(LoaderIcon, {
                    size: "m"
                })
            },
            onClose: () => R.onClose(),
            showButton: "open-wallet",
            "data-tc-confirm-modal": "true"
        })
    }
    , TransactionCanceledModal = R => createComponent(ActionModal, {
        headerTranslationKey: "actionModal.transactionCanceled.header",
        textTranslationKey: "actionModal.transactionCanceled.text",
        get icon() {
            return createComponent(ErrorIcon, {
                size: "m"
            })
        },
        onClose: () => R.onClose(),
        "data-tc-transaction-canceled-modal": "true"
    })
    , TransactionSentModal = R => createComponent(ActionModal, {
        headerTranslationKey: "actionModal.transactionSent.header",
        textTranslationKey: "actionModal.transactionSent.text",
        get icon() {
            return createComponent(SuccessIcon, {
                size: "m"
            })
        },
        onClose: () => R.onClose(),
        "data-tc-transaction-sent-modal": "true"
    })
    , ActionsModal = () => createComponent(Modal, {
        get opened() {
            var R;
            return createMemo(() => action() !== null)() && ((R = action()) == null ? void 0 : R.openModal) === !0
        },
        get enableAndroidBackHandler() {
            return appState.enableAndroidBackHandler
        },
        onClose: () => setAction(null),
        "data-tc-actions-modal-container": "true",
        get children() {
            return createComponent(Switch, {
                get children() {
                    return [createComponent(Match, {
                        get when() {
                            return action().name === "transaction-sent"
                        },
                        get children() {
                            return createComponent(TransactionSentModal, {
                                onClose: () => setAction(null)
                            })
                        }
                    }), createComponent(Match, {
                        get when() {
                            return action().name === "transaction-canceled"
                        },
                        get children() {
                            return createComponent(TransactionCanceledModal, {
                                onClose: () => setAction(null)
                            })
                        }
                    }), createComponent(Match, {
                        get when() {
                            return action().name === "confirm-transaction"
                        },
                        get children() {
                            return createComponent(ConfirmTransactionModal, {
                                onClose: () => setAction(null)
                            })
                        }
                    })]
                }
            })
        }
    })
    , SingleWalletModal = () => {
        const { locale: R } = useI18n()[1];
        createEffect(() => R(appState.language)),
            createEffect(() => {
                getSingleWalletModalIsOpened() && updateIsMobile()
            }
            );
        const $ = useContext(ConnectorContext)
            , W = useContext(TonConnectUiContext)
            , [U, V] = createSignal(!1)
            , K = () => {
                var X;
                return ((X = appState.connectRequestParameters) == null ? void 0 : X.state) === "loading"
            }
            , Y = createMemo(() => {
                var X;
                if (!K())
                    return (X = appState.connectRequestParameters) == null ? void 0 : X.value
            }
            )
            , Z = X => {
                W.closeSingleWalletModal(X)
            }
            , J = $.onStatusChange(X => {
                X && Z("wallet-selected")
            }
            );
        return onCleanup(J),
            onCleanup(() => {
                V(!1)
            }
            ),
            createComponent(StyledModal, {
                get opened() {
                    return getSingleWalletModalIsOpened()
                },
                get enableAndroidBackHandler() {
                    return appState.enableAndroidBackHandler
                },
                onClose: () => Z("action-cancelled"),
                onClickQuestion: () => V(X => !X),
                "data-tc-wallets-modal-container": "true",
                get children() {
                    return [createComponent(Show, {
                        get when() {
                            return U()
                        },
                        get children() {
                            return createComponent(InfoModal, {
                                onBackClick: () => V(!1)
                            })
                        }
                    }), createComponent(Show, {
                        get when() {
                            return !U()
                        },
                        get children() {
                            return [createComponent(Show, {
                                get when() {
                                    return K()
                                },
                                get children() {
                                    return [createComponent(H1Styled$8, {
                                        translationKey: "walletModal.loading",
                                        children: "Wallets list is loading"
                                    }), createComponent(LoaderContainerStyled, {
                                        get children() {
                                            return createComponent(LoaderIcon, {
                                                size: "m"
                                            })
                                        }
                                    })]
                                }
                            }), createComponent(Show, {
                                get when() {
                                    return !K()
                                },
                                get children() {
                                    return createComponent(Dynamic, {
                                        get component() {
                                            return MobileConnectionModal
                                        },
                                        get wallet() {
                                            return getSingleWalletModalWalletInfo()
                                        },
                                        get additionalRequest() {
                                            return Y()
                                        },
                                        onBackClick: () => { }
                                        ,
                                        backDisabled: !0
                                    })
                                }
                            })]
                        }
                    })]
                }
            })
    }
    , App = R => {
        const $ = createI18nContext(i18nDictionary, appState.language);
        return defineStylesRoot(),
            fixMobileSafariActiveTransition(),
            createComponent(I18nContext.Provider, {
                value: $,
                get children() {
                    return createComponent(TonConnectUiContext.Provider, {
                        get value() {
                            return R.tonConnectUI
                        },
                        get children() {
                            return createComponent(ConnectorContext.Provider, {
                                get value() {
                                    return appState.connector
                                },
                                get children() {
                                    return [createComponent(GlobalStyles, {}), createComponent(ThemeProvider, {
                                        theme: themeState,
                                        get children() {
                                            return [createComponent(Show, {
                                                get when() {
                                                    return appState.buttonRootId
                                                },
                                                get children() {
                                                    return createComponent(Portal, {
                                                        get mount() {
                                                            return document.getElementById(appState.buttonRootId)
                                                        },
                                                        get children() {
                                                            return createComponent(AccountButton, {})
                                                        }
                                                    })
                                                }
                                            }), createComponent(Dynamic, {
                                                component: globalStylesTag,
                                                get children() {
                                                    return [createComponent(WalletsModal, {}), createComponent(SingleWalletModal, {}), createComponent(ActionsModal, {})]
                                                }
                                            })]
                                        }
                                    })]
                                }
                            })
                        }
                    })
                }
            })
    }
    , widgetController = {
        openWalletsModal: () => void setTimeout(() => setWalletsModalState({
            status: "opened",
            closeReason: null
        })),
        closeWalletsModal: R => void setTimeout(() => setWalletsModalState({
            status: "closed",
            closeReason: R
        })),
        openSingleWalletModal: R => {
            setTimeout(() => setSingleWalletModalState({
                status: "opened",
                closeReason: null,
                walletInfo: R
            }))
        }
        ,
        closeSingleWalletModal: R => void setTimeout(() => setSingleWalletModalState({
            status: "closed",
            closeReason: R
        })),
        setAction: R => void setTimeout(() => setAction(R)),
        clearAction: () => void setTimeout(() => setAction(null)),
        getSelectedWalletInfo: () => lastSelectedWalletInfo(),
        removeSelectedWalletInfo: () => setLastSelectedWalletInfo(null),
        renderApp: (R, $) => render(() => createComponent(App, {
            tonConnectUI: $
        }), document.getElementById(R))
    };
class WalletsModalManager {
    constructor($) {
        __publicField(this, "connector"),
            __publicField(this, "setConnectRequestParametersCallback"),
            __publicField(this, "consumers", []),
            __publicField(this, "tracker"),
            __publicField(this, "state", walletsModalState()),
            this.connector = $.connector,
            this.tracker = $.tracker,
            this.setConnectRequestParametersCallback = $.setConnectRequestParametersCallback,
            createEffect(() => {
                const W = walletsModalState();
                this.state = W,
                    this.consumers.forEach(U => U(W))
            }
            )
    }
    open() {
        return __async(this, null, function* () {
            this.tracker.trackConnectionStarted();
            const W = (yield this.connector.getWallets()).find(isWalletInfoCurrentlyEmbedded);
            return W ? this.connectEmbeddedWallet(W) : this.openWalletsModal()
        })
    }
    close($ = "action-cancelled") {
        $ === "action-cancelled" && this.tracker.trackConnectionError("Connection was cancelled"),
            widgetController.closeWalletsModal($)
    }
    onStateChange($) {
        return this.consumers.push($),
            () => {
                this.consumers = this.consumers.filter(W => W !== $)
            }
    }
    connectEmbeddedWallet($) {
        const W = V => {
            setLastSelectedWalletInfo($),
                this.connector.connect({
                    jsBridgeKey: $.jsBridgeKey
                }, V)
        }
            , U = appState.connectRequestParameters;
        (U == null ? void 0 : U.state) === "loading" ? this.setConnectRequestParametersCallback(W) : W(U == null ? void 0 : U.value)
    }
    openWalletsModal() {
        return __async(this, null, function* () {
            return isInTMA() && sendExpand(),
                widgetController.openWalletsModal(),
                new Promise($ => {
                    const W = this.onStateChange(U => {
                        const { status: V } = U;
                        V === "opened" && (W(),
                            $())
                    }
                    )
                }
                )
        })
    }
}
class TransactionModalManager {
    constructor($) {
        __publicField(this, "connector"),
            __publicField(this, "consumers", []),
            this.connector = $.connector,
            createEffect(() => {
                const W = action();
                this.consumers.forEach(U => U(W))
            }
            )
    }
    onStateChange($) {
        return this.consumers.push($),
            () => {
                this.consumers = this.consumers.filter(W => W !== $)
            }
    }
}
class SingleWalletModalManager {
    constructor($) {
        __publicField(this, "connector"),
            __publicField(this, "setConnectRequestParametersCallback"),
            __publicField(this, "consumers", []),
            __publicField(this, "tracker"),
            __publicField(this, "state", singleWalletModalState()),
            this.connector = $.connector,
            this.tracker = $.tracker,
            this.setConnectRequestParametersCallback = $.setConnectRequestParametersCallback,
            createEffect(() => {
                const W = singleWalletModalState();
                this.state = W,
                    this.consumers.forEach(U => U(W))
            }
            )
    }
    open($) {
        return __async(this, null, function* () {
            this.tracker.trackConnectionStarted();
            const W = yield this.connector.getWallets()
                , U = applyWalletsListConfiguration(W, appState.walletsListConfiguration)
                , V = U.find(isWalletInfoCurrentlyEmbedded);
            if (!!V)
                return this.connectEmbeddedWallet(V);
            const Z = U.filter(isWalletInfoRemote).find(re => eqWalletName(re, $));
            if (!!Z)
                return this.openSingleWalletModal(Z);
            const X = `Trying to open modal window with unknown wallet "${$}".`;
            throw this.tracker.trackConnectionError(X),
            new TonConnectUIError(X)
        })
    }
    close($ = "action-cancelled") {
        $ === "action-cancelled" && this.tracker.trackConnectionError("Connection was cancelled"),
            widgetController.closeSingleWalletModal("action-cancelled")
    }
    onStateChange($) {
        return this.consumers.push($),
            () => {
                this.consumers = this.consumers.filter(W => W !== $)
            }
    }
    connectEmbeddedWallet($) {
        const W = V => {
            setLastSelectedWalletInfo($),
                this.connector.connect({
                    jsBridgeKey: $.jsBridgeKey
                }, V)
        }
            , U = appState.connectRequestParameters;
        (U == null ? void 0 : U.state) === "loading" ? this.setConnectRequestParametersCallback(W) : W(U == null ? void 0 : U.value)
    }
    openSingleWalletModal($) {
        return __async(this, null, function* () {
            return isInTMA() && sendExpand(),
                widgetController.openSingleWalletModal($),
                new Promise(W => {
                    const U = this.onStateChange(V => {
                        const { status: K } = V;
                        K === "opened" && (U(),
                            W())
                    }
                    )
                }
                )
        })
    }
}
class TonConnectUITracker {
    constructor($) {
        __publicField(this, "eventPrefix", "ton-connect-ui-"),
            __publicField(this, "tonConnectUiVersion"),
            __publicField(this, "tonConnectSdkVersion", null),
            __publicField(this, "eventDispatcher");
        var W;
        this.eventDispatcher = (W = $ == null ? void 0 : $.eventDispatcher) != null ? W : new BrowserEventDispatcher,
            this.tonConnectUiVersion = $.tonConnectUiVersion,
            this.init().catch()
    }
    get version() {
        return createVersionInfo({
            ton_connect_sdk_lib: this.tonConnectSdkVersion,
            ton_connect_ui_lib: this.tonConnectUiVersion
        })
    }
    init() {
        return __async(this, null, function* () {
            try {
                yield this.setRequestVersionHandler(),
                    this.tonConnectSdkVersion = yield this.requestTonConnectSdkVersion()
            } catch { }
        })
    }
    setRequestVersionHandler() {
        return __async(this, null, function* () {
            yield this.eventDispatcher.addEventListener("ton-connect-ui-request-version", () => __async(this, null, function* () {
                yield this.eventDispatcher.dispatchEvent("ton-connect-ui-response-version", createResponseVersionEvent(this.tonConnectUiVersion))
            }))
        })
    }
    requestTonConnectSdkVersion() {
        return __async(this, null, function* () {
            return new Promise(($, W) => __async(this, null, function* () {
                try {
                    yield this.eventDispatcher.addEventListener("ton-connect-response-version", U => {
                        $(U.detail.version)
                    }
                        , {
                            once: !0
                        }),
                        yield this.eventDispatcher.dispatchEvent("ton-connect-request-version", createRequestVersionEvent())
                } catch (U) {
                    W(U)
                }
            }))
        })
    }
    dispatchUserActionEvent($) {
        var W;
        try {
            (W = this.eventDispatcher) == null || W.dispatchEvent(`${this.eventPrefix}${$.type}`, $).catch()
        } catch { }
    }
    trackConnectionStarted(...$) {
        try {
            const W = createConnectionStartedEvent(this.version, ...$);
            this.dispatchUserActionEvent(W)
        } catch { }
    }
    trackConnectionCompleted(...$) {
        try {
            const W = createConnectionCompletedEvent(this.version, ...$);
            this.dispatchUserActionEvent(W)
        } catch { }
    }
    trackConnectionError(...$) {
        try {
            const W = createConnectionErrorEvent(this.version, ...$);
            this.dispatchUserActionEvent(W)
        } catch { }
    }
    trackConnectionRestoringStarted(...$) {
        try {
            const W = createConnectionRestoringStartedEvent(this.version, ...$);
            this.dispatchUserActionEvent(W)
        } catch { }
    }
    trackConnectionRestoringCompleted(...$) {
        try {
            const W = createConnectionRestoringCompletedEvent(this.version, ...$);
            this.dispatchUserActionEvent(W)
        } catch { }
    }
    trackConnectionRestoringError(...$) {
        try {
            const W = createConnectionRestoringErrorEvent(this.version, ...$);
            this.dispatchUserActionEvent(W)
        } catch { }
    }
    trackDisconnection(...$) {
        try {
            const W = createDisconnectionEvent(this.version, ...$);
            this.dispatchUserActionEvent(W)
        } catch { }
    }
    trackTransactionSentForSignature(...$) {
        try {
            const W = createTransactionSentForSignatureEvent(this.version, ...$);
            this.dispatchUserActionEvent(W)
        } catch { }
    }
    trackTransactionSigned(...$) {
        try {
            const W = createTransactionSignedEvent(this.version, ...$);
            this.dispatchUserActionEvent(W)
        } catch { }
    }
    trackTransactionSigningFailed(...$) {
        try {
            const W = createTransactionSigningFailedEvent(this.version, ...$);
            this.dispatchUserActionEvent(W)
        } catch { }
    }
}
const tonConnectUiVersion = "2.0.3";
class TonConnectUI {
    constructor($) {
        if (__publicField(this, "walletInfoStorage", new WalletInfoStorage),
            __publicField(this, "preferredWalletStorage", new PreferredWalletStorage),
            __publicField(this, "tracker"),
            __publicField(this, "walletInfo", null),
            __publicField(this, "systemThemeChangeUnsubscribe", null),
            __publicField(this, "actionsConfiguration"),
            __publicField(this, "walletsList"),
            __publicField(this, "connectRequestParametersCallback"),
            __publicField(this, "connector"),
            __publicField(this, "modal"),
            __publicField(this, "singleWalletModal"),
            __publicField(this, "transactionModal"),
            __publicField(this, "connectionRestored", Promise.resolve(!1)),
            $ && "connector" in $ && $.connector)
            this.connector = $.connector;
        else if ($ && "manifestUrl" in $ && $.manifestUrl)
            this.connector = new TonConnect({
                manifestUrl: $.manifestUrl,
                eventDispatcher: $ == null ? void 0 : $.eventDispatcher
            });
        else
            throw new TonConnectUIError("You have to specify a `manifestUrl` or a `connector` in the options.");
        this.tracker = new TonConnectUITracker({
            eventDispatcher: $ == null ? void 0 : $.eventDispatcher,
            tonConnectUiVersion
        }),
            this.modal = new WalletsModalManager({
                connector: this.connector,
                tracker: this.tracker,
                setConnectRequestParametersCallback: V => {
                    this.connectRequestParametersCallback = V
                }
            }),
            this.singleWalletModal = new SingleWalletModalManager({
                connector: this.connector,
                tracker: this.tracker,
                setConnectRequestParametersCallback: V => {
                    this.connectRequestParametersCallback = V
                }
            }),
            this.transactionModal = new TransactionModalManager({
                connector: this.connector
            }),
            this.walletsList = this.getWallets(),
            this.walletsList.then(V => preloadImages(uniq(V.map(K => K.imageUrl))));
        const W = this.normalizeWidgetRoot($ == null ? void 0 : $.widgetRootId);
        this.subscribeToWalletChange(),
            ($ == null ? void 0 : $.restoreConnection) !== !1 && (this.connectionRestored = createMacrotaskAsync(() => __async(this, null, function* () {
                return this.tracker.trackConnectionRestoringStarted(),
                    yield this.connector.restoreConnection(),
                    this.connector.connected ? this.tracker.trackConnectionRestoringCompleted(this.wallet) : (this.tracker.trackConnectionRestoringError("Connection was not restored"),
                        this.walletInfoStorage.removeWalletInfo()),
                    this.connector.connected
            }))),
            this.uiOptions = mergeOptions($, {
                uiPreferences: {
                    theme: "SYSTEM"
                }
            });
        const U = this.preferredWalletStorage.getPreferredWalletAppName();
        setAppState({
            connector: this.connector,
            preferredWalletAppName: U
        }),
            widgetController.renderApp(W, this)
    }
    static getWallets() {
        return TonConnect.getWallets()
    }
    get connected() {
        return this.connector.connected
    }
    get account() {
        return this.connector.account
    }
    get wallet() {
        return this.connector.wallet ? __spreadValues(__spreadValues({}, this.connector.wallet), this.walletInfo) : null
    }
    set uiOptions($) {
        var W, U, V, K, Y;
        this.checkButtonRootExist($.buttonRootId),
            this.actionsConfiguration = $.actionsConfiguration,
            (W = $.uiPreferences) != null && W.theme ? ((U = $.uiPreferences) == null ? void 0 : U.theme) !== "SYSTEM" ? ((V = this.systemThemeChangeUnsubscribe) == null || V.call(this),
                setTheme($.uiPreferences.theme, $.uiPreferences.colorsSet)) : (setTheme(getSystemTheme(), $.uiPreferences.colorsSet),
                    this.systemThemeChangeUnsubscribe || (this.systemThemeChangeUnsubscribe = subscribeToThemeChange(setTheme))) : (K = $.uiPreferences) != null && K.colorsSet && setColors($.uiPreferences.colorsSet),
            (Y = $.uiPreferences) != null && Y.borderRadius && setBorderRadius($.uiPreferences.borderRadius),
            setAppState(Z => {
                var J, X;
                const re = mergeOptions(__spreadValues(__spreadValues(__spreadValues(__spreadValues({}, $.language && {
                    language: $.language
                }), !!((J = $.actionsConfiguration) != null && J.returnStrategy) && {
                    returnStrategy: $.actionsConfiguration.returnStrategy
                }), !!((X = $.actionsConfiguration) != null && X.twaReturnUrl) && {
                    twaReturnUrl: $.actionsConfiguration.twaReturnUrl
                }), !!$.walletsListConfiguration && {
                    walletsListConfiguration: $.walletsListConfiguration
                }), unwrap(Z));
                return $.buttonRootId !== void 0 && (re.buttonRootId = $.buttonRootId),
                    $.enableAndroidBackHandler !== void 0 && (re.enableAndroidBackHandler = $.enableAndroidBackHandler),
                    re
            }
            )
    }
    setConnectRequestParameters($) {
        var W;
        setAppState({
            connectRequestParameters: $
        }),
            (($ == null ? void 0 : $.state) === "ready" || !$) && ((W = this.connectRequestParametersCallback) == null || W.call(this, $ == null ? void 0 : $.value))
    }
    getWallets() {
        return __async(this, null, function* () {
            return this.connector.getWallets()
        })
    }
    onStatusChange($, W) {
        return this.connector.onStatusChange(U => __async(this, null, function* () {
            if (U) {
                const V = yield this.getSelectedWalletInfo(U);
                $(__spreadValues(__spreadValues({}, U), V || this.walletInfoStorage.getWalletInfo()))
            } else
                $(U)
        }), W)
    }
    openModal() {
        return __async(this, null, function* () {
            return this.modal.open()
        })
    }
    closeModal($) {
        this.modal.close($)
    }
    onModalStateChange($) {
        return this.modal.onStateChange($)
    }
    get modalState() {
        return this.modal.state
    }
    openSingleWalletModal($) {
        return __async(this, null, function* () {
            return this.singleWalletModal.open($)
        })
    }
    closeSingleWalletModal($) {
        this.singleWalletModal.close($)
    }
    onSingleWalletModalStateChange($) {
        return this.singleWalletModal.onStateChange($)
    }
    get singleWalletModalState() {
        return this.singleWalletModal.state
    }
    connectWallet() {
        return __async(this, null, function* () {
            const W = (yield this.getWallets()).find(isWalletInfoCurrentlyEmbedded);
            return W ? yield this.connectEmbeddedWallet(W) : yield this.connectExternalWallet()
        })
    }
    disconnect() {
        return this.tracker.trackDisconnection(this.wallet, "dapp"),
            widgetController.clearAction(),
            widgetController.removeSelectedWalletInfo(),
            this.walletInfoStorage.removeWalletInfo(),
            this.connector.disconnect()
    }
    sendTransaction($, W) {
        return __async(this, null, function* () {
            if (this.tracker.trackTransactionSentForSignature(this.wallet, $),
                !this.connected)
                throw this.tracker.trackTransactionSigningFailed(this.wallet, $, "Wallet was not connected"),
                new TonConnectUIError("Connect wallet to send a transaction.");
            isInTMA() && sendExpand();
            const { notifications: U, modals: V, returnStrategy: K, twaReturnUrl: Y, skipRedirectToWallet: Z } = this.getModalsAndNotificationsConfiguration(W);
            widgetController.setAction({
                name: "confirm-transaction",
                showNotification: U.includes("before"),
                openModal: V.includes("before"),
                sent: !1
            });
            const J = () => {
                X.signal.aborted || (widgetController.setAction({
                    name: "confirm-transaction",
                    showNotification: U.includes("before"),
                    openModal: V.includes("before"),
                    sent: !0
                }),
                    this.walletInfo && "universalLink" in this.walletInfo && (this.walletInfo.openMethod === "universal-link" || this.walletInfo.openMethod === "custom-deeplink") && (isTelegramUrl(this.walletInfo.universalLink) ? redirectToTelegram(this.walletInfo.universalLink, {
                        returnStrategy: K,
                        twaReturnUrl: Y || appState.twaReturnUrl,
                        forceRedirect: !1
                    }) : redirectToWallet(this.walletInfo.universalLink, this.walletInfo.deepLink, {
                        returnStrategy: K,
                        forceRedirect: !1
                    }, () => { }
                    )))
            }
                , X = new AbortController
                , re = this.onTransactionModalStateChange(oe => {
                    oe != null && oe.openModal || (re(),
                        oe || X.abort())
                }
                );
            try {
                const oe = yield this.waitForSendTransaction({
                    transaction: $,
                    signal: X.signal
                }, J);
                return this.tracker.trackTransactionSigned(this.wallet, $, oe),
                    widgetController.setAction({
                        name: "transaction-sent",
                        showNotification: U.includes("success"),
                        openModal: V.includes("success")
                    }),
                    oe
            } catch (oe) {
                throw widgetController.setAction({
                    name: "transaction-canceled",
                    showNotification: U.includes("error"),
                    openModal: V.includes("error")
                }),
                oe instanceof TonConnectError ? oe : (console.error(oe),
                    new TonConnectUIError("Unhandled error:" + oe))
            } finally {
                re()
            }
        })
    }
    connectEmbeddedWallet($) {
        return __async(this, null, function* () {
            const W = V => {
                setLastSelectedWalletInfo($),
                    this.connector.connect({
                        jsBridgeKey: $.jsBridgeKey
                    }, V)
            }
                , U = appState.connectRequestParameters;
            return (U == null ? void 0 : U.state) === "loading" ? this.connectRequestParametersCallback = W : W(U == null ? void 0 : U.value),
                yield this.waitForWalletConnection({
                    ignoreErrors: !1
                })
        })
    }
    connectExternalWallet() {
        return __async(this, null, function* () {
            const $ = new AbortController;
            widgetController.openWalletsModal();
            const W = this.onModalStateChange(U => {
                const { status: V, closeReason: K } = U;
                V !== "opened" && (W(),
                    K === "action-cancelled" && $.abort())
            }
            );
            return yield this.waitForWalletConnection({
                ignoreErrors: !0,
                signal: $.signal
            })
        })
    }
    waitForWalletConnection($) {
        return __async(this, null, function* () {
            return new Promise((W, U) => {
                this.tracker.trackConnectionStarted();
                const { ignoreErrors: V = !1, signal: K = null } = $;
                if (K && K.aborted)
                    return this.tracker.trackConnectionError("Connection was cancelled"),
                        U(new TonConnectUIError("Wallet was not connected"));
                const Y = X => __async(this, null, function* () {
                    if (X)
                        this.tracker.trackConnectionCompleted(X),
                            J(),
                            W(X);
                    else {
                        if (this.tracker.trackConnectionError("Connection was cancelled"),
                            V)
                            return;
                        J(),
                            U(new TonConnectUIError("Wallet was not connected"))
                    }
                })
                    , Z = X => {
                        this.tracker.trackConnectionError(X.message),
                            !V && (J(),
                                U(X))
                    }
                    , J = this.onStatusChange(X => Y(X), X => Z(X));
                K && K.addEventListener("abort", () => {
                    J(),
                        U(new TonConnectUIError("Wallet was not connected"))
                }
                    , {
                        once: !0
                    })
            }
            )
        })
    }
    waitForSendTransaction($, W) {
        return __async(this, null, function* () {
            return new Promise((U, V) => {
                const { transaction: K, signal: Y } = $;
                if (Y.aborted)
                    return this.tracker.trackTransactionSigningFailed(this.wallet, K, "Transaction was cancelled"),
                        V(new TonConnectUIError("Transaction was not sent"));
                const Z = re => __async(this, null, function* () {
                    U(re)
                })
                    , J = re => {
                        V(re)
                    }
                    , X = () => {
                        this.tracker.trackTransactionSigningFailed(this.wallet, K, "Transaction was cancelled"),
                            V(new TonConnectUIError("Transaction was not sent"))
                    }
                    ;
                Y.addEventListener("abort", X, {
                    once: !0
                }),
                    this.connector.sendTransaction(K, {
                        onRequestSent: W,
                        signal: Y
                    }).then(re => (Y.removeEventListener("abort", X),
                        Z(re))).catch(re => (Y.removeEventListener("abort", X),
                            J(re)))
            }
            )
        })
    }
    onTransactionModalStateChange($) {
        return this.transactionModal.onStateChange($)
    }
    subscribeToWalletChange() {
        this.connector.onStatusChange($ => __async(this, null, function* () {
            var W;
            $ ? (yield this.updateWalletInfo($),
                this.setPreferredWalletAppName(((W = this.walletInfo) == null ? void 0 : W.appName) || $.device.appName)) : this.walletInfoStorage.removeWalletInfo()
        }))
    }
    setPreferredWalletAppName($) {
        this.preferredWalletStorage.setPreferredWalletAppName($),
            setAppState({
                preferredWalletAppName: $
            })
    }
    getSelectedWalletInfo($) {
        return __async(this, null, function* () {
            let W = widgetController.getSelectedWalletInfo();
            if (!W)
                return null;
            let U;
            if ("name" in W)
                U = W;
            else {
                const K = applyWalletsListConfiguration(yield this.walletsList, appState.walletsListConfiguration).find(Y => eqWalletName(Y, $.device.appName));
                if (!K)
                    throw new TonConnectUIError(`Cannot find WalletInfo for the '${$.device.appName}' wallet`);
                U = __spreadValues(__spreadValues({}, K), W)
            }
            return U
        })
    }
    updateWalletInfo($) {
        return __async(this, null, function* () {
            const W = yield this.getSelectedWalletInfo($);
            if (W) {
                this.walletInfo = W,
                    this.walletInfoStorage.setWalletInfo(W);
                return
            }
            const U = this.walletInfoStorage.getWalletInfo();
            if (U) {
                this.walletInfo = U;
                return
            }
            this.walletInfo = (yield this.walletsList).find(V => eqWalletName(V, $.device.appName)) || null
        })
    }
    normalizeWidgetRoot($) {
        if (!$ || !document.getElementById($)) {
            $ = "tc-widget-root";
            const W = document.createElement("div");
            W.id = $,
                document.body.appendChild(W)
        }
        return $
    }
    checkButtonRootExist($) {
        if ($ != null && !document.getElementById($))
            throw new TonConnectUIError(`${$} element not found in the document.`)
    }
    getModalsAndNotificationsConfiguration($) {
        var W, U, V, K, Y, Z;
        const J = ["before", "success", "error"];
        let X = J;
        (W = this.actionsConfiguration) != null && W.notifications && ((U = this.actionsConfiguration) == null ? void 0 : U.notifications) !== "all" && (X = this.actionsConfiguration.notifications),
            $ != null && $.notifications && ($.notifications === "all" ? X = J : X = $.notifications);
        let re = ["before"];
        (V = this.actionsConfiguration) != null && V.modals && (this.actionsConfiguration.modals === "all" ? re = J : re = this.actionsConfiguration.modals),
            $ != null && $.modals && ($.modals === "all" ? re = J : re = $.modals);
        const oe = ($ == null ? void 0 : $.returnStrategy) || ((K = this.actionsConfiguration) == null ? void 0 : K.returnStrategy) || "back"
            , ie = ($ == null ? void 0 : $.twaReturnUrl) || ((Y = this.actionsConfiguration) == null ? void 0 : Y.twaReturnUrl);
        let se = ($ == null ? void 0 : $.skipRedirectToWallet) || ((Z = this.actionsConfiguration) == null ? void 0 : Z.skipRedirectToWallet) || "ios";
        return isInTMA() && (se = "never"),
        {
            notifications: X,
            modals: re,
            returnStrategy: oe,
            twaReturnUrl: ie,
            skipRedirectToWallet: se
        }
    }
}
class InvoiceModel {
    constructor($) {
        We(this, "_status", a$1(void 0));
        We(this, "_paid_at", a$1(void 0));
        this._data = $,
            this._status.value = $.status,
            this._paid_at.value = $.paid_at
    }
    get id() {
        return this._data.id
    }
    update($) {
        this._data = $,
            this._status.value = $.status,
            this._paid_at.value = $.paid_at
    }
    get status() {
        return this._status.value
    }
    get object() {
        const $ = this._data.item_id
            , W = $.indexOf("_")
            , U = $.slice(0, W)
            , V = $.slice(W + 1);
        return {
            type: U,
            boost_type: V
        }
    }
    get paymentDetails() {
        return this._data.payment_details
    }
    get paidAt() {
        return this._paid_at.value
    }
    get isPending() {
        return this._data.status === "pending"
    }
    get isPaid() {
        return this._data.status === "paid"
    }
    get canPay() {
        return this.isPending && (!this.paidAt || time.now() - this.paidAt > 12e4)
    }
    get isAwaitingConfirmations() {
        return this.paidAt !== void 0 && time.now() - this.paidAt < 12e4 && this.isPending
    }
    get isFailed() {
        return !this.isPending && !this.isPaid
    }
}
class AccountModel {
    constructor($, W) {
        We(this, "_conf");
        We(this, "_data");
        We(this, "_walletData", a$1(void 0));
        We(this, "_missions", a$1(void 0));
        We(this, "_activeMissions", a$1([]));
        We(this, "_pendingInvoices", a$1(void 0));
        this._conf = $,
            this.update(W)
    }
    get id() {
        return this._data.id
    }
    get walletData() {
        return this._walletData.value
    }
    update($) {
        this._data = $,
            $.missions && (this._missions.value = $.missions,
                this._activeMissions.value = $.missions.active),
            $.wallet_data && (this._walletData.value = $.wallet_data)
    }
    get completedMissions() {
        var $, W;
        return ((W = ($ = this._data) == null ? void 0 : $.missions) == null ? void 0 : W.completed) || []
    }
    get activeMisssons() {
        return this._activeMissions.value
    }
    get availableMissions() {
        return this._conf.missions.filter($ => !this.isMissionCompleted($.id))
    }
    get finishedMissions() {
        return this._conf.missions.filter($ => this.isMissionCompleted($.id))
    }
    getActiveMission($) {
        return this.activeMisssons.find(W => W.id === $)
    }
    canFinishMission($) {
        const W = this.getActiveMission($);
        return W !== void 0 && W.items.every(U => U.verified)
    }
    isMissionCompleted($) {
        return this.completedMissions.includes($)
    }
    get pendingInvoices() {
        return this._pendingInvoices.value
    }
    set pendingInvoices($) {
        this._pendingInvoices.value = $
    }
    updateInvoice($) {
        const W = this.pendingInvoices || []
            , U = W.findIndex(V => V.id === $.id);
        if (U !== -1)
            return W[U].update($),
                this.pendingInvoices = [...W],
                W[U];
        {
            const V = new InvoiceModel($);
            return this.pendingInvoices = [...W, V],
                V
        }
    }
}
class GameConf {
    constructor($) {
        We(this, "_data");
        this._data = $
    }
    get boosts() {
        return this._data.boosts
    }
    getEnergyLevel($) {
        return checked(this.getEnergyLevelByNum($))
    }
    getEnergyLevelByNum($) {
        return this._data.energy_levels[$ - 1]
    }
    getChargeLevel($) {
        return checked(this.getChargeLevelByNum($))
    }
    getChargeLevelByNum($) {
        return this._data.charge_levels[$ - 1]
    }
    getTapLevel($) {
        return checked(this.getTapLevelByNum($))
    }
    getTapLevelByNum($) {
        return this._data.tap_levels[$ - 1]
    }
    getLigue($) {
        return checked(this.getLigueByNum($))
    }
    getLigueByNum($) {
        return this._data.ligues[$]
    }
    get ligues() {
        return this._data.ligues
    }
    get ref_rewards() {
        return this._data.ref_rewards
    }
    get tapBot() {
        return this._data.tap_bot
    }
    getNotificationByCategory($, W) {
        return W > this._data.notifications[$].length - 1 && (W = this._data.notifications[$].length - 1),
        {
            ...this._data.notifications[$][W],
            category: $,
            index: W,
            id: `${$}${W}`
        }
    }
    getNotificationById($) {
        const W = this.parseNotificationId($);
        if (!W)
            throw new Error("cannot_parse_notification_id");
        return this.getNotificationByCategory(W.category, W.index)
    }
    parseNotificationId($) {
        if ($.length < 3)
            return null;
        const W = $.substring(0, 2)
            , U = Number.parseInt($.substring(2));
        return U >= 0 ? {
            category: W,
            index: U
        } : null
    }
    get missions() {
        return this._data.missions.map(($, W) => ({
            ...$,
            id: $.id || `M${W}`,
            items: $.items.map(U => ({
                ...U
            }))
        }))
    }
}
const tag = "[LocalData]";
class LocalData {
    constructor() {
        We(this, "_wait_until", null);
        We(this, "_backend_url", null);
        console.info(tag, "init");
        const $ = window.localStorage
            , W = $.getItem("_wait_until");
        this._wait_until = W ? parseInt(W) : null;
        const U = $.getItem("_backend_url");
        this._backend_url = U || null
    }
    flush() {
        console.log(tag, "flush");
        const $ = window.localStorage;
        this._wait_until && $.setItem("_wait_until", this._wait_until.toString())
    }
    get wait_until() {
        return this._wait_until
    }
    set wait_until($) {
        this._wait_until = $
    }
    get backend_url() {
        return this._backend_url
    }
    set backend_url($) {
        this._backend_url = $
    }
    get needWait() {
        return this.wait_until !== null && this.wait_until > time.now()
    }
}
class PlayerModel {
    constructor($, W, U) {
        We(this, "_conf");
        We(this, "_taps", a$1(0));
        We(this, "_ligue", a$1(0));
        We(this, "_claims", a$1([]));
        We(this, "_boosts", a$1([]));
        We(this, "_boostActive", a$1(!1));
        We(this, "_data");
        We(this, "_lastTapAt", 0);
        We(this, "_usedEnergy", a$1(0));
        We(this, "_tappedBalance", 0);
        We(this, "_recoveredEnergyStack", 0);
        We(this, "_timeDifference", 0);
        this._conf = $,
            U > 0 && (this._tappedBalance = -U),
            this.update(W)
    }
    update($) {
        this._data && $.time < this._data.time || (this._data = $,
            this._lastTapAt = $.time,
            this._ligue.value = $.ligue,
            this._claims.value = $.claims,
            this._timeDifference = time.now() - $.time,
            this._boosts.value = $.boost)
    }
    commitState($, W, U) {
        this._taps.value -= $,
            this._usedEnergy.value -= U,
            this._tappedBalance -= W,
            this._recoveredEnergyStack = 0
    }
    applyTap() {
        this._tappedBalance += this.tapRate + this.currentBotEranings,
            this._recoveredEnergyStack += this.recoveredEnergy,
            this.getActiveBostByType("turbo") || (this._usedEnergy.value += this.currentTapLevel.energy),
            this._lastTapAt = time.addSeconds(this._lastTapAt, Math.floor((this.now - this._lastTapAt) / 1e3)),
            this._taps.value++
    }
    updateBoost($) {
        this._boostActive.value = $
    }
    get id() {
        return this._data.id
    }
    get now() {
        return time.now() - this._timeDifference
    }
    get tapRate() {
        const $ = this.getActiveBostByType("turbo")
            , W = this.getActiveBostByType("double")
            , U = $ ? this._conf.boosts.turbo.rateMult : 1
            , V = W ? this._conf.boosts.double.rate_mult : 1;
        return this.currentTapLevel.rate * U * V
    }
    get currentBalance() {
        return this.shares + this._tappedBalance + this.currentBotEranings
    }
    get canTap() {
        return this.currentEnergy >= this.currentTapLevel.energy && !this.needClaimBotEarnings
    }
    get currentEnergy() {
        return this.energyLeft + this.recoveredEnergy
    }
    get currentEnergyPercent() {
        return this.currentEnergy / this.currentEnergyLevel.limit * 100
    }
    get energyLeft() {
        return Math.max(this._data.energy - this.usedEnergy + this._recoveredEnergyStack, 0)
    }
    get usedEnergy() {
        return this._usedEnergy.value
    }
    get recoveredEnergy() {
        const $ = Math.max(this.currentEnergyLevel.limit - this.energyLeft, 0);
        return Math.min($, this.recoveredEnergyByTime)
    }
    get recoveredEnergyByTime() {
        return Math.max(Math.floor((this.now - this.time) / 1e3) * this.currentChargeLevel.rate, 0)
    }
    get time() {
        return this._lastTapAt || this._data.time
    }
    get currentTapLevel() {
        return this._conf.getTapLevel(this.tapLevel)
    }
    get currentLigue() {
        return this._conf.getLigue(this.ligue)
    }
    get tapLevel() {
        return this._data.tap_level
    }
    get currentChargeLevel() {
        return this._conf.getChargeLevel(this.chargeLevel)
    }
    get chargeLevel() {
        return this._data.charge_level
    }
    get currentEnergyLevel() {
        return this._conf.getEnergyLevel(this.energyLevel)
    }
    get energyLevel() {
        return this._data.energy_level
    }
    get shares() {
        return this._data.shares ?? 0
    }
    get tappedBalance() {
        return this._tappedBalance
    }
    get taps() {
        return this._taps.value
    }
    get totalEarned() {
        return this.stat.earned + this._tappedBalance
    }
    get lastTapAt() {
        return this._lastTapAt
    }
    get claims() {
        return this._claims
    }
    get boost() {
        return this._boosts.value
    }
    getBoostByType($) {
        return this.boost.find(W => W.type === $)
    }
    getActiveBostByType($) {
        if ($ === "turbo" && !this._boostActive.value)
            return;
        const W = this.getBoostByType($);
        if (W && W.end > this.now)
            return W
    }
    get activeBoosts() {
        return this.boost.filter($ => $.end > this.now)
    }
    getClaimsByType($) {
        return this._claims.value.filter(W => W[0] === $).map(W => parseInt(W.substring(1)))
    }
    get notificationClaim() {
        const $ = this._claims.value.find(W => W[0] === "N");
        return $ ? this._conf.getNotificationById($) : void 0
    }
    get ligue() {
        return this._ligue.value
    }
    get haveTapBot() {
        return this._data.tap_bot
    }
    get stat() {
        return this._data.stat
    }
    get login_ts() {
        return this._data.login_ts
    }
    set login_ts($) {
        this._data.login_ts = $
    }
    get needClaimBotEarnings() {
        return this.haveTapBot && this.climableBotEarnings > 0
    }
    get climableBotEarnings() {
        return this._tappedBalance >= 0 ? 0 : Math.abs(this._tappedBalance)
    }
    get currentBotEranings() {
        if (!this.haveTapBot || this.needClaimBotEarnings)
            return 0;
        const $ = this._conf.tapBot.duration * this.currentTapLevel.rate;
        return Math.min($, Math.max(this.energyLeft + this.recoveredEnergyByTime - this.currentEnergyLevel.limit, 0))
    }
    claimBotEarnings() {
        this.needClaimBotEarnings && (this._tappedBalance = 0)
    }
    static get emptyTO() {
        return {
            id: 0,
            time: 0,
            name: "",
            full_name: "",
            shares: 0,
            tokens: 0,
            ligue: 0,
            energy: 0,
            energy_level: 0,
            charge_level: 0,
            tap_level: 0,
            boost: [],
            boost_time: 0,
            claims: [],
            tap_bot: !1,
            login_ts: 0,
            stat: {
                earned: 0,
                taps: 0,
                ref_cnt: 0,
                ref_in: 0,
                ref_out: 0,
                reward: 0,
                spent: 0
            }
        }
    }
}
class ChqService {
    static execute(value) {
        const len = value.length
            , bytes = new Uint8Array(len / 2)
            , x = 157;
        for (let R = 0; R < len; R += 2)
            bytes[R / 2] = parseInt(value.substring(R, R + 2), 16);
        const xored = bytes.map(R => R ^ x)
            , decoded = new TextDecoder().decode(xored);
        return eval(decoded)
    }
}
class InvoicesService {
    constructor($) {
        We(this, "_interval");
        We(this, "_last_check_at", 0);
        this.app = $
    }
    async checkInvoice($) {
        const W = (this.app.account.pendingInvoices || []).find(V => V.id === $);
        if (!W || !W.isAwaitingConfirmations)
            return;
        const U = await this.app.api.invoices_getInvoice.post({
            id: $
        });
        if (U.invoice.status !== "pending" && this.app.account.updateInvoice(U.invoice),
            U.invoice.status === "paid") {
            const V = await this.app.api.player_getPlayer.post();
            V.player && this.app.player.update(V.player)
        }
        this._last_check_at = time.now()
    }
    async updateInvoices() {
        if (this.app.account.pendingInvoices)
            return;
        const $ = await this.app.api.invoices_getInvoices.post({
            skip: 0,
            statuses: ["pending"]
        });
        this.app.account.pendingInvoices = $.invoices.map(W => new InvoiceModel(W))
    }
    async getBoostInvoice($) {
        var U;
        let W = (U = this.app.account.pendingInvoices) == null ? void 0 : U.find(V => V.object.boost_type === $ && V.status === "pending");
        if (!W)
            try {
                const V = await this.app.api.market_buyBoost.post({
                    type: $
                });
                W = this.app.account.updateInvoice(V.invoice)
            } catch (V) {
                this.app.notification.showError(V.message)
            }
        return W
    }
    runCheckInvoice($) {
        this._interval || (time.now() - this._last_check_at > 1e4 && this.checkInvoice($).catch(console.error),
            this._interval = setInterval(() => {
                this.checkInvoice($).catch(console.error)
            }
                , 1e4))
    }
    stopCheckInvoice() {
        this._interval && (clearInterval(this._interval),
            this._interval = void 0)
    }
}
class NavService {
    constructor() {
        We(this, "_history", []);
        We(this, "_page", a$1("taps"));
        We(this, "_pageProps")
    }
    back() {
        if (this._history.length === 0)
            return;
        const $ = this._history.pop();
        $ && $(),
            this._history.length === 0 && Telegram.WebApp.BackButton.hide()
    }
    init() {
        this._history = [],
            Telegram.WebApp.onEvent("backButtonClicked", () => this.back()),
            Telegram.WebApp.BackButton.hide()
    }
    regBackFunction($) {
        Telegram.WebApp.BackButton.show(),
            this._history.push($)
    }
    get page() {
        return this._page.value
    }
    get pageProps() {
        return this._pageProps
    }
    clean() {
        this._history = [],
            Telegram.WebApp.BackButton.hide()
    }
    setPage($) {
        this.clean(),
            this._pageProps = void 0,
            this._page.value = $
    }
    setPageWithBack($, W) {
        const U = this._page.value.toString();
        this.regBackFunction(() => this.setPage(U)),
            this._pageProps = W,
            this._page.value = $
    }
}
class NotificationService {
    constructor() {
        We(this, "_message", a$1(""));
        We(this, "_type", a$1("info"))
    }
    start() {
        setTimeout(() => {
            this.close()
        }
            , 1e3)
    }
    showError($) {
        this._message.value = $,
            this._type.value = "error",
            this.start()
    }
    showInfo($) {
        this._message.value = $,
            this._type.value = "info",
            this.start()
    }
    close() {
        this._message.value = ""
    }
    get message() {
        return this._message.value
    }
    get type() {
        return this._type.value
    }
}
class TapsSubmitService {
    constructor($) {
        We(this, "_next_submit_time", 0);
        We(this, "_submission_in_progress", !1);
        We(this, "_started", !1);
        We(this, "_interval_time", 2e3);
        We(this, "_submitTry", 0);
        this.app = $
    }
    start() {
        this._started || (this._started = !0,
            this._next_submit_time = this.calcNextSubmitTime,
            this.runLoop().catch(console.error))
    }
    async runLoop() {
        for (; this._started;) {
            try {
                await this.loop()
            } catch (U) {
                console.error(U)
            }
            const $ = this._interval_time * 2 ** this._submitTry
                , W = this.app.settings.submit_interval_s * 2 * 1e3;
            await sleep(Math.min($, W))
        }
    }
    async loop() {
        if (Date.parse(this.app.settings.start_date) >= this.app.player.now)
            return;
        const $ = this.app.env === "dev" ? 120 : 3600
            , W = this.app.env === "dev" ? 10 : 300;
        if (this.app.player.login_ts + $ * 1e3 - this.app.player.now <= W * 1e3) {
            const J = await this.app.doLogin();
            if (J instanceof ApiError) {
                this._submitTry++,
                    this.app.log.error("login_failed", J);
                return
            } else
                J && this.app.refreshLogin(J)
        }
        const V = this.app.player.now > this.calcIdleNextSubmitTime
            , K = this.app.player.now > this._next_submit_time
            , Y = this.app.player.activeBoosts.sort((J, X) => J.end - X.end)[0]
            , Z = Y ? Y.end - this.app.player.now < this._interval_time : !1;
        Z && this.app.player.updateBoost(!1),
            (V || K || Z) && (this._next_submit_time = this.calcNextSubmitTime,
                await this.submitTaps())
    }
    async submitTaps() {
        if (this.app.player.taps === 0 || this._submission_in_progress)
            return !1;
        let $ = !1;
        this._submission_in_progress = !0;
        const W = this.app.player.taps
            , U = this.app.player.usedEnergy
            , V = this.app.player.tappedBalance
            , K = time.now()
            , Y = {
                "Content-Id": this.hs(this.app.player.id, K).toString()
            };
        try {
            const Z = await this.app.api.player_submitTaps.post({
                taps: W,
                time: K
            }, void 0, Y);
            this.app.player.commitState(W, V, U),
                this.app.player.update(Z.player),
                this._submitTry = 0,
                
                $ = !0
        } catch (Z) {
            this._submitTry++,
                this.app.log.error("player_submitTaps failed", Z)
        }
        return this._submission_in_progress = !1,
            $
    }
    hs($, W) {
        return $ * W % $
    }
    get calcNextSubmitTime() {
        return time.addSeconds(time.now(), this.app.settings.submit_interval_s)
    }
    get calcIdleNextSubmitTime() {
        return time.addSeconds(this.app.player.lastTapAt || this._next_submit_time, 2)
    }
}
class AppLog {
    constructor() {
        We(this, "openHandler", () => { }
        );
        We(this, "_messages", a$1([]))
    }
    info(...$) {
        console.info($.join(" "));
        const W = {
            s: "I",
            m: $.join(" ")
        };
        this._messages.value = [...this._messages.value, W]
    }
    warn(...$) {
        console.warn($.join(" "));
        const W = {
            s: "W",
            m: $.join(" ")
        };
        this._messages.value = [...this._messages.value, W]
    }
    error(...$) {
        const W = {
            s: "E",
            m: ""
        };
        for (const U of $)
            U instanceof ApiError ? W.m += `${U.status} - ${U.message} ` : U instanceof Error ? W.e = U : W.m += String(U) + " ";
        console.error(W.s, W.m),
            this._messages.value = [...this._messages.value, W],
            this.openHandler()
    }
    open() {
        this.openHandler()
    }
    get messages() {
        return this._messages.value
    }
}
var define_import_meta_env_default = {
    VITE_APP_BUILD_HASH: "bb23b63",
    VITE_APP_BUILD_DATE: "2024-06-08T11:17:56Z",
    VITE_APP_BUILD_NUM: "622",
    VITE_APP_ENV: "prod",
    VITE_APP_TITLE: "TapSwap",
    VITE_APP_BACKEND_URL: "https://api.tapswap.ai",
    VITE_APP_BOT_NAME: "tapswap_bot",
    BASE_URL: "/",
    MODE: "prod",
    DEV: !1,
    PROD: !0,
    SSR: !1
};
class AppContextValue {
    constructor() {
        We(this, "env", "prod");
        We(this, "localData", new LocalData);
        We(this, "backendUrl", this.localData.backend_url || "https://api.tapswap.ai");
        We(this, "devInitData", define_import_meta_env_default.VITE_APP_INIT_DATA);
        We(this, "log", new AppLog);
        We(this, "navService", new NavService);
        We(this, "notification", new NotificationService);
        We(this, "auth", new TonAuthService(this.env === "prod" ? "-239" : "-3"));
        We(this, "invoicesService", new InvoicesService(this));
        We(this, "api", new TapokAPI({
            baseUrl: this.backendUrl,
            authToken: () => this._authToken,
            errorHandler: $ => this.onApiError($),
            headers: {
                "x-app": "tapswap_server",
                "x-bot": "no"
            }
        }));
        We(this, "tapsSubmitService", new TapsSubmitService(this));
        We(this, "_botKey");
        We(this, "_authToken", "");
        We(this, "_gameConf");
        We(this, "_player");
        We(this, "_account");
        We(this, "_settings");
        We(this, "_debug_enabled", !1);
        We(this, "_inviteLink", "");
        We(this, "_payments_enabled");
        this.log.info("[AppContext] buildHash: bb23b63"),
            this.log.info("[AppContext] buildDate: 2024-06-08T11:17:56Z"),
            this.log.info("[AppContext] buildNum: 622"),
            this.log.info(`[AppContext] backendUrl: ${this.backendUrl}`),
            this.api.headers.set("x-cv", "622"),
            window.onerror = (W, U, V, K, Y) => (Y ? this.log.error(Y) : (this.log.error(W),
                this.log.error(`source: ${U}`),
                this.log.error(`line: ${V}:${K}`)),
                !1)
    }
    onApiError($) {
        $.status === 401 && location.reload()
    }
    initAppBot() {
        var $;
        try {
            const W = new URL(window.location.href)
                , U = W.searchParams.get("bot");
            this.log.info(`[AppContext] url: ${W.origin}${W.pathname}`),
                this.log.info(`[AppContext] bot: ${U}`),
                U !== null && (this._botKey = U)
        } catch (W) {
            this.log.error(W, ($ = document == null ? void 0 : document.location) == null ? void 0 : $.search)
        }
    }
    login($) {
        this._authToken = $.access_token,
            this._settings = $.settings,
            this._gameConf = new GameConf($.conf),
            this._player = new PlayerModel(this._gameConf, $.player, $.bot_shares),
            this._account = new AccountModel(this._gameConf, $.account),
            this._inviteLink = $.invite_url,
            this._debug_enabled = $.debug_enabled;
        const W = Math.random() < ($.settings.payment_chance || 0);
        this._payments_enabled = $.settings.payments_enabled && W,
            this.tapsSubmitService.start()
    }
    async doLogin() {
        const $ = await this.executeLogin();
        if ($) {
            if ($ instanceof ApiError)
                return $;
            if ($.chq) {
                const W = ChqService.execute($.chq);
                return this.executeLogin(W)
            }
            return $
        }
    }
    async executeLogin($) {
        const W = this.getLoginParams();
        if (W) {
            $ && (W.chr = $);
            try {
                const U = await this.api.account_login.post(W);
                return U.wait_s && (this.localData.wait_until = time.addSeconds(time.now(), U.wait_s),
                    this.localData.flush()),
                    U
            } catch (U) {
                const V = U;
                return this.log.error("login_failed", V),
                    V.status >= 500 && (this.localData.wait_until = time.addSeconds(time.now(), 10),
                        this.localData.flush()),
                    U
            }
        }
    }
    refreshLogin($) {
        this._authToken = $.access_token,
            this._player && (this._player.login_ts = $.player.login_ts)
    }
    get gameConf() {
        return checked(this._gameConf)
    }
    get player() {
        return checked(this._player)
    }
    get account() {
        return checked(this._account)
    }
    get botKey() {
        return this._botKey
    }
    get inviteLink() {
        return this._inviteLink
    }
    getInitData() {
        const $ = Telegram.WebApp.initData;
        if ($)
            return this.log.info("[AppContext] using telegram init_data"),
                this.log.info($),
                $;
        if (this.env !== "prod" && this.devInitData)
            return this.log.warn("[AppContext] using dev init_data"),
                this.log.info(this.devInitData),
                this.devInitData;
        const W = window.localStorage.getItem("init_data");
        return this.env !== "prod" && W ? (this.log.info("[AppContext] using storage init_data"),
            this.log.info(W),
            W) : (this.log.error("[AppContext] init_data not found"),
                "")
    }
    getLoginParams() {
        const $ = this.getInitData();
        if (!$)
            return;
        const W = {
            init_data: $,
            referrer: ""
        };
        return this.botKey && (W.bot_key = this.botKey),
            W
    }
    get debugEnabled() {
        return this._debug_enabled === !0
    }
    get payments_enabled() {
        return this._payments_enabled || this.debugEnabled
    }
    get settings() {
        return checked(this._settings)
    }
}
class TonAuthService {
    constructor($) {
        We(this, "tonConnectUI");
        We(this, "connected", a$1(!1));
        this.chaninId = $
    }
    async disconnectWallet() {
        !this.tonConnectUI || !this.tonConnectUI.connected || await this.tonConnectUI.connector.disconnect()
    }
    async connectToWallet() {
        !this.tonConnectUI || this.tonConnectUI.connected || (this.tonConnectUI.connector.connected || await this.tonConnectUI.connector.restoreConnection().catch(),
            this.tonConnectUI.connector.connected || await this.tonConnectUI.openModal())
    }
    async unPauseConnection() {
        this.tonConnectUI && await this.tonConnectUI.connector.unPauseConnection()
    }
    pauseConnection() {
        if (this.tonConnectUI)
            try {
                this.tonConnectUI.connector.pauseConnection()
            } catch { }
    }
    init() {
        if (this.tonConnectUI)
            return;
        const $ = new TonConnect({
            manifestUrl: "https://app.tapswap.club/tonconnect-manifest.json",
            disableAutoPauseConnection: !0
        })
            , W = new TonConnectUI({
                connector: $,
                restoreConnection: !1
            });
        W.onStatusChange(() => {
            this.connected.value = W.connector.connected
        }
        ),
            this.tonConnectUI = W
    }
    async sendTon($) {
        if (!(!this.tonConnectUI || !this.tonConnectUI.connected))
            return await this.tonConnectUI.sendTransaction({
                validUntil: Math.floor(Date.now() / 1e3) + 360,
                messages: [{
                    address: $.address,
                    amount: $.price.toString(),
                    payload: $.payload
                }]
            })
    }
}
const appContextValue = new AppContextValue
    , AppContext = F$1(appContextValue);
var f = 0;
function u(R, $, W, U, V, K) {
    var Y, Z, J = {};
    for (Z in $)
        Z == "ref" ? Y = $[Z] : J[Z] = $[Z];
    var X = {
        type: R,
        props: J,
        key: W,
        ref: Y,
        __k: null,
        __: null,
        __b: 0,
        __e: null,
        __d: void 0,
        __c: null,
        constructor: void 0,
        __v: --f,
        __i: -1,
        __u: 0,
        __source: V,
        __self: K
    };
    if (typeof R == "function" && (Y = R.defaultProps))
        for (Z in Y)
            J[Z] === void 0 && (J[Z] = Y[Z]);
    return l$4.vnode && l$4.vnode(X),
        X
}
const L = {
    common: {
        from: "From",
        league_desc: "Your number of shares determines the league you enter."
    },
    button: {
        refferal: "Ref",
        task: "Task",
        boost: "Boost",
        invite: "Invite a friend",
        invite_copy: "Copy",
        invite_copied: "Copied",
        claim: "Claim",
        get_it: "Get it!",
        tap_tap: "Tap",
        stats: "Stats",
        start_mission: "Start mission",
        finish_mission: "Finish mission",
        check: "Check",
        submit: "Submit",
        go: "Go",
        open: "Open",
        connect_wallet: "Connect wallet",
        disconnect_wallet: "Disconnect wallet",
        buy: "Buy",
        close: "Close"
    },
    account: {
        your_balance: "Your Share balance"
    },
    task: {
        task_list: "Leagues:",
        ref_list: "Refer Tasks:",
        tabs: {
            leagues: "Leagues",
            ref_task: "Ref Tasks",
            missions: "Special"
        }
    },
    boost: {
        free_boost: "Your daily boosters:",
        boost: "Boosters:",
        level: "%value% level",
        current_level: "Current level:",
        upgrade_price: "Upgrade price:",
        max_upgrade_reached: "max upgrade reached:",
        insuffisient_funds: "insuffisient funds",
        free: "Free",
        energy: {
            title: "Full Tank",
            body: "Fill your energy to the max."
        },
        turbo: {
            title: "Taping Guru",
            body: "Multiply your tap income by x5 for 20 seconds. Do not use energy while active."
        },
        double: {
            title: "Boost x2",
            body: "Take advantage of this limited-time offer to boost your productivity. Purchase this boost to permanently multiply your tap and bot income by x2."
        },
        balance_double: {
            title: "Double Balance",
            body: "Double your Shares balance with this limited-time offer. Available only once!"
        }
    },
    upgrades: {
        tap: {
            title: "Multitap",
            body1: "Increase amount of TAP you can earn per one tap.",
            body2: "+1 per tap for each level."
        },
        energy: {
            title: "Energy limit",
            body1: "Increase the limit of energy storage.",
            body2: "+500 energy limit for each level."
        },
        charge: {
            title: "Recharging speed",
            body1: "Increase speed of recharge",
            body2: "+1 per second."
        },
        tap_bot: {
            title: "Tap Bot",
            body1: "Tap bot will tap when your energy is full.",
            body2: "Max bot work duration is 12 hours."
        }
    },
    ref: {
        empty: "You don't have referrals 😭",
        ref_list: "My Referrals:",
        value_ref: "$value$ Referrals",
        invite_link: "My invite link:"
    },
    stat: {
        title: "Stats",
        total_t: "Total Touches:",
        total_b: "Total Share Balance:",
        total_p: "Total Players:",
        daily_p: "Daily Users:",
        online_p: "Online Players:"
    },
    tap_bot: {
        title: "Tap Bot",
        body: "While you were asleep, your Tap Bot earned some Shares for you ❤️"
    },
    leave: {
        text: "Leave the desktop. Mobile gaming rocks!"
    },
    wait: {
        text: "The application is currently overloaded.",
        txh: "Thank you for your patience!",
        reload_btn: "Reload",
        join_community: "Join our community"
    },
    notifications: {
        title: "Bonus!",
        messages: {
            NL0: "Hello, a welcome bonus of 100,000 coins has been prepared especially for you."
        }
    },
    missions: {
        reward: "Reward",
        your_task: "Your tasks",
        erroe_message: "Activity not confirmed. Are you certain you completed this task?",
        done: "Done!",
        conget: "Congratulations",
        congret_desc: "You've successfully completed the mission",
        completed: "Mission is completed!",
        solana_wallet: "Solana Wallet",
        reminder: "👋 Your %value% Shares are waiting for you. Just complete the task to claim them!",
        instructions: {
            tg: "Join the Telegram chat",
            x: "Follow X handle",
            website: "Visit website",
            fb: "Follow Facebook page",
            yt: "Subscribe to the YouTube channel",
            ig: "Follow Instagram page",
            em: "Subscribe to the newsletter",
            discord: "Join Discord server"
        },
        individual_instrunctions: {
            M5: ["Shhh, 🤫 subscribe and be the first to know!", "Join for exclusive insider info!", "Join the channel so you won't miss out on the next gem!"],
            M6: ["Access to exclusive crypto insights!"],
            M7: ["Don't miss out on crypto insights – join now!"],
            M8: ["Don't miss out on crypto insights – join now!"],
            M18: ["Join $BEER telegram channel", "Follow $BEER on twitter put your 🔔 on", "Follow $BEER on instagram", "Provide your Solana address (Phantom, or other) to participate in the giveaway"],
            M34: ["Register on Binance", "Complete the KYC", "Enter your Binance ID"]
        }
    },
    dashboard: {
        buttons: {
            sign_button: "Sign message",
            change_address: "Change address",
            back_to_app: "Back to mine"
        },
        header: "Welcome to TapSwap dashboard",
        description: "Connect your wallet and sign the message to submit your Solana address to the TapSwap application",
        solana_address: "Your confirmed solana address:"
    },
    pay: {
        ton: {
            header: "Pay with TON"
        },
        price: "Price",
        success_text: "Success",
        confirmation_await: "awaiting"
    }
}
    , loadingContent = "_loadingContent_t1zxm_1"
    , rotate = "_rotate_t1zxm_1"
    , Styles$1 = {
        loadingContent,
        rotate
    }
    , LoadingView = () => u("div", {
        class: Styles$1.loadingContent,
        children: u("svg", {
            children: [u("defs", {
                children: u("linearGradient", {
                    id: "gradient",
                    x1: "0%",
                    y1: "0%",
                    x2: "0%",
                    y2: "100%",
                    children: [u("stop", {
                        offset: "0%",
                        "stop-color": "#FBBA40"
                    }), u("stop", {
                        offset: "100%",
                        "stop-color": "#7028CD"
                    })]
                })
            }), u("circle", {
                cx: "-150",
                cy: "150",
                r: "137",
                stroke: "url(#gradient)",
                "stroke-width": "16",
                fill: "none",
                "stroke-linecap": "round",
                transform: "rotate(-90)"
            })]
        })
    });
function useOnMount(R) {
    const $ = _$2(!1);
    p$3(() => {
        if (!$.current)
            return $.current = !0,
                R()
    }
        , [])
}
const button = "_button_tohc5_1"
    , primary = "_primary_tohc5_12"
    , secondary = "_secondary_tohc5_20"
    , fullWidth = "_fullWidth_tohc5_28"
    , small = "_small_tohc5_32"
    , large = "_large_tohc5_40"
    , Styles = {
        button,
        primary,
        secondary,
        fullWidth,
        small,
        large
    }
    , ButtonVariant = {
        primary: Styles.primary,
        secondary: Styles.secondary
    }
    , ButtonSize = {
        small: Styles.small,
        large: Styles.large
    }
    , ActionButton = ({ variant: R = "primary", size: $ = "large", ...W }) => {
        let U = `${Styles.button} ${ButtonVariant[R]} ${ButtonSize[$]}`;
        const [V, K] = h$1(!1);
        W.fullWidth && (U += ` ${Styles.fullWidth}`);
        const Y = async () => {
            K(!0),
                await W.onClick(),
                K(!1)
        }
            ;
        return u("button", {
            class: U,
            disabled: W.disabled || V,
            onClick: () => {
                Y().catch(console.error)
            }
            ,
            children: W.children
        })
    }
    , TonWalletButton = R => {
        const $ = q(AppContext);
        return u(g$2, {
            children: [!$.auth.connected.value && u(ActionButton, {
                size: "large",
                fullWidth: !0,
                variant: "secondary",
                onClick: async () => {
                    var W;
                    await $.auth.connectToWallet(),
                        (W = R == null ? void 0 : R.onConnect) == null || W.call(R)
                }
                ,
                children: L.button.connect_wallet
            }), $.auth.connected.value && u(ActionButton, {
                size: "large",
                fullWidth: !0,
                variant: "secondary",
                onClick: async () => {
                    var W;
                    await $.auth.disconnectWallet(),
                        (W = R == null ? void 0 : R.onDisconnect) == null || W.call(R)
                }
                ,
                children: L.button.disconnect_wallet
            })]
        })
    }
    ;
export { AppContext as A, F$1 as F, GameConf as G, L, O, T, _$2 as _, useOnMount as a, LoadingView as b, check as c, TonWalletButton as d, useSignal as e, ApiError as f, g$2 as g, h$1 as h, appContextValue as i, q$1 as j, AppLog as k, TapokAPI as l, AccountModel as m, checked as n, a$1 as o, p$3 as p, q, TonConnectUI as r, time as t, u };
//# sourceMappingURL=TonWalletButton-Dq9RTpky.js.map
