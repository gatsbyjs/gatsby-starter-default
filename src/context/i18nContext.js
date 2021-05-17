import React from "react"

export const languages = {
  en: {
    locale: "en",
    discoverMore: "Discover more",
    all: "All",
    search: "Search",
    results: "Results",
    noResults: "No results",
  },
  it: {
    locale: "it",
    discoverMore: "Scopri di più",
    all: "Tutti",
    search: "Cerca",
    results: "risultati",
    noResults: "Nessun risultato",
  },
}

export const i18nContext = React.createContext(languages.it)
