/*
  Problem Description:
  There are 2N people a company is planning to interview. The cost of flying the i-th person to city A is costs[i][0], and the cost of flying the i-th person to city B is costs[i][1].

  Return the minimum cost to fly every person to a city such that exactly N people arrive in each city.
*/


(() => {
  const answers = [
    {
      costs: [[10, 20], [30, 200], [400, 50], [30, 20]],
      expect: 110,
    }
  ].map(getAnswer)
  console.log('answers: ', answers);
})();

function getAnswer({ costs }) {
  
}
