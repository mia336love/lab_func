const allEmails = [
  "aaaa@gmail.com",
  "MikleScott@gmail.com",
  "kissmeagain@gmail.com",
  "bigBoo@gmail.com",
  "ensemlestar@gmail.com",
  "speedspeedlover@gmail.com",
];
const blackList = [
  "MikleScott@gmail.com",
  "bigBoo@gmail.com",
  "ensemlestar@gmail.com",
];

let valid = [];

function filterValid(allEmails, blackList) {
  for (let i in blackList) {
    if (blackList.includes(allEmails[i])) {
    }
  }
}
