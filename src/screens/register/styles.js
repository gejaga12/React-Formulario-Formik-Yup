import styled from "styled-components";

export const Button = styled.button`
  margin-top: 1em;
  margin-left: 7em;
  width: 10em;
  height: 2em;
  border: none;
  border-radius: 50px;
  background-color: #d35400;
  color: #f8f9f9;
  :hover {
    background-color: #d35400;
    color: black;
    cursor: pointer;
  }
`;

export const Container = styled.div`
display: flex;
flex-direcction: column;
justify-content: center;
aling-items: center;
margin-top: 20px
width: 40px;
height: 520px
background: #f8c471;

`;
export const ContainerInput = styled.div`
  width: 100%;
  height: 56px;
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: #f8c471;
`;

export const Input = styled.input`
text-align: center;
margin-left: 8px;
margin-right: 8px;
width: auto;
height: 35px
padding-left: 1em;
padding-right: 1em;
border-radius: 50px;
border: none;
background: white;
margin-top: 1.5em;
:focus-visible: {
    outline: 1px solid #f8f9f9
}
`;
export const ContainerForm = styled.form`
  width: 20em;
  height: auto;
  margin: 12em;
  border: 3px solid black;
`;

export const Titulo = styled.div`
  height: 1.5em;
  padding-top: 6px;
  padding-left: 3.3em;
  background: #f8c471;
  font-weight: bold;
`;
export const Error = styled.p`
  color: red;
  font-size: 10px;
  padding-left: 19px;
`;
