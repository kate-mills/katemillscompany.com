import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Image from 'gatsby-image'

const query = graphql`
  {
    hearts: file(relativePath: { eq: "hearts-computer.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
const Hero = ({ showPerson }) => {
  const { hearts } = useStaticQuery(query)
  return (
    <header className="hero">
      {showPerson && (
        <Image fluid={hearts.childImageSharp.fluid} className="hero-person" />
      )}
    </header>
  )
}

export default Hero
