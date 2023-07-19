import { useState } from 'react'
import './app.css'

// eslint-disable-next-line react/prop-types
export function TwitterFollowCard ({userName, name, initialIsFollowing}){
const [isFollowing, setIsFollowing] = useState(initialIsFollowing)
const handleClick = () => {
    setIsFollowing(!isFollowing)
}
const classButton = isFollowing ? 'tw-followCard-button isFollowing':'tw-followCard-button';
const text = isFollowing ? 'siguiendo': 'seguir';
    return(
        <article className='tw-followCard'>
      <header className='tw-followCard-header'>
        <img
          className='tw-followCard-avatar'
          alt='El avatar de midudev'
          src={`https://unavatar.io/${userName}`}
        />
        <div className='tw-followCard-info'>
          <strong>{name}</strong>
          <span className='tw-followCard-infoUserName'>@{userName}</span>
        </div>
      </header>

      <aside>
        <button className={classButton} onClick={handleClick}>
          <span className='tw-followCard-text'>{text}</span>
          <span className='tw-followCard-stopFollow'>Dejar de seguir</span>
        </button>
      </aside>
    </article>
    )
}