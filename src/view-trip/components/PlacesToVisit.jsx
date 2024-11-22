import React from 'react';
import PlaceCardItem from './PlaceCardItem';

function PlacesToVisit({ trip }) {
  if (!trip?.tripData?.itinerary) {
    return <div>No itinerary data available.</div>;
  }

  return (
    <div>
      <h2 className="font-bold text-lg">Places to Visit</h2>

      <div>
        {Object.keys(trip.tripData.itinerary).map((daykey) => {
          const dayPlan = trip.tripData.itinerary[daykey]?.plan;

          return (
            <div key={daykey} className="mt-5">
              <h2 className="font-bold text-lg">{daykey}</h2>
              <div className="grid md:grid-cols-2 gap-5">
                {Array.isArray(dayPlan) && dayPlan.map((place, placeIndex) => (
                  <div key={placeIndex}>
                    <h2 className="font-medium text-sm text-blue-600">{place.visitTime}</h2>
                    <PlaceCardItem place={place} />
                  </div>
                ))}
                {!Array.isArray(dayPlan) && (
                  <p className="text-gray-500">{dayPlan}</p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default PlacesToVisit;
