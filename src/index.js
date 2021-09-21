import './sass/main.scss';

class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
    this.refs = {
      fieldDays: document.querySelector(`${this.selector} span[data-value="days"]`),
      fieldHours: document.querySelector(`${this.selector} span[data-value="hours"]`),
      fieldMins: document.querySelector(`${this.selector} span[data-value="mins"]`),
      fieldSecs: document.querySelector(`${this.selector} span[data-value="secs"]`),
    };
    this.start();
  }
  start = () => {
    this.refs.fieldDays.textContent = 100;
    this.refs.fieldHours.textContent = 100;
    this.refs.fieldMins.textContent = 100;
    this.refs.fieldSecs.textContent = 100;
    console.log(this.refs);
  };
}

const timer1 = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jul 17, 2019'),
});


/*
 * Оставшиеся дни: делим значение UTC на 1000 * 60 * 60 * 24, количество
 * миллисекунд в одном дне (миллисекунды * секунды * минуты * часы)
 */
const days = Math.floor(time / (1000 * 60 * 60 * 24));

/*
 * Оставшиеся часы: получаем остаток от предыдущего расчета с помощью оператора
 * остатка % и делим его на количество миллисекунд в одном часе
 * (1000 * 60 * 60 = миллисекунды * минуты * секунды)
 */
// const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

/*
 * Оставшиеся минуты: получаем оставшиеся минуты и делим их на количество
 * миллисекунд в одной минуте (1000 * 60 = миллисекунды * секунды)
 */
// const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));

/*
 * Оставшиеся секунды: получаем оставшиеся секунды и делим их на количество
 * миллисекунд в одной секунде (1000)
 */
// const secs = Math.floor((time % (1000 * 60)) / 1000);
