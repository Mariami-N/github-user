import photo from '../images/Shape 2.png';
import { useState } from 'react';
import axios from 'axios';
import imageloc from '../images/Shape (2).png'
import imageli from '../images/002-url.svg'
import imagetwit from '../images/Path (3).png'
import imagehome from '../images/home.svg'


export default function Search (){
    // const [cat, setcat] = useState ()
    const [username, setUsername] = useState('');
    const [userData, setUserData] = useState('');
    const [error, setError] = useState('');

    function search() {
        axios.get(`https://api.github.com/users/${username}`)
          .then(response => {
        console.log(response.data);
            setUserData(response.data);
          })
          .catch(error => {
            setError("No Result");
            setUserData('');
          });
      }
      function handleInputChange(event) {
        setUsername(event.target.value);
        console.log (event.target.value)
      }
    return (
        <>
        <div className="search">
            <img className='searchimg' src={photo} alt="search"/>
            <input type="text" value={username} onChange={handleInputChange} placeholder="Enter a GitHub username" />
            {error && <p className='noresult'>{error}</p>}
            <button onClick={search}>Search</button>
        </div>
        <div className="box">
            <div className='header2'>
                <div>
                <img className='avatar' src={userData.avatar_url} alt="User Avatar" />
                </div>
            <div className='title'>
                 <h2>{userData.name}</h2> 
                <p>@{userData.login}</p> 
                <p>{userData.bio}</p>
            </div>
            <div>
                <p>Joined:{userData.created_at}</p>
       
            </div>
        </div>
        <div className='followers'>
                <div className='foll'>
                   <p>Repos:</p> 
                    <p className='number'>{userData.repos}</p>
                </div>
                <div className='foll'>
                    <p>Followers:</p>
                    <p className='number'>{userData.followers}</p>
                </div>
                <div className='foll'>
                    <p>Following:</p>
                    <p className='number'>{userData.following}</p>
                    {/* <a href={user.html_url}>Go to profile</a> */}
                </div>
        </div>
        <div className='buttom'>
            <div>
                <p> <img src={imageloc} alt='locat'/> {userData.location}</p> 
                <p> <img src={imageli} alt='link'/> https://github.blog</p>
            </div>
            <div>
                <p> <img src={imagetwit} alt='twit'/>{userData.twitter_username
}</p>
                <p> <img src={imagehome} alt=''/> @github</p>
            </div>
         </div> 
        </div>
        </>
    )
}