(() => {
  const answers = [
    {
      target: 12,
      tree: {
        value: 10,
        left: {
          value: 5,
          left: {
            value: 2,
            left: {
              value: 1,
              left: null,
              right: null,
            },
          },
          right: {
            value: 5,
            left: null,
            right: null,
          },
        },
        right: {
          value: 15,
          left: {
            value: 13,
            left: null,
            right: {
              value: 14,
              left: null,
              right: null,
            },
          },
          right: {
            value: 22,
            left: null,
            right: null,
          },
        },
      },
    },
  ].map(getAnswer)
  console.log('answers: ', answers);
})();

function getAnswer({ tree, target }) {
	let current = tree,
    closest = current.value,
    diff = Math.abs(current.value - target);

	while (true) {
		if (current.value === target) {
			closest = current.value;
			break;
		}

		let tempDiff = Math.abs(target - current.value);
		if (tempDiff < diff) {
			diff = tempDiff;
			closest = current.value;
		}

		if (target > current.value) {
			if (current.right) {
				current = current.right;
			} else break;
		} else if (target < current.value) {
			if (current.left) {
				current = current.left;
			} else break;
		}
	}

	return closest;
}

/*
  Problem Description:

*/
