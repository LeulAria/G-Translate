const lngDetector = new (require('languagedetect'));

module.exports = () => {
    const d = lngDetector.detect('this is sheet');
    return d
}