/*
  Problem Description: 227
  Suppose you are at a party with n people (labeled from 0 to n - 1) and among them, there may exist one celebrity. The definition of a celebrity is that all the other n - 1 people know him/her but he/she does not know any of them.

  Now you want to find out who the celebrity is or verify that there is not one. The only thing you are allowed to do is to ask questions like: "Hi, A. Do you know B?" to get information of whether A knows B. You need to find out the celebrity (or verify there is not one) by asking as few questions as possible (in the asymptotic sense).

  You are given a helper function bool knows(a, b) which tells you whether A knows B. Implement a function int findCelebrity(n). There will be exactly one celebrity if he/she is in the party. Return the celebrity's label if there is a celebrity in the party. If there is no celebrity, return -1.



  Example 1:


  Input: graph = [
    [1,1,0],
    [0,1,0],
    [1,1,1]
  ]
  Output: 1
  Explanation: There are three persons labeled with 0, 1 and 2. graph[i][j] = 1 means person i knows person j, otherwise graph[i][j] = 0 means person i does not know person j. The celebrity is the person labeled as 1 because both 0 and 2 know him but 1 does not know anybody.
  Example 2:


  Input: graph = [
    [1,0,1],
    [1,1,0],
    [0,1,1]
  ]
  Output: -1
  Explanation: There is no celebrity.


  Note:

  The directed graph is represented as an adjacency matrix, which is an n x n matrix where a[i][j] = 1 means person i knows person j while a[i][j] = 0 means the contrary.
  Remember that you won't have direct access to the adjacency matrix.
*/


(() => {
  const answers = [
    {
      size: 3,
      knows: (a, b) => {
        const graph = [
          [1,1,0],
          [0,1,0],
          [1,1,1]
        ];

        return graph[a][b] > 0;
      }
    },
    {
      size: 4,
      knows: (a, b) => {
        const graph = [
          [1,1,0,1],
          [0,1,0,1],
          [0,0,1,1],
          [0,0,0,1],
        ];

        return graph[a][b] > 0;
      }
    },
    {
      size: 2,
      knows: (a, b) => {
        const graph = [
          [1,0],
          [0,1]
        ];

        return graph[a][b] > 0;
      }
    }
  ].map(getAnswer)
  console.log('answers: ', answers);
})();

function getAnswer({ size, knows }) {
  const answer = (n) => {
    if (n === 1) return 0;
    let answer = -1;
    let foundPossibleAnswer = false;

    let i = j = 0;
    while(i < n) {
      j = 0;
      while (j < n) {
        if (i !== j && knows(i, j)) break; // i knows j -> i can't be the celebrity.\
        else {
          j += 1;
          if (j === n) { // if i doesn't know any j's, then i is the only possible celebrity.
            foundPossibleAnswer = true;
          }
        }
      }
      if (foundPossibleAnswer) break;
      i += 1;
    }

    if (foundPossibleAnswer) {
      j = i; // set j to target column.
      i = 0; // go thru each row again.
      while(i < n) {
        if (knows(i, j)) {
          i += 1;
          if (i === n && answer === -1) {
            answer = j;
            break;
          }
        } else {
          break;
        }
      }
    }

    return answer;
  }

  return answer(size);
}
