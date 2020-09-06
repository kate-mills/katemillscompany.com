import React from 'react'
import Title from './Title'
import Image from 'gatsby-image'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'

const query = graphql`
  {
    allInstaNode(limit: 6) {
      nodes {
        localFile {
          childImageSharp {
            id
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
const Instagram = () => {
  const {
    allInstaNode: { nodes },
  } = useStaticQuery(query)
  return (
    <Wrapper>
      <Title title="instagram" />
      <div className="images">
        {nodes.map((img, id) => {
          return <Image key={id} fluid={img.localFile.childImageSharp.fluid} />
        })}
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.article`
  .images {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1rem;
  }
`

export default Instagram
