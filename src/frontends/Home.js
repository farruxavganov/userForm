"use client"

import { useState } from 'react';
import SubscriberForm from '../components/SubscriberForm';
import {TeacherCollection, AccountantCollection, OtherCallection} from '../store';
import "./home.css"

const Home = () => {
  const [others, setOthers] = useState(OtherCallection);
  const [accountantCollection, setAccountantCollection] = useState(AccountantCollection);
  const [teacherCollection, setTeacherCollection] = useState([TeacherCollection]);

  const handleFormSubmit = (formData) => {

    if (formData.role === 'accountant') {
      setAccountantCollection([...accountantCollection, formData]);
    } else if (formData.role === 'teacher') {
      setTeacherCollection([...teacherCollection, formData])
    } else {
        setOthers([...others, formData]);
    }
  };

  return (
    <div className="home d-flex justify-content-center flex-column">
      <h1 className="text-center">Form Handling</h1>
      <SubscriberForm onSubmit={handleFormSubmit} />
      <p>Number of Subscribers: {others.length + accountantCollection.length + teacherCollection.length}</p>
      <p>Number of Teachers: {teacherCollection.length}</p>
      <p>Number of Accountants: {accountantCollection.length}</p>
      <p>Number of Others: {others.length}</p>
    </div>
  );
};

export default Home;
