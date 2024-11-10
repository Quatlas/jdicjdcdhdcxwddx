import React, { useEffect, useState } from 'react'
import Header from './Header';

const Data = () => {
    const [dashName, setDashname] = useState('');
    const [err, setErr] = useState('');
    const [suc, setSuc] = useState('');
    const [team, setTeam] = useState([]);
    const [teamHead, setTeamhead] = useState([]);
    const [tech, setTech] = useState([]);
    const [conceptual, setConceptual] = useState([]);
    const [ntech, setNtech] = useState([]);
    const [temp, setTemp] = useState([]);
    const [alumini,setAlumini] = useState([]);
    const [gallery,setGallery] = useState([]);
    const [addname, setAddname] = useState('');
    const [addrole, setAddrole] = useState('');
    const [addimage, setAddimage] = useState('');
    const [addlinkedin, setAddlinkeidn] = useState('');
    const style = {
        backgroundColor: '#e6e6fa',
        minHeight: "100vh",
    };
    useEffect(() => {
        const dash = async () => {
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
                    let name = dashData.username;
                    setDashname("WELCOME " + name.toUpperCase());
                    setSuc('Successfully received the data. Update or add any changes as needed.')
                    setErr('');
                } else {
                    const dashData = await dashResponse.json();
                    const jwt = dashData.error;
                    setErr(jwt.toUpperCase() + " : SIGN IN AGAIN");
                    setSuc('');
                }
            } catch (error) {
                setErr(error);
            }
        }
        dash();
    }, [])
    useEffect(() => {
        const fetchNotes = async (e) => {
            const url = process.env.REACT_APP_ENDPOINT01;
            const addedResponse = await fetch(url, {
                method: "GET",
                headers: {
                    "Content-type": "application/json"
                }
            })
            const addedData = await addedResponse.json();
            setTeam(addedData[addedData.length - 1].teamInfo);
            setTeamhead(addedData[addedData.length - 1].teamInfo[0].details);
            setTech(addedData[addedData.length - 1].teamInfo[1].details);
            setConceptual(addedData[addedData.length - 1].teamInfo[2].details);
            setNtech(addedData[addedData.length - 1].teamInfo[3].details);
            setAlumini(addedData[addedData.length - 1].teamInfo[4].details);
            setGallery(addedData[addedData.length - 1].teamInfo[5].details);
        }
        fetchNotes();
    }, []);

    const updateTeamInfo = async (id, namemax) => {
        try {
            const name = prompt("enter name : ");
            const role = prompt("enter role : ");
            const img = prompt("enter image link : ");
            const linkedin = prompt("enter linkedin link : ");
            const url = `${process.env.REACT_APP_ENDPOINT03}/${id}`;
            const updatedResponse = await fetch(url, {
                method: "PUT",
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({
                    "name": name,
                    "role": role,
                    "img": img,
                    "linkedin": linkedin
                })
            });
            const updatedData = await updatedResponse.json();
            setSuc(`Successfully updated, ${namemax}! The ${name} data has been updated. Please refresh the page to see the changes`);
            setErr('')
        } catch (error) {
            setErr(error);
            setSuc('')
        }
    }
    const deleteTeamInfo = async (id, name) => {
        try {
            const url = `${process.env.REACT_APP_ENDPOINT04}/${id}`;
            const deletedResponse = await fetch(url, {
                method: "DELETE",
                headers: {
                    "Content-type": "application/json"
                }
            });
            const deletedData = await deletedResponse.json();
            setSuc(`Successfully deleted ${name} data`);
            setErr('');
        } catch (error) {
            setErr(error);
            setSuc('');
        }
    }
    const selectedChange = (e) => {
        setTemp(e.target.value);
    }
    const addNote = async (e) => {
        e.preventDefault();
        try {
            const url = `${process.env.REACT_APP_ENDPOINT05}/${temp}`;
            const addedResponse = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({
                    "name": addname,
                    "role": addrole,
                    "img": addimage,
                    "linkedin": addlinkedin
                })
            });
            const addedData = await addedResponse.json();
            setSuc(`Successfully added ${addname} to teamInfo data`);
            setErr('');
            setAddname('');
            setAddrole('');
            setAddimage('');
            setAddlinkeidn('');
        } catch (error) {
            setErr(error);
            setSuc('');
        }
    };
    return (
        <>
            <div style={style}>
                <Header title="QUATLAS DASHBOARD" />
                <div className="welcome">
                    <h2 className="wlc-name">{dashName}</h2>
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
                <div className="etios">
                    <p className="msg">2024 © Quatlas, All Rights Reserved.</p>
                    <p className="msg">Designed By Pavan Reddy</p>
                    <p className="msg">Powered By Madhouse</p>
                </div>
            </div>
        </>
    )
}

export default Data
