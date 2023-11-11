import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <h1>titulo Editado inicio do projeto</h1>
      </div>
      <div className={styles.center}>
        <div className={styles.image}>
          Imagem 
        </div>
        <div className={styles.description}>
          descrição da image
        </div>
      </div>
    </main>
  )
}
