import { useEffect } from "react";
import axios from "axios";
import Table from "./components/Table";
import CreateButton from "./components/CreateButton";
import { useProvider } from './context/provider';

function App() {

  const { getCompanies } = useProvider();

  useEffect(() => {
    getCompanies();
  }, []);

  return (
    <div className="App w-screen h-screen flex flex-col content-center items-center">
      <div className="mt-24 w-2/6">
        <img
          src="https://www.ostenmoove.com.br/logo/logo-osten-moove.png"
          alt="logo"
        />
      </div>
      <CreateButton />
      <Table />
    </div>
  );
}

export default App;
