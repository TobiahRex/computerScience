/**
 * NOTE: Provide an intuition behind the Force Net of momentum formula
 and understand how their individual variables effect the final result,
 as they change over time.
 */
(() => {
  const answers = [
    {
      inputs: {
        magnitude: 1,
        distance: 3,
        duration: 1,
      }
    },
    {
      inputs: {
        magnitude: 2,
        distance: 3,
        duration: 1,
      }
    },
    {
      inputs: {
        magnitude: 3,
        distance: 3,
        duration: 1,
      }
    },
    {
      inputs: {
        magnitude: 4,
        distance: 4,
        duration: 2,
      }
    },
    {
      inputs: {
        magnitude: 4,
        distance: 5,
        duration: 2,
      }
    },
  ].map(getAnswer)
  console.log('answers: ', answers);
})();

/**
  NOTE:
  A longer duration will dilute the overall net force.

  A higher magnitude will proportionately increase the final force.
  But an increase in duration, will have over double the effect on force, than magnitude.
 */

function getAnswer({ inputs: { magnitude, distance, duration } }) {
  const netForce = (magnitude * (distance/duration)) / duration;
  return netForce;
}
