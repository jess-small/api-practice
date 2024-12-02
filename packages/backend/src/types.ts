interface Cat {
  name: string;
  subscriptionActive: boolean;
  breed: string;
  pouchSize: 'A' | 'B' | 'C' | 'D' | 'E';
}

interface Customer {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  cats: Cat[];
}

export { Cat, Customer };
