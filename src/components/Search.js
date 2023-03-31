import photo from '../images/Shape 2.png';
import { useState, useEffect } from 'react';
import axios from 'axios';
import imageloc from '../images/Shape (2).png'
import imageli from '../images/002-url.svg'
import imagetwit from '../images/Path (3).png'
import imagehome from '../images/home.svg'


export default function Search (){
    const [username, setUsername] = useState('octocat');
    const [userData, setUserData] = useState('');
    const [error, setError] = useState('');
    const [searchInputValue, setSearchInputValue ] = useState ('');
    
      
        useEffect(() => {
          axios.get(`https://api.github.com/users/${username}`)
            .then(response => {
              console.log(response.data);
              setUserData(response.data);
              setError("")
            })
            .catch(error => {
              setError("No Result");
            });
        }, [username]);
      

      function handleInputChange(event) {
        setSearchInputValue(event.target.value);
      }


      function handleClick(){
        setUsername(searchInputValue)
      }

      const formatDate = (dateString) => {
        const date = new Date(dateString);
        const options = {
          day: 'numeric',
          month: 'short',
          year: 'numeric'
        };
        const formattedDate = date.toLocaleDateString('en-US', options);
        return `joined ${formattedDate}`;
    };


    return (
        <>
        <div className="search">
            <img className='searchimg' src={photo} alt="search"/>
            <input type="text" value={searchInputValue} onChange={handleInputChange} placeholder="Enter a GitHub username" />
            {error && <p className='noresult'>{error}</p>}
            <button onClick={handleClick}>Search</button>
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
                <p>Joined: {formatDate(userData.created_at)}</p>
       
            </div>
        </div>
        <div className='followers'>
                <div className='foll'>
                   <p>Repos:</p> 
                    <p className='number'>{userData.public_repos}</p>
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
            <div className='first'>
                <div className='twittt'>
                    <img src={imageloc} alt='locat'/>
                    <p>  {userData.location ?  userData.location : "Not Available"}</p>
                </div> 
                <div className='twittt'>
                    <img src={imageli} alt='link'/>
                    <p>  {userData.blog ?  userData.blog : "Not Available"} </p>
                </div>
            </div>
            <div className='first'> 
                <div className='twittt'>
                    <img src={imagetwit} alt='twit'/>
                    <p>{userData.twitter_username ?  userData.twitter_username : "Not Available"}</p>
                </div>

                <div className='twittt'>
                    <img src={imagehome} alt=''/>
                    <p>{userData.company ?  userData.company : "Not Available"}</p>
                </div>
            </div>
         </div> 
        </div>
        </>
    )
}


// <img src={imagetwit} alt='twit'/> 