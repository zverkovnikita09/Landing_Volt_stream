const header = document.querySelector('.header');
const defaultOffset = 80;
let prevScroll = 0;

const scrollPos = () => window.pageYOffset || document.documentElement.scrollTop;
const isHide = ()=> header.classList.contains('hide');

window.addEventListener('scroll', ()=>{
    if(window.innerWidth<=800){
        if(scrollPos()>defaultOffset){
            if(scrollPos() > prevScroll && !isHide()){
                header.classList.add('hide')
            }
            else if (scrollPos() < prevScroll && isHide()){
                header.classList.remove('hide')
            }
            prevScroll = scrollPos();
        }
    }
})