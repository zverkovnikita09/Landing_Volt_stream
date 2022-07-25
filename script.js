//sliders
const cert = document.querySelector('.certificate__slider');
const feed = document.querySelector('.feedback__slider');
const work = document.querySelector('.work__slider');
const prevArrow = document.querySelectorAll('.prevArrow');
const nextArrow = document.querySelectorAll('.nextArrow');
const Slide = (elem, offset) =>{
    elem.scrollBy(offset, 0);
}
let window_width = window.innerWidth;
window.onresize =()=> window_width = window.innerWidth;

for(let prev of prevArrow){
    switch(prev.id){
        case 'prevFeed': prev.onclick = ()=>{
            window_width>1280 ? Slide(feed, -300) : Slide(feed, -195);
        }
        break;

        case 'prevCertif': prev.onclick = ()=>{
            window_width>1280 ? Slide(cert, -300) : Slide(cert, -195);
        }
        break;

        case 'prevWork': prev.onclick = ()=>{
            window_width>1280 ? Slide(work, -400) : Slide(work, -195);
        }
        break;
    }
}

for(let next of nextArrow){
    switch(next.id){
        case 'nextFeed': next.onclick = ()=>{
            window_width>1280 ? Slide(feed, 300) : Slide(feed, 195);
        }
        break;

        case 'nextCertif': next.onclick = ()=>{
            window_width>1280 ? Slide(cert, 300) : Slide(cert, 195);
        }
        break;

        case 'nextWork': next.onclick = ()=>{
            window_width>1280 ? Slide(work, 400) : Slide(work, 195);
        }
        break;
    }
}
//modal
const modal = document.querySelector('.modal__overlay');
const mImage = document.querySelector('.modal__image');
const slides = document.querySelectorAll('.slide_list');
const body = document.querySelector('body');
modal.onclick = () =>{
    modal.style.display = 'none';
    body.style.overflow = 'auto';
}
mImage.onclick= e => e.stopPropagation();

for (let slide of slides){
    slide.addEventListener('click', e=>{
        if(e.target.src){
            modal.style.display = 'flex';
            mImage.src = e.target.src;
            body.style.overflow = 'hidden';
        }
    })
}

//accordion
document.querySelectorAll('.acc_item__trigger').forEach((elem)=>{
    elem.addEventListener('click', ()=>{
        const parent = elem.parentNode;

        if(parent.classList.contains('active')){
            parent.classList.remove('active');
        }
        else{
            document.querySelectorAll('.acc_item').forEach((item)=>{
                item.classList.remove('active');
            })
            parent.classList.add('active');
        }
    })
})

//burger
const burger = document.querySelector('.header__burger');
const menu = document.querySelector('.burger__menu');
let isOpen = false;
burger.onclick = ()=>{
    if(!isOpen){
        burger.classList.add('open');
        body.style.overflow = 'hidden';
        menu.classList.add('active');
    }
    else{
        burger.classList.remove('open')
        body.style.overflow = 'auto'
        menu.classList.remove('active');
    }
    isOpen = !isOpen;
}
document.querySelectorAll('.burger_link').forEach((link)=>{
    link.addEventListener('click', ()=>{
        burger.classList.remove('open')
        body.style.overflow = 'auto'
        menu.classList.remove('active');
    })
})