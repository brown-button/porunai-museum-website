import React, { useEffect, useRef } from "react";
import { Viewer } from "photo-sphere-viewer";
import "photo-sphere-viewer/dist/photo-sphere-viewer.css";
import view360deg from "../../assets/images/360_Image.jpg";

interface PhotoSphereViewerProps {
  className?: string; // Optional className prop
}

const PhotoSphereViewer: React.FC<PhotoSphereViewerProps> = ({ className }) => {
  const viewerRef = useRef<HTMLDivElement | null>(null);
  const viewerInstance = useRef<Viewer | null>(null);

  useEffect(() => {
    if (viewerRef.current && !viewerInstance.current) {
      viewerInstance.current = new Viewer({
        container: viewerRef.current,
        panorama: view360deg, // Image from public folder
        loadingImg: "/loading.gif", // Optional loading image
        defaultZoomLvl: 50,
        navbar: ["zoom", "fullscreen"],
      });

      viewerInstance.current.once("ready", () => {
        console.log("Photo Sphere Viewer is ready!");
      });
    }
  }, []);

  return (
    <div
      ref={viewerRef}
      className={className} // Apply passed className
      style={{ width: "100%", height: "500px", background: "#000" }}
    />
  );
};

export default PhotoSphereViewer;
