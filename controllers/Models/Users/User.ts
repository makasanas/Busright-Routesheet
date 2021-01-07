import { EmployeeId, InvitationId, UserId } from "../Identifiers";
import AccountType from "./AccountType";
import Email from "../Email";
import CompletedOnboardingFlags from "./CompletedOnboardingFlags";
import DistrictUser, { StudentDistrictUser } from "./DistrictUser";
import Timestamp from "../Timestamp";

export interface UserInfo {
  id: UserId;
  fullName: string;
  preferredName: string;
  email?: Email;
  employeeId?: EmployeeId;
}

export default interface User extends UserInfo {
  accountType: AccountType;
  email: Email;
  emailNotificationsEnabled: boolean;
  completedOnboardingFlags: CompletedOnboardingFlags;
  districts: DistrictUser[];
  signUpStage?: number;
  timeCreated: Timestamp;

  // Added
  profilePic?: string;
}

export interface Invitation {
  id: InvitationId;
  accountType: AccountType;
  email: Email;
  districts: DistrictUser[];
  timeCreated: Timestamp;
}

export interface Driver extends User {
  employeeId?: EmployeeId;
}

export interface Student extends User {
  parent?: UserInfo;
  districts: StudentDistrictUser[];
}
