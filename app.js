let url = 'https://api.adviceslip.com/advice'
let btn = document.querySelector('.btn');
let txt = document.querySelector('.text');
let adviceNum = document.querySelector('.advice__number');
let loader = `<div class="loader"></div>`;

// function getData(){
//     txt.innerHTML = loader;
//     let xhr = new XMLHttpRequest();

//     xhr.open('GET',url);
//     xhr.responseType = 'json';
//     xhr.timeout = 2000;
//     xhr.send();

//     xhr.onload = function() {
//         if (xhr.status != 200){
//             alert(`Error ${xhr.status}: ${xhr.statusText}`);
//         } 
//         else { 
//             updateUI(this.response.slip);
//         }
//     };

//     xhr.onerror = function(){
//         console.log(`Network Error`);
//     };
// }

function getData(){
    fetch(url)
        .then((resp) => {
            if(!resp.ok) throw new Error('Opps');
            return resp.json();
        })
        .then((dataobj) =>{
            updateUI(dataobj.slip);
        })
        .catch((err) => {
            console.warn(err.message);
        });
}

function updateUI(res){
    txt.textContent = `"${res.advice}"`;
    adviceNum.textContent = res.id;
}


document.addEventListener('DOMContentLoaded',getData);
btn.addEventListener('click', getData);