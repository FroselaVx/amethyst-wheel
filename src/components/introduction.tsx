import Image from "./Image";
import Logo from "../assets/img/LogoAmethyst.png";
import { Button } from "./ui/button";

export default function Introduction() {
  return (
    <div className="px-16">
      <div className="w-full flex flex-row justify-between items-center mb-[40px]">
        <div>
          <h1
            style={{ color: "#54297B", fontSize: "64px", textAlign: "left" }}
            className="w-[309px] h-auto"
          >
            Roll with elegance. Ride with Amethyst.
          </h1>
        </div>

        <Image logo={Logo} fallback="amethyst" />
      </div>
      <div className="flex">
        <Button
          style={{
            backgroundColor: "#000000",
            color: "#c5b3e1",
            width: "275px",
            height: "63px",
            fontSize: "28px",
          }}
          variant="outline"
          className="flex items-center justify-center"
        >
          Shop Now
        </Button>
      </div>
    </div>
  );
}
