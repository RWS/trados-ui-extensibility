const path = require("path");
const fs = require("fs");

console.info(
  "\nRemoving ErrorResponse unused import from generated .ts files in apis folder"
);
const apisDirectoryPath = path.resolve(__dirname, "src/lc-public-api/apis");

fs.readdir(apisDirectoryPath, (err, files) => {
  if (err) {
    return console.error(`Unable to scan directory ${apisDirectoryPath}`, err);
  }
  let fileCount = 0;
  files.forEach(file => {
    if (file.split(".")[1] === "ts") {
      fileCount++;
      console.info(`[${fileCount}] Parsing ${file}`);
      removeErrorResponseFromFile(file);
    }
  });
  console.info(`Parsed ${fileCount} .ts files.`);
});

const removeErrorResponseFromFile = file => {
  const filepath = `${apisDirectoryPath}/${file}`;
  var initialContent = fs.readFileSync(filepath, "utf-8");
  // remove "    ErrorResponse," along with new line char (number of spaces may vary depending on openapigenerator version)
  var newContent = initialContent.replace(/[ ]+ErrorResponse,\n/, "");

  fs.writeFileSync(filepath, newContent, "utf-8");
};
