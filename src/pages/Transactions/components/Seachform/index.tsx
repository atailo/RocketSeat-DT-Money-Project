import { MagnifyingGlass } from "phosphor-react";
import { SearchFormContaine } from "./styles";

export function SearchForm() {
  return (
    <SearchFormContaine>
      <input type="text" placeholder="Busque uma transação" />
      <button type="submit">
        <MagnifyingGlass size={20}/>
        Buscar
        </button>
    </SearchFormContaine>
  )
}