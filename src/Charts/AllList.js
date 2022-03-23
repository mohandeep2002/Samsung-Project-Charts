import React, { Component } from "react";

class AllList extends Component {
  state = {
    isLoading: true,
    groups: [],
  };
  async componentDidMount() {
    const response = await fetch("http://localhost:6170/records/getAll");
    const body = await response.json();
    this.setState({ groups: body, isLoading: false });
  }
  render() {
    const { groups, isLoading } = this.state;
    if (isLoading) {
      return <p>Loading... Please RUN API Server</p>;
    }
    return (
      <div className="">
        <h1>Records</h1>
        {groups.map((group) => (
          <div key={group.id}>
            <h4>Team Name: {group.teamName}</h4>
            <ol>
              <li>Time Taken: {group.timeTaken}</li>
              <li>Group Name: {group.groupName}</li>
              <li>No.of Defects: {group.noOfDefects}</li>
              <li>Project Code: {group.projectCode}</li>
            </ol>
          </div>
        ))}
      </div>
    );
  }
}
export default AllList;
