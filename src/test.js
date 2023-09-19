console.log('hre.....')

function comparator(a, b) {
    if(a[1].length < b[1].length) return 1
    if(a[1].length > b[1].length) return -1
    return 0
}

function customSort(str) {
    let last
    return Object.entries(Array.from(str).reduce((acc, current) => {
        if(acc[current]) {
            return ({
                ...acc,
                [current]: acc[current] + current 
            })
        } else {
            return ({
                ...acc,
                [current]: current
            })
        }
      

    }, {})).sort(comparator).map((i, idx) => {
        return i[1]
    }).join('')
}



console.log(customSort('booko'))