// import React, { useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
// import "./Swiper.module.scss"; // Import SCSS file

// // Import required modules
// import { Autoplay, Pagination, Navigation } from "swiper/modules";

// const timelineData = [
//   {
//     year: "1876",
//     title: "பெர்லின் நகரைச் சார்ந்த",
//     subTitle: "எஃப். ஜாகோர் அகழ்வாய்வு",
//     description:
//       "பொருநை ஆற்றங்கரை நாகரீகத்தில் முதலில் அகழ்வாய்வுக்கு உட்படுத்தப்பட்ட இடம் ஆதிச்சநல்லூர் தான்.",
//     img: "/path-to-your-image.png", // Replace with actual image path
//   },
//   {
//     year: "1902–04",
//     title: "இரண்டாம் கட்ட அகழாய்வு",
//     subTitle: "சிறப்பான தொல்லியல் கண்டுபிடிப்புகள்",
//     description:
//       "1902-04 இடைப்பட்ட காலத்தில் அகழாய்வுகள் தொடரப்பட்டது. பல முக்கியமான தொல்லியல் பொருட்கள் கண்டுபிடிக்கப்பட்டன.",
//     img: "/path-to-your-image.png",
//   },
//   {
//     year: "2005–06",
//     title: "புதிய ஆய்வுகள்",
//     subTitle: "அகழாய்வில் புதிய கண்டுபிடிப்புகள்",
//     description:
//       "2005-06ல் நடந்த அகழாய்வுகள் மூலம் புதிய நிர்மாணங்கள் மற்றும் பழைய கலாச்சாரங்கள் வெளிவந்தன.",
//     img: "/path-to-your-image.png",
//   },
//   {
//     year: "2021–23",
//     title: "தற்போதைய அகழாய்வு",
//     subTitle: "நவீன தொழில்நுட்ப உதவியுடன்",
//     description:
//       "2021-23 காலகட்டத்தில், நவீன தொழில்நுட்பங்களின் மூலம் மேலும் துல்லியமான தகவல்கள் பெறப்பட்டன.",
//     img: "/path-to-your-image.png",
//   },
// ];

// export default function TimelineCarousel() {
//   const [activeIndex, setActiveIndex] = useState(0);

//   return (
//     <div className="timeline-container">
//       {/* Header */}
//       <h1 className="timeline-title">ஆகழ்வாய்வின் முக்கியக் கண்டுபிடிப்புகள்</h1>

//       {/* Navigation Buttons for Years */}
//       <div className="timeline-nav">
//         {timelineData.map((item, index) => (
//           <button
//             key={index}
//             className={`nav-item ${index <= activeIndex ? "active" : ""}`}
//           >
//             {item.year}
//           </button>
//         ))}
//       </div>

//       {/* Swiper Slider */}
//       <Swiper
//         spaceBetween={30}
//         centeredSlides={true}
//         autoplay={{
//           delay: 2500,
//           disableOnInteraction: false,
//         }}
//         pagination={{ clickable: true }}
//         navigation={true}
//         modules={[Autoplay, Pagination, Navigation]}
//         className="mySwiper"
//         onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
//       >
//         {timelineData.map((item, index) => (
//           <SwiperSlide key={index}>
//             <div className="slide">
//               {/* Left Side Text */}
//               <div className="slide-content">
//                 <h2 className="slide-title">{item.title}</h2>
//                 <h3 className="slide-subtitle">{item.subTitle}</h3>
//                 <p className="slide-description">{item.description}</p>
//               </div>

//               {/* Right Side Image */}
//               <div className="slide-image">
//                 <img src={item.img} alt={item.title} />
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// }
