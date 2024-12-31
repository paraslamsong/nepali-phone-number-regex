# Phone Number Validation for Nepal

This project provides a simple Node.js script to validate phone numbers from Nepal using regular expressions. It checks whether the provided phone numbers match valid mobile, landline, and emergency number formats.

## Features

- **Mobile Numbers**: Validates mobile numbers from **Nepal Telecom** and **Ncell**.
- **Landline Numbers**: Validates landline numbers for **Nepal Telecom** with proper area codes.
- **Emergency Numbers**: Validates emergency numbers like **100** (Police), **101** (Fire), **102** (Ambulance), etc.

### Regular Expression Breakdown

```txt
To Run: node phone.number.js


const regex =
  /^(?:(\+|00)?977\s?)?((98\d{8}|97\d{8}|91\d{8})|(0?[1-9]\d{0,1}-?\d{5,7})|(100|101|102|1498|900))$/;


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
```
