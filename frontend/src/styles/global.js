import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');
    * {
      margin: 0;
      padding: 0;
      outline: 0;
      box-sizing: border-box;
    }
    *:focus {
      outline: 0;
    }
    html, body {
      height: 100%;
      
    }
    #root {
      height:100%;
      background: linear-gradient(-90deg,  #008080,#149414);
    }
    body {
      -webkit-font-smoothing: antialiased;
    }
    body, input, button {
      font: 14px 'Roboto', sans-serif;
    }
    a {
      text-decoration: none;
    }
    ul {
      list-style: none;
    }
    buttton {
      cursor: pointer;
    }

    @keyframes fade {
        from {
            opacity: 0;
            transform: scale(0.9);
        }
        to {
            opacity: 1;
            transform: scale(1);
        }
    }


    

`;