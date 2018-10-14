/*
Given input N - make a staircase (right-aligned) like the following.
    #
   ##
  ###
 ####
#####
*/

const staircase = n => {
  const answer = new Array(n).fill(
      new Array(n).fill(' ')
    ).reduce((acc, row, i) => {
      acc.push(
        row.fill('#', n - 1 - i).join('')
      );
      return acc;
    }, [])
    .join('\n');

  console.log(answer);
}

staircase(10);
