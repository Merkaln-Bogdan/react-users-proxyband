type AddressType = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: object;
};

type CompanyType = {
  name: string;
  catchPhrase: string;
  bs: string;
};

type UserType = {
  address: AddressType;
  company: CompanyType;
  email: string;
  id: number;
  name: string;
  phone: string;
  username: string;
  website: string;
};

export type { UserType };
