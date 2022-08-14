import tt from "@tomtom-international/web-sdk-services";
import { useEffect, useState } from "react";

const useCalculateRoute = (startLatitude, startLongitude, destinationLatitude, destinationLongitude) => {
    const [distance, setDistance] = useState('');
    const [error, setError] = useState('');
    const [isPending, setIsPending] = useState(true)

    useEffect(() => {
      setError(false);
      setIsPending(true);

      tt.services
      .calculateRoute({
        key: "edMbjRo98PxkE9xKLYA13VOhwjtU2ZM8",
        locations: `${startLatitude},${startLongitude}:${destinationLatitude},${destinationLongitude}`
      })
      .then(function (routeData) {
       const data = routeData.toGeoJson();
       let meters = Math.round(data.features[0].properties.summary.lengthInMeters);
        if(meters > 1000){
            setDistance(Math.round(meters / 1000));
        } else {
            setDistance(Math.round(meters) / 1000);
        }
        setIsPending(false);
        setError(null);
      })
      .catch((err) => {
        setIsPending(false)
        setError(err)
      });
    }
  ,[startLatitude, startLongitude, destinationLatitude, destinationLongitude])

  return {distance, error, isPending}
};

  export default useCalculateRoute