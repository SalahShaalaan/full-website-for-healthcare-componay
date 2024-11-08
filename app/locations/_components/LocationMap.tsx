import { useEffect, useRef } from "react";
import { Loader } from "@googlemaps/js-api-loader";
import { HealthcareCenter } from "@/app/types/location";

interface LocationMapProps {
  centers: HealthcareCenter[];
}

export default function LocationMap({ centers }: LocationMapProps) {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loader = new Loader({
      apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!,
      version: "weekly",
    });

    loader.load().then(() => {
      if (mapRef.current) {
        const map = new google.maps.Map(mapRef.current, {
          center: { lat: 30.0444, lng: 31.2357 },
          zoom: 8,
        });

        centers.forEach((center) => {
          const marker = new google.maps.Marker({
            position: {
              lat: center.coordinates.lat,
              lng: center.coordinates.lng,
            },
            map,
            title: center.name,
          });

          const infoWindow = new google.maps.InfoWindow({
            content: `
              <div class="p-3">
                <h3 class="font-bold text-lg">${center.name}</h3>
                <p>${center.address}</p>
                <p class="font-semibold mt-2">${center.phone}</p>
              </div>
            `,
          });

          marker.addListener("click", () => {
            infoWindow.open(map, marker);
          });
        });
      }
    });
  }, [centers]);

  return (
    <div
      ref={mapRef}
      className="w-full h-[600px] rounded-xl overflow-hidden shadow-lg"
    />
  );
}
