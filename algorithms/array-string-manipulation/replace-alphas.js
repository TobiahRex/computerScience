(() => {
  let input = 'a.$bc,';
  console.log(replaceAlphas(input));
})();

function replaceAlphas(str){
  let answer = '',
    ranges = [
      getAscii('a'),
      getAscii('z'),
      getAscii('A'),
      getAscii('Z'),
    ],
    start = Math.min(...ranges),
    finish = Math.max(...ranges),
    stack = [];

  for(let i = 0; i < str.length; i++) {
    if ( start <= str[i].charCodeAt(0) && str[i].charCodeAt(0) <= finish) stack.push(str[i]);
    console.log(str[i].charCodeAt(0))
    stack;
  }

  for(let i = 0; i < str.length; i++) {
    let v = str[i];
    if (start <= v.charCodeAt(0) && v.charCodeAt(0) <= finish) {
      v = stack.pop();
      answer[i] = v;
    }
    answer += v;
  }
  return answer;
}

function getAscii(char) {
  return char.charCodeAt(0);
}
