import styled from 'styled-components'

const color = {
  black: '#2d3436',
  white: '#fff'
}

export const Header = styled.div`
    display: flex;
    justify-content: center;
    padding: 15px 0;
    background-color: ${color.white};
    color: ${color.black};

    h1 {
      font-size: 20px;
      font-weight: 500;
    }
`

export const Container = styled.div`
  display: block;
  @media(min-width: 800px) {
    padding: 0 12%;
  }
`

export const ButtonGrouper = styled.div`
  display: flex;
  justify-content: center;

  button {
    margin: 0 5px;
  }
`

export const Button = styled.button`
  background: ${({ primary }) => primary ? color.black : color.white};
  color: ${({ primary }) => primary ? color.white : color.black};
  border-radius: 50% 50%;
  border: 2px solid #2d3436;
  padding: 10px;
  font-size: 10px;
  cursor: pointer;
`

export const FormField = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0 30px;

  input {
    border: 0;
    padding: 2px 5px;
    border-bottom: 2px solid ${color.black};
    font-size: 14px;
    outline: 0;
    max-width: 100vw;
    width: 260px;
    text-align: center;
  }
`
