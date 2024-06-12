var dt = Object.defineProperty;
var ht = (e, n, i) => (n in e ? dt(e, n, { enumerable: !0, configurable: !0, writable: !0, value: i }) : (e[n] = i));
var m = (e, n, i) => (ht(e, typeof n != "symbol" ? n + "" : n, i), i);
import { c as se, u as t, q as p, A as u, L as r, h as _, _ as Me, a as k, T as f, t as I, p as P, g as b, b as ee, d as gt, e as te, O as ut, f as mt, i as pt, j as vt } from "./TonWalletButton-Dq9RTpky.js";
class _t {
    static areEqual(n, i) {
        return n.length === i.length && n.every((s, o) => s === i[o]);
    }
    static shuffleSelf(n) {
        let i = n.length;
        for (; i !== 0; ) {
            const s = Math.floor(Math.random() * i);
            i--;
            const o = n[i];
            (n[i] = n[s]), (n[s] = o);
        }
        return n;
    }
    static getLast(n) {
        const i = n.length;
        return se(i > 0, "Array is empty!"), n[i - 1];
    }
    static lastOrDefault(n, i) {
        const s = n.length;
        return s > 0 ? n[s - 1] : i;
    }
    static getRandomIndex(n) {
        const i = n.length;
        return se(i > 0, "Array is empty!"), Math.floor(Math.random() * i);
    }
    static getRandomItem(n) {
        return n[this.getRandomIndex(n)];
    }
    static sum(n, i) {
        let s = 0;
        for (const o of n) s += i(o);
        return s;
    }
    static min(n, i) {
        const s = n.length;
        se(s > 0, "invalid length");
        let o = i(n[0]);
        for (let a = 1; a < s; a++) {
            const c = i(n[a]);
            c < o && (o = c);
        }
        return o;
    }
    static max(n, i) {
        const s = n.length;
        se(s > 0, "invalid length");
        let o = i(n[0]);
        for (let a = 1; a < s; a++) {
            const c = i(n[a]);
            c > o && (o = c);
        }
        return o;
    }
    static removeSelf(n, i) {
        for (let s = n.length - 1; s >= 0; s--) i(n[s]) && n.splice(s, 1);
    }
    static toMap(n, i) {
        const s = new Map();
        for (const o of n) s.set(i(o), o);
        return s;
    }
}
const yt = "_container_1om0l_1",
    ft = "_main_1om0l_27",
    wt = "_page_1om0l_46",
    bt = "_loading_1om0l_51",
    Ct = "_animationLayer_1om0l_56",
    K = { container: yt, main: ft, page: wt, loading: bt, animationLayer: Ct },
    Bt =
        "data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M12%204C13.0506%204%2014.0909%204.20693%2015.0615%204.60896C16.0321%205.011%2016.914%205.60028%2017.6569%206.34315C18.3997%207.08601%2018.989%207.96793%2019.391%208.93853C19.7931%209.90914%2020%2010.9494%2020%2012C20%2013.0506%2019.7931%2014.0909%2019.391%2015.0615C18.989%2016.0321%2018.3997%2016.914%2017.6569%2017.6569C16.914%2018.3997%2016.0321%2018.989%2015.0615%2019.391C14.0909%2019.7931%2013.0506%2020%2012%2020C9.87827%2020%207.84344%2019.1571%206.34315%2017.6569C4.84285%2016.1566%204%2014.1217%204%2012C4%209.87827%204.84285%207.84344%206.34315%206.34315C7.84344%204.84285%209.87827%204%2012%204ZM14.8267%209.552L11%2013.3893L9.13867%2011.528C9.07668%2011.466%209.0031%2011.4168%208.92211%2011.3833C8.84113%2011.3498%208.75433%2011.3325%208.66667%2011.3325C8.57901%2011.3325%208.49221%2011.3498%208.41122%2011.3833C8.33024%2011.4168%208.25665%2011.466%208.19467%2011.528C8.13268%2011.59%208.08351%2011.6636%208.04997%2011.7446C8.01642%2011.8255%207.99916%2011.9123%207.99916%2012C7.99916%2012.0877%208.01642%2012.1745%208.04997%2012.2554C8.08351%2012.3364%208.13268%2012.41%208.19467%2012.472L10.528%2014.8053C10.5899%2014.8674%2010.6635%2014.9167%2010.7445%2014.9503C10.8255%2014.9839%2010.9123%2015.0012%2011%2015.0012C11.0877%2015.0012%2011.1745%2014.9839%2011.2555%2014.9503C11.3365%2014.9167%2011.4101%2014.8674%2011.472%2014.8053L15.7707%2010.4933C15.8919%2010.3674%2015.9589%2010.1989%2015.9571%2010.0241C15.9554%209.84932%2015.885%209.68221%2015.7613%209.55877C15.6375%209.43534%2015.4702%209.36546%2015.2953%209.36419C15.1205%209.36293%2014.9522%209.43037%2014.8267%209.552Z'%20fill='%2328E0B9'/%3e%3c/svg%3e",
    kt =
        "data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M19.7714%2017.3067L13.5253%205.91654C13.3692%205.63749%2013.1464%205.40611%2012.8789%205.24534C12.6114%205.08458%2012.3086%205%2012.0004%205C11.6922%205%2011.3893%205.08458%2011.1218%205.24534C10.8543%205.40611%2010.6315%205.63749%2010.4754%205.91654L4.22933%2017.3067C4.07915%2017.5766%204%2017.8836%204%2018.1962C4%2018.5088%204.07915%2018.8158%204.22933%2019.0857C4.38341%2019.3664%204.60586%2019.599%204.87384%2019.7597C5.14182%2019.9204%205.44568%2020.0033%205.75425%2019.9999H18.2465C18.5548%2020.003%2018.8584%2019.92%2019.1261%2019.7593C19.3938%2019.5987%2019.616%2019.3662%2019.77%2019.0857C19.9204%2018.8159%2019.9997%2018.509%2020%2018.1964C20.0003%2017.8838%2019.9214%2017.5767%2019.7714%2017.3067ZM11.429%2011C11.429%2010.8409%2011.4892%2010.6883%2011.5963%2010.5757C11.7035%2010.4632%2011.8488%2010.4%2012.0004%2010.4C12.1519%2010.4%2012.2972%2010.4632%2012.4044%2010.5757C12.5116%2010.6883%2012.5718%2010.8409%2012.5718%2011V14C12.5718%2014.1591%2012.5116%2014.3117%2012.4044%2014.4242C12.2972%2014.5367%2012.1519%2014.6%2012.0004%2014.6C11.8488%2014.6%2011.7035%2014.5367%2011.5963%2014.4242C11.4892%2014.3117%2011.429%2014.1591%2011.429%2014V11ZM12.0004%2017.5999C11.8308%2017.5999%2011.6651%2017.5471%2011.5242%2017.4482C11.3832%2017.3494%2011.2734%2017.2088%2011.2085%2017.0443C11.1436%2016.8799%2011.1267%2016.6989%2011.1597%2016.5244C11.1928%2016.3498%2011.2744%2016.1894%2011.3943%2016.0635C11.5142%2015.9377%2011.6669%2015.852%2011.8331%2015.8172C11.9994%2015.7825%2012.1717%2015.8003%2012.3284%2015.8685C12.485%2015.9366%2012.6188%2016.0519%2012.713%2016.1999C12.8072%2016.3479%2012.8575%2016.5219%2012.8575%2016.6999C12.8575%2016.9386%2012.7672%2017.1675%2012.6064%2017.3363C12.4457%2017.5051%2012.2277%2017.5999%2012.0004%2017.5999Z'%20fill='%23D22929'/%3e%3c/svg%3e",
    At = "_h5_7nyj0_1",
    xt = { h5: At },
    R = (e) => t("h5", { class: xt.h5, children: e.children }),
    St = "_notificationContainer_1rfgf_1",
    It = "_content_1rfgf_9",
    Lt = "_info_1rfgf_24",
    Tt = "_error_1rfgf_28",
    me = { notificationContainer: St, content: It, info: Lt, error: Tt },
    Et = { info: me.info, error: me.error },
    Mt = { info: Bt, error: kt },
    Dt = () => {
        const e = p(u);
        return t("div", {
            class: me.notificationContainer,
            style: { bottom: `${e.notification.message ? "0" : "-120px"}` },
            onClick: () => e.notification.close(),
            children: t("div", { class: `${me.content} ${Et[e.notification.type]}`, children: [t("img", { src: Mt[e.notification.type], alt: e.notification.message }), t(R, { children: e.notification.message })] }),
        });
    },
    Pt = { main: K.main, page: K.page, loading: K.loading },
    x = ({ page: e = "page", ...n }) => t("div", { class: `${K.container} ${Pt[e]}`, children: [t(Dt, {}), n.children] }),
    zt = "/assets/QR Code-yXKXdErT.png",
    Vt = "_h6_7nyeu_1",
    Wt = { h6: Vt },
    H = (e) => t("h6", { class: Wt.h6, children: e.children }),
    Ht = "_leaveContainer_rxbn1_1",
    Rt = { leaveContainer: Ht },
    jt = () => t("div", { class: Rt.leaveContainer, children: [t(H, { children: r.leave.text }), t("img", { src: zt, alt: "QR Code" })] }),
    ne = "/assets/bot-einB6Dq0.png",
    j = "/assets/coin-Yc4kFV6s.png";
