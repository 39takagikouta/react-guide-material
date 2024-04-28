import "./Profile.css";

const Profile = ({ name = "John Doe", age, country }) => {
  return (
    <div className="profile">
      <h3>{"name:" + name}</h3>
      <p>{"age:" + age}</p>
      <p>{"name:" + country}</p>
    </div>
  );
};

export default Profile;
