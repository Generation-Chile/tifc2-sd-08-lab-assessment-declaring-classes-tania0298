// tarea2.js
function Mail(subj, msg) {
  this.subj = subj;
  this.msg = msg;
}

const mail = new Mail(process.argv[2], process.argv[3]);
console.log(mail);

