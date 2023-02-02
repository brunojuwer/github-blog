import { FormContainer, SearchContainer } from './styles'

export function SearchForm() {
  return (
    <SearchContainer>
      <div>
        <h3>Publicações</h3>
        <p>6 publicações</p>
      </div>
      <FormContainer>
        <input type="text" placeholder="Buscar conteúdo" />
      </FormContainer>
    </SearchContainer>
  )
}
