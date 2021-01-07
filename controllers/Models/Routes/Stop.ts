import { StopId } from "../Identifiers";
import Address from "../Address";
import Coordinate from "../Coordinate";
import Timestamp from "../Timestamp";
import { UserInfo } from "../Users/User";

export interface StopItem {
  address: Address;
  coord: Coordinate;
}

export interface StartEndLocation extends StopItem {
  __typename?: "school" | "depot";
  name?: string;
}

interface StopInfo extends StopItem {
  stopId: StopId;
  latitude: number;
  longitude: number;
  notesLastEditedBy?: UserInfo;
  notesLastEditedTimestamp?: Timestamp;
  shapeIndex?: number;
  formattedAddress?: string;
  notes?: string;
}

export default interface Stop extends StopInfo {
  __typename: "stop";
  notes?: string;
  numberOfStudents?: number;
}

export interface Via extends StopInfo {
  __typename: "via";
}
