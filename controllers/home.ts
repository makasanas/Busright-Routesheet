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
  "students": [
    {
      "uid": "0XZiPy7oMQUi5m5tTW2RyskCYacb",
      "userData": {
        "districts": [
          {
            "homeCoord": {
              "latitude": 40.8014385,
              "longitude": -74.5759171
            },
            "studentId": "1072588332",
            "grade": 7,
            "schools": [
              {
                "routes": [
                  {
                    "homeStop": "68e13e0a-6498-4795-9bde-5789de18a788",
                    "routeId": "JLYSxgSUbFmvdZmZqfvS"
                  },
                  {
                    "homeStop": "85500",
                    "routeId": "84lsO50pYspt3NxnGfLn"
                  },
                  {
                    "homeStop": "24774",
                    "routeId": "7Y5dXGePhF9619rmJ8lI"
                  }
                ],
                "schoolId": "DOJWbZ0gxx20jBM3d7P7"
              }
            ],
            "homeAddress": {
              "city": "Morristown",
              "state": "NJ",
              "street": "28 Woodland Rd",
              "postalCode": "07960"
            },
            "districtId": "FnWpK713WFJhSXlL8yQF"
          }
        ],
        "isInvitation": false,
        "id": "0XZiPy7oMQUi5m5tTW2RyskCYacb",
        "preferredName": "Boone",
        "accountType": "student",
        "fullName": "Boone Thompson",
        "timeCreated": 1594348123
      }
    },
    {
      "uid": "24F52CzukY3iAJtJ7GPbUSz3nxaw",
      "userData": {
        "fullName": "Bodhi Eyers",
        "districts": [
          {
            "grade": 5,
            "schools": [
              {
                "routes": [
                  {
                    "homeStop": "6b5592a3-18f5-49a1-8c38-ba9011c7730e",
                    "routeId": "JLYSxgSUbFmvdZmZqfvS"
                  },
                  {
                    "homeStop": "24774",
                    "routeId": "7Y5dXGePhF9619rmJ8lI"
                  }
                ],
                "schoolId": "DOJWbZ0gxx20jBM3d7P7"
              },
              {
                "routes": [
                  {
                    "homeStop": "6df19795-a744-4c12-b7ca-176a3141190b",
                    "routeId": "Ifj9vfn2WZgN8dKDRGJL"
                  }
                ],
                "schoolId": "egce4ObM6YEG15HXC1dl"
              }
            ],
            "studentId": "5408205181",
            "homeCoord": {
              "longitude": -74.5524386,
              "latitude": 40.7826218
            },
            "homeAddress": {
              "state": "NJ",
              "street": "12 Indian Hollow Rd",
              "postalCode": "07945",
              "city": "Mendham"
            },
            "districtId": "FnWpK713WFJhSXlL8yQF"
          }
        ],
        "isInvitation": false,
        "timeCreated": 1594348123,
        "accountType": "student",
        "id": "24F52CzukY3iAJtJ7GPbUSz3nxaw",
        "preferredName": "Bodhi"
      }
    },
    {
      "uid": "3eWMR79Ho56lOw84m9S4AYUM2hUz",
      "userData": {
        "accountType": "student",
        "timeCreated": 1594348123,
        "isInvitation": false,
        "districts": [
          {
            "homeCoord": {
              "latitude": 40.7811574,
              "longitude": -74.5836053
            },
            "schools": [
              {
                "routes": [],
                "schoolId": "egce4ObM6YEG15HXC1dl"
              },
              {
                "routes": [
                  {
                    "homeStop": "804ff96b-35a6-4105-b141-d3b459c59300",
                    "routeId": "8YfN0Z7JqZvWIYRfTdgc"
                  },
                  {
                    "homeStop": "ad353a6d-0571-4223-908e-e3055fca7cc8",
                    "routeId": "h0NRxTZZxNz86tL7UN4r"
                  },
                  {
                    "homeStop": "2cfa104d-056e-46e7-81f3-4b43e2486c91",
                    "routeId": "JLYSxgSUbFmvdZmZqfvS"
                  },
                  {
                    "homeStop": "3dec9cd7-df68-4302-98f5-2fec68e64f79",
                    "routeId": "nTprM0ZZnog4ITrg0NkS"
                  },
                  {
                    "homeStop": "87642",
                    "routeId": "UkPTbI5Zslenh8QAYQbI"
                  },
                  {
                    "homeStop": "85213",
                    "routeId": "Si2PDzrSk7UgD2lOiSI4"
                  },
                  {
                    "homeStop": "87112",
                    "routeId": "cxvKWOVw3HLEYTeSIJ7I"
                  },
                  {
                    "homeStop": "8e48c5f4-92ed-4b81-a524-342f938b5a9d",
                    "routeId": "hr2vLKoV8neFDS3j5Luc"
                  }
                ],
                "schoolId": "DOJWbZ0gxx20jBM3d7P7"
              }
            ],
            "studentId": "6104728818",
            "homeAddress": {
              "city": "Mendham",
              "street": "16 Devonshire Ln",
              "state": "NJ",
              "postalCode": "07945"
            },
            "grade": 6,
            "districtId": "FnWpK713WFJhSXlL8yQF"
          }
        ],
        "preferredName": "Aditi",
        "id": "3eWMR79Ho56lOw84m9S4AYUM2hUz",
        "fullName": "Aditi Chilukuri"
      }
    },
    {
      "uid": "5QS8AP1ogiXscoI6Zco0lizUO4y3",
      "userData": {
        "isInvitation": false,
        "timeCreated": 1594348123,
        "fullName": "Benito Marcello",
        "districts": [
          {
            "grade": 8,
            "homeAddress": {
              "street": "6 Olmstead Ln",
              "city": "Mendham",
              "state": "NJ",
              "postalCode": "07945"
            },
            "homeCoord": {
              "latitude": 40.783642,
              "longitude": -74.5773129
            },
            "studentId": "9848446602",
            "schools": [
              {
                "routes": [
                  {
                    "homeStop": "163345",
                    "routeId": "UcRNKAaTpUBxjp0n0d9C"
                  },
                  {
                    "homeStop": "547269ec-d553-4aaf-9a02-1d7ff913a852",
                    "routeId": "JLYSxgSUbFmvdZmZqfvS"
                  },
                  {
                    "homeStop": "24774",
                    "routeId": "7Y5dXGePhF9619rmJ8lI"
                  },
                  {
                    "homeStop": "600303a2-9884-4661-94ab-f79e867a46e7",
                    "routeId": "nTprM0ZZnog4ITrg0NkS"
                  }
                ],
                "schoolId": "DOJWbZ0gxx20jBM3d7P7"
              }
            ],
            "districtId": "FnWpK713WFJhSXlL8yQF"
          }
        ],
        "accountType": "student",
        "id": "5QS8AP1ogiXscoI6Zco0lizUO4y3",
        "preferredName": "Benito"
      }
    },
    {
      "uid": "HeoIMoraxMX7oqmPb2QdQPLX0Urp",
      "userData": {
        "accountType": "student",
        "isInvitation": false,
        "id": "HeoIMoraxMX7oqmPb2QdQPLX0Urp",
        "fullName": "Adam Kim",
        "districts": [
          {
            "homeAddress": {
              "state": "NJ",
              "street": "5 Pender Hill Rd",
              "postalCode": "07945",
              "city": "Mendham"
            },
            "studentId": "2875718292",
            "schools": [
              {
                "routes": [
                  {
                    "homeStop": "f5a1c13f-a9c5-49dc-b330-9c8ce468609e",
                    "routeId": "pozgSveF5LoNjzWUWqdM"
                  },
                  {
                    "homeStop": "3dec9cd7-df68-4302-98f5-2fec68e64f79",
                    "routeId": "nTprM0ZZnog4ITrg0NkS"
                  },
                  {
                    "homeStop": "f5a1c13f-a9c5-49dc-b330-9c8ce468609e",
                    "routeId": "0vhgQMJHy3G0vhY3CBWx"
                  },
                  {
                    "homeStop": "df001491-9004-4359-971b-c5662c844044",
                    "routeId": "hr2vLKoV8neFDS3j5Luc"
                  },
                  {
                    "homeStop": "88252",
                    "routeId": "7Y5dXGePhF9619rmJ8lI"
                  },
                  {
                    "homeStop": "163682",
                    "routeId": "cxvKWOVw3HLEYTeSIJ7I"
                  },
                  {
                    "homeStop": "87642",
                    "routeId": "UkPTbI5Zslenh8QAYQbI"
                  },
                  {
                    "homeStop": "2cfa104d-056e-46e7-81f3-4b43e2486c91",
                    "routeId": "JLYSxgSUbFmvdZmZqfvS"
                  },
                  {
                    "homeStop": "f5a1c13f-a9c5-49dc-b330-9c8ce468609e",
                    "routeId": "sUEdL21oSC2Bm5y40Q0W"
                  },
                  {
                    "homeStop": "804ff96b-35a6-4105-b141-d3b459c59300",
                    "routeId": "8YfN0Z7JqZvWIYRfTdgc"
                  }
                ],
                "schoolId": "DOJWbZ0gxx20jBM3d7P7"
              },
              {
                "routes": [
                  {
                    "homeStop": "f5a1c13f-a9c5-49dc-b330-9c8ce468609e",
                    "routeId": "HDEYi9FCaccTkHmtGeJn"
                  }
                ],
                "schoolId": "egce4ObM6YEG15HXC1dl"
              }
            ],
            "grade": 7,
            "homeCoord": {
              "latitude": 40.7783822,
              "longitude": -74.5774273
            },
            "districtId": "FnWpK713WFJhSXlL8yQF"
          }
        ],
        "preferredName": "Adam",
        "timeCreated": 1594348123
      }
    },
    {
      "uid": "Pw2K9e1GcPA65VU1f4IUPkkJvOdS",
      "userData": {
        "timeCreated": 1594348123,
        "id": "Pw2K9e1GcPA65VU1f4IUPkkJvOdS",
        "accountType": "student",
        "isInvitation": false,
        "districts": [
          {
            "grade": 6,
            "homeAddress": {
              "state": "NJ",
              "street": "7 Herbann Ln",
              "postalCode": "07869",
              "city": "Randolph"
            },
            "homeCoord": {
              "longitude": -74.5715243,
              "latitude": 40.8117208
            },
            "studentId": "4301274409",
            "schools": [
              {
                "routes": [
                  {
                    "homeStop": "2cfa104d-056e-46e7-81f3-4b43e2486c91",
                    "routeId": "JLYSxgSUbFmvdZmZqfvS"
                  },
                  {
                    "homeStop": "24774",
                    "routeId": "7Y5dXGePhF9619rmJ8lI"
                  },
                  {
                    "homeStop": "84202",
                    "routeId": "84lsO50pYspt3NxnGfLn"
                  }
                ],
                "schoolId": "DOJWbZ0gxx20jBM3d7P7"
              },
              {
                "routes": [
                  {
                    "homeStop": "943793dc-b9f2-4a51-961c-210d266d2ade",
                    "routeId": "Ifj9vfn2WZgN8dKDRGJL"
                  }
                ],
                "schoolId": "egce4ObM6YEG15HXC1dl"
              }
            ],
            "districtId": "FnWpK713WFJhSXlL8yQF"
          }
        ],
        "preferredName": "Bijan",
        "fullName": "Bijan Sadr"
      }
    },
    {
      "uid": "Q7YqPPtQ4VRF8X0ZKIVJHDWgSJOY",
      "userData": {
        "fullName": "Caitlyn Thalacker",
        "isInvitation": false,
        "timeCreated": 1594348123,
        "id": "Q7YqPPtQ4VRF8X0ZKIVJHDWgSJOY",
        "accountType": "student",
        "districts": [
          {
            "schools": [
              {
                "routes": [
                  {
                    "homeStop": "24774",
                    "routeId": "7Y5dXGePhF9619rmJ8lI"
                  },
                  {
                    "homeStop": "7d2934fe-9c06-4927-8481-5e87009742d7",
                    "routeId": "h0NRxTZZxNz86tL7UN4r"
                  },
                  {
                    "homeStop": "2cfa104d-056e-46e7-81f3-4b43e2486c91",
                    "routeId": "JLYSxgSUbFmvdZmZqfvS"
                  }
                ],
                "schoolId": "DOJWbZ0gxx20jBM3d7P7"
              },
              {
                "routes": [
                  {
                    "homeStop": "943793dc-b9f2-4a51-961c-210d266d2ade",
                    "routeId": "Ifj9vfn2WZgN8dKDRGJL"
                  }
                ],
                "schoolId": "egce4ObM6YEG15HXC1dl"
              }
            ],
            "studentId": "9512818155",
            "grade": 8,
            "homeAddress": {
              "postalCode": "07931",
              "state": "NJ",
              "city": "Far Hills",
              "street": "5 Saddle Hill Rd"
            },
            "homeCoord": {
              "longitude": -74.6399746,
              "latitude": 40.7550794
            },
            "districtId": "FnWpK713WFJhSXlL8yQF"
          }
        ],
        "preferredName": "Caitlyn"
      }
    },
    {
      "uid": "RcP71Rst0wCXCcuT9UBNZaK2AXWL",
      "userData": {
        "preferredName": "Caitlin",
        "timeCreated": 1594348123,
        "districts": [
          {
            "homeAddress": {
              "street": "12 Calais Rd",
              "city": "Mendham",
              "state": "NJ",
              "postalCode": "07945"
            },
            "schools": [
              {
                "routes": [
                  {
                    "homeStop": "943793dc-b9f2-4a51-961c-210d266d2ade",
                    "routeId": "Ifj9vfn2WZgN8dKDRGJL"
                  }
                ],
                "schoolId": "egce4ObM6YEG15HXC1dl"
              },
              {
                "routes": [
                  {
                    "homeStop": "2cfa104d-056e-46e7-81f3-4b43e2486c91",
                    "routeId": "JLYSxgSUbFmvdZmZqfvS"
                  },
                  {
                    "homeStop": "24774",
                    "routeId": "7Y5dXGePhF9619rmJ8lI"
                  },
                  {
                    "homeStop": "97544",
                    "routeId": "dUu5cC7oiLMA0bl4BjVd"
                  },
                  {
                    "homeStop": "7d2934fe-9c06-4927-8481-5e87009742d7",
                    "routeId": "h0NRxTZZxNz86tL7UN4r"
                  }
                ],
                "schoolId": "DOJWbZ0gxx20jBM3d7P7"
              }
            ],
            "studentId": "8593088149",
            "homeCoord": {
              "longitude": -74.6122955,
              "latitude": 40.7951917
            },
            "grade": 8,
            "districtId": "FnWpK713WFJhSXlL8yQF"
          }
        ],
        "isInvitation": false,
        "id": "RcP71Rst0wCXCcuT9UBNZaK2AXWL",
        "accountType": "student",
        "fullName": "Caitlin Ko"
      }
    },
    {
      "uid": "VHLP6jxXfDiORn2wij0xbsdZCGoU",
      "userData": {
        "isInvitation": false,
        "preferredName": "Abnishek",
        "id": "VHLP6jxXfDiORn2wij0xbsdZCGoU",
        "fullName": "Abnishek Desai",
        "timeCreated": 1594348123,
        "districts": [
          {
            "studentId": "8465846271",
            "grade": 6,
            "homeAddress": {
              "street": "4 Timber Ridge Rd",
              "postalCode": "07931",
              "state": "NJ",
              "city": "Far Hills"
            },
            "schools": [
              {
                "routes": [
                  {
                    "homeStop": "6fe9a82c-3e92-4add-8c48-333f918ce750",
                    "routeId": "sUEdL21oSC2Bm5y40Q0W"
                  },
                  {
                    "homeStop": "8e48c5f4-92ed-4b81-a524-342f938b5a9d",
                    "routeId": "hr2vLKoV8neFDS3j5Luc"
                  },
                  {
                    "homeStop": "86701",
                    "routeId": "7Y5dXGePhF9619rmJ8lI"
                  },
                  {
                    "homeStop": "2cfa104d-056e-46e7-81f3-4b43e2486c91",
                    "routeId": "JLYSxgSUbFmvdZmZqfvS"
                  },
                  {
                    "homeStop": "cedb454c-fd6b-4871-8620-4225a34e4b24",
                    "routeId": "nTprM0ZZnog4ITrg0NkS"
                  },
                  {
                    "homeStop": "87642",
                    "routeId": "UkPTbI5Zslenh8QAYQbI"
                  },
                  {
                    "homeStop": "a9c9d8f7-ee80-4a96-88e8-12fd7352dc1e",
                    "routeId": "h0NRxTZZxNz86tL7UN4r"
                  },
                  {
                    "homeStop": "6fe9a82c-3e92-4add-8c48-333f918ce750",
                    "routeId": "0vhgQMJHy3G0vhY3CBWx"
                  },
                  {
                    "homeStop": "86234",
                    "routeId": "cxvKWOVw3HLEYTeSIJ7I"
                  },
                  {
                    "homeStop": "804ff96b-35a6-4105-b141-d3b459c59300",
                    "routeId": "8YfN0Z7JqZvWIYRfTdgc"
                  }
                ],
                "schoolId": "DOJWbZ0gxx20jBM3d7P7"
              },
              {
                "routes": [
                  {
                    "homeStop": "6fe9a82c-3e92-4add-8c48-333f918ce750",
                    "routeId": "HDEYi9FCaccTkHmtGeJn"
                  }
                ],
                "schoolId": "egce4ObM6YEG15HXC1dl"
              }
            ],
            "homeCoord": {
              "longitude": -74.6385336,
              "latitude": 40.7471292
            },
            "districtId": "FnWpK713WFJhSXlL8yQF"
          }
        ],
        "accountType": "student"
      }
    },
    {
      "uid": "WrdoGuQEsgdnUnpofcFMMrnVQww6",
      "userData": {
        "isInvitation": false,
        "districts": [
          {
            "studentId": "9736025189",
            "grade": 8,
            "homeCoord": {
              "longitude": -74.5747272,
              "latitude": 40.7975285
            },
            "homeAddress": {
              "city": "Mendham",
              "street": "1 Robert Rd",
              "postalCode": "07945",
              "state": "NJ"
            },
            "schools": [
              {
                "routes": [
                  {
                    "homeStop": "85763",
                    "routeId": "84lsO50pYspt3NxnGfLn"
                  },
                  {
                    "homeStop": "24774",
                    "routeId": "7Y5dXGePhF9619rmJ8lI"
                  },
                  {
                    "homeStop": "1f8212b6-e042-4f8d-a675-af1559272fd8",
                    "routeId": "JLYSxgSUbFmvdZmZqfvS"
                  }
                ],
                "schoolId": "DOJWbZ0gxx20jBM3d7P7"
              }
            ],
            "districtId": "FnWpK713WFJhSXlL8yQF"
          }
        ],
        "id": "WrdoGuQEsgdnUnpofcFMMrnVQww6",
        "timeCreated": 1594348123,
        "accountType": "student",
        "fullName": "Christopher Nazarian",
        "preferredName": "Christopher"
      }
    },
    {
      "uid": "YQvgFLmoa3WhmSQo0SYU0jKX2A13",
      "userData": {
        "id": "YQvgFLmoa3WhmSQo0SYU0jKX2A13",
        "accountType": "student",
        "isInvitation": false,
        "districts": [
          {
            "schools": [
              {
                "routes": [
                  {
                    "homeStop": "24774",
                    "routeId": "7Y5dXGePhF9619rmJ8lI"
                  },
                  {
                    "homeStop": "1f8212b6-e042-4f8d-a675-af1559272fd8",
                    "routeId": "JLYSxgSUbFmvdZmZqfvS"
                  },
                  {
                    "homeStop": "89272",
                    "routeId": "UkPTbI5Zslenh8QAYQbI"
                  }
                ],
                "schoolId": "DOJWbZ0gxx20jBM3d7P7"
              }
            ],
            "studentId": "2382758729",
            "grade": 8,
            "homeAddress": {
              "street": "32 Corey Ln",
              "postalCode": "07945",
              "city": "Mendham",
              "state": "NJ"
            },
            "homeCoord": {
              "latitude": 40.7670479,
              "longitude": -74.5629197
            },
            "districtId": "FnWpK713WFJhSXlL8yQF"
          }
        ],
        "preferredName": "Claire",
        "timeCreated": 1594348123,
        "fullName": "Claire Stolarski"
      }
    },
    {
      "uid": "bpcKHe6tX9s5MU4fVSsiLTwApnuK",
      "userData": {
        "id": "bpcKHe6tX9s5MU4fVSsiLTwApnuK",
        "timeCreated": 1594348123,
        "districts": [
          {
            "homeAddress": {
              "postalCode": "07945",
              "state": "NJ",
              "city": "Mendham",
              "street": "34 Horizon Dr"
            },
            "schools": [
              {
                "routes": [
                  {
                    "homeStop": "24774",
                    "routeId": "7Y5dXGePhF9619rmJ8lI"
                  },
                  {
                    "homeStop": "89272",
                    "routeId": "UkPTbI5Zslenh8QAYQbI"
                  },
                  {
                    "homeStop": "547269ec-d553-4aaf-9a02-1d7ff913a852",
                    "routeId": "JLYSxgSUbFmvdZmZqfvS"
                  },
                  {
                    "homeStop": "85914",
                    "routeId": "dUu5cC7oiLMA0bl4BjVd"
                  }
                ],
                "schoolId": "DOJWbZ0gxx20jBM3d7P7"
              }
            ],
            "homeCoord": {
              "latitude": 40.7992207,
              "longitude": -74.60442560000001
            },
            "studentId": "6301126534",
            "grade": 6,
            "districtId": "FnWpK713WFJhSXlL8yQF"
          }
        ],
        "preferredName": "Barrett",
        "isInvitation": false,
        "accountType": "student",
        "fullName": "Barrett Daly"
      }
    },
    {
      "uid": "cCW9IXJzksdimESlgd3EgvfLBaCf",
      "userData": {
        "districts": [
          {
            "homeAddress": {
              "street": "6 India Brook Dr",
              "postalCode": "07945",
              "state": "NJ",
              "city": "Mendham"
            },
            "schools": [
              {
                "routes": [
                  {
                    "homeStop": "600303a2-9884-4661-94ab-f79e867a46e7",
                    "routeId": "nTprM0ZZnog4ITrg0NkS"
                  },
                  {
                    "homeStop": "86694",
                    "routeId": "7Y5dXGePhF9619rmJ8lI"
                  },
                  {
                    "homeStop": "86088",
                    "routeId": "dUu5cC7oiLMA0bl4BjVd"
                  },
                  {
                    "homeStop": "547269ec-d553-4aaf-9a02-1d7ff913a852",
                    "routeId": "JLYSxgSUbFmvdZmZqfvS"
                  }
                ],
                "schoolId": "DOJWbZ0gxx20jBM3d7P7"
              }
            ],
            "homeCoord": {
              "latitude": 40.7932604,
              "longitude": -74.61556689999999
            },
            "studentId": "7782032939",
            "grade": 6,
            "districtId": "FnWpK713WFJhSXlL8yQF"
          }
        ],
        "accountType": "student",
        "fullName": "Benjamin Lanier",
        "isInvitation": false,
        "id": "cCW9IXJzksdimESlgd3EgvfLBaCf",
        "timeCreated": 1594348123,
        "preferredName": "Benjamin"
      }
    },
    {
      "uid": "hh9kUKkcHmblhn7UyvFDuU7PGSOm",
      "userData": {
        "preferredName": "Alexander",
        "timeCreated": 1594348123,
        "id": "hh9kUKkcHmblhn7UyvFDuU7PGSOm",
        "fullName": "Alexander Malkowski",
        "accountType": "student",
        "districts": [
          {
            "schools": [
              {
                "routes": [
                  {
                    "homeStop": "163820",
                    "routeId": "cxvKWOVw3HLEYTeSIJ7I"
                  },
                  {
                    "homeStop": "da13e603-1821-456e-b754-5bbdd1f357b2",
                    "routeId": "JLYSxgSUbFmvdZmZqfvS"
                  },
                  {
                    "homeStop": "26417",
                    "routeId": "jJAyV6TZOEORuwHp3iLu"
                  },
                  {
                    "homeStop": "26417",
                    "routeId": "zGHi01yOOCTlEukLcD18"
                  },
                  {
                    "homeStop": "163831",
                    "routeId": "UkPTbI5Zslenh8QAYQbI"
                  },
                  {
                    "homeStop": "24774",
                    "routeId": "7Y5dXGePhF9619rmJ8lI"
                  },
                  {
                    "homeStop": "df001491-9004-4359-971b-c5662c844044",
                    "routeId": "hr2vLKoV8neFDS3j5Luc"
                  },
                  {
                    "homeStop": "a9c9d8f7-ee80-4a96-88e8-12fd7352dc1e",
                    "routeId": "h0NRxTZZxNz86tL7UN4r"
                  },
                  {
                    "homeStop": "26417",
                    "routeId": "7alA47Lw52GLE97GryrN"
                  }
                ],
                "schoolId": "DOJWbZ0gxx20jBM3d7P7"
              },
              {
                "routes": [],
                "schoolId": "egce4ObM6YEG15HXC1dl"
              }
            ],
            "grade": 7,
            "studentId": "9527322416",
            "homeCoord": {
              "latitude": 40.79383139999999,
              "longitude": -74.6282859
            },
            "homeAddress": {
              "state": "NJ",
              "city": "Mendham",
              "street": "1 Burnett Rd",
              "postalCode": "07945"
            },
            "districtId": "FnWpK713WFJhSXlL8yQF"
          }
        ],
        "isInvitation": false
      }
    },
    {
      "uid": "lMac7X7LrunoaO36357UAWVfscjv",
      "userData": {
        "districts": [
          {
            "schools": [
              {
                "routes": [
                  {
                    "homeStop": "3db162a4-e29d-4ac8-ae02-ba7f3ff48808",
                    "routeId": "HDEYi9FCaccTkHmtGeJn"
                  }
                ],
                "schoolId": "egce4ObM6YEG15HXC1dl"
              },
              {
                "routes": [
                  {
                    "homeStop": "85213",
                    "routeId": "Si2PDzrSk7UgD2lOiSI4"
                  },
                  {
                    "homeStop": "3db162a4-e29d-4ac8-ae02-ba7f3ff48808",
                    "routeId": "0vhgQMJHy3G0vhY3CBWx"
                  },
                  {
                    "homeStop": "cedb454c-fd6b-4871-8620-4225a34e4b24",
                    "routeId": "nTprM0ZZnog4ITrg0NkS"
                  },
                  {
                    "homeStop": "2cfa104d-056e-46e7-81f3-4b43e2486c91",
                    "routeId": "JLYSxgSUbFmvdZmZqfvS"
                  },
                  {
                    "homeStop": "163355",
                    "routeId": "UkPTbI5Zslenh8QAYQbI"
                  },
                  {
                    "homeStop": "3db162a4-e29d-4ac8-ae02-ba7f3ff48808",
                    "routeId": "pozgSveF5LoNjzWUWqdM"
                  },
                  {
                    "homeStop": "3db162a4-e29d-4ac8-ae02-ba7f3ff48808",
                    "routeId": "sUEdL21oSC2Bm5y40Q0W"
                  },
                  {
                    "homeStop": "26417",
                    "routeId": "7alA47Lw52GLE97GryrN"
                  },
                  {
                    "homeStop": "26417",
                    "routeId": "zGHi01yOOCTlEukLcD18"
                  },
                  {
                    "homeStop": "26417",
                    "routeId": "jJAyV6TZOEORuwHp3iLu"
                  },
                  {
                    "homeStop": "df001491-9004-4359-971b-c5662c844044",
                    "routeId": "hr2vLKoV8neFDS3j5Luc"
                  }
                ],
                "schoolId": "DOJWbZ0gxx20jBM3d7P7"
              }
            ],
            "homeCoord": {
              "latitude": 40.7755737,
              "longitude": -74.56223320000001
            },
            "grade": 6,
            "homeAddress": {
              "street": "15 Corey Ln",
              "city": "Mendham",
              "state": "NJ",
              "postalCode": "07945"
            },
            "studentId": "1241134685",
            "districtId": "FnWpK713WFJhSXlL8yQF"
          }
        ],
        "fullName": "Aidan Kelly",
        "accountType": "student",
        "isInvitation": false,
        "timeCreated": 1594348123,
        "id": "lMac7X7LrunoaO36357UAWVfscjv",
        "preferredName": "Aidan"
      }
    },
    {
      "uid": "mJLpI360RX7zjYkO4HEq7mIPjsLM",
      "userData": {
        "accountType": "student",
        "timeCreated": 1594348123,
        "preferredName": "Benjamin",
        "fullName": "Benjamin Colucci",
        "id": "mJLpI360RX7zjYkO4HEq7mIPjsLM",
        "districts": [
          {
            "schools": [
              {
                "routes": [
                  {
                    "homeStop": "547269ec-d553-4aaf-9a02-1d7ff913a852",
                    "routeId": "JLYSxgSUbFmvdZmZqfvS"
                  },
                  {
                    "homeStop": "600303a2-9884-4661-94ab-f79e867a46e7",
                    "routeId": "nTprM0ZZnog4ITrg0NkS"
                  },
                  {
                    "homeStop": "24774",
                    "routeId": "7Y5dXGePhF9619rmJ8lI"
                  }
                ],
                "schoolId": "DOJWbZ0gxx20jBM3d7P7"
              }
            ],
            "grade": 8,
            "studentId": "4042200741",
            "homeAddress": {
              "street": "11 White Oak Ridge Ct",
              "postalCode": "07945",
              "state": "NJ",
              "city": "Mendham"
            },
            "homeCoord": {
              "longitude": -74.6208971,
              "latitude": 40.7533756
            },
            "districtId": "FnWpK713WFJhSXlL8yQF"
          }
        ],
        "isInvitation": false
      }
    },
    {
      "uid": "nQneZkX7MmvaS4iPqcLjHTBND8k0",
      "userData": {
        "timeCreated": 1594348123,
        "preferredName": "Cian",
        "fullName": "Cian Mcguire",
        "id": "nQneZkX7MmvaS4iPqcLjHTBND8k0",
        "districts": [
          {
            "schools": [
              {
                "routes": [
                  {
                    "homeStop": "84045",
                    "routeId": "Si2PDzrSk7UgD2lOiSI4"
                  },
                  {
                    "homeStop": "24774",
                    "routeId": "7Y5dXGePhF9619rmJ8lI"
                  },
                  {
                    "homeStop": "1f8212b6-e042-4f8d-a675-af1559272fd8",
                    "routeId": "JLYSxgSUbFmvdZmZqfvS"
                  }
                ],
                "schoolId": "DOJWbZ0gxx20jBM3d7P7"
              }
            ],
            "studentId": "5602193201",
            "homeAddress": {
              "street": "76 Woodland Rd",
              "state": "NJ",
              "postalCode": "07869",
              "city": "Randolph"
            },
            "homeCoord": {
              "longitude": -74.57064299999999,
              "latitude": 40.815469
            },
            "grade": 8,
            "districtId": "FnWpK713WFJhSXlL8yQF"
          }
        ],
        "isInvitation": false,
        "accountType": "student"
      }
    },
    {
      "uid": "rUzhc7hkvXivKUFfd2lQikaBkKza",
      "userData": {
        "accountType": "student",
        "timeCreated": 1594348123,
        "id": "rUzhc7hkvXivKUFfd2lQikaBkKza",
        "districts": [
          {
            "homeCoord": {
              "longitude": -74.6026869,
              "latitude": 40.7917966
            },
            "grade": 6,
            "schools": [
              {
                "routes": [
                  {
                    "homeStop": "163740",
                    "routeId": "7Y5dXGePhF9619rmJ8lI"
                  },
                  {
                    "homeStop": "86066",
                    "routeId": "dUu5cC7oiLMA0bl4BjVd"
                  },
                  {
                    "homeStop": "86829",
                    "routeId": "UkPTbI5Zslenh8QAYQbI"
                  },
                  {
                    "homeStop": "df001491-9004-4359-971b-c5662c844044",
                    "routeId": "hr2vLKoV8neFDS3j5Luc"
                  },
                  {
                    "homeStop": "68e13e0a-6498-4795-9bde-5789de18a788",
                    "routeId": "JLYSxgSUbFmvdZmZqfvS"
                  }
                ],
                "schoolId": "DOJWbZ0gxx20jBM3d7P7"
              }
            ],
            "studentId": "5216475357",
            "homeAddress": {
              "state": "NJ",
              "postalCode": "07945",
              "street": "4 Overlook Ln",
              "city": "Mendham"
            },
            "districtId": "FnWpK713WFJhSXlL8yQF"
          }
        ],
        "preferredName": "Amara",
        "fullName": "Amara Kaufman",
        "isInvitation": false
      }
    },
    {
      "uid": "u4LzNRx6YPdQYEcwKIEaKIFXiuaZ",
      "userData": {
        "timeCreated": 1594348123,
        "districts": [
          {
            "homeAddress": {
              "street": "45 Walsingham Rd",
              "postalCode": "07945",
              "city": "Mendham",
              "state": "NJ"
            },
            "homeCoord": {
              "latitude": 40.7805061,
              "longitude": -74.58081380000002
            },
            "grade": 5,
            "studentId": "4730497116",
            "schools": [
              {
                "routes": [
                  {
                    "homeStop": "bb212249-6173-4794-ba85-b170af5c9521",
                    "routeId": "HDEYi9FCaccTkHmtGeJn"
                  }
                ],
                "schoolId": "egce4ObM6YEG15HXC1dl"
              },
              {
                "routes": [
                  {
                    "homeStop": "163740",
                    "routeId": "7Y5dXGePhF9619rmJ8lI"
                  },
                  {
                    "homeStop": "bb212249-6173-4794-ba85-b170af5c9521",
                    "routeId": "0vhgQMJHy3G0vhY3CBWx"
                  },
                  {
                    "homeStop": "cedb454c-fd6b-4871-8620-4225a34e4b24",
                    "routeId": "nTprM0ZZnog4ITrg0NkS"
                  },
                  {
                    "homeStop": "87642",
                    "routeId": "UkPTbI5Zslenh8QAYQbI"
                  },
                  {
                    "homeStop": "8e48c5f4-92ed-4b81-a524-342f938b5a9d",
                    "routeId": "hr2vLKoV8neFDS3j5Luc"
                  },
                  {
                    "homeStop": "2cfa104d-056e-46e7-81f3-4b43e2486c91",
                    "routeId": "JLYSxgSUbFmvdZmZqfvS"
                  },
                  {
                    "homeStop": "31806",
                    "routeId": "84lsO50pYspt3NxnGfLn"
                  },
                  {
                    "homeStop": "bb212249-6173-4794-ba85-b170af5c9521",
                    "routeId": "pozgSveF5LoNjzWUWqdM"
                  },
                  {
                    "homeStop": "bb212249-6173-4794-ba85-b170af5c9521",
                    "routeId": "sUEdL21oSC2Bm5y40Q0W"
                  }
                ],
                "schoolId": "DOJWbZ0gxx20jBM3d7P7"
              }
            ],
            "districtId": "FnWpK713WFJhSXlL8yQF"
          }
        ],
        "id": "u4LzNRx6YPdQYEcwKIEaKIFXiuaZ",
        "isInvitation": false,
        "accountType": "student",
        "preferredName": "Abigail",
        "fullName": "Abigail Baldwin"
      }
    },
    {
      "uid": "xTGZ5fuZHMl658ig2cFdkNXgWL3y",
      "userData": {
        "accountType": "student",
        "id": "xTGZ5fuZHMl658ig2cFdkNXgWL3y",
        "isInvitation": false,
        "fullName": "Aidan Vollmuth",
        "districts": [
          {
            "grade": 7,
            "schools": [
              {
                "routes": [
                  {
                    "homeStop": "163850",
                    "routeId": "UkPTbI5Zslenh8QAYQbI"
                  },
                  {
                    "homeStop": "24774",
                    "routeId": "7Y5dXGePhF9619rmJ8lI"
                  },
                  {
                    "homeStop": "86415",
                    "routeId": "UcRNKAaTpUBxjp0n0d9C"
                  },
                  {
                    "homeStop": "da13e603-1821-456e-b754-5bbdd1f357b2",
                    "routeId": "JLYSxgSUbFmvdZmZqfvS"
                  },
                  {
                    "homeStop": "86415",
                    "routeId": "Si2PDzrSk7UgD2lOiSI4"
                  },
                  {
                    "homeStop": "87112",
                    "routeId": "cxvKWOVw3HLEYTeSIJ7I"
                  },
                  {
                    "homeStop": "df001491-9004-4359-971b-c5662c844044",
                    "routeId": "hr2vLKoV8neFDS3j5Luc"
                  }
                ],
                "schoolId": "DOJWbZ0gxx20jBM3d7P7"
              }
            ],
            "homeAddress": {
              "state": "NJ",
              "street": "11 Pitney Dr",
              "city": "Mendham",
              "postalCode": "07945"
            },
            "studentId": "3750740414",
            "homeCoord": {
              "longitude": -74.5812485,
              "latitude": 40.79113479999999
            },
            "districtId": "FnWpK713WFJhSXlL8yQF"
          }
        ],
        "timeCreated": 1594348123,
        "preferredName": "Aidan"
      }
    },
    {
      "uid": "xavVmIpeq10DqvIwL0yDVB5vDnhq",
      "userData": {
        "timeCreated": 1594348123,
        "fullName": "Brendon Eigner",
        "preferredName": "Brendon",
        "id": "xavVmIpeq10DqvIwL0yDVB5vDnhq",
        "districts": [
          {
            "homeCoord": {
              "latitude": 40.7978842,
              "longitude": -74.6319458
            },
            "schools": [
              {
                "routes": [
                  {
                    "homeStop": "24774",
                    "routeId": "7Y5dXGePhF9619rmJ8lI"
                  },
                  {
                    "homeStop": "6b5592a3-18f5-49a1-8c38-ba9011c7730e",
                    "routeId": "JLYSxgSUbFmvdZmZqfvS"
                  },
                  {
                    "homeStop": "12697",
                    "routeId": "cxvKWOVw3HLEYTeSIJ7I"
                  }
                ],
                "schoolId": "DOJWbZ0gxx20jBM3d7P7"
              }
            ],
            "homeAddress": {
              "city": "Mendham",
              "postalCode": "07945",
              "state": "NJ",
              "street": "5 Roconan Dr"
            },
            "grade": 7,
            "studentId": "2467422930",
            "districtId": "FnWpK713WFJhSXlL8yQF"
          }
        ],
        "accountType": "student",
        "isInvitation": false
      }
    },
    {
      "uid": "xetI9ynjaaBEdqys2Nq5tzLV0TJr",
      "userData": {
        "id": "xetI9ynjaaBEdqys2Nq5tzLV0TJr",
        "fullName": "Alexandra Rezza",
        "accountType": "student",
        "isInvitation": false,
        "districts": [
          {
            "studentId": "8094970403",
            "schools": [
              {
                "routes": [
                  {
                    "homeStop": "123297",
                    "routeId": "UkPTbI5Zslenh8QAYQbI"
                  },
                  {
                    "homeStop": "163508",
                    "routeId": "cxvKWOVw3HLEYTeSIJ7I"
                  },
                  {
                    "homeStop": "df001491-9004-4359-971b-c5662c844044",
                    "routeId": "hr2vLKoV8neFDS3j5Luc"
                  },
                  {
                    "homeStop": "163740",
                    "routeId": "7Y5dXGePhF9619rmJ8lI"
                  },
                  {
                    "homeStop": "68e13e0a-6498-4795-9bde-5789de18a788",
                    "routeId": "JLYSxgSUbFmvdZmZqfvS"
                  }
                ],
                "schoolId": "DOJWbZ0gxx20jBM3d7P7"
              }
            ],
            "homeAddress": {
              "city": "Mendham",
              "state": "NJ",
              "postalCode": "07945",
              "street": "2 Wycoff Way"
            },
            "grade": 8,
            "homeCoord": {
              "latitude": 40.7581942,
              "longitude": -74.6213546
            },
            "districtId": "FnWpK713WFJhSXlL8yQF"
          }
        ],
        "timeCreated": 1594348123,
        "preferredName": "Alexandra"
      }
    }
  ],
  "routeData": {
    "status": {
      "isActive": false
    },
    "stops": [
      {
        "stopId": "2cfa104d-056e-46e7-81f3-4b43e2486c91",
        "coord": {
          "latitude": 42.61296729315254,
          "longitude": -71.09150325927735
        },
        "__typename": "stop",
        "longitude": -71.09150325927735,
        "address": {
          "street": "113 Jenkins Rd",
          "city": "Andover",
          "state": "MA",
          "postalCode": "01810"
        },
        "latitude": 42.61296729315254,
        "notesLastEditedTimestamp": 1604896316,
        "notesLastEditedBy": {
          "id": "AI0rNgVJ0uNaZjAOgXAPL78PpGl1",
          "preferredName": "Hey! Ho",
          "fullName": "Neil "
        },
        "shapeIndex": 0
      },
      {
        "longitude": -71.10964086632353,
        "latitude": 42.59809351849116,
        "notesLastEditedTimestamp": 1604896316,
        "coord": {
          "latitude": 42.59809351849116,
          "longitude": -71.10964086632353
        },
        "address": {
          "street": "240 Central St",
          "postalCode": "01864",
          "city": "North Reading",
          "state": "MA"
        },
        "stopId": "5897c761-4435-435d-a1a2-613a82c1bedb",
        "notesLastEditedBy": {
          "id": "AI0rNgVJ0uNaZjAOgXAPL78PpGl1",
          "preferredName": "Hey! Ho",
          "fullName": "Neil "
        },
        "__typename": "via",
        "shapeIndex": 74
      },
      {
        "coord": {
          "latitude": 42.595031815274886,
          "longitude": -71.10715267211916
        },
        "latitude": 42.595031815274886,
        "__typename": "stop",
        "address": {
          "city": "North Reading",
          "street": "1 Acorn Knoll Dr",
          "state": "MA",
          "postalCode": "01864"
        },
        "notesLastEditedBy": {
          "id": "AI0rNgVJ0uNaZjAOgXAPL78PpGl1",
          "preferredName": "Hey! Ho",
          "fullName": "Neil "
        },
        "stopId": "1f8212b6-e042-4f8d-a675-af1559272fd8",
        "notesLastEditedTimestamp": 1604896316,
        "longitude": -71.10715267211916,
        "shapeIndex": 81
      },
      {
        "address": {
          "street": "221 Central St",
          "state": "MA",
          "postalCode": "01864",
          "city": "North Reading"
        },
        "stopId": "547269ec-d553-4aaf-9a02-1d7ff913a852",
        "longitude": -71.10637836523438,
        "notesLastEditedTimestamp": 1604896316,
        "coord": {
          "latitude": 42.593839449845525,
          "longitude": -71.10637836523438
        },
        "__typename": "stop",
        "latitude": 42.593839449845525,
        "notesLastEditedBy": {
          "id": "AI0rNgVJ0uNaZjAOgXAPL78PpGl1",
          "preferredName": "Hey! Ho",
          "fullName": "Neil "
        },
        "shapeIndex": 82
      },
      {
        "longitude": -71.085552,
        "notesLastEditedTimestamp": 1604896316,
        "coord": {
          "latitude": 42.59333,
          "longitude": -71.085552
        },
        "__typename": "stop",
        "latitude": 42.59333,
        "notesLastEditedBy": {
          "id": "AI0rNgVJ0uNaZjAOgXAPL78PpGl1",
          "preferredName": "Hey! Ho",
          "fullName": "Neil "
        },
        "shapeIndex": 128,
        "address": {
          "street": "280 Haverhill St",
          "state": "MA",
          "postalCode": "01864",
          "city": "North Reading"
        },
        "stopId": "da13e603-1821-456e-b754-5bbdd1f357b2"
      },
      {
        "notesLastEditedBy": {
          "id": "AI0rNgVJ0uNaZjAOgXAPL78PpGl1",
          "preferredName": "Hey! Ho",
          "fullName": "Neil "
        },
        "__typename": "stop",
        "longitude": -71.081355,
        "coord": {
          "latitude": 42.585678,
          "longitude": -71.081355
        },
        "notesLastEditedTimestamp": 1604896316,
        "latitude": 42.585678,
        "address": {
          "street": "Foley Dr",
          "state": "MA",
          "postalCode": "01864",
          "city": "North Reading"
        },
        "shapeIndex": 144,
        "stopId": "a4f9d80b-4fa5-4ec8-a493-d152946fdac5"
      },
      {
        "longitude": -71.080234,
        "latitude": 42.583353,
        "__typename": "stop",
        "shapeIndex": 146,
        "stopId": "6b5592a3-18f5-49a1-8c38-ba9011c7730e",
        "notesLastEditedTimestamp": 1604896316,
        "notesLastEditedBy": {
          "id": "AI0rNgVJ0uNaZjAOgXAPL78PpGl1",
          "preferredName": "Hey! Ho",
          "fullName": "Neil "
        },
        "coord": {
          "latitude": 42.583353,
          "longitude": -71.080234
        },
        "address": {
          "city": "North Reading",
          "state": "MA",
          "postalCode": "01864",
          "street": "199 Haverhill St"
        }
      },
      {
        "longitude": -71.078685,
        "__typename": "stop",
        "coord": {
          "latitude": 42.577482,
          "longitude": -71.078685
        },
        "notesLastEditedBy": {
          "id": "AI0rNgVJ0uNaZjAOgXAPL78PpGl1",
          "preferredName": "Hey! Ho",
          "fullName": "Neil "
        },
        "latitude": 42.577482,
        "notesLastEditedTimestamp": 1604896316,
        "shapeIndex": 156,
        "address": {
          "city": "North Reading",
          "street": "156 Haverhill St",
          "state": "MA",
          "postalCode": "01864"
        },
        "stopId": "68e13e0a-6498-4795-9bde-5789de18a788"
      },
      {
        "__typename": "via",
        "coord": {
          "latitude": 42.57248942363064,
          "longitude": -71.09651948687963
        },
        "address": {
          "postalCode": "01864",
          "city": "North Reading",
          "street": "254 Park St",
          "state": "MA"
        },
        "latitude": 42.57248942363064,
        "notesLastEditedTimestamp": 1604896316,
        "longitude": -71.09651948687963,
        "stopId": "802131e2-9466-41aa-a6b5-11839fb2a4b2",
        "shapeIndex": 187,
        "notesLastEditedBy": {
          "id": "AI0rNgVJ0uNaZjAOgXAPL78PpGl1",
          "preferredName": "Hey! Ho",
          "fullName": "Neil "
        }
      }
    ],
    "numberOfParents": 0,
    "endLocation": {
      "id": "DOJWbZ0gxx20jBM3d7P7",
      "name": "MENDHAM TWP MS",
      "address": {
        "city": "Morristown",
        "street": "16 Washington Valley Rd",
        "postalCode": "07960",
        "state": "NJ"
      },
      "coord": {
        "longitude": -74.5524076,
        "latitude": 40.8021252
      },
      "__typename": "school"
    },
    "assignedDriver": {
      "uid": "ckJvcFpaeG1wMVp4RVFUZWg2N3Z1VVR3N2kxMiwxMjM0NTY3OA",
      "id": "ckJvcFpaeG1wMVp4RVFUZWg2N3Z1VVR3N2kxMiwxMjM0NTY3OA",
      "preferredName": "Man",
      "fullName": "Man mann",
      "employeeId": "12345678"
    },
    "name": "nrt test",
    "timeCreated": 1599618008,
    "currentSnapshotId": "3dd2460a-eb3c-4957-ac9a-89b7a859ceb2",
    "overviewPolyline": "yyacGv`|pLTnEXfDL`@Tb@t@fAp@z@\\jAJv@Dz@@vBS`DCzAJtAVbBFf@BzAAd@D|A^~CDdAAhAGbAMz@{@jDCf@@l@Hp@~@zErCnPRrAHpA@xAAlAGxAKfA]nC}@pD_@jBEv@@p@XzAPj@`AjCfDlIb@hAT~@ZtBDlBC~@UfC^RX@f@Sz@Gf@S`@Wn@m@t@sA|B{EhEmLrAmCbC}ChDuD`@Yd@SxDw@`BO~D?~BBt@YvAq@`C}@zC{@pCmA~CuAd@e@|DoB^YfAcApBaBX]bE}EdB{BrAiBtJsLpAuAuAeCyA}Bc@u@W_@Wm@COCWFg@DW~@mChAaCbA}Ap@sAx@wB~@mCbB}FjAkERoA?g@E]sBsGm@yBS{@Ec@@}@j@iC`@uB@q@Ac@_@uCSwA[sCOu@}AoEOeACw@DiAJyBAu@iA`@uKlFaAb@`Ac@tKmFhAa@dB{@Z[vCiD^]RKh@K`AMvCWpAOlDYPEp@YzAw@??rMqDnBk@j@[nA}@|A{@`A[rEoArAKjBFx@EhH_BrE_AlAOx@Pr@TnHrE|@`JLdBLrDRvH?nBKdBS|Aa@hCKbBDp@Z~CDlAArBKfE@t@Dl@f@zER~@vAjCZt@p@bCXdBF|@BdAYlHEjBDzATpCF`B?zAGnDEzAGr@Mj@~@pAZ\\ZVb@PPDbDPb@Jb@NtB~@`Ah@\\\\`@h@\\l@jAvCTz@PhAPv@Tt@\\x@\\f@b@f@rB~At@v@^d@nAtB\\`@~BxB^l@r@rB\\rAb@zBr@bFRbC@rEs@~LQzAmAjEa@pBc@`EEv@Jr@d@dBv@tB`DbFt@|@~@|@d@VtDn@fBj@tAv@h@d@h@j@tAjBpFbIj@hA^~@\\nAdArHNrAl@|EP~BBxBGrCu@`NCrAVrF~@tOFjB?nCK`DWfFi@jI`CJf@Ad@G^Kn@_@b@c@\\m@Vw@h@_DJc@Zs@Z_@n@i@v@e@^a@Xe@dIgDtJqCtEeA~Ds@bGaAdR_DlHiAxAMjF[jCUtFK~GDxDNtBLd@FdIh@vLl@xGf@jENzCVxHNbEIxCOlC[xCi@tGuAtD}@`EyAdJgEzF}DjGcFvQ_PxF}ExHyGtBeBtHyGlGqFh@g@pGqFzDgCdBe@v@Q|@AhAPnAz@lBzAf@v@N\\Hj@@r@AzAG|B?x@JrAAfDBpCRrFh@|Sv@dYPpDbCj^h@rHXjFXhE~@zMp@tKjDdh@VnEn@fJ|AjSlCnXtCdXzH~u@h@vElAnHvAfGz@fDp@rB|AbEzCvGnA|B|A~BjGlIpCxDpF|Hh@x@n@t@nFhH|BrD|ClFfB~CvDrHvC~GzDvJpCdIbElNjBvHp@bDfCjMXjAjH`^vK`j@x@pEfApHx@nHjAlNf@nFzC~^fB|Sn@pF^zBX|A`AzDbA`DlAbDbAzBpExI~DvGnEdI`CbEjFtJvPpZvA|BlAxAlAhAnAbArBtApCjApBj@fB^nBLfBF`BCnBOjCi@lA[tGmClH}C|I}D`Cy@dCk@z@KhAKxAGn@?rCN|Ch@pN`EvIhC|Bn@dTjGnBb@~Dt@vEj@r@BvBPlELbDE|BIbDSxB[lAWzB]|KqArFi@vHsAbLoAdDi@dNiBpBQbCKhF@dFX|AJfD`@pAJ~N`Bn|@jJvMzAxB`@v@PnC~@tHlCn@PpDpAjFjAZBjCXjCN`F?lAEjRmAdBEpA?nABlAFvBVtB\\|Bn@nBn@dEhAtCdAbCv@`N~DrAb@vBx@`ChAvHfEjAt@xAp@pDjBjCpA~EhBdCl@pAVt\\~CfALpOvApBLzAP`E\\fADfCBjAExFi@nAWbAY|Bw@|Am@|BkAfD_CdXyT~BsBtCuBnAy@fAm@rAo@tAe@tA_@tAYzAQdCMr@BpAJpGtA`Et@^HnAj@f@XvAxAbBnBdCxCtAjBXj@Z|@ZhBTdAJfCXjEHhAPbAzBtJ`AnDp@xCTvAR`B|@vLN`Hz@|YThGTpEl@|G^nDfLj_Ab@pEXnEZbHJtGMjb@@zFFlEFvCPjCPrCZlDx@jHf@vC~BhK`C~HhAfD|HfUtN~b@rEpMfAvCfA`ChEdIpApBzJ`NdOfTnBfDrBjEvAjDv@|Bl@dBlAzEx@rDlAhH^`Db@vE\\vFfBvS\\bCp@tDx@nDrBxGbApC`AtBjGpLlAdCxB|Fn@tB~AzGh@|C~@rILhBVhH@`DOvJ{BvXs@dIcClZ_@lFOpAg@rGuArO}Dff@mAbMaChTmArM_@|KA`EBfDJ|D`@rIh@dFv@dG`BjKl@jEhAzG~[ttBrAbIv@tDrC~IvAhDrFdLpJxQbClFdAlCvB|Gx@dDdAbF`@`CbAbId@hG~@h\\VnMTbHn@rWVrI^vFHv@n@~E|@xEfAfE~@|Cz@`CpBnE|@`BrG~KV\\Vj@fBpChKnQbH|LvP~XvHvMzBlEnDrItClJbAdEpB~JxSxhAfCpNnFl\\|Ed[pA~Hp@lErQbiA`AlGxHpe@lIbi@jChP`AlFf@hCpAbF`GjRdKfZ`J|XzAjEnBdGtBdGdAhChA`CzBpEnBrC|EjGdIrHvF~EtTbSvHdH~EjEb@`@~BhBtFpFxPbOdD`D~CdD~F`HnBtCtClEdH~LtH~LxB|DtDnGtApCdCvFjAvCtMf]lR`f@~AxEnAlEr@~Cr@vDj@hDfJll@j@bF^lEXdFNzE@|DAlGMpEe@hKi@pIe@nJgAxQkExy@]rJCfC@|ED~CNzDTjD\\lEn@fFhB~M~AvM\\nETnEHlCDvD?bEeAl|@a@|`@k@fe@ErIDtDHlDRfDh@jHf@fElB|KhHz_@vAjHlAtHx@tGf@vEt@jLTzFXrU`@`f@JlNJjJh@~o@F|KRvPHvO\\vKz@jSz@dLdAlKfAdJr@bF~BpN`BfI|BfKnDrMjCnItB~FbCnGfa@l`AnBlEP\\vAfDdArBBJl@pA~ClIlA`Et@rCXnAVpA~@|F`@nDH~@TzBTfCJ`CNrDH`Ev@ne@D|Eb@rNj@|Kt@tJv@bIxBjR`CdRn@tFj@fGhAtNjA|SdDvj@@|@NvB\\xE`@rDj@vDrAxG`AdD|ClIrCnFfF`JjCbFtCtGfCzG|CnJjBhFxBzGdCxIt@hDf@rBrBrPp@tJn@rUd@|KVdDp@`GnA~Hx@xDbAzDpG`S~DxLp@bCj@rCrN~w@nBhLtKlx@jAvHb@fCb@bCpAhGvAfGzKh`@xA|E~ArGtB`KfAfGn@jEnHzk@fCfOvA|GvBhIdC`IhB|F|CdIzMb[hCpGvC`HtGfOjCrGjC`HpEtNjLda@rHzVlD`KdGzNdG`NbBtEbAxChAvDr@xCXxAzAfId@xDb@fEp@tIN`DHxCPdNLzLLtFZjR^rI^nGl@vHr@`HlSbbB|BrQr@`FnAjHtA`HrDrNjA~DpA~DxBbGnMr\\tDbJxD~JrA~DhBdGbBrGtAlGtA`HhCnNlBzJfBpIbDzNbFhTbDrNtIj`@hA|ErArIJxAJdCIbDc@hI@|CJtAJvA^nB|@pCfArBxEhF~VxYr@l@~BdCtH`J~BhCfCdC~AjA`BbApC`BrCzA`FzCxApA`AdAj@n@xDjFlH|O~B|DjArAvB|BrAhA`BlAvErBlAb@tE|AdL|C|GlB~EpAdE|@fHjAxI`B|N~C`GnB|B`ApEtBnDrB|HnF|BdBnC`CxC|B~GzF|IdHdEjD`ExCxBvAxFvCzCtAhOjFtFtBtHtD`F~CfEdD`EdDjHdHjDbDhDrCxBbBzAvApR~M~@t@`OpJj[|RxChBtFbDnBpA|L|IrMnKdIzFrFdDvHrDfFpBfFhBfElBvFnD|AdArA~@pBbBvR~O``@|[`PbNbDrCpFrEvB|AxAvArB`Ct@hAn@jAlInP|DfHzG`LxNzUdBvCdAbBbB|CdA`BjA~AlAvAh@f@~BnBjGbEzA~@nGdEvD~BzHfFhJzFvDxB|DvBxDzBfLbGvP`IlFhCn@V|At@xJ~EvD|BtD~BrVrQn@h@tF`EvBdBzF|DfGtEnHpFrCnBpD`CdCbBnJxFxDvB|FlDjGxCj@RjL`HnFzCjAv@pFzDdd@l[jDhCdXhRrRlNpFnDhXfRtJvGpB~ArBlB|A~A`BjBzAlBlDbFzCpFhAzBdBbE~@dC|@jCbDhLrIl[f\\pkAzB~HnDtK`Txk@|o@pfBnDbJ|@fBdC~DbAzAfDtDxBtBrAbApEtDfCnBvFnElCpBvD|CbBpArU~QrC~BhKfIxExDjCpBdKjInAjApAtAlAxAhA~AdAdBxBdE~AfEbAxDvBvKhAhGp@|ChAdEp@fBjAlC|BbElClD~KvKr@p@xHrId@h@xAzBpA`ChB|EfBtErGfQhE|Lx@tCfFrNlN~`@|GjQrBrGpAdDfG`QfLt[zCbJxv@hyBxI`W`\\v~@|Kx[hHfStAjEv@hBfGnPt@dBzAxC`JnPrAnC~AfE`AvDp@xDfC|QpHbh@dA|H`@lELxCChDK`DQ~Ba@`Dw@tDaApDmBtGqA|Ek@xCg@bEKfBGnCChCZrGp@|E`@pBrC~KX`BT|BXfIZnq@GxBSlDqAxSu@tMOtGAvBP|HRjC^zDX|BfBdHVbA`AlCf@tAzAzCjAjBv@nAfNbR~Zjb@xEpGpCpF~D`Jhl@nuAlAlCbGtNfDlIdBvDtCbHpAvDn@rBx@zC~@jEx@rEzLhw@nCxPzAlJdA`HfC|O|CvSpB|LhGh`@^nBf@vBvArEz@xB|BxEXb@nSjZtCxD|ItMtDbGjBdEvBhFhBtFjAjEhA`FjBdKxBvKtAxFl@vBvErNnBvF~@rCdEjLxDpLbAlDnAxEzBfK`ApFhAdHnAlJf@dFrAzOvC`Z~@fFlA|D~@zBx@fBrBlDnBdCjAhAvCbCdChBhNrJzDzC`H`FfChBfY~QrAx@fCpAxCjBr[pS|RvLfBtA`CvB`AfAzAfBxB|ClAtBfDxHnBvG`A~DbA~FT|AVdCJ|AH|AL|FIhNDtGFhCJdBV`EjCh]`@lGp@pIb@nHVxCfAxOj@|Hb@bF~@~Hv@vFfLlr@|BbNhJdi@~CvRtBlLp@fDdAnIf@bF^xE\\bIJrE?lB?pDMbF_@hGSpBsEpW_AjGeE|UUdAi@rCu@hDkBnH{E~SyCbLu@bDQxAQtDAlBBpQFvLI|E_@zMCnCIrC?pFCv@KlA[hBYhAwClJ[nA_@xBIlCBrAT~B\\jBRn@h@pAf@|@TXPT|@v@p@Z|@j@lB`AlChBf@l@jAfBdAvBn@bBn@hClCtLrAlGnArGhAhEp@xBlAnDxAxDb@bAtAjCt@fA~B`DrAvCXt@nAdEbAjBfAnAn@l@x@d@bAf@bCl@bALxCJ`A@tLAx@BtBXnAT~@`@fA\\hBdAhA|@bA~@pA`BhA~AlBfDp@jBh@nB`@fBVvAVpBL`BJjD?fBExBEnEUhSEvFK~d@?hMG|JA`J@lIXtDb@hDfA`HfA|FZtAXz@b@hAbAbBvAxAvAp@x@VdATv@Hn@?fQw@~@?jBTtA`@x@\\zA|@lA~@bBhB~OpObDbDl@j@j@t@zAdCn@bBVbAd@vBbAtHrAbLnCrT\\fBn@~Br@vBh@lAz@|Ad@t@t@~@`AdAbChBpHjFnCvB~BxB~AvC^x@n@~An@dCZbBZxCJjD?xAQ~N[~S?tM^lT\\vGlAbRv@bIt@|Gv@fGx@hFvBvKrBbJ~BxK`AdE\\fBrAvF\\pAh@xA`@bAh@dAbBbCbF`FzC~BpEbCrPdHzD~ArZjMvItDhIxDzB~@`A`@tE`BzEzBdHvDtQpLlTzNtPtKjNhJnMjIlCtAhBh@zCbAfF|AtIbChGhB`OfEx@XlOjEzCbAnJdCpDdArCbA~B|At@^x@l@jDvDz@rAx@xAx@fBbAfDXjBJdALbEGbDInBOrBk@~F{AxSs@|Hk@`Ic@jKIjFFhEFzAJ~@L~@\\lBRr@\\`Ab@dArAnBhBpBj@\\`Ad@vBx@rFjBhCt@~JvD|GpCpDbB`CnAxDzBrD|BtIjGfHnFpElDbZ~Tbm@zd@|CxB`HpFtNpKbDfC|EdE|B~BtB`CzBrCrPhVhHvKlErGzDtG|BfE|HbPlSrb@rB~D|BvDdD|EtCrDfFtF|F~ErDrCrGlEdNzJtHfFfBdA|Ax@tAh@tGbBbNbBbu@hIfGh@dCJxA@fFY|AS|Co@bCs@|FeCx@g@`Ak@dKsH|AcAjC}AtAg@nDu@tAMnBCjBDhDf@rA^xAf@vBlAjExChOtKdX~RvMdJzPxLlDhCdC`B`IzFfMvIlDhC~ApArArAx@`AjAdBpBtDpBbFzDlLjL`^vJtYtCrGrDxFl\\ta@`\\l`@nBfDzBxF\\hA`@|AXxANlA\\pENlDR`IHjELzDDt@TlB\\xBZvAd@lBdAhCp@pAt@lAhAvAtG~HfAzAVd@j@`Ah@lA^|@~@~Cb@nCd@tFDpCC`COxC]`Ds@xCmAzDiH|S}@dCePve@c@fAeGnRYnA[fBOjAUdCK~CBdEFjAVtCd@rCrChLvGbWrPnp@TfATpAZfCLrBFlCAvBEbBOrBQjBW`BmAdKmAxMk@zIkAvT_@jEYjCk@jDc@pBs@pCe@|AiAxCeCxGwAnDc@x@oB`D}@fAwAvAgD|BmAj@yAh@eBh@gKhC{@\\}Ax@aAn@oAhAy@|@eA|AoAzB_@|@{@jCc@`B_@xBe@rEKjBAzABvARrDh@vG`@nGDrCEfA[zCmAnGSbBMhBAlGHfKR`KJnHXvK?dALrFLvHTnID^Hh@VlAPn@d@jBtAfFd@vAhFrQr@`DV|D~@zP`@|Ch@hC^vAf@xAh@pAv@|AjTh\\lEbHtA|C~@`Cj@bBfGrT|@dCxAdDr@pAlAtBzA|B|AlBrFlF`@\\`C`B|CxAhA`@xC|@dDv@fCXlBNvDD`OEdEHfAHnDr@lBp@dBz@hAt@bCpBbCpCz@xAfCpFj@zAfBzFzKr_@r@pCv@tDvAnIb@hDzHrh@pG`d@dA`GpCjN|CtNvCxNzTzfApA`Gz@zC|@|CnArDtCvGnC`GtIjQhGbMnKvT~CjG|ChFxOnTvAnBz@rA~ArBrGtJfAnBpAnCjB~EzAvE`BxFjRds@fGxUrAxF~ApGjGnUxCxLrG`WhJ~`@~AxHvFtZrDhVtClPf@tB|AnFlAbDtBfFz@zAzE`ItCtDtChDRVhAnAjIbI`Ap@|HzF~EvC|JdGtCjCzAvBfBnDtCrGnNb\\~DtIlAfCfAfBbAzAp@t@r@x@vEnEtGvGh@n@VX~CfFx@hB~AfFpDfNrBjIbAnDt@`Cz@bCpA|C~@nBbAfBjA|AfAbAdDtB|@f@bCbAjC|@fDx@~BZvBPhDLhCEbBKpEc@hFcAvEiB|Ao@xGuClDgB`Bm@jAWrCa@zAIjABxBZjCj@jCbAnBdAtA|@x@n@dCbC|CjDn@l@jC|ChK~KbLhM`D`DfE|EbIdI`]pZdBxAjBnBrAjBnArBlAdDd@`Bz@zEd@bEHrBIjHEr@M|BaC`[kBrWkElo@e@bEc@fBcAfDc@fAqCvFwItQ[j@kBhEuLxWeDdHyGjOiMp_@eDbKiAxD[zAW~AOzASpDEhC?bAF~CTnDj@pETfAf@rBxBtHbDfM`@fBd@xCZjDP`CHnD?vCIjEc@pNWhGChCBtELnEN`CfArO|@hL\\fGL|CJnEFfIEpUCrEJrDHrBPdCr@jFh@hCrFdStAtExAtFn@rCZtBXnCHpAD~AB|DIxBUfD[nCi@lCk@zBq@dCqBjGkAxD}@dFUpBOfCI`DAlBH~BpCxd@^lDZ~BVdBbCvJj@jBfJbVvHzR`@jAfAfEx@|FTxBp@dKxAzRXhCr@|DbA|D`@pAtE~KfB|D`DlHfAvDj@`DPdBLpCFjDEdCQdCY`C_@xBc@`BgIpR{EvJYj@a@z@aBjFk@dD]vEGrAAlC@p@PpCRzA|@bErCtLz@dElEjVdArGdEzUtCfRnBhQdBtQZbCt@bFfAnFhAzEr@|BbB~E~CxH~BpExAbChBnCzB~CdMvM`@`@nGxG`BxBhAlB`@|@Xh@n@rAn@bB|@bDl@lC|CdS\\lBx@rDbAnD|ApEbBpD|ApC|@rAfA~AjB|BpCfCnB|A|@l@p@Z~Ap@lB\\~@HfABvBGdDq@~Ai@vD{ArK_E|Bg@|@Ev@Dv@DfAR~BbAh@^p@n@bAjAj@`Af@nAbA`DfA|DpCjMVlA^jCL|B@hCQrDO`Ai@xCo@nBs@tBcBjEw@bCs@nC}@pDeGba@m@hEoBdMoFr[u@jFi@|E[lHOnGq@jWc@hTi@dROhCUtBc@bCi@|Be@fBkDnKs@hD_@vBa@lDQ~AMvBElB?rFHxCNxC`@hD`@bCh@dC~@~CjB|FV|@~AvEzCfKz@`ETrATtBjBxOZtB`AxFx@~DpAvFbFnSfBbIbA`Gj@dEb@lEZlEVlEdBje@tEllALpE@vDElEOtDWnDa@|Dw@lFuAdGwApEcBvEeRpg@S`@g@|A{AjBu@h@}@RaALiAHO?}BlAu@p@y@dAWd@Sh@S^_@rASjBGbBBdBDp@R|AV|@^bAn@jAx@bA\\ZjAn@f@PpATfBFb@Ep@S`Aa@lGyDd@Ud@Mb@CjADpAZ|FlBhD`A`B^vRpCfB`@hBh@`Bt@`B~@lClBrArApAxAlA`BhAhBtAnCh@rAv@zBxHtVPl@dPph@dDjKxAfEbB~DhB|DjBrDfFvI|_@`o@`DxEdDrEhRzUpEpFbPnSvPrSb[j`@fKxLjAfA~BdBdCtAjCfAbBf@|A\\x@LbBRhE^vCZvC`@fBZ`B`@bBf@p@VbKbEbBn@nA^fAVp@Lt@J|CRr@@hBCjBKv@KxCm@xKyClBUjBOp@AlB@dBNtARPDz@VdBp@zAr@vAx@pCxB`@`@hBtB`CvDxFdIx@dA`AfA~ApBhp@fq@hAfAh@`@lAdAl@^zAz@xD|AtCn@|ATlCTjM~@jD`@vAXvA`@tAd@|JbEvAb@|A`@pAVjAL|AL`BFnGNzYv@tE\\rDd@lATdGxAlCv@`A\\hHzDtD`Bz@XrOdEtR`F`Bb@`Bh@|Al@zAn@nDfBhDhBdHbD`F`BbEx@r@HbBF~ACzAMv@KdFcAdCk@nBk@hAa@xBaAlDyBfCqAvAkAxDoEnFyF~AkBpAeApAu@|DmBnHkCfD_ArE_BzBiAlEcC~@_@tAWfACpADfBVx@XnB|@nC|AZ^dCdCx@lAZh@l@zAvCrMjBhHV|@pDzIfFlJx@lBt@nBxArEj@tBhC~G`@|@r@vAxCzGjB|FpDxLx@zB~@vBnCjF|@tBfBbFx@jB\\l@~@lAn@h@lCzAbAp@^\\z@~@rDfHfAhCh@xAj@fBrAzE|CjLvAlEl@fBbA|CdAzCjB`Ex@zAzAhCbApAfAnAfA`Af@^pBtAxA|@dAx@b@b@bAnApGnKbBpB`AbAdAz@fAt@tClBlEdD|@x@tBvCf@lAd@vAPb@VjAz@xCnAbF|@dDtBvFVj@fAzBt@pAnCfE|@`AnDvC`@d@^\\|@rAfAbC~AvEfA|Bj@~@n@j@x@b@hA\\tAXfAHfA?pBc@b@KjBo@jBa@`IsA|@S`GmAfDk@~AKbBFb@HbAZ~@b@|@n@~@|@t@hAXf@l@~ArBjIf@jBp@bBx@vApAhB~EdFdAjAfC~Cb@n@dAlAj@j@dAv@h@XfC|@nCh@|A^n@T~Af@hCnAd@`@jAhAd@j@x@zAlB~Dz@tAdAlAb@f@fAfAxHbHrC|CpJxKzDvDrBdBxCxBxBnAtBrAnAp@~EzCfE~B~DlBtAj@hK`DrCfAnClB~A~AfB~AdA|@`A|@jC|BbA`AtGnHfAbA~@v@hBlAbBvAtFnHjBxAfD`BtBl@|@NfCVlA^nAr@zEnDjDlCdA|@bDbDjAx@n@ZhHpCbB|@fCbBnB~AjAjAlFrElEfDTNpAbAp@h@bBbBfAvAjDxF|ApBb@`@d@^dAp@pHnDpAx@j@d@vArAbDhD|BvBtAfAj@`@`FhEnBpCpEdHdEfFjBjBnD~CnEfDpEnCnBt@lBh@fEp@rCj@fA`@z@d@xAfAv@t@lBnCdBvBbB`BXTx@`@|@\\\\Fz@P|@?|@Cn@Gr@WjAi@|Am@jDsC|B{A|HqChAc@zBaAtBiArB{AbAaAzAoB\\i@dAoBz@{BXoAJu@Ho@Bs@D}CAeBEkBAwCRgCVoAZeAt@eBb@w@x@_Ax@m@bAe@bAYfAIn@ApAB`BT|@XtAn@|EjDdBjBvDvFdCtEhKlTfA`C`EhIlDpHbBbDvAtCrAvCvCzHvDnMn@tBFVhHnW`@~AJZd@lBbAjDl@|AnA~Bv@rAx@lA~@jAbBhBjA|@tAl@n@Ph@NdANlBJzAA~DSzD]zAI`BC`B?`BF`BL|A`@vAl@f@Zh@`@fAfA~AfCrBjEpHnQrBbEbAvAfAjAf@d@lA~@vEvCpBhApHjDpDjB~BhAxEjCfDzBzBbBbEnDnChCzAhBvA~Bx@jBnAtEv@bCn@fBdGvJrAhB~BnCtBnBl@d@pBpAf@TnB|@rALh@@bCOpAOrJ{AdB]bAU`AYd@Q\\Sj@a@t@w@|@kAZi@Vm@x@qClAeF|@uC`@w@h@y@f@s@d@i@jAaA`B{@nAe@~Ag@tAi@nAo@nAaAnAgAjCsCp@cAjAmBpB_EZg@^i@`AcAb@Wh@Un@Sj@I`@Cp@?|@F`ATfAh@d@^d@h@P\\l@hBfArGZfDJdBNnKZ~DRtAXvC|@|EnBzIj@~CJz@B|@BnAC|@OxAk@~Du@~BuCbHgA|Cu@dCe@rBg@fCg@pDUzBO`CQ~DCpLWdk@K`MOfDWdDc@~C]jB}AbGiArCy@bB_B`CgAxAmAhAqCrBk@j@sC`DqAjAa@ZsCtCaFvE_CnCcBzBoBzCs@zAo@xAu@pBe@vBiAxFg@|DYzDKpEDzQEbR?~TEzSF`SFrKAbA?pc@B|N?pNDxK?|RB~FM`EUrD[vCSvA[xAu@zCg@zAa@hAiAdCy@zA{A|B}CpDiBbBe@ZyAz@kBz@{Bn@wH`BsEjA}Af@_CdAiO|HmIrEqX|NkDnBqChBoCvB{AnAeEpEqBhCoAhBgBdDiB~D]n@sBfHeAvEm@rDoGr^m@rDcEpU_BfJoBdKcArFMvAkAtIUvBQrBO|BYdC?vBUnTC|E?bNIxG@j@A|BQ|Xk@tjAEvG]|RK`Ea@pLKxAYlIInACnAOdCGfCu@|Qi@tPg@dMSjGmBjf@s@`SMpBGlCi@lMO|EG|F?|BBrBNzG^nGx@jHx@dGpAjH`@bBfA`EhB|FvBxG|GjSxDzLjAfDzBfIr@zDz@bGRfBZhELpCFdCBlEKjGGdBMxB]fEk@rEy@hGwAtJm@nDc@zCoBjKmCzOWdByBzLsF`]c@pCoAhHwGda@sAdHw@`D}AfFu@fBuBlEcC`EoBjCqJpLkBnC{@zAwA|C_@`Aq@vB_@vAw@xDc@lCaBrL]tCs@|EcDxU]pCgAnHwE`]oAzI_A`HiAdIqD~XkFf^sDhX_BvLm@|DoFt`@uD|WWdCa@nGOrG?tEP|GPjCDdAdAxIv@jE`FrVhAhG`BfIpAfHz@|Fb@~EIn@GrEIrAm@xFa@fBYbBQbBCj@B~@XtBZbA`@dAXb@\\b@rAdARHtBZx@ApGg@dB@dBRb@LbBv@pBnAdFtDp@b@pAr@|Av@jJrD|@`@~DlCbEbD`H~EvAt@rCnA~Bt@pCr@`BZtDd@rFT|DIz|@qEzCIrBA~C@~CJdDVtCVrEp@dBZ~Cp@|Cx@~CbArEfB~CxAdD`BrCfBtIpG|f@r_@pXbTbExCzFtDzCbBzC|A~HhDpCbA`WfIdIfClp@dThBf@`Dr@bDh@fD\\hDR`HLvGNzAHfCXnBVhB\\rBf@~CdApCjAlBbArCfB~AjA`FxE`CnCxBvCnBbDhBlDzBjFxD|JrCpGnB~DrEvI`FpIzBbEnAvBp@lA`BrDvAtDv@|BnArE|@zDx@pE\\`CVbCPfCBnEGdCQbC[hC[pBi@tBo@pB{@pBq@nAuAtBu@`A_JdI{BvBq@r@s@bAoAlBsAzC[x@i@pBe@vBIf@k@`Fw@tPIbC_AzRs@|KeBfWoAhPStDIbCAdCBlCJzBR`C`@vCv@vDn@|B~@hCpBtEbAlB|AdDxBrFhA~Dj@dCb@jC`BfMp@pHd@rGZdGPvEN|IBpB?pCGhCYnEk@jE{@bEiAxDyDhL}CtJi@fCa@dC_@zCM|BEhC?pCFpCRpCXlC\\rBb@pBh@jBx@|B`AvBhAnBnAhB~BhCvCrBdAh@pAr@rKdFpC|AfA|@jBfB~ArBl@~@rAjCrC`HbBvDjAbClAhBv@fAh@l@lAjAbBvAbB`A~At@lBl@p@Pn@LrBRhBF`D?bIEdPOjB@hBJfBThBb@fBl@bBx@`BfAlA`A|@z@rA`BvHjL~CpEbBjB|AxAzA`AzAv@`Bn@bBd@r@N~BXhCHfAAlBGrNs@rDCtDTtCj@fCt@p@VfB|@vA|@v@f@bIdGhb@b[tXpSjDxCxCtCx@x@fDrDjFrGhXza@rF`IpBfC|FxGfCfClF|EpCzBbEvCbElCtC`BhEjC~NlInp@|_@bBz@lGrCxYrK|CxA~CfBxCnBrCxBjC`ChClCbCxChDxE~AtB~BhDpC`DvAvAxApA~AfAdEzB|CjAnSxFlDrAbDtAzC~A|BrA`C`BtCvBnC~BhCdCnD~DxBnC~CnEpC|EfBpDfAfCdCxFvCzHrB|FrC|IxAfFhCtJrAlF|C|MbDxOvCdPzGra@f@jCbAhEfChJxNtg@nAjDpG`NrAhDn@vBt@vC`CtNp@|CjAlDx@lB~@fBfA`BnAxAnApAvAhAjC|A~An@rCt@z@LpCRxC?nCIlEYzHY|ACjBBzCXx@JjDx@`AZvShJ~HxCbI|BnGbBpHzAxEx@|Cb@l@DpEVtEC|CQtC]vB]lBc@lCy@lDsAtFsCzFqC~C_AlAYlBStCIlA?\\@xDb@jHrBdEvArFvBpClA`EnBpCzA~D|Bvb@|WzCfB`NrIbEfCzA`A~EtClJxFvl@v^pPnKvAv@vBvAdIzExDtBv@^lCfAdEvAjKlCx_@jJ~@Z~@L`FlApCh@`BXzJxA~AZjDb@zAVjCp@|Ah@vAp@tAv@rA~@pBdBhD|DrBbDfMfWtCtFjFhJ~JvP|B`ErBfEr@`B|BnGn@jB~AvFxAbGXvBRj@n@vA`@t@dArA`AfAvBxBbAnAvC|Df@t@ZjAF`@@|@AxAGl@WrAMb@{AhDY|@Or@BfCR|@d@bAz@rAd@xANjBs@bDI\\OhB?^Hn@~@fEd@hB_B~By@lAEN?T`D|DaBzCwDjFSZEN}CrRQ~@cC`O{ArIu@~Eo@nDC^Bp@Lh@n@bBr@tBlHbRT|@Hv@@^A^QtAiAtD{@zCYjAE^At@Bd@Fp@Pr@z@fCx@~AlAhBtDzE|@lAXf@h@rAd@lBtApONlAf@bCTx@z@bCxDfJ~ArEhAnDhAzFb@|A\\t@\\h@|@lAx@pA`@bALd@Np@RnAdAfJ~@|JHxAFfDKzAcA~Eo@zDMvAGfAKzCJlMNzKFnCLtBNjCf@zDr@lBfCjElAhCp@nBn@`DnAtKj@tEv@fHJ~C?fBIxFDjDL~BhAvO}A@wH_BwBu@a@Ko@A[L_EpD_@`@Sd@Ml@_@pD[jA_BvEgA`Co@nA[x@iBnDMLs@`@sCbAa@@qCCeDF{CZcAD}GAAoDHmCH_MGyPeHz@[CsCb@MNH`BLJbAI",
    "vehicle": {},
    "id": "JLYSxgSUbFmvdZmZqfvS",
    "numberOfStudents": 28,
    "scheduleType": "morning",
    "dbPath": "districts/FnWpK713WFJhSXlL8yQF/schools/DOJWbZ0gxx20jBM3d7P7/routes/JLYSxgSUbFmvdZmZqfvS/locations/JLYSxgSUbFmvdZmZqfvS",
    "numberOfStops": 7,
    "routeName": "nrt test"
  },
  "routeId": "JLYSxgSUbFmvdZmZqfvS"
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

  const toInclude = ["map", "direction", "students"].filter(
    (s) => req.query[s] !== "false",
  );


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

  const noStudent = !routeDetails.students || routeDetails.students.length === 0 || toInclude.indexOf('students') === -1 ? true : false;
  const isMap = toInclude.indexOf('map') !== -1;
  const isDirection = toInclude.indexOf('direction') !== -1;

  res.render('index', { routeData: routeData, routeDirection: routeDirection, metersToMiles: metersToMiles, secondsTOHours: secondsTOHours, getIndex: getIndex, routeSchedule: routeSchedule, getRoutingImage: getRoutingImage, getTime: getTime, noStudent: noStudent, isMap: isMap, isDirection: isDirection }
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

