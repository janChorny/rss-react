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
