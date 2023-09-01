import React from "react";
import { useData } from "../Context/DataContext";
import { DateRange } from "./DateRange";
import { Meses } from "./Meses";
import { useLocation } from "react-router-dom";

export const Header = () => {
  const [title, setTitle] = React.useState("Resumo");
  const location = useLocation();
  React.useEffect(() => {
    if (location.pathname === "/") {
      setTitle("Resumo");
      document.title = "Fintech | Resumo";
    } else if (location.pathname === "/vendas") {
      setTitle("Vendas");
      document.title = "Fintech | Venda";
    }
  }, [location]);
  return (
    <header className="mb">
      <div className="mb daterange">
        <DateRange />
        <h1 className="box bg-3">{title}</h1>
      </div>
      <Meses />
    </header>
  );
};
