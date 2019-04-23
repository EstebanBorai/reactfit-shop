/* tslint:disable */

function getProducts(req, res) {
  res.status(200).send([
    {
      id: '17717b86-9d13-488c-a0c1-47fae91a1878',
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
      id: '30fd26a0-a06f-4a81-a36c-0eda20acd732',
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
      id: '30fd26a0-a06f-4a81-a36c-0eda20acd734',
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
      id: '30fd26a0-a06f-4a81-a36c-0eda20acd733',
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
      id: '30fd24a0-a06f-4a81-a36c-0eda20acd732',
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
      id: '30fd26a0-a06e-4a81-a36c-0eda20acd732',
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
      id: '30fd26a0-a06f-4a81-ae6c-0eda20acd732',
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
      id: '30fd26a0-a06f-4a81-a436c-0eda2acd732',
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
      id: '30fd26a0-a06f-4a81-a36c-0eda20acd432',
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
      id: '30fd26a0-a06f-4a81-a36c-0eda20ac4732',
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
