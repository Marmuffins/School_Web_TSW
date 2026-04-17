function Open() {
  document.getElementById("open").style.display = "flex";
  document.getElementById("dark").style.display = "flex";
  document.querySelector("nav").style.zIndex = "-1";
}

function Close() {
  document.getElementById("open").style.display = "none";
  document.getElementById("dark").style.display = "none";
  document.querySelector("nav").style.zIndex = "0";
}

const pizzaData = {
  margherita: {
    description:
      "A classic Italian pizza topped with fresh tomatoes, mozzarella, and basil",
    image: "../assets/images/Text odstavce.png",
    price: { small: 120, medium: 150, large: 180 },
    id: "margherita",
  },

  pepperoni: {
    description:
      "A popular choice loaded with spicy pepperoni slices and melted cheese",
    image: "../assets/images/Text odstavce (1).png",
    price: { small: 130, medium: 160, large: 190 },
    id: "pepperoni",
  },

  bbqchicken: {
    description:
      "Smoky BBQ sauce, grilled chicken, and onions for a bold flavor",
    image: "../assets/images/Text odstavce (2).png",
    price: { small: 140, medium: 170, large: 200 },
    id: "bbqchicken",
  },

  "quattro formaggi": {
    description:
      "A rich mix of mozzarella, cheddar, parmesan, and blue cheese",
    image: "../assets/images/Text odstavce (3).png",
    price: { small: 135, medium: 165, large: 195 },
    id: "quattroformaggi",
  },

  seafood: {
    description:
      "A premium pizza topped with shrimp, tuna, or calamari depending on the recipe",
    image: "../assets/images/Text odstavce (4).png",
    price: { small: 150, medium: 180, large: 210 },
    id: "seafood",
  },
};

const pizzaDiameter = {
  small: "24 cm",
  medium: "28 cm",
  large: "32 cm",
};

const pizzaType = document.getElementById("pizza-type");
const pizzaSize = document.getElementById("pizza-size");
const image = document.getElementById("pizza-image");
const price = document.getElementById("pizza-price");
const description = document.getElementById("pizza-description");
const diameter = document.getElementById("pizza-diameter");

function getInfo() {
  const type = pizzaType.value;
  const size = pizzaSize.value;

  if (!type || !size) {

    return;
  }

  const data = pizzaData[type];
  const basePrice = data.price[size];

  description.textContent = data.description;
  image.src = data.image;

  diameter.textContent = `Diameter: ${pizzaDiameter[size]}`;

  price.textContent = `cost is ${basePrice}$`;
}

pizzaType.addEventListener("change", getInfo);
pizzaSize.addEventListener("change", getInfo);
