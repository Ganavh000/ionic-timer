import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  time: number = 0; // Time in seconds
  timer: any;
  isRunning: boolean = false;
  timeDisplay: string = '00:00';

  startTimer() {
    this.isRunning = true;
    this.timer = setInterval(() => {
      this.time++;
      this.formatTime();
    }, 1000);
  }

  stopTimer() {
    clearInterval(this.timer);
    this.isRunning = false;
  }

  resetTimer() {
    this.stopTimer();
    this.time = 0;
    ..formatTime();
  }

  formatTime() {
    const minutes = Math.floor(this.time / 60).toString().padStart(2, '0');
    const seconds = (this.time % 60).toString().padStart(2, '0');
    this.timeDisplay = `${minutes}:${seconds}`;
  }
}
