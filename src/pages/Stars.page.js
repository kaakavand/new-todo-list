import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ModalAdd from "../components/ModalAdd.component";
import Header from "../layout/Header";
import { listAction } from "../redux/action/listAction";
import { FaEye, FaStar, FaRegEdit, FaTrash, FaRegStar } from "react-icons/fa";
import ModalShow from "../components/ModalShow.component";
import ModalEdit from "../components/ModalEdit.component";

function Star(props) {
    const [showModalAdd, setShowModalAdd] = useState(false);
    const [showData, setShowData] = useState(false);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [address, setAddress] = useState("");
    const [info, setInfo] = useState({});
    const list = useSelector((state) =>
        state.LIST.list.filter((item) => item.star === true)
    );
    const newList = useSelector((state) => state.LIST.list);
    const show = useSelector((state) => state.DATA.show);
    const [showEdit, setShowEdit] = useState(false);
    const [newDataEdited, setNewDataEdited] = useState({});
    const [edit, setEdit] = useState({});

    const dispatch = useDispatch();

    // useEffect(() => {
    //     localStorage.setItem("list", JSON.stringify(newList));
    // }, [newList]);

    const removeModal = (e) => {
        e.preventDefault();
        if (
            e.target.className === "modal_add" ||
            e.target.className === "submit"
        ) {
            setShowModalAdd(false);
        }
    };

    const submit = (e) => {
        e.preventDefault();

        const data = {
            firstName: firstName,
            lastName: lastName,
            address: address,
            star: false,
        };

        const allList = list.concat(data);
        localStorage.setItem("list", JSON.stringify(allList));
        dispatch(listAction(allList));

        setShowModalAdd(false);
    };

    const removeData = (e) => {
        if (e.target.className === "modal_add") {
            setShowData(false);
        }
    };

    const showDataModal = (e) => {
        let data = {
            firstName: e.currentTarget.parentElement.parentElement
                .querySelector(".info_item")
                .querySelector("h2").innerText,
            lastName: e.currentTarget.parentElement.parentElement
                .querySelector(".info_item")
                .querySelector("h3").innerText,
            address: e.currentTarget.parentElement.parentElement
                .querySelector(".info_item")
                .querySelector("h4").innerText,
        };

        setInfo(data);
        setShowData(true);
        // console.log(show);
    };

    const closeToSpecial = (e) => {
        const name = e.currentTarget.parentElement.parentElement
            .querySelector(".info_item")
            .querySelector("h2").innerText;

        const arr = [];
        newList.forEach((item) => {
            if (item.firstName !== name) {
                arr.push(item);
            } else {
                let newItem = item;
                newItem.star = false;
                arr.push(item);
            }
        });

        console.log(arr);
        localStorage.setItem("list", JSON.stringify(arr));
        dispatch(listAction(arr));

    };

    const addToTrash = (e) => {
        const name = e.currentTarget.parentElement.parentElement
            .querySelector(".info_item")
            .querySelector("h2").innerText;

        const arr = newList.filter((item) => item.firstName !== name);
        localStorage.setItem("list", JSON.stringify(arr));
        dispatch(listAction(arr));

    };

    const removeModalEdit = (e) => {
        if (e.target.className === "modal_add") {
            setShowEdit(false);
        }
    };

    const editData = (e) => {
        let data = {
            firstName: e.currentTarget.parentElement.parentElement
                .querySelector(".info_item")
                .querySelector("h2").innerText,
            lastName: e.currentTarget.parentElement.parentElement
                .querySelector(".info_item")
                .querySelector("h3").innerText,
            address: e.currentTarget.parentElement.parentElement
                .querySelector(".info_item")
                .querySelector("h4").innerText,
        };

        setEdit(data);

        setShowEdit(true);
    };

    return (
        <>
            <Header setModal={(value) => setShowModalAdd(value)}>
                <div className="main_list">
                    {list.map((item) => (
                        <div className="item">
                            <div className="info_item">
                                <h2>{item.firstName}</h2>
                                <h3>{item.lastName}</h3>
                                <h4>{item.address}</h4>
                            </div>
                            <div className="button_item">
                                <FaEye
                                    style={{
                                        color: "#f5b81d",
                                        margin: "5px 0px",
                                        cursor: "pointer",
                                    }}
                                    onClick={showDataModal}
                                />
                                <FaStar
                                    style={{
                                        color: "#f5b81d",
                                        margin: "5px 0px",
                                        cursor: "pointer",
                                    }}
                                    onClick={closeToSpecial}
                                />

                                <FaRegEdit
                                    style={{
                                        color: "#f5b81d",
                                        margin: "5px 0px",
                                        cursor: "pointer",
                                    }}
                                    onClick={editData}
                                />
                                <FaTrash
                                    style={{
                                        color: "#f5b81d",
                                        margin: "5px 0px",
                                        cursor: "pointer",
                                    }}
                                    onClick={addToTrash}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </Header>
            {showModalAdd ? (
                <ModalAdd
                    removeModal={removeModal}
                    removeWithSubmit={submit}
                    stateFirst={(value) => setFirstName(value)}
                    stateLast={(value) => setLastName(value)}
                    stateAddress={(value) => setAddress(value)}
                />
            ) : (
                true
            )}

            {showData ? (
                <ModalShow removeModal={removeData} infoData={info} />
            ) : (
                true
            )}

            {showEdit ? (
                <ModalEdit
                    removeModal={removeModalEdit}
                    editInfo={edit}
                    removeModalEdit2={() => setShowEdit(false)}
                />
            ) : (
                true
            )}
        </>
    );
}

export default Star;
