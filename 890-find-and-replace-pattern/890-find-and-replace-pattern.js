/**
 * @param {string[]} words
 * @param {string} pattern
 * @return {string[]}
 */
var findAndReplacePattern = function(words, pattern) {
    var res = [];
    for (var i = 0; i < words.length; i++) {
        var pdict = {};
        var wdict = {};
        var flag = true;
        for (var j = 0; j < pattern.length; j++) {
            if (wdict[words[i][j]] !== pdict[pattern[j]]) {
                flag = false;
                break;
            }
            pdict[pattern[j]] = j;
            wdict[words[i][j]] = j;
        }
        if (flag) res.push(words[i])
    }
    return res;
};