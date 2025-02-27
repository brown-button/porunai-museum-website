import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import { Assets } from "utils/imports.utils";
import styles from "./HomePage.module.scss";
import Model from "../modelview/model";
import TimelineCarousel from "components/swiper/Swiper.component";
import Adichanallur_beta from "../../assets/images/Adichanallur - Burial.png";
import view360deg from "../../assets/images/360_Image.jpg";
import Babylon from "screens/Babylon/Babylon";
import { useEffect, useRef, useState } from "react";

const HomePage = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className={styles.main}>
      <div className={styles.home_container}>
        <div className={styles.background_home}>
          {/* <img
          src={Assets.background_home}
          alt="background"
          className={styles.background_home}
        /> */}

          <div className={styles.titile_container}>
            <h1>பொருநையும்</h1>
            <p> அயிரம் நாகரீகமும்</p>
          </div>

          <div className={styles.structure}>
            <img
              src={Assets.structure1}
              alt="background"
              className={styles.structure1}
              style={{ transform: `translateY(${scrollY * 0.2}px)` }}
            />
            <img
              src={Assets.structure2}
              alt="background"
              className={styles.structure2}
              style={{ transform: `translateY(${scrollY * 0.15}px)` }}
            />
            <img
              src={Assets.structure3}
              alt="background"
              className={styles.structure3}
              style={{ transform: `translateY(${scrollY * 0.1}px)` }}
            />
          </div>

          <div className={styles.arrow_down_container}>
            <p>இதைப் பற்றி மேலும் அறிய</p>
            <img
              src={Assets.arrow_down}
              alt="aroow"
              className={styles.arrow_down}
            />
          </div>
        </div>

        <div className={styles.aan_porunai_container}>
          <h1>ஆன் பொருநை </h1>
          <h2>இரும்புக் காலத்தின் முதன்மை</h2>
          <section className={styles.play_section}>
            <img src={Assets.play} alt="play" className={styles.play} />
            <p>இந்த பகுதியை கேட்டறிக</p>
          </section>
        </div>
        <div className={styles.model1_container}>
          <div className={styles.content1}>
            <p>
              நாம் நாகரீக மனிதர்களாக உலவும் இதே மண்ணில் தான், மனித நாகரீகத்தின்
              மிக முக்கிய நிகழ்வாக கருதப்படும் இரும்புக் காலம், நம் தென்
              தமிழகத்தில் இப்பொழுது தாமிரபரணி என்றழைக்கப்படும் பொருநை
              ஆற்றங்கரையில் சுமார் 5300 ஆண்டுகளுக்கு முன்னரே தொடங்கியிருக்கிறது
              என்பது தமிழக தொல்லியல் துறை நடத்திய அகழாய்வில் ஆதாரப்பூர்வமாக
              கண்டறியப்பட்டுள்ளது.
            </p>
          </div>
          <div className={styles.knife_container}>
            <Babylon
              modelPath="/EMB_NAIL-KLD-7-1284.glb"
              scale={0.3}
              className={styles.knife}
              minZoom={4}
              maxZoom={8}
            />
            {/* <Canvas
              className={styles.knife}
              camera={{ position: [0, 0, 50], fov: 80 }}
            >
              <ambientLight intensity={0.5} />
              <spotLight
                position={[10, 50, 50]}
                intensity={1.2}
                angle={0.3}
                penumbra={1}
              />
              <Model
                path="/EMB_NAIL-KLD-7-1284.glb"
                scale={130}
                position={[0, 0, 0]}
                // rotation={[Math.PI / 6, Math.PI / 4, 0]}
              />
              {/* <OrbitControls minDistance={5} maxDistance={15} /> */}
            {/* <OrbitControls enableZoom={false} />
              <Environment preset="sunset" />
            </Canvas>  */}
          </div>
          <div className={styles.content2}>
            <div className={styles.rotate_container}>
              <img
                src={Assets.rotate}
                alt="rotate image"
                className={styles.rotate}
              />
              <p className={styles.heading}>
                பண்டைய இரும்பு கருவி <span>VIEW IN FULL SCREEN</span>
              </p>
            </div>
            <div>
              <p className={styles.content2_description}>
                இரும்பு காலம், அதாவது இரும்பை உருக்கி கருவிகளை தயாரிக்கும்
                தொழில்நுட்பத்தை முதன்முதலில் மனித இனம் கண்டறிந்து, அக்கருவிகளை
                அன்றாடம் பயன்படுத்த தொடங்கிய காலம்.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.irumbin_container}>
          <p>இரும்பின் பயன்பாடு</p>
        </div>

        <div className={styles.velan_panpaadu}>
          <img
            src={Assets.velan_img}
            alt="velan image"
            className={styles.velan_image}
          />
          <img
            src={Assets.velan_sli1}
            alt="velan slide"
            className={styles.velan_slide1}
          />
        </div>

        <div className={styles.iron_year_container}>
          <div className={styles.iron_year_ptag}>
            <p>
              அத்தகைய இரும்பு காலமே நம் பொருநை ஆற்றங்கரையில் தான் தொடங்கியுள்ளது
              என்னும் செய்தி எத்துணை மகத்தான பெருமையை தேடித் தந்துள்ளது.
            </p>
          </div>
          <div className={styles.iron_img1}>
            <img
              src={Assets.iron_img1}
              alt="iron image"
              // className={styles.iron_img1}
            />
          </div>
          <img
            src={Assets.iron_img2}
            alt="iron image"
            className={styles.iron_img2}
          />
        </div>

        <div className={styles.elakkiyangal_container}>
          <h1>இலக்கியங்களில் பொருநை</h1>
          <section className={styles.play_section}>
            <img src={Assets.play} alt="play" className={styles.play} />
            <p>இந்த பகுதியை கேட்டறிக</p>
          </section>

          <div className={styles.elakkiyangal_content}>
            <div className={styles.elakkiyangal}>
              <p>
                தாமிரபரணியின் பெருமையை நாம் பாடும் முன்னரே நமது மூதாதையர் சங்க
                இலக்கியங்களில் பொருநை என்ற பெயரில் அதன் சிறப்பினை
                அள்ளித்தெளித்திருக்கிறார்கள்.
              </p>
              <h2>
                பொருநையின் வரலாறு சங்க இலக்கியங்களில்: ஆன் பொருநை தண் பொருநை
                என்ற பெயர்களில் குறிப்பிடப்பட்டுள்ளது. 
              </h2>
              <p>கம்பர் முதல் பாரதி வரை பொருநையை பாடாதோரே இல்லை.</p>
            </div>
            <div>
              <img
                src={Assets.than_porunai_img}
                alt="than porunai image"
                className={styles.than_porunai_img}
              />
            </div>
          </div>
        </div>

        <div className={styles.adichanallur_container}>
          <h1>ஆதிச்சநல்லூர்</h1>
          <p>
            பொருநை ஆற்றங்கரை நாகரீகத்தில் முதலில் அகழ்வாய்வுக்கு உட்படுத்தப்பட்ட
            இடம் ஆதிச்சநல்லூர் தான். இது பண்டைய பாண்டிய மன்னர்களின் துறைமுகமான
            கொற்கைக்கு மேற்கே 9 கி.மீ தொலைவில் அமைந்துள்ளது.
          </p>
        </div>

        <div className={styles.pot_model_container}>
          <div>
            <img
              src={Assets.porunai_book}
              alt="porinai image"
              className={styles.porunai_book}
            />
          </div>

          <div className={styles.pot_content}>
            <div className={styles.pot}>
              <Babylon
                modelPath="/EMB_IRON-KNIFE-AGR-1-67.glb"
                scale={1}
                minZoom={4}
                maxZoom={8}
              />
              {/* <Canvas
                className={styles.pot}
                camera={{ position: [0, 0, 50], fov: 800 }}
              >
                <ambientLight intensity={0.5} />
               
                <spotLight
                  position={[10, 50, 50]}
                  intensity={1.2}
                  angle={0.3}
                  penumbra={1}
                />
                <Model
                  path="/PAINTED-POT.glb"
                  scale={80}
                  position={[0, 0, 0]}
          
                />
                <OrbitControls minDistance={5} maxDistance={15} />
               
                <Environment preset="sunset" />
              </Canvas> */}
            </div>

            <div className={styles.pot_content_text}>
              <h1>பண்டைய பானை</h1>
              <p>VIEW IN AR</p>
            </div>
          </div>
        </div>
        <TimelineCarousel />

        <div className={styles.emathala_container}>
          <p>ஈமத்தள அகழ்வாய்வில்</p>
        </div>

        <div className={styles.old_iron_model_container}>
          <div className={styles.iron_model}>
            <Babylon
              modelPath="/Obj8.glb"
              scale={1.2}
              className={styles.iron}
              minZoom={4}
              maxZoom={8}
            />
            {/* <Canvas
              className={styles.iron}
              camera={{ position: [0, 0, 50], fov: 50 }}
            >
              <ambientLight intensity={0.5} />
              {/* <spotLight position={[10, 10, 10]} intensity={1} />  */}
            {/* <spotLight
                position={[10, 50, 50]}
                intensity={1.2}
                angle={0.3}
                penumbra={1}
              />
              <Model */}
            {/* // path="/Obj8.glb"
                // path="/EMB_NAIL-KLD-7-1284.glb"
               / */}
            {/* <OrbitControls minDistance={5} maxDistance={15} /> */}
            {/* <OrbitControls enableZoom={false} /> */}
            {/* <Environment preset="sunset" />
            </Canvas> */}
          </div>

          <div className={styles.pot_content_text}>
            <h1>பண்டைய இரும்பு கருவி</h1>
            <p>VIEW IN AR</p>
          </div>
        </div>

        <div className={styles.beta_container}>
          <div className={styles.beta_img_contain}>
            <img src={Adichanallur_beta} alt="beta_image" />
          </div>

          <div className={styles.beta_content}>
            <div className={styles.beta_content_text}>
              <h1>புராதன கரிம மாதிரி</h1>
              <p>
                ஆதிச்சநல்லூரில் கரிம மாதிரிகள் பரிசோதிக்கப்பட்டு
                <span> கி.மு. 3000 </span>
                வருடத்துக்கு சென்று சேர்ந்தது என்பதற்கான ஆதாரம் கிடைத்துள்ளது.
              </p>
            </div>
            <div className={styles.beta}>
              <img src={Assets.beta} alt="beta image" />
              <p>VIEW IN FULL SCREEN</p>
            </div>
          </div>
        </div>
        <div className={styles.sivagalai_map_container}>
          <img
            src={Assets.sivagalai_map}
            alt="sivagalai map"
            className={styles.sivagalai_map}
          />
        </div>
        <div className={styles.sivagalai_content}>
          <h1>சிவகலை</h1>
          <p>
            பொருநை ஆற்றிலிருந்து 7 கி.மீ தொலைவில் அமைந்துள்ள சிவகலை இரும்பு கால
            ஈமத்தளமாகவும் இருந்திருக்கிறது. 2019-22 ஆண்டுகளில் தமிழக அரசு
            அகழ்வாய்வு மேற்கொண்டது.
          </p>
        </div>

        <div className={styles.model3_content}>
          <div className={styles.model3_img}>
            <Babylon
              modelPath="EMB_KDG-1-KNIFE-SL3.glb"
              scale={0.7}
              canvasClassName={styles.model3}
              minZoom={4}
              maxZoom={8}
            />
            {/* <Canvas
              className={styles.model3}
              camera={{ position: [1, 1, 50], fov: 80 }}
            >
              <ambientLight intensity={0.5} />
              <spotLight
                position={[10, 50, 50]}
                intensity={1.2}
                angle={0.3}
                penumbra={1}
              />
              <Model
                path="EMB_KDG-1-KNIFE-SL3.glb"
                scale={220}
                position={[1, -2, 1]}
              />
              {/* <OrbitControls minDistance={5} maxDistance={15} /> */}
            {/* <OrbitControls enableZoom={false} />
              <Environment preset="sunset" />
            </Canvas> */}
          </div>

          <div className={styles.model3_content_text}>
            <h1>பண்டைய பானை</h1>
            <p>VIEW IN AR</p>
          </div>
        </div>

        <div className={styles.important_findings_container_wrapper}>
          <div className={styles.important_findings_container}>
            <h1>முக்கிய கண்டுபிடிப்புகள்</h1>
            <div className={styles.important_findings_text}>
              <div className={styles.important_findings_items}>
                <h2>160</h2>
                <p>
                  முதுமக்கள் தாழிகள் (9 கருப்பு பானைகள், 151 சிவப்பு பானைகள்)
                </p>
              </div>
              <div className={styles.important_findings_items}>
                <h2>750+</h2>
                <p>மட்பாண்ட பொருட்கள்</p>
              </div>
              <div className={styles.important_findings_items}>
                <h2>80+</h2>
                <p>
                  இரும்பு பொருட்கள் (கத்திகள், அம்பு முனைகள், மோதிரங்கள்,
                  உளிகள், கோடாரிகள், வாட்கள்)
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* <div className={styles.findings_below_container}>
          <img
            src={Assets.findings_below}
            alt="findings below image"
            className={styles.findings_below}
          />
        </div> */}
        <div className={styles.view360deg_container}>
          <img
            src={view360deg}
            alt=" view 360 image"
            className={styles.view360deg}
          />
        </div>
        <div className={styles.korkai_map_container}>
          <img
            src={Assets.korkai_map}
            alt=" korkai map image"
            className={styles.korkai_map}
          />
        </div>

        <div className={styles.korkai_text_content_container}>
          <div className={styles.korkai_text_content}>
            <h1>கொற்கை</h1>
            <p>
              கொற்கையில் <i>1968, 1969</i>-ல் நடந்த அகழ்வாய்வில்
              <b> 2800 ஆண்டுகள் பழமையான நகரம்</b> என நிறுவப்பட்டுள்ளது.
            </p>
          </div>
        </div>

        <div className={styles.korkai_footer_content}>
          <div className={styles.korkai_areial}>
            <img src={Assets.korkai_areial} alt="korkai areial image" />
          </div>
          <div className={styles.korkai_struct}>
            <img src={Assets.korkai_struct} alt="korkai structure image" />
          </div>
        </div>

        <div className={styles.model4_content}>
          <div className={styles.model4}>
            <Babylon
              modelPath="/EMB_KDG-3-URN92-SL5.glb"
              scale={0.5}
              canvasClassName={styles.BabylonCanvas}
              minZoom={4}
              maxZoom={8}
            />
            {/* <Canvas
              className={styles.model4}
              camera={{ position: [0, 0, 50], fov: 800 }}
            >
              <ambientLight intensity={0.5} />
              <spotLight
                position={[10, 50, 50]}
                intensity={1.2}
                angle={0.3}
                penumbra={1}
              />
              <Model
                path="/EMB_KDG-3-URN92-SL5.glb"
                scale={80}
                position={[0, 0, 0]}
              />
              <OrbitControls minDistance={5} maxDistance={15} />

              <Environment preset="sunset" />
            </Canvas> */}
          </div>

          <div className={styles.model4_content_text}>
            <h1>பண்டைய பானை</h1>
            <p>VIEW IN AR</p>
          </div>
        </div>

        {/* <div className={styles.model4_dummy_content}>
        <div>
        
          <img
          src={Assets.model4_dummy}
          alt="korkai areial image"
          className={styles.model4_dummy}
        />
        </div>

        <div className={styles.model4_dummy_content_text}>
          <h1>பண்டைய பானை</h1>
          <p>VIEW IN AR</p>
        </div>
      </div> */}

        <div className={styles.footer}>
          <div className={styles.footer_text}>
            <h1>பண்டைய துறைமுக நகரம் </h1>
            <p> பாண்டிய மன்னர்களின் தலைநகரம்</p>
            <br />
            <br />
            <h1>முக்கிய கண்டுபிடிப்புகள்</h1>
            <ul>
              <li>இரும்பு உருக்கு துறைகள்</li>
              <li>கண்ணாடி மணிகள், கடல்சிப்பிகள்</li>
              <li>பழமையான கட்டிடங்கள், செங்கல் கட்டுமானங்கள்</li>
            </ul>
          </div>
          <div className={styles.korkai_storage}>
            <img
              src={Assets.korkai_storage}
              alt="korkai storage image"
              // className={styles.korkai_storage_}
            />
          </div>
        </div>
        {/* <div className={styles.view360deg_container}>
          <img
            src={view360deg}
            alt=" view 360 image"
            className={styles.view360deg}
          />
        </div> */}

        <div className={styles.end}>
          <p>
            யாதும் இத்தகைய தொழில்நுட்பமும், சங்க இலக்கியங்களில் போற்றப்பட்ட
            துறைமுகமும், கடல் வணிகமும், வெளிநாட்டு தொடர்பும், அப்போது இருந்த
            பொருநை ஆற்றங்கரை எத்துனை செம்மையாக இருந்திருக்கும்!
            <br />
            <span>யாதும் ஊரே யாவரும் கேளிர் </span>
            <br />
            என்ற கனியன் பூங்குன்றனாரின் கவிதை கூட பொருநை ஆற்றங்கரையை
            எடுத்துக்காட்டாக வைத்து எழுதப்பட்டது போலும்.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
