export interface EquipmentCreateReq {
  title: string;
  manufacturer: string;
  model: string;
  description: string;
  status: number;
  technicianName: string;
  technicianEmail: string;
  technicianPhone: string;
  laboratoriesId: number[];
}
