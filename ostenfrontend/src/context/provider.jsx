import React, { useState } from "react";
import axios from "axios";

export const mainContext = React.createContext({});

export const Provider = (props) => {

    const getCompanies = async () => {
        const getList = await axios.get(
          "https://ostenfullstack.vercel.app/companies"
        );
        setCompanies(getList.data);
      };

    const [companies, setCompanies] = useState([]);

  return (
    <mainContext.Provider value={
      {
        companies, setCompanies, getCompanies
      }}>
      {props.children}
    </mainContext.Provider>
  );
};

export const useProvider = () => React.useContext(mainContext);