import styled, { css } from "styled-components";

export namespace S {
  export const Container = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-bottom: 5rem;
  `;

  type TotalProps = {
    type: 'total' | 'income' | 'expense'
  }

  const totalColors = {
    total: css`color: rgba(255, 255, 255, 0.7);`,
    income: css`color: green;`,
    expense: css`color: red;`,
  }

  export const Total = styled.div<TotalProps>`
    font-size: 2.4rem;
    color: rgba(255, 255, 255, 0.7);

    & + div {
      margin-left: 3rem;
    }

    span {
      ${({ type }) => totalColors[type]}
    }
  `;
}