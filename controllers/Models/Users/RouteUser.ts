import { RouteId, StopId } from "../Identifiers";

export default interface RouteUser {
  routeId: RouteId;
  homeStop?: StopId;
}
