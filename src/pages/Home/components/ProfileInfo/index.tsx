import { ArrowSquareOut, Buildings, GithubLogo, MapPin } from 'phosphor-react'
import {
  InfoContainer,
  InfoFooter,
  InfoHeader,
  InfoMain,
  ProfileInfoContainer,
} from './styles'

export function ProfileInfo() {
  return (
    <ProfileInfoContainer>
      <div>
        <img
          src="https://github.com/brunojuwer.png"
          alt="Git Hub image profile"
        />
      </div>
      <InfoContainer>
        <InfoHeader>
          <h2>Bruno Juwer</h2>
          <a
            href="https://github.com/brunojuwer"
            target="_blank"
            rel="noreferrer"
          >
            GITHUB
            <ArrowSquareOut size={16} weight="fill" />
          </a>
        </InfoHeader>
        <InfoMain>
          <p>
            Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
            viverra massa quam dignissim aenean malesuada suscipit. Nunc,
            volutpat pulvinar vel mass.
          </p>
        </InfoMain>
        <InfoFooter>
          <span>
            <GithubLogo size={22} weight="duotone" color="#3A536B" />
            <p>brunojuwer</p>
          </span>
          <span>
            <Buildings size={22} weight="fill" color="#3A536B" />
            <p>Bruno Corp</p>
          </span>
          <span>
            <MapPin size={22} weight="fill" color="#3A536B" />
            <p>Location</p>
          </span>
        </InfoFooter>
      </InfoContainer>
    </ProfileInfoContainer>
  )
}
