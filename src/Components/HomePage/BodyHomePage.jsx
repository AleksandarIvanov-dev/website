import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const testimonials = [
  {
    name: 'Alice',
    feedback: 'This platform helped me land my first developer job!',
  },
  {
    name: 'Bob',
    feedback: 'Great tutorials and a very supportive community.',
  },
  {
    name: 'Carol',
    feedback: 'The challenges push me to improve every day.',
  },
];

const faqs = [
  {
    question: 'Is this platform free to use?',
    answer: 'Yes! We offer a free tier with lots of content and challenges.',
  },
  {
    question: 'Do I need prior programming experience?',
    answer: 'Not at all. We start from the basics and help you grow.',
  },
  {
    question: 'Can I track my progress?',
    answer: 'Absolutely, your profile tracks your achievements and stats.',
  },
];

const features = [
  {
    icon: '💻',
    title: 'Interactive Coding',
    description: 'Practice coding in real-time with instant feedback.',
  },
  {
    icon: '📚',
    title: 'Extensive Tutorials',
    description: 'Step-by-step guides for multiple programming languages.',
  },
  {
    icon: '🏆',
    title: 'Track your progress',
    description: 'Keep track of completed tutorials and exams.',
  },
];

const BodyHomePage = () => {
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [expandedFAQ, setExpandedFAQ] = useState(null);
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const navigate = useNavigate();

  const handleNextTestimonial = () => {
    setTestimonialIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrevTestimonial = () => {
    setTestimonialIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const toggleFAQ = (index) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };

  const useEffect = () =>{
    navigate("/logIn")
  }

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email.match(/^\S+@\S+\.\S+$/)) {
      setEmailError('Please enter a valid email address');
      return;
    }
    setEmailError('');
    alert(`Thank you for subscribing with ${email}!`);
    setEmail('');
  };



  return (
    <main className="max-w-5xl mx-auto p-6 space-y-16">

      {/* Hero Section */}
      <section className="text-center">
        <h2 className="text-4xl font-extrabold mb-4">Learn Programming the Smart Way</h2>
        <p className="text-lg mb-6 max-w-xl mx-auto">
          Join thousands of learners mastering coding through interactive tutorials and fun challenges.
        </p>
        <button onClick={useEffect}  className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition">
          Get Started
        </button>
      </section>

      {/* Features */}
      <section>
        <h3 className="text-3xl font-bold mb-8 text-center">Features</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map(({ icon, title, description }, i) => (
            <div
              key={i}
              className="border rounded-lg p-6 shadow hover:shadow-lg transition cursor-default"
            >
              <div className="text-5xl mb-4">{icon}</div>
              <h4 className="text-xl font-semibold mb-2">{title}</h4>
              <p className="text-gray-700">{description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section className="bg-gray-100 rounded-lg p-8 text-center relative">
        <h3 className="text-3xl font-bold mb-6">What Our Users Say</h3>
        <p className="italic text-xl mb-4">"{testimonials[testimonialIndex].feedback}"</p>
        <p className="font-semibold">— {testimonials[testimonialIndex].name}</p>
        <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
          <button
            aria-label="Previous Testimonial"
            onClick={handlePrevTestimonial}
            className="p-2 bg-white rounded-full shadow hover:bg-blue-100"
          >
            ‹
          </button>
        </div>
        <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
          <button
            aria-label="Next Testimonial"
            onClick={handleNextTestimonial}
            className="p-2 bg-white rounded-full shadow hover:bg-blue-100"
          >
            ›
          </button>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section>
        <h3 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h3>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map(({ question, answer }, i) => (
            <div
              key={i}
              className="border rounded-md overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(i)}
                className="w-full text-left p-4 bg-blue-50 flex justify-between items-center"
              >
                <span className="font-medium">{question}</span>
                <span>{expandedFAQ === i ? '−' : '+'}</span>
              </button>
              {expandedFAQ === i && (
                <div className="p-4 bg-white border-t">
                  <p>{answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="bg-blue-50 rounded-lg p-8 text-center max-w-md mx-auto">
        <h3 className="text-2xl font-bold mb-4">Subscribe to Our Newsletter</h3>
        <form onSubmit={handleSubscribe} className="space-y-4">
          <input
            type="email"
            placeholder="Enter your email"
            className={`w-full p-3 rounded border ${emailError ? 'border-red-500' : 'border-gray-300'}`}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {emailError && <p className="text-red-500 text-sm">{emailError}</p>}
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded w-full hover:bg-blue-700 transition"
          >
            Subscribe
          </button>
        </form>
      </section>
    </main>
  );
}

export default BodyHomePage;