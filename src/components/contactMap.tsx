import React from 'react';
import { APIProvider, Map, AdvancedMarker } from '@vis.gl/react-google-maps';

const ContactMap: React.FC = () => {
  const center = { lat: 35.6895, lng: 139.6917 }; // Tokyo coordinates

  return (
    <APIProvider apiKey="AIzaSyAelAc5ayKM_UIUs2i9Uc-DJkiXiISxZWM">
      <div style={{ height: '300px', width: '100%', borderRadius: '12px', overflow: 'hidden' }} className="mt-6 shadow-md">
        <Map
          defaultCenter={center}
          defaultZoom={14}
          style={{ height: '100%', width: '100%' }}
        >
          <AdvancedMarker position={center} title="Mewron Inc." />
        </Map>
      </div>
    </APIProvider>
  );
};

export default ContactMap;
