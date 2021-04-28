import React from "react"

export const i18nPath = {
  activeLocale: null,
  paths: [],
}

export const LanguageSwitcherContext = React.createContext(i18nPath)
