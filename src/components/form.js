import React, { useState } from "react";
import classes from "./form.css";



        function Form() {
            const [inputs, setInputs] = useState({});
          
            const handleChange = (event) => {
              const name = event.target.name;
              const value = event.target.value;
              setInputs(values => ({...values, [name]: value}))
            }
          
            const handleSubmit = (event) => {
              event.preventDefault();
              console.log(inputs);
            }
          
            return (
                <div className="contain">
              <form onSubmit={handleSubmit}>
                <label><p>Artist:</p> 
                <input 
                  type="text" 
                  name="artist" 
                  value={inputs.artist || ""} 
                  onChange={handleChange}
                />
                </label>
                <br/>
                <label>Album Title: 
                  <input 
                    type="text" 
                    name="albumTitle" 
                    value={inputs.albumTitle || ""} 
                    onChange={handleChange}
                  />
                  </label>
                  <br/>
                <label>Signed?: 
                  <input 
                    type="text" 
                    name="signed" 
                    value={inputs.signed || ""} 
                    onChange={handleChange}
                  />
                  </label>
                  <br/>
                <label>Version: 
                  <input 
                    type="text" 
                    name="version" 
                    value={inputs.version || ""} 
                    onChange={handleChange}
                  />
                  </label>
                  <br/>
                  <input type="submit" />
              </form>
              </div>
            )
          };
    


export default Form;