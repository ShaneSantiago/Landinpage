import styled from "styled-components"



export const Container = styled.div`
    width: 100%;
    height: 100%;

.container{
    width: 100%;
    height: 650px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-image: url(assets/index-image.jpg)
}
.header{
    display: flex;
    justify-content: space-around;
    padding: 20px;
h2{
    color: white;
}
img{
    width: 200px;
}
}
.menu ul{
    display flex;
    text-decoration: none;
}
.menu li{
    margin: 15px;
    color: white;
    text-decoration: none;
    list-style: none;
}
.info{
    width: 550px;
    color: white;
    margin-left: 200px;
}
.info-title{
    margin-top: 100px;
    font-family: Helvetica-Light;
    font-size: 50px;
}
span{
    font-family: Helvetica-Light;
}
`;