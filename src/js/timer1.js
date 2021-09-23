class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.refs = {
      fieldDays: document.querySelector(`${this.selector} span[data-value="days"]`),
      fieldHours: document.querySelector(`${this.selector} span[data-value="hours"]`),
      fieldMins: document.querySelector(`${this.selector} span[data-value="mins"]`),
      fieldSecs: document.querySelector(`${this.selector} span[data-value="secs"]`),
    };
    this.start(targetDate);
  }

  getTimerComponents(time) {
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((time % (1000 * 60)) / 1000);
    return { days, hours, mins, secs };
  }

  updateDate({ days, hours, mins, secs }) {
    this.refs.fieldDays.textContent = `${days}`;
    this.refs.fieldHours.textContent = `${hours}`;
    this.refs.fieldMins.textContent = `${mins}`;
    this.refs.fieldSecs.textContent = `${secs}`;
  }

  start(targetDate) {
    setInterval(() => {
      this.updateDate(this.getTimerComponents(targetDate - Date.now()));
    }, 1000);
  }
}

const timer1 = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jan 1, 2022'),
});