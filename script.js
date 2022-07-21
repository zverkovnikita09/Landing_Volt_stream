const list = document.querySelector('.certificate__slider');
const prevCertif = document.querySelector('#prevCertif');
const nextCertif = document.querySelector('#nextCertif');
const certifWrapper = document.querySelector('.certificate__list');

nextCertif.onclick =()=>{
    list.scrollBy(300, 0)
}
prevCertif.onclick = ()=>{
    list.scrollBy(-300, 0)
    console.log(list.scrollLeft)
}

//switch_steps
const steps = Array.from(document.querySelectorAll('.stepItem'));
console.log(steps)
let i = 0;
const switch_steps = ()=>{
    if(i==steps.length-1){
        steps[i].classList.remove('active');
        steps[0].classList.add('active');
        i=0;
    }
    else{
        steps[i].classList.remove('active');
        steps[i+1].classList.add('active');
        i++;
    }
}
setInterval(switch_steps, 3000);