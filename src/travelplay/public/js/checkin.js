var URL = 'http://widgets.getglue.com/beta/esteban.php?domain='+document.location.host+'&url='+document.location.href+'';

$.get(URL, function(data, status){
        //alert("Data: " + data + "\nStatus: " + status);
});

window.getglue = (function(i) {
    
    var a = function() {};
    a.prototype = {
        on: function(n, m) {
            this._events = this._events || {};
            this._events[n] = this._events[n] || [];
            this._events[n].push(m)
        },
        off: function(n, m) {
            this._events = this._events || {};
            if (n in this._events === false) {
                return
            }
            this._events[n].splice(this._events[n].indexOf(m), 1)
        },
        trigger: function(n) {
            this._events = this._events || {};
            if (n in this._events === false) {
                return
            }
            for (var m = 0; m < this._events[n].length; m++) {
                this._events[n][m].apply(this, Array.prototype.slice.call(arguments, 1))
            }
        }
    };
    a.mixin = function(m) {
        var o = ["on", "off", "trigger"];
        for (var n = 0; n < o.length; n++) {
            m[o[n]] = a.prototype[o[n]]
        }
    };
    a.mixin(i);
    if (!i.widgets) {
        i.widgets = []
    }
    if (!i.config) {
        i.config = {}
    }
    if (!i.config.host) {
        i.config.host = "http://widgets.getglue.com/widgets.getglue.com"
    }
    if (!i.config.webhost) {
        i.config.webhost = "http://widgets.getglue.com/w.getglue.com"
    }
    i.config.mobile = (/iphone|ipad|ipod|android|blackberry|mini|windows\sce|palm/i.test(navigator.userAgent.toLowerCase()));
    var d = {
        horizontal: {
            width: 156,
            height: 26,
            url: "http://widgets.getglue.com/beta/checkinWide.html?"
        },
        vertical: {
            width: 78,
            height: 61,
            url: "//s3.amazonaws.com/" + i.config.host + "/html/checkinTall.html?"
        },
        feed: {
            width: 156,
            height: 26,
            url: "http://widgets.getglue.com/beta/checkinWide.html?"
        },        
        feed2: {
            width: 285,
            height: 460,
            url: "//" + i.config.webhost + "/widget/checkin?style=feed&"
        },
        sticker: {
            width: 156,
            height: 26,
            url: "http://widgets.getglue.com/beta/checkinWide.html?"
        },        
        sticker2: {
            width: 250,
            height: 82,
            url: "//s3.amazonaws.com/" + i.config.host + "/html/checkinSticker.html?"
        },
        stickers: {
            width: 250,
            height: 352,
            url: "//" + i.config.webhost + "/widget/stickers?"
        },
        checkins: {
            width: 250,
            height: 424,
            url: "//" + i.config.webhost + "/widget/checkins?"
        },
        conversation: {
            width: 600,
            height: 200,
            url: "//" + i.config.webhost + "/convo/checkins?",
            minWidth: 260
        }
    };
    var e = (function() {
        var q, p, o, n = 1,
            m = this;
        return {
            postMessage: function(r, t, s) {
                if (!t) {
                    return
                }
                s = s || parent;
                if (m.postMessage) {
                    s.postMessage(r, t.replace(/([^:]+:\/\/[^\/]+).*/, "$1"))
                } else {
                    if (t) {
                        s.location = t.replace(/#.*$/, "") + "#" + (+new Date) + (n++) + "&" + r
                    }
                }
            },
            receiveMessage: function(s, r) {
                if (m.postMessage) {
                    if (s) {
                        o = function(t) {
                            if ((typeof r === "string" && t.origin !== r) || (Object.prototype.toString.call(r) === "[object Function]" && r(t.origin) === !1)) {
                                return !1
                            }
                            s(t)
                        }
                    }
                    if (m.addEventListener) {
                        m[s ? "addEventListener" : "removeEventListener"]("message", o, !1)
                    } else {
                        m[s ? "attachEvent" : "detachEvent"]("onmessage", o)
                    }
                } else {
                    q && clearInterval(q);
                    q = null;
                    if (s) {
                        q = setInterval(function() {
                            var u = document.location.hash,
                                t = /^#?\d+&/;
                            if (u !== p && t.test(u)) {
                                p = u;
                                s({
                                    data: u.replace(t, "")
                                })
                            }
                        }, 100)
                    }
                }
            }
        }
    })();

    function h(q) {
        function p(C, B) {
            var A = (C << B) | (C >>> (32 - B));
            return A
        }

        function H(D) {
            var C = "";
            var A;
            var E;
            var B;
            for (A = 0; A <= 6; A += 2) {
                E = (D >>> (A * 4 + 4)) & 15;
                B = (D >>> (A * 4)) & 15;
                C += E.toString(16) + B.toString(16)
            }
            return C
        }

        function J(D) {
            var C = "";
            var B;
            var A;
            for (B = 7; B >= 0; B--) {
                A = (D >>> (B * 4)) & 15;
                C += A.toString(16)
            }
            return C
        }

        function n(B) {
            B = B.replace(/\r\n/g, "\n");
            var A = "";
            for (var D = 0; D < B.length; D++) {
                var C = B.charCodeAt(D);
                if (C < 128) {
                    A += String.fromCharCode(C)
                } else {
                    if ((C > 127) && (C < 2048)) {
                        A += String.fromCharCode((C >> 6) | 192);
                        A += String.fromCharCode((C & 63) | 128)
                    } else {
                        A += String.fromCharCode((C >> 12) | 224);
                        A += String.fromCharCode(((C >> 6) & 63) | 128);
                        A += String.fromCharCode((C & 63) | 128)
                    }
                }
            }
            return A
        }
        var t;
        var L, K;
        var o = new Array(80);
        var x = 1732584193;
        var v = 4023233417;
        var u = 2562383102;
        var s = 271733878;
        var r = 3285377520;
        var I, G, F, z, y;
        var M;
        q = n(q);
        var m = q.length;
        var w = new Array();
        for (L = 0; L < m - 3; L += 4) {
            K = q.charCodeAt(L) << 24 | q.charCodeAt(L + 1) << 16 | q.charCodeAt(L + 2) << 8 | q.charCodeAt(L + 3);
            w.push(K)
        }
        switch (m % 4) {
            case 0:
                L = 2147483648;
                break;
            case 1:
                L = q.charCodeAt(m - 1) << 24 | 8388608;
                break;
            case 2:
                L = q.charCodeAt(m - 2) << 24 | q.charCodeAt(m - 1) << 16 | 32768;
                break;
            case 3:
                L = q.charCodeAt(m - 3) << 24 | q.charCodeAt(m - 2) << 16 | q.charCodeAt(m - 1) << 8 | 128;
                break
        }
        w.push(L);
        while ((w.length % 16) != 14) {
            w.push(0)
        }
        w.push(m >>> 29);
        w.push((m << 3) & 4294967295);
        for (t = 0; t < w.length; t += 16) {
            for (L = 0; L < 16; L++) {
                o[L] = w[t + L]
            }
            for (L = 16; L <= 79; L++) {
                o[L] = p(o[L - 3] ^ o[L - 8] ^ o[L - 14] ^ o[L - 16], 1)
            }
            I = x;
            G = v;
            F = u;
            z = s;
            y = r;
            for (L = 0; L <= 19; L++) {
                M = (p(I, 5) + ((G & F) | (~G & z)) + y + o[L] + 1518500249) & 4294967295;
                y = z;
                z = F;
                F = p(G, 30);
                G = I;
                I = M
            }
            for (L = 20; L <= 39; L++) {
                M = (p(I, 5) + (G ^ F ^ z) + y + o[L] + 1859775393) & 4294967295;
                y = z;
                z = F;
                F = p(G, 30);
                G = I;
                I = M
            }
            for (L = 40; L <= 59; L++) {
                M = (p(I, 5) + ((G & F) | (G & z) | (F & z)) + y + o[L] + 2400959708) & 4294967295;
                y = z;
                z = F;
                F = p(G, 30);
                G = I;
                I = M
            }
            for (L = 60; L <= 79; L++) {
                M = (p(I, 5) + (G ^ F ^ z) + y + o[L] + 3395469782) & 4294967295;
                y = z;
                z = F;
                F = p(G, 30);
                G = I;
                I = M
            }
            x = (x + I) & 4294967295;
            v = (v + G) & 4294967295;
            u = (u + F) & 4294967295;
            s = (s + z) & 4294967295;
            r = (r + y) & 4294967295
        }
        M = J(x) + J(v) + J(u) + J(s) + J(r);
        return M.toLowerCase()
    }

    function j(n) {
        var q;
        var p;
        var r = function() {
            if (document.readyState == "complete") {
                q()
            }
        };
        var m;
        var o = function() {
            try {
                document.documentElement.doScroll("left");
                q()
            } catch (s) {}
        };
        if (window.addEventListener) {
            q = function() {
                if (!p) {
                    p = true;
                    n()
                }
                window.removeEventListener("DOMContentLoaded", q, false);
                window.removeEventListener("load", q, false)
            };
            window.addEventListener("DOMContentLoaded", q, false);
            window.addEventListener("load", q, false)
        } else {
            if (window.attachEvent) {
                m = window.setInterval(o, 13);
                q = function() {
                    if (!p) {
                        p = true;
                        n()
                    }
                    window.clearInterval(m);
                    window.detachEvent("onreadystatechange", r);
                    window.detachEvent("onload", q)
                };
                window.attachEvent("onreadystatechange", r);
                window.attachEvent("onload", q)
            }
        }
    }
    i.loadWidgets = function() {
        try {
            var m = k("a", "glue-checkin-widget");
            g(m)
        } catch (n) {}
    };

    function k(n, p) {
        var s, m, o, u, t = [];
        try {
            if (document.querySelectorAll) {
                t = document.querySelectorAll(n + "." + p)
            } else {
                if (document.getElementsByClassName) {
                    m = document.getElementsByClassName(p);
                    for (s = 0;
                        (o = m[s]); s++) {
                        if (o.tagName.toLowerCase() == n) {
                            t.push(o)
                        }
                    }
                } else {
                    m = document.getElementsByTagName(n);
                    var q = new RegExp("\\b" + p + "\\b");
                    for (s = 0;
                        (o = m[s]); s++) {
                        if (o.className.match(q)) {
                            t.push(o)
                        }
                    }
                }
            }
        } catch (r) {}
        return t
    }
    var l = 0;

    function g(m) {
        for (var n = 0; n < m.length; n++) {
            i.widgets.push(new i.CheckinWidget(m[n], l++));
            i.widgets[i.widgets.length - 1].render()
        }
    }

    function c(n) {
        var m = [];
        for (var o in n) {
            m.push(encodeURIComponent(o) + "=" + encodeURIComponent(n[o]))
        }
        return m.join("&")
    }

    function f(m) {
        var q = {};
        var o = m.split("&");
        for (var n = 0; n < o.length; n++) {
            var p = o[n].split("=");
            if (p.length == 2) {
                q[decodeURIComponent(p[0])] = decodeURIComponent(p[1])
            }
        }
        return q
    }

    function b(p, n) {
        var r = {};
        for (var o in n) {
            var m = n[o];
            var q = p.getAttribute("data-" + m);
            if ( !! q) {
                r[m] = q
            }
        }
        return r
    }
    i.CheckinWidget = function(s, p) {
        this.vector = s;
        this.params = {};
        var m = s.href.split("?");
        var r = (m.length > 1) ? f(m[1]) : {}, q;
        for (q in r) {
            this.params[q] = r[q]
        }
        r = b(this.vector, ["partnerId", "userId", "objectId", "type", "verb", "title", "message", "sticker", "prompt", "windowed", "callback", "source", "theme", "headerBgColor", "headerBgImage", "headerTextColor", "bgColor", "bodyBgColor", "formBgColor", "replyBgColor", "borderColor", "linkColor", "subtextColor", "checkinColor", "timeColor", "textColor", "bodyTextColor", "rolloverBgColor", "rolloverTextColor", "rolloverLinkColor", "rolloverTimeColor", "hideAppsLink", "width", "height"]);
        for (q in r) {
            this.params[q] = r[q]
        }
        this.params.type = this.params.type ? this.params.type : "vertical";
        this.isCheckinWidget = !(this.params.type === "checkins" || this.params.type === "stickers");
        if (!this.params.objectId && this.isCheckinWidget) {
            if (this.vector.href) {
                var o = this.vector.href.match(/https?:\/\/\S*getglue\.com\/+([\/\w_]+)/);
                if (o && o[1]) {
                    this.params.objectId = o[1]
                }
            }
        }
        for (q in d[this.params.type]) {
            if (!this.params[q]) {
                this.params[q] = d[this.params.type][q]
            }
        }
        this.params.wid = p;
        this.params.source = !! this.params.source ? this.params.source : window.location.href;
        if (this.params.minWidth && (this.params.width < this.params.minWidth)) {
            this.params.width = this.params.minWidth
        }
        this.send = function(t) {
            e.postMessage(t, this.widget.src, this.widget.contentWindow)
        };
        this.reload = function() {
            this.send("reload")
        };
        this.render = function() {
            if (!i.config.fragment) {
                i.config.fragment = document.createElement("div");
                i.config.fragment.innerHTML = '<iframe class="getglue-checkin-widget" border="0" frameBorder="0" allowtransparency="true" scrolling="no"></iframe>'
            }
            var u = i.config.fragment.firstChild.cloneNode(false);
            var v = this.params.url + c(this.params) + "#" + encodeURIComponent(window.location.href);
            u.style.width = parseInt(this.params.width) + "px";
            u.style.height = parseInt(this.params.height) + "px";
            var t = this.vector.parentNode;
            if (t) {
                t.replaceChild(u, this.vector)
            }
            u.src = v;
            if (/Firefox[\/\s](\d+\.\d+)/.test(navigator.userAgent) && new Number(RegExp.$1) < 4 && window.frames && window.frames.length > 0) {
                setTimeout(function() {
                    u.src = u.src
                }, 3000)
            }
            this.widget = u
        };
        if (!(typeof(this.params.partnerId) === "undefined")) {
            var n = window.location.hostname.split(/\./);
            n = n[n.length - 2] + "." + n[n.length - 1];
            this.params.objectId = window.location.href;
            if (h(n).substring(0, 10) != this.params.partnerId) {
                this.render = function() {}
            }
        } else {
            if ((typeof(this.params.objectId) === "undefined") && this.isCheckinWidget) {
                this.render = function() {}
            }
        }
    };
    if (typeof document.body.style.maxHeight != "undefined") {
        i.loadWidgets();
        j(function() {
            i.loadWidgets()
        })
    }
    i.messageReceiver = function(y, m) {
        var p = y.data.split(/::/);
        switch (p[0]) {
            case "bump":
                var q, n, t = [];
                n = document.getElementsByTagName("iframe");
                var v = new RegExp("\\bgetglue-checkin-widget\\b");
                for (var w = 0;
                    (q = n[w]); w++) {
                    if (q.className.match(v)) {
                        t.push(q)
                    }
                }
                for (w = 0;
                    (q = t[w]); w++) {
                    e.postMessage("bump::" + p[1], q.src, q.contentWindow)
                }
                break;
            case "resize":
                var s = i.widgets[parseInt(p[2])].widget;
                s.style.height = parseInt(p[1]) + "px";
                break;
            case "loggedIn":
                for (var r = 0; r < i.widgets.length; r++) {
                    var s = i.widgets[r];
                    s.reload()
                }
                break;
            case "checkin":
                var u = p.slice(1);
                i.trigger("checkin", {
                    userId: u[0],
                    objectKey: u[1],
                    title: u[2],
                    numCheckins: u[3]
                });
            case "callback":
                var o = window[p[1]];
                if (typeof o === "function") {
                    o.apply(null, p.slice(2))
                }
                break
        }
    };
    if (!i.config.eventBound) {
        e.receiveMessage(i.messageReceiver, function(m) {
            return true
        });
        i.config.eventBound = true
    }
    i.checkin = function(m, n) {
        var o = {
            type: "conversation",
            objectId: m
        };
        if ( !! n) {
            o.source = n
        }
        return window.open("//" + i.config.webhost + "/convo/checkins?" + c(o), "getglue-checkin", "width=600,height=400")
    };
    i.getKey = function(q, o, m) {
        function n(r, s) {
            return r.toLowerCase().replace(/[^a-z0-9\s]/ig, "").replace(/^\s+|\s+$/, "").replace(/\s+/g, "_")
        }

        function p(r) {
            var s = r.split(" ");
            if (s.length >= 3) {
                return s[0] + " " + s[2]
            } else {
                return s[0] + " " + s[1]
            }
        }
        var o = n(o);
        if (o != "recording_artists") {
            q = q.replace(/(\band\b|\bthe\b|\ba\b|&)/ig, "")
        }
        if (o == "movie_stars") {
            q = p(q)
        }
        if (o == "movies" && m) {
            m = p(m);
            return o + "/" + n(q) + "/" + n(m)
        }
        return o + "/" + n(q)
    };
    i.lookup = function(n, o, m) {
        return i.getKey(o, n, m)
    };
    return i
})(window.getglue || {});
