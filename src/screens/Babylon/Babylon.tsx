// import { useEffect, useRef } from "react";
// import { Engine, Scene, ArcRotateCamera, Vector3, HemisphericLight, SceneLoader, Color4 } from "@babylonjs/core";
// import "@babylonjs/loaders";

// interface BabylonProps {
//   modelPath: string;
//   scale?: number; // Scale value for the model
//   className?: string; // Class for parent container
//   canvasClassName?: string; // Class for canvas
// }

// const Babylon: React.FC<BabylonProps> = ({ modelPath, scale = 1, className, canvasClassName }) => {
//   const canvasRef = useRef<HTMLCanvasElement>(null);
//   const containerRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     if (!canvasRef.current || !containerRef.current) return;

//     const canvas = canvasRef.current;
//     const container = containerRef.current;

//     // Ensure canvas fully inherits parent styles
//     canvas.style.width = "100%";
//     canvas.style.height = "100%";
//     canvas.style.display = "block"; // Prevent extra margins

//     // Prevent right-click context menu
//     canvas.addEventListener("contextmenu", (e) => e.preventDefault());

//     // Initialize Babylon engine
//     const engine = new Engine(canvas, true);
//     const scene = new Scene(engine);
//     scene.clearColor = new Color4(0, 0, 0, 0); // Transparent background

//     const camera = new ArcRotateCamera("camera", Math.PI / 2, Math.PI / 3, 5, Vector3.Zero(), scene);
//     camera.attachControl(canvas, true);

//     new HemisphericLight("light", new Vector3(0, 1, 0), scene);

//     SceneLoader.ImportMesh("", "", modelPath, scene, (meshes) => {
//       meshes.forEach((mesh) => {
//         mesh.position = Vector3.Zero();
//         mesh.scaling = new Vector3(scale, scale, scale); // Use the scale prop
//       });
//     });

//     engine.runRenderLoop(() => {
//       scene.render();
//     });

//     const handleResize = () => {
//       engine.resize();
//     };

//     window.addEventListener("resize", handleResize);
//     return () => {
//       window.removeEventListener("resize", handleResize);
//       engine.dispose();
//     };
//   }, [modelPath, scale]); // Re-run effect if modelPath or scale changes

//   return (
//     <div ref={containerRef} className={className}>
//       <canvas ref={canvasRef} className={canvasClassName} />
//     </div>
//   );
// };

// export default Babylon;


import { useEffect, useRef } from "react";
import { Engine, Scene, ArcRotateCamera, Vector3, HemisphericLight, SceneLoader, Color4 } from "@babylonjs/core";
import "@babylonjs/loaders";

interface BabylonProps {
  modelPath: string;
  scale?: number; // Scale value for the model
  minZoom?: number; // Minimum zoom distance
  maxZoom?: number; // Maximum zoom distance
  className?: string;
  canvasClassName?: string;
}

const Babylon: React.FC<BabylonProps> = ({
  modelPath,
  scale = 1,
  minZoom = 3, // Default min zoom
  maxZoom = 10, // Default max zoom
  className,
  canvasClassName
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!canvasRef.current || !containerRef.current) return;

    const canvas = canvasRef.current;
    const container = containerRef.current;

    // Ensure canvas fully inherits parent styles
    canvas.style.width = "100%";
    canvas.style.height = "100%";
    canvas.style.display = "block"; // Prevent extra margins

    // Prevent right-click context menu
    canvas.addEventListener("contextmenu", (e) => e.preventDefault());

    // Initialize Babylon engine
    const engine = new Engine(canvas, true);
    const scene = new Scene(engine);
    scene.clearColor = new Color4(0, 0, 0, 0); // Transparent background

    // Camera setup with zoom limits
    const camera = new ArcRotateCamera("camera", Math.PI / 2, Math.PI / 3, 5, Vector3.Zero(), scene);
    camera.attachControl(canvas, true);
    camera.lowerRadiusLimit = minZoom; // Prevent zooming in too close
    camera.upperRadiusLimit = maxZoom; // Prevent zooming out too far

    new HemisphericLight("light", new Vector3(0, 1, 0), scene);

    // Load Model
    SceneLoader.ImportMesh("", "", modelPath, scene, (meshes) => {
      meshes.forEach((mesh) => {
        mesh.position = Vector3.Zero();
        mesh.scaling = new Vector3(scale, scale, scale); // Apply scaling
      });
    });

    engine.runRenderLoop(() => {
      scene.render();
    });

    const handleResize = () => {
      engine.resize();
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      engine.dispose();
    };
  }, [modelPath, scale, minZoom, maxZoom]); // Dependencies for re-initialization

  return (
    <div ref={containerRef} className={className}>
      <canvas ref={canvasRef} className={canvasClassName} />
    </div>
  );
};

export default Babylon;

