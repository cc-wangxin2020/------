var findAnagrams = function (s, p) {
  const m = p.length
  const res = []
  let i = 0, j = 0
  while (i <= s.length - p.length) {
      const map = new Map()
      for (let k of p) {
          map.set(k, map.has(k) ? map.get(k) + 1 : 1)
      }
      let needType = map.size
      while (j < m) {
          if (map.has(s[j + i]) && map.get(s[j + i]) > 0) {
              map.set(s[j + i], map.get(s[j + i]) - 1)
              if (map.get(s[j + i]) < 1) {
                  needType -= 1
              }
              j++
          }else {
              break
          }
      }
      if (needType < 1) {
          res.push(i)
      }
      i++
      j = 0
  }
  return res
};
let s = "cbaebabacd", p = "abc"
console.log(findAnagrams(s, p));