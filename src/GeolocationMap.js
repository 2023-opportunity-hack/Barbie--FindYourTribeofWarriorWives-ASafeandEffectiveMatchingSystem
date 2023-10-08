import React, { useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import { db } from './firebase';

mapboxgl.accessToken = 'pk.eyJ1IjoibWFkaW1xYWkiLCJhIjoiY2xuaGQwNzF2MTN5YTJ0cGR1d210OGx5OCJ9.r9PUimB4AYikXz78l20Qyw';

const GeolocationMap = () => {
  const [map, setMap] = useState(null);

  useEffect(() => {
    const fetchAndMarkGeolocation = async () => {
      try {
        const position = await getCurrentPosition();
        const { latitude, longitude } = position.coords;
        
        const map = new mapboxgl.Map({
          container: 'map',
          style: 'mapbox://styles/mapbox/streets-v11', // Replace with your preferred map style
          center: [longitude, latitude],
          zoom: 14,
        });
        
        new mapboxgl.Marker()
          .setLngLat([longitude, latitude])
          .addTo(map);
        
        setMap(map);
      } catch (error) {
        console.error('Error fetching geolocation:', error);
      }
    };

    fetchAndMarkGeolocation();
  }, []);

  useEffect(() => {
    // Fetch and display other people's locations from Firebase Firestore
    if (map) {
      const markersLayer = new mapboxgl.Marker();
      
      // Fetch locations from Firestore and add markers for each location
      const locationsCollection = db.collection('locations');
      locationsCollection.onSnapshot((snapshot) => {
        snapshot.docChanges().forEach((change) => {
          const location = change.doc.data();
          const { latitude, longitude } = location;
          
          const marker = new mapboxgl.Marker()
            .setLngLat([longitude, latitude])
            .addTo(map);
          
          markersLayer.addMarker(marker);
        });
      });
    }
  }, [map]);

  const getCurrentPosition = () =>
    new Promise((resolve, reject) => {
      if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(resolve, reject);
      } else {
        reject('Geolocation is not available.');
      }
    });

  return (
    <div id="map" style={{ width: '100%', height: '400px' }}>
      {/* The map will be rendered here */}
    </div>
  );
};

export default GeolocationMap;