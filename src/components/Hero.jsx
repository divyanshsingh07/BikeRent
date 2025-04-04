import { Button } from './ui/button'

const Hero = () => {
  const scrollToBikes = (e) => {
    e.preventDefault();
    const bikesSection = document.getElementById('bikes');
    if (bikesSection) {
      bikesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-900 dark:to-blue-950 pt-16">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/40 dark:bg-black/60"></div>
      
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Rent Your Perfect Ride
          </h1>
          <p className="mt-6 text-xl text-blue-100 dark:text-blue-200 max-w-3xl mx-auto">
            Discover our premium collection of bikes. From mountain bikes to electric bikes, 
            we have the perfect ride for your next adventure.
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <Button 
              size="lg" 
              className="bg-white text-blue-600 hover:bg-blue-50 dark:bg-blue-100 dark:text-blue-900 dark:hover:bg-blue-200"
              onClick={scrollToBikes}
            >
              Browse Bikes
            </Button>
           
          </div>
        </div>

        {/* Feature highlights */}
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="bg-white/10 dark:bg-white/5 backdrop-blur-sm rounded-lg p-6">
            <div className="text-white text-center">
              <h3 className="text-lg font-semibold">Wide Selection</h3>
              <p className="mt-2 text-blue-100 dark:text-blue-200">Choose from our extensive collection of bikes</p>
            </div>
          </div>
          <div className="bg-white/10 dark:bg-white/5 backdrop-blur-sm rounded-lg p-6">
            <div className="text-white text-center">
              <h3 className="text-lg font-semibold">Flexible Rental</h3>
              <p className="mt-2 text-blue-100 dark:text-blue-200">Rent by hour, day, or week</p>
            </div>
          </div>
          <div className="bg-white/10 dark:bg-white/5 backdrop-blur-sm rounded-lg p-6">
            <div className="text-white text-center">
              <h3 className="text-lg font-semibold">Easy Booking</h3>
              <p className="mt-2 text-blue-100 dark:text-blue-200">Book online and pick up in minutes</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero 