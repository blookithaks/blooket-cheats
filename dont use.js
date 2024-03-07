!(function () {
    var e = document.createElement("div");
    (e.style.backgroundColor = "black"),
        (e.style.color = "green"),
        (e.style.position = "fixed"),
        (e.style.top = "0"),
        (e.style.left = "0"),
        (e.style.padding = "20px"),
        (e.style.zIndex = "9999"),
        (e.style.border = "2px solid green"),
        (e.style.borderRadius = "10px"),
        (e.style.width = "200px"),
        (e.style.height = "auto");
    var t = document.createElement("div");
    (t.innerHTML = "Drag"), (t.style.backgroundColor = "green"), (t.style.color = "black"), (t.style.border = "none"), (t.style.padding = "10px"), (t.style.cursor = "move"), (t.style.borderRadius = "5px");
    var o = document.createElement("input");
    (o.placeholder = "Game ID"), (o.style.marginTop = "10px"), (o.style.border = "2px solid green"), (o.style.borderRadius = "5px"), (o.style.backgroundColor = "black"), (o.style.color = "green");
    var r = document.createElement("input");
    (r.placeholder = "Name"), (r.style.marginTop = "10px"), (r.style.border = "2px solid green"), (r.style.borderRadius = "5px"), (r.style.backgroundColor = "black"), (r.style.color = "green");
    var n = document.createElement("input");
    (n.placeholder = "Amount"), (n.style.marginTop = "10px"), (n.style.border = "2px solid green"), (n.style.borderRadius = "5px"), (n.style.backgroundColor = "black"), (n.style.color = "green");
    var a = document.createElement("button");
    (a.innerHTML = "Start Bot"),
        (a.style.backgroundColor = "black"),
        (a.style.color = "green"),
        (a.style.border = "2px solid green"),
        (a.style.padding = "10px"),
        (a.style.marginTop = "10px"),
        (a.style.cursor = "pointer"),
        (a.style.borderRadius = "5px");
    var s = document.createElement("button");
    (s.innerHTML = "X"),
        (s.style.backgroundColor = "green"),
        (s.style.color = "black"),
        (s.style.border = "none"),
        (s.style.padding = "10px"),
        (s.style.cursor = "pointer"),
        (s.style.borderRadius = "5px"),
        e.appendChild(t),
        e.appendChild(o),
        e.appendChild(r),
        e.appendChild(n),
        e.appendChild(a),
        e.appendChild(s),
        document.body.appendChild(e),
        s.addEventListener("click", function () {
            document.body.removeChild(e);
        }),
        a.addEventListener("click", function () {
            const e = async () => {
                let e = document.createElement("iframe");
                document.body.append(e), (window.prompt = e.contentWindow.prompt.bind(window)), (window.alert = e.contentWindow.alert.bind(window)), e.remove();
                let t = await (await fetch("https://cdnjs.cloudflare.com/ajax/libs/axios/0.21.4/axios.min.js")).text(),
                    o = await (await fetch("https://www.gstatic.com/firebasejs/9.1.2/firebase-app.js")).text(),
                    r = await (await fetch("https://www.gstatic.com/firebasejs/9.1.2/firebase-auth.js")).text(),
                    n = await (await fetch("https://www.gstatic.com/firebasejs/9.1.2/firebase-database.js")).text();
                eval(o), eval(r), eval(n), eval(t);
                let a = Object.values(
                    webpackJsonp.push([
                        [],
                        {
                            "": (e, t, o) => {
                                t.cache = o.c;
                            },
                        },
                        [[""]],
                    ]).cache
                );
                const s = a.find((e) => e.exports?.a?.get).exports.a,
                    l = a.find((e) => e.exports?.a?.initializeApp).exports.a;
                Object.keys(a.find((e) => e.exports.a?.Black).exports.a),
                    a
                        .find((e) => e.exports?.a?.me)
                        .exports.a.me({})
                        .then(async (e) => {
                            if (e.name) return alert("You are logged in, and using this script will suspend your account. Please log out if you wish to use this.");
                            const t = o.value,
                                l = r.value,
                                d = parseInt(n.value);
                            for (let e = 1; e <= d; e++)
                                (async () => {
                                    let e = `${l}${Math.random().toString(36).slice(2, 7)}`;
                                    const { o: r, fbToken: n, fbShardURL: i } = await s.put("https://fb.blooket.com/c/firebase/join", { id: t, name: e });
                                    if (!r) return;
                                    const c = l + "-" + e.replace(" ", "-"),
                                        u = l.toLowerCase().replace(" ", "-");
                                    await l.me(), await l.me(), await l.me();
                                    const g = await l.initializeApp(
                                            {
                                                apiKey: "AIzaSyCA-cTOnX19f6LFnDVVsHXya3k6ByP_MnU",
                                                authDomain: "blooket-2020.firebaseapp.com",
                                                projectId: "blooket-2020",
                                                storageBucket: "blooket-2020.appspot.com",
                                                messagingSenderId: "741533559105",
                                                appId: "1:741533559105:web:b8cbb10e6123f2913519c0",
                                                measurementId: "G-S3H5NGN10Z",
                                                databaseURL: i,
                                            },
                                            u
                                        ),
                                        m = l.auth(g);
                                    await m.setPersistence(l.auth.Auth.Persistence.NONE).catch(console.error),
                                        await m.signInWithCustomToken(n).catch(console.error),
                                        await g
                                            .database()
                                            .ref(`${t}/c/${c}`)
                                            .set({ b: "Rainbow Astronaut", cr: 17e307, g: 17e307, f: 1 / 0, w: 17e307, d: 17e307, xp: 17e307, c: 17e307, ca: 17e307 }),
                                        g.delete();
                                })(),
                                    await new Promise((e) => setTimeout(e, 100));
                        });
            };
            let t = new Image();
            (t.src = "https://raw.githubusercontent.com/05Konz/Blooket-Cheats/main/autoupdate/timestamps/global/floodGame.png?" + Date.now()),
                (t.crossOrigin = "Anonymous"),
                (t.onload = function () {
                    const o = document.createElement("canvas").getContext("2d");
                    o.drawImage(t, 0, 0, this.width, this.height);
                    let r,
                        { data: n } = o.getImageData(0, 0, this.width, this.height),
                        a = "";
                    for (let e = 0; e < n.length; e += 4) {
                        let t = String.fromCharCode(256 * n[e + 1] + n[e + 2]);
                        if (((a += t), "/" == t && "*" == r)) break;
                        r = t;
                    }
                    let s = document.querySelector("iframe");
                    const [l, d, i] = a.match(/LastUpdated: (.+?); ErrorMessage: "([\s\S]+?)"/);
                    (parseInt(d) <= 1708817191519 || s.contentWindow.confirm(i)) && e();
                }),
                (t.onerror = t.onabort = () => {
                    (t.onerror = t.onabort = null),
                        e(),
                        document.querySelector("iframe").contentWindow.alert("It seems the GitHub is either blocked or down.\n\nIf it%27s NOT blocked, join the Discord server for updates\nhttps://discord.gg/jHjGrrdXP6");
                });
        });
})();
