import { Container } from "./styles"

export function Input({ $dark800, title, className, idname, icon: Icon, ...rest }) {
  return (
    <Container className={className}>
      {title && <label htmlFor={idname}>{title}</label>}
      <div className={$dark800 ? "dark800" : "dark900"}>
        {Icon && <Icon />}
        <input id={idname} {...rest} />
      </div>
    </Container>
  )
}