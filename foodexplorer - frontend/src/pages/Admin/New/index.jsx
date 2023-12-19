import { Container, Form, Tags } from "./styles"

import { useParams, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"

import { useAuth } from "../../../hooks/auth"

import { PiCaretLeft, PiUploadSimple } from "react-icons/pi"
import { FiPlus, FiX } from "react-icons/fi"
import { FaEye } from "react-icons/fa"
import { VscChromeClose } from "react-icons/vsc"

import { Header } from "../../../components/admin/Header"
import { Footer } from "../../../components/Footer"
import { Button } from "../../../components/Button"
import { Input } from "../../../components/Input"

import { api } from "../../../services/api"

export function New() {

  const navigate = useNavigate()
  const params = useParams()
  const paramsExist = Object.keys(params).length

  const [name, setName] = useState("")
  const [inputPrice, setInputPrice] = useState("")
  const [descriptions, setDescriptions] = useState("")
  const [category, setCategory] = useState("Refeição")
  const [tags, setTags] = useState([])
  const [tagsFromDB, setTagsFromDB] = useState([])
  const [newTag, setNewTag] = useState("")
  const [imageFile, setImageFile] = useState(null)
  const [image, setImage] = useState(null)
  const [imageName, setImageName] = useState(null)
  const [isOpen, setIsOpen] = useState(false)
  const [inputStyle, setInputStyle] = useState({ width: `6.8rem` })
  const [loading, setLoading] = useState(false)

  const { isMenuClosed } = useAuth()

  function handleTagChange(e) {
    setNewTag(e.target.value)
    setInputStyle({ width: `${(newTag.length + 1) / 1.15}rem` })

    if (e.key === 'Enter') {
      handleAddTag(e)
    }
  }

  function addTagOnPressEnter(e) {
    if (e.key === 'Enter') {
      e.preventDefault()
      handleAddTag(e)
    }
  }

  function handleBack() {
    navigate(-1)
  }

  function handleAddTag(e) {
    e.preventDefault()
    setTags(prevState => [...prevState, newTag])
    setNewTag("")
    setInputStyle({ width: `6.8rem` })
  }

  function handleRemoveTag(e, deleted) {
    e.preventDefault()
    setTags(prevState => prevState.filter(tag => tag !== deleted))
  }

  function handleChangeImage(event) {
    const file = event.target.files[0]

    if (file) {
      setImageFile(file)

      const imagePreviw = URL.createObjectURL(file)
      setImage(imagePreviw)
    }
  }

  function handlePreview() {
    setIsOpen(!isOpen)
  }

  function handlePrice(e) {
    const inputValue = e.target.value

    // Remove todos os caracteres que não são números ou vírgula
    const cleanedValue = inputValue.replace(/[^0-9,]/g, "")

    // Verifica se já existe uma vírgula
    const hasComma = cleanedValue.includes(",")

    // Atualiza o estado se não houver mais de uma vírgula
    if (!hasComma || (hasComma && cleanedValue.lastIndexOf(",") === cleanedValue.indexOf(","))) {
      setInputPrice(cleanedValue)
    }
  }

  async function handleNewDish(e) {
    e.preventDefault()
    if (!name) {
      return alert("Digite o nome do ítem que será adocionado ao cardápio!")
    }

    if (newTag) {
      return alert("Você deixou uma tag no campo para adicionar, mas não clicou em adicionar. Clique para adicionar ou deixe o campo vazio.")
    }

    const price = parseFloat(inputPrice.replace(',', '.'))

    if (isNaN(price)) {
      return alert("O preço inserido não é um número válido!")
    }

    setLoading(true)

    const requestBody = {
      name,
      category,
      price,
      descriptions,
      tags,
    }

    const response = await api.post("/dishes", requestBody).then(()=>{
      setLoading(false)
    }).catch(()=>{
      setLoading(false)
    })

    const dish_id = response.data

    if (imageFile) {
      const fileUploadForm = new FormData()
      fileUploadForm.append("image", imageFile)

      await api.patch(`/dishes/image/${dish_id}`, fileUploadForm)
    }

    alert("Novo ítem do cardápio criado com sucesso!")
    navigate("/")
  }

  async function handleUpdateDish(e) {
    e.preventDefault()
    if (!name) {
      return alert("Digite o nome do ítem que será adocionado ao cardápio!")
    }

    if (newTag) {
      return alert("Você deixou uma tag no campo para adicionar, mas não clicou em adicionar. Clique para adicionar ou deixe o campo vazio.")
    }

    const price = parseFloat(inputPrice.replace(',', '.'))

    if (isNaN(price)) {
      return alert("O preço inserido não é um número válido!")
    }

    setLoading(true)

    const requestBody = {
      name,
      category,
      price,
      descriptions,
    }

    const areTagsEqual = JSON.stringify(tags) === JSON.stringify(tagsFromDB)

    if (!areTagsEqual) {
      requestBody.tags = tags
    }

    await api.put(`/dishes/${params.id}`, requestBody).then(()=>{
      setLoading(false)
    }).catch(()=>{
      setLoading(false)
    })

    if (imageFile) {
      const fileUploadForm = new FormData()
      fileUploadForm.append("image", imageFile)

      await api.patch(`/dishes/image/${params.id}`, fileUploadForm)
    }

    alert("Cardápio atualizado com sucesso!")
    navigate("/")
  }

  async function handleDeleteDish() {
    const confirm = window.confirm("O ítem será excluído do cardápio, realmente deseja continuar?")
    if (confirm) {
      setLoading(true)
      await api.delete(`/dishes/?id=${params.id}&image=${imageName}`).then(()=>{
        setLoading(false)
      }).catch(()=>{
        setLoading(false)
      })
      navigate("/")
    }
  }

  function removeDefault(e) {
    if (e.key === 'Enter') {
      e.preventDefault()
    }
  }

  useEffect(() => {
    async function fetchDish() {
      const response = await api.get(`/dishes/${params.id}`)
      setName(response.data.name)
      setCategory(response.data.category)
      setInputPrice(response.data.price.toLocaleString('pt-BR'))
      setTagsFromDB(Object.values(response.data.tags).map(({ name }) => name))
      setTags(Object.values(response.data.tags).map(({ name }) => name))
      setDescriptions(response.data.descriptions)

      if (response.data.image) {
        const ImageUrl = `${api.defaults.baseURL}/files/${response.data.image}`
        setImage(ImageUrl)
        setImageName(response.data.image)
      }
    }
    if (paramsExist) {
      fetchDish()
    } else {
      setName("")
      setCategory("Refeição")
      setInputPrice("")
      setTags([])
      setDescriptions("")
      setImage(null)
    }
  }, [params])

  return (
    <Container>

      <Header />

      <div className={`backBtnAlign ${isMenuClosed ? "" : "hide"}`}>
        <button type="button" onClick={handleBack}><PiCaretLeft />voltar</button>
      </div>

      {isMenuClosed && <Form onSubmit={paramsExist ? handleUpdateDish : handleNewDish} onKeyDown={removeDefault}>
        {paramsExist ? <h1>Editar prato</h1> : <h1>Novo prato</h1>}

        <div className="align">

          <div className={"input-wrapper image-wrapper"}>
            <label htmlFor="image">Imagem do prato</label> <div className="preview-btn">{image && <FaEye title="Visualizar imagem" onClick={handlePreview} />}</div>
            <label className="style-input" htmlFor="image"><PiUploadSimple /> Selecione imagem</label>
            <input
              id="image"
              type="file"
              accept="image/*"
              onChange={handleChangeImage}
            />
            {isOpen && <div className="preview"><VscChromeClose onClick={handlePreview} /><img src={image} alt='Imagem do ítem' /></div>}
          </div>

          <div className={"input-wrapper select-wrapper"}>
            <label htmlFor="category">Categoria</label>
            <div className="select">
              <select id="category" value={category} onInput={e => setCategory(e.target.value)}>
                <option value="Refeição">Refeição</option>
                <option value="Sobremesa">Sobremesa</option>
                <option value="Bebida">Bebida</option>
              </select>
            </div>
          </div>

          <Input title="Nome"
            className="name"
            idname="name"
            placeholder="Ex.: Salada Ceasar"
            type="text"
            value={name || ""}
            $dark800
            onChange={e => setName(e.target.value)}
          />

        </div>
        <div className="align">

          <div className={"input-wrapper tags-wrapper"}>
            <label htmlFor="newTag">Igredientes</label>
            <div className="tags">
              {
                tags.map((tag, index) => (
                  <Tags key={String(index)}>
                    {tag}
                    <button onClick={(e) => handleRemoveTag(e, tag)}><FiX /></button>
                  </Tags>
                ))
              }
              <Tags $isNew>
                <input
                  type="text"
                  placeholder="Adicionar"
                  onKeyDown={addTagOnPressEnter}
                  onChange={handleTagChange}
                  style={inputStyle}
                  value={newTag}
                  autoComplete="off"
                  id="newTag"
                />
                <button onClick={(e) => handleAddTag(e)}><FiPlus /></button>
              </Tags>
            </div>
          </div>

          <Input title="Preço"
            className="price"
            idname="price"
            placeholder="R$ 00,00"
            type="text"
            $dark800
            value={inputPrice || ""}
            onChange={(e) => { handlePrice(e) }}
          />
        </div>

        <div className={"input-wrapper text-wrapper"}>
          <label htmlFor="description">Descrição</label>
          <textarea
            id="description"
            placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
            rows="4"
            value={descriptions || ""}
            onChange={e => setDescriptions(e.target.value)}
          />
        </div>

        <div className="formBtnAlign">
          {paramsExist ? <Button className="deleteDish" onClick={handleDeleteDish} disabled={loading} title={loading ? "Carregando..." : "Excluir prato"} /> : null}
          <input  className={paramsExist ? "" : "wide"} type="submit" disabled={loading} value={loading ? "Carregando..." : "Salvar alterações"} />
        </div>
      </Form>}

      <Footer />

    </Container>
  )
}