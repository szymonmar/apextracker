import Hero from '../../components/js/Hero';
import HeroPanel from '../../components/js/HeroPanel';
import PopularSeries from '../../components/js/PopularSeries';
import UpcomingCalendar from '../../components/js/UpcomingCalendar';
import RecentReplays from '../../components/js/RecentReplays';

function Home() {
  return (
    <div className="home-page">
      <Hero
        title="Grand Prix of Monaco / Lap 42/78"
        isLive={true}
        ctaText="Watch Live Now"
        ctaLink="/live"
      >
        <HeroPanel label="VER" value="+2.238s" />
        <HeroPanel label="LEC" value="Leader" />
        <HeroPanel label="Race Info" value="Monaco" />
      </Hero>
      <div className="app-shell">
        <PopularSeries />
        <UpcomingCalendar />
        <RecentReplays />
      </div>
    </div>
  );
}

export default Home;