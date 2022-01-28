import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import './FileList.css';

const FileList = () => {
    const [show, setShow] = useState(false);


    return (
        <div>
            <div className="file-list">
            <div className="filelist-table">
                <table>
                        <tr>
                        <th>File Name</th>
                        <th>Total Uploaded</th>
                        <th>Total Process</th>
                        <th>Group</th>
                        </tr>
                        
                            <tr>
                                <td>XKJHF.txt</td>
                                <td>980</td>
                                <td>920</td>
                                <td><button onClick={() => console.log('clicked')} class="btn btn-primary">Group</button></td>
                            </tr>
                            <tr>
                                <td>OKJD.txt</td>
                                <td>540</td>
                                <td>500</td>
                                <td><button onClick={()=> setShow(true)} class="btn btn-primary">Group</button></td>
                            </tr>
                        
                    </table>

                    <Modal show={show} >
                        <div className="m-5 p-4">
                        <div className="user-list">
                                    <div className="userlist-table">
                                        <table>
                                                <tr>
                                                <th>Group Name</th>
                                                <th>Total</th>
                                                <th>Show</th>
                                            
                                                </tr>
                                                
                                                    <tr>
                                                        <td>Sample 1</td>
                                                        <td>100</td>
                                                        <td><button class="btn btn-primary">Show</button></td>
                                                    </tr>
                                                    <tr>
                                                        <td>Sample 2</td>
                                                        <td>80</td>
                                                        <td><button class="btn btn-primary">Show</button></td>
                                                    </tr>
                                                
                                            </table>
                                    </div>
                                    </div>
                        </div>
                        <Button variant="secondary" onClick={()=>setShow(false)}>
                             Close
                        </Button>
                 </Modal>
            </div>
            </div>
        </div>
    );
};

export default FileList;