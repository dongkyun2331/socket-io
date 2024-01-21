import { useState, useEffect } from "react";

const App = () => {
  const [backendData, setBackendData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/data");
        const data = await response.json();
        setBackendData(data);
      } catch (error) {
        console.error("Error fetching data from the backend:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>React</h1>
      {backendData && <p>{backendData.message}</p>}
    </div>
  );
};

export default App;
