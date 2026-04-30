import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Phone, 
  Calendar, 
  Star, 
  CheckCircle2, 
  ShieldCheck, 
  Clock, 
  MapPin, 
  MessageCircle,
  ChevronRight,
  Smile,
  Stethoscope,
  Sparkles,
  Activity
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* Sticky WhatsApp Button */}
      <a 
        href="https://wa.me/1234567890" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition-transform hover:scale-110 hover:bg-green-600 focus:outline-none focus:ring-4 focus:ring-green-500/30"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="h-7 w-7" />
      </a>

      {/* Navbar */}
      <header className={`fixed top-0 z-40 w-full transition-all duration-300 ${isScrolled ? 'bg-white/90 shadow-sm backdrop-blur-md py-3' : 'bg-transparent py-5'}`}>
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground">
              <Smile className="h-6 w-6" />
            </div>
            <span className="text-2xl font-bold tracking-tight text-slate-900">Lumina<span className="text-primary">Dental</span></span>
          </div>
          <nav className="hidden md:flex items-center gap-8 font-medium text-slate-600">
            <a href="#services" className="hover:text-primary transition-colors">Services</a>
            <a href="#gallery" className="hover:text-primary transition-colors">Results</a>
            <a href="#about" className="hover:text-primary transition-colors">Our Team</a>
            <a href="#testimonials" className="hover:text-primary transition-colors">Reviews</a>
            <a href="#faq" className="hover:text-primary transition-colors">FAQ</a>
          </nav>
          <div className="flex items-center gap-4">
            <div className="hidden lg:flex items-center gap-2 text-slate-600 font-medium">
              <Phone className="h-4 w-4 text-primary" />
              <span>(555) 123-4567</span>
            </div>
            <Button className="rounded-full px-6 shadow-sm">
              Book Now
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
            alt="Smiling patient at dental clinic" 
            className="w-full h-full object-cover opacity-20"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-50 via-slate-50/95 to-transparent"></div>
        </div>

        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl"
            >
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-6">
                <Star className="h-4 w-4 fill-primary" />
                <span>Top Rated Dental Clinic in San Francisco</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 mb-6 leading-[1.1]">
                Pain-free dental care for a <span className="text-primary">confident smile.</span>
              </h1>
              <p className="text-lg text-slate-600 mb-8 max-w-lg leading-relaxed">
                Experience modern, gentle dentistry in a relaxing environment. We use the latest technology to ensure your comfort and deliver stunning results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="rounded-full text-base h-14 px-8 shadow-lg shadow-primary/25">
                  Book Appointment <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="rounded-full text-base h-14 px-8 bg-white/50 backdrop-blur-sm border-slate-200">
                  <Phone className="mr-2 h-5 w-5 text-primary" /> Call (555) 123-4567
                </Button>
              </div>
              
              <div className="mt-10 flex items-center gap-6 text-sm font-medium text-slate-600">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500" />
                  <span>Accepting New Patients</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500" />
                  <span>Most Insurances Accepted</span>
                </div>
              </div>
            </motion.div>

            {/* Inline Booking Form */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:ml-auto w-full max-w-md"
            >
              <Card className="border-0 shadow-2xl shadow-slate-200/50 bg-white/95 backdrop-blur-xl rounded-3xl overflow-hidden">
                <div className="bg-primary p-6 text-white text-center">
                  <h3 className="text-xl font-bold mb-1">Request an Appointment</h3>
                  <p className="text-primary-foreground/80 text-sm">We'll contact you to confirm your time.</p>
                </div>
                <CardContent className="p-6">
                  <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input id="name" placeholder="John Doe" className="bg-slate-50 border-slate-200" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" type="tel" placeholder="(555) 000-0000" className="bg-slate-50 border-slate-200" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="service">Service Needed</Label>
                      <Select>
                        <SelectTrigger className="bg-slate-50 border-slate-200">
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="cleaning">General Cleaning & Exam</SelectItem>
                          <SelectItem value="whitening">Teeth Whitening</SelectItem>
                          <SelectItem value="implants">Dental Implants</SelectItem>
                          <SelectItem value="braces">Invisalign / Braces</SelectItem>
                          <SelectItem value="emergency">Emergency Care</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <Button type="submit" className="w-full h-12 text-base font-semibold mt-2 rounded-xl">
                      Request Time
                    </Button>
                    <p className="text-xs text-center text-slate-500 mt-4">
                      By submitting, you agree to our privacy policy.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="border-y border-slate-200 bg-white py-10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 items-center opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                {[1,2,3,4,5].map((i) => (
                  <Star key={i} className="h-6 w-6 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <div className="font-bold text-lg text-slate-800">4.9/5 <span className="text-sm font-normal text-slate-500">on Google</span></div>
            </div>
            <div className="flex items-center gap-3 font-bold text-slate-800 text-lg">
              <ShieldCheck className="h-8 w-8 text-primary" />
              ADA Certified
            </div>
            <div className="flex items-center gap-3 font-bold text-slate-800 text-lg">
              <Clock className="h-8 w-8 text-primary" />
              15+ Years Experience
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Comprehensive Dental Care</h2>
            <p className="text-lg text-slate-600">From routine cleanings to complete smile makeovers, we offer everything you need under one roof.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Activity, title: "General Dentistry", desc: "Exams, cleanings, and preventative care to keep your smile healthy." },
              { icon: Sparkles, title: "Cosmetic Dentistry", desc: "Whitening, veneers, and bonding for a flawless, radiant smile." },
              { icon: Smile, title: "Orthodontics", desc: "Clear aligners and traditional braces for perfectly straight teeth." },
              { icon: Stethoscope, title: "Restorative Care", desc: "Implants, crowns, and bridges to restore function and aesthetics." }
            ].map((service, idx) => (
              <Card key={idx} className="border-0 shadow-sm hover:shadow-md transition-shadow bg-white rounded-2xl">
                <CardContent className="p-8">
                  <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 text-primary">
                    <service.icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{service.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Before/After Gallery */}
      <section id="gallery" className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Real Results, Real Smiles</h2>
              <p className="text-lg text-slate-600">See the transformations we've achieved for our patients. Your dream smile is closer than you think.</p>
            </div>
            <Button variant="outline" className="rounded-full">View Full Gallery</Button>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { img: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", label: "Teeth Whitening" },
              { img: "https://images.unsplash.com/photo-1606265752439-1f18756aa5fc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", label: "Invisalign Treatment" },
              { img: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", label: "Porcelain Veneers" }
            ].map((item, idx) => (
              <div key={idx} className="group relative overflow-hidden rounded-2xl aspect-[4/3] bg-slate-100">
                <img 
                  src={item.img} 
                  alt={item.label} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <span className="text-white font-medium text-lg">{item.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dentist Profile */}
      <section id="about" className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
            <div className="grid md:grid-cols-2 lg:grid-cols-5">
              <div className="lg:col-span-2 relative h-64 md:h-auto">
                <img 
                  src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Dr. Sarah Jenkins" 
                  className="absolute inset-0 w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="lg:col-span-3 p-8 md:p-12 lg:p-16 flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-6 w-fit">
                  Lead Dentist
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Meet Dr. Sarah Jenkins, DDS</h2>
                <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                  With over 15 years of experience in cosmetic and restorative dentistry, Dr. Jenkins is dedicated to providing pain-free, compassionate care. She believes that a healthy smile is the foundation of overall well-being.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    "DDS from University of California, San Francisco",
                    "Member of the American Dental Association (ADA)",
                    "Certified Invisalign Provider",
                    "Specializes in Dental Anxiety Management"
                  ].map((credential, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-slate-700">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>{credential}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex items-center gap-4">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/ADA_Logo.svg/1200px-ADA_Logo.svg.png" alt="ADA Logo" className="h-12 object-contain grayscale opacity-60" referrerPolicy="no-referrer" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-24 bg-primary text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Don't Just Take Our Word For It</h2>
            <p className="text-primary-foreground/80 text-lg">Read what our patients have to say about their experience at Lumina Dental.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Michael T.", quote: "I've always been terrified of the dentist, but Dr. Jenkins and her team completely changed that. The procedure was completely pain-free and the staff was incredibly comforting." },
              { name: "Jessica R.", quote: "Got my Invisalign done here and the results are amazing. The clinic is spotless, modern, and they always run on time. Highly recommend to anyone looking for a new dentist." },
              { name: "David L.", quote: "Had a dental emergency on a Friday afternoon. They squeezed me in immediately and fixed my broken crown. Exceptional service and very transparent pricing." }
            ].map((review, idx) => (
              <Card key={idx} className="bg-white/10 border-white/20 text-white backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="flex gap-1 mb-6">
                    {[1,2,3,4,5].map((i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-lg leading-relaxed mb-6">"{review.quote}"</p>
                  <div className="font-semibold">{review.name}</div>
                  <div className="text-primary-foreground/60 text-sm">Verified Patient</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-slate-600">Addressing your common concerns so you can feel confident about your visit.</p>
          </div>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1" className="border-slate-200">
              <AccordionTrigger className="text-left text-lg font-semibold text-slate-900 hover:text-primary">Will the treatment hurt?</AccordionTrigger>
              <AccordionContent className="text-slate-600 text-base leading-relaxed">
                We prioritize your comfort above all else. We use modern techniques, topical numbing gels, and advanced anesthetics to ensure that your treatment is as pain-free as possible. For anxious patients, we also offer sedation options.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="border-slate-200">
              <AccordionTrigger className="text-left text-lg font-semibold text-slate-900 hover:text-primary">Do you accept my insurance?</AccordionTrigger>
              <AccordionContent className="text-slate-600 text-base leading-relaxed">
                We accept most major PPO dental insurance plans. Our front desk team will happily verify your benefits before your appointment and file claims on your behalf to maximize your coverage.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="border-slate-200">
              <AccordionTrigger className="text-left text-lg font-semibold text-slate-900 hover:text-primary">How long does a typical appointment take?</AccordionTrigger>
              <AccordionContent className="text-slate-600 text-base leading-relaxed">
                A standard new patient exam and cleaning usually takes about 60 minutes. We respect your time and strive to keep our schedule running perfectly on time, so you won't be kept waiting in the lobby.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4" className="border-slate-200">
              <AccordionTrigger className="text-left text-lg font-semibold text-slate-900 hover:text-primary">What if I have a dental emergency?</AccordionTrigger>
              <AccordionContent className="text-slate-600 text-base leading-relaxed">
                We leave room in our daily schedule to accommodate dental emergencies. If you are experiencing severe pain, bleeding, or a broken tooth, please call us immediately and we will see you as soon as possible.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Ready for a Brighter Smile?</h2>
          <p className="text-lg text-slate-600 mb-8">Join thousands of happy patients in San Francisco. Book your appointment today and take the first step towards optimal dental health.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="rounded-full text-base h-14 px-8 shadow-lg shadow-primary/25">
              Book Appointment Now
            </Button>
            <Button size="lg" variant="outline" className="rounded-full text-base h-14 px-8 border-slate-300">
              Call (555) 123-4567
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-white">
                  <Smile className="h-5 w-5" />
                </div>
                <span className="text-xl font-bold tracking-tight text-white">Lumina<span className="text-primary">Dental</span></span>
              </div>
              <p className="mb-6 text-slate-400">Providing exceptional, pain-free dental care in a modern and relaxing environment.</p>
              <div className="flex gap-4">
                {/* Social Icons Placeholders */}
                <div className="h-10 w-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary transition-colors cursor-pointer">
                  <span className="sr-only">Facebook</span>
                  <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </div>
                <div className="h-10 w-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary transition-colors cursor-pointer">
                  <span className="sr-only">Instagram</span>
                  <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                <li><a href="#services" className="hover:text-primary transition-colors">Our Services</a></li>
                <li><a href="#about" className="hover:text-primary transition-colors">Meet the Doctor</a></li>
                <li><a href="#gallery" className="hover:text-primary transition-colors">Smile Gallery</a></li>
                <li><a href="#testimonials" className="hover:text-primary transition-colors">Patient Reviews</a></li>
                <li><a href="#faq" className="hover:text-primary transition-colors">FAQ</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-6">Contact Us</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>123 Market Street, Suite 400<br/>San Francisco, CA 94105</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-primary shrink-0" />
                  <span>(555) 123-4567</span>
                </li>
                <li className="flex items-center gap-3">
                  <MessageCircle className="h-5 w-5 text-primary shrink-0" />
                  <span>info@luminadental.com</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-6">Hours</h4>
              <ul className="space-y-3">
                <li className="flex justify-between"><span>Monday - Thursday</span> <span>8:00 AM - 6:00 PM</span></li>
                <li className="flex justify-between"><span>Friday</span> <span>8:00 AM - 2:00 PM</span></li>
                <li className="flex justify-between"><span>Saturday</span> <span>By Appointment</span></li>
                <li className="flex justify-between text-slate-500"><span>Sunday</span> <span>Closed</span></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">
            <p>© {new Date().getFullYear()} Lumina Dental. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

