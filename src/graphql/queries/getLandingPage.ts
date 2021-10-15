const GET_LANDING_PAGE = /* GraphQL */ `
  fragment imageData on UploadFile {
    alternativeText
    url
  }

  fragment logo on LandingPage {
    logo {
      ...imageData
    }
  }

  fragment button on ComponentPageButton {
    title
    url
  }

  fragment header on LandingPage {
    Header {
      title
      description
      button {
        ...button
      }
      media {
        ...imageData
      }
    }
  }

  fragment about on LandingPage {
    aboutSection {
      title
      description
      image {
        ...imageData
      }
    }
  }

  fragment technologies on LandingPage {
    technologySection {
      title
      technologies {
        technologyLogo {
          ...imageData
        }
        technologyName
      }
    }
  }

  fragment concept on LandingPage {
    conceptSection {
      title
      concepts {
        conceptName
      }
    }
  }

  fragment modules on LandingPage {
    modulesSection {
      title
      modules {
        title
        subtitle
        description
      }
    }
  }

  fragment agenda on LandingPage {
    agendaSection {
      title
      description
    }
  }

  fragment price on LandingPage {
    pricingBox {
      totalPrice
      installments
      installmentPrice
      description {
        title
      }
      button {
        ...button
      }
    }
  }

  fragment authors on LandingPage {
    teamSection {
      title
      authors {
        photo {
          ...imageData
        }
        name
        role
        socialLinks {
          social
          url
        }
        biography
      }
    }
  }

  fragment reviews on LandingPage {
    reviewSection {
      title
      reviews {
        name
        comment
      }
    }
  }

  fragment faq on LandingPage {
    faqSection {
      title
      question {
        question
        answer
      }
    }
  }

  query GET_LANDING_PAGE {
    landingPage {
      ...logo
      ...header
      ...about
      ...technologies
      ...concept
      ...modules
      ...agenda
      ...price
      ...authors
      ...reviews
      ...faq
    }
  }
`
export default GET_LANDING_PAGE
