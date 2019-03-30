interface IProduct {
  id: number;
  name: string;
  image: string;
  category: string;
  genre: string;
  colors: Array<string>;
  sizes: Array<string>;
  price: number;
  rating: number;
  brand: string;
}

export default IProduct;
