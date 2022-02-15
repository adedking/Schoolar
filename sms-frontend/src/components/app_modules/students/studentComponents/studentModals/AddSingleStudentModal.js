import React from 'react'
import { connect } from 'react-redux';
import { FaTimes } from "react-icons/fa";

export const AddSingleStudentModal = ({addSingleStudentModalShow, setAddSingleStudentModalShow } ) => {

    const closeModal = () => {
        setAddSingleStudentModalShow(false)
    }

    
    return (
        <div className={addSingleStudentModalShow? `add-modal-underlay-active`: `add-modal-underlay-inactive`}>
            <div className="add-modal">
                <header className="add-header">
                    Add student <FaTimes className="add-close-icon" onClick={closeModal}/>
                </header>
                <main className="add-body">
                    <form className="add-form">
                        <div className="input-groups">
                            <div className="form-groups">
                                <input type="text" placeholder="First Name" className="form-input" />
                                <input type="text" placeholder="Last Name" className="form-input" />
                            </div>
                            <div className="form-groups">
                                <input type="text" placeholder="Staff Number (Optional)" className="form-input" />
                                <input type="text" placeholder="Email" className="form-input" />
                            </div>
                            <div className="form-groups">
                                <input type="text" placeholder="Phone Number" className="form-input" />
                                <select className="form-input">
                                    <option value="Position">Select Position</option>
                                    <option value="Cheif Product Officer">Chief Product Officer</option>
                                    <option value="Finance Officer">Finance Officer</option>
                                </select>
                            </div>
                            <input type="text" placeholder="Address" className="form-input-address" />
                            <div className="form-groups">
                                <input type="text" placeholder="City" className="form-input-three" />
                                <input type="text" placeholder="State" className="form-input-three" />
                                <input type="text" placeholder="Zipcode" className="form-input-three" />
                            </div>
                            <div className="form-groups">
                                <select className="form-input">
                                    <option value="Nigeria">Nigeria</option>
                                    <option value="Ghana">Ghana</option>
                                    <option value="USA">USA</option>
                                    <option value="United Kingdom">United Kingdom</option>
                                    <option value="Canada">Canada</option>
                                </select>
                                <select className="form-input">
                                    <option value="Position">Gender</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Others">Others</option>
                                </select>
                            </div>
                            <div className="form-groups">
                                <input type="text" placeholder="Date Of Birth" className="form-input" />
                                <input type="text" placeholder="Date Joined" className="form-input" />
                            </div>
                        </div>
                        <div className="add-form-button">
                            <button type="button" className="add-cancel-button button" onClick={closeModal} >Cancel</button>
                            <button className="add-submit-button button">Submit</button>
                        </div>
                    </form>
                </main>
            </div>
        </div>
    )
}
// date_of_birth = models.DateField()
// date_joined = models.DateField()
// date_left = models.CharField(max_length=20, blank=True, null=True)
// marital_status = models.CharField(max_length=30,blank=False,null=False)

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(AddSingleStudentModal)
