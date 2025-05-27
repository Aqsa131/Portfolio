import React from 'react'
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

import Form from 'react-bootstrap/Form';

const Forms = () => {
    return (
        <Form>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <Form.Group style={{ width: "48%" }} className="mb-3" controlId="formBasicName1">
                    <Form.Label>Name</Form.Label>
                    <Form.Control style={{ borderRadius: "0px", height: "50px" }} type="text" placeholder="Name" />
                </Form.Group>

                <Form.Group style={{ width: "48%" }} className="mb-3" controlId="formBasicName2">
                    <Form.Label>Name</Form.Label>
                    <Form.Control style={{ borderRadius: "0px", height: "50px" }} type="text" placeholder="Name" />
                </Form.Group>
            </div>
            <FloatingLabel className='mt-4' controlId="floatingTextarea2" label="Comments">
                <Form.Control
                    as="textarea"
                    placeholder="Leave a comment here"
                    style={{ height: '100px', borderRadius: "0px", }}
                />
            </FloatingLabel>
            <Button style={{borderRadius:"0px", height: "50px", width:"100px", backgroundColor:"gray", border:"none"}} type="button" className='mt-3'>
                Submit
            </Button>
        </Form>

    )
}

export default Forms