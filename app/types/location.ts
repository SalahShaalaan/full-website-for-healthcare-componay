export interface HealthcareCenter {
  id: number;
  name: string;
  city: string;
  address: string;
  phone: string;
  email: string;
  hours: string;
  specialties: string[];
  coordinates: {
    lat: number;
    lng: number;
  };
}
