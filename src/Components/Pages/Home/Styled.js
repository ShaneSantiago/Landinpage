import styled from "styled-components"


export const Container = styled.div`
    width: 100%;
    height: 100%;
    
.container{
    width: 100%;
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url(assets/index-image.jpg)
}
.info{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 500px;
    margin-right: 300px;
    font-family: Helvetica;
    font-weight: 100;
}
h2{
    color: white;
    font-size: 30px;

}
span{
    font-size: 20px;
}

@media(max-width: 800px) {
    .container{
        width: 100%;
        height: 100vh;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        background-image: url(assets/index-image-mobile.jpg)
    }
    .info{
        width: 100%;
        height: 350px;
        font-family: Helvetica;
    }
}
`;


export const ContainerTabela = styled.div`
    width: 100%;
    height: 100vh;

.title-column{
    color: #29abe2;
    font-family: Roboto-Light;
    font-size: 20px;
    font-weight: 25;
}
.container-table{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}
.number-table{
    color: #012d51;
}
table{
    margin-top: 20px;
    border-collapse: collapse;
}
table th, tr, td{
    padding: 10px;
    color: #012d51;
    width: 150px;
}
.row-name-info{
    text-align: center;
    border-left: 2px solid #29abe2;
    border-bottom: 2px solid #29abe2;
    color: #012d51;
    font-family: Roboto-Regular;
    font-size: 12px;
}
.row-name{
    text-align: center;
    border-bottom: 2px solid #29abe2;
}
.row-info{
    text-align: center;
    border-left: 2px solid #29abe2;
    border-bottom: 2px solid #29abe2;
    color: #808080;
    font-family: Helvetica-Regular;
}
.row-info2{
    text-align: center;
    border-left: 2px solid #29abe2;
    text-align: center;
    color: #808080;
    font-family: Helvetica Condensed Regular;
}
.row-number{
    text-align: center;
    border-bottom: 2px solid #29abe2;
    color: #012d51;
    font-family: Roboto;
}
.row-number2{
    text-align: center;
    color: #012d51;
    font-family: Roboto;
}
@media(max-width: 800px){
    .container-table{
        display: flex;
        width: 300px;
        align-items center;
        justify-content: center;
    }
}
`;