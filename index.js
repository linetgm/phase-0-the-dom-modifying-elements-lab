// Write your code here!
const newHeader = document.createElement('h1');
newHeader.id = 'victory';
newHeader.textContent = 'Justin Coppola is the champion'; 

const mainElement = document.getElementById('main');
if (mainElement) {
  mainElement.remove();
}