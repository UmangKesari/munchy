const User = ({ name }) => {
  return (
    <div className="user-card">
      <h2>Name : {name} (functional)</h2>
      <h3>Location: Noida</h3>
    </div>
  );
};

export default User;