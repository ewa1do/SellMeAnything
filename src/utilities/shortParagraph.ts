export const shortParagraph = (string = '', limit = 9) => {
  const shorterP = string
    .split(' ')
    .filter((_, i) => i < limit)
    .join(' ');

  return shorterP;
};
