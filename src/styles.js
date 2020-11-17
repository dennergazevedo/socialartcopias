import styled from 'styled-components';
import { motion } from "framer-motion";

export const Container = styled(motion.div)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 100vw;
    max-height: 100vh;
`;

export const Background = styled(motion.img)`
    position: absolute;
    width: 100vw;
    height: 100vh;
    top: 0;
    z-index: -1;
`;

export const FeitaPraVoce = styled(motion.img)`
    position: absolute;
    width: auto;
    height: 70vh;
    top: 0;
    left: 0;
    opacity: 0.3;
    transition: 0.5s all;

    @media only screen and (max-width: 600px){
        left: 0;
        transition: 0.5s all;
        height: 40vh;
    }
`;

export const Logomarca = styled(motion.img)`
    width: 10vw;
    min-width: 130px;
    height: auto;
    z-index: 1;
    margin-top: 50px;
    margin-bottom: 100px;
`;

export const ItemFace = styled(motion.button)`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 30vw;
    height: 50px;
    border-radius: 5px;
    background-image: linear-gradient(#333, #333);
    color: #FFF;
    padding: 10px;
    margin-top: 20px;
    min-width: 250px;
    z-index: 1;

    .icon{
        font-size: 24px;
    }

    &:hover{
        background-image: linear-gradient(#3b5998, #3b5998);
    }
`;

export const ItemInsta = styled(motion.button)`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 30vw;
    height: 50px;
    border-radius: 5px;
    background-image: linear-gradient(#333, #333);
    color: #FFF;
    padding: 10px;
    margin-top: 20px;
    min-width: 250px;
    z-index: 1;

    .icon{
        font-size: 24px;
    }

    &:hover{
        background-image: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%);
    }
`;

export const ItemWpp = styled(motion.button)`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 30vw;
    height: 50px;
    border-radius: 5px;
    background-image: linear-gradient(#333, #333);
    color: #FFF;
    padding: 10px;
    margin-top: 20px;
    min-width: 250px;
    z-index: 1;

    .icon{
        font-size: 24px;
    }

    &:hover{
        background-image: linear-gradient(#34af23, #1f8211);
    }
`;

export const ItemSite = styled(motion.button)`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 30vw;
    height: 50px;
    border-radius: 5px;
    background-image: linear-gradient(#333, #333);
    color: #FFF;
    padding: 10px;
    margin-top: 20px;
    min-width: 250px;
    z-index: 1;

    .icon{
        font-size: 24px;
    }

    &:hover{
        background-image: linear-gradient(to right, #4287f5, #00e69d);
    }
`;

export const Footer = styled.div`
    position: absolute;
    bottom: 20px;
    font-size: 12px;
    color: #333;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    a{
        text-decoration: none;
        font-weight: 600;
        color: #333;

        &:hover{
           color: #111;
        }
    }
`;

export const Title = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 14px;

    b{
        font-size: 18px;
    }

    span{
        margin-top: 10px;
        margin-bottom: 30px;
    }
`;