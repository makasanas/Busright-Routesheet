import { RouteSessionId, StopId } from "../Identifiers";
import Timestamp from "../Timestamp";
import Polyline from "./Polyline";
import StopUpdate from "./StopUpdate";
import LocationUpdate from "./LocationUpdate";

export interface StopEta {
  stopId: StopId;
  eta: Timestamp;
}

export interface StopItemEta {
  stopItem: "end";
  eta: Timestamp;
}

export type DeactReason = "manual" | "timeout";

export default interface RouteStatus {
  isActive: boolean;
  lastActive?: Timestamp;
  sessionId?: RouteSessionId;
  lastCompletedStop?: StopUpdate;
  lastLocation?: LocationUpdate;
  livePolyline?: Polyline;
  liveEtas?: (StopEta | StopItemEta)[];
  deactReason?: DeactReason;
}
