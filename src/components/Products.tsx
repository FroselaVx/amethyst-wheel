import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import Image from "./Image";
import CreamBike from "../assets/img/cream-bike.png";
import VioletBike from "../assets/img/violet-bike.png";
import PinkBike from "../assets/img/pink-bike.png";
import BlueBike from "../assets/img/blue-bike.png";
import ScrollReveal from "./ScrollReveal";
import { motion, AnimatePresence } from "framer-motion";
export default function Products() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };
  return (
    <div className="flex flex-1 justify-center w-screen min-w-full bg-[#1A0B2E] py-16 mt-[170px] overflow-x-hidden">
      <ScrollReveal direction="down">
        <div className="max-w-[1280px] bg-[#1A0B2E] py-16">
          <h1 className="text-[#DBC5F0] text-6xl mb-12 font-['Instrument_Serif'] font-black">
            Products
          </h1>

          <Tabs defaultValue="all" className="w-full max-w-[1280px] mx-auto">
            <TabsList className="w-[313px] mx-auto bg-transparent justify-center gap-8 h-12 mb-16">
              <TabsTrigger
                value="all"
                className="!bg-transparent text-gray-400 !border-none hover:text-white relative data-[state=active]:text-white hover:border-t-transparent focus:!outline after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-0.5 after:bg-gradient-to-r after:from-[#FACEEA] after:to-[#54297B] after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100 data-[state=active]:after:scale-x-100"
              >
                ALL
              </TabsTrigger>
              <TabsTrigger
                value="e-bike"
                className="!bg-transparent text-gray-400 !border-none hover:text-white relative data-[state=active]:text-white focus:!outline after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-0.5 after:bg-gradient-to-r after:from-[#FACEEA] after:to-[#54297B] after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100 data-[state=active]:after:scale-x-100"
              >
                E-Bike
              </TabsTrigger>
              <TabsTrigger
                value="mtb"
                className="!bg-transparent text-gray-400 !border-none hover:text-white relative data-[state=active]:text-white focus:!outline after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-0.5 after:bg-gradient-to-r after:from-[#FACEEA] after:to-[#54297B] after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100 data-[state=active]:after:scale-x-100"
              >
                MTB
              </TabsTrigger>
              <TabsTrigger
                value="urban"
                className="!bg-transparent text-gray-400 !border-none hover:text-white relative data-[state=active]:text-white focus:!outline-none after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-0.5 after:bg-gradient-to-r after:from-[#FACEEA] after:to-[#54297B] after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100 data-[state=active]:after:scale-x-100"
              >
                Urban
              </TabsTrigger>
            </TabsList>

            <AnimatePresence mode="wait">
              <TabsContent value="all" className="mt-0">
                <motion.div
                  className="grid grid-cols-4 gap-8"
                  variants={container}
                  initial="hidden"
                  animate="show"
                >
                  <motion.div variants={item}>
                    <Image
                      logo={CreamBike}
                      fallback="cream-bike"
                      className="w-full hover:scale-105 transition-transform duration-300"
                    />
                  </motion.div>
                  <motion.div variants={item}>
                    <Image
                      logo={VioletBike}
                      fallback="violet-bike"
                      className="w-full hover:scale-105 transition-transform duration-300"
                    />
                  </motion.div>
                  <motion.div variants={item}>
                    <Image
                      logo={PinkBike}
                      fallback="pink-bike"
                      className="w-full hover:scale-105 transition-transform duration-300"
                    />
                  </motion.div>
                  <motion.div variants={item}>
                    <Image
                      logo={BlueBike}
                      fallback="blue-bike"
                      className="w-full hover:scale-105 transition-transform duration-300"
                    />
                  </motion.div>
                </motion.div>
              </TabsContent>

              <TabsContent value="e-bike" className="mt-0">
                <motion.div
                  className="grid grid-cols-4 gap-8"
                  variants={container}
                  initial="hidden"
                  animate="show"
                >
                  <motion.div variants={item}>
                    <Image
                      logo={CreamBike}
                      fallback="cream-bike"
                      className="w-full hover:scale-105 transition-transform duration-300"
                    />
                  </motion.div>
                  <motion.div variants={item}>
                    <Image
                      logo={VioletBike}
                      fallback="violet-bike"
                      className="w-full hover:scale-105 transition-transform duration-300"
                    />
                  </motion.div>
                </motion.div>
              </TabsContent>

              <TabsContent value="mtb" className="mt-0">
                <motion.div
                  className="grid grid-cols-4 gap-8"
                  variants={container}
                  initial="hidden"
                  animate="show"
                >
                  <motion.div variants={item}>
                    <Image
                      logo={VioletBike}
                      fallback="violet-bike"
                      className="w-full hover:scale-105 transition-transform duration-300"
                    />
                  </motion.div>
                </motion.div>
              </TabsContent>

              <TabsContent value="urban" className="mt-0">
                <motion.div
                  className="grid grid-cols-4 gap-8"
                  variants={container}
                  initial="hidden"
                  animate="show"
                >
                  <motion.div variants={item}>
                    <Image
                      logo={PinkBike}
                      fallback="pink-bike"
                      className="w-full hover:scale-105 transition-transform duration-300"
                    />
                  </motion.div>
                </motion.div>
              </TabsContent>
            </AnimatePresence>
          </Tabs>

          <div className="flex justify-center gap-2 mt-8">
            {[1, 2, 3, 4, 5, 6].map((dot) => (
              <div
                key={dot}
                className="w-2 h-2 rounded-full bg-white opacity-50 hover:opacity-100 cursor-pointer"
              />
            ))}
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
}
