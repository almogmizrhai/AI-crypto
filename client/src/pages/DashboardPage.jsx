// Dashboard Page jsx

import { DashboardHeader } from '../cmps/DashboardHeader.jsx'

import { CoinSection } from '../cmps/CoinSection.jsx'
import { NewsSection } from '../cmps/NewsSection.jsx'
import { InsightSection } from '../cmps/InsightSection.jsx'
import { MemeSection } from '../cmps/MemeSection.jsx'

export function DashboardPage() {
    return (
    <main className="dashboard-page">
        <DashboardHeader />
        <hr />
        <CoinSection />
        <hr />
        <NewsSection />
        <hr />
        <InsightSection />
        <hr />
        <MemeSection />
    </main>
    )
}