import { useEffect, useState } from 'react';
import Button from '@mui/material/Button'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Text from '@mui/material/Typography';
import { Form } from 'react-router-dom';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import { Slider as DebtSlider } from '@mui/material';
import { useNavigate } from "react-router-dom";
import { animated, useSpring } from '@react-spring/web'
import axios from 'axios';
import useWindowSize from 'react-use/lib/useWindowSize';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import validator from 'validator'


const marks = [
  {
    value: 10000,
    label: '$10000',
  },
  {
    value: 20000,
  },
  {
    value: 30000,
    label: '$30000',
  },
  {
    value: 40000,
  },
  {
    value: 50000,
    label: '$50000',
  },
  {
    value: 60000,

  },
  {
    value: 70000,
    label: '$70000',
  },
  {
    value: 80000,
  },
  {
    value: 90000,
    label: '$90000',
  },
  {
    value: 100000,
  },
  {
    value: 110000,
    label: '$110000',
  },
  {
    value: 120000,
  },
  {
    value: 130000,
    label: '$130000',
  },
  {
    value: 140000,
  },
  {
    value: 150000,
    label: '$150000+',
  },
];

const marksMobile = [
  {
    value: 10000,
    label: '$10000',
  },
  {
    value: 150000,
    label: '$150000+',
  },
];

