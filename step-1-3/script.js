const inputs = document.querySelectorAll('input');
const favoLists = document.querySelector('.favorites');
const button = document.querySelector('button');

const getFavs = () => {
  let favList = [];
  inputs.forEach(el => {
    if(el.checked) {
      favList.push(el.parentNode.textContent);
    }
  });

  return favList.join(' ');
}

button.addEventListener('click', _ => {
  favoLists.textContent = getFavs();
})
