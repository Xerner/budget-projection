import { DateTime } from "luxon";
import { Enum } from "../../../types/Enum";

export interface INotification<TNotificationType extends Enum> {
  /** Any generic indentifier that this notification can be indentified by */
  id: string;
  title: string;
  type: TNotificationType;
  message: string;
  timestamp: DateTime;
}
