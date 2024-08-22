import { createContext, useState } from "react";
import { CreateTripContextType } from "@/types/tripTypes";
import { initialTrip } from "@/models/Trip";

type CreateTripProviderProps = {
  children: React.ReactNode;
};

export const CreateTripContext = createContext<CreateTripContextType>({
  trip: initialTrip,
  setTrip: () => {},
});

export default function CreateTripProvider({ children }: CreateTripProviderProps) {
  const [tripData, setTripData] = useState(initialTrip);

  return (
    <CreateTripContext.Provider value={{
      trip: tripData,
      setTrip: setTripData,
    }}>
      {children}
    </CreateTripContext.Provider>
  );
}

