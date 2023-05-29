import { Link, useLocation } from "react-router-dom";
import { Layout, Menu } from "antd";
import { HomeOutlined } from "@ant-design/icons";
const Header = () => {
  const { Header } = Layout;
  const location = useLocation();
  const currentPath = location.pathname;
  return (
    <Header style={{
      background: "#001529",
      borderBottom: "1px solid rgba(5, 5, 5, 0.06)",
    }}> 
      <Menu
        theme="dark"
        mode="horizontal"
        selectedKeys={[currentPath]}
        className="menu"
      >
        <Menu.Item key="/" active={currentPath === "/"} icon={<HomeOutlined />}>
          <Link to="/">Meals</Link>
        </Menu.Item>
      </Menu>
    </Header>
  );
};
export default Header;
