import {Link} from "react-router-dom"

let Homepage = () => {
  return (
    <>
      <div className="card text-center homepage-content">
        <div className="card-header">
          <h1>Invoice Generator</h1>
          </div>
        <div className="card-body">
          <h5 className="card-title">Generate, Customize, and Send Invoices with Ease</h5> 
          <Link to="/create-invoice" className="btn btn-primary Button">
            Generate Invoice
          </Link>
        </div> 
      </div>
    </>
  );
};

export default Homepage;
