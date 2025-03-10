import React from 'react'
import TextComponent from '../Atoms/Text'

type Props = {
    name: string
    uuid: string
}

const CompanyProfile = (props: Props) => {
  return (
    <div>
    <TextComponent type="subtitle" className="text-xl text-text dark:text-textDark" text={props.name} />
    <TextComponent type="paragraph" className="text-text dark:text-gray-600" text={`UID : ${props.uuid}`} />
  </div>  
  )
}

export default CompanyProfile