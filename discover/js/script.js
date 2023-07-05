function toggleMode() {
    const html = document.documentElement

    html.classList.toggle('light') // < ------- Esse DarkMode

    // -------------------IMAGEM-----------------------

    let img = document.querySelector('.profile img')

    if(html.classList.contains('light')){
        img.setAttribute('src', '../discover/assets/avatar-light.png')
    } else{
        img.setAttribute('src', '../discover/assets/avatar.png')
    }

    //--------------------------------------------------

    // if(html.classList.contains('light')){
    //     html.classList.remove('light')
    // } else{
    //     html.classList.add('light')
    // }  <-------- Usar esse < ------- Esse DarkMode
                        
}