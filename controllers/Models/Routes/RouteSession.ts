import Timestamp from "../Timestamp";
import { DeactReason } from "./RouteStatus";
import { UserInfo } from "../Users/User";
import LocationUpdate from "./LocationUpdate";
import StopUpdate from "./StopUpdate";
import { RouteSessionId, RouteSnapshotId } from "../Identifiers";
import RouteSnapshot from "./RouteSnapshot";

export default interface RouteSession {
  id: RouteSessionId;
  driver: UserInfo;
  timeActivated: Timestamp;
  timeDeactivated?: Timestamp;
  deactReason?: DeactReason;
  points?: LocationUpdate[];
  stops?: StopUpdate[];

  snapshotId: RouteSnapshotId;
  snapshot?: RouteSnapshot;
}

export interface PolylinePoints {
  lat: number;
  lng: number;
  speed: number;
  timestamp: Timestamp;
}
