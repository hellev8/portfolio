const fs = require('fs');
const path = require('path');

const imagesDir = path.join(__dirname, 'public/assets/images');
const outputFilePath = path.join(__dirname, 'src/assets/photos.json');

fs.readdir(imagesDir, (err, files) => {
    if (err) {
        console.error('Errore nella lettura della directory delle immagini:', err);
        return;
    }

    const photos = files.filter(file => /\.(jpg|jpeg|png|gif)$/i.test(file)).map((file, index) => ({
        id: index + 1,
        src: `/assets/images/${file}`,
        title: `Photo ${index + 1}`,
        description: `Description for Photo ${index + 1}`
    }));

    fs.writeFile(outputFilePath, JSON.stringify(photos, null, 2), err => {
        if (err) {
            console.error('Errore nella scrittura del file JSON:', err);
            return;
        }
        console.log('File photos.json generato con successo!');
    });
});
