import './style.css';
const AddCustomer=(props)=>{
    return(
        <div className="AddCustomer container" >
        <div className="pt-3" style={{fontWeight:"bold"}}> 
        <button type="button" style={{border:"none",background:"none"}} className="fa fa-arrow-left mr-4"></button>Add Client</div>
        <hr/>
            <form>
                    <div className="pb-2"> 
                    Client Name :
                    <input type="text" name="name" id="name" required ></input>
                    </div>
                    <div className="pb-2"> 
                    Email :
                    <input type="email" name="email" id="email"></input>
                    </div>
                    <div className="pb-2">
                    Phone Number :
                    <input type="text" name="Phone" id="Phone"></input>
                    </div>
                    <div className="pb-2">
                    Add image :
                    <input type="file" accept="image/*" capture="camera"  style={{border:"none"}} />
                    </div>

                <button className="save btn btn-primary text-center mt-4" >Save</button>
            </form>
        </div>
    );

}
export default AddCustomer; 