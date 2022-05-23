import { Button, Modal, Form, Input, InputNumber } from "antd";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { editGrades } from "../../api/Auth";
const EditGrade = ({
  modaldata,
  isModalVisible,
  handleCloseEditModal,
  handleCancel,
  handleOk,
  onFinish,
  onFinishFailed,
}) => {
  const [form] = Form.useForm();

  const onFinishEditModal = async (values) => {
    const response = await editGrades(values);

    if (response.status === 200) {
      toast.success(response.data);
      handleCloseEditModal();
    } else {
      toast.error(response.data);
      handleCloseEditModal();
    }
  };

  useEffect(() => {
    if (isModalVisible) {
      form.setFieldsValue({
        objId: modaldata._id,
        maths: modaldata.maths,
        english: modaldata.english,
        dutch: modaldata.dutch,
        science: modaldata.science,
        grade: modaldata.grade,
      });
    }
  }, [isModalVisible]);
  return (
    <Modal
      title={modaldata.name}
      visible={isModalVisible}
      onOk={handleOk}
      onCancel={handleCancel}
      footer={null}
    >
      <Form
        form={form}
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinishEditModal}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Maths"
          name="maths"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <InputNumber
            placeholder="numbers only please"
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
          <InputNumber placeholder="numbers only please" />
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
            placeholder="numbers only please"
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
            placeholder="numbers only please"
            style={{ width: "200px" }}
          />
        </Form.Item>

        <Form.Item label="objId" name="objId" style={{ display: "none" }}>
          <Input type="text" name="objId" />
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

export default EditGrade;
