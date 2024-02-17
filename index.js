const jsonfile = require("jsonfile");
const moment = require("moment");
const simpleGit = require("simple-git");
const crypto = require("crypto");

const FILE_PATH = "./data.json";

const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const makeCommit = (n) => {
  if (n === 0) return simpleGit().push();

  const commitMessage = "d1";

  const DATE = moment("2024-02-18").format();

  const data = {
    date: DATE,
  };

  console.log(DATE);

  jsonfile.writeFile(FILE_PATH, data, () => {
    simpleGit()
      .add(FILE_PATH)
      .commit(commitMessage, { "--date": DATE }, makeCommit.bind(this, --n));
  });
};

makeCommit(1);
