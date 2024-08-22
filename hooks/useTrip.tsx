import { useContext } from 'react';
import { CreateTripContext } from '@/contexts/CreteTripContext';

export const useTrip = () => {
    const context = useContext(CreateTripContext);
    if (context === undefined)
      throw new Error("useTheme must be used within a ThemeProvider")
  
    return context;
  }
