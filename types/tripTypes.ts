import { Point } from "react-native-google-places-autocomplete";

export type Trip = {
    selectPlace: {
      name: string;
      coordinates: Point | undefined;
      photoReference: string | undefined;
      urlReference: string | undefined;
    };
    selectTraveler: {
      id: number;
      title: string;
      description: string;
      icon: string;
      people: number;
    };
    selectDate: {
      startDate: string;
      endDate: string;
      totalDays: number;
    };
    selectBudget: {
      id: number;
      title: string;
      description: string;
      icon: string;
      budget: number;
    };
  };

  export type CreateTripContextType = {
    trip: Trip;
    setTrip: (trip: Trip) => void;
  };
  