type TimeOfDay = number;

export default TimeOfDay;

// export default class TimeOfDay {
//   public rawValue: number;
//
//   /**
//    * @param rawValue Seconds from midnight
//    */
//   constructor(rawValue: number) {
//     if (rawValue < 0 || rawValue >= 24 * 60 * 60) {
//       throw new Error("Invalid time of day");
//     }
//     this.rawValue = rawValue;
//   }
//
//   public getMinute(): number {
//     return (this.rawValue % (60 * 60)) / 60;
//   }
//
//   public getHour(): number {
//     return this.rawValue / 3600;
//   }
// }
