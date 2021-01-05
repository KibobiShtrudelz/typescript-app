import React from "react";
import { Modal, Form, Input, Checkbox, Button } from "antd";
import {
  emailRules,
  passwordRules,
  confirmPasswordRules,
  agreementRules,
} from "./formRules";
import { PropsTypes } from "./types";
import { useAppDispatch } from "../../redux/store";
import userStore from "../../redux/userStore";

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};

const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

const SignUp = ({
  showSignUpModal,
  closeSignUpModal,
}: PropsTypes): JSX.Element => {
  const [form] = Form.useForm();

  const dispatch = useAppDispatch();

  console.log("CMS URL:", process.env.REACT_APP_CMS_BASE_URL);

  const onFinish = (values: any) => {
    console.log("Received values of form: ", values);
    dispatch(
      userStore.actions.userSignUp({
        email: values.email,
        username: values.email,
        password: values.password,
      })
    );
  };

  return (
    <div>
      <Modal
        title={<span style={{ textAlign: "center" }}>🖖</span>}
        centered
        visible={showSignUpModal}
        footer={null}
        onCancel={() => closeSignUpModal()}
      >
        <Form
          {...formItemLayout}
          form={form}
          name="register"
          onFinish={onFinish}
          scrollToFirstError
        >
          <Form.Item name="email" label="Имейл" rules={emailRules}>
            <Input />
          </Form.Item>

          <Form.Item
            name="password"
            label="Парола"
            rules={passwordRules}
            hasFeedback
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="confirm"
            label="Потвърдете паролата"
            dependencies={["password"]}
            hasFeedback
            rules={confirmPasswordRules}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="agreement"
            valuePropName="checked"
            rules={agreementRules}
            {...tailFormItemLayout}
          >
            <Checkbox>
              Прочетох{" "}
              <a href="http://localhost:3000/terms-and-conditions">условията</a>{" "}
              за ползване на сайта
            </Checkbox>
          </Form.Item>

          <Form.Item {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit">
              Регистрирай се
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default SignUp;
