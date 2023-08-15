let numbers =document.querySelectorAll(".num");

numbers.forEach((e) => {
    e.addEventListener('click',function(){
        numbers.forEach(j=>{
            if(j.classList.contains('active')){
                j.classList.remove('active');
                j.style.backgroundColor='#4b4949';
            }
        })          
        e.style.backgroundColor='orange';
        e.classList.add('active');
       window.localStorage.setItem('rate',e.innerHTML);
    })
    
})

 

//https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI