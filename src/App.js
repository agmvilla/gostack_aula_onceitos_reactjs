import React, { useState, useEffect } from 'react';
import api from './services/api.js'

import './App.css';

import Header from './components/Header.js';


/**
 * Componente
 * Propriedade: 
 * Estado e imutabilidade
 */

function App() {
    const [projects, setProjects] = useState([])

    useEffect( () => {
        api.get('projects').then( response => {
            setProjects(response.data)
        })
    }, [])

    // useState retorna um array com 2 posições
    // 
    // 1. Variável com seu valor inicial
    // 2. Função para atualizarmos esse valor

    function handleAddProject(){
        setProjects([...projects, `Novo Projeto ${Date.now()}`]);

        console.log(projects);
    }

    return (
        <>
            <Header title='Projects' />
            <ul>
                {projects.map(project => <li key={project.id}>{project.title}</li>)}
            </ul>

            <button type="button" onClick={handleAddProject}>Adicionar projeto</button>
        </>
    )
}

export default App;