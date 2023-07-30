import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

// Define the possible values for the 'layout' property
export type layoutValues = 'BIG' | 'SMALL' | 'ICONS';

// Define the reducer type with its properties and methods
type Reducer = {
  layout: layoutValues;
  setLayout: (input: {
    layout: layoutValues;
  }) => void;
};

// Create and export the LayoutReducer using zustand's 'create' function
export const LayoutReducer = create<Reducer, [["zustand/persist", unknown]]>(
  // Wrap the reducer in a 'persist' middleware to store the state in sessionStorage
  persist(
    // The state and actions of the reducer
    (set) => ({
      // Initial state
      layout: "BIG", // Default layout value is "BIG"

      // Method to set the layout value
      setLayout: (input: {
        layout: layoutValues,
      }) => set({
        layout: input.layout,
      })
    }),

    // Configuration options for the 'persist' middleware
    {
      name: 'layout-store-value-persist', // Name for identifying the persisted data
      storage: createJSONStorage(() => sessionStorage), // Store data in sessionStorage using JSON format
    }
  )
);
