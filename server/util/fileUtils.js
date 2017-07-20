// 发送文件
function sendFile(filePath, res) {
    res.set({
        'Content-Type': 'application/octet-stream',
        "Content-Disposition": "attachment;filename=" + encodeURI(fileName)
    });
    if (fs.existsSync(filePath))
        res.download(filePath);
}