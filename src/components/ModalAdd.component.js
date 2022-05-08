import React from "react";

function ModalAdd(props) {
    return (
        <div className="modal_add" onClick={(e) => props.removeModal(e)}>
            <form>
                <input
                    type="text"
                    onChange={({ target }) => props.stateFirst(target.value)}
                    placeholder="enter first name"
                />
                <input
                    type="text"
                    onChange={({ target }) => props.stateLast(target.value)}
                    placeholder="enter last name"
                />
                <input
                    type="text"
                    onChange={({ target }) => props.stateAddress(target.value)}
                    placeholder="enter address"
                />

                <button
                    className="submit"
                    type="submit"
                    onClick={(e) => props.removeWithSubmit(e)}
                >
                    confirm
                </button>
            </form>
        </div>
    );
}

export default ModalAdd;
