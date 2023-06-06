import styled from "styled-components";

export const RecordContainer = styled.div`
    display: flex;
    background-color: white;
    color: black;
    width: 50rem;
    height: 100vh;
`;

export const RecordGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(2,1fr);
    width: 100%;
    height: 100%;
    grid-gap:4px;
`;

export const RecordDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 28rem;
`;

export const BoldDiv = styled.div`
    font-size: 2rem;
    font-weight: 800;
`;

export const LineDiv = styled.div`
  grid-column: 1 / span 2; /* 가로 구분선 */
  grid-row: 1 / span 2; /* 세로 구분선 */
  width: 1px;
  height: 100%;
  background-color: #000;
`;