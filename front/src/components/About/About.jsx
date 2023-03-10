import styles from './About.module.css';

export default function About(){
    return(
        <div className={styles.container}>
            <h1 className={styles.title}>ABOUT THE CREATOR π</h1>
            <img src="https://media.licdn.com/dms/image/D4E03AQG7n02mfU_h1g/profile-displayphoto-shrink_400_400/0/1677342046436?e=1682553600&v=beta&t=IbAoGlsDLGXZJZ8ZQHeQGxovBoXwbpNgp6afwtTeWq8" alt="perfil" />
            <div className={styles.text}>
                <p align='left'>
                    Me llamo Alexander Noel Yucra π, nacido en Italia π, pero actualmente vivo en PerΓΊ π,
                    estudio en SoyHenry π para ser Full Stack Developer π», me gusta el deporte del basketball π, tambien
                    jugar videojuegos πΉοΈ, mi comida favorita es la pizza π, y tambien me gustan los gatos πΈ.
                </p>
                <p align='left'>
                    Esta App de Rick and Morty fue creada con React, Redux, y con conocimientos en JavaScript, HTML y CSS,
                    en esta App puedes encontrar todo los personajes de la serie, como sus detalles de cada uno de ellos.
                </p>
                <p align='left'>
                    Espero que te haya gustado! πΊ
                </p>
            </div>
        </div>
    )
}