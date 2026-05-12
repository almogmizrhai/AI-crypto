// app jsx

import { Home } from './cmps/Home.jsx'
import { DarkMode } from './cmps/DarkMode.jsx'

export function App() {
    return (
        <section className="app">
            <header className="app-header header grid">
                <h1>My App  </h1>
                <DarkMode />
            </header>
            <main className="container main">
                <Home />
            </main>
        </section>
    )
}