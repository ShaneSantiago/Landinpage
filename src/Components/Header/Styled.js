import styled from "styled-components"

export const ContainerHeader = styled.div`
nav{
    width: 1280px;
    display: flex;
    position: absolute;
    padding: 0 20px;
    background-color: transparent;
    align-items: center;
    color: white;
    justify-content: space-around;
    margin: 20px;
}
.logo{
    display: flex;
    justify-content: center;
}
img{
    width: 100px;
}
ul{
    list-style: none;   
    padding: 0;
    overflow: hidden;
    transition: all 0.5s;
    margin: 0 5px;
    display: flex;
}

nav li{
    color: white;
    padding: 12px 30px;
    font-size: 14px; 

}
button{
    background-color: transparent;
    border: none;
    color: white;
    cursor: pointer;
    font-size: 28px;
    right: 30px;
    margin-top: -20px;
    position: relative;
    display: none;
}
li:hover, h2:hover, button:hover{
    cursor: pointer;
    
}
button:focus ~ ul{
    height: 150px;
    z-index: 999;
    position: relative;
}
@media(max-width: 800px) {

    nav{
        width: 150px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }
    nav:hover{
        background-color: #29abe2;
    }
    ul{
        display: flex;
        flex-direction: column;
        text-align: center;
        height: 0;
    }
    
    h2{
        margin: 10px;
    }
    button{
        display: flex;
    }
    li{
        
        display: flex;
        flex-direction: column;
        float: left;
    }
    
}
`;