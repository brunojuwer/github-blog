import axios from 'axios'
import { createContext, ReactNode, useEffect, useState } from 'react'

interface Issue {
  id: number
  title: string
  body: string
  created_at: string
}

interface IssueContextType {
  issues: Issue[]
  issue: Issue
  addIssueToPost: (id: number) => void
}

interface IssueProviderProps {
  children: ReactNode
}

export const IssueContext = createContext({} as IssueContextType)

export function IssueProvider({ children }: IssueProviderProps) {
  const [issues, setIssues] = useState<Issue[]>([])
  const [issue, setIssue] = useState<Issue>({} as Issue)

  const url = 'https://api.github.com/repos/brunojuwer/todo-prisma-node/issues'

  async function loadIssues() {
    const response = await axios.get(url)
    setIssues(response.data)
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
    <IssueContext.Provider value={{ issues, issue, addIssueToPost }}>
      {children}
    </IssueContext.Provider>
  )
}
