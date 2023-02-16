import styled from '@emotion/styled';

export const Container = styled.div`
  width: 600px;
  margin: 0 auto;
  padding: 20px;
  border: solid 1px black;
  background-color: aliceblue;
`;

export const TitleH1 = styled.h1`
  text-align: center;
`;

export const TitleH2 = styled.h2`
  text-align: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const Input = styled.input`
  height: 32px;
  border: 1px solid rgba(33, 33, 33, 0.2);
  border-radius: 4px;
  &:focus {
    outline: none;
    border: 1px solid #2196f3;
  }
`;

export const Button = styled.button`
  width: 128px;
  height: 32px;
  margin: 0 auto;
  background-color: #c2cbf0;
  border: none;
  border-radius: 4px;
  box-shadow: 0 0 5px #333;
  &:hover {
    transform: scale(1.1);
    box-shadow: 0 0 4px #111;
    transition: 0.3s;
  }
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
`;

export const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
`;

export const ListBtn = styled.button`
  position: relative;
  margin-left: 10px;
  height: 20px;
  width: 20px;
  align-self: center;
  border-radius: 50%;
  border: 1px solid rgb(231, 50, 50);
  background-color: #fff;
  cursor: pointer;
  box-shadow: 0 0 5px #333;
  overflow: hidden;
  transition: 0.3s;

  &:hover {
    background-color: rgb(245, 207, 207);
    transform: scale(1.2);
    box-shadow: 0 0 4px #111;
    transition: 0.3s;
  }
`;

export const Svg = styled.svg`
  color: rgb(231, 50, 50);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: 0.3s;
`;
