import React from 'react';
import styled from 'styled-components';

const Content = styled.main `
display: flex;
justify-content: space-between;
align-items: center;
flex-direction: row;
height: 500px;
margin: 0 auto;
box-sizing: border-box;

`
const ContentItem = styled.p `
color: #000;
text-align: center;
font-family: "Read";
width: 250px;
background-color:#559;
padding: 10px;
box-sizing: border-box;
margin: 40px;
`

export default function content(){
  return (
    <React.Fragment>
      <Content>
        <ContentItem>
          zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz
               tttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttt
        </ContentItem>
        <ContentItem>
          xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                uuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu
        </ContentItem>
      </Content>
    </React.Fragment>
  );
}