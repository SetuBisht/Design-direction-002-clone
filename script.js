let leftComponent = document.querySelector(".section_1");
let rightComponent = document.querySelector(".section_2");
function initialize() {
  leftComponent.style.transform = `translateY(0vh)`;
  rightComponent.style.transform = `translateY(-200vh)`;
  let spans = document.querySelectorAll(".text-ani span");
  spans.forEach((span, index) => {
    span.style.transitionDelay = `${index * 0.05}s`; // Increase delay by 0.1s for each span
  });

  let text = document.querySelector(".text-ani");
  let image_front = document.querySelectorAll(".image_front");
  image_front.forEach((ele) => {
    ele.classList.add("animate");
  });
  text.classList.add("animate");
}

function handleScroll() {
  // Calculate the scroll position
  let scrollPosition = window.scrollY || window.pageYOffset;

  // Calculate the maximum scrollable height
  let maxScrollHeight =
    document.documentElement.scrollHeight - window.innerHeight;

  // Calculate the percentage scrolled
  let percentageScrolled = scrollPosition / maxScrollHeight;

  // Ensure the percentage is within the range of 0 to 1
  percentageScrolled = Math.min(1, Math.max(0, percentageScrolled));

  // Map the percentage scrolled to the desired range for translation
  let translateYRight = -200 * (1 - percentageScrolled); // For rightComponent, reverse
  let translateYLeft = 200 * percentageScrolled; // For leftComponent

  // Update the transform style of both components
  rightComponent.style.transform = `translateY(${translateYRight}vh)`;
  leftComponent.style.transform = `translateY(${translateYLeft}vh)`;
}

initialize(); // Call initialize to set initial positions

// Add event listener for scroll event
window.addEventListener("scroll", handleScroll);

