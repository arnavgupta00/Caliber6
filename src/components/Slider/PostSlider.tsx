"use client";
import React from 'react';
import Slider from "react-slick";
import Div from '../Div'; // Ensure this path is correct
import Post from '../Post'; // Ensure this path is correct

interface PostData {
  url: string;
  src: string;
  alt: string;
  date: string;
  title: string;
}

export default function PostSlider({postDataProp}: {postDataProp: any}) {
  const postData: any = postDataProp;

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };

  return (
    <Slider {...settings} className='cs-gap-24'>
      {postData.map((item:any, index:any) => (
        <Div key={index}>
          <Post 
            url={item.url}
            src={item.src}
            alt={item.alt}
            date={item.date}
            title={item.title}
          />
        </Div>
      ))}
    </Slider>
  );
}
