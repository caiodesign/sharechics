import { useState } from 'react'

import * as S  from './styles'

import ReactPlayer from 'react-player'
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
        <h1>ShareChics</h1>
      </S.Header>
      <S.Container>
        <ReactPlayer url={url} playing={false} width="1920" height="1080" controls/>
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
