
function playItHere(e, link) {
    var audio = document.createElement("audio");
    var src = document.createElement("source");
    src.src = link.href;
    audio.appendChild(src);
    audio.play();
    e.preventDefault();
}
