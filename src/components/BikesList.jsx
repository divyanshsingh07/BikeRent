import { Button } from './ui/button'

const bikes = [
  {
    id: 1,
    name: "Royal Enfield Classic 350",
    category: "Cruiser",
    image: "https://imgd.aeplcdn.com/1056x594/n/cw/ec/130591/classic-350-right-front-three-quarter-2.jpeg",
    price: {
      hourly: 500,
      daily: 2000,
      weekly: 10000
    },
    specs: {
      engine: "350cc",
      mileage: "35 kmpl",
      fuel: "Petrol",
      transmission: "Manual"
    },
    description: "Iconic Indian cruiser bike known for its thumping sound and comfortable ride."
  },
  {
    id: 2,
    name: "Bajaj Pulsar NS200",
    category: "Sports",
    image: "https://imgd.aeplcdn.com/1056x594/n/cw/ec/130591/classic-350-right-front-three-quarter-2.jpeg",
    price: {
      hourly: 400,
      daily: 1500,
      weekly: 7500
    },
    specs: {
      engine: "200cc",
      mileage: "40 kmpl",
      fuel: "Petrol",
      transmission: "Manual"
    },
    description: "Powerful sports bike with aggressive styling and excellent performance."
  },
  {
    id: 3,
    name: "TVS Apache RTR 160",
    category: "Street",
    image: "https://imgd.aeplcdn.com/1056x594/n/cw/ec/130591/classic-350-right-front-three-quarter-2.jpeg",
    price: {
      hourly: 300,
      daily: 1200,
      weekly: 6000
    },
    specs: {
      engine: "160cc",
      mileage: "45 kmpl",
      fuel: "Petrol",
      transmission: "Manual"
    },
    description: "Sporty street bike with excellent handling and fuel efficiency."
  },
  {
    id: 4,
    name: "Hero Splendor Plus",
    category: "Commuter",
    image: "https://imgd.aeplcdn.com/1056x594/n/cw/ec/130591/classic-350-right-front-three-quarter-2.jpeg",
    price: {
      hourly: 200,
      daily: 800,
      weekly: 4000
    },
    specs: {
      engine: "97.2cc",
      mileage: "80 kmpl",
      fuel: "Petrol",
      transmission: "Manual"
    },
    description: "India's most trusted commuter bike with excellent fuel efficiency."
  },
  {
    id: 5,
    name: "KTM Duke 390",
    category: "Adventure",
    image: "https://imgd.aeplcdn.com/1056x594/n/cw/ec/130591/classic-350-right-front-three-quarter-2.jpeg",
    price: {
      hourly: 600,
      daily: 2500,
      weekly: 12000
    },
    specs: {
      engine: "373cc",
      mileage: "30 kmpl",
      fuel: "Petrol",
      transmission: "Manual"
    },
    description: "High-performance adventure bike perfect for long rides and touring."
  },
  {
    id: 6,
    name: "Honda Activa 6G",
    category: "Scooter",
    image: "https://imgd.aeplcdn.com/1056x594/n/cw/ec/130591/classic-350-right-front-three-quarter-2.jpeg",
    price: {
      hourly: 150,
      daily: 600,
      weekly: 3000
    },
    specs: {
      engine: "109.51cc",
      mileage: "60 kmpl",
      fuel: "Petrol",
      transmission: "Automatic"
    },
    description: "India's most popular scooter with smooth ride and great mileage."
  }
];

const BikesList = () => {
  return (
    <section id="bikes" className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            Our Bike Collection
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Choose from our premium selection of bikes
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {bikes.map((bike) => (
            <div
              key={bike.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-48">
                <img
                  src={bike.image}
                  alt={bike.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                  {bike.category}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {bike.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {bike.description}
                </p>
                
                {/* Specifications */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {Object.entries(bike.specs).map(([key, value]) => (
                    <div key={key} className="text-sm">
                      <span className="font-medium text-gray-900 dark:text-white capitalize">{key}:</span>
                      <span className="ml-2 text-gray-600 dark:text-gray-300">{value}</span>
                    </div>
                  ))}
                </div>

                {/* Pricing */}
                <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Rental Rates</h4>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="text-sm text-gray-600 dark:text-gray-400">Hourly</div>
                      <div className="text-lg font-bold text-blue-600 dark:text-blue-400">₹{bike.price.hourly}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-gray-600 dark:text-gray-400">Daily</div>
                      <div className="text-lg font-bold text-blue-600 dark:text-blue-400">₹{bike.price.daily}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-gray-600 dark:text-gray-400">Weekly</div>
                      <div className="text-lg font-bold text-blue-600 dark:text-blue-400">₹{bike.price.weekly}</div>
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600">
                    Rent Now
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BikesList; 