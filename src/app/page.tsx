import EventList from "@/components/event/EventList";
import Hero from "@/components/Hero";

const HomePage = () => {
  return (
    <main>
      <div>
        <Hero />
        <EventList />
      </div>
    </main>
  );
};

export default HomePage;