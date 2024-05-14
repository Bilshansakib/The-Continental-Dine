// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import swiper1 from "../assets/Image/swiper1.jpg";
import swiper2 from "../assets/Image/swiper2.jpg";
import swiper3 from "../assets/Image/swiper3.jpg";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Parallax, Pagination, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

const Carousal = () => {
  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        speed={600}
        parallax={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Parallax, Pagination, Navigation]}
        className="mySwiper h-[600px]"
      >
        <div
          slot="container-start"
          className="parallax-bg "
          style={{
            "background-image": "url(/src/assets/Image/swiper1.jpg)",
          }}
          data-swiper-parallax="-23%"
        ></div>
        {/* <img
          slot="container-start"
          className="parallax-bg"
          src={swiper1}
          data-swiper-parallax="-23%"
          alt=""
        /> */}
        <SwiperSlide className="space-y-4">
          <div className="text-6xl" data-swiper-parallax="-300">
            The Continental Food
          </div>

          <div className="subtitle" data-swiper-parallax="-200">
            Elevate Your Dining Experience with International Elegance
          </div>
          <div className="subtitle" data-swiper-parallax="-200">
            International Cuisine, Local Charm
          </div>
          <div className="" data-swiper-parallax="-200">
            • United State Of America
          </div>
          <div className="text" data-swiper-parallax="-100">
            <p
              title="We are a well-known restaurant brand that is dedicated to
              providing our customers with exceptional food experiences. We not
              only offer delicious meals prepared by top chefs, but we also
              combine a rich cultural and sensory experience. Our goal is to
              surpass customers' expectations with a dining experience that goes
              beyond just food"
            >
              We are a well-known restaurant brand that is dedicated to
              providing our customers with exceptional food experiences. We not
              only offer delicious meals prepared by top chefs, but we also
              combine a rich cultural and sensory experience. Our goal is to
              surpass customers' expectations with a dining experience that goes
              beyond just food. From beautifully designed interiors to carefully
              chosen menus that showcase the best of local and international
              flavors, we strive to offer more than just a meal. We aim to
              create lasting memories for our guests by providing excellent
              service in a sophisticated and lively setting.
            </p>
          </div>
          <div className="animate-bounce">
            <Link to="all-foods">
              <Button data-swiper-parallax="-50" variant="contained">
                Explore More..
              </Button>
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide className="space-y-4">
          <div className="title" data-swiper-parallax="-300">
            Best Foods Around the World
          </div>
          <div className="subtitle" data-swiper-parallax="-200">
            <li>• Italy</li>
            <li>• Greece</li>
            <li>• Bangladesh</li>
            <li>• chicken_tikka_masala</li>
            <li>• United Kingdom</li>
            <li>• Spanish</li>
            <li>• Indian</li>
            <li>• Mexican</li>
            <li>• etc...</li>
          </div>
          <div className="text" data-swiper-parallax="-100">
            <p
              title="We are a well-known restaurant brand that is dedicated to
              providing our customers with exceptional food experiences. We not
              only offer delicious meals prepared by top chefs, but we also
              combine a rich cultural and sensory experience. Our goal is to
              surpass customers' expectations with a dining experience that goes
              beyond just food"
            >
              We are a well-known restaurant brand that is dedicated to
              providing our customers with exceptional food experiences. We not
              only offer delicious meals prepared by top chefs...
            </p>
          </div>
          <div className="animate-bounce">
            <Link to="all-foods ">
              <Button data-swiper-parallax="-50" variant="outlined">
                Explore More..
              </Button>
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide className="space-y-4">
          <div className=" text-6xl" data-swiper-parallax="-300">
            Best Food Items
          </div>
          <div className=" text-3xl" data-swiper-parallax="-200">
            <ul className="space-y-5 ">
              <li>• Pasta</li>
              <li>• sushi_platter</li>
              <li>• chicken_tikka_masala</li>
              <li>• paella_valenciana</li>
              <li>• pho_soup</li>
              <li>• beef_wellington</li>
              <li>• mezze_platter</li>
              <li>• etc...</li>
            </ul>
          </div>
          <div className="animate-bounce">
            <Link to="all-foods">
              <Button data-swiper-parallax="-50" variant="contained">
                Explore More..
              </Button>
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide className="space-y-4">
          <div className="title" data-swiper-parallax="-300">
            Master Chef's
          </div>
          <div className="subtitle" data-swiper-parallax="-200">
            Best Chef's In The World
          </div>
          <img className="h-[420]" src={swiper2} alt="" />
          <div className="animate-bounce">
            <Link to="all-foods">
              <Button data-swiper-parallax="-50" variant="outlined">
                Explore More..
              </Button>
            </Link>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Carousal;
