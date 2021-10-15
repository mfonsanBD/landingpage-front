import React from 'react'

import Heading from 'components/Heading'
import Container from 'components/Container'

import * as S from './styles'
import { TechnologiesProps } from 'types/api'
import { getImageUrl } from 'utils/getImageUrl'

const SectionTech = ({ title, technologies }: TechnologiesProps) => (
  <S.Wrapper>
    <Container>
      <Heading reverseColor>{title}</Heading>
      <S.IconsContainer>
        {technologies.map(({ technologyName, technologyLogo }) => (
          <S.Icon key={technologyName}>
            <S.Icons
              src={getImageUrl(technologyLogo.url)}
              alt={technologyLogo.alternativeText}
              loading="lazy"
            />
            <S.IconsName>{technologyName}</S.IconsName>
          </S.Icon>
        ))}
      </S.IconsContainer>
    </Container>
  </S.Wrapper>
)

export default SectionTech
