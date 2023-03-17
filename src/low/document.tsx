/* eslint-disable react/no-unescaped-entities */
import React from 'react'

const style ={
    p : "text-lg text-gray-700 " , 
    h2:"text-xl text-gray-700 font-bold my-4"
}

export const DocumentTermsOfService = () => {
  return (
    <div className='w-full min-h-screen  p-8 max-w-7xl mx-auto bg-white flex flex-col '>
        <h1 className="text-4xl text-blue-600 font-bold">
        Terms of Service
        </h1>
        <h2 className="text-xl text-gray-900 font-bold my-4 ">Introduction</h2>
        <p className={`${style.p}`}>These Terms of Service  govern your use of OpenFlows, a web application developed by us for Sonatrach R&D. By accessing or using OpenFlows, you agree to be bound by these Terms. If you do not agree to these Terms, you should not use OpenFlows.</p>
        <h2 className={`${style.h2}`}>License</h2>
        <p className={`${style.p}`}>We grant you a non-exclusive, non-transferable, revocable license to use OpenFlows for your internal business purposes in accordance with these Terms. You agree not to copy, modify, distribute, sell, or lease any part of OpenFlows, nor to reverse engineer or attempt to extract the source code of OpenFlows, except as explicitly permitted by applicable law.</p>
        <h2 className={`${style.h2}`}>User Accounts</h2>
        <p className={`${style.p}`}>To use certain features of OpenFlows, you may be required to create a user account. You agree to provide accurate, current, and complete information when creating your account, and to keep your account information up-to-date. You are solely responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.</p>
        <h2 className={`${style.h2}`} >User Content</h2>
        <p className={`${style.p}`}>You may submit content to OpenFlows, including but not limited to project plans, tasks, and comments User Content. You retain all ownership rights in your User Content, and we do not claim any ownership rights in your User Content. However, by submitting User Content to OpenFlows, you grant us a non-exclusive, royalty-free, worldwide license to use, copy, modify, distribute, and display your User Content in connection with the operation of OpenFlows.

You represent and warrant that you have all necessary rights to grant us the foregoing license and that your User Content does not violate any third-party rights or any applicable law.</p>
        <h2 className={`${style.h2}`}>Restrictions</h2>
        <h3 className={`${style.p}`}>You agree not to use OpenFlows in any manner that:</h3>
        <ul>
            <li>Infringes or violates any intellectual property right or other right of any person or entity;</li>
            <li>Is fraudulent, false, or misleading;</li>
            <li>Is unlawful, harmful, threatening, abusive, harassing, tortious, defamatory, vulgar, obscene, libelous, invasive of another's privacy, hateful, or racially, ethnically, or otherwise objectionable;</li>
            <li>Encourages or promotes illegal activity;</li>
            <li>Contains viruses or other harmful code;</li>
            <li>Interferes with or disrupts the operation of OpenFlows or the servers or networks used to make OpenFlows available</li>
            <li>Violates any applicable law or regulation.</li>
        </ul>

        <h2 className={`${style.h2}`}>Termination</h2>
        <p className={`${style.p}`}>We may terminate your access to OpenFlows at any time, for any reason, with or without notice. Upon termination, your license to use OpenFlows will immediately cease, and you must immediately stop using OpenFlows</p>
        <h2 className={`${style.h2}`}>Disclaimer of Warranties</h2>
        <p className={`${style.p}`}>OpenFlows is provided "as is" and "as available" without warranty of any kind. We do not warrant that OpenFlows will meet your requirements or that the operation of OpenFlows will be uninterrupted or error-free</p>
        <h2 className={`${style.h2}`}>Limitation of Liability</h2>
        <p className={`${style.p}`}>In no event will we be liable to you or any third party for any damages arising out of or in connection with your use of OpenFlows, including but not limited to lost profits, lost data, or any consequential, incidental, indirect, punitive, or special damages</p>
        <h2 className={`${style.h2}`}>Indemnification</h2>
        <p className={`${style.p}`}>You agree to indemnify, defend, and hold us harmless from any claim, demand, or damage, including reasonable attorneys' fees, arising out of or in connection with your use of OpenFlows or your breach of these Terms.</p>
        <h2 className={`${style.h2}`}>Governing Law and Jurisdiction</h2>
        <p className={`${style.p}`}>These Terms will be governed by and construed in accordance with the laws of Algeria, without giving</p>
    </div>
  )
}

