import ContainerBlock from "../components/ContainerBlock";
import MainPageMidSection from "./MainPageMidSection";
import LatestCode from "./LatestCode";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rahul Agarwal - Developer, DSA Expert and Content Creator",
  description: `I've been developing websites for 4 years straight. Get in touch with me to know more.`,
};

export default function Home() {
  return (
    <ContainerBlock>
      <MainPageMidSection />
      <LatestCode />
    </ContainerBlock>
  );
}
