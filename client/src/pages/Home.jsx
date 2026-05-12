// home cmp jsx

import { UserPreview } from '../cmps/UserPreview.jsx'
import { DarkMode } from '../cmps/DarkMode.jsx'

export function Home() {
    return (
        <section>
            <h2>Home Sweet Home</h2>
            <UserPreview />
            <DarkMode />
        </section>
    )
}
