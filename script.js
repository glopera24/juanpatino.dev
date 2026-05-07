// ======================================================
// ULTRA PREMIUM LANDING SCRIPT
// Juan Patiño - Software Engineer
// ======================================================


// ======================================================
// REVEAL ANIMATIONS
// ======================================================

const fades = document.querySelectorAll('.fade-up')

const observer = new IntersectionObserver((entries) => {

  entries.forEach(entry => {

    if(entry.isIntersecting){
      entry.target.classList.add('show')
    }

  })

},{
  threshold:0.15
})

fades.forEach(el => observer.observe(el))


// ======================================================
// HEADER EFFECT
// ======================================================

const header = document.getElementById('header')

window.addEventListener('scroll', () => {

  if(window.scrollY > 40){
    header.classList.add('scrolled')
  }else{
    header.classList.remove('scrolled')
  }

})


// ======================================================
// CURSOR GLOW EFFECT
// ======================================================

const glow = document.createElement('div')

glow.classList.add('cursor-glow')

document.body.appendChild(glow)

window.addEventListener('mousemove', (e) => {

  glow.style.left = `${e.clientX}px`
  glow.style.top = `${e.clientY}px`

})


// ======================================================
// PARALLAX BACKGROUND EFFECT
// ======================================================

const gradients = document.querySelectorAll('.gradient')

window.addEventListener('mousemove', (e) => {

  const x = e.clientX / window.innerWidth
  const y = e.clientY / window.innerHeight

  gradients.forEach((gradient, index) => {

    const speed = (index + 1) * 30

    gradient.style.transform = `
      translate(
        ${x * speed}px,
        ${y * speed}px
      )
    `

  })

})


// ======================================================
// HERO TYPING EFFECT
// ======================================================

const heroTitle = document.querySelector('.hero h1')

if(heroTitle){

  const originalText = heroTitle.innerHTML

  heroTitle.innerHTML = ''

  let i = 0

  function typingEffect(){

    if(i < originalText.length){

      heroTitle.innerHTML += originalText.charAt(i)

      i++

      setTimeout(typingEffect, 20)

    }

  }

  typingEffect()

}


// ======================================================
// FLOATING PARTICLES
// ======================================================

const particlesContainer = document.createElement('div')

particlesContainer.classList.add('particles')

document.body.appendChild(particlesContainer)

for(let i = 0; i < 40; i++){

  const particle = document.createElement('span')

  particle.style.left = Math.random() * 100 + 'vw'

  particle.style.animationDuration =
    (Math.random() * 10 + 10) + 's'

  particle.style.animationDelay =
    Math.random() * 5 + 's'

  particle.style.opacity =
    Math.random()

  particle.style.width =
    Math.random() * 4 + 'px'

  particle.style.height =
    particle.style.width

  particlesContainer.appendChild(particle)

}


// ======================================================
// SMOOTH SCROLL
// ======================================================

const links = document.querySelectorAll('a[href^="#"]')

links.forEach(link => {

  link.addEventListener('click', function(e){

    e.preventDefault()

    const targetId = this.getAttribute('href')

    const target = document.querySelector(targetId)

    if(target){

      target.scrollIntoView({
        behavior:'smooth',
        block:'start'
      })

    }

  })

})


// ======================================================
// BUTTON MAGNET EFFECT
// ======================================================

const buttons = document.querySelectorAll('.btn')

buttons.forEach(btn => {

  btn.addEventListener('mousemove', (e) => {

    const rect = btn.getBoundingClientRect()

    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    btn.style.setProperty('--x', `${x}px`)
    btn.style.setProperty('--y', `${y}px`)

  })

})


// ======================================================
// CARD HOVER 3D EFFECT
// ======================================================

const cards = document.querySelectorAll(
  '.service-card, .result-card'
)

cards.forEach(card => {

  card.addEventListener('mousemove', (e) => {

    const rect = card.getBoundingClientRect()

    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const centerX = rect.width / 2
    const centerY = rect.height / 2

    const rotateX = (y - centerY) / 20
    const rotateY = (centerX - x) / 20

    card.style.transform = `
      perspective(1000px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      translateY(-10px)
    `

  })

  card.addEventListener('mouseleave', () => {

    card.style.transform = `
      perspective(1000px)
      rotateX(0)
      rotateY(0)
      translateY(0)
    `

  })

})


