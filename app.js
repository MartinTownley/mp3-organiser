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

async function organiseFiles(rootFolder, mp3File) {
  // need to call extractMetadata on the filepath given
  console.log("ROOT:", rootFolder);
  console.log("MP3File:", mp3File);
  // create filePath:
  const filePath = path.join(rootFolder, mp3File);
  console.log("filePath:", filePath);
}

module.exports = {
  extractMetadata,
  organiseFiles,
};
