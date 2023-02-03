import {
  ArrowSquareOut,
  Calendar,
  CaretLeft,
  ChatCircle,
  GithubLogo,
} from 'phosphor-react'
import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { IssueContext } from '../../../contexts/IssueContext'
import {
  NavContainer,
  OwnerInfo,
  PostInfoContainer,
  PostTitleContainer,
} from './styles'

export function PostInfo() {
  const { issue } = useContext(IssueContext)

  return (
    <PostInfoContainer>
      <NavContainer>
        <span>
          <NavLink to="/">
            <CaretLeft size={16} weight="fill" color="#3294F8" />
            <p>VOLTAR</p>
          </NavLink>
        </span>
        <span>
          <a href={issue.html_url} target="_blank" rel="noreferrer">
            <p>VER NO GITHUB</p>
            <ArrowSquareOut size={16} weight="duotone" color="#3294F8" />
          </a>
        </span>
      </NavContainer>

      <div>
        <PostTitleContainer>
          <h2>{issue.title}</h2>
        </PostTitleContainer>
        <OwnerInfo>
          <span>
            <GithubLogo size={22} weight="duotone" color="#3A536B" />
            <p>brunojuwer</p>
          </span>
          <span>
            <Calendar size={22} weight="fill" color="#3A536B" />
            <p>Há 1 dia</p>
          </span>
          <span>
            <ChatCircle size={22} weight="fill" color="#3A536B" />
            <p>Comentários</p>
          </span>
        </OwnerInfo>
      </div>
    </PostInfoContainer>
  )
}
