import image from '../images/Bitmap.png'
export default function Card (){
    return (
        <>
        <div className="box">
            <div>
            <img src={image} alt=""/>
            </div>
            <div className='title'>
                <h2>octocat</h2>
            </div>
         

        </div>
        </>
    )
}