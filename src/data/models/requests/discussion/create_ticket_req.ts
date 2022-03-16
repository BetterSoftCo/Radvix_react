export interface CreateTicketReq {
  categoryId: number;
  subject: string;
  priority: number;
  userId: string;
  message: string;
}
