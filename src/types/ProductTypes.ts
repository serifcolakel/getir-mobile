export interface ProductTypes {
  id: string;
  name: string;
  productCount: number;
  products: Product[];
  slug: string;
}

export interface Product {
  id: string;
  name: string;
  shortName: string;
  shortDescription: string;
  squareThumbnailURL: string;
  picURLs: string[];
  categoryIds: string[];
  subCategoryIds: string[];
  displayType: number;
  price: number;
  priceText: string;
  count: number;
  isFavorite: boolean;
  infoMessages: any[];
  currency: Currency;
  additionalPropertyTables: any[];
  tags: any[];
  slug: string;
  badgeImages: any[];
  details: Details;
}

export interface Currency {
  symbol: string;
  codeAlpha: string;
  isSymbolFirst: boolean;
}

export interface Details {
  additionalPropertyTables: any[];
}
