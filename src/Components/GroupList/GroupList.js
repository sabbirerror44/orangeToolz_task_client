import React from 'react';
import './FileList.css';

const FileList = () => {
    return (
        <div>
            <div className="Group-list">
            <div className="grouplist-table">
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
                                <td><button class="btn btn-primary">Group</button></td>
                            </tr>
                            <tr>
                                <td>OKJD.txt</td>
                                <td>540</td>
                                <td>500</td>
                                <td><button class="btn btn-primary">Group</button></td>
                            </tr>
                        
                    </table>
            </div>
            </div>
        </div>
    );
};

export default FileList;