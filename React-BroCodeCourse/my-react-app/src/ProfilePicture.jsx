function ProfilePicture(){

    const imageUrl = './src/assets/Diogosmall.png';

    const handleclick = (e) => e.target.style.display = "none";

    return(<img onClick={(e) => handleclick(e)} src={imageUrl}></img>)
}
export default ProfilePicture