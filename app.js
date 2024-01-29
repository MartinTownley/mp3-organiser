const fs = require("fs");
const fsPromises = fs.promises;
const path = require("path");
const mm = require("music-metadata");
const util = require("util");

fs.mkdir("testFolderApp", (err) => {
  console.log(err);
});

async function extractMetadata(filePath) {
  try {
    const metadata = await mm.parseFile(filePath);

    return metadata;
  } catch (error) {
    console.error(error.message);
  }
}

async function organiseFiles(rootFolder) {
  // Get a list of all MP3 files in the root folder
}

const myFilePath = "./test-data/sample01.mp3";
const extracted = extractMetadata(myFilePath);
module.exports = {
  extractMetadata,
  organiseFiles,
};
