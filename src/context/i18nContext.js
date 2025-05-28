import React from "react"

export const languages = {
  en: {
    locale: "en",
    discoverMore: "Discover more",
    all: "All",
    search: "Search",
    results: "Results",
    noResults: "No results",
    download: "Download",
    latestArticles: "Latest news",
    vatId: "VAT ID",
    policies: {
      privacy: {
        url: "https://www.google.com/privacy",
        anchor: "Privacy Policy",
      },
      cookie: {
        url: "https://www.google.com/cookies",
        anchor: "Cookie Policy",
      },
    },
    formInputTexts: {
      fullName: "Full name",
      company: "Company",
      address: "Street",
      city: "City",
      province: "Province",
      zipCode: "Zip Code",
      phone: "Phone",
      message: "Message",
    },
  },
  "en-US": {
    locale: "en-US",
    discoverMore: "Discover more",
    all: "All",
    search: "Search",
    results: "Results",
    noResults: "No results",
    download: "Download",
    latestArticles: "Latest news",
    vatId: "VAT ID",
    policies: {
      privacy: {
        url: "https://www.google.com/privacy",
        anchor: "Privacy Policy",
      },
      cookie: {
        url: "https://www.google.com/cookies",
        anchor: "Cookie Policy",
      },
    },
    formInputTexts: {
      fullName: "Full name",
      company: "Company",
      address: "Street",
      city: "City",
      province: "Province",
      zipCode: "Zip Code",
      phone: "Phone",
      message: "Message",
    },
  },
  it: {
    locale: "it",
    discoverMore: "Scopri di più",
    all: "Tutti",
    search: "Cerca",
    results: "risultati",
    noResults: "Nessun risultato",
    download: "Scarica",
    latestArticles: "Ultime news",
    vatId: "P.IVA",
    policies: {
      privacy: {
        url: "https://www.google.com/privacy",
        anchor: "Privacy Policy",
      },
      cookie: {
        url: "https://www.google.com/cookies",
        anchor: "Cookie Policy",
      },
    },
    formInputTexts: {
      policy:
        "Acconsento al trattamento dei dati personali per finalità di marketing e di comunicazione",
      fullName: "Full name",
      company: "Company",
      address: "Street",
      city: "City",
      province: "Province",
      zipCode: "Zip Code",
      phone: "Phone",
      message: "Message",
    },
  },
}

export const i18nContext = React.createContext(languages.it)
