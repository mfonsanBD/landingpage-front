import React from 'react'

import Container from 'components/Container'
import Heading from 'components/Heading'

import * as S from './styles'
import { ConceptProps } from 'types/api'

const SectionConcepts = ({ title, concepts }: ConceptProps) => (
  <Container>
    <S.Box>
      <Heading lineBottom>{title}</Heading>
      <S.List>
        {concepts.map(({ conceptName }) => (
          <S.Item key={conceptName}>{conceptName}</S.Item>
        ))}
      </S.List>
    </S.Box>
  </Container>
)

export default SectionConcepts
