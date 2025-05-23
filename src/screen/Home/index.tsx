import { Introduction } from "@/components";
import BestSeller from "@/components/BestSeller";
import NewCollection from "@/components/NewCollection";

export default function Home() {
  return (
    <>
      <Introduction />
      <NewCollection />
      <BestSeller />
    </>
  );
}
