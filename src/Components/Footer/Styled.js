import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 200px;
    background-color: red;
.background{
    width: 100%;
    height: 200px;
    background-postion: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-image: url(../assets/rodape-desktop.jpg)
}
.container-footer{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
p{
    font-size: 15px;
    margin-top: 2px;
    color: #808080;
}
.info-footer{
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    justify-content: center;
    align-items: center;
}
`;