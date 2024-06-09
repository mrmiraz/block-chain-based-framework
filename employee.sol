// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract EmployeeRecords {
    struct Employee {
        string id;
        string name;
        string father;
        string email;
        string phone;
        string nid;
    }

    mapping(string => Employee[]) private employees;
    Employee[] private allEmployees;

    function create(string memory _id, string memory _name, string memory _father, string memory _email, string memory _phone, string memory _nid) public {
        employees[_id].push(Employee(_id, _name, _father, _email, _phone, _nid));
        allEmployees.push(Employee(_id, _name, _father, _email, _phone, _nid));
    }

    function getEmployee(string memory _id) public view returns(Employee[] memory) {
        return employees[_id];
    }

    function getAllEmployees() public view returns(Employee[] memory) {
        return allEmployees;
    }
}


