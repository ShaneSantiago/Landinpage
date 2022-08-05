import styled from "styled-components"

export const Container = styled.div`
    width: 100%;
    background-color: #29abe2;
    height: 500px;

.container-form{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    width: 380px;
    height: 380px;
}
.title-cadastro{
    font-family: Helvetica;
    color: white;
    font-weight: 25;
    font-size: 35px;
}
.form{
    display: flex;
    flex-direction: column;
    margin: 10px;
}

.label-float{
    position: relative;
    padding-top: 14px;
    color: white;
}
.label-float input{
    border: 0;
    border-bottom: 2px solid lightgrey;
    outline: none;
    color: white;
    font-size: 16px;
    transition: all .3s ease-out;
    -webkit-transition: all .3s ease-out;
    -moz-transition: all .3s ease-out;
    -webkit-appearance:none;
    border-radius: 0;
    width: 380px;
    padding: 8px;
    background-color: transparent;
    font-family: inherit;
    outline: 0;
    z-index: 2;
    postion: relative;
    box-sizing: content-box;
  }
  
  .label-float input:focus{
    border-bottom: 2px solid #3951b2;
  }
  
  .label-float input::placeholder{
    color: transparent;
    
  }
  
  .label-float label{
    pointer-events: none;
    position: absolute;
    top: 0;
    left: 0;
    margin-top: 13px;
    transition: all .3s ease-out;
    -webkit-transition: all .3s ease-out;
    -moz-transition: all .3s ease-out;
  }

  .label-float input:focus + label,
  .label-float input:not(:placeholder-shown) + label{
    font-size: 13px;
    margin-top: 0;
    color: white;
  }



button{
    color: #29abe2;
    background-color: #012d51;
    width: 230px;
    border: none;
    padding: 20px;
    cursor: pointer;
    font-size: 20px;
    margin-top: 30px;
}
`;

export const ContainerTabela = styled.div`
    width: 100%;
    height: 300px;

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
`;

