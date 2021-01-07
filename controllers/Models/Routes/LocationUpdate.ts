import Coordinate from "../Coordinate";
import Timestamp from "../Timestamp";

export default interface LocationUpdate {
  coord: Coordinate;
  speed: number;
  bearing: number;
  timestamp: Timestamp;
}
