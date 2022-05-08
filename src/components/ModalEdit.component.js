import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { listAction } from "../redux/action/listAction";

function ModalEdit(props) {
    const [id, setId] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [address, setAddress] = useState("");

    const params = useParams()

    const dispatch = useDispatch()

    const list = useSelector((state) => state.LIST.list);

    useEffect(() => {
        setId(props.editInfo.firstName);
        setFirstName(props.editInfo.firstName);
        setLastName(props.editInfo.lastName);
        setAddress(props.editInfo.address);
        console.log(props);
    }, [props]);

    const addNewData = (e) => {
        e.preventDefault();
        const data = {
            firstName: firstName,
            lastName: lastName,
            address: address,
            star : params.star ? true : false
        };

        const arr = [];
        list.forEach((item) => {
            if (item.firstName !== id) {
                arr.push(item);
            } else {
                arr.push(data);
            }
        });

        localStorage.setItem('list' , JSON.stringify(arr))
        dispatch(listAction(arr))
        props.removeModalEdit2(false)
    };

    console.log(params.star);

    return (
        <div className="modal_add" onClick={(e) => props.removeModal(e)}>
            <form>
                <input
                    type="text"
                    // onChange={({ target }) => props.stateFirst(target.value)}
                    placeholder="enter first name"
                    onChange={({ target }) => setFirstName(target.value)}
                    value={firstName}
                />
                <input
                    type="text"
                    // onChange={({ target }) => props.stateLast(target.value)}
                    placeholder="enter last name"
                    onChange={({ target }) => setLastName(target.value)}
                    value={lastName}
                />
                <input
                    type="text"
                    // onChange={({ target }) => props.stateAddress(target.value)}
                    placeholder="enter address"
                    onChange={({ target }) => setAddress(target.value)}
                    value={address}
                />

                <button className="submit" type="submit" onClick={addNewData}>
                    confirm
                </button>
            </form>
        </div>
    );
}

export default ModalEdit;
