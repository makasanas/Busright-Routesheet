import { RouteId, RouteSessionId, SchoolId } from "../Models/Identifiers";
import Route, { RouteMeta } from "../Models/Routes/Route";
import RouteSession from "../Models/Routes/RouteSession";
import { StudentResponse } from "./Responses/Users";

export interface RouteMetaResponse {
  routeId: RouteId;
  routeData: RouteMeta;
}

export interface LinkedRouteResponse {
  schoolId: SchoolId;
  routeId: RouteId;
  routeData: RouteMeta;
}

export interface RouteResponse {
  routeId: RouteId;
  routeData: Route;
  linkedRoutes?: {
    before: LinkedRouteResponse;
    after: LinkedRouteResponse;
  };
  students?: StudentResponse[];
}

export interface RouteListResponse {
  routes: RouteResponse[];
}

export interface DuplicateRouteResponse {
  schoolId: SchoolId;
  routeId: RouteId;
}

export interface RouteMetaListResponse {
  routes: RouteMetaResponse[];
}

export interface RouteSessionResponse {
  sessionId: RouteSessionId;
  sessionData: RouteSession;
}

export interface RouteSessionListResponse {
  sessions: RouteSessionResponse[];
}
