const path = require("path");
const { extractMetadata } = require("./app.js");

describe("Organise MP3s Tests", () => {
  describe("Extract Metadata", () => {
    test("should return artist and album information", () => {
      const filePath = path.resolve(__dirname, "test-data", "sample01.mp3");
      const metadata = extractMetadata(filePath);

      expect(metadata).toEqual({
        artist: "Test Artist",
        album: "Test Album",
      });
    });
  });
});
