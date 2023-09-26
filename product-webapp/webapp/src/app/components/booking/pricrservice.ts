export const priceTable: { [key: string]: number } = {
  Hourly: 1,
  Monthly: 2000,
  Residental: 1500,
  Yearly: 2000,
};

export class DateTime {
  formatDate(originalDateString: Date) {
    const originalDate = new Date(originalDateString);
    const year = originalDate.getFullYear();
    const month = (originalDate.getMonth() + 1).toString().padStart(2, '0'); // Months are 0-indexed, so add 1
    const day = originalDate.getDate().toString().padStart(2, '0');
    const hours = originalDate.getHours().toString().padStart(2, '0');
    const minutes = originalDate.getMinutes().toString().padStart(2, '0');
    const formattedDateString = `${year}-${month}-${day}T${hours}:${minutes}`;
    return formattedDateString;
  }
  getHoursDifference(startDate: Date, endDate: Date): number {
    const date1 = new Date(startDate);
    const date2 = new Date(endDate);
    var diff = date2.getTime() - date1.getTime();
    var diffInHours = diff / (1000 * 3600 * 24);
    return diffInHours;
  }

  addDays(startDate: Date, daysToAdd: number): string {
    const date = new Date(startDate);
    const theDayOfTheMonthOnNextWeek = date.getDate() + daysToAdd;
    date.setDate(theDayOfTheMonthOnNextWeek);
    return this.formatDate(date);
  }
}
