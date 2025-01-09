import React from "react";

const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-12 h-12 border-4 border-secundario border-dashed rounded-full animate-spin text-center text-bold text-3xl">SH</div>
    </div>
  );
};

export default LoadingSpinner;
