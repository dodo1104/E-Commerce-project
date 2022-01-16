export const formatPrice = (number) => {
  const newNumber = Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(number / 100); //because the number is in cents and we want dollars
  return newNumber;
};

export const getUniqueValues = (data, type) => {
  let unique = data.map((item) => item[type]);
  if (type === 'colors') {
    unique = unique.flat();
    /* The flat() method creates a new array with all sub-array elements
    concatenated into it recursively up to the specified depth. */
  }
  return [
    'all',
    ...new Set(unique)
  ]; /* Set objects are collections of values. You can iterate through the elements of a
  set in insertion order. A value in the Set may only occur once;
  it is unique in the Set's collection. */
};
