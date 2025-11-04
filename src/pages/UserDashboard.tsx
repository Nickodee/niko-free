import { Calendar, Heart, History, Download, QrCode, User, Bell, MessageCircle, ChevronLeft, ChevronRight, Users, Menu, X } from 'lucide-react';
import { useState, useRef } from 'react';

interface UserDashboardProps {
  onNavigate: (page: string) => void;
}

export default function UserDashboard({ onNavigate }: UserDashboardProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [accountMenuOpen, setAccountMenuOpen] = useState(false);

  const userProfile = {
    name: 'Alex Johnson',
    avatar: 'https://i.pravatar.cc/150?img=33',
    joinDate: 'January 2024',
    eventsAttended: 12,
    groupsJoined: 5
  };

  const upcomingEvents = [
    {
      id: '1',
      title: 'Nairobi Tech Summit 2025',
      image: 'https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?auto=compress&cs=tinysrgb&w=400',
      date: 'Sat, Nov 2',
      time: '9:00 AM',
      location: 'KICC, Nairobi',
      ticketId: 'TKT-2025-001'
    },
    {
      id: '2',
      title: 'Morning Yoga in the Park',
      image: 'https://images.pexels.com/photos/3822647/pexels-photo-3822647.jpeg?auto=compress&cs=tinysrgb&w=400',
      date: 'Tomorrow',
      time: '6:00 AM',
      location: 'Karura Forest',
      ticketId: 'TKT-2025-002'
    },
    {
      id: '3',
      title: 'Startup Networking Mixer',
      image: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=400',
      date: 'Nov 10',
      time: '6:00 PM',
      location: 'iHub Nairobi',
      ticketId: 'TKT-2025-003'
    }
  ];

  const bucketlistEvents = [
    {
      id: '4',
      title: 'Sunset Music Festival',
      image: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=400',
      date: 'Nov 15, 2025',
      location: 'Uhuru Gardens',
      price: 'KES 800',
      isOutdated: false
    },
    {
      id: '5',
      title: 'Mt. Kenya Hiking Adventure',
      image: 'https://images.pexels.com/photos/618848/pexels-photo-618848.jpeg?auto=compress&cs=tinysrgb&w=400',
      date: 'Oct 20, 2025',
      location: 'Mt. Kenya',
      price: 'Free',
      isOutdated: true
    },
    {
      id: '6',
      title: 'Art Gallery Opening',
      image: 'https://images.pexels.com/photos/1839919/pexels-photo-1839919.jpeg?auto=compress&cs=tinysrgb&w=400',
      date: 'Nov 20, 2025',
      location: 'Nairobi Gallery',
      price: 'KES 500',
      isOutdated: false
    }
  ];

  const eventHistory = [
    {
      id: '7',
      title: 'Jazz Night Live',
      image: 'https://images.pexels.com/photos/1481308/pexels-photo-1481308.jpeg?auto=compress&cs=tinysrgb&w=400',
      date: 'Oct 25, 2025',
      location: 'Alliance Française',
      rating: 5
    },
    {
      id: '8',
      title: 'Food & Wine Tasting',
      image: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=400',
      date: 'Oct 15, 2025',
      location: 'Villa Rosa Kempinski',
      rating: 4
    },
    {
      id: '9',
      title: 'Photography Workshop',
      image: 'https://images.pexels.com/photos/2833392/pexels-photo-2833392.jpeg?auto=compress&cs=tinysrgb&w=400',
      date: 'Oct 5, 2025',
      location: 'Nairobi National Park',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navigation */}
      <nav className="bg-white border-b border-gray-200 fixed top-0 left-0 right-0 z-50 shadow-sm">
        <div className="px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            {/* Left - Menu & Logo */}
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setSidebarOpen(true)}
                className="lg:hidden text-gray-500 hover:text-gray-700"
              >
                <Menu className="w-6 h-6" />
              </button>
              <h1 className="text-xl font-bold text-gray-900">Niko Free</h1>
            </div>

            {/* Right - Notifications, Messages, Account */}
            <div className="flex items-center space-x-3">
              {/* Notifications */}
              <button className="relative p-2.5 text-gray-600 hover:bg-gray-100 rounded-xl transition-colors">
                <Bell className="w-5 h-5" />
                <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>

              {/* Messages */}
              <button className="relative p-2.5 text-gray-600 hover:bg-gray-100 rounded-xl transition-colors">
                <MessageCircle className="w-5 h-5" />
                <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-blue-500 rounded-full"></span>
              </button>

              {/* Account Menu */}
              <div className="relative">
                <button
                  onClick={() => setAccountMenuOpen(!accountMenuOpen)}
                  className="flex items-center space-x-3 p-2 hover:bg-gray-100 rounded-xl transition-colors"
                >
                  <img
                    src={userProfile.avatar}
                    alt={userProfile.name}
                    className="w-9 h-9 rounded-full object-cover"
                  />
                  <div className="hidden sm:block text-left">
                    <p className="text-sm font-semibold text-gray-900">{userProfile.name}</p>
                    <p className="text-xs text-gray-500">Member</p>
                  </div>
                </button>

                {/* Account Dropdown */}
                {accountMenuOpen && (
                  <div className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-lg border border-gray-200 py-2 z-50">
                    <div className="px-4 py-3 border-b border-gray-100">
                      <p className="text-sm font-semibold text-gray-900">{userProfile.name}</p>
                      <p className="text-xs text-gray-500">Joined {userProfile.joinDate}</p>
                    </div>
                    <button className="w-full px-4 py-2.5 text-left text-sm text-gray-700 hover:bg-gray-50">
                      My Profile
                    </button>
                    <button className="w-full px-4 py-2.5 text-left text-sm text-gray-700 hover:bg-gray-50">
                      Settings
                    </button>
                    <div className="border-t border-gray-100 mt-2 pt-2">
                      <button 
                        onClick={() => onNavigate('landing')}
                        className="w-full px-4 py-2.5 text-left text-sm text-red-600 hover:bg-red-50"
                      >
                        Log Out
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex pt-16">
        {/* Mobile Sidebar Overlay */}
        {sidebarOpen && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Left Profile Sidebar */}
        <aside className={`fixed lg:sticky top-16 left-0 z-50 h-[calc(100vh-4rem)] w-80 bg-white border-r border-gray-200 transform transition-transform duration-300 lg:transform-none ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}>
          <div className="h-full overflow-y-auto p-6">
            {/* Close Button (Mobile) */}
            <button
              onClick={() => setSidebarOpen(false)}
              className="lg:hidden absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Profile Section */}
            <div className="text-center mb-8">
              <img
                src={userProfile.avatar}
                alt={userProfile.name}
                className="w-32 h-32 rounded-full object-cover mx-auto mb-4 border-4 border-blue-100"
              />
              <h2 className="text-2xl font-bold text-gray-900 mb-1">{userProfile.name}</h2>
              <p className="text-sm text-gray-500">Joined {userProfile.joinDate}</p>
            </div>

            {/* User Stats */}
            <div className="space-y-4">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6">
                <div className="flex items-center justify-between mb-2">
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-3xl font-bold text-blue-900">{userProfile.eventsAttended}</span>
                </div>
                <p className="text-sm font-semibold text-blue-900">Events Attended</p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6">
                <div className="flex items-center justify-between mb-2">
                  <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-3xl font-bold text-purple-900">{userProfile.groupsJoined}</span>
                </div>
                <p className="text-sm font-semibold text-purple-900">Groups Joined</p>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="mt-8 space-y-3">
              <button className="w-full py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-colors">
                Browse Events
              </button>
              <button className="w-full py-3 border-2 border-gray-200 text-gray-700 rounded-xl font-semibold hover:border-blue-500 hover:text-blue-600 transition-all">
                My Tickets
              </button>
            </div>
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 overflow-x-hidden p-4 sm:p-6 lg:p-8">
          {/* Events Booked Section */}
          <section className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Events Booked</h2>
              <button className="text-blue-600 hover:text-blue-700 font-semibold text-sm">View All</button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {upcomingEvents.map((event) => (
                <div
                  key={event.id}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all border border-gray-100"
                >
                  <div className="relative h-48">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-3 right-3 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                      BOOKED
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-gray-900 mb-2 line-clamp-1">{event.title}</h3>
                    <div className="space-y-2 text-sm text-gray-600 mb-4">
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4 text-blue-600" />
                        <span>{event.date} • {event.time}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <QrCode className="w-4 h-4 text-blue-600" />
                        <span className="font-mono text-xs">{event.ticketId}</span>
                      </div>
                    </div>
                    <button className="w-full py-2.5 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-colors">
                      View Ticket
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Bucket List Section */}
          <section className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Bucket List</h2>
              <button className="text-blue-600 hover:text-blue-700 font-semibold text-sm">View All</button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {bucketlistEvents.map((event) => (
                <div
                  key={event.id}
                  className={`bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all border border-gray-100 ${
                    event.isOutdated ? 'opacity-75' : ''
                  }`}
                >
                  <div className="relative h-48">
                    <img
                      src={event.image}
                      alt={event.title}
                      className={`w-full h-full object-cover ${event.isOutdated ? 'grayscale' : ''}`}
                    />
                    {event.isOutdated && (
                      <div className="absolute top-3 right-3 bg-gray-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                        PAST EVENT
                      </div>
                    )}
                    <button className="absolute top-3 left-3 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:scale-110 transition-transform">
                      <Heart className="w-5 h-5 text-red-500 fill-red-500" />
                    </button>
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-gray-900 mb-2 line-clamp-1">{event.title}</h3>
                    <p className="text-sm text-gray-600 mb-4">{event.date}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold text-blue-600">{event.price}</span>
                      <button 
                        className={`px-6 py-2.5 rounded-lg font-semibold transition-colors ${
                          event.isOutdated
                            ? 'bg-gray-300 text-gray-600 cursor-not-allowed'
                            : 'bg-blue-600 text-white hover:bg-blue-700'
                        }`}
                        disabled={event.isOutdated}
                      >
                        {event.isOutdated ? 'Expired' : 'Book Now'}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Event History Section */}
          <section>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Event History</h2>
              <button className="text-blue-600 hover:text-blue-700 font-semibold text-sm">View All</button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {eventHistory.map((event) => (
                <div
                  key={event.id}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all border border-gray-100"
                >
                  <div className="relative h-48">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-3 right-3 bg-gray-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                      COMPLETED
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-gray-900 mb-2 line-clamp-1">{event.title}</h3>
                    <p className="text-sm text-gray-600 mb-3">{event.date}</p>
                    <div className="flex items-center space-x-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`w-5 h-5 ${i < event.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300 fill-gray-300'}`}
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                        </svg>
                      ))}
                    </div>
                    <button className="w-full py-2.5 border-2 border-gray-200 text-gray-700 rounded-lg font-semibold hover:border-blue-500 hover:text-blue-600 transition-all flex items-center justify-center space-x-2">
                      <Download className="w-4 h-4" />
                      <span>Download Receipt</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
