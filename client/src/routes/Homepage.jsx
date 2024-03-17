import axios from 'axios'
import { useState } from 'react'
import Modal from '../Components/Modal/Modal.jsx'

//application/vnd.openxmlformats-officedocument.spreadsheetml.sheet is used for excel files 2007 and after

export default function Homepage() {
    const [placeholder, setPlaceholder] = useState({})

    return (
        <>
            <h1>HomePage</h1>
            <input type="file" encType="multipart/form-data" name='sheetFile' accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,.csv" 
            onChange={async(e) => {
                const myFile = e.target.files[0]
                const myFormData = new FormData();
                myFormData.append('file', myFile)

                    await axios({
                        url: 'http://localhost:5000/testPost/',
                        method: 'POST',
                        data: myFormData,
                        headers: {
                            'Content-Type': 'mulipart/form-data'
                        }
                    })
                    .then((response) => {
                        console.table(response.data);
                        setPlaceholder(response.data)
                    }).catch(err=>console.log(err));

                }
            }/>
            <p>{JSON.stringify(placeholder)}</p>
            <Modal/>
        </>
    )
}