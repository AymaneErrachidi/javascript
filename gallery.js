// Function to initialize the gallery on page load
function initializeGallery() {
    console.log("Gallery initialized!");
    const previews = document.querySelectorAll(".preview");

    // Add tabindex for keyboard navigation
    for (let i = 0; i < previews.length; i++) {
        previews[i].setAttribute("tabindex", "0");
    }
}

// Function to update the image and text on mouseover or focus
function upDate(previewPic) {
    const imageDiv = document.getElementById("image");
    const imageSrc = previewPic.src;
    const imageAlt = previewPic.alt;

    // Update background image and text
    imageDiv.style.backgroundImage = `url('${imageSrc}')`;
    imageDiv.innerHTML = imageAlt;
}

// Function to reset the image and text on mouseleave or blur
function unDo() {
    const imageDiv = document.getElementById("image");

    // Reset background image and text
    imageDiv.style.backgroundImage = "none";
    imageDiv.innerHTML = "Hover over an image below to display here.";
}
