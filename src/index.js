function createPoem(event) {
  event.preventDefault();

  new Typewriter("#poem-box", {
    strings: "hi hhgahdjdi jdhakdufiaekjlaskd djkhcaioojdaklcjpoacj sjhdilHJ",
    autoStart: true,
    delay: 20,
    cursor: "",
  });
}

let formElement = document.querySelector("#poem-input-place");
formElement, addEventListener("submit", createPoem);
