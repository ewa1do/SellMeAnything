export const shortParagraph = (string = '') => {
  const shorterP = string
    .split(' ')
    .filter((_, i) => i < 9)
    .join(' ');

  return shorterP;
};
