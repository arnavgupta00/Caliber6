"use client";

import React, { useState } from "react";
import Slider from "react-slick";
import { Icon } from "@iconify/react";
import Testimonial from "../Testimonial";
import Div from "../Div";
import Spacing from "../Spacing";
import { urlFor } from "@/utils/configSanity";

interface TestimonialData {
  reviewThumb: any;
  reviewText: string;
  reviewersName: string;
  reviewersDesignation: string;
  ratings: string;
}

const TestimonialSlider: React.FC<{ reviewData: any }> = (params) => {
  const [nav1, setNav1] = useState<Slider | null>(null);
  const [nav2, setNav2] = useState<Slider | null>(null);

  const testimonialData: TestimonialData[] = params.reviewData;

  const SlickArrowLeft: React.FC<{
    currentSlide?: number;
    slideCount?: number;
  }> = ({ currentSlide, slideCount, ...props }) => (
    <div
      {...props}
      className={
        "slick-prev slick-arrow" + (currentSlide === 0 ? " slick-disabled" : "")
      }
      aria-hidden="true"
      aria-disabled={currentSlide === 0 ? true : false}
    >
      <Icon icon="bi:arrow-left" />
    </div>
  );

  const SlickArrowRight: React.FC<{
    currentSlide?: number;
    slideCount: number;
  }> = ({ currentSlide, slideCount, ...props }) => (
    <div
      {...props}
      className={
        "slick-next slick-arrow" +
        (currentSlide === slideCount - 1 ? " slick-disabled" : "")
      }
      aria-hidden="true"
      aria-disabled={currentSlide === slideCount - 1 ? true : false}
    >
      <Icon icon="bi:arrow-right" />
    </div>
  );

  const settings = {
    asNavFor: nav1!,
    ref: (slider2: Slider) => setNav2(slider2),
    slidesToShow: 3,
    swipeToSlide: true,
    focusOnSelect: true,
    centerMode: true,
    centerPadding: "0px",
    arrows: false,
    beforeChange: (current: number, next: number) => {
      const sliderItems = document.querySelectorAll(".slider-nav_item");
      sliderItems.forEach((item, index) => {
        if (index === next) {
          item.classList.add("active");
        } else {
          item.classList.remove("active");
        }
      });
    },
  };

  return (
    <>
      <Div className="cs-gradient_bg_1 cs-shape_wrap_3 cs-parallax w-full">
        <Spacing lg="130" md="80" />
        <Div className="cs-shape_3 cs-to_up">
          <img src="/images/shape_1.svg" alt="Shape" />
        </Div>
        <Div className="container p-4 lg:p-0  lg:pl-24 lg:pr-24">
          <Div className="cs-testimonial_slider">
            <Div className="cs-testimonial_slider_left">
              <Slider {...settings}>
                {testimonialData.map((item, index) => {
                  const MainImageUrl =
                    (item.reviewThumb.asset &&
                      urlFor(item.reviewThumb.asset)
                        .width(251)
                        .height(251)
                        .url()) ||
                    null;

                  if (!MainImageUrl) return null;
                  return (
                    <Div className="slider-nav_item" key={index}>
                      <Div className="cs-rotate_img">
                        <Div className="cs-rotate_img_in">
                          <img src={MainImageUrl} alt="Thumb" />
                        </Div>
                      </Div>
                    </Div>
                  );
                })}
              </Slider>
            </Div>
            <Div className="cs-testimonial_slider_right">
              <Slider
                asNavFor={nav2!}
                ref={(slider1) => setNav1(slider1)}
                prevArrow={<SlickArrowLeft slideCount={testimonialData.length} />}
                nextArrow={
                  <SlickArrowRight slideCount={testimonialData.length} />
                }
                className="cs-arrow_style1"
              >
                {testimonialData.map((item, index) => (
                  <Div key={index}>
                    <Testimonial
                      testimonialText={item.reviewText}
                      avatarName={item.reviewersName}
                      avatarDesignation={item.reviewersDesignation}
                      ratings={item.ratings}
                    />
                  </Div>
                ))}
              </Slider>
            </Div>
          </Div>
        </Div>
        <Spacing lg="130" md="80" />
      </Div>

      <style jsx>{`
        .slider-nav_item {
          transition: transform 0.3s ease;
        }
        .slider-nav_item.active {
          transform: scale(1.2);
          border: 2px solid #fff; /* Optional: Add border to highlight */
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3); /* Optional: Add shadow */
        }
      `}</style>
    </>
  );
};

export default TestimonialSlider;
