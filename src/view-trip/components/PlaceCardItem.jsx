import { Button } from '@/components/ui/button'
import { GetPlaceDetails, PHOTO_REF_URL } from '@/service/GlobalApi';
import React, { useEffect, useState } from 'react'
import { FaMapLocationDot } from "react-icons/fa6";
import { Link } from 'react-router-dom';

function PlaceCardItem({place}) {

  const [PhotoUrl,setPhotoUrl]=useState();
  useEffect(()=>{
    place&&GetPlacePhoto();
  },[place])

  const GetPlacePhoto=async()=>{
    if (!place?.placeName) return;
    const data={
      textQuery:place.placeName
    }
    await GetPlaceDetails(data).then(resp=>{
      const photos = resp?.data?.places?.[0]?.photos;
      const photoName = photos?.[3]?.name || photos?.[0]?.name;
      if (photoName) {
        const PhotoUrl=PHOTO_REF_URL.replace('{NAME}',photoName);
        setPhotoUrl(PhotoUrl);
      }
    }).catch(e => console.error("PlaceCard API Error", e));
  }

  return (
    <Link to={'https://www.google.com/maps/search/?api=1&query=' +place.placeName} target='_blank'>
    <div className='border rounded-xl p-3 mt-2 flex gap-5 hover:scale-105 transition-all hover:shadow-md cursor-pointer'>
        <img src={PhotoUrl?PhotoUrl: '/placeholder.jpg'}
        className='w-[100px] h-[100px] rounded-xl object-cover'
        />
        <div>
            <h2 className='font-bold text-lg'>{place.placeName}</h2>
            <p className=' text-gray-500'>{place.placeDetails}</p>
            <h2 className='font-medium mt-2 text-gray-700'>🕙 {place.travelTime}</h2>
            {/* <Button size="sm"><FaMapLocationDot /> </Button> */}
        </div>
    </div>
    </Link>
  )
}

export default PlaceCardItem