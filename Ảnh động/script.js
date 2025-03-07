function upDate(previewPic) {
    var imageHovered = document.getElementById("image");
    imageHovered.style.backgroundImage = "url('" + previewPic.src + "')";
    imageHovered.innerHTML = previewPic.alt;
}

function unDo() {
    var imageHovered = document.getElementById("image");
    imageHovered.style.backgroundImage = "url('')";
    imageHovered.innerHTML = "Tap a photo";
}