import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const testimonials = [
  {
    name: 'Бай Иван',
    feedback: 'Тази платформа ми помогна да започна първата си работа като програмист!',
  },
  {
    name: 'Гощо',
    feedback: 'Страхотни уроци и много подкрепяща общност.',
  },
  {
    name: 'Теодор',
    feedback: 'Предизвикателствата ме мотивират да се подобрявам всеки ден.',
  },
];

const faqs = [
  {
    question: 'Безплатна ли е платформата?',
    answer: 'Да! Предлагаме безплатен достъп с много съдържание и задачи.',
  },
  {
    question: 'Нужен ли е предишен опит в програмирането?',
    answer: 'Не. Започваме от основите и помагаме да се развивате постепенно.',
  },
  {
    question: 'Мога ли да следя напредъка си?',
    answer: 'Разбира се – профилът ви показва вашите постижения и статистики.',
  },
];

const features = [
  {
    icon: '💻',
    title: 'Интерактивно програмиране',
    description: 'Практикувайте програмиране в реално време с незабавна обратна връзка.',
  },
  {
    icon: '📚',
    title: 'Обширни уроци',
    description: 'Стъпка по стъпка ръководства за множество програмни езици.',
  },
  {
    icon: '🏆',
    title: 'Следене на напредъка',
    description: 'Следете завършените уроци и изпити.',
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

  const goToLogin = () => {
    navigate("/logIn");
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email.match(/^\S+@\S+\.\S+$/)) {
      setEmailError('Моля, въведете валиден имейл адрес');
      return;
    }
    setEmailError('');
    alert(`Благодарим ви за абонамента с ${email}!`);
    setEmail('');
  };

  return (
    <main className="max-w-5xl mx-auto p-6 space-y-16">

      {/* Hero Section */}
      <section className="text-center">
        <h2 className="text-4xl font-extrabold mb-4">Научи програмиране по умния начин</h2>
        <p className="text-lg mb-6 max-w-xl mx-auto">
          Присъедини се към хиляди обучаващи се, които усвояват програмиране чрез интерактивни уроци и забавни предизвикателства.
        </p>
        <button onClick={goToLogin} className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition">
          Започни сега
        </button>
      </section>

      {/* Features */}
      <section>
        <h3 className="text-3xl font-bold mb-8 text-center">Функционалности</h3>
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
        <h3 className="text-3xl font-bold mb-6">Какво казват нашите потребители</h3>
        <p className="italic text-xl mb-4">"{testimonials[testimonialIndex].feedback}"</p>
        <p className="font-semibold">— {testimonials[testimonialIndex].name}</p>
        <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
          <button
            aria-label="Предишно мнение"
            onClick={handlePrevTestimonial}
            className="p-2 bg-white rounded-full shadow hover:bg-blue-100"
          >
            ‹
          </button>
        </div>
        <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
          <button
            aria-label="Следващо мнение"
            onClick={handleNextTestimonial}
            className="p-2 bg-white rounded-full shadow hover:bg-blue-100"
          >
            ›
          </button>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section>
        <h3 className="text-3xl font-bold mb-8 text-center">Често задавани въпроси</h3>
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
        <h3 className="text-2xl font-bold mb-4">Абонирай се за нашия бюлетин</h3>
        <form onSubmit={handleSubscribe} className="space-y-4">
          <input
            type="email"
            placeholder="Въведете вашия имейл"
            className={`w-full p-3 rounded border ${emailError ? 'border-red-500' : 'border-gray-300'}`}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {emailError && <p className="text-red-500 text-sm">{emailError}</p>}
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded w-full hover:bg-blue-700 transition"
          >
            Абонирай се
          </button>
        </form>
      </section>
    </main>
  );
}

export default BodyHomePage;