function De(e, n = 3) {
    if (e < 5e6) return C(e);
    const s = [
        { suffix: " T", threshold: 1e12 },
        { suffix: " B", threshold: 1e9 },
        { suffix: " M", threshold: 1e6 },
        { suffix: " K", threshold: 1e3 },
        { suffix: "", threshold: 1 },
    ].find((o) => Math.abs(e) >= o.threshold);
    return s ? (e / s.threshold).toFixed(n) + s.suffix : e;
}
function C(e) {
    const n = e.toString().split(".");
    return (n[0] = n[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ")), n.join(".");
}
function Nt(e) {
    const n = Math.floor(e / 1e3),
        i = Math.floor(n / 60),
        s = Math.floor(i / 60),
        o = Math.floor(s / 24);
    return [o, s - o * 24, i - s * 60, n - i * 60];
}
function ve(e) {
    const [n, i, s, o] = Nt(e);
    return n > 0 ? `${n}d ${i}h ${s}m ${o}s` : i > 0 ? `${i}h ${s}m ${o}s` : s > 0 ? `${s}m ${o}s` : `${o}s`;
}
const Xt = "_body1_ytgu1_1",
    Ot = { body1: Xt },
    L = (e) => t("p", { class: Ot.body1, children: e.children }),
    Gt = "_h2_y7bjm_1",
    qt = { h2: Gt },
    E = (e) => t("h2", { class: qt.h2, children: e.children }),
    Ft = "_h3_1a2e0_1",
    Ut = { h3: Ft },
    M = (e) => t("h3", { class: Ut.h3, children: e.children }),
    Yt =
        "data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M19%206.41L17.59%205L12%2010.59L6.41%205L5%206.41L10.59%2012L5%2017.59L6.41%2019L12%2013.41L17.59%2019L19%2017.59L13.41%2012L19%206.41Z'%20fill='white'/%3e%3c/svg%3e",
    $t = "_button_tohc5_1",
    Qt = "_primary_tohc5_12",
    Zt = "_secondary_tohc5_20",
    Jt = "_fullWidth_tohc5_28",
    Kt = "_small_tohc5_32",
    en = "_large_tohc5_40",
    G = { button: $t, primary: Qt, secondary: Zt, fullWidth: Jt, small: Kt, large: en },
    tn = { primary: G.primary, secondary: G.secondary },
    nn = { small: G.small, large: G.large },
    B = ({ variant: e = "primary", size: n = "large", ...i }) => {
        let s = `${G.button} ${tn[e]} ${nn[n]}`;
        const [o, a] = _(!1);
        i.fullWidth && (s += ` ${G.fullWidth}`);
        const c = async () => {
            a(!0), await i.onClick(), a(!1);
        };
        return t("button", {
            class: s,
            disabled: i.disabled || o,
            onClick: () => {
                c().catch(console.error);
            },
            children: i.children,
        });
    },
    sn = "_drowerContainer_9q941_1",
    on = "_droewrHeader_9q941_18",
    an = "_drowerContent_9q941_25",
    be = { drowerContainer: sn, droewrHeader: on, drowerContent: an },
    rn = "_imageContainer_12vh8_1",
    cn = { imageContainer: rn },
    Pe = (e) => t("div", { class: cn.imageContainer, children: t("img", { src: e.img, alt: e.alt }) }),
    z = (e) => {
        const n = Me(null);
        k(() => {
            n.current && (n.current.style.bottom = "0");
        });
        const i = f(
                (o) => {
                    n.current && (n.current.style.bottom = "-526px"), setTimeout(() => e.onClose(o), 250);
                },
                [e]
            ),
            s = f(async () => {
                await e.onAction(), i(!0);
            }, [i, e.onAction]);
        return t("div", {
            ref: n,
            class: be.drowerContainer,
            children: [
                t("div", { class: be.droewrHeader, children: t("div", { onClick: () => i(!1), children: t(Pe, { img: Yt, alt: "close" }) }) }),
                t("div", { class: be.drowerContent, children: e.children }),
                e.onAction && t(B, { variant: e.btnVariant, fullWidth: !0, onClick: s, children: e.btnText }),
            ],
        });
    },
    ln = "_image_1yc2s_1",
    dn = "_price_1yc2s_13",
    hn = "_drowerAction_1yc2s_26",
    gn = "_text_1yc2s_33",
    oe = { image: ln, price: dn, drowerAction: hn, text: gn },
    un = (e) => {
        const n = p(u),
            i = f(() => {
                n.navService.setPageWithBack("task", { mission: e.mission });
            }, [n.navService, e.mission]);
        return t(z, {
            onAction: i,
            onClose: e.onClose,
            btnVariant: "secondary",
            btnText: r.button.get_it,
            children: [
                t("div", { class: oe.image, children: t("img", { src: ne, alt: "bot_earnings" }) }),
                t("div", {
                    class: oe.drowerAction,
                    children: [
                        t("div", { class: oe.text, children: [t(E, { children: e.mission.title }), t("div", { children: t(L, { children: r.missions.reminder.replace("%value%", C(e.mission.reward)) }) })] }),
                        t("div", { class: oe.price, children: [t("img", { src: j, alt: "coin" }), t(M, { children: C(e.mission.reward) })] }),
                    ],
                }),
            ],
        });
    },
    mn = "_leaveContainer_b7w50_1",
    pn = "_buttons_b7w50_19",
    vn = "_desc_b7w50_29",
    Ce = { leaveContainer: mn, buttons: pn, desc: vn },
    _n = ({ onReload: e }) => {
        const n = p(u),
            i = f(() => (n.localData.wait_until === null ? 0 : Math.max(0, n.localData.wait_until - I.now())), [n.localData.wait_until]),
            [s, o] = _(i());
        return (
            P(() => {
                const a = setInterval(() => {
                    o(i());
                }, 1e3);
                return () => clearInterval(a);
            }, [i]),
            t("div", {
                class: Ce.leaveContainer,
                children: [
                    t("div", { class: Ce.desc, children: [t("div", { children: t("img", { src: ne }) }), t(H, { children: [t("p", { children: r.wait.text }), t("p", { children: r.wait.txh })] })] }),
                    t("div", {
                        class: Ce.buttons,
                        children: [
                            t(B, { onClick: () => Telegram.WebApp.openLink("https://t.me/tapswapai"), children: r.wait.join_community }),
                            t(B, { variant: "secondary", onClick: e, disabled: s > 0, children: t(H, { children: s > 0 ? ve(s) : r.wait.reload_btn }) }),
                        ],
                    }),
                ],
            })
        );
    },
    yn = "_logPanel_menck_1",
    fn = "_logContainer_menck_15",
    wn = "_logButtons_menck_31",
    bn = "_logBtn_menck_38",
    Cn = "_logLine_menck_42",
    Bn = "_logInfo_menck_46",
    kn = "_logError_menck_50",
    An = "_logWarn_menck_54",
    xn = "_logButton_menck_31",
    A = { logPanel: yn, logContainer: fn, logButtons: wn, logBtn: bn, logLine: Cn, logInfo: Bn, logError: kn, logWarn: An, logButton: xn };
function Be() {
    const e = p(u),
        [n, i] = _(!1),
        [s, o] = _(!1);
    k(() => {
        e.log.openHandler = () => i(!0);
    }),
        P(() => {
            n && a.current && (a.current.scrollTop = a.current.scrollHeight);
        });
    const a = Me(null);
    if (!n) return t("button", { class: A.logButton, onClick: () => i(!0), children: "L" });
    const c = e.log.messages;
    return t(b, {
        children: [
            t("div", {
                class: A.logContainer,
                contenteditable: "true",
                spellcheck: !1,
                ref: a,
                style: { pointerEvents: s ? "auto" : "none" },
                children: [t("p", { style: { marginBottom: 40 } }), c.map((g) => t(Sn, { msg: g })), t("p", { style: { marginBottom: 100 } })],
            }),
            t("div", {
                class: A.logButtons,
                children: [
                    t("button", { class: A.logBtn, onClick: () => o(!s), children: "Selection" }),
                    t("button", {
                        class: A.logBtn,
                        onClick: () => {
                            var g;
                            navigator.clipboard.writeText(((g = a.current) == null ? void 0 : g.innerText) ?? "").catch((y) => console.error(y));
                        },
                        children: "Copy",
                    }),
                    t("button", { class: A.logBtn, onClick: () => i(!1), children: "X" }),
                ],
            }),
        ],
    });
}
function Sn(e) {
    let n = `${A.logLine} ${A.logInfo}`,
        i = "I";
    return (
        e.msg.s === "W" ? ((n = `${A.logLine} ${A.logWarn}`), (i = "I")) : e.msg.s === "E" && ((n = `${A.logLine} ${A.logError}`), (i = "E")),
        t(b, { children: [e.msg.m && t("p", { class: n, children: [i, " ", e.msg.m] }), e.msg.e && t(b, { children: [t("p", { class: n, children: e.msg.e.message }), t("p", { class: n, children: e.msg.e.stack })] })] })
    );
}
const In = "_image_1yc2s_1",
    Ln = "_price_1yc2s_13",
    Tn = "_drowerAction_1yc2s_26",
    En = "_text_1yc2s_33",
    ae = { image: In, price: Ln, drowerAction: Tn, text: En },
    Mn = () => {
        const e = p(u),
            n = () => {
                e.player.claimBotEarnings();
            };
        return t(z, {
            onAction: n,
            onClose: n,
            btnVariant: "secondary",
            btnText: r.button.get_it,
            children: [
                t("div", { class: ae.image, children: t("img", { src: ne, alt: "bot_earnings" }) }),
                t("div", {
                    class: ae.drowerAction,
                    children: [
                        t("div", { class: ae.text, children: [t(E, { children: r.tap_bot.title }), t("div", { children: t(L, { children: r.tap_bot.body }) })] }),
                        t("div", { class: ae.price, children: [t("img", { src: j, alt: "coin" }), t(M, { children: C(e.player.climableBotEarnings) })] }),
                    ],
                }),
            ],
        });
    },
    Dn = "_image_1yc2s_1",
    Pn = "_price_1yc2s_13",
    zn = "_drowerAction_1yc2s_26",
    Vn = "_text_1yc2s_33",
    re = { image: Dn, price: Pn, drowerAction: zn, text: Vn },
    Wn = (e) => {
        const n = p(u),
            i = f(async () => {
                try {
                    const s = await n.api.player_claimReward.post({ task_id: e.notification.id });
                    n.player.update(s.player), n.notification.showInfo("Done!");
                } catch (s) {
                    n.log.error("player_claimReward", s), n.notification.showError("Error!");
                }
            }, [n.api.player_claimReward, n.log, n.notification, n.player, e.notification.id]);
        return t(z, {
            onAction: i,
            onClose: e.onClose,
            btnVariant: "secondary",
            btnText: r.button.get_it,
            children: [
                t("div", { class: re.image, children: t("img", { src: ne, alt: "bot_earnings" }) }),
                t("div", {
                    class: re.drowerAction,
                    children: [
                        t("div", { class: re.text, children: [t(E, { children: r.notifications.title }), t("div", { children: t(L, { children: r.notifications.messages[e.notification.id] }) })] }),
                        t("div", { class: re.price, children: [t("img", { src: j, alt: "coin" }), t(M, { children: C(e.notification.reward) })] }),
                    ],
                }),
            ],
        });
    };
function Hn() {
    const e = Telegram.WebApp.platform;
    return "ios";
}
function pe(e) {
    (document.body.style.overflow = e ? "hidden" : "auto"), (document.body.style.marginTop = e ? "100px" : "0"), (document.body.style.height = e ? window.innerHeight + 100 + "px" : "100vh"), window.scrollTo(0, e ? 100 : 0);
}
function Rn() {
    return document.body.style.overflow === "hidden" && document.body.style.marginTop === "100px" && document.body.style.height === window.innerHeight + 100 + "px";
}
const ze =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHAAAABwCAMAAADxPgR5AAAC91BMVEUAAADWm0bdpk7FjDvZqVPUnkLbpEveqU3gqk/twmv+7MDjrFHZnknepUzjrVL97sfbo0nlsFPYoUz97cbksFbepkv97cX76bb54avkrVSndijjrFLrumL87sbdpUzfp07LkD/97snmr1L57LnXlELVmEb978vepkvhq1DnslT+78v97cTZokmpdSjepkuzfC/msFbRlEPhrE/ltl3luF3WnkXvyH/VmEP978qwfC3514/ZoUjlr1LXnETLjTzfrFrVmEOnciX86sD87snGjj7215XgqU7kr1DmslWrdin75a7wxGrfp03NkED436zZoUeocyiueCutdiroslLntVfGizr21JDntl7Ahzb21Iz968L846ruyID204v74qT10Yv86bj74KGveCz00Yn43J7978ntv2bIizzRkkKZZx7xxGzsvGTPkEDEiTn97sfvwWj0yG/erVXQkUG/hTbzxm3wwmrChjjJjT798Mv31Ifnt2Ddo0zQlkXUlUTSlETNkkLKjj+7gjS3fjH86r3ltl3hsVjXmkbVl0X97cTqu2LTmUfQl0DGiTugbSOWZR2RYRvquGHhrFfbqVHMl0PHjzy+gzWdaiHjtFveqFTcplLYnEinciebaCD87MH2ynHWnUvQnEbHkkDOjz/Njj68hjejbyb757bVoEvankrLkUHCjDyvdyv86bn857L85a300ILpuV/Zpk7fp03YoU3Tm0KpdCn636DmvW/dsGDmslzjrlnTm0vNlD7Lkjy0fTGxeS6LXBf52ZD514vpvGXaokfWn0XBiDq3gTS0ey/846j74aP73pvxzIHzzXzksFrZo1Daok/Wo0zboEq5gDGsdSqmcCaVYx373Zf625TwyXvjt2XSoVPTn0jNmUbTlEPHjTnCiTa7fzOxey3sxnjuxnLpwXLhqU+teSyGWRbxynXos13hqVPVmkiNXhj03q/WplPVkkGAVRTiuXrZpWHu0qHoxo/dr27Qn0rrzJjoxpDkvYDfr2vaplyhb1YtAAAAZXRSTlMADBchBxEtImr+Hv7t4bOpg310c11HOykX/v7a0Mq/lIyKNhD+9fHw5uTf29vOpqKYmFVJJ/fq6ung2dDJsbGmnW9lW0P79/X07+3r0srJxruxjoSAeWtU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",
    jn =
        "data:image/png;base64,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",
    Nn = "/assets/multitap-wNXfII5N.png",
    Je = "/assets/turbo-3TsFcQmE.png",
    Ke = "/assets/boost_x2-Ra4nbqb0.png",
    et = "/assets/balance_x2-8E9B5dv3.png",
    Xn = { energy: jn, charge: ze, tap: Nn, tap_bot: ne },
    On = { energy: ze, turbo: Je, double: Ke, balance_double: et };
function J(e) {
    return Xn[e];
}
function ue(e) {
    return On[e];
}
const Gn = "_image_1yc2s_1",
    qn = "_price_1yc2s_13",
    Fn = "_drowerAction_1yc2s_26",
    Un = "_text_1yc2s_33",
    ce = { image: Gn, price: qn, drowerAction: Fn, text: Un },
    Yn = (e) => {
        const n = p(u);
        return t(z, {
            onAction: async () => {
                try {
                    await n.tapsSubmitService.submitTaps();
                    const o = await n.api.player_applyBoost.post({ type: e.type });
                    n.player.updateBoost(!0), n.player.update(o.player), n.notification.showInfo("Good!"), n.navService.setPage("taps");
                } catch (o) {
                    n.log.error("player_applyBoost failed", o), n.notification.showError("Error!");
                }
            },
            onClose: (o) => {
                e.onClose(), o && n.navService.back();
            },
            btnText: r.button.get_it,
            btnVariant: "secondary",
            children: [
                t("div", { class: ce.image, children: t("img", { src: ue(e.type), alt: e.type }) }),
                t("div", {
                    class: ce.drowerAction,
                    children: [
                        t("div", { class: ce.text, children: [t(E, { children: r.boost[e.type].title }), t("div", { children: t(L, { children: r.boost[e.type].body }) })] }),
                        t("div", { class: ce.price, children: [t("img", { src: j, alt: "coin" }), t(M, { children: r.boost.free })] }),
                    ],
                }),
            ],
        });
    },
    _e = "/assets/coin_ico-0IEzdR8j.png",
    $n = "_content_1h6e2_1",
    Qn = { content: $n },
    Zn = (e) => {
        const n = e.marketItem.boost_type === "double" ? Ke : et,
            i = e.marketItem.boost_type === "double" ? r.boost.double : r.boost.balance_double;
        return t("div", { class: Qn.content, children: [t("div", { children: t("img", { src: n }) }), t(E, { children: i.title }), t("div", { children: t(L, { children: i.body }) })] });
    },
    Jn = "_content_agudx_1",
    Kn = "_info_agudx_12",
    Re = { content: Jn, info: Kn },
    ei = (e) => {
        var s;
        const n = (s = e.invoice) == null ? void 0 : s.paymentDetails,
            i = p(u);
        return t("div", {
            class: Re.content,
            children: t("div", {
                class: Re.info,
                children: [
                    t(M, { children: [n.price / 10 ** 9, " TON"] }),
                    t(B, {
                        size: "large",
                        fullWidth: !0,
                        variant: "primary",
                        onClick: async () => {
                            if (e.invoice)
                                try {
                                    await i.auth.sendTon(n), i.account.updateInvoice({ ...e.invoice._data, paid_at: I.now() });
                                    const o = await i.api.invoices_setPaid.post({ id: e.invoice.id });
                                    i.account.updateInvoice(o.invoice);
                                } catch (o) {
                                    console.log(o);
                                }
                        },
                        children: r.button.buy,
                    }),
                ],
            }),
        });
    },
    ti = "_content_mi9uz_1",
    ni = "_awaitConfirmation_mi9uz_12",
    ii = "_walletConnectContent_mi9uz_12",
    si = "_loaing_mi9uz_21",
    le = { content: ti, awaitConfirmation: ni, walletConnectContent: ii, loaing: si },
    tt = (e) => {
        const n = p(u),
            [i, s] = _(void 0),
            o = f(async () => {
                n.account.pendingInvoices || (await n.invoicesService.updateInvoices()), s(await n.invoicesService.getBoostInvoice(e.marketItem.boost_type));
            }, [n.account.pendingInvoices, n.invoicesService, e.marketItem.boost_type]);
        P(() => {
            n.auth.connected.value && o().catch(console.error);
        }, [n.auth.connected.value]),
            P(() => {
                if (i)
                    return (
                        n.invoicesService.runCheckInvoice(i.id),
                        () => {
                            n.invoicesService.stopCheckInvoice();
                        }
                    );
            }, [n.invoicesService, i]);
        const a = f(async () => {
            n.auth.init(), await n.auth.unPauseConnection();
        }, [n.auth]);
        return (
            k(
                () => (
                    a().catch(console.error),
                    Rn() && pe(!0),
                    () => {
                        n.auth.pauseConnection();
                    }
                )
            ),
            n.auth.connected.value && !i
                ? t(z, { onClose: e.onClose, btnText: "BUY", btnVariant: "secondary", children: t("div", { className: le.loaing, children: t(ee, {}) }) })
                : t(z, {
                      onClose: e.onClose,
                      btnText: "BUY",
                      btnVariant: "secondary",
                      children: t("div", {
                          className: le.content,
                          children: [
                              t("div", { className: le.walletConnectContent, children: t(Zn, { marketItem: e.marketItem }) }),
                              n.auth.connected.value && i && i.canPay && t(ei, { invoice: i }),
                              i && i.isAwaitingConfirmations && t(b, { children: t("div", { className: le.loaing, children: t(ee, {}) }) }),
                              i && i.isFailed && t("div", { children: ["tx status: ", i.status] }),
                              i && i.isPaid && t(b, { children: t(E, { children: r.pay.success_text }) }),
                              i && i.isPaid ? t(B, { size: "large", fullWidth: !0, variant: "secondary", onClick: e.onClose, children: r.button.close }) : t(gt, {}),
                          ],
                      }),
                  })
        );
    },
    oi = "_h1_tffsq_1",
    ai = { h1: oi },
    ri = (e) => t("h1", { class: ai.h1, children: e.children }),
    ci = "_wrapper_oh73d_1",
    li = "_double_oh73d_18",
    je = { wrapper: ci, double: li },
    nt = (e) => {
        const n = p(u),
            i = n.gameConf.boosts.balance_double,
            s = !e.hideDouble && n.payments_enabled && !n.player.getBoostByType("balance_double") && n.player.ligue >= 6,
            [o, a] = _(!1);
        return t(b, {
            children: [
                t("div", {
                    class: je.wrapper,
                    children: [
                        t("img", { id: "main_balance_coin", src: _e, alt: "coin image" }),
                        t(ri, { children: De(e.value) }),
                        s &&
                            t("h3", {
                                onClick: () => {
                                    a(!0);
                                },
                                class: je.double,
                                children: ["X", i.rate_mult],
                            }),
                    ],
                }),
                o && t(tt, { onClose: () => a(!1), marketItem: { type: "boost", boost_type: "balance_double" } }),
            ],
        });
    };
function it() {
    const e = p(u),
        n = te(e.player.currentBalance);
    return (
        k(() => {
            const s = setInterval(() => {
                const o = e.player.currentBalance;
                if (n.value !== o)
                    if (o > n.value) {
                        const a = Math.max(1, Math.floor((o - n.value) * 0.2));
                        n.value = Math.min(n.value + a, o);
                    } else {
                        const a = Math.max(1, Math.floor((n.value - o) * 0.2));
                        n.value = Math.max(n.value - a, o);
                    }
            }, 50);
            return () => clearInterval(s);
        }),
        t(nt, { value: n.value })
    );
}
const di = "_balanceBoxContainer_2ucgd_1",
    hi = { balanceBoxContainer: di },
    st = (e) => t("div", { class: hi.balanceBoxContainer, children: [t(L, { children: e.text }), e.children] }),
    gi = "_body2_nxvid_1",
    ui = { body2: gi },
    T = (e) => t("p", { class: ui.body2, children: e.children }),
    mi = "_boostButton_1iowv_1",
    pi = "_info_1iowv_35",
    Ne = { boostButton: mi, info: pi },
    Xe = (e) => {
        const n = () => {
                const s = Math.max(Math.floor(864e5 - (I.now() % 864e5)), 0);
                return ve(s);
            },
            i = te(e.value > 0 ? `${e.value}/3` : n());
        return (
            k(() => {
                if (e.value === 0) {
                    const s = setInterval(() => {
                        i.value = n();
                    }, 1e3);
                    return () => clearInterval(s);
                }
            }),
            t("button", { class: Ne.boostButton, onClick: e.onClick, disabled: e.disabled, children: [t("img", { src: e.img, alt: e.title }), t("div", { class: Ne.info, children: [t(R, { children: e.title }), t(T, { children: i })] })] })
        );
    },
    vi = "_bottomContent_1uv7x_1",
    _i = "_bottomBackdown_1uv7x_10",
    Oe = { bottomContent: vi, bottomBackdown: _i },
    V = (e) => t(b, { children: [e.compensator && t("div", { class: Oe.bottomBackdown }), t("div", { class: Oe.bottomContent, children: e.children })] }),
    yi = "_container_1rd9h_1",
    fi = { container: yi },
    q = (e) => t("div", { class: fi.container, children: e.children }),
    wi = "_hr_15ort_1",
    bi = { hr: wi },
    ye = () => t("div", { class: bi.hr }),
    Ci = "_listContainer_1519s_1",
    Bi = { listContainer: Ci },
    ie = (e) =>
        t("div", {
            class: Bi.listContainer,
            onScroll: (n) => {
                pe(n.currentTarget.scrollTop > 0);
            },
            children: e.children,
        }),
    ki =
        "data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M8.79502%2015.875L4.62502%2011.705L3.20502%2013.115L8.79502%2018.705L20.795%206.705L19.385%205.295L8.79502%2015.875Z'%20fill='%2328E0B9'/%3e%3c/svg%3e",
    Ve =
        "data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M9.70498%206L8.29498%207.41L12.875%2012L8.29498%2016.59L9.70498%2018L15.705%2012L9.70498%206Z'%20fill='white'/%3e%3c/svg%3e",
    Ai = "_listItem_1icg4_1",
    xi = "_reward_1icg4_21",
    Si = "_navigationBox_1icg4_25",
    ke = { listItem: Ai, reward: xi, navigationBox: Si },
    Ii = "/assets/bronze-0SrHDjVD.png",
    Li = "/assets/diamond-4mnGiedh.png",
    Ti = "/assets/elite-nANXQnD-.png",
    Ei = "/assets/gold-mRqjLoGb.png",
    Mi = "/assets/grandmaster-1xEYe6w5.png",
    Di = "/assets/legendary-46Gnapio.png",
    Pi = "/assets/master-P0UrC1Yj.png",
    zi = "/assets/mythic-Ygh-hMOM.png",
    Vi = "/assets/platinum-QbjQJTtd.png",
    Wi = "/assets/silver-3twj9DXt.png",
    Hi = "/assets/wooden-Piwu07tH.png",
    Ri = ["wood", "bronze", "silver", "gold", "platinum", "diamond", "master", "grandmaster", "elite", "legendary", "mythic"],
    ji = [Hi, Ii, Wi, Ei, Vi, Li, Pi, Mi, Ti, Di, zi];
function fe(e) {
    return ji[Ri.indexOf(e.toLowerCase())];
}
const Ni = "_needAction_15xal_1",
    Xi = { needAction: Ni },
    ot = (e) => t("div", { class: `${e.needAction ? Xi.needAction : ""}` }),
    Oi = "_infoContainer_1shkw_1",
    Gi = "_avatar_1shkw_6",
    qi = "_text_1shkw_12",
    Fi = "_name_1shkw_19",
    Ui = "_balance_1shkw_26",
    Yi = "_priceLevel_1shkw_36",
    $i = "_hr_1shkw_42",
    Qi = "_level_1shkw_48",
    Zi = "_ligue_1shkw_52",
    S = { infoContainer: Oi, avatar: Gi, text: qi, name: Fi, balance: Ui, priceLevel: Yi, hr: $i, level: Qi, ligue: Zi },
    We = (e) =>
        t("div", {
            class: S.infoContainer,
            children: [
                e.img && t("div", { class: S.avatar, children: [t(ot, { needAction: e.needAction }), t("img", { src: e.img })] }),
                t("div", {
                    class: S.text,
                    children: [
                        t("div", { class: S.name, children: t(R, { children: e.name }) }),
                        t("div", {
                            class: S.priceLevel,
                            children: [
                                e.ligue !== void 0 && t("div", { class: S.ligue, children: [t("div", { children: t("img", { src: fe(e.ligue.name) }) }), t(T, { children: e.ligue.name })] }),
                                e.ligue !== void 0 && e.balance !== void 0 && t("div", { class: S.hr }),
                                e.balance !== void 0 && t("div", { class: S.balance, children: [!e.ton_payment && t("img", { src: _e, alt: "coin" }), t(T, { children: [C(e.balance), " ", e.ton_payment ? "TON" : ""] })] }),
                                e.level !== void 0 && e.balance !== void 0 && t("div", { class: S.hr }),
                                e.level && t("div", { class: S.level, children: t(T, { children: r.boost.level.replace("%value%", e.level.toString()) }) }),
                            ],
                        }),
                    ],
                }),
            ],
        }),
    X = (e) =>
        t("button", {
            class: `${ke.listItem}`,
            disabled: e.disabled,
            onClick: e.onClick,
            children: [
                t(We, { ton_payment: e.ton_payment, img: e.img, name: e.name, balance: e.balance, level: e.level, needAction: e.needAction }),
                t("div", {
                    class: ke.navigationBox,
                    children: [
                        e.reward !== void 0 && t("div", { class: ke.reward, children: t(H, { children: ["+", De(e.reward, 0)] }) }),
                        !e.completed && !e.disabled && t("img", { src: Ve, alt: "right chevron" }),
                        e.completed && t("img", { src: ki, alt: "check icon" }),
                    ],
                }),
            ],
        }),
    Ji = "_h4_1w1my_1",
    Ki = { h4: Ji },
    D = (e) => t("h4", { class: Ki.h4, children: e.children }),
    es = "_stack_sem72_1",
    ts = { stack: es },
    ns = (e) => t("div", { class: ts.stack, children: [t(D, { children: e.title }), e.children] }),
    at = "/assets/refferal-bs9HxsZk.png",
    is =
        "data:image/png;base64,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",
    ss = "/assets/task-DyhGDW8C.png",
    os = "_button_1dzm3_1",
    as = "_imageContainer_1dzm3_28",
    rs = "_active_1dzm3_34",
    Ae = { button: os, imageContainer: as, active: rs },
    U = (e) =>
        t("button", {
            className: `${Ae.button} ${e.active && Ae.active}`,
            disabled: e.disabled,
            onClick: e.onClick,
            children: [t("div", { class: Ae.imageContainer, children: [t(ot, { needAction: e.needAction }), t("img", { src: e.icon, alt: "navigation button" })] }), e.text],
        }),
    cs = "_wrapper_1c0ec_1",
    ls = { wrapper: cs },
    ds = (e) => t("div", { class: ls.wrapper, children: e.children }),
    W = () => {
        const e = p(u);
        return t(ds, {
            children: [
                t(U, { icon: at, text: r.button.refferal, onClick: () => e.navService.setPage("ref"), active: e.navService.page === "ref" }),
                t(U, { icon: ss, onClick: () => e.navService.setPage("task"), text: r.button.task, needAction: e.player.claims.value.length > 0 || e.account.availableMissions.length > 0, active: e.navService.page === "task" }),
                t(U, { icon: _e, text: r.button.tap_tap, onClick: () => e.navService.setPage("taps"), active: e.navService.page === "taps" }),
                t(U, { icon: Je, text: r.button.boost, onClick: () => e.navService.setPage("boost"), active: e.navService.page === "boost" }),
                t(U, { icon: is, text: r.button.stats, onClick: () => e.navService.setPage("stat"), active: e.navService.page === "stat" }),
            ],
        });
    },
    hs = "_boostBtnRow_vghyc_1",
    gs = "_container_vghyc_6",
    Ge = { boostBtnRow: hs, container: gs },
    us = (e) => {
        const n = p(u),
            i = n.gameConf.getTapLevelByNum(n.player.tapLevel + 1),
            s = n.gameConf.getChargeLevelByNum(n.player.chargeLevel + 1),
            o = n.gameConf.getEnergyLevelByNum(n.player.energyLevel + 1),
            a = n.player.getBoostByType("turbo"),
            c = n.player.getBoostByType("energy"),
            g = n.player.getActiveBostByType("double"),
            y = n.player.getActiveBostByType("turbo"),
            l = n.gameConf.boosts.double;
        return t(q, {
            children: [
                t(st, { text: r.account.your_balance, children: t(it, {}) }),
                t(ye, {}),
                t(ns, {
                    title: r.boost.free_boost,
                    children: t("div", {
                        class: Ge.boostBtnRow,
                        children: [
                            t(Xe, { img: ue("turbo"), title: r.boost.turbo.title, value: (a == null ? void 0 : a.cnt) || 0, disabled: (a && a.cnt === 0) || y !== void 0, onClick: () => e.onOpenBoostPopup("turbo") }),
                            t(Xe, { img: ue("energy"), title: r.boost.energy.title, value: (c == null ? void 0 : c.cnt) || 0, disabled: (c && c.cnt === 0) || y !== void 0, onClick: () => e.onOpenBoostPopup("energy") }),
                        ],
                    }),
                }),
                t("div", {
                    class: Ge.container,
                    children: [
                        t(D, { children: r.boost.boost }),
                        t(ie, {
                            children: [
                                n.payments_enabled && t(X, { name: r.boost.double.title, img: ue("double"), balance: l.ton_price, ton_payment: !0, disabled: g !== void 0, onClick: () => e.onOpenBoostPopup("double") }),
                                t(X, {
                                    name: r.upgrades.tap.title,
                                    img: J("tap"),
                                    balance: i == null ? void 0 : i.price,
                                    level: n.player.tapLevel,
                                    disabled: i === void 0,
                                    onClick: () => e.onOpenPopUp("tap", i.price, n.player.tapLevel + 1),
                                }),
                                t(X, {
                                    name: r.upgrades.energy.title,
                                    img: J("energy"),
                                    balance: o == null ? void 0 : o.price,
                                    level: n.player.energyLevel,
                                    disabled: o === void 0,
                                    onClick: () => e.onOpenPopUp("energy", o.price, n.player.energyLevel + 1),
                                }),
                                t(X, {
                                    name: r.upgrades.charge.title,
                                    img: J("charge"),
                                    balance: s == null ? void 0 : s.price,
                                    level: n.player.chargeLevel,
                                    disabled: s === void 0,
                                    onClick: () => e.onOpenPopUp("charge", s.price, n.player.chargeLevel + 1),
                                }),
                                t(X, { name: r.upgrades.tap_bot.title, img: J("tap_bot"), balance: n.gameConf.tapBot.price, disabled: n.player.haveTapBot, onClick: () => e.onOpenPopUp("tap_bot", n.gameConf.tapBot.price, 0) }),
                            ],
                        }),
                    ],
                }),
                t(V, { compensator: !0, children: t(W, {}) }),
            ],
        });
    },
    ms = "_image_19lh0_1",
    ps = "_price_19lh0_13",
    vs = "_drowerAction_19lh0_23",
    _s = "_text_19lh0_30",
    ys = "_desc_19lh0_40",
    Y = { image: ms, price: ps, drowerAction: vs, text: _s, desc: ys },
    fs = (e) => {
        const n = p(u),
            i = async () => {
                try {
                    await n.tapsSubmitService.submitTaps();
                    const s = await n.api.player_upgrade.post({ type: e.type });
                    n.player.update(s.player), n.notification.showInfo("Good!");
                } catch (s) {
                    n.log.error("player_upgrade failed", s), n.notification.showError("Error!");
                }
            };
        return t(z, {
            onAction: n.player.currentBalance < e.price ? void 0 : i,
            onClose: e.onClose,
            btnVariant: "secondary",
            btnText: r.button.get_it,
            children: [
                t("div", { class: Y.image, children: t("img", { src: J(e.type), alt: e.type }) }),
                t("div", {
                    class: Y.drowerAction,
                    children: [
                        t("div", {
                            class: Y.text,
                            children: [t(E, { children: r.upgrades[e.type].title }), t("div", { class: Y.desc, children: [t(L, { children: r.upgrades[e.type].body1 }), t(L, { children: r.upgrades[e.type].body2 })] })],
                        }),
                        t("div", {
                            class: Y.price,
                            children: [t("img", { src: j, alt: "coin" }), t(M, { children: C(e.price) }), e.lvl > 0 && t(b, { children: [t(T, { children: "|" }), t(T, { children: r.boost.level.replace("%value%", e.lvl.toString()) })] })],
                        }),
                        n.player.shares < e.price && t("div", { children: r.boost.insuffisient_funds }),
                    ],
                }),
            ],
        });
    };
function ws() {
    const [e, n] = _(null),
        [i, s] = _(null),
        o = p(u);
    return (
        k(() => {
            o.tapsSubmitService.submitTaps().catch((a) => o.log.error("submitTaps failed", a));
        }),
        t(x, {
            children: [
                t(us, {
                    onOpenBoostPopup: (a) => {
                        !e && !i && s(a);
                    },
                    onOpenPopUp: (a, c, g) => {
                        !e && !i && n({ type: a, price: c, lvl: g });
                    },
                }),
                e && t(fs, { type: e.type, price: e.price, lvl: e.lvl, onClose: () => n(null) }),
                i && i !== "double" && t(Yn, { type: i, onClose: () => s(null) }),
                i && i === "double" && t(tt, { marketItem: { type: "boost", boost_type: "double" }, onClose: () => s(null) }),
            ],
        })
    );
}
const bs = "_backBtn_gxroi_1",
    Cs = { backBtn: bs },
    rt = () => {
        const e = p(u);
        return e.env === "prod" ? t(b, {}) : t("button", { onClick: () => e.navService.back(), class: Cs.backBtn, children: "back" });
    },
    Bs =
        "data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M15.705%207.41L14.295%206L8.29498%2012L14.295%2018L15.705%2016.59L11.125%2012L15.705%207.41Z'%20fill='white'/%3e%3c/svg%3e",
    ks = "_content_10kh8_1",
    As = "_description_10kh8_10",
    qe = { content: ks, description: As },
    ct = (e) =>
        t("div", {
            class: qe.content,
            children: [
                t(M, { children: e.title }),
                t("div", {
                    class: qe.description,
                    children: e.desc
                        .split(
                            `
`
                        )
                        .map((n) => {
                            const i = n.indexOf("https://phantom.app/");
                            return i === -1
                                ? t("p", { children: n })
                                : t(b, { children: t("p", { children: [n.slice(0, i), t("a", { href: "https://phantom.app/", target: "_blank", children: "https://phantom.app/" }), n.slice(i + 20)] }) });
                        }),
                }),
            ],
        }),
    xs = "_ligueContent_8l9ha_1",
    Ss = "_iamgeSlider_8l9ha_9",
    Is = "_ligueImg_8l9ha_30",
    xe = { ligueContent: xs, iamgeSlider: Ss, ligueImg: Is },
    Ls = "_wrapper_pywek_1",
    Ts = "_progressBackground_pywek_6",
    Es = "_progressLine_pywek_16",
    Se = { wrapper: Ls, progressBackground: Ts, progressLine: Es },
    He = (e) => t("div", { class: Se.wrapper, children: t("div", { class: Se.progressBackground, children: t("div", { class: Se.progressLine, style: { width: `${e.currentEnergy}%` } }) }) }),
    Ms = "_wrapper_1prfp_1",
    Ds = "_text_1prfp_9",
    Fe = { wrapper: Ms, text: Ds },
    Ps = (e) => t("div", { class: Fe.wrapper, children: [t("div", { class: Fe.text, children: t(D, { children: [C(e.currentEnergy), " / ", C(e.energiLimit)] }) }), t(He, { currentEnergy: (e.currentEnergy / e.energiLimit) * 100 })] }),
    zs = () => {
        const e = p(u),
            [n, i] = _(e.player.ligue),
            s = e.gameConf.getLigue(n),
            o = e.gameConf.getLigueByNum(n - 1),
            a = e.gameConf.getLigueByNum(n + 1);
        return t(q, {
            children: t("div", {
                class: xe.ligueContent,
                children: [
                    t(ct, { title: s.title, desc: r.common.league_desc }),
                    t("div", {
                        class: xe.iamgeSlider,
                        children: [
                            t("button", { children: o && t("img", { onClick: () => i(n - 1), src: Bs, alt: "chevron left" }) }),
                            t("div", { class: xe.ligueImg, children: t("img", { src: fe(s.name), alt: s.name }) }),
                            t("button", { children: a && t("img", { onClick: () => i(n + 1), src: Ve, alt: "chevron right" }) }),
                        ],
                    }),
                    n === e.player.ligue && a ? t(Ps, { currentEnergy: e.player.totalEarned, energiLimit: a.score }) : t(D, { children: [r.common.from, " ", C(s.score)] }),
                ],
            }),
        });
    };
function Vs() {
    return t(x, { children: [t(rt, {}), t(zs, {}), t(V, { compensator: !0, children: t(W, {}) })] });
}
const Ws = "_container_alckf_1",
    Hs = "_header_alckf_6",
    Rs = "_link_alckf_11",
    Ie = { container: Ws, header: Hs, link: Rs },
    js = () => {
        const e = p(u),
            [n, i] = _(!1),
            s = f(async () => {
                await window.navigator.clipboard.writeText(e.inviteLink + " 🎁 +2.5k Shares as a first-time gift"), i(!0);
            }, [e.inviteLink]);
        return t(b, {
            children: t("div", {
                class: Ie.container,
                children: [
                    t("div", {
                        class: Ie.header,
                        children: [t(D, { children: r.ref.invite_link }), t(B, { variant: "secondary", onClick: () => s().catch(console.error), size: "small", children: n ? r.button.invite_copied : r.button.invite_copy })],
                    }),
                    t("div", { class: Ie.link, children: e.inviteLink }),
                ],
            }),
        });
    },
    Ns = "_refBalanceContainer_rqgos_1",
    Xs = { refBalanceContainer: Ns },
    Os = (e) => t("div", { class: Xs.refBalanceContainer, children: [t(E, { children: r.ref.value_ref.replace("$value$", e.value.toString()) }), t(H, { children: ["+", C(e.valueDiff)] })] }),
    Gs = "_listItem_qewdd_1",
    qs = "_reward_qewdd_19",
    Fs = "_listItemBody_qewdd_23",
    Us = "_listItemProgress_qewdd_28",
    Ys = "_navigationBox_qewdd_33",
    $ = { listItem: Gs, reward: qs, listItemBody: Fs, listItemProgress: Us, navigationBox: Ys },
    $s = (e) =>
        t("button", {
            class: `${$.listItem}`,
            onClick: e.onClick,
            children: [
                t("div", {
                    class: $.listItemBody,
                    children: [
                        t(We, { img: e.img, name: e.name, balance: e.balance, ligue: e.ligue }),
                        t("div", {
                            class: $.navigationBox,
                            children: [e.reward !== void 0 && t("div", { class: $.reward, children: t(H, { children: ["+", De(e.reward, 0)] }) }), !e.disabled && t("img", { src: Ve, alt: "right chevron" })],
                        }),
                    ],
                }),
                t("div", { class: $.listItemProgress, children: t(He, { currentEnergy: e.ligueProgress }) }),
            ],
        }),
    Qs = (e) => {
        const i = p(u).gameConf.ligues;
        return t(ie, {
            children: e.referrals.map((s) => {
                const o = i.findIndex((y) => y.score > s.earned),
                    a = o >= 0 ? i[o] : null,
                    c = o >= 0 ? i[o - 1] : _t.getLast(i),
                    g = a ? (s.earned * 100) / a.score : 100;
                return t(
                    $s,
                    {
                        name: s.full_name || s.name,
                        reward: s.rewards,
                        balance: s.earned,
                        disabled: !s.name,
                        ligue: c,
                        ligueProgress: g,
                        onClick: () => {
                            s.name && e.startConversation(s.name);
                        },
                    },
                    s.id
                );
            }),
        });
    },
    Zs = "_info_13mj9_1",
    Js = "_empty_13mj9_7",
    Ks = "_titleBtn_13mj9_15",
    Ue = { info: Zs, empty: Js, titleBtn: Ks },
    eo = () => {
        const e = p(u),
            [n, i] = _();
        P(() => {
            let o = !1;
            const a = () => {
                if (!o && n != null && n.res.has_more && document.body.scrollTop > document.body.scrollHeight - window.innerHeight - 100) {
                    document.body.addEventListener("scroll", a), (o = !0);
                    const c = n.page + 1;
                    e.api.player_getRefs
                        .post({ skip: n.res.refs.length, page: c })
                        .then((g) => {
                            i({ res: { refs: n.res.refs.concat(g.refs), has_more: g.has_more }, page: c }), (o = !1);
                        })
                        .catch((g) => {
                            e.log.error("player_getRefs failed", g), (o = !1);
                        });
                }
            };
            return document.body.addEventListener("scroll", a), () => document.body.removeEventListener("scroll", a);
        }, [e.api.player_getRefs, e.log, n]),
            k(() => {
                e.api.player_getRefs
                    .post({ skip: 0, page: 0 })
                    .then((o) => {
                        i({ res: o, page: 0 });
                    })
                    .catch((o) => {
                        e.log.error("player_getRefs failed", o);
                    });
            });
        const s = (o) => {
            Telegram.WebApp.openTelegramLink(`https://t.me/${o}`);
        };
        return n === void 0
            ? t(x, { page: "loading", children: [t(ee, {}), t(V, { compensator: !0, children: t(W, {}) })] })
            : n
            ? t(q, {
                  children: [
                      t("div", { class: Ue.info, children: [t(Os, { value: e.player.stat.ref_cnt, valueDiff: e.player.stat.ref_in }), t(js, {})] }),
                      t(ye, {}),
                      t(D, { children: r.ref.ref_list }),
                      n.res.refs.length === 0 ? t("div", { class: Ue.empty, children: t(L, { children: r.ref.empty }) }) : t(Qs, { referrals: n.res.refs, startConversation: s }),
                      t(V, { compensator: !0, children: t(W, {}) }),
                  ],
              })
            : t(x, { page: "loading", children: "Something went wrong :(" });
    };
function to() {
    return t(x, { children: t(eo, {}) });
}
const no = "_infoContainer_1pp8i_1",
    io = { infoContainer: no },
    de = (e) => t("div", { class: io.infoContainer, children: [t(R, { children: e.text }), t(M, { children: C(e.value) })] }),
    so = "_infoList_ji7jy_1",
    oo = { infoList: so },
    ao = ({ stat: e }) =>
        t(q, {
            children: [
                t(st, { text: r.stat.total_b, children: t(nt, { hideDouble: !0, value: Math.floor(e.players.earned + e.players.reward - e.players.spent) }) }),
                t(ye, {}),
                t("div", {
                    class: oo.infoList,
                    children: [
                        t(de, { text: r.stat.total_t, value: e.players.taps }),
                        t(de, { text: r.stat.total_p, value: e.accounts.total }),
                        t(de, { text: r.stat.daily_p, value: e.accounts.active }),
                        t(de, { text: r.stat.online_p, value: e.accounts.online }),
                    ],
                }),
            ],
        });
function ro() {
    const e = p(u),
        [n, i] = _();
    return (
        k(() => {
            e.api.root_getStat
                .get({})
                .then((s) => {
                    console.log("result", s), i(s);
                })
                .catch((s) => {
                    e.log.error("root_getStat failed", s);
                });
        }),
        n ? t(x, { children: [t(ao, { stat: n }), t(V, { compensator: !0, children: t(W, {}) })] }) : t(x, { page: "loading", children: [t(ee, {}), t(V, { compensator: !0, children: t(W, {}) })] })
    );
}
const co = "/assets/coin_boostx2-fTrnRLXV.png",
    lo = "_tapContainer_igohf_1",
    ho = "_boostCoinBg_igohf_9",
    go = "_tapContent_igohf_31",
    uo = "_text_igohf_44",
    mo = "_active_igohf_56",
    O = { tapContainer: lo, boostCoinBg: ho, tapContent: go, text: uo, active: mo };
class po {
    constructor(n, i, s) {
        m(this, "_readyElements", []);
        m(this, "_busyElements", []);
        m(this, "_animationDurationMs", 1500);
        m(this, "_animationDistancePx", 200);
        m(this, "_perspectiveObject");
        m(this, "_mainCoinElement");
        m(this, "_animationLayout");
        m(this, "_drawer");
        m(this, "_interval");
        m(this, "_active", !0);
        m(this, "run", () => {
            const n = I.now();
            for (let s = 0; s < this._busyElements.length; s++) {
                const o = this._busyElements[s];
                if (!o.activated) {
                    (o.el.style.left = o.endPosition.x + "px"), (o.el.style.top = o.endPosition.y + "px"), (o.el.style.opacity = o.endAlpha.toString()), (o.activated = !0);
                    continue;
                }
                o.realeaseTime <= n && (this._busyElements.splice(s, 1), o.el.parentNode.removeChild(o.el), this._readyElements.push(o.el));
            }
            this.player.getActiveBostByType("turbo") ? this._drawer.active || this._drawer.start() : this._drawer.active && this._drawer.stop();
        });
        m(this, "onDown", (n) => {
            try {
                if (!this.player.canTap) return;
                const i = n.offsetX,
                    s = n.offsetY,
                    o = this.container.getBoundingClientRect().width / 2;
                if (Math.sqrt(Math.pow(n.offsetX - o, 2) + Math.pow(s - o, 2)) < o) {
                    this.setPerspective(i, s);
                    const c = this.getAnimatedElement(i, s, this._animationDurationMs);
                    this.appendAminamedElement(this.container, c, I.addMillis(I.now(), this._animationDurationMs), { x: i, y: s - this._animationDistancePx }, 0),
                        this._drawer.active && this._drawer.pickOne(),
                        this.player.applyTap(),
                        Telegram.WebApp.HapticFeedback.impactOccurred("light"),
                        Telegram.WebApp.isClosingConfirmationEnabled || Telegram.WebApp.enableClosingConfirmation();
                }
            } catch (i) {
                this.log.error(i);
            }
        });
        m(this, "onPointerUp", () => {
            this._perspectiveObject.style.transform = "none";
        });
        (this.player = n),
            (this.container = i),
            (this.log = s),
            (this._perspectiveObject = this.container.getElementsByTagName("img")[0]),
            (this._mainCoinElement = document.getElementById("main_balance_coin")),
            (this._animationLayout = document.getElementById("animation_layer")),
            (this._drawer = new vo(this._animationLayout.getElementsByTagName("canvas")[0], this._mainCoinElement, this._perspectiveObject)),
            window.addEventListener("touchend", this.onPointerUp),
            window.addEventListener("pointerup", this.onPointerUp),
            i.addEventListener("pointerdown", this.onDown),
            (this._interval = setInterval(() => {
                this.run();
            }, 75));
    }
    setPerspective(n, i) {
        const o = this.container.getBoundingClientRect(),
            a = -(i - o.height / 2) / 20,
            c = (n - o.width / 2) / 20;
        this._perspectiveObject.style.transform = `perspective(${o.width}px)    rotateX(` + a + "deg)    rotateY(" + c + "deg) ";
    }
    getAnimatedElement(n, i, s) {
        const o = this._readyElements.pop() ?? this.createElement();
        return (o.style.transitionDuration = s + "ms"), (o.textContent = "+" + this.player.tapRate.toString()), (o.style.left = n + "px"), (o.style.top = i + "px"), (o.style.opacity = "1"), o;
    }
    appendAminamedElement(n, i, s, o, a) {
        this._busyElements.push({ activated: !1, realeaseTime: s, endPosition: o, el: i, endAlpha: a }), n.appendChild(i);
    }
    createElement() {
        const n = document.createElement("h6");
        return (n.className = O.text), n;
    }
    dispose() {
        clearInterval(this._interval), window.removeEventListener("touchend", this.onPointerUp), window.removeEventListener("pointerup", this.onPointerUp), this.container.removeEventListener("pointerdown", this.onDown);
    }
}
class vo {
    constructor(n, i, s) {
        m(this, "_canvas");
        m(this, "_ctx");
        m(this, "_img");
        m(this, "_centerImage");
        m(this, "_coins", []);
        m(this, "_pickedCoins", []);
        m(this, "_distance", 100);
        m(this, "_speed", 2);
        m(this, "_coinAmountMin", 5);
        m(this, "_coinsAmountMax", 25);
        m(this, "_backWaySpeedIncrease", 1.2);
        m(this, "_active", !1);
        m(this, "radius", 0);
        m(this, "imgWidth");
        m(this, "imgHeight");
        m(this, "_coinSizeChanged", 0);
        m(this, "loop", () => {
            (this._coinSizeChanged + 25 < I.now() || this._pickedCoins.length === 0) && this._img.classList.remove(O.active),
                this.createCoins(),
                this._ctx.clearRect(0, 0, this._canvas.width, this._canvas.height),
                !(this._coins.length === 0 && this._pickedCoins.length === 0) && (this.drawCoins(), (this.radius += this._speed), this.cleanCoins(this._coins), this.cleanCoins(this._pickedCoins), requestAnimationFrame(this.loop));
        });
        m(this, "angle", (n, i, s, o) => {
            const a = o - i,
                c = s - n;
            return Math.atan2(a, c);
        });
        (this._canvas = n),
            (n.style.width = window.innerWidth + "px"),
            (n.style.height = window.innerHeight + "px"),
            (n.width = window.innerWidth),
            (n.height = window.innerHeight),
            (this._img = i),
            (this._centerImage = s),
            (this._ctx = n.getContext("2d")),
            (this.imgWidth = this._img.width / 2),
            (this.imgHeight = this._img.height / 2);
    }
    start() {
        this._active || ((this._active = !0), this.loop());
    }
    stop() {
        this._active && (this._active = !1);
    }
    cleanCoins(n) {
        n.forEach((i, s) => {
            i.draw || n.splice(s, 1);
        });
    }
    createCoins() {
        if (!this._active || (this._coins.length > 0 && this.radius < this._distance)) return;
        this.radius = 0;
        const n = this._centerImage.getBoundingClientRect(),
            i = 0,
            s = Math.floor(this._coinAmountMin + Math.random() * (this._coinsAmountMax - this._coinAmountMin));
        for (let o = 0; o < s; o++) {
            const a = Math.random(),
                c = o * ((2 * Math.PI) / s);
            this._coins.push({ ancorX: n.x + n.width / 2, ancorY: n.y + n.height / 2, x: 0, y: 0, radius: i, speed: 1 + this._speed * a, draw: !0, alpha: a, angle: c > 0 ? c * 0.95 + Math.random() * c * 0.1 : -0.2 + Math.random() * 0.4 });
        }
        this._coins.sort((o, a) => o.alpha - a.alpha);
    }
    drawCoins() {
        const n = this._img.getBoundingClientRect();
        for (const i of this._pickedCoins) {
            if (!i.draw) continue;
            i.radius += i.speed;
            const s = this.angle(i.ancorX, i.ancorY, n.x + n.width / 2 - this.imgWidth / 2, n.y + n.height / 2 - this.imgHeight / 2);
            this.moveAndDrawCoin(i, s, n) || (this._img.classList.add(O.active), (this._coinSizeChanged = I.now()));
        }
        for (const i of this._coins) i.draw && (this._active ? (i.radius += i.speed) : ((i.speed *= this._backWaySpeedIncrease), (i.radius -= i.speed)), this.moveAndDrawCoin(i, i.angle));
    }
    moveAndDrawCoin(n, i, s) {
        return (
            (n.x = n.ancorX - this.imgWidth / 2 + n.radius * Math.cos(i)),
            (n.y = n.ancorY - this.imgHeight / 2 + n.radius * Math.sin(i)),
            this.isCoinNeedLeaveScene(n, s) ? ((n.draw = !1), !1) : ((this._ctx.globalAlpha = n.alpha), this._ctx.drawImage(this._img, n.x, n.y, this.imgWidth, this.imgHeight), !0)
        );
    }
    isCoinNeedLeaveScene(n, i) {
        return i
            ? Math.abs(i.x + i.width / 2 - n.x - this.imgWidth / 2) < i.width / 2 && Math.abs(i.y + i.height / 2 - n.y - this.imgHeight / 2) < i.height / 2
            : !this._active && n.radius < 0
            ? !0
            : n.x < -this.imgWidth || n.y < -this.imgHeight || n.x > this._canvas.width + this.imgWidth || n.y > this._canvas.height + this.imgHeight;
    }
    pickOne() {
        if (this._coins.length === 0) return;
        const n = Math.floor(Math.random() * this._coins.length),
            i = this._coins[n];
        (i.draw = !1), this._pickedCoins.push({ ...i, radius: 0, alpha: 1, draw: !0, speed: Math.ceil(this._speed * 2 + Math.random() * this._speed * 4), ancorX: i.x, ancorY: i.y });
    }
    get active() {
        return this._active;
    }
}
function _o() {
    const e = p(u),
        n = Me(null),
        i = e.player.getBoostByType("double");
    return (
        k(() => {
            if (n.current) {
                const s = new po(e.player, n.current, e.log);
                return () => s.dispose();
            }
        }),
        t("div", { class: `${O.tapContainer} ${e.player.getActiveBostByType("turbo") && O.boostCoinBg}`, children: t("div", { ref: n, id: "ex1-layer", class: O.tapContent, children: t("img", { draggable: !1, src: i ? co : j }) }) })
    );
}
const yo = () =>
        t("svg", {
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: t("path", { d: "M9.70498 6L8.29498 7.41L12.875 12L8.29498 16.59L9.70498 18L15.705 12L9.70498 6Z", fill: "white" }),
        }),
    fo = "_ligueBtn_8b3n6_1",
    wo = { ligueBtn: fo },
    bo = () => {
        const e = p(u),
            n = e.player.currentLigue;
        return t("div", { class: wo.ligueBtn, onClick: () => e.navService.setPageWithBack("ligue"), children: [t(Pe, { img: fe(n.name), alt: n.name }), t(D, { children: n.name }), t(yo, {})] });
    },
    Co = "_balanceInfo_172y5_1",
    Bo = { balanceInfo: Co },
    lt = () => t("div", { class: Bo.balanceInfo, children: [t(it, {}), t(bo, {})] }),
    ko = "_container_sn75j_1",
    Ao = { container: ko },
    xo = () => t("div", { class: Ao.container, children: [t(lt, {}), t(_o, {})] }),
    So = "_wrapper_iqvdz_1",
    Io = { wrapper: So },
    Lo = "_wrapper_16ny2_1",
    To = "_progressBackground_16ny2_6",
    Eo = "_progressLine_16ny2_16",
    Le = { wrapper: Lo, progressBackground: To, progressLine: Eo },
    Mo = (e) => t("div", { class: Le.wrapper, children: t("div", { class: Le.progressBackground, children: t("div", { class: Le.progressLine, style: { width: `${e.currentEnergy}%` } }) }) }),
    Do = "_wrapper_tzq8x_1",
    Po = "_text_tzq8x_8",
    zo = "_value_tzq8x_13",
    Te = { wrapper: Do, text: Po, value: zo },
    Vo = (e) =>
        t("div", {
            class: Te.wrapper,
            children: [
                t("div", { class: Te.text, children: [t(Pe, { img: ze, alt: "progress value" }), t("div", { class: Te.value, children: [t(D, { children: e.currentEnergy }), t(H, { children: ["/ ", e.energiLimit] })] })] }),
                t(Mo, { currentEnergy: (e.currentEnergy / e.energiLimit) * 100 }),
            ],
        });
function Wo() {
    const e = p(u),
        n = te(e.player.currentEnergy);
    return (
        ut(() => {
            n.value = e.player.currentEnergy;
        }),
        k(() => {
            const i = setInterval(() => {
                n.value = e.player.currentEnergy;
            }, 500);
            return () => clearInterval(i);
        }),
        t("div", { class: Io.wrapper, children: t(Vo, { currentEnergy: n.value, energiLimit: e.player.currentEnergyLevel.limit }) })
    );
}
const Ho = "_wrapper_1ab1s_1",
    Ro = { wrapper: Ho },
    jo = () => t("div", { class: Ro.wrapper, children: [t(Wo, {}), t(W, {})] });
function No() {
    return (
        k(() => {
            const e = (n) => {
                n.preventDefault();
            };
            return (
                window.addEventListener("contextmenu", e),
                window.addEventListener("touchmove", e, { passive: !1 }),
                pe(!0),
                () => {
                    pe(!1), window.removeEventListener("touchmove", e), window.removeEventListener("contextmenu", e);
                }
            );
        }),
        t(x, { page: "main", children: [t(q, { children: [t("div", { id: "animation_layer", className: K.animationLayer, children: t("canvas", {}) }), t(xo, {})] }), t(V, { children: t(jo, {}) })] })
    );
}
const Xo = "_tabsContainer_ly1k8_1",
    Oo = "_tabs_ly1k8_1",
    Go = "_tab_ly1k8_1",
    qo = "_active_ly1k8_30",
    Fo = "_taskAlert_ly1k8_34",
    Q = { tabsContainer: Xo, tabs: Oo, tab: Go, active: qo, taskAlert: Fo },
    Uo = (e) =>
        t("div", {
            class: Q.tabsContainer,
            children: [
                t("div", { class: Q.tabs, children: e.tabs.map((n, i) => t("button", { onClick: () => e.onTabChange(i), class: `${Q.tab} ${e.activeTab === i && Q.active} ${n.taskAlert && Q.taskAlert}`, children: n.title }, i)) }),
                e.tabs.map((n, i) => e.activeTab === i && n.tab),
            ],
        }),
    Yo = "/assets/tasklist-QmnCOg_x.png",
    $o = "/assets/congratulations-xzur9oKX.png",
    Qo = "_image_19lh0_1",
    Zo = "_price_19lh0_13",
    Jo = "_drowerAction_19lh0_23",
    Ko = "_text_19lh0_30",
    ea = "_desc_19lh0_40",
    Z = { image: Qo, price: Zo, drowerAction: Jo, text: Ko, desc: ea },
    ta = (e) => {
        const n = p(u),
            i = n.player.claims.value.find((o) => o === e.missionConf.id),
            s = f(async () => {
                try {
                    if (!i) return;
                    const o = await n.api.player_claimReward.post({ task_id: i });
                    n.player.update(o.player), n.notification.showInfo("Done!");
                } catch (o) {
                    n.log.error("player_claimReward", o), n.notification.showError("Error!");
                }
            }, [n.api.player_claimReward, n.log, n.notification, n.player, i]);
        return t(z, {
            onAction: s,
            onClose: () => s,
            btnVariant: "primary",
            btnText: r.button.claim,
            children: [
                t("div", { class: Z.image, children: t("img", { src: $o, alt: "congratulations" }) }),
                t("div", {
                    class: Z.drowerAction,
                    children: [
                        t("div", { class: Z.text, children: [t(E, { children: r.missions.conget }), t("div", { class: Z.desc, children: t(L, { children: r.missions.congret_desc }) })] }),
                        t("div", { class: Z.price, children: [t("img", { src: j, alt: "coin" }), t(M, { children: C(e.missionConf.reward) })] }),
                    ],
                }),
            ],
        });
    };
function Ye(e) {
    if (e.link) return e.link;
    if (!e.name) throw new Error("Social name is not defined");
    switch (e.type) {
        case "tg":
            return `https://t.me/${e.name.replace("@", "")}`;
        case "x":
            return `https://twitter.com/${e.name}`;
        default:
            return e.name;
    }
}
const na = "_item_10hts_1",
    ia = "_link_10hts_10",
    sa = "_disabled_10hts_22",
    oa = "_done_10hts_27",
    he = { item: na, link: ia, disabled: sa, done: oa },
    aa = ({ item: e, confItem: n, disabled: i, onSubmit: s, claim: o, instrunctions: a }) => {
        const c = !e || !e.verified,
            [g, y] = _(!1),
            l = f(() => (e ? Math.max(e.verified_at !== void 0 ? e.verified_at + 3e4 - I.now() : 0, 0) : 0), [e]),
            [d, h] = _(e !== void 0 && (e.verified || e.verified_at !== void 0));
        P(() => {
            h(d || (e !== void 0 && (e.verified || e.verified_at !== void 0)));
        }, [d, e]);
        const v = te(l());
        P(() => {
            const we = setInterval(() => {
                (v.value = l()), v.value > 0 && y(!1);
            }, 1e3);
            return () => clearInterval(we);
        }, [l, e, v]);
        const F = async () => {
                y(!0), await s();
            },
            w = () => {
                setTimeout(() => h(!0), 1e3);
            };
        return t("div", {
            className: `${he.item} ${i && he.disabled}`,
            children: [
                t("a", { onClick: w, href: Ye(n), target: "_blank", class: he.link, children: [t(R, { children: a || r.missions.instructions[n.type] }), !o && c && v.value > 0 && t(T, { children: r.missions.erroe_message })] }),
                e && !d && t("a", { onClick: w, href: Ye(n), target: "_blank", children: t(B, { onClick: async () => {}, size: "small", variant: "secondary", children: r.button.go }) }),
                e &&
                    d &&
                    t(b, {
                        children:
                            (i || c) && !o
                                ? t(B, { onClick: F, size: "small", variant: "secondary", disabled: (c && v.value > 0) || i || g, children: v.value > 0 ? ve(v.value) : r.button.check })
                                : t("div", { class: he.done, children: r.missions.done }),
                    }),
            ],
        });
    },
    ra = "_container_1qbto_1",
    ca = "_content_1qbto_13",
    la = "_list_1qbto_22",
    da = "_completed_1qbto_28",
    Ee = { container: ra, content: ca, list: la, completed: da },
    ha = "_item_w3cz8_1",
    ga = "_link_w3cz8_10",
    ua = "_mainText_w3cz8_21",
    ma = "_text_w3cz8_28",
    pa = "_disabled_w3cz8_32",
    va = "_done_w3cz8_37",
    N = { item: ha, link: ga, mainText: ua, text: ma, disabled: pa, done: va },
    _a = ({ item: e, disabled: n, onSubmit: i, claim: s }) => {
        const o = p(u),
            a = !e || !e.verified,
            [c, g] = _(!1),
            y = f(() => (!e || e.verified ? 0 : Math.max(e.verified_at !== void 0 ? e.verified_at + 3e4 - I.now() : 0, 0)), [e]),
            l = te(y());
        P(() => {
            const h = setInterval(() => {
                (l.value = y()), l.value > 0 && g(!1);
            }, 1e3);
            return () => clearInterval(h);
        }, [y, e, l]);
        const d = async () => {
            g(!0), await i();
        };
        return t("div", {
            className: `${N.item} ${n && N.disabled}`,
            children: t("div", {
                className: N.link,
                children: [
                    t("div", {
                        className: N.mainText,
                        children: [
                            t("h5", { className: N.text, children: r.missions.solana_wallet }),
                            t(B, {
                                variant: "secondary",
                                size: "small",
                                onClick: async () => {
                                    const h = await o.api.wallet_getLoginToken.post({}),
                                        v = document.createElement("a");
                                    (v.href = `/wallet/?token=${h.token}&userId=${o.player.id}`), v.click();
                                },
                                children: (n || a) && !s ? r.button.go : r.button.open,
                            }),
                            e &&
                                t(b, {
                                    children:
                                        (n || a) && !s
                                            ? t(B, { onClick: d, variant: "secondary", size: "small", disabled: (a && l.value > 0) || n || c, children: l.value > 0 ? ve(l.value) : r.button.check })
                                            : t("div", { class: N.done, children: r.missions.done }),
                                }),
                        ],
                    }),
                    !s && a && l.value > 0 && t(T, { children: r.missions.erroe_message }),
                ],
            }),
        });
    },
    ya = "_content_c1c79_1",
    $e = { content: ya },
    fa = ({ confItem: e, item: n, onSubmit: i, disabled: s, instrunctions: o }) => {
        var l, d;
        const a = p(u),
            [c, g] = _("");
        let y = ((l = n == null ? void 0 : n.user_data) == null ? void 0 : l.solana_addr) || "";
        return (
            e.type === "binance_id" && (y = ((d = n == null ? void 0 : n.user_data) == null ? void 0 : d.binance_id) || ""),
            t("div", {
                class: `${$e.content} ${s && $e.disable}`,
                children: [
                    t(R, { children: o || e.name }),
                    t("input", { type: "string", disabled: s, value: y, onChange: (h) => g(h.currentTarget.value) }),
                    t(B, {
                        onClick: async () => {
                            if (e.type === "solana_addr" && c.length < 40) return a.notification.showError("Invalid Solana address");
                            if (e.type === "binance_id" && (c.length === 0 || isNaN(Number(c)))) return a.notification.showError("Invalid Binance ID");
                            await i(c);
                        },
                        size: "small",
                        variant: "secondary",
                        disabled: s,
                        children: r.button.submit,
                    }),
                ],
            })
        );
    },
    wa = "_content_mpn7y_1",
    ba = "_info_mpn7y_13",
    Qe = { content: wa, info: ba },
    Ca = (e) => t("div", { class: Qe.content, children: [t("img", { src: _e, alt: "coin" }), t("div", { class: Qe.info, children: [t(R, { children: r.missions.reward }), t(T, { children: C(e.reward) })] })] }),
    Ba = ({ mConf: e }) => {
        const n = p(u),
            [i, s] = _(n.account.getActiveMission(e.id)),
            o = n.player.claims.value.find((l) => l === e.id),
            a = n.account.isMissionCompleted(e.id),
            c = f(
                async (l, d) => {
                    try {
                        const h = await n.api.missions_finishMissionItem.post({ id: e.id, itemIndex: l, user_input: d });
                        n.account.update(h.account), s(n.account.getActiveMission(e.id));
                    } catch (h) {
                        n.notification.showError(h.message);
                    }
                },
                [n.account, n.api.missions_finishMissionItem, n.notification, e.id]
            ),
            g = async () => {
                try {
                    const l = await n.api.missions_finishMission.post({ id: e.id });
                    n.account.update(l.account), n.player.update(l.player), s(n.account.getActiveMission(e.id));
                } catch (l) {
                    n.notification.showError(l.message);
                }
            },
            y = f(async () => {
                await n.api.missions_joinMission
                    .post({ id: e.id })
                    .then((l) => {
                        n.account.update(l.account), s(n.account.getActiveMission(e.id));
                    })
                    .catch((l) => {
                        n.log.error(l);
                    });
            }, [n.account, n.api.missions_joinMission, n.log, e.id]);
        return t("div", {
            className: Ee.container,
            children: t("div", {
                class: Ee.content,
                children: [
                    t(rt, {}),
                    t(ct, { title: e.title, desc: e.description }),
                    t(Ca, { reward: e.reward }),
                    !i && !a && t(B, { variant: "secondary", size: "large", onClick: y, children: r.button.start_mission }),
                    a && t("div", { className: Ee.completed, children: r.missions.completed }),
                    t(D, { children: r.missions.your_task }),
                    t(ie, {
                        children: e.items.map((l, d) => {
                            const v = (r.missions.individual_instrunctions[e.id] || [])[d];
                            return l.type === "wallet_connect"
                                ? t(_a, { item: i == null ? void 0 : i.items[d], onSubmit: () => c(d), disabled: !1, claim: a })
                                : l.type !== "solana_addr" && l.type !== "binance_id"
                                ? t(aa, { confItem: e.items[d], item: i == null ? void 0 : i.items[d], disabled: !i && !a, claim: a, onSubmit: () => c(d), instrunctions: v })
                                : t(fa, {
                                      disabled: !i || !!((i == null ? void 0 : i.items[d]) !== void 0 && i != null && i.items[d].verified),
                                      confItem: e.items[d],
                                      item: i == null ? void 0 : i.items[d],
                                      onSubmit: (F) => c(d, F),
                                      instrunctions: v,
                                  });
                        }),
                    }),
                    i && t(B, { variant: "secondary", size: "large", onClick: g, disabled: !n.account.canFinishMission(e.id), children: r.button.finish_mission }),
                    o && t(ta, { missionConf: e }),
                ],
            }),
        });
    },
    ka = () => {
        var o, a;
        const e = p(u),
            n = (o = e.navService.pageProps) != null && o.mission ? ((a = e.navService.pageProps) == null ? void 0 : a.mission) : null,
            [i, s] = _(n);
        return i
            ? t(Ba, { mConf: i })
            : t(ie, {
                  children: e.account.availableMissions.concat(e.account.finishedMissions).map((c) => {
                      const g = e.player.claims.value.find((l) => l === c.id) === c.id,
                          y = e.account.isMissionCompleted(c.id);
                      return t(X, {
                          name: c.title,
                          img: Yo,
                          balance: c.reward,
                          completed: !g && y,
                          needAction: g,
                          onClick: () => {
                              e.navService.regBackFunction(() => s(null)), s(c);
                          },
                      });
                  }),
              });
    },
    Aa = "_listItem_c1rrx_1",
    xa = "_listItemBody_c1rrx_9",
    Sa = "_navigationBox_c1rrx_16",
    Ia = "_percentageBox_c1rrx_22",
    La = "_reward_c1rrx_26",
    ge = { listItem: Aa, listItemBody: xa, navigationBox: Sa, percentageBox: Ia, reward: La },
    Ta = (e) =>
        t("div", {
            class: `${ge.listItem}`,
            children: [
                t("div", {
                    class: `${ge.listItemBody}`,
                    children: [
                        t(We, { img: e.img, name: e.name, balance: e.reward }),
                        t("div", { class: ge.navigationBox, children: t(B, { variant: "primary", size: "small", onClick: e.onClaim, disabled: e.disabled, children: r.button.claim }) }),
                    ],
                }),
                e.percentage < 100 && t("div", { className: ge.percentageBox, children: t(He, { currentEnergy: e.percentage }) }),
            ],
        }),
    Ze = (e) => t(ie, { children: e.tasks.map((n, i) => t(Ta, { name: n.title, reward: n.reward, img: n.image, percentage: n.percentage, disabled: !n.canClaim, onClaim: () => e.onClaim(n) }, i)) }),
    Ea = () => {
        const e = p(u),
            [n, i] = _(0),
            s = f(() => {
                const d = e.player.getClaimsByType("L");
                return e.gameConf.ligues
                    .map((h, v) => ({ taskId: `L${v}`, title: h.name, reward: h.reward, canClaim: d.includes(v), image: fe(h.name), percentage: h.score > 0 ? (e.player.totalEarned * 100) / h.score : 0 }))
                    .filter((h, v) => d.includes(v) || v > e.player.ligue);
            }, [e.gameConf.ligues, e.player]),
            o = f(() => {
                const d = e.player.getClaimsByType("R");
                return e.gameConf.ref_rewards
                    .map((h, v) => ({ taskId: `R${v}`, title: `Invite ${h.cnt} friends`, reward: h.reward, canClaim: d.includes(v), image: at, cnt: h.cnt, percentage: (e.player.stat.ref_cnt * 100) / h.cnt }))
                    .filter((h, v) => d.includes(v) || e.player.stat.ref_cnt < h.cnt);
            }, [e.gameConf.ref_rewards, e.player]),
            [a, c] = _(s()),
            [g, y] = _(o()),
            l = f(
                async (d) => {
                    try {
                        const h = await e.api.player_claimReward.post({ task_id: d.taskId });
                        if ((e.player.update(h.player), d.taskId.startsWith("L"))) {
                            const v = s();
                            c(v);
                        } else {
                            const v = o();
                            y(v);
                        }
                        e.notification.showInfo("Done!");
                    } catch (h) {
                        e.log.error("player_claimReward", h), e.notification.showError("Error!");
                    }
                },
                [e.api.player_claimReward, e.log, e.notification, e.player, s, o]
            );
        return t(q, {
            children: [
                t(lt, {}),
                t(ye, {}),
                t(Uo, {
                    onTabChange: (d) => {
                        i(d), e.navService.clean();
                    },
                    activeTab: n,
                    tabs: [
                        { title: r.task.tabs.missions, tab: t(ka, {}), taskAlert: e.player.getClaimsByType("M").length > 0 || e.account.availableMissions.length > 0 },
                        { title: r.task.tabs.leagues, tab: t(Ze, { tasks: a, onClaim: l }), taskAlert: a.find((d) => d.canClaim) !== void 0 },
                        { title: r.task.tabs.ref_task, tab: t(Ze, { tasks: g, onClaim: l }), taskAlert: g.find((d) => d.canClaim) !== void 0 },
                    ],
                }),
                t(V, { compensator: !0, children: t(W, {}) }),
            ],
        });
    };
function Ma() {
    const e = p(u);
    return (
        k(() => {
            e.tapsSubmitService.submitTaps().catch((n) => e.log.error("submitTaps failed", n));
        }),
        t(x, { children: t(Ea, {}) })
    );
}
function Da() {
    const e = p(u),
        [n, i] = _(null),
        [s, o] = _(null),
        [a, c] = _(null),
        [g, y] = _(),
        [l, d] = _(),
        h = f(() => {
            if (e.localData.needWait || n) return;
            const F = () => {
                if (e.player.ligue < 2) return;
                const w = e.account.availableMissions.find((we) => we.id === "M0");
                w && d(w);
            };
            o(!1),
                e
                    .doLogin()
                    .then((w) => {
                        if (w) {
                            if (w instanceof mt) {
                                w.status >= 500 && o(!0);
                                return;
                            }
                            if (w.wait_s) {
                                o(!0);
                                return;
                            }
                            e.login(w), i(w.player), y(e.player.notificationClaim), F();
                        }
                    })
                    .catch((w) => {
                        e.log.error("login_failed", w);
                    });
        }, [e, n]),
        v = f(() => {
           
            // e.localData.needWait && o(!0);
        }, [e]);
    return (
        k(() => {
            v(), h();
        }),
        a === !0
            ? t(x, { page: "loading", children: t(jt, {}) })
            : s
            ? t(x, { page: "loading", children: [(e.env !== "prod" || e.debugEnabled) && t(Be, {}), t(_n, { onReload: () => h() })] })
            : n
            ? t(b, {
                  children: [
                      (e.env !== "prod" || e.debugEnabled) && t(Be, {}),
                      e.navService.page === "taps" && t(No, {}),
                      e.navService.page === "task" && t(Ma, {}),
                      e.navService.page === "boost" && t(ws, {}),
                      e.navService.page === "ligue" && t(Vs, {}),
                      e.navService.page === "ref" && t(to, {}),
                      e.navService.page === "stat" && t(ro, {}),
                      g &&
                          t(Wn, {
                              notification: g,
                              onClose: () => {
                                  y(void 0);
                              },
                          }),
                      l &&
                          t(un, {
                              mission: l,
                              onClose: () => {
                                  d(void 0);
                              },
                          }),
                      e.player.tappedBalance < 0 && t(Mn, {}),
                  ],
              })
            : t(x, { page: "loading", children: [(e.env !== "prod" || e.debugEnabled) && t(Be, {}), t(ee, {})] })
    );
}
function Pa() {
    return t(u.Provider, { value: pt, children: [t(Da, {}), t("div", { id: "_chr_" })] });
}
vt(t(Pa, {}), document.getElementById("app"));
//# sourceMappingURL=main-X8toso5P.js.map
