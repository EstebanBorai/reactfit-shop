function getProducts(req, res) {
  res.status(200).send([
    {
      id: 1,
      name: 'Tech Short Sleeve T-Shirt',
      image: 'https://images-na.ssl-images-amazon.com/images/I/811o2css%2BmL._SL1500_.jpg',
      category: 'T-Shirt',
      genre: 'M',
      colors: ['grey', 'white', 'black'],
      sizes: ['XL', 'L', 'M', 'S'],
      price: 14.99,
      rating: 4.8,
      brand: 'Under Armour'
    },
    {
      id: 2,
      name: 'Yoga Pants',
      image: 'https://images-na.ssl-images-amazon.com/images/I/61wQ2GLoCoL._UL1500_.jpg',
      category: 'Pants',
      genre: 'F',
      colors: ['purple'],
      sizes: ['L', 'M', '12'],
      price: 13.66,
      rating: 4.9,
      brand: 'IUGA'
    },
    {
      id: 3,
      name: 'Raid 10" Shorts',
      image: 'https://images-na.ssl-images-amazon.com/images/I/51xFLtI1bpL._SL1000_.jpg',
      category: 'Shorts',
      genre: 'M',
      colors: ['black', 'grey'],
      sizes: ['M', 'S'],
      price: 25.71,
      rating: 4.8,
      brand: 'Under Armour'
    },
    {
      id: 4,
      name: 'Sleeveless Scoop Neck',
      image: 'https://images-na.ssl-images-amazon.com/images/I/61tIkbBRMJL._UL1500_.jpg',
      category: 'Tank Top',
      genre: 'F',
      colors: ['grey', 'white', 'black'],
      sizes: ['L', 'M', 'S', 'XS'],
      price: 25.99,
      rating: 3.9,
      brand: 'Cyanstyle'
    },
    {
      id: 5,
      name: 'Originals 3-Stripes Leggings',
      image: 'https://images-na.ssl-images-amazon.com/images/I/71jC5YoYgDL._UL1500_.jpg',
      category: 'Pants',
      genre: 'F',
      colors: ['darkblue', 'black'],
      sizes: ['L', 'M', 'S'],
      price: 25.99,
      rating: 4,
      brand: 'Adidas'
    },
    {
      id: 6,
      name: 'Tech Short Sleeve T-Shirt',
      image: 'https://images-na.ssl-images-amazon.com/images/I/811o2css%2BmL._SL1500_.jpg',
      category: 'T-Shirt',
      genre: 'M',
      colors: ['grey', 'white', 'black'],
      sizes: ['XL', 'L', 'M', 'S'],
      price: 14.99,
      rating: 4.8,
      brand: 'Under Armour'
    },
    {
      id: 7,
      name: 'Yoga Pants',
      image: 'https://images-na.ssl-images-amazon.com/images/I/61wQ2GLoCoL._UL1500_.jpg',
      category: 'Pants',
      genre: 'F',
      colors: ['purple'],
      sizes: ['L', 'M', '12'],
      price: 13.66,
      rating: 4.9,
      brand: 'IUGA'
    },
    {
      id: 8,
      name: 'Raid 10" Shorts',
      image: 'https://images-na.ssl-images-amazon.com/images/I/51xFLtI1bpL._SL1000_.jpg',
      category: 'Shorts',
      genre: 'M',
      colors: ['black', 'grey'],
      sizes: ['M', 'S'],
      price: 25.71,
      rating: 4.8,
      brand: 'Under Armour'
    },
    {
      id: 9,
      name: 'Sleeveless Scoop Neck',
      image: 'https://images-na.ssl-images-amazon.com/images/I/61tIkbBRMJL._UL1500_.jpg',
      category: 'Tank Top',
      genre: 'F',
      colors: ['grey', 'white', 'black'],
      sizes: ['L', 'M', 'S', 'XS'],
      price: 25.99,
      rating: 3.9,
      brand: 'Cyanstyle'
    },
    {
      id: 10,
      name: 'Originals 3-Stripes Leggings',
      image: 'https://images-na.ssl-images-amazon.com/images/I/71jC5YoYgDL._UL1500_.jpg',
      category: 'Pants',
      genre: 'F',
      colors: ['darkblue', 'black'],
      sizes: ['L', 'M', 'S'],
      price: 25.99,
      rating: 4,
      brand: 'Adidas'
    }
  ]);
}

export default getProducts;
