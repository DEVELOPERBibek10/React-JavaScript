import Card from "./Card";

function App() {
  const myObj = {
    prodName: "Samsung Buds",
    age: 18,
  };

  return <Card prodName={myObj.prodName} />;
}

export default App;
