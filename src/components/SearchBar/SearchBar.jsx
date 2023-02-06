import React, { Fragment } from "react";
import classes from "./SearchBar.module.css";

const SearchBar = ({ filterCar, setFilterCar, handleSubmit }) => {
  const handlingInput = (e) => {
    setFilterCar({ carName: e.target.value });
  };

  const handlingCategory = (e) => {
    setFilterCar({ ...filterCar, carCategory: e.target.value });
  };

  const handlingPrice = (e) => {
    setFilterCar({ ...filterCar, carPrice: e.target.value });
  };

  return (
    <Fragment>
      <section id="searchBar" className={`searchBar ${classes.main}`}>
        <div className="container mt-1 d-flex justify-content-center">
          <div className={`card p-4 ${classes.cardBar}`}>
            <div className="row">
              <div className="col-lg-3 d-flex flex-column justify-content-between">
                <label
                  className={`fw-bold ${classes.labelCar}`}
                  htmlFor="carName">
                  Nama Mobil
                </label>
                <input
                  onChange={handlingInput}
                  className={`p-1 ${classes.sizeTag}`}
                  type="text"
                  id="carName"
                  name="carName"
                  placeholder="Ketik nama/type mobil"
                />
              </div>
              <div className="col-lg-3 d-flex flex-column justify-content-between">
                <label
                  className={`fw-bold ${classes.label}`}
                  htmlFor="category">
                  Kategori
                </label>
                <select
                  onChange={handlingCategory}
                  className={classes.sizeTag}
                  id="category"
                  name="category">
                  <option value="" hidden>
                    {" "}
                    Masukkan Kapasitas Mobil
                  </option>
                  <option value="2 - 4 orang"> 2 - 4 orang</option>
                  <option value="4 - 6 orang"> 4 - 6 orang</option>
                  <option value="6 - 8 orang"> 6 - 8 orang</option>
                </select>
              </div>
              <div className="col-lg-3 d-flex flex-column justify-content-between">
                <label className={`fw-bold ${classes.label}`} htmlFor="price">
                  Harga
                </label>
                <select
                  onChange={handlingPrice}
                  className={classes.sizeTag}
                  id="price"
                  name="price">
                  <option value="" hidden>
                    Masukkan Harga Sewa /Hari
                  </option>
                  <option value="400000"> &#60; Rp. 400.000</option>
                  <option value="400000-600000">
                    Rp. 400.000 - Rp.600.000
                  </option>
                  <option value="600000"> &#62; Rp. 600.000 </option>
                </select>
              </div>

              <div className="col-lg-2 d-flex flex-column justify-content-between">
                <label className={`fw-bold ${classes.label}`} htmlFor="status">
                  Status
                </label>
                <select
                  className={`p-1 ${classes.sizeTag}`}
                  name="status"
                  id="status">
                  {/* <option value="disewa">Disewa</option> */}
                  <option value="sedia">Sedia</option>
                </select>
              </div>

              <div className="col-lg-1 d-flex align-items-end mt-3">
                <button
                  onClick={handleSubmit}
                  className={`p-1 ${classes.btnSearch}`}>
                  Cari Mobil
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default SearchBar;
