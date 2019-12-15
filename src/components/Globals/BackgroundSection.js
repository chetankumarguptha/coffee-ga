import React from 'react'

import BackgroundImage from 'gatsby-background-image'


export default function BackgroundSection({img, styleClass, title, children}) {
    return (
       <BackgroundImage className={styleClass} fluid={img} >
           <h1 className="title text-white text-uppercase text-center display-4 fontweight-bold">
               {title}
            </h1>
            {children}
       </BackgroundImage>
    )
}




BackgroundSection.defaultProbs={
    title:"default title",
    styleClass:"default-background",
}