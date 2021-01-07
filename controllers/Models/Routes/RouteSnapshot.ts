import Stop, { StartEndLocation, Via } from "./Stop";
import Polyline from "./Polyline";
import Timestamp from "../Timestamp";
import { RouteSnapshotId } from "../Identifiers";

export default interface RouteSnapshot {
  id: RouteSnapshotId;
  startLocation?: StartEndLocation;
  endLocation?: StartEndLocation;
  stops: (Stop | Via)[];
  overviewPolyline: Polyline;
  timeCreated: Timestamp;
}
