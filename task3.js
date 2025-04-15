
// tarea3.js
function Mail(subj, msg) {
    this.subj = subj;
    this.msg = msg;
    this.printMail = function () {
        console.log(`${this.subj}: ${this.msg}`);
    };
  }
  
  const mail = new Mail(process.argv[2], process.argv[3]);
  mail.printMail();
  