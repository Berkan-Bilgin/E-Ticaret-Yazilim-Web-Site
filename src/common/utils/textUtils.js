export const truncateLabel = (label) => {
  const words = label.split(" ");
  if (words.length <= 1) {
    return label;
  }
  const firstWord = words[0];
  const secondWordFirstLetter = words[1].charAt(0);
  return `${firstWord} ${secondWordFirstLetter}...`;
};
