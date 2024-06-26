import './Account.css'
import axios from 'axios'
import { useState } from 'react'

export default function Account() {

    const [placeholder, setPlaceholder] = useState({})

    return (
        <div className='account-wrapper'>
            <input type='file' encType='multipart/form-data' name='sheetFile' accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,.csv" 
            onChange={async(e) => {
                const myFile = e.target.files[0]
                const myFormData = new FormData();
                myFormData.append('file', myFile)

                await axios({
                    url: 'http://localhost:5001/testPost/',
                    method: 'POST',
                    data: myFormData,
                    headers: {
                        'Content-Type': 'mulipart/form-data'
                    }
                })
                .then((response) => {
                    console.table(response.data);
                    setPlaceholder(response.data)
                    console.log(response.data)
                }).catch(err=>console.log(err));

            }}
            />    
            <p>{JSON.stringify(placeholder)}</p>       
        </div>
    )
}