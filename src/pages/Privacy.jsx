import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Privacy = () => {
  return (
    <>
      <hr />
      <div className="main p-6 px-10">
        <h1 className='text-7xl mb-5 underline font-bold'>Privacy Policy</h1>
        <p className='font-bold my-2'>
          Effective: January 31, 2024 (previous version)
        </p>
        <p className='text-justify'>
          Universal Policies
          To maximize innovation and creativity, we believe you should have the flexibility to use our services as you see fit, so long as you comply with the law and don’t harm yourself or others. When using any OpenAI service, like ChatGPT, labs.openai.com, and the OpenAI API, these rules apply:
          <ol className='list-decimal'>
            <li>Comply with applicable laws—for example, don’t compromise the privacy of others, engage in regulated activity without complying with applicable regulations, or promote or engage in any illegal activity, including the exploitation or harm of children and the development or distribution of illegal substances, goods, or services.</li>
            <li>Don’t use our service to harm yourself or others—for example, don’t use our services to promote suicide or self-harm, develop or use weapons, injure others or destroy property, or engage in unauthorized activities that violate the security of any service or system. </li>
            <li>Don’t repurpose or distribute output from our services to harm others—for example, don’t share output from our services to defraud, scam, spam, mislead, bully, harass, defame, discriminate based on protected attributes, sexualize children, or promote violence, hatred or the suffering of others.</li>
            <li>Respect our safeguards—don’t circumvent safeguards or safety mitigations in our services unless supported by OpenAI (e.g., domain experts in our Red Teaming Network) or related to research conducted in accordance with our Sharing & Publication Policy.  </li>
          </ol>
          We report apparent child sexual abuse material (CSAM) to the National Center for Missing and Exploited Children.
        </p>
      </div>
    </>
  )
}

export default Privacy