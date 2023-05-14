import Footer from "../../layouts/Footer/footer"
import Header from "../../layouts/Header/header"

export default () => {
    return (
        <>
          <Header/>
        <div className="section">
        <div className="container">
                    <div className="row">
                        <div className="col-md-5">
                            <div className="billing-details">
                            <div className="section-title">
                                    <h3 className="title">Update products </h3>
                                </div>
                                <div className="form-group">
                                    <input className="input" type="text" name="name" placeholder="Name" />
                                </div>
                                <div className="form-group">
                                    <input className="input" type="text" name="description" placeholder="Description" />
                                </div>
                             
                                 <div className="form-group">
                                    <input className="input" type="text" name="price" placeholder="Price" />
                                </div>
                                 <div className="form-group">
                                    <input className="input" type="text" name="category" placeholder="Category" />
                                </div>
                                   <div className="form-group">
                                    <input className="input" type="file" name="email" placeholder="Image" />
                                </div>
                              
                                <button class="primary-btn"> Update </button><br/><br/>


                            </div>
                        </div>
                     
                        </div>
                    </div>
        </div>
        <Footer/>
        </>
    )
}