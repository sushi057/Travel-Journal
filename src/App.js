import Card from "./components/Card";
import Header from "./components/Header";
import data from "./data";

function App() {
  const dataCard = data.map((item) => {
    return <Card item={item} />;
  });
  return (
    <div className="App">
      <Header />
      {dataCard}
    </div>
  );
}

export default App;
