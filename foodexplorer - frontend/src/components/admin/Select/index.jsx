import { Container } from "./styles"

import React, { useState } from "react"

import { api } from "../../../services/api"

export function Select ({ defaultValue, orderId }) {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedStatus, setSelectedStatus] = useState(defaultValue)

  const statusIndexMap = {
    Pendente: 0,
    Preparando: 1,
    Entregue: 2,
  }

  const [highlightedIndex, setHighlightedIndex] = useState(statusIndexMap[defaultValue])

  const statusOptions = ["Pendente", "Preparando", "Entregue"]

  const handleStatusChange = (status) => {

    updateStatus(status).then(() => {
      setSelectedStatus(status)
      setHighlightedIndex(statusIndexMap[status])
      setIsOpen(false)
    })
    
  }

  async function updateStatus(status) {
    return await api.put(`/payment?id=${orderId}&status=${status}`)
  }

  const toggleSelect = () => {
    setIsOpen(!isOpen)
  }

  const handleKeyDown = (e) => {
    if (e.key === "ArrowUp" || e.key === "ArrowDown") {
      e.preventDefault()
      const currentIndex = statusOptions.indexOf(selectedStatus)
      const newIndex =
        e.key === "ArrowUp"
          ? Math.max(currentIndex - 1, 0)
          : Math.min(currentIndex + 1, statusOptions.length - 1)
      setHighlightedIndex(newIndex)
      setSelectedStatus(statusOptions[newIndex])
    }else if (e.key === "Enter") {
      setIsOpen(!isOpen)
    }else if (e.key === "Tab") {
      setIsOpen(false)
    }
  }

  return (

    <Container>

      <div tabIndex={0} role="combobox" aria-expanded="false" className="select-header" onClick={toggleSelect} onKeyDown={handleKeyDown}>
        <span className={selectedStatus === "Pendente" ? "Pendente" : (selectedStatus === "Preparando" ? "Preparando"  : "Entregue") }></span> {selectedStatus}
      </div>

      {isOpen && ( <ul className="options-list">
        {
          statusOptions.map((status, index)=>(
            <li key={status} className={highlightedIndex === index ? "highlighted" : ""} onClick={() => handleStatusChange(status)}>
              <span className={`status-indicator ${status}`}></span>{status}
            </li>
          ))
        }
      </ul>)}

    </Container>
  )
}