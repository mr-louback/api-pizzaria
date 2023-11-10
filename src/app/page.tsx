import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          paragrafo main
        </p>
        <div>
          paragrafo 
        </div>
      </div>

      <div className={styles.center}>
        <div className={styles.image}>
          paragrafo center
        </div>
        <div className={styles.description}>
          <p>
            paragrafo center
          </p>
          <div>
            paragrafo
          </div>
        </div>
      </div>


    </main>
  )
}
