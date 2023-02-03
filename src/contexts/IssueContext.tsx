import axios from 'axios'
import { createContext, ReactNode, useEffect, useState } from 'react'

interface Issue {
  id: number
  title: string
  body: string
  created_at: string
  html_url: string
  comments: number
}

interface IssueContextType {
  issues: Issue[]
  issue: Issue
  filteredIssues: Issue[]
  input: string
  setInput: (input: string) => void
  addIssueToPost: (id: number) => void
  searchIssues: (param: string) => void
}

interface IssueProviderProps {
  children: ReactNode
}

export const IssueContext = createContext({} as IssueContextType)

export function IssueProvider({ children }: IssueProviderProps) {
  const [issues, setIssues] = useState<Issue[]>([])
  const [issue, setIssue] = useState<Issue>({} as Issue)
  const [filteredIssues, setFilteredIssues] = useState<Issue[]>([])
  const [input, setInput] = useState('')

  const url = 'https://api.github.com/repos/brunojuwer/todo-prisma-node/issues'

  async function loadIssues() {
    const response = await axios.get(url)
    setIssues(response.data)
  }

  function searchIssues(param: string) {
    const copyFilteredIssues = issues.filter((i) =>
      i.title.toLowerCase().includes(param.toLowerCase()),
    )
    setFilteredIssues(copyFilteredIssues)
  }

  function addIssueToPost(id: number) {
    const issueCopy: Issue = issues.reduce((acc, i) => {
      if (i.id === id) {
        return (acc = i)
      }
      return acc
    }, {} as Issue)

    setIssue(issueCopy)
  }

  useEffect(() => {
    loadIssues()
  }, [])

  return (
    <IssueContext.Provider
      value={{
        issues,
        issue,
        addIssueToPost,
        searchIssues,
        filteredIssues,
        input,
        setInput,
      }}
    >
      {children}
    </IssueContext.Provider>
  )
}
