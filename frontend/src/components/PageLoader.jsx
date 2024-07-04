import React from "react";

const PageLoader = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-white z-50">
      <div className="flex space-x-4">
        <div className="w-8 h-8 bg-blue-500 rounded-full animate-bounce"></div>
        <div className="w-8 h-8 bg-blue-500 rounded-full animate-bounce animation-delay-200"></div>
        <div className="w-8 h-8 bg-blue-500 rounded-full animate-bounce animation-delay-400"></div>
      </div>
    </div>
  );
};

export default PageLoader;
