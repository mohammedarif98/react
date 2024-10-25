import React from 'react';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate('/product', { replace: true });
  };

  return (
    <div>
      {/* <h1 className='text-5xl'>contact page</h1> */}
      <button 
        className="bg-orange-600 p-2 min-w-52 my-10 mx-2" 
        onClick={handleRedirect}
      >
        Go to product page
      </button>
      <button 
        className="bg-green-600 p-2 min-w-52 my-10 mx-2" 
        onClick={() => navigate('info')}
      >
        Go to contact-Info page
      </button>
      <button 
        className="bg-sky-900 text-slate-50 p-2 min-w-52 my-10 mx-2" 
        onClick={() => navigate('form')}
      >
        Go to contact-form page
      </button>
    </div>
  );
};

export default Contact;
