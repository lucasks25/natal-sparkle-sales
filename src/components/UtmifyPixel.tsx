import { useEffect } from 'react';

export const UtmifyPixel = () => {
  useEffect(() => {
    // Set the pixel ID
    (window as any).pixelId = "691d2681051f1a88a77f19cb";
    
    // Create and append the script
    const script = document.createElement("script");
    script.setAttribute("async", "");
    script.setAttribute("defer", "");
    script.setAttribute("src", "https://cdn.utmify.com.br/scripts/pixel/pixel.js");
    document.head.appendChild(script);

    // Cleanup function
    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return null;
};
