import { Developer } from "./Components/Developer";


function App() {
  const users = [
    {
      name: "Francisco",
      age: "31",
      country: "Italy",
    },
    {
      name: "Marcus",
      age: "23",
      country: "Brasil",
    },
    {
      name: "Alex",
      age: "31",
      country: "Brasil",
    },
    {
      name: "Aline",
      age: "28",
      country: "italy",
    },
  ];

  return (
    <div className="app">
      <div className="app-header">
        {users.map((user, index) => (
          <Developer
            key={index}
            name={user.name}
            age={user.age}
            country={user.country}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
