export interface EditEquipmentReq {
  id: number;
  title: string;
  description: string;
  manufacturer: string;
  model: string;
  technicianName: string;
  technicianEmail: string;
  technicianPhone: string;
  status: number;
  addedLaboratoriesId: number[];
  removedLaboratoriesId: number[];
  removedMedias: number[];
}
