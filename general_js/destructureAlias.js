const obj = {
  key1: 1,
  key2: 2,
};

const func1 = ({ key1: one, key2 }) => {
  console.log(one, key2);
};

func1(obj);  // 1 2
