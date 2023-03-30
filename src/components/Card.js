// import image from '../images/Bitmap.png'
import imageloc from '../images/Shape (2).png'
import imageli from '../images/002-url.svg'
import imagetwit from '../images/Path (3).png'
import imagehome from '../images/home.svg'


    export default function Card ({ user }){
        if (!user) {
          return null;
        }
    return (
        <>
        <div className="box">
            <div className='header2'>
                <div>
                <img src={user.avatar_url} alt="User Avatar" />
                </div>
            <div className='title'>
                <h2>{user.name}</h2>
                <p>@octocat</p>
                <p>{user.bio}</p>
            </div>
            <div>
                <p>Joined: {new Date(user.created_at).toLocaleDateString()}</p>
                {/* {user.created_at} */}
            </div>
        </div>
        <div className='followers'>
                <div className='foll'>
                   <p>Repos:</p> 
                    <p className='number'>{user.public_repos}</p>
                </div>
                <div className='foll'>
                    <p>Followers:</p>
                    <p className='number'>{user.followers}</p>
                </div>
                <div className='foll'>
                    <p>Following:</p>
                    <p className='number'>{user.following}</p>
                    <a href={user.html_url}>Go to profile</a>
                </div>
        </div>
        <div className='buttom'>
            <div>
                <p> <img src={imageloc} alt='locat'/> San Francisco</p> 
                <p> <img src={imageli} alt='link'/> https://github.blog</p>
            </div>
            <div>
                <p> <img src={imagetwit} alt='twit'/> Not Available</p>
                <p> <img src={imagehome} alt=''/> @github</p>
            </div>
         </div> 
        </div>
        </>
    )
}