import { useEffect, useRef } from "react";
import { Engine, Scene, ArcRotateCamera, Vector3, HemisphericLight, SceneLoader, Color4 } from "@babylonjs/core";
import "@babylonjs/loaders";

interface BabylonProps {
  modelPath: string;
  scale?: number;
  minZoom?: number;
  maxZoom?: number;
  className?: string;
  canvasClassName?: string;
  autoRotateSpeed?: number; // Accept rotation speed from parent component
}

const Babylon: React.FC<BabylonProps> = ({
  modelPath,
  scale = 1,
  minZoom = 3,
  maxZoom = 10,
  className,
  canvasClassName,
  autoRotateSpeed = 1, // Default speed
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
    camera.lowerRadiusLimit = minZoom;
    camera.upperRadiusLimit = maxZoom;

    new HemisphericLight("light", new Vector3(0, 1, 0), scene);

    // Load Model
    SceneLoader.ImportMesh("", "", modelPath, scene, (meshes) => {
      meshes.forEach((mesh) => {
        mesh.position = Vector3.Zero();
        mesh.scaling = new Vector3(scale, scale, scale); // Apply scaling

        // Apply auto-rotation using prop
        scene.onBeforeRenderObservable.add(() => {
          mesh.rotation.y += autoRotateSpeed; // Use the speed provided from HomePage
        });
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
  }, [modelPath, scale, minZoom, maxZoom, autoRotateSpeed]); // Add autoRotateSpeed as dependency

  return (
    <div ref={containerRef} className={className}>
      <canvas ref={canvasRef} className={canvasClassName} />
    </div>
  );
};

export default Babylon;
