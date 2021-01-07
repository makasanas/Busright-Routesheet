import { Request, Response } from "express";
import moment from "moment";
import axios from "axios";
import path from "path";
import puppeteer from "puppeteer";

import {
  RouteResponse,
} from "./Data/Routes";
import Timestamp from './Models/Timestamp';
import Stop, { StartEndLocation, Via } from './Models/Routes/Stop';
import Address from './Models/Address';
import { StudentResponse } from './Data/Responses/Users';
import { Student } from './Models/Users/User';
import SchoolUser from './Models/Users/SchoolUser';
import RouteUser from './Models/Users/RouteUser';

const HERE_API_KEY = "rK4D_QYIIeyDEtdxGqeQUtCb0tY1FdDG1o2Cw8Ks1wI";
let routeDirection: any = {};

const routeDetails: any = {
  routeData: {
    currentSnapshotId: "3240b0c3-a8a2-44cd-bcf6-c2caed5853fc",
    dbPath:
      "districts/FnWpK713WFJhSXlL8yQF/schools/wDhIda9hxFbGRbriK825/routes/0kt8xkuxUtqNk1Uka6fH/locations/0kt8xkuxUtqNk1Uka6fH",
    id: "0kt8xkuxUtqNk1Uka6fH",
    name: "Test",
    notes:
      "LOREM IPSUMLOREM IPSUMLOREM IPSUMLOREM IPSUMLOREM IPSUMLOREM IPSUMLOREM IPSUMLOREM IPSUMLOREM IPSUMLOREM IPSUMLOREM IPSUMLOREM IPSUMLOREM IPSUMLOREM IPSUMLOREM IPSUMLOREM IPSUMLOREM IPSUMLOREM IPSUMLOREM IPSUMLOREM IPSUMLOREM ",
    // id: "AI0rNgVJ0uNaZjAOgXAPL78PpGl1",
    notesLastEditedTimestamp: 1608519966,
    numberOfParents: 0,
    numberOfStops: 3,
    numberOfStudents: 0,
    overviewPolyline:
      "qarbGluoqL`@`@p@h@dB~@xAsE|BgG~I`EtAiHtStIvFfCxDjBtI`E`@JXCTG|IkDj@a@dCdBnB}GLHXDZCrCiAv@i@tHoJh@e@hAk@p@e@f@Cj@LhAf@`@Zj@h@b@t@Hl@@V[hGAfABj@Lh@|@nEdHdBvBZXLcCLmBZaCRw@lDgIj@yA^s@xDgFzA{A~BwCt@s@|RwOzFgExAoAVYlB_DpCoCFCtAkA{B_G_AsBoEeMa@o@oAgA]OsA_@cAEc@Hy@Ve@XUPTQd@Yx@Wb@IbADrA^NnAfA`@n@nEdM~@rBzB~FdA}@pBwBnBmBlBcBr@g@t@m@nA{@dCaBrCuBl@g@n@BLJHP`@vAL`ABj@Eb@Kd@UZYT[H[?[G[WUWQi@u@uEa@oBoPa`BiAmNY{EqAgRsAeSIwAiAkPo@gKmAsQ_@cGCi@uCgb@g@sIYyHIiE{DRaARg@PWPUvBoAYr@gAJi@Fm@@u@IkBu@sIUcBe@Hq@P{ARiCLg@?cBHuAL}@B_A?_@E}@Gs@Oi@SeDgAy@c@u@m@uGeGY[m@i@cB_BiB}A[Us@_@cCcAo@SkAI_ABw@C[Gq@_@qB|A_DjBd@zB_CtBmDvAq@d@w@t@gClCaAz@kBhAgAl@[Fw@MiANYRUh@KZCd@",
    scheduleType: "morning",
    startLocation: {
      address: {
        city: "Burlington",
        postalCode: "01803",
        state: "MA",
        street: "4 Michael Dr",
      },
      coord: {
        latitude: 42.5321107,
        longitude: -71.19177719999999,
      },
      name: "Kool Kids School",
      __typename: "school",
    },
    endLocation: {
      address: {
        city: "Burlington",
        postalCode: "01803",
        state: "MA",
        street: "4 Michael Dr",
      },
      coord: {
        latitude: 42.5321107,
        longitude: -71.19177719999999,
      },
      name: "Kool Kids School",
      __typename: "school",
    },
    startTime: 28800,
    status: { isActive: false },
    stops: [
      {
        address: {
          city: "Burlington",
          postalCode: "01803",
          state: "MA",
          street: "30 Donald Rd",
        },
        coord: {
          latitude: 42.52255562318621,
          longitude: -71.19274144226682,
        },
        formattedAddress: "30 Donald Rd, Burlington, MA, 01803",
        latitude: 42.52255562318621,
        longitude: -71.19274144226682,
        notesLastEditedTimestamp: 1608627815,
        numberOfStudents: 1,
        shapeIndex: 10,
        stopId: "1070f2e7-6640-47d4-9a35-e2ac4dbd0a19",
        __typename: "stop",
      },
      {
        address: {
          city: "Reading",
          postalCode: "01867",
          state: "MA",
          street: "163 County Rd",
        },
        coord: {
          latitude: 42.51843790991253,
          longitude: -71.12744901704572,
        },
        formattedAddress: "163 County Rd, Reading, MA, 01867",
        latitude: 42.51843790991253,
        longitude: -71.12744901704572,
        notesLastEditedTimestamp: 1608627815,
        numberOfStudents: 1,
        shapeIndex: 191,
        stopId: "19ab7e73-e2ff-4184-886d-5524dca494c0",
        __typename: "stop",
      },
    ],
    timeCreated: 1608326445,
    vehicle: {},
  },
  students: [],
};