export default function Slider() {

  const [value, setValue] = useState({
    'option1': null,
    'option2': null,
    'option3': null,
    'first_name': null,
    'last_name': null,
    'email': null,
    'phone': null,
    'message': null
  });

  const [first_name, setFirstName] = useState(null);
  const [last_name, setLastName] = useState(null);
  const [email, setEmail] = useState(null);
  const [phone, setPhone] = useState(null);
  const [message, setMessage] = useState(null);

  const [emailError, setEmailError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);

  const [showSuccess, setShowSuccess] = useState(false);


  const { width, height } = useWindowSize()

  const [data, setData] = useState('')

  const [loading, setLoading] = useState(false)

  const [sliderValue, setSliderValue] = useState(20000)

  const [debtValue, setDebtValue] = useState(50000)

  const props = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 }
  })

  const CustomButtonGroup = (props) => {
    return (
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        {props.text}
      </button>
    )
  }

  const ButtonData = {
    'option1': {
      'option1': 'A Debt Relief Program to reduce my debt without a new loan.',
      'option2': 'A Debt Consolidation Loan.',
      'option3': 'I’m not sure, but I need to get out of debt.'
    },
    'option2': {
      'option1': 'Yes',
      'option2': 'No'
    }
  };

  const handleChange = (data) => {
    console.log(data)
    setData(data)
  };

  const handleSliderChange = (slider_event, new_value_slider) => {
    setSliderValue(new_value_slider)
    setDebtValue(new_value_slider)
    setData({'option': 'option3', 'text': new_value_slider})
  };

  useEffect(() => {
    if(value.option2 == 'No'){
      window.location.href = 'http://affordabledebtconsolidation.com/loans'
    }
  }, [value])


  const handleSubmit = () => {
    setLoading(true)

    if(data){
      setValue({
        ...value,
        [data.option]: data.text
      });
    }

    if(first_name && last_name && email && phone){
      if(validator.isEmail(email) && validator.isMobilePhone('+1' + phone)){
        console.log('valid')

        setValue({
          ...value,
          'first_name': first_name,
          'last_name': last_name,
          'email': email,
          'phone': phone,
          'message': message
        });

        axios(
          {
            method: 'get',
            url: 'https://hooks.zapier.com/hooks/catch/15707022/3hcw9kg?first_name=' + first_name + '&last_name=' + last_name + '&email=' + email + '&phone=' + phone + '&message=' + message + '&option3=' + value.option3 + '&option1=' + value.option1 + '&option3=' + value.option3,
          }
        )
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
      }

      setShowSuccess(true);
    }

    setLoading(false)
  }

  return (
    <div className="relative isolate px-10 sm:py-20 lg:py-24">
      <div
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#22c55e] to-[#166534] opacity-25 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>

      
      <div className="mx-auto max-w-6xl py-32 sm:py-48 lg:py-56">

        {(value.option1 == null && value.option2 == null) ? (
          <div className="text-center m-5">
            <p 
              className="text-4xl font-bold tracking-tight sm:text-4xl text-sky-700 -mx-10"
            >
              Envision a Future Where you are a Proud 
            </p>

            <div
              className="text-4xl font-bold tracking-tight sm:text-4xl text-sky-700 -mx-10"
            >
              <span className="underline decoration-green-600 decoration-4">Debt Free</span>
            </div>
            
            <p 
              className="text-4xl font-bold tracking-tight sm:text-4xl text-sky-700 -mx-10"
            >
              <span className='text-green-600'>Texan</span>
            </p>
          </div>
        ) :
          <>
          </>
        }
        
        <div className="flex justify-center items-center mt-15">
          <div className="w-full justify-center">
            {((value.option1 == null) && (value.option2 == null)) ?
              <div className="justify-center">
                <p
                  className="text-gray-700 text-center text-lg font-bold mb-4"
                >
                  I am looking for...
                </p>
                <Box
                  className="justify-center align-center"
                  sx={{
                    display: 'flex',
                    '& > *': {
                      m: 1,
                    },
                  }}
                >
                  <ButtonGroup
                    orientation="vertical"
                    aria-label="vertical outlined button group"
                    className="gap-4"
                  >
                    {Object.keys(ButtonData['option1']).map((key) => (
                      <button
                        key={key}
                        className='items-center justify-center align-items text-gray-700 font-bold py-2 px-4 rounded border border-gray-400 hover:bg-sky-700 hover:text-white hover:outline-none hover:ring-2 hover:ring-sky-900 hover:ring-opacity-50 hover:scale-110 transform transition-all duration-500 ease-in-out'
                        onClick={()=>handleChange({'option': 'option1', 'text': ButtonData['option1'][key] })}
                      >
                        {ButtonData['option1'][key]}
                      </button>
                    ))}
                  </ButtonGroup>
                </Box>
              </div>
              :
              <>
              </>
            }

            {((value.option1 !== null) && (value.option2 == null)) ?
              <div className="w-auto justify-center items-center align-center">
                <p
                  className="text-gray-700 text-center text-lg font-bold mb-4"
                >
                  Are you a texas resident?
                </p>
                <Box
                  sx={{
                    '& > *': {
                      m: 1,
                    },
                  }}
                >
                  <ButtonGroup
                    orientation="horizontal"
                    aria-label="vertical outlined button group"
                    className="gap-4"
                  >
                    {Object.keys(ButtonData['option2']).map((key) => (
                      <button
                        key={key}
                        className='items-center justify-center align-items text-gray-700 font-bold py-2 px-4 rounded border border-gray-400 hover:bg-sky-700 hover:text-white hover:outline-none hover:ring-2 hover:ring-sky-900 hover:ring-opacity-50 hover:scale-110 transform transition-all duration-500 ease-in-out'
                        onClick={()=>handleChange({'option': 'option2', 'text': ButtonData['option2'][key] })}
                      >
                        {ButtonData['option2'][key]}
                      </button>
                    ))}
                  </ButtonGroup>
                </Box>
              </div>
              :
              <>
              </>
            }

            {((value.option1 !== null) && (value.option2 == 'No')) ?
              <div className="w-auto justify-center items-center">
                <p
                  className='items-center justify-center align-items text-gray-700 font-bold'
                >
                  redirecting you shortly ...
                </p>
              </div>
              :
              <>
              </>
            }

            {((value.option1 !== null) && (value.option2 == 'Yes') && (value.option3 == null)) ?
              <div className="w-auto justify-center items-center m-2 px-2">
                <p
                  className="text-gray-700 text-center text-lg font-bold mb-4"
                >
                  How much debt do you have?
                </p>

                <p
                  className="text-gray-700 text-center text-4xl font-bold"
                >
                  ${debtValue}
                </p>

                <DebtSlider
                  defaultValue={50000}
                  min={10000}
                  max={150000}
                  marks={marks}
                  step={1000}
                  onChange={handleSliderChange}
                  sx={{
                    'font-size': '1.0rem',
                    'visibility': {
                      xs: 'hidden',
                      sm: 'hidden',
                      md: 'visible',
                      lg: 'visible',
                      xl: 'visible',
                    },
                  }}
                />

                <DebtSlider
                  defaultValue={50000}
                  min={10000}
                  max={150000}
                  step={1000}
                  marks={marksMobile}
                  onChange={handleSliderChange}
                  sx={{
                    'font-size': '1.0rem',
                    'visibility': {
                      xs: 'visible',
                      sm: 'visible',
                      md: 'hidden',
                      lg: 'hidden',
                      xl: 'hidden',
                    }
                  }}
                />

                <div className="w-full flex justify-center items-center mt-4 gap-4">
                  <button 
                    className="bg-sky-700 text-white font-bold py-2 px-10 rounded border-radius-5 focused:text-black focused:bg-white focused:border-black focused:border-2 focused:scale-105 transform transition-all duration-500 ease-in-out"
                    onClick={handleSubmit}
                  >
                    Continue
                  </button>
                </div>

              </div>
              :
              <>
              </>
            }

            {(value.option1 && value.option2 && value.option3 && !showSuccess) ?
              <div className="w-auto justify-center items-center px-4">
                <p
                  className="text-gray-700 text-center text-lg font-bold mb-4"
                >
                  Let's get aquiainted
                </p>
                <div className="mx-auto mt-16 max-w-xl sm:mt-20">
                  <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900 text-left">
                        First name
                      </label>
                      <div className="mt-2.5">
                        <input
                          type="text"
                          id="first-name"
                          autoComplete="given-name"
                          className="block w-full rounded-md px-3.5 py-2 text-gray-800 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 shadow-lg border-gray-300 border-2"
                          onChange={
                            (e) => {
                              setFirstName(e.target.value)
                            }
                          }
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-900 text-left">
                        Last name
                      </label>
                      <div className="mt-2.5">
                        <input
                          type="text"
                          name="last-name"
                          id="last-name"
                          autoComplete="family-name"
                          className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 shadow-lg border-gray-300 border-2"
                          onChange={
                            (e) => {
                              setLastName(e.target.value)
                            }
                          }
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-2">
                      <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900 text-left">
                        Email
                      </label>
                      <div className="mt-2.5">
                        {!emailError ?
                          <input
                            type="email"
                            name="email"
                            id="email"
                            autoComplete="email"
                            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 shadow-lg border-gray-300 border-2"
                            onChange={
                              (e) => {
                                console.log(validator.isEmail(e.target.value))
                                
                                if(validator.isEmail(e.target.value)){
                                  setEmail(e.target.value)
                                  setEmailError(false)
                                } else {
                                  setEmailError(true)
                                }
                              }
                            }
                          />
                          :
                          <input
                            type="email"
                            name="email"
                            id="email"
                            autoComplete="email"
                            className="block w-full rounded-md border-0 px-3.5 py-2 text-red-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 shadow-lg border-gray-300 border-2"
                            onChange={
                              (e) => {
                                if(validator.isEmail(e.target.value)){
                                  setEmail(e.target.value)
                                  setEmailError(false)
                                } else {
                                  setEmailError(true)
                                }
                              }
                            }
                          />
                        } 
                      </div>
                    </div>
                    <div className="sm:col-span-2">
                      <label htmlFor="phone-number" className="block text-sm font-semibold leading-6 text-gray-900 text-left">
                        Phone number
                      </label>
                      <div className="relative mt-2 rounded-md shadow-sm">
                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                          <label>
                            <span>+1</span>
                          </label>
                        </div>
                        {!phoneError ?
                          <input
                            type="tel"
                            name="phone-number"
                            id="phone-number"
                            autoComplete="tel"
                            className="block w-full rounded-md border-0 py-1.5 pl-10 pr-20 text-gray-900 border-2 shadow-lg border-gray-300 border-2"
                            onChange={
                              (e) => {
                                let phoneNum = '+1' + e.target.value

                                if(validator.isMobilePhone(phoneNum)){
                                  setPhone(phoneNum)
                                  setPhoneError(false)
                                } else {
                                  setPhoneError(true)
                                }
                              }
                            }
                          />
                          :
                          <input
                            type="tel"
                            name="phone-number"
                            id="phone-number"
                            autoComplete="tel"
                            className="block w-full rounded-md border-0 py-1.5 pl-10 pr-20 text-red-900 border-2 shadow-lg border-gray-300 border-2"
                            onChange={
                              (e) => {
                                let phoneNum = '+1' + e.target.value

                                if(validator.isMobilePhone(phoneNum)){
                                  setPhone(phoneNum)
                                  setPhoneError(false)
                                } else {
                                  setPhoneError(true)
                                }
                              }
                            }
                          />
                        } 
                      </div>
                    </div>
                    <div className="sm:col-span-2">
                      <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900 text-left">
                        Message
                      </label>
                      <div className="mt-2.5">
                        <textarea
                          name="message"
                          id="message"
                          rows={4}
                          className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 shadow-lg border-gray-300 border-2"
                          defaultValue={''}
                          onChange={
                            (e) => {
                              setMessage(e.target.value)
                            }
                          }
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mt-10">
                    <div className="w-full flex justify-center items-center mt-4 gap-4">
                      <button 
                        onClick={handleSubmit}
                        className="bg-sky-700 text-white font-bold py-2 px-10 rounded border-radius-5 focused:text-black focused:bg-white focused:border-black focused:border-2 focused:scale-105 transform transition-all duration-500 ease-in-out"
                      >
                        Continue
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              :
              <>
              </>
            }

            {(value.option1 && value.option2 && value.option3 && showSuccess) ?
              <div className="w-full flex justify-center items-center mt-4 mb-40 text-lg font-semibold text-green-700">
                Thank you for your submission!
              </div>
              :
              <>
              </>
            }
          </div>
        </div>

        {(value.option1 == null || value.option2 == null) ?
          <div className="w-full flex justify-center items-center mt-4 mb-40">
            <button 
              className="bg-red-700 text-white font-bold py-2 px-10 rounded border-radius-5 focused:text-black focused:bg-white focused:border-black focused:border-2 focused:scale-105 transform transition-all duration-500 ease-in-out"
              onClick={handleSubmit}
            >
              Next
            </button>
          </div>
          :
          <>
          </>
        }
      </div>

      <div
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#06b6d4] to-[#075985] opacity-25 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>

    </div>
  );
}