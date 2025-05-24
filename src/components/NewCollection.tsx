import Image from "./Image";
import Path from "../assets/img/path.png";
import GreenBike from "../assets/img/green-bike.png";
import WhiteBike from "../assets/img/white-bike.png";
import BlueBike from "../assets/img/blue-bike.png";

export default function NewCollection() {
  return (
    <div>
      <div className="mt-[64px] flex justify-center items-center">
        <Image logo={Path} fallback="" />
      </div>
      <div className="bg-gradient-to-r from-[#FACEEA] to-[#54297B] bg-clip-text text-transparent font-black text-[68px] mt-[116px] mb-[26px] font-['Frank_Ruhl_Libre']">
        New Collection
      </div>

      <div className="text-[#54297B] text-[24px] font-normal">
        and more achievements to come.
      </div>
      <div className="flex flex-row max-width-[1280px] justify-center">
        <Image
          logo={GreenBike}
          fallback="green-bike"
          style={{ width: "400px", height: "400px" }}
        />
        <Image
          logo={WhiteBike}
          fallback="white-bike"
          style={{ width: "400px", height: "400px" }}
        />
        <Image
          logo={BlueBike}
          fallback="blue-bike"
          style={{ width: "400px", height: "400px" }}
        />
      </div>
    </div>
  );
}
