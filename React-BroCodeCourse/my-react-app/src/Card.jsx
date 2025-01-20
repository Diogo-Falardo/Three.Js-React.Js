import profilPic from './assets/Diogosmall.png'

function Card(){
    return(
        <div className="card">
            <img className='card-img' alt="profile picture" src={profilPic}></img>
            <h2 className='card-title'>Diogo Falardo</h2>
            <p className='card-text'>Estou aprender a REACT</p>
        </div>
    );
}

export default Card