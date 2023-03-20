export enum SelectedPage {
  Home = "home",
  Brands = "brands",
  Offers = "offers",
  Promotions = "promotions",
  AboutUs = "aboutus",
  Contactus = "contactus",
}

export interface OffersType {
  icon: JSX.Element;
  title: string;
  code: string;
}

export interface PromotionsType {
  image: string,
  title: string,
}

export interface ContactType {
  title: string,
  discription: string,
  contacts: contact[]
}

interface contact {
  icon: JSX.Element;
  contact_title: string,
  contact_desc: number[] | string,
}

