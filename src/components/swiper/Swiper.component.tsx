import { useState } from "react";
import styles from "./Swiper.module.scss"; // Ensure you import your styles
import hf from "../../assets/icons/hf.svg";
import carousal_1902 from "../../assets/icons/carousal_1902.svg";
import carousal_2005 from "../../assets/icons/carousal_2005.svg";

const carouselData = [
  {
    year: "1876",
    title: "பெர்லின் நகரைச் சார்ந்த எஃப். ஜாகோர் அகழ்வாய்வு",
    description:
      "பொருநை ஆற்றங்கரை நாகரீகத்தில் முதலில் அகழ்வாய்வுக்கு உட்படுத்தப்பட்ட இடம் ஆதிச்சநல்லூர் தான். இது பண்டைய பாண்டிய மன்னர்களின் துறைமுகமான கொற்கைக்கு மேற்கே 9 கி.மீ தொலைவில் அமைந்துள்ளது.",
    image: hf,
  },
  {
    year: "1902-04",
    title: "அலெக்சாண்டர் ரி அகழ்வாய்வு",
    description:
      "பொருநை ஆற்றங்கரை நாகரீகத்தில் முதலில் அகழ்வாய்வுக்கு உட்படுத்தப்பட்ட இடம் ஆதிச்சநல்லூர் தான். இது பண்டைய பாண்டிய மன்னர்களின் துறைமுகமான கொற்கைக்கு மேற்கே 9 கி.மீ தொலைவில் அமைந்துள்ளது.",
    image: carousal_1902,
  },
  {
    year: "2005-06",
    title:
      "50+ வகையான மட்பாண்டங்கள், இரும்பு ஆயுதங்கள், எலும்புகள் கண்டுபிடிப்பு",
    description: "",
    image: carousal_2005,
  },
  {
    year: "2021-23",
    title: "கருப்பு-சிவப்பு பானை ஓடுகள், வெள்ளை பூசப்பட்ட ஓடுகள், அரிய மட்பாண்டங்கள்",
    description: "",
    image: "your-image-url-4",
  },
];

const Carousel = () => {
  const [selectedYear, setSelectedYear] = useState("1876");

  // Find content based on selectedYear
  const selectedContent = carouselData.find(
    (item) => item.year === selectedYear
  );

  return (
   
      <div className={styles.carousel_container}>
      <div className={styles.carousel_head}>
        ஆகழ்வாய்வின் முக்கியக் கண்டுபிடிப்புகள்
      </div>

      {/* Navigation Items */}
      <div className={styles.carousel_nav}>
        {carouselData.map((item) => (
          <div
            key={item.year}
            className={`${styles.carousel_nav_items} ${
              selectedYear === item.year ? styles.active : ""
            }`}
            onClick={() => setSelectedYear(item.year)}
          >
            <h1></h1>
            <p>{item.year}</p>
          </div>
        ))}
      </div>

      {/* Content Display */}
      {selectedContent && (
        <div className={styles.carousel_content}>
          <div className={styles.carousel_content_text}>
            <h1>{selectedContent.title}</h1>
            <p>{selectedContent.description}</p>
          </div>
          <div>
            <img
              src={selectedContent.image}
              alt={selectedContent.title}
              className={styles.selectedContent_image}
            />
          </div>
        </div>
      )}
    </div>
   
  );
};

export default Carousel;
