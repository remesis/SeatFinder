import React, {Component} from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AboutUs from './components/AboutUs';
import TermsOfService from './components/TermsOfService';
import App from './App';
import Navbar from './components/Navbar';
import LoginPage from './components/LoginPage';
import RegPage from './components/RegPage';
import EventPage from './components/EventPage';
import axios from 'axios';
import CreateEvent from './components/CreateEvent';
import { API_URL } from './config';

const LOCALHOST = `${API_URL}`

class AppRouter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      eventData: [],
    };
  }

  componentDidMount() {
    axios.get(`${LOCALHOST}/api/events/`)
      .then(response => {
        this.setState({ eventData: response.data });
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }

render() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/terms" element={<TermsOfService />}>
                {/* <Route element={<Navbar />}></Route> */}

            </Route>
            <Route path="/login" element={<LoginPage/>} />
            <Route path="/signup" element={<RegPage/>} />
            <Route path="/create" element={<CreateEvent/>} />
            <Route path="/:eventLink" element={<EventPage events={this.state.eventData} />} />
        </Routes>
        
    </BrowserRouter>
  );
}
}

export default AppRouter
