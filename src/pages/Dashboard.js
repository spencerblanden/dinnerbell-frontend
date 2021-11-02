import { useState } from 'react';


const Dashboard = (props) => {
    const [ formState, setFormState ] = useState({
        name: "",
        image: "",
        description: "",
        rating: false,
        itemType: "",
    });

   

    const handleChange = event => {
        setFormState(prevState => ({
            ...prevState,
            [event.target.name]: event.target.value
        }));
    }

    const handleSubmit = event => {
        event.preventDefault();
        // TODO: adds user's uid to form
        props.createMenuItem(formState);
        setFormState({
            name: "",
            image: "",
            description: "",
            rating: false,
            itemType: "",
        }); 
    }

    return (
        <main>
            <h1>Your Contacts</h1>
            <section>
                <form onSubmit={handleSubmit}>
                    <label>Name
                        <input 
                            onChange={handleChange} 
                            value={formState.name} 
                            name="name" 
                            type="text" 
                        />
                    </label>
                    <label>Image
                        <input 
                            onChange={handleChange} 
                            value={formState.image} 
                            name="image" 
                            type="text" 
                        />
                    </label>
                    <label>Description
                        <input 
                            onChange={handleChange} 
                            value={formState.description} 
                            name="description" 
                            type="text" 
                        />
                    </label>
                    <label>Item Type
                    <input 
                        onChange={handleChange} 
                        value={formState.itemType} 
                        name="itemType" 
                        type="text" 
                    />
                    </label>
                    <input type="submit" value="Add Menu Item" />
                </form>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Image</th>
                            <th>Description</th>
                            <th>Item Type</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            props.menuItems.map(c => (
                                <tr key={c._id}>
                                    <td>{c.name}</td>
                                    <td>{c.image} </td>
                                    <td>{c.description}</td>
                                    <td>{c.itemType}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </section>
        </main>
    );
};

export default Dashboard;