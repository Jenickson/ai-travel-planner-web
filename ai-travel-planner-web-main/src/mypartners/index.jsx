import { useEffect, useState } from 'react';
import PartnerCardItem from './components/partners';

// Move partner list here
const partners = [
  {
    name: 'Sky Scanner',
    logo: '/Skyscanner.jpg',
    link: 'https://www.skyscanner.co.in/',
  },
  {
    name: 'MakeMyTrip',
    logo: '/makemytrip.jpg',
    link: 'https://www.makemytrip.com/',
  },
  {
    name: 'Redbus',
    logo: '/Redbus.jpg',
    link: 'https://www.redbus.in/',
  },
  {
    name: 'Uber',
    logo: '/uber.jpg',
    link: 'https://www.uber.com/in/en/ride/',
  },
  {
    name: 'IRCTC',
    logo: '/Irctc.jpg',
    link: 'https://www.irctc.co.in/nget/train-search',
  },
  {
    name: 'Goibibo',
    logo: '/goibibo.jpg',
    link: 'https://www.goibibo.com/',
  },
];

function MyPartners() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    setTimeout(() => setLoading(false), 500); // Optional delay
  }, []);

  return (
    <div className="sm:px-10 md:px-32 lg:px-56 xl:px-72 px-5 mt-10">
      <h2 className="font-bold text-3xl">Our Booking Partners...!</h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-7 mt-10">
        {loading
          ? [1, 2, 3, 4, 5, 6].map((item, index) => (
              <div
                key={index}
                className="h-[150px] w-full bg-slate-300 animate-pulse rounded-xl"
              ></div>
            ))
          : partners.map((partner, index) => (
              <PartnerCardItem key={index} partner={partner} />
            ))}
      </div>
    </div>
  );
}

export default MyPartners;
