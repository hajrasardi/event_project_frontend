import React from "react";

const HeroInfo = () => {
  return (
    <div className="sm:absolute bottom-0 left-0 sm:bg-slate-700/75 sm:text-white grid sm:grid-cols-3 w-full text-center h-56 items-center bg-transparent text-slate-700 sm:mt-0 mt-16 grid-cols-2 sm:gap-0 gap-7">
      <div>
        <p className="text-5xl font-bold">10+</p>
        <h2 className="mt-3 text-xl">Tahun Pelayanan</h2>
      </div>
      <div>
        <p className="text-5xl font-bold">15+</p>
        <h2 className="mt-3 text-xl">Mitra</h2>
      </div>
      <div>
        <p className="text-5xl font-bold">200+</p>
        <h2 className="mt-3 text-xl">Armada</h2>
      </div>
    </div>
  );
};

export default HeroInfo;
