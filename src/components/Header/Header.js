import './Header.css'

export const Header = () => {
    return(
        <div className="hero-nav">
            <div className="hero-nav__inner">
                <form onsubmit="event.preventDefault();" role="search">
                    <input id="search" type="search" placeholder="Введите ID компании" autofocus required />
                    <button type="submit">Go</button>    
                </form>
            </div>
        </div>
     )
}