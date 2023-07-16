import { Inter } from "next/font/google";
import Timeline from "../components/Timeline";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Timeline />
    </>
  );
}
