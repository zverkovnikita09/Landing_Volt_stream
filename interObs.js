const stepsObserver = new IntersectionObserver(([elem], observer)=>{
        if(elem.isIntersecting){
            switch_steps();
            observer.unobserve(elem.target);
        }
    },
{});

const container = document.querySelector('.steps__items');
const steps = document.querySelectorAll('.stepItem');
let i = 0;
const switch_steps =()=>{
    const interval = setInterval(()=>{
        if(i==steps.length-1){
            clearInterval(interval);
        }
        else{
            steps[i].classList.remove('active');
            steps[i+1].classList.add('visible');
            steps[i+1].classList.add('active');
            i++;
        }
    },600);
}

stepsObserver.observe(container);