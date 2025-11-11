interface DeviceMockupProps {
  image: string;
  type: "desktop" | "mobile";
  alt: string;
}

export const DeviceMockup = ({ image, type, alt }: DeviceMockupProps) => {
  if (type === "desktop") {
    return (
      <div className="relative group animate-fade-in perspective-1000">
        {/* Monitor base */}
        <div className="relative">
          {/* Screen */}
          <div className="bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-3xl p-6 shadow-2xl border-8 border-gray-900 relative transform transition-all duration-500 hover:scale-105 hover:-translate-y-2">
            {/* Webcam */}
            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-700 rounded-full shadow-inner"></div>
            
            {/* Screen content */}
            <div className="bg-white rounded-xl overflow-hidden shadow-2xl relative">
              {/* Browser bar */}
              <div className="h-8 bg-gradient-to-r from-gray-100 to-gray-200 flex items-center px-4 gap-2 border-b border-gray-300">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500 shadow-sm animate-pulse"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500 shadow-sm animate-pulse" style={{ animationDelay: "0.2s" }}></div>
                  <div className="w-3 h-3 rounded-full bg-green-500 shadow-sm animate-pulse" style={{ animationDelay: "0.4s" }}></div>
                </div>
                <div className="flex-1 ml-4 h-5 bg-white rounded-md px-3 flex items-center text-xs text-gray-400">
                  natalcolorkids.com
                </div>
              </div>
              
              {/* Image content */}
              <div className="relative">
                <img src={image} alt={alt} className="w-full h-auto" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
            
            {/* Screen reflection */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent rounded-3xl pointer-events-none"></div>
          </div>
          
          {/* Monitor stand */}
          <div className="mx-auto w-32 h-4 bg-gradient-to-b from-gray-700 to-gray-800 rounded-b-lg shadow-lg mt-2"></div>
          <div className="mx-auto w-48 h-2 bg-gradient-to-b from-gray-800 to-gray-900 rounded-full shadow-xl mt-1"></div>
        </div>
        
        {/* Glow effect */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10"></div>
      </div>
    );
  }

  return (
    <div className="relative group animate-fade-in max-w-[320px] mx-auto">
      {/* Phone body */}
      <div className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 rounded-[3rem] p-3 shadow-2xl border-8 border-gray-900 transform transition-all duration-500 hover:scale-105 hover:rotate-2">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-black rounded-b-3xl z-10 flex items-center justify-center gap-2">
          <div className="w-16 h-1 bg-gray-800 rounded-full"></div>
          <div className="w-2 h-2 bg-gray-800 rounded-full"></div>
        </div>
        
        {/* Screen */}
        <div className="bg-white rounded-[2.5rem] overflow-hidden shadow-2xl relative">
          {/* Status bar */}
          <div className="h-12 bg-gradient-to-b from-gray-50 to-white flex items-center justify-between px-6 pt-6 text-xs">
            <span className="text-gray-900 font-semibold">9:41</span>
            <div className="flex gap-1 items-center">
              <div className="w-4 h-3 border-2 border-gray-900 rounded-sm relative">
                <div className="absolute inset-0.5 bg-gray-900"></div>
              </div>
            </div>
          </div>
          
          {/* Content */}
          <div className="relative">
            <img src={image} alt={alt} className="w-full h-auto" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        </div>
        
        {/* Screen reflection */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent rounded-[3rem] pointer-events-none"></div>
        
        {/* Side buttons */}
        <div className="absolute right-0 top-24 w-1 h-12 bg-gray-700 rounded-l-lg shadow-inner"></div>
        <div className="absolute right-0 top-40 w-1 h-16 bg-gray-700 rounded-l-lg shadow-inner"></div>
        <div className="absolute left-0 top-32 w-1 h-8 bg-gray-700 rounded-r-lg shadow-inner"></div>
      </div>
      
      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-secondary/30 via-transparent to-transparent rounded-[3rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10"></div>
    </div>
  );
};
