const cat_result = document.getElementById('cat_result');
const dog_result = document.getElementById('dog_result');
const cat_btn = document.getElementById('cat_btn');
const dog_btn = document.getElementById('dog_btn');
const cat = document.getElementById('getcat');
const dog = document.getElementById('getdog');

cat_btn.addEventListener('click', getRandomCat);
dog_btn.addEventListener('click', getRandomDog);

function getRandomCat(){
  fetch('https://aws.random.cat/meow')
  .then(res => res.json())
  .then(data => {
    document.getElementById("p-cat").innerHTML="";
   // cat_result.innerHTML = `<img scr="${data.file}"/>`//
      cat.src = `${data.file}`;

  })
}
function getRandomDog(){
  fetch('https://random.dog/woof.json')
  .then(res => res.json())
  .then(data => {
    document.getElementById("p-dog").innerHTML="";
    dog.src = `${data.url}`;
 // dog_result.innerHTML = `<img scr="${data.url}"/>`//
  })
}