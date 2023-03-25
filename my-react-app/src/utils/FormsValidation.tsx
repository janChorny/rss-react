export const validateText = (name: string) => {
  if (name.length > 3) return true;
  return false;
};
