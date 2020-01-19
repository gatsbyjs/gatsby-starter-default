import React from "react"
import PropTypes from "prop-types"

export const BUTTON_TYPES = ["submit", "reset", "button"]

export const ButtonBase = ({
  className,
  children,
  disabled,
  autofocus,
  name,
  type,
  value,
  variant,
  ...rest
}) => (
  <button
    className={className}
    disabled={disabled}
    autoFocus={autofocus}
    name={name}
    type={type}
    value={value}
    {...rest}
  >
    {children}
  </button>
)

ButtonBase.propTypes = {
  type: PropTypes.oneOf(BUTTON_TYPES),
}

ButtonBase.defaultProps = {
  type: "button",
}

export default ButtonBase
