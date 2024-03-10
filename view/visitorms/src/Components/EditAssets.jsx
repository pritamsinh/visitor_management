import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditAssets = () => {
  const { id } = useParams();
  const [asset, setAsset] = useState({
    name: "",
    status: "",
    category: "",
    remarks: "",
  });
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:3000/auth/category")
      .then((result) => {
        if (result.data.Status) {
          setCategories(result.data.Result);
        } else {
          alert(result.data.Error);
        }
      })
      .catch((err) => console.log(err));

    axios
      .get("http://localhost:3000/auth/asset/" + id)
      .then((result) => {
        setAsset({
          ...asset,
          name: result.data.Result[0].name,
          status: result.data.Result[0].status,
          category: result.data.Result[0].category,
          remarks: result.data.Result[0].remarks,
        });
      })
      .catch((err) => console.log(err));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put("http://localhost:3000/auth/edit_asset/" + id, asset)
      .then((result) => {
        if (result.data.Status) {
          navigate("/dashboard/assets");
        } else {
          alert(result.data.Error);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="d-flex justify-content-center align-items-center mt-3">
      <div className="p-3 rounded w-50 border">
        <h3 className="text-center">Edit Asset</h3>
        <form className="row g-1" onSubmit={handleSubmit}>
          <div className="col-12">
            <label htmlFor="inputName" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control rounded-0"
              id="inputName"
              placeholder="Enter Name"
              value={asset.name}
              onChange={(e) =>
                setAsset({ ...asset, name: e.target.value })
              }
            />
          </div>
          <div className="col-12">
            <label htmlFor="inputStatus" className="form-label">
              Status
            </label>
            <input
              type="text"
              className="form-control rounded-0"
              id="inputStatus"
              placeholder="Enter Status"
              value={asset.status}
              onChange={(e) =>
                setAsset({ ...asset, status: e.target.value })
              }
            />
          </div>
          <div className="col-12">
            <label htmlFor="category" className="form-label">
              Category
            </label>
            <select
              name="category"
              id="category"
              className="form-select"
              value={asset.category}
              onChange={(e) =>
                setAsset({ ...asset, category: e.target.value })
              }
            >
              <option value="">Select Category</option>
              {categories.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.name}
                </option>
              ))}
            </select>
          </div>
          <div className="col-12">
            <label htmlFor="inputRemarks" className="form-label">
              Remarks
            </label>
            <input
              type="text"
              className="form-control rounded-0"
              id="inputRemarks"
              placeholder="Enter Remarks"
              value={asset.remarks}
              onChange={(e) =>
                setAsset({ ...asset, remarks: e.target.value })
              }
            />
          </div>
          <div className="col-12">
            <button type="submit" className="btn btn-primary w-100">
              Edit Asset
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditAssets;
