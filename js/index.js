// Your code goes here
const headerScale = 
document.querySelector('.intro img');
headerScale.addEventListener ('mouseenter' , (e) => {
    headerScale.style.transform = 'scaleY(1.1)';
});
headerScale.addEventListener ('mouseleave' , (e) => {
    headerScale.style.transform = 'scaleX(1.1)';
});

const logoRotate = 
document.querySelector('.logo-heading');
logoRotate.addEventListener ('mouseenter', (e) => {
    logoRotate.style.transform = 'rotateX(180deg)';
    event.stopImmediatePropagation();  
}); 
document.querySelector('.logo-heading');
logoRotate.addEventListener ('mouseleave', (e) => {
    logoRotate.style.transform = 'rotateX(360deg)';
}); 

const navChange = 
document.querySelector('.main-navigation');
navChange.addEventListener ('click', (e) => {
    navChange.style.background = "dodgerblue";
    e.stopImmediatePropagation();
});
const btnScale = 
document.querySelector('.btn');
btnScale.addEventListener ('mouseenter', (e) => {
    btnScale.style.transform = 'scale(3)';
});

btnScale.addEventListener ('mouseleave', (e) => {
    btnScale.style.transform = 'scale(1)';
});

const destImg = 
document.querySelector ('.content-destination img');
destImg.addEventListener ('click', (e) =>{
    destImg.style.transform = ('rotate(20deg)');
});

const contentImg = 
document.querySelectorAll('.img-content');

contentImg.forEach (item => {
    item.addEventListener ('mouseenter', (e) => {
        item.style.transform =  ('rotate(18deg)');
});
item.addEventListener ('mouseleave', (e) => {
    item.style.transform =  ('rotate(360deg)');
});
});


const link = document.querySelector('.nav a');
link.addEventListener('click', e => {
  console.log("link is clicked");
  e.preventDefault();
});


