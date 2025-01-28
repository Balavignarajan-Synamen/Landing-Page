import React from 'react'


export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Documentation" },
  { href: "#", text: "Tutorials" },
  { href: "#", text: "API Reference" },
  { href: "#", text: "Community Forums" },
];

export const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "Supported Devices" },
  { href: "#", text: "System Requirements" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Release Notes" },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Jobs" },
];

const Footer = () => {
  return (
    <>
           <footer className=' mt-20 border-t py-10  border-neutral-700'>
                  <div className='grid grid-cols-2 lg:grid-cols-3 gap-4  px-10'>
                      <div>
                        <h3 className='text-md font-semibold mb-4'>Resources</h3>
                        <ul className='space-y-2'>
                            {resourcesLinks.map((link, index)=>(
                                <li key={index}>
                                     <a className='bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text hover:text-red-500' href={link.href}>
                                       {link.text} 
                                     </a>
                                </li>
                            ))}
                        </ul>
                      </div>
                  {/* footer 2 */}
                      <div>
                        <h3 className='text-md font-semibold mb-4'>Resources</h3>
                        <ul className='space-y-2'>
                            {platformLinks.map((link, index)=>(
                                <li key={index}>
                                     <a className='bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text hover:text-red-500' href={link.href}>
                                       {link.text} 
                                     </a>
                                </li>
                            ))}
                        </ul>
                      </div>
                  {/* footer3  */}
                      <div>
                        <h3 className='text-md font-semibold mb-4'>Resources</h3>
                        <ul className='space-y-2'>
                            {communityLinks.map((link, index)=>(
                                <li key={index}>
                                      <a className='bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text hover:text-red-500' href={link.href}>
                                       {link.text} 
                                     </a>
                                </li>
                            ))}
                        </ul>
                      </div>
                  </div>

           </footer>
    </>
  )
}

export default Footer