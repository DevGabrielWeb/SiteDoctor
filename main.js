window.addEventListener('scroll', onScroll)
onScroll()



function onScroll() {
  showNavOnScroll()
  showBackToTopButtonOnScroll()

  activateMenuAtCurrentSection(home)
  activateMenuAtCurrentSection(services)
  activateMenuAtCurrentSection(about)
  activateMenuAtCurrentSection(contact)
}


function activateMenuAtCurrentSection(section){
const targetLine = scrollY + innerHeight / 2  // innerHeight mostra altura visível da página.

// altura do top da seção 
const sectionTop = section.offsetTop

// altura da seção
const sectionHeight = section.offsetHeight

// o topo da seção chegou e ultrapassou a linha alvo
const sectionTopReachOrPassedTargetline = targetLine >= sectionTop

// verificar se a base está abaixo da linha alvo 
// a seção termina onde?
const sectionEndsAt = sectionTop + sectionHeight

// o final da seção passou da linha alvo
const sectionEndPassedTargetline = sectionEndsAt <= targetLine

// limite da seção
const sectionBondaries = 
sectionTopReachOrPassedTargetline && !sectionEndPassedTargetline


const sectionId= section.getAttribute('id')
const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

menuElement.classList.remove('active')
if(sectionBondaries){
  menuElement.classList.add('active')
}
}


































function showNavOnScroll(){
  if (scrollY > 0) {
    navigation.classList.add('scroll')
  } else {
    navigation.classList.remove('scroll')
  }
}
function showBackToTopButtonOnScroll(){
  if (scrollY > 500) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

function openMenu() {
  document.body.classList.add('menu-expanded')
}

function closeMenu() {
  document.body.classList.remove('menu-expanded')
}
