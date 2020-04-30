import React, { useState, useEffect} from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'
import TextField from '@material-ui/core/TextField';

export default function About() { 

  const textInput = {
    margin: 10  
  }

  const [progress, setProgress] = useState(0);
  const [about_info, setAboutInfo] = useState("")

  function handleChange (event) {
    setAboutInfo(event.target.value)
  }

  useEffect(() => {
    function tick() {
      // reset when reaching 100%
      setProgress((oldProgress) => (oldProgress >= 100 ? 0 : oldProgress + 1))
    }

    const timer = setInterval(tick, 50)
    return () => {
      clearInterval(timer)
    }
  }, [])

  return (
  <div>
      <h1>About</h1>
      <CircularProgress variant="determinate" color="secondary" value={progress}/>
      <form>
        <TextField 
          required id="standard-required" 
          label="Required"  
          onChange={handleChange} 
          helperText="Name"
          style={textInput}
        />
        <TextField 
          disabled id="standard-disabled" 
          label="Disabled" 
          helperText="Ethnicity"
          style={textInput}
        />
        <TextField 
          required id="standard-password-input" 
          label="Required" 
          type="password"
          helperText="Enter Password"
          style={textInput}
        />
        <br />  
        <TextField 
          id="standard-read-only" 
          label="Read Only" 
          defaultValue="Pakistan"
          helperText="Country"
          InputProps={{
            readOnly: true,
          }}
          style={textInput}
        />
        <TextField 
          required id="standard-number" 
          label="Required" 
          defaultValue=""
          helperText="Phone Number"
          style={textInput}
        />
        <TextField 
          required id="standard-gender" 
          label="Required" 
          helperText="Gender"
          style={textInput}
        />
        <br />
        <button>Submit</button>
      </form>
      <p>{about_info}</p>
  </div>
)
}
