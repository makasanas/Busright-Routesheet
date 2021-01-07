import { RouteId, RouteSnapshotId, SchoolId } from "../Identifiers";
import TimeOfDay from "../TimeOfDay";
import DBPath from "./DBPath";
import Stop, { StartEndLocation, Via } from "./Stop";
import { UserInfo } from "../Users/User";
import Polyline from "./Polyline";
import RouteStatus from "./RouteStatus";
import Timestamp from "../Timestamp";

export type RouteScheduleType = "morning" | "afternoon" | "late" | "trip" | "other";

export type VehicleType = "typeA" | "typeB" | "typeC" | "typeD" | "van" | "car";

export interface Vehicle {
  vehicleType?: VehicleType;
  capacity?: number;
}

export interface LinkedRouteIdentifier {
  schoolId: SchoolId;
  routeId: RouteId;
}

export interface SchedulePairRouteIdentifier {
  routeId: RouteId;
}

export interface LinkedRoutes {
  before?: LinkedRouteIdentifier;
  after?: LinkedRouteIdentifier;
}

export interface RouteMeta {
  id: RouteId;

  name: string;
  numberOfStops: number;
  scheduleType: RouteScheduleType;
  numberOfParents: number;
  numberOfStudents: number;

  status: RouteStatus;
  dbPath: DBPath;

  assignedDriver?: UserInfo;
  subDriver?: UserInfo;
  subDriverEndTimestamp?: Timestamp;

  startTime?: TimeOfDay;
  endTime?: TimeOfDay;

  startLocation?: StartEndLocation;
  endLocation?: StartEndLocation;

  vehicle?: Vehicle;
}

export default interface Route extends RouteMeta {
  stops: (Stop | Via)[];
  overviewPolyline: Polyline;
  schoolId: SchoolId;
  schoolName: string;
  notes?: string;
  notesLastEditedTimestamp?: Timestamp;
  notesLastEditedBy?: UserInfo;

  linkedRoutes?: LinkedRoutes;
  schedulePairRoute?: SchedulePairRouteIdentifier;

  currentSnapshotId: RouteSnapshotId;

  timeCreated: Timestamp;
}
