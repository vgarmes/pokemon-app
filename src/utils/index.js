export const searchFilter = (searchArray, searchTerm) => {
  const searchKey = Object.keys(searchTerm)[0];
  const searchValue = Object.values(searchTerm)[0];
  return searchArray.filter((item) => item[searchKey].startsWith(searchValue));
};
