import About from "../components/Home/About";
import Banner from "../components/Home/Banner";
import Service from "../components/Home/Service";

const Home = () => {
  return (
    <main className="container mx-auto">
      <Banner />
      <About />
      <Service />
    </main>
  );
};

export default Home;
