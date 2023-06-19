import { useEffect, useState } from 'react';
import Button from '@mui/material/Button'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Text from '@mui/material/Typography';
import { Form } from 'react-router-dom';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import { Slider as DebtSlider } from '@mui/material';
import { useNavigate } from "react-router-dom";


const marks = [
  {
    value: 0,
    label: '$1000',
  },
  {
    value: 1,
    label: '$10000',
  },
  {
    value: 2,
    label: '$30000',
  },
  {
    value: 3,
    label: '$50000',
  },
  {
    value: 4,
    label: '$50000',
  },
  {
    value: 5,
    label: '$150000',
  },
  {
    value: 6,
    label: '$1000',
  },
  {
    value: 7,
    label: '$10000',
  },
  {
    value: 8,
    label: '$150000',
  }
];

export default function Slider() {

  const [value, setValue] = useState({
    'option1': null,
    'option2': null
  })

  const [data, setData] = useState('')

  const [loading, setLoading] = useState(false)

  const [sliderValue, setSliderValue] = useState(20000)

  const [debtValue, setDebtValue] = useState(20000)

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
    console.log(slider_event, new_value_slider)
    setDebtValue(new_value_slider)
  };

  useEffect(() => {
    if(value.option2 == 'No'){
      window.location.href = 'http://affordabledebtconsolidation.com/loans'
    }
  }, [value])

  const handleSubmit = () => {
    setLoading(true)

    setValue({
      ...value,
      [data.option]: data.text
    });

    setLoading(false)
  }

  return (
    <div className="relative isolate px-6 lg:px-8">
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
        <div className="text-center m-5">
          <p 
            className="text-4xl font-bold tracking-tight sm:text-4xl text-sky-700 -mx-10"
          >
            Envision a Future Where you are a Proud 
          </p>

          <p 
            className="text-4xl font-bold tracking-tight sm:text-4xl text-sky-700 -mx-10"
          >
            <span className="underline decoration-green-600 decoration-4">DEBT-FREE</span>
          </p>

          <p 
            className="text-4xl font-bold tracking-tight sm:text-4xl text-sky-700 -mx-10"
          >
            <span className='text-green-600'>Texan</span>
          </p>
        </div>
        
        
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
              <div className="w-auto justify-center items-center">
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

            {((value.option1 !== null) && (value.option2 == 'Yes')) ?
              <div className="w-auto justify-center items-center m-5 px-10">
                <p
                  className="text-gray-700 text-center text-lg font-bold mb-4"
                >
                  How much debt do you have?
                </p>

                <p
                  className="text-gray-700 text-center text-lg font-bold mb-4"
                >
                  ${debtValue}
                </p>

                <DebtSlider
                  defaultValue={25}
                  step={1}
                  min={0}
                  max={50}
                  marks={marks}
                  onChange={handleSliderChange}
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
          </div>
        </div>

        {(value.option1 == null || value.option2 == null) ?
          <div className="w-full flex justify-center items-center mt-4 gap-4">
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