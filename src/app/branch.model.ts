export interface Branches {
  pageNumber: number;
  pageCount: number;
  pageSize: number;
  totalItemCount: number;
  items: [Branch];
}

export interface Branch {
  id: number;
  name: string;
  manager: string;
  address: Address;
  phones: [string];
  email: string;
  equipments: [string];
  googleMapsRating?: string;
}

export interface Address {
  street: string;
  city: string;
  postalCode: string;
}
