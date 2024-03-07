import React from "react";

import { Layout, Menu, MenuProps } from "antd";

import { NavLink, Outlet } from "react-router-dom";

const { Content, Sider } = Layout;

const items: MenuProps["items"] = [
  {
    key: "001",
    label: <NavLink to={"/dashboard/all-donations"}>All Donations</NavLink>,
  },
  {
    key: "005",
    label: <NavLink to={"/dashboard/leaderboard"}>Leader Board</NavLink>,
  },
  {
    key: "002",
    label: <NavLink to={"/dashboard/chart"}>Pie Chart</NavLink>,
  },

  {
    key: "004",
    label: (
      <NavLink to={"/dashboard/create-testimonial"}>Add Testimonial</NavLink>
    ),
  },
  {
    key: "006",
    label: <NavLink to={"/dashboard/volunteer"}>Volunteer Form</NavLink>,
  },
  {
    key: "003",
    label: <NavLink to={"/"}>Home</NavLink>,
  },
];

const DashboardLayout: React.FC = () => {
  return (
    <Layout className=" h-screen">
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div className=" text-start text-xl p-2">
          <h1 className="text-white font-bold ">Dashboard</h1>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["4"]}
          items={items}
        />
      </Sider>
      <Layout>
        <Content>
          <div>
            <Outlet />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default DashboardLayout;
