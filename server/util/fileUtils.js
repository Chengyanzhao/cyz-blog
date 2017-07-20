// 发送文件
function sendFile(filePath, res) {
    res.set({
        'Content-Type': 'application/octet-stream',
        "Content-Disposition": "attachment;filename=" + encodeURI(fileName)
    });
    if (fs.existsSync(filePath))
        res.download(filePath);
}

/**
 * 创建文件软链接
 * 
 * @param {String|Array} src 源文件
 * @param {String|Array} dst 映射文件
 * @param {Boolean} errOps 遇到错误是否删除全部已执行结果
 */
function mklink(src, dst, errOps) {
    return new Promise(function (resolve, reject) {
        var result = true;
        var _src, _dst;
        if (typeof src === 'string' && typeof dst === 'string') {
            if (!src.trim()) {
                reject('error : src is White or Space');
            }
            if (!dst.trim()) {
                reject('error : dst is White or Space');
            }
            _src = [src];
            _dst = [dst];
        } else if (Object.prototype.toString.call(src) === '[object Array]' && Object.prototype.toString.call(dst) === '[object Array]') {
            if (src.length != dst.length) {
                reject("src's lengh can't match the dst's length");
            }
            _src = src;
            _dst = dst;
        }
        var tasks = [];
        _src.forEach(function (srcItem, index) {
            var dstItem = _dst[index];
            var dstDir = path.dirname(dstItem);
            if (!fs.existsSync(dstDir)) {
                mkdirSync(dstDir);
            }
            tasks.push(fs.symlink.bind(this, srcItem, dstItem, 'file'));
        }, this)
        async.parallel(tasks, function (err, result) {
            if (err) {
                if (errOps) {
                    _dst.forEach(function (dstItem) {
                        if (fs.existsSync(dstItem))
                            fs.unlinkSync(dstItem);
                    })
                }
                resolve(false);
            } else
                resolve(true);
        })
    })
}

exports.mklink = mklink;