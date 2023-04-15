import logo from './logo.svg';
import './App.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Slider from '../Content/Slider/Slider';
import LeftSidebar from '../Content/LeftSidebar/LeftSidebar';
import RightContext from '../Content/RightContent/RightContent';
function App() {
  return (
    <body>
      <Header></Header>
      <Slider></Slider>
      <div class="container">
        <div class="row">
          <div class="col-sm-3">
            <LeftSidebar></LeftSidebar>
          </div>
          <RightContext></RightContext>
        </div>
      </div>
      <Footer></Footer>
    </body>
  );
}

export default App;