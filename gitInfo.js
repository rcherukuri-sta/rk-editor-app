const fs = require('fs');
const path = require('path');
const {execSync} = require('child_process');
const package_json = require('./package.json');

const execSyncWrapper = (command) => {
  let stdout = null;
  try {
    stdout = execSync(command).toString().trim();
  } catch (error) {
    console.error(error);
  }
  return stdout;
};

const main = () => {
  let gitVersion = execSyncWrapper('git describe --abbrev=0');
  const kriVersion = package_json.dependencies['rk-editor'];

  const gitInfo = {
    gitVersion,
    kriVersion,
  };

  const filePath = path.resolve('src', 'generatedGitInfo.json');
  const fileContents = JSON.stringify(gitInfo, null, 2);

  fs.writeFileSync(filePath, fileContents);
  console.log(`Wrote the following contents to ${filePath}\n${fileContents}`);
};

main();
