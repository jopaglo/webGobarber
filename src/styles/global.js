import { createGlobalStyle } from 'styled-components';

import 'react-perfect-scrollbar/dist/css/styles.css';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');


 * {
     margin: 0;
     padding: 0;
     outline: 0;
     box-sizing: border-box;
 }

 *:focus {
     outline: 0; /* serve principalmente pra input */
 }

 html , body , #root {
     height: 100%;
 }

 body {
     -webkit-font-smoothing: antialiased;
     background: linear-gradient(-90deg , #7159c1 , #ab59c1);
     width: 95%;
     margin: auto;
 }

/* por padrao o input e o button nao herdam a fonte do body, ai eu forço*/
 body , input , button {
     font-size: 16px;
     font-family:  'Roboto' , sans-serif;
 }

 a {
     text-decoration: none;
 }

 ul, li {
     list-style: none;
 }

 button {
     cursor: pointer;
 }

`;
