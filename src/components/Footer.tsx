import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import {
  Instagram,
  Mail,
  Phone,
  MapPin,
  Facebook,
  DoorOpen,
} from "lucide-react";
import AmethystLogo from "../assets/img/LogoAmethyst.png";
import Image from "./Image";

export default function Component() {
  return (
    <footer className="bg-white text-slate-600">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Image
                className="w-20 h-20"
                logo={AmethystLogo}
                fallback="Amethyst"
              />
              <span className="text-primary font-bold text-3xl font-['Frank_Ruhl_Libre']">
                Amethyst Wheels
              </span>
            </div>
            <div className="ml-4">
              <p className="text-sm leading-relaxed text-start text-balance mb-2">
                Loved for its dreamy amethyst hue and effortlessly smooth ride.
                Its elegant design and vibrant color have sparked a trend among
                riders who value both style and comfort. More than just a bike,
                it's become a symbol of graceful, everyday adventure.
              </p>
              <div className="flex space-x-4">
                <Button
                  variant="white"
                  size="icon"
                  className="hover:bg-slate-100 hover:text-slate-900"
                >
                  <Facebook className="h-5 w-5" />
                </Button>

                <Button
                  variant="white"
                  size="icon"
                  className="hover:bg-slate-100 hover:text-slate-900"
                >
                  <Instagram className="h-5 w-5" />
                </Button>
                <Button
                  variant="white"
                  size="icon"
                  className="hover:bg-slate-100 hover:text-slate-900"
                >
                  <Phone className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-slate-900 font-semibold text-lg">
              Stay Updated
            </h3>
            <p className="text-sm">
              Subscribe to our newsletter for the latest updates and exclusive
              content.
            </p>
            <div className="space-y-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-slate-50 border-slate-200 text-slate-900 placeholder:text-slate-500 focus:border-[#54297B]"
              />
              <Button className="w-full bg-[#54297B] hover:bg-[#54297B]/90 text-white">
                Subscribe
                <Mail className="h-4 w-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>

        <Separator className="bg-slate-200 mb-8" />

        {/* Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center">
              <Mail className="h-5 w-5 text-[#54297B]" />
            </div>
            <div>
              <p className="text-sm font-medium text-slate-900">Email</p>
              <p className="text-sm">Amethyst@amethyst.com</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center">
              <DoorOpen className="h-5 w-5 text-[#54297B]" />
            </div>
            <div>
              <p className="text-sm font-medium text-slate-900">Open</p>
              <p className="text-sm">Monday - Sunday 7.AM - 3.PM</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center">
              <MapPin className="h-5 w-5 text-[#54297B]" />
            </div>
            <div>
              <p className="text-sm font-medium text-slate-900">Address</p>
              <p className="text-sm">
                Brompton C-Line 12-Speed Amethyst Lacquer
              </p>
            </div>
          </div>
        </div>

        <Separator className="bg-slate-200 mb-6" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm">© 2025 Amethyst. All rights reserved.</p>
          <div className="flex items-center space-x-6">
            <div className="text-sm hover:text-slate-900 transition-colors duration-200">
              Made with 🤍 by{" "}
              <span className="text-primary font-bold">Vivian Xu</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
