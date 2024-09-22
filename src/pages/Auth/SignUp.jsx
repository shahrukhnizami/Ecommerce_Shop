// import { createUserWithEmailAndPassword } from "firebase/auth";

// import { auth } from "../firebase/fire";
// import { useNavigate } from "react-router";
import React, { useState } from 'react';
import { InboxOutlined, PlusOutlined,  } from '@ant-design/icons';
import {
  Button,
  Checkbox,
  Form,
  Input,
  Select,
} from 'antd';
import Upload from 'antd/es/upload/Upload';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth,storage,db } from '../firebase/fire';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
const { Option } = Select;
const residences = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [
          {
            value: 'xihu',
            label: 'West Lake',
          },
        ],
      },
    ],
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
          },
        ],
      },
    ],
  },
];
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
const normFile = (e) => {
  console.log('Upload event:', e);
  console.log('image:', e.file.originFileObj);
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};
// 



const SignUp = () => {
  const [form] = Form.useForm();
  const onFinish = async (values) => {
    console.log('Received values of form: ', values);
    try{
      const signup = await createUserWithEmailAndPassword( auth,
        values.email,
        values.password)
        console.info("Signup hogya");
        const register_user_ref= ref(storage,"regiter_user/");
        // console.log("Ref",register_user_ref);
        
        const UploadImage  = await uploadBytes(register_user_ref,   values.dragger.originFileObj).then(()=>{
          console.info("Image upload hogya");})
          
        

          .catch(()=>{console.log("Eror in uploading image")})

    }
    catch(eror){
      console.log(eror);
      
    }


 

    // console.log('image ', values.dragger[0].originFileObj);
    // createUserWithEmailAndPassword( auth,values.email,values.password).then((user)=>{
    //   console.log("User Id",user.user.uid);
    //   const register_user_ref= ref(storage,`regiter_user/${user.user.uid}`);
    //   uploadBytes(register_user_ref,  values.dragger[0].originFileObj).then(()=>{
    //     console.log("User Image is Uploaded");
        
    //     getDownloadURL(register_user_ref)
    //     .then((url)=>{console.log("Url mil gaya ",url);
    //         // updated Object
    //       register_info.image = url;
    //        // Created User Doc Reference
    //       const register_user_ref= doc(db,"regiter_user",user.user.uid)
    //       // set thid Doc to Db
    //       setDoc(register_user_ref,register_info).then(()=>{
    //         console.log("User Object Updated into db");
           
            
    //       })
           



      //   })
      //   .catch(error => console.log("Image Url Nhi Mil raha",error))
      // })
      // .catch(()=>{console.log("Eror in uploading image");})
      
      
      
      // })
      // .catch((error)=>{alert(error);})
      // console.log(register_info);
    
    
  };
  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>
    </Form.Item>
  );
  const suffixSelector = (
    <Form.Item name="suffix" noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
        <Option value="USD">$</Option>
        <Option value="CNY">¥</Option>
      </Select>
    </Form.Item>
  );
  const [autoCompleteResult, setAutoCompleteResult] = useState([]);
  const onWebsiteChange = (value) => {
    if (!value) {
      setAutoCompleteResult([]);
    } else {
      setAutoCompleteResult(['.com', '.org', '.net'].map((domain) => `${value}${domain}`));
    }
  };
  const websiteOptions = autoCompleteResult.map((website) => ({
    label: website,
    value: website,
  }));
  return (
    <Form
      {...formItemLayout}
      form={form}
      name="register"
      onFinish={onFinish}
      initialValues={{
        residence: ['zhejiang', 'hangzhou', 'xihu'],
        prefix: '86',
      }}
      style={{
        maxWidth: 1000,
        marginTop:200,
      }}
      scrollToFirstError
    >
      <Form.Item
        name="displayName"
        label="UserName"
        rules={[
          {
            required: true,
            message: 'Please input your UserName!',
            whitespace: true,
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="email"
        label="E-mail"
        rules={[
          {
            type: 'email',
            message: 'The input is not valid E-mail!',
          },
          {
            required: true,
            message: 'Please input your E-mail!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="password"
        label="Password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
        hasFeedback
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="confrmpasword"
        label="Confirm Password"
        dependencies={['password']}
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Please confirm your password!',
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error('The new password that you entered do not match!'));
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item
        name="gender"
        label="Gender"
        rules={[
          {
            required: true,
            message: 'Please select gender!',
          },
        ]}
      >
        <Select placeholder="select your gender">
          <Option value="male">Male</Option>
          <Option value="female">Female</Option>
          <Option value="other">Other</Option>
        </Select>
      </Form.Item>

      <Form.Item label="Upload" valuePropName="fileList" getValueFromEvent={normFile}>
          <Upload  listType="picture-card">
            <button style={{ border: 0, background: 'none' }} type="button">
              <PlusOutlined />
              <div style={{ marginTop: 8 }}>Upload</div>
            </button>
          </Upload>
        </Form.Item>
      
      {/* <Form.Item label="Dragger">
      <Form.Item name="photoURL" valuePropName="fileList" getValueFromEvent={normFile} noStyle>
        <Upload.Dragger name="files" >
          <p className="ant-upload-drag-icon">
            <InboxOutlined />
          </p>
          <p className="ant-upload-text">Click or drag file to this area to upload</p>
          <p className="ant-upload-hint">Support for a single or bulk upload.</p>
        </Upload.Dragger>
      </Form.Item>
      </Form.Item> */}
      

     

      

      <Form.Item
        name="agreement"
        valuePropName="checked"
        rules={[
          {
            validator: (_, value) =>
              value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
          },
        ]}
        {...tailFormItemLayout}
      >
        <Checkbox>
          I have read the <a href="">agreement</a>
        </Checkbox>
      </Form.Item>
      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit">
          Register
        </Button>
      </Form.Item>
    </Form>
  );
};
export default SignUp;