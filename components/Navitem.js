import Link from 'next/link';
const Navitem = ({path,handler,active}) => {
    const name = path.slice(1,path.length).split('');
    const capName = name.map((i,index) => index === 0 ? i.toUpperCase() : i)
  
  return (
    <Link href={path}>
        <li data-content = {path} onClick={handler} className={active === path ? 'active' : ''}>
             <a data-content = {path} className='Nav__Link'>{path ==='/' ? 'Home': capName }</a>
        </li>
    </Link>
  )
}

export default Navitem