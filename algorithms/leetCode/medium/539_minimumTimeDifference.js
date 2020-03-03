/*
  Problem Description:

  Given a list of 24-hour clock time points in "Hour:Minutes" format, find the minimum minutes difference between any two time points in the list.

  Example 1:
  Input: ["23:59","00:00"]
  Output: 1

  Note:
  The number of time points in the given list is at least 2 and won't exceed 20000.
  The input time is legal and ranges from 00:00 to 23:59.
*/


(() => {
  const answers = [
    // {
    //   timePoints: ["23:59","00:00"],
    //   expected: 1,
    // },
    // {
    //   timePoints: ["23:59","00:00", "11:59", "00:00"],
    //   expected: 0,
    // },
    // {
    //   timePoints: ["12:12", "00:13"],
    //   expected: 719,
    // },
    {
      timePoints: ["01:39","10:26","21:43"],
      expected: 236,
    }
  ].map(findMinDifference)
  console.log('answers: ', answers);
})();

function findMinDifference({ timePoints }) {
    let minDiff = Infinity;
    const sums = [];

    for (let i = 0; i < timePoints.length; i++) {
      const [firstA, firstB] = getMinutes(timePoints[i]);
      // firstA
      // firstB
      for (let j = 0; j < timePoints.length; j++) {
        if (i == j) continue;

        const [secondA, secondB] = getMinutes(timePoints[j]);
        // secondA
        // secondB
        if (firstB > 0) {
          Math.abs(secondA - firstB)
          sums.push(Math.abs(secondA - firstB));
        }
        if (secondB > 0) {
          sums.push(Math.abs(secondB - firstA));
        }
        sums.push(
          Math.abs(firstA - secondA)
        );

        minDiff = Math.min(minDiff, ...sums);
      }
    }
    return minDiff;
};

function getMinutes(str)  {
  let [hourStr, minStr] = str.split(':');
  const hours = Number(hourStr);
  const minutes = Number(minStr);

  if (hours === 0) {
    return [(24 * 60) + minutes, minutes];
  } else {
    return [(hours * 60) + minutes, ((hours + 12) * 60) + minutes];
  }
}
