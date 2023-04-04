import { Box } from "@mui/system";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import image1 from "../../../assets/images/uploaded-dummy-1.jpg";
import image2 from "../../../assets/images/uploaded-dummy-2.jpg";
import image3 from "../../../assets/images/uploaded-dummy-3.jpg";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

export default function ImageCarousel() {
  return (
    <Box sx={{ mt: 5 }}>
      <Carousel
        swipeable={true}
        draggable={false}
        showDots={true}
        responsive={responsive}
        ssr={true}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="all 1s"
        transitionDuration={1000}
        containerClass="carousel-container"
        // removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        <Box
          sx={{ width: 420, height: 300 }}
          component="img"
          alt="Carpenter"
          src={image1}
        ></Box>
        <Box
          sx={{ width: 420, height: 300 }}
          component="img"
          alt="Plumber"
          src={image2}
        ></Box>
        <Box
          sx={{ width: 420, height: 300 }}
          component="img"
          alt="Construction Worker"
          src={image3}
        ></Box>

        <Box
          sx={{ width: 420, height: 300 }}
          component="img"
          alt="Construction Worker"
          src={image3}
        ></Box>
        <Box
          sx={{ width: 420, height: 300 }}
          component="img"
          alt="Plumber"
          src={image2}
        ></Box>
        <Box
          sx={{ width: 420, height: 300 }}
          component="img"
          alt="Carpenter"
          src={image1}
        ></Box>

        <Box
          sx={{ width: 420, height: 300 }}
          component="img"
          alt="Carpenter"
          src={image1}
        ></Box>
        <Box
          sx={{ width: 420, height: 300 }}
          component="img"
          alt="Plumber"
          src={image2}
        ></Box>
        <Box
          sx={{ width: 420, height: 300 }}
          component="img"
          alt="Construction Worker"
          src={image3}
        ></Box>
      </Carousel>
    </Box>
  );
}
