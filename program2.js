/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const hm={I:1, V:5, X:10, L :50, C :100, D :500, M :1000}
    if (!s) return 0
    let n=s.length
    let num=hm[s[0]]
    for (let i=1;i<n;i++){
        if (hm[s[i]]>hm[s[i-1]]){
            num+=(hm[s[i]]-(2*hm[s[i-1]]))
        }
        else{
            num+=hm[s[i]]
        }
    }
    return num
};


module.exports={romanToInt}