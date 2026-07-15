export interface Car {
  model: string;
  type: string;
  price: number;
  seats: number;
  bags: number;
  fuel: string;
  img: string;
}

export function toSlug(name: string) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

export function findCarBySlug(slug: string) {
  return cars.find((c) => toSlug(c.model) === slug) || null;
}

export const cars: Car[] = [
  {
    model: "Mercedes-Benz S-Class",
    type: "Luxury Sedan",
    price: 120,
    seats: 5,
    bags: 3,
    fuel: "Petrol",
    img: "https://images.unsplash.com/photo-1550355291-bbee04a92027?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    model: "Range Rover Sport",
    type: "Luxury SUV",
    price: 150,
    seats: 7,
    bags: 5,
    fuel: "Diesel",
    img: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    model: "Porsche 911",
    type: "Sports Car",
    price: 200,
    seats: 4,
    bags: 2,
    fuel: "Petrol",
    img: "https://images.unsplash.com/photo-1590362891991-f776e747a588?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
];
