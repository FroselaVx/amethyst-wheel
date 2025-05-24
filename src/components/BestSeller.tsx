import Image from "./Image";
import DarkPurp from "../assets/img/dark-purp.png";

export default function BestSeller() {
  return (
    <div>
      <div className="flex flex-row max-w-[1280px] w-full mt-[220px]">
        <Image
          logo={DarkPurp}
          fallback="dark-purp"
          style={{ width: "600px", height: "600px" }}
        />

        <div className="flex-1 flex items-start pl-8 flex-col ">
          <div className="text-primary font-bold text-[68px] leading-tight text-left mb-4 font-['Frank_Ruhl_Libre']">
            Best Seller
          </div>
          <div className="text-primary font-bold text-[68px] leading-tight text-left font-['Frank_Ruhl_Libre']">
            Since 2024
          </div>
          <p className="text-start text-[24px] text-[#4E1A47] w-[388px] mt-4 font-medium font-['Lateef']">
            Loved for its dreamy amethyst hue and effortlessly smooth ride. Its
            elegant design and vibrant color have sparked a trend among riders
            who value both style and comfort. More than just a bike, it's become
            a symbol of graceful, everyday adventure.
          </p>
        </div>
      </div>
      <div className="flex flex-1 justify-end">
        <div className="w-[850px] h-[250px] bg-[#F1E7F8] flex flex-row items-center justify-around px-4">
          <div>
            <div className="text-[48px] font-semibold font-['Frank_Ruhl_Libre']">
              2024
            </div>
            <div className="text-[32px] font-semibold font-['Frank_Ruhl_Libre']">
              All Founded
            </div>
          </div>
          <div className="w-px h-40 bg-black mx-4"></div>
          <div>
            <div className="text-[48px] font-semibold font-['Frank_Ruhl_Libre']">
              254+
            </div>
            <div className="text-[32px] font-semibold font-['Frank_Ruhl_Libre']">
              Product Sold
            </div>
          </div>
          <div className="w-px h-40 bg-black mx-4"></div>
          <div>
            <div className="text-[48px] font-semibold font-['Frank_Ruhl_Libre']">
              2024
            </div>
            <div className="text-[32px] font-semibold font-['Frank_Ruhl_Libre']">
              Best Review
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
