/* import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'miliSeconds'
})
export class MiliSecondsPipe implements PipeTransform {
  transform(value: number): string {
    if (value === null || value === undefined) {
      return;
    }
    let minutes;
    let seconds;
    let hours;

    hours = Math.floor(value * 0.001 / 3600);
    minutes = Math.floor((value * 0.001 % 3600) / 60);
    seconds = Math.floor(value * 0.001 % 60);

    hours = minutes < 10 ? `${hours}` : hours;
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    seconds = seconds < 10 ? `0${seconds}` : seconds;

    if (hours <= 0) {
      return `${minutes}:${seconds}`;
    } else {
      return `${hours}:${minutes}:${seconds}`;
    }
  }
}

@Pipe({
  name: 'minuteSeconds'
})
export class MinuteSecondsPipe implements PipeTransform {
  transform(value: number): string {
    if (value === null || value === undefined) {
      return;
    }
    let minutes;
    let seconds;
    let hours;

    hours = Math.floor(value / 3600);
    minutes = Math.floor((value % 3600) / 60);
    seconds = Math.floor(value % 60);

    hours = minutes < 10 ? `${hours}` : hours;
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    seconds = seconds < 10 ? `0${seconds}` : seconds;

    if (hours <= 0) {
      return `${minutes}:${seconds}`;
    } else {
      return `${hours}:${minutes}:${seconds}`;
    }
  }
}
@Pipe({
  name: 'textHourSeconds'
})
export class TextHourSeconds implements PipeTransform {
  transform(value: number): string {
    if (value === null || value === undefined) {
      return;
    }
    let minutes;
    let seconds;
    let hours;

    hours = Math.floor(value / 3600);
    minutes = Math.floor((value % 3600) / 60);
    seconds = Math.floor(value % 60);

    hours = minutes < 10 ? `${hours}` : hours;
    minutes = minutes < 10 ? `${minutes}` : minutes;
    seconds = seconds < 10 ? `${seconds}` : seconds;
    if (minutes <= 0) {
      return `${seconds} second`;
    } else if (hours <= 0 && minutes > 0 && seconds <= 0) {
      return `${minutes} minute`;
    } else if (hours <= 0) {
      return `${minutes} minute ${seconds} second`;
    } else if (hours > 0 && minutes > 0 && seconds > 0) {
      return `${hours} hour ${minutes} minute ${seconds} second `;
    } else if (hours > 0 && minutes > 0 && seconds <= 0) {
      return `${hours} hour ${minutes} minute`;
    }
  }
}
 */
