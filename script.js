let titre =document.querySelector('#titre');
let paragraph=document.querySelector('#paragraphe');
let btn =document.querySelector('#mode');

if (localStorage.getItem('theme')){
    if (localStorage.getItem('theme')=='sombre'){
        modeSombre();
    }
}
function modeSombre() {
    document.body.classList.add('dark');
    btn.textContent="Theme clair";
    localStorage.setItem('theme','sombre');
}
btn.addEventListener('click',()=>{
    if (document.body.classList.contains('dark')){
        document.body.className = '';
        btn.textContent="Theme sombre";
        localStorage.setItem('theme','clair');
    }else {
        modeSombre();
    }

})
console.log(localStorage.getItem('theme'));