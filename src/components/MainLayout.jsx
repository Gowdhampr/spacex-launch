import React from 'react'
import Card from "../components/Card";

const MainLayout = () => {
    return (
        <main className="mainLayout">
            <section className="filterSection">
                <Card />
            </section>
            <section className="mainContent">
                <div className="cardList">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </section>
        </main>
    )
}

export default MainLayout