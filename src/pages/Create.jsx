import { useState } from "react";
import axios from "axios";


const Create = () => {

  const [status, setStatus] = useState({
    isFetching: false,
    success: false,
    error: false,
  });

  const [inputPrompt, setInputPrompt] = useState({
    prompt: "",
    size: "small",
  });

  const [image, setImage] = useState("");

  const handleCreate = async () => {
    try {
      setStatus({ ...status, isFetching: true });
      const res = await axios.post('https://canvai-api.onrender.com/create', inputPrompt);
      setImage(res.data.data);
      setStatus({ ...status, isFetching: false, success: true, error: false });
    } catch (error) {
      console.log(error);
      setStatus({ ...status, isFetching: false, success: false, error: true });
    }
  };

  return (
    <div className="create--container">
      <div className="input--prompt">
        <div className="input--fields">
          <input
            onChange={(e) =>
              setInputPrompt({ ...inputPrompt, prompt: e.target.value })
            }
            type="text"
            className="input--field"
            placeholder="Enter your creative thought"
          />
          <select
            onChange={(e) =>
              setInputPrompt({ ...inputPrompt, size: e.target.value })
            }
            name="size"
            id="size"
          >
            <option disabled value="select size">
              Select size
            </option>
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
          </select>
        </div>
        <button onClick={handleCreate} className="btn btn--primary">
          Create
        </button>
      </div>
      <div className="output--container">
        {status.isFetching && <div className="loading--spinner"></div>}
        {status.error && <label>Something went wrong</label>}
        {status.success && <img src={image} alt="" />}
      </div>
    </div>
  );
};

export default Create;
