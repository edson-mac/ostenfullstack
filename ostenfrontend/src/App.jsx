import { useEffect, useState } from "react";
import axios from "axios";
import Table from "./components/Table";

function App() {
  const [companies, setCompanies] = useState();

  const getCompanies = async () => {
    const getList = await axios.get(
      "https://ostenfullstack.vercel.app/companies"
    );

    setCompanies(getList.data);
  };

  useEffect(() => {
    getCompanies();
  }, []);

  return (
    <div className="App">
      <Table props={companies} />
    </div>
  );
}

export default App;
