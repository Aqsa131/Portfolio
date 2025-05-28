import React from 'react';
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { useForm } from 'react-hook-form';
import Form from 'react-bootstrap/Form';
import toast,{ Toaster, ToastBar } from 'react-hot-toast';

const Forms = () => {
    const {
        register,
        handleSubmit,
        resetField,
        formState: { errors },
    } = useForm(
        {
            mode: "onChange",
            defaultValues: {
                Name: "",
                Email: "",
                Comments: "",

            },
        }
    );
    <Toaster>
        {(t) => (
            <ToastBar
                toast={t}
                style={{
                    ...t.style,
                    animation: t.visible
                        ? 'custom-enter 1s ease'
                        : 'custom-exit 1s ease forwards',
                }}
            />
        )}
    </Toaster>;
    const onSubmit = (data) => {
        console.log(data);
        // alert("we have recieved your mail")
        toast.success('E-mail Recieved Successfully!')
        resetField("Name")
        resetField("Email")
        resetField("Comments")
    }

    <Toaster
        position="top-center"
        reverseOrder={false}
    />
    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <Form.Group style={{ width: "48%" }} className="mb-3" controlId="formBasicName1">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        style={{ borderRadius: "0px", height: "50px" }}
                        type="text"
                        placeholder="Name"
                        {...register("Name", { required: true })}
                    />
                    {errors.Name && <span style={{ color: 'red' }}>Name is required</span>}
                </Form.Group>

                <Form.Group style={{ width: "48%" }} className="mb-3" controlId="formBasicEmail">
                    <Form.Label>E-mail</Form.Label>
                    <Form.Control
                        style={{ borderRadius: "0px", height: "50px" }}
                        type="email"
                        placeholder="Email"
                        {...register("Email", { required: true })}
                    />
                    {errors.Email && <span style={{ color: 'red' }}>Email is required</span>}
                </Form.Group>
            </div>

            <FloatingLabel className='mt-4' controlId="floatingTextarea2" label="Comments">
                <Form.Control
                    as="textarea"
                    placeholder="Leave a comment here"
                    style={{ height: '100px', borderRadius: "0px" }}
                    {...register("Comments", { required: true })}
                />
                {errors.Comments && <span style={{ color: 'red' }}>Comments are required</span>}
            </FloatingLabel>

            <Button
                style={{ borderRadius: "0px", height: "50px", width: "100px", backgroundColor: "gray", border: "none" }}
                type="submit"
                className='mt-3'
            >
                Submit
            </Button>
            <div><Toaster /></div>
        </Form>
    );
};

export default Forms;
