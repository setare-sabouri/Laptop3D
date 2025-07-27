export const shiftDigits = (digits, shift) => {
  return digits
    .split('')
    .map(d => ((parseInt(d) + shift + 10) % 10).toString())
    .join('');
};

export const generateDigitPassword = () => {
  const raw = Array.from({ length: 6 }, () => Math.floor(Math.random() * 10)).join('');
  const shift = Math.floor(Math.random() * 9) - 4; // -4 to +4
  const encoded = shiftDigits(raw, shift);
  return { encoded, raw, shift };
};
