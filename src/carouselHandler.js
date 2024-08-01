import Gengar from "./resources/Gengar-PNG-File.png";
import Haunter from "./resources/haunter.jpeg";
import Gastly from "./resources/gastly.png";

const carousel = function carouselHandler() {
  const carouselContent = document.querySelector(".carousel-content");
  const carouselImage1 = new Image();
  const carouselImage2 = new Image();
  const carouselImage3 = new Image();
  const images = [carouselImage1, carouselImage2, carouselImage3];

  carouselImage1.src = Gengar;
  carouselImage2.src = Haunter;
  carouselImage3.src = Gastly;
  carouselImage1.classList.add("gengar", "center", );
  carouselImage2.classList.add("haunter", "left-side", );
  carouselImage3.classList.add("gastly","right-side",);

  images.forEach((image) => {
    image.classList.add("image");
    carouselContent.appendChild(image);
  });

  const leftArrow = document.querySelector(".arrow.left");
  const rightArrow = document.querySelector(".arrow.right");

  leftArrow.addEventListener("click", () => {
    images.forEach((image) => {
      if (image.classList.contains("left-side")) {
        image.classList.replace("left-side", "center");
      } else if (image.classList.contains("center")) {
        image.classList.replace("center", "right-side");
      } else {
        image.classList.replace("right-side", "left-side");
      }
    });
    dotChecker();
  });

  rightArrow.addEventListener("click", () => {
    images.forEach((image) => {
      switch (true) {
        case image.classList.contains("left-side"):
          image.classList.replace("left-side", "right-side");
          break;
        case image.classList.contains("center"):
          image.classList.replace("center", "left-side");
          break;
        case image.classList.contains("right-side"):
          image.classList.replace("right-side", "center");
          break;
      }
    });
    dotChecker();
  });

  const dotChecker = function () {
    const dotContainerDots = Array.from(
      document.querySelectorAll(".dot-container .dot")
    );

    dotContainerDots.forEach((dot) => {
      dot.classList.remove("active");
    });

    images.forEach((image) => {
      if (image.classList.contains("center")) {
        const classNameToMatch = image.classList.item(0);
        dotContainerDots.forEach((dot) => {
          if (dot.classList.contains(classNameToMatch)) {
            dot.classList.add("active");
          }
        });
      }
    });
  };

  const dotContainer = document.querySelector(".dot-container");
  dotContainer.addEventListener("click", (event) => {
    if (event.target.classList.contains("dot")) {
      console.log(event.target)
      const imageToFocus = event.target.classList.item(1);
      switch (imageToFocus) {
        case "gengar":
            removeCarouselStyle();
            images[0].classList.add("center");
            images[1].classList.add("left-side");
            images[2].classList.add("right-side");
          break;
        case "haunter":
            removeCarouselStyle();
            images[0].classList.add("right-side");
            images[1].classList.add("center");
            images[2].classList.add("left-side");
          break;
        case "gastly":
            removeCarouselStyle();
            images[0].classList.add("left-side");
            images[1].classList.add("right-side");
            images[2].classList.add("center");
          break;
      }
      dotChecker();
    }
  });

  const removeCarouselStyle = function () {
    images.forEach((image)=>{
        image.classList.remove("left-side","right-side","center")
    })
  }
  dotChecker();
};

export default carousel;
