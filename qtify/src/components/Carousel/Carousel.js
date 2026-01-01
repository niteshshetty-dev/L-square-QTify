import { Swiper } from "swiper/react";
import "swiper/css";
import { useRef, useState } from "react";

import LeftNav from "../LeftNav/LeftNav";
import RightNav from "../RightNav/RightNav";

export default function Carousel({ children }) {
  const swiperRef = useRef(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  return (
    <div style={{ position: "relative", overflow: "hidden" }}>
      {!isBeginning && (
        <LeftNav onClick={() => swiperRef.current?.slidePrev()} />
      )}
      {!isEnd && <RightNav onClick={() => swiperRef.current?.slideNext()} />}
      <Swiper
        key={children.length}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
          setIsBeginning(swiper.isBeginning);
          setIsEnd(swiper.isEnd);
        }}
        onSlideChange={(swiper) => {
          setIsBeginning(swiper.isBeginning);
          setIsEnd(swiper.isEnd);
        }}
        slidesPerView="auto"
        spaceBetween={24}
        style={{ padding: "0 48px" }}
      >
        {children}
      </Swiper>
    </div>
  );
}
