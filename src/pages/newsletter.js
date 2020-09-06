import React from 'react'
import Layout from '../components/Layout'
const NewsLetter = () => {
  return (
    <Layout>
      <section className="newsletter-page">
        <div className="page-center">
          <h2>Get more information on our services to your inbox</h2>
          <form
            action="/success"
            data-netlify="true"
            method="post"
            name="contact"
            netlify-honeypot="bot-field"
            className="contact-form"
          >
            <input type="hidden" name="bot-field" />
            <input type="hidden" name="form-name" value="contact" />
            <input
              type="text"
              name="name"
              placeholder="Your name"
              className="form-control"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your email"
              className="form-control"
              required
            />
            <button type="submit" className="btn form-control submit-btn">
              submit
            </button>
          </form>
        </div>
      </section>
    </Layout>
  )
}

export default NewsLetter
