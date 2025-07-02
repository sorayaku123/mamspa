


    var sidebar = document.getElementById("sidebar")
var sidebar_ = document.getElementById("sidebar_")
sidebar.addEventListener("click", () => {
   sidebar_.classList.toggle("active")
})

var close =document.getElementById("close")
close.addEventListener("click", () => {
    sidebar_.classList.toggle("active");
})

