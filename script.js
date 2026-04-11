const keys = document.querySelectorAll('.piano-keys, .piano-black-keys');
const sound = new Audio('{note}.mp3');
keys.forEach((key) => {
  key.addEventListener('click',(e) =>{
    const keyclicked = e.target.dataset.note;
    console.log(keyclicked);
    sound.src = `Audios/${keyclicked}.mp3`;
    sound.currentTime = 0;
    sound.play ();
  })})