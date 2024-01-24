import React from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const LoginModal = ({ show, onClose }) => {
    return (
        <Modal show={show} onHide={onClose}>
            <Modal.Header closeButton>
                <Modal.Title>登入</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <input type="text" placeholder="帳號" />
                <input type="password" placeholder="密碼" />
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onClose}>
                    關閉
                </Button>
                <Button variant="primary">
                    登入
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default LoginModal;
