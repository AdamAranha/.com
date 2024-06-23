import './Accounts.css'

const pushURL = process.env.NODE_ENV == 'development' ? 'http://localhost:5001/budgettracker/push' : 'https://adamaranha.com/budgettracker/push'
const pullURL = process.env.NODE_ENV == 'development' ? 'http://localhost:5001/budgettracker/pull' : 'https://adamaranha.com/budgettracker/pull'

const isMobile = () => window.innerWidth <= 600


export default function Accounts() {

    console.log( process.env.NODE_ENV)

    return (

        <div className='accounts-body'>
            {/* <h1>Accounts</h1>
            <button onClick={async() => {
                await fetch(pullURL, {
                    method: 'GET',
 
                })
                .then(r => r.json())
                .then(r => console.log(r))
            }}>Click to submit to DB</button>

            <form action='' method='post' onSubmit={async(e) => {
                e.preventDefault()
                const username = document.getElementById('username').value
                const password = document.getElementById('password').value

                await fetch(pushURL, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({username, password})
                }).then(r => r.json())
                .then(r => console.log(r))

            }}>
                <label htmlFor='username'>Username</label><br/>
                <input type='text' id='username' name='username' required/>
                <label htmlFor='password'>Password</label>
                <input type='text' id='password' name='password' required/>
                <input type='submit' value='Submit'/>
            </form> */}
            <div className='accounts-header'>
                <h1 className='accounts-header-title'>All Accounts</h1>
            </div>

            <div className='accounts-balance'>
                <div className='accounts-cleared-balance'>
                <h2>3134</h2>
                <p>Cleared Balance</p>
                </div>
            <div className='accounts-uncleared-balance'>
                <h2>-1325</h2>
                <p>Uncleared Balance</p>
            </div>
                <div className='accounts-working-balance'>
                    <h2>=2235</h2>
                    <p>Working Balance</p>
                </div>
            </div>

            <div className='accounts-actions'>
                <div className='accounts-actions-add-transaction'></div>
                <div className='accounts-actions-file-import'></div>
                <div className='accounts-actions-undo'></div>
                <div className='accounts-actions-redo'></div>
                <div className='accounts-actions-view'></div>
                <div className='accounts-actions-search'></div>
            </div>
            <div className='accounts-items'>
                <div className='accounts-items-label'>
                </div>                    
                <table>
                    <caption>You're a bitch, lil bitch boy</caption>
                    <thead>
                        <tr>
                            <th className='accounts-col flag' scope='col'>flag</th>
                            <th className='accounts-col payee' scope='col'>payee</th>
                            <th className='accounts-col inflow' scope='col'>inflow</th>
                            <th className='accounts-col outflow' scope='col'>outflow</th>
                            {
                                isMobile() ? '' : 
                                <>
                                    <th className='accounts-col account' scope='col'>account</th>
                                    <th className='accounts-col date' scope='col'>date</th>
                                    <th className='accounts-col category' scope='col'>category</th>
                                    <th className='accounts-col memo' scope='col'>memo</th>
                                    <th className='accounts-col cleared' scope='col'>cleared</th>
                                </>
                            }                
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>no</td>
                            <td>scotia</td>
                            <td>-$10.00</td>
                            <td>0</td>
                            {
                                isMobile() ? '' : 
                                <>   
                                    <td>scotiabank</td>                         
                                    <td>11/11/1996</td>
                                    <td>frivilous</td>
                                    <td>stop spending money</td>
                                    <td>not cleared</td>
                                </>
                            }       
                        </tr>
                    </tbody>
                </table>

            </div>
        </div>
    )
}