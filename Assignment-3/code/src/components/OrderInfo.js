import "./OrderInfo.css"
import React from 'react'

export default function OrderInfo(props) {
    return (
        <div>
            <div className='order-info'>
                <div>
                    <p>
                        <b>Status</b>
                    </p>
                    <li>{props.Status}</li>
                </div>
                <div>
                    <p>
                        <b>Door</b>
                    </p>
                    <p>
                        {props.Door}
                    </p>
                </div>
                <div>
                    <p>
                        <b>Time</b>
                    </p>
                    <p>
                        <b>{props.Time}</b>
                        {props.date}
                    </p>
                </div>
            </div>
        </div>
    )
}
