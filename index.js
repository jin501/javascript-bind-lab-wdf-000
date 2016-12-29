// const app = "I don't do much.";

// let digitalClock = {
//   time: Math.floor(Date.now()/1000),
//   startTicking: ()=> {
//     setInterval(() => this.time ++, 1000);
//   }
// }

var digitalClock = {
  time: Math.round(Date.now() / 1000),
  startTicking() {
    setInterval(function(){
      this.time++
    }.bind(this), 1000)
  }
}

function censor(word, string) {
  let regex = new RegExp(word, 'gi');
  return string.replace(regex, "BLEEP");
}

const violenceCensor = censor.bind(null, 'violence');

const drugsCensor = censor.bind(null, 'drugs');
