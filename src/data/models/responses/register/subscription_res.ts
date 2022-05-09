export interface SubscriptionRes {
  status: number;
  result: SubscriptionResResult[];
  message: string;
}

export interface SubscriptionResResult {
  id: number;
  title: string;
  teamCount: number;
  memberCount: number;
  researchPerYear: number;
  laboratoryCount: number;
  equipmentPerLaboratory: number;
  storage: number;
  isGanttChartAllowed: boolean;
  isDiscussionPanelAllowed: boolean;
  isPublicationOrganizerAllowed: boolean;
  isExpenseManagerAllowed: boolean;
  price: number;
}
