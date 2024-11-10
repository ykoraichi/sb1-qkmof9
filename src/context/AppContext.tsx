import React, { createContext, useContext, useReducer } from 'react';
import { Equipment, MaintenanceRecord, CalibrationRecord, User } from '../types';

interface AppState {
  equipment: Equipment[];
  maintenanceRecords: MaintenanceRecord[];
  calibrationRecords: CalibrationRecord[];
  users: User[];
  currentUser: User | null;
}

type Action =
  | { type: 'ADD_EQUIPMENT'; payload: Equipment }
  | { type: 'UPDATE_EQUIPMENT'; payload: Equipment }
  | { type: 'ADD_MAINTENANCE'; payload: MaintenanceRecord }
  | { type: 'ADD_CALIBRATION'; payload: CalibrationRecord }
  | { type: 'SET_CURRENT_USER'; payload: User };

const initialState: AppState = {
  equipment: [],
  maintenanceRecords: [],
  calibrationRecords: [],
  users: [],
  currentUser: null,
};

const AppContext = createContext<{
  state: AppState;
  dispatch: React.Dispatch<Action>;
}>({
  state: initialState,
  dispatch: () => null,
});

function appReducer(state: AppState, action: Action): AppState {
  switch (action.type) {
    case 'ADD_EQUIPMENT':
      return {
        ...state,
        equipment: [...state.equipment, action.payload],
      };
    case 'UPDATE_EQUIPMENT':
      return {
        ...state,
        equipment: state.equipment.map((eq) =>
          eq.id === action.payload.id ? action.payload : eq
        ),
      };
    case 'ADD_MAINTENANCE':
      return {
        ...state,
        maintenanceRecords: [...state.maintenanceRecords, action.payload],
      };
    case 'ADD_CALIBRATION':
      return {
        ...state,
        calibrationRecords: [...state.calibrationRecords, action.payload],
      };
    case 'SET_CURRENT_USER':
      return {
        ...state,
        currentUser: action.payload,
      };
    default:
      return state;
  }
}

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}