import axios from "axios";
const apiKey = import.meta.env.VITE_API;

export const fetchData = async () => {
  const range = "Sheet1";
  const spreadsheetId = "1_XYnbQRK_ztU3z5NU7CgNhu9quTAk53g3kUQ-bmz_JA";

  const response = await axios.get(
    `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${range}?key=${apiKey}`
  );
  const values = response.data.values;

  if (!values || values.length === 0) {
    throw new Error("No data found in the spreadsheet.");
  }

  const headers = values[0];
  const dataWithoutHeaders = values.slice(1);
  const jsonData = dataWithoutHeaders.map((row) => {
    const jsonRow = {};
    headers.forEach((header, index) => {
      jsonRow[header] = row[index];
    });
    return jsonRow;
  });

  return jsonData
};
