const keys = document.querySelectorAll('.piano-keys');
const sound = new Audio('./keysounds/key01.mp3');
// if code does not work: keys.forEach((key) => { console.log(); });

keys.forEach(key => {
  key.addEventListener('click', function() 
  { console.log('Button clicked:', this.textContent); 
    }); });