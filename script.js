import { tr, us } from "./ceviri.js";

// Dil Sistemi
var sayfa_dili = localStorage.getItem("dil");
let dil_i = document.querySelector(".mevcut-dil .dil i");
var dil_sec = document.querySelectorAll(".dil-sec .dil");
var dil_degistir = document.querySelector(".dil-degistir");
dil_i.classList.add(`flag-icon-${sayfa_dili}`);
if(sayfa_dili === null) {
    localStorage.setItem("dil", "tr");
    location.reload();
};
document.querySelector('.dil-degistir .mevcut-dil').addEventListener("click", function (e) {
    e.stopPropagation();
    document.querySelector('.dil-degistir .mevcut-dil').parentNode.classList.toggle('dil-aktif');
    document.querySelector(".hakkimda ~ .bolum").classList.toggle("op-01");
});
document.addEventListener("click", function () {
    dil_degistir.classList.remove('dil-aktif');
    document.querySelector(".hakkimda ~ .bolum").classList.remove("op-01");
    // document.querySelector(".hakkimda ~ .bolum").style.opacity = "1";
});
dil(sayfa_dili);
dil_sec.forEach((eleman) => {
    eleman.addEventListener("click", () => {
        var i = eleman.children.item(0).getAttribute("class");
        var dil_verisi = eleman.getAttribute("dil-verisi");
        var sayfa_dili = dil_verisi;
        dil(sayfa_dili);
        document.querySelector(".mevcut-dil i").setAttribute("class", i);
        localStorage.setItem("dil", sayfa_dili);
    });
});
function dil(sayfa_dili) {
    if(sayfa_dili === "tr") {
        var sayfa_dili = tr;
    }
    if(sayfa_dili === "us") {
        var sayfa_dili = us;
    }
    document.getElementById("hakkimda-bas-bolge-yazi").innerHTML = sayfa_dili.hakkimda.bas_bolge.yazi;
    document.getElementById("hakkimda-ana-bolge-basliginin-govde-yazisi-1").innerHTML = sayfa_dili.hakkimda.ana_bolge.baslik_govdesi.yazi_1;
    document.getElementById("hakkimda-ana-bolge-basliginin-govde-aciklamasi-1").innerHTML = sayfa_dili.hakkimda.ana_bolge.baslik_govdesi.aciklama_1;
    document.getElementById("hakkimda-ana-bolge-iceriginin-govde-yazisi-1").innerHTML = sayfa_dili.hakkimda.ana_bolge.icerik_govdesi.yazi_1;
    document.getElementById("hakkimda-ana-bolge-basliginin-govde-yazisi-2").innerHTML = sayfa_dili.hakkimda.ana_bolge.baslik_govdesi.yazi_2;
    document.getElementById("hakkimda-ana-bolge-basliginin-govde-aciklamasi-2").innerHTML = sayfa_dili.hakkimda.ana_bolge.baslik_govdesi.aciklama_2;
    document.getElementById("hakkimda-ana-bolge-iceriginin-govde-yazisi-2").innerHTML = sayfa_dili.hakkimda.ana_bolge.icerik_govdesi.yazi_2;
    
    document.getElementById("oyunlar").innerHTML = sayfa_dili.hakkimda.oyunlar;
    document.getElementById("oyunlar-aciklama").innerHTML = sayfa_dili.hakkimda.oyunlar_aciklama;
    document.getElementById("oyun-1").innerHTML = sayfa_dili.hakkimda.oyun_1;
    document.getElementById("oyun-2").innerHTML = sayfa_dili.hakkimda.oyun_2;


    document.getElementById("bas-icerik-baslik").innerHTML = sayfa_dili.bas_icerik.baslik;
    document.getElementById("bas-icerik-aciklama").innerHTML = sayfa_dili.bas_icerik.aciklama;

    document.getElementById("sikca-sorulan-sorular-soru-1").innerHTML = sayfa_dili.sikca_sorulan_sorular.soru_1;
    document.getElementById("sikca-sorulan-sorular-cevap-1").innerHTML = sayfa_dili.sikca_sorulan_sorular.cevap_1;

    document.getElementById("geri-sayac-baslik").innerHTML = sayfa_dili.geri_sayac.baslik;
    document.getElementById("geri-sayac-vakit-ismi-1").innerHTML = sayfa_dili.geri_sayac.vakit_ismi_1;
    document.getElementById("geri-sayac-vakit-ismi-2").innerHTML = sayfa_dili.geri_sayac.vakit_ismi_2;
    document.getElementById("geri-sayac-vakit-ismi-3").innerHTML = sayfa_dili.geri_sayac.vakit_ismi_3;
    document.getElementById("geri-sayac-vakit-ismi-4").innerHTML = sayfa_dili.geri_sayac.vakit_ismi_4;

    document.getElementById("alt-bilgi-yazi").innerHTML = sayfa_dili.alt_bilgi.yazi;
};
dil(sayfa_dili);

