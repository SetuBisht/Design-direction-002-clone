let leftComponent = document.querySelector(".section_1");
let rightComponent = document.querySelector(".section_2");
let menuBtn = document.querySelector(".menu-btn-5");
let timeoutIds = [];
let menuOpen = false;
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
      if (orangeF.classList.contains("bottleOut")) {
        removeEveryClass();
        // orangeB.classList.add("bottleOut");
        // let timer1 = setTimeout(() => {
        //   console.log("dasdasdasd");
        //   orangeF.classList.add("bottleIn");
        // }, 700);
        // timeoutIds.push(timer1);
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
menuBtn.addEventListener("click", (e) => {
  menuBtnFunction(e);
});
function menuBtnFunction(e) {
  menuBtn.classList.toggle("active");
  if (menuOpen === false) {
    animateComponents(-100, 100, false);
    menuOpen = true;
    return;
  } else {
    animateComponents(0, 0, true);
    menuOpen = false;
    return;
  }
}
function animateComponents(leftOffset, rightOffset, reverse) {
  let start = null;
  const duration = 500; // milliseconds

  // Extract the original transform values
  const originalTransformLeft = leftComponent.style.transform;
  const originalTransformRight = rightComponent.style.transform;

  function step(timestamp) {
    if (!start) start = timestamp;
    const progress = timestamp - start;
    const percent = Math.min(progress / duration, 1);
    const reversedPercent = reverse == true ? 1 - percent : percent; // Reverse percent for the return animation

    // Extract the existing Y-axis translation value from the original transform
    const leftYOffsetMatch = originalTransformLeft.match(
      /translate3d\(\s*[^,]+,\s*([^,]+),\s*[^,]+\)/
    );
    const leftYOffset = leftYOffsetMatch ? parseFloat(leftYOffsetMatch[1]) : 0;

    const rightYOffsetMatch = originalTransformRight.match(
      /translate3d\(\s*[^,]+,\s*([^,]+),\s*[^,]+\)/
    );
    const rightYOffset = rightYOffsetMatch
      ? parseFloat(rightYOffsetMatch[1])
      : 0;
    let leftPosition;
    let rightPosition;
    if (reverse === false) {
      leftPosition = leftOffset * reversedPercent;
      rightPosition = rightOffset * reversedPercent;
    } else {
      leftPosition = leftOffset + (0 - 100) * reversedPercent;
      rightPosition = rightOffset + (0 - -100) * reversedPercent;
    }

    // Update the transform style using translate3D for 3D translation
    leftComponent.style.transform = `translate3D(${leftPosition}%, ${leftYOffset}vh, 0)`;
    rightComponent.style.transform = `translate3D(${rightPosition}%, ${rightYOffset}vh, 0)`;

    // Continue the animation until duration is reached
    if (progress < duration) {
      window.requestAnimationFrame(step);
    }
  }

  window.requestAnimationFrame(step);
}

function initialize() {
  leftComponent.style.transform = `translate3D(0%,0vh,0)`;
  rightComponent.style.transform = `translate3D(0%,-200vh,0)`;
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

initialize(); // Call initialize to set initial positions

let isScrolling = false;

function handleScroll() {
  if (!isScrolling) {
    isScrolling = true;
    requestAnimationFrame(function () {
      updateComponentsPosition();
      isScrolling = false;
    });
  }
}

function updateComponentsPosition() {
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
  rightComponent.style.transform = `translate3D(0%,${translateYRight}vh,0)`;
  leftComponent.style.transform = `translate3D(0%,${translateYLeft}vh,0)`;
}

// Listen for scroll events
window.addEventListener("scroll", handleScroll);
