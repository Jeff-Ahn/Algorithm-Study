/*
 * Complete the 'towerBreakers' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER m
 */

function towerBreakers(n, m) {
  // Write your code here
  if (m === 1) return 2;
  return n % 2 === 0 ? 2 : 1;
}
