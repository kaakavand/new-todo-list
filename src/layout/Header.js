import React from "react";
import { FaHome, FaStar, FaEye } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";

function Header(props) {
    const navigate = useNavigate();
    const params = useParams();

    const addState = () => {
        props.setModal(true);
    };

    return (
        <>
            <div className="container">
                <nav>
                    <ul>
                        <li>
                            <a
                                href="#"
                                onClick={(e) => {
                                    e.preventDefault();
                                    navigate("/");
                                }}
                                className={params.star ? false : "active"}
                            >
                                <FaHome /> Home
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                onClick={(e) => {
                                    e.preventDefault();
                                    navigate("/star");
                                }}
                                className={params.star ? "active" : false}
                            >
                                <FaStar /> Starts
                            </a>
                        </li>
                    </ul>
                    <button onClick={addState}>+</button>
                </nav>
                <div className="main_content">{props.children}</div>
            </div>
            <a className="specialLinkGitHub" href="https://github.com/kaakavand" target="_blank">kaakavand</a>
        </>
    );
}

export default Header;
