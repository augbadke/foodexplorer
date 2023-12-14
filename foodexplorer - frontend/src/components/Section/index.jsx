import { Container } from "./styles"

import { useRef } from "react"

import { PiCaretLeft, PiCaretRight } from "react-icons/pi"

export function Section({ title, children }) { //Tudo que está dentro de de Section é passado como children
  const containerRef = useRef(null)

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft -= 450
    }
  }

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft += 450
    }
  }

  return (
    <Container>
      <h2>{title}</h2>
      <div ref={containerRef} className="scroll">
        <div>{children}</div>
      </div>
      <button onClick={scrollLeft} className="left"><PiCaretLeft /></button>
      <button onClick={scrollRight} className="right"><PiCaretRight /></button>
    </Container>
  )
}