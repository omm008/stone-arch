import { useState, useEffect, useRef } from "react";

export const usePreloadImages = (totalFrames) => {
  const [progress, setProgress] = useState(0);
  const [images, setImages] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // We use a ref to build the array without triggering re-renders on every single image
  const loadedImagesRef = useRef([]);

  useEffect(() => {
    let loadedCount = 0;
    const imgArray = new Array(totalFrames).fill(null);
    loadedImagesRef.current = imgArray;

    // Helper to update progress
    const updateProgress = () => {
      loadedCount++;
      const newProgress = Math.round((loadedCount / totalFrames) * 100);
      setProgress(newProgress);

      if (loadedCount === totalFrames) {
        setImages(loadedImagesRef.current);
        setIsLoaded(true);
      }
    };

    // Trigger loads
    for (let i = 1; i <= totalFrames; i++) {
      const img = new Image();
      // Force eager loading (important for some browsers)
      img.loading = "eager";
      img.src = `/frames/ezgif-frame-${String(i).padStart(3, "0")}.webp`;

      img.onload = () => {
        // Store the loaded HTMLImageElement directly
        loadedImagesRef.current[i - 1] = img;
        updateProgress();
      };

      img.onerror = () => {
        console.error(`Failed to load frame ${i}`);
        updateProgress(); // Count errors as progress so we don't get stuck
      };
    }
  }, [totalFrames]);

  return { progress, images, isLoaded };
};
