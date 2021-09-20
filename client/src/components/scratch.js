import axios from "axios";

const airtableBase = process.env.REACT_APP_AIRTABLE_BASE;
const airtableKey = process.env.REACT_APP_AIRTABLE_KEY;

const URL = `https://api.airtable.com/v0/${airtableBase}/Teams`;
const config = {
  headers: {
    Authorization: `Bearer ${airtableKey}`,
  },
};

export const fetchTeams = async () => {
  const res = await axios.get(URL, config);
  return res.data.records;
};

export const fetchTeam = async (id) => {
  const res = await axios.get(`${URL}/${id}`, config);
  return res.data;
};

export const deleteTeam = async (id) => {
  const res = await axios.delete(`${URL}/${id}`, config);
  return res.data;
};