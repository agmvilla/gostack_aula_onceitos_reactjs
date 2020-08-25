import React from 'react';

import Header from './components/Header.js';

/**
 * Componente
 * Propriedade: 
 * Estado
 */

function App() {
    return (
        <>
            <Header title='Homepage' />
                <ul>
                    <li>Homepage</li>
                    <li>Projetos</li>
                </ul>
            <Header title='Projects' />
                <ul>
                    <li>Homepage</li>
                    <li>Projetos</li>
                    <li>Login</li>
                </ul>
        </>
    )
}

export default App;