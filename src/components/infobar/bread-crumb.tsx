import React from 'react'
'use client '

type Props = {}

const BreadCrumb = (props: Props) => {
    // WIP: set up use side bar hook for real time chat and chatbot stuff
    // WIP: setup the description and the switch
  return (
    <div className="flex flex-col"> 
        <div className="flex gap-5 items-center">
            <h2 className="text-3xl font-bold capitalize">
                Title
            </h2>

        </div>
        <p className="text-gray-500 text-sm">
        {/* {page == 'settings'
          ? 'Manage your account settings, preferences and integrations'
          : page == 'dashboard'
          ? 'A detailed overview of your metrics, usage, customers and more'
          : page == 'appointment'
          ? 'View and edit all your appointments'
          : page == 'email-marketing'
          ? 'Send bulk emails to your customers'
          : page == 'integration'
          ? 'Connect third-party applications into Corinna-AI'
          : 'Modify domain settings, change chatbot options, enter sales questions and train your bot to do what you want it to.'} */}
          Hello world I am a sentence
      </p>
    </div>
  )
}

export default BreadCrumb