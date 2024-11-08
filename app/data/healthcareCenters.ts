import { HealthcareCenter } from "../types/location";

export const healthcareCenters: HealthcareCenter[] = [
  {
    id: 1,
    name: "Cairo Medical Center",
    city: "Cairo",
    address: "15 Kasr Al Aini Street, Garden City",
    phone: "+20 2 2789 5642",
    email: "care@cairomedical.com",
    hours: "8:00 AM - 10:00 PM",
    specialties: ["Emergency Care", "Surgery", "Cardiology"],
    coordinates: { lat: 30.0444, lng: 31.2357 },
  },
  {
    id: 2,
    name: "Alexandria Healthcare Hub",
    city: "Alexandria",
    address: "238 El-Gaish Road, Sporting",
    phone: "+20 3 4876 9321",
    email: "patient@alexhealthcare.com",
    hours: "8:00 AM - 10:00 PM",
    specialties: ["Pediatrics", "Orthopedics", "Neurology"],
    coordinates: { lat: 31.2001, lng: 29.9187 },
  },
  {
    id: 3,
    name: "Giza Medical Complex",
    city: "Giza",
    address: "42 Pyramids Avenue, Dokki",
    phone: "+20 2 3749 8521",
    email: "info@gizamedical.com",
    hours: "8:00 AM - 10:00 PM",
    specialties: ["Oncology", "Internal Medicine", "Radiology"],
    coordinates: { lat: 30.0131, lng: 31.2089 },
  },
];
