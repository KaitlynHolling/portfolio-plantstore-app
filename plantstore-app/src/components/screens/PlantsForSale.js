import React from "react";
import { View, Text, ScrollView } from "react-native";
import TopNavigationBar from "../components/TopNavigationBar";
import PlantCard from "../components/PlantCard";

const plants = [
  // Pet-Friendly Plants
  {
    name: "Spider Plant",
    image:
      "https://i.etsystatic.com/26309032/r/il/1ac7c8/4590810440/il_1140xN.4590810440_gq5i.jpg",
    price: 12,
    description:
      "Chlorophytum comosum, commonly called the spider plant, is safe for pets.",
    category: "Pet-Friendly Plants",
  },
  {
    name: "Boston Fern",
    image:
      "https://i.etsystatic.com/24710218/r/il/91d050/4264852436/il_1140xN.4264852436_om2d.jpg",
    price: 20,
    description:
      "Nephrolepis exaltata, also known as the Boston fern, is a non-toxic plant for pets.",
    category: "Pet-Friendly Plants",
  },
  // Indoor Tropical Plants
  {
    name: "Philodendron",
    image:
      "https://i.etsystatic.com/20948249/r/il/1fd2b8/2530909989/il_1140xN.2530909989_ljbl.jpg",
    price: 25,
    description:
      "Philodendron is a large genus of flowering plants in the family Araceae, often grown indoors.",
    category: "Indoor Tropical Plants",
  },
  {
    name: "Fiddle Leaf Fig",
    image:
      "https://lightingnewyork.com/dw/image/v2/BHCF_PRD/on/demandware.static/-/Sites-master-catalog-lny/default/dw93ab10d0/brand/abh/productimages/f4534.jpg",
    price: 40,
    description:
      "Ficus lyrata, commonly known as the fiddle leaf fig, is a popular indoor tropical plant.",
    category: "Indoor Tropical Plants",
  },
  // Cacti and Succulents
  {
    name: "Aloe Vera",
    image:
      "https://mobileimages.lowes.com/productimages/253d6fa7-ca94-4a07-9c79-c0a385111c1d/02859711.jpg",
    price: 10,
    description: "Aloe vera is a succulent plant species of the genus Aloe.",
    category: "Cacti and Succulents",
  },
  {
    name: "Snake Plant",
    image:
      "https://www.gardenanalyst.com/wp-content/uploads/2019/04/Snake-Plant.jpg",
    price: 10,
    description:
      "Sansevieria, also known as snake plant or mother-in-law's tongue.",
    category: "Cacti and Succulents",
  },
  // Air Plants
  {
    name: "Tillandsia",
    image: "https://i.imgur.com/0ZQZ9ZB.jpg",
    price: 15,
    description:
      "Tillandsia is a genus of around 650 species of evergreen, perennial flowering plants.",
    category: "Air Plants",
  },
  {
    name: "Spanish Moss",
    image: "https://i.imgur.com/0ZQZ9ZB.jpg",
    price: 10,
    description:
      "Tillandsia usneoides, commonly known as Spanish moss, is an epiphytic air plant.",
    category: "Air Plants",
  },
  // Flowering Plants
  {
    name: "Peace Lily",
    image: "https://i.imgur.com/0ZQZ9ZB.jpg",
    price: 20,
    description:
      "Spathiphyllum, commonly known as the peace lily, is a popular flowering houseplant.",
    category: "Flowering Plants",
  },
  {
    name: "Orchid",
    image: "https://i.imgur.com/0ZQZ9ZB.jpg",
    price: 30,
    description:
      "Orchids are a diverse and widespread family of flowering plants, with colorful and fragrant blooms.",
    category: "Flowering Plants",
  },
  // Aquatic Plants
  {
    name: "Duckweed",
    image: "https://i.imgur.com/0ZQZ9ZB.jpg",
    price: 5,
    description:
      "Lemna minor, commonly known as duckweed, is a small floating aquatic plant.",
    category: "Aquatic Plants",
  },
  {
    name: "Water Hyacinth",
    image: "https://i.imgur.com/0ZQZ9ZB.jpg",
    price: 8,
    description:
      "Eichhornia crassipes, commonly known as water hyacinth, is a free-floating perennial aquatic plant.",
    category: "Aquatic Plants",
  },
  // Outdoor Plants
  {
    name: "Japanese Maple",
    image: "https://i.imgur.com/0ZQZ9ZB.jpg",
    price: 60,
    description:
      "Acer palmatum, commonly known as Japanese maple, is a deciduous shrub or small tree.",
    category: "Outdoor Plants",
  },
  {
    name: "Lavender",
    image: "https://i.imgur.com/0ZQZ9ZB.jpg",
    price: 15,
    description:
      "Lavandula, commonly known as lavender, is a genus of 47 known species of flowering plants.",
    category: "Outdoor Plants",
  },
];

const PlantsForSaleScreen = ({ route, navigation }) => {
  const { category } = route.params;
  let filteredPlants = plants;
  if (category) {filteredPlants = plants.filter((plant) => plant.category === category)}

  return (
    <View>
      <TopNavigationBar navigation={navigation} />

      <Text>{category}</Text>

      <ScrollView>
        {filteredPlants.map((plant, index) => (
          <PlantCard
            key={index}
            name={plant.name}
            image={plant.image}
            price={plant.price}
            description={plant.description}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default PlantsForSaleScreen;
