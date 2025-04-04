import { Button } from './ui/button'

const bikes = [
  {
    id: 1,
    name: 'Royal Enfield Classic 350',
    category: 'Cruiser',
    image: 'https://apnamechanic.com/blog/wp-content/uploads/2022/06/bullet-service-online-1024x683-1.jpg',
    price: {
      hourly: 100,
      daily: 1000,
      weekly: 3000
    },
    specs: {
      engine: '349cc',
      power: '20.2 bhp',
      mileage: '35 kmpl',
      fuel: 'Petrol'
    },
    description: 'The iconic Royal Enfield Classic 350 with its timeless design and thumping engine sound.'
  },
  {
    id: 2,
    name: 'Bajaj Pulsar NS200',
    category: 'Sports',
    image: 'https://imgd.aeplcdn.com/664x374/n/cw/ec/1/versions/bajaj-pulsar-220-standard1724756298897.jpg?q=80',
    price: {
      hourly: 100,
      daily: 1000,
      weekly: 3000
    },
    specs: {
      engine: '199.5cc',
      power: '24.5 bhp',
      mileage: '40 kmpl',
      fuel: 'Petrol'
    },
    description: 'A perfect blend of performance and style, the Pulsar NS200 is a favorite among young riders.'
  },
  {
    id: 3,
    name: 'TVS Apache RTR 160',
    category: 'Sports',
    image: 'https://cdn.bikedekho.com/processedimages/tvs/apache-160/650X420/apache-1606319c53d7f639.jpg?imwidth=400&impolicy=resize',
    price: {
      hourly: 100,
      daily: 1000,
      weekly: 3000
    },
    specs: {
      engine: '159.7cc',
      power: '16.04 bhp',
      mileage: '45 kmpl',
      fuel: 'Petrol'
    },
    description: 'The TVS Apache RTR 160 offers a perfect balance of performance and fuel efficiency.'
  },
  {
    id: 4,
    name: 'Hero Splendor Plus',
    category: 'Commuter',
    image: 'https://www.bajajmall.in/emistore/media/catalog/product/h/e/hero_splendor_plus_xtec_sparkling_beta_blue_1_2_4.jpeg',
    price: {
      hourly: 100,
      daily: 1000,
      weekly: 3000
    },
    specs: {
      engine: '97.2cc',
      power: '8.02 bhp',
      mileage: '80 kmpl',
      fuel: 'Petrol'
    },
    description: 'India\'s most trusted commuter bike, known for its reliability and fuel efficiency.'
  },
  {
    id: 5,
    name: 'KTM Duke 390',
    category: 'Sports',
    image: 'https://imgd.aeplcdn.com/227x128/n/cw/ec/129743/duke-200-right-front-three-quarter-2.jpeg?isig=0&q=80',
    price: {
      hourly: 100,
      daily: 1000,
      weekly: 3000
    },
    specs: {
      engine: '373.2cc',
      power: '43.5 bhp',
      mileage: '30 kmpl',
      fuel: 'Petrol'
    },
    description: 'The KTM Duke 390 is a performance-oriented bike with aggressive styling and powerful engine.'
  },
  {
    id: 6,
    name: 'Honda Activa 6G',
    category: 'Scooter',
    image: 'https://imgd.aeplcdn.com/664x374/n/bw/models/colors/honda-select-model-black-1674535477895.png?q=80',
    price: {
      hourly: 100,
      daily: 1000,
      weekly: 3000
    },
    specs: {
      engine: '109.51cc',
      power: '7.79 bhp',
      mileage: '45 kmpl',
      fuel: 'Petrol'
    },
    description: 'India\'s most popular scooter, known for its comfort, reliability, and fuel efficiency.'
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