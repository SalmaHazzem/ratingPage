let para =document.querySelector('.colored');
if(window.localStorage.getItem('rate')){
para.innerHTML=`you selected ${window.localStorage.getItem('rate')} out of 5`;
}