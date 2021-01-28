import React from 'react'
import {getCurrentDate} from './utils/getdate'
import Time from 'react-time'


var hours = new Date().getHours();
var min = new Date().getMinutes();


const TimeBox = () => {

    var hours = new Date().getHours();
    var min = new Date().getMinutes();
    return (
        
        <div className='box medium small shadow'>
            <div className='timeContainer row'>
                <div className='timeBox shadow'>
                <h1>{hours.toString()[0]}</h1>
                </div>
                <div className='timeBox shadow'>
                <h1>{hours.toString()[1]}</h1>
                </div>
                <div className='timeBox shadow'>
                <h1>{min.toString()[0]}</h1>
                </div>
                <div className='timeBox shadow'>
                <h1>{min.toString()[1]}</h1>
                </div>
            </div>
            <div className='dateBox shadow'>
            <h1>{getCurrentDate().slice(0,4)+ ' '+getCurrentDate().slice(4,6) + ' ' +getCurrentDate().slice(6,8)}</h1>

            </div>
            
            
        </div>
    )
}

export default TimeBox
