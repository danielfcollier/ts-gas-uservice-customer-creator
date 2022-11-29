const fs = require("fs/promises");
const path = require("path");

const config = require("./webpack.config.cjs")();

const keyNames = Object.keys(config.entry);
const outDir = path.resolve(__dirname, config.output.path);
const baseName = config.output.filename;

const fileNames = keyNames.map((key) => {
  const fileName = baseName.replace("[name]", key);
  return [path.resolve(outDir, fileName), key];
});

fileNames.forEach(async ([fileName, key]) => {
  try {
    const data = await fs.readFile(fileName, "utf-8");

    const beginFunctionPattern = String.raw`^var ${key}\;\(`;
    const beginFunctionReplacement = `var ${key}=`;
    const beginFunctionRegex = new RegExp(beginFunctionPattern);

    const endFunctionPattern = String.raw`\)\(\)\;$`;
    const endFunctionReplacement = `;`;
    const endFunctionRegex = new RegExp(endFunctionPattern);

    const formattedData = data
      .replace(beginFunctionRegex, beginFunctionReplacement)
      .replace(endFunctionRegex, endFunctionReplacement);

    await fs.writeFile(fileName, formattedData, "utf-8");
  } catch (err) {
    console.error(err);
  }
});
