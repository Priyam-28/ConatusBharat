import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { FreeMode, Pagination } from "swiper/modules";
import { RxArrowTopRight } from "react-icons/rx";

// Sample features data
const features = [
  {
    index: 1,
    title: 'Adaptive Learning',
    description: 'Our adaptive learning platform is designed to understand and evolve with your child\'s unique needs and learning style, providing personalised support and maximizing their potential.',
    img: 'path-to-image1.jpg',
    
  },
  {
    index: 2,
    title: 'Personalised Reports',
    description: 'We provide personalised reports that detail a child\'s academic progress, holistic and skill-based growth trends, empowering parents and educators with insights to support the learning journey.',
    img: 'Feature2.png',
    
  },
  {
    index: 3,
    title: 'Strength Finder',
    description: 'We provide personalised reports that detail a child\'s academic progress, holistic and skill-based growth trends, empowering parents and educators with insights to support the learning journey.',
    img: 'Feature3.png',
    
  },
  {
    index: 4,
    title: 'Personalised Reports',
    description: 'We provide personalised reports that detail a child\'s academic progress, holistic and skill-based growth trends, empowering parents and educators with insights to support the learning journey.',
    img: 'path-to-image4.jpg',
    
  },
];

const Features = () => {
  return (
    <div className="flex items-center justify-center flex-col h-[900px] bg-[#6c34af]">
      <Swiper
        breakpoints={{
          340: {
            slidesPerView: 1,
            spaceBetween: 15,
          },
          700: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
        }}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="max-w-[90%] lg:max-w-[80%]"
      >
        {features.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col gap-6 mb-20 group relative shadow-lg text-white rounded-xl px-6 py-8 h-[400px] w-[215px] lg:h-[400px] lg:w-[350px] overflow-hidden cursor-pointer bg-[#000000]">
              <div className="relative flex flex-col gap-3">
                <h1 className="text-xl lg:text-2xl">{item.title}</h1>
                <p className="text-sm">{item.description}</p>
                <img src={item.img} alt={item.title} className="mt-4 rounded-lg" />
              </div>
              <RxArrowTopRight className="absolute bottom-5 left-5 w-[35px] h-[35px] text-white group-hover:text-blue-500 group-hover:rotate-45 duration-100" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Features;
