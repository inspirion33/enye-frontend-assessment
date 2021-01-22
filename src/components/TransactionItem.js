import React, { useState } from "react";

const TransactionItem = ({ transaction }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggledropdown = () => {
        setIsOpen((on) => !on);
    };

    const classes = isOpen ? "active" : "hide"

	return (
		<div key={transaction.Email} className="listrow">
			<div className="transaction-tab detail">
				<div className="td-fullname">
					{transaction.FirstName} {transaction.LastName}
				</div>
				<div className="td-email">{transaction.Email}</div>
				<div className="td-gender">{transaction.Gender}</div>
				<div className="td-phone">{transaction.PhoneNumber}</div>
				<div className="td-domain">{transaction.DomainName}</div>
				<div className="td-lastlogin">{transaction.LastLogin}</div>
				<div id="drop" onClick={() => toggledropdown()}>
					##
				</div>
			</div>
			<div id="showOrHide" className={classes}>
				<h1>more details</h1>
			</div>
		</div>
	);
};

export default TransactionItem;
