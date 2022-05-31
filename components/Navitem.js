import Link from 'next/link';
const Navitem = ({href,name,handler,active}) => {
  return (
    <Link href={href}>
        <li data-content = {name} onClick={handler} className={active === name ? 'active' : ''}>
             <a data-content = {name} className='Nav__Link'>{name}</a>
        </li>
    </Link>
  )
}

export default Navitem