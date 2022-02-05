let modal = document.querySelector('.modal');
let overlay = document.querySelector('.overlay');
let buttonShow = document.querySelectorAll('.show-modal');
let closebutton = document.querySelector('.close-modal');

let openModal = function(){
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}
let closeModal = function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}
for(let i = 0; i < buttonShow.length; i++)
buttonShow[i].addEventListener('click', openModal);
closebutton.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function(e){
console.log(e.key);
if(e.key === 'Escape' && !modal.classList.contains('hidden')){
    closeModal();

}
});




