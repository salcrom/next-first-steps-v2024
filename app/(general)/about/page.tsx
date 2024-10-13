import type { Metadata } from "next";


export const metadata: Metadata = {
 title: 'ABOUT Title',
 description: 'ABOUT Description',
 keywords: ['About Page','Sergio','información','...'],
};

export default function AboutPage() {
    return (
        <span className="text-7xl">About Page</span>
    )
}
