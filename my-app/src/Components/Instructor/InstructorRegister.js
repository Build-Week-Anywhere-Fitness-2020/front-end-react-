import React, { useState, useEffect } from 'react'
import * as yup from 'yup';


const InstructorRegister = () => {

    // ----------- INSTRUCTOR STATE -------------

    const [instructor, setInstructor] = useState({
        email: "",
        username: "",
        password: "",
        role: ""
    })

    {/* ------------- BUTTON DISABLED? -------------------- */}

    const [buttonDisabled, setButtonDisabled] = useState(true)

    {/* ------------- INPUT CHANGE FUNCTION -------------------- */}

    const inputChange = e => {

        const newUserData = {
            ...instructor,
            [e.target.name]: e.target.value
        }

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
        formSchema.isValid(instructor).then(valid => {
            console.log('valid?', valid)
            setButtonDisabled(!valid);
        })

     }, [instructor]);


    return (
        <div>
        <div>This is the Registration Form</div>

        {/* ------------- INSTRUCTOR FORM -------------------- */}
        <form onSubmit="">

        {/* -------------- E-MAIL -------------- */}

             <label htmlFor="email">
                <input 
                id="email"
                type="email"
                name="email"
                placeholder="E-mail here please."
                value={instructor.email}
                onChange={inputChange}
                />
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
            </label>

             {/* --------------USERNAME -------------- */}

             <label htmlFor="password">password:
                <input
                id="password"
                type="password"
                name="password"
                placeholder="Password here, please."
                value={instructor.password}
                onChange={inputChange}
                />
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

              </label>

               {/* -------------- SUBMIT BUTTON -------------- */}

               <button disabled={buttonDisabled}>Ready to register?</button>

        </form>
        </div>
    )
}

export default InstructorRegister