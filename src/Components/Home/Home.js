import React from 'react';
import { NavLink } from 'react-router-dom';
import './Home.css';


const Home = () => {
    return (
        <section className="home-design">
      
              <div className="row">
              
              <div className="col-lg-6 p-4">
                <div className="panel-design">
                <h3>Admin Panel</h3>
               
                <NavLink to="/adminlogin"><button className="btn btn-primary">Go</button></NavLink>
                </div>
              </div>

              <div className="col-lg-6 p-4">
                <div className="panel-design">
                <h3>User Panel</h3>
                
                <NavLink to="/userlogin"><button className="btn btn-primary">Go</button></NavLink>
                </div>
              </div>

            </div>

        </section>
    );
};

export default Home;