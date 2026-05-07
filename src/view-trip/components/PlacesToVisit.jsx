import React from 'react';
import PlaceCardItem from './PlaceCardItem';

function PlacesToVisit({ trip }) {
  if (!trip?.tripData?.itinerary) {
    return <div>No itinerary data available.</div>;
  }

  const getNormalizedItinerary = (itineraryData) => {
    let days = [];

    const extractPlan = (dayData) => {
      if (Array.isArray(dayData)) return dayData;
      if (typeof dayData === 'object' && dayData !== null) {
        return dayData.activities || dayData.plan || dayData.places || [];
      }
      return [];
    };
    
    if (Array.isArray(itineraryData)) {
      // Check if it's just a flat array of places
      if (itineraryData.length > 0 && itineraryData[0].placeName) {
         return [{ dayName: "Trip Plan", plan: itineraryData }];
      }

      itineraryData.forEach((item, index) => {
        if (item.activities && Array.isArray(item.activities)) {
          days.push({ dayName: item.day ? `Day ${item.day}` : `Day ${index + 1}`, plan: item.activities });
        } else if (item.plan && Array.isArray(item.plan)) {
          days.push({ dayName: item.day ? `Day ${item.day}` : `Day ${index + 1}`, plan: item.plan });
        } else {
          Object.keys(item).forEach(key => {
            if (key.toLowerCase().startsWith('day')) {
              days.push({ dayName: key, plan: extractPlan(item[key]) });
            }
          });
        }
      });
    } else if (typeof itineraryData === 'object' && itineraryData !== null) {
      Object.keys(itineraryData).forEach(key => {
        if (key.toLowerCase().startsWith('day')) {
          days.push({ dayName: key, plan: extractPlan(itineraryData[key]) });
        }
      });
    }
    
    // Sort days numerically if possible
    days.sort((a, b) => {
      const numA = parseInt(a.dayName.replace(/\D/g, '')) || 0;
      const numB = parseInt(b.dayName.replace(/\D/g, '')) || 0;
      return numA - numB;
    });

    return days;
  };

  const normalizedDays = getNormalizedItinerary(trip.tripData.itinerary);

  return (
    <div>
      <h2 className="font-bold text-lg">Places to Visit</h2>

      <div>
        {normalizedDays.map((dayItem, index) => (
          <div key={index} className="mt-5">
            <h2 className="font-bold text-lg capitalize">{dayItem.dayName}</h2>
            <div className="grid md:grid-cols-2 gap-5">
              {Array.isArray(dayItem.plan) && dayItem.plan.map((place, placeIndex) => (
                <div key={placeIndex}>
                  <h2 className="font-medium text-sm text-blue-600">{place.visitTime || place.bestTimeToVisit || place.time}</h2>
                  <PlaceCardItem place={place} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PlacesToVisit;
