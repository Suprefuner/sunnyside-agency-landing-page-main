"use strict"

const meun = document.querySelector(".btn-meun")
const nav = document.querySelector(".nav")

meun.addEventListener("click", function () {
  nav.classList.toggle("hidden")
})
