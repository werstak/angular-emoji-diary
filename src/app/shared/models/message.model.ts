import * as moment from 'moment';

export class Message {
  date: string;

  constructor(public message: string, public id: string) {
    this.date = moment().format('hh:mm A | MMM DD, YYYY');
  }
}
