import { DateInput } from "./DateInput";
import { useData } from "../Context/DataContext";

export const DateRange = () => {
  const { inicio, setInicio, final, setFinal } = useData();
  return (
    <form className="box flex" onSubmit={(e) => e.preventDefault()}>
      <DateInput
        value={inicio}
        onChange={({ target }) => setInicio(target.value)}
        label="Início"
      />

      <DateInput
        value={final}
        onChange={({ target }) => setFinal(target.value)}
        label="Final"
      />
    </form>
  );
};
