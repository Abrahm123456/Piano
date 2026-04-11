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
      sound.src = `Audios/${note}.mp3`;
      sound.currentTime = 0;
      sound.play();
      await new Promise(resolve => setTimeout(resolve, parseInt(duration)));
    }
  }
  const testInput = `
5,3
4,1
3,1
4,1
5,1
5,1
5,2
4,1
4,1
4,2
5,1
6,1
6,2
5,3
4,1
3,1
4,1
5,1
5,1
5,2
4,1
4,1
4,1
5,1
4,1
3,3`;
  playSong(testInput);