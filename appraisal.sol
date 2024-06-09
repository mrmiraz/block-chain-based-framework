// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract AppraisalRecords {
    struct Appraisal {
        string id;
        string start;
        string end;
        string duties;
        string skills;
        string skillpoint;
        string accuracypoint;
        string spiritpoint;
        string attendancepoint;
    }

    mapping(string => Appraisal[]) private appraisals;
    Appraisal[] private allAppraisals;

    function create(
        string memory _id,
        string memory _start,
        string memory _end,
        string memory _duties,
        string memory _skills,
        string memory _skillpoint,
        string memory _accuracypoint,
        string memory _spiritpoint,
        string memory _attendancepoint
    ) public {
        appraisals[_id].push(
            Appraisal(
                _id,
                _start,
                _end,
                _duties,
                _skills,
                _skillpoint,
                _accuracypoint,
                _spiritpoint,
                _attendancepoint
            )
        );
        allAppraisals.push(
            Appraisal(
                _id,
                _start,
                _end,
                _duties,
                _skills,
                _skillpoint,
                _accuracypoint,
                _spiritpoint,
                _attendancepoint
            )
        );
    }

    function getAppraisal(string memory _id) public view returns (Appraisal[] memory) {
        return appraisals[_id];
    }

    function getAllAppraisals() public view returns (Appraisal[] memory) {
        return allAppraisals;
    }
}

