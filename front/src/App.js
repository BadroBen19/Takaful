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
import PrivateRoute from "./pages/PrivateRoute";
import  ShareExperience  from "./pages/setting";
import Testimonies from "./pages/Testimonies";
import AboutUs from "./pages/aboutUs";
import Change from "./pages/change";
import Donationn from "./pages/donationn";
import Email from "./pages/email";
import postuser from "./pages/postuser";
import Services from "./pages/services";
import Setting from "./pages/setting";
import SignUp from "./pages/signup";

function App() {
  return (
    <Router>
      <Navbar />

      <Switch>
        <Route path="/donateforme" exact component={DonationForm} />
        <Route path="/sharexp" exact component={ShareExperience} />
        <Route path="/" exact component={Home} />
        <Route path="/set" exact component={Setting} />
        <Route path="/about" component={AboutUs} />
        <Route path="/services" component={Services} />
        <Route path="/postuser" component={postuser} />
        <Route path="/signup" component={SignUp} />
        <Route path="/FAQs" component={FAQs} />
        <PrivateRoute path="/setting" component={Setting} />
        <Route path="/forgot" component={Forgot} />
        <Route path="/donation/:id" component={Donationn} />
        <Route path="/login" component={Login} />
        <Route path="/email" component={Email} />
        <Route path="/resetPassword/:id" component={Change} />

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
