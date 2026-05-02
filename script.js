const song_dropdown = document.getElementById('songs');
const play_button = document.getElementById('play-button');
const keys = document.querySelectorAll('.piano-keys, .piano-black-keys');
const sound = new Audio('{note}.mp3');
keys.forEach((key) => {
  key.addEventListener('click',(e) =>{
    const keyclicked = e.target.dataset.note;
    console.log(keyclicked);
    // sound.src = `Audios/${keyclicked}.mp3`;
    // sound.currentTime = 0;
    // sound.play ();
      playSong(testInput);
  })})
  async function playSong(csvFile) {
    const lines = csvFile.trim().split('\n');
    for (const line of lines) {
      const [note, duration] = line.split(',').map(item => item.trim());
      const beat = new Audio(`Audios/${note}.mp3`);
      beat.src = `Audios/${note}.mp3`;
      beat.currentTime = 0;
      beat.play();
      await new Promise(resolve => setTimeout(resolve, parseInt(duration) * 300));
    }
  }
  fetch('mary_had_a_little_lamb.csv')
    .then(response => response.text())
    .then(data => {
      const testInput = data;
      play_button.addEventListener('click', () => {
        playSong(testInput);
      })});;