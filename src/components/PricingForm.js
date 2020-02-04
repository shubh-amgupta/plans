import React, { useState } from 'react';
import Modal from "react-modal";


export default class PricingForm extends React.Component {
    
    constructor(props) {
        super(props);

        this.state = {
            showModal: false,
            crmType: [],
            hearAboutUs: []
        }

        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
        this.logData = this.logData.bind(this);
    }

    componentDidMount() {
        this.setState({
            showModal: this.props.showModal
        });
    }

    componentDidUpdate(prevProps) {
        const { selectedPlan, showModal } = this.props;
        if (prevProps.showModal !== showModal || ((prevProps.selectedPlan && prevProps.selectedPlan.planId) !== (selectedPlan && selectedPlan.planId))) {
            this.setState({
                showModal: this.props.showModal,
                name: undefined,
                email: undefined,
                phone: undefined,
                noOfLeads: undefined,
                totalLeads: undefined,
                crm: undefined,
                agents: undefined
            });
        }
    }

    openModal() {
        this.setState({
            showModal: true
        });
    }

    afterOpenModal() {
        // references are now sync'd and can be accessed.
        // this.subtitle.style.color = '#f00';
    }

    closeModal() {
        this.setState({
            showModal: false
        });
    }

    handleCheckboxChange(e, type, value) {

        const { crmType, hearAboutUs } = this.state;
        if (e.target.checked) {
            this.setState({
                [type]: [...this.state[type], value]
            });
        }else {
            this.setState({
                [type]: this.state[type].filter(val => val !== value)
            });
        }

    }

    logData() {
        const { name = "-", email = "-", phone = "-", noOfLeads = "-", totalLeads = "-", crm = "-", agents = "-", crmType, hearAboutUs } = this.state;
        const data = `
            Name: ${name}
            Email: ${email}
            Phone: ${phone}
            Number of leads you generate in a month: ${noOfLeads}
            Total leads in your CRM: ${totalLeads}
            Which CRM do you use?: ${crm}
            Number of agents: ${agents}
            What are your biggest lead sources?: ${crmType.length > 0 ? crmType: "-"}
            How do you hear about us?: ${hearAboutUs.length > 0 ? hearAboutUs: "-"}
        `;
        alert(data);
    }

    render() {

        const { selectedPlan } = this.props;
        const { name, email, phone, noOfLeads, totalLeads, crm, agents } = this.state;

        return (
            <div>
                <Modal
                    isOpen={this.state.showModal}
                    onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.props.hidePricingModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                >
                    <div className="form__heading">Get started with SquadVoice <span onClick={this.props.hidePricingModal}>x</span></div>
                    {
                        selectedPlan ?
                        <h3 className="form__plan"><span>Plan Selected:</span> {selectedPlan.planName}</h3> : null
                    }
                    <div className="form">
                        <div className="form__control">
                            <div className="form__group">
                                <label className="form__label">Name</label>
                                <input type="text" className="form__input" value={name} onChange={(e) => this.setState({ name: e.target.value })} />
                            </div>
                        </div>
                        <div className="form__control">
                            <div className="form__group">
                                <label className="form__label">E-mail Address</label>
                                <input type="email" className="form__input" value={email} onChange={(e) => this.setState({ email: e.target.value })} />
                            </div>
                            <div className="form__group">
                                <label className="form__label">Phone No.</label>
                                <input type="text" className="form__input" value={phone} onChange={(e) => this.setState({ phone: e.target.value })} />
                            </div>
                        </div>
                        <div className="form__control">
                            <div className="form__group">
                                <label className="form__label">Number of leads you generate in a month</label>
                                <input type="number" className="form__input" value={noOfLeads} onChange={(e) => this.setState({ noOfLeads: e.target.value })} />
                            </div>
                            <div className="form__group">
                                <label className="form__label">Total leads in your CRM</label>
                                <input type="number" className="form__input" value={totalLeads} onChange={(e) => this.setState({ totalLeads: e.target.value })} />
                            </div>
                        </div>
                        <div className="form__control">
                            <div className="form__group">
                                <label className="form__label">Which CRM do you use?</label>
                                <input type="text" className="form__input" value={crm} onChange={(e) => this.setState({ crm: e.target.value })} />
                            </div>
                            <div className="form__group">
                                <label className="form__label">Number of agents</label>
                                <input type="number" className="form__input" value={agents} onChange={(e) => this.setState({ agents: e.target.value })} />
                            </div>
                        </div>
                        <div className="form__control">
                            <div className="form__group">
                                <label className="form__label" htmlFor="sources">What are your biggest lead sources?</label>
                                <div className="form__control">
                                    <div>
                                        <input type="checkbox" id="zillow" onChange={(e) => this.handleCheckboxChange(e, "crmType", "Zillow")} />
                                        <label className="form__label--checkbox" htmlFor="zillow">Zillow</label>
                                    </div>
                                    <div>
                                        <input type="checkbox" id="realtor" onChange={(e) => this.handleCheckboxChange(e, "crmType", "Realtor")} />
                                        <label className="form__label--checkbox" htmlFor="realtor">Realtor</label>
                                    </div>
                                    <div>
                                        <input type="checkbox" id="ylopo" onChange={(e) => this.handleCheckboxChange(e, "crmType", "Ylopo")} />
                                        <label className="form__label--checkbox" htmlFor="ylopo">Ylopo</label>
                                    </div>
                                    <div>
                                        <input type="checkbox" id="others" onChange={(e) => this.handleCheckboxChange(e, "crmType", "Others")} />
                                        <label className="form__label--checkbox" htmlFor="others">Others</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="form__control">
                            <div className="form__group">
                                <label className="form__label" htmlFor="sources">How do you hear about us?</label>
                                <div className="form__control">
                                    <div>
                                        <input type="checkbox" id="google" onChange={(e) => this.handleCheckboxChange(e, "hearAboutUs", "Google")} />
                                        <label className="form__label--checkbox" htmlFor="google">Google</label>
                                    </div>
                                    <div>
                                        <input type="checkbox" id="facebook" onChange={(e) => this.handleCheckboxChange(e, "hearAboutUs", "Facebook")} />
                                        <label className="form__label--checkbox" htmlFor="facebook">Facebook</label>
                                    </div>
                                    <div>
                                        <input type="checkbox" id="email" onChange={(e) => this.handleCheckboxChange(e, "hearAboutUs", "Email")} />
                                        <label className="form__label--checkbox" htmlFor="email">Email</label>
                                    </div>
                                    <div>
                                        <input type="checkbox" id="friends" onChange={(e) => this.handleCheckboxChange(e, "hearAboutUs", "Friends")} />
                                        <label className="form__label--checkbox" htmlFor="friends">Friends</label>
                                    </div>
                                    <div>
                                        <input type="checkbox" id="real-closers" onChange={(e) => this.handleCheckboxChange(e, "hearAboutUs", "Real Closers")} />
                                        <label className="form__label--checkbox" htmlFor="real-closers">Real Closers</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button className="form__cta" onClick={this.logData}>Submit</button>
                    </div>
                </Modal>
            </div>
        )
    }
}

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};