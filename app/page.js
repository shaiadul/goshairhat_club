import Marquee from "@/components/marquee/index.jsx";
import { Banner } from "../components/banner/index.jsx";
import Chairman from "@/components/chairman/index.jsx";
import Latter from "@/components/spech/index.jsx";
import Inspector from "@/components/inspector/index.jsx";
import Members from "@/components/members/index.jsx";
import Action from "@/components/action/index.jsx";
import Mass from "@/components/mass/index.jsx";

export default function Home() {
  return (
    <section>
      <Banner />
      <Marquee />
      <Chairman/>
      <Latter/>
      <Inspector/>
      <Members/>
      <Mass />
      <Action/>
    </section>
  );
}
