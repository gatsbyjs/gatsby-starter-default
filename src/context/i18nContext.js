import React from "react"

export const languages = {
  en: {
    locale: "en",
    discoverMore: "Discover more",
    all: "All",
  },
  it: {
    locale: "it",
    discoverMore: "Scopri di più",
    all: "Tutti",
  },
}

export const i18nContext = React.createContext(languages.it)
