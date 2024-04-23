export const getHour = () => {
  const date = new Date();
  return date.getHours();
};

export const getUserLanguage = () => {
  return navigator.language.slice(0, 2);
};
