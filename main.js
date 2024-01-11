const images = document.querySelectorAll("body .images .image");

console.log(images);

function anim(value) {
  images.forEach((image) => {
    image.classList.remove("active");
  });
  images[value].classList.add("active");
}

images.forEach((image, value) => {
  image.addEventListener("click", function () {
    anim(value);
  });
});
