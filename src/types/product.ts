export interface IProduct {
  id: string;
  title: string;
  description: string;
  height: number;
  width: number;
  length: number;
  weight: number;
  barcode: string;
  categories: string;
  value: number;
  quantity: number;
  availability: boolean;
  acquisitionDate: string;
  image: string;
}