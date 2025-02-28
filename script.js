const fs = require('fs');
const path = require('path');

const baseDirectory = path.join(__dirname, 'public/assets');
const outputPath = path.join(__dirname, 'src/assets/albums.json');

fs.readdir(baseDirectory, (err, folders) => {
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    }

    const albums = [];

    folders.forEach((folder, folderIndex) => {
        const directoryPath = path.join(baseDirectory, folder);

        if (fs.lstatSync(directoryPath).isDirectory()) {
            const files = fs.readdirSync(directoryPath);

            const photos = files.map((file, fileIndex) => ({
                id: fileIndex + 1,
                src: `/assets/${folder}/${file}`,
                title: `${folder} Photo ${fileIndex + 1}`,
                description: `Description for ${folder} Photo ${fileIndex + 1}`
            }));

            const album = {
                id: folderIndex + 1,
                title: folder.charAt(0).toUpperCase() + folder.slice(1),
                cover: photos.length > 0 ? photos[0].src : '',
                photos: photos
            };

            albums.push(album);
        }
    });

    fs.writeFile(outputPath, JSON.stringify(albums, null, 2), 'utf8', (err) => {
        if (err) {
            return console.log('Unable to write file: ' + err);
        }
        console.log('albums.json updated successfully');
    });
});
