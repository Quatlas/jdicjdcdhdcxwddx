import React, { useEffect, useState,useRef } from 'react'
import Header from './Header';
import { useNavigate } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';
import Developer from './Developer';

const Data = () => {
    const navigate = useNavigate();
    const loadingBarRef = useRef(null);
    const [dashName, setDashname] = useState('');
    const [err, setErr] = useState('');
    const [suc, setSuc] = useState('');
    const [team, setTeam] = useState([]);
    const [teamHead, setTeamhead] = useState([]);
    const [tech, setTech] = useState([]);
    const [conceptual, setConceptual] = useState([]);
    const [ntech, setNtech] = useState([]);
    const [temp, setTemp] = useState([]);
    const [alumini, setAlumini] = useState([]);
    const [gallery, setGallery] = useState([]);
    const [addname, setAddname] = useState('');
    const [addrole, setAddrole] = useState('');
    const [addimage, setAddimage] = useState('');
    const [user, setUser] = useState('');
    const [addlinkedin, setAddlinkeidn] = useState('');
    const style = {
        backgroundColor: '#e6e6fa',
        minHeight: "100vh",
    };
    useEffect(() => {
        const dash = async () => {
            loadingBarRef.current.continuousStart();
            try {
                const dashUrl = process.env.REACT_APP_ENDPOINT02;
                const dashResponse = await fetch(dashUrl, {
                    method: "GET",
                    headers: {
                        "Content-type": "application/json",
                        "Authorization": `Bearer ${sessionStorage.getItem('token')}`
                    },
                });
                if (dashResponse.ok) {
                    const dashData = await dashResponse.json();
                    loadingBarRef.current.complete();
                    let name = dashData.username;
                    sessionStorage.setItem('name', name);
                    setUser(name);
                    setDashname("WELCOME " + name.toUpperCase());
                    setSuc('Successfully received the data. Update or add any changes as needed.')
                    setErr('');
                } else {
                    const dashData = await dashResponse.json();
                    const jwt = dashData.error;
                    loadingBarRef.current.complete();
                    setErr(jwt.toUpperCase() + " : SIGN IN AGAIN");
                    setSuc('');
                }
            } catch (error) {
                setErr(error);
                loadingBarRef.current.complete();
            }
        }
        dash();
    }, [])
    useEffect(() => {
        const fetchNotes = async (e) => {
            loadingBarRef.current.continuousStart();
            try {
                const url = process.env.REACT_APP_ENDPOINT01;
                const addedResponse = await fetch(url, {
                    method: "GET",
                    headers: {
                        "Content-type": "application/json",
                    }
                });
                if (!addedResponse.ok) {
                    setErr('Internal server error try logging again');
                    setSuc('');
                }
                if (sessionStorage.token) {
                    const addedData = await addedResponse.json();
                    loadingBarRef.current.complete();
                    setTeam(addedData[addedData.length - 1].teamInfo);
                    setTeamhead(addedData[addedData.length - 1].teamInfo[0].details);
                    setTech(addedData[addedData.length - 1].teamInfo[1].details);
                    setConceptual(addedData[addedData.length - 1].teamInfo[2].details);
                    setNtech(addedData[addedData.length - 1].teamInfo[3].details);
                    setAlumini(addedData[addedData.length - 1].teamInfo[4].details);
                    setGallery(addedData[addedData.length - 1].teamInfo[5].details);
                }
                else{
                    setErr('Unauthorized access login again');
                    setSuc('');
                    loadingBarRef.current.complete();
                }

            } catch (error) {
                setErr('Internal server error try logging again');
                setSuc('');
                loadingBarRef.current.complete();
            }
        }
        fetchNotes();
    }, []);

    const updateTeamInfo = async (id, namemax) => {
        loadingBarRef.current.continuousStart();
        try {
            const name = prompt("enter name : ");
            const role = prompt("enter role : ");
            const img = prompt("enter image link : ");
            const linkedin = prompt("enter linkedin link : ");
            const updateFields = {};
            if (name) updateFields.name = name;
            if (role) updateFields.role = role;
            if (img) updateFields.img = img;
            if (linkedin) updateFields.linkedin = linkedin;
            if (Object.keys(updateFields).length === 0) {
                setErr("No updates provided");
                setSuc('');
                return;
            };

            const url = `${process.env.REACT_APP_ENDPOINT03}/${id}`;
            const updatedResponse = await fetch(url, {
                method: "PUT",
                headers: {
                    'Content-type': 'application/json',
                    "Authorization": `Bearer ${sessionStorage.getItem('token')}`
                },
                body: JSON.stringify(updateFields)
            });
            if (!updatedResponse.ok) {
                setErr('Internal server error try logging again');
                setSuc('');
            }
            const updatedData = await updatedResponse.json();
            loadingBarRef.current.complete();
            setSuc(`Successfully updated ${user},${name} data has been updated. Please refresh the page to see the changes`);
            setErr('');
        } catch (error) {
            setErr(error);
            setSuc('');
            loadingBarRef.current.complete();
        }
    }
    const deleteTeamInfo = async (id, name) => {
        loadingBarRef.current.continuousStart();
        try {
            const url = `${process.env.REACT_APP_ENDPOINT04}/${id}`;
            const deletedResponse = await fetch(url, {
                method: "DELETE",
                headers: {
                    "Content-type": "application/json",
                    "Authorization": `Bearer ${sessionStorage.getItem('token')}`
                }
            });
            if (!deletedResponse.ok) {
                setErr('Internal server error try logging again');
                setSuc('');
            }
            const deletedData = await deletedResponse.json();
            loadingBarRef.current.complete();
            setSuc(`Successfully deleted ${name} data`);
            setErr('');
        } catch (error) {
            setErr(error);
            setSuc('');
            loadingBarRef.current.complete();
        }
    }
    const selectedChange = (e) => {
        setTemp(e.target.value);
    }
    const addNote = async (e) => {
        e.preventDefault();
        loadingBarRef.current.continuousStart();
        try {
            const url = `${process.env.REACT_APP_ENDPOINT05}/${temp}`;
            const addedResponse = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                    "Authorization": `Bearer ${sessionStorage.getItem('token')}`
                },
                body: JSON.stringify({
                    "name": addname,
                    "role": addrole,
                    "img": addimage,
                    "linkedin": addlinkedin
                })
            });
            if (!addedResponse.ok) {
                setErr('Internal server error try logging again');
                setSuc('');
            }
            const addedData = await addedResponse.json();
            loadingBarRef.current.complete();
            setSuc(`Successfully added ${addname} to teamInfo data`);
            setErr('');
            setAddname('');
            setAddrole('');
            setAddimage('');
            setAddlinkeidn('');
        } catch (error) {
            setErr(error);
            setSuc('');
            loadingBarRef.current.complete();
        }
    };
    const logout = () => {
        loadingBarRef.current.complete();
        sessionStorage.removeItem('token');
        sessionStorage.removeItem('name');
        navigate("/login");
    }
    const recruit = () => {
        navigate("/recruitmentData");
    }
    return (
        <>
            <div style={style}>
            <LoadingBar color="#1e90ff" ref={loadingBarRef} height={3} /> 
                <Header title="QUATLAS DASHBOARD" />
                <div className="welcome">
                    <h2 className="wlc-name">{dashName}</h2>
                    <button className="update" onClick={recruit}>Recruitment Datas</button>
                    <button className="update" onClick={logout}>Logout</button>
                </div>
                <div class="popup-container-pop">
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
                </div>
                <form action="" class='addNote' onSubmit={addNote}>
                    <select name="" id="" className='drop' onChange={selectedChange}>
                        {team.map((details, index) =>
                            <option value={details._id} key={index}>{details.teamHeads}</option>
                        )}
                    </select>
                    <input type="text" class="log" required="" placeholder='Enter name' value={addname} onChange={(e) => setAddname(e.target.value)} />
                    <input type="text" class="log" required="" placeholder='Enter role' value={addrole} onChange={(e) => setAddrole(e.target.value)} />
                    <input type="text" class="log" required="" placeholder='Enter image link' value={addimage} onChange={(e) => setAddimage(e.target.value)} />
                    <input type="text" class="log" required="" placeholder='Enter linkedIn link' value={addlinkedin} onChange={(e) => setAddlinkeidn(e.target.value)} />
                    <button class="signin">Submit</button>
                </form>
                <div class="quatlas-table-container">
                    <h2 className="wlc-name">Captain And Vice Captain</h2>
                    <table class="styled-table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Role</th>
                                <th>Image Link</th>
                                <th>Linkedin Link</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {teamHead.length > 0 ? (
                                teamHead.map((head, index) =>
                                    <tr key={index}>
                                        <td>{head.name}</td>
                                        <td>{head.role}</td>
                                        <td>{head.img}</td>
                                        <td>{head.linkedin}</td>
                                        <td><button className="update" onClick={() => updateTeamInfo(head._id, head.name)}>Update</button></td>
                                        <td><button className="update" onClick={() => deleteTeamInfo(head._id, head.name)}>Delete</button></td>
                                    </tr>
                                )
                            ) : (
                                <tr>
                                    <td colSpan="6" style={{ textAlign: "center" }}>No record available</td>
                                </tr>
                            )
                            }
                        </tbody>
                    </table>
                </div>
                <div class="quatlas-table-container">
                    <h2 className="wlc-name">Technical Team</h2>
                    <table class="styled-table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Role</th>
                                <th>Image Link</th>
                                <th>Linkedin Link</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tech.length > 0 ? (
                                tech.map((head, index) =>
                                    <tr key={index}>
                                        <td>{head.name}</td>
                                        <td>{head.role}</td>
                                        <td>{head.img}</td>
                                        <td>{head.linkedin}</td>
                                        <td><button className="update" onClick={() => updateTeamInfo(head._id, head.name)}>Update</button></td>
                                        <td><button className="update" onClick={() => deleteTeamInfo(head._id, head.name)}>Delete</button></td>
                                    </tr>
                                )
                            ) : (
                                <tr>
                                    <td colSpan="6" style={{ textAlign: "center" }}>No record available</td>
                                </tr>
                            )
                            }
                        </tbody>
                    </table>
                </div>
                <div class="quatlas-table-container">
                    <h2 className="wlc-name">Conceptual Team</h2>
                    <table class="styled-table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Role</th>
                                <th>Image Link</th>
                                <th>Linkedin Link</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {conceptual.length > 0 ? (
                                conceptual.map((head, index) =>
                                    <tr key={index}>
                                        <td>{head.name}</td>
                                        <td>{head.role}</td>
                                        <td>{head.img}</td>
                                        <td>{head.linkedin}</td>
                                        <td><button className="update" onClick={() => updateTeamInfo(head._id, head.name)}>Update</button></td>
                                        <td><button className="update" onClick={() => deleteTeamInfo(head._id, head.name)}>Delete</button></td>
                                    </tr>
                                )
                            ) : (
                                <tr>
                                    <td colSpan="6" style={{ textAlign: "center" }}>No record available</td>
                                </tr>
                            )
                            }
                        </tbody>
                    </table>
                </div>
                <div class="quatlas-table-container">
                    <h2 className="wlc-name">Non Technical Team</h2>
                    <table class="styled-table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Role</th>
                                <th>Image Link</th>
                                <th>Linkedin Link</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {ntech.length > 0 ? (
                                ntech.map((head, index) =>
                                    <tr key={index}>
                                        <td>{head.name}</td>
                                        <td>{head.role}</td>
                                        <td>{head.img}</td>
                                        <td>{head.linkedin}</td>
                                        <td><button className="update" onClick={() => updateTeamInfo(head._id, head.name)}>Update</button></td>
                                        <td><button className="update" onClick={() => deleteTeamInfo(head._id, head.name)}>Delete</button></td>
                                    </tr>
                                )
                            ) : (
                                <tr>
                                    <td colSpan="6" style={{ textAlign: "center" }}>No record available</td>
                                </tr>
                            )
                            }
                        </tbody>
                    </table>
                </div>
                <div class="quatlas-table-container">
                    <h2 className="wlc-name">Alumini</h2>
                    <table class="styled-table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Role</th>
                                <th>Image Link</th>
                                <th>Linkedin Link</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {alumini.length > 0 ? (
                                alumini.map((head, index) =>
                                    <tr key={index}>
                                        <td>{head.name}</td>
                                        <td>{head.role}</td>
                                        <td>{head.img}</td>
                                        <td>{head.linkedin}</td>
                                        <td><button className="update" onClick={() => updateTeamInfo(head._id, head.name)}>Update</button></td>
                                        <td><button className="update" onClick={() => deleteTeamInfo(head._id, head.name)}>Delete</button></td>
                                    </tr>
                                )
                            ) : (
                                <tr>
                                    <td colSpan="6" style={{ textAlign: "center" }}>No record available</td>
                                </tr>
                            )
                            }
                        </tbody>
                    </table>
                </div>
                <div class="quatlas-table-container">
                    <h2 className="wlc-name">Gallery</h2>
                    <table class="styled-table">
                        <thead>
                            <tr>
                                <th>Image Link</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {gallery.length > 0 ? (
                                gallery.map((head, index) =>
                                    <tr key={index}>
                                        <td>{head.img}</td>
                                        <td><button className="update" onClick={() => updateTeamInfo(head._id, head.name)}>Update</button></td>
                                        <td><button className="update" onClick={() => deleteTeamInfo(head._id, head.name)}>Delete</button></td>
                                    </tr>
                                )
                            ) : (
                                <tr>
                                    <td colSpan="3" style={{ textAlign: "center" }}>No record available</td>
                                </tr>
                            )
                            }
                        </tbody>
                    </table>
                </div>
                <Developer/>
            </div>
        </>
    )
}

export default Data
