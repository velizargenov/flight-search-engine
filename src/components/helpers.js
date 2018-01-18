export function formatDate (date) {
  return date && date.format('DD-MM-YYYY');
}

export function isValidInput (value) {
  return value !== '' && value !== null && value !== undefined;
}
