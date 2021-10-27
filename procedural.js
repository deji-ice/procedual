function dot_product(v1, v2) {
  let ps = 0;
  for (i = 0; i < 2; i++) {
    ps += v1[i] * v2[i];
  }
  if (ps === 0) {
    console.log('The dot product is ' + ps + ' and its Orthogonal');
  } else {
    console.log('The dot product is ' + ps);
  }
}

dot_product([2, 6], [7, 9]);
dot_product([3, 1], [8, 6]);