function metersToMiles(mps: number) {
  const miles = Math.round(mps * 0.000621371);
  return miles === 0 ? parseFloat((mps * 0.000621371).toFixed(2)) : miles;
}

function secondsTOHours(time: number) {
  const hours = Math.floor(time / 3600);
  const minutes = Math.floor((time - hours * 3600) / 60);
  const seconds = Math.floor(time - (hours * 3600 + minutes * 60));
  if (hours === 0 && minutes === 0) {
    return `${seconds} sec`;
  }
  if (hours === 0) {
    return `${minutes} min ${seconds} sec`;
  }
  return `${hours} hr ${minutes} min`;
}

function routeSchedule(scheduleType: string) {
  if (scheduleType === "morning") {
    return "Am Route";
  } else if (scheduleType === "afternoon") {
    return "Pm Route";
  } else if (scheduleType === "late") {
    return "Late Route";
  }
}

async function calcDirectionsHERE(wayPoints: (Stop | Via)[], startTime: Timestamp) {
  if (wayPoints.length === 0) {
    return [];
  }

  const wayPointAttrs = wayPoints.map((stopItem: Stop | Via, i: number) => {
    const lat = stopItem.coord.latitude;
    const lng = stopItem.coord.longitude;

    if ("__typename" in stopItem && stopItem.__typename === "via") {
      return `waypoint${i}=geo!passThrough!${lat},${lng}`;
    } else {
      // Use 10 seconds as the stop duration.
      return `waypoint${i}=geo!stopOver,10!${lat},${lng}`;
    }
  });

  let departureTime;
  const date = moment().format("L");
  if (startTime) {
    departureTime = moment(date).add(startTime, "seconds").format("YYYY-MM-DD[T]HH:mm:ss");
  } else {
    departureTime = moment(date).format("YYYY-MM-DD[T]HH:mm:ss");
  }

  const baseURL =
    "https://route.ls.hereapi.com/routing/7.2/calculateroute.json?";
  const hereVehicleType = "car";
  const apiKeyAttr = "apiKey=" + HERE_API_KEY;
  const hereModeAttr = `mode=fastest;${hereVehicleType};traffic:disabled`;
  const maneuverattributes = "maneuverattributes=direction,action,time";
  const departure = `departure=${departureTime}Z`;

  const hereURL =
    baseURL +
    [
      apiKeyAttr,
      ...wayPointAttrs,
      hereModeAttr,
      departure,
      maneuverattributes,
    ].join("&");

  try {
    const response = await axios.get(hereURL);
    return response.data.response.route[0];
  } catch (error) {
    // console.error("HERE calc directions error", error);
  }
}

function getRoutingImage(start: any, end: any) {
  const baseURL = " https://image.maps.ls.hereapi.com/mia/1.6/routing?";
  const apiKeyAttr = "apiKey=" + HERE_API_KEY;
  const waypoint0 = `waypoint0=${start.latitude},${start.longitude}`;
  const waypoint1 = `waypoint1=${end.latitude},${end.longitude}`;
  const poix0 = `poix0=${start.latitude},${start.longitude};00a3f2;00a3f2;11`;
  const poix1 = `poix1=${end.latitude},${end.longitude};white;white;11`;
  const width = "w=260";
  const height = "h=260";
  let hereURL =
    baseURL +
    [apiKeyAttr, waypoint0, waypoint1, poix0, poix1, width, height].join("&");

  return hereURL;
}

