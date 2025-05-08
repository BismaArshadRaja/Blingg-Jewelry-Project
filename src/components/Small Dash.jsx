import React, { useState } from "react";

function AccountDropdown({ user }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <button className="account-button" onClick={() => setIsOpen(!isOpen)}>
                My Account
            </button>

            {isOpen && (
                <div className="flex flex-col w-98 h-98 bg-white rounded-lg shadow-lg p-4 gap-4">
                    <img
                        className="rounded-full w-24"
                        src="https://demo.storeking.xyz/images/required/profile.png"
                        alt="bhootiya avatar"
                    />
                    <span>
                        <h6>John Doe +8801254875855</h6>
                    </span>
                    <ul>
                        <li>
                            <i className="fa-solid fa-table-cells-large"></i>
                            <span>
                                <p>Dashboard</p>
                            </span>
                        </li>
                        <li>
                            <i className="fa-solid fa-bag-shopping"></i>
                            <span>
                                <p>Order History</p>
                            </span>
                        </li>
                        <li>
                            <i className="fa-solid fa-user"></i>
                            <span>
                                <p>Account Info</p>
                            </span>
                        </li>
                        <li>
                            <i className="fa-solid fa-key"></i>
                            <span>
                                <p>Change Password</p>
                            </span>
                        </li>
                        <li>
                            <i className="fa-solid fa-location-dot"></i>
                            <span>
                                <p>Address</p>
                            </span>
                        </li>
                        <li>
                            <i className="fa-solid fa-right-from-bracket"></i>
                            <span>
                                <p>Logout</p>
                            </span>
                        </li>
                    </ul>
                </div>
            )}
        </>
    );
}

export default AccountDropdown;