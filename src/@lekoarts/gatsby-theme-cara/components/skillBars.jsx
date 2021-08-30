import * as React from "react"
import {CircleProgress} from 'react-gradient-progress'
// importar fichero scss

// acordaros de hacer npm i de npm install sass gatsby-plugin-sass

const SkillContent = (props) => {
    console.log(props)
    return (
        //contenedor -> clase 
        <CircleProgress percentage={props.percentage} strokeWidth={8} />
    )
}

export default SkillContent

