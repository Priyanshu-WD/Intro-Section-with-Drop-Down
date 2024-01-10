const dropDown = document.querySelector("#dropdown");
const dropDown11 = document.querySelector("#dropdown11");
const dropDown1 = document.querySelector("#dropdown1");
const dropDown22 = document.querySelector("#dropdown2");
const menu = document.querySelector("#bar");
const close = document.querySelector("#cross");
const down = document.querySelector("#down1");
const down1 = document.querySelector("#down2");
const up = document.querySelector("#up1");
const up1 = document.querySelector("#up2");

let open = "hide";

dropDown.addEventListener("click", () => {
  if (open === "hide") {
    open = "show";

    document.querySelector("#service1").style.visibility = "visible";
    document.querySelector(".arrup").style.visibility = "visible";
    document.querySelector(".arrdown").style.visibility = "hidden";
  } else {
    open = "hide";
    document.querySelector("#service1").style.visibility = "hidden";
    document.querySelector(".arrup").style.visibility = "hidden";
    document.querySelector(".arrdown").style.visibility = "visible";
  }
});

dropDown1.addEventListener("click", () => {
  if (open === "hide") {
    open = "show";

    document.querySelector("#service2").style.visibility = "visible";
    document.querySelector(".arrup1").style.visibility = "visible";
    document.querySelector(".arrdown1").style.visibility = "hidden";
  } else {
    open = "hide";
    document.querySelector("#service2").style.visibility = "hidden";
    document.querySelector(".arrup1").style.visibility = "hidden";
    document.querySelector(".arrdown1").style.visibility = "visible";
  }
});

menu.addEventListener("click", () => {
  console.log("clicked");
  document.querySelector(".side-bar").style.display = "block";
});

close.addEventListener("click", () => {
  document.querySelector(".side-bar").style.display = "none";
});

dropDown22.addEventListener("click", () => {
  if (open === "hide") {
    open = "show";

    document.querySelector("#service22").style.visibility = "visible";
    document.querySelector("#up2").style.visibility = "visible";
    document.querySelector("#down2").style.visibility = "hidden";
  } else {
    open = "hide";
    document.querySelector("#service22").style.visibility = "hidden";
    document.querySelector("#up2").style.visibility = "hidden";
    document.querySelector("#down2").style.visibility = "visible";
  }
});

dropDown11.addEventListener("click", () => {
  if (open === "hide") {
    open = "show";

    document.querySelector("#service11").style.visibility = "visible";
    document.querySelector("#up1").style.visibility = "visible";
    document.querySelector("#down1").style.visibility = "hidden";
  } else {
    open = "hide";
    document.querySelector("#service11").style.visibility = "hidden";
    document.querySelector("#up1").style.visibility = "hidden";
    document.querySelector("#down1").style.visibility = "visible";
  }
});
