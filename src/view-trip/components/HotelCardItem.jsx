import { GetPlaceDetails, PHOTO_REF_URL } from '@/service/GlobalApi';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function HotelCardItem({hotel}) {
    const [PhotoUrl,setPhotoUrl]=useState();
  useEffect(()=>{
    hotel&&GetPlacePhoto();
  },[hotel])

  const GetPlacePhoto=async()=>{
    if (!hotel?.hotelName) return;
    const data={
      textQuery:hotel?.hotelName
    }
    await GetPlaceDetails(data).then(resp=>{
      const photos = resp?.data?.places?.[0]?.photos;
      const photoName = photos?.[3]?.name || photos?.[0]?.name;
      if (photoName) {
        const PhotoUrl=PHOTO_REF_URL.replace('{NAME}',photoName);
        setPhotoUrl(PhotoUrl);
      }
    }).catch(e => console.error("HotelCard Place API Error", e));
  }
  return (
<Link to={'https://www.google.com/maps/search/?api=1&query=' +hotel.hotelName+","+hotel?.hotelAddress} target='_blank'>
               <div className='hover:scale-105 transition-all cursor-pointer'>
                <img src={PhotoUrl?PhotoUrl: '/placeholder.jpg'} className='rounded-xl h-[250px] w-full' />
                <div className='my-2 flex flex-col gap-2'>
                    <h2 className='font-medium'>{hotel?.hotelName}</h2>
                    <h2 className='text-xs text-gray-800'>📍 {hotel?.hotelAddress}</h2>
                    <h2 className='text-sm'>💵 {typeof hotel?.price === 'object' ? `$${hotel.price?.min} - $${hotel.price?.max}` : hotel?.price || 'Price information not available'}</h2>
                    <h2 className='text-sm'>⭐ {hotel?.rating}</h2>
                </div>
               </div> 
               </Link>  )
}

export default HotelCardItem