import React, { useEffect, useState } from 'react';
import SendCvPageStyled, {
  Form,
  Input,
  PhoneInputStyled,
  RightSide,
  Row,
  Text,
  UploadFile,
  UploadFileWrapper,
} from './sendCvPage.styled';
import Container from '../../components/atoms/container';
import 'react-phone-input-2/lib/style.css';
import IconWithBackground from '../../components/atoms/iconWithBackground';
import FileIcon from '../../assets/icon/FileIcon';
import Button from '../../components/atoms/button';
import PositionCart from '../../components/molecules/positionCart';
import { positions } from '../careerPage/mock';
import Modal from '../../components/atoms/modal';

const SendCvPage = ({ match }) => {
  const [phone, setPhone] = useState('374');
  const [file, setFile] = useState(null);
  const [currentJob, setCurrentJob] = useState({});
  const [modalShow, setModalShow] = useState(false);

  useEffect(() => {
    setCurrentJob(positions.filter(item => item.id.toString() === match.params.id)[0]);
  }, [match.params.id]);

  const handleUpload = event => {
    setFile(event.target.files[0]);
  };
  const handleSendForm = event => {
    event.preventDefault();
    setModalShow(true);
    console.log(file);
  };

  if (Object.keys(currentJob).length === 0) {
    return <div>Loader</div>;
  }

  return (
    <SendCvPageStyled>
      <Container>
        <Row>
          <Form action="">
            <h1>Full Stack Developer</h1>
            <Input type="text" placeholder="Full name" className="name-input" />
            <Input type="email" placeholder="Email address" className="email-input" />
            <PhoneInputStyled country={'am'} value={phone} onChange={phone => setPhone(phone)} />
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
                Send CV
              </Button>
            </UploadFileWrapper>
          </Form>
          <RightSide>
            <PositionCart data={currentJob} onClick={() => console.log('asdasd')} />
          </RightSide>
        </Row>
      </Container>
      <Modal show={modalShow} onHide={() => setModalShow(false)} done />
    </SendCvPageStyled>
  );
};

export default SendCvPage;
