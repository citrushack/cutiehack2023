import { GENDERS } from "./Information";
import { SHIRTS } from "./Information";
import { JUDGE_AFFILIATION } from "./Information";

export const FIELDS = {
  description: {
    input: "description",
    width: 12,
    texts: [
      "Welcome to Cutiehack 2023. Thank you for considering to become a judge, we appreciate your efforts to help support Cutiehack. Cutiehack is a beginner oriented hackathon spanning 12 hours on November 18th.",
      "Judging for Cutiehack will occur at the end of the event, where you will be responsible for visiting different teams and assessing their project on a variety of metrics including but not limited to idea proposal, technical challenge, overall presentation and more.",
    ],
  },
  name: {
    input: "input",
    name: "name",
    type: "text",
    title: "Name",
    maxLength: 50,
    width: 12,
    editable: false,
    required: true,
  },
  email: {
    input: "input",
    name: "email",
    type: "email",
    title: "Email Address",
    maxLength: 50,
    width: 12,
    editable: false,
    required: true,
  },
  phone: {
    input: "input",
    name: "phone",
    type: "phone",
    title: "Phone Number",
    placeholder: "123 456 7890",
    maxLength: 50,
    width: 12,
    required: true,
  },
  gender: {
    input: "radio",
    text: "Gender",
    options: GENDERS,
    field: "gender",
    width: 12,
    required: true,
  },
  shirt: {
    input: "radio",
    text: "Shirt Size",
    options: SHIRTS,
    field: "shirt",
    width: 12,
    required: true,
  },

  affiliation: {
    input: "select",
    title: "Affiliation",
    options: JUDGE_AFFILIATION,
    field: "affiliation",
    placeholder: "ie. Student",
    width: 12,
    required: true,
  },

  title: {
    input: "input",
    name: "title",
    type: "text",
    title: "Title",
    placeholder: "ie. Graduate Student",
    maxLength: 50,
    width: 12,
    required: true,
  },
  photo: {
    input: "upload",
    field: "photo",
    text: "Upload Photo",
    width: 12,
    types: ["png", "jpg", "jpeg"],
    maxSize: [1, "MB"],
    required: true,
  },
  requirements: {
    text: "Terms and Conditions",
    input: "checkboxes",
    width: 12,
    field: "requirements",
    required: true,
    options: [
      "I consent to photographs being taken and being used for future marketing purposes",
      "I consent to providing a safe space for hackers to learn and grow their interests in computing",
      "I consent to following the provided guidelines and rules instructed by the Cutiehack organizing team",
      "I understand this is an in person event taking place in UCR and I must attend in person in order to judge",
    ],
  },
};

export const ATTRIBUTES = {
  name: "",
  email: "",
  phone: "",
  gender: "",
  shirt: "",
  affiliation: "",
  title: "",
  photo: "",
  requirements: [],
};
