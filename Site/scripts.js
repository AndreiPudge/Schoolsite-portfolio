function CopyNumber() {
    const CopiedNumber = document.getElementById("number").innerText;
    const el = document.createElement('textarea');
    el.value = CopiedNumber;
    el.setAttribute('readonly', '');
    el.style.position = 'absolute';
    //el.style.left = '-9999px';
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);

    //

    var copyinfo = document.getElementById("ci");
    var copyinfo_text = document.getElementById("ct");
    var ae = document.querySelector("_active");

    copyinfo.classList.add("_active");
    copyinfo_text.classList.add("_active");

    copyinfo.addEventListener('animationend', function (e) {
        copyinfo.classList.remove('_active');
        copyinfo_text.classList.remove('_active');
    });
}




function ProfileInfo(value) {
    var pill = document.getElementById("pil_l")
    var pilf = document.getElementById("pil_f")
    var pilh = document.getElementById("pil_h")
    var pili = document.getElementById("pil_i")
    var ae = document.querySelector("_active");

    switch (value) {
        case 1:
            pill.classList.add("_active");
            window.scrollTo({ left: 0, top: 3255, behavior: 'smooth' });
            break;

        case 2:
            pilf.classList.add("_active");
            window.scrollTo({ left: 0, top: 3255, behavior: 'smooth' });
            break;

        case 3:
            pilh.classList.add("_active");
            window.scrollTo({ left: 0, top: 3255, behavior: 'smooth' });
            break;

        case 4:
            pili.classList.add("_active");
            window.scrollTo({ left: 0, top: 3255, behavior: 'smooth' });
            break;
    }
}

function PilClose(value) {
    var pill = document.getElementById("pil_l")
    var pilf = document.getElementById("pil_f")
    var pilh = document.getElementById("pil_h")
    var pili = document.getElementById("pil_i")
    var ae = document.querySelector("_active2");

    if (pill.classList.contains("_active") || pilf.classList.contains("_active") || pilh.classList.contains("_active") || pili.classList.contains("_active")) {
        switch (value) {
            case 1:
                pill.classList.remove("_active");
                pill.classList.add("_active2");
                pill.addEventListener('animationend', function (e) { pill.classList.remove('_active2'); });
                break;

            case 2:
                pilf.classList.remove("_active");
                pilf.classList.add("_active2");
                pilf.addEventListener('animationend', function (e) { pilf.classList.remove('_active2'); });
                break;

            case 3:
                pilh.classList.remove("_active");
                pilh.classList.add("_active2");
                pilh.addEventListener('animationend', function (e) { pilh.classList.remove('_active2'); });
                break;

            case 4:
                pili.classList.remove("_active");
                pili.classList.add("_active2");
                pili.addEventListener('animationend', function (e) { pili.classList.remove('_active2'); });
                break;
        }
    }
}





let SlideNumber = 1;

let s1 = document.querySelector(".s1");
let style = getComputedStyle(document.querySelector(".s1"));

let l1 = document.getElementById("l1");
let l2 = document.getElementById("l2");
let l3 = document.getElementById("l3");
let l4 = document.getElementById("l4");
let l5 = document.getElementById("l5");

let timer = setInterval(function () { Slide(); }, 4000);
function MO(value) { clearInterval(timer); }
function MOL() { timer = setInterval(function () { Slide(); }, 2500); }

function Slide() {
    if (SlideNumber >= 5) {
        l1.click();
    }
    else {
        SlideNumber++;
        switch (SlideNumber) {
            case 1:
                //s1.style.marginLeft = "0%";
                l1.click();
                break;

            case 2:
                // s1.style.marginLeft = "-20%";
                l2.click();
                break;

            case 3:
                // s1.style.marginLeft = "-40%";
                l3.click();
                break;

            case 4:
                // s1.style.marginLeft = "-60%";
                l4.click();
                break;

            case 5:
                // s1.style.marginLeft = "-80%";
                l5.click();
                break;
        }
    }
}

document.addEventListener("click", function (e) {
    l1.onclick = function () { s1.style.marginLeft = "0%"; SlideNumber = 1; clearInterval(timer); timer = setInterval(function () { Slide(); }, 4000); }
    l2.onclick = function () { s1.style.marginLeft = "-20%"; SlideNumber = 2; clearInterval(timer); timer = setInterval(function () { Slide(); }, 4000); }
    l3.onclick = function () { s1.style.marginLeft = "-40%"; SlideNumber = 3; clearInterval(timer); timer = setInterval(function () { Slide(); }, 4000); }
    l4.onclick = function () { s1.style.marginLeft = "-60%"; SlideNumber = 4; clearInterval(timer); timer = setInterval(function () { Slide(); }, 4000); }
    l5.onclick = function () { s1.style.marginLeft = "-80%"; SlideNumber = 5; clearInterval(timer); timer = setInterval(function () { Slide(); }, 4000); }
});

l1.click();




let gbl = document.getElementById("gbl");
let gbr = document.getElementById("gbr");

