import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Modal,
  Form,
  Input,
  // Tooltip,
  // Cascader,
  // Select,
  // Row,
  // Col,
  Checkbox,
  Button,
  // AutoComplete,
} from "antd";
// import { QuestionCircleOutlined } from "@ant-design/icons";

// const { Option } = Select;
// const AutoCompleteOption = AutoComplete.Option;
// const residences = [
//   {
//     value: "bulgaria",
//     label: "България",
//     children: [
//       {
//         value: "sofia",
//         label: "София",
//         children: [
//           {
//             value: "hristoSmirnenski",
//             label: "жк. Христо Смирненски",
//           },
//         ],
//       },
//     ],
//   },
// ];
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

const SignUp = () => {
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log("Received values of form: ", values);
  };

  // const prefixSelector = (
  //   <Form.Item name="prefix" noStyle>
  //     <Select
  //       style={{
  //         width: 75,
  //       }}
  //     >
  //       <Option value="359">+359</Option>
  //     </Select>
  //   </Form.Item>
  // );

  return (
    <div>
      <Button type="primary" onClick={() => setModalVisible(true)}>
        Open Sign Up
      </Button>

      <Modal
        title={<span>🖖</span>}
        centered
        visible={modalVisible}
        footer={null}
      >
        <Form
          {...formItemLayout}
          form={form}
          name="register"
          onFinish={onFinish}
          initialValues={{
            residence: ["България", "София", "жк. Христо Смирненски"],
            prefix: "359",
          }}
          scrollToFirstError
        >
          <Form.Item
            name="email"
            label="Имейл"
            rules={[
              {
                type: "email",
                message: "Моля, въведете валиден имейл!",
              },
              {
                required: true,
                message: "Имейла е задължителен!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="password"
            label="Парола"
            rules={[
              {
                required: true,
                message: "Паролата е задължителна!",
              },
            ]}
            hasFeedback
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="confirm"
            label="Потвърдете паролата"
            dependencies={["password"]}
            hasFeedback
            rules={[
              {
                required: true,
                message: "Моля, потвърдете паролата ви!",
              },
              ({ getFieldValue }) => ({
                validator(rule, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }

                  return Promise.reject("Паролите не съвпадат!");
                },
              }),
            ]}
          >
            <Input.Password />
          </Form.Item>

          {/* <Form.Item
            name="nickname"
            label={
              <span>
                Псевдоним&nbsp;
                <Tooltip title="Как желаете да ви наричат другите?">
                  <QuestionCircleOutlined />
                </Tooltip>
              </span>
            }
            rules={[
              {
                required: true,
                message: "Моля, въведете вашият псевдоним!",
                whitespace: true,
              },
            ]}
          >
            <Input />
          </Form.Item> */}

          {/* <Form.Item
            name="residence"
            label="Местожителство"
            rules={[
              {
                type: "array",
                required: true,
                message: "Моля, изберете местожителство!",
              },
            ]}
          >
            <Cascader options={residences} />
          </Form.Item> */}

          {/* <Form.Item
            name="phone"
            label="Мобилен телефон"
            rules={[
              {
                required: true,
                message: "Моля, въведете вашият мобилен телефон!",
              },
            ]}
          >
            <Input
              addonBefore={prefixSelector}
              style={{
                width: "100%",
              }}
            />
          </Form.Item> */}

          <Form.Item
            name="agreement"
            valuePropName="checked"
            rules={[
              {
                validator: (_, value) =>
                  value
                    ? Promise.resolve()
                    : Promise.reject("Трябва да приемете споразумението"),
              },
            ]}
            {...tailFormItemLayout}
          >
            <Checkbox>
              Прочетох <Link to="#">условията</Link> за ползване на сайта
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
