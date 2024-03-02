import Navbar from "./component/Navbar";
import React from "react";
import News from "./component/News";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NewsSolo from "./component/NewsSolo";

const App = () => {
  const pageSize = 1;
  const newsApiKey = process.env.REACT_APP_NEWS_API_KEY;

  return (
    <div>
      <Router>
        <Navbar />

        <Routes>
          <Route
            path="/"
            element={
              <NewsSolo
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
              <NewsSolo
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
              <NewsSolo
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
              <NewsSolo
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
              <NewsSolo
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
              <NewsSolo
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
              <NewsSolo
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
              <NewsSolo
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
