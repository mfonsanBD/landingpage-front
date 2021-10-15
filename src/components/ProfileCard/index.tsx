import React from 'react'

import { GrGithub } from 'react-icons/gr'
import {
  FaDribbble,
  FaTwitter,
  FaFacebookSquare,
  FaLinkedin,
  FaInstagram
} from 'react-icons/fa'

import * as S from './styles'
import { AuthorsData } from 'types/api'
import { getImageUrl } from 'utils/getImageUrl'

const icons = {
  Twitter: <FaTwitter />,
  Github: <GrGithub />,
  Dribbble: <FaDribbble />,
  Facebook: <FaFacebookSquare />,
  LinkedIn: <FaLinkedin />,
  Instagram: <FaInstagram />
}

const ProfileCard: React.FC<AuthorsData> = ({
  name,
  role,
  photo,
  socialLinks,
  biography
}) => (
  <S.Card key={name}>
    <S.Image
      src={getImageUrl(photo.url)}
      alt={photo.alternativeText}
      loading="lazy"
    />
    <S.Name>{name}</S.Name>
    <S.Role>{role}</S.Role>
    <S.SocialLinks>
      {socialLinks.map((item) => (
        <S.Link key={item.url}>
          <a href={item.url} title={item.social}>
            {icons[item.social]}
          </a>
        </S.Link>
      ))}
    </S.SocialLinks>
    <S.Description>{biography}</S.Description>
  </S.Card>
)

export default ProfileCard
