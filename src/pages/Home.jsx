import Hero from '../components/Hero';
import Services from '../components/Services';
import BikesList from '../components/BikesList';

const Home = () => {
  return (
    <div className="pt-16">
      <Hero />
      <Services />
      <BikesList />
    </div>
  );
};

export default Home; 