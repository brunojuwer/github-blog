import { PostCard } from './components/PostCard'
import { ProfileInfo } from './components/ProfileInfo'
import { SearchForm } from './components/SearchForm'
import { HomeContainer } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <ProfileInfo />
      <SearchForm />
      <PostCard />
    </HomeContainer>
  )
}
