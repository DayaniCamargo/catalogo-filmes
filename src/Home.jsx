import axios from 'axios';
import React, {useEffect,useState} from 'react'
import { Link } from 'react-router-dom';

function Home() {

    const[data, setData]= useState([]);

    useEffect( () => {
        axios.get('https://6ad252f466cd28aed82de50d.mockapi.io/filmes')
            .then(res => setData(res.data))
            .catch(err => console.log(err));
    }, [] );


    return (
        <div className='home'>

            <header className='tenda'>

                <div className='lona'>
                    <div className='listras'></div>
                </div>

                <div className='titulo'>
                    <span className='pipoca'>🍿</span>

                    <h1>CATÁLOGO DE FILMES🎬 </h1>

                    <span className='pipoca'>🍿</span>
                </div>

                <nav>
                    <Link to='/'>INÍCIO</Link>
                    <Link to='/create'>CRIAR</Link>
                    <Link to='/update'>ALTERAR</Link>
                    <Link to='/delete'>APAGAR</Link>
                </nav>

            </header>

            <main className='filmes-container'>

                {data.map((d, i) => (
                    <div
                        key={i}
                        className='filme-card'
                    >
                        <strong>ID: {d.id}</strong>

                        <span>
                            <strong>Nome: </strong>

                            <Link to={`/read/${d.id}`}>
                                {d.nome}
                            </Link>
                        </span>
                    </div>
                ))}

            </main>

        </div>
    )
}

export default Home