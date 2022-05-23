import { Button, Modal, Form, Input, InputNumber } from "antd";

import { toast } from "react-toastify";
import { addGrades } from "../../api/Auth";
const AddGrade = ({
  isModalVisible,
  handleCloseAddModal,
  //handleCancel,
  //handleOk,
  onFinish,
  onFinishFailed,
}) => {
  const [form] = Form.useForm();

  //const [gradeValue, setGrade] = useState(0);

  //   function handleGrade(e) {
  //     let grade = gradeValue + e.target.value();
  //     form.setFieldValue({ gradeVal: gradeValue });
  //   }

  const onFinishAddInModal = async (values) => {
    const response = await addGrades(values);

    // const response = await addGradesToDb(values);

    if (response.status === 200) {
      console.log("res i suucess ");
      toast.success(response.data);
      handleCloseAddModal();
    } else {
      console.log(" Error in modal ", response.data);
      toast.error(response.data);
      handleCloseAddModal();
    }
  };

  const onInputChangeName = (e) => {
    const { value } = e.target;
    console.log("Input value: ", value);

    let newV = value.replace(/[^A-Za-z]/gi, "");

    form.setFieldsValue({ name: newV });
  };

  return (
    <Modal
      destroyOnClose
      title={" Add student and Grades "}
      visible={isModalVisible}
      onCancel={handleCloseAddModal}
      onOk={handleCloseAddModal}
      footer={null}
    >
      <Form
        preserve={false}
        form={form}
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        initialValues={{
          remember: false,
        }}
        onFinish={onFinishAddInModal}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Name"
          name="name"
          rules={[
            {
              required: true,
              message: "Please input your name!",
            },
          ]}
        >
          <Input
            onChange={onInputChangeName}
            placeholder="Alphabets only please atlease 6 letters"
          />
        </Form.Item>

        <Form.Item
          label="Maths"
          name="maths"
          rules={[
            {
              required: true,
              message: "Please enter marks here ",
            },
          ]}
        >
          <InputNumber
            min={0}
            max={100}
            placeholder="numbers only please"
            initialValues={0}
            style={{ width: "200px" }}
          />
        </Form.Item>

        <Form.Item
          label="Science"
          name="science"
          rules={[
            {
              required: true,
              message: "Please enter marks here ",
            },
          ]}
        >
          <InputNumber
            min={0}
            max={100}
            placeholder="numbers only please"
            initialValues={0}
            style={{ width: "200px" }}
          />
        </Form.Item>
        <Form.Item
          label="English"
          name="english"
          rules={[
            {
              required: true,
              message: "Please enter marks here ",
            },
          ]}
        >
          <InputNumber
            min={0}
            max={100}
            placeholder="numbers only please"
            initialValues={0}
            style={{ width: "200px" }}
          />
        </Form.Item>
        <Form.Item
          label="Dutch"
          name="dutch"
          rules={[
            {
              required: true,
              message: "Please enter marks here ",
            },
          ]}
        >
          <InputNumber
            min={0}
            max={100}
            initialValues={0}
            placeholder="numbers only please"
            style={{ width: "200px" }}
          />
        </Form.Item>
        <Form.Item
          label="Grade"
          name="grade"
          rules={[
            {
              required: true,
              message: "Please enter marks here ",
            },
          ]}
        >
          <InputNumber
            min={0}
            max={100}
            initialValues={0}
            name="gradeVal"
            placeholder="numbers only please"
            style={{ width: "200px" }}
          />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default AddGrade;
