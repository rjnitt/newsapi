import Navbar from "./component/Navbar";
import React from "react";
import News from "./component/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  const pageSize = 4;
  const newsApiKey = process.env.REACT_APP_NEWS_API_KEY;

  return (
    <div>
      <Router>
        <Navbar />

        <Routes>
          <Route
            path="/"
            element={
              <News
                key="general"
                pagesize={pageSize}
                apiKey={newsApiKey}
                country="in"
                category="General"
              />
            }
          />
          <Route
            path="/general"
            element={
              <News
                key="general"
                pagesize={pageSize}
                apiKey={newsApiKey}
                country="in"
                category="General"
              />
            }
          />
          <Route
            path="/business"
            element={
              <News
                key="business"
                pagesize={pageSize}
                apiKey={newsApiKey}
                country="in"
                category="Business"
              />
            }
          />
          <Route
            path="/technology"
            element={
              <News
                key="technology"
                pagesize={pageSize}
                apiKey={newsApiKey}
                country="in"
                category="Technology"
              />
            }
          />
          <Route
            path="/sports"
            element={
              <News
                key="sports"
                pagesize={pageSize}
                apiKey={newsApiKey}
                country="in"
                category="Sports"
              />
            }
          />
          <Route
            path="/science"
            element={
              <News
                key="science"
                pagesize={pageSize}
                apiKey={newsApiKey}
                country="in"
                category="Science"
              />
            }
          />
          <Route
            path="/health"
            element={
              <News
                key="health"
                pagesize={pageSize}
                apiKey={newsApiKey}
                country="in"
                category="Health"
              />
            }
          />
          <Route
            path="/entertainment"
            element={
              <News
                key="entertainment"
                pagesize={pageSize}
                apiKey={newsApiKey}
                country="in"
                category="Entertainment"
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
};
export default App;
