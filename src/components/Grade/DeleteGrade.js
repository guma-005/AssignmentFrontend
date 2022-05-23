import { Button, Modal, Form, Input } from "antd";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { deleteStudentGrades } from "../../api/Auth";
const DeleteGrade = ({
  modaldata,
  isModalVisible,
  handleCloseDeleteModal,
  // handleCancel,
  // handleOk,
  //onFinish,
  // onFinishFailed,
}) => {
  const [form] = Form.useForm();

  useEffect(() => {
    console.log(" Modal Data delete ", modaldata);
    if (isModalVisible) {
      form.setFieldsValue({
        objId: modaldata._id,
      });
    }
  }, [isModalVisible]);

  const handleDelete = async (values) => {
    console.log("Delete confirm ", values);
    //const response = await deleteStudent(values);
    const response = await deleteStudentGrades(values);

    // const response = await addGradesToDb(values);
    console.log("delete ===> ", response);
    if (response.status === 200) {
      console.log("delete suucess ", response);
      toast.success(response.data);
      handleCloseDeleteModal();
    } else {
      console.log(" Error in modal ", response.data);
      toast.error(response.data);
      handleCloseDeleteModal();
    }
  };

  return (
    <Modal
      title={modaldata.name}
      visible={isModalVisible}
      onOk={handleCloseDeleteModal}
      onCancel={handleCloseDeleteModal}
      //onFinish={handleDelete}
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
        onFinish={handleDelete}
        //onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <p>Some contents...</p>

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
            Confim Delete
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default DeleteGrade;
