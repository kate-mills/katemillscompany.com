import React from 'react'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import Posts from '../components/Posts'
import { graphql } from 'gatsby'

const CategoryTemplate = props => {
  return (
    <Layout>
      <Hero />
      <Posts
        posts={props.data.category.nodes}
        title={props.pageContext.category}
      />
    </Layout>
  )
}

export const query = graphql`
  query GetPostsWithCategories($category: String) {
    category: allMdx(
      sort: { fields: frontmatter___date, order: DESC }
      filter: { frontmatter: { category: { eq: $category } } }
    ) {
      nodes {
        excerpt
        frontmatter {
          title
          category
          date(formatString: "MMMM Do, YYYY")
          readTime
          image {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        id
      }
    }
  }
`
export default CategoryTemplate
