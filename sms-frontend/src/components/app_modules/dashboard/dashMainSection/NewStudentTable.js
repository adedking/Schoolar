import React from 'react'
import { connect } from 'react-redux';
import { FaEye, FaPen } from "react-icons/fa";

export const NewStudentTable = (props) => {
    return (
        <>
            <div className="new-header">New Students</div>
            <table id="new-table">
                <thead>
                    <tr>
                        <th>Date Joined</th>
                        <th>Name</th>
                        <th>Class</th>
                        <th>Parent</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>2021-01-01</td>
                        <td>Adedokun Agunbiade</td>
                        <td>Post Graduate</td>
                        <td>Mrs. Agunbiade</td>
                        <td className="new-table-icons-group"><FaEye className="icons" /> <FaPen className="icons" /></td>
                    </tr>
                    <tr>
                        <td>2021-01-01</td>
                        <td>Adedokun Agunbiade</td>
                        <td>Post Graduate</td>
                        <td>Mrs. Agunbiade</td>
                        <td className="new-table-icons-group"><FaEye className="icons" /> <FaPen className="icons" /></td>               
                        
                    </tr>
                    <tr>
                        <td>2021-01-01</td>
                        <td>Adedokun Agunbiade</td>
                        <td>Post Graduate</td>
                        <td>Mrs. Agunbiade</td>
                        <td className="new-table-icons-group"><FaEye className="icons" /> <FaPen className="icons" /></td>
                    </tr>
                    <tr>
                        <td>2021-01-01</td>
                        <td>Adedokun Agunbiade</td>
                        <td>Post Graduate</td>
                        <td>Mrs. Agunbiade</td>
                        <td className="new-table-icons-group"><FaEye className="icons" /> <FaPen className="icons" /></td>
                    </tr>
                    <tr>
                        <td>2021-01-01</td>
                        <td>Adedokun Agunbiade</td>
                        <td>Post Graduate</td>
                        <td>Mrs. Agunbiade</td>
                        <td className="new-table-icons-group"><FaEye className="icons" /> <FaPen className="icons" /></td>
                    </tr>
                    <tr>
                        <td>2021-01-01</td>
                        <td>Adedokun Agunbiade</td>
                        <td>Post Graduate</td>
                        <td>Mrs. Agunbiade</td>
                        <td className="new-table-icons-group"><FaEye className="icons" /> <FaPen className="icons" /></td>
                    </tr>
                    <tr>
                        <td>2021-01-01</td>
                        <td>Adedokun Agunbiade</td>
                        <td>Post Graduate</td>
                        <td>Mrs. Agunbiade</td>
                        <td className="new-table-icons-group"><FaEye className="icons" /> <FaPen className="icons" /></td>
                    </tr>
                    <tr>
                        <td>2021-01-01</td>
                        <td>Adedokun Agunbiade</td>
                        <td>Post Graduate</td>
                        <td>Mrs. Agunbiade</td>
                        <td className="new-table-icons-group"><FaEye className="icons" /> <FaPen className="icons" /></td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(NewStudentTable)
