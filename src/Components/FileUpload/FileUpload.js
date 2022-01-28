import React from 'react';

const FileUpload = () => {
    return (
        <div>

                <h4>File Upload</h4>
                    <form
                        action="http://localhost:5000/users/file/upload/"
                        method="post"
                        encType="multipart/form-data"
                        target="hidden-iframe"
                        >
    
                            <div className="form-group">
                              <input type="number" name="id" className="form-control item" value={localStorage.getItem('id')} required />
                            </div>
                            <div className="form-group">
                              <input type="text" name="name" className="form-control item" placeholder="Enter File Name" required />
                            </div>

                            <div className="form-group">
                              <input type="text" name="split" className="form-control item" placeholder="Split Point" required />
                            </div>

                            <div className="form-group">
                            <label htmlFor="file"> Upload file </label>
                            <input id="file" type="file" className="form-control item" name="file" required/>
                            </div>
            

                            <input className="btn-success" type="submit" value="Submit" />
                     </form>
        </div>
    );
};

export default FileUpload;