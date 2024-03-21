const section = document.querySelector('.wrapper:nth-child(2)');
const navigation = document.querySelector('.top-navigation');
// const toTopBtn = document.querySelector('.toTop');

const options = {
    root: null,
    threshold: 0.3,
    rootMargin: '0px',
}

const sectionWatch = new IntersectionObserver(callBackFunction, options);

sectionWatch.observe(section);

function callBackFunction(entries) {
    const [entry] = entries;
    if (entry.isIntersecting) {
        navigation.classList.remove('show');
        // toTopBtn.classList.remove('show');
    } else {
        navigation.classList.add('show');
        // toTopBtn.classList.add('show');
    }
    // console.log(entries);
}