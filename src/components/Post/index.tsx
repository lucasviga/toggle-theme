import React from 'react';
import { Container, PostContent } from './styles'

import lollapalozaIcon from '../../assets/lollapaloza.jpg';

const Post: React.FC = () => {
  return(
    <Container>                          
      <PostContent>
        <div>
          <img src={lollapalozaIcon} alt="" />
        </div>
      
        <li>
          <h1>Lollapalooza Brasil</h1>
          <p>O rock faz parte da essência do #LollaBR, e é por isso que contamos 
            com as lendas, os clássicos e o futuro do estilo em nossos palcos. 
            Garanta o seu lugar no mosh
          </p>
        </li>
      </PostContent>       

      <PostContent>
        <div>
          <img src={lollapalozaIcon} alt="" />
        </div>
      
        <li>
          <h1>Lollapalooza Brasil</h1>
          <p>Dia 04 de abril ele sobe no nosso palco ao lado de Drik Barbosa, 
            Majur e Rael para um show imperdível. E se é imperdível, garanta 
            logo o seu ingresso
          </p>
        </li>
      </PostContent>   

      <PostContent>
        <div>
          <img src={lollapalozaIcon} alt="" />
        </div>
      
        <li>
          <h1>Lollapalooza Brasil</h1>
          <p>Lorem Ipsum is simply dummy text of the printing and 
            typesetting industry. Lorem Ipsum has been the industry's standard 
            dummy text ever since the 1500s, when an unknown printer took a 
            galley of type and scrambled it to make a type specimen book. 
          </p>
        </li>
      </PostContent>        
    </Container>
  );
}

export default Post;