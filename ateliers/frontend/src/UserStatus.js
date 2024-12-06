import React from 'react';



function UserStatus() {

    const age = 15;



    return (

        <div>

            {age < 18 ? <p>Mineur</p> : <p>Majeur</p>}

        </div>

    );

}



export default UserStatus;