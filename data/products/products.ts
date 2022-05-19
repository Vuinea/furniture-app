import Product from "./Product";

const products: Product[] = [
  {
    id: 1,
    name: "Green Couch",
    imgPath: "/green_couch.jpg",
    currentPrice: 150,
    fullPrice: 200,
    categories: ["livingRoom"],
  },
  {
    id: 2,
    name: "Black Chair",
    imgPath: "/black_chair.jpg",
    currentPrice: 75,
    fullPrice: 100,
    categories: ["livingRoom", "diningRoom"],
  },
  {
    id: 3,
    name: "Dresser",
    imgPath: "/dresser.jpg",
    currentPrice: 65.5,
    fullPrice: 150,
    categories: ["bedRoom"],
  },
  {
    id: 4,
    name: "Lamp",
    imgPath: "/lamp.jpg",
    currentPrice: 70,
    fullPrice: 70,
    categories: ["livingRoom", "bedRoom"],
  },
];

export default products;
