// app/routes/community/[communityId]/page.js

"use client"; // Mark this file as a Client Component

import { useEffect, useState } from 'react';

function CommunityPage() {
  const [communityId, setCommunityId] = useState('');
  const [communityData, setCommunityData] = useState(null);

  useEffect(() => {
    // Extract ID on component mount
    const extractedId = window.location.pathname.slice(11);
    setCommunityId(extractedId);

    // Optionally fetch community data based on ID (if needed)
    // ... your data fetching logic using communityId ...

  }, []);
  
  // useEffect(() => {
  //   // Extract community ID from URL pathname
  //   const url = window.location.pathname;
  //   const pathSegments = url.split('/');
  //   const potentialCommunityId = pathSegments[pathSegments.length - 1];

  //   // Validate potential ID to prevent errors
  //   if (/^\d+$/.test(potentialCommunityId)) { // Check if digits only
  //     setCommunityId(potentialCommunityId);
  //   } else {
  //     console.error('Invalid community ID format in URL');
  //     // Handle invalid ID (optional: redirect, display error message)
  //   }
  // }, []); // Empty dependency array to run only once on component mount

  // Now you can use `communityId` to fetch community data or perform other actions

  // useEffect(() => {
  //   // Fetch community data using communityId (if valid)
  //   if (communityId) {
  //     const fetchData = async () => {
  //       try {
  //         const response = await fetch(`/api/communities/${communityId}`);
  //         if (!response.ok) {
  //           throw new Error(`Failed to fetch community data: ${response.statusText}`);
  //         }
  //         const data = await response.json();
  //         setCommunityData(data);
  //       } catch (error) {
  //         console.error('Error fetching community data:', error);
  //         // Handle errors (optional: display error message)
  //       }
  //     };

  //     fetchData();
  //   }
  // }, [communityId]); // Re-run when communityId changes

  return (
    <div>
      {communityData ? (
        <>
          {/* Display fetched community data here */}
        </>
      ) : (
        <h1 className='text-2xl text-blue-600'>Community ID : {communityId}</h1>
      )}
    </div>
  );
}

export default CommunityPage;
