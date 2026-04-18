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
  const testInput = `
8,3
6,1
4,1
6,1
8,1
8,1
8,2
6,1
6,1
6,2
8,1
11,1
11,2
8,3
6,1
4,1
6,1
8,1
8,1
8,2
6,1
6,1
6,1
8,1
6,1
4,3`;
  playSong(testInput);