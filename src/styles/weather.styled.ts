import styled from "styled-components";

export const MainWrapper = styled.div`
height: 100vh;
  width: 100vw;
  background: linear-gradient(to right, #c7c7eb, #ccf2dd);
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  overflow: hidden;
.container {
background-color: rgba(255, 255, 255, 0.75);
  border-radius: 20px;
  padding: 2rem;
  box-shadow: 0 12px 25px rgba(0, 0, 0, 0.1);
  width: 90%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
}

.searchArea {
  .searchButton{
    background: none;
    border: none;
    padding: 0;
    margin: 0;
    outline: none;
    cursor: pointer;
  } 
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  border: 1px solid grey;
  border-radius: 50px;
  padding: 0.5rem 1rem;
  background: rgba(255, 255, 255, 0.6);
}


.searchArea > input {
border: none;
  outline: none;
  flex: 1;
  background: transparent;
  font-size: 1rem;
  text-align: center;
}
.searchCircle {
display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;


> .searchIcon {
font-size: 1.2rem;
    color: grey;
}
}


.weatherArea {
text-align: center;


> .icon {
font-size: 6rem;
    margin: 1rem 0;


/* DO LATER NOT WHEN CREATING UI */
}


> h1 {
font-size: 3rem;


font-family: "Bebas Neue", sans-serif;
}


> span {
margin-bottom: 10px;
font-family: "Inter", sans-serif;
}


> h2 {
font-size: 2rem;
font-family: "Inter", sans-serif;
font-weight: 400;
}
}


.bottomInfoArea {
 display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  padding: 1rem;
  border-radius: 12px;
  background: linear-gradient(90deg, #f3fffd 0%, #fdffe8 100%);
  gap: 1rem;
}
.humidity,
.wind {
display: flex;
  align-items: center;
  gap: 0.5rem;
  


> .humidityIcon {
font-size: 3rem;
}
}


.windIcon {
font-size: 2rem;
}


.loading {
height: 400px;
width: 300px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
z-index: 9999;


.loadingIcon {
font-size: 3rem;
animation: spin 2s linear infinite;
}
p {
font-size: 22px;
margin-top: 10px;
font-family: "Josefin Sans", sans-serif;
}
}


@keyframes spin {
from {
transform: rotate(0deg);
}
to {
transform: rotate(360deg);
}
}
`;
