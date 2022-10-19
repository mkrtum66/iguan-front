import React from 'react';
import { SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import Container from '../../atoms/container';
import Title, { Slider, SliderWrapper } from './homePageSlider.styled';
import { sliderItems } from '../../molecules/homePageSlideItem/mock';
import HomePageSlideItem from '../../molecules/homePageSlideItem';

const HomePageSlider = () => {
  return (
    <SliderWrapper>
      <Container>
        <Title>Your opinion of us</Title>
        <Slider
          className="mySwiper"
          slidesPerView={1}
          spaceBetween={20}
          grabCursor={true}
          pagination={{}}
          modules={[Pagination]}
          breakpoints={{
            681: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            992: {
              slidesPerView: 4,
            },
          }}
        >
          {sliderItems.map(item => {
            return (
              <SwiperSlide key={item.id}>
                <HomePageSlideItem data={item} />
              </SwiperSlide>
            );
          })}
        </Slider>
      </Container>
    </SliderWrapper>
  );
};

export default HomePageSlider;
