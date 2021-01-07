import User, { Invitation, Student } from "../../Models/Users/User";
// import { SchoolResponse } from "./Schools";

// export interface UserResponse {
//   userData: User;
//   schools?: SchoolResponse[];
//   students?: StudentResponse[];
// }

export interface StudentResponse {
  userData: Student;
}

export interface InvitationResponse {
  signUpData: Invitation;
}

// export interface DriverListResponse {
//   drivers: UserResponse[];
// }

// export interface AdminListResponse {
//   admins: UserResponse[];
// }

// export interface ParentListResponse {
//   parents: UserResponse[];
// }

export interface StudentListResponse {
  students: StudentResponse[];
}
