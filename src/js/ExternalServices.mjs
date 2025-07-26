const baseURL = import.meta.env.VITE_SERVER_URL_GET || import.meta.env.VITE_SERVER_URL;

function convertToJson(res) {
  const jsonResponse = res.json();
  if (res.ok) {
    return jsonResponse;
  } else {
    //throw new Error("Bad Response");
    throw { name: "servicesError", message: jsonResponse };
  }
}

export default class ExternalServices {
  constructor() {
    // this.category = category;
    // this.path = `../public/json/${this.category}.json`;
  }
  async getData(category) {
    const response = await fetch(`${baseURL}products/search/${category}`);
    const data = await convertToJson(response);
    
    return data.Result;
  }
  async findProductById(id) {
    const response = await fetch(`${baseURL}product/${id}`);
    const data = await convertToJson(response);
    console.log(data.Result);
    return data.Result;
  }

  /*async checkout(payload) {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    };
    return await fetch(`${baseURL}checkout/`, options).then(convertToJson);
  }*/

/*
  async checkout(payload) {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    };
    const response = await fetch(`${baseURL}checkout/`, options);
    return await convertToJson(response);
  }*/

async checkout(payload) {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  };

  const response = await fetch(`${baseURL}checkout/`, options);

  if (!response.ok) {
    // Try to parse error message from response body
    const errorData = await response.json().catch(() => ({}));
    const message = errorData.message || "Checkout request failed.";
    throw new Error(message); // This ensures your catch(err) gets a real Error object
  }

  return await convertToJson(response); // Only runs if response is OK
}


    
}











/*


function convertToJson(res) {
  if (res.ok) {
    return res.json();
  } else {
    throw new Error("Bad Response");
  }
}

export default class ProductData {
  constructor(category) {
    this.category = category;
    this.path = `../json/${this.category}.json`;
  }
  getData() {
    return fetch(this.path)
      .then(convertToJson)
      .then((data) => data);
  }
  async findProductById(id) {
    const products = await this.getData();
    return products.find((item) => item.Id === id);
  }
}*/