import { useState } from "react"

const LikeBtn = () => {
    const [liked,setLiked] = useState(false)
    const handleLike = () => {
        setLiked((pre) => !pre)
    }
  return (
    <>
    {
        liked ? ( <svg style={{cursor:'pointer',alignSelf:'flex-end', marginRight:'1.5rem'}} onClick={handleLike} xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M18.125 21.7H7.175V8.2L14.4.95l1.35 1.4q.175.175.3.487.125.313.125.613v.35L15.05 8.2h5.8q.975 0 1.712.738.738.737.738 1.712v1.775q0 .175-.05.387-.05.213-.125.388l-3.075 7.25q-.25.55-.8.9t-1.125.35ZM5.675 8.2v13.5H1.65V8.2Z"/></svg> ) : ( <svg style={{cursor:'pointer',alignSelf:'flex-end', marginRight:'1.5rem'}} onClick={handleLike} xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M18.125 21.7H6.8V8.2L14.05.95l1.35 1.4q.175.175.288.487.112.313.112.613v.35l-1.1 4.4h6.15q.975 0 1.712.738.738.737.738 1.712v1.775q0 .175-.037.387-.038.213-.138.388l-3.075 7.25q-.25.55-.8.9t-1.125.35ZM8.95 19.55h8.875q.1 0 .213-.062.112-.063.187-.188l2.925-6.95v-1.7q0-.125-.088-.212-.087-.088-.212-.088H11.9l1.425-5.65L8.95 9.1Zm0-10.45v10.45ZM6.8 8.2v2.15h-3v9.2h3v2.15H1.65V8.2Z"/></svg> )
    }
    </>
  )
}

export default LikeBtn