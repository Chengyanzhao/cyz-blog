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
                .on('error', function (err, data) {
                    updateJobInfo(job.jobId, {
                        jobStatus: 5,
                        jobIsNewState: true,
                        jobErrorInfo: '压缩shp错误' + err.message
                    });
                    console.log(SERVELOG_PREFIX + ':' + job.jobId + ':压缩shp错误:' + err.message);
                })
                .on('close', function () {
                    resolve(shpZipPath);
                })
        });
        fileWriteStream.on("error", function (err) {
            updateJobInfo(job.jobId, {
                jobStatus: 5,
                jobIsNewState: true,
                jobErrorInfo: '写入shp错误' + err.message
            });
            console.log(SERVELOG_PREFIX + ':' + job.jobId + ':写入shp错误:' + err.message);
        });
        shapefile.on("error", function (err) {
            updateJobInfo(job.jobId, {
                jobStatus: 5,
                jobIsNewState: true,
                jobErrorInfo: '读取geoJson错误' + err.message
            });
            console.log(SERVELOG_PREFIX + ':' + job.jobId + ':读取geoJson出错:' + err.message);
        });
        shapefile.pipe(fileWriteStream);
    });
}