import React from 'react'
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import style from "../css/home.module.css"


const Cards = ({ title, discription, icon }) => {
    return (
        <Card className={style.caard} style={{ width: '24rem' }}>
            <Card.Body className='text-center text-base/8'>
                <FontAwesomeIcon style={{fontSize:"30px"}} icon={icon} />
                <Card.Title style={{fontSize:"1.6rem"}}>{title}</Card.Title>
                <Card.Text >
                    {discription}
                </Card.Text>
            </Card.Body>
        </Card >
    )
}

export default Cards