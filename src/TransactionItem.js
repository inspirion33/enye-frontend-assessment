import React, { useState } from "react";

const TransactionItem = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggledropdown = () => {
    setIsOpen((on) => !on);
  };

  const classes = isOpen ? "active" : "hide"

  return (
    <div className="listrow">
      <div className="transaction-tab detail">
        <div className="td-fullname">
          {props.FirstName} {props.LastName}
        </div>
        <div className="td-email">{props.Email}</div>
        <div className="td-gender">{props.Gender}</div>
        <div className="td-phone">{props.PhoneNumber}</div>
        <div className="td-domain">{props.DomainName}</div>
        <div className="td-lastlogin">{props.LastLogin}</div>
        <div id="drop" onClick={() => toggledropdown()}>
          ##
        </div>
      </div>

      {/* {isOpen ? (
        <div id="showOrHide">
          <h1>more details</h1>
        </div>
      ) : null} */}

    
        <div id="showOrHide" className={classes}>
          <h1>more details</h1>
        </div>
    </div>
  );
};

// class Transaction extends React.Component {
//     render() {
//         const profile = this.props;
//        return (
//         <div className="transaction-tab">
//             <div className="td-fullname">{profile.FirstName} {profile.LastName}</div>
//             <div className="td-email">{profile.Email}</div>
//             <div className="td-gender">{profile.Gender}</div>
//             <div className="td-phone">{profile.PhoneNumber}</div>
//             <div className="td-domain">{profile.DomainName}</div>
//             <div className="td-lastlogin">{profile.LastLogin}</div>
//             <div id="drop">##</div>
//         </div>
//        );
//     }
// }
export default TransactionItem;
