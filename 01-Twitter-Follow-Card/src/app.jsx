import "./index.css"
import { TwitterFollowCard } from "./TwitterFollowCard"
import "./app.css"
export function App(){
    return(
       <>
            <TwitterFollowCard userName="midudev" name= "midudev" initialIsFollowing/>
            <TwitterFollowCard userName="elonmusk" name= "Elon Musk" initialIsFollowing = {false}/>
       </>
    )
}