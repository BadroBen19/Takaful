// App.js
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import categoryRoutes from "./categoryRoutes";
import Categories from "./pages/Categories"; // Named import for Categories
import DonationForm from "./pages/DonationForm";
import FAQs from "./pages/FAQs";
import Footer from "./pages/Footer";
import Forgot from "./pages/Forgot";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Navbar from "./pages/Navbar";
import NotFound from "./pages/NotFound";
import Testimonies from "./pages/Testimonies";
import AboutUs from "./pages/aboutUs";
import Change from "./pages/change";
import Donationn from "./pages/donationn";
import Email from "./pages/email";
import Services from "./pages/services";
import Setting from "./pages/setting";
import SignUp from "./pages/signup";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={AboutUs} />
        <Route path="/services" component={Services} />
        <Route path="/signup" component={SignUp} />
        <Route path="/FAQs" component={FAQs} />
        <Route path="/setting" component={Setting} />
        <Route path="/forgot" component={Forgot} />
        <Route path="/donation" component={Donationn} />
        <Route path="/login" component={Login} />
        <Route path="/email" component={Email} />
        <Route path="/change" component={Change} />
        <Route
          path="/donation-form"
          component={() => <DonationForm UserPfp="" />}
        />
        {categoryRoutes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            component={() => (
              <Categories
                headerTitle={route.headerTitle}
                iconlink={route.iconlink}
                CanotParagraphe={route.CanotParagraphe}
                bimageUrl={route.bimageUrl}
                category={route.category}
              />
            )}
          />
        ))}
        <Route path="/reviews" component={Testimonies} />
        <Route path="*" component={NotFound} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
