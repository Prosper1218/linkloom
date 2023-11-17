import gallery from "./Images/gallery.png";
import Home from "./Images/Home.png";
import Setting from "./Images/Setting.png";
import Person from "./Images/Person.png";

export const Links = [
  {
    id: 1,
    name: "Home",
    icon: Home,
    to: "/Home",
  },
  {
    id: 2,
    name: "Profile",
    icon: Person,
    to: "/Profile",
  },
  {
    id: 3,
    name: "Gallery",
    icon: gallery,
    to: "/Gallery",
  },
  {
    id: 4,
    name: "Settings",
    icon: Setting,
    to: "/Settings",
  },
];
