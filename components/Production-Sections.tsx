import React from "react";
import { Button } from "./ui/button";
import { ChevronLeft } from "lucide-react";

function ProductionSection({ dictionary, direction }: any) {
  return (
    <div
      className="my-32 w-full px-5 rounded-xl relative bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: "url('./png/fo1.png')" }}
    >
      <div className="grid items-center text-white lg:grid-cols-2 grid-cols-1 gap-24 relative z-10 lg:py-0 py-5  px-4">
        <div className={direction === "rtl" ? "text-right " : "text-left "}>
          <h2 className="text-3xl leading-[1.9]  md:text-[32px]  font-bold mb-4">
            {dictionary.Production.ProductionTitle}
          </h2>
          <p className="mb-6">
            {dictionary.Production.ProductionDes}
          </p>
          <Button
            className="relative overflow-hidden group transition-all duration-300 bg-[#6C31FF] md:flex  py-6 px-6 hover:bg-[#5a29d4] text-white"
            size="sm"
          >
            <span className="flex items-center text-sm">
              <span className="absolute bottom-[80px] left-1/2 transform -translate-x-1/2 text-lg text-base-black w-full font-semibold transition-all duration-500 group-hover:bottom-[-30px] text-center">
                {dictionary.navbar.startNow}
              </span>

              {/* Main text */}
              <span className="text-[16px] text-base-black font-medium leading-[160%]">
                {dictionary.navbar.startNow}
              </span>

              <ChevronLeft className="ms-1 h-4 w-4" />
            </span>
          </Button>
        </div>
        <div>
          <img src="/png/fo2.png" alt="Feature" />
        </div>
      </div>
    </div>
  );
}

export default ProductionSection;
