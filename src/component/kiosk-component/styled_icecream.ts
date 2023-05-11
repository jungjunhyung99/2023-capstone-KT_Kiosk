import styled from "styled-components";

export const ImageBox1 = styled.div<{image: any}>`
    width: 9rem;
    height: 9rem;
    background-image: url(${(props) => props.image});
    background-size: cover;
`
export const ImageBox_IcecreamCone = styled.div<{image: any}>`
    width: 10rem;
    height: 22rem;
    background-image: url(${(props) => props.image});
    background-size: cover;
`
export const ImageBox_IcecreamBar = styled.div<{image: any}>`
    width: 18rem;
    height: 8rem;
    background-image: url(${(props) => props.image});
    background-size: cover;
`;

export const ImageBox_IcecreamTube = styled.div<{image: any}>`
    width: 20rem;
    height: 8rem;
    background-image: url(${(props) => props.image});
    background-size: cover;
`;

export const ImageBox_IcecreamFamily = styled.div<{image: any}>`
    width: 20rem;
    height: 18rem;
    background-image: url(${(props) => props.image});
    background-size: cover;
`;

export const ImageBox_IcecreamFamilyNattur = styled.div<{image: any}>`
    width: 20rem;
    height: 20rem;
    background-image: url(${(props) => props.image});
    background-size: cover;
`;

export const ImageBox_IcecreamFamilyGoogoo = styled.div<{image: any}>`
    width: 20rem;
    height: 22.5rem;
    background-image: url(${(props) => props.image});
    background-size: cover;
`;
