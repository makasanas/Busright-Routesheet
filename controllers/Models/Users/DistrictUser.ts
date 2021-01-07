import { DistrictId, StudentId } from "../Identifiers";
import Permissions from "./Permissions";
import SchoolUser from "./SchoolUser";
import Address from "../Address";
import Coordinate from "../Coordinate";

export default interface DistrictUser {
  districtId: DistrictId;
  permissions?: Permissions;
  isOwner?: boolean;
  schools?: SchoolUser[];
  homeAddress?: Address;
}

export interface StudentDistrictUser extends DistrictUser {
  grade: number;
  studentId: StudentId;
  homeAddress: Address;
  homeCoord: Coordinate;
}
