import { Form, Input, Button, Space } from "antd";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { login } from "../../api/Auth";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const SubmitForm = async (values) => {
    const response = await login(values);
    form.resetFields();
    if (response.data) {
      localStorage.setItem("token", response.data);
      navigate("/app");
    } else {
      toast.error("invalid password");
    }

    console.log("Login values ", response);
  };

  const handleRegister = () => {
    console.log(" register ");
    navigate("/register");
  };
  return (
    <div className="container">
      <Form className="" onFinish={SubmitForm} form={form}>
        <Form.Item
          label="User Name"
          name="name"
          rules={[{ required: true, message: "Please enter your username" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please enter your password" }]}
        >
          <Input.Password />
        </Form.Item>

        <Space>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Login
            </Button>
          </Form.Item>
          <Form.Item>
            <Button onClick={handleRegister}>Register</Button>
          </Form.Item>{" "}
        </Space>
      </Form>
    </div>
  );
};
export default Login;
