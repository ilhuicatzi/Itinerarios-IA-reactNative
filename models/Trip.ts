import { Trip } from "@/types/tripTypes";

export const initialTrip: Trip = {
  selectPlace: {
    name: "",
    coordinates: {
      lat: 0,
      lng: 0,
    },
    photoReference: "",
    urlReference: "",
  },
  selectTraveler: {
    id: 0,
    title: "",
    description: "",
    icon: "",
    people: 0,
  },
  selectDate: {
    startDate: "",
    endDate: "",
    totalDays: 0,
  },
  selectBudget: {
    id: 0,
    title: "",
    description: "",
    icon: "",
    budget: 0,
  },
};
