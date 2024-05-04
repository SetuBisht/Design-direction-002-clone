let leftComponent = document.querySelector(".section_1");
let rightComponent = document.querySelector(".section_2");
let timeoutIds = [];

function initializeHover() {
  let orangeF = document.querySelector(".orangeF");
  let orangeB = document.querySelector(".orangeB");

  function removeEveryClass() {
    orangeF.classList.remove("bottleOut", "bottleIn");
    orangeB.classList.remove("bottleOut", "bottleIn");
  }

  document.addEventListener("mouseover", function (event) {
    let hoveredElements = document.elementsFromPoint(
      event.clientX,
      event.clientY
    );

    // Check for section_1 and background1
    let section1Hovered = hoveredElements.some((element) =>
      element.classList.contains("section_1")
    );
    let background1Hovered = hoveredElements.some((element) =>
      element.classList.contains("background1")
    );

    // Check for image1
    let background2Hovered = hoveredElements.some((element) =>
      element.classList.contains("image1")
    );

    if (section1Hovered && background1Hovered) {
      clearAllTimeouts();

      if (orangeF.classList.contains("bottleOut")) {
        removeEveryClass();
        orangeB.classList.add("bottleOut");
        let timer1 = setTimeout(() => {
          orangeF.classList.add("bottleIn");
        }, 700);
        timeoutIds.push(timer1);
      }
    }

    if (background2Hovered) {
      clearAllTimeouts();
      removeEveryClass();
      orangeF.classList.add("bottleOut");
      let timer = setTimeout(() => {
        orangeB.classList.add("bottleIn");
      }, 700);
      timeoutIds.push(timer);
    }
  });
}

function clearAllTimeouts() {
  timeoutIds.forEach((id) => clearTimeout(id));
  timeoutIds = [];
}

initializeHover();
function menuBtnFunction(menuBtn) {
  menuBtn.classList.toggle("active");
}
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
  setTimeout(() => {
    initializeHover();
  }, 800);
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
