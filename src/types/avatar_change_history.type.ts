import { AvatarResponse } from "./avatar.type";

interface AvatarChangeHistoryResponse {
  id: number;
  avatar: AvatarResponse;
  change_date: Date;
}

export type { AvatarChangeHistoryResponse };
