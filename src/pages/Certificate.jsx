import React from 'react';
import { Grid, Paper } from '@mui/material';

const MyComponent = () => {
  return (
      <div className='grid sm:grid-cols-1 sm:flex-wrap md:grid-cols-3 md:grid-flow-row lg:grid-cols-3 xl:grid-cols-4 md:mb-[10px]'>
      
          <Paper  spacing={3} style={{width:'70%', display:'flex', margin:"15px", marginLeft:"60px"}}>
              <img
                src={require('./Certificat/python certificat.jpg')}
                alt="Certificate"
                style={{ width: '100%', height: '100%', objectFit: 'cover', background:'white' , marginLeft:"2px" ,padding:"4px" , borderRadius:'14px'}}
              /> 
          </Paper>
          <Paper  spacing={3} style={{width: '80%', display:'flex', marginLeft:"40px", marginTop:'50px'}}>
              <img
                src={require('./Certificat/JavaScript.png')} 
                alt="Certificate"
                style={{ width: '98%', height: '100%', objectFit: 'cover', background:'white' , marginLeft:"3px" ,padding:"3px" , borderRadius:'7px'}}
              />
          </Paper>
          <Paper  spacing={3} style={{width: '80%', display:'flex', marginLeft:"40px", marginTop:'30px'}}>
              <img
                src={require('./Certificat/CSS certificat.jpg')} 
                alt="Certificate"
                style={{ width: '93%', height: '100%', objectFit: 'cover' , marginLeft:'10px'}}
              />
          </Paper>


        {/* <div className='md:w-96  left-50 mr-10  shadow-2xl bg-white'>  
            <Paper  spacing={2} style={{width:'30%', display:'flex', margin:"15px", marginLeft:"60px"}}>
              <img
                src={require('./Certificat/python certificat.jpg')} // Adjust the path accordingly
                alt="Certificate"
                style={{ width: '90%', height: '100%', objectFit: 'cover', margin:'10px', background:'white'}}
              /> 
            </Paper>
        </div> */}
         
        {/* <div className='md:w-96 ml-5 mr-10  shadow-2xl'>
            <Paper  spacing={3} style={{width: '80%', display:'flex', marginLeft:"40px", marginTop:'50px'}}>
              <img
                src={require('./Certificat/JavaScript.png')} // Adjust the path accordingly
                alt="Certificate"
                style={{ width: '93%', height: '100%', objectFit: 'cover' , marginLeft:'10px'}}
              />
            </Paper>
        </div>
        <div className='md:w-96 ml-5 mr-10 md:mr-10  shadow-2xl'>
            <Paper  spacing={3} style={{width: '80%', display:'flex', marginLeft:"40px", marginTop:'30px'}}>
              <img
                src={require('./Certificat/CSS certificat.jpg')} // Adjust the path accordingly
                alt="Certificate"
                style={{ width: '93%', height: '100%', objectFit: 'cover' , marginLeft:'10px'}}
              />
            </Paper>
        </div> */}
      </div>
  );
};

export default MyComponent;
