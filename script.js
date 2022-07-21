const cert = document.querySelector('.certificate__slider');
const feed = document.querySelector('.feedback__slider');
const work = document.querySelector('.work__slider');
const prevArrow = document.querySelectorAll('.prevArrow');
const nextArrow = document.querySelectorAll('.nextArrow');

const Slide = (elem, offset) =>{
    elem.scrollBy(offset, 0);
}

for(let prev of prevArrow){
    switch(prev.id){
        case 'prevFeed': prev.onclick = ()=>{
            Slide(feed, -300);
        }
        break;

        case 'prevCertif': prev.onclick = ()=>{
            Slide(cert, -300);
        }
        break;

        case 'prevWork': prev.onclick = ()=>{
            Slide(work, -400);
        }
        break;
    }
}

for(let next of nextArrow){
    switch(next.id){
        case 'nextFeed': next.onclick = ()=>{
            Slide(feed, 300);
        }
        break;

        case 'nextCertif': next.onclick = ()=>{
            Slide(cert, 300);
        }
        break;

        case 'nextWork': next.onclick = ()=>{
            Slide(work, 400);
        }
        break;
    }
}


//switch_steps
const steps = Array.from(document.querySelectorAll('.stepItem'));
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