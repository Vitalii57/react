import axios from "axios";

async function getRequest(url, opts, isloading) {
  try {
    isloading(true);
    const responce = await axios.get(url + opts);

    return responce.data;
  } catch (error) {
    throw error;
  } finally {
    isloading(false);
  }
}

export default getRequest;
