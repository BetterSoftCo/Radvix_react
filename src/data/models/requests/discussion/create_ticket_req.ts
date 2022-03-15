export interface CreateTicketReq {
  id: number;
  categoryId: number;
  subject: string;
  priority: number;
  userId: string;
  message: string;
}
