/*
  BitCounting
*/

export function countBits(i) {
  i = i - ((i >> 1) & 0x55555555);
  i = (i & 0x33333333) + ((i >> 2) & 0x33333333);
  return (((i + (i >> 4)) & 0x0f0f0f0f) * 0x01010101) >> 24;
}
