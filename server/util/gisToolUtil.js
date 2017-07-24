var fs = require('fs')
var ogr2ogr = require('ogr2ogr')
// GeoJSON转shp
function geoJson2ShpSync(shpZipFile, shpName, geoJson) {
    return new Promise((resolve, reject) => {
        let shapefile = ogr2ogr(geoJson).format('ESRI Shapefile').stream();
        let fileWriteStream = fs.createWriteStream(shpZipFile);
        fileWriteStream.on("finish", function () {
            fs.createReadStream(shpZipFile)
                .pipe(unzip.Extract({
                    path: shpDir
                }))
                .on('error', function (err, data) {})
                .on('close', function () {
                    resolve(shpZipPath);
                })
        });
        fileWriteStream.on("error", function (err) {});
        shapefile.on("error", function (err) {});
        shapefile.pipe(fileWriteStream);
    });
}