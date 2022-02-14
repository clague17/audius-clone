export const numToHumanReadable = function (time: number): Array<string> {
  var minutes = Math.floor(time / 60)
  var hours = Math.floor(minutes / 60)
  minutes = minutes - hours * 60
  var seconds = time - minutes * 60 - hours * 3600
  var strMinutes = minutes.toString()
  var strSeconds = seconds.toString()
  var strHours = hours.toString()
  if (hours != 0) {
    if (minutes < 10) {
      strMinutes = `0${minutes}`
    }
  }
  if (minutes != 0) {
    if (seconds < 10) {
      strSeconds = `0${seconds}`
    }
  }

  return [strHours, strMinutes, strSeconds]
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
