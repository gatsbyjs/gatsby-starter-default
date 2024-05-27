import React from "react"
import {
  getArticleCategoryPath,
  getArticlePath,
  getBlogPath,
  getPagePath,
  getProductPath,
  getCategoryPath
} from "./path"
import { InboundLink, OutboundLink } from "../components/link"

const MagicLink = props => {
  
  const item = props.item; // sostituire (dovrà essere il context) 

  if (item) {
    if (item.link) {
      const locale= props.locale ? props.locale : item.locale;
      switch (item.link.model.apiKey) {
        case "product_category":
          return <InboundLink to={getCategoryPath(item.link, locale)} {...props} >{item.anchor}</InboundLink>
        case "product":
          return <InboundLink to={getProductPath(item.link, locale)} {...props} >{item.anchor}</InboundLink>
        case "page":
          return <InboundLink to={getPagePath(item.link, locale)} {...props} >{item.anchor}</InboundLink>
        case "blog_page":
          return <InboundLink to={getBlogPath(locale)}  variant={props.variant} sx={props.sx}>{item.anchor}</InboundLink>
        case "article":
          return <InboundLink to={getArticlePath(item.link, locale)}  as={props.as} variant={props.variant} sx={props.sx}>{item.anchor}</InboundLink>
        case "article_category":
          return <InboundLink to={getArticleCategoryPath(item.link, locale)}  as={props.as} variant={props.variant} sx={props.sx}>{item.anchor}</InboundLink>
        default:
          return null
      }
    }
    return <OutboundLink href={item.url} {...props} >{item.anchor}</OutboundLink>
  }
  else
  {
    return <OutboundLink href=""  {...props} ></OutboundLink>
  }
}

export {MagicLink}
