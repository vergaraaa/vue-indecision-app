export interface ChatMessage {
  id: number;
  message: string;
  isMine: boolean;
  image?: string;
}
