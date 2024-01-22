const animation_elements = document.querySelectorAll('.data-anime-left, .data-anime-right');


var docWidth = document.documentElement.offsetWidth;
[].forEach.call(
  document.querySelectorAll('*'),
  function(el) {
    if (el.offsetWidth > docWidth) {
      console.log(el);
    }
  }
);

const observer = new IntersectionObserver((animations) => {
    animations.forEach((animation) => {
        if (animation.isIntersecting){
            animation.target.classList.add('animate');

        } else{
            animation.target.classList.remove('animate');
        }
    })
}, {
    rootMargin: "-100px 0px 0px 0px"
});

for (let i = 0; i < animation_elements.length; i++){
    const el = animation_elements[i];
    observer.observe(el);
}