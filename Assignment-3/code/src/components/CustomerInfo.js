import "./CustomerInfo.css";
import React from 'react'

export default function customerInfo(props) {
    return (
        <div>
            <div className='customer-info'>
                <div>
                    <p><b>Appointment </b>{props.Appointment}</p>
                    <p><b>Email:</b> {props.Email}</p>
                    <p><b>Phone</b>{props.phone}</p>
                </div>
            </div>
        </div>
    )
}
