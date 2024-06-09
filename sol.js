
    // Replace from meta mask account address
    const metaMaskMyAddress = '0x7ffC8224F8DaDd4acd64E2E79D039105952446e1';

    // Replace from Remix IDE deploy address; Make sure Redmix IDE environment is MetaMask
    const employeeContractAddress = '0xd21Dd7c7387c95215545E65b2D1C4a594974d70A'; 
	const appraisalcontractAddress = '0xCa94295b7b24D20A6ca2225863a96245b6ADcc2D'; 

    const employeeContractABI = [
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_id",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_father",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_email",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_phone",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_nid",
				"type": "string"
			}
		],
		"name": "create",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getAllEmployees",
		"outputs": [
			{
				"components": [
					{
						"internalType": "string",
						"name": "id",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "name",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "father",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "email",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "phone",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "nid",
						"type": "string"
					}
				],
				"internalType": "struct EmployeeRecords.Employee[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_id",
				"type": "string"
			}
		],
		"name": "getEmployee",
		"outputs": [
			{
				"components": [
					{
						"internalType": "string",
						"name": "id",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "name",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "father",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "email",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "phone",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "nid",
						"type": "string"
					}
				],
				"internalType": "struct EmployeeRecords.Employee[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];

    const appraisalContractABI = [
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_id",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_start",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_end",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_duties",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_skills",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_skillpoint",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_accuracypoint",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_spiritpoint",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_attendancepoint",
				"type": "string"
			}
		],
		"name": "create",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getAllAppraisals",
		"outputs": [
			{
				"components": [
					{
						"internalType": "string",
						"name": "id",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "start",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "end",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "duties",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "skills",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "skillpoint",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "accuracypoint",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "spiritpoint",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "attendancepoint",
						"type": "string"
					}
				],
				"internalType": "struct AppraisalRecords.Appraisal[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_id",
				"type": "string"
			}
		],
		"name": "getAppraisal",
		"outputs": [
			{
				"components": [
					{
						"internalType": "string",
						"name": "id",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "start",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "end",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "duties",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "skills",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "skillpoint",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "accuracypoint",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "spiritpoint",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "attendancepoint",
						"type": "string"
					}
				],
				"internalType": "struct AppraisalRecords.Appraisal[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];

$(document).ready(function(){

    // Connect to Ethereum network
    if (window.ethereum) {
        window.web3 = new Web3(window.ethereum);
        window.ethereum.enable();
    }


    // Create Employee
    $('#createBtn').click(function(e) {
        e.preventDefault();

    	const employeeContract = new web3.eth.Contract(employeeContractABI, employeeContractAddress);

        const id = $('#employee_id').val();
        const name = $('#name').val();
        const father = $('#father').val();
        const email = $('#email').val();
        const phone = $('#phone').val();
        const nid = $('#nid').val();


		// Log all variables together
		console.log({ id, name, father, email, phone, nid });


        // Disable the button
        $(this).prop('disabled', true);
		disableButtonCss();


        employeeContract.methods.create(id, name, father, email, phone, nid).send({from: metaMaskMyAddress}, function(error, transactionHash){
            if (!error) {
                console.log("Transaction hash: " + transactionHash);
                
        		$('#createBtn').prop('disabled', false);
            	enableButtonCss();


				$('#successBlock').removeClass('hidden');
				$('#successMessage').text('Employee created successfully!');
				setTimeout(function(){
			           location.reload();
			    }, 1000); 
            } else {
                console.error(error);


        		$('#createBtn').prop('disabled', false);
            	enableButtonCss();

				$('#errorBlock').removeClass('hidden');
				$('#errorMessage').text('Failed to create employee!');
				setTimeout(function(){
			           location.reload();
			    }, 1000); 
            }
        });
    });


    // Submit Appraisal
    $('#appraisalSubmitBtn').click(function(e) {
        e.preventDefault();

    	const appraisalContract = new web3.eth.Contract(appraisalContractABI, appraisalcontractAddress);

        const id = $('#employee_id').val();
        const start = $('#start').val();
        const end = $('#end').val();
        const duties = $('#duties').val();
        const skills = $('#skills').val();
        const skillpoint = $('#skillpoint').val();
        const accuracypoint = $('#accuracypoint').val();
        const spiritpoint = $('#spiritpoint').val();
        const attendancepoint = $('#attendancepoint').val();


		// Log all variables together
		console.log({ id, start, end, duties, skills, skillpoint, accuracypoint, spiritpoint, attendancepoint });


        // Disable the button
        $(this).prop('disabled', true);
		disableButtonCss();


        appraisalContract.methods.create(id, start, end, duties, skills, skillpoint, accuracypoint, spiritpoint, attendancepoint).send({from: metaMaskMyAddress}, function(error, transactionHash){
            if (!error) {
                console.log("Transaction hash: " + transactionHash);
                
        		$('#createBtn').prop('disabled', false);
            	enableButtonCss();


				$('#successBlock').removeClass('hidden');
				$('#successMessage').text('Appraisal added successfully!');
				setTimeout(function(){
			           location.reload();
			    }, 1000); 
            } else {
                console.error(error);


        		$('#createBtn').prop('disabled', false);
            	enableButtonCss();

				$('#errorBlock').removeClass('hidden');
				$('#errorMessage').text('Failed to submit appraisal!');
				setTimeout(function(){
			           location.reload();
			    }, 1000); 
            }
        });


    });



});






function disableButtonCss() {
    // Change the button text to "Loading..."
    $('#buttonText').text('Loading...');

    // Show the spinner
    $('#spinner').removeClass('hidden');

}

function enableButtonCss() {
    // Change the button text to "Loading..."
    $('#buttonText').text('Submit');

    // Show the spinner
    $('#spinner').addClass('hidden');

}


// Get All Employees
function getAllEmployees() {

	const employeeContract = new web3.eth.Contract(employeeContractABI, employeeContractAddress);

    employeeContract.methods.getAllEmployees().call(function(error, result){
        if (!error) {
            console.log(result);

	        result.forEach(function(employee){
	            $('#employeeData').append(`
	                <tr>
	                    <td class="border px-4 py-2">${employee.id}</td>
	                    <td class="border px-4 py-2">${employee.name}</td>
	                    <td class="border px-4 py-2">${employee.father}</td>
	                    <td class="border px-4 py-2">${employee.email}</td>
	                    <td class="border px-4 py-2">${employee.phone}</td>
	                    <td class="border px-4 py-2">${employee.nid}</td>
	                </tr>
	            `);
	        });

        } else {
            console.error(error);
        }
    });
}


// Get All Appraisals
function getAllAppraisals() {

    const appraisalContract = new web3.eth.Contract(appraisalContractABI, appraisalcontractAddress);

    appraisalContract.methods.getAllAppraisals().call(function(error, result){
        if (!error) {
            console.log(result);

	        result.forEach(function(data){
	            $('#appraisalData').append(`
	                <tr>
	                    <td class="border px-4 py-2">${data.id}</td>
	                    <td class="border px-4 py-2">${data.start}</td>
	                    <td class="border px-4 py-2">${data.end}</td>
	                    <td class="border px-4 py-2">${data.duties}</td>
	                    <td class="border px-4 py-2">${data.skills}</td>
	                    <td class="border px-4 py-2">${data.skillpoint}</td>
	                    <td class="border px-4 py-2">${data.accuracypoint}</td>
	                    <td class="border px-4 py-2">${data.spiritpoint}</td>
	                    <td class="border px-4 py-2">${data.attendancepoint}</td>
	                </tr>
	            `);
	        });

        } else {
            console.error(error);
        }
    });
}