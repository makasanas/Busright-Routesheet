import { SchoolId } from "../Identifiers";
import Permissions from "./Permissions";
import RouteUser from "./RouteUser";

export default interface SchoolUser {
  schoolId: SchoolId;
  permissions?: Permissions;
  routes?: RouteUser[];
}
