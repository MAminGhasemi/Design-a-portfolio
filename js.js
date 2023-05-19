
let $=document;
let emailBtn=document.getElementsByClassName('newspaper__email-btn');
function changecolorbtn(){
    
    emailBtn[0].style.backgroundColor = 'red';
}
let emailInput=$.querySelector('input.newspaper__email-input')
emailInput.addEventListener('blur',inpblured,this)
// function inpfocused(elem){
//     emailInput.style.backgroundColor="cyan";
  
// }
function inpblured(elem){
    console.log("fs")
    elem.style.backgroundColor="red";

}