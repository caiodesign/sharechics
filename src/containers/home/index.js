import { useState } from 'react'

import * as S  from './styles'

import { ReactFlvPlayer } from 'react-flv-player'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRedoAlt, faCheck } from '@fortawesome/free-solid-svg-icons'

function Home () {
  const url = localStorage.getItem('url') || "http://192.168.15.2:8000/live/chics.flv"
  const [inputValue, setInputValue] = useState(url)

  function handleChange (e) {
    setInputValue(e.target.value)
  }

  function handleSubmit () {
    if(inputValue) {
      localStorage.setItem('url', inputValue)
      window.location.reload()
    }
  }

  function resetStorage () {
    localStorage.removeItem('url')
    window.location.reload()
  }

  return (
    <>
      <S.Header>
        <h1>Sharehics</h1>
      </S.Header>
      <S.Container>
        <ReactFlvPlayer url={url} />
        <S.FormField>
          <input onChange={handleChange} type="text" placeholder={inputValue} name="url" value={inputValue} />
        </S.FormField>
        <S.ButtonGrouper>
          <S.Button onClick={resetStorage}><FontAwesomeIcon icon={faRedoAlt} /></S.Button>
          <S.Button onClick={handleSubmit} primary><FontAwesomeIcon icon={faCheck} /></S.Button>
        </S.ButtonGrouper>
      </S.Container>
    </>
  )
}

export default Home
