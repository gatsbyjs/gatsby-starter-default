import PropTypes from "prop-types"
import styled from "styled-components"
import theme from "styled-theming"
import ButtonBase from "./ButtonBase"

const backgroundColor = theme.variants("mode", "variant", {
  default: { light: "gray", dark: "darkgray" },
  primary: { light: "blue", dark: "darkblue" },
  success: { light: "green", dark: "darkgreen" },
  warning: { light: "orange", dark: "darkorange" },
})

const textColor = theme("mode", {
  light: "red",
  dark: "#fff",
})

export const Button = styled(ButtonBase)`
  background-color: ${backgroundColor};
  color: ${textColor};
`

Button.propTypes = {
  variant: PropTypes.oneOf(["default", "primary", "success", "warning"]),
}

Button.defaultProps = {
  variant: "default",
}

export default Button
