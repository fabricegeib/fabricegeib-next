import { useState, useEffect } from "react";

function Clients() {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("/api/clients")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>No profile data</p>;

  console.log(data);

  return (
    <div className="cards clients">
      {data.map((client) => (
        <div className="card client" key={client.id}>
          <p>{client.name}</p>
          {/* <p>{client.id}</p> */}
          <p>{client.url}</p>
        </div>
      ))}
    </div>
  );
}

export default Clients;
