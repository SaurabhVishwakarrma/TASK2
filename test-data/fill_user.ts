export interface Userdata {
  firstname: string;
  lastname: string;
  postalcode: string;
  type?: string;
}

export const Userdatas: Userdata[] = [
  {
    firstname: "Alakh",
    lastname: "Pandey",
    postalcode: "121212",
    type: "Valid",
  },
  {
    firstname: "",
    lastname: "Pandey",
    postalcode: "121212",
    type: "MissingFirstName",
  },
  {
    firstname: "Alakh",
    lastname: "",
    postalcode: "121212",
    type: "MissingLastName",
  },
  {
    firstname: "Alakh",
    lastname: "Pandey",
    postalcode: "",
    type: "MissingPostalCode",
  },
];
