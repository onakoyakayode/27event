import React from 'react'
import './FAQ.css'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const FAQ = () => {
  return (
    <div className='faqs'>
      <div className='faqs-title'>
        <h2>Frequently asked questions</h2>
      </div>
      <div>
        <Accordion className='accordion'>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon className='accordion-icon'/>}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className='accordion-title'>What is the cost of the food and delivery?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className='accordion-details'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              malesuada lacus ex, sit amet blandit leo lobortis eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion className='accordion'>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon className='accordion-icon'/>}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className='accordion-title'>How long will it take for the food to arrive?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className='accordion-details'>
              When the customer orders lunch, it will arrive between 10am and 12pm at their place. While for dinner orders, the food will arrive at the customer's place between 4-6pm. 
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion className='accordion'>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon className='accordion-icon'/>}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className='accordion-title'>I'm allergic to seafood, can i receive another meal instead?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className='accordion-details'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              malesuada lacus ex, sit amet blandit leo lobortis eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion className='accordion'>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon className='accordion-icon'/>}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className='accordion-title'>Is salt used in the food?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className='accordion-details'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              malesuada lacus ex, sit amet blandit leo lobortis eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion className='accordion'>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon className='accordion-icon' />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className='accordion-title'>Can i drink juice too?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className='accordion-details'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              malesuada lacus ex, sit amet blandit leo lobortis eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
      
      </div>
    </div>
  )
}

export default FAQ