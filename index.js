const fs = require('fs');

fs.rename('file.txt', 'newFolder/file1.txt', (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('File moved successfully');
    }
});
