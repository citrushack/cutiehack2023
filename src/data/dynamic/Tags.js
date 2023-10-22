const mappings = {
  red: {
    background: "bg-hackathon-tags-red-bg/20",
    text: "text-hackathon-tags-red-bg",
    hover: "hover:shadow-[inset_0px_0px_0px_2px_#F07167]",
  },
  yellow: {
    background: "bg-hackathon-tags-yellow-bg/20",
    text: "text-hackathon-tags-yellow-bg",
    hover: "hover:shadow-[inset_0px_0px_0px_2px_#FFB81C]",
  },
  green: {
    background: "bg-hackathon-tags-green-bg/20",
    text: "text-hackathon-tags-green-bg",
    hover: "hover:shadow-[inset_0px_0px_0px_2px_#00AFB9]",
  },
  gray: {
    background: "bg-hackathon-tags-gray-bg/20",
    text: "text-hackathon-tags-gray-bg",
    hover: "hover:shadow-[inset_0px_0px_0px_2px_#969696]",
  },
  purple: {
    background: "bg-hackathon-tags-purple-bg/20",
    text: "text-hackathon-tags-purple-bg",
    hover: "hover:shadow-[inset_0px_0px_0px_2px_#825ED0]",
  },
  grayblue: {
    background: "bg-hackathon-tags-grayblue-bg/20",
    text: "text-hackathon-tags-grayblue-bg",
    hover: "hover:shadow-[inset_0px_0px_0px_2px_#29465B]",
  },
  teal: {
    background: "bg-hackathon-tags-teal-bg/20",
    text: "text-hackathon-tags-teal-bg",
    hover: "hover:shadow-[inset_0px_0px_0px_2px_#045D5D]",
  },
  lightgreen: {
    background: "bg-hackathon-tags-lightgreen-bg/20",
    text: "text-hackathon-tags-lightgreen-bg",
    hover: "hover:shadow-[inset_0px_0px_0px_2px_#038756]",
  },
  pink: {
    background: "bg-hackathon-tags-pink-bg/20",
    text: "text-hackathon-tags-pink-bg",
    hover: "hover:shadow-[inset_0px_0px_0px_2px_#e384b0]",
  },
};

export const COLORS = {
  qualify: mappings["green"],
  winner: mappings["purple"],
  disqualify: mappings["red"],
  pending: mappings["yellow"],
  accept: mappings["green"],
  reject: mappings["red"],
  confirm: mappings["green"],
  "not attending": mappings["red"],
  onsite: mappings["purple"],
  online: mappings["green"],
  Professor: mappings["grayblue"],
  professor: mappings["grayblue"],
  Student: mappings["teal"],
  student: mappings["teal"],
  Industry: mappings["lightgreen"],
  industry: mappings["lightgreen"],
  director: mappings["purple"],
  marketing: mappings["teal"],
  operations: mappings["grayblue"],
  sponsorship: mappings["yellow"],
  recruitment: mappings["pink"],
  software: mappings["lightgreen"],
  uiux: mappings["red"],
  view: mappings["gray"],
  green: mappings["green"],
  gray: mappings["gray"],
  yellow: mappings["yellow"],
  red: mappings["red"],
  lightgreen: mappings["lightgreen"],
  purple: mappings["purple"],
  teal: mappings["teal"],
  grayblue: mappings["grayblue"],
  pink: mappings["pink"],
  1: mappings["green"],
  0: mappings["yellow"],
  "-1": mappings["red"],
};
