import { StopId } from "../Identifiers";
import Timestamp from "../Timestamp";

export default interface StopUpdate {
  stopId: StopId;
  stopNumber: number;
  timestamp: Timestamp;
  skipped: boolean;
}
