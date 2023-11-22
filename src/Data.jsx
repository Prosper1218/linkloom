import gallery from "./Images/gallery.png";
import Message from "./Images/Message.png";
import Home from "./Images/Home.png";
import Setting from "./Images/Setting.png";
import Person from "./Images/Person.png";
import ymk1 from "./Images/ymk1.png";
import ymk2 from "./Images/ymk2.png";
import ymk3 from "./Images/ymk3.png";
import Post1 from "./Images/post1.png";

export const Links = [
   {
      id: 1,
      name: "Home",
      icon: Home,
      to: "/",
   },
   {
      id: 2,
      name: "Profile",
      icon: Person,
      to: "/Profile",
   },
   {
      id: 3,
      name: "Messages",
      icon: Message,
      to: "/Messages",
   },
   {
      id: 4,
      name: "Gallery",
      icon: gallery,
      to: "/Gallery",
   },
   {
      id: 5,
      name: "Settings",
      icon: Setting,
      to: "/Settings",
   },
   {
      id: 6,
      name: "Activity",
      icon: Setting,
      to: "/Activity",
   },
];

export const ymk = [
   {
      id: 1,
      name: "Eddie Joseph",
      email: "eddie@gmail.com",
      profile: ymk1,
   },
   {
      id: 2,
      name: "Steve Alfred",
      email: "stevea@gmail.com",
      profile: ymk2,
   },
   {
      id: 3,
      name: "Joseph Morgan",
      email: "morj@gmail.com",
      profile: ymk3,
   },
   {
      id: 4,
      name: "phobe james",
      email: "phobe@gmail.com",
      profile: ymk2,
   },
];

export const online = [
   {
      id: 1,
      name: "Shelbe Gold",
      status: "online",
      when: "2mins ago",
      profile: ymk1,
   },
   {
      id: 2,
      name: "Robert Bacins",
      status: null,
      when: "4mins ago",
      profile: ymk2,
   },
   {
      id: 3,
      name: "John Carlo",
      status: "online",
      when: "8mins ago",
      profile: ymk3,
   },
   {
      id: 4,
      name: "phobe james",
      status: null,
      when: "1hr ago",
      profile: ymk2,
   },
];

export const UserPosts = [
   {
      id: 1,
      time: "15mins ago",
      postimage: Post1,
      poster: null,
      caption: "New blazer out now, $5000!!",
      likes: "5,000",
      Comments: "4,000",
   },
   {
      id: 2,
      time: "1 day ago",
      postimage: Post1,
      poster: null,
      caption: "Experience Royalty, $5000!! suit  for OGs",
      likes: "15,000",
      Comments: "8,000",
   },
];
