var ccNumArr = ['4916-2600-1804-0530', '4779-252888-3972', '4252-278893-7978', '4556-4242-9283-2260999999'];


function biggestSum(arr) {

    var biggestNumber = 0
    var indexOfBiggestNumber

    for (i = 0; i < arr.length; i++) {
        var ccNumberSum = 0
        var ccNumber = arr[i]

        console.log(ccNumber)

        for (j = 0; j < ccNumber.length; j++) {

            if (ccNumber[j] === '-') continue
            ccNumberSum += Number(ccNumber[j])

            console.log(ccNumberSum)

        }
        if (ccNumberSum >= biggestNumber) {

            biggestNumber = ccNumberSum
            indexOfBiggestNumber = i

        }

        console.log(`\nThis is the VALUE of biggest number: ${biggestNumber}\n`)
        console.log(`\nThis is the INDEX of biggest number: ${indexOfBiggestNumber}\n`)

    }
    return ccNumArr[indexOfBiggestNumber]
}


console.log(`\nThis is the answer: ${biggestSum(ccNumArr)}\n`)
