import axios from "axios";

const api = axios.create({
  baseURL: "http://ec2-3-82-33-144.compute-1.amazonaws.com:8999",
});

export const getRecyclingInfo = async (barcode) => {
  let req = { barcode };
  const { data } = await api.post(`/barcode/${barcode}`, JSON.stringify(req), {
    headers: { "Content-Type": `application/json` },
  });
  return data;
};

export const getTrashBinInfo = async (address) => {
  let req = { dong: address };
  const { data } = await api.post(`/trash/${address}`, JSON.stringify(req), {
    headers: { "Content-Type": `application/json` },
  });
  return data;
};
