export interface GetAllEquipment {
  status: number;
  result: GetAllEquipmentResult;
  message: string;
}

export interface GetAllEquipmentResult {
  equipments: Equipment[];
  count: number;
}

export interface Equipment {
  id: number;
  title: string;
  laboratories: Laboratory[];
  usersCount: number;
  status: number;
  allowedToEdit: boolean;
  image: string;
}

export interface Laboratory {
  id: number;
  title: string;
}
