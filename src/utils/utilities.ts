export const secsToMins = function (time: number): Array<number> {
  var minutes = Math.floor(time / 60)
  var seconds = time - minutes * 60
  return [minutes, seconds]
}

export const shortenThousands = function (num: number): string {
  if (num > 999) {
    num = Math.floor(num / 100)
    if (num.toString()[-1] != '0') {
      num = num / 10
    }
  }
  return `${num}k`
}
