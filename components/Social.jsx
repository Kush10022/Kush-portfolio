import Link from "next/link"
import {FaGithub, FaLinkedinIn} from 'react-icons/fa'

const socials = [
  {icon: <FaGithub />,path:'https://github.com/Kush10022'},
  {icon: <FaLinkedinIn />,path:'https://www.linkedin.com/in/kush-patel-341815222/'}
]

const Social = ({containerStyles, iconStyles}) => {
  return <div className={containerStyles}>
    {socials.map((items, index) => {
      return <Link key={index} href={items.path} className={iconStyles}>
        {items.icon}
      </Link>
})}
  </div>
    
}

export default Social