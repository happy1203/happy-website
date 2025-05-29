
import { Card, CardContent } from "./components/ui/card";
import { Button } from "./components/ui/button";
import { Mail, Linkedin, FileText } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-800 p-6 md:p-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-2">Happy Patel</h1>
        <p className="text-lg mb-6">Product Manager & CS/BBA Student @ UW</p>

        <div className="flex gap-4 mb-10">
          <a href="mailto:h342pate@uwaterloo.ca" target="_blank" rel="noopener noreferrer">
            <Button><Mail className="mr-2 h-4 w-4" /> Email</Button>
          </a>
          <a href="https://linkedin.com/in/happy-patel1212" target="_blank" rel="noopener noreferrer">
            <Button><Linkedin className="mr-2 h-4 w-4" /> LinkedIn</Button>
          </a>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
            <Button><FileText className="mr-2 h-4 w-4" /> Resume</Button>
          </a>
          <a href="portfolio.html">
            <Button>Portfolio</Button>
          </a>
        </div>

        <section className="space-y-6">
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-2">About Me</h2>
              <p>
                I'm a CS and Business student at the University of Waterloo and Wilfrid Laurier University, currently focused on product management and building digital tools that make people’s lives easier.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-2">Projects</h2>
              <ul className="list-disc list-inside space-y-2">
                <li><strong>Travel and Tourism Web App</strong> – Full-stack app for booking tours, built with SQL, React, and Firebase.</li>
                <li><strong>Mood Switch App</strong> – Simple mobile app for mood tracking and journaling.</li>
                <li><strong>SAT Problem Generator</strong> – Tkinter-based Python GUI to randomize and quiz SAT math problems.</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-2">Experience</h2>
              <ul className="list-disc list-inside space-y-2">
                <li><strong>Product Manager @ Interac</strong> – Led e-gifting roadmap and built MVP analytics hub.</li>
                <li><strong>Software Developer @ Magnet Forensics</strong> – Built CLI tools and optimized UI with React and Clojure.</li>
                <li><strong>Product Manager @ Noomi</strong> – Drove user research and redesigned onboarding flows.</li>
              </ul>
            </CardContent>
          </Card>
        </section>
      </div>
    </main>
  );
}
