import { Button } from '@/components/ui/button'
import { GetPlaceDetails } from '@/service/GlobalApi';
import React, { useEffect, useState } from 'react'
import { IoIosSend } from "react-icons/io";
// import { PHOTO_REF_URL } from '@/service/GlobalApi';
const PHOTO_REF_URL='https://places.googleapis.com/v1/{NAME}/media?maxHeightPx=1000&maxWidthPx=1000&key='+import.meta.env.VITE_GOOGLE_PLACE_API_KEY
function InfoSection({trip}) {

  const [PhotoUrl,setPhotoUrl]=useState();
  useEffect(()=>{
    trip&&GetPlacePhoto();
  },[trip])

  const GetPlacePhoto=async()=>{
    if (!trip?.userSelection?.location?.label) return;
    const data={
      textQuery:trip?.userSelection?.location?.label
    }
    await GetPlaceDetails(data).then(resp=>{
      const photos = resp?.data?.places?.[0]?.photos;
      const photoName = photos?.[3]?.name || photos?.[0]?.name;
      if (photoName) {
        const PhotoUrl=PHOTO_REF_URL.replace('{NAME}',photoName);
        setPhotoUrl(PhotoUrl);
      }
    }).catch(e => console.error("InfoSection Place API Error", e));
  }
  return (
    <div>
        <img src={PhotoUrl?PhotoUrl: '/placeholder.jpg'} className='h-[400px] w-full object-cover rounded-xl'/>

        <div className='flex justify-between items-center'>
            <div className='my-5 flex flex-col gap-3'>
                <h2 className='font-bold text-2xl'>{trip?.userSelection?.location?.label}</h2>
                <div className='flex gap-5'>
                    <h2 className='p-1 px-3 bg-gray-200 rounded-full text-gray-600 text-xs md:text-lg'>📅 {trip.userSelection?.noOfDays} Day</h2>
                    <h2 className='p-1 px-3 bg-gray-200 rounded-full text-gray-600 text-xs md:text-lg'>💰 {trip.userSelection?.budget} Budget</h2>
                    <h2 className='p-1 px-3 bg-gray-200 rounded-full text-gray-600 text-xs md:text-lg'>🥂 No. of Traveler: {trip.userSelection?.traveler} </h2>

                </div>
            </div>
            <Button><IoIosSend />
            </Button>
        </div>
    </div>
  )
}

export default InfoSection