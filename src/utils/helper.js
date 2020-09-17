const updateObjectInArray = (array, action) => {
    return array.map(item => {
        if (item.id === action.data.id) {
          return action.data;
        }
        return item;
      });
  }

const removeObjectFromArray = (array, action) => {
    return array.filter(item => item.id !== action.id);
}

const movieSorter = (array, sorter) => {
  switch (sorter) {
    case 'RELEASE DATE':
        return array.sort((a, b) =>  Date.parse(a.release_date) - Date.parse(b.release_date));
    case 'GENRE':
        return array.sort((a, b) =>  a.genres.length - b.genres.length);
    case 'RAITING':
        return array.sort((a, b) => a.vote_average - b.vote_average)
    
    default:
        return array;
  }
}

const creatingFilterCategories = (array) => {
    const filterCategories = new Set();
    array.map(item => item.genres.map(el => filterCategories.add(el)));

    return [...filterCategories];
}

const movieFilter = (array, filter) => {
  const startArray = [...array];

  return filter === 'all' ? startArray : array.map( item => {
    return {
      ...item,
      genres: item.genres.map(el=> el.toLowerCase())
    }
  }).filter(el => el.genres.includes(filter.toLowerCase()));
}

export {
    updateObjectInArray,
    removeObjectFromArray,
    movieSorter,
    creatingFilterCategories,
    movieFilter
}