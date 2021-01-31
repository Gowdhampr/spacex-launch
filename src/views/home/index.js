import React, { Component } from 'react'

// Components
import MainLayout from "../../components/MainLayout"
import LabelComponent from "../../components/Core/Label"

export class Home extends Component {
    render() {
        return (
            <div>
                <LabelComponent>SpaceX Launch Programs</LabelComponent>
                <MainLayout />
            </div>
        )
    }
}

export default Home
