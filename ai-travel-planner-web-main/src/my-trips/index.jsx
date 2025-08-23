import { db } from '@/service/firebaseConfig';
import { collection, getDocs, query, where } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import UserTripCardItem from './components/UserTripCardItem';

function MyTrips() {

    const navigate = useNavigate();
    const [userTrips, setUserTrips] = useState([]);
    const [loading, setLoading] = useState(true); // Track loading state

    useEffect(() => {
        GetUserTrips();
    }, []);

    /**
     * Used to get All User Trips
     * @returns 
     */
    const GetUserTrips = async () => {
        const user = JSON.parse(localStorage.getItem('user'));
        
        if (!user) {
            navigate('/');
            return;
        }

        const q = query(collection(db, 'AITrips'), where('userEmail', '==', user?.email));
        const querySnapshot = await getDocs(q);

        setUserTrips([]);
        querySnapshot.forEach((doc) => {
            console.log(doc.id, " => ", doc.data());
            setUserTrips(prevVal => [...prevVal, doc.data()]);
        });

        setLoading(false); // Set loading to false after data is fetched
    };

    return (
        <div className='sm:px-10 md:px-32 lg:px-56 xl:px-72 px-5 mt-10'>
            <h2 className='font-bold text-3xl'>My Trips</h2>

            <div className='grid grid-cols-2 mt-10 md:grid-cols-3 gap-7'>
                {/* If loading, show skeletons, otherwise show the trips */}
                {loading ? (
                    [1, 2, 3, 4, 5, 6].map((item, index) => (
                        <div key={index} className='h-[300px] w-full bg-slate-300 animate-pulse rounded-xl'></div>
                    ))
                ) : userTrips.length > 0 ? (
                    userTrips.map((trip, index) => (
                        <UserTripCardItem key={trip.id || index} trip={trip} />
                    ))
                ) : (
                    <div>No trips found</div> // If no trips are found
                )}
            </div>
        </div>
    );
}

export default MyTrips;
