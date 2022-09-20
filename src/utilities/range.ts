/**
 *
 * @param {number} start The starting index
 * @param {number} end The last index
 * @returns An array beetween the start and the end parameters
 */

export const range = (start, end) => {
  let length = end - start + 1;
  const rangeArray = Array.from({ length }, (_, i) => i + start);
  return rangeArray;
};
