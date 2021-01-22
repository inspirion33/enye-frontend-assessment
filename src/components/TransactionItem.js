import React, { useState } from "react";
import './TransactionItem.css';
import { FaChevronCircleDown, FaChevronCircleUp } from 'react-icons/fa';

const TransactionItem = ({ transaction }) => {
	const [isOpen, setIsOpen] = useState(false);

	const toggledropdown = () => {
		setIsOpen((on) => !on);
	};

	const classes = isOpen ? "active" : "hide";

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
					<FaChevronCircleDown color='lightblue' />
				</div>
			</div>
			<div id="showOrHide" className={classes}>
				<div className="transaction-details">
					<h4>TRANSACTION DETAILS</h4>
					<div className="details-item">
						<div className="item-holder">
							<span className="item-heading">Payment Method</span>
							<p className="item-vale">{transaction.PaymentMethod}</p>
						</div>
						<div className="item-holder">
							<span className="item-heading">Card Number</span>
							<p className="item-vale">{transaction.CreditCardNumber}</p>
						</div>

						<div className="item-holder">
							<span className="item-heading">Card Type</span>
							<p className="item-vale">{transaction.CreditCardType}</p>
						</div>
					</div>
				</div>
				
				<hr className="hr-line"></hr>

				<div className="transaction-details">
					<h4>USER PROFILE DETAILS</h4>
					<div className="details-item">
						<div className="item-holder">
							<span className="item-heading">First Name</span>
							<p className="item-vale">{transaction.FirstName}</p>
						</div>
						<div className="item-holder">
							<span className="item-heading">Last Name</span>
							<p className="item-vale">{transaction.LastName}</p>
						</div>

						<div className="item-holder">
							<span className="item-heading">User Name</span>
							<p className="item-vale">{transaction.UserName}</p>
						</div>

						<div className="item-holder">
							<span className="item-heading">Domain Name</span>
							<p className="item-vale">{transaction.DomainName}</p>
						</div>

						<div className="item-holder">
							<span className="item-heading">User Name</span>
							<p className="item-vale">{transaction.UserName}</p>
						</div>
					</div>
				</div>

				<hr className="hr-line"></hr>

				<div className="transaction-details">
					<h4>ACTIVITIES</h4>
					<div className="details-item">
						<div className="item-holder">
							<span className="item-heading">Last Login</span>
							<p className="item-vale">{transaction.LastLogin}</p>
						</div>
						<div className="item-holder">
							<span className="item-heading">Mac Address</span>
							<p className="item-vale">{transaction.MacAddress}</p>
						</div>

						<div className="item-holder">
							<span className="item-heading">Longitude</span>
							<p className="item-vale">{transaction.Longitude}</p>
						</div>

						<div className="item-holder">
							<span className="item-heading">Latitude</span>
							<p className="item-vale">{transaction.Latitude}</p>
						</div>

						<div className="item-holder">
							<span className="item-heading">URL</span>
							<p className="item-vale"><a href={transaction.URL} target="_blank">View URL</a></p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TransactionItem;
