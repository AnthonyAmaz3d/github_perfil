import { useEffect, useState } from "react"

import style from './ReposList.module.css'

const ReposList = ({ nomeUsuario }) => {
    const [repos, setRepos] = useState([])
    const [estaCarregando, setEstaCarregando] = useState(true)

    useEffect(() => {
        setEstaCarregando(true);
        fetch(`https://api.github.com/users/${nomeUsuario}/repos`)
        .then(res => res.json())
        .then(resJson => {
            setTimeout(() => {
                setEstaCarregando(false);
                setRepos(resJson);
            }, 3000)
        })
    }, [nomeUsuario])

    return (
        <div className="container">
            {estaCarregando ? (
                <h1>Carregando...</h1>
            ) : (
                <ul className={style.list}>
                {repos.map(repositorio => (
                    <li key={repositorio.id} className={style.listItem}>
                        <div className={style.itemName}>
                            <b>Nome:</b> 
                            {repositorio.name} 
                        </div>
                        <div className={style.itemLanguage}>
                            <b>Linguagem</b> 
                            {repositorio.language}
                        </div>
                        <a className={style.itemLink} target="_blank" href={repositorio.html_url}>Visitar no GitHub</a>
                    </li>
                ))}
            </ul>
            )}
        </div>
    )
}

export default ReposList;