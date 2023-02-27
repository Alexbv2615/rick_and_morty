import styles from './About.module.css';

export default function About(){
    return(
        <div className={styles.container}>
            <h1 className={styles.title}>ABOUT THE CREATOR 😎</h1>
            <img src="https://media.licdn.com/dms/image/D4E03AQG7n02mfU_h1g/profile-displayphoto-shrink_400_400/0/1677342046436?e=1682553600&v=beta&t=IbAoGlsDLGXZJZ8ZQHeQGxovBoXwbpNgp6afwtTeWq8" alt="perfil" />
            <div className={styles.text}>
                <p align='left'>
                    Me llamo Alexander Noel Yucra 😀, nacido en Italia 🌍, pero actualmente vivo en Perú 🌎,
                    estudio en SoyHenry 🚀 para ser Full Stack Developer 💻, me gusta el deporte del basketball 🏀, tambien
                    jugar videojuegos 🕹️, mi comida favorita es la pizza 🍕, y tambien me gustan los gatos 😸.
                </p>
                <p align='left'>
                    Esta App de Rick and Morty fue creada con React, y con conocimientos en JavaScript, HTML y CSS,
                    en esta App puedes encontrar todo los personajes de la serie, como sus detalles de cada uno de ellos.
                </p>
                <p align='left'>
                    Espero que te haya gustado! 😺
                </p>
            </div>
        </div>
    )
}