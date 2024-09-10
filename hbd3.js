window.FontAwesomeKitConfig = {
    id: 83504983,
    version: "5.15.4",
    token: "4f3ce16e3e",
    method: "css",
    license: "free",
    baseUrl: "https://ka-f.fontawesome.com",
    asyncLoading: { enabled: false },
    autoA11y: { enabled: true },
    baseUrlKit: "https://kit.fontawesome.com",
    detectConflictsUntil: null,
    iconUploads: {},
    minify: { enabled: true },
    v4FontFaceShim: { enabled: true },
    v4shim: { enabled: true },
    v5FontFaceShim: { enabled: false }
};

!function(t) {
    "function" == typeof define && define.amd ? define("kit-loader", t) : t()
}(function() {
    "use strict";
    function t(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(t);
            e && (r = r.filter(function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })), n.push.apply(n, r);
        }
        return n;
    }

    function e(e) {
        for (var n = 1; n < arguments.length; n++) {
            var o = null != arguments[n] ? arguments[n] : {};
            n % 2 ? t(Object(o), !0).forEach(function(t) {
                r(e, t, o[t]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o)) : t(Object(o)).forEach(function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(o, t));
            });
        }
        return e;
    }

    function n(t) {
        return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t;
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
        })(t);
    }

    function r(t, e, n) {
        return (e = function(t) {
            var e = function(t, e) {
                if ("object" != typeof t || null === t) return t;
                var n = t[Symbol.toPrimitive];
                if (void 0 !== n) {
                    var r = n.call(t, e || "default");
                    if ("object" != typeof r) return r;
                    throw new TypeError("@@toPrimitive must return a primitive value.");
                }
                return ("string" === e ? String : Number)(t);
            };
            return "symbol" == typeof e ? e : String(e);
        }(e)) in t ? Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = n, t;
    }

    function o(t, e) {
        return function(t) {
            if (Array.isArray(t)) return t;
        }(t) || function(t, e) {
            var n = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
            if (null != n) {
                var r, o, i, a, c = [], u = !0, s = !1;
                try {
                    if (i = (n = n.call(t)).next, 0 === e) {
                        if (Object(n) !== n) return;
                        u = !1;
                    } else for (; !(u = (r = i.call(n)).done) && (c.push(r.value), c.length !== e); u = !0);
                } catch (t) {
                    s = !0, o = t;
                } finally {
                    try {
                        if (!u && null != n.return && (a = n.return(), Object(a) !== a)) return;
                    } finally {
                        if (s) throw o;
                    }
                }
                return c;
            }
        }(t, e) || i(t, e) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }();
    }

    function i(t, e) {
        if (t) {
            if ("string" == typeof t) return a(t, e);
            var n = Object.prototype.toString.call(t).slice(8, -1);
            return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? a(t, e) : void 0;
        }
    }

    function a(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
        return r;
    }

    // ...kode lainnya...

    try {
        if (window.FontAwesomeKitConfig) {
            var V = window.FontAwesomeKitConfig,
                W = {
                    detectingConflicts: V.detectConflictsUntil && new Date <= new Date(V.detectConflictsUntil),
                    detectionIgnoreAttr: "data-fa-detection-ignore",
                    fetch: window.fetch,
                    token: V.token,
                    XMLHttpRequest: window.XMLHttpRequest,
                    document: document
                },
                Z = document.currentScript,
                tt = Z ? Z.parentElement : document.head;
            (function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                return "js" === t.method ? G(t, e) : "css" === t.method ? Y(t, e, function(t) {
                    J(t), Q(t);
                }) : void 0;
            })(V, W).then(function(t) {
                t.map(function(t) {
                    try {
                        tt.insertBefore(t, Z ? Z.nextSibling : null);
                    } catch (e) {
                        tt.appendChild(t);
                    }
                }), W.detectingConflicts && Z && J(function() {
                    Z.setAttributeNode(document.createAttribute(W.detectionIgnoreAttr));
                    var t = function(t, e) {
                        var n = document.createElement("script");
                        return e && e.detectionIgnoreAttr && n.setAttributeNode(document.createAttribute(e.detectionIgnoreAttr)), n.src = O(t, {
                            baseFilename: "conflict-detection",
                            fileSuffix: "js",
                            subdir: "js",
                            minify: t.minify.enabled
                        }), n;
                    }(V, W);
                    document.body.appendChild(t);
                });
            }).catch(function(t) {
                console.error("".concat("Font Awesome Kit:", " ").concat(t));
            });
        }
    } catch (f) {
        console.error("".concat("Font Awesome Kit:", " ").concat(f));
    }
});

function name(params) {
    
}

function updateTime() {
  var tw = new Date();
  if (tw.getTimezoneOffset() == 0) (a = tw.getTime() + (7 * 60 * 60 * 1000))
  else (a = tw.getTime());
  tw.setTime(a);
  var tahun = tw.getFullYear();
  var hari = tw.getDay();
  var bulan = tw.getMonth();
  var tanggal = tw.getDate();
  var hariarray = new Array("Minggu,", "Senin,", "Selasa,", "Rabu,", "Kamis,", "Jum'at,", "Sabtu,");
  var bulanarray = new Array("Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "Nopember", "Desember");
  document.getElementById("tanggalwaktu").innerHTML = hariarray[hari] + " " + tanggal + " " + bulanarray[bulan] + " " + tahun + " Jam " + ((tw.getHours() < 10) ? "0" : "") + tw.getHours() + ":" + ((tw.getMinutes() < 10) ? "0" : "") + tw.getMinutes() + ":" + ((tw.getSeconds() < 10) ? "0" : "") + tw.getSeconds() + " W.I.B ";
  document.getElementById("tanggalwaktu").style.color = '#ffffff';
}

// Update waktu setiap detik
setInterval(updateTime, 1000);

// Panggil fungsi untuk pertama kali saat halaman dimuat
updateTime();
function cektanggal() {
    var t1= new Date();
    var t2 = new Date("2024-09-14T00:00:00.000+07:00");
    return t1>t2;
}