function calcula() {
    let s = document.getElementById("myText").value;
    let map = {}
    let start = 0
    let maxLen = 0
    let arr = s.split('')

    for (i=0; i < s.length; i++) {
        let current = map[arr[i]]
        if (current!=null && start <= current) {
            start = current + 1
        } else {
            maxLen = Math.max(maxLen, i - start + 1)
        }

        map[arr[i]] = i
        console.log(s.substring(0,maxLen))
        console.log(maxLen)
    }
    alert(s.substring(0,maxLen))
    return maxLen
}
