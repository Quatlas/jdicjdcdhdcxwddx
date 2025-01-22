import React, { useEffect, useState, useRef } from 'react'
import LoadingBar from 'react-top-loading-bar';
import Header from './Header';
import Developer from './Developer';

const RecruitData = () => {
    const loadingBarRef = useRef(null);
    const [dates, setDates] = useState([]);
    const [result, setResult] = useState([]);
    const [err, setErr] = useState('');
    const [suc, setSuc] = useState('');
    const style = {
        backgroundColor: '#e6e6fa',
        minHeight: "100vh",
    };
    useEffect(() => {
        const getDates = async () => {
            loadingBarRef.current.continuousStart();
            try {
                const url = process.env.REACT_APP_ENDPOINT07;
                const getResponse = await fetch(url, {
                    method: "GET",
                    headers: {
                        'Content-type': 'application/json'
                    },
                })
                if (getResponse.ok) {
                    const getData = await getResponse.json();
                    setDates(getData[getData.length - 1]);
                }
                else {
                    const getData = await getResponse.json();
                    setErr(getData.msg);
                }
                loadingBarRef.current.complete();
            } catch (error) {
                loadingBarRef.current.complete();
                setErr(error);
                setSuc('');
            } finally {
                loadingBarRef.current.complete();
            }
        }
        getDates();
    }, []);
    const addDates = async () => {
        const date = prompt("Enter date : ");
        const time = prompt("Enter time : ");
        const formLink = prompt("Enter form link : ");
        const project = prompt("Enter project deadline date : ");
        const result = prompt("Enter result link : ");
        loadingBarRef.current.continuousStart();
        try {
            const url = process.env.REACT_APP_ENDPOINT08;
            const addResponse = await fetch(url, {
                method: "POST",
                headers: {
                    'Content-type': 'application/json',
                    "Authorization": `Bearer ${sessionStorage.getItem('token')}`
                },
                body: JSON.stringify({
                    "date": date,
                    "time": time,
                    "formLink": formLink,
                    "project": project,
                    "result": result
                })
            });
            if (addResponse.ok) {
                const addData = await addResponse.json();
                setSuc(addData.msg);
                setErr('');
                loadingBarRef.current.complete();
            }
            else {
                const addData = await addResponse.json();
                setErr(addData.msg);
                setSuc('');
                loadingBarRef.current.complete();
            }
        } catch (error) {
            setErr('error');
            setSuc('');
            loadingBarRef.current.complete();
        } finally {
            loadingBarRef.current.complete();
        }
    }
    const deleteDate = async (id) => {
        loadingBarRef.current.continuousStart();
        try {
            const url = `${process.env.REACT_APP_ENDPOINT09}/${id}`;
            const deleteResponse = await fetch(url, {
                method: "DELETE",
                headers: {
                    'Content-type': 'application/json',
                    "Authorization": `Bearer ${sessionStorage.getItem('token')}`
                },
            });
            const deleteData = await deleteResponse.json();
            setSuc(deleteData.msg);
            loadingBarRef.current.complete();
            setErr('');
        } catch (error) {
            setSuc('');
            setErr('');
            loadingBarRef.current.complete();
        } finally {
            loadingBarRef.current.complete();
        }
    }

    const updateDate = async (id) => {
        const date = prompt("Enter date : ");
        const time = prompt("Enter time : ");
        const formLink = prompt("Enter form link : ");
        const project = prompt("Enter project deadline date : ");
        const result = prompt("Enter result link : ");
        let inputFields = {}
        if (date) inputFields.date = date;
        if (time) inputFields.time = time;
        if (formLink) inputFields.formLink = formLink;
        if (project) inputFields.project = project;
        if (result) inputFields.result = result;
        if (Object.keys(inputFields).length === 0) {
            setErr("No updates provided");
            setSuc('');
            return;
        };
        loadingBarRef.current.continuousStart();
        try {
            const url = `${process.env.REACT_APP_ENDPOINT10}/${id}`;
            const updateResponse = await fetch(url, {
                method: "PUT",
                headers: {
                    'Content-type': 'application/json',
                    "Authorization": `Bearer ${sessionStorage.getItem('token')}`
                },
                body: JSON.stringify(inputFields)
            });
            if (updateResponse.ok) {
                const addData = await updateResponse.json();
                setSuc(addData.msg);
                setErr('');
                loadingBarRef.current.complete();
            }
            else {
                const addData = await updateResponse.json();
                setErr(addData.msg);
                setSuc('');
                loadingBarRef.current.complete();
            }
        } catch (error) {
            setErr('error');
            setSuc('');
            loadingBarRef.current.complete();
        } finally {
            loadingBarRef.current.complete();
        }
    }

    useEffect(() => {
        const getResults = async () => {
            loadingBarRef.current.continuousStart();
            try {
                const url = 'https://quatlasserver.vercel.app/api/results/getStudents';
                const resultResponse = await fetch(url, {
                    method: "GET",
                    headers: {
                        'Content-type': 'application/json'
                    },
                });
                const resultData = await resultResponse.json();
                loadingBarRef.current.complete();
                setResult(resultData.list);
            } catch (error) {
                setErr(error);
                setSuc('');
            }
        }
        getResults();
    }, []);

    const addResults = async () => {
        loadingBarRef.current.continuousStart();
        const name = prompt("Enter name : ");
        const usn = prompt("Enter usn : ");
        const status = prompt("Enter status : ");
        const role = prompt("Enter role : ");
        const score = prompt("Enter score : ");
        try {
            const url = 'https://quatlasserver.vercel.app/api/results/addStudents';
            const addResponse = await fetch(url, {
                method: "POST",
                headers: {
                    'Content-type': 'application/json',
                    "Authorization": `Bearer ${sessionStorage.getItem('token')}`
                },
                body: JSON.stringify({
                    "name": name,
                    "usn": usn,
                    "status": status,
                    "role":role,
                    "score":score,
                })
            });
            const addData = await addResponse.json();
            loadingBarRef.current.complete();
            setSuc(addData.msg);
            setErr('');
        } catch (error) {
            setSuc('');
            setErr('');
        }
    }

    const updateResults = async (id) => {
        loadingBarRef.current.continuousStart();
        try {
            const name = prompt("Enter name : ");
            const usn = prompt("Enter usn : ");
            const status = prompt("Enter status : ");
            const role = prompt("Enter role : ");
            const score = prompt("Enter score : ");
            let inputFields = {}
            if (name) inputFields.name = name;
            if (usn) inputFields.usn = usn;
            if (status) inputFields.status = status;
            if (role) inputFields.role = role;
            if (score) inputFields.score = score;
            if (Object.keys(inputFields).length === 0) {
                setErr("No updates provided");
                setSuc('');
                return;
            };
            const url = `https://quatlasserver.vercel.app/api/results/updateStudents/${id}`;
            const updateResponse = await fetch(url, {
                method: "PUT",
                headers: {
                    'Content-type': 'application/json',
                    "Authorization": `Bearer ${sessionStorage.getItem('token')}`
                },
                body: JSON.stringify(inputFields),
            });
            const updateData = await updateResponse.json();
            loadingBarRef.current.complete();
            setSuc(updateData.msg);
            setErr('');
        } catch (error) {
            setSuc('');
            setErr(error);
        }
    }

    const deleteResults = async (id) => {
        loadingBarRef.current.continuousStart();
        try {
            const url = `https://quatlasserver.vercel.app/api/results/deleteStudents/${id}`;
            const deleteResponse = await fetch(url, {
                method: "DELETE",
                headers: {
                    'Content-type': 'application/json',
                    "Authorization": `Bearer ${sessionStorage.getItem('token')}`
                },
            });
            const deleteData = await deleteResponse.json();
            loadingBarRef.current.complete();
            setSuc(deleteData.msg);
            setErr('');
        } catch (error) {
            setSuc('');
            setErr(error);
        }
    }
    return (
        <>
            <div style={style}>
                <LoadingBar color="#1e90ff" ref={loadingBarRef} height={6} />
                <Header title="QUATLAS RECRUITMENT DATA" />
                {err ? (
                    <div class="popup error-popup">
                        <div class="popup-icon error-icon">
                            <svg
                                class="error-svg"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                aria-hidden="true"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                                    clip-rule="evenodd"
                                ></path>
                            </svg>
                        </div>
                        <div class="error-message">{err}</div>
                        <div class="popup-icon close-icon">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                class="close-svg"
                            >
                                <path
                                    d="m15.8333 5.34166-1.175-1.175-4.6583 4.65834-4.65833-4.65834-1.175 1.175 4.65833 4.65834-4.65833 4.6583 1.175 1.175 4.65833-4.6583 4.6583 4.6583 1.175-1.175-4.6583-4.6583z"
                                    class="close-path"
                                ></path>
                            </svg>
                        </div>
                    </div>
                ) : ''}
                {suc ? (
                    <div class="popup success-popup">
                        <div class="popup-icon success-icon">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                class="success-svg"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="m12 1c-6.075 0-11 4.925-11 11s4.925 11 11 11 11-4.925 11-11-4.925-11-11-11zm4.768 9.14c.0878-.1004.1546-.21726.1966-.34383.0419-.12657.0581-.26026.0477-.39319-.0105-.13293-.0475-.26242-.1087-.38085-.0613-.11844-.1456-.22342-.2481-.30879-.1024-.08536-.2209-.14938-.3484-.18828s-.2616-.0519-.3942-.03823c-.1327.01366-.2612.05372-.3782.1178-.1169.06409-.2198.15091-.3027.25537l-4.3 5.159-2.225-2.226c-.1886-.1822-.4412-.283-.7034-.2807s-.51301.1075-.69842.2929-.29058.4362-.29285.6984c-.00228.2622.09851.5148.28067.7034l3 3c.0983.0982.2159.1748.3454.2251.1295.0502.2681.0729.4069.0665.1387-.0063.2747-.0414.3991-.1032.1244-.0617.2347-.1487.3236-.2554z"
                                    clip-rule="evenodd"
                                ></path>
                            </svg>
                        </div>
                        <div class="success-message" style={{ fontWeight: "bold", fontFamily: 'Josefin Sans, sans-serif' }}>{suc}</div>
                        <div class="popup-icon close-icon">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                aria-hidden="true"
                                class="close-svg"
                            >
                                <path
                                    d="m15.8333 5.34166-1.175-1.175-4.6583 4.65834-4.65833-4.65834-1.175 1.175 4.65833 4.65834-4.65833 4.6583 1.175 1.175 4.65833-4.6583 4.6583 4.6583 1.175-1.175-4.6583-4.6583z"
                                    class="close-path"
                                ></path>
                            </svg>
                        </div>
                    </div>
                ) : ''}
                <div className="quatlas-table-container">
                    <div className="welcome">
                        <h2 className="wlc-name">Recruitment Dates</h2>
                        <button className="update" onClick={addDates}>Add</button>
                    </div>
                    <table className="styled-table">
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Time</th>
                                <th>Form Link</th>
                                <th>Project Deadline Time</th>
                                <th>Result Link</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{dates.date}</td>
                                <td>{dates.time}</td>
                                <td>{dates.formLink}</td>
                                <td>{dates.project}</td>
                                <td>{dates.result}</td>
                                <td><button className="update" onClick={() => updateDate(dates._id)}>Update</button></td>
                                <td><button className="update" onClick={() => deleteDate(dates._id)}>Delete</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="quatlas-table-container">
                    <div className="welcome">
                        <h2 className="wlc-name">Results</h2>
                        <button className="update" onClick={addResults}>Add</button>
                    </div>
                    <table className="styled-table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>USN</th>
                                <th>Status</th>
                                <th>Role</th>
                                <th>Score</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Array.isArray(result) && result.length > 0 ? (
                                result.map((res, index) =>
                            <>
                                <tr key={index}>
                                    <td>{res.name}</td>
                                    <td>{res.usn}</td>
                                    <td>{res.status}</td>
                                    <td>{res.role}</td>
                                    <td>{res.score}</td>
                                    <td><button className="update" onClick={() => updateResults(res._id)}>Update</button></td>
                                    <td><button className="update" onClick={() => deleteResults(res._id)}>Delete</button></td>
                                </tr>
                            </>
                            )
                            ) : (
                                <tr>
                                    <td colSpan={5}>No records available!</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
                <Developer/>
            </div >
        </>
    )
}

export default RecruitData