// ======================================================
// COUNTER ANIMATION
// ======================================================

const counters = document.querySelectorAll('.result-card h3')

const counterObserver = new IntersectionObserver((entries) => {

  entries.forEach(entry => {

    if(entry.isIntersecting){

      const counter = entry.target

      const targetText = counter.innerText

      const number = parseInt(targetText)

      if(!isNaN(number)){

        let current = 0

        const increment = number / 50

        const updateCounter = () => {

          current += increment

          if(current < number){

            counter.innerText =
              Math.floor(current) + '+'

            requestAnimationFrame(updateCounter)

          }else{

            counter.innerText = targetText

          }

        }

        updateCounter()

      }

    }

  })

},{
  threshold:0.5
})

counters.forEach(counter => {
  counterObserver.observe(counter)
})


// ======================================================
// TERMINAL GLOW EFFECT
// ======================================================

const codeCard = document.querySelector('.code-card')

if(codeCard){

  codeCard.addEventListener('mousemove', (e) => {

    const rect = codeCard.getBoundingClientRect()

    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    codeCard.style.background = `
      radial-gradient(
        circle at ${x}px ${y}px,
        rgba(124,58,237,0.15),
        #0b1020 40%
      )
    `

  })

  codeCard.addEventListener('mouseleave', () => {

    codeCard.style.background = '#0b1020'

  })

}


// ======================================================
// RANDOM MATRIX SYMBOLS
// ======================================================

const matrixContainer = document.createElement('div')

matrixContainer.classList.add('matrix')

document.body.appendChild(matrixContainer)

const chars = '01'

for(let i = 0; i < 50; i++){

  const span = document.createElement('span')

  span.innerText =
    chars[Math.floor(Math.random() * chars.length)]

  span.style.left =
    Math.random() * 100 + 'vw'

  span.style.animationDuration =
    (Math.random() * 5 + 5) + 's'

  span.style.fontSize =
    (Math.random() * 10 + 10) + 'px'

  matrixContainer.appendChild(span)

}


// ======================================================
// LOADER SCREEN
// ======================================================

window.addEventListener('load', () => {

  const loader = document.createElement('div')

  loader.classList.add('loader')

  loader.innerHTML = `
    <div class="loader-content">
      <div class="loader-logo">
        <i class="ri-code-s-slash-line"></i>
      </div>

      <h2>Loading Experience...</h2>
    </div>
  `

  document.body.appendChild(loader)

  setTimeout(() => {

    loader.classList.add('hide')

    setTimeout(() => {
      loader.remove()
    }, 1000)

  }, 1200)

})


// ======================================================
// ACTIVE NAV LINK
// ======================================================

const sections = document.querySelectorAll('section')
const navLinks = document.querySelectorAll('.desktop-nav a')

window.addEventListener('scroll', () => {

  let current = ''

  sections.forEach(section => {

    const sectionTop = section.offsetTop

    if(pageYOffset >= sectionTop - 200){
      current = section.getAttribute('id')
    }

  })

  navLinks.forEach(link => {

    link.classList.remove('active')

    if(link.getAttribute('href') === `#${current}`){
      link.classList.add('active')
    }

  })

})


// ======================================================
// SCROLL PROGRESS BAR
// ======================================================

const progressBar = document.createElement('div')

progressBar.classList.add('scroll-progress')

document.body.appendChild(progressBar)

window.addEventListener('scroll', () => {

  const totalHeight =
    document.body.scrollHeight - window.innerHeight

  const progress =
    (window.pageYOffset / totalHeight) * 100

  progressBar.style.width = progress + '%'

})


// ======================================================
// CONSOLE MESSAGE
// ======================================================

console.log(`
=========================================
 Juan Patiño | Software Engineer
=========================================

Sistema cargado correctamente 🚀

`)
