import React from 'react'
import type { LenderNavLinksGroup } from '../utility/data-structure'
import { LenderNavLink } from './lender-nav-link'

const LenderNavGroup:React.FC<LenderNavLinksGroup> = ({heading, links}) => {
    const allGroupLinks:JSX.Element[] = links.map(({desc,imgSrc})=><LenderNavLink icon={imgSrc} text={desc}/>)

  return (
    <div className="lender-link-group">
        <h1>{heading}</h1>
        {allGroupLinks}

    </div>
  )
}

export {LenderNavGroup};