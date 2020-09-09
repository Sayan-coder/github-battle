import React, { useState } from "react";
import axios from "axios";
import { Row, Col } from "antd";
import { Input, Tooltip, Icon } from "antd";
import { Card } from "antd";
const Search = Input.Search;

const OverviewTechnologyComponent = () => {
  const [user1, setUser1] = useState(null);
  const [user2, setUser2] = useState(null);
  const getGithubProfile1 = (value) => {
    axios.get(`https://api.github.com/users/${value}`).then((data) => {
      setUser1(data.data);
      console.log(data.data);
    });
  };
  const getGithubProfile2 = (value) => {
    axios.get(`https://api.github.com/users/${value}`).then((data) => {
      setUser2(data.data);
      console.log(data.data);
    });
  };
  const style = {
    width: "100%",
    textAlign: "center",
    color: "lightgreen",
    fontSize: "2rem",
    fontWeight: "500"
  };
  return (
    <div className="instructions-container">
      <h1 className="center-text header-lg">Let's Begin Battle</h1>
      <Row>
        <Col span={12}>
          <div className="user-grid">
            <h5>User 1 Github UserName</h5>
            <Search
              onSearch={getGithubProfile1}
              placeholder="Enter your username"
              prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
              suffix={
                <Tooltip title="Extra information">
                  <Icon
                    type="info-circle"
                    style={{ color: "rgba(0,0,0,.45)" }}
                  />
                </Tooltip>
              }
            />
            {user1 ? (
              <Card cover={<img alt="example" src={user1.avatar_url} />}>
                <p>Name - {user1.name}</p>
                <p>Location - {user1.location}</p>
                <p>Followers - {user1.followers}</p>
                <p>Following - {user1.following}</p>
                <p>Followers - {user1.followers}</p>
                <p>Puclic Repos - {user1.public_repos}</p>
              </Card>
            ) : null}
          </div>
        </Col>
        <Col span={12}>
          <div className="user-grid">
            <h5>User 2 Github UserName</h5>
            <Search
              onSearch={getGithubProfile2}
              placeholder="Enter your username"
              prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
              suffix={
                <Tooltip title="Extra information">
                  <Icon
                    type="info-circle"
                    style={{ color: "rgba(0,0,0,.45)" }}
                  />
                </Tooltip>
              }
            />
            {user2 ? (
              <Card cover={<img alt="example" src={user2.avatar_url} />}>
                <p>Name {user2.name}</p>
                <p>Company {user2.company}</p>
                <p>Location - {user2.location}</p>
                <p>Followers - {user2.followers}</p>
                <p>Following - {user2.following}</p>
                <p>Puclic Repos - {user2.public_repos}</p>
              </Card>
            ) : null}
          </div>
        </Col>
      </Row>
      <Row>
        {user1 && user2 ? (
          user1.followers + user1.public_repos >
          user2.followers + user2.public_repos ? (
            <p style={style}>{`Winner ${user1.name}`}</p>
          ) : (
            <p style={style}>{`Winner ${user2.name}`}</p>
          )
        ) : null}
      </Row>
    </div>
  );
};
export default OverviewTechnologyComponent;
