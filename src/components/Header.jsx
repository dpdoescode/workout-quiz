function Header({ title, description, total }) {
  return (
    <div className="header">
      <h1>{title}</h1>
      <p>{description}</p>
      <p>Total Workouts: {total}</p>
    </div>
  );
}

export default Header;
