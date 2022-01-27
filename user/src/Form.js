import React from 'react';

const Form = (props) => {
    const { onChange, submit } = props;
    const { username, email, password, checked } = props.values;
    
    onChange = (e) => {
        const { name, value, checked, type } = e.target;
        const newVal = type === 'checkbox' ? checked : value;
        change(name, newVal)
    }
    
    onSubmit = (e) => {
        e.preventDefault();
        submit();
    }
    
    return(
        <div>
            <h1>Hello! I am a form</h1>
            <form onSubmit={onSubmit}>
                <label>Name:
                  <input
                        type="text"
                        name="username"
                        value={username}
                        onChange={onChange}
                        />
                </label>
                <label>Email:
                    <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={onChange}
                        />
                </label>
                <label>Password
                    <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={onChange}
                        />
                </label>
                <label>Terms of Service:
                    <input
                        type="checkbox"
                        name="tos"
                        checked={checked}
                        onChange={onChange}
                        />
                </label>
                <input type="submit" value="Create a Friend!" />
            </form>
        </div>

    )

}

export default Form;