let data = [];
let btn = document.querySelectorAll('.btn');
let form = document.querySelector('.form');



btn.forEach((e)=>{
    e.addEventListener('click',addValue);
});
function addValue(){
    if (this.classList.contains('green-btn')) {
            let tda = document.querySelector('.tda');
            let tdb = document.querySelector('.tdb');
        if (tda.value && tdb.value) {
            this.classList.remove('green-btn');
            this.classList.add('red-btn');
            this.innerHTML = `刪除`;
            let value = {a:tda.value,b:tdb.value};
            data.push(value);
            let newDiv = document.createElement('div');
            let newInputA = document.createElement('input');
            newInputA.type = 'number';
            newInputA.className = 'tda';
            let newInputB = document.createElement('input');
            newInputB.type = 'number';
            newInputB.className = 'tdb';
            let newBtn = document.createElement('button');
            newBtn.className = 'btn green-btn';
            newBtn.textContent = '新增';
            newBtn.addEventListener('click', addValue);
            form.appendChild(newDiv);
            newDiv.appendChild(newInputA);
            newDiv.appendChild(newInputB);
            newDiv.appendChild(newBtn);
        }
    }
    console.log(data);
}




// btn.addEventListener('click',checkValue);
// btn.addEventListener('click',deletValue);


// btn.forEach(function(btn){
//     btn.addEventListener('click',checkValue);
//     btn.addEventListener('click',deletValue);

//     function checkValue(){
//         console.log(tda.value);
//         console.log(tdb.value);
//     };

//     function deletValue(){
//         if (btn.classList.contains('green-btn')) {
//             if (tda.value || tdb.value) {
//                 btn.classList.remove('green-btn');
//                 btn.classList.add('red-btn');
//                 btn.innerHTML = `刪除`;
//                 value = {a:tda.value,b:tdb.value};
//                 data.push(value);
//                 console.log(data);
//             }
//         } else if (btn.classList.contains('red-btn')) {
//             tda.value = '';
//             tdb.value = '';
//             btn.classList.remove('red-btn');
//             btn.classList.add('green-btn');
//             btn.innerHTML = `新增`;
//         }
//     }
// })
// function addValue(){
//     if (btn.classList.contains('green-btn')) {
//         if (tda.value && tdb.value) {
//             btn.classList.remove('green-btn');
//             btn.classList.add('red-btn');
//             btn.innerHTML = `刪除`;
//             value = {a:tda.value,b:tdb.value};
//             data.push(value);
//             console.log(data);
//         }
//     } 
// }
