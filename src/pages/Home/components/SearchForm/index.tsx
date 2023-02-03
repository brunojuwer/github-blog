import { ChangeEvent, useContext } from 'react'
import { IssueContext } from '../../../../contexts/IssueContext'
import { FormContainer, SearchContainer } from './styles'

export function SearchForm() {
  const { issues, searchIssues, input, setInput } = useContext(IssueContext)

  function handleSearchIssues(data: ChangeEvent<HTMLInputElement>) {
    setInput(data.target.value)
    if (input) {
      searchIssues(data.target.value)
    }
  }

  return (
    <SearchContainer>
      <div>
        <h3>Publicações</h3>
        <p>{issues.length} publicações</p>
      </div>
      <FormContainer>
        <input
          type="text"
          placeholder="Buscar conteúdo"
          onChange={handleSearchIssues}
          value={input}
        />
      </FormContainer>
    </SearchContainer>
  )
}
