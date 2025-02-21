import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import { Assets } from "utils/imports.utils";
import styles from "./Korkai.module.scss";
import Model from '../modelview/model'

const KorkaiPage = () => {
  return (
    <div className={styles.korkai_container}>
      <div className={styles.korkai_background}>
        <img src={Assets.korkai_background} alt="korkai background" />
        <div className={styles.korkai_map}>
        <img src={Assets.korkai_map} alt="map" />
        </div>
        <div className={styles.korkai_content}>
          <p>KORKAI</p>
          <p className={styles.excavation}>EXCAVATION</p>
          <p className={styles.korkai_content_year}>2003-05</p>
        </div>
        <div className={styles.korkai_background_image1}>
          <img src={Assets.korkai_image1} alt="korkai" />
        </div>
      </div>

      <div className={styles.textContent}>
        <h1 className={styles.textContent_title}>Rediscovered Excavation</h1>
        <br />
        <p className={styles.textContent_text}>
          A 100 years after the last dig at Adichanallur, Mr. Satyamurthy, the
          Superintending Archaeologist, Archaeological Survey of India, led an
          excavation in Adichanallur between the years 2003 and 2005.
        </p>
        <br />
        <br />
        <p className={styles.textContent_text}>
          The dig was conducted only in the area known as Parambu, over an area
          of 600 square metres. In this dig, over 160 burial urns, fired-clay
          items, iron implements, human bones including skulls, were retrieved
          from various urns and trenches.
        </p>
      </div>

      <div className={styles.korkai_aerila}>
        <img src={Assets.korkai_aerila} alt="korkai aerila" />
      </div>

      <div className={styles.burial_goods}>
        <p>Burial Goods</p>
        <p>
          <span>And </span>Animal Figurines{" "}
        </p>
        <img src={Assets.hear} alt="hear" />
      </div>

      <div className={styles.object_goods}>
        {/* <img src={Assets.rotate_korkai_image1} alt="rotate image" /> */}
       <div  className={styles.object_goods_model}>
       <Canvas
          camera={{ position: [0, 1, 5], fov: 50 }}
        >
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} intensity={1} />
          <Model path="/PAINTED-POT.glb"/>
          {/* <Model path="/EMB_IRON-KNIFE-AGR-1-67.glb" scale={40}/> */}
          {/* <Model path="/EMB_IRON-RING-KLD-4-3208.glb" scale={75}/> */}
           
          <OrbitControls minDistance={5} maxDistance={15}/> 
          {/* <OrbitControls enableZoom={false} />   */}
          <Environment preset="sunset" />
        </Canvas>
       </div>
        <div className={styles.object_goods_text}>
          <p>
            Objects and goods found buried in urns are those that could have
            been used by the individuals during their life, or ones they desired
            and liked.
          </p>
          <br />
          <p>
            In the Adichanallur archaeological complex, objects recovered from
            burial urns include high-quality bronze bowls and utensils, flower
            vases, bronze figures of domesticated animals such as buffalo, goat,
            cow, as well as wild animals such tiger, elephant, deer. We have
            also found jewellery such as bangles, rings, bracelets, arm bands,
            ear studs and earrings.
          </p>
          <br />
          <p>
            Terracotta/Earthen pots have been decorated with dotted shapes such
            as circles and squares, in the bottom half of the ware. These were
            made by impressing the pots with a sharp iron implement before
            firing. The burial urns have yielded large quantities of human bones
            and skulls, many of which have been broken and crushed in places.
          </p>
        </div>
      </div>

      <div className={styles.recoverd_necklace}>
        <div className={styles.necklace_text}>
          <p>
            Also recovered are necklaces made of beads - terracotta beads in
            faded reddish colours, bronze beads, among others. Cutting and
            grinding stones have also been found outside burial chambers.
          </p>
          <p>
            The burial urns are shaped from high-quality, super grade clay and
            then fired in a kiln. They are in red, black, and red-and-black
            colours.
          </p>
          <p>
            The Adichanallur Parambu complex has been a never-ending source of
            artefacts and material that has greatly aided the Department of
            Archaeology in telling the prehistory of ancient Tamil Nadu. It is
            nothing but a priceless treasure trove of our past.
          </p>
        </div>
        <img src={Assets.necklace1} alt="necklace" />
      </div>
      <div className={styles.necklace2}>
        <img src={Assets.necklace2} alt="necklace 2" />
      </div>
      <div className={styles.behind_excavation}>
        <img src={Assets.behind_excavation} alt="behind_excavation image" />
      </div>

      <div className={styles.four_legged_jar}>
        <p>Four Legged Jar</p>
      </div>
      <div className={styles.four_legged_jar_images}>
      <img src={Assets.four_jar1} alt="jar image" />
      <img src={Assets.four_jar2} alt="jar image" />
      </div>

      <div className={styles.footer}>
      <img src={Assets.corner_out} alt="corner out image" />
      <img src={Assets.jar_view} alt="jar view" />
      </div>

    </div>
  );
};

export default KorkaiPage;
