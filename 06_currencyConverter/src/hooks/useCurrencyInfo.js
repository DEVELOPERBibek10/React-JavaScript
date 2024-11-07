import { useEffect, useState } from "react";

const useCurrencyInfo = (currency) => {
  const [data, setData] = useState({});
  useEffect(() => {
    fetch(
      `https://v6.exchangerate-api.com/v6/e098f8c6cc3bd828ee363383/latest/${currency}`
    )
      .then((response) => response.json())
      .then((responseData) => setData(responseData.conversion_rates));
  }, [currency]);

  return data;
};

export default useCurrencyInfo;
