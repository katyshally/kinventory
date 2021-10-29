import React from 'react';
import { render } from "react-dom";
import { useForm } from "react-cool-form";

import "./form.css";



        function Form() {
            
            const { form } = useForm({
                defaultValues: { artist: "", album: "", version: "" , signed: ""},
                onSubmit: (values) => alert(JSON.stringify(values, undefined, 2)),
                onError: (errors) => console.log("onError: ", errors)
              });
            
              return (
                <form ref={form} noValidate>
                  <input name="artist" placeholder="Aritst" required />
                  <input name="album" placeholder="Album Title" required />
                  <input name="version" placeholder="Version"/>
                  <input
                    name="signed"
                    placeholder="Signed?"
                    required
                    minLength={2}
                  />
                  <input type="submit" />
                </form>
              );
    
          };
    


export default Form;