import {
  ArrowSquareOut,
  Calendar,
  CaretLeft,
  ChatCircle,
  GithubLogo,
} from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import {
  NavContainer,
  OwnerInfo,
  PostInfoContainer,
  PostTitleContainer,
} from './styles'

export function PostInfo() {
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
          <a href="" target="_blank">
            <p>VER NO GITHUB</p>
            <ArrowSquareOut size={16} weight="duotone" color="#3294F8" />
          </a>
        </span>
      </NavContainer>

      <div>
        <PostTitleContainer>
          <h2>asdasd asdasdasdasdas asdasdasdasdsad</h2>
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