let g1 = document.getElementById("gimg1");
let g2 = document.getElementById("gimg2");
let g3 = document.getElementById("gimg3");
let g4 = document.getElementById("gimg4");
let g5 = document.getElementById("gimg5");

let n1 = "0px";
let n2 = "300px";
let n3 = "600px";
let n4 = "1100px";
let n5 = "1400px";

let op1 = "1";
let op2 = "1";

var imgIndex = 1;
var start = true;
var rl;

function giopacity() {
    if (op1 == "0") {
        switch (imgIndex) {
            case 1:
                g1.style.opacity = "1"; g2.style.opacity = "1";
                g4.style.opacity = "1"; g5.style.opacity = "1";
                break;

            case 2:
                g4.style.opacity = "1"; g1.style.opacity = "1";
                g3.style.opacity = "1"; g5.style.opacity = "1";
                break;

            case 3:
                g3.style.opacity = "1"; g2.style.opacity = "1";
                g5.style.opacity = "1"; g4.style.opacity = "1";
                break;

            case 4:
                g2.style.opacity = "1"; g1.style.opacity = "1";
                g4.style.opacity = "1"; g3.style.opacity = "1";
                break;

            case 5:
                g1.style.opacity = "1"; g3.style.opacity = "1";
                g5.style.opacity = "1"; g2.style.opacity = "1";
                break;
        }
    }
}

function gblClick() {
    giopacity()
    if (imgIndex == 1) {
        imgIndex = 5;
    }
    else {
        imgIndex--;
    }
    rl = "l";
    distributor();
}

function gbrClick() {
    giopacity()
    if (imgIndex == 5) {
        imgIndex = 1;
    }
    else {
        imgIndex++;
    }
    rl = "r";
    distributor();
}

function distributor() {
    switch (imgIndex) {
        case 1:
            if (rl == "r") { g4.classList.remove("big"); } else { g2.classList.remove("big"); }
            g1.style.left = n1; g1.style.opacity = op1;
            g2.style.left = n2; g2.style.opacity = op2;
            g3.style.left = n3; g3.classList.add("big");
            g4.style.left = n4; g4.style.opacity = op2;
            g5.style.left = n5; g5.style.opacity = op1;
            break;

        case 2:
            if (start = true) {
                g3.classList.remove("big");
                start = false;
            }
            if (rl == "r") { g3.classList.remove("big"); } else { g1.classList.remove("big"); }
            g1.style.left = n2; g1.style.opacity = op2;
            g2.style.left = n3; g2.classList.add("big");
            g3.style.left = n4; g3.style.opacity = op2;
            g4.style.left = n5; g4.style.opacity = op1;
            g5.style.left = n1; g5.style.opacity = op1;
            break;

        case 3:
            if (rl == "r") { g2.classList.remove("big"); } else { g5.classList.remove("big"); }
            g1.style.left = n3; g1.classList.add("big");
            g2.style.left = n4; g2.style.opacity = op2;
            g3.style.left = n5; g3.style.opacity = op1;
            g4.style.left = n1; g4.style.opacity = op1;
            g5.style.left = n2; g5.style.opacity = op2;
            break;

        case 4:
            if (rl == "r") { g1.classList.remove("big"); } else { g4.classList.remove("big"); }
            g1.style.left = n4; g1.style.opacity = op2;
            g2.style.left = n5; g2.style.opacity = op1;
            g3.style.left = n1; g3.style.opacity = op1;
            g4.style.left = n2; g4.style.opacity = op2;
            g5.style.left = n3; g5.classList.add("big");
            break;

        case 5:
            if (start = true) {
                g3.classList.remove("big");
                start = false;
            }
            if (rl == "r") { g5.classList.remove("big"); } else { g3.classList.remove("big"); }
            g1.style.left = n5; g1.style.opacity = op1;
            g2.style.left = n1; g2.style.opacity = op1;
            g3.style.left = n2; g3.style.opacity = op2;
            g4.style.left = n3; g4.classList.add("big");
            g5.style.left = n4; g5.style.opacity = op2;
            break;
    }
}

////////////////////////////////////////////////////////////////////////////////////////////////

document.addEventListener("DOMContentLoaded", function (event) {
    window.onresize = function () {
        resize_info();
    }
});

function resize_info() {
    if (window.innerWidth < 1800) { op1 = "0"; distributor(); } else { op1 = "1"; distributor(); }
    if (window.innerWidth < 1140) { op2 = "0"; distributor(); } else { op2 = "1"; distributor(); }
}
resize_info();




let h1 = document.querySelector(".h1");
let pstyle = getComputedStyle(document.querySelector(".h1"));

function ProfileHalfSlide(value) {
    switch (value) {
        case 1:
            h1.style.marginLeft = "-100%";
            break;
        case 2:
            h1.style.marginLeft = "0%";
            break;
    }
    let timer1 = setInterval(function () { PSlide(); }, 800);
    function PSlide() {
        window.scrollTo({ left: 0, top: 3142, behavior: 'smooth' });
        clearInterval(timer1);
    }
}




document.addEventListener("DOMContentLoaded", function (event) {
    window.onresize = function () {
        resize_info();
    }
});

function resize_info() {

}