// Soru - Cevap
function gecis_ayari(eleman, zaman, l) {
    void 0 === zaman && (zaman = 400),
    void 0 === l && (l = !1),
    (eleman.style.overflow = "hidden"),
    l && (eleman.style.display = "block");
    var n,
        t = window.getComputedStyle(eleman),
        s = parseFloat(t.getPropertyValue("height")),
        a = parseFloat(t.getPropertyValue("padding-top")),
        r = parseFloat(t.getPropertyValue("padding-bottom")),
        y = parseFloat(t.getPropertyValue("margin-top")),
        d = parseFloat(t.getPropertyValue("margin-bottom")),
        g = s / zaman,
        m = a / zaman,
        h = r / zaman,
        u = y / zaman,
        x = d / zaman;

    window.requestAnimationFrame(function t(e) {
        void 0 === n && (n = e);
        e -= n;
        l
            ? ((eleman.style.height = g * e + "px"), (eleman.style.paddingTop = m * e + "px"), (eleman.style.paddingBottom = h * e + "px"), (eleman.style.marginTop = u * e + "px"), (eleman.style.marginBottom = x * e + "px"))
            : ((eleman.style.height = s - g * e + "px"), (eleman.style.paddingTop = a - m * e + "px"), (eleman.style.paddingBottom = r - h * e + "px"), (eleman.style.marginTop = y - u * e + "px"), (eleman.style.marginBottom = d - x * e + "px")),
            zaman <= e
                ? ((eleman.style.height = ""),
                  (eleman.style.paddingTop = ""),
                  (eleman.style.paddingBottom = ""),
                  (eleman.style.marginTop = ""),
                  (eleman.style.marginBottom = ""),
                  (eleman.style.overflow = ""),
                  l || (eleman.style.display = "none"))
                : window.requestAnimationFrame(t);
    });
};
(HTMLElement.prototype.slayt_gecisi = function (zaman) {
    if (this.clientHeight === 0) {
        gecis_ayari(this, zaman, !0)
    } else {
        gecis_ayari(this, zaman);
    }
});
(HTMLElement.prototype.slayt_kapat = function (t, e) {
    gecis_ayari(this, t, e);
});
document.querySelectorAll('.sikca-sorulan-sorular-soru').forEach(eleman => {
    eleman.addEventListener("click", (e) => {
        eleman.nextElementSibling.slayt_gecisi(300);
        document.querySelectorAll('.sikca-sorulan-sorular-cevap').forEach(function(element) {
            if (element.style.display !== "none" && element !== eleman.nextElementSibling) {
                element.slayt_kapat(300);
            }
        });
        var i = eleman.children.item(1);
        document.querySelectorAll("i").forEach(q => {
            if (q !== i) {
                q.classList.remove('*tekli-serit-asagi');
            }
            
            i.classList.toggle('*tekli-serit-asagi');
        });
    });    
});

