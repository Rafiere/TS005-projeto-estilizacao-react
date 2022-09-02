// import './Dashboard.css'; //O React utilizará, de forma automática, esse arquivo CSS.
import { createUseStyles } from 'react-jss';
import styled from 'styled-components';


const useClasses = createUseStyles({

    //Os estilos CSS abaixo serão aplicados para os componentes que tiverem o "className" com o valor de "paragraph".

    //Abaixo, estamos utilizando o JSS, que é o CSS com o JS.
    paragraph: {

        backgroundColor: 'black',
        color: 'white'
    },

    '&:hover': {
        backgroundColor: 'red',
    },

    '&:active': {
        backgroundColor: 'blue'
    },
}); //O ReactJSS contém um hook personalizado que devolve todos os nomes de classes que declararmos nesse objeto.

/* Utilizando Styled Components */

//Estamos criando uma tag "<p>" com um CSS estilizado. O CSS dessa
//tag está sendo passado para a const "Paragraph".

const Paragraph = styled.p`

    background-color: black;
    color: white;

    &:hover {
        background-color: red;
    };

    &:active {
        background-color: blue;
    };

`;

export const Dashboard = () => {

    const classes = useClasses();

    return (
        // <p className="paragraph">Teste</p> Utilizando classes com um arquivo externo de CSS.
        <>
            <p className={classes.paragraph}>Teste</p>
            <Paragraph></Paragraph>
        </>
    );
}

//BUG: NÃO CONSIGO APLICAR O JSS IGUAL NO VÍDEO.