import React, { useEffect, useState } from "react";

function ModalShow(props) {

    const [info, setInfo] = useState('')

    useEffect(() => {
       setInfo(props.infoData)
    }, [props])
    

    console.log(props);

    return (
        <div className="modal_add" onClick={(e) => props.removeModal(e)}>
            <section>
                <h2>first name : {info.firstName}</h2>
                <h2>last name : {info.lastName}</h2>
                <h2>address : {info.address}</h2>
                {/* asdfasdf */}
            </section>
        </div>
    );
}

export default ModalShow;
