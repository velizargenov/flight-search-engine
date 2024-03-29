export function formatDate (date) {
  return date && date.format('DD-MM-YYYY');
}

export function isValidInput (value) {
  return value !== '' && value !== null && value !== undefined;
}

export function indicateActiveButton (e, customClass) {
  const activeButton = document.querySelector(`.${customClass}`);

  if (activeButton) {
    activeButton.classList.remove(customClass);
  }

  if (e && e.target) {
    e.target.classList.add(customClass);
  }
}

export function calculateFlightPrice (filteredFlights) {
  filteredFlights.forEach((flight) => {
    let count = 0;
    flight.details.forEach((detail) => {
      count += detail.price;
    });
    flight.price = count;
  });
}

