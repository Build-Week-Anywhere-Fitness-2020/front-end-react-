
import React, { useState, useEffect } from 'react'


const InstructorLogin = () => {
    const [user, setUser] = useState({
        username: "",
        password: "",
        role: {
            role1: false,
            role2: false
        }
    })

    return (

        <div>This is the Login Form</div>
    )
}

export default InstructorLogin