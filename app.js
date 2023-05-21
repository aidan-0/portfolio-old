// hover over project cards - backlight
document.getElementById("projects-container").onmousemove = e => {
    for(const card of document.getElementsByClassName("project-card")) {
      const rect = card.getBoundingClientRect(),
            x = e.clientX - rect.left,
            y = e.clientY - rect.top;
  
      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);
    };
  }

//   Programming language svg load-ins 
const the_animation = document.querySelectorAll(".cs-logo, .html-logo, .css-logo, .js-logo, .react-logo, .python-logo, .sql-logo");

const observer = new IntersectionObserver((entries) => {
  var delayInMilliseconds = 100;

  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('scroll-logo');
      }, delayInMilliseconds * index);
    }
  });
});
  //
    for (let i = 0; i < the_animation.length; i++) {
     const elements = the_animation[i];
  
      observer.observe(elements);
    } 
  