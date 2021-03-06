import styles from './styles.module.scss'

import { usePlayer } from 'hook/usePlayer'

export const Footer = () => {
  const { player } = usePlayer()
  return (
    <footer className={styles.container}>
      <div className={styles.player__info}>
        <div>
          <strong>CLUB</strong>
          <h3>{player.club}</h3>
        </div>
        <div>
          <strong>POSITION</strong>
          <h3>{player.position}</h3>
        </div>
      </div>

      <div className={styles.player__gallery}>
        <div className={styles['player__gallery-content']}>
          {player.gallery.map(image => (
            <div key={image} className={styles.image}>
              <img src={image} />
            </div>
          ))}
        </div>
      </div>
    </footer>
  )
}
