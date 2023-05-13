interface ApiClientOptionProps {
  method: string;
  body?: any;
}

const ApiClient = async (
  endpoint: string,
  method = "get",
  body?: any,
) => {
  try {
    const options: ApiClientOptionProps = {
      method,
    };

    if (body) options.body = body;

    const res = await fetch(process.env.API_ENDPOINT + endpoint, options);
    const data = await res.json();

    return data;
  } catch (err) {
    console.error(err);
  }
};

export default ApiClient;
