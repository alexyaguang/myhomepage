import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1>Yaguang Geng(Alex)</h1>
      <h2>SUMMARY OF QUALIFICATIONS</h2>
        <p>
          Programming Languages:  Java, Python, C#, C++, HTML, CSS, JavaScript, React<br></br>

        Tools: Git, Vim, Bash, Docker <br></br>

        Operating Systems: Windows, Linux, Mac OS<br></br>
        Database & Data Analysis: MySQL, MongoDB, R, PowerBI<br></br>
        Testing Tools: JUnit, JTest, Pytest<br></br>
        Strong hands on experience in performing Agile/Scrum Methodology and Test Driven Development(TDD)
        </p>
        <a
          className="App-link"
          href="https://www.linkedin.com/in/yaguang-geng-8328761a3"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <a
          className="App-link"
          href="https://github.com/alexyaguang"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
      </header>
      <body className="App-body">
      <h2>Work Experience</h2>
      <h3>Software Developer,  Nvcargo Solution Inc. Mississauga, ON <br></br>March 2021 – Present</h3>
      <p>Developing the interface for processing management and cargo management by Spring<br></br>
Developed and updated API for CRUD operation using Java and configured AWS cloud microservice<br></br>
Evaluated and optimised the existing cargo assorting algorithm which increased the operation efficiency by 25%<br></br> 
Developed and maintained the test framework and handled various defects of high severity to improve API build condition<br></br>
Managed and curated database for a third-party Amazon warehouse logistic using Python and MySQL</p>

    <h3>System Developer,  Somoplay Inc. North York , ON<br></br> May. 2020 – Nov. 2020</h3>
    <p>Created a customised map for gaming simulation based on the map of Downtown Toronto using Python and OpenStreetMap(OSM)<br></br> 
Created test automation on all supported platform which take new builds as inputs and generate test reports after all tests are done using Shell;<br></br>
 Drastically improved the test efficiency for the whole team(40%) and minimise human errors <br></br>
Implemented an algorithm to automatically label areas of interest based on the game players' input;<br></br>
 Reduced error margin by 20% compared with the previous solution<br></br>
Hosted weekly meetings and followed Scrum and Agile development cycle</p>
    <h3>Control System Software Developer Intern, Condors Technology - Tianjin, China <br></br>May. 2019- Sept. 2019</h3>
        <p>Worked in the software engineering team to develop a sorting platform for logistics solution using C# and Omron PMAC<br></br>
Developed load balancing algorithms to monitor and allocate robot sorting tasks which improved the overall equipment efficiency(OEE) by 10%. 
</p>
    <h2>Education</h2>
    <h3>Master of Engineering, Engineering Systems and Computing<br></br>University of Guelph – Guelph, ON, Canada<br></br>
Jan. 2020 – Feb. 2021</h3>
    <p>Relevant Courses: Machine Learning, Mathematical Modeling, Natural Language Processing, Artificial Intellige</p>
    <h3>Bachelor of Science, Material Physics<br></br>University of Anhui, Anhui, China,<br></br>Sept.2011 - Aug. 2015</h3>
    <p>Core Course:  Mathematical Modelling, Simulations, Data Analysis,</p>
        <h2>Certification</h2>
               <h3>Certified Google Data Analytics</h3>
               <p>Strong hands on handeling data by using Python, MySQL and R</p>
               <h3>Certified Google IT Support </h3>
               <p>Skills in maintaining computers and networks</p> 

    <h2>Projects</h2>
    <h3><a className="App-link" href="https://github.com/alexyaguang/crawler" >MineJob (NodeJs + React)</a></h3>
        <p>Designed a personal centralised job search platform following RestfulAPI that allow job seeker to build their own job search portfolio </p>
    <h3><a className="App-link" href="https://github.com/alexyaguang/CargoManagement" >Warehouse Management</a></h3>
        <p>Using mongodb to manage cargos in the warehouse <br></br>Mongdb offers flex ways to inbound, outbound and infomation checking It has three functions now, add, removing and listing</p>
      <h3><a className="App-link" href="https://github.com/alexyaguang/download-map" >Map Simulation</a></h3>
        <p>Use shell script to download maps automatically<br>
        </br>Created an algorithm to rebuild the map in format</p>
        </body>
    </div>
  );
}

export default App;

