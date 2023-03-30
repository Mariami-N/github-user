import photo from '../images/Shape 2.png'
export default function Search (){
    return (
        <>
        <div className="search">
            <img className='searchimg' src={photo} alt="search"/>
            <input placeholder='Search GitHub username…'/>
            <p className='noresult'>No results</p>
            <button>Search</button>
        </div>
        </>
    )
}