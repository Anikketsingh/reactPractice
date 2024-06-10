import profilePic from "./assets/profile-icon-design-free-vector.jpg"
function Card() {
    return(
        <div className="card">
            <img className="card-img" src={profilePic} width={240} alt="image not available" />
            <h2 className="card-title">Bro Code</h2>
            <p>I am studying cse at dtu and play football that I dont</p>
        </div>
    )
}
export default Card