"use client";

import Container from "../Container";

import { TbBeach, TbMountain, TbPool } from "react-icons/tb";
import {
  GiBoatFishing,
  GiIsland,
  GiWindmill,
  GiCastle,
  GiCampingTent,
  GiCaveEntrance,
  GiCactus,
  GiBarn,
} from "react-icons/gi";
import { BsSnow } from "react-icons/bs";
import { MdOutlineVilla } from "react-icons/md";
import { FaSkiing } from "react-icons/fa";
import { IoDiamond } from "react-icons/io5";
import CategoryBox from "../CategoryBox";
import { useSearchParams, usePathname } from "next/navigation";

export const categories = [
  {
    label: "Beach",
    icon: TbBeach,
    description: "This property is close to the beach",
  },
  {
    label: "Windmills",
    icon: GiWindmill,
    description: "This property has windmills nearby",
  },
  {
    label: "Modern",
    icon: MdOutlineVilla,
    description: "This property is modern",
  },
  {
    label: "Countryside",
    icon: TbMountain,
    description: "This property is in the countryside",
  },
  {
    label: "Pools",
    icon: TbPool,
    description: "This property has a pool",
  },
  {
    label: "Islands",
    icon: GiIsland,
    description: "This property is on an island",
  },
  {
    label: "Lake",
    icon: GiBoatFishing,
    description: "This property is close to a lake",
  },
  {
    label: "Skiing",
    icon: FaSkiing,
    description: "This property is close to a ski resort",
  },
  {
    label: "Castles",
    icon: GiCastle,
    description: "This property is close to a castle",
  },
  {
    label: "Campings",
    icon: GiCampingTent,
    description: "This property has camping activities",
  },
  {
    label: "Arctic",
    icon: BsSnow,
    description: "This property is in severe cold weather",
  },
  {
    label: "Cave",
    icon: GiCaveEntrance,
    description: "This property is close to a cave",
  },
  {
    label: "Desert",
    icon: GiCactus,
    description: "This property is in a desert",
  },
  {
    label: "Barns",
    icon: GiBarn,
    description: "This property has a barn",
  },
  {
    label: "Lux",
    icon: IoDiamond,
    description: "This property is luxurious",
  },
];

const Categories = () => {
  const params = useSearchParams();
  const category = params?.get("category");
  const pathname = usePathname();

  const isMainPage = pathname === "/";
  if (!isMainPage) {
    return null;
  }

  return (
    <Container>
      <div className="flex flex-row justify-between items-center pt-4 overflow-x-auto">
        {categories.map((item) => (
          <CategoryBox
            key={item.label}
            label={item.label}
            icon={item.icon}
            selected={category === item.label}
          />
        ))}
      </div>
    </Container>
  );
};

export default Categories;
