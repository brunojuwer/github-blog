import axios from 'axios'
import { useEffect, useState } from 'react'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import { PostBodyContainer } from './styles'

interface IssueType {
  id: number
  title: string
  body: string
}

export function PostBody() {
  const [markdown, setMarkdown] = useState<IssueType[]>([])

  const url = 'https://api.github.com/repos/brunojuwer/todo-prisma-node/issues'

  async function loadIssues() {
    const response = await axios.get(url)
    setMarkdown(response.data)
  }

  useEffect(() => {
    loadIssues()
  }, [])

  return (
    <PostBodyContainer>
      <ReactMarkdown>{markdown[0].body}</ReactMarkdown>
    </PostBodyContainer>
  )
}
