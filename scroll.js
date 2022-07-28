const sections = document.querySelectorAll('section');

const appearance = new IntersectionObserver((entries, observer)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    })
},{
    threshold: 0.25
})

sections.forEach((sect)=>appearance.observe(sect))