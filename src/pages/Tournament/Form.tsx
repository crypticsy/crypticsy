import React, { useState, Dispatch } from 'react';
import TableTennisBat from "../../assets/image/table_tennis.png";


function createTextInput(type: string, title: string, placeholder: string, data: string, func: Dispatch<string>) {
    return (
        <label className="block mb-4">
            <span className="block text-xs mb-1.5 font-medium text-white after:content-['*'] after:ml-0.5 after:text-red-500">{title}</span>
            <input
                type={type}
                placeholder={placeholder}
                name={title}
                value={data}
                onChange={(event) => func(event.target.value)}
                required
                className="text-white mt-1 block w-full px-3 py-2 bg-transparent border border-white/40 rounded-md text-sm shadow-sm placeholder-slate-300/50 focus:outline-none focus:border-white/60 focus:ring-1 focus:ring-white/60" />
        </label>)
}

function Form() {
    const [name, setName] = useState('');
    const [company, setCompany] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');

    const handleSubmit = (event: any) => {
        event.preventDefault();
        const data = {
            name,
            company,
            mobileNumber
        };
        fetch('https://sheets.googleapis.com/v4/spreadsheets/YOUR_SPREADSHEET_ID/values/Sheet1!A1:C1:append?valueInputOption=USER_ENTERED', {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer YOUR_API_KEY',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                range: 'Sheet1!A1:C1',
                majorDimension: 'ROWS',
                values: [Object.values(data)],
            }),
        })
            .then((response) => {
                if (response.ok) {
                    console.log('Data added to Google Sheets successfully');
                } else {
                    console.error('Error adding data to Google Sheets');
                }
            })
            .catch((error) => {
                console.error('Error adding data to Google Sheets:', error);
            });
    };

    return (
        <div
            className="bg-[#00639F] px-8 py-6 relative rounded-xl w-full md:w-2/5 mx-4 tracking-wide m-auto"
            style={{ filter: "drop-shadow(5px 10px 4px rgba(0, 0, 0, .4))", fontFamily: "Poppins" }}>
            <div className="mb-4">
                <h1 className="text-xl mb-1 uppercase tracking-widest font-semibold">Table Tennis Tournament</h1>
                <h2 className="text-sm font-md tracking-wide">Registration Form</h2>

                <p className="mt-6 font-light text-xs text-slate-50">
                    Each of the participant must pay an amount of <span className='font-semibold'>NPR. 250 (in cash)</span>
                </p>

            </div>

            <img src={TableTennisBat} className="w-3/6 prevent-select absolute top-[5%] -right-[15%] transform -translate-x-0 -translate-y-1/2" style={{ filter: "drop-shadow(5px 10px 4px rgba(0, 0, 0, .35))" }} />

            <hr className="mb-6 border-white/60" />

            <form onSubmit={handleSubmit}>
                <>
                    {createTextInput("text", "Name", "Harry Maguire", name, setName)}
                    {createTextInput("text", "Company", "Bhoos", company, setCompany)}
                    {createTextInput("number", "Mobile Number", "98########", mobileNumber, setMobileNumber)}
                </>

                <div className="flex">
                    <div className="text-xs mt-4 m-auto ml-0 flex">
                        <div className="pt-2">

                        </div>
                    </div>

                    <button type="submit" className="mt-4 bg-lime-400 text-[#00639F] font-bold px-5 prevent-select">Submit</button>
                </div>

            </form>
        </div>
    );
}

export default Form;
