import { Metadata } from "next";


export const metadata: Metadata = {
    title: 'CONTACT Title',
    description: 'CONTACT Description',
    keywords: ['Contact Page','Sergio','información','...'],
   };

export default function ContactPage(){
    return (
        <>
            <span className="text-7xl">Contact Page</span>
        </>
    )
}
