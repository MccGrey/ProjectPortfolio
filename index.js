//========================FLOATING NAV FUNCTIONALITY===

const floatingNavs = document.querySelectorAll('.floating__nav a')

const removeActiveClass = () => {
    floatingNavs.forEach(nav => {
        nav.classList.remove('active')
    })
}
floatingNavs.forEach(nav => {
    nav.addEventListener('click', () => {
        removeActiveClass();
        nav.classList.add('active')
    })
})

//=========RESUME=====
const resumeRight = document.querySelector('.resume__right')
const experienceContent = `<h4>Experience</h4>
            <p>
                These are some of the companies I've worked with in the past years.
            </p>
            <ul>
                <li>
                    <h6>2024 - 2025</h6>
                    <h5>Full-Time</h5>
                    <p>Uncle 5 Grills</p>
                </li>
                <li>
                    <h6>2024 - 2024</h6>
                    <h5>Contract</h5>
                    <p>Bluske Entertainment</p>
                </li>
                
                <li>
                    <h6>2024 - 2024</h6>
                    <h5>Contract</h5>
                    <p>The Oranje Media</p>
                </li>
                <li>
                    <h6>2023 - 2024</h6>
                    <h5>Contract</h5>
                    <p>Social Media Ads</p>
                </li>
            </ul>
`
const experienceBtn = document.querySelector('.experience__btn')
experienceBtn.addEventListener('click', () => {
    resumeRight.innerHTML = experienceContent;
    resumeRight.className = 'resume__right'
    experienceBtn.classList.add('primary')
      //remove classes from other buttons
    aboutBtn.classList.remove('primary')
    skillsBtn.classList.remove('primary')
    educationBtn.classList.remove('primary')
  
})
//set experience content as default
resumeRight.innerHTML = experienceContent;


//education
const educationBtn = document.querySelector('.education__btn');
const educationContent = `<h4>Education</h4>
                        
                        <ul>
                            <li>
                                <h5>College Education</h5>
                                <p>loremmnjdbdlorem jklorenme kjfjfjfnbfjfjbhhchbcbfhvfhfvnvn vnvnbv 
                                nfufbfyhfb 
                                </p>
                            </li>
                            <li>
                                <h5>College Education</h5>
                                <p>loremmnjdbdlorem jklorenme kjfjfjfnbfjfjbhhchbcbfhvfhfvnvn vnvnbv 
                                nfufbfyhfb 
                                </p>
                            </li>
                            <li>
                                <h5>College Education</h5>
                                <p>loremmnjdbdlorem jklorenme kjfjfjfnbfjfjbhhchbcbfhvfhfvnvn vnvnbv 
                                nfufbfyhfb 
                                </p>
                            </li>
                            <li>
                                <h5>College Education</h5>
                                <p>loremmnjdbdlorem jklorenme kjfjfjfnbfjfjbhhchbcbfhvfhfvnvn vnvnbv 
                                nfufbfyhfb 
                                </p>
                            </li>
                        </ul>

`

educationBtn.addEventListener('click', () => {
    resumeRight.innerHTML = educationContent;
    resumeRight.className ='resume__right education'
    educationBtn.classList.add('primary')
      //remove classes from other buttons
    aboutBtn.classList.remove('primary')
    skillsBtn.classList.remove('primary')
    experienceBtn.classList.remove('primary')
})


//skills

const skillsContent = `<h4>Skills</h4>
                    <p>lorem menfknjf jnvnjjnhv jvbjjbuvikd d</p>
                    <ul>
                        <li><img src="./assets/afterEffect.jpg" alt="aftereffect" ></li>
                        <li><img src="./assets/CapCut.jpg" alt="capcut" ></li>
                        <li><img src="./assets/Davinci.jpg" alt="davinci" ></li>
                        <li><img src="./assets//Photoshop.jpg" alt="photoshop" ></li>
                        <li><img src="./assets/Sketchbook.jpg" alt="sketchbook" ></li>
                        <li><img src="./assets/canva1.jpeg" alt="canva" ></li>
                    
                    </ul>`

const skillsBtn = document.querySelector('.skills__btn')
skillsBtn.addEventListener('click', () => {
    resumeRight.innerHTML = skillsContent;
    resumeRight.className = 'resume__right skills'
    skillsBtn.classList.add("primary")
    //remove classes from other buttons
    aboutBtn.classList.remove('primary')
    experienceBtn.classList.remove('primary')
    educationBtn.classList.remove('primary')
})

//about me

const aboutContent = `<h4>About me</h4>
                        <p>lorem fkijfif kfikijffhf fjdjfuuhjsd jfchfhu sjbhdgyudauhsijdjofj fjfbhfhubjjnf 

                        </p>
                        <ul>
                            <li>
                            <h6>Name:</h6>
                            <h5>Grey</h5>
                            </li>

                            <li>
                            <h6>Experience:</h6>
                            <h5>5+ years</h5>
                            </li>

                            <li>
                            <h6>Email:</h6>
                            <h5>corneliusaguonye@gmail.com</h5>
                            </li>

                            <li>
                            <h6>Nationality:</h6>
                            <h5>Nigerian</h5>
                            </li>

                            <li>
                            <h6>Freelance & Collabs:</h6>
                            <h5>Available</h5>
                            </li>

                            <li>
                            <h6>Language:</h6>
                            <h5>English</h5>
                            </li>

                            <li>
                            <h6>Phone:</h6>
                            <h5>+2348121299552</h5>
                            </li>

                            <li>
                            <h6>LinkedIn:</h6>
                            <h5>@mccgrey</h5>
                            </li>
                        </ul>
`
const aboutBtn = document.querySelector('.about__btn')
aboutBtn.addEventListener('click', () => {
    resumeRight.innerHTML = aboutContent;
    resumeRight.className = "resume__right about"
    aboutBtn.classList.add('primary')
    //remove classes from other buttons
    skillsBtn.classList.remove('primary')
    experienceBtn.classList.remove('primary')
    educationBtn.classList.remove('primary')

})


//========================MIXITUP PROJECTS========================

const containerEl = document.querySelector('.projects__container');
let mixer = mixitup(containerEl, {
    animation: {
        enable: false,
    }
});

mixer.filter('*')



//========================SWIPER JS========================

const swiper = new Swiper('.swiper', {
    // Optional parameters
  loop: true,
  slidePerView: 1,
  spaceBetween: 30,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  breakpoints: {
    600: {
      slidesPerView: 2,
    }, 1024: {
      slidesPerView: 3,
    }
  }

});








//========================FAQ========================
const faqs = document.querySelectorAll('.faqs__item');

faqs.forEach(faq => {
    faq.addEventListener('click', () => {
       const p = faq.querySelector('p');
       const icon = faq.querySelector('.faq__icon');
       if(p.classList.contains('show')){
        p.classList.remove('show')
        icon.innerHTML = `<i class="uil uil-angle-down"></i>`
       } else {
        p.classList.add('show')
        icon.innerHTML = `<i class="uil uil-angle-up"></i>`
       }
    })
})


//========================DARK THEME ============
const themeToggler = document.querySelector('.nav__theme-btn');
themeToggler.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme-variables')

    if(document.body.classList == ''){
        themeToggler.innerHTML = `<i class="uil uil-moon"></i>`
        window.localStorage.setItem('portfolio-theme', '')
    } else {
        themeToggler.innerHTML = `<i class="uil uil-sun"></i>`
        window.localStorage.setItem('portfolio-theme', 'dark-theme-variables')
    }
})

// use local storage to keep theme selected even when user refreshes the page
const bodyClass = window.localStorage.getItem('portfolio-theme')
document.body.className = bodyClass;