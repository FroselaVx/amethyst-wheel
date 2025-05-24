import {
  Introduction,
  MarginWrapper,
  NoMarginWrapper,
  Products,
} from "@/components";
import BestSeller from "@/components/BestSeller";
import NewCollection from "@/components/NewCollection";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <>
      <MarginWrapper>
        <ScrollReveal direction="down">
          <Introduction />
        </ScrollReveal>
        <ScrollReveal direction="down">
          <NewCollection />
        </ScrollReveal>
        <ScrollReveal direction="down">
          <BestSeller />
        </ScrollReveal>
      </MarginWrapper>
      <NoMarginWrapper>
        <Products />
      </NoMarginWrapper>
    </>
  );
}
