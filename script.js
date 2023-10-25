const inputElement = document.getElementById("input_user");

const imageWrapper = document.getElementById("image_wrapper");

inputElement.addEventListener("click", function () {
  imageWrapper.classList.add("show");
});

inputElement.addEventListener("keydown", function (event) {
  if (event.key !== "") {
    imageWrapper.classList.remove("show");
  }
});
