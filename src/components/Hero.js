import React from 'react'

export default function Hero({children,hero}) {
    return (
        <header className={hero}>
            {children}
        </header>
    );
} 

//default property to pass to all children pages
Hero.defaultProps = {
    hero: "defaultHero"
}
