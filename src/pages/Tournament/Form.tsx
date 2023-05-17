import { useState, Dispatch } from 'react';
import "./Form.css";
import axios from 'axios';


import { FaRegCalendarAlt } from "react-icons/fa";
import { TbMoneybag } from "react-icons/tb";
import TableTennisBat from "../../assets/image/table_tennis.png";

const GOOGLE_SHEET_URL = 'https://sheet.best/api/sheets/5a136b05-106c-4c0b-af16-d5f665029ff8';

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

    const [submissionSuccess, setSubmissionSuccess] = useState(false);

    const handleSubmit = (event: any) => {
        event.preventDefault();
        const participantData = {
            name: name,
            company: company,
            mobileNumber: mobileNumber
        };

        axios.post(GOOGLE_SHEET_URL, participantData)
            .then((response) => {
                console.log('Congratulations, you have been !', response);
                setSubmissionSuccess(true);
            })
            .catch((error) => {
                console.error('Opps, looks like something went wrong! Please resubmit.', error);
            });
    };

    return (
        <div
            className="bg-[#00639F] px-8 py-6 relative rounded-xl w-full md:w-2/5 mx-4 tracking-wide m-auto"
            style={{ filter: "drop-shadow(5px 10px 4px rgba(0, 0, 0, .4))", fontFamily: "Poppins" }}>
            <div className="mb-4">
                <h1 className="text-xl mb-1 uppercase tracking-widest font-semibold">Table Tennis Tournament</h1>
                <h2 className="text-sm font-md tracking-wide text-white/60">Registration Form</h2>

                <div className="text-xs mt-5 m-auto ml-0 flex">
                    <div className="flex justify-center items-center mr-6">
                        <FaRegCalendarAlt className='mr-2 w-5 h-5' /> Begin : 1st June
                    </div>
                    <div className="flex justify-center items-center">
                        <TbMoneybag className='mr-2 w-5 h-5' /> Fee : NPR. 250 (in cash)
                    </div>
                </div>

            </div>

            <img src={TableTennisBat} className="w-3/6 prevent-select absolute top-[5%] -right-[15%] transform -translate-x-0 -translate-y-1/2" style={{ filter: "drop-shadow(5px 10px 4px rgba(0, 0, 0, .35))" }} />

            <hr className="mb-6 border-white/60" />

            {
                submissionSuccess ?
                    <div>
                        <h3 className='font-bold'>Congratulations! </h3>
                        <p className='mt-2 text-sm'>You participation detail has been added to the database.</p>

                        <h3 className='mt-10 text-sm font-bold'>Details for the competition</h3>
                        <p className='mt-2 text-sm'>- On game day, equipment will be provided, but you are welcome to bring your own bat.</p>
                        <p className='mt-2 text-sm'>- This same website will include the date of the match as well as your opponent.</p>
                        <p className='mt-2 text-sm'>- Failure for an appearance on game day will result in immediate disqualification.</p>
                    </div> 
                :
                    <form onSubmit={handleSubmit}>
                        <>
                            {createTextInput("text", "Name", "Harry Maguire", name, setName)}
                            {createTextInput("text", "Company", "Bhoos", company, setCompany)}
                            {createTextInput("number", "Mobile Number", "98########", mobileNumber, setMobileNumber)}
                        </>

                        <div className="flex justify-center">
                            <button type="submit" className="mt-4 bg-lime-400 text-[#00639F] font-bold px-5 prevent-select">Submit</button>
                        </div>

                    </form>
            }
        </div>
    );
}

export default Form;
