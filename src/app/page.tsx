import HeroSection from "@/components/sections/HeroSection";
import NowPlaying from "@/components/sections/Nowplaying";
import FeatThisWeek from "@/components/sections/FeatThisWeek";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <FeatThisWeek />
      <NowPlaying />
    </div>
  );
}
