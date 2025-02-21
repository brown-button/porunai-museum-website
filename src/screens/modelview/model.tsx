import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

interface ModelProps {
  path: string;
  scale?: number;
  rotation?: [number, number, number];
  position?: [number, number, number];


}
const model = ({path, scale = 12 ,rotation = [0, 0, 0], position = [0, 0, 0]} :ModelProps) => {
  const gltf = useLoader(GLTFLoader, path);

  return <primitive object={gltf.scene} scale={scale} rotation={rotation} position={position}/>;
};

export default model;
