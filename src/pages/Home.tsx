import React from 'react';
import { Link } from 'react-router-dom';
import { Activity, Brain, Video, Calendar, ShoppingBag, BookOpen, MessageSquare } from 'lucide-react';

const Home = () => {
  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&q=80"
            alt="Wellness background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-violet-900/90 to-indigo-900/90"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Your Journey to Complete Wellness Starts Here
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Discover a holistic approach to self-care with personalized wellness programs, expert guidance, and comprehensive health resources.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/signup"
                className="px-8 py-4 bg-violet-600 text-white rounded-full hover:bg-violet-700 transition-colors text-center font-semibold"
              >
                Start Your Journey
              </Link>
              <Link
                to="/learn-more"
                className="px-8 py-4 bg-white/10 text-white rounded-full hover:bg-white/20 transition-colors text-center font-semibold backdrop-blur-sm"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Comprehensive Wellness Solutions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard
            icon={<Activity className="h-8 w-8 text-violet-600" />}
            title="Physical Wellness"
            description="Personalized fitness routines and expert-guided workout plans tailored to your goals."
            link="/physical"
          />
          <FeatureCard
            icon={<Brain className="h-8 w-8 text-violet-600" />}
            title="Mental Wellness"
            description="Guided meditation, mindfulness exercises, and mental health resources."
            link="/mental"
          />
          <FeatureCard
            icon={<Video className="h-8 w-8 text-violet-600" />}
            title="Virtual Consultations"
            description="Connect with healthcare professionals through secure video calls."
            link="/consult"
          />
          <FeatureCard
            icon={<ShoppingBag className="h-8 w-8 text-violet-600" />}
            title="Medicine Store"
            description="Order prescribed medications with doorstep delivery and automatic refills."
            link="/medicine"
          />
          <FeatureCard
            icon={<Calendar className="h-8 w-8 text-violet-600" />}
            title="Health Tracking"
            description="Monitor your progress, set goals, and track your wellness journey."
            link="/dashboard"
          />
          <FeatureCard
            icon={<BookOpen className="h-8 w-8 text-violet-600" />}
            title="Resource Library"
            description="Access a wealth of articles, videos, and expert insights on health topics."
            link="/resources"
          />
        </div>
      </section>

      {/* AI Chat Section */}
      <section className="bg-gradient-to-b from-violet-50 to-white dark:from-gray-800 dark:to-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-6">24/7 AI Health Assistant</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                Get instant answers to your health queries, medication reminders, and wellness tips from our AI-powered chatbot.
              </p>
              <div className="flex items-center gap-4">
                <MessageSquare className="h-12 w-12 text-violet-600" />
                <div>
                  <p className="font-semibold">Always Available</p>
                  <p className="text-gray-600 dark:text-gray-400">Get help anytime, anywhere</p>
                </div>
              </div>
            </div>
            <div className="flex-1">
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6">
                <div className="flex flex-col gap-4">
                  <div className="flex gap-4 items-start">
                    <div className="bg-violet-100 dark:bg-violet-900 p-3 rounded-full">
                      <MessageSquare className="h-6 w-6 text-violet-600 dark:text-violet-300" />
                    </div>
                    <div className="flex-1 bg-gray-100 dark:bg-gray-700 rounded-lg p-4">
                      <p className="text-gray-800 dark:text-gray-200">How can I improve my sleep quality?</p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <div className="bg-violet-600 p-3 rounded-full">
                      <MessageSquare className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1 bg-violet-50 dark:bg-gray-700 rounded-lg p-4">
                      <p className="text-gray-800 dark:text-gray-200">Here are some evidence-based tips for better sleep:</p>
                      <ul className="list-disc ml-4 mt-2 space-y-1 text-gray-600 dark:text-gray-300">
                        <li>Maintain a consistent sleep schedule</li>
                        <li>Create a relaxing bedtime routine</li>
                        <li>Optimize your sleep environment</li>
                        <li>Limit screen time before bed</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const FeatureCard = ({ icon, title, description, link }: {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
}) => (
  <Link to={link} className="group">
    <div className="h-full bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2 group-hover:text-violet-600 transition-colors">{title}</h3>
      <p className="text-gray-600 dark:text-gray-400">{description}</p>
    </div>
  </Link>
);

export default Home;