/**
 * v0 by Vercel.
 * @see https://v0.dev/t/FBccZ0IWtW0
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "@/components/ui/button";
import { Link } from "react-router";
import Image from "./Image";
import LogoAmethyst from "../assets/img/logo-amethyst-2.png";

export default function Header() {
  return (
    <div className="container mx-auto md:px-6 ">
      <header className="flex h-20 w-full shrink-0 items-center md:px-6">
        <Link to="#" className="mr-6 hidden lg:flex">
          <Image logo={LogoAmethyst} fallback="logo" className="w-80 h-80" />
        </Link>
        <div className="ml-auto flex gap-2 ">
          <Button
            variant="outline"
            className="justify-self-end px-2 py-1 text-xs w-[140px] h-[45px]"
            style={{ backgroundColor: "white", borderColor: "black" }}
          >
            Login
          </Button>
        </div>
      </header>
    </div>
  );
}
