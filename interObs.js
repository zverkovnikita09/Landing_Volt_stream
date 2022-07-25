const stepsObserver = new IntersectionObserver(([elem], observer)=>{
        if(elem.isIntersecting){
            switch_steps();
            observer.unobserve(elem.target);
        }
    },
{});

const container = document.querySelector('.steps__items');
const steps = Array.from(document.querySelectorAll('.stepItem'));
let i = 0;
const switch_steps =()=>{
        setInterval(()=>{
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
    },3000);
}

stepsObserver.observe(container);