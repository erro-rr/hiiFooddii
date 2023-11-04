export function filterData(searchText,restaurants) {
    const filterData=restaurants.filter((resturant) =>
      resturant?.info?.name?.toLowerCase().includes(searchText.toLowerCase())
  );
    return filterData;
  }