import { Car, CircleGauge, Frame, LayoutTemplate, PartyPopper, PencilRuler } from "lucide-react";

export const headerLinks = [
  {
    label: "Home",
    route: "/",
  },
  {
    label: "Vehicles",
    route: "/events/create",
  },
  {
    label: "My Profile",
    route: "/profile",
  },
];
export const dropdownLinks = [
  {
    title: "Art & Culture",
    icon:<PencilRuler   />,
    href: "/docs/primitives/alert-dialog",
  },
  {
    title: "Sustainability",
    icon: <CircleGauge size={28} />,
    href: "/docs/primitives/hover-card",
  },
  {
    title: "Design",
    icon:<Frame size={28} />,
    href: "/docs/primitives/progress",
  },
  {
    title: "Innovation",
    icon:<LayoutTemplate size={28} />,
    href: "/docs/primitives/scroll-area",
  },
  {
    title: "Exclusive",
    icon:<PartyPopper size={28} />,
    href: "/docs/primitives/tabs",
  },
  {
    title: "Vehicles",
    icon:<Car size={28} />,
    href: "/docs/primitives/tooltip",
  },
];

