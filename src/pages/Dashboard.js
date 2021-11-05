import { useEffect, useState } from 'react';
import { Card } from '@material-ui/core';
import styled from 'styled-components';


const DashStyle = styled.body`
.card 
{display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
form{
    margin-top: 45px;
    height: 45px;
}
table {
    width: 1000px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-content: space-between;
    align-content: space-between;
}
.display {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: space-between;
    font-weight: bold;
    font-size: 2rem;
    margin-bottom: 30px;
}
tr {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: space-between;
    font-weight: bold;
}
}

`;


const Dashboard = (props) => {
    const [ formState, setFormState ] = useState({
        name: "",
        image: "",
        description: "",
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
            itemType: "",
        }); 
    }


    // useEffect(()=> {
        
    // }, [user])

    return (
        <main>
            <Helmet>
            <title>DinnerBell</title>
        </Helmet>
            <DashStyle>
            <Card className='card'>
            <h1>Add Menu Items Here</h1>
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
                        <tr className='display'>
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
            </Card>
            </DashStyle>
        </main>
    );
};

export default Dashboard;