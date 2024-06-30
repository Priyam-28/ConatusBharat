import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import "swiper/css/autoplay"; // Import Swiper autoplay styles
import { FreeMode, Pagination, Autoplay } from "swiper/modules";
import { RxArrowTopRight } from "react-icons/rx";

// Sample features data
const features = [
  {
    index: 1,
    title: 'Adaptive Learning',
    description: 'Our adaptive learning platform is designed to understand and evolve with your child\'s unique needs and learning style, providing personalised support and maximizing their potential.',
    img: 'Feature1.png',
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
    title: '21st Century Skills',
    description: 'We are equipped with comprehensive 21st-century skills, empowering us to excel in innovation, problem-solving, critical thinking, creativity, and communication, preparing students to thrive in the modern world.',
    img: 'Feature4.png',
  },
  {
    index: 5,
    title: 'Social and Emotional Learning',
    description: 'We diligently monitor and assess each child\'s social and emotional learning progress, providing comprehensive analysis and personalised insights to identify and target specific areas for growth and development.',
    img: 'Feature5.png',
  },
  {
    index: 6,
    title: 'Seamless Collaboration',
    description: 'We offer comprehensive reports to parents and teachers, fostering collaboration and providing valuable insights to optimize each child\'s learning journey.',
    img: 'Feature6.png',
  },
  {
    index: 7,
    title: 'Gamified Learning',
    description: 'We offer badges and points to create a fun and engaging gamified learning experience, without competition. Students can use their rewards in our shop to redeem showcaseable items.',
    img: 'Feature7.png',
  },
  {
    index: 8,
    title: 'Resources',
    description: 'Interactive quizzes and engaging flashcards make learning fun and addictive. They spark curiosity, challenge learners, and reinforce knowledge, keeping them coming back for more.',
    img: 'Feature8.png',
  },
];

const Features = () => {
  return (
    <div className="flex items-center justify-center flex-col h-[900px] bg-[#304eb3]">
      <div className="left w-1/3  flex text-5xl font-bold ml-10">
        The <h1 className="text-[#6187FA] pl-5">Problem</h1>
      </div>
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
        loop={true}
        autoplay={{
          delay: 1,
          disableOnInteraction: false,
          
        }}
        speed={3000}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination, Autoplay]} 
        className="max-w-[90%] lg:max-w-[80%]"
      >
        {features.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col gap-6 mb-20 group  shadow-lg text-white rounded-xl px-6 py-8 h-[400px] w-[215px] lg:h-[400px] lg:w-[350px] overflow-hidden cursor-pointer bg-[#000000]">
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
