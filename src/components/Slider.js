import first_img from "./images/first_slider_img.webp";
import second_img from "./images/second_slider_img.webp";
import third_img from "./images/third_slider_img.jpg";
function Slider() {
  return (
    <>
      <div id="carouselExample" class="carousel slide">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={first_img} class="d-block w-100" height={525} alt="..." />
          </div>
          <div class="carousel-item">
            <img
              src={second_img}
              class="d-block w-100"
              height={525}
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img src={third_img} class="d-block w-100" height={525} alt="..." />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}
export default Slider;
