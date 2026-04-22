export type MenuItem = {
  id: string;
  number?: string;
  name: string;
  description?: string;
  regularPrice?: string;
  smotheredPrice?: string;
  price?: string;
  badges?: string[];
  note?: string;
};

export type MenuCategory = {
  id: string;
  title: string;
  timeRestriction?: string;
  note?: string;
  items: MenuItem[];
};

export const menuData: MenuCategory[] = [
  {
    id: "breakfast",
    title: "Breakfast Burritos & Tacos",
    timeRestriction: "Available 9AM–11AM ONLY",
    note: "All breakfast burritos include cheese. All breakfast tacos include cheese, lettuce & salsa.",
    items: [
      {
        id: "b1",
        name: "Egg and Potato",
        regularPrice: "$4.39",
        smotheredPrice: "$5.38",
        badges: ["Breakfast Only"],
      },
      {
        id: "b2",
        name: "Egg, Potato + Choice of Meat",
        description: "Ham, Bacon, Sausage, or Chorizo",
        regularPrice: "$4.90",
        smotheredPrice: "$6.00",
        badges: ["Breakfast Only"],
      },
      {
        id: "b3",
        name: "Egg, Potato and Asada",
        regularPrice: "$6.79",
        smotheredPrice: "$7.85",
        badges: ["Breakfast Only"],
      },
      {
        id: "b4",
        name: "Combination Burrito",
        description: "All meats",
        regularPrice: "$6.59",
        smotheredPrice: "$7.65",
        badges: ["Breakfast Only"],
      },
      {
        id: "b5",
        name: "3 Egg, Potato, Asada Tacos",
        price: "$7.25",
        badges: ["Breakfast Only"],
      },
      {
        id: "b6",
        name: "3 Egg, Potato, Chorizo Tacos",
        price: "$6.55",
        badges: ["Breakfast Only"],
      },
    ],
  },
  {
    id: "burritos",
    title: "Burritos",
    note: "All burritos come with chile unless indicated.",
    items: [
      {
        id: "bu0",
        number: "#0",
        name: "Bean and Cheese",
        description: "No Chile",
        regularPrice: "$3.19",
      },
      {
        id: "bu1",
        number: "#1",
        name: "Bean & Chile",
        regularPrice: "$3.19",
        smotheredPrice: "$4.25",
      },
      {
        id: "bu1a",
        number: "#1A",
        name: "Bean, Cheese & Chile",
        regularPrice: "$4.25",
        smotheredPrice: "$5.35",
      },
      {
        id: "bu1b",
        number: "#1B",
        name: "Bean, Cheese, Lettuce & Chile",
        regularPrice: "$5.35",
        smotheredPrice: "$6.35",
      },
      {
        id: "bu2",
        number: "#2",
        name: "Beef & Chile",
        regularPrice: "$4.65",
        smotheredPrice: "$5.75",
      },
      {
        id: "bu3",
        number: "#3",
        name: "Bean, Beef & Chile",
        regularPrice: "$5.25",
        smotheredPrice: "$6.25",
      },
      {
        id: "bu4",
        number: "#4",
        name: "Bean, Beef, Cheese, Lettuce, Chile",
        regularPrice: "$6.25",
        smotheredPrice: "$7.45",
        badges: ["Popular"],
      },
      {
        id: "bu5",
        number: "#5",
        name: "Beef, Cheese, Lettuce & Chile",
        regularPrice: "$6.55",
        smotheredPrice: "$7.59",
        badges: ["Popular"],
      },
      {
        id: "bu6",
        number: "#6",
        name: "Chicken & Chile",
        regularPrice: "$6.55",
        smotheredPrice: "$7.59",
      },
      {
        id: "bu7",
        number: "#7",
        name: "Bean, Chicken, Cheese, Lettuce, Chile",
        regularPrice: "$7.59",
        smotheredPrice: "$8.35",
      },
    ],
  },
  {
    id: "lunch",
    title: "Lunch Specials",
    timeRestriction: "Available 11AM–3PM ONLY",
    note: "Add $2.15 for smothered items. Mix or Match Any 3 for $7.87",
    items: [
      {
        id: "ls1",
        name: "3 Tacos",
        description: "Beef Only",
        badges: ["Lunch Special"],
      },
      {
        id: "ls2",
        name: "3 Tostadas",
        description: "Beans Only",
        badges: ["Lunch Special"],
      },
      {
        id: "ls3",
        name: "3 Rellenos",
        badges: ["Lunch Special"],
      },
      {
        id: "ls4",
        name: "3 Taquitos",
        badges: ["Lunch Special"],
      },
      {
        id: "ls5",
        name: "3 Tamales",
        badges: ["Lunch Special"],
      },
      {
        id: "ls6",
        name: "3 #1 Burritos",
        badges: ["Lunch Special"],
      },
    ],
  },
  {
    id: "tacos",
    title: "Tacos, Tostadas & More",
    items: [
      {
        id: "t1",
        name: "Hard or Soft Taco",
      },
      {
        id: "t2",
        name: "Hard or Soft Chicken Taco",
      },
      {
        id: "t3",
        name: "Bean Tostada",
      },
      {
        id: "t4",
        name: "Bean and Beef Tostada",
      },
      {
        id: "t5",
        name: "Bean and Chicken Tostada",
      },
      {
        id: "t6",
        name: "Relleno",
        description: "Regular or Smothered",
        badges: ["Popular"],
      },
      {
        id: "t7",
        name: "Tamale — Red or Green",
        description: "Regular or Smothered",
      },
      {
        id: "t8",
        name: "Tamale — 1/2 Dozen",
      },
      {
        id: "t9",
        name: "Taquito",
      },
      {
        id: "t10",
        name: "Taquito with Cheese",
      },
      {
        id: "t11",
        name: "Chicken Taquito",
      },
      {
        id: "t12",
        name: "Frito Pie",
      },
      {
        id: "t13",
        name: "Chile Cheese Fries",
        price: "~$7.50",
        badges: ["Popular"],
      },
      {
        id: "t14",
        name: "Chips and Salsa",
      },
      {
        id: "t15",
        name: "Cinnamon Crisps",
      },
    ],
  },
  {
    id: "combos",
    title: "Combination Plates",
    note: "No substitutions on combination plates.",
    items: [
      {
        id: "c11",
        number: "#11",
        name: "Bean Burrito, Cheese Enchilada and Taco",
      },
      {
        id: "c12",
        number: "#12",
        name: "Bean Burrito, Cheese Enchilada and Tamale",
      },
      {
        id: "c13",
        number: "#13",
        name: "Relleno, Taco and Tostada",
      },
      {
        id: "c14",
        number: "#14",
        name: "Bean Burrito, Tamale and Relleno",
      },
      {
        id: "c15",
        number: "#15",
        name: "2 Cheese Enchiladas, Side of Beans and Rice",
      },
      {
        id: "c16",
        number: "#16",
        name: "Large Combo",
        description: "Bean Burrito, Taco, Tostada, Beans & Rice",
        regularPrice: "$8.50",
        smotheredPrice: "$9.75",
        badges: ["Popular"],
      },
      {
        id: "c17",
        number: "#17",
        name: "2 Rellenos Smothered, Side of Beans and Rice",
      },
    ],
  },
  {
    id: "enchiladas",
    title: "Enchiladas",
    items: [
      {
        id: "e1",
        name: "Cheese Enchilada",
      },
      {
        id: "e2",
        name: "Beef and Cheese Enchilada",
      },
      {
        id: "e3",
        name: "Chicken and Cheese Enchilada",
      },
    ],
  },
  {
    id: "quesadillas",
    title: "Quesadillas",
    items: [
      {
        id: "q1",
        name: "Cheese Quesadilla",
      },
      {
        id: "q2",
        name: "Chicken or Beef with Cheese",
      },
      {
        id: "q3",
        name: "Carne Asada Quesadilla",
      },
    ],
  },
  {
    id: "carne-asada",
    title: "Carne Asada (Steak)",
    items: [
      {
        id: "ca1",
        name: "3 Tacos",
        description: "With Onions, Cilantro, Pico and Salsa",
        badges: ["Popular"],
      },
      {
        id: "ca2",
        name: "Burrito",
        description: "With Beans, Cheese, Lettuce and Chile — Regular",
        badges: ["Popular"],
      },
      {
        id: "ca3",
        name: "Fries",
        description: "With Cheese, Smothered with Chile",
      },
    ],
  },
  {
    id: "sides",
    title: "Sides & Extra Items",
    items: [
      {
        id: "s1",
        name: "Beans",
        badges: ["Side"],
      },
      {
        id: "s2",
        name: "Chile",
        badges: ["Side"],
      },
      {
        id: "s3",
        name: "Rice",
        badges: ["Side"],
      },
      {
        id: "s4",
        name: "Pico",
        badges: ["Side"],
      },
      {
        id: "s5",
        name: "Chicken",
        description: "Extra item",
        badges: ["Extra"],
      },
      {
        id: "s6",
        name: "Meat",
        description: "Extra item",
        badges: ["Extra"],
      },
      {
        id: "s7",
        name: "Chile",
        description: "Extra item",
        badges: ["Extra"],
      },
      {
        id: "s8",
        name: "Beans",
        description: "Extra item",
        badges: ["Extra"],
      },
      {
        id: "s9",
        name: "Cheese",
        description: "Extra item",
        badges: ["Extra"],
      },
    ],
  },
];

export const featuredItems = [
  {
    id: "f1",
    name: "Smothered Burrito",
    description: "Our signature burrito loaded with your choice of fillings, smothered in our legendary green chile sauce.",
    price: "From $4.25",
    emoji: "🌯",
  },
  {
    id: "f2",
    name: "Chile Relleno",
    description: "A roasted poblano pepper stuffed and smothered in chile. A true Denver classic.",
    price: "Ask for price",
    emoji: "🌶️",
  },
  {
    id: "f3",
    name: "Breakfast Burrito",
    description: "Egg, potato, and your choice of meat — wrapped in a fresh tortilla with cheese.",
    price: "From $4.39",
    emoji: "🍳",
  },
  {
    id: "f4",
    name: "Chile Cheese Fries",
    description: "Crispy fries loaded with chile and melted cheese. A crowd favorite.",
    price: "~$7.50",
    emoji: "🍟",
  },
];
