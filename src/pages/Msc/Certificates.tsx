import { useEffect, useState } from "react";
import { Layout } from "../../template";
import { Footer, onClickURLHandler } from "../Home/components";
import Papa from 'papaparse';
import { PageContentLayout, SubSectionTitle } from "../utils";
import { FiArrowLeft, FiSearch } from "react-icons/fi";
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

export function Certificates() {
    const [csvData, setCSVData] = useState<CSVRow[]>([]);
    const [issuers, setIssuers] = useState<string[]>([]);
    const [searchTerm, setSearchTerm] = useState("");
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
        setIssuers(Array.from(new Set(csvData.filter((row) => row.name && row.name.length !== 0).map((row) => { return row.issued_by }))))
    }, [csvData])

    const filteredData = csvData.filter((row) => {
        if (!searchTerm) return true;
        const searchLower = searchTerm.toLowerCase();
        const nameMatch = row.name?.toLowerCase().includes(searchLower);
        const issuerMatch = row.issued_by?.toLowerCase().includes(searchLower);
        return nameMatch || issuerMatch;
    });

    const filteredIssuers = issuers.filter((issuer) =>
        filteredData.some((row) => row.issued_by === issuer)
    );

    return (
        <Layout>
            <PageContentLayout>
                <div className="mx-8 mt-[5vh] md:mt-[10vh]">
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

                            <div className="flex justify-center pb-12">
                                <div className="relative w-full">
                                    <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                                    <input
                                        type="text"
                                        placeholder="Search by name or issuer..."
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                        className="w-full pl-11 pr-4 py-3 pt-4 bg-slate-800 text-white rounded-md border border-slate-700 focus:outline-none focus:border-sky-500 transition-colors"
                                        style={{ lineHeight: "1.5" }}
                                    />
                                </div>
                            </div>

                            <div className="space-y-8">
                                { filteredIssuers.map((issued_by, iIndex) => (
                                    <div key={iIndex}>
                                        <SubSectionTitle sn={`0${iIndex + 1}.`} title={issued_by} />
                                        <table className="w-full">
                                            <tbody>
                                                <tr>
                                                    <th>&nbsp;</th>
                                                    <th className="text-gray-500 text-right">Issued Date</th>
                                                </tr>

                                                {filteredData.map((row, index) => (
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

                            {filteredIssuers.length === 0 && (
                                <div className="text-center text-gray-400 py-8">
                                    No certificates found matching "{searchTerm}"
                                </div>
                            )}
                        </div>
                    </div>
                    < Footer />
                </div>
            </PageContentLayout>
        </Layout>
    );
}