export type categories = "livingRoom" | "diningRoom" | "bedRoom"

export default interface Product {
  id: number;
  name: string,
  imgPath: string,
  currentPrice: number,
  fullPrice: number,
  categories: categories[],
}

