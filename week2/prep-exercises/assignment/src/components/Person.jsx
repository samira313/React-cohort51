const Person = ({ person }) => {
    if (!person) return null;
  
    const { firstName, lastName, email, phone, picture } = person;
  
    return (
      <div style={{
        border: '1px solid #ccc',
        padding: '1rem',
        borderRadius: '1rem',
        margin: '1rem 0',
        maxWidth: '400px'
      }}>
        <img src={picture} alt={`${firstName} ${lastName}`} style={{ borderRadius: '50%', marginBottom: '1rem' }} />
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li><strong>First Name:</strong> {firstName}</li>
          <li><strong>Last Name:</strong> {lastName}</li>
          <li><strong>Email:</strong> {email}</li>
          <li><strong>Phone:</strong> {phone}</li>
        </ul>
      </div>
    );
  };
  
  export default Person;
  