import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import Model from "./model";
// import styles from "./model.module.css";

const ModelView = () => {
  return (
    // <div className={styles.container}>
    //   <h1 className={styles.title}>PORUNAI</h1>
    //   <h1 className={styles.title}>River Civilisation</h1>
    //   <p className={styles.subtitle}>
    //     Dive into the life of Porunai River Civilisation
    //   </p>
    //   <div className={styles.canvasWrapper}>
        <Canvas
          camera={{ position: [0, 1, 5], fov: 50 }}
          // className={styles.canvas}
        >
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} intensity={1} />
          {/* <Model /> */}
          <Model path="/PAINTED-POT.glb" />

          <OrbitControls />
          <Environment preset="sunset" />
        </Canvas>
    //   </div>
    //   <h2 className={styles.footer}>3D Model Demonstration </h2>
    //   <p className={styles.footer}>Interact with the model using touch/mouse</p>
    // </div>
  );
};

export default ModelView;
