/* Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
clock that shows you the current machine time?

Can you make it so that it updates every second, and shows time in the following formats - 

 - HH:MM:SS (Eg. 13:45:23)

 - HH:MM::SS AM/PM (Eg 01:45:23 PM) */

const currentTime = new Date();
let hours = currentTime.getHours();
let minutes = currentTime.getMinutes();
let seconds = currentTime.getSeconds();

function twenty4hourFormat(){
    setInterval(()=>{
        if(seconds>59){
            minutes++;
            seconds=0;
        }
        if(minutes>59){
            hours++;
            minutes=0;
        }
        if(hours>23){
            hours=0;
            minutes=0;
            seconds=0;
        }
        console.log(`${hours}:${minutes}:${seconds}`);
        seconds++;
    },1000);
}
function twelvehourFormat(){
    let day = "AM";
    if (hours >= 12) {
        day = "PM";
        if(hours > 12) hours=hours-12;
    }
    if(hours == 0) hours = 12;
    setInterval(() => {
      if (seconds > 59) {
        minutes++;
        seconds = 0;
      }
      if (minutes > 59) {
        hours++;
        minutes = 0;
        if (hours > 11) {
          minutes = 0;
          seconds = 0;
          if (hours > 12) {
            hours = 1;
          } else {
            if (day == "AM") day = "PM";
            else if (day == "PM") day = "AM";
          }
        }
      }
      console.log(`${hours}:${minutes}:${seconds} ${day}`);
      seconds++;
    }, 1000);
}

// twenty4hourFormat();
twelvehourFormat();
