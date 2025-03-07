
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Video, Users, Send } from 'lucide-react';

const Meeting = () => {
  const [meetingData, setMeetingData] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
    participants: '',
    topic: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setMeetingData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle form submission to a backend
    console.log('Meeting scheduled:', meetingData);
    // Reset form
    setMeetingData({
      name: '',
      email: '',
      date: '',
      time: '',
      participants: '',
      topic: ''
    });
    // Show success message (in a real app, you would use a toast notification)
    alert('Meeting scheduled successfully!');
  };

  const availableTimes = [
    "09:00 AM", "10:00 AM", "11:00 AM", "01:00 PM", 
    "02:00 PM", "03:00 PM", "04:00 PM", "05:00 PM"
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.4 }
    }
  };

  return (
    <section id="meeting" className="section-container bg-gradient-to-b from-background to-secondary/30">
      <div className="portfolio-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="section-title mx-auto after:left-1/2 after:-translate-x-1/2">Schedule a Meeting</h2>
          <p className="text-muted-foreground mb-12">
            Interested in working together? Schedule a virtual meeting with me to discuss your project needs.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-10">
          <motion.div 
            className="md:col-span-2 space-y-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div 
              className="glass-panel p-6 rounded-lg"
              variants={itemVariants}
            >
              <div className="p-4 bg-primary/10 rounded-lg inline-block mb-4">
                <Video size={28} className="text-primary" />
              </div>
              
              <h3 className="text-xl font-semibold mb-4">Virtual Consultation</h3>
              
              <p className="text-muted-foreground mb-6">
                Schedule a video call to discuss your project requirements, technical challenges, or potential collaboration opportunities.
              </p>
              
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="p-2 bg-primary/10 rounded-lg mr-3 mt-1">
                    <Clock size={16} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">Duration</h4>
                    <p className="text-sm text-muted-foreground">30-60 minutes</p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <div className="p-2 bg-primary/10 rounded-lg mr-3 mt-1">
                    <Calendar size={16} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">Availability</h4>
                    <p className="text-sm text-muted-foreground">Monday to Friday, 9 AM - 5 PM AEST</p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <div className="p-2 bg-primary/10 rounded-lg mr-3 mt-1">
                    <Users size={16} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">Participants</h4>
                    <p className="text-sm text-muted-foreground">Up to 5 people</p>
                  </div>
                </li>
              </ul>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="md:col-span-3"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div 
              className="glass-panel p-6 md:p-8 rounded-lg"
              variants={itemVariants}
            >
              <h3 className="text-xl font-semibold mb-6">Book Your Meeting</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={meetingData.name}
                      onChange={handleChange}
                      required
                      className="w-full p-3 rounded-lg border border-border bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary/50"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={meetingData.email}
                      onChange={handleChange}
                      required
                      className="w-full p-3 rounded-lg border border-border bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary/50"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="date" className="text-sm font-medium">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      value={meetingData.date}
                      onChange={handleChange}
                      required
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full p-3 rounded-lg border border-border bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary/50"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="time" className="text-sm font-medium">
                      Preferred Time
                    </label>
                    <select
                      id="time"
                      name="time"
                      value={meetingData.time}
                      onChange={handleChange}
                      required
                      className="w-full p-3 rounded-lg border border-border bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary/50"
                    >
                      <option value="">Select a time</option>
                      {availableTimes.map((time, index) => (
                        <option key={index} value={time}>
                          {time}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="participants" className="text-sm font-medium">
                    Number of Participants
                  </label>
                  <select
                    id="participants"
                    name="participants"
                    value={meetingData.participants}
                    onChange={handleChange}
                    required
                    className="w-full p-3 rounded-lg border border-border bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary/50"
                  >
                    <option value="">Select number of participants</option>
                    <option value="1">1 (Just me)</option>
                    <option value="2">2 people</option>
                    <option value="3">3 people</option>
                    <option value="4">4 people</option>
                    <option value="5">5 people</option>
                  </select>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="topic" className="text-sm font-medium">
                    Meeting Topic
                  </label>
                  <textarea
                    id="topic"
                    name="topic"
                    value={meetingData.topic}
                    onChange={handleChange}
                    required
                    rows={3}
                    className="w-full p-3 rounded-lg border border-border bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                    placeholder="Briefly describe what you'd like to discuss..."
                  ></textarea>
                </div>
                
                <motion.button
                  type="submit"
                  className="apple-button inline-flex items-center gap-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Send size={18} />
                  Schedule Meeting
                </motion.button>
              </form>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Meeting;
