import { AvatarResponseDTO } from "./avatar.type";

interface AvatarChangeHistoryResponseDTO {
  id: number;
  avatar: AvatarResponseDTO;
  change_date: Date;
}

export type { AvatarChangeHistoryResponseDTO };
