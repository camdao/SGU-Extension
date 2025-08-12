class sS {
    rk(t) {
        var e = this.sc(),
            r = t % 3 + 1;
        return Array.from({ length: 10 }, (i, o) => e[(t + o * r) % e.length]);
    }
    sc() {
        return [58, 43, 197, 133, 4, 165, 110, 3, 44, 202, 186, 28, 118, 177, 
                32, 94, 219, 6, 199, 27, 101, 191, 66, 115, 234, 120, 10, 236, 
                104, 108, 74, 247, 68, 198, 62, 203, 17, 102, 185, 42]
               .slice(-36).slice(0, 32);
    }
    ec(t, e) {
        const r = this.rk(e).reverse(),
              i = t.split("").map(a => a.charCodeAt(0));
        let o = [];
        while (o.length < i.length) o = [...o, ...r];
        return i.map((a, u) => a ^ o[u]);
    }
}

function rnd(max) {
    return Math.floor(Math.random() * max);
}

function gc(e) {
    const no_offset = 891; // Giá trị offset cố định

    const r = `${rnd(89) + 10}${Date.now() - no_offset}${rnd(89) + 10}${e}`;
    const i = rnd(31);
    const s = new sS();
    const o = [i + 32, ...s.ec(r, i)].map(s => String.fromCharCode(s)).join("");
    return btoa(o);
}
function mc(ge, ne, Te){
    return ge.slice(-ne).slice(0, ne - Te)
}
function isapi(ge){
    const ne = mc('Phapix', 4, 1);
    let Te = ge?.toLowerCase() || "";
    return Te.startsWith(`${ne}/`) && (Te = "/" + Te),
    Te.indexOf(`/${ne}/`) >= 0 ? Te.split(`/${ne}/`)[1].toUpperCase() : ""
}

