const { extractMetadata, organiseFiles } = require("./app");
const fs = require("fs/promises");
const path = require("path");
const { hasUncaughtExceptionCaptureCallback } = require("process");

describe("organiseFiles()", () => {
  const testRootFolder = path.join(__dirname, "test-organise");
  const artist = "Madonna";
  const mp3FileName = "sample01.mp3";
  const mp3FilePath = path.join(__dirname, "test-data", mp3FileName);

  beforeAll(async () => {
    try {
      fs.mkdir(testRootFolder, { recursive: true }).then(() => {
        console.log("Test root folder Created");
      });
    } catch (err) {
      console.log(err);
    }
  });

  afterAll(async () => {
    // clean up:
    await fs.rm(testRootFolder, { recursive: true }).then(() => {
      console.log("Test root folder removed");
    });
  });
  test("should create a folder based on the artist", async () => {
    // call function to organise file
    await organiseFiles(testRootFolder, mp3FilePath);

    // check folder is created
    const artistFolder = path.join(testRootFolder, artist);
    const folderExists = await fs
      .stat(artistFolder)
      .then(() => true)
      .catch(() => false);

    expect(folderExists).toBe(true);
  });
});
