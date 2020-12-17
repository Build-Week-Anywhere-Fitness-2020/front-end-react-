import React, { useState, useEffect } from 'react'


const InstructorRegister = () => {

    // ----------- INSTRUCTOR STATE -------------

    const [instructor, setInstructor] = useState({
        email: "",
        username: "",
        password: "",
        role: {
            role1: false,
            role2: false
        }
    })

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
                />
                </label>
            
            
            {/* --------------USERNAME -------------- */}
            
            <label htmlFor="username">username:
            <input
            id="username"
            type="text"
            name="username"
            placeholder="Please enter username here."
            />
            </label>

             {/* --------------USERNAME -------------- */}

             <label htmlFor="password">password:
                <input
                id="password"
                type="password"
                name="password"
                placeholder="Password here, please."
                />
             </label>

              {/* -------------- ROLE -------------- */}
              <label htmlFor="role">
                Please select your role.
                <select id="role" name="role">
                    <option>---Please choose an option--</option>
                    <option>Role 1</option>
                    <option>Role 2</option>
                </select>

              </label>

               {/* -------------- SUBMIT BUTTON -------------- */}

               <button type="submit">Ready to register?</button>

        </form>
        </div>
    )
}

export default InstructorRegister