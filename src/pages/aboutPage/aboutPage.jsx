import React, { useCallback, useRef } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import about1 from '../../assets/photos/about-us1.png';
import about2 from '../../assets/photos/about-us2.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper';
import Container from '../../components/atoms/container';
import Section, { GallerySlider, ImagePart, Text, TextPart, Title } from './aboutUs.styled';
import { gallerySliderData } from './mock';

const AboutPage = () => {
  const sliderRef = useRef(null);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  return (
    <Container>
      <Section>
        <TextPart>
          <Title>Your vision, our means, excellent combination towards changing the world.</Title>
          <Text>
            With the help of our talented developers and designers you will be able to witness even
            the craziest of your ideas come to life.
          </Text>
          <Text>
            Iguan Systems is a leading IT company that offers mobile, web and software development
            services to people from all over the world.
          </Text>
          <Text>
            Our story begins 11 years ago in Amsterdam when Iguan Systems was just an idea. Fast
            forward to today, we have relocated our head office to America and expanding our scope
            have managed to become one of the successful IT companies in the Armenian market,
            Western Europe and America. Through the 11 years of our existence we have managed to
            establish long-lasting ties with our clients from different parts of the world by
            providing them with the best solutions for their projects and turning their ideas into
            successful reality.
          </Text>
        </TextPart>
        <ImagePart>
          <img src={about1} alt="any" />
        </ImagePart>
      </Section>
      <Section reversed>
        <TextPart>
          <Text>
            One of the main principles of our company is building a trustworthy relationship with
            our customers by doing everything in and beyond our powers to ensure that no client
            leaves us unsatisfied, disappointed or angry. We use the most advanced software
            platforms and development technologies and always stay up to date.
          </Text>
          <Text>
            Our talented developers and designers offer a wide range of skill sets that guarantees
            an excellent turnaround of each project they take on. We have gathered specialists that
            understand the importance of both teamwork and individual approach. Our team consists of
            enthusiastic individuals in love with their craft, striving for a better future and
            pushing their limits.
          </Text>
          <Text>
            Our strong marketing team serves as a solid core for the company, ensuring that our
            developers get an opportunity to be part of projects that will not only surface their
            full potential and put their skills on display but also provide an amicable atmosphere
            for a successful, profitable and fun experience.
          </Text>
          <Text>
            Our staff department keeps the healthy relationships within the company intact by
            actively working towards creating a friendly atmosphere for teamwork. We believe that
            healthy relationships between employees is the key to success, thus we are inclined to
            onboarding people that have the x factor, who are not afraid to try different things,
            who don’t get scared or discouraged by failure and who are willing to walk with us.
          </Text>
        </TextPart>
        <ImagePart>
          <img src={about2} alt="any" />
        </ImagePart>
      </Section>
      <GallerySlider>
        <div className="prev" onClick={handlePrev} />
        <Swiper
          ref={sliderRef}
          slidesPerView={1}
          spaceBetween={16}
          loop={true}
          loopFillGroupWithBlank={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation={{
            prevEl: '.prev',
            nextEl: '.next',
          }}
          modules={[Autoplay, Navigation]}
          className="gallerySwiper"
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            992: {
              slidesPerView: 3,
            },
            1301: {
              slidesPerView: 4,
            },
            1441: {
              slidesPerView: 5,
            },
          }}
        >
          {gallerySliderData.map(slideItem => (
            <SwiperSlide key={slideItem.id}>
              <img src={slideItem.imageUrl} alt="any" />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="next" onClick={handleNext} />
      </GallerySlider>
    </Container>
  );
};

export default AboutPage;
