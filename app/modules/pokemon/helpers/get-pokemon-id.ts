export const getPokemonIdFromUrl = (url: string) => {
  const id = url.split('/').filter(Boolean).pop();
  if (!id) return;
  return parseInt(id, 10);
};
