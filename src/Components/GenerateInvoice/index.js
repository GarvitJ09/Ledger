import './style.css';

const GenerateInvoice=(props)=>{
    return(
        <div className="container invoice">
            <header className="header my-3">
            <div> 
                <h5>Devgenics<h6 className="ml-3">devgenics@gmail.com</h6></h5>
            </div>
            <div>
                <button className="bn btn-primary"><h6>Generate Invoice</h6></button>
            </div>
            </header>
            <header className="header mt-3">
            <div> 
                Net Balance
            </div>
            <div>
                <i className="fa fa-inr">40<h5>You'll get</h5></i>
            </div>
            </header>
        </div>
    );
}
export default GenerateInvoice;