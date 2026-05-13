// home cmp jsx

import { UserPreview } from '../cmps/UserPreview.jsx'


export function Home() {
    return (
        <section className="home-page">
            <h2>Home Sweet Home</h2>
            <p>Welcome to your personalized crypto dashboard!</p>
            <UserPreview />
            
        </section>
    )
}
