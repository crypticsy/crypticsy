import { useEffect, useState } from "react";
import { Layout } from "../../template";
import { Footer, LeftSocials, RightSocials, onClickURLHandler } from "../Home/components";
import Papa from 'papaparse';
import { SubSectionTitle } from "../utils";
import { FiArrowLeft } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

interface CSVRow {
    name: string;
    issued_by: string;
    issued_date: Date;
    expiry_date: Date;
    credential_url: string;
}

function formatDate(date: Date) {
    const splitDate = date.toString().split('/').map(Number)
    const newDate = new Date(splitDate[2], splitDate[1]-1, splitDate[0]);
    const day = newDate.getDate();
    const month = newDate.toLocaleString('default', { month: 'long' });
    const year = newDate.getFullYear();
  
    return `${month} ${day}, ${year}`;
  };
  
const iIndex = 0
const issued_by = "Coursera"

export function Certificates() {
    const [csvData, setCSVData] = useState<CSVRow[]>([]);
    const [issuers, setIssuers] = useState<string[]>([]);
    const navigate = useNavigate();

    useEffect(() => {
        Papa.parse('../../../certifications/certificates.csv', {
            download: true,
            header: true,
            complete: (result) => {
                setCSVData(result.data as CSVRow[]);
            },
        });
    }, []);

    useEffect(()=>{
        setIssuers(Array.from(new Set(csvData.filter((row) => row.name.length !== 0).map((row) => { return row.issued_by }))))
    }, [csvData])

    return (
        <Layout>
            <div className="mx-8 mt-[10vh]">
                <LeftSocials/>
                <RightSocials/>

                <div className="flex justify-center">
                    <div className="w-full max-w-5xl">
                        <div className="flex items-center justify-center relative mb-16">
                            <button
                                onClick={() => navigate('/')}
                                className="absolute left-0 mt-8 text-gray-400 hover:text-sky-400 transition-colors cursor-pointer flex items-center gap-2 group border-none bg-transparent"
                                aria-label="Back to home"
                            >
                                <FiArrowLeft className="w-5 h-5" />
                                <span className="hidden md:inline text-sm sfmono-reg">Back</span>
                            </button>
                            <h1 className="mt-8 text-[1.4rem] md:text-[2.5rem] text-center" >Certifications</h1>
                        </div>
                        <div className="space-y-8">
                            { issuers.map((issued_by, iIndex) => (
                                <div key={iIndex}>
                                    <SubSectionTitle sn={`0${iIndex + 1}.`} title={issued_by} />
                                    <table className="w-full">
                                        <tbody>
                                            <tr>
                                                <th>&nbsp;</th>
                                                <th className="text-gray-500 text-right">Issued Date</th>
                                            </tr>

                                            {csvData.map((row, index) => (
                                                row.name && (row.issued_by === issued_by) && (
                                                    <tr 
                                                        key={index} className="hover:bg-gray-700/50 transition-all ease-in-out cursor-pointer hover-underline-animation-parent"
                                                        onClick={()=>onClickURLHandler(row.credential_url)}
                                                    >
                                                        <td className="p-3 pr-4 md:pr-10 rounded-l-md">
                                                            <a className='text-sky-400 hover:text-sky-400 hover-underline-animation'>
                                                                {row.name}
                                                            </a>
                                                        </td>
                                                        <td className="text-gray-400 text-right rounded-r-md pr-2">{formatDate(row.issued_date)}</td>
                                                    </tr>
                                                )
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                < Footer />
            </div>
        </Layout>
    );
}