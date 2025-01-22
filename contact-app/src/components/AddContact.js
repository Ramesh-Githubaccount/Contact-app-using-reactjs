import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddContact = ({ addContactHandler }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const navigate = useNavigate();

    const add = (e) => {
        e.preventDefault();
        if (name === "" || email === "") {
            alert("All the fields are mandatory!");
            return;
        }
        addContactHandler({ name, email });
        setName("");
        setEmail("");
        navigate("/"); // Navigate back to the contact list
    };

    return (
        <div className="ui main">
            <h2>Add Contact</h2>
            <form className="ui form" onSubmit={add}>
                <div className="field">
                    <label>Name</label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="field">
                    <label>Email</label>
                    <input
                        type="text"
                        name="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <button className="ui button blue">Add</button>
            </form>
        </div>
    );
};

export default AddContact;













// import React from "react";
// import { useNavigate } from "react-router-dom";

// class AddContact extends React.Component {
//     state = {
//         name: "",
//         email: "",
//     };

//     add = (e) => {
//         e.preventDefault();
//         if (this.state.name === "" || this.state.email === "") {
//             alert("All the fields are mandatory!");
//             return;
//         }
//         this.props.addContactHandler(this.state);
//         this.setState({ name: "", email: "" });
//         this.props.navigate("/"); // Use the navigate function passed as a prop
//     };

//     render() {
//         return (
//             <div className="ui main">
//                 <h2>Add Contact</h2>
//                 <form className="ui form" onSubmit={this.add}>
//                     <div className="field">
//                         <label>Name</label>
//                         <input
//                             type="text"
//                             name="name"
//                             placeholder="Name"
//                             value={this.state.name}
//                             onChange={(e) => this.setState({ name: e.target.value })}
//                         />
//                     </div>
//                     <div className="field">
//                         <label>Email</label>
//                         <input
//                             type="text"
//                             name="email"
//                             placeholder="Email"
//                             value={this.state.email}
//                             onChange={(e) => this.setState({ email: e.target.value })}
//                         />
//                     </div>
//                     <button className="ui button blue">Add</button>
//                 </form>
//             </div>
//         );
//     }
// }

// // Higher-order component to use navigate in class components
// function WithNavigate(props) {
//     const navigate = useNavigate();
//     return <AddContact {...props} navigate={navigate} />;
// }

// export default WithNavigate;

