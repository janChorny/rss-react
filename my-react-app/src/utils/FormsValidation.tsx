export const validateText = (text: string) => {
  return text.length > 3;
};

export const validateDate = (date: string) => {
  return new Date(date) < new Date();
};

export const validateCountry = (country: string) => {
  return Boolean(country.length);
};

export const validatePayment = (
  firstRadio: React.RefObject<HTMLInputElement>,
  secondRadio: React.RefObject<HTMLInputElement>
) => {
  return firstRadio.current?.checked || secondRadio.current?.checked;
};

export const validatePicture = (picture: string) => {
  return Boolean(picture.length);
};
