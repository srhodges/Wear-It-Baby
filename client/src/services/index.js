import axios from "axios";

const airtableBase = process.env.REACT_APP_AIRTABLE_BASE;
const airtableKey = process.env.REACT_APP_AIRTABLE_KEY;

const URL = `https://api.airtable.com/v0/${airtableBase}/inventory`
console.log(URL);
const config = {
  headers: {
    Authorization: `Bearer ${airtableKey}`,
  },
};

export const fetchInventory = async () => {
  const res = await axios.get(URL, config);
  return res.data.records;
};

export const fetchItem = async (id) => {
  const res = await axios.get(`${URL}/${id}`, config);
  return res.data;
};

