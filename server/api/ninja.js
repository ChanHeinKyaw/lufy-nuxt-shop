export default defineEventHandler(async (event) => {
  // handle query params
  // const { name } = getQuery(event);

  // handle post data
  // const { age } = await readBody(event);

  // return {
  //   message: `Hello, ${name}! Your are ${age} years old`,
  // };

  // api call with private key
  const { data } = await $fetch(
    "https://api.currencyapi.com/v3/latest?apikey=j9ZHGCQMWVxnQJQaoLqwS3nVmAaTNIRb53W88Ush"
  );

  return data;
});
