const fs = require("fs");
const path = require("path");
var filePath = path.join(__dirname,"/file1.txt");
/**删除文件 UnlinkSync(文件路径) */
fs.unlinkSync(filePath);