import React from "react"
import { useRef } from "react"
import { Form, FormContainer } from "./styles"

interface TopicFormProps {
  onAdd: (text: string, tags: string, city: string, name: string) => void
}

export function TopicForm({ onAdd }: TopicFormProps) {

  const descriptionInputRef = useRef<HTMLInputElement>(null)
  const authorNameInputRef = useRef<HTMLInputElement>(null)
  const authorCiyInputRef = useRef<HTMLInputElement>(null)
  const tagsInputRef = useRef<HTMLInputElement>(null)

  const handleSubmit = (event) => {
    event.preventDefault()
    const text = descriptionInputRef.current!.value
    const name = authorNameInputRef.current!.value
    const city = authorCiyInputRef.current!.value
    const tags = tagsInputRef.current!.value

    event.target.reset()
    descriptionInputRef.current!.focus()

    onAdd(text, tags, name, city)
  }


  return (
    <FormContainer>
        <Form onSubmit={handleSubmit}>
            <input type="text" ref={descriptionInputRef} placeholder="Descrição da Topic" />
            <input type="text" ref={tagsInputRef} placeholder="tAG SEPARADA POR VIRUBLA" />
            <input type="text" ref={authorCiyInputRef} placeholder="Cidade" />
            <input type="text" ref={authorNameInputRef} placeholder="Nome autor" />
            <input type="submit" value="Adicionar Topico" />
        </Form>
    </FormContainer>
   
  )
}