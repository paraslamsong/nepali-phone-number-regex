// Example Phone Numbers for validation

// To run the code command:
// `node phone.number.js`

const phone_numbers = [
  {
    type: "mobile",
    service_provider: "Nepal Telecom",
    valid: false,
    number: "+977 ",
  },
  {
    type: "mobile",
    service_provider: "Nepal Telecom",
    valid: true,
    number: "+977 9841234567",
  },
  {
    type: "mobile",
    service_provider: "Nepal Telecom",
    valid: true,
    number: "+9779841234567",
  },
  {
    type: "mobile",
    service_provider: "Ncell",
    valid: true,
    number: "9814373666",
  },
  {
    type: "mobile",
    service_provider: "Ncell",
    valid: false,
    number: "+977 9441234567",
  },
  {
    type: "landline",
    service_provider: "Nepal Telecom",
    valid: false,
    number: "+977 1-234",
  },
  {
    type: "landline",
    service_provider: "Nepal Telecom",
    valid: true,
    number: "+977 61-2345678",
  },
  {
    type: "landline",
    service_provider: "Nepal Telecom",
    valid: true,
    number: "+977 4-2345678",
  },

  {
    type: "landline",
    service_provider: "Emergency",
    valid: true,
    number: "100",
  },
];

const regex =
  /^(?:(\+|00)?977\s?)?((98\d{8}|97\d{8}|91\d{8})|(0?[1-9]\d{0,1}-?\d{5,7})|(100|101|102|1498|900))$/;

/*
  Regular Expression Breakdown:
  
  1. Country Code:
     - Optional `+977` or `00977` with optional space after country code.
     - Syntax: `(\+|00)?977\s?`
  
  2. Mobile Numbers:
     - Matches mobile numbers starting with 98, 97, or 91, followed by exactly 8 digits.
     - Syntax: `(98\d{8}|97\d{8}|91\d{8})`
  
  3. Landline Numbers:
     - Matches landline numbers that:
       - Start with area codes like `01`, `1`, `01-`, `1-`, or any other valid area code (starting with `0`).
       - Number length between 5 to 7 digits, optional dash (`-`).
     - Syntax: `(0?[1-9]\d{0,1}-?\d{5,7})`
  
  4. Special Numbers:
     - Matches valid emergency or government hotline numbers.
     - Numbers like: `100` (Police), `101` (Fire), `102` (Ambulance), `1498` (Government hotline), `900` (Telecom service).
     - Syntax: `(100|101|102|1498|900)`
*/

// Function to validate phone number using regex
function validatePhoneNumber(phoneNumber) {
  return regex.test(phoneNumber);
}

// Iterating through the example phone numbers and validating each
phone_numbers.map((phone_number) => {
  console.log({
    expected: phone_number.valid, // Expected validity
    result: validatePhoneNumber(phone_number.number), // Actual validation result
    phone_number: phone_number.number, // Phone number being validated
  });
});
