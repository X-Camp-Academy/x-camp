"use client";
import React, { useState } from "react";
import { Space, Image, Popover } from "antd";

const CopyRightIcons: React.FC = () => {
  const icons = [
    {
      src: "/image/home/youtube.png",
      hoverSrc: "/image/home/youtube-hover.png",
      link: "https://www.youtube.com/@xcampacademy",
    },
    {
      src: "/image/home/facebook.png",
      hoverSrc: "/image/home/facebook-hover.png",
      link: "https://www.facebook.com/XCampAcademy2017",
    },
    {
      src: "/image/home/linkedin.png",
      hoverSrc: "/image/home/linkedin-hover.png",
      link: "https://www.linkedin.com/company/x-camp-academy/",
    },
    {
      src: "/image/home/we-chat.png",
      hoverSrc: "/image/home/we-chat-hover.png",

    },
    {
      src: "/image/home/small-red-book.png",
      hoverSrc: "/image/home/small-red-book-hover.png",
    },
  ];

  const QRcodeImg = ["/image/qr-code/we-chat-qr.jpg", "/image/qr-code/small-red-book-qr.png"]

  const source = icons.map((icon) => icon.src);
  const [imageSrc, setImageSrc] = useState(source);
  const onMouseOver = (index: number) => {
    const newImageSrc = [...imageSrc];
    newImageSrc[index] = icons[index].hoverSrc;
    setImageSrc(newImageSrc);
  };
  const onMouseLeave = () => {
    const newImageSrc = [...source];
    setImageSrc(newImageSrc);
  };
  return (
    <Space>
      {icons.map((item, index) => {
        if (index <= 2) {
          return (
            <a href={item?.link} target="_blank" key={index}>
              <Image
                alt=""
                src={imageSrc[index]}
                preview={false}
                width={28}
                height={28}
                onMouseOver={() => onMouseOver(index)}
                onMouseLeave={onMouseLeave}
              />
            </a>
          )
        }
        else {
          return (
            <Popover content={<img src={QRcodeImg[index - 3]} alt="" style={{ width: '100px', height: '100px' }} />} key={index}>
              <Image
                alt=""
                src={imageSrc[index]}
                preview={false}
                width={28}
                height={28}
                onMouseOver={() => onMouseOver(index)}
                onMouseLeave={onMouseLeave}
              />
            </Popover>
          )
        }
      })}
    </Space>
  );
};

export default CopyRightIcons;
