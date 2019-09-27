import web3 from './web3';

const address = '0x53b88db8d74d7c4893ee1ba81413ba3e14d30017';

const abi=[
  
        {
            "constant": false,
            "inputs": [
                {
                    "name": "sid",
                    "type": "uint256"
                },
                {
                    "name": "lid",
                    "type": "uint256"
                },
                {
                    "name": "_from",
                    "type": "address"
                }
            ],
            "name": "acceptdist",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_id",
                    "type": "uint256"
                }
            ],
            "name": "sell",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_to",
                    "type": "address"
                },
                {
                    "name": "sid",
                    "type": "uint256"
                },
                {
                    "name": "lid",
                    "type": "uint256"
                }
            ],
            "name": "setdistdetails",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_medName",
                    "type": "string"
                },
                {
                    "name": "_manufactureName",
                    "type": "string"
                },
                {
                    "name": "sid",
                    "type": "uint256"
                },
                {
                    "name": "lid",
                    "type": "uint256"
                },
                {
                    "name": "_to",
                    "type": "address"
                },
                {
                    "name": "_distributorName",
                    "type": "string"
                }
            ],
            "name": "setmed",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_id",
                    "type": "uint256"
                },
                {
                    "name": "_name",
                    "type": "string"
                },
                {
                    "name": "_dist",
                    "type": "address"
                }
            ],
            "name": "setretaildetails",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_role",
                    "type": "string"
                },
                {
                    "name": "_user",
                    "type": "address"
                },
                {
                    "name": "_name",
                    "type": "string"
                },
                {
                    "name": "_contactNo",
                    "type": "string"
                },
                {
                    "name": "_location",
                    "type": "string"
                }
            ],
            "name": "setuser",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "_id",
                    "type": "uint256"
                }
            ],
            "name": "getdistdetails",
            "outputs": [
                {
                    "name": "distname",
                    "type": "string"
                },
                {
                    "name": "d",
                    "type": "address"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "_id",
                    "type": "uint256"
                }
            ],
            "name": "getmandetails",
            "outputs": [
                {
                    "name": "_name",
                    "type": "string"
                },
                {
                    "name": "_to",
                    "type": "address"
                },
                {
                    "name": "time",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "_id",
                    "type": "uint256"
                }
            ],
            "name": "getmed",
            "outputs": [
                {
                    "name": "medName",
                    "type": "string"
                },
                {
                    "name": "manufactureName",
                    "type": "string"
                },
                {
                    "name": "manufacture",
                    "type": "address"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "_id",
                    "type": "uint256"
                }
            ],
            "name": "getretaildetails",
            "outputs": [
                {
                    "name": "_name",
                    "type": "string"
                },
                {
                    "name": "_dist",
                    "type": "address"
                },
                {
                    "name": "_own",
                    "type": "address"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "_user",
                    "type": "address"
                }
            ],
            "name": "getuser",
            "outputs": [
                {
                    "name": "_name",
                    "type": "string"
                },
                {
                    "name": "_role",
                    "type": "string"
                },
                {
                    "name": "_location",
                    "type": "string"
                },
                {
                    "name": "_contactNo",
                    "type": "string"
                },
                {
                    "name": "stock",
                    "type": "uint24"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        }
    ]
    export default new web3.eth.Contract(abi, address);

