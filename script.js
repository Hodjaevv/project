const API = "https://restcountries.com/v3.1/all";
const list = document.getElementById("list");
fetch(API)
  .then((data) => {
      return data.json();
  })
  .then((dataJson) => {
    render(dataJson);
  })
  .catch((err) => {});

function render(data) {
  data.forEach((el) => {
    // console.log(el);
    const li = document.createElement("li");
    li.classList.add("item")
    list.appendChild(li);
    li.innerHTML = `
        <img src="${el.flags.png}"/>
        <h2>Capital ${el.capital}</h2>
        <h2>Continents ${el.continents}</h2>
        <p> FIFA ${el.fifa}</p>
        <p> AREA ${el.area}</p>
        <h2>Name ${el.name.common}</h2>
        `;
  });
}

// ================= DARK LIGHT=========================

const body = document.querySelector('body')
const darkBtn = document.getElementById('dark_btn')
const lightBtn = document.getElementById('light_btn')

const modelocal = localStorage.getItem('mode')
if(modelocal){
    body.classList.add('dark')
    darkBtn.classList.toggle("hidden")
    lightBtn.classList.toggle("hidden")
}
const toggleBtn = () =>{
    darkBtn.classList.toggle("hidden")
    lightBtn.classList.toggle("hidden")
    body.classList.toggle("dark")
}
darkBtn.addEventListener('click', ()=>{
    toggleBtn()
    localStorage.setItem('mode', 'dark') 
})
lightBtn.addEventListener('click', ()=>{
    toggleBtn()
    localStorage.setItem('mode', '') 
})

// =============== SEARCH ====================

const form = document.getElementById('form')
const formButton = document.getElementById('form__button')

form['form__input'].addEventListener('input', ()=>{
    const inputValue = form['form__input'].value.toLowerCase()
    const name = document.querySelectorAll(".item")
    
    name.forEach((item) =>{
        if(item.lastElementChild.textContent.toLowerCase().includes(inputValue)){
            item.classList.remove('hidden')
        }
        else{
            item.classList.add('hidden')
        }
    })
})