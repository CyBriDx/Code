/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let subStr = new Map()
    let setAlp = new Set()
    if (s.length === 0)
        return 0
    else {
        
        for (let i = 0; i<s.length; i++) {
            setAlp.add(s[i])
            subStr.set(-1,s.substring(0,1))
            for (let j = i+1; j<=s.length - 1; j++) {
                if (setAlp.has(s[j])) {
                    setAlp = new Set()
                    break
                }

                setAlp.add(s[j])
                subStr.set(i,s.substring(i,j + 1))
            }
        }
        return [...subStr].sort((a,b) => a[1].length - b[1].length)[[...subStr].length - 1][1].length
    }
};
