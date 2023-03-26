export const validateText = (text: string) => {
  if (text.length > 3) return true;
  return false;
};

export const validateDate = (date: string) => {
  if (new Date(date) < new Date()) {
    return true;
  }
  return false;
};

export const validateCountry = (country: string) => {
  if (country.length) return true;
  return false;
};

export const validatePayment = (
  firstRadio: React.RefObject<HTMLInputElement>,
  secondRadio: React.RefObject<HTMLInputElement>
) => {
  if (firstRadio.current?.checked || secondRadio.current?.checked) {
    return true;
  }
  return false;
};
