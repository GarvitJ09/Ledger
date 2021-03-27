import './style.css';
import Logo from '../../Assets/books-icon.png';
import Card from '../../Container/Card';
 

const HomePage=(props)=>{
    return(
        <div className="homepage">
            <nav className="px-4">
            <input type="checkbox" id="check"></input>
            <label for="check" className="check-btn">
                <i className="fa fa-bars"></i>
            </label>
            <label><img src={Logo} alt="logo" className="mr-2" />Dragon</label>
            <ul>
            <li><button className="btn btn-light"><i className="fa fa-sign-out mr-2"></i>Logout</button></li>
            <li><button className="btn btn-light"><i className="fa fa-plus mr-2"></i>Create New Account</button></li>
            </ul>
            </nav>
            <main className="container"> 
            <h5>Devgenics<h6 className="ml-3">devgenics@gmail.com</h6></h5> <hr />
            Clients
            <div className="card-padding"> 
            <Card name="Ankit" phone="1234567890" ></Card>
            <Card name="Ankit" phone="1234567890" ></Card>
            <Card name="Ankit" phone="1234567890" ></Card>
            </div>
            </main>
            <button className="add-new-button  btn btn-primary "><i className="fa fa-plus mr-2"></i>Add New Client</button>
        </div>
    );
}
export default HomePage;