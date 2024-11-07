import React from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData();

  //   const [data, setData] = useState("");

  //   useEffect(() => {
  //     fetch("https://api.github.com/users/DeveloperBibek10")
  //       .then((response) => response.json())
  //       .then((data) => setData(data));
  //   }, []);

  return (
    <div className="text-center m-2 bg-gray-700 text-white p-4 text-3xl ">
      Github : {data.followers}
      <img src={data.avatar_url} width={300} alt="" />
    </div>
  );
}

export default Github;

export const gitHubInfoLoader = async function () {
  const response = await fetch("https://api.github.com/users/DeveloperBibek10");
  const data = await response.json();
  return data;
};