// Renk Sistemi
'use strict';
var sayfa_rengi = localStorage.getItem('renk');
document.querySelector('.renk-degistir i').classList.add(`*${sayfa_rengi}`);
document.querySelector('.renk-degistir i').getAttribute('sa',`*${sayfa_rengi}`);
if(sayfa_rengi === null) {
    localStorage.setItem('renk', 'ay');
    location.reload();
};
document.querySelector('.renk-degistir').addEventListener('click',function () {
    document.querySelector('.renk-degistir i').classList.toggle('*ay');
    document.querySelector('.renk-degistir i').classList.toggle('*gunes');
    document.querySelector('body').classList.toggle('kapali-mod');
    var i = document.querySelector('.renk-degistir i').getAttribute('class');
    localStorage.setItem('renk', i.replace('*icon icon-freen *', ''));
});
if (sayfa_rengi==='ay') {
    document.querySelector('body').classList.remove('kapali-mod');
};
if (sayfa_rengi==='gunes') {
    document.querySelector('body').classList.add('kapali-mod');
};

// Tam Ekran Sistemi
document.querySelector('.tam-ekran-degistir i').addEventListener('click', function () {
    document.querySelector('.tam-ekran-degistir i').classList.toggle('*ekrani-buyult');
    document.querySelector('.tam-ekran-degistir i').classList.toggle('*ekrani-kucult');
});
document.querySelector(".tam-ekran-degistir").addEventListener("click", () => {
    tamEkran()
});
function tamEkran() {
    if ((document.fullScreenElement && document.fullScreenElement !== null) ||
        (!document.mozFullScreen && !document.webkitIsFullScreen)) {
        if (document.documentElement.requestFullScreen) {
            document.documentElement.requestFullScreen();
        } else if (document.documentElement.mozRequestFullScreen) {
            document.documentElement.mozRequestFullScreen();
        } else if (document.documentElement.webkitRequestFullScreen) {
            document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
        }
    } else {
        if (document.cancelFullScreen) {
            document.cancelFullScreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.webkitCancelFullScreen) {
            document.webkitCancelFullScreen();
        }
    }    
}

// Geri sayaç
"use strict";
const second = 1000, minute = second * 60, hour = minute * 60, day = hour * 24;
var countDown = new Date('June 8, 2024 10:00:00').getTime(),
x = setInterval(function() {
    var now = new Date().getTime(),
    distance = countDown - now;
    document.getElementById('gun').innerText = Math.floor(distance / (day)),
    document.getElementById('saat').innerText = Math.floor((distance % (day)) / (hour)),
    document.getElementById('dakika').innerText = Math.floor((distance % (hour)) / (minute)),
    document.getElementById('saniye').innerText = Math.floor((distance % (minute)) / second);

}, second);

// Sayfa

let hakkimda = $('.hakkimda');
let header = $('.baslik');
let hakkimda_durum = $('.hakkimda-durum');
hakkimda_durum.click(function () {
    hakkimda.toggleClass('hakkimda-kapat');
    header.toggleClass('hakkimda-kapat');
});
function name() {
    if($(window).width() < 900) {
        hakkimda.addClass('hakkimda-kapat');
        header.addClass('hakkimda-kapat');
        hakkimda_durum.click(function () {
            $(".hakkimda ~ .bolum").css({"opacity": "0.1"});
        });
        document.querySelectorAll(".hakkimda ~ .bolum").item(0).onclick = function() {myFunction()};

        function myFunction() {
            hakkimda.addClass('hakkimda-kapat');
            $(".hakkimda ~ .bolum").css({"opacity": "1"});
        }

    } else if($(window).width() > 900) {
        hakkimda.removeClass('hakkimda-kapat');
        header.removeClass('hakkimda-kapat');
        hakkimda_durum.click(function () {
            $(".hakkimda ~ .bolum").css({"opacity": "1"});
        });
        document.querySelectorAll(".hakkimda ~ .bolum").item(0).onclick = function() {myFunction()};

        function myFunction() {
            $(".hakkimda ~ .bolum").css({"opacity": "1"});
        }
    }
}
name();
$(window).resize(name);
$(window).on('resize', function(){
    $(".hakkimda ~ .bolum").css({"opacity": "1"});
});