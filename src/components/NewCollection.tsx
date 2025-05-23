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
      <h1 className="bg-gradient-to-r from-[#FACEEA] to-[#54297B] bg-clip-text text-transparent font-bold text-4xl mt-[116px]">
        New Collection
      </h1>

      <div className="text-[#54297B]">and more achievements to come.</div>
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
