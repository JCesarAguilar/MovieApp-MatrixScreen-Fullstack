const btnLimpiar = document.querySelector("#btnLimpiar");

btnLimpiar.addEventListener("click", () => {
  const form = document.querySelector("form");

  form.querySelectorAll("input, select, textarea").forEach((el) => {
    if (el.type === "select-one" || el.type === "select-multiple") {
      el.selectedIndex = 0;
    } else {
      el.value = "";
    }
  });
});