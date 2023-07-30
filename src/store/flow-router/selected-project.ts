import type{ Project } from '@prisma/client';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

// Define the possible values for the 'view' property
export type ViewStateValues = 'MID' | 'FLOW' | 'CHAT';

// Define the reducer type with its properties and methods
type Reducer = {
  project: Project | null;
  setProject : (input : {project : Project}) => void ,
  viewState : ViewStateValues ,
  setViewState : (viewState : ViewStateValues) => void ,
};

// Create and export the LayoutReducer using zustand's 'create' function
export const ProjectReducer = create<Reducer, [["zustand/persist", unknown]]>(
  // Wrap the reducer in a 'persist' middleware to store the state in sessionStorage
  persist(
    // The state and actions of the reducer
    (set) => ({
      // Initial state
      project: null, // Default layout value is "null"
      viewState : 'MID',
    
      setProject: (input: {
        project: Project,
      }) => set({
        project: input.project,
      }),
      setViewState: (
        viewState: ViewStateValues,
      ) => set({
        viewState: viewState,
      }),
    }),

    // Configuration options for the 'persist' middleware
    {
      name: 'prject-store-value-abdullah-persist', // Name for identifying the persisted data
      storage: createJSONStorage(() => sessionStorage), // Store data in sessionStorage using JSON format
    }
  )
);
