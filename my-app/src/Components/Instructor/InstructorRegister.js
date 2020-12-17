import React, { useState, useEffect } from 'react'


const InstructorRegister = () => {
    const [instructor, setInstructor] = useState({
        username: "",
        password: "",
        email: "",
        role: {
            role1: false,
            role2: false
        }
    })

    return (

        <div>This is the Registration Form</div>
    )
}

export default InstructorRegister