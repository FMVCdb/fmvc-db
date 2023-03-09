import { Link } from 'react-router-dom'

const Public = () => {
    const content = (
        <section className='public'>
            <header>
                <h1>Welcome to <span className='nowrap'>FMVC</span></h1>
            </header>
            <main className='public__main'>
                <p>The One-Stop-Shop for all MPE PGM related training.</p>
                <address className='public__addr'>
                    Intel<br />
                    1900 Prairie City Road<br />
                    Folsom, CA 95630<br />                    
                    <a href='tel:+15555555555'>(916) 356-8080</a>
                </address>
                <br />
                <p>INTEL FM6</p>
            </main>
            <footer>
                <Link to='/login'>Login</Link>
            </footer>
        </section>

    )
    return content
}
export default Public