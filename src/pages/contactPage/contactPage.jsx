import React, { useState } from 'react';
import photo from '../../assets/photos/sec3.svg';
import Container from '../../components/atoms/container';
import ContactPageStyled, { ContactText, Form, LeftSide, RightSide } from './contactPage.styled';
import { Input, Text, UploadFile, UploadFileWrapper } from '../sendCvPage/sendCvPage.styled';
import IconWithBackground from '../../components/atoms/iconWithBackground';
import FileIcon from '../../assets/icon/FileIcon';
import Button from '../../components/atoms/button';
import Modal from '../../components/atoms/modal';

const ContactPage = () => {
  const [file, setFile] = useState(null);
  const [modalShow, setModalShow] = useState(false);

  const handleUpload = event => {
    setFile(event.target.files[0]);
  };
  const handleSendForm = event => {
    event.preventDefault();
    setModalShow(true);
    console.log(file);
  };

  return (
    <Container>
      <ContactPageStyled>
        <LeftSide>
          <h1>Contact us</h1>
          <ContactText>
            Let's talk about your idea – fill out the form on the right and we'll get back to you
            shortly. We can't wait to start working with you!
          </ContactText>
          <h2>Fill out the form</h2>
          <Form action="">
            <Input type="text" placeholder="Full name" className="name-input" />
            <Input type="email" placeholder="Email address" className="email-input" />
            <h2>Upload CV</h2>
            <UploadFileWrapper>
              <UploadFile htmlFor="uploadCv">
                <IconWithBackground src={<FileIcon />} hovered size={'md'} />
                <Text>
                  <h4>Add File</h4>
                  <h6>{file ? file.name : 'File Name'}</h6>
                </Text>
                <input
                  type="file"
                  id="uploadCv"
                  style={{ display: 'none' }}
                  // value={file}
                  onChange={handleUpload}
                />
              </UploadFile>
              <Button type="submit" onClick={handleSendForm}>
                Send Message
              </Button>
            </UploadFileWrapper>
          </Form>
        </LeftSide>
        <RightSide>
          <img src={photo} alt="any" />
        </RightSide>
      </ContactPageStyled>
      <Modal show={modalShow} onHide={() => setModalShow(false)} done />
    </Container>
  );
};

export default ContactPage;
