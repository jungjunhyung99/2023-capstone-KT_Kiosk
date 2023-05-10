import styled from "styled-components";

export const MovieChoiceDiv = styled.div<{bgimage: any}>`
    width: 20rem;
    height: 20rem;
    background-image: url(${(props) => props.bgimage});
    background-size: cover;
    border-radius: 1rem;
`;

export const MovieContentDiv = styled.div`
    display: flex;
    background-color: #353535;
    width: 100%;
`;
export const MovieGuideDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    color: white;
    padding: 2.5rem;
    margin-bottom: 2rem;
    cursor: pointer;
`;

export const ClockDiv = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 4rem;
    color: white;
    margin: 2rem 0;
    align-items: center;
`

export const MovieLocDiv = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
`;

export const DayDiv = styled.div`
    font-size: 1rem;
    padding: 2rem 3rem 0rem 3rem;
    color: white;
`;