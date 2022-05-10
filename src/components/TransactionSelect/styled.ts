import styled, { css } from 'styled-components';

export namespace S {
  export const Container = styled.div`
    position: relative;
    display: inline-flex;
  `

type ButtonProps = {
  isOpened: boolean;
  color: string;
}

export const Button = styled.div<ButtonProps>`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 14rem;
    height: 5rem;
    border-radius: 1rem;
    transition: .3s;
    padding: 0 1.6rem;
    border: 2px solid transparent;
    color: ${({ color }) => color};
    cursor: pointer;
    user-select: none;
    background-color: #2a2d3e;
    
    &:hover {
      background: #2a2d3e;
    }

    ${({isOpened}) => isOpened && css`
      border-bottom: none;
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
      background: #2a2d3e;
      border-color: #99BDFF;
    `}

    svg {
      margin-right: 1rem;
    }

    span {
      font-size: 1.8rem;
    }
  `

  type OptionsProps = {
    isOpened: boolean;
  }

  export const Options = styled.div<OptionsProps>`
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    opacity: ${({ isOpened }) => isOpened ? 1 : 0};
    pointer-events: ${({ isOpened }) => isOpened ? 'auto' : 'none'};
    padding: 1.6rem;
    border: 2px solid rgba(255, 255, 255, 0.2);
    border-top: none;
    background: #2a2d3e;
    transition: .3s;
    border-bottom-left-radius: 1rem;
    border-bottom-right-radius: 1rem;

    ${({ isOpened }) => isOpened && css`
      border-color: #99BDFF;
    `}

    div {
      cursor: pointer;
      font-size: 1.6rem;
      color: rgba(255, 255, 255, 0.7);
      display: inline-flex;
      justify-content: center;
      align-items: center;

      svg {
        margin-right: 1rem;
      }
    }
  `
}