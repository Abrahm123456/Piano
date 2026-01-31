const keys = document.querySelectorAll('.piano-keys, piano-black-keys');
const sound = new Audio('1.mp3');

keys.forEach((key) => {
  key.addEventListener('click',(e) =>{
    const keyclicked = e.target.dataset.note;
    sound.src = `${keyclicked}.mp3`;
    sound.play ();
  })})