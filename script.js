function toggleMode() {
    const html = document.documentElement
    html.classList.toggle("light")
    const img = domument.querySelector("#profile img")
    if (html.classList.contains('light')) {
       img.setAttribute("src", "./assets/assets/AvatarL.png")
    } else {
       img.setAttribute("src", "./assets/assets/avatar.png") 

    }
}


 