import React from "react";
import { useData } from "../Context/DataContext";

const style: React.CSSProperties = {
  padding: "var(--gap) var(--gap-s)",
  backgroundColor: "var(--color-3)",
  border: "none",
  borderRadius: "var(--gap)",
  color: "var(--color-2)",
  fontWeight: "600",
  textTransform: "capitalize",
};

function nomeMes(n: number) {
  const currentDate = new Date();
  const targetDate = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + n,
    1
  );
  return new Intl.DateTimeFormat("pt-BR", { month: "long" }).format(targetDate);
}

function formatDate(date: Date) {
  const dd = String(date.getDate()).padStart(2, "0");
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const yyyy = date.getFullYear();
  return `${yyyy}-${mm}-${dd}`;
}

export const MesBtn = ({ n }: { n: number }) => {
  const { setInicio, setFinal } = useData();

  function setMes(n: number) {
    const currentDate = new Date();
    const targetDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + n,
      1
    );

    const firstDay = new Date(
      targetDate.getFullYear(),
      targetDate.getMonth(),
      1
    );
    const lastDay = new Date(
      targetDate.getFullYear(),
      targetDate.getMonth() + 1,
      0
    );
    setInicio(formatDate(firstDay));
    setFinal(formatDate(lastDay));
  }

  return (
    <button style={style} onClick={() => setMes(n)}>
      {nomeMes(n)}
    </button>
  );
};
