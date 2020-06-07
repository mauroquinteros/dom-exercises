const hamburgerMenu = (menuBtn, menuContainer, menuItem) => {
  document.addEventListener('click', (ev) => {
    if(ev.target.matches(menuBtn) || ev.target.matches(`${menuBtn} *`)) {
      document.querySelector(menuContainer).classList.toggle('is-active')
      document.querySelector(menuBtn).classList.toggle('is-active')
    }

    if(ev.target.matches(`${menuItem} *`)) {
      document.querySelector(menuContainer).classList.remove('is-active')
      document.querySelector(menuBtn).classList.remove('is-active')
    }
  })
}

export default hamburgerMenu