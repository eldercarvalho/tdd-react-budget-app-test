import styled, { css } from 'styled-components'

export namespace S {
  export const Form = styled.form`
    display: flex;

    > * + * {
      margin-left: 1.6rem;
    }

    button {
      background-color: #005BFF;
      border: none;
      width: 180px;
      border-radius: 10px;
      font-size: 1.8rem;
      cursor: pointer;
      transition: .3s;
      color: #99BDFF;

      &:hover {
        background-color: #7AA7FB;
        color: #FFF;
      }
    }
  `;

  type InputProps = {
    willGrow: boolean
  }

  export const Input = styled.input<InputProps>`
      height: 50px;
      background: #2a2d3e;
      border: 2px solid transparent;
      padding: 0 1.6rem;
      border-radius: 1rem;
      outline: none;
      transition: .3s;
      color: rgba(255, 255, 255, .7);
      font-size: 1.8rem;
      min-width: 0;
      
      &:focus {
        border-color: #99BDFF;
      }
      
      ${({ willGrow }) => willGrow && css`
        width: 100%;
        flex-grow: 1;
      `}
  `;
}