import React, { useState, useEffect } from 'react'
import * as yup from 'yup';
import axios from 'axios'


const InstructorRegister = () => {

    // ----------- INSTRUCTOR STATE -------------

    const [instructor, setInstructor] = useState({
        email: "",
        username: "",
        password: "",
        role: ""
    })

    // ----------- DUMMY POST STATE -------------

    const [post, setPost] = useState([]);

    {/* ------------- BUTTON DISABLED? -------------------- */}

    const [buttonDisabled, setButtonDisabled] = useState(true)

      {/* ------------- ERRORS STATE -------------------- */}

      const [errors, setErrors] = useState({
          email: "",
          username: "",
          password: "",
          role: ""
      });

    {/* ------------- INPUT CHANGE FUNCTION -------------------- */}

    const inputChange = e => {
        e.persist();
        const newUserData = {
            ...instructor,
            [e.target.name]: e.target.value
        };

        validateChange(e);
        setInstructor(newUserData);
    }

    {/* ------------- YUP SCHEMA -------------------- */}

    const formSchema = yup.object().shape({
        email: yup
        .string()
        .email("Must be a valid e-mail address.")
        .required("Must include email address."),
        username: yup.string().required("Username is required."),
        password: yup.string().min(6).max(10).required("Must have a valid password between 5 and 10 characters long."),
        role: yup
        .string()
        .oneOf(["Role 1", "Role 2"])

    });

     {/* ------------- USEEFFECT HOOK FOR BUTTON -------------------- */}

     useEffect(() => {
        console.log('form state change')
        formSchema.isValid(instructor).then(valid => {
            console.log('valid?', valid)
            setButtonDisabled(!valid);
        });

     }, [instructor]);



{/* ------------- VALIDATE CHANGE FUNCTION -------------------- */}

const validateChange = (e) => {
    yup.reach(formSchema, e.target.name).validate(e.target.value)
    .then(valid => {
        setErrors({
            ...errors, 
            [e.target.name]: ""
        })
    })
    .catch(err => {
        setErrors({
            ...errors,
            [e.target.name]: err.errors[0]
        })
    })
}

{/* ------------- FORM SUBMIT FUNCTION -------------------- */}
{/* ------------- USING DUMMY POST REQUEST -------------------- */}

const registrationSubmit = e => {
    e.preventDefault();
    axios
    .post("https://reqres.in/api/users", instructor)
    .then(res => {
        setPost(res.data);
        console.log("success!", post);
        // reset form if succesful
        setInstructor({
            email: "",
            username: "",
            password: "",
            role: ""
        })
    })
    .catch(err => console.log(err.response));
}

    return (
        <div>
        <div>Instructor Registration</div>

        {/* ------------- INSTRUCTOR FORM -------------------- */}
        <form onSubmit={registrationSubmit}>

        {/* -------------- E-MAIL -------------- */}

             <label htmlFor="email">e-mail:
                <input 
                id="email"
                type="email"
                name="email"
                placeholder="E-mail here please."
                value={instructor.email}
                onChange={inputChange}
                />
                {errors.email.length > 0 ? <p style={{color: 'red'}}>{errors.email}</p> : null}
                </label>
            
            
            {/* --------------USERNAME -------------- */}
            
            <label htmlFor="username">username:
            <input
            id="username"
            type="text"
            name="username"
            placeholder="Please enter username here."
            value={instructor.username}
            onChange={inputChange}
            />
            {errors.username.length > 0 ? <p style={{color: 'red'}}>{errors.username}</p> : null}
            </label>

             {/* -------------- PASSWORD -------------- */}

             <label htmlFor="password">password:
                <input
                id="password"
                type="password"
                name="password"
                placeholder="Password here, please."
                value={instructor.password}
                onChange={inputChange}
                />
                {errors.password.length > 0 ? <p style={{color: 'red'}}>{errors.password}</p> : null}
             </label>

              {/* -------------- ROLE -------------- */}
              <label htmlFor="role">
                Please select your role.
                <select 
                id="role" 
                name="role"
                value={instructor.role}
                onChange={inputChange}>
                    <option>---Please choose an option--</option>
                    <option>Role 1</option>
                    <option>Role 2</option>
                </select>
                {errors.role.length > 0 ? <p style={{color: 'red'}}>{errors.role}</p> : null}
              </label>

               {/* -------------- SUBMIT BUTTON -------------- */}
               {/* <pre>{JSON.stringify(post, null, 2)}</pre> */}
               <button disabled={buttonDisabled}>Ready to register?</button>

        </form>
        </div>
    )
}

export default InstructorRegister