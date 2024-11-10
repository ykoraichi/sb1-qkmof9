export type MaintenanceType = 'preventive' | 'corrective';
export type EquipmentStatus = 'operational' | 'maintenance' | 'faulty' | 'calibration';
export type UserRole = 'admin' | 'technician' | 'supervisor';

export interface Equipment {
  id: string;
  type: string;
  model: string;
  serialNumber: string;
  location: string;
  purchaseDate: string;
  warrantyEnd: string;
  lastMaintenance: string;
  nextMaintenance: string;
  lastCalibration: string;
  nextCalibration: string;
  status: EquipmentStatus;
  specifications: Record<string, string>;
}

export interface MaintenanceRecord {
  id: string;
  equipmentId: string;
  type: MaintenanceType;
  date: string;
  technician: string;
  description: string;
  findings: string;
  actions: string;
  parts?: string[];
  nextScheduled?: string;
}

export interface User {
  id: string;
  name: string;
  role: UserRole;
  email: string;
}

export interface CalibrationRecord {
  id: string;
  equipmentId: string;
  date: string;
  technician: string;
  standard: string;
  results: Record<string, number>;
  certificateNumber: string;
  nextDue: string;
}