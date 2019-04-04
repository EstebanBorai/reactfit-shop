import IFilters from 'types/IFilters';

function getFilters(products): Promise<IFilters> {
  let nextFilters: IFilters = {
    genres: [],
    sizes: [],
    maxPrice: 0,
    minPrice: 0
  };

  return new Promise((resolve) => {
    products.forEach((product, index) => {
      if (index === 0) {
        nextFilters.maxPrice = product.price;
        nextFilters.minPrice = product.price;
      } else {
        if (product.price > nextFilters.maxPrice) {
          nextFilters.maxPrice = product.price;
        }
  
        if (product.price < nextFilters.minPrice) {
          nextFilters.minPrice = product.price;
        }
      }
  
      if (nextFilters.genres.indexOf(product.genre) === -1) {
        nextFilters.genres.push(product.genre);
      }
  
      product.sizes.forEach((size) => {
        if (nextFilters.sizes.indexOf(size) === -1) {
          nextFilters.sizes.push(size);
        }
      });
    });
    return resolve(nextFilters);
  });
}

export default getFilters;