function getIndex(index: number) {
  if (index === routeDirection.leg.length - 1) {
    return routeDetails.routeData.endLocation
      ? "End"
      : routeDetails.routeData.startLocation
        ? `${index} (End)`
        : `${index + 1} (End)`;
  }
  if (routeDetails.routeData.startLocation) {
    return index === 0 ? "Start" : index;
  }
  return index + 1;
}

function formatAddress(address: Address) {
  return [
    address.street,
    address.city,
    address.state + " " + address.postalCode,
  ]
    .filter(Boolean)
    .join(", ");
}

function getRoutingInfo(routeRes: any) {
  const routeData = JSON.parse(JSON.stringify(routeDetails.routeData));

  const students: Student[] = routeDetails.students
    ? routeDetails.students.map((u: StudentResponse) => u.userData)
    : [];

  const routingInfo = routeRes;

  // const routingInfo = JSON.parse(JSON.stringify(routeRes))

  const routeStops = routeData.stops.filter((stop: Stop | Via) => {
    return stop.__typename !== "via";
  });

  routeStops.forEach((stop: Stop, index: number) => {
    const assignedStudents: any = [];
    students.forEach((student: Student) => {
      student.districts[0].schools ?.forEach((school: SchoolUser) => {
        school.routes ?.forEach((route: RouteUser) => {
          if (
            route.homeStop === stop.stopId &&
            route.routeId === routeData.id
          ) {
            assignedStudents.push(student);
          }
        });
      });
    });
    if (routeData.startLocation) {
      routingInfo.leg[index + 1] = {
        ...routingInfo.leg[index + 1],
        students: assignedStudents,
        stopName:
          stop.address.street !== " "
            ? stop.address.street
            : formatAddress(stop.address),
        stopNote: stop.notes ? stop.notes : null,
      };
    } else {
      routingInfo.leg[index] = {
        ...routingInfo.leg[index],
        students: assignedStudents,
        stopName:
          stop.address.street !== " "
            ? stop.address.street
            : formatAddress(stop.address),
      };
    }
  });

  if (routeData.startLocation) {
    routingInfo.leg[0] = {
      ...routingInfo.leg[0],
      students: [],
      stopName:
        routeData.startLocation.address.street !== " "
          ? routeData.startLocation.address.street
          : formatAddress(routeData.startLocation.address),
      stopNote: null,
    };
  }
  if (routeData.endLocation) {
    routingInfo.leg[routingInfo.leg.length] = {
      students: [],
      stopName:
        routeData.endLocation.address.street !== " "
          ? routeData.endLocation.address.street
          : formatAddress(routeData.endLocation.address),
      stopNote: null,
    };
  }

  return routingInfo;
}

function getTime(time: number) {
  return moment.utc(time).format("LT")
}

module.exports.get = async (req: Request, res: Response) => {
  const routeData = JSON.parse(JSON.stringify(routeDetails.routeData));
  const wayPoints = [...routeData.stops];
  if (routeData.startLocation) {
    wayPoints.unshift(routeData.startLocation);
  }
  if (routeData.endLocation) {
    wayPoints.push(routeData.endLocation);
  }

  const routeRes = await calcDirectionsHERE(wayPoints, routeData.startTime);

  routeDirection = getRoutingInfo(routeRes);

  const noStudent = !routeDetails.students || routeDetails.students.length === 0 ? false : false;
  const students = ['Student1', 'Student2', 'Student3', 'Student4']

  res.render('index', { routeData: routeData, routeDirection: routeDirection, metersToMiles: metersToMiles, secondsTOHours: secondsTOHours, getIndex: getIndex, routeSchedule: routeSchedule, getRoutingImage: getRoutingImage, getTime: getTime, noStudent: noStudent, students: students }
    , async (err, data) => {
      if (err) {
        res.send(err);
      } else {
        const browser = await puppeteer.launch({
          headless: true
        })
        // create a new page
        const page = await browser.newPage()
        await page.goto(`file://${path.resolve('public/Images')}/`);

        await page.setContent(data, {
          waitUntil: ['load']
        })
        const pdf = await page.pdf({
          format: 'A4'
        });

        res.contentType("application/pdf");
        res.send(pdf);
      }
    });
};

