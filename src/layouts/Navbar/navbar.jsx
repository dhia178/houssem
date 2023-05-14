import { Link } from "react-router-dom"

export default () => {
    return (
        <>

            <nav id="navigation">

                <div className="container">

                    <div id="responsive-nav">

                        <ul className="main-nav nav navbar-nav">
                            <li className="active"><Link to='/'>Home</Link></li>
                            <li><Link to='/store' >Store</Link></li>
                            <li><Link to='/contact'>Contact</Link></li>
                           <li className="dropdown">
                                    <a className="dropdown-toggle" data-toggle="dropdown"  aria-haspopup="true" aria-expanded="false">Dashborad</a>
                                    <ul className="dropdown-menu"> 
                                    <li><Link to='/addcategories'>Add Categoy</Link></li>
                                    <li><Link to='/listcategory'>List of Categories</Link></li>

                                    
                                    <li><Link to='/addproducts'>Add Product</Link></li>

                                    <li><Link to='/listproduct'>list of Products</Link></li>
                                    <li><Link to='/listcustomers'>List of Customers</Link></li>
                                    <li><Link to=''>Orders</Link></li>
                                    </ul>
                                </li> 
                          
                       
                 






                        </ul>

                    </div>

                </div>

            </nav>

        </>
    )
}