import React, { useEffect, useState } from 'react';
// import './FileList.css';

const FileList = () => {
    const [fileList, setFileList] = useState([]);

    useEffect(()=>{
        fetch(`http://localhost:5000/users/files/${localStorage.getItem('id')}`)
            .then((res) => res.json())
            .then((data) => {
                setFileList(data);
                console.log(data)
                console.log(fileList)

            });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    return (
        <div>
            <div className="Group-list">
            <div className="grouplist-table">
                <table>
                        <tr>
                        <th>File Name</th>
                        <th>Total Uploaded</th>
                        <th>Total Processed</th>
                        <th>Group</th>
                        </tr>
                        
                            {
                                fileList.map(file=> <>
                                    <tr>
                                        <td>{file.name}</td>
                                        <td>{file.total_uploaded_file}</td>
                                        <td>{file.total_processed_file}</td>
                                        <td><button class="btn btn-primary">Group</button></td>
                                    </tr>
                                </>)
                            }

                        
                    </table>
            </div>
            </div>
        </div>
    );
};

export default FileList;