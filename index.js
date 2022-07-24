const fs = require('fs').promises;
const path = require('path');

/***
* THIS MODULE CAN BE USED TO CREATE A FOLDER AND A FILE
* @Type function { main}
* @Params dirname { dir}
* @Params filename { file}
* @Params file content { data }
***/
async function main(dir, file, data) {
  const homeDir = path.join(__dirname, dir);

  try {
    await fs.mkdir(homeDir);
  } catch (e) {
    console.log(`${homeDir} already exists.`);
  }

  // Generate a file
   const filePath = path.join(homeDir, file);

   try {
     await fs.unlink(filePath);
   } catch (e) {
     console.log(`Failed to remove ${filePath}`);
   }

   await fs.writeFile(filePath, JSON.stringify(data));
   console.log("Writting complete");
}

//call main function with params
// main(home, file, data);
