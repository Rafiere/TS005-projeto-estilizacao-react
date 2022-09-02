// import './Dashboard.css'; //O React utilizará, de forma automática, esse arquivo CSS.
import { createUseStyles } from 'react-jss';


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

export const Dashboard = () => {

    const classes = useClasses();

    return (
        // <p className="paragraph">Teste</p> Utilizando classes com um arquivo externo de CSS.
        <p className={classes.paragraph}>Teste</p>
    );
}

//BUG: NÃO CONSIGO APLICAR O JSS IGUAL NO VÍDEO.