export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  description?: string;
  isNew?: boolean;
  quantity?: number;
}