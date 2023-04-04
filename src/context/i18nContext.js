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
    formInputTexts: {
      fullName: "Full name",
      company : "Company",
      address: "Street",
      city : "City",
      province : "Province",
      zipCode : "Zip Code",
      phone: "Phone",
      message: "Message"
    }
  },
  "en-us": {
    locale: "en-US",
    discoverMore: "Discover more",
    all: "All",
    search: "Search",
    results: "Results",
    noResults: "No results",
    download: "Download",
    latestArticles: "Latest news",
    formInputTexts: {
      fullName: "Full name",
      company : "Company",
      address: "Street",
      city : "City",
      province : "Province",
      zipCode : "Zip Code",
      phone: "Phone",
      message: "Message"
    }
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
    formInputTexts: {
      fullName: "Full name",
      company : "Company",
      address: "Street",
      city : "City",
      province : "Province",
      zipCode : "Zip Code",
      phone: "Phone",
      message: "Message"
    }
  },
}

export const i18nContext = React.createContext(languages.it)
