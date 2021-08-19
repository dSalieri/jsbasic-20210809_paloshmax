function toggleText() {
  document.addEventListener("click", (e) => {
    let target = e.target.closest(".toggle-text-button");
    if (target) {
      let textElem = document.querySelector("#text");
      if (textElem) {
        if (textElem.hasAttribute("hidden")) {
          textElem.removeAttribute("hidden");
        } else {
          textElem.setAttribute("hidden", "");
        }
      }
    }
  });
}
