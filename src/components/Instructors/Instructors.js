import instructor1 from '../../images/instructor-1.webp'
import instructor2 from '../../images/instructor-2.webp'
import instructor3 from '../../images/instructor-3.webp'
import instructor4 from '../../images/instructor-4.webp'
import instructor5 from '../../images/instructor-5.webp'
import instructor6 from '../../images/instructor-6.webp'
import instructor7 from '../../images/instructor-7.jpg'
import instructor8 from '../../images/instructor-8.jpg'


const Instructors = () => {
    return (
      <div className="my-5">
        <h3>Our Instructors</h3>
        <div className="mt-5">
          <div className="row my-3">
            <div className="col-md-3">
              <img src={instructor1} alt="" />
              <h4>Alexa Janathan</h4>
            </div>
            <div className="col-md-3">
              <img src={instructor2} alt="" />
              <h4>Janathan Smith</h4>
            </div>
            <div className="col-md-3">
              <img src={instructor3} alt="" />
              <h4>Alexa MacCalum</h4>
            </div>
            <div className="col-md-3">
              <img src={instructor4} alt="" />
              <h4>Alexa J Watson</h4>
            </div>
            <div className="col-md-3">
              <img
                style={{ width: "263px", height: "258px" }}
                src={instructor5}
                alt=""
              />
              <h4>John Hernandez</h4>
            </div>
            <div className="col-md-3">
              <img
                style={{ width: "263px", height: "258px" }}
                src={instructor6}
                alt=""
              />
              <h4>Alicia Grant</h4>
            </div>
            <div className="col-md-3">
              <img
                style={{ width: "263px", height: "258px" }}
                src={instructor7}
                alt=""
              />
              <h4>Sean Jones</h4>
            </div>
            <div className="col-md-3">
              <img
                style={{ width: "263px", height: "258px" }}
                src={instructor8}
                alt=""
              />
              <h4>Freya Frost</h4>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Instructors;