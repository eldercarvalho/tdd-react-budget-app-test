import styled from "styled-components";

export namespace S {
  export const Table = styled.table`
    width: 100%;
    margin-top: 5rem;
    border-collapse: collapse;
    color: rgba(255, 255, 255, 0.7);
    
    th,
    td {
      padding: 1.6rem  0;
      font-size: 1.8rem;
      border-bottom: 2px solid #2a2d3e;
      text-align: center;

      button {
        cursor: pointer;
        border: none;
        background-color: transparent;
        color: rgba(255, 255, 255, .7);
      }
    }
  `
}