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
  for (let i in allEmails) {
    if (!blackList.includes(allEmails[i])) {
      valid.push(allEmails[i]);
    }
  }
  return valid;
}
let result = filterValid(allEmails, blackList);
console.log(result);
