import React, { useState } from 'react';
import { MapPin, Calendar, Filter } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import EventCard from '../components/EventCard';

interface ThisWeekendProps {
  onNavigate: (page: string) => void;
  onEventClick: (eventId: string) => void;
}

export default function ThisWeekend({ onNavigate, onEventClick }: ThisWeekendProps) {
  const [selectedLocation, setSelectedLocation] = useState('Nairobi, Kenya');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedDay, setSelectedDay] = useState('All');

  const allEvents = [
    {
      id: '1',
      title: 'Weekend Art Exhibition',
      image: 'https://images.pexels.com/photos/1839919/pexels-photo-1839919.jpeg?auto=compress&cs=tinysrgb&w=600',
      date: 'Sat, Nov 2',
      day: 'Saturday',
      time: '10:00 AM',
      location: 'National Museum',
      attendees: 230,
      category: 'Culture',
      price: 'KES 300'
    },
    {
      id: '2',
      title: 'Jazz Night Live',
      image: 'https://images.pexels.com/photos/1481308/pexels-photo-1481308.jpeg?auto=compress&cs=tinysrgb&w=600',
      date: 'Sat, Nov 2',
      day: 'Saturday',
      time: '8:00 PM',
      location: 'Alliance Française',
      attendees: 189,
      category: 'Music',
      price: 'KES 800'
    },
    {
      id: '3',
      title: 'Morning Yoga in the Park',
      image: 'https://images.pexels.com/photos/3822647/pexels-photo-3822647.jpeg?auto=compress&cs=tinysrgb&w=600',
      date: 'Sun, Nov 3',
      day: 'Sunday',
      time: '6:00 AM',
      location: 'Karura Forest',
      attendees: 45,
      category: 'Fitness',
      price: 'Free'
    },
    {
      id: '4',
      title: 'Tech Thursday Meetup',
      image: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=600',
      date: 'Thu, Oct 31',
      day: 'Thursday',
      time: '6:00 PM',
      location: 'iHub Nairobi',
      attendees: 120,
      category: 'Technology',
      price: 'Free'
    },
    {
      id: '5',
      title: 'Friday Night Comedy',
      image: 'https://images.pexels.com/photos/713149/pexels-photo-713149.jpeg?auto=compress&cs=tinysrgb&w=600',
      date: 'Fri, Nov 1',
      day: 'Friday',
      time: '8:30 PM',
      location: 'Comedy Club Kenya',
      attendees: 156,
      category: 'Entertainment',
      price: 'KES 500'
    },
    {
      id: '6',
      title: 'Thursday Food Market',
      image: 'https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=600',
      date: 'Thu, Oct 31',
      day: 'Thursday',
      time: '12:00 PM',
      location: 'Village Market',
      attendees: 340,
      category: 'Food',
      price: 'Free'
    },
    {
      id: '7',
      title: 'Friday Beach Cleanup',
      image: 'https://images.pexels.com/photos/2422915/pexels-photo-2422915.jpeg?auto=compress&cs=tinysrgb&w=600',
      date: 'Fri, Nov 1',
      day: 'Friday',
      time: '8:00 AM',
      location: 'Diani Beach',
      attendees: 78,
      category: 'Community',
      price: 'Free'
    },
    {
      id: '8',
      title: 'Sunday Brunch & Music',
      image: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=600',
      date: 'Sun, Nov 3',
      day: 'Sunday',
      time: '11:00 AM',
      location: 'Java House Karen',
      attendees: 95,
      category: 'Food',
      price: 'KES 1200'
    }
  ];

  const days = ['All', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  // Filter events based on selected day and category
  const weekendEvents = allEvents.filter(event => {
    const matchesDay = selectedDay === 'All' || event.day === selectedDay;
    const matchesCategory = selectedCategory === 'All' || event.category === selectedCategory;
    return matchesDay && matchesCategory;
  });

  const categories = ['All', 'Music', 'Culture', 'Sports', 'Food', 'Technology', 'Fitness'];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Navbar onNavigate={onNavigate} currentPage="this-weekend" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-blue-100 px-4 py-2 rounded-full mb-6">
            <Calendar className="w-4 h-4 text-blue-600" />
            <span className="text-blue-600 text-sm font-medium">This Weekend</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Weekend Events Near You
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover exciting events happening this weekend in your area
          </p>
        </div>

        {/* Day Selection Buttons */}
        <div className="flex flex-wrap gap-3 mb-8 justify-center">
          {days.map((day) => (
            <button
              key={day}
              onClick={() => setSelectedDay(day)}
              className={`px-6 py-3 rounded-full font-semibold transition-all ${
                selectedDay === day
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-blue-300'
              }`}
            >
              {day}
            </button>
          ))}
        </div>

        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {weekendEvents.map((event) => (
            <EventCard
              key={event.id}
              {...event}
              onClick={onEventClick}
            />
          ))}
        </div>

        {weekendEvents.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No events found for this weekend</p>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
