import { Search as NextraSearch } from "nextra/components";

export default function Search() {
  return (
    <NextraSearch
      placeholder="Pesquisar..."
      emptyResult="Nenhum resultado encontrado."
      errorText="Falha ao carregar o índice de pesquisa."
      loading="Carregando..."
    />
  );
}
