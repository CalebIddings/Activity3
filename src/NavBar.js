/* Caleb Iddings
ciddings@iastate.edu
11/3/2024 */
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, InputGroup, FormControl } from "react-bootstrap";
import Logo from "./09_3_22_logo.png";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";

const NavBar = ({
  catalog,
  setCatalog,
  filteredCatalog,
  setFilteredCatalog,
  categories,
}) => {
  const [searchTerm, setSearchTerm] = useState("");

  const navigate = useNavigate();

  const filterCategory = (tag) => {
    const results = catalog.filter((eachProduct) => {
      return eachProduct.category === tag;
    });
    setFilteredCatalog(results);
  };

  const clearSearch = () => {
    setSearchTerm(""); // Clear the input
    setFilteredCatalog(catalog); // Reset to full catalog
    };

    const handleChange = (e) => {
        setSearchTerm(e.target.value);
        const results = catalog.filter(eachProduct => {
        if (e.target.value === "") return catalog;
        return eachProduct.title.toLowerCase().includes(e.target.value.toLowerCase())
        });
        setFilteredCatalog(results);
        }
  return (
    <div
      className="d-flex flex-row bg-dark text-white p-3 w-100"
    >
      <div className="text-center mb-4">
        <img src={Logo} alt="Logo" className="img-fluid p-3"
        style={{width:"100px"}}/>
      </div>
      <div className="mb-4">
        <p>Categories :</p>
        <div className="d-flex flex-wrap">
          <Button
            variant="warning"
            className="mb-2 me-2 btn-sm"
            onClick={() => {
              filterCategory("electronics");
            }}
          >
            electronics
          </Button>
          <Button
            variant="warning"
            className="mb-2 me-2 btn-sm"
            onClick={() => {
              filterCategory("jewelery");
            }}
          >
            jewelery
          </Button>
          <Button
            variant="warning"
            className="mb-2 me-2 btn-sm"
            onClick={() => {
              filterCategory("men's clothing");
            }}
          >
            men's clothing
          </Button>
          <Button
            variant="warning"
            className="mb-2 me-2 btn-sm"
            onClick={() => {
              filterCategory("women's clothing");
            }}
          >
            women's clothing
          </Button>
        </div>
      </div>

      <div className="mb-4">
        <InputGroup>
          <FormControl
            placeholder="Search products..."
            aria-label="Search products"
            value={searchTerm}
            onChange={handleChange}
          />
          <Button variant="outline-secondary" onClick={clearSearch}>
            <i className="bi bi-x"></i> {/* Bootstrap icon for clear */}
          </Button>
        </InputGroup>
      </div>

      <Button veriant="warning" className="mb-2 me-2" onClick={() => navigate("/info")}>Checkout</Button>

    </div>
  );
};
export default NavBar;
