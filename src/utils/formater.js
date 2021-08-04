export const currency = (val = 0) => {
  val =
    val && (typeof val === 'string' || typeof val === 'number')
      ? parseFloat(val)
      : 0;
  let shuffix = '';
  if (val % 1 > 0) {
    val = val.toFixed(2);
    shuffix = '0';
  }
  return (
    val
      .toString()
      .replace('.', ',')
      .replace(/\B(?=(\d{3})+(?!\d))/g, '.')
      .replace(/,00$/, '') + shuffix
  );
};
