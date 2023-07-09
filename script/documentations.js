// documentations page script start
const cardDesign = document.querySelector('.card-design')
const cardDesignBack = document.querySelector('.back')
const leftColor = document.querySelector('.left-color')
const midColor = document.querySelector('.mid-color')
const rightColor = document.querySelector('.right-color')
const lastColor = document.querySelector('.last-color')

leftColor.addEventListener('click', ()=>{
	cardDesign.style.background = 'linear-gradient(134deg, #EB001B -43.28%, #F79E1B  97%)'
	cardDesignBack.style.background = 'linear-gradient(134deg, #EB001B -43.28%, #F79E1B  97%)'
})
midColor.addEventListener('click', ()=>{
	cardDesign.style.background = 'linear-gradient(134deg, #327A60 35.63%, #230B58 93.35%)'
	cardDesignBack.style.background = 'linear-gradient(134deg, #327A60 35.63%, #230B58 93.35%)'
})
rightColor.addEventListener('click', ()=>{
	cardDesign.style.background = 'linear-gradient(134deg, #4C0964 7.86%, #EF8B16 97%)'
	cardDesignBack.style.background = 'linear-gradient(134deg, #4C0964 7.86%, #EF8B16 97%)'
})
lastColor.addEventListener('click', ()=>{
	cardDesign.style.background = 'linear-gradient(134deg, #EB001B 20.86%, #000000 97%)'
	cardDesignBack.style.background = 'linear-gradient(134deg, #EB001B 20.86%, #000000 97%)'
})
// documentations page script end 

// Check if user is logged in other to add dynamicness to the nav links
const tryHeroBtn = document.getElementById('tryHerobtn')

if (localStorage.getItem('userLoggedIn') === "true") {
	tryHeroBtn.href = 'card-gen.html';
  }else{
	tryHeroBtn.href = 'sign-in.html';
  }