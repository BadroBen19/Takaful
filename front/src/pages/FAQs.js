import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faQuestionCircle, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import './FAQs.css';

const FAQs = () => {
  return (
    <div className="tree">
      
      <div className="branch branchright">
        <div className="horizontal-line righ"></div>
        <div className="question">
          <FontAwesomeIcon icon={faQuestionCircle} className="question-icon" />
          <span className="question-text">What is Takaful?</span>
        </div>
        <div className="answer">
          <FontAwesomeIcon icon={faCheckCircle} className="answer-icon" />
          <span className="answer-text">Takaful is a website dedicated to providing financial support for various causes. It allows users to raise funds for personal needs or charitable purposes, as well as make donations to individuals or organizations in need.</span>
        </div>
   
      </div>
      <div className="branch branchleft">
        <div className="horizontal-line lef"></div>
     
        <div className="question">
          <FontAwesomeIcon icon={faQuestionCircle} className="question-icon" />
          <span className="question-text">How does Takaful work?</span>
        </div>
        <div className="answer">
          <FontAwesomeIcon icon={faCheckCircle} className="answer-icon" />
          <span className="answer-text">Takaful can be divided into two parts: the first part involves making donations, and the second part involves receiving donations. When making a donation, users specify the cause and the recipient. When receiving donations, users create a form specifying the cause and basic information, then present it to potential donors who choose to contribute, This process forms a continuous cycle, where users can give or receive donations ...</span>
        </div>
      </div>
      <div className="branch branchright">
        <div className="horizontal-line righ"></div>
        <div className="question">
          <FontAwesomeIcon icon={faQuestionCircle} className="question-icon" />
          <span className="question-text">What causes I can raise funds for or donate to on Takaful ?</span>
        </div>
        <div className="answer">
          <FontAwesomeIcon icon={faCheckCircle} className="answer-icon" />
          <span className="answer-text">You can raise funds for or donate to a variety of causes on Takaful. These include disease research and treatment, supporting victims of natural disasters, providing education for underprivileged groups, aiding the impoverished, funding scientific research, supporting social programs for disadvantaged children, and many others. Takaful provides a platform for individuals to support a wide range of charitable initiatives and make a positive impact in various areas of need</span>
        </div>
       
      </div>
      <div className="branch branchleft">
        <div className="horizontal-line lef"></div>
       
        <div className="question">
          <FontAwesomeIcon icon={faQuestionCircle} className="question-icon" />
          <span className="question-text">How can I make a donation to those in need through Takaful?</span>
        </div>
        <div className="answer">
          <FontAwesomeIcon icon={faCheckCircle} className="answer-icon" />
          <span className="answer-text">You can easily donate to those in need through Takaful. All you have to do is visit the Takaful website and click on "Donate." You'll see various categories you can donate to. Choose a category, and within it, you'll find several pots. Select the pot you wish to support, then click on "Donate" to find a simple form to fill out. You can specify the amount you'd like to donate and more. After completing the process, you will have effectively contributed to supporting and changing someone's life!</span>
        </div>
      </div>
      <div className="branch branchright">
        <div className="horizontal-line righ"></div>
        <div className="question">
          <FontAwesomeIcon icon={faQuestionCircle} className="question-icon" />
          <span className="question-text">How do I create an account on Takaful?</span>
        </div>
        <div className="answer">
          <FontAwesomeIcon icon={faCheckCircle} className="answer-icon" />
          <span className="answer-text">Creating an account on Takaful is only available for those who wish to receive donations, so donors won't have accounts, which distinguishes Takaful! If you're a donor, you can simply fill out a simple form specifying the amount you want to donate, your account number, and so on. This way, you can donate easily. As for donation recipients, they can create an account. To do so, you can click on the "receive donation" button, which prompts you to log in if you have an account or sign up if you don't. Upon clicking "sign up," you'll fill out the provided form, and thus, your account will be created effortlessly.</span>
        </div>
        
      </div>
      <div className="trunk"></div>
    </div>
  );
}

export default FAQs;
