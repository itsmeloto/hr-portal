const { useState } = React;

function App() {
    const [employees] = useState([
        { id: 1, name: 'Tigran Tigranyan', role: 'Lead Developer', email: 'lotextt@gmail.com' },
        { id: 2, name: 'Narek Arabian', role: 'UI/UX Designer', email: 'narekarabian04@gmail.com' }
    ]);

    return (
        <div className="container">
            <header>
                <h1>HR Portal</h1>
                <p>Welcome, Administrator</p>
            </header>
            <main>
                <h2>Employee Directory</h2>
                <ul className="employee-list">
                    {employees.map(emp => (
                        <li key={emp.id} className="employee-item">
                            <strong>{emp.name}</strong> ({emp.role})<br/>
                            <a href={`mailto:${emp.email}`}>{emp.email}</a>
                        </li>
                    ))}
                </ul>
            </main>
            <footer>
                <p>&copy; 2023 System HR Management</p>
            </footer>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);