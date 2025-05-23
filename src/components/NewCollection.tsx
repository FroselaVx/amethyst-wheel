import Image from "./Image";
import Path from "../assets/img/path.png";

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
    </div>
  );
}