//  <a href="#" class="link-block w-inline-block">
//                      <h1 class="text-ani"><span style="opacity: 1; transform: matrix(1, 0, 0, 1, 0, 0);">A</span><span
//                            style="opacity: 1; transform: matrix(1, 0, 0, 1, 0, 0);"> </span><span
//                            style="opacity: 1; transform: matrix(1, 0, 0, 1, 0, 0);">g</span><span
//                            style="opacity: 1; transform: matrix(1, 0, 0, 1, 0, 0);">e</span><span
//                            style="opacity: 1; transform: matrix(1, 0, 0, 1, 0, 0);">n</span><span
//                            style="opacity: 1; transform: matrix(1, 0, 0, 1, 0, 0);">t</span><span
//                            style="opacity: 1; transform: matrix(1, 0, 0, 1, 0, 0);">l</span><span
//                            style="opacity: 1; transform: matrix(1, 0, 0, 1, 0, 0);">e</span><span
//                            style="opacity: 1; transform: matrix(1, 0, 0, 1, 0, 0);"> </span><span
//                            style="opacity: 1; transform: matrix(1, 0, 0, 1, 0, 0);">b</span><span
//                            style="opacity: 1; transform: matrix(1, 0, 0, 1, 0, 0);">l</span><span
//                            style="opacity: 1; transform: matrix(1, 0, 0, 1, 0, 0);">e</span><span
//                            style="opacity: 1; transform: matrix(1, 0, 0, 1, 0, 0);">n</span><span
//                            style="opacity: 1; transform: matrix(1, 0, 0, 1, 0, 0);">d</span><span
//                            style="opacity: 1; transform: matrix(1, 0, 0, 1, 0, 0);"> </span><span
//                            style="opacity: 1; transform: matrix(1, 0, 0, 1, 0, 0);">o</span><span
//                            style="opacity: 1; transform: matrix(1, 0, 0, 1, 0, 0);">f</span><span
//                            style="opacity: 1; transform: matrix(1, 0, 0, 1, 0, 0);"> </span><br><span
//                            style="opacity: 1; transform: matrix(1, 0, 0, 1, 0, 0);">f</span><span
//                            style="opacity: 1; transform: matrix(1, 0, 0, 1, 0, 0);">r</span><span
//                            style="opacity: 1; transform: matrix(1, 0, 0, 1, 0, 0);">e</span><span
//                            style="opacity: 1; transform: matrix(1, 0, 0, 1, 0, 0);">s</span><span
//                            style="opacity: 1; transform: matrix(1, 0, 0, 1, 0, 0);">h</span><span
//                            style="opacity: 1; transform: matrix(1, 0, 0, 1, 0, 0);"> </span><span
//                            style="opacity: 1; transform: matrix(1, 0, 0, 1, 0, 0);">o</span><span
//                            style="opacity: 1; transform: matrix(1, 0, 0, 1, 0, 0);">r</span><span
//                            style="opacity: 1; transform: matrix(1, 0, 0, 1, 0, 0);">a</span><span
//                            style="opacity: 1; transform: matrix(1, 0, 0, 1, 0, 0);">n</span><span
//                            style="opacity: 1; transform: matrix(1, 0, 0, 1, 0, 0);">g</span><span
//                            style="opacity: 1; transform: matrix(1, 0, 0, 1, 0, 0);">e</span><span
//                            style="opacity: 1; transform: matrix(1, 0, 0, 1, 0, 0);"> </span><span
//                            style="opacity: 1; transform: matrix(1, 0, 0, 1, 0, 0);">a</span><span
//                            style="opacity: 1; transform: matrix(1, 0, 0, 1, 0, 0);"> </span><span
//                            style="opacity: 1; transform: matrix(1, 0, 0, 1, 0, 0);">w</span><span
//                            style="opacity: 1; transform: matrix(1, 0, 0, 1, 0, 0);">h</span><span
//                            style="opacity: 1; transform: matrix(1, 0, 0, 1, 0, 0);">o</span><span
//                            style="opacity: 1; transform: matrix(1, 0, 0, 1, 0, 0);">l</span><span
//                            style="opacity: 1; transform: matrix(1, 0, 0, 1, 0, 0);">e</span><span
//                            style="opacity: 1; transform: matrix(1, 0, 0, 1, 0, 0);"> </span><span
//                            style="opacity: 1; transform: matrix(1, 0, 0, 1, 0, 0);">m</span><span
//                            style="opacity: 1; transform: matrix(1, 0, 0, 1, 0, 0);">a</span><span
//                            style="opacity: 1; transform: matrix(1, 0, 0, 1, 0, 0);">l</span><span
//                            style="opacity: 1; transform: matrix(1, 0, 0, 1, 0, 0);">t</span><span
//                            style="opacity: 1; transform: matrix(1, 0, 0, 1, 0, 0);"> </span><span
//                            style="opacity: 1; transform: matrix(1, 0, 0, 1, 0, 0);">c</span><span
//                            style="opacity: 1; transform: matrix(1, 0, 0, 1, 0, 0);">r</span><span
//                            style="opacity: 1; transform: matrix(1, 0, 0, 1, 0, 0);">i</span><span
//                            style="opacity: 1; transform: matrix(1, 0, 0, 1, 0, 0);">s</span><span
//                            style="opacity: 1; transform: matrix(1, 0, 0, 1, 0, 0);">p</span><span
//                            style="opacity: 1; transform: matrix(1, 0, 0, 1, 0, 0);"> </span><span
//                            style="opacity: 1; transform: matrix(1, 0, 0, 1, 0, 0);">l</span><span
//                            style="opacity: 1; transform: matrix(1, 0, 0, 1, 0, 0);">a</span><span
//                            style="opacity: 1; transform: matrix(1, 0, 0, 1, 0, 0);">g</span><span
//                            style="opacity: 1; transform: matrix(1, 0, 0, 1, 0, 0);">e</span><span
//                            style="opacity: 1; transform: matrix(1, 0, 0, 1, 0, 0);">r</span></h1>
//                            <img
//                         src="./assets/arroew.png"
//                         width="20"
//                          class="arrow">
//                   </a>
