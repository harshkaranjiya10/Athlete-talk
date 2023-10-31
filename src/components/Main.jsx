import ImageSlider from "./ImageSlider.jsx";
import Trainer from "./Trainer.jsx";
import data from "./data"

const Main = () => {
  const slides = [
    { url: "jonathan-chng-HgoKvtKpyHA-unsplash.jpg", title: "beach" },
    { url: "coachtalk.jpeg", title: "beach" },
    { url: "arisa-chattasa-2w-uabuglqY-unsplash.jpg ", title: "beach" },
    { url: "the-blowup-UN4PadDppAU-unsplash.jpg", title: "beach" }
 ];
  const containerStyles = {
  width: "960px",
    height: "450px",
    margin: "0 auto",
  };


  const trainers = data.map ( item => {
    return (
      <Trainer 
        key={item.id}
        {...item}
      />
    )
  }

  )

  return (
    
    <div>
      
      <h1>MOTIVATIONAL QUOTE</h1>
      <div style={containerStyles}>
        <ImageSlider slides={slides} />
      </div>

        <br />
        <br />

        <h1 className="main--Trainers">Professional Trainers</h1> 
       <section className="trainer-list">
        {trainers}
      </section>

    </div>
  );
};

export default Main;