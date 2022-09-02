import React, { useEffect, useState } from 'react';

export const App = () => {

  const [padding, setPadding] = useState(0) //O atributo "padding" está vinculado ao state "padding".

  /**
   * Existem várias formas melhores de aplicarmos o CSS do que o CSS inline.
   * 
   * O CSS inline torna o documento HTML muito grande e a página muito pesada.
   */

  // useEffect(() => {
  //   setInterval(() => {
  //     setPadding(oldPadding => { //Estamos, a cada um segundo, somando "1" no valor do atributo "padding".
        
  //       return oldPadding + 1; //Apenas o atributo "padding" será alterado.
  //     })
  //   }, 1000);
  // }, [])

  return (

    <div>
      <p>Testando</p>
    </div>
    // <div style={{backgroundColor: 'black', color: 'white', padding: padding}}>
    //   Teste
    // </div>
  );
}

export default App;
