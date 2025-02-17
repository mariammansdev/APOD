import SearchContainer from "./SearchContainer";

function Body() {
  return (
      <div className='bodyContainer'>
        <div className='bodyContent'>
          <h2>Explore Your Universe!</h2>
          <p className='colorChangeText' > APOD offers a daily visual feast of our universe, bringing the latest discoveries, breathtaking imagery, and educational content to the public, one picture at a time.</p>
        </div>
        <SearchContainer />
      </div>
  );
}

export default Body