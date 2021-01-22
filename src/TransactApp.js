import React, { useState, useEffect } from 'react';
import Transactions from './components/Transactions';
import Pagination from './components/Pagination';
import SearchBox from './components/SearchBox';
import axios from 'axios';
import './TransactApp.css';
// import ReactDOM from 'react-dom';
// import SearchBox from './SearchBox';


const TransactApp = () => {
    const [transactions, setTransactions] = useState([]);
    const [data, setData] = useState([]);
    // const [searchField, setSearchField] = useState('');
    // const [genderField, setGenderField] = useState('');
    // const [paymentMethodField, setPaymentMethodField] = useState('');
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [transactionsPerPage] = useState(10);
    const [genderValue, setGenderValue] = useState("")
    const [paymentValue, setPaymentValue] = useState("")

    useEffect(() => {
        const fetchTransactions = async () => {
            setLoading(true);
            const res = await axios.get('https://api.enye.tech/v1/challenge/records');
            setTransactions(res.data.records.profiles);
            setData(res.data.records.profiles)
            setLoading(false);
        }

        fetchTransactions();
    }, []);

    // console.log(transactions.length);

    // Get Current posts
    const indexOfLastTransaction = currentPage * transactionsPerPage;
    const indexOfFirstTransaction = indexOfLastTransaction - transactionsPerPage;
    const currentTransaction = data.slice(indexOfFirstTransaction, indexOfLastTransaction);

    // Change Page
    const paginate = pageNumber => setCurrentPage(pageNumber);

    // Filter by Search Change
    // const onSearchChange = (event) => {
    //     setSearchField(event.target.value);
    //     // console.log(event.target.value);
    // }

    // Filter by Gender
    const onGenderSelect = (event) => {
        // setGenderField(event.target.value);
        // console.log(event.target.value);
        setGenderValue(event.target.value)
    }

    // Filter by PaymentMethod
    const onPaymentSelect = (event) => {
        // setPaymentMethodField(event.target.value);
        // console.log(event.target.value);
        setPaymentValue(event.target.value)
    }


    const filterRecords = () => {
        const genderResults = transactions.filter(record => record.Gender.toLowerCase() === genderValue.toLowerCase())

        const paymentResults = transactions.filter(record => record.PaymentMethod.toLowerCase() === paymentValue.toLowerCase())

        const totalResults = [...genderResults, ...paymentResults]

        console.log(totalResults)

        setData(totalResults)
    }

    // const filterOnSearch = (event) => {
    //     const value = event.target.value;
    //     const results = transactions.filter(transaction => {
    //         return transaction.FirstName.toLowerCase().includes(value.toLowerCase());
    //     })
    //     setData(results)
    // }

    const filterData = (event) => {
        const lowercasedValue = event.target.value.toLowerCase().trim();
        if(lowercasedValue === "") setData(transactions);
        else {
            const filteredData = data.filter((record) => {
                return Object.keys(record).some((key) =>
                record[key].toString().toLowerCase().includes(lowercasedValue)
                );
            });
            setData(filteredData);
        }
    }

    return (
        <div>
            <div className="header"></div>
            <div className="container">
                <div className="title-header">
                    <h1 className="title">
                        Transaction History
                    </h1>
                </div>
                
                <div className="filter-tab">
                    <div className="alignLeft">

                        <div className="gender-filter tag">
                            <label for="filter-by-gender"></label>
                            <select name="gender" className="filter" id="filter-by-gender" onChange={onGenderSelect}>
                                <option value="">Filter By Gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Prefer to skip">Prefer to skip</option>
                            </select>
                        </div>

                        <div className="cardtype-filter tag">
                            <label for="filter-by-paymentMethod"></label>
                                <select name="paymentMethod" className="filter" id="filter-by-paymentMethod" onChange={onPaymentSelect}>
                                    <option value="">Filter By PaymentMethod</option>
                                    <option value="check">Check</option>
                                    <option value="paypal">PayPal</option>
                                    <option value="cc">CC</option>
                                    <option value="money order">Money Order</option>
                                </select>
                        </div>
                        <button disabled={!genderValue && !paymentValue} onClick={filterRecords}>Filter</button>
                    </div>

                    <div>
                        <p>
                            Total : {data.length}
                        </p>
                    </div>

                    <div className="alignRight">
                        <SearchBox filterOnSearch={filterData}/>
                    </div>
                </div>

                <div className="transaction-tab tab">
                    <div className="td-fullname">Full Name</div>
                    <div className="td-email">Email Address</div>
                    <div className="td-gender">Gender</div>
                    <div className="td-phone">Phone Number</div>
                    <div className="td-domain">Domain Name</div>
                    <div className="td-lastlogin">Last Login</div>
                    <div id="drop"></div>
                </div>
                <Transactions transactionDatas={currentTransaction} loading={loading} />
                <Pagination postsPerPage={transactionsPerPage} totalPosts={data.length} paginate={paginate} currentPage={currentPage} />
            </div>
        </div>
    );
}


export default TransactApp;