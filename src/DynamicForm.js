const formData = [
  {
    id: "name",
    label: "Full name",
    placeholder: "Enter full name",
    type: "text",
    validationType: "string",
    validations: [
      {
        type: "required",
        params: ["name is required"],
      },
      {
        type: "min",
        params: [5, "name cannot be less than 5 characters"],
      },
      {
        type: "max",
        params: [10, "name cannot be more than 10 characters"],
      },
    ],
  },
  {
    id: "mobileno",
    label: "Mobile Number",
    placeholder: "Enter Mobile Number",
    type: "number",
    validationType: "number",
    validations: [
      {
        type: "required",
        params: ["mobile no. is required"],
      },
      {
        type: "min",
        params: [10, "name cannot be less than 10 characters"],
      },
      {
        type: "max",
        params: [10, "name cannot be more than 10 characters"],
      },
    ],
  },
  {
    id: "email",
    label: "Email",
    placeholder: "Enter Email",
    type: "text",
    validationType: "email",
    validations: [
      {
        type: "required",
        params: ["email is required"],
      },
      {
        type: "isValid",
        params: ["email is inValid"],
      },
    ],
  },
  {
    id: "gender",
    label: "Gender",
    placeholder: "Select Gender",
    type: "radio",
    validationType: "",
    options: [
      {
        label: "Male",
        value: "male",
      },
      {
        label: "Female",
        value: "female",
      },
    ],
    validations: [
      {
        type: "required",
        params: ["select any one gender"],
      },
    ],
  },
  ,
  {
    id: "country",
    label: "Country",
    placeholder: "Select Country",
    type: "select",
    validationType: "",
    options: [
      {
        label: "India",
        value: "india",
      },
      {
        label: "US",
        value: "us",
      },
      {
        label: "UAE",
        value: "uae",
      },
      {
        label: "France",
        value: "france",
      },
    ],
  },
];
export default formData;
