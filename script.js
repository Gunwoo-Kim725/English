function playItHere(e, link) {
    var audio = document.createElement("audio");
    var src = document.createElement("source");
    src.src = link.href;
    audio.appendChild(src);
    audio.play();
    e.preventDefault();
}

function w3_open() {
    document.getElementById("main").style.marginLeft = "105px";
    document.getElementById("mySidebar").style.width = "105px";
    document.getElementById("mySidebar").style.display = "block";
    document.getElementById("openNav").style.display = 'none';
}

function w3_close() {
    document.getElementById("main").style.marginLeft = "0%";
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("openNav").style.display = "inline-block";
